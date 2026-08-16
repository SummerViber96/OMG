"use strict";
cc._RF.push(module, 'a1aebTC/s9JN7qL7y4mT76t', 'PlatformBrandIcon');
// scripts/common/PlatformBrandIcon.ts

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
var PlatformBrandIcon = /** @class */ (function (_super) {
    __extends(PlatformBrandIcon, _super);
    function PlatformBrandIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.androidIcon = null;
        _this.iosIcon = null;
        return _this;
        // update (dt) {}
    }
    PlatformBrandIcon.prototype.start = function () {
        //this.getComponent(cc.Sprite).spriteFrame = this.iosIcon;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            this.getComponent(cc.Sprite).spriteFrame = this.androidIcon;
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            this.getComponent(cc.Sprite).spriteFrame = this.iosIcon;
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], PlatformBrandIcon.prototype, "androidIcon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PlatformBrandIcon.prototype, "iosIcon", void 0);
    PlatformBrandIcon = __decorate([
        ccclass
    ], PlatformBrandIcon);
    return PlatformBrandIcon;
}(cc.Component));
exports.default = PlatformBrandIcon;

cc._RF.pop();