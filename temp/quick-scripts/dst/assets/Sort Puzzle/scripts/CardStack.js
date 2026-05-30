
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Tb3J0IFB1enpsZS9zY3JpcHRzL0NhcmRTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTJGQztRQXpGRyxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsaUJBQVcsR0FBRyxJQUFJLENBQUM7O0lBdUZ2QixDQUFDO0lBckZHLHdCQUFJLEdBQUosVUFBSyxFQUFFO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFOUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUMzQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFMUIsSUFBSSxDQUFDLElBQUk7Z0JBQUUsU0FBUztZQUVwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUVsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0Qix1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFakQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLElBQUk7UUFFVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUV4QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVzttQkFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFckQsSUFBSSxFQUFFLEVBQUU7Z0JBQ0osRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtpQkFBTTtnQkFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7YUFDckQ7WUFFRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxJQUFJO1FBRVQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxJQUFJO1FBRVQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNMLE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQzthQUNELElBQUksQ0FBQztZQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekIsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNMLE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUExRmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EyRjdCO0lBQUQsZ0JBQUM7Q0EzRkQsQUEyRkMsQ0EzRnNDLEVBQUUsQ0FBQyxTQUFTLEdBMkZsRDtrQkEzRm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkU3RhY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgY2FyZHMgPSBbXTtcblxuICAgIGdhbWVNYW5hZ2VyID0gbnVsbDtcblxuICAgIGluaXQoZ20pIHtcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGdtO1xuICAgIH1cblxuICAgIHNldHVwKCkge1xuXG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IGNhcmQgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV1cbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFwiQ2FyZFwiKTtcblxuICAgICAgICAgICAgaWYgKCFjYXJkKSBjb250aW51ZTtcblxuICAgICAgICAgICAgY2FyZC5zdGFjayA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcblxuICAgICAgICAgICAgLy8gY2jhu4kgY2FyZCB0b3AgxJHGsOG7o2MgbeG7n1xuICAgICAgICAgICAgY2FyZC5zZXRGYWNlVXAoaSA9PSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAtIDEpO1xuXG4gICAgICAgICAgICBjYXJkLm5vZGUueSA9IGkgKiAyMDtcbiAgICAgICAgICAgIGNhcmQubm9kZS56SW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNUb3BDYXJkKGNhcmQpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkc1t0aGlzLmNhcmRzLmxlbmd0aCAtIDFdID09IGNhcmQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9wQ2FyZCgpIHtcblxuICAgICAgICB0aGlzLmNhcmRzLnBvcCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA8PSAwKSB7XG5cbiAgICAgICAgICAgIGxldCBnbSA9IHRoaXMuZ2FtZU1hbmFnZXJcbiAgICAgICAgICAgICAgICB8fCBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xuXG4gICAgICAgICAgICBpZiAoZ20pIHtcbiAgICAgICAgICAgICAgICBnbS5vblN0YWNrRW1wdHkodGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJbQ2FyZFN0YWNrXSBLaMO0bmcgdMOsbSB0aOG6pXkgR2FtZU1hbmFnZXJcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXh0VG9wID0gdGhpcy5jYXJkc1t0aGlzLmNhcmRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIHRoaXMuZmxpcENhcmQobmV4dFRvcCk7XG4gICAgfVxuXG4gICAgcHVzaENhcmQoY2FyZCkge1xuXG4gICAgICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcblxuICAgICAgICBjYXJkLnN0YWNrID0gdGhpcztcblxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNhcmRzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgY2FyZC5ub2RlLnkgPSBpbmRleCAqIDIwO1xuICAgICAgICBjYXJkLm5vZGUuekluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgY2FyZC5zZXRGYWNlVXAodHJ1ZSk7XG4gICAgfVxuXG4gICAgZmxpcENhcmQoY2FyZCkge1xuXG4gICAgICAgIGNjLnR3ZWVuKGNhcmQubm9kZSlcbiAgICAgICAgICAgIC50bygwLjEsIHtcbiAgICAgICAgICAgICAgICBzY2FsZVg6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjYXJkLnNldEZhY2VVcCh0cnVlKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHtcbiAgICAgICAgICAgICAgICBzY2FsZVg6IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG59Il19