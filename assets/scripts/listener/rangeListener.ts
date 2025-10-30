import TL from "./treeListener"

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    target: cc.Node = null
    start() {

    }
    className = null;
    gamePlay = null
    onLoad() {
        this.className = this["__classname__"];
        this.gamePlay = cc.Canvas.instance.node.getComponent("ICY_19")
    }
    onCollisionEnter(other, self) {


        if (this.target.getComponent("character").isSub == false) {
            if (other.node.name == "arenaSell1") {
                if (this.gamePlay.countMoneyBag > 0) {
                    this.gamePlay.getSell()

                }
                else {
                    this.gamePlay.char.getChildByName("textUd").getComponent(cc.Animation).play()
                    this.gamePlay.listArrow.children[3].active = true;
                    this.gamePlay.arrowNode.active = false

                }
            }
            if (other.node.name == "arenaSell3") {
                if (this.gamePlay.countMoneyBag > 0) {
                    this.gamePlay.getSell3(3)
                }
                else {
                    this.gamePlay.char.getChildByName("textUd").getComponent(cc.Animation).play()
                    this.gamePlay.listArrow.children[3].active = true;
                    this.gamePlay.arrowNode.active = false
                }
            }
            if (other.node.name == "arenaSell4") {
                if (this.gamePlay.countMoneyBag > 0) {
                    this.gamePlay.getSell3(4)

                }
                else {
                    this.gamePlay.char.getChildByName("textUd").getComponent(cc.Animation).play()
                    this.gamePlay.listArrow.children[3].active = true;
                    this.gamePlay.arrowNode.active = false

                }
            }
            else if (other.node.name == "sellToCus") {
                other.node.parent.children[1].color = cc.Color.GREEN
                this.gamePlay.sellToCus2()
                this.target.getComponent("character").isSellding = true
            }
            else if (other.node.name == "ke") {
                this.gamePlay.addWoodFromKe()
            }
        }

        // else if()

    }
    onCollisionStay(other, self) {
        if (other.node.name == "ke" && this.gamePlay.isTranske == false) {
            this.gamePlay.offWoodFromKe()
            // this.node.getComponent("character").isSellding=true
        }
    }
    onCollisionExit(other, self) {
        // if (self.getComponent(this.className) && other.getComponent(TL)) {
        //     this.node.getComponent("character").removeEnemy(other.node._id)

        // }


        if (this.target.getComponent("character").isSub == false) {
            if (other.node.name == "sellToCus") {
                this.target.getComponent("character").isSellding = false
                other.node.parent.children[1].color = cc.Color.WHITE

            }
            if (other.node.name == "ke") {
                this.gamePlay.offWoodFromKe()
                // this.node.getComponent("character").isSellding=true
            }
            if (other.node.name == "sellToCus") {
                this.gamePlay.offSell()
            }
            if (other.node.name == "arenaSell1") {
                this.gamePlay.offSellMone()
            }
            if (other.node.name == "arenaSell3") {
                this.gamePlay.offSellMone3(3)
            }
            if (other.node.name == "arenaSell4") {
                this.gamePlay.offSellMone3(4)
            }
        }

    }


}
