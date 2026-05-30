
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1lDXzYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFFbkI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxY0M7UUFsY0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBQ3ZCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsd0JBQXdCO1FBQ3hCLGdCQUFVLEdBQUcsS0FBSyxDQUFBO1FBRWxCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLGFBQU8sR0FBRyxDQUFDLENBQUE7UUFDWCxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsV0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFdBQUssR0FBRyxJQUFJLENBQUM7UUFDYixZQUFNLEdBQUcsS0FBSyxDQUFBOztRQTBZZCxpQkFBaUI7SUFDckIsQ0FBQztJQTFZRyxlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUFBLGlCQThDQztRQTdDRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM1QywwQ0FBMEM7UUFFMUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDN0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDL0MsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7WUFDdEYsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFFVixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNoRSxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUVkLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtnQkFFbEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBRXZELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUVQLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO2dCQUNsRCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDdkQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1AsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFFZCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDOUQsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7b0JBQ2pELEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtvQkFDN0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDOUYsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7b0JBQzNCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUVkLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUVYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUdULENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELG1DQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCxrQ0FBZSxHQUFmO0lBRUEsQ0FBQztJQUNELGlDQUFjLEdBQWQsVUFBZSxLQUFLO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzlCLHFEQUFxRDtZQUNyRCxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQzFCLHNCQUFzQjtTQUN6QjtJQUdMLENBQUM7SUFDRCxnQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUFuQixpQkE4RUM7UUE3RUcsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsQixpQ0FBaUM7WUFDakMsb0RBQW9EO1lBQ3BELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDcEUseUNBQXlDO1lBQ3pDLCtCQUErQjtZQUUvQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUU3QyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ25ELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEUsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDL0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUNyRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFFOUYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUN4RSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFFOUYsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDbEYsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7b0JBQ2hELFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBRUwsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2hGLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNsQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDWCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUViO2FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUN6QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RFLEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUM5RCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFFN0MsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBRWxCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDTCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3pDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBRXpDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUM3RSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUN4RSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7b0JBRTVCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUVWLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDaEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7b0JBQzdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBSTdFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDUCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtvQkFDZixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7b0JBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDOUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ1QsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDVixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FFbkY7SUFDTCxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUFBLGlCQWlDQztRQWhDRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDaEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7WUFDL0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUMvRCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUU1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDNUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBRXBHLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBRTdDLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO2dCQUNmLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQzNCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDeEIsa0JBQWtCO1lBQ3RCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNQLEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDbEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUdqRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDVCxDQUFDO0lBQ0QsNEJBQVMsR0FBVCxVQUFVLE9BQU87UUFBakIsaUJBcUJDO1FBcEJHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNiLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUMzRCxDQUFDO1lBQ04sS0FBSyxFQUFFLENBQUE7WUFDUCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN2RCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUN2QyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUNsRixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQTtnQkFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBRWxELENBQUMsQ0FBQyxDQUNMO2lCQUNJLEtBQUssRUFBRSxDQUFBOztRQWJoQixLQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUExQyxDQUFDO1NBZVQ7SUFDTCxDQUFDO0lBQ0QsMEJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUcxQixDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLE9BQU87UUFBbEIsaUJBMEJDO1FBekJHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNiLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUMzRCxDQUFDO1lBQ04sS0FBSyxFQUFFLENBQUE7WUFDUCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQUssT0FBTyxDQUFDLENBQUE7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUUzQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQTtZQUVyQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE7WUFDdkQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FDdEMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFDbEYsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFBO2dCQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFFOUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBRWxCLENBQUMsQ0FBQyxDQUNMO2lCQUNJLEtBQUssRUFBRSxDQUFBOzs7UUFsQmhCLEtBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQTFDLENBQUM7U0FvQlQ7SUFDTCxDQUFDO0lBQ0QsZUFBZTtJQUVmLElBQUk7SUFDSix5QkFBTSxHQUFOO1FBQ0ksOEJBQThCO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO1FBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFNUU7UUFDRCxnQkFBZ0I7UUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUV2QixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO2dCQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3JCLHFEQUFxRDtnQkFDckQsK0JBQStCO2dCQUUvQixJQUFJO2FBR1A7U0FDSjthQUNJO1lBQ0QscUJBQXFCO1lBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2dCQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtnQkFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDdEIscURBQXFEO2dCQUNyRCwrQkFBK0I7Z0JBRS9CLElBQUk7YUFDUDtTQUdKO1FBS0QsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUN0RSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSx1S0FBdUs7Z0JBQ3ZLLDZCQUE2QjtnQkFFN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEM7U0FFSjtJQUlMLENBQUM7SUFDRCw2QkFBVSxHQUFWLFVBQVcsS0FBSztRQUNaLElBQUksS0FBSyxFQUFFO1lBR1AsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUU7Z0JBQzdDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO2dCQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ25FO2lCQUNJO2dCQUNELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBO2dCQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQ3JFO1NBQ0o7YUFDSTtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUU7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBRXBCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBO2dCQUM5QixJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO2dCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQ3JFO2lCQUNJO2dCQUNELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztnQkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ25FO1NBU0o7SUFDTCxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFFdkIsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBRXhCO1NBQ0o7YUFDSTtZQUNELHFCQUFxQjtZQUVyQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7WUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7U0FJekI7SUFDTCxDQUFDO0lBL2JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDYTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFJdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDTTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBcERKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxYzVCO0lBQUQsZUFBQztDQXJjRCxBQXFjQyxDQXJjcUMsRUFBRSxDQUFDLFNBQVMsR0FxY2pEO2tCQXJjb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5nbG9iYWxUaGlzLnN0ZXAgPSAwXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENoYXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGZpbGw6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgaXNTdGVwID0gMDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob3VzZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnVpbGRpbmdIb3VzZTE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ1aWxkaW5nSG91c2UyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob3VzZTI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmQyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBpc3ZlcnRpY2FsID0gZmFsc2VcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmRjYXJkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0VHJlZTogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVXb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RIb3VzZU5ldzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd2luRng6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRQdXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2lyY2xlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBKb3lzdGljazogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpc1NjYWxlID0gMVxuICAgIG1vdmVEaXIgPSBudWxsO1xuICAgIHNwZWVkID0gMTAwMDtcbiAgICBkaXJlY3Rpb25YID0gbnVsbDtcbiAgICBpc1J1biA9IHRydWU7XG4gICAgY2hlY2syID0gZmFsc2VcbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxuICAgICAgICAvLyB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcblxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKDEyMTIsIC0yNDkpLCBjYy52Myg1NTIsIC0zMDYpXVxuICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChDKS50cmVlID0gdGhpcy5saXN0VHJlZVsxXTtcbiAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoQykudHJlZSA9IHRoaXMubGlzdFRyZWVbMF07XG4gICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEMpLnRyZWUgPSB0aGlzLmxpc3RUcmVlWzJdO1xuXG4gICAgICAgIHRoaXMuZml0SW1nKClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDIsIHsgcG9zaXRpb246IGNjLnYzKDQwMCwgMCkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaXJjbGUpLnRvKDEuNSwgeyBzY2FsZVg6IDMgKiAwLjg1LCBzY2FsZVk6IDIgKiAwLjg1IH0pLnN0YXJ0KClcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbCkudG8oMSwgeyBmaWxsUmFuZ2U6IDAuMyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGwubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLTUwwrBjXCJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcblxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoQykucnVuUG9zKGFyclBvc1swXSwgMC4zKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoQykuZ2V0SWNlKClcblxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KEMpLm9uUGF1c2UoKVxuXG4gICAgICAgICAgICB9LCAwLjMpXG5cbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChDKS5nZXRJY2UoKVxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KEMpLm9uUGF1c2UoKVxuICAgICAgICAgICAgfSwgMC41KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoQykucnVuUG9zKGFyclBvc1sxXSwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEMpLmFuZ3J5KClcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjYsIHsgem9vbVJhdGlvOiAwLjUgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmhvdXNlLnBvc2l0aW9uLmFkZChjYy52MygwLCAyMDApKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcblxuICAgICAgICAgICAgICAgIH0sIDEuMilcblxuICAgICAgICAgICAgfSwgMC44KVxuICAgICAgICB9LCAyKVxuXG5cbiAgICB9XG4gICAgT2ZmRXZlbnQoKSB7XG4gICAgICAgIHRoaXMudWlOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLnVpTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMudWlOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XG4gICAgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuaGFuZDEuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzU3RlcCA9IDFcbiAgICAgICAgdGhpcy51aU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydEV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy51aU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMudWlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICB9XG4gICAgdG91Y2hTdGFydEV2ZW50KCkge1xuXG4gICAgfVxuICAgIHRvdWNoTW92ZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxIHx8IHRoaXMuaXNTdGVwID09IDMpIHtcbiAgICAgICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgLy8gcG9zPXRoaXMudWlOb2RlLnBhcmVudCAuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcylcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuaG91c2UucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgICAgIHRoaXMuaG91c2UucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmVcIilcbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgdG91Y2hFbmRFdmVudChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xuICAgICAgICAgICAgLy8gbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBwb3MgPSB0aGlzLmhvdXNlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmhvdXNlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDI3MywgLTM5MSkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgLy8gdGhpcy5ob3VzZS5wb3NpdGlvbiA9IGNjLnYzKDI3MywgLTM5MSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNTdGVwLHBvcylcblxuICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSAyO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAwLjUpXG5cbiAgICAgICAgICAgIHRoaXMuYnVpbGRpbmdIb3VzZTEuZ2V0Q2hpbGRCeU5hbWUoXCJOaGFOZ3VcIikuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KEMpLmN1dFRyZWUoKVxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblsxXS5wb3NpdGlvbiA9IGNjLnYzKDEyODIsIC0yNzYpO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChDKS5jdXRUcmVlKClcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMC44ICogdGhpcy5pc1NjYWxlIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaG91c2UuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChDKS5ydW5Qb3MoY2MudjMoNzYwLCAtNzAwKSwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChDKS5zZXRUcmVlKHRoaXMubGlzdFRyZWVbMV0sIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMF0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoQykucnVuUG9zKGNjLnYzKDExMDAsIC0yMDApLCAxLjUpXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoQykuc2V0VHJlZSh0aGlzLmxpc3RUcmVlWzBdLCB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzNdKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChDKS5pZGxlKCkgfSwgMS41KVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoQykuaWRsZSgpXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuc3RlcCA9IDE7XG4gICAgICAgICAgICAgICAgfSwgMSlcblxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDExMDMsIC0zMDIpIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlMigpO1xuICAgICAgICAgICAgICAgIH0sIDMuNSlcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2tlaVwiKVxuICAgICAgICAgICAgdGhpcy5ob3VzZS5wb3NpdGlvbiA9IGNjLnYzKDE1NjEsIDkyMSlcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gNDtcbiAgICAgICAgICAgIHRoaXMuaGFuZDIuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMC43ICogdGhpcy5pc1NjYWxlIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaG91c2UuZ2V0Q2hpbGRCeU5hbWUoXCJsb3N1b2kyXCIpLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDAuNSlcblxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1dvb2QyKClcblxuICAgICAgICAgICAgICAgIH0sIDEpXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMC4zNSAqIHRoaXMuaXNTY2FsZSB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDEwMDAsIDcwMCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbkZ4LmFjdGl2ZSA9IHRydWVcblxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SG91c2VOZXcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAwLjUpXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2lyY2xlKS50bygxLCB7IHNjYWxlWDogMyAqIDIuNSwgc2NhbGVZOiAyICogMi41IH0pLnN0YXJ0KClcblxuXG5cbiAgICAgICAgICAgICAgICB9LCAyLjUpXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk9mZkV2ZW50KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSwgNClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDE5NTAsIDExMDApIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBwaGFzZTIoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDQwMCwgLTUwMCkgfSkuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoQykucnVuUG9zKGNjLnYzKDU1MCwgLTYwMCksIDEpXG5cbiAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoQykucnVuUG9zKGNjLnYzKDU1MCwgLTQwMCksIDEpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdENoYXIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEMpLmlkbGUoKVxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhci5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoQykuaWRsZSgpXG4gICAgICAgICAgICB0aGlzLnRyYW5zV29vZCh0aGlzLmxpc3RDaGFyLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYmFnXCIpKVxuICAgICAgICAgICAgdGhpcy50cmFuc1dvb2QodGhpcy5saXN0Q2hhci5jaGlsZHJlblszXS5nZXRDaGlsZEJ5TmFtZShcImJhZ1wiKSlcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuY2hhdEdvID0gdHJ1ZVxuXG4gICAgICAgIH0sIDEpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMC40ICogdGhpcy5pc1NjYWxlIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IHRoaXMuaG91c2UucG9zaXRpb24uYWRkKGNjLnYzKDAsIDIwMCkpIH0pLnN0YXJ0KClcblxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMC41KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZGluZ0hvdXNlMi5nZXRDaGlsZEJ5TmFtZShcIk5oYU5ndVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gM1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2syID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuSm95c3RpY2suYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXNSdW49dHJ1ZVxuICAgICAgICAgICAgfSwgMC41KVxuICAgICAgICAgICAgdGhpcy5ob3VzZS5nZXRDaGlsZEJ5TmFtZShcImxvc3VvaTJcIikuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaXJjbGUpLnRvKDAuNiwgeyBzY2FsZVg6IDMgKiAxLjIsIHNjYWxlWTogMiAqIDEuMiB9KS5zdGFydCgpXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDAuNSlcblxuXG4gICAgICAgIH0sIDIpXG4gICAgfVxuICAgIHRyYW5zV29vZChoZXJvQmFnKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucG9wMS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucG9wMS5wb3NpdGlvbik7XG4gICAgICAgIHBvcyA9IGhlcm9CYWcuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKS5hZGQoY2MudjMoMCwgODApKTtcbiAgICAgICAgbGV0IGZpbGwgPSB0aGlzLnBvcDEuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gaGVyb0JhZy5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIGxldCB3b29kID0gaGVyb0JhZy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Migod29vZC54ICsgcG9zLngpIC8gMiwgd29vZC55ICsgNTAwKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLmRlbGF5KGNvdW50ICogMC4wOCkucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5iZXppZXJUbygwLjQsIGNjLnYyKHdvb2QueCwgd29vZC55KSwgbWlkUG9zLCBjYy52Mihwb3MueCwgcG9zLnkgKyAyMDApKSxcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNCwgeyBhbmdsZTogMzYwLCBzY2FsZTogMS43IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaWxsLmZpbGxSYW5nZSArPSAwLjFcbiAgICAgICAgICAgICAgICAgICAgd29vZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUHV0LCBmYWxzZSwgMC41KVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9Xb29kMigpIHtcbiAgICAgICAgbGV0IGJhZzEgPSB0aGlzLmhvdXNlMi5nZXRDaGlsZEJ5TmFtZShcImxpc3RHb1wiKTtcbiAgICAgICAgbGV0IGJhZzIgPSB0aGlzLmhvdXNlMi5nZXRDaGlsZEJ5TmFtZShcImxpc3RHbzJcIik7XG4gICAgICAgIHRoaXMudHJhbnNXb29kMihiYWcxKTtcbiAgICAgICAgdGhpcy50cmFuc1dvb2QyKGJhZzIpO1xuXG5cbiAgICB9XG4gICAgdHJhbnNXb29kMihoZXJvQmFnKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucG9wMi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucG9wMS5wb3NpdGlvbik7XG4gICAgICAgIHBvcyA9IGhlcm9CYWcuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKS5hZGQoY2MudjMoMCwgODApKTtcbiAgICAgICAgbGV0IGZpbGwgPSB0aGlzLnBvcDIuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gaGVyb0JhZy5jaGlsZHJlbkNvdW50ICsgMjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIGxldCB3b29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXb29kKVxuICAgICAgICAgICAgd29vZC5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXG5cbiAgICAgICAgICAgIHdvb2QucGFyZW50ID0gaGVyb0JhZ1xuXG4gICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHdvb2QueCArIHBvcy54KSAvIDIsIHdvb2QueSArIDUwMDApXG4gICAgICAgICAgICBjYy50d2Vlbih3b29kKS5kZWxheShjb3VudCAqIDAuMSkucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5iZXppZXJUbygwLjYsIGNjLnYyKHdvb2QueCwgd29vZC55KSwgbWlkUG9zLCBjYy52Mihwb3MueCwgcG9zLnkgKyAyMDApKSxcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNiwgeyBzY2FsZTogMS43IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaWxsLmZpbGxSYW5nZSArPSAwLjA5XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFB1dCwgZmFsc2UsIDAuNSlcblxuICAgICAgICAgICAgICAgICAgICB3b29kLmRlc3Ryb3koKVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdXBkYXRlKGR0KSB7XG5cbiAgICAvLyB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvLyB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvPTFcbiAgICAgICAgdGhpcy5jaXJjbGUucG9zaXRpb24gPSB0aGlzLmhvdXNlLnBvc2l0aW9uXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxIHx8IHRoaXMuaXNTdGVwID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuaG91c2UucG9zaXRpb24uYWRkKGNjLnYzKDAsIDIwMCkpKTtcblxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuZml0SW1nKClcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2NhbGUgPSAxXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDAuOVxuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjFcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIyXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZml0U2l6ZUltZyh0cnVlKVxuICAgICAgICAgICAgICAgIC8vIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZG9pXCIpXG4gICAgICAgICAgICBpZiAodGhpcy5pc3ZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuNVxuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTY2FsZSA9IDEuNVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5maXRTaXplSW1nKGZhbHNlKVxuICAgICAgICAgICAgICAgIC8vIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIGlmICh0aGlzLm1vdmVEaXIgJiYgdGhpcy5kaXJlY3Rpb25YICYmIHRoaXMuaXNSdW4gJiYgdGhpcy5jaGVjazIgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDEgfHwgdGhpcy5pc1N0ZXAgPT0gMykge1xuICAgICAgICAgICAgICAgIGxldCBuZXdQb3MgPSB0aGlzLmhvdXNlLnBvc2l0aW9uLmFkZCh0aGlzLm1vdmVEaXIubXVsKHRoaXMuc3BlZWQgLyA2MCkpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXdQb3MuY2xhbXBmKGNjLnYzKC1jYy53aW5TaXplLndpZHRoIC8gMiArIDUwLCAtY2Mud2luU2l6ZS5oZWlnaHQgLyAyICsgMjUwKSwgY2MudjMoY2Mud2luU2l6ZS53aWR0aCAvIDIgLSA1MCwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyIC0gNTApKSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nYW1lUGxheSlcblxuICAgICAgICAgICAgICAgIHRoaXMuaG91c2Uuc2V0UG9zaXRpb24obmV3UG9zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuXG4gICAgfVxuICAgIGZpdFNpemVJbWcodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG5cblxuICAgICAgICAgICAgaWYgKGNjLndpblNpemUuaGVpZ2h0IC8gY2Mud2luU2l6ZS53aWR0aCA8IDEuMzUpIHtcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSBjYy53aW5TaXplLndpZHRoXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gMTE3MSAvIHdpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjFcIikuaGVpZ2h0ID0gMTkzNiAvIGNoZWNrO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjFcIikud2lkdGggPSBjYy53aW5TaXplLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gMTkzNiAvIGhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIxXCIpLndpZHRoID0gMTE3MSAvIGNoZWNrO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjFcIikuaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpdDJcIilcbiAgICAgICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIC8gY2Mud2luU2l6ZS5oZWlnaHQgPCAxLjM1KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXQyMlwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gODU0IC8gaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjJcIikud2lkdGggPSAxNTYwIC8gY2hlY2s7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMlwiKS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IGNjLndpblNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gMTU2MCAvIHdpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjJcIikuaGVpZ2h0ID0gODU0IC8gY2hlY2s7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMlwiKS53aWR0aCA9IGNjLndpblNpemUud2lkdGg7XG4gICAgICAgICAgICB9XG5cblxuXG5cblxuXG5cblxuICAgICAgICB9XG4gICAgfVxuICAgIGZpdEltZygpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMC45XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NjYWxlID0gMVxuICAgICAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjFcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIyXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZml0U2l6ZUltZyh0cnVlKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRvaVwiKVxuXG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMS41XG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzU2NhbGUgPSAxLjVcblxuICAgICAgICAgICAgdGhpcy5lbmRjYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZW5kY2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZml0U2l6ZUltZyhmYWxzZSlcblxuXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=