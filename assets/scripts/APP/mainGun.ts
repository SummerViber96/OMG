

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    listBullet: cc.Node = null;
    @property(cc.Node)
    listBullet2: cc.Node = null;
    @property(cc.Node)
    listIcon: cc.Node = null;
    @property(cc.Node)
    mainScene: cc.Node = null
    @property(cc.AudioClip)
    soundAkm: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundPiston: cc.AudioClip = null;
    @property(sp.Skeleton)
    skeAkm: sp.Skeleton = null;
    @property(sp.Skeleton)
    skePiston: sp.Skeleton = null;
    @property(cc.AudioClip)
    noBullet: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundReload: cc.AudioClip = null;
    @property(cc.Node)
    hand: cc.Node = null;
    anim = null;
    isCountBullet = 0;
    isMaxBullet = 0
    isListB = null
    soundAtk = null
    isLoop = false
    audioID = null
    start() {

    }
    loadData(value) {
        if (value == 1) {
            //piston
            this.isMaxBullet = 6
            this.listIcon.children[0].active = true;
            this.listIcon.children[1].active = false;
            this.isListB = this.listBullet2;
            this.listBullet.active = false;
            this.soundAtk = this.soundPiston;
            this.anim = this.skePiston;
        }
        else {
            // for()
            this.isMaxBullet = 23
            this.listIcon.children[1].active = true;
            this.listIcon.children[0].active = false;
            this.isListB = this.listBullet;
            this.listBullet2.active = false;
            this.soundAtk = this.soundAkm;
            this.anim = this.skeAkm;
        }
        this.isCountBullet = this.isMaxBullet
        this.isListB.active = true;
        this.btn_reLoad()
    }
    btn_shot() {
        if (this.isCountBullet > 0) {
            this.hand.active=false
            this.isCountBullet--;

            this.audioID = cc.audioEngine.playEffect(this.soundAtk, this.isLoop);
            this.anim.setAnimation(0, "atk", this.isLoop)
            this.isListB.children[this.isCountBullet].active = false
            // if (this.isLoop==)
        }
        else {
            cc.audioEngine.playEffect(this.noBullet, false)
        }
    }
    btn_back() {
        this.unscheduleAllCallbacks()
        cc.audioEngine.stop(this.audioID)
        this.node.getComponent(cc.Animation).play("scene_close");
        this.mainScene.active = true
    }
    btn_reLoad() {
        console.log("reload")
        cc.audioEngine.play(this.soundReload, false, 1)
        this.isCountBullet = this.isMaxBullet;
        for (let child of this.isListB.children) {
            child.active = true
        }
    }
    // update (dt) {}
}
