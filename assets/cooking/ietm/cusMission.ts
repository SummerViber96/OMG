

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Boolean)
    bread = true;
    @property(cc.Boolean)
    hotDog = true;
    @property(cc.Boolean)
    chili = false
    @property(cc.Boolean)
    buger = false
    @property(cc.Boolean)
    vegettable = false
    @property(cc.Boolean)
    meat = false
    @property(cc.Integer)
    count = 3
    @property(cc.Label)
    lbCount: cc.Label = null
    @property(cc.Node)
    pop: cc.Node = null
    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    isEnd = false
    gamePlay = null
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameApp")

    }
    checkBread(bread) {
        if (this.isEnd) return;
        let breadComp = bread.getComponent("preBread");
        if (this.bread == true && this.hotDog == breadComp.isHotDog && this.chili == breadComp.isTuongCa) {
            this.updateMission()
        }
        else {
            this.isEnd = true
            this.end(false)
            cc.audioEngine.play(this.gamePlay.soundWrong, false, 1)
        }
    }
    checkBuger(buger) {
        if (this.isEnd) return;

        let breadComp = buger.getComponent("buger");
        if (this.buger == true && this.meat == breadComp.isMeat && this.vegettable == breadComp.isvegettable) {
            this.updateMission()
        }
        else {
            this.isEnd = true
            this.end(false)
            cc.audioEngine.play(this.gamePlay.soundWrong, false, 1)
        }
    }

    updateMission() {
        cc.audioEngine.play(this.gamePlay.soundNice, false, 1)
        this.count--;
        this.anim.setAnimation(0, "8.happy", true)
        this.pop.getChildByName("right").active = true
        this.pop.getChildByName("right").getComponent(cc.Animation).play()
        if (this.count == 0) {
            this.isEnd = true

            this.end(true)
        }
    }
    end(value) {
        this.gamePlay.successCus()
        this.scheduleOnce(() => {
            cc.audioEngine.play(this.gamePlay.soundClosePop, false, 1)

            cc.tween(this.pop).to(0.3, { scale: 0 }).start()
            cc.tween(this.node).to(1, { position: cc.v3(-900, 123.591) }).call(() => {
                this.node.active = false
                this.gamePlay.nextCus()

            }).start()
        }, 0.5)
        if (value == true) {
            this.anim.setAnimation(0, "8.happy", false)
            this.pop.getChildByName("right").active = true
            this.node.getChildByName("happy").active = true
        }
        else {
            this.anim.setAnimation(0, "7.angry_idle", false)
            this.pop.getChildByName("wrong").active = true
            this.node.getChildByName("angry").active = true

        }

    }
    update(dt) {
        this.lbCount.string = this.count.toString()

    }
    happy() {
        this.anim.setAnimation(0, "happy1.5s", false)
        this.scheduleOnce(() => {
            this.anim.setAnimation(0, "idle", true)

        }, 1)

    }
}
