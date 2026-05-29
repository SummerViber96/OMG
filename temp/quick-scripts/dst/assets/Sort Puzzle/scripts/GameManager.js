
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
var MissionConfig_1 = require("./MissionConfig");
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
        _this.footballSprites = [];
        _this.airplaneSprites = [];
        _this.esportSprites = [];
        _this.spriteMap = {};
        _this.spawnQueueIndex = 0;
        _this.stackRefillCount = 3;
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
    GameManager_1 = GameManager;
    GameManager.prototype.onLoad = function () {
        GameManager_1.ins = this;
        var canvas = this.node;
        var dragLayer = canvas.getChildByName("DragLayer");
        if (dragLayer) {
            dragLayer.setSiblingIndex(canvas.childrenCount - 1);
        }
        this.spriteMap = {
            astronaut: this.astronautSprites,
            farmer: this.farmerSprites,
            singer: this.singerSprites,
            police: this.policeSprites,
            football: this.footballSprites,
            airplane: this.airplaneSprites,
            esport: this.esportSprites,
        };
    };
    GameManager.prototype.start = function () {
        this.spawnBoard();
    };
    GameManager.prototype.onSlotComplete = function (completedSlot) {
        var oldNode = completedSlot.node;
        var row = oldNode.parent;
        var pos = oldNode.position.clone();
        var newMission = this.getNextMission(completedSlot.missionType);
        var newSlotNode = cc.instantiate(oldNode);
        row.addChild(newSlotNode);
        newSlotNode.name = "CenterSlot";
        newSlotNode.position = pos;
        newSlotNode.scale = 0;
        oldNode.destroy();
        var slot = newSlotNode.getComponent("Slot");
        slot.init(newMission);
        cc.tween(newSlotNode)
            .to(0.2, {
            scale: 1
        }, {
            easing: "backOut"
        })
            .start();
    };
    GameManager.prototype.getNextMission = function (exclude) {
        var result = MissionConfig_1.getNextSpawnMission(exclude, this.spawnQueueIndex);
        this.spawnQueueIndex = result.nextIndex;
        return result.missionId;
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
            var cardNode = this.createCardNode(parent, info);
            cardNode.y = i * 20;
            cardNode.zIndex = i;
        }
        var stackComp = parent.getComponent("CardStack");
        stackComp.init(this);
        stackComp.setup();
    };
    GameManager.prototype.onStackEmpty = function (stack) {
        var count = this.stackRefillCount;
        for (var i = 0; i < count; i++) {
            var info = this.randomCardInfo();
            if (!info) {
                cc.warn("[GameManager] Không spawn được thẻ — kiểm tra sprite trong Editor");
                return;
            }
            var cardNode = this.createCardNode(stack.node, info);
            cardNode.y = i * 20;
            cardNode.zIndex = i;
        }
        stack.setup();
        var top = stack.cards[stack.cards.length - 1];
        if (top) {
            top.node.scale = 0;
            cc.tween(top.node)
                .to(0.15, {
                scale: 1
            }, {
                easing: "backOut"
            })
                .start();
        }
    };
    GameManager.prototype.createCardNode = function (parent, info) {
        var card = cc.instantiate(this.cardPrefab);
        parent.addChild(card);
        var cardComp = card.getComponent("Card");
        cardComp.cardType = info.type;
        cardComp.variant = info.variant;
        this.setCardVisual(card, info.type, info.variant);
        return card;
    };
    GameManager.prototype.randomCardInfo = function () {
        var types = this.getSpawnableTypes();
        if (types.length == 0)
            return null;
        var type = types[Math.floor(Math.random() * types.length)];
        var sprites = this.spriteMap[type];
        var variant = Math.floor(Math.random() * sprites.length) + 1;
        return { type: type, variant: variant };
    };
    GameManager.prototype.getSpawnableTypes = function () {
        var _this = this;
        return MissionConfig_1.getMissionIds().filter(function (id) {
            var sprites = _this.spriteMap[id];
            return sprites && sprites.length > 0;
        });
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
        var sprites = this.spriteMap[type];
        if (!sprites || !sprites[variant]) {
            cc.warn("[GameManager] Thi\u1EBFu sprite: type=" + type + ", variant=" + (variant + 1));
            return;
        }
        icon.spriteFrame = sprites[variant];
    };
    GameManager.prototype.getCardName = function (type) {
        return MissionConfig_1.getMissionTitle(type);
    };
    GameManager.prototype.randomType = function () {
        var ids = MissionConfig_1.getMissionIds();
        return ids[Math.floor(Math.random() * ids.length)];
    };
    var GameManager_1;
    GameManager.ins = null;
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
    ], GameManager.prototype, "footballSprites", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GameManager.prototype, "airplaneSprites", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GameManager.prototype, "esportSprites", void 0);
    __decorate([
        property
    ], GameManager.prototype, "stackRefillCount", void 0);
    GameManager = GameManager_1 = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXEdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUl5QjtBQUVuQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXdkQztRQXJkRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLHNCQUFnQixHQUFxQixFQUFFLENBQUM7UUFHeEMsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUdyQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFHckMscUJBQWUsR0FBcUIsRUFBRSxDQUFDO1FBR3ZDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUd2QyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFJckMsZUFBUyxHQUFxQyxFQUFFLENBQUM7UUFFakQscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFLcEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCOzs7Ozs7Ozs7Ozs7O1VBYUU7UUFFRixlQUFTLEdBQUc7WUFFUjtnQkFDSSxPQUFPLEVBQUUsUUFBUTtnQkFFakIsSUFBSSxFQUFFO29CQUNGO3dCQUNJLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxDQUFDO3FCQUNiO29CQUNEO3dCQUNJLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxDQUFDO3FCQUNiO29CQUNEO3dCQUNJLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxDQUFDO3FCQUNiO2lCQUtKO2dCQUVELEtBQUssRUFBRTtvQkFDSDt3QkFDSSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxPQUFPLEVBQUUsQ0FBQztxQkFDYjtv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REFDVTtJQVdyQztRQURDLFFBQVE7eURBQ1k7SUFyQ0osV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXdkL0I7SUFBRCxrQkFBQztDQXhkRCxBQXdkQyxDQXhkd0MsRUFBRSxDQUFDLFNBQVMsR0F3ZHBEO2tCQXhkb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBnZXRNaXNzaW9uSWRzLFxyXG4gICAgZ2V0TWlzc2lvblRpdGxlLFxyXG4gICAgZ2V0TmV4dFNwYXduTWlzc2lvblxyXG59IGZyb20gXCIuL01pc3Npb25Db25maWdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNhcmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGFzdHJvbmF1dFNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGZhcm1lclNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHNpbmdlclNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHBvbGljZVNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGZvb3RiYWxsU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgYWlycGxhbmVTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBlc3BvcnRTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gXHJcblxyXG4gICAgc3ByaXRlTWFwOiBSZWNvcmQ8c3RyaW5nLCBjYy5TcHJpdGVGcmFtZVtdPiA9IHt9O1xyXG5cclxuICAgIHNwYXduUXVldWVJbmRleCA9IDA7XHJcblxyXG4gICAgc3RhdGljIGluczogR2FtZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3RhY2tSZWZpbGxDb3VudCA9IDM7XHJcbiAgICAvKlxyXG4gICAgICAgIEhpZXJhcmNoeTpcclxuXHJcbiAgICAgICAgQ2FudmFzXHJcbiAgICAgICAgIOKUnOKUgOKUgCBCb2FyZFxyXG4gICAgICAgICDilIIgICAg4pSc4pSA4pSAIFJvdzFcclxuICAgICAgICAg4pSCICAgIOKUgiAgICDilJzilIDilIAgTGVmdFN0YWNrXHJcbiAgICAgICAgIOKUgiAgICDilIIgICAg4pSc4pSA4pSAIENlbnRlclNsb3RcclxuICAgICAgICAg4pSCICAgIOKUgiAgICDilJTilIDilIAgUmlnaHRTdGFja1xyXG4gICAgICAgICDilIIgICAg4pSc4pSA4pSAIFJvdzJcclxuICAgICAgICAg4pSCICAgIOKUnOKUgOKUgCBSb3czXHJcbiAgICAgICAgIOKUgiAgICDilJTilIDilIAgUm93NFxyXG4gICAgICAgICDilJTilIDilIAgRHJhZ0xheWVyXHJcbiAgICAqL1xyXG5cclxuICAgIGxldmVsRGF0YSA9IFtcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaXNzaW9uOiBcInBvbGljZVwiLFxyXG5cclxuICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2luZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZhcm1lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzdHJvbmF1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDFcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaXNzaW9uOiBcInNpbmdlclwiLFxyXG5cclxuICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZhcm1lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3Ryb25hdXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNpbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaXNzaW9uOiBcImFzdHJvbmF1dFwiLFxyXG5cclxuICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZhcm1lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXN0cm9uYXV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNpbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaXNzaW9uOiBcImZhcm1lclwiLFxyXG5cclxuICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZhcm1lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzaW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXN0cm9uYXV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIEdhbWVNYW5hZ2VyLmlucyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbGV0IGRyYWdMYXllciA9IGNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcIkRyYWdMYXllclwiKTtcclxuXHJcbiAgICAgICAgaWYgKGRyYWdMYXllcikge1xyXG4gICAgICAgICAgICBkcmFnTGF5ZXIuc2V0U2libGluZ0luZGV4KGNhbnZhcy5jaGlsZHJlbkNvdW50IC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZU1hcCA9IHtcclxuICAgICAgICAgICAgYXN0cm9uYXV0OiB0aGlzLmFzdHJvbmF1dFNwcml0ZXMsXHJcbiAgICAgICAgICAgIGZhcm1lcjogdGhpcy5mYXJtZXJTcHJpdGVzLFxyXG4gICAgICAgICAgICBzaW5nZXI6IHRoaXMuc2luZ2VyU3ByaXRlcyxcclxuICAgICAgICAgICAgcG9saWNlOiB0aGlzLnBvbGljZVNwcml0ZXMsXHJcbiAgICAgICAgICAgIGZvb3RiYWxsOiB0aGlzLmZvb3RiYWxsU3ByaXRlcyxcclxuICAgICAgICAgICAgYWlycGxhbmU6IHRoaXMuYWlycGxhbmVTcHJpdGVzLFxyXG4gICAgICAgICAgICBlc3BvcnQ6IHRoaXMuZXNwb3J0U3ByaXRlcyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0aGlzLnNwYXduQm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNsb3RDb21wbGV0ZShjb21wbGV0ZWRTbG90KSB7XHJcblxyXG4gICAgICAgIGxldCBvbGROb2RlID0gY29tcGxldGVkU2xvdC5ub2RlO1xyXG4gICAgICAgIGxldCByb3cgPSBvbGROb2RlLnBhcmVudDtcclxuICAgICAgICBsZXQgcG9zID0gb2xkTm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cclxuICAgICAgICBsZXQgbmV3TWlzc2lvbiA9IHRoaXMuZ2V0TmV4dE1pc3Npb24oY29tcGxldGVkU2xvdC5taXNzaW9uVHlwZSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdTbG90Tm9kZSA9IGNjLmluc3RhbnRpYXRlKG9sZE5vZGUpO1xyXG5cclxuICAgICAgICByb3cuYWRkQ2hpbGQobmV3U2xvdE5vZGUpO1xyXG5cclxuICAgICAgICBuZXdTbG90Tm9kZS5uYW1lID0gXCJDZW50ZXJTbG90XCI7XHJcbiAgICAgICAgbmV3U2xvdE5vZGUucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgbmV3U2xvdE5vZGUuc2NhbGUgPSAwO1xyXG5cclxuICAgICAgICBvbGROb2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgbGV0IHNsb3QgPSBuZXdTbG90Tm9kZS5nZXRDb21wb25lbnQoXCJTbG90XCIpO1xyXG5cclxuICAgICAgICBzbG90LmluaXQobmV3TWlzc2lvbik7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKG5ld1Nsb3ROb2RlKVxyXG4gICAgICAgICAgICAudG8oMC4yLCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5leHRNaXNzaW9uKGV4Y2x1ZGU6IHN0cmluZykge1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gZ2V0TmV4dFNwYXduTWlzc2lvbihcclxuICAgICAgICAgICAgZXhjbHVkZSxcclxuICAgICAgICAgICAgdGhpcy5zcGF3blF1ZXVlSW5kZXhcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNwYXduUXVldWVJbmRleCA9IHJlc3VsdC5uZXh0SW5kZXg7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQubWlzc2lvbklkO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduQm9hcmQoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLmJvYXJkLmNoaWxkcmVuW2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxldmVsRGF0YVtpXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGVmdFN0YWNrID0gcm93LmdldENoaWxkQnlOYW1lKFwiTGVmdFN0YWNrXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJpZ2h0U3RhY2sgPSByb3cuZ2V0Q2hpbGRCeU5hbWUoXCJSaWdodFN0YWNrXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNsb3QgPSByb3cuZ2V0Q2hpbGRCeU5hbWUoXCJDZW50ZXJTbG90XCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gaW5pdCBzbG90XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubWlzc2lvbilcclxuICAgICAgICAgICAgc2xvdC5nZXRDb21wb25lbnQoXCJTbG90XCIpXHJcbiAgICAgICAgICAgICAgICAuaW5pdChkYXRhLm1pc3Npb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gc3Bhd24gc3RhY2tcclxuICAgICAgICAgICAgdGhpcy5zcGF3blN0YWNrKGxlZnRTdGFjaywgZGF0YS5sZWZ0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25TdGFjayhyaWdodFN0YWNrLCBkYXRhLnJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25TdGFjayhwYXJlbnQ6IGNjLk5vZGUsIGRhdGE6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHBhcmVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gZGF0YVtpXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYXJkTm9kZSA9IHRoaXMuY3JlYXRlQ2FyZE5vZGUocGFyZW50LCBpbmZvKTtcclxuXHJcbiAgICAgICAgICAgIGNhcmROb2RlLnkgPSBpICogMjA7XHJcbiAgICAgICAgICAgIGNhcmROb2RlLnpJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RhY2tDb21wID0gcGFyZW50LmdldENvbXBvbmVudChcIkNhcmRTdGFja1wiKTtcclxuXHJcbiAgICAgICAgc3RhY2tDb21wLmluaXQodGhpcyk7XHJcbiAgICAgICAgc3RhY2tDb21wLnNldHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFja0VtcHR5KHN0YWNrKSB7XHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuc3RhY2tSZWZpbGxDb3VudDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IHRoaXMucmFuZG9tQ2FyZEluZm8oKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaW5mbykge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihcIltHYW1lTWFuYWdlcl0gS2jDtG5nIHNwYXduIMSRxrDhu6NjIHRo4bq7IOKAlCBraeG7g20gdHJhIHNwcml0ZSB0cm9uZyBFZGl0b3JcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjYXJkTm9kZSA9IHRoaXMuY3JlYXRlQ2FyZE5vZGUoc3RhY2subm9kZSwgaW5mbyk7XHJcblxyXG4gICAgICAgICAgICBjYXJkTm9kZS55ID0gaSAqIDIwO1xyXG4gICAgICAgICAgICBjYXJkTm9kZS56SW5kZXggPSBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhY2suc2V0dXAoKTtcclxuXHJcbiAgICAgICAgbGV0IHRvcCA9IHN0YWNrLmNhcmRzW3N0YWNrLmNhcmRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICBpZiAodG9wKSB7XHJcblxyXG4gICAgICAgICAgICB0b3Aubm9kZS5zY2FsZSA9IDA7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0b3Aubm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygwLjE1LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNhcmROb2RlKFxyXG4gICAgICAgIHBhcmVudDogY2MuTm9kZSxcclxuICAgICAgICBpbmZvOiB7IHR5cGU6IHN0cmluZzsgdmFyaWFudDogbnVtYmVyIH1cclxuICAgICk6IGNjLk5vZGUge1xyXG5cclxuICAgICAgICBsZXQgY2FyZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FyZFByZWZhYik7XHJcblxyXG4gICAgICAgIHBhcmVudC5hZGRDaGlsZChjYXJkKTtcclxuXHJcbiAgICAgICAgbGV0IGNhcmRDb21wID0gY2FyZC5nZXRDb21wb25lbnQoXCJDYXJkXCIpO1xyXG5cclxuICAgICAgICBjYXJkQ29tcC5jYXJkVHlwZSA9IGluZm8udHlwZTtcclxuXHJcbiAgICAgICAgY2FyZENvbXAudmFyaWFudCA9IGluZm8udmFyaWFudDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDYXJkVmlzdWFsKFxyXG4gICAgICAgICAgICBjYXJkLFxyXG4gICAgICAgICAgICBpbmZvLnR5cGUsXHJcbiAgICAgICAgICAgIGluZm8udmFyaWFudFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbUNhcmRJbmZvKCk6IHsgdHlwZTogc3RyaW5nOyB2YXJpYW50OiBudW1iZXIgfSB7XHJcblxyXG4gICAgICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0U3Bhd25hYmxlVHlwZXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IHR5cGUgPSB0eXBlc1tcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdHlwZXMubGVuZ3RoKVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXBbdHlwZV07XHJcbiAgICAgICAgbGV0IHZhcmlhbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcHJpdGVzLmxlbmd0aCkgKyAxO1xyXG5cclxuICAgICAgICByZXR1cm4geyB0eXBlLCB2YXJpYW50IH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Bhd25hYmxlVHlwZXMoKTogc3RyaW5nW10ge1xyXG5cclxuICAgICAgICByZXR1cm4gZ2V0TWlzc2lvbklkcygpLmZpbHRlcihpZCA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwW2lkXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzcHJpdGVzICYmIHNwcml0ZXMubGVuZ3RoID4gMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXJkVmlzdWFsKFxyXG4gICAgICAgIGNhcmQ6IGNjLk5vZGUsXHJcbiAgICAgICAgdHlwZTogc3RyaW5nLFxyXG4gICAgICAgIHZhcmlhbnQ6IG51bWJlclxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIGxldCBmcm9udCA9IGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJmcm9udFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGljb24gPSBmcm9udFxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGxiVGl0bGUgPSBmcm9udFxyXG4gICAgICAgIC8vICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJsYlRpdGxlXCIpXHJcbiAgICAgICAgLy8gICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICAvLyBsYlRpdGxlLnN0cmluZyA9IHRoaXMuZ2V0Q2FyZE5hbWUodHlwZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFyaWFudCwgdHlwZSlcclxuICAgICAgICB2YXJpYW50IC09IDE7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXBbdHlwZV07XHJcblxyXG4gICAgICAgIGlmICghc3ByaXRlcyB8fCAhc3ByaXRlc1t2YXJpYW50XSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKGBbR2FtZU1hbmFnZXJdIFRoaeG6v3Ugc3ByaXRlOiB0eXBlPSR7dHlwZX0sIHZhcmlhbnQ9JHt2YXJpYW50ICsgMX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHNwcml0ZXNbdmFyaWFudF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FyZE5hbWUodHlwZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRNaXNzaW9uVGl0bGUodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tVHlwZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IGlkcyA9IGdldE1pc3Npb25JZHMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlkc1tcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaWRzLmxlbmd0aClcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59Il19