
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
    @property(cc.AudioClip)
    soundlose: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundThink: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWrong: cc.AudioClip = null;
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
    coinBar: cc.Node = null
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
    @property(cc.Node)
    charTut2: cc.Node = null
    @property(cc.Label)
    lbGuild: cc.Label = null
    @property(cc.Node)
    tuNuoc: cc.Node = null
    @property(cc.Node)
    tuKhan: cc.Node = null
    @property(cc.Node)
    bartender1: cc.Node = null
    @property(cc.Node)
    tutBoxing: cc.Node = null
    @property(cc.Node)
    listCus2: cc.Node = null
    @property(cc.Node)
    listItem2: cc.Node = null
    @property(cc.Node)
    mayDayTa: cc.Node = null
    @property(cc.Node)
    mayGapBung: cc.Node = null
    @property(cc.Node)
    mayDayTa2: cc.Node = null

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

    }
    showMision2() {
        let char = this.mayGapBung.getChildByName("char");
        let charComp = char.getComponent("cusGym");
        charComp.ngoiTho();
        char.position = cc.v3(-14, -10);
        this.scheduleOnce(() => {
            charComp.showPop();

            this.tuNuoc.children[0].active = true
            this.tuNuoc.getChildByName("hand").active = true;
            this.tuNuoc.getComponent(cc.Button).enabled = true

        }, 0.3);
    }
    isCountOut = 0
    cusOut(node, value) {
        if (node.parent.name == "mayGapBung") {
            node.getComponent("cusGym").moveOut2()
        }
        else {
            node.getComponent("cusGym").moveOut()
        }
        if (value == true) {
            this.isCountOut++

        }
        if (node.name == "CusBoxing") {
            this.tutBoxing.active = false
        }

        if (this.isCountOut == 1 && this.arrCus[0].active == true) {
            this.moveCus2(false)
        }
        else if (this.isCountOut == 1 && this.mayGapBung.getChildByName("char").active == true) {
            this.moveCus3()
        }
        else if (this.isCountOut == 1 && this.arrCus[2].active == true) {
            // this.moveCus3()
            cc.tween(this.camera.node).to(0.5, { position: cc.v3(-100, 100) }).start()
            this.listCus2.active = true;
            for (let child of this.listCus2.children) {
                // child.getComponent("cusGym").happy()
                child.getComponent("cusGym").countDown()
            }
            this.listItem2.active = true
            for (let child of this.listItem2.children) {

                child.children[0].active = true

            }
            this.tutBoxing.getComponent(cc.Button).enabled = false
        }
        if (this.isCountOut == 2) {
            this.onEndgame(false)
        }
    }
    isCountWorkEnd = 0
    btn_workEnd(event, value) {
        event.currentTarget.getComponent(cc.Button).enabled = false;
        let char = null;
        if (value == "1") {
            char = this.listCus2.children[1];
            char.getComponent("cusGym").walk(1.2, cc.v3(-179, 10));
            this.scheduleOnce(() => {
                char.active = false;
                this.mayGapBung.children[1].active = true;
                this.mayGapBung.getChildByName("char2").active = true;
                this.mayGapBung.getChildByName("char2").getComponent("cusGym").gapBung();
                this.mayGapBung.getChildByName("char2").getChildByName("notiBonusCoin2").active = true;
                globalThis.gold += 50
            }, 1.2);

        }
        else if (value == "2") {
            char = this.listCus2.children[0];
            char.getComponent("cusGym").walk(2, cc.v3(-402, -217));
            this.scheduleOnce(() => {
                char.active = false;
                this.mayDayTa2.getChildByName("char2").active = true;
                this.mayDayTa2.getChildByName("char2").getComponent("cusGym").dayTa()
                // this.dayTa1.getChildByName("char").position = cc.v3(1, -16)
                this.mayDayTa2.getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                this.mayDayTa2.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                this.mayDayTa2.getChildByName("char2").getChildByName("notiBonusCoin2").active = true;
                globalThis.gold += 50
            }, 2)
        }
        else if (value == "3") {
            char = this.listCus2.children[2];
            char.getComponent("cusGym").walk(3, cc.v3(-675, -144));
            this.scheduleOnce(() => {
                char.active = false;
                this.boxing2.getChildByName("char2").active = true;
                this.boxing2.getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                this.boxing2.getChildByName("char2").getChildByName("notiBonusCoin2").active = true;
                globalThis.gold += 50
                // this.boxing2.getChildByName("char2").getComponent("cusGym").boxing();
            }, 3)
        }
        this.isCountWorkEnd++;
        if (this.isCountWorkEnd == 3) {
            cc.tween(this.camera.node).by(1, { position: cc.v3(-150, 0) }).start()
            this.scheduleOnce(() => {
                this.onEndgame(true)
            }, 3.2)
        }
        // console.log("click pop")


    }
    isCountTaNho = 0
    isCountTaTo = 0
    isCountCus = 0
    isCountKhan = 0;
    isCountNuoc = 2;
    isFirstItem = false;
    checkItem(item, posTouch) {
        let itemComp = item.getComponent("itemGym")
        cc.audioEngine.play(this.soundClick, false, 1)
        this.isTargetCus.getChildByName("pop").active = false;
        if (!this.isFristClick) {
            this.isFristClick = true;
            this.giaTaNho.children[0].active = false
            // this.scheduleOnce(() => {
            this.arrCus[0].getComponent("cusGym").countDown();
            this.npc2.active = false
            // }, 0.8)
        }
        // if (itemComp.tag == 0) {
        //     let itemTarget = this.listTaDon[this.isCountTaNho]
        //     this.isCountTaNho++
        // }
        if (item.getChildByName("hand")) {
            item.getChildByName("hand").active = false
        }
        let target = null;
        // let hind=null;
        switch (itemComp.tag) {
            case 0://ta nho
                target = this.giaTaNho

                break;
            case 1:
                target = this.giaTaLon

                break;
            case 2:
                target = this.tuKhan

                break;
            case 3:
                target = this.tuNuoc

                break;
        }
        if (target) {
            let pos = target.parent.convertToWorldSpaceAR(target.position);
            target.getChildByName("hind").active = false;
            pos = item.parent.convertToNodeSpaceAR(pos)
            let mag = 100;
            console.log(item.position.sub(pos).mag())
            if (item.position.sub(pos).mag() < 100) {
                item.active = false;
                let itemTarget = null;
                switch (itemComp.tag) {
                    case 0://ta nho
                        itemTarget = this.listTaDon[this.isCountTaNho]
                        if (itemComp.colorG == 1) {
                            itemTarget.children[1].getComponent(cc.Sprite).spriteFrame = this.imgtaDo
                        }
                        this.isCountTaNho++
                        break;
                    case 1:
                        itemTarget = this.listTaTo[this.isCountTaTo]
                        this.isCountTaTo++
                        break;
                    case 2:
                        itemTarget = this.listKhan.children[this.isCountKhan]
                        this.isCountKhan++
                        break;
                    case 3:
                        itemTarget = this.listNuoc.children[this.isCountNuoc]
                        this.isCountNuoc++
                        console.log("isCountNuoc", this.isCountNuoc)
                        break;
                }
                if (itemTarget) {
                    itemTarget.active = true;
                    cc.audioEngine.play(this.soundCoin, false, 1)
                }
                this.checkStep()
                if (this.isFirstItem == false) {
                    this.isFirstItem = true;
                    for (let child of this.listItem.children)

                        child.children[0].active = true
                }
                return true;

            }


        }
        return false;
    }

    checkStep() {
        this.isCountCus++
        if (this.isCountCus == 7) {
            this.isTargetCus.getComponent("cusGym").happy();

            this.isTargetCus.getComponent("cusGym").smile()
            globalThis.gold += 10
            this.scheduleOnce(() => {

                this.moveCus2(true)
            }, 1.5)

        }
        if (this.isCountCus == 13) {
            this.showMissionEnd();

        }
        // if (this.isCountCus == 11) {
        //     for (let child of this.listCus2.children) {
        //         child.getComponent("cusGym").happy()
        //         child.getComponent("cusGym").isSuccess = true
        //         // child.getComponent("cusGym").countDown()
        //     }
        //     this.onEndgame(true)
        // }

    }
    showMissionEnd() {
        for (let child of this.listCus2.children) {
            child.getComponent("cusGym").moveByEnd();
        }
        // this.onEndgame(true);
    }
    isMoveCus2 = false
    moveCus2(value) {
        if (this.isMoveCus2) return;
        this.isMoveCus2 = true
        if (value == true) {
            let finalPos = cc.v3(-297, -89);
            cc.tween(this.camera.node).to(1.2, { position: cc.v3(-479, 30) }).start()
            this.isTargetCus.getComponent("cusGym").move3(finalPos, 2)
            this.scheduleOnce(() => {
                globalThis.gold += 50;
                this.isTargetCus.active = false;
                this.mayDayTa.children[0].active = true;
                this.mayDayTa.getChildByName("char").getChildByName("notiBonusCoin").active = true

                this.mayDayTa.getChildByName("char").getComponent("cusGym").dayTa()
                this.mayDayTa.getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                this.mayDayTa.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true)



            }, 2)
        }

        // cc.tween(this.camera.node).to(0.8, { position: cc.v3(-20, 130) }).to(0.8, { position: cc.v3(-220, 130) }).start()
        // this.arrCus[1].getComponent("cusGym").moveToWait2()
        this.scheduleOnce(() => {
            // this.arrCus[1].getChildByName("pop").active = true
            // this.arrCus[1].getComponent("cusGym").countDown();

            // this.tuNuoc.children[0].active = true
            // this.tuNuoc.getChildByName("hand").active = true;
            // this.tuNuoc.getComponent(cc.Button).enabled = 
            this.showMision2()
        }, 1.5)
    }
    isMoveCus3 = false

    moveCus3() {
        if (this.isMoveCus3) return;
        this.isMoveCus3 = true
        this.tuNuoc.children[0].active = false
        this.tuNuoc.getChildByName("hand").active = false;
        this.tuNuoc.getComponent(cc.Button).enabled = false
        cc.tween(this.camera.node).to(1, { position: cc.v3(-20, 130) }).to(1, { position: cc.v3(-500, 0) }).start()
        this.arrCus[2].getComponent("cusGym").moveToWait3()
    }
    btn_tuNuoc(event) {
        event.currentTarget.getComponent(cc.Button).enabled = false;
        this.tuNuoc.children[0].active = false
        this.tuNuoc.getChildByName("hand").active = false;
        this.bartender1.getComponent("pt").moveGiveWater()
        let char = this.mayGapBung.getChildByName("char");
        let charComp = char.getComponent("cusGym");
        this.isCountNuoc--
        this.listNuoc.children[this.isCountNuoc].active = false;

        // this.isCountOut--;
        this.scheduleOnce(() => {
            char.position = cc.v3(-21.5, -60)
            charComp.pop.active = true;
            charComp.happy();
            charComp.smile2();

        }, 1.5)
        this.scheduleOnce(() => {
            globalThis.gold += 50

            this.bartender1.getComponent("pt").moveBack()

        }, 1.7)
        this.scheduleOnce(() => {
            this.cusOut(char, false)
        }, 2.3)
        // this.scheduleOnce(() => {
        //     this.arrCus[1].active = false;
        //     this.charTut2.active = true;
        //     this.charTut2.getComponent("cusGym").gapBung()

        // }, 6.2)

        this.scheduleOnce(() => {

            cc.tween(this.camera.node).to(1, { position: cc.v3(-20, 130) }).to(1, { position: cc.v3(-500, 0) }).start()
            this.arrCus[2].getComponent("cusGym").moveToWait3()


        }, 3)

        // this.scheduleOnce(())
    }
    showMissionBoxing() {
        this.tutBoxing.children[0].active = true
        this.tutBoxing.getComponent(cc.Button).enabled = true
        this.tutBoxing.getChildByName("hand").active = true

    }
    btn_boxing(event) {
        event.currentTarget.getComponent(cc.Button).enabled = false;
        cc.tween(this.camera.node).to(0.6, { position: cc.v3(-600, -50) }).start()

        this.tutBoxing.active = false
        this.tutBoxing.children[0].active = false
        this.arrCus[2].getComponent("cusGym").happy()
        this.arrCus[2].getComponent("cusGym").smile();
        cc.audioEngine.play(this.soundCoin, false, 1)

        this.arrCus[2].getComponent("cusGym").move3(cc.v3(-650, -154), 2)
        this.scheduleOnce(() => {
            this.arrCus[2].getComponent("cusGym").boxing()
            this.boxing2.getComponent(sp.Skeleton).setAnimation(0, "Action", true)

        }, 2.1)
        this.scheduleOnce(() => {
            cc.tween(this.camera.node).to(0.5, { position: cc.v3(-180, 100) }).start()
            this.listCus2.active = true;
            for (let child of this.listCus2.children) {
                // child.getComponent("cusGym").happy()
                child.getComponent("cusGym").countDown()
            }
            this.listItem2.active = true
            for (let child of this.listItem2.children) {
                child.children[0].active = true

            }
            globalThis.gold += 50;
        }, 3.5)
        this.scheduleOnce(() => {
            this.arrCus[2].active = false;
            this.boxing2.getComponent(sp.Skeleton).setAnimation(0, "Idle", true)

        }, 5)


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
            //         this.npc.active = false
            this.listItem.children[5].getChildByName("hand").active = true;
            this.listItem.children[5].getComponent(cc.Button).enabled = true;
            this.giaTaNho.children[0].active = true
            this.listItem.children[5].children[0].active = true
        }, 4)
    }
    isCloseTut = false
    btn_closeTut() {
        console.log("click")
        if (this.isCloseTut) return;
        this.isCloseTut = true
        cc.tween(this.npc).by(0.3, { opacity: -255, position: cc.v3(0, -80) }).call(() => {
            this.npc.active = false
            this.listItem.children[5].getChildByName("hand").active = true;
            // this.listItem.children[5].getComponent(cc.Button).enabled = true;
            this.giaTaNho.children[0].active = true
            this.listItem.children[5].children[0].active = true
            this.npc2.active = true
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
    isEndgame = false;

    onEndgame(value) {
        if (this.isEndgame == true) {
            return;
        }
        this.isEndgame = true;
        if (value == true) {
            cc.audioEngine.play(this.soundWin, false, 1)

        }
        else {
            cc.audioEngine.play(this.soundlose, false, 1)
            this.endCard.getChildByName("New Label").active = true
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundThink, false, 1)
            }, 0.5)

        }
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
        // if (logic == true) {
        //     const frameSize = cc.view.getFrameSize();
        //     const width = frameSize.width;
        //     const height = frameSize.height;

        //     // this.camera.node.position = cc.v3(-70, 0)

        //     // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
        //     const aspectRatio = Math.max(width, height) / Math.min(width, height);

        //     // Gần đúng tỷ lệ màn hình iPhone X
        //     const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
        //     const TOLERANCE = 0.05;
        //     const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
        //     this.camera.zoomRatio = 2
        //     // this.camera.node.position = cc.v3(150, 0)
        //     this.phaohoa.scale = (logic) ? 7 : 3
        //     if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
        //         // console.log("check iphonex")
        //         this.coinBar.getComponent(cc.Widget).top = 77 + 30;
        //         this.logo.getComponent(cc.Widget).top = 48 + 30
        //     }
        //     else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
        //         // this.camera.zoomRatio = 1.4
        //         this.guildUpgrade.scale = 1.8
        //         this.npc.y = -400
        //         this.npc2.y = -400
        //     }
        // }
        // else {
        //     const frameSize = cc.view.getFrameSize();
        //     const width = frameSize.width;
        //     const height = frameSize.height;

        //     // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
        //     const aspectRatio = Math.max(width, height) / Math.min(width, height);

        //     // Gần đúng tỷ lệ màn hình iPhone X
        //     const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
        //     const TOLERANCE = 0.05;
        //     const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

        //     if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {

        //     }
        //     else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
        //         this.camera.zoomRatio = 1
        //     }
        // }



        if (logic == true) {

            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            const TALL_PHONE_MIN_RATIO = 2.0;        // iPhone X ~2.16, 20:9 Android ~2.22
            this.camera.zoomRatio = 2
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {
                this.coinBar.getComponent(cc.Widget).top = 77 + 50;
                this.logo.getComponent(cc.Widget).top = 48 + 50
                if (aspectRatio > 2.2) {
                    // this.camera.zoomRatio = 1.75
                }
                  this.npc.y = -800
                this.npc2.y = -800
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.guildUpgrade.scale = 1.8
                this.npc.y = -400
                this.npc2.y = -400
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
