
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    @property(cc.Node)
    sauce: cc.Node = null;
    @property(cc.Node)
    chinIdle: cc.Node = null;
    @property(cc.Node)
    tomato: cc.Node = null

    gamePlay = null;
    isChin = false;
    isSauce = false;
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")

    }
    song() {
        this.anim.node.active = true;
        this.anim.setAnimation(0, "lv1-song", true);
    }
    chin() {
        this.anim.setAnimation(0, "lv1-chin", true);

    }
    chin2() {
        this.chinIdle.active = true;
        this.anim.node.active = false;
        this.isChin = true;

    }
    addSauce() {
        this.sauce.active = true;
        this.node.getComponent(cc.Animation).play()
        this.isSauce=true
    }

}
