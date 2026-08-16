
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/PlatformBrandIcon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxQbGF0Zm9ybUJyYW5kSWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQW1CQztRQWhCRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFHbkMsYUFBTyxHQUFtQixJQUFJLENBQUM7O1FBWS9CLGlCQUFpQjtJQUNyQixDQUFDO0lBWEcsaUNBQUssR0FBTDtRQUNJLDBEQUEwRDtRQUMxRCxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQy9EO2FBQ0ksSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzBEQUNVO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ007SUFOZCxpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQW1CckM7SUFBRCx3QkFBQztDQW5CRCxBQW1CQyxDQW5COEMsRUFBRSxDQUFDLFNBQVMsR0FtQjFEO2tCQW5Cb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUJyYW5kSWNvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgYW5kcm9pZEljb246IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBpb3NJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaW9zSWNvbjtcbiAgICAgICAgaWYoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5hbmRyb2lkSWNvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pb3NJY29uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==