
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
        _this.soundThinkLose = null;
        _this.soundThinkWin = null;
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
                _this.notiMission.active = true;
                // this.barMission.getComponent("barTime").countDown()
                _this.startGame();
            }).start();
        }, 1.5);
        this.mcComp = this.mc.getComponent("mc");
        // this.onEndGame(false)
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
    NewClass.prototype.showCounterMissions = function (count, value) {
        for (var i = 0; i < count && i < this.arrCus.length; i++) {
            this.arrCus[i].getComponent("cusMission").showMission(value);
        }
    };
    NewClass.prototype.enterCustomers = function (count, value) {
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
            // if (value != true) {
            _this.showCounterMissions(count, value);
            // }
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
        if (this.isEndGame)
            return;
        var idx = this.arrCus.indexOf(departedCus);
        var newCus = this.spawnCustomerFromPrefab();
        if (!newCus)
            return;
        this.btnCake.getComponent(cc.Button).enabled = true;
        this.btnPotato.getComponent(cc.Button).enabled = true;
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
        this.enterCustomers(1, true);
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
            this.barMission.getComponent("barTime").countDown();
            this.arrCus[0].getComponent("cusMission").loadTime();
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
        if (!this.mcComp.canDoAnyMachineAction())
            return;
        this.isMoving = true;
        this.btnMachine.getChildByName("hind").active = false;
        this.btnMachine.getChildByName("hind").opacity = 0;
        this.mcComp.moveToMachine();
    };
    NewClass.prototype.btn_cola = function () {
        if (this.isMcBusy())
            return;
        var cocaComp = this.btnCoca.getComponent("coca");
        var canCook = !cocaComp.isBusy();
        var canPickup = cocaComp.isCoca && this.mcComp.canPickItemType("coca");
        if (!canCook && !canPickup)
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
            this.barMission.getComponent("barTime").endGame();
            this.amazing.active = true;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundThinkWin, false, 0.5);
            }, 0.5);
            cc.audioEngine.play(this.soundWin, false, 1);
            // this.scheduleOnce(() => {
            //     if (this.endCardWin) this.endCardWin.active = true
            // }, 0.5)
        }
        else {
            this.barMission.getComponent("barTime").endGame();
            for (var _i = 0, _a = this.arrCus; _i < _a.length; _i++) {
                var child = _a[_i];
                child.children[0].getComponent(sp.Skeleton).setAnimation(0, "6.angry", true);
            }
            cc.audioEngine.stop(this.idSound);
            this.timeup.active = true;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundThinking, false, 1);
                cc.audioEngine.play(_this.soundThinkLose, false, 0.5);
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
        this.barCoin.getComponent(cc.Widget).top = (logic) ? 210 : 140;
        this.phaoHoa.scale = (logic) ? 9 : 5;
        this.guild.scale = (logic) ? 2 : 1.2;
        this.guild.position = (logic) ? cc.v3(0, -900) : cc.v3(0, -360);
        this.listCus.scale = (logic) ? 1 : 1;
        // this.listKhay.scale = (logic) ? 1.1 : 1
        this.timeup.scale = (logic) ? 1 : 1.4;
        this.amazing.scale = (logic) ? 1 : 1.4;
        this.endCardDoc.scale = 1.5;
        this.notiMission.scale = (logic) ? 2 : 1;
        this.barMission2.scale = (logic) ? 2 : 1;
        // this.tutMision.scale = (logic) ? 2 : 1
        this.barMission.scale = (logic) ? 1.7 : 1;
        // this.barMission2.scale = (logic) ? 2 : 1
        this.mainCamera.node.position = (logic) ? cc.v3(0, 0, 0) : cc.v3(0, 110, 0);
        this.barMission.getComponent(cc.Widget).top = 50;
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
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            var TALL_PHONE_MIN_RATIO = 2.0; // iPhone X ~2.16, 20:9 Android ~2.22
            this.camera.zoomRatio = 1.7;
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {
                this.barCoin.getComponent(cc.Widget).top = 300 + 30;
                this.barMission.getComponent(cc.Widget).top = 150 + 30;
                if (aspectRatio > 2.2) {
                    this.camera.zoomRatio = 1.75;
                }
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.5;
                this.endCardDoc.scale = 1.2;
                this.barCoin.scale = 2;
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
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThinkLose", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThinkWin", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcR2FtZURvbnV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0FBRXZCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa3NDQztRQWhzQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxtQkFBYSxHQUFjLElBQUksQ0FBQTtRQUUvQixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElB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V0FBSyxHQUFHLEtBQUssQ0FBQTtRQW1CYixxQkFBZSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2SyxlQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENB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QyxHQUFHLENBQUE7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxL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MUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1E7SUEvSVgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtzQzVCO0lBQUQsZUFBQztDQWxzQ0QsQUFrc0NDLENBbHNDcUMsRUFBRSxDQUFDLFNBQVMsR0Frc0NqRDtrQkFsc0NvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuY29pbiA9IDBcclxuZ2xvYmFsVGhpcy5HYW1lID0gZmFsc2VcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2hvd1BvcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsb3NlUG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE9rOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRyYW5zOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2VsbERvbmU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua2luZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3JlYW06IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoZXJyeTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENyZWFtTWluaTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJhbmg6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rTG9zZTpjYy5BdWRpb0NsaXA9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rV2luOmNjLkF1ZGlvQ2xpcD1udWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmRXaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJUaW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyQ29pbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGVja0l0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb0hvYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0SXRlbTogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UmF5OiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtoYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUtoYXk6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UmF5Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGltZXVwOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhbWF6aW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIG5vdGlDb2luOiBjYy5BbmltYXRpb24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vdGlNaXNzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdFByZUN1czogY2MuUHJlZmFiW10gPSBbXVxyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RNZW51OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZHR1dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmR0dXQyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZHR1dDM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDb2luOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmREb2M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy9uZXdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEJlcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3REaWE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVCYW5oOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJNaXNzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJNaXNzaW9uMjogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vYnRuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNoaWNrZW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5NYWNoaW5lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQ29jYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNha2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Qb3RhdG86IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpbmQxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsaXN0UHJlQ1VzOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBtY0NvbXAgPSBudWxsXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyB0dXRNaXNpb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBhcnJCZXAgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICBhcnJEaWEgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcblxyXG5cclxuICAgIG1heEtoYXkgPSA3XHJcblxyXG4gICAgYXJyRG9udXRwb3MgPSBbXVxyXG5cclxuICAgIGlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgaXNUdXRNZWF0ID0gZmFsc2VcclxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXHJcbiAgICBpc1R1dENsaWNrTWVhdCA9IGZhbHNlXHJcblxyXG5cclxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcclxuICAgIC8vIGlzU3RlcCA9IDBcclxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIG1heEN1c3RvbWVycyA9IDZcclxuICAgIGlkU291bmQgPSBudWxsXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICAvL2l0ZW06IDA6YnVnZXIsIDE6IGtlbSAyOmRvbnV0IDM6a2hvYWl0YXkgNDpwaG8gNTogcHVkZGluZyA2OiB0cmEgIDc6YmFuaG1pIDg6Y29jb251dFxyXG4gICAgcmF5WTogbnVtYmVyW10gPSBbMTIwLCAwLCAtMTIwXTsgICAvLyB24buLIHRyw60gWSBj4bunYSAzIHJheVxyXG4gICAgc3Bhd25YOiBudW1iZXIgPSA3MDA7ICAgICAgICAgICAgICAvLyB24buLIHRyw60gc3Bhd24gYsOqbiBwaOG6o2lcclxuICAgIGFyckl0ZW0gPSBbW10sIFtdXVxyXG4gICAgYXJyS2hheSA9IFtdXHJcbiAgICBhcnJUYXJnZXRNaXNzaW9uID0gW11cclxuICAgIGFyckN1cyA9IFtdXHJcbiAgICBzZWxsVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgc2VsbFRyYXlTbG90ID0gLTFcclxuICAgIGN1c0NvdW50ZXJQb3MgPSBudWxsXHJcbiAgICBjdXNTbG90R2FwID0gNTAwXHJcbiAgICBjdXNFbnRlck9mZnNldCA9IGNjLnYzKDM1MCwgMCwgMClcclxuICAgIGN1c1dhbGtTcGVlZCA9IDQzNy41XHJcbiAgICBjb3VudGVyQ3VzQ291bnQgPSAwXHJcbiAgICBwcmVDdXNJbmRleCA9IDBcclxuICAgIGlzU3RhcnRnYW1lID0gZmFsc2VcclxuICAgIGlzRmlyc3RDbGljayA9IGZhbHNlXHJcbiAgICAvLzA6YmFuaCB0aHVvbmcgMTpjaG9jb2xhdGUgMjogc3RyYXdiZXJyeSBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDdXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcclxuICAgICAgICBjYy52aWV3LnNldFJlc2l6ZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vdGlNaXNzaW9uKS5ieSgwLjQsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIDIwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlNaXNzaW9uLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmNvdW50RG93bigpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIHRoaXMubWNDb21wID0gdGhpcy5tYy5nZXRDb21wb25lbnQoXCJtY1wiKVxyXG4gICAgICAgIC8vIHRoaXMub25FbmRHYW1lKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgaXNIYW5kID0gbnVsbFxyXG5cclxuICAgIGluaXRDdXNRdWV1ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY3VzQ291bnRlclBvcyAmJiB0aGlzLmFyckN1cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzQ291bnRlclBvcyA9IHRoaXMuYXJyQ3VzWzBdLnBvc2l0aW9uLmNsb25lKCkuc3ViKHRoaXMuY3VzRW50ZXJPZmZzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1c0NvdW50ZXJQb3Moc2xvdDogbnVtYmVyLCB0b3RhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Q3VzUXVldWUoKVxyXG4gICAgICAgIGlmICh0b3RhbCA8PSAxKSByZXR1cm4gdGhpcy5jdXNDb3VudGVyUG9zLmNsb25lKClcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IChzbG90IC0gKHRvdGFsIC0gMSkgLyAyKSAqIHRoaXMuY3VzU2xvdEdhcFxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1c0NvdW50ZXJQb3MuY2xvbmUoKS5hZGQoY2MudjMob2Zmc2V0WCwgMCwgMCkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvdW50ZXJNaXNzaW9ucyhjb3VudDogbnVtYmVyLHZhbHVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudCAmJiBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbaV0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5zaG93TWlzc2lvbih2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXJDdXN0b21lcnMoY291bnQ6IG51bWJlciwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJDdXNDb3VudCA9IGNvdW50XHJcbiAgICAgICAgbGV0IGFyclBvcyA9IFtjYy52MygwLCAwLCAwKV1cclxuICAgICAgICBpZiAoY291bnQgPT0gMikge1xyXG4gICAgICAgICAgICBhcnJQb3MgPSBbY2MudjMoLTI4NSwgMCwgMCksIGNjLnYzKDg4LCAwLCAwKV1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY291bnQgPT0gMykge1xyXG4gICAgICAgICAgICBhcnJQb3MgPSBbY2MudjMoLTQ0MywgMCwgMCksIGNjLnYzKC03MywgMCwgMCksIGNjLnYzKDI3MywgMCwgMCldXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtYXhEdXJhdGlvbiA9IDBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ICYmIGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgLy8gbGV0IHRhcmdldFBvcyA9IHRoaXMuZ2V0Q3VzQ291bnRlclBvcyhpLCBjb3VudClcclxuICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IGFyclBvc1tpXVxyXG5cclxuICAgICAgICAgICAgbGV0IHNwYXduUG9zID0gdGFyZ2V0UG9zLmNsb25lKCkuYWRkKHRoaXMuY3VzRW50ZXJPZmZzZXQpXHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHNwYXduUG9zLnN1Yih0YXJnZXRQb3MpLm1hZygpXHJcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gdGhpcy5jdXNXYWxrU3BlZWRcclxuICAgICAgICAgICAgbWF4RHVyYXRpb24gPSBNYXRoLm1heChtYXhEdXJhdGlvbiwgZHVyYXRpb24pXHJcblxyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY3VzKVxyXG4gICAgICAgICAgICBjdXMucG9zaXRpb24gPSBzcGF3blBvc1xyXG4gICAgICAgICAgICBjdXMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5tb3ZlKClcclxuICAgICAgICAgICAgY2MudHdlZW4oY3VzKVxyXG4gICAgICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHBvc2l0aW9uOiB0YXJnZXRQb3MgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmICh2YWx1ZSAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb3VudGVyTWlzc2lvbnMoY291bnQsdmFsdWUpXHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMSAmJiB0aGlzLmFyckN1cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIG1heER1cmF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVudGVyQ291bnRGb3JXYXZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09PSAxKSByZXR1cm4gMlxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09PSAzKSByZXR1cm4gM1xyXG4gICAgICAgIHJldHVybiAxXHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25DdXN0b21lckZyb21QcmVmYWIoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdFByZUNVcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXHJcbiAgICAgICAgbGV0IHByZWZhYiA9IHRoaXMubGlzdFByZUNVc1t0aGlzLnByZUN1c0luZGV4ICUgdGhpcy5saXN0UHJlQ1VzLmxlbmd0aF1cclxuICAgICAgICB0aGlzLnByZUN1c0luZGV4KytcclxuICAgICAgICBsZXQgbmV3Q3VzID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKVxyXG4gICAgICAgIG5ld0N1cy5wYXJlbnQgPSB0aGlzLmxpc3RDdXNcclxuICAgICAgICBuZXdDdXMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gbmV3Q3VzXHJcbiAgICB9XHJcblxyXG4gICAgcmVwbGFjZUN1c3RvbWVyKGRlcGFydGVkQ3VzOiBjYy5Ob2RlLCBjb3VudGVyUG9zOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoZGVwYXJ0ZWRDdXMpXHJcblxyXG4gICAgICAgIGxldCBuZXdDdXMgPSB0aGlzLnNwYXduQ3VzdG9tZXJGcm9tUHJlZmFiKClcclxuICAgICAgICBpZiAoIW5ld0N1cykgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5idG5DYWtlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnRuUG90YXRvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBuZXdDdXNDb21wID0gbmV3Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIilcclxuICAgICAgICBpZiAobmV3Q3VzQ29tcCkge1xyXG4gICAgICAgICAgICBuZXdDdXNDb21wLmdhbWVQbGF5ID0gdGhpc1xyXG4gICAgICAgICAgICBuZXdDdXNDb21wLmlzUmVhZHlGb3JTZWxsID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGxUYXJnZXRDdXMgPT09IGRlcGFydGVkQ3VzIHx8IHRoaXMuaXNUYXJnZXRDdXMgPT09IGRlcGFydGVkQ3VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsbFRhcmdldEN1cyA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSAtMVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5tY0NvbXApIHtcclxuICAgICAgICAgICAgdGhpcy5tY0NvbXAudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbaWR4XSA9IG5ld0N1c1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2gobmV3Q3VzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZXBhcnRlZEN1cy5kZXN0cm95KClcclxuXHJcbiAgICAgICAgbGV0IHNwYXduUG9zID0gY291bnRlclBvcy5jbG9uZSgpLmFkZCh0aGlzLmN1c0VudGVyT2Zmc2V0KVxyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IHNwYXduUG9zLnN1Yihjb3VudGVyUG9zKS5tYWcoKVxyXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gdGhpcy5jdXNXYWxrU3BlZWRcclxuXHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5ld0N1cylcclxuICAgICAgICBuZXdDdXMucG9zaXRpb24gPSBzcGF3blBvc1xyXG4gICAgICAgIG5ld0N1cy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgbmV3Q3VzQ29tcC5tb3ZlKClcclxuICAgICAgICBjYy50d2VlbihuZXdDdXMpXHJcbiAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogY291bnRlclBvcyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXdDdXNDb21wLnNob3dNaXNzaW9uKClcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBuZXdDdXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuICAgIG9uSGluZCgpIHtcclxuICAgICAgICB0aGlzLmhpbmQxLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Q3VzUXVldWUoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbaV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbnRlckN1c3RvbWVycygxLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RDbGljaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNoaWNrZW4uZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMpXHJcbiAgICB9XHJcbiAgICBpc01vdmluZyA9IGZhbHNlXHJcbiAgICBpc0Zpc3QgPSBmYWxzZVxyXG4gICAgaXNGaXN0Q2xpY2tDaGlja2VuID0gZmFsc2VcclxuXHJcbiAgICBpc01jQnVzeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc01vdmluZyB8fCAodGhpcy5tY0NvbXAgJiYgdGhpcy5tY0NvbXAuaXNXYWxraW5nKCkpXHJcbiAgICB9XHJcblxyXG4gICAgYnRuX2NoaWNrZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Zpc3RDbGlja0NoaWNrZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Zpc3RDbGlja0NoaWNrZW4gPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmNvdW50RG93bigpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuY2FuUGlja01vcmVDaGlja2VuKCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuQ2hpY2tlbi5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQ2hpY2tlbigpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bl9tYXlDaGllbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5jYW5Eb0FueU1hY2hpbmVBY3Rpb24oKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmJ0bk1hY2hpbmUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvTWFjaGluZSgpXHJcbiAgICB9XHJcbiAgICBidG5fY29sYSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNvY2FDb21wID0gdGhpcy5idG5Db2NhLmdldENvbXBvbmVudChcImNvY2FcIilcclxuICAgICAgICBsZXQgY2FuQ29vayA9ICFjb2NhQ29tcC5pc0J1c3koKVxyXG4gICAgICAgIGxldCBjYW5QaWNrdXAgPSBjb2NhQ29tcC5pc0NvY2EgJiYgdGhpcy5tY0NvbXAuY2FuUGlja0l0ZW1UeXBlKFwiY29jYVwiKVxyXG4gICAgICAgIGlmICghY2FuQ29vayAmJiAhY2FuUGlja3VwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9Db2NhKClcclxuICAgIH1cclxuICAgIGJ0bl9zYXVjZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5oYXNBbnlJdGVtKCkgfHwgdGhpcy5tY0NvbXAuZmluZENvb2tlZFRyYXlTbG90KCkgPCAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9TYXVjZSgpXHJcbiAgICB9XHJcbiAgICBidG5fY2FrZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzTW92aW5nKVxyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0Nha2UoKVxyXG4gICAgfVxyXG4gICAgYnRuX3RvbWF0bygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9Ub21hdG8oKVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VzVHJheUluZGV4KGN1c05vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXNOb2RlKVxyXG4gICAgfVxyXG4gICAgY2hlY2tTZWxsKHRhcmdldEN1cz86IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIHNlbGwgTWFpblwiKVxyXG4gICAgICAgIGxldCBjdXMgPSB0YXJnZXRDdXMgfHwgdGhpcy5zZWxsVGFyZ2V0Q3VzIHx8IHRoaXMuaXNUYXJnZXRDdXMgfHwgdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpIHx8ICFjdXMpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgY3VzQ29tcC5pc1N1Y2Nlc3MgfHwgIWN1c0NvbXAuaXNSZWFkeUZvclNlbGwpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCB0cmF5SWR4ID0gdGhpcy5tY0NvbXAuZmluZFRyYXlGb3JDdXN0b21lcihjdXNDb21wKVxyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuaGFzQW55SXRlbSgpIHx8IHRyYXlJZHggPCAwKSByZXR1cm4gZmFsc2VcclxuICAgICAgICB0aGlzLnNlbGxUYXJnZXRDdXMgPSBjdXNcclxuICAgICAgICB0aGlzLnNlbGxUcmF5U2xvdCA9IHRyYXlJZHhcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gY3VzXHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9CdXkoKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZVNlbGxBdENvdW50ZXIoKSB7XHJcbiAgICAgICAgbGV0IGN1cyA9IHRoaXMuc2VsbFRhcmdldEN1cyB8fCB0aGlzLmlzVGFyZ2V0Q3VzIHx8IHRoaXMuYXJyQ3VzWzBdXHJcbiAgICAgICAgaWYgKCFjdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8IGN1c0NvbXAuaXNTdWNjZXNzIHx8ICFjdXNDb21wLmlzUmVhZHlGb3JTZWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXNDb21wLnZhbGlkYXRlU2VsbCgpXHJcbiAgICB9XHJcbiAgICBuZXh0Q3VzKHZhbHVlOiBib29sZWFuLCBkZXBhcnRlZEN1cz86IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoZGVwYXJ0ZWRDdXMpIHtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoZGVwYXJ0ZWRDdXMpXHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkgdGhpcy5hcnJDdXMuc3BsaWNlKGlkeCwgMSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXJyQ3VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMuc3BsaWNlKDAsIDEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0bkNha2UuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuUG90YXRvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvdW50Q3VzID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJhck1pc3Npb24yKS5ieSgwLjQsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIDIwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNlbGxUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSAtMVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA+PSB0aGlzLm1heEN1c3RvbWVycyB8fCB0aGlzLmFyckN1cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgd2FzR3JvdXBBdENvdW50ZXIgPSB0aGlzLmNvdW50ZXJDdXNDb3VudCA+IDFcclxuICAgICAgICBpZiAod2FzR3JvdXBBdENvdW50ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyQ3VzQ291bnQtLVxyXG4gICAgICAgICAgICB0aGlzLm1jQ29tcC5hZnRlckN1c3RvbWVyTGVmdCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGxcclxuICAgICAgICB0aGlzLm1jQ29tcC5yZXNldFRvU3RhcnQoKVxyXG5cclxuICAgICAgICBsZXQgZW50ZXJDb3VudCA9IHRoaXMuZ2V0RW50ZXJDb3VudEZvcldhdmUoKVxyXG4gICAgICAgIHRoaXMuZW50ZXJDdXN0b21lcnMoZW50ZXJDb3VudClcclxuICAgIH1cclxuICAgIC8vIGlzRmlyc3RDbGlja2JhbmggPSBmYWxzZVxyXG4gICAgLy8gaXNGcmlzdCA9IGZhbHNlXHJcblxyXG5cclxuICAgIC8vIGJ0bl9iYW5oKCkge1xyXG4gICAgLy8gICAgIGlmICghdGhpcy5pc0ZyaXN0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNGcmlzdCA9IHRydWVcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpXHJcblxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlXHJcbiAgICAvLyAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrYmFuaCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2tiYW5oID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5oYW5kdHV0Mi5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgIH0sIDIpXHJcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdGhpcy5nZXRTbG90QmVwKCk7XHJcbiAgICAvLyAgICAgaWYgKGNoZWNrICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJCZXBbY2hlY2tdID0gdHJ1ZTs7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdEJlcC5jaGlsZHJlbltjaGVja10uZ2V0Q29tcG9uZW50KFwiQmFuaFwiKS5zZXRPbigpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaXNGaXJzdFN0ZXAgPSBmYWxzZVxyXG4gICAgLy8gYnRuX2JlcCh0YWcpIHtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgdGhpcy5oYW5kdHV0Mi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgIGlmICghdGhpcy5pc0ZpcnN0U3RlcCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmhhbmR0dXQzLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0ZpcnN0U3RlcCA9IHRydWVcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdGhpcy5nZXRTbG90RGlhKCk7XHJcbiAgICAvLyAgICAgaWYgKGNoZWNrICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJEaWFbY2hlY2tdID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxpc3REaWEuY2hpbGRyZW5bY2hlY2tdLmdldENvbXBvbmVudChcIkRpYVwiKS5nZXRCYW5oKClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0U2xvdEJlcCgpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQmVwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQmVwW2ldXHJcbiAgICAvLyAgICAgICAgIGlmIChjaGlsZCA9PSBmYWxzZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGlcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gbnVsbFxyXG4gICAgLy8gfVxyXG4gICAgLy8gZ2V0U2xvdERpYSgpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyRGlhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdERpYS5jaGlsZHJlbltpXVxyXG4gICAgLy8gICAgICAgICBpZiAoY2hpbGQuZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmlzQmFuaCA9PSBmYWxzZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGlcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gbnVsbFxyXG4gICAgLy8gfVxyXG4gICAgLy8gYnRuX3N0cmF3QmVycnkoKSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyRGlhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBjaGVjayA9IHRoaXMuYXJyRGlhW2ldO1xyXG4gICAgLy8gICAgICAgICBsZXQgYmFuaCA9IHRoaXMubGlzdERpYS5jaGlsZHJlbltpXTtcclxuICAgIC8vICAgICAgICAgaWYgKGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLnN0YXR1cyA9PSAwICYmIGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmlzQmFuaCA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmhhbmR0dXQzLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc2V0U3RhdHVzKDIpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGJ0bl9jaG9jb2xhdGUoKSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyRGlhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBjaGVjayA9IHRoaXMuYXJyRGlhW2ldO1xyXG4gICAgLy8gICAgICAgICBsZXQgYmFuaCA9IHRoaXMubGlzdERpYS5jaGlsZHJlbltpXTtcclxuICAgIC8vICAgICAgICAgaWYgKGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLnN0YXR1cyA9PSAwICYmIGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmlzQmFuaCA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmhhbmR0dXQzLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc2V0U3RhdHVzKDEpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGJ0bl9jcmVhbSgpIHtcclxuXHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gaXNGbHlpbmcgPSBmYWxzZVxyXG4gICAgLy8gYnRuX3NlbGwoaXRlbSwgdGFnKSB7XHJcbiAgICAvLyAgICAgLy8gaWYodGhpcy5pc01vdmluZylyZXR1cm47XHJcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja01pc3Npb24odGFnLCBpdGVtKTtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgbGV0IG1hZyA9IDUwXHJcbiAgICAvLyAgICAgbGV0IHN0YXJ0UG9zID0gY2MudjIoaXRlbS54LCBpdGVtLnkpO1xyXG4gICAgLy8gICAgIGxldCBlbmRQb3MgPSB0aGlzLmFyckN1c1swXS5nZXRDaGlsZEJ5TmFtZShcImJ1YmJsZXNcIikucG9zaXRpb24uYWRkKGNjLnYzKC0zMCwgMTIwKSlcclxuICAgIC8vICAgICBsZXQgbWlkUG9zID0gY2MudjIoZW5kUG9zLnggKyBtYWcsIGVuZFBvcy55ICsgMjAwKTtcclxuXHJcbiAgICAvLyAgICAgbGV0IGJhbmggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUJhbmgpO1xyXG4gICAgLy8gICAgIGJhbmgucGFyZW50ID0gaXRlbS5wYXJlbnQ7XHJcbiAgICAvLyAgICAgYmFuaC5wb3NpdGlvbiA9IGNjLnYzKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG4gICAgLy8gICAgIGJhbmguZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5sb2FkSXRlbSh0YWcpXHJcblxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKGJhbmgpLnRvKDAuMiwgeyBzY2FsZTogMS4yIH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgY2MudHdlZW4oYmFuaCkuYmV6aWVyVG8oMC40LCBzdGFydFBvcywgbWlkUG9zLCBlbmRQb3MpLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZE9rLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXJyQ3VzW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMF1dLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuZG9uZU5vZGUuY2hpbGRyZW5bdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVsxXV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5hbmdyeSgpXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGJhbmguZGVzdHJveSgpXHJcbiAgICAvLyAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIC8vIH1cclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3Bhd0toYXkobWlzc2lvbikge1xyXG4gICAgLy8gICAgIGxldCBhcnIgPSBbY2MudjMoLTYwLCAtMTApLCBjYy52Myg4MCwgLTEwKV1cclxuICAgIC8vICAgICBpZiAobWlzc2lvbi5sZW5ndGggPT0gMykge1xyXG4gICAgLy8gICAgICAgICBhcnIgPSBbY2MudjMoLTc1LCAtMTApLCBjYy52MygzMCwgLTEwKSwgY2MudjMoMTIwLCAtMTApXVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBsZXQga2hheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheSk7XHJcbiAgICAvLyAgICAga2hheS5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5O1xyXG4gICAgLy8gICAgIGtoYXkucG9zaXRpb24gPSBjYy52MygtMTAwLCA1MClcclxuICAgIC8vICAgICB0aGlzLmFycktoYXkucHVzaChraGF5KVxyXG4gICAgLy8gICAgIHRoaXMubG9hZERhdGFLaGF5KG1pc3Npb24sIGtoYXkpXHJcbiAgICAvLyAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnB1c2gobWlzc2lvbilcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpc1RhcmdldEl0ZW1QbGFjZSA9IFtdXHJcbiAgICAvLyAvLyBjb3VudE1pc3MgPSAzXHJcbiAgICAvLyBzcGF3TmV4dEtoYXkocGxhY2UpIHtcclxuICAgIC8vICAgICBsZXQgZmlyc3RDdXMgPSB0aGlzLmFyckN1c1sxXTtcclxuICAgIC8vICAgICBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLnNob3dNaXNzaW9uKCk7XHJcbiAgICAvLyAgICAgZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpO1xyXG5cclxuICAgIC8vICAgICBsZXQgbWlzc2lvbiA9IGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikub3JkZXI7XHJcbiAgICAvLyAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnNwbGljZShwbGFjZSwgMSlcclxuICAgIC8vICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24ucHVzaChtaXNzaW9uKVxyXG4gICAgLy8gICAgIGxldCBwb3MgPSBjYy52MygxMjAwLCAwKTtcclxuICAgIC8vICAgICBsZXQgcHJlS2hheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheSlcclxuICAgIC8vICAgICBwcmVLaGF5LnBhcmVudCA9IHRoaXMubGlzdEtoYXk7XHJcbiAgICAvLyAgICAgcHJlS2hheS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgLy8gICAgIHRoaXMuYXJyS2hheS5wdXNoKHByZUtoYXkpXHJcbiAgICAvLyAgICAgdGhpcy5sb2FkRGF0YUtoYXkobWlzc2lvbiwgcHJlS2hheSlcclxuICAgIC8vICAgICBwcmVLaGF5LnBvc2l0aW9uID0gY2MudjMoLTEwMCArIDQwMCwgNTApXHJcbiAgICAvLyAgICAgbGV0IHRhcmdldEtoYXkgPSB0aGlzLmFycktoYXlbcGxhY2VdXHJcbiAgICAvLyAgICAgY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuXHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSBwbGFjZSArIDE7IGkgPCB0aGlzLmFycktoYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IGtoYXkgPSB0aGlzLmFycktoYXlbaV1cclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oa2hheSkuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXJyS2hheVtpIC0gMV0gPSBraGF5XHJcblxyXG4gICAgLy8gICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubGlzdFJheVswXSkuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFycktoYXkuc3BsaWNlKHBsYWNlLCAxKTtcclxuXHJcbiAgICAvLyAgICAgfSwgMC4yKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gbG9hZERhdGFLaGF5KGRhdGEsIGtoYXkpIHtcclxuICAgIC8vICAgICBpZiAoZGF0YSkge1xyXG4gICAgLy8gICAgICAgICBsZXQgYXJyID0gW2NjLnYzKC02MCwgLTMwKSwgY2MudjMoODAsIC0zMCldXHJcblxyXG4gICAgLy8gICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMykge1xyXG4gICAgLy8gICAgICAgICAgICAgYXJyID0gW2NjLnYzKC03NSwgLTMwKSwgY2MudjMoMzAsIC0zMCksIGNjLnYzKDEyMCwgLTMwKV1cclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW2RhdGFbaV0gLSAxXSlcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0ga2hheVxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGFycltpXVxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5zY2FsZSA9IDAuNjhcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIkl0ZW1cIikubG9hZEdyYXkoKVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gZmlyc3RDbGljayA9IGZhbHNlXHJcbiAgICAvLyBidG5fY2xpY2tCdG4oZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAvLyAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpXHJcblxyXG4gICAgLy8gICAgIHRoaXMuaGFuZHR1dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLmJ0blBpenphLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIGlmICghdGhpcy5maXJzdENsaWNrKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZmlyc3RDbGljayA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaGFuZHR1dC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGxldCBpZCA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgIC8vICAgICBsZXQgbm9kZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja01pc3Npb24oaWQsIG5vZGUpO1xyXG4gICAgLy8gICAgIGlmIChjaGVjaykge1xyXG5cclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgICAgICBsZXQgcG9zID0gY2hlY2sucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGVjay5wb3NpdGlvbik7XHJcbiAgICAvLyAgICAgICAgIHBvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgLy8gICAgICAgICBsZXQgbWFnID0gKHBvcy54ID4gbm9kZS54KSA/IC01MCA6IDUwO1xyXG4gICAgLy8gICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52Mihub2RlLngsIG5vZGUueSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBlbmRQb3MgPSBjYy52Mihwb3MueCwgcG9zLnkpO1xyXG4gICAgLy8gICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoZW5kUG9zLnggKyBtYWcsIGVuZFBvcy55ICsgMjAwKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtpZCAtIDFdKTtcclxuICAgIC8vICAgICAgICAgaXRlbS5wYXJlbnQgPSBub2RlLnBhcmVudDtcclxuICAgIC8vICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGNjLnYzKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG5cclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oaXRlbSkudG8oMC4yLCB7IHNjYWxlOiAxLjIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oaXRlbSkuYmV6aWVyVG8oMC40LCBzdGFydFBvcywgbWlkUG9zLCBlbmRQb3MpLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kT2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJDdXNbdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVswXV0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5kb25lTm9kZS5jaGlsZHJlblt0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlWzFdXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKVxyXG4gICAgLy8gICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIGNoZWNrSXRlbShpZCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChtaXNzaW9uW2ldID09IGlkKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGFyckl0ZW0gPSBbaSwgal07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGFyckl0ZW1cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gbnVsbFxyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG4gICAgLy8gY2hlY2tNaXNzaW9uKGlkLCBub2RlKSB7XHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChpZCA9PSBtaXNzaW9uW2pdKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldW2pdID0gMTAwO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRJdGVtUGxhY2UgPSBbaSwgal1cclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBqKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFycktoYXlbaV0uY2hpbGRyZW5bal07XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpc0NvdW50Q3VzID0gM1xyXG4gICAgLy8gaXNDb3VudERvbmUgPSAwXHJcbiAgICAvLyBpc01vdmluZyA9IGZhbHNlXHJcbiAgICAvLyBjb2luQXJyID0gW11cclxuICAgIC8vIGNoZWNrU3VjY2VzcyhpLCBqKSB7Ly9jaGVjayBjdXMgaG9hbiB0aGFuaCBkb24gaGFuZyBjaHVhXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoaiAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgdGFyZ2V0S2hheSA9IHRoaXMuYXJyS2hheVtpXS5jaGlsZHJlbltqXTtcclxuICAgIC8vICAgICAgICAgICAgIHRhcmdldEtoYXkuZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5vZmZHcmF5KHRhcmdldEtoYXkuY2hpbGRyZW5bMV0pXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjIsIHsgc2NhbGU6IDIuNSB9KS50bygwLjEsIHsgc2NhbGU6IDIuMiB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjIsIHsgc2NhbGU6IDAuOSB9KS50bygwLjEsIHsgc2NhbGU6IDAuNjUgfSkuc3RhcnQoKVxyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICB9LCAwLjQpXHJcbiAgICAvLyAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdHJ1ZVxyXG4gICAgLy8gICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgLy8gICAgIGZvciAobGV0IG0gPSAwOyBtIDwgbWlzc2lvbi5sZW5ndGg7IG0rKykge1xyXG4gICAgLy8gICAgICAgICBpZiAobWlzc2lvblttXSAhPSAxMDApIHtcclxuICAgIC8vICAgICAgICAgICAgIGNoZWNrID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnREb25lKytcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmxpc3RDdXMuY29udmVydFRvV29ybGRTcGFjZUFSKGN1cy5wb3NpdGlvbilcclxuICAgIC8vICAgICAgICAgICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFdvcmxkVG9TY3JlZW5Qb2ludChwb3MpO1xyXG4gICAgLy8gICAgICAgICAgICAgcG9zID0gdGhpcy51aUNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zKTtcclxuICAgIC8vICAgICAgICAgICAgIHBvcyA9IHRoaXMuYmFyQ29pbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpLmFkZChjYy52MygwLCAwKSlcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zcGF3bkNvaW5zRnJvbUN1c3RvbWVyKHBvcywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIHNhdSBraGkgdOG7j2EgcmEgeG9uZyB0aMOsIG1vdmUgduG7gSB0aGFuaCBnb2xkXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ29pbnNUb0dvbGRCYXIodGhpcy5jb2luQXJyLCB0aGlzLmJhckNvaW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgfSk7IGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmhhcHB5KClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubm90aUNvaW4ucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gNTBcclxuICAgIC8vICAgICAgICAgICAgIGlmIChtaXNzaW9uLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDEwMFxyXG5cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGlmIChnbG9iYWxUaGlzLmNvaW4gPj0gMTAwMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKHRydWUpXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTZWxsRG9uZSwgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgICAgIH0sIDAuNilcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5tb3ZlQ3VzT3V0KGkpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmVucXVldWVNb3ZlKHRoaXMuYXJyQ3VzW2ldKTtcclxuICAgIC8vICAgICAgICAgfSwgMC44KVxyXG5cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHNwYXduQ29pbnNGcm9tQ3VzdG9tZXIoc3RhcnRQb3M6IGNjLlZlYzMsIG9uRmluaXNoPzogKCkgPT4gdm9pZCkge1xyXG4gICAgLy8gICAgIHRoaXMuY29pbkFyciA9IFtdXHJcbiAgICAvLyAgICAgY29uc3QgY29pbkNvdW50ID0gNjtcclxuICAgIC8vICAgICBjb25zdCByYWRpdXMgPSA3MDsgLy8gxJHhu5kgdOG7j2EgcmFcclxuXHJcbiAgICAvLyAgICAgbGV0IGZpbmlzaGVkID0gMDtcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2luQ291bnQ7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBjb2luID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcclxuICAgIC8vICAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLmJhckNvaW47XHJcbiAgICAvLyAgICAgICAgIGNvaW4uc2V0UG9zaXRpb24oc3RhcnRQb3MpO1xyXG4gICAgLy8gICAgICAgICBjb2luLnNjYWxlID0gMC44XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29pbkFyci5wdXNoKGNvaW4pXHJcbiAgICAvLyAgICAgICAgIC8vIHJhbmRvbSBoxrDhu5tuZyB04buPYVxyXG4gICAgLy8gICAgICAgICBjb25zdCBhbmdsZSA9IChNYXRoLlBJICogMiAvIGNvaW5Db3VudCkgKiBpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCByYW5kb21SYWRpdXMgPSByYWRpdXMgKyBNYXRoLnJhbmRvbSgpICogNDA7XHJcblxyXG4gICAgLy8gICAgICAgICBjb25zdCB0YXJnZXRQb3MgPSBzdGFydFBvcy5hZGQoY2MudjMoXHJcbiAgICAvLyAgICAgICAgICAgICBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb21SYWRpdXMsXHJcbiAgICAvLyAgICAgICAgICAgICBNYXRoLnNpbihhbmdsZSkgKiByYW5kb21SYWRpdXMsXHJcbiAgICAvLyAgICAgICAgICAgICAwXHJcbiAgICAvLyAgICAgICAgICkpO1xyXG5cclxuICAgIC8vICAgICAgICAgLy8gdOG7j2EgcmFcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oY29pbilcclxuICAgIC8vICAgICAgICAgICAgIC50bygwLjI1LCB7IHBvc2l0aW9uOiB0YXJnZXRQb3MgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuZGVsYXkoMC4wNSlcclxuICAgIC8vICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBmaW5pc2hlZCsrO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCA9PT0gY29pbkNvdW50ICYmIG9uRmluaXNoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG9uRmluaXNoKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIG1vdmVDb2luc1RvR29sZEJhcihjb2luczogY2MuTm9kZVtdLCBnb2xkVGFyZ2V0OiBjYy5Ob2RlKSB7XHJcbiAgICAvLyAgICAgLy8gY29uc3Qgd29ybGRQb3MgPSBnb2xkVGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZ29sZFRhcmdldC5wb3NpdGlvbik7XHJcbiAgICAvLyAgICAgbGV0IGxvY2FsID0gY2MudjMoMCwgMClcclxuICAgIC8vICAgICBjb2lucy5mb3JFYWNoKChjb2luLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAvLyBjb25zdCBsb2NhbCA9IGNvaW4ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGNvaW4pXHJcbiAgICAvLyAgICAgICAgICAgICAuZGVsYXkoaW5kZXggKiAwLjA1KVxyXG4gICAgLy8gICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogbG9jYWwsIHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6IFwicXVhZEluXCIgfSlcclxuICAgIC8vICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb2luLmRlc3Ryb3koKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZEdvbGQoMSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpc0RlbSA9IDBcclxuICAgIC8vIGdldFBsYWNlKGN1cykge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFyckN1cy5pbmRleE9mKGN1cyk7IC8vIGfhu41uIGjGoW5cclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbnF1ZXVlTW92ZShjdXNOb2RlKSB7XHJcbiAgICAvLyAgICAgdGhpcy5tb3ZlUXVldWUucHVzaChjdXNOb2RlKTtcclxuICAgIC8vICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gcHJvY2Vzc1F1ZXVlKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZykgcmV0dXJuO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLm1vdmVRdWV1ZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8vICAgICBsZXQgY3VzTm9kZSA9IHRoaXMubW92ZVF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAvLyAgICAgdGhpcy5fbW92ZUN1c091dChjdXNOb2RlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBtb3ZlUXVldWUgPSBbXTtcclxuICAgIC8vIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgLy8gX21vdmVDdXNPdXQoY3VzTm9kZSkge1xyXG4gICAgLy8gICAgIGxldCBwbGFjZSA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzTm9kZSk7XHJcblxyXG4gICAgLy8gICAgIGlmIChwbGFjZSA9PT0gLTEpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgIC8vICAgICBsZXQgZmlyc3RDdXMgPSBjdXNOb2RlO1xyXG5cclxuICAgIC8vICAgICAvLyA9PT09PSBTcGF3biBjdXN0b21lciB0aeG6v3AgdGhlbyA9PT09PVxyXG4gICAgLy8gICAgIGxldCBuZXh0Q3VzID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuaXNDb3VudEN1c107XHJcblxyXG4gICAgLy8gICAgIGlmIChuZXh0Q3VzKSB7XHJcbiAgICAvLyAgICAgICAgIG5leHRDdXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG5leHRDdXM7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNDb3VudEN1cysrO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8gPT09PT0gVOG6oW8gY3VzdG9tZXIgbeG7m2kg4bufIGN14buRaSA9PT09PVxyXG4gICAgLy8gICAgIC8vIGxldCBuZXdDdXMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVDdXNbdGhpcy5pc0RlbV0pO1xyXG4gICAgLy8gICAgIC8vIG5ld0N1cy5wYXJlbnQgPSB0aGlzLmxpc3RDdXM7XHJcblxyXG4gICAgLy8gICAgIC8vIGxldCBsYXN0Q3VzID0gdGhpcy5hcnJDdXNbdGhpcy5hcnJDdXMubGVuZ3RoIC0gMV07XHJcbiAgICAvLyAgICAgLy8gbmV3Q3VzLnBvc2l0aW9uID0gbGFzdEN1cy5wb3NpdGlvbi5hZGQoY2MudjMoNjAwLCAwKSk7XHJcblxyXG4gICAgLy8gICAgIC8vIHRoaXMuaXNEZW0gPSAodGhpcy5pc0RlbSArIDEpICUgdGhpcy5saXN0UHJlQ3VzLmxlbmd0aDsgYGBcclxuICAgIC8vICAgICAvLyB0aGlzLmFyckN1cy5wdXNoKG5ld0N1cyk7XHJcblxyXG4gICAgLy8gICAgIC8vID09PT09IE1vdmUgdGjhurFuZyBi4buLIG91dCA9PT09PVxyXG4gICAgLy8gICAgIGZpcnN0Q3VzLnpJbmRleCA9IC0xO1xyXG4gICAgLy8gICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuaXNTdWNjZXNzID0gdHJ1ZVxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKGZpcnN0Q3VzKVxyXG4gICAgLy8gICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgLy8gICAgICAgICAuYnkoMC44ICogKHBsYWNlICsgMSksIHsgcG9zaXRpb246IGNjLnYzKC00MDAgKiAocGxhY2UgKyAxKSwgMCkgfSlcclxuICAgIC8vICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKGZpcnN0Q3VzKVxyXG4gICAgLy8gICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgLy8gICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDAgfSlcclxuICAgIC8vICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgLy8gICAgIC8vID09PT09IE1vdmUgY8OhYyB0aOG6sW5nIHBow61hIHNhdSA9PT09PVxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSBwbGFjZSArIDE7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckN1c1tpXTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKVxyXG4gICAgLy8gICAgICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgIC8vICAgICAgICAgICAgIC5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC00MDAsIDApIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gPT09PT0gUmVtb3ZlIGto4buPaSBt4bqjbmcgPT09PT1cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyQ3VzLnNwbGljZShwbGFjZSwgMSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XHJcblxyXG4gICAgLy8gICAgIH0sIDEuMSk7XHJcblxyXG4gICAgLy8gICAgIC8vID09PT09IFNwYXduIGtoYXkgPT09PT1cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzQ291bnREb25lIDwgNSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zcGF3TmV4dEtoYXkocGxhY2UpO1xyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0sIDAuMyk7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNDb3VudERvbmUgPT0gNSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGZpbmlzaE1vdmUoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpOyAvLyBjaOG6oXkgdGnhur9wIHRo4bqxbmcga+G6vyB0aeG6v3BcclxuICAgIC8vIH1cclxuICAgIC8vIGNoZWNrU3VjY2Vzc0l0ZW0oKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGVjayA9IHRydWVcclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobWlzc2lvbltqXSAhPSAxMDApIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBudWxsKVxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGl0ZW1RdWV1ZTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAvLyBzaHVmZmxlSXRlbSgpIHtcclxuICAgIC8vICAgICB0aGlzLml0ZW1RdWV1ZSA9IFtdO1xyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5pdGVtUXVldWUucHVzaChpKTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIHNodWZmbGUgRmlzaGVyLVlhdGVzXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgIC8vICAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgIC8vICAgICAgICAgW3RoaXMuaXRlbVF1ZXVlW2ldLCB0aGlzLml0ZW1RdWV1ZVtqXV0gPSBbdGhpcy5pdGVtUXVldWVbal0sIHRoaXMuaXRlbVF1ZXVlW2ldXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0TmV4dEl0ZW1JbmRleCgpIHtcclxuXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2h1ZmZsZUl0ZW0oKTsgLy8gdOG6oW8gbMaw4bujdCBt4bubaVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaXRlbVF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gbGFzdEl0ZW1JbmRleDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAvLyBzcGF3bkl0ZW0oKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RSYXkubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMubGFzdEl0ZW1JbmRleFtpXSA9IC0xOyAvLyBjaMawYSBjw7MgaXRlbSB0csaw4bubY1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5zcGF3bkl0ZW1PblJheShpKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3Bhd25JdGVtT25SYXkoaW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgIC8vICAgICBsZXQgbWFnID0gKGluZGV4ID09IDApID8gMTAwMCA6IC0xMDAwO1xyXG5cclxuICAgIC8vICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XHJcblxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XHJcbiAgICAvLyAgICAgfSwgMik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY3JlYXRlSXRlbShpbmRleDogbnVtYmVyLCBtYWc6IG51bWJlcikge1xyXG4gICAgLy8gICAgIGxldCByZCA9IHRoaXMuZ2V0TmV4dEl0ZW1JbmRleCgpO1xyXG4gICAgLy8gICAgIHRoaXMubGFzdEl0ZW1JbmRleFtpbmRleF0gPSByZDtcclxuXHJcbiAgICAvLyAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW3JkXSk7XHJcbiAgICAvLyAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmxpc3RSYXlbaW5kZXhdO1xyXG5cclxuICAgIC8vICAgICB0aGlzLmFyckl0ZW1baW5kZXhdLnB1c2goaXRlbSk7XHJcblxyXG4gICAgLy8gICAgIGl0ZW0ucG9zaXRpb24gPSBjYy52MyhtYWcsIC00MCk7XHJcblxyXG4gICAgLy8gICAgIHRoaXMubW92ZUl0ZW0oaXRlbSwgbWFnKTtcclxuICAgIC8vIH1cclxuICAgIC8vIG1vdmVJdGVtKGl0ZW06IGNjLk5vZGUsIG1hZykge1xyXG4gICAgLy8gICAgIGxldCB0YXJnZXRYID0gLW1hZztcclxuICAgIC8vICAgICBjYy50d2VlbihpdGVtKVxyXG4gICAgLy8gICAgICAgICAudG8oMTcsIHsgeDogdGFyZ2V0WCB9KVxyXG4gICAgLy8gICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pZFNvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuNSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldEdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1ncmF5LXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuXHJcbiAgICB9XHJcbiAgICBvZmZHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgfVxyXG4gICAgLy8gbW92ZUNsb2NrdG9VSShub2RlMSkge1xyXG4gICAgLy8gICAgIHRoaXMubW92ZUl0ZW1Ub1VJKG5vZGUxLCB0aGlzLmJhclRpbWUuY2hpbGRyZW5bMV0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gbW92ZUl0ZW1Ub1VJKG5vZGUxLCBub2RlMikge1xyXG4gICAgLy8gICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdvb2RpbiwgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgbGV0IHBvcyA9IG5vZGUyLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTIucG9zaXRpb24pXHJcbiAgICAvLyAgICAgcG9zID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgLy8gICAgIC8vIHBvcyA9IHBvcy5hZGQoY2MudjMoMCwgMCkpXHJcbiAgICAvLyAgICAgbGV0IHBvczIgPSBub2RlMS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUxLnBvc2l0aW9uKTtcclxuICAgIC8vICAgICBwb3MyID0gdGhpcy5tYWluQ2FtZXJhLmdldFdvcmxkVG9TY3JlZW5Qb2ludChwb3MyKTtcclxuICAgIC8vICAgICBwb3MyID0gdGhpcy51aUNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zMik7XHJcbiAgICAvLyAgICAgcG9zMiA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpLmFkZChjYy52MygwLCAwKSlcclxuICAgIC8vICAgICBub2RlMS5wYXJlbnQgPSB0aGlzLnVpTm9kZTtcclxuICAgIC8vICAgICBub2RlMS5zY2FsZSA9IHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gLyB0aGlzLnVpQ2FtZXJhLnpvb21SYXRpbyAqIDAuN1xyXG4gICAgLy8gICAgIG5vZGUxLnBvc2l0aW9uID0gcG9zMlxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKG5vZGUxKS50bygwLjQsIHsgcG9zaXRpb246IHBvcywgc2NhbGU6IDAuNCB9KS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgbm9kZTEuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5taXNzaW9uQmFyLmdldENvbXBvbmVudChcInVwZGF0ZUJhclwiKS51cGRhdGVCYXIoKTtcclxuICAgIC8vICAgICAgICAgLy8gd29vZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZXhwXCIpXHJcbiAgICAvLyAgICAgICAgIC8vIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdvb2RPdXQsIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIH0pLnN0YXJ0KClcclxuICAgIC8vIH1cclxuICAgIGlzRW5kR2FtZSA9IGZhbHNlXHJcbiAgICBvbkVuZEdhbWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IHRydWVcclxuICAgICAgICB0aGlzLndhcm5pbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uLmdldENvbXBvbmVudChcImJhclRpbWVcIikuZW5kR2FtZSgpXHJcbiAgICAgICAgICAgIHRoaXMuYW1hemluZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua1dpbixmYWxzZSwwLjUpXHJcblxyXG4gICAgICAgICAgICB9LDAuNSlcclxuXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbixmYWxzZSwxKVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5lbmRDYXJkV2luKSB0aGlzLmVuZENhcmRXaW4uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB9LCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFyckN1cykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCI2LmFuZ3J5XCIsIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgICAgIHRoaXMudGltZXVwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5raW5nLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5rTG9zZSwgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyBidG5fY2hvb3NlKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgaXNEb2MgPSBmYWxzZVxyXG4gICAgLy8gdXBkYXRlKGR0KSB7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5sYkNvaW4uc3RyaW5nID0gZ2xvYmFsVGhpcy5nb2xkLnRvU3RyaW5nKClcclxuICAgIC8vICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAvLyAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICB1cGRhdGVSZXNwb25zaXZlKCkge1xyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcnJQb3NNZW51TmdhbmcgPSBbY2MudjMoLTM5MSwgLTEwMiksIGNjLnYzKDM3NSwgLTExMiksIGNjLnYzKDExNCwgLTEyMCksIGNjLnYzKC00MDksIC0yODQpLCBjYy52MygtMTU4LCAtMjk2KSwgY2MudjMoMTE4LCAtMjgwKSwgY2MudjMoMzkwLCAtMjk2KSwgY2MudjMoLTEzNywgLTExNildO1xyXG4gICAgYXJyUG9zRG9jID0gW2NjLnYzKDI2LCAtMzM3KSwgY2MudjMoMzM2LCAtMTEyKSwgY2MudjMoMTUuNSwgLTEyMSksIGNjLnYzKC0xNzAsIC01MjUuNyksIGNjLnYzKC0zMDAsIC0zNTIpLCBjYy52MygxODYuOTYsIC01MTIpLCBjYy52MygzNTUsIC0zMzUpLCBjYy52MygtMjkyLCAtMTE2KV1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44NVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmVuZENhcmRXaW4uc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNiA6IDAuNFxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5zY2FsZSA9IChsb2dpYykgPyAyLjUgOiAxLjRcclxuICAgICAgICB0aGlzLmJhckNvaW4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gKGxvZ2ljKSA/IDIxMCA6IDE0MFxyXG4gICAgICAgIHRoaXMucGhhb0hvYS5zY2FsZSA9IChsb2dpYykgPyA5IDogNVxyXG4gICAgICAgIHRoaXMuZ3VpbGQuc2NhbGUgPSAobG9naWMpID8gMiA6IDEuMlxyXG4gICAgICAgIHRoaXMuZ3VpbGQucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoMCwgLTkwMCkgOiBjYy52MygwLCAtMzYwKVxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5zY2FsZSA9IChsb2dpYykgPyAxIDogMVxyXG4gICAgICAgIC8vIHRoaXMubGlzdEtoYXkuc2NhbGUgPSAobG9naWMpID8gMS4xIDogMVxyXG4gICAgICAgIHRoaXMudGltZXVwLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcclxuICAgICAgICB0aGlzLmFtYXppbmcuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuNVxyXG4gICAgICAgIHRoaXMubm90aU1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMiA6IDFcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24yLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgLy8gdGhpcy50dXRNaXNpb24uc2NhbGUgPSAobG9naWMpID8gMiA6IDFcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMS43IDogMVxyXG4gICAgICAgIC8vIHRoaXMuYmFyTWlzc2lvbjIuc2NhbGUgPSAobG9naWMpID8gMiA6IDFcclxuICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAwLCAwKSA6IGNjLnYzKDAsIDExMCwgMClcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNTBcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzRG9jID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgY29uc3QgVEFMTF9QSE9ORV9NSU5fUkFUSU8gPSAyLjA7ICAgICAgICAvLyBpUGhvbmUgWCB+Mi4xNiwgMjA6OSBBbmRyb2lkIH4yLjIyXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuN1xyXG4gICAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPj0gVEFMTF9QSE9ORV9NSU5fUkFUSU8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAzMDArMzBcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAxNTArMzBcclxuICAgICAgICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA+IDIuMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNzVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjVcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuMlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJDb2luLnNjYWxlID0gMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzRG9jID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44NVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=