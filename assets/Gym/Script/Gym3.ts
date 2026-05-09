
const { ccclass, property } = cc._decorator;
globalThis.gold = 100
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Node)
    npc: cc.Node = null

    @property(cc.AudioClip)
    soundBG: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundShowPop: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundClick: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundCoin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundConfirm: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundWin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundWarning: cc.AudioClip = null
    @property(cc.Node)
    phaohoa: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Node)
    logo: cc.Node = null
    @property(cc.Node)
    you: cc.Node
    @property(cc.Node)
    monster: cc.Node = null
    @property(cc.Node)
    avtYou: cc.Node = null;
    @property(cc.Node)
    avtMonster: cc.Node = null;
    @property(cc.Node)
    btnBeat: cc.Node = null;
    @property(cc.Node)
    warning: cc.Node = null;
    @property(cc.Node)
    winNode: cc.Node = null;
    @property(cc.Node)
    loseNode: cc.Node = null
    @property(cc.SpriteFrame)
    fillYellow: cc.SpriteFrame = null
    @property(cc.Label)
    texTnoti: cc.Label = null
    @property(cc.Node)
    pop: cc.Node = null
    @property(cc.Node)
    textHalf: cc.Node = null
    arrPosCus = []
    arrCus = []
    arrCrunch = []
    isHind = false
    adChanel = '{{__adv_channels_adapter__}}'
    isEndgame = false
    start() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBG, true, 0.5)


    }
    isFirst = false
    isDelay = false
    delayTime = 0.3
    btn_YouHit() {
        if (this.isDelay) return;
        this.isDelay = true
        this.scheduleOnce(() => {
            this.isDelay = false

        }, this.delayTime)
        this.pop.active = false
        this.you.getComponent(cc.Animation).play()
        if (this.isFirst == false) {
            this.texTnoti.node.parent.active = true
            this.isFirst = true
        }

    }
    monsterHit() {
        this.monster.getComponent(cc.Animation).play()

    }
    startMonster() {
        cc.audioEngine.play(this.soundWarning, false, 1)
        this.monster.getComponent(cc.Animation).play()

        this.schedule(this.monsterHit, 0.7, 1)
        this.warning.active = true

        this.scheduleOnce(() => {
            this.warning.active = false
            // this.npc.active = true
            this.pop.active = true
            this.btnBeat.active = true
            this.btnBeat.scale = 0
            this.scheduleOnce(() => {
                this.startGame()

            }, 0.4)
            cc.tween(this.btnBeat).delay(5).call(() => {
                // this.npc.active = false

            })
                .to(0.25, { scale: 1.1 }, { easing: "backOut" })
                .to(0.1, { scale: 1 })
                .call(() => {


                })
                .start();
        }, 2.5)

    }
    arr50rep = 0
    to50rep() {
        this.arr50rep++
        if (this.arr50rep == 2) {
            this.textHalf.active = true

            this.speedUp()
        }
    }
    isSpeedUp = false
    speedUp() {
        // console.log("speedUp")
        this.isSpeedUp = true
        this.warning.active = true
        this.btnBeat.children[1].active = true
        this.unschedule(this.monsterHit);
        this.schedule(this.monsterHit, 0.4);
        this.avtMonster.getChildByName("fill").getComponent(cc.Sprite).spriteFrame = this.fillYellow;
        this.avtYou.getChildByName("fill").getComponent(cc.Sprite).spriteFrame = this.fillYellow
        this.avtMonster.getComponent("rep").upgradeMonster()
        this.avtYou.getComponent("rep").upgradeMonster()
        this.delayTime = 0.18
    }
    startGame() {
        console.log("startGame")
        this.monsterHit()
        this.schedule(this.monsterHit, 0.6)
    }
    onEndGame(value) {
        if (this.isEndgame) return;
        this.btnBeat.getComponent(cc.Button).enabled = false
        this.isEndgame = true
        if (value) {
            this.winNode.active = true
            this.phaohoa.active = true
        }
        else {
            this.loseNode.active = true
        }
        this.linkToStore.active = true
    }
    protected update(dt: number): void {
        if (this.isSpeedUp == false) {
            if (globalThis.youRep > globalThis.monsterRep) {
                this.texTnoti.string = "You're leading!"

            }
            else {
                this.texTnoti.string = "The Beast is pulling ahead!"

            }
        }
        // else {
        //     this.texTnoti.string = "HALFWAY — TAP FASTER!"

        // }

    }
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1

        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false


        this.camera.node.position = cc.v3(0, 0)
        // this.npc.scale = (logic) ? 1.7 : 1
        // this.npc.y = (logic) ? -700 : 0
        this.endCard.scale = (logic) ? 1.5 : 0.7
        this.logo.scale = (logic) ? 1.5 : 1

        this.logo.getComponent(cc.Widget).top = 48
        // this.barCoin.y=(logic)?400:470
        if (logic == true) {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;

            // this.camera.node.position = cc.v3(-70, 0)

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            this.camera.zoomRatio = 1.7
            this.camera.node.position = cc.v3(150, 0)
            this.phaohoa.scale = (logic) ? 7 : 3
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.logo.getComponent(cc.Widget).top = 48 + 30
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.4

            }
        }
        else {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.8
            }
        }


    }
}
