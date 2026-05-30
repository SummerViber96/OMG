
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
var MissionConfig_1 = require("./MissionConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot = /** @class */ (function (_super) {
    __extends(Slot, _super);
    function Slot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbTitle = null;
        _this.lbNum = null;
        _this.cardContainer = null;
        _this.upgradeUI = [];
        _this.lbNum2 = null;
        _this.lbTitle2 = null;
        _this.missionType = "";
        _this.posNumLocal = cc.v3(-47, 113);
        _this.cards = [];
        _this.maxCard = 4;
        _this.isCompleting = false;
        return _this;
    }
    Slot.prototype.init = function (type) {
        this.resetState();
        this.missionType = type;
        this.lbTitle.string = MissionConfig_1.getMissionTitle(type);
        this.lbTitle2.string = MissionConfig_1.getMissionTitle(type);
        this.updateCounter();
    };
    Slot.prototype.resetState = function () {
        this.cards = [];
        if (this.cardContainer) {
            this.cardContainer.removeAllChildren();
        }
        for (var i = 0; i < this.upgradeUI.length; i++) {
            this.upgradeUI[i].active = false;
        }
        if (this.lbNum) {
            this.lbNum.node.active = true;
        }
        if (this.lbTitle) {
            this.lbTitle.node.active = true;
        }
    };
    Slot.prototype.tryAddCard = function (card) {
        if (this.isCompleting) {
            return false;
        }
        // sai loại
        if (card.cardType != this.missionType) {
            this.shake();
            return false;
        }
        // full
        if (this.cards.length >= this.maxCard) {
            return false;
        }
        this.addCard(card);
        return true;
    };
    Slot.prototype.upgradeLayout = function () {
    };
    Slot.prototype.addCard = function (card) {
        this.cards.push(card);
        // convert world pos
        var worldPos = card.node.parent.convertToWorldSpaceAR(card.node.position);
        // move vào container
        card.node.parent = this.cardContainer;
        card.node.position =
            this.cardContainer.convertToNodeSpaceAR(worldPos);
        var index = this.cards.length - 1;
        // visual stack
        var targetPos = cc.v3(0, 0);
        cc.tween(card.node)
            .to(0.15, {
            position: targetPos,
            scale: 0.9,
            angle: 0
        }, {
            easing: "backOut"
        })
            .start();
        this.node.getComponent(cc.Animation).play();
        // update UI
        this.updateCounter();
        this.bumpCounter();
        this.checkComplete();
    };
    Slot.prototype.updateCounter = function () {
        if (this.cards.length == 1) {
            for (var i = 0; i < this.upgradeUI.length; i++) {
                this.upgradeUI[i].active = true;
            }
            this.lbNum.node.active = false;
            this.lbTitle.node.active = false;
        }
        this.lbNum.string =
            this.cards.length + "/" + this.maxCard;
        this.lbNum2.string =
            this.cards.length + "/" + this.maxCard;
    };
    Slot.prototype.bumpCounter = function () {
        this.lbNum.node.scale = 1.2;
        cc.tween(this.lbNum.node)
            .to(0.1, {
            scale: 1
        })
            .start();
    };
    Slot.prototype.checkComplete = function () {
        if (this.cards.length < this.maxCard)
            return;
        this.success();
    };
    Slot.prototype.success = function () {
        var _this = this;
        this.isCompleting = true;
        var cardCount = this.cards.length;
        var _loop_1 = function (i) {
            var card = this_1.cards[i];
            cc.tween(card.node)
                .delay(i * 0.05)
                .parallel(cc.tween().to(0.25, {
                scale: 0
            }), cc.tween().by(0.25, {
                y: 100
            }))
                .call(function () {
                card.node.destroy();
            })
                .start();
        };
        var this_1 = this;
        for (var i = 0; i < cardCount; i++) {
            _loop_1(i);
        }
        this.cards = [];
        this.updateCounter();
        this.playCompleteEffect();
        this.scheduleOnce(function () {
            var gm = cc.find("Canvas")
                .getComponent("GameManager");
            if (gm) {
                gm.onSlotComplete(_this);
            }
        }, cardCount * 0.05 + 0.3);
    };
    Slot.prototype.playCompleteEffect = function () {
        cc.tween(this.node)
            .to(0.1, {
            scale: 1.05
        })
            .to(0.1, {
            scale: 1
        })
            .start();
        cc.log("MISSION COMPLETE");
    };
    Slot.prototype.shake = function () {
        cc.tween(this.node)
            .by(0.05, { x: -10 })
            .by(0.05, { x: 20 })
            .by(0.05, { x: -20 })
            .by(0.05, { x: 10 })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], Slot.prototype, "lbTitle", void 0);
    __decorate([
        property(cc.Label)
    ], Slot.prototype, "lbNum", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "cardContainer", void 0);
    __decorate([
        property(cc.Node)
    ], Slot.prototype, "upgradeUI", void 0);
    __decorate([
        property(cc.Label)
    ], Slot.prototype, "lbNum2", void 0);
    __decorate([
        property(cc.Label)
    ], Slot.prototype, "lbTitle2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Tb3J0IFB1enpsZS9zY3JpcHRzL1Nsb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBcU9DO1FBbE9HLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWMsRUFBRSxDQUFBO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDN0IsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixrQkFBWSxHQUFHLEtBQUssQ0FBQzs7SUE4TXpCLENBQUM7SUE1TUcsbUJBQUksR0FBSixVQUFLLElBQVk7UUFFYixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsK0JBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRywrQkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUVJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUks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IGdldE1pc3Npb25UaXRsZSB9IGZyb20gXCIuL01pc3Npb25Db25maWdcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk51bTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdXBncmFkZVVJOiBjYy5Ob2RlW10gPSBbXVxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk51bTI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUaXRsZTI6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIG1pc3Npb25UeXBlID0gXCJcIjtcbiAgICBwb3NOdW1Mb2NhbCA9IGNjLnYzKC00NywgMTEzKVxuICAgIGNhcmRzID0gW107XG5cbiAgICBtYXhDYXJkID0gNDtcblxuICAgIGlzQ29tcGxldGluZyA9IGZhbHNlO1xuXG4gICAgaW5pdCh0eXBlOiBzdHJpbmcpIHtcblxuICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcblxuICAgICAgICB0aGlzLm1pc3Npb25UeXBlID0gdHlwZTtcblxuICAgICAgICB0aGlzLmxiVGl0bGUuc3RyaW5nID0gZ2V0TWlzc2lvblRpdGxlKHR5cGUpO1xuICAgICAgICB0aGlzLmxiVGl0bGUyLnN0cmluZyA9IGdldE1pc3Npb25UaXRsZSh0eXBlKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcbiAgICB9XG5cbiAgICByZXNldFN0YXRlKCkge1xuXG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5jYXJkQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRDb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51cGdyYWRlVUkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudXBncmFkZVVJW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGJOdW0pIHtcbiAgICAgICAgICAgIHRoaXMubGJOdW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGJUaXRsZSkge1xuICAgICAgICAgICAgdGhpcy5sYlRpdGxlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyeUFkZENhcmQoY2FyZCkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29tcGxldGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2FpIGxv4bqhaVxuICAgICAgICBpZiAoY2FyZC5jYXJkVHlwZSAhPSB0aGlzLm1pc3Npb25UeXBlKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2hha2UoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZnVsbFxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPj0gdGhpcy5tYXhDYXJkKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkQ2FyZChjYXJkKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdXBncmFkZUxheW91dCgpIHtcblxuICAgIH1cblxuICAgIGFkZENhcmQoY2FyZCkge1xuXG4gICAgICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcblxuICAgICAgICAvLyBjb252ZXJ0IHdvcmxkIHBvc1xuICAgICAgICBsZXQgd29ybGRQb3MgPVxuICAgICAgICAgICAgY2FyZC5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2FyZC5ub2RlLnBvc2l0aW9uKTtcblxuICAgICAgICAvLyBtb3ZlIHbDoG8gY29udGFpbmVyXG4gICAgICAgIGNhcmQubm9kZS5wYXJlbnQgPSB0aGlzLmNhcmRDb250YWluZXI7XG5cbiAgICAgICAgY2FyZC5ub2RlLnBvc2l0aW9uID1cbiAgICAgICAgICAgIHRoaXMuY2FyZENvbnRhaW5lci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG5cbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jYXJkcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIC8vIHZpc3VhbCBzdGFja1xuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gY2MudjMoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICk7XG5cbiAgICAgICAgY2MudHdlZW4oY2FyZC5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMTUsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGFyZ2V0UG9zLFxuICAgICAgICAgICAgICAgIHNjYWxlOiAwLjksXG4gICAgICAgICAgICAgICAgYW5nbGU6MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbnRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgLy8gdXBkYXRlIFVJXG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlcigpO1xuXG4gICAgICAgIHRoaXMuYnVtcENvdW50ZXIoKTtcblxuICAgICAgICB0aGlzLmNoZWNrQ29tcGxldGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDb3VudGVyKCkge1xuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVwZ3JhZGVVSS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBncmFkZVVJW2ldLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGJOdW0ubm9kZS5hY3RpdmU9ZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxiVGl0bGUubm9kZS5hY3RpdmU9ZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxiTnVtLnN0cmluZyA9XG4gICAgICAgICAgICBgJHt0aGlzLmNhcmRzLmxlbmd0aH0vJHt0aGlzLm1heENhcmR9YDtcbiAgICAgICAgdGhpcy5sYk51bTIuc3RyaW5nID1cbiAgICAgICAgICAgIGAke3RoaXMuY2FyZHMubGVuZ3RofS8ke3RoaXMubWF4Q2FyZH1gO1xuICAgIH1cblxuICAgIGJ1bXBDb3VudGVyKCkge1xuXG4gICAgICAgIHRoaXMubGJOdW0ubm9kZS5zY2FsZSA9IDEuMjtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmxiTnVtLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4xLCB7XG4gICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBjaGVja0NvbXBsZXRlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA8IHRoaXMubWF4Q2FyZCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuc3VjY2VzcygpO1xuICAgIH1cblxuICAgIHN1Y2Nlc3MoKSB7XG5cbiAgICAgICAgdGhpcy5pc0NvbXBsZXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIGxldCBjYXJkQ291bnQgPSB0aGlzLmNhcmRzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRDb3VudDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBjYXJkID0gdGhpcy5jYXJkc1tpXTtcblxuICAgICAgICAgICAgY2MudHdlZW4oY2FyZC5ub2RlKVxuICAgICAgICAgICAgICAgIC5kZWxheShpICogMC4wNSlcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4yNSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDBcbiAgICAgICAgICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjI1LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAxMDBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNhcmQubm9kZS5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlcigpO1xuXG4gICAgICAgIHRoaXMucGxheUNvbXBsZXRlRWZmZWN0KCk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgZ20gPSBjYy5maW5kKFwiQ2FudmFzXCIpXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xuXG4gICAgICAgICAgICBpZiAoZ20pIHtcbiAgICAgICAgICAgICAgICBnbS5vblNsb3RDb21wbGV0ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCBjYXJkQ291bnQgKiAwLjA1ICsgMC4zKTtcbiAgICB9XG5cbiAgICBwbGF5Q29tcGxldGVFZmZlY3QoKSB7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMSwge1xuICAgICAgICAgICAgICAgIHNjYWxlOiAxLjA1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKDAuMSwge1xuICAgICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgY2MubG9nKFwiTUlTU0lPTiBDT01QTEVURVwiKTtcbiAgICB9XG5cbiAgICBzaGFrZSgpIHtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiAtMTAgfSlcbiAgICAgICAgICAgIC5ieSgwLjA1LCB7IHg6IDIwIH0pXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiAtMjAgfSlcbiAgICAgICAgICAgIC5ieSgwLjA1LCB7IHg6IDEwIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbn0iXX0=