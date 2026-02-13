

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    lbTime: cc.Label = null;
    gamePlay = null;
    @property(cc.AudioClip)
    clockSound: cc.AudioClip = null
    @property(cc.Node)
    warning: cc.Node = null
    isTime = 30;
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");

    }
    countDown() {
        this.schedule(() => {
            this.isTime--;
            this.lbTime.string = "00:" + this.isTime;
            if (this.isTime <= 10) {
                if (this.gamePlay.isEndGame == false) {
                    cc.audioEngine.play(this.clockSound, false, 1)
                    this.warning.active = true
                }

            }
            this.lbTime.getComponent(cc.Animation).play()
            if (this.isTime == 0) {
                this.warning.active = false
                this.gamePlay.onEndGame(false)
            }
        }, 1, 29)
    }
    // update (dt) {}
}
