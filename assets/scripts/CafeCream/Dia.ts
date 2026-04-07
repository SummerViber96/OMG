

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    status = 0
    start() {

    }
    getBanh() {
        this.anim.setAnimation(0, "lv2_Base")
    }
    setStatus(value) {
        this.status=value
        switch (value) {
            case 1:
                this.anim.setAnimation(0, "lv2_Base_t2")
                break;
            case 2:
                this.anim.setAnimation(0, "lv2_Base_t1")
                break;


        }

    }
    // update (dt) {}
}
