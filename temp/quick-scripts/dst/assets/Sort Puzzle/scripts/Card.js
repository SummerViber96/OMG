
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
            return;
        }
        var bgSlot = this.getDropBgSlot();
        if (bgSlot && bgSlot.tryAddCard(this)) {
            var sourceStack = this.stack;
            sourceStack.removeTopCard();
            this.stack = bgSlot.stack;
            this.dragLayer = null;
            this.movedDistance = 0;
            return;
        }
        this.moveBack();
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
        if (this.stack.bgSlot && this.stack.bgSlot.getCard() === this) {
            this.node.parent = this.stack.bgSlot.node;
            this.node.position = this.stackStartPos;
            this.node.angle = 0;
            this.node.scale = 1;
            this.node.zIndex = 1;
        }
        else {
            this.node.parent = this.stack.node;
            this.node.position = this.stackStartPos;
            this.node.angle = 0;
            this.node.scale = 1;
            var z = Math.max(0, this.stack.cards.length - 1);
            this.node.zIndex = z;
            this.node.setSiblingIndex(this.stack.node.childrenCount - 1);
        }
        this.dragLayer = null;
        this.isReturning = false;
        this.movedDistance = 0;
    };
    Card.prototype.syncStackStartPos = function () {
        if (!this.stack)
            return;
        if (this.stack.bgSlot && this.stack.bgSlot.getCard() === this) {
            this.stackStartPos = cc.v3(0, 0, 0);
            return;
        }
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
        if (this.stack.bgSlot && this.stack.bgSlot.getCard() === this) {
            this.node.parent = this.stack.bgSlot.node;
            this.node.position = this.stackStartPos;
            this.node.angle = 0;
            this.node.scale = 1;
            this.node.zIndex = 1;
        }
        else {
            this.node.parent = this.stack.node;
            this.node.position = this.stackStartPos;
            this.node.angle = 0;
            this.node.scale = 1;
            var z = Math.max(0, this.stack.cards.length - 1);
            this.node.zIndex = z;
            this.node.setSiblingIndex(this.stack.node.childrenCount - 1);
        }
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
    Card.prototype.getDropBgSlot = function () {
        var board = cc.find("Canvas/Board");
        if (!board)
            return null;
        var wp = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        for (var i = 0; i < board.childrenCount; i++) {
            var row = board.children[i];
            for (var _i = 0, _a = ["LeftStack", "RightStack"]; _i < _a.length; _i++) {
                var name = _a[_i];
                var stackNode = row.getChildByName(name);
                if (!stackNode)
                    continue;
                var bg = stackNode.getComponentInChildren("CardBgSlot");
                if (bg && bg.canAcceptDrop(wp)) {
                    return bg;
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXENhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFvVkM7UUFqVkcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRUwsbUJBQWEsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFHMUIsY0FBUSxHQUFHLElBQUksQ0FBQzs7SUE4VHBCLENBQUM7YUFwVm9CLElBQUk7SUF1QnJCLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFF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Y2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmcm9udDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBjYXJkVHlwZSA9IFwiXCI7XHJcbiAgICB2YXJpYW50ID0gMDtcclxuICAgIGlzRmFjZVVwID0gZmFsc2U7XHJcblxyXG4gICAgc3RhY2sgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc3RhY2tTdGFydFBvcyA9IGNjLnYzKCk7XHJcbiAgICBwcml2YXRlIGRyYWdMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNSZXR1cm5pbmcgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZHJhZ0FuZ2xlID0gMDtcclxuICAgIHByaXZhdGUgbW92ZWREaXN0YW5jZSA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgTUlOX0RSQUdfRElTVCA9IDEyO1xyXG4gICAgZ2FtZVBsYXkgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hDYW5jZWwsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZhY2VVcCh2YWx1ZTogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB0aGlzLmlzRmFjZVVwID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuZnJvbnQuYWN0aXZlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5iYWNrLmFjdGl2ZSA9ICF2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNGYWNlVXApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrIHx8ICF0aGlzLnN0YWNrLmlzVG9wQ2FyZCh0aGlzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyDEkGFuZyBiYXkgduG7gSAvIMSRYW5nIGvDqW8g4oCUIGLhu48gcXVhIGNsaWNrIHRo4bupIDIgKGRvdWJsZSBjbGljaylcclxuICAgICAgICBpZiAodGhpcy5pc1JldHVybmluZyB8fCB0aGlzLmlzRHJhZ2dpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gVGjhursgY8OybiBr4bq5dCB0csOqbiBEcmFnTGF5ZXIgdOG7qyBs4bqnbiB0csaw4bubYyDihpIgxJHGsGEgduG7gSBzdGFjayB0csaw4bubY1xyXG4gICAgICAgIGxldCBkcmFnTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL0RyYWdMYXllclwiKTtcclxudGhpcy5nYW1lUGxheS5vZmZHdWlsZCgpXHJcbiAgICAgICAgaWYgKGRyYWdMYXllciAmJiB0aGlzLm5vZGUucGFyZW50ID09PSBkcmFnTGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zeW5jU3RhY2tTdGFydFBvcygpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlQmFja1RvU3RhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tb3ZlZERpc3RhbmNlID0gMDtcclxuICAgICAgICB0aGlzLnN0YWNrU3RhcnRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICB0aGlzLmRyYWdBbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAxMCAtIDU7XHJcbiAgICAgICAgdGhpcy5kcmFnTGF5ZXIgPSBkcmFnTGF5ZXI7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kcmFnTGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy5kcmFnTGF5ZXI7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5kcmFnTGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMuZHJhZ0FuZ2xlO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDEuMTtcclxuXHJcbiAgICAgICAgdGhpcy5icmluZ1RvRnJvbnQodGhpcy5kcmFnTGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmFjZVVwIHx8ICF0aGlzLmlzRHJhZ2dpbmcgfHwgdGhpcy5pc1JldHVybmluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhY2sgfHwgIXRoaXMuc3RhY2suaXNUb3BDYXJkKHRoaXMpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBkZWx0YSA9IGUuZ2V0RGVsdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlZERpc3RhbmNlICs9IE1hdGguc3FydChcclxuICAgICAgICAgICAgZGVsdGEueCAqIGRlbHRhLnggKyBkZWx0YS55ICogZGVsdGEueVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IGRlbHRhLng7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gZGVsdGEueTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKCkge1xyXG5cclxuICAgICAgICB0aGlzLm9uVG91Y2hGaW5pc2goZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hDYW5jZWwoKSB7XHJcblxyXG4gICAgICAgIHRoaXMub25Ub3VjaEZpbmlzaCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRmluaXNoKGNhbmNlbGxlZDogYm9vbGVhbikge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZyB8fCB0aGlzLmlzUmV0dXJuaW5nKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhY2sgfHwgIXRoaXMuc3RhY2suaXNUb3BDYXJkKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VCYWNrVG9TdGFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuY2hlY2tNb3ZlKClcclxuICAgICBcclxuICAgICAgICAvLyBDbGljayAvIGRvdWJsZS1jbGljayBraMO0bmcga8OpbyDihpIgY2jhu4kgdHLhuqMgduG7gSwga2jDtG5nIHRo4bqjIHbDoG8gc2xvdFxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVkRGlzdGFuY2UgPCBDYXJkLk1JTl9EUkFHX0RJU1QgfHwgY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUJhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLmdldERyb3BTbG90KCk7XHJcblxyXG4gICAgICAgIGlmIChzbG90KSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3VjY2VzcyA9IHNsb3QuZ2V0Q29tcG9uZW50KFwiU2xvdFwiKS50cnlBZGRDYXJkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrLnJlbW92ZVRvcENhcmQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0xheWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZWREaXN0YW5jZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJnU2xvdCA9IHRoaXMuZ2V0RHJvcEJnU2xvdCgpO1xyXG5cclxuICAgICAgICBpZiAoYmdTbG90ICYmIGJnU2xvdC50cnlBZGRDYXJkKHRoaXMpKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc291cmNlU3RhY2sgPSB0aGlzLnN0YWNrO1xyXG5cclxuICAgICAgICAgICAgc291cmNlU3RhY2sucmVtb3ZlVG9wQ2FyZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrID0gYmdTbG90LnN0YWNrO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdMYXllciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZWREaXN0YW5jZSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW92ZUJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlQmFjaygpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrKSByZXR1cm47XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kV3JvbmcsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgbGV0IGRyYWdMYXllciA9IHRoaXMuZHJhZ0xheWVyIHx8IGNjLmZpbmQoXCJDYW52YXMvRHJhZ0xheWVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWRyYWdMYXllcikgcmV0dXJuO1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuaXNSZXR1cm5pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudCAhPT0gZHJhZ0xheWVyKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBkcmFnTGF5ZXI7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGRyYWdMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJyaW5nVG9Gcm9udChkcmFnTGF5ZXIpO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0V29ybGQgPSB0aGlzLnN0YWNrLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuc3RhY2tTdGFydFBvcyk7XHJcbiAgICAgICAgbGV0IHRhcmdldEluRHJhZyA9IGRyYWdMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXRXb3JsZCk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRhcmdldEluRHJhZyxcclxuICAgICAgICAgICAgICAgIGFuZ2xlOiAwLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcInNpbmVPdXRcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmVCYWNrKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaE1vdmVCYWNrKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JldHVybmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGFjay5iZ1Nsb3QgJiYgdGhpcy5zdGFjay5iZ1Nsb3QuZ2V0Q2FyZCgpID09PSB0aGlzKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy5zdGFjay5iZ1Nsb3Qubm9kZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5zdGFja1N0YXJ0UG9zO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLnN0YWNrLm5vZGU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuc3RhY2tTdGFydFBvcztcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgICAgIGxldCB6ID0gTWF0aC5tYXgoMCwgdGhpcy5zdGFjay5jYXJkcy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSB6O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KHRoaXMuc3RhY2subm9kZS5jaGlsZHJlbkNvdW50IC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYWdMYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1JldHVybmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW92ZWREaXN0YW5jZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3luY1N0YWNrU3RhcnRQb3MoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjaykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGFjay5iZ1Nsb3QgJiYgdGhpcy5zdGFjay5iZ1Nsb3QuZ2V0Q2FyZCgpID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2tTdGFydFBvcyA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YWNrLmNhcmRzLmluZGV4T2YodGhpcyk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLnN0YWNrLmNhcmRzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YWNrU3RhcnRQb3MgPSBjYy52MygwLCBpbmRleCAqIDIwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JjZUJhY2tUb1N0YWNrKCkge1xyXG5cclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1JldHVybmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW92ZWREaXN0YW5jZSA9IDA7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFjaykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGFjay5iZ1Nsb3QgJiYgdGhpcy5zdGFjay5iZ1Nsb3QuZ2V0Q2FyZCgpID09PSB0aGlzKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy5zdGFjay5iZ1Nsb3Qubm9kZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5zdGFja1N0YXJ0UG9zO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLnN0YWNrLm5vZGU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuc3RhY2tTdGFydFBvcztcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgICAgIGxldCB6ID0gTWF0aC5tYXgoMCwgdGhpcy5zdGFjay5jYXJkcy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSB6O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KHRoaXMuc3RhY2subm9kZS5jaGlsZHJlbkNvdW50IC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYWdMYXllciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYnJpbmdUb0Zyb250KGxheWVyOiBjYy5Ob2RlKSB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSA5OTk5O1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgobGF5ZXIuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERyb3BTbG90KCkge1xyXG5cclxuICAgICAgICBsZXQgc2xvdHMgPSBjYy5maW5kKFwiQ2FudmFzL0JvYXJkXCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5Db21wb25lbnQpO1xyXG5cclxuICAgICAgICBsZXQgd3AgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzbG90cykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHMubm9kZS5uYW1lICE9IFwiQ2VudGVyU2xvdFwiKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBib3ggPSBzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYm94LmNvbnRhaW5zKHdwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHJvcEJnU2xvdCgpIHtcclxuXHJcbiAgICAgICAgbGV0IGJvYXJkID0gY2MuZmluZChcIkNhbnZhcy9Cb2FyZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFib2FyZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCB3cCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvdyA9IGJvYXJkLmNoaWxkcmVuW2ldO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBbXCJMZWZ0U3RhY2tcIiwgXCJSaWdodFN0YWNrXCJdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrTm9kZSA9IHJvdy5nZXRDaGlsZEJ5TmFtZShuYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YWNrTm9kZSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJnID0gc3RhY2tOb2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oXCJDYXJkQmdTbG90XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiZyAmJiBiZy5jYW5BY2NlcHREcm9wKHdwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl19