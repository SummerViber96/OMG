
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/YC_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60fdcCgLT5FkqDP46wZTMeH', 'YC_4');
// scripts/YC_4.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainCamera = null;
        // @property(cc.Node)
        // snow: cc.Node = null;
        _this.listChar1 = null;
        _this.listChar2 = null;
        _this.popStop = null;
        _this.listCardNode = null;
        _this.hand = null;
        _this.scene1 = null;
        _this.scene2 = null;
        _this.fire = null;
        _this.bep = null;
        _this.endcard = null;
        _this.linkToStore = null;
        _this.listBlanket = null;
        _this.preWood = null;
        _this.soundBg = null;
        _this.soundGioThoi = null;
        _this.soundUpgrade = null;
        _this.soundRang = null;
        _this.soundZee = null;
        _this.isvertical = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        var _this = this;
        cc.audioEngine.play(this.soundGioThoi, true, 0.8);
        cc.audioEngine.play(this.soundBg, true, 0.8);
        window.gameReady && window.gameReady();
        this.scheduleOnce(function () {
            _this.moveCamera();
        }, 0.2);
        // this.scheduleOnce(() => {
        //     for (let char of this.listChar1.children) {
        //         char.getComponent(C).slow()
        //     }
        // }, 0.6)
    };
    NewClass.prototype.moveCamera = function () {
        var _this = this;
        cc.tween(this.mainCamera.node).by(2.6, { position: cc.v3(800, 100) }).start();
        cc.tween(this.mainCamera).to(2.6, { zoomRatio: 0.7 }).call(function () {
            _this.scheduleOnce(function () {
                // for (let char of this.listChar1.children) {
                //     char.getComponent(C).getCold()
                //     char.getChildByName("status").active = false
                // }
                _this.moveCamera2();
            }, 0.4);
        }).start();
        this.scheduleOnce(function () {
            _this.scene1.getComponent(cc.Animation).getAnimationState("scene1_move").speed = 0.3;
        }, 2);
    };
    NewClass.prototype.moveCamera2 = function () {
        var _this = this;
        cc.tween(this.mainCamera.node).by(0.45, { position: cc.v3(100, -100) }).start();
        cc.tween(this.mainCamera).to(0.45, { zoomRatio: 1.2 }).call(function () {
            _this.turnPop1();
        }).start();
        // this.scheduleOnce(() => {
        //     this.popStop.active = true;
        // }, 0.25)
    };
    NewClass.prototype.turnPop1 = function () {
        this.listCardNode.children[0].active = true;
        this.listCardNode.children[1].active = true;
        this.hand.active = true;
    };
    NewClass.prototype.btn1 = function () {
        var _this = this;
        cc.audioEngine.play(this.soundUpgrade, false, 1);
        this.hand.active = false;
        this.listCardNode.children[0].getComponent(cc.Animation).play("card_off");
        this.listCardNode.children[1].getComponent(cc.Animation).play("card_off");
        this.scheduleOnce(function () {
            _this.popStop.active = true;
        }, 1);
        this.scheduleOnce(function () {
            for (var _i = 0, _a = _this.listChar1.children; _i < _a.length; _i++) {
                var char = _a[_i];
                char.getComponent(C).getCold();
                char.getChildByName("status").active = false;
            }
            _this.scene1.getComponent(cc.Animation).stop("scene1_move");
        }, 1.2);
        this.scheduleOnce(function () {
            for (var _i = 0, _a = _this.listChar1.children; _i < _a.length; _i++) {
                var char = _a[_i];
                char.getComponent(C).die();
            }
        }, 1.7);
        this.scene2.getComponent(cc.Animation).play("scene2_stop");
        this.listChar2.children[3].getComponent(C).atkIdle();
        this.listChar2.children[4].getComponent(C).atkIdle();
        this.scheduleOnce(function () {
            _this.listChar2.children[3].getComponent(C).atkIdle2();
            _this.listChar2.children[4].getComponent(C).atkIdle2();
        }, 1);
        this.scheduleOnce(function () {
            cc.tween(_this.mainCamera.node).by(0.45, { position: cc.v3(500, 100) }).start();
            cc.tween(_this.mainCamera).to(0.45, { zoomRatio: 1 }).call(function () {
                _this.turnPop2();
            }).start();
            _this.popStop.active = false;
        }, 2);
    };
    NewClass.prototype.btn2 = function () {
        var _this = this;
        cc.audioEngine.play(this.soundUpgrade, false, 1);
        this.hand.active = false;
        this.listCardNode.children[0].getComponent(cc.Animation).play("card_off");
        this.listCardNode.children[1].getComponent(cc.Animation).play("card_off");
        // this.listChar1.children[0].getComponent(C).walk()
        // this.listChar1.children[2].getComponent(C).walk()
        this.scene1.getComponent(cc.Animation).getAnimationState("scene1_move").stop();
        this.listChar1.children[0].getComponent(C).setDf();
        this.listChar1.children[2].getComponent(C).setDf();
        cc.tween(this.listChar1.children[0]).to(1.5, { position: cc.v3(-253, -110) }).call(function () {
            _this.listChar1.children[0].getComponent(C).getHappy();
            _this.listChar1.children[2].getComponent(C).getHappy();
            _this.listChar1.children[2].parent = _this.listChar2;
            _this.listChar1.children[0].parent = _this.listChar2;
            cc.audioEngine.play(_this.soundZee, false, 1);
            //    this.scheduleOnce(()=>{
            for (var _i = 0, _a = _this.listChar1.children; _i < _a.length; _i++) {
                var char = _a[_i];
                char.getComponent(C).die();
            }
            //    },0.5)
        }).start();
        cc.tween(this.listChar1.children[2]).to(1.5, { position: cc.v3(-126, -120) }).start();
        this.scheduleOnce(function () {
            cc.tween(_this.mainCamera.node).by(0.45, { position: cc.v3(500, 100) }).start();
            cc.tween(_this.mainCamera).to(0.45, { zoomRatio: 1 }).call(function () {
                _this.turnPop2();
            }).start();
            _this.popStop.active = false;
        }, 2);
    };
    NewClass.prototype.turnPop2 = function () {
        var _this = this;
        this.scheduleOnce(function () {
            // for (let char of this.listChar2.children) {
            //     char.getComponent(C).getCold()
            // }
            cc.audioEngine.play(_this.soundRang, false, 0.8);
            var _loop_1 = function (i) {
                _this.scheduleOnce(function () {
                    _this.listChar2.children[i].getComponent(C).getCold();
                }, 0.04 * i);
            };
            for (var i = 0; i < _this.listChar2.childrenCount; i++) {
                _loop_1(i);
            }
            _this.fire.scale = 1.5;
        }, 0.3);
        this.scheduleOnce(function () {
            _this.hand.active = true;
            _this.listCardNode.children[2].active = true;
            _this.listCardNode.children[3].active = true;
        }, 1);
    };
    NewClass.prototype.btn3 = function () {
        var _this = this;
        cc.audioEngine.play(this.soundUpgrade, false, 1);
        this.hand.active = false;
        this.listCardNode.children[2].getComponent(cc.Animation).play("card_off");
        this.listCardNode.children[3].getComponent(cc.Animation).play("card_off");
        this.listChar2.children[5].getComponent(C).walkSad();
        this.listChar2.children[6].getComponent(C).walkSad();
        this.listChar2.children[3].getComponent(C).walkSad();
        this.listChar2.children[4].getComponent(C).walkSad();
        if (this.listChar2.childrenCount >= 8) {
            this.listChar2.children[7].getComponent(C).walkSad();
            this.listChar2.children[8].getComponent(C).walkSad();
            cc.tween(this.listChar2.children[7]).to(1.5, { position: cc.v3(-700, -394) }).start();
            cc.tween(this.listChar2.children[8]).to(1.5, { position: cc.v3(-700, -394) }).start();
            this.scheduleOnce(function () {
                _this.listChar2.children[7].getComponent(C).die();
                _this.listChar2.children[8].getComponent(C).die();
            }, 2.8);
        }
        cc.tween(this.listChar2.children[3]).to(2, { position: cc.v3(-500, -394) }).start();
        cc.tween(this.listChar2.children[4]).to(2, { position: cc.v3(-500, -394) }).start();
        this.scheduleOnce(function () {
            _this.listChar2.children[5].getComponent(C).die();
            _this.listChar2.children[6].getComponent(C).die();
            _this.listChar2.children[3].getComponent(C).die();
            _this.listChar2.children[4].getComponent(C).die();
            _this.step3(0);
        }, 2.8);
        this.scene2.getComponent(cc.Animation).play("scene2_move");
    };
    NewClass.prototype.btn4 = function () {
        var _this = this;
        cc.audioEngine.play(this.soundUpgrade, false, 1);
        this.hand.active = false;
        this.listCardNode.children[2].getComponent(cc.Animation).play("card_off");
        this.listCardNode.children[3].getComponent(cc.Animation).play("card_off");
        this.listBlanket.children[2].active = true;
        this.listBlanket.children[3].active = true;
        for (var _i = 0, _a = this.listChar2.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.getChildByName("status").active = false;
        }
        this.scheduleOnce(function () {
            _this.listBlanket.children[0].active = false;
            _this.listBlanket.children[1].active = false;
            _this.createWood(_this.listBlanket.children[0].position);
            _this.createWood(_this.listBlanket.children[1].position);
        }, 0.2);
        this.scheduleOnce(function () {
            _this.fire.scale = 2.4;
            cc.audioEngine.play(_this.soundUpgrade, false, 1);
        }, 0.7);
        this.scheduleOnce(function () {
            _this.step3(1);
        }, 1.6);
    };
    NewClass.prototype.createWood = function (pos) {
        var _this = this;
        var _loop_2 = function (i) {
            pos = this_1.listBlanket.convertToWorldSpaceAR(pos);
            pos = this_1.listBlanket.convertToNodeSpaceAR(pos);
            var wood = cc.instantiate(this_1.preWood);
            wood.parent = this_1.bep;
            wood.position = pos;
            cc.tween(wood).delay(0.08 * i).to(0.3, { position: cc.v3(0, 0) }).call(function () {
                wood.children[0].active = true;
                _this.scheduleOnce(function () {
                    wood.destroy();
                }, 0.3);
            }).start();
        };
        var this_1 = this;
        for (var i = 0; i < 2; i++) {
            _loop_2(i);
        }
    };
    NewClass.prototype.step3 = function (value) {
        var _this = this;
        this.scheduleOnce(function () {
            // for (let char of this.listChar2.children) {
            //     char.getComponent(C).hungry()
            // }
            if (value == 0) {
                _this.listChar2.children[0].getComponent(C).hungry();
                _this.listChar2.children[1].getComponent(C).hungry();
                _this.listChar2.children[2].getComponent(C).hungry();
            }
            else {
                var _loop_3 = function (i) {
                    _this.scheduleOnce(function () {
                        _this.listChar2.children[i].getComponent(C).hungry();
                    }, 0.04 * i);
                };
                for (var i = 0; i < _this.listChar2.childrenCount; i++) {
                    _loop_3(i);
                }
                // for(let child of this.listChar2.children){
                //     child.getComponent(C).hungry()
                // }
            }
            _this.fire.active = false;
            _this.bep.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
            _this.scheduleOnce(function () {
                _this.listCardNode.children[4].active = true;
                _this.listCardNode.children[5].active = true;
            }, 0.5);
            _this.scheduleOnce(function () {
                _this.hand.active = true;
                _this.linkToStore.active = true;
            }, 0.8);
        }, 0.3);
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
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChar1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChar2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "popStop", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCardNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "fire", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bep", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endcard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBlanket", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxHQXlXakQ7a0JBeldvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBzbm93OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q2hhcjE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RDaGFyMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wU3RvcDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENhcmROb2RlOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2NlbmUxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzY2VuZTI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZpcmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJlcDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5kY2FyZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RCbGFua2V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZVdvb2Q6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRHaW9UaG9pOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRVcGdyYWRlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRSYW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRaZWU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBpc3ZlcnRpY2FsID0gZmFsc2VcbiAgICBzdGFydCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kR2lvVGhvaSx0cnVlLDAuOClcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsdHJ1ZSwwLjgpXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZUNhbWVyYSgpXG5cbiAgICAgICAgfSwgMC4yKVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBmb3IgKGxldCBjaGFyIG9mIHRoaXMubGlzdENoYXIxLmNoaWxkcmVuKSB7XG4gICAgICAgIC8vICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoQykuc2xvdygpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sIDAuNilcbiAgICB9XG4gICAgbW92ZUNhbWVyYSgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLmJ5KDIuNiwgeyBwb3NpdGlvbjogY2MudjMoODAwLCAxMDApIH0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygyLjYsIHsgem9vbVJhdGlvOiAwLjcgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgY2hhciBvZiB0aGlzLmxpc3RDaGFyMS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIC8vICAgICBjaGFyLmdldENvbXBvbmVudChDKS5nZXRDb2xkKClcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInN0YXR1c1wiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYW1lcmEyKClcblxuICAgICAgICAgICAgfSwgMC40KVxuXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2VuZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuZ2V0QW5pbWF0aW9uU3RhdGUoXCJzY2VuZTFfbW92ZVwiKS5zcGVlZCA9IDAuM1xuICAgICAgICB9LCAyKVxuXG5cblxuICAgIH1cbiAgICBtb3ZlQ2FtZXJhMigpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLmJ5KDAuNDUsIHsgcG9zaXRpb246IGNjLnYzKDEwMCwgLTEwMCkgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuNDUsIHsgem9vbVJhdGlvOiAxLjIgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnR1cm5Qb3AxKClcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLnBvcFN0b3AuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAvLyB9LCAwLjI1KVxuICAgIH1cbiAgICB0dXJuUG9wMSgpIHtcbiAgICAgICAgdGhpcy5saXN0Q2FyZE5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saXN0Q2FyZE5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgYnRuMSgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBncmFkZSwgZmFsc2UsIDEpXG5cbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMubGlzdENhcmROb2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcbiAgICAgICAgdGhpcy5saXN0Q2FyZE5vZGUuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvcFN0b3AuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB9LCAxKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBjaGFyIG9mIHRoaXMubGlzdENoYXIxLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoQykuZ2V0Q29sZCgpXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInN0YXR1c1wiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHRoaXMuc2NlbmUxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoXCJzY2VuZTFfbW92ZVwiKVxuICAgICAgICB9LCAxLjIpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGNoYXIgb2YgdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChDKS5kaWUoKVxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9LCAxLjcpXG4gICAgICAgIHRoaXMuc2NlbmUyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzY2VuZTJfc3RvcFwiKVxuICAgICAgICB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoQykuYXRrSWRsZSgpXG4gICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChDKS5hdGtJZGxlKClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bM10uZ2V0Q29tcG9uZW50KEMpLmF0a0lkbGUyKClcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChDKS5hdGtJZGxlMigpXG4gICAgICAgIH0sIDEpXG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLmJ5KDAuNDUsIHsgcG9zaXRpb246IGNjLnYzKDUwMCwgMTAwKSB9KS5zdGFydCgpXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuNDUsIHsgem9vbVJhdGlvOiAxIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudHVyblBvcDIoKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgdGhpcy5wb3BTdG9wLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIH0sIDIpXG4gICAgfVxuICAgIGJ0bjIoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZ3JhZGUsIGZhbHNlLCAxKVxuXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLmxpc3RDYXJkTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XG4gICAgICAgIHRoaXMubGlzdENhcmROb2RlLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcbiAgICAgICAgLy8gdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEMpLndhbGsoKVxuICAgICAgICAvLyB0aGlzLmxpc3RDaGFyMS5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoQykud2FsaygpXG4gICAgICAgIHRoaXMuc2NlbmUxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmdldEFuaW1hdGlvblN0YXRlKFwic2NlbmUxX21vdmVcIikuc3RvcCgpXG4gICAgICAgIHRoaXMubGlzdENoYXIxLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChDKS5zZXREZigpXG4gICAgICAgIHRoaXMubGlzdENoYXIxLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChDKS5zZXREZigpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdENoYXIxLmNoaWxkcmVuWzBdKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKC0yNTMsIC0xMTApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEMpLmdldEhhcHB5KClcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIxLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChDKS5nZXRIYXBweSgpXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGFyMS5jaGlsZHJlblsyXS5wYXJlbnQgPSB0aGlzLmxpc3RDaGFyMlxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW5bMF0ucGFyZW50ID0gdGhpcy5saXN0Q2hhcjJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFplZSwgZmFsc2UsIDEpXG5cbiAgICAgICAgICAgIC8vICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICBmb3IgKGxldCBjaGFyIG9mIHRoaXMubGlzdENoYXIxLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoQykuZGllKClcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgfSwwLjUpXG5cbiAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RDaGFyMS5jaGlsZHJlblsyXSkudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygtMTI2LCAtMTIwKSB9KS5zdGFydCgpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS5ieSgwLjQ1LCB7IHBvc2l0aW9uOiBjYy52Myg1MDAsIDEwMCkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjQ1LCB7IHpvb21SYXRpbzogMSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5Qb3AyKClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIHRoaXMucG9wU3RvcC5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB9LCAyKVxuICAgIH1cblxuXG5cblxuICAgIHR1cm5Qb3AyKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBjaGFyIG9mIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAvLyAgICAgY2hhci5nZXRDb21wb25lbnQoQykuZ2V0Q29sZCgpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRSYW5nLGZhbHNlLDAuOClcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChDKS5nZXRDb2xkKClcblxuICAgICAgICAgICAgICAgIH0sIDAuMDQgKiBpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5maXJlLnNjYWxlID0gMS41XG4gICAgICAgIH0sIDAuMylcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5saXN0Q2FyZE5vZGUuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmROb2RlLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgfSwgMSlcblxuICAgIH1cbiAgICBidG4zKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVcGdyYWRlLCBmYWxzZSwgMSlcblxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgdGhpcy5saXN0Q2FyZE5vZGUuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xuICAgICAgICB0aGlzLmxpc3RDYXJkTm9kZS5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XG4gICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChDKS53YWxrU2FkKClcbiAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bNl0uZ2V0Q29tcG9uZW50KEMpLndhbGtTYWQoKVxuICAgICAgICB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoQykud2Fsa1NhZCgpXG4gICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChDKS53YWxrU2FkKClcbiAgICAgICAgaWYgKHRoaXMubGlzdENoYXIyLmNoaWxkcmVuQ291bnQgPj0gOCkge1xuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bN10uZ2V0Q29tcG9uZW50KEMpLndhbGtTYWQoKVxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bOF0uZ2V0Q29tcG9uZW50KEMpLndhbGtTYWQoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bN10pLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoLTcwMCwgLTM5NCkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bOF0pLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoLTcwMCwgLTM5NCkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzddLmdldENvbXBvbmVudChDKS5kaWUoKVxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzhdLmdldENvbXBvbmVudChDKS5kaWUoKVxuXG4gICAgICAgICAgICB9LCAyLjgpXG4gICAgICAgIH1cblxuICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RDaGFyMi5jaGlsZHJlblszXSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoLTUwMCwgLTM5NCkgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RDaGFyMi5jaGlsZHJlbls0XSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoLTUwMCwgLTM5NCkgfSkuc3RhcnQoKVxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChDKS5kaWUoKVxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bNl0uZ2V0Q29tcG9uZW50KEMpLmRpZSgpXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoQykuZGllKClcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChDKS5kaWUoKVxuICAgICAgICAgICAgdGhpcy5zdGVwMygwKVxuICAgICAgICB9LCAyLjgpXG4gICAgICAgIHRoaXMuc2NlbmUyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzY2VuZTJfbW92ZVwiKVxuXG4gICAgfVxuICAgIGJ0bjQoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZ3JhZGUsIGZhbHNlLCAxKVxuXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLmxpc3RDYXJkTm9kZS5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XG4gICAgICAgIHRoaXMubGlzdENhcmROb2RlLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcbiAgICAgICAgdGhpcy5saXN0QmxhbmtldC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RCbGFua2V0LmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInN0YXR1c1wiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdEJsYW5rZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxpc3RCbGFua2V0LmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVXb29kKHRoaXMubGlzdEJsYW5rZXQuY2hpbGRyZW5bMF0ucG9zaXRpb24pXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVdvb2QodGhpcy5saXN0QmxhbmtldC5jaGlsZHJlblsxXS5wb3NpdGlvbilcblxuICAgICAgICB9LCAwLjIpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlyZS5zY2FsZSA9IDIuNFxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBncmFkZSwgZmFsc2UsIDEpXG5cbiAgICAgICAgfSwgMC43KVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc3RlcDMoMSlcbiAgICAgICAgfSwgMS42KVxuICAgIH1cbiAgICBjcmVhdGVXb29kKHBvcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgcG9zID0gdGhpcy5saXN0QmxhbmtldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcbiAgICAgICAgICAgIHBvcyA9IHRoaXMubGlzdEJsYW5rZXQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICAgICAgbGV0IHdvb2QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVdvb2QpO1xuICAgICAgICAgICAgd29vZC5wYXJlbnQgPSB0aGlzLmJlcDtcbiAgICAgICAgICAgIHdvb2QucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICBjYy50d2Vlbih3b29kKS5kZWxheSgwLjA4ICogaSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MygwLCAwKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB3b29kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3b29kLmRlc3Ryb3koKVxuXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBzdGVwMyh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBjaGFyIG9mIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAvLyAgICAgY2hhci5nZXRDb21wb25lbnQoQykuaHVuZ3J5KClcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEMpLmh1bmdyeSgpXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KEMpLmh1bmdyeSgpXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KEMpLmh1bmdyeSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENoYXIyLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoQykuaHVuZ3J5KClcblxuICAgICAgICAgICAgICAgICAgICB9LCAwLjA0ICogaSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZm9yKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlbil7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5odW5ncnkoKVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5maXJlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmJlcC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcblxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdENhcmROb2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FyZE5vZGUuY2hpbGRyZW5bNV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH0sIDAuOClcbiAgICAgICAgfSwgMC4zKVxuXG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5maXRDYW1lcmEuem9vbVJhdGlvID0gMC44XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDAuN1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uID0gdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24uYWRkKCBjYy52MygtMTAwLCAwKSlcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLnVpRml0LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkLnNjYWxlID0gY2hpbGQuc2NhbGUgKiAwLjU7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuc2NhbGVYID0gMC44XG4gICAgICAgICAgICAgICAgLy8gdGhpcy51aUZpdC5zY2FsZVkgPSAwLjhcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIxXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMlwiKS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuY2hpbGRyZW5bMF0uc2NhbGUgPSAwLjRcbiAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuY2hpbGRyZW5bMV0uc2NhbGUgPSAxXG5cbiAgICAgICAgICAgIC8vIHRoaXMuZml0Q2FtZXJhLnpvb21SYXRpbyA9IDFcbiAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAxLjNcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVuZGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIxXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMlwiKS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5pc0ZvbGxvdykge1xuICAgICAgICAvLyAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUuc2V0UG9zaXRpb24odGhpcy5pc1RhcmdldC5wb3NpdGlvbi5hZGQoY2MudjMoNTAsIDApKS5jbGFtcGYoY2MudjMoLTUyMCwgLTM0MCksIGNjLnYzKDkwMCwgMzQwKSkpO1xuXG4gICAgICAgIC8vIH1cblxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19