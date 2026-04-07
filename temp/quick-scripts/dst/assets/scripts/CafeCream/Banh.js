
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CafeCream/Banh.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e65fEZiEFJqILHmRkzgt0r', 'Banh');
// scripts/CafeCream/Banh.ts

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
        _this.anim = null;
        _this.tag = 0;
        _this.isChin = false;
        _this.gamePlay = null;
        _this.isbanh = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.addEndEventSpine();
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.setOn = function () {
        this.anim.node.active = true;
        this.anim.setAnimation(0, "lv1-song", false);
        this.isbanh = true;
    };
    NewClass.prototype.addEndEventSpine = function () {
        var self = this;
        this.anim.setCompleteListener(function (track) {
            if (track.animation.name == "lv1-song") {
                self.setChin();
                // console.log(this.isChin)
            }
            // update (dt) {}
        });
    };
    NewClass.prototype.setChin = function () {
        this.isChin = true;
        this.anim.setAnimation(0, "lv1-chin", true);
        // this.node.getComponent(cc.Button).enabled = true
    };
    NewClass.prototype.btn_click = function () {
        console.log(this.isChin);
        // if (this.isChin == true) {
        // if (!this.isChin) return;
        if (!this.isbanh)
            return;
        this.isbanh = false;
        this.gamePlay.arrBep[this.tag] = false;
        this.gamePlay.btn_bep(this.tag);
        this.anim.node.active = false;
        this.node.getComponent(cc.Button).enabled = false;
        // }
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2FmZUNyZWFtXFxCYW5oLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0RDO1FBakRHLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFDUCxZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLFlBQU0sR0FBRyxLQUFLLENBQUE7O0lBNENsQixDQUFDO0lBM0NHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7SUFFckUsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDdEIsQ0FBQztJQUNELG1DQUFnQixHQUFoQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBQSxLQUFLO1lBQy9CLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ2QsMkJBQTJCO2FBQzlCO1lBRUQsaUJBQWlCO1FBQ3JCLENBQUMsQ0FBQSxDQUFBO0lBRUwsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzNDLG1EQUFtRDtJQUN2RCxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBR2pELElBQUk7SUFDUixDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0U7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5Q0FDZDtJQUxVLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvRDVCO0lBQUQsZUFBQztDQXBERCxBQW9EQyxDQXBEcUMsRUFBRSxDQUFDLFNBQVMsR0FvRGpEO2tCQXBEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGFnID0gMFxyXG4gICAgaXNDaGluID0gZmFsc2VcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgaXNiYW5oID0gZmFsc2VcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYWRkRW5kRXZlbnRTcGluZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIilcclxuXHJcbiAgICB9XHJcbiAgICBzZXRPbigpIHtcclxuICAgICAgICB0aGlzLmFuaW0ubm9kZS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJsdjEtc29uZ1wiLCBmYWxzZSlcclxuICAgICAgICB0aGlzLmlzYmFuaCA9IHRydWVcclxuICAgIH1cclxuICAgIGFkZEVuZEV2ZW50U3BpbmUoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgdGhpcy5hbmltLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJsdjEtc29uZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldENoaW4oKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc0NoaW4pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNldENoaW4oKSB7XHJcbiAgICAgICAgdGhpcy5pc0NoaW4gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImx2MS1jaGluXCIsIHRydWUpXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBidG5fY2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0NoaW4pXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNDaGluID09IHRydWUpIHtcclxuICAgICAgICAvLyBpZiAoIXRoaXMuaXNDaGluKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzYmFuaCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNiYW5oID0gZmFsc2VcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmFyckJlcFt0aGlzLnRhZ10gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuYnRuX2JlcCh0aGlzLnRhZylcclxuICAgICAgICB0aGlzLmFuaW0ubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuXHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19