
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
        _this.timeLeft = 60;
        _this.gamePlay = null;
        _this.isDone = false;
        _this.isCounting = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
        this.updateLabel();
    };
    NewClass.prototype.startCountDown = function () {
        if (this.isCounting || this.isDone)
            return;
        this.isCounting = true;
        this.schedule(this.tick, 1);
    };
    NewClass.prototype.addTime = function (sec) {
        if (this.isDone)
            return;
        this.timeLeft += sec;
        this.updateLabel();
    };
    NewClass.prototype.tick = function () {
        if (this.isDone)
            return;
        this.timeLeft--;
        this.updateLabel();
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
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXHRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErQ0M7UUE1Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ2IsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLFlBQU0sR0FBRyxLQUFLLENBQUE7UUFDZCxnQkFBVSxHQUFHLEtBQUssQ0FBQTs7SUF1Q3RCLENBQUM7SUFyQ0csd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFNO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLEdBQUc7UUFDUCxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTTtRQUN2QixJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQTtRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTTtRQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUM1QjtTQUNKO0lBQ0wsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFNO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBM0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFITixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK0M1QjtJQUFELGVBQUM7Q0EvQ0QsQUErQ0MsQ0EvQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBK0NqRDtrQkEvQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgdGltZUxlZnQgPSA2MFxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICBpc0RvbmUgPSBmYWxzZVxyXG4gICAgaXNDb3VudGluZyA9IGZhbHNlXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkd5bVwiKVxyXG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0Q291bnREb3duKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRpbmcgfHwgdGhpcy5pc0RvbmUpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNDb3VudGluZyA9IHRydWVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGljaywgMSlcclxuICAgIH1cclxuXHJcbiAgICBhZGRUaW1lKHNlYykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRG9uZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy50aW1lTGVmdCArPSBzZWNcclxuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKClcclxuICAgIH1cclxuXHJcbiAgICB0aWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRG9uZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy50aW1lTGVmdC0tXHJcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpXHJcbiAgICAgICAgaWYgKHRoaXMudGltZUxlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudGljaylcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkub25FbmRnYW1lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMYWJlbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGFiZWwpIHJldHVyblxyXG4gICAgICAgIGxldCB0ID0gTWF0aC5tYXgoMCwgdGhpcy50aW1lTGVmdClcclxuICAgICAgICBsZXQgbSA9IE1hdGguZmxvb3IodCAvIDYwKVxyXG4gICAgICAgIGxldCBzID0gdCAlIDYwXHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAobSA8IDEwID8gXCIwXCIgOiBcIlwiKSArIG0gKyBcIjpcIiArIChzIDwgMTAgPyBcIjBcIiA6IFwiXCIpICsgc1xyXG4gICAgfVxyXG59XHJcbiJdfQ==