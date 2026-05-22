
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/GameDonut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8778zXcBZHvK+TTP4/Ph/t', 'GameDonut');
// scripts/APP/GameDonut.ts

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
        _this.soundChien = null;
        _this.soundBg = null;
        _this.soundWin = null;
        _this.soundLose = null;
        _this.soundHello = null;
        _this.soundHelloCus2 = null;
        _this.soundHelloCus3 = null;
        _this.soundTrans = null;
        _this.soundClick = null;
        _this.soundDonutJump = null;
        _this.soundEnd = null;
        _this.soundSellDone = null;
        _this.tut = null;
        _this.hand = null;
        _this.endCard = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.logo = null;
        _this.listCus = null;
        // @property(cc.Node)
        // listHand: cc.Node = null;
        _this.soundWrong = null;
        _this.soundChienRan = null;
        _this.soundEror = null;
        _this.fxColor = null;
        //new
        _this.btnDonut = null;
        _this.preDonut = null;
        _this.listDonutPlace = null;
        _this.listDonutSub = null;
        _this.listKhayPlace = null;
        _this.listKhaySub = null;
        _this.listhand = null;
        // @property(cc.Node)
        // btnDau: cc.Node = null;
        //isLockVegettable
        _this.preChicken = null;
        _this.listKhayTren = null;
        _this.listRo = [];
        _this.listBoxPlace = null;
        _this.btnChili = null;
        _this.btnHop = null;
        _this.preLike = null;
        _this.likeNode = null;
        _this.preBox = null;
        _this.main = null;
        _this.failNode = null;
        _this.warning = null;
        _this.listPosRo = [cc.v3(-290, -275), cc.v3(8, -278), cc.v3(310, -275)];
        _this.maxKhay = 7;
        _this.arrDonutpos = [];
        _this.arrDonut = [null, null, null, null, null, null, null];
        _this.arrKhay = [null, null, null, null];
        _this.arrKhayPos = [];
        _this.isTutChili = false;
        _this.isTutMeat = false;
        _this.isTutVegetTable = false;
        _this.isTutClickMeat = false;
        _this.isTargetPop = null;
        _this.isStep = 0;
        _this.isTargetCus = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.idSound = null;
        _this.isClickDonut = false;
        _this.isClickDonutChin = false;
        _this.isClickSocola = false;
        _this.isReadyChicken = false;
        _this.isFirstBox = false;
        _this.countDonut = 0;
        _this.isClickKhay = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.showCus();
        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.3);
        this.idSound = cc.audioEngine.play(this.soundChien, true, 0.5);
        var _loop_1 = function (i) {
            var ro = this_1.listRo[i];
            var _loop_2 = function (j) {
                this_1.scheduleOnce(function () {
                    var ga = ro.children[j];
                    ga.opacity = 0;
                    ga.active = true;
                    var localPos = ga.position;
                    ga.position = localPos.add(cc.v3(0, 200));
                    cc.tween(ga).to(0.1, { opacity: 255 }).start();
                    cc.tween(ga).to(0.2, { position: localPos }).to(0.05, { scale: 1.3 }).to(0.05, { scale: 1.4 }).call(function () {
                        if (i == 0) {
                            cc.audioEngine.play(_this.soundClick, false, 1);
                        }
                        if (i == _this.listRo.length - 1 && j == ro.childrenCount - 1) {
                            _this.actionKhay();
                        }
                    }).start();
                }, 0.15 * j);
            };
            for (var j = 0; j < ro.childrenCount; j++) {
                _loop_2(j);
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.listRo.length; i++) {
            _loop_1(i);
        }
        this.btnChili.zIndex = 2;
    };
    NewClass.prototype.actionKhay = function () {
        var _this = this;
        var _loop_3 = function (i) {
            var ro = this_2.listRo[i];
            cc.tween(ro).to(0.25, { position: { value: this_2.listPosRo[i], easing: "sineIn" } }).call(function () {
                if (i == _this.listRo.length - 1) {
                    cc.audioEngine.play(_this.soundChienRan, false, 1);
                }
            }).start();
        };
        var this_2 = this;
        for (var i = 0; i < this.listRo.length; i++) {
            _loop_3(i);
        }
        this.scheduleOnce(function () {
            _this.actionChicken();
        }, 0.2);
    };
    NewClass.prototype.actionChicken = function () {
        for (var i = 0; i < this.listRo.length; i++) {
            var ro = this.listRo[i];
            for (var j = 0; j < ro.childrenCount; j++) {
                var ga = ro.children[j];
                ga.getComponent("donut").show();
            }
        }
        this.btnHop.active = true;
    };
    NewClass.prototype.spawDisLike = function () {
        var _this = this;
        var arrPos = [cc.v3(-110.292), cc.v3(199, 329), cc.v3(-93, 342), cc.v3(180, 362), cc.v3(-110.292), cc.v3(199, 329)];
        var _loop_4 = function (i) {
            this_3.scheduleOnce(function () {
                var like = cc.instantiate(_this.preLike);
                var pos = cc.v3(0, 0);
                pos = arrPos[i];
                like.position = pos;
                like.parent = _this.likeNode;
                cc.tween(like).by(0.6, { position: cc.v3(0, -200) }).start();
                cc.tween(like).delay(0.4).to(0.2, { opacity: 0 }).call(function () {
                    like.destroy();
                }).start();
            }, 0.15 * i);
        };
        var this_3 = this;
        for (var i = 0; i < 6; i++) {
            _loop_4(i);
        }
    };
    NewClass.prototype.showCus = function () {
        var _this = this;
        var child = this.listCus.children[0];
        child.position = cc.v3(700, 123.591);
        cc.tween(child).to(0.8, { position: cc.v3(0, 123.591) }).call(function () {
            child.getChildByName("pop").scale = 0;
            child.getChildByName("pop").active = true;
            child.children[1].getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            _this.isTargetPop = child.getChildByName("pop");
            _this.isTargetCus = child;
            cc.audioEngine.play(_this.soundHello, false, 4);
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundShowPop, false, 1);
            }, 0.1);
            // this.btnDonut.getComponent(cc.Button).enabled = true
            _this.scheduleOnce(function () {
                if (_this.isClickDonut == false) {
                    _this.listhand.children[0].active = true;
                }
            }, 3);
        }).start();
    };
    NewClass.prototype.successCus = function () {
        var _this = this;
        this.isTargetCus = null;
        this.isTargetPop = null;
        this.scheduleOnce(function () {
            if (_this.countCus == 2) {
                _this.onEndGame(false);
            }
        }, 1.5);
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
        // this.btnDau.active = true
        if (this.countCus == 3) {
            // this.onEndGame(value)
        }
        else {
            var child_1 = this.listCus.children[this.countCus];
            child_1.position = cc.v3(700, 123.591);
            child_1.active = true;
            cc.tween(child_1).to(0.8, { position: cc.v3(0, 123.591) }).call(function () {
                child_1.getChildByName("pop").scale = 0;
                child_1.getChildByName("pop").active = true;
                child_1.children[1].getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                _this.isTargetPop = child_1.getChildByName("pop");
                _this.isTargetCus = child_1;
                _this.scheduleOnce(function () {
                    cc.audioEngine.play(_this.soundShowPop, false, 1);
                    if (_this.countCus == 1) {
                        cc.audioEngine.play(_this.soundHelloCus2, false, 2);
                    }
                    else if (_this.countCus == 2) {
                        cc.audioEngine.play(_this.soundHelloCus3, false, 2);
                    }
                    var box = cc.instantiate(_this.preBox);
                    box.parent = _this.main;
                    box.zIndex = 1;
                    box.position = cc.v3(-175, -559);
                    _this.btnHop = box;
                    _this.arrKhay = [null, null, null, null];
                    _this.listBoxPlace = box.getChildByName("listGa");
                    _this.btnChili.getComponent("chili").sauce = box.getChildByName("sot");
                }, 0.1);
            }).start();
        }
    };
    NewClass.prototype.btn_donut = function (event) {
        var _this = this;
        var check = this.checkSlotDonut();
        if (check == null)
            return;
        this.isClickDonut = true;
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
        cc.audioEngine.play(this.soundClick, false, 1);
        var donut = cc.instantiate(this.preChicken);
        donut.parent = this.listBoxPlace;
        donut.position = this.listBoxPlace.children[check].position;
        donut.getComponent("donut").value = check;
        donut.scale = 1.4;
        this.arrDonut[check] = donut;
        // this.scheduleOnce(() => {
        //     donut.children[0].active = false
        //     donut.getComponent(cc.Animation).play("donut_idle")
        // }, 1)
        this.scheduleOnce(function () {
            _this.listhand.children[0].active = false;
        }, 1);
        this.scheduleOnce(function () {
            if (_this.isClickDonutChin == false) {
                _this.listhand.children[1].active = true;
            }
        }, 3);
        // let pos = event.currentTarget.position
    };
    NewClass.prototype.checkSlotDonut = function () {
        for (var i = 0; i < this.arrDonut.length; i++) {
            if (this.arrDonut[i] == null)
                return i;
        }
        return null;
    };
    NewClass.prototype.checkSlotKhay = function () {
        for (var i = 0; i < this.arrKhay.length; i++) {
            var chld = this.arrKhay[i];
            if (chld == null) {
                return i;
            }
        }
        return null;
    };
    NewClass.prototype.setReadyChicken = function () {
        var _this = this;
        this.isReadyChicken = true;
        if (!this.isFirstBox) {
            this.scheduleOnce(function () {
                _this.btnHop.getChildByName("hand").active = true;
            }, 2);
            this.isFirstBox = true;
        }
    };
    NewClass.prototype.btn_clickHop = function () {
        if (!this.isReadyChicken)
            return;
        if (this.isTargetCus == null)
            return;
        if (this.isTargetPop == null)
            return;
        this.isReadyChicken = false;
        if (this.btnHop.getChildByName("hand")) {
            this.btnHop.getChildByName("hand").opacity = 0;
        }
        // this.listHand.children[4].opacity = 0
        this.listhand.children[3].active = false;
        this.isClickKhay = true;
        var dn = this.btnHop;
        dn.getComponent(cc.Button).enabled = false;
        cc.audioEngine.play(this.soundTrans, false, 1);
        var child = this.btnHop;
        // this.arrKhay[value] = null;
        var posEnd = this.isTargetPop.position;
        posEnd = this.isTargetPop.parent.convertToWorldSpaceAR(posEnd);
        posEnd = child.parent.convertToNodeSpaceAR(posEnd);
        var pos = child.parent.convertToWorldSpaceAR(child.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        cc.tween(child).to(0.4, { position: posEnd.add(cc.v3(0, 0)), scale: 0.6 }).call(function () {
            child.opacity = 0;
        }).start();
        if (this.isTargetCus) {
            this.isTargetCus.getComponent("cusMission").checkSell(child);
        }
        this.creatFxColor(pos.add(cc.v3(0, 50)), 1.5);
    };
    NewClass.prototype.clickDonut = function (value, node) {
        var slot = this.checkSlotKhay();
        if (slot == null) {
            node.getComponent("donut").isTouching = false;
            this.btnHop.children[0].getComponent(cc.Animation).play();
            return;
        }
        node.getComponent("donut").isStep = 1;
        this.listhand.children[0].opacity = 0;
        console.log("click donut");
        this.isClickDonutChin = true;
        // this.listhand.children[1].active = false
        cc.audioEngine.play(this.soundDonutJump, false, 0.6);
        var poslocal = node.parent.convertToWorldSpaceAR(node.position);
        poslocal = this.listBoxPlace.convertToNodeSpaceAR(poslocal);
        var donut = node;
        var pos = this.listBoxPlace.children[slot].position;
        donut.parent = this.listBoxPlace;
        this.arrKhay[slot] = donut;
        this.arrDonut[value] = null;
        donut.zIndex = 100;
        donut.position = poslocal;
        donut.getComponent("donut").value = slot;
        var startpos = cc.v2(poslocal.x, poslocal.y);
        var endPos = cc.v2(pos.x, pos.y);
        var midPos = cc.v2(endPos.x, endPos.y + 400);
        cc.tween(donut).bezierTo(0.3, startpos, midPos, endPos).start();
        cc.tween(donut).to(0.3, { angle: this.listBoxPlace.children[slot].angle, scale: 1.1 }).start();
        this.scheduleOnce(function () {
            donut.zIndex = slot;
        }, 0.2);
        this.countDonut++;
        if (this.countDonut == 4 || this.countDonut == 8 || this.countDonut == 12) {
            this.showHindChili();
        }
    };
    NewClass.prototype.showHindChili = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.btnChili.children[0].active = true;
            _this.scheduleOnce(function () {
                _this.btnChili.getChildByName("hand").active = true;
            }, 3);
            _this.btnChili.getComponent(cc.Button).enabled = true;
        }, 0.3);
    };
    NewClass.prototype.checkSlotNhan = function () {
        for (var i = 0; i < this.arrKhay.length; i++) {
            var donut = this.arrKhay[i];
            if (donut != null && donut.getComponent("donut").isStep == 1) {
                return i;
            }
        }
        return null;
    };
    NewClass.prototype.btn_chocalate = function (event) {
        var check = this.checkSlotNhan();
        if (check == null)
            return;
        if (this.btnHop.getComponent("boxChicken").isSauce == true)
            return;
        this.btnHop.getComponent("boxChicken").isSauce = true;
        // this.listhand.children[2].active = false
        this.btnChili.getChildByName("hand").opacity = 0;
        this.btnChili.getComponent(cc.Animation).play();
        this.isClickSocola = true;
        // cc.audioEngine.play(this.soundTrans, false, 1)
        // let donut = this.arrKhay[check]
        // this.arrKhay[check] = null;
        // donut.getComponent("donut").onSocola()
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
        // this.scheduleOnce(() => {
        //     if (this.isClickKhay == false) {
        //         this.listhand.children[3].active = true
        //     }
        // }, 3)
    };
    // btn_dau(event) {
    //     let check = this.checkSlotNhan()
    //     if (check == null) return;
    //     cc.audioEngine.play(this.soundTrans, false, 1)
    //     let donut = this.arrKhay[check]
    //     // this.arrKhay[check] = null;
    //     donut.getComponent("donut").onDau()
    //     let pos = event.currentTarget.position
    //     this.creatFxColor(pos, 2)
    // }
    NewClass.prototype.sellDonut = function (value, dn) {
        // console.log(value)
        if (this.isTargetCus == null)
            return;
        if (this.isTargetPop == null)
            return;
        // this.listHand.children[4].opacity = 0
        this.listhand.children[3].active = false;
        this.isClickKhay = true;
        dn.getComponent(cc.Button).enabled = false;
        cc.audioEngine.play(this.soundTrans, false, 1);
        var child = this.arrKhay[value];
        this.arrKhay[value] = null;
        var posEnd = this.isTargetPop.position;
        posEnd = this.isTargetPop.parent.convertToWorldSpaceAR(posEnd);
        posEnd = child.parent.convertToNodeSpaceAR(posEnd);
        var pos = child.parent.convertToWorldSpaceAR(child.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        cc.tween(child).to(0.4, { position: posEnd.add(cc.v3(0, 0)), scale: 0.7 }).call(function () {
            child.opacity = 0;
        }).start();
        if (this.isTargetCus) {
            this.isTargetCus.getComponent("cusMission").checkSell(child);
        }
        this.creatFxColor(pos.add(cc.v3(0, 50)), 1.5);
    };
    NewClass.prototype.setGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.offGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.onEndGame = function (value) {
        var _this = this;
        // cc.audioEngine.play(this.soundEnd, false, 1)
        if (value == true) {
            cc.audioEngine.play(this.soundWin, false, 1);
        }
        else {
            cc.audioEngine.stop(this.idSound);
            cc.audioEngine.play(this.soundLose, false, 1);
        }
        this.failNode.active = true;
        this.scheduleOnce(function () {
            _this.failNode.children[0].active = false;
            cc.tween(_this.failNode.children[1]).to(0.3, { scale: 0 }).start();
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundEnd, false, 1);
                _this.endCard.active = true;
                _this.linkToStore.active = true;
            }, 1);
        }, 1.2);
    };
    // btn_choose(event, value) {
    NewClass.prototype.update = function (dt) {
        // this.lbCoin.string = globalThis.gold.toString()
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
        this.failNode.scale = (logic) ? 1 : 0.7;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        this.logo.getComponent(cc.Widget).top = 40.63;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.camera.node.position = cc.v3(0, -60);
        this.listCus.scale = (logic) ? 1.2 : 1;
        this.listCus.position = (logic) ? cc.v3(0, -130) : cc.v3(0, -120);
        if (logic == true) {
            this.logo.getComponent(cc.Widget).top = 150;
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            this.camera.node.position = cc.v3(0, 90);
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 2;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.camera.zoomRatio = 2.38;
                this.logo.getComponent(cc.Widget).top = 180;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.6;
                this.camera.node.position = cc.v3(0, 150);
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
                this.camera.zoomRatio = 0.9;
                this.camera.node.position = cc.v3(0, -20);
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
    ], NewClass.prototype, "soundChien", void 0);
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
    ], NewClass.prototype, "soundHello", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHelloCus2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHelloCus3", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundTrans", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundDonutJump", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEnd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSellDone", void 0);
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
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChienRan", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEror", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "fxColor", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnDonut", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDonut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listDonutPlace", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listDonutSub", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKhayPlace", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKhaySub", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listhand", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preChicken", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKhayTren", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listRo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBoxPlace", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnChili", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnHop", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preLike", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "likeNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBox", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "main", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "failNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "warning", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwbUJDO1FBeG1CRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUc1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QTFtQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuZ29sZCA9IDBcclxuZ2xvYmFsVGhpcy5zY0dhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoaWVuOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERvbnV0SnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoaWVuUmFuOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRFcm9yOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGZ4Q29sb3I6IGNjLlByZWZhYiA9IG51bGxcclxuXHJcbiAgICAvL25ld1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Eb251dDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVEb251dDogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0RG9udXRQbGFjZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3REb251dFN1YjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RLaGF5UGxhY2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0S2hheVN1YjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGJ0bkRhdTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy9pc0xvY2tWZWdldHRhYmxlXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ2hpY2tlbjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtoYXlUcmVuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFJvOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEJveFBsYWNlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQ2hpbGk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Ib3A6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUxpa2U6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpa2VOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVCb3g6IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFpbjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmFpbE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGxpc3RQb3NSbyA9IFtjYy52MygtMjkwLCAtMjc1KSwgY2MudjMoOCwgLTI3OCksIGNjLnYzKDMxMCwgLTI3NSldXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIG1heEtoYXkgPSA3XHJcblxyXG4gICAgYXJyRG9udXRwb3MgPSBbXVxyXG4gICAgYXJyRG9udXQgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIGFycktoYXkgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIGFycktoYXlQb3MgPSBbXVxyXG4gICAgaXNUdXRDaGlsaSA9IGZhbHNlXHJcbiAgICBpc1R1dE1lYXQgPSBmYWxzZVxyXG4gICAgaXNUdXRWZWdldFRhYmxlID0gZmFsc2VcclxuICAgIGlzVHV0Q2xpY2tNZWF0ID0gZmFsc2VcclxuXHJcblxyXG4gICAgaXNUYXJnZXRQb3AgPSBudWxsO1xyXG4gICAgaXNTdGVwID0gMFxyXG4gICAgaXNUYXJnZXRDdXMgPSBudWxsO1xyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIGNvdW50Q3VzID0gMFxyXG4gICAgaWRTb3VuZCA9IG51bGxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNob3dDdXMoKVxyXG4gICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjMpXHJcbiAgICAgICAgdGhpcy5pZFNvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hpZW4sIHRydWUsIDAuNSlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFJvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBybyA9IHRoaXMubGlzdFJvW2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvLmNoaWxkcmVuQ291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnYSA9IHJvLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gZ2EucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgZ2EucG9zaXRpb24gPSBsb2NhbFBvcy5hZGQoY2MudjMoMCwgMjAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oZ2EpLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihnYSkudG8oMC4yLCB7IHBvc2l0aW9uOiBsb2NhbFBvcyB9KS50bygwLjA1LCB7IHNjYWxlOiAxLjMgfSkudG8oMC4wNSwgeyBzY2FsZTogMS40IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMubGlzdFJvLmxlbmd0aCAtIDEgJiYgaiA9PSByby5jaGlsZHJlbkNvdW50IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25LaGF5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwLjE1ICogailcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idG5DaGlsaS56SW5kZXggPSAyXHJcbiAgICB9XHJcbiAgICBhY3Rpb25LaGF5KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Um8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvID0gdGhpcy5saXN0Um9baV07XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHJvKS50bygwLjI1LCB7IHBvc2l0aW9uOiB7IHZhbHVlOiB0aGlzLmxpc3RQb3NSb1tpXSwgZWFzaW5nOiBcInNpbmVJblwiIH0gfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLmxpc3RSby5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hpZW5SYW4sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25DaGlja2VuKClcclxuXHJcbiAgICAgICAgfSwgMC4yKVxyXG4gICAgfVxyXG4gICAgYWN0aW9uQ2hpY2tlbigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFJvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBybyA9IHRoaXMubGlzdFJvW2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvLmNoaWxkcmVuQ291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdhID0gcm8uY2hpbGRyZW5bal07XHJcbiAgICAgICAgICAgICAgICBnYS5nZXRDb21wb25lbnQoXCJkb251dFwiKS5zaG93KClcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnRuSG9wLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIHNwYXdEaXNMaWtlKCkge1xyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjMoLTExMC4yOTIpLCBjYy52MygxOTksIDMyOSksIGNjLnYzKC05MywgMzQyKSwgY2MudjMoMTgwLCAzNjIpLCBjYy52MygtMTEwLjI5MiksIGNjLnYzKDE5OSwgMzI5KV1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlrZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlTGlrZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjMoMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zID0gYXJyUG9zW2ldO1xyXG4gICAgICAgICAgICAgICAgbGlrZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgICAgICAgICAgbGlrZS5wYXJlbnQgPSB0aGlzLmxpa2VOb2RlXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihsaWtlKS5ieSgwLjYsIHsgcG9zaXRpb246IGNjLnYzKDAsIC0yMDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGxpa2UpLmRlbGF5KDAuNCkudG8oMC4yLCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgMC4xNSAqIGkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dDdXMoKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuWzBdXHJcbiAgICAgICAgY2hpbGQucG9zaXRpb24gPSBjYy52Myg3MDAsIDEyMy41OTEpXHJcbiAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMTIzLjU5MSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLnNjYWxlID0gMFxyXG5cclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjaGlsZC5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldFBvcCA9IGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBjaGlsZDtcclxuXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhlbGxvLCBmYWxzZSwgNClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIH0sIDAuMSlcclxuICAgICAgICAgICAgLy8gdGhpcy5idG5Eb251dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NsaWNrRG9udXQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RoYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDMpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgIH1cclxuICAgIHN1Y2Nlc3NDdXMoKSB7XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW5kR2FtZShmYWxzZSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxLjUpXHJcblxyXG5cclxuICAgIH1cclxuICAgIGNyZWF0RnhDb2xvcihwb3MsIHNjYWxlKSB7XHJcbiAgICAgICAgbGV0IHByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZnhDb2xvcilcclxuICAgICAgICBwcmUucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgcHJlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgcHJlLnNjYWxlID0gc2NhbGVcclxuICAgIH1cclxuICAgIG5leHRDdXModmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICAvLyB0aGlzLmJ0bkRhdS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09IDMpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5vbkVuZEdhbWUodmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5jb3VudEN1c11cclxuICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBjYy52Myg3MDAsIDEyMy41OTEpXHJcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMTIzLjU5MSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5zY2FsZSA9IDBcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNoaWxkLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRQb3AgPSBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGVsbG9DdXMyLCBmYWxzZSwgMilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jb3VudEN1cyA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhlbGxvQ3VzMywgZmFsc2UsIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib3ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUJveClcclxuICAgICAgICAgICAgICAgICAgICBib3gucGFyZW50ID0gdGhpcy5tYWluXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LnpJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LnBvc2l0aW9uID0gY2MudjMoLTE3NSwgLTU1OSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkhvcCA9IGJveFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyS2hheSA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEJveFBsYWNlID0gYm94LmdldENoaWxkQnlOYW1lKFwibGlzdEdhXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5DaGlsaS5nZXRDb21wb25lbnQoXCJjaGlsaVwiKS5zYXVjZSA9IGJveC5nZXRDaGlsZEJ5TmFtZShcInNvdFwiKVxyXG4gICAgICAgICAgICAgICAgfSwgMC4xKVxyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpc0NsaWNrRG9udXQgPSBmYWxzZVxyXG4gICAgYnRuX2RvbnV0KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja1Nsb3REb251dCgpXHJcbiAgICAgICAgaWYgKGNoZWNrID09IG51bGwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzQ2xpY2tEb251dCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucG9zaXRpb25cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDIpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIGxldCBkb251dCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ2hpY2tlbik7XHJcbiAgICAgICAgZG9udXQucGFyZW50ID0gdGhpcy5saXN0Qm94UGxhY2U7XHJcbiAgICAgICAgZG9udXQucG9zaXRpb24gPSB0aGlzLmxpc3RCb3hQbGFjZS5jaGlsZHJlbltjaGVja10ucG9zaXRpb25cclxuICAgICAgICBkb251dC5nZXRDb21wb25lbnQoXCJkb251dFwiKS52YWx1ZSA9IGNoZWNrXHJcbiAgICAgICAgZG9udXQuc2NhbGUgPSAxLjRcclxuICAgICAgICB0aGlzLmFyckRvbnV0W2NoZWNrXSA9IGRvbnV0XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBkb251dC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIC8vICAgICBkb251dC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9udXRfaWRsZVwiKVxyXG4gICAgICAgIC8vIH0sIDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RoYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2xpY2tEb251dENoaW4gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMylcclxuICAgICAgICAvLyBsZXQgcG9zID0gZXZlbnQuY3VycmVudFRhcmdldC5wb3NpdGlvblxyXG4gICAgfVxyXG4gICAgaXNDbGlja0RvbnV0Q2hpbiA9IGZhbHNlXHJcbiAgICBpc0NsaWNrU29jb2xhID0gZmFsc2VcclxuICAgIGNoZWNrU2xvdERvbnV0KCkgey8va2llbSB0cmEgY28gZG9udXQgdHJlbiBjaGFvIGtvXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckRvbnV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyckRvbnV0W2ldID09IG51bGwpIHJldHVybiBpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjaGVja1Nsb3RLaGF5KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJLaGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGxkID0gdGhpcy5hcnJLaGF5W2ldXHJcbiAgICAgICAgICAgIGlmIChjaGxkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGlzUmVhZHlDaGlja2VuID0gZmFsc2VcclxuICAgIGlzRmlyc3RCb3ggPSBmYWxzZVxyXG4gICAgc2V0UmVhZHlDaGlja2VuKCkge1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeUNoaWNrZW4gPSB0cnVlO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Qm94KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuSG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Qm94ID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ0bl9jbGlja0hvcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeUNoaWNrZW4pIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEN1cyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRQb3AgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeUNoaWNrZW4gPSBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmJ0bkhvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Ib3AuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLmxpc3RoYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc0NsaWNrS2hheSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGRuID0gdGhpcy5idG5Ib3BcclxuICAgICAgICBkbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUcmFucywgZmFsc2UsIDEpXHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5idG5Ib3BcclxuICAgICAgICAvLyB0aGlzLmFycktoYXlbdmFsdWVdID0gbnVsbDtcclxuICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy5pc1RhcmdldFBvcC5wb3NpdGlvblxyXG4gICAgICAgIHBvc0VuZCA9IHRoaXMuaXNUYXJnZXRQb3AucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NFbmQpXHJcbiAgICAgICAgcG9zRW5kID0gY2hpbGQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZClcclxuICAgICAgICBsZXQgcG9zID0gY2hpbGQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGlsZC5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC40LCB7IHBvc2l0aW9uOiBwb3NFbmQuYWRkKGNjLnYzKDAsIDApKSwgc2NhbGU6IDAuNiB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQub3BhY2l0eSA9IDBcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5jaGVja1NlbGwoY2hpbGQpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MuYWRkKGNjLnYzKDAsIDUwKSksIDEuNSlcclxuICAgIH1cclxuICAgIGNvdW50RG9udXQgPSAwXHJcbiAgICBjbGlja0RvbnV0KHZhbHVlLCBub2RlKSB7XHJcblxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5jaGVja1Nsb3RLaGF5KClcclxuICAgICAgICBpZiAoc2xvdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFwiZG9udXRcIikuaXNUb3VjaGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYnRuSG9wLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFwiZG9udXRcIikuaXNTdGVwID0gMVxyXG4gICAgICAgIHRoaXMubGlzdGhhbmQuY2hpbGRyZW5bMF0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGljayBkb251dFwiKVxyXG4gICAgICAgIHRoaXMuaXNDbGlja0RvbnV0Q2hpbiA9IHRydWVcclxuICAgICAgICAvLyB0aGlzLmxpc3RoYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRG9udXRKdW1wLCBmYWxzZSwgMC42KVxyXG4gICAgICAgIGxldCBwb3Nsb2NhbCA9IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3Nsb2NhbCA9IHRoaXMubGlzdEJveFBsYWNlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2xvY2FsKVxyXG4gICAgICAgIGxldCBkb251dCA9IG5vZGVcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0Qm94UGxhY2UuY2hpbGRyZW5bc2xvdF0ucG9zaXRpb25cclxuICAgICAgICBkb251dC5wYXJlbnQgPSB0aGlzLmxpc3RCb3hQbGFjZVxyXG4gICAgICAgIHRoaXMuYXJyS2hheVtzbG90XSA9IGRvbnV0XHJcbiAgICAgICAgdGhpcy5hcnJEb251dFt2YWx1ZV0gPSBudWxsXHJcbiAgICAgICAgZG9udXQuekluZGV4ID0gMTAwXHJcbiAgICAgICAgZG9udXQucG9zaXRpb24gPSBwb3Nsb2NhbFxyXG4gICAgICAgIGRvbnV0LmdldENvbXBvbmVudChcImRvbnV0XCIpLnZhbHVlID0gc2xvdFxyXG5cclxuICAgICAgICBsZXQgc3RhcnRwb3MgPSBjYy52Mihwb3Nsb2NhbC54LCBwb3Nsb2NhbC55KTtcclxuICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIocG9zLngsIHBvcy55KVxyXG4gICAgICAgIGxldCBtaWRQb3MgPSBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkgKyA0MDApXHJcbiAgICAgICAgY2MudHdlZW4oZG9udXQpLmJlemllclRvKDAuMywgc3RhcnRwb3MsIG1pZFBvcywgZW5kUG9zKS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4oZG9udXQpLnRvKDAuMywgeyBhbmdsZTogdGhpcy5saXN0Qm94UGxhY2UuY2hpbGRyZW5bc2xvdF0uYW5nbGUsIHNjYWxlOiAxLjEgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgZG9udXQuekluZGV4ID0gc2xvdFxyXG5cclxuICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgdGhpcy5jb3VudERvbnV0KytcclxuICAgICAgICBpZiAodGhpcy5jb3VudERvbnV0ID09IDQgfHwgdGhpcy5jb3VudERvbnV0ID09IDggfHwgdGhpcy5jb3VudERvbnV0ID09IDEyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0hpbmRDaGlsaSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNob3dIaW5kQ2hpbGkoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkNoaWxpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5DaGlsaS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfSwgMylcclxuICAgICAgICAgICAgdGhpcy5idG5DaGlsaS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIH0sIDAuMylcclxuXHJcbiAgICB9XHJcbiAgICBjaGVja1Nsb3ROaGFuKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJLaGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkb251dCA9IHRoaXMuYXJyS2hheVtpXVxyXG4gICAgICAgICAgICBpZiAoZG9udXQgIT0gbnVsbCAmJiBkb251dC5nZXRDb21wb25lbnQoXCJkb251dFwiKS5pc1N0ZXAgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgYnRuX2Nob2NhbGF0ZShldmVudCkge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tTbG90TmhhbigpXHJcbiAgICAgICAgaWYgKGNoZWNrID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5idG5Ib3AuZ2V0Q29tcG9uZW50KFwiYm94Q2hpY2tlblwiKS5pc1NhdWNlID09IHRydWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJ0bkhvcC5nZXRDb21wb25lbnQoXCJib3hDaGlja2VuXCIpLmlzU2F1Y2UgPSB0cnVlXHJcbiAgICAgICAgLy8gdGhpcy5saXN0aGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYnRuQ2hpbGkuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuYnRuQ2hpbGkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgdGhpcy5pc0NsaWNrU29jb2xhID0gdHJ1ZVxyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRyYW5zLCBmYWxzZSwgMSlcclxuICAgICAgICAvLyBsZXQgZG9udXQgPSB0aGlzLmFycktoYXlbY2hlY2tdXHJcbiAgICAgICAgLy8gdGhpcy5hcnJLaGF5W2NoZWNrXSA9IG51bGw7XHJcbiAgICAgICAgLy8gZG9udXQuZ2V0Q29tcG9uZW50KFwiZG9udXRcIikub25Tb2NvbGEoKVxyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLCAyKVxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pc0NsaWNrS2hheSA9PSBmYWxzZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5saXN0aGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LCAzKVxyXG4gICAgfVxyXG5cclxuICAgIGlzQ2xpY2tLaGF5ID0gZmFsc2VcclxuICAgIC8vIGJ0bl9kYXUoZXZlbnQpIHtcclxuICAgIC8vICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrU2xvdE5oYW4oKVxyXG4gICAgLy8gICAgIGlmIChjaGVjayA9PSBudWxsKSByZXR1cm47XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVHJhbnMsIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICBsZXQgZG9udXQgPSB0aGlzLmFycktoYXlbY2hlY2tdXHJcbiAgICAvLyAgICAgLy8gdGhpcy5hcnJLaGF5W2NoZWNrXSA9IG51bGw7XHJcbiAgICAvLyAgICAgZG9udXQuZ2V0Q29tcG9uZW50KFwiZG9udXRcIikub25EYXUoKVxyXG4gICAgLy8gICAgIGxldCBwb3MgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBvc2l0aW9uXHJcbiAgICAvLyAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLCAyKVxyXG4gICAgLy8gfVxyXG4gICAgc2VsbERvbnV0KHZhbHVlLCBkbikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldFBvcCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgLy8gdGhpcy5saXN0SGFuZC5jaGlsZHJlbls0XS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMubGlzdGhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzQ2xpY2tLaGF5ID0gdHJ1ZTtcclxuICAgICAgICBkbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUcmFucywgZmFsc2UsIDEpXHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJLaGF5W3ZhbHVlXTtcclxuICAgICAgICB0aGlzLmFycktoYXlbdmFsdWVdID0gbnVsbDtcclxuICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy5pc1RhcmdldFBvcC5wb3NpdGlvblxyXG4gICAgICAgIHBvc0VuZCA9IHRoaXMuaXNUYXJnZXRQb3AucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NFbmQpXHJcbiAgICAgICAgcG9zRW5kID0gY2hpbGQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZClcclxuICAgICAgICBsZXQgcG9zID0gY2hpbGQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGlsZC5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC40LCB7IHBvc2l0aW9uOiBwb3NFbmQuYWRkKGNjLnYzKDAsIDApKSwgc2NhbGU6IDAuNyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQub3BhY2l0eSA9IDBcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5jaGVja1NlbGwoY2hpbGQpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MuYWRkKGNjLnYzKDAsIDUwKSksIDEuNSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0R3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLWdyYXktc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG5cclxuICAgIH1cclxuICAgIG9mZkdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBvbkVuZEdhbWUodmFsdWUpIHtcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvc2UsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mYWlsTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYWlsTm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZhaWxOb2RlLmNoaWxkcmVuWzFdKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfSwgMSlcclxuXHJcbiAgICAgICAgfSwgMS4yKVxyXG5cclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gdGhpcy5sYkNvaW4uc3RyaW5nID0gZ2xvYmFsVGhpcy5nb2xkLnRvU3RyaW5nKClcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDFcclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcbiAgICAgICAgdGhpcy5mYWlsTm9kZS5zY2FsZSA9IChsb2dpYykgPyAxIDogMC43XHJcblxyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNDAuNjNcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTYwKVxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAxXHJcbiAgICAgICAgdGhpcy5saXN0Q3VzLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIC0xMzApIDogY2MudjMoMCwgLTEyMClcclxuXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDE1MFxyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCA5MClcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDJcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMi4zOFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDE4MFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjZcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAxNTApXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0yMClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=