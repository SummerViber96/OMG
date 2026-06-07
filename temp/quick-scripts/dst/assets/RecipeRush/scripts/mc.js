
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/mc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57915vrfK5CpYr2WpCyKiGH', 'mc');
// RecipeRush/scripts/mc.ts

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
        _this.preChicken = null;
        _this.khay = null;
        _this.anim = null;
        _this.chicken = false;
        _this.arrPos = [cc.v3(-190, -39), cc.v3(-207, -323), cc.v3(-207, -468)];
        _this.localId = 0;
        _this.gamePlay = null;
        _this.arrChicken = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.node.position = cc.v3(207, -58);
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.addChicken = function () {
    };
    NewClass.prototype.moveToChicken = function () {
        var _this = this;
        this.anim.setAnimation(0, "Walk", true);
        if (this.localId == 0) {
            cc.tween(this.node).to(1, { position: this.arrPos[0] }).call(function () {
                _this.spawChicken();
            }).start();
        }
    };
    NewClass.prototype.spawChicken = function () {
        this.gamePlay.btnChicken.children[0].getComponent(sp.Skeleton).setAnimation(0, "lv1-tap", false);
        this.chicken = true;
        this.localId = 1;
        this.khay.active = true;
        this.anim.setAnimation(1, "L-arm", true);
        this.anim.setAnimation(0, "Idle", true);
        var chicken = cc.instantiate(this.preChicken);
        chicken.parent = this.khay;
        chicken.getComponent(cc.Animation).play();
        this.gamePlay.isMoving = false;
        this.arrChicken = chicken;
    };
    NewClass.prototype.moveToMachine = function () {
        var _this = this;
        this.node.zIndex = 2;
        this.anim.setAnimation(0, "Walk", true);
        this.localId = 2;
        if (this.localId == 1) {
            cc.tween(this.node).to(1, { position: this.arrPos[1] }).call(function () {
                var chicken = _this.arrChicken;
                _this.chicken = false;
                _this.gamePlay.btnMachine.getComponent("machine").cooking(chicken);
                _this.anim.setAnimation(1, "<None>", true);
                _this.anim.setAnimation(0, "Idle", true);
                _this.anim.setAnimation(1, "Idle", false);
                _this.khay.active = false;
                _this.localId = 2;
                _this.gamePlay.isMoving = false;
            }).start();
        }
        else if (this.localId == 2) {
            this.khay.active = true;
            this.anim.setAnimation(1, "L-arm", true);
            this.anim.setAnimation(0, "Idle", true);
            this.gamePlay.isMoving = false;
            var chicken = this.gamePlay.btnMachine.getComponent("machine").getChicken();
            chicken.parent = this.khay;
            chicken.getComponent(cc.Animation).play();
            chicken.getComponent("chicken").chin2();
            this.arrChicken = chicken;
        }
    };
    NewClass.prototype.moveToSauce = function () {
        var _this = this;
        this.node.zIndex = 2;
        this.anim.setAnimation(0, "Walk", true);
        this.node.scaleX = -1;
        if (this.localId == 2) {
            cc.tween(this.node).to(0.5, { position: this.arrPos[2] }).call(function () {
                var chicken = _this.arrChicken;
                _this.gamePlay.isMoving = false;
            }).start();
        }
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preChicken", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "khay", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3RkM7UUFyRkcsZ0JBQVUsR0FBYyxJQUFJLENBQUE7UUFFNUIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixVQUFJLEdBQWdCLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQUcsS0FBSyxDQUFBO1FBRWYsWUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNqRSxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLGdCQUFVLEdBQUcsSUFBSSxDQUFBOztRQTBFakIsaUJBQWlCO0lBQ3JCLENBQUM7SUExRUcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRCw2QkFBVSxHQUFWO0lBRUEsQ0FBQztJQUNELGdDQUFhLEdBQWI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxJQUFJ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QUNyQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQ25CLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzRCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFBO2dCQUU3QixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7WUFDbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDYjtJQUNMLENBQUM7SUFuRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0c7SUFQUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0Y1QjtJQUFELGVBQUM7Q0F4RkQsQUF3RkMsQ0F4RnFDLEVBQUUsQ0FBQyxTQUFTLEdBd0ZqRDtrQkF4Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNoaWNrZW46IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2hheTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIGNoaWNrZW4gPSBmYWxzZVxyXG5cclxuICAgIGFyclBvcyA9IFtjYy52MygtMTkwLCAtMzkpLCBjYy52MygtMjA3LCAtMzIzKSwgY2MudjMoLTIwNywgLTQ2OCldXHJcbiAgICBsb2NhbElkID0gMDtcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgYXJyQ2hpY2tlbiA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDIwNywgLTU4KTtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpO1xyXG4gICAgfVxyXG4gICAgYWRkQ2hpY2tlbigpIHtcclxuXHJcbiAgICB9XHJcbiAgICBtb3ZlVG9DaGlja2VuKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuYXJyUG9zWzBdIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3Q2hpY2tlbigpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzcGF3Q2hpY2tlbigpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmJ0bkNoaWNrZW4uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJsdjEtdGFwXCIsIGZhbHNlKVxyXG4gICAgICAgIHRoaXMuY2hpY2tlbiA9IHRydWVcclxuICAgICAgICB0aGlzLmxvY2FsSWQgPSAxO1xyXG4gICAgICAgIHRoaXMua2hheS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJMLWFybVwiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgbGV0IGNoaWNrZW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNoaWNrZW4pO1xyXG4gICAgICAgIGNoaWNrZW4ucGFyZW50ID0gdGhpcy5raGF5O1xyXG4gICAgICAgIGNoaWNrZW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hcnJDaGlja2VuID0gY2hpY2tlblxyXG4gICAgfVxyXG4gICAgbW92ZVRvTWFjaGluZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMlxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy5sb2NhbElkID0gMlxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmFyclBvc1sxXSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlja2VuID0gdGhpcy5hcnJDaGlja2VuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWNrZW4gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5idG5NYWNoaW5lLmdldENvbXBvbmVudChcIm1hY2hpbmVcIikuY29va2luZyhjaGlja2VuKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigxLCBcIjxOb25lPlwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5raGF5LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5sb2NhbElkID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5raGF5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJMLWFybVwiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGxldCBjaGlja2VuID0gdGhpcy5nYW1lUGxheS5idG5NYWNoaW5lLmdldENvbXBvbmVudChcIm1hY2hpbmVcIikuZ2V0Q2hpY2tlbigpXHJcbiAgICAgICAgICAgIGNoaWNrZW4ucGFyZW50ID0gdGhpcy5raGF5XHJcbiAgICAgICAgICAgIGNoaWNrZW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjaGlja2VuLmdldENvbXBvbmVudChcImNoaWNrZW5cIikuY2hpbjIoKVxyXG4gICAgICAgICAgICB0aGlzLmFyckNoaWNrZW49Y2hpY2tlblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3ZlVG9TYXVjZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMlxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNSwgeyBwb3NpdGlvbjogdGhpcy5hcnJQb3NbMl0gfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpY2tlbiA9IHRoaXMuYXJyQ2hpY2tlblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=