
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/YC_5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06982KoOlxMqadPNMr6VHII', 'YC_5');
// scripts/YC_5.ts

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
        _this.bep = null;
        _this.char = null;
        _this.mainCamera = null;
        _this.listTree = null;
        _this.land = null;
        _this.hand1 = null;
        _this.hand2 = null;
        _this.hand3 = null;
        _this.hand4 = null;
        _this.hand5 = null;
        _this.luoi = null;
        _this.river = null;
        _this.river2 = null;
        _this.uiNode = null;
        _this.listCard = null;
        _this.woodFarm = null;
        _this.bomb = null;
        _this.pop = null;
        _this.house = null;
        _this.fxShow = null;
        _this.listChar = null;
        _this.pop2 = null;
        _this.linkToSotre = null;
        _this.charComp = null;
        _this.isvertical = false;
        _this.isHand2 = false;
        _this.soundBg = null;
        _this.soundud = null;
        _this.soundClick = null;
        _this.soundbomb = null;
        _this.soundZee = null;
        _this.soundPut = null;
        _this.isPut = false;
        _this.isWater = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        var _this = this;
        window.gameReady && window.gameReady();
        this.charComp = this.char.getComponent("character");
        this.scheduleOnce(function () {
            _this.bep.getComponent(cc.Animation).play("bep_tat");
            _this.charComp.getCold();
        }, 1);
        this.scheduleOnce(function () {
            cc.tween(_this.mainCamera.node).to(0.5, { position: cc.v3(2500, -80) }).start();
        }, 1.5);
        cc.audioEngine.play(this.soundBg, true, 0.8);
    };
    NewClass.prototype.btn1 = function (event) {
        var _this = this;
        cc.audioEngine.play(this.soundClick, false, 0.8);
        this.hand1.active = false;
        var btn = event.currentTarget;
        btn.getComponent(cc.Button).enabled = false;
        var pos = btn.parent.convertToWorldSpaceAR(btn.position);
        pos = this.listTree.convertToNodeSpaceAR(pos);
        for (var _i = 0, _a = this.listTree.children; _i < _a.length; _i++) {
            var childs = _a[_i];
            for (var _b = 0, _c = childs.children; _b < _c.length; _b++) {
                var child = _c[_b];
                var rd = Math.floor(Math.random() * 3);
                if (child.x < pos.x) {
                    cc.tween(child).delay(rd * 0.1).to(0.2, { angle: -90 }).start();
                }
                else {
                    cc.tween(child).delay(rd * 0.1).to(0.2, { angle: 90 }).start();
                }
            }
        }
        this.land.getChildByName("River").active = true;
        this.scheduleOnce(function () {
            cc.tween(_this.mainCamera.node).to(0.3, { position: cc.v3(1900, -400) }).call(function () {
                _this.luoi.active = true;
                _this.scheduleOnce(function () {
                    _this.hand2.active = true;
                    _this.addEventListener();
                }, 0.3);
            }).start();
        }, 0.6);
    };
    NewClass.prototype.addEventListener = function () {
        this.uiNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.uiNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.uiNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    };
    NewClass.prototype.touchStartEvent = function () {
        // console.log("okei")
        cc.audioEngine.play(this.soundClick, false, 0.8);
    };
    NewClass.prototype.touchMoveEvent = function () {
    };
    NewClass.prototype.touchEndEvent = function () {
        console.log("okei");
        if (!this.isWater) {
            this.offEventListener();
            this.isWater = true;
        }
    };
    NewClass.prototype.offEventListener = function () {
        var _this = this;
        this.uiNode.off(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.uiNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.uiNode.off(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.luoi.active = false;
        this.river.active = true;
        this.hand2.active = false;
        this.land.getComponent(cc.Animation).play("mo_song");
        this.scheduleOnce(function () {
            _this.river2.active = true;
            _this.moveTree();
        }, 0.3);
    };
    NewClass.prototype.moveTree = function () {
        var _this = this;
        // let pos = cc.v3(-198.253, -268.241)
        // for (let child of this.listTree.children) {
        //     cc.tween(child).to(0.5, { position: pos }).start()
        // }
        this.listTree.getComponent(cc.Animation).play("tree");
        this.scheduleOnce(function () {
            _this.showCard1();
        }, 1);
    };
    NewClass.prototype.showCard1 = function () {
        var _this = this;
        this.listCard.children[0].active = true;
        this.listCard.children[1].active = true;
        this.scheduleOnce(function () {
            _this.hand3.active = true;
        }, 0.4);
    };
    NewClass.prototype.transWood = function () {
        var _this = this;
        var count = 0;
        var pos = this.pop.parent.convertToWorldSpaceAR(this.pop.position);
        pos = this.charComp.bag.convertToNodeSpaceAR(pos).add(cc.v3(0, 80));
        var fill = this.pop.getChildByName("fill").getComponent(cc.Sprite);
        var _loop_1 = function (i) {
            count++;
            var wood = this_1.charComp.bag.children[i];
            var midPos = cc.v2((wood.x + pos.x) / 2, wood.y + 350);
            cc.tween(wood).delay(count * 0.08).parallel(cc.tween().bezierTo(0.4, cc.v2(wood.x, wood.y), midPos, cc.v2(pos.x, pos.y)), cc.tween().by(0.4, { angle: -360 }).call(function () {
                fill.fillRange += 1 / 8;
                wood.destroy();
                if (!_this.isPut) {
                    _this.isPut = true;
                    cc.audioEngine.play(_this.soundPut, false, 0.8);
                    _this.scheduleOnce(function () {
                        _this.isPut = false;
                    }, 0.12);
                }
                if (i == 0) {
                    console.log("full");
                    cc.tween(_this.pop).to(0.1, { scale: 1.5 }).start();
                    _this.hand4.active = true;
                    _this.pop.children[0].getComponent(cc.Button).enabled = true;
                }
                else {
                    _this.pop.getComponent(cc.Animation).play();
                }
            }))
                .start();
        };
        var this_1 = this;
        for (var i = this.charComp.bag.childrenCount - 1; i >= 0; i--) {
            _loop_1(i);
        }
    };
    NewClass.prototype.btn_2 = function () {
        var _this = this;
        // cc.audioEngine.play(this.soundClick, false, 0.8)
        cc.audioEngine.play(this.soundClick, false, 0.8);
        cc.audioEngine.play(this.soundud, false, 0.8);
        this.house.active = true;
        this.hand4.active = false;
        cc.tween(this.mainCamera).by(0.3, { zoomRatio: -0.2 }).start();
        this.bep.active = true;
        this.fxShow.active = true;
        this.scheduleOnce(function () {
            _this.phase3();
        }, 1);
    };
    NewClass.prototype.phase3 = function () {
        var _this = this;
        this.listChar.active = true;
        var listPos = [cc.v3(101, 73), cc.v3(180, -180), cc.v3(-275, -195), cc.v3(-41, -254)];
        cc.audioEngine.play(this.soundZee, false, 0.4);
        var _loop_2 = function (i) {
            this_2.listChar.children[i].getComponent("character").runPos(listPos[i], 0.7);
            this_2.scheduleOnce(function () {
                _this.listChar.children[i].getComponent("character").getHappy();
            }, 0.75);
        };
        var this_2 = this;
        for (var i = 0; i < this.listChar.childrenCount; i++) {
            _loop_2(i);
        }
        this.charComp.getHappy();
        this.scheduleOnce(function () {
            _this.phase4();
        }, 1.3);
    };
    NewClass.prototype.phase4 = function () {
        var _this = this;
        this.pop2.active = true;
        this.pop2.getComponent(cc.Animation).play();
        // let listPos = [cc.v3(101, 73), cc.v3(180, -180), cc.v3(-275, -195), cc.v3(-41, -254)]
        var listPos = [cc.v3(1245, -675), cc.v3(1271, -813), cc.v3(1369, -979), cc.v3(1281.075, -927.336)];
        cc.tween(this.mainCamera.node).to(2, { position: cc.v3(1700, -400) }).start();
        var _loop_3 = function (i) {
            this_3.listChar.children[i].getComponent("character").runPos(listPos[i], 2);
            this_3.scheduleOnce(function () {
                _this.listChar.children[i].getComponent("character").idle();
                if (i == _this.listChar.childrenCount - 1) {
                    _this.listChar.children[i].getComponent("character").addWood(null, true);
                }
                else {
                    _this.listChar.children[i].getComponent("character").addWood(null, false);
                }
            }, 2);
        };
        var this_3 = this;
        for (var i = 0; i < this.listChar.childrenCount; i++) {
            _loop_3(i);
        }
        this.charComp.runPos(cc.v3(1243, -589), 2);
        this.scheduleOnce(function () {
            _this.charComp.idle();
            _this.charComp.addWood(null);
        }, 2);
        this.scheduleOnce(function () {
            _this.phase5();
        }, 3);
    };
    NewClass.prototype.phase5 = function () {
        var _this = this;
        var listPos = [cc.v3(101, 73), cc.v3(180, -180), cc.v3(-275, -195), cc.v3(-41, -254)];
        // let listPos = [cc.v3(101, 235), cc.v3(615, -127), cc.v3(-430, -149), cc.v3(-75, -373)]
        cc.tween(this.mainCamera.node).to(2, { position: cc.v3(0, 0) }).start();
        this.charComp.runPos(cc.v3(244, -93), 2);
        this.scheduleOnce(function () {
            _this.charComp.idle();
        }, 2);
        this.scheduleOnce(function () {
            _this.transWood2(_this.char);
        }, 2.4);
        var _loop_4 = function (i) {
            this_4.listChar.children[i].getComponent("character").runPos(listPos[i], 2);
            this_4.scheduleOnce(function () {
                _this.listChar.children[i].getComponent("character").idle();
            }, 2.2);
            this_4.scheduleOnce(function () {
                // for (let child of this.listChar.children) {
                var _loop_5 = function (i_1) {
                    var child = _this.listChar.children[i_1];
                    _this.scheduleOnce(function () {
                        _this.transWood2(child);
                    }, 0.07 * i_1);
                };
                //     this.transWood2(child)
                // }
                for (var i_1 = 0; i_1 < _this.listChar.childrenCount; i_1++) {
                    _loop_5(i_1);
                }
            }, 2.4);
            this_4.scheduleOnce(function () {
                cc.tween(_this.pop2).to(0.2, { scale: 1.5 }).start();
                _this.hand5.active = true;
                _this.linkToSotre.active = true;
            }, 3.8);
        };
        var this_4 = this;
        for (var i = 0; i < this.listChar.childrenCount; i++) {
            _loop_4(i);
        }
    };
    NewClass.prototype.btn_chooseCard = function (event, customEventData) {
        var _this = this;
        this.hand3.active = false;
        if (customEventData == "1") {
            cc.audioEngine.play(this.soundbomb, false, 0.8);
            cc.audioEngine.play(this.soundClick, false, 0.8);
            this.listCard.children[0].getComponent(cc.Animation).play("card_off");
            this.listCard.children[1].getComponent(cc.Animation).play("card_off");
            this.scheduleOnce(function () {
                _this.bomb.active = true;
            }, 0.3);
            this.scheduleOnce(function () {
                _this.woodFarm.active = true;
                _this.listTree.destroy();
            }, 0.6);
            this.scheduleOnce(function () {
                // this.woodFarm.active = true;
                // this.listTree.destroy()
                cc.tween(_this.mainCamera.node).to(0.5, { position: cc.v3(0, 0) }).delay(0.5).call(function () {
                    _this.charComp.run(cc.v3(1184, -637));
                }).to(1, { position: cc.v3(1500, -400) }).start();
            }, 1.2);
        }
    };
    NewClass.prototype.phase2 = function () {
        cc.tween(this.mainCamera.node).to(2, { position: cc.v3(0, 0) }).start();
    };
    NewClass.prototype.transWood2 = function (char) {
        var _this = this;
        // console.log("transWood2")
        var count = 0;
        var bag = char.getComponent("character").bag;
        var pos = this.pop.parent.convertToWorldSpaceAR(this.pop.position);
        pos = bag.convertToNodeSpaceAR(pos).add(cc.v3(0, 80));
        var fill = this.pop2.getChildByName("fill").getComponent(cc.Sprite);
        var _loop_6 = function (i) {
            console.log("transWood2sss");
            count++;
            var wood = bag.children[i];
            var midPos = cc.v2((wood.x + pos.x) / 2, wood.y + 350);
            cc.tween(wood).delay(count * 0.08).parallel(cc.tween().bezierTo(0.4, cc.v2(wood.x, wood.y), midPos, cc.v2(pos.x, pos.y)), cc.tween().by(0.4, { angle: -360 }).call(function () {
                fill.fillRange += 0.05;
                wood.destroy();
                if (!_this.isPut) {
                    _this.isPut = true;
                    cc.audioEngine.play(_this.soundPut, false, 0.8);
                    _this.scheduleOnce(function () {
                        _this.isPut = false;
                    }, 0.12);
                }
                // if (i == 0) {
                //     console.log("full")
                //     cc.tween(this.pop).to(0.1, { scale: 1.5 }).start()
                // }
                // else {
                _this.pop2.getComponent(cc.Animation).play();
                // }
            }))
                .start();
        };
        for (var i = bag.childrenCount - 1; i >= 0; i--) {
            _loop_6(i);
        }
    };
    NewClass.prototype.update = function () {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.mainCamera.zoomRatio = 0.9;
            }
        }
        else {
            this.mainCamera.zoomRatio = 1.5;
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bep", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listTree", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "land", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand5", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "luoi", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "river", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "river2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "woodFarm", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bomb", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "fxShow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToSotre", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundud", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundbomb", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundZee", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPut", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1lDXzUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErWkM7UUE1WkcsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFDM0IsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBSWhCLGFB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LENBQUMsU0FBUyxDQUFDO2dEQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBaEViLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErWjVCO0lBQUQsZUFBQztDQS9aRCxBQStaQyxDQS9acUMsRUFBRSxDQUFDLFNBQVMsR0ErWmpEO2tCQS9ab0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZXA6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoYXI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RUcmVlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYW5kOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmQxOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmQyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kMzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmQ1OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsdW9pOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByaXZlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcml2ZXIyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RDYXJkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB3b29kRmFybTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm9tYjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob3VzZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZnhTaG93OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q2hhcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wMjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5rVG9Tb3RyZTogY2MuTm9kZSA9IG51bGxcbiAgICBjaGFyQ29tcCA9IG51bGw7XG4gICAgaXN2ZXJ0aWNhbCA9IGZhbHNlO1xuICAgIGlzSGFuZDIgPSBmYWxzZTtcblxuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmR1ZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZGJvbWI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFplZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kUHV0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIGlzUHV0ID0gZmFsc2U7XG4gICAgaXNXYXRlciA9IGZhbHNlO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcbiAgICAgICAgdGhpcy5jaGFyQ29tcCA9IHRoaXMuY2hhci5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5iZXAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImJlcF90YXRcIilcbiAgICAgICAgICAgIHRoaXMuY2hhckNvbXAuZ2V0Q29sZCgpXG4gICAgICAgIH0sIDEpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDI1MDAsIC04MCkgfSkuc3RhcnQoKVxuICAgICAgICB9LCAxLjUpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjgpXG5cblxuXG4gICAgfVxuICAgIGJ0bjEoZXZlbnQpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAwLjgpXG5cbiAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQ9ZmFsc2VcbiAgICAgICAgbGV0IHBvcyA9IGJ0bi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGJ0bi5wb3NpdGlvbik7XG4gICAgICAgIHBvcyA9IHRoaXMubGlzdFRyZWUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcbiAgICAgICAgZm9yIChsZXQgY2hpbGRzIG9mIHRoaXMubGlzdFRyZWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC54IDwgcG9zLngpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpLmRlbGF5KHJkICogMC4xKS50bygwLjIsIHsgYW5nbGU6IC05MCB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpLmRlbGF5KHJkICogMC4xKS50bygwLjIsIHsgYW5nbGU6IDkwIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYW5kLmdldENoaWxkQnlOYW1lKFwiUml2ZXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoMTkwMCwgLTQwMCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sdW9pLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuXG4gICAgICAgIH0sIDAuNilcbiAgICB9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy51aU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydEV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy51aU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMudWlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICB9XG4gICAgdG91Y2hTdGFydEV2ZW50KCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9rZWlcIilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAwLjgpXG5cbiAgICB9XG4gICAgdG91Y2hNb3ZlRXZlbnQoKSB7XG5cbiAgICB9XG4gICAgdG91Y2hFbmRFdmVudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJva2VpXCIpXG4gICAgICAgIGlmICghdGhpcy5pc1dhdGVyKSB7XG4gICAgICAgICAgICB0aGlzLm9mZkV2ZW50TGlzdGVuZXIoKVxuICAgICAgICAgICAgdGhpcy5pc1dhdGVyID0gdHJ1ZVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBvZmZFdmVudExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVpTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydEV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy51aU5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLnVpTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLmx1b2kuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucml2ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYW5kMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtb19zb25nXCIpXG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yaXZlcjIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubW92ZVRyZWUoKVxuICAgICAgICB9LCAwLjMpXG5cbiAgICB9XG4gICAgbW92ZVRyZWUoKSB7XG4gICAgICAgIC8vIGxldCBwb3MgPSBjYy52MygtMTk4LjI1MywgLTI2OC4yNDEpXG4gICAgICAgIC8vIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdFRyZWUuY2hpbGRyZW4pIHtcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjUsIHsgcG9zaXRpb246IHBvcyB9KS5zdGFydCgpXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5saXN0VHJlZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwidHJlZVwiKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dDYXJkMSgpXG4gICAgICAgIH0sIDEpXG4gICAgfVxuICAgIHNob3dDYXJkMSgpIHtcbiAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZDMuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB9LCAwLjQpXG5cbiAgICB9XG4gICAgdHJhbnNXb29kKCkge1xuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnBvcC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucG9wLnBvc2l0aW9uKTtcbiAgICAgICAgcG9zID0gdGhpcy5jaGFyQ29tcC5iYWcuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKS5hZGQoY2MudjMoMCwgODApKTtcbiAgICAgICAgbGV0IGZpbGwgPSB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmNoYXJDb21wLmJhZy5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIGxldCB3b29kID0gdGhpcy5jaGFyQ29tcC5iYWcuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHdvb2QueCArIHBvcy54KSAvIDIsIHdvb2QueSArIDM1MClcbiAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLmRlbGF5KGNvdW50ICogMC4wOCkucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5iZXppZXJUbygwLjQsIGNjLnYyKHdvb2QueCwgd29vZC55KSwgbWlkUG9zLCBjYy52Mihwb3MueCwgcG9zLnkpKSxcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuNCwgeyBhbmdsZTogLTM2MCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbC5maWxsUmFuZ2UgKz0gMSAvIDhcbiAgICAgICAgICAgICAgICAgICAgd29vZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUHV0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUHV0LCBmYWxzZSwgMC44KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQdXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4xMilcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnVsbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5wb3ApLnRvKDAuMSwgeyBzY2FsZTogMS41IH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZDQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgYnRuXzIoKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMC44KVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDAuOClcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kdWQsIGZhbHNlLCAwLjgpXG5cbiAgICAgICAgdGhpcy5ob3VzZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhbmQ0LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkuYnkoMC4zLCB7IHpvb21SYXRpbzogLTAuMiB9KS5zdGFydCgpXG4gICAgICAgIHRoaXMuYmVwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZnhTaG93LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGhhc2UzKCk7XG4gICAgICAgIH0sIDEpXG4gICAgfVxuICAgIHBoYXNlMygpIHtcbiAgICAgICAgdGhpcy5saXN0Q2hhci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgbGlzdFBvcyA9IFtjYy52MygxMDEsIDczKSwgY2MudjMoMTgwLCAtMTgwKSwgY2MudjMoLTI3NSwgLTE5NSksIGNjLnYzKC00MSwgLTI1NCldXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFplZSwgZmFsc2UsIDAuNClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENoYXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5ydW5Qb3MobGlzdFBvc1tpXSwgMC43KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmdldEhhcHB5KClcblxuICAgICAgICAgICAgfSwgMC43NSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYXJDb21wLmdldEhhcHB5KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5waGFzZTQoKVxuICAgICAgICB9LCAxLjMpXG4gICAgfVxuICAgIHBoYXNlNCgpIHtcbiAgICAgICAgdGhpcy5wb3AyLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5wb3AyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAvLyBsZXQgbGlzdFBvcyA9IFtjYy52MygxMDEsIDczKSwgY2MudjMoMTgwLCAtMTgwKSwgY2MudjMoLTI3NSwgLTE5NSksIGNjLnYzKC00MSwgLTI1NCldXG4gICAgICAgIGxldCBsaXN0UG9zID0gW2NjLnYzKDEyNDUsIC02NzUpLCBjYy52MygxMjcxLCAtODEzKSwgY2MudjMoMTM2OSwgLTk3OSksIGNjLnYzKDEyODEuMDc1LCAtOTI3LjMzNildXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygyLCB7IHBvc2l0aW9uOiBjYy52MygxNzAwLCAtNDAwKSB9KS5zdGFydCgpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q2hhci5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLnJ1blBvcyhsaXN0UG9zW2ldLCAyKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlkbGUoKVxuICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMubGlzdENoYXIuY2hpbGRyZW5Db3VudCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuYWRkV29vZChudWxsLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5hZGRXb29kKG51bGwsIGZhbHNlKVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAyKVxuXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYXJDb21wLnJ1blBvcyhjYy52MygxMjQzLCAtNTg5KSwgMilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFyQ29tcC5pZGxlKClcbiAgICAgICAgICAgIHRoaXMuY2hhckNvbXAuYWRkV29vZChudWxsKVxuICAgICAgICB9LCAyKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMucGhhc2U1KClcbiAgICAgICAgfSwgMylcblxuICAgIH1cbiAgICBwaGFzZTUoKSB7XG4gICAgICAgIGxldCBsaXN0UG9zID0gW2NjLnYzKDEwMSwgNzMpLCBjYy52MygxODAsIC0xODApLCBjYy52MygtMjc1LCAtMTk1KSwgY2MudjMoLTQxLCAtMjU0KV1cblxuICAgICAgICAvLyBsZXQgbGlzdFBvcyA9IFtjYy52MygxMDEsIDIzNSksIGNjLnYzKDYxNSwgLTEyNyksIGNjLnYzKC00MzAsIC0xNDkpLCBjYy52MygtNzUsIC0zNzMpXVxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKVxuICAgICAgICB0aGlzLmNoYXJDb21wLnJ1blBvcyhjYy52MygyNDQsIC05MyksIDIpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhckNvbXAuaWRsZSgpXG5cbiAgICAgICAgfSwgMilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmFuc1dvb2QyKHRoaXMuY2hhcilcblxuICAgICAgICB9LCAyLjQpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q2hhci5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLnJ1blBvcyhsaXN0UG9zW2ldLCAyKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlkbGUoKVxuXG4gICAgICAgICAgICB9LCAyLjIpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0Q2hhci5jaGlsZHJlbikge1xuXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudHJhbnNXb29kMihjaGlsZClcblxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENoYXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdENoYXIuY2hpbGRyZW5baV1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc1dvb2QyKGNoaWxkKVxuXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMDcgKiBpKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMi40KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wMikudG8oMC4yLCB7IHNjYWxlOiAxLjUgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZDUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtUb1NvdHJlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH0sIDMuOClcbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgYnRuX2Nob29zZUNhcmQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLmhhbmQzLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGlmIChjdXN0b21FdmVudERhdGEgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZGJvbWIsIGZhbHNlLCAwLjgpXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDAuOClcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xuICAgICAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib21iLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIH0sIDAuMylcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLndvb2RGYXJtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VHJlZS5kZXN0cm95KClcblxuICAgICAgICAgICAgfSwgMC42KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMud29vZEZhcm0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxpc3RUcmVlLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLmRlbGF5KDAuNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhckNvbXAucnVuKGNjLnYzKDExODQsIC02MzcpKVxuXG4gICAgICAgICAgICAgICAgfSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMTUwMCwgLTQwMCkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgfSwgMS4yKVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcGhhc2UyKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKVxuICAgIH1cblxuICAgIHRyYW5zV29vZDIoY2hhcikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRyYW5zV29vZDJcIilcbiAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICBsZXQgYmFnID0gY2hhci5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuYmFnXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnBvcC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucG9wLnBvc2l0aW9uKTtcbiAgICAgICAgcG9zID0gYmFnLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcykuYWRkKGNjLnYzKDAsIDgwKSk7XG4gICAgICAgIGxldCBmaWxsID0gdGhpcy5wb3AyLmdldENoaWxkQnlOYW1lKFwiZmlsbFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGJhZy5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNXb29kMnNzc1wiKVxuXG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICBsZXQgd29vZCA9IGJhZy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Migod29vZC54ICsgcG9zLngpIC8gMiwgd29vZC55ICsgMzUwKVxuICAgICAgICAgICAgY2MudHdlZW4od29vZCkuZGVsYXkoY291bnQgKiAwLjA4KS5wYXJhbGxlbChcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJlemllclRvKDAuNCwgY2MudjIod29vZC54LCB3b29kLnkpLCBtaWRQb3MsIGNjLnYyKHBvcy54LCBwb3MueSkpLFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC40LCB7IGFuZ2xlOiAtMzYwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaWxsLmZpbGxSYW5nZSArPSAwLjA1XG4gICAgICAgICAgICAgICAgICAgIHdvb2QuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1B1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1B1dCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFB1dCwgZmFsc2UsIDAuOClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUHV0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuMTIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJmdWxsXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLnBvcCkudG8oMC4xLCB7IHNjYWxlOiAxLjUgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcDIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcblxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMC45XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuNVxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuXG5cbiAgICAgICAgfVxuXG5cblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=