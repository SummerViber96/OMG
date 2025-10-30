
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    hand: sp.Skeleton = null;

    start() {

    }
    click() {
        this.hand.setAnimation(0, "Click", false)
    }
    // update (dt) {}
}
