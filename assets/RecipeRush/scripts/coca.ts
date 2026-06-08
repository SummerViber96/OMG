

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    anim: sp.Skeleton = null;
    isCoca = false;

    start() {

    }
    cooking() {
        this.anim.setAnimation(0, "lv2-active", false);
        this.scheduleOnce(() => {
            this.readyCoca()
        }, 0.5)
    }
    readyCoca() {
        this.isCoca = true
        // this.anim
    }
    getCoca() {
        this.anim.setAnimation(0, "lv2-idle", false);

        this.isCoca = false
    }
    // update (dt) {}
}
