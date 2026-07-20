// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    fillTime: cc.Sprite = null
    @property(cc.Node)
    clock: cc.Node = null
    @property(cc.Integer)
    time = 4

    start() {

    }
    setOn() {
        this.clock.active = true
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(() => {
            this.clock.active = false
        }).start();

    }
    // update (dt) {}
}
