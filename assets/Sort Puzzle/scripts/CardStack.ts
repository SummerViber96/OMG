const { ccclass } = cc._decorator;

@ccclass
export default class CardStack extends cc.Component {

    cards = [];

    gameManager = null;

    bgSlot = null;

    init(gm) {
        this.gameManager = gm;
    }

    setup() {

        this.cards = [];
        this.bgSlot = null;

        for (let i = 0; i < this.node.childrenCount; i++) {

            let child = this.node.children[i];

            let bg = child.getComponent("CardBgSlot");

            if (bg) {
                this.bgSlot = bg;
                bg.init(this.gameManager, this);
                bg.node.zIndex = 0;
                bg.node.setSiblingIndex(0);
                continue;
            }

            let card = child.getComponent("Card");

            if (!card) continue;

            card.stack = this;

            this.cards.push(card);
        }

        let cardCount = this.cards.length;

        for (let c = 0; c < cardCount; c++) {

            let card = this.cards[c];

            card.setFaceUp(c === cardCount - 1);

            card.node.y = c * 20;
            card.node.zIndex = c + 1;
        }

        if (this.bgSlot && this.bgSlot.getCard()) {
            let bgCard = this.bgSlot.getCard();
            bgCard.stack = this;
            bgCard.setFaceUp(true);
        }
    }

    isTopCard(card) {

        if (this.bgSlot && this.bgSlot.getCard() === card) {
            return this.cards.length === 0;
        }

        return this.cards[this.cards.length - 1] == card;
    }

    removeTopCard() {

        if (this.bgSlot && this.bgSlot.getCard()) {
            this.bgSlot.clearCard();
            this.notifyIfEmpty();
            return;
        }

        this.cards.pop();

        if (this.cards.length <= 0) {
            this.notifyIfEmpty();
            return;
        }

        let nextTop = this.cards[this.cards.length - 1];

        this.flipCard(nextTop);
    }

    notifyIfEmpty() {

        if (this.cards.length > 0) return;
        if (this.bgSlot && this.bgSlot.hasCard()) return;

        let gm = this.gameManager
            || cc.find("Canvas").getComponent("GameManager");

        if (gm) {
            gm.onStackEmpty(this);
        } else {
            cc.warn("[CardStack] Không tìm thấy GameManager");
        }
    }

    pushCard(card) {

        this.cards.push(card);

        card.stack = this;

        let index = this.cards.length - 1;

        card.node.y = index * 20;
        card.node.zIndex = index;

        card.setFaceUp(true);
    }

    flipCard(card) {

        cc.tween(card.node)
            .to(0.1, {
                scaleX: 0
            })
            .call(() => {

                card.setFaceUp(true);

            })
            .to(0.1, {
                scaleX: 1
            })
            .start();
    }
}