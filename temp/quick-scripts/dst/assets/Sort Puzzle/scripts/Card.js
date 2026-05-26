
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Sort Puzzle/scripts/Card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2b10iylVRGTIiV60Hj1iJO', 'Card');
// Sort Puzzle/scripts/Card.ts

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
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.front = null;
        _this.back = null;
        _this.cardType = "";
        _this.isFaceUp = false;
        _this.stack = null;
        _this.startPos = cc.v3();
        return _this;
    }
    Card.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    Card.prototype.setFaceUp = function (value) {
        this.isFaceUp = value;
        this.front.active = value;
        this.back.active = !value;
    };
    Card.prototype.onTouchStart = function () {
        // chỉ cho kéo card mở trên cùng
        if (!this.isFaceUp)
            return;
        if (!this.stack.isTopCard(this))
            return;
        this.startPos = this.node.position.clone();
        this.node.scale = 1.1;
        this.node.setSiblingIndex(999);
    };
    Card.prototype.onTouchMove = function (e) {
        if (!this.isFaceUp)
            return;
        if (!this.stack.isTopCard(this))
            return;
        var delta = e.getDelta();
        this.node.x += delta.x;
        this.node.y += delta.y;
    };
    Card.prototype.onTouchEnd = function () {
        if (!this.isFaceUp)
            return;
        if (!this.stack.isTopCard(this))
            return;
        this.node.scale = 1;
        var slot = this.getDropSlot();
        if (slot) {
            var success = slot.getComponent("Slot").tryAddCard(this);
            if (success) {
                this.stack.removeTopCard();
            }
            else {
                this.moveBack();
            }
        }
        else {
            this.moveBack();
        }
    };
    Card.prototype.moveBack = function () {
        cc.tween(this.node)
            .to(0.2, {
            position: this.startPos
        })
            .start();
    };
    Card.prototype.getDropSlot = function () {
        var slots = cc.find("Canvas/Board")
            .getComponentsInChildren(cc.Component);
        for (var _i = 0, slots_1 = slots; _i < slots_1.length; _i++) {
            var s = slots_1[_i];
            if (s.node.name != "CenterSlot")
                continue;
            var box = s.node.getBoundingBoxToWorld();
            var wp = this.node.parent.convertToWorldSpaceAR(this.node.position);
            if (box.contains(wp)) {
                return s.node;
            }
        }
        return null;
    };
    __decorate([
        property(cc.Node)
    ], Card.prototype, "front", void 0);
    __decorate([
        property(cc.Node)
    ], Card.prototype, "back", void 0);
    Card = __decorate([
        ccclass
    ], Card);
    return Card;
}(cc.Component));
exports.default = Card;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXENhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFxSEM7UUFsSEcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxjQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLFdBQUssR0FBRyxJQUFJLENBQUM7UUFFTCxjQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOztJQXVHL0IsQ0FBQztJQXJHRyxxQkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHdCQUFTLEdBQVQsVUFB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QztZQUVwRSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBRWxCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQzthQUNqQjtTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWpIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0NBQ0c7SUFOSixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBcUh4QjtJQUFELFdBQUM7Q0FySEQsQUFxSEMsQ0FySGlDLEVBQUUsQ0FBQyxTQUFTLEdBcUg3QztrQkFySG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmcm9udDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBjYXJkVHlwZSA9IFwiXCI7XHJcblxyXG4gICAgaXNGYWNlVXAgPSBmYWxzZTtcclxuXHJcbiAgICBzdGFjayA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFBvcyA9IGNjLnYzKCk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZhY2VVcCh2YWx1ZTogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB0aGlzLmlzRmFjZVVwID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuZnJvbnQuYWN0aXZlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5iYWNrLmFjdGl2ZSA9ICF2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoKSB7XHJcblxyXG4gICAgICAgIC8vIGNo4buJIGNobyBrw6lvIGNhcmQgbeG7nyB0csOqbiBjw7luZ1xyXG4gICAgICAgIGlmICghdGhpcy5pc0ZhY2VVcCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhY2suaXNUb3BDYXJkKHRoaXMpKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uY2xvbmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMS4xO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KDk5OSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNGYWNlVXApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrLmlzVG9wQ2FyZCh0aGlzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgZGVsdGEgPSBlLmdldERlbHRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IGRlbHRhLng7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gZGVsdGEueTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNGYWNlVXApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrLmlzVG9wQ2FyZCh0aGlzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMuZ2V0RHJvcFNsb3QoKTtcclxuXHJcbiAgICAgICAgaWYgKHNsb3QpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdWNjZXNzID0gc2xvdC5nZXRDb21wb25lbnQoXCJTbG90XCIpLnRyeUFkZENhcmQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhY2sucmVtb3ZlVG9wQ2FyZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW92ZUJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUJhY2soKSB7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuc3RhcnRQb3NcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHJvcFNsb3QoKSB7XHJcblxyXG4gICAgICAgIGxldCBzbG90cyA9IGNjLmZpbmQoXCJDYW52YXMvQm9hcmRcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLkNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHMgb2Ygc2xvdHMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzLm5vZGUubmFtZSAhPSBcIkNlbnRlclNsb3RcIikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgYm94ID0gcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdwID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChib3guY29udGFpbnMod3ApKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iXX0=