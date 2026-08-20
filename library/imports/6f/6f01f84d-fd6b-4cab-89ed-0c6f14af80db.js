"use strict";
cc._RF.push(module, '6f01fhN/WtMq4ntDG8Ur4Db', 'time');
// Gym/Script/time.ts

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
        _this.label = null;
        _this.timeLeft = 60;
        _this.gamePlay = null;
        _this.isDone = false;
        _this.isCounting = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
        this.updateLabel();
    };
    NewClass.prototype.startCountDown = function () {
        if (this.isCounting || this.isDone)
            return;
        this.isCounting = true;
        this.schedule(this.tick, 1);
    };
    NewClass.prototype.addTime = function (sec) {
        if (this.isDone)
            return;
        this.timeLeft += sec;
        this.updateLabel();
    };
    NewClass.prototype.tick = function () {
        if (this.isDone)
            return;
        this.timeLeft--;
        this.updateLabel();
        if (this.timeLeft <= 0) {
            this.isDone = true;
            this.unschedule(this.tick);
            if (this.gamePlay) {
                this.gamePlay.onEndgame();
            }
        }
    };
    NewClass.prototype.updateLabel = function () {
        if (!this.label)
            return;
        var t = Math.max(0, this.timeLeft);
        var m = Math.floor(t / 60);
        var s = t % 60;
        this.label.string = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();