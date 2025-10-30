declare const window: any;

const { ccclass, property } = cc._decorator;
globalThis.step = 0
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    listChar: cc.Node = null;
    @property(cc.Camera)
    mainCamera: cc.Camera = null;
    @property(cc.Sprite)
    fill: cc.Sprite = null;
    isStep = 0;
    @property(cc.Node)
    house: cc.Node = null;
    @property(cc.Node)
    buildingHouse1: cc.Node = null;
    @property(cc.Node)
    buildingHouse2: cc.Node = null;
    @property(cc.Node)
    house2: cc.Node = null;
    @property(cc.Node)
    uiNode: cc.Node = null;
    @property(cc.Node)
    hand1: cc.Node = null;
    @property(cc.Node)
    hand2: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:
    isvertical = false
    @property(cc.Node)
    endcard: cc.Node = null;
    @property(cc.Node)
    listTree: cc.Node[] = [];
    @property(cc.Node)
    pop1: cc.Node = null;
    @property(cc.Node)
    pop2: cc.Node = null;
    @property(cc.Prefab)
    preWood: cc.Prefab = null;
    @property(cc.Node)
    listHouseNew: cc.Node = null;
    @property(cc.Node)
    winFx: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundUd: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundPut: cc.AudioClip = null;
    @property(cc.Node)
    circle: cc.Node = null;
    @property(cc.Node)
    Joystick: cc.Node = null
    @property(cc.Node)
    test: cc.Node = null;
    isScale = 1
    moveDir = null;
    speed = 1000;
    directionX = null;
    isRun = true;
    check2 = false
    // onLoad () {}

    start() {
        cc.audioEngine.play(this.soundBg, true, 0.5)
        // window.gameReady && window.gameReady();

        let arrPos = [cc.v3(1212, -249), cc.v3(552, -306)]
        this.listChar.children[1].getComponent(C).tree = this.listTree[1];
        this.listChar.children[2].getComponent(C).tree = this.listTree[0];
        this.listChar.children[0].getComponent(C).tree = this.listTree[2];

        this.fitImg()
        this.scheduleOnce(() => {
            cc.tween(this.mainCamera.node).to(2, { position: cc.v3(400, 0) }).start()
            cc.tween(this.circle).to(1.5, { scaleX: 3 * 0.85, scaleY: 2 * 0.85 }).start()
            cc.tween(this.fill).to(1, { fillRange: 0.3 }).call(() => {
                this.fill.node.parent.getChildByName("lb").getComponent(cc.Label).string = "-50°c"
            }).start()

            this.listChar.children[1].getComponent(C).runPos(arrPos[0], 0.3)
            this.scheduleOnce(() => {

                this.listChar.children[1].getComponent(C).getIce()

                this.listChar.children[1].getComponent(C).onPause()

            }, 0.3)

            this.scheduleOnce(() => {
                this.listChar.children[2].getComponent(C).getIce()
                this.listChar.children[2].getComponent(C).onPause()
            }, 0.5)
            this.scheduleOnce(() => {

                this.listChar.children[0].getComponent(C).runPos(arrPos[1], 1)
                this.scheduleOnce(() => {
                    this.listChar.children[0].getComponent(C).angry()
                    cc.tween(this.mainCamera).to(0.6, { zoomRatio: 0.5 }).start()
                    cc.tween(this.mainCamera.node).to(0.6, { position: this.house.position.add(cc.v3(0, 200)) }).call(() => {
                        this.addEventListener()
                    }).start()

                }, 1.2)

            }, 0.8)
        }, 2)


    }
    OffEvent() {
        this.uiNode.off(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.uiNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.uiNode.off(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    }
    addEventListener() {
        this.hand1.active = true
        this.isStep = 1
        this.uiNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.uiNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.uiNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    }
    touchStartEvent() {

    }
    touchMoveEvent(event) {
        if (this.isStep == 1 || this.isStep == 3) {
            let pos = event.getLocation();
            // pos=this.uiNode.parent .convertToWorldSpaceAR(pos)
            pos = this.house.parent.convertToNodeSpaceAR(pos)
            this.house.position = pos;
            // console.log("move")
        }


    }
    touchEndEvent(event) {
        if (this.isStep == 1) {
            // let pos = event.getLocation();
            // pos = this.house.parent.convertToNodeSpaceAR(pos)
            cc.tween(this.house).to(0.3, { position: cc.v3(273, -391) }).start()
            // this.house.position = cc.v3(273, -391)
            // console.log(this.isStep,pos)

            this.isStep = 2;
            cc.audioEngine.play(this.soundUd, false, 0.5)

            this.buildingHouse1.getChildByName("NhaNgu").active = true
            this.hand1.active = false;
            this.listChar.children[1].getComponent(C).cutTree()
            this.listChar.children[1].position = cc.v3(1282, -276);

            this.listChar.children[2].getComponent(C).cutTree()
            cc.tween(this.mainCamera).to(0.3, { zoomRatio: 0.8 * this.isScale }).call(() => {
                this.house.getChildByName("pop").active = true;
                this.listChar.children[0].getComponent(C).runPos(cc.v3(760, -700), 1)
                this.listChar.children[1].getComponent(C).setTree(this.listTree[1], this.listChar.children[0])

                this.listChar.children[3].active = true;
                this.listChar.children[3].getComponent(C).runPos(cc.v3(1100, -200), 1.5)
                this.listChar.children[2].getComponent(C).setTree(this.listTree[0], this.listChar.children[3])

                this.scheduleOnce(() => { this.listChar.children[3].getComponent(C).idle() }, 1.5)
                this.scheduleOnce(() => {
                    this.listChar.children[0].getComponent(C).idle()
                    globalThis.step = 1;
                }, 1)

                cc.tween(this.mainCamera.node).to(0.8, { position: cc.v3(1103, -302) }).start();
                this.scheduleOnce(() => {
                    this.phase2();
                }, 3.5)
            }).start()

        }
        else if (this.isStep == 3) {
            console.log("okei")
            this.house.position = cc.v3(1561, 921)
            this.isStep = 4;
            this.hand2.active = false
            cc.tween(this.mainCamera).to(0.3, { zoomRatio: 0.7 * this.isScale }).call(() => {
                this.house.getChildByName("losuoi2").children[1].active = true
                cc.audioEngine.play(this.soundUd, false, 0.5)

                this.scheduleOnce(() => {
                    this.doWood2()

                }, 1)
                this.scheduleOnce(() => {
                    this.listChar.children[1].active = false;
                    this.listChar.children[2].active = false;

                    cc.tween(this.mainCamera).to(0.3, { zoomRatio: 0.35 * this.isScale }).start()
                    cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(1000, 700) }).call(() => {
                        this.winFx.active = true

                    }).start()

                    this.listHouseNew.active = true;
                    cc.audioEngine.play(this.soundUd, false, 0.5)
                    cc.tween(this.circle).to(1, { scaleX: 3 * 2.5, scaleY: 2 * 2.5 }).start()



                }, 2.5)
                this.scheduleOnce(() => {
                    this.OffEvent()
                    this.linkToStore.active = true
                    this.endcard.active = true
                }, 4)
            }).start()
            cc.tween(this.mainCamera.node).to(0.8, { position: cc.v3(1950, 1100) }).start();

        }
    }
    phase2() {
        cc.tween(this.mainCamera.node).to(0.8, { position: cc.v3(400, -500) }).start();
        this.listChar.children[0].getComponent(C).runPos(cc.v3(550, -600), 1)

        this.listChar.children[3].getComponent(C).runPos(cc.v3(550, -400), 1)
        this.scheduleOnce(() => {
            this.listChar.children[0].getComponent(C).idle()
            this.listChar.children[3].getComponent(C).idle()
            this.transWood(this.listChar.children[0].getChildByName("bag"))
            this.transWood(this.listChar.children[3].getChildByName("bag"))
            globalThis.chatGo = true

        }, 1)
        this.scheduleOnce(() => {
            cc.tween(this.mainCamera).to(0.3, { zoomRatio: 0.4 * this.isScale }).start()
            cc.tween(this.mainCamera.node).to(0.3, { position: this.house.position.add(cc.v3(0, 200)) }).start()

            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundUd, false, 0.5)

                this.buildingHouse2.getChildByName("NhaNgu").active = true;
                this.isStep = 3
                this.check2 = true
                this.Joystick.active = true
                this.hand2.active = true
                // this.isRun=true
            }, 0.5)
            this.house.getChildByName("losuoi2").active = true
            cc.tween(this.circle).to(0.6, { scaleX: 3 * 1.2, scaleY: 2 * 1.2 }).start()
            cc.audioEngine.play(this.soundUd, false, 0.5)


        }, 2)
    }
    transWood(heroBag) {
        let count = 0
        let pos = this.pop1.parent.convertToWorldSpaceAR(this.pop1.position);
        pos = heroBag.convertToNodeSpaceAR(pos).add(cc.v3(0, 80));
        let fill = this.pop1.getChildByName("fill").getComponent(cc.Sprite);
        for (let i = heroBag.childrenCount - 1; i >= 0; i--) {
            count++
            let wood = heroBag.children[i];
            let midPos = cc.v2((wood.x + pos.x) / 2, wood.y + 500);
            cc.tween(wood).delay(count * 0.08).parallel(
                cc.tween().bezierTo(0.4, cc.v2(wood.x, wood.y), midPos, cc.v2(pos.x, pos.y + 200)),
                cc.tween().to(0.4, { angle: 360, scale: 1.7 }).call(() => {
                    fill.fillRange += 0.1
                    wood.destroy()
                    cc.audioEngine.play(this.soundPut, false, 0.5)

                })
            )
                .start()

        }
    }
    doWood2() {
        let bag1 = this.house2.getChildByName("listGo");
        let bag2 = this.house2.getChildByName("listGo2");
        this.transWood2(bag1);
        this.transWood2(bag2);


    }
    transWood2(heroBag) {
        let count = 0
        let pos = this.pop2.parent.convertToWorldSpaceAR(this.pop1.position);
        pos = heroBag.convertToNodeSpaceAR(pos).add(cc.v3(0, 80));
        let fill = this.pop2.getChildByName("fill").getComponent(cc.Sprite);
        for (let i = heroBag.childrenCount + 2; i >= 0; i--) {
            count++
            let wood = cc.instantiate(this.preWood)
            wood.position = cc.v3(0, 0)

            wood.parent = heroBag

            let midPos = cc.v2((wood.x + pos.x) / 2, wood.y + 5000)
            cc.tween(wood).delay(count * 0.1).parallel(
                cc.tween().bezierTo(0.6, cc.v2(wood.x, wood.y), midPos, cc.v2(pos.x, pos.y + 200)),
                cc.tween().to(0.6, { scale: 1.7 }).call(() => {
                    fill.fillRange += 0.09
                    cc.audioEngine.play(this.soundPut, false, 0.5)

                    wood.destroy()

                })
            )
                .start()

        }
    }
    // update(dt) {

    // }
    update() {
        // this.mainCamera.zoomRatio=1
        this.circle.position = this.house.position
        if (this.isStep == 1 || this.isStep == 3) {
            this.mainCamera.node.setPosition(this.house.position.add(cc.v3(0, 200)));

        }
        // this.fitImg()
        let canvas = this.node.getComponent(cc.Canvas);

        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;

                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.isScale = 1
                this.mainCamera.zoomRatio = 0.9
                this.endcard.getChildByName("banner1").active = true;
                this.endcard.getChildByName("banner2").active = false;
                this.fitSizeImg(true)
                // if (cc.winSize.height / cc.winSize.width < 1.35) {
                //     canvas.fitHeight = true;

                // }


            }
        }
        else {
            // console.log("doi")
            if (this.isvertical) {
                this.mainCamera.zoomRatio = 1.5
                this.isvertical = false;
                canvas.fitHeight = true;
                canvas.fitWidth = false;
                this.isScale = 1.5

                this.endcard.getChildByName("banner1").active = false;
                this.endcard.getChildByName("banner2").active = true;
                this.fitSizeImg(false)
                // if (cc.winSize.height / cc.winSize.width < 1.35) {
                //     canvas.fitHeight = true;

                // }
            }


        }




        if (this.moveDir && this.directionX && this.isRun && this.check2 == true) {
            if (this.isStep == 1 || this.isStep == 3) {
                let newPos = this.house.position.add(this.moveDir.mul(this.speed / 60));
                // this.node.setPosition(newPos.clampf(cc.v3(-cc.winSize.width / 2 + 50, -cc.winSize.height / 2 + 250), cc.v3(cc.winSize.width / 2 - 50, cc.winSize.height / 2 - 50)));
                // console.log(this.gamePlay)

                this.house.setPosition(newPos);
            }

        }



    }
    fitSizeImg(value) {
        if (value) {


            if (cc.winSize.height / cc.winSize.width < 1.35) {
                let width = cc.winSize.width
                let check = 1171 / width;
                this.endcard.getChildByName("banner1").height = 1936 / check;
                this.endcard.getChildByName("banner1").width = cc.winSize.width;
            }
            else {
                let height = cc.winSize.height
                let check = 1936 / height;
                this.endcard.getChildByName("banner1").width = 1171 / check;
                this.endcard.getChildByName("banner1").height = cc.winSize.height;
            }
        }
        else {
            console.log("fit2")
            if (cc.winSize.width / cc.winSize.height < 1.35) {
                console.log("fit22")

                let height = cc.winSize.height
                let check = 854 / height;
                this.endcard.getChildByName("banner2").width = 1560 / check;
                this.endcard.getChildByName("banner2").height = cc.winSize.height;
            }
            else {
                let width = cc.winSize.width;
                let check = 1560 / width;
                this.endcard.getChildByName("banner2").height = 854 / check;
                this.endcard.getChildByName("banner2").width = cc.winSize.width;
            }








        }
    }
    fitImg() {
        let canvas = this.node.getComponent(cc.Canvas);

        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;

                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.mainCamera.zoomRatio = 0.9
                this.isScale = 1
                this.endcard.getChildByName("banner1").active = true;
                this.endcard.getChildByName("banner2").active = false;
                this.fitSizeImg(true)

            }
        }
        else {
            // console.log("doi")

            this.mainCamera.zoomRatio = 1.5
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.isScale = 1.5

            this.endcard.getChildByName("banner1").active = false;
            this.endcard.getChildByName("banner2").active = true;
            this.fitSizeImg(false)



        }
    }

    // update (dt) {}
}
