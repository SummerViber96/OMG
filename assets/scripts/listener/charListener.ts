import TL from "./treeListener"

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    start() {

    }
    className = null;
    gamePlay = null;
    isFirst = true;
    onLoad() {
        this.className = this["__classname__"];
        this.gamePlay = cc.Canvas.instance.node.getComponent("ICY_19")
    }
    onCollisionEnter(other, self) {

        if (self.getComponent(this.className) && other.node.getComponent(TL) && this.node.getComponent("character").isSub == true) {
   
            other.node.getComponent(cc.CircleCollider).enabled=false

            this.gamePlay.collectEggsSub(other.node)

        }
        if (this.node.getComponent("character").isSub == false) {
            if (self.getComponent(this.className) && other.getComponent(TL) && this.node.getComponent("character").isSub == false) {
               if(this.isFirst){
                this.isFirst = false
                this.gamePlay.arrowNode.active=false
                this.gamePlay.listArrow.children[3].active = true
               }
                other.node.getComponent(cc.CircleCollider).enabled=false

                this.gamePlay.collectEggs(other.node)

            }
        
        }

 

    }
    onCollisionStay(other, self) {
        // if (other.node.name == "ke" && this.gamePlay.isTranske == false) {
        //     this.gamePlay.offWoodFromKe()
        //     // this.node.getComponent("character").isSellding=true
        // }
    }
    onCollisionExit(other, self) {
        // if (self.getComponent(this.className) && other.getComponent(TL)) {
        //     this.node.getComponent("character").removeEnemy(other.node._id)

        // }


        // if (this.node.getComponent("character").isSub == false) {
        //     if (other.node.name == "sellToCus") {
        //         this.node.getComponent("character").isSellding = false
        //     }
        //     if (other.node.name == "ke") {
        //         this.gamePlay.offWoodFromKe()
        //         // this.node.getComponent("character").isSellding=true
        //     }
        //     if (other.node.name == "sellToCus") {
        //         this.gamePlay.offSell()
        //     }
        // }
 
    }


}
