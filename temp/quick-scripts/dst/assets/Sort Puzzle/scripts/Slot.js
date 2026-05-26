
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Sort Puzzle/scripts/Slot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXFNsb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFvRkM7UUFsRkcsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLGFBQU8sR0FBRyxDQUFDLENBQUM7O0lBZ0ZoQixDQUFDO0lBOUVHLHlCQUFVLEdBQVYsVUFBVyxJQUFJO1FBRVgsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ25DLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFFdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFFbEMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFFdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUViLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBTyxHQUFQLFVBQVEsSUFBSTtRQUVSLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDTixRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELDRCQUFhLEdBQWI7UUFFSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPO1FBRWxDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsc0JBQU8sR0FBUDtnQ0FFYSxDQUFDO1lBRU4sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUNYLFFBQVEsQ0FDTCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDaEIsS0FBSyxFQUFFLENBQUM7YUFDWCxDQUFDLEVBQ0YsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hCLENBQUMsRUFBRSxHQUFHO2FBQ1QsQ0FBQyxDQUNMO2lCQUNBLElBQUksQ0FBQztnQkFDRixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQztpQkFDRCxLQUFLLEVBQUUsQ0FBQzs7UUFkakIsS0FBYyxVQUFVLEVBQVYsS0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLGNBQVUsRUFBVixJQUFVO1lBQW5CLElBQUksQ0FBQyxTQUFBO29CQUFELENBQUM7U0FlVDtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBRUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3BCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDbkIsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3BCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDbkIsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQW5GZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW9GeEI7SUFBRCxXQUFDO0NBcEZELEFBb0ZDLENBcEZpQyxFQUFFLENBQUMsU0FBUyxHQW9GN0M7a0JBcEZvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgY2FyZHMgPSBbXTtcclxuXHJcbiAgICBtYXhDYXJkID0gNDtcclxuXHJcbiAgICB0cnlBZGRDYXJkKGNhcmQpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID49IHRoaXMubWF4Q2FyZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHlwZSA9IHRoaXMuY2FyZHNbMF0uY2FyZFR5cGU7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSAhPSBjYXJkLmNhcmRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFrZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRDYXJkKGNhcmQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXJkKGNhcmQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xyXG5cclxuICAgICAgICBjYXJkLm5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNhcmRzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGNhcmQubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMTUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MygwLCBpbmRleCAqIDI1KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0NvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb21wbGV0ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoIDwgNCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnN1Y2Nlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKCkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjIG9mIHRoaXMuY2FyZHMpIHtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGMubm9kZSlcclxuICAgICAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMjUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuMjUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHNoYWtlKCkge1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC5ieSgwLjA1LCB7IHg6IC0xMCB9KVxyXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiAyMCB9KVxyXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiAtMjAgfSlcclxuICAgICAgICAgICAgLmJ5KDAuMDUsIHsgeDogMTAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0iXX0=