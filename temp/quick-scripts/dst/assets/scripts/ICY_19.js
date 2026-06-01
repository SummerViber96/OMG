
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ICY_19.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a20dbL9ksJMpZmjImy+M4dx', 'ICY_19');
// scripts/ICY_19.ts

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
globalThis.countWood = 0;
globalThis.countMoney = 0;
globalThis.update = 1;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainCamera = null;
        _this.listCus = null;
        _this.listCusPre = [];
        _this.woodPrefab = null;
        _this.moneyPrefab = null;
        _this.preTree = null;
        _this.listtree = null;
        _this.char = null;
        _this.bage = null;
        _this.arenaSell = null;
        _this.arenaMoney = null;
        _this.arenaUpgrade = null;
        _this.arenaUpgrade2 = null;
        _this.arenaUpgrade3 = null;
        _this.arenaUpgrade4 = null;
        _this.preText = null;
        _this.linkToStore = null;
        _this.listArrow = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.logo = null;
        _this.keTien = null;
        _this.soundBg = null;
        _this.soundPut = null;
        _this.soundUd = null;
        _this.soundChatGo = null;
        _this.soundNhanGo = null;
        _this.lbMoney = null;
        _this.lbWood = null;
        _this.barCurrent = null;
        _this.endCard = null;
        _this.Joystick = null;
        _this.cusNext = null;
        _this.vfxMoney = null;
        _this.preEgg = null;
        _this.preKhayTrung = null;
        _this.keGo = null;
        _this.listCusSub = [];
        _this.arrow2 = null;
        _this.arrow3 = null;
        _this.listTrung = null;
        _this.tableSell = null;
        _this.moneyBag = null;
        _this.moneyTable = null;
        _this.farm3 = null;
        _this.farm4 = null;
        _this.arrowPrefab = null;
        _this.arrowNode = null;
        _this.isFirtTut = false;
        _this.isDelaySOund = false;
        _this.charComp = null;
        _this.listCusPos = [cc.v3(-35.76, -370.11, 0.00), cc.v3(33.94, -402.91, 0.00), cc.v3(110.13, -445.05, 0.00), cc.v3(189.77, -488.97, 0.00), cc.v3(267.05, -534.79, 0.00), cc.v3(366.10, -590.53, 0.00),];
        _this.isPlayerEggs = 0;
        _this.arrCus = [];
        _this.arrPos = [];
        _this.arrPosKe = [];
        _this.countBage = 0; // so khay tren nguoi
        _this.countBageTabel = 0; // so khay tren ban
        // listCusPos = [cc.v3(-264.54, -368.35, 0.00), cc.v3(-346.80, -413.52, 0.00), cc.v3(-451.97, -473.16, 0.00), cc.v3(-540.96, -523.00, 0.00), cc.v3(-632.62, -576.72, 0.00), cc.v3(-733.54, -631.18, 0.00)]
        _this.listMoneyPos = [cc.v3(-5.03, 77.62, 0.00), cc.v3(32.39, 57.52, 0.00), cc.v3(71.48, 36.30, 0.00), cc.v3(110.56, 15.63, 0.00), cc.v3(-57.52, 48.58, 0.00), cc.v3(-20.10, 28.48, 0.00), cc.v3(18.99, 7.26, 0.00), cc.v3(58.07, -13.40, 0.00),
            cc.v3(-110.01, 18.98, 0.00),
            cc.v3(-72.59, -1.12, 0.00),
            cc.v3(-33.50, -22.34, 0.00),
            cc.v3(5.58, -43.00, 0.00),];
        _this.arrowSpacing = 50;
        _this.countOpen = 0;
        _this.arrows = [];
        //nhan trung
        _this.isCount = 0; // dem neu bang 4 thi se tao khay trung
        _this.isCountSub = 0;
        _this.isCountEggke = 0;
        _this.isUpdate = 1;
        _this.isSelling = false;
        _this.isTranske = false;
        _this.countMoneyTable = 0;
        _this.countMoneyBag = 0;
        _this.istransMoney = false;
        _this.fillUd = 0;
        _this.isud = 0;
        _this.isvertical = false;
        _this.isTargetDraw = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        cc.director.getPhysicsManager().enabled = true;
    };
    NewClass.prototype.start = function () {
        cc.audioEngine.play(this.soundBg, true, 1);
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.charComp = this.char.getComponent("character");
        for (var i = 0; i < this.listCus.childrenCount; i++) {
            this.arrCus.push(this.listCus.children[i]);
            this.arrPos.push(this.listCus.children[i].position);
        }
        this.listCus.children[0].getComponent("character").realdySell = true;
        for (var i = this.keGo.childrenCount - 1; i >= 0; i--) {
            this.arrPosKe.push(this.keGo.children[i].position);
            this.keGo.children[i].destroy();
        }
        this.createEggs();
        this.isTargetDraw = this.listArrow.children[2];
    };
    NewClass.prototype.onEndGame = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.endCard.active = true;
            _this.linkToStore.active = true;
            _this.Joystick.active = false;
            _this.Joystick.getComponent("JoyStick").touchEndEvent();
        }, 1);
    };
    NewClass.prototype.upgradeArena = function (value) {
    };
    //tao trung
    NewClass.prototype.createEggs = function () {
        var startPos = cc.v3(-882, 514);
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 12; j++) {
                var rdANgle = Math.floor(Math.random() * 360);
                var egg = cc.instantiate(this.preEgg);
                egg.parent = this.listTrung;
                egg.angle = rdANgle;
                egg.position = startPos.add(cc.v3((-43) * j + 40 * i, (-23) * j - 20 * i));
            }
        }
    };
    NewClass.prototype.collectEggs = function (egg) {
        var _this = this;
        this.listArrow.children[2].active = false;
        if (egg && egg.parent) {
            var pos_1 = egg.parent.convertToWorldSpaceAR(egg.position).add(cc.v3(0, 100));
            egg.getComponent(cc.Animation).play();
            var count_1 = this.isPlayerEggs;
            globalThis.countWood++;
            this.scheduleOnce(function () {
                if (_this.isDelaySOund == false) {
                    _this.isDelaySOund = true;
                    cc.audioEngine.play(_this.soundChatGo, false, 1);
                    _this.scheduleOnce(function () {
                        _this.isDelaySOund = false;
                    }, 0.2);
                }
                var wood = cc.instantiate(_this.woodPrefab);
                wood.parent = _this.bage;
                var startPos = _this.bage.convertToNodeSpaceAR(pos_1);
                var endPos = cc.v3(0, 0);
                count_1++;
                var midPos = cc.v2((startPos.x + endPos.x) / 2, startPos.y + 100);
                wood.position = startPos;
                cc.tween(wood).bezierTo(0.3, cc.v2(startPos.x, startPos.y), midPos, cc.v2(endPos.x, endPos.y)).start();
                cc.tween(wood).to(0.3, { angle: 360 }).call(function () {
                    wood.destroy();
                }).start();
            }, 0.05);
            var fx = cc.instantiate(this.preText);
            fx.parent = this.node;
            fx.position = this.node.convertToNodeSpaceAR(pos_1);
            this.addEgg(egg.position);
            egg.destroy();
            this.isPlayerEggs++;
            this.isCount++;
            if (this.isCount == 4) {
                this.createKhay();
                this.isCount = 0;
            }
        }
    };
    // tao trung
    NewClass.prototype.addEgg = function (pos) {
        var _this = this;
        this.scheduleOnce(function () {
            if (_this.listTrung.childrenCount <= (20 * 12)) {
                var egg = cc.instantiate(_this.preEgg);
                egg.parent = _this.listTrung;
                egg.position = pos;
            }
        }, 2);
    };
    //tao khay, 1 khay = 4 trung
    NewClass.prototype.createKhay = function () {
        if (this.countBage >= 20)
            return;
        if (this.countBage < 0) {
            this.countBage = 0;
        }
        var khay = cc.instantiate(this.preKhayTrung);
        khay.parent = this.bage;
        khay.position = cc.v3(0, 50).add(cc.v3(0, 40 * this.countBage));
        this.countBage++;
    };
    NewClass.prototype.collectEggsSub = function (egg) {
        var _this = this;
        // if (this.keGo.childrenCount >= 60) return;
        this.listArrow.children[2].active = false;
        if (egg && egg.parent) {
            var pos = egg.parent.convertToWorldSpaceAR(egg.position).add(cc.v3(0, 100));
            egg.getComponent(cc.Animation).play();
            var count = this.isCountEggke;
            var check = Math.floor(count / 9);
            var checkRow = count % 9;
            if (this.isDelaySOund == false) {
                this.isDelaySOund = true;
                cc.audioEngine.play(this.soundChatGo, false, 0.5);
                this.scheduleOnce(function () {
                    _this.isDelaySOund = false;
                }, 0.2);
            }
            this.isCountSub++;
            if (this.isCountSub == 4 && this.isCountEggke <= 60) {
                this.isCountSub = 0;
                this.isCountEggke++;
                var wood = cc.instantiate(this.preKhayTrung);
                wood.parent = this.keGo;
                wood.scale = 1;
                var endPos = this.arrPosKe[checkRow].add(cc.v3(0, check * 20));
                wood.position = endPos;
            }
            if (this.isCountSub == 4) {
                this.isCountSub = 0;
            }
            var fx = cc.instantiate(this.preText);
            fx.parent = this.node;
            fx.position = this.node.convertToNodeSpaceAR(pos);
            this.addEgg(egg.position);
            egg.destroy();
        }
    };
    NewClass.prototype.updateOpen1 = function () {
        cc.audioEngine.play(this.soundUd, false, 1);
        globalThis.update = 2;
        this.listCusSub[0].active = true;
        this.listCusSub[1].active = true;
        this.listCusSub[2].active = true;
        this.listCusSub[3].active = true;
        this.listCusSub[4].active = true;
        cc.tween(this.arenaUpgrade).to(0.3, { scale: 0 }).start();
        // this.arenaUpgrade2.active = true
        this.arenaUpgrade = this.arenaUpgrade2;
        this.listArrow.children[5].active = true;
        this.arrowNode.active = true;
        this.isTargetDraw = this.listArrow.children[5];
    };
    NewClass.prototype.updateOpen2 = function () {
        cc.audioEngine.play(this.soundUd, false, 1);
        this.listCusSub[3].active = true;
        this.listCusSub[4].active = true;
        this.arenaUpgrade2.active = false;
    };
    NewClass.prototype.sellMoney = function () {
        var _this = this;
        if (this.countMoneyBag > 0) {
            cc.audioEngine.play(this.soundChatGo, false, 1);
            var money_1 = this.moneyBag.children[this.countMoneyBag - 1];
            this.countMoneyBag--;
            var pos = money_1.parent.convertToWorldSpaceAR(money_1.position);
            pos = this.arenaUpgrade.convertToNodeSpaceAR(pos);
            money_1.parent = this.arenaUpgrade;
            money_1.position = pos;
            var midPos = cc.v2(pos.x / 2, pos.y / 2 + 200);
            cc.tween(money_1).bezierTo(0.1, cc.v2(pos.x, pos.y), midPos, cc.v2(0, 0)).call(function () {
                money_1.children[1].active = true;
                money_1.children[0].active = false;
                _this.scheduleOnce(function () {
                    money_1.destroy();
                }, 0.4);
                _this.arenaUpgrade.getComponent("arena").upgrade(10);
                globalThis.countMoney = globalThis.countMoney - 10;
            }).start();
        }
    };
    NewClass.prototype.sellMoney3 = function () {
        var _this = this;
        if (this.countMoneyBag > 0) {
            cc.audioEngine.play(this.soundChatGo, false, 1);
            var money_2 = this.moneyBag.children[this.countMoneyBag - 1];
            this.countMoneyBag--;
            var pos = money_2.parent.convertToWorldSpaceAR(money_2.position);
            pos = this.arenaUpgrade3.convertToNodeSpaceAR(pos);
            money_2.parent = this.arenaUpgrade3;
            money_2.position = pos;
            var midPos = cc.v2(pos.x / 2, pos.y / 2 + 200);
            cc.tween(money_2).bezierTo(0.1, cc.v2(pos.x, pos.y), midPos, cc.v2(0, 0)).call(function () {
                money_2.children[1].active = true;
                money_2.children[0].active = false;
                _this.scheduleOnce(function () {
                    money_2.destroy();
                }, 0.4);
                _this.arenaUpgrade3.getComponent("arena").upgrade(10);
                globalThis.countMoney = globalThis.countMoney - 10;
            }).start();
        }
    };
    NewClass.prototype.sellMoney4 = function () {
        var _this = this;
        if (this.countMoneyBag > 0) {
            var money_3 = this.moneyBag.children[this.countMoneyBag - 1];
            this.countMoneyBag--;
            var pos = money_3.parent.convertToWorldSpaceAR(money_3.position);
            pos = this.arenaUpgrade4.convertToNodeSpaceAR(pos);
            money_3.parent = this.arenaUpgrade4;
            money_3.position = pos;
            var midPos = cc.v2(pos.x / 2, pos.y / 2 + 200);
            cc.tween(money_3).bezierTo(0.1, cc.v2(pos.x, pos.y), midPos, cc.v2(0, 0)).call(function () {
                money_3.children[1].active = true;
                money_3.children[0].active = false;
                _this.scheduleOnce(function () {
                    money_3.destroy();
                }, 0.4);
                _this.arenaUpgrade4.getComponent("arena").upgrade(10);
                globalThis.countMoney = globalThis.countMoney - 10;
            }).start();
        }
    };
    NewClass.prototype.offSellMone = function () {
        this.unschedule(this.sellMoney);
    };
    NewClass.prototype.offSellMone3 = function (value) {
        if (value == 3) {
            this.unschedule(this.sellMoney3);
        }
        else {
            this.unschedule(this.sellMoney4);
        }
    };
    NewClass.prototype.getSell = function () {
        cc.audioEngine.play(this.soundNhanGo, false, 1);
        var count = globalThis.countMoney;
        var pos = this.arenaUpgrade.position;
        if (count > 0) {
            this.arrow3.active = false;
            this.schedule(this.sellMoney, 0.12);
        }
    };
    NewClass.prototype.getSell3 = function (value) {
        cc.audioEngine.play(this.soundNhanGo, false, 1);
        var count = globalThis.countMoney;
        var pos = (value == 3) ? this.arenaUpgrade3.position : this.arenaUpgrade4.position;
        if (count > 0) {
            this.arrow3.active = false;
            if (value == 3) {
                this.schedule(this.sellMoney3, 0.12);
            }
            else {
                this.schedule(this.sellMoney4, 0.12);
            }
        }
    };
    NewClass.prototype.sellToCus = function () {
    };
    NewClass.prototype.sellToCus2 = function () {
        var _this = this;
        if (this.isSelling)
            return;
        if (this.arrow2.active == true) {
            this.arrow2.active = false;
            this.scheduleOnce(function () {
                _this.arrow3.active = true;
            }, 1);
        }
        this.isSelling = true;
        this.schedule(this.doSell, 0.12);
    };
    NewClass.prototype.offSell = function () {
        this.isSelling = false;
        this.unschedule(this.doSell);
        // this.transMoneyToChar()
    };
    //ban do cho khach
    NewClass.prototype.doSell = function () {
        var _this = this;
        var pos = this.arrCus[0].position.add(cc.v3(0, 100));
        pos = this.listCus.convertToWorldSpaceAR(pos);
        var bageClone = this.char.getChildByName("bageClone");
        var cus = this.arrCus[0];
        if (cus.getComponent("character").realdySell) {
            if (this.countBage - 1 >= 0) {
                globalThis.countWood--;
                cc.audioEngine.play(this.soundPut, false, 1);
                var child_1 = this.bage.children[this.countBage - 1];
                if (child_1.name != "") {
                    child_1.parent = bageClone;
                    var startPos = child_1.position;
                    var endPos = this.tableSell.parent.convertToWorldSpaceAR(this.tableSell.position);
                    endPos = bageClone.convertToNodeSpaceAR(endPos);
                    var midPos = cc.v2((startPos.x + endPos.y) / 2, (startPos.y + endPos.y) / 2 + 800);
                    cc.tween(child_1).bezierTo(0.1, cc.v2(startPos.x, startPos.y), midPos, cc.v2(endPos.x, endPos.y)).call(function () {
                        _this.creatEggTable();
                        _this.checkRemove();
                        child_1.destroy();
                    }).start();
                }
            }
            else {
                if (this.countBageTabel > 0) {
                    this.checkRemove();
                }
                this.transMoneyToChar();
            }
            // if (this.countBageTabel > 0 &&) {
            // }
        }
    };
    NewClass.prototype.creatEggTable = function () {
        if (this.countBageTabel >= 30)
            return;
        this.countBageTabel++;
        var bag = this.tableSell.getChildByName('bag');
        var arrKhayPos = [cc.v3(203, -300), cc.v3(-95, -20)];
        var row = Math.floor(((this.countBageTabel) / 2));
        var col = (this.countBageTabel) % 2;
        var khay = cc.instantiate(this.preKhayTrung);
        khay.parent = bag;
        khay.scale = 5;
        khay.position = cc.v3(arrKhayPos[col].x, row * 120 + arrKhayPos[col].y);
    };
    NewClass.prototype.addWoodFromKe = function () {
        if (this.isTranske)
            return;
        if (this.countBage >= 20)
            return;
        this.isTranske = true;
        this.schedule(this.addTopToRay, 0.15);
    };
    NewClass.prototype.addTopToRay = function () {
        if (this.isCountEggke <= 0)
            return;
        var child = this.keGo.children[this.isCountEggke - 1];
        this.isCountEggke--;
        child.parent = this.bage;
        child.stopAllActions();
        child.angle = 360;
        child.scaleX = 1;
        globalThis.countWood++;
        // child.position = cc.v3(-291, 289 + (this.isCountEggke - 1) * 15);
        if (this.countBage < 0) {
            this.countBage = 0;
        }
        child.position = cc.v3(0, 50).add(cc.v3(0, 40 * this.countBage));
        this.countBage++;
    };
    NewClass.prototype.offWoodFromKe = function () {
        this.isTranske = false;
        this.unschedule(this.addTopToRay);
    };
    //kiem tra nguoi dung dang order co hoan thanh khong
    NewClass.prototype.checkRemove = function () {
        if (this.countBageTabel <= 0)
            return;
        var cus = this.arrCus[0];
        cus.getComponent("character").isFill += 0.35;
        this.isPlayerEggs -= 4;
        this.countBage -= 1;
        var fillCount = cus.getComponent("character").isFill;
        var fill = cus.getChildByName("status").children[0].getComponent(cc.Sprite);
        cc.tween(fill).to(0.1, { fillRange: fillCount }).call(function () {
        }).start();
        if (fillCount >= 1) {
            var bag = this.tableSell.getChildByName('bag');
            this.countBageTabel -= 1;
            if (bag.children[this.countBageTabel] && bag.children[this.countBageTabel].name != "") {
                bag.children[this.countBageTabel].destroy();
            }
            if (cus.getComponent("character").success == false) {
                cus.getComponent("character").success = true;
                cus.getComponent("character").isFill = 0;
                fill.fillRange = 0;
                this.removeChild();
            }
        }
    };
    //hoan thanh nguoi choi
    NewClass.prototype.removeChild = function () {
        var _this = this;
        // console.log("removechild")
        cc.audioEngine.play(this.soundUd, false, 1);
        var cus = this.arrCus[0];
        cus.getChildByName("status").getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            var vfxMoney = cc.instantiate(_this.vfxMoney);
            vfxMoney.parent = _this.node;
            vfxMoney.position = cus.position.add(cc.v3(50, 50));
            vfxMoney.scale = 1.2;
            _this.createMoney();
            globalThis.countMoney += 10;
            cus.parent = _this.cusNext;
            cus.getComponent("character").moveToBar();
            _this.arrCus.shift();
            _this.addCus();
            _this.scheduleOnce(function () {
                for (var i = 0; i < _this.arrCus.length; i++) {
                    if (_this.arrCus[i] != cus) {
                        _this.arrCus[i].getComponent("character").moveNext(_this.arrPos[i]);
                        if (i == 0) {
                            _this.arrCus[i].getComponent("character").realdySell = true;
                        }
                    }
                }
            }, 0.2);
        }, 0.2);
    };
    NewClass.prototype.createMoney = function () {
        var arrMoneyPos = [cc.v3(78, 17), cc.v3(18, -25)];
        var check = Math.floor(this.countMoneyTable / 2);
        var endPos1 = arrMoneyPos[this.countMoneyTable % 2];
        var endPos = cc.v2(endPos1.x, endPos1.y + check * 20);
        var startPos = cc.v2(-128.6, -135.876);
        var midPos = cc.v2((startPos.x + endPos.x) / 2, (startPos.y + endPos.y) / 2 + 300);
        var money = cc.instantiate(this.moneyPrefab);
        money.parent = this.moneyTable;
        cc.tween(money).bezierTo(0.3, startPos, midPos, endPos).start();
        this.countMoneyTable++;
    };
    NewClass.prototype.transMoneyToChar = function () {
        if (this.istransMoney)
            return;
        if (this.countMoneyTable <= 0)
            return;
        this.istransMoney = true;
        var count = this.countMoneyTable - 1;
        for (var i = count; i >= 0; i--) {
            cc.audioEngine.play(this.soundChatGo, false, 1);
            var money = this.moneyTable.children[i];
            var pos = money.parent.convertToWorldSpaceAR(money.position);
            pos = this.moneyBag.convertToNodeSpaceAR(pos);
            money.parent = this.moneyBag;
            money.stopAllActions();
            // money.position = pos;
            // money.position = cc.v3(0, this.countMoneyBag * 20)
            money.position = pos;
            var posEnd = cc.v2(0, this.countMoneyBag * 20);
            var posStart = cc.v2(pos.x, pos.y);
            var posMid = cc.v2((posEnd.x + pos.x) / 2, (posEnd.y + pos.y) / 2 + 200);
            cc.tween(money).bezierTo(0.1, posStart, posMid, posEnd).start();
            this.countMoneyBag++;
            this.countMoneyTable--;
            if (i == 0) {
                this.istransMoney = false;
            }
        }
    };
    //them khach hang moi
    NewClass.prototype.addCus = function () {
        var rd = Math.floor(Math.random() * this.listCusPre.length);
        var cus = cc.instantiate(this.listCusPre[rd]);
        cus.parent = this.listCus;
        cus.position = cc.v3(829, -879);
        cus.scale = 1.2;
        this.arrCus.push(cus);
    };
    NewClass.prototype.getUpgrade = function () {
        var _this = this;
        this.listArrow.children[1].active = false;
        var dem = this.keTien.childrenCount - 1;
        var pos = this.arenaUpgrade.parent.convertToWorldSpaceAR(this.arenaUpgrade.position);
        pos = this.keTien.convertToNodeSpaceAR(pos);
        var _loop_1 = function (i) {
            var child = this_1.keTien.children[i];
            var midPos = cc.v2((pos.x + child.x) / 2, pos.y + 200);
            cc.tween(child).delay(0.05 * i).call(function () {
                cc.audioEngine.play(_this.soundPut, false, 1);
                globalThis.countMoney--;
            }).bezierTo(0.3, cc.v2(child.x, child.y), midPos, cc.v2(pos.x, pos.y))
                .call(function () {
                child.destroy();
                _this.upgradeEff();
            }).start();
        };
        var this_1 = this;
        for (var i = dem; i >= 0; i--) {
            _loop_1(i);
        }
    };
    NewClass.prototype.upgradeEff = function () {
        var _this = this;
        var fill = this.arenaUpgrade.getChildByName("fill");
        var fillRange = fill.getComponent(cc.Sprite);
        this.fillUd += 0.05;
        cc.tween(fillRange).to(0.1, { fillRange: this.fillUd }).call(function () {
            if (fillRange.fillRange >= 1) {
                fillRange.fillRange = 0;
                _this.updateHero();
                _this.fillUd = 0;
                return;
            }
        }).start();
    };
    NewClass.prototype.updateHero = function () {
        cc.audioEngine.play(this.soundUd, false, 1);
        this.char.getChildByName("textUd").getComponent(cc.Animation).play();
        if (this.isud == 0) {
            this.char.getComponent("character").anim.setSkin("Skin_1");
            this.char.getChildByName("vfx_ud").getComponent(cc.Animation).play();
        }
        else if (this.isud == 3) {
            this.char.getComponent("character").anim.setSkin("Skin_2");
            this.char.getChildByName("vfx_ud").getComponent(cc.Animation).play();
        }
        this.isud++;
    };
    NewClass.prototype.showEndCard = function () {
        this.linkToStore.active = true;
        this.endCard.active = true;
        this.Joystick.active = false;
        this.Joystick.getComponent("JoyStick").touchEndEvent();
    };
    NewClass.prototype.spawMoney = function (cus) {
        var _this = this;
        this.arenaMoney.getComponent(cc.PolygonCollider).enabled = false;
        var pos = cus.position.add(cc.v3(0, 100));
        pos = cus.parent.convertToWorldSpaceAR(pos);
        pos = this.keTien.convertToNodeSpaceAR(pos);
        var _loop_2 = function (i) {
            this_2.scheduleOnce(function () {
                var money = cc.instantiate(_this.moneyPrefab);
                money.parent = _this.keTien;
                money.position = pos;
                cc.tween(money).to(0.2, { position: _this.listMoneyPos[i] }).call(function () {
                    globalThis.countMoney++;
                    if (i == 11) {
                        // this.listArrow.children[1].active = true;
                        // this.listArrow.children[1].getComponent(cc.Animation).play()
                        _this.arenaMoney.getComponent(cc.PolygonCollider).enabled = true;
                    }
                }).start();
            }, i * 0.05);
        };
        var this_2 = this;
        for (var i = 0; i < 12; i++) {
            _loop_2(i);
        }
    };
    NewClass.prototype.reponsive = function (value) {
        this.mainCamera.zoomRatio = (value) ? 1.2 : 2;
        this.logo.scale = (value) ? 0.4 : 0.6;
        this.logo.getComponent(cc.Widget).top = (value) ? 157 : 180;
        this.logo.getComponent(cc.Widget).left = (value) ? 200 : -600;
        this.barCurrent.scale = (value) ? 1 : 1.8;
        this.barCurrent.getComponent(cc.Widget).top = (value) ? 149 : 250;
        this.barCurrent.getComponent(cc.Widget).right = (value) ? 137 : 137 - 650;
        this.endCard.scale = (value) ? 1 : 1.5;
    };
    NewClass.prototype.update = function (dt) {
        if (this.isTargetDraw) {
            this.drawnArrow(this.char, this.isTargetDraw);
        }
        if (!this.isFirtTut && globalThis.countWood == 10) {
            this.isFirtTut = true;
            this.arrow2.active = true;
        }
        this.lbMoney.string = globalThis.countMoney.toString();
        this.lbWood.string = globalThis.countWood.toString();
        this.mainCamera.node.setPosition(this.char.position.add(cc.v3(100, 0)));
        var canvas = this.node.getComponent(cc.Canvas);
        var deviceResolution = cc.view.getFrameSize();
        // console.log(deviceResolution.width/deviceResolution.height)
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
            if (!this.isvertical) {
                this.isvertical = true;
            }
        }
        else {
            this.reponsive(false);
            var checkIpad = deviceResolution.width / deviceResolution.height;
            if (checkIpad < 1.35 && checkIpad > 1.3) {
                this.logo.getComponent(cc.Widget).left = -400;
            }
        }
    };
    NewClass.prototype.drawnArrow = function (source, target) {
        if (!source || !target || !this.arrowPrefab || this.countOpen == 4 || target.name == "")
            return;
        // Tọa độ toàn cục
        var startWorld = source.convertToWorldSpaceAR(cc.v2(0, 0));
        var endWorld = target.convertToWorldSpaceAR(cc.v2(0, 0));
        // Đổi về tọa độ local của cha (nên đặt script trên node chung của source và target)
        var parent = this.arrowNode;
        var startLocal = parent.convertToNodeSpaceAR(startWorld);
        var endLocal = parent.convertToNodeSpaceAR(endWorld);
        var dir = endLocal.sub(startLocal);
        var distance = dir.mag();
        var angle = cc.v2(1, 0).signAngle(dir) * 180 / Math.PI;
        var count = Math.floor(distance / this.arrowSpacing);
        // const count = 1
        // Điều chỉnh số lượng mũi tên
        while (this.arrows.length < count) {
            var arrow = cc.instantiate(this.arrowPrefab);
            arrow.zIndex = 0;
            parent.addChild(arrow);
            this.arrows.push(arrow);
        }
        while (this.arrows.length > count) {
            var extra = this.arrows.pop();
            extra.destroy();
        }
        // Đặt vị trí từng mũi tên
        for (var i = 0; i < count; i++) {
            var ratio = (i + 1) * this.arrowSpacing / distance;
            var pos = endLocal.lerp(startLocal, ratio);
            var arrow = this.arrows[i];
            arrow.setPosition(pos.add(cc.v3(0, 0)));
            arrow.scale = -1.5;
            arrow.angle = angle;
        }
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCus", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "listCusPre", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "woodPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "moneyPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preTree", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listtree", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bage", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arenaSell", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arenaMoney", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arenaUpgrade", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arenaUpgrade2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arenaUpgrade3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arenaUpgrade4", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preText", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listArrow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "keTien", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPut", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChatGo", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundNhanGo", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbMoney", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbWood", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barCurrent", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Joystick", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cusNext", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "vfxMoney", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preEgg", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preKhayTrung", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "keGo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCusSub", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrow2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrow3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listTrung", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tableSell", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "moneyBag", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "moneyTable", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "farm3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "farm4", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "arrowPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrowNode", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSUNZXzE5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0FBQ3hCLFVBQVUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFBO0FBQ3pCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0FBQ2YsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpeEJDO1FBOXdCRyxnQkFBVSxHQUFjLElBQUksQ0FBQTtRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUU3QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGNBQVEsR0FBRyw4QkFBOEIsQ0FBQTtRQUV6QyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsYUFBTyxHQUFp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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQTlGVCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaXhCNUI7SUFBRCxlQUFDO0NBanhCRCxBQWl4QkMsQ0FqeEJxQyxFQUFFLENBQUMsU0FBUyxHQWl4QmpEO2tCQWp4Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJnbG9iYWxUaGlzLmNvdW50V29vZCA9IDBcclxuZ2xvYmFsVGhpcy5jb3VudE1vbmV5ID0gMFxyXG5nbG9iYWxUaGlzLnVwZGF0ZSA9IDFcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3VzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsaXN0Q3VzUHJlOiBjYy5QcmVmYWJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHdvb2RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbW9uZXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlVHJlZTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdHRyZWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWdlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJlbmFTZWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJlbmFNb25leTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFyZW5hVXBncmFkZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFyZW5hVXBncmFkZTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhcmVuYVVwZ3JhZGUzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJlbmFVcGdyYWRlNDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlVGV4dDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RBcnJvdzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2VUaWVuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kUHV0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDaGF0R286IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmROaGFuR286IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYk1vbmV5OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYldvb2Q6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyQ3VycmVudDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSm95c3RpY2s6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGN1c05leHQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdmZ4TW9uZXk6IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVFZ2c6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlS2hheVRydW5nOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBrZUdvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1c1N1YjogY2MuTm9kZVtdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJyb3cyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJyb3czOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFRydW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YWJsZVNlbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtb25leUJhZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1vbmV5VGFibGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZhcm0zOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmFybTQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYXJyb3dQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFycm93Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBpc0ZpcnRUdXQgPSBmYWxzZTtcclxuICAgIGlzRGVsYXlTT3VuZCA9IGZhbHNlXHJcbiAgICBjaGFyQ29tcCA9IG51bGw7XHJcbiAgICBsaXN0Q3VzUG9zID0gW2NjLnYzKC0zNS43NiwgLTM3MC4xMSwgMC4wMCksIGNjLnYzKDMzLjk0LCAtNDAyLjkxLCAwLjAwKSwgY2MudjMoMTEwLjEzLCAtNDQ1LjA1LCAwLjAwKSwgY2MudjMoMTg5Ljc3LCAtNDg4Ljk3LCAwLjAwKSwgY2MudjMoMjY3LjA1LCAtNTM0Ljc5LCAwLjAwKSwgY2MudjMoMzY2LjEwLCAtNTkwLjUzLCAwLjAwKSxdXHJcbiAgICBpc1BsYXllckVnZ3MgPSAwXHJcbiAgICBhcnJDdXMgPSBbXTtcclxuICAgIGFyclBvcyA9IFtdO1xyXG4gICAgYXJyUG9zS2UgPSBbXTtcclxuICAgIGNvdW50QmFnZSA9IDA7IC8vIHNvIGtoYXkgdHJlbiBuZ3VvaVxyXG4gICAgY291bnRCYWdlVGFiZWwgPSAwOy8vIHNvIGtoYXkgdHJlbiBiYW5cclxuICAgIC8vIGxpc3RDdXNQb3MgPSBbY2MudjMoLTI2NC41NCwgLTM2OC4zNSwgMC4wMCksIGNjLnYzKC0zNDYuODAsIC00MTMuNTIsIDAuMDApLCBjYy52MygtNDUxLjk3LCAtNDczLjE2LCAwLjAwKSwgY2MudjMoLTU0MC45NiwgLTUyMy4wMCwgMC4wMCksIGNjLnYzKC02MzIuNjIsIC01NzYuNzIsIDAuMDApLCBjYy52MygtNzMzLjU0LCAtNjMxLjE4LCAwLjAwKV1cclxuICAgIGxpc3RNb25leVBvcyA9IFtjYy52MygtNS4wMywgNzcuNjIsIDAuMDApLCBjYy52MygzMi4zOSwgNTcuNTIsIDAuMDApLCBjYy52Myg3MS40OCwgMzYuMzAsIDAuMDApLCBjYy52MygxMTAuNTYsIDE1LjYzLCAwLjAwKSwgY2MudjMoLTU3LjUyLCA0OC41OCwgMC4wMCksIGNjLnYzKC0yMC4xMCwgMjguNDgsIDAuMDApLCBjYy52MygxOC45OSwgNy4yNiwgMC4wMCksIGNjLnYzKDU4LjA3LCAtMTMuNDAsIDAuMDApLFxyXG4gICAgY2MudjMoLTExMC4wMSwgMTguOTgsIDAuMDApLFxyXG4gICAgY2MudjMoLTcyLjU5LCAtMS4xMiwgMC4wMCksXHJcbiAgICBjYy52MygtMzMuNTAsIC0yMi4zNCwgMC4wMCksXHJcbiAgICBjYy52Myg1LjU4LCAtNDMuMDAsIDAuMDApLF1cclxuICAgIGFycm93U3BhY2luZzogbnVtYmVyID0gNTA7XHJcbiAgICBjb3VudE9wZW4gPSAwO1xyXG5cclxuICAgIGFycm93czogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAxKVxyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJDb21wID0gdGhpcy5jaGFyLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlbltpXSlcclxuICAgICAgICAgICAgdGhpcy5hcnJQb3MucHVzaCh0aGlzLmxpc3RDdXMuY2hpbGRyZW5baV0ucG9zaXRpb24pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikucmVhbGR5U2VsbCA9IHRydWVcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5rZUdvLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLmFyclBvc0tlLnB1c2godGhpcy5rZUdvLmNoaWxkcmVuW2ldLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICB0aGlzLmtlR28uY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZUVnZ3MoKVxyXG4gICAgICAgIHRoaXMuaXNUYXJnZXREcmF3ID0gdGhpcy5saXN0QXJyb3cuY2hpbGRyZW5bMl1cclxuICAgIH1cclxuICAgIG9uRW5kR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuSm95c3RpY2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuSm95c3RpY2suZ2V0Q29tcG9uZW50KFwiSm95U3RpY2tcIikudG91Y2hFbmRFdmVudCgpO1xyXG4gICAgICAgIH0sIDEpXHJcblxyXG5cclxuICAgIH1cclxuICAgIHVwZ3JhZGVBcmVuYSh2YWx1ZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL3RhbyB0cnVuZ1xyXG4gICAgY3JlYXRlRWdncygpIHtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52MygtODgyLCA1MTQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEyOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByZEFOZ2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKVxyXG4gICAgICAgICAgICAgICAgbGV0IGVnZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRWdnKVxyXG4gICAgICAgICAgICAgICAgZWdnLnBhcmVudCA9IHRoaXMubGlzdFRydW5nXHJcbiAgICAgICAgICAgICAgICBlZ2cuYW5nbGUgPSByZEFOZ2xlO1xyXG4gICAgICAgICAgICAgICAgZWdnLnBvc2l0aW9uID0gc3RhcnRQb3MuYWRkKGNjLnYzKCgtNDMpICogaiArIDQwICogaSwgKC0yMykgKiBqIC0gMjAgKiBpKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vbmhhbiB0cnVuZ1xyXG4gICAgaXNDb3VudCA9IDAvLyBkZW0gbmV1IGJhbmcgNCB0aGkgc2UgdGFvIGtoYXkgdHJ1bmdcclxuICAgIGNvbGxlY3RFZ2dzKGVnZykge1xyXG4gICAgICAgIHRoaXMubGlzdEFycm93LmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKGVnZyAmJiBlZ2cucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBlZ2cucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihlZ2cucG9zaXRpb24pLmFkZChjYy52MygwLCAxMDApKTtcclxuICAgICAgICAgICAgZWdnLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5pc1BsYXllckVnZ3M7XHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuY291bnRXb29kKytcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWxheVNPdW5kID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RlbGF5U091bmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hhdEdvLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEZWxheVNPdW5kID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgd29vZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMud29vZFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB3b29kLnBhcmVudCA9IHRoaXMuYmFnZTtcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IHRoaXMuYmFnZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHN0YXJ0UG9zLnggKyBlbmRQb3MueCkgLyAyLCBzdGFydFBvcy55ICsgMTAwKVxyXG4gICAgICAgICAgICAgICAgd29vZC5wb3NpdGlvbiA9IHN0YXJ0UG9zXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih3b29kKS5iZXppZXJUbygwLjMsIGNjLnYyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpLCBtaWRQb3MsIGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSkpLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLnRvKDAuMywgeyBhbmdsZTogMzYwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvb2QuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9LCkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAwLjA1KVxyXG4gICAgICAgICAgICBsZXQgZnggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVRleHQpXHJcbiAgICAgICAgICAgIGZ4LnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICBmeC5wb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRWdnKGVnZy5wb3NpdGlvbilcclxuICAgICAgICAgICAgZWdnLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5pc1BsYXllckVnZ3MrK1xyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnQrK1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvdW50ID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlS2hheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHRhbyB0cnVuZ1xyXG4gICAgYWRkRWdnKHBvcykge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFRydW5nLmNoaWxkcmVuQ291bnQgPD0gKDIwICogMTIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWdnID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVFZ2cpO1xyXG4gICAgICAgICAgICAgICAgZWdnLnBhcmVudCA9IHRoaXMubGlzdFRydW5nO1xyXG4gICAgICAgICAgICAgICAgZWdnLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDIpXHJcblxyXG4gICAgfVxyXG4gICAgLy90YW8ga2hheSwgMSBraGF5ID0gNCB0cnVuZ1xyXG4gICAgY3JlYXRlS2hheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudEJhZ2UgPj0gMjApIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jb3VudEJhZ2UgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRCYWdlID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQga2hheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheVRydW5nKTtcclxuICAgICAgICBraGF5LnBhcmVudCA9IHRoaXMuYmFnZTtcclxuICAgICAgICBraGF5LnBvc2l0aW9uID0gY2MudjMoMCwgNTApLmFkZChjYy52MygwLCA0MCAqIHRoaXMuY291bnRCYWdlKSlcclxuICAgICAgICB0aGlzLmNvdW50QmFnZSsrXHJcbiAgICB9XHJcbiAgICBpc0NvdW50U3ViID0gMFxyXG4gICAgaXNDb3VudEVnZ2tlID0gMFxyXG4gICAgY29sbGVjdEVnZ3NTdWIoZWdnKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMua2VHby5jaGlsZHJlbkNvdW50ID49IDYwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5saXN0QXJyb3cuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBpZiAoZWdnICYmIGVnZy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGVnZy5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGVnZy5wb3NpdGlvbikuYWRkKGNjLnYzKDAsIDEwMCkpO1xyXG4gICAgICAgICAgICBlZ2cuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMuaXNDb3VudEVnZ2tlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNoZWNrID0gTWF0aC5mbG9vcihjb3VudCAvIDkpXHJcbiAgICAgICAgICAgIGxldCBjaGVja1JvdyA9IGNvdW50ICUgOVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RlbGF5U091bmQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEZWxheVNPdW5kID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hhdEdvLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEZWxheVNPdW5kID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnRTdWIrK1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3VudFN1YiA9PSA0ICYmIHRoaXMuaXNDb3VudEVnZ2tlIDw9IDYwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ291bnRTdWIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50RWdna2UrKztcclxuICAgICAgICAgICAgICAgIGxldCB3b29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVLaGF5VHJ1bmcpO1xyXG4gICAgICAgICAgICAgICAgd29vZC5wYXJlbnQgPSB0aGlzLmtlR287XHJcbiAgICAgICAgICAgICAgICB3b29kLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLmFyclBvc0tlW2NoZWNrUm93XS5hZGQoY2MudjMoMCwgY2hlY2sgKiAyMCkpO1xyXG4gICAgICAgICAgICAgICAgd29vZC5wb3NpdGlvbiA9IGVuZFBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvdW50U3ViID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDb3VudFN1YiA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZnggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVRleHQpXHJcbiAgICAgICAgICAgIGZ4LnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICBmeC5wb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRWdnKGVnZy5wb3NpdGlvbilcclxuICAgICAgICAgICAgZWdnLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlT3BlbjEoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKVxyXG4gICAgICAgIGdsb2JhbFRoaXMudXBkYXRlID0gMlxyXG4gICAgICAgIHRoaXMubGlzdEN1c1N1YlswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlzdEN1c1N1YlsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlzdEN1c1N1YlsyXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlzdEN1c1N1YlszXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlzdEN1c1N1Yls0XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYXJlbmFVcGdyYWRlKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vIHRoaXMuYXJlbmFVcGdyYWRlMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5hcmVuYVVwZ3JhZGUgPSB0aGlzLmFyZW5hVXBncmFkZTJcclxuICAgICAgICB0aGlzLmxpc3RBcnJvdy5jaGlsZHJlbls1XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5hcnJvd05vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldERyYXc9dGhpcy5saXN0QXJyb3cuY2hpbGRyZW5bNV1cclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGVPcGVuMigpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5saXN0Q3VzU3ViWzNdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saXN0Q3VzU3ViWzRdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hcmVuYVVwZ3JhZGUyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuICAgIHNlbGxNb25leSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudE1vbmV5QmFnID4gMCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGF0R28sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICBsZXQgbW9uZXkgPSB0aGlzLm1vbmV5QmFnLmNoaWxkcmVuW3RoaXMuY291bnRNb25leUJhZyAtIDFdO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50TW9uZXlCYWctLTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IG1vbmV5LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobW9uZXkucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLmFyZW5hVXBncmFkZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIG1vbmV5LnBhcmVudCA9IHRoaXMuYXJlbmFVcGdyYWRlXHJcbiAgICAgICAgICAgIG1vbmV5LnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIocG9zLnggLyAyLCBwb3MueSAvIDIgKyAyMDApXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG1vbmV5KS5iZXppZXJUbygwLjEsIGNjLnYyKHBvcy54LCBwb3MueSksIG1pZFBvcywgY2MudjIoMCwgMCkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9uZXkuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG1vbmV5LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb25leS5kZXN0cm95KClcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwLjQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyZW5hVXBncmFkZS5nZXRDb21wb25lbnQoXCJhcmVuYVwiKS51cGdyYWRlKDEwKVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb3VudE1vbmV5ID0gZ2xvYmFsVGhpcy5jb3VudE1vbmV5IC0gMTBcclxuXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxsTW9uZXkzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50TW9uZXlCYWcgPiAwKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoYXRHbywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICBsZXQgbW9uZXkgPSB0aGlzLm1vbmV5QmFnLmNoaWxkcmVuW3RoaXMuY291bnRNb25leUJhZyAtIDFdO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50TW9uZXlCYWctLTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IG1vbmV5LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobW9uZXkucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLmFyZW5hVXBncmFkZTMuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgICAgICBtb25leS5wYXJlbnQgPSB0aGlzLmFyZW5hVXBncmFkZTNcclxuICAgICAgICAgICAgbW9uZXkucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Mihwb3MueCAvIDIsIHBvcy55IC8gMiArIDIwMClcclxuICAgICAgICAgICAgY2MudHdlZW4obW9uZXkpLmJlemllclRvKDAuMSwgY2MudjIocG9zLngsIHBvcy55KSwgbWlkUG9zLCBjYy52MigwLCAwKSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb25leS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbW9uZXkuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9uZXkuZGVzdHJveSgpXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMC40KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVuYVVwZ3JhZGUzLmdldENvbXBvbmVudChcImFyZW5hXCIpLnVwZ3JhZGUoMTApXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvdW50TW9uZXkgPSBnbG9iYWxUaGlzLmNvdW50TW9uZXkgLSAxMFxyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGxNb25leTQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRNb25leUJhZyA+IDApIHtcclxuICAgICAgICAgICAgbGV0IG1vbmV5ID0gdGhpcy5tb25leUJhZy5jaGlsZHJlblt0aGlzLmNvdW50TW9uZXlCYWcgLSAxXTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudE1vbmV5QmFnLS07XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBtb25leS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG1vbmV5LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5hcmVuYVVwZ3JhZGU0LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICAgICAgbW9uZXkucGFyZW50ID0gdGhpcy5hcmVuYVVwZ3JhZGU0XHJcbiAgICAgICAgICAgIG1vbmV5LnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIocG9zLnggLyAyLCBwb3MueSAvIDIgKyAyMDApXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG1vbmV5KS5iZXppZXJUbygwLjEsIGNjLnYyKHBvcy54LCBwb3MueSksIG1pZFBvcywgY2MudjIoMCwgMCkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9uZXkuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG1vbmV5LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbmV5LmRlc3Ryb3koKVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDAuNClcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJlbmFVcGdyYWRlNC5nZXRDb21wb25lbnQoXCJhcmVuYVwiKS51cGdyYWRlKDEwKVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb3VudE1vbmV5ID0gZ2xvYmFsVGhpcy5jb3VudE1vbmV5IC0gMTBcclxuXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvZmZTZWxsTW9uZSgpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zZWxsTW9uZXkpXHJcbiAgICB9XHJcbiAgICBvZmZTZWxsTW9uZTModmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zZWxsTW9uZXkzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc2VsbE1vbmV5NClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0U2VsbCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmROaGFuR28sIGZhbHNlLCAxKVxyXG4gICAgICAgIGxldCBjb3VudCA9IGdsb2JhbFRoaXMuY291bnRNb25leVxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmFyZW5hVXBncmFkZS5wb3NpdGlvblxyXG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdzMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zZWxsTW9uZXksIDAuMTIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0U2VsbDModmFsdWUpIHtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTmhhbkdvLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgY291bnQgPSBnbG9iYWxUaGlzLmNvdW50TW9uZXlcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9ICh2YWx1ZSA9PSAzKSA/IHRoaXMuYXJlbmFVcGdyYWRlMy5wb3NpdGlvbiA6IHRoaXMuYXJlbmFVcGdyYWRlNC5wb3NpdGlvblxyXG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdzMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc2VsbE1vbmV5MywgMC4xMilcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc2VsbE1vbmV5NCwgMC4xMilcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc1VwZGF0ZSA9IDFcclxuICAgIHNlbGxUb0N1cygpIHtcclxuXHJcbiAgICB9XHJcbiAgICBpc1NlbGxpbmcgPSBmYWxzZVxyXG4gICAgc2VsbFRvQ3VzMigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1NlbGxpbmcpIHJldHVyblxyXG5cclxuICAgICAgICBpZiAodGhpcy5hcnJvdzIuYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdzIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJvdzMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzU2VsbGluZyA9IHRydWVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZG9TZWxsLCAwLjEyKVxyXG4gICAgfVxyXG4gICAgb2ZmU2VsbCgpIHtcclxuICAgICAgICB0aGlzLmlzU2VsbGluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZG9TZWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnRyYW5zTW9uZXlUb0NoYXIoKVxyXG5cclxuICAgIH1cclxuICAgIC8vYmFuIGRvIGNobyBraGFjaFxyXG4gICAgZG9TZWxsKCkge1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmFyckN1c1swXS5wb3NpdGlvbi5hZGQoY2MudjMoMCwgMTAwKSlcclxuICAgICAgICBwb3MgPSB0aGlzLmxpc3RDdXMuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcylcclxuICAgICAgICBsZXQgYmFnZUNsb25lID0gdGhpcy5jaGFyLmdldENoaWxkQnlOYW1lKFwiYmFnZUNsb25lXCIpXHJcbiAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzWzBdO1xyXG4gICAgICAgIGlmIChjdXMuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLnJlYWxkeVNlbGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY291bnRCYWdlIC0gMSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvdW50V29vZC0tO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUHV0LCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmJhZ2UuY2hpbGRyZW5bdGhpcy5jb3VudEJhZ2UgLSAxXTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSBiYWdlQ2xvbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2hpbGQucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZFBvcyA9IHRoaXMudGFibGVTZWxsLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy50YWJsZVNlbGwucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZFBvcyA9IGJhZ2VDbG9uZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Migoc3RhcnRQb3MueCArIGVuZFBvcy55KSAvIDIsIChzdGFydFBvcy55ICsgZW5kUG9zLnkpIC8gMiArIDgwMClcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZCkuYmV6aWVyVG8oMC4xLCBjYy52MihzdGFydFBvcy54LCBzdGFydFBvcy55KSwgbWlkUG9zLCBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkpKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdEVnZ1RhYmxlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1JlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50QmFnZVRhYmVsID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tSZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc01vbmV5VG9DaGFyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5jb3VudEJhZ2VUYWJlbCA+IDAgJiYpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzVHJhbnNrZSA9IGZhbHNlXHJcbiAgICBjcmVhdEVnZ1RhYmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50QmFnZVRhYmVsID49IDMwKSByZXR1cm5cclxuICAgICAgICB0aGlzLmNvdW50QmFnZVRhYmVsKytcclxuICAgICAgICBsZXQgYmFnID0gdGhpcy50YWJsZVNlbGwuZ2V0Q2hpbGRCeU5hbWUoJ2JhZycpO1xyXG4gICAgICAgIGxldCBhcnJLaGF5UG9zID0gW2NjLnYzKDIwMywgLTMwMCksIGNjLnYzKC05NSwgLTIwKV07XHJcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoKCh0aGlzLmNvdW50QmFnZVRhYmVsKSAvIDIpKVxyXG4gICAgICAgIGxldCBjb2wgPSAodGhpcy5jb3VudEJhZ2VUYWJlbCkgJSAyXHJcbiAgICAgICAgbGV0IGtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXlUcnVuZyk7XHJcbiAgICAgICAga2hheS5wYXJlbnQgPSBiYWc7XHJcbiAgICAgICAga2hheS5zY2FsZSA9IDVcclxuICAgICAgICBraGF5LnBvc2l0aW9uID0gY2MudjMoYXJyS2hheVBvc1tjb2xdLngsIHJvdyAqIDEyMCArIGFycktoYXlQb3NbY29sXS55KVxyXG4gICAgfVxyXG4gICAgYWRkV29vZEZyb21LZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RyYW5za2UpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jb3VudEJhZ2UgPj0gMjApIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc1RyYW5za2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5hZGRUb3BUb1JheSwgMC4xNSlcclxuICAgIH1cclxuICAgIGFkZFRvcFRvUmF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRFZ2drZSA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5rZUdvLmNoaWxkcmVuW3RoaXMuaXNDb3VudEVnZ2tlIC0gMV07XHJcbiAgICAgICAgdGhpcy5pc0NvdW50RWdna2UtLVxyXG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXMuYmFnZTtcclxuICAgICAgICBjaGlsZC5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGNoaWxkLmFuZ2xlID0gMzYwO1xyXG4gICAgICAgIGNoaWxkLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgZ2xvYmFsVGhpcy5jb3VudFdvb2QrK1xyXG4gICAgICAgIC8vIGNoaWxkLnBvc2l0aW9uID0gY2MudjMoLTI5MSwgMjg5ICsgKHRoaXMuaXNDb3VudEVnZ2tlIC0gMSkgKiAxNSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRCYWdlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50QmFnZSA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGQucG9zaXRpb24gPSBjYy52MygwLCA1MCkuYWRkKGNjLnYzKDAsIDQwICogdGhpcy5jb3VudEJhZ2UpKVxyXG4gICAgICAgIHRoaXMuY291bnRCYWdlKytcclxuXHJcbiAgICB9XHJcbiAgICBvZmZXb29kRnJvbUtlKCkge1xyXG4gICAgICAgIHRoaXMuaXNUcmFuc2tlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5hZGRUb3BUb1JheSlcclxuICAgIH1cclxuICAgIC8va2llbSB0cmEgbmd1b2kgZHVuZyBkYW5nIG9yZGVyIGNvIGhvYW4gdGhhbmgga2hvbmdcclxuICAgIGNoZWNrUmVtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50QmFnZVRhYmVsIDw9IDApIHJldHVyblxyXG4gICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1swXVxyXG4gICAgICAgIGN1cy5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNGaWxsICs9IDAuMzVcclxuICAgICAgICB0aGlzLmlzUGxheWVyRWdncyAtPSA0O1xyXG4gICAgICAgIHRoaXMuY291bnRCYWdlIC09IDFcclxuXHJcbiAgICAgICAgbGV0IGZpbGxDb3VudCA9IGN1cy5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNGaWxsXHJcbiAgICAgICAgbGV0IGZpbGwgPSBjdXMuZ2V0Q2hpbGRCeU5hbWUoXCJzdGF0dXNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgY2MudHdlZW4oZmlsbCkudG8oMC4xLCB7IGZpbGxSYW5nZTogZmlsbENvdW50IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICBpZiAoZmlsbENvdW50ID49IDEpIHtcclxuICAgICAgICAgICAgbGV0IGJhZyA9IHRoaXMudGFibGVTZWxsLmdldENoaWxkQnlOYW1lKCdiYWcnKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudEJhZ2VUYWJlbCAtPSAxO1xyXG4gICAgICAgICAgICBpZiAoYmFnLmNoaWxkcmVuW3RoaXMuY291bnRCYWdlVGFiZWxdICYmIGJhZy5jaGlsZHJlblt0aGlzLmNvdW50QmFnZVRhYmVsXS5uYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGJhZy5jaGlsZHJlblt0aGlzLmNvdW50QmFnZVRhYmVsXS5kZXN0cm95KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VzLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5zdWNjZXNzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLnN1Y2Nlc3MgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlzRmlsbCA9IDA7XHJcbiAgICAgICAgICAgICAgICBmaWxsLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2hvYW4gdGhhbmggbmd1b2kgY2hvaVxyXG4gICAgcmVtb3ZlQ2hpbGQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZW1vdmVjaGlsZFwiKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICBjdXMuZ2V0Q2hpbGRCeU5hbWUoXCJzdGF0dXNcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZmeE1vbmV5ID0gY2MuaW5zdGFudGlhdGUodGhpcy52ZnhNb25leSlcclxuICAgICAgICAgICAgdmZ4TW9uZXkucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIHZmeE1vbmV5LnBvc2l0aW9uID0gY3VzLnBvc2l0aW9uLmFkZChjYy52Myg1MCwgNTApKVxyXG4gICAgICAgICAgICB2ZnhNb25leS5zY2FsZSA9IDEuMjtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leSgpXHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuY291bnRNb25leSArPSAxMFxyXG4gICAgICAgICAgICBjdXMucGFyZW50ID0gdGhpcy5jdXNOZXh0O1xyXG4gICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLm1vdmVUb0JhcigpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnNoaWZ0KClcclxuICAgICAgICAgICAgdGhpcy5hZGRDdXMoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJyQ3VzW2ldICE9IGN1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckN1c1tpXS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikubW92ZU5leHQodGhpcy5hcnJQb3NbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2ldLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5yZWFsZHlTZWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMC4yKVxyXG4gICAgICAgIH0sIDAuMilcclxuICAgIH1cclxuICAgIGNvdW50TW9uZXlUYWJsZSA9IDA7XHJcbiAgICBjb3VudE1vbmV5QmFnID0gMDtcclxuICAgIGlzdHJhbnNNb25leSA9IGZhbHNlXHJcbiAgICBjcmVhdGVNb25leSgpIHtcclxuICAgICAgICBsZXQgYXJyTW9uZXlQb3MgPSBbY2MudjMoNzgsIDE3KSwgY2MudjMoMTgsIC0yNSldO1xyXG4gICAgICAgIGxldCBjaGVjayA9IE1hdGguZmxvb3IodGhpcy5jb3VudE1vbmV5VGFibGUgLyAyKTtcclxuICAgICAgICBsZXQgZW5kUG9zMSA9IGFyck1vbmV5UG9zW3RoaXMuY291bnRNb25leVRhYmxlICUgMl07XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKGVuZFBvczEueCwgZW5kUG9zMS55ICsgY2hlY2sgKiAyMClcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52MigtMTI4LjYsIC0xMzUuODc2KTtcclxuICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHN0YXJ0UG9zLnggKyBlbmRQb3MueCkgLyAyLCAoc3RhcnRQb3MueSArIGVuZFBvcy55KSAvIDIgKyAzMDApO1xyXG4gICAgICAgIGxldCBtb25leSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubW9uZXlQcmVmYWIpO1xyXG4gICAgICAgIG1vbmV5LnBhcmVudCA9IHRoaXMubW9uZXlUYWJsZTtcclxuICAgICAgICBjYy50d2Vlbihtb25leSkuYmV6aWVyVG8oMC4zLCBzdGFydFBvcywgbWlkUG9zLCBlbmRQb3MpLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmNvdW50TW9uZXlUYWJsZSsrO1xyXG4gICAgfVxyXG4gICAgdHJhbnNNb25leVRvQ2hhcigpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5pc3RyYW5zTW9uZXkpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jb3VudE1vbmV5VGFibGUgPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXN0cmFuc01vbmV5ID0gdHJ1ZVxyXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuY291bnRNb25leVRhYmxlIC0gMVxyXG4gICAgICAgIGZvciAobGV0IGkgPSBjb3VudDsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hhdEdvLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgbGV0IG1vbmV5ID0gdGhpcy5tb25leVRhYmxlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gbW9uZXkucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihtb25leS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMubW9uZXlCYWcuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgbW9uZXkucGFyZW50ID0gdGhpcy5tb25leUJhZztcclxuICAgICAgICAgICAgbW9uZXkuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgICAgICAvLyBtb25leS5wb3NpdGlvbiA9IHBvcztcclxuICAgICAgICAgICAgLy8gbW9uZXkucG9zaXRpb24gPSBjYy52MygwLCB0aGlzLmNvdW50TW9uZXlCYWcgKiAyMClcclxuICAgICAgICAgICAgbW9uZXkucG9zaXRpb24gPSBwb3NcclxuICAgICAgICAgICAgbGV0IHBvc0VuZCA9IGNjLnYyKDAsIHRoaXMuY291bnRNb25leUJhZyAqIDIwKVxyXG4gICAgICAgICAgICBsZXQgcG9zU3RhcnQgPSBjYy52Mihwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgICAgICBsZXQgcG9zTWlkID0gY2MudjIoKHBvc0VuZC54ICsgcG9zLngpIC8gMiwgKHBvc0VuZC55ICsgcG9zLnkpIC8gMiArIDIwMClcclxuICAgICAgICAgICAgY2MudHdlZW4obW9uZXkpLmJlemllclRvKDAuMSwgcG9zU3RhcnQsIHBvc01pZCwgcG9zRW5kKS5zdGFydCgpXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb3VudE1vbmV5QmFnKytcclxuICAgICAgICAgICAgdGhpcy5jb3VudE1vbmV5VGFibGUtLVxyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzdHJhbnNNb25leSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy90aGVtIGtoYWNoIGhhbmcgbW9pXHJcbiAgICBhZGRDdXMoKSB7XHJcbiAgICAgICAgbGV0IHJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5saXN0Q3VzUHJlLmxlbmd0aClcclxuICAgICAgICBsZXQgY3VzID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0Q3VzUHJlW3JkXSlcclxuICAgICAgICBjdXMucGFyZW50ID0gdGhpcy5saXN0Q3VzXHJcblxyXG4gICAgICAgIGN1cy5wb3NpdGlvbiA9IGNjLnYzKDgyOSwgLTg3OSlcclxuICAgICAgICBjdXMuc2NhbGUgPSAxLjJcclxuICAgICAgICB0aGlzLmFyckN1cy5wdXNoKGN1cylcclxuICAgIH1cclxuICAgIGdldFVwZ3JhZGUoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0QXJyb3cuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBsZXQgZGVtID0gdGhpcy5rZVRpZW4uY2hpbGRyZW5Db3VudCAtIDFcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5hcmVuYVVwZ3JhZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmFyZW5hVXBncmFkZS5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zID0gdGhpcy5rZVRpZW4uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gZGVtOyBpID49IDA7IGktLSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5rZVRpZW4uY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52MigocG9zLnggKyBjaGlsZC54KSAvIDIsIHBvcy55ICsgMjAwKVxyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpLmRlbGF5KDAuMDUgKiBpKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFB1dCwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvdW50TW9uZXktLVxyXG4gICAgICAgICAgICB9KS5iZXppZXJUbygwLjMsIGNjLnYyKGNoaWxkLngsIGNoaWxkLnkpLCBtaWRQb3MsIGNjLnYyKHBvcy54LCBwb3MueSkpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGdyYWRlRWZmKClcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmaWxsVWQgPSAwXHJcbiAgICB1cGdyYWRlRWZmKCkge1xyXG4gICAgICAgIGxldCBmaWxsID0gdGhpcy5hcmVuYVVwZ3JhZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpO1xyXG4gICAgICAgIGxldCBmaWxsUmFuZ2UgPSBmaWxsLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuZmlsbFVkICs9IDAuMDVcclxuICAgICAgICBjYy50d2VlbihmaWxsUmFuZ2UpLnRvKDAuMSwgeyBmaWxsUmFuZ2U6IHRoaXMuZmlsbFVkIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmlsbFJhbmdlLmZpbGxSYW5nZSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxsUmFuZ2UuZmlsbFJhbmdlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSGVybygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxVZCA9IDBcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICB9XHJcbiAgICBpc3VkID0gMFxyXG4gICAgdXBkYXRlSGVybygpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5jaGFyLmdldENoaWxkQnlOYW1lKFwidGV4dFVkXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc3VkID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5hbmltLnNldFNraW4oXCJTa2luXzFcIilcclxuICAgICAgICAgICAgdGhpcy5jaGFyLmdldENoaWxkQnlOYW1lKFwidmZ4X3VkXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzdWQgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmFuaW0uc2V0U2tpbihcIlNraW5fMlwiKVxyXG4gICAgICAgICAgICB0aGlzLmNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhfdWRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXN1ZCsrXHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0VuZENhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuSm95c3RpY2suYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLkpveXN0aWNrLmdldENvbXBvbmVudChcIkpveVN0aWNrXCIpLnRvdWNoRW5kRXZlbnQoKVxyXG4gICAgfVxyXG4gICAgc3Bhd01vbmV5KGN1cykge1xyXG4gICAgICAgIHRoaXMuYXJlbmFNb25leS5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBsZXQgcG9zID0gY3VzLnBvc2l0aW9uLmFkZChjYy52MygwLCAxMDApKTtcclxuICAgICAgICBwb3MgPSBjdXMucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpO1xyXG4gICAgICAgIHBvcyA9IHRoaXMua2VUaWVuLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtb25leSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubW9uZXlQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbW9uZXkucGFyZW50ID0gdGhpcy5rZVRpZW47XHJcbiAgICAgICAgICAgICAgICBtb25leS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obW9uZXkpLnRvKDAuMiwgeyBwb3NpdGlvbjogdGhpcy5saXN0TW9uZXlQb3NbaV0gfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb3VudE1vbmV5KytcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxpc3RBcnJvdy5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxpc3RBcnJvdy5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcmVuYU1vbmV5LmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgaSAqIDAuMDUpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBpc3ZlcnRpY2FsID0gZmFsc2VcclxuXHJcblxyXG4gICAgcmVwb25zaXZlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9ICh2YWx1ZSkgPyAxLjIgOiAyXHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKHZhbHVlKSA/IDAuNCA6IDAuNlxyXG4gICAgICAgIHRoaXMubG9nby5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAodmFsdWUpID8gMTU3IDogMTgwXHJcbiAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAodmFsdWUpID8gMjAwIDogLTYwMFxyXG4gICAgICAgIHRoaXMuYmFyQ3VycmVudC5zY2FsZSA9ICh2YWx1ZSkgPyAxIDogMS44XHJcblxyXG4gICAgICAgIHRoaXMuYmFyQ3VycmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAodmFsdWUpID8gMTQ5IDogMjUwXHJcbiAgICAgICAgdGhpcy5iYXJDdXJyZW50LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gKHZhbHVlKSA/IDEzNyA6IDEzNyAtIDY1MFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9ICh2YWx1ZSkgPyAxIDogMS41XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0RHJhdykge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXduQXJyb3codGhpcy5jaGFyLCB0aGlzLmlzVGFyZ2V0RHJhdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnRUdXQgJiYgZ2xvYmFsVGhpcy5jb3VudFdvb2QgPT0gMTApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnRUdXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFycm93Mi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYk1vbmV5LnN0cmluZyA9IGdsb2JhbFRoaXMuY291bnRNb25leS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubGJXb29kLnN0cmluZyA9IGdsb2JhbFRoaXMuY291bnRXb29kLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUuc2V0UG9zaXRpb24odGhpcy5jaGFyLnBvc2l0aW9uLmFkZChjYy52MygxMDAsIDApKSk7XHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZXZpY2VSZXNvbHV0aW9uLndpZHRoL2RldmljZVJlc29sdXRpb24uaGVpZ2h0KVxyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc3ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSlcclxuICAgICAgICAgICAgbGV0IGNoZWNrSXBhZCA9IGRldmljZVJlc29sdXRpb24ud2lkdGggLyBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodFxyXG5cclxuICAgICAgICAgICAgaWYgKGNoZWNrSXBhZCA8IDEuMzUgJiYgY2hlY2tJcGFkID4gMS4zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IC00MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYXduQXJyb3coc291cmNlLCB0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIXNvdXJjZSB8fCAhdGFyZ2V0IHx8ICF0aGlzLmFycm93UHJlZmFiIHx8IHRoaXMuY291bnRPcGVuID09IDQgfHwgdGFyZ2V0Lm5hbWUgPT0gXCJcIikgcmV0dXJuO1xyXG4gICAgICAgIC8vIFThu41hIMSR4buZIHRvw6BuIGPhu6VjXHJcbiAgICAgICAgY29uc3Qgc3RhcnRXb3JsZCA9IHNvdXJjZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIGNvbnN0IGVuZFdvcmxkID0gdGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcblxyXG4gICAgICAgIC8vIMSQ4buVaSB24buBIHThu41hIMSR4buZIGxvY2FsIGPhu6dhIGNoYSAobsOqbiDEkeG6t3Qgc2NyaXB0IHRyw6puIG5vZGUgY2h1bmcgY+G7p2Egc291cmNlIHbDoCB0YXJnZXQpXHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5hcnJvd05vZGU7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRMb2NhbCA9IHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydFdvcmxkKTtcclxuICAgICAgICBjb25zdCBlbmRMb2NhbCA9IHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRXb3JsZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpciA9IGVuZExvY2FsLnN1YihzdGFydExvY2FsKTtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGRpci5tYWcoKTtcclxuICAgICAgICBjb25zdCBhbmdsZSA9IGNjLnYyKDEsIDApLnNpZ25BbmdsZShkaXIpICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICBjb25zdCBjb3VudCA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyB0aGlzLmFycm93U3BhY2luZyk7XHJcbiAgICAgICAgLy8gY29uc3QgY291bnQgPSAxXHJcbiAgICAgICAgLy8gxJBp4buBdSBjaOG7iW5oIHPhu5EgbMaw4bujbmcgbcWpaSB0w6puXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXJyb3dzLmxlbmd0aCA8IGNvdW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gY2MuaW5zdGFudGlhdGUodGhpcy5hcnJvd1ByZWZhYik7XHJcbiAgICAgICAgICAgIGFycm93LnpJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHBhcmVudC5hZGRDaGlsZChhcnJvdyk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3dzLnB1c2goYXJyb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXJyb3dzLmxlbmd0aCA+IGNvdW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhID0gdGhpcy5hcnJvd3MucG9wKCk7XHJcbiAgICAgICAgICAgIGV4dHJhLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIMSQ4bq3dCB24buLIHRyw60gdOG7q25nIG3FqWkgdMOqblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IChpICsgMSkgKiB0aGlzLmFycm93U3BhY2luZyAvIGRpc3RhbmNlO1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBlbmRMb2NhbC5sZXJwKHN0YXJ0TG9jYWwsIHJhdGlvKTtcclxuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSB0aGlzLmFycm93c1tpXTtcclxuICAgICAgICAgICAgYXJyb3cuc2V0UG9zaXRpb24ocG9zLmFkZChjYy52MygwLCAwKSkpO1xyXG4gICAgICAgICAgICBhcnJvdy5zY2FsZSA9IC0xLjVcclxuICAgICAgICAgICAgYXJyb3cuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaXNUYXJnZXREcmF3ID0gbnVsbDtcclxufVxyXG4iXX0=