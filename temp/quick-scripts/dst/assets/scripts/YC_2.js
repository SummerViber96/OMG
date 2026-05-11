
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWUNfMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxVQUFVLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUdwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQStSQztRQTdSRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBYyxFQUFFLENBQUM7UUFFMUIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixTQUFHLEdBQWdCLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsT0FBTztRQUVQLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQztR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QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQTFEYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK1I1QjtJQUFELGVBQUM7Q0EvUkQsQUErUkMsQ0EvUnFDLEVBQUUsQ0FBQyxTQUFTLEdBK1JqRDtrQkEvUm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJnbG9iYWxUaGlzLmNvdW50Q2hhciA9IDIwO1xyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFyU3RhcnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIG1haW5DYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhcmRMaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmlyZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJveENoYXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2hhcjA6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2hhcjogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGFyMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RCZWQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTY2VuZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTY2VuZTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTY2VuZTM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTY2VuZTQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFyU2NlbmUzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhclNjZW5lNDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBiZXA6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kY2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vc291bmRcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTmhhbkdvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hhdEdvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kR2lvVGhvaTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFVwZ3JhZGU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRSYW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5Mb25LZXU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmREYXBDaGFvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVWhoOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kWmVlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgaXNJZCA9IDA7XHJcblxyXG4gICAgaXN2ZXJ0aWNhbCA9IGZhbHNlXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuOClcclxuICAgICAgICB0aGlzLmlzSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRSYW5nLCB0cnVlLCAwLjUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdpb1Rob2ksIHRydWUsIDAuOClcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNoYXJTdGFydC5nZXRDb21wb25lbnQoQykuc2V0QmFyQmxvb2QoMC44KVxyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXJTdGFydCkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygyODYsIC00NikgfSkuZGVsYXkoMC41KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0Q2hhcjApIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5kaWUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZTEoKVxyXG5cclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuOCwgeyB6b29tUmF0aW86IDEgfSkuc3RhcnQoKVxyXG5cclxuICAgIH1cclxuICAgIG1vdmUxKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjYsIHsgcG9zaXRpb246IGNjLnYzKC0xNzQwLCAxMDApIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuNiwgeyB6b29tUmF0aW86IDAuNiB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkTGlzdC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRMaXN0LmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlNjZW5lMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmJveENoYXQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDAuNilcclxuXHJcbiAgICB9XHJcbiAgICBjYXJkMShldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pc0lkKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZ3JhZGUsIGZhbHNlLCAxKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFplZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGlmIChjdXN0b21FdmVudERhdGEgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLlNjZW5lMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwib2ZmQm94XCIpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmQ2FyZCgxKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3VzdG9tRXZlbnREYXRhID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5TY2VuZTIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNob29zZTJcIilcclxuICAgICAgICAgICAgdGhpcy5vZmZDYXJkKDIpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhcmQyKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVcGdyYWRlLCBmYWxzZSwgMSlcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRaZWUsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNhcmRMaXN0LmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcclxuICAgICAgICB0aGlzLmNhcmRMaXN0LmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkuYnkoMC42LCB7IHBvc2l0aW9uOiBjYy52MygzMDAsIDI1MCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuU2NlbmU0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBpZiAoY3VzdG9tRXZlbnREYXRhID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5TY2VuZTMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNob29zZTFcIilcclxuICAgICAgICAgICAgdGhpcy5jaGFyU2NlbmUzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtb3ZlMVwiKVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5kaWUoKVxyXG4gICAgICAgICAgICAgICAgfSwgMS4zICsgMC4xICogcmQpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKC0yMTAwLCAtMTEwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJTY2VuZTQuZ2V0Q29tcG9uZW50KEMpLmFuZ3J5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXAuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZV9Ob0ZpcmVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuZGVsYXkoMC44KS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKC0yNTUwLCAtOTE5KSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuOCwgeyB6b29tUmF0aW86IDEuMiB9KS5kZWxheSgwLjgpLnRvKDAuMywgeyB6b29tUmF0aW86IDAuNyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRMaXN0LmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkTGlzdC5jaGlsZHJlbls1XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICB9LCAyLjgpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5TY2VuZTMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNob29zZTJcIilcclxuICAgICAgICAgICAgdGhpcy5jaGFyU2NlbmUzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtb3ZlMVwiKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibW92ZTFcIilcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubW92ZUNoYXIodGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bMF0sIHRoaXMubGlzdEJlZC5jaGlsZHJlblsxXS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH0sIDAuNClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb3ZlQ2hhcih0aGlzLmxpc3RDaGFyMi5jaGlsZHJlblsxXSwgdGhpcy5saXN0QmVkLmNoaWxkcmVuWzJdLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtb3ZlMVwiKVxyXG5cclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2hhcih0aGlzLmxpc3RDaGFyMi5jaGlsZHJlblsyXSwgdGhpcy5saXN0QmVkLmNoaWxkcmVuWzNdLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfSwgMS42KVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygtMjU1MCwgLTEwMDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIC8vIH0sIDMpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKC0yMTAwLCAtMTEwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJTY2VuZTQuZ2V0Q29tcG9uZW50KEMpLmFuZ3J5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXAuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZV9Ob0ZpcmVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgICAgICB9KS5kZWxheSgwLjgpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTI1NTAsIC05MTkpIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC44LCB7IHpvb21SYXRpbzogMS4yIH0pLmRlbGF5KDAuOCkudG8oMC4zLCB7IHpvb21SYXRpbzogMC43IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZExpc3QuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRMaXN0LmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICB9LCAyLjgpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBvbkVuZEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5lbmRjYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBtb3ZlQ2hhcihjaGFyLCBwb3MpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmxpc3RCZWQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgcG9zID0gdGhpcy5saXN0Q2hhcjIuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICBjaGFyLmdldENvbXBvbmVudChDKS53YWxrKClcclxuXHJcbiAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMi4zLCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KEMpLnNsZWVwKClcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBvZmZDYXJkKHZhbHVlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZExpc3QuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZExpc3QuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdENoYXIpIHtcclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmdldEhhcHB5KClcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjYsIHsgem9vbVJhdGlvOiAwLjkgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5maXJlKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfSwgMS4xKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDaGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmdldENvbGQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDaGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmRpZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEuNClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuNiwgeyBwb3NpdGlvbjogY2MudjMoLTQxNjksIDIwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuNiwgeyB6b29tUmF0aW86IDAuNyB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuU2NlbmUyLmdldENoaWxkQnlOYW1lKFwiXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRMaXN0LmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRMaXN0LmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJveENoYXQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAwLjYpXHJcbiAgICAgICAgfSwgMS44KVxyXG5cclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG5cclxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc3ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5maXRDYW1lcmEuem9vbVJhdGlvID0gMC44XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMC43XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1haW5DYW1lcmEubm9kZS5wb3NpdGlvbiA9IHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uLmFkZCggY2MudjMoLTEwMCwgMCkpXHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy51aUZpdC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkLnNjYWxlID0gY2hpbGQuc2NhbGUgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVpRml0LnNjYWxlWCA9IDAuOFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51aUZpdC5zY2FsZVkgPSAwLjhcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjJcIikuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuY2hpbGRyZW5bMF0uc2NhbGUgPSAwLjRcclxuICAgICAgICAgICAgLy8gdGhpcy51aUZpdC5jaGlsZHJlblsxXS5zY2FsZSA9IDFcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuZml0Q2FtZXJhLnpvb21SYXRpbyA9IDFcclxuICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuM1xyXG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjJcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5pc0ZvbGxvdykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5zZXRQb3NpdGlvbih0aGlzLmlzVGFyZ2V0LnBvc2l0aW9uLmFkZChjYy52Myg1MCwgMCkpLmNsYW1wZihjYy52MygtNTIwLCAtMzQwKSwgY2MudjMoOTAwLCAzNDApKSk7XHJcblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==