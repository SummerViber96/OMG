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
    bang: cc.Node = null
    @property(sp.Skeleton)
    bodySkeleton: sp.Skeleton = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    changeScaleX() {
        this.node.scaleX = -1
        this.bang.zIndex = 2
    }
    changeMove() {
        this.node.scaleX = -1

    }
    endao() {
        // this.node.scaleX = 1
        this.bang.zIndex = 0
        this.bodySkeleton.setSkin("F")
        this.node.scaleX = -1


    }
    // update (dt) {}
}
