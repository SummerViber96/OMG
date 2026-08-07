

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Animation)
    sauces: cc.Animation = null
    @property(cc.AudioClip)
    soundXit: cc.AudioClip = null
    @property(cc.Sprite)
    fillBar: cc.Sprite = null
    @property(cc.SpriteFrame)
    fillYellow: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    fillRed: cc.SpriteFrame = null;
    @property(cc.Node)
    hindMay1: cc.Node = null;
    @property(cc.Integer)
    timeWaiting = 30
    gamePlay = null
    isSuccess=false
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")
        this.loadTime()

    }
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

                    if (value <= 0.5 && !changedYellow) {
                        changedYellow = true;
                        this.fillBar.spriteFrame = this.fillYellow;
                        if(this.isSuccess==false){
                            this.hindMay1.active = true
                        }
                    }

                    if (value <= 0.25 && !changedRed) {
                        changedRed = true;


                        this.fillBar.spriteFrame = this.fillRed;

                    }

                    return value;
                }
            }).call(() => {
                if (!this.isSuccess) {
                    this.gamePlay.onEndGame(false)
                }
            })
            .start();
    }
    onCollisionEnter(other, self) {
        this.sauces.play()
        if (this.gamePlay.isMox == false) {
            cc.audioEngine.play(this.soundXit, false, 0.3)

        }
        this.scheduleOnce(() => {
            other.getComponent("pizza").getTomato()

        }, 0.2)

    }
    // update (dt) {}
}
