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
        _this.astronautSprites = [];
        _this.farmerSprites = [];
        _this.singerSprites = [];
        _this.policeSprites = [];
        _this.judgeSprites = [];
        /*
            Hierarchy:
    
            Canvas
             ├── Board
             │    ├── Row1
             │    │    ├── LeftStack
             │    │    ├── CenterSlot
             │    │    └── RightStack
             │    ├── Row2
             │    ├── Row3
             │    └── Row4
             └── DragLayer
        */
        _this.levelData = [
            {
                mission: "police",
                left: [
                    {
                        type: "singer",
                        variant: 1
                    },
                    {
                        type: "farmer",
                        variant: 2
                    },
                    {
                        type: "police",
                        variant: 1
                    },
                ],
                right: [
                    {
                        type: "police",
                        variant: 2
                    },
                    {
                        type: "police",
                        variant: 4
                    },
                    {
                        type: "astronaut",
                        variant: 1
                    },
                ]
            },
            {
                mission: "singer",
                left: [
                    {
                        type: "police",
                        variant: 2
                    },
                    {
                        type: "farmer",
                        variant: 3
                    },
                    {
                        type: "astronaut",
                        variant: 2
                    },
                ],
                right: [
                    {
                        type: "police",
                        variant: 2
                    },
                    {
                        type: "police",
                        variant: 4
                    },
                    {
                        type: "singer",
                        variant: 2
                    },
                ]
            },
            {
                mission: "astronaut",
                left: [
                    {
                        type: "police",
                        variant: 2
                    },
                    {
                        type: "farmer",
                        variant: 1
                    },
                    {
                        type: "police",
                        variant: 2
                    },
                ],
                right: [
                    {
                        type: "police",
                        variant: 2
                    },
                    {
                        type: "astronaut",
                        variant: 4
                    },
                    {
                        type: "singer",
                        variant: 3
                    },
                ]
            },
            {
                mission: "farmer",
                left: [
                    {
                        type: "police",
                        variant: 2
                    },
                    {
                        type: "farmer",
                        variant: 2
                    },
                    {
                        type: "singer",
                        variant: 4
                    },
                ],
                right: [
                    {
                        type: "police",
                        variant: 2
                    },
                    {
                        type: "astronaut",
                        variant: 3
                    },
                    {
                        type: "police",
                        variant: 3
                    },
                ]
            }
        ];
        return _this;
    }
    GameManager.prototype.start = function () {
        this.spawnBoard();
    };
    GameManager.prototype.spawnBoard = function () {
        for (var i = 0; i < this.board.childrenCount; i++) {
            var row = this.board.children[i];
            var data = this.levelData[i];
            if (!data)
                continue;
            var leftStack = row.getChildByName("LeftStack");
            var rightStack = row.getChildByName("RightStack");
            var slot = row.getChildByName("CenterSlot");
            // init slot
            console.log(data.mission);
            slot.getComponent("Slot")
                .init(data.mission);
            // spawn stack
            this.spawnStack(leftStack, data.left);
            this.spawnStack(rightStack, data.right);
        }
    };
    GameManager.prototype.spawnStack = function (parent, data) {
        parent.removeAllChildren();
        for (var i = 0; i < data.length; i++) {
            var info = data[i];
            var card = cc.instantiate(this.cardPrefab);
            parent.addChild(card);
            card.y = i * 18;
            card.zIndex = i;
            var cardComp = card.getComponent("Card");
            cardComp.cardType = info.type;
            cardComp.variant = info.variant;
            this.setCardVisual(card, info.type, info.variant);
        }
        parent.getComponent("CardStack")
            .setup();
    };
    GameManager.prototype.setCardVisual = function (card, type, variant) {
        var front = card.getChildByName("front");
        var icon = front
            .getChildByName("icon")
            .getComponent(cc.Sprite);
        // let lbTitle = front
        //     .getChildByName("lbTitle")
        //     .getComponent(cc.Label);
        // lbTitle.string = this.getCardName(type);
        console.log(variant, type);
        variant -= 1;
        var spriteFrame = null;
        switch (type) {
            case "astronaut":
                spriteFrame =
                    this.astronautSprites[variant];
                break;
            case "farmer":
                spriteFrame =
                    this.farmerSprites[variant];
                break;
            case "singer":
                spriteFrame =
                    this.singerSprites[variant];
                break;
            case "police":
                spriteFrame =
                    this.policeSprites[variant];
                break;
            case "judge":
                spriteFrame =
                    this.judgeSprites[variant];
                break;
        }
        icon.spriteFrame = spriteFrame;
    };
    GameManager.prototype.getCardName = function (type) {
        switch (type) {
            case "astronaut":
                return "Astronaut";
            case "farmer":
                return "Farmer";
            case "singer":
                return "Pop Star";
            case "police":
                return "Public Servant";
            case "judge":
                return "Judge";
        }
        return type;
    };
    // shuffle test
    GameManager.prototype.randomType = function () {
        var arr = [
            "astronaut",
            "farmer",
            "singer",
            "police",
            "judge"
        ];
        return arr[Math.floor(Math.random() * arr.length)];
    };
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "cardPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "board", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GameManager.prototype, "astronautSprites", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GameManager.prototype, "farmerSprites", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GameManager.prototype, "singerSprites", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GameManager.prototype, "policeSprites", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GameManager.prototype, "judgeSprites", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();