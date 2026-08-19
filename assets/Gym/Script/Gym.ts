
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
    @property(cc.AudioClip)
    soundClick: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundCoin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundConfirm: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundWin: cc.AudioClip = null;
    @property(cc.Node)
    game: cc.Node = null
    @property(cc.Node)
    guildUpgrade: cc.Node = null
    @property(cc.Node)
    guildUpgrade2: cc.Node = null
    @property(cc.Node)
    phaohoa: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Node)
    listE: cc.Node = null
    @property(cc.Label)
    lbCoin: cc.Label = null
    @property(cc.Node)
    dayTa1: cc.Node = null
    @property(cc.Sprite)
    fillBar: cc.Sprite = null
    @property(cc.Node)
    endCard: cc.Node = null
    @property(cc.Node)
    coinBar: cc.Node
    @property(cc.Node)
    logo: cc.Node = null
    @property(cc.Node)
    textGuild1: cc.Node = null
    @property(cc.Node)
    door: cc.Node = null;
    @property(cc.Node)
    listIconPt: cc.Node = null;
    @property(cc.Node)
    listPt: cc.Node = null
    @property(cc.Prefab)
    preCoin: cc.Prefab = null;
    arrPosDone=[cc.v3(-213.047,-138.697),cc.v3(-90,-69)]
    // @property(cc.Node)
    // listCrunch:cc.Node=null
    arrPosCus = []
    arrCus = []
    arrIconPt = []
    isStep = 0
    arrCrunch = []
    isHind = false
    adChanel = '{{__adv_channels_adapter__}}'

    start() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBG, true, 0.5)
        this.scheduleOnce(() => {
            for (let i = 0; i < 3; i++) {
                let child = this.listCusNode.children[i];
                child.getChildByName("pop").active = true
            }
            this.textGuild1.active = true
            // this.listIconPt.active=true
        }, 0.6)
        // this.scheduleOnce(() => {
        //     this.npc.active = true
        // }, 1)
        // this.scheduleOnce(() => {
        //     cc.tween(this.npc).by(0.2, { opacity: -255, position: cc.v3(0, -80) }).call(() => {
        //         this.npc.active = false
        //     }).start()
        // }, 4)
        for (let i = 0; i < this.listCusNode.childrenCount; i++) {
            this.arrCus.push(this.listCusNode.children[i])
        }
        for (let i = 0; i < this.listIconPt.children[0].childrenCount; i++) {
            this.arrIconPt.push(this.listIconPt.children[0].children[i])
        }
        for (let i = 0; i < this.listCrunch.childrenCount; i++) {
            this.arrCrunch.push(this.listCrunch.children[i])
        }
        // this.spawFistCustomer()
    }
    spawFistCustomer() {
        let arr = [cc.v3(438, -159), cc.v3(577, -256)];
        for (let i = 0; i < this.arrCus.length; i++) {
            let cus = this.arrCus[i]
            cus.getComponent("cusGym").move(this.arrPosCus[i], 2.5)
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

        }, 2.5)
        this.scheduleOnce(() => {
            this.npc2.active = true
        }, 4)
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
        cc.audioEngine.play(this.soundClick, false, 1)
        this.moveCus(tag)
        if (this.isStep == 0) {
            this.isStep = 1;
            this.listIconPt.active = true;
            this.scheduleOnce(() => {
                this.arrIconPt[0].getChildByName("hand").active = true
            }, 0.3)
        }
        else if (this.isStep == 2) {
            this.arrIconPt[1].getComponent(cc.Button).enabled = true;
            this.arrIconPt[1].getChildByName("hand").active = true


        }
        else if (this.isStep == 3) {
            this.arrIconPt[2].getComponent(cc.Button).enabled = true;
            this.arrIconPt[2].getChildByName("hand").active = true


        }
    }
    offIconPt(node) {
        node.children[1].active = true;
        node.getChildByName("hand").active = false
    }
    clickPt(event, tag) {
        let pt = null;
        cc.audioEngine.play(this.soundClick, false, 1)
        let btn = event.currentTarget.getComponent(cc.Button);
        btn.enabled = false
        if (this.isStep == 1) {
            btn.enabled = false
            cc.tween(this.textGuild1).to(0.5, { opacity: 0 }).start()
            pt = this.listPt.children[0];
            this.isStep = 2
            pt.active = true
            this.door.getComponent(cc.Animation).play("door_open")
            let anim = pt.children[0].getComponent(sp.Skeleton)
            anim.setAnimation(0, "WalkOutL", true)
            anim.timeScale = 2
            cc.tween(pt).to(2.6, { position: cc.v3(-1.6, -92) }).to(0.5, { position: cc.v3(-100, -80) }).call(() => {
                anim.setAnimation(0, "WorkFL", true)
                anim.timeScale = 1
                this.activeCus(0)

            }).start()
            this.scheduleOnce(() => {
                this.arrCus[1].getChildByName("pop").getChildByName("hand").active = true
                this.arrCus[1].getChildByName("pop").getComponent(cc.Button).enabled = true
            }, 2)
            this.scheduleOnce(() => {
                pt.parent = this.node

            }, 0.3)
            this.scheduleOnce(() => {
                this.door.getComponent(cc.Animation).play("door_close")

            }, 0.7)
            this.offIconPt(this.arrIconPt[0])

        }
        else if (this.isStep == 2) {
            pt = this.listPt.children[0];
            this.isStep = 3
            pt.active = true
            this.door.getComponent(cc.Animation).play("door_open")
            let anim = pt.children[0].getComponent(sp.Skeleton)
            anim.setAnimation(0, "WalkOutL", true)
            anim.timeScale = 2
            cc.tween(pt).to(0.4, { position: cc.v3(310, 52) }).call(() => {
                pt.scaleX = -1
            }).to(2, { position: cc.v3(698.565, -184.59) }).call(() => {
                pt.scaleX = 1
            }).to(1.5, { position: cc.v3(348.565, -333) }).call(() => {
                anim.setAnimation(0, "WorkFL", true)
                anim.timeScale = 1
                this.activeCus(1)

            }).start()
            this.scheduleOnce(() => {
                this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true
                this.arrCus[2].getChildByName("pop").getComponent(cc.Button).enabled = true

            }, 2)
            this.scheduleOnce(() => {
                pt.parent = this.node
            }, 0.2)
            this.scheduleOnce(() => {
                this.door.getComponent(cc.Animation).play("door_close")

            }, 0.7)
            this.offIconPt(this.arrIconPt[1])
        }
        else if (this.isStep == 3) {
            pt = this.listPt.children[0];
            this.isStep = 4
            pt.active = true
            this.door.getComponent(cc.Animation).play("door_open")
            let anim = pt.children[0].getComponent(sp.Skeleton)
            anim.setAnimation(0, "WalkOutL", true)
            anim.timeScale = 2
            cc.tween(pt).to(0.4, { position: cc.v3(310, 52) }).call(() => {
                pt.scaleX = -1
            }).to(2, { position: cc.v3(850, -120) }).call(() => {
                anim.setAnimation(0, "WorkFL", true)
                anim.timeScale = 1
                pt.scaleX = 1
                this.activeCus(2)
            }).start()
            this.scheduleOnce(() => {
                this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true
            }, 2)
            this.scheduleOnce(() => {
                pt.parent = this.node
            }, 0.2)
            this.scheduleOnce(() => {
                this.door.getComponent(cc.Animation).play("door_close")

            }, 0.7)
            this.offIconPt(this.arrIconPt[2])
        }
    }
    isCountAction = 0
    activeCus(value) {
        let char = null
        switch (value) {
            case 0:
                char = this.arrCrunch[0].getChildByName("char")
                char.getComponent("cusGym").gapBung()
                char.position = cc.v3(1, -16)
                this.arrCrunch[0].children[0].active = false
                this.arrCrunch[0].children[1].active = true
                this.createCoin(char, 4)
                break;
            case 1:
                char = this.dayTa1.getChildByName("char")
                char.getComponent("cusGym").dayTa()
                this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                this.dayTa1.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                char.position = cc.v3(-15.771 + 14, 7 - 5)
                this.createCoin(char, 4)

                break;
            case 2:
                this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);

                char = this.boxing1.getChildByName("char")
                char.getComponent("cusGym").boxing()
                this.createCoin(char, 4)

                break;
        }
        this.scheduleOnce(() => {
            // this.moveCusOut()
        }, 1.5)

    }
    createCoin(node, value) {
        let pos = node.parent.convertToWorldSpaceAR(node.position)
        pos = this.node.convertToNodeSpaceAR(pos)
        let coin = cc.instantiate(this.preCoin);
        coin.parent = this.node;
        coin.position = pos.add(cc.v3(0, 50))
        globalThis.gold += value
    }
    moveCus(value) {
        cc.audioEngine.play(this.soundCoin, false, 1)
        if (value == 1) {
            let char = this.arrCrunch[0].getChildByName("char")
            char.active = true;
            this.arrCus[0].active = false
        }
        else if (value == 2) {
            this.arrCus[1].active = false
            let char = this.dayTa1.getChildByName("char")
            char.active = true

        }
        else if (value == 3) {
            this.arrCus[2].active = false
            let char = this.boxing1.getChildByName("char")
            char.active = true
            // this.boxing1.children[0].getChildByName("notiBonusCoin").active = true
            // globalThis.gold += 2
            // this.arrCus[2].active = false

            // this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
            // this.boxing1.children[0].active = true
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
        if (value != 1) {
            this.isHind = true
        }
    }
    onHind() {
        let index = 1;

        this.schedule(() => {
            // tắt tất cả trước
            for (let i = 1; i < this.arrCus.length; i++) {
                let pop = this.arrCus[i].getChildByName("pop");
                let hand = pop.getChildByName("hand");
                hand.active = false;
            }

            // bật cái hiện tại
            let pop = this.arrCus[index].getChildByName("pop");
            let hand = pop.getChildByName("hand");
            hand.active = true;

            index++;
            if (index >= this.arrCus.length) {
                index = 1; // quay lại từ đầu
            }
        }, 0.5);
    }
    isCus = 0
    moveCame1() {
        cc.tween(this.game).to(0.5, { scale: 2.3 }).start()
        // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
        cc.tween(this.game).to(0.5, { position: cc.v3(200, -550) }).start()
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
        cc.audioEngine.play(this.soundConfirm, false, 1)
        this.isCountStep++
        if (this.isCountStep < 5) {
            this.fillBar.fillRange = this.isCountStep * 0.25
            // this.listE.children[this.isCountStep - 1].active = true

        }
        let btn = this.guildUpgrade.children[2].getChildByName("Button")
        btn.active = true;
        btn.position = cc.v3(60 * this.isCountStep, -17.93)
        if (this.isCus == 0) {
            let char = this.listCrunch.children[0].getChildByName("char")
            char.getChildByName("vfx").getComponent(cc.Animation).play()
            char.getComponent(cc.Animation).play()

            if (this.isCountStep == 5) {
                cc.audioEngine.play(this.soundCoin, false, 1)

                char.getChildByName("notiBonusCoin2").active = true
                char.getComponent("cusGym").happy()
                char.position = cc.v3(-67, -50)
                this.guildUpgrade.active = false;
                this.move4()
                globalThis.gold += 200
                this.phaohoa.getComponent(cc.Animation).play()
                this.scheduleOnce(() => {
                    cc.tween(char).to(0.3, { opacity: 0 }).start()

                }, 1)
            }
        }
        else if (this.isCus == 1) {
            let char = this.boxing1.children[0]

            char.getChildByName("vfx").getComponent(cc.Animation).play()

            if (this.isCountStep == 5) {
                cc.audioEngine.play(this.soundCoin, false, 1)

                globalThis.gold += 200

                char.getChildByName("notiBonusCoin2").active = true

                char.getComponent("cusGym").happy()
                this.guildUpgrade.active = false;
                // this.move4()
                this.phaohoa.getComponent(cc.Animation).play()
                this.scheduleOnce(() => {
                    cc.tween(char).to(0.3, { opacity: 0 }).start()
                }, 1)

            }
            if (this.isCountStep == 4) {
                this.linkToStore.active = true
            }
        }
        else if (this.isCus == 2) {
            let char = this.boxing2.children[0]
            char.getChildByName("vfx").getComponent(cc.Animation).play()

            // if (this.isCountStep == 2) {
            //     this.linkToStore.active = true
            // }
        }
    }
    onEndgame() {
        cc.audioEngine.play(this.soundWin, false, 1)
        this.endCard.active = true;
        this.linkToStore.active = true
    }
    move2() {
        this.scheduleOnce(() => {
            cc.tween(this.game).to(0.5, { scale: 1 }).start()
            // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
            cc.tween(this.game).to(0.5, { position: cc.v3(0, 0) }).start()
            this.isCus = 1
            this.isCountStep = 0
            this.fillBar.fillRange = 0

        }, 1)
        this.scheduleOnce(() => {
            this.move3()
        }, 1.7)
    }
    move3() {
        cc.tween(this.game).to(0.5, { scale: 2.7 }).start()
        // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
        cc.tween(this.game).to(0.5, { position: cc.v3(-1973, -120) }).start()
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
            this.fillBar.fillRange = 0
        }, 1)
        this.scheduleOnce(() => {
            this.move5()
        }, 1.7)
    }
    move5() {
        cc.tween(this.game).to(1, { scale: 1.7 }).start()
        // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
        cc.tween(this.game).to(1, { position: cc.v3(1100, 100) }).start()
        // let text = this.guildUpgrade.getChildByName("New Label")
        // text.getComponent(cc.Label).string = "Last one! Finish strong!"
        this.scheduleOnce(() => {
            this.guildUpgrade2.active = true
        }, 0.5)
    }
    dem1 = 0;
    dem2 = 0
    btn_upgrade2(event, value) {
        cc.audioEngine.play(this.soundConfirm, false, 1)
        if (value == "1") {
            let fill = this.guildUpgrade2.getChildByName("bgTrain2").children[1]
            let btn = this.guildUpgrade2.getChildByName("bgTrain2").getChildByName("Button")
            let char = this.dayTa1.children[0]
            char.getComponent(cc.Animation).play();
            char.getChildByName("vfx").getComponent(cc.Animation).play();
            this.dem1++
            fill.getComponent(cc.Sprite).fillRange = this.dem1 * 0.2
            btn.active = true;
            btn.position = cc.v3(50 * this.dem1, -17.93)
            if (this.dem1 == 5) {
                event.currentTarget.active = false
                cc.audioEngine.play(this.soundCoin, false, 1)

                char.getChildByName("notiBonusCoin2").active = true
                char.getComponent("cusGym").happy()
                char.position = cc.v3(-81, -45)
                globalThis.gold += 200
                this.phaohoa.getComponent(cc.Animation).play()
                this.scheduleOnce(() => {
                    cc.tween(char).to(0.3, { opacity: 0 }).start()

                }, 1)

            }
        }
        else {
            let fill = this.guildUpgrade2.getChildByName("bgTrain").children[1]
            let char = this.boxing2.children[0]
            let btn = this.guildUpgrade2.getChildByName("bgTrain").getChildByName("Button")

            char.getComponent(cc.Animation).play();
            char.getChildByName("vfx").getComponent(cc.Animation).play();
            this.dem2++
            btn.active = true;
            btn.position = cc.v3(50 * this.dem2, -17.93)
            fill.getComponent(cc.Sprite).fillRange = this.dem2 * 0.2
            if (this.dem2 == 5) {
                event.currentTarget.active = false

                cc.audioEngine.play(this.soundCoin, false, 1)

                char.getChildByName("notiBonusCoin2").active = true
                char.getComponent("cusGym").happy()
                globalThis.gold += 200
                this.phaohoa.getComponent(cc.Animation).play()
                this.scheduleOnce(() => {
                    cc.tween(char).to(0.3, { opacity: 0 }).start()

                }, 1)

            }
        }

        if (this.dem1 == 5 && this.dem2 == 5) {
            cc.tween(this.guildUpgrade2).to(0.26, { opacity: 0 }).call(() => {
                this.guildUpgrade2.active = false
            }).start()
            this.scheduleOnce(() => {
                this.move2()
            }, 0.8)
        }
    }
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1

        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        this.guildUpgrade.scale = (logic) ? 2.4 : 1
        this.guildUpgrade2.scale = (logic) ? 1.6 : 1

        this.camera.node.position = cc.v3(0, 0)
        this.lbCoin.string = globalThis.gold.toString()
        this.npc.scale = (logic) ? 1.7 : 1
        this.npc2.scale = (logic) ? 1.7 : 1
        this.npc.y = (logic) ? -700 : 0
        this.npc2.y = (logic) ? -700 : 0
        this.endCard.scale = (logic) ? 1.5 : 0.7
        this.logo.scale = (logic) ? 1.5 : 1
        this.coinBar.scale = (logic) ? 1.5 : 1;
        this.coinBar.getComponent(cc.Widget).top = 77;
        this.logo.getComponent(cc.Widget).top = 48
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
            this.camera.zoomRatio = 1.7
            this.camera.node.position = cc.v3(150, 0)
            this.phaohoa.scale = (logic) ? 7 : 3
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.coinBar.getComponent(cc.Widget).top = 77 + 30;
                this.logo.getComponent(cc.Widget).top = 48 + 30
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.4
                this.guildUpgrade.scale = 1.8

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
