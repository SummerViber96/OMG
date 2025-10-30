"use strict";
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