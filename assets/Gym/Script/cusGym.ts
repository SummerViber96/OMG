
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    pop: cc.Node = null
    @property(sp.Skeleton)
    anim:sp.Skeleton=null
    start() {

    }
    showMision() {
        this.pop.getComponent(cc.Animation).play()
    }
    move() {

    }
    // update (dt) {}
}
