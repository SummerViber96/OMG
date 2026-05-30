
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0lDWV8xOS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtBQUN4QixVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtBQUN6QixVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUNmLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBSTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaXhCQztRQTl3QkcsZ0JBQVUsR0FBYyxJQUFJLENBQUE7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFnQixFQUFFLENBQUM7UUFFN0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQUcsOEJBQThCLENBQUE7UUFFekMsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGFBQU8sR0FBaUIs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QUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUE5RlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWl4QjVCO0lBQUQsZUFBQztDQWp4QkQsQUFpeEJDLENBanhCcUMsRUFBRSxDQUFDLFNBQVMsR0FpeEJqRDtrQkFqeEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZ2xvYmFsVGhpcy5jb3VudFdvb2QgPSAwXG5nbG9iYWxUaGlzLmNvdW50TW9uZXkgPSAwXG5nbG9iYWxUaGlzLnVwZGF0ZSA9IDFcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBsaXN0Q3VzUHJlOiBjYy5QcmVmYWJbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgd29vZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIG1vbmV5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlVHJlZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0dHJlZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhcjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiYWdlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhcmVuYVNlbGw6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFyZW5hTW9uZXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFyZW5hVXBncmFkZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJlbmFVcGdyYWRlMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJlbmFVcGdyYWRlMzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJlbmFVcGdyYWRlNDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVUZXh0OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RBcnJvdzogY2MuTm9kZSA9IG51bGw7XG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBrZVRpZW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kUHV0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRVZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ2hhdEdvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmROaGFuR286IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTW9uZXk6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJXb29kOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmFyQ3VycmVudDogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIEpveXN0aWNrOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGN1c05leHQ6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB2ZnhNb25leTogY2MuUHJlZmFiID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlRWdnOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlS2hheVRydW5nOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGtlR286IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RDdXNTdWI6IGNjLk5vZGVbXSA9IFtdXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJyb3cyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhcnJvdzM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RUcnVuZzogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YWJsZVNlbGw6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1vbmV5QmFnOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtb25leVRhYmxlOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZhcm0zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmYXJtNDogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGFycm93UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFycm93Tm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgaXNGaXJ0VHV0ID0gZmFsc2U7XG4gICAgaXNEZWxheVNPdW5kID0gZmFsc2VcbiAgICBjaGFyQ29tcCA9IG51bGw7XG4gICAgbGlzdEN1c1BvcyA9IFtjYy52MygtMzUuNzYsIC0zNzAuMTEsIDAuMDApLCBjYy52MygzMy45NCwgLTQwMi45MSwgMC4wMCksIGNjLnYzKDExMC4xMywgLTQ0NS4wNSwgMC4wMCksIGNjLnYzKDE4OS43NywgLTQ4OC45NywgMC4wMCksIGNjLnYzKDI2Ny4wNSwgLTUzNC43OSwgMC4wMCksIGNjLnYzKDM2Ni4xMCwgLTU5MC41MywgMC4wMCksXVxuICAgIGlzUGxheWVyRWdncyA9IDBcbiAgICBhcnJDdXMgPSBbXTtcbiAgICBhcnJQb3MgPSBbXTtcbiAgICBhcnJQb3NLZSA9IFtdO1xuICAgIGNvdW50QmFnZSA9IDA7IC8vIHNvIGtoYXkgdHJlbiBuZ3VvaVxuICAgIGNvdW50QmFnZVRhYmVsID0gMDsvLyBzbyBraGF5IHRyZW4gYmFuXG4gICAgLy8gbGlzdEN1c1BvcyA9IFtjYy52MygtMjY0LjU0LCAtMzY4LjM1LCAwLjAwKSwgY2MudjMoLTM0Ni44MCwgLTQxMy41MiwgMC4wMCksIGNjLnYzKC00NTEuOTcsIC00NzMuMTYsIDAuMDApLCBjYy52MygtNTQwLjk2LCAtNTIzLjAwLCAwLjAwKSwgY2MudjMoLTYzMi42MiwgLTU3Ni43MiwgMC4wMCksIGNjLnYzKC03MzMuNTQsIC02MzEuMTgsIDAuMDApXVxuICAgIGxpc3RNb25leVBvcyA9IFtjYy52MygtNS4wMywgNzcuNjIsIDAuMDApLCBjYy52MygzMi4zOSwgNTcuNTIsIDAuMDApLCBjYy52Myg3MS40OCwgMzYuMzAsIDAuMDApLCBjYy52MygxMTAuNTYsIDE1LjYzLCAwLjAwKSwgY2MudjMoLTU3LjUyLCA0OC41OCwgMC4wMCksIGNjLnYzKC0yMC4xMCwgMjguNDgsIDAuMDApLCBjYy52MygxOC45OSwgNy4yNiwgMC4wMCksIGNjLnYzKDU4LjA3LCAtMTMuNDAsIDAuMDApLFxuICAgIGNjLnYzKC0xMTAuMDEsIDE4Ljk4LCAwLjAwKSxcbiAgICBjYy52MygtNzIuNTksIC0xLjEyLCAwLjAwKSxcbiAgICBjYy52MygtMzMuNTAsIC0yMi4zNCwgMC4wMCksXG4gICAgY2MudjMoNS41OCwgLTQzLjAwLCAwLjAwKSxdXG4gICAgYXJyb3dTcGFjaW5nOiBudW1iZXIgPSA1MDtcbiAgICBjb3VudE9wZW4gPSAwO1xuXG4gICAgYXJyb3dzOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAxKVxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFyQ29tcCA9IHRoaXMuY2hhci5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIilcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDdXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlbltpXSlcbiAgICAgICAgICAgIHRoaXMuYXJyUG9zLnB1c2godGhpcy5saXN0Q3VzLmNoaWxkcmVuW2ldLnBvc2l0aW9uKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdEN1cy5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikucmVhbGR5U2VsbCA9IHRydWVcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMua2VHby5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuYXJyUG9zS2UucHVzaCh0aGlzLmtlR28uY2hpbGRyZW5baV0ucG9zaXRpb24pXG4gICAgICAgICAgICB0aGlzLmtlR28uY2hpbGRyZW5baV0uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3JlYXRlRWdncygpXG4gICAgICAgIHRoaXMuaXNUYXJnZXREcmF3ID0gdGhpcy5saXN0QXJyb3cuY2hpbGRyZW5bMl1cbiAgICB9XG4gICAgb25FbmRHYW1lKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuSm95c3RpY2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLkpveXN0aWNrLmdldENvbXBvbmVudChcIkpveVN0aWNrXCIpLnRvdWNoRW5kRXZlbnQoKTtcbiAgICAgICAgfSwgMSlcblxuXG4gICAgfVxuICAgIHVwZ3JhZGVBcmVuYSh2YWx1ZSkge1xuXG4gICAgfVxuXG4gICAgLy90YW8gdHJ1bmdcbiAgICBjcmVhdGVFZ2dzKCkge1xuICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52MygtODgyLCA1MTQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTI7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCByZEFOZ2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKVxuICAgICAgICAgICAgICAgIGxldCBlZ2cgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUVnZylcbiAgICAgICAgICAgICAgICBlZ2cucGFyZW50ID0gdGhpcy5saXN0VHJ1bmdcbiAgICAgICAgICAgICAgICBlZ2cuYW5nbGUgPSByZEFOZ2xlO1xuICAgICAgICAgICAgICAgIGVnZy5wb3NpdGlvbiA9IHN0YXJ0UG9zLmFkZChjYy52MygoLTQzKSAqIGogKyA0MCAqIGksICgtMjMpICogaiAtIDIwICogaSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9uaGFuIHRydW5nXG4gICAgaXNDb3VudCA9IDAvLyBkZW0gbmV1IGJhbmcgNCB0aGkgc2UgdGFvIGtoYXkgdHJ1bmdcbiAgICBjb2xsZWN0RWdncyhlZ2cpIHtcbiAgICAgICAgdGhpcy5saXN0QXJyb3cuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgaWYgKGVnZyAmJiBlZ2cucGFyZW50KSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gZWdnLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZWdnLnBvc2l0aW9uKS5hZGQoY2MudjMoMCwgMTAwKSk7XG4gICAgICAgICAgICBlZ2cuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5pc1BsYXllckVnZ3M7XG4gICAgICAgICAgICBnbG9iYWxUaGlzLmNvdW50V29vZCsrXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWxheVNPdW5kID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEZWxheVNPdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGF0R28sIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRGVsYXlTT3VuZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHdvb2QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndvb2RQcmVmYWIpO1xuICAgICAgICAgICAgICAgIHdvb2QucGFyZW50ID0gdGhpcy5iYWdlO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IHRoaXMuYmFnZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuICAgICAgICAgICAgICAgIGxldCBlbmRQb3MgPSBjYy52MygwLCAwKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHN0YXJ0UG9zLnggKyBlbmRQb3MueCkgLyAyLCBzdGFydFBvcy55ICsgMTAwKVxuICAgICAgICAgICAgICAgIHdvb2QucG9zaXRpb24gPSBzdGFydFBvc1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLmJlemllclRvKDAuMywgY2MudjIoc3RhcnRQb3MueCwgc3RhcnRQb3MueSksIG1pZFBvcywgY2MudjIoZW5kUG9zLngsIGVuZFBvcy55KSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLnRvKDAuMywgeyBhbmdsZTogMzYwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3b29kLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgIH0sKS5zdGFydCgpXG4gICAgICAgICAgICB9LCAwLjA1KVxuICAgICAgICAgICAgbGV0IGZ4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVUZXh0KVxuICAgICAgICAgICAgZngucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgICAgICBmeC5wb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgICAgICAgICB0aGlzLmFkZEVnZyhlZ2cucG9zaXRpb24pXG4gICAgICAgICAgICBlZ2cuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXllckVnZ3MrK1xuICAgICAgICAgICAgdGhpcy5pc0NvdW50KytcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnQgPT0gNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlS2hheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb3VudCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdGFvIHRydW5nXG4gICAgYWRkRWdnKHBvcykge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0VHJ1bmcuY2hpbGRyZW5Db3VudCA8PSAoMjAgKiAxMikpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWdnID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVFZ2cpO1xuICAgICAgICAgICAgICAgIGVnZy5wYXJlbnQgPSB0aGlzLmxpc3RUcnVuZztcbiAgICAgICAgICAgICAgICBlZ2cucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgMilcblxuICAgIH1cbiAgICAvL3RhbyBraGF5LCAxIGtoYXkgPSA0IHRydW5nXG4gICAgY3JlYXRlS2hheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnRCYWdlID49IDIwKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmNvdW50QmFnZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRCYWdlID0gMFxuICAgICAgICB9XG4gICAgICAgIGxldCBraGF5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVLaGF5VHJ1bmcpO1xuICAgICAgICBraGF5LnBhcmVudCA9IHRoaXMuYmFnZTtcbiAgICAgICAga2hheS5wb3NpdGlvbiA9IGNjLnYzKDAsIDUwKS5hZGQoY2MudjMoMCwgNDAgKiB0aGlzLmNvdW50QmFnZSkpXG4gICAgICAgIHRoaXMuY291bnRCYWdlKytcbiAgICB9XG4gICAgaXNDb3VudFN1YiA9IDBcbiAgICBpc0NvdW50RWdna2UgPSAwXG4gICAgY29sbGVjdEVnZ3NTdWIoZWdnKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmtlR28uY2hpbGRyZW5Db3VudCA+PSA2MCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmxpc3RBcnJvdy5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBpZiAoZWdnICYmIGVnZy5wYXJlbnQpIHtcbiAgICAgICAgICAgIGxldCBwb3MgPSBlZ2cucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihlZ2cucG9zaXRpb24pLmFkZChjYy52MygwLCAxMDApKTtcbiAgICAgICAgICAgIGVnZy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMuaXNDb3VudEVnZ2tlO1xuXG4gICAgICAgICAgICBsZXQgY2hlY2sgPSBNYXRoLmZsb29yKGNvdW50IC8gOSlcbiAgICAgICAgICAgIGxldCBjaGVja1JvdyA9IGNvdW50ICUgOVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWxheVNPdW5kID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RlbGF5U091bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hhdEdvLCBmYWxzZSwgMC41KVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RlbGF5U091bmQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0sIDAuMilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNDb3VudFN1YisrXG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdWIgPT0gNCAmJiB0aGlzLmlzQ291bnRFZ2drZSA8PSA2MCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb3VudFN1YiA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50RWdna2UrKztcbiAgICAgICAgICAgICAgICBsZXQgd29vZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheVRydW5nKTtcbiAgICAgICAgICAgICAgICB3b29kLnBhcmVudCA9IHRoaXMua2VHbztcbiAgICAgICAgICAgICAgICB3b29kLnNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zID0gdGhpcy5hcnJQb3NLZVtjaGVja1Jvd10uYWRkKGNjLnYzKDAsIGNoZWNrICogMjApKTtcbiAgICAgICAgICAgICAgICB3b29kLnBvc2l0aW9uID0gZW5kUG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3VudFN1YiA9PSA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50U3ViID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZ4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVUZXh0KVxuICAgICAgICAgICAgZngucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgICAgICBmeC5wb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgICAgICAgICB0aGlzLmFkZEVnZyhlZ2cucG9zaXRpb24pXG4gICAgICAgICAgICBlZ2cuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlT3BlbjEoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSlcbiAgICAgICAgZ2xvYmFsVGhpcy51cGRhdGUgPSAyXG4gICAgICAgIHRoaXMubGlzdEN1c1N1YlswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RDdXNTdWJbMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saXN0Q3VzU3ViWzJdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGlzdEN1c1N1YlszXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RDdXNTdWJbNF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5hcmVuYVVwZ3JhZGUpLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpXG4gICAgICAgIC8vIHRoaXMuYXJlbmFVcGdyYWRlMi5hY3RpdmUgPSB0cnVlXG4gICAgICAgIHRoaXMuYXJlbmFVcGdyYWRlID0gdGhpcy5hcmVuYVVwZ3JhZGUyXG4gICAgICAgIHRoaXMubGlzdEFycm93LmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5hcnJvd05vZGUuYWN0aXZlPXRydWU7XG4gICAgICAgIHRoaXMuaXNUYXJnZXREcmF3PXRoaXMubGlzdEFycm93LmNoaWxkcmVuWzVdXG5cbiAgICB9XG4gICAgdXBkYXRlT3BlbjIoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSlcbiAgICAgICAgdGhpcy5saXN0Q3VzU3ViWzNdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGlzdEN1c1N1Yls0XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFyZW5hVXBncmFkZTIuYWN0aXZlID0gZmFsc2U7XG5cbiAgICB9XG4gICAgc2VsbE1vbmV5KCkge1xuICAgICAgICBpZiAodGhpcy5jb3VudE1vbmV5QmFnID4gMCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hhdEdvLCBmYWxzZSwgMSlcbiAgICAgICAgICAgIGxldCBtb25leSA9IHRoaXMubW9uZXlCYWcuY2hpbGRyZW5bdGhpcy5jb3VudE1vbmV5QmFnIC0gMV07XG4gICAgICAgICAgICB0aGlzLmNvdW50TW9uZXlCYWctLTtcbiAgICAgICAgICAgIGxldCBwb3MgPSBtb25leS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG1vbmV5LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuYXJlbmFVcGdyYWRlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgICAgIG1vbmV5LnBhcmVudCA9IHRoaXMuYXJlbmFVcGdyYWRlXG4gICAgICAgICAgICBtb25leS5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Mihwb3MueCAvIDIsIHBvcy55IC8gMiArIDIwMClcbiAgICAgICAgICAgIGNjLnR3ZWVuKG1vbmV5KS5iZXppZXJUbygwLjEsIGNjLnYyKHBvcy54LCBwb3MueSksIG1pZFBvcywgY2MudjIoMCwgMCkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vbmV5LmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbW9uZXkuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vbmV5LmRlc3Ryb3koKVxuXG4gICAgICAgICAgICAgICAgfSwgMC40KVxuICAgICAgICAgICAgICAgIHRoaXMuYXJlbmFVcGdyYWRlLmdldENvbXBvbmVudChcImFyZW5hXCIpLnVwZ3JhZGUoMTApXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb3VudE1vbmV5ID0gZ2xvYmFsVGhpcy5jb3VudE1vbmV5IC0gMTBcblxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGxNb25leTMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50TW9uZXlCYWcgPiAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGF0R28sIGZhbHNlLCAxKVxuXG4gICAgICAgICAgICBsZXQgbW9uZXkgPSB0aGlzLm1vbmV5QmFnLmNoaWxkcmVuW3RoaXMuY291bnRNb25leUJhZyAtIDFdO1xuICAgICAgICAgICAgdGhpcy5jb3VudE1vbmV5QmFnLS07XG4gICAgICAgICAgICBsZXQgcG9zID0gbW9uZXkucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihtb25leS5wb3NpdGlvbik7XG4gICAgICAgICAgICBwb3MgPSB0aGlzLmFyZW5hVXBncmFkZTMuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICAgICAgbW9uZXkucGFyZW50ID0gdGhpcy5hcmVuYVVwZ3JhZGUzXG4gICAgICAgICAgICBtb25leS5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Mihwb3MueCAvIDIsIHBvcy55IC8gMiArIDIwMClcbiAgICAgICAgICAgIGNjLnR3ZWVuKG1vbmV5KS5iZXppZXJUbygwLjEsIGNjLnYyKHBvcy54LCBwb3MueSksIG1pZFBvcywgY2MudjIoMCwgMCkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vbmV5LmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbW9uZXkuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb25leS5kZXN0cm95KClcblxuICAgICAgICAgICAgICAgIH0sIDAuNClcbiAgICAgICAgICAgICAgICB0aGlzLmFyZW5hVXBncmFkZTMuZ2V0Q29tcG9uZW50KFwiYXJlbmFcIikudXBncmFkZSgxMClcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvdW50TW9uZXkgPSBnbG9iYWxUaGlzLmNvdW50TW9uZXkgLSAxMFxuXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsbE1vbmV5NCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnRNb25leUJhZyA+IDApIHtcbiAgICAgICAgICAgIGxldCBtb25leSA9IHRoaXMubW9uZXlCYWcuY2hpbGRyZW5bdGhpcy5jb3VudE1vbmV5QmFnIC0gMV07XG4gICAgICAgICAgICB0aGlzLmNvdW50TW9uZXlCYWctLTtcbiAgICAgICAgICAgIGxldCBwb3MgPSBtb25leS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG1vbmV5LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuYXJlbmFVcGdyYWRlNC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgICAgICAgICBtb25leS5wYXJlbnQgPSB0aGlzLmFyZW5hVXBncmFkZTRcbiAgICAgICAgICAgIG1vbmV5LnBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKHBvcy54IC8gMiwgcG9zLnkgLyAyICsgMjAwKVxuICAgICAgICAgICAgY2MudHdlZW4obW9uZXkpLmJlemllclRvKDAuMSwgY2MudjIocG9zLngsIHBvcy55KSwgbWlkUG9zLCBjYy52MigwLCAwKSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9uZXkuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBtb25leS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vbmV5LmRlc3Ryb3koKVxuXG4gICAgICAgICAgICAgICAgfSwgMC40KVxuICAgICAgICAgICAgICAgIHRoaXMuYXJlbmFVcGdyYWRlNC5nZXRDb21wb25lbnQoXCJhcmVuYVwiKS51cGdyYWRlKDEwKVxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuY291bnRNb25leSA9IGdsb2JhbFRoaXMuY291bnRNb25leSAtIDEwXG5cbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBvZmZTZWxsTW9uZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc2VsbE1vbmV5KVxuICAgIH1cbiAgICBvZmZTZWxsTW9uZTModmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNlbGxNb25leTMpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zZWxsTW9uZXk0KVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0U2VsbCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTmhhbkdvLCBmYWxzZSwgMSlcbiAgICAgICAgbGV0IGNvdW50ID0gZ2xvYmFsVGhpcy5jb3VudE1vbmV5XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmFyZW5hVXBncmFkZS5wb3NpdGlvblxuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFycm93My5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zZWxsTW9uZXksIDAuMTIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0U2VsbDModmFsdWUpIHtcblxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmROaGFuR28sIGZhbHNlLCAxKVxuICAgICAgICBsZXQgY291bnQgPSBnbG9iYWxUaGlzLmNvdW50TW9uZXlcblxuICAgICAgICBsZXQgcG9zID0gKHZhbHVlID09IDMpID8gdGhpcy5hcmVuYVVwZ3JhZGUzLnBvc2l0aW9uIDogdGhpcy5hcmVuYVVwZ3JhZGU0LnBvc2l0aW9uXG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXJyb3czLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc2VsbE1vbmV5MywgMC4xMilcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNlbGxNb25leTQsIDAuMTIpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpc1VwZGF0ZSA9IDFcbiAgICBzZWxsVG9DdXMoKSB7XG5cbiAgICB9XG4gICAgaXNTZWxsaW5nID0gZmFsc2VcbiAgICBzZWxsVG9DdXMyKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlbGxpbmcpIHJldHVyblxuXG4gICAgICAgIGlmICh0aGlzLmFycm93Mi5hY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5hcnJvdzIuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93My5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTZWxsaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZG9TZWxsLCAwLjEyKVxuICAgIH1cbiAgICBvZmZTZWxsKCkge1xuICAgICAgICB0aGlzLmlzU2VsbGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRvU2VsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudHJhbnNNb25leVRvQ2hhcigpXG5cbiAgICB9XG4gICAgLy9iYW4gZG8gY2hvIGtoYWNoXG4gICAgZG9TZWxsKCkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5hcnJDdXNbMF0ucG9zaXRpb24uYWRkKGNjLnYzKDAsIDEwMCkpXG4gICAgICAgIHBvcyA9IHRoaXMubGlzdEN1cy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKVxuICAgICAgICBsZXQgYmFnZUNsb25lID0gdGhpcy5jaGFyLmdldENoaWxkQnlOYW1lKFwiYmFnZUNsb25lXCIpXG4gICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1swXTtcbiAgICAgICAgaWYgKGN1cy5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikucmVhbGR5U2VsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY291bnRCYWdlIC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb3VudFdvb2QtLTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRQdXQsIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmJhZ2UuY2hpbGRyZW5bdGhpcy5jb3VudEJhZ2UgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IGJhZ2VDbG9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2hpbGQucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLnRhYmxlU2VsbC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudGFibGVTZWxsLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgZW5kUG9zID0gYmFnZUNsb25lLmNvbnZlcnRUb05vZGVTcGFjZUFSKGVuZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Migoc3RhcnRQb3MueCArIGVuZFBvcy55KSAvIDIsIChzdGFydFBvcy55ICsgZW5kUG9zLnkpIC8gMiArIDgwMClcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpLmJlemllclRvKDAuMSwgY2MudjIoc3RhcnRQb3MueCwgc3RhcnRQb3MueSksIG1pZFBvcywgY2MudjIoZW5kUG9zLngsIGVuZFBvcy55KSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0RWdnVGFibGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1JlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50QmFnZVRhYmVsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUmVtb3ZlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc01vbmV5VG9DaGFyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmNvdW50QmFnZVRhYmVsID4gMCAmJikge1xuXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGlzVHJhbnNrZSA9IGZhbHNlXG4gICAgY3JlYXRFZ2dUYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnRCYWdlVGFiZWwgPj0gMzApIHJldHVyblxuICAgICAgICB0aGlzLmNvdW50QmFnZVRhYmVsKytcbiAgICAgICAgbGV0IGJhZyA9IHRoaXMudGFibGVTZWxsLmdldENoaWxkQnlOYW1lKCdiYWcnKTtcbiAgICAgICAgbGV0IGFycktoYXlQb3MgPSBbY2MudjMoMjAzLCAtMzAwKSwgY2MudjMoLTk1LCAtMjApXTtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoKCh0aGlzLmNvdW50QmFnZVRhYmVsKSAvIDIpKVxuICAgICAgICBsZXQgY29sID0gKHRoaXMuY291bnRCYWdlVGFiZWwpICUgMlxuICAgICAgICBsZXQga2hheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheVRydW5nKTtcbiAgICAgICAga2hheS5wYXJlbnQgPSBiYWc7XG4gICAgICAgIGtoYXkuc2NhbGUgPSA1XG4gICAgICAgIGtoYXkucG9zaXRpb24gPSBjYy52MyhhcnJLaGF5UG9zW2NvbF0ueCwgcm93ICogMTIwICsgYXJyS2hheVBvc1tjb2xdLnkpXG4gICAgfVxuICAgIGFkZFdvb2RGcm9tS2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVHJhbnNrZSkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5jb3VudEJhZ2UgPj0gMjApIHJldHVybjtcblxuICAgICAgICB0aGlzLmlzVHJhbnNrZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5hZGRUb3BUb1JheSwgMC4xNSlcbiAgICB9XG4gICAgYWRkVG9wVG9SYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRFZ2drZSA8PSAwKSByZXR1cm47XG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMua2VHby5jaGlsZHJlblt0aGlzLmlzQ291bnRFZ2drZSAtIDFdO1xuICAgICAgICB0aGlzLmlzQ291bnRFZ2drZS0tXG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXMuYmFnZTtcbiAgICAgICAgY2hpbGQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgY2hpbGQuYW5nbGUgPSAzNjA7XG4gICAgICAgIGNoaWxkLnNjYWxlWCA9IDE7XG4gICAgICAgIGdsb2JhbFRoaXMuY291bnRXb29kKytcbiAgICAgICAgLy8gY2hpbGQucG9zaXRpb24gPSBjYy52MygtMjkxLCAyODkgKyAodGhpcy5pc0NvdW50RWdna2UgLSAxKSAqIDE1KTtcbiAgICAgICAgaWYgKHRoaXMuY291bnRCYWdlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5jb3VudEJhZ2UgPSAwXG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQucG9zaXRpb24gPSBjYy52MygwLCA1MCkuYWRkKGNjLnYzKDAsIDQwICogdGhpcy5jb3VudEJhZ2UpKVxuICAgICAgICB0aGlzLmNvdW50QmFnZSsrXG5cbiAgICB9XG4gICAgb2ZmV29vZEZyb21LZSgpIHtcbiAgICAgICAgdGhpcy5pc1RyYW5za2UgPSBmYWxzZVxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5hZGRUb3BUb1JheSlcbiAgICB9XG4gICAgLy9raWVtIHRyYSBuZ3VvaSBkdW5nIGRhbmcgb3JkZXIgY28gaG9hbiB0aGFuaCBraG9uZ1xuICAgIGNoZWNrUmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5jb3VudEJhZ2VUYWJlbCA8PSAwKSByZXR1cm5cbiAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzWzBdXG4gICAgICAgIGN1cy5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNGaWxsICs9IDAuMzVcbiAgICAgICAgdGhpcy5pc1BsYXllckVnZ3MgLT0gNDtcbiAgICAgICAgdGhpcy5jb3VudEJhZ2UgLT0gMVxuXG4gICAgICAgIGxldCBmaWxsQ291bnQgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlzRmlsbFxuICAgICAgICBsZXQgZmlsbCA9IGN1cy5nZXRDaGlsZEJ5TmFtZShcInN0YXR1c1wiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgY2MudHdlZW4oZmlsbCkudG8oMC4xLCB7IGZpbGxSYW5nZTogZmlsbENvdW50IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIGlmIChmaWxsQ291bnQgPj0gMSkge1xuICAgICAgICAgICAgbGV0IGJhZyA9IHRoaXMudGFibGVTZWxsLmdldENoaWxkQnlOYW1lKCdiYWcnKTtcbiAgICAgICAgICAgIHRoaXMuY291bnRCYWdlVGFiZWwgLT0gMTtcbiAgICAgICAgICAgIGlmIChiYWcuY2hpbGRyZW5bdGhpcy5jb3VudEJhZ2VUYWJlbF0gJiYgYmFnLmNoaWxkcmVuW3RoaXMuY291bnRCYWdlVGFiZWxdLm5hbWUgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGJhZy5jaGlsZHJlblt0aGlzLmNvdW50QmFnZVRhYmVsXS5kZXN0cm95KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXMuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLnN1Y2Nlc3MgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLnN1Y2Nlc3MgPSB0cnVlXG4gICAgICAgICAgICAgICAgY3VzLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5pc0ZpbGwgPSAwO1xuICAgICAgICAgICAgICAgIGZpbGwuZmlsbFJhbmdlID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9ob2FuIHRoYW5oIG5ndW9pIGNob2lcbiAgICByZW1vdmVDaGlsZCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZW1vdmVjaGlsZFwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXG4gICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1swXVxuICAgICAgICBjdXMuZ2V0Q2hpbGRCeU5hbWUoXCJzdGF0dXNcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmZ4TW9uZXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnZmeE1vbmV5KVxuICAgICAgICAgICAgdmZ4TW9uZXkucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgICAgICB2ZnhNb25leS5wb3NpdGlvbiA9IGN1cy5wb3NpdGlvbi5hZGQoY2MudjMoNTAsIDUwKSlcbiAgICAgICAgICAgIHZmeE1vbmV5LnNjYWxlID0gMS4yO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leSgpXG4gICAgICAgICAgICBnbG9iYWxUaGlzLmNvdW50TW9uZXkgKz0gMTBcbiAgICAgICAgICAgIGN1cy5wYXJlbnQgPSB0aGlzLmN1c05leHQ7XG4gICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLm1vdmVUb0JhcigpXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5zaGlmdCgpXG4gICAgICAgICAgICB0aGlzLmFkZEN1cygpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hcnJDdXNbaV0gIT0gY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckN1c1tpXS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikubW92ZU5leHQodGhpcy5hcnJQb3NbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbaV0uZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLnJlYWxkeVNlbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMC4yKVxuICAgICAgICB9LCAwLjIpXG4gICAgfVxuICAgIGNvdW50TW9uZXlUYWJsZSA9IDA7XG4gICAgY291bnRNb25leUJhZyA9IDA7XG4gICAgaXN0cmFuc01vbmV5ID0gZmFsc2VcbiAgICBjcmVhdGVNb25leSgpIHtcbiAgICAgICAgbGV0IGFyck1vbmV5UG9zID0gW2NjLnYzKDc4LCAxNyksIGNjLnYzKDE4LCAtMjUpXTtcbiAgICAgICAgbGV0IGNoZWNrID0gTWF0aC5mbG9vcih0aGlzLmNvdW50TW9uZXlUYWJsZSAvIDIpO1xuICAgICAgICBsZXQgZW5kUG9zMSA9IGFyck1vbmV5UG9zW3RoaXMuY291bnRNb25leVRhYmxlICUgMl07XG4gICAgICAgIGxldCBlbmRQb3MgPSBjYy52MihlbmRQb3MxLngsIGVuZFBvczEueSArIGNoZWNrICogMjApXG4gICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKC0xMjguNiwgLTEzNS44NzYpO1xuICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHN0YXJ0UG9zLnggKyBlbmRQb3MueCkgLyAyLCAoc3RhcnRQb3MueSArIGVuZFBvcy55KSAvIDIgKyAzMDApO1xuICAgICAgICBsZXQgbW9uZXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm1vbmV5UHJlZmFiKTtcbiAgICAgICAgbW9uZXkucGFyZW50ID0gdGhpcy5tb25leVRhYmxlO1xuICAgICAgICBjYy50d2Vlbihtb25leSkuYmV6aWVyVG8oMC4zLCBzdGFydFBvcywgbWlkUG9zLCBlbmRQb3MpLnN0YXJ0KClcbiAgICAgICAgdGhpcy5jb3VudE1vbmV5VGFibGUrKztcbiAgICB9XG4gICAgdHJhbnNNb25leVRvQ2hhcigpIHtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmlzdHJhbnNNb25leSkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5jb3VudE1vbmV5VGFibGUgPD0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzdHJhbnNNb25leSA9IHRydWVcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5jb3VudE1vbmV5VGFibGUgLSAxXG4gICAgICAgIGZvciAobGV0IGkgPSBjb3VudDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoYXRHbywgZmFsc2UsIDEpXG4gICAgICAgICAgICBsZXQgbW9uZXkgPSB0aGlzLm1vbmV5VGFibGUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgcG9zID0gbW9uZXkucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihtb25leS5wb3NpdGlvbik7XG4gICAgICAgICAgICBwb3MgPSB0aGlzLm1vbmV5QmFnLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICBtb25leS5wYXJlbnQgPSB0aGlzLm1vbmV5QmFnO1xuICAgICAgICAgICAgbW9uZXkuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAgICAgLy8gbW9uZXkucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICAvLyBtb25leS5wb3NpdGlvbiA9IGNjLnYzKDAsIHRoaXMuY291bnRNb25leUJhZyAqIDIwKVxuICAgICAgICAgICAgbW9uZXkucG9zaXRpb24gPSBwb3NcbiAgICAgICAgICAgIGxldCBwb3NFbmQgPSBjYy52MigwLCB0aGlzLmNvdW50TW9uZXlCYWcgKiAyMClcbiAgICAgICAgICAgIGxldCBwb3NTdGFydCA9IGNjLnYyKHBvcy54LCBwb3MueSk7XG4gICAgICAgICAgICBsZXQgcG9zTWlkID0gY2MudjIoKHBvc0VuZC54ICsgcG9zLngpIC8gMiwgKHBvc0VuZC55ICsgcG9zLnkpIC8gMiArIDIwMClcbiAgICAgICAgICAgIGNjLnR3ZWVuKG1vbmV5KS5iZXppZXJUbygwLjEsIHBvc1N0YXJ0LCBwb3NNaWQsIHBvc0VuZCkuc3RhcnQoKVxuXG5cbiAgICAgICAgICAgIHRoaXMuY291bnRNb25leUJhZysrXG4gICAgICAgICAgICB0aGlzLmNvdW50TW9uZXlUYWJsZS0tXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc3RyYW5zTW9uZXkgPSBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy90aGVtIGtoYWNoIGhhbmcgbW9pXG4gICAgYWRkQ3VzKCkge1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RDdXNQcmUubGVuZ3RoKVxuICAgICAgICBsZXQgY3VzID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0Q3VzUHJlW3JkXSlcbiAgICAgICAgY3VzLnBhcmVudCA9IHRoaXMubGlzdEN1c1xuXG4gICAgICAgIGN1cy5wb3NpdGlvbiA9IGNjLnYzKDgyOSwgLTg3OSlcbiAgICAgICAgY3VzLnNjYWxlID0gMS4yXG4gICAgICAgIHRoaXMuYXJyQ3VzLnB1c2goY3VzKVxuICAgIH1cbiAgICBnZXRVcGdyYWRlKCkge1xuICAgICAgICB0aGlzLmxpc3RBcnJvdy5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBsZXQgZGVtID0gdGhpcy5rZVRpZW4uY2hpbGRyZW5Db3VudCAtIDFcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuYXJlbmFVcGdyYWRlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5hcmVuYVVwZ3JhZGUucG9zaXRpb24pO1xuICAgICAgICBwb3MgPSB0aGlzLmtlVGllbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuICAgICAgICBmb3IgKGxldCBpID0gZGVtOyBpID49IDA7IGktLSkge1xuXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmtlVGllbi5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52MigocG9zLnggKyBjaGlsZC54KSAvIDIsIHBvcy55ICsgMjAwKVxuXG4gICAgICAgICAgICBjYy50d2VlbihjaGlsZCkuZGVsYXkoMC4wNSAqIGkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFB1dCwgZmFsc2UsIDEpXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb3VudE1vbmV5LS1cbiAgICAgICAgICAgIH0pLmJlemllclRvKDAuMywgY2MudjIoY2hpbGQueCwgY2hpbGQueSksIG1pZFBvcywgY2MudjIocG9zLngsIHBvcy55KSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZGVFZmYoKVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaWxsVWQgPSAwXG4gICAgdXBncmFkZUVmZigpIHtcbiAgICAgICAgbGV0IGZpbGwgPSB0aGlzLmFyZW5hVXBncmFkZS5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIik7XG4gICAgICAgIGxldCBmaWxsUmFuZ2UgPSBmaWxsLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLmZpbGxVZCArPSAwLjA1XG4gICAgICAgIGNjLnR3ZWVuKGZpbGxSYW5nZSkudG8oMC4xLCB7IGZpbGxSYW5nZTogdGhpcy5maWxsVWQgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmlsbFJhbmdlLmZpbGxSYW5nZSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgZmlsbFJhbmdlLmZpbGxSYW5nZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIZXJvKClcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxVZCA9IDBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnN0YXJ0KClcblxuICAgIH1cbiAgICBpc3VkID0gMFxuICAgIHVwZGF0ZUhlcm8oKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSlcbiAgICAgICAgdGhpcy5jaGFyLmdldENoaWxkQnlOYW1lKFwidGV4dFVkXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuXG4gICAgICAgIGlmICh0aGlzLmlzdWQgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGFyLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5hbmltLnNldFNraW4oXCJTa2luXzFcIilcbiAgICAgICAgICAgIHRoaXMuY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeF91ZFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzdWQgPT0gMykge1xuICAgICAgICAgICAgdGhpcy5jaGFyLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5hbmltLnNldFNraW4oXCJTa2luXzJcIilcbiAgICAgICAgICAgIHRoaXMuY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeF91ZFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzdWQrK1xuXG4gICAgfVxuICAgIHNob3dFbmRDYXJkKCkge1xuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLkpveXN0aWNrLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuSm95c3RpY2suZ2V0Q29tcG9uZW50KFwiSm95U3RpY2tcIikudG91Y2hFbmRFdmVudCgpXG4gICAgfVxuICAgIHNwYXdNb25leShjdXMpIHtcbiAgICAgICAgdGhpcy5hcmVuYU1vbmV5LmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICBsZXQgcG9zID0gY3VzLnBvc2l0aW9uLmFkZChjYy52MygwLCAxMDApKTtcbiAgICAgICAgcG9zID0gY3VzLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcbiAgICAgICAgcG9zID0gdGhpcy5rZVRpZW4uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1vbmV5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5tb25leVByZWZhYik7XG4gICAgICAgICAgICAgICAgbW9uZXkucGFyZW50ID0gdGhpcy5rZVRpZW47XG4gICAgICAgICAgICAgICAgbW9uZXkucG9zaXRpb24gPSBwb3NcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihtb25leSkudG8oMC4yLCB7IHBvc2l0aW9uOiB0aGlzLmxpc3RNb25leVBvc1tpXSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb3VudE1vbmV5KytcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGlzdEFycm93LmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxpc3RBcnJvdy5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJlbmFNb25leS5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCBpICogMC4wNSlcbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgaXN2ZXJ0aWNhbCA9IGZhbHNlXG5cblxuICAgIHJlcG9uc2l2ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gKHZhbHVlKSA/IDEuMiA6IDJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKHZhbHVlKSA/IDAuNCA6IDAuNlxuICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gKHZhbHVlKSA/IDE1NyA6IDE4MFxuICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9ICh2YWx1ZSkgPyAyMDAgOiAtNjAwXG4gICAgICAgIHRoaXMuYmFyQ3VycmVudC5zY2FsZSA9ICh2YWx1ZSkgPyAxIDogMS44XG5cbiAgICAgICAgdGhpcy5iYXJDdXJyZW50LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9ICh2YWx1ZSkgPyAxNDkgOiAyNTBcbiAgICAgICAgdGhpcy5iYXJDdXJyZW50LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gKHZhbHVlKSA/IDEzNyA6IDEzNyAtIDY1MFxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAodmFsdWUpID8gMSA6IDEuNVxuXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0RHJhdykge1xuICAgICAgICAgICAgdGhpcy5kcmF3bkFycm93KHRoaXMuY2hhciwgdGhpcy5pc1RhcmdldERyYXcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnRUdXQgJiYgZ2xvYmFsVGhpcy5jb3VudFdvb2QgPT0gMTApIHtcbiAgICAgICAgICAgIHRoaXMuaXNGaXJ0VHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYXJyb3cyLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxiTW9uZXkuc3RyaW5nID0gZ2xvYmFsVGhpcy5jb3VudE1vbmV5LnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMubGJXb29kLnN0cmluZyA9IGdsb2JhbFRoaXMuY291bnRXb29kLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuY2hhci5wb3NpdGlvbi5hZGQoY2MudjMoMTAwLCAwKSkpO1xuXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZXZpY2VSZXNvbHV0aW9uLndpZHRoL2RldmljZVJlc29sdXRpb24uaGVpZ2h0KVxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSlcbiAgICAgICAgICAgIGxldCBjaGVja0lwYWQgPSBkZXZpY2VSZXNvbHV0aW9uLndpZHRoIC8gZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHRcblxuICAgICAgICAgICAgaWYgKGNoZWNrSXBhZCA8IDEuMzUgJiYgY2hlY2tJcGFkID4gMS4zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtNDAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhd25BcnJvdyhzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICBpZiAoIXNvdXJjZSB8fCAhdGFyZ2V0IHx8ICF0aGlzLmFycm93UHJlZmFiIHx8IHRoaXMuY291bnRPcGVuID09IDQgfHwgdGFyZ2V0Lm5hbWUgPT0gXCJcIikgcmV0dXJuO1xuICAgICAgICAvLyBU4buNYSDEkeG7mSB0b8OgbiBj4bulY1xuICAgICAgICBjb25zdCBzdGFydFdvcmxkID0gc291cmNlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGNvbnN0IGVuZFdvcmxkID0gdGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG5cbiAgICAgICAgLy8gxJDhu5VpIHbhu4EgdOG7jWEgxJHhu5kgbG9jYWwgY+G7p2EgY2hhIChuw6puIMSR4bq3dCBzY3JpcHQgdHLDqm4gbm9kZSBjaHVuZyBj4bunYSBzb3VyY2UgdsOgIHRhcmdldClcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5hcnJvd05vZGU7XG4gICAgICAgIGNvbnN0IHN0YXJ0TG9jYWwgPSBwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoc3RhcnRXb3JsZCk7XG4gICAgICAgIGNvbnN0IGVuZExvY2FsID0gcGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGVuZFdvcmxkKTtcblxuICAgICAgICBjb25zdCBkaXIgPSBlbmRMb2NhbC5zdWIoc3RhcnRMb2NhbCk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZGlyLm1hZygpO1xuICAgICAgICBjb25zdCBhbmdsZSA9IGNjLnYyKDEsIDApLnNpZ25BbmdsZShkaXIpICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgY29uc3QgY291bnQgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gdGhpcy5hcnJvd1NwYWNpbmcpO1xuICAgICAgICAvLyBjb25zdCBjb3VudCA9IDFcbiAgICAgICAgLy8gxJBp4buBdSBjaOG7iW5oIHPhu5EgbMaw4bujbmcgbcWpaSB0w6puXG4gICAgICAgIHdoaWxlICh0aGlzLmFycm93cy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFycm93UHJlZmFiKTtcbiAgICAgICAgICAgIGFycm93LnpJbmRleCA9IDA7XG4gICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgdGhpcy5hcnJvd3MucHVzaChhcnJvdyk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAodGhpcy5hcnJvd3MubGVuZ3RoID4gY291bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhID0gdGhpcy5hcnJvd3MucG9wKCk7XG4gICAgICAgICAgICBleHRyYS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDEkOG6t3QgduG7iyB0csOtIHThu6tuZyBtxalpIHTDqm5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IChpICsgMSkgKiB0aGlzLmFycm93U3BhY2luZyAvIGRpc3RhbmNlO1xuICAgICAgICAgICAgY29uc3QgcG9zID0gZW5kTG9jYWwubGVycChzdGFydExvY2FsLCByYXRpbyk7XG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IHRoaXMuYXJyb3dzW2ldO1xuICAgICAgICAgICAgYXJyb3cuc2V0UG9zaXRpb24ocG9zLmFkZChjYy52MygwLCAwKSkpO1xuICAgICAgICAgICAgYXJyb3cuc2NhbGUgPSAtMS41XG4gICAgICAgICAgICBhcnJvdy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgaXNUYXJnZXREcmF3ID0gbnVsbDtcbn1cbiJdfQ==