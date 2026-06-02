const { ccclass, property } = cc._decorator;

@ccclass
export default class Card extends cc.Component {

    @property(cc.Node)
    front: cc.Node = null;

    @property(cc.Node)
    back: cc.Node = null;

    cardType = "";
    variant = 0;
    isFaceUp = false;

    stack = null;

    private stackStartPos = cc.v3();
    private dragLayer: cc.Node = null;
    private isDragging = false;
    private isReturning = false;
    private dragAngle = 0;
    private movedDistance = 0;

    private static MIN_DRAG_DIST = 12;
    gamePlay = null;
    onLoad() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameManager")

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    setFaceUp(value: boolean) {

        this.isFaceUp = value;

        this.front.active = value;
        this.back.active = !value;
    }

    onTouchStart(e: cc.Event.EventTouch) {

        if (!this.isFaceUp) return;

        if (!this.stack || !this.stack.isTopCard(this)) return;

        // Đang bay về / đang kéo — bỏ qua click thứ 2 (double click)
        if (this.isReturning || this.isDragging) return;

        // Thẻ còn kẹt trên DragLayer từ lần trước → đưa về stack trước
        let dragLayer = cc.find("Canvas/DragLayer");
this.gamePlay.offGuild()
        if (dragLayer && this.node.parent === dragLayer) {
            this.syncStackStartPos();
            this.forceBackToStack();
            return;
        }

        cc.Tween.stopAllByTarget(this.node);

        this.isDragging = true;
        this.movedDistance = 0;
        this.stackStartPos = this.node.position.clone();
        this.dragAngle = Math.random() * 10 - 5;
        this.dragLayer = dragLayer;

        if (!this.dragLayer) {
            this.isDragging = false;
            return;
        }

        let worldPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));

        this.node.parent = this.dragLayer;
        this.node.position = this.dragLayer.convertToNodeSpaceAR(worldPos);
        this.node.angle = this.dragAngle;
        this.node.scale = 1.1;

        this.bringToFront(this.dragLayer);
    }

    onTouchMove(e: cc.Event.EventTouch) {

        if (!this.isFaceUp || !this.isDragging || this.isReturning) return;

        if (!this.stack || !this.stack.isTopCard(this)) return;

        let delta = e.getDelta();

        this.movedDistance += Math.sqrt(
            delta.x * delta.x + delta.y * delta.y
        );

        this.node.x += delta.x;
        this.node.y += delta.y;
    }

    onTouchEnd() {

        this.onTouchFinish(false);
    }

    onTouchCancel() {

        this.onTouchFinish(true);
    }

    onTouchFinish(cancelled: boolean) {

        if (!this.isDragging || this.isReturning) return;


        this.isDragging = false;
        this.node.scale = 1;

        if (!this.stack || !this.stack.isTopCard(this)) {
            this.forceBackToStack();
            return;
        }
        this.gamePlay.checkMove()
     
        // Click / double-click không kéo → chỉ trả về, không thả vào slot
        if (this.movedDistance < Card.MIN_DRAG_DIST || cancelled) {
            this.moveBack();
            return;
        }

        let slot = this.getDropSlot();

        if (slot) {

            let success = slot.getComponent("Slot").tryAddCard(this);

            if (success) {

                this.stack.removeTopCard();
                this.dragLayer = null;
                this.movedDistance = 0;

            } else {

                this.moveBack();
            }

            return;
        }

        let bgSlot = this.getDropBgSlot();

        if (bgSlot && bgSlot.tryAddCard(this)) {

            let sourceStack = this.stack;

            sourceStack.removeTopCard();
            this.stack = bgSlot.stack;
            this.dragLayer = null;
            this.movedDistance = 0;
            return;
        }

        this.moveBack();
    }

    moveBack() {

        if (!this.stack) return;
        cc.audioEngine.play(this.gamePlay.soundWrong, false, 0.5)
        let dragLayer = this.dragLayer || cc.find("Canvas/DragLayer");

        if (!dragLayer) return;
        cc.Tween.stopAllByTarget(this.node);
        this.isReturning = true;

        if (this.node.parent !== dragLayer) {

            let worldPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));

            this.node.parent = dragLayer;
            this.node.position = dragLayer.convertToNodeSpaceAR(worldPos);
        }

        this.bringToFront(dragLayer);

        let targetWorld = this.stack.node.convertToWorldSpaceAR(this.stackStartPos);
        let targetInDrag = dragLayer.convertToNodeSpaceAR(targetWorld);

        cc.tween(this.node)
            .to(0.2, {
                position: targetInDrag,
                angle: 0,
                scale: 1
            }, {
                easing: "sineOut"
            })
            .call(() => {
                this.finishMoveBack();
            })
            .start();
    }

    finishMoveBack() {

        if (!this.stack) {
            this.isReturning = false;
            return;
        }

        if (this.stack.bgSlot && this.stack.bgSlot.getCard() === this) {

            this.node.parent = this.stack.bgSlot.node;
            this.node.position = this.stackStartPos;
            this.node.angle = 0;
            this.node.scale = 1;
            this.node.zIndex = 1;

        } else {

            this.node.parent = this.stack.node;
            this.node.position = this.stackStartPos;
            this.node.angle = 0;
            this.node.scale = 1;

            let z = Math.max(0, this.stack.cards.length - 1);

            this.node.zIndex = z;
            this.node.setSiblingIndex(this.stack.node.childrenCount - 1);
        }

        this.dragLayer = null;
        this.isReturning = false;
        this.movedDistance = 0;
    }

    syncStackStartPos() {

        if (!this.stack) return;

        if (this.stack.bgSlot && this.stack.bgSlot.getCard() === this) {
            this.stackStartPos = cc.v3(0, 0, 0);
            return;
        }

        let index = this.stack.cards.indexOf(this);

        if (index < 0) {
            index = this.stack.cards.length - 1;
        }

        this.stackStartPos = cc.v3(0, index * 20, 0);
    }

    forceBackToStack() {

        cc.Tween.stopAllByTarget(this.node);

        this.isDragging = false;
        this.isReturning = false;
        this.movedDistance = 0;

        if (!this.stack) return;

        if (this.stack.bgSlot && this.stack.bgSlot.getCard() === this) {

            this.node.parent = this.stack.bgSlot.node;
            this.node.position = this.stackStartPos;
            this.node.angle = 0;
            this.node.scale = 1;
            this.node.zIndex = 1;

        } else {

            this.node.parent = this.stack.node;
            this.node.position = this.stackStartPos;
            this.node.angle = 0;
            this.node.scale = 1;

            let z = Math.max(0, this.stack.cards.length - 1);

            this.node.zIndex = z;
            this.node.setSiblingIndex(this.stack.node.childrenCount - 1);
        }

        this.dragLayer = null;
    }

    bringToFront(layer: cc.Node) {

        this.node.zIndex = 9999;
        this.node.setSiblingIndex(layer.childrenCount - 1);
    }

    getDropSlot() {

        let slots = cc.find("Canvas/Board")
            .getComponentsInChildren(cc.Component);

        let wp = this.node.convertToWorldSpaceAR(cc.v2(0, 0));

        for (let s of slots) {

            if (s.node.name != "CenterSlot") continue;

            let box = s.node.getBoundingBoxToWorld();

            if (box.contains(wp)) {
                return s.node;
            }
        }

        return null;
    }

    getDropBgSlot() {

        let board = cc.find("Canvas/Board");

        if (!board) return null;

        let wp = this.node.convertToWorldSpaceAR(cc.v2(0, 0));

        for (let i = 0; i < board.childrenCount; i++) {

            let row = board.children[i];

            for (let name of ["LeftStack", "RightStack"]) {

                let stackNode = row.getChildByName(name);

                if (!stackNode) continue;

                let bg = stackNode.getComponentInChildren("CardBgSlot");

                if (bg && bg.canAcceptDrop(wp)) {
                    return bg;
                }
            }
        }

        return null;
    }
}
