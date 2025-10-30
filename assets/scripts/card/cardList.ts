// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    hand: sp.Skeleton
    start() {
        this.scheduleOnce(() => {
            this.node.getComponent(cc.Animation).play("card_tut")
        }, 0.6)
    }
    click() {
        this.hand.setAnimation(0, "Hand", false)
        this.scheduleOnce(() => {
        this.hand.setAnimation(0, "HandIdle", false)
        }, 0.7)
    }
    // update (dt) {}
}
