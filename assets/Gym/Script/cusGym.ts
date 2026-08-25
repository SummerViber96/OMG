
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    pop: cc.Node = null
    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    @property(cc.AudioClip)
    soundHappy: cc.AudioClip = null
    @property(cc.AudioClip)
    soundAngry: cc.AudioClip = null
    posDone = cc.v3(0, 0)
    @property(cc.Integer)
    tag = 0
    //fill bar
    @property(cc.Sprite)
    fillBar: cc.Sprite = null;
    @property(cc.SpriteFrame)
    yellowSp: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    redSp: cc.SpriteFrame = null;
    @property(cc.Prefab)
    angryPrefab: cc.Prefab = null;
    @property
    waitTime = 8
    parentName = ""
    parentIndex = 0
    parentNode = null
    isPt = false
    isQueueMoving = false
    isAngryWait = false
    isSpawned = false
    gamePlay = null
    greenSp: cc.SpriteFrame = null
    isWaitProgress = false
    waitTimeLeft = 0
    popLifted = false
    popHomePos = cc.v3(0, 0)
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym")
        if (this.pop) this.popHomePos = this.pop.position.clone()
        if (this.fillBar) {
            this.greenSp = this.fillBar.spriteFrame
            if (!this.isWaitProgress && this.fillBar.node.parent) {
                this.fillBar.node.parent.active = false
            }
        }
    }
    liftPop() {
        if (!this.pop || !this.gamePlay) return
        let layer = this.gamePlay.sortLayer || this.gamePlay.node
        if (!this.popLifted) this.popHomePos = this.pop.position.clone()
        let world = this.node.convertToWorldSpaceAR(this.popHomePos)
        this.pop.parent = layer
        this.pop.position = layer.convertToNodeSpaceAR(world)
        this.pop.zIndex = 10000
        this.popLifted = true
    }
    resetPopLayer() {
        if (!this.popLifted || !this.pop) return
        this.pop.parent = this.node
        this.pop.position = this.popHomePos
        this.pop.zIndex = 0
        this.popLifted = false
    }
    followLiftedPop() {
        if (!this.popLifted || !this.pop || !this.pop.isValid || !this.gamePlay) return
        let layer = this.pop.parent
        if (!layer) return
        let world = this.node.convertToWorldSpaceAR(this.popHomePos)
        this.pop.position = layer.convertToNodeSpaceAR(world)
        this.pop.zIndex = 10000
    }
    onDestroy() {
        if (this.popLifted && this.pop && this.pop.isValid) {
            this.pop.destroy()
            this.popLifted = false
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
        this.resetPopLayer()
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
        if (this.gamePlay && this.gamePlay.isEndgame) return
        this.isAngryWait = true
        if (this.soundAngry && this.gamePlay && this.gamePlay.playSfx) {
            this.gamePlay.playSfx(this.soundAngry, false, 1)
        }
        this.anim.setAnimation(0, "Waiting3", true)
        if (this.parentName === "Crunch") {
            this.node.position = cc.v3(-106.701, -47)
        }
    }
    happy(playSound = true) {
        if (playSound && this.soundHappy && this.gamePlay && this.gamePlay.playSfx) {
            this.gamePlay.playSfx(this.soundHappy, false, 1)
        }
        this.anim.setAnimation(0, "HappyOut", true);
    }
    celebrate() {
        this.stopWaitProgress()
        this.unscheduleAllCallbacks()
        this.clearAngryFx()
        if (this.pop) this.pop.active = false
        this.happy(false)
    }
    clearAngryFx() {
        for (let i = this.node.childrenCount - 1; i >= 0; i--) {
            let child = this.node.children[i]
            if (child && child.name.indexOf("angry") >= 0) {
                child.destroy()
            }
        }
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
        this.startWaitProgress()
    }
    startWaitProgress() {
        if (!this.fillBar) return
        this.isWaitProgress = true
        this.waitTimeLeft = this.waitTime
        this.fillBar.fillRange = 1
        if (!this.greenSp) this.greenSp = this.fillBar.spriteFrame
        if (this.greenSp) this.fillBar.spriteFrame = this.greenSp
        if (this.fillBar.node.parent) this.fillBar.node.parent.active = true
    }
    stopWaitProgress() {
        this.isWaitProgress = false
        this.waitTimeLeft = 0
        if (this.fillBar && this.fillBar.node.parent) {
            this.fillBar.node.parent.active = false
        }
    }
    spawnAngry() {
        if (this.gamePlay && this.gamePlay.isEndgame) return
        if (!this.angryPrefab) return
        for (let i = 0; i < 4; i++) {
            this.scheduleOnce(() => {
                let angry = cc.instantiate(this.angryPrefab)
                angry.parent = this.node
                angry.position = cc.v3((Math.random() - 0.5) * 50, 110 + Math.random() * 20).add(cc.v3(0,50))
                angry.opacity = 255
                angry.scale = 0.8 + Math.random() * 0.3
                cc.tween(angry).parallel(
                    cc.tween().by(0.9, { position: cc.v3((Math.random() - 0.5) * 30, 90) }),
                    cc.tween().to(0.9, { opacity: 0 })
                ).call(() => {
                    if (angry && angry.isValid) angry.destroy()
                }).start()
            }, i * 0.12)
        }
    }
    // update (dt) {}
    update(dt) {
        if (this.isWaitProgress && this.fillBar) {
            this.waitTimeLeft -= dt
            let ratio = this.waitTime > 0 ? Math.max(0, this.waitTimeLeft / this.waitTime) : 0
            this.fillBar.fillRange = ratio
            if (ratio <= 0.25) {
                if (this.redSp) this.fillBar.spriteFrame = this.redSp
            } else if (ratio <= 0.5) {
                if (this.yellowSp) this.fillBar.spriteFrame = this.yellowSp
            }
            if (ratio <= 0) {
                this.stopWaitProgress()
                if (this.gamePlay && this.gamePlay.isEndgame) return
                this.tucGian()
                this.spawnAngry()
            }
        }
        if (this.popLifted) this.followLiftedPop()
        if (!this.gamePlay || !this.gamePlay.sortLayer) return
        if (this.node.parent === this.gamePlay.sortLayer) {
            this.node.zIndex = -Math.round(this.node.y)
        }
    }
}
