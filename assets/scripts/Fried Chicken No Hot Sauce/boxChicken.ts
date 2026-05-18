// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    gamePlay = null
    isSauce = false
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")

    }
    btn_click() {
        this.gamePlay.btn_clickHop()
    }
    // update (dt) {}
}
