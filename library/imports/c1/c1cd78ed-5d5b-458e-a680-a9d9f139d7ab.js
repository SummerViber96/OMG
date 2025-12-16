"use strict";
cc._RF.push(module, 'c1cd7jtXVtFjqaAqdnxOder', 'GameApp');
// scripts/APP/GameApp.ts

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
globalThis.gold = 0;
globalThis.scGame = false;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundShowPop = null;
        _this.soundClosePop = null;
        _this.soundBg = null;
        _this.soundWin = null;
        _this.soundLose = null;
        _this.tut = null;
        _this.hand = null;
        _this.endCard = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.logo = null;
        _this.listCus = null;
        _this.preHotDog = null;
        _this.preBread = null;
        _this.preBuger = null;
        _this.preMeat = null;
        _this.tuongOt = null;
        _this.listChao = null;
        _this.listKhayBanhMi = null;
        _this.listKhayBuger = null;
        _this.listHand = null;
        _this.soundChesse = null;
        _this.soundWrong = null;
        _this.soundNice = null;
        _this.soundYes = null;
        _this.soundQuest = null;
        _this.fxColor = null;
        _this.btnMeatNode = null;
        _this.btnBugerNode = null;
        _this.btnVegettableNode = null;
        _this.btnBread = null;
        _this.barCoin = null;
        _this.lbCoin = null;
        _this.isTutChili = false;
        _this.isTutMeat = false;
        _this.isTutVegetTable = false;
        _this.isTutClickMeat = false;
        // @property(cc.AudioClip)
        // soundBg:cc.AudioClip=null;
        _this.isTargetPop = null;
        _this.isStep = 0;
        _this.isTargetCus = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.idSound = null;
        _this.arrHotDog = [null, null, null, null, null, null];
        _this.arrBreak = [null, null, null];
        _this.arrBuger = [null, null, null];
        _this.arrTuongCa = [];
        _this.isLockMeat = true;
        _this.isLockBuger = true;
        _this.isNoBuger = true;
        _this.isDelaytuong = false;
        _this.isLockVegettable = true;
        _this.isNoVeget = true;
        _this.arrTutHand = [false, false, false, false];
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    };
    NewClass.prototype.start = function () {
        this.showCus();
        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.5);
    };
    NewClass.prototype.showCus = function () {
        var _this = this;
        var child = this.listCus.children[0];
        child.position = cc.v3(700, 123.591);
        cc.tween(child).to(0.8, { position: cc.v3(0, 123.591) }).call(function () {
            child.getChildByName("pop").active = true;
            _this.isTargetPop = child.getChildByName("pop");
            _this.isTargetCus = child;
            _this.listHand.children[0].active = true;
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundShowPop, false, 1);
            }, 0.1);
        }).start();
    };
    NewClass.prototype.successCus = function () {
        this.isTargetCus = null;
        this.isTargetPop = null;
    };
    NewClass.prototype.creatFxColor = function (pos, scale) {
        var pre = cc.instantiate(this.fxColor);
        pre.parent = this.node;
        pre.position = pos;
        pre.scale = scale;
    };
    NewClass.prototype.nextCus = function (value) {
        var _this = this;
        this.countCus++;
        if (this.countCus == 6) {
            this.onEndGame(value);
        }
        else {
            var child_1 = this.listCus.children[this.countCus];
            child_1.position = cc.v3(700, 123.591);
            child_1.active = true;
            cc.tween(child_1).to(0.8, { position: cc.v3(0, 123.591) }).call(function () {
                child_1.getChildByName("pop").active = true;
                _this.isTargetPop = child_1.getChildByName("pop");
                _this.isTargetCus = child_1;
                _this.scheduleOnce(function () {
                    cc.audioEngine.play(_this.soundShowPop, false, 1);
                }, 0.1);
                if (_this.countCus == 3) {
                    _this.isStep = 1;
                    _this.onBtn(_this.btnMeatNode);
                    if (globalThis.gold < 100) {
                        globalThis.gold = 100;
                    }
                    _this.listHand.children[5].active = true;
                }
                else if (_this.countCus == 4 && _this.isLockVegettable == true) {
                    if (globalThis.gold < 150) {
                        globalThis.gold = 150;
                    }
                }
            }).start();
        }
    };
    NewClass.prototype.onBtn = function (btn) {
        btn.getComponent(cc.Button).enabled = true;
        // btn.children[0].children[0].active = false;
        var bar = btn.children[0].children[2];
        this.offGray(bar);
    };
    NewClass.prototype.appearBtn = function (btn) {
        var bar = btn.children[0].children[2];
        cc.tween(bar).to(0.3, { scale: 0 }).start();
        var lock = btn.children[0];
        cc.tween(lock).to(0.4, { opacity: 0 }).start();
    };
    NewClass.prototype.btn_hotDog = function (event) {
        var _this = this;
        // if (this.arrHotDog.length >= 6) return;
        var check = this.checkSlotHotDog();
        if (check == null)
            return;
        this.btnBread.getComponent(cc.Button).enabled = true;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        this.listHand.children[0].opacity = 0;
        this.scheduleOnce(function () {
            _this.listHand.children[1].active = true;
        }, 0.5);
        // let dem = this.arrHotDog.length
        var hotDog = cc.instantiate(this.preHotDog);
        console.log(this.listChao);
        hotDog.parent = this.listChao.children[check];
        hotDog.position = cc.v3(0, 0);
        hotDog.getComponent("hotdog").value = check;
        this.arrHotDog[check] = hotDog;
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
    };
    NewClass.prototype.btn_meat = function () {
        var _this = this;
        if (this.isLockMeat == true && globalThis.gold >= 100) {
            globalThis.gold -= 100;
            this.appearBtn(this.btnMeatNode);
            this.isLockMeat = false;
            cc.audioEngine.play(this.soundQuest, false, 0.5);
            this.isNoBuger = false;
            return;
        }
        if (this.isLockMeat)
            return;
        var check = this.checkSlotHotDog();
        if (check == null)
            return;
        this.listHand.children[5].opacity = 0;
        this.scheduleOnce(function () {
            if (_this.isStep == 1) {
                _this.isStep = 2;
                _this.listHand.children[6].active = true;
                if (globalThis.gold < 150 && _this.countCus >= 3) {
                    globalThis.gold += 150;
                }
            }
            _this.onBtn(_this.btnBugerNode);
        }, 0.5);
        cc.audioEngine.play(this.soundShowPop, false, 1);
        var meat = cc.instantiate(this.preMeat);
        meat.parent = this.listChao.children[check];
        meat.position = cc.v3(0, 0);
        meat.getComponent("meat").value = check;
        this.arrHotDog[check] = meat;
        // let pos = this.listHand.children[5].position
        // this.creatFxColor(pos, 2)
    };
    NewClass.prototype.checkSlotHotDog = function () {
        for (var i = 0; i < this.arrHotDog.length; i++) {
            if (this.arrHotDog[i] == null)
                return i;
        }
        return null;
    };
    NewClass.prototype.checkSlotBread = function () {
        for (var i = 0; i < this.arrBreak.length; i++) {
            if (this.arrBreak[i] == null)
                return i;
        }
        return null;
    };
    NewClass.prototype.checkSlotBuger = function () {
        for (var i = 0; i < this.arrBuger.length; i++) {
            if (this.arrBuger[i] == null)
                return i;
        }
        return null;
    };
    NewClass.prototype.setGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.offGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.btn_bread = function (event) {
        var _this = this;
        // if (this.arrBreak.length >= 3) return;
        // let dem = this.arrBreak.length
        var check = this.checkSlotBread();
        if (check == null)
            return;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        var bread = cc.instantiate(this.preBread);
        bread.parent = this.listKhayBanhMi.children[check];
        bread.position = cc.v3(0, 0);
        bread.getComponent("preBread").value = check;
        this.arrBreak[check] = bread;
        this.listHand.children[1].opacity = 0;
        this.scheduleOnce(function () {
            _this.listHand.children[2].active = true;
        }, 0.5);
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
    };
    NewClass.prototype.btn_buger = function (event) {
        if (this.isNoBuger)
            return;
        if (this.isLockBuger == true && globalThis.gold >= 150) {
            globalThis.gold -= 150;
            this.appearBtn(this.btnBugerNode);
            this.isLockBuger = false;
            cc.audioEngine.play(this.soundQuest, false, 0.5);
            this.isNoVeget = false;
            return;
        }
        if (this.isLockBuger)
            return;
        var check = this.checkSlotBuger();
        if (check == null)
            return;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        var bread = cc.instantiate(this.preBuger);
        bread.parent = this.listKhayBuger.children[check];
        bread.position = cc.v3(30, 10);
        bread.getComponent("buger").value = check;
        this.arrBuger[check] = bread;
        this.listHand.children[6].opacity = 0;
        // this.scheduleOnce(() => {
        // }, 0.5)
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
        if (this.isStep == 2) {
            var checkMeat = this.checkHaveMeat();
            if (checkMeat != null) {
                this.listHand.children[7].active = true;
                var pos_1 = checkMeat.parent.convertToWorldSpaceAR(checkMeat.position);
                pos_1 = this.listHand.convertToNodeSpaceAR(pos_1);
                console.log(pos_1);
                this.listHand.children[7].position = pos_1.add(cc.v3(0, 100));
                this.isStep = 3;
            }
        }
    };
    NewClass.prototype.checkHaveMeat = function () {
        for (var i = 0; i < this.arrHotDog.length; i++) {
            if (this.arrHotDog[i] != null && this.arrHotDog[i].name == "preMeat")
                return this.arrHotDog[i];
        }
        return null;
    };
    NewClass.prototype.sellBread = function (value) {
        // console.log(value)
        if (this.isTargetCus == null)
            return;
        if (this.isTargetPop == null)
            return;
        this.listHand.children[4].opacity = 0;
        var child = this.arrBreak[value];
        this.arrBreak[value] = null;
        var posEnd = this.isTargetPop.position;
        posEnd = this.isTargetPop.parent.convertToWorldSpaceAR(posEnd);
        posEnd = child.parent.convertToNodeSpaceAR(posEnd);
        var pos = child.parent.convertToWorldSpaceAR(child.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        cc.tween(child).to(0.4, { position: posEnd.add(cc.v3(50, 0)), scale: 0.7 }).call(function () {
            child.opacity = 0;
        }).start();
        if (this.isTargetCus) {
            this.isTargetCus.getComponent("cusMission").checkBread(child);
        }
        this.creatFxColor(pos.add(cc.v3(0, 50)), 1.5);
    };
    NewClass.prototype.sellBuger = function (value) {
        // console.log(value)
        if (this.isTargetCus == null)
            return;
        if (this.isTargetPop == null)
            return;
        // this.listHand.children[4].opacity = 0
        this.listHand.children[8].opacity = 0;
        var child = this.arrBuger[value];
        this.arrBuger[value] = null;
        var posEnd = this.isTargetPop.position;
        posEnd = this.isTargetPop.parent.convertToWorldSpaceAR(posEnd);
        posEnd = child.parent.convertToNodeSpaceAR(posEnd);
        var pos = child.parent.convertToWorldSpaceAR(child.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        cc.tween(child).to(0.4, { position: posEnd.add(cc.v3(50, 0)), scale: 0.7 }).call(function () {
            child.opacity = 0;
        }).start();
        if (this.isTargetCus) {
            this.isTargetCus.getComponent("cusMission").checkBuger(child);
        }
        this.creatFxColor(pos.add(cc.v3(0, 50)), 1.5);
    };
    NewClass.prototype.btn_tuongCa = function () {
        var _this = this;
        if (this.isDelaytuong)
            return;
        if (this.arrBreak.length <= 0)
            return;
        var bread = this.checkTuongCa();
        if (bread == null)
            return;
        this.isDelaytuong = true;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        this.listHand.children[3].opacity = 0;
        this.isTutChili = false;
        // this.scheduleOnce(() => {
        //     this.listHand.children[4].active = true
        // }, 1)
        var posStart = bread.position.add(cc.v3(40, 150));
        posStart = bread.parent.convertToWorldSpaceAR(posStart);
        posStart = this.node.convertToNodeSpaceAR(posStart);
        var posEnd = this.tuongOt.position;
        var posMid = cc.v2((posStart.x + posEnd.x) / 2, (posStart.y + posEnd.y) / 2 + 100);
        this.tuongOt.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            bread.getComponent("preBread").getTuongCa();
            cc.audioEngine.play(_this.soundChesse, false, 1);
        }, 0.25);
        cc.tween(this.tuongOt).bezierTo(0.5, cc.v2(posEnd.x, posEnd.y), cc.v2(posMid.x, posMid.y), cc.v2(posStart.x, posStart.y)).call(function () {
        }).delay(0.2).call(function () {
            _this.tuongOt.position = posEnd;
            _this.tuongOt.children[0].angle = 0;
            _this.isDelaytuong = false;
        }).start();
    };
    NewClass.prototype.checkTuongCa = function () {
        for (var i = 0; i < this.arrBreak.length; i++) {
            var chld = this.arrBreak[i];
            if (chld != null && chld.getComponent("preBread").isHotDog == true && chld.getComponent("preBread").isTuongCa == false) {
                return chld;
            }
        }
        return null;
    };
    NewClass.prototype.btn_vegettable = function () {
        var _this = this;
        if (this.isNoVeget)
            return;
        if (this.isLockVegettable == true && globalThis.gold >= 150) {
            globalThis.gold -= 150;
            this.appearBtn(this.btnVegettableNode);
            this.isLockVegettable = false;
            cc.audioEngine.play(this.soundQuest, false, 0.5);
            return;
        }
        if (this.isLockVegettable)
            return;
        if (this.arrBuger.length <= 0)
            return;
        var bread = this.checkVegettable();
        if (bread == null)
            return;
        this.listHand.children[9].opacity = 0;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        bread.getComponent("buger").getVegettable();
        this.scheduleOnce(function () {
            _this.listHand.children[8].active = false;
        }, 0.3);
    };
    NewClass.prototype.checkVegettable = function () {
        for (var i = 0; i < this.arrBuger.length; i++) {
            var chld = this.arrBuger[i];
            if (chld != null && chld.getComponent("buger").isMeat == true && chld.getComponent("buger").isvegettable == false) {
                return chld;
            }
        }
        return null;
    };
    NewClass.prototype.clickHotDog = function (value, node) {
        var _this = this;
        if (this.arrBreak.length <= 0)
            return;
        var child = this.checkBread();
        if (child == null)
            return;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        this.listHand.children[2].opacity = 0;
        if (this.arrTutHand[3] == false) {
            this.scheduleOnce(function () {
                _this.listHand.children[4].active = true;
                _this.isTutChili = true;
            }, 0.5);
            this.arrTutHand[3] = true;
        }
        this.arrHotDog[value] = null;
        child.getComponent("preBread").getHotDog();
        var pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        node.opacity = 0;
        this.scheduleOnce(function () {
            node.destroy();
        }, 0.1);
        this.creatFxColor(pos, 1.5);
    };
    NewClass.prototype.checkBread = function () {
        for (var i = 0; i < this.arrBreak.length; i++) {
            var chld = this.arrBreak[i];
            if (chld != null && chld.getComponent("preBread").isHotDog == false) {
                return chld;
            }
        }
        return null;
    };
    NewClass.prototype.clearMeat = function () {
        var node1 = this.arrHotDog[0];
        var node2 = this.arrHotDog[1];
        this.arrHotDog[0] = null;
        this.arrHotDog[1] = null;
        this.scheduleOnce(function () {
            node1.destroy();
            node2.destroy();
        }, 0.1);
    };
    NewClass.prototype.clickMeat = function (value, node) {
        var _this = this;
        if (this.arrBuger.length <= 0)
            return;
        var child = this.checkBuger();
        if (child == null)
            return;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        this.listHand.children[7].opacity = 0;
        this.scheduleOnce(function () {
            // this.listHand.children[9].active = true
            // globalThis.gold += 200
            _this.onBtn(_this.btnVegettableNode);
        }, 0.5);
        this.arrHotDog[value] = null;
        child.getComponent("buger").getMeat();
        var pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        node.opacity = 0;
        this.scheduleOnce(function () {
            node.destroy();
        }, 0.1);
        this.creatFxColor(pos, 1.5);
    };
    NewClass.prototype.checkBuger = function () {
        for (var i = 0; i < this.arrBuger.length; i++) {
            var chld = this.arrBuger[i];
            if (chld != null && chld.getComponent("buger").isMeat == false) {
                return chld;
            }
        }
        return null;
    };
    NewClass.prototype.onEndGame = function (value) {
        if (value == true) {
            cc.audioEngine.play(this.soundWin, false, 1);
        }
        else {
            cc.audioEngine.stop(this.idSound);
            cc.audioEngine.play(this.soundLose, false, 1);
        }
        this.endCard.active = true;
        this.linkToStore.active = true;
    };
    // btn_choose(event, value) {
    NewClass.prototype.update = function (dt) {
        this.lbCoin.string = globalThis.gold.toString();
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
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.camera.node.position = cc.v3(0, -50);
        this.barCoin.scale = (logic) ? 1.6 : 1;
        this.listCus.scale = (logic) ? 1.8 : 1;
        this.listCus.position = (logic) ? cc.v3(0, -100) : cc.v3(0, -34);
        this.btnVegettableNode.position = (logic) ? cc.v3(-312, -727.999) : cc.v3(-751, -259);
        this.btnBugerNode.position = (logic) ? cc.v3(-680, -523) : cc.v3(-710, -523);
        // this.barCoin.y=(logic)?400:470
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            this.camera.node.position = cc.v3(-70, 350);
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 1.25;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                console.log("check iphonex");
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1;
            }
        }
        else {
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
                this.camera.zoomRatio = 0.8;
            }
        }
        if (this.isTutChili == true) {
            this.listHand.children[3].opacity = 0;
            if (this.arrBreak.length <= 0)
                return;
            var bread = this.checkTuongCa();
            if (bread == null)
                return;
            this.listHand.children[3].opacity = 255;
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
        property(cc.Prefab)
    ], NewClass.prototype, "preHotDog", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBread", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBuger", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preMeat", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tuongOt", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChao", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKhayBanhMi", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKhayBuger", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHand", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChesse", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundNice", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundYes", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundQuest", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "fxColor", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnMeatNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnBugerNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnVegettableNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnBread", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barCoin", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCoin", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();