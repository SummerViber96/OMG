"use strict";
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