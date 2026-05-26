"use strict";
cc._RF.push(module, '1f7d5W0QztLEpu+2nbtRV9P', 'Slot');
// Sort Puzzle/scripts/Slot.ts

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
var Slot = /** @class */ (function (_super) {
    __extends(Slot, _super);
    function Slot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cards = [];
        _this.maxCard = 4;
        return _this;
    }
    Slot.prototype.tryAddCard = function (card) {
        if (this.cards.length >= this.maxCard) {
            return false;
        }
        if (this.cards.length > 0) {
            var type = this.cards[0].cardType;
            if (type != card.cardType) {
                this.shake();
                return false;
            }
        }
        this.addCard(card);
        return true;
    };
    Slot.prototype.addCard = function (card) {
        this.cards.push(card);
        card.node.parent = this.node;
        var index = this.cards.length - 1;
        cc.tween(card.node)
            .to(0.15, {
            position: cc.v3(0, index * 25)
        })
            .start();
        this.checkComplete();
    };
    Slot.prototype.checkComplete = function () {
        if (this.cards.length < 4)
            return;
        this.success();
    };
    Slot.prototype.success = function () {
        var _loop_1 = function (c) {
            cc.tween(c.node)
                .parallel(cc.tween().to(0.25, {
                scale: 0
            }), cc.tween().by(0.25, {
                y: 100
            }))
                .call(function () {
                c.node.destroy();
            })
                .start();
        };
        for (var _i = 0, _a = this.cards; _i < _a.length; _i++) {
            var c = _a[_i];
            _loop_1(c);
        }
        this.cards = [];
    };
    Slot.prototype.shake = function () {
        cc.tween(this.node)
            .by(0.05, { x: -10 })
            .by(0.05, { x: 20 })
            .by(0.05, { x: -20 })
            .by(0.05, { x: 10 })
            .start();
    };
    Slot = __decorate([
        ccclass
    ], Slot);
    return Slot;
}(cc.Component));
exports.default = Slot;

cc._RF.pop();