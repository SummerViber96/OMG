
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    sauce: cc.Node = null;
    @property(cc.AudioClip)
    soundCream1: cc.AudioClip = null
    @property(cc.AudioClip)
    soundCream2: cc.AudioClip = null
    gamePlay = null
    protected start(): void {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")
    }
    onSauce(value) {
        if (value == 1) {
            this.sauce.children[0].active = true
        }
        else {

            this.sauce.children[1].active = true
        }

    }
    onSound(value) {
        if (value == 1) {
            cc.audioEngine.play(this.soundCream1, false, 0.5)
        }
        else {
            cc.audioEngine.play(this.soundCream2, false, 0.5)

        }
    }
    startSauce() {
        this.node.children[0].active = false
    }
    end() {
        this.gamePlay.setReadyChicken()
    }

}
