

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Animation)
    sauces: cc.Animation = null
    @property(cc.Integer)
    tag = 0

    start() {

    }
    onCollisionEnter(other, self) {
        // this.sauces.play()
        this.scheduleOnce(() => {
            if (this.tag == 0) {
                other.getComponent("pizza").getPhomai()

            }
            else if (this.tag == 1) {
                other.getComponent("pizza").getDecore1()

            }
            else if (this.tag == 2) {
                other.getComponent("pizza").getRau()

            }

        }, 0.2)

    }
    // update (dt) {}
}
