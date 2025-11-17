

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    gamePlay = null
    isMeat = false
    isvegettable = false
    @property(sp.Skeleton)
    anim: sp.Skeleton = null;
    value = 0
    start() {

        this.gamePlay = cc.Canvas.instance.node.getComponent("GameApp")
    }
    getMeat() {
        this.isMeat = true
        this.anim.setAnimation(0, "B3-T1", false)
    }
    getVegettable() {
        console.log("vetetable")
        this.isvegettable = true
        this.anim.setAnimation(0, "B3-T1-T2", false)
    }
    sell() {
        // if (this.isHotDog == false || this.isTuongCa == false) return;
        this.gamePlay.sellBuger(this.value)
    }
    // btn_click() {
    //     this.gamePlay.clickHotDog(this.value,this.node.parent);

    // }

}
