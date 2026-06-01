
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pop/popFarm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9wXFxwb3BGYXJtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0NDO1FBbENHLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFFYixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBYSxJQUFJLENBQUE7UUFDdkIsWUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNWLGVBQVMsR0FBRyxLQUFLLENBQUE7UUFDakIsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUVmLGVBQWU7UUFDZixZQUFNLEdBQUcsS0FBSyxDQUFBOztRQXVCZCxpQkFBaUI7SUFDckIsQ0FBQztJQXZCRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUFBLGlCQWlCQztRQWZHLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQzNCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFcEQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6RixJQUFJLEtBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDNUQsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDekQ7UUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs2Q0FDUjtJQUViO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvQzVCO0lBQUQsZUFBQztDQXBDRCxBQW9DQyxDQXBDcUMsRUFBRSxDQUFDLFNBQVMsR0FvQ2pEO2tCQXBDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgY3VycmVudCA9IDQwO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGw6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkZpbGw6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgaXNGaWxsID0gMFxyXG4gICAgaXNTdWNjZXNzID0gZmFsc2VcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgaXNBbmltID0gZmFsc2VcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuaXNGaWxsID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lMjhcIilcclxuICAgIH1cclxuICAgIHVwZGF0ZUZpbGwoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU3VjY2VzcykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNGaWxsLS07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJwb3BfaGl0XCIpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRmlsbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdWNjZXNzID0gdHJ1ZVxyXG50aGlzLmdhbWVQbGF5LnVwZGF0ZUhvdXNlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYkZpbGwuc3RyaW5nID0gXCJ4XCIgKyB0aGlzLmlzRmlsbC50b1N0cmluZygpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbCkudG8oMC4yLCB7IGZpbGxSYW5nZTogKHRoaXMuY3VycmVudCAtIHRoaXMuaXNGaWxsKSAvIHRoaXMuY3VycmVudCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNGaWxsID09IDAgJiYgdGhpcy5pc1N1Y2Nlc3MgPT0gdHJ1ZSAmJiAhdGhpcy5pc0FuaW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBbmltID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX2Nsb3NlXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==