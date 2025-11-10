

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    gamePlay = null
    value=0
    start() {

        this.gamePlay=cc.Canvas.instance.node.getComponent("GameApp")
    }
    btn_click() {
        this.gamePlay.clickHotDog(this.value,this.node);

    }

}
