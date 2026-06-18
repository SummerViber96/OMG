
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
        _this.colorIMG = 0;
        /** Điểm neo treo lên dây — đặt node con tên hangPoint ở đỉnh charm. */
        _this.hangPoint = null;
        return _this;
    }
    CharmItem.prototype.loadIMG = function (id, tag) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ2hhcm1JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBa0NDO1FBL0JHLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBQy9CLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFDUCxjQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQ1osdUVBQXVFO1FBRXZFLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBMEI5QixDQUFDO0lBeEJHLDJCQUFPLEdBQVAsVUFBUSxFQUFVLEVBQUUsR0FBRztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0QsNEJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QixDQUFDO0lBQ0Qsc0NBQWtCLEdBQWxCO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVM7ZUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO2VBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNNO0lBSy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFSVCxTQUFTO1FBRDdCLE9BQU8sQ0FBQyxXQUFXLENBQUM7T0FDQSxTQUFTLENBa0M3QjtJQUFELGdCQUFDO0NBbENELEFBa0NDLENBbENzQyxFQUFFLENBQUMsU0FBUyxHQWtDbEQ7a0JBbENvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQ2hhcm1JdGVtJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcm1JdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsaXN0SW1nOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICB0YWcgPSAwXHJcbiAgICBjb2xvcklNRyA9IDBcclxuICAgIC8qKiDEkGnhu4NtIG5lbyB0cmVvIGzDqm4gZMOieSDigJQgxJHhurd0IG5vZGUgY29uIHTDqm4gaGFuZ1BvaW50IOG7nyDEkeG7iW5oIGNoYXJtLiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5nUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGxvYWRJTUcoaWQ6IG51bWJlciwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvcklNRyA9IHRoaXMubGlzdEltZ1tpZF1cclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RJbWdbaWRdO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29sb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JJTUdcclxuICAgIH1cclxuICAgIGdldEhhbmdMb2NhbE9mZnNldCgpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCBoYW5nID0gdGhpcy5oYW5nUG9pbnRcclxuICAgICAgICAgICAgfHwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdoYW5nUG9pbnQnKVxyXG4gICAgICAgICAgICB8fCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hvb2tOb2RlJyk7XHJcbiAgICAgICAgaWYgKGhhbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKGhhbmcueCwgaGFuZy55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKTtcclxuICAgICAgICBpZiAoaWNvbikge1xyXG4gICAgICAgICAgICBjb25zdCBoID0gaWNvbi5oZWlnaHQgKiBNYXRoLmFicyhpY29uLnNjYWxlWSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF5ID0gaWNvbi5hbmNob3JZO1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjIoMCwgaCAqICgxIC0gYXkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYy52MigwLCA1NSk7XHJcbiAgICB9XHJcbn1cclxuIl19