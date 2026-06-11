
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
        /** Điểm neo treo lên dây — đặt node con tên hangPoint ở đỉnh charm. */
        _this.hangPoint = null;
        return _this;
    }
    CharmItem.prototype.loadIMG = function (id) {
        this.node.children[0].getComponent(cc.Sprite).spriteFrame = this.listImg[id];
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
        property(cc.Node)
    ], CharmItem.prototype, "hangPoint", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ2hhcm1JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBOEJDO1FBM0JHLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRS9CLHVFQUF1RTtRQUV2RSxlQUFTLEdBQVksSUFBSSxDQUFDOztJQXVCOUIsQ0FBQztJQXJCRywyQkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELHNDQUFrQixHQUFsQjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTO2VBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztlQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksRUFBRTtZQUNOLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUVELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUExQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FDTTtJQUkvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBUFQsU0FBUztRQUQ3QixPQUFPLENBQUMsV0FBVyxDQUFDO09BQ0EsU0FBUyxDQThCN0I7SUFBRCxnQkFBQztDQTlCRCxBQThCQyxDQTlCc0MsRUFBRSxDQUFDLFNBQVMsR0E4QmxEO2tCQTlCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0NoYXJtSXRlbScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJtSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbGlzdEltZzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIC8qKiDEkGnhu4NtIG5lbyB0cmVvIGzDqm4gZMOieSDigJQgxJHhurd0IG5vZGUgY29uIHTDqm4gaGFuZ1BvaW50IOG7nyDEkeG7iW5oIGNoYXJtLiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5nUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGxvYWRJTUcoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdEltZ1tpZF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGFuZ0xvY2FsT2Zmc2V0KCk6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IGhhbmcgPSB0aGlzLmhhbmdQb2ludFxyXG4gICAgICAgICAgICB8fCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmdQb2ludCcpXHJcbiAgICAgICAgICAgIHx8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaG9va05vZGUnKTtcclxuICAgICAgICBpZiAoaGFuZykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjIoaGFuZy54LCBoYW5nLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpO1xyXG4gICAgICAgIGlmIChpY29uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGggPSBpY29uLmhlaWdodCAqIE1hdGguYWJzKGljb24uc2NhbGVZKTtcclxuICAgICAgICAgICAgY29uc3QgYXkgPSBpY29uLmFuY2hvclk7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MigwLCBoICogKDEgLSBheSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDU1KTtcclxuICAgIH1cclxufVxyXG4iXX0=