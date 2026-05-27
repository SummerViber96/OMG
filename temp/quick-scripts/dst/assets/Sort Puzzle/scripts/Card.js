
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
        _this.variant = 0;
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
        // chỉ cho kéo card top
        if (!this.isFaceUp)
            return;
        if (!this.stack.isTopCard(this))
            return;
        this.startPos = this.node.position.clone();
        this.node.scale = 1.1;
        // convert world pos
        var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        // đưa lên drag layer
        var dragLayer = cc.find("Canvas/DragLayer");
        this.node.parent = dragLayer;
        this.node.position = dragLayer.convertToNodeSpaceAR(worldPos);
        // layer cao nhất
        this.node.zIndex = 9999;
    };
    Card.prototype.onTouchMove = function (e) {
        if (!this.isFaceUp)
            return;
        if (!this.stack.isTopCard(this))
            return;
        this.node.angle = Math.random(-5, 5);
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
        var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        this.node.parent = this.stack.node;
        this.node.position =
            this.stack.node.convertToNodeSpaceAR(worldPos);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXENhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF3SUM7UUFySUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRUwsY0FBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7SUEwSC9CLENBQUM7SUF4SEcscUJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hF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QUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F3SXhCO0lBQUQsV0FBQztDQXhJRCxBQXdJQyxDQXhJaUMsRUFBRSxDQUFDLFNBQVMsR0F3STdDO2tCQXhJb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZyb250OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGNhcmRUeXBlID0gXCJcIjtcclxuICAgIHZhcmlhbnQgPSAwO1xyXG4gICAgaXNGYWNlVXAgPSBmYWxzZTtcclxuXHJcbiAgICBzdGFjayA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFBvcyA9IGNjLnYzKCk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZhY2VVcCh2YWx1ZTogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB0aGlzLmlzRmFjZVVwID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuZnJvbnQuYWN0aXZlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5iYWNrLmFjdGl2ZSA9ICF2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoKSB7XHJcblxyXG4gICAgICAgIC8vIGNo4buJIGNobyBrw6lvIGNhcmQgdG9wXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmFjZVVwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjay5pc1RvcENhcmQodGhpcykpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxLjE7XHJcblxyXG4gICAgICAgIC8vIGNvbnZlcnQgd29ybGQgcG9zXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gxJHGsGEgbMOqbiBkcmFnIGxheWVyXHJcbiAgICAgICAgbGV0IGRyYWdMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvRHJhZ0xheWVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gZHJhZ0xheWVyO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBkcmFnTGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICAvLyBsYXllciBjYW8gbmjhuqV0XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDk5OTk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNGYWNlVXApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrLmlzVG9wQ2FyZCh0aGlzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBNYXRoLnJhbmRvbSgtNSwgNSk7XHJcbiAgICAgICAgbGV0IGRlbHRhID0gZS5nZXREZWx0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUueCArPSBkZWx0YS54O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IGRlbHRhLnk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEVuZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmFjZVVwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjay5pc1RvcENhcmQodGhpcykpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLmdldERyb3BTbG90KCk7XHJcblxyXG4gICAgICAgIGlmIChzbG90KSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3VjY2VzcyA9IHNsb3QuZ2V0Q29tcG9uZW50KFwiU2xvdFwiKS50cnlBZGRDYXJkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrLnJlbW92ZVRvcENhcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmVCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVCYWNrKCkge1xyXG5cclxuICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy5zdGFjay5ub2RlO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPVxyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnN0YXJ0UG9zXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERyb3BTbG90KCkge1xyXG5cclxuICAgICAgICBsZXQgc2xvdHMgPSBjYy5maW5kKFwiQ2FudmFzL0JvYXJkXCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5Db21wb25lbnQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzIG9mIHNsb3RzKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocy5ub2RlLm5hbWUgIT0gXCJDZW50ZXJTbG90XCIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJveCA9IHMubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3cCA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZiAoYm94LmNvbnRhaW5zKHdwKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59Il19