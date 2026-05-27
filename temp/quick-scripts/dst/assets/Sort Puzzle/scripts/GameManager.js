
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Sort Puzzle/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXEdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBcVhDO1FBbFhHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsc0JBQWdCLEdBQXFCLEVBQUUsQ0FBQztRQUd4QyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFHckMsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUdyQyxrQkFBWSxHQUFxQixFQUFFLENBQUM7UUFDcEM7Ozs7Ozs7Ozs7Ozs7VUFhRTtRQUVGLGVBQVMsR0FBRztZQUVSO2dCQUNJLE9BQU8sRUFBRSxRQUFRO2dCQUVqQixJQUFJLEVBQUU7b0JBQ0Y7d0JBQ0ksSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLENBQUM7cUJBQ2I7b0JBQ0Q7d0JBQ0ksSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLENBQUM7cUJBQ2I7b0JBQ0Q7d0JBQ0ksSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLENBQUM7cUJBQ2I7aUJBS0o7Z0JBRUQsS0FBSyxFQUFFO29CQUNIO3dCQUNJLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxDQUFDO3FCQUNiO29CQUNEO3dCQUNJLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxDQUFDO3FCQUNiO29CQUNEO3dCQUNJLElBQUksRUFBRSxXQUFXO3dCQUNqQixPQUFPLEVBQUUsQ0FBQztxQkFDYjtpQkFLSjthQUNKO1lBRUQ7Z0JBQ0ksT0FBTyxFQUFFLFFBQVE7Z0JBRWpC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cywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNhcmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGFzdHJvbmF1dFNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGZhcm1lclNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHNpbmdlclNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHBvbGljZVNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGp1ZGdlU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgLypcclxuICAgICAgICBIaWVyYXJjaHk6XHJcblxyXG4gICAgICAgIENhbnZhc1xyXG4gICAgICAgICDilJzilIDilIAgQm9hcmRcclxuICAgICAgICAg4pSCICAgIOKUnOKUgOKUgCBSb3cxXHJcbiAgICAgICAgIOKUgiAgICDilIIgICAg4pSc4pSA4pSAIExlZnRTdGFja1xyXG4gICAgICAgICDilIIgICAg4pSCICAgIOKUnOKUgOKUgCBDZW50ZXJTbG90XHJcbiAgICAgICAgIOKUgiAgICDilIIgICAg4pSU4pSA4pSAIFJpZ2h0U3RhY2tcclxuICAgICAgICAg4pSCICAgIOKUnOKUgOKUgCBSb3cyXHJcbiAgICAgICAgIOKUgiAgICDilJzilIDilIAgUm93M1xyXG4gICAgICAgICDilIIgICAg4pSU4pSA4pSAIFJvdzRcclxuICAgICAgICAg4pSU4pSA4pSAIERyYWdMYXllclxyXG4gICAgKi9cclxuXHJcbiAgICBsZXZlbERhdGEgPSBbXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWlzc2lvbjogXCJwb2xpY2VcIixcclxuXHJcbiAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNpbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmYXJtZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3Ryb25hdXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWlzc2lvbjogXCJzaW5nZXJcIixcclxuXHJcbiAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmYXJtZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXN0cm9uYXV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzaW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWlzc2lvbjogXCJhc3Ryb25hdXRcIixcclxuXHJcbiAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmYXJtZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzdHJvbmF1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzaW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWlzc2lvbjogXCJmYXJtZXJcIixcclxuXHJcbiAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmFybWVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNpbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXN0cm9uYXV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0aGlzLnNwYXduQm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGF3bkJvYXJkKCkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy5ib2FyZC5jaGlsZHJlbltpXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5sZXZlbERhdGFbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRhdGEpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxlZnRTdGFjayA9IHJvdy5nZXRDaGlsZEJ5TmFtZShcIkxlZnRTdGFja1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByaWdodFN0YWNrID0gcm93LmdldENoaWxkQnlOYW1lKFwiUmlnaHRTdGFja1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzbG90ID0gcm93LmdldENoaWxkQnlOYW1lKFwiQ2VudGVyU2xvdFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGluaXQgc2xvdFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm1pc3Npb24pXHJcbiAgICAgICAgICAgIHNsb3QuZ2V0Q29tcG9uZW50KFwiU2xvdFwiKVxyXG4gICAgICAgICAgICAgICAgLmluaXQoZGF0YS5taXNzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNwYXduIHN0YWNrXHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25TdGFjayhsZWZ0U3RhY2ssIGRhdGEubGVmdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNwYXduU3RhY2socmlnaHRTdGFjaywgZGF0YS5yaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduU3RhY2socGFyZW50OiBjYy5Ob2RlLCBkYXRhOiBhbnlbXSkge1xyXG5cclxuICAgICAgICBwYXJlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IGRhdGFbaV07XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FyZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FyZFByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoY2FyZCk7XHJcblxyXG4gICAgICAgICAgICBjYXJkLnkgPSBpICogMTg7XHJcblxyXG4gICAgICAgICAgICBjYXJkLnpJbmRleCA9IGk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FyZENvbXAgPSBjYXJkLmdldENvbXBvbmVudChcIkNhcmRcIik7XHJcblxyXG4gICAgICAgICAgICBjYXJkQ29tcC5jYXJkVHlwZSA9IGluZm8udHlwZTtcclxuXHJcbiAgICAgICAgICAgIGNhcmRDb21wLnZhcmlhbnQgPSBpbmZvLnZhcmlhbnQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldENhcmRWaXN1YWwoXHJcbiAgICAgICAgICAgICAgICBjYXJkLFxyXG4gICAgICAgICAgICAgICAgaW5mby50eXBlLFxyXG4gICAgICAgICAgICAgICAgaW5mby52YXJpYW50XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJlbnQuZ2V0Q29tcG9uZW50KFwiQ2FyZFN0YWNrXCIpXHJcbiAgICAgICAgICAgIC5zZXR1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmRWaXN1YWwoXHJcbiAgICAgICAgY2FyZDogY2MuTm9kZSxcclxuICAgICAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICAgICAgdmFyaWFudDogbnVtYmVyXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgbGV0IGZyb250ID0gY2FyZC5nZXRDaGlsZEJ5TmFtZShcImZyb250XCIpO1xyXG5cclxuICAgICAgICBsZXQgaWNvbiA9IGZyb250XHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImljb25cIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGJUaXRsZSA9IGZyb250XHJcbiAgICAgICAgLy8gICAgIC5nZXRDaGlsZEJ5TmFtZShcImxiVGl0bGVcIilcclxuICAgICAgICAvLyAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIC8vIGxiVGl0bGUuc3RyaW5nID0gdGhpcy5nZXRDYXJkTmFtZSh0eXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YXJpYW50LCB0eXBlKVxyXG4gICAgICAgIHZhcmlhbnQgLT0gMVxyXG4gICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFzdHJvbmF1dFwiOlxyXG5cclxuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzdHJvbmF1dFNwcml0ZXNbdmFyaWFudF07XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZmFybWVyXCI6XHJcblxyXG4gICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFybWVyU3ByaXRlc1t2YXJpYW50XTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJzaW5nZXJcIjpcclxuXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nZXJTcHJpdGVzW3ZhcmlhbnRdO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInBvbGljZVwiOlxyXG5cclxuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvbGljZVNwcml0ZXNbdmFyaWFudF07XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwianVkZ2VcIjpcclxuXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdWRnZVNwcml0ZXNbdmFyaWFudF07XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FyZE5hbWUodHlwZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFzdHJvbmF1dFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXN0cm9uYXV0XCI7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZmFybWVyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXJtZXJcIjtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJzaW5nZXJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcCBTdGFyXCI7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwicG9saWNlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQdWJsaWMgU2VydmFudFwiO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImp1ZGdlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKdWRnZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2h1ZmZsZSB0ZXN0XHJcbiAgICByYW5kb21UeXBlKCkge1xyXG5cclxuICAgICAgICBsZXQgYXJyID0gW1xyXG4gICAgICAgICAgICBcImFzdHJvbmF1dFwiLFxyXG4gICAgICAgICAgICBcImZhcm1lclwiLFxyXG4gICAgICAgICAgICBcInNpbmdlclwiLFxyXG4gICAgICAgICAgICBcInBvbGljZVwiLFxyXG4gICAgICAgICAgICBcImp1ZGdlXCJcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJyW1xyXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn0iXX0=