
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
<<<<<<< Updated upstream
        _this.soundShowPop = null;
        _this.soundClosePop = null;
        _this.soundBg = null;
        _this.soundWin = null;
        _this.soundLose = null;
=======
        _this.soundBg = null;
        _this.hairCut = null;
        _this.char1 = null;
        _this.char2 = null;
>>>>>>> Stashed changes
        _this.tut = null;
        _this.hand = null;
        _this.endCard = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.logo = null;
<<<<<<< Updated upstream
        _this.listCus = null;
        _this.soundChesse = null;
        _this.soundWrong = null;
        _this.fxColor = null;
        _this.cus = null;
        _this.xitKem = null;
        _this.xitHong = null;
        _this.listHand = null;
        _this.cakeNode = null;
        _this.cusComp = null;
        _this.cake = null;
        // @property(cc.AudioClip)
        // soundBg:cc.AudioClip=null;
        _this.isCake = false;
        _this.isTargetPop = null;
        _this.isTargetCus = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.isTang = 1;
        _this.isKem = 0;
        _this.isKem2 = 0;
        _this.isTut = 0;
        _this.isDelayHong = false;
        _this.isDelayKem = false;
        _this.isPhase2 = false;
        _this.isPhase3 = false;
        _this.isKem2Qua = null;
        _this.arrHotDog = [null, null, null, null, null, null];
        _this.arrBreak = [null, null, null];
        _this.arrTuongCa = [];
        _this.isDelaytuong = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        this.cusComp = this.cus.getComponent("cusMission");
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.showCus();
        cc.audioEngine.play(this.soundBg, true, 1);
        this.listHand.zIndex = 5;
        this.scheduleOnce(function () {
            if (_this.isTut == 0) {
                _this.cakeNode.getComponent("cake").tutOnPlate();
            }
        }, 5);
    };
    NewClass.prototype.setTut2 = function () {
        var _this = this;
        this.isTut = 2;
        this.scheduleOnce(function () {
            console.log(_this.isTut);
            if (_this.isTut == 2) {
                _this.btn_xitHong();
            }
        }, 5);
    };
    NewClass.prototype.btn_xitHong = function () {
        var _this = this;
        if (!this.isCake)
            return;
        if (this.isDelayHong)
            return;
        if (this.isTang == 1) {
            if (this.isKem == 0) {
                this.listHand.children[1].active = false;
                this.isTut = 3;
                this.scheduleOnce(function () {
                    _this.listHand.children[0].active = true;
                }, 0.4);
                this.scheduleOnce(function () {
                    _this.cake.getComponent("cake2").xitHong();
                    _this.isPhase2 = false;
                    _this.isPhase3 = true;
                }, 0.4);
                this.isKem = 1;
            }
            else {
                return;
            }
        }
        else {
            if (this.isKem2 == 0) {
                // console.log(this.cake)
                this.listHand.children[2].active = false;
                this.listHand.children[3].active = true;
                this.isTut = 5;
                this.scheduleOnce(function () {
                    _this.cake.getComponent("cake2").xitHong();
                    _this.isKem2Qua = false;
                }, 0.5);
                this.isKem = 3;
            }
            else {
                return;
            }
        }
        cc.audioEngine.play(this.soundChesse, false, 1);
        this.isDelayHong = true;
        this.xitHong.getComponent(cc.Animation).play();
        this.xitHong.zIndex = 1;
        this.scheduleOnce(function () {
            _this.xitHong.position = cc.v3(-271.664, -373.904);
            _this.isDelayHong = false;
            _this.scheduleOnce(function () {
                if (_this.isTut == 3) {
                    _this.cakeNode.getComponent("cake").tutOnPlate();
                }
            }, 5);
            if (_this.isTut == 5) {
                _this.scheduleOnce(function () {
                    if (_this.isTut == 5) {
                        _this.btn_qua();
                    }
                }, 5);
            }
        }, 0.4);
    };
    NewClass.prototype.setTut4 = function () {
        var _this = this;
        this.isTut = 4;
        this.scheduleOnce(function () {
            if (_this.isTut == 4) {
                _this.btn_xitKem();
            }
        }, 5);
    };
    NewClass.prototype.btn_xitKem = function () {
        var _this = this;
        if (!this.isCake)
            return;
        if (this.isDelayKem)
            return;
        if (this.isTang == 1) {
            if (this.isKem == 0) {
                this.listHand.children[1].active = false;
                this.scheduleOnce(function () {
                    _this.listHand.children[0].active = true;
                }, 0.4);
                this.isTut = 3;
                this.scheduleOnce(function () {
                    _this.cake.getComponent("cake2").xitkem();
                    _this.isPhase2 = false;
                    _this.isPhase3 = true;
                }, 0.5);
                this.isKem = 1;
            }
            else {
                return;
            }
        }
        else {
            if (this.isKem2 == 0) {
                this.isTut = 5;
                this.scheduleOnce(function () {
                    _this.cake.getComponent("cake2").xitkem();
                    _this.isKem2Qua = true;
                    _this.listHand.children[2].active = false;
                    _this.listHand.children[3].active = true;
                }, 0.5);
                this.isKem = 3;
            }
            else {
                return;
            }
        }
        cc.audioEngine.play(this.soundChesse, false, 1);
        this.isDelayKem = true;
        this.xitKem.getComponent(cc.Animation).play();
        this.xitKem.zIndex = 1;
        this.scheduleOnce(function () {
            _this.xitKem.position = cc.v3(271.958, -373.765);
            _this.isDelayKem = false;
            _this.scheduleOnce(function () {
                if (_this.isTut == 3) {
                    _this.cakeNode.getComponent("cake").tutOnPlate();
                }
            }, 5);
            if (_this.isTut == 5) {
                _this.scheduleOnce(function () {
                    if (_this.isTut == 5) {
                        _this.btn_qua();
                    }
                }, 5);
            }
        }, 0.5);
    };
    NewClass.prototype.btn_qua = function () {
        var _this = this;
        if (this.isKem2Qua == null)
            return;
        this.isTut = 6;
        this.listHand.children[3].active = false;
        if (this.isKem2Qua) {
            this.cake.getComponent("cake2").xitQuaKem();
        }
        else {
            this.cake.getComponent("cake2").xitQua();
        }
        this.scheduleOnce(function () {
            _this.onEndGame();
        }, 1);
    };
    NewClass.prototype.showCus = function () {
        var _this = this;
        var child = this.listCus.children[0];
        child.position = cc.v3(-700, -50);
        cc.tween(child).to(0.8, { position: cc.v3(0, -50) }).call(function () {
            child.getChildByName("pop").active = true;
            _this.isTargetPop = child.getChildByName("pop");
            _this.isTargetCus = child;
            _this.listHand.children[0].active = true;
            // this.scheduleOnce(() => {
            //     cc.audioEngine.play(this.soundShowPop, false, 1)
            // }, 0.1)
=======
        _this.barCoin = null;
        _this.preCoin = null;
        _this.lbCoin = null;
        _this.scene2 = null;
        _this.uiCamera = null;
        _this.uiNode = null;
        _this.btnUnlock = null;
        _this.rem2 = null;
        _this.placeChar2 = null;
        _this.selectedItem = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        return _this;
    }
    NewClass.prototype.start = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.3);
        cc.audioEngine.play(this.hairCut, false, 1);
        this.startScene();
    };
    NewClass.prototype.startScene = function () {
        var _this = this;
        var char1Node = this.char1.node;
        cc.tween(char1Node).to(0.8, { position: cc.v3(110, -223) }).call(function () {
            _this.char1.setAnimation(0, "Happy", false);
            char1Node.scaleX = -1.5;
            _this.scheduleOnce(function () {
                _this.giveCoin();
            }, 0.3);
>>>>>>> Stashed changes
        }).start();
    };
    NewClass.prototype.giveCoin = function () {
        var _this = this;
        var posStart = this.char1.node.parent.convertToWorldSpaceAR(this.char1.node.position);
        posStart = this.camera.getWorldToScreenPoint(posStart);
        posStart = this.uiCamera.getScreenToWorldPoint(posStart);
        posStart = this.uiNode.convertToNodeSpaceAR(posStart).add(cc.v3(0, 420));
        var posEnd = this.barCoin.children[1].position;
        posEnd = this.barCoin.convertToWorldSpaceAR(posEnd);
        posEnd = this.uiNode.convertToNodeSpaceAR(posEnd);
        var midPos = cc.v2((posEnd.x + 500), (posStart.y + posEnd.y) / 2);
        for (var i = 0; i < 8; i++) {
            this.scheduleOnce(function () {
                var coin = cc.instantiate(_this.preCoin);
                coin.parent = _this.node;
                coin.parent = _this.uiNode;
                coin.position = posStart;
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
        this.char2.setAnimation(0, "Walk", true);
        cc.tween(this.char2.node).to(3, { position: cc.v3(-407, -925) }).call(function () {
            _this.char2.setAnimation(0, "Talk", true);
            _this.char2.node.getChildByName("pop").active = true;
        }).start();
    };
    NewClass.prototype.btn_unlock = function () {
        this.btnUnlock.active = false;
        this.rem2.opacity = 0;
        this.rem2.active = true;
        cc.tween(this.rem2).to(0.3, { opacity: 255 }).start();
        this.onEventListener();
    };
    NewClass.prototype.onEventListener = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    NewClass.prototype.onTouchStart = function (event) {
        if (this.selectedItem)
            return;
        var screenPos = event.getLocation();
        var worldPos = this.camera.getScreenToWorldPoint(screenPos);
        // Chuyển world → local (node main)
        var localPos = this.node.convertToNodeSpaceAR(worldPos);
        if (this.char2.node.position.sub(localPos).mag() < 300) {
            this.char2.node.setPosition(localPos);
            this.selectedItem = this.char2.node;
        }
        // Đặt vị trí cho item
        // this.main.guideDrag.active = false;
        // this.node.opacity = 0
    };
    NewClass.prototype.onTouchMove = function (event) {
        if (!this.selectedItem)
            return;
        var screenPos = event.getLocation();
        var worldPos = this.camera.getScreenToWorldPoint(screenPos);
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
        }
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
    NewClass.prototype.onEndGame = function () {
        cc.audioEngine.play(this.soundWin, false, 1);
        this.endCard.active = true;
        this.linkToStore.active = true;
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
        this.camera.zoomRatio = 1.05;
        this.endCard.scale = (logic) ? 1.2 : 0.7;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        if (logic == true) {
            this.camera.node.position = cc.v3(0, 100);
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 2.5;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                console.log("check iphonex");
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.8;
            }
        }
        else {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            this.camera.node.position = cc.v3(0, -30);
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.95;
            }
        }
    };
    __decorate([
        property(cc.AudioClip)
<<<<<<< Updated upstream
    ], NewClass.prototype, "soundShowPop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClosePop", void 0);
    __decorate([
        property(cc.AudioClip)
=======
>>>>>>> Stashed changes
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "hairCut", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "char1", void 0);
    __decorate([
<<<<<<< Updated upstream
=======
        property(sp.Skeleton)
    ], NewClass.prototype, "char2", void 0);
    __decorate([
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    ], NewClass.prototype, "listCus", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChesse", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
=======
    ], NewClass.prototype, "barCoin", void 0);
>>>>>>> Stashed changes
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCoin", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene2", void 0);
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
<<<<<<< Updated upstream
    ], NewClass.prototype, "cakeNode", void 0);
=======
    ], NewClass.prototype, "placeChar2", void 0);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxDQzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0aUJDO1FBMWlCRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUV6QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFDeEIsYUFBTyxHQUFHLElBQUksQ0FBQTtRQUNkLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWiwwQkFBMEI7UUFDMUIsNkJBQTZCO1FBQzdCLFlBQU0sR0FBRyxLQUFLLENBQUE7UUFDZCxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBVyxHQUFHLElB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UTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQXpDUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNGlCNUI7SUFBRCxlQUFDO0NBNWlCRCxBQTRpQkMsQ0E1aUJxQyxFQUFFLENBQUMsU0FBUyxHQTRpQmpEO2tCQTVpQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hlc3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGZ4Q29sb3I6IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgeGl0S2VtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgeGl0SG9uZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FrZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBjdXNDb21wID0gbnVsbFxyXG4gICAgY2FrZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gc291bmRCZzpjYy5BdWRpb0NsaXA9bnVsbDtcclxuICAgIGlzQ2FrZSA9IGZhbHNlXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBpc1RhbmcgPSAxO1xyXG4gICAgaXNLZW0gPSAwO1xyXG4gICAgaXNLZW0yID0gMDtcclxuICAgIGlzVHV0ID0gMFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXNDb21wID0gdGhpcy5jdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKVxyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dDdXMoKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuekluZGV4ID0gNVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWtlTm9kZS5nZXRDb21wb25lbnQoXCJjYWtlXCIpLnR1dE9uUGxhdGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNSlcclxuICAgIH1cclxuICAgIHNldFR1dDIoKSB7XHJcbiAgICAgICAgdGhpcy5pc1R1dCA9IDJcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNUdXQpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHV0ID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX3hpdEhvbmcoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDUpXHJcbiAgICB9XHJcbiAgICBpc0RlbGF5SG9uZyA9IGZhbHNlXHJcbiAgICBidG5feGl0SG9uZygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDYWtlKSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5pc0RlbGF5SG9uZykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFuZyA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0tlbSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVHV0ID0gM1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDAuNClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNha2UuZ2V0Q29tcG9uZW50KFwiY2FrZTJcIikueGl0SG9uZygpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BoYXNlMiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BoYXNlMyA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwLjQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzS2VtID0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0tlbTIgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jYWtlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVHV0ID0gNVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNha2UuZ2V0Q29tcG9uZW50KFwiY2FrZTJcIikueGl0SG9uZygpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0tlbTJRdWEgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNLZW0gPSAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hlc3NlLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5pc0RlbGF5SG9uZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy54aXRIb25nLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnhpdEhvbmcuekluZGV4ID0gMVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy54aXRIb25nLnBvc2l0aW9uID0gY2MudjMoLTI3MS42NjQsIC0zNzMuOTA0KVxyXG4gICAgICAgICAgICB0aGlzLmlzRGVsYXlIb25nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVHV0ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNha2VOb2RlLmdldENvbXBvbmVudChcImNha2VcIikudHV0T25QbGF0ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHV0ID09IDUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1R1dCA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuX3F1YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgNSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAwLjQpXHJcbiAgICB9XHJcbiAgICBzZXRUdXQ0KCkge1xyXG4gICAgICAgIHRoaXMuaXNUdXQgPSA0O1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXQgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5feGl0S2VtKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUpXHJcbiAgICB9XHJcbiAgICBpc0RlbGF5S2VtID0gZmFsc2VcclxuICAgIGlzUGhhc2UyID0gZmFsc2VcclxuICAgIGlzUGhhc2UzID0gZmFsc2VcclxuICAgIGJ0bl94aXRLZW0oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2FrZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsYXlLZW0pIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc1RhbmcgPT0gMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0tlbSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMC40KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1R1dCA9IDNcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWtlLmdldENvbXBvbmVudChcImNha2UyXCIpLnhpdGtlbSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BoYXNlMiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQaGFzZTMgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0tlbSA9IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNLZW0yID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUdXQgPSA1XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FrZS5nZXRDb21wb25lbnQoXCJjYWtlMlwiKS54aXRrZW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNLZW0yUXVhID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNLZW0gPSAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoZXNzZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuaXNEZWxheUtlbSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy54aXRLZW0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIHRoaXMueGl0S2VtLnpJbmRleCA9IDFcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueGl0S2VtLnBvc2l0aW9uID0gY2MudjMoMjcxLjk1OCwgLTM3My43NjUpXHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWxheUtlbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1R1dCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWtlTm9kZS5nZXRDb21wb25lbnQoXCJjYWtlXCIpLnR1dE9uUGxhdGUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1KVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1R1dCA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXQgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bl9xdWEoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICB9XHJcbiAgICBpc0tlbTJRdWEgPSBudWxsXHJcbiAgICBidG5fcXVhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzS2VtMlF1YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1R1dCA9IDZcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzS2VtMlF1YSkge1xyXG4gICAgICAgICAgICB0aGlzLmNha2UuZ2V0Q29tcG9uZW50KFwiY2FrZTJcIikueGl0UXVhS2VtKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FrZS5nZXRDb21wb25lbnQoXCJjYWtlMlwiKS54aXRRdWEoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKClcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG4gICAgc2hvd0N1cygpIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bMF1cclxuICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IGNjLnYzKC03MDAsIC01MClcclxuICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygwLCAtNTApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRQb3AgPSBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gY2hpbGQ7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIC8vIH0sIDAuMSlcclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgfVxyXG4gICAgc3VjY2Vzc0N1cygpIHtcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0UG9wID0gbnVsbDtcclxuXHJcbiAgICB9XHJcbiAgICBjcmVhdEZ4Q29sb3IocG9zLCBzY2FsZSkge1xyXG4gICAgICAgIGxldCBwcmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZ4Q29sb3IpXHJcbiAgICAgICAgcHJlLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgIHByZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIHByZS5zY2FsZSA9IHNjYWxlXHJcbiAgICB9XHJcbiAgICBuZXh0Q3VzKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRDdXMrK1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuY291bnRDdXNdXHJcbiAgICAgICAgICAgIGNoaWxkLnBvc2l0aW9uID0gY2MudjMoNzAwLCAxMjMuNTkxKVxyXG4gICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDAsIDEyMy41OTEpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldFBvcCA9IGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMC4xKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGFyckhvdERvZyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXTtcclxuICAgIGFyckJyZWFrID0gW251bGwsIG51bGwsIG51bGxdO1xyXG4gICAgYXJyVHVvbmdDYSA9IFtdXHJcbiAgICBidG5faG90RG9nKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYXJySG90RG9nLmxlbmd0aCA+PSA2KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja1Nsb3RIb3REb2coKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrKVxyXG4gICAgICAgIGlmIChjaGVjayA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgbGV0IGRlbSA9IHRoaXMuYXJySG90RG9nLmxlbmd0aFxyXG4gICAgICAgIGxldCBob3REb2cgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUhvdERvZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0Q2hhbylcclxuICAgICAgICBob3REb2cucGFyZW50ID0gdGhpcy5saXN0Q2hhby5jaGlsZHJlbltjaGVja107XHJcbiAgICAgICAgaG90RG9nLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICBob3REb2cuZ2V0Q29tcG9uZW50KFwiaG90ZG9nXCIpLnZhbHVlID0gY2hlY2tcclxuICAgICAgICB0aGlzLmFyckhvdERvZ1tjaGVja10gPSBob3REb2dcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuY3VycmVudFRhcmdldC5wb3NpdGlvblxyXG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcywgMilcclxuXHJcbiAgICB9XHJcbiAgICBjaGVja1Nsb3RIb3REb2coKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckhvdERvZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJIb3REb2dbaV0gPT0gbnVsbCkgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNoZWNrU2xvdEJyZWFkKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJCcmVhay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJCcmVha1tpXSA9PSBudWxsKSByZXR1cm4gaVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgYnRuX2JyZWFkKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYXJyQnJlYWsubGVuZ3RoID49IDMpIHJldHVybjtcclxuICAgICAgICAvLyBsZXQgZGVtID0gdGhpcy5hcnJCcmVhay5sZW5ndGhcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrU2xvdEJyZWFkKClcclxuICAgICAgICBpZiAoY2hlY2sgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBsZXQgYnJlYWQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUJyZWFkKTtcclxuICAgICAgICBicmVhZC5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5QmFuaE1pLmNoaWxkcmVuW2NoZWNrXTtcclxuICAgICAgICBicmVhZC5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgYnJlYWQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIikudmFsdWUgPSBjaGVja1xyXG4gICAgICAgIHRoaXMuYXJyQnJlYWtbY2hlY2tdID0gYnJlYWRcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLCAyKVxyXG5cclxuICAgIH1cclxuICAgIHNlbGxCcmVhZCh2YWx1ZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldFBvcCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls0XS5vcGFjaXR5ID0gMFxyXG5cclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckJyZWFrW3ZhbHVlXTtcclxuICAgICAgICB0aGlzLmFyckJyZWFrW3ZhbHVlXSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuaXNUYXJnZXRQb3AucG9zaXRpb25cclxuICAgICAgICBwb3NFbmQgPSB0aGlzLmlzVGFyZ2V0UG9wLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zRW5kKVxyXG4gICAgICAgIHBvc0VuZCA9IGNoaWxkLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NFbmQpXHJcbiAgICAgICAgbGV0IHBvcyA9IGNoaWxkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hpbGQucG9zaXRpb24pO1xyXG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuNCwgeyBwb3NpdGlvbjogcG9zRW5kLmFkZChjYy52Myg1MCwgMCkpLCBzY2FsZTogMC43IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5vcGFjaXR5ID0gMFxyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuY2hlY2tCcmVhZChjaGlsZClcclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcywgMS41KVxyXG4gICAgfVxyXG4gICAgaXNEZWxheXR1b25nID0gZmFsc2VcclxuICAgIGJ0bl90dW9uZ0NhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsYXl0dW9uZykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmFyckJyZWFrLmxlbmd0aCA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGJyZWFkID0gdGhpcy5jaGVja1R1b25nQ2EoKTtcclxuICAgICAgICBpZiAoYnJlYWQgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNEZWxheXR1b25nID0gdHJ1ZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIGxldCBwb3NTdGFydCA9IGJyZWFkLnBvc2l0aW9uLmFkZChjYy52Myg0MCwgMTUwKSk7XHJcbiAgICAgICAgcG9zU3RhcnQgPSBicmVhZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc1N0YXJ0KTtcclxuICAgICAgICBwb3NTdGFydCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NTdGFydClcclxuICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy50dW9uZ090LnBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHBvc01pZCA9IGNjLnYyKChwb3NTdGFydC54ICsgcG9zRW5kLngpIC8gMiwgKHBvc1N0YXJ0LnkgKyBwb3NFbmQueSkgLyAyICsgMTAwKVxyXG4gICAgICAgIHRoaXMudHVvbmdPdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJyZWFkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLmdldFR1b25nQ2EoKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGVzc2UsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB9LCAwLjI1KVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudHVvbmdPdCkuYmV6aWVyVG8oMC41LCBjYy52Mihwb3NFbmQueCwgcG9zRW5kLnkpLCBjYy52Mihwb3NNaWQueCwgcG9zTWlkLnkpLCBjYy52Mihwb3NTdGFydC54LCBwb3NTdGFydC55KSkuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgIH0pLmRlbGF5KDAuMikuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHVvbmdPdC5wb3NpdGlvbiA9IHBvc0VuZFxyXG4gICAgICAgICAgICB0aGlzLnR1b25nT3QuY2hpbGRyZW5bMF0uYW5nbGUgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWxheXR1b25nID0gZmFsc2VcclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tUdW9uZ0NhKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJCcmVhay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hsZCA9IHRoaXMuYXJyQnJlYWtbaV1cclxuICAgICAgICAgICAgaWYgKGNobGQgIT0gbnVsbCAmJiBjaGxkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLmlzSG90RG9nID09IHRydWUgJiYgY2hsZC5nZXRDb21wb25lbnQoXCJwcmVCcmVhZFwiKS5pc1R1b25nQ2EgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGxkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjbGlja0hvdERvZyh2YWx1ZSwgbm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFyckJyZWFrLmxlbmd0aCA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGVja0JyZWFkKClcclxuICAgICAgICBpZiAoY2hpbGQgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5hcnJIb3REb2dbdmFsdWVdID0gbnVsbFxyXG4gICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLmdldEhvdERvZygpXHJcbiAgICAgICAgbGV0IHBvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDBcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmRlc3Ryb3koKVxyXG5cclxuICAgICAgICB9LCAwLjEpXHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcywgMS41KVxyXG4gICAgfVxyXG4gICAgY2hlY2tCcmVhZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQnJlYWsubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNobGQgPSB0aGlzLmFyckJyZWFrW2ldXHJcbiAgICAgICAgICAgIGlmIChjaGxkICE9IG51bGwgJiYgY2hsZC5nZXRDb21wb25lbnQoXCJwcmVCcmVhZFwiKS5pc0hvdERvZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNobGRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgb25FbmRHYW1lKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyBidG5fY2hvb3NlKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgLy8gICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgY2FzZSBcIjBcIjpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5wb3NpdGlvbiA9IGNjLnYzKDMwMDAsIDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5zY2VuZU11c2ljLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoXCJtYWluTXVzaWNcIikubG9hZERhdGEoMSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5wb3NpdGlvbiA9IGNjLnYzKDMwMDAsIDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoXCJtYWluTXVzaWNcIikubG9hZERhdGEoMilcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5wb3NpdGlvbiA9IGNjLnYzKDMwMDAsIDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4uZ2V0Q29tcG9uZW50KFwibWFpbkd1blwiKS5sb2FkRGF0YSgxKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNYWluLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5wb3NpdGlvbiA9IGNjLnYzKDMwMDAsIDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoXCJtYWluTXVzaWNcIikubG9hZERhdGEoMylcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLnBvc2l0aW9uID0gY2MudjMoMzAwMCwgMClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmdldENvbXBvbmVudChcIm1haW5NdXNpY1wiKS5sb2FkRGF0YSg0KVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCI1XCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLnBvc2l0aW9uID0gY2MudjMoMzAwMCwgMClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4uYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5nZXRDb21wb25lbnQoXCJtYWluR3VuXCIpLmxvYWREYXRhKDIpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU1haW4uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuMDVcclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNiA6IDAuNFxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAxMDApXHJcblxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDIuNVxyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBpcGhvbmV4XCIpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuOFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMzApXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOTVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxDQzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDZCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlQQztRQXRQRyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQWdCLElBQUksQ0FBQTtRQUV6QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUE7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGdCQUFVLEdBQVMsSUFBSSxDQUFBO1FBQ2Ysa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFckMsY0FBUSxHQUFHLDhCQUE4QixDQUFBOztJQThNN0MsQ0FBQztJQTVNRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFdBQVcsRUFBRTtZQUM5QixNQUFNLENBQUMsU0FBUyxJ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LEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0s7SUF4Q04sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlQNUI7SUFBRCxlQUFDO0NBelBELEFBeVBDLENBelBxQyxFQUFFLENBQUMsU0FBUyxHQXlQakQ7a0JBelBvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmdsb2JhbFRoaXMuY29pbiA9IDA7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBoYWlyQ3V0OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBjaGFyMTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgY2hhcjI6IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhckNvaW46IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ29pbjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb2luOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NlbmUyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIHVpQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blVubG9jazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJlbTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGFjZUNoYXIyOmNjLk5vZGU9bnVsbFxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEl0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjMpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmhhaXJDdXQsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuc3RhcnRTY2VuZSgpXHJcbiAgICB9XHJcbiAgICBzdGFydFNjZW5lKCkge1xyXG4gICAgICAgIGxldCBjaGFyMU5vZGUgPSB0aGlzLmNoYXIxLm5vZGVcclxuICAgICAgICBjYy50d2VlbihjaGFyMU5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMTEwLCAtMjIzKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyMS5zZXRBbmltYXRpb24oMCwgXCJIYXBweVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNoYXIxTm9kZS5zY2FsZVggPSAtMS41O1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpdmVDb2luKClcclxuXHJcbiAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBnaXZlQ29pbigpIHtcclxuICAgICAgICBsZXQgcG9zU3RhcnQgPSB0aGlzLmNoYXIxLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmNoYXIxLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIHBvc1N0YXJ0ID0gdGhpcy5jYW1lcmEuZ2V0V29ybGRUb1NjcmVlblBvaW50KHBvc1N0YXJ0KTtcclxuICAgICAgICBwb3NTdGFydCA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvc1N0YXJ0KTtcclxuICAgICAgICBwb3NTdGFydCA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc1N0YXJ0KS5hZGQoY2MudjMoMCwgNDIwKSk7XHJcbiAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuYmFyQ29pbi5jaGlsZHJlblsxXS5wb3NpdGlvbjtcclxuICAgICAgICBwb3NFbmQgPSB0aGlzLmJhckNvaW4uY29udmVydFRvV29ybGRTcGFjZUFSKHBvc0VuZCk7XHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKVxyXG5cclxuICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHBvc0VuZC54ICsgNTAwKSwgKHBvc1N0YXJ0LnkgKyBwb3NFbmQueSkgLyAyKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2luID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcclxuICAgICAgICAgICAgICAgIGNvaW4ucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLnVpTm9kZTtcclxuICAgICAgICAgICAgICAgIGNvaW4ucG9zaXRpb24gPSBwb3NTdGFydDtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4pLmJlemllclRvKDEsIGNjLnYyKHBvc1N0YXJ0LngsIHBvc1N0YXJ0LnkpLCBtaWRQb3MsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSkpLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4pLnRvKDEsIHsgc2NhbGU6IDEuMyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuY29pbiArPSA1MFxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAwLjA1ICogaSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blVubG9jay5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB9LCAwLjYpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIxLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjEubm9kZS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhcjEubm9kZSkuYnkoNCwgeyBwb3NpdGlvbjogY2MudjMoMTYwMCwgMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXIxLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuY2hhcjIuc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXIyLm5vZGUpLnRvKDMsIHsgcG9zaXRpb246IGNjLnYzKC00MDcsIC05MjUpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIyLnNldEFuaW1hdGlvbigwLCBcIlRhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjIubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcblxyXG4gICAgfVxyXG4gICAgYnRuX3VubG9jaygpIHtcclxuICAgICAgICB0aGlzLmJ0blVubG9jay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlbTIub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLnJlbTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucmVtMikudG8oMC4zLCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5vbkV2ZW50TGlzdGVuZXIoKVxyXG4gICAgfVxyXG4gICAgb25FdmVudExpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHJldHVyblxyXG5cclxuICAgICAgICBsZXQgc2NyZWVuUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XHJcblxyXG4gICAgICAgIC8vIENodXnhu4NuIHdvcmxkIOKGkiBsb2NhbCAobm9kZSBtYWluKVxyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcjIubm9kZS5wb3NpdGlvbi5zdWIobG9jYWxQb3MpLm1hZygpIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjIubm9kZS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5jaGFyMi5ub2RlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIMSQ4bq3dCB24buLIHRyw60gY2hvIGl0ZW1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5tYWluLmd1aWRlRHJhZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub3BhY2l0eSA9IDBcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0pIHJldHVybjtcclxuICAgICAgICBsZXQgc2NyZWVuUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XHJcblxyXG4gICAgICAgIC8vIENodXnhu4NuIHdvcmxkIOKGkiBsb2NhbCAobm9kZSBtYWluKVxyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIMSQ4bq3dCB24buLIHRyw60gY2hvIGl0ZW1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0pIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xyXG5cclxuICAgICAgICAvLyBDaHV54buDbiB3b3JsZCDihpIgbG9jYWwgKG5vZGUgbWFpbilcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICAvLyDEkOG6t3QgduG7iyB0csOtIGNobyBpdGVtXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tPbkZsb29yKGxvY2FsUG9zKTtcclxuICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5wb3NpdGlvbiA9IGNjLnYzKC01MDAsIC0yNTkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tPbkZsb29yKGxvY2FsUG9zKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsUG9zLnN1Yih0aGlzLnBsYWNlQ2hhcjIucG9zaXRpb24pLm1hZygpIDw9IDYwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0ucG9zaXRpb24gPSBjYy52MygtNDA3LCAtOTI1KVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uRW5kR2FtZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRMb3NlLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmNvaW4udG9TdHJpbmcoKVxyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS4wNVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDEwMClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMi41XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIGlwaG9uZXhcIilcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS44XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0zMClcclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC45NVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
>>>>>>> Stashed changes
