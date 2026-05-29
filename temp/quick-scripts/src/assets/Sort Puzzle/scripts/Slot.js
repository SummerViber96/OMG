"use strict";
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