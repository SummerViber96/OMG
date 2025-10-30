
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWUNfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlXQztRQXZXRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUM3QixxQkFBcUI7UUFDckIsd0JBQXdCO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0Isa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFHLEtBQUssQ0FBQTs7UUE4VGxCLGlCQUFpQjtJQUNyQixDQUFDO0lBOVRHLHdCQUFLLEdBQUw7UUFBQSxpQkFjQztRQWJHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEdBQUcsQ0FB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QyxTQUFTLEdBeVdqRDtrQkF6V29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gc25vdzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGFyMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGFyMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcFN0b3A6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2FyZE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjZW5lMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjZW5lMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZpcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZXA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRjYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0QmxhbmtldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlV29vZDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kR2lvVGhvaTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFVwZ3JhZGU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRSYW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kWmVlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIGlzdmVydGljYWwgPSBmYWxzZVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kR2lvVGhvaSx0cnVlLDAuOClcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZyx0cnVlLDAuOClcclxuICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVDYW1lcmEoKVxyXG5cclxuICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBjaGFyIG9mIHRoaXMubGlzdENoYXIxLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjaGFyLmdldENvbXBvbmVudChDKS5zbG93KClcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sIDAuNilcclxuICAgIH1cclxuICAgIG1vdmVDYW1lcmEoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLmJ5KDIuNiwgeyBwb3NpdGlvbjogY2MudjMoODAwLCAxMDApIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDIuNiwgeyB6b29tUmF0aW86IDAuNyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgY2hhciBvZiB0aGlzLmxpc3RDaGFyMS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNoYXIuZ2V0Q29tcG9uZW50KEMpLmdldENvbGQoKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJzdGF0dXNcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhbWVyYTIoKVxyXG5cclxuICAgICAgICAgICAgfSwgMC40KVxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5nZXRBbmltYXRpb25TdGF0ZShcInNjZW5lMV9tb3ZlXCIpLnNwZWVkID0gMC4zXHJcbiAgICAgICAgfSwgMilcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIG1vdmVDYW1lcmEyKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS5ieSgwLjQ1LCB7IHBvc2l0aW9uOiBjYy52MygxMDAsIC0xMDApIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuNDUsIHsgem9vbVJhdGlvOiAxLjIgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHVyblBvcDEoKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucG9wU3RvcC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyB9LCAwLjI1KVxyXG4gICAgfVxyXG4gICAgdHVyblBvcDEoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Q2FyZE5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpc3RDYXJkTm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBidG4xKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZ3JhZGUsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmxpc3RDYXJkTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XHJcbiAgICAgICAgdGhpcy5saXN0Q2FyZE5vZGUuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wb3BTdG9wLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGFyIG9mIHRoaXMubGlzdENoYXIxLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChDKS5nZXRDb2xkKClcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJzdGF0dXNcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoXCJzY2VuZTFfbW92ZVwiKVxyXG4gICAgICAgIH0sIDEuMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoYXIgb2YgdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KEMpLmRpZSgpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9LCAxLjcpXHJcbiAgICAgICAgdGhpcy5zY2VuZTIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInNjZW5lMl9zdG9wXCIpXHJcbiAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bM10uZ2V0Q29tcG9uZW50KEMpLmF0a0lkbGUoKVxyXG4gICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChDKS5hdGtJZGxlKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChDKS5hdGtJZGxlMigpXHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChDKS5hdGtJZGxlMigpXHJcbiAgICAgICAgfSwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkuYnkoMC40NSwgeyBwb3NpdGlvbjogY2MudjMoNTAwLCAxMDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjQ1LCB7IHpvb21SYXRpbzogMSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHVyblBvcDIoKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMucG9wU3RvcC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGJ0bjIoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBncmFkZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdENhcmROb2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcclxuICAgICAgICB0aGlzLmxpc3RDYXJkTm9kZS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XHJcbiAgICAgICAgLy8gdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEMpLndhbGsoKVxyXG4gICAgICAgIC8vIHRoaXMubGlzdENoYXIxLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChDKS53YWxrKClcclxuICAgICAgICB0aGlzLnNjZW5lMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5nZXRBbmltYXRpb25TdGF0ZShcInNjZW5lMV9tb3ZlXCIpLnN0b3AoKVxyXG4gICAgICAgIHRoaXMubGlzdENoYXIxLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChDKS5zZXREZigpXHJcbiAgICAgICAgdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KEMpLnNldERmKClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RDaGFyMS5jaGlsZHJlblswXSkudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygtMjUzLCAtMTEwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEMpLmdldEhhcHB5KClcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KEMpLmdldEhhcHB5KClcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW5bMl0ucGFyZW50ID0gdGhpcy5saXN0Q2hhcjJcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW5bMF0ucGFyZW50ID0gdGhpcy5saXN0Q2hhcjJcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kWmVlLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIC8vICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoYXIgb2YgdGhpcy5saXN0Q2hhcjEuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KEMpLmRpZSgpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgIH0sMC41KVxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5saXN0Q2hhcjEuY2hpbGRyZW5bMl0pLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoLTEyNiwgLTEyMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLmJ5KDAuNDUsIHsgcG9zaXRpb246IGNjLnYzKDUwMCwgMTAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC40NSwgeyB6b29tUmF0aW86IDEgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5Qb3AyKClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnBvcFN0b3AuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgdHVyblBvcDIoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBjaGFyIG9mIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjaGFyLmdldENvbXBvbmVudChDKS5nZXRDb2xkKClcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRSYW5nLGZhbHNlLDAuOClcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEMpLmdldENvbGQoKVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDAuMDQgKiBpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZS5zY2FsZSA9IDEuNVxyXG4gICAgICAgIH0sIDAuMylcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkTm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkTm9kZS5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9LCAxKVxyXG5cclxuICAgIH1cclxuICAgIGJ0bjMoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBncmFkZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdENhcmROb2RlLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcclxuICAgICAgICB0aGlzLmxpc3RDYXJkTm9kZS5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XHJcbiAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bNV0uZ2V0Q29tcG9uZW50KEMpLndhbGtTYWQoKVxyXG4gICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzZdLmdldENvbXBvbmVudChDKS53YWxrU2FkKClcclxuICAgICAgICB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoQykud2Fsa1NhZCgpXHJcbiAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bNF0uZ2V0Q29tcG9uZW50KEMpLndhbGtTYWQoKVxyXG4gICAgICAgIGlmICh0aGlzLmxpc3RDaGFyMi5jaGlsZHJlbkNvdW50ID49IDgpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bN10uZ2V0Q29tcG9uZW50KEMpLndhbGtTYWQoKVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlbls4XS5nZXRDb21wb25lbnQoQykud2Fsa1NhZCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzddKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKC03MDAsIC0zOTQpIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bOF0pLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoLTcwMCwgLTM5NCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlbls3XS5nZXRDb21wb25lbnQoQykuZGllKClcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzhdLmdldENvbXBvbmVudChDKS5kaWUoKVxyXG5cclxuICAgICAgICAgICAgfSwgMi44KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bM10pLnRvKDIsIHsgcG9zaXRpb246IGNjLnYzKC01MDAsIC0zOTQpIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RDaGFyMi5jaGlsZHJlbls0XSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoLTUwMCwgLTM5NCkgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChDKS5kaWUoKVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlbls2XS5nZXRDb21wb25lbnQoQykuZGllKClcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bM10uZ2V0Q29tcG9uZW50KEMpLmRpZSgpXHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChDKS5kaWUoKVxyXG4gICAgICAgICAgICB0aGlzLnN0ZXAzKDApXHJcbiAgICAgICAgfSwgMi44KVxyXG4gICAgICAgIHRoaXMuc2NlbmUyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzY2VuZTJfbW92ZVwiKVxyXG5cclxuICAgIH1cclxuICAgIGJ0bjQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBncmFkZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdENhcmROb2RlLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcclxuICAgICAgICB0aGlzLmxpc3RDYXJkTm9kZS5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XHJcbiAgICAgICAgdGhpcy5saXN0QmxhbmtldC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlzdEJsYW5rZXQuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInN0YXR1c1wiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEJsYW5rZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEJsYW5rZXQuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlV29vZCh0aGlzLmxpc3RCbGFua2V0LmNoaWxkcmVuWzBdLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVdvb2QodGhpcy5saXN0QmxhbmtldC5jaGlsZHJlblsxXS5wb3NpdGlvbilcclxuXHJcbiAgICAgICAgfSwgMC4yKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maXJlLnNjYWxlID0gMi40XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZ3JhZGUsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB9LCAwLjcpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGVwMygxKVxyXG4gICAgICAgIH0sIDEuNilcclxuICAgIH1cclxuICAgIGNyZWF0ZVdvb2QocG9zKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5saXN0QmxhbmtldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5saXN0QmxhbmtldC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIGxldCB3b29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXb29kKTtcclxuICAgICAgICAgICAgd29vZC5wYXJlbnQgPSB0aGlzLmJlcDtcclxuICAgICAgICAgICAgd29vZC5wb3NpdGlvbiA9IHBvcztcclxuICAgICAgICAgICAgY2MudHdlZW4od29vZCkuZGVsYXkoMC4wOCAqIGkpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3b29kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd29vZC5kZXN0cm95KClcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIHN0ZXAzKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBjaGFyIG9mIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjaGFyLmdldENvbXBvbmVudChDKS5odW5ncnkoKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoQykuaHVuZ3J5KClcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIyLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChDKS5odW5ncnkoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KEMpLmh1bmdyeSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENoYXIyLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhcjIuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEMpLmh1bmdyeSgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMDQgKiBpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZm9yKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDaGFyMi5jaGlsZHJlbil7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmh1bmdyeSgpXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmlyZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmJlcC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENhcmROb2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDYXJkTm9kZS5jaGlsZHJlbls1XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDAuOClcclxuICAgICAgICB9LCAwLjMpXHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcblxyXG4gICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIDwgY2Mud2luU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzdmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZpdENhbWVyYS56b29tUmF0aW8gPSAwLjhcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAwLjdcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uID0gdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24uYWRkKCBjYy52MygtMTAwLCAwKSlcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLnVpRml0LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGQuc2NhbGUgPSBjaGlsZC5zY2FsZSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuc2NhbGVYID0gMC44XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVpRml0LnNjYWxlWSA9IDAuOFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy51aUZpdC5jaGlsZHJlblswXS5zY2FsZSA9IDAuNFxyXG4gICAgICAgICAgICAvLyB0aGlzLnVpRml0LmNoaWxkcmVuWzFdLnNjYWxlID0gMVxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5maXRDYW1lcmEuem9vbVJhdGlvID0gMVxyXG4gICAgICAgICAgICAvLyB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMS4zXHJcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzRm9sbG93KSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuaXNUYXJnZXQucG9zaXRpb24uYWRkKGNjLnYzKDUwLCAwKSkuY2xhbXBmKGNjLnYzKC01MjAsIC0zNDApLCBjYy52Myg5MDAsIDM0MCkpKTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19