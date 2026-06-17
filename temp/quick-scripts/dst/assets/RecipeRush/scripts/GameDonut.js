
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
        _this.listPreCUs = [];
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
        _this.preCusIndex = 0;
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
                _this.notiMission.active =
                    _this.barMission.getComponent("barTime").countDown();
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
    NewClass.prototype.spawnCustomerFromPrefab = function () {
        if (this.listPreCUs.length === 0)
            return null;
        var prefab = this.listPreCUs[this.preCusIndex % this.listPreCUs.length];
        this.preCusIndex++;
        var newCus = cc.instantiate(prefab);
        newCus.parent = this.listCus;
        newCus.active = false;
        return newCus;
    };
    NewClass.prototype.replaceCustomer = function (departedCus, counterPos) {
        var _this = this;
        var idx = this.arrCus.indexOf(departedCus);
        var newCus = this.spawnCustomerFromPrefab();
        if (!newCus)
            return;
        var newCusComp = newCus.getComponent("cusMission");
        if (newCusComp) {
            newCusComp.gamePlay = this;
            newCusComp.isReadyForSell = false;
        }
        if (this.sellTargetCus === departedCus || this.isTargetCus === departedCus) {
            this.sellTargetCus = null;
            this.sellTraySlot = -1;
        }
        this.isMoving = false;
        if (this.mcComp) {
            this.mcComp.unscheduleAllCallbacks();
        }
        if (idx >= 0) {
            this.arrCus[idx] = newCus;
        }
        else {
            this.arrCus.push(newCus);
        }
        departedCus.destroy();
        var spawnPos = counterPos.clone().add(this.cusEnterOffset);
        var distance = spawnPos.sub(counterPos).mag();
        var duration = distance / this.cusWalkSpeed;
        cc.Tween.stopAllByTarget(newCus);
        newCus.position = spawnPos;
        newCus.active = true;
        newCusComp.move();
        cc.tween(newCus)
            .to(duration, { position: counterPos })
            .call(function () {
            newCusComp.showMission();
            _this.isTargetCus = newCus;
        })
            .start();
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
    NewClass.prototype.isMcBusy = function () {
        return this.isMoving || (this.mcComp && this.mcComp.isWalking());
    };
    NewClass.prototype.btn_chicken = function () {
        var _this = this;
        if (this.isMcBusy())
            return;
        if (!this.isFistClickChicken) {
            this.isFistClickChicken = true;
            this.scheduleOnce(function () {
                _this.btnMachine.getChildByName("hind").active = true;
            }, 2);
        }
        if (!this.mcComp.canPickMoreChicken())
            return;
        this.isMoving = true;
        this.btnChicken.getChildByName("hind").opacity = 0;
        this.mcComp.moveToChicken();
    };
    NewClass.prototype.btn_mayChien = function () {
        if (this.isMcBusy())
            return;
        var machineComp = this.btnMachine.getComponent("machine");
        var canFry = this.mcComp.getRawTraySlot() >= 0 && machineComp.chicken == null;
        var canPickup = (this.mcComp.localId == 1 || this.mcComp.localId == 2 || this.mcComp.localId == 3 || this.mcComp.localId == 4 || this.mcComp.localId == 5) && machineComp.chicken != null && this.mcComp.canPickItemType("chicken");
        if (!canFry && !canPickup)
            return;
        this.isMoving = true;
        this.btnMachine.getChildByName("hind").active = false;
        this.btnMachine.getChildByName("hind").opacity = 0;
        this.mcComp.moveToMachine();
    };
    NewClass.prototype.btn_cola = function () {
        if (this.isMcBusy())
            return;
        this.isMoving = true;
        this.mcComp.moveToCoca();
    };
    NewClass.prototype.btn_sauce = function () {
        if (this.isMcBusy())
            return;
        if (!this.mcComp.hasAnyItem() || this.mcComp.findCookedTraySlot() < 0)
            return;
        this.isMoving = true;
        this.mcComp.moveToSauce();
    };
    NewClass.prototype.btn_cake = function () {
        console.log(this.isMoving);
        if (this.isMcBusy())
            return;
        this.isMoving = true;
        this.mcComp.moveToCake();
    };
    NewClass.prototype.btn_tomato = function () {
        if (this.isMcBusy())
            return;
        this.isMoving = true;
        this.mcComp.moveToTomato();
    };
    NewClass.prototype.getCusTrayIndex = function (cusNode) {
        return this.arrCus.indexOf(cusNode);
    };
    NewClass.prototype.checkSell = function (targetCus) {
        console.log("check sell Main");
        var cus = targetCus || this.sellTargetCus || this.isTargetCus || this.arrCus[0];
        if (this.isMcBusy() || !cus)
            return false;
        var cusComp = cus.getComponent("cusMission");
        if (!cusComp || cusComp.isSuccess || !cusComp.isReadyForSell)
            return false;
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
        if (!cusComp || cusComp.isSuccess || !cusComp.isReadyForSell) {
            this.isMoving = false;
            this.sellTraySlot = -1;
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
        this.barMission2.scale = (logic) ? 2 : 1;
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
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "listPreCUs", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcR2FtZURvbnV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0FBRXZCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaXJDQztRQS9xQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUl4QixnQkFBVSxHQUFjLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWMsSUFBSSxDQUFBO1FBRTFCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGNBQVEsR0FBZ0IsRUFBRSxDQUFBO1FBRTFCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixjQUFRLEdBQWlCLElBQUksQ0FBQTtRQUU3QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixnQkFBVSxHQUFnQixFQUFFLENBQUE7UUFJNUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLEtBQUs7UUFFTCxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixLQUFLO1FBRUwsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGdCQUFVLEdBQWEsRUFBRSxDQUFBO1FBQ3pCLFlBQU0sR0FBRyxJQUFJLENBQUE7UUFFYixxQkFBcUI7UUFDckIsNEJBQTRCO1FBQzVCLFlBQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3JDLFlBQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBR3JDLGFBQU8sR0FBRyxDQUFDLENBQUE7UUFFWCxpQkFBVyxHQUFHLEVBQUUsQ0FBQTtRQUVoQixnQkFBVSxHQUFHLEtBQUssQ0FBQTtRQUNsQixlQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLHFCQUFlLEdBQUcsS0FBSyxDQUFBO1FBQ3ZCLG9CQUFjLEdBQUcsS0FBSyxDQUFBO1FBR3RCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGFBQWE7UUFDYixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixjQUFRLEdBQUcsOEJBQThCLENBQUE7UUFDekMsY0FBUSxHQUFHLENBQUMsQ0FBQTtRQUNaLGtCQUFZLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLGFBQU8sR0FBRyxJQUFJLENBQUE7UUFDZCxZQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ1Ysc0ZBQXNGO1FBQ3RGLFVBQUksR0FBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFHLHFCQUFxQjtRQUN4RCxZQUFNLEdBQVcsR0FBRyxDQUFDLENBQWMsd0JBQXdCO1FBQzNELGFBQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNsQixhQUFPLEdBQUcsRUFBRSxDQUFBO1FBQ1osc0JBQWdCLEdBQUcsRUFBRSxDQUFBO1FBQ3JCLFlBQU0sR0FBRyxFQUFFLENBQUE7UUFDWCxtQkFBYSxHQUFHLElBQUksQ0FBQTtRQUNwQixrQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2pCLG1CQUFhLEdBQUcsSUFBSSxDQUFBO1FBQ3BCLGdCQUFVLEdBQUcsR0FBRyxDQUFBO1FBQ2hCLG9CQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLGtCQUFZLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLHFCQUFlLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLGlCQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ2YsaUJBQVcsR0FBRyxLQUFLLENBQUE7UUFDbkIsa0JBQVksR0FBRyxLQUFLLENBQUE7UUF1QnBCLFlBQU0sR0FBRyxJQUFJLENBQUE7UUFzSWIsY0FBUSxHQUFHLEtBQUssQ0FBQTtRQUNoQixZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2Qsd0JBQWtCLEdBQUcsS0FBSyxDQUFBO1FBdXJCMUIseUJBQXlCO1FBQ3pCLDBEQUEwRDtRQUMxRCxJQUFJO1FBQ0osK0JBQStCO1FBQy9CLHlEQUF5RDtRQUN6RCxtRUFBbUU7UUFDbkUsa0RBQWtEO1FBQ2xELG9DQUFvQztRQUNwQyxxRUFBcUU7UUFDckUsMERBQTBEO1FBQzFELHdEQUF3RDtRQUN4RCxxRUFBcUU7UUFDckUsa0NBQWtDO1FBQ2xDLDhFQUE4RTtRQUM5RSw0QkFBNEI7UUFDNUIsMEVBQTBFO1FBQzFFLCtCQUErQjtRQUMvQixvRUFBb0U7UUFDcEUseURBQXlEO1FBQ3pELGlFQUFpRTtRQUNqRSxpQkFBaUI7UUFDakIsSUFBSTtRQUNKLGVBQVMsR0FBRyxLQUFLLENBQUE7UUFtQ2pCLDZCQUE2QjtRQUM3QixXQUFLLEdBQUcsS0FBSyxDQUFBO1FBbUJiLHFCQUFlLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZLLGVBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBOztJQXVGeEssQ0FBQztJQTEvQkcsMENBQTBDO0lBQzFDLHlCQUFNLEdBQU47UUFB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SSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDckMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUN6QyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUUzRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7WUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7U0FDbEQ7UUFDRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFFZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUNqQixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxzREFBc0Q7WUFDdEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdEUsbUNBQW1DO1lBQ25DLElBQU0scUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVM7WUFDbEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBVSxTQUFTO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtZQUUzQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsU0FBUyxFQUFFO2dCQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTthQUdqRDtpQkFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxHQUFHLFNBQVMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2dCQUUzQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7YUFFOUI7aUJBQ0k7YUFFSjtTQUNKO2FBQ0k7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtZQUVsQixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUVoQyxzREFBc0Q7WUFDdEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdEUsbUNBQW1DO1lBQ25DLElBQU0scUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVM7WUFDbEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBVSxTQUFTO1lBRWpELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsR0FBRyxTQUFTLEVBQUU7YUFFOUQ7aUJBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsR0FBRyxTQUFTLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTthQUcvQjtTQUNKO0lBR0wsQ0FBQztJQTlxQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ0s7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ007SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNTO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDWTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1k7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUl4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs4Q0FDSTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0RBQ007SUFJNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDSztJQTNJUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaXJDNUI7SUFBRCxlQUFDO0NBanJDRCxBQWlyQ0MsQ0FqckNxQyxFQUFFLENBQUMsU0FBUyxHQWlyQ2pEO2tCQWpyQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5jb2luID0gMFxyXG5nbG9iYWxUaGlzLkdhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kT2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRFbmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTZWxsRG9uZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5raW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hlcnJ5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3JlYW1NaW5pOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmFuaDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkV2luOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIHVpQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyVGltZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhckNvaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2hlY2tJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBoYW9Ib2E6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd2FybmluZzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpbGQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdEl0ZW06IGNjLlByZWZhYltdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFJheTogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RLaGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVLaGF5OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFJheU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpbWV1cDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYW1hemluZzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBub3RpQ29pbjogY2MuQW5pbWF0aW9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub3RpTWlzc2lvbjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RQcmVDdXM6IGNjLlByZWZhYltdID0gW11cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0TWVudTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmR0dXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kdHV0MjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmR0dXQzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ29pbjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkRG9jOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vbmV3XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RCZXA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0RGlhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQmFuaDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyTWlzc2lvbjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyTWlzc2lvbjI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvL2J0blxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5DaGlja2VuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuTWFjaGluZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNvY2E6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5DYWtlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuUG90YXRvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaW5kMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbGlzdFByZUNVczpjYy5QcmVmYWJbXT1bXVxyXG4gICAgbWNDb21wID0gbnVsbFxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gdHV0TWlzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYXJyQmVwID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG4gICAgYXJyRGlhID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG5cclxuXHJcbiAgICBtYXhLaGF5ID0gN1xyXG5cclxuICAgIGFyckRvbnV0cG9zID0gW11cclxuXHJcbiAgICBpc1R1dENoaWxpID0gZmFsc2VcclxuICAgIGlzVHV0TWVhdCA9IGZhbHNlXHJcbiAgICBpc1R1dFZlZ2V0VGFibGUgPSBmYWxzZVxyXG4gICAgaXNUdXRDbGlja01lYXQgPSBmYWxzZVxyXG5cclxuXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICAvLyBpc1N0ZXAgPSAwXHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBtYXhDdXN0b21lcnMgPSA2XHJcbiAgICBpZFNvdW5kID0gbnVsbFxyXG4gICAgaXNTdGVwID0gMFxyXG4gICAgLy9pdGVtOiAwOmJ1Z2VyLCAxOiBrZW0gMjpkb251dCAzOmtob2FpdGF5IDQ6cGhvIDU6IHB1ZGRpbmcgNjogdHJhICA3OmJhbmhtaSA4OmNvY29udXRcclxuICAgIHJheVk6IG51bWJlcltdID0gWzEyMCwgMCwgLTEyMF07ICAgLy8gduG7iyB0csOtIFkgY+G7p2EgMyByYXlcclxuICAgIHNwYXduWDogbnVtYmVyID0gNzAwOyAgICAgICAgICAgICAgLy8gduG7iyB0csOtIHNwYXduIGLDqm4gcGjhuqNpXHJcbiAgICBhcnJJdGVtID0gW1tdLCBbXV1cclxuICAgIGFycktoYXkgPSBbXVxyXG4gICAgYXJyVGFyZ2V0TWlzc2lvbiA9IFtdXHJcbiAgICBhcnJDdXMgPSBbXVxyXG4gICAgc2VsbFRhcmdldEN1cyA9IG51bGxcclxuICAgIHNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICBjdXNDb3VudGVyUG9zID0gbnVsbFxyXG4gICAgY3VzU2xvdEdhcCA9IDUwMFxyXG4gICAgY3VzRW50ZXJPZmZzZXQgPSBjYy52MygzNTAsIDAsIDApXHJcbiAgICBjdXNXYWxrU3BlZWQgPSA0MzcuNVxyXG4gICAgY291bnRlckN1c0NvdW50ID0gMFxyXG4gICAgcHJlQ3VzSW5kZXggPSAwXHJcbiAgICBpc1N0YXJ0Z2FtZSA9IGZhbHNlXHJcbiAgICBpc0ZpcnN0Q2xpY2sgPSBmYWxzZVxyXG4gICAgLy8wOmJhbmggdGh1b25nIDE6Y2hvY29sYXRlIDI6IHN0cmF3YmVycnkgXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub3RpTWlzc2lvbikuYnkoMC40LCB7IG9wYWNpdHk6IC0yNTUsIHBvc2l0aW9uOiBjYy52MygwLCAyMDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpTWlzc2lvbi5hY3RpdmUgPSBcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmNvdW50RG93bigpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIHRoaXMubWNDb21wID0gdGhpcy5tYy5nZXRDb21wb25lbnQoXCJtY1wiKVxyXG4gICAgfVxyXG4gICAgaXNIYW5kID0gbnVsbFxyXG5cclxuICAgIGluaXRDdXNRdWV1ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY3VzQ291bnRlclBvcyAmJiB0aGlzLmFyckN1cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzQ291bnRlclBvcyA9IHRoaXMuYXJyQ3VzWzBdLnBvc2l0aW9uLmNsb25lKCkuc3ViKHRoaXMuY3VzRW50ZXJPZmZzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1c0NvdW50ZXJQb3Moc2xvdDogbnVtYmVyLCB0b3RhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Q3VzUXVldWUoKVxyXG4gICAgICAgIGlmICh0b3RhbCA8PSAxKSByZXR1cm4gdGhpcy5jdXNDb3VudGVyUG9zLmNsb25lKClcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IChzbG90IC0gKHRvdGFsIC0gMSkgLyAyKSAqIHRoaXMuY3VzU2xvdEdhcFxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1c0NvdW50ZXJQb3MuY2xvbmUoKS5hZGQoY2MudjMob2Zmc2V0WCwgMCwgMCkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvdW50ZXJNaXNzaW9ucyhjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudCAmJiBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbaV0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5zaG93TWlzc2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVudGVyQ3VzdG9tZXJzKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJDdXNDb3VudCA9IGNvdW50XHJcbiAgICAgICAgbGV0IGFyclBvcyA9IFtjYy52MygwLCAwLCAwKV1cclxuICAgICAgICBpZiAoY291bnQgPT0gMikge1xyXG4gICAgICAgICAgICBhcnJQb3MgPSBbY2MudjMoLTI4NSwgMCwgMCksIGNjLnYzKDg4LCAwLCAwKV1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY291bnQgPT0gMykge1xyXG4gICAgICAgICAgICBhcnJQb3MgPSBbY2MudjMoLTQ0MywgMCwgMCksIGNjLnYzKC03MywgMCwgMCksIGNjLnYzKDI3MywgMCwgMCldXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtYXhEdXJhdGlvbiA9IDBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ICYmIGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgLy8gbGV0IHRhcmdldFBvcyA9IHRoaXMuZ2V0Q3VzQ291bnRlclBvcyhpLCBjb3VudClcclxuICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IGFyclBvc1tpXVxyXG5cclxuICAgICAgICAgICAgbGV0IHNwYXduUG9zID0gdGFyZ2V0UG9zLmNsb25lKCkuYWRkKHRoaXMuY3VzRW50ZXJPZmZzZXQpXHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHNwYXduUG9zLnN1Yih0YXJnZXRQb3MpLm1hZygpXHJcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gdGhpcy5jdXNXYWxrU3BlZWRcclxuICAgICAgICAgICAgbWF4RHVyYXRpb24gPSBNYXRoLm1heChtYXhEdXJhdGlvbiwgZHVyYXRpb24pXHJcblxyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY3VzKVxyXG4gICAgICAgICAgICBjdXMucG9zaXRpb24gPSBzcGF3blBvc1xyXG4gICAgICAgICAgICBjdXMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5tb3ZlKClcclxuICAgICAgICAgICAgY2MudHdlZW4oY3VzKVxyXG4gICAgICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHBvc2l0aW9uOiB0YXJnZXRQb3MgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvdW50ZXJNaXNzaW9ucyhjb3VudClcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAxICYmIHRoaXMuYXJyQ3VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSB0aGlzLmFyckN1c1swXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgbWF4RHVyYXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW50ZXJDb3VudEZvcldhdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPT09IDEpIHJldHVybiAyXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPT09IDMpIHJldHVybiAzXHJcbiAgICAgICAgcmV0dXJuIDFcclxuICAgIH1cclxuXHJcbiAgICBzcGF3bkN1c3RvbWVyRnJvbVByZWZhYigpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAodGhpcy5saXN0UHJlQ1VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcclxuICAgICAgICBsZXQgcHJlZmFiID0gdGhpcy5saXN0UHJlQ1VzW3RoaXMucHJlQ3VzSW5kZXggJSB0aGlzLmxpc3RQcmVDVXMubGVuZ3RoXVxyXG4gICAgICAgIHRoaXMucHJlQ3VzSW5kZXgrK1xyXG4gICAgICAgIGxldCBuZXdDdXMgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpXHJcbiAgICAgICAgbmV3Q3VzLnBhcmVudCA9IHRoaXMubGlzdEN1c1xyXG4gICAgICAgIG5ld0N1cy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiBuZXdDdXNcclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlQ3VzdG9tZXIoZGVwYXJ0ZWRDdXM6IGNjLk5vZGUsIGNvdW50ZXJQb3M6IGNjLlZlYzMpIHtcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5hcnJDdXMuaW5kZXhPZihkZXBhcnRlZEN1cylcclxuXHJcbiAgICAgICAgbGV0IG5ld0N1cyA9IHRoaXMuc3Bhd25DdXN0b21lckZyb21QcmVmYWIoKVxyXG4gICAgICAgIGlmICghbmV3Q3VzKSByZXR1cm5cclxuXHJcbiAgICAgICAgbGV0IG5ld0N1c0NvbXAgPSBuZXdDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKVxyXG4gICAgICAgIGlmIChuZXdDdXNDb21wKSB7XHJcbiAgICAgICAgICAgIG5ld0N1c0NvbXAuZ2FtZVBsYXkgPSB0aGlzXHJcbiAgICAgICAgICAgIG5ld0N1c0NvbXAuaXNSZWFkeUZvclNlbGwgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsbFRhcmdldEN1cyA9PT0gZGVwYXJ0ZWRDdXMgfHwgdGhpcy5pc1RhcmdldEN1cyA9PT0gZGVwYXJ0ZWRDdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxsVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLnNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm1jQ29tcCkge1xyXG4gICAgICAgICAgICB0aGlzLm1jQ29tcC51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1tpZHhdID0gbmV3Q3VzXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMucHVzaChuZXdDdXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlcGFydGVkQ3VzLmRlc3Ryb3koKVxyXG5cclxuICAgICAgICBsZXQgc3Bhd25Qb3MgPSBjb3VudGVyUG9zLmNsb25lKCkuYWRkKHRoaXMuY3VzRW50ZXJPZmZzZXQpXHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gc3Bhd25Qb3Muc3ViKGNvdW50ZXJQb3MpLm1hZygpXHJcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gZGlzdGFuY2UgLyB0aGlzLmN1c1dhbGtTcGVlZFxyXG5cclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobmV3Q3VzKVxyXG4gICAgICAgIG5ld0N1cy5wb3NpdGlvbiA9IHNwYXduUG9zXHJcbiAgICAgICAgbmV3Q3VzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBuZXdDdXNDb21wLm1vdmUoKVxyXG4gICAgICAgIGNjLnR3ZWVuKG5ld0N1cylcclxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHBvc2l0aW9uOiBjb3VudGVyUG9zIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld0N1c0NvbXAuc2hvd01pc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG5ld0N1c1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgb25IaW5kKCkge1xyXG4gICAgICAgIHRoaXMuaGluZDEuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmluaXRDdXNRdWV1ZSgpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1tpXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVudGVyQ3VzdG9tZXJzKDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RDbGljayA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2hpY2tlbi5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMylcclxuICAgIH1cclxuICAgIGlzTW92aW5nID0gZmFsc2VcclxuICAgIGlzRmlzdCA9IGZhbHNlXHJcbiAgICBpc0Zpc3RDbGlja0NoaWNrZW4gPSBmYWxzZVxyXG5cclxuICAgIGlzTWNCdXN5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTW92aW5nIHx8ICh0aGlzLm1jQ29tcCAmJiB0aGlzLm1jQ29tcC5pc1dhbGtpbmcoKSlcclxuICAgIH1cclxuXHJcbiAgICBidG5fY2hpY2tlbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlzdENsaWNrQ2hpY2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmlzdENsaWNrQ2hpY2tlbiA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuY2FuUGlja01vcmVDaGlja2VuKCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuQ2hpY2tlbi5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQ2hpY2tlbigpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bl9tYXlDaGllbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG1hY2hpbmVDb21wID0gdGhpcy5idG5NYWNoaW5lLmdldENvbXBvbmVudChcIm1hY2hpbmVcIilcclxuICAgICAgICBsZXQgY2FuRnJ5ID0gdGhpcy5tY0NvbXAuZ2V0UmF3VHJheVNsb3QoKSA+PSAwICYmIG1hY2hpbmVDb21wLmNoaWNrZW4gPT0gbnVsbFxyXG4gICAgICAgIGxldCBjYW5QaWNrdXAgPSAodGhpcy5tY0NvbXAubG9jYWxJZCA9PSAxIHx8IHRoaXMubWNDb21wLmxvY2FsSWQgPT0gMiB8fCB0aGlzLm1jQ29tcC5sb2NhbElkID09IDMgfHwgdGhpcy5tY0NvbXAubG9jYWxJZCA9PSA0IHx8IHRoaXMubWNDb21wLmxvY2FsSWQgPT0gNSkgJiYgbWFjaGluZUNvbXAuY2hpY2tlbiAhPSBudWxsICYmIHRoaXMubWNDb21wLmNhblBpY2tJdGVtVHlwZShcImNoaWNrZW5cIilcclxuICAgICAgICBpZiAoIWNhbkZyeSAmJiAhY2FuUGlja3VwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9NYWNoaW5lKClcclxuICAgIH1cclxuICAgIGJ0bl9jb2xhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0NvY2EoKVxyXG4gICAgfVxyXG4gICAgYnRuX3NhdWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMubWNDb21wLmhhc0FueUl0ZW0oKSB8fCB0aGlzLm1jQ29tcC5maW5kQ29va2VkVHJheVNsb3QoKSA8IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb1NhdWNlKClcclxuICAgIH1cclxuICAgIGJ0bl9jYWtlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNNb3ZpbmcpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQ2FrZSgpXHJcbiAgICB9XHJcbiAgICBidG5fdG9tYXRvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb1RvbWF0bygpXHJcbiAgICB9XHJcbiAgICBnZXRDdXNUcmF5SW5kZXgoY3VzTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyckN1cy5pbmRleE9mKGN1c05vZGUpXHJcbiAgICB9XHJcbiAgICBjaGVja1NlbGwodGFyZ2V0Q3VzPzogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgc2VsbCBNYWluXCIpXHJcbiAgICAgICAgbGV0IGN1cyA9IHRhcmdldEN1cyB8fCB0aGlzLnNlbGxUYXJnZXRDdXMgfHwgdGhpcy5pc1RhcmdldEN1cyB8fCB0aGlzLmFyckN1c1swXVxyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkgfHwgIWN1cykgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKVxyXG4gICAgICAgIGlmICghY3VzQ29tcCB8fCBjdXNDb21wLmlzU3VjY2VzcyB8fCAhY3VzQ29tcC5pc1JlYWR5Rm9yU2VsbCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IHRyYXlJZHggPSB0aGlzLm1jQ29tcC5maW5kVHJheUZvckN1c3RvbWVyKGN1c0NvbXApXHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5oYXNBbnlJdGVtKCkgfHwgdHJheUlkeCA8IDApIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2VsbFRhcmdldEN1cyA9IGN1c1xyXG4gICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gdHJheUlkeFxyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBjdXNcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0J1eSgpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHZhbGlkYXRlU2VsbEF0Q291bnRlcigpIHtcclxuICAgICAgICBsZXQgY3VzID0gdGhpcy5zZWxsVGFyZ2V0Q3VzIHx8IHRoaXMuaXNUYXJnZXRDdXMgfHwgdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICBpZiAoIWN1cykge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgY3VzQ29tcC5pc1N1Y2Nlc3MgfHwgIWN1c0NvbXAuaXNSZWFkeUZvclNlbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gLTFcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1c0NvbXAudmFsaWRhdGVTZWxsKClcclxuICAgIH1cclxuICAgIG5leHRDdXModmFsdWU6IGJvb2xlYW4sIGRlcGFydGVkQ3VzPzogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmIChkZXBhcnRlZEN1cykge1xyXG4gICAgICAgICAgICBsZXQgaWR4ID0gdGhpcy5hcnJDdXMuaW5kZXhPZihkZXBhcnRlZEN1cylcclxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB0aGlzLmFyckN1cy5zcGxpY2UoaWR4LCAxKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hcnJDdXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5zcGxpY2UoMCwgMSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY291bnRDdXMrK1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2FrZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idG5Qb3RhdG8uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY291bnRDdXMgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmJhck1pc3Npb24yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYmFyTWlzc2lvbjIpLmJ5KDAuNCwgeyBvcGFjaXR5OiAtMjU1LCBwb3NpdGlvbjogY2MudjMoMCwgMjAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhck1pc3Npb24yLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2VsbFRhcmdldEN1cyA9IG51bGxcclxuICAgICAgICB0aGlzLnNlbGxUcmF5U2xvdCA9IC0xXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID49IHRoaXMubWF4Q3VzdG9tZXJzIHx8IHRoaXMuYXJyQ3VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3YXNHcm91cEF0Q291bnRlciA9IHRoaXMuY291bnRlckN1c0NvdW50ID4gMVxyXG4gICAgICAgIGlmICh3YXNHcm91cEF0Q291bnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXJDdXNDb3VudC0tXHJcbiAgICAgICAgICAgIHRoaXMubWNDb21wLmFmdGVyQ3VzdG9tZXJMZWZ0KClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgIHRoaXMubWNDb21wLnJlc2V0VG9TdGFydCgpXHJcblxyXG4gICAgICAgIGxldCBlbnRlckNvdW50ID0gdGhpcy5nZXRFbnRlckNvdW50Rm9yV2F2ZSgpXHJcbiAgICAgICAgdGhpcy5lbnRlckN1c3RvbWVycyhlbnRlckNvdW50KVxyXG4gICAgfVxyXG4gICAgLy8gaXNGaXJzdENsaWNrYmFuaCA9IGZhbHNlXHJcbiAgICAvLyBpc0ZyaXN0ID0gZmFsc2VcclxuXHJcblxyXG4gICAgLy8gYnRuX2JhbmgoKSB7XHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLmlzRnJpc3QpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0ZyaXN0ID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICB0aGlzLmlzRmlyc3RDbGljayA9IHRydWVcclxuICAgIC8vICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2tiYW5oKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzRmlyc3RDbGlja2JhbmggPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmhhbmR0dXQyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgfSwgMilcclxuICAgIC8vICAgICBsZXQgY2hlY2sgPSB0aGlzLmdldFNsb3RCZXAoKTtcclxuICAgIC8vICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckJlcFtjaGVja10gPSB0cnVlOztcclxuICAgIC8vICAgICAgICAgdGhpcy5saXN0QmVwLmNoaWxkcmVuW2NoZWNrXS5nZXRDb21wb25lbnQoXCJCYW5oXCIpLnNldE9uKClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpc0ZpcnN0U3RlcCA9IGZhbHNlXHJcbiAgICAvLyBidG5fYmVwKHRhZykge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICB0aGlzLmhhbmR0dXQyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLmlzRmlyc3RTdGVwKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaGFuZHR1dDMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzRmlyc3RTdGVwID0gdHJ1ZVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBsZXQgY2hlY2sgPSB0aGlzLmdldFNsb3REaWEoKTtcclxuICAgIC8vICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckRpYVtjaGVja10gPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdERpYS5jaGlsZHJlbltjaGVja10uZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmdldEJhbmgoKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXRTbG90QmVwKCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJCZXAubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJCZXBbaV1cclxuICAgIC8vICAgICAgICAgaWYgKGNoaWxkID09IGZhbHNlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBudWxsXHJcbiAgICAvLyB9XHJcbiAgICAvLyBnZXRTbG90RGlhKCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEaWEubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0RGlhLmNoaWxkcmVuW2ldXHJcbiAgICAvLyAgICAgICAgIGlmIChjaGlsZC5nZXRDb21wb25lbnQoXCJEaWFcIikuaXNCYW5oID09IGZhbHNlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBudWxsXHJcbiAgICAvLyB9XHJcbiAgICAvLyBidG5fc3RyYXdCZXJyeSgpIHtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEaWEubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgLy8gbGV0IGNoZWNrID0gdGhpcy5hcnJEaWFbaV07XHJcbiAgICAvLyAgICAgICAgIGxldCBiYW5oID0gdGhpcy5saXN0RGlhLmNoaWxkcmVuW2ldO1xyXG4gICAgLy8gICAgICAgICBpZiAoYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc3RhdHVzID09IDAgJiYgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuaXNCYW5oID09IHRydWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaGFuZHR1dDMuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zZXRTdGF0dXMoMilcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gYnRuX2Nob2NvbGF0ZSgpIHtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEaWEubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgLy8gbGV0IGNoZWNrID0gdGhpcy5hcnJEaWFbaV07XHJcbiAgICAvLyAgICAgICAgIGxldCBiYW5oID0gdGhpcy5saXN0RGlhLmNoaWxkcmVuW2ldO1xyXG4gICAgLy8gICAgICAgICBpZiAoYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc3RhdHVzID09IDAgJiYgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuaXNCYW5oID09IHRydWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaGFuZHR1dDMuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zZXRTdGF0dXMoMSlcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gYnRuX2NyZWFtKCkge1xyXG5cclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBpc0ZseWluZyA9IGZhbHNlXHJcbiAgICAvLyBidG5fc2VsbChpdGVtLCB0YWcpIHtcclxuICAgIC8vICAgICAvLyBpZih0aGlzLmlzTW92aW5nKXJldHVybjtcclxuICAgIC8vICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrTWlzc2lvbih0YWcsIGl0ZW0pO1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICBsZXQgbWFnID0gNTBcclxuICAgIC8vICAgICBsZXQgc3RhcnRQb3MgPSBjYy52MihpdGVtLngsIGl0ZW0ueSk7XHJcbiAgICAvLyAgICAgbGV0IGVuZFBvcyA9IHRoaXMuYXJyQ3VzWzBdLmdldENoaWxkQnlOYW1lKFwiYnViYmxlc1wiKS5wb3NpdGlvbi5hZGQoY2MudjMoLTMwLCAxMjApKVxyXG4gICAgLy8gICAgIGxldCBtaWRQb3MgPSBjYy52MihlbmRQb3MueCArIG1hZywgZW5kUG9zLnkgKyAyMDApO1xyXG5cclxuICAgIC8vICAgICBsZXQgYmFuaCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQmFuaCk7XHJcbiAgICAvLyAgICAgYmFuaC5wYXJlbnQgPSBpdGVtLnBhcmVudDtcclxuICAgIC8vICAgICBiYW5oLnBvc2l0aW9uID0gY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcbiAgICAvLyAgICAgYmFuaC5nZXRDb21wb25lbnQoXCJJdGVtXCIpLmxvYWRJdGVtKHRhZylcclxuXHJcbiAgICAvLyAgICAgY2MudHdlZW4oYmFuaCkudG8oMC4yLCB7IHNjYWxlOiAxLjIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICBjYy50d2VlbihiYW5oKS5iZXppZXJUbygwLjQsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kT2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJDdXNbdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVswXV0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5kb25lTm9kZS5jaGlsZHJlblt0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlWzFdXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmFuZ3J5KClcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgYmFuaC5kZXN0cm95KClcclxuICAgIC8vICAgICB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgLy8gfVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzcGF3S2hheShtaXNzaW9uKSB7XHJcbiAgICAvLyAgICAgbGV0IGFyciA9IFtjYy52MygtNjAsIC0xMCksIGNjLnYzKDgwLCAtMTApXVxyXG4gICAgLy8gICAgIGlmIChtaXNzaW9uLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAvLyAgICAgICAgIGFyciA9IFtjYy52MygtNzUsIC0xMCksIGNjLnYzKDMwLCAtMTApLCBjYy52MygxMjAsIC0xMCldXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGxldCBraGF5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVLaGF5KTtcclxuICAgIC8vICAgICBraGF5LnBhcmVudCA9IHRoaXMubGlzdEtoYXk7XHJcbiAgICAvLyAgICAga2hheS5wb3NpdGlvbiA9IGNjLnYzKC0xMDAsIDUwKVxyXG4gICAgLy8gICAgIHRoaXMuYXJyS2hheS5wdXNoKGtoYXkpXHJcbiAgICAvLyAgICAgdGhpcy5sb2FkRGF0YUtoYXkobWlzc2lvbiwga2hheSlcclxuICAgIC8vICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24ucHVzaChtaXNzaW9uKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlzVGFyZ2V0SXRlbVBsYWNlID0gW11cclxuICAgIC8vIC8vIGNvdW50TWlzcyA9IDNcclxuICAgIC8vIHNwYXdOZXh0S2hheShwbGFjZSkge1xyXG4gICAgLy8gICAgIGxldCBmaXJzdEN1cyA9IHRoaXMuYXJyQ3VzWzFdO1xyXG4gICAgLy8gICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuc2hvd01pc3Npb24oKTtcclxuICAgIC8vICAgICBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKCk7XHJcblxyXG4gICAgLy8gICAgIGxldCBtaXNzaW9uID0gZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5vcmRlcjtcclxuICAgIC8vICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24uc3BsaWNlKHBsYWNlLCAxKVxyXG4gICAgLy8gICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5wdXNoKG1pc3Npb24pXHJcbiAgICAvLyAgICAgbGV0IHBvcyA9IGNjLnYzKDEyMDAsIDApO1xyXG4gICAgLy8gICAgIGxldCBwcmVLaGF5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVLaGF5KVxyXG4gICAgLy8gICAgIHByZUtoYXkucGFyZW50ID0gdGhpcy5saXN0S2hheTtcclxuICAgIC8vICAgICBwcmVLaGF5LnBvc2l0aW9uID0gcG9zXHJcbiAgICAvLyAgICAgdGhpcy5hcnJLaGF5LnB1c2gocHJlS2hheSlcclxuICAgIC8vICAgICB0aGlzLmxvYWREYXRhS2hheShtaXNzaW9uLCBwcmVLaGF5KVxyXG4gICAgLy8gICAgIHByZUtoYXkucG9zaXRpb24gPSBjYy52MygtMTAwICsgNDAwLCA1MClcclxuICAgIC8vICAgICBsZXQgdGFyZ2V0S2hheSA9IHRoaXMuYXJyS2hheVtwbGFjZV1cclxuICAgIC8vICAgICBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxyXG5cclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IHBsYWNlICsgMTsgaSA8IHRoaXMuYXJyS2hheS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQga2hheSA9IHRoaXMuYXJyS2hheVtpXVxyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihraGF5KS5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC00MDAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJLaGF5W2kgLSAxXSA9IGtoYXlcclxuXHJcbiAgICAvLyAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5saXN0UmF5WzBdKS5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC00MDAsIDApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyS2hheS5zcGxpY2UocGxhY2UsIDEpO1xyXG5cclxuICAgIC8vICAgICB9LCAwLjIpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBsb2FkRGF0YUtoYXkoZGF0YSwga2hheSkge1xyXG4gICAgLy8gICAgIGlmIChkYXRhKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBhcnIgPSBbY2MudjMoLTYwLCAtMzApLCBjYy52Myg4MCwgLTMwKV1cclxuXHJcbiAgICAvLyAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBhcnIgPSBbY2MudjMoLTc1LCAtMzApLCBjYy52MygzMCwgLTMwKSwgY2MudjMoMTIwLCAtMzApXVxyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bZGF0YVtpXSAtIDFdKVxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSBraGF5XHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gYXJyW2ldXHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnNjYWxlID0gMC42OFxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5sb2FkR3JheSgpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBmaXJzdENsaWNrID0gZmFsc2VcclxuICAgIC8vIGJ0bl9jbGlja0J0bihldmVudCwgdmFsdWUpIHtcclxuICAgIC8vICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAvLyAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMuYnRuUGl6emEuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLmZpcnN0Q2xpY2spIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5maXJzdENsaWNrID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IGlkID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgLy8gICAgIGxldCBub2RlID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIC8vICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrTWlzc2lvbihpZCwgbm9kZSk7XHJcbiAgICAvLyAgICAgaWYgKGNoZWNrKSB7XHJcblxyXG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgICAgIGxldCBwb3MgPSBjaGVjay5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoZWNrLnBvc2l0aW9uKTtcclxuICAgIC8vICAgICAgICAgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGxldCBtYWcgPSAocG9zLnggPiBub2RlLngpID8gLTUwIDogNTA7XHJcbiAgICAvLyAgICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKG5vZGUueCwgbm9kZS55KTtcclxuICAgIC8vICAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKHBvcy54LCBwb3MueSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52MihlbmRQb3MueCArIG1hZywgZW5kUG9zLnkgKyAyMDApO1xyXG5cclxuICAgIC8vICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW2lkIC0gMV0pO1xyXG4gICAgLy8gICAgICAgICBpdGVtLnBhcmVudCA9IG5vZGUucGFyZW50O1xyXG4gICAgLy8gICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcblxyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihpdGVtKS50bygwLjIsIHsgc2NhbGU6IDEuMiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihpdGVtKS5iZXppZXJUbygwLjQsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRPaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFyckN1c1t0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlWzBdXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmRvbmVOb2RlLmNoaWxkcmVuW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMV1dLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpXHJcbiAgICAvLyAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gY2hlY2tJdGVtKGlkKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyclRhcmdldE1pc3Npb24ubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWlzc2lvbi5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKG1pc3Npb25baV0gPT0gaWQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgYXJySXRlbSA9IFtpLCBqXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gYXJySXRlbVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBudWxsXHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBjaGVja01pc3Npb24oaWQsIG5vZGUpIHtcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyclRhcmdldE1pc3Npb24ubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWlzc2lvbi5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGlkID09IG1pc3Npb25bal0pIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb25baV1bal0gPSAxMDA7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEl0ZW1QbGFjZSA9IFtpLCBqXVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKGksIGopXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyS2hheVtpXS5jaGlsZHJlbltqXTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gbnVsbDtcclxuICAgIC8vIH1cclxuICAgIC8vIGlzQ291bnRDdXMgPSAzXHJcbiAgICAvLyBpc0NvdW50RG9uZSA9IDBcclxuICAgIC8vIGlzTW92aW5nID0gZmFsc2VcclxuICAgIC8vIGNvaW5BcnIgPSBbXVxyXG4gICAgLy8gY2hlY2tTdWNjZXNzKGksIGopIHsvL2NoZWNrIGN1cyBob2FuIHRoYW5oIGRvbiBoYW5nIGNodWFcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChqICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCB0YXJnZXRLaGF5ID0gdGhpcy5hcnJLaGF5W2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgLy8gICAgICAgICAgICAgdGFyZ2V0S2hheS5nZXRDb21wb25lbnQoXCJJdGVtXCIpLm9mZkdyYXkodGFyZ2V0S2hheS5jaGlsZHJlblsxXSlcclxuICAgIC8vICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMiwgeyBzY2FsZTogMi41IH0pLnRvKDAuMSwgeyBzY2FsZTogMi4yIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMiwgeyBzY2FsZTogMC45IH0pLnRvKDAuMSwgeyBzY2FsZTogMC42NSB9KS5zdGFydCgpXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgIH0sIDAuNClcclxuICAgIC8vICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgIC8vICAgICBsZXQgY2hlY2sgPSB0cnVlXHJcbiAgICAvLyAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAvLyAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBtaXNzaW9uLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChtaXNzaW9uW21dICE9IDEwMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgY2hlY2sgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNDb3VudERvbmUrK1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubGlzdEN1cy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY3VzLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgICAgICAgICAgcG9zID0gdGhpcy5jYW1lcmEuZ2V0V29ybGRUb1NjcmVlblBvaW50KHBvcyk7XHJcbiAgICAvLyAgICAgICAgICAgICBwb3MgPSB0aGlzLnVpQ2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MpO1xyXG4gICAgLy8gICAgICAgICAgICAgcG9zID0gdGhpcy5iYXJDb2luLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcykuYWRkKGNjLnYzKDAsIDApKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIC8vIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNwYXduQ29pbnNGcm9tQ3VzdG9tZXIocG9zLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gc2F1IGtoaSB04buPYSByYSB4b25nIHRow6wgbW92ZSB24buBIHRoYW5oIGdvbGRcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDb2luc1RvR29sZEJhcih0aGlzLmNvaW5BcnIsIHRoaXMuYmFyQ29pbik7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTsgY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuaGFwcHkoKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub3RpQ29pbi5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIGdsb2JhbFRoaXMuY29pbiArPSA1MFxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKG1pc3Npb24ubGVuZ3RoID09IDMpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gMTAwXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGdsb2JhbFRoaXMuY29pbiA+PSAxMDAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNlbGxEb25lLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgfSwgMC42KVxyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLm1vdmVDdXNPdXQoaSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZW5xdWV1ZU1vdmUodGhpcy5hcnJDdXNbaV0pO1xyXG4gICAgLy8gICAgICAgICB9LCAwLjgpXHJcblxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3Bhd25Db2luc0Zyb21DdXN0b21lcihzdGFydFBvczogY2MuVmVjMywgb25GaW5pc2g/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAvLyAgICAgdGhpcy5jb2luQXJyID0gW11cclxuICAgIC8vICAgICBjb25zdCBjb2luQ291bnQgPSA2O1xyXG4gICAgLy8gICAgIGNvbnN0IHJhZGl1cyA9IDcwOyAvLyDEkeG7mSB04buPYSByYVxyXG5cclxuICAgIC8vICAgICBsZXQgZmluaXNoZWQgPSAwO1xyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvaW5Db3VudDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNvaW4pO1xyXG4gICAgLy8gICAgICAgICBjb2luLnBhcmVudCA9IHRoaXMuYmFyQ29pbjtcclxuICAgIC8vICAgICAgICAgY29pbi5zZXRQb3NpdGlvbihzdGFydFBvcyk7XHJcbiAgICAvLyAgICAgICAgIGNvaW4uc2NhbGUgPSAwLjhcclxuICAgIC8vICAgICAgICAgdGhpcy5jb2luQXJyLnB1c2goY29pbilcclxuICAgIC8vICAgICAgICAgLy8gcmFuZG9tIGjGsOG7m25nIHThu49hXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGFuZ2xlID0gKE1hdGguUEkgKiAyIC8gY29pbkNvdW50KSAqIGk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHJhbmRvbVJhZGl1cyA9IHJhZGl1cyArIE1hdGgucmFuZG9tKCkgKiA0MDtcclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHN0YXJ0UG9zLmFkZChjYy52MyhcclxuICAgIC8vICAgICAgICAgICAgIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbVJhZGl1cyxcclxuICAgIC8vICAgICAgICAgICAgIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbVJhZGl1cyxcclxuICAgIC8vICAgICAgICAgICAgIDBcclxuICAgIC8vICAgICAgICAgKSk7XHJcblxyXG4gICAgLy8gICAgICAgICAvLyB04buPYSByYVxyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbihjb2luKVxyXG4gICAgLy8gICAgICAgICAgICAgLnRvKDAuMjUsIHsgcG9zaXRpb246IHRhcmdldFBvcyB9LCB7IGVhc2luZzogXCJxdWFkT3V0XCIgfSlcclxuICAgIC8vICAgICAgICAgICAgIC5kZWxheSgwLjA1KVxyXG4gICAgLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGZpbmlzaGVkKys7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkID09PSBjb2luQ291bnQgJiYgb25GaW5pc2gpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgb25GaW5pc2goKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gbW92ZUNvaW5zVG9Hb2xkQmFyKGNvaW5zOiBjYy5Ob2RlW10sIGdvbGRUYXJnZXQ6IGNjLk5vZGUpIHtcclxuICAgIC8vICAgICAvLyBjb25zdCB3b3JsZFBvcyA9IGdvbGRUYXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihnb2xkVGFyZ2V0LnBvc2l0aW9uKTtcclxuICAgIC8vICAgICBsZXQgbG9jYWwgPSBjYy52MygwLCAwKVxyXG4gICAgLy8gICAgIGNvaW5zLmZvckVhY2goKGNvaW4sIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8vIGNvbnN0IGxvY2FsID0gY29pbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oY29pbilcclxuICAgIC8vICAgICAgICAgICAgIC5kZWxheShpbmRleCAqIDAuMDUpXHJcbiAgICAvLyAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiBsb2NhbCwgc2NhbGU6IDAuNSB9LCB7IGVhc2luZzogXCJxdWFkSW5cIiB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvaW4uZGVzdHJveSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIHRoaXMuYWRkR29sZCgxKTtcclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlzRGVtID0gMFxyXG4gICAgLy8gZ2V0UGxhY2UoY3VzKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzKTsgLy8gZ+G7jW4gaMahblxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIGVucXVldWVNb3ZlKGN1c05vZGUpIHtcclxuICAgIC8vICAgICB0aGlzLm1vdmVRdWV1ZS5wdXNoKGN1c05vZGUpO1xyXG4gICAgLy8gICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBwcm9jZXNzUXVldWUoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nKSByZXR1cm47XHJcbiAgICAvLyAgICAgaWYgKHRoaXMubW92ZVF1ZXVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIC8vICAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgLy8gICAgIGxldCBjdXNOb2RlID0gdGhpcy5tb3ZlUXVldWUuc2hpZnQoKTtcclxuICAgIC8vICAgICB0aGlzLl9tb3ZlQ3VzT3V0KGN1c05vZGUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIG1vdmVRdWV1ZSA9IFtdO1xyXG4gICAgLy8gaXNQcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAvLyBfbW92ZUN1c091dChjdXNOb2RlKSB7XHJcbiAgICAvLyAgICAgbGV0IHBsYWNlID0gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXNOb2RlKTtcclxuXHJcbiAgICAvLyAgICAgaWYgKHBsYWNlID09PSAtMSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgLy8gICAgIGxldCBmaXJzdEN1cyA9IGN1c05vZGU7XHJcblxyXG4gICAgLy8gICAgIC8vID09PT09IFNwYXduIGN1c3RvbWVyIHRp4bq/cCB0aGVvID09PT09XHJcbiAgICAvLyAgICAgbGV0IG5leHRDdXMgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5pc0NvdW50Q3VzXTtcclxuXHJcbiAgICAvLyAgICAgaWYgKG5leHRDdXMpIHtcclxuICAgIC8vICAgICAgICAgbmV4dEN1cy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbmV4dEN1cztcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0NvdW50Q3VzKys7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyA9PT09PSBU4bqhbyBjdXN0b21lciBt4bubaSDhu58gY3Xhu5FpID09PT09XHJcbiAgICAvLyAgICAgLy8gbGV0IG5ld0N1cyA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdFByZUN1c1t0aGlzLmlzRGVtXSk7XHJcbiAgICAvLyAgICAgLy8gbmV3Q3VzLnBhcmVudCA9IHRoaXMubGlzdEN1cztcclxuXHJcbiAgICAvLyAgICAgLy8gbGV0IGxhc3RDdXMgPSB0aGlzLmFyckN1c1t0aGlzLmFyckN1cy5sZW5ndGggLSAxXTtcclxuICAgIC8vICAgICAvLyBuZXdDdXMucG9zaXRpb24gPSBsYXN0Q3VzLnBvc2l0aW9uLmFkZChjYy52Myg2MDAsIDApKTtcclxuXHJcbiAgICAvLyAgICAgLy8gdGhpcy5pc0RlbSA9ICh0aGlzLmlzRGVtICsgMSkgJSB0aGlzLmxpc3RQcmVDdXMubGVuZ3RoOyBgYFxyXG4gICAgLy8gICAgIC8vIHRoaXMuYXJyQ3VzLnB1c2gobmV3Q3VzKTtcclxuXHJcbiAgICAvLyAgICAgLy8gPT09PT0gTW92ZSB0aOG6sW5nIGLhu4sgb3V0ID09PT09XHJcbiAgICAvLyAgICAgZmlyc3RDdXMuekluZGV4ID0gLTE7XHJcbiAgICAvLyAgICAgZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5pc1N1Y2Nlc3MgPSB0cnVlXHJcbiAgICAvLyAgICAgY2MudHdlZW4oZmlyc3RDdXMpXHJcbiAgICAvLyAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAvLyAgICAgICAgIC5ieSgwLjggKiAocGxhY2UgKyAxKSwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCAqIChwbGFjZSArIDEpLCAwKSB9KVxyXG4gICAgLy8gICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAvLyAgICAgY2MudHdlZW4oZmlyc3RDdXMpXHJcbiAgICAvLyAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAvLyAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgLy8gICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAvLyAgICAgLy8gPT09PT0gTW92ZSBjw6FjIHRo4bqxbmcgcGjDrWEgc2F1ID09PT09XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IHBsYWNlICsgMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQ3VzW2ldO1xyXG5cclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAvLyAgICAgICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgLy8gICAgICAgICAgICAgLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCkgfSlcclxuICAgIC8vICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyA9PT09PSBSZW1vdmUga2jhu49pIG3huqNuZyA9PT09PVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJDdXMuc3BsaWNlKHBsYWNlLCAxKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKTtcclxuXHJcbiAgICAvLyAgICAgfSwgMS4xKTtcclxuXHJcbiAgICAvLyAgICAgLy8gPT09PT0gU3Bhd24ga2hheSA9PT09PVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuaXNDb3VudERvbmUgPCA1KSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNwYXdOZXh0S2hheShwbGFjZSk7XHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSwgMC4zKTtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc0NvdW50RG9uZSA9PSA1KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMub25FbmRHYW1lKHRydWUpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gZmluaXNoTW92ZSgpIHtcclxuICAgIC8vICAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7IC8vIGNo4bqheSB0aeG6v3AgdGjhurFuZyBr4bq/IHRp4bq/cFxyXG4gICAgLy8gfVxyXG4gICAgLy8gY2hlY2tTdWNjZXNzSXRlbSgpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgIC8vICAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChtaXNzaW9uW2pdICE9IDEwMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKGksIG51bGwpXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaXRlbVF1ZXVlOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIHNodWZmbGVJdGVtKCkge1xyXG4gICAgLy8gICAgIHRoaXMuaXRlbVF1ZXVlID0gW107XHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0SXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLml0ZW1RdWV1ZS5wdXNoKGkpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8gc2h1ZmZsZSBGaXNoZXItWWF0ZXNcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gdGhpcy5pdGVtUXVldWUubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgLy8gICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgLy8gICAgICAgICBbdGhpcy5pdGVtUXVldWVbaV0sIHRoaXMuaXRlbVF1ZXVlW2pdXSA9IFt0aGlzLml0ZW1RdWV1ZVtqXSwgdGhpcy5pdGVtUXVldWVbaV1dO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXROZXh0SXRlbUluZGV4KCkge1xyXG5cclxuICAgIC8vICAgICBpZiAodGhpcy5pdGVtUXVldWUubGVuZ3RoID09IDApIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaHVmZmxlSXRlbSgpOyAvLyB04bqhbyBsxrDhu6N0IG3hu5tpXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5pdGVtUXVldWUuc2hpZnQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBsYXN0SXRlbUluZGV4OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIHNwYXduSXRlbSgpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFJheS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5sYXN0SXRlbUluZGV4W2ldID0gLTE7IC8vIGNoxrBhIGPDsyBpdGVtIHRyxrDhu5tjXHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLnNwYXduSXRlbU9uUmF5KGkpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzcGF3bkl0ZW1PblJheShpbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgLy8gICAgIGxldCBtYWcgPSAoaW5kZXggPT0gMCkgPyAxMDAwIDogLTEwMDA7XHJcblxyXG4gICAgLy8gICAgIHRoaXMuY3JlYXRlSXRlbShpbmRleCwgbWFnKTtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY3JlYXRlSXRlbShpbmRleCwgbWFnKTtcclxuICAgIC8vICAgICB9LCAyKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjcmVhdGVJdGVtKGluZGV4OiBudW1iZXIsIG1hZzogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgbGV0IHJkID0gdGhpcy5nZXROZXh0SXRlbUluZGV4KCk7XHJcbiAgICAvLyAgICAgdGhpcy5sYXN0SXRlbUluZGV4W2luZGV4XSA9IHJkO1xyXG5cclxuICAgIC8vICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bcmRdKTtcclxuICAgIC8vICAgICBpdGVtLnBhcmVudCA9IHRoaXMubGlzdFJheVtpbmRleF07XHJcblxyXG4gICAgLy8gICAgIHRoaXMuYXJySXRlbVtpbmRleF0ucHVzaChpdGVtKTtcclxuXHJcbiAgICAvLyAgICAgaXRlbS5wb3NpdGlvbiA9IGNjLnYzKG1hZywgLTQwKTtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5tb3ZlSXRlbShpdGVtLCBtYWcpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gbW92ZUl0ZW0oaXRlbTogY2MuTm9kZSwgbWFnKSB7XHJcbiAgICAvLyAgICAgbGV0IHRhcmdldFggPSAtbWFnO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKGl0ZW0pXHJcbiAgICAvLyAgICAgICAgIC50bygxNywgeyB4OiB0YXJnZXRYIH0pXHJcbiAgICAvLyAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuc3RhcnQoKTtcclxuICAgIC8vIH1cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmlkU291bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0R3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLWdyYXktc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG5cclxuICAgIH1cclxuICAgIG9mZkdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICB9XHJcbiAgICAvLyBtb3ZlQ2xvY2t0b1VJKG5vZGUxKSB7XHJcbiAgICAvLyAgICAgdGhpcy5tb3ZlSXRlbVRvVUkobm9kZTEsIHRoaXMuYmFyVGltZS5jaGlsZHJlblsxXSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlSXRlbVRvVUkobm9kZTEsIG5vZGUyKSB7XHJcbiAgICAvLyAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZGluLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICBsZXQgcG9zID0gbm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbilcclxuICAgIC8vICAgICBwb3MgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAvLyAgICAgLy8gcG9zID0gcG9zLmFkZChjYy52MygwLCAwKSlcclxuICAgIC8vICAgICBsZXQgcG9zMiA9IG5vZGUxLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTEucG9zaXRpb24pO1xyXG4gICAgLy8gICAgIHBvczIgPSB0aGlzLm1haW5DYW1lcmEuZ2V0V29ybGRUb1NjcmVlblBvaW50KHBvczIpO1xyXG4gICAgLy8gICAgIHBvczIgPSB0aGlzLnVpQ2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MyKTtcclxuICAgIC8vICAgICBwb3MyID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMikuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgLy8gICAgIG5vZGUxLnBhcmVudCA9IHRoaXMudWlOb2RlO1xyXG4gICAgLy8gICAgIG5vZGUxLnNjYWxlID0gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyAvIHRoaXMudWlDYW1lcmEuem9vbVJhdGlvICogMC43XHJcbiAgICAvLyAgICAgbm9kZTEucG9zaXRpb24gPSBwb3MyXHJcbiAgICAvLyAgICAgY2MudHdlZW4obm9kZTEpLnRvKDAuNCwgeyBwb3NpdGlvbjogcG9zLCBzY2FsZTogMC40IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBub2RlMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLm1pc3Npb25CYXIuZ2V0Q29tcG9uZW50KFwidXBkYXRlQmFyXCIpLnVwZGF0ZUJhcigpO1xyXG4gICAgLy8gICAgICAgICAvLyB3b29kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJleHBcIilcclxuICAgIC8vICAgICAgICAgLy8gLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZE91dCwgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gfVxyXG4gICAgaXNFbmRHYW1lID0gZmFsc2VcclxuICAgIG9uRW5kR2FtZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNFbmRHYW1lID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpXHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcclxuICAgICAgICAgICAgdGhpcy5hbWF6aW5nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmVuZENhcmRXaW4pIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJUaW1lLmdldENvbXBvbmVudChcImJhclRpbWVcIikuZW5kR2FtZSgpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYXJyQ3VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIjYuYW5ncnlcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZClcclxuICAgICAgICAgICAgdGhpcy50aW1ldXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtpbmcsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTG9zZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgMC41KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2Nob29zZShldmVudCwgdmFsdWUpIHtcclxuICAgIGlzRG9jID0gZmFsc2VcclxuICAgIC8vIHVwZGF0ZShkdCkge1xyXG4gICAgLy8gICAgIC8vIHRoaXMubGJDb2luLnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXHJcbiAgICAvLyAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgLy8gICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgdXBkYXRlUmVzcG9uc2l2ZSgpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXJyUG9zTWVudU5nYW5nID0gW2NjLnYzKC0zOTEsIC0xMDIpLCBjYy52MygzNzUsIC0xMTIpLCBjYy52MygxMTQsIC0xMjApLCBjYy52MygtNDA5LCAtMjg0KSwgY2MudjMoLTE1OCwgLTI5NiksIGNjLnYzKDExOCwgLTI4MCksIGNjLnYzKDM5MCwgLTI5NiksIGNjLnYzKC0xMzcsIC0xMTYpXTtcclxuICAgIGFyclBvc0RvYyA9IFtjYy52MygyNiwgLTMzNyksIGNjLnYzKDMzNiwgLTExMiksIGNjLnYzKDE1LjUsIC0xMjEpLCBjYy52MygtMTcwLCAtNTI1LjcpLCBjYy52MygtMzAwLCAtMzUyKSwgY2MudjMoMTg2Ljk2LCAtNTEyKSwgY2MudjMoMzU1LCAtMzM1KSwgY2MudjMoLTI5MiwgLTExNildXHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuODVcclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkV2luLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmJhckNvaW4uc2NhbGUgPSAobG9naWMpID8gMi41IDogMS40XHJcbiAgICAgICAgdGhpcy5iYXJDb2luLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IChsb2dpYykgPyAyMTAgOiAxMDBcclxuICAgICAgICB0aGlzLnBoYW9Ib2Euc2NhbGUgPSAobG9naWMpID8gOSA6IDVcclxuICAgICAgICB0aGlzLmd1aWxkLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxLjJcclxuICAgICAgICB0aGlzLmd1aWxkLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIC05MDApIDogY2MudjMoMCwgLTM2MClcclxuICAgICAgICB0aGlzLmxpc3RDdXMuc2NhbGUgPSAobG9naWMpID8gMSA6IDFcclxuICAgICAgICB0aGlzLmxpc3RLaGF5LnNjYWxlID0gKGxvZ2ljKSA/IDEuMSA6IDFcclxuICAgICAgICB0aGlzLnRpbWV1cC5zY2FsZSA9IChsb2dpYykgPyAxIDogMS40XHJcbiAgICAgICAgdGhpcy5hbWF6aW5nLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcclxuICAgICAgICB0aGlzLmVuZENhcmREb2Muc2NhbGUgPSAxLjVcclxuICAgICAgICB0aGlzLm5vdGlNaXNzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgdGhpcy5iYXJNaXNzaW9uMi5zY2FsZSA9IChsb2dpYykgPyAyIDogMVxyXG4gICAgICAgIC8vIHRoaXMudHV0TWlzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgdGhpcy5iYXJNaXNzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMS44IDogMVxyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIDAsIDApIDogY2MudjMoMCwgMTEwLCAwKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLmFjdGl2ZSA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjdcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMDBcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuMlxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjg1XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==