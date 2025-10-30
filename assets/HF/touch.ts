
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    preTouch: cc.Prefab = null;

    start() {

    }
    touchStartEvent(event) {
     this.createEffTouch(event.getLocation())


    }
     createEffTouch(pos) {
        pos = this.node.convertToNodeSpaceAR(pos)
        let touch = cc.instantiate(this.preTouch)
        touch.parent = this.node;
        touch.position = pos
    }
    // update (dt) {}
}
