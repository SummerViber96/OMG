import {
    getMissionIds,
    getMissionTitle,
    getNextSpawnMission
} from "./MissionConfig";

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
    footballSprites: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    airplaneSprites: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    esportSprites: cc.SpriteFrame[] = [];

 

    spriteMap: Record<string, cc.SpriteFrame[]> = {};

    spawnQueueIndex = 0;

    static ins: GameManager = null;

    @property
    stackRefillCount = 3;
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
                    type: "football",
                    variant: 3
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
                    type: "airplane",
                    variant: 1
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
                    type: "football",
                    variant: 4
                },
                {
                    type: "police",
                    variant: 3
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
                    type: "football",
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

///////////////////////


            ],

            right: [
                {
                    type: "airplane",
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
                    type: "football",
                    variant: 1
                },
                {
                    type: "farmer",
                    variant: 4
                },
                {
                    type: "singer",
                    variant: 4
                },




            ],

            right: [
                {
                    type: "airplane",
                    variant: 3
                },
                {
                    type: "astronaut",
                    variant: 3
                },
                {
                    type: "airplane",
                    variant: 4
                },




            ]
        }
    ];

    onLoad() {

        GameManager.ins = this;

        let canvas = this.node;
        let dragLayer = canvas.getChildByName("DragLayer");

        if (dragLayer) {
            dragLayer.setSiblingIndex(canvas.childrenCount - 1);
        }

        this.spriteMap = {
            astronaut: this.astronautSprites,
            farmer: this.farmerSprites,
            singer: this.singerSprites,
            police: this.policeSprites,
            football: this.footballSprites,
            airplane: this.airplaneSprites,
            esport: this.esportSprites,
        };
    }

    start() {

        this.spawnBoard();
    }
isCountComplete=0
    onSlotComplete(completedSlot) {

        let oldNode = completedSlot.node;
        let row = oldNode.parent;
        let pos = oldNode.position.clone();

        let newMission = this.getNextMission(completedSlot.missionType);

        let newSlotNode = cc.instantiate(oldNode);

        row.addChild(newSlotNode);

        newSlotNode.name = "CenterSlot";
        newSlotNode.position = pos;
        newSlotNode.scale = 0;

        oldNode.destroy();

        let slot = newSlotNode.getComponent("Slot");

        slot.init(newMission);

        cc.tween(newSlotNode)
            .to(0.2, {
                scale: 1
            }, {
                easing: "backOut"
            })
            .start();
    }

    getNextMission(exclude: string) {

        let result = getNextSpawnMission(
            exclude,
            this.spawnQueueIndex
        );

        this.spawnQueueIndex = result.nextIndex;

        return result.missionId;
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

            let cardNode = this.createCardNode(parent, info);

            cardNode.y = i * 20;
            cardNode.zIndex = i;
        }

        let stackComp = parent.getComponent("CardStack");

        stackComp.init(this);
        stackComp.setup();
    }

    onStackEmpty(stack) {

        let count = this.stackRefillCount;

        for (let i = 0; i < count; i++) {

            let info = this.randomCardInfo();

            if (!info) {
                cc.warn("[GameManager] Không spawn được thẻ — kiểm tra sprite trong Editor");
                return;
            }

            let cardNode = this.createCardNode(stack.node, info);

            cardNode.y = i * 20;
            cardNode.zIndex = i;
        }

        stack.setup();

        let top = stack.cards[stack.cards.length - 1];

        if (top) {

            top.node.scale = 0;

            cc.tween(top.node)
                .to(0.15, {
                    scale: 1
                }, {
                    easing: "backOut"
                })
                .start();
        }
    }

    createCardNode(
        parent: cc.Node,
        info: { type: string; variant: number }
    ): cc.Node {

        let card = cc.instantiate(this.cardPrefab);

        parent.addChild(card);

        let cardComp = card.getComponent("Card");

        cardComp.cardType = info.type;

        cardComp.variant = info.variant;

        this.setCardVisual(
            card,
            info.type,
            info.variant
        );

        return card;
    }

    randomCardInfo(): { type: string; variant: number } {

        let types = this.getSpawnableTypes();

        if (types.length == 0) return null;

        let type = types[
            Math.floor(Math.random() * types.length)
        ];

        let sprites = this.spriteMap[type];
        let variant = Math.floor(Math.random() * sprites.length) + 1;

        return { type, variant };
    }

    getSpawnableTypes(): string[] {

        return getMissionIds().filter(id => {

            let sprites = this.spriteMap[id];

            return sprites && sprites.length > 0;
        });
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
        variant -= 1;

        let sprites = this.spriteMap[type];

        if (!sprites || !sprites[variant]) {
            cc.warn(`[GameManager] Thiếu sprite: type=${type}, variant=${variant + 1}`);
            return;
        }

        icon.spriteFrame = sprites[variant];
    }

    getCardName(type: string) {

        return getMissionTitle(type);
    }

    randomType() {

        let ids = getMissionIds();

        return ids[
            Math.floor(Math.random() * ids.length)
        ];
    }
}