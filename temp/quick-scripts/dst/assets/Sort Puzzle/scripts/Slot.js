
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXFNsb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBcU9DO1FBbE9HLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWMsRUFBRSxDQUFBO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDN0IsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixrQkFBWSxHQUFHLEtBQUssQ0FBQzs7SUE4TXpCLENBQUM7SUE1TUcsbUJBQUksR0FBSixVQUFLLElBQVk7UUFFYixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsK0JBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRywrQkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUVJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUM7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNqQztRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQseUJBQVUsR0FBVixVQUFXLElBQUk7UUFFWCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxXQUFXO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFFbkMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRWIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRW5DLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0QsNEJBQWEsR0FBYjtJQUVBLENBQUM7SUFFRCxzQkFBTyxHQUFQLFVBQVEsSUFBSTtRQUVSLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLG9CQUFvQjtRQUNwQixJQUFJLFFBQVEsR0FDUixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9ELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLGVBQWU7UUFDZixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUNqQixDQUFDLEVBQ0MsQ0FBQyxDQUNOLENBQUM7UUFFRixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ04sUUFBUSxFQUFFLFNBQVM7WUFDbkIsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUMsQ0FBQztTQUNWLEVBQUU7WUFDQyxNQUFNLEVBQUUsU0FBUztTQUNwQixDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ25DLFlBQVk7UUFDWixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsNEJBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2FBQ2xDO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFBO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFNBQUksSUFBSSxDQUFDLE9BQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sU0FBSSxJQUFJLENBQUMsT0FBUyxDQUFDO0lBQy9DLENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUU1QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ3BCLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDTCxLQUFLLEVBQUUsQ0FBQztTQUNYLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsNEJBQWEsR0FBYjtRQUVJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRTdDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsc0JBQU8sR0FBUDtRQUFBLGlCQTZDQztRQTNDRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQ0FFekIsQ0FBQztZQUVOLElBQUksSUFBSSxHQUFHLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXpCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDZCxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDZixRQUFRLENBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hCLEtBQUssRUFBRSxDQUFDO2FBQ1gsQ0FBQyxFQUVGLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUNoQixDQUFDLEVBQUUsR0FBRzthQUNULENBQUMsQ0FDTDtpQkFDQSxJQUFJLENBQUM7Z0JBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV4QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7OztRQXBCakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUU7b0JBQXpCLENBQUM7U0FxQlQ7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUVkLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNyQixZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFakMsSUFBSSxFQUFFLEVBQUU7Z0JBQ0osRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsQ0FBQzthQUMzQjtRQUVMLENBQUMsRUFBRSxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBa0IsR0FBbEI7UUFFSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ0wsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDO2FBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNMLEtBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO1FBRWIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBRUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3BCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDbkIsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3BCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDbkIsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQWhPRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUNBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0NBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDTztJQWZULElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FxT3hCO0lBQUQsV0FBQztDQXJPRCxBQXFPQyxDQXJPaUMsRUFBRSxDQUFDLFNBQVMsR0FxTzdDO2tCQXJPb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1pc3Npb25UaXRsZSB9IGZyb20gXCIuL01pc3Npb25Db25maWdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlRpdGxlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJOdW06IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhcmRDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1cGdyYWRlVUk6IGNjLk5vZGVbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYk51bTI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiVGl0bGUyOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgbWlzc2lvblR5cGUgPSBcIlwiO1xyXG4gICAgcG9zTnVtTG9jYWwgPSBjYy52MygtNDcsIDExMylcclxuICAgIGNhcmRzID0gW107XHJcblxyXG4gICAgbWF4Q2FyZCA9IDQ7XHJcblxyXG4gICAgaXNDb21wbGV0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgaW5pdCh0eXBlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWlzc2lvblR5cGUgPSB0eXBlO1xyXG5cclxuICAgICAgICB0aGlzLmxiVGl0bGUuc3RyaW5nID0gZ2V0TWlzc2lvblRpdGxlKHR5cGUpO1xyXG4gICAgICAgIHRoaXMubGJUaXRsZTIuc3RyaW5nID0gZ2V0TWlzc2lvblRpdGxlKHR5cGUpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFN0YXRlKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNhcmRzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhcmRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkQ29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXBncmFkZVVJLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBncmFkZVVJW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGJOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5sYk51bS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sYlRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGJUaXRsZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyeUFkZENhcmQoY2FyZCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0NvbXBsZXRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2FpIGxv4bqhaVxyXG4gICAgICAgIGlmIChjYXJkLmNhcmRUeXBlICE9IHRoaXMubWlzc2lvblR5cGUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hha2UoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZ1bGxcclxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPj0gdGhpcy5tYXhDYXJkKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZENhcmQoY2FyZCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdXBncmFkZUxheW91dCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2FyZChjYXJkKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcclxuXHJcbiAgICAgICAgLy8gY29udmVydCB3b3JsZCBwb3NcclxuICAgICAgICBsZXQgd29ybGRQb3MgPVxyXG4gICAgICAgICAgICBjYXJkLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYXJkLm5vZGUucG9zaXRpb24pO1xyXG5cclxuICAgICAgICAvLyBtb3ZlIHbDoG8gY29udGFpbmVyXHJcbiAgICAgICAgY2FyZC5ub2RlLnBhcmVudCA9IHRoaXMuY2FyZENvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgY2FyZC5ub2RlLnBvc2l0aW9uID1cclxuICAgICAgICAgICAgdGhpcy5jYXJkQ29udGFpbmVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jYXJkcy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAvLyB2aXN1YWwgc3RhY2tcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gY2MudjMoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGNhcmQubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMTUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0YXJnZXRQb3MsXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMC45LFxyXG4gICAgICAgICAgICAgICAgYW5nbGU6MFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG50aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgLy8gdXBkYXRlIFVJXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVtcENvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0NvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ291bnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXBncmFkZVVJLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZGVVSVtpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYk51bS5ub2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sYlRpdGxlLm5vZGUuYWN0aXZlPWZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGJOdW0uc3RyaW5nID1cclxuICAgICAgICAgICAgYCR7dGhpcy5jYXJkcy5sZW5ndGh9LyR7dGhpcy5tYXhDYXJkfWA7XHJcbiAgICAgICAgdGhpcy5sYk51bTIuc3RyaW5nID1cclxuICAgICAgICAgICAgYCR7dGhpcy5jYXJkcy5sZW5ndGh9LyR7dGhpcy5tYXhDYXJkfWA7XHJcbiAgICB9XHJcblxyXG4gICAgYnVtcENvdW50ZXIoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubGJOdW0ubm9kZS5zY2FsZSA9IDEuMjtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5sYk51bS5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbXBsZXRlKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPCB0aGlzLm1heENhcmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zdWNjZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2VzcygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgY2FyZENvdW50ID0gdGhpcy5jYXJkcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZENvdW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYXJkID0gdGhpcy5jYXJkc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNhcmQubm9kZSlcclxuICAgICAgICAgICAgICAgIC5kZWxheShpICogMC4wNSlcclxuICAgICAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMjUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjI1LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5Q29tcGxldGVFZmZlY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGdtID0gY2MuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdtKSB7XHJcbiAgICAgICAgICAgICAgICBnbS5vblNsb3RDb21wbGV0ZSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCBjYXJkQ291bnQgKiAwLjA1ICsgMC4zKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5Q29tcGxldGVFZmZlY3QoKSB7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMSwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEuMDVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNjLmxvZyhcIk1JU1NJT04gQ09NUExFVEVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hha2UoKSB7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLmJ5KDAuMDUsIHsgeDogLTEwIH0pXHJcbiAgICAgICAgICAgIC5ieSgwLjA1LCB7IHg6IDIwIH0pXHJcbiAgICAgICAgICAgIC5ieSgwLjA1LCB7IHg6IC0yMCB9KVxyXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiAxMCB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=