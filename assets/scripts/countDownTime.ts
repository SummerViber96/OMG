

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    countDownNode: cc.Node = null; // node chứa label countdown

    @property(cc.Label)
    lbCountDown: cc.Label = null;

    @property(cc.Node)
    btnBeat: cc.Node = null;
    @property(cc.Sprite)
    fillSprite: cc.Sprite = null;

    @property(cc.Node)
    fillNode: cc.Node = null;
    @property(cc.AudioClip)
    soundCownDown: cc.AudioClip = null
    gamePlay = null;

    private currentNumber = 3;

    start() {

        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym3");
        cc.audioEngine.play(this.soundCownDown, false, 1)
        this.showCountDown();
    }

    showCountDown() {

        this.btnBeat.active = false;

        this.countDownNode.active = true;

        this.currentNumber = 3;

        this.playStep();
    }

    playStep() {

        // update số
        this.lbCountDown.string = this.currentNumber.toString();
        if (this.currentNumber == 0) {
        this.lbCountDown.string = "GO"
        this.lbCountDown.fontSize=200

        }
        // reset fill
        this.fillSprite.fillRange = 1;

        // pop số
        this.playCountAnim();

        // tween fill trong 1 giây
        cc.tween(this.fillSprite)
            .to(1, {
                fillRange: 0
            })
            .call(() => {

                this.currentNumber--;

                // hết countdown
                if (this.currentNumber < 0) {

                    this.countDownNode.active = false;

                    this.gamePlay.startMonster();

                    return;
                }

                // chạy tiếp số tiếp theo
                this.playStep();

            })
            .start();
    }

    playCountAnim() {

        this.lbCountDown.node.scale = 0;

        cc.tween(this.lbCountDown.node)
            .to(0.2, { scale: 1.1 }, {
                easing: "backOut"
            })
            .to(0.1, { scale: 1 })
            .start();
    }
}
