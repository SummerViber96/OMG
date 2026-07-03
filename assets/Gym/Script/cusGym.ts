
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    pop: cc.Node = null
    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    @property(cc.AudioClip)
    soundHappy: cc.AudioClip = null
    @property(cc.Integer)
    tag = 0
    gamePlay = null
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym")
    }
    showMision() {
        this.pop.getComponent(cc.Animation).play()
    }
    move(pos, time) {
        this.anim.setAnimation(0, "WalkInL", true);
        cc.tween(this.node).to(time, { position: pos }).call(() => {
            this.anim.setAnimation(0, "IdleBL", true);

        }).start()
    }
    move3(pos, time) {
        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).to(time, { position: pos }).call(() => {
            this.anim.setAnimation(0, "IdleBL", true);

        }).start()
    }
    move2(pos, time) {
        // this.anim.setAnimation(0, "WalkInR", true);
        cc.tween(this.node).to(time, { position: pos }).call(() => {
            // this.anim.setAnimation(0, "Waiting3", true);

        }).start()
    }
    sit() {
        this.node.scaleX = 1
        this.anim.setAnimation(0, "Sit_Waiting", true);
    }
    showPop() {
        this.pop.active = true
        this.pop.getComponent(cc.Animation).play()
        this.pop.getChildByName("hand").active = true
    }
    clickPop(event, value) {
        console.log("clcik pop")
        event.currentTarget.getComponent(cc.Button).enabled = false
        // console.log("click pop")
        let btn = event.currentTarget
        btn.getComponent(cc.Button).enabled = false;
        cc.tween(this.pop).to(0.2, { scale: 0 }).start();
        this.gamePlay.doCus(this.tag)

    }
    gapBung() {
        this.anim.setAnimation(0, "Abdominal", true)
    }
    dayTa() {
        this.anim.setAnimation(0, "AbCrunch", true)

    }
    tucGian() {
        console.log("tuc gian")
        this.anim.setAnimation(0, "Waiting3", true)

    }
    happy() {
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 1)
        }
        this.anim.setAnimation(0, "HappyOut", true);


    }
    moveToWait() {
        this.anim.setAnimation(0, "WalkInR", true);

        this.move2(cc.v3(324, -8), 1)
        this.scheduleOnce(() => {
            this.anim.setAnimation(0, "WalkOutR", true);

            this.move2(cc.v3(157, 29), 1)

        }, 1)
        this.scheduleOnce(() => {
            this.anim.setAnimation(0, "Waiting3", true);

        }, 2)
    }
      moveToWait2() {
        this.anim.setAnimation(0, "WalkInR", true);

        this.move2(cc.v3(324, -8), 1)
        this.scheduleOnce(() => {
            this.anim.setAnimation(0, "WalkOutR", true);

            this.move2(cc.v3(60, 29), 1)

        }, 1)
        this.scheduleOnce(() => {
            this.anim.setAnimation(0, "Waiting3", true);

        }, 2)
    }
    // update (dt) {}
}
