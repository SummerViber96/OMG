
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
    soundThinkLose:cc.AudioClip=null;
    @property(cc.AudioClip)
    soundThinkWin:cc.AudioClip=null
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
    @property(cc.Node)
    logo: cc.Node = null;
    @property(cc.Node)
    listCus: cc.Node = null;


    @property(cc.Camera)
    mainCamera: cc.Camera = null
    @property(cc.Camera)
    uiCamera: cc.Camera = null
    @property(cc.Node)
    uiNode: cc.Node = null
    @property(cc.Node)
    barTime: cc.Node = null;
    @property(cc.Node)
    barCoin: cc.Node = null;
    @property(cc.Node)
    listCheckItem: cc.Node = null;

    @property(cc.Node)
    phaoHoa: cc.Node = null;

    @property(cc.Node)
    warning: cc.Node = null
    @property(cc.Node)
    guild: cc.Node = null;
    @property([cc.Prefab])
    listItem: cc.Prefab[] = []
    @property(cc.Node)
    listRay: cc.Node[] = [];
    @property(cc.Node)
    listKhay: cc.Node = null;
    @property(cc.Prefab)
    preKhay: cc.Prefab = null;

    @property(cc.Node)
    listRayNode: cc.Node = null
    @property(cc.Node)
    timeup: cc.Node = null
    @property(cc.Node)
    amazing: cc.Node = null
    @property(cc.Animation)
    notiCoin: cc.Animation = null
    @property(cc.Node)
    notiMission: cc.Node = null
    @property([cc.Prefab])
    listPreCus: cc.Prefab[] = []


    @property(cc.Node)
    listMenu: cc.Node = null;
    @property(cc.Node)
    handtut: cc.Node = null;
    @property(cc.Node)
    handtut2: cc.Node = null;
    @property(cc.Node)
    handtut3: cc.Node = null;

    @property(cc.Prefab)
    preCoin: cc.Prefab = null
    @property(cc.Node)
    endCardDoc: cc.Node = null;
    //new
    @property(cc.Node)
    listBep: cc.Node = null;
    @property(cc.Node)
    listDia: cc.Node = null;

    @property(cc.Prefab)
    preBanh: cc.Prefab = null;
    @property(cc.Node)
    barMission: cc.Node = null
    @property(cc.Node)
    barMission2: cc.Node = null
    //btn
    @property(cc.Node)
    btnChicken: cc.Node = null;
    @property(cc.Node)
    btnMachine: cc.Node = null;
    @property(cc.Node)
    btnCoca: cc.Node = null;
    @property(cc.Node)
    btnCake: cc.Node = null;
    @property(cc.Node)
    btnPotato: cc.Node = null;
    @property(cc.Node)
    mc: cc.Node = null;
    @property(cc.Node)
    hind1: cc.Node = null;
    @property(cc.Prefab)
    listPreCUs: cc.Prefab[] = []
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
    //0:banh thuong 1:chocolate 2: strawberry 
    onLoad() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        for (let i = 0; i < this.listCus.childrenCount; i++) {
            this.arrCus.push(this.listCus.children[i])
        }
        this.updateResponsive();
        cc.view.setResizeCallback(() => {
            this.updateResponsive();
        });
        this.scheduleOnce(() => {
            cc.tween(this.notiMission).by(0.4, { opacity: -255, position: cc.v3(0, 200) }).call(() => {
                this.notiMission.active = true
                // this.barMission.getComponent("barTime").countDown()

                this.startGame()
            }).start()
        }, 1.5)
        this.mcComp = this.mc.getComponent("mc")
        // this.onEndGame(false)
    }
    isHand = null

    initCusQueue() {
        if (!this.cusCounterPos && this.arrCus.length > 0) {
            this.cusCounterPos = this.arrCus[0].position.clone().sub(this.cusEnterOffset)
        }
    }

    getCusCounterPos(slot: number, total: number) {
        this.initCusQueue()
        if (total <= 1) return this.cusCounterPos.clone()
        let offsetX = (slot - (total - 1) / 2) * this.cusSlotGap
        return this.cusCounterPos.clone().add(cc.v3(offsetX, 0, 0))
    }

    showCounterMissions(count: number,value) {
        for (let i = 0; i < count && i < this.arrCus.length; i++) {
            this.arrCus[i].getComponent("cusMission").showMission(value)
        }
    }

    enterCustomers(count: number, value) {
        this.counterCusCount = count
        let arrPos = [cc.v3(0, 0, 0)]
        if (count == 2) {
            arrPos = [cc.v3(-285, 0, 0), cc.v3(88, 0, 0)]
        }
        else if (count == 3) {
            arrPos = [cc.v3(-443, 0, 0), cc.v3(-73, 0, 0), cc.v3(273, 0, 0)]
        }
        let maxDuration = 0
        for (let i = 0; i < count && i < this.arrCus.length; i++) {
            let cus = this.arrCus[i]
            // let targetPos = this.getCusCounterPos(i, count)
            let targetPos = arrPos[i]

            let spawnPos = targetPos.clone().add(this.cusEnterOffset)
            let distance = spawnPos.sub(targetPos).mag()
            let duration = distance / this.cusWalkSpeed
            maxDuration = Math.max(maxDuration, duration)

            cc.Tween.stopAllByTarget(cus)
            cus.position = spawnPos
            cus.active = true
            cus.getComponent("cusMission").move()
            cc.tween(cus)
                .to(duration, { position: targetPos })
                .start()
        }

        this.scheduleOnce(() => {
            // if (value != true) {
                this.showCounterMissions(count,value)

            // }
            if (count === 1 && this.arrCus.length > 0) {
                this.isTargetCus = this.arrCus[0]
            }
        }, maxDuration)
    }

    getEnterCountForWave() {
        if (this.countCus === 1) return 2
        if (this.countCus === 3) return 3
        return 1
    }

    spawnCustomerFromPrefab(): cc.Node {
        if (this.listPreCUs.length === 0) return null
        let prefab = this.listPreCUs[this.preCusIndex % this.listPreCUs.length]
        this.preCusIndex++
        let newCus = cc.instantiate(prefab)
        newCus.parent = this.listCus
        newCus.active = false
        return newCus
    }

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
    btn_sauce() {
        if (this.isMcBusy()) return;
        if (!this.mcComp.hasAnyItem() || this.mcComp.findCookedTraySlot() < 0) return;
        this.isMoving = true
        this.mcComp.moveToSauce()
    }
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
    // isFirstClickbanh = false
    // isFrist = false


    // btn_banh() {
    //     if (!this.isFrist) {
    //         this.isFrist = true
    //         this.arrCus[0].getComponent("cusMission").loadTime()

    //     }
    //     cc.audioEngine.play(this.soundClick, false, 1)
    //     this.isFirstClick = true
    //     this.handtut.active = false
    //     this.scheduleOnce(() => {
    //         if (!this.isFirstClickbanh) {
    //             this.isFirstClickbanh = true
    //             this.handtut2.active = true

    //         }

    //     }, 2)
    //     let check = this.getSlotBep();
    //     if (check != null) {
    //         this.arrBep[check] = true;;
    //         this.listBep.children[check].getComponent("Banh").setOn()
    //     }
    // }
    // isFirstStep = false
    // btn_bep(tag) {
    //     cc.audioEngine.play(this.soundClick, false, 1)
    //     this.handtut2.active = false
    //     if (!this.isFirstStep) {
    //         this.handtut3.active = true
    //         this.isFirstStep = true
    //     }
    //     let check = this.getSlotDia();
    //     if (check != null) {
    //         this.arrDia[check] = true
    //         this.listDia.children[check].getComponent("Dia").getBanh()
    //     }
    // }

    // getSlotBep() {
    //     for (let i = 0; i < this.arrBep.length; i++) {
    //         let child = this.arrBep[i]
    //         if (child == false) {
    //             return i
    //         }
    //     }
    //     return null
    // }
    // getSlotDia() {
    //     for (let i = 0; i < this.arrDia.length; i++) {
    //         let child = this.listDia.children[i]
    //         if (child.getComponent("Dia").isBanh == false) {
    //             return i
    //         }
    //     }
    //     return null
    // }
    // btn_strawBerry() {
    //     cc.audioEngine.play(this.soundClick, false, 1)

    //     for (let i = 0; i < this.arrDia.length; i++) {
    //         // let check = this.arrDia[i];
    //         let banh = this.listDia.children[i];
    //         if (banh.getComponent("Dia").status == 0 && banh.getComponent("Dia").isBanh == true) {
    //             this.handtut3.active = false

    //             banh.getComponent("Dia").setStatus(2)
    //             break;
    //         }
    //     }
    // }
    // btn_chocolate() {
    //     cc.audioEngine.play(this.soundClick, false, 1)

    //     for (let i = 0; i < this.arrDia.length; i++) {
    //         // let check = this.arrDia[i];
    //         let banh = this.listDia.children[i];
    //         if (banh.getComponent("Dia").status == 0 && banh.getComponent("Dia").isBanh == true) {
    //             this.handtut3.active = false

    //             banh.getComponent("Dia").setStatus(1)
    //             break;
    //         }
    //     }
    // }
    // btn_cream() {


    // }
    // isFlying = false
    // btn_sell(item, tag) {
    //     // if(this.isMoving)return;
    //     let check = this.checkMission(tag, item);
    //     cc.audioEngine.play(this.soundClick, false, 1)
    //     let mag = 50
    //     let startPos = cc.v2(item.x, item.y);
    //     let endPos = this.arrCus[0].getChildByName("bubbles").position.add(cc.v3(-30, 120))
    //     let midPos = cc.v2(endPos.x + mag, endPos.y + 200);

    //     let banh = cc.instantiate(this.preBanh);
    //     banh.parent = item.parent;
    //     banh.position = cc.v3(startPos.x, startPos.y);
    //     banh.getComponent("Item").loadItem(tag)

    //     cc.tween(banh).to(0.2, { scale: 1.2 }).start();
    //     cc.tween(banh).bezierTo(0.4, startPos, midPos, endPos).call(() => {
    //         if (check) {
    //             cc.audioEngine.play(this.soundOk, false, 1)
    //             this.arrCus[this.isTargetItemPlace[0]].getComponent("cusMission").doneNode.children[this.isTargetItemPlace[1]].active = true
    //         }
    //         else {
    //             cc.audioEngine.play(this.soundWrong, false, 1)
    //             this.arrCus[0].getComponent("cusMission").angry()

    //         }
    //         banh.destroy()
    //     }).start()
    //     // }

    // }

    // spawKhay(mission) {
    //     let arr = [cc.v3(-60, -10), cc.v3(80, -10)]
    //     if (mission.length == 3) {
    //         arr = [cc.v3(-75, -10), cc.v3(30, -10), cc.v3(120, -10)]
    //     }
    //     let khay = cc.instantiate(this.preKhay);
    //     khay.parent = this.listKhay;
    //     khay.position = cc.v3(-100, 50)
    //     this.arrKhay.push(khay)
    //     this.loadDataKhay(mission, khay)
    //     this.arrTargetMission.push(mission)
    // }

    // isTargetItemPlace = []
    // // countMiss = 3
    // spawNextKhay(place) {
    //     let firstCus = this.arrCus[1];
    //     firstCus.getComponent("cusMission").showMission();
    //     firstCus.getComponent("cusMission").loadTime();

    //     let mission = firstCus.getComponent("cusMission").order;
    //     this.arrTargetMission.splice(place, 1)
    //     this.arrTargetMission.push(mission)
    //     let pos = cc.v3(1200, 0);
    //     let preKhay = cc.instantiate(this.preKhay)
    //     preKhay.parent = this.listKhay;
    //     preKhay.position = pos
    //     this.arrKhay.push(preKhay)
    //     this.loadDataKhay(mission, preKhay)
    //     preKhay.position = cc.v3(-100 + 400, 50)
    //     let targetKhay = this.arrKhay[place]
    //     cc.tween(targetKhay).to(0.3, { scale: 0 }).start()


    //     for (let i = place + 1; i < this.arrKhay.length; i++) {
    //         let khay = this.arrKhay[i]
    //         cc.tween(khay).by(0.8, { position: cc.v3(-400, 0) }).call(() => {
    //             this.arrKhay[i - 1] = khay

    //         }).start()
    //     }
    //     cc.tween(this.listRay[0]).by(0.8, { position: cc.v3(-400, 0) }).start()
    //     this.scheduleOnce(() => {
    //         this.arrKhay.splice(place, 1);

    //     }, 0.2)
    // }
    // loadDataKhay(data, khay) {
    //     if (data) {
    //         let arr = [cc.v3(-60, -30), cc.v3(80, -30)]

    //         if (data.length == 3) {
    //             arr = [cc.v3(-75, -30), cc.v3(30, -30), cc.v3(120, -30)]

    //         }

    //         for (let i = 0; i < data.length; i++) {
    //             let item = cc.instantiate(this.listItem[data[i] - 1])
    //             item.parent = khay
    //             item.position = arr[i]
    //             item.scale = 0.68
    //             item.getComponent(cc.Button).enabled = false
    //             item.getComponent("Item").loadGray()
    //         }
    //     }
    // }
    // firstClick = false
    // btn_clickBtn(event, value) {
    //     this.arrCus[0].getComponent("cusMission").loadTime()

    //     this.handtut.active = false;
    //     this.btnPizza.children[1].active = false;
    //     if (!this.firstClick) {
    //         this.firstClick = true;
    //         this.guild.active = false;
    //         this.handtut.active = false;

    //     }
    //     let id = parseInt(value);
    //     let node = event.currentTarget;
    //     let check = this.checkMission(id, node);
    //     if (check) {

    //         cc.audioEngine.play(this.soundClick, false, 1)
    //         let pos = check.parent.convertToWorldSpaceAR(check.position);
    //         pos = node.parent.convertToNodeSpaceAR(pos);

    //         let mag = (pos.x > node.x) ? -50 : 50;
    //         let startPos = cc.v2(node.x, node.y);
    //         let endPos = cc.v2(pos.x, pos.y);
    //         let midPos = cc.v2(endPos.x + mag, endPos.y + 200);

    //         let item = cc.instantiate(this.listItem[id - 1]);
    //         item.parent = node.parent;
    //         item.position = cc.v3(startPos.x, startPos.y);

    //         cc.tween(item).to(0.2, { scale: 1.2 }).start();
    //         cc.tween(item).bezierTo(0.4, startPos, midPos, endPos).call(() => {
    //             cc.audioEngine.play(this.soundOk, false, 1)
    //             this.arrCus[this.isTargetItemPlace[0]].getComponent("cusMission").doneNode.children[this.isTargetItemPlace[1]].active = true
    //             item.destroy()
    //         }).start()
    //     }

    // }
    // checkItem(id) {
    //     for (let i = 0; i < this.arrTargetMission.length; i++) {
    //         let mission = this.arrTargetMission[i];
    //         for (let j = 0; j < mission.length; j++) {
    //             if (mission[i] == id) {
    //                 let arrItem = [i, j];
    //                 return arrItem
    //             }
    //         }
    //     }
    //     return null
    // }



    // checkMission(id, node) {

    //     for (let i = 0; i < this.arrTargetMission.length; i++) {
    //         let mission = this.arrTargetMission[i];
    //         for (let j = 0; j < mission.length; j++) {
    //             if (id == mission[j]) {
    //                 this.arrTargetMission[i][j] = 100;
    //                 this.isTargetItemPlace = [i, j]
    //                 this.checkSuccess(i, j)
    //                 return this.arrKhay[i].children[j];
    //             }
    //         }
    //     }
    //     return null;
    // }
    // isCountCus = 3
    // isCountDone = 0
    // isMoving = false
    // coinArr = []
    // checkSuccess(i, j) {//check cus hoan thanh don hang chua
    //     this.scheduleOnce(() => {
    //         if (j != null) {
    //             let targetKhay = this.arrKhay[i].children[j];
    //             targetKhay.getComponent("Item").offGray(targetKhay.children[1])
    //             // cc.tween(targetKhay).to(0.2, { scale: 2.5 }).to(0.1, { scale: 2.2 }).start()
    //             cc.tween(targetKhay).to(0.2, { scale: 0.9 }).to(0.1, { scale: 0.65 }).start()

    //         }

    //     }, 0.4)
    //     let mission = this.arrTargetMission[i];
    //     let check = true
    //     let cus = this.arrCus[i]
    //     for (let m = 0; m < mission.length; m++) {
    //         if (mission[m] != 100) {
    //             check = false
    //         }
    //     }
    //     if (check == true) {
    //         this.isMoving = true
    //         this.isCountDone++
    //         this.scheduleOnce(() => {

    //             let pos = this.listCus.convertToWorldSpaceAR(cus.position)
    //             pos = this.camera.getWorldToScreenPoint(pos);
    //             pos = this.uiCamera.getScreenToWorldPoint(pos);
    //             pos = this.barCoin.convertToNodeSpaceAR(pos).add(cc.v3(0, 0))

    //             // pos = this.node.convertToNodeSpaceAR(pos)
    //             this.spawnCoinsFromCustomer(pos, () => {
    //                 // sau khi tỏa ra xong thì move về thanh gold
    //                 this.moveCoinsToGoldBar(this.coinArr, this.barCoin);
    //             }); cus.getComponent("cusMission").happy()
    //             this.notiCoin.play()
    //             globalThis.coin += 50
    //             if (mission.length == 3) {
    //                 globalThis.coin += 100

    //             }
    //             if (globalThis.coin >= 1000) {
    //                 this.onEndGame(true)
    //             }
    //             cc.audioEngine.play(this.soundSellDone, false, 1)
    //         }, 0.6)
    //         this.scheduleOnce(() => {
    //             // this.moveCusOut(i)
    //             this.enqueueMove(this.arrCus[i]);
    //         }, 0.8)

    //     }

    // }

    // spawnCoinsFromCustomer(startPos: cc.Vec3, onFinish?: () => void) {
    //     this.coinArr = []
    //     const coinCount = 6;
    //     const radius = 70; // độ tỏa ra

    //     let finished = 0;

    //     for (let i = 0; i < coinCount; i++) {
    //         const coin = cc.instantiate(this.preCoin);
    //         coin.parent = this.barCoin;
    //         coin.setPosition(startPos);
    //         coin.scale = 0.8
    //         this.coinArr.push(coin)
    //         // random hướng tỏa
    //         const angle = (Math.PI * 2 / coinCount) * i;
    //         const randomRadius = radius + Math.random() * 40;

    //         const targetPos = startPos.add(cc.v3(
    //             Math.cos(angle) * randomRadius,
    //             Math.sin(angle) * randomRadius,
    //             0
    //         ));

    //         // tỏa ra
    //         cc.tween(coin)
    //             .to(0.25, { position: targetPos }, { easing: "quadOut" })
    //             .delay(0.05)
    //             .call(() => {
    //                 finished++;
    //                 if (finished === coinCount && onFinish) {
    //                     onFinish();
    //                 }
    //             })
    //             .start();
    //     }
    // }
    // moveCoinsToGoldBar(coins: cc.Node[], goldTarget: cc.Node) {
    //     // const worldPos = goldTarget.parent.convertToWorldSpaceAR(goldTarget.position);
    //     let local = cc.v3(0, 0)
    //     coins.forEach((coin, index) => {
    //         // const local = coin.parent.convertToNodeSpaceAR(worldPos);

    //         cc.tween(coin)
    //             .delay(index * 0.05)
    //             .to(0.4, { position: local, scale: 0.5 }, { easing: "quadIn" })
    //             .call(() => {
    //                 coin.destroy();
    //                 // this.addGold(1);
    //             })
    //             .start();
    //     });
    // }
    // isDem = 0
    // getPlace(cus) {
    //     return this.arrCus.indexOf(cus); // gọn hơn

    // }
    // enqueueMove(cusNode) {
    //     this.moveQueue.push(cusNode);
    //     this.processQueue();
    // }
    // processQueue() {
    //     if (this.isProcessing) return;
    //     if (this.moveQueue.length === 0) return;

    //     this.isProcessing = true;

    //     let cusNode = this.moveQueue.shift();
    //     this._moveCusOut(cusNode);
    // }

    // moveQueue = [];
    // isProcessing = false;
    // _moveCusOut(cusNode) {
    //     let place = this.arrCus.indexOf(cusNode);

    //     if (place === -1) {
    //         this.finishMove();
    //         return;
    //     }
    //     this.isMoving = true
    //     let firstCus = cusNode;

    //     // ===== Spawn customer tiếp theo =====
    //     let nextCus = this.listCus.children[this.isCountCus];

    //     if (nextCus) {
    //         nextCus.active = true;
    //         this.isTargetCus = nextCus;
    //         this.isCountCus++;
    //     }

    //     // ===== Tạo customer mới ở cuối =====
    //     // let newCus = cc.instantiate(this.listPreCus[this.isDem]);
    //     // newCus.parent = this.listCus;

    //     // let lastCus = this.arrCus[this.arrCus.length - 1];
    //     // newCus.position = lastCus.position.add(cc.v3(600, 0));

    //     // this.isDem = (this.isDem + 1) % this.listPreCus.length; ``
    //     // this.arrCus.push(newCus);

    //     // ===== Move thằng bị out =====
    //     firstCus.zIndex = -1;
    //     firstCus.getComponent("cusMission").isSuccess = true
    //     cc.tween(firstCus)
    //         .delay(0.3)
    //         .by(0.8 * (place + 1), { position: cc.v3(-400 * (place + 1), 0) })
    //         .start();

    //     cc.tween(firstCus)
    //         .delay(0.3)
    //         .to(0.5, { opacity: 0 })
    //         .start();

    //     // ===== Move các thằng phía sau =====
    //     for (let i = place + 1; i < this.arrCus.length; i++) {
    //         let child = this.arrCus[i];

    //         cc.tween(child)
    //             .delay(0.3)
    //             .by(0.8, { position: cc.v3(-400, 0) })
    //             .start();
    //     }
    //     // ===== Remove khỏi mảng =====
    //     this.scheduleOnce(() => {
    //         this.arrCus.splice(place, 1);
    //         this.isMoving = false;
    //         this.finishMove();

    //     }, 1.1);

    //     // ===== Spawn khay =====
    //     this.scheduleOnce(() => {
    //         if (this.isCountDone < 5) {
    //             this.spawNextKhay(place);

    //         }
    //     }, 0.3);
    //     if (this.isCountDone == 5) {
    //         this.onEndGame(true)
    //     }
    // }
    // finishMove() {
    //     this.isProcessing = false;
    //     this.processQueue(); // chạy tiếp thằng kế tiếp
    // }
    // checkSuccessItem() {
    //     for (let i = 0; i < 1; i++) {
    //         let mission = this.arrTargetMission[i];
    //         let check = true
    //         for (let j = 0; j < mission.length; j++) {
    //             if (mission[j] != 100) {
    //                 check = false
    //             }
    //         }
    //         if (check) {
    //             this.checkSuccess(i, null)
    //             return;
    //         }
    //     }
    // }

    // itemQueue: number[] = [];

    // shuffleItem() {
    //     this.itemQueue = [];

    //     for (let i = 0; i < this.listItem.length; i++) {
    //         this.itemQueue.push(i);
    //     }

    //     // shuffle Fisher-Yates
    //     for (let i = this.itemQueue.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         [this.itemQueue[i], this.itemQueue[j]] = [this.itemQueue[j], this.itemQueue[i]];
    //     }
    // }

    // getNextItemIndex() {

    //     if (this.itemQueue.length == 0) {
    //         this.shuffleItem(); // tạo lượt mới
    //     }

    //     return this.itemQueue.shift();
    // }

    // lastItemIndex: number[] = [];

    // spawnItem() {
    //     for (let i = 0; i < this.listRay.length; i++) {

    //         this.lastItemIndex[i] = -1; // chưa có item trước

    //         this.spawnItemOnRay(i);
    //     }
    // }

    // spawnItemOnRay(index: number) {

    //     let mag = (index == 0) ? 1000 : -1000;

    //     this.createItem(index, mag);

    //     this.schedule(() => {
    //         this.createItem(index, mag);
    //     }, 2);
    // }

    // createItem(index: number, mag: number) {
    //     let rd = this.getNextItemIndex();
    //     this.lastItemIndex[index] = rd;

    //     let item = cc.instantiate(this.listItem[rd]);
    //     item.parent = this.listRay[index];

    //     this.arrItem[index].push(item);

    //     item.position = cc.v3(mag, -40);

    //     this.moveItem(item, mag);
    // }
    // moveItem(item: cc.Node, mag) {
    //     let targetX = -mag;
    //     cc.tween(item)
    //         .to(17, { x: targetX })
    //         .call(() => {
    //             item.destroy();
    //         })
    //         .start();
    // }
    start() {

        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.5)

    }


    setGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));

    }
    offGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    }
    // moveClocktoUI(node1) {
    //     this.moveItemToUI(node1, this.barTime.children[1]);
    // }
    // moveItemToUI(node1, node2) {
    //     // cc.audioEngine.play(this.soundWoodin, false, 1)
    //     let pos = node2.parent.convertToWorldSpaceAR(node2.position)
    //     pos = this.uiNode.convertToNodeSpaceAR(pos)
    //     // pos = pos.add(cc.v3(0, 0))
    //     let pos2 = node1.parent.convertToWorldSpaceAR(node1.position);
    //     pos2 = this.mainCamera.getWorldToScreenPoint(pos2);
    //     pos2 = this.uiCamera.getScreenToWorldPoint(pos2);
    //     pos2 = this.uiNode.convertToNodeSpaceAR(pos2).add(cc.v3(0, 0))
    //     node1.parent = this.uiNode;
    //     node1.scale = this.mainCamera.zoomRatio / this.uiCamera.zoomRatio * 0.7
    //     node1.position = pos2
    //     cc.tween(node1).to(0.4, { position: pos, scale: 0.4 }).call(() => {
    //         node1.active = false
    //         // this.missionBar.getComponent("updateBar").updateBar();
    //         // wood.getComponent(cc.Animation).play("exp")
    //         // // cc.audioEngine.play(this.soundWoodOut, false, 1)
    //     }).start()
    // }
    isEndGame = false
    onEndGame(value) {
        if (this.isEndGame) return;
        this.isEndGame = true
        this.warning.active = false;
        this.scheduleOnce(() => {
            this.updateResponsive()

        }, 0.5)
        if (value == true) {
            this.barMission.getComponent("barTime").endGame()
            this.amazing.active = true;
            this.scheduleOnce(()=>{
            cc.audioEngine.play(this.soundThinkWin,false,0.5)

            },0.5)

            cc.audioEngine.play(this.soundWin,false,1)
            // this.scheduleOnce(() => {
            //     if (this.endCardWin) this.endCardWin.active = true
            // }, 0.5)


        }
        else {
            this.barMission.getComponent("barTime").endGame()
            for (let child of this.arrCus) {
                child.children[0].getComponent(sp.Skeleton).setAnimation(0, "6.angry", true)
            }
            cc.audioEngine.stop(this.idSound)
            this.timeup.active = true;
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundThinking, false, 1)
                cc.audioEngine.play(this.soundThinkLose, false, 0.5)
                // this.endCard.active = true;
            }, 0.5)


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
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 0.85
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
        this.listCus.scale = (logic) ? 1 : 1
        // this.listKhay.scale = (logic) ? 1.1 : 1
        this.timeup.scale = (logic) ? 1 : 1.4
        this.amazing.scale = (logic) ? 1 : 1.4
        this.endCardDoc.scale = 1.5
        this.notiMission.scale = (logic) ? 2 : 1
        this.barMission2.scale = (logic) ? 2 : 1
        // this.tutMision.scale = (logic) ? 2 : 1
        this.barMission.scale = (logic) ? 1.7 : 1
        // this.barMission2.scale = (logic) ? 2 : 1
        this.mainCamera.node.position = (logic) ? cc.v3(0, 0, 0) : cc.v3(0, 110, 0)
        this.barMission.getComponent(cc.Widget).top = 50

        if (this.isEndGame) {
            this.endCardDoc.active = (logic) ? true : false
            this.endCardWin.active = (logic) ? false : true
        }
        if (logic == true) {

            this.isDoc = true
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            const TALL_PHONE_MIN_RATIO = 2.0;        // iPhone X ~2.16, 20:9 Android ~2.22
            this.camera.zoomRatio = 1.7
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {
                this.barCoin.getComponent(cc.Widget).top = 300+30
                this.barMission.getComponent(cc.Widget).top = 150+30
                if (aspectRatio > 2.2) {
                    this.camera.zoomRatio = 1.75
                }
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.5
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

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.85


            }
        }


    }
}
