
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
        _this.gamePlay = null;
        return _this;
    }
    Slot.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameManager");
    };
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
        this.gamePlay.addDone(this.node.position);
        // convert world pos
        var worldPos = card.node.parent.convertToWorldSpaceAR(card.node.position);
        // move vào container
        card.node.parent = this.cardContainer;
        card.node.position =
            this.cardContainer.convertToNodeSpaceAR(worldPos);
        var index = this.cards.length - 1;
        this.gamePlay.handGuild.active = false;
        cc.audioEngine.play(this.gamePlay.soundClickCard, false, 1);
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
        this.gamePlay.addWrong(this.node.position);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXFNsb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBME9DO1FBdk9HLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWMsRUFBRSxDQUFBO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDN0IsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixjQUFRLEdBQUcsSUFBSSxDQUFBOztJQWtObkIsQ0FBQztJQWpOYSxvQkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFDRCxtQkFBSSxHQUFKLFVBQUssSUFBWTtRQUViLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRywrQkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFR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O1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1Q0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3Q0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNPO0lBZlQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQTBPeEI7SUFBRCxXQUFDO0NBMU9ELEFBME9DLENBMU9pQyxFQUFFLENBQUMsU0FBUyxHQTBPN0M7a0JBMU9vQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TWlzc2lvblRpdGxlIH0gZnJvbSBcIi4vTWlzc2lvbkNvbmZpZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiVGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYk51bTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FyZENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVwZ3JhZGVVSTogY2MuTm9kZVtdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTnVtMjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJUaXRsZTI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBtaXNzaW9uVHlwZSA9IFwiXCI7XHJcbiAgICBwb3NOdW1Mb2NhbCA9IGNjLnYzKC00NywgMTEzKVxyXG4gICAgY2FyZHMgPSBbXTtcclxuXHJcbiAgICBtYXhDYXJkID0gNDtcclxuXHJcbiAgICBpc0NvbXBsZXRpbmcgPSBmYWxzZTtcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXk9Y2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIilcclxuICAgIH1cclxuICAgIGluaXQodHlwZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1pc3Npb25UeXBlID0gdHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYlRpdGxlLnN0cmluZyA9IGdldE1pc3Npb25UaXRsZSh0eXBlKTtcclxuICAgICAgICB0aGlzLmxiVGl0bGUyLnN0cmluZyA9IGdldE1pc3Npb25UaXRsZSh0eXBlKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTdGF0ZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYXJkQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZENvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVwZ3JhZGVVSS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnVwZ3JhZGVVSVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxiTnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGJOdW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGJUaXRsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxiVGl0bGUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cnlBZGRDYXJkKGNhcmQpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNhaSBsb+G6oWlcclxuICAgICAgICBpZiAoY2FyZC5jYXJkVHlwZSAhPSB0aGlzLm1pc3Npb25UeXBlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNoYWtlKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmdWxsXHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID49IHRoaXMubWF4Q2FyZCkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRDYXJkKGNhcmQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHVwZ3JhZGVMYXlvdXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZENhcmQoY2FyZCkge1xyXG5cclxuICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XHJcbnRoaXMuZ2FtZVBsYXkuYWRkRG9uZSh0aGlzLm5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgLy8gY29udmVydCB3b3JsZCBwb3NcclxuICAgICAgICBsZXQgd29ybGRQb3MgPVxyXG4gICAgICAgICAgICBjYXJkLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYXJkLm5vZGUucG9zaXRpb24pO1xyXG5cclxuICAgICAgICAvLyBtb3ZlIHbDoG8gY29udGFpbmVyXHJcbiAgICAgICAgY2FyZC5ub2RlLnBhcmVudCA9IHRoaXMuY2FyZENvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgY2FyZC5ub2RlLnBvc2l0aW9uID1cclxuICAgICAgICAgICAgdGhpcy5jYXJkQ29udGFpbmVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jYXJkcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaGFuZEd1aWxkLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kQ2xpY2tDYXJkLGZhbHNlLDEpXHJcbiAgICAgICAgLy8gdmlzdWFsIHN0YWNrXHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IGNjLnYzKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4oY2FyZC5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4xNSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRhcmdldFBvcyxcclxuICAgICAgICAgICAgICAgIHNjYWxlOiAwLjksXHJcbiAgICAgICAgICAgICAgICBhbmdsZTogMFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAvLyB1cGRhdGUgVUlcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5idW1wQ291bnRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrQ29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb3VudGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51cGdyYWRlVUkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBncmFkZVVJW2ldLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxiTnVtLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGJUaXRsZS5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGJOdW0uc3RyaW5nID1cclxuICAgICAgICAgICAgYCR7dGhpcy5jYXJkcy5sZW5ndGh9LyR7dGhpcy5tYXhDYXJkfWA7XHJcbiAgICAgICAgdGhpcy5sYk51bTIuc3RyaW5nID1cclxuICAgICAgICAgICAgYCR7dGhpcy5jYXJkcy5sZW5ndGh9LyR7dGhpcy5tYXhDYXJkfWA7XHJcbiAgICB9XHJcblxyXG4gICAgYnVtcENvdW50ZXIoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubGJOdW0ubm9kZS5zY2FsZSA9IDEuMjtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5sYk51bS5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbXBsZXRlKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPCB0aGlzLm1heENhcmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zdWNjZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2VzcygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgY2FyZENvdW50ID0gdGhpcy5jYXJkcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZENvdW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYXJkID0gdGhpcy5jYXJkc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNhcmQubm9kZSlcclxuICAgICAgICAgICAgICAgIC5kZWxheShpICogMC4wNSlcclxuICAgICAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMjUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjI1LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5Q29tcGxldGVFZmZlY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGdtID0gY2MuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdtKSB7XHJcbiAgICAgICAgICAgICAgICBnbS5vblNsb3RDb21wbGV0ZSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCBjYXJkQ291bnQgKiAwLjA1ICsgMC4zKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5Q29tcGxldGVFZmZlY3QoKSB7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMSwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEuMDVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNjLmxvZyhcIk1JU1NJT04gQ09NUExFVEVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hha2UoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5hZGRXcm9uZyh0aGlzLm5vZGUucG9zaXRpb24pXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLmJ5KDAuMDUsIHsgeDogLTEwIH0pXHJcbiAgICAgICAgICAgIC5ieSgwLjA1LCB7IHg6IDIwIH0pXHJcbiAgICAgICAgICAgIC5ieSgwLjA1LCB7IHg6IC0yMCB9KVxyXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiAxMCB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=