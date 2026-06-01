
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXENhcmRTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTJGQztRQXpGRyxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsaUJBQVcsR0FBRyxJQUFJLENBQUM7O0lBdUZ2QixDQUFDO0lBckZHLHdCQUFJLEdBQUosVUFBSyxFQUFFO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFOUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUMzQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFMUIsSUFBSSxDQUFDLElBQUk7Z0JBQUUsU0FBUztZQUVwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUVsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0Qix1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFakQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLElBQUk7UUFFVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUV4QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVzttQkFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFckQsSUFBSSxFQUFFLEVBQUU7Z0JBQ0osRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtpQkFBTTtnQkFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7YUFDckQ7WUFFRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxJQUFJO1FBRVQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxJQUFJO1FBRVQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNMLE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQzthQUNELElBQUksQ0FBQztZQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekIsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNMLE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUExRmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EyRjdCO0lBQUQsZ0JBQUM7Q0EzRkQsQUEyRkMsQ0EzRnNDLEVBQUUsQ0FBQyxTQUFTLEdBMkZsRDtrQkEzRm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkU3RhY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGNhcmRzID0gW107XHJcblxyXG4gICAgZ2FtZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIGluaXQoZ20pIHtcclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyID0gZ207XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FyZCA9IHRoaXMubm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChcIkNhcmRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNhcmQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY2FyZC5zdGFjayA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjaOG7iSBjYXJkIHRvcCDEkcaw4bujYyBt4bufXHJcbiAgICAgICAgICAgIGNhcmQuc2V0RmFjZVVwKGkgPT0gdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgLSAxKTtcclxuXHJcbiAgICAgICAgICAgIGNhcmQubm9kZS55ID0gaSAqIDIwO1xyXG4gICAgICAgICAgICBjYXJkLm5vZGUuekluZGV4ID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNUb3BDYXJkKGNhcmQpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHNbdGhpcy5jYXJkcy5sZW5ndGggLSAxXSA9PSBjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRvcENhcmQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZHMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA8PSAwKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZ20gPSB0aGlzLmdhbWVNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICB8fCBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdtKSB7XHJcbiAgICAgICAgICAgICAgICBnbS5vblN0YWNrRW1wdHkodGhpcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwiW0NhcmRTdGFja10gS2jDtG5nIHTDrG0gdGjhuqV5IEdhbWVNYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV4dFRvcCA9IHRoaXMuY2FyZHNbdGhpcy5jYXJkcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgdGhpcy5mbGlwQ2FyZChuZXh0VG9wKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoQ2FyZChjYXJkKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcclxuXHJcbiAgICAgICAgY2FyZC5zdGFjayA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuY2FyZHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgY2FyZC5ub2RlLnkgPSBpbmRleCAqIDIwO1xyXG4gICAgICAgIGNhcmQubm9kZS56SW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAgICAgY2FyZC5zZXRGYWNlVXAodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmxpcENhcmQoY2FyZCkge1xyXG5cclxuICAgICAgICBjYy50d2VlbihjYXJkLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjEsIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlWDogMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FyZC5zZXRGYWNlVXAodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZVg6IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0iXX0=