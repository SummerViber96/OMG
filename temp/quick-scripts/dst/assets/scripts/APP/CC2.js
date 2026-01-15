
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
        _this.selectedItem = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.arrBtn = [];
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
        cc.audioEngine.play(this.hairCut, false, 1);
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
        cc.tween(char1Node).to(0.8, { position: cc.v3(110, -223) }).call(function () {
            _this.char1.setAnimation(0, "Happy", false);
            char1Node.scaleX = -1.5;
            _this.scheduleOnce(function () {
                _this.giveCoin();
            }, 0.3);
        }).start();
        this.char2.setAnimation(0, "Walk", true);
        cc.tween(this.char2.node.parent).to(2.7, { position: cc.v3(-407, -925) }).call(function () {
            _this.char2.setAnimation(0, "Talk", true);
            _this.char2.node.getChildByName("pop").active = true;
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
        this.countStep++;
        this.listHand.children[0].active = false;
        this.arrBtn[0] = null;
        this.itemShambo.getComponent(cc.Button).enabled = false;
        this.itemShambo.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
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
        this.countStep++;
        this.arrBtn[1] = null;
        this.listHand.children[1].active = false;
        this.itemVoiHoaSen.getComponent(cc.Button).enabled = false;
        this.itemVoiHoaSen.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            _this.itemVoiHoaSen.children[0].children[0].active = true;
            _this.charDress.node.active = false;
            _this.charDressManager.children[2].active = true;
            _this.charDressManager.children[0].active = false;
            _this.charDressManager.children[1].active = false;
        }, 0.6);
        this.checkEnd();
        this.unschedule(this.checkHindGame);
        this.scheduleOnce(this.checkHindGame, 3);
    };
    NewClass.prototype.btn_saytoc = function () {
        var _this = this;
        this.countStep++;
        this.arrBtn[2] = null;
        this.listHand.children[2].active = false;
        this.xabong2.node.active = false;
        this.itemMaySay.getComponent(cc.Button).enabled = false;
        this.itemMaySay.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            _this.itemMaySay.children[0].children[0].active = true;
            _this.charDressManager.children[0].active = true;
            _this.charDressManager.children[1].active = false;
            _this.charDressManager.children[2].active = false;
            _this.charDress.node.active = false;
        }, 0.5);
        this.scheduleOnce(function () {
            _this.itemMaySay.children[0].children[0].active = false;
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
        this.char2.node.active = false;
        cc.tween(this.scene2).to(0.5, { scale: 1, position: cc.v3(100, 0) }).call(function () {
            _this.scene3.active = false;
            _this.char3.node.active = true;
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
        this.endCard.scale = (logic) ? 0.7 : 0.7;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxDQzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDZCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdlQztRQTdkRyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQWdCLElBQUksQ0FBQTtRQUV6QixXQUFLLEdBQWdCLElBQUksQ0FBQTtRQUV6QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFHcEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFBO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxH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LFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBNUVSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnZTVCO0lBQUQsZUFBQztDQWhlRCxBQWdlQyxDQWhlcUMsRUFBRSxDQUFDLFNBQVMsR0FnZWpEO2tCQWhlb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5nbG9iYWxUaGlzLmNvaW4gPSAwO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgaGFpckN1dDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgY2hhcjE6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGNoYXIyOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGNoYXIzOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJDb2luOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNvaW46IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ29pbjogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjZW5lMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NlbmUyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTM6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuVW5sb2NrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmVtMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYWNlQ2hhcjI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGl0ZW1TaGFtYm86IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtVm9pSG9hU2VuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbU1heVNheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBjaGFyRHJlc3M6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIHhhYm9uZzogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgeGFib25nMjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFyRHJlc3NNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmYWlsVUk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXIySGluZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL2hhbmRcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZFNjZW5lMjE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFyMlBhcmVudDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRvdWNoTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkSXRlbTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIGFyckJ0biA9IFtdXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuMylcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuaGFpckN1dCwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5hcnJCdG4gPSBbdGhpcy5pdGVtU2hhbWJvLCB0aGlzLml0ZW1Wb2lIb2FTZW4sIHRoaXMuaXRlbU1heVNheV1cclxuICAgICAgICAvLyB0aGlzLnN0YXJ0U2NlbmUoKVxyXG4gICAgfVxyXG4gICAgY29tcGxldGVTY2VuZSgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXJ0U2NlbmUoKVxyXG4gICAgICAgIC8vIHRoaXMuc2NlbmUxLmFjdGl2ZT1mYWxzZVxyXG4gICAgICAgIHRoaXMuc2NlbmUyLnNjYWxlID0gMjtcclxuICAgICAgICB0aGlzLnNjZW5lMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zY2VuZTIpLnRvKDAuMywgeyBzY2FsZTogMSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZTEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5zdGFydFNjZW5lKClcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBzdGFydFNjZW5lKCkge1xyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgbGV0IGNoYXIxTm9kZSA9IHRoaXMuY2hhcjEubm9kZVxyXG4gICAgICAgIGNjLnR3ZWVuKGNoYXIxTm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygxMTAsIC0yMjMpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIxLnNldEFuaW1hdGlvbigwLCBcIkhhcHB5XCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgY2hhcjFOb2RlLnNjYWxlWCA9IC0xLjU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2l2ZUNvaW4oKVxyXG4gICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuY2hhcjIuc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXIyLm5vZGUucGFyZW50KS50bygyLjcsIHsgcG9zaXRpb246IGNjLnYzKC00MDcsIC05MjUpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIyLnNldEFuaW1hdGlvbigwLCBcIlRhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjIubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzdW5sb2NrKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRTY2VuZTIxLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgZ2l2ZUNvaW4oKSB7XHJcbiAgICAgICAgbGV0IHBvc1N0YXJ0ID0gdGhpcy5jaGFyMS5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5jaGFyMS5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAvLyBwb3NTdGFydCA9IHRoaXMuY2FtZXJhLmdldFdvcmxkVG9TY3JlZW5Qb2ludChwb3NTdGFydCk7XHJcbiAgICAgICAgLy8gcG9zU3RhcnQgPSB0aGlzLnVpQ2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3NTdGFydCk7XHJcbiAgICAgICAgLy8gcG9zU3RhcnQgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NTdGFydCkuYWRkKGNjLnYzKDAsIDQyMCkpO1xyXG4gICAgICAgIHBvc1N0YXJ0ID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zU3RhcnQpLmFkZChjYy52MygwLCA0MjApKTtcclxuICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy5iYXJDb2luLmNoaWxkcmVuWzFdLnBvc2l0aW9uO1xyXG4gICAgICAgIHBvc0VuZCA9IHRoaXMuYmFyQ29pbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zRW5kKTtcclxuICAgICAgICBwb3NFbmQgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NFbmQpXHJcblxyXG4gICAgICAgIGxldCBtaWRQb3MgPSBjYy52MigocG9zRW5kLnggKyA1MDApLCAocG9zU3RhcnQueSArIHBvc0VuZC55KSAvIDIpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNvaW4pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29pbi5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBjb2luLnBhcmVudCA9IHRoaXMuc2NlbmUyLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIC8vIGNvaW4ucG9zaXRpb24gPSBjYy52MygwLCAwKVxyXG4gICAgICAgICAgICAgICAgY29pbi5wb3NpdGlvbiA9IHBvc1N0YXJ0O1xyXG4gICAgICAgICAgICAgICAgY29pbi56SW5kZXggPSA1XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihjb2luKS5iZXppZXJUbygxLCBjYy52Mihwb3NTdGFydC54LCBwb3NTdGFydC55KSwgbWlkUG9zLCBjYy52Mihwb3NFbmQueCwgcG9zRW5kLnkpKS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihjb2luKS50bygxLCB7IHNjYWxlOiAxLjMgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gNTBcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgMC4wNSAqIGkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idG5VbmxvY2suZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgfSwgMC42KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyMS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIxLm5vZGUuekluZGV4ID0gMlxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXIxLm5vZGUpLmJ5KDQsIHsgcG9zaXRpb246IGNjLnYzKDE2MDAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyMS5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgfSwgMSlcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIGlzdW5sb2NrID0gZmFsc2VcclxuICAgIGNvdW50U3RlcCA9IDBcclxuICAgIGJ0bl91bmxvY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXN1bmxvY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmhhbmRTY2VuZTIxLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc3VubG9jayA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0blVubG9jay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlbTIub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLnJlbTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucmVtMikudG8oMC4zLCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5vbkV2ZW50TGlzdGVuZXIoKVxyXG4gICAgICAgIHRoaXMuY2hhcjJIaW5kLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIG9uRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvZmZFdmVudExpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHJldHVyblxyXG5cclxuICAgICAgICBsZXQgc2NyZWVuUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHdvcmxkUG9zID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gc2NyZWVuUG9zXHJcblxyXG4gICAgICAgIC8vIENodXnhu4NuIHdvcmxkIOKGkiBsb2NhbCAobm9kZSBtYWluKVxyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMuc2NlbmUyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICBpZiAodGhpcy5jaGFyMlBhcmVudC5wb3NpdGlvbi5zdWIoY2MudjMobG9jYWxQb3MueCwgbG9jYWxQb3MueSkpLm1hZygpIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjJQYXJlbnQuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuY2hhcjJQYXJlbnRcclxuICAgICAgICAgICAgdGhpcy5jaGFyMkhpbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5jaGFyMlBhcmVudC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIMSQ4bq3dCB24buLIHRyw60gY2hvIGl0ZW1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5tYWluLmd1aWRlRHJhZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub3BhY2l0eSA9IDBcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0pIHJldHVybjtcclxuICAgICAgICBsZXQgc2NyZWVuUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHdvcmxkUG9zID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gc2NyZWVuUG9zXHJcblxyXG4gICAgICAgIC8vIENodXnhu4NuIHdvcmxkIOKGkiBsb2NhbCAobm9kZSBtYWluKVxyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIMSQ4bq3dCB24buLIHRyw60gY2hvIGl0ZW1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0pIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xyXG5cclxuICAgICAgICAvLyBDaHV54buDbiB3b3JsZCDihpIgbG9jYWwgKG5vZGUgbWFpbilcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICAvLyDEkOG6t3QgduG7iyB0csOtIGNobyBpdGVtXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tPbkZsb29yKGxvY2FsUG9zKTtcclxuICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5wb3NpdGlvbiA9IGNjLnYzKC01MDAsIC0yNTkpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmRXZlbnRMaXN0ZW5lcigpXHJcbiAgICAgICAgICAgIHRoaXMubW92ZVN0ZXAyKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3ZlU3RlcDIoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFyMi5ub2RlLnBhcmVudC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICB0aGlzLnJlbTIuekluZGV4ID0gMlxyXG4gICAgICAgIHRoaXMuY2hhcjIuc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNoYXIyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXIyUGFyZW50KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMTkzLCAtMjU5KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyMlBhcmVudC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjUsIHsgem9vbVJhdGlvOiAyLjEgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKC0xODIsIDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2VuZTIuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgfSwgMS4zKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zY2VuZTIpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMzIwLCAwKSwgc2NhbGU6IDIuMSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIH0sIDAuNylcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUzLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lMy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNjZW5lMykudG8oMC4zLCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuYmFyQ29pbi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0sIDEuMylcclxuICAgIH1cclxuICAgIGNoZWNrT25GbG9vcihsb2NhbFBvcykge1xyXG4gICAgICAgIGlmIChsb2NhbFBvcy5zdWIodGhpcy5wbGFjZUNoYXIyLnBvc2l0aW9uKS5tYWcoKSA8PSA2MDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnBvc2l0aW9uID0gY2MudjMoLTQwNywgLTkyNSlcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0NsaWNrID0gZmFsc2VcclxuICAgIGJ0bl9zaGFtYm8oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudFN0ZXArK1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5hcnJCdG5bMF0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXRlbVNoYW1iby5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtU2hhbWJvLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50U3RlcCA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMueGFib25nMi5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMueGFib25nMi5zZXRBbmltYXRpb24oMCwgXCJzaG93XCIsIGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzLnNldEFuaW1hdGlvbigwLCBcIkJvaWxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhhYm9uZy5zZXRBbmltYXRpb24oMCwgXCJzaG93XCIsIGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDAuNClcclxuICAgICAgICB0aGlzLmNoZWNrRW5kKClcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmRHYW1lKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tIaW5kR2FtZSwgMylcclxuXHJcbiAgICB9XHJcbiAgICBidG5fdGFtKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRTdGVwKytcclxuICAgICAgICB0aGlzLmFyckJ0blsxXSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXRlbVZvaUhvYVNlbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtVm9pSG9hU2VuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVZvaUhvYVNlbi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuXHJcblxyXG4gICAgICAgIH0sIDAuNilcclxuICAgICAgICB0aGlzLmNoZWNrRW5kKClcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmRHYW1lKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tIaW5kR2FtZSwgMylcclxuICAgIH1cclxuICAgIGJ0bl9zYXl0b2MoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudFN0ZXArK1xyXG4gICAgICAgIHRoaXMuYXJyQnRuWzJdID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMueGFib25nMi5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMuaXRlbU1heVNheS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtTWF5U2F5LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbU1heVNheS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3Mubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1NYXlTYXkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgfSwgMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIH0sIDIuMylcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmRHYW1lKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tIaW5kR2FtZSwgMylcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0VuZCgpXHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tIaW5kR2FtZSgpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmZpbmRIaW5kKClcclxuICAgICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuW2NoZWNrXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmluZEhpbmQoKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gbnVsbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyckJ0bltpXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGVja1xyXG5cclxuICAgIH1cclxuICAgIGNoZWNrRW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50U3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVN0ZXAzKClcclxuICAgICAgICAgICAgfSwgMi42KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVTdGVwMygpIHtcclxuICAgICAgICAvLyB0aGlzLnNjZW5lMi56SW5kZXggPSAzXHJcbiAgICAgICAgdGhpcy5zY2VuZTIuc2NhbGUgPSAyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lMi5hY3RpdmU9dHJ1ZVxyXG5cclxuICAgICAgICB0aGlzLmNoYXIyLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNjZW5lMikudG8oMC41LCB7IHNjYWxlOiAxLCBwb3NpdGlvbjogY2MudjMoMTAwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZTMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5jaGFyMy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyMy5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKC00NTYsIC0yNDMpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyMy5zZXRBbmltYXRpb24oMCwgXCJBbmdyeVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUoKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgIH1cclxuICAgIG9uRW5kR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lMi5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYWlsVUkuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYWlsVUkuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTG9zZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAxLjIpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMubGJDb2luLnN0cmluZyA9IGdsb2JhbFRoaXMuY29pbi50b1N0cmluZygpXHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjA1XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDAuNyA6IDAuN1xyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAobG9naWMpID8gMSA6IDEuNVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoMCwgMCkgOiBjYy52MygwLCAwKVxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAxMDApXHJcblxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDIuNVxyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVjayBpcGhvbmV4XCIpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuOFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMzApXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOTVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19