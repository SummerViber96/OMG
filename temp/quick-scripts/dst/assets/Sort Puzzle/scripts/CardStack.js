
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Sort Puzzle/scripts/CardStack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.bgSlot = null;
        return _this;
    }
    CardStack.prototype.init = function (gm) {
        this.gameManager = gm;
    };
    CardStack.prototype.setup = function () {
        this.cards = [];
        this.bgSlot = null;
        for (var i = 0; i < this.node.childrenCount; i++) {
            var child = this.node.children[i];
            var bg = child.getComponent("CardBgSlot");
            if (bg) {
                this.bgSlot = bg;
                bg.init(this.gameManager, this);
                bg.node.zIndex = 0;
                bg.node.setSiblingIndex(0);
                continue;
            }
            var card = child.getComponent("Card");
            if (!card)
                continue;
            card.stack = this;
            this.cards.push(card);
        }
        var cardCount = this.cards.length;
        for (var c = 0; c < cardCount; c++) {
            var card = this.cards[c];
            card.setFaceUp(c === cardCount - 1);
            card.node.y = c * 20;
            card.node.zIndex = c + 1;
        }
        if (this.bgSlot && this.bgSlot.getCard()) {
            var bgCard = this.bgSlot.getCard();
            bgCard.stack = this;
            bgCard.setFaceUp(true);
        }
    };
    CardStack.prototype.isTopCard = function (card) {
        if (this.bgSlot && this.bgSlot.getCard() === card) {
            return this.cards.length === 0;
        }
        return this.cards[this.cards.length - 1] == card;
    };
    CardStack.prototype.removeTopCard = function () {
        if (this.bgSlot && this.bgSlot.getCard()) {
            this.bgSlot.clearCard();
            this.notifyIfEmpty();
            return;
        }
        this.cards.pop();
        if (this.cards.length <= 0) {
            this.notifyIfEmpty();
            return;
        }
        var nextTop = this.cards[this.cards.length - 1];
        this.flipCard(nextTop);
    };
    CardStack.prototype.notifyIfEmpty = function () {
        if (this.cards.length > 0)
            return;
        if (this.bgSlot && this.bgSlot.hasCard())
            return;
        var gm = this.gameManager
            || cc.find("Canvas").getComponent("GameManager");
        if (gm) {
            gm.onStackEmpty(this);
        }
        else {
            cc.warn("[CardStack] Không tìm thấy GameManager");
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXENhcmRTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXFJQztRQW5JRyxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsWUFBTSxHQUFHLElBQUksQ0FBQzs7SUErSGxCLENBQUM7SUE3SEcsd0JBQUksR0FBSixVQUFLLEVBQUU7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQseUJBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUU5QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRTFDLElBQUksRUFBRSxFQUFFO2dCQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLFNBQVM7YUFDWjtZQUVELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdEMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsU0FBUztZQUVwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUVsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRWxDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELDZCQUFTLEdBQVQsVUFBVSxJQUFJO1FBRVYsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsaUNBQWEsR0FBYjtRQUVJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFakIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLE9BQU87U0FDVjtRQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUNBQWEsR0FBYjtRQUVJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQUUsT0FBTztRQUVqRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVztlQUNsQixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVyRCxJQUFJLEVBQUUsRUFBRTtZQUNKLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUVULElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUV6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUVULEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDTCxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7YUFDRCxJQUFJLENBQUM7WUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpCLENBQUMsQ0FBQzthQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDTCxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBcElnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBcUk3QjtJQUFELGdCQUFDO0NBcklELEFBcUlDLENBcklzQyxFQUFFLENBQUMsU0FBUyxHQXFJbEQ7a0JBcklvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFN0YWNrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjYXJkcyA9IFtdO1xyXG5cclxuICAgIGdhbWVNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBiZ1Nsb3QgPSBudWxsO1xyXG5cclxuICAgIGluaXQoZ20pIHtcclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyID0gZ207XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcclxuICAgICAgICB0aGlzLmJnU2xvdCA9IG51bGw7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJnID0gY2hpbGQuZ2V0Q29tcG9uZW50KFwiQ2FyZEJnU2xvdFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1Nsb3QgPSBiZztcclxuICAgICAgICAgICAgICAgIGJnLmluaXQodGhpcy5nYW1lTWFuYWdlciwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBiZy5ub2RlLnpJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBiZy5ub2RlLnNldFNpYmxpbmdJbmRleCgwKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FyZCA9IGNoaWxkLmdldENvbXBvbmVudChcIkNhcmRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNhcmQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY2FyZC5zdGFjayA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2FyZENvdW50ID0gdGhpcy5jYXJkcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2FyZENvdW50OyBjKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYXJkID0gdGhpcy5jYXJkc1tjXTtcclxuXHJcbiAgICAgICAgICAgIGNhcmQuc2V0RmFjZVVwKGMgPT09IGNhcmRDb3VudCAtIDEpO1xyXG5cclxuICAgICAgICAgICAgY2FyZC5ub2RlLnkgPSBjICogMjA7XHJcbiAgICAgICAgICAgIGNhcmQubm9kZS56SW5kZXggPSBjICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJnU2xvdCAmJiB0aGlzLmJnU2xvdC5nZXRDYXJkKCkpIHtcclxuICAgICAgICAgICAgbGV0IGJnQ2FyZCA9IHRoaXMuYmdTbG90LmdldENhcmQoKTtcclxuICAgICAgICAgICAgYmdDYXJkLnN0YWNrID0gdGhpcztcclxuICAgICAgICAgICAgYmdDYXJkLnNldEZhY2VVcCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNUb3BDYXJkKGNhcmQpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmdTbG90ICYmIHRoaXMuYmdTbG90LmdldENhcmQoKSA9PT0gY2FyZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJkcy5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkc1t0aGlzLmNhcmRzLmxlbmd0aCAtIDFdID09IGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVG9wQ2FyZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmdTbG90ICYmIHRoaXMuYmdTbG90LmdldENhcmQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJnU2xvdC5jbGVhckNhcmQoKTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlJZkVtcHR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZHMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5SWZFbXB0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV4dFRvcCA9IHRoaXMuY2FyZHNbdGhpcy5jYXJkcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgdGhpcy5mbGlwQ2FyZChuZXh0VG9wKTtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnlJZkVtcHR5KCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPiAwKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuYmdTbG90ICYmIHRoaXMuYmdTbG90Lmhhc0NhcmQoKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgZ20gPSB0aGlzLmdhbWVNYW5hZ2VyXHJcbiAgICAgICAgICAgIHx8IGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XHJcblxyXG4gICAgICAgIGlmIChnbSkge1xyXG4gICAgICAgICAgICBnbS5vblN0YWNrRW1wdHkodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltDYXJkU3RhY2tdIEtow7RuZyB0w6xtIHRo4bqleSBHYW1lTWFuYWdlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaENhcmQoY2FyZCkge1xyXG5cclxuICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XHJcblxyXG4gICAgICAgIGNhcmQuc3RhY2sgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNhcmRzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGNhcmQubm9kZS55ID0gaW5kZXggKiAyMDtcclxuICAgICAgICBjYXJkLm5vZGUuekluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgICAgIGNhcmQuc2V0RmFjZVVwKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZsaXBDYXJkKGNhcmQpIHtcclxuXHJcbiAgICAgICAgY2MudHdlZW4oY2FyZC5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZVg6IDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNhcmQuc2V0RmFjZVVwKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGVYOiAxXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59Il19