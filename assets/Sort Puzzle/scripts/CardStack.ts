const { ccclass } = cc._decorator;

@ccclass
export default class CardStack extends cc.Component {

    cards = [];

    start() {

        this.setup();
    }

    setup() {

        for (let i = 0; i < this.node.childrenCount; i++) {

            let card = this.node.children[i]
                .getComponent("Card");

            card.stack = this;

            this.cards.push(card);

            // chỉ card top được mở
            card.setFaceUp(i == this.node.childrenCount - 1);

            card.node.y = i * 20;
        }
    }

    isTopCard(card) {

        return this.cards[this.cards.length - 1] == card;
    }

    removeTopCard() {

        this.cards.pop();

        if (this.cards.length <= 0) return;

        let nextTop = this.cards[this.cards.length - 1];

        this.flipCard(nextTop);
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