"use strict";
cc._RF.push(module, '2147a0Ce3ZCdIsZ8wX2Vtd8', 'cusMission');
// cooking/ietm/cusMission.ts

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
        _this.bread = true;
        _this.hotDog = true;
        _this.chili = false;
        _this.count = 3;
        _this.lbCount = null;
        _this.pop = null;
        _this.anim = null;
        _this.isEnd = false;
        _this.gamePlay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameApp");
    };
    NewClass.prototype.checkBread = function (bread) {
        if (this.isEnd)
            return;
        var breadComp = bread.getComponent("preBread");
        if (this.hotDog == breadComp.isHotDog && this.chili == breadComp.isTuongCa) {
            this.updateMission();
        }
        else {
            this.isEnd = true;
            this.end(false);
            cc.audioEngine.play(this.gamePlay.soundWrong, false, 1);
        }
    };
    NewClass.prototype.updateMission = function () {
        this.count--;
        this.anim.setAnimation(0, "8.happy", true);
        if (this.count == 0) {
            this.isEnd = true;
            this.end(true);
        }
    };
    NewClass.prototype.end = function (value) {
        var _this = this;
        this.gamePlay.successCus();
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.gamePlay.soundClosePop, false, 1);
            cc.tween(_this.pop).to(0.3, { scale: 0 }).start();
            cc.tween(_this.node).to(0.8, { position: cc.v3(-700, 123.591) }).call(function () {
                _this.node.active = false;
                _this.gamePlay.nextCus();
            }).start();
        }, 0.5);
        if (value == true) {
            this.anim.setAnimation(0, "8.happy", false);
        }
        else {
            this.anim.setAnimation(0, "7.angry_idle", false);
        }
    };
    NewClass.prototype.update = function (dt) {
        // this.lbCount.string = this.count.toString()
    };
    NewClass.prototype.happy = function () {
        var _this = this;
        this.anim.setAnimation(0, "happy1.5s", false);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "idle", true);
        }, 1);
    };
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "bread", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "hotDog", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "chili", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "count", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCount", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();