"use strict";
cc._RF.push(module, '6f707kejClBjKTl44QvevBE', 'GameDonut');
// RecipeRush/scripts/GameDonut.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
globalThis.coin = 0;
globalThis.Game = false;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundShowPop = null;
        _this.soundClosePop = null;
        _this.soundBg = null;
        _this.soundWin = null;
        _this.soundLose = null;
        _this.soundOk = null;
        _this.soundTrans = null;
        _this.soundClick = null;
        _this.soundEnd = null;
        _this.soundSellDone = null;
        _this.soundThinking = null;
        _this.soundCream = null;
        _this.soundCherry = null;
        _this.soundWrong = null;
        _this.soundCreamMini = null;
        _this.soundThinkWin = null;
        _this.soundBanh = null;
        _this.tut = null;
        _this.hand = null;
        _this.endCard = null;
        _this.endCardWin = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.logo = null;
        _this.listCus = null;
        _this.mainCamera = null;
        _this.uiCamera = null;
        _this.uiNode = null;
        _this.barTime = null;
        _this.barCoin = null;
        _this.listCheckItem = null;
        _this.phaoHoa = null;
        _this.warning = null;
        _this.guild = null;
        _this.listItem = [];
        _this.listRay = [];
        _this.listKhay = null;
        _this.preKhay = null;
        _this.listRayNode = null;
        _this.timeup = null;
        _this.amazing = null;
        _this.notiCoin = null;
        _this.notiMission = null;
        _this.listPreCus = [];
        _this.listMenu = null;
        _this.handtut = null;
        _this.handtut2 = null;
        _this.handtut3 = null;
        _this.preCoin = null;
        _this.endCardDoc = null;
        //new
        _this.listBep = null;
        _this.listDia = null;
        _this.preBanh = null;
        _this.barMission = null;
        _this.barMission2 = null;
        //btn
        _this.btnChicken = null;
        _this.btnMachine = null;
        _this.btnCoca = null;
        _this.btnCake = null;
        _this.btnPotato = null;
        _this.mc = null;
        _this.hind1 = null;
        _this.mcComp = null;
        // @property(cc.Node)
        // tutMision: cc.Node = null
        _this.arrBep = [false, false, false, false];
        _this.arrDia = [false, false, false, false];
        _this.maxKhay = 7;
        _this.arrDonutpos = [];
        _this.isTutChili = false;
        _this.isTutMeat = false;
        _this.isTutVegetTable = false;
        _this.isTutClickMeat = false;
        _this.isTargetPop = null;
        // isStep = 0
        _this.isTargetCus = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.maxCustomers = 6;
        _this.idSound = null;
        _this.isStep = 0;
        //item: 0:buger, 1: kem 2:donut 3:khoaitay 4:pho 5: pudding 6: tra  7:banhmi 8:coconut
        _this.rayY = [120, 0, -120]; // vị trí Y của 3 ray
        _this.spawnX = 700; // vị trí spawn bên phải
        _this.arrItem = [[], []];
        _this.arrKhay = [];
        _this.arrTargetMission = [];
        _this.arrCus = [];
        _this.sellTargetCus = null;
        _this.sellTraySlot = -1;
        _this.cusCounterPos = null;
        _this.cusSlotGap = 500;
        _this.cusEnterOffset = cc.v3(350, 0, 0);
        _this.cusWalkSpeed = 437.5;
        _this.counterCusCount = 0;
        _this.isStartgame = false;
        _this.isFirstClick = false;
        _this.isHand = null;
        _this.isMoving = false;
        _this.isFist = false;
        _this.isFistClickChicken = false;
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
        _this.isEndGame = false;
        // btn_choose(event, value) {
        _this.isDoc = false;
        _this.arrPosMenuNgang = [cc.v3(-391, -102), cc.v3(375, -112), cc.v3(114, -120), cc.v3(-409, -284), cc.v3(-158, -296), cc.v3(118, -280), cc.v3(390, -296), cc.v3(-137, -116)];
        _this.arrPosDoc = [cc.v3(26, -337), cc.v3(336, -112), cc.v3(15.5, -121), cc.v3(-170, -525.7), cc.v3(-300, -352), cc.v3(186.96, -512), cc.v3(355, -335), cc.v3(-292, -116)];
        return _this;
    }
    //0:banh thuong 1:chocolate 2: strawberry 
    NewClass.prototype.onLoad = function () {
        var _this = this;
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        for (var i = 0; i < this.listCus.childrenCount; i++) {
            this.arrCus.push(this.listCus.children[i]);
        }
        this.updateResponsive();
        cc.view.setResizeCallback(function () {
            _this.updateResponsive();
        });
        this.scheduleOnce(function () {
            cc.tween(_this.notiMission).by(0.4, { opacity: -255, position: cc.v3(0, 200) }).call(function () {
                _this.notiMission.active = false;
                _this.startGame();
            }).start();
        }, 1.5);
        this.mcComp = this.mc.getComponent("mc");
    };
    NewClass.prototype.initCusQueue = function () {
        if (!this.cusCounterPos && this.arrCus.length > 0) {
            this.cusCounterPos = this.arrCus[0].position.clone().sub(this.cusEnterOffset);
        }
    };
    NewClass.prototype.getCusCounterPos = function (slot, total) {
        this.initCusQueue();
        if (total <= 1)
            return this.cusCounterPos.clone();
        var offsetX = (slot - (total - 1) / 2) * this.cusSlotGap;
        return this.cusCounterPos.clone().add(cc.v3(offsetX, 0, 0));
    };
    NewClass.prototype.showCounterMissions = function (count) {
        for (var i = 0; i < count && i < this.arrCus.length; i++) {
            this.arrCus[i].getComponent("cusMission").showMission();
        }
    };
    NewClass.prototype.enterCustomers = function (count) {
        var _this = this;
        this.counterCusCount = count;
        var arrPos = [cc.v3(0, 0, 0)];
        if (count == 2) {
            arrPos = [cc.v3(-285, 0, 0), cc.v3(88, 0, 0)];
        }
        else if (count == 3) {
            arrPos = [cc.v3(-443, 0, 0), cc.v3(-73, 0, 0), cc.v3(273, 0, 0)];
        }
        var maxDuration = 0;
        for (var i = 0; i < count && i < this.arrCus.length; i++) {
            var cus = this.arrCus[i];
            // let targetPos = this.getCusCounterPos(i, count)
            var targetPos = arrPos[i];
            var spawnPos = targetPos.clone().add(this.cusEnterOffset);
            var distance = spawnPos.sub(targetPos).mag();
            var duration = distance / this.cusWalkSpeed;
            maxDuration = Math.max(maxDuration, duration);
            cc.Tween.stopAllByTarget(cus);
            cus.position = spawnPos;
            cus.active = true;
            cus.getComponent("cusMission").move();
            cc.tween(cus)
                .to(duration, { position: targetPos })
                .start();
        }
        this.scheduleOnce(function () {
            _this.showCounterMissions(count);
            if (count === 1 && _this.arrCus.length > 0) {
                _this.isTargetCus = _this.arrCus[0];
            }
        }, maxDuration);
    };
    NewClass.prototype.getEnterCountForWave = function () {
        if (this.countCus === 1)
            return 2;
        if (this.countCus === 3)
            return 3;
        return 1;
    };
    NewClass.prototype.onHind = function () {
        this.hind1.active = true;
    };
    NewClass.prototype.startGame = function () {
        var _this = this;
        this.initCusQueue();
        for (var i = 1; i < this.arrCus.length; i++) {
            this.arrCus[i].active = false;
        }
        this.enterCustomers(1);
        this.scheduleOnce(function () {
            if (!_this.isFirstClick) {
                _this.isFirstClick = true;
                _this.btnChicken.getChildByName("hind").active = true;
            }
        }, 3);
    };
    NewClass.prototype.btn_chicken = function () {
        var _this = this;
        if (this.isMoving)
            return;
        if (!this.isFistClickChicken) {
            this.barMission.getComponent("barTime").countDown();
            this.isFistClickChicken = true;
            this.scheduleOnce(function () {
                _this.btnMachine.getChildByName("hind").active = true;
            }, 2);
        }
        this.mcComp.discardTrayIfDifferentType("chicken");
        if (!this.mcComp.canPickMoreChicken())
            return;
        this.isMoving = true;
        this.btnChicken.getChildByName("hind").opacity = 0;
        this.mcComp.moveToChicken();
    };
    NewClass.prototype.btn_mayChien = function () {
        if (this.isMoving)
            return;
        this.mcComp.discardTrayIfDifferentType("chicken");
        var machineComp = this.btnMachine.getComponent("machine");
        var canFry = this.mcComp.getRawTraySlot() >= 0 && machineComp.chicken == null;
        var canPickup = (this.mcComp.localId == 2 || this.mcComp.localId == 3 || this.mcComp.localId == 4) && machineComp.chicken != null && this.mcComp.isTrayEmpty();
        if (!canFry && !canPickup)
            return;
        this.isMoving = true;
        this.btnMachine.getChildByName("hind").active = false;
        this.btnMachine.getChildByName("hind").opacity = 0;
        this.mcComp.moveToMachine();
    };
    NewClass.prototype.btn_cola = function () {
        if (this.isMoving)
            return;
        this.isMoving = true;
        this.mcComp.moveToCoca();
    };
    NewClass.prototype.btn_sauce = function () {
        if (this.isMoving)
            return;
        if (!this.mcComp.hasAnyItem() || this.mcComp.findCookedTraySlot() < 0)
            return;
        this.isMoving = true;
        this.mcComp.moveToSauce();
    };
    NewClass.prototype.btn_cake = function () {
        console.log(this.isMoving);
        if (this.isMoving)
            return;
        this.isMoving = true;
        this.mcComp.moveToCake();
    };
    NewClass.prototype.btn_tomato = function () {
        if (this.isMoving)
            return;
        this.isMoving = true;
        this.mcComp.moveToTomato();
    };
    NewClass.prototype.getCusTrayIndex = function (cusNode) {
        return this.arrCus.indexOf(cusNode);
    };
    NewClass.prototype.checkSell = function (targetCus) {
        console.log("check sell Main");
        var cus = targetCus || this.sellTargetCus || this.arrCus[0];
        if (this.isMoving || !cus)
            return false;
        var cusComp = cus.getComponent("cusMission");
        var trayIdx = this.mcComp.findTrayForCustomer(cusComp);
        if (!this.mcComp.hasAnyItem() || trayIdx < 0)
            return false;
        this.sellTargetCus = cus;
        this.sellTraySlot = trayIdx;
        this.isTargetCus = cus;
        this.isMoving = true;
        this.mcComp.moveToBuy();
        return true;
    };
    NewClass.prototype.validateSellAtCounter = function () {
        var cus = this.sellTargetCus || this.isTargetCus || this.arrCus[0];
        if (!cus) {
            this.isMoving = false;
            return;
        }
        var cusComp = cus.getComponent("cusMission");
        if (!cusComp) {
            this.isMoving = false;
            return;
        }
        cusComp.validateSell();
    };
    NewClass.prototype.nextCus = function (value, departedCus) {
        var _this = this;
        if (departedCus) {
            var idx = this.arrCus.indexOf(departedCus);
            if (idx >= 0)
                this.arrCus.splice(idx, 1);
        }
        else if (this.arrCus.length > 0) {
            this.arrCus.splice(0, 1);
        }
        this.countCus++;
        if (this.countCus == 1) {
            this.btnCake.getComponent(cc.Button).enabled = true;
            this.btnPotato.getComponent(cc.Button).enabled = true;
        }
        else if (this.countCus == 3) {
            this.barMission2.active = true;
            this.scheduleOnce(function () {
                cc.tween(_this.barMission2).by(0.4, { opacity: -255, position: cc.v3(0, 200) }).call(function () {
                    _this.barMission2.active = false;
                }).start();
            }, 1);
        }
        this.isMoving = false;
        this.sellTargetCus = null;
        this.sellTraySlot = -1;
        if (this.countCus >= this.maxCustomers || this.arrCus.length === 0) {
            this.isTargetCus = null;
            this.onEndGame(true);
            return;
        }
        var wasGroupAtCounter = this.counterCusCount > 1;
        if (wasGroupAtCounter) {
            this.counterCusCount--;
            this.mcComp.afterCustomerLeft();
            return;
        }
        this.isTargetCus = null;
        this.mcComp.resetToStart();
        var enterCount = this.getEnterCountForWave();
        this.enterCustomers(enterCount);
    };
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
    NewClass.prototype.start = function () {
        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.5);
    };
    NewClass.prototype.setGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.offGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.onEndGame = function (value) {
        var _this = this;
        if (this.isEndGame)
            return;
        this.isEndGame = true;
        this.warning.active = false;
        this.scheduleOnce(function () {
            _this.updateResponsive();
        }, 0.5);
        if (value == true) {
            this.barTime.getComponent("barTime").endGame();
            this.amazing.active = true;
            // this.scheduleOnce(() => {
            //     if (this.endCardWin) this.endCardWin.active = true
            // }, 0.5)
        }
        else {
            this.barTime.getComponent("barTime").endGame();
            for (var _i = 0, _a = this.arrCus; _i < _a.length; _i++) {
                var child = _a[_i];
                child.children[0].getComponent(sp.Skeleton).setAnimation(0, "6.angry", true);
            }
            cc.audioEngine.stop(this.idSound);
            this.timeup.active = true;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundThinking, false, 1);
                cc.audioEngine.play(_this.soundLose, false, 1);
                // this.endCard.active = true;
            }, 0.5);
        }
        this.linkToStore.active = true;
    };
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
    NewClass.prototype.updateResponsive = function () {
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 0.85;
        this.endCard.scale = (logic) ? 1.2 : 0.7;
        this.endCardWin.scale = (logic) ? 1.2 : 0.7;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.barCoin.scale = (logic) ? 2.5 : 1.4;
        this.barCoin.getComponent(cc.Widget).top = (logic) ? 210 : 100;
        this.phaoHoa.scale = (logic) ? 9 : 5;
        this.guild.scale = (logic) ? 2 : 1.2;
        this.guild.position = (logic) ? cc.v3(0, -900) : cc.v3(0, -360);
        this.listCus.scale = (logic) ? 1 : 1;
        this.listKhay.scale = (logic) ? 1.1 : 1;
        this.timeup.scale = (logic) ? 1 : 1.4;
        this.amazing.scale = (logic) ? 1 : 1.4;
        this.endCardDoc.scale = 1.5;
        this.notiMission.scale = (logic) ? 2 : 1;
        // this.tutMision.scale = (logic) ? 2 : 1
        this.barMission.scale = (logic) ? 1.7 : 1;
        this.barMission.scale = (logic) ? 1.8 : 1;
        this.mainCamera.node.position = (logic) ? cc.v3(0, 0, 0) : cc.v3(0, 110, 0);
        if (this.isEndGame) {
            this.endCardDoc.active = (logic) ? true : false;
            this.endCardWin.active = (logic) ? false : true;
        }
        if (logic == true) {
            this.isDoc = true;
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 1.7;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                this.barCoin.getComponent(cc.Widget).top = 200;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.5;
                this.endCardDoc.scale = 1.2;
            }
            else {
            }
        }
        else {
            this.isDoc = false;
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.85;
            }
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundShowPop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClosePop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundLose", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundOk", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundTrans", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEnd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSellDone", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThinking", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCream", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCherry", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCreamMini", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThinkWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBanh", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCardWin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCus", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "uiCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCheckItem", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaoHoa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "warning", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property([cc.Prefab])
    ], NewClass.prototype, "listItem", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listRay", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKhay", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preKhay", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listRayNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "timeup", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "amazing", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "notiCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "notiMission", void 0);
    __decorate([
        property([cc.Prefab])
    ], NewClass.prototype, "listPreCus", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listMenu", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handtut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handtut2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handtut3", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCardDoc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBep", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listDia", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBanh", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barMission", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barMission2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnChicken", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnMachine", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnCoca", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnCake", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnPotato", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hind1", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();