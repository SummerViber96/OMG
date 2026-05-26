
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
        return _this;
    }
    CardStack.prototype.start = function () {
        this.setup();
    };
    CardStack.prototype.setup = function () {
        for (var i = 0; i < this.node.childrenCount; i++) {
            var card = this.node.children[i]
                .getComponent("Card");
            card.stack = this;
            this.cards.push(card);
            // chỉ card top được mở
            card.setFaceUp(i == this.node.childrenCount - 1);
            card.node.y = i * 20;
        }
    };
    CardStack.prototype.isTopCard = function (card) {
        return this.cards[this.cards.length - 1] == card;
    };
    CardStack.prototype.removeTopCard = function () {
        this.cards.pop();
        if (this.cards.length <= 0)
            return;
        var nextTop = this.cards[this.cards.length - 1];
        this.flipCard(nextTop);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXENhcmRTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTJEQztRQXpERyxXQUFLLEdBQUcsRUFBRSxDQUFDOztJQXlEZixDQUFDO0lBdkRHLHlCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFFSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFOUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUMzQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFFbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEIsdUJBQXVCO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLElBQUk7UUFFVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBRW5DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLElBQUk7UUFFVCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ0wsTUFBTSxFQUFFLENBQUM7U0FDWixDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QixDQUFDLENBQUM7YUFDRCxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ0wsTUFBTSxFQUFFLENBQUM7U0FDWixDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQTFEZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTJEN0I7SUFBRCxnQkFBQztDQTNERCxBQTJEQyxDQTNEc0MsRUFBRSxDQUFDLFNBQVMsR0EyRGxEO2tCQTNEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRTdGFjayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgY2FyZHMgPSBbXTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwKCkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYXJkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFwiQ2FyZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGNhcmQuc3RhY2sgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2jhu4kgY2FyZCB0b3AgxJHGsOG7o2MgbeG7n1xyXG4gICAgICAgICAgICBjYXJkLnNldEZhY2VVcChpID09IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gMSk7XHJcblxyXG4gICAgICAgICAgICBjYXJkLm5vZGUueSA9IGkgKiAyMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNUb3BDYXJkKGNhcmQpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHNbdGhpcy5jYXJkcy5sZW5ndGggLSAxXSA9PSBjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRvcENhcmQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZHMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA8PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBuZXh0VG9wID0gdGhpcy5jYXJkc1t0aGlzLmNhcmRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICB0aGlzLmZsaXBDYXJkKG5leHRUb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGZsaXBDYXJkKGNhcmQpIHtcclxuXHJcbiAgICAgICAgY2MudHdlZW4oY2FyZC5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZVg6IDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNhcmQuc2V0RmFjZVVwKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGVYOiAxXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59Il19