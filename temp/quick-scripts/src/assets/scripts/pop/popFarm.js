"use strict";
cc._RF.push(module, '5a250io4rZFeYjzuRNosvUJ', 'popFarm');
// scripts/pop/popFarm.ts

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
        _this.current = 40;
        _this.fill = null;
        _this.lbFill = null;
        _this.isFill = 0;
        _this.isSuccess = false;
        _this.gamePlay = null;
        // onLoad () {}
        _this.isAnim = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.isFill = this.current;
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game28");
    };
    NewClass.prototype.updateFill = function () {
        var _this = this;
        if (this.isSuccess)
            return;
        this.isFill--;
        this.node.getComponent(cc.Animation).play("pop_hit");
        if (this.isFill == 0) {
            this.isSuccess = true;
            this.gamePlay.updateHouse();
        }
        this.lbFill.string = "x" + this.isFill.toString();
        cc.tween(this.fill).to(0.2, { fillRange: (this.current - this.isFill) / this.current }).call(function () {
            if (_this.isFill == 0 && _this.isSuccess == true && !_this.isAnim) {
                _this.isAnim = true;
                _this.node.getComponent(cc.Animation).play("pop_close");
            }
        }).start();
    };
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "current", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fill", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbFill", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();