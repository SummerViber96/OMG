
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
        _this.stackStartPos = cc.v3();
        _this.dragLayer = null;
        _this.isDragging = false;
        _this.isReturning = false;
        _this.dragAngle = 0;
        _this.movedDistance = 0;
        _this.gamePlay = null;
        return _this;
    }
    Card_1 = Card;
    Card.prototype.onLoad = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameManager");
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    };
    Card.prototype.setFaceUp = function (value) {
        this.isFaceUp = value;
        this.front.active = value;
        this.back.active = !value;
    };
    Card.prototype.onTouchStart = function (e) {
        if (!this.isFaceUp)
            return;
        if (!this.stack || !this.stack.isTopCard(this))
            return;
        // Đang bay về / đang kéo — bỏ qua click thứ 2 (double click)
        if (this.isReturning || this.isDragging)
            return;
        // Thẻ còn kẹt trên DragLayer từ lần trước → đưa về stack trước
        var dragLayer = cc.find("Canvas/DragLayer");
        if (dragLayer && this.node.parent === dragLayer) {
            this.syncStackStartPos();
            this.forceBackToStack();
            return;
        }
        cc.Tween.stopAllByTarget(this.node);
        this.isDragging = true;
        this.movedDistance = 0;
        this.stackStartPos = this.node.position.clone();
        this.dragAngle = Math.random() * 10 - 5;
        this.dragLayer = dragLayer;
        if (!this.dragLayer) {
            this.isDragging = false;
            return;
        }
        var worldPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        this.node.parent = this.dragLayer;
        this.node.position = this.dragLayer.convertToNodeSpaceAR(worldPos);
        this.node.angle = this.dragAngle;
        this.node.scale = 1.1;
        this.bringToFront(this.dragLayer);
    };
    Card.prototype.onTouchMove = function (e) {
        if (!this.isFaceUp || !this.isDragging || this.isReturning)
            return;
        if (!this.stack || !this.stack.isTopCard(this))
            return;
        var delta = e.getDelta();
        this.movedDistance += Math.sqrt(delta.x * delta.x + delta.y * delta.y);
        this.node.x += delta.x;
        this.node.y += delta.y;
    };
    Card.prototype.onTouchEnd = function () {
        this.onTouchFinish(false);
    };
    Card.prototype.onTouchCancel = function () {
        this.onTouchFinish(true);
    };
    Card.prototype.onTouchFinish = function (cancelled) {
        if (!this.isDragging || this.isReturning)
            return;
        this.isDragging = false;
        this.node.scale = 1;
        if (!this.stack || !this.stack.isTopCard(this)) {
            this.forceBackToStack();
            return;
        }
        this.gamePlay.countMove++;
        this.gamePlay.lbMoveCount.string = "Moves: " + this.gamePlay.countMove.toString();
        // Click / double-click không kéo → chỉ trả về, không thả vào slot
        if (this.movedDistance < Card_1.MIN_DRAG_DIST || cancelled) {
            this.moveBack();
            return;
        }
        var slot = this.getDropSlot();
        if (slot) {
            var success = slot.getComponent("Slot").tryAddCard(this);
            if (success) {
                this.stack.removeTopCard();
                this.dragLayer = null;
                this.movedDistance = 0;
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
        var _this = this;
        if (!this.stack)
            return;
        cc.audioEngine.play(this.gamePlay.soundWrong, false, 0.5);
        var dragLayer = this.dragLayer || cc.find("Canvas/DragLayer");
        if (!dragLayer)
            return;
        cc.Tween.stopAllByTarget(this.node);
        this.isReturning = true;
        if (this.node.parent !== dragLayer) {
            var worldPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
            this.node.parent = dragLayer;
            this.node.position = dragLayer.convertToNodeSpaceAR(worldPos);
        }
        this.bringToFront(dragLayer);
        var targetWorld = this.stack.node.convertToWorldSpaceAR(this.stackStartPos);
        var targetInDrag = dragLayer.convertToNodeSpaceAR(targetWorld);
        cc.tween(this.node)
            .to(0.2, {
            position: targetInDrag,
            angle: 0,
            scale: 1
        }, {
            easing: "sineOut"
        })
            .call(function () {
            _this.finishMoveBack();
        })
            .start();
    };
    Card.prototype.finishMoveBack = function () {
        if (!this.stack) {
            this.isReturning = false;
            return;
        }
        this.node.parent = this.stack.node;
        this.node.position = this.stackStartPos;
        this.node.angle = 0;
        this.node.scale = 1;
        var z = Math.max(0, this.stack.cards.length - 1);
        this.node.zIndex = z;
        this.node.setSiblingIndex(this.stack.node.childrenCount - 1);
        this.dragLayer = null;
        this.isReturning = false;
        this.movedDistance = 0;
    };
    Card.prototype.syncStackStartPos = function () {
        if (!this.stack)
            return;
        var index = this.stack.cards.indexOf(this);
        if (index < 0) {
            index = this.stack.cards.length - 1;
        }
        this.stackStartPos = cc.v3(0, index * 20, 0);
    };
    Card.prototype.forceBackToStack = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.isDragging = false;
        this.isReturning = false;
        this.movedDistance = 0;
        if (!this.stack)
            return;
        this.node.parent = this.stack.node;
        this.node.position = this.stackStartPos;
        this.node.angle = 0;
        this.node.scale = 1;
        var z = Math.max(0, this.stack.cards.length - 1);
        this.node.zIndex = z;
        this.node.setSiblingIndex(this.stack.node.childrenCount - 1);
        this.dragLayer = null;
    };
    Card.prototype.bringToFront = function (layer) {
        this.node.zIndex = 9999;
        this.node.setSiblingIndex(layer.childrenCount - 1);
    };
    Card.prototype.getDropSlot = function () {
        var slots = cc.find("Canvas/Board")
            .getComponentsInChildren(cc.Component);
        var wp = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        for (var _i = 0, slots_1 = slots; _i < slots_1.length; _i++) {
            var s = slots_1[_i];
            if (s.node.name != "CenterSlot")
                continue;
            var box = s.node.getBoundingBoxToWorld();
            if (box.contains(wp)) {
                return s.node;
            }
        }
        return null;
    };
    var Card_1;
    Card.MIN_DRAG_DIST = 12;
    __decorate([
        property(cc.Node)
    ], Card.prototype, "front", void 0);
    __decorate([
        property(cc.Node)
    ], Card.prototype, "back", void 0);
    Card = Card_1 = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXENhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE4UUM7UUEzUUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRUwsbUJBQWEsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFHMUIsY0FBUSxHQUFHLElBQUksQ0FBQzs7SUF3UHBCLENBQUM7YUE5UW9CLElBQUk7SUF1QnJCLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFF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QUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUM5Qix1QkFBdUIsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRELEtBQWMsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRTtZQUFoQixJQUFJLENBQUMsY0FBQTtZQUVOLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWTtnQkFBRSxTQUFTO1lBRTFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUV6QyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQzthQUNqQjtTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7SUF4UGMsa0JBQWEsR0FBRyxFQUFFLENBQUM7SUFsQmxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FDRztJQU5KLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4UXhCO0lBQUQsV0FBQztDQTlRRCxBQThRQyxDQTlRaUMsRUFBRSxDQUFDLFNBQVMsR0E4UTdDO2tCQTlRb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZyb250OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGNhcmRUeXBlID0gXCJcIjtcclxuICAgIHZhcmlhbnQgPSAwO1xyXG4gICAgaXNGYWNlVXAgPSBmYWxzZTtcclxuXHJcbiAgICBzdGFjayA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFja1N0YXJ0UG9zID0gY2MudjMoKTtcclxuICAgIHByaXZhdGUgZHJhZ0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1JldHVybmluZyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBkcmFnQW5nbGUgPSAwO1xyXG4gICAgcHJpdmF0ZSBtb3ZlZERpc3RhbmNlID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBNSU5fRFJBR19ESVNUID0gMTI7XHJcbiAgICBnYW1lUGxheSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaENhbmNlbCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmFjZVVwKHZhbHVlOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaXNGYWNlVXAgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5mcm9udC5hY3RpdmUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmJhY2suYWN0aXZlID0gIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0ZhY2VVcCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhY2sgfHwgIXRoaXMuc3RhY2suaXNUb3BDYXJkKHRoaXMpKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIMSQYW5nIGJheSB24buBIC8gxJFhbmcga8OpbyDigJQgYuG7jyBxdWEgY2xpY2sgdGjhu6kgMiAoZG91YmxlIGNsaWNrKVxyXG4gICAgICAgIGlmICh0aGlzLmlzUmV0dXJuaW5nIHx8IHRoaXMuaXNEcmFnZ2luZykgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBUaOG6uyBjw7JuIGvhurl0IHRyw6puIERyYWdMYXllciB04burIGzhuqduIHRyxrDhu5tjIOKGkiDEkcawYSB24buBIHN0YWNrIHRyxrDhu5tjXHJcbiAgICAgICAgbGV0IGRyYWdMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvRHJhZ0xheWVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoZHJhZ0xheWVyICYmIHRoaXMubm9kZS5wYXJlbnQgPT09IGRyYWdMYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnN5bmNTdGFja1N0YXJ0UG9zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VCYWNrVG9TdGFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1vdmVkRGlzdGFuY2UgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTdGFydFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhZ0FuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDEwIC0gNTtcclxuICAgICAgICB0aGlzLmRyYWdMYXllciA9IGRyYWdMYXllcjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRyYWdMYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLmRyYWdMYXllcjtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLmRyYWdMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gdGhpcy5kcmFnQW5nbGU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMS4xO1xyXG5cclxuICAgICAgICB0aGlzLmJyaW5nVG9Gcm9udCh0aGlzLmRyYWdMYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNGYWNlVXAgfHwgIXRoaXMuaXNEcmFnZ2luZyB8fCB0aGlzLmlzUmV0dXJuaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjayB8fCAhdGhpcy5zdGFjay5pc1RvcENhcmQodGhpcykpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGRlbHRhID0gZS5nZXREZWx0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVkRGlzdGFuY2UgKz0gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICBkZWx0YS54ICogZGVsdGEueCArIGRlbHRhLnkgKiBkZWx0YS55XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gZGVsdGEueDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSBkZWx0YS55O1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hFbmQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMub25Ub3VjaEZpbmlzaChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaENhbmNlbCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vblRvdWNoRmluaXNoKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hGaW5pc2goY2FuY2VsbGVkOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nIHx8IHRoaXMuaXNSZXR1cm5pbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrIHx8ICF0aGlzLnN0YWNrLmlzVG9wQ2FyZCh0aGlzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlQmFja1RvU3RhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmNvdW50TW92ZSsrO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkubGJNb3ZlQ291bnQuc3RyaW5nPVwiTW92ZXM6IFwiK3RoaXMuZ2FtZVBsYXkuY291bnRNb3ZlLnRvU3RyaW5nKClcclxuICAgICAgICAvLyBDbGljayAvIGRvdWJsZS1jbGljayBraMO0bmcga8OpbyDihpIgY2jhu4kgdHLhuqMgduG7gSwga2jDtG5nIHRo4bqjIHbDoG8gc2xvdFxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVkRGlzdGFuY2UgPCBDYXJkLk1JTl9EUkFHX0RJU1QgfHwgY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUJhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLmdldERyb3BTbG90KCk7XHJcblxyXG4gICAgICAgIGlmIChzbG90KSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3VjY2VzcyA9IHNsb3QuZ2V0Q29tcG9uZW50KFwiU2xvdFwiKS50cnlBZGRDYXJkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrLnJlbW92ZVRvcENhcmQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0xheWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZWREaXN0YW5jZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZlQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlQmFjaygpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrKSByZXR1cm47XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kV3JvbmcsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgbGV0IGRyYWdMYXllciA9IHRoaXMuZHJhZ0xheWVyIHx8IGNjLmZpbmQoXCJDYW52YXMvRHJhZ0xheWVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWRyYWdMYXllcikgcmV0dXJuO1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuaXNSZXR1cm5pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudCAhPT0gZHJhZ0xheWVyKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBkcmFnTGF5ZXI7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGRyYWdMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJyaW5nVG9Gcm9udChkcmFnTGF5ZXIpO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0V29ybGQgPSB0aGlzLnN0YWNrLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuc3RhY2tTdGFydFBvcyk7XHJcbiAgICAgICAgbGV0IHRhcmdldEluRHJhZyA9IGRyYWdMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXRXb3JsZCk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRhcmdldEluRHJhZyxcclxuICAgICAgICAgICAgICAgIGFuZ2xlOiAwLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcInNpbmVPdXRcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmVCYWNrKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaE1vdmVCYWNrKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JldHVybmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy5zdGFjay5ub2RlO1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuc3RhY2tTdGFydFBvcztcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIGxldCB6ID0gTWF0aC5tYXgoMCwgdGhpcy5zdGFjay5jYXJkcy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IHo7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleCh0aGlzLnN0YWNrLm5vZGUuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG5cclxuICAgICAgICB0aGlzLmRyYWdMYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1JldHVybmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW92ZWREaXN0YW5jZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3luY1N0YWNrU3RhcnRQb3MoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjaykgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YWNrLmNhcmRzLmluZGV4T2YodGhpcyk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLnN0YWNrLmNhcmRzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YWNrU3RhcnRQb3MgPSBjYy52MygwLCBpbmRleCAqIDIwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JjZUJhY2tUb1N0YWNrKCkge1xyXG5cclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1JldHVybmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW92ZWREaXN0YW5jZSA9IDA7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjaykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy5zdGFjay5ub2RlO1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuc3RhY2tTdGFydFBvcztcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIGxldCB6ID0gTWF0aC5tYXgoMCwgdGhpcy5zdGFjay5jYXJkcy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IHo7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleCh0aGlzLnN0YWNrLm5vZGUuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG5cclxuICAgICAgICB0aGlzLmRyYWdMYXllciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYnJpbmdUb0Zyb250KGxheWVyOiBjYy5Ob2RlKSB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSA5OTk5O1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgobGF5ZXIuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERyb3BTbG90KCkge1xyXG5cclxuICAgICAgICBsZXQgc2xvdHMgPSBjYy5maW5kKFwiQ2FudmFzL0JvYXJkXCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5Db21wb25lbnQpO1xyXG5cclxuICAgICAgICBsZXQgd3AgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzbG90cykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHMubm9kZS5uYW1lICE9IFwiQ2VudGVyU2xvdFwiKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBib3ggPSBzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYm94LmNvbnRhaW5zKHdwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl19