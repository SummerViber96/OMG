
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/card/card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1f20Yp6IdEAoyJul3yVeJ8', 'card');
// scripts/card/card.ts

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
        _this.iconImg = null;
        _this.imgOn = null;
        _this.imgOff = null;
        _this.lbTitle = null;
        _this.lbCurrent = null;
        _this.current = 1;
        _this.isFirst = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        // this.setOff()
    };
    NewClass.prototype.setOn = function () {
        if (!this.isFirst) {
            this.isFirst = true;
            this.node.getChildByName("hand").active = true;
        }
        this.iconImg.spriteFrame = this.imgOn;
        this.lbTitle.color = cc.color().fromHEX("#824420");
        this.lbCurrent.color = cc.color().fromHEX("#824420");
    };
    NewClass.prototype.clickOff = function () {
        this.node.getChildByName("hand").active = false;
    };
    NewClass.prototype.setOff = function () {
        this.iconImg.spriteFrame = this.imgOff;
        this.lbTitle.color = cc.color().fromHEX("#515151");
        this.lbCurrent.color = cc.color().fromHEX("#515151");
    };
    NewClass.prototype.update = function (dt) {
        this.lbCurrent.getComponent(cc.Label).string = this.current.toString();
        if (globalThis.ruby >= this.current) {
            this.setOn();
        }
        else {
            this.setOff();
        }
    };
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "iconImg", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "imgOn", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "imgOff", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lbTitle", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lbCurrent", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "current", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FyZFxcY2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZDQztRQTFDRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBRTdCLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRTlCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osYUFBTyxHQUFHLEtBQUssQ0FBQTs7SUErQm5CLENBQUM7SUE5Qkcsd0JBQUssR0FBTDtRQUNJLGdCQUFnQjtJQUNwQixDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUNqRDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUVuRCxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUN0RSxJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7YUFDSTtZQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtTQUNoQjtJQUNMLENBQUM7SUF6Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNJO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NENBQ0s7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NkNBQ1Q7SUFiSyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkM1QjtJQUFELGVBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBNkNqRDtrQkE3Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGljb25JbWc6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBpbWdPbjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgaW1nT2ZmOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxiVGl0bGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsYkN1cnJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBjdXJyZW50ID0gMTtcclxuICAgIGlzRmlyc3QgPSBmYWxzZVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRPZmYoKVxyXG4gICAgfVxyXG4gICAgc2V0T24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWNvbkltZy5zcHJpdGVGcmFtZSA9IHRoaXMuaW1nT247XHJcbiAgICAgICAgdGhpcy5sYlRpdGxlLmNvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKFwiIzgyNDQyMFwiKTtcclxuICAgICAgICB0aGlzLmxiQ3VycmVudC5jb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWChcIiM4MjQ0MjBcIilcclxuICAgIH1cclxuICAgIGNsaWNrT2ZmKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIH1cclxuICAgIHNldE9mZigpIHtcclxuICAgICAgICB0aGlzLmljb25JbWcuc3ByaXRlRnJhbWUgPSB0aGlzLmltZ09mZjtcclxuICAgICAgICB0aGlzLmxiVGl0bGUuY29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoXCIjNTE1MTUxXCIpO1xyXG4gICAgICAgIHRoaXMubGJDdXJyZW50LmNvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKFwiIzUxNTE1MVwiKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5sYkN1cnJlbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnQudG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLnJ1YnkgPj0gdGhpcy5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T2ZmKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19