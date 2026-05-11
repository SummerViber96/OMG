
const { ccclass, property } = cc._decorator;
globalThis.gold = 100
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Node)
    npc: cc.Node = null
    @property(cc.Node)
    bg:cc.Node=null

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
    soundOver: cc.AudioClip = null
    @property(cc.AudioClip)
    soundPut: cc.AudioClip = null
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
    // @property(cc.Label)
    // texTnoti: cc.Label = null
    @property(cc.Node)
    pop: cc.Node = null
    @property(cc.Node)
    textHalf: cc.Node = null
    @property(cc.Node)
    crowHero: cc.Node = null;
    @property(cc.Node)
    crowMonster: cc.Node = null
    @property([cc.AudioClip])
    listSoundHero: cc.AudioClip[] = []
    @property([cc.AudioClip])
    listSoundMonster: cc.AudioClip[] = []
    @property(cc.Node)
    endCard: cc.Node = null
    @property(cc.Node)
    countDown:cc.Node=null
    arrPosCus = []
    arrCus = []
    arrCrunch = []
    isHind = false
    adChanel = '{{__adv_channels_adapter__}}'
    isEndgame = false
    private isHeroLead: boolean = false;

    private heroAnim = null;
    private monsterAnim = null;
    start() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBG, true, 0.5)
        this.heroAnim = this.crowHero.getComponent(cc.Animation);
        this.monsterAnim = this.crowMonster.getComponent(cc.Animation);

    }
    isFirst = false
    isDelay = false
    delayTime = 0.15
    countHit = 3
    rdNext = 4
    countSoundHero = 0
    btn_YouHit() {
        if (this.isDelay) return;
        this.isDelay = true
        this.scheduleOnce(() => {
            this.isDelay = false

        }, this.delayTime)
        cc.audioEngine.play(this.soundConfirm, false, 1)

        // cc.audioEngine.play(this.soundPut, false, 1)
        // let rd = Math.floor(Math.random() * 1)
        this.countHit++
        if (this.countHit == this.rdNext) {
            this.countHit=0
            this.rdNext = Math.floor(Math.random() * 2) + 4
            cc.audioEngine.play(this.listSoundHero[this.countSoundHero], false, 1)
            this.countSoundHero++
            if (this.countSoundHero >= this.listSoundHero.length) {
                this.countSoundHero = 0
            }
        }

        this.pop.active = false
        this.you.getComponent(cc.Animation).play()
        if (this.isFirst == false) {
            // this.texTnoti.node.parent.active = true
            this.isFirst = true
            this.btnBeat.getChildByName("hand").active = false
        }

    }
    monsterHit() {
        this.monster.getComponent(cc.Animation).play()

    }
    startMonster() {
        this.monster.getComponent(cc.Animation).play()
        this.crowMonster.active = true
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
        this.monster.getComponent("rep").upgradeMonster()
        this.you.getComponent("rep").upgradeMonster()
        this.delayTime = 0.1
    }
    startGame() {
        console.log("startGame")
        this.monsterHit()
        this.schedule(this.monsterHit, 0.6)
    }
    onEndGame(value) {
        if (this.isEndgame) return;
        this.unscheduleAllCallbacks()
        this.monster.getComponent(cc.Animation).stop()
        this.btnBeat.getComponent(cc.Button).enabled = false
        this.you.getComponent("rep").stopFill()
        this.monster.getComponent("rep").stopFill()

        this.isEndgame = true
        if (value) {
            this.winNode.active = true
            this.phaohoa.active =true
                cc.audioEngine.play(this.soundWin, false, 1)
        }
        else {
            this.loseNode.active = true
            cc.audioEngine.play(this.soundOver, false, 1)

        }
        this.linkToStore.active = true
    }

    protected update(dt: number): void {
        // if (this.isSpeedUp) return;
        let deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
            
        }
        else {
            this.reponsive(false);
        }
        let isHeroWinning = globalThis.youRep > globalThis.monsterRep;
        // không đổi trạng thái thì bỏ qua
        if (this.isHeroLead == isHeroWinning) return;

        this.isHeroLead = isHeroWinning;

        if (isHeroWinning) {

            this.crowHero.active = true;
            this.crowMonster.active = false;
            this.heroAnim.play();
        } else {

            this.crowHero.active = false;
            this.crowMonster.active = true;
            this.monsterAnim.play();

        }
     
    }
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1

        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false


        this.camera.node.position = cc.v3(0, 0)
     
        // this.endCard.scale = (logic) ? 1.5 : 0.7
        this.logo.scale = (logic) ? 1.5 : 1
        this.bg.position=(logic)?cc.v3(0,-200):cc.v3(0,0)
this.bg.scale=(logic)?1.3:1
this.phaohoa.scale = (logic) ? 7 : 3;
this.btnBeat.scale=(logic)?1.6:1
this.btnBeat.getComponent(cc.Widget).bottom=(logic)?350:47;
this.loseNode.scale=(logic)?1.4:0.7;
this.winNode.scale=(logic)?1.4:0.7;
this.countDown.scale=(logic)?1.4:1;
this.you.x= (logic)?-280:-350;
this.monster.x=(logic)?280:350;
this.avtYou.x=(logic)?-280:-490;
this.avtMonster.x=(logic)?280:490;
this.avtMonster.y=(logic)?350:280;
this.avtYou.y=(logic)?350:280
this.btnBeat.y=(logic)?-1200:-422
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
            this.camera.zoomRatio = 1.8
            this.camera.node.position = cc.v3(0, 0)
           
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.logo.getComponent(cc.Widget).top = 48 + 30
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.6
this.btnBeat.y=-950
this.avtMonster.y=240;
this.avtYou.y=240
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
                // this.camera.zoomRatio = 0.8
            }
        }


    }
}
