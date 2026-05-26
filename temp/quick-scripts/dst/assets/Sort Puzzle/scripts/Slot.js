
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
        var worldPos = card.node.parent.convertToWorldSpaceAR(card.node.position);
        card.node.parent = this.node;
        card.node.position = this.node.convertToNodeSpaceAR(worldPos);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXFNsb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF3RkM7UUF0RkcsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLGFBQU8sR0FBRyxDQUFDLENBQUM7O0lBb0ZoQixDQUFDO0lBbEZHLHlCQUFVLEdBQVYsVUFBVyxJQUFJO1FBRVgsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ25DLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFFdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFFbEMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFFdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUViLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBTyxHQUFQLFVBQVEsSUFBSTtRQUVSLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVsQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ04sUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw0QkFBYSxHQUFiO1FBRUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTztRQUVsQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHNCQUFPLEdBQVA7Z0NBRWEsQ0FBQztZQUVOLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDWCxRQUFRLENBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hCLEtBQUssRUFBRSxDQUFDO2FBQ1gsQ0FBQyxFQUNGLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUNoQixDQUFDLEVBQUUsR0FBRzthQUNULENBQUMsQ0FDTDtpQkFDQSxJQUFJLENBQUM7Z0JBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7O1FBZGpCLEtBQWMsVUFBVSxFQUFWLEtBQUEsSUFBSSxDQUFDLEtBQUssRUFBVixjQUFVLEVBQVYsSUFBVTtZQUFuQixJQUFJLENBQUMsU0FBQTtvQkFBRCxDQUFDO1NBZVQ7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUVJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNwQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ25CLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNwQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ25CLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUF2RmdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F3RnhCO0lBQUQsV0FBQztDQXhGRCxBQXdGQyxDQXhGaUMsRUFBRSxDQUFDLFNBQVMsR0F3RjdDO2tCQXhGb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGNhcmRzID0gW107XHJcblxyXG4gICAgbWF4Q2FyZCA9IDQ7XHJcblxyXG4gICAgdHJ5QWRkQ2FyZChjYXJkKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA+PSB0aGlzLm1heENhcmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmNhcmRzWzBdLmNhcmRUeXBlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgIT0gY2FyZC5jYXJkVHlwZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hha2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ2FyZChjYXJkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2FyZChjYXJkKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcclxuXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gY2FyZC5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2FyZC5ub2RlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgY2FyZC5ub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuXHJcbiAgICAgICAgY2FyZC5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jYXJkcy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBjYy50d2VlbihjYXJkLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjE1LCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjMoMCwgaW5kZXggKiAyNSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tDb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29tcGxldGUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA8IDQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zdWNjZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2VzcygpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYyBvZiB0aGlzLmNhcmRzKSB7XHJcblxyXG4gICAgICAgICAgICBjYy50d2VlbihjLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjI1LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjI1LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzaGFrZSgpIHtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiAtMTAgfSlcclxuICAgICAgICAgICAgLmJ5KDAuMDUsIHsgeDogMjAgfSlcclxuICAgICAgICAgICAgLmJ5KDAuMDUsIHsgeDogLTIwIH0pXHJcbiAgICAgICAgICAgIC5ieSgwLjA1LCB7IHg6IDEwIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59Il19