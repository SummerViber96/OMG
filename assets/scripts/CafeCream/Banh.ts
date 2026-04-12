

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    @property(cc.Integer)
    tag = 0
    @property(cc.Sprite)
    fillTime: cc.Sprite = null
    @property(cc.Node)
    clock: cc.Node = null
    isChin = false
    gamePlay = null
    isbanh = false
    time = 2
    idSound = null
    start() {
        this.addEndEventSpine();
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")

    }
    setOn() {

        this.idSound = cc.audioEngine.play(this.gamePlay.soundNuongBanh, false, 1)
        this.anim.node.active = true
        this.anim.setAnimation(0, "lv1-song", false)
        this.isbanh = true
        this.clock.active = true
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(() => {
            this.clock.active = false
        }).start();
    }
    addEndEventSpine() {
        let self = this
        this.anim.setCompleteListener(track => {
            if (track.animation.name == "lv1-song") {
                self.setChin()
                // console.log(this.isChin)
            }

            // update (dt) {}
        }

    }
    setChin() {
        cc.audioEngine.stop(this.idSound)
        this.isChin = true
        this.anim.timeScale = 1
        this.anim.setAnimation(0, "lv1-chin", true)
        this.node.getComponent(cc.Button).enabled = true
        cc.audioEngine.play(this.gamePlay.soundBanh, false, 0.7)
    }
    btn_click() {
        // if (this.isChin == true) {
        if (!this.isChin) return;
        if (!this.isbanh) return;
        this.isbanh = false
        this.gamePlay.arrBep[this.tag] = false
        this.gamePlay.btn_bep(this.tag)
        this.anim.node.active = false
        this.node.getComponent(cc.Button).enabled = false
        this.clock.active = false
        this.fillTime.fillRange = 0
        // }
    }

}
