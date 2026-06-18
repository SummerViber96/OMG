
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
                _this.notiMission.active = true;
                // this.barMission.getComponent("barTime").countDown()
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
            this.barMission.getComponent("barTime").endGame();
            this.amazing.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcR2FtZURvbnV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0FBRXZCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNnJDQztRQTNyQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElB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QUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2SyxlQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTs7SUF1RnhLLENBQUM7SUF0Z0NHLDBDQUEwQztJQUMxQyx5QkFBTSxHQUFOO1FB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Q0FBQyxDQUFDLElBQUksQ0FBQTtRQUN6QyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUUzRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7WUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7U0FDbEQ7UUFDRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFFZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUNqQixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxzREFBc0Q7WUFDdEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdEUsbUNBQW1DO1lBQ25DLElBQU0scUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVM7WUFDbEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBVSxTQUFTO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtZQUUzQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsU0FBUyxFQUFFO2dCQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTthQUdqRDtpQkFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxHQUFHLFNBQVMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2dCQUUzQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7YUFFOUI7aUJBQ0k7YUFFSjtTQUNKO2FBQ0k7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtZQUVsQixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUVoQyxzREFBc0Q7WUFDdEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdEUsbUNBQW1DO1lBQ25DLElBQU0scUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVM7WUFDbEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBVSxTQUFTO1lBRWpELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsR0FBRyxTQUFTLEVBQUU7YUFFOUQ7aUJBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsR0FBRyxTQUFTLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTthQUcvQjtTQUNKO0lBR0wsQ0FBQztJQTFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ0s7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ007SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNTO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDWTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1k7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUl4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs4Q0FDSTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0RBQ007SUFJNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUTtJQTNJWCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNnJDNUI7SUFBRCxlQUFDO0NBN3JDRCxBQTZyQ0MsQ0E3ckNxQyxFQUFFLENBQUMsU0FBUyxHQTZyQ2pEO2tCQTdyQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5jb2luID0gMFxyXG5nbG9iYWxUaGlzLkdhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kT2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRFbmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTZWxsRG9uZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5raW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hlcnJ5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3JlYW1NaW5pOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmFuaDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkV2luOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIHVpQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyVGltZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhckNvaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2hlY2tJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBoYW9Ib2E6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd2FybmluZzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpbGQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdEl0ZW06IGNjLlByZWZhYltdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFJheTogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RLaGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVLaGF5OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFJheU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpbWV1cDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYW1hemluZzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBub3RpQ29pbjogY2MuQW5pbWF0aW9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub3RpTWlzc2lvbjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RQcmVDdXM6IGNjLlByZWZhYltdID0gW11cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0TWVudTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmR0dXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kdHV0MjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmR0dXQzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ29pbjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkRG9jOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vbmV3XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RCZXA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0RGlhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQmFuaDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyTWlzc2lvbjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyTWlzc2lvbjI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvL2J0blxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5DaGlja2VuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuTWFjaGluZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNvY2E6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5DYWtlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuUG90YXRvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaW5kMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbGlzdFByZUNVczogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgbWNDb21wID0gbnVsbFxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gdHV0TWlzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYXJyQmVwID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG4gICAgYXJyRGlhID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG5cclxuXHJcbiAgICBtYXhLaGF5ID0gN1xyXG5cclxuICAgIGFyckRvbnV0cG9zID0gW11cclxuXHJcbiAgICBpc1R1dENoaWxpID0gZmFsc2VcclxuICAgIGlzVHV0TWVhdCA9IGZhbHNlXHJcbiAgICBpc1R1dFZlZ2V0VGFibGUgPSBmYWxzZVxyXG4gICAgaXNUdXRDbGlja01lYXQgPSBmYWxzZVxyXG5cclxuXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICAvLyBpc1N0ZXAgPSAwXHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBtYXhDdXN0b21lcnMgPSA2XHJcbiAgICBpZFNvdW5kID0gbnVsbFxyXG4gICAgaXNTdGVwID0gMFxyXG4gICAgLy9pdGVtOiAwOmJ1Z2VyLCAxOiBrZW0gMjpkb251dCAzOmtob2FpdGF5IDQ6cGhvIDU6IHB1ZGRpbmcgNjogdHJhICA3OmJhbmhtaSA4OmNvY29udXRcclxuICAgIHJheVk6IG51bWJlcltdID0gWzEyMCwgMCwgLTEyMF07ICAgLy8gduG7iyB0csOtIFkgY+G7p2EgMyByYXlcclxuICAgIHNwYXduWDogbnVtYmVyID0gNzAwOyAgICAgICAgICAgICAgLy8gduG7iyB0csOtIHNwYXduIGLDqm4gcGjhuqNpXHJcbiAgICBhcnJJdGVtID0gW1tdLCBbXV1cclxuICAgIGFycktoYXkgPSBbXVxyXG4gICAgYXJyVGFyZ2V0TWlzc2lvbiA9IFtdXHJcbiAgICBhcnJDdXMgPSBbXVxyXG4gICAgc2VsbFRhcmdldEN1cyA9IG51bGxcclxuICAgIHNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICBjdXNDb3VudGVyUG9zID0gbnVsbFxyXG4gICAgY3VzU2xvdEdhcCA9IDUwMFxyXG4gICAgY3VzRW50ZXJPZmZzZXQgPSBjYy52MygzNTAsIDAsIDApXHJcbiAgICBjdXNXYWxrU3BlZWQgPSA0MzcuNVxyXG4gICAgY291bnRlckN1c0NvdW50ID0gMFxyXG4gICAgcHJlQ3VzSW5kZXggPSAwXHJcbiAgICBpc1N0YXJ0Z2FtZSA9IGZhbHNlXHJcbiAgICBpc0ZpcnN0Q2xpY2sgPSBmYWxzZVxyXG4gICAgLy8wOmJhbmggdGh1b25nIDE6Y2hvY29sYXRlIDI6IHN0cmF3YmVycnkgXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub3RpTWlzc2lvbikuYnkoMC40LCB7IG9wYWNpdHk6IC0yNTUsIHBvc2l0aW9uOiBjYy52MygwLCAyMDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpTWlzc2lvbi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5jb3VudERvd24oKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDEuNSlcclxuICAgICAgICB0aGlzLm1jQ29tcCA9IHRoaXMubWMuZ2V0Q29tcG9uZW50KFwibWNcIilcclxuICAgIH1cclxuICAgIGlzSGFuZCA9IG51bGxcclxuXHJcbiAgICBpbml0Q3VzUXVldWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmN1c0NvdW50ZXJQb3MgJiYgdGhpcy5hcnJDdXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1c0NvdW50ZXJQb3MgPSB0aGlzLmFyckN1c1swXS5wb3NpdGlvbi5jbG9uZSgpLnN1Yih0aGlzLmN1c0VudGVyT2Zmc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXNDb3VudGVyUG9zKHNsb3Q6IG51bWJlciwgdG90YWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW5pdEN1c1F1ZXVlKClcclxuICAgICAgICBpZiAodG90YWwgPD0gMSkgcmV0dXJuIHRoaXMuY3VzQ291bnRlclBvcy5jbG9uZSgpXHJcbiAgICAgICAgbGV0IG9mZnNldFggPSAoc2xvdCAtICh0b3RhbCAtIDEpIC8gMikgKiB0aGlzLmN1c1Nsb3RHYXBcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXNDb3VudGVyUG9zLmNsb25lKCkuYWRkKGNjLnYzKG9mZnNldFgsIDAsIDApKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb3VudGVyTWlzc2lvbnMoY291bnQ6IG51bWJlcix2YWx1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQgJiYgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2ldLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuc2hvd01pc3Npb24odmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVudGVyQ3VzdG9tZXJzKGNvdW50OiBudW1iZXIsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyQ3VzQ291bnQgPSBjb3VudFxyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjMoMCwgMCwgMCldXHJcbiAgICAgICAgaWYgKGNvdW50ID09IDIpIHtcclxuICAgICAgICAgICAgYXJyUG9zID0gW2NjLnYzKC0yODUsIDAsIDApLCBjYy52Myg4OCwgMCwgMCldXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvdW50ID09IDMpIHtcclxuICAgICAgICAgICAgYXJyUG9zID0gW2NjLnYzKC00NDMsIDAsIDApLCBjYy52MygtNzMsIDAsIDApLCBjYy52MygyNzMsIDAsIDApXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWF4RHVyYXRpb24gPSAwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudCAmJiBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIC8vIGxldCB0YXJnZXRQb3MgPSB0aGlzLmdldEN1c0NvdW50ZXJQb3MoaSwgY291bnQpXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSBhcnJQb3NbaV1cclxuXHJcbiAgICAgICAgICAgIGxldCBzcGF3blBvcyA9IHRhcmdldFBvcy5jbG9uZSgpLmFkZCh0aGlzLmN1c0VudGVyT2Zmc2V0KVxyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBzcGF3blBvcy5zdWIodGFyZ2V0UG9zKS5tYWcoKVxyXG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHRoaXMuY3VzV2Fsa1NwZWVkXHJcbiAgICAgICAgICAgIG1heER1cmF0aW9uID0gTWF0aC5tYXgobWF4RHVyYXRpb24sIGR1cmF0aW9uKVxyXG5cclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGN1cylcclxuICAgICAgICAgICAgY3VzLnBvc2l0aW9uID0gc3Bhd25Qb3NcclxuICAgICAgICAgICAgY3VzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubW92ZSgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGN1cylcclxuICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBpZiAodmFsdWUgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q291bnRlck1pc3Npb25zKGNvdW50LHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDEgJiYgdGhpcy5hcnJDdXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IHRoaXMuYXJyQ3VzWzBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBtYXhEdXJhdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbnRlckNvdW50Rm9yV2F2ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PT0gMSkgcmV0dXJuIDJcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PT0gMykgcmV0dXJuIDNcclxuICAgICAgICByZXR1cm4gMVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduQ3VzdG9tZXJGcm9tUHJlZmFiKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RQcmVDVXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLmxpc3RQcmVDVXNbdGhpcy5wcmVDdXNJbmRleCAlIHRoaXMubGlzdFByZUNVcy5sZW5ndGhdXHJcbiAgICAgICAgdGhpcy5wcmVDdXNJbmRleCsrXHJcbiAgICAgICAgbGV0IG5ld0N1cyA9IGNjLmluc3RhbnRpYXRlKHByZWZhYilcclxuICAgICAgICBuZXdDdXMucGFyZW50ID0gdGhpcy5saXN0Q3VzXHJcbiAgICAgICAgbmV3Q3VzLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIG5ld0N1c1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VDdXN0b21lcihkZXBhcnRlZEN1czogY2MuTm9kZSwgY291bnRlclBvczogY2MuVmVjMykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLmFyckN1cy5pbmRleE9mKGRlcGFydGVkQ3VzKVxyXG5cclxuICAgICAgICBsZXQgbmV3Q3VzID0gdGhpcy5zcGF3bkN1c3RvbWVyRnJvbVByZWZhYigpXHJcbiAgICAgICAgaWYgKCFuZXdDdXMpIHJldHVyblxyXG4gICAgICAgIHRoaXMuYnRuQ2FrZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0blBvdGF0by5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbmV3Q3VzQ29tcCA9IG5ld0N1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAgICAgaWYgKG5ld0N1c0NvbXApIHtcclxuICAgICAgICAgICAgbmV3Q3VzQ29tcC5nYW1lUGxheSA9IHRoaXNcclxuICAgICAgICAgICAgbmV3Q3VzQ29tcC5pc1JlYWR5Rm9yU2VsbCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxsVGFyZ2V0Q3VzID09PSBkZXBhcnRlZEN1cyB8fCB0aGlzLmlzVGFyZ2V0Q3VzID09PSBkZXBhcnRlZEN1cykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGxUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gLTFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubWNDb21wKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWNDb21wLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2lkeF0gPSBuZXdDdXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKG5ld0N1cylcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVwYXJ0ZWRDdXMuZGVzdHJveSgpXHJcblxyXG4gICAgICAgIGxldCBzcGF3blBvcyA9IGNvdW50ZXJQb3MuY2xvbmUoKS5hZGQodGhpcy5jdXNFbnRlck9mZnNldClcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBzcGF3blBvcy5zdWIoY291bnRlclBvcykubWFnKClcclxuICAgICAgICBsZXQgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHRoaXMuY3VzV2Fsa1NwZWVkXHJcblxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChuZXdDdXMpXHJcbiAgICAgICAgbmV3Q3VzLnBvc2l0aW9uID0gc3Bhd25Qb3NcclxuICAgICAgICBuZXdDdXMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIG5ld0N1c0NvbXAubW92ZSgpXHJcbiAgICAgICAgY2MudHdlZW4obmV3Q3VzKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgcG9zaXRpb246IGNvdW50ZXJQb3MgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3Q3VzQ29tcC5zaG93TWlzc2lvbigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbmV3Q3VzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBvbkhpbmQoKSB7XHJcbiAgICAgICAgdGhpcy5oaW5kMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEN1c1F1ZXVlKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW50ZXJDdXN0b21lcnMoMSwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5DaGlja2VuLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzKVxyXG4gICAgfVxyXG4gICAgaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgaXNGaXN0ID0gZmFsc2VcclxuICAgIGlzRmlzdENsaWNrQ2hpY2tlbiA9IGZhbHNlXHJcblxyXG4gICAgaXNNY0J1c3koKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNNb3ZpbmcgfHwgKHRoaXMubWNDb21wICYmIHRoaXMubWNDb21wLmlzV2Fsa2luZygpKVxyXG4gICAgfVxyXG5cclxuICAgIGJ0bl9jaGlja2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuaXNGaXN0Q2xpY2tDaGlja2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXN0Q2xpY2tDaGlja2VuID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5jb3VudERvd24oKVxyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubWNDb21wLmNhblBpY2tNb3JlQ2hpY2tlbigpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bkNoaWNrZW4uZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0NoaWNrZW4oKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5fbWF5Q2hpZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBtYWNoaW5lQ29tcCA9IHRoaXMuYnRuTWFjaGluZS5nZXRDb21wb25lbnQoXCJtYWNoaW5lXCIpXHJcbiAgICAgICAgbGV0IGNhbkZyeSA9IHRoaXMubWNDb21wLmdldFJhd1RyYXlTbG90KCkgPj0gMCAmJiBtYWNoaW5lQ29tcC5jaGlja2VuID09IG51bGxcclxuICAgICAgICBsZXQgY2FuUGlja3VwID0gKHRoaXMubWNDb21wLmxvY2FsSWQgPT0gMSB8fCB0aGlzLm1jQ29tcC5sb2NhbElkID09IDIgfHwgdGhpcy5tY0NvbXAubG9jYWxJZCA9PSAzIHx8IHRoaXMubWNDb21wLmxvY2FsSWQgPT0gNCB8fCB0aGlzLm1jQ29tcC5sb2NhbElkID09IDUpICYmIG1hY2hpbmVDb21wLmNoaWNrZW4gIT0gbnVsbCAmJiBtYWNoaW5lQ29tcC5pc0NoaW4gJiYgdGhpcy5tY0NvbXAuY2FuUGlja0l0ZW1UeXBlKFwiY2hpY2tlblwiKVxyXG4gICAgICAgIGlmICghY2FuRnJ5ICYmICFjYW5QaWNrdXApIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bk1hY2hpbmUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb01hY2hpbmUoKVxyXG4gICAgfVxyXG4gICAgYnRuX2NvbGEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjb2NhQ29tcCA9IHRoaXMuYnRuQ29jYS5nZXRDb21wb25lbnQoXCJjb2NhXCIpXHJcbiAgICAgICAgbGV0IGNhbkNvb2sgPSAhY29jYUNvbXAuaXNCdXN5KClcclxuICAgICAgICBsZXQgY2FuUGlja3VwID0gY29jYUNvbXAuaXNDb2NhICYmIHRoaXMubWNDb21wLmNhblBpY2tJdGVtVHlwZShcImNvY2FcIilcclxuICAgICAgICBpZiAoIWNhbkNvb2sgJiYgIWNhblBpY2t1cCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQ29jYSgpXHJcbiAgICB9XHJcbiAgICBidG5fc2F1Y2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuaGFzQW55SXRlbSgpIHx8IHRoaXMubWNDb21wLmZpbmRDb29rZWRUcmF5U2xvdCgpIDwgMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvU2F1Y2UoKVxyXG4gICAgfVxyXG4gICAgYnRuX2Nha2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc01vdmluZylcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9DYWtlKClcclxuICAgIH1cclxuICAgIGJ0bl90b21hdG8oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvVG9tYXRvKClcclxuICAgIH1cclxuICAgIGdldEN1c1RyYXlJbmRleChjdXNOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzTm9kZSlcclxuICAgIH1cclxuICAgIGNoZWNrU2VsbCh0YXJnZXRDdXM/OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBzZWxsIE1haW5cIilcclxuICAgICAgICBsZXQgY3VzID0gdGFyZ2V0Q3VzIHx8IHRoaXMuc2VsbFRhcmdldEN1cyB8fCB0aGlzLmlzVGFyZ2V0Q3VzIHx8IHRoaXMuYXJyQ3VzWzBdXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSB8fCAhY3VzKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8IGN1c0NvbXAuaXNTdWNjZXNzIHx8ICFjdXNDb21wLmlzUmVhZHlGb3JTZWxsKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgdHJheUlkeCA9IHRoaXMubWNDb21wLmZpbmRUcmF5Rm9yQ3VzdG9tZXIoY3VzQ29tcClcclxuICAgICAgICBpZiAoIXRoaXMubWNDb21wLmhhc0FueUl0ZW0oKSB8fCB0cmF5SWR4IDwgMCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZWxsVGFyZ2V0Q3VzID0gY3VzXHJcbiAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSB0cmF5SWR4XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IGN1c1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQnV5KClcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVTZWxsQXRDb3VudGVyKCkge1xyXG4gICAgICAgIGxldCBjdXMgPSB0aGlzLnNlbGxUYXJnZXRDdXMgfHwgdGhpcy5pc1RhcmdldEN1cyB8fCB0aGlzLmFyckN1c1swXVxyXG4gICAgICAgIGlmICghY3VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKVxyXG4gICAgICAgIGlmICghY3VzQ29tcCB8fCBjdXNDb21wLmlzU3VjY2VzcyB8fCAhY3VzQ29tcC5pc1JlYWR5Rm9yU2VsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSAtMVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzQ29tcC52YWxpZGF0ZVNlbGwoKVxyXG4gICAgfVxyXG4gICAgbmV4dEN1cyh2YWx1ZTogYm9vbGVhbiwgZGVwYXJ0ZWRDdXM/OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKGRlcGFydGVkQ3VzKSB7XHJcbiAgICAgICAgICAgIGxldCBpZHggPSB0aGlzLmFyckN1cy5pbmRleE9mKGRlcGFydGVkQ3VzKVxyXG4gICAgICAgICAgICBpZiAoaWR4ID49IDApIHRoaXMuYXJyQ3VzLnNwbGljZShpZHgsIDEpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFyckN1cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnNwbGljZSgwLCAxKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb3VudEN1cysrXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5idG5DYWtlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blBvdGF0by5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb3VudEN1cyA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5iYXJNaXNzaW9uMikuYnkoMC40LCB7IG9wYWNpdHk6IC0yNTUsIHBvc2l0aW9uOiBjYy52MygwLCAyMDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbjIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZWxsVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gLTFcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPj0gdGhpcy5tYXhDdXN0b21lcnMgfHwgdGhpcy5hcnJDdXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdhc0dyb3VwQXRDb3VudGVyID0gdGhpcy5jb3VudGVyQ3VzQ291bnQgPiAxXHJcbiAgICAgICAgaWYgKHdhc0dyb3VwQXRDb3VudGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlckN1c0NvdW50LS1cclxuICAgICAgICAgICAgdGhpcy5tY0NvbXAuYWZ0ZXJDdXN0b21lckxlZnQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgdGhpcy5tY0NvbXAucmVzZXRUb1N0YXJ0KClcclxuXHJcbiAgICAgICAgbGV0IGVudGVyQ291bnQgPSB0aGlzLmdldEVudGVyQ291bnRGb3JXYXZlKClcclxuICAgICAgICB0aGlzLmVudGVyQ3VzdG9tZXJzKGVudGVyQ291bnQpXHJcbiAgICB9XHJcbiAgICAvLyBpc0ZpcnN0Q2xpY2tiYW5oID0gZmFsc2VcclxuICAgIC8vIGlzRnJpc3QgPSBmYWxzZVxyXG5cclxuXHJcbiAgICAvLyBidG5fYmFuaCgpIHtcclxuICAgIC8vICAgICBpZiAoIXRoaXMuaXNGcmlzdCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzRnJpc3QgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKVxyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZVxyXG4gICAgLy8gICAgIHRoaXMuaGFuZHR1dC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RDbGlja2JhbmgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrYmFuaCA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaGFuZHR1dDIuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICB9LCAyKVxyXG4gICAgLy8gICAgIGxldCBjaGVjayA9IHRoaXMuZ2V0U2xvdEJlcCgpO1xyXG4gICAgLy8gICAgIGlmIChjaGVjayAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyQmVwW2NoZWNrXSA9IHRydWU7O1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxpc3RCZXAuY2hpbGRyZW5bY2hlY2tdLmdldENvbXBvbmVudChcIkJhbmhcIikuc2V0T24oKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGlzRmlyc3RTdGVwID0gZmFsc2VcclxuICAgIC8vIGJ0bl9iZXAodGFnKSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIHRoaXMuaGFuZHR1dDIuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICBpZiAoIXRoaXMuaXNGaXJzdFN0ZXApIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5oYW5kdHV0My5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNGaXJzdFN0ZXAgPSB0cnVlXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGxldCBjaGVjayA9IHRoaXMuZ2V0U2xvdERpYSgpO1xyXG4gICAgLy8gICAgIGlmIChjaGVjayAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyRGlhW2NoZWNrXSA9IHRydWVcclxuICAgIC8vICAgICAgICAgdGhpcy5saXN0RGlhLmNoaWxkcmVuW2NoZWNrXS5nZXRDb21wb25lbnQoXCJEaWFcIikuZ2V0QmFuaCgpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldFNsb3RCZXAoKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckJlcC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckJlcFtpXVxyXG4gICAgLy8gICAgICAgICBpZiAoY2hpbGQgPT0gZmFsc2UpIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGxcclxuICAgIC8vIH1cclxuICAgIC8vIGdldFNsb3REaWEoKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckRpYS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3REaWEuY2hpbGRyZW5baV1cclxuICAgIC8vICAgICAgICAgaWYgKGNoaWxkLmdldENvbXBvbmVudChcIkRpYVwiKS5pc0JhbmggPT0gZmFsc2UpIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGxcclxuICAgIC8vIH1cclxuICAgIC8vIGJ0bl9zdHJhd0JlcnJ5KCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckRpYS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgY2hlY2sgPSB0aGlzLmFyckRpYVtpXTtcclxuICAgIC8vICAgICAgICAgbGV0IGJhbmggPSB0aGlzLmxpc3REaWEuY2hpbGRyZW5baV07XHJcbiAgICAvLyAgICAgICAgIGlmIChiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zdGF0dXMgPT0gMCAmJiBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5pc0JhbmggPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5oYW5kdHV0My5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLnNldFN0YXR1cygyKVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBidG5fY2hvY29sYXRlKCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckRpYS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgY2hlY2sgPSB0aGlzLmFyckRpYVtpXTtcclxuICAgIC8vICAgICAgICAgbGV0IGJhbmggPSB0aGlzLmxpc3REaWEuY2hpbGRyZW5baV07XHJcbiAgICAvLyAgICAgICAgIGlmIChiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zdGF0dXMgPT0gMCAmJiBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5pc0JhbmggPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5oYW5kdHV0My5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLnNldFN0YXR1cygxKVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBidG5fY3JlYW0oKSB7XHJcblxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIGlzRmx5aW5nID0gZmFsc2VcclxuICAgIC8vIGJ0bl9zZWxsKGl0ZW0sIHRhZykge1xyXG4gICAgLy8gICAgIC8vIGlmKHRoaXMuaXNNb3ZpbmcpcmV0dXJuO1xyXG4gICAgLy8gICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tNaXNzaW9uKHRhZywgaXRlbSk7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIGxldCBtYWcgPSA1MFxyXG4gICAgLy8gICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKGl0ZW0ueCwgaXRlbS55KTtcclxuICAgIC8vICAgICBsZXQgZW5kUG9zID0gdGhpcy5hcnJDdXNbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJidWJibGVzXCIpLnBvc2l0aW9uLmFkZChjYy52MygtMzAsIDEyMCkpXHJcbiAgICAvLyAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKGVuZFBvcy54ICsgbWFnLCBlbmRQb3MueSArIDIwMCk7XHJcblxyXG4gICAgLy8gICAgIGxldCBiYW5oID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVCYW5oKTtcclxuICAgIC8vICAgICBiYW5oLnBhcmVudCA9IGl0ZW0ucGFyZW50O1xyXG4gICAgLy8gICAgIGJhbmgucG9zaXRpb24gPSBjYy52MyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuICAgIC8vICAgICBiYW5oLmdldENvbXBvbmVudChcIkl0ZW1cIikubG9hZEl0ZW0odGFnKVxyXG5cclxuICAgIC8vICAgICBjYy50d2VlbihiYW5oKS50bygwLjIsIHsgc2NhbGU6IDEuMiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKGJhbmgpLmJlemllclRvKDAuNCwgc3RhcnRQb3MsIG1pZFBvcywgZW5kUG9zKS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRPaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFyckN1c1t0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlWzBdXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmRvbmVOb2RlLmNoaWxkcmVuW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMV1dLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuYW5ncnkoKVxyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBiYW5oLmRlc3Ryb3koKVxyXG4gICAgLy8gICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAvLyB9XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHNwYXdLaGF5KG1pc3Npb24pIHtcclxuICAgIC8vICAgICBsZXQgYXJyID0gW2NjLnYzKC02MCwgLTEwKSwgY2MudjMoODAsIC0xMCldXHJcbiAgICAvLyAgICAgaWYgKG1pc3Npb24ubGVuZ3RoID09IDMpIHtcclxuICAgIC8vICAgICAgICAgYXJyID0gW2NjLnYzKC03NSwgLTEwKSwgY2MudjMoMzAsIC0xMCksIGNjLnYzKDEyMCwgLTEwKV1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IGtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpO1xyXG4gICAgLy8gICAgIGtoYXkucGFyZW50ID0gdGhpcy5saXN0S2hheTtcclxuICAgIC8vICAgICBraGF5LnBvc2l0aW9uID0gY2MudjMoLTEwMCwgNTApXHJcbiAgICAvLyAgICAgdGhpcy5hcnJLaGF5LnB1c2goa2hheSlcclxuICAgIC8vICAgICB0aGlzLmxvYWREYXRhS2hheShtaXNzaW9uLCBraGF5KVxyXG4gICAgLy8gICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5wdXNoKG1pc3Npb24pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaXNUYXJnZXRJdGVtUGxhY2UgPSBbXVxyXG4gICAgLy8gLy8gY291bnRNaXNzID0gM1xyXG4gICAgLy8gc3Bhd05leHRLaGF5KHBsYWNlKSB7XHJcbiAgICAvLyAgICAgbGV0IGZpcnN0Q3VzID0gdGhpcy5hcnJDdXNbMV07XHJcbiAgICAvLyAgICAgZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5zaG93TWlzc2lvbigpO1xyXG4gICAgLy8gICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKTtcclxuXHJcbiAgICAvLyAgICAgbGV0IG1pc3Npb24gPSBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLm9yZGVyO1xyXG4gICAgLy8gICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5zcGxpY2UocGxhY2UsIDEpXHJcbiAgICAvLyAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnB1c2gobWlzc2lvbilcclxuICAgIC8vICAgICBsZXQgcG9zID0gY2MudjMoMTIwMCwgMCk7XHJcbiAgICAvLyAgICAgbGV0IHByZUtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpXHJcbiAgICAvLyAgICAgcHJlS2hheS5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5O1xyXG4gICAgLy8gICAgIHByZUtoYXkucG9zaXRpb24gPSBwb3NcclxuICAgIC8vICAgICB0aGlzLmFycktoYXkucHVzaChwcmVLaGF5KVxyXG4gICAgLy8gICAgIHRoaXMubG9hZERhdGFLaGF5KG1pc3Npb24sIHByZUtoYXkpXHJcbiAgICAvLyAgICAgcHJlS2hheS5wb3NpdGlvbiA9IGNjLnYzKC0xMDAgKyA0MDAsIDUwKVxyXG4gICAgLy8gICAgIGxldCB0YXJnZXRLaGF5ID0gdGhpcy5hcnJLaGF5W3BsYWNlXVxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcblxyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gcGxhY2UgKyAxOyBpIDwgdGhpcy5hcnJLaGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBraGF5ID0gdGhpcy5hcnJLaGF5W2ldXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGtoYXkpLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFycktoYXlbaSAtIDFdID0ga2hheVxyXG5cclxuICAgIC8vICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmxpc3RSYXlbMF0pLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJLaGF5LnNwbGljZShwbGFjZSwgMSk7XHJcblxyXG4gICAgLy8gICAgIH0sIDAuMilcclxuICAgIC8vIH1cclxuICAgIC8vIGxvYWREYXRhS2hheShkYXRhLCBraGF5KSB7XHJcbiAgICAvLyAgICAgaWYgKGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgbGV0IGFyciA9IFtjYy52MygtNjAsIC0zMCksIGNjLnYzKDgwLCAtMzApXVxyXG5cclxuICAgIC8vICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09IDMpIHtcclxuICAgIC8vICAgICAgICAgICAgIGFyciA9IFtjYy52MygtNzUsIC0zMCksIGNjLnYzKDMwLCAtMzApLCBjYy52MygxMjAsIC0zMCldXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtkYXRhW2ldIC0gMV0pXHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IGtoYXlcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBhcnJbaV1cclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uc2NhbGUgPSAwLjY4XHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoXCJJdGVtXCIpLmxvYWRHcmF5KClcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGZpcnN0Q2xpY2sgPSBmYWxzZVxyXG4gICAgLy8gYnRuX2NsaWNrQnRuKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgLy8gICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKVxyXG5cclxuICAgIC8vICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5idG5QaXp6YS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICBpZiAoIXRoaXMuZmlyc3RDbGljaykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpcnN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBsZXQgaWQgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAvLyAgICAgbGV0IG5vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgLy8gICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tNaXNzaW9uKGlkLCBub2RlKTtcclxuICAgIC8vICAgICBpZiAoY2hlY2spIHtcclxuXHJcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgbGV0IHBvcyA9IGNoZWNrLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hlY2sucG9zaXRpb24pO1xyXG4gICAgLy8gICAgICAgICBwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG5cclxuICAgIC8vICAgICAgICAgbGV0IG1hZyA9IChwb3MueCA+IG5vZGUueCkgPyAtNTAgOiA1MDtcclxuICAgIC8vICAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2MudjIobm9kZS54LCBub2RlLnkpO1xyXG4gICAgLy8gICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIocG9zLngsIHBvcy55KTtcclxuICAgIC8vICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKGVuZFBvcy54ICsgbWFnLCBlbmRQb3MueSArIDIwMCk7XHJcblxyXG4gICAgLy8gICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1baWQgLSAxXSk7XHJcbiAgICAvLyAgICAgICAgIGl0ZW0ucGFyZW50ID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAvLyAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBjYy52MyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pLnRvKDAuMiwgeyBzY2FsZTogMS4yIH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pLmJlemllclRvKDAuNCwgc3RhcnRQb3MsIG1pZFBvcywgZW5kUG9zKS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZE9rLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXJyQ3VzW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMF1dLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuZG9uZU5vZGUuY2hpbGRyZW5bdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVsxXV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5kZXN0cm95KClcclxuICAgIC8vICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBjaGVja0l0ZW0oaWQpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobWlzc2lvbltpXSA9PSBpZCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBhcnJJdGVtID0gW2ksIGpdO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBhcnJJdGVtXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGxcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuICAgIC8vIGNoZWNrTWlzc2lvbihpZCwgbm9kZSkge1xyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoaWQgPT0gbWlzc2lvbltqXSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXVtqXSA9IDEwMDtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlID0gW2ksIGpdXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoaSwgailcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJLaGF5W2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaXNDb3VudEN1cyA9IDNcclxuICAgIC8vIGlzQ291bnREb25lID0gMFxyXG4gICAgLy8gaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgLy8gY29pbkFyciA9IFtdXHJcbiAgICAvLyBjaGVja1N1Y2Nlc3MoaSwgaikgey8vY2hlY2sgY3VzIGhvYW4gdGhhbmggZG9uIGhhbmcgY2h1YVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGogIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHRhcmdldEtoYXkgPSB0aGlzLmFycktoYXlbaV0uY2hpbGRyZW5bal07XHJcbiAgICAvLyAgICAgICAgICAgICB0YXJnZXRLaGF5LmdldENvbXBvbmVudChcIkl0ZW1cIikub2ZmR3JheSh0YXJnZXRLaGF5LmNoaWxkcmVuWzFdKVxyXG4gICAgLy8gICAgICAgICAgICAgLy8gY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4yLCB7IHNjYWxlOiAyLjUgfSkudG8oMC4xLCB7IHNjYWxlOiAyLjIgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICAgICAgY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4yLCB7IHNjYWxlOiAwLjkgfSkudG8oMC4xLCB7IHNjYWxlOiAwLjY1IH0pLnN0YXJ0KClcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgfSwgMC40KVxyXG4gICAgLy8gICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgLy8gICAgIGxldCBjaGVjayA9IHRydWVcclxuICAgIC8vICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgIC8vICAgICBmb3IgKGxldCBtID0gMDsgbSA8IG1pc3Npb24ubGVuZ3RoOyBtKyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKG1pc3Npb25bbV0gIT0gMTAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0NvdW50RG9uZSsrXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0Q3VzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjdXMucG9zaXRpb24pXHJcbiAgICAvLyAgICAgICAgICAgICBwb3MgPSB0aGlzLmNhbWVyYS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zKTtcclxuICAgIC8vICAgICAgICAgICAgIHBvcyA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvcyk7XHJcbiAgICAvLyAgICAgICAgICAgICBwb3MgPSB0aGlzLmJhckNvaW4uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKS5hZGQoY2MudjMoMCwgMCkpXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgLy8gcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3Bhd25Db2luc0Zyb21DdXN0b21lcihwb3MsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBzYXUga2hpIHThu49hIHJhIHhvbmcgdGjDrCBtb3ZlIHbhu4EgdGhhbmggZ29sZFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubW92ZUNvaW5zVG9Hb2xkQmFyKHRoaXMuY29pbkFyciwgdGhpcy5iYXJDb2luKTtcclxuICAgIC8vICAgICAgICAgICAgIH0pOyBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5oYXBweSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vdGlDb2luLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDUwXHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobWlzc2lvbi5sZW5ndGggPT0gMykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuY29pbiArPSAxMDBcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoZ2xvYmFsVGhpcy5jb2luID49IDEwMDApIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgICAgICB9LCAwLjYpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMubW92ZUN1c091dChpKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5lbnF1ZXVlTW92ZSh0aGlzLmFyckN1c1tpXSk7XHJcbiAgICAvLyAgICAgICAgIH0sIDAuOClcclxuXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzcGF3bkNvaW5zRnJvbUN1c3RvbWVyKHN0YXJ0UG9zOiBjYy5WZWMzLCBvbkZpbmlzaD86ICgpID0+IHZvaWQpIHtcclxuICAgIC8vICAgICB0aGlzLmNvaW5BcnIgPSBbXVxyXG4gICAgLy8gICAgIGNvbnN0IGNvaW5Db3VudCA9IDY7XHJcbiAgICAvLyAgICAgY29uc3QgcmFkaXVzID0gNzA7IC8vIMSR4buZIHThu49hIHJhXHJcblxyXG4gICAgLy8gICAgIGxldCBmaW5pc2hlZCA9IDA7XHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29pbkNvdW50OyBpKyspIHtcclxuICAgIC8vICAgICAgICAgY29uc3QgY29pbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XHJcbiAgICAvLyAgICAgICAgIGNvaW4ucGFyZW50ID0gdGhpcy5iYXJDb2luO1xyXG4gICAgLy8gICAgICAgICBjb2luLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcclxuICAgIC8vICAgICAgICAgY29pbi5zY2FsZSA9IDAuOFxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvaW5BcnIucHVzaChjb2luKVxyXG4gICAgLy8gICAgICAgICAvLyByYW5kb20gaMaw4bubbmcgdOG7j2FcclxuICAgIC8vICAgICAgICAgY29uc3QgYW5nbGUgPSAoTWF0aC5QSSAqIDIgLyBjb2luQ291bnQpICogaTtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmFuZG9tUmFkaXVzID0gcmFkaXVzICsgTWF0aC5yYW5kb20oKSAqIDQwO1xyXG5cclxuICAgIC8vICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gc3RhcnRQb3MuYWRkKGNjLnYzKFxyXG4gICAgLy8gICAgICAgICAgICAgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tUmFkaXVzLFxyXG4gICAgLy8gICAgICAgICAgICAgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tUmFkaXVzLFxyXG4gICAgLy8gICAgICAgICAgICAgMFxyXG4gICAgLy8gICAgICAgICApKTtcclxuXHJcbiAgICAvLyAgICAgICAgIC8vIHThu49hIHJhXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGNvaW4pXHJcbiAgICAvLyAgICAgICAgICAgICAudG8oMC4yNSwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLmRlbGF5KDAuMDUpXHJcbiAgICAvLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZmluaXNoZWQrKztcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoZmluaXNoZWQgPT09IGNvaW5Db3VudCAmJiBvbkZpbmlzaCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlQ29pbnNUb0dvbGRCYXIoY29pbnM6IGNjLk5vZGVbXSwgZ29sZFRhcmdldDogY2MuTm9kZSkge1xyXG4gICAgLy8gICAgIC8vIGNvbnN0IHdvcmxkUG9zID0gZ29sZFRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGdvbGRUYXJnZXQucG9zaXRpb24pO1xyXG4gICAgLy8gICAgIGxldCBsb2NhbCA9IGNjLnYzKDAsIDApXHJcbiAgICAvLyAgICAgY29pbnMuZm9yRWFjaCgoY29pbiwgaW5kZXgpID0+IHtcclxuICAgIC8vICAgICAgICAgLy8gY29uc3QgbG9jYWwgPSBjb2luLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbihjb2luKVxyXG4gICAgLy8gICAgICAgICAgICAgLmRlbGF5KGluZGV4ICogMC4wNSlcclxuICAgIC8vICAgICAgICAgICAgIC50bygwLjQsIHsgcG9zaXRpb246IGxvY2FsLCBzY2FsZTogMC41IH0sIHsgZWFzaW5nOiBcInF1YWRJblwiIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29pbi5kZXN0cm95KCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gdGhpcy5hZGRHb2xkKDEpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaXNEZW0gPSAwXHJcbiAgICAvLyBnZXRQbGFjZShjdXMpIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXMpOyAvLyBn4buNbiBoxqFuXHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gZW5xdWV1ZU1vdmUoY3VzTm9kZSkge1xyXG4gICAgLy8gICAgIHRoaXMubW92ZVF1ZXVlLnB1c2goY3VzTm9kZSk7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9jZXNzUXVldWUoKTtcclxuICAgIC8vIH1cclxuICAgIC8vIHByb2Nlc3NRdWV1ZSgpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc1Byb2Nlc3NpbmcpIHJldHVybjtcclxuICAgIC8vICAgICBpZiAodGhpcy5tb3ZlUXVldWUubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgbGV0IGN1c05vZGUgPSB0aGlzLm1vdmVRdWV1ZS5zaGlmdCgpO1xyXG4gICAgLy8gICAgIHRoaXMuX21vdmVDdXNPdXQoY3VzTm9kZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gbW92ZVF1ZXVlID0gW107XHJcbiAgICAvLyBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgIC8vIF9tb3ZlQ3VzT3V0KGN1c05vZGUpIHtcclxuICAgIC8vICAgICBsZXQgcGxhY2UgPSB0aGlzLmFyckN1cy5pbmRleE9mKGN1c05vZGUpO1xyXG5cclxuICAgIC8vICAgICBpZiAocGxhY2UgPT09IC0xKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAvLyAgICAgbGV0IGZpcnN0Q3VzID0gY3VzTm9kZTtcclxuXHJcbiAgICAvLyAgICAgLy8gPT09PT0gU3Bhd24gY3VzdG9tZXIgdGnhur9wIHRoZW8gPT09PT1cclxuICAgIC8vICAgICBsZXQgbmV4dEN1cyA9IHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmlzQ291bnRDdXNdO1xyXG5cclxuICAgIC8vICAgICBpZiAobmV4dEN1cykge1xyXG4gICAgLy8gICAgICAgICBuZXh0Q3VzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBuZXh0Q3VzO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnRDdXMrKztcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vID09PT09IFThuqFvIGN1c3RvbWVyIG3hu5tpIOG7nyBjdeG7kWkgPT09PT1cclxuICAgIC8vICAgICAvLyBsZXQgbmV3Q3VzID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJlQ3VzW3RoaXMuaXNEZW1dKTtcclxuICAgIC8vICAgICAvLyBuZXdDdXMucGFyZW50ID0gdGhpcy5saXN0Q3VzO1xyXG5cclxuICAgIC8vICAgICAvLyBsZXQgbGFzdEN1cyA9IHRoaXMuYXJyQ3VzW3RoaXMuYXJyQ3VzLmxlbmd0aCAtIDFdO1xyXG4gICAgLy8gICAgIC8vIG5ld0N1cy5wb3NpdGlvbiA9IGxhc3RDdXMucG9zaXRpb24uYWRkKGNjLnYzKDYwMCwgMCkpO1xyXG5cclxuICAgIC8vICAgICAvLyB0aGlzLmlzRGVtID0gKHRoaXMuaXNEZW0gKyAxKSAlIHRoaXMubGlzdFByZUN1cy5sZW5ndGg7IGBgXHJcbiAgICAvLyAgICAgLy8gdGhpcy5hcnJDdXMucHVzaChuZXdDdXMpO1xyXG5cclxuICAgIC8vICAgICAvLyA9PT09PSBNb3ZlIHRo4bqxbmcgYuG7iyBvdXQgPT09PT1cclxuICAgIC8vICAgICBmaXJzdEN1cy56SW5kZXggPSAtMTtcclxuICAgIC8vICAgICBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmlzU3VjY2VzcyA9IHRydWVcclxuICAgIC8vICAgICBjYy50d2VlbihmaXJzdEN1cylcclxuICAgIC8vICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgIC8vICAgICAgICAgLmJ5KDAuOCAqIChwbGFjZSArIDEpLCB7IHBvc2l0aW9uOiBjYy52MygtNDAwICogKHBsYWNlICsgMSksIDApIH0pXHJcbiAgICAvLyAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIC8vICAgICBjYy50d2VlbihmaXJzdEN1cylcclxuICAgIC8vICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgIC8vICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAvLyAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIC8vICAgICAvLyA9PT09PSBNb3ZlIGPDoWMgdGjhurFuZyBwaMOtYSBzYXUgPT09PT1cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gcGxhY2UgKyAxOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV07XHJcblxyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihjaGlsZClcclxuICAgIC8vICAgICAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAvLyAgICAgICAgICAgICAuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vID09PT09IFJlbW92ZSBraOG7j2kgbeG6o25nID09PT09XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1cy5zcGxpY2UocGxhY2UsIDEpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpO1xyXG5cclxuICAgIC8vICAgICB9LCAxLjEpO1xyXG5cclxuICAgIC8vICAgICAvLyA9PT09PSBTcGF3biBraGF5ID09PT09XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5pc0NvdW50RG9uZSA8IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3Bhd05leHRLaGF5KHBsYWNlKTtcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9LCAwLjMpO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzQ291bnREb25lID09IDUpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBmaW5pc2hNb3ZlKCkge1xyXG4gICAgLy8gICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9jZXNzUXVldWUoKTsgLy8gY2jhuqF5IHRp4bq/cCB0aOG6sW5nIGvhur8gdGnhur9wXHJcbiAgICAvLyB9XHJcbiAgICAvLyBjaGVja1N1Y2Nlc3NJdGVtKCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hlY2sgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWlzc2lvbi5sZW5ndGg7IGorKykge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKG1pc3Npb25bal0gIT0gMTAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoaSwgbnVsbClcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpdGVtUXVldWU6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgLy8gc2h1ZmZsZUl0ZW0oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5pdGVtUXVldWUgPSBbXTtcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RJdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXRlbVF1ZXVlLnB1c2goaSk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyBzaHVmZmxlIEZpc2hlci1ZYXRlc1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSB0aGlzLml0ZW1RdWV1ZS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAvLyAgICAgICAgIFt0aGlzLml0ZW1RdWV1ZVtpXSwgdGhpcy5pdGVtUXVldWVbal1dID0gW3RoaXMuaXRlbVF1ZXVlW2pdLCB0aGlzLml0ZW1RdWV1ZVtpXV07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldE5leHRJdGVtSW5kZXgoKSB7XHJcblxyXG4gICAgLy8gICAgIGlmICh0aGlzLml0ZW1RdWV1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNodWZmbGVJdGVtKCk7IC8vIHThuqFvIGzGsOG7o3QgbeG7m2lcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLml0ZW1RdWV1ZS5zaGlmdCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGxhc3RJdGVtSW5kZXg6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgLy8gc3Bhd25JdGVtKCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0UmF5Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLmxhc3RJdGVtSW5kZXhbaV0gPSAtMTsgLy8gY2jGsGEgY8OzIGl0ZW0gdHLGsOG7m2NcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3Bhd25JdGVtT25SYXkoaSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHNwYXduSXRlbU9uUmF5KGluZGV4OiBudW1iZXIpIHtcclxuXHJcbiAgICAvLyAgICAgbGV0IG1hZyA9IChpbmRleCA9PSAwKSA/IDEwMDAgOiAtMTAwMDtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5jcmVhdGVJdGVtKGluZGV4LCBtYWcpO1xyXG5cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5jcmVhdGVJdGVtKGluZGV4LCBtYWcpO1xyXG4gICAgLy8gICAgIH0sIDIpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNyZWF0ZUl0ZW0oaW5kZXg6IG51bWJlciwgbWFnOiBudW1iZXIpIHtcclxuICAgIC8vICAgICBsZXQgcmQgPSB0aGlzLmdldE5leHRJdGVtSW5kZXgoKTtcclxuICAgIC8vICAgICB0aGlzLmxhc3RJdGVtSW5kZXhbaW5kZXhdID0gcmQ7XHJcblxyXG4gICAgLy8gICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtyZF0pO1xyXG4gICAgLy8gICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5saXN0UmF5W2luZGV4XTtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5hcnJJdGVtW2luZGV4XS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgIC8vICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMobWFnLCAtNDApO1xyXG5cclxuICAgIC8vICAgICB0aGlzLm1vdmVJdGVtKGl0ZW0sIG1hZyk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlSXRlbShpdGVtOiBjYy5Ob2RlLCBtYWcpIHtcclxuICAgIC8vICAgICBsZXQgdGFyZ2V0WCA9IC1tYWc7XHJcbiAgICAvLyAgICAgY2MudHdlZW4oaXRlbSlcclxuICAgIC8vICAgICAgICAgLnRvKDE3LCB7IHg6IHRhcmdldFggfSlcclxuICAgIC8vICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgLy8gfVxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcblxyXG4gICAgfVxyXG4gICAgb2ZmR3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuICAgIH1cclxuICAgIC8vIG1vdmVDbG9ja3RvVUkobm9kZTEpIHtcclxuICAgIC8vICAgICB0aGlzLm1vdmVJdGVtVG9VSShub2RlMSwgdGhpcy5iYXJUaW1lLmNoaWxkcmVuWzFdKTtcclxuICAgIC8vIH1cclxuICAgIC8vIG1vdmVJdGVtVG9VSShub2RlMSwgbm9kZTIpIHtcclxuICAgIC8vICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kaW4sIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIGxldCBwb3MgPSBub2RlMi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUyLnBvc2l0aW9uKVxyXG4gICAgLy8gICAgIHBvcyA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgIC8vICAgICAvLyBwb3MgPSBwb3MuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgLy8gICAgIGxldCBwb3MyID0gbm9kZTEucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMS5wb3NpdGlvbik7XHJcbiAgICAvLyAgICAgcG9zMiA9IHRoaXMubWFpbkNhbWVyYS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zMik7XHJcbiAgICAvLyAgICAgcG9zMiA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvczIpO1xyXG4gICAgLy8gICAgIHBvczIgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MyKS5hZGQoY2MudjMoMCwgMCkpXHJcbiAgICAvLyAgICAgbm9kZTEucGFyZW50ID0gdGhpcy51aU5vZGU7XHJcbiAgICAvLyAgICAgbm9kZTEuc2NhbGUgPSB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvIC8gdGhpcy51aUNhbWVyYS56b29tUmF0aW8gKiAwLjdcclxuICAgIC8vICAgICBub2RlMS5wb3NpdGlvbiA9IHBvczJcclxuICAgIC8vICAgICBjYy50d2Vlbihub2RlMSkudG8oMC40LCB7IHBvc2l0aW9uOiBwb3MsIHNjYWxlOiAwLjQgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIG5vZGUxLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMubWlzc2lvbkJhci5nZXRDb21wb25lbnQoXCJ1cGRhdGVCYXJcIikudXBkYXRlQmFyKCk7XHJcbiAgICAvLyAgICAgICAgIC8vIHdvb2QuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImV4cFwiKVxyXG4gICAgLy8gICAgICAgICAvLyAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kT3V0LCBmYWxzZSwgMSlcclxuICAgIC8vICAgICB9KS5zdGFydCgpXHJcbiAgICAvLyB9XHJcbiAgICBpc0VuZEdhbWUgPSBmYWxzZVxyXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKClcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICB0aGlzLmFtYXppbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMuZW5kQ2FyZFdpbikgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gfSwgMC41KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5hcnJDdXMpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiNi5hbmdyeVwiLCB0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZFNvdW5kKVxyXG4gICAgICAgICAgICB0aGlzLnRpbWV1cC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua2luZywgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRMb3NlLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyBidG5fY2hvb3NlKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgaXNEb2MgPSBmYWxzZVxyXG4gICAgLy8gdXBkYXRlKGR0KSB7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5sYkNvaW4uc3RyaW5nID0gZ2xvYmFsVGhpcy5nb2xkLnRvU3RyaW5nKClcclxuICAgIC8vICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAvLyAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICB1cGRhdGVSZXNwb25zaXZlKCkge1xyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcnJQb3NNZW51TmdhbmcgPSBbY2MudjMoLTM5MSwgLTEwMiksIGNjLnYzKDM3NSwgLTExMiksIGNjLnYzKDExNCwgLTEyMCksIGNjLnYzKC00MDksIC0yODQpLCBjYy52MygtMTU4LCAtMjk2KSwgY2MudjMoMTE4LCAtMjgwKSwgY2MudjMoMzkwLCAtMjk2KSwgY2MudjMoLTEzNywgLTExNildO1xyXG4gICAgYXJyUG9zRG9jID0gW2NjLnYzKDI2LCAtMzM3KSwgY2MudjMoMzM2LCAtMTEyKSwgY2MudjMoMTUuNSwgLTEyMSksIGNjLnYzKC0xNzAsIC01MjUuNyksIGNjLnYzKC0zMDAsIC0zNTIpLCBjYy52MygxODYuOTYsIC01MTIpLCBjYy52MygzNTUsIC0zMzUpLCBjYy52MygtMjkyLCAtMTE2KV1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44NVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmVuZENhcmRXaW4uc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNiA6IDAuNFxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5zY2FsZSA9IChsb2dpYykgPyAyLjUgOiAxLjRcclxuICAgICAgICB0aGlzLmJhckNvaW4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gKGxvZ2ljKSA/IDIxMCA6IDEwMFxyXG4gICAgICAgIHRoaXMucGhhb0hvYS5zY2FsZSA9IChsb2dpYykgPyA5IDogNVxyXG4gICAgICAgIHRoaXMuZ3VpbGQuc2NhbGUgPSAobG9naWMpID8gMiA6IDEuMlxyXG4gICAgICAgIHRoaXMuZ3VpbGQucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoMCwgLTkwMCkgOiBjYy52MygwLCAtMzYwKVxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5zY2FsZSA9IChsb2dpYykgPyAxIDogMVxyXG4gICAgICAgIHRoaXMubGlzdEtoYXkuc2NhbGUgPSAobG9naWMpID8gMS4xIDogMVxyXG4gICAgICAgIHRoaXMudGltZXVwLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcclxuICAgICAgICB0aGlzLmFtYXppbmcuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuNVxyXG4gICAgICAgIHRoaXMubm90aU1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMiA6IDFcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24yLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgLy8gdGhpcy50dXRNaXNpb24uc2NhbGUgPSAobG9naWMpID8gMiA6IDFcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMS43IDogMVxyXG4gICAgICAgIHRoaXMuYmFyTWlzc2lvbi5zY2FsZSA9IChsb2dpYykgPyAxLjggOiAxXHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoMCwgMCwgMCkgOiBjYy52MygwLCAxMTAsIDApXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZENhcmREb2MuYWN0aXZlID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmVuZENhcmRXaW4uYWN0aXZlID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0RvYyA9IHRydWVcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuN1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJDb2luLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIwMFxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS41XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLnNjYWxlID0gMS4yXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RvYyA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuODVcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19