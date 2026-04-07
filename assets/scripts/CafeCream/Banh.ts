

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    @property(cc.Integer)
    tag = 0
    isChin = false
    gamePlay = null
    isbanh = false
    start() {
        this.addEndEventSpine();
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")

    }
    setOn() {
        this.anim.node.active = true

        this.anim.setAnimation(0, "lv1-song", false)
        this.isbanh = true
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
        this.isChin = true
        this.anim.setAnimation(0, "lv1-chin", true)
        // this.node.getComponent(cc.Button).enabled = true
    }
    btn_click() {
        console.log(this.isChin)
        // if (this.isChin == true) {
        // if (!this.isChin) return;
        if (!this.isbanh) return;
        this.isbanh = false
        this.gamePlay.arrBep[this.tag] = false
        this.gamePlay.btn_bep(this.tag)
        this.anim.node.active = false
        this.node.getComponent(cc.Button).enabled = false


        // }
    }

}
