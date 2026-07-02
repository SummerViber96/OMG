
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
        return _this;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ2hhcm1JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBeUNDO1FBdENHLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRS9CLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFDUCxnQkFBVSxHQUFHLENBQUMsQ0FBQTtRQUNkLGNBQVEsR0FBRyxDQUFDLENBQUE7UUFDWix1RUFBdUU7UUFFdkUsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixvRUFBb0U7UUFFcEUsaUJBQVcsR0FBVyxHQUFHLENBQUM7O0lBMkI5QixDQUFDO0lBekJHLDJCQUFPLEdBQVAsVUFBUSxFQUFVLEVBQUUsR0FBRztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0QsNEJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QixDQUFDO0lBQ0Qsc0NBQWtCLEdBQWxCO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVM7ZUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO2VBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MENBQ2Q7SUFLUDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBSTFCO1FBREMsUUFBUTtrREFDaUI7SUFkVCxTQUFTO1FBRDdCLE9BQU8sQ0FBQyxXQUFXLENBQUM7T0FDQSxTQUFTLENBeUM3QjtJQUFELGdCQUFDO0NBekNELEFBeUNDLENBekNzQyxFQUFFLENBQUMsU0FBUyxHQXlDbEQ7a0JBekNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQ2hhcm1JdGVtJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcm1JdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsaXN0SW1nOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHRhZyA9IDBcclxuICAgIGNvbG9ySW5kZXggPSAwXHJcbiAgICBjb2xvcklNRyA9IDBcclxuICAgIC8qKiDEkGnhu4NtIG5lbyB0cmVvIGzDqm4gZMOieSDigJQgxJHhurd0IG5vZGUgY29uIHTDqm4gaGFuZ1BvaW50IOG7nyDEkeG7iW5oIGNoYXJtLiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5nUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8qKiBLaG/huqNuZyBjw6FjaCB04buRaSB0aGnhu4N1IHRyw6puIGTDonkga2hpIHRo4bqjIGNoYXJtIG7DoHkgKHRoZW8gcGF0aCkuICovXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNsb3RTcGFjaW5nOiBudW1iZXIgPSAxMzA7XHJcblxyXG4gICAgbG9hZElNRyhpZDogbnVtYmVyLCB0YWcpIHtcclxuICAgICAgICB0aGlzLmNvbG9ySW5kZXggPSBpZFxyXG4gICAgICAgIHRoaXMuY29sb3JJTUcgPSB0aGlzLmxpc3RJbWdbaWRdXHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0SW1nW2lkXTtcclxuICAgIH1cclxuICAgIGdldENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9ySU1HXHJcbiAgICB9XHJcbiAgICBnZXRIYW5nTG9jYWxPZmZzZXQoKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgaGFuZyA9IHRoaXMuaGFuZ1BvaW50XHJcbiAgICAgICAgICAgIHx8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaGFuZ1BvaW50JylcclxuICAgICAgICAgICAgfHwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdob29rTm9kZScpO1xyXG4gICAgICAgIGlmIChoYW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MihoYW5nLngsIGhhbmcueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJyk7XHJcbiAgICAgICAgaWYgKGljb24pIHtcclxuICAgICAgICAgICAgY29uc3QgaCA9IGljb24uaGVpZ2h0ICogTWF0aC5hYnMoaWNvbi5zY2FsZVkpO1xyXG4gICAgICAgICAgICBjb25zdCBheSA9IGljb24uYW5jaG9yWTtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKDAsIGggKiAoMSAtIGF5KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2MudjIoMCwgNTUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==