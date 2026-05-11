
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/CakeAssembly/script/barTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12d9aIcZiFOIKcwKRQcVGPF', 'barTime');
// CakeAssembly/script/barTime.ts

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
        _this.lbTime = null;
        _this.gamePlay = null;
        _this.clockSound = null;
        _this.warning = null;
        _this.isTime = 40;
        _this.idClick = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.countDown = function () {
        var _this = this;
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        this.schedule(function () {
            _this.isTime--;
            _this.lbTime.string = _this.isTime.toString();
            if (_this.isTime == 10) {
                if (_this.gamePlay.isEndGame == false) {
                    _this.idClick = cc.audioEngine.play(_this.clockSound, true, 1);
                    _this.warning.active = true;
                }
            }
            _this.lbTime.getComponent(cc.Animation).play();
            if (_this.isTime == 0) {
                _this.warning.active = false;
                _this.gamePlay.onEndGame(false);
                _this.lbTime.string = "0";
            }
        }, 1, 59);
    };
    NewClass.prototype.endGame = function () {
        if (this.idClick) {
            cc.audioEngine.stop(this.idClick);
        }
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbTime", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "clockSound", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "warning", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "isTime", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ2FrZUFzc2VtYmx5XFxzY3JpcHRcXGJhclRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2Q0M7UUExQ0csWUFBTSxHQUFhLElBQUksQ0FBQztRQUN4QixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFPLEdBQUcsSUFBSSxDQUFBOztRQWlDZCxpQkFBaUI7SUFDckIsQ0FBQztJQWpDRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBRXJFLENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQUEsaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUVqRSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM1QyxJQUFJLEtBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO2dCQUNuQixJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRTtvQkFDbEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtvQkFDNUQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2lCQUM3QjthQUVKO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzdDLElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDM0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTthQUMzQjtRQUNMLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDYixDQUFDO0lBQ0QsMEJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUVwQztRQUNELElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUF4Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0Q0FDVDtJQVZLLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2QzVCO0lBQUQsZUFBQztDQTdDRCxBQTZDQyxDQTdDcUMsRUFBRSxDQUFDLFNBQVMsR0E2Q2pEO2tCQTdDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlRpbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIGdhbWVQbGF5ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBjbG9ja1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIGlzVGltZSA9IDQwO1xyXG4gICAgaWRDbGljayA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIilcclxuXHJcbiAgICB9XHJcbiAgICBjb3VudERvd24oKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVEb251dFwiKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1RpbWUtLTtcclxuICAgICAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nID0gdGhpcy5pc1RpbWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUaW1lID09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5pc0VuZEdhbWUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkQ2xpY2sgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuY2xvY2tTb3VuZCwgdHJ1ZSwgMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxiVGltZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUaW1lID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5vbkVuZEdhbWUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgPSBcIjBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSwgNTkpXHJcbiAgICB9XHJcbiAgICBlbmRHYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkQ2xpY2spIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkQ2xpY2spXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=