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
    hand: cc.Node = null;

    gamePlay = null;

    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");

    }
    showticket() {
        this.node.getComponent(cc.Button).enabled = true;
        // this.node.getComponent(cc.Animation).play("ticket_show")
        this.hand.active = true
    }
    btn_click() {
        this.node.getComponent(cc.Button).enabled = false;
        this.hand.active = false
        this.node.getComponent(cc.Animation).play("ticket_show")
        this.gamePlay.showTicket()

    }
    // update (dt) {}
}
