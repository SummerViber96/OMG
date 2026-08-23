const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    @property(cc.Sprite)
    fill: cc.Sprite = null;
    timeMax = 60
    timeLeft = 60
    gamePlay = null
    isDone = false
    isCounting = false

    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym")
        this.timeMax = this.timeLeft
        this.updateLabel()
        this.updateFill(false)
    }

    startCountDown() {
        if (this.isCounting || this.isDone) return
        this.isCounting = true
        this.updateFill(false)
        this.schedule(this.tick, 1)
    }

    addTime(sec) {
        if (this.isDone) return
        this.timeLeft += sec
        this.updateLabel()
        this.updateFill(true)
    }

    tick() {
        if (this.isDone) return
        this.timeLeft--
        this.updateLabel()
        this.updateFill(true)
        if (this.timeLeft <= 0) {
            this.isDone = true
            this.unschedule(this.tick)
            if (this.gamePlay) {
                this.gamePlay.onEndgame()
            }
        }
    }

    updateLabel() {
        if (!this.label) return
        let t = Math.max(0, this.timeLeft)
        let m = Math.floor(t / 60)
        let s = t % 60
        this.label.string = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s
    }

    updateFill(smooth) {
        if (!this.fill) return
        let ratio = this.timeMax > 0 ? Math.max(0, Math.min(1, this.timeLeft / this.timeMax)) : 0
        cc.Tween.stopAllByTarget(this.fill)
        if (smooth) {
            cc.tween(this.fill).to(1, { fillRange: ratio }).start()
        } else {
            this.fill.fillRange = ratio
        }
    }
}
