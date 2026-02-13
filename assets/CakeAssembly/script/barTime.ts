

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
    idClick = null
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");

    }
    countDown() {
        this.schedule(() => {
            this.isTime--;
            this.lbTime.string = this.isTime.toString();
            if (this.isTime == 10) {
                if (this.gamePlay.isEndGame == false) {
                    this.idClick = cc.audioEngine.play(this.clockSound, true, 1)
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
    endGame() {
        if (this.idClick) {
            cc.audioEngine.stop(this.idClick)

        }
        this.unscheduleAllCallbacks()
    }
    // update (dt) {}
}
