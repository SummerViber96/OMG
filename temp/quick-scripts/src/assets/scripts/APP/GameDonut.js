"use strict";
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