
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/lonau1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44863UUir9CY69WqIXQDNe3', 'lonau1');
// RecipeRush/scripts/lonau1.ts

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
        _this.sauces = null;
        _this.soundXit = null;
        _this.gamePlay = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        this.sauces.play();
        if (this.gamePlay.isMox == false) {
            cc.audioEngine.play(this.soundXit, false, 0.3);
        }
        this.scheduleOnce(function () {
            other.getComponent("pizza").getTomato();
        }, 0.2);
    };
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "sauces", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundXit", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbG9uYXUxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0JDO1FBckJHLFlBQU0sR0FBaUIsSUFBSSxDQUFBO1FBRTNCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBQzdCLGNBQVEsR0FBRyxJQUFJLENBQUE7O1FBaUJmLGlCQUFpQjtJQUNyQixDQUFDO0lBakJHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7SUFFckUsQ0FBQztJQUNELG1DQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBRWpEO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUE7UUFFM0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBRVgsQ0FBQztJQW5CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNJO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ007SUFMWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0I1QjtJQUFELGVBQUM7Q0F4QkQsQUF3QkMsQ0F4QnFDLEVBQUUsQ0FBQyxTQUFTLEdBd0JqRDtrQkF4Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIHNhdWNlczogY2MuQW5pbWF0aW9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kWGl0OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIilcclxuXHJcbiAgICB9XHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5zYXVjZXMucGxheSgpXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuaXNNb3ggPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kWGl0LCBmYWxzZSwgMC4zKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBvdGhlci5nZXRDb21wb25lbnQoXCJwaXp6YVwiKS5nZXRUb21hdG8oKVxyXG5cclxuICAgICAgICB9LCAwLjIpXHJcblxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=