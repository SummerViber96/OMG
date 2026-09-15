
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
        _this.lockFocus = false;
        _this.focusIndex = 0;
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
        this.cardIndex = this.lockFocus ? this.focusIndex : 0;
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
                    if (!_this.lockFocus && _this.hand) {
                        _this.hand.active = true;
                        _this.focusCard(_this.cardIndex);
                    }
                    else if (_this.lockFocus) {
                        _this.focusCard(_this.cardIndex);
                    }
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
        if (!this.hand || this.lockFocus)
            return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXGxpc3RDYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUVDO1FBdkVHLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFWixXQUFLLEdBQWMsRUFBRSxDQUFBO1FBQ3JCLGVBQVMsR0FBRyxDQUFDLENBQUE7UUFDckIsZUFBUyxHQUFHLEtBQUssQ0FBQTtRQUNqQixnQkFBVSxHQUFHLENBQUMsQ0FBQTtRQUNHLGlCQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ2Ysb0JBQWMsR0FBRyxJQUFJLENBQUE7UUFDckIsZ0JBQVUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBOztJQStEbEQsQ0FBQztJQTdERyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDN0MsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDdEM7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTTtRQUVqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENB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ZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3JELEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7Z0JBQ3pELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ2xDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNULENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQXRFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRkgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlFNUI7SUFBRCxlQUFDO0NBekVELEFBeUVDLENBekVxQyxFQUFFLENBQUMsU0FBUyxHQXlFakQ7a0JBekVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBwcml2YXRlIGNhcmRzOiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgcHJpdmF0ZSBjYXJkSW5kZXggPSAwXHJcbiAgICBsb2NrRm9jdXMgPSBmYWxzZVxyXG4gICAgZm9jdXNJbmRleCA9IDBcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbm9ybWFsU2NhbGUgPSAxXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhpZ2hsaWdodFNjYWxlID0gMS4xNVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBoYW5kT2Zmc2V0ID0gY2MudjMoMTMwLCAtMjcwKVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvYXJkXCIpXHJcbiAgICAgICAgaWYgKGJvYXJkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBib2FyZC5jaGlsZHJlbi5zbGljZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd0NhcmQoKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dDYXJkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYW5kIHx8IHRoaXMuY2FyZHMubGVuZ3RoID09PSAwKSByZXR1cm5cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jYXJkSW5kZXggPSB0aGlzLmxvY2tGb2N1cyA/IHRoaXMuZm9jdXNJbmRleCA6IDBcclxuICAgICAgICB0aGlzLnNjYWxlQ2FyZHNJbigpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY2FsZUNhcmRzSW4oKSB7XHJcbiAgICAgICAgbGV0IGRvbmUgPSAwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjYXJkID0gdGhpcy5jYXJkc1tpXVxyXG4gICAgICAgICAgICBjYXJkLnNjYWxlID0gMFxyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY2FyZClcclxuICAgICAgICAgICAgY2MudHdlZW4oY2FyZCkudG8oMC41LCB7IHNjYWxlOiB0aGlzLm5vcm1hbFNjYWxlIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUrK1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbmUgPj0gdGhpcy5jYXJkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubG9ja0ZvY3VzICYmIHRoaXMuaGFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzQ2FyZCh0aGlzLmNhcmRJbmRleClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9ja0ZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNDYXJkKHRoaXMuY2FyZEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvY3VzQ2FyZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGNhcmQgPSB0aGlzLmNhcmRzW2luZGV4XVxyXG4gICAgICAgIGlmICghY2FyZCkgcmV0dXJuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYyA9IHRoaXMuY2FyZHNbaV1cclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGMpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGMpLnRvKDAuMiwgeyBzY2FsZTogdGhpcy5ub3JtYWxTY2FsZSB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY2FyZClcclxuICAgICAgICBjYy50d2VlbihjYXJkKS50bygwLjI1LCB7IHNjYWxlOiB0aGlzLmhpZ2hsaWdodFNjYWxlIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhbmQgfHwgdGhpcy5sb2NrRm9jdXMpIHJldHVyblxyXG5cclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBjYXJkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2FyZC5wb3NpdGlvbilcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLmhhbmQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKS5hZGQodGhpcy5oYW5kT2Zmc2V0KVxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmhhbmQpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kKS50bygwLjMsIHsgcG9zaXRpb246IGxvY2FsUG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRJbmRleCA9ICh0aGlzLmNhcmRJbmRleCArIDEpICUgdGhpcy5jYXJkcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNDYXJkKHRoaXMuY2FyZEluZGV4KVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxufVxyXG4iXX0=