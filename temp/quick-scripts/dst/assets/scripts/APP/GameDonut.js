
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
globalThis.coin = 100;
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
        _this.soundHello = null;
        _this.soundHelloCus2 = null;
        _this.soundHelloCus3 = null;
        _this.soundTrans = null;
        _this.soundClick = null;
        _this.soundDonutJump = null;
        _this.soundEnd = null;
        _this.soundSellDone = null;
        _this.soundThinking = null;
        _this.soundCream = null;
        _this.soundCherry = null;
        _this.soundWrong = null;
        _this.soundCreamMini = null;
        _this.soundThinkWin = null;
        _this.tut = null;
        _this.hand = null;
        _this.endCard = null;
        _this.endCardWin = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.logo = null;
        _this.listCus = null;
        _this.mainCamera = null;
        _this.uiCamera = null;
        _this.uiNode = null;
        _this.barTime = null;
        _this.barCoin = null;
        _this.listCheckItem = null;
        _this.clockTime = null;
        _this.cake = null;
        _this.creeam = null;
        _this.phaoHoa = null;
        _this.listHand = null;
        _this.warning = null;
        _this.guild = null;
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
        // isStep = 0
        _this.isTargetCus = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.idSound = null;
        _this.isStep = 0;
        _this.isLast = false;
        _this.isEndGame = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    };
    NewClass.prototype.start = function () {
        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.5);
    };
    NewClass.prototype.startGame = function () {
        this.listHand.children[0].active = true;
        // this.scheduleOnce(() => {
        //     if (this.isStep == 0) {
        //     }
        // }, 2)
    };
    NewClass.prototype.btn_plate = function (event) {
        var btn = event.currentTarget;
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1);
    };
    NewClass.prototype.btn_cake = function (event) {
        var _this = this;
        var cake = null;
        if (this.isStep == 0) {
            this.barTime.getComponent("barTime").countDown();
            this.guild.active = false;
            this.listHand.children[0].active = false;
            cake = this.cake.children[0];
            this.listCheckItem.children[0].active = true;
            this.scheduleOnce(function () {
                if (_this.isStep == 1) {
                    _this.listHand.children[1].active = true;
                }
            }, 2.5);
        }
        else if (this.isStep == 3) {
            this.listHand.children[0].active = false;
            cake = this.cake.children[3];
            // this.listCheckItem.children[0].active = true
            this.listCheckItem.children[0].active = true;
            this.scheduleOnce(function () {
                if (_this.isStep == 4) {
                    _this.listHand.children[1].active = true;
                }
            }, 2.5);
        }
        else {
            var btn = event.currentTarget;
            btn.getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 1);
            return;
        }
        cc.audioEngine.play(this.soundShowPop, false, 1);
        cake.scale = 0.6;
        var localPos = cake.position;
        cake.position = localPos.add(cc.v3(0, 120));
        cake.active = true;
        this.isStep++;
        cc.tween(cake).to(0.2, { position: localPos }).to(0.2, { scale: 0.75 }).to(0.07, { scale: 0.7 }).start();
    };
    NewClass.prototype.btn_Dau = function (event) {
        var _this = this;
        if (this.isStep == 2) {
            cc.audioEngine.play(this.soundCherry, false, 1);
            this.listHand.children[2].active = false;
            var listFruit = this.cake.children[2];
            this.isStep++;
            listFruit.active = true;
            var _loop_1 = function (i) {
                var fruit = listFruit.children[i];
                fruit.active = false;
                var localPos = fruit.position;
                fruit.position = localPos.add(cc.v3(0, 120));
                var time = (i % 2 == 0) ? 0 : 0.2;
                this_1.scheduleOnce(function () {
                    fruit.active = true;
                    _this.listCheckItem.children[2].active = true;
                    _this.listCheckItem.children[3].active = true;
                    _this.listCheckItem.children[4].active = true;
                    _this.listCheckItem.children[5].active = true;
                    cc.tween(fruit).to(0.3, { position: localPos }).call(function () {
                        for (var _i = 0, _a = _this.listCheckItem.children; _i < _a.length; _i++) {
                            var child = _a[_i];
                            child.active = false;
                        }
                    }).start();
                }, time);
            };
            var this_1 = this;
            for (var i = 0; i < listFruit.childrenCount; i++) {
                _loop_1(i);
            }
            this.scheduleOnce(function () {
                if (_this.isStep == 3) {
                    _this.listHand.children[0].active = true;
                }
            }, 2.5);
        }
        else if (this.isStep == 5 && this.isLast == true) {
            this.listHand.children[2].active = false;
            cc.audioEngine.play(this.soundCherry, false, 1);
            this.listCheckItem.children[2].active = true;
            this.listCheckItem.children[3].active = true;
            this.listCheckItem.children[4].active = true;
            this.listCheckItem.children[5].active = true;
            var listFruit = this.cake.children[6];
            this.isStep++;
            listFruit.active = true;
            var _loop_2 = function (i) {
                var fruit = listFruit.children[i];
                fruit.active = false;
                var localPos = fruit.position;
                fruit.position = localPos.add(cc.v3(0, 120));
                var time = (i % 2 == 0) ? 0 : 0.3;
                this_2.scheduleOnce(function () {
                    fruit.active = true;
                    cc.tween(fruit).to(0.3, { position: localPos }).start();
                }, time);
            };
            var this_2 = this;
            for (var i = 0; i < listFruit.childrenCount; i++) {
                _loop_2(i);
            }
            this.scheduleOnce(function () {
                _this.phaoHoa.active = true;
                cc.audioEngine.play(_this.soundWin, false, 1);
                globalThis.coin += 100;
            }, 0.5);
            this.scheduleOnce(function () {
                _this.onEndGame(true);
            }, 1.5);
        }
        else {
            var btn = event.currentTarget;
            btn.getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 1);
        }
        // let btn = event.currentTarget
        // btn.getComponent(cc.Animation).play();
        // cc.audioEngine.play(this.soundWrong, false, 1)
    };
    NewClass.prototype.btn_Kiwi = function (event) {
        var btn = event.currentTarget;
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1);
    };
    NewClass.prototype.btn_Hoa = function (event) {
        var btn = event.currentTarget;
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1);
    };
    NewClass.prototype.btn_cream = function () {
        var _this = this;
        if (this.isStep == 1) {
            this.listHand.children[1].active = false;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundCream, false, 1);
            }, 0.3);
            this.listCheckItem.children[1].active = true;
            this.creeam.getComponent(cc.Animation).play("cream1");
            var cream = this.cake.children[1];
            this.isStep++;
            cream.scale = 0;
            cream.active = true;
            cc.tween(cream).delay(0.4).to(0.4, { scale: 0.7 }).start();
            this.scheduleOnce(function () {
                cc.tween(_this.creeam.children[1]).to(0.4, { position: cc.v3(0, 0), angle: 0 }).start();
            }, 1.2);
            this.scheduleOnce(function () {
                if (_this.isStep == 2) {
                    _this.listHand.children[2].active = true;
                }
            }, 2.5);
        }
        else if (this.isStep == 4) {
            this.listCheckItem.children[1].active = true;
            this.listHand.children[1].active = false;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundCream, false, 1);
            }, 0.5);
            this.creeam.getComponent(cc.Animation).play("cream2");
            var creamItem_1 = this.creeam.children[1];
            var cream = this.cake.children[4];
            this.isStep++;
            cream.scale = 0;
            cream.active = true;
            cc.tween(cream).delay(0.6).to(0.4, { scale: 0.7 }).start();
            var listCream_1 = this.cake.children[5];
            var listCream2_1 = this.cake.children[7];
            // cc.audioEngine.play(this.soundCream, false, 1)
            var arrrPos_1 = [cc.v3(-507, 222), cc.v3(-551, 197), cc.v3(-590, 161), cc.v3(-621, 111), cc.v3(-634, 50, 69), cc.v3(-631.5, 21), cc.v3(-612.6, -4), cc.v3(-568, -5.4), cc.v3(-528, 19.5),
                cc.v3(-490, 61), cc.v3(-464, 108), cc.v3(-456, 170), cc.v3(-473, 204)
            ];
            this.scheduleOnce(function () {
                _this.isLast = true;
            }, 2);
            this.scheduleOnce(function () {
                listCream_1.active = true;
                var _loop_3 = function (i) {
                    listCream_1.children[i].active = false;
                    _this.scheduleOnce(function () {
                        // creamItem.position = pos
                        // console.log()
                        // if (i % 2 == 0) {
                        //     cc.audioEngine.play(this.soundCreamMini, false, 1)
                        // }
                        cc.tween(creamItem_1).to(0.1, { position: arrrPos_1[i] }).start();
                        listCream_1.children[i].active = true;
                    }, 0.15 * i);
                };
                for (var i = 0; i < listCream_1.childrenCount; i++) {
                    _loop_3(i);
                }
            }, 1.3);
            this.scheduleOnce(function () {
                listCream2_1.active = true;
                var _loop_4 = function (i) {
                    listCream2_1.children[i].active = false;
                    _this.scheduleOnce(function () {
                        cc.tween(creamItem_1).to(0.1, { position: arrrPos_1[i + 6] }).start();
                        listCream2_1.children[i].active = true;
                    }, 0.15 * i);
                };
                for (var i = 0; i < listCream2_1.childrenCount; i++) {
                    _loop_4(i);
                }
            }, 1.3 + 0.15 * 6);
            this.scheduleOnce(function () {
                cc.tween(_this.creeam.children[1]).to(0.4, { position: cc.v3(0, 0), angle: 0 }).start();
                _this.scheduleOnce(function () {
                    if (_this.isStep == 5) {
                        _this.listHand.children[2].active = true;
                    }
                }, 2.5);
            }, 3.8);
        }
        else {
            cc.audioEngine.play(this.soundWrong, false, 1);
            this.creeam.getComponent(cc.Animation).play("btn_wrong");
        }
    };
    NewClass.prototype.setGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.offGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.moveClocktoUI = function (node1) {
        this.moveItemToUI(node1, this.barTime.children[1]);
    };
    NewClass.prototype.moveItemToUI = function (node1, node2) {
        // cc.audioEngine.play(this.soundWoodin, false, 1)
        var pos = node2.parent.convertToWorldSpaceAR(node2.position);
        pos = this.uiNode.convertToNodeSpaceAR(pos);
        // pos = pos.add(cc.v3(0, 0))
        var pos2 = node1.parent.convertToWorldSpaceAR(node1.position);
        pos2 = this.mainCamera.getWorldToScreenPoint(pos2);
        pos2 = this.uiCamera.getScreenToWorldPoint(pos2);
        pos2 = this.uiNode.convertToNodeSpaceAR(pos2).add(cc.v3(0, 0));
        node1.parent = this.uiNode;
        node1.scale = this.mainCamera.zoomRatio / this.uiCamera.zoomRatio * 0.7;
        node1.position = pos2;
        cc.tween(node1).to(0.4, { position: pos, scale: 0.4 }).call(function () {
            node1.active = false;
            // this.missionBar.getComponent("updateBar").updateBar();
            // wood.getComponent(cc.Animation).play("exp")
            // // cc.audioEngine.play(this.soundWoodOut, false, 1)
        }).start();
    };
    NewClass.prototype.onEndGame = function (value) {
        if (this.isEndGame)
            return;
        this.isEndGame = true;
        this.warning.active = false;
        if (value == true) {
            this.barTime.getComponent("barTime").endGame();
            // cc.audioEngine.play(this.soundEnd, false, 1)
            cc.audioEngine.play(this.soundThinkWin, false, 1);
            // cc.audioEngine.play(this.soundWin, false, 1)
            // this.endCard.getChildByName("title").active = false
            this.endCardWin.active = true;
        }
        else {
            this.barTime.getComponent("barTime").endGame();
            cc.audioEngine.stop(this.idSound);
            cc.audioEngine.play(this.soundThinking, false, 1);
            cc.audioEngine.play(this.soundLose, false, 1);
            this.endCard.active = true;
        }
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
        this.camera.zoomRatio = 1.15;
        this.endCard.scale = (logic) ? 1.2 : 0.7;
        this.endCardWin.scale = (logic) ? 1.2 : 0.7;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.camera.node.position = cc.v3(0, -10);
        this.barTime.scale = (logic) ? 2 : 1.1;
        this.barCoin.scale = (logic) ? 2 : 1.1;
        this.clockTime.scale = (logic) ? 1.7 : 1;
        this.phaoHoa.scale = (logic) ? 9 : 5;
        this.guild.scale = (logic) ? 2 : 1.4;
        this.guild.position = (logic) ? cc.v3(0, -550) : cc.v3(0, -360);
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // this.camera.node.position = cc.v3(0, -70)
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 2.6;
            this.camera.node.position = cc.v3(0, -150);
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 2.1;
                this.camera.node.position = cc.v3(0, -120);
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
                this.camera.zoomRatio = 1;
                this.camera.node.position = cc.v3(0, -60);
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
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThinking", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCream", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCherry", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCreamMini", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThinkWin", void 0);
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
    ], NewClass.prototype, "endCardWin", void 0);
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
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "uiCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCheckItem", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "clockTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cake", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "creeam", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaoHoa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "warning", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUE7QUFDckIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0ZUM7UUExZUcsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUdsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLG9CQUFjLEdBQWlCLElBQUksQ0FBQTtRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGFBQU8sR0FBWSxJQUFJLENB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QUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNoQyw0Q0FBNEM7WUFFNUMsc0RBQXNEO1lBQ3RELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXRFLG1DQUFtQztZQUNuQyxJQUFNLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxTQUFTO1lBQ2xELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQVUsU0FBUztZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFMUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLFNBQVMsRUFBRTtnQkFDM0QsK0JBQStCO2FBRWxDO2lCQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLEdBQUcsU0FBUyxFQUFFO2dCQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBRTdDO1NBQ0o7YUFDSTtZQUNELElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBRWhDLHNEQUFzRDtZQUN0RCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV0RSxtQ0FBbUM7WUFDbkMsSUFBTSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsU0FBUztZQUNsRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFVLFNBQVM7WUFFakQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLFNBQVMsRUFBRTthQUU5RDtpQkFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxHQUFHLFNBQVMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUU1QztTQUNKO0lBR0wsQ0FBQztJQXplRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDSztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNhO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2E7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2E7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNZO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDWTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUl4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBbkZKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0ZTVCO0lBQUQsZUFBQztDQTVlRCxBQTRlQyxDQTVlcUMsRUFBRSxDQUFDLFNBQVMsR0E0ZWpEO2tCQTVlb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5jb2luID0gMTAwXHJcbmdsb2JhbFRoaXMuc2NHYW1lID0gZmFsc2VcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2hvd1BvcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsb3NlUG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIZWxsbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvQ3VzMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvQ3VzMzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRyYW5zOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmREb251dEp1bXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRFbmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTZWxsRG9uZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5raW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hlcnJ5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3JlYW1NaW5pOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkV2luOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIHVpQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyVGltZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhckNvaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2hlY2tJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2xvY2tUaW1lOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYWtlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3JlZWFtOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvSG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICAvLyBjYW1lcmE6Y2MuQ2FtZXJhPW51bGxcclxuXHJcbiAgICBtYXhLaGF5ID0gN1xyXG5cclxuICAgIGFyckRvbnV0cG9zID0gW11cclxuICAgIGFyckRvbnV0ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdXHJcbiAgICBhcnJLaGF5ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdXHJcbiAgICBhcnJLaGF5UG9zID0gW11cclxuICAgIGlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgaXNUdXRNZWF0ID0gZmFsc2VcclxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXHJcbiAgICBpc1R1dENsaWNrTWVhdCA9IGZhbHNlXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gc291bmRCZzpjYy5BdWRpb0NsaXA9bnVsbDtcclxuXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICAvLyBpc1N0ZXAgPSAwXHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBpZFNvdW5kID0gbnVsbFxyXG4gICAgaXNTdGVwID0gMFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmlkU291bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMCkge1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSwgMilcclxuICAgIH1cclxuICAgIGJ0bl9wbGF0ZShldmVudCkge1xyXG4gICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0XHJcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICB9XHJcbiAgICBidG5fY2FrZShldmVudCkge1xyXG4gICAgICAgIGxldCBjYWtlID0gbnVsbFxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyVGltZS5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmNvdW50RG93bigpXHJcbiAgICAgICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgY2FrZSA9IHRoaXMuY2FrZS5jaGlsZHJlblswXVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyLjUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgY2FrZSA9IHRoaXMuY2FrZS5jaGlsZHJlblszXVxyXG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyLjUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcbiAgICAgICAgY2FrZS5zY2FsZSA9IDAuNjtcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSBjYWtlLnBvc2l0aW9uO1xyXG4gICAgICAgIGNha2UucG9zaXRpb24gPSBsb2NhbFBvcy5hZGQoY2MudjMoMCwgMTIwKSlcclxuXHJcbiAgICAgICAgY2FrZS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIHRoaXMuaXNTdGVwKytcclxuICAgICAgICBjYy50d2VlbihjYWtlKS50bygwLjIsIHsgcG9zaXRpb246IGxvY2FsUG9zIH0pLnRvKDAuMiwgeyBzY2FsZTogMC43NSB9KS50bygwLjA3LCB7IHNjYWxlOiAwLjcgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgYnRuX0RhdShldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoZXJyeSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgbGlzdEZydWl0ID0gdGhpcy5jYWtlLmNoaWxkcmVuWzJdXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwKytcclxuICAgICAgICAgICAgbGlzdEZydWl0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEZydWl0LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZydWl0ID0gbGlzdEZydWl0LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgZnJ1aXQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvcyA9IGZydWl0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgZnJ1aXQucG9zaXRpb24gPSBsb2NhbFBvcy5hZGQoY2MudjMoMCwgMTIwKSlcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lID0gKGkgJSAyID09IDApID8gMCA6IDAuMlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZydWl0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bNV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGZydWl0KS50bygwLjMsIHsgcG9zaXRpb246IGxvY2FsUG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB9LCB0aW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDIuNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gNSAmJiB0aGlzLmlzTGFzdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoZXJyeSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlbls1XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGxldCBsaXN0RnJ1aXQgPSB0aGlzLmNha2UuY2hpbGRyZW5bNl1cclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXArK1xyXG4gICAgICAgICAgICBsaXN0RnJ1aXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0RnJ1aXQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnJ1aXQgPSBsaXN0RnJ1aXQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBmcnVpdC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gZnJ1aXQucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBmcnVpdC5wb3NpdGlvbiA9IGxvY2FsUG9zLmFkZChjYy52MygwLCAxMjApKVxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSAoaSAlIDIgPT0gMCkgPyAwIDogMC4zXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJ1aXQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGZydWl0KS50bygwLjMsIHsgcG9zaXRpb246IGxvY2FsUG9zIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0sIHRpbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waGFvSG9hLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gMTAwXHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuICAgICAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcclxuICAgICAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgIC8vIGJ0bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG4gICAgfVxyXG4gICAgYnRuX0tpd2koZXZlbnQpIHtcclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG4gICAgfVxyXG4gICAgYnRuX0hvYShldmVudCkge1xyXG4gICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0XHJcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICB9XHJcbiAgICBpc0xhc3QgPSBmYWxzZVxyXG4gICAgYnRuX2NyZWFtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ3JlYW0sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jcmVlYW0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNyZWFtMVwiKVxyXG4gICAgICAgICAgICBsZXQgY3JlYW0gPSB0aGlzLmNha2UuY2hpbGRyZW5bMV1cclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXArK1xyXG4gICAgICAgICAgICBjcmVhbS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIGNyZWFtLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2MudHdlZW4oY3JlYW0pLmRlbGF5KDAuNCkudG8oMC40LCB7IHNjYWxlOiAwLjcgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNyZWVhbS5jaGlsZHJlblsxXSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygwLCAwKSwgYW5nbGU6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAxLjIpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDIuNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDcmVhbSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgIHRoaXMuY3JlZWFtLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjcmVhbTJcIilcclxuICAgICAgICAgICAgbGV0IGNyZWFtSXRlbSA9IHRoaXMuY3JlZWFtLmNoaWxkcmVuWzFdXHJcbiAgICAgICAgICAgIGxldCBjcmVhbSA9IHRoaXMuY2FrZS5jaGlsZHJlbls0XVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCsrXHJcbiAgICAgICAgICAgIGNyZWFtLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgY3JlYW0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjYy50d2VlbihjcmVhbSkuZGVsYXkoMC42KS50bygwLjQsIHsgc2NhbGU6IDAuNyB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGxldCBsaXN0Q3JlYW0gPSB0aGlzLmNha2UuY2hpbGRyZW5bNV1cclxuICAgICAgICAgICAgbGV0IGxpc3RDcmVhbTIgPSB0aGlzLmNha2UuY2hpbGRyZW5bN11cclxuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ3JlYW0sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICBsZXQgYXJyclBvcyA9IFtjYy52MygtNTA3LCAyMjIpLCBjYy52MygtNTUxLCAxOTcpLCBjYy52MygtNTkwLCAxNjEpLCBjYy52MygtNjIxLCAxMTEpLCBjYy52MygtNjM0LCA1MCwgNjkpLCBjYy52MygtNjMxLjUsIDIxKSwgY2MudjMoLTYxMi42LCAtNCksIGNjLnYzKC01NjgsIC01LjQpLCBjYy52MygtNTI4LCAxOS41KSxcclxuICAgICAgICAgICAgY2MudjMoLTQ5MCwgNjEpLCBjYy52MygtNDY0LCAxMDgpLCBjYy52MygtNDU2LCAxNzApLCBjYy52MygtNDczLCAyMDQpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xhc3QgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0Q3JlYW0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdENyZWFtLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RDcmVhbS5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyZWFtSXRlbS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChpICUgMiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDcmVhbU1pbmksIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjcmVhbUl0ZW0pLnRvKDAuMSwgeyBwb3NpdGlvbjogYXJyclBvc1tpXSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0Q3JlYW0uY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMTUgKiBpKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEuMylcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlzdENyZWFtMi5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Q3JlYW0yLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RDcmVhbTIuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjcmVhbUl0ZW0pLnRvKDAuMSwgeyBwb3NpdGlvbjogYXJyclBvc1tpICsgNl0gfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdENyZWFtMi5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4xNSAqIGkpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMS4zICsgMC4xNSAqIDYpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlZWFtLmNoaWxkcmVuWzFdKS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApLCBhbmdsZTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMi41KVxyXG4gICAgICAgICAgICB9LCAzLjgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuY3JlZWFtLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJidG5fd3JvbmdcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1ncmF5LXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuXHJcbiAgICB9XHJcbiAgICBvZmZHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgfVxyXG4gICAgbW92ZUNsb2NrdG9VSShub2RlMSkge1xyXG4gICAgICAgIHRoaXMubW92ZUl0ZW1Ub1VJKG5vZGUxLCB0aGlzLmJhclRpbWUuY2hpbGRyZW5bMV0pO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW1Ub1VJKG5vZGUxLCBub2RlMikge1xyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdvb2RpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgbGV0IHBvcyA9IG5vZGUyLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTIucG9zaXRpb24pXHJcbiAgICAgICAgcG9zID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIC8vIHBvcyA9IHBvcy5hZGQoY2MudjMoMCwgMCkpXHJcbiAgICAgICAgbGV0IHBvczIgPSBub2RlMS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUxLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3MyID0gdGhpcy5tYWluQ2FtZXJhLmdldFdvcmxkVG9TY3JlZW5Qb2ludChwb3MyKTtcclxuICAgICAgICBwb3MyID0gdGhpcy51aUNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zMik7XHJcbiAgICAgICAgcG9zMiA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpLmFkZChjYy52MygwLCAwKSlcclxuICAgICAgICBub2RlMS5wYXJlbnQgPSB0aGlzLnVpTm9kZTtcclxuICAgICAgICBub2RlMS5zY2FsZSA9IHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gLyB0aGlzLnVpQ2FtZXJhLnpvb21SYXRpbyAqIDAuN1xyXG4gICAgICAgIG5vZGUxLnBvc2l0aW9uID0gcG9zMlxyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUxKS50bygwLjQsIHsgcG9zaXRpb246IHBvcywgc2NhbGU6IDAuNCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgbm9kZTEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgLy8gdGhpcy5taXNzaW9uQmFyLmdldENvbXBvbmVudChcInVwZGF0ZUJhclwiKS51cGRhdGVCYXIoKTtcclxuICAgICAgICAgICAgLy8gd29vZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZXhwXCIpXHJcbiAgICAgICAgICAgIC8vIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdvb2RPdXQsIGZhbHNlLCAxKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGlzRW5kR2FtZSA9IGZhbHNlXHJcbiAgICBvbkVuZEdhbWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IHRydWVcclxuICAgICAgICB0aGlzLndhcm5pbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJUaW1lLmdldENvbXBvbmVudChcImJhclRpbWVcIikuZW5kR2FtZSgpXHJcblxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua1dpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuZW5kQ2FyZC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyVGltZS5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG5cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5raW5nLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTG9zZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyBidG5fY2hvb3NlKGV2ZW50LCB2YWx1ZSkge1xyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIHRoaXMubGJDb2luLnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjE1XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuXHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNiA6IDAuNFxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTApXHJcbiAgICAgICAgdGhpcy5iYXJUaW1lLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxLjFcclxuICAgICAgICB0aGlzLmJhckNvaW4uc2NhbGUgPSAobG9naWMpID8gMiA6IDEuMVxyXG4gICAgICAgIHRoaXMuY2xvY2tUaW1lLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICB0aGlzLnBoYW9Ib2Euc2NhbGUgPSAobG9naWMpID8gOSA6IDVcclxuICAgICAgICB0aGlzLmd1aWxkLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxLjRcclxuICAgICAgICB0aGlzLmd1aWxkLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIC01NTApIDogY2MudjMoMCwgLTM2MClcclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC03MClcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDIuNlxyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTE1MClcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAyLjFcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTIwKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTYwKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==