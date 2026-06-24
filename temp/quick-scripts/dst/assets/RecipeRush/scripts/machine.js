
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/machine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c384dJjsdxIN6H7HESBDOM2', 'machine');
// RecipeRush/scripts/machine.ts

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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
globalThis.machine = false;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundChien = null;
        _this.soundDone = null;
        _this.tag = 0;
        _this.fillTime = null;
        _this.clock = null;
        _this.anim = null;
        _this.isChin = false;
        _this.gamePlay = null;
        _this.chicken = null;
        _this.time = 2;
        _this.isSoundCooking = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.setOn = function () {
        var _this = this;
        this.clock.active = true;
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(function () {
            _this.clock.active = false;
        }).start();
    };
    NewClass.prototype.setChin = function () {
        this.isChin = true;
        this.node.getComponent(cc.Button).enabled = true;
        cc.audioEngine.play(this.gamePlay.soundBanh, false, 0.7);
    };
    NewClass.prototype.isEmpty = function () {
        return this.chicken == null;
    };
    NewClass.prototype.isCooking = function () {
        return this.chicken != null && !this.isChin;
    };
    NewClass.prototype.isReady = function () {
        return this.chicken != null && this.isChin;
    };
    NewClass.prototype.canAcceptFood = function () {
        return this.isEmpty();
    };
    NewClass.prototype.btn_click = function () {
    };
    NewClass.prototype.cooking = function (chicken) {
        var _this = this;
        if (!this.canAcceptFood())
            return false;
        var comp = chicken ? chicken.getComponent("chicken") : null;
        if (!comp || comp.isChin)
            return false;
        this.isChin = false;
        this.chicken = chicken;
        if (chicken && chicken.parent !== this.node) {
            chicken.parent = this.node;
            chicken.setPosition(0.5, 17);
            chicken.opacity = 0;
        }
        this.anim.setAnimation(0, "lv1-song", false);
        this.isSoundCooking = cc.audioEngine.play(this.soundChien, false, 1);
        this.clock.active = true;
        this.fillTime.fillRange = 0;
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(function () {
            _this.clock.active = false;
            _this.isChin = true;
            _this.anim.setAnimation(0, "lv1-chin", false);
            cc.audioEngine.stop(_this.isSoundCooking);
            cc.audioEngine.play(_this.soundDone, false, 1);
            if (globalThis.machine == false) {
                globalThis.machine = true;
                _this.node.getChildByName("hind").opacity = 255;
                _this.node.getChildByName("hind").active = true;
                _this.node.getChildByName("hind").zIndex = 2;
            }
            // this.node.getChildByName("hind").opacity = 255;
            // this.node.getChildByName("hind").active = true
            // this.node.getChildByName("hind").zIndex = 2
        }).start();
        return true;
    };
    NewClass.prototype.getChicken = function () {
        this.isChin = false;
        var chicken = this.chicken;
        this.chicken = null;
        this.anim.setAnimation(0, "lv1-idle", false);
        chicken.opacity = 255;
        this.gamePlay.onHind();
        return chicken;
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChien", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundDone", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "clock", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbWFjaGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjtBQUNsRixVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9HQztRQWpHRyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUE7UUFFOUIsU0FBRyxHQUFHLENBQUMsQ0FBQTtRQUVQLGNBQVEsR0FBYyxJQUFJLENBQUE7UUFFMUIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixVQUFJLEdBQWdCLElBQUksQ0FBQTtRQUN4QixZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLGFBQU8sR0FBRyxJQUFJLENBQUE7UUFDZCxVQUFJLEdBQUcsQ0FBQyxDQUFBO1FBQ1Isb0JBQWMsR0FBRyxJQUFJLENBQUE7O0lBa0Z6QixDQUFDO0lBakZHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7SUFFckUsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN4QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxD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LENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lDQUNkO0lBRVA7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0U7SUFiUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0c1QjtJQUFELGVBQUM7Q0FwR0QsQUFvR0MsQ0FwR3FDLEVBQUUsQ0FBQyxTQUFTLEdBb0dqRDtrQkFwR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmdsb2JhbFRoaXMubWFjaGluZSA9IGZhbHNlXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoaWVuOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmREb25lOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHRhZyA9IDBcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsVGltZTogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjbG9jazogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgaXNDaGluID0gZmFsc2VcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgY2hpY2tlbiA9IG51bGxcclxuICAgIHRpbWUgPSAyXHJcbiAgICBpc1NvdW5kQ29va2luZyA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIilcclxuXHJcbiAgICB9XHJcbiAgICBzZXRPbigpIHtcclxuICAgICAgICB0aGlzLmNsb2NrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGxUaW1lKS50byh0aGlzLnRpbWUsIHsgZmlsbFJhbmdlOiAxIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb2NrLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hpbigpIHtcclxuICAgICAgICB0aGlzLmlzQ2hpbiA9IHRydWVcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRCYW5oLCBmYWxzZSwgMC43KVxyXG5cclxuICAgIH1cclxuICAgIGlzRW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpY2tlbiA9PSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaXNDb29raW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWNrZW4gIT0gbnVsbCAmJiAhdGhpcy5pc0NoaW5cclxuICAgIH1cclxuXHJcbiAgICBpc1JlYWR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWNrZW4gIT0gbnVsbCAmJiB0aGlzLmlzQ2hpblxyXG4gICAgfVxyXG5cclxuICAgIGNhbkFjY2VwdEZvb2QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNFbXB0eSgpXHJcbiAgICB9XHJcblxyXG4gICAgYnRuX2NsaWNrKCkge1xyXG5cclxuICAgIH1cclxuICAgIGNvb2tpbmcoY2hpY2tlbikge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5BY2NlcHRGb29kKCkpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBjb21wID0gY2hpY2tlbiA/IGNoaWNrZW4uZ2V0Q29tcG9uZW50KFwiY2hpY2tlblwiKSA6IG51bGxcclxuICAgICAgICBpZiAoIWNvbXAgfHwgY29tcC5pc0NoaW4pIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNDaGluID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNoaWNrZW4gPSBjaGlja2VuXHJcbiAgICAgICAgaWYgKGNoaWNrZW4gJiYgY2hpY2tlbi5wYXJlbnQgIT09IHRoaXMubm9kZSkge1xyXG4gICAgICAgICAgICBjaGlja2VuLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICBjaGlja2VuLnNldFBvc2l0aW9uKDAuNSwgMTcpXHJcbiAgICAgICAgICAgIGNoaWNrZW4ub3BhY2l0eSA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImx2MS1zb25nXCIsIGZhbHNlKVxyXG5cclxuICAgICAgICB0aGlzLmlzU291bmRDb29raW5nID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hpZW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuY2xvY2suYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuZmlsbFRpbWUuZmlsbFJhbmdlID0gMFxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbFRpbWUpLnRvKHRoaXMudGltZSwgeyBmaWxsUmFuZ2U6IDEgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvY2suYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0NoaW4gPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJsdjEtY2hpblwiLCBmYWxzZSlcclxuXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pc1NvdW5kQ29va2luZylcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRG9uZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxUaGlzLm1hY2hpbmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMubWFjaGluZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS56SW5kZXggPSAyXHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgZ2V0Q2hpY2tlbigpIHtcclxuICAgICAgICB0aGlzLmlzQ2hpbiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjaGlja2VuID0gdGhpcy5jaGlja2VuXHJcbiAgICAgICAgdGhpcy5jaGlja2VuID0gbnVsbFxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJsdjEtaWRsZVwiLCBmYWxzZSlcclxuICAgICAgICBjaGlja2VuLm9wYWNpdHkgPSAyNTVcclxuICAgICAgICB0aGlzLmdhbWVQbGF5Lm9uSGluZCgpXHJcbiAgICAgICAgcmV0dXJuIGNoaWNrZW5cclxuICAgIH1cclxufVxyXG4iXX0=