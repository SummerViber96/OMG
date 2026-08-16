
globalThis.money = 0
const { ccclass, property } = cc._decorator;
declare const window: any;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    mainCamera: cc.Camera = null;
    @property(cc.Camera)
    mainCamera2: cc.Camera = null;
    @property(cc.Label)
    lbMoneyCollect: cc.Label = null;
    @property(cc.Node)
    listUnlock: cc.Node = null;
    @property(cc.Node)
    listPop: cc.Node = null;
    @property(cc.Node)
    hand: cc.Node = null
    @property(cc.Node)
    hand2: cc.Node = null
    @property(cc.Prefab)
    preMoney: cc.Prefab = null;
    @property(cc.Label)
    lbMoney: cc.Label = null
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Prefab)
    preSpawMoney: cc.Prefab = null
    @property(cc.Node)
    btnCollect: cc.Node = null;
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundUd: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundMoney: cc.AudioClip = null
    @property(cc.AudioClip)
    soundShow: cc.AudioClip = null
    @property(cc.Node)
    listKH3: cc.Node = null;
    @property(cc.Node)
    listKH1: cc.Node = null;
    @property(cc.Node)
    currentBar: cc.Node = null;
    adChanel = '{{__adv_channels_adapter__}}'

    isMoneyCollect = 50;
    isUnlock = 0;
    isUpgrade = false
    start() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.5)
        this.createMoney(cc.v3(0, 50))
        this.createMoney(cc.v3(214, 480))
       
    }
    spawMoney() {
        for (let i = 0; i < 10; i++) {
            let money = cc.instantiate(this.preSpawMoney)
            money.parent = this.btnCollect.parent
            let posEnd = this.lbMoney.node.parent.position
            let pos = this.btnCollect.position
            money.position = pos

            let rdx = Math.floor(Math.random() * 400) - 200
            let rdy = Math.floor(Math.random() * 400) - 200
            let pos2 = cc.v3(pos.x + rdx, pos.y + rdy)
            cc.tween(money).to(0.2, { position: pos2 }).to(0.5, { position: posEnd }).call(() => {
                money.destroy()
            }).start()
        }
    }
    btn_collect() {
        this.hand.active = false
        let count = this.isMoneyCollect
        this.isMoneyCollect = 0

        this.scheduleOnce(() => {
            globalThis.money += count;
        }, 0.7)

        if (count > 0) {
            this.spawMoney()
            cc.audioEngine.play(this.soundMoney, false, 1);

        }
        if (!this.isUpgrade) {
            if (this.isUnlock == 0) {

                if (this.isUnlock == 0) {
                    this.zoomCam(1)
                    this.isUnlock = 1;
                }
            }
            else if (this.isUnlock == 1) {
                if (this.isUnlock == 1 && globalThis.money >= 75) {
                    this.zoomCam(2)
                    this.isUnlock = 2;

                }
            }
            else if (this.isUnlock == 2) {
                if (this.isUnlock == 2 && globalThis.money >= 400) {
                    this.zoomCam(3)
                    this.isUnlock = 3;

                }
            }
            else if (this.isUnlock == 3) {
                console.log("zoom 4")
                if (this.isUnlock == 3 && globalThis.money >= 1200) {
                    this.zoomCam(4)
                    this.isUnlock = 5;

                }
            }
        }

        // else if (this.isUnlock == 3) {
        //     if (this.isUnlock == 3 && globalThis.money >= 1200) {
        //         this.zoomCam(4)
        //         this.isUnlock = 4;

        //     }
        // }
    }
    update(dt) {
        this.lbMoney.string = globalThis.money.toString()
        this.lbMoneyCollect.string = this.isMoneyCollect.toString()
        this.responsive();

    }
    setScreenSize(isHorizontal) {
        this.node.getComponent(cc.Canvas).fitWidth = (isHorizontal) ? false : true;
        this.node.getComponent(cc.Canvas).fitHeight = (isHorizontal) ? true : false;
    }
    responsive() {
        let deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width >= deviceResolution.height) {
            this.setScreenSize(true);
            this.mainCamera.node.active = false
            this.mainCamera2.node.active = true
            this.btnCollect.scale = 1.5
            this.currentBar.scale=0.9
        }
        else if (deviceResolution.width < deviceResolution.height) {
            this.setScreenSize(false);
            this.mainCamera.node.active = true
            this.mainCamera2.node.active = false
            this.btnCollect.scale = 1
            this.currentBar.scale=0.6

        }
    }
    btn_unlock(event, value) {
        event.currentTarget.parent.getComponent(cc.Animation).play("tag_close")
        cc.audioEngine.play(this.soundUd, false, 1)
        switch (value) {
            case "1":
                this.unlockNode(this.listUnlock.children[0]);
                globalThis.money -= 25
                this.createMoney(cc.v3(-123, -155))
                this.scheduleOnce(() => {
                    this.createMoney(cc.v3(-240, -226))
                }, 0.8)
                this.scheduleOnce(() => {
                    this.createMoney(cc.v3(100, -226))
                }, 1)
                this.listKH1.active = true
                break;
            case "2":
                this.unlockNode(this.listUnlock.children[1]);
                this.createMoney(cc.v3(524, -349))
                globalThis.money -= 75
                this.createMoney(cc.v3(524, -349))

                // this.createMoney(cc.v3(-123, -155))
                this.scheduleOnce(() => {
                    this.createMoney(cc.v3(645, -524))
                    this.createMoney(cc.v3(524, -349))

                }, 0.8)

                break;
            case "3":
                this.unlockNode(this.listUnlock.children[2]);
                // this.createMoney(cc.v3(-123, -155))
                // this.scheduleOnce(() => {
                //     this.createMoney(cc.v3(-240, -226))

                // }, 0.8)

                break;
            case "4":
                this.unlockNode(this.listUnlock.children[3]);
                globalThis.money -= 400
                this.createMoney(cc.v3(-147, 434))
                this.createMoney(cc.v3(-388, 498))

                this.scheduleOnce(() => {
                    this.createMoney(cc.v3(135, 441))
                    this.listKH3.active = true

                }, 0.8)

                break;
        }
    }
    createMoney(pos) {
        this.schedule(() => {
            cc.audioEngine.play(this.soundMoney, false, 1);

            let money = cc.instantiate(this.preMoney)
            money.parent = this.node;
            money.position = pos
            money.group = "cam"
            this.scheduleOnce(() => {
                this.isMoneyCollect += 25
            }, 0.2)
        }, 2)

    }
    zoomCam(value) {
        this.isUpgrade = true
        this.scheduleOnce(() => {
            cc.audioEngine.play(this.soundShow, false, 1)
        }, 0.4)
        switch (value) {
            case 1:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(() => {
                    // this.listPop.children[0].active = true
                }).start()

                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(() => {
                }).start()
                this.scheduleOnce(() => {
                    this.listPop.children[0].active = true
                }, 0.3)

                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-100, 0) }).delay(0.15).call(() => {
                    // this.listPop.children[0].active = true
                    this.hand2.active = true
                }).start()
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(-100, -100) }).delay(0.15).call(() => {
                    // this.listPop.children[0].active = true
                    this.hand2.active = true
                }).start()
                break;
            case 2:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(() => {
                }).start()
                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(() => {
                }).start()
                this.scheduleOnce(() => {
                    this.listPop.children[1].active = true
                }, 0.3)
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(481, -250) }).delay(0.15).call(() => {
                    // this.hand2.active = true
                }).start()
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(400, -350) }).delay(0.15).call(() => {
                    // this.hand2.active = true
                }).start()
                break;
            case 3:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(() => {
                }).start()
                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(() => {
                }).start()
                this.scheduleOnce(() => {
                    this.listPop.children[2].active = true
                }, 0.3)
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-69, 350) }).delay(0.15).call(() => {
                }).start()
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(-69, 350) }).delay(0.15).call(() => {
                }).start()
                break;
            case 4:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(() => {
                }).start()
                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(() => {
                }).start()
                this.scheduleOnce(() => {
                    this.listPop.children[3].active = true
                }, 0.3)
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(402, 166) }).delay(0.15).call(() => {
                    this.linkToStore.active = true
                }).start()
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(402, 300) }).delay(0.15).call(() => {
                    this.linkToStore.active = true
                }).start()
                break;
        }
    }
    unlockNode(node) {
        node.active = true
        for (let i = 0; i < node.childrenCount; i++) {
            this.scheduleOnce(() => {
                node.children[i].active = true;
                if (i == node.childrenCount - 1) {
                    this.scheduleOnce(() => {
                        this.zoomBack()

                    }, 0.5)
                }
            }, i * 0.05)
        }
    }
    zoomBack() {
        cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1 }).start()
        cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 1.5 }).start()

        cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(0, 0) }).call(() => {
            this.isUpgrade = false
        }).start()
        cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(0, 0) }).call(() => {
            this.isUpgrade = false
        }).start()
    }
}
