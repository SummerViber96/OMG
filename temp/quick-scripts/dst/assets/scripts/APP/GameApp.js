
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/GameApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        // @property(cc.AudioClip)
        // soundBg:cc.AudioClip=null;
        _this.isTargetPop = null;
        _this.isTargetCus = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.arrHotDog = [null, null, null, null, null, null];
        _this.arrBreak = [null, null, null];
        _this.arrBuger = [null, null, null];
        _this.arrTuongCa = [];
        _this.isLockMeat = true;
        _this.isLockBuger = true;
        _this.isDelaytuong = false;
        _this.isLockVegettable = true;
        return _this;
    }
    NewClass.prototype.start = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.showCus();
        cc.audioEngine.play(this.soundBg, true, 0.5);
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
    NewClass.prototype.nextCus = function () {
        var _this = this;
        this.countCus++;
        if (this.countCus == 6) {
            this.onEndGame();
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
                    // globalThis.gold += 200
                    // if (globalThis.gold < 100) {
                    //     globalThis.gold += 100;
                    // }
                    // this.btnBugerNode.getComponent(cc.Button).enabled = true;
                    // this.btnVegettableNode.getComponent(cc.Button).enabled = true;
                    // this.btnMeatNode.getComponent(cc.Button).enabled = true;
                    // this.btnBugerNode.children[0].active = false;
                    // this.btnMeatNode.children[0].active = false
                    // this.btnVegettableNode.children[0].active = false
                    _this.onBtn(_this.btnMeatNode);
                    // this.offGray(this.btnBugerNode);
                    // this.offGray(this.btnVegettableNode);
                    // this.offGray(this.btnMeatNode);
                    _this.listHand.children[5].active = true;
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
            return;
        }
        var check = this.checkSlotHotDog();
        if (check == null)
            return;
        this.listHand.children[5].opacity = 0;
        this.scheduleOnce(function () {
            _this.listHand.children[6].active = true;
            _this.onBtn(_this.btnBugerNode);
            // if (globalThis.gold < 200) {
            //     globalThis.gold += 200;
            // }
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
        var _this = this;
        if (this.isLockBuger == true && globalThis.gold >= 200) {
            globalThis.gold -= 200;
            this.appearBtn(this.btnBugerNode);
            this.isLockBuger = false;
            cc.audioEngine.play(this.soundQuest, false, 0.5);
            return;
        }
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
        this.scheduleOnce(function () {
            _this.listHand.children[7].active = true;
        }, 0.5);
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
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
        var _this = this;
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
            if (_this.isTargetCus) {
                _this.isTargetCus.getComponent("cusMission").checkBuger(child);
            }
        }).start();
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
        this.scheduleOnce(function () {
            _this.listHand.children[4].active = true;
        }, 1);
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
        if (this.isLockVegettable == true && globalThis.gold >= 200) {
            globalThis.gold -= 200;
            this.appearBtn(this.btnVegettableNode);
            this.isLockVegettable = false;
            cc.audioEngine.play(this.soundQuest, false, 0.5);
            return;
        }
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
        this.scheduleOnce(function () {
            _this.listHand.children[3].active = true;
            _this.isTutChili = true;
        }, 0.5);
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
            _this.listHand.children[9].active = true;
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
    NewClass.prototype.onEndGame = function () {
        cc.audioEngine.play(this.soundWin, false, 1);
        this.endCard.active = true;
        this.linkToStore.active = true;
    };
    // btn_choose(event, value) {
    //     console.log(value)
    //     switch (value) {
    //         case "0":
    //             this.hand.active = false
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             // this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(1)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             // this.hand.active = true
    //             break;
    //         case "1":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(2)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "2":
    //             this.sceneGun.position = cc.v3(3000, 0)
    //             this.sceneGun.active = true
    //             this.sceneGun.getComponent("mainGun").loadData(1)
    //             this.sceneGun.getComponent(cc.Animation).play()
    //             this.sceneMain.active = false
    //             break;
    //         case "3":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(3)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "4":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(4)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "5":
    //             this.sceneGun.position = cc.v3(3000, 0)
    //             this.sceneGun.active = true
    //             this.sceneGun.getComponent("mainGun").loadData(2)
    //             this.sceneGun.getComponent(cc.Animation).play()
    //             this.sceneMain.active = false
    //             break;
    //     }
    // }
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
        // this.barCoin.y=(logic)?400:470
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            this.camera.node.position = cc.v3(-70, 0);
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 1.1;
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
        if (this.isTutChili) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBRW5CO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbW5CQztRQWpuQkcsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUE7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LENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQWxFUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbW5CNUI7SUFBRCxlQUFDO0NBbm5CRCxBQW1uQkMsQ0FubkJxQyxFQUFFLENBQUMsU0FBUyxHQW1uQmpEO2tCQW5uQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuZ29sZCA9IDBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2hvd1BvcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsb3NlUG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUhvdERvZzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVCcmVhZDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVCdWdlcjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVNZWF0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dW9uZ090OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENoYW86IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RLaGF5QmFuaE1pOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtoYXlCdWdlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoZXNzZTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE5pY2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFllczogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kUXVlc3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBmeENvbG9yOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk1lYXROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQnVnZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuVmVnZXR0YWJsZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5CcmVhZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhckNvaW46IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkNvaW46IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIGlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIHNvdW5kQmc6Y2MuQXVkaW9DbGlwPW51bGw7XHJcblxyXG4gICAgaXNUYXJnZXRQb3AgPSBudWxsO1xyXG4gICAgaXNUYXJnZXRDdXMgPSBudWxsO1xyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIGNvdW50Q3VzID0gMFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd0N1cygpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuNSlcclxuICAgIH1cclxuICAgIHNob3dDdXMoKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuWzBdXHJcbiAgICAgICAgY2hpbGQucG9zaXRpb24gPSBjYy52Myg3MDAsIDEyMy41OTEpXHJcbiAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMTIzLjU5MSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldFBvcCA9IGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBjaGlsZDtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgfSwgMC4xKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICB9XHJcbiAgICBzdWNjZXNzQ3VzKCkge1xyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRQb3AgPSBudWxsO1xyXG5cclxuICAgIH1cclxuICAgIGNyZWF0RnhDb2xvcihwb3MsIHNjYWxlKSB7XHJcbiAgICAgICAgbGV0IHByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZnhDb2xvcilcclxuICAgICAgICBwcmUucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgcHJlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgcHJlLnNjYWxlID0gc2NhbGVcclxuICAgIH1cclxuICAgIG5leHRDdXMoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudEN1cysrXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPT0gNikge1xyXG4gICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5jb3VudEN1c11cclxuICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBjYy52Myg3MDAsIDEyMy41OTEpXHJcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMTIzLjU5MSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0UG9wID0gY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwLjEpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2xvYmFsVGhpcy5nb2xkICs9IDIwMFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChnbG9iYWxUaGlzLmdvbGQgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDEwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYnRuQnVnZXJOb2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYnRuVmVnZXR0YWJsZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5idG5NZWF0Tm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkJ1Z2VyTm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bk1lYXROb2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5idG5WZWdldHRhYmxlTm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG4odGhpcy5idG5NZWF0Tm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm9mZkdyYXkodGhpcy5idG5CdWdlck5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMub2ZmR3JheSh0aGlzLmJ0blZlZ2V0dGFibGVOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm9mZkdyYXkodGhpcy5idG5NZWF0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls1XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25CdG4oYnRuKSB7XHJcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIGJ0bi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYmFyID0gYnRuLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdXHJcbiAgICAgICAgdGhpcy5vZmZHcmF5KGJhcilcclxuICAgIH1cclxuICAgIGFwcGVhckJ0bihidG4pIHtcclxuICAgICAgICBsZXQgYmFyID0gYnRuLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdXHJcbiAgICAgICAgY2MudHdlZW4oYmFyKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGxldCBsb2NrID0gYnRuLmNoaWxkcmVuWzBdXHJcbiAgICAgICAgY2MudHdlZW4obG9jaykudG8oMC40LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgYXJySG90RG9nID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdO1xyXG4gICAgYXJyQnJlYWsgPSBbbnVsbCwgbnVsbCwgbnVsbF07XHJcbiAgICBhcnJCdWdlciA9IFtudWxsLCBudWxsLCBudWxsXTtcclxuICAgIGFyclR1b25nQ2EgPSBbXVxyXG4gICAgYnRuX2hvdERvZyhldmVudCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmFyckhvdERvZy5sZW5ndGggPj0gNikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tTbG90SG90RG9nKClcclxuICAgICAgICBpZiAoY2hlY2sgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYnRuQnJlYWQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLm9wYWNpdHkgPSAwXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICAvLyBsZXQgZGVtID0gdGhpcy5hcnJIb3REb2cubGVuZ3RoXHJcbiAgICAgICAgbGV0IGhvdERvZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlSG90RG9nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RDaGFvKVxyXG4gICAgICAgIGhvdERvZy5wYXJlbnQgPSB0aGlzLmxpc3RDaGFvLmNoaWxkcmVuW2NoZWNrXTtcclxuICAgICAgICBob3REb2cucG9zaXRpb24gPSBjYy52MygwLCAwKVxyXG4gICAgICAgIGhvdERvZy5nZXRDb21wb25lbnQoXCJob3Rkb2dcIikudmFsdWUgPSBjaGVja1xyXG4gICAgICAgIHRoaXMuYXJySG90RG9nW2NoZWNrXSA9IGhvdERvZ1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLCAyKVxyXG5cclxuICAgIH1cclxuICAgIGlzTG9ja01lYXQgPSB0cnVlXHJcbiAgICBidG5fbWVhdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xvY2tNZWF0ID09IHRydWUgJiYgZ2xvYmFsVGhpcy5nb2xkID49IDEwMCkge1xyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgLT0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGVhckJ0bih0aGlzLmJ0bk1lYXROb2RlKVxyXG4gICAgICAgICAgICB0aGlzLmlzTG9ja01lYXQgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRRdWVzdCwgZmFsc2UsIDAuNSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja1Nsb3RIb3REb2coKVxyXG4gICAgICAgIGlmIChjaGVjayA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls1XS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls2XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMub25CdG4odGhpcy5idG5CdWdlck5vZGUpXHJcbiAgICAgICAgICAgIC8vIGlmIChnbG9iYWxUaGlzLmdvbGQgPCAyMDApIHtcclxuICAgICAgICAgICAgLy8gICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyMDA7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgbWVhdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlTWVhdCk7XHJcbiAgICAgICAgbWVhdC5wYXJlbnQgPSB0aGlzLmxpc3RDaGFvLmNoaWxkcmVuW2NoZWNrXTtcclxuICAgICAgICBtZWF0LnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICBtZWF0LmdldENvbXBvbmVudChcIm1lYXRcIikudmFsdWUgPSBjaGVja1xyXG4gICAgICAgIHRoaXMuYXJySG90RG9nW2NoZWNrXSA9IG1lYXRcclxuICAgICAgICAvLyBsZXQgcG9zID0gdGhpcy5saXN0SGFuZC5jaGlsZHJlbls1XS5wb3NpdGlvblxyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRGeENvbG9yKHBvcywgMilcclxuICAgIH1cclxuICAgIGNoZWNrU2xvdEhvdERvZygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJySG90RG9nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyckhvdERvZ1tpXSA9PSBudWxsKSByZXR1cm4gaVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY2hlY2tTbG90QnJlYWQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckJyZWFrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyckJyZWFrW2ldID09IG51bGwpIHJldHVybiBpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjaGVja1Nsb3RCdWdlcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQnVnZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyQnVnZXJbaV0gPT0gbnVsbCkgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0R3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLWdyYXktc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG5cclxuICAgIH1cclxuICAgIG9mZkdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBidG5fYnJlYWQoZXZlbnQpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5hcnJCcmVhay5sZW5ndGggPj0gMykgcmV0dXJuO1xyXG4gICAgICAgIC8vIGxldCBkZW0gPSB0aGlzLmFyckJyZWFrLmxlbmd0aFxyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tTbG90QnJlYWQoKVxyXG4gICAgICAgIGlmIChjaGVjayA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGxldCBicmVhZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQnJlYWQpO1xyXG4gICAgICAgIGJyZWFkLnBhcmVudCA9IHRoaXMubGlzdEtoYXlCYW5oTWkuY2hpbGRyZW5bY2hlY2tdO1xyXG4gICAgICAgIGJyZWFkLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICBicmVhZC5nZXRDb21wb25lbnQoXCJwcmVCcmVhZFwiKS52YWx1ZSA9IGNoZWNrXHJcbiAgICAgICAgdGhpcy5hcnJCcmVha1tjaGVja10gPSBicmVhZFxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucG9zaXRpb25cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDIpXHJcblxyXG4gICAgfVxyXG4gICAgaXNMb2NrQnVnZXIgPSB0cnVlXHJcblxyXG4gICAgYnRuX2J1Z2VyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2NrQnVnZXIgPT0gdHJ1ZSAmJiBnbG9iYWxUaGlzLmdvbGQgPj0gMjAwKSB7XHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCAtPSAyMDA7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZWFyQnRuKHRoaXMuYnRuQnVnZXJOb2RlKVxyXG4gICAgICAgICAgICB0aGlzLmlzTG9ja0J1Z2VyID0gZmFsc2VcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUXVlc3QsIGZhbHNlLCAwLjUpXHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tTbG90QnVnZXIoKVxyXG4gICAgICAgIGlmIChjaGVjayA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGxldCBicmVhZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQnVnZXIpO1xyXG4gICAgICAgIGJyZWFkLnBhcmVudCA9IHRoaXMubGlzdEtoYXlCdWdlci5jaGlsZHJlbltjaGVja107XHJcbiAgICAgICAgYnJlYWQucG9zaXRpb24gPSBjYy52MygzMCwgMTApXHJcbiAgICAgICAgYnJlYWQuZ2V0Q29tcG9uZW50KFwiYnVnZXJcIikudmFsdWUgPSBjaGVja1xyXG4gICAgICAgIHRoaXMuYXJyQnVnZXJbY2hlY2tdID0gYnJlYWRcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzZdLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzddLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucG9zaXRpb25cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDIpXHJcbiAgICB9XHJcbiAgICBzZWxsQnJlYWQodmFsdWUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEN1cyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRQb3AgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0ub3BhY2l0eSA9IDBcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJCcmVha1t2YWx1ZV07XHJcbiAgICAgICAgdGhpcy5hcnJCcmVha1t2YWx1ZV0gPSBudWxsO1xyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmlzVGFyZ2V0UG9wLnBvc2l0aW9uXHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy5pc1RhcmdldFBvcC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc0VuZClcclxuICAgICAgICBwb3NFbmQgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKVxyXG4gICAgICAgIGxldCBwb3MgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoaWxkLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjQsIHsgcG9zaXRpb246IHBvc0VuZC5hZGQoY2MudjMoNTAsIDApKSwgc2NhbGU6IDAuNyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQub3BhY2l0eSA9IDBcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5jaGVja0JyZWFkKGNoaWxkKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLmFkZChjYy52MygwLCA1MCkpLCAxLjUpXHJcbiAgICB9XHJcbiAgICBzZWxsQnVnZXIodmFsdWUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEN1cyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRQb3AgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzhdLm9wYWNpdHkgPSAwXHJcblxyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQnVnZXJbdmFsdWVdO1xyXG4gICAgICAgIHRoaXMuYXJyQnVnZXJbdmFsdWVdID0gbnVsbDtcclxuICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy5pc1RhcmdldFBvcC5wb3NpdGlvblxyXG4gICAgICAgIHBvc0VuZCA9IHRoaXMuaXNUYXJnZXRQb3AucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NFbmQpXHJcbiAgICAgICAgcG9zRW5kID0gY2hpbGQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZClcclxuICAgICAgICBsZXQgcG9zID0gY2hpbGQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGlsZC5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC40LCB7IHBvc2l0aW9uOiBwb3NFbmQuYWRkKGNjLnYzKDUwLCAwKSksIHNjYWxlOiAwLjcgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuY2hlY2tCdWdlcihjaGlsZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLmFkZChjYy52MygwLCA1MCkpLCAxLjUpXHJcbiAgICB9XHJcbiAgICBpc0RlbGF5dHVvbmcgPSBmYWxzZVxyXG5cclxuICAgIGJ0bl90dW9uZ0NhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsYXl0dW9uZykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmFyckJyZWFrLmxlbmd0aCA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGJyZWFkID0gdGhpcy5jaGVja1R1b25nQ2EoKTtcclxuICAgICAgICBpZiAoYnJlYWQgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNEZWxheXR1b25nID0gdHJ1ZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLmlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgbGV0IHBvc1N0YXJ0ID0gYnJlYWQucG9zaXRpb24uYWRkKGNjLnYzKDQwLCAxNTApKTtcclxuICAgICAgICBwb3NTdGFydCA9IGJyZWFkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zU3RhcnQpO1xyXG4gICAgICAgIHBvc1N0YXJ0ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc1N0YXJ0KVxyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLnR1b25nT3QucG9zaXRpb25cclxuICAgICAgICBsZXQgcG9zTWlkID0gY2MudjIoKHBvc1N0YXJ0LnggKyBwb3NFbmQueCkgLyAyLCAocG9zU3RhcnQueSArIHBvc0VuZC55KSAvIDIgKyAxMDApXHJcbiAgICAgICAgdGhpcy50dW9uZ090LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgYnJlYWQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIikuZ2V0VHVvbmdDYSgpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoZXNzZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH0sIDAuMjUpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy50dW9uZ090KS5iZXppZXJUbygwLjUsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSksIGNjLnYyKHBvc01pZC54LCBwb3NNaWQueSksIGNjLnYyKHBvc1N0YXJ0LngsIHBvc1N0YXJ0LnkpKS5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgfSkuZGVsYXkoMC4yKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50dW9uZ090LnBvc2l0aW9uID0gcG9zRW5kXHJcbiAgICAgICAgICAgIHRoaXMudHVvbmdPdC5jaGlsZHJlblswXS5hbmdsZSA9IDBcclxuICAgICAgICAgICAgdGhpcy5pc0RlbGF5dHVvbmcgPSBmYWxzZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICB9XHJcbiAgICBjaGVja1R1b25nQ2EoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckJyZWFrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGxkID0gdGhpcy5hcnJCcmVha1tpXVxyXG4gICAgICAgICAgICBpZiAoY2hsZCAhPSBudWxsICYmIGNobGQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIikuaXNIb3REb2cgPT0gdHJ1ZSAmJiBjaGxkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLmlzVHVvbmdDYSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNobGRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgaXNMb2NrVmVnZXR0YWJsZSA9IHRydWVcclxuXHJcbiAgICBidG5fdmVnZXR0YWJsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xvY2tWZWdldHRhYmxlID09IHRydWUgJiYgZ2xvYmFsVGhpcy5nb2xkID49IDIwMCkge1xyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgLT0gMjAwO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGVhckJ0bih0aGlzLmJ0blZlZ2V0dGFibGVOb2RlKVxyXG4gICAgICAgICAgICB0aGlzLmlzTG9ja1ZlZ2V0dGFibGUgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRRdWVzdCwgZmFsc2UsIDAuNSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXJyQnVnZXIubGVuZ3RoIDw9IDApIHJldHVybjtcclxuICAgICAgICBsZXQgYnJlYWQgPSB0aGlzLmNoZWNrVmVnZXR0YWJsZSgpO1xyXG4gICAgICAgIGlmIChicmVhZCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls5XS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKTtcclxuICAgICAgICBicmVhZC5nZXRDb21wb25lbnQoXCJidWdlclwiKS5nZXRWZWdldHRhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzhdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9LCAwLjMpXHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tWZWdldHRhYmxlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJCdWdlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hsZCA9IHRoaXMuYXJyQnVnZXJbaV1cclxuICAgICAgICAgICAgaWYgKGNobGQgIT0gbnVsbCAmJiBjaGxkLmdldENvbXBvbmVudChcImJ1Z2VyXCIpLmlzTWVhdCA9PSB0cnVlICYmIGNobGQuZ2V0Q29tcG9uZW50KFwiYnVnZXJcIikuaXN2ZWdldHRhYmxlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hsZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjbGlja0hvdERvZyh2YWx1ZSwgbm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFyckJyZWFrLmxlbmd0aCA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGVja0JyZWFkKClcclxuICAgICAgICBpZiAoY2hpbGQgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzVHV0Q2hpbGkgPSB0cnVlO1xyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5hcnJIb3REb2dbdmFsdWVdID0gbnVsbFxyXG4gICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLmdldEhvdERvZygpXHJcbiAgICAgICAgbGV0IHBvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDBcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmRlc3Ryb3koKVxyXG5cclxuICAgICAgICB9LCAwLjEpXHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcywgMS41KVxyXG4gICAgfVxyXG4gICAgY2hlY2tCcmVhZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQnJlYWsubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNobGQgPSB0aGlzLmFyckJyZWFrW2ldXHJcbiAgICAgICAgICAgIGlmIChjaGxkICE9IG51bGwgJiYgY2hsZC5nZXRDb21wb25lbnQoXCJwcmVCcmVhZFwiKS5pc0hvdERvZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNobGRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY2xlYXJNZWF0KCkge1xyXG4gICAgICAgIGxldCBub2RlMSA9IHRoaXMuYXJySG90RG9nWzBdO1xyXG4gICAgICAgIGxldCBub2RlMiA9IHRoaXMuYXJySG90RG9nWzFdO1xyXG4gICAgICAgIHRoaXMuYXJySG90RG9nWzBdID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFyckhvdERvZ1sxXSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlMS5kZXN0cm95KClcclxuICAgICAgICAgICAgbm9kZTIuZGVzdHJveSgpXHJcblxyXG4gICAgICAgIH0sIDAuMSlcclxuICAgIH1cclxuICAgIGNsaWNrTWVhdCh2YWx1ZSwgbm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFyckJ1Z2VyLmxlbmd0aCA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGVja0J1Z2VyKClcclxuICAgICAgICBpZiAoY2hpbGQgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bN10ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bOV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcbiAgICAgICAgICAgIHRoaXMub25CdG4odGhpcy5idG5WZWdldHRhYmxlTm9kZSlcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5hcnJIb3REb2dbdmFsdWVdID0gbnVsbFxyXG4gICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcImJ1Z2VyXCIpLmdldE1lYXQoKVxyXG4gICAgICAgIGxldCBwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBub2RlLm9wYWNpdHkgPSAwXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KClcclxuXHJcbiAgICAgICAgfSwgMC4xKVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDEuNSlcclxuICAgIH1cclxuICAgIGNoZWNrQnVnZXIoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckJ1Z2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGxkID0gdGhpcy5hcnJCdWdlcltpXVxyXG4gICAgICAgICAgICBpZiAoY2hsZCAhPSBudWxsICYmIGNobGQuZ2V0Q29tcG9uZW50KFwiYnVnZXJcIikuaXNNZWF0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hsZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBvbkVuZEdhbWUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV2luLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAvLyAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgLy8gICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLnBvc2l0aW9uID0gY2MudjMoMzAwMCwgMClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLnNjZW5lTXVzaWMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmdldENvbXBvbmVudChcIm1haW5NdXNpY1wiKS5sb2FkRGF0YSgxKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5oYW5kLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLnBvc2l0aW9uID0gY2MudjMoMzAwMCwgMClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmdldENvbXBvbmVudChcIm1haW5NdXNpY1wiKS5sb2FkRGF0YSgyKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLnBvc2l0aW9uID0gY2MudjMoMzAwMCwgMClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4uYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5nZXRDb21wb25lbnQoXCJtYWluR3VuXCIpLmxvYWREYXRhKDEpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU1haW4uYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLnBvc2l0aW9uID0gY2MudjMoMzAwMCwgMClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmdldENvbXBvbmVudChcIm1haW5NdXNpY1wiKS5sb2FkRGF0YSgzKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KFwibWFpbk11c2ljXCIpLmxvYWREYXRhKDQpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSBcIjVcIjpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4ucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLmdldENvbXBvbmVudChcIm1haW5HdW5cIikubG9hZERhdGEoMilcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTWFpbi5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMubGJDb2luLnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTUwKVxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5zY2FsZSA9IChsb2dpYykgPyAxLjYgOiAxXHJcbiAgICAgICAgLy8gdGhpcy5iYXJDb2luLnk9KGxvZ2ljKT80MDA6NDcwXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygtNzAsIDApXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjFcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVHV0Q2hpbGkpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblszXS5vcGFjaXR5ID0gMFxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyQnJlYWsubGVuZ3RoIDw9IDApIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGJyZWFkID0gdGhpcy5jaGVja1R1b25nQ2EoKTtcclxuICAgICAgICAgICAgaWYgKGJyZWFkID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblszXS5vcGFjaXR5ID0gMjU1XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=