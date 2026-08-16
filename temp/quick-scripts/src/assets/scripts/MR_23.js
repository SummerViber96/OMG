"use strict";
cc._RF.push(module, '466c2hSJ7hD1qTOfyqF8ud8', 'MR_23');
// scripts/MR_23.ts

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
globalThis.money = 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainCamera = null;
        _this.mainCamera2 = null;
        _this.lbMoneyCollect = null;
        _this.listUnlock = null;
        _this.listPop = null;
        _this.hand = null;
        _this.hand2 = null;
        _this.preMoney = null;
        _this.lbMoney = null;
        _this.linkToStore = null;
        _this.preSpawMoney = null;
        _this.btnCollect = null;
        _this.soundBg = null;
        _this.soundUd = null;
        _this.soundMoney = null;
        _this.soundShow = null;
        _this.listKH3 = null;
        _this.listKH1 = null;
        _this.currentBar = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.isMoneyCollect = 50;
        _this.isUnlock = 0;
        _this.isUpgrade = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.5);
        this.createMoney(cc.v3(0, 50));
        this.createMoney(cc.v3(214, 480));
    };
    NewClass.prototype.spawMoney = function () {
        var _loop_1 = function (i) {
            var money = cc.instantiate(this_1.preSpawMoney);
            money.parent = this_1.btnCollect.parent;
            var posEnd = this_1.lbMoney.node.parent.position;
            var pos = this_1.btnCollect.position;
            money.position = pos;
            var rdx = Math.floor(Math.random() * 400) - 200;
            var rdy = Math.floor(Math.random() * 400) - 200;
            var pos2 = cc.v3(pos.x + rdx, pos.y + rdy);
            cc.tween(money).to(0.2, { position: pos2 }).to(0.5, { position: posEnd }).call(function () {
                money.destroy();
            }).start();
        };
        var this_1 = this;
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.btn_collect = function () {
        this.hand.active = false;
        var count = this.isMoneyCollect;
        this.isMoneyCollect = 0;
        this.scheduleOnce(function () {
            globalThis.money += count;
        }, 0.7);
        if (count > 0) {
            this.spawMoney();
            cc.audioEngine.play(this.soundMoney, false, 1);
        }
        if (!this.isUpgrade) {
            if (this.isUnlock == 0) {
                if (this.isUnlock == 0) {
                    this.zoomCam(1);
                    this.isUnlock = 1;
                }
            }
            else if (this.isUnlock == 1) {
                if (this.isUnlock == 1 && globalThis.money >= 75) {
                    this.zoomCam(2);
                    this.isUnlock = 2;
                }
            }
            else if (this.isUnlock == 2) {
                if (this.isUnlock == 2 && globalThis.money >= 400) {
                    this.zoomCam(3);
                    this.isUnlock = 3;
                }
            }
            else if (this.isUnlock == 3) {
                console.log("zoom 4");
                if (this.isUnlock == 3 && globalThis.money >= 1200) {
                    this.zoomCam(4);
                    this.isUnlock = 5;
                }
            }
        }
        // else if (this.isUnlock == 3) {
        //     if (this.isUnlock == 3 && globalThis.money >= 1200) {
        //         this.zoomCam(4)
        //         this.isUnlock = 4;
        //     }
        // }
    };
    NewClass.prototype.update = function (dt) {
        this.lbMoney.string = globalThis.money.toString();
        this.lbMoneyCollect.string = this.isMoneyCollect.toString();
        this.responsive();
    };
    NewClass.prototype.setScreenSize = function (isHorizontal) {
        this.node.getComponent(cc.Canvas).fitWidth = (isHorizontal) ? false : true;
        this.node.getComponent(cc.Canvas).fitHeight = (isHorizontal) ? true : false;
    };
    NewClass.prototype.responsive = function () {
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width >= deviceResolution.height) {
            this.setScreenSize(true);
            this.mainCamera.node.active = false;
            this.mainCamera2.node.active = true;
            this.btnCollect.scale = 1.5;
            this.currentBar.scale = 0.9;
        }
        else if (deviceResolution.width < deviceResolution.height) {
            this.setScreenSize(false);
            this.mainCamera.node.active = true;
            this.mainCamera2.node.active = false;
            this.btnCollect.scale = 1;
            this.currentBar.scale = 0.6;
        }
    };
    NewClass.prototype.btn_unlock = function (event, value) {
        var _this = this;
        event.currentTarget.parent.getComponent(cc.Animation).play("tag_close");
        cc.audioEngine.play(this.soundUd, false, 1);
        switch (value) {
            case "1":
                this.unlockNode(this.listUnlock.children[0]);
                globalThis.money -= 25;
                this.createMoney(cc.v3(-123, -155));
                this.scheduleOnce(function () {
                    _this.createMoney(cc.v3(-240, -226));
                }, 0.8);
                this.scheduleOnce(function () {
                    _this.createMoney(cc.v3(100, -226));
                }, 1);
                this.listKH1.active = true;
                break;
            case "2":
                this.unlockNode(this.listUnlock.children[1]);
                this.createMoney(cc.v3(524, -349));
                globalThis.money -= 75;
                this.createMoney(cc.v3(524, -349));
                // this.createMoney(cc.v3(-123, -155))
                this.scheduleOnce(function () {
                    _this.createMoney(cc.v3(645, -524));
                    _this.createMoney(cc.v3(524, -349));
                }, 0.8);
                break;
            case "3":
                this.unlockNode(this.listUnlock.children[2]);
                // this.createMoney(cc.v3(-123, -155))
                // this.scheduleOnce(() => {
                //     this.createMoney(cc.v3(-240, -226))
                // }, 0.8)
                break;
            case "4":
                this.unlockNode(this.listUnlock.children[3]);
                globalThis.money -= 400;
                this.createMoney(cc.v3(-147, 434));
                this.createMoney(cc.v3(-388, 498));
                this.scheduleOnce(function () {
                    _this.createMoney(cc.v3(135, 441));
                    _this.listKH3.active = true;
                }, 0.8);
                break;
        }
    };
    NewClass.prototype.createMoney = function (pos) {
        var _this = this;
        this.schedule(function () {
            cc.audioEngine.play(_this.soundMoney, false, 1);
            var money = cc.instantiate(_this.preMoney);
            money.parent = _this.node;
            money.position = pos;
            money.group = "cam";
            _this.scheduleOnce(function () {
                _this.isMoneyCollect += 25;
            }, 0.2);
        }, 2);
    };
    NewClass.prototype.zoomCam = function (value) {
        var _this = this;
        this.isUpgrade = true;
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.soundShow, false, 1);
        }, 0.4);
        switch (value) {
            case 1:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(function () {
                    // this.listPop.children[0].active = true
                }).start();
                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(function () {
                }).start();
                this.scheduleOnce(function () {
                    _this.listPop.children[0].active = true;
                }, 0.3);
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-100, 0) }).delay(0.15).call(function () {
                    // this.listPop.children[0].active = true
                    _this.hand2.active = true;
                }).start();
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(-100, -100) }).delay(0.15).call(function () {
                    // this.listPop.children[0].active = true
                    _this.hand2.active = true;
                }).start();
                break;
            case 2:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(function () {
                }).start();
                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(function () {
                }).start();
                this.scheduleOnce(function () {
                    _this.listPop.children[1].active = true;
                }, 0.3);
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(481, -250) }).delay(0.15).call(function () {
                    // this.hand2.active = true
                }).start();
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(400, -350) }).delay(0.15).call(function () {
                    // this.hand2.active = true
                }).start();
                break;
            case 3:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(function () {
                }).start();
                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(function () {
                }).start();
                this.scheduleOnce(function () {
                    _this.listPop.children[2].active = true;
                }, 0.3);
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-69, 350) }).delay(0.15).call(function () {
                }).start();
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(-69, 350) }).delay(0.15).call(function () {
                }).start();
                break;
            case 4:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(function () {
                }).start();
                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(function () {
                }).start();
                this.scheduleOnce(function () {
                    _this.listPop.children[3].active = true;
                }, 0.3);
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(402, 166) }).delay(0.15).call(function () {
                    _this.linkToStore.active = true;
                }).start();
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(402, 300) }).delay(0.15).call(function () {
                    _this.linkToStore.active = true;
                }).start();
                break;
        }
    };
    NewClass.prototype.unlockNode = function (node) {
        var _this = this;
        node.active = true;
        var _loop_2 = function (i) {
            this_2.scheduleOnce(function () {
                node.children[i].active = true;
                if (i == node.childrenCount - 1) {
                    _this.scheduleOnce(function () {
                        _this.zoomBack();
                    }, 0.5);
                }
            }, i * 0.05);
        };
        var this_2 = this;
        for (var i = 0; i < node.childrenCount; i++) {
            _loop_2(i);
        }
    };
    NewClass.prototype.zoomBack = function () {
        var _this = this;
        cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1 }).start();
        cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 1.5 }).start();
        cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(0, 0) }).call(function () {
            _this.isUpgrade = false;
        }).start();
        cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(0, 0) }).call(function () {
            _this.isUpgrade = false;
        }).start();
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera2", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbMoneyCollect", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listUnlock", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listPop", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand2", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preMoney", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbMoney", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preSpawMoney", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnCollect", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundMoney", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundShow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKH3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKH1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "currentBar", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();