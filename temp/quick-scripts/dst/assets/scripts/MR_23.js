
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MR_23.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTVJfMjMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7QUFDZCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJUQztRQXpURyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxJQUFJLENBQUE7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBYyxJQUFJLENBQUE7UUFFOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGVBQVMsR0FBaUIsSUFBSSxDQUFBO1FBRTlCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixjQUFRLEdBQUcsOEJBQThCLENBQUE7UUFFekMsb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGVBQVMsR0FBRyxLQUFLLENBQUE7O0lBZ1JyQixDQUFDO0lBL1FHLHdCQUFLLEdBQUw7UUFDSSxJ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QUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdkYsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEYsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ1YsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzRCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDVixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM1RCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDVixJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQzFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDUCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFF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OiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5nbG9iYWxUaGlzLm1vbmV5ID0gMFxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgbWFpbkNhbWVyYTI6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTW9uZXlDb2xsZWN0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdFVubG9jazogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdFBvcDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kMjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZU1vbmV5OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk1vbmV5OiBjYy5MYWJlbCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVTcGF3TW9uZXk6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5Db2xsZWN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRNb25leTogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRTaG93OiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEtIMzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEtIMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY3VycmVudEJhcjogY2MuTm9kZSA9IG51bGw7XG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcblxuICAgIGlzTW9uZXlDb2xsZWN0ID0gNTA7XG4gICAgaXNVbmxvY2sgPSAwO1xuICAgIGlzVXBncmFkZSA9IGZhbHNlXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxuICAgICAgICB0aGlzLmNyZWF0ZU1vbmV5KGNjLnYzKDAsIDUwKSlcbiAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52MygyMTQsIDQ4MCkpXG4gICAgICAgXG4gICAgfVxuICAgIHNwYXdNb25leSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbW9uZXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVNwYXdNb25leSlcbiAgICAgICAgICAgIG1vbmV5LnBhcmVudCA9IHRoaXMuYnRuQ29sbGVjdC5wYXJlbnRcbiAgICAgICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmxiTW9uZXkubm9kZS5wYXJlbnQucG9zaXRpb25cbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmJ0bkNvbGxlY3QucG9zaXRpb25cbiAgICAgICAgICAgIG1vbmV5LnBvc2l0aW9uID0gcG9zXG5cbiAgICAgICAgICAgIGxldCByZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0MDApIC0gMjAwXG4gICAgICAgICAgICBsZXQgcmR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDAwKSAtIDIwMFxuICAgICAgICAgICAgbGV0IHBvczIgPSBjYy52Myhwb3MueCArIHJkeCwgcG9zLnkgKyByZHkpXG4gICAgICAgICAgICBjYy50d2Vlbihtb25leSkudG8oMC4yLCB7IHBvc2l0aW9uOiBwb3MyIH0pLnRvKDAuNSwgeyBwb3NpdGlvbjogcG9zRW5kIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vbmV5LmRlc3Ryb3koKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGJ0bl9jb2xsZWN0KCkge1xuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5pc01vbmV5Q29sbGVjdFxuICAgICAgICB0aGlzLmlzTW9uZXlDb2xsZWN0ID0gMFxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbFRoaXMubW9uZXkgKz0gY291bnQ7XG4gICAgICAgIH0sIDAuNylcblxuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwYXdNb25leSgpXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRNb25leSwgZmFsc2UsIDEpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBncmFkZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmxvY2sgPT0gMCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmxvY2sgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb21DYW0oMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1VubG9jayA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1VubG9jayA9PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmxvY2sgPT0gMSAmJiBnbG9iYWxUaGlzLm1vbmV5ID49IDc1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbUNhbSgyKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVW5sb2NrID0gMjtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNVbmxvY2sgPT0gMikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVW5sb2NrID09IDIgJiYgZ2xvYmFsVGhpcy5tb25leSA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tQ2FtKDMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVbmxvY2sgPSAzO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1VubG9jayA9PSAzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ6b29tIDRcIilcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1VubG9jayA9PSAzICYmIGdsb2JhbFRoaXMubW9uZXkgPj0gMTIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb21DYW0oNClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1VubG9jayA9IDU7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLmlzVW5sb2NrID09IDMpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmlzVW5sb2NrID09IDMgJiYgZ2xvYmFsVGhpcy5tb25leSA+PSAxMjAwKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy56b29tQ2FtKDQpXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc1VubG9jayA9IDQ7XG5cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5sYk1vbmV5LnN0cmluZyA9IGdsb2JhbFRoaXMubW9uZXkudG9TdHJpbmcoKVxuICAgICAgICB0aGlzLmxiTW9uZXlDb2xsZWN0LnN0cmluZyA9IHRoaXMuaXNNb25leUNvbGxlY3QudG9TdHJpbmcoKVxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcblxuICAgIH1cbiAgICBzZXRTY3JlZW5TaXplKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0V2lkdGggPSAoaXNIb3Jpem9udGFsKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IChpc0hvcml6b250YWwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXNwb25zaXZlKCkge1xuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoID49IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFNjcmVlblNpemUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhMi5ub2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuYnRuQ29sbGVjdC5zY2FsZSA9IDEuNVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmFyLnNjYWxlPTAuOVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW5TaXplKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYTIubm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5idG5Db2xsZWN0LnNjYWxlID0gMVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmFyLnNjYWxlPTAuNlxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgYnRuX3VubG9jayhldmVudCwgdmFsdWUpIHtcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInRhZ19jbG9zZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgdGhpcy51bmxvY2tOb2RlKHRoaXMubGlzdFVubG9jay5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5tb25leSAtPSAyNVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoLTEyMywgLTE1NSkpXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1vbmV5KGNjLnYzKC0yNDAsIC0yMjYpKVxuICAgICAgICAgICAgICAgIH0sIDAuOClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoMTAwLCAtMjI2KSlcbiAgICAgICAgICAgICAgICB9LCAxKVxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEtIMS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZSh0aGlzLmxpc3RVbmxvY2suY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoNTI0LCAtMzQ5KSlcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLm1vbmV5IC09IDc1XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52Myg1MjQsIC0zNDkpKVxuXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jcmVhdGVNb25leShjYy52MygtMTIzLCAtMTU1KSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoNjQ1LCAtNTI0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52Myg1MjQsIC0zNDkpKVxuXG4gICAgICAgICAgICAgICAgfSwgMC44KVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZSh0aGlzLmxpc3RVbmxvY2suY2hpbGRyZW5bMl0pO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoLTEyMywgLTE1NSkpXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmNyZWF0ZU1vbmV5KGNjLnYzKC0yNDAsIC0yMjYpKVxuXG4gICAgICAgICAgICAgICAgLy8gfSwgMC44KVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZSh0aGlzLmxpc3RVbmxvY2suY2hpbGRyZW5bM10pO1xuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMubW9uZXkgLT0gNDAwXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52MygtMTQ3LCA0MzQpKVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoLTM4OCwgNDk4KSlcblxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52MygxMzUsIDQ0MSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEtIMy5hY3RpdmUgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICB9LCAwLjgpXG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVNb25leShwb3MpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRNb25leSwgZmFsc2UsIDEpO1xuXG4gICAgICAgICAgICBsZXQgbW9uZXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZU1vbmV5KVxuICAgICAgICAgICAgbW9uZXkucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgbW9uZXkucG9zaXRpb24gPSBwb3NcbiAgICAgICAgICAgIG1vbmV5Lmdyb3VwID0gXCJjYW1cIlxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNNb25leUNvbGxlY3QgKz0gMjVcbiAgICAgICAgICAgIH0sIDAuMilcbiAgICAgICAgfSwgMilcblxuICAgIH1cbiAgICB6b29tQ2FtKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNVcGdyYWRlID0gdHJ1ZVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93LCBmYWxzZSwgMSlcbiAgICAgICAgfSwgMC40KVxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAxLjUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGlzdFBvcC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMikudG8oMC4zLCB7IHpvb21SYXRpbzogMi41IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvcC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTEwMCwgMCkgfSkuZGVsYXkoMC4xNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGlzdFBvcC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTEwMCwgLTEwMCkgfSkuZGVsYXkoMC4xNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGlzdFBvcC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDEuNSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMikudG8oMC4zLCB7IHpvb21SYXRpbzogMi41IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvcC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDQ4MSwgLTI1MCkgfSkuZGVsYXkoMC4xNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaGFuZDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoNDAwLCAtMzUwKSB9KS5kZWxheSgwLjE1KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5oYW5kMi5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMS41IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0UG9wLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9LCAwLjMpXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTY5LCAzNTApIH0pLmRlbGF5KDAuMTUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTY5LCAzNTApIH0pLmRlbGF5KDAuMTUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDEuNSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMikudG8oMC4zLCB7IHpvb21SYXRpbzogMi41IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvcC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDQwMiwgMTY2KSB9KS5kZWxheSgwLjE1KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52Myg0MDIsIDMwMCkgfSkuZGVsYXkoMC4xNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bmxvY2tOb2RlKG5vZGUpIHtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gbm9kZS5jaGlsZHJlbkNvdW50IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb21CYWNrKClcblxuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgaSAqIDAuMDUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgem9vbUJhY2soKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIpLnRvKDAuMywgeyB6b29tUmF0aW86IDEuNSB9KS5zdGFydCgpXG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzVXBncmFkZSA9IGZhbHNlXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMi5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1VwZ3JhZGUgPSBmYWxzZVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxufVxuIl19