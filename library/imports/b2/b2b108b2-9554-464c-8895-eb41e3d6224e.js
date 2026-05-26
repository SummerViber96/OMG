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