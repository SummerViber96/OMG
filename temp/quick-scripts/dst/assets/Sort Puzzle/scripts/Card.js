
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXENhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF1SUM7UUFwSUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxjQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLFdBQUssR0FBRyxJQUFJLENBQUM7UUFFTCxjQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOztJQXlIL0IsQ0FBQztJQXZIRyxxQkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHdCQUFTLEdBQVQsVUFB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QXVJeEI7SUFBRCxXQUFDO0NBdklELEFBdUlDLENBdklpQyxFQUFFLENBQUMsU0FBUyxHQXVJN0M7a0JBdklvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZnJvbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFjazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgY2FyZFR5cGUgPSBcIlwiO1xyXG5cclxuICAgIGlzRmFjZVVwID0gZmFsc2U7XHJcblxyXG4gICAgc3RhY2sgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc3RhcnRQb3MgPSBjYy52MygpO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGYWNlVXAodmFsdWU6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgdGhpcy5pc0ZhY2VVcCA9IHZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLmZyb250LmFjdGl2ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuYmFjay5hY3RpdmUgPSAhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KCkge1xyXG5cclxuICAgICAgICAvLyBjaOG7iSBjaG8ga8OpbyBjYXJkIHRvcFxyXG4gICAgICAgIGlmICghdGhpcy5pc0ZhY2VVcCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhY2suaXNUb3BDYXJkKHRoaXMpKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uY2xvbmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMS4xO1xyXG5cclxuICAgICAgICAvLyBjb252ZXJ0IHdvcmxkIHBvc1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIC8vIMSRxrBhIGzDqm4gZHJhZyBsYXllclxyXG4gICAgICAgIGxldCBkcmFnTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL0RyYWdMYXllclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IGRyYWdMYXllcjtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gZHJhZ0xheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgLy8gbGF5ZXIgY2FvIG5o4bqldFxyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSA5OTk5O1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmFjZVVwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjay5pc1RvcENhcmQodGhpcykpIHJldHVybjtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBNYXRoLnJhbmRvbSgtNSwgNSk7XHJcbiAgICAgICAgbGV0IGRlbHRhID0gZS5nZXREZWx0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUueCArPSBkZWx0YS54O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IGRlbHRhLnk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEVuZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmFjZVVwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjay5pc1RvcENhcmQodGhpcykpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLmdldERyb3BTbG90KCk7XHJcblxyXG4gICAgICAgIGlmIChzbG90KSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3VjY2VzcyA9IHNsb3QuZ2V0Q29tcG9uZW50KFwiU2xvdFwiKS50cnlBZGRDYXJkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrLnJlbW92ZVRvcENhcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmVCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVCYWNrKCkge1xyXG5cclxuICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy5zdGFjay5ub2RlO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPVxyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnN0YXJ0UG9zXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERyb3BTbG90KCkge1xyXG5cclxuICAgICAgICBsZXQgc2xvdHMgPSBjYy5maW5kKFwiQ2FudmFzL0JvYXJkXCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5Db21wb25lbnQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzIG9mIHNsb3RzKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocy5ub2RlLm5hbWUgIT0gXCJDZW50ZXJTbG90XCIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJveCA9IHMubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3cCA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZiAoYm94LmNvbnRhaW5zKHdwKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59Il19