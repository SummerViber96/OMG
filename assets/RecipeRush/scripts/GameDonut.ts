
const { ccclass, property } = cc._decorator;
globalThis.coin = 0
globalThis.Game = false
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.AudioClip)
    soundShowPop: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundClosePop: cc.AudioClip = null
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundLose: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundOk: cc.AudioClip = null;

    @property(cc.AudioClip)
    soundTrans: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundClick: cc.AudioClip = null;

    @property(cc.AudioClip)
    soundEnd: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundSellDone: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundThinking: cc.AudioClip = null
    @property(cc.AudioClip)
    soundCream: cc.AudioClip = null
    @property(cc.AudioClip)
    soundCherry: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWrong: cc.AudioClip = null
    @property(cc.AudioClip)
    soundCreamMini: cc.AudioClip = null
    @property(cc.AudioClip)
    soundThinkWin: cc.AudioClip = null
    @property(cc.AudioClip)
    soundBanh: cc.AudioClip = null
    @property(cc.AudioClip)
    soundThinkLose: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundThinkWin: cc.AudioClip = null
    @property(cc.AudioClip)
    soundAngry1: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundAngry2: cc.AudioClip = null

    @property(cc.AudioClip)
    soundFoot: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundFunny: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundOpenOrder: cc.AudioClip = null
    @property(cc.AudioClip)
    soundTicketFly: cc.AudioClip = null
    @property(cc.AudioClip)
    soundDO: cc.AudioClip = null
    @property(cc.AudioClip)
    soundFail: cc.AudioClip = null

    @property(cc.Node)
    tut: cc.Node = null
    @property(cc.Node)
    hand: cc.Node = null
    @property(cc.Node)
    endCard: cc.Node = null;
    @property(cc.Node)
    endCardWin: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Camera)
    cameraDoc: cc.Camera = null
    @property(cc.Node)
    logo: cc.Node = null;


    @property(cc.Camera)
    uiCamera: cc.Camera = null
    @property(cc.Node)
    uiNode: cc.Node = null
    @property(cc.Node)
    barTime: cc.Node = null;
    @property(cc.Node)
    barCoin: cc.Node = null;


    @property(cc.Node)
    phaoHoa: cc.Node = null;

    @property(cc.Node)
    warning: cc.Node = null
    @property(cc.Node)
    guild: cc.Node = null;

    @property(cc.Node)
    timeup: cc.Node = null
    @property(cc.Node)
    amazing: cc.Node = null
    @property(cc.Animation)
    notiCoin: cc.Animation = null
    @property(cc.Node)
    notiMission: cc.Node = null

    @property(cc.Node)
    endCardDoc: cc.Node = null;
    //new

    @property(cc.Node)
    barMission: cc.Node = null
    @property(cc.Node)
    barMission2: cc.Node = null
    //btn

    @property(cc.Node)
    mc: cc.Node = null;
    @property(cc.Node)
    hind1: cc.Node = null;
    @property(cc.Prefab)
    listPreCUs: cc.Prefab[] = []

    //new
    @property(cc.Node)
    ticket: cc.Node = null
    @property(cc.Node)
    chef1: cc.Node = null;
    @property(cc.Node)
    chef2: cc.Node = null;
    @property(cc.Node)
    chef3: cc.Node = null;
    @property(cc.Node)
    listHand: cc.Node = null
    @property(cc.Prefab)
    preTom: cc.Prefab = null
    @property(cc.Prefab)
    preTofu: cc.Prefab = null;
    @property(cc.Prefab)
    preHanh: cc.Prefab = null;
    @property(cc.Prefab)
    preDau: cc.Prefab = null;
    @property(cc.Prefab)
    preSauce: cc.Prefab = null
    @property(cc.Node)
    plate: cc.Node = null;
    @property(cc.Node)
    plateList: cc.Node = null
    @property(cc.Node)
    btnTo: cc.Node = null;
    @property(cc.Node)
    btnDau: cc.Node = null;
    @property(cc.Node)
    btnHanh: cc.Node = null
    @property(cc.Node)
    btnDauPhu: cc.Node = null;
    @property(cc.Node)
    btnSauce: cc.Node = null
    @property(cc.Node)
    listTick: cc.Node = null
    @property(cc.Node)
    listItemNoi: cc.Node = null
    @property(cc.Node)
    noiSup: cc.Node = null;
    @property(cc.VideoPlayer)
    video: cc.VideoPlayer = null;
    @property(cc.Node)
    cus1: cc.Node = null;
    @property(cc.Node)
    listCus2: cc.Node = null
    @property(cc.Node)
    failUi: cc.Node = null
    mcComp = null

    // @property(cc.Node)
    // tutMision: cc.Node = null
    arrBep = [false, false, false, false]
    arrDia = [false, false, false, false]


    maxKhay = 7

    arrDonutpos = []

    isTutChili = false
    isTutMeat = false
    isTutVegetTable = false
    isTutClickMeat = false


    isTargetPop = null;
    // isStep = 0
    isTargetCus = null;
    adChanel = '{{__adv_channels_adapter__}}'
    countCus = 0
    maxCustomers = 6
    idSound = null
    isStep = 0
    //item: 0:buger, 1: kem 2:donut 3:khoaitay 4:pho 5: pudding 6: tra  7:banhmi 8:coconut
    rayY: number[] = [120, 0, -120];   // vị trí Y của 3 ray
    spawnX: number = 700;              // vị trí spawn bên phải
    arrItem = [[], []]
    arrKhay = []
    arrTargetMission = []
    arrCus = []
    sellTargetCus = null
    sellTraySlot = -1
    cusCounterPos = null
    cusSlotGap = 500
    cusEnterOffset = cc.v3(350, 0, 0)
    cusWalkSpeed = 437.5
    counterCusCount = 0
    preCusIndex = 0
    isStartgame = false
    isFirstClick = false
    //mission
    msTom = false;
    msHanh = false;
    msDau = false;
    msTofu = false
    msSauces = false
    //0:banh thuong 1:chocolate 2: strawberry 
    idFunny = null
    mag = 0
    onLoad() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }

        this.updateResponsive();
        cc.view.setResizeCallback(() => {
            this.updateResponsive();
        });
        cc.audioEngine.play(this.soundShowPop, false, 1)
        // this.camera.node.position = cc.v3(0, 0)
        this.scheduleOnce(() => {
            this.moveTicket()
        }, 1.5)
        let animCheft1 = this.chef1.children[0]
        this.scheduleOnce(() => {
            animCheft1.getComponent(sp.Skeleton).setAnimation(0, "Win", false)
            this.idFunny = cc.audioEngine.play(this.soundFunny, false, 1)
        }, 0.5)
        this.scheduleOnce(() => {
            cc.audioEngine.stop(this.idFunny)
            animCheft1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true)

        }, 2)
        this.camera.node.position = cc.v3(0 + this.magfront, 120)
    }
    isHand = null
    isShowMenu = false
    moveTicket() {
        this.ticket.active = true
        cc.audioEngine.play(this.soundTicketFly, false, 0.3)
        cc.tween(this.camera.node).to(1, { position: cc.v3(1750 + this.mag, -200.232) }).call(() => {
            // this.ticket.getComponent(cc.Animation).play("ticket_show")
        }).start()
        cc.tween(this.camera).to(1, { zoomRatio: 1 }).start()

        cc.tween(this.cameraDoc.node).to(1, { position: cc.v3(2100, -200.232) }).call(() => {
            // this.ticket.getComponent(cc.Animation).play("ticket_show")
        }).start()
        cc.tween(this.cameraDoc).to(1, { zoomRatio: 1.6 }).start()
    }
    showTicket() {
        cc.audioEngine.play(this.soundClick, false, 1)
        cc.audioEngine.play(this.soundOpenOrder, false, 1)
        this.scheduleOnce(() => {
            this.listHand.children[0].active = true
            this.isShowMenu = true
        }, 0.4)
    }
    arrTom = [];
    arrHanh = [];
    arrDau = [];
    arrTofu = [];
    arrSauce = null
    btn_tom() {
        if (this.isShowMenu == false) return
        cc.audioEngine.play(this.soundClick, false, 1)
        this.unschedule(this.checkHind)

        this.msTom = true
        this.btnTo.getComponent(cc.Button).enabled = false
        this.listHand.children[0].active = false
        let arrPos = [cc.v2(-75, -24), cc.v2(-64, 19), cc.v2(-44, -3)]
        for (let i = 0; i < 3; i++) {
            this.scheduleOnce(() => {
                let preTom = cc.instantiate(this.preTom);
                preTom.position = cc.v3(-334, -29);
                preTom.parent = this.plateList
                this.arrTom.push(preTom)
                cc.tween(preTom).bezierTo(0.5, cc.v2(-334, -29), cc.v2(-334, -29 + 300), arrPos[i]).start()
            }, i * 0.15)

        }
        this.scheduleOnce(() => {
            this.checkSuccess()
        }, 0.5 + 0.15 * 3)
        this.scheduleOnce(() => {
            this.checkHind()
        }, 1)
    }
    //
    btn_donnut() {
        if (this.isShowMenu == false) return
        cc.audioEngine.play(this.soundClick, false, 1)
        this.unschedule(this.checkHind)

        this.msTom = true
        this.btnTo.getComponent(cc.Button).enabled = false
        this.listHand.children[0].active = false
        let arrPos = [cc.v2(-22, 43), cc.v2(52, 9), cc.v2(-42, -24)]
        for (let i = 0; i < 3; i++) {
            this.scheduleOnce(() => {
                let preTom = cc.instantiate(this.preTom);
                preTom.position = cc.v3(-334, -29);
                preTom.parent = this.plateList
                this.arrTom.push(preTom)
                cc.tween(preTom).bezierTo(0.5, cc.v2(-334, -29), cc.v2(-334, -29 + 300), arrPos[i]).start()
            }, i * 0.15)

        }
        this.scheduleOnce(() => {
            this.checkSuccess()
        }, 0.5 + 0.15 * 3)
        this.scheduleOnce(() => {
            this.checkHind()
        }, 1)
    }
    btn_dauTay() {
        if (this.isShowMenu == false) return

        cc.audioEngine.play(this.soundClick, false, 1)
        this.unschedule(this.checkHind)

        this.msDau = true
        this.btnDau.getComponent(cc.Button).enabled = false;
        this.listHand.children[3].active = false
        this.listTick.children[0].active = true
        let arrPos = [cc.v2(83, -36), cc.v2(51, -54), cc.v2(16, -62)]
        let arrAngle = [0, 0, 0]
        for (let i = 0; i < 3; i++) {
            this.scheduleOnce(() => {
                let preTom = cc.instantiate(this.preDau);
                preTom.position = cc.v3(-134, -245);
                preTom.parent = this.plateList
                this.arrDau.push(preTom)

                cc.tween(preTom).bezierTo(0.5, cc.v2(-134, -245), cc.v2(-134, -245 + 350), arrPos[i]).start()
                cc.tween(preTom).to(0.5, { angle: arrAngle[i] }).start()
            }, i * 0.15)

        }
        this.scheduleOnce(() => {
            this.checkSuccess()
        }, 0.5 + 0.15 * 3)
        this.scheduleOnce(() => {
            this.checkHind()
        }, 2)
    }
    btn_sauceDauTay() {
        if (this.isShowMenu == false) return

        cc.audioEngine.play(this.soundClick, false, 1)
        this.unschedule(this.checkHind)
        this.btnSauce.getComponent(cc.Button).enabled = false;
        this.listHand.children[1].active = false
        // let startPos = cc.v2(300, 2)
        // let endpos = cc.v2(1.5, 67);

        // this.arrSauce = preSauce;
        for (let i = 0; i < this.arrTom.length; i++) {
            this.arrTom[i].children[2 + i].active = true
            this.arrTom[i].getComponent(cc.Animation).play()
        }
        this.msSauces = true

        this.scheduleOnce(() => {
            this.isSauceFinal = true
            this.checkSuccess()
        }, 0.1)
        this.scheduleOnce(() => {
            this.checkHind()
        }, 2)
    }


    btn_hanh() {
        if (this.isShowMenu == false) return

        cc.audioEngine.play(this.soundClick, false, 1)
        this.unschedule(this.checkHind)

        this.msHanh = true;
        this.btnHanh.getComponent(cc.Button).enabled = false
        this.listHand.children[2].active = false
        this.listTick.children[1].active = true

        // let arrPos = [cc.v2(61, 41), cc.v2(80, 10), cc.v2(37, 13)]
        // for (let i = 0; i < 3; i++) {
        //     this.scheduleOnce(() => {
        //         let preTom = cc.instantiate(this.preHanh);
        //         preTom.position = cc.v3(25, -251);
        //         preTom.parent = this.plateList
        //         this.arrHanh.push(preTom)

        //         cc.tween(preTom).bezierTo(0.5, cc.v2(25, -251), cc.v2(25, -251 + 350), arrPos[i]).start()
        //     }, i * 0.15)

        // }
        this.scheduleOnce(() => {
            this.checkSuccess()
        }, 0.5 + 0.15 * 3)
        this.scheduleOnce(() => {
            this.checkHind()
        }, 2)
    }
    btn_dauPhu() {
        if (this.isShowMenu == false) return

        this.msTofu = true;
        cc.audioEngine.play(this.soundClick, false, 1)
        this.unschedule(this.checkHind)

        this.btnDauPhu.getComponent(cc.Button).enabled = false
        this.listHand.children[4].active = false
        this.listTick.children[2].active = true

        // let arrPos = [cc.v2(26, -32), cc.v2(3, -59), cc.v2(47, -55)]
        // for (let i = 0; i < 3; i++) {
        //     this.scheduleOnce(() => {
        //         let preTom = cc.instantiate(this.preTofu);
        //         preTom.position = cc.v3(180, -256);
        //         preTom.parent = this.plateList
        //         this.arrTofu.push(preTom)

        //         cc.tween(preTom).bezierTo(0.5, cc.v2(180, -256), cc.v2(180, -256 + 350), arrPos[i]).start()
        //     }, i * 0.15)

        // }
        this.arrTom[2].getComponent(cc.Animation).play()
        this.arrTom[2].children[5].active = true
        this.scheduleOnce(() => {
            this.checkSuccess()
        }, 0.5 + 0.15 * 3)
        this.scheduleOnce(() => {
            this.checkHind()
        }, 2)
    }
    btn_dau() {
        if (this.isShowMenu == false) return

        cc.audioEngine.play(this.soundClick, false, 1)
        this.unschedule(this.checkHind)

        this.msDau = true
        this.btnDau.getComponent(cc.Button).enabled = false;
        this.listHand.children[3].active = false
        this.listTick.children[0].active = true
        let arrPos = [cc.v2(-5, -9), cc.v2(-8, 11), cc.v2(-21, 11)]
        let arrAngle = [45, 55, 73]
        for (let i = 0; i < 3; i++) {
            this.scheduleOnce(() => {
                let preTom = cc.instantiate(this.preDau);
                preTom.position = cc.v3(-134, -245);
                preTom.parent = this.plateList
                this.arrDau.push(preTom)

                cc.tween(preTom).bezierTo(0.5, cc.v2(-134, -245), cc.v2(-134, -245 + 350), arrPos[i]).start()
                cc.tween(preTom).to(0.5, { angle: arrAngle[i] }).start()
            }, i * 0.15)

        }
        this.scheduleOnce(() => {
            this.checkSuccess()
        }, 0.5 + 0.15 * 3)
        this.scheduleOnce(() => {
            this.checkHind()
        }, 2)
    }
    isSauceFinal = false
    btn_sauce() {
        if (this.isShowMenu == false) return

        cc.audioEngine.play(this.soundClick, false, 1)
        this.unschedule(this.checkHind)
        this.btnSauce.getComponent(cc.Button).enabled = false;
        this.listHand.children[1].active = false
        let startPos = cc.v2(300, 2)
        let endpos = cc.v2(1.5, 67);
        let preSauce = cc.instantiate(this.preSauce)
        preSauce.position = cc.v3(startPos.x, startPos.y);
        preSauce.parent = this.plateList
        this.arrSauce = preSauce;
        cc.tween(preSauce).bezierTo(0.5, startPos, cc.v2(startPos.x, startPos.y + 300), endpos).start()
        this.msSauces = true

        this.scheduleOnce(() => {
            this.isSauceFinal = true
            this.checkSuccess()
        }, 0.5)
        this.scheduleOnce(() => {
            this.checkHind()
        }, 2)
    }
    checkSuccess() {
        if (this.msDau == true && this.msHanh == true && this.msSauces == true && this.msTofu == true && this.msTom == true && this.isSauceFinal) {
            this.plate.getChildByName("phaohoa").active = true;
            cc.audioEngine.play(this.soundSellDone, false, 0.5)
            this.scheduleOnce(() => {
                this.plate.children[0].active = true;
                this.listHand.children[5].active = true
                this.plate.getComponent(cc.Button).enabled = true
            }, 0.5)

        }
    }
    checkHind() {

        if (this.msSauces == false) {
            this.listHand.children[1].active = true
            return;
        }
        if (this.msHanh == false) {
            this.listHand.children[2].active = true
            return;
        }
        if (this.msDau == false) {
            this.listHand.children[3].active = true
            return;
        }
        if (this.msTofu == false) {
            this.listHand.children[4].active = true
            return;
        }

    }
    idFoot = null
    btn_plate() {
        this.plate.getComponent(cc.Button).enabled = false
        cc.audioEngine.play(this.soundClick, false, 1)
        this.listHand.children[5].active = false
        this.listHand.children[5].opacity = 0
        let chefANim = this.chef2.children[0].getComponent(sp.Skeleton)
        chefANim.setAnimation(0, "L-arm", true)
        this.plate.parent = this.chef2;
        this.plate.position = cc.v3(217, 482)
        this.plate.children[0].active = false
        cc.audioEngine.play(this.soundFoot, false, 0.5)
        cc.tween(this.camera.node).to(1.5, { position: cc.v3(1239, 346) }).start()
        cc.tween(this.cameraDoc.node).to(1.5, { position: cc.v3(1239, 346) }).start()

        cc.tween(this.chef2).to(1.5, { position: cc.v3(1231, -219) }).call(() => {
            chefANim.setAnimation(1, "Idle", true);
            cc.audioEngine.stop(this.idFoot)
            this.transItem()
        }).start()
        chefANim.setAnimation(1, "Walk", true);

    }
    transItem() {
        // let arrPosDau = [this.listItemNoi.children[0].position, this.listItemNoi.children[1].position, this.listItemNoi.children[2].position]
        // let arrPosTofu = [this.listItemNoi.children[4].position, this.listItemNoi.children[3].position, this.listItemNoi.children[5].position]
        // let arrPosHanh = [this.listItemNoi.children[6].position, this.listItemNoi.children[7].position, this.listItemNoi.children[8].position]
        let arrPosTom = [this.listItemNoi.children[0].position, this.listItemNoi.children[1].position, this.listItemNoi.children[2].position]

        for (let i = 0; i < 3; i++) {
            this.scheduleOnce(() => {
                let item1 = this.arrTom[i];

                let pos1 = arrPosTom[i];
                pos1 = this.listItemNoi.convertToWorldSpaceAR(pos1)
                pos1 = item1.parent.convertToNodeSpaceAR(pos1);

                cc.tween(item1).bezierTo(0.6, cc.v2(item1.x, item1.y), cc.v2(item1.x, item1.y + 400), cc.v3(pos1.x, pos1.y)).call(() => {
                    item1.active = false
                    this.listItemNoi.children[i].active = true
                    cc.tween(this.listItemNoi.children[i].children[0].children[1]).delay(0.4).to(2.5, { opacity: 255 }).start()

                }).start()

            }, 0.1 * i)
        }
        this.scheduleOnce(() => {
            let chefANim = this.chef2.children[0].getComponent(sp.Skeleton)
            this.plate.active = false
            chefANim.setAnimation(0, "Idle", true);
            this.noiSup.getComponent("cooking").setOn()
            this.isSOundNau = cc.audioEngine.play(this.soundCreamMini, false, 1)
            // cc.audioEngine.play(this.soun,false,1)

        }, 1)
        this.scheduleOnce(() => {
            for (let i = 0; i < 3; i++) {

                let item1 = this.listItemNoi.children[i];
                item1.active = false



            }
            cc.audioEngine.play(this.soundSellDone, false, 1)
            this.cus1.active = false
            cc.audioEngine.stop(this.isSOundNau)
            this.chef2.getChildByName("plate2").active = true;
            let plate2 = this.chef2.getChildByName("plate2")
            let chefANim = this.chef2.children[0].getComponent(sp.Skeleton)
            chefANim.setAnimation(1, "Walk", true);
            chefANim.setAnimation(0, "L-arm", true)
            this.idFoot = cc.audioEngine.play(this.soundFoot, false, 0.5)
            this.ticket.children[0].active = true;
            cc.tween(this.ticket).to(0.3, { scale: 2.1 }).to(0.5, { opacity: 0 }).start()
            cc.tween(this.camera.node).by(1, { position: cc.v3(0, -600) }).start()
            cc.tween(this.cameraDoc.node).by(1, { position: cc.v3(0, -600) }).start()

            cc.tween(this.chef2).to(1, { position: cc.v3(1392, -592) }).call(() => {
                chefANim.setAnimation(1, "Idle", true);
                chefANim.setAnimation(0, "Idle", true);
                cc.audioEngine.stop(this.idFoot)
                plate2.parent = this.node
                plate2.position = cc.v3(1236, -382)
            }).start()
            cc.tween(plate2).delay(1.1).to(0.4, { position: cc.v3(1236, -550) }).call(() => {
                this.video.node.active = true;
                this.video.play()
                this.chef3.active = false
            }).start()
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundDO, false, 1)

            }, 3.5)
            this.scheduleOnce(() => {
                this.video.node.scale = this.isScaleVideo
                // this.video.node.position = cc.v3(1700, -300)
                this.video.node.position = cc.v3(1700, -300)

                // this.video.node.position=
            }, 4)
            this.scheduleOnce(() => {
                this.video.node.position = cc.v3(-900 + this.magVideo, -1000)

            }, 5 - 0.3)
            this.scheduleOnce(() => {
                this.listCus2.active = true
                this.camera.node.position = cc.v3(-40, 300 - 100, 0)
                this.cameraDoc.node.position = cc.v3(-40, 300 - 100, 0)
                this.cameraDoc.zoomRatio = 1.4
                this.camera.zoomRatio = 0.8
                this.video.node.active = false

                this.failUi.active = true;
                cc.audioEngine.play(this.soundFail, false, 1)
                this.scheduleOnce(() => {
                    this.failUi.active = false
                    cc.tween(this.camera.node).to(1, { position: cc.v3(-160 + 40 + 250, 300) }).start()
                    cc.tween(this.cameraDoc.node).to(1, { position: cc.v3(-160 + 40 + 250, 300) }).start()

                    this.chef1.children[0].getComponent(sp.Skeleton).setAnimation(0, "Fail", false)
                    cc.audioEngine.play(this.soundAngry1, false, 1)
                    cc.audioEngine.play(this.soundAngry2, false, 1)
                    this.scheduleOnce(() => {
                        cc.audioEngine.play(this.soundThinkLose, false, 1)

                    }, 2)
                    this.scheduleOnce(() => {
                        this.onEndGame(false)
                    }, 3)
                }, 1.3)

            }, 5.8)

        }, 3)
    }
    isSOundNau = null


    replaceCustomer(departedCus: cc.Node, counterPos: cc.Vec3) {
        if (this.isEndGame) return;
        let idx = this.arrCus.indexOf(departedCus)

        let newCus = this.spawnCustomerFromPrefab()
        if (!newCus) return
        this.btnCake.getComponent(cc.Button).enabled = true;
        this.btnPotato.getComponent(cc.Button).enabled = true;
        let newCusComp = newCus.getComponent("cusMission")
        if (newCusComp) {
            newCusComp.gamePlay = this
            newCusComp.isReadyForSell = false
        }

        if (this.sellTargetCus === departedCus || this.isTargetCus === departedCus) {
            this.sellTargetCus = null
            this.sellTraySlot = -1
        }
        this.isMoving = false
        if (this.mcComp) {
            this.mcComp.unscheduleAllCallbacks()
        }

        if (idx >= 0) {
            this.arrCus[idx] = newCus
        } else {
            this.arrCus.push(newCus)
        }
        departedCus.destroy()

        let spawnPos = counterPos.clone().add(this.cusEnterOffset)
        let distance = spawnPos.sub(counterPos).mag()
        let duration = distance / this.cusWalkSpeed

        cc.Tween.stopAllByTarget(newCus)
        newCus.position = spawnPos
        newCus.active = true
        newCusComp.move()
        cc.tween(newCus)
            .to(duration, { position: counterPos })
            .call(() => {
                newCusComp.showMission()
                this.isTargetCus = newCus
            })
            .start()
    }
    onHind() {
        this.hind1.active = true;
    }
    startGame() {
        this.initCusQueue()
        for (let i = 1; i < this.arrCus.length; i++) {
            this.arrCus[i].active = false
        }
        this.enterCustomers(1, true)
        this.scheduleOnce(() => {
            if (!this.isFirstClick) {
                this.isFirstClick = true
                this.btnChicken.getChildByName("hind").active = true
            }
        }, 3)
    }
    isMoving = false
    isFist = false
    isFistClickChicken = false

    isMcBusy() {
        return this.isMoving || (this.mcComp && this.mcComp.isWalking())
    }

    btn_chicken() {
        if (this.isMcBusy()) return;
        if (!this.isFistClickChicken) {
            this.isFistClickChicken = true
            this.barMission.getComponent("barTime").countDown()
            this.arrCus[0].getComponent("cusMission").loadTime()

            this.scheduleOnce(() => {
                this.btnMachine.getChildByName("hind").active = true
            }, 2)
        }
        if (!this.mcComp.canPickMoreChicken()) return;
        this.isMoving = true
        this.btnChicken.getChildByName("hind").opacity = 0;
        this.mcComp.moveToChicken()

    }

    btn_mayChien() {
        if (this.isMcBusy()) return;
        if (!this.mcComp.canDoAnyMachineAction()) return;

        this.isMoving = true
        this.btnMachine.getChildByName("hind").active = false
        this.btnMachine.getChildByName("hind").opacity = 0
        this.mcComp.moveToMachine()
    }
    btn_cola() {
        if (this.isMcBusy()) return;
        let cocaComp = this.btnCoca.getComponent("coca")
        let canCook = !cocaComp.isBusy()
        let canPickup = cocaComp.isCoca && this.mcComp.canPickItemType("coca")
        if (!canCook && !canPickup) return;
        this.isMoving = true
        this.mcComp.moveToCoca()
    }
    // btn_sauce() {
    //     if (this.isMcBusy()) return;
    //     if (!this.mcComp.hasAnyItem() || this.mcComp.findCookedTraySlot() < 0) return;
    //     this.isMoving = true
    //     this.mcComp.moveToSauce()
    // }
    btn_cake() {
        console.log(this.isMoving)
        if (this.isMcBusy()) return;
        this.isMoving = true
        this.mcComp.moveToCake()
    }
    btn_tomato() {
        if (this.isMcBusy()) return;
        this.isMoving = true
        this.mcComp.moveToTomato()
    }
    getCusTrayIndex(cusNode: cc.Node) {
        return this.arrCus.indexOf(cusNode)
    }
    checkSell(targetCus?: cc.Node) {
        console.log("check sell Main")
        let cus = targetCus || this.sellTargetCus || this.isTargetCus || this.arrCus[0]
        if (this.isMcBusy() || !cus) return false
        let cusComp = cus.getComponent("cusMission")
        if (!cusComp || cusComp.isSuccess || !cusComp.isReadyForSell) return false
        let trayIdx = this.mcComp.findTrayForCustomer(cusComp)
        if (!this.mcComp.hasAnyItem() || trayIdx < 0) return false
        this.sellTargetCus = cus
        this.sellTraySlot = trayIdx
        this.isTargetCus = cus
        this.isMoving = true
        this.mcComp.moveToBuy()
        return true
    }
    validateSellAtCounter() {
        let cus = this.sellTargetCus || this.isTargetCus || this.arrCus[0]
        if (!cus) {
            this.isMoving = false
            return
        }
        let cusComp = cus.getComponent("cusMission")
        if (!cusComp || cusComp.isSuccess || !cusComp.isReadyForSell) {
            this.isMoving = false
            this.sellTraySlot = -1
            return
        }
        cusComp.validateSell()
    }
    nextCus(value: boolean, departedCus?: cc.Node) {
        if (departedCus) {
            let idx = this.arrCus.indexOf(departedCus)
            if (idx >= 0) this.arrCus.splice(idx, 1)
        } else if (this.arrCus.length > 0) {
            this.arrCus.splice(0, 1)
        }

        this.countCus++
        if (this.countCus == 1) {

            this.btnCake.getComponent(cc.Button).enabled = true;
            this.btnPotato.getComponent(cc.Button).enabled = true;
        }
        else if (this.countCus == 3) {
            this.barMission2.active = true;
            this.scheduleOnce(() => {
                cc.tween(this.barMission2).by(0.4, { opacity: -255, position: cc.v3(0, 200) }).call(() => {
                    this.barMission2.active = false
                }).start()
            }, 1)
        }
        this.isMoving = false
        this.sellTargetCus = null
        this.sellTraySlot = -1

        if (this.countCus >= this.maxCustomers || this.arrCus.length === 0) {
            this.isTargetCus = null
            this.onEndGame(true)
            return
        }

        let wasGroupAtCounter = this.counterCusCount > 1
        if (wasGroupAtCounter) {
            this.counterCusCount--
            this.mcComp.afterCustomerLeft()
            return
        }

        this.isTargetCus = null
        this.mcComp.resetToStart()

        let enterCount = this.getEnterCountForWave()
        this.enterCustomers(enterCount)
    }

    start() {

        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.5)

    }


    setGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));

    }
    offGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    }

    isEndGame = false
    onEndGame(value) {
        if (this.isEndGame) return;
        this.isEndGame = true
        this.warning.active = false;
        this.scheduleOnce(() => {
            this.updateResponsive()

        }, 0.5)
        if (value == true) {
            // this.barMission.getComponent("barTime").endGame()
            // this.amazing.active = true;
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundThinking, false, 0.5)

            }, 0.5)

            cc.audioEngine.play(this.soundThinkLose, false, 1)
            // this.scheduleOnce(() => {
            //     if (this.endCardWin) this.endCardWin.active = true
            // }, 0.5)


        }
        else {
            // this.barMission.getComponent("barTime").endGame()
            // for (let child of this.arrCus) {
            //     child.children[0].getComponent(sp.Skeleton).setAnimation(0, "6.angry", true)
            // }
            // cc.audioEngine.stop(this.idSound)
            // this.timeup.active = true;

            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundThinking, false, 0.5)
                // this.endCard.active = true;
            }, 1)


        }
        this.linkToStore.active = true
    }
    // btn_choose(event, value) {
    isDoc = false
    // update(dt) {
    //     // this.lbCoin.string = globalThis.gold.toString()
    //     let deviceResolution = cc.view.getFrameSize();
    //     if (deviceResolution.width < deviceResolution.height) {
    //         this.reponsive(true);
    //     }
    //     else {
    //         this.reponsive(false);
    //     }
    // }
    updateResponsive() {
        let deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        } else {
            this.reponsive(false);
        }
    }
    arrPosMenuNgang = [cc.v3(-391, -102), cc.v3(375, -112), cc.v3(114, -120), cc.v3(-409, -284), cc.v3(-158, -296), cc.v3(118, -280), cc.v3(390, -296), cc.v3(-137, -116)];
    arrPosDoc = [cc.v3(26, -337), cc.v3(336, -112), cc.v3(15.5, -121), cc.v3(-170, -525.7), cc.v3(-300, -352), cc.v3(186.96, -512), cc.v3(355, -335), cc.v3(-292, -116)]
    magfront = 0
    magVideo = 0
    isScaleVideo = 1
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        // this.camera.zoomRatio = 0.8
        this.endCard.scale = (logic) ? 1.2 : 0.7
        this.endCardWin.scale = (logic) ? 1.2 : 0.7
        this.logo.scale = (logic) ? 0.6 : 0.4
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        this.barCoin.scale = (logic) ? 2.5 : 1.4
        this.barCoin.getComponent(cc.Widget).top = (logic) ? 210 : 140
        this.phaoHoa.scale = (logic) ? 9 : 5
        this.guild.scale = (logic) ? 2 : 1.2
        this.guild.position = (logic) ? cc.v3(0, -900) : cc.v3(0, -360)

        this.timeup.scale = (logic) ? 1 : 1.4
        this.amazing.scale = (logic) ? 1 : 1.4
        this.endCardDoc.scale = 1.5
        this.notiMission.scale = (logic) ? 2 : 1
        this.barMission2.scale = (logic) ? 2 : 1
        this.magVideo = 0
        this.barMission.scale = (logic) ? 1.7 : 1
        // this.camera.node.position = (logic) ? cc.v3(-160, 300, 0) : cc.v3(0, 120, 0)
        this.barMission.getComponent(cc.Widget).top = 50

        this.camera.node.active = (logic) ? false : true
        this.cameraDoc.node.active = (logic) ? true : false
        this.mag = 0
        this.magfront = 0
        this.video.node.parent.scale = (logic) ? 2 : 1;
        this.video.node.parent.position = (logic) ? cc.v3(-500, 600) : cc.v3(0, 0)
        this.isScaleVideo = 2
        if (this.isEndGame) {
            this.endCardDoc.active = (logic) ? true : false
            this.endCardWin.active = (logic) ? false :
                this.endCardWin.active = true
        }
        if (logic == true) {
            this.magVideo = 300
            this.isScaleVideo = 1.5

            this.isDoc = true
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            const TALL_PHONE_MIN_RATIO = 2.0;        // iPhone X ~2.16, 20:9 Android ~2.22
            // this.camera.zoomRatio = 1.4
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {
                this.barCoin.getComponent(cc.Widget).top = 300 + 30
                this.barMission.getComponent(cc.Widget).top = 150 + 30
                if (aspectRatio > 2.2) {
                    this.camera.zoomRatio = 1.75
                }
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 1.5
                this.endCardDoc.scale = 1.2
                this.barCoin.scale = 2
            }
        }
        else {
            this.isDoc = false
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
                this.mag = -200
                this.magfront = 200
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 0.85
                this.mag = 220

            }
        }


    }
}
