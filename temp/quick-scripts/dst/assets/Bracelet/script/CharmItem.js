
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bracelet/script/CharmItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df87cEtnrNKK6JWFrvQKRZl', 'CharmItem');
// Bracelet/script/CharmItem.ts

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
var CharmItem = /** @class */ (function (_super) {
    __extends(CharmItem, _super);
    function CharmItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listImg = [];
        _this.tag = 0;
        _this.colorIndex = 0;
        _this.colorIMG = 0;
        /** Điểm neo treo lên dây — đặt node con tên hangPoint ở đỉnh charm. */
        _this.hangPoint = null;
        /** Khoảng cách tối thiểu trên dây khi thả charm này (theo path). */
        _this.slotSpacing = 130;
        /** Callback va chạm khi charm đang treo trên vòng (CordRoundGame gắn). */
        _this.onCordBeginContact = null;
        return _this;
    }
    /** Cocos gọi khi RigidBody.enabledContactListener = true. */
    CharmItem.prototype.onBeginContact = function (_contact, _selfCollider, otherCollider) {
        if (this.onCordBeginContact) {
            this.onCordBeginContact(otherCollider);
        }
    };
    CharmItem.prototype.loadIMG = function (id, tag) {
        this.colorIndex = id;
        this.colorIMG = this.listImg[id];
        this.node.children[0].getComponent(cc.Sprite).spriteFrame = this.listImg[id];
    };
    CharmItem.prototype.getColor = function () {
        return this.colorIMG;
    };
    CharmItem.prototype.getHangLocalOffset = function () {
        var hang = this.hangPoint
            || this.node.getChildByName('hangPoint')
            || this.node.getChildByName('hookNode');
        if (hang) {
            return cc.v2(hang.x, hang.y);
        }
        var icon = this.node.getChildByName('icon');
        if (icon) {
            var h = icon.height * Math.abs(icon.scaleY);
            var ay = icon.anchorY;
            return cc.v2(0, h * (1 - ay));
        }
        return cc.v2(0, 55);
    };
    __decorate([
        property(cc.SpriteFrame)
    ], CharmItem.prototype, "listImg", void 0);
    __decorate([
        property(cc.Integer)
    ], CharmItem.prototype, "tag", void 0);
    __decorate([
        property(cc.Node)
    ], CharmItem.prototype, "hangPoint", void 0);
    __decorate([
        property
    ], CharmItem.prototype, "slotSpacing", void 0);
    CharmItem = __decorate([
        ccclass('CharmItem')
    ], CharmItem);
    return CharmItem;
}(cc.Component));
exports.default = CharmItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ2hhcm1JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBdURDO1FBcERHLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRS9CLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFDUCxnQkFBVSxHQUFHLENBQUMsQ0FBQTtRQUNkLGNBQVEsR0FBRyxDQUFDLENBQUE7UUFDWix1RUFBdUU7UUFFdkUsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixvRUFBb0U7UUFFcEUsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFFMUIsMEVBQTBFO1FBQzFFLHdCQUFrQixHQUF5RCxJQUFJLENBQUM7O0lBc0NwRixDQUFDO0lBcENHLDZEQUE2RDtJQUM3RCxrQ0FBYyxHQUFkLFVBQ0ksUUFBYSxFQUNiLGFBQWlDLEVBQ2pDLGFBQWlDO1FBRWpDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFFRCwyQkFBTyxHQUFQLFVBQVEsRUFBVSxFQUFFLEdBQUc7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNELDRCQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQUNELHNDQUFrQixHQUFsQjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTO2VBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztlQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksRUFBRTtZQUNOLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUVELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FDTTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzBDQUNkO0lBS1A7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUkxQjtRQURDLFFBQVE7a0RBQ2lCO0lBZFQsU0FBUztRQUQ3QixPQUFPLENBQUMsV0FBVyxDQUFDO09BQ0EsU0FBUyxDQXVEN0I7SUFBRCxnQkFBQztDQXZERCxBQXVEQyxDQXZEc0MsRUFBRSxDQUFDLFNBQVMsR0F1RGxEO2tCQXZEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0NoYXJtSXRlbScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJtSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbGlzdEltZzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICB0YWcgPSAwXHJcbiAgICBjb2xvckluZGV4ID0gMFxyXG4gICAgY29sb3JJTUcgPSAwXHJcbiAgICAvKiogxJBp4buDbSBuZW8gdHJlbyBsw6puIGTDonkg4oCUIMSR4bq3dCBub2RlIGNvbiB0w6puIGhhbmdQb2ludCDhu58gxJHhu4luaCBjaGFybS4gKi9cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZ1BvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKiogS2hv4bqjbmcgY8OhY2ggdOG7kWkgdGhp4buDdSB0csOqbiBkw6J5IGtoaSB0aOG6oyBjaGFybSBuw6B5ICh0aGVvIHBhdGgpLiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzbG90U3BhY2luZzogbnVtYmVyID0gMTMwO1xyXG5cclxuICAgIC8qKiBDYWxsYmFjayB2YSBjaOG6oW0ga2hpIGNoYXJtIMSRYW5nIHRyZW8gdHLDqm4gdsOybmcgKENvcmRSb3VuZEdhbWUgZ+G6r24pLiAqL1xyXG4gICAgb25Db3JkQmVnaW5Db250YWN0OiAoKG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlcikgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICAvKiogQ29jb3MgZ+G7jWkga2hpIFJpZ2lkQm9keS5lbmFibGVkQ29udGFjdExpc3RlbmVyID0gdHJ1ZS4gKi9cclxuICAgIG9uQmVnaW5Db250YWN0KFxyXG4gICAgICAgIF9jb250YWN0OiBhbnksXHJcbiAgICAgICAgX3NlbGZDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyLFxyXG4gICAgICAgIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlclxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub25Db3JkQmVnaW5Db250YWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db3JkQmVnaW5Db250YWN0KG90aGVyQ29sbGlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkSU1HKGlkOiBudW1iZXIsIHRhZykge1xyXG4gICAgICAgIHRoaXMuY29sb3JJbmRleCA9IGlkXHJcbiAgICAgICAgdGhpcy5jb2xvcklNRyA9IHRoaXMubGlzdEltZ1tpZF1cclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RJbWdbaWRdO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29sb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JJTUdcclxuICAgIH1cclxuICAgIGdldEhhbmdMb2NhbE9mZnNldCgpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCBoYW5nID0gdGhpcy5oYW5nUG9pbnRcclxuICAgICAgICAgICAgfHwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdoYW5nUG9pbnQnKVxyXG4gICAgICAgICAgICB8fCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hvb2tOb2RlJyk7XHJcbiAgICAgICAgaWYgKGhhbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKGhhbmcueCwgaGFuZy55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKTtcclxuICAgICAgICBpZiAoaWNvbikge1xyXG4gICAgICAgICAgICBjb25zdCBoID0gaWNvbi5oZWlnaHQgKiBNYXRoLmFicyhpY29uLnNjYWxlWSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF5ID0gaWNvbi5hbmNob3JZO1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjIoMCwgaCAqICgxIC0gYXkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYy52MigwLCA1NSk7XHJcbiAgICB9XHJcbn1cclxuIl19