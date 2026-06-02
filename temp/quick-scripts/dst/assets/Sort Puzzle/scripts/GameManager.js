
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
        _this.endGameNode = null;
        _this.linkToStore = null;
        _this.phaohoa = null;
        _this.board = null;
        _this.astronautSprites = [];
        _this.farmerSprites = [];
        _this.singerSprites = [];
        _this.policeSprites = [];
        _this.footballSprites = [];
        _this.airplaneSprites = [];
        _this.esportSprites = [];
        _this.vikingSprites = [];
        _this.armySprites = [];
        _this.putGame = null;
        _this.handGuild = null;
        //sound
        _this.soundWin = null;
        _this.soundComplete = null;
        _this.soundClickCard = null;
        _this.soundWrong = null;
        _this.soundBg = null;
        _this.soundTouchCard = null;
        _this.soundLose = null;
        _this.preDone = null;
        _this.preWrong = null;
        _this.boardNode = null;
        _this.lbMoveCount = null;
        _this.countMove = 30;
        _this.spriteMap = {};
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.spawnQueueIndex = 0;
        /** Thẻ đã có trên bàn (setup + spawn random), key = "type:variant" */
        _this.appearedCards = new Set();
        _this.completedMissionCount = 0;
        _this.missionsToWin = 3;
        _this.gameEnded = false;
        _this.stackRefillCount = 3;
        _this.iconFillRatio = 0.92;
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
        _this.isOffGuild = false;
        return _this;
    }
    GameManager_1 = GameManager;
    GameManager.prototype.checkMove = function () {
        this.countMove--;
        if (this.countMove == 0) {
            this.endGame(false);
        }
        this.lbMoveCount.string = "Moves: " + this.countMove.toString();
    };
    GameManager.prototype.addWrong = function (pos) {
        var fix = cc.instantiate(this.preWrong);
        fix.parent = this.boardNode;
        fix.position = pos;
    };
    GameManager.prototype.addDone = function (pos) {
        var fix = cc.instantiate(this.preDone);
        fix.parent = this.boardNode;
        fix.position = pos;
    };
    GameManager.prototype.onLoad = function () {
        var _this = this;
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.5);
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
            vikings: this.vikingSprites,
            army: this.armySprites,
        };
        this.scheduleOnce(function () {
            _this.offGuild;
            // this.putGame.active = false
        }, 3);
    };
    GameManager.prototype.offGuild = function () {
        var _this = this;
        if (this.isOffGuild)
            return;
        this.isOffGuild = true;
        cc.tween(this.putGame).to(0.2, { opacity: 0 }).call(function () {
            _this.putGame.active = false;
            // this.handGuild.active = true
        }).start();
    };
    GameManager.prototype.start = function () {
        cc.view.setDesignResolutionSize(1080, 1920, cc.ResolutionPolicy.SHOW_ALL);
        GameManager_1.ins = this;
        this.appearedCards.clear();
        this.completedMissionCount = 0;
        this.gameEnded = false;
        this.spawnBoard();
    };
    GameManager.prototype.onSlotComplete = function (completedSlot) {
        this.completedMissionCount++;
        if (this.completedMissionCount >= this.missionsToWin) {
            this.endGame(true);
            return;
        }
        cc.audioEngine.play(this.soundComplete, false, 1);
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
        if (this.gameEnded)
            return;
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
        this.markCardAppeared(info.type, info.variant);
        this.setCardVisual(card, info.type, info.variant);
        return card;
    };
    GameManager.prototype.randomCardInfo = function () {
        var options = this.getUnappearedCardOptions();
        if (options.length === 0)
            return null;
        return options[Math.floor(Math.random() * options.length)];
    };
    GameManager.prototype.cardKey = function (type, variant) {
        return type + ":" + variant;
    };
    GameManager.prototype.markCardAppeared = function (type, variant) {
        this.appearedCards.add(this.cardKey(type, variant));
    };
    GameManager.prototype.hasCardAppeared = function (type, variant) {
        return this.appearedCards.has(this.cardKey(type, variant));
    };
    /** Chỉ các thẻ (type + variant) chưa từng spawn / setup */
    GameManager.prototype.getUnappearedCardOptions = function () {
        var options = [];
        for (var _i = 0, _a = this.getSpawnableTypes(); _i < _a.length; _i++) {
            var type = _a[_i];
            var sprites = this.spriteMap[type];
            for (var v = 1; v <= sprites.length; v++) {
                if (!this.hasCardAppeared(type, v)) {
                    options.push({ type: type, variant: v });
                }
            }
        }
        return options;
    };
    GameManager.prototype.getSpawnableTypes = function () {
        var _this = this;
        return MissionConfig_1.getMissionIds().filter(function (id) {
            var sprites = _this.spriteMap[id];
            return sprites && sprites.length > 0;
        });
    };
    GameManager.prototype.endGame = function (value) {
        if (this.gameEnded)
            return;
        if (value == true) {
            cc.audioEngine.play(this.soundWin, false, 1);
        }
        else {
            cc.audioEngine.play(this.soundLose, false, 1);
        }
        this.phaohoa.active = true;
        this.endGameNode.active = true;
        this.linkToStore.active = true;
        this.gameEnded = true;
        var canvas = cc.find("Canvas");
        if (canvas) {
            var gameDonut = canvas.getComponent("GameDonut");
            if (gameDonut && gameDonut.onEndGame) {
                gameDonut.onEndGame(true);
                return;
            }
        }
        cc.log("[GameManager] Hoàn thành", this.missionsToWin, "mission — kết thúc game");
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
        this.fitIconToCard(icon);
    };
    GameManager.prototype.fitIconToCard = function (icon) {
        if (!icon || !icon.spriteFrame)
            return;
        icon.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        icon.node.setScale(0.9);
        var front = icon.node.parent;
        if (!front)
            return;
        var maxWidth = front.width * this.iconFillRatio;
        var maxHeight = front.height * this.iconFillRatio;
        var rect = icon.spriteFrame.getRect();
        var scale = Math.min(maxWidth / rect.width, maxHeight / rect.height);
        icon.node.setContentSize(rect.width * scale, rect.height * scale);
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
    ], GameManager.prototype, "endGameNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "phaohoa", void 0);
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
        property([cc.SpriteFrame])
    ], GameManager.prototype, "vikingSprites", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GameManager.prototype, "armySprites", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "putGame", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "handGuild", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "soundWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "soundComplete", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "soundClickCard", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "soundTouchCard", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "soundLose", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "preDone", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "preWrong", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "boardNode", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "lbMoveCount", void 0);
    __decorate([
        property
    ], GameManager.prototype, "missionsToWin", void 0);
    __decorate([
        property
    ], GameManager.prototype, "stackRefillCount", void 0);
    __decorate([
        property({ tooltip: "Tỷ lệ chiếm diện tích mặt thẻ (0–1), ví dụ 0.92 = ~92% chiều rộng/cao" })
    ], GameManager.prototype, "iconFillRatio", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXEdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUl5QjtBQUVuQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWtwQkM7UUEvb0JHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixzQkFBZ0IsR0FBcUIsRUFBRSxDQUFDO1FBR3hDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUdyQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFHckMsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUd2QyxxQkFBZSxHQUFxQixFQUFFLENBQUM7UUFHdkMsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUVyQyxpQkFBVyxHQUFxQixFQUFFLENBQUM7UUFFbkMsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLE9BQU87UUFFUCxjQUFRLEdBQWlCLElBQUksQ0FBQTtRQUU3QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixvQkFBYyxHQUFpQixJQUFJLENBQUE7UUFFbkMsZUFBUyxHQUFpQixJQUFJLENBQUE7UUFFOUIsYUFB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TztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ1U7SUFjN0I7UUFEQyxRQUFRO3NEQUNTO0lBT2xCO1FBREMsUUFBUTt5REFDWTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1RUFBdUUsRUFBRSxDQUFDO3NEQUMxRTtJQXhGSixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBa3BCL0I7SUFBRCxrQkFBQztDQWxwQkQsQUFrcEJDLENBbHBCd0MsRUFBRSxDQUFDLFNBQVMsR0FrcEJwRDtrQkFscEJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIGdldE1pc3Npb25JZHMsXHJcbiAgICBnZXRNaXNzaW9uVGl0bGUsXHJcbiAgICBnZXROZXh0U3Bhd25NaXNzaW9uXHJcbn0gZnJvbSBcIi4vTWlzc2lvbkNvbmZpZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY2FyZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kR2FtZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb2hvYTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm9hcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBhc3Ryb25hdXRTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBmYXJtZXJTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBzaW5nZXJTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBwb2xpY2VTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBmb290YmFsbFNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGFpcnBsYW5lU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgZXNwb3J0U3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgdmlraW5nU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBhcm15U3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdXRHYW1lOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kR3VpbGQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgLy9zb3VuZFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb21wbGV0ZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsaWNrQ2FyZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdyb25nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRvdWNoQ2FyZDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZURvbmU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlV3Jvbmc6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJvYXJkTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTW92ZUNvdW50OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBjb3VudE1vdmUgPSAzMFxyXG5cclxuICAgIHNwcml0ZU1hcDogUmVjb3JkPHN0cmluZywgY2MuU3ByaXRlRnJhbWVbXT4gPSB7fTtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcblxyXG4gICAgc3Bhd25RdWV1ZUluZGV4ID0gMDtcclxuXHJcbiAgICAvKiogVGjhursgxJHDoyBjw7MgdHLDqm4gYsOgbiAoc2V0dXAgKyBzcGF3biByYW5kb20pLCBrZXkgPSBcInR5cGU6dmFyaWFudFwiICovXHJcbiAgICBhcHBlYXJlZENhcmRzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG4gICAgY29tcGxldGVkTWlzc2lvbkNvdW50ID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1pc3Npb25zVG9XaW4gPSAzO1xyXG5cclxuICAgIGdhbWVFbmRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBpbnM6IEdhbWVNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHN0YWNrUmVmaWxsQ291bnQgPSAzO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVOG7tyBs4buHIGNoaeG6v20gZGnhu4duIHTDrWNoIG3hurd0IHRo4bq7ICgw4oCTMSksIHbDrSBk4bulIDAuOTIgPSB+OTIlIGNoaeG7gXUgcuG7mW5nL2Nhb1wiIH0pXHJcbiAgICBpY29uRmlsbFJhdGlvID0gMC45MjtcclxuICAgIC8qXHJcbiAgICAgICAgSGllcmFyY2h5OlxyXG5cclxuICAgICAgICBDYW52YXNcclxuICAgICAgICAg4pSc4pSA4pSAIEJvYXJkXHJcbiAgICAgICAgIOKUgiAgICDilJzilIDilIAgUm93MVxyXG4gICAgICAgICDilIIgICAg4pSCICAgIOKUnOKUgOKUgCBMZWZ0U3RhY2tcclxuICAgICAgICAg4pSCICAgIOKUgiAgICDilJzilIDilIAgQ2VudGVyU2xvdFxyXG4gICAgICAgICDilIIgICAg4pSCICAgIOKUlOKUgOKUgCBSaWdodFN0YWNrXHJcbiAgICAgICAgIOKUgiAgICDilJzilIDilIAgUm93MlxyXG4gICAgICAgICDilIIgICAg4pSc4pSA4pSAIFJvdzNcclxuICAgICAgICAg4pSCICAgIOKUlOKUgOKUgCBSb3c0XHJcbiAgICAgICAgIOKUlOKUgOKUgCBEcmFnTGF5ZXJcclxuICAgICovXHJcblxyXG4gICAgbGV2ZWxEYXRhID0gW1xyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pc3Npb246IFwicG9saWNlXCIsXHJcblxyXG4gICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzaW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmFybWVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDFcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZvb3RiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3Ryb25hdXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWlzc2lvbjogXCJzaW5nZXJcIixcclxuXHJcbiAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFpcnBsYW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZhcm1lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3Ryb25hdXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmb290YmFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2luZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pc3Npb246IFwiYXN0cm9uYXV0XCIsXHJcblxyXG4gICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmb290YmFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmYXJtZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWlycGxhbmVcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXN0cm9uYXV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNpbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaXNzaW9uOiBcImZhcm1lclwiLFxyXG5cclxuICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9vdGJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmFybWVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNpbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFpcnBsYW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzdHJvbmF1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhaXJwbGFuZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIGNoZWNrTW92ZSgpIHtcclxuICAgICAgICB0aGlzLmNvdW50TW92ZS0tO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50TW92ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZShmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYk1vdmVDb3VudC5zdHJpbmcgPSBcIk1vdmVzOiBcIiArIHRoaXMuY291bnRNb3ZlLnRvU3RyaW5nKClcclxuICAgIH1cclxuICAgIGFkZFdyb25nKHBvcykge1xyXG4gICAgICAgIGxldCBmaXggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVdyb25nKVxyXG4gICAgICAgIGZpeC5wYXJlbnQgPSB0aGlzLmJvYXJkTm9kZTtcclxuICAgICAgICBmaXgucG9zaXRpb24gPSBwb3NcclxuICAgIH1cclxuICAgIGFkZERvbmUocG9zKSB7XHJcbiAgICAgICAgbGV0IGZpeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRG9uZSlcclxuICAgICAgICBmaXgucGFyZW50ID0gdGhpcy5ib2FyZE5vZGU7XHJcbiAgICAgICAgZml4LnBvc2l0aW9uID0gcG9zXHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZTtcclxuICAgICAgICBsZXQgZHJhZ0xheWVyID0gY2FudmFzLmdldENoaWxkQnlOYW1lKFwiRHJhZ0xheWVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoZHJhZ0xheWVyKSB7XHJcbiAgICAgICAgICAgIGRyYWdMYXllci5zZXRTaWJsaW5nSW5kZXgoY2FudmFzLmNoaWxkcmVuQ291bnQgLSAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlTWFwID0ge1xyXG4gICAgICAgICAgICBhc3Ryb25hdXQ6IHRoaXMuYXN0cm9uYXV0U3ByaXRlcyxcclxuICAgICAgICAgICAgZmFybWVyOiB0aGlzLmZhcm1lclNwcml0ZXMsXHJcbiAgICAgICAgICAgIHNpbmdlcjogdGhpcy5zaW5nZXJTcHJpdGVzLFxyXG4gICAgICAgICAgICBwb2xpY2U6IHRoaXMucG9saWNlU3ByaXRlcyxcclxuICAgICAgICAgICAgZm9vdGJhbGw6IHRoaXMuZm9vdGJhbGxTcHJpdGVzLFxyXG4gICAgICAgICAgICBhaXJwbGFuZTogdGhpcy5haXJwbGFuZVNwcml0ZXMsXHJcbiAgICAgICAgICAgIHZpa2luZ3M6IHRoaXMudmlraW5nU3ByaXRlcyxcclxuICAgICAgICAgICAgYXJteTogdGhpcy5hcm15U3ByaXRlcyxcclxuICAgICAgICAgICAgLy8gZXNwb3J0OiB0aGlzLmVzcG9ydFNwcml0ZXMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmR3VpbGRcclxuICAgICAgICAgICAgLy8gdGhpcy5wdXRHYW1lLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSwgMylcclxuICAgIH1cclxuICAgIGlzT2ZmR3VpbGQgPSBmYWxzZVxyXG5cclxuICAgIG9mZkd1aWxkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT2ZmR3VpbGQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzT2ZmR3VpbGQgPSB0cnVlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5wdXRHYW1lKS50bygwLjIsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wdXRHYW1lLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaGFuZEd1aWxkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZShcclxuICAgICAgICAgICAgMTA4MCxcclxuICAgICAgICAgICAgMTkyMCxcclxuICAgICAgICAgICAgY2MuUmVzb2x1dGlvblBvbGljeS5TSE9XX0FMTFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zID0gdGhpcztcclxuICAgICAgICB0aGlzLmFwcGVhcmVkQ2FyZHMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZE1pc3Npb25Db3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5nYW1lRW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwYXduQm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNsb3RDb21wbGV0ZShjb21wbGV0ZWRTbG90KSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkTWlzc2lvbkNvdW50Kys7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRlZE1pc3Npb25Db3VudCA+PSB0aGlzLm1pc3Npb25zVG9XaW4pIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbXBsZXRlLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgb2xkTm9kZSA9IGNvbXBsZXRlZFNsb3Qubm9kZTtcclxuICAgICAgICBsZXQgcm93ID0gb2xkTm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgbGV0IHBvcyA9IG9sZE5vZGUucG9zaXRpb24uY2xvbmUoKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld01pc3Npb24gPSB0aGlzLmdldE5leHRNaXNzaW9uKGNvbXBsZXRlZFNsb3QubWlzc2lvblR5cGUpO1xyXG5cclxuICAgICAgICBsZXQgbmV3U2xvdE5vZGUgPSBjYy5pbnN0YW50aWF0ZShvbGROb2RlKTtcclxuXHJcbiAgICAgICAgcm93LmFkZENoaWxkKG5ld1Nsb3ROb2RlKTtcclxuXHJcbiAgICAgICAgbmV3U2xvdE5vZGUubmFtZSA9IFwiQ2VudGVyU2xvdFwiO1xyXG4gICAgICAgIG5ld1Nsb3ROb2RlLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgIG5ld1Nsb3ROb2RlLnNjYWxlID0gMDtcclxuXHJcbiAgICAgICAgb2xkTm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIGxldCBzbG90ID0gbmV3U2xvdE5vZGUuZ2V0Q29tcG9uZW50KFwiU2xvdFwiKTtcclxuXHJcbiAgICAgICAgc2xvdC5pbml0KG5ld01pc3Npb24pO1xyXG5cclxuICAgICAgICBjYy50d2VlbihuZXdTbG90Tm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwge1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXh0TWlzc2lvbihleGNsdWRlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGdldE5leHRTcGF3bk1pc3Npb24oXHJcbiAgICAgICAgICAgIGV4Y2x1ZGUsXHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25RdWV1ZUluZGV4XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGF3blF1ZXVlSW5kZXggPSByZXN1bHQubmV4dEluZGV4O1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0Lm1pc3Npb25JZDtcclxuICAgIH1cclxuXHJcbiAgICBzcGF3bkJvYXJkKCkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy5ib2FyZC5jaGlsZHJlbltpXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5sZXZlbERhdGFbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRhdGEpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxlZnRTdGFjayA9IHJvdy5nZXRDaGlsZEJ5TmFtZShcIkxlZnRTdGFja1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByaWdodFN0YWNrID0gcm93LmdldENoaWxkQnlOYW1lKFwiUmlnaHRTdGFja1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzbG90ID0gcm93LmdldENoaWxkQnlOYW1lKFwiQ2VudGVyU2xvdFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGluaXQgc2xvdFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm1pc3Npb24pXHJcbiAgICAgICAgICAgIHNsb3QuZ2V0Q29tcG9uZW50KFwiU2xvdFwiKVxyXG4gICAgICAgICAgICAgICAgLmluaXQoZGF0YS5taXNzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNwYXduIHN0YWNrXHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25TdGFjayhsZWZ0U3RhY2ssIGRhdGEubGVmdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNwYXduU3RhY2socmlnaHRTdGFjaywgZGF0YS5yaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduU3RhY2socGFyZW50OiBjYy5Ob2RlLCBkYXRhOiBhbnlbXSkge1xyXG5cclxuICAgICAgICBwYXJlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IGRhdGFbaV07XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FyZE5vZGUgPSB0aGlzLmNyZWF0ZUNhcmROb2RlKHBhcmVudCwgaW5mbyk7XHJcblxyXG4gICAgICAgICAgICBjYXJkTm9kZS55ID0gaSAqIDIwO1xyXG4gICAgICAgICAgICBjYXJkTm9kZS56SW5kZXggPSBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0YWNrQ29tcCA9IHBhcmVudC5nZXRDb21wb25lbnQoXCJDYXJkU3RhY2tcIik7XHJcblxyXG4gICAgICAgIHN0YWNrQ29tcC5pbml0KHRoaXMpO1xyXG4gICAgICAgIHN0YWNrQ29tcC5zZXR1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhY2tFbXB0eShzdGFjaykge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nYW1lRW5kZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5zdGFja1JlZmlsbENvdW50O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gdGhpcy5yYW5kb21DYXJkSW5mbygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbmZvKSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwiW0dhbWVNYW5hZ2VyXSBLaMO0bmcgc3Bhd24gxJHGsOG7o2MgdGjhursg4oCUIGtp4buDbSB0cmEgc3ByaXRlIHRyb25nIEVkaXRvclwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNhcmROb2RlID0gdGhpcy5jcmVhdGVDYXJkTm9kZShzdGFjay5ub2RlLCBpbmZvKTtcclxuXHJcbiAgICAgICAgICAgIGNhcmROb2RlLnkgPSBpICogMjA7XHJcbiAgICAgICAgICAgIGNhcmROb2RlLnpJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFjay5zZXR1cCgpO1xyXG5cclxuICAgICAgICBsZXQgdG9wID0gc3RhY2suY2FyZHNbc3RhY2suY2FyZHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIGlmICh0b3ApIHtcclxuXHJcbiAgICAgICAgICAgIHRvcC5ub2RlLnNjYWxlID0gMDtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRvcC5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMTUsIHtcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2FyZE5vZGUoXHJcbiAgICAgICAgcGFyZW50OiBjYy5Ob2RlLFxyXG4gICAgICAgIGluZm86IHsgdHlwZTogc3RyaW5nOyB2YXJpYW50OiBudW1iZXIgfVxyXG4gICAgKTogY2MuTm9kZSB7XHJcblxyXG4gICAgICAgIGxldCBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkUHJlZmFiKTtcclxuXHJcbiAgICAgICAgcGFyZW50LmFkZENoaWxkKGNhcmQpO1xyXG5cclxuICAgICAgICBsZXQgY2FyZENvbXAgPSBjYXJkLmdldENvbXBvbmVudChcIkNhcmRcIik7XHJcblxyXG4gICAgICAgIGNhcmRDb21wLmNhcmRUeXBlID0gaW5mby50eXBlO1xyXG5cclxuICAgICAgICBjYXJkQ29tcC52YXJpYW50ID0gaW5mby52YXJpYW50O1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtDYXJkQXBwZWFyZWQoaW5mby50eXBlLCBpbmZvLnZhcmlhbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnNldENhcmRWaXN1YWwoXHJcbiAgICAgICAgICAgIGNhcmQsXHJcbiAgICAgICAgICAgIGluZm8udHlwZSxcclxuICAgICAgICAgICAgaW5mby52YXJpYW50XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQ2FyZEluZm8oKTogeyB0eXBlOiBzdHJpbmc7IHZhcmlhbnQ6IG51bWJlciB9IHtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmdldFVuYXBwZWFyZWRDYXJkT3B0aW9ucygpO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gb3B0aW9uc1tcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3B0aW9ucy5sZW5ndGgpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBjYXJkS2V5KHR5cGU6IHN0cmluZywgdmFyaWFudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7dHlwZX06JHt2YXJpYW50fWA7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0NhcmRBcHBlYXJlZCh0eXBlOiBzdHJpbmcsIHZhcmlhbnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYXBwZWFyZWRDYXJkcy5hZGQodGhpcy5jYXJkS2V5KHR5cGUsIHZhcmlhbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDYXJkQXBwZWFyZWQodHlwZTogc3RyaW5nLCB2YXJpYW50OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHBlYXJlZENhcmRzLmhhcyh0aGlzLmNhcmRLZXkodHlwZSwgdmFyaWFudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDaOG7iSBjw6FjIHRo4bq7ICh0eXBlICsgdmFyaWFudCkgY2jGsGEgdOG7q25nIHNwYXduIC8gc2V0dXAgKi9cclxuICAgIGdldFVuYXBwZWFyZWRDYXJkT3B0aW9ucygpOiB7IHR5cGU6IHN0cmluZzsgdmFyaWFudDogbnVtYmVyIH1bXSB7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zOiB7IHR5cGU6IHN0cmluZzsgdmFyaWFudDogbnVtYmVyIH1bXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0eXBlIG9mIHRoaXMuZ2V0U3Bhd25hYmxlVHlwZXMoKSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNwcml0ZXMgPSB0aGlzLnNwcml0ZU1hcFt0eXBlXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHYgPSAxOyB2IDw9IHNwcml0ZXMubGVuZ3RoOyB2KyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzQ2FyZEFwcGVhcmVkKHR5cGUsIHYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHsgdHlwZSwgdmFyaWFudDogdiB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Bhd25hYmxlVHlwZXMoKTogc3RyaW5nW10ge1xyXG5cclxuICAgICAgICByZXR1cm4gZ2V0TWlzc2lvbklkcygpLmZpbHRlcihpZCA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwW2lkXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzcHJpdGVzICYmIHNwcml0ZXMubGVuZ3RoID4gMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRHYW1lKHZhbHVlKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVFbmRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTG9zZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBoYW9ob2EuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZUVuZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcblxyXG4gICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgbGV0IGdhbWVEb251dCA9IGNhbnZhcy5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIikgYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoZ2FtZURvbnV0ICYmIGdhbWVEb251dC5vbkVuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVEb251dC5vbkVuZEdhbWUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmxvZyhcIltHYW1lTWFuYWdlcl0gSG/DoG4gdGjDoG5oXCIsIHRoaXMubWlzc2lvbnNUb1dpbiwgXCJtaXNzaW9uIOKAlCBr4bq/dCB0aMO6YyBnYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmRWaXN1YWwoXHJcbiAgICAgICAgY2FyZDogY2MuTm9kZSxcclxuICAgICAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICAgICAgdmFyaWFudDogbnVtYmVyXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgbGV0IGZyb250ID0gY2FyZC5nZXRDaGlsZEJ5TmFtZShcImZyb250XCIpO1xyXG5cclxuICAgICAgICBsZXQgaWNvbiA9IGZyb250XHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImljb25cIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGJUaXRsZSA9IGZyb250XHJcbiAgICAgICAgLy8gICAgIC5nZXRDaGlsZEJ5TmFtZShcImxiVGl0bGVcIilcclxuICAgICAgICAvLyAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIC8vIGxiVGl0bGUuc3RyaW5nID0gdGhpcy5nZXRDYXJkTmFtZSh0eXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YXJpYW50LCB0eXBlKVxyXG4gICAgICAgIHZhcmlhbnQgLT0gMTtcclxuXHJcbiAgICAgICAgbGV0IHNwcml0ZXMgPSB0aGlzLnNwcml0ZU1hcFt0eXBlXTtcclxuXHJcbiAgICAgICAgaWYgKCFzcHJpdGVzIHx8ICFzcHJpdGVzW3ZhcmlhbnRdKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oYFtHYW1lTWFuYWdlcl0gVGhp4bq/dSBzcHJpdGU6IHR5cGU9JHt0eXBlfSwgdmFyaWFudD0ke3ZhcmlhbnQgKyAxfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gc3ByaXRlc1t2YXJpYW50XTtcclxuICAgICAgICB0aGlzLmZpdEljb25Ub0NhcmQoaWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZml0SWNvblRvQ2FyZChpY29uOiBjYy5TcHJpdGUpIHtcclxuXHJcbiAgICAgICAgaWYgKCFpY29uIHx8ICFpY29uLnNwcml0ZUZyYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgIGljb24uc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgIGljb24ubm9kZS5zZXRTY2FsZSgwLjkpO1xyXG5cclxuICAgICAgICBsZXQgZnJvbnQgPSBpY29uLm5vZGUucGFyZW50O1xyXG4gICAgICAgIGlmICghZnJvbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IG1heFdpZHRoID0gZnJvbnQud2lkdGggKiB0aGlzLmljb25GaWxsUmF0aW87XHJcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IGZyb250LmhlaWdodCAqIHRoaXMuaWNvbkZpbGxSYXRpbztcclxuXHJcbiAgICAgICAgbGV0IHJlY3QgPSBpY29uLnNwcml0ZUZyYW1lLmdldFJlY3QoKTtcclxuICAgICAgICBsZXQgc2NhbGUgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgbWF4V2lkdGggLyByZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQgLyByZWN0LmhlaWdodFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGljb24ubm9kZS5zZXRDb250ZW50U2l6ZShcclxuICAgICAgICAgICAgcmVjdC53aWR0aCAqIHNjYWxlLFxyXG4gICAgICAgICAgICByZWN0LmhlaWdodCAqIHNjYWxlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJkTmFtZSh0eXBlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdldE1pc3Npb25UaXRsZSh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21UeXBlKCkge1xyXG5cclxuICAgICAgICBsZXQgaWRzID0gZ2V0TWlzc2lvbklkcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gaWRzW1xyXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpZHMubGVuZ3RoKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG59Il19