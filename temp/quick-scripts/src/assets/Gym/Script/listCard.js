"use strict";
cc._RF.push(module, 'e6789xWRwhF4KBfMmdXS8cv', 'listCard');
// Gym/Script/listCard.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hand = null;
        _this.cards = [];
        _this.cardIndex = 0;
        _this.normalScale = 1;
        _this.highlightScale = 1.15;
        _this.handOffset = cc.v3(130, -270);
        return _this;
    }
    NewClass.prototype.start = function () {
        var board = this.node.getChildByName("board");
        if (board) {
            this.cards = board.children.slice();
        }
        this.showCard();
    };
    NewClass.prototype.showCard = function () {
        if (!this.hand || this.cards.length === 0)
            return;
        this.hand.active = false;
        this.cardIndex = 0;
        this.scaleCardsIn();
    };
    NewClass.prototype.scaleCardsIn = function () {
        var _this = this;
        var done = 0;
        for (var i = 0; i < this.cards.length; i++) {
            var card = this.cards[i];
            card.scale = 0;
            cc.Tween.stopAllByTarget(card);
            cc.tween(card).to(0.5, { scale: this.normalScale }, { easing: "backOut" }).call(function () {
                done++;
                if (done >= _this.cards.length) {
                    _this.hand.active = true;
                    _this.focusCard(_this.cardIndex);
                }
            }).start();
        }
    };
    NewClass.prototype.focusCard = function (index) {
        var _this = this;
        var card = this.cards[index];
        if (!card)
            return;
        for (var i = 0; i < this.cards.length; i++) {
            var c = this.cards[i];
            cc.Tween.stopAllByTarget(c);
            cc.tween(c).to(0.2, { scale: this.normalScale }).start();
        }
        cc.Tween.stopAllByTarget(card);
        cc.tween(card).to(0.25, { scale: this.highlightScale }).start();
        var worldPos = card.parent.convertToWorldSpaceAR(card.position);
        var localPos = this.hand.parent.convertToNodeSpaceAR(worldPos).add(this.handOffset);
        cc.Tween.stopAllByTarget(this.hand);
        cc.tween(this.hand).to(0.3, { position: localPos }).call(function () {
            _this.scheduleOnce(function () {
                _this.cardIndex = (_this.cardIndex + 1) % _this.cards.length;
                _this.focusCard(_this.cardIndex);
            }, 1);
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();