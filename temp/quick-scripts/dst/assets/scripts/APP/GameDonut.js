
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
        _this.arrRo = [];
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
            this_1.arrRo[i] = [];
            var _loop_2 = function (j) {
                this_1.scheduleOnce(function () {
                    var ga = ro.children[j];
                    ga.opacity = 0;
                    ga.active = true;
                    var localPos = ga.position;
                    ga.position = localPos.add(cc.v3(0, 200));
                    ga.getComponent("donut").tagKhay = i;
                    _this.arrRo[i][j] = ga;
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
    NewClass.prototype.clickDonut = function (value, node, tagKhay) {
        var _this = this;
        var slot = this.checkSlotKhay();
        if (slot == null) {
            node.getComponent("donut").isTouching = false;
            this.btnHop.children[0].getComponent(cc.Animation).play();
            return;
        }
        var _loop_5 = function (i) {
            this_4.countDonut++;
            var child = this_4.arrRo[tagKhay][i];
            var childComp = child.getComponent("donut");
            childComp.isReady = false;
            childComp.isStep = 1;
            cc.audioEngine.play(this_4.soundDonutJump, false, 0.6);
            this_4.scheduleOnce(function () {
                var poslocal = child.parent.convertToWorldSpaceAR(child.position);
                poslocal = _this.listBoxPlace.convertToNodeSpaceAR(poslocal);
                var donut = child;
                var pos = _this.listBoxPlace.children[i].position;
                donut.parent = _this.listBoxPlace;
                _this.arrKhay[i] = donut;
                _this.arrDonut[value] = null;
                donut.zIndex = 100;
                donut.position = poslocal;
                donut.getComponent("donut").value = i;
                var startpos = cc.v2(poslocal.x, poslocal.y);
                var endPos = cc.v2(pos.x, pos.y);
                var midPos = cc.v2(endPos.x, endPos.y + 400);
                cc.tween(donut).bezierTo(0.3, startpos, midPos, endPos).start();
                cc.tween(donut).to(0.3, { angle: _this.listBoxPlace.children[i].angle, scale: 1.1 }).start();
                _this.scheduleOnce(function () {
                    donut.zIndex = slot;
                }, 0.2);
            }, 0.1 * i);
        };
        var this_4 = this;
        for (var i = 0; i < this.arrRo[tagKhay].length; i++) {
            _loop_5(i);
        }
        // node.getComponent("donut").isStep = 1
        this.listhand.children[0].opacity = 0;
        this.isClickDonutChin = true;
        // cc.audioEngine.play(this.soundDonutJump, false, 0.6)
        // let poslocal = node.parent.convertToWorldSpaceAR(node.position);
        // poslocal = this.listBoxPlace.convertToNodeSpaceAR(poslocal)
        // let donut = node
        // let pos = this.listBoxPlace.children[slot].position
        // donut.parent = this.listBoxPlace
        // this.arrKhay[slot] = donut
        // this.arrDonut[value] = null
        // donut.zIndex = 100
        // donut.position = poslocal
        // donut.getComponent("donut").value = slot
        // let startpos = cc.v2(poslocal.x, poslocal.y);
        // let endPos = cc.v2(pos.x, pos.y)
        // let midPos = cc.v2(endPos.x, endPos.y + 400)
        // cc.tween(donut).bezierTo(0.3, startpos, midPos, endPos).start()
        // cc.tween(donut).to(0.3, { angle: this.listBoxPlace.children[slot].angle, scale: 1.1 }).start()
        // this.scheduleOnce(() => {
        //     donut.zIndex = slot
        // }, 0.2)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FQUC9HYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyb0JDO1FBem9CRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUc1Qixn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WTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFNeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFuR1AsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJvQjVCO0lBQUQsZUFBQztDQTNvQkQsQUEyb0JDLENBM29CcUMsRUFBRSxDQUFDLFNBQVMsR0Eyb0JqRDtrQkEzb0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5nbG9iYWxUaGlzLmdvbGQgPSAwXG5nbG9iYWxUaGlzLnNjR2FtZSA9IGZhbHNlXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDbG9zZVBvcDogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDaGllbjogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRIZWxsb0N1czI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEhlbGxvQ3VzMzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmREb251dEp1bXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kU2VsbERvbmU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gbGlzdEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFdyb25nOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZENoaWVuUmFuOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEVyb3I6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZnhDb2xvcjogY2MuUHJlZmFiID0gbnVsbFxuXG4gICAgLy9uZXdcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5Eb251dDogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZURvbnV0OiBjYy5QcmVmYWIgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdERvbnV0UGxhY2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3REb251dFN1YjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEtoYXlQbGFjZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEtoYXlTdWI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdGhhbmQ6IGNjLk5vZGUgPSBudWxsXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gYnRuRGF1OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vaXNMb2NrVmVnZXR0YWJsZVxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlQ2hpY2tlbjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0S2hheVRyZW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RSbzogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEJveFBsYWNlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5DaGlsaTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuSG9wOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUxpa2U6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlrZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlQm94OiBjYy5QcmVmYWIgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFpbjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmYWlsTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd2FybmluZzogY2MuTm9kZSA9IG51bGw7XG4gICAgbGlzdFBvc1JvID0gW2NjLnYzKC0yOTAsIC0yNzUpLCBjYy52Myg4LCAtMjc4KSwgY2MudjMoMzEwLCAtMjc1KV1cblxuXG5cblxuXG4gICAgbWF4S2hheSA9IDdcblxuICAgIGFyckRvbnV0cG9zID0gW11cbiAgICBhcnJEb251dCA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXVxuICAgIGFycktoYXkgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cbiAgICBhcnJLaGF5UG9zID0gW11cbiAgICBpc1R1dENoaWxpID0gZmFsc2VcbiAgICBpc1R1dE1lYXQgPSBmYWxzZVxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXG4gICAgaXNUdXRDbGlja01lYXQgPSBmYWxzZVxuXG5cbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XG4gICAgaXNTdGVwID0gMFxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xuICAgIGNvdW50Q3VzID0gMFxuICAgIGlkU291bmQgPSBudWxsXG4gICAgYXJyUm8gPSBbXVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNob3dDdXMoKVxuICAgICAgICB0aGlzLmlkU291bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC4zKVxuICAgICAgICB0aGlzLmlkU291bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGllbiwgdHJ1ZSwgMC41KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFJvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm8gPSB0aGlzLmxpc3RSb1tpXTtcbiAgICAgICAgICAgIHRoaXMuYXJyUm9baV0gPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByby5jaGlsZHJlbkNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBnYSA9IHJvLmNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICBnYS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZ2EuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gZ2EucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIGdhLnBvc2l0aW9uID0gbG9jYWxQb3MuYWRkKGNjLnYzKDAsIDIwMCkpO1xuICAgICAgICAgICAgICAgICAgICBnYS5nZXRDb21wb25lbnQoXCJkb251dFwiKS50YWdLaGF5ID0gaVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclJvW2ldW2pdID0gZ2FcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oZ2EpLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oZ2EpLnRvKDAuMiwgeyBwb3NpdGlvbjogbG9jYWxQb3MgfSkudG8oMC4wNSwgeyBzY2FsZTogMS4zIH0pLnRvKDAuMDUsIHsgc2NhbGU6IDEuNCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMubGlzdFJvLmxlbmd0aCAtIDEgJiYgaiA9PSByby5jaGlsZHJlbkNvdW50IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uS2hheSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcblxuICAgICAgICAgICAgICAgIH0sIDAuMTUgKiBqKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idG5DaGlsaS56SW5kZXggPSAyXG4gICAgfVxuICAgIGFjdGlvbktoYXkoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Um8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBybyA9IHRoaXMubGlzdFJvW2ldO1xuICAgICAgICAgICAgY2MudHdlZW4ocm8pLnRvKDAuMjUsIHsgcG9zaXRpb246IHsgdmFsdWU6IHRoaXMubGlzdFBvc1JvW2ldLCBlYXNpbmc6IFwic2luZUluXCIgfSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLmxpc3RSby5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoaWVuUmFuLCBmYWxzZSwgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25DaGlja2VuKClcblxuICAgICAgICB9LCAwLjIpXG4gICAgfVxuICAgIGFjdGlvbkNoaWNrZW4oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Um8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBybyA9IHRoaXMubGlzdFJvW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByby5jaGlsZHJlbkNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2EgPSByby5jaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICBnYS5nZXRDb21wb25lbnQoXCJkb251dFwiKS5zaG93KClcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idG5Ib3AuYWN0aXZlID0gdHJ1ZVxuICAgIH1cbiAgICBzcGF3RGlzTGlrZSgpIHtcbiAgICAgICAgbGV0IGFyclBvcyA9IFtjYy52MygtMTEwLjI5MiksIGNjLnYzKDE5OSwgMzI5KSwgY2MudjMoLTkzLCAzNDIpLCBjYy52MygxODAsIDM2MiksIGNjLnYzKC0xMTAuMjkyKSwgY2MudjMoMTk5LCAzMjkpXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaWtlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVMaWtlKTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjMoMCwgMCk7XG5cbiAgICAgICAgICAgICAgICBwb3MgPSBhcnJQb3NbaV07XG4gICAgICAgICAgICAgICAgbGlrZS5wb3NpdGlvbiA9IHBvc1xuICAgICAgICAgICAgICAgIGxpa2UucGFyZW50ID0gdGhpcy5saWtlTm9kZVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGxpa2UpLmJ5KDAuNiwgeyBwb3NpdGlvbjogY2MudjMoMCwgLTIwMCkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGxpa2UpLmRlbGF5KDAuNCkudG8oMC4yLCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxpa2UuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgfSwgMC4xNSAqIGkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q3VzKCkge1xuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bMF1cbiAgICAgICAgY2hpbGQucG9zaXRpb24gPSBjYy52Myg3MDAsIDEyMy41OTEpXG4gICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDAsIDEyMy41OTEpIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuc2NhbGUgPSAwXG5cbiAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIGNoaWxkLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldFBvcCA9IGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gY2hpbGQ7XG5cbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhlbGxvLCBmYWxzZSwgNClcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcbiAgICAgICAgICAgIH0sIDAuMSlcbiAgICAgICAgICAgIC8vIHRoaXMuYnRuRG9udXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NsaWNrRG9udXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0aGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAzKVxuICAgICAgICB9KS5zdGFydCgpXG5cbiAgICB9XG4gICAgc3VjY2Vzc0N1cygpIHtcbiAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNUYXJnZXRQb3AgPSBudWxsO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUoZmFsc2UpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMS41KVxuXG5cbiAgICB9XG4gICAgY3JlYXRGeENvbG9yKHBvcywgc2NhbGUpIHtcbiAgICAgICAgbGV0IHByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZnhDb2xvcilcbiAgICAgICAgcHJlLnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICBwcmUucG9zaXRpb24gPSBwb3NcbiAgICAgICAgcHJlLnNjYWxlID0gc2NhbGVcbiAgICB9XG4gICAgbmV4dEN1cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvdW50Q3VzKytcbiAgICAgICAgLy8gdGhpcy5idG5EYXUuYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09IDMpIHtcbiAgICAgICAgICAgIC8vIHRoaXMub25FbmRHYW1lKHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuY291bnRDdXNdXG4gICAgICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IGNjLnYzKDcwMCwgMTIzLjU5MSlcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDAsIDEyMy41OTEpIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLnNjYWxlID0gMFxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSlcblxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRQb3AgPSBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBjaGlsZDtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIZWxsb0N1czIsIGZhbHNlLCAyKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY291bnRDdXMgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGVsbG9DdXMzLCBmYWxzZSwgMilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgYm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVCb3gpXG4gICAgICAgICAgICAgICAgICAgIGJveC5wYXJlbnQgPSB0aGlzLm1haW5cbiAgICAgICAgICAgICAgICAgICAgYm94LnpJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJveC5wb3NpdGlvbiA9IGNjLnYzKC0xNzUsIC01NTkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuSG9wID0gYm94XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyS2hheSA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RCb3hQbGFjZSA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImxpc3RHYVwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNoaWxpLmdldENvbXBvbmVudChcImNoaWxpXCIpLnNhdWNlID0gYm94LmdldENoaWxkQnlOYW1lKFwic290XCIpXG4gICAgICAgICAgICAgICAgfSwgMC4xKVxuXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBpc0NsaWNrRG9udXQgPSBmYWxzZVxuICAgIGJ0bl9kb251dChldmVudCkge1xuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrU2xvdERvbnV0KClcbiAgICAgICAgaWYgKGNoZWNrID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc0NsaWNrRG9udXQgPSB0cnVlO1xuICAgICAgICBsZXQgcG9zID0gZXZlbnQuY3VycmVudFRhcmdldC5wb3NpdGlvblxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDIpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcbiAgICAgICAgbGV0IGRvbnV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDaGlja2VuKTtcbiAgICAgICAgZG9udXQucGFyZW50ID0gdGhpcy5saXN0Qm94UGxhY2U7XG4gICAgICAgIGRvbnV0LnBvc2l0aW9uID0gdGhpcy5saXN0Qm94UGxhY2UuY2hpbGRyZW5bY2hlY2tdLnBvc2l0aW9uXG4gICAgICAgIGRvbnV0LmdldENvbXBvbmVudChcImRvbnV0XCIpLnZhbHVlID0gY2hlY2tcbiAgICAgICAgZG9udXQuc2NhbGUgPSAxLjRcbiAgICAgICAgdGhpcy5hcnJEb251dFtjaGVja10gPSBkb251dFxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBkb251dC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAvLyAgICAgZG9udXQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvbnV0X2lkbGVcIilcbiAgICAgICAgLy8gfSwgMSlcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0aGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB9LCAxKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2xpY2tEb251dENoaW4gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RoYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMylcbiAgICAgICAgLy8gbGV0IHBvcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucG9zaXRpb25cbiAgICB9XG4gICAgaXNDbGlja0RvbnV0Q2hpbiA9IGZhbHNlXG4gICAgaXNDbGlja1NvY29sYSA9IGZhbHNlXG4gICAgY2hlY2tTbG90RG9udXQoKSB7Ly9raWVtIHRyYSBjbyBkb251dCB0cmVuIGNoYW8ga29cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckRvbnV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcnJEb251dFtpXSA9PSBudWxsKSByZXR1cm4gaVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNoZWNrU2xvdEtoYXkoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJLaGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hsZCA9IHRoaXMuYXJyS2hheVtpXVxuICAgICAgICAgICAgaWYgKGNobGQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaXNSZWFkeUNoaWNrZW4gPSBmYWxzZVxuICAgIGlzRmlyc3RCb3ggPSBmYWxzZVxuICAgIHNldFJlYWR5Q2hpY2tlbigpIHtcbiAgICAgICAgdGhpcy5pc1JlYWR5Q2hpY2tlbiA9IHRydWU7XG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Qm94KSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5Ib3AuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIH0sIDIpXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3RCb3ggPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgYnRuX2NsaWNrSG9wKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeUNoaWNrZW4pIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRDdXMgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5pc1RhcmdldFBvcCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNSZWFkeUNoaWNrZW4gPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5idG5Ib3AuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkhvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikub3BhY2l0eSA9IDBcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzRdLm9wYWNpdHkgPSAwXG4gICAgICAgIHRoaXMubGlzdGhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc0NsaWNrS2hheSA9IHRydWU7XG4gICAgICAgIGxldCBkbiA9IHRoaXMuYnRuSG9wXG4gICAgICAgIGRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUcmFucywgZmFsc2UsIDEpXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYnRuSG9wXG4gICAgICAgIC8vIHRoaXMuYXJyS2hheVt2YWx1ZV0gPSBudWxsO1xuICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy5pc1RhcmdldFBvcC5wb3NpdGlvblxuICAgICAgICBwb3NFbmQgPSB0aGlzLmlzVGFyZ2V0UG9wLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zRW5kKVxuICAgICAgICBwb3NFbmQgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKVxuICAgICAgICBsZXQgcG9zID0gY2hpbGQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGlsZC5wb3NpdGlvbik7XG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjQsIHsgcG9zaXRpb246IHBvc0VuZC5hZGQoY2MudjMoMCwgMCkpLCBzY2FsZTogMC42IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgY2hpbGQub3BhY2l0eSA9IDBcblxuICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuY2hlY2tTZWxsKGNoaWxkKVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLmFkZChjYy52MygwLCA1MCkpLCAxLjUpXG4gICAgfVxuICAgIGNvdW50RG9udXQgPSAwXG4gICAgY2xpY2tEb251dCh2YWx1ZSwgbm9kZSwgdGFnS2hheSkge1xuXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5jaGVja1Nsb3RLaGF5KClcbiAgICAgICAgaWYgKHNsb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoXCJkb251dFwiKS5pc1RvdWNoaW5nID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuYnRuSG9wLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJSb1t0YWdLaGF5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jb3VudERvbnV0KytcblxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJSb1t0YWdLaGF5XVtpXVxuICAgICAgICAgICAgbGV0IGNoaWxkQ29tcCA9IGNoaWxkLmdldENvbXBvbmVudChcImRvbnV0XCIpXG4gICAgICAgICAgICBjaGlsZENvbXAuaXNSZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgY2hpbGRDb21wLmlzU3RlcCA9IDFcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZERvbnV0SnVtcCwgZmFsc2UsIDAuNilcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zbG9jYWwgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoaWxkLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBwb3Nsb2NhbCA9IHRoaXMubGlzdEJveFBsYWNlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2xvY2FsKVxuICAgICAgICAgICAgICAgIGxldCBkb251dCA9IGNoaWxkXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubGlzdEJveFBsYWNlLmNoaWxkcmVuW2ldLnBvc2l0aW9uXG4gICAgICAgICAgICAgICAgZG9udXQucGFyZW50ID0gdGhpcy5saXN0Qm94UGxhY2VcbiAgICAgICAgICAgICAgICB0aGlzLmFycktoYXlbaV0gPSBkb251dFxuICAgICAgICAgICAgICAgIHRoaXMuYXJyRG9udXRbdmFsdWVdID0gbnVsbFxuICAgICAgICAgICAgICAgIGRvbnV0LnpJbmRleCA9IDEwMFxuICAgICAgICAgICAgICAgIGRvbnV0LnBvc2l0aW9uID0gcG9zbG9jYWxcbiAgICAgICAgICAgICAgICBkb251dC5nZXRDb21wb25lbnQoXCJkb251dFwiKS52YWx1ZSA9IGlcblxuICAgICAgICAgICAgICAgIGxldCBzdGFydHBvcyA9IGNjLnYyKHBvc2xvY2FsLngsIHBvc2xvY2FsLnkpO1xuICAgICAgICAgICAgICAgIGxldCBlbmRQb3MgPSBjYy52Mihwb3MueCwgcG9zLnkpXG4gICAgICAgICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSArIDQwMClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihkb251dCkuYmV6aWVyVG8oMC4zLCBzdGFydHBvcywgbWlkUG9zLCBlbmRQb3MpLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihkb251dCkudG8oMC4zLCB7IGFuZ2xlOiB0aGlzLmxpc3RCb3hQbGFjZS5jaGlsZHJlbltpXS5hbmdsZSwgc2NhbGU6IDEuMSB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb251dC56SW5kZXggPSBzbG90XG5cbiAgICAgICAgICAgICAgICB9LCAwLjIpXG4gICAgICAgICAgICB9LCAwLjEgKiBpKVxuXG4gICAgICAgIH1cbiAgICAgICAgLy8gbm9kZS5nZXRDb21wb25lbnQoXCJkb251dFwiKS5pc1N0ZXAgPSAxXG4gICAgICAgIHRoaXMubGlzdGhhbmQuY2hpbGRyZW5bMF0ub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuaXNDbGlja0RvbnV0Q2hpbiA9IHRydWVcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRG9udXRKdW1wLCBmYWxzZSwgMC42KVxuICAgICAgICAvLyBsZXQgcG9zbG9jYWwgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbik7XG4gICAgICAgIC8vIHBvc2xvY2FsID0gdGhpcy5saXN0Qm94UGxhY2UuY29udmVydFRvTm9kZVNwYWNlQVIocG9zbG9jYWwpXG4gICAgICAgIC8vIGxldCBkb251dCA9IG5vZGVcbiAgICAgICAgLy8gbGV0IHBvcyA9IHRoaXMubGlzdEJveFBsYWNlLmNoaWxkcmVuW3Nsb3RdLnBvc2l0aW9uXG4gICAgICAgIC8vIGRvbnV0LnBhcmVudCA9IHRoaXMubGlzdEJveFBsYWNlXG4gICAgICAgIC8vIHRoaXMuYXJyS2hheVtzbG90XSA9IGRvbnV0XG4gICAgICAgIC8vIHRoaXMuYXJyRG9udXRbdmFsdWVdID0gbnVsbFxuICAgICAgICAvLyBkb251dC56SW5kZXggPSAxMDBcbiAgICAgICAgLy8gZG9udXQucG9zaXRpb24gPSBwb3Nsb2NhbFxuICAgICAgICAvLyBkb251dC5nZXRDb21wb25lbnQoXCJkb251dFwiKS52YWx1ZSA9IHNsb3RcblxuICAgICAgICAvLyBsZXQgc3RhcnRwb3MgPSBjYy52Mihwb3Nsb2NhbC54LCBwb3Nsb2NhbC55KTtcbiAgICAgICAgLy8gbGV0IGVuZFBvcyA9IGNjLnYyKHBvcy54LCBwb3MueSlcbiAgICAgICAgLy8gbGV0IG1pZFBvcyA9IGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSArIDQwMClcbiAgICAgICAgLy8gY2MudHdlZW4oZG9udXQpLmJlemllclRvKDAuMywgc3RhcnRwb3MsIG1pZFBvcywgZW5kUG9zKS5zdGFydCgpXG4gICAgICAgIC8vIGNjLnR3ZWVuKGRvbnV0KS50bygwLjMsIHsgYW5nbGU6IHRoaXMubGlzdEJveFBsYWNlLmNoaWxkcmVuW3Nsb3RdLmFuZ2xlLCBzY2FsZTogMS4xIH0pLnN0YXJ0KClcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgZG9udXQuekluZGV4ID0gc2xvdFxuXG4gICAgICAgIC8vIH0sIDAuMilcbiAgICAgICAgaWYgKHRoaXMuY291bnREb251dCA9PSA0IHx8IHRoaXMuY291bnREb251dCA9PSA4IHx8IHRoaXMuY291bnREb251dCA9PSAxMikge1xuICAgICAgICAgICAgdGhpcy5zaG93SGluZENoaWxpKClcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHNob3dIaW5kQ2hpbGkoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2hpbGkuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2hpbGkuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcblxuICAgICAgICAgICAgfSwgMylcbiAgICAgICAgICAgIHRoaXMuYnRuQ2hpbGkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgfSwgMC4zKVxuXG4gICAgfVxuICAgIGNoZWNrU2xvdE5oYW4oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJLaGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZG9udXQgPSB0aGlzLmFycktoYXlbaV1cbiAgICAgICAgICAgIGlmIChkb251dCAhPSBudWxsICYmIGRvbnV0LmdldENvbXBvbmVudChcImRvbnV0XCIpLmlzU3RlcCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBidG5fY2hvY2FsYXRlKGV2ZW50KSB7XG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tTbG90TmhhbigpXG4gICAgICAgIGlmIChjaGVjayA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmJ0bkhvcC5nZXRDb21wb25lbnQoXCJib3hDaGlja2VuXCIpLmlzU2F1Y2UgPT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmJ0bkhvcC5nZXRDb21wb25lbnQoXCJib3hDaGlja2VuXCIpLmlzU2F1Y2UgPSB0cnVlXG4gICAgICAgIC8vIHRoaXMubGlzdGhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgdGhpcy5idG5DaGlsaS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuYnRuQ2hpbGkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgIHRoaXMuaXNDbGlja1NvY29sYSA9IHRydWVcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVHJhbnMsIGZhbHNlLCAxKVxuICAgICAgICAvLyBsZXQgZG9udXQgPSB0aGlzLmFycktoYXlbY2hlY2tdXG4gICAgICAgIC8vIHRoaXMuYXJyS2hheVtjaGVja10gPSBudWxsO1xuICAgICAgICAvLyBkb251dC5nZXRDb21wb25lbnQoXCJkb251dFwiKS5vblNvY29sYSgpXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBvc2l0aW9uXG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcywgMilcblxuXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmlzQ2xpY2tLaGF5ID09IGZhbHNlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5saXN0aGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sIDMpXG4gICAgfVxuXG4gICAgaXNDbGlja0toYXkgPSBmYWxzZVxuICAgIC8vIGJ0bl9kYXUoZXZlbnQpIHtcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja1Nsb3ROaGFuKClcbiAgICAvLyAgICAgaWYgKGNoZWNrID09IG51bGwpIHJldHVybjtcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVHJhbnMsIGZhbHNlLCAxKVxuXG4gICAgLy8gICAgIGxldCBkb251dCA9IHRoaXMuYXJyS2hheVtjaGVja11cbiAgICAvLyAgICAgLy8gdGhpcy5hcnJLaGF5W2NoZWNrXSA9IG51bGw7XG4gICAgLy8gICAgIGRvbnV0LmdldENvbXBvbmVudChcImRvbnV0XCIpLm9uRGF1KClcbiAgICAvLyAgICAgbGV0IHBvcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucG9zaXRpb25cbiAgICAvLyAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLCAyKVxuICAgIC8vIH1cbiAgICBzZWxsRG9udXQodmFsdWUsIGRuKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEN1cyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0UG9wID09IG51bGwpIHJldHVybjtcbiAgICAgICAgLy8gdGhpcy5saXN0SGFuZC5jaGlsZHJlbls0XS5vcGFjaXR5ID0gMFxuICAgICAgICB0aGlzLmxpc3RoYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNDbGlja0toYXkgPSB0cnVlO1xuICAgICAgICBkbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVHJhbnMsIGZhbHNlLCAxKVxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFycktoYXlbdmFsdWVdO1xuICAgICAgICB0aGlzLmFycktoYXlbdmFsdWVdID0gbnVsbDtcbiAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuaXNUYXJnZXRQb3AucG9zaXRpb25cbiAgICAgICAgcG9zRW5kID0gdGhpcy5pc1RhcmdldFBvcC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc0VuZClcbiAgICAgICAgcG9zRW5kID0gY2hpbGQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZClcbiAgICAgICAgbGV0IHBvcyA9IGNoaWxkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hpbGQucG9zaXRpb24pO1xuICAgICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC40LCB7IHBvc2l0aW9uOiBwb3NFbmQuYWRkKGNjLnYzKDAsIDApKSwgc2NhbGU6IDAuNyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLm9wYWNpdHkgPSAwXG5cbiAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEN1cykge1xuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmNoZWNrU2VsbChjaGlsZClcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcy5hZGQoY2MudjMoMCwgNTApKSwgMS41KVxuICAgIH1cblxuXG4gICAgc2V0R3JheShub2RlKSB7XG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1ncmF5LXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcblxuICAgIH1cbiAgICBvZmZHcmF5KG5vZGUpIHtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcbiAgICB9XG5cblxuXG5cblxuXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEVuZCwgZmFsc2UsIDEpXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZClcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvc2UsIGZhbHNlLCAxKVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mYWlsTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhaWxOb2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZhaWxOb2RlLmNoaWxkcmVuWzFdKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEVuZCwgZmFsc2UsIDEpXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9LCAxKVxuXG4gICAgICAgIH0sIDEuMilcblxuICAgIH1cbiAgICAvLyBidG5fY2hvb3NlKGV2ZW50LCB2YWx1ZSkge1xuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vIHRoaXMubGJDb2luLnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDFcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xuICAgICAgICB0aGlzLmZhaWxOb2RlLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAwLjdcblxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XG4gICAgICAgIHRoaXMubG9nby5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA0MC42M1xuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtNjApXG4gICAgICAgIHRoaXMubGlzdEN1cy5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAxXG4gICAgICAgIHRoaXMubGlzdEN1cy5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtMTMwKSA6IGNjLnYzKDAsIC0xMjApXG5cbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubG9nby5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAxNTBcblxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCA5MClcblxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDJcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDIuMzhcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMTgwXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjZcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMTUwKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xuXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjlcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTIwKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxufVxuIl19