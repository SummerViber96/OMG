
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cooking/ietm/preBread.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26acd868GNIVoeYWTLYaLdB', 'preBread');
// cooking/ietm/preBread.ts

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
        _this.isHotDog = false;
        _this.isTuongCa = false;
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
    NewClass.prototype.getHotDog = function () {
        this.isHotDog = true;
        this.anim.setAnimation(0, "B3-T1", false);
    };
    NewClass.prototype.getTuongCa = function () {
        this.isTuongCa = true;
        this.anim.setAnimation(0, "B3-T2", false);
    };
    NewClass.prototype.sell = function () {
        // if (this.isHotDog == false || this.isTuongCa == false) return;
        this.gamePlay.sellBread(this.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxccHJlQnJlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0QkM7UUEzQkcsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLGNBQVEsR0FBRyxLQUFLLENBQUE7UUFDaEIsZUFBUyxHQUFHLEtBQUssQ0FBQTtRQUVqQixVQUFJLEdBQWdCLElBQUksQ0FBQztRQUN6QixXQUFLLEdBQUcsQ0FBQyxDQUFBOztRQWlCVCxnQkFBZ0I7UUFDaEIsOERBQThEO1FBRTlELElBQUk7SUFFUixDQUFDO0lBckJHLHdCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFDRCw2QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBQ0QsdUJBQUksR0FBSjtRQUNJLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQWpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzBDQUNHO0lBTFIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRCNUI7SUFBRCxlQUFDO0NBNUJELEFBNEJDLENBNUJxQyxFQUFFLENBQUMsU0FBUyxHQTRCakQ7a0JBNUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICBpc0hvdERvZyA9IGZhbHNlXHJcbiAgICBpc1R1b25nQ2EgPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgdmFsdWUgPSAwXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVBcHBcIilcclxuICAgIH1cclxuICAgIGdldEhvdERvZygpIHtcclxuICAgICAgICB0aGlzLmlzSG90RG9nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJCMy1UMVwiLCBmYWxzZSlcclxuICAgIH1cclxuICAgIGdldFR1b25nQ2EoKSB7XHJcbiAgICAgICAgdGhpcy5pc1R1b25nQ2EgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkIzLVQyXCIsIGZhbHNlKVxyXG4gICAgfVxyXG4gICAgc2VsbCgpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5pc0hvdERvZyA9PSBmYWxzZSB8fCB0aGlzLmlzVHVvbmdDYSA9PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuc2VsbEJyZWFkKHRoaXMudmFsdWUpXHJcbiAgICB9XHJcbiAgICAvLyBidG5fY2xpY2soKSB7XHJcbiAgICAvLyAgICAgdGhpcy5nYW1lUGxheS5jbGlja0hvdERvZyh0aGlzLnZhbHVlLHRoaXMubm9kZS5wYXJlbnQpO1xyXG5cclxuICAgIC8vIH1cclxuXHJcbn1cclxuIl19