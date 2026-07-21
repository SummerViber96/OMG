
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/listCus2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4cf7exLeZRIxpqISIT35WuK', 'listCus2');
// RecipeRush/scripts/listCus2.ts

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
        _this.prEmoji = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < 50; i++) {
            this.scheduleOnce(function () {
                _this.spawnAngryEmoji(_this.node, _this.prEmoji, _this.node);
            }, i * 0.08);
        }
    };
    NewClass.prototype.spawnAngryEmoji = function (parent, prefab, target) {
        var emoji = cc.instantiate(prefab);
        parent.addChild(emoji);
        // Vị trí bắt đầu (dưới đầu nhân vật)
        var startX = target.x + (Math.random() - 0.5) * 300 + 400;
        var startY = target.y + 280;
        emoji.setPosition(startX, startY);
        emoji.opacity = 0;
        emoji.scale = 0.2;
        var endY = startY + 500;
        var offsetX = (Math.random() - 0.5) * 500;
        cc.tween(emoji)
            .parallel(
        // Bay lên
        cc.tween().to(2, {
            position: cc.v3(startX + offsetX, endY)
        }, {
            easing: "sineOut"
        }), 
        // Scale
        cc.tween()
            .to(0.2, { scale: 1.1 })
            .to(0.8, { scale: 0.9 })
            .to(0.2, { scale: 0.8 }), 
        // Fade
        cc.tween()
            .to(0.2, { opacity: 255 })
            .delay(1.4)
            .to(0.4, { opacity: 0 }), 
        // Lắc trái phải
        cc.tween()
            .by(0.15, { x: -10 })
            .by(0.15, { x: 20 })
            .by(0.15, { x: -20 })
            .by(0.15, { x: 20 })
            .by(0.15, { x: -10 }))
            .call(function () {
            emoji.destroy();
        })
            .start();
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "prEmoji", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbGlzdEN1czIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtRUM7UUFoRUcsYUFBTyxHQUFjLElBQUksQ0FBQTs7UUErRHpCLGlCQUFpQjtJQUNyQixDQUFDO0lBOURHLHdCQUFLLEdBQUw7UUFBQSxpQkFVQztRQVRHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsZUFBZSxDQUNoQixLQUFJLENBQUMsSUFBSSxFQUNULEtBQUksQ0FBQyxPQUFPLEVBQ1osS0FBSSxDQUFDLElBQUksQ0FDWixDQUFDO1lBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLE1BQWUsRUFBRSxNQUFpQixFQUFFLE1BQWU7UUFFL0QsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZCLHFDQUFxQztRQUNyQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBQyxHQUFHLENBQUM7UUFDeEQsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFNUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDbEIsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFbEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFMUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDVixRQUFRO1FBQ0wsVUFBVTtRQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ2IsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRSxJQUFJLENBQUM7U0FDMUMsRUFBRTtZQUNDLE1BQU0sRUFBRSxTQUFTO1NBQ3BCLENBQUM7UUFFRixRQUFRO1FBQ1IsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDdkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUN2QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRTVCLE9BQU87UUFDUCxFQUFFLENBQUMsS0FBSyxFQUFFO2FBQ0wsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUU1QixnQkFBZ0I7UUFDaEIsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNwQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ25CLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNwQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ25CLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUM1QjthQUNBLElBQUksQ0FBQztZQUNGLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBOUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFIUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUU1QjtJQUFELGVBQUM7Q0FuRUQsQUFtRUMsQ0FuRXFDLEVBQUUsQ0FBQyxTQUFTLEdBbUVqRDtrQkFuRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwckVtb2ppOiBjYy5QcmVmYWIgPSBudWxsXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25BbmdyeUVtb2ppKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByRW1vamksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LCBpICogMC4wOCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3Bhd25BbmdyeUVtb2ppKHBhcmVudDogY2MuTm9kZSwgcHJlZmFiOiBjYy5QcmVmYWIsIHRhcmdldDogY2MuTm9kZSkge1xyXG5cclxuICAgICAgICBsZXQgZW1vamkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIHBhcmVudC5hZGRDaGlsZChlbW9qaSk7XHJcblxyXG4gICAgICAgIC8vIFbhu4sgdHLDrSBi4bqvdCDEkeG6p3UgKGTGsOG7m2kgxJHhuqd1IG5ow6JuIHbhuq10KVxyXG4gICAgICAgIGxldCBzdGFydFggPSB0YXJnZXQueCArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDMwMCs0MDA7XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9IHRhcmdldC55ICsgMjgwO1xyXG5cclxuICAgICAgICBlbW9qaS5zZXRQb3NpdGlvbihzdGFydFgsIHN0YXJ0WSk7XHJcbiAgICAgICAgZW1vamkub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgZW1vamkuc2NhbGUgPSAwLjI7XHJcblxyXG4gICAgICAgIGxldCBlbmRZID0gc3RhcnRZICsgNTAwO1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNTAwO1xyXG5cclxuICAgICAgICBjYy50d2VlbihlbW9qaSlcclxuICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgLy8gQmF5IGzDqm5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MyhzdGFydFggKyBvZmZzZXRYLCBlbmRZKVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXCJzaW5lT3V0XCJcclxuICAgICAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNjYWxlXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS4xIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBzY2FsZTogMC45IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMC44IH0pLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZhZGVcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgxLjQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBvcGFjaXR5OiAwIH0pLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEzhuq9jIHRyw6FpIHBo4bqjaVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjE1LCB7IHg6IC0xMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjE1LCB7IHg6IDIwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMTUsIHsgeDogLTIwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMTUsIHsgeDogMjAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuYnkoMC4xNSwgeyB4OiAtMTAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbW9qaS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=