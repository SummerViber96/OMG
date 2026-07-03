
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
    listTaDon: cc.Node[] = []
    @property(cc.Node)
    listTaTo: cc.Node[] = []
    @property(cc.Node)
    listItem: cc.Node = null;
    @property(cc.Node)
    listKhan: cc.Node = null;
    @property(cc.Node)
    listNuoc: cc.Node = null
    @property(cc.Node)
    giaTaNho: cc.Node = null;
    @property(cc.Node)
    giaTaLon: cc.Node = null
    @property(cc.SpriteFrame)
    imgtaDo: cc.SpriteFrame = null
    @property(cc.Node)
    charTut1: cc.Node = null
    @property(cc.Label)
    lbGuild: cc.Label = null
    @property(cc.Node)
    tuNuoc: cc.Node = null
    @property
    arrPosCus = []
    arrCus = []
    arrCrunch = []
    isHind = false
    adChanel = '{{__adv_channels_adapter__}}'
    isFristClick = false;
    isTargetCus = null
    start() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBG, true, 0.5)
        // this.scheduleOnce(() => {
        //     this.npc.active = true
        // }, 1)
        this.camera.node.position = cc.v3(250, -216)
        for (let i = 0; i < this.listCusNode.childrenCount; i++) {
            this.arrCus.push(this.listCusNode.children[i])
        }
        for (let i = 0; i < this.listPlacePos.childrenCount; i++) {
            this.arrPosCus.push(this.listPlacePos.children[i].position)
        }
        for (let i = 0; i < this.listCrunch.childrenCount; i++) {
            this.arrCrunch.push(this.listCrunch.children[i])
        }
        // cc.tween(this.camera.node).delay(0.5).to(0.5,{position:cc.v3(0,100)}).start()
        this.scheduleOnce(() => {
            this.camera.node.getComponent(cc.Animation).play()
            this.arrCus[0].getComponent("cusGym").moveToWait()
            for (let i = 1; i < this.arrCus.length; i++) {
                this.arrCus[i].getComponent("cusGym").move(this.arrPosCus[i - 1], 1)
            }
            this.isTargetCus = this.arrCus[0];
        }, 0.5)
        this.scheduleOnce(() => {
            this.npc.active = true
        }, 3)
        this.scheduleOnce(() => {
            cc.tween(this.npc).by(0.2, { opacity: -255, position: cc.v3(0, -80) }).call(() => {
                this.npc.active = false
                this.scheduleOnce(() => {
                    this.listItem.children[5].getChildByName("hand").active = true;
                    this.listItem.children[5].getComponent(cc.Button).enabled = true;
                    this.giaTaNho.children[0].active = true
                    this.listItem.children[5].children[0].active = true
                    this.npc2.active = true
                }, 0.1)

            }).start()
        }, 5)
        // this.spawFistCustomer()
    }
    isCountTaNho = 0
    isCountTaTo = 0
    isCountCus = 0
    isCountKhan = 0;
    isCountNuoc = 2;
    clickItem(item) {
        this.npc2.active = false

        if (!this.isFristClick) {
            this.isFristClick = true;
            this.giaTaNho.children[0].active = false
            // this.scheduleOnce(() => {

            // }, 0.8)
        }
        if (item.getChildByName("hand")) {
            item.getChildByName("hand").active = false

        }
        item.getChildByName("red").active = false;
        let pos = item.parent.convertToWorldSpaceAR(item.position);
        pos = this.node.convertToNodeSpaceAR(pos)
        let itemComp = item.getComponent("itemGym")
        if (itemComp.tag == 0) {
            let itemTarget = this.listTaDon[this.isCountTaNho]
            this.isCountTaNho++
            let posEnd = itemTarget.position;
            if (itemComp.colorG == 1) {
                itemTarget.children[1].getComponent(cc.Sprite).spriteFrame = this.imgtaDo
            }
            posEnd = itemTarget.parent.convertToWorldSpaceAR(posEnd);
            posEnd = this.node.convertToNodeSpaceAR(posEnd);
            let mag = 100;
            let midPos = cc.v2((pos.x + posEnd.x) / 2, posEnd.y + mag);
            cc.tween(item).bezierTo(0.6, cc.v2(pos.x, pos.y), midPos, cc.v2(posEnd.x, posEnd.y)).call(() => {
                item.active = false;
                itemTarget.active = true
                if (this.isCountCus == 0) {
                    this.isTargetCus.getComponent("cusGym").happy();
                    for (let child of this.listItem.children) {
                        if (child.active) {
                            child.getChildByName("red").active = true
                            child.getComponent(cc.Button).enabled = true
                        }
                    }
                    this.lbGuild.string = "Nice! Keep cleaning!"
                    this.npc2.active = true
                    this.npc2.getComponent(cc.Animation).play()
                    this.listItem.children[4].getChildByName("hand").active = true
                    this.scheduleOnce(() => {
                        this.npc2.active = false

                    }, 2)
                }
                this.checkStep()

            }).start()
        }
        else if (itemComp.tag == 1) {
            let itemTarget = this.listTaTo[this.isCountTaTo]
            this.isCountTaTo++
            let posEnd = itemTarget.position;

            posEnd = itemTarget.parent.convertToWorldSpaceAR(posEnd);
            posEnd = this.node.convertToNodeSpaceAR(posEnd);
            let mag = 100;
            let midPos = cc.v2((pos.x + posEnd.x) / 2, posEnd.y + mag);
            cc.tween(item).bezierTo(0.6, cc.v2(pos.x, pos.y), midPos, cc.v2(posEnd.x, posEnd.y)).call(() => {
                item.active = false;
                itemTarget.active = true
                this.isTargetCus.getComponent("cusGym").happy();
                // this.isCountCus++
                this.checkStep()


            }).start()

        }
        else if (itemComp.tag == 2) {
            let itemTarget = this.listKhan.children[this.isCountKhan]
            this.isCountKhan++
            let posEnd = itemTarget.position;

            posEnd = itemTarget.parent.convertToWorldSpaceAR(posEnd);
            posEnd = this.node.convertToNodeSpaceAR(posEnd);
            let mag = 100;
            let midPos = cc.v2((pos.x + posEnd.x) / 2, posEnd.y + mag);
            cc.tween(item).bezierTo(0.6, cc.v2(pos.x, pos.y), midPos, cc.v2(posEnd.x, posEnd.y)).call(() => {
                item.active = false;
                itemTarget.active = true
                this.isTargetCus.getComponent("cusGym").happy();
                // this.isCountCus++
                this.checkStep()


            }).start()
        }
        else if (itemComp.tag == 3) {
            let itemTarget = this.listNuoc.children[this.isCountNuoc]
            this.isCountNuoc++
            let posEnd = itemTarget.position;

            posEnd = itemTarget.parent.convertToWorldSpaceAR(posEnd);
            posEnd = this.node.convertToNodeSpaceAR(posEnd);
            let mag = 100;
            let midPos = cc.v2((pos.x + posEnd.x) / 2, posEnd.y + mag);
            cc.tween(item).bezierTo(0.6, cc.v2(pos.x, pos.y), midPos, cc.v2(posEnd.x, posEnd.y)).call(() => {
                item.active = false;
                itemTarget.active = true

                this.isTargetCus.getComponent("cusGym").happy();

                this.checkStep()

            }).start()
        }
    }
    checkStep() {
        this.isCountCus++
        if (this.isCountCus == 6) {
            let finalPos = cc.v3(-227, -60);
            this.isTargetCus.getComponent("cusGym").move3(finalPos, 2)
            this.scheduleOnce(() => {
                this.isTargetCus.active = false;
                this.charTut1.active = true;

            }, 2)
            this.scheduleOnce(() => {
                cc.tween(this.camera.node).to(0.8, { position: cc.v3(-20, 130) }).to(0.8, { position: cc.v3(-220, 130) }).start()
                this.arrCus[1].getComponent("cusGym").moveToWait2()

            }, 1.4)
            this.scheduleOnce(() => {
                this.arrCus[1].getChildByName("pop").active = true
                this.tuNuoc.children[0].active = true
                this.tuNuoc.getChildByName("hand").active = true;
                this.tuNuoc.getComponent(cc.Button).enabled = true
            }, 3.4)
        }

    }
    btn_tuNuoc(event) {
        event.currentTarget.getComponent(cc.Button).enabled = false;
        this.tuNuoc.children[0].active = false
        this.tuNuoc.getChildByName("hand").active = false;
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
        cc.tween(this.npc2).by(0.2, { opacity: -255, position: cc.v3(0, -80) }).call(() => {
            this.npc.active = false
        }).start()
        this.moveCus(tag)
    }
    isCountAction = 0
    moveCus(value) {
        cc.audioEngine.play(this.soundCoin, false, 1)
        if (value == 1) {
            let char = this.arrCrunch[0].getChildByName("char")
            char.active = true;
            this.arrCus[0].active = false
            char.getChildByName("notiBonusCoin").active = true
            globalThis.gold += 2
            this.scheduleOnce(() => {
                char.getComponent("cusGym").gapBung()
                char.position = cc.v3(1, -16)
                this.arrCrunch[0].children[0].active = false
                this.arrCrunch[0].children[1].active = true

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
                this.scheduleOnce(() => {
                    this.onHind()
                }, 3)
            }, 1.4)

        }
        else if (value == 2) {
            this.arrCus[1].active = false
            this.dayTa1.getChildByName("char").active = true;
            let char = this.arrCrunch[0].getChildByName("char")
            char.active = true;
            this.arrCus[0].active = false
            this.dayTa1.getChildByName("char").getChildByName("notiBonusCoin").active = true
            char.getChildByName("notiBonusCoin").active = true
            globalThis.gold += 2
            this.scheduleOnce(() => {
                this.dayTa1.getChildByName("char").getComponent("cusGym").dayTa()
                // this.dayTa1.getChildByName("char").position = cc.v3(1, -16)
                this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                this.dayTa1.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true)


                char.getComponent("cusGym").gapBung()
                char.position = cc.v3(1, -16)
                this.arrCrunch[0].children[0].active = false
                this.arrCrunch[0].children[1].active = true

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
        this.camera.zoomRatio = 1.5

        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        this.guildUpgrade.scale = (logic) ? 2.4 : 1
        this.guildUpgrade2.scale = (logic) ? 1.6 : 1

        // this.camera.node.position = cc.v3(0, 0)
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
            this.camera.zoomRatio = 2
            // this.camera.node.position = cc.v3(150, 0)
            this.phaohoa.scale = (logic) ? 7 : 3
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.coinBar.getComponent(cc.Widget).top = 77 + 30;
                this.logo.getComponent(cc.Widget).top = 48 + 30
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 1.4
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
                this.camera.zoomRatio = 1
            }
        }


    }
}
