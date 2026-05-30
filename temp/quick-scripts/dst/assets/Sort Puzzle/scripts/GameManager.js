
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
                        type: "football",
                        variant: 3
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
                        type: "airplane",
                        variant: 1
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
                        type: "football",
                        variant: 4
                    },
                    {
                        type: "police",
                        variant: 3
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
                        type: "football",
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
                        type: "airplane",
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
                        type: "football",
                        variant: 1
                    },
                    {
                        type: "farmer",
                        variant: 4
                    },
                    {
                        type: "singer",
                        variant: 4
                    },
                ],
                right: [
                    {
                        type: "airplane",
                        variant: 3
                    },
                    {
                        type: "astronaut",
                        variant: 3
                    },
                    {
                        type: "airplane",
                        variant: 4
                    },
                ]
            }
        ];
        _this.isCountComplete = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Tb3J0IFB1enpsZS9zY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUl5QjtBQUVuQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXdkQztRQXJkRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLHNCQUFnQixHQUFxQixFQUFFLENBQUM7UUFHeEMsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUdyQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFHckMscUJBQWUsR0FBcUIsRUFBRSxDQUFDO1FBR3ZDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUd2QyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFJckMsZUFBUyxHQUFxQyxFQUFFLENBQUM7UUFFakQscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFLcEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCOzs7Ozs7Ozs7Ozs7O1VBYUU7UUFFRixlQUFTLEdBQUc7WUFFUjtnQkFDSSxPQUFPLEVBQUUsUUFBUTtnQkFFakIsSUFBSSxFQUFFO29CQUNGO3dCQUNJLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxDQUFDO3FCQUNiO29CQUNEO3dCQUNJLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxDQUFDO3FCQUNiO29CQUNEO3dCQUNJLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxDQUFDO3FCQUNiO2lCQUtKO2dCQUVELEtBQUssRUFBRTtvQkFDSDt3QkFDSSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsT0FBTyxFQUFFLENBQUM7cUJBQ2I7b0JB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QyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztzREFDVTtJQVdyQztRQURDLFFBQVE7eURBQ1k7SUFyQ0osV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXdkL0I7SUFBRCxrQkFBQztDQXhkRCxBQXdkQyxDQXhkd0MsRUFBRSxDQUFDLFNBQVMsR0F3ZHBEO2tCQXhkb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgZ2V0TWlzc2lvbklkcyxcbiAgICBnZXRNaXNzaW9uVGl0bGUsXG4gICAgZ2V0TmV4dFNwYXduTWlzc2lvblxufSBmcm9tIFwiLi9NaXNzaW9uQ29uZmlnXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNhcmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib2FyZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgYXN0cm9uYXV0U3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgZmFybWVyU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc2luZ2VyU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgcG9saWNlU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgZm9vdGJhbGxTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBhaXJwbGFuZVNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGVzcG9ydFNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuIFxuXG4gICAgc3ByaXRlTWFwOiBSZWNvcmQ8c3RyaW5nLCBjYy5TcHJpdGVGcmFtZVtdPiA9IHt9O1xuXG4gICAgc3Bhd25RdWV1ZUluZGV4ID0gMDtcblxuICAgIHN0YXRpYyBpbnM6IEdhbWVNYW5hZ2VyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHN0YWNrUmVmaWxsQ291bnQgPSAzO1xuICAgIC8qXG4gICAgICAgIEhpZXJhcmNoeTpcblxuICAgICAgICBDYW52YXNcbiAgICAgICAgIOKUnOKUgOKUgCBCb2FyZFxuICAgICAgICAg4pSCICAgIOKUnOKUgOKUgCBSb3cxXG4gICAgICAgICDilIIgICAg4pSCICAgIOKUnOKUgOKUgCBMZWZ0U3RhY2tcbiAgICAgICAgIOKUgiAgICDilIIgICAg4pSc4pSA4pSAIENlbnRlclNsb3RcbiAgICAgICAgIOKUgiAgICDilIIgICAg4pSU4pSA4pSAIFJpZ2h0U3RhY2tcbiAgICAgICAgIOKUgiAgICDilJzilIDilIAgUm93MlxuICAgICAgICAg4pSCICAgIOKUnOKUgOKUgCBSb3czXG4gICAgICAgICDilIIgICAg4pSU4pSA4pSAIFJvdzRcbiAgICAgICAgIOKUlOKUgOKUgCBEcmFnTGF5ZXJcbiAgICAqL1xuXG4gICAgbGV2ZWxEYXRhID0gW1xuXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1pc3Npb246IFwicG9saWNlXCIsXG5cbiAgICAgICAgICAgIGxlZnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2luZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmYXJtZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXG4gICAgICAgICAgICAgICAgfSxcblxuXG5cblxuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgcmlnaHQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9vdGJhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXN0cm9uYXV0XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDFcbiAgICAgICAgICAgICAgICB9LFxuXG5cblxuXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgbWlzc2lvbjogXCJzaW5nZXJcIixcblxuICAgICAgICAgICAgbGVmdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhaXJwbGFuZVwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmFybWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3Ryb25hdXRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxuICAgICAgICAgICAgICAgIH0sXG5cblxuXG5cbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIHJpZ2h0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZvb3RiYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNpbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXG4gICAgICAgICAgICAgICAgfSxcblxuXG5cblxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1pc3Npb246IFwiYXN0cm9uYXV0XCIsXG5cbiAgICAgICAgICAgIGxlZnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9vdGJhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZhcm1lclwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcbiAgICAgICAgICAgICAgICB9LFxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIHJpZ2h0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFpcnBsYW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3Ryb25hdXRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogNFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNpbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAzXG4gICAgICAgICAgICAgICAgfSxcblxuXG5cblxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1pc3Npb246IFwiZmFybWVyXCIsXG5cbiAgICAgICAgICAgIGxlZnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9vdGJhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZhcm1lclwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2luZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcbiAgICAgICAgICAgICAgICB9LFxuXG5cblxuXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICByaWdodDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhaXJwbGFuZVwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXN0cm9uYXV0XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhaXJwbGFuZVwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XG4gICAgICAgICAgICAgICAgfSxcblxuXG5cblxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXTtcblxuICAgIG9uTG9hZCgpIHtcblxuICAgICAgICBHYW1lTWFuYWdlci5pbnMgPSB0aGlzO1xuXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGU7XG4gICAgICAgIGxldCBkcmFnTGF5ZXIgPSBjYW52YXMuZ2V0Q2hpbGRCeU5hbWUoXCJEcmFnTGF5ZXJcIik7XG5cbiAgICAgICAgaWYgKGRyYWdMYXllcikge1xuICAgICAgICAgICAgZHJhZ0xheWVyLnNldFNpYmxpbmdJbmRleChjYW52YXMuY2hpbGRyZW5Db3VudCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zcHJpdGVNYXAgPSB7XG4gICAgICAgICAgICBhc3Ryb25hdXQ6IHRoaXMuYXN0cm9uYXV0U3ByaXRlcyxcbiAgICAgICAgICAgIGZhcm1lcjogdGhpcy5mYXJtZXJTcHJpdGVzLFxuICAgICAgICAgICAgc2luZ2VyOiB0aGlzLnNpbmdlclNwcml0ZXMsXG4gICAgICAgICAgICBwb2xpY2U6IHRoaXMucG9saWNlU3ByaXRlcyxcbiAgICAgICAgICAgIGZvb3RiYWxsOiB0aGlzLmZvb3RiYWxsU3ByaXRlcyxcbiAgICAgICAgICAgIGFpcnBsYW5lOiB0aGlzLmFpcnBsYW5lU3ByaXRlcyxcbiAgICAgICAgICAgIGVzcG9ydDogdGhpcy5lc3BvcnRTcHJpdGVzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgICAgIHRoaXMuc3Bhd25Cb2FyZCgpO1xuICAgIH1cbmlzQ291bnRDb21wbGV0ZT0wXG4gICAgb25TbG90Q29tcGxldGUoY29tcGxldGVkU2xvdCkge1xuXG4gICAgICAgIGxldCBvbGROb2RlID0gY29tcGxldGVkU2xvdC5ub2RlO1xuICAgICAgICBsZXQgcm93ID0gb2xkTm9kZS5wYXJlbnQ7XG4gICAgICAgIGxldCBwb3MgPSBvbGROb2RlLnBvc2l0aW9uLmNsb25lKCk7XG5cbiAgICAgICAgbGV0IG5ld01pc3Npb24gPSB0aGlzLmdldE5leHRNaXNzaW9uKGNvbXBsZXRlZFNsb3QubWlzc2lvblR5cGUpO1xuXG4gICAgICAgIGxldCBuZXdTbG90Tm9kZSA9IGNjLmluc3RhbnRpYXRlKG9sZE5vZGUpO1xuXG4gICAgICAgIHJvdy5hZGRDaGlsZChuZXdTbG90Tm9kZSk7XG5cbiAgICAgICAgbmV3U2xvdE5vZGUubmFtZSA9IFwiQ2VudGVyU2xvdFwiO1xuICAgICAgICBuZXdTbG90Tm9kZS5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgbmV3U2xvdE5vZGUuc2NhbGUgPSAwO1xuXG4gICAgICAgIG9sZE5vZGUuZGVzdHJveSgpO1xuXG4gICAgICAgIGxldCBzbG90ID0gbmV3U2xvdE5vZGUuZ2V0Q29tcG9uZW50KFwiU2xvdFwiKTtcblxuICAgICAgICBzbG90LmluaXQobmV3TWlzc2lvbik7XG5cbiAgICAgICAgY2MudHdlZW4obmV3U2xvdE5vZGUpXG4gICAgICAgICAgICAudG8oMC4yLCB7XG4gICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZ2V0TmV4dE1pc3Npb24oZXhjbHVkZTogc3RyaW5nKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGdldE5leHRTcGF3bk1pc3Npb24oXG4gICAgICAgICAgICBleGNsdWRlLFxuICAgICAgICAgICAgdGhpcy5zcGF3blF1ZXVlSW5kZXhcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNwYXduUXVldWVJbmRleCA9IHJlc3VsdC5uZXh0SW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5taXNzaW9uSWQ7XG4gICAgfVxuXG4gICAgc3Bhd25Cb2FyZCgpIHtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLmJvYXJkLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMubGV2ZWxEYXRhW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWRhdGEpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgbGVmdFN0YWNrID0gcm93LmdldENoaWxkQnlOYW1lKFwiTGVmdFN0YWNrXCIpO1xuXG4gICAgICAgICAgICBsZXQgcmlnaHRTdGFjayA9IHJvdy5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0U3RhY2tcIik7XG5cbiAgICAgICAgICAgIGxldCBzbG90ID0gcm93LmdldENoaWxkQnlOYW1lKFwiQ2VudGVyU2xvdFwiKTtcblxuICAgICAgICAgICAgLy8gaW5pdCBzbG90XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm1pc3Npb24pXG4gICAgICAgICAgICBzbG90LmdldENvbXBvbmVudChcIlNsb3RcIilcbiAgICAgICAgICAgICAgICAuaW5pdChkYXRhLm1pc3Npb24pO1xuXG4gICAgICAgICAgICAvLyBzcGF3biBzdGFja1xuICAgICAgICAgICAgdGhpcy5zcGF3blN0YWNrKGxlZnRTdGFjaywgZGF0YS5sZWZ0KTtcblxuICAgICAgICAgICAgdGhpcy5zcGF3blN0YWNrKHJpZ2h0U3RhY2ssIGRhdGEucmlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Bhd25TdGFjayhwYXJlbnQ6IGNjLk5vZGUsIGRhdGE6IGFueVtdKSB7XG5cbiAgICAgICAgcGFyZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBpbmZvID0gZGF0YVtpXTtcblxuICAgICAgICAgICAgbGV0IGNhcmROb2RlID0gdGhpcy5jcmVhdGVDYXJkTm9kZShwYXJlbnQsIGluZm8pO1xuXG4gICAgICAgICAgICBjYXJkTm9kZS55ID0gaSAqIDIwO1xuICAgICAgICAgICAgY2FyZE5vZGUuekluZGV4ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdGFja0NvbXAgPSBwYXJlbnQuZ2V0Q29tcG9uZW50KFwiQ2FyZFN0YWNrXCIpO1xuXG4gICAgICAgIHN0YWNrQ29tcC5pbml0KHRoaXMpO1xuICAgICAgICBzdGFja0NvbXAuc2V0dXAoKTtcbiAgICB9XG5cbiAgICBvblN0YWNrRW1wdHkoc3RhY2spIHtcblxuICAgICAgICBsZXQgY291bnQgPSB0aGlzLnN0YWNrUmVmaWxsQ291bnQ7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBpbmZvID0gdGhpcy5yYW5kb21DYXJkSW5mbygpO1xuXG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwiW0dhbWVNYW5hZ2VyXSBLaMO0bmcgc3Bhd24gxJHGsOG7o2MgdGjhursg4oCUIGtp4buDbSB0cmEgc3ByaXRlIHRyb25nIEVkaXRvclwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjYXJkTm9kZSA9IHRoaXMuY3JlYXRlQ2FyZE5vZGUoc3RhY2subm9kZSwgaW5mbyk7XG5cbiAgICAgICAgICAgIGNhcmROb2RlLnkgPSBpICogMjA7XG4gICAgICAgICAgICBjYXJkTm9kZS56SW5kZXggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhY2suc2V0dXAoKTtcblxuICAgICAgICBsZXQgdG9wID0gc3RhY2suY2FyZHNbc3RhY2suY2FyZHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKHRvcCkge1xuXG4gICAgICAgICAgICB0b3Aubm9kZS5zY2FsZSA9IDA7XG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKHRvcC5ub2RlKVxuICAgICAgICAgICAgICAgIC50bygwLjE1LCB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUNhcmROb2RlKFxuICAgICAgICBwYXJlbnQ6IGNjLk5vZGUsXG4gICAgICAgIGluZm86IHsgdHlwZTogc3RyaW5nOyB2YXJpYW50OiBudW1iZXIgfVxuICAgICk6IGNjLk5vZGUge1xuXG4gICAgICAgIGxldCBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkUHJlZmFiKTtcblxuICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoY2FyZCk7XG5cbiAgICAgICAgbGV0IGNhcmRDb21wID0gY2FyZC5nZXRDb21wb25lbnQoXCJDYXJkXCIpO1xuXG4gICAgICAgIGNhcmRDb21wLmNhcmRUeXBlID0gaW5mby50eXBlO1xuXG4gICAgICAgIGNhcmRDb21wLnZhcmlhbnQgPSBpbmZvLnZhcmlhbnQ7XG5cbiAgICAgICAgdGhpcy5zZXRDYXJkVmlzdWFsKFxuICAgICAgICAgICAgY2FyZCxcbiAgICAgICAgICAgIGluZm8udHlwZSxcbiAgICAgICAgICAgIGluZm8udmFyaWFudFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cblxuICAgIHJhbmRvbUNhcmRJbmZvKCk6IHsgdHlwZTogc3RyaW5nOyB2YXJpYW50OiBudW1iZXIgfSB7XG5cbiAgICAgICAgbGV0IHR5cGVzID0gdGhpcy5nZXRTcGF3bmFibGVUeXBlcygpO1xuXG4gICAgICAgIGlmICh0eXBlcy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgbGV0IHR5cGUgPSB0eXBlc1tcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHR5cGVzLmxlbmd0aClcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwW3R5cGVdO1xuICAgICAgICBsZXQgdmFyaWFudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwcml0ZXMubGVuZ3RoKSArIDE7XG5cbiAgICAgICAgcmV0dXJuIHsgdHlwZSwgdmFyaWFudCB9O1xuICAgIH1cblxuICAgIGdldFNwYXduYWJsZVR5cGVzKCk6IHN0cmluZ1tdIHtcblxuICAgICAgICByZXR1cm4gZ2V0TWlzc2lvbklkcygpLmZpbHRlcihpZCA9PiB7XG5cbiAgICAgICAgICAgIGxldCBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXBbaWRdO1xuXG4gICAgICAgICAgICByZXR1cm4gc3ByaXRlcyAmJiBzcHJpdGVzLmxlbmd0aCA+IDA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldENhcmRWaXN1YWwoXG4gICAgICAgIGNhcmQ6IGNjLk5vZGUsXG4gICAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgICAgdmFyaWFudDogbnVtYmVyXG4gICAgKSB7XG5cbiAgICAgICAgbGV0IGZyb250ID0gY2FyZC5nZXRDaGlsZEJ5TmFtZShcImZyb250XCIpO1xuXG4gICAgICAgIGxldCBpY29uID0gZnJvbnRcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImljb25cIilcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcblxuICAgICAgICAvLyBsZXQgbGJUaXRsZSA9IGZyb250XG4gICAgICAgIC8vICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJsYlRpdGxlXCIpXG4gICAgICAgIC8vICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICAvLyBsYlRpdGxlLnN0cmluZyA9IHRoaXMuZ2V0Q2FyZE5hbWUodHlwZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhcmlhbnQsIHR5cGUpXG4gICAgICAgIHZhcmlhbnQgLT0gMTtcblxuICAgICAgICBsZXQgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwW3R5cGVdO1xuXG4gICAgICAgIGlmICghc3ByaXRlcyB8fCAhc3ByaXRlc1t2YXJpYW50XSkge1xuICAgICAgICAgICAgY2Mud2FybihgW0dhbWVNYW5hZ2VyXSBUaGnhur91IHNwcml0ZTogdHlwZT0ke3R5cGV9LCB2YXJpYW50PSR7dmFyaWFudCArIDF9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gc3ByaXRlc1t2YXJpYW50XTtcbiAgICB9XG5cbiAgICBnZXRDYXJkTmFtZSh0eXBlOiBzdHJpbmcpIHtcblxuICAgICAgICByZXR1cm4gZ2V0TWlzc2lvblRpdGxlKHR5cGUpO1xuICAgIH1cblxuICAgIHJhbmRvbVR5cGUoKSB7XG5cbiAgICAgICAgbGV0IGlkcyA9IGdldE1pc3Npb25JZHMoKTtcblxuICAgICAgICByZXR1cm4gaWRzW1xuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaWRzLmxlbmd0aClcbiAgICAgICAgXTtcbiAgICB9XG59Il19