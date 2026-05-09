// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    countDownNode: cc.Node = null; // node chứa label countdown

    @property(cc.Label)
    lbCountDown: cc.Label = null;

    @property(cc.Node)
    btnBeat: cc.Node = null;
    gamePlay = null;
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym3")
        this.showCountDown();
    }

    showCountDown() {
        // Ẩn nút Beat lúc đầu
        this.btnBeat.active = false;

        // Hiện countdown
        this.countDownNode.active = true;

        let time = 3;
        this.lbCountDown.string = time.toString();

        // Scale pop effect
        this.playCountAnim();

        this.schedule(() => {
            time--;

            if (time > 0) {
                this.lbCountDown.string = time.toString();
                this.playCountAnim();
            }
            else {
                // Kết thúc countdown
                this.unscheduleAllCallbacks();

                this.countDownNode.active = false;

                // Hiện nút Beat
                // this.btnBeat.active = true;

                // Hiệu ứng nút Beat
                // this.btnBeat.scale = 0;

                this.gamePlay.startMonster()
            }

        }, 1);
    }

    playCountAnim() {
        this.countDownNode.scale = 0;

        cc.tween(this.countDownNode)
            .to(0.2, { scale: 1.3 }, { easing: "backOut" })
            .to(0.1, { scale: 1 })
            .start();
    }

    // update (dt) {}
}
