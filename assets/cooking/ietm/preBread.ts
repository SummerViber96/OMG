

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    gamePlay = null
    isHotDog = false
    isTuongCa = false
    @property(sp.Skeleton)
    anim: sp.Skeleton = null;
    value = 0
    start() {

        this.gamePlay = cc.Canvas.instance.node.getComponent("GameApp")
    }
    getHotDog() {
        this.isHotDog = true
        this.anim.setAnimation(0, "B3-T1", false)
    }
    getTuongCa() {
        this.isTuongCa = true
        this.anim.setAnimation(0, "B3-T2", false)
    }
    sell() {
        // if (this.isHotDog == false || this.isTuongCa == false) return;
        this.gamePlay.sellBread(this.value)
    }
    // btn_click() {
    //     this.gamePlay.clickHotDog(this.value,this.node.parent);

    // }

}
