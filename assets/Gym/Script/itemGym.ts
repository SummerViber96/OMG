// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Integer)
    tag = 0
    @property(cc.Integer)
    colorG = 0
    gamePlay = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym")
        const touchNode = cc.Canvas.instance.node;
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

    }
    clickItem(event) {
        event.currentTarget.getComponent(cc.Button).enabled = false
        console.log(this.node.name)
        this.gamePlay.clickItem(this.node)
    }
    // update (dt) {}
}
