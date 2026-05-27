const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property(cc.Prefab)
    cardPrefab: cc.Prefab = null;

    @property(cc.Node)
    board: cc.Node = null;
    @property([cc.SpriteFrame])
    astronautSprites: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    farmerSprites: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    singerSprites: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    policeSprites: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    judgeSprites: cc.SpriteFrame[] = [];
    /*
        Hierarchy:

        Canvas
         ├── Board
         │    ├── Row1
         │    │    ├── LeftStack
         │    │    ├── CenterSlot
         │    │    └── RightStack
         │    ├── Row2
         │    ├── Row3
         │    └── Row4
         └── DragLayer
    */

    levelData = [

        {
            mission: "police",

            left: [
                {
                    type: "singer",
                    variant: 1
                },
                {
                    type: "farmer",
                    variant: 2
                },
                {
                    type: "police",
                    variant: 1
                },




            ],

            right: [
                {
                    type: "police",
                    variant: 2
                },
                {
                    type: "police",
                    variant: 4
                },
                {
                    type: "astronaut",
                    variant: 1
                },




            ]
        },

        {
            mission: "singer",

            left: [
                {
                    type: "police",
                    variant: 2
                },
                {
                    type: "farmer",
                    variant: 3
                },
                {
                    type: "astronaut",
                    variant: 2
                },




            ],

            right: [
                {
                    type: "police",
                    variant: 2
                },
                {
                    type: "police",
                    variant: 4
                },
                {
                    type: "singer",
                    variant: 2
                },




            ]
        },

        {
            mission: "astronaut",

            left: [
                {
                    type: "police",
                    variant: 2
                },
                {
                    type: "farmer",
                    variant: 1
                },
                {
                    type: "police",
                    variant: 2
                },




            ],

            right: [
                {
                    type: "police",
                    variant: 2
                },
                {
                    type: "astronaut",
                    variant: 4
                },
                {
                    type: "singer",
                    variant: 3
                },




            ]
        },

        {
            mission: "farmer",

            left: [
                 {
                    type: "police",
                    variant: 2
                },
                   {
                    type: "farmer",
                    variant: 2
                },
                {
                    type: "singer",
                    variant: 4
                },

             

               
            ],

            right: [
                 {
                    type: "police",
                    variant: 2
                },
                  {
                    type: "astronaut",
                    variant: 3
                },
                {
                    type: "police",
                    variant: 3
                },

              

               
            ]
        }
    ];

    start() {

        this.spawnBoard();
    }

    spawnBoard() {

        for (let i = 0; i < this.board.childrenCount; i++) {

            let row = this.board.children[i];

            let data = this.levelData[i];

            if (!data) continue;

            let leftStack = row.getChildByName("LeftStack");

            let rightStack = row.getChildByName("RightStack");

            let slot = row.getChildByName("CenterSlot");

            // init slot
            console.log(data.mission)
            slot.getComponent("Slot")
                .init(data.mission);

            // spawn stack
            this.spawnStack(leftStack, data.left);

            this.spawnStack(rightStack, data.right);
        }
    }

    spawnStack(parent: cc.Node, data: any[]) {

        parent.removeAllChildren();

        for (let i = 0; i < data.length; i++) {

            let info = data[i];

            let card = cc.instantiate(this.cardPrefab);

            parent.addChild(card);

            card.y = i * 18;

            card.zIndex = i;

            let cardComp = card.getComponent("Card");

            cardComp.cardType = info.type;

            cardComp.variant = info.variant;

            this.setCardVisual(
                card,
                info.type,
                info.variant
            );
        }

        parent.getComponent("CardStack")
            .setup();
    }

    setCardVisual(
        card: cc.Node,
        type: string,
        variant: number
    ) {

        let front = card.getChildByName("front");

        let icon = front
            .getChildByName("icon")
            .getComponent(cc.Sprite);

        // let lbTitle = front
        //     .getChildByName("lbTitle")
        //     .getComponent(cc.Label);

        // lbTitle.string = this.getCardName(type);
        console.log(variant, type)
        variant -= 1
        let spriteFrame = null;

        switch (type) {

            case "astronaut":

                spriteFrame =
                    this.astronautSprites[variant];

                break;

            case "farmer":

                spriteFrame =
                    this.farmerSprites[variant];

                break;

            case "singer":

                spriteFrame =
                    this.singerSprites[variant];

                break;

            case "police":

                spriteFrame =
                    this.policeSprites[variant];

                break;

            case "judge":

                spriteFrame =
                    this.judgeSprites[variant];

                break;
        }

        icon.spriteFrame = spriteFrame;
    }

    getCardName(type: string) {

        switch (type) {

            case "astronaut":
                return "Astronaut";

            case "farmer":
                return "Farmer";

            case "singer":
                return "Pop Star";

            case "police":
                return "Public Servant";

            case "judge":
                return "Judge";
        }

        return type;
    }

    // shuffle test
    randomType() {

        let arr = [
            "astronaut",
            "farmer",
            "singer",
            "police",
            "judge"
        ];

        return arr[
            Math.floor(Math.random() * arr.length)
        ];
    }
}