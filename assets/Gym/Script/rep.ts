// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    @property(cc.Sprite)
    fill: cc.Sprite = null
    rep = 0
    @property(cc.Boolean)
    isMonster = false
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    gamePLay = null
    start() {
        this.gamePLay = cc.Canvas.instance.node.getComponent("Gym3")
    }
    hit() {
        console.log("hit")
        this.rep++;
        this.label.string = this.rep.toString()
        this.fill.fillRange = this.rep / 100
        if (this.fill.fillRange >= 1) {
            this.fill.fillRange = 1;
            if (this.isMonster) {
                this.gamePLay.onEndGame(false)
            }
            else {
                this.gamePLay.onEndGame(true)

            }
        }
    }
    // update (dt) {}
}
