
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/CC2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '006034IWPVP7qZ4XOg11AcG', 'CC2');
// scripts/APP/CC2.ts

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
globalThis.coin = 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundBg = null;
        _this.hairCut = null;
        _this.char1 = null;
        _this.char2 = null;
        _this.char3 = null;
        _this.tut = null;
        _this.hand = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.logo = null;
        _this.barCoin = null;
        _this.preCoin = null;
        _this.lbCoin = null;
        _this.scene1 = null;
        _this.scene2 = null;
        _this.scene3 = null;
        _this.uiCamera = null;
        _this.uiNode = null;
        _this.btnUnlock = null;
        _this.rem2 = null;
        _this.placeChar2 = null;
        _this.itemShambo = null;
        _this.itemVoiHoaSen = null;
        _this.itemMaySay = null;
        _this.charDress = null;
        _this.xabong = null;
        _this.xabong2 = null;
        _this.charDressManager = null;
        _this.endCard = null;
        _this.failUI = null;
        _this.soundLose = null;
        _this.char2Hind = null;
        //hand
        _this.handScene21 = null;
        _this.char2Parent = null;
        _this.listHand = null;
        _this.touchNode = null;
        _this.water = null;
        _this.dryer = null;
        _this.sambo = null;
        _this.soundThank = null;
        _this.soundHi = null;
        _this.soundAngry1 = null;
        _this.soundAngry2 = null;
        _this.soundTranscreen = null;
        _this.soundClick = null;
        _this.soundWrong = null;
        _this.soundCoin = null;
        _this.soundFail = null;
        _this.soundUnlock = null;
        _this.selectedItem = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.arrBtn = [];
        _this.isStep = 0;
        _this.isunlock = false;
        _this.countStep = 0;
        _this.isClick = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.3);
        this.arrBtn = [this.itemShambo, this.itemVoiHoaSen, this.itemMaySay];
        // this.startScene()
    };
    NewClass.prototype.completeScene = function () {
        var _this = this;
        // this.startScene()
        // this.scene1.active=false
        this.scene2.scale = 2;
        this.scene2.active = true;
        cc.tween(this.scene2).to(0.3, { scale: 1 }).call(function () {
            _this.scene1.active = false;
            _this.startScene();
        }).start();
    };
    NewClass.prototype.startScene = function () {
        var _this = this;
        this.barCoin.active = true;
        var char1Node = this.char1.node;
        cc.audioEngine.play(this.soundTranscreen, false, 1);
        cc.tween(char1Node).to(0.8, { position: cc.v3(110, -223) }).call(function () {
            _this.char1.setAnimation(0, "Happy", false);
            cc.audioEngine.play(_this.soundThank, false, 0.7);
            char1Node.scaleX = -1.5;
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundCoin, false, 1);
                _this.giveCoin();
            }, 0.3);
        }).start();
        this.char2.setAnimation(0, "Walk", true);
        this.scheduleOnce(function () {
            if (_this.isunlock)
                return;
            _this.handScene21.active = true;
        }, 3);
        cc.tween(this.char2.node.parent).to(3.8, { position: cc.v3(-407, -925) }).call(function () {
            _this.char2.setAnimation(0, "Talk", true);
            // this.char2.node.getChildByName("pop").active = true
            // cc.audioEngine.play(this.soundHi, false, 1)
        }).start();
    };
    NewClass.prototype.giveCoin = function () {
        var _this = this;
        var posStart = this.char1.node.parent.convertToWorldSpaceAR(this.char1.node.position);
        posStart = this.uiNode.convertToNodeSpaceAR(posStart).add(cc.v3(0, 420));
        var posEnd = this.barCoin.children[1].position;
        posEnd = this.barCoin.convertToWorldSpaceAR(posEnd);
        posEnd = this.uiNode.convertToNodeSpaceAR(posEnd);
        var midPos = cc.v2((posEnd.x + 500), (posStart.y + posEnd.y) / 2);
        for (var i = 0; i < 8; i++) {
            this.scheduleOnce(function () {
                var coin = cc.instantiate(_this.preCoin);
                // coin.parent = this.node;
                coin.parent = _this.scene2.parent;
                // coin.position = cc.v3(0, 0)
                coin.position = posStart;
                coin.zIndex = 5;
                cc.tween(coin).bezierTo(1, cc.v2(posStart.x, posStart.y), midPos, cc.v2(posEnd.x, posEnd.y)).start();
                cc.tween(coin).to(1, { scale: 1.3 }).call(function () {
                    coin.destroy();
                    globalThis.coin += 50;
                }).start();
            }, 0.05 * i);
        }
        this.scheduleOnce(function () {
            _this.btnUnlock.getComponent(cc.Animation).play();
        }, 0.6);
        this.scheduleOnce(function () {
            _this.char1.setAnimation(0, "Walk", true);
            _this.char1.node.zIndex = 2;
            cc.tween(_this.char1.node).by(4, { position: cc.v3(1600, 0) }).call(function () {
                _this.char1.node.active = false;
            }).start();
        }, 1);
    };
    NewClass.prototype.unlockCoin = function () {
        var _this = this;
        var posStart = this.btnUnlock.parent.convertToWorldSpaceAR(this.btnUnlock.position);
        posStart = this.uiNode.convertToNodeSpaceAR(posStart).add(cc.v3(0, 0));
        var posEnd = this.barCoin.children[1].position;
        posEnd = this.barCoin.convertToWorldSpaceAR(posEnd);
        posEnd = this.uiNode.convertToNodeSpaceAR(posEnd);
        var midPos = cc.v2((posEnd.x + 500), (posStart.y + posEnd.y) / 2);
        for (var i = 0; i < 8; i++) {
            this.scheduleOnce(function () {
                var coin = cc.instantiate(_this.preCoin);
                // coin.parent = this.node;
                coin.parent = _this.scene2.parent;
                // coin.position = cc.v3(0, 0)
                coin.position = posEnd;
                coin.zIndex = 5;
                cc.tween(coin).bezierTo(0.6, cc.v2(posEnd.x, posEnd.y), midPos, cc.v2(posStart.x, posStart.y)).start();
                cc.tween(coin).to(0.6, { scale: 1.3 }).call(function () {
                    coin.destroy();
                    globalThis.coin -= 50;
                    _this.btnUnlock.getComponent(cc.Animation).play("btn_scale");
                }).start();
            }, 0.04 * i);
        }
    };
    NewClass.prototype.btn_unlock = function (event) {
        var _this = this;
        if (this.isunlock)
            return;
        cc.audioEngine.play(this.soundCoin, false, 1);
        // for (let i = 0; i < 35; i++) {
        //     this.scheduleOnce(() => {
        //         globalThis.coin -= 10
        //     }, 0.02 * i)
        // }
        this.isunlock = true;
        this.handScene21.active = false;
        this.unlockCoin();
        this.scheduleOnce(function () {
            _this.btnUnlock.active = false;
            _this.rem2.opacity = 0;
            _this.rem2.active = true;
            cc.tween(_this.rem2).to(0.3, { opacity: 255 }).start();
            _this.scheduleOnce(function () {
                _this.onEventListener();
                _this.char2Hind.active = true;
                _this.char2.node.getChildByName("pop").active = true;
                cc.audioEngine.play(_this.soundHi, false, 1);
            }, 0.4);
        }, 0.85);
    };
    NewClass.prototype.onEventListener = function () {
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    NewClass.prototype.offEventListener = function () {
        this.touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    NewClass.prototype.onTouchStart = function (event) {
        if (this.selectedItem)
            return;
        var screenPos = event.getLocation();
        // let worldPos = this.camera.getScreenToWorldPoint(screenPos);
        var worldPos = screenPos;
        // Chuyển world → local (node main)
        var localPos = this.scene2.convertToNodeSpaceAR(worldPos);
        if (this.char2Parent.position.sub(cc.v3(localPos.x, localPos.y)).mag() < 300) {
            this.char2Parent.setPosition(localPos);
            this.selectedItem = this.char2Parent;
            this.char2Hind.active = false;
            this.char2Parent.children[0].active = true;
        }
        // Đặt vị trí cho item
        // this.main.guideDrag.active = false;
        // this.node.opacity = 0
    };
    NewClass.prototype.onTouchMove = function (event) {
        if (!this.selectedItem)
            return;
        var screenPos = event.getLocation();
        // let worldPos = this.camera.getScreenToWorldPoint(screenPos);
        var worldPos = screenPos;
        // Chuyển world → local (node main)
        var localPos = this.node.convertToNodeSpaceAR(worldPos);
        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
    };
    NewClass.prototype.onTouchEnd = function (event) {
        if (!this.selectedItem)
            return;
        var screenPos = event.getLocation();
        var worldPos = this.camera.getScreenToWorldPoint(screenPos);
        // Chuyển world → local (node main)
        var localPos = this.node.convertToNodeSpaceAR(worldPos);
        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
        var check = this.checkOnFloor(localPos);
        if (check == true) {
            this.selectedItem.position = cc.v3(-500, -259);
            this.offEventListener();
            this.moveStep2();
        }
    };
    NewClass.prototype.moveStep2 = function () {
        var _this = this;
        this.char2.node.parent.children[0].active = false;
        this.rem2.zIndex = 2;
        this.char2.setAnimation(0, "Walk", true);
        this.char2.node.getChildByName("pop").active = false;
        cc.tween(this.char2Parent).to(1, { position: cc.v3(-193, -259) }).call(function () {
            _this.char2Parent.active = false;
        }).start();
        this.scheduleOnce(function () {
            // cc.tween(this.camera).to(0.5, { zoomRatio: 2.1 }).start()
            // cc.tween(this.camera.node).to(0.5, { position: cc.v3(-182, 0) }).start()
            _this.scene2.active = false;
        }, 1.3);
        this.scheduleOnce(function () {
            cc.tween(_this.scene2).to(0.5, { position: cc.v3(320, 0), scale: 2.1 }).start();
        }, 0.7);
        this.scheduleOnce(function () {
            _this.scene3.opacity = 0;
            _this.scene3.active = true;
            cc.tween(_this.scene3).to(0.3, { opacity: 255 }).start();
            _this.barCoin.active = false;
            _this.scheduleOnce(function () {
                if (_this.isStep == 0) {
                    _this.listHand.children[0].active = true;
                }
            }, 2.3);
        }, 1.3);
    };
    NewClass.prototype.checkOnFloor = function (localPos) {
        if (localPos.sub(this.placeChar2.position).mag() <= 600) {
            return true;
        }
        else {
            this.selectedItem.position = cc.v3(-407, -925);
            this.selectedItem = null;
            return false;
        }
    };
    NewClass.prototype.btn_shambo = function () {
        var _this = this;
        if (this.isStep > 1)
            return;
        this.isStep = 1;
        this.countStep++;
        this.listHand.children[0].active = false;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.arrBtn[0] = null;
        this.itemShambo.getComponent(cc.Button).enabled = false;
        this.itemShambo.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.sambo, false, 1);
            if (_this.countStep > 1) {
                _this.charDressManager.children[1].active = true;
                _this.xabong2.node.active = true;
                _this.xabong2.setAnimation(0, "show", false);
                _this.charDressManager.children[0].active = false;
                _this.charDressManager.children[2].active = false;
                _this.charDress.node.active = false;
            }
            else {
                _this.charDress.setAnimation(0, "Boil", true);
                _this.xabong.setAnimation(0, "animation", false);
            }
        }, 0.4);
        this.checkEnd();
        this.unschedule(this.checkHindGame);
        this.scheduleOnce(this.checkHindGame, 4);
    };
    NewClass.prototype.btn_tam = function () {
        var _this = this;
        if (this.isStep - 1) {
            cc.audioEngine.play(this.soundWrong, false, 0.5);
            this.itemVoiHoaSen.getComponent(cc.Animation).play("item_wrong");
            return;
        }
        this.isStep = 2;
        this.countStep++;
        cc.audioEngine.play(this.soundClick, false, 0.7);
        this.arrBtn[1] = null;
        this.listHand.children[1].active = false;
        this.itemVoiHoaSen.getComponent(cc.Button).enabled = false;
        this.itemVoiHoaSen.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.water, false, 1);
            _this.itemVoiHoaSen.children[1].children[0].active = true;
            _this.charDress.node.active = false;
            _this.charDressManager.children[2].active = true;
            _this.charDressManager.children[0].active = false;
            _this.charDressManager.children[1].active = false;
        }, 0.6);
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.soundAngry1, false, 0.7);
        }, 1);
        this.checkEnd();
        this.unschedule(this.checkHindGame);
        this.scheduleOnce(this.checkHindGame, 4);
    };
    NewClass.prototype.btn_saytoc = function () {
        var _this = this;
        if (this.isStep - 2) {
            cc.audioEngine.play(this.soundWrong, false, 0.5);
            this.itemMaySay.getComponent(cc.Animation).play("item_wrong");
            return;
        }
        this.isStep = 3;
        this.countStep++;
        this.arrBtn[2] = null;
        this.listHand.children[2].active = false;
        cc.audioEngine.play(this.soundClick, false, 0.7);
        this.xabong2.node.active = false;
        this.itemMaySay.getComponent(cc.Button).enabled = false;
        this.itemMaySay.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.dryer, false, 1);
            _this.itemMaySay.children[1].children[0].active = true;
            _this.charDressManager.children[0].active = true;
            _this.charDressManager.children[1].active = false;
            _this.charDressManager.children[2].active = false;
            _this.charDress.node.active = false;
        }, 0.5);
        this.scheduleOnce(function () {
            _this.itemMaySay.children[1].children[0].active = false;
        }, 2);
        this.scheduleOnce(function () {
            _this.charDressManager.children[0].active = false;
            _this.charDressManager.children[1].active = true;
        }, 2.3);
        this.unschedule(this.checkHindGame);
        this.scheduleOnce(this.checkHindGame, 4);
        this.checkEnd();
    };
    NewClass.prototype.checkHindGame = function () {
        var check = this.findHind();
        if (check != null) {
            this.listHand.children[check].active = true;
        }
    };
    NewClass.prototype.findHind = function () {
        var check = null;
        for (var i = 0; i < 3; i++) {
            if (this.arrBtn[i] != null) {
                return i;
            }
        }
        return check;
    };
    NewClass.prototype.checkEnd = function () {
        var _this = this;
        if (this.countStep == 3) {
            this.scheduleOnce(function () {
                _this.moveStep3();
            }, 2.6);
        }
    };
    NewClass.prototype.moveStep3 = function () {
        var _this = this;
        // this.scene2.zIndex = 3
        this.scene2.scale = 2;
        this.scene2.active = true;
        cc.audioEngine.play(this.soundTranscreen, false, 0.5);
        this.char2.node.active = false;
        cc.tween(this.scene2).to(0.5, { scale: 1, position: cc.v3(100, 0) }).call(function () {
            _this.scene3.active = false;
            _this.char3.node.active = true;
            cc.audioEngine.play(_this.soundAngry2, false, 0.5);
            cc.tween(_this.char3.node).to(0.5, { position: cc.v3(-456, -243) }).call(function () {
                _this.char3.setAnimation(0, "Angry", true);
                _this.onEndGame();
            }).start();
        }).start();
    };
    NewClass.prototype.onEndGame = function () {
        var _this = this;
        this.scene2.active = true;
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.soundTranscreen, false, 0.5);
            cc.audioEngine.play(_this.soundFail, false, 1);
            _this.failUI.active = true;
        }, 0.5);
        this.scheduleOnce(function () {
            _this.failUI.active = false;
            cc.audioEngine.play(_this.soundLose, false, 1);
            _this.endCard.active = true;
            _this.linkToStore.active = true;
        }, 1.2);
    };
    NewClass.prototype.update = function (dt) {
        this.lbCoin.string = globalThis.coin.toString();
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
        // this.camera.zoomRatio = 1.05
        this.endCard.scale = (logic) ? 0.7 : 1.2;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.camera.zoomRatio = (logic) ? 1 : 1.5;
        this.camera.node.position = (logic) ? cc.v3(0, 0) : cc.v3(0, 0);
        if (logic == true) {
            // this.camera.node.position = cc.v3(0, 100)
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            // this.camera.zoomRatio = 2.5
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 1.8
            }
        }
        else {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // this.camera.node.position = cc.v3(0, -30)
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 0.95
            }
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "hairCut", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "char1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "char2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "char3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
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
    ], NewClass.prototype, "barCoin", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCoin", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene3", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "uiCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnUnlock", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "rem2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "placeChar2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "itemShambo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "itemVoiHoaSen", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "itemMaySay", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "charDress", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "xabong", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "xabong2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "charDressManager", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "failUI", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundLose", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char2Hind", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handScene21", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char2Parent", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "touchNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "water", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "dryer", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "sambo", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThank", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHi", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAngry1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAngry2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundTranscreen", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCoin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundFail", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUnlock", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxDQzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDZCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJrQkM7UUF4a0JHLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBZ0IsSUFBSSxDQUFBO1FBRXpCLFdBQUssR0FBZ0IsSUFBSSxDQUFBO1FBRXpCLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUE7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixlQUFT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QUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDSztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxREFDYTtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1M7SUF0R2YsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJrQjVCO0lBQUQsZUFBQztDQTNrQkQsQUEya0JDLENBM2tCcUMsRUFBRSxDQUFDLFNBQVMsR0Eya0JqRDtrQkEza0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmdsb2JhbFRoaXMuY29pbiA9IDA7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBoYWlyQ3V0OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBjaGFyMTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgY2hhcjI6IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgY2hhcjM6IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhckNvaW46IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ29pbjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb2luOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NlbmUxOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjZW5lMzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICB1aUNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5VbmxvY2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZW0yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhY2VDaGFyMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbVNoYW1ibzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGl0ZW1Wb2lIb2FTZW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtTWF5U2F5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGNoYXJEcmVzczogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgeGFib25nOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICB4YWJvbmcyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJEcmVzc01hbmFnZXI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZhaWxVSTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcjJIaW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vaGFuZFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kU2NlbmUyMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXIyUGFyZW50OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdG91Y2hOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHdhdGVyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGRyeWVyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNhbWJvOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGFuazogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5MTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQW5ncnkyOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUcmFuc2NyZWVuOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENvaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRGYWlsOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVW5sb2NrOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkSXRlbTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIGFyckJ0biA9IFtdXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuMylcclxuICAgICAgICB0aGlzLmFyckJ0biA9IFt0aGlzLml0ZW1TaGFtYm8sIHRoaXMuaXRlbVZvaUhvYVNlbiwgdGhpcy5pdGVtTWF5U2F5XVxyXG4gICAgICAgIC8vIHRoaXMuc3RhcnRTY2VuZSgpXHJcbiAgICB9XHJcbiAgICBjb21wbGV0ZVNjZW5lKCkge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhcnRTY2VuZSgpXHJcbiAgICAgICAgLy8gdGhpcy5zY2VuZTEuYWN0aXZlPWZhbHNlXHJcbiAgICAgICAgdGhpcy5zY2VuZTIuc2NhbGUgPSAyO1xyXG4gICAgICAgIHRoaXMuc2NlbmUyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNjZW5lMikudG8oMC4zLCB7IHNjYWxlOiAxIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2NlbmUoKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIHN0YXJ0U2NlbmUoKSB7XHJcbiAgICAgICAgdGhpcy5iYXJDb2luLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBsZXQgY2hhcjFOb2RlID0gdGhpcy5jaGFyMS5ub2RlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVHJhbnNjcmVlbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgY2MudHdlZW4oY2hhcjFOb2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDExMCwgLTIyMykgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjEuc2V0QW5pbWF0aW9uKDAsIFwiSGFwcHlcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGFuaywgZmFsc2UsIDAuNylcclxuICAgICAgICAgICAgY2hhcjFOb2RlLnNjYWxlWCA9IC0xLjU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5naXZlQ29pbigpXHJcbiAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5jaGFyMi5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXN1bmxvY2spIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5oYW5kU2NlbmUyMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDMpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyMi5ub2RlLnBhcmVudCkudG8oMy44LCB7IHBvc2l0aW9uOiBjYy52MygtNDA3LCAtOTI1KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyMi5zZXRBbmltYXRpb24oMCwgXCJUYWxrXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNoYXIyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIaSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGdpdmVDb2luKCkge1xyXG4gICAgICAgIGxldCBwb3NTdGFydCA9IHRoaXMuY2hhcjEubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY2hhcjEubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zU3RhcnQgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NTdGFydCkuYWRkKGNjLnYzKDAsIDQyMCkpO1xyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmJhckNvaW4uY2hpbGRyZW5bMV0ucG9zaXRpb247XHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy5iYXJDb2luLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NFbmQpO1xyXG4gICAgICAgIHBvc0VuZCA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZClcclxuXHJcbiAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKChwb3NFbmQueCArIDUwMCksIChwb3NTdGFydC55ICsgcG9zRW5kLnkpIC8gMilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29pbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2luLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIGNvaW4ucGFyZW50ID0gdGhpcy5zY2VuZTIucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgLy8gY29pbi5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgICAgICAgICBjb2luLnBvc2l0aW9uID0gcG9zU3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBjb2luLnpJbmRleCA9IDVcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4pLmJlemllclRvKDEsIGNjLnYyKHBvc1N0YXJ0LngsIHBvc1N0YXJ0LnkpLCBtaWRQb3MsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSkpLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4pLnRvKDEsIHsgc2NhbGU6IDEuMyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuY29pbiArPSA1MFxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAwLjA1ICogaSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blVubG9jay5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB9LCAwLjYpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIxLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjEubm9kZS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhcjEubm9kZSkuYnkoNCwgeyBwb3NpdGlvbjogY2MudjMoMTYwMCwgMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXIxLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG4gICAgdW5sb2NrQ29pbigpIHtcclxuICAgICAgICBsZXQgcG9zU3RhcnQgPSB0aGlzLmJ0blVubG9jay5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuYnRuVW5sb2NrLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3NTdGFydCA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc1N0YXJ0KS5hZGQoY2MudjMoMCwgMCkpO1xyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmJhckNvaW4uY2hpbGRyZW5bMV0ucG9zaXRpb247XHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy5iYXJDb2luLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NFbmQpO1xyXG4gICAgICAgIHBvc0VuZCA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZClcclxuXHJcbiAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKChwb3NFbmQueCArIDUwMCksIChwb3NTdGFydC55ICsgcG9zRW5kLnkpIC8gMilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29pbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2luLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIGNvaW4ucGFyZW50ID0gdGhpcy5zY2VuZTIucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgLy8gY29pbi5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgICAgICAgICBjb2luLnBvc2l0aW9uID0gcG9zRW5kO1xyXG4gICAgICAgICAgICAgICAgY29pbi56SW5kZXggPSA1XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihjb2luKS5iZXppZXJUbygwLjYsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSksIG1pZFBvcywgY2MudjIocG9zU3RhcnQueCwgcG9zU3RhcnQueSkpLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4pLnRvKDAuNiwgeyBzY2FsZTogMS4zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4uZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luIC09IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5VbmxvY2suZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImJ0bl9zY2FsZVwiKVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAwLjA0ICogaSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaXN1bmxvY2sgPSBmYWxzZVxyXG4gICAgY291bnRTdGVwID0gMFxyXG4gICAgYnRuX3VubG9jayhldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzdW5sb2NrKSByZXR1cm47XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMzU7IGkrKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWxUaGlzLmNvaW4gLT0gMTBcclxuXHJcbiAgICAgICAgLy8gICAgIH0sIDAuMDIgKiBpKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmlzdW5sb2NrID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaGFuZFNjZW5lMjEuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy51bmxvY2tDb2luKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0blVubG9jay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yZW0yLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgICAgIHRoaXMucmVtMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucmVtMikudG8oMC4zLCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FdmVudExpc3RlbmVyKClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcjJIaW5kLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcjIubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIaSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIH0sIDAuNClcclxuXHJcbiAgICAgICAgfSwgMC44NSlcclxuXHJcbiAgICB9XHJcbiAgICBvbkV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb2ZmRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtKSByZXR1cm5cclxuXHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIGxldCB3b3JsZFBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHNjcmVlblBvc1xyXG5cclxuICAgICAgICAvLyBDaHV54buDbiB3b3JsZCDihpIgbG9jYWwgKG5vZGUgbWFpbilcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLnNjZW5lMi5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcjJQYXJlbnQucG9zaXRpb24uc3ViKGNjLnYzKGxvY2FsUG9zLngsIGxvY2FsUG9zLnkpKS5tYWcoKSA8IDMwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIyUGFyZW50LnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmNoYXIyUGFyZW50XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjJIaW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjJQYXJlbnQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDEkOG6t3QgduG7iyB0csOtIGNobyBpdGVtXHJcblxyXG4gICAgICAgIC8vIHRoaXMubWFpbi5ndWlkZURyYWcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIGxldCB3b3JsZFBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHNjcmVlblBvc1xyXG5cclxuICAgICAgICAvLyBDaHV54buDbiB3b3JsZCDihpIgbG9jYWwgKG5vZGUgbWFpbilcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICAvLyDEkOG6t3QgduG7iyB0csOtIGNobyBpdGVtXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBzY3JlZW5Qb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQoc2NyZWVuUG9zKTtcclxuXHJcbiAgICAgICAgLy8gQ2h1eeG7g24gd29ybGQg4oaSIGxvY2FsIChub2RlIG1haW4pXHJcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgLy8gxJDhurd0IHbhu4sgdHLDrSBjaG8gaXRlbVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrT25GbG9vcihsb2NhbFBvcyk7XHJcbiAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0ucG9zaXRpb24gPSBjYy52MygtNTAwLCAtMjU5KVxyXG4gICAgICAgICAgICB0aGlzLm9mZkV2ZW50TGlzdGVuZXIoKVxyXG4gICAgICAgICAgICB0aGlzLm1vdmVTdGVwMigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZVN0ZXAyKCkge1xyXG4gICAgICAgIHRoaXMuY2hhcjIubm9kZS5wYXJlbnQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5yZW0yLnpJbmRleCA9IDJcclxuICAgICAgICB0aGlzLmNoYXIyLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jaGFyMi5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyMlBhcmVudCkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTE5MywgLTI1OSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjJQYXJlbnQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMC41LCB7IHpvb21SYXRpbzogMi4xIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtMTgyLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUyLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIH0sIDEuMylcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc2NlbmUyKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDMyMCwgMCksIHNjYWxlOiAyLjEgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICB9LCAwLjcpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lMy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZTMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zY2VuZTMpLnRvKDAuMywgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLmJhckNvaW4uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sIDIuMylcclxuICAgICAgICB9LCAxLjMpXHJcbiAgICB9XHJcbiAgICBjaGVja09uRmxvb3IobG9jYWxQb3MpIHtcclxuICAgICAgICBpZiAobG9jYWxQb3Muc3ViKHRoaXMucGxhY2VDaGFyMi5wb3NpdGlvbikubWFnKCkgPD0gNjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5wb3NpdGlvbiA9IGNjLnYzKC00MDcsIC05MjUpXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNDbGljayA9IGZhbHNlXHJcbiAgICBidG5fc2hhbWJvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA+IDEpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzU3RlcCA9IDFcclxuICAgICAgICB0aGlzLmNvdW50U3RlcCsrXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmFyckJ0blswXSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pdGVtU2hhbWJvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLml0ZW1TaGFtYm8uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc2FtYm8sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY291bnRTdGVwID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhhYm9uZzIubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnhhYm9uZzIuc2V0QW5pbWF0aW9uKDAsIFwic2hvd1wiLCBmYWxzZSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJEcmVzcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJEcmVzcy5zZXRBbmltYXRpb24oMCwgXCJCb2lsXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54YWJvbmcuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDAuNClcclxuICAgICAgICB0aGlzLmNoZWNrRW5kKClcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmRHYW1lKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tIaW5kR2FtZSwgNClcclxuXHJcbiAgICB9XHJcbiAgICBidG5fdGFtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCEgLSAxKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Wb2lIb2FTZW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIml0ZW1fd3JvbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1N0ZXAgPSAyXHJcbiAgICAgICAgdGhpcy5jb3VudFN0ZXArK1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMC43KVxyXG5cclxuICAgICAgICB0aGlzLmFyckJ0blsxXSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXRlbVZvaUhvYVNlbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtVm9pSG9hU2VuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy53YXRlciwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Wb2lIb2FTZW4uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG5cclxuICAgICAgICB9LCAwLjYpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQW5ncnkxLCBmYWxzZSwgMC43KVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5jaGVja0VuZCgpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kR2FtZSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmNoZWNrSGluZEdhbWUsIDQpXHJcbiAgICB9XHJcbiAgICBidG5fc2F5dG9jKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCEgLSAyKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICB0aGlzLml0ZW1NYXlTYXkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIml0ZW1fd3JvbmdcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNTdGVwID0gM1xyXG4gICAgICAgIHRoaXMuY291bnRTdGVwKytcclxuICAgICAgICB0aGlzLmFyckJ0blsyXSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMC43KVxyXG5cclxuICAgICAgICB0aGlzLnhhYm9uZzIubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1NYXlTYXkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbU1heVNheS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZHJ5ZXIsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtTWF5U2F5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbU1heVNheS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICB9LCAyKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSwgMi4zKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZEdhbWUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jaGVja0hpbmRHYW1lLCA0KVxyXG5cclxuICAgICAgICB0aGlzLmNoZWNrRW5kKClcclxuXHJcbiAgICB9XHJcbiAgICBjaGVja0hpbmRHYW1lKCkge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuZmluZEhpbmQoKVxyXG4gICAgICAgIGlmIChjaGVjayAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bY2hlY2tdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmaW5kSGluZCgpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSBudWxsXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyQnRuW2ldICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrXHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tFbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRTdGVwID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlU3RlcDMoKVxyXG4gICAgICAgICAgICB9LCAyLjYpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZVN0ZXAzKCkge1xyXG4gICAgICAgIC8vIHRoaXMuc2NlbmUyLnpJbmRleCA9IDNcclxuICAgICAgICB0aGlzLnNjZW5lMi5zY2FsZSA9IDJcclxuICAgICAgICB0aGlzLnNjZW5lMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVHJhbnNjcmVlbiwgZmFsc2UsIDAuNSlcclxuXHJcbiAgICAgICAgdGhpcy5jaGFyMi5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zY2VuZTIpLnRvKDAuNSwgeyBzY2FsZTogMSwgcG9zaXRpb246IGNjLnYzKDEwMCwgMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUzLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MiwgZmFsc2UsIDAuNSlcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhcjMubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNDU2LCAtMjQzKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcjMuc2V0QW5pbWF0aW9uKDAsIFwiQW5ncnlcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICB9XHJcbiAgICBvbkVuZEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVHJhbnNjcmVlbiwgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRmFpbCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmZhaWxVSS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZhaWxVSS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRMb3NlLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDEuMilcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5sYkNvaW4uc3RyaW5nID0gZ2xvYmFsVGhpcy5jb2luLnRvU3RyaW5nKClcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuMDVcclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMC43IDogMS4yXHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNiA6IDAuNFxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IChsb2dpYykgPyAxIDogMS41XHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAwKSA6IGNjLnYzKDAsIDApXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDEwMClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMi41XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrIGlwaG9uZXhcIilcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS44XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0zMClcclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC45NVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=