

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.AudioClip)
    soundHappy: cc.AudioClip = null
    @property(cc.AudioClip)
    soundAngry: cc.AudioClip = null
    @property(cc.AudioClip)
    soundAngry2: cc.AudioClip = null
    @property(cc.AudioClip)
    soundHello: cc.AudioClip = null
    @property(cc.Boolean)
    chicken = false
    @property(cc.Boolean)
    cake = false;
    @property(cc.Boolean)
    coca = false;
    @property(cc.Boolean)
    potato = false;
    @property([cc.Integer])//0 chicken 1//coca 2//cake //3khoaitay
    count = []
    @property([cc.Integer])
    order = []
    @property(cc.Boolean)
    sauce = false
    @property(cc.Label)
    lbCountSc: cc.Label = null
    @property(cc.Label)
    lbCountDau: cc.Label = null
    @property(cc.Node)
    pop: cc.Node = null
    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    @property(cc.Node)
    doneNode: cc.Node = null

    @property(cc.Sprite)
    fillBar: cc.Sprite = null
    @property(cc.SpriteFrame)
    fillYellow: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    fillRed: cc.SpriteFrame = null;

    @property(cc.Integer)
    timeWaiting = 30

    isEnd = false
    isSuccess = false
    gamePlay = null
    timeFill = 60
    isAngry = false
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")
        // this.loadTime()
        this.addEndEventSpine();

    }
    showMission() {
        this.isEnd = false
        this.isSuccess = false
        this.isAngry = false
     
        this.pop.getComponent(cc.Animation).play()

        this.anim.setAnimation(0, "idle", false)

        if (this.soundHello) {
            cc.audioEngine.play(this.soundHello, false, 1)
        }
        this.loadTime()
    }
    updateItem(id) {
        console.log("update item " + id)
        cc.audioEngine.play(this.gamePlay.soundOk, false, 1)
        this.doneNode.children[id].active = true
    }
    addEndEventSpine() {
        this.anim.setCompleteListener(track => {
            if (track.animation.name == "7.angry_idle") {
                if (!this.isAngry) {
                    this.anim.setAnimation(0, "3.buy_idle", true);

                }

            }
        })
    }
    activeDone(value) {
        for (let i = 0; i < this.order.length; i++) {
            if (this.order[i] == value && this.doneNode.children[i].active == false) {
                this.doneNode.children[i].active = true
                return ;
            }
        }
    }
    updateMission(value) { //1:socola //0:dau
        cc.audioEngine.play(this.gamePlay.soundSellDone, false, 1)
        this.activeDone(value)
        switch (value) {
            case 0: //chicken
                this.count[0]--
                if (this.count[0] == 0) {
                    this.isEnd = true

                    // this.lbCountDau.node.active = false
                }
                break;
            case 1: //coca
                this.count[1]--
                if (this.count[1] == 0) {
                    this.isEnd = true

                }
                break;
            case 2: //cake
                this.count[2]--
                if (this.count[2] == 0) {
                    this.isEnd = true

                }
                break;
            case 3: //potato
                this.count[3]--
                if (this.count[3] == 0) {
                    this.isEnd = true

                }
                break;
        }
        this.scheduleOnce(() => {
            this.node.getChildByName("vfx_coin").active = true
            this.node.getChildByName("vfx_coin").getComponent(cc.Animation).play()
        }, 0.4)

        this.gamePlay.mcComp.deliverItem()
        this.gamePlay.sellTraySlot = -1

        if (this.isOrderComplete()) {
            this.end(true)
        }
        globalThis.coin += 50
    }
    isOrderComplete() {
        if (!this.count || this.count.length === 0) return true
        for (let i = 0; i < this.count.length; i++) {
            if (this.count[i] > 0) return false
        }
        return true
    }
    move() {
        this.anim.setAnimation(0, "walk", false)

    }
    end(value) {
        if (this.isSuccess) return;
        this.isSuccess = true
        cc.Tween.stopAllByTarget(this.fillBar)

        if (value == true) {
            cc.audioEngine.play(this.soundHappy, false, 1)
            this.doneNode.active = true;

            // this.lbCountDau.node.active = false;
            // this.lbCountSc.node.active = false
            this.anim.setAnimation(0, "happy", false)
            // this.pop.getChildByName("right").active = true
            // this.node.getChildByName("happy").active = true

        }
        else {
            this.unscheduleAllCallbacks()
            this.anim.setAnimation(0, "angry", false)
            // this.pop.getChildByName("wrong").active = true
            // this.node.getChildByName("angry").active = true

        }
        this.scheduleOnce(() => {
            cc.audioEngine.play(this.gamePlay.soundClosePop, false, 1)
            cc.tween(this.pop).to(0.3, { scale: 0 }).start()
            this.anim.setAnimation(0, "walk", true)
            cc.tween(this.node)
                .by(1, { position: cc.v3(-500, 0) })
                .call(() => {
                    this.node.active = false
                    this.gamePlay.nextCus(value, this.node)
                })
                .start()
        }, 0.5)

    }
    laugh() {
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 0.8)
        }
    }
    update(dt) {

        // this.lbCountSc.string = "x" + this.count[1].toString()
        // this.lbCountDau.string = "x" + this.count[0].toString()

    }
    happy() {
        // let fill = this.fillBar.node.parent
        cc.tween(this.pop).to(0.2, { scale: 0 }).start()
        this.anim.setAnimation(0, "8.happy", false)
        this.scheduleOnce(() => {
            this.anim.setAnimation(0, "3.buy_idle", true)
        }, 1)
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 0.8)
        }

    }
    angry() {
        this.anim.setAnimation(0, "angry", false);

        cc.audioEngine.play(this.soundAngry2, false, 1)
        let wrongtick = this.pop.getChildByName('x')
        wrongtick.active = true
        wrongtick.getComponent(cc.Animation).play()
        this.scheduleOnce(() => {
            wrongtick.active = false
        }, 0.5)
    }
    // wrong(){

    // }
    checkSell() {
        if (this.gamePlay.arrCus.indexOf(this.node) < 0) return false
        return this.gamePlay.checkSell(this.node)
    }
    validateSell() {
        let mcComp = this.gamePlay.mcComp
        let itemType = mcComp.getItemType()
        let chickenComp = mcComp.getChickenComp(mcComp.getTrayItem())

        let isChickenValid = this.chicken && this.count[0] > 0
            && itemType === "chicken"
            && chickenComp && chickenComp.isChin
            && this.sauce == chickenComp.isSauce

        let isCocaValid = this.coca && this.count[1] > 0 && itemType === "coca"
        let isCakeValid = this.cake && this.count[2] > 0 && itemType === "cake"
        let isPotatoValid = this.potato && this.count[3] > 0 && itemType === "tomato"

        if (isChickenValid || isCocaValid || isCakeValid || isPotatoValid) {
            cc.audioEngine.play(this.gamePlay.soundOk, false, 1)
            let missionType = isCocaValid ? 1 : isCakeValid ? 2 : isPotatoValid ? 3 : 0
            this.scheduleOnce(() => {
                this.updateMission(missionType)
                mcComp.afterDeliver()
            }, 0.5)
            return true
        }

        this.isEnd = true
        cc.audioEngine.play(this.gamePlay.soundWrong, false, 0.8)
        let wrongtick = this.pop.getChildByName("x")
        wrongtick.active = true
        wrongtick.getComponent(cc.Animation).play()
        this.scheduleOnce(() => {
            wrongtick.active = false
            mcComp.idle()
            this.gamePlay.isMoving = false
            this.gamePlay.sellTraySlot = -1
            this.end(false)
        }, 0.5)
        return false
    }
    isDelaySound = false
    loadTime() {
        cc.Tween.stopAllByTarget(this.fillBar)
        this.fillBar.fillRange = 1;
        let changedYellow = false;
        let changedRed = false;
        cc.tween(this.fillBar)
            .to(this.timeWaiting, { fillRange: 0 }, {
                progress: (start, end, current, ratio) => {

                    let value = start + (end - start) * ratio;
                    this.fillBar.fillRange = value;

                    if (value <= 0.5 && !changedYellow && this.isSuccess == false) {
                        changedYellow = true;
                        this.fillBar.spriteFrame = this.fillYellow;
                        this.anim.setAnimation(0, "angry", true);
                        if (this.soundAngry) {
                            cc.audioEngine.play(this.soundAngry, false, 1)

                        }
                    }

                    if (value <= 0.25 && !changedRed) {
                        changedRed = true;
                        this.isAngry = true

                        this.fillBar.spriteFrame = this.fillRed;
                        this.anim.setAnimation(0, "angry", true);

                        if (this.soundAngry2 && this.isSuccess == false) {
                            cc.audioEngine.play(this.soundAngry2, false, 1)



                        }
                    }

                    return value;
                }
            }).call(() => {
                //  this.gamePlay.onEndGame(false)   
                // let id = this.gamePlay.getPlace(this.node)
                // this.gamePlay.isCountDone++
                // this.gamePlay.enqueueMove(this.node);


            })
            .start();
    }
}
