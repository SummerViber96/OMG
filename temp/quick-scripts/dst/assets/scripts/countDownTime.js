
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/countDownTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '503f30rkQVF87lkO+hKx7mV', 'countDownTime');
// scripts/countDownTime.ts

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
        _this.countDownNode = null; // node chứa label countdown
        _this.lbCountDown = null;
        _this.btnBeat = null;
        _this.fillSprite = null;
        _this.fillNode = null;
        _this.soundCownDown = null;
        _this.gamePlay = null;
        _this.currentNumber = 3;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym3");
        cc.audioEngine.play(this.soundCownDown, false, 1);
        this.showCountDown();
    };
    NewClass.prototype.showCountDown = function () {
        this.btnBeat.active = false;
        this.countDownNode.active = true;
        this.currentNumber = 3;
        this.playStep();
    };
    NewClass.prototype.playStep = function () {
        var _this = this;
        // update số
        this.lbCountDown.string = this.currentNumber.toString();
        if (this.currentNumber == 0) {
            this.lbCountDown.string = "GO";
            this.lbCountDown.fontSize = 200;
        }
        // reset fill
        this.fillSprite.fillRange = 1;
        // pop số
        this.playCountAnim();
        // tween fill trong 1 giây
        cc.tween(this.fillSprite)
            .to(1, {
            fillRange: 0
        })
            .call(function () {
            _this.currentNumber--;
            // hết countdown
            if (_this.currentNumber < 0) {
                _this.countDownNode.active = false;
                _this.gamePlay.startMonster();
                return;
            }
            // chạy tiếp số tiếp theo
            _this.playStep();
        })
            .start();
    };
    NewClass.prototype.playCountAnim = function () {
        this.lbCountDown.node.scale = 0;
        cc.tween(this.lbCountDown.node)
            .to(0.2, { scale: 1.1 }, {
            easing: "backOut"
        })
            .to(0.1, { scale: 1 })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "countDownNode", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCountDown", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnBeat", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillSprite", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "fillNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCownDown", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY291bnREb3duVGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJGQztRQXhGRyxtQkFBYSxHQUFZLElBQUksQ0FBQyxDQUFDLDRCQUE0QjtRQUczRCxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBQ2xDLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFUixtQkFBYSxHQUFHLENBQUMsQ0FBQzs7SUF3RTlCLENBQUM7SUF0RUcsd0JBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWpDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUFBLGlCQXVDQztRQXJDRyxZQUFZO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUE7U0FFNUI7UUFDRCxhQUFhO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLFNBQVM7UUFDVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsMEJBQTBCO1FBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNwQixFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ0gsU0FBUyxFQUFFLENBQUM7U0FDZixDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBRUYsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXJCLGdCQUFnQjtZQUNoQixJQUFJLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO2dCQUV4QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBRWxDLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBRTdCLE9BQU87YUFDVjtZQUVELHlCQUF5QjtZQUN6QixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFcEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFFSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDMUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyQixNQUFNLEVBQUUsU0FBUztTQUNwQixDQUFDO2FBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNyQixLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBdkZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNXO0lBaEJqQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkY1QjtJQUFELGVBQUM7Q0EzRkQsQUEyRkMsQ0EzRnFDLEVBQUUsQ0FBQyxTQUFTLEdBMkZqRDtrQkEzRm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb3VudERvd25Ob2RlOiBjYy5Ob2RlID0gbnVsbDsgLy8gbm9kZSBjaOG7qWEgbGFiZWwgY291bnRkb3duXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb3VudERvd246IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkJlYXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGxTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmaWxsTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb3duRG93bjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgZ2FtZVBsYXkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudE51bWJlciA9IDM7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHeW0zXCIpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvd25Eb3duLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnNob3dDb3VudERvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q291bnREb3duKCkge1xyXG5cclxuICAgICAgICB0aGlzLmJ0bkJlYXQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuY291bnREb3duTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnROdW1iZXIgPSAzO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlTdGVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVN0ZXAoKSB7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBz4buRXHJcbiAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSB0aGlzLmN1cnJlbnROdW1iZXIudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TnVtYmVyID09IDApIHtcclxuICAgICAgICB0aGlzLmxiQ291bnREb3duLnN0cmluZyA9IFwiR09cIlxyXG4gICAgICAgIHRoaXMubGJDb3VudERvd24uZm9udFNpemU9MjAwXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCBmaWxsXHJcbiAgICAgICAgdGhpcy5maWxsU3ByaXRlLmZpbGxSYW5nZSA9IDE7XHJcblxyXG4gICAgICAgIC8vIHBvcCBz4buRXHJcbiAgICAgICAgdGhpcy5wbGF5Q291bnRBbmltKCk7XHJcblxyXG4gICAgICAgIC8vIHR3ZWVuIGZpbGwgdHJvbmcgMSBnacOieVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbFNwcml0ZSlcclxuICAgICAgICAgICAgLnRvKDEsIHtcclxuICAgICAgICAgICAgICAgIGZpbGxSYW5nZTogMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TnVtYmVyLS07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaOG6v3QgY291bnRkb3duXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TnVtYmVyIDwgMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93bk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc3RhcnRNb25zdGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaOG6oXkgdGnhur9wIHPhu5EgdGnhur9wIHRoZW9cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVN0ZXAoKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlDb3VudEFuaW0oKSB7XHJcblxyXG4gICAgICAgIHRoaXMubGJDb3VudERvd24ubm9kZS5zY2FsZSA9IDA7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGJDb3VudERvd24ubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS4xIH0sIHtcclxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=