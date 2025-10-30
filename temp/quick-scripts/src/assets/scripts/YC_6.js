"use strict";
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