
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    npc: cc.Node = null
    @property(cc.Node)
    listCusNode:cc.Node=null

    start() {
        this.scheduleOnce(() => {
            cc.tween(this.npc).by(0.3, { opacity: -255, position: cc.v3(0, -80) }).start()
        }, 3)
    }

    // update (dt) {}
}
