
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    pop: cc.Node = null
    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    @property(cc.AudioClip)
    soundHappy: cc.AudioClip = null
    posDone = cc.v3(0, 0)
    @property(cc.Integer)
    tag = 0
    parentName = ""
    parentIndex = 0
    parentNode = null
    isPt = false
    isQueueMoving = false
    isAngryWait = false
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
    sit() {
        this.node.scaleX = 1
        this.anim.setAnimation(0, "Sit_Waiting", true);
    }
    showPop() {
        this.showQueuePop()
    }
    showQueuePop() {
        this.isQueueMoving = false
        this.node.scaleX = 1
        cc.Tween.stopAllByTarget(this.pop)
        this.pop.scale = 1
        this.pop.active = true
        let popAnim = this.pop.getComponent(cc.Animation)
        if (popAnim) {
            popAnim.play()
        }
        let hand = this.pop.getChildByName("hand")
        if (hand) {
            hand.active = false
        }
        let btn = this.pop.getComponent(cc.Button)
        if (btn) {
            btn.enabled = true
        }
        if (this.gamePlay) {
            this.gamePlay.updateQueueHand()
        }
    }
    clickPop(event, value) {
        if (this.isQueueMoving) return
        let moved = this.gamePlay.doCus(this.tag, this.node)
        if (!moved) return
        this.gamePlay.startCountDown()
        let btn = event.currentTarget
        btn.getComponent(cc.Button).enabled = false
        let hand = this.pop.getChildByName("hand")
        if (hand) hand.active = false
        cc.Tween.stopAllByTarget(this.pop)
        cc.tween(this.pop).to(0.2, { scale: 0 }).start()
        if (this.gamePlay.isStep >= 4) {
            this.gamePlay.showFreeIconPtHand()
        }
    }
    gapBung() {
        this.anim.setAnimation(0, "Abdominal", true)
    }
    dayTa() {
        this.anim.setAnimation(0, "AbCrunch", true)

    }
    tucGian() {
        this.isAngryWait = true
        this.anim.setAnimation(0, "Waiting3", true)
    }
    happy() {
        // if (this.soundHappy) {
        //     cc.audioEngine.play(this.soundHappy, false, 1)
        // }
        this.anim.setAnimation(0, "HappyOut", true);


    }
    boxing() {
        this.anim.setAnimation(0, "Boxing", true);

    }
    waitingTag(value) {
        this.node.scaleX = 1
        switch (value) {
            case 0:
                this.anim.setAnimation(0, "Sit_Waiting", true)
                break;
            case 1:
                this.anim.setAnimation(0, "Sit_Waiting", true)
                break;
            case 2:
                this.anim.setAnimation(0, "IdleFL", true)

                break;
        }
    }
    // update (dt) {}
    update(dt) {
        if (!this.gamePlay || !this.gamePlay.sortLayer) return
        if (this.node.parent === this.gamePlay.sortLayer) {
            this.node.zIndex = -Math.round(this.node.y)
        }
    }
}
