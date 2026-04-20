
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    pop: cc.Node = null

    start() {

    }
    showMision(){
        this.pop.getComponent(cc.Animation).play()
    }

    // update (dt) {}
}
