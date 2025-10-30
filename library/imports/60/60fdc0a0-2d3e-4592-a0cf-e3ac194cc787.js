"use strict";
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