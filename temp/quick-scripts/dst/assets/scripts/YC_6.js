
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/YC_6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '296d2773VBGGb0b9n0oZgkE', 'YC_6');
// scripts/YC_6.ts

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
globalThis.step = 0;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listChar = null;
        _this.mainCamera = null;
        _this.fill = null;
        _this.isStep = 0;
        _this.house = null;
        _this.buildingHouse1 = null;
        _this.buildingHouse2 = null;
        _this.house2 = null;
        _this.uiNode = null;
        _this.hand1 = null;
        _this.hand2 = null;
        // LIFE-CYCLE CALLBACKS:
        _this.isvertical = false;
        _this.endcard = null;
        _this.listTree = [];
        _this.pop1 = null;
        _this.pop2 = null;
        _this.preWood = null;
        _this.listHouseNew = null;
        _this.winFx = null;
        _this.linkToStore = null;
        _this.soundBg = null;
        _this.soundUd = null;
        _this.soundPut = null;
        _this.circle = null;
        _this.Joystick = null;
        _this.test = null;
        _this.isScale = 1;
        _this.moveDir = null;
        _this.speed = 1000;
        _this.directionX = null;
        _this.isRun = true;
        _this.check2 = false;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        cc.audioEngine.play(this.soundBg, true, 0.5);
        // window.gameReady && window.gameReady();
        var arrPos = [cc.v3(1212, -249), cc.v3(552, -306)];
        this.listChar.children[1].getComponent(C).tree = this.listTree[1];
        this.listChar.children[2].getComponent(C).tree = this.listTree[0];
        this.listChar.children[0].getComponent(C).tree = this.listTree[2];
        this.fitImg();
        this.scheduleOnce(function () {
            cc.tween(_this.mainCamera.node).to(2, { position: cc.v3(400, 0) }).start();
            cc.tween(_this.circle).to(1.5, { scaleX: 3 * 0.85, scaleY: 2 * 0.85 }).start();
            cc.tween(_this.fill).to(1, { fillRange: 0.3 }).call(function () {
                _this.fill.node.parent.getChildByName("lb").getComponent(cc.Label).string = "-50°c";
            }).start();
            _this.listChar.children[1].getComponent(C).runPos(arrPos[0], 0.3);
            _this.scheduleOnce(function () {
                _this.listChar.children[1].getComponent(C).getIce();
                _this.listChar.children[1].getComponent(C).onPause();
            }, 0.3);
            _this.scheduleOnce(function () {
                _this.listChar.children[2].getComponent(C).getIce();
                _this.listChar.children[2].getComponent(C).onPause();
            }, 0.5);
            _this.scheduleOnce(function () {
                _this.listChar.children[0].getComponent(C).runPos(arrPos[1], 1);
                _this.scheduleOnce(function () {
                    _this.listChar.children[0].getComponent(C).angry();
                    cc.tween(_this.mainCamera).to(0.6, { zoomRatio: 0.5 }).start();
                    cc.tween(_this.mainCamera.node).to(0.6, { position: _this.house.position.add(cc.v3(0, 200)) }).call(function () {
                        _this.addEventListener();
                    }).start();
                }, 1.2);
            }, 0.8);
        }, 2);
    };
    NewClass.prototype.OffEvent = function () {
        this.uiNode.off(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.uiNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.uiNode.off(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    };
    NewClass.prototype.addEventListener = function () {
        this.hand1.active = true;
        this.isStep = 1;
        this.uiNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.uiNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.uiNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    };
    NewClass.prototype.touchStartEvent = function () {
    };
    NewClass.prototype.touchMoveEvent = function (event) {
        if (this.isStep == 1 || this.isStep == 3) {
            var pos = event.getLocation();
            // pos=this.uiNode.parent .convertToWorldSpaceAR(pos)
            pos = this.house.parent.convertToNodeSpaceAR(pos);
            this.house.position = pos;
            // console.log("move")
        }
    };
    NewClass.prototype.touchEndEvent = function (event) {
        var _this = this;
        if (this.isStep == 1) {
            // let pos = event.getLocation();
            // pos = this.house.parent.convertToNodeSpaceAR(pos)
            cc.tween(this.house).to(0.3, { position: cc.v3(273, -391) }).start();
            // this.house.position = cc.v3(273, -391)
            // console.log(this.isStep,pos)
            this.isStep = 2;
            cc.audioEngine.play(this.soundUd, false, 0.5);
            this.buildingHouse1.getChildByName("NhaNgu").active = true;
            this.hand1.active = false;
            this.listChar.children[1].getComponent(C).cutTree();
            this.listChar.children[1].position = cc.v3(1282, -276);
            this.listChar.children[2].getComponent(C).cutTree();
            cc.tween(this.mainCamera).to(0.3, { zoomRatio: 0.8 * this.isScale }).call(function () {
                _this.house.getChildByName("pop").active = true;
                _this.listChar.children[0].getComponent(C).runPos(cc.v3(760, -700), 1);
                _this.listChar.children[1].getComponent(C).setTree(_this.listTree[1], _this.listChar.children[0]);
                _this.listChar.children[3].active = true;
                _this.listChar.children[3].getComponent(C).runPos(cc.v3(1100, -200), 1.5);
                _this.listChar.children[2].getComponent(C).setTree(_this.listTree[0], _this.listChar.children[3]);
                _this.scheduleOnce(function () { _this.listChar.children[3].getComponent(C).idle(); }, 1.5);
                _this.scheduleOnce(function () {
                    _this.listChar.children[0].getComponent(C).idle();
                    globalThis.step = 1;
                }, 1);
                cc.tween(_this.mainCamera.node).to(0.8, { position: cc.v3(1103, -302) }).start();
                _this.scheduleOnce(function () {
                    _this.phase2();
                }, 3.5);
            }).start();
        }
        else if (this.isStep == 3) {
            console.log("okei");
            this.house.position = cc.v3(1561, 921);
            this.isStep = 4;
            this.hand2.active = false;
            cc.tween(this.mainCamera).to(0.3, { zoomRatio: 0.7 * this.isScale }).call(function () {
                _this.house.getChildByName("losuoi2").children[1].active = true;
                cc.audioEngine.play(_this.soundUd, false, 0.5);
                _this.scheduleOnce(function () {
                    _this.doWood2();
                }, 1);
                _this.scheduleOnce(function () {
                    _this.listChar.children[1].active = false;
                    _this.listChar.children[2].active = false;
                    cc.tween(_this.mainCamera).to(0.3, { zoomRatio: 0.35 * _this.isScale }).start();
                    cc.tween(_this.mainCamera.node).to(0.3, { position: cc.v3(1000, 700) }).call(function () {
                        _this.winFx.active = true;
                    }).start();
                    _this.listHouseNew.active = true;
                    cc.audioEngine.play(_this.soundUd, false, 0.5);
                    cc.tween(_this.circle).to(1, { scaleX: 3 * 2.5, scaleY: 2 * 2.5 }).start();
                }, 2.5);
                _this.scheduleOnce(function () {
                    _this.OffEvent();
                    _this.linkToStore.active = true;
                    _this.endcard.active = true;
                }, 4);
            }).start();
            cc.tween(this.mainCamera.node).to(0.8, { position: cc.v3(1950, 1100) }).start();
        }
    };
    NewClass.prototype.phase2 = function () {
        var _this = this;
        cc.tween(this.mainCamera.node).to(0.8, { position: cc.v3(400, -500) }).start();
        this.listChar.children[0].getComponent(C).runPos(cc.v3(550, -600), 1);
        this.listChar.children[3].getComponent(C).runPos(cc.v3(550, -400), 1);
        this.scheduleOnce(function () {
            _this.listChar.children[0].getComponent(C).idle();
            _this.listChar.children[3].getComponent(C).idle();
            _this.transWood(_this.listChar.children[0].getChildByName("bag"));
            _this.transWood(_this.listChar.children[3].getChildByName("bag"));
            globalThis.chatGo = true;
        }, 1);
        this.scheduleOnce(function () {
            cc.tween(_this.mainCamera).to(0.3, { zoomRatio: 0.4 * _this.isScale }).start();
            cc.tween(_this.mainCamera.node).to(0.3, { position: _this.house.position.add(cc.v3(0, 200)) }).start();
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundUd, false, 0.5);
                _this.buildingHouse2.getChildByName("NhaNgu").active = true;
                _this.isStep = 3;
                _this.check2 = true;
                _this.Joystick.active = true;
                _this.hand2.active = true;
                // this.isRun=true
            }, 0.5);
            _this.house.getChildByName("losuoi2").active = true;
            cc.tween(_this.circle).to(0.6, { scaleX: 3 * 1.2, scaleY: 2 * 1.2 }).start();
            cc.audioEngine.play(_this.soundUd, false, 0.5);
        }, 2);
    };
    NewClass.prototype.transWood = function (heroBag) {
        var _this = this;
        var count = 0;
        var pos = this.pop1.parent.convertToWorldSpaceAR(this.pop1.position);
        pos = heroBag.convertToNodeSpaceAR(pos).add(cc.v3(0, 80));
        var fill = this.pop1.getChildByName("fill").getComponent(cc.Sprite);
        var _loop_1 = function (i) {
            count++;
            var wood = heroBag.children[i];
            var midPos = cc.v2((wood.x + pos.x) / 2, wood.y + 500);
            cc.tween(wood).delay(count * 0.08).parallel(cc.tween().bezierTo(0.4, cc.v2(wood.x, wood.y), midPos, cc.v2(pos.x, pos.y + 200)), cc.tween().to(0.4, { angle: 360, scale: 1.7 }).call(function () {
                fill.fillRange += 0.1;
                wood.destroy();
                cc.audioEngine.play(_this.soundPut, false, 0.5);
            }))
                .start();
        };
        for (var i = heroBag.childrenCount - 1; i >= 0; i--) {
            _loop_1(i);
        }
    };
    NewClass.prototype.doWood2 = function () {
        var bag1 = this.house2.getChildByName("listGo");
        var bag2 = this.house2.getChildByName("listGo2");
        this.transWood2(bag1);
        this.transWood2(bag2);
    };
    NewClass.prototype.transWood2 = function (heroBag) {
        var _this = this;
        var count = 0;
        var pos = this.pop2.parent.convertToWorldSpaceAR(this.pop1.position);
        pos = heroBag.convertToNodeSpaceAR(pos).add(cc.v3(0, 80));
        var fill = this.pop2.getChildByName("fill").getComponent(cc.Sprite);
        var _loop_2 = function (i) {
            count++;
            var wood = cc.instantiate(this_1.preWood);
            wood.position = cc.v3(0, 0);
            wood.parent = heroBag;
            var midPos = cc.v2((wood.x + pos.x) / 2, wood.y + 5000);
            cc.tween(wood).delay(count * 0.1).parallel(cc.tween().bezierTo(0.6, cc.v2(wood.x, wood.y), midPos, cc.v2(pos.x, pos.y + 200)), cc.tween().to(0.6, { scale: 1.7 }).call(function () {
                fill.fillRange += 0.09;
                cc.audioEngine.play(_this.soundPut, false, 0.5);
                wood.destroy();
            }))
                .start();
        };
        var this_1 = this;
        for (var i = heroBag.childrenCount + 2; i >= 0; i--) {
            _loop_2(i);
        }
    };
    // update(dt) {
    // }
    NewClass.prototype.update = function () {
        // this.mainCamera.zoomRatio=1
        this.circle.position = this.house.position;
        if (this.isStep == 1 || this.isStep == 3) {
            this.mainCamera.node.setPosition(this.house.position.add(cc.v3(0, 200)));
        }
        // this.fitImg()
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.isScale = 1;
                this.mainCamera.zoomRatio = 0.9;
                this.endcard.getChildByName("banner1").active = true;
                this.endcard.getChildByName("banner2").active = false;
                this.fitSizeImg(true);
                // if (cc.winSize.height / cc.winSize.width < 1.35) {
                //     canvas.fitHeight = true;
                // }
            }
        }
        else {
            // console.log("doi")
            if (this.isvertical) {
                this.mainCamera.zoomRatio = 1.5;
                this.isvertical = false;
                canvas.fitHeight = true;
                canvas.fitWidth = false;
                this.isScale = 1.5;
                this.endcard.getChildByName("banner1").active = false;
                this.endcard.getChildByName("banner2").active = true;
                this.fitSizeImg(false);
                // if (cc.winSize.height / cc.winSize.width < 1.35) {
                //     canvas.fitHeight = true;
                // }
            }
        }
        if (this.moveDir && this.directionX && this.isRun && this.check2 == true) {
            if (this.isStep == 1 || this.isStep == 3) {
                var newPos = this.house.position.add(this.moveDir.mul(this.speed / 60));
                // this.node.setPosition(newPos.clampf(cc.v3(-cc.winSize.width / 2 + 50, -cc.winSize.height / 2 + 250), cc.v3(cc.winSize.width / 2 - 50, cc.winSize.height / 2 - 50)));
                // console.log(this.gamePlay)
                this.house.setPosition(newPos);
            }
        }
    };
    NewClass.prototype.fitSizeImg = function (value) {
        if (value) {
            if (cc.winSize.height / cc.winSize.width < 1.35) {
                var width = cc.winSize.width;
                var check = 1171 / width;
                this.endcard.getChildByName("banner1").height = 1936 / check;
                this.endcard.getChildByName("banner1").width = cc.winSize.width;
            }
            else {
                var height = cc.winSize.height;
                var check = 1936 / height;
                this.endcard.getChildByName("banner1").width = 1171 / check;
                this.endcard.getChildByName("banner1").height = cc.winSize.height;
            }
        }
        else {
            console.log("fit2");
            if (cc.winSize.width / cc.winSize.height < 1.35) {
                console.log("fit22");
                var height = cc.winSize.height;
                var check = 854 / height;
                this.endcard.getChildByName("banner2").width = 1560 / check;
                this.endcard.getChildByName("banner2").height = cc.winSize.height;
            }
            else {
                var width = cc.winSize.width;
                var check = 1560 / width;
                this.endcard.getChildByName("banner2").height = 854 / check;
                this.endcard.getChildByName("banner2").width = cc.winSize.width;
            }
        }
    };
    NewClass.prototype.fitImg = function () {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.mainCamera.zoomRatio = 0.9;
                this.isScale = 1;
                this.endcard.getChildByName("banner1").active = true;
                this.endcard.getChildByName("banner2").active = false;
                this.fitSizeImg(true);
            }
        }
        else {
            // console.log("doi")
            this.mainCamera.zoomRatio = 1.5;
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.isScale = 1.5;
            this.endcard.getChildByName("banner1").active = false;
            this.endcard.getChildByName("banner2").active = true;
            this.fitSizeImg(false);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChar", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fill", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "buildingHouse1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "buildingHouse2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endcard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listTree", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop2", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHouseNew", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "winFx", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "circle", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Joystick", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "test", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWUNfNi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtBQUVuQjtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXFjQztRQWxjRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFDdkIsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUVYLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0Qix3QkFBd0I7UUFDeEIsZ0JBQVUsR0FBRyxLQUFLLENBQUE7UUFFbEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsYUFBTyxHQUFHLENBQUMsQ0FBQTtRQUNYLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsV0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU0sR0FBRyxLQUFLLENBQUE7O1FBMFlkLGlCQUFpQjtJQUNyQixDQUFDO0lBMVlHLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQUEsaUJBOENDO1FBN0NHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzVDLDBDQUEwQztRQUUxQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUM3RSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMvQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQTtZQUN0RixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUVWLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ2hFLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBRWQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO2dCQUVsRCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFFdkQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBRVAsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQ2xELEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUN2RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDUCxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUVkLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUM5RCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtvQkFDakQsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUM3RCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUM5RixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtvQkFDM0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBRWQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBRVgsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBR1QsQ0FBQztJQUNELDJCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELGtDQUFlLEdBQWY7SUFFQSxDQUFDO0lBQ0QsaUNBQWMsR0FBZCxVQUFlLEtBQUs7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDOUIscURBQXFEO1lBQ3JELEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDMUIsc0JBQXNCO1NBQ3pCO0lBR0wsQ0FBQztJQUNELGdDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQW5CLGlCQThFQztRQTdFRyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2xCLGlDQUFpQztZQUNqQyxvREFBb0Q7WUFDcEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNwRSx5Q0FBeUM7WUFDekMsK0JBQStCO1lBRS9CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBRTdDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDbkQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN0RSxLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3JFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUU5RixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQ3hFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUU5RixLQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUNsRixLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtvQkFDaEQsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFFTCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDaEYsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2xCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNYLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1NBRWI7YUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ3pCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEUsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQzlELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUU3QyxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtnQkFFbEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUNMLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDekMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFFekMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7b0JBQzdFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ3hFLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtvQkFFNUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7b0JBRVYsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNoQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtvQkFDN0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFJN0UsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUNQLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO29CQUNmLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtvQkFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUM5QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDVCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUVuRjtJQUNMLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQUEsaUJBaUNDO1FBaENHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUVyRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDckUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUNoRCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUMvRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1lBQy9ELFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBRTVCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNMLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUM1RSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFFcEcsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFFN0MsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDM0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7Z0JBQ2YsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDM0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUN4QixrQkFBa0I7WUFDdEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1AsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUNsRCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBR2pELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsT0FBTztRQUFqQixpQkFxQkM7UUFwQkcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxHQUFHLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzNELENBQUM7WUFDTixLQUFLLEVBQUUsQ0FBQTtZQUNQLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQ3ZDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQ2xGLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFBO2dCQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFFbEQsQ0FBQyxDQUFDLENBQ0w7aUJBQ0ksS0FBSyxFQUFFLENBQUE7O1FBYmhCLEtBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQTFDLENBQUM7U0FlVDtJQUNMLENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRzFCLENBQUM7SUFDRCw2QkFBVSxHQUFWLFVBQVcsT0FBTztRQUFsQixpQkEwQkM7UUF6QkcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxHQUFHLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzNELENBQUM7WUFDTixLQUFLLEVBQUUsQ0FBQTtZQUNQLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBSyxPQUFPLENBQUMsQ0FBQTtZQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBRTNCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFBO1lBRXJCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtZQUN2RCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUN0QyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUNsRixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUE7Z0JBQ3RCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUU5QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7WUFFbEIsQ0FBQyxDQUFDLENBQ0w7aUJBQ0ksS0FBSyxFQUFFLENBQUE7OztRQWxCaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFBMUMsQ0FBQztTQW9CVDtJQUNMLENBQUM7SUFDRCxlQUFlO0lBRWYsSUFBSTtJQUNKLHlCQUFNLEdBQU47UUFDSSw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7UUFDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUU1RTtRQUNELGdCQUFnQjtRQUNoQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0MsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBRXZCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtnQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDckIscURBQXFEO2dCQUNyRCwrQkFBK0I7Z0JBRS9CLElBQUk7YUFHUDtTQUNKO2FBQ0k7WUFDRCxxQkFBcUI7WUFDckIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7Z0JBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO2dCQUVsQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUN0QixxREFBcUQ7Z0JBQ3JELCtCQUErQjtnQkFFL0IsSUFBSTthQUNQO1NBR0o7UUFLRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3RFLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hFLHVLQUF1SztnQkFDdkssNkJBQTZCO2dCQUU3QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztTQUVKO0lBSUwsQ0FBQztJQUNELDZCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osSUFBSSxLQUFLLEVBQUU7WUFHUCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRTtnQkFDN0MsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7Z0JBQzVCLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDbkU7aUJBQ0k7Z0JBQ0QsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7Z0JBQzlCLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDckU7U0FDSjthQUNJO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRTtnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFFcEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7Z0JBQzlCLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDckU7aUJBQ0k7Z0JBQ0QsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQzdCLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDbkU7U0FTSjtJQUNMLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUV2QixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtnQkFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7YUFFeEI7U0FDSjthQUNJO1lBQ0QscUJBQXFCO1lBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtZQUVsQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUl6QjtJQUNMLENBQUM7SUEvYkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUl0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDTTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFwREosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFjNUI7SUFBRCxlQUFDO0NBcmNELEFBcWNDLENBcmNxQyxFQUFFLENBQUMsU0FBUyxHQXFjakQ7a0JBcmNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuc3RlcCA9IDBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENoYXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIG1haW5DYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlsbDogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIGlzU3RlcCA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhvdXNlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnVpbGRpbmdIb3VzZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidWlsZGluZ0hvdXNlMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhvdXNlMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBpc3ZlcnRpY2FsID0gZmFsc2VcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kY2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RUcmVlOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9wMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcDI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVdvb2Q6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RIb3VzZU5ldzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdpbkZ4OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRVZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFB1dDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2lyY2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSm95c3RpY2s6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRlc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgaXNTY2FsZSA9IDFcclxuICAgIG1vdmVEaXIgPSBudWxsO1xyXG4gICAgc3BlZWQgPSAxMDAwO1xyXG4gICAgZGlyZWN0aW9uWCA9IG51bGw7XHJcbiAgICBpc1J1biA9IHRydWU7XHJcbiAgICBjaGVjazIgPSBmYWxzZVxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuNSlcclxuICAgICAgICAvLyB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuXHJcbiAgICAgICAgbGV0IGFyclBvcyA9IFtjYy52MygxMjEyLCAtMjQ5KSwgY2MudjMoNTUyLCAtMzA2KV1cclxuICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChDKS50cmVlID0gdGhpcy5saXN0VHJlZVsxXTtcclxuICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChDKS50cmVlID0gdGhpcy5saXN0VHJlZVswXTtcclxuICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChDKS50cmVlID0gdGhpcy5saXN0VHJlZVsyXTtcclxuXHJcbiAgICAgICAgdGhpcy5maXRJbWcoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDIsIHsgcG9zaXRpb246IGNjLnYzKDQwMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNpcmNsZSkudG8oMS41LCB7IHNjYWxlWDogMyAqIDAuODUsIHNjYWxlWTogMiAqIDAuODUgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGwpLnRvKDEsIHsgZmlsbFJhbmdlOiAwLjMgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGwubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLTUwwrBjXCJcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoQykucnVuUG9zKGFyclBvc1swXSwgMC4zKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoQykuZ2V0SWNlKClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChDKS5vblBhdXNlKClcclxuXHJcbiAgICAgICAgICAgIH0sIDAuMylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KEMpLmdldEljZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChDKS5vblBhdXNlKClcclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoQykucnVuUG9zKGFyclBvc1sxXSwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChDKS5hbmdyeSgpXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjYsIHsgem9vbVJhdGlvOiAwLjUgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjYsIHsgcG9zaXRpb246IHRoaXMuaG91c2UucG9zaXRpb24uYWRkKGNjLnYzKDAsIDIwMCkpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAxLjIpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjgpXHJcbiAgICAgICAgfSwgMilcclxuXHJcblxyXG4gICAgfVxyXG4gICAgT2ZmRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy51aU5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aU5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZDEuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNTdGVwID0gMVxyXG4gICAgICAgIHRoaXMudWlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdG91Y2hTdGFydEV2ZW50KCkge1xyXG5cclxuICAgIH1cclxuICAgIHRvdWNoTW92ZUV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDEgfHwgdGhpcy5pc1N0ZXAgPT0gMykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgLy8gcG9zPXRoaXMudWlOb2RlLnBhcmVudCAuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcylcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5ob3VzZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgICAgICB0aGlzLmhvdXNlLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmVcIilcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIHRvdWNoRW5kRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xyXG4gICAgICAgICAgICAvLyBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgLy8gcG9zID0gdGhpcy5ob3VzZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmhvdXNlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDI3MywgLTM5MSkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLmhvdXNlLnBvc2l0aW9uID0gY2MudjMoMjczLCAtMzkxKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzU3RlcCxwb3MpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDI7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMC41KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5idWlsZGluZ0hvdXNlMS5nZXRDaGlsZEJ5TmFtZShcIk5oYU5ndVwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KEMpLmN1dFRyZWUoKVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzFdLnBvc2l0aW9uID0gY2MudjMoMTI4MiwgLTI3Nik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChDKS5jdXRUcmVlKClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAwLjggKiB0aGlzLmlzU2NhbGUgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXNlLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChDKS5ydW5Qb3MoY2MudjMoNzYwLCAtNzAwKSwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KEMpLnNldFRyZWUodGhpcy5saXN0VHJlZVsxXSwgdGhpcy5saXN0Q2hhci5jaGlsZHJlblswXSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChDKS5ydW5Qb3MoY2MudjMoMTEwMCwgLTIwMCksIDEuNSlcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KEMpLnNldFRyZWUodGhpcy5saXN0VHJlZVswXSwgdGhpcy5saXN0Q2hhci5jaGlsZHJlblszXSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMubGlzdENoYXIuY2hpbGRyZW5bM10uZ2V0Q29tcG9uZW50KEMpLmlkbGUoKSB9LCAxLjUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoQykuaWRsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5zdGVwID0gMTtcclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMTEwMywgLTMwMikgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlMigpO1xyXG4gICAgICAgICAgICAgICAgfSwgMy41KVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2tlaVwiKVxyXG4gICAgICAgICAgICB0aGlzLmhvdXNlLnBvc2l0aW9uID0gY2MudjMoMTU2MSwgOTIxKVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAwLjcgKiB0aGlzLmlzU2NhbGUgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXNlLmdldENoaWxkQnlOYW1lKFwibG9zdW9pMlwiKS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDAuNSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1dvb2QyKClcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAwLjM1ICogdGhpcy5pc1NjYWxlIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MygxMDAwLCA3MDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbkZ4LmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIb3VzZU5ldy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2lyY2xlKS50bygxLCB7IHNjYWxlWDogMyAqIDIuNSwgc2NhbGVZOiAyICogMi41IH0pLnN0YXJ0KClcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDIuNSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk9mZkV2ZW50KClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwgNClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygxOTUwLCAxMTAwKSB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwaGFzZTIoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoNDAwLCAtNTAwKSB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEMpLnJ1blBvcyhjYy52Myg1NTAsIC02MDApLCAxKVxyXG5cclxuICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChDKS5ydW5Qb3MoY2MudjMoNTUwLCAtNDAwKSwgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEMpLmlkbGUoKVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChDKS5pZGxlKClcclxuICAgICAgICAgICAgdGhpcy50cmFuc1dvb2QodGhpcy5saXN0Q2hhci5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImJhZ1wiKSlcclxuICAgICAgICAgICAgdGhpcy50cmFuc1dvb2QodGhpcy5saXN0Q2hhci5jaGlsZHJlblszXS5nZXRDaGlsZEJ5TmFtZShcImJhZ1wiKSlcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5jaGF0R28gPSB0cnVlXHJcblxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDAuNCAqIHRoaXMuaXNTY2FsZSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IHRoaXMuaG91c2UucG9zaXRpb24uYWRkKGNjLnYzKDAsIDIwMCkpIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMC41KVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRpbmdIb3VzZTIuZ2V0Q2hpbGRCeU5hbWUoXCJOaGFOZ3VcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gM1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVjazIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLkpveXN0aWNrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZDIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pc1J1bj10cnVlXHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgdGhpcy5ob3VzZS5nZXRDaGlsZEJ5TmFtZShcImxvc3VvaTJcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNpcmNsZSkudG8oMC42LCB7IHNjYWxlWDogMyAqIDEuMiwgc2NhbGVZOiAyICogMS4yIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9LCAyKVxyXG4gICAgfVxyXG4gICAgdHJhbnNXb29kKGhlcm9CYWcpIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucG9wMS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucG9wMS5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zID0gaGVyb0JhZy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpLmFkZChjYy52MygwLCA4MCkpO1xyXG4gICAgICAgIGxldCBmaWxsID0gdGhpcy5wb3AxLmdldENoaWxkQnlOYW1lKFwiZmlsbFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gaGVyb0JhZy5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgICAgICBsZXQgd29vZCA9IGhlcm9CYWcuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Migod29vZC54ICsgcG9zLngpIC8gMiwgd29vZC55ICsgNTAwKTtcclxuICAgICAgICAgICAgY2MudHdlZW4od29vZCkuZGVsYXkoY291bnQgKiAwLjA4KS5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYmV6aWVyVG8oMC40LCBjYy52Mih3b29kLngsIHdvb2QueSksIG1pZFBvcywgY2MudjIocG9zLngsIHBvcy55ICsgMjAwKSksXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNCwgeyBhbmdsZTogMzYwLCBzY2FsZTogMS43IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGwuZmlsbFJhbmdlICs9IDAuMVxyXG4gICAgICAgICAgICAgICAgICAgIHdvb2QuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUHV0LCBmYWxzZSwgMC41KVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvV29vZDIoKSB7XHJcbiAgICAgICAgbGV0IGJhZzEgPSB0aGlzLmhvdXNlMi5nZXRDaGlsZEJ5TmFtZShcImxpc3RHb1wiKTtcclxuICAgICAgICBsZXQgYmFnMiA9IHRoaXMuaG91c2UyLmdldENoaWxkQnlOYW1lKFwibGlzdEdvMlwiKTtcclxuICAgICAgICB0aGlzLnRyYW5zV29vZDIoYmFnMSk7XHJcbiAgICAgICAgdGhpcy50cmFuc1dvb2QyKGJhZzIpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICB0cmFuc1dvb2QyKGhlcm9CYWcpIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucG9wMi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucG9wMS5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zID0gaGVyb0JhZy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpLmFkZChjYy52MygwLCA4MCkpO1xyXG4gICAgICAgIGxldCBmaWxsID0gdGhpcy5wb3AyLmdldENoaWxkQnlOYW1lKFwiZmlsbFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gaGVyb0JhZy5jaGlsZHJlbkNvdW50ICsgMjsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgICAgICBsZXQgd29vZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlV29vZClcclxuICAgICAgICAgICAgd29vZC5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcblxyXG4gICAgICAgICAgICB3b29kLnBhcmVudCA9IGhlcm9CYWdcclxuXHJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Migod29vZC54ICsgcG9zLngpIC8gMiwgd29vZC55ICsgNTAwMClcclxuICAgICAgICAgICAgY2MudHdlZW4od29vZCkuZGVsYXkoY291bnQgKiAwLjEpLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5iZXppZXJUbygwLjYsIGNjLnYyKHdvb2QueCwgd29vZC55KSwgbWlkUG9zLCBjYy52Mihwb3MueCwgcG9zLnkgKyAyMDApKSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC42LCB7IHNjYWxlOiAxLjcgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbC5maWxsUmFuZ2UgKz0gMC4wOVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFB1dCwgZmFsc2UsIDAuNSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd29vZC5kZXN0cm95KClcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICAvLyB9XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbz0xXHJcbiAgICAgICAgdGhpcy5jaXJjbGUucG9zaXRpb24gPSB0aGlzLmhvdXNlLnBvc2l0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDEgfHwgdGhpcy5pc1N0ZXAgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5zZXRQb3NpdGlvbih0aGlzLmhvdXNlLnBvc2l0aW9uLmFkZChjYy52MygwLCAyMDApKSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmZpdEltZygpXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLndpblNpemUud2lkdGggPCBjYy53aW5TaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NjYWxlID0gMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDAuOVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml0U2l6ZUltZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGNjLndpblNpemUuaGVpZ2h0IC8gY2Mud2luU2l6ZS53aWR0aCA8IDEuMzUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkb2lcIilcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXN2ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NjYWxlID0gMS41XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml0U2l6ZUltZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVEaXIgJiYgdGhpcy5kaXJlY3Rpb25YICYmIHRoaXMuaXNSdW4gJiYgdGhpcy5jaGVjazIgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMSB8fCB0aGlzLmlzU3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3UG9zID0gdGhpcy5ob3VzZS5wb3NpdGlvbi5hZGQodGhpcy5tb3ZlRGlyLm11bCh0aGlzLnNwZWVkIC8gNjApKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXdQb3MuY2xhbXBmKGNjLnYzKC1jYy53aW5TaXplLndpZHRoIC8gMiArIDUwLCAtY2Mud2luU2l6ZS5oZWlnaHQgLyAyICsgMjUwKSwgY2MudjMoY2Mud2luU2l6ZS53aWR0aCAvIDIgLSA1MCwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyIC0gNTApKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdhbWVQbGF5KVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaG91c2Uuc2V0UG9zaXRpb24obmV3UG9zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBmaXRTaXplSW1nKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGNjLndpblNpemUuaGVpZ2h0IC8gY2Mud2luU2l6ZS53aWR0aCA8IDEuMzUpIHtcclxuICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IGNjLndpblNpemUud2lkdGhcclxuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IDExNzEgLyB3aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjFcIikuaGVpZ2h0ID0gMTkzNiAvIGNoZWNrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMVwiKS53aWR0aCA9IGNjLndpblNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHRcclxuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IDE5MzYgLyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIxXCIpLndpZHRoID0gMTE3MSAvIGNoZWNrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMVwiKS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXQyXCIpXHJcbiAgICAgICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIC8gY2Mud2luU2l6ZS5oZWlnaHQgPCAxLjM1KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpdDIyXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSA4NTQgLyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIyXCIpLndpZHRoID0gMTU2MCAvIGNoZWNrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMlwiKS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IGNjLndpblNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSAxNTYwIC8gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIyXCIpLmhlaWdodCA9IDg1NCAvIGNoZWNrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMlwiKS53aWR0aCA9IGNjLndpblNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpdEltZygpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG5cclxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc3ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMC45XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2NhbGUgPSAxXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXRTaXplSW1nKHRydWUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRvaVwiKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzU2NhbGUgPSAxLjVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maXRTaXplSW1nKGZhbHNlKVxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==