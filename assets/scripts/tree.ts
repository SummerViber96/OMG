
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {



    start() {

    }
    cut() {
        this.node.getChildByName("icon").getComponent(cc.Animation).play("chat_cay")
    }
    setIce() {
        this.node.getChildByName("ice").active = true;
    }
    // update (dt) {}
}
