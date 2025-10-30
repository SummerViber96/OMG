

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(sp.Skeleton)
    anim: sp.Skeleton = null;

    start() {

    }

    // update (dt) {}
}
