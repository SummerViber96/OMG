declare const window: any;
const { ccclass, property } = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    mainCamera: cc.Camera = null;
    // @property(cc.Node)
    // snow: cc.Node = null;
    @property(cc.Node)
    listChar1: cc.Node = null;
    @property(cc.Node)
    listChar2: cc.Node = null;
    @property(cc.Node)
    popStop: cc.Node = null;
    @property(cc.Node)
    listCardNode: cc.Node = null
    @property(cc.Node)
    hand: cc.Node = null
    @property(cc.Node)
    scene1: cc.Node = null;
    @property(cc.Node)
    scene2: cc.Node = null;
    @property(cc.Node)
    fire: cc.Node = null;
    @property(cc.Node)
    bep: cc.Node = null;
    @property(cc.Node)
    endcard: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Node)
    listBlanket: cc.Node = null;
    @property(cc.Prefab)
    preWood: cc.Prefab = null;
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundGioThoi: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundUpgrade: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundRang: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundZee: cc.AudioClip = null;

    isvertical = false
    start() {
        cc.audioEngine.play(this.soundGioThoi,true,0.8)
        cc.audioEngine.play(this.soundBg,true,0.8)
        window.gameReady && window.gameReady();

        this.scheduleOnce(() => {
            this.moveCamera()

        }, 0.2)
        // this.scheduleOnce(() => {
        //     for (let char of this.listChar1.children) {
        //         char.getComponent(C).slow()
        //     }
        // }, 0.6)
    }
    moveCamera() {
        cc.tween(this.mainCamera.node).by(2.6, { position: cc.v3(800, 100) }).start()
        cc.tween(this.mainCamera).to(2.6, { zoomRatio: 0.7 }).call(() => {
            this.scheduleOnce(() => {
                // for (let char of this.listChar1.children) {
                //     char.getComponent(C).getCold()
                //     char.getChildByName("status").active = false
                // }
                this.moveCamera2()

            }, 0.4)

        }).start()
        this.scheduleOnce(() => {
            this.scene1.getComponent(cc.Animation).getAnimationState("scene1_move").speed = 0.3
        }, 2)



    }
    moveCamera2() {
        cc.tween(this.mainCamera.node).by(0.45, { position: cc.v3(100, -100) }).start()
        cc.tween(this.mainCamera).to(0.45, { zoomRatio: 1.2 }).call(() => {
            this.turnPop1()
        }).start()
        // this.scheduleOnce(() => {
        //     this.popStop.active = true;

        // }, 0.25)
    }
    turnPop1() {
        this.listCardNode.children[0].active = true;
        this.listCardNode.children[1].active = true;
        this.hand.active = true
    }
    btn1() {
        cc.audioEngine.play(this.soundUpgrade, false, 1)

        this.hand.active = false
        this.listCardNode.children[0].getComponent(cc.Animation).play("card_off");
        this.listCardNode.children[1].getComponent(cc.Animation).play("card_off");
        this.scheduleOnce(() => {
            this.popStop.active = true;

        }, 1)
        this.scheduleOnce(() => {
            for (let char of this.listChar1.children) {
                char.getComponent(C).getCold()
                char.getChildByName("status").active = false
            }


            this.scene1.getComponent(cc.Animation).stop("scene1_move")
        }, 1.2)
        this.scheduleOnce(() => {
            for (let char of this.listChar1.children) {
                char.getComponent(C).die()

            }


        }, 1.7)
        this.scene2.getComponent(cc.Animation).play("scene2_stop")
        this.listChar2.children[3].getComponent(C).atkIdle()
        this.listChar2.children[4].getComponent(C).atkIdle()
        this.scheduleOnce(() => {
            this.listChar2.children[3].getComponent(C).atkIdle2()
            this.listChar2.children[4].getComponent(C).atkIdle2()
        }, 1)

        this.scheduleOnce(() => {
            cc.tween(this.mainCamera.node).by(0.45, { position: cc.v3(500, 100) }).start()
            cc.tween(this.mainCamera).to(0.45, { zoomRatio: 1 }).call(() => {
                this.turnPop2()
            }).start()
            this.popStop.active = false;

        }, 2)
    }
    btn2() {
        cc.audioEngine.play(this.soundUpgrade, false, 1)

        this.hand.active = false
        this.listCardNode.children[0].getComponent(cc.Animation).play("card_off");
        this.listCardNode.children[1].getComponent(cc.Animation).play("card_off");
        // this.listChar1.children[0].getComponent(C).walk()
        // this.listChar1.children[2].getComponent(C).walk()
        this.scene1.getComponent(cc.Animation).getAnimationState("scene1_move").stop()
        this.listChar1.children[0].getComponent(C).setDf()
        this.listChar1.children[2].getComponent(C).setDf()
        cc.tween(this.listChar1.children[0]).to(1.5, { position: cc.v3(-253, -110) }).call(() => {
            this.listChar1.children[0].getComponent(C).getHappy()
            this.listChar1.children[2].getComponent(C).getHappy()
            this.listChar1.children[2].parent = this.listChar2
            this.listChar1.children[0].parent = this.listChar2
            cc.audioEngine.play(this.soundZee, false, 1)

            //    this.scheduleOnce(()=>{
            for (let char of this.listChar1.children) {
                char.getComponent(C).die()

            }
            //    },0.5)

        }).start()
        cc.tween(this.listChar1.children[2]).to(1.5, { position: cc.v3(-126, -120) }).start()
        this.scheduleOnce(() => {
            cc.tween(this.mainCamera.node).by(0.45, { position: cc.v3(500, 100) }).start()
            cc.tween(this.mainCamera).to(0.45, { zoomRatio: 1 }).call(() => {
                this.turnPop2()
            }).start()
            this.popStop.active = false;

        }, 2)
    }




    turnPop2() {
        this.scheduleOnce(() => {
            // for (let char of this.listChar2.children) {
            //     char.getComponent(C).getCold()
            // }
            cc.audioEngine.play(this.soundRang,false,0.8)

            for (let i = 0; i < this.listChar2.childrenCount; i++) {
                this.scheduleOnce(() => {
                    this.listChar2.children[i].getComponent(C).getCold()

                }, 0.04 * i)
            }
            this.fire.scale = 1.5
        }, 0.3)
        this.scheduleOnce(() => {

            this.hand.active = true
            this.listCardNode.children[2].active = true;
            this.listCardNode.children[3].active = true;

        }, 1)

    }
    btn3() {
        cc.audioEngine.play(this.soundUpgrade, false, 1)

        this.hand.active = false
        this.listCardNode.children[2].getComponent(cc.Animation).play("card_off");
        this.listCardNode.children[3].getComponent(cc.Animation).play("card_off");
        this.listChar2.children[5].getComponent(C).walkSad()
        this.listChar2.children[6].getComponent(C).walkSad()
        this.listChar2.children[3].getComponent(C).walkSad()
        this.listChar2.children[4].getComponent(C).walkSad()
        if (this.listChar2.childrenCount >= 8) {
            this.listChar2.children[7].getComponent(C).walkSad()
            this.listChar2.children[8].getComponent(C).walkSad()
            cc.tween(this.listChar2.children[7]).to(1.5, { position: cc.v3(-700, -394) }).start()
            cc.tween(this.listChar2.children[8]).to(1.5, { position: cc.v3(-700, -394) }).start()
            this.scheduleOnce(() => {
                this.listChar2.children[7].getComponent(C).die()
                this.listChar2.children[8].getComponent(C).die()

            }, 2.8)
        }

        cc.tween(this.listChar2.children[3]).to(2, { position: cc.v3(-500, -394) }).start()
        cc.tween(this.listChar2.children[4]).to(2, { position: cc.v3(-500, -394) }).start()

        this.scheduleOnce(() => {
            this.listChar2.children[5].getComponent(C).die()
            this.listChar2.children[6].getComponent(C).die()
            this.listChar2.children[3].getComponent(C).die()
            this.listChar2.children[4].getComponent(C).die()
            this.step3(0)
        }, 2.8)
        this.scene2.getComponent(cc.Animation).play("scene2_move")

    }
    btn4() {
        cc.audioEngine.play(this.soundUpgrade, false, 1)

        this.hand.active = false
        this.listCardNode.children[2].getComponent(cc.Animation).play("card_off");
        this.listCardNode.children[3].getComponent(cc.Animation).play("card_off");
        this.listBlanket.children[2].active = true;
        this.listBlanket.children[3].active = true;
        for (let child of this.listChar2.children) {
            child.getChildByName("status").active = false
        }
        this.scheduleOnce(() => {
            this.listBlanket.children[0].active = false;
            this.listBlanket.children[1].active = false;
            this.createWood(this.listBlanket.children[0].position)
            this.createWood(this.listBlanket.children[1].position)

        }, 0.2)
        this.scheduleOnce(() => {
            this.fire.scale = 2.4
            cc.audioEngine.play(this.soundUpgrade, false, 1)

        }, 0.7)
        this.scheduleOnce(() => {

            this.step3(1)
        }, 1.6)
    }
    createWood(pos) {
        for (let i = 0; i < 2; i++) {
            pos = this.listBlanket.convertToWorldSpaceAR(pos);
            pos = this.listBlanket.convertToNodeSpaceAR(pos)
            let wood = cc.instantiate(this.preWood);
            wood.parent = this.bep;
            wood.position = pos;
            cc.tween(wood).delay(0.08 * i).to(0.3, { position: cc.v3(0, 0) }).call(() => {
                wood.children[0].active = true;
                this.scheduleOnce(() => {
                    wood.destroy()

                }, 0.3)
            }).start()
        }


    }
    step3(value) {
        this.scheduleOnce(() => {
            // for (let char of this.listChar2.children) {
            //     char.getComponent(C).hungry()
            // }
            if (value == 0) {
                this.listChar2.children[0].getComponent(C).hungry()
                this.listChar2.children[1].getComponent(C).hungry()
                this.listChar2.children[2].getComponent(C).hungry()
            }
            else {
                for (let i = 0; i < this.listChar2.childrenCount; i++) {
                    this.scheduleOnce(() => {
                        this.listChar2.children[i].getComponent(C).hungry()

                    }, 0.04 * i)
                }
                // for(let child of this.listChar2.children){
                //     child.getComponent(C).hungry()
                // }
            }

            this.fire.active = false
            this.bep.getComponent(sp.Skeleton).setAnimation(0, "Idle", true)

            this.scheduleOnce(() => {
                this.listCardNode.children[4].active = true;
                this.listCardNode.children[5].active = true;
            }, 0.5)
            this.scheduleOnce(() => {
                this.hand.active = true;
                this.linkToStore.active = true
            }, 0.8)
        }, 0.3)

    }
    update() {
        let canvas = this.node.getComponent(cc.Canvas);

        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // this.fitCamera.zoomRatio = 0.8
                // this.mainCamera.zoomRatio = 0.7
                // this.mainCamera.node.position = this.mainCamera.node.position.add( cc.v3(-100, 0))
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                // for (let child of this.uiFit.children) {
                //     child.scale = child.scale * 0.5;
                // }
                // this.uiFit.scaleX = 0.8
                // this.uiFit.scaleY = 0.8
                this.endcard.getChildByName("banner1").active = true;
                this.endcard.getChildByName("banner2").active = false;

            }
        }
        else {

            this.isvertical = false;
            // this.uiFit.children[0].scale = 0.4
            // this.uiFit.children[1].scale = 1

            // this.fitCamera.zoomRatio = 1
            // this.mainCamera.zoomRatio = 1.3
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.endcard.getChildByName("banner1").active = false;
            this.endcard.getChildByName("banner2").active = true;

        }

        // if (this.isFollow) {
        //     this.mainCamera.node.setPosition(this.isTarget.position.add(cc.v3(50, 0)).clampf(cc.v3(-520, -340), cc.v3(900, 340)));

        // }

    }
    // update (dt) {}
}
