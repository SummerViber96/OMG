"use strict";
cc._RF.push(module, '02049SD+R5F+KTmBtZC0ZwB', 'cusGym');
// Gym/Script/cusGym.ts

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
        _this.pop = null;
        _this.anim = null;
        _this.soundHappy = null;
        _this.countTime = 0;
        _this.fillBar = null;
        _this.fillYellow = null;
        _this.fillRed = null;
        _this.tag = 0;
        _this.gamePlay = null;
        _this.isSuccess = false;
        _this.isCountingDown = false;
        _this.fillBarColorState = 0;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
    };
    NewClass.prototype.countDown = function () {
        var _this = this;
        this.fillBar.node.parent.active = true;
        this.isCountingDown = true;
        this.fillBarColorState = 0;
        cc.tween(this.fillBar).to(this.countTime, { fillRange: 0 }).call(function () {
            _this.isCountingDown = false;
            if (!_this.isSuccess) {
                _this.gamePlay.cusOut(_this.node);
                _this.pop.active = false;
            }
        }).start();
    };
    NewClass.prototype.moveByEnd = function () {
        var _this = this;
        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).by(1, { position: cc.v3(-120, 50) }).call(function () {
            _this.anim.setAnimation(0, "Waiting2", true);
            _this.pop.active = true;
        }).start();
    };
    NewClass.prototype.walk = function (time, pos) {
        this.pop.active = false;
        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).by(time, { position: pos }).call(function () {
        }).start();
    };
    NewClass.prototype.updateFillBarColor = function () {
        if (!this.isCountingDown)
            return;
        var range = this.fillBar.fillRange;
        if (range < 0.2 && this.fillBarColorState < 2) {
            this.fillBar.spriteFrame = this.fillRed;
            this.fillBarColorState = 2;
        }
        else if (range < 0.5 && this.fillBarColorState < 1) {
            this.fillBar.spriteFrame = this.fillYellow;
            this.fillBarColorState = 1;
            this.anim.setAnimation(0, "Waiting3", true);
        }
    };
    NewClass.prototype.showMision = function () {
        this.pop.getComponent(cc.Animation).play();
    };
    NewClass.prototype.move = function (pos, time) {
        var _this = this;
        this.anim.setAnimation(0, "WalkInL", true);
        cc.tween(this.node).to(time, { position: pos }).call(function () {
            _this.anim.setAnimation(0, "IdleBL", true);
        }).start();
    };
    NewClass.prototype.move3 = function (pos, time) {
        var _this = this;
        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).to(time, { position: pos }).call(function () {
            _this.anim.setAnimation(0, "IdleBL", true);
        }).start();
    };
    NewClass.prototype.move2 = function (pos, time) {
        // this.anim.setAnimation(0, "WalkInR", true);
        cc.tween(this.node).to(time, { position: pos }).call(function () {
            // this.anim.setAnimation(0, "Waiting3", true);
        }).start();
    };
    NewClass.prototype.sit = function () {
        this.node.scaleX = 1;
        this.anim.setAnimation(0, "Sit_Waiting", true);
    };
    NewClass.prototype.showPop = function () {
        this.pop.active = true;
        this.pop.getComponent(cc.Animation).play();
        // this.pop.getChildByName("hand").active = true
    };
    NewClass.prototype.clickPop = function (event, value) {
        console.log("clcik pop");
        event.currentTarget.getComponent(cc.Button).enabled = false;
        // console.log("click pop")
        var btn = event.currentTarget;
        btn.getComponent(cc.Button).enabled = false;
        cc.tween(this.pop).to(0.2, { scale: 0 }).start();
        this.gamePlay.doCus(this.tag);
    };
    NewClass.prototype.gapBung = function () {
        this.anim.setAnimation(0, "Abdominal", true);
    };
    NewClass.prototype.ngoiTho = function () {
        this.anim.setAnimation(0, "Abdominal_Tired", true);
    };
    NewClass.prototype.dayTa = function () {
        this.anim.setAnimation(0, "AbCrunch", true);
    };
    NewClass.prototype.tucGian = function () {
        console.log("tuc gian");
        this.anim.setAnimation(0, "Waiting3", true);
    };
    NewClass.prototype.happy = function () {
        // if (this.soundHappy) {
        //     cc.audioEngine.play(this.soundHappy, false, 1)
        //     th
        // }
        this.anim.setAnimation(0, "HappyOut", false);
        cc.tween(this.pop).to(0.2, { scale: 0 }).start();
        this.node.getChildByName("notiBonusCoin2").active = true;
    };
    NewClass.prototype.smile = function () {
        console.log("smile");
        this.isCountingDown = false;
        this.fillBar.node.parent.active = false;
        this.isSuccess = true;
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 1);
        }
    };
    NewClass.prototype.smile2 = function () {
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 1);
        }
    };
    NewClass.prototype.moveToWait = function () {
        var _this = this;
        this.anim.setAnimation(0, "WalkInR", true);
        this.move2(cc.v3(324, -8), 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "WalkOutR", true);
            _this.move2(cc.v3(157, 29), 1);
        }, 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "Waiting2", true);
            _this.pop.active = true;
        }, 2);
    };
    NewClass.prototype.moveToWait2 = function () {
        var _this = this;
        this.anim.setAnimation(0, "WalkInR", true);
        this.move2(cc.v3(324, -8), 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "WalkOutR", true);
            _this.move2(cc.v3(60, 29), 1);
        }, 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "Waiting3", true);
        }, 2);
    };
    NewClass.prototype.moveToWait3 = function () {
        var _this = this;
        this.anim.setAnimation(0, "WalkInR", true);
        this.move2(cc.v3(324, -8), 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "WalkOutR", true);
            _this.move2(cc.v3(-150, -80), 2);
        }, 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "Waiting3", true);
            _this.pop.active = true;
            _this.gamePlay.showMissionBoxing();
            _this.countDown();
        }, 3.2);
    };
    NewClass.prototype.boxing = function () {
        this.anim.setAnimation(0, "Boxing", true);
        this.node.scaleX = 1;
    };
    NewClass.prototype.moveOut = function () {
        var _this = this;
        this.isSuccess = true;
        this.isCountingDown = false;
        this.fillBar.node.parent.active = false;
        this.anim.setAnimation(0, "WalkInL", true);
        cc.tween(this.node).to(2.5, { position: cc.v3(392, 74) }).call(function () {
            _this.node.active = false;
        }).start();
    };
    NewClass.prototype.moveOut2 = function () {
        var _this = this;
        this.isSuccess = true;
        this.isCountingDown = false;
        this.fillBar.node.parent.active = false;
        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).to(1, { position: cc.v3(101, -143) }).call(function () {
            _this.anim.setAnimation(0, "WalkInR", true);
        }).to(2, { position: cc.v3(392, 74) }).call(function () {
            _this.node.active = false;
        }).start();
    };
    NewClass.prototype.update = function () {
        this.updateFillBarColor();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHappy", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "countTime", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillBar", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "fillYellow", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "fillRed", void 0);
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