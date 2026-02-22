// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    order: cc.Node = null
    @property(cc.Label)
    lbCountTime: cc.Label = null;
    @property(cc.Node)
    clock: cc.Node = null;
    @property(cc.Node)
    timeBar: cc.Node = null;
    @property(cc.Node)
    guild: cc.Node = null
    isTime = 30;
    gamePlay = null;
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        cc.tween(this.lbCountTime.node).to(0.3, { scale: 0.9 }).to(0.1, { scale: 1 }).start()
        // this.click()
    }
    click() {

        this.clock.getComponent(cc.Animation).stop()
        this.clock.angle = 0
        cc.tween(this.lbCountTime.node).to(0.3, { opacity: 0 }).start();
        this.gamePlay.moveClocktoUI(this.clock)
        cc.tween(this.node.children[0]).to(0.4, { opacity: 0 }).call(() => {
            this.node.active = false;
            // this.timeBar.getComponent("barTime").countDown();
            this.order.active = true
            this.gamePlay.startGame()
            this.guild.active = true
        }).start()

    }
    // update (dt) {}
}
