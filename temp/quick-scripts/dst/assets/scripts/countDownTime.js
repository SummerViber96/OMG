
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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.gamePlay = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym3");
        this.showCountDown();
    };
    NewClass.prototype.showCountDown = function () {
        var _this = this;
        // Ẩn nút Beat lúc đầu
        this.btnBeat.active = false;
        // Hiện countdown
        this.countDownNode.active = true;
        var time = 3;
        this.lbCountDown.string = time.toString();
        // Scale pop effect
        this.playCountAnim();
        this.schedule(function () {
            time--;
            if (time > 0) {
                _this.lbCountDown.string = time.toString();
                _this.playCountAnim();
            }
            else {
                // Kết thúc countdown
                _this.unscheduleAllCallbacks();
                _this.countDownNode.active = false;
                // Hiện nút Beat
                // this.btnBeat.active = true;
                // Hiệu ứng nút Beat
                // this.btnBeat.scale = 0;
                _this.gamePlay.startMonster();
            }
        }, 1);
    };
    NewClass.prototype.playCountAnim = function () {
        this.countDownNode.scale = 0;
        cc.tween(this.countDownNode)
            .to(0.2, { scale: 1.3 }, { easing: "backOut" })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY291bnREb3duVGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdFQztRQTdERyxtQkFBYSxHQUFZLElBQUksQ0FBQyxDQUFDLDRCQUE0QjtRQUczRCxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGNBQVEsR0FBRyxJQUFJLENBQUM7O1FBcURoQixpQkFBaUI7SUFDckIsQ0FBQztJQXJERyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUFBLGlCQW9DQztRQW5DRyxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTVCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTFDLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksRUFBRSxDQUFDO1lBRVAsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNWLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCO2lCQUNJO2dCQUNELHFCQUFxQjtnQkFDckIsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBRTlCLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFFbEMsZ0JBQWdCO2dCQUNoQiw4QkFBOEI7Z0JBRTlCLG9CQUFvQjtnQkFDcEIsMEJBQTBCO2dCQUUxQixLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFBO2FBQy9CO1FBRUwsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ3ZCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDOUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNyQixLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBMUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBVFAsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdFNUI7SUFBRCxlQUFDO0NBaEVELEFBZ0VDLENBaEVxQyxFQUFFLENBQUMsU0FBUyxHQWdFakQ7a0JBaEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvdW50RG93bk5vZGU6IGNjLk5vZGUgPSBudWxsOyAvLyBub2RlIGNo4bupYSBsYWJlbCBjb3VudGRvd25cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkNvdW50RG93bjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQmVhdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBnYW1lUGxheSA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR3ltM1wiKVxyXG4gICAgICAgIHRoaXMuc2hvd0NvdW50RG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb3VudERvd24oKSB7XHJcbiAgICAgICAgLy8g4bqobiBuw7p0IEJlYXQgbMO6YyDEkeG6p3VcclxuICAgICAgICB0aGlzLmJ0bkJlYXQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIEhp4buHbiBjb3VudGRvd25cclxuICAgICAgICB0aGlzLmNvdW50RG93bk5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHRpbWUgPSAzO1xyXG4gICAgICAgIHRoaXMubGJDb3VudERvd24uc3RyaW5nID0gdGltZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBTY2FsZSBwb3AgZWZmZWN0XHJcbiAgICAgICAgdGhpcy5wbGF5Q291bnRBbmltKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aW1lLS07XHJcblxyXG4gICAgICAgICAgICBpZiAodGltZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGJDb3VudERvd24uc3RyaW5nID0gdGltZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q291bnRBbmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBL4bq/dCB0aMO6YyBjb3VudGRvd25cclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIaeG7h24gbsO6dCBCZWF0XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkJlYXQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIaeG7h3Ug4bupbmcgbsO6dCBCZWF0XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkJlYXQuc2NhbGUgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc3RhcnRNb25zdGVyKClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5Q291bnRBbmltKCkge1xyXG4gICAgICAgIHRoaXMuY291bnREb3duTm9kZS5zY2FsZSA9IDA7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY291bnREb3duTm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS4zIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiAxIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19