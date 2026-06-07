
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
        _this.soundChien = null;
        _this.tag = 0;
        _this.fillTime = null;
        _this.clock = null;
        _this.isChin = false;
        _this.gamePlay = null;
        _this.chicken = null;
        _this.time = 2;
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
        this.anim.setAnimation(0, "lv1-chin", true);
        this.node.getComponent(cc.Button).enabled = true;
        cc.audioEngine.play(this.gamePlay.soundBanh, false, 0.7);
    };
    NewClass.prototype.btn_click = function () {
    };
    NewClass.prototype.cooking = function (chicken) {
        var _this = this;
        // this.setOn()
        cc.audioEngine.play(this.soundChien, false, 1);
        chicken.parent = this.node;
        chicken.position = cc.v3(0.5, 17);
        chicken.getComponent("chicken").song();
        this.clock.active = true;
        this.fillTime.fillRange = 0;
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(function () {
            _this.clock.active = false;
            _this.isChin = true;
            chicken.getComponent("chicken").chin();
            _this.node.getChildByName("hind").opacity = 255;
            _this.node.getChildByName("hind").active = true;
            _this.node.getChildByName("hind").zIndex = 2;
            _this.chicken = chicken;
        }).start();
    };
    NewClass.prototype.getChicken = function () {
        this.isChin = false;
        return this.chicken;
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChien", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbWFjaGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdEQztRQXJERyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsU0FBRyxHQUFHLENBQUMsQ0FBQTtRQUVQLGNBQVEsR0FBYyxJQUFJLENBQUE7UUFFMUIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUNyQixZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLGFBQU8sR0FBQyxJQUFJLENBQUE7UUFDWixVQUFJLEdBQUcsQ0FBQyxDQUFBOztJQTJDWixDQUFDO0lBMUNHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7SUFFckUsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN4QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6RCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDaEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFDRCw0QkFBUyxHQUFUO0lBRUEsQ0FBQztJQUNELDBCQUFPLEdBQVAsVUFBUSxPQUFPO1FBQWYsaUJBaUJDO1FBaEJHLGVBQWU7UUFDZixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNqQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekQsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ3pCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ2xCLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDdEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUMvQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzlDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7WUFDM0MsS0FBSSxDQUFDLE9BQU8sR0FBQyxPQUFPLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBcEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5Q0FDZDtJQUVQO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQVRKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3RDVCO0lBQUQsZUFBQztDQXhERCxBQXdEQyxDQXhEcUMsRUFBRSxDQUFDLFNBQVMsR0F3RGpEO2tCQXhEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hpZW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGFnID0gMFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGxUaW1lOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNsb2NrOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgaXNDaGluID0gZmFsc2VcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgY2hpY2tlbj1udWxsXHJcbiAgICB0aW1lID0gMlxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVEb251dFwiKVxyXG5cclxuICAgIH1cclxuICAgIHNldE9uKCkge1xyXG4gICAgICAgIHRoaXMuY2xvY2suYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbFRpbWUpLnRvKHRoaXMudGltZSwgeyBmaWxsUmFuZ2U6IDEgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvY2suYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoaW4oKSB7XHJcbiAgICAgICAgdGhpcy5pc0NoaW4gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImx2MS1jaGluXCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kQmFuaCwgZmFsc2UsIDAuNylcclxuICAgIH1cclxuICAgIGJ0bl9jbGljaygpIHtcclxuXHJcbiAgICB9XHJcbiAgICBjb29raW5nKGNoaWNrZW4pIHtcclxuICAgICAgICAvLyB0aGlzLnNldE9uKClcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGllbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgY2hpY2tlbi5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2hpY2tlbi5wb3NpdGlvbiA9IGNjLnYzKDAuNSwgMTcpXHJcbiAgICAgICAgY2hpY2tlbi5nZXRDb21wb25lbnQoXCJjaGlja2VuXCIpLnNvbmcoKVxyXG4gICAgICAgIHRoaXMuY2xvY2suYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuZmlsbFRpbWUuZmlsbFJhbmdlID0gMFxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbFRpbWUpLnRvKHRoaXMudGltZSwgeyBmaWxsUmFuZ2U6IDEgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvY2suYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0NoaW4gPSB0cnVlXHJcbiAgICAgICAgICAgIGNoaWNrZW4uZ2V0Q29tcG9uZW50KFwiY2hpY2tlblwiKS5jaGluKClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgIHRoaXMuY2hpY2tlbj1jaGlja2VuO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBnZXRDaGlja2VuKCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGluID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpY2tlbjtcclxuICAgIH1cclxufVxyXG4iXX0=