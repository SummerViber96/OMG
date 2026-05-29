"use strict";
cc._RF.push(module, '3aeedgQqc9Gfp5SeWs6Nwji', 'CardStack');
// Sort Puzzle/scripts/CardStack.ts

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
var ccclass = cc._decorator.ccclass;
var CardStack = /** @class */ (function (_super) {
    __extends(CardStack, _super);
    function CardStack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cards = [];
        _this.gameManager = null;
        return _this;
    }
    CardStack.prototype.init = function (gm) {
        this.gameManager = gm;
    };
    CardStack.prototype.setup = function () {
        this.cards = [];
        for (var i = 0; i < this.node.childrenCount; i++) {
            var card = this.node.children[i]
                .getComponent("Card");
            if (!card)
                continue;
            card.stack = this;
            this.cards.push(card);
            // chỉ card top được mở
            card.setFaceUp(i == this.node.childrenCount - 1);
            card.node.y = i * 20;
            card.node.zIndex = i;
        }
    };
    CardStack.prototype.isTopCard = function (card) {
        return this.cards[this.cards.length - 1] == card;
    };
    CardStack.prototype.removeTopCard = function () {
        this.cards.pop();
        if (this.cards.length <= 0) {
            var gm = this.gameManager
                || cc.find("Canvas").getComponent("GameManager");
            if (gm) {
                gm.onStackEmpty(this);
            }
            else {
                cc.warn("[CardStack] Không tìm thấy GameManager");
            }
            return;
        }
        var nextTop = this.cards[this.cards.length - 1];
        this.flipCard(nextTop);
    };
    CardStack.prototype.pushCard = function (card) {
        this.cards.push(card);
        card.stack = this;
        var index = this.cards.length - 1;
        card.node.y = index * 20;
        card.node.zIndex = index;
        card.setFaceUp(true);
    };
    CardStack.prototype.flipCard = function (card) {
        cc.tween(card.node)
            .to(0.1, {
            scaleX: 0
        })
            .call(function () {
            card.setFaceUp(true);
        })
            .to(0.1, {
            scaleX: 1
        })
            .start();
    };
    CardStack = __decorate([
        ccclass
    ], CardStack);
    return CardStack;
}(cc.Component));
exports.default = CardStack;

cc._RF.pop();