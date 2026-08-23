
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Gym/Script/time.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f01fhN/WtMq4ntDG8Ur4Db', 'time');
// Gym/Script/time.ts

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
        _this.label = null;
        _this.fill = null;
        _this.timeMax = 60;
        _this.timeLeft = 60;
        _this.gamePlay = null;
        _this.isDone = false;
        _this.isCounting = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
        this.timeMax = this.timeLeft;
        this.updateLabel();
        this.updateFill(false);
    };
    NewClass.prototype.startCountDown = function () {
        if (this.isCounting || this.isDone)
            return;
        this.isCounting = true;
        this.updateFill(false);
        this.schedule(this.tick, 1);
    };
    NewClass.prototype.addTime = function (sec) {
        if (this.isDone)
            return;
        this.timeLeft += sec;
        this.updateLabel();
        this.updateFill(true);
    };
    NewClass.prototype.tick = function () {
        if (this.isDone)
            return;
        this.timeLeft--;
        this.updateLabel();
        this.updateFill(true);
        if (this.timeLeft <= 0) {
            this.isDone = true;
            this.unschedule(this.tick);
            if (this.gamePlay) {
                this.gamePlay.onEndgame();
            }
        }
    };
    NewClass.prototype.updateLabel = function () {
        if (!this.label)
            return;
        var t = Math.max(0, this.timeLeft);
        var m = Math.floor(t / 60);
        var s = t % 60;
        this.label.string = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    };
    NewClass.prototype.updateFill = function (smooth) {
        if (!this.fill)
            return;
        var ratio = this.timeMax > 0 ? Math.max(0, Math.min(1, this.timeLeft / this.timeMax)) : 0;
        cc.Tween.stopAllByTarget(this.fill);
        if (smooth) {
            cc.tween(this.fill).to(1, { fillRange: ratio }).start();
        }
        else {
            this.fill.fillRange = ratio;
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fill", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXHRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpRUM7UUE5REcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBQ3ZCLGFBQU8sR0FBRyxFQUFFLENBQUE7UUFDWixjQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ2IsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLFlBQU0sR0FBRyxLQUFLLENBQUE7UUFDZCxnQkFBVSxHQUFHLEtBQUssQ0FBQTs7SUF1RHRCLENBQUM7SUFyREcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFNO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsR0FBRztRQUNQLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFNO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU07UUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUM1QjtTQUNKO0lBQ0wsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFNO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBRUQsNkJBQVUsR0FBVixVQUFXLE1BQU07UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFNO1FBQ3RCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekYsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ25DLElBQUksTUFBTSxFQUFFO1lBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQzFEO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7U0FDOUI7SUFDTCxDQUFDO0lBN0REO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDRztJQUxOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRTVCO0lBQUQsZUFBQztDQWpFRCxBQWlFQyxDQWpFcUMsRUFBRSxDQUFDLFNBQVMsR0FpRWpEO2tCQWpFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgdGltZU1heCA9IDYwXHJcbiAgICB0aW1lTGVmdCA9IDYwXHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIGlzRG9uZSA9IGZhbHNlXHJcbiAgICBpc0NvdW50aW5nID0gZmFsc2VcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR3ltXCIpXHJcbiAgICAgICAgdGhpcy50aW1lTWF4ID0gdGhpcy50aW1lTGVmdFxyXG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKVxyXG4gICAgICAgIHRoaXMudXBkYXRlRmlsbChmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydENvdW50RG93bigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50aW5nIHx8IHRoaXMuaXNEb25lKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzQ291bnRpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWxsKGZhbHNlKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aWNrLCAxKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRpbWUoc2VjKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb25lKSByZXR1cm5cclxuICAgICAgICB0aGlzLnRpbWVMZWZ0ICs9IHNlY1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKVxyXG4gICAgICAgIHRoaXMudXBkYXRlRmlsbCh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHRpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb25lKSByZXR1cm5cclxuICAgICAgICB0aGlzLnRpbWVMZWZ0LS1cclxuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKClcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpbGwodHJ1ZSlcclxuICAgICAgICBpZiAodGhpcy50aW1lTGVmdCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aWNrKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5vbkVuZGdhbWUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxhYmVsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5sYWJlbCkgcmV0dXJuXHJcbiAgICAgICAgbGV0IHQgPSBNYXRoLm1heCgwLCB0aGlzLnRpbWVMZWZ0KVxyXG4gICAgICAgIGxldCBtID0gTWF0aC5mbG9vcih0IC8gNjApXHJcbiAgICAgICAgbGV0IHMgPSB0ICUgNjBcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IChtIDwgMTAgPyBcIjBcIiA6IFwiXCIpICsgbSArIFwiOlwiICsgKHMgPCAxMCA/IFwiMFwiIDogXCJcIikgKyBzXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRmlsbChzbW9vdGgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlsbCkgcmV0dXJuXHJcbiAgICAgICAgbGV0IHJhdGlvID0gdGhpcy50aW1lTWF4ID4gMCA/IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMudGltZUxlZnQgLyB0aGlzLnRpbWVNYXgpKSA6IDBcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5maWxsKVxyXG4gICAgICAgIGlmIChzbW9vdGgpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5maWxsKS50bygxLCB7IGZpbGxSYW5nZTogcmF0aW8gfSkuc3RhcnQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbC5maWxsUmFuZ2UgPSByYXRpb1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=