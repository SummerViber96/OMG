globalThis.monsterRep = 0
globalThis.youRep = 0

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    // label hiển thị %
    @property(cc.Label)
    percentLabel: cc.Label = null;

    @property(cc.Sprite)
    fill: cc.Sprite = null

    rep = 0

    @property(cc.Boolean)
    isMonster = false

    gamePLay = null
    isFirst = false
    private fillTween = null;

    start() {
        this.gamePLay = cc.Canvas.instance.node.getComponent("Gym3")

        // update % lúc start
        this.updatePercent()
    }

    hit() {
        if (this.gamePLay.isEndgame) return;

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

        // update fill theo rep
        // this.fill.fillRange = (100 - this.rep) / 100

        // update label %
        this.updatePercent()

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
    updatePercent() {
        let percent = Math.floor(this.fill.fillRange * 100)
        this.percentLabel.string = percent + "%"
    }
    stopFill() {
        if (this.fillTween) {
            this.fillTween.stop();
            this.fillTween = null;
        }
    }
    loadFill() {
        this.fillTween = cc.tween(this.fill)
            .to(
                80,
                { fillRange: 0 },
                {
                    progress: (start, end, current, ratio) => {
                        let value = start + (end - start) * ratio;

                        this.fill.fillRange = value;
                        this.updatePercent();

                        return value;
                    }
                }
            )
            .call(() => {
                this.fill.fillRange = 0;
                this.updatePercent();
                this.gamePLay.onEndGame(false);
            })
        this.fillTween.start()
        // .start();
    }

    upgradeMonster() {
        this.fillTween = cc.tween(this.fill)
            .to(
                30,
                { fillRange: 0 },
                {
                    progress: (start, end, current, ratio) => {
                        let value = start + (end - start) * ratio;

                        this.fill.fillRange = value;
                        this.updatePercent();

                        return value;
                    }
                }
            )
            .call(() => {
                this.fill.fillRange = 0;
                this.updatePercent();
                this.gamePLay.onEndGame(false);
            })
        this.fillTween.start();
    }
}