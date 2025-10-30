

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Integer)
    currentTarget = 200;
    @property(cc.Sprite)
    fillBar: cc.Sprite = null
    isSucess = false;
    count = 0;
    gamePlay = null
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("ICY_19")
    }
    upgrade(value) {
        if (!this.isSucess) {
            this.count += value
            let fill = this.count / this.currentTarget
            cc.tween(this.fillBar).to(0.5, { fillRange: fill }).call(() => {
                if (this.fillBar.fillRange >= 1) {
                    this.isSucess = true;
                    if (this.node.name == "arena1") {
                        this.gamePlay.updateOpen1()
                    }
                    // else {
                    //     this.gamePlay.updateOpen2()
                    // }
                    if (this.node.name == "arena3") {
                        cc.tween(this.node).to(0.3, { scale: 0 }).call(() => {

                            this.node.active = false

                        }).start()
                        this.gamePlay.farm3.active = true
                        this.gamePlay.listArrow.children[5].active = false
                        this.gamePlay.listArrow.children[6].active = true
                        this.gamePlay.isTargetDraw = this.gamePlay.listArrow.children[6]
                        
                        // this.scheduleOnce(() => {
                        //     console.log("on arrow 6")
                        //     this.gamePlay.listArrow.children[6].active = true

                        // }, 0.5)

                    }
                    else if (this.node.name == "arena4") {
                        cc.tween(this.node).to(0.3, { scale: 0 }).call(() => {

                            this.node.active = false

                        }).start()
                        this.gamePlay.farm4.active = true
                        this.gamePlay.listArrow.children[6].active = false
                        // this.scheduleOnce(() => {
                        this.gamePlay.onEndGame()

                        // }, 1)

                    }
                    console.log("uopdate")
                }
            }).start()

        }

    }

    // update (dt) {}
}
