

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    shadow: cc.Node = null;
    @property(cc.Node)
    shadow2: cc.Node = null;
    @property(cc.Node)
    listBat: cc.Node[] = [];
    @property(cc.Node)
    tut: cc.Node = null
    @property(cc.Camera)
    camera1: cc.Camera = null;
    @property(cc.Camera)
    camera2: cc.Camera = null;
    @property(cc.Camera)
    uiCamera: cc.Camera = null
    @property(cc.Node)
    barStar: cc.Node = null
    // @property(cc.Node)
    // handFarm: cc.Node = null;
    @property(cc.Node)
    stickNode: cc.Node = null;

    @property(cc.Node)
    hand: cc.Node = null;

    @property(cc.Node)
    endCard: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Node)
    phaohoa: cc.Node = null
    //logic
    @property(cc.Node)
    logic: cc.Node = null;
    @property(cc.Node)
    houseCarrot: cc.Node = null;
    @property(cc.Node)
    houseTomato: cc.Node = null;
    @property(cc.Node)
    houseCorn: cc.Node = null
    @property(sp.Skeleton)
    sister: sp.Skeleton = null;
    @property(sp.Skeleton)
    dad: sp.Skeleton = null;
    @property(sp.Skeleton)
    mom: sp.Skeleton = null;
    @property(sp.Skeleton)
    son: sp.Skeleton = null;

    @property(cc.Node)
    farmTomato: cc.Node = null
    @property(cc.Node)
    farmPatoto: cc.Node = null
    @property(cc.Node)
    farmCorn: cc.Node = null;
    @property(cc.Prefab)
    preStar: cc.Prefab = null;
    @property(cc.Label)
    lbStart: cc.Label = null;
    //sound
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundPutIn: cc.AudioClip = null;

    @property(cc.AudioClip)
    soundVictory: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundZee: cc.AudioClip = null
    @property(cc.AudioClip)
    soundUpdate: cc.AudioClip = null
    @property(cc.AudioClip)
    soundChicken: cc.AudioClip = null;

    @property(cc.AudioClip)
    soundHit: cc.AudioClip = null
    @property(cc.AudioClip)
    soundGet: cc.AudioClip = null
    @property(cc.AudioClip)
    soundNhanGo: cc.AudioClip = null
    step = 1;
    protected start(): void {
        cc.audioEngine.play(this.soundBg, true, 0.5)
        cc.game.setFrameRate(60);
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;

        this.scheduleOnce(() => {
            cc.tween(this.camera2).by(0.5, { zoomRatio: 0.2 }).start()
            cc.tween(this.camera1).by(0.5, { zoomRatio: 0.5 }).start()
            cc.tween(this.camera1.node).to(0.5, { position: cc.v3(900, -300) }).start()
            cc.tween(this.camera2.node).to(0.5, { position: cc.v3(900, -300) }).start()

            this.scheduleOnce(() => {
                this.houseCarrot.getChildByName("pop").active = true
            }, 0.5)
        }, 1)



    }
    updateHouse() {
        this.stickNode.active = false
        let house = null
        switch (this.step) {
            case 1:
                house = this.houseCarrot;
                this.spawEnegy(this.farmPatoto)

                this.scheduleOnce(() => {
                    cc.tween(this.camera1.node).by(0.5, { position: cc.v3(-1200, 200) }).start()
                    cc.tween(this.camera2.node).by(0.5, { position: cc.v3(-1350, 200) }).start()

                }, 1.7)
                this.scheduleOnce(() => {

                    this.stickNode.position = cc.v3(-332, -41);
                    this.stickNode.getComponent(cc.BoxCollider).enabled = false
                    this.stickNode.active = true
                    this.hand.active = true
                    for (let child of this.farmTomato.children) {
                        child.getComponent(cc.PolygonCollider).enabled = true
                    }
                    this.houseTomato.getChildByName("pop").active = true
                }, 2.2)
                break;
            case 2:
                house = this.houseTomato;
                this.spawEnegy(this.farmTomato)

                this.mom.setAnimation(0, "poke", true)
                cc.audioEngine.play(this.soundChicken, false, 0.3)
                this.scheduleOnce(() => {
                    cc.tween(this.camera1.node).by(0.5, { position: cc.v3(-50, -900) }).start()
                    cc.tween(this.camera2.node).by(0.5, { position: cc.v3(180, -900) }).start()
                    cc.tween(this.camera2).by(0.5, { zoomRatio: -0.17 }).start()

                }, 1.7)
                this.scheduleOnce(() => {
                    this.stickNode.position = cc.v3(-471.401, -1082.157);
                    this.stickNode.getComponent(cc.BoxCollider).enabled = false
                    this.stickNode.active = true
                    this.hand.active = true
                    this.houseCorn.getChildByName("pop").active = true

                }, 2.2)
                break;
            case 3:
                house = this.houseCorn;
                this.spawEnegy(this.farmCorn)
                this.dad.setAnimation(0, "poke", true)
                this.son.setAnimation(0, "poke", true)
                this.scheduleOnce(() => {
                    cc.tween(this.camera1).by(0.6, { zoomRatio: -0.6 }).start()
                    // cc.tween(this.camera2).by(0.6, { zoomRatio: -0.2 }).start()
                    cc.tween(this.camera1.node).by(0.6, { position: cc.v3(1200, 1000) }).start()
                    cc.tween(this.camera2.node).by(0.6, { position: cc.v3(1000, 1000) }).start()
                }, 1)
                this.scheduleOnce(() => {
                    cc.tween(this.camera1).by(0.6, { zoomRatio: 1.1 }).start()
                    cc.tween(this.camera2).by(0.6, { zoomRatio: 1.1 }).start()
                    cc.tween(this.camera1.node).by(0.6, { position: cc.v3(0, 200) }).start()
                    cc.tween(this.camera2.node).by(0.6, { position: cc.v3(0, 200) }).start()
                    this.son.node.position = cc.v3(600, 212);
                    this.dad.node.position = cc.v3(801, 212);
                    this.sister.node.position = cc.v3(525, 98);
                    this.mom.node.position = cc.v3(876, 99)
                    this.mom.node.scale = 0.1;
                    this.mom.node.scaleX = -0.1;
                    this.sister.node.scale = 0.12
                    this.sister.setAnimation(0, "poke", true);
                    this.mom.setAnimation(0, "poke", true);
                    this.dad.setAnimation(0, "poke", true);
                    this.son.setAnimation(0, "poke", true);
                    cc.audioEngine.play(this.soundZee, false, 1)
                    this.phaohoa.active = true
                    cc.audioEngine.play(this.soundVictory, false, 1);

                    this.scheduleOnce(() => {
                        this.endCard.active = true;
                        this.linkToStore.active = true;

                    }, 1.2)
                }, 2)


                break;
        }

        this.step++
        let oldH = house.children[0]
        let newH = house.children[1]
        cc.tween(oldH).to(0.1, { scale: 1.4 }).to(0.1, { scale: 0.5 }).start()
        this.scheduleOnce(() => {
            newH.scale = 0.5
            newH.active = true
            this.sister.setAnimation(0, "poke", true)

            cc.tween(newH).to(0.3, { scale: 1.4 }).to(0.1, { scale: 1.3 }).call(() => {
            }).start()
        }, 0.25)

        house.getChildByName("vfx_update").active = true
        cc.audioEngine.play(this.soundUpdate, false, 1)
    }

    btn_start(event) {
        event.currentTarget.getComponent(cc.Button).enabled = false;
        cc.tween(this.shadow).to(0.4, { opacity: 0 }).start();
        cc.tween(this.tut.children[1]).by(0.4, { opacity: -255, position: cc.v3(-100, 0) }).call(() => {
            this.tut.active = false
        }).start()
        cc.tween(this.tut.children[2]).to(0.4, { opacity: 0 }).start()
        // cc.tween(tjos)
        cc.tween(this.camera1).by(0.8, { zoomRatio: -1.5 }).start()
        cc.tween(this.camera2).by(0.8, { zoomRatio: -1.6 }).start()
        cc.tween(this.camera1.node).to(0.8, { position: cc.v3(-270, -700) }).start()
        cc.tween(this.camera2.node).to(0.8, { position: cc.v3(-180, -700) }).start()
        this.scheduleOnce(() => {
            this.showTut1()
        }, 0.8)

    }
    showTut1() {
        cc.tween(this.shadow2).to(0.3, { opacity: 180 }).start()
        this.stickNode.active = true
    }
    // showTut2() {
    //     this.stickNode.active = false
    //     this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

    //     cc.tween(this.camera1.node).by(0.4, { position: cc.v3(-800, 0) }).start()
    //     cc.tween(this.camera2.node).by(0.4, { position: cc.v3(-800, 0) }).start()
    //     cc.tween(this.shadow2).to(0.4, { opacity: 0 }).call(() => { this.shadow2.active = false }).start()
    //     this.scheduleOnce(() => {
    //         this.listFood.active = true;
    //         cc.audioEngine.play(this.soundUpdate, false, 1)
    //     }, 0.4)
    //     this.scheduleOnce(() => {
    //         this.popChicken.active = true
    //     }, 0.5)
    // }
    // showTut3() {
    //     this.step = 3
    //     this.stickNode.active = false;
    //     cc.tween(this.camera1.node).by(0.7, { position: cc.v3(400, 0) }).start()
    //     cc.tween(this.camera2.node).by(0.7, { position: cc.v3(500, 0) }).start()
    //     cc.tween(this.camera1).by(0.7, { zoomRatio: 1 }).start()
    //     cc.tween(this.camera2).by(0.7, { zoomRatio: 1 }).start()
    //     this.scheduleOnce(() => {
    //         this.listFoodTable.active = true
    //         cc.audioEngine.play(this.soundUpdate, false, 1)

    //     }, 0.7)
    //     this.scheduleOnce(() => {
    //         cc.tween(this.camera1.node).by(1, { position: cc.v3(500, 500) }).start()
    //         cc.tween(this.camera2.node).by(1, { position: cc.v3(500, 500) }).start()
    //     }, 1)
    //     this.scheduleOnce(() => {
    //         this.phaohoa.active = true
    //         cc.audioEngine.play(this.soundVictory, false, 1)
    //         cc.audioEngine.play(this.soundZee, false, 1)
    //     }, 2.5)
    //     this.scheduleOnce(() => {
    //         this.endCard.active = true;
    //         this.linkToStore.active = true
    //     }, 2.7)
    // }
    // btn_chicken(event) {
    //     event.currentTarget.getComponent(cc.Button).enabled = false;
    //     this.stickNode.getComponent(cc.BoxCollider).enabled = false

    //     this.popEggs.active = true
    //     for (let child of this.popChicken.children) {
    //         child.getComponent(cc.Animation).play("pop_close");
    //     }
    //     this.scheduleOnce(() => {
    //         this.listFood.getComponent(cc.Animation).play()
    //         cc.audioEngine.play(this.soundPutIn, false, 1)
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundPutIn, false, 1)

    //         }, 0.05)
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundPutIn, false, 1)

    //         }, 0.1)
    //     }, 0.3)
    //     this.scheduleOnce(() => {
    //         cc.audioEngine.play(this.soundChicken, false, 0.5)
    //         this.listEggs.getComponent(cc.Animation).play()
    //         cc.audioEngine.play(this.soundUpdate, false, 1)
    //     }, 1.2)
    //     this.scheduleOnce(() => {
    //         cc.tween(this.camera1.node).by(1.2, { position: cc.v3(1200, 400) }).start()
    //         cc.tween(this.camera2.node).by(1.2, { position: cc.v3(1200, 400) }).start()
    //         cc.tween(this.camera1).by(1.2, { zoomRatio: 0.4 }).start()
    //         cc.tween(this.camera2).by(1.2, { zoomRatio: 0.4 }).start()
    //     }, 2.2)
    //     this.scheduleOnce(() => {
    //         this.schedule(() => {
    //             cc.audioEngine.play(this.soundPutIn, false, 1)
    //             this.popEggs.getComponent("popFarm").updateFill()
    //         }, 0.1, 4)
    //     }, 1.2 + 2)
    //     this.scheduleOnce(() => {
    //         this.popTomato.active = true
    //         cc.audioEngine.play(this.soundUpdate, false, 1)

    //     }, 4.3)
    //     this.scheduleOnce(() => {
    //         cc.tween(this.camera1.node).by(0.6, { position: cc.v3(-300, 0) }).start()
    //         cc.tween(this.camera2.node).by(0.6, { position: cc.v3(-500, 0) }).start()
    //         cc.tween(this.camera1).by(0.6, { zoomRatio: -0.4 }).start()
    //         cc.tween(this.camera2).by(0.6, { zoomRatio: -0.4 }).start()
    //     }, 4.7)
    //     this.scheduleOnce(() => {
    //         this.step = 2
    //         this.stickNode.active = true;
    //         this.stickNode.position = cc.v3(-288, -146);
    //         this.stickNode.scale = 0.8;
    //         this.stickNode.getChildByName("hand").active = true;
    //         this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    //         this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    //         for (let child of this.farmTomato.children) {
    //             child.getComponent(cc.PolygonCollider).enabled = true;
    //         }
    //     }, 4.7 + 0.6)
    // }
    spawEnegy(farm) {
        let pos = farm.parent.convertToWorldSpaceAR(farm.position)
        let posStart = cc.v3(0, 0)
        if (this.camera1.node.active == true) {
            pos = this.camera1.getWorldToScreenPoint(pos)
        }
        else {
            pos = this.camera2.getWorldToScreenPoint(pos)
        }

        posStart = this.uiCamera.getScreenToWorldPoint(pos);
        posStart = this.barStar.convertToNodeSpaceAR(posStart)
        this.createReward(this.preStar, posStart.add(cc.v3(0, -50)), this.barStar.position.add(cc.v3(-60, 0)), this.barStar)
        // this.scheduleOnce(() => {
        //     if (this.step == 1) {
        //         cc.tween(this.camera.node).by(0.5, { position: cc.v3(-450, -150) }).start()
        //         cc.tween(this.cameraNgang.node).by(0.5, { position: cc.v3(-450, -150) }).start()
        //         this.stickNode.position = cc.v3(1041, 1594);
        //         this.stickNode.active = true
        //         this.stickNode.getComponent(cc.BoxCollider).enabled = false
        //         for (let children of this.farmCorn.children) {
        //             children.getComponent(cc.PolygonCollider).enabled = true
        //         }
        //         this.pop2.active = true
        //         this.step = 2
        //         this.hand.active = true
        //     }
        // }, 1)
    }

    createReward(reward, posStart, posEnd, node) {
        this.scheduleOnce(() => {
            cc.audioEngine.play(this.soundNhanGo, false, 1)

        }, 0.5)
        for (let i = 0; i < 5; i++) {
            let rewardNode = cc.instantiate(reward);
            let nodeScale = rewardNode.scale;
            rewardNode.opacity = 0

            node.addChild(rewardNode);
            // rewardNode.zIndex=cc.macro.MIN_ZINDEX
            let distanceX = (i % 2 == 0) ? 40 : -40
            let distanceY = (i % 2 == 0) ? 40 : -40
            cc.tween(rewardNode).delay(0.15 * i).call(() => {
                cc.audioEngine.play(this.soundGet, false, 1)

            }).set({ active: true, scale: 0, position: posStart, opacity: 255 })
                .parallel(
                    cc.tween().bezierTo(0.25, posStart, posStart.add(cc.v2(0, 200 + distanceY * i)), posStart.add(cc.v2(distanceX * i, 30 + distanceY))),
                    cc.tween(rewardNode).to(0.25, { scale: nodeScale })
                ).call(() => {
                    // cc.audioEngine.play(this.soundSpone, false, 0.8)
                })
                .repeat(2,
                    cc.tween()
                        .to(0.1, { scale: nodeScale + 0.05 })
                        .to(0.1, { scale: nodeScale - 0.05 })
                )
                .call(() => {
                })
                .to(0.8, { position: posEnd })
                .call(() => {
                    // cc.audioEngine.play(this.soundHit, false, 0.5)
                    this.countStart++
                    rewardNode.children[0].active = false;
                    rewardNode.children[1].active = true;
                    // if (this.step <= 2) {
                    //     node.getComponent("btnMission").updateFill()

                    // }
                    // else if (this.step == 3 || this.step == 4) {
                    //     node.getComponent("btnMission").updateFill()
                    // }

                })
                .start();
        }

    }
    countStart = 0
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);

        this.camera1.node.active = (logic) ? false : true;
        this.camera2.node.active = (logic) ? true : false;
        canvas.fitWidth = (logic) ? true : false;
        canvas.fitHeight = (logic) ? false : true;
        this.logic.scale = (logic) ? 0.35 : 0.6;
        this.tut.scale = (logic) ? 1 : 1.5;
        this.tut.position = (logic) ? cc.v3(-297.23, -1107.423) : cc.v3(-1200, -1107.423);
        this.phaohoa.scale = (logic) ? 1 : 1.5;
        this.endCard.scale = (logic) ? 1 : 1.2;
        this.barStar.scale = (logic) ? 1 : 1.5
    }
    protected update(dt: number): void {
        this.lbStart.string = this.countStart.toString()
        let deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    }
}
