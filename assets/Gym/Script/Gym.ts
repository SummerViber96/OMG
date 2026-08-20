
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
    @property([cc.Prefab])
    listPrePt: cc.Prefab[] = []
    @property([cc.Prefab])
    listPreCus: cc.Prefab[] = []
    @property(cc.Node)
    arrMayDay: cc.Node[] = []
    arrPosDone = [cc.v3(-239, -133), cc.v3(57, -157), cc.v3(-123, -36), cc.v3(-14, 65), cc.v3(-58, -235), cc.v3(198, -59)]
    arrPosDoneCrunch = [cc.v3(218, -392), cc.v3(409, -289)]
    // @property(cc.Node)
    // listCrunch:cc.Node=null
    arrPosCus = []
    arrCus = []
    arrIconPt = []
    isStep = 0
    arrCrunch = []
    isHind = false
    adChanel = '{{__adv_channels_adapter__}}'
    posGapBung = cc.v3(-30, -19);
    posNangTa = cc.v3(-50, -42)

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
        }, 0.6)

        for (let i = 0; i < this.listCusNode.childrenCount; i++) {
            this.arrCus.push(this.listCusNode.children[i])
        }
        for (let i = 0; i < this.listIconPt.children[0].childrenCount; i++) {
            this.arrIconPt.push(this.listIconPt.children[0].children[i])
        }
        for (let i = 0; i < this.listCrunch.childrenCount; i++) {
            this.arrCrunch.push(this.listCrunch.children[i])
        }
        for (let i = 0; i < this.listPlacePos.childrenCount; i++) {
            this.arrPosCus.push(this.listPlacePos.children[i].position)
        }
    }

    countCus = 0
    spawCustomer() {
        if (this.arrCus.length > 7) return;
        let cus = cc.instantiate(this.listPreCus[this.countCus])
        cus.parent = this.listCusNode;
        let posEnd = this.arrPosCus[this.arrCus.length % 6]
        console.log(this.arrCus.length, this.arrCus.length % 6)

        this.arrCus.push(cus);
        cus.position = cc.v3(-934, -632)
        let anim = cus.children[0].getComponent(sp.Skeleton)
        anim.setAnimation(0, "WalkInR", true)
        cc.tween(cus).to(1, { position: cc.v3(-675, -435) }).call(() => {
            cus.scaleX = -1
        }).to(0.8, { position: posEnd }).call(() => {
            anim.setAnimation(0, "Waiting", true)
            cus.getChildByName("pop").active = true

        }).start()
        this.countCus++
        if (this.countCus > 5) {
            this.countCus = 0
        }
    }


    arrWaiting = []
    doCus(tag, cus) {
        cc.audioEngine.play(this.soundClick, false, 1)
        if (this.isStep <= 3) {
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
        else {
            if (tag == 0) {
                for (let i = 0; i < this.arrCrunch.length; i++) {
                    if (!this.arrCrunch[i].getChildByName("char")) {
                        this.moveCusToCrunch(cus, i, tag)
                        return;
                    }
                }
            }
            else if (tag == 1) {
                for (let i = 0; i < this.arrMayDay.length; i++) {
                    if (!this.arrMayDay[i].getChildByName("char")) {
                        this.moveCusToMayDay(cus, i, tag)
                        return;
                    }
                }
            }
            else if (tag == 2) {
                if (!this.boxing1.getChildByName("char")) {
                    this.moveCusToBoxing(cus, i, tag)

                }
            }


        }

    }
    moveCusToCrunch(cus, value, tag) {
        for (let i = 0; i < this.arrCus.length; i++) {
            if (cus == this.arrCus[i]) {
                this.arrCus.slice(i, 0)
            }
        }
        let crunch = this.arrCrunch[value];
        cus.parent = crunch;
        cus.position = this.posGapBung;
        cus.name = "char"
        cus.children[0].scale = 1
        cus.scale = 1
        cus.scaleX = 1
        let cusComp = cus.getComponent("cusGym")

        cusComp.parentName = "Crunch"
        cusComp.parentIndex = value;
        cusComp.parentNode = crunch

        this.arrWaiting.push(cus)
        cusComp.waitingTag(tag)

    }
    moveCusToMayDay(cus, value, tag) {
        for (let i = 0; i < this.arrCus.length; i++) {
            if (cus == this.arrCus[i]) {
                this.arrCus.slice(i, 0)
            }
        }
        let may = this.arrMayDay[value]
        cus.parent = may;
        cus.position = this.posNangTa;
        cus.name = "char"
        cus.children[0].scale = 1;
        cus.scale = 1
        cus.scaleX = 1
        let cusComp = cus.getComponent("cusGym")

        cusComp.parentName = "MayDay"
        cusComp.parentIndex = value;
        cusComp.parentNode = may

        this.arrWaiting.push(cus)
        cus.getComponent("cusGym").waitingTag(tag)
    }
    moveCusToBoxing(cus, value, tag) {
        for (let i = 0; i < this.arrCus.length; i++) {
            if (cus == this.arrCus[i]) {
                this.arrCus.slice(i, 0)
            }
        }
        cus.parent = this.boxing1
        cus.position = cc.v3(123, 23);
        cus.name = "char"
        cus.children[0].scale = 1;
        cus.scale = 1
        cus.scaleX = 1
        let cusComp = cus.getComponent("cusGym")

        cusComp.parentName = "Boxing"
        cusComp.parentIndex = value;
        cusComp.parentNode = this.boxing1
        this.arrWaiting.push(cus)
        cus.getComponent("cusGym").waitingTag(tag)
    }
    offIconPt(node) {
        node.children[1].active = true;
        node.getChildByName("hand").active = false
    }
    onIconPt(node) {
        node.children[1].active = false;
        node.getChildByName("hand").active = false
    }
    clickPt(event, tag) {
        let pt = null;
        cc.audioEngine.play(this.soundClick, false, 1)

        if (this.isStep == 1) {
            let btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false
            btn.enabled = false
            cc.tween(this.textGuild1).to(0.5, { opacity: 0 }).start()
            pt = this.listPt.children[0];
            this.isStep = 2
            let fnc = () => {
                this.activeCus(0)
            }
            pt.getComponent("pt").moveIn(fnc)

            this.scheduleOnce(() => {
                this.arrCus[1].getChildByName("pop").getChildByName("hand").active = true
                this.arrCus[1].getChildByName("pop").getComponent(cc.Button).enabled = true
            }, 1)
            this.scheduleOnce(() => {
                pt.parent = this.node

            }, 0.3)
            this.door.getComponent(cc.Animation).play("door_open")

            this.scheduleOnce(() => {
                this.door.getComponent(cc.Animation).play("door_close")

            }, 0.7)
            this.offIconPt(this.arrIconPt[0])

        }
        else if (this.isStep == 2) {
            let btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false
            pt = this.listPt.children[0];
            this.isStep = 3
            pt.active = true
            this.door.getComponent(cc.Animation).play("door_open")
            let fnc = () => {
                this.activeCus(1)
            }
            pt.getComponent("pt").moveIn(fnc)


            this.scheduleOnce(() => {
                this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true
                this.arrCus[2].getChildByName("pop").getComponent(cc.Button).enabled = true

            }, 1)
            this.scheduleOnce(() => {
                pt.parent = this.node
            }, 0.2)
            this.scheduleOnce(() => {
                this.door.getComponent(cc.Animation).play("door_close")

            }, 0.7)
            this.offIconPt(this.arrIconPt[1])
        }
        else if (this.isStep == 3) {
            let btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false
            pt = this.listPt.children[0];
            this.isStep = 4
            pt.active = true
            this.door.getComponent(cc.Animation).play("door_open")

            let fnc = () => {
                this.activeCus(2)
            }
            pt.getComponent("pt").moveIn(fnc)

            this.scheduleOnce(() => {
                this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true
            }, 1)
            this.scheduleOnce(() => {
                pt.parent = this.node
            }, 0.2)
            this.scheduleOnce(() => {
                this.door.getComponent(cc.Animation).play("door_close")

            }, 0.7)
            this.offIconPt(this.arrIconPt[2])
        }
        else {

            for (let i = 0; i < this.arrCus.length; i++) {
                let cus = this.arrCus[i];


                let cusComp = cus.getComponent("cusGym")

                if (cusComp.isPt == false) {
                    let btn = event.currentTarget.getComponent(cc.Button);
                    btn.enabled = false
                    event.currentTarget.children[1].active=true
                    this.addPt(cus, cusComp.parentName);
                    return;
                }
            }
        }
    }
    countpt = 0
    openDoor() {
        this.door.getComponent(cc.Animation).play("door_open")

        this.scheduleOnce(() => {
            this.door.getComponent(cc.Animation).play("door_close")

        }, 0.7)
    }
    addPt(cus, parentName) {
        this.openDoor();
        let cusComp = cus.getComponent("cusGym");
        cusComp.isPt = true
        let pt = cc.instantiate(this.listPrePt[this.countpt]);
        pt.parent = this.listPt;
        pt.active=true
        
        pt.position = cc.v3(382.607, 121)
        let ptComp = pt.getComponent("pt");
        this.countpt++;
        if (this.countpt > 3) {
            this.countpt = 0
        }
        let value = 0
        console.log(parentName)
        switch (cusComp.parentName) {
            case "Crunch":
                // ptComp.tag = cusComp.parentNode.getComponent("Machine").tag
                if (ptComp.tag == 1) {
                    value = 4
                }
                else if (ptComp.tag == 2) {
                    value = 5
                }
                else if (ptComp.tag == 3) {
                    value = 6
                }
                let fnc = () => {
                    this.activeCus(value)
                }
                ptComp.tag = value
                ptComp.moveIn(fnc)
                break;
            case "MayDay":
                ptComp.tag = cusComp.parentNode.getComponent("Machine").tag
                if (ptComp.tag == 0) {
                    value = 1
                }
                else {
                    value = 3
                }
                let fnc2 = () => {
                    this.activeCus(value)
                }
                ptComp.tag = value

                ptComp.moveIn(fnc2)
                break;
            case "Boxing":
                let fnc3 = () => {
                    this.activeCus(2)
                }
                ptComp.moveIn(fnc3)
                break;
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
                this.scheduleOnce(() => {
                    char.parent = this.node;
                    char.getComponent("cusGym").happy()
                    char.position = this.arrPosDone[0]
                    char.scale = 0.8
                    this.createCoin(char, 4)

                    cc.tween(char).delay(1).to(0.5, { opacity: 0 }).start()
                }, 2)
                break;
            case 1:
                char = this.dayTa1.getChildByName("char")
                char.getComponent("cusGym").dayTa()
                this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                this.dayTa1.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                char.position = cc.v3(-15.771 + 14, 7 - 5)
                this.scheduleOnce(() => {
                    this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true)
                    this.dayTa1.children[2].getComponent(sp.Skeleton).setAnimation(0, "Idle", true)
                    char.parent = this.node;
                    char.getComponent("cusGym").happy()
                    char.position = this.arrPosDoneCrunch[0]
                    char.scale = 0.8
                    this.createCoin(char, 6)

                    cc.tween(char).delay(1).to(0.5, { opacity: 0 }).start()
                }, 2)
                break;
            case 2:
                this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);

                char = this.boxing1.getChildByName("char")
                char.getComponent("cusGym").boxing()
                this.startGame()

                this.scheduleOnce(() => {
                    this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);

                    char.parent = this.node;
                    char.getComponent("cusGym").happy()
                    char.position = cc.v3(647, - 66)
                    char.scale = 0.8
                    this.createCoin(char, 6)

                    this.startGame()
                    this.isStep = 4

                    cc.tween(char).delay(1).to(0.5, { opacity: 0 }).start()
                }, 2)
                break;
        }


    }
    startGame() {
        for (let child of this.arrIconPt) {
            this.onIconPt(child)
            child.getComponent(cc.Button).enabled = true
        }
        this.arrCus = []
        this.spawCustomer()

        this.schedule(this.spawCustomer, 4)

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
    // onHind() {
    //     let index = 1;

    //     this.schedule(() => {
    //         // tắt tất cả trước
    //         for (let i = 1; i < this.arrCus.length; i++) {
    //             let pop = this.arrCus[i].getChildByName("pop");
    //             let hand = pop.getChildByName("hand");
    //             hand.active = false;
    //         }

    //         // bật cái hiện tại
    //         let pop = this.arrCus[index].getChildByName("pop");
    //         let hand = pop.getChildByName("hand");
    //         hand.active = true;

    //         index++;
    //         if (index >= this.arrCus.length) {
    //             index = 1; // quay lại từ đầu
    //         }
    //     }, 0.5);
    // }
    // isCus = 0
    // moveCame1() {
    //     cc.tween(this.game).to(0.5, { scale: 2.3 }).start()
    //     // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //     cc.tween(this.game).to(0.5, { position: cc.v3(200, -550) }).start()
    //     this.scheduleOnce(() => {
    //         this.guildUpgrade.active = true
    //     }, 0.5)
    //     this.isCus = 0
    // }
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
    // btn_upgrade() {
    //     cc.audioEngine.play(this.soundConfirm, false, 1)
    //     this.isCountStep++
    //     if (this.isCountStep < 5) {
    //         this.fillBar.fillRange = this.isCountStep * 0.25
    //         // this.listE.children[this.isCountStep - 1].active = true

    //     }
    //     let btn = this.guildUpgrade.children[2].getChildByName("Button")
    //     btn.active = true;
    //     btn.position = cc.v3(60 * this.isCountStep, -17.93)
    //     if (this.isCus == 0) {
    //         let char = this.listCrunch.children[0].getChildByName("char")
    //         char.getChildByName("vfx").getComponent(cc.Animation).play()
    //         char.getComponent(cc.Animation).play()

    //         if (this.isCountStep == 5) {
    //             cc.audioEngine.play(this.soundCoin, false, 1)

    //             char.getChildByName("notiBonusCoin2").active = true
    //             char.getComponent("cusGym").happy()
    //             char.position = cc.v3(-67, -50)
    //             this.guildUpgrade.active = false;
    //             this.move4()
    //             globalThis.gold += 200
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()

    //             }, 1)
    //         }
    //     }
    //     else if (this.isCus == 1) {
    //         let char = this.boxing1.children[0]

    //         char.getChildByName("vfx").getComponent(cc.Animation).play()

    //         if (this.isCountStep == 5) {
    //             cc.audioEngine.play(this.soundCoin, false, 1)

    //             globalThis.gold += 200

    //             char.getChildByName("notiBonusCoin2").active = true

    //             char.getComponent("cusGym").happy()
    //             this.guildUpgrade.active = false;
    //             // this.move4()
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()
    //             }, 1)

    //         }
    //         if (this.isCountStep == 4) {
    //             this.linkToStore.active = true
    //         }
    //     }
    //     else if (this.isCus == 2) {
    //         let char = this.boxing2.children[0]
    //         char.getChildByName("vfx").getComponent(cc.Animation).play()

    //         // if (this.isCountStep == 2) {
    //         //     this.linkToStore.active = true
    //         // }
    //     }
    // }
    onEndgame() {
        cc.audioEngine.play(this.soundWin, false, 1)
        this.endCard.active = true;
        this.linkToStore.active = true
    }
    // move2() {
    //     this.scheduleOnce(() => {
    //         cc.tween(this.game).to(0.5, { scale: 1 }).start()
    //         // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //         cc.tween(this.game).to(0.5, { position: cc.v3(0, 0) }).start()
    //         this.isCus = 1
    //         this.isCountStep = 0
    //         this.fillBar.fillRange = 0

    //     }, 1)
    //     this.scheduleOnce(() => {
    //         this.move3()
    //     }, 1.7)
    // }
    // move3() {
    //     cc.tween(this.game).to(0.5, { scale: 2.7 }).start()
    //     // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //     cc.tween(this.game).to(0.5, { position: cc.v3(-1973, -120) }).start()
    //     this.scheduleOnce(() => {
    //         this.guildUpgrade.active = true
    //     }, 0.5)
    // }
    // move4() {
    //     this.scheduleOnce(() => {
    //         cc.tween(this.game).to(0.5, { scale: 1 }).start()
    //         // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //         cc.tween(this.game).to(0.5, { position: cc.v3(0, 0) }).start()
    //         this.isCus = 2
    //         this.isCountStep = 0
    //         this.fillBar.fillRange = 0
    //     }, 1)
    //     this.scheduleOnce(() => {
    //         this.move5()
    //     }, 1.7)
    // }
    // move5() {
    //     cc.tween(this.game).to(1, { scale: 1.7 }).start()
    //     // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //     cc.tween(this.game).to(1, { position: cc.v3(1100, 100) }).start()
    //     // let text = this.guildUpgrade.getChildByName("New Label")
    //     // text.getComponent(cc.Label).string = "Last one! Finish strong!"
    //     this.scheduleOnce(() => {
    //         this.guildUpgrade2.active = true
    //     }, 0.5)
    // }
    // dem1 = 0;
    // dem2 = 0
    // btn_upgrade2(event, value) {
    //     cc.audioEngine.play(this.soundConfirm, false, 1)
    //     if (value == "1") {
    //         let fill = this.guildUpgrade2.getChildByName("bgTrain2").children[1]
    //         let btn = this.guildUpgrade2.getChildByName("bgTrain2").getChildByName("Button")
    //         let char = this.dayTa1.children[0]
    //         char.getComponent(cc.Animation).play();
    //         char.getChildByName("vfx").getComponent(cc.Animation).play();
    //         this.dem1++
    //         fill.getComponent(cc.Sprite).fillRange = this.dem1 * 0.2
    //         btn.active = true;
    //         btn.position = cc.v3(50 * this.dem1, -17.93)
    //         if (this.dem1 == 5) {
    //             event.currentTarget.active = false
    //             cc.audioEngine.play(this.soundCoin, false, 1)

    //             char.getChildByName("notiBonusCoin2").active = true
    //             char.getComponent("cusGym").happy()
    //             char.position = cc.v3(-81, -45)
    //             globalThis.gold += 200
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()

    //             }, 1)

    //         }
    //     }
    //     else {
    //         let fill = this.guildUpgrade2.getChildByName("bgTrain").children[1]
    //         let char = this.boxing2.children[0]
    //         let btn = this.guildUpgrade2.getChildByName("bgTrain").getChildByName("Button")

    //         char.getComponent(cc.Animation).play();
    //         char.getChildByName("vfx").getComponent(cc.Animation).play();
    //         this.dem2++
    //         btn.active = true;
    //         btn.position = cc.v3(50 * this.dem2, -17.93)
    //         fill.getComponent(cc.Sprite).fillRange = this.dem2 * 0.2
    //         if (this.dem2 == 5) {
    //             event.currentTarget.active = false

    //             cc.audioEngine.play(this.soundCoin, false, 1)

    //             char.getChildByName("notiBonusCoin2").active = true
    //             char.getComponent("cusGym").happy()
    //             globalThis.gold += 200
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()

    //             }, 1)

    //         }
    //     }

    //     if (this.dem1 == 5 && this.dem2 == 5) {
    //         cc.tween(this.guildUpgrade2).to(0.26, { opacity: 0 }).call(() => {
    //             this.guildUpgrade2.active = false
    //         }).start()
    //         this.scheduleOnce(() => {
    //             this.move2()
    //         }, 0.8)
    //     }
    // }
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
