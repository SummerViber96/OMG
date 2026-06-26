
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ2hhcm1JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBcUNDO1FBbENHLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRS9CLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFDUCxnQkFBVSxHQUFHLENBQUMsQ0FBQTtRQUNkLGNBQVEsR0FBRyxDQUFDLENBQUE7UUFDWix1RUFBdUU7UUFFdkUsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUEyQjlCLENBQUM7SUF6QkcsMkJBQU8sR0FBUCxVQUFRLEVBQVUsRUFBRSxHQUFHO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFDRCw0QkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFDRCxzQ0FBa0IsR0FBbEI7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUztlQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7ZUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLEVBQUU7WUFDTixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLElBQUksRUFBRTtZQUNOLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN4QixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswQ0FDZDtJQUtQO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFWVCxTQUFTO1FBRDdCLE9BQU8sQ0FBQyxXQUFXLENBQUM7T0FDQSxTQUFTLENBcUM3QjtJQUFELGdCQUFDO0NBckNELEFBcUNDLENBckNzQyxFQUFFLENBQUMsU0FBUyxHQXFDbEQ7a0JBckNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQ2hhcm1JdGVtJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcm1JdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsaXN0SW1nOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHRhZyA9IDBcclxuICAgIGNvbG9ySW5kZXggPSAwXHJcbiAgICBjb2xvcklNRyA9IDBcclxuICAgIC8qKiDEkGnhu4NtIG5lbyB0cmVvIGzDqm4gZMOieSDigJQgxJHhurd0IG5vZGUgY29uIHTDqm4gaGFuZ1BvaW50IOG7nyDEkeG7iW5oIGNoYXJtLiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5nUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGxvYWRJTUcoaWQ6IG51bWJlciwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvckluZGV4ID0gaWRcclxuICAgICAgICB0aGlzLmNvbG9ySU1HID0gdGhpcy5saXN0SW1nW2lkXVxyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdEltZ1tpZF07XHJcbiAgICB9XHJcbiAgICBnZXRDb2xvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xvcklNR1xyXG4gICAgfVxyXG4gICAgZ2V0SGFuZ0xvY2FsT2Zmc2V0KCk6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IGhhbmcgPSB0aGlzLmhhbmdQb2ludFxyXG4gICAgICAgICAgICB8fCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmdQb2ludCcpXHJcbiAgICAgICAgICAgIHx8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaG9va05vZGUnKTtcclxuICAgICAgICBpZiAoaGFuZykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjIoaGFuZy54LCBoYW5nLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpO1xyXG4gICAgICAgIGlmIChpY29uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGggPSBpY29uLmhlaWdodCAqIE1hdGguYWJzKGljb24uc2NhbGVZKTtcclxuICAgICAgICAgICAgY29uc3QgYXkgPSBpY29uLmFuY2hvclk7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MigwLCBoICogKDEgLSBheSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDU1KTtcclxuICAgIH1cclxufVxyXG4iXX0=