
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cooking/ietm/buger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '453e6ZWGfVA+4xhL73T5DgU', 'buger');
// cooking/ietm/buger.ts

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
        _this.gamePlay = null;
        _this.isMeat = false;
        _this.isvegettable = false;
        _this.anim = null;
        _this.value = 0;
        return _this;
        // btn_click() {
        //     this.gamePlay.clickHotDog(this.value,this.node.parent);
        // }
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameApp");
    };
    NewClass.prototype.getMeat = function () {
        this.isMeat = true;
        this.anim.setAnimation(0, "B3-T1", false);
    };
    NewClass.prototype.getVegettable = function () {
        console.log("vetetable");
        this.isvegettable = true;
        this.anim.setAnimation(0, "B3-T1-T2", false);
    };
    NewClass.prototype.sell = function () {
        // if (this.isHotDog == false || this.isTuongCa == false) return;
        this.gamePlay.sellBuger(this.value);
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcYnVnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2QkM7UUE1QkcsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLFlBQU0sR0FBRyxLQUFLLENBQUE7UUFDZCxrQkFBWSxHQUFHLEtBQUssQ0FBQTtRQUVwQixVQUFJLEdBQWdCLElBQUksQ0FBQztRQUN6QixXQUFLLEdBQUcsQ0FBQyxDQUFBOztRQWtCVCxnQkFBZ0I7UUFDaEIsOERBQThEO1FBRTlELElBQUk7SUFFUixDQUFDO0lBdEJHLHdCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFDRCxnQ0FBYSxHQUFiO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFDRCx1QkFBSSxHQUFKO1FBQ0ksaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0c7SUFMUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkI1QjtJQUFELGVBQUM7Q0E3QkQsQUE2QkMsQ0E3QnFDLEVBQUUsQ0FBQyxTQUFTLEdBNkJqRDtrQkE3Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIGlzTWVhdCA9IGZhbHNlXHJcbiAgICBpc3ZlZ2V0dGFibGUgPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgdmFsdWUgPSAwXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVBcHBcIilcclxuICAgIH1cclxuICAgIGdldE1lYXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc01lYXQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkIzLVQxXCIsIGZhbHNlKVxyXG4gICAgfVxyXG4gICAgZ2V0VmVnZXR0YWJsZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInZldGV0YWJsZVwiKVxyXG4gICAgICAgIHRoaXMuaXN2ZWdldHRhYmxlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJCMy1UMS1UMlwiLCBmYWxzZSlcclxuICAgIH1cclxuICAgIHNlbGwoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNIb3REb2cgPT0gZmFsc2UgfHwgdGhpcy5pc1R1b25nQ2EgPT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LnNlbGxCdWdlcih0aGlzLnZhbHVlKVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2NsaWNrKCkge1xyXG4gICAgLy8gICAgIHRoaXMuZ2FtZVBsYXkuY2xpY2tIb3REb2codGhpcy52YWx1ZSx0aGlzLm5vZGUucGFyZW50KTtcclxuXHJcbiAgICAvLyB9XHJcblxyXG59XHJcbiJdfQ==