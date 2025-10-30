
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    @property(cc.Node)
    bag: cc.Node = null

    start() {

    }
    move1() {
        this.node.scaleX = -1
        this.anim.setAnimation(0, "Walk", false)
        cc.tween(this.node).to(0.8, { position: cc.v3(-9, -219) }).call(() => {
            this.transWood()
            this.anim.setAnimation(0, "Idle", false)

        }).start()
    }
 
    transWood() {
        let gamePlay = cc.Canvas.instance.node.getComponent("YC_7")
        let cus = gamePlay.arrCus[gamePlay.arrCus.length-1]
        let count = 0
        for (let i = this.bag.childrenCount - 1; i >= 0; i--) {
            let child = this.bag.children[i];
            let pos = child.position;
            pos = this.bag.convertToWorldSpaceAR(pos);
            pos = cus.convertToNodeSpaceAR(pos);
            child.parent = cus;
            child.position = pos;
            count++;
            cc.tween(child).delay(0.05 * count).bezierTo(0.3, cc.v2(pos.x, pos.y), cc.v2(pos.x / 2, pos.y + 200), cc.v2(0, 50)).call(()=>{
                child.destroy()
            }).start()

        }
        this.scheduleOnce(() => {
            this.move2()
            gamePlay.moveBack()
        }, 0.5)
    }
    move2() {
        this.node.scaleX = 1

        this.anim.setAnimation(0, "Walk", false)

        cc.tween(this.node).to(0.8, { position: cc.v3(-127.8, -102) }).call(() => {
            // this.transWood()
            this.anim.setAnimation(0, "Idle", false)

            cc.Canvas.instance.node.getComponent("YC_7").isMoveChar = false
        }).start()
    }
    // update (dt) {}
}
