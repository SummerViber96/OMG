

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Integer)
    current = 40;
    @property(cc.Sprite)
    fill: cc.Sprite = null;
    @property(cc.Label)
    lbFill: cc.Label = null
    isFill = 0
    isSuccess = false
    gamePlay = null

    // onLoad () {}
    isAnim = false
    start() {
        this.isFill = this.current;
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game28")
    }
    updateFill() {

        if (this.isSuccess) return;
        this.isFill--;
        this.node.getComponent(cc.Animation).play("pop_hit")

        if (this.isFill == 0) {
            this.isSuccess = true
this.gamePlay.updateHouse()
        }
        this.lbFill.string = "x" + this.isFill.toString();
        cc.tween(this.fill).to(0.2, { fillRange: (this.current - this.isFill) / this.current }).call(() => {
            if (this.isFill == 0 && this.isSuccess == true && !this.isAnim) {
                this.isAnim = true;
                this.node.getComponent(cc.Animation).play("pop_close")
            }
        }).start()
    }
    // update (dt) {}
}
