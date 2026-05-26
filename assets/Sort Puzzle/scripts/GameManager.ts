const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property(cc.Prefab)
    cardPrefab: cc.Prefab = null;

    @property(cc.Node)
    board: cc.Node = null;

    /*
        dữ liệu:

        [
            [
                "singer",
                "astronaut",
                "police"
            ],

            [
                "farmer",
                "judge",
                "singer"
            ]
        ]

    */

    leftData = [
        ["singer", "astronaut", "police"],
        ["farmer", "judge", "singer"],
        ["astronaut", "farmer", "judge"],
        ["police", "singer", "astronaut"]
    ];

    rightData = [
        ["judge", "police", "astronaut"],
        ["singer", "astronaut", "farmer"],
        ["judge", "police", "farmer"],
        ["singer", "judge", "police"]
    ];

    start() {

        this.spawnBoard();
    }

    spawnBoard() {

        for (let i = 0; i < this.board.childrenCount; i++) {

            let row = this.board.children[i];

            let leftStack = row.getChildByName("LeftStack");

            let rightStack = row.getChildByName("RightStack");

            this.spawnStack(
                leftStack,
                this.leftData[i]
            );

            this.spawnStack(
                rightStack,
                this.rightData[i]
            );
        }
    }

    spawnStack(parent: cc.Node, data: string[]) {

        parent.removeAllChildren();

        for (let i = 0; i < data.length; i++) {

            let type = data[i];

            let card = cc.instantiate(this.cardPrefab);

            parent.addChild(card);

            card.y = i * 18;

            let cardComp = card.getComponent("Card");

            cardComp.cardType = type;

            this.setCardVisual(card, type);
        }

        parent.getComponent("CardStack").setup();
    }

    setCardVisual(card: cc.Node, type: string) {

        // let label = card.getChildByName("Front")
        //     .getChildByName("Label")
        //     .getComponent(cc.Label);

        // label.string = type;

        // TODO:
        // set avatar sprite theo type
    }
}