const { ccclass, property } = cc._decorator;

@ccclass
export default class Card extends cc.Component {

    @property(cc.Node)
    front: cc.Node = null;

    @property(cc.Node)
    back: cc.Node = null;

    cardType = "";

    isFaceUp = false;

    stack = null;

    private startPos = cc.v3();

    onLoad() {

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    setFaceUp(value: boolean) {

        this.isFaceUp = value;

        this.front.active = value;
        this.back.active = !value;
    }

    onTouchStart() {

        // chỉ cho kéo card top
        if (!this.isFaceUp) return;

        if (!this.stack.isTopCard(this)) return;

        this.startPos = this.node.position.clone();

        this.node.scale = 1.1;

        // convert world pos
        let worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);

        // đưa lên drag layer
        let dragLayer = cc.find("Canvas/DragLayer");

        this.node.parent = dragLayer;

        this.node.position = dragLayer.convertToNodeSpaceAR(worldPos);

        // layer cao nhất
        this.node.zIndex = 9999;
    }

    onTouchMove(e: cc.Event.EventTouch) {

        if (!this.isFaceUp) return;

        if (!this.stack.isTopCard(this)) return;
        this.node.angle = Math.random(-5, 5);
        let delta = e.getDelta();

        this.node.x += delta.x;
        this.node.y += delta.y;
    }

    onTouchEnd() {

        if (!this.isFaceUp) return;

        if (!this.stack.isTopCard(this)) return;

        this.node.scale = 1;

        let slot = this.getDropSlot();

        if (slot) {

            let success = slot.getComponent("Slot").tryAddCard(this);

            if (success) {

                this.stack.removeTopCard();

            } else {

                this.moveBack();
            }

        } else {

            this.moveBack();
        }
    }

    moveBack() {

        let worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);

        this.node.parent = this.stack.node;

        this.node.position =
            this.stack.node.convertToNodeSpaceAR(worldPos);

        cc.tween(this.node)
            .to(0.2, {
                position: this.startPos
            })
            .start();
    }

    getDropSlot() {

        let slots = cc.find("Canvas/Board")
            .getComponentsInChildren(cc.Component);

        for (let s of slots) {

            if (s.node.name != "CenterSlot") continue;

            let box = s.node.getBoundingBoxToWorld();

            let wp = this.node.parent.convertToWorldSpaceAR(this.node.position);

            if (box.contains(wp)) {

                return s.node;
            }
        }

        return null;
    }
}