

const { ccclass, property } = cc._decorator;
declare const window: any;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    bep: cc.Node = null;
    @property(cc.Node)
    char: cc.Node = null
    @property(cc.Camera)
    mainCamera: cc.Camera = null;
    @property(cc.Node)
    listTree: cc.Node = null;
    @property(cc.Node)
    land: cc.Node = null
    @property(cc.Node)
    hand1: cc.Node = null
    @property(cc.Node)
    hand2: cc.Node = null;
    @property(cc.Node)
    hand3: cc.Node = null;
    @property(cc.Node)
    hand4: cc.Node = null;
    @property(cc.Node)
    hand5: cc.Node = null;
    @property(cc.Node)
    luoi: cc.Node = null;
    @property(cc.Node)
    river: cc.Node = null;
    @property(cc.Node)
    river2: cc.Node = null;
    @property(cc.Node)
    uiNode: cc.Node = null;
    @property(cc.Node)
    listCard: cc.Node = null;
    @property(cc.Node)
    woodFarm: cc.Node = null;
    @property(cc.Node)
    bomb: cc.Node = null;
    @property(cc.Node)
    pop: cc.Node = null;
    @property(cc.Node)
    house: cc.Node = null;
    @property(cc.Node)
    fxShow: cc.Node = null;
    @property(cc.Node)
    listChar: cc.Node = null;
    @property(cc.Node)
    pop2: cc.Node = null
    @property(cc.Node)
    linkToSotre: cc.Node = null
    charComp = null;
    isvertical = false;
    isHand2 = false;


    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundud: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundClick: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundbomb: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundZee: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundPut: cc.AudioClip = null;
    isPut = false;
    isWater = false;
    start() {
        window.gameReady && window.gameReady();
        this.charComp = this.char.getComponent("character")
        this.scheduleOnce(() => {
            this.bep.getComponent(cc.Animation).play("bep_tat")
            this.charComp.getCold()
        }, 1)
        this.scheduleOnce(() => {
            cc.tween(this.mainCamera.node).to(0.5, { position: cc.v3(2500, -80) }).start()
        }, 1.5)
        cc.audioEngine.play(this.soundBg, true, 0.8)



    }
    btn1(event) {
        cc.audioEngine.play(this.soundClick, false, 0.8)

        this.hand1.active = false
        let btn = event.currentTarget;
        btn.getComponent(cc.Button).enabled=false
        let pos = btn.parent.convertToWorldSpaceAR(btn.position);
        pos = this.listTree.convertToNodeSpaceAR(pos);
        for (let childs of this.listTree.children) {
            for (let child of childs.children) {
                let rd = Math.floor(Math.random() * 3);
                if (child.x < pos.x) {
                    cc.tween(child).delay(rd * 0.1).to(0.2, { angle: -90 }).start();
                }
                else {
                    cc.tween(child).delay(rd * 0.1).to(0.2, { angle: 90 }).start();
                }
            }

        }
        this.land.getChildByName("River").active = true;
        this.scheduleOnce(() => {
            cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(1900, -400) }).call(() => {
                this.luoi.active = true;
                this.scheduleOnce(() => {
                    this.hand2.active = true;
                    this.addEventListener()
                }, 0.3)
            }).start()

        }, 0.6)
    }
    addEventListener() {
        this.uiNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.uiNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.uiNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    }
    touchStartEvent() {
        // console.log("okei")
        cc.audioEngine.play(this.soundClick, false, 0.8)

    }
    touchMoveEvent() {

    }
    touchEndEvent() {
        console.log("okei")
        if (!this.isWater) {
            this.offEventListener()
            this.isWater = true

        }

    }
    offEventListener() {
        this.uiNode.off(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.uiNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.uiNode.off(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.luoi.active = false;
        this.river.active = true;
        this.hand2.active = false;
        this.land.getComponent(cc.Animation).play("mo_song")

        this.scheduleOnce(() => {
            this.river2.active = true;
            this.moveTree()
        }, 0.3)

    }
    moveTree() {
        // let pos = cc.v3(-198.253, -268.241)
        // for (let child of this.listTree.children) {
        //     cc.tween(child).to(0.5, { position: pos }).start()
        // }
        this.listTree.getComponent(cc.Animation).play("tree")
        this.scheduleOnce(() => {
            this.showCard1()
        }, 1)
    }
    showCard1() {
        this.listCard.children[0].active = true
        this.listCard.children[1].active = true

        this.scheduleOnce(() => {
            this.hand3.active = true
        }, 0.4)

    }
    transWood() {
        let count = 0
        let pos = this.pop.parent.convertToWorldSpaceAR(this.pop.position);
        pos = this.charComp.bag.convertToNodeSpaceAR(pos).add(cc.v3(0, 80));
        let fill = this.pop.getChildByName("fill").getComponent(cc.Sprite);
        for (let i = this.charComp.bag.childrenCount - 1; i >= 0; i--) {
            count++
            let wood = this.charComp.bag.children[i];
            let midPos = cc.v2((wood.x + pos.x) / 2, wood.y + 350)
            cc.tween(wood).delay(count * 0.08).parallel(
                cc.tween().bezierTo(0.4, cc.v2(wood.x, wood.y), midPos, cc.v2(pos.x, pos.y)),
                cc.tween().by(0.4, { angle: -360 }).call(() => {
                    fill.fillRange += 1 / 8
                    wood.destroy()
                    if (!this.isPut) {
                        this.isPut = true
                        cc.audioEngine.play(this.soundPut, false, 0.8)
                        this.scheduleOnce(() => {
                            this.isPut = false
                        }, 0.12)
                    }

                    if (i == 0) {
                        console.log("full")
                        cc.tween(this.pop).to(0.1, { scale: 1.5 }).start()
                        this.hand4.active = true;
                        this.pop.children[0].getComponent(cc.Button).enabled = true
                    }
                    else {
                        this.pop.getComponent(cc.Animation).play()

                    }
                })
            )
                .start()

        }
    }
    btn_2() {
        // cc.audioEngine.play(this.soundClick, false, 0.8)
        cc.audioEngine.play(this.soundClick, false, 0.8)
        cc.audioEngine.play(this.soundud, false, 0.8)

        this.house.active = true;
        this.hand4.active = false
        cc.tween(this.mainCamera).by(0.3, { zoomRatio: -0.2 }).start()
        this.bep.active = true;
        this.fxShow.active = true;
        this.scheduleOnce(() => {
            this.phase3();
        }, 1)
    }
    phase3() {
        this.listChar.active = true;
        let listPos = [cc.v3(101, 73), cc.v3(180, -180), cc.v3(-275, -195), cc.v3(-41, -254)]
        cc.audioEngine.play(this.soundZee, false, 0.4)

        for (let i = 0; i < this.listChar.childrenCount; i++) {
            this.listChar.children[i].getComponent("character").runPos(listPos[i], 0.7)
            this.scheduleOnce(() => {
                this.listChar.children[i].getComponent("character").getHappy()

            }, 0.75)
        }
        this.charComp.getHappy()
        this.scheduleOnce(() => {
            this.phase4()
        }, 1.3)
    }
    phase4() {
        this.pop2.active = true
        this.pop2.getComponent(cc.Animation).play()
        // let listPos = [cc.v3(101, 73), cc.v3(180, -180), cc.v3(-275, -195), cc.v3(-41, -254)]
        let listPos = [cc.v3(1245, -675), cc.v3(1271, -813), cc.v3(1369, -979), cc.v3(1281.075, -927.336)]
        cc.tween(this.mainCamera.node).to(2, { position: cc.v3(1700, -400) }).start()
        for (let i = 0; i < this.listChar.childrenCount; i++) {
            this.listChar.children[i].getComponent("character").runPos(listPos[i], 2)
            this.scheduleOnce(() => {
                this.listChar.children[i].getComponent("character").idle()
                if (i == this.listChar.childrenCount - 1) {
                    this.listChar.children[i].getComponent("character").addWood(null, true)

                }
                else {
                    this.listChar.children[i].getComponent("character").addWood(null, false)

                }

            }, 2)


        }
        this.charComp.runPos(cc.v3(1243, -589), 2)
        this.scheduleOnce(() => {
            this.charComp.idle()
            this.charComp.addWood(null)
        }, 2)
        this.scheduleOnce(() => {

            this.phase5()
        }, 3)

    }
    phase5() {
        let listPos = [cc.v3(101, 73), cc.v3(180, -180), cc.v3(-275, -195), cc.v3(-41, -254)]

        // let listPos = [cc.v3(101, 235), cc.v3(615, -127), cc.v3(-430, -149), cc.v3(-75, -373)]
        cc.tween(this.mainCamera.node).to(2, { position: cc.v3(0, 0) }).start()
        this.charComp.runPos(cc.v3(244, -93), 2)
        this.scheduleOnce(() => {
            this.charComp.idle()

        }, 2)
        this.scheduleOnce(() => {
            this.transWood2(this.char)

        }, 2.4)
        for (let i = 0; i < this.listChar.childrenCount; i++) {
            this.listChar.children[i].getComponent("character").runPos(listPos[i], 2)
            this.scheduleOnce(() => {
                this.listChar.children[i].getComponent("character").idle()

            }, 2.2)
            this.scheduleOnce(() => {
                // for (let child of this.listChar.children) {

                //     this.transWood2(child)

                // }
                for (let i = 0; i < this.listChar.childrenCount; i++) {
                    let child = this.listChar.children[i]
                    this.scheduleOnce(() => {
                        this.transWood2(child)

                    }, 0.07 * i)
                }

            }, 2.4)
            this.scheduleOnce(() => {
                cc.tween(this.pop2).to(0.2, { scale: 1.5 }).start()
                this.hand5.active = true;
                this.linkToSotre.active = true
            }, 3.8)
        }


    }
    btn_chooseCard(event, customEventData) {
        this.hand3.active = false
        if (customEventData == "1") {
            cc.audioEngine.play(this.soundbomb, false, 0.8)
            cc.audioEngine.play(this.soundClick, false, 0.8)
            this.listCard.children[0].getComponent(cc.Animation).play("card_off");
            this.listCard.children[1].getComponent(cc.Animation).play("card_off");
            this.scheduleOnce(() => {
                this.bomb.active = true;

            }, 0.3)
            this.scheduleOnce(() => {
                this.woodFarm.active = true;
                this.listTree.destroy()

            }, 0.6)
            this.scheduleOnce(() => {
                // this.woodFarm.active = true;
                // this.listTree.destroy()
                cc.tween(this.mainCamera.node).to(0.5, { position: cc.v3(0, 0) }).delay(0.5).call(() => {
                    this.charComp.run(cc.v3(1184, -637))

                }).to(1, { position: cc.v3(1500, -400) }).start()
            }, 1.2)
        }

    }
    phase2() {
        cc.tween(this.mainCamera.node).to(2, { position: cc.v3(0, 0) }).start()
    }

    transWood2(char) {
        // console.log("transWood2")
        let count = 0
        let bag = char.getComponent("character").bag
        let pos = this.pop.parent.convertToWorldSpaceAR(this.pop.position);
        pos = bag.convertToNodeSpaceAR(pos).add(cc.v3(0, 80));
        let fill = this.pop2.getChildByName("fill").getComponent(cc.Sprite);
        for (let i = bag.childrenCount - 1; i >= 0; i--) {
            console.log("transWood2sss")

            count++
            let wood = bag.children[i];
            let midPos = cc.v2((wood.x + pos.x) / 2, wood.y + 350)
            cc.tween(wood).delay(count * 0.08).parallel(
                cc.tween().bezierTo(0.4, cc.v2(wood.x, wood.y), midPos, cc.v2(pos.x, pos.y)),
                cc.tween().by(0.4, { angle: -360 }).call(() => {
                    fill.fillRange += 0.05
                    wood.destroy()
                    if (!this.isPut) {
                        this.isPut = true
                        cc.audioEngine.play(this.soundPut, false, 0.8)
                        this.scheduleOnce(() => {
                            this.isPut = false
                        }, 0.12)
                    }
                    // if (i == 0) {
                    //     console.log("full")
                    //     cc.tween(this.pop).to(0.1, { scale: 1.5 }).start()
                    // }
                    // else {
                    this.pop2.getComponent(cc.Animation).play()

                    // }
                })
            )
                .start()

        }
    }
    update() {
        let canvas = this.node.getComponent(cc.Canvas);

        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;

                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.mainCamera.zoomRatio = 0.9


            }
        }
        else {
            this.mainCamera.zoomRatio = 1.5
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;


        }



    }

    // update (dt) {}
}
