"use strict";
cc._RF.push(module, 'd9302VDbb5Gs5HHYas2kVY8', 'YC_2');
// scripts/YC_2.ts

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
globalThis.countChar = 20;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.charStart = null;
        _this.mainCamera = null;
        _this.cardList = null;
        _this.fire = null;
        _this.boxChat = null;
        _this.listChar0 = [];
        _this.listChar = [];
        _this.listChar2 = null;
        _this.listBed = null;
        _this.Scene1 = null;
        _this.Scene2 = null;
        _this.Scene3 = null;
        _this.Scene4 = null;
        _this.charScene3 = null;
        _this.charScene4 = null;
        _this.bep = null;
        _this.endcard = null;
        _this.hand = null;
        //sound
        _this.soundBg = null;
        _this.soundNhanGo = null;
        _this.soundChatGo = null;
        _this.soundGioThoi = null;
        _this.soundUpgrade = null;
        _this.soundRang = null;
        _this.sounLonKeu = null;
        _this.soundDapChao = null;
        _this.soundUhh = null;
        _this.soundZee = null;
        _this.isId = 0;
        _this.isvertical = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        // window.gameReady && window.gameReady();
        cc.audioEngine.play(this.soundBg, true, 0.8);
        this.isId = cc.audioEngine.play(this.soundRang, true, 0.5);
        cc.audioEngine.play(this.soundGioThoi, true, 0.8);
        this.init();
    };
    NewClass.prototype.init = function () {
        var _this = this;
        this.charStart.getComponent(C).setBarBlood(0.8);
        cc.tween(this.charStart).to(0.8, { position: cc.v3(286, -46) }).delay(0.5).call(function () {
            for (var _i = 0, _a = _this.listChar0; _i < _a.length; _i++) {
                var child = _a[_i];
                child.getComponent(C).die();
            }
            _this.scheduleOnce(function () {
                _this.move1();
            }, 0.5);
        }).start();
        cc.tween(this.mainCamera).to(0.8, { zoomRatio: 1 }).start();
    };
    NewClass.prototype.move1 = function () {
        var _this = this;
        cc.tween(this.mainCamera.node).to(0.6, { position: cc.v3(-1740, 100) }).start();
        cc.tween(this.mainCamera).to(0.6, { zoomRatio: 0.6 }).start();
        this.scheduleOnce(function () {
            _this.cardList.children[0].active = true;
            _this.cardList.children[1].active = true;
            _this.hand.active = true;
            _this.Scene1.active = false;
            _this.boxChat.active = true;
        }, 0.6);
    };
    NewClass.prototype.card1 = function (event, customEventData) {
        this.hand.active = false;
        cc.audioEngine.stop(this.isId);
        cc.audioEngine.play(this.soundUpgrade, false, 1);
        cc.audioEngine.play(this.soundZee, false, 1);
        if (customEventData == 1) {
            this.Scene2.getComponent(cc.Animation).play("offBox");
            this.offCard(1);
        }
        else if (customEventData == 2) {
            this.Scene2.getComponent(cc.Animation).play("choose2");
            this.offCard(2);
        }
    };
    NewClass.prototype.card2 = function (event, customEventData) {
        var _this = this;
        cc.audioEngine.play(this.soundUpgrade, false, 1);
        cc.audioEngine.play(this.soundZee, false, 1);
        this.hand.active = false;
        this.cardList.children[2].getComponent(cc.Animation).play("card_off");
        this.cardList.children[3].getComponent(cc.Animation).play("card_off");
        cc.tween(this.mainCamera.node).by(0.6, { position: cc.v3(300, 250) }).start();
        this.Scene4.active = true;
        if (customEventData == 1) {
            this.Scene3.getComponent(cc.Animation).play("choose1");
            this.charScene3.getComponent(cc.Animation).play("move1");
            var _loop_1 = function (child) {
                var rd = Math.floor(Math.random() * 5);
                this_1.scheduleOnce(function () {
                    child.getComponent(C).die();
                }, 1.3 + 0.1 * rd);
            };
            var this_1 = this;
            for (var _i = 0, _a = this.listChar2.children; _i < _a.length; _i++) {
                var child = _a[_i];
                _loop_1(child);
            }
            this.scheduleOnce(function () {
                cc.tween(_this.mainCamera.node).to(0.8, { position: cc.v3(-2100, -1100) }).call(function () {
                    _this.scheduleOnce(function () {
                        _this.charScene4.getComponent(C).angry();
                        _this.bep.setAnimation(0, "Idle_NoFire", true);
                    }, 0.5);
                }).delay(0.8).to(0.3, { position: cc.v3(-2550, -919) }).start();
                cc.tween(_this.mainCamera).to(0.8, { zoomRatio: 1.2 }).delay(0.8).to(0.3, { zoomRatio: 0.7 }).call(function () {
                    _this.cardList.children[4].active = true;
                    _this.cardList.children[5].active = true;
                    _this.hand.active = true;
                }).start();
            }, 2.8);
        }
        else {
            this.Scene3.getComponent(cc.Animation).play("choose2");
            this.charScene3.getComponent(cc.Animation).play("move1");
            this.scheduleOnce(function () {
                _this.listChar2.children[0].getComponent(cc.Animation).play("move1");
                // this.moveChar(this.listChar2.children[0], this.listBed.children[1].position);
            }, 0.4);
            this.scheduleOnce(function () {
                // this.moveChar(this.listChar2.children[1], this.listBed.children[2].position);
                _this.listChar2.children[1].getComponent(cc.Animation).play("move1");
            }, 1);
            this.scheduleOnce(function () {
                _this.moveChar(_this.listChar2.children[2], _this.listBed.children[3].position);
            }, 1.6);
            // this.scheduleOnce(() => {
            //     cc.tween(this.mainCamera.node).to(0.8, { position: cc.v3(-2550, -1000) }).start()
            // }, 3)
            this.scheduleOnce(function () {
                cc.tween(_this.mainCamera.node).to(0.8, { position: cc.v3(-2100, -1100) }).call(function () {
                    _this.scheduleOnce(function () {
                        _this.charScene4.getComponent(C).angry();
                        _this.bep.setAnimation(0, "Idle_NoFire", true);
                    }, 0.5);
                }).delay(0.8).to(0.3, { position: cc.v3(-2550, -919) }).start();
                cc.tween(_this.mainCamera).to(0.8, { zoomRatio: 1.2 }).delay(0.8).to(0.3, { zoomRatio: 0.7 }).call(function () {
                    _this.cardList.children[4].active = true;
                    _this.cardList.children[5].active = true;
                    _this.hand.active = true;
                }).start();
            }, 2.8);
        }
    };
    NewClass.prototype.onEndGame = function () {
        this.endcard.active = true;
    };
    NewClass.prototype.moveChar = function (char, pos) {
        pos = this.listBed.convertToWorldSpaceAR(pos);
        pos = this.listChar2.convertToNodeSpaceAR(pos);
        char.getComponent(C).walk();
        cc.tween(char).to(2.3, { position: pos }).call(function () {
            char.getComponent(C).sleep();
        }).start();
    };
    NewClass.prototype.offCard = function (value) {
        var _this = this;
        this.cardList.children[0].getComponent(cc.Animation).play("card_off");
        this.cardList.children[1].getComponent(cc.Animation).play("card_off");
        for (var _i = 0, _a = this.listChar; _i < _a.length; _i++) {
            var child = _a[_i];
            child.getComponent(C).getHappy();
        }
        cc.tween(this.mainCamera).to(0.6, { zoomRatio: 0.9 }).start();
        this.scheduleOnce(function () {
            cc.tween(_this.fire).to(0.3, { scale: 0 }).start();
        }, 1.1);
        if (value == 1) {
            this.scheduleOnce(function () {
                for (var _i = 0, _a = _this.listChar; _i < _a.length; _i++) {
                    var child = _a[_i];
                    child.getComponent(C).getCold();
                }
            }, 1);
            this.scheduleOnce(function () {
                for (var _i = 0, _a = _this.listChar; _i < _a.length; _i++) {
                    var child = _a[_i];
                    child.getComponent(C).die();
                }
            }, 1.4);
        }
        this.scheduleOnce(function () {
            cc.tween(_this.mainCamera.node).to(0.6, { position: cc.v3(-4169, 200) }).start();
            cc.tween(_this.mainCamera).to(0.6, { zoomRatio: 0.7 }).start();
            _this.scheduleOnce(function () {
                // this.Scene2.getChildByName("").active = false
                _this.cardList.children[2].active = true;
                _this.cardList.children[3].active = true;
                _this.hand.active = true;
                // this.boxChat.active = true
            }, 0.6);
        }, 1.8);
    };
    NewClass.prototype.update = function () {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // this.fitCamera.zoomRatio = 0.8
                // this.mainCamera.zoomRatio = 0.7
                // this.mainCamera.node.position = this.mainCamera.node.position.add( cc.v3(-100, 0))
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                // for (let child of this.uiFit.children) {
                //     child.scale = child.scale * 0.5;
                // }
                // this.uiFit.scaleX = 0.8
                // this.uiFit.scaleY = 0.8
                this.endcard.getChildByName("banner1").active = true;
                this.endcard.getChildByName("banner2").active = false;
            }
        }
        else {
            this.isvertical = false;
            // this.uiFit.children[0].scale = 0.4
            // this.uiFit.children[1].scale = 1
            // this.fitCamera.zoomRatio = 1
            // this.mainCamera.zoomRatio = 1.3
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.endcard.getChildByName("banner1").active = false;
            this.endcard.getChildByName("banner2").active = true;
        }
        // if (this.isFollow) {
        //     this.mainCamera.node.setPosition(this.isTarget.position.add(cc.v3(50, 0)).clampf(cc.v3(-520, -340), cc.v3(900, 340)));
        // }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "charStart", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cardList", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "fire", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boxChat", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChar0", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChar2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBed", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Scene1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Scene2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Scene3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Scene4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "charScene3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "charScene4", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "bep", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endcard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundNhanGo", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChatGo", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundGioThoi", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUpgrade", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundRang", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "sounLonKeu", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundDapChao", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUhh", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundZee", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();