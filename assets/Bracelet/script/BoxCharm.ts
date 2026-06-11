

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Integer)
    tag = 0
    delayTime = 1
    start() {

    }
    getCharm() {
        this.node.children[1].active = false;
        this.scheduleOnce(() => {
            this.resetCharm()
        }, this.delayTime)
    }
    resetCharm() {
        this.node.children[1].active = true;

    }
    // update (dt) {}
}
