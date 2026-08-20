// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    @property(cc.Integer)
    tag = 0
    gamePlay = null
    btn = null
    machineParentName = ""
    machineIndex = 0

    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym")

    }
    moveIn(fncDone) {
        this.node.active = true;

        let anim = this.anim
        anim.setAnimation(0, "WalkOutL", true)
        anim.timeScale = 2
        console.log("move in, this.tag", this.tag)
        switch (Number(this.tag)) {
            case 0:
                cc.tween(this.node).to(2.6, { position: cc.v3(-1.6, -92) }).to(0.5, { position: cc.v3(-100, -80) }).call(() => {
                    anim.setAnimation(0, "WorkFL", true)
                    anim.timeScale = 1
                    fncDone()
                    this.scheduleOnce(() => {
                        this.moveOut()
                    }, 2)
                }).start()
                break;
            case 1://may day ta 1
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).call(() => {
                    this.node.scaleX = -1
                }).to(2, { position: cc.v3(698.565, -184.59) }).call(() => {
                    this.node.scaleX = 1
                }).to(1.5, { position: cc.v3(348.565, -333) }).call(() => {
                    anim.setAnimation(0, "WorkFL", true)
                    anim.timeScale = 1
                    fncDone()
                    this.scheduleOnce(() => {
                        this.moveOut()
                    }, 2)
                }).start()
                break
            case 2: //may boxing
                anim.setAnimation(0, "WalkOutL", true)
                anim.timeScale = 2
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).call(() => {
                    this.node.scaleX = -1
                }).to(2, { position: cc.v3(850, -120) }).call(() => {
                    anim.setAnimation(0, "WorkFL", true)
                    anim.timeScale = 1
                    this.node.scaleX = 1
                    fncDone()
                    this.scheduleOnce(() => {
                        this.moveOut()
                    }, 2)
                }).start()
                break;
            case 3://may day ta 2
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).call(() => {
                    this.node.scaleX = -1
                }).to(2, { position: cc.v3(698.565, -184.59) }).call(() => {
                    this.node.scaleX = 1
                }).to(0.6, { position: cc.v3(572, -203) }).call(() => {
                    anim.setAnimation(0, "WorkFL", true)
                    anim.timeScale = 1
                    fncDone()
                    this.scheduleOnce(() => {
                        this.moveOut()
                    }, 2)
                }).start()

                break;
            case 4:// may day 2
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).to(0.5, { position: cc.v3(442, -35) }).to(0.8, { position: cc.v3(267, -146) }).call(() => {
                    anim.setAnimation(0, "WorkFL", true)
                    anim.timeScale = 1
                    fncDone()
                    this.scheduleOnce(() => {
                        this.moveOut()
                    }, 2)
                }).start()
                break;
            case 5://may day3
                cc.tween(this.node).to(1.5, { position: cc.v3(86, -10) }).to(0.5, { position: cc.v3(40, 14) }).call(() => {
                    anim.setAnimation(0, "WorkFL", true)
                    anim.timeScale = 1
                    fncDone()
                    this.scheduleOnce(() => {
                        this.moveOut()
                    }, 2)
                }).start()
                break;
            case 6://may day4
                cc.tween(this.node).to(1, { position: cc.v3(182.844, 90) }).call(() => {
                    anim.setAnimation(0, "WorkFL", true)
                    anim.timeScale = 1
                    fncDone()
                    this.scheduleOnce(() => {
                        this.moveOut()
                    }, 2)
                }).start()
                break;
        }
    }
    moveOut() {

        let anim = this.anim
        anim.setAnimation(0, "WalkOutL", true)
        let finishMoveOut = () => {
            this.node.active = false
            this.gamePlay.onIconPt(this.btn)
            if (this.machineParentName) {
                this.gamePlay.releaseMachinePt(this.machineParentName, this.machineIndex)
            }
        }
        switch (Number(this.tag)) {
            case 0:
                this.node.scaleX = -1
                cc.tween(this.node).to(0.5, { position: cc.v3(-1.6, -92) }).to(2.6, { position: cc.v3(382, 120) }).call(() => {
                    finishMoveOut()
                }).start()
                this.scheduleOnce(() => {
                    this.gamePlay.openDoor()
                }, 2.6)
                break;
            case 1:
                this.node.scaleX = -1


                cc.tween(this.node).to(1.5, { position: cc.v3(698.565, -184.59) }).call(() => {
                    this.node.scaleX = 1
                }).to(2, { position: cc.v3(310, 52) }).call(() => {
                    this.node.scaleX = -1
                }).to(0.4, { position: cc.v3(382, 120) }).call(() => {
                    finishMoveOut()

                }).start()
                this.scheduleOnce(() => {
                    this.gamePlay.openDoor()
                }, 3.5)
                break;
            case 2:
                this.node.scaleX = 1

                cc.tween(this.node).to(2, { position: cc.v3(310, 52) }).call(() => {
                    this.node.scaleX = -1
                }).to(0.4, { position: cc.v3(382, 120) }).call(() => {
                    finishMoveOut()

                }).start()
                this.scheduleOnce(() => {
                    this.gamePlay.openDoor()
                }, 2)
                break;
            case 3:
                this.node.scaleX = 1

                cc.tween(this.node).to(0.6, { position: cc.v3(698.565, -184.59) }).call(() => {
                    this.node.scaleX = 1

                }).to(2, { position: cc.v3(310, 52) }).call(() => {
                    this.node.scaleX = -1

                }).to(0.4, { position: cc.v3(382, 120) }).call(() => {
                    finishMoveOut()

                }).start()
                this.scheduleOnce(() => {
                    this.gamePlay.openDoor()
                }, 2)
                break;
            case 4://gapbung2
                this.node.scaleX = -1
                cc.tween(this.node).to(0.8, { position: cc.v3(442, -35) }).to(0.5, { position: cc.v3(310, 52) }).to(0.4, { position: cc.v3(382, 120) }).call(() => {
                    finishMoveOut()

                }).start()
                this.scheduleOnce(() => {
                    this.gamePlay.openDoor()
                }, 2.6)
                break;
            case 5://gapbung2
                this.node.scaleX = -1
                cc.tween(this.node).to(0.5, { position: cc.v3(86, -10) }).to(1.5, { position: cc.v3(382, 120) }).call(() => {
                    finishMoveOut()

                }).start()
                this.scheduleOnce(() => {
                    this.gamePlay.openDoor()
                }, 2.6)
                break;
            case 6://gapbung2
                this.node.scaleX = -1
                cc.tween(this.node).to(1, { position: cc.v3(382, 120) }).call(() => {
                    finishMoveOut()

                }).start()
                this.scheduleOnce(() => {
                    this.gamePlay.openDoor()
                }, 2.6)
                break;



        }
    }
    update(dt) {
        // this.node.zIndex=-this.node.y
    }
}
