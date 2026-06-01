"use strict";
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