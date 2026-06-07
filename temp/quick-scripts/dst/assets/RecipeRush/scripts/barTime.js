
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/barTime.js';
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
        _this.isTime = 60;
        _this.idClick = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        // this.countDown()
    };
    NewClass.prototype.countDown = function () {
        var _this = this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ2FrZUFzc2VtYmx5XFxzY3JpcHRcXGJhclRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5Q0M7UUF0Q0csWUFBTSxHQUFhLElBQUksQ0FBQztRQUN4QixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixhQUFPLEdBQVksSUFBSSxDQUFBO1FBQ3ZCLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFPLEdBQUcsSUFBSSxDQUFBOztRQThCZCxpQkFBaUI7SUFDckIsQ0FBQztJQTlCRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xFLG1CQUFtQjtJQUN2QixDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM1QyxJQUFJLEtBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO2dCQUNuQixJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRTtvQkFDbEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtvQkFDNUQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2lCQUM3QjthQUVKO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzdDLElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDM0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDakM7UUFDTCxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2IsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7U0FFcEM7UUFDRCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQTtJQUNqQyxDQUFDO0lBcENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBUk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlDNUI7SUFBRCxlQUFDO0NBekNELEFBeUNDLENBekNxQyxFQUFFLENBQUMsU0FBUyxHQXlDakQ7a0JBekNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiVGltZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgZ2FtZVBsYXkgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGNsb2NrU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd2FybmluZzogY2MuTm9kZSA9IG51bGxcclxuICAgIGlzVGltZSA9IDYwO1xyXG4gICAgaWRDbGljayA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIik7XHJcbiAgICAgICAgLy8gdGhpcy5jb3VudERvd24oKVxyXG4gICAgfVxyXG4gICAgY291bnREb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGltZS0tO1xyXG4gICAgICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgPSB0aGlzLmlzVGltZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RpbWUgPT0gMTApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQbGF5LmlzRW5kR2FtZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRDbGljayA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5jbG9ja1NvdW5kLCB0cnVlLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGJUaW1lLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RpbWUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lm9uRW5kR2FtZShmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEsIDU5KVxyXG4gICAgfVxyXG4gICAgZW5kR2FtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pZENsaWNrKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZENsaWNrKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19