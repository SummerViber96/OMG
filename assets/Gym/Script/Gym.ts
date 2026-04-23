
const { ccclass, property } = cc._decorator;
globalThis.gold = 100
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Node)
    npc: cc.Node = null
    @property(cc.Node)
    npc2: cc.Node = null
    @property(cc.Node)
    listCusNode: cc.Node = null
    @property(cc.Node)
    listPlacePos: cc.Node = null
    @property(cc.Node)
    listCrunch: cc.Node = null
    @property(cc.Node)
    boxing1: cc.Node = null;
    @property(cc.Node)
    boxing2: cc.Node = null;
    @property(cc.AudioClip)
    soundBG: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundShowPop: cc.AudioClip = null;
    @property(cc.Node)
    game: cc.Node = null
    @property(cc.Node)
    guildUpgrade: cc.Node = null
    @property(cc.Node)
    phaohoa: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Node)
    listE: cc.Node = null
    @property(cc.Label)
    lbCoin: cc.Label = null
    arrPosCus = []
    arrCus = []
    arrCrunch = []
    start() {
        cc.audioEngine.play(this.soundBG, true, 0.5)
        this.scheduleOnce(() => {
            this.npc.active = true
        }, 2)
        this.scheduleOnce(() => {
            cc.tween(this.npc).by(0.2, { opacity: -255, position: cc.v3(0, -80) }).call(() => {
                this.npc.active = false
            }).start()
        }, 4)
        for (let i = 0; i < this.listCusNode.childrenCount; i++) {
            this.arrCus.push(this.listCusNode.children[i])
        }
        for (let i = 0; i < this.listPlacePos.childrenCount; i++) {
            this.arrPosCus.push(this.listPlacePos.children[i].position)
        }
        for (let i = 0; i < this.listCrunch.childrenCount; i++) {
            this.arrCrunch.push(this.listCrunch.children[i])
        }
        this.spawFistCustomer()
    }
    spawFistCustomer() {
        let arr = [cc.v3(438, -159), cc.v3(577, -256)];
        for (let i = 0; i < this.arrCus.length; i++) {
            let cus = this.arrCus[i]
            cus.getComponent("cusGym").move(this.arrPosCus[i], 3)
        }
        this.scheduleOnce(() => {
            for (let j = 0; j < 2; j++) {
                let cus = this.arrCus[j]
                cus.getComponent("cusGym").move(arr[j], 1 + 1 * j)
                this.scheduleOnce(() => {
                    cus.getComponent("cusGym").sit()
                    if (j == 0) {
                        cus.getComponent("cusGym").showPop()
                        cc.audioEngine.play(this.soundShowPop, false, 1)

                    }
                }, 1.1 + 1 * j)
            }
            for (let j = 2; j < this.arrCus.length; j++) {
                let cus = this.arrCus[j]
                cus.getComponent("cusGym").move(this.arrPosCus[j - 2], 1.6)

            }

        }, 3)
        this.scheduleOnce(() => {
            this.npc2.active = true
        }, 4.5)
    }
    isCloseTut = false
    btn_closeTut() {
        console.log("click")
        if (this.isCloseTut) return;
        this.isCloseTut = true
        cc.tween(this.npc).by(0.3, { opacity: -255, position: cc.v3(0, -80) }).call(() => {
            this.npc.active = false
        }).start()

    }
    doCus(tag) {
        cc.tween(this.npc2).by(0.2, { opacity: -255, position: cc.v3(0, -80) }).call(() => {
            this.npc.active = false
        }).start()
        this.moveCus(tag)
    }
    isCountAction = 0
    moveCus(value) {
        if (value == 1) {
            this.arrCrunch[0].getChildByName("char").active = true;
            this.arrCus[0].active = false
            this.arrCrunch[0].getChildByName("char").getChildByName("notiBonusCoin").active = true
            globalThis.gold += 2
            this.scheduleOnce(() => {
                this.arrCrunch[0].getChildByName("char").getComponent("cusGym").gapBung()
                this.arrCrunch[0].children[0].active = false
                this.arrCrunch[0].children[1].active = true
                let fill = this.arrCrunch[0].getChildByName("ProgressBar").getComponent(cc.Sprite);
                cc.tween(fill).to(2, { fillRange: 1 }).start()

                this.schedule(() => {
                    fill.fillRange = 0
                    cc.tween(fill).to(2, { fillRange: 1 }).start()

                }, 2)
            }, 0.5)
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundShowPop, false, 1)
                for (let i = 1; i < 4; i++) {
                    let pop = this.arrCus[i].getChildByName("pop")

                    pop.getComponent(cc.Button).enabled = true
                    pop.children[0].active = true
                    pop.active = true
                    if (i != 1) {
                        this.arrCus[0].getComponent("cusGym").tucGian()
                    }
                }
            }, 2)

        }
        else if (value == 2) {
            this.arrCrunch[1].getChildByName("char").getChildByName("notiBonusCoin").active = true
            globalThis.gold += 2
            this.arrCrunch[1].getChildByName("char").active = true;
            this.arrCus[1].active = false
            this.scheduleOnce(() => {
                this.arrCrunch[1].getChildByName("char").getComponent("cusGym").gapBung()
                this.arrCrunch[1].children[0].active = false
                this.arrCrunch[1].children[1].active = true
                let fill = this.arrCrunch[1].getChildByName("ProgressBar").getComponent(cc.Sprite);
                cc.tween(fill).to(2, { fillRange: 1 }).start()

                this.schedule(() => {
                    fill.fillRange = 0
                    cc.tween(fill).to(2, { fillRange: 1 }).start()
                }, 2)
            }, 0.5)

        }
        else if (value == 3) {
            this.boxing1.children[0].getChildByName("notiBonusCoin").active = true
            globalThis.gold += 2
            this.arrCus[2].active = false

            this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
            this.boxing1.children[0].active = true
        }
        else if (value == 4) {
            this.boxing2.children[0].getChildByName("notiBonusCoin").active = true
            globalThis.gold += 2
            this.arrCus[3].active = false

            this.boxing2.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
            this.boxing2.children[0].active = true
        }
        this.isCountAction++;
        if (this.isCountAction == 4) {
            this.scheduleOnce(() => {
                this.moveCame1()

            }, 1)
        }

    }
    isCus = 0
    moveCame1() {
        cc.tween(this.game).to(0.5, { scale: 2.7 }).start()
        // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
        cc.tween(this.game).to(0.5, { position: cc.v3(223, -600) }).start()
        this.scheduleOnce(() => {
            this.guildUpgrade.active = true
        }, 0.5)
        this.isCus = 0
    }
    update(dt) {
        let deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    }
    isCountStep = 0
    btn_upgrade() {
        this.isCountStep++
        if (this.isCountStep < 5) {
            this.listE.children[this.isCountStep - 1].active = true

        }
        if (this.isCus == 0) {
            if (this.isCountStep == 5) {
                let char = this.arrCrunch[0].getChildByName("char")
                char.getChildByName("notiBonusCoin2").active = true
                char.getComponent("cusGym").happy()
                char.position = cc.v3(-67, -50)
                this.guildUpgrade.active = false;
                this.move2()
                globalThis.gold += 200
                this.phaohoa.getComponent(cc.Animation).play()
                this.scheduleOnce(() => {
                    cc.tween(char).to(0.3, { opacity: 0 }).start()

                }, 1)
            }
        }
        else if (this.isCus == 1) {
            if (this.isCountStep == 5) {
                globalThis.gold += 200

                let char = this.boxing1.children[0]
                char.getChildByName("notiBonusCoin2").active = true

                char.getComponent("cusGym").happy()
                this.guildUpgrade.active = false;
                this.move4()
                this.phaohoa.getComponent(cc.Animation).play()
                this.scheduleOnce(() => {
                    cc.tween(char).to(0.3, { opacity: 0 }).start()

                }, 1)
            }
        }
        else if (this.isCus == 2) {
            if (this.isCountStep == 2) {
                this.linkToStore.active = true
            }
        }
    }
    move2() {
        this.scheduleOnce(() => {
            cc.tween(this.game).to(0.5, { scale: 1 }).start()
            // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
            cc.tween(this.game).to(0.5, { position: cc.v3(0, 0) }).start()
            this.isCus = 1
            this.isCountStep = 0
            for (let child of this.listE.children) {
                child.active = false
            }
        }, 1)
        this.scheduleOnce(() => {
            this.move3()
        }, 1.7)
    }
    move3() {
        cc.tween(this.game).to(0.5, { scale: 2.7 }).start()
        // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
        cc.tween(this.game).to(0.5, { position: cc.v3(-1973, -100) }).start()
        this.scheduleOnce(() => {
            this.guildUpgrade.active = true
        }, 0.5)
    }
    move4() {
        this.scheduleOnce(() => {
            cc.tween(this.game).to(0.5, { scale: 1 }).start()
            // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
            cc.tween(this.game).to(0.5, { position: cc.v3(0, 0) }).start()
            this.isCus = 2
            this.isCountStep = 0
            for (let child of this.listE.children) {
                child.active = false
            }
        }, 1)
        this.scheduleOnce(() => {
            this.move5()
        }, 1.7)
    }
    move5() {
        cc.tween(this.game).to(1, { scale: 2.7 }).start()
        // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
        cc.tween(this.game).to(1, { position: cc.v3(1453, 316) }).start()
        let text = this.guildUpgrade.getChildByName("New Label")
        text.getComponent(cc.Label).string = "Last one! Finish strong!"
        this.scheduleOnce(() => {
            this.guildUpgrade.active = true
        }, 0.5)
    }
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1

        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        // this.camera.node.position = cc.v3(0, -100)
        this.lbCoin.string = globalThis.gold.toString()
        // this.barCoin.y=(logic)?400:470
        if (logic == true) {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            // this.camera.node.position = cc.v3(-70, 0)

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            this.camera.zoomRatio = 1.3

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                console.log("check iphonex")

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1

            }
        }
        else {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.8
            }
        }


    }
}
