
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
// RecipeRush/scripts/barTime.ts

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
        _this.isTime = 80;
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
        this.unscheduleAllCallbacks();
        this.isTime = 60;
        this.lbTime.string = this.isTime.toString();
        this.schedule(function () {
            _this.isTime--;
            _this.lbTime.string = _this.isTime.toString();
            // if (this.isTime < 0) {
            // }
            if (_this.isTime == 10) {
                if (_this.gamePlay.isEndGame == false) {
                    _this.idClick = cc.audioEngine.play(_this.clockSound, true, 1);
                    _this.warning.active = true;
                }
            }
            _this.lbTime.getComponent(cc.Animation).play();
            if (_this.isTime <= 0) {
                _this.warning.active = false;
                _this.gamePlay.onEndGame(false);
                _this.lbTime.string = "0";
            }
        }, 1, 60);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcYmFyVGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlEQztRQTlDRyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBQ3hCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFDdkIsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGFBQU8sR0FBRyxJQUFJLENBQUE7O1FBc0NkLGlCQUFpQjtJQUNyQixDQUFDO0lBdENHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEUsbUJBQW1CO0lBQ3ZCLENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQUEsaUJBeUJDO1FBeEJHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDNUMseUJBQXlCO1lBRXpCLElBQUk7WUFDSixJQUFJLEtBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO2dCQUNuQixJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRTtvQkFDbEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtvQkFDNUQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2lCQUM3QjthQUVKO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzdDLElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDM0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzthQUU1QjtRQUNMLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDYixDQUFDO0lBQ0QsMEJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUVwQztRQUNELElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFSTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUQ1QjtJQUFELGVBQUM7Q0FqREQsQUFpREMsQ0FqRHFDLEVBQUUsQ0FBQyxTQUFTLEdBaURqRDtrQkFqRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJUaW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBnYW1lUGxheSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY2xvY2tTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgaXNUaW1lID0gODA7XHJcbiAgICBpZENsaWNrID0gbnVsbFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVEb251dFwiKTtcclxuICAgICAgICAvLyB0aGlzLmNvdW50RG93bigpXHJcbiAgICB9XHJcbiAgICBjb3VudERvd24oKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmlzVGltZSA9IDYwXHJcbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nID0gdGhpcy5pc1RpbWUudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGltZS0tO1xyXG4gICAgICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgPSB0aGlzLmlzVGltZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5pc1RpbWUgPCAwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGltZSA9PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuaXNFbmRHYW1lID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZENsaWNrID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmNsb2NrU291bmQsIHRydWUsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYlRpbWUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkub25FbmRHYW1lKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nID0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSwgNjApXHJcbiAgICB9XHJcbiAgICBlbmRHYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkQ2xpY2spIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkQ2xpY2spXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=