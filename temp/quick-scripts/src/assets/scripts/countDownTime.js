"use strict";
cc._RF.push(module, '503f30rkQVF87lkO+hKx7mV', 'countDownTime');
// scripts/countDownTime.ts

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
        _this.countDownNode = null; // node chứa label countdown
        _this.lbCountDown = null;
        _this.btnBeat = null;
        _this.fillSprite = null;
        _this.fillNode = null;
        _this.soundCownDown = null;
        _this.gamePlay = null;
        _this.currentNumber = 3;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym3");
        cc.audioEngine.play(this.soundCownDown, false, 1);
        this.showCountDown();
    };
    NewClass.prototype.showCountDown = function () {
        this.btnBeat.active = false;
        this.countDownNode.active = true;
        this.currentNumber = 3;
        this.playStep();
    };
    NewClass.prototype.playStep = function () {
        var _this = this;
        // update số
        this.lbCountDown.string = this.currentNumber.toString();
        if (this.currentNumber == 0) {
            this.lbCountDown.string = "GO";
            this.lbCountDown.fontSize = 200;
        }
        // reset fill
        this.fillSprite.fillRange = 1;
        // pop số
        this.playCountAnim();
        // tween fill trong 1 giây
        cc.tween(this.fillSprite)
            .to(1, {
            fillRange: 0
        })
            .call(function () {
            _this.currentNumber--;
            // hết countdown
            if (_this.currentNumber < 0) {
                _this.countDownNode.active = false;
                _this.gamePlay.startMonster();
                return;
            }
            // chạy tiếp số tiếp theo
            _this.playStep();
        })
            .start();
    };
    NewClass.prototype.playCountAnim = function () {
        this.lbCountDown.node.scale = 0;
        cc.tween(this.lbCountDown.node)
            .to(0.2, { scale: 1.1 }, {
            easing: "backOut"
        })
            .to(0.1, { scale: 1 })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "countDownNode", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCountDown", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnBeat", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillSprite", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "fillNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCownDown", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();