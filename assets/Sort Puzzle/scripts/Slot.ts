const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot extends cc.Component {

    @property(cc.Label)
    lbTitle: cc.Label = null;

    @property(cc.Label)
    lbNum: cc.Label = null;

    @property(cc.Node)
    cardContainer: cc.Node = null;
    @property(cc.Node)
    upgradeUI: cc.Node[] = []
    @property(cc.Label)
    lbNum2: cc.Label = null;
    @property(cc.Label)
    lbTitle2: cc.Label = null;

    missionType = "";
    posNumLocal = cc.v3(-47, 113)
    cards = [];

    maxCard = 4;

    init(type: string) {

        this.missionType = type;
// console.log("type",type)
        this.lbTitle.string = this.getMissionName(type);
        this.lbTitle2.string = this.getMissionName(type);

        this.updateCounter();
    }

    tryAddCard(card) {

        // sai loại
        if (card.cardType != this.missionType) {

            this.shake();

            return false;
        }

        // full
        if (this.cards.length >= this.maxCard) {

            return false;
        }

        this.addCard(card);

        return true;
    }
    upgradeLayout() {

    }

    addCard(card) {

        this.cards.push(card);

        // convert world pos
        let worldPos =
            card.node.parent.convertToWorldSpaceAR(card.node.position);

        // move vào container
        card.node.parent = this.cardContainer;

        card.node.position =
            this.cardContainer.convertToNodeSpaceAR(worldPos);

        let index = this.cards.length - 1;

        // visual stack
        let targetPos = cc.v3(
            0,
              0
        );

        cc.tween(card.node)
            .to(0.15, {
                position: targetPos,
                scale: 0.9,
                angle:0
            }, {
                easing: "backOut"
            })
            .start();

        // update UI
        this.updateCounter();

        this.bumpCounter();

        this.checkComplete();
    }

    updateCounter() {
        if (this.cards.length == 1) {
            for (let i = 0; i < this.upgradeUI.length; i++) {
                this.upgradeUI[i].active = true
            }
            this.lbNum.node.active=false;
            this.lbTitle.node.active=false
        }
        this.lbNum.string =
            `${this.cards.length}/${this.maxCard}`;
        this.lbNum2.string =
            `${this.cards.length}/${this.maxCard}`;
    }

    bumpCounter() {

        this.lbNum.node.scale = 1.2;

        cc.tween(this.lbNum.node)
            .to(0.1, {
                scale: 1
            })
            .start();
    }

    checkComplete() {

        if (this.cards.length < this.maxCard) return;

        this.success();
    }

    success() {

        for (let i = 0; i < this.cards.length; i++) {

            let card = this.cards[i];

            cc.tween(card.node)
                .delay(i * 0.05)
                .parallel(
                    cc.tween().to(0.25, {
                        scale: 0
                    }),

                    cc.tween().by(0.25, {
                        y: 100
                    })
                )
                .call(() => {

                    card.node.destroy();

                })
                .start();
        }

        this.cards = [];

        this.updateCounter();

        this.playCompleteEffect();
    }

    playCompleteEffect() {

        cc.tween(this.node)
            .to(0.1, {
                scale: 1.05
            })
            .to(0.1, {
                scale: 1
            })
            .start();

        cc.log("MISSION COMPLETE");
    }

    shake() {

        cc.tween(this.node)
            .by(0.05, { x: -10 })
            .by(0.05, { x: 20 })
            .by(0.05, { x: -20 })
            .by(0.05, { x: 10 })
            .start();
    }

    getMissionName(type: string) {

        switch (type) {

            case "astronaut":
                return "Astronauts";

            case "farmer":
                return "Farmers";

            case "singer":
                return "Pop stars";

            case "police":
                return "Public servants";

            case "judge":
                return "Judges";
        }

        return type;
    }
}