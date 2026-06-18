"use strict";
cc._RF.push(module, '0549b2VqQZO8qC7cTcszRvF', 'coca');
// RecipeRush/scripts/coca.ts

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
        _this.anim = null;
        _this.fillTime = null;
        _this.clock = null;
        _this.isCoca = false;
        _this.isCooking = false;
        _this.isChin = false;
        _this.time = 0.8;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.isBusy = function () {
        return this.isCooking || this.isCoca;
    };
    NewClass.prototype.cooking = function () {
        var _this = this;
        if (this.isBusy())
            return;
        this.isCooking = true;
        this.isChin = false;
        this.anim.setAnimation(0, "lv2-active", false);
        this.clock.active = true;
        this.fillTime.fillRange = 0;
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(function () {
            _this.clock.active = false;
            _this.isCooking = false;
            _this.isChin = true;
            _this.readyCoca();
        }).start();
    };
    NewClass.prototype.readyCoca = function () {
        this.isCoca = true;
        // this.anim
    };
    NewClass.prototype.getCoca = function () {
        this.anim.setAnimation(0, "lv2-idle", false);
        this.isChin = false;
        this.isCoca = false;
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "clock", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();