
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
        var canPickup = (this.mcComp.localId == 1 || this.mcComp.localId == 2 || this.mcComp.localId == 3 || this.mcComp.localId == 4 || this.mcComp.localId == 5) && machineComp.chicken != null && machineComp.isChin && this.mcComp.canPickItemType("chicken");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcR2FtZURvbnV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0FBRXZCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcXJDQztRQW5yQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElB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RSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZLLGVBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBOztJQXVGeEssQ0FBQztJQTkvQkcsMENBQTBDO0lBQzFDLHlCQUFNLEdBQU47UUFB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QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFD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LENBQUM7NkNBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNLO0lBM0lSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxckM1QjtJQUFELGVBQUM7Q0FyckNELEFBcXJDQyxDQXJyQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBcXJDakQ7a0JBcnJDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5nbG9iYWxUaGlzLmNvaW4gPSAwXHJcbmdsb2JhbFRoaXMuR2FtZSA9IGZhbHNlXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbG9zZVBvcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRPazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUcmFuczogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENyZWFtOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDaGVycnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdyb25nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbU1pbmk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCYW5oOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmRXaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJUaW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyQ29pbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGVja0l0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb0hvYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0SXRlbTogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UmF5OiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtoYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUtoYXk6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UmF5Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGltZXVwOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhbWF6aW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIG5vdGlDb2luOiBjYy5BbmltYXRpb24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vdGlNaXNzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdFByZUN1czogY2MuUHJlZmFiW10gPSBbXVxyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RNZW51OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZHR1dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmR0dXQyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZHR1dDM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDb2luOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmREb2M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy9uZXdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEJlcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3REaWE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVCYW5oOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJNaXNzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJNaXNzaW9uMjogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vYnRuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNoaWNrZW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5NYWNoaW5lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQ29jYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNha2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Qb3RhdG86IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpbmQxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsaXN0UHJlQ1VzOmNjLlByZWZhYltdPVtdXHJcbiAgICBtY0NvbXAgPSBudWxsXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyB0dXRNaXNpb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBhcnJCZXAgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICBhcnJEaWEgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcblxyXG5cclxuICAgIG1heEtoYXkgPSA3XHJcblxyXG4gICAgYXJyRG9udXRwb3MgPSBbXVxyXG5cclxuICAgIGlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgaXNUdXRNZWF0ID0gZmFsc2VcclxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXHJcbiAgICBpc1R1dENsaWNrTWVhdCA9IGZhbHNlXHJcblxyXG5cclxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcclxuICAgIC8vIGlzU3RlcCA9IDBcclxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIG1heEN1c3RvbWVycyA9IDZcclxuICAgIGlkU291bmQgPSBudWxsXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICAvL2l0ZW06IDA6YnVnZXIsIDE6IGtlbSAyOmRvbnV0IDM6a2hvYWl0YXkgNDpwaG8gNTogcHVkZGluZyA2OiB0cmEgIDc6YmFuaG1pIDg6Y29jb251dFxyXG4gICAgcmF5WTogbnVtYmVyW10gPSBbMTIwLCAwLCAtMTIwXTsgICAvLyB24buLIHRyw60gWSBj4bunYSAzIHJheVxyXG4gICAgc3Bhd25YOiBudW1iZXIgPSA3MDA7ICAgICAgICAgICAgICAvLyB24buLIHRyw60gc3Bhd24gYsOqbiBwaOG6o2lcclxuICAgIGFyckl0ZW0gPSBbW10sIFtdXVxyXG4gICAgYXJyS2hheSA9IFtdXHJcbiAgICBhcnJUYXJnZXRNaXNzaW9uID0gW11cclxuICAgIGFyckN1cyA9IFtdXHJcbiAgICBzZWxsVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgc2VsbFRyYXlTbG90ID0gLTFcclxuICAgIGN1c0NvdW50ZXJQb3MgPSBudWxsXHJcbiAgICBjdXNTbG90R2FwID0gNTAwXHJcbiAgICBjdXNFbnRlck9mZnNldCA9IGNjLnYzKDM1MCwgMCwgMClcclxuICAgIGN1c1dhbGtTcGVlZCA9IDQzNy41XHJcbiAgICBjb3VudGVyQ3VzQ291bnQgPSAwXHJcbiAgICBwcmVDdXNJbmRleCA9IDBcclxuICAgIGlzU3RhcnRnYW1lID0gZmFsc2VcclxuICAgIGlzRmlyc3RDbGljayA9IGZhbHNlXHJcbiAgICAvLzA6YmFuaCB0aHVvbmcgMTpjaG9jb2xhdGUgMjogc3RyYXdiZXJyeSBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDdXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcclxuICAgICAgICBjYy52aWV3LnNldFJlc2l6ZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vdGlNaXNzaW9uKS5ieSgwLjQsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIDIwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlNaXNzaW9uLmFjdGl2ZSA9IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uLmdldENvbXBvbmVudChcImJhclRpbWVcIikuY291bnREb3duKClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9LCAxLjUpXHJcbiAgICAgICAgdGhpcy5tY0NvbXAgPSB0aGlzLm1jLmdldENvbXBvbmVudChcIm1jXCIpXHJcbiAgICB9XHJcbiAgICBpc0hhbmQgPSBudWxsXHJcblxyXG4gICAgaW5pdEN1c1F1ZXVlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jdXNDb3VudGVyUG9zICYmIHRoaXMuYXJyQ3VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXNDb3VudGVyUG9zID0gdGhpcy5hcnJDdXNbMF0ucG9zaXRpb24uY2xvbmUoKS5zdWIodGhpcy5jdXNFbnRlck9mZnNldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VzQ291bnRlclBvcyhzbG90OiBudW1iZXIsIHRvdGFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmluaXRDdXNRdWV1ZSgpXHJcbiAgICAgICAgaWYgKHRvdGFsIDw9IDEpIHJldHVybiB0aGlzLmN1c0NvdW50ZXJQb3MuY2xvbmUoKVxyXG4gICAgICAgIGxldCBvZmZzZXRYID0gKHNsb3QgLSAodG90YWwgLSAxKSAvIDIpICogdGhpcy5jdXNTbG90R2FwXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzQ291bnRlclBvcy5jbG9uZSgpLmFkZChjYy52MyhvZmZzZXRYLCAwLCAwKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q291bnRlck1pc3Npb25zKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ICYmIGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1tpXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLnNob3dNaXNzaW9uKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXJDdXN0b21lcnMoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY291bnRlckN1c0NvdW50ID0gY291bnRcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKDAsIDAsIDApXVxyXG4gICAgICAgIGlmIChjb3VudCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGFyclBvcyA9IFtjYy52MygtMjg1LCAwLCAwKSwgY2MudjMoODgsIDAsIDApXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb3VudCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGFyclBvcyA9IFtjYy52MygtNDQzLCAwLCAwKSwgY2MudjMoLTczLCAwLCAwKSwgY2MudjMoMjczLCAwLCAwKV1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1heER1cmF0aW9uID0gMFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQgJiYgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICAvLyBsZXQgdGFyZ2V0UG9zID0gdGhpcy5nZXRDdXNDb3VudGVyUG9zKGksIGNvdW50KVxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gYXJyUG9zW2ldXHJcblxyXG4gICAgICAgICAgICBsZXQgc3Bhd25Qb3MgPSB0YXJnZXRQb3MuY2xvbmUoKS5hZGQodGhpcy5jdXNFbnRlck9mZnNldClcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gc3Bhd25Qb3Muc3ViKHRhcmdldFBvcykubWFnKClcclxuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gZGlzdGFuY2UgLyB0aGlzLmN1c1dhbGtTcGVlZFxyXG4gICAgICAgICAgICBtYXhEdXJhdGlvbiA9IE1hdGgubWF4KG1heER1cmF0aW9uLCBkdXJhdGlvbilcclxuXHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjdXMpXHJcbiAgICAgICAgICAgIGN1cy5wb3NpdGlvbiA9IHNwYXduUG9zXHJcbiAgICAgICAgICAgIGN1cy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLm1vdmUoKVxyXG4gICAgICAgICAgICBjYy50d2VlbihjdXMpXHJcbiAgICAgICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgcG9zaXRpb246IHRhcmdldFBvcyB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q291bnRlck1pc3Npb25zKGNvdW50KVxyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDEgJiYgdGhpcy5hcnJDdXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IHRoaXMuYXJyQ3VzWzBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBtYXhEdXJhdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbnRlckNvdW50Rm9yV2F2ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PT0gMSkgcmV0dXJuIDJcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PT0gMykgcmV0dXJuIDNcclxuICAgICAgICByZXR1cm4gMVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduQ3VzdG9tZXJGcm9tUHJlZmFiKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RQcmVDVXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLmxpc3RQcmVDVXNbdGhpcy5wcmVDdXNJbmRleCAlIHRoaXMubGlzdFByZUNVcy5sZW5ndGhdXHJcbiAgICAgICAgdGhpcy5wcmVDdXNJbmRleCsrXHJcbiAgICAgICAgbGV0IG5ld0N1cyA9IGNjLmluc3RhbnRpYXRlKHByZWZhYilcclxuICAgICAgICBuZXdDdXMucGFyZW50ID0gdGhpcy5saXN0Q3VzXHJcbiAgICAgICAgbmV3Q3VzLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIG5ld0N1c1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VDdXN0b21lcihkZXBhcnRlZEN1czogY2MuTm9kZSwgY291bnRlclBvczogY2MuVmVjMykge1xyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLmFyckN1cy5pbmRleE9mKGRlcGFydGVkQ3VzKVxyXG5cclxuICAgICAgICBsZXQgbmV3Q3VzID0gdGhpcy5zcGF3bkN1c3RvbWVyRnJvbVByZWZhYigpXHJcbiAgICAgICAgaWYgKCFuZXdDdXMpIHJldHVyblxyXG5cclxuICAgICAgICBsZXQgbmV3Q3VzQ29tcCA9IG5ld0N1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAgICAgaWYgKG5ld0N1c0NvbXApIHtcclxuICAgICAgICAgICAgbmV3Q3VzQ29tcC5nYW1lUGxheSA9IHRoaXNcclxuICAgICAgICAgICAgbmV3Q3VzQ29tcC5pc1JlYWR5Rm9yU2VsbCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxsVGFyZ2V0Q3VzID09PSBkZXBhcnRlZEN1cyB8fCB0aGlzLmlzVGFyZ2V0Q3VzID09PSBkZXBhcnRlZEN1cykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGxUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gLTFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubWNDb21wKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWNDb21wLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2lkeF0gPSBuZXdDdXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKG5ld0N1cylcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVwYXJ0ZWRDdXMuZGVzdHJveSgpXHJcblxyXG4gICAgICAgIGxldCBzcGF3blBvcyA9IGNvdW50ZXJQb3MuY2xvbmUoKS5hZGQodGhpcy5jdXNFbnRlck9mZnNldClcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBzcGF3blBvcy5zdWIoY291bnRlclBvcykubWFnKClcclxuICAgICAgICBsZXQgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHRoaXMuY3VzV2Fsa1NwZWVkXHJcblxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChuZXdDdXMpXHJcbiAgICAgICAgbmV3Q3VzLnBvc2l0aW9uID0gc3Bhd25Qb3NcclxuICAgICAgICBuZXdDdXMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIG5ld0N1c0NvbXAubW92ZSgpXHJcbiAgICAgICAgY2MudHdlZW4obmV3Q3VzKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgcG9zaXRpb246IGNvdW50ZXJQb3MgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3Q3VzQ29tcC5zaG93TWlzc2lvbigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbmV3Q3VzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBvbkhpbmQoKSB7XHJcbiAgICAgICAgdGhpcy5oaW5kMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEN1c1F1ZXVlKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW50ZXJDdXN0b21lcnMoMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5DaGlja2VuLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzKVxyXG4gICAgfVxyXG4gICAgaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgaXNGaXN0ID0gZmFsc2VcclxuICAgIGlzRmlzdENsaWNrQ2hpY2tlbiA9IGZhbHNlXHJcblxyXG4gICAgaXNNY0J1c3koKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNNb3ZpbmcgfHwgKHRoaXMubWNDb21wICYmIHRoaXMubWNDb21wLmlzV2Fsa2luZygpKVxyXG4gICAgfVxyXG5cclxuICAgIGJ0bl9jaGlja2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuaXNGaXN0Q2xpY2tDaGlja2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXN0Q2xpY2tDaGlja2VuID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bk1hY2hpbmUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfSwgMilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5jYW5QaWNrTW9yZUNoaWNrZW4oKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5DaGlja2VuLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9DaGlja2VuKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnRuX21heUNoaWVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICBsZXQgbWFjaGluZUNvbXAgPSB0aGlzLmJ0bk1hY2hpbmUuZ2V0Q29tcG9uZW50KFwibWFjaGluZVwiKVxyXG4gICAgICAgIGxldCBjYW5GcnkgPSB0aGlzLm1jQ29tcC5nZXRSYXdUcmF5U2xvdCgpID49IDAgJiYgbWFjaGluZUNvbXAuY2hpY2tlbiA9PSBudWxsXHJcbiAgICAgICAgbGV0IGNhblBpY2t1cCA9ICh0aGlzLm1jQ29tcC5sb2NhbElkID09IDEgfHwgdGhpcy5tY0NvbXAubG9jYWxJZCA9PSAyIHx8IHRoaXMubWNDb21wLmxvY2FsSWQgPT0gMyB8fCB0aGlzLm1jQ29tcC5sb2NhbElkID09IDQgfHwgdGhpcy5tY0NvbXAubG9jYWxJZCA9PSA1KSAmJiBtYWNoaW5lQ29tcC5jaGlja2VuICE9IG51bGwgJiYgbWFjaGluZUNvbXAuaXNDaGluICYmIHRoaXMubWNDb21wLmNhblBpY2tJdGVtVHlwZShcImNoaWNrZW5cIilcclxuICAgICAgICBpZiAoIWNhbkZyeSAmJiAhY2FuUGlja3VwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9NYWNoaW5lKClcclxuICAgIH1cclxuICAgIGJ0bl9jb2xhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICBsZXQgY29jYUNvbXAgPSB0aGlzLmJ0bkNvY2EuZ2V0Q29tcG9uZW50KFwiY29jYVwiKVxyXG4gICAgICAgIGxldCBjYW5Db29rID0gIWNvY2FDb21wLmlzQnVzeSgpXHJcbiAgICAgICAgbGV0IGNhblBpY2t1cCA9IGNvY2FDb21wLmlzQ29jYSAmJiB0aGlzLm1jQ29tcC5jYW5QaWNrSXRlbVR5cGUoXCJjb2NhXCIpXHJcbiAgICAgICAgaWYgKCFjYW5Db29rICYmICFjYW5QaWNrdXApIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0NvY2EoKVxyXG4gICAgfVxyXG4gICAgYnRuX3NhdWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMubWNDb21wLmhhc0FueUl0ZW0oKSB8fCB0aGlzLm1jQ29tcC5maW5kQ29va2VkVHJheVNsb3QoKSA8IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb1NhdWNlKClcclxuICAgIH1cclxuICAgIGJ0bl9jYWtlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNNb3ZpbmcpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQ2FrZSgpXHJcbiAgICB9XHJcbiAgICBidG5fdG9tYXRvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb1RvbWF0bygpXHJcbiAgICB9XHJcbiAgICBnZXRDdXNUcmF5SW5kZXgoY3VzTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyckN1cy5pbmRleE9mKGN1c05vZGUpXHJcbiAgICB9XHJcbiAgICBjaGVja1NlbGwodGFyZ2V0Q3VzPzogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgc2VsbCBNYWluXCIpXHJcbiAgICAgICAgbGV0IGN1cyA9IHRhcmdldEN1cyB8fCB0aGlzLnNlbGxUYXJnZXRDdXMgfHwgdGhpcy5pc1RhcmdldEN1cyB8fCB0aGlzLmFyckN1c1swXVxyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkgfHwgIWN1cykgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKVxyXG4gICAgICAgIGlmICghY3VzQ29tcCB8fCBjdXNDb21wLmlzU3VjY2VzcyB8fCAhY3VzQ29tcC5pc1JlYWR5Rm9yU2VsbCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IHRyYXlJZHggPSB0aGlzLm1jQ29tcC5maW5kVHJheUZvckN1c3RvbWVyKGN1c0NvbXApXHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5oYXNBbnlJdGVtKCkgfHwgdHJheUlkeCA8IDApIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2VsbFRhcmdldEN1cyA9IGN1c1xyXG4gICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gdHJheUlkeFxyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBjdXNcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0J1eSgpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHZhbGlkYXRlU2VsbEF0Q291bnRlcigpIHtcclxuICAgICAgICBsZXQgY3VzID0gdGhpcy5zZWxsVGFyZ2V0Q3VzIHx8IHRoaXMuaXNUYXJnZXRDdXMgfHwgdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICBpZiAoIWN1cykge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgY3VzQ29tcC5pc1N1Y2Nlc3MgfHwgIWN1c0NvbXAuaXNSZWFkeUZvclNlbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gLTFcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1c0NvbXAudmFsaWRhdGVTZWxsKClcclxuICAgIH1cclxuICAgIG5leHRDdXModmFsdWU6IGJvb2xlYW4sIGRlcGFydGVkQ3VzPzogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmIChkZXBhcnRlZEN1cykge1xyXG4gICAgICAgICAgICBsZXQgaWR4ID0gdGhpcy5hcnJDdXMuaW5kZXhPZihkZXBhcnRlZEN1cylcclxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB0aGlzLmFyckN1cy5zcGxpY2UoaWR4LCAxKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hcnJDdXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5zcGxpY2UoMCwgMSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY291bnRDdXMrK1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2FrZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idG5Qb3RhdG8uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY291bnRDdXMgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmJhck1pc3Npb24yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYmFyTWlzc2lvbjIpLmJ5KDAuNCwgeyBvcGFjaXR5OiAtMjU1LCBwb3NpdGlvbjogY2MudjMoMCwgMjAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhck1pc3Npb24yLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2VsbFRhcmdldEN1cyA9IG51bGxcclxuICAgICAgICB0aGlzLnNlbGxUcmF5U2xvdCA9IC0xXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID49IHRoaXMubWF4Q3VzdG9tZXJzIHx8IHRoaXMuYXJyQ3VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3YXNHcm91cEF0Q291bnRlciA9IHRoaXMuY291bnRlckN1c0NvdW50ID4gMVxyXG4gICAgICAgIGlmICh3YXNHcm91cEF0Q291bnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXJDdXNDb3VudC0tXHJcbiAgICAgICAgICAgIHRoaXMubWNDb21wLmFmdGVyQ3VzdG9tZXJMZWZ0KClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgIHRoaXMubWNDb21wLnJlc2V0VG9TdGFydCgpXHJcblxyXG4gICAgICAgIGxldCBlbnRlckNvdW50ID0gdGhpcy5nZXRFbnRlckNvdW50Rm9yV2F2ZSgpXHJcbiAgICAgICAgdGhpcy5lbnRlckN1c3RvbWVycyhlbnRlckNvdW50KVxyXG4gICAgfVxyXG4gICAgLy8gaXNGaXJzdENsaWNrYmFuaCA9IGZhbHNlXHJcbiAgICAvLyBpc0ZyaXN0ID0gZmFsc2VcclxuXHJcblxyXG4gICAgLy8gYnRuX2JhbmgoKSB7XHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLmlzRnJpc3QpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0ZyaXN0ID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICB0aGlzLmlzRmlyc3RDbGljayA9IHRydWVcclxuICAgIC8vICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2tiYW5oKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzRmlyc3RDbGlja2JhbmggPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmhhbmR0dXQyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgfSwgMilcclxuICAgIC8vICAgICBsZXQgY2hlY2sgPSB0aGlzLmdldFNsb3RCZXAoKTtcclxuICAgIC8vICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckJlcFtjaGVja10gPSB0cnVlOztcclxuICAgIC8vICAgICAgICAgdGhpcy5saXN0QmVwLmNoaWxkcmVuW2NoZWNrXS5nZXRDb21wb25lbnQoXCJCYW5oXCIpLnNldE9uKClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpc0ZpcnN0U3RlcCA9IGZhbHNlXHJcbiAgICAvLyBidG5fYmVwKHRhZykge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICB0aGlzLmhhbmR0dXQyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLmlzRmlyc3RTdGVwKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaGFuZHR1dDMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzRmlyc3RTdGVwID0gdHJ1ZVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBsZXQgY2hlY2sgPSB0aGlzLmdldFNsb3REaWEoKTtcclxuICAgIC8vICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckRpYVtjaGVja10gPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdERpYS5jaGlsZHJlbltjaGVja10uZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmdldEJhbmgoKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXRTbG90QmVwKCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJCZXAubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJCZXBbaV1cclxuICAgIC8vICAgICAgICAgaWYgKGNoaWxkID09IGZhbHNlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBudWxsXHJcbiAgICAvLyB9XHJcbiAgICAvLyBnZXRTbG90RGlhKCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEaWEubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0RGlhLmNoaWxkcmVuW2ldXHJcbiAgICAvLyAgICAgICAgIGlmIChjaGlsZC5nZXRDb21wb25lbnQoXCJEaWFcIikuaXNCYW5oID09IGZhbHNlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBudWxsXHJcbiAgICAvLyB9XHJcbiAgICAvLyBidG5fc3RyYXdCZXJyeSgpIHtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEaWEubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgLy8gbGV0IGNoZWNrID0gdGhpcy5hcnJEaWFbaV07XHJcbiAgICAvLyAgICAgICAgIGxldCBiYW5oID0gdGhpcy5saXN0RGlhLmNoaWxkcmVuW2ldO1xyXG4gICAgLy8gICAgICAgICBpZiAoYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc3RhdHVzID09IDAgJiYgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuaXNCYW5oID09IHRydWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaGFuZHR1dDMuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zZXRTdGF0dXMoMilcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gYnRuX2Nob2NvbGF0ZSgpIHtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEaWEubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgLy8gbGV0IGNoZWNrID0gdGhpcy5hcnJEaWFbaV07XHJcbiAgICAvLyAgICAgICAgIGxldCBiYW5oID0gdGhpcy5saXN0RGlhLmNoaWxkcmVuW2ldO1xyXG4gICAgLy8gICAgICAgICBpZiAoYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc3RhdHVzID09IDAgJiYgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuaXNCYW5oID09IHRydWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaGFuZHR1dDMuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zZXRTdGF0dXMoMSlcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gYnRuX2NyZWFtKCkge1xyXG5cclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBpc0ZseWluZyA9IGZhbHNlXHJcbiAgICAvLyBidG5fc2VsbChpdGVtLCB0YWcpIHtcclxuICAgIC8vICAgICAvLyBpZih0aGlzLmlzTW92aW5nKXJldHVybjtcclxuICAgIC8vICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrTWlzc2lvbih0YWcsIGl0ZW0pO1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICBsZXQgbWFnID0gNTBcclxuICAgIC8vICAgICBsZXQgc3RhcnRQb3MgPSBjYy52MihpdGVtLngsIGl0ZW0ueSk7XHJcbiAgICAvLyAgICAgbGV0IGVuZFBvcyA9IHRoaXMuYXJyQ3VzWzBdLmdldENoaWxkQnlOYW1lKFwiYnViYmxlc1wiKS5wb3NpdGlvbi5hZGQoY2MudjMoLTMwLCAxMjApKVxyXG4gICAgLy8gICAgIGxldCBtaWRQb3MgPSBjYy52MihlbmRQb3MueCArIG1hZywgZW5kUG9zLnkgKyAyMDApO1xyXG5cclxuICAgIC8vICAgICBsZXQgYmFuaCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQmFuaCk7XHJcbiAgICAvLyAgICAgYmFuaC5wYXJlbnQgPSBpdGVtLnBhcmVudDtcclxuICAgIC8vICAgICBiYW5oLnBvc2l0aW9uID0gY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcbiAgICAvLyAgICAgYmFuaC5nZXRDb21wb25lbnQoXCJJdGVtXCIpLmxvYWRJdGVtKHRhZylcclxuXHJcbiAgICAvLyAgICAgY2MudHdlZW4oYmFuaCkudG8oMC4yLCB7IHNjYWxlOiAxLjIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICBjYy50d2VlbihiYW5oKS5iZXppZXJUbygwLjQsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kT2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJDdXNbdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVswXV0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5kb25lTm9kZS5jaGlsZHJlblt0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlWzFdXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmFuZ3J5KClcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgYmFuaC5kZXN0cm95KClcclxuICAgIC8vICAgICB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgLy8gfVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzcGF3S2hheShtaXNzaW9uKSB7XHJcbiAgICAvLyAgICAgbGV0IGFyciA9IFtjYy52MygtNjAsIC0xMCksIGNjLnYzKDgwLCAtMTApXVxyXG4gICAgLy8gICAgIGlmIChtaXNzaW9uLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAvLyAgICAgICAgIGFyciA9IFtjYy52MygtNzUsIC0xMCksIGNjLnYzKDMwLCAtMTApLCBjYy52MygxMjAsIC0xMCldXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGxldCBraGF5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVLaGF5KTtcclxuICAgIC8vICAgICBraGF5LnBhcmVudCA9IHRoaXMubGlzdEtoYXk7XHJcbiAgICAvLyAgICAga2hheS5wb3NpdGlvbiA9IGNjLnYzKC0xMDAsIDUwKVxyXG4gICAgLy8gICAgIHRoaXMuYXJyS2hheS5wdXNoKGtoYXkpXHJcbiAgICAvLyAgICAgdGhpcy5sb2FkRGF0YUtoYXkobWlzc2lvbiwga2hheSlcclxuICAgIC8vICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24ucHVzaChtaXNzaW9uKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlzVGFyZ2V0SXRlbVBsYWNlID0gW11cclxuICAgIC8vIC8vIGNvdW50TWlzcyA9IDNcclxuICAgIC8vIHNwYXdOZXh0S2hheShwbGFjZSkge1xyXG4gICAgLy8gICAgIGxldCBmaXJzdEN1cyA9IHRoaXMuYXJyQ3VzWzFdO1xyXG4gICAgLy8gICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuc2hvd01pc3Npb24oKTtcclxuICAgIC8vICAgICBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKCk7XHJcblxyXG4gICAgLy8gICAgIGxldCBtaXNzaW9uID0gZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5vcmRlcjtcclxuICAgIC8vICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24uc3BsaWNlKHBsYWNlLCAxKVxyXG4gICAgLy8gICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5wdXNoKG1pc3Npb24pXHJcbiAgICAvLyAgICAgbGV0IHBvcyA9IGNjLnYzKDEyMDAsIDApO1xyXG4gICAgLy8gICAgIGxldCBwcmVLaGF5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVLaGF5KVxyXG4gICAgLy8gICAgIHByZUtoYXkucGFyZW50ID0gdGhpcy5saXN0S2hheTtcclxuICAgIC8vICAgICBwcmVLaGF5LnBvc2l0aW9uID0gcG9zXHJcbiAgICAvLyAgICAgdGhpcy5hcnJLaGF5LnB1c2gocHJlS2hheSlcclxuICAgIC8vICAgICB0aGlzLmxvYWREYXRhS2hheShtaXNzaW9uLCBwcmVLaGF5KVxyXG4gICAgLy8gICAgIHByZUtoYXkucG9zaXRpb24gPSBjYy52MygtMTAwICsgNDAwLCA1MClcclxuICAgIC8vICAgICBsZXQgdGFyZ2V0S2hheSA9IHRoaXMuYXJyS2hheVtwbGFjZV1cclxuICAgIC8vICAgICBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxyXG5cclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IHBsYWNlICsgMTsgaSA8IHRoaXMuYXJyS2hheS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQga2hheSA9IHRoaXMuYXJyS2hheVtpXVxyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihraGF5KS5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC00MDAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJLaGF5W2kgLSAxXSA9IGtoYXlcclxuXHJcbiAgICAvLyAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5saXN0UmF5WzBdKS5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC00MDAsIDApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyS2hheS5zcGxpY2UocGxhY2UsIDEpO1xyXG5cclxuICAgIC8vICAgICB9LCAwLjIpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBsb2FkRGF0YUtoYXkoZGF0YSwga2hheSkge1xyXG4gICAgLy8gICAgIGlmIChkYXRhKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBhcnIgPSBbY2MudjMoLTYwLCAtMzApLCBjYy52Myg4MCwgLTMwKV1cclxuXHJcbiAgICAvLyAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBhcnIgPSBbY2MudjMoLTc1LCAtMzApLCBjYy52MygzMCwgLTMwKSwgY2MudjMoMTIwLCAtMzApXVxyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bZGF0YVtpXSAtIDFdKVxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSBraGF5XHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gYXJyW2ldXHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnNjYWxlID0gMC42OFxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5sb2FkR3JheSgpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBmaXJzdENsaWNrID0gZmFsc2VcclxuICAgIC8vIGJ0bl9jbGlja0J0bihldmVudCwgdmFsdWUpIHtcclxuICAgIC8vICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAvLyAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMuYnRuUGl6emEuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLmZpcnN0Q2xpY2spIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5maXJzdENsaWNrID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IGlkID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgLy8gICAgIGxldCBub2RlID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIC8vICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrTWlzc2lvbihpZCwgbm9kZSk7XHJcbiAgICAvLyAgICAgaWYgKGNoZWNrKSB7XHJcblxyXG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgICAgIGxldCBwb3MgPSBjaGVjay5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoZWNrLnBvc2l0aW9uKTtcclxuICAgIC8vICAgICAgICAgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGxldCBtYWcgPSAocG9zLnggPiBub2RlLngpID8gLTUwIDogNTA7XHJcbiAgICAvLyAgICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKG5vZGUueCwgbm9kZS55KTtcclxuICAgIC8vICAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKHBvcy54LCBwb3MueSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52MihlbmRQb3MueCArIG1hZywgZW5kUG9zLnkgKyAyMDApO1xyXG5cclxuICAgIC8vICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW2lkIC0gMV0pO1xyXG4gICAgLy8gICAgICAgICBpdGVtLnBhcmVudCA9IG5vZGUucGFyZW50O1xyXG4gICAgLy8gICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcblxyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihpdGVtKS50bygwLjIsIHsgc2NhbGU6IDEuMiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihpdGVtKS5iZXppZXJUbygwLjQsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRPaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFyckN1c1t0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlWzBdXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmRvbmVOb2RlLmNoaWxkcmVuW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMV1dLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpXHJcbiAgICAvLyAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gY2hlY2tJdGVtKGlkKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyclRhcmdldE1pc3Npb24ubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWlzc2lvbi5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKG1pc3Npb25baV0gPT0gaWQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgYXJySXRlbSA9IFtpLCBqXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gYXJySXRlbVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBudWxsXHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBjaGVja01pc3Npb24oaWQsIG5vZGUpIHtcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyclRhcmdldE1pc3Npb24ubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWlzc2lvbi5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGlkID09IG1pc3Npb25bal0pIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb25baV1bal0gPSAxMDA7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEl0ZW1QbGFjZSA9IFtpLCBqXVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKGksIGopXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyS2hheVtpXS5jaGlsZHJlbltqXTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gbnVsbDtcclxuICAgIC8vIH1cclxuICAgIC8vIGlzQ291bnRDdXMgPSAzXHJcbiAgICAvLyBpc0NvdW50RG9uZSA9IDBcclxuICAgIC8vIGlzTW92aW5nID0gZmFsc2VcclxuICAgIC8vIGNvaW5BcnIgPSBbXVxyXG4gICAgLy8gY2hlY2tTdWNjZXNzKGksIGopIHsvL2NoZWNrIGN1cyBob2FuIHRoYW5oIGRvbiBoYW5nIGNodWFcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChqICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCB0YXJnZXRLaGF5ID0gdGhpcy5hcnJLaGF5W2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgLy8gICAgICAgICAgICAgdGFyZ2V0S2hheS5nZXRDb21wb25lbnQoXCJJdGVtXCIpLm9mZkdyYXkodGFyZ2V0S2hheS5jaGlsZHJlblsxXSlcclxuICAgIC8vICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMiwgeyBzY2FsZTogMi41IH0pLnRvKDAuMSwgeyBzY2FsZTogMi4yIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMiwgeyBzY2FsZTogMC45IH0pLnRvKDAuMSwgeyBzY2FsZTogMC42NSB9KS5zdGFydCgpXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgIH0sIDAuNClcclxuICAgIC8vICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgIC8vICAgICBsZXQgY2hlY2sgPSB0cnVlXHJcbiAgICAvLyAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAvLyAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBtaXNzaW9uLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChtaXNzaW9uW21dICE9IDEwMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgY2hlY2sgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNDb3VudERvbmUrK1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubGlzdEN1cy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY3VzLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgICAgICAgICAgcG9zID0gdGhpcy5jYW1lcmEuZ2V0V29ybGRUb1NjcmVlblBvaW50KHBvcyk7XHJcbiAgICAvLyAgICAgICAgICAgICBwb3MgPSB0aGlzLnVpQ2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MpO1xyXG4gICAgLy8gICAgICAgICAgICAgcG9zID0gdGhpcy5iYXJDb2luLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcykuYWRkKGNjLnYzKDAsIDApKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIC8vIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNwYXduQ29pbnNGcm9tQ3VzdG9tZXIocG9zLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gc2F1IGtoaSB04buPYSByYSB4b25nIHRow6wgbW92ZSB24buBIHRoYW5oIGdvbGRcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDb2luc1RvR29sZEJhcih0aGlzLmNvaW5BcnIsIHRoaXMuYmFyQ29pbik7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTsgY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuaGFwcHkoKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub3RpQ29pbi5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIGdsb2JhbFRoaXMuY29pbiArPSA1MFxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKG1pc3Npb24ubGVuZ3RoID09IDMpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gMTAwXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGdsb2JhbFRoaXMuY29pbiA+PSAxMDAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNlbGxEb25lLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgfSwgMC42KVxyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLm1vdmVDdXNPdXQoaSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZW5xdWV1ZU1vdmUodGhpcy5hcnJDdXNbaV0pO1xyXG4gICAgLy8gICAgICAgICB9LCAwLjgpXHJcblxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3Bhd25Db2luc0Zyb21DdXN0b21lcihzdGFydFBvczogY2MuVmVjMywgb25GaW5pc2g/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAvLyAgICAgdGhpcy5jb2luQXJyID0gW11cclxuICAgIC8vICAgICBjb25zdCBjb2luQ291bnQgPSA2O1xyXG4gICAgLy8gICAgIGNvbnN0IHJhZGl1cyA9IDcwOyAvLyDEkeG7mSB04buPYSByYVxyXG5cclxuICAgIC8vICAgICBsZXQgZmluaXNoZWQgPSAwO1xyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvaW5Db3VudDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNvaW4pO1xyXG4gICAgLy8gICAgICAgICBjb2luLnBhcmVudCA9IHRoaXMuYmFyQ29pbjtcclxuICAgIC8vICAgICAgICAgY29pbi5zZXRQb3NpdGlvbihzdGFydFBvcyk7XHJcbiAgICAvLyAgICAgICAgIGNvaW4uc2NhbGUgPSAwLjhcclxuICAgIC8vICAgICAgICAgdGhpcy5jb2luQXJyLnB1c2goY29pbilcclxuICAgIC8vICAgICAgICAgLy8gcmFuZG9tIGjGsOG7m25nIHThu49hXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGFuZ2xlID0gKE1hdGguUEkgKiAyIC8gY29pbkNvdW50KSAqIGk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHJhbmRvbVJhZGl1cyA9IHJhZGl1cyArIE1hdGgucmFuZG9tKCkgKiA0MDtcclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHN0YXJ0UG9zLmFkZChjYy52MyhcclxuICAgIC8vICAgICAgICAgICAgIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbVJhZGl1cyxcclxuICAgIC8vICAgICAgICAgICAgIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbVJhZGl1cyxcclxuICAgIC8vICAgICAgICAgICAgIDBcclxuICAgIC8vICAgICAgICAgKSk7XHJcblxyXG4gICAgLy8gICAgICAgICAvLyB04buPYSByYVxyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbihjb2luKVxyXG4gICAgLy8gICAgICAgICAgICAgLnRvKDAuMjUsIHsgcG9zaXRpb246IHRhcmdldFBvcyB9LCB7IGVhc2luZzogXCJxdWFkT3V0XCIgfSlcclxuICAgIC8vICAgICAgICAgICAgIC5kZWxheSgwLjA1KVxyXG4gICAgLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGZpbmlzaGVkKys7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkID09PSBjb2luQ291bnQgJiYgb25GaW5pc2gpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgb25GaW5pc2goKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gbW92ZUNvaW5zVG9Hb2xkQmFyKGNvaW5zOiBjYy5Ob2RlW10sIGdvbGRUYXJnZXQ6IGNjLk5vZGUpIHtcclxuICAgIC8vICAgICAvLyBjb25zdCB3b3JsZFBvcyA9IGdvbGRUYXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihnb2xkVGFyZ2V0LnBvc2l0aW9uKTtcclxuICAgIC8vICAgICBsZXQgbG9jYWwgPSBjYy52MygwLCAwKVxyXG4gICAgLy8gICAgIGNvaW5zLmZvckVhY2goKGNvaW4sIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8vIGNvbnN0IGxvY2FsID0gY29pbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oY29pbilcclxuICAgIC8vICAgICAgICAgICAgIC5kZWxheShpbmRleCAqIDAuMDUpXHJcbiAgICAvLyAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiBsb2NhbCwgc2NhbGU6IDAuNSB9LCB7IGVhc2luZzogXCJxdWFkSW5cIiB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvaW4uZGVzdHJveSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIHRoaXMuYWRkR29sZCgxKTtcclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlzRGVtID0gMFxyXG4gICAgLy8gZ2V0UGxhY2UoY3VzKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzKTsgLy8gZ+G7jW4gaMahblxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIGVucXVldWVNb3ZlKGN1c05vZGUpIHtcclxuICAgIC8vICAgICB0aGlzLm1vdmVRdWV1ZS5wdXNoKGN1c05vZGUpO1xyXG4gICAgLy8gICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBwcm9jZXNzUXVldWUoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nKSByZXR1cm47XHJcbiAgICAvLyAgICAgaWYgKHRoaXMubW92ZVF1ZXVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIC8vICAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgLy8gICAgIGxldCBjdXNOb2RlID0gdGhpcy5tb3ZlUXVldWUuc2hpZnQoKTtcclxuICAgIC8vICAgICB0aGlzLl9tb3ZlQ3VzT3V0KGN1c05vZGUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIG1vdmVRdWV1ZSA9IFtdO1xyXG4gICAgLy8gaXNQcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAvLyBfbW92ZUN1c091dChjdXNOb2RlKSB7XHJcbiAgICAvLyAgICAgbGV0IHBsYWNlID0gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXNOb2RlKTtcclxuXHJcbiAgICAvLyAgICAgaWYgKHBsYWNlID09PSAtMSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgLy8gICAgIGxldCBmaXJzdEN1cyA9IGN1c05vZGU7XHJcblxyXG4gICAgLy8gICAgIC8vID09PT09IFNwYXduIGN1c3RvbWVyIHRp4bq/cCB0aGVvID09PT09XHJcbiAgICAvLyAgICAgbGV0IG5leHRDdXMgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5pc0NvdW50Q3VzXTtcclxuXHJcbiAgICAvLyAgICAgaWYgKG5leHRDdXMpIHtcclxuICAgIC8vICAgICAgICAgbmV4dEN1cy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbmV4dEN1cztcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0NvdW50Q3VzKys7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyA9PT09PSBU4bqhbyBjdXN0b21lciBt4bubaSDhu58gY3Xhu5FpID09PT09XHJcbiAgICAvLyAgICAgLy8gbGV0IG5ld0N1cyA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdFByZUN1c1t0aGlzLmlzRGVtXSk7XHJcbiAgICAvLyAgICAgLy8gbmV3Q3VzLnBhcmVudCA9IHRoaXMubGlzdEN1cztcclxuXHJcbiAgICAvLyAgICAgLy8gbGV0IGxhc3RDdXMgPSB0aGlzLmFyckN1c1t0aGlzLmFyckN1cy5sZW5ndGggLSAxXTtcclxuICAgIC8vICAgICAvLyBuZXdDdXMucG9zaXRpb24gPSBsYXN0Q3VzLnBvc2l0aW9uLmFkZChjYy52Myg2MDAsIDApKTtcclxuXHJcbiAgICAvLyAgICAgLy8gdGhpcy5pc0RlbSA9ICh0aGlzLmlzRGVtICsgMSkgJSB0aGlzLmxpc3RQcmVDdXMubGVuZ3RoOyBgYFxyXG4gICAgLy8gICAgIC8vIHRoaXMuYXJyQ3VzLnB1c2gobmV3Q3VzKTtcclxuXHJcbiAgICAvLyAgICAgLy8gPT09PT0gTW92ZSB0aOG6sW5nIGLhu4sgb3V0ID09PT09XHJcbiAgICAvLyAgICAgZmlyc3RDdXMuekluZGV4ID0gLTE7XHJcbiAgICAvLyAgICAgZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5pc1N1Y2Nlc3MgPSB0cnVlXHJcbiAgICAvLyAgICAgY2MudHdlZW4oZmlyc3RDdXMpXHJcbiAgICAvLyAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAvLyAgICAgICAgIC5ieSgwLjggKiAocGxhY2UgKyAxKSwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCAqIChwbGFjZSArIDEpLCAwKSB9KVxyXG4gICAgLy8gICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAvLyAgICAgY2MudHdlZW4oZmlyc3RDdXMpXHJcbiAgICAvLyAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAvLyAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgLy8gICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAvLyAgICAgLy8gPT09PT0gTW92ZSBjw6FjIHRo4bqxbmcgcGjDrWEgc2F1ID09PT09XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IHBsYWNlICsgMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQ3VzW2ldO1xyXG5cclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAvLyAgICAgICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgLy8gICAgICAgICAgICAgLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCkgfSlcclxuICAgIC8vICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyA9PT09PSBSZW1vdmUga2jhu49pIG3huqNuZyA9PT09PVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJDdXMuc3BsaWNlKHBsYWNlLCAxKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKTtcclxuXHJcbiAgICAvLyAgICAgfSwgMS4xKTtcclxuXHJcbiAgICAvLyAgICAgLy8gPT09PT0gU3Bhd24ga2hheSA9PT09PVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuaXNDb3VudERvbmUgPCA1KSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNwYXdOZXh0S2hheShwbGFjZSk7XHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSwgMC4zKTtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc0NvdW50RG9uZSA9PSA1KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMub25FbmRHYW1lKHRydWUpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gZmluaXNoTW92ZSgpIHtcclxuICAgIC8vICAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7IC8vIGNo4bqheSB0aeG6v3AgdGjhurFuZyBr4bq/IHRp4bq/cFxyXG4gICAgLy8gfVxyXG4gICAgLy8gY2hlY2tTdWNjZXNzSXRlbSgpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgIC8vICAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChtaXNzaW9uW2pdICE9IDEwMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKGksIG51bGwpXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaXRlbVF1ZXVlOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIHNodWZmbGVJdGVtKCkge1xyXG4gICAgLy8gICAgIHRoaXMuaXRlbVF1ZXVlID0gW107XHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0SXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLml0ZW1RdWV1ZS5wdXNoKGkpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8gc2h1ZmZsZSBGaXNoZXItWWF0ZXNcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gdGhpcy5pdGVtUXVldWUubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgLy8gICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgLy8gICAgICAgICBbdGhpcy5pdGVtUXVldWVbaV0sIHRoaXMuaXRlbVF1ZXVlW2pdXSA9IFt0aGlzLml0ZW1RdWV1ZVtqXSwgdGhpcy5pdGVtUXVldWVbaV1dO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXROZXh0SXRlbUluZGV4KCkge1xyXG5cclxuICAgIC8vICAgICBpZiAodGhpcy5pdGVtUXVldWUubGVuZ3RoID09IDApIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaHVmZmxlSXRlbSgpOyAvLyB04bqhbyBsxrDhu6N0IG3hu5tpXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5pdGVtUXVldWUuc2hpZnQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBsYXN0SXRlbUluZGV4OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIHNwYXduSXRlbSgpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFJheS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5sYXN0SXRlbUluZGV4W2ldID0gLTE7IC8vIGNoxrBhIGPDsyBpdGVtIHRyxrDhu5tjXHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLnNwYXduSXRlbU9uUmF5KGkpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzcGF3bkl0ZW1PblJheShpbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgLy8gICAgIGxldCBtYWcgPSAoaW5kZXggPT0gMCkgPyAxMDAwIDogLTEwMDA7XHJcblxyXG4gICAgLy8gICAgIHRoaXMuY3JlYXRlSXRlbShpbmRleCwgbWFnKTtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY3JlYXRlSXRlbShpbmRleCwgbWFnKTtcclxuICAgIC8vICAgICB9LCAyKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjcmVhdGVJdGVtKGluZGV4OiBudW1iZXIsIG1hZzogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgbGV0IHJkID0gdGhpcy5nZXROZXh0SXRlbUluZGV4KCk7XHJcbiAgICAvLyAgICAgdGhpcy5sYXN0SXRlbUluZGV4W2luZGV4XSA9IHJkO1xyXG5cclxuICAgIC8vICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bcmRdKTtcclxuICAgIC8vICAgICBpdGVtLnBhcmVudCA9IHRoaXMubGlzdFJheVtpbmRleF07XHJcblxyXG4gICAgLy8gICAgIHRoaXMuYXJySXRlbVtpbmRleF0ucHVzaChpdGVtKTtcclxuXHJcbiAgICAvLyAgICAgaXRlbS5wb3NpdGlvbiA9IGNjLnYzKG1hZywgLTQwKTtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5tb3ZlSXRlbShpdGVtLCBtYWcpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gbW92ZUl0ZW0oaXRlbTogY2MuTm9kZSwgbWFnKSB7XHJcbiAgICAvLyAgICAgbGV0IHRhcmdldFggPSAtbWFnO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKGl0ZW0pXHJcbiAgICAvLyAgICAgICAgIC50bygxNywgeyB4OiB0YXJnZXRYIH0pXHJcbiAgICAvLyAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuc3RhcnQoKTtcclxuICAgIC8vIH1cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmlkU291bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0R3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLWdyYXktc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG5cclxuICAgIH1cclxuICAgIG9mZkdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICB9XHJcbiAgICAvLyBtb3ZlQ2xvY2t0b1VJKG5vZGUxKSB7XHJcbiAgICAvLyAgICAgdGhpcy5tb3ZlSXRlbVRvVUkobm9kZTEsIHRoaXMuYmFyVGltZS5jaGlsZHJlblsxXSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlSXRlbVRvVUkobm9kZTEsIG5vZGUyKSB7XHJcbiAgICAvLyAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZGluLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICBsZXQgcG9zID0gbm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbilcclxuICAgIC8vICAgICBwb3MgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAvLyAgICAgLy8gcG9zID0gcG9zLmFkZChjYy52MygwLCAwKSlcclxuICAgIC8vICAgICBsZXQgcG9zMiA9IG5vZGUxLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTEucG9zaXRpb24pO1xyXG4gICAgLy8gICAgIHBvczIgPSB0aGlzLm1haW5DYW1lcmEuZ2V0V29ybGRUb1NjcmVlblBvaW50KHBvczIpO1xyXG4gICAgLy8gICAgIHBvczIgPSB0aGlzLnVpQ2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MyKTtcclxuICAgIC8vICAgICBwb3MyID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMikuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgLy8gICAgIG5vZGUxLnBhcmVudCA9IHRoaXMudWlOb2RlO1xyXG4gICAgLy8gICAgIG5vZGUxLnNjYWxlID0gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyAvIHRoaXMudWlDYW1lcmEuem9vbVJhdGlvICogMC43XHJcbiAgICAvLyAgICAgbm9kZTEucG9zaXRpb24gPSBwb3MyXHJcbiAgICAvLyAgICAgY2MudHdlZW4obm9kZTEpLnRvKDAuNCwgeyBwb3NpdGlvbjogcG9zLCBzY2FsZTogMC40IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBub2RlMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLm1pc3Npb25CYXIuZ2V0Q29tcG9uZW50KFwidXBkYXRlQmFyXCIpLnVwZGF0ZUJhcigpO1xyXG4gICAgLy8gICAgICAgICAvLyB3b29kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJleHBcIilcclxuICAgIC8vICAgICAgICAgLy8gLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZE91dCwgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gfVxyXG4gICAgaXNFbmRHYW1lID0gZmFsc2VcclxuICAgIG9uRW5kR2FtZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNFbmRHYW1lID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpXHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcclxuICAgICAgICAgICAgdGhpcy5hbWF6aW5nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmVuZENhcmRXaW4pIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJUaW1lLmdldENvbXBvbmVudChcImJhclRpbWVcIikuZW5kR2FtZSgpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYXJyQ3VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIjYuYW5ncnlcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZClcclxuICAgICAgICAgICAgdGhpcy50aW1ldXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtpbmcsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTG9zZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgMC41KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2Nob29zZShldmVudCwgdmFsdWUpIHtcclxuICAgIGlzRG9jID0gZmFsc2VcclxuICAgIC8vIHVwZGF0ZShkdCkge1xyXG4gICAgLy8gICAgIC8vIHRoaXMubGJDb2luLnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXHJcbiAgICAvLyAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgLy8gICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgdXBkYXRlUmVzcG9uc2l2ZSgpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXJyUG9zTWVudU5nYW5nID0gW2NjLnYzKC0zOTEsIC0xMDIpLCBjYy52MygzNzUsIC0xMTIpLCBjYy52MygxMTQsIC0xMjApLCBjYy52MygtNDA5LCAtMjg0KSwgY2MudjMoLTE1OCwgLTI5NiksIGNjLnYzKDExOCwgLTI4MCksIGNjLnYzKDM5MCwgLTI5NiksIGNjLnYzKC0xMzcsIC0xMTYpXTtcclxuICAgIGFyclBvc0RvYyA9IFtjYy52MygyNiwgLTMzNyksIGNjLnYzKDMzNiwgLTExMiksIGNjLnYzKDE1LjUsIC0xMjEpLCBjYy52MygtMTcwLCAtNTI1LjcpLCBjYy52MygtMzAwLCAtMzUyKSwgY2MudjMoMTg2Ljk2LCAtNTEyKSwgY2MudjMoMzU1LCAtMzM1KSwgY2MudjMoLTI5MiwgLTExNildXHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuODVcclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkV2luLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmJhckNvaW4uc2NhbGUgPSAobG9naWMpID8gMi41IDogMS40XHJcbiAgICAgICAgdGhpcy5iYXJDb2luLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IChsb2dpYykgPyAyMTAgOiAxMDBcclxuICAgICAgICB0aGlzLnBoYW9Ib2Euc2NhbGUgPSAobG9naWMpID8gOSA6IDVcclxuICAgICAgICB0aGlzLmd1aWxkLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxLjJcclxuICAgICAgICB0aGlzLmd1aWxkLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIC05MDApIDogY2MudjMoMCwgLTM2MClcclxuICAgICAgICB0aGlzLmxpc3RDdXMuc2NhbGUgPSAobG9naWMpID8gMSA6IDFcclxuICAgICAgICB0aGlzLmxpc3RLaGF5LnNjYWxlID0gKGxvZ2ljKSA/IDEuMSA6IDFcclxuICAgICAgICB0aGlzLnRpbWV1cC5zY2FsZSA9IChsb2dpYykgPyAxIDogMS40XHJcbiAgICAgICAgdGhpcy5hbWF6aW5nLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcclxuICAgICAgICB0aGlzLmVuZENhcmREb2Muc2NhbGUgPSAxLjVcclxuICAgICAgICB0aGlzLm5vdGlNaXNzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgdGhpcy5iYXJNaXNzaW9uMi5zY2FsZSA9IChsb2dpYykgPyAyIDogMVxyXG4gICAgICAgIC8vIHRoaXMudHV0TWlzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgdGhpcy5iYXJNaXNzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMS44IDogMVxyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIDAsIDApIDogY2MudjMoMCwgMTEwLCAwKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLmFjdGl2ZSA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjdcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMDBcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuMlxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjg1XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==