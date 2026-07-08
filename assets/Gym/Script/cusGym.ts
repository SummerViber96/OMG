
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
    countTime = 0
    @property(cc.Sprite)
    fillBar: cc.Sprite = null
    @property(cc.SpriteFrame)
    fillYellow: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    fillRed: cc.SpriteFrame = null;
    @property(cc.Integer)
    tag = 0
    gamePlay = null
    isSuccess = false
    isCountingDown = false
    fillBarColorState = 0
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym")
    }
    countDown() {
        this.fillBar.node.parent.active = true
        this.isCountingDown = true
        this.fillBarColorState = 0
        cc.tween(this.fillBar).to(this.countTime, { fillRange: 0 }).call(() => {
            this.isCountingDown = false
            if (!this.isSuccess) {
                this.gamePlay.cusOut(this.node)
                this.pop.active = false
            }
        }).start()
    }
    moveByEnd() {
        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).by(1, { position: cc.v3(-120, 50) }).call(() => {
            this.anim.setAnimation(0, "Waiting2", true);
            this.pop.active = true
        }).start()

    }
    walk(time, pos) {
        this.pop.active = false;

        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).by(time, { position: pos}).call(() => {
          
        }).start()
    }
    updateFillBarColor() {
        if (!this.isCountingDown) return
        const range = this.fillBar.fillRange
        if (range < 0.2 && this.fillBarColorState < 2) {
            this.fillBar.spriteFrame = this.fillRed
            this.fillBarColorState = 2

        } else if (range < 0.5 && this.fillBarColorState < 1) {
            this.fillBar.spriteFrame = this.fillYellow
            this.fillBarColorState = 1
            this.anim.setAnimation(0, "Waiting3", true);
        }
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

        // this.pop.getChildByName("hand").active = true
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
    ngoiTho() {
        this.anim.setAnimation(0, "Abdominal_Tired", true)

    }
    dayTa() {
        this.anim.setAnimation(0, "AbCrunch", true)

    }
    tucGian() {
        console.log("tuc gian")
        this.anim.setAnimation(0, "Waiting3", true)

    }
    happy() {
        // if (this.soundHappy) {
        //     cc.audioEngine.play(this.soundHappy, false, 1)
        //     th
        // }
        this.anim.setAnimation(0, "HappyOut", false);
        cc.tween(this.pop).to(0.2, { scale: 0 }).start();
        this.node.getChildByName("notiBonusCoin2").active = true
    }
    smile() {
        console.log("smile")
        this.isCountingDown = false
        this.fillBar.node.parent.active = false
        this.isSuccess = true
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 1)
        }
    }
    smile2() {
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 1)
        }
    }
    moveToWait() {
        this.anim.setAnimation(0, "WalkInR", true);

        this.move2(cc.v3(324, -8), 1)
        this.scheduleOnce(() => {
            this.anim.setAnimation(0, "WalkOutR", true);

            this.move2(cc.v3(157, 29), 1)

        }, 1)
        this.scheduleOnce(() => {
            this.anim.setAnimation(0, "Waiting2", true);
            this.pop.active = true

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
    moveToWait3() {
        this.anim.setAnimation(0, "WalkInR", true);

        this.move2(cc.v3(324, -8), 1)
        this.scheduleOnce(() => {
            this.anim.setAnimation(0, "WalkOutR", true);

            this.move2(cc.v3(-150, -80), 2)

        }, 1)
        this.scheduleOnce(() => {
            this.anim.setAnimation(0, "Waiting3", true);
            this.pop.active = true
            this.gamePlay.showMissionBoxing()
            this.countDown()
        }, 3.2)
    }
    boxing() {
        this.anim.setAnimation(0, "Boxing", true);
        this.node.scaleX = 1

    }
    moveOut() {
        this.isSuccess = true
        this.isCountingDown = false
        this.fillBar.node.parent.active = false
        this.anim.setAnimation(0, "WalkInL", true);
        cc.tween(this.node).to(2.5, { position: cc.v3(392, 74) }).call(() => {
            this.node.active = false
        }).start()
    }
    moveOut2() {
        this.isSuccess = true
        this.isCountingDown = false
        this.fillBar.node.parent.active = false
        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).to(1, { position: cc.v3(101, -143) }).call(() => {
            this.anim.setAnimation(0, "WalkInR", true);
        }).to(2, { position: cc.v3(392, 74) }).call(() => {
            this.node.active = false
        }).start()
    }
    update() {
        this.updateFillBarColor()
    }
}
