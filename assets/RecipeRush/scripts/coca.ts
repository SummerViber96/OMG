

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    anim: sp.Skeleton = null;
    @property(cc.Sprite)
    fillTime: cc.Sprite = null
    @property(cc.Node)
    clock: cc.Node = null
    isCoca = false;
    time = 0.8

    start() {

    }
    cooking() {
        this.anim.setAnimation(0, "lv2-active", false);
   

        this.clock.active = true
        this.fillTime.fillRange = 0
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(() => {
            this.clock.active = false
            this.isChin = true
            this.readyCoca()
        }).start();

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
