globalThis.idString = 0;
globalThis.idCharm = 0;
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.AudioClip)
    soundWin: cc.AudioClip = null

    @property(cc.Node)
    scene1: cc.Node = null
    @property(cc.Node)
    scene2: cc.Node = null
    @property(cc.Node)
    stringNode: cc.Node = null

    @property(cc.Node)
    plate: cc.Node = null
    @property(cc.Node)
    hand2: cc.Node = null
    @property(cc.Node)
    hand3: cc.Node = null
    @property(cc.Node)
    charmNode: cc.Node = null
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.Label)
    title: cc.Label = null
    @property(cc.Node)
    listCordRound: cc.Node = null;
    @property(cc.Node)
    stringBot: cc.Node = null;
    @property(cc.Node)
    listKey: cc.Node = null
    @property(cc.Node)
    listPet: cc.Node = null
    @property(cc.Node)
    endGameNode: cc.Node = null
    @property(cc.Node)
    linkToStore: cc.Node = null
    @property(cc.Node)
    btnOk4: cc.Node = null
    @property(cc.Node)
    phaoho: cc.Node = null
    @property(cc.AudioClip)
    soundClick: cc.AudioClip = null
    @property(cc.Node)
    handCard: cc.Node = null
    @property(cc.Node)
    bgNen: cc.Node = null
    @property(cc.Node)
    vongDefault: cc.Node = null
    // @property(cc.Node)
    // listCard
    adChanel = '{{__adv_channels_adapter__}}'

    selectedKeychainIndex: number = -1;
    lastMatchPercent: number = 0;

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2();
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    }
    start() {
        cc.audioEngine.play(this.soundBg, true, 0.5)
        cc.game.setFrameRate(60);
    }


    btn_startGame() {
        this.scene2.active = true
        cc.audioEngine.play(this.soundClick, false, 1)
        this.bgNen.active = true;
        this.bgNen.opacity = 0;
        cc.tween(this.bgNen).to(0.4, { opacity: 255 }).start()
        this.vongDefault.parent = this.node
        cc.tween(this.vongDefault).to(0.4, { position: cc.v3(330, 820, 0), scale: 0.28 }).start()
        cc.tween(this.scene1).to(0.4, { opacity: 0 }).call(() => {
            this.scene1.active = false
            this.hand2.active = true
            this.vongDefault.getComponent(cc.Button).enabled = true;
        }).start()
    }
    btn_cord(event) {
        let btn = event.currentTarget;
        cc.audioEngine.play(this.soundClick, false, 1)

        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;
        cc.tween(this.stringNode).to(0.4, { opacity: 0 }).start()
        this.stringNode.active = false
        this.charmNode.active = true
        this.title.string = "CHOOSE CHARMS"
        this.hand3.active = true;

    }
    btn_cord2(event) {
        let btn = event.currentTarget;
        cc.audioEngine.play(this.soundClick, false, 1)

        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;
        this.stringNode.active = false;
        cc.tween(this.charmNode).to(0.4, { opacity: 0 }).call(() => {
            this.charmNode.active = false;
        }).start()
        cc.tween(this.plate).to(0.4, { position: cc.v3(0, 230, 0) }).start()
        this.title.string = "MAKE BRACELET"
        this.startGame2();
        this.scheduleOnce(() => {
            this.hand3.active = true;
        }, 0.4)

    }
    startGame2() {
        let id = globalThis.idString;
        console.log("id", id);

        this.scheduleOnce(() => {
            let stringAround = this.listCordRound.children[id];
            stringAround.active = true;
            stringAround.opacity = 0;
            this.charmNode.getComponent("CharmGame").OffEvent();
            cc.tween(stringAround).to(0.4, { opacity: 255 }).start()
            const cordGame = this.listCordRound.getComponent("CordRoundGame");
            if (cordGame) {
                cordGame.startBraceletMode();
            }
        }, 0.4)
        if (this.stringBot) {
            this.stringBot.active = false;
        }

    }
    btn_cord3(event) {
        let btn = event.currentTarget;
        cc.audioEngine.play(this.soundClick, false, 1)

        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;
        this.plate.active = false;

        const cordGame = this.listCordRound.getComponent("CordRoundGame");
        if (cordGame) {
            cordGame.finishBraceletPhase();
            cordGame.liftBracelet(cc.v3(0, 230, 0), 0.4);
        } else {
            cc.tween(this.listCordRound).to(0.4, { position: cc.v3(0, 230, 0) }).start();
        }
        this.scheduleOnce(() => {
            this.title.string = "KEY CHAIN";
            let lock = this.listCordRound.children[globalThis.idString].children[2]
            lock.opacity = 0;
            lock.active = true;
            cc.tween(lock).to(0.4, { opacity: 255 }).start();
            this.listKey.active = true;
        }, 0.8)
    }
    btn_choseCard(event, value) {
        this.selectedKeychainIndex = parseInt(value, 10);
        this.btnOk4.active = true;
        cc.audioEngine.play(this.soundClick, false, 1)

        for (let child of this.listPet.children) {
            child.active = false;
        }
        this.handCard.active = false;
        switch (value) {
            case "0":
                this.listPet.children[0].active = true;
                this.listPet.children[0].getComponent(cc.Animation).play();
                break;
            case "1":
                this.listPet.children[1].active = true;
                this.listPet.children[1].getComponent(cc.Animation).play();

                break;
            case "2":
                this.listPet.children[2].active = true;
                this.listPet.children[2].getComponent(cc.Animation).play();

                break;
        }
    }
    btn_ok4(event) {
        let btn = event.currentTarget;
        cc.audioEngine.play(this.soundClick, false, 1)

        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;

        const cordGame = this.listCordRound.getComponent("CordRoundGame");
        if (cordGame) {
            this.lastMatchPercent = cordGame.finishAndCompare(this.selectedKeychainIndex);
        }

        this.phaoho.active = true;
        cc.audioEngine.play(this.soundWin, false, 1)

        this.scheduleOnce(() => {
            this.endGame();
        }, 2)
    }
    private animateMatchPercent(targetPercent: number, duration: number = 1) {
        if (!this.title) {
            return;
        }
        const counter = { value: 0 };
        cc.tween(counter)
            .to(duration, { value: targetPercent }, {
                onUpdate: () => {
                    this.title.string = "COMPLETE  •  " + Math.round(counter.value) + "%";
                }
            })
            .start();
    }

    endGame() {
        if (this.selectedKeychainIndex == 1) {
            this.lastMatchPercent += 30
        }
        this.animateMatchPercent(this.lastMatchPercent);

        this.scheduleOnce(() => {
            this.endGameNode.active = true;
            this.linkToStore.active = true;
        }, 1)
    }

    // update (dt) {}
}
