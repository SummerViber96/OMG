
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
        _this.fxColor = null;
        //new
        _this.btnDonut = null;
        _this.preDonut = null;
        _this.listDonutPlace = null;
        _this.listDonutSub = null;
        _this.listKhayPlace = null;
        _this.listKhaySub = null;
        _this.listhand = null;
        _this.btnDau = null;
        // @property(cc.Camera)
        // camera:cc.Camera=null
        _this.maxKhay = 7;
        _this.arrDonutpos = [];
        _this.arrDonut = [null, null, null, null, null, null, null];
        _this.arrKhay = [null, null, null, null, null, null, null];
        _this.arrKhayPos = [];
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
        _this.isClickDonut = false;
        _this.isClickDonutChin = false;
        _this.isClickSocola = false;
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
        // this.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
        // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouch, this);
        this.showCus();
        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.5);
        this.idSound = cc.audioEngine.play(this.soundChien, true, 0.5);
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.soundTrans, false, 1);
            var _loop_1 = function (i) {
                var child = _this.btnDonut.children[i];
                var localPos = child.position;
                _this.scheduleOnce(function () {
                    child.position = localPos.add(cc.v3(0, 80));
                    cc.tween(child).to(0.17, { position: localPos, opacity: 255 }).start();
                }, i * 0.05);
            };
            for (var i = 0; i < _this.btnDonut.childrenCount; i++) {
                _loop_1(i);
            }
        }, 0.3);
        for (var i = 0; i < this.listDonutSub.childrenCount; i++) {
            this.arrDonutpos.push(this.listDonutSub.children[i].position);
        }
        for (var i = 0; i < this.listKhaySub.childrenCount; i++) {
            this.arrKhayPos.push(this.listKhaySub.children[i].position);
        }
    };
    // onTouch(event: cc.Event.EventTouch) {
    //     let worldPos = event.getLocation();
    //     let worldPos2 = this.camera.getScreenToWorldPoint(cc.v2(worldPos.x, worldPos.y));
    //     if (this.cameraNgang.node.active == true) {
    //         worldPos2 = this.cameraNgang.getScreenToWorldPoint(cc.v2(worldPos.x, worldPos.y));
    //     }
    //     this.checkCut(worldPos2);
    // }
    NewClass.prototype.showCus = function () {
        var _this = this;
        var child = this.listCus.children[0];
        child.position = cc.v3(700, 123.591);
        cc.tween(child).to(0.8, { position: cc.v3(0, 123.591) }).call(function () {
            child.getChildByName("pop").scale = 0;
            child.getChildByName("pop").active = true;
            child.children[0].getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            _this.isTargetPop = child.getChildByName("pop");
            _this.isTargetCus = child;
            cc.audioEngine.play(_this.soundHello, false, 1);
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundShowPop, false, 1);
            }, 0.1);
            _this.btnDonut.getComponent(cc.Button).enabled = true;
            _this.scheduleOnce(function () {
                if (_this.isClickDonut == false) {
                    _this.listhand.children[0].active = true;
                }
            }, 2);
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
        this.btnDau.active = true;
        if (this.countCus == 3) {
            this.onEndGame(value);
        }
        else {
            var child_1 = this.listCus.children[this.countCus];
            child_1.position = cc.v3(700, 123.591);
            child_1.active = true;
            cc.tween(child_1).to(0.8, { position: cc.v3(0, 123.591) }).call(function () {
                child_1.getChildByName("pop").scale = 0;
                child_1.getChildByName("pop").active = true;
                child_1.children[0].getComponent(sp.Skeleton).setAnimation(0, "idle", true);
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
                }, 0.1);
                // if (this.countCus == 3) {
                //     this.isStep = 1
                //     this.onBtn(this.btnMeatNode)
                //     if (globalThis.gold < 100) {
                //         globalThis.gold = 100
                //     }
                //     this.listHand.children[5].active = true
                // }
                // else if (this.countCus == 4 && this.isLockVegettable == true) {
                //     if (globalThis.gold < 150) {
                //         globalThis.gold = 150
                //     }
                // }
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
        var donut = cc.instantiate(this.preDonut);
        donut.parent = this.listDonutPlace;
        donut.position = this.arrDonutpos[check];
        donut.getComponent("donut").value = check;
        donut.scale = 0.95;
        this.arrDonut[check] = donut;
        this.scheduleOnce(function () {
            donut.children[0].active = false;
            donut.getComponent(cc.Animation).play("donut_idle");
        }, 1);
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
    NewClass.prototype.clickDonut = function (value, node) {
        var _this = this;
        var slot = this.checkSlotKhay();
        if (slot == null) {
            node.getComponent("donut").isTouching = false;
            return;
        }
        node.getComponent("donut").isStep = 1;
        this.listhand.children[0].active = false;
        this.isClickDonutChin = true;
        this.listhand.children[1].active = false;
        cc.audioEngine.play(this.soundDonutJump, false, 0.6);
        var donut = this.arrDonut[value];
        var pos = this.arrKhayPos[slot];
        donut.parent = this.listKhayPlace;
        this.arrKhay[slot] = donut;
        this.arrDonut[value] = null;
        donut.zIndex = 100;
        donut.getComponent("donut").value = slot;
        donut.getComponent(cc.Animation).stop("donut_idle");
        donut.children[1].position = cc.v3(0, 0);
        var startpos = cc.v2(donut.x, donut.y);
        var endPos = cc.v2(pos.x, pos.y);
        var midPos = cc.v2(endPos.x, endPos.y + 200);
        cc.tween(donut).bezierTo(0.3, startpos, midPos, endPos).start();
        cc.tween(donut.children[1]).to(0.3, { angle: -72 }).start();
        this.scheduleOnce(function () {
            donut.zIndex = slot;
        }, 0.2);
        this.scheduleOnce(function () {
            if (_this.isClickSocola == false) {
                _this.listhand.children[2].active = true;
            }
        }, 3);
        // this.creatFxColor(pos, 1.5)
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
        var _this = this;
        var check = this.checkSlotNhan();
        if (check == null)
            return;
        this.listhand.children[2].active = false;
        this.isClickSocola = true;
        cc.audioEngine.play(this.soundTrans, false, 1);
        var donut = this.arrKhay[check];
        // this.arrKhay[check] = null;
        donut.getComponent("donut").onSocola();
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
        this.scheduleOnce(function () {
            if (_this.isClickKhay == false) {
                _this.listhand.children[3].active = true;
            }
        }, 3);
    };
    NewClass.prototype.btn_dau = function (event) {
        var check = this.checkSlotNhan();
        if (check == null)
            return;
        cc.audioEngine.play(this.soundTrans, false, 1);
        var donut = this.arrKhay[check];
        // this.arrKhay[check] = null;
        donut.getComponent("donut").onDau();
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
    };
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
    // checkSlotHotDog() {
    //     for (let i = 0; i < this.arrHotDog.length; i++) {
    //         if (this.arrHotDog[i] == null) return i
    //     }
    //     return null
    // }
    // checkSlotBread() {
    //     for (let i = 0; i < this.arrBreak.length; i++) {
    //         if (this.arrBreak[i] == null) return i
    //     }
    //     return null
    // }
    // checkSlotBuger() {
    //     for (let i = 0; i < this.arrBuger.length; i++) {
    //         if (this.arrBuger[i] == null) return i
    //     }
    //     return null
    // }
    NewClass.prototype.setGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.offGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.onEndGame = function (value) {
        cc.audioEngine.play(this.soundEnd, false, 1);
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
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.camera.node.position = cc.v3(0, -60);
        // this.barCoin.scale = (logic) ? 1.6 : 1
        this.listCus.scale = (logic) ? 1.2 : 1;
        this.listCus.position = (logic) ? cc.v3(0, -130) : cc.v3(0, -120);
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            this.camera.node.position = cc.v3(0, 200);
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
        property(cc.Node)
    ], NewClass.prototype, "btnDau", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtZUM7UUFqZUcsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FDUSxJQUFJLENBQUM7UUFFMUIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUc1QixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFHL0IsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUV6QixLQUFLO1FBRUwsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQWMsSUFBSSxDQUFBO1FBRTFCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2Qix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBRXhCLGFBQU8sR0FBRyxDQUFDLENBQUE7UUFFWCxpQkFBVyxHQUFHLEVBQUUsQ0FBQTtRQUNoQixjQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNyRCxhQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNwRCxnQkFBVSxHQUFHLEVBQUUsQ0FBQTtRQUNmLGdCQUFVLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLGVBQVMsR0FBRyxLQUFLLENBQUE7UUFDakIscUJBQWUsR0FBRyxLQUFLLENBQUE7UUFDdkIsb0JBQWMsR0FBRyxLQUFLLENBQUE7UUFDdEIsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUU3QixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsY0FBUSxHQUFHLDhCQUE4QixDQUFBO1FBQ3pDLGNBQVEsR0FBRyxDQUFDLENBQUE7UUFDWixhQUFPLEdBQUcsSUFBSSxDQUFBO1FBdUhkLGtCQUFZLEdBQUcsS0FBSyxDQUFBO1FBOEJwQixzQkFBZ0IsR0FBRyxLQUFLLENBQUE7UUFDeEIsbUJBQWEsR0FBRyxLQUFLLENBQUE7UUFpRnJCLGlCQUFXLEdBQUcsS0FBSyxDQUFBOztJQWdLdkIsQ0FBQztJQXRZRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFdBQVcsRUFBRTtZQUM5QixNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFDRCx3QkFBSyxHQUFMO1FBQUEsaUJBd0JDO1FBdkJHLG1FQUFtRTtRQUNuRSxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRTlELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtvQ0FDckMsQ0FBQztnQkFDTixJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDckMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQTtnQkFDN0IsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtvQkFDM0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDMUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTs7WUFOaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRTt3QkFBM0MsQ0FBQzthQU9UO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9EO0lBQ0wsQ0FBQztJQUNELHdDQUF3QztJQUN4QywwQ0FBMEM7SUFDMUMsd0ZBQXdGO0lBQ3hGLGtEQUFrRDtJQUNsRCw2RkFBNkY7SUFDN0YsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxJQUFJO0lBQ0osMEJBQU8sR0FBUDtRQUFBLGlCQXVCQztRQXRCRyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3BDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFELEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUVyQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDekMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3pFLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM5QyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUM5QyxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3BELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNQLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ3BELEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxLQUFJLENBQUMsWUFBWSxJQUFJLEtBQUssRUFBRTtvQkFDNUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtpQkFFMUM7WUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDVCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUVkLENBQUM7SUFDRCw2QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFFNUIsQ0FBQztJQUNELCtCQUFZLEdBQVosVUFBYSxHQUFHLEVBQUUsS0FBSztRQUNuQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0QyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDdEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUE7UUFDbEIsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUNELDBCQUFPLEdBQVAsVUFBUSxLQUFLO1FBQWIsaUJBNENDO1FBM0NHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUV6QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDeEI7YUFDSTtZQUNELElBQUksT0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNoRCxPQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQ3BDLE9BQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ25CLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxRCxPQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7Z0JBQ3JDLE9BQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDekMsT0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUV6RSxLQUFJLENBQUMsV0FBVyxHQUFHLE9BQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzlDLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBSyxDQUFDO2dCQUN6QixLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO29CQUNoRCxJQUFJLEtBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO3dCQUNwQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtxQkFDckQ7eUJBQ0ksSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTt3QkFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7cUJBRXJEO2dCQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDUCw0QkFBNEI7Z0JBQzVCLHNCQUFzQjtnQkFDdEIsbUNBQW1DO2dCQUNuQyxtQ0FBbUM7Z0JBQ25DLGdDQUFnQztnQkFDaEMsUUFBUTtnQkFDUiw4Q0FBOEM7Z0JBQzlDLElBQUk7Z0JBQ0osa0VBQWtFO2dCQUNsRSxtQ0FBbUM7Z0JBQ25DLGdDQUFnQztnQkFDaEMsUUFBUTtnQkFDUixJQUFJO1lBQ1IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDYjtJQUVMLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsS0FBSztRQUFmLGlCQTRCQztRQTNCRyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDakMsSUFBSSxLQUFLLElBQUksSUFBSTtZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUE7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDOUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ25DLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDekMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUE7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUNoQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDdkQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFN0MsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQztZQUVkLElBQUksS0FBSSxDQUFDLGdCQUFnQixJQUFJLEtBQUssRUFBRTtnQkFDaEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTthQUMxQztRQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNMLHlDQUF5QztJQUM3QyxDQUFDO0lBR0QsaUNBQWMsR0FBZDtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTtnQkFBRSxPQUFPLENBQUMsQ0FBQTtTQUN6QztRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNELGdDQUFhLEdBQWI7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUMxQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLENBQUE7YUFDWDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLEtBQUssRUFBRSxJQUFJO1FBQXRCLGlCQXNDQztRQXBDRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDL0IsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBQzdDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXJELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUE7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUN4QyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNwRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDL0IsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFBO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFBO1FBQzNCLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO1FBRWxCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUN4QyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDbkQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDeEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQzVDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQy9ELEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzNELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUV2QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxLQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssRUFBRTtnQkFDN0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTthQUMxQztRQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNMLDhCQUE4QjtJQUNsQyxDQUFDO0lBQ0QsZ0NBQWEsR0FBYjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzNCLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzFELE9BQU8sQ0FBQyxDQUFBO2FBQ1g7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNELGdDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQW5CLGlCQWdCQztRQWZHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUNoQyxJQUFJLEtBQUssSUFBSSxJQUFJO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFBO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzlDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0IsOEJBQThCO1FBQzlCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDdEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUE7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksS0FBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7YUFDMUM7UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDVCxDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLEtBQUs7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDaEMsSUFBSSxLQUFLLElBQUksSUFBSTtZQUFFLE9BQU87UUFDMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFOUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMvQiw4QkFBOEI7UUFDOUIsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNuQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQTtRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsNEJBQVMsR0FBVCxVQUFVLEtBQUssRUFBRSxFQUFFO1FBQ2YscUJBQXFCO1FBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJO1lBQUUsT0FBTztRQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSTtZQUFFLE9BQU87UUFDckMsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUMxQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM5QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFBO1FBQ3RDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM5RCxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNsRCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN6QyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM1RSxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtRQUVyQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNWLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7U0FFL0Q7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBQ0Qsc0JBQXNCO0lBQ3RCLHdEQUF3RDtJQUN4RCxrREFBa0Q7SUFDbEQsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixJQUFJO0lBQ0oscUJBQXFCO0lBQ3JCLHVEQUF1RDtJQUN2RCxpREFBaUQ7SUFDakQsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixJQUFJO0lBQ0oscUJBQXFCO0lBQ3JCLHVEQUF1RDtJQUN2RCxpREFBaUQ7SUFDakQsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixJQUFJO0lBR0osMEJBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRJLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pJLENBQUM7SUFPRCw0QkFBUyxHQUFULFVBQVUsS0FBSztRQUNYLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzVDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNmLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBRS9DO2FBQ0k7WUFDRCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDakMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FFaEQ7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQ2xDLENBQUM7SUFDRCw2QkFBNkI7SUFFN0IseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxrREFBa0Q7UUFDbEQsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLElBQUksZ0JBQWdCLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO2FBQ0k7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1FBQ3pDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDekMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFakUsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QyxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBRXpDLHNEQUFzRDtZQUN0RCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV0RSxtQ0FBbUM7WUFDbkMsSUFBTSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsU0FBUztZQUNsRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFVLFNBQVM7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO1lBRXpCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsR0FBRyxTQUFTLEVBQUU7Z0JBQzNELCtCQUErQjtnQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO2FBRS9CO2lCQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLEdBQUcsU0FBUyxFQUFFO2dCQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTthQUU1QztTQUNKO2FBQ0k7WUFDRCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUVoQyxzREFBc0Q7WUFDdEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdEUsbUNBQW1DO1lBQ25DLElBQU0scUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVM7WUFDbEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBVSxTQUFTO1lBRWpELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsR0FBRyxTQUFTLEVBQUU7YUFFOUQ7aUJBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsR0FBRyxTQUFTLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtnQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7YUFFNUM7U0FDSjtJQUdMLENBQUM7SUFoZUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDSztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNhO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2E7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2E7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUVHO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFNeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQXRFTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbWU1QjtJQUFELGVBQUM7Q0FuZUQsQUFtZUMsQ0FuZXFDLEVBQUUsQ0FBQyxTQUFTLEdBbWVqRDtrQkFuZW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuZ29sZCA9IDBcclxuZ2xvYmFsVGhpcy5zY0dhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoaWVuOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERvbnV0SnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lXHJcbiAgICAgICAgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZnhDb2xvcjogY2MuUHJlZmFiID0gbnVsbFxyXG5cclxuICAgIC8vbmV3XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkRvbnV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZURvbnV0OiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3REb251dFBsYWNlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdERvbnV0U3ViOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtoYXlQbGFjZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RLaGF5U3ViOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0aGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuRGF1OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICAvLyBjYW1lcmE6Y2MuQ2FtZXJhPW51bGxcclxuXHJcbiAgICBtYXhLaGF5ID0gN1xyXG5cclxuICAgIGFyckRvbnV0cG9zID0gW11cclxuICAgIGFyckRvbnV0ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdXHJcbiAgICBhcnJLaGF5ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdXHJcbiAgICBhcnJLaGF5UG9zID0gW11cclxuICAgIGlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgaXNUdXRNZWF0ID0gZmFsc2VcclxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXHJcbiAgICBpc1R1dENsaWNrTWVhdCA9IGZhbHNlXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gc291bmRCZzpjYy5BdWRpb0NsaXA9bnVsbDtcclxuXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBpZFNvdW5kID0gbnVsbFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNob3dDdXMoKVxyXG4gICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXHJcbiAgICAgICAgdGhpcy5pZFNvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hpZW4sIHRydWUsIDAuNSlcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUcmFucywgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idG5Eb251dC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYnRuRG9udXQuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvcyA9IGNoaWxkLnBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBsb2NhbFBvcy5hZGQoY2MudjMoMCwgODApKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjE3LCB7IHBvc2l0aW9uOiBsb2NhbFBvcywgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0sIGkgKiAwLjA1KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0RG9udXRTdWIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyRG9udXRwb3MucHVzaCh0aGlzLmxpc3REb251dFN1Yi5jaGlsZHJlbltpXS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0S2hheVN1Yi5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJLaGF5UG9zLnB1c2godGhpcy5saXN0S2hheVN1Yi5jaGlsZHJlbltpXS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gb25Ub3VjaChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgLy8gICAgIGxldCB3b3JsZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAvLyAgICAgbGV0IHdvcmxkUG9zMiA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChjYy52Mih3b3JsZFBvcy54LCB3b3JsZFBvcy55KSk7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuY2FtZXJhTmdhbmcubm9kZS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICB3b3JsZFBvczIgPSB0aGlzLmNhbWVyYU5nYW5nLmdldFNjcmVlblRvV29ybGRQb2ludChjYy52Mih3b3JsZFBvcy54LCB3b3JsZFBvcy55KSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuY2hlY2tDdXQod29ybGRQb3MyKTtcclxuICAgIC8vIH1cclxuICAgIHNob3dDdXMoKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuWzBdXHJcbiAgICAgICAgY2hpbGQucG9zaXRpb24gPSBjYy52Myg3MDAsIDEyMy41OTEpXHJcbiAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMTIzLjU5MSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLnNjYWxlID0gMFxyXG5cclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjaGlsZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldFBvcCA9IGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBjaGlsZDtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGVsbG8sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgfSwgMC4xKVxyXG4gICAgICAgICAgICB0aGlzLmJ0bkRvbnV0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2xpY2tEb251dCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdGhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMilcclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgfVxyXG4gICAgc3VjY2Vzc0N1cygpIHtcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0UG9wID0gbnVsbDtcclxuXHJcbiAgICB9XHJcbiAgICBjcmVhdEZ4Q29sb3IocG9zLCBzY2FsZSkge1xyXG4gICAgICAgIGxldCBwcmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZ4Q29sb3IpXHJcbiAgICAgICAgcHJlLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgIHByZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIHByZS5zY2FsZSA9IHNjYWxlXHJcbiAgICB9XHJcbiAgICBuZXh0Q3VzKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudEN1cysrXHJcbiAgICAgICAgdGhpcy5idG5EYXUuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuY291bnRDdXNdXHJcbiAgICAgICAgICAgIGNoaWxkLnBvc2l0aW9uID0gY2MudjMoNzAwLCAxMjMuNTkxKVxyXG4gICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDAsIDEyMy41OTEpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuc2NhbGUgPSAwXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0UG9wID0gY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhlbGxvQ3VzMiwgZmFsc2UsIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY291bnRDdXMgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIZWxsb0N1czMsIGZhbHNlLCAyKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAwLjEpXHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5jb3VudEN1cyA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5pc1N0ZXAgPSAxXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5vbkJ0bih0aGlzLmJ0bk1lYXROb2RlKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChnbG9iYWxUaGlzLmdvbGQgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkID0gMTAwXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5jb3VudEN1cyA9PSA0ICYmIHRoaXMuaXNMb2NrVmVnZXR0YWJsZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGdsb2JhbFRoaXMuZ29sZCA8IDE1MCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBnbG9iYWxUaGlzLmdvbGQgPSAxNTBcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaXNDbGlja0RvbnV0ID0gZmFsc2VcclxuICAgIGJ0bl9kb251dChldmVudCkge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tTbG90RG9udXQoKVxyXG4gICAgICAgIGlmIChjaGVjayA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0NsaWNrRG9udXQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLCAyKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgZG9udXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURvbnV0KTtcclxuICAgICAgICBkb251dC5wYXJlbnQgPSB0aGlzLmxpc3REb251dFBsYWNlO1xyXG4gICAgICAgIGRvbnV0LnBvc2l0aW9uID0gdGhpcy5hcnJEb251dHBvc1tjaGVja11cclxuICAgICAgICBkb251dC5nZXRDb21wb25lbnQoXCJkb251dFwiKS52YWx1ZSA9IGNoZWNrXHJcbiAgICAgICAgZG9udXQuc2NhbGUgPSAwLjk1XHJcbiAgICAgICAgdGhpcy5hcnJEb251dFtjaGVja10gPSBkb251dFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgZG9udXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgZG9udXQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvbnV0X2lkbGVcIilcclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH0sMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NsaWNrRG9udXRDaGluID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RoYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMpXHJcbiAgICAgICAgLy8gbGV0IHBvcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucG9zaXRpb25cclxuICAgIH1cclxuICAgIGlzQ2xpY2tEb251dENoaW4gPSBmYWxzZVxyXG4gICAgaXNDbGlja1NvY29sYSA9IGZhbHNlXHJcbiAgICBjaGVja1Nsb3REb251dCgpIHsvL2tpZW0gdHJhIGNvIGRvbnV0IHRyZW4gY2hhbyBrb1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEb251dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJEb251dFtpXSA9PSBudWxsKSByZXR1cm4gaVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY2hlY2tTbG90S2hheSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyS2hheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hsZCA9IHRoaXMuYXJyS2hheVtpXVxyXG4gICAgICAgICAgICBpZiAoY2hsZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjbGlja0RvbnV0KHZhbHVlLCBub2RlKSB7XHJcblxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5jaGVja1Nsb3RLaGF5KClcclxuICAgICAgICBpZiAoc2xvdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFwiZG9udXRcIikuaXNUb3VjaGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoXCJkb251dFwiKS5pc1N0ZXAgPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0aGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0NsaWNrRG9udXRDaGluID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubGlzdGhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmREb251dEp1bXAsIGZhbHNlLCAwLjYpXHJcbiAgICAgICAgbGV0IGRvbnV0ID0gdGhpcy5hcnJEb251dFt2YWx1ZV1cclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5hcnJLaGF5UG9zW3Nsb3RdXHJcbiAgICAgICAgZG9udXQucGFyZW50ID0gdGhpcy5saXN0S2hheVBsYWNlXHJcbiAgICAgICAgdGhpcy5hcnJLaGF5W3Nsb3RdID0gZG9udXRcclxuICAgICAgICB0aGlzLmFyckRvbnV0W3ZhbHVlXSA9IG51bGxcclxuICAgICAgICBkb251dC56SW5kZXggPSAxMDBcclxuXHJcbiAgICAgICAgZG9udXQuZ2V0Q29tcG9uZW50KFwiZG9udXRcIikudmFsdWUgPSBzbG90XHJcbiAgICAgICAgZG9udXQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcChcImRvbnV0X2lkbGVcIilcclxuICAgICAgICBkb251dC5jaGlsZHJlblsxXS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgbGV0IHN0YXJ0cG9zID0gY2MudjIoZG9udXQueCwgZG9udXQueSk7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKHBvcy54LCBwb3MueSlcclxuICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoZW5kUG9zLngsIGVuZFBvcy55ICsgMjAwKVxyXG4gICAgICAgIGNjLnR3ZWVuKGRvbnV0KS5iZXppZXJUbygwLjMsIHN0YXJ0cG9zLCBtaWRQb3MsIGVuZFBvcykuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKGRvbnV0LmNoaWxkcmVuWzFdKS50bygwLjMsIHsgYW5nbGU6IC03MiB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBkb251dC56SW5kZXggPSBzbG90XHJcblxyXG4gICAgICAgIH0sIDAuMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2xpY2tTb2NvbGEgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMylcclxuICAgICAgICAvLyB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDEuNSlcclxuICAgIH1cclxuICAgIGNoZWNrU2xvdE5oYW4oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycktoYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRvbnV0ID0gdGhpcy5hcnJLaGF5W2ldXHJcbiAgICAgICAgICAgIGlmIChkb251dCAhPSBudWxsICYmIGRvbnV0LmdldENvbXBvbmVudChcImRvbnV0XCIpLmlzU3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBidG5fY2hvY2FsYXRlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja1Nsb3ROaGFuKClcclxuICAgICAgICBpZiAoY2hlY2sgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGlzdGhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzQ2xpY2tTb2NvbGEgPSB0cnVlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVHJhbnMsIGZhbHNlLCAxKVxyXG4gICAgICAgIGxldCBkb251dCA9IHRoaXMuYXJyS2hheVtjaGVja11cclxuICAgICAgICAvLyB0aGlzLmFycktoYXlbY2hlY2tdID0gbnVsbDtcclxuICAgICAgICBkb251dC5nZXRDb21wb25lbnQoXCJkb251dFwiKS5vblNvY29sYSgpXHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucG9zaXRpb25cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NsaWNrS2hheSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0aGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzKVxyXG4gICAgfVxyXG4gICAgaXNDbGlja0toYXkgPSBmYWxzZVxyXG4gICAgYnRuX2RhdShldmVudCkge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tTbG90TmhhbigpXHJcbiAgICAgICAgaWYgKGNoZWNrID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUcmFucywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGxldCBkb251dCA9IHRoaXMuYXJyS2hheVtjaGVja11cclxuICAgICAgICAvLyB0aGlzLmFycktoYXlbY2hlY2tdID0gbnVsbDtcclxuICAgICAgICBkb251dC5nZXRDb21wb25lbnQoXCJkb251dFwiKS5vbkRhdSgpXHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucG9zaXRpb25cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDIpXHJcbiAgICB9XHJcbiAgICBzZWxsRG9udXQodmFsdWUsIGRuKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRDdXMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0UG9wID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAvLyB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzRdLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5saXN0aGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNDbGlja0toYXkgPSB0cnVlO1xyXG4gICAgICAgIGRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRyYW5zLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFycktoYXlbdmFsdWVdO1xyXG4gICAgICAgIHRoaXMuYXJyS2hheVt2YWx1ZV0gPSBudWxsO1xyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmlzVGFyZ2V0UG9wLnBvc2l0aW9uXHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy5pc1RhcmdldFBvcC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc0VuZClcclxuICAgICAgICBwb3NFbmQgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKVxyXG4gICAgICAgIGxldCBwb3MgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoaWxkLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjQsIHsgcG9zaXRpb246IHBvc0VuZC5hZGQoY2MudjMoMCwgMCkpLCBzY2FsZTogMC43IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5vcGFjaXR5ID0gMFxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRDdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmNoZWNrU2VsbChjaGlsZClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcy5hZGQoY2MudjMoMCwgNTApKSwgMS41KVxyXG4gICAgfVxyXG4gICAgLy8gY2hlY2tTbG90SG90RG9nKCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJIb3REb2cubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuYXJySG90RG9nW2ldID09IG51bGwpIHJldHVybiBpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBudWxsXHJcbiAgICAvLyB9XHJcbiAgICAvLyBjaGVja1Nsb3RCcmVhZCgpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQnJlYWsubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuYXJyQnJlYWtbaV0gPT0gbnVsbCkgcmV0dXJuIGlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGxcclxuICAgIC8vIH1cclxuICAgIC8vIGNoZWNrU2xvdEJ1Z2VyKCkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJCdWdlci5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5hcnJCdWdlcltpXSA9PSBudWxsKSByZXR1cm4gaVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gbnVsbFxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBzZXRHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcblxyXG4gICAgfVxyXG4gICAgb2ZmR3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIG9uRW5kR2FtZSh2YWx1ZSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEVuZCwgZmFsc2UsIDEpXHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV2luLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZClcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTG9zZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gdGhpcy5sYkNvaW4uc3RyaW5nID0gZ2xvYmFsVGhpcy5nb2xkLnRvU3RyaW5nKClcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDFcclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNiA6IDAuNFxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtNjApXHJcbiAgICAgICAgLy8gdGhpcy5iYXJDb2luLnNjYWxlID0gKGxvZ2ljKSA/IDEuNiA6IDFcclxuICAgICAgICB0aGlzLmxpc3RDdXMuc2NhbGUgPSAobG9naWMpID8gMS4yIDogMVxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtMTMwKSA6IGNjLnYzKDAsIC0xMjApXHJcblxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMjAwKVxyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMlxyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVjayBpcGhvbmV4XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAyLjM4XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDE1MClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC45XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTIwKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==