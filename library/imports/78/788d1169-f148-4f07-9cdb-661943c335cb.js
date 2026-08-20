"use strict";
cc._RF.push(module, '788d1Fp8UhPB5zbZhlDwzXL', 'pt');
// Gym/Script/pt.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.anim = null;
        _this.tag = 0;
        _this.gamePlay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
    };
    NewClass.prototype.moveIn = function (fncDone) {
        var _this = this;
        this.node.active = true;
        var anim = this.anim;
        anim.setAnimation(0, "WalkOutL", true);
        anim.timeScale = 2;
        switch (this.tag) {
            case 0:
                cc.tween(this.node).to(2.6, { position: cc.v3(-1.6, -92) }).to(0.5, { position: cc.v3(-100, -80) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 1: //may day ta 1
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).call(function () {
                    _this.node.scaleX = -1;
                }).to(2, { position: cc.v3(698.565, -184.59) }).call(function () {
                    _this.node.scaleX = 1;
                }).to(1.5, { position: cc.v3(348.565, -333) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 2: //may boxing
                anim.setAnimation(0, "WalkOutL", true);
                anim.timeScale = 2;
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).call(function () {
                    _this.node.scaleX = -1;
                }).to(2, { position: cc.v3(850, -120) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    _this.node.scaleX = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 3: //may day ta 2
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).call(function () {
                    _this.node.scaleX = -1;
                }).to(2, { position: cc.v3(698.565, -184.59) }).call(function () {
                    _this.node.scaleX = 1;
                }).to(0.6, { position: cc.v3(572, -203) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 4: // may day 2
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).to(0.5, { position: cc.v3(442, -35) }).to(0.8, { position: cc.v3(267, -146) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 5: //may day3
                cc.tween(this.node).to(1.5, { position: cc.v3(86, -10) }).to(0.5, { position: cc.v3(40, 14) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 6: //may day3
                cc.tween(this.node).to(1, { position: cc.v3(182.844, 90) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
        }
    };
    NewClass.prototype.moveOut = function () {
        var _this = this;
        var anim = this.anim;
        anim.setAnimation(0, "WalkOutL", true);
        switch (this.tag) {
            case 0:
                this.node.scaleX = -1;
                cc.tween(this.node).to(0.5, { position: cc.v3(-1.6, -92) }).to(2.6, { position: cc.v3(382, 120) }).call(function () {
                    _this.node.active = false;
                }).start();
                this.scheduleOnce(function () {
                    _this.gamePlay.openDoor();
                }, 2.6);
                break;
            case 1:
                this.node.scaleX = -1;
                cc.tween(this.node).to(1.5, { position: cc.v3(698.565, -184.59) }).call(function () {
                    _this.node.scaleX = 1;
                }).to(2, { position: cc.v3(310, 52) }).call(function () {
                    _this.node.scaleX = -1;
                }).to(0.4, { position: cc.v3(382, 120) }).call(function () {
                    _this.node.active = false;
                }).start();
                this.scheduleOnce(function () {
                    _this.gamePlay.openDoor();
                }, 3.5);
                break;
            case 2:
                this.node.scaleX = 1;
                cc.tween(this.node).to(2, { position: cc.v3(310, 52) }).call(function () {
                    _this.node.scaleX = -1;
                }).to(0.4, { position: cc.v3(382, 120) }).call(function () {
                    _this.node.active = false;
                }).start();
                this.scheduleOnce(function () {
                    _this.gamePlay.openDoor();
                }, 2);
                break;
        }
    };
    NewClass.prototype.update = function (dt) {
        // this.node.zIndex=-this.node.y
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();