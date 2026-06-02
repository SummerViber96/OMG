const { ccclass, property } = cc._decorator;

@ccclass
export default class CardBgSlot extends cc.Component {

    @property(cc.Node)
    placeholder: cc.Node = null;

    heldCard = null;
    stack = null;
    gameManager = null;

    init(gm, stack) {
        this.gameManager = gm;
        this.stack = stack;
        if (!this.placeholder) {
            this.placeholder = this.node.getChildByName("icon");
        }
        this.keepPlaceholderVisible();
    }

    hasCard(): boolean {
        return !!this.heldCard;
    }

    getCard() {
        return this.heldCard;
    }

    canAcceptDrop(worldPos: cc.Vec2): boolean {
        if (this.hasCard()) return false;
        return this.node.getBoundingBoxToWorld().contains(worldPos);
    }

    tryAddCard(card): boolean {
        if (this.hasCard() || !card || !card.stack) return false;
        if (card.stack === this.stack) return false;
        if (!card.stack.isTopCard(card)) return false;

        this.placeCard(card);
        return true;
    }

    placeCard(card) {
        this.heldCard = card;

        let worldPos =
            card.node.parent.convertToWorldSpaceAR(card.node.position);

        card.node.parent = this.node;
        card.node.position = this.node.convertToNodeSpaceAR(worldPos);
        card.setFaceUp(true);
        card.node.zIndex = 1;

        cc.tween(card.node)
            .to(0.15, {
                position: cc.v3(0, 0, 0),
                scale: 1,
                angle: 0
            }, {
                easing: "backOut"
            })
            .start();

        this.keepPlaceholderVisible();
    }

    clearCard() {
        this.heldCard = null;
        this.keepPlaceholderVisible();
    }

    /** Thẻ nền luôn hiển thị; thẻ chơi đặt phía trên */
    keepPlaceholderVisible() {
        if (!this.placeholder) return;

        this.placeholder.active = true;
        this.placeholder.zIndex = 0;
        this.node.zIndex = 0;
    }
}
