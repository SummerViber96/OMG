
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Fried Chicken No Hot Sauce/chili.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73f60y6a1hAe4yvrClB4CYd', 'chili');
// scripts/Fried Chicken No Hot Sauce/chili.ts

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
        _this.sauce = null;
        _this.soundCream1 = null;
        _this.soundCream2 = null;
        _this.gamePlay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.onSauce = function (value) {
        if (value == 1) {
            this.sauce.children[0].active = true;
        }
        else {
            this.sauce.children[1].active = true;
        }
    };
    NewClass.prototype.onSound = function (value) {
        if (value == 1) {
            cc.audioEngine.play(this.soundCream1, false, 0.5);
        }
        else {
            cc.audioEngine.play(this.soundCream2, false, 0.5);
        }
    };
    NewClass.prototype.startSauce = function () {
        this.node.children[0].active = false;
    };
    NewClass.prototype.end = function () {
        this.gamePlay.setReadyChicken();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sauce", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCream1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCream2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0ZyaWVkIENoaWNrZW4gTm8gSG90IFNhdWNlL2NoaWxpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUNDO1FBbkNHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsaUJBQVcsR0FBaUIsSUFBSSxDQUFBO1FBRWhDLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUNoQyxjQUFRLEdBQUcsSUFBSSxDQUFBOztJQThCbkIsQ0FBQztJQTdCYSx3QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsS0FBSztRQUNULElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7U0FDdkM7YUFDSTtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7U0FDdkM7SUFFTCxDQUFDO0lBQ0QsMEJBQU8sR0FBUCxVQUFRLEtBQUs7UUFDVCxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUNwRDthQUNJO1lBQ0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FFcEQ7SUFDTCxDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDeEMsQ0FBQztJQUNELHNCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQ25DLENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1M7SUFOZixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUM1QjtJQUFELGVBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBcUNqRDtrQkFyQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2F1Y2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDcmVhbTE6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ3JlYW0yOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgZ2FtZVBsYXkgPSBudWxsXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpXG4gICAgfVxuICAgIG9uU2F1Y2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2F1Y2UuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnNhdWNlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG9uU291bmQodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENyZWFtMSwgZmFsc2UsIDAuNSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENyZWFtMiwgZmFsc2UsIDAuNSlcblxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0U2F1Y2UoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxuICAgIH1cbiAgICBlbmQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuc2V0UmVhZHlDaGlja2VuKClcbiAgICB9XG5cbn1cbiJdfQ==