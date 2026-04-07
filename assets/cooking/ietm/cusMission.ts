

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
    dau = false
    @property(cc.Boolean)
    socola = false;
    @property([cc.Integer])
    count = []
    @property([cc.Integer])
    order = []
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
        this.pop.getComponent(cc.Animation).play()
        if(this.soundHello){
            cc.audioEngine.play(this.soundHello,false,1)
        }
        // this.loadTime()
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
    updateMission(value) { //1:socola //0:dau
        cc.audioEngine.play(this.gamePlay.soundSellDone, false, 1)

        switch (value) {
            case 0: //dau
                this.count[0]--
                if (this.count[0] == 0) {
                    this.isEnd = true
                    this.scheduleOnce(() => {
                        this.doneNode.active = true

                    }, 0.3)
                    this.lbCountDau.node.active = false
                }
                break;
            case 1: //socola
                this.count[1]--
                if (this.count[1] == 0) {
                    this.isEnd = true

                    this.lbCountSc.node.active = false

                    // this.scheduleOnce(() => {

                    // }, 0.4)
                }
                break;
        }
        this.scheduleOnce(() => {
            this.node.getChildByName("vfx_coin").active = true
            this.node.getChildByName("vfx_coin").getComponent(cc.Animation).play()
            this.pop.getChildByName("right").active = true
            this.pop.getChildByName("right").getComponent(cc.Animation).play()

        }, 0.4)
        if (this.count[1] == 0 && this.count[0] == 0) {
            this.end(true)

        }
        globalThis.gold += 50


    }
    move() {
        this.anim.setAnimation(0, "happy", false)

    }
    end(value) {
        if (this.isSuccess) return;
        this.isSuccess = true
        this.gamePlay.successCus()

        if (value == true) {
            cc.audioEngine.play(this.soundHappy, false, 1)
            this.doneNode.active = true;

            this.lbCountDau.node.active = false;
            this.lbCountSc.node.active = false
            this.anim.setAnimation(0, "happy", false)
            this.pop.getChildByName("right").active = true
            this.node.getChildByName("happy").active = true

        }
        else {
            this.unscheduleAllCallbacks()
            this.anim.setAnimation(0, "angry", false)
            this.pop.getChildByName("wrong").active = true
            this.node.getChildByName("angry").active = true

        }
        this.scheduleOnce(() => {
            cc.audioEngine.play(this.gamePlay.soundClosePop, false, 1)
            cc.tween(this.pop).to(0.3, { scale: 0 }).start()
            this.anim.setAnimation(0, "walk", true)
            cc.tween(this.node).to(1, { position: cc.v3(-900, 123.591) }).call(() => {
                this.node.active = false
                this.gamePlay.nextCus(value)

            }).start()
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
        this.anim.setAnimation(0, "7.angry_idle", false);

        cc.audioEngine.play(this.soundAngry2, false, 1)
        let wrongtick = this.pop.getChildByName('x')
        wrongtick.active=true
        wrongtick.getComponent(cc.Animation).play()
        this.scheduleOnce(() => {
            wrongtick.active = false
        }, 0.5)
    }
    // wrong(){

    // }
    checkSell(donut) {
        let donutComp = donut.getComponent("donut")
        let check = false
        if (this.socola && this.count[1] > 0) {
            if (donutComp.isSocola) {
                this.updateMission(1)
                check = true
            }
        }
        if (this.dau) {
            if (donutComp.isDau && this.count[0] > 0) {
                this.updateMission(0)
                check = true
            }
        }
        if (check == false) {
            this.isEnd = true
            this.end(false)
            cc.audioEngine.play(this.gamePlay.soundWrong, false, 0.8)
        }
    }
    isDelaySound = false
    loadTime() {
        cc.tween(this.fillBar).to(this.timeWaiting, { fillRange: 0 }).call(() => { }).start()
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
                        this.anim.setAnimation(0, "6.angry", true);
                        if (this.soundAngry) {
                            cc.audioEngine.play(this.soundAngry, false, 1)

                        }
                    }

                    if (value <= 0.25 && !changedRed) {
                        changedRed = true;
                        this.isAngry = true

                        this.fillBar.spriteFrame = this.fillRed;
                        this.anim.setAnimation(0, "7.angry_idle", true);

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
