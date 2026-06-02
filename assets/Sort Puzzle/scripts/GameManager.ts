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
    endGameNode: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null
    @property(cc.Node)
    phaohoa: cc.Node = null
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

    @property([cc.SpriteFrame])
    vikingSprites: cc.SpriteFrame[] = [];
    @property([cc.SpriteFrame])
    armySprites: cc.SpriteFrame[] = [];
    @property(cc.Node)
    putGame: cc.Node = null
    @property(cc.Node)
    handGuild: cc.Node = null

    //sound
    @property(cc.AudioClip)
    soundWin: cc.AudioClip = null
    @property(cc.AudioClip)
    soundComplete: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundClickCard: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundWrong: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.AudioClip)
    soundTouchCard: cc.AudioClip = null
    @property(cc.AudioClip)
    soundLose: cc.AudioClip = null
    @property(cc.Prefab)
    preDone: cc.AudioClip = null;
    @property(cc.Prefab)
    preWrong: cc.Prefab = null;
    @property(cc.Node)
    boardNode: cc.Node = null
    @property(cc.Label)
    lbMoveCount: cc.Label = null;
    @property(cc.Prefab)
    cardBg:cc.Prefab = null
    countMove = 30

    spriteMap: Record<string, cc.SpriteFrame[]> = {};
    adChanel = '{{__adv_channels_adapter__}}'

    spawnQueueIndex = 0;

    /** Thẻ đã có trên bàn (setup + spawn random), key = "type:variant" */
    appearedCards = new Set<string>();

    completedMissionCount = 0;

    @property
    missionsToWin = 3;

    gameEnded = false;

    static ins: GameManager = null;

    @property
    stackRefillCount = 3;

    @property({ tooltip: "Tỷ lệ chiếm diện tích mặt thẻ (0–1), ví dụ 0.92 = ~92% chiều rộng/cao" })
    iconFillRatio = 0.92;
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
    checkMove() {
        this.countMove--;
        if (this.countMove == 0) {
            this.endGame(false)
        }
        this.lbMoveCount.string = "Moves: " + this.countMove.toString()
    }
    addWrong(pos) {
        let fix = cc.instantiate(this.preWrong)
        fix.parent = this.boardNode;
        fix.position = pos
    }
    addDone(pos) {
        let fix = cc.instantiate(this.preDone)
        fix.parent = this.boardNode;
        fix.position = pos
    }
    onLoad() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.5)
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
            vikings: this.vikingSprites,
            army: this.armySprites,
            // esport: this.esportSprites,
        };
        this.scheduleOnce(() => {
            this.offGuild
            // this.putGame.active = false
        }, 3)
    }
    isOffGuild = false

    offGuild() {
        if (this.isOffGuild) return;
        this.isOffGuild = true
        cc.tween(this.putGame).to(0.2, { opacity: 0 }).call(() => {
            this.putGame.active = false
            // this.handGuild.active = true
        }).start()
    }

    start() {
        cc.view.setDesignResolutionSize(
            1080,
            1920,
            cc.ResolutionPolicy.SHOW_ALL
        );
        GameManager.ins = this;
        this.appearedCards.clear();
        this.completedMissionCount = 0;
        this.gameEnded = false;
        this.spawnBoard();
    }

    onSlotComplete(completedSlot) {

        this.completedMissionCount++;

        if (this.completedMissionCount >= this.missionsToWin) {
            this.endGame(true);
            return;
        }
        cc.audioEngine.play(this.soundComplete, false, 1)
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

        for (let i = parent.childrenCount - 1; i >= 0; i--) {

            let child = parent.children[i];

            if (child.getComponent("CardBgSlot")) continue;

            child.destroy();
        }

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

        if (this.gameEnded) return;

        let spawned = 0;

        for (let i = 0; i < this.stackRefillCount; i++) {

            let info = this.randomCardInfo();

            if (!info) break;

            let cardNode = this.createCardNode(stack.node, info);

            cardNode.y = i * 20;
            cardNode.zIndex = i;
            spawned++;
        }

        stack.setup();

        if (this.isSpawnPoolEmpty()) {
            this.ensureBgSlot(stack);
            stack.setup();
        }

        if (spawned === 0) return;

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

    isSpawnPoolEmpty(): boolean {
        return this.getUnappearedCardOptions().length === 0;
    }

    ensureBgSlot(stack) {

        if (!this.cardBg) {
            cc.warn("[GameManager] Chưa gán prefab cardBg trong Editor");
            return;
        }

        if (stack.bgSlot || stack.node.getComponentInChildren("CardBgSlot")) {
            return;
        }

        let bgNode = cc.instantiate(this.cardBg);

        stack.node.addChild(bgNode, 0);
        bgNode.setPosition(0, 0);
        bgNode.zIndex = 0;

        let bgComp = bgNode.getComponent("CardBgSlot");

        if (!bgComp) {
            bgComp = bgNode.addComponent("CardBgSlot");
        }

        let icon = bgNode.getChildByName("icon");

        if (icon) {
            bgComp.placeholder = icon;
        }

        bgComp.init(this, stack);
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

        this.markCardAppeared(info.type, info.variant);

        this.setCardVisual(
            card,
            info.type,
            info.variant
        );

        return card;
    }

    randomCardInfo(): { type: string; variant: number } {

        let options = this.getUnappearedCardOptions();

        if (options.length === 0) return null;

        return options[
            Math.floor(Math.random() * options.length)
        ];
    }

    cardKey(type: string, variant: number): string {
        return `${type}:${variant}`;
    }

    markCardAppeared(type: string, variant: number) {
        this.appearedCards.add(this.cardKey(type, variant));
    }

    hasCardAppeared(type: string, variant: number): boolean {
        return this.appearedCards.has(this.cardKey(type, variant));
    }

    /** Chỉ các thẻ (type + variant) chưa từng spawn / setup */
    getUnappearedCardOptions(): { type: string; variant: number }[] {

        let options: { type: string; variant: number }[] = [];

        for (let type of this.getSpawnableTypes()) {

            let sprites = this.spriteMap[type];

            for (let v = 1; v <= sprites.length; v++) {

                if (!this.hasCardAppeared(type, v)) {
                    options.push({ type, variant: v });
                }
            }
        }

        return options;
    }

    getSpawnableTypes(): string[] {

        return getMissionIds().filter(id => {

            let sprites = this.spriteMap[id];

            return sprites && sprites.length > 0;
        });
    }

    endGame(value) {

        if (this.gameEnded) return;
        if (value == true) {
            cc.audioEngine.play(this.soundWin, false, 1)

        }
        else {
            cc.audioEngine.play(this.soundLose, false, 1)

        }
        this.phaohoa.active = true;
        this.endGameNode.active = true;
        this.linkToStore.active = true;
        this.gameEnded = true;

        let canvas = cc.find("Canvas");

        if (canvas) {
            let gameDonut = canvas.getComponent("GameDonut") as any;
            if (gameDonut && gameDonut.onEndGame) {
                gameDonut.onEndGame(true);
                return;
            }
        }

        cc.log("[GameManager] Hoàn thành", this.missionsToWin, "mission — kết thúc game");
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
        this.fitIconToCard(icon);
    }

    fitIconToCard(icon: cc.Sprite) {

        if (!icon || !icon.spriteFrame) return;

        icon.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        icon.node.setScale(0.9);

        let front = icon.node.parent;
        if (!front) return;

        let maxWidth = front.width * this.iconFillRatio;
        let maxHeight = front.height * this.iconFillRatio;

        let rect = icon.spriteFrame.getRect();
        let scale = Math.min(
            maxWidth / rect.width,
            maxHeight / rect.height
        );

        icon.node.setContentSize(
            rect.width * scale,
            rect.height * scale
        );
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