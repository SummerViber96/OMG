
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
        return _this;
    }
    Card_1 = Card;
    Card.prototype.onLoad = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Tb3J0IFB1enpsZS9zY3JpcHRzL0NhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE2UUM7UUExUUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRUwsbUJBQWEsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWEsR0FBRyxDQUFDLENBQUM7O0lBMFA5QixDQUFDO2FBN1FvQixJQUFJO0lBdUJyQixxQkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FB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LHFCQUFxQixFQUFFLENBQUM7WUFFekMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNsQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDakI7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O0lBdlBjLGtCQUFhLEdBQUcsRUFBRSxDQUFDO0lBbEJsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0NBQ0c7SUFOSixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBNlF4QjtJQUFELFdBQUM7Q0E3UUQsQUE2UUMsQ0E3UWlDLEVBQUUsQ0FBQyxTQUFTLEdBNlE3QztrQkE3UW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmcm9udDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiYWNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGNhcmRUeXBlID0gXCJcIjtcbiAgICB2YXJpYW50ID0gMDtcbiAgICBpc0ZhY2VVcCA9IGZhbHNlO1xuXG4gICAgc3RhY2sgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzdGFja1N0YXJ0UG9zID0gY2MudjMoKTtcbiAgICBwcml2YXRlIGRyYWdMYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc1JldHVybmluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgZHJhZ0FuZ2xlID0gMDtcbiAgICBwcml2YXRlIG1vdmVkRGlzdGFuY2UgPSAwO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgTUlOX0RSQUdfRElTVCA9IDEyO1xuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaENhbmNlbCwgdGhpcyk7XG4gICAgfVxuXG4gICAgc2V0RmFjZVVwKHZhbHVlOiBib29sZWFuKSB7XG5cbiAgICAgICAgdGhpcy5pc0ZhY2VVcCA9IHZhbHVlO1xuXG4gICAgICAgIHRoaXMuZnJvbnQuYWN0aXZlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYmFjay5hY3RpdmUgPSAhdmFsdWU7XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcblxuICAgICAgICBpZiAoIXRoaXMuaXNGYWNlVXApIHJldHVybjtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhY2sgfHwgIXRoaXMuc3RhY2suaXNUb3BDYXJkKHRoaXMpKSByZXR1cm47XG5cbiAgICAgICAgLy8gxJBhbmcgYmF5IHbhu4EgLyDEkWFuZyBrw6lvIOKAlCBi4buPIHF1YSBjbGljayB0aOG7qSAyIChkb3VibGUgY2xpY2spXG4gICAgICAgIGlmICh0aGlzLmlzUmV0dXJuaW5nIHx8IHRoaXMuaXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICAgIC8vIFRo4bq7IGPDsm4ga+G6uXQgdHLDqm4gRHJhZ0xheWVyIHThu6sgbOG6p24gdHLGsOG7m2Mg4oaSIMSRxrBhIHbhu4Egc3RhY2sgdHLGsOG7m2NcbiAgICAgICAgbGV0IGRyYWdMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvRHJhZ0xheWVyXCIpO1xuXG4gICAgICAgIGlmIChkcmFnTGF5ZXIgJiYgdGhpcy5ub2RlLnBhcmVudCA9PT0gZHJhZ0xheWVyKSB7XG4gICAgICAgICAgICB0aGlzLnN5bmNTdGFja1N0YXJ0UG9zKCk7XG4gICAgICAgICAgICB0aGlzLmZvcmNlQmFja1RvU3RhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xuXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMubW92ZWREaXN0YW5jZSA9IDA7XG4gICAgICAgIHRoaXMuc3RhY2tTdGFydFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmRyYWdBbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAxMCAtIDU7XG4gICAgICAgIHRoaXMuZHJhZ0xheWVyID0gZHJhZ0xheWVyO1xuXG4gICAgICAgIGlmICghdGhpcy5kcmFnTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHRoaXMuZHJhZ0xheWVyO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLmRyYWdMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMuZHJhZ0FuZ2xlO1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxLjE7XG5cbiAgICAgICAgdGhpcy5icmluZ1RvRnJvbnQodGhpcy5kcmFnTGF5ZXIpO1xuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcblxuICAgICAgICBpZiAoIXRoaXMuaXNGYWNlVXAgfHwgIXRoaXMuaXNEcmFnZ2luZyB8fCB0aGlzLmlzUmV0dXJuaW5nKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrIHx8ICF0aGlzLnN0YWNrLmlzVG9wQ2FyZCh0aGlzKSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkZWx0YSA9IGUuZ2V0RGVsdGEoKTtcblxuICAgICAgICB0aGlzLm1vdmVkRGlzdGFuY2UgKz0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgZGVsdGEueCAqIGRlbHRhLnggKyBkZWx0YS55ICogZGVsdGEueVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubm9kZS54ICs9IGRlbHRhLng7XG4gICAgICAgIHRoaXMubm9kZS55ICs9IGRlbHRhLnk7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZCgpIHtcblxuICAgICAgICB0aGlzLm9uVG91Y2hGaW5pc2goZmFsc2UpO1xuICAgIH1cblxuICAgIG9uVG91Y2hDYW5jZWwoKSB7XG5cbiAgICAgICAgdGhpcy5vblRvdWNoRmluaXNoKHRydWUpO1xuICAgIH1cblxuICAgIG9uVG91Y2hGaW5pc2goY2FuY2VsbGVkOiBib29sZWFuKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcgfHwgdGhpcy5pc1JldHVybmluZykgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGFjayB8fCAhdGhpcy5zdGFjay5pc1RvcENhcmQodGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VCYWNrVG9TdGFjaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xpY2sgLyBkb3VibGUtY2xpY2sga2jDtG5nIGvDqW8g4oaSIGNo4buJIHRy4bqjIHbhu4EsIGtow7RuZyB0aOG6oyB2w6BvIHNsb3RcbiAgICAgICAgaWYgKHRoaXMubW92ZWREaXN0YW5jZSA8IENhcmQuTUlOX0RSQUdfRElTVCB8fCBjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUJhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5nZXREcm9wU2xvdCgpO1xuXG4gICAgICAgIGlmIChzbG90KSB7XG5cbiAgICAgICAgICAgIGxldCBzdWNjZXNzID0gc2xvdC5nZXRDb21wb25lbnQoXCJTbG90XCIpLnRyeUFkZENhcmQodGhpcyk7XG5cbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrLnJlbW92ZVRvcENhcmQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdMYXllciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlZERpc3RhbmNlID0gMDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLm1vdmVCYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlQmFjaygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhY2spIHJldHVybjtcblxuICAgICAgICBsZXQgZHJhZ0xheWVyID0gdGhpcy5kcmFnTGF5ZXIgfHwgY2MuZmluZChcIkNhbnZhcy9EcmFnTGF5ZXJcIik7XG5cbiAgICAgICAgaWYgKCFkcmFnTGF5ZXIpIHJldHVybjtcblxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5pc1JldHVybmluZyA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQgIT09IGRyYWdMYXllcikge1xuXG4gICAgICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IGRyYWdMYXllcjtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGRyYWdMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJyaW5nVG9Gcm9udChkcmFnTGF5ZXIpO1xuXG4gICAgICAgIGxldCB0YXJnZXRXb3JsZCA9IHRoaXMuc3RhY2subm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5zdGFja1N0YXJ0UG9zKTtcbiAgICAgICAgbGV0IHRhcmdldEluRHJhZyA9IGRyYWdMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXRXb3JsZCk7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMiwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0YXJnZXRJbkRyYWcsXG4gICAgICAgICAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwic2luZU91dFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZUJhY2soKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBmaW5pc2hNb3ZlQmFjaygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhY2spIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZXR1cm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLnN0YWNrLm5vZGU7XG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuc3RhY2tTdGFydFBvcztcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcblxuICAgICAgICBsZXQgeiA9IE1hdGgubWF4KDAsIHRoaXMuc3RhY2suY2FyZHMubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IHo7XG4gICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgodGhpcy5zdGFjay5ub2RlLmNoaWxkcmVuQ291bnQgLSAxKTtcblxuICAgICAgICB0aGlzLmRyYWdMYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNSZXR1cm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb3ZlZERpc3RhbmNlID0gMDtcbiAgICB9XG5cbiAgICBzeW5jU3RhY2tTdGFydFBvcygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhY2spIHJldHVybjtcblxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YWNrLmNhcmRzLmluZGV4T2YodGhpcyk7XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLnN0YWNrLmNhcmRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YWNrU3RhcnRQb3MgPSBjYy52MygwLCBpbmRleCAqIDIwLCAwKTtcbiAgICB9XG5cbiAgICBmb3JjZUJhY2tUb1N0YWNrKCkge1xuXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xuXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUmV0dXJuaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW92ZWREaXN0YW5jZSA9IDA7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHRoaXMuc3RhY2subm9kZTtcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5zdGFja1N0YXJ0UG9zO1xuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xuXG4gICAgICAgIGxldCB6ID0gTWF0aC5tYXgoMCwgdGhpcy5zdGFjay5jYXJkcy5sZW5ndGggLSAxKTtcblxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gejtcbiAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleCh0aGlzLnN0YWNrLm5vZGUuY2hpbGRyZW5Db3VudCAtIDEpO1xuXG4gICAgICAgIHRoaXMuZHJhZ0xheWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBicmluZ1RvRnJvbnQobGF5ZXI6IGNjLk5vZGUpIHtcblxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gOTk5OTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleChsYXllci5jaGlsZHJlbkNvdW50IC0gMSk7XG4gICAgfVxuXG4gICAgZ2V0RHJvcFNsb3QoKSB7XG5cbiAgICAgICAgbGV0IHNsb3RzID0gY2MuZmluZChcIkNhbnZhcy9Cb2FyZFwiKVxuICAgICAgICAgICAgLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLkNvbXBvbmVudCk7XG5cbiAgICAgICAgbGV0IHdwID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG5cbiAgICAgICAgZm9yIChsZXQgcyBvZiBzbG90cykge1xuXG4gICAgICAgICAgICBpZiAocy5ub2RlLm5hbWUgIT0gXCJDZW50ZXJTbG90XCIpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgYm94ID0gcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xuXG4gICAgICAgICAgICBpZiAoYm94LmNvbnRhaW5zKHdwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzLm5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=