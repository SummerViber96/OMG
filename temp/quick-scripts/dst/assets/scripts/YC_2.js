
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/YC_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1lDXzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFHcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErUkM7UUE3UkcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsU0FBRyxHQUFnQixJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLE9BQU87UUFFUCxhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFF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SyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRTVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDN0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3pCLElBQUksZUFBZSxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7b0NBRy9DLEtBQUs7Z0JBQ1YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RDLE9BQUssWUFBWSxDQUFDO29CQUNkLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7Z0JBQy9CLENBQUMsRUFBRSxHQUFHLEdB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UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUExRGIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStSNUI7SUFBRCxlQUFDO0NBL1JELEFBK1JDLENBL1JxQyxFQUFFLENBQUMsU0FBUyxHQStSakQ7a0JBL1JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZ2xvYmFsVGhpcy5jb3VudENoYXIgPSAyMDtcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoYXJTdGFydDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhcmRMaXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmaXJlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3hDaGF0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q2hhcjA6IGNjLk5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RDaGFyOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q2hhcjI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RCZWQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFNjZW5lMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgU2NlbmUyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBTY2VuZTM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFNjZW5lNDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhclNjZW5lMzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhclNjZW5lNDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGJlcDogc3AuU2tlbGV0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZGNhcmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy9zb3VuZFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kTmhhbkdvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDaGF0R286IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEdpb1Rob2k6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFVwZ3JhZGU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFJhbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuTG9uS2V1OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmREYXBDaGFvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRVaGg6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFplZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBpc0lkID0gMDtcblxuICAgIGlzdmVydGljYWwgPSBmYWxzZVxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcblxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC44KVxuICAgICAgICB0aGlzLmlzSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRSYW5nLCB0cnVlLCAwLjUpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRHaW9UaG9pLCB0cnVlLCAwLjgpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hhclN0YXJ0LmdldENvbXBvbmVudChDKS5zZXRCYXJCbG9vZCgwLjgpXG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyU3RhcnQpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMjg2LCAtNDYpIH0pLmRlbGF5KDAuNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDaGFyMCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5kaWUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZTEoKVxuXG4gICAgICAgICAgICB9LCAwLjUpXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjgsIHsgem9vbVJhdGlvOiAxIH0pLnN0YXJ0KClcblxuICAgIH1cbiAgICBtb3ZlMSgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuNiwgeyBwb3NpdGlvbjogY2MudjMoLTE3NDAsIDEwMCkgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuNiwgeyB6b29tUmF0aW86IDAuNiB9KS5zdGFydCgpXG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXJkTGlzdC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYXJkTGlzdC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLlNjZW5lMS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5ib3hDaGF0LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgfSwgMC42KVxuXG4gICAgfVxuICAgIGNhcmQxKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaXNJZClcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBncmFkZSwgZmFsc2UsIDEpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFplZSwgZmFsc2UsIDEpXG5cbiAgICAgICAgaWYgKGN1c3RvbUV2ZW50RGF0YSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLlNjZW5lMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwib2ZmQm94XCIpXG4gICAgICAgICAgICB0aGlzLm9mZkNhcmQoMSlcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1c3RvbUV2ZW50RGF0YSA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLlNjZW5lMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2hvb3NlMlwiKVxuICAgICAgICAgICAgdGhpcy5vZmZDYXJkKDIpXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXJkMihldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZ3JhZGUsIGZhbHNlLCAxKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRaZWUsIGZhbHNlLCAxKVxuXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLmNhcmRMaXN0LmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcbiAgICAgICAgdGhpcy5jYXJkTGlzdC5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS5ieSgwLjYsIHsgcG9zaXRpb246IGNjLnYzKDMwMCwgMjUwKSB9KS5zdGFydCgpXG4gICAgICAgIHRoaXMuU2NlbmU0LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgaWYgKGN1c3RvbUV2ZW50RGF0YSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLlNjZW5lMy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2hvb3NlMVwiKVxuICAgICAgICAgICAgdGhpcy5jaGFyU2NlbmUzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtb3ZlMVwiKVxuXG5cbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5kaWUoKVxuICAgICAgICAgICAgICAgIH0sIDEuMyArIDAuMSAqIHJkKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTIxMDAsIC0xMTAwKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU2NlbmU0LmdldENvbXBvbmVudChDKS5hbmdyeSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlcC5zZXRBbmltYXRpb24oMCwgXCJJZGxlX05vRmlyZVwiLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXG5cbiAgICAgICAgICAgICAgICB9KS5kZWxheSgwLjgpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTI1NTAsIC05MTkpIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuOCwgeyB6b29tUmF0aW86IDEuMiB9KS5kZWxheSgwLjgpLnRvKDAuMywgeyB6b29tUmF0aW86IDAuNyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkTGlzdC5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRMaXN0LmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG5cbiAgICAgICAgICAgIH0sIDIuOClcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5TY2VuZTMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNob29zZTJcIilcbiAgICAgICAgICAgIHRoaXMuY2hhclNjZW5lMy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibW92ZTFcIilcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibW92ZTFcIilcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1vdmVDaGFyKHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzBdLCB0aGlzLmxpc3RCZWQuY2hpbGRyZW5bMV0ucG9zaXRpb24pO1xuICAgICAgICAgICAgfSwgMC40KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubW92ZUNoYXIodGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bMV0sIHRoaXMubGlzdEJlZC5jaGlsZHJlblsyXS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIm1vdmUxXCIpXG5cbiAgICAgICAgICAgIH0sIDEpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2hhcih0aGlzLmxpc3RDaGFyMi5jaGlsZHJlblsyXSwgdGhpcy5saXN0QmVkLmNoaWxkcmVuWzNdLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0sIDEuNilcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygtMjU1MCwgLTEwMDApIH0pLnN0YXJ0KClcblxuICAgICAgICAgICAgLy8gfSwgMylcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygtMjEwMCwgLTExMDApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJTY2VuZTQuZ2V0Q29tcG9uZW50KEMpLmFuZ3J5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVwLnNldEFuaW1hdGlvbigwLCBcIklkbGVfTm9GaXJlXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgICAgICAgICB9KS5kZWxheSgwLjgpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTI1NTAsIC05MTkpIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuOCwgeyB6b29tUmF0aW86IDEuMiB9KS5kZWxheSgwLjgpLnRvKDAuMywgeyB6b29tUmF0aW86IDAuNyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkTGlzdC5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRMaXN0LmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcblxuICAgICAgICAgICAgfSwgMi44KVxuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBvbkVuZEdhbWUoKSB7XG4gICAgICAgIHRoaXMuZW5kY2FyZC5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBtb3ZlQ2hhcihjaGFyLCBwb3MpIHtcbiAgICAgICAgcG9zID0gdGhpcy5saXN0QmVkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpO1xuICAgICAgICBwb3MgPSB0aGlzLmxpc3RDaGFyMi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuICAgICAgICBjaGFyLmdldENvbXBvbmVudChDKS53YWxrKClcblxuICAgICAgICBjYy50d2VlbihjaGFyKS50bygyLjMsIHsgcG9zaXRpb246IHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KEMpLnNsZWVwKClcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH1cbiAgICBvZmZDYXJkKHZhbHVlKSB7XG5cbiAgICAgICAgdGhpcy5jYXJkTGlzdC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XG4gICAgICAgIHRoaXMuY2FyZExpc3QuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDaGFyKSB7XG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuZ2V0SGFwcHkoKVxuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC42LCB7IHpvb21SYXRpbzogMC45IH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5maXJlKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKTtcblxuICAgICAgICB9LCAxLjEpXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5nZXRDb2xkKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdENoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmRpZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMS40KVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuNiwgeyBwb3NpdGlvbjogY2MudjMoLTQxNjksIDIwMCkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjYsIHsgem9vbVJhdGlvOiAwLjcgfSkuc3RhcnQoKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuU2NlbmUyLmdldENoaWxkQnlOYW1lKFwiXCIpLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkTGlzdC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZExpc3QuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYm94Q2hhdC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9LCAwLjYpXG4gICAgICAgIH0sIDEuOClcblxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XG5cbiAgICAgICAgaWYgKGNjLndpblNpemUud2lkdGggPCBjYy53aW5TaXplLmhlaWdodCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzdmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZml0Q2FtZXJhLnpvb21SYXRpbyA9IDAuOFxuICAgICAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAwLjdcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1haW5DYW1lcmEubm9kZS5wb3NpdGlvbiA9IHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uLmFkZCggY2MudjMoLTEwMCwgMCkpXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy51aUZpdC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZC5zY2FsZSA9IGNoaWxkLnNjYWxlICogMC41O1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVpRml0LnNjYWxlWCA9IDAuOFxuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuc2NhbGVZID0gMC44XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjJcIikuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLnVpRml0LmNoaWxkcmVuWzBdLnNjYWxlID0gMC40XG4gICAgICAgICAgICAvLyB0aGlzLnVpRml0LmNoaWxkcmVuWzFdLnNjYWxlID0gMVxuXG4gICAgICAgICAgICAvLyB0aGlzLmZpdENhbWVyYS56b29tUmF0aW8gPSAxXG4gICAgICAgICAgICAvLyB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMS4zXG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjJcIikuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuaXNGb2xsb3cpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuaXNUYXJnZXQucG9zaXRpb24uYWRkKGNjLnYzKDUwLCAwKSkuY2xhbXBmKGNjLnYzKC01MjAsIC0zNDApLCBjYy52Myg5MDAsIDM0MCkpKTtcblxuICAgICAgICAvLyB9XG5cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==