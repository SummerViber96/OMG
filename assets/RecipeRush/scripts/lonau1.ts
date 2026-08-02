

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Animation)
    sauces: cc.Animation = null

    start() {

    }
    onCollisionEnter(other, self) {
        this.sauces.play()
        this.scheduleOnce(()=>{
        other.getComponent("pizza").getTomato()

        },0.2)
      
    }
    // update (dt) {}
}
