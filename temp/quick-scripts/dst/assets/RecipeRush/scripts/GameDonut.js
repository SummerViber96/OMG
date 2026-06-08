
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/GameDonut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        //btn
        _this.btnChicken = null;
        _this.btnMachine = null;
        _this.btnCoca = null;
        _this.btnCake = null;
        _this.btnPotato = null;
        _this.mc = null;
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
            _this.barMission.getComponent("barTime").countDown();
        }, maxDuration);
    };
    NewClass.prototype.getEnterCountForWave = function () {
        if (this.countCus === 1)
            return 2;
        if (this.countCus === 3)
            return 3;
        return 1;
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
        this.mcComp.discardTrayIfDifferentType("chicken");
        if (!this.mcComp.canPickMoreChicken())
            return;
        this.isMoving = true;
        this.btnChicken.getChildByName("hind").opacity = 0;
        this.mcComp.moveToChicken();
        this.scheduleOnce(function () {
            _this.btnMachine.getChildByName("hind").active = true;
        }, 2);
    };
    NewClass.prototype.btn_mayChien = function () {
        if (this.isMoving)
            return;
        this.mcComp.discardTrayIfDifferentType("chicken");
        var machineComp = this.btnMachine.getComponent("machine");
        var canFry = this.mcComp.getRawTraySlot() >= 0 && machineComp.chicken == null;
        var canPickup = (this.mcComp.localId == 2 || this.mcComp.localId == 3) && machineComp.chicken != null && this.mcComp.isTrayEmpty();
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
        if (departedCus) {
            var idx = this.arrCus.indexOf(departedCus);
            if (idx >= 0)
                this.arrCus.splice(idx, 1);
        }
        else if (this.arrCus.length > 0) {
            this.arrCus.splice(0, 1);
        }
        this.countCus++;
        if (this.countCus == 2) {
            this.btnCake.getComponent(cc.Button).enabled = true;
            this.btnPotato.getComponent(cc.Button).enabled = true;
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
            this.scheduleOnce(function () {
                if (_this.endCardWin)
                    _this.endCardWin.active = true;
            }, 0.5);
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
        this.camera.zoomRatio = 1;
        this.endCard.scale = (logic) ? 1.2 : 0.7;
        this.endCardWin.scale = (logic) ? 1.2 : 0.7;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.barCoin.scale = (logic) ? 2.5 : 1.4;
        this.barCoin.getComponent(cc.Widget).top = (logic) ? 210 : 80;
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
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcR2FtZURvbnV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0FBRXZCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd2xDQztRQXRsQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElB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QUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2SyxlQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTs7SUFtRnhLLENBQUM7SUF2NkJHLDBDQUEwQztJQUMxQyx5QkFBTSxHQUFOO1FBQUEsaUJBa0JDO1FBakJHLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxXQUFXLEVBQUU7WUFDOUIsTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDMUM7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENB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Q0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDckMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUN6QyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENB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QyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBSTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNDO0lBdElGLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3bEM1QjtJQUFELGVBQUM7Q0F4bENELEFBd2xDQyxDQXhsQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBd2xDakQ7a0JBeGxDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5nbG9iYWxUaGlzLmNvaW4gPSAwXHJcbmdsb2JhbFRoaXMuR2FtZSA9IGZhbHNlXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbG9zZVBvcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRPazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUcmFuczogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENyZWFtOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDaGVycnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdyb25nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbU1pbmk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCYW5oOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmRXaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJUaW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyQ29pbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGVja0l0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb0hvYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0SXRlbTogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UmF5OiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtoYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUtoYXk6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UmF5Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGltZXVwOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhbWF6aW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIG5vdGlDb2luOiBjYy5BbmltYXRpb24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vdGlNaXNzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdFByZUN1czogY2MuUHJlZmFiW10gPSBbXVxyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RNZW51OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZHR1dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmR0dXQyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZHR1dDM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDb2luOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmREb2M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy9uZXdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEJlcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3REaWE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVCYW5oOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJNaXNzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIC8vYnRuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNoaWNrZW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5NYWNoaW5lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQ29jYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNha2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Qb3RhdG86IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBtY0NvbXAgPSBudWxsXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyB0dXRNaXNpb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBhcnJCZXAgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICBhcnJEaWEgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcblxyXG5cclxuICAgIG1heEtoYXkgPSA3XHJcblxyXG4gICAgYXJyRG9udXRwb3MgPSBbXVxyXG5cclxuICAgIGlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgaXNUdXRNZWF0ID0gZmFsc2VcclxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXHJcbiAgICBpc1R1dENsaWNrTWVhdCA9IGZhbHNlXHJcblxyXG5cclxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcclxuICAgIC8vIGlzU3RlcCA9IDBcclxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIG1heEN1c3RvbWVycyA9IDZcclxuICAgIGlkU291bmQgPSBudWxsXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICAvL2l0ZW06IDA6YnVnZXIsIDE6IGtlbSAyOmRvbnV0IDM6a2hvYWl0YXkgNDpwaG8gNTogcHVkZGluZyA2OiB0cmEgIDc6YmFuaG1pIDg6Y29jb251dFxyXG4gICAgcmF5WTogbnVtYmVyW10gPSBbMTIwLCAwLCAtMTIwXTsgICAvLyB24buLIHRyw60gWSBj4bunYSAzIHJheVxyXG4gICAgc3Bhd25YOiBudW1iZXIgPSA3MDA7ICAgICAgICAgICAgICAvLyB24buLIHRyw60gc3Bhd24gYsOqbiBwaOG6o2lcclxuICAgIGFyckl0ZW0gPSBbW10sIFtdXVxyXG4gICAgYXJyS2hheSA9IFtdXHJcbiAgICBhcnJUYXJnZXRNaXNzaW9uID0gW11cclxuICAgIGFyckN1cyA9IFtdXHJcbiAgICBzZWxsVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgc2VsbFRyYXlTbG90ID0gLTFcclxuICAgIGN1c0NvdW50ZXJQb3MgPSBudWxsXHJcbiAgICBjdXNTbG90R2FwID0gNTAwXHJcbiAgICBjdXNFbnRlck9mZnNldCA9IGNjLnYzKDM1MCwgMCwgMClcclxuICAgIGN1c1dhbGtTcGVlZCA9IDQzNy41XHJcbiAgICBjb3VudGVyQ3VzQ291bnQgPSAwXHJcbiAgICBpc1N0YXJ0Z2FtZSA9IGZhbHNlXHJcbiAgICBpc0ZpcnN0Q2xpY2sgPSBmYWxzZVxyXG4gICAgLy8wOmJhbmggdGh1b25nIDE6Y2hvY29sYXRlIDI6IHN0cmF3YmVycnkgXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub3RpTWlzc2lvbikuYnkoMC40LCB7IG9wYWNpdHk6IC0yNTUsIHBvc2l0aW9uOiBjYy52MygwLCAyMDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpTWlzc2lvbi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIHRoaXMubWNDb21wID0gdGhpcy5tYy5nZXRDb21wb25lbnQoXCJtY1wiKVxyXG4gICAgfVxyXG4gICAgaXNIYW5kID0gbnVsbFxyXG5cclxuICAgIGluaXRDdXNRdWV1ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY3VzQ291bnRlclBvcyAmJiB0aGlzLmFyckN1cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzQ291bnRlclBvcyA9IHRoaXMuYXJyQ3VzWzBdLnBvc2l0aW9uLmNsb25lKCkuc3ViKHRoaXMuY3VzRW50ZXJPZmZzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1c0NvdW50ZXJQb3Moc2xvdDogbnVtYmVyLCB0b3RhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Q3VzUXVldWUoKVxyXG4gICAgICAgIGlmICh0b3RhbCA8PSAxKSByZXR1cm4gdGhpcy5jdXNDb3VudGVyUG9zLmNsb25lKClcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IChzbG90IC0gKHRvdGFsIC0gMSkgLyAyKSAqIHRoaXMuY3VzU2xvdEdhcFxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1c0NvdW50ZXJQb3MuY2xvbmUoKS5hZGQoY2MudjMob2Zmc2V0WCwgMCwgMCkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvdW50ZXJNaXNzaW9ucyhjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudCAmJiBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbaV0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5zaG93TWlzc2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVudGVyQ3VzdG9tZXJzKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJDdXNDb3VudCA9IGNvdW50XHJcbiAgICAgICAgbGV0IGFyclBvcyA9IFtjYy52MygwLCAwLCAwKV1cclxuICAgICAgICBpZihjb3VudD09Mil7XHJcbiAgICAgICAgICAgIGFyclBvcyA9IFtjYy52MygtMjg1LCAwLCAwKSwgY2MudjMoODgsIDAsIDApXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGNvdW50PT0zKXtcclxuICAgICAgICAgICAgYXJyUG9zID0gW2NjLnYzKC00NDMsIDAsIDApLCBjYy52MygtNzMsIDAsIDApLCBjYy52MygyNzMsIDAsIDApXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWF4RHVyYXRpb24gPSAwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudCAmJiBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIC8vIGxldCB0YXJnZXRQb3MgPSB0aGlzLmdldEN1c0NvdW50ZXJQb3MoaSwgY291bnQpXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSBhcnJQb3NbaV1cclxuXHJcbiAgICAgICAgICAgIGxldCBzcGF3blBvcyA9IHRhcmdldFBvcy5jbG9uZSgpLmFkZCh0aGlzLmN1c0VudGVyT2Zmc2V0KVxyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBzcGF3blBvcy5zdWIodGFyZ2V0UG9zKS5tYWcoKVxyXG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHRoaXMuY3VzV2Fsa1NwZWVkXHJcbiAgICAgICAgICAgIG1heER1cmF0aW9uID0gTWF0aC5tYXgobWF4RHVyYXRpb24sIGR1cmF0aW9uKVxyXG5cclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGN1cylcclxuICAgICAgICAgICAgY3VzLnBvc2l0aW9uID0gc3Bhd25Qb3NcclxuICAgICAgICAgICAgY3VzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubW92ZSgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGN1cylcclxuICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb3VudGVyTWlzc2lvbnMoY291bnQpXHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMSAmJiB0aGlzLmFyckN1cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5jb3VudERvd24oKVxyXG4gICAgICAgIH0sIG1heER1cmF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVudGVyQ291bnRGb3JXYXZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09PSAxKSByZXR1cm4gMlxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09PSAzKSByZXR1cm4gM1xyXG4gICAgICAgIHJldHVybiAxXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEN1c1F1ZXVlKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW50ZXJDdXN0b21lcnMoMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5DaGlja2VuLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzKVxyXG4gICAgfVxyXG4gICAgaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgaXNGaXN0ID0gZmFsc2VcclxuICAgIGJ0bl9jaGlja2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5tY0NvbXAuZGlzY2FyZFRyYXlJZkRpZmZlcmVudFR5cGUoXCJjaGlja2VuXCIpXHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5jYW5QaWNrTW9yZUNoaWNrZW4oKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5DaGlja2VuLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9DaGlja2VuKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcblxyXG4gICAgYnRuX21heUNoaWVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5tY0NvbXAuZGlzY2FyZFRyYXlJZkRpZmZlcmVudFR5cGUoXCJjaGlja2VuXCIpXHJcbiAgICAgICAgbGV0IG1hY2hpbmVDb21wID0gdGhpcy5idG5NYWNoaW5lLmdldENvbXBvbmVudChcIm1hY2hpbmVcIilcclxuICAgICAgICBsZXQgY2FuRnJ5ID0gdGhpcy5tY0NvbXAuZ2V0UmF3VHJheVNsb3QoKSA+PSAwICYmIG1hY2hpbmVDb21wLmNoaWNrZW4gPT0gbnVsbFxyXG4gICAgICAgIGxldCBjYW5QaWNrdXAgPSAodGhpcy5tY0NvbXAubG9jYWxJZCA9PSAyIHx8IHRoaXMubWNDb21wLmxvY2FsSWQgPT0gMykgJiYgbWFjaGluZUNvbXAuY2hpY2tlbiAhPSBudWxsICYmIHRoaXMubWNDb21wLmlzVHJheUVtcHR5KClcclxuICAgICAgICBpZiAoIWNhbkZyeSAmJiAhY2FuUGlja3VwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9NYWNoaW5lKClcclxuICAgIH1cclxuICAgIGJ0bl9jb2xhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9Db2NhKClcclxuICAgIH1cclxuICAgIGJ0bl9zYXVjZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01vdmluZykgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuaGFzQW55SXRlbSgpIHx8IHRoaXMubWNDb21wLmZpbmRDb29rZWRUcmF5U2xvdCgpIDwgMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvU2F1Y2UoKVxyXG4gICAgfVxyXG4gICAgYnRuX2Nha2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmcpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0Nha2UoKVxyXG4gICAgfVxyXG4gICAgYnRuX3RvbWF0bygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01vdmluZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvVG9tYXRvKClcclxuICAgIH1cclxuICAgIGdldEN1c1RyYXlJbmRleChjdXNOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzTm9kZSlcclxuICAgIH1cclxuICAgIGNoZWNrU2VsbCh0YXJnZXRDdXM/OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGN1cyA9IHRhcmdldEN1cyB8fCB0aGlzLnNlbGxUYXJnZXRDdXMgfHwgdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICBpZiAodGhpcy5pc01vdmluZyB8fCAhY3VzKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAgICAgbGV0IHRyYXlJZHggPSB0aGlzLm1jQ29tcC5maW5kVHJheUZvckN1c3RvbWVyKGN1c0NvbXApXHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5oYXNBbnlJdGVtKCkgfHwgdHJheUlkeCA8IDApIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2VsbFRhcmdldEN1cyA9IGN1c1xyXG4gICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gdHJheUlkeFxyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBjdXNcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0J1eSgpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHZhbGlkYXRlU2VsbEF0Q291bnRlcigpIHtcclxuICAgICAgICBsZXQgY3VzID0gdGhpcy5zZWxsVGFyZ2V0Q3VzIHx8IHRoaXMuaXNUYXJnZXRDdXMgfHwgdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICBpZiAoIWN1cykge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXApIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXNDb21wLnZhbGlkYXRlU2VsbCgpXHJcbiAgICB9XHJcbiAgICBuZXh0Q3VzKHZhbHVlOiBib29sZWFuLCBkZXBhcnRlZEN1cz86IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoZGVwYXJ0ZWRDdXMpIHtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoZGVwYXJ0ZWRDdXMpXHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkgdGhpcy5hcnJDdXMuc3BsaWNlKGlkeCwgMSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXJyQ3VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMuc3BsaWNlKDAsIDEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICBpZih0aGlzLmNvdW50Q3VzPT0yKXtcclxuICAgICAgICAgICAgdGhpcy5idG5DYWtlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blBvdGF0by5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZWxsVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gLTFcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPj0gdGhpcy5tYXhDdXN0b21lcnMgfHwgdGhpcy5hcnJDdXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdhc0dyb3VwQXRDb3VudGVyID0gdGhpcy5jb3VudGVyQ3VzQ291bnQgPiAxXHJcbiAgICAgICAgaWYgKHdhc0dyb3VwQXRDb3VudGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlckN1c0NvdW50LS1cclxuICAgICAgICAgICAgdGhpcy5tY0NvbXAuYWZ0ZXJDdXN0b21lckxlZnQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgdGhpcy5tY0NvbXAucmVzZXRUb1N0YXJ0KClcclxuXHJcbiAgICAgICAgbGV0IGVudGVyQ291bnQgPSB0aGlzLmdldEVudGVyQ291bnRGb3JXYXZlKClcclxuICAgICAgICB0aGlzLmVudGVyQ3VzdG9tZXJzKGVudGVyQ291bnQpXHJcbiAgICB9XHJcbiAgICAvLyBpc0ZpcnN0Q2xpY2tiYW5oID0gZmFsc2VcclxuICAgIC8vIGlzRnJpc3QgPSBmYWxzZVxyXG5cclxuXHJcbiAgICAvLyBidG5fYmFuaCgpIHtcclxuICAgIC8vICAgICBpZiAoIXRoaXMuaXNGcmlzdCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzRnJpc3QgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKVxyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZVxyXG4gICAgLy8gICAgIHRoaXMuaGFuZHR1dC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RDbGlja2JhbmgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrYmFuaCA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaGFuZHR1dDIuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICB9LCAyKVxyXG4gICAgLy8gICAgIGxldCBjaGVjayA9IHRoaXMuZ2V0U2xvdEJlcCgpO1xyXG4gICAgLy8gICAgIGlmIChjaGVjayAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyQmVwW2NoZWNrXSA9IHRydWU7O1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxpc3RCZXAuY2hpbGRyZW5bY2hlY2tdLmdldENvbXBvbmVudChcIkJhbmhcIikuc2V0T24oKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGlzRmlyc3RTdGVwID0gZmFsc2VcclxuICAgIC8vIGJ0bl9iZXAodGFnKSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIHRoaXMuaGFuZHR1dDIuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICBpZiAoIXRoaXMuaXNGaXJzdFN0ZXApIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5oYW5kdHV0My5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNGaXJzdFN0ZXAgPSB0cnVlXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGxldCBjaGVjayA9IHRoaXMuZ2V0U2xvdERpYSgpO1xyXG4gICAgLy8gICAgIGlmIChjaGVjayAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyRGlhW2NoZWNrXSA9IHRydWVcclxuICAgIC8vICAgICAgICAgdGhpcy5saXN0RGlhLmNoaWxkcmVuW2NoZWNrXS5nZXRDb21wb25lbnQoXCJEaWFcIikuZ2V0QmFuaCgpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldFNsb3RCZXAoKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckJlcC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckJlcFtpXVxyXG4gICAgLy8gICAgICAgICBpZiAoY2hpbGQgPT0gZmFsc2UpIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGxcclxuICAgIC8vIH1cclxuICAgIC8vIGdldFNsb3REaWEoKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckRpYS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3REaWEuY2hpbGRyZW5baV1cclxuICAgIC8vICAgICAgICAgaWYgKGNoaWxkLmdldENvbXBvbmVudChcIkRpYVwiKS5pc0JhbmggPT0gZmFsc2UpIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGxcclxuICAgIC8vIH1cclxuICAgIC8vIGJ0bl9zdHJhd0JlcnJ5KCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckRpYS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgY2hlY2sgPSB0aGlzLmFyckRpYVtpXTtcclxuICAgIC8vICAgICAgICAgbGV0IGJhbmggPSB0aGlzLmxpc3REaWEuY2hpbGRyZW5baV07XHJcbiAgICAvLyAgICAgICAgIGlmIChiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zdGF0dXMgPT0gMCAmJiBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5pc0JhbmggPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5oYW5kdHV0My5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLnNldFN0YXR1cygyKVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBidG5fY2hvY29sYXRlKCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckRpYS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgY2hlY2sgPSB0aGlzLmFyckRpYVtpXTtcclxuICAgIC8vICAgICAgICAgbGV0IGJhbmggPSB0aGlzLmxpc3REaWEuY2hpbGRyZW5baV07XHJcbiAgICAvLyAgICAgICAgIGlmIChiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zdGF0dXMgPT0gMCAmJiBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5pc0JhbmggPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5oYW5kdHV0My5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLnNldFN0YXR1cygxKVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBidG5fY3JlYW0oKSB7XHJcblxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIGlzRmx5aW5nID0gZmFsc2VcclxuICAgIC8vIGJ0bl9zZWxsKGl0ZW0sIHRhZykge1xyXG4gICAgLy8gICAgIC8vIGlmKHRoaXMuaXNNb3ZpbmcpcmV0dXJuO1xyXG4gICAgLy8gICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tNaXNzaW9uKHRhZywgaXRlbSk7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIGxldCBtYWcgPSA1MFxyXG4gICAgLy8gICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKGl0ZW0ueCwgaXRlbS55KTtcclxuICAgIC8vICAgICBsZXQgZW5kUG9zID0gdGhpcy5hcnJDdXNbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJidWJibGVzXCIpLnBvc2l0aW9uLmFkZChjYy52MygtMzAsIDEyMCkpXHJcbiAgICAvLyAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKGVuZFBvcy54ICsgbWFnLCBlbmRQb3MueSArIDIwMCk7XHJcblxyXG4gICAgLy8gICAgIGxldCBiYW5oID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVCYW5oKTtcclxuICAgIC8vICAgICBiYW5oLnBhcmVudCA9IGl0ZW0ucGFyZW50O1xyXG4gICAgLy8gICAgIGJhbmgucG9zaXRpb24gPSBjYy52MyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuICAgIC8vICAgICBiYW5oLmdldENvbXBvbmVudChcIkl0ZW1cIikubG9hZEl0ZW0odGFnKVxyXG5cclxuICAgIC8vICAgICBjYy50d2VlbihiYW5oKS50bygwLjIsIHsgc2NhbGU6IDEuMiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKGJhbmgpLmJlemllclRvKDAuNCwgc3RhcnRQb3MsIG1pZFBvcywgZW5kUG9zKS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRPaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFyckN1c1t0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlWzBdXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmRvbmVOb2RlLmNoaWxkcmVuW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMV1dLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuYW5ncnkoKVxyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBiYW5oLmRlc3Ryb3koKVxyXG4gICAgLy8gICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAvLyB9XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHNwYXdLaGF5KG1pc3Npb24pIHtcclxuICAgIC8vICAgICBsZXQgYXJyID0gW2NjLnYzKC02MCwgLTEwKSwgY2MudjMoODAsIC0xMCldXHJcbiAgICAvLyAgICAgaWYgKG1pc3Npb24ubGVuZ3RoID09IDMpIHtcclxuICAgIC8vICAgICAgICAgYXJyID0gW2NjLnYzKC03NSwgLTEwKSwgY2MudjMoMzAsIC0xMCksIGNjLnYzKDEyMCwgLTEwKV1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IGtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpO1xyXG4gICAgLy8gICAgIGtoYXkucGFyZW50ID0gdGhpcy5saXN0S2hheTtcclxuICAgIC8vICAgICBraGF5LnBvc2l0aW9uID0gY2MudjMoLTEwMCwgNTApXHJcbiAgICAvLyAgICAgdGhpcy5hcnJLaGF5LnB1c2goa2hheSlcclxuICAgIC8vICAgICB0aGlzLmxvYWREYXRhS2hheShtaXNzaW9uLCBraGF5KVxyXG4gICAgLy8gICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5wdXNoKG1pc3Npb24pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaXNUYXJnZXRJdGVtUGxhY2UgPSBbXVxyXG4gICAgLy8gLy8gY291bnRNaXNzID0gM1xyXG4gICAgLy8gc3Bhd05leHRLaGF5KHBsYWNlKSB7XHJcbiAgICAvLyAgICAgbGV0IGZpcnN0Q3VzID0gdGhpcy5hcnJDdXNbMV07XHJcbiAgICAvLyAgICAgZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5zaG93TWlzc2lvbigpO1xyXG4gICAgLy8gICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKTtcclxuXHJcbiAgICAvLyAgICAgbGV0IG1pc3Npb24gPSBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLm9yZGVyO1xyXG4gICAgLy8gICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5zcGxpY2UocGxhY2UsIDEpXHJcbiAgICAvLyAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnB1c2gobWlzc2lvbilcclxuICAgIC8vICAgICBsZXQgcG9zID0gY2MudjMoMTIwMCwgMCk7XHJcbiAgICAvLyAgICAgbGV0IHByZUtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpXHJcbiAgICAvLyAgICAgcHJlS2hheS5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5O1xyXG4gICAgLy8gICAgIHByZUtoYXkucG9zaXRpb24gPSBwb3NcclxuICAgIC8vICAgICB0aGlzLmFycktoYXkucHVzaChwcmVLaGF5KVxyXG4gICAgLy8gICAgIHRoaXMubG9hZERhdGFLaGF5KG1pc3Npb24sIHByZUtoYXkpXHJcbiAgICAvLyAgICAgcHJlS2hheS5wb3NpdGlvbiA9IGNjLnYzKC0xMDAgKyA0MDAsIDUwKVxyXG4gICAgLy8gICAgIGxldCB0YXJnZXRLaGF5ID0gdGhpcy5hcnJLaGF5W3BsYWNlXVxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcblxyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gcGxhY2UgKyAxOyBpIDwgdGhpcy5hcnJLaGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBraGF5ID0gdGhpcy5hcnJLaGF5W2ldXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGtoYXkpLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFycktoYXlbaSAtIDFdID0ga2hheVxyXG5cclxuICAgIC8vICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmxpc3RSYXlbMF0pLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJLaGF5LnNwbGljZShwbGFjZSwgMSk7XHJcblxyXG4gICAgLy8gICAgIH0sIDAuMilcclxuICAgIC8vIH1cclxuICAgIC8vIGxvYWREYXRhS2hheShkYXRhLCBraGF5KSB7XHJcbiAgICAvLyAgICAgaWYgKGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgbGV0IGFyciA9IFtjYy52MygtNjAsIC0zMCksIGNjLnYzKDgwLCAtMzApXVxyXG5cclxuICAgIC8vICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09IDMpIHtcclxuICAgIC8vICAgICAgICAgICAgIGFyciA9IFtjYy52MygtNzUsIC0zMCksIGNjLnYzKDMwLCAtMzApLCBjYy52MygxMjAsIC0zMCldXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtkYXRhW2ldIC0gMV0pXHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IGtoYXlcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBhcnJbaV1cclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uc2NhbGUgPSAwLjY4XHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoXCJJdGVtXCIpLmxvYWRHcmF5KClcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGZpcnN0Q2xpY2sgPSBmYWxzZVxyXG4gICAgLy8gYnRuX2NsaWNrQnRuKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgLy8gICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKVxyXG5cclxuICAgIC8vICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5idG5QaXp6YS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICBpZiAoIXRoaXMuZmlyc3RDbGljaykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpcnN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBsZXQgaWQgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAvLyAgICAgbGV0IG5vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgLy8gICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tNaXNzaW9uKGlkLCBub2RlKTtcclxuICAgIC8vICAgICBpZiAoY2hlY2spIHtcclxuXHJcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgbGV0IHBvcyA9IGNoZWNrLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hlY2sucG9zaXRpb24pO1xyXG4gICAgLy8gICAgICAgICBwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG5cclxuICAgIC8vICAgICAgICAgbGV0IG1hZyA9IChwb3MueCA+IG5vZGUueCkgPyAtNTAgOiA1MDtcclxuICAgIC8vICAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2MudjIobm9kZS54LCBub2RlLnkpO1xyXG4gICAgLy8gICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIocG9zLngsIHBvcy55KTtcclxuICAgIC8vICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKGVuZFBvcy54ICsgbWFnLCBlbmRQb3MueSArIDIwMCk7XHJcblxyXG4gICAgLy8gICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1baWQgLSAxXSk7XHJcbiAgICAvLyAgICAgICAgIGl0ZW0ucGFyZW50ID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAvLyAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBjYy52MyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pLnRvKDAuMiwgeyBzY2FsZTogMS4yIH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pLmJlemllclRvKDAuNCwgc3RhcnRQb3MsIG1pZFBvcywgZW5kUG9zKS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZE9rLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXJyQ3VzW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMF1dLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuZG9uZU5vZGUuY2hpbGRyZW5bdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVsxXV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5kZXN0cm95KClcclxuICAgIC8vICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBjaGVja0l0ZW0oaWQpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobWlzc2lvbltpXSA9PSBpZCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBhcnJJdGVtID0gW2ksIGpdO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBhcnJJdGVtXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGxcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuICAgIC8vIGNoZWNrTWlzc2lvbihpZCwgbm9kZSkge1xyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoaWQgPT0gbWlzc2lvbltqXSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXVtqXSA9IDEwMDtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlID0gW2ksIGpdXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoaSwgailcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJLaGF5W2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaXNDb3VudEN1cyA9IDNcclxuICAgIC8vIGlzQ291bnREb25lID0gMFxyXG4gICAgLy8gaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgLy8gY29pbkFyciA9IFtdXHJcbiAgICAvLyBjaGVja1N1Y2Nlc3MoaSwgaikgey8vY2hlY2sgY3VzIGhvYW4gdGhhbmggZG9uIGhhbmcgY2h1YVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGogIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHRhcmdldEtoYXkgPSB0aGlzLmFycktoYXlbaV0uY2hpbGRyZW5bal07XHJcbiAgICAvLyAgICAgICAgICAgICB0YXJnZXRLaGF5LmdldENvbXBvbmVudChcIkl0ZW1cIikub2ZmR3JheSh0YXJnZXRLaGF5LmNoaWxkcmVuWzFdKVxyXG4gICAgLy8gICAgICAgICAgICAgLy8gY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4yLCB7IHNjYWxlOiAyLjUgfSkudG8oMC4xLCB7IHNjYWxlOiAyLjIgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICAgICAgY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4yLCB7IHNjYWxlOiAwLjkgfSkudG8oMC4xLCB7IHNjYWxlOiAwLjY1IH0pLnN0YXJ0KClcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgfSwgMC40KVxyXG4gICAgLy8gICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgLy8gICAgIGxldCBjaGVjayA9IHRydWVcclxuICAgIC8vICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgIC8vICAgICBmb3IgKGxldCBtID0gMDsgbSA8IG1pc3Npb24ubGVuZ3RoOyBtKyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKG1pc3Npb25bbV0gIT0gMTAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0NvdW50RG9uZSsrXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0Q3VzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjdXMucG9zaXRpb24pXHJcbiAgICAvLyAgICAgICAgICAgICBwb3MgPSB0aGlzLmNhbWVyYS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zKTtcclxuICAgIC8vICAgICAgICAgICAgIHBvcyA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvcyk7XHJcbiAgICAvLyAgICAgICAgICAgICBwb3MgPSB0aGlzLmJhckNvaW4uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKS5hZGQoY2MudjMoMCwgMCkpXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgLy8gcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3Bhd25Db2luc0Zyb21DdXN0b21lcihwb3MsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBzYXUga2hpIHThu49hIHJhIHhvbmcgdGjDrCBtb3ZlIHbhu4EgdGhhbmggZ29sZFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubW92ZUNvaW5zVG9Hb2xkQmFyKHRoaXMuY29pbkFyciwgdGhpcy5iYXJDb2luKTtcclxuICAgIC8vICAgICAgICAgICAgIH0pOyBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5oYXBweSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vdGlDb2luLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDUwXHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobWlzc2lvbi5sZW5ndGggPT0gMykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuY29pbiArPSAxMDBcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoZ2xvYmFsVGhpcy5jb2luID49IDEwMDApIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgICAgICB9LCAwLjYpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMubW92ZUN1c091dChpKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5lbnF1ZXVlTW92ZSh0aGlzLmFyckN1c1tpXSk7XHJcbiAgICAvLyAgICAgICAgIH0sIDAuOClcclxuXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzcGF3bkNvaW5zRnJvbUN1c3RvbWVyKHN0YXJ0UG9zOiBjYy5WZWMzLCBvbkZpbmlzaD86ICgpID0+IHZvaWQpIHtcclxuICAgIC8vICAgICB0aGlzLmNvaW5BcnIgPSBbXVxyXG4gICAgLy8gICAgIGNvbnN0IGNvaW5Db3VudCA9IDY7XHJcbiAgICAvLyAgICAgY29uc3QgcmFkaXVzID0gNzA7IC8vIMSR4buZIHThu49hIHJhXHJcblxyXG4gICAgLy8gICAgIGxldCBmaW5pc2hlZCA9IDA7XHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29pbkNvdW50OyBpKyspIHtcclxuICAgIC8vICAgICAgICAgY29uc3QgY29pbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XHJcbiAgICAvLyAgICAgICAgIGNvaW4ucGFyZW50ID0gdGhpcy5iYXJDb2luO1xyXG4gICAgLy8gICAgICAgICBjb2luLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcclxuICAgIC8vICAgICAgICAgY29pbi5zY2FsZSA9IDAuOFxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvaW5BcnIucHVzaChjb2luKVxyXG4gICAgLy8gICAgICAgICAvLyByYW5kb20gaMaw4bubbmcgdOG7j2FcclxuICAgIC8vICAgICAgICAgY29uc3QgYW5nbGUgPSAoTWF0aC5QSSAqIDIgLyBjb2luQ291bnQpICogaTtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmFuZG9tUmFkaXVzID0gcmFkaXVzICsgTWF0aC5yYW5kb20oKSAqIDQwO1xyXG5cclxuICAgIC8vICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gc3RhcnRQb3MuYWRkKGNjLnYzKFxyXG4gICAgLy8gICAgICAgICAgICAgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tUmFkaXVzLFxyXG4gICAgLy8gICAgICAgICAgICAgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tUmFkaXVzLFxyXG4gICAgLy8gICAgICAgICAgICAgMFxyXG4gICAgLy8gICAgICAgICApKTtcclxuXHJcbiAgICAvLyAgICAgICAgIC8vIHThu49hIHJhXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGNvaW4pXHJcbiAgICAvLyAgICAgICAgICAgICAudG8oMC4yNSwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLmRlbGF5KDAuMDUpXHJcbiAgICAvLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZmluaXNoZWQrKztcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoZmluaXNoZWQgPT09IGNvaW5Db3VudCAmJiBvbkZpbmlzaCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlQ29pbnNUb0dvbGRCYXIoY29pbnM6IGNjLk5vZGVbXSwgZ29sZFRhcmdldDogY2MuTm9kZSkge1xyXG4gICAgLy8gICAgIC8vIGNvbnN0IHdvcmxkUG9zID0gZ29sZFRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGdvbGRUYXJnZXQucG9zaXRpb24pO1xyXG4gICAgLy8gICAgIGxldCBsb2NhbCA9IGNjLnYzKDAsIDApXHJcbiAgICAvLyAgICAgY29pbnMuZm9yRWFjaCgoY29pbiwgaW5kZXgpID0+IHtcclxuICAgIC8vICAgICAgICAgLy8gY29uc3QgbG9jYWwgPSBjb2luLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbihjb2luKVxyXG4gICAgLy8gICAgICAgICAgICAgLmRlbGF5KGluZGV4ICogMC4wNSlcclxuICAgIC8vICAgICAgICAgICAgIC50bygwLjQsIHsgcG9zaXRpb246IGxvY2FsLCBzY2FsZTogMC41IH0sIHsgZWFzaW5nOiBcInF1YWRJblwiIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29pbi5kZXN0cm95KCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gdGhpcy5hZGRHb2xkKDEpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaXNEZW0gPSAwXHJcbiAgICAvLyBnZXRQbGFjZShjdXMpIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXMpOyAvLyBn4buNbiBoxqFuXHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gZW5xdWV1ZU1vdmUoY3VzTm9kZSkge1xyXG4gICAgLy8gICAgIHRoaXMubW92ZVF1ZXVlLnB1c2goY3VzTm9kZSk7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9jZXNzUXVldWUoKTtcclxuICAgIC8vIH1cclxuICAgIC8vIHByb2Nlc3NRdWV1ZSgpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc1Byb2Nlc3NpbmcpIHJldHVybjtcclxuICAgIC8vICAgICBpZiAodGhpcy5tb3ZlUXVldWUubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgbGV0IGN1c05vZGUgPSB0aGlzLm1vdmVRdWV1ZS5zaGlmdCgpO1xyXG4gICAgLy8gICAgIHRoaXMuX21vdmVDdXNPdXQoY3VzTm9kZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gbW92ZVF1ZXVlID0gW107XHJcbiAgICAvLyBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgIC8vIF9tb3ZlQ3VzT3V0KGN1c05vZGUpIHtcclxuICAgIC8vICAgICBsZXQgcGxhY2UgPSB0aGlzLmFyckN1cy5pbmRleE9mKGN1c05vZGUpO1xyXG5cclxuICAgIC8vICAgICBpZiAocGxhY2UgPT09IC0xKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAvLyAgICAgbGV0IGZpcnN0Q3VzID0gY3VzTm9kZTtcclxuXHJcbiAgICAvLyAgICAgLy8gPT09PT0gU3Bhd24gY3VzdG9tZXIgdGnhur9wIHRoZW8gPT09PT1cclxuICAgIC8vICAgICBsZXQgbmV4dEN1cyA9IHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmlzQ291bnRDdXNdO1xyXG5cclxuICAgIC8vICAgICBpZiAobmV4dEN1cykge1xyXG4gICAgLy8gICAgICAgICBuZXh0Q3VzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBuZXh0Q3VzO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnRDdXMrKztcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vID09PT09IFThuqFvIGN1c3RvbWVyIG3hu5tpIOG7nyBjdeG7kWkgPT09PT1cclxuICAgIC8vICAgICAvLyBsZXQgbmV3Q3VzID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJlQ3VzW3RoaXMuaXNEZW1dKTtcclxuICAgIC8vICAgICAvLyBuZXdDdXMucGFyZW50ID0gdGhpcy5saXN0Q3VzO1xyXG5cclxuICAgIC8vICAgICAvLyBsZXQgbGFzdEN1cyA9IHRoaXMuYXJyQ3VzW3RoaXMuYXJyQ3VzLmxlbmd0aCAtIDFdO1xyXG4gICAgLy8gICAgIC8vIG5ld0N1cy5wb3NpdGlvbiA9IGxhc3RDdXMucG9zaXRpb24uYWRkKGNjLnYzKDYwMCwgMCkpO1xyXG5cclxuICAgIC8vICAgICAvLyB0aGlzLmlzRGVtID0gKHRoaXMuaXNEZW0gKyAxKSAlIHRoaXMubGlzdFByZUN1cy5sZW5ndGg7IGBgXHJcbiAgICAvLyAgICAgLy8gdGhpcy5hcnJDdXMucHVzaChuZXdDdXMpO1xyXG5cclxuICAgIC8vICAgICAvLyA9PT09PSBNb3ZlIHRo4bqxbmcgYuG7iyBvdXQgPT09PT1cclxuICAgIC8vICAgICBmaXJzdEN1cy56SW5kZXggPSAtMTtcclxuICAgIC8vICAgICBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmlzU3VjY2VzcyA9IHRydWVcclxuICAgIC8vICAgICBjYy50d2VlbihmaXJzdEN1cylcclxuICAgIC8vICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgIC8vICAgICAgICAgLmJ5KDAuOCAqIChwbGFjZSArIDEpLCB7IHBvc2l0aW9uOiBjYy52MygtNDAwICogKHBsYWNlICsgMSksIDApIH0pXHJcbiAgICAvLyAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIC8vICAgICBjYy50d2VlbihmaXJzdEN1cylcclxuICAgIC8vICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgIC8vICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAvLyAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIC8vICAgICAvLyA9PT09PSBNb3ZlIGPDoWMgdGjhurFuZyBwaMOtYSBzYXUgPT09PT1cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gcGxhY2UgKyAxOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV07XHJcblxyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihjaGlsZClcclxuICAgIC8vICAgICAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAvLyAgICAgICAgICAgICAuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vID09PT09IFJlbW92ZSBraOG7j2kgbeG6o25nID09PT09XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1cy5zcGxpY2UocGxhY2UsIDEpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpO1xyXG5cclxuICAgIC8vICAgICB9LCAxLjEpO1xyXG5cclxuICAgIC8vICAgICAvLyA9PT09PSBTcGF3biBraGF5ID09PT09XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5pc0NvdW50RG9uZSA8IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3Bhd05leHRLaGF5KHBsYWNlKTtcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9LCAwLjMpO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzQ291bnREb25lID09IDUpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBmaW5pc2hNb3ZlKCkge1xyXG4gICAgLy8gICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9jZXNzUXVldWUoKTsgLy8gY2jhuqF5IHRp4bq/cCB0aOG6sW5nIGvhur8gdGnhur9wXHJcbiAgICAvLyB9XHJcbiAgICAvLyBjaGVja1N1Y2Nlc3NJdGVtKCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hlY2sgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWlzc2lvbi5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKG1pc3Npb25bal0gIT0gMTAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoaSwgbnVsbClcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpdGVtUXVldWU6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgLy8gc2h1ZmZsZUl0ZW0oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5pdGVtUXVldWUgPSBbXTtcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RJdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXRlbVF1ZXVlLnB1c2goaSk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyBzaHVmZmxlIEZpc2hlci1ZYXRlc1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSB0aGlzLml0ZW1RdWV1ZS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAvLyAgICAgICAgIFt0aGlzLml0ZW1RdWV1ZVtpXSwgdGhpcy5pdGVtUXVldWVbal1dID0gW3RoaXMuaXRlbVF1ZXVlW2pdLCB0aGlzLml0ZW1RdWV1ZVtpXV07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldE5leHRJdGVtSW5kZXgoKSB7XHJcblxyXG4gICAgLy8gICAgIGlmICh0aGlzLml0ZW1RdWV1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNodWZmbGVJdGVtKCk7IC8vIHThuqFvIGzGsOG7o3QgbeG7m2lcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLml0ZW1RdWV1ZS5zaGlmdCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGxhc3RJdGVtSW5kZXg6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgLy8gc3Bhd25JdGVtKCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0UmF5Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLmxhc3RJdGVtSW5kZXhbaV0gPSAtMTsgLy8gY2jGsGEgY8OzIGl0ZW0gdHLGsOG7m2NcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3Bhd25JdGVtT25SYXkoaSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHNwYXduSXRlbU9uUmF5KGluZGV4OiBudW1iZXIpIHtcclxuXHJcbiAgICAvLyAgICAgbGV0IG1hZyA9IChpbmRleCA9PSAwKSA/IDEwMDAgOiAtMTAwMDtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5jcmVhdGVJdGVtKGluZGV4LCBtYWcpO1xyXG5cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5jcmVhdGVJdGVtKGluZGV4LCBtYWcpO1xyXG4gICAgLy8gICAgIH0sIDIpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNyZWF0ZUl0ZW0oaW5kZXg6IG51bWJlciwgbWFnOiBudW1iZXIpIHtcclxuICAgIC8vICAgICBsZXQgcmQgPSB0aGlzLmdldE5leHRJdGVtSW5kZXgoKTtcclxuICAgIC8vICAgICB0aGlzLmxhc3RJdGVtSW5kZXhbaW5kZXhdID0gcmQ7XHJcblxyXG4gICAgLy8gICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtyZF0pO1xyXG4gICAgLy8gICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5saXN0UmF5W2luZGV4XTtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5hcnJJdGVtW2luZGV4XS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgIC8vICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMobWFnLCAtNDApO1xyXG5cclxuICAgIC8vICAgICB0aGlzLm1vdmVJdGVtKGl0ZW0sIG1hZyk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlSXRlbShpdGVtOiBjYy5Ob2RlLCBtYWcpIHtcclxuICAgIC8vICAgICBsZXQgdGFyZ2V0WCA9IC1tYWc7XHJcbiAgICAvLyAgICAgY2MudHdlZW4oaXRlbSlcclxuICAgIC8vICAgICAgICAgLnRvKDE3LCB7IHg6IHRhcmdldFggfSlcclxuICAgIC8vICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgLy8gfVxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcblxyXG4gICAgfVxyXG4gICAgb2ZmR3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuICAgIH1cclxuICAgIC8vIG1vdmVDbG9ja3RvVUkobm9kZTEpIHtcclxuICAgIC8vICAgICB0aGlzLm1vdmVJdGVtVG9VSShub2RlMSwgdGhpcy5iYXJUaW1lLmNoaWxkcmVuWzFdKTtcclxuICAgIC8vIH1cclxuICAgIC8vIG1vdmVJdGVtVG9VSShub2RlMSwgbm9kZTIpIHtcclxuICAgIC8vICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kaW4sIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIGxldCBwb3MgPSBub2RlMi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUyLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgIHBvcyA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgIC8vICAgICAvLyBwb3MgPSBwb3MuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgLy8gICAgIGxldCBwb3MyID0gbm9kZTEucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMS5wb3NpdGlvbik7XHJcbiAgICAvLyAgICAgcG9zMiA9IHRoaXMubWFpbkNhbWVyYS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zMik7XHJcbiAgICAvLyAgICAgcG9zMiA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvczIpO1xyXG4gICAgLy8gICAgIHBvczIgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MyKS5hZGQoY2MudjMoMCwgMCkpXHJcbiAgICAvLyAgICAgbm9kZTEucGFyZW50ID0gdGhpcy51aU5vZGU7XHJcbiAgICAvLyAgICAgbm9kZTEuc2NhbGUgPSB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvIC8gdGhpcy51aUNhbWVyYS56b29tUmF0aW8gKiAwLjdcclxuICAgIC8vICAgICBub2RlMS5wb3NpdGlvbiA9IHBvczJcclxuICAgIC8vICAgICBjYy50d2Vlbihub2RlMSkudG8oMC40LCB7IHBvc2l0aW9uOiBwb3MsIHNjYWxlOiAwLjQgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIG5vZGUxLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMubWlzc2lvbkJhci5nZXRDb21wb25lbnQoXCJ1cGRhdGVCYXJcIikudXBkYXRlQmFyKCk7XHJcbiAgICAvLyAgICAgICAgIC8vIHdvb2QuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImV4cFwiKVxyXG4gICAgLy8gICAgICAgICAvLyAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kT3V0LCBmYWxzZSwgMSlcclxuICAgIC8vICAgICB9KS5zdGFydCgpXHJcbiAgICAvLyB9XHJcbiAgICBpc0VuZEdhbWUgPSBmYWxzZVxyXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKClcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyVGltZS5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICB0aGlzLmFtYXppbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kQ2FyZFdpbikgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfSwgMC41KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5hcnJDdXMpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiNi5hbmdyeVwiLCB0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZFNvdW5kKVxyXG4gICAgICAgICAgICB0aGlzLnRpbWV1cC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua2luZywgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRMb3NlLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyBidG5fY2hvb3NlKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgaXNEb2MgPSBmYWxzZVxyXG4gICAgLy8gdXBkYXRlKGR0KSB7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5sYkNvaW4uc3RyaW5nID0gZ2xvYmFsVGhpcy5nb2xkLnRvU3RyaW5nKClcclxuICAgIC8vICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAvLyAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICB1cGRhdGVSZXNwb25zaXZlKCkge1xyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcnJQb3NNZW51TmdhbmcgPSBbY2MudjMoLTM5MSwgLTEwMiksIGNjLnYzKDM3NSwgLTExMiksIGNjLnYzKDExNCwgLTEyMCksIGNjLnYzKC00MDksIC0yODQpLCBjYy52MygtMTU4LCAtMjk2KSwgY2MudjMoMTE4LCAtMjgwKSwgY2MudjMoMzkwLCAtMjk2KSwgY2MudjMoLTEzNywgLTExNildO1xyXG4gICAgYXJyUG9zRG9jID0gW2NjLnYzKDI2LCAtMzM3KSwgY2MudjMoMzM2LCAtMTEyKSwgY2MudjMoMTUuNSwgLTEyMSksIGNjLnYzKC0xNzAsIC01MjUuNyksIGNjLnYzKC0zMDAsIC0zNTIpLCBjYy52MygxODYuOTYsIC01MTIpLCBjYy52MygzNTUsIC0zMzUpLCBjYy52MygtMjkyLCAtMTE2KV1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmVuZENhcmRXaW4uc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNiA6IDAuNFxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5zY2FsZSA9IChsb2dpYykgPyAyLjUgOiAxLjRcclxuICAgICAgICB0aGlzLmJhckNvaW4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gKGxvZ2ljKSA/IDIxMCA6IDgwXHJcbiAgICAgICAgdGhpcy5waGFvSG9hLnNjYWxlID0gKGxvZ2ljKSA/IDkgOiA1XHJcbiAgICAgICAgdGhpcy5ndWlsZC5zY2FsZSA9IChsb2dpYykgPyAyIDogMS4yXHJcbiAgICAgICAgdGhpcy5ndWlsZC5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtOTAwKSA6IGNjLnYzKDAsIC0zNjApXHJcbiAgICAgICAgdGhpcy5saXN0Q3VzLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxXHJcbiAgICAgICAgdGhpcy5saXN0S2hheS5zY2FsZSA9IChsb2dpYykgPyAxLjEgOiAxXHJcbiAgICAgICAgdGhpcy50aW1ldXAuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYW1hemluZy5zY2FsZSA9IChsb2dpYykgPyAxIDogMS40XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkRG9jLnNjYWxlID0gMS41XHJcbiAgICAgICAgdGhpcy5ub3RpTWlzc2lvbi5zY2FsZSA9IChsb2dpYykgPyAyIDogMVxyXG4gICAgICAgIC8vIHRoaXMudHV0TWlzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgdGhpcy5iYXJNaXNzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLmFjdGl2ZSA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjdcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMDBcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuMlxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjg1XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==