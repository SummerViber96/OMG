
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/coca.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0549b2VqQZO8qC7cTcszRvF', 'coca');
// RecipeRush/scripts/coca.ts

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
        _this.fillTime = null;
        _this.clock = null;
        _this.isCoca = false;
        _this.isCooking = false;
        _this.isChin = false;
        _this.time = 0.8;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.isBusy = function () {
        return this.isCooking || this.isCoca;
    };
    NewClass.prototype.cooking = function () {
        var _this = this;
        if (this.isBusy())
            return;
        this.isCooking = true;
        this.isChin = false;
        this.anim.setAnimation(0, "lv2-active", false);
        this.clock.active = true;
        this.fillTime.fillRange = 0;
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(function () {
            _this.clock.active = false;
            _this.isCooking = false;
            _this.isChin = true;
            _this.readyCoca();
        }).start();
    };
    NewClass.prototype.readyCoca = function () {
        this.isCoca = true;
        // this.anim
    };
    NewClass.prototype.getCoca = function () {
        this.anim.setAnimation(0, "lv2-idle", false);
        this.isChin = false;
        this.isCoca = false;
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "clock", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcY29jYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQStDQztRQTVDRyxVQUFJLEdBQWdCLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQWMsSUFBSSxDQUFBO1FBRTFCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFDckIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGVBQVMsR0FBRyxLQUFLLENBQUE7UUFDakIsWUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNkLFVBQUksR0FBRyxHQUFHLENBQUE7O1FBbUNWLGlCQUFpQjtJQUNyQixDQUFDO0lBbENHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3hDLENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTTtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRy9DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekQsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ3pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1lBQ3RCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ2xCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVmLENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDbEIsWUFBWTtJQUNoQixDQUFDO0lBQ0QsMEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDdkIsQ0FBQztJQTFDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzBDQUNHO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQVBKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErQzVCO0lBQUQsZUFBQztDQS9DRCxBQStDQyxDQS9DcUMsRUFBRSxDQUFDLFNBQVMsR0ErQ2pEO2tCQS9Db0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlsbFRpbWU6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2xvY2s6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBpc0NvY2EgPSBmYWxzZTtcclxuICAgIGlzQ29va2luZyA9IGZhbHNlXHJcbiAgICBpc0NoaW4gPSBmYWxzZVxyXG4gICAgdGltZSA9IDAuOFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuICAgIGlzQnVzeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0Nvb2tpbmcgfHwgdGhpcy5pc0NvY2FcclxuICAgIH1cclxuICAgIGNvb2tpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCdXN5KCkpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNDb29raW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNDaGluID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwibHYyLWFjdGl2ZVwiLCBmYWxzZSk7XHJcbiAgIFxyXG5cclxuICAgICAgICB0aGlzLmNsb2NrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmZpbGxUaW1lLmZpbGxSYW5nZSA9IDBcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGxUaW1lKS50byh0aGlzLnRpbWUsIHsgZmlsbFJhbmdlOiAxIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb2NrLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNDb29raW5nID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0NoaW4gPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlDb2NhKClcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuICAgIHJlYWR5Q29jYSgpIHtcclxuICAgICAgICB0aGlzLmlzQ29jYSA9IHRydWVcclxuICAgICAgICAvLyB0aGlzLmFuaW1cclxuICAgIH1cclxuICAgIGdldENvY2EoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImx2Mi1pZGxlXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0NoaW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNDb2NhID0gZmFsc2VcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19