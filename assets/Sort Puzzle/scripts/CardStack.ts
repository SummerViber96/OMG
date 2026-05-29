const { ccclass } = cc._decorator;

@ccclass
export default class CardStack extends cc.Component {

    cards = [];

    gameManager = null;

    init(gm) {
        this.gameManager = gm;
    }

    setup() {

        this.cards = [];

        for (let i = 0; i < this.node.childrenCount; i++) {

            let card = this.node.children[i]
                .getComponent("Card");

            if (!card) continue;

            card.stack = this;

            this.cards.push(card);

            // chỉ card top được mở
            card.setFaceUp(i == this.node.childrenCount - 1);

            card.node.y = i * 20;
            card.node.zIndex = i;
        }
    }

    isTopCard(card) {

        return this.cards[this.cards.length - 1] == card;
    }

    removeTopCard() {

        this.cards.pop();

        if (this.cards.length <= 0) {

            let gm = this.gameManager
                || cc.find("Canvas").getComponent("GameManager");

            if (gm) {
                gm.onStackEmpty(this);
            } else {
                cc.warn("[CardStack] Không tìm thấy GameManager");
            }

            return;
        }

        let nextTop = this.cards[this.cards.length - 1];

        this.flipCard(nextTop);
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