const { ccclass } = cc._decorator;

@ccclass
export default class Slot extends cc.Component {

    cards = [];

    maxCard = 4;

    tryAddCard(card) {

        if (this.cards.length >= this.maxCard) {
            return false;
        }

        if (this.cards.length > 0) {

            let type = this.cards[0].cardType;

            if (type != card.cardType) {

                this.shake();

                return false;
            }
        }

        this.addCard(card);

        return true;
    }

    addCard(card) {

        this.cards.push(card);

        card.node.parent = this.node;

        let index = this.cards.length - 1;

        cc.tween(card.node)
            .to(0.15, {
                position: cc.v3(0, index * 25)
            })
            .start();

        this.checkComplete();
    }

    checkComplete() {

        if (this.cards.length < 4) return;

        this.success();
    }

    success() {

        for (let c of this.cards) {

            cc.tween(c.node)
                .parallel(
                    cc.tween().to(0.25, {
                        scale: 0
                    }),
                    cc.tween().by(0.25, {
                        y: 100
                    })
                )
                .call(() => {
                    c.node.destroy();
                })
                .start();
        }

        this.cards = [];
    }

    shake() {

        cc.tween(this.node)
            .by(0.05, { x: -10 })
            .by(0.05, { x: 20 })
            .by(0.05, { x: -20 })
            .by(0.05, { x: 10 })
            .start();
    }
}