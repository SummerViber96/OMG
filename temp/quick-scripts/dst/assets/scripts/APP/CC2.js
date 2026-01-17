
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
            cc.audioEngine.play(_this.soundThank, false, 1);
            char1Node.scaleX = -1.5;
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundCoin, false, 1);
                _this.giveCoin();
            }, 0.3);
        }).start();
        this.char2.setAnimation(0, "Walk", true);
        cc.tween(this.char2.node.parent).to(2.7, { position: cc.v3(-407, -925) }).call(function () {
            _this.char2.setAnimation(0, "Talk", true);
            _this.char2.node.getChildByName("pop").active = true;
            cc.audioEngine.play(_this.soundHi, false, 1);
            _this.scheduleOnce(function () {
                if (_this.isunlock)
                    return;
                _this.handScene21.active = true;
            }, 1);
        }).start();
    };
    NewClass.prototype.giveCoin = function () {
        var _this = this;
        var posStart = this.char1.node.parent.convertToWorldSpaceAR(this.char1.node.position);
        // posStart = this.camera.getWorldToScreenPoint(posStart);
        // posStart = this.uiCamera.getScreenToWorldPoint(posStart);
        // posStart = this.uiNode.convertToNodeSpaceAR(posStart).add(cc.v3(0, 420));
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
    NewClass.prototype.btn_unlock = function () {
        if (this.isunlock)
            return;
        cc.audioEngine.play(this.soundUnlock, false, 1);
        globalThis.coin -= 350;
        this.handScene21.active = false;
        this.isunlock = true;
        this.btnUnlock.active = false;
        this.rem2.opacity = 0;
        this.rem2.active = true;
        cc.tween(this.rem2).to(0.3, { opacity: 255 }).start();
        this.onEventListener();
        this.char2Hind.active = true;
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
                _this.xabong.setAnimation(0, "show", false);
            }
        }, 0.4);
        this.checkEnd();
        this.unschedule(this.checkHindGame);
        this.scheduleOnce(this.checkHindGame, 3);
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
        this.scheduleOnce(this.checkHindGame, 3);
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
        this.scheduleOnce(this.checkHindGame, 3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxDQzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDZCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdpQkM7UUE3aEJHLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBZ0IsSUFBSSxDQUFBO1FBRXpCLFdBQUssR0FBZ0IsSUFBSSxDQUFBO1FBRXpCLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUE7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixlQUFT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QVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDcEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtZQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMvRCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ2xDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRWQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBSVQsQ0FBQztJQUdELDZCQUFVLEdBQVY7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUUvQyxVQUFVLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQTtRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FB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OzZDQUNLO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNhO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDUztJQXRHZixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ2lCNUI7SUFBRCxlQUFDO0NBaGlCRCxBQWdpQkMsQ0FoaUJxQyxFQUFFLENBQUMsU0FBUyxHQWdpQmpEO2tCQWhpQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZ2xvYmFsVGhpcy5jb2luID0gMDtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGhhaXJDdXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGNoYXIxOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBjaGFyMjogc3AuU2tlbGV0b24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBjaGFyMzogc3AuU2tlbGV0b24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyQ29pbjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDb2luOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkNvaW46IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjZW5lMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NlbmUzOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIHVpQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blVubG9jazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJlbTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGFjZUNoYXIyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtU2hhbWJvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbVZvaUhvYVNlbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGl0ZW1NYXlTYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgY2hhckRyZXNzOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICB4YWJvbmc6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIHhhYm9uZzI6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhckRyZXNzTWFuYWdlcjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmFpbFVJOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFyMkhpbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy9oYW5kXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmRTY2VuZTIxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcjJQYXJlbnQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RIYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0b3VjaE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgd2F0ZXI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZHJ5ZXI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc2FtYm86IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoYW5rOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIaTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQW5ncnkxOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRBbmdyeTI6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRyYW5zY3JlZW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ29pbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEZhaWw6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRVbmxvY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgYXJyQnRuID0gW11cclxuICAgIGlzU3RlcCA9IDBcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC4zKVxyXG4gICAgICAgIHRoaXMuYXJyQnRuID0gW3RoaXMuaXRlbVNoYW1ibywgdGhpcy5pdGVtVm9pSG9hU2VuLCB0aGlzLml0ZW1NYXlTYXldXHJcbiAgICAgICAgLy8gdGhpcy5zdGFydFNjZW5lKClcclxuICAgIH1cclxuICAgIGNvbXBsZXRlU2NlbmUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGFydFNjZW5lKClcclxuICAgICAgICAvLyB0aGlzLnNjZW5lMS5hY3RpdmU9ZmFsc2VcclxuICAgICAgICB0aGlzLnNjZW5lMi5zY2FsZSA9IDI7XHJcbiAgICAgICAgdGhpcy5zY2VuZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc2NlbmUyKS50bygwLjMsIHsgc2NhbGU6IDEgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUxLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTY2VuZSgpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgc3RhcnRTY2VuZSgpIHtcclxuICAgICAgICB0aGlzLmJhckNvaW4uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGxldCBjaGFyMU5vZGUgPSB0aGlzLmNoYXIxLm5vZGVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUcmFuc2NyZWVuLCBmYWxzZSwgMSlcclxuICAgICAgICBjYy50d2VlbihjaGFyMU5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMTEwLCAtMjIzKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyMS5zZXRBbmltYXRpb24oMCwgXCJIYXBweVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoYW5rLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgY2hhcjFOb2RlLnNjYWxlWCA9IC0xLjU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5naXZlQ29pbigpXHJcbiAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5jaGFyMi5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhcjIubm9kZS5wYXJlbnQpLnRvKDIuNywgeyBwb3NpdGlvbjogY2MudjMoLTQwNywgLTkyNSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjIuc2V0QW5pbWF0aW9uKDAsIFwiVGFsa1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyMi5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGksIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc3VubG9jaykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kU2NlbmUyMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGdpdmVDb2luKCkge1xyXG4gICAgICAgIGxldCBwb3NTdGFydCA9IHRoaXMuY2hhcjEubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY2hhcjEubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgLy8gcG9zU3RhcnQgPSB0aGlzLmNhbWVyYS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zU3RhcnQpO1xyXG4gICAgICAgIC8vIHBvc1N0YXJ0ID0gdGhpcy51aUNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zU3RhcnQpO1xyXG4gICAgICAgIC8vIHBvc1N0YXJ0ID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zU3RhcnQpLmFkZChjYy52MygwLCA0MjApKTtcclxuICAgICAgICBwb3NTdGFydCA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc1N0YXJ0KS5hZGQoY2MudjMoMCwgNDIwKSk7XHJcbiAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuYmFyQ29pbi5jaGlsZHJlblsxXS5wb3NpdGlvbjtcclxuICAgICAgICBwb3NFbmQgPSB0aGlzLmJhckNvaW4uY29udmVydFRvV29ybGRTcGFjZUFSKHBvc0VuZCk7XHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKVxyXG5cclxuICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHBvc0VuZC54ICsgNTAwKSwgKHBvc1N0YXJ0LnkgKyBwb3NFbmQueSkgLyAyKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2luID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvaW4ucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLnNjZW5lMi5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2luLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICAgICAgICAgIGNvaW4ucG9zaXRpb24gPSBwb3NTdGFydDtcclxuICAgICAgICAgICAgICAgIGNvaW4uekluZGV4ID0gNVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oY29pbikuYmV6aWVyVG8oMSwgY2MudjIocG9zU3RhcnQueCwgcG9zU3RhcnQueSksIG1pZFBvcywgY2MudjIocG9zRW5kLngsIHBvc0VuZC55KSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oY29pbikudG8oMSwgeyBzY2FsZTogMS4zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4uZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDUwXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIDAuMDUgKiBpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuVW5sb2NrLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIH0sIDAuNilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjEuc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyMS5ub2RlLnpJbmRleCA9IDJcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyMS5ub2RlKS5ieSg0LCB7IHBvc2l0aW9uOiBjYy52MygxNjAwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcjEubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIH0sIDEpXHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBpc3VubG9jayA9IGZhbHNlXHJcbiAgICBjb3VudFN0ZXAgPSAwXHJcbiAgICBidG5fdW5sb2NrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzdW5sb2NrKSByZXR1cm47XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVW5sb2NrLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgZ2xvYmFsVGhpcy5jb2luIC09IDM1MFxyXG4gICAgICAgIHRoaXMuaGFuZFNjZW5lMjEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzdW5sb2NrID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuVW5sb2NrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVtMi5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMucmVtMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5yZW0yKS50bygwLjMsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLm9uRXZlbnRMaXN0ZW5lcigpXHJcbiAgICAgICAgdGhpcy5jaGFyMkhpbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgb25FdmVudExpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9mZkV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGxldCBzY3JlZW5Qb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBsZXQgd29ybGRQb3MgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQoc2NyZWVuUG9zKTtcclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBzY3JlZW5Qb3NcclxuXHJcbiAgICAgICAgLy8gQ2h1eeG7g24gd29ybGQg4oaSIGxvY2FsIChub2RlIG1haW4pXHJcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5zY2VuZTIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIGlmICh0aGlzLmNoYXIyUGFyZW50LnBvc2l0aW9uLnN1YihjYy52Myhsb2NhbFBvcy54LCBsb2NhbFBvcy55KSkubWFnKCkgPCAzMDApIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyMlBhcmVudC5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5jaGFyMlBhcmVudFxyXG4gICAgICAgICAgICB0aGlzLmNoYXIySGluZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNoYXIyUGFyZW50LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gxJDhurd0IHbhu4sgdHLDrSBjaG8gaXRlbVxyXG5cclxuICAgICAgICAvLyB0aGlzLm1haW4uZ3VpZGVEcmFnLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vcGFjaXR5ID0gMFxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzY3JlZW5Qb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBsZXQgd29ybGRQb3MgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQoc2NyZWVuUG9zKTtcclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBzY3JlZW5Qb3NcclxuXHJcbiAgICAgICAgLy8gQ2h1eeG7g24gd29ybGQg4oaSIGxvY2FsIChub2RlIG1haW4pXHJcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgLy8gxJDhurd0IHbhu4sgdHLDrSBjaG8gaXRlbVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgc2NyZWVuUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XHJcblxyXG4gICAgICAgIC8vIENodXnhu4NuIHdvcmxkIOKGkiBsb2NhbCAobm9kZSBtYWluKVxyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIMSQ4bq3dCB24buLIHRyw60gY2hvIGl0ZW1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja09uRmxvb3IobG9jYWxQb3MpO1xyXG4gICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnBvc2l0aW9uID0gY2MudjMoLTUwMCwgLTI1OSlcclxuICAgICAgICAgICAgdGhpcy5vZmZFdmVudExpc3RlbmVyKClcclxuICAgICAgICAgICAgdGhpcy5tb3ZlU3RlcDIoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVTdGVwMigpIHtcclxuICAgICAgICB0aGlzLmNoYXIyLm5vZGUucGFyZW50LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMucmVtMi56SW5kZXggPSAyXHJcbiAgICAgICAgdGhpcy5jaGFyMi5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2hhcjIubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhcjJQYXJlbnQpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0xOTMsIC0yNTkpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIyUGFyZW50LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuNSwgeyB6b29tUmF0aW86IDIuMSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTE4MiwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lMi5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICB9LCAxLjMpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNjZW5lMikudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygzMjAsIDApLCBzY2FsZTogMi4xIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgfSwgMC43KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZTMub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc2NlbmUzKS50bygwLjMsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5iYXJDb2luLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSwgMS4zKVxyXG4gICAgfVxyXG4gICAgY2hlY2tPbkZsb29yKGxvY2FsUG9zKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsUG9zLnN1Yih0aGlzLnBsYWNlQ2hhcjIucG9zaXRpb24pLm1hZygpIDw9IDYwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0ucG9zaXRpb24gPSBjYy52MygtNDA3LCAtOTI1KVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzQ2xpY2sgPSBmYWxzZVxyXG4gICAgYnRuX3NoYW1ibygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPiAxKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1N0ZXAgPSAxXHJcbiAgICAgICAgdGhpcy5jb3VudFN0ZXArK1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5hcnJCdG5bMF0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXRlbVNoYW1iby5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtU2hhbWJvLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNhbWJvLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50U3RlcCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54YWJvbmcyLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy54YWJvbmcyLnNldEFuaW1hdGlvbigwLCBcInNob3dcIiwgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3Mubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3Muc2V0QW5pbWF0aW9uKDAsIFwiQm9pbFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueGFib25nLnNldEFuaW1hdGlvbigwLCBcInNob3dcIiwgZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgMC40KVxyXG4gICAgICAgIHRoaXMuY2hlY2tFbmQoKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZEdhbWUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jaGVja0hpbmRHYW1lLCAzKVxyXG5cclxuICAgIH1cclxuICAgIGJ0bl90YW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwISAtIDEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVZvaUhvYVNlbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaXRlbV93cm9uZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzU3RlcCA9IDJcclxuICAgICAgICB0aGlzLmNvdW50U3RlcCsrXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAwLjcpXHJcblxyXG4gICAgICAgIHRoaXMuYXJyQnRuWzFdID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pdGVtVm9pSG9hU2VuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLml0ZW1Wb2lIb2FTZW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLndhdGVyLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVZvaUhvYVNlbi5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuXHJcblxyXG4gICAgICAgIH0sIDAuNilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRBbmdyeTEsIGZhbHNlLCAwLjcpXHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICB0aGlzLmNoZWNrRW5kKClcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmRHYW1lKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tIaW5kR2FtZSwgMylcclxuICAgIH1cclxuICAgIGJ0bl9zYXl0b2MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwISAtIDIpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbU1heVNheS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaXRlbV93cm9uZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1N0ZXAgPSAzXHJcbiAgICAgICAgdGhpcy5jb3VudFN0ZXArK1xyXG4gICAgICAgIHRoaXMuYXJyQnRuWzJdID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAwLjcpXHJcblxyXG4gICAgICAgIHRoaXMueGFib25nMi5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMuaXRlbU1heVNheS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtTWF5U2F5LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5kcnllciwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1NYXlTYXkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtTWF5U2F5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIH0sIDIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9LCAyLjMpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kR2FtZSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmNoZWNrSGluZEdhbWUsIDMpXHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tFbmQoKVxyXG5cclxuICAgIH1cclxuICAgIGNoZWNrSGluZEdhbWUoKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5maW5kSGluZCgpXHJcbiAgICAgICAgaWYgKGNoZWNrICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbltjaGVja10uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpbmRIaW5kKCkge1xyXG4gICAgICAgIGxldCBjaGVjayA9IG51bGxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJCdG5baV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hlY2tcclxuXHJcbiAgICB9XHJcbiAgICBjaGVja0VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudFN0ZXAgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTdGVwMygpXHJcbiAgICAgICAgICAgIH0sIDIuNilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3ZlU3RlcDMoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zY2VuZTIuekluZGV4ID0gM1xyXG4gICAgICAgIHRoaXMuc2NlbmUyLnNjYWxlID0gMlxyXG4gICAgICAgIHRoaXMuc2NlbmUyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUcmFuc2NyZWVuLCBmYWxzZSwgMC41KVxyXG5cclxuICAgICAgICB0aGlzLmNoYXIyLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNjZW5lMikudG8oMC41LCB7IHNjYWxlOiAxLCBwb3NpdGlvbjogY2MudjMoMTAwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZTMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5jaGFyMy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQW5ncnkyLCBmYWxzZSwgMC41KVxyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyMy5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKC00NTYsIC0yNDMpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyMy5zZXRBbmltYXRpb24oMCwgXCJBbmdyeVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUoKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgIH1cclxuICAgIG9uRW5kR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUcmFuc2NyZWVuLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRGYWlsLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmFpbFVJLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbFVJLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvc2UsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfSwgMS4yKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmNvaW4udG9TdHJpbmcoKVxyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS4wNVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAwLjcgOiAxLjJcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gKGxvZ2ljKSA/IDEgOiAxLjVcclxuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIDApIDogY2MudjMoMCwgMClcclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMTAwKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAyLjVcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjhcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTMwKVxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjk1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==