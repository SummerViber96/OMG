"use strict";
cc._RF.push(module, 'aa1f8ut8jBF9ZZNiAAr89E0', 'GameManager');
// Sort Puzzle/scripts/GameManager.ts

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
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cardPrefab = null;
        _this.board = null;
        /*
            dữ liệu:
    
            [
                [
                    "singer",
                    "astronaut",
                    "police"
                ],
    
                [
                    "farmer",
                    "judge",
                    "singer"
                ]
            ]
    
        */
        _this.leftData = [
            ["singer", "astronaut", "police"],
            ["farmer", "judge", "singer"],
            ["astronaut", "farmer", "judge"],
            ["police", "singer", "astronaut"]
        ];
        _this.rightData = [
            ["judge", "police", "astronaut"],
            ["singer", "astronaut", "farmer"],
            ["judge", "police", "farmer"],
            ["singer", "judge", "police"]
        ];
        return _this;
    }
    GameManager.prototype.start = function () {
        this.spawnBoard();
    };
    GameManager.prototype.spawnBoard = function () {
        for (var i = 0; i < this.board.childrenCount; i++) {
            var row = this.board.children[i];
            var leftStack = row.getChildByName("LeftStack");
            var rightStack = row.getChildByName("RightStack");
            this.spawnStack(leftStack, this.leftData[i]);
            this.spawnStack(rightStack, this.rightData[i]);
        }
    };
    GameManager.prototype.spawnStack = function (parent, data) {
        parent.removeAllChildren();
        for (var i = 0; i < data.length; i++) {
            var type = data[i];
            var card = cc.instantiate(this.cardPrefab);
            parent.addChild(card);
            card.y = i * 18;
            var cardComp = card.getComponent("Card");
            cardComp.cardType = type;
            this.setCardVisual(card, type);
        }
        parent.getComponent("CardStack").setup();
    };
    GameManager.prototype.setCardVisual = function (card, type) {
        // let label = card.getChildByName("Front")
        //     .getChildByName("Label")
        //     .getComponent(cc.Label);
        // label.string = type;
        // TODO:
        // set avatar sprite theo type
    };
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "cardPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "board", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();