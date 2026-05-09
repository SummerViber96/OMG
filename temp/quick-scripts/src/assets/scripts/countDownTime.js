"use strict";
cc._RF.push(module, '503f30rkQVF87lkO+hKx7mV', 'countDownTime');
// scripts/countDownTime.ts

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
        _this.countDownNode = null; // node chứa label countdown
        _this.lbCountDown = null;
        _this.btnBeat = null;
        _this.gamePlay = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym3");
        this.showCountDown();
    };
    NewClass.prototype.showCountDown = function () {
        var _this = this;
        // Ẩn nút Beat lúc đầu
        this.btnBeat.active = false;
        // Hiện countdown
        this.countDownNode.active = true;
        var time = 3;
        this.lbCountDown.string = time.toString();
        // Scale pop effect
        this.playCountAnim();
        this.schedule(function () {
            time--;
            if (time > 0) {
                _this.lbCountDown.string = time.toString();
                _this.playCountAnim();
            }
            else {
                // Kết thúc countdown
                _this.unscheduleAllCallbacks();
                _this.countDownNode.active = false;
                // Hiện nút Beat
                // this.btnBeat.active = true;
                // Hiệu ứng nút Beat
                // this.btnBeat.scale = 0;
                _this.gamePlay.startMonster();
            }
        }, 1);
    };
    NewClass.prototype.playCountAnim = function () {
        this.countDownNode.scale = 0;
        cc.tween(this.countDownNode)
            .to(0.2, { scale: 1.3 }, { easing: "backOut" })
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
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();