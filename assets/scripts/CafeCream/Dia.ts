

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    @property(cc.Integer)
    tag = 0
    status = 0;
    gamePlay = null
    isBanh = false
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")

    }
    getBanh() {
        console.log(this.tag,"getBanh")
        this.anim.node.active = true
        this.anim.setAnimation(0, "lv2_Base")
        this.isBanh = true
    }
    setStatus(value) {
        this.status = value
        switch (value) {
            case 1:
                this.anim.setAnimation(0, "lv2_Base_t2")
                break;
            case 2:
                this.anim.setAnimation(0, "lv2_Base_t1")
                break;
        }
    }
    btn_click() {
        if (this.isBanh == false) return;
        this.anim.node.active = false
        this.gamePlay.btn_sell(this.node, this.status, this.node.position)
        this.status = 0
        this.isBanh = false

    }
    // update (dt) {}
}
