
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
        return _this;
    }
    Slot.prototype.init = function (type) {
        this.missionType = type;
        // console.log("type",type)
        this.lbTitle.string = this.getMissionName(type);
        this.lbTitle2.string = this.getMissionName(type);
        this.updateCounter();
    };
    Slot.prototype.tryAddCard = function (card) {
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
        for (var i = 0; i < this.cards.length; i++) {
            _loop_1(i);
        }
        this.cards = [];
        this.updateCounter();
        this.playCompleteEffect();
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
    Slot.prototype.getMissionName = function (type) {
        switch (type) {
            case "astronaut":
                return "Astronauts";
            case "farmer":
                return "Farmers";
            case "singer":
                return "Pop stars";
            case "police":
                return "Public servants";
            case "judge":
                return "Judges";
        }
        return type;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXFNsb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErTUM7UUE1TUcsYUFBTyxHQUFhLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBYyxFQUFFLENBQUE7UUFFekIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFXLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM3QixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUEwTGhCLENBQUM7SUF4TEcsbUJBQUksR0FBSixVQUFLLElBQVk7UUFFYixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNoQywyQkFBMkI7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQseUJBQVUsR0FBVixVQUFXLElBQUk7UUFFWCxXQUFXO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFFbkMsSUFBSSxD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QUFDO3dDQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ087SUFmVCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBK014QjtJQUFELFdBQUM7Q0EvTUQsQUErTUMsQ0EvTWlDLEVBQUUsQ0FBQyxTQUFTLEdBK003QztrQkEvTW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJUaXRsZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTnVtOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYXJkQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdXBncmFkZVVJOiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJOdW0yOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlRpdGxlMjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIG1pc3Npb25UeXBlID0gXCJcIjtcclxuICAgIHBvc051bUxvY2FsID0gY2MudjMoLTQ3LCAxMTMpXHJcbiAgICBjYXJkcyA9IFtdO1xyXG5cclxuICAgIG1heENhcmQgPSA0O1xyXG5cclxuICAgIGluaXQodHlwZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWlzc2lvblR5cGUgPSB0eXBlO1xyXG4vLyBjb25zb2xlLmxvZyhcInR5cGVcIix0eXBlKVxyXG4gICAgICAgIHRoaXMubGJUaXRsZS5zdHJpbmcgPSB0aGlzLmdldE1pc3Npb25OYW1lKHR5cGUpO1xyXG4gICAgICAgIHRoaXMubGJUaXRsZTIuc3RyaW5nID0gdGhpcy5nZXRNaXNzaW9uTmFtZSh0eXBlKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5QWRkQ2FyZChjYXJkKSB7XHJcblxyXG4gICAgICAgIC8vIHNhaSBsb+G6oWlcclxuICAgICAgICBpZiAoY2FyZC5jYXJkVHlwZSAhPSB0aGlzLm1pc3Npb25UeXBlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNoYWtlKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmdWxsXHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID49IHRoaXMubWF4Q2FyZCkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRDYXJkKGNhcmQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHVwZ3JhZGVMYXlvdXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZENhcmQoY2FyZCkge1xyXG5cclxuICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnZlcnQgd29ybGQgcG9zXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID1cclxuICAgICAgICAgICAgY2FyZC5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2FyZC5ub2RlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSB2w6BvIGNvbnRhaW5lclxyXG4gICAgICAgIGNhcmQubm9kZS5wYXJlbnQgPSB0aGlzLmNhcmRDb250YWluZXI7XHJcblxyXG4gICAgICAgIGNhcmQubm9kZS5wb3NpdGlvbiA9XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZENvbnRhaW5lci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuY2FyZHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgLy8gdmlzdWFsIHN0YWNrXHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IGNjLnYzKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjYy50d2VlbihjYXJkLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjE1LCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGFyZ2V0UG9zLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDAuOSxcclxuICAgICAgICAgICAgICAgIGFuZ2xlOjBcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIFVJXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVtcENvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0NvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ291bnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXBncmFkZVVJLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZGVVSVtpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYk51bS5ub2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sYlRpdGxlLm5vZGUuYWN0aXZlPWZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGJOdW0uc3RyaW5nID1cclxuICAgICAgICAgICAgYCR7dGhpcy5jYXJkcy5sZW5ndGh9LyR7dGhpcy5tYXhDYXJkfWA7XHJcbiAgICAgICAgdGhpcy5sYk51bTIuc3RyaW5nID1cclxuICAgICAgICAgICAgYCR7dGhpcy5jYXJkcy5sZW5ndGh9LyR7dGhpcy5tYXhDYXJkfWA7XHJcbiAgICB9XHJcblxyXG4gICAgYnVtcENvdW50ZXIoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubGJOdW0ubm9kZS5zY2FsZSA9IDEuMjtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5sYk51bS5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbXBsZXRlKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPCB0aGlzLm1heENhcmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zdWNjZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2VzcygpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FyZCA9IHRoaXMuY2FyZHNbaV07XHJcblxyXG4gICAgICAgICAgICBjYy50d2VlbihjYXJkLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoaSAqIDAuMDUpXHJcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjI1LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4yNSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAxMDBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXJkLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheUNvbXBsZXRlRWZmZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUNvbXBsZXRlRWZmZWN0KCkge1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjEsIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiAxLjA1XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50bygwLjEsIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiAxXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICBjYy5sb2coXCJNSVNTSU9OIENPTVBMRVRFXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNoYWtlKCkge1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC5ieSgwLjA1LCB7IHg6IC0xMCB9KVxyXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiAyMCB9KVxyXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiAtMjAgfSlcclxuICAgICAgICAgICAgLmJ5KDAuMDUsIHsgeDogMTAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWlzc2lvbk5hbWUodHlwZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFzdHJvbmF1dFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXN0cm9uYXV0c1wiO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImZhcm1lclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmFybWVyc1wiO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNpbmdlclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9wIHN0YXJzXCI7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwicG9saWNlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQdWJsaWMgc2VydmFudHNcIjtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJqdWRnZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSnVkZ2VzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgIH1cclxufSJdfQ==