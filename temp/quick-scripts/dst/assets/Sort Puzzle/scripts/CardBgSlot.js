
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Sort Puzzle/scripts/CardBgSlot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXENhcmRCZ1Nsb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE2RUM7UUExRUcsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsaUJBQVcsR0FBRyxJQUFJLENBQUM7O0lBc0V2QixDQUFDO0lBcEVHLHlCQUFJLEdBQUosVUFBSyxFQUFFLEVBQUUsS0FBSztRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFhLEdBQWIsVUFBYyxRQUFpQjtRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUU5QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4QkFBUyxHQUFULFVBQVUsSUFBSTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksUUFBUSxHQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDTixRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxDQUFDO1NBQ1gsRUFBRTtZQUNDLE1BQU0sRUFBRSxTQUFTO1NBQ3BCLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELG9EQUFvRDtJQUNwRCwyQ0FBc0IsR0FBdEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBRTlCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUF6RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVTtJQUhYLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E2RTlCO0lBQUQsaUJBQUM7Q0E3RUQsQUE2RUMsQ0E3RXVDLEVBQUUsQ0FBQyxTQUFTLEdBNkVuRDtrQkE3RW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZEJnU2xvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGFjZWhvbGRlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgaGVsZENhcmQgPSBudWxsO1xyXG4gICAgc3RhY2sgPSBudWxsO1xyXG4gICAgZ2FtZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIGluaXQoZ20sIHN0YWNrKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGdtO1xyXG4gICAgICAgIHRoaXMuc3RhY2sgPSBzdGFjaztcclxuICAgICAgICBpZiAoIXRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua2VlcFBsYWNlaG9sZGVyVmlzaWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NhcmQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5oZWxkQ2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlbGRDYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkFjY2VwdERyb3Aod29ybGRQb3M6IGNjLlZlYzIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNDYXJkKCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHdvcmxkUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICB0cnlBZGRDYXJkKGNhcmQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNDYXJkKCkgfHwgIWNhcmQgfHwgIWNhcmQuc3RhY2spIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoY2FyZC5zdGFjayA9PT0gdGhpcy5zdGFjaykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICghY2FyZC5zdGFjay5pc1RvcENhcmQoY2FyZCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGFjZUNhcmQoY2FyZCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VDYXJkKGNhcmQpIHtcclxuICAgICAgICB0aGlzLmhlbGRDYXJkID0gY2FyZDtcclxuXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID1cclxuICAgICAgICAgICAgY2FyZC5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2FyZC5ub2RlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgY2FyZC5ub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjYXJkLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIGNhcmQuc2V0RmFjZVVwKHRydWUpO1xyXG4gICAgICAgIGNhcmQubm9kZS56SW5kZXggPSAxO1xyXG5cclxuICAgICAgICBjYy50d2VlbihjYXJkLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjE1LCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCksXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgICAgIGFuZ2xlOiAwXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMua2VlcFBsYWNlaG9sZGVyVmlzaWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQ2FyZCgpIHtcclxuICAgICAgICB0aGlzLmhlbGRDYXJkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmtlZXBQbGFjZWhvbGRlclZpc2libGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVGjhursgbuG7gW4gbHXDtG4gaGnhu4NuIHRo4buLOyB0aOG6uyBjaMahaSDEkeG6t3QgcGjDrWEgdHLDqm4gKi9cclxuICAgIGtlZXBQbGFjZWhvbGRlclZpc2libGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYWNlaG9sZGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyLnpJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDA7XHJcbiAgICB9XHJcbn1cclxuIl19