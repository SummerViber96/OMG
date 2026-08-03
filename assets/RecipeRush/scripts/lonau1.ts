

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Animation)
    sauces: cc.Animation = null
    @property(cc.AudioClip)
    soundXit: cc.AudioClip = null
    gamePlay = null
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")

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
