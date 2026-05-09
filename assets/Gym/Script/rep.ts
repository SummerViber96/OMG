globalThis.monsterRep = 0
globalThis.youRep = 0

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    @property(cc.Sprite)
    fill: cc.Sprite = null
    rep = 0
    @property(cc.Boolean)
    isMonster = false
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    gamePLay = null
    isFirst = false
    start() {
        this.gamePLay = cc.Canvas.instance.node.getComponent("Gym3")
    }
    hit() {
        this.rep++;
        if (this.rep == 50) {
            this.gamePLay.to50rep()
        }
        if (this.isMonster) {
            globalThis.monsterRep = this.rep
        }
        else {
            globalThis.youRep = this.rep
        }
        this.label.string = this.rep.toString()
        // this.fill.fillRange = (100 - this.rep) / 100
        if (this.rep == 100) {
            if (this.isMonster) {
                this.gamePLay.onEndGame(false)
            }
            else {
                this.gamePLay.onEndGame(true)

            }
        }
        if (!this.isFirst) {
            this.loadFill()
            this.isFirst = true
        }

    }
    loadFill() {
        cc.tween(this.fill).to(80, { fillRange: 0 }).call(() => {
            this.gamePLay.onEndGame(false)

        }).start()
    }
    upgradeMonster() {
        // if (this.isMonster) {
        cc.tween(this.fill).to(30, { fillRange: 0 }).call(() => {
            this.gamePLay.onEndGame(false)

        }).start()
        // }
    }
    // update (dt) {}
}
