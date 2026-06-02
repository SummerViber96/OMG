"use strict";
cc._RF.push(module, 'db69d6f6W9Mga6Qsg3frle5', 'CardBgSlot');
// Sort Puzzle/scripts/CardBgSlot.ts

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
var CardBgSlot = /** @class */ (function (_super) {
    __extends(CardBgSlot, _super);
    function CardBgSlot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.placeholder = null;
        _this.heldCard = null;
        _this.stack = null;
        _this.gameManager = null;
        return _this;
    }
    CardBgSlot.prototype.init = function (gm, stack) {
        this.gameManager = gm;
        this.stack = stack;
        if (!this.placeholder) {
            this.placeholder = this.node.getChildByName("icon");
        }
        this.keepPlaceholderVisible();
    };
    CardBgSlot.prototype.hasCard = function () {
        return !!this.heldCard;
    };
    CardBgSlot.prototype.getCard = function () {
        return this.heldCard;
    };
    CardBgSlot.prototype.canAcceptDrop = function (worldPos) {
        if (this.hasCard())
            return false;
        return this.node.getBoundingBoxToWorld().contains(worldPos);
    };
    CardBgSlot.prototype.tryAddCard = function (card) {
        if (this.hasCard() || !card || !card.stack)
            return false;
        if (card.stack === this.stack)
            return false;
        if (!card.stack.isTopCard(card))
            return false;
        this.placeCard(card);
        return true;
    };
    CardBgSlot.prototype.placeCard = function (card) {
        this.heldCard = card;
        var worldPos = card.node.parent.convertToWorldSpaceAR(card.node.position);
        card.node.parent = this.node;
        card.node.position = this.node.convertToNodeSpaceAR(worldPos);
        card.setFaceUp(true);
        card.node.zIndex = 1;
        cc.tween(card.node)
            .to(0.15, {
            position: cc.v3(0, 0, 0),
            scale: 1,
            angle: 0
        }, {
            easing: "backOut"
        })
            .start();
        this.keepPlaceholderVisible();
    };
    CardBgSlot.prototype.clearCard = function () {
        this.heldCard = null;
        this.keepPlaceholderVisible();
    };
    /** Thẻ nền luôn hiển thị; thẻ chơi đặt phía trên */
    CardBgSlot.prototype.keepPlaceholderVisible = function () {
        if (!this.placeholder)
            return;
        this.placeholder.active = true;
        this.placeholder.zIndex = 0;
        this.node.zIndex = 0;
    };
    __decorate([
        property(cc.Node)
    ], CardBgSlot.prototype, "placeholder", void 0);
    CardBgSlot = __decorate([
        ccclass
    ], CardBgSlot);
    return CardBgSlot;
}(cc.Component));
exports.default = CardBgSlot;

cc._RF.pop();