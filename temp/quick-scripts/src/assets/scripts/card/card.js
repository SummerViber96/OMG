"use strict";
cc._RF.push(module, 'b1f20Yp6IdEAoyJul3yVeJ8', 'card');
// scripts/card/card.ts

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
        _this.iconImg = null;
        _this.imgOn = null;
        _this.imgOff = null;
        _this.lbTitle = null;
        _this.lbCurrent = null;
        _this.current = 1;
        _this.isFirst = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        // this.setOff()
    };
    NewClass.prototype.setOn = function () {
        if (!this.isFirst) {
            this.isFirst = true;
            this.node.getChildByName("hand").active = true;
        }
        this.iconImg.spriteFrame = this.imgOn;
        this.lbTitle.color = cc.color().fromHEX("#824420");
        this.lbCurrent.color = cc.color().fromHEX("#824420");
    };
    NewClass.prototype.clickOff = function () {
        this.node.getChildByName("hand").active = false;
    };
    NewClass.prototype.setOff = function () {
        this.iconImg.spriteFrame = this.imgOff;
        this.lbTitle.color = cc.color().fromHEX("#515151");
        this.lbCurrent.color = cc.color().fromHEX("#515151");
    };
    NewClass.prototype.update = function (dt) {
        this.lbCurrent.getComponent(cc.Label).string = this.current.toString();
        if (globalThis.ruby >= this.current) {
            this.setOn();
        }
        else {
            this.setOff();
        }
    };
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "iconImg", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "imgOn", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "imgOff", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lbTitle", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lbCurrent", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "current", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();