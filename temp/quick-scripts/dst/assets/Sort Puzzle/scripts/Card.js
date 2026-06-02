
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
        this.gamePlay.offGuild();
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
        this.gamePlay.checkMove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXENhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErUUM7UUE1UUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRUwsbUJBQWEsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFHMUIsY0FBUSxHQUFHLElBQUksQ0FBQzs7SUF5UHBCLENBQUM7YUEvUW9CLElBQUk7SUF1QnJCLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFF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LENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRELEtBQWMsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRTtZQUFoQixJQUFJLENBQUMsY0FBQTtZQUVOLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWTtnQkFBRSxTQUFTO1lBRTFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUV6QyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQzthQUNqQjtTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7SUF6UGMsa0JBQWEsR0FBRyxFQUFFLENBQUM7SUFsQmxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FDRztJQU5KLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0ErUXhCO0lBQUQsV0FBQztDQS9RRCxBQStRQyxDQS9RaUMsRUFBRSxDQUFDLFNBQVMsR0ErUTdDO2tCQS9Rb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZyb250OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGNhcmRUeXBlID0gXCJcIjtcclxuICAgIHZhcmlhbnQgPSAwO1xyXG4gICAgaXNGYWNlVXAgPSBmYWxzZTtcclxuXHJcbiAgICBzdGFjayA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFja1N0YXJ0UG9zID0gY2MudjMoKTtcclxuICAgIHByaXZhdGUgZHJhZ0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1JldHVybmluZyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBkcmFnQW5nbGUgPSAwO1xyXG4gICAgcHJpdmF0ZSBtb3ZlZERpc3RhbmNlID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBNSU5fRFJBR19ESVNUID0gMTI7XHJcbiAgICBnYW1lUGxheSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaENhbmNlbCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmFjZVVwKHZhbHVlOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaXNGYWNlVXAgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5mcm9udC5hY3RpdmUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmJhY2suYWN0aXZlID0gIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0ZhY2VVcCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhY2sgfHwgIXRoaXMuc3RhY2suaXNUb3BDYXJkKHRoaXMpKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIMSQYW5nIGJheSB24buBIC8gxJFhbmcga8OpbyDigJQgYuG7jyBxdWEgY2xpY2sgdGjhu6kgMiAoZG91YmxlIGNsaWNrKVxyXG4gICAgICAgIGlmICh0aGlzLmlzUmV0dXJuaW5nIHx8IHRoaXMuaXNEcmFnZ2luZykgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBUaOG6uyBjw7JuIGvhurl0IHRyw6puIERyYWdMYXllciB04burIGzhuqduIHRyxrDhu5tjIOKGkiDEkcawYSB24buBIHN0YWNrIHRyxrDhu5tjXHJcbiAgICAgICAgbGV0IGRyYWdMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvRHJhZ0xheWVyXCIpO1xyXG50aGlzLmdhbWVQbGF5Lm9mZkd1aWxkKClcclxuICAgICAgICBpZiAoZHJhZ0xheWVyICYmIHRoaXMubm9kZS5wYXJlbnQgPT09IGRyYWdMYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnN5bmNTdGFja1N0YXJ0UG9zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VCYWNrVG9TdGFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1vdmVkRGlzdGFuY2UgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTdGFydFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhZ0FuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDEwIC0gNTtcclxuICAgICAgICB0aGlzLmRyYWdMYXllciA9IGRyYWdMYXllcjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRyYWdMYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLmRyYWdMYXllcjtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLmRyYWdMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gdGhpcy5kcmFnQW5nbGU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMS4xO1xyXG5cclxuICAgICAgICB0aGlzLmJyaW5nVG9Gcm9udCh0aGlzLmRyYWdMYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNGYWNlVXAgfHwgIXRoaXMuaXNEcmFnZ2luZyB8fCB0aGlzLmlzUmV0dXJuaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjayB8fCAhdGhpcy5zdGFjay5pc1RvcENhcmQodGhpcykpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGRlbHRhID0gZS5nZXREZWx0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVkRGlzdGFuY2UgKz0gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICBkZWx0YS54ICogZGVsdGEueCArIGRlbHRhLnkgKiBkZWx0YS55XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gZGVsdGEueDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSBkZWx0YS55O1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hFbmQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMub25Ub3VjaEZpbmlzaChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaENhbmNlbCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vblRvdWNoRmluaXNoKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hGaW5pc2goY2FuY2VsbGVkOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nIHx8IHRoaXMuaXNSZXR1cm5pbmcpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjayB8fCAhdGhpcy5zdGFjay5pc1RvcENhcmQodGhpcykpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZUJhY2tUb1N0YWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jaGVja01vdmUoKVxyXG4gICAgIFxyXG4gICAgICAgIC8vIENsaWNrIC8gZG91YmxlLWNsaWNrIGtow7RuZyBrw6lvIOKGkiBjaOG7iSB0cuG6oyB24buBLCBraMO0bmcgdGjhuqMgdsOgbyBzbG90XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZWREaXN0YW5jZSA8IENhcmQuTUlOX0RSQUdfRElTVCB8fCBjYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlQmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMuZ2V0RHJvcFNsb3QoKTtcclxuXHJcbiAgICAgICAgaWYgKHNsb3QpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdWNjZXNzID0gc2xvdC5nZXRDb21wb25lbnQoXCJTbG90XCIpLnRyeUFkZENhcmQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhY2sucmVtb3ZlVG9wQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnTGF5ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlZERpc3RhbmNlID0gMDtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmVCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVCYWNrKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhY2spIHJldHVybjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRXcm9uZywgZmFsc2UsIDAuNSlcclxuICAgICAgICBsZXQgZHJhZ0xheWVyID0gdGhpcy5kcmFnTGF5ZXIgfHwgY2MuZmluZChcIkNhbnZhcy9EcmFnTGF5ZXJcIik7XHJcblxyXG4gICAgICAgIGlmICghZHJhZ0xheWVyKSByZXR1cm47XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5pc1JldHVybmluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50ICE9PSBkcmFnTGF5ZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IGRyYWdMYXllcjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gZHJhZ0xheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnJpbmdUb0Zyb250KGRyYWdMYXllcik7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRXb3JsZCA9IHRoaXMuc3RhY2subm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5zdGFja1N0YXJ0UG9zKTtcclxuICAgICAgICBsZXQgdGFyZ2V0SW5EcmFnID0gZHJhZ0xheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldFdvcmxkKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4yLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGFyZ2V0SW5EcmFnLFxyXG4gICAgICAgICAgICAgICAgYW5nbGU6IDAsXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwic2luZU91dFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZUJhY2soKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluaXNoTW92ZUJhY2soKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmlzUmV0dXJuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLnN0YWNrLm5vZGU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5zdGFja1N0YXJ0UG9zO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgbGV0IHogPSBNYXRoLm1heCgwLCB0aGlzLnN0YWNrLmNhcmRzLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gejtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KHRoaXMuc3RhY2subm9kZS5jaGlsZHJlbkNvdW50IC0gMSk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ0xheWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzUmV0dXJuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb3ZlZERpc3RhbmNlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzeW5jU3RhY2tTdGFydFBvcygpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhY2suY2FyZHMuaW5kZXhPZih0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuc3RhY2suY2FyZHMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhY2tTdGFydFBvcyA9IGNjLnYzKDAsIGluZGV4ICogMjAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcmNlQmFja1RvU3RhY2soKSB7XHJcblxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUmV0dXJuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb3ZlZERpc3RhbmNlID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLnN0YWNrLm5vZGU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5zdGFja1N0YXJ0UG9zO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgbGV0IHogPSBNYXRoLm1heCgwLCB0aGlzLnN0YWNrLmNhcmRzLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gejtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KHRoaXMuc3RhY2subm9kZS5jaGlsZHJlbkNvdW50IC0gMSk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ0xheWVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBicmluZ1RvRnJvbnQobGF5ZXI6IGNjLk5vZGUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDk5OTk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleChsYXllci5jaGlsZHJlbkNvdW50IC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHJvcFNsb3QoKSB7XHJcblxyXG4gICAgICAgIGxldCBzbG90cyA9IGNjLmZpbmQoXCJDYW52YXMvQm9hcmRcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLkNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIGxldCB3cCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzIG9mIHNsb3RzKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocy5ub2RlLm5hbWUgIT0gXCJDZW50ZXJTbG90XCIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJveCA9IHMubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChib3guY29udGFpbnMod3ApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5ub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iXX0=