
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Gym/Script/listCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXGxpc3RDYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUVDO1FBL0RHLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFWixXQUFLLEdBQWMsRUFBRSxDQUFBO1FBQ3JCLGVBQVMsR0FBRyxDQUFDLENBQUE7UUFDSixpQkFBVyxHQUFHLENBQUMsQ0FBQTtRQUNmLG9CQUFjLEdBQUcsSUFBSSxDQUFBO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTs7SUF5RGxELENBQUM7SUF2REcsd0JBQUssR0FBTDtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzdDLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU07UUFFakQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRU8sK0JBQVksR0FBcEI7UUFBQSxpQkFjQztRQWJHLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQTtRQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDOUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDNUUsSUFBSSxFQUFFLENBQUE7Z0JBQ04sSUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtvQkFDdkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7aUJBQ2pDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDYjtJQUNMLENBQUM7SUFFTyw0QkFBUyxHQUFqQixVQUFrQixLQUFhO1FBQS9CLGlCQXNCQztRQXJCRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTTtRQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDM0Q7UUFFRCxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFL0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNuRixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyRCxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO2dCQUN6RCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUNsQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDVCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUE5REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUZILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRTVCO0lBQUQsZUFBQztDQWpFRCxBQWlFQyxDQWpFcUMsRUFBRSxDQUFDLFNBQVMsR0FpRWpEO2tCQWpFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgcHJpdmF0ZSBjYXJkczogY2MuTm9kZVtdID0gW11cclxuICAgIHByaXZhdGUgY2FyZEluZGV4ID0gMFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBub3JtYWxTY2FsZSA9IDFcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGlnaGxpZ2h0U2NhbGUgPSAxLjE1XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhhbmRPZmZzZXQgPSBjYy52MygxMzAsIC0yNzApXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9hcmRcIilcclxuICAgICAgICBpZiAoYm9hcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IGJvYXJkLmNoaWxkcmVuLnNsaWNlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93Q2FyZCgpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NhcmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhbmQgfHwgdGhpcy5jYXJkcy5sZW5ndGggPT09IDApIHJldHVyblxyXG5cclxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNhcmRJbmRleCA9IDBcclxuICAgICAgICB0aGlzLnNjYWxlQ2FyZHNJbigpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY2FsZUNhcmRzSW4oKSB7XHJcbiAgICAgICAgbGV0IGRvbmUgPSAwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjYXJkID0gdGhpcy5jYXJkc1tpXVxyXG4gICAgICAgICAgICBjYXJkLnNjYWxlID0gMFxyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY2FyZClcclxuICAgICAgICAgICAgY2MudHdlZW4oY2FyZCkudG8oMC41LCB7IHNjYWxlOiB0aGlzLm5vcm1hbFNjYWxlIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUrK1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbmUgPj0gdGhpcy5jYXJkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNDYXJkKHRoaXMuY2FyZEluZGV4KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9jdXNDYXJkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY2FyZCA9IHRoaXMuY2FyZHNbaW5kZXhdXHJcbiAgICAgICAgaWYgKCFjYXJkKSByZXR1cm5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jYXJkc1tpXVxyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoYylcclxuICAgICAgICAgICAgY2MudHdlZW4oYykudG8oMC4yLCB7IHNjYWxlOiB0aGlzLm5vcm1hbFNjYWxlIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjYXJkKVxyXG4gICAgICAgIGNjLnR3ZWVuKGNhcmQpLnRvKDAuMjUsIHsgc2NhbGU6IHRoaXMuaGlnaGxpZ2h0U2NhbGUgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBjYXJkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2FyZC5wb3NpdGlvbilcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLmhhbmQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKS5hZGQodGhpcy5oYW5kT2Zmc2V0KVxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmhhbmQpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kKS50bygwLjMsIHsgcG9zaXRpb246IGxvY2FsUG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRJbmRleCA9ICh0aGlzLmNhcmRJbmRleCArIDEpICUgdGhpcy5jYXJkcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNDYXJkKHRoaXMuY2FyZEluZGV4KVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxufVxyXG4iXX0=