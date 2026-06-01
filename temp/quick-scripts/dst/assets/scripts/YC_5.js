
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWUNfNS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQStaQztRQTVaRyxTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFJaEIs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QUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkUsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzFELENBQUM7WUFDTixLQUFLLEVBQUUsQ0FBQTtZQUNQLElBQUksSUFBSSxHQUFHLE9BQUssUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1lBQ3RELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQ3ZDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDNUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFH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QUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFoRWIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStaNUI7SUFBRCxlQUFDO0NBL1pELEFBK1pDLENBL1pxQyxFQUFFLENBQUMsU0FBUyxHQStaakQ7a0JBL1pvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZXA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIG1haW5DYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RUcmVlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kNDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ1OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbHVvaTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJpdmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcml2ZXIyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3b29kRmFybTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJvbWI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3A6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBob3VzZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZ4U2hvdzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGFyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9wMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU290cmU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBjaGFyQ29tcCA9IG51bGw7XHJcbiAgICBpc3ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICBpc0hhbmQyID0gZmFsc2U7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZGJvbWI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRaZWU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRQdXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBpc1B1dCA9IGZhbHNlO1xyXG4gICAgaXNXYXRlciA9IGZhbHNlO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgdGhpcy5jaGFyQ29tcCA9IHRoaXMuY2hhci5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYmVwLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJiZXBfdGF0XCIpXHJcbiAgICAgICAgICAgIHRoaXMuY2hhckNvbXAuZ2V0Q29sZCgpXHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDI1MDAsIC04MCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDEuNSlcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC44KVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgYnRuMShldmVudCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMC44KVxyXG5cclxuICAgICAgICB0aGlzLmhhbmQxLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQ9ZmFsc2VcclxuICAgICAgICBsZXQgcG9zID0gYnRuLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoYnRuLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3MgPSB0aGlzLmxpc3RUcmVlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGRzIG9mIHRoaXMubGlzdFRyZWUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC54IDwgcG9zLngpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZCkuZGVsYXkocmQgKiAwLjEpLnRvKDAuMiwgeyBhbmdsZTogLTkwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZCkuZGVsYXkocmQgKiAwLjEpLnRvKDAuMiwgeyBhbmdsZTogOTAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYW5kLmdldENoaWxkQnlOYW1lKFwiUml2ZXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDE5MDAsIC00MDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sdW9pLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXHJcbiAgICAgICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgfSwgMC42KVxyXG4gICAgfVxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLnVpTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICAgIH1cclxuICAgIHRvdWNoU3RhcnRFdmVudCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9rZWlcIilcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDAuOClcclxuXHJcbiAgICB9XHJcbiAgICB0b3VjaE1vdmVFdmVudCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICB0b3VjaEVuZEV2ZW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib2tlaVwiKVxyXG4gICAgICAgIGlmICghdGhpcy5pc1dhdGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmRXZlbnRMaXN0ZW5lcigpXHJcbiAgICAgICAgICAgIHRoaXMuaXNXYXRlciA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9mZkV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy51aU5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aU5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5sdW9pLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucml2ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibW9fc29uZ1wiKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucml2ZXIyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRyZWUoKVxyXG4gICAgICAgIH0sIDAuMylcclxuXHJcbiAgICB9XHJcbiAgICBtb3ZlVHJlZSgpIHtcclxuICAgICAgICAvLyBsZXQgcG9zID0gY2MudjMoLTE5OC4yNTMsIC0yNjguMjQxKVxyXG4gICAgICAgIC8vIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdFRyZWUuY2hpbGRyZW4pIHtcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuNSwgeyBwb3NpdGlvbjogcG9zIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5saXN0VHJlZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwidHJlZVwiKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q2FyZDEoKVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcbiAgICBzaG93Q2FyZDEoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kMy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfSwgMC40KVxyXG5cclxuICAgIH1cclxuICAgIHRyYW5zV29vZCgpIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucG9wLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wb3AucG9zaXRpb24pO1xyXG4gICAgICAgIHBvcyA9IHRoaXMuY2hhckNvbXAuYmFnLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcykuYWRkKGNjLnYzKDAsIDgwKSk7XHJcbiAgICAgICAgbGV0IGZpbGwgPSB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuY2hhckNvbXAuYmFnLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgIGxldCB3b29kID0gdGhpcy5jaGFyQ29tcC5iYWcuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Migod29vZC54ICsgcG9zLngpIC8gMiwgd29vZC55ICsgMzUwKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih3b29kKS5kZWxheShjb3VudCAqIDAuMDgpLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5iZXppZXJUbygwLjQsIGNjLnYyKHdvb2QueCwgd29vZC55KSwgbWlkUG9zLCBjYy52Mihwb3MueCwgcG9zLnkpKSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC40LCB7IGFuZ2xlOiAtMzYwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGwuZmlsbFJhbmdlICs9IDEgLyA4XHJcbiAgICAgICAgICAgICAgICAgICAgd29vZC5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNQdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1B1dCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUHV0LCBmYWxzZSwgMC44KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUHV0ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4xMilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmdWxsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wKS50bygwLjEsIHsgc2NhbGU6IDEuNSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZDQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidG5fMigpIHtcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDAuOClcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDAuOClcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmR1ZCwgZmFsc2UsIDAuOClcclxuXHJcbiAgICAgICAgdGhpcy5ob3VzZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGFuZDQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLmJ5KDAuMywgeyB6b29tUmF0aW86IC0wLjIgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuYmVwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5meFNob3cuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGhhc2UzKCk7XHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxuICAgIHBoYXNlMygpIHtcclxuICAgICAgICB0aGlzLmxpc3RDaGFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGxpc3RQb3MgPSBbY2MudjMoMTAxLCA3MyksIGNjLnYzKDE4MCwgLTE4MCksIGNjLnYzKC0yNzUsIC0xOTUpLCBjYy52MygtNDEsIC0yNTQpXVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFplZSwgZmFsc2UsIDAuNClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5ydW5Qb3MobGlzdFBvc1tpXSwgMC43KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5nZXRIYXBweSgpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjc1KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJDb21wLmdldEhhcHB5KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGhhc2U0KClcclxuICAgICAgICB9LCAxLjMpXHJcbiAgICB9XHJcbiAgICBwaGFzZTQoKSB7XHJcbiAgICAgICAgdGhpcy5wb3AyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnBvcDIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgLy8gbGV0IGxpc3RQb3MgPSBbY2MudjMoMTAxLCA3MyksIGNjLnYzKDE4MCwgLTE4MCksIGNjLnYzKC0yNzUsIC0xOTUpLCBjYy52MygtNDEsIC0yNTQpXVxyXG4gICAgICAgIGxldCBsaXN0UG9zID0gW2NjLnYzKDEyNDUsIC02NzUpLCBjYy52MygxMjcxLCAtODEzKSwgY2MudjMoMTM2OSwgLTk3OSksIGNjLnYzKDEyODEuMDc1LCAtOTI3LjMzNildXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDIsIHsgcG9zaXRpb246IGNjLnYzKDE3MDAsIC00MDApIH0pLnN0YXJ0KClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENoYXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLnJ1blBvcyhsaXN0UG9zW2ldLCAyKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5pZGxlKClcclxuICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMubGlzdENoYXIuY2hpbGRyZW5Db3VudCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5hZGRXb29kKG51bGwsIHRydWUpXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuYWRkV29vZChudWxsLCBmYWxzZSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LCAyKVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhckNvbXAucnVuUG9zKGNjLnYzKDEyNDMsIC01ODkpLCAyKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyQ29tcC5pZGxlKClcclxuICAgICAgICAgICAgdGhpcy5jaGFyQ29tcC5hZGRXb29kKG51bGwpXHJcbiAgICAgICAgfSwgMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBoYXNlNSgpXHJcbiAgICAgICAgfSwgMylcclxuXHJcbiAgICB9XHJcbiAgICBwaGFzZTUoKSB7XHJcbiAgICAgICAgbGV0IGxpc3RQb3MgPSBbY2MudjMoMTAxLCA3MyksIGNjLnYzKDE4MCwgLTE4MCksIGNjLnYzKC0yNzUsIC0xOTUpLCBjYy52MygtNDEsIC0yNTQpXVxyXG5cclxuICAgICAgICAvLyBsZXQgbGlzdFBvcyA9IFtjYy52MygxMDEsIDIzNSksIGNjLnYzKDYxNSwgLTEyNyksIGNjLnYzKC00MzAsIC0xNDkpLCBjYy52MygtNzUsIC0zNzMpXVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygyLCB7IHBvc2l0aW9uOiBjYy52MygwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5jaGFyQ29tcC5ydW5Qb3MoY2MudjMoMjQ0LCAtOTMpLCAyKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyQ29tcC5pZGxlKClcclxuXHJcbiAgICAgICAgfSwgMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNXb29kMih0aGlzLmNoYXIpXHJcblxyXG4gICAgICAgIH0sIDIuNClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENoYXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLnJ1blBvcyhsaXN0UG9zW2ldLCAyKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5pZGxlKClcclxuXHJcbiAgICAgICAgICAgIH0sIDIuMilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0Q2hhci5jaGlsZHJlbikge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnRyYW5zV29vZDIoY2hpbGQpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdENoYXIuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNXb29kMihjaGlsZClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4wNyAqIGkpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LCAyLjQpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wMikudG8oMC4yLCB7IHNjYWxlOiAxLjUgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kNS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rVG9Tb3RyZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDMuOClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIGJ0bl9jaG9vc2VDYXJkKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB0aGlzLmhhbmQzLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKGN1c3RvbUV2ZW50RGF0YSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRib21iLCBmYWxzZSwgMC44KVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDAuOClcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvbWIuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b29kRmFybS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VHJlZS5kZXN0cm95KClcclxuXHJcbiAgICAgICAgICAgIH0sIDAuNilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy53b29kRmFybS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5saXN0VHJlZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLmRlbGF5KDAuNSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyQ29tcC5ydW4oY2MudjMoMTE4NCwgLTYzNykpXHJcblxyXG4gICAgICAgICAgICAgICAgfSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMTUwMCwgLTQwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAxLjIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHBoYXNlMigpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zV29vZDIoY2hhcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidHJhbnNXb29kMlwiKVxyXG4gICAgICAgIGxldCBjb3VudCA9IDBcclxuICAgICAgICBsZXQgYmFnID0gY2hhci5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuYmFnXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucG9wLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wb3AucG9zaXRpb24pO1xyXG4gICAgICAgIHBvcyA9IGJhZy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpLmFkZChjYy52MygwLCA4MCkpO1xyXG4gICAgICAgIGxldCBmaWxsID0gdGhpcy5wb3AyLmdldENoaWxkQnlOYW1lKFwiZmlsbFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gYmFnLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zV29vZDJzc3NcIilcclxuXHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICAgICAgbGV0IHdvb2QgPSBiYWcuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Migod29vZC54ICsgcG9zLngpIC8gMiwgd29vZC55ICsgMzUwKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih3b29kKS5kZWxheShjb3VudCAqIDAuMDgpLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5iZXppZXJUbygwLjQsIGNjLnYyKHdvb2QueCwgd29vZC55KSwgbWlkUG9zLCBjYy52Mihwb3MueCwgcG9zLnkpKSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC40LCB7IGFuZ2xlOiAtMzYwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGwuZmlsbFJhbmdlICs9IDAuMDVcclxuICAgICAgICAgICAgICAgICAgICB3b29kLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1B1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUHV0ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRQdXQsIGZhbHNlLCAwLjgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQdXQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjEyKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZnVsbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLnBvcCkudG8oMC4xLCB7IHNjYWxlOiAxLjUgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcDIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG5cclxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc3ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMC45XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19