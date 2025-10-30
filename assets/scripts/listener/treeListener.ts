

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    isCut = 2
    gamePlay = null
    start() {
        this.gamePlay = cc.Canvas.instance.getComponent("ICY_19")

    }
    cut() {
        this.isCut--
        if (this.isCut <= 0 && globalThis.countWood <= 30) {
            this.gamePlay.addTree(this.node.position, this.node.index);
            this.node.destroy()
        }
    }
    // update (dt) {}
}
