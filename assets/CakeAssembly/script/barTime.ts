

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    lbTime: cc.Label = null;
    gamePlay = null;
    isTime = 30;
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");

    }
    countDown() {
        this.schedule(() => {
            this.isTime--;
            this.lbTime.string = "00:" + this.isTime;
            this.lbTime.getComponent(cc.Animation).play()
            if(this.isTime==0){
                this.gamePlay.onEndGame(false)
            }
        }, 1, 30)
    }
    // update (dt) {}
}
