
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    sauce: cc.Node = null;
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
    startSauce() {
        this.node.children[0].active = false
    }
    end() {
        this.gamePlay.setReadyChicken()
    }

}
