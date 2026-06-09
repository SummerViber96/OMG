
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
        if (this.countCus == 2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcR2FtZURvbnV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0FBRXZCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd21DQztRQXRtQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElB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QyxHQUFHLENBQUE7UUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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QUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUF6SUwsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdtQzVCO0lBQUQsZUFBQztDQXhtQ0QsQUF3bUNDLENBeG1DcUMsRUFBRSxDQUFDLFNBQVMsR0F3bUNqRDtrQkF4bUNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuY29pbiA9IDBcclxuZ2xvYmFsVGhpcy5HYW1lID0gZmFsc2VcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2hvd1BvcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsb3NlUG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE9rOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRyYW5zOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2VsbERvbmU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua2luZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3JlYW06IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoZXJyeTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENyZWFtTWluaTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJhbmg6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZFdpbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3VzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIG1haW5DYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICB1aUNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhclRpbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJDb2luOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENoZWNrSXRlbTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvSG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RJdGVtOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RSYXk6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0S2hheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlS2hheTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RSYXlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1ldXA6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFtYXppbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgbm90aUNvaW46IGNjLkFuaW1hdGlvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aU1pc3Npb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0UHJlQ3VzOiBjYy5QcmVmYWJbXSA9IFtdXHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdE1lbnU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kdHV0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZHR1dDI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kdHV0MzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNvaW46IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZERvYzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL25ld1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0QmVwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdERpYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUJhbmg6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhck1pc3Npb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhck1pc3Npb24yOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy9idG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQ2hpY2tlbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk1hY2hpbmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Db2NhOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQ2FrZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blBvdGF0bzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1jOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGluZDE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgbWNDb21wID0gbnVsbFxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gdHV0TWlzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYXJyQmVwID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG4gICAgYXJyRGlhID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG5cclxuXHJcbiAgICBtYXhLaGF5ID0gN1xyXG5cclxuICAgIGFyckRvbnV0cG9zID0gW11cclxuXHJcbiAgICBpc1R1dENoaWxpID0gZmFsc2VcclxuICAgIGlzVHV0TWVhdCA9IGZhbHNlXHJcbiAgICBpc1R1dFZlZ2V0VGFibGUgPSBmYWxzZVxyXG4gICAgaXNUdXRDbGlja01lYXQgPSBmYWxzZVxyXG5cclxuXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICAvLyBpc1N0ZXAgPSAwXHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBtYXhDdXN0b21lcnMgPSA2XHJcbiAgICBpZFNvdW5kID0gbnVsbFxyXG4gICAgaXNTdGVwID0gMFxyXG4gICAgLy9pdGVtOiAwOmJ1Z2VyLCAxOiBrZW0gMjpkb251dCAzOmtob2FpdGF5IDQ6cGhvIDU6IHB1ZGRpbmcgNjogdHJhICA3OmJhbmhtaSA4OmNvY29udXRcclxuICAgIHJheVk6IG51bWJlcltdID0gWzEyMCwgMCwgLTEyMF07ICAgLy8gduG7iyB0csOtIFkgY+G7p2EgMyByYXlcclxuICAgIHNwYXduWDogbnVtYmVyID0gNzAwOyAgICAgICAgICAgICAgLy8gduG7iyB0csOtIHNwYXduIGLDqm4gcGjhuqNpXHJcbiAgICBhcnJJdGVtID0gW1tdLCBbXV1cclxuICAgIGFycktoYXkgPSBbXVxyXG4gICAgYXJyVGFyZ2V0TWlzc2lvbiA9IFtdXHJcbiAgICBhcnJDdXMgPSBbXVxyXG4gICAgc2VsbFRhcmdldEN1cyA9IG51bGxcclxuICAgIHNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICBjdXNDb3VudGVyUG9zID0gbnVsbFxyXG4gICAgY3VzU2xvdEdhcCA9IDUwMFxyXG4gICAgY3VzRW50ZXJPZmZzZXQgPSBjYy52MygzNTAsIDAsIDApXHJcbiAgICBjdXNXYWxrU3BlZWQgPSA0MzcuNVxyXG4gICAgY291bnRlckN1c0NvdW50ID0gMFxyXG4gICAgaXNTdGFydGdhbWUgPSBmYWxzZVxyXG4gICAgaXNGaXJzdENsaWNrID0gZmFsc2VcclxuICAgIC8vMDpiYW5oIHRodW9uZyAxOmNob2NvbGF0ZSAyOiBzdHJhd2JlcnJ5IFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEN1cy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMucHVzaCh0aGlzLmxpc3RDdXMuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgIGNjLnZpZXcuc2V0UmVzaXplQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm90aU1pc3Npb24pLmJ5KDAuNCwgeyBvcGFjaXR5OiAtMjU1LCBwb3NpdGlvbjogY2MudjMoMCwgMjAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aU1pc3Npb24uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDEuNSlcclxuICAgICAgICB0aGlzLm1jQ29tcCA9IHRoaXMubWMuZ2V0Q29tcG9uZW50KFwibWNcIilcclxuICAgIH1cclxuICAgIGlzSGFuZCA9IG51bGxcclxuXHJcbiAgICBpbml0Q3VzUXVldWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmN1c0NvdW50ZXJQb3MgJiYgdGhpcy5hcnJDdXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1c0NvdW50ZXJQb3MgPSB0aGlzLmFyckN1c1swXS5wb3NpdGlvbi5jbG9uZSgpLnN1Yih0aGlzLmN1c0VudGVyT2Zmc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXNDb3VudGVyUG9zKHNsb3Q6IG51bWJlciwgdG90YWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW5pdEN1c1F1ZXVlKClcclxuICAgICAgICBpZiAodG90YWwgPD0gMSkgcmV0dXJuIHRoaXMuY3VzQ291bnRlclBvcy5jbG9uZSgpXHJcbiAgICAgICAgbGV0IG9mZnNldFggPSAoc2xvdCAtICh0b3RhbCAtIDEpIC8gMikgKiB0aGlzLmN1c1Nsb3RHYXBcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXNDb3VudGVyUG9zLmNsb25lKCkuYWRkKGNjLnYzKG9mZnNldFgsIDAsIDApKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb3VudGVyTWlzc2lvbnMoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQgJiYgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2ldLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuc2hvd01pc3Npb24oKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbnRlckN1c3RvbWVycyhjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyQ3VzQ291bnQgPSBjb3VudFxyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjMoMCwgMCwgMCldXHJcbiAgICAgICAgaWYoY291bnQ9PTIpe1xyXG4gICAgICAgICAgICBhcnJQb3MgPSBbY2MudjMoLTI4NSwgMCwgMCksIGNjLnYzKDg4LCAwLCAwKV1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjb3VudD09Myl7XHJcbiAgICAgICAgICAgIGFyclBvcyA9IFtjYy52MygtNDQzLCAwLCAwKSwgY2MudjMoLTczLCAwLCAwKSwgY2MudjMoMjczLCAwLCAwKV1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1heER1cmF0aW9uID0gMFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQgJiYgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICAvLyBsZXQgdGFyZ2V0UG9zID0gdGhpcy5nZXRDdXNDb3VudGVyUG9zKGksIGNvdW50KVxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gYXJyUG9zW2ldXHJcblxyXG4gICAgICAgICAgICBsZXQgc3Bhd25Qb3MgPSB0YXJnZXRQb3MuY2xvbmUoKS5hZGQodGhpcy5jdXNFbnRlck9mZnNldClcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gc3Bhd25Qb3Muc3ViKHRhcmdldFBvcykubWFnKClcclxuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gZGlzdGFuY2UgLyB0aGlzLmN1c1dhbGtTcGVlZFxyXG4gICAgICAgICAgICBtYXhEdXJhdGlvbiA9IE1hdGgubWF4KG1heER1cmF0aW9uLCBkdXJhdGlvbilcclxuXHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjdXMpXHJcbiAgICAgICAgICAgIGN1cy5wb3NpdGlvbiA9IHNwYXduUG9zXHJcbiAgICAgICAgICAgIGN1cy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLm1vdmUoKVxyXG4gICAgICAgICAgICBjYy50d2VlbihjdXMpXHJcbiAgICAgICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgcG9zaXRpb246IHRhcmdldFBvcyB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q291bnRlck1pc3Npb25zKGNvdW50KVxyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDEgJiYgdGhpcy5hcnJDdXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IHRoaXMuYXJyQ3VzWzBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uLmdldENvbXBvbmVudChcImJhclRpbWVcIikuY291bnREb3duKClcclxuICAgICAgICB9LCBtYXhEdXJhdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbnRlckNvdW50Rm9yV2F2ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PT0gMSkgcmV0dXJuIDJcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PT0gMykgcmV0dXJuIDNcclxuICAgICAgICByZXR1cm4gMVxyXG4gICAgfVxyXG4gICAgb25IaW5kKCl7XHJcbiAgICAgICAgdGhpcy5oaW5kMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEN1c1F1ZXVlKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW50ZXJDdXN0b21lcnMoMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5DaGlja2VuLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzKVxyXG4gICAgfVxyXG4gICAgaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgaXNGaXN0ID0gZmFsc2VcclxuICAgIGJ0bl9jaGlja2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5tY0NvbXAuZGlzY2FyZFRyYXlJZkRpZmZlcmVudFR5cGUoXCJjaGlja2VuXCIpXHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5jYW5QaWNrTW9yZUNoaWNrZW4oKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5DaGlja2VuLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9DaGlja2VuKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcblxyXG4gICAgYnRuX21heUNoaWVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5tY0NvbXAuZGlzY2FyZFRyYXlJZkRpZmZlcmVudFR5cGUoXCJjaGlja2VuXCIpXHJcbiAgICAgICAgbGV0IG1hY2hpbmVDb21wID0gdGhpcy5idG5NYWNoaW5lLmdldENvbXBvbmVudChcIm1hY2hpbmVcIilcclxuICAgICAgICBsZXQgY2FuRnJ5ID0gdGhpcy5tY0NvbXAuZ2V0UmF3VHJheVNsb3QoKSA+PSAwICYmIG1hY2hpbmVDb21wLmNoaWNrZW4gPT0gbnVsbFxyXG4gICAgICAgIGxldCBjYW5QaWNrdXAgPSAodGhpcy5tY0NvbXAubG9jYWxJZCA9PSAyIHx8IHRoaXMubWNDb21wLmxvY2FsSWQgPT0gMykgJiYgbWFjaGluZUNvbXAuY2hpY2tlbiAhPSBudWxsICYmIHRoaXMubWNDb21wLmlzVHJheUVtcHR5KClcclxuICAgICAgICBpZiAoIWNhbkZyeSAmJiAhY2FuUGlja3VwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9NYWNoaW5lKClcclxuICAgIH1cclxuICAgIGJ0bl9jb2xhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9Db2NhKClcclxuICAgIH1cclxuICAgIGJ0bl9zYXVjZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01vdmluZykgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuaGFzQW55SXRlbSgpIHx8IHRoaXMubWNDb21wLmZpbmRDb29rZWRUcmF5U2xvdCgpIDwgMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvU2F1Y2UoKVxyXG4gICAgfVxyXG4gICAgYnRuX2Nha2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmcpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0Nha2UoKVxyXG4gICAgfVxyXG4gICAgYnRuX3RvbWF0bygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01vdmluZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvVG9tYXRvKClcclxuICAgIH1cclxuICAgIGdldEN1c1RyYXlJbmRleChjdXNOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzTm9kZSlcclxuICAgIH1cclxuICAgIGNoZWNrU2VsbCh0YXJnZXRDdXM/OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGN1cyA9IHRhcmdldEN1cyB8fCB0aGlzLnNlbGxUYXJnZXRDdXMgfHwgdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICBpZiAodGhpcy5pc01vdmluZyB8fCAhY3VzKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAgICAgbGV0IHRyYXlJZHggPSB0aGlzLm1jQ29tcC5maW5kVHJheUZvckN1c3RvbWVyKGN1c0NvbXApXHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5oYXNBbnlJdGVtKCkgfHwgdHJheUlkeCA8IDApIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2VsbFRhcmdldEN1cyA9IGN1c1xyXG4gICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gdHJheUlkeFxyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBjdXNcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0J1eSgpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHZhbGlkYXRlU2VsbEF0Q291bnRlcigpIHtcclxuICAgICAgICBsZXQgY3VzID0gdGhpcy5zZWxsVGFyZ2V0Q3VzIHx8IHRoaXMuaXNUYXJnZXRDdXMgfHwgdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICBpZiAoIWN1cykge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXApIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXNDb21wLnZhbGlkYXRlU2VsbCgpXHJcbiAgICB9XHJcbiAgICBuZXh0Q3VzKHZhbHVlOiBib29sZWFuLCBkZXBhcnRlZEN1cz86IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoZGVwYXJ0ZWRDdXMpIHtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoZGVwYXJ0ZWRDdXMpXHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkgdGhpcy5hcnJDdXMuc3BsaWNlKGlkeCwgMSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXJyQ3VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMuc3BsaWNlKDAsIDEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICBpZih0aGlzLmNvdW50Q3VzPT0yKXtcclxuICAgICAgICAgICAgdGhpcy5idG5DYWtlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blBvdGF0by5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmNvdW50Q3VzPT0zKXtcclxuICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJhck1pc3Npb24yKS5ieSgwLjQsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIDIwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNlbGxUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSAtMVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA+PSB0aGlzLm1heEN1c3RvbWVycyB8fCB0aGlzLmFyckN1cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgd2FzR3JvdXBBdENvdW50ZXIgPSB0aGlzLmNvdW50ZXJDdXNDb3VudCA+IDFcclxuICAgICAgICBpZiAod2FzR3JvdXBBdENvdW50ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyQ3VzQ291bnQtLVxyXG4gICAgICAgICAgICB0aGlzLm1jQ29tcC5hZnRlckN1c3RvbWVyTGVmdCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGxcclxuICAgICAgICB0aGlzLm1jQ29tcC5yZXNldFRvU3RhcnQoKVxyXG5cclxuICAgICAgICBsZXQgZW50ZXJDb3VudCA9IHRoaXMuZ2V0RW50ZXJDb3VudEZvcldhdmUoKVxyXG4gICAgICAgIHRoaXMuZW50ZXJDdXN0b21lcnMoZW50ZXJDb3VudClcclxuICAgIH1cclxuICAgIC8vIGlzRmlyc3RDbGlja2JhbmggPSBmYWxzZVxyXG4gICAgLy8gaXNGcmlzdCA9IGZhbHNlXHJcblxyXG5cclxuICAgIC8vIGJ0bl9iYW5oKCkge1xyXG4gICAgLy8gICAgIGlmICghdGhpcy5pc0ZyaXN0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNGcmlzdCA9IHRydWVcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpXHJcblxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlXHJcbiAgICAvLyAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrYmFuaCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2tiYW5oID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5oYW5kdHV0Mi5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgIH0sIDIpXHJcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdGhpcy5nZXRTbG90QmVwKCk7XHJcbiAgICAvLyAgICAgaWYgKGNoZWNrICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJCZXBbY2hlY2tdID0gdHJ1ZTs7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdEJlcC5jaGlsZHJlbltjaGVja10uZ2V0Q29tcG9uZW50KFwiQmFuaFwiKS5zZXRPbigpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaXNGaXJzdFN0ZXAgPSBmYWxzZVxyXG4gICAgLy8gYnRuX2JlcCh0YWcpIHtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgdGhpcy5oYW5kdHV0Mi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgIGlmICghdGhpcy5pc0ZpcnN0U3RlcCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmhhbmR0dXQzLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0ZpcnN0U3RlcCA9IHRydWVcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdGhpcy5nZXRTbG90RGlhKCk7XHJcbiAgICAvLyAgICAgaWYgKGNoZWNrICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJEaWFbY2hlY2tdID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxpc3REaWEuY2hpbGRyZW5bY2hlY2tdLmdldENvbXBvbmVudChcIkRpYVwiKS5nZXRCYW5oKClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0U2xvdEJlcCgpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQmVwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQmVwW2ldXHJcbiAgICAvLyAgICAgICAgIGlmIChjaGlsZCA9PSBmYWxzZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGlcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gbnVsbFxyXG4gICAgLy8gfVxyXG4gICAgLy8gZ2V0U2xvdERpYSgpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyRGlhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdERpYS5jaGlsZHJlbltpXVxyXG4gICAgLy8gICAgICAgICBpZiAoY2hpbGQuZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmlzQmFuaCA9PSBmYWxzZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGlcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gbnVsbFxyXG4gICAgLy8gfVxyXG4gICAgLy8gYnRuX3N0cmF3QmVycnkoKSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyRGlhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBjaGVjayA9IHRoaXMuYXJyRGlhW2ldO1xyXG4gICAgLy8gICAgICAgICBsZXQgYmFuaCA9IHRoaXMubGlzdERpYS5jaGlsZHJlbltpXTtcclxuICAgIC8vICAgICAgICAgaWYgKGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLnN0YXR1cyA9PSAwICYmIGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmlzQmFuaCA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmhhbmR0dXQzLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc2V0U3RhdHVzKDIpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGJ0bl9jaG9jb2xhdGUoKSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyRGlhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBjaGVjayA9IHRoaXMuYXJyRGlhW2ldO1xyXG4gICAgLy8gICAgICAgICBsZXQgYmFuaCA9IHRoaXMubGlzdERpYS5jaGlsZHJlbltpXTtcclxuICAgIC8vICAgICAgICAgaWYgKGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLnN0YXR1cyA9PSAwICYmIGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmlzQmFuaCA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmhhbmR0dXQzLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc2V0U3RhdHVzKDEpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGJ0bl9jcmVhbSgpIHtcclxuXHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gaXNGbHlpbmcgPSBmYWxzZVxyXG4gICAgLy8gYnRuX3NlbGwoaXRlbSwgdGFnKSB7XHJcbiAgICAvLyAgICAgLy8gaWYodGhpcy5pc01vdmluZylyZXR1cm47XHJcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja01pc3Npb24odGFnLCBpdGVtKTtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgbGV0IG1hZyA9IDUwXHJcbiAgICAvLyAgICAgbGV0IHN0YXJ0UG9zID0gY2MudjIoaXRlbS54LCBpdGVtLnkpO1xyXG4gICAgLy8gICAgIGxldCBlbmRQb3MgPSB0aGlzLmFyckN1c1swXS5nZXRDaGlsZEJ5TmFtZShcImJ1YmJsZXNcIikucG9zaXRpb24uYWRkKGNjLnYzKC0zMCwgMTIwKSlcclxuICAgIC8vICAgICBsZXQgbWlkUG9zID0gY2MudjIoZW5kUG9zLnggKyBtYWcsIGVuZFBvcy55ICsgMjAwKTtcclxuXHJcbiAgICAvLyAgICAgbGV0IGJhbmggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUJhbmgpO1xyXG4gICAgLy8gICAgIGJhbmgucGFyZW50ID0gaXRlbS5wYXJlbnQ7XHJcbiAgICAvLyAgICAgYmFuaC5wb3NpdGlvbiA9IGNjLnYzKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG4gICAgLy8gICAgIGJhbmguZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5sb2FkSXRlbSh0YWcpXHJcblxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKGJhbmgpLnRvKDAuMiwgeyBzY2FsZTogMS4yIH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgY2MudHdlZW4oYmFuaCkuYmV6aWVyVG8oMC40LCBzdGFydFBvcywgbWlkUG9zLCBlbmRQb3MpLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZE9rLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXJyQ3VzW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMF1dLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuZG9uZU5vZGUuY2hpbGRyZW5bdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVsxXV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5hbmdyeSgpXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGJhbmguZGVzdHJveSgpXHJcbiAgICAvLyAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIC8vIH1cclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3Bhd0toYXkobWlzc2lvbikge1xyXG4gICAgLy8gICAgIGxldCBhcnIgPSBbY2MudjMoLTYwLCAtMTApLCBjYy52Myg4MCwgLTEwKV1cclxuICAgIC8vICAgICBpZiAobWlzc2lvbi5sZW5ndGggPT0gMykge1xyXG4gICAgLy8gICAgICAgICBhcnIgPSBbY2MudjMoLTc1LCAtMTApLCBjYy52MygzMCwgLTEwKSwgY2MudjMoMTIwLCAtMTApXVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBsZXQga2hheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheSk7XHJcbiAgICAvLyAgICAga2hheS5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5O1xyXG4gICAgLy8gICAgIGtoYXkucG9zaXRpb24gPSBjYy52MygtMTAwLCA1MClcclxuICAgIC8vICAgICB0aGlzLmFycktoYXkucHVzaChraGF5KVxyXG4gICAgLy8gICAgIHRoaXMubG9hZERhdGFLaGF5KG1pc3Npb24sIGtoYXkpXHJcbiAgICAvLyAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnB1c2gobWlzc2lvbilcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpc1RhcmdldEl0ZW1QbGFjZSA9IFtdXHJcbiAgICAvLyAvLyBjb3VudE1pc3MgPSAzXHJcbiAgICAvLyBzcGF3TmV4dEtoYXkocGxhY2UpIHtcclxuICAgIC8vICAgICBsZXQgZmlyc3RDdXMgPSB0aGlzLmFyckN1c1sxXTtcclxuICAgIC8vICAgICBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLnNob3dNaXNzaW9uKCk7XHJcbiAgICAvLyAgICAgZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpO1xyXG5cclxuICAgIC8vICAgICBsZXQgbWlzc2lvbiA9IGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikub3JkZXI7XHJcbiAgICAvLyAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnNwbGljZShwbGFjZSwgMSlcclxuICAgIC8vICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24ucHVzaChtaXNzaW9uKVxyXG4gICAgLy8gICAgIGxldCBwb3MgPSBjYy52MygxMjAwLCAwKTtcclxuICAgIC8vICAgICBsZXQgcHJlS2hheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheSlcclxuICAgIC8vICAgICBwcmVLaGF5LnBhcmVudCA9IHRoaXMubGlzdEtoYXk7XHJcbiAgICAvLyAgICAgcHJlS2hheS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgLy8gICAgIHRoaXMuYXJyS2hheS5wdXNoKHByZUtoYXkpXHJcbiAgICAvLyAgICAgdGhpcy5sb2FkRGF0YUtoYXkobWlzc2lvbiwgcHJlS2hheSlcclxuICAgIC8vICAgICBwcmVLaGF5LnBvc2l0aW9uID0gY2MudjMoLTEwMCArIDQwMCwgNTApXHJcbiAgICAvLyAgICAgbGV0IHRhcmdldEtoYXkgPSB0aGlzLmFycktoYXlbcGxhY2VdXHJcbiAgICAvLyAgICAgY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuXHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSBwbGFjZSArIDE7IGkgPCB0aGlzLmFycktoYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IGtoYXkgPSB0aGlzLmFycktoYXlbaV1cclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oa2hheSkuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXJyS2hheVtpIC0gMV0gPSBraGF5XHJcblxyXG4gICAgLy8gICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubGlzdFJheVswXSkuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFycktoYXkuc3BsaWNlKHBsYWNlLCAxKTtcclxuXHJcbiAgICAvLyAgICAgfSwgMC4yKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gbG9hZERhdGFLaGF5KGRhdGEsIGtoYXkpIHtcclxuICAgIC8vICAgICBpZiAoZGF0YSkge1xyXG4gICAgLy8gICAgICAgICBsZXQgYXJyID0gW2NjLnYzKC02MCwgLTMwKSwgY2MudjMoODAsIC0zMCldXHJcblxyXG4gICAgLy8gICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMykge1xyXG4gICAgLy8gICAgICAgICAgICAgYXJyID0gW2NjLnYzKC03NSwgLTMwKSwgY2MudjMoMzAsIC0zMCksIGNjLnYzKDEyMCwgLTMwKV1cclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW2RhdGFbaV0gLSAxXSlcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0ga2hheVxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGFycltpXVxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5zY2FsZSA9IDAuNjhcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIkl0ZW1cIikubG9hZEdyYXkoKVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gZmlyc3RDbGljayA9IGZhbHNlXHJcbiAgICAvLyBidG5fY2xpY2tCdG4oZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAvLyAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpXHJcblxyXG4gICAgLy8gICAgIHRoaXMuaGFuZHR1dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLmJ0blBpenphLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIGlmICghdGhpcy5maXJzdENsaWNrKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZmlyc3RDbGljayA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaGFuZHR1dC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGxldCBpZCA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgIC8vICAgICBsZXQgbm9kZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja01pc3Npb24oaWQsIG5vZGUpO1xyXG4gICAgLy8gICAgIGlmIChjaGVjaykge1xyXG5cclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgICAgICBsZXQgcG9zID0gY2hlY2sucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGVjay5wb3NpdGlvbik7XHJcbiAgICAvLyAgICAgICAgIHBvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgLy8gICAgICAgICBsZXQgbWFnID0gKHBvcy54ID4gbm9kZS54KSA/IC01MCA6IDUwO1xyXG4gICAgLy8gICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52Mihub2RlLngsIG5vZGUueSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRQb3MgPSBjYy52Mihwb3MueCwgcG9zLnkpO1xyXG4gICAgLy8gICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoZW5kUG9zLnggKyBtYWcsIGVuZFBvcy55ICsgMjAwKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtpZCAtIDFdKTtcclxuICAgIC8vICAgICAgICAgaXRlbS5wYXJlbnQgPSBub2RlLnBhcmVudDtcclxuICAgIC8vICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGNjLnYzKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG5cclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oaXRlbSkudG8oMC4yLCB7IHNjYWxlOiAxLjIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oaXRlbSkuYmV6aWVyVG8oMC40LCBzdGFydFBvcywgbWlkUG9zLCBlbmRQb3MpLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kT2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJDdXNbdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVswXV0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5kb25lTm9kZS5jaGlsZHJlblt0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlWzFdXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKVxyXG4gICAgLy8gICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIGNoZWNrSXRlbShpZCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChtaXNzaW9uW2ldID09IGlkKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGFyckl0ZW0gPSBbaSwgal07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGFyckl0ZW1cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gbnVsbFxyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG4gICAgLy8gY2hlY2tNaXNzaW9uKGlkLCBub2RlKSB7XHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChpZCA9PSBtaXNzaW9uW2pdKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldW2pdID0gMTAwO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRJdGVtUGxhY2UgPSBbaSwgal1cclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBqKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFycktoYXlbaV0uY2hpbGRyZW5bal07XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpc0NvdW50Q3VzID0gM1xyXG4gICAgLy8gaXNDb3VudERvbmUgPSAwXHJcbiAgICAvLyBpc01vdmluZyA9IGZhbHNlXHJcbiAgICAvLyBjb2luQXJyID0gW11cclxuICAgIC8vIGNoZWNrU3VjY2VzcyhpLCBqKSB7Ly9jaGVjayBjdXMgaG9hbiB0aGFuaCBkb24gaGFuZyBjaHVhXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoaiAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgdGFyZ2V0S2hheSA9IHRoaXMuYXJyS2hheVtpXS5jaGlsZHJlbltqXTtcclxuICAgIC8vICAgICAgICAgICAgIHRhcmdldEtoYXkuZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5vZmZHcmF5KHRhcmdldEtoYXkuY2hpbGRyZW5bMV0pXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjIsIHsgc2NhbGU6IDIuNSB9KS50bygwLjEsIHsgc2NhbGU6IDIuMiB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjIsIHsgc2NhbGU6IDAuOSB9KS50bygwLjEsIHsgc2NhbGU6IDAuNjUgfSkuc3RhcnQoKVxyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICB9LCAwLjQpXHJcbiAgICAvLyAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdHJ1ZVxyXG4gICAgLy8gICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgLy8gICAgIGZvciAobGV0IG0gPSAwOyBtIDwgbWlzc2lvbi5sZW5ndGg7IG0rKykge1xyXG4gICAgLy8gICAgICAgICBpZiAobWlzc2lvblttXSAhPSAxMDApIHtcclxuICAgIC8vICAgICAgICAgICAgIGNoZWNrID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnREb25lKytcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmxpc3RDdXMuY29udmVydFRvV29ybGRTcGFjZUFSKGN1cy5wb3NpdGlvbilcclxuICAgIC8vICAgICAgICAgICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFdvcmxkVG9TY3JlZW5Qb2ludChwb3MpO1xyXG4gICAgLy8gICAgICAgICAgICAgcG9zID0gdGhpcy51aUNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zKTtcclxuICAgIC8vICAgICAgICAgICAgIHBvcyA9IHRoaXMuYmFyQ29pbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpLmFkZChjYy52MygwLCAwKSlcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zcGF3bkNvaW5zRnJvbUN1c3RvbWVyKHBvcywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIHNhdSBraGkgdOG7j2EgcmEgeG9uZyB0aMOsIG1vdmUgduG7gSB0aGFuaCBnb2xkXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ29pbnNUb0dvbGRCYXIodGhpcy5jb2luQXJyLCB0aGlzLmJhckNvaW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgfSk7IGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmhhcHB5KClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubm90aUNvaW4ucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gNTBcclxuICAgIC8vICAgICAgICAgICAgIGlmIChtaXNzaW9uLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDEwMFxyXG5cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGlmIChnbG9iYWxUaGlzLmNvaW4gPj0gMTAwMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKHRydWUpXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTZWxsRG9uZSwgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgICAgIH0sIDAuNilcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5tb3ZlQ3VzT3V0KGkpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmVucXVldWVNb3ZlKHRoaXMuYXJyQ3VzW2ldKTtcclxuICAgIC8vICAgICAgICAgfSwgMC44KVxyXG5cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHNwYXduQ29pbnNGcm9tQ3VzdG9tZXIoc3RhcnRQb3M6IGNjLlZlYzMsIG9uRmluaXNoPzogKCkgPT4gdm9pZCkge1xyXG4gICAgLy8gICAgIHRoaXMuY29pbkFyciA9IFtdXHJcbiAgICAvLyAgICAgY29uc3QgY29pbkNvdW50ID0gNjtcclxuICAgIC8vICAgICBjb25zdCByYWRpdXMgPSA3MDsgLy8gxJHhu5kgdOG7j2EgcmFcclxuXHJcbiAgICAvLyAgICAgbGV0IGZpbmlzaGVkID0gMDtcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2luQ291bnQ7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBjb2luID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcclxuICAgIC8vICAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLmJhckNvaW47XHJcbiAgICAvLyAgICAgICAgIGNvaW4uc2V0UG9zaXRpb24oc3RhcnRQb3MpO1xyXG4gICAgLy8gICAgICAgICBjb2luLnNjYWxlID0gMC44XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29pbkFyci5wdXNoKGNvaW4pXHJcbiAgICAvLyAgICAgICAgIC8vIHJhbmRvbSBoxrDhu5tuZyB04buPYVxyXG4gICAgLy8gICAgICAgICBjb25zdCBhbmdsZSA9IChNYXRoLlBJICogMiAvIGNvaW5Db3VudCkgKiBpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCByYW5kb21SYWRpdXMgPSByYWRpdXMgKyBNYXRoLnJhbmRvbSgpICogNDA7XHJcblxyXG4gICAgLy8gICAgICAgICBjb25zdCB0YXJnZXRQb3MgPSBzdGFydFBvcy5hZGQoY2MudjMoXHJcbiAgICAvLyAgICAgICAgICAgICBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb21SYWRpdXMsXHJcbiAgICAvLyAgICAgICAgICAgICBNYXRoLnNpbihhbmdsZSkgKiByYW5kb21SYWRpdXMsXHJcbiAgICAvLyAgICAgICAgICAgICAwXHJcbiAgICAvLyAgICAgICAgICkpO1xyXG5cclxuICAgIC8vICAgICAgICAgLy8gdOG7j2EgcmFcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oY29pbilcclxuICAgIC8vICAgICAgICAgICAgIC50bygwLjI1LCB7IHBvc2l0aW9uOiB0YXJnZXRQb3MgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuZGVsYXkoMC4wNSlcclxuICAgIC8vICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBmaW5pc2hlZCsrO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCA9PT0gY29pbkNvdW50ICYmIG9uRmluaXNoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG9uRmluaXNoKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIG1vdmVDb2luc1RvR29sZEJhcihjb2luczogY2MuTm9kZVtdLCBnb2xkVGFyZ2V0OiBjYy5Ob2RlKSB7XHJcbiAgICAvLyAgICAgLy8gY29uc3Qgd29ybGRQb3MgPSBnb2xkVGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZ29sZFRhcmdldC5wb3NpdGlvbik7XHJcbiAgICAvLyAgICAgbGV0IGxvY2FsID0gY2MudjMoMCwgMClcclxuICAgIC8vICAgICBjb2lucy5mb3JFYWNoKChjb2luLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAvLyBjb25zdCBsb2NhbCA9IGNvaW4ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGNvaW4pXHJcbiAgICAvLyAgICAgICAgICAgICAuZGVsYXkoaW5kZXggKiAwLjA1KVxyXG4gICAgLy8gICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogbG9jYWwsIHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6IFwicXVhZEluXCIgfSlcclxuICAgIC8vICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb2luLmRlc3Ryb3koKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZEdvbGQoMSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpc0RlbSA9IDBcclxuICAgIC8vIGdldFBsYWNlKGN1cykge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFyckN1cy5pbmRleE9mKGN1cyk7IC8vIGfhu41uIGjGoW5cclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbnF1ZXVlTW92ZShjdXNOb2RlKSB7XHJcbiAgICAvLyAgICAgdGhpcy5tb3ZlUXVldWUucHVzaChjdXNOb2RlKTtcclxuICAgIC8vICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gcHJvY2Vzc1F1ZXVlKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZykgcmV0dXJuO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLm1vdmVRdWV1ZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8vICAgICBsZXQgY3VzTm9kZSA9IHRoaXMubW92ZVF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAvLyAgICAgdGhpcy5fbW92ZUN1c091dChjdXNOb2RlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBtb3ZlUXVldWUgPSBbXTtcclxuICAgIC8vIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgLy8gX21vdmVDdXNPdXQoY3VzTm9kZSkge1xyXG4gICAgLy8gICAgIGxldCBwbGFjZSA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzTm9kZSk7XHJcblxyXG4gICAgLy8gICAgIGlmIChwbGFjZSA9PT0gLTEpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgIC8vICAgICBsZXQgZmlyc3RDdXMgPSBjdXNOb2RlO1xyXG5cclxuICAgIC8vICAgICAvLyA9PT09PSBTcGF3biBjdXN0b21lciB0aeG6v3AgdGhlbyA9PT09PVxyXG4gICAgLy8gICAgIGxldCBuZXh0Q3VzID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuaXNDb3VudEN1c107XHJcblxyXG4gICAgLy8gICAgIGlmIChuZXh0Q3VzKSB7XHJcbiAgICAvLyAgICAgICAgIG5leHRDdXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG5leHRDdXM7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNDb3VudEN1cysrO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8gPT09PT0gVOG6oW8gY3VzdG9tZXIgbeG7m2kg4bufIGN14buRaSA9PT09PVxyXG4gICAgLy8gICAgIC8vIGxldCBuZXdDdXMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVDdXNbdGhpcy5pc0RlbV0pO1xyXG4gICAgLy8gICAgIC8vIG5ld0N1cy5wYXJlbnQgPSB0aGlzLmxpc3RDdXM7XHJcblxyXG4gICAgLy8gICAgIC8vIGxldCBsYXN0Q3VzID0gdGhpcy5hcnJDdXNbdGhpcy5hcnJDdXMubGVuZ3RoIC0gMV07XHJcbiAgICAvLyAgICAgLy8gbmV3Q3VzLnBvc2l0aW9uID0gbGFzdEN1cy5wb3NpdGlvbi5hZGQoY2MudjMoNjAwLCAwKSk7XHJcblxyXG4gICAgLy8gICAgIC8vIHRoaXMuaXNEZW0gPSAodGhpcy5pc0RlbSArIDEpICUgdGhpcy5saXN0UHJlQ3VzLmxlbmd0aDsgYGBcclxuICAgIC8vICAgICAvLyB0aGlzLmFyckN1cy5wdXNoKG5ld0N1cyk7XHJcblxyXG4gICAgLy8gICAgIC8vID09PT09IE1vdmUgdGjhurFuZyBi4buLIG91dCA9PT09PVxyXG4gICAgLy8gICAgIGZpcnN0Q3VzLnpJbmRleCA9IC0xO1xyXG4gICAgLy8gICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuaXNTdWNjZXNzID0gdHJ1ZVxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKGZpcnN0Q3VzKVxyXG4gICAgLy8gICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgLy8gICAgICAgICAuYnkoMC44ICogKHBsYWNlICsgMSksIHsgcG9zaXRpb246IGNjLnYzKC00MDAgKiAocGxhY2UgKyAxKSwgMCkgfSlcclxuICAgIC8vICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKGZpcnN0Q3VzKVxyXG4gICAgLy8gICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgLy8gICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDAgfSlcclxuICAgIC8vICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgLy8gICAgIC8vID09PT09IE1vdmUgY8OhYyB0aOG6sW5nIHBow61hIHNhdSA9PT09PVxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSBwbGFjZSArIDE7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckN1c1tpXTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKVxyXG4gICAgLy8gICAgICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgIC8vICAgICAgICAgICAgIC5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC00MDAsIDApIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gPT09PT0gUmVtb3ZlIGto4buPaSBt4bqjbmcgPT09PT1cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyQ3VzLnNwbGljZShwbGFjZSwgMSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XHJcblxyXG4gICAgLy8gICAgIH0sIDEuMSk7XHJcblxyXG4gICAgLy8gICAgIC8vID09PT09IFNwYXduIGtoYXkgPT09PT1cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzQ291bnREb25lIDwgNSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zcGF3TmV4dEtoYXkocGxhY2UpO1xyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0sIDAuMyk7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNDb3VudERvbmUgPT0gNSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGZpbmlzaE1vdmUoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpOyAvLyBjaOG6oXkgdGnhur9wIHRo4bqxbmcga+G6vyB0aeG6v3BcclxuICAgIC8vIH1cclxuICAgIC8vIGNoZWNrU3VjY2Vzc0l0ZW0oKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGVjayA9IHRydWVcclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobWlzc2lvbltqXSAhPSAxMDApIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBudWxsKVxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGl0ZW1RdWV1ZTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAvLyBzaHVmZmxlSXRlbSgpIHtcclxuICAgIC8vICAgICB0aGlzLml0ZW1RdWV1ZSA9IFtdO1xyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5pdGVtUXVldWUucHVzaChpKTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIHNodWZmbGUgRmlzaGVyLVlhdGVzXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgIC8vICAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgIC8vICAgICAgICAgW3RoaXMuaXRlbVF1ZXVlW2ldLCB0aGlzLml0ZW1RdWV1ZVtqXV0gPSBbdGhpcy5pdGVtUXVldWVbal0sIHRoaXMuaXRlbVF1ZXVlW2ldXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0TmV4dEl0ZW1JbmRleCgpIHtcclxuXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2h1ZmZsZUl0ZW0oKTsgLy8gdOG6oW8gbMaw4bujdCBt4bubaVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaXRlbVF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gbGFzdEl0ZW1JbmRleDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAvLyBzcGF3bkl0ZW0oKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RSYXkubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMubGFzdEl0ZW1JbmRleFtpXSA9IC0xOyAvLyBjaMawYSBjw7MgaXRlbSB0csaw4bubY1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5zcGF3bkl0ZW1PblJheShpKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3Bhd25JdGVtT25SYXkoaW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgIC8vICAgICBsZXQgbWFnID0gKGluZGV4ID09IDApID8gMTAwMCA6IC0xMDAwO1xyXG5cclxuICAgIC8vICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XHJcblxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XHJcbiAgICAvLyAgICAgfSwgMik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY3JlYXRlSXRlbShpbmRleDogbnVtYmVyLCBtYWc6IG51bWJlcikge1xyXG4gICAgLy8gICAgIGxldCByZCA9IHRoaXMuZ2V0TmV4dEl0ZW1JbmRleCgpO1xyXG4gICAgLy8gICAgIHRoaXMubGFzdEl0ZW1JbmRleFtpbmRleF0gPSByZDtcclxuXHJcbiAgICAvLyAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW3JkXSk7XHJcbiAgICAvLyAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmxpc3RSYXlbaW5kZXhdO1xyXG5cclxuICAgIC8vICAgICB0aGlzLmFyckl0ZW1baW5kZXhdLnB1c2goaXRlbSk7XHJcblxyXG4gICAgLy8gICAgIGl0ZW0ucG9zaXRpb24gPSBjYy52MyhtYWcsIC00MCk7XHJcblxyXG4gICAgLy8gICAgIHRoaXMubW92ZUl0ZW0oaXRlbSwgbWFnKTtcclxuICAgIC8vIH1cclxuICAgIC8vIG1vdmVJdGVtKGl0ZW06IGNjLk5vZGUsIG1hZykge1xyXG4gICAgLy8gICAgIGxldCB0YXJnZXRYID0gLW1hZztcclxuICAgIC8vICAgICBjYy50d2VlbihpdGVtKVxyXG4gICAgLy8gICAgICAgICAudG8oMTcsIHsgeDogdGFyZ2V0WCB9KVxyXG4gICAgLy8gICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pZFNvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuNSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldEdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1ncmF5LXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuXHJcbiAgICB9XHJcbiAgICBvZmZHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgfVxyXG4gICAgLy8gbW92ZUNsb2NrdG9VSShub2RlMSkge1xyXG4gICAgLy8gICAgIHRoaXMubW92ZUl0ZW1Ub1VJKG5vZGUxLCB0aGlzLmJhclRpbWUuY2hpbGRyZW5bMV0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gbW92ZUl0ZW1Ub1VJKG5vZGUxLCBub2RlMikge1xyXG4gICAgLy8gICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdvb2RpbiwgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgbGV0IHBvcyA9IG5vZGUyLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTIucG9zaXRpb24pXHJcbiAgICAvLyAgICAgcG9zID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgLy8gICAgIC8vIHBvcyA9IHBvcy5hZGQoY2MudjMoMCwgMCkpXHJcbiAgICAvLyAgICAgbGV0IHBvczIgPSBub2RlMS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUxLnBvc2l0aW9uKTtcclxuICAgIC8vICAgICBwb3MyID0gdGhpcy5tYWluQ2FtZXJhLmdldFdvcmxkVG9TY3JlZW5Qb2ludChwb3MyKTtcclxuICAgIC8vICAgICBwb3MyID0gdGhpcy51aUNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zMik7XHJcbiAgICAvLyAgICAgcG9zMiA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpLmFkZChjYy52MygwLCAwKSlcclxuICAgIC8vICAgICBub2RlMS5wYXJlbnQgPSB0aGlzLnVpTm9kZTtcclxuICAgIC8vICAgICBub2RlMS5zY2FsZSA9IHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gLyB0aGlzLnVpQ2FtZXJhLnpvb21SYXRpbyAqIDAuN1xyXG4gICAgLy8gICAgIG5vZGUxLnBvc2l0aW9uID0gcG9zMlxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKG5vZGUxKS50bygwLjQsIHsgcG9zaXRpb246IHBvcywgc2NhbGU6IDAuNCB9KS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgbm9kZTEuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5taXNzaW9uQmFyLmdldENvbXBvbmVudChcInVwZGF0ZUJhclwiKS51cGRhdGVCYXIoKTtcclxuICAgIC8vICAgICAgICAgLy8gd29vZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZXhwXCIpXHJcbiAgICAvLyAgICAgICAgIC8vIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdvb2RPdXQsIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIH0pLnN0YXJ0KClcclxuICAgIC8vIH1cclxuICAgIGlzRW5kR2FtZSA9IGZhbHNlXHJcbiAgICBvbkVuZEdhbWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IHRydWVcclxuICAgICAgICB0aGlzLndhcm5pbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJUaW1lLmdldENvbXBvbmVudChcImJhclRpbWVcIikuZW5kR2FtZSgpXHJcbiAgICAgICAgICAgIHRoaXMuYW1hemluZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5lbmRDYXJkV2luKSB0aGlzLmVuZENhcmRXaW4uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB9LCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyVGltZS5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFyckN1cykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCI2LmFuZ3J5XCIsIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgICAgIHRoaXMudGltZXVwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5raW5nLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvc2UsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICBpc0RvYyA9IGZhbHNlXHJcbiAgICAvLyB1cGRhdGUoZHQpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxyXG4gICAgLy8gICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgIC8vICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHVwZGF0ZVJlc3BvbnNpdmUoKSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFyclBvc01lbnVOZ2FuZyA9IFtjYy52MygtMzkxLCAtMTAyKSwgY2MudjMoMzc1LCAtMTEyKSwgY2MudjMoMTE0LCAtMTIwKSwgY2MudjMoLTQwOSwgLTI4NCksIGNjLnYzKC0xNTgsIC0yOTYpLCBjYy52MygxMTgsIC0yODApLCBjYy52MygzOTAsIC0yOTYpLCBjYy52MygtMTM3LCAtMTE2KV07XHJcbiAgICBhcnJQb3NEb2MgPSBbY2MudjMoMjYsIC0zMzcpLCBjYy52MygzMzYsIC0xMTIpLCBjYy52MygxNS41LCAtMTIxKSwgY2MudjMoLTE3MCwgLTUyNS43KSwgY2MudjMoLTMwMCwgLTM1MiksIGNjLnYzKDE4Ni45NiwgLTUxMiksIGNjLnYzKDM1NSwgLTMzNSksIGNjLnYzKC0yOTIsIC0xMTYpXVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjg1XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5iYXJDb2luLnNjYWxlID0gKGxvZ2ljKSA/IDIuNSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAobG9naWMpID8gMjEwIDogMTAwXHJcbiAgICAgICAgdGhpcy5waGFvSG9hLnNjYWxlID0gKGxvZ2ljKSA/IDkgOiA1XHJcbiAgICAgICAgdGhpcy5ndWlsZC5zY2FsZSA9IChsb2dpYykgPyAyIDogMS4yXHJcbiAgICAgICAgdGhpcy5ndWlsZC5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtOTAwKSA6IGNjLnYzKDAsIC0zNjApXHJcbiAgICAgICAgdGhpcy5saXN0Q3VzLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxXHJcbiAgICAgICAgdGhpcy5saXN0S2hheS5zY2FsZSA9IChsb2dpYykgPyAxLjEgOiAxXHJcbiAgICAgICAgdGhpcy50aW1ldXAuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYW1hemluZy5zY2FsZSA9IChsb2dpYykgPyAxIDogMS40XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkRG9jLnNjYWxlID0gMS41XHJcbiAgICAgICAgdGhpcy5ub3RpTWlzc2lvbi5zY2FsZSA9IChsb2dpYykgPyAyIDogMVxyXG4gICAgICAgIC8vIHRoaXMudHV0TWlzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgdGhpcy5iYXJNaXNzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMS44IDogMVxyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIDAsIDApIDogY2MudjMoMCwgMTEwLCAwKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLmFjdGl2ZSA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjdcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMDBcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuMlxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjg1XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==