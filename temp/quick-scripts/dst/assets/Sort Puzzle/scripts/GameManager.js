
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
        _this.preDone = null;
        _this.preWrong = null;
        _this.boardNode = null;
        _this.lbMoveCount = null;
        _this.countMove = 0;
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
        cc.tween(this.putGame).to(0.3, { opacity: 0 }).call(function () {
            _this.putGame.active = false;
            _this.handGuild.active = true;
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
            this.endGame();
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
    GameManager.prototype.endGame = function () {
        if (this.gameEnded)
            return;
        cc.audioEngine.play(this.soundWin, false, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXEdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUl5QjtBQUVuQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWtvQkM7UUEvbkJHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixzQkFBZ0IsR0FBcUIsRUFBRSxDQUFDO1FBR3hDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUdyQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFHckMsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUd2QyxxQkFBZSxHQUFxQixFQUFFLENBQUM7UUFHdkMsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUVyQyxpQkFBVyxHQUFxQixFQUFFLENBQUM7UUFFbkMsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLE9BQU87UUFFUCxjQUFRLEdBQWlCLElBQUksQ0FBQTtRQUU3QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixvQkFBYyxHQUFpQixJQUFJLENBQUE7UUFFbkMsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0IsY0FB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QVcsQ0FBQyxDQUFDO29EQUNRO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDTztJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ1k7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDYTtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ0s7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDWTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNPO0lBYzFCO1FBREMsUUFBUTtzREFDUztJQU9sQjtRQURDLFFBQVE7eURBQ1k7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsdUVBQXVFLEVBQUUsQ0FBQztzREFDMUU7SUF0RkosV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWtvQi9CO0lBQUQsa0JBQUM7Q0Fsb0JELEFBa29CQyxDQWxvQndDLEVBQUUsQ0FBQyxTQUFTLEdBa29CcEQ7a0JBbG9Cb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBnZXRNaXNzaW9uSWRzLFxyXG4gICAgZ2V0TWlzc2lvblRpdGxlLFxyXG4gICAgZ2V0TmV4dFNwYXduTWlzc2lvblxyXG59IGZyb20gXCIuL01pc3Npb25Db25maWdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNhcmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZEdhbWVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBoYW9ob2E6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJvYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgYXN0cm9uYXV0U3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgZmFybWVyU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgc2luZ2VyU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgcG9saWNlU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgZm9vdGJhbGxTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBhaXJwbGFuZVNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGVzcG9ydFNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHZpa2luZ1Nwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgYXJteVNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHV0R2FtZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZEd1aWxkOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIC8vc291bmRcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ29tcGxldGU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGlja0NhcmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUb3VjaENhcmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVEb25lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVdyb25nOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2FyZE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYk1vdmVDb3VudDpjYy5MYWJlbD1udWxsO1xyXG4gICAgY291bnRNb3ZlPTBcclxuXHJcbiAgICBzcHJpdGVNYXA6IFJlY29yZDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lW10+ID0ge307XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG5cclxuICAgIHNwYXduUXVldWVJbmRleCA9IDA7XHJcblxyXG4gICAgLyoqIFRo4bq7IMSRw6MgY8OzIHRyw6puIGLDoG4gKHNldHVwICsgc3Bhd24gcmFuZG9tKSwga2V5ID0gXCJ0eXBlOnZhcmlhbnRcIiAqL1xyXG4gICAgYXBwZWFyZWRDYXJkcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICAgIGNvbXBsZXRlZE1pc3Npb25Db3VudCA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaXNzaW9uc1RvV2luID0gMztcclxuXHJcbiAgICBnYW1lRW5kZWQgPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgaW5zOiBHYW1lTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzdGFja1JlZmlsbENvdW50ID0gMztcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlThu7cgbOG7hyBjaGnhur9tIGRp4buHbiB0w61jaCBt4bq3dCB0aOG6uyAoMOKAkzEpLCB2w60gZOG7pSAwLjkyID0gfjkyJSBjaGnhu4F1IHLhu5luZy9jYW9cIiB9KVxyXG4gICAgaWNvbkZpbGxSYXRpbyA9IDAuOTI7XHJcbiAgICAvKlxyXG4gICAgICAgIEhpZXJhcmNoeTpcclxuXHJcbiAgICAgICAgQ2FudmFzXHJcbiAgICAgICAgIOKUnOKUgOKUgCBCb2FyZFxyXG4gICAgICAgICDilIIgICAg4pSc4pSA4pSAIFJvdzFcclxuICAgICAgICAg4pSCICAgIOKUgiAgICDilJzilIDilIAgTGVmdFN0YWNrXHJcbiAgICAgICAgIOKUgiAgICDilIIgICAg4pSc4pSA4pSAIENlbnRlclNsb3RcclxuICAgICAgICAg4pSCICAgIOKUgiAgICDilJTilIDilIAgUmlnaHRTdGFja1xyXG4gICAgICAgICDilIIgICAg4pSc4pSA4pSAIFJvdzJcclxuICAgICAgICAg4pSCICAgIOKUnOKUgOKUgCBSb3czXHJcbiAgICAgICAgIOKUgiAgICDilJTilIDilIAgUm93NFxyXG4gICAgICAgICDilJTilIDilIAgRHJhZ0xheWVyXHJcbiAgICAqL1xyXG5cclxuICAgIGxldmVsRGF0YSA9IFtcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaXNzaW9uOiBcInBvbGljZVwiLFxyXG5cclxuICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2luZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZhcm1lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmb290YmFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXN0cm9uYXV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pc3Npb246IFwic2luZ2VyXCIsXHJcblxyXG4gICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhaXJwbGFuZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmYXJtZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXN0cm9uYXV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9vdGJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNpbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaXNzaW9uOiBcImFzdHJvbmF1dFwiLFxyXG5cclxuICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9vdGJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmFybWVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFpcnBsYW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzdHJvbmF1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzaW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWlzc2lvbjogXCJmYXJtZXJcIixcclxuXHJcbiAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZvb3RiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZhcm1lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzaW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhaXJwbGFuZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3Ryb25hdXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWlycGxhbmVcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbiAgICBhZGRXcm9uZyhwb3MpIHtcclxuICAgICAgICBsZXQgZml4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXcm9uZylcclxuICAgICAgICBmaXgucGFyZW50ID0gdGhpcy5ib2FyZE5vZGU7XHJcbiAgICAgICAgZml4LnBvc2l0aW9uPXBvc1xyXG4gICAgfVxyXG4gICAgIGFkZERvbmUocG9zKSB7XHJcbiAgICAgICAgbGV0IGZpeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRG9uZSlcclxuICAgICAgICBmaXgucGFyZW50ID0gdGhpcy5ib2FyZE5vZGU7XHJcbiAgICAgICAgZml4LnBvc2l0aW9uPXBvc1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZTtcclxuICAgICAgICBsZXQgZHJhZ0xheWVyID0gY2FudmFzLmdldENoaWxkQnlOYW1lKFwiRHJhZ0xheWVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoZHJhZ0xheWVyKSB7XHJcbiAgICAgICAgICAgIGRyYWdMYXllci5zZXRTaWJsaW5nSW5kZXgoY2FudmFzLmNoaWxkcmVuQ291bnQgLSAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlTWFwID0ge1xyXG4gICAgICAgICAgICBhc3Ryb25hdXQ6IHRoaXMuYXN0cm9uYXV0U3ByaXRlcyxcclxuICAgICAgICAgICAgZmFybWVyOiB0aGlzLmZhcm1lclNwcml0ZXMsXHJcbiAgICAgICAgICAgIHNpbmdlcjogdGhpcy5zaW5nZXJTcHJpdGVzLFxyXG4gICAgICAgICAgICBwb2xpY2U6IHRoaXMucG9saWNlU3ByaXRlcyxcclxuICAgICAgICAgICAgZm9vdGJhbGw6IHRoaXMuZm9vdGJhbGxTcHJpdGVzLFxyXG4gICAgICAgICAgICBhaXJwbGFuZTogdGhpcy5haXJwbGFuZVNwcml0ZXMsXHJcbiAgICAgICAgICAgIHZpa2luZ3M6IHRoaXMudmlraW5nU3ByaXRlcyxcclxuICAgICAgICAgICAgYXJteTogdGhpcy5hcm15U3ByaXRlcyxcclxuICAgICAgICAgICAgLy8gZXNwb3J0OiB0aGlzLmVzcG9ydFNwcml0ZXMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmR3VpbGRcclxuICAgICAgICAgICAgLy8gdGhpcy5wdXRHYW1lLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSwgMylcclxuICAgIH1cclxuICAgIGlzT2ZmR3VpbGQgPSBmYWxzZVxyXG5cclxuICAgIG9mZkd1aWxkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT2ZmR3VpbGQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzT2ZmR3VpbGQgPSB0cnVlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5wdXRHYW1lKS50bygwLjMsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wdXRHYW1lLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZEd1aWxkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZShcclxuICAgICAgICAgICAgMTA4MCxcclxuICAgICAgICAgICAgMTkyMCxcclxuICAgICAgICAgICAgY2MuUmVzb2x1dGlvblBvbGljeS5TSE9XX0FMTFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zID0gdGhpcztcclxuICAgICAgICB0aGlzLmFwcGVhcmVkQ2FyZHMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZE1pc3Npb25Db3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5nYW1lRW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwYXduQm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNsb3RDb21wbGV0ZShjb21wbGV0ZWRTbG90KSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkTWlzc2lvbkNvdW50Kys7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRlZE1pc3Npb25Db3VudCA+PSB0aGlzLm1pc3Npb25zVG9XaW4pIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29tcGxldGUsIGZhbHNlLCAxKVxyXG4gICAgICAgIGxldCBvbGROb2RlID0gY29tcGxldGVkU2xvdC5ub2RlO1xyXG4gICAgICAgIGxldCByb3cgPSBvbGROb2RlLnBhcmVudDtcclxuICAgICAgICBsZXQgcG9zID0gb2xkTm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cclxuICAgICAgICBsZXQgbmV3TWlzc2lvbiA9IHRoaXMuZ2V0TmV4dE1pc3Npb24oY29tcGxldGVkU2xvdC5taXNzaW9uVHlwZSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdTbG90Tm9kZSA9IGNjLmluc3RhbnRpYXRlKG9sZE5vZGUpO1xyXG5cclxuICAgICAgICByb3cuYWRkQ2hpbGQobmV3U2xvdE5vZGUpO1xyXG5cclxuICAgICAgICBuZXdTbG90Tm9kZS5uYW1lID0gXCJDZW50ZXJTbG90XCI7XHJcbiAgICAgICAgbmV3U2xvdE5vZGUucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgbmV3U2xvdE5vZGUuc2NhbGUgPSAwO1xyXG5cclxuICAgICAgICBvbGROb2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgbGV0IHNsb3QgPSBuZXdTbG90Tm9kZS5nZXRDb21wb25lbnQoXCJTbG90XCIpO1xyXG5cclxuICAgICAgICBzbG90LmluaXQobmV3TWlzc2lvbik7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKG5ld1Nsb3ROb2RlKVxyXG4gICAgICAgICAgICAudG8oMC4yLCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5leHRNaXNzaW9uKGV4Y2x1ZGU6IHN0cmluZykge1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gZ2V0TmV4dFNwYXduTWlzc2lvbihcclxuICAgICAgICAgICAgZXhjbHVkZSxcclxuICAgICAgICAgICAgdGhpcy5zcGF3blF1ZXVlSW5kZXhcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNwYXduUXVldWVJbmRleCA9IHJlc3VsdC5uZXh0SW5kZXg7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQubWlzc2lvbklkO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduQm9hcmQoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLmJvYXJkLmNoaWxkcmVuW2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxldmVsRGF0YVtpXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGVmdFN0YWNrID0gcm93LmdldENoaWxkQnlOYW1lKFwiTGVmdFN0YWNrXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJpZ2h0U3RhY2sgPSByb3cuZ2V0Q2hpbGRCeU5hbWUoXCJSaWdodFN0YWNrXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNsb3QgPSByb3cuZ2V0Q2hpbGRCeU5hbWUoXCJDZW50ZXJTbG90XCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gaW5pdCBzbG90XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubWlzc2lvbilcclxuICAgICAgICAgICAgc2xvdC5nZXRDb21wb25lbnQoXCJTbG90XCIpXHJcbiAgICAgICAgICAgICAgICAuaW5pdChkYXRhLm1pc3Npb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gc3Bhd24gc3RhY2tcclxuICAgICAgICAgICAgdGhpcy5zcGF3blN0YWNrKGxlZnRTdGFjaywgZGF0YS5sZWZ0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25TdGFjayhyaWdodFN0YWNrLCBkYXRhLnJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25TdGFjayhwYXJlbnQ6IGNjLk5vZGUsIGRhdGE6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHBhcmVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gZGF0YVtpXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYXJkTm9kZSA9IHRoaXMuY3JlYXRlQ2FyZE5vZGUocGFyZW50LCBpbmZvKTtcclxuXHJcbiAgICAgICAgICAgIGNhcmROb2RlLnkgPSBpICogMjA7XHJcbiAgICAgICAgICAgIGNhcmROb2RlLnpJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RhY2tDb21wID0gcGFyZW50LmdldENvbXBvbmVudChcIkNhcmRTdGFja1wiKTtcclxuXHJcbiAgICAgICAgc3RhY2tDb21wLmluaXQodGhpcyk7XHJcbiAgICAgICAgc3RhY2tDb21wLnNldHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFja0VtcHR5KHN0YWNrKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVFbmRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgY291bnQgPSB0aGlzLnN0YWNrUmVmaWxsQ291bnQ7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGluZm8gPSB0aGlzLnJhbmRvbUNhcmRJbmZvKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJbR2FtZU1hbmFnZXJdIEtow7RuZyBzcGF3biDEkcaw4bujYyB0aOG6uyDigJQga2nhu4NtIHRyYSBzcHJpdGUgdHJvbmcgRWRpdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FyZE5vZGUgPSB0aGlzLmNyZWF0ZUNhcmROb2RlKHN0YWNrLm5vZGUsIGluZm8pO1xyXG5cclxuICAgICAgICAgICAgY2FyZE5vZGUueSA9IGkgKiAyMDtcclxuICAgICAgICAgICAgY2FyZE5vZGUuekluZGV4ID0gaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YWNrLnNldHVwKCk7XHJcblxyXG4gICAgICAgIGxldCB0b3AgPSBzdGFjay5jYXJkc1tzdGFjay5jYXJkcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgaWYgKHRvcCkge1xyXG5cclxuICAgICAgICAgICAgdG9wLm5vZGUuc2NhbGUgPSAwO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odG9wLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4xNSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDYXJkTm9kZShcclxuICAgICAgICBwYXJlbnQ6IGNjLk5vZGUsXHJcbiAgICAgICAgaW5mbzogeyB0eXBlOiBzdHJpbmc7IHZhcmlhbnQ6IG51bWJlciB9XHJcbiAgICApOiBjYy5Ob2RlIHtcclxuXHJcbiAgICAgICAgbGV0IGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRQcmVmYWIpO1xyXG5cclxuICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoY2FyZCk7XHJcblxyXG4gICAgICAgIGxldCBjYXJkQ29tcCA9IGNhcmQuZ2V0Q29tcG9uZW50KFwiQ2FyZFwiKTtcclxuXHJcbiAgICAgICAgY2FyZENvbXAuY2FyZFR5cGUgPSBpbmZvLnR5cGU7XHJcblxyXG4gICAgICAgIGNhcmRDb21wLnZhcmlhbnQgPSBpbmZvLnZhcmlhbnQ7XHJcblxyXG4gICAgICAgIHRoaXMubWFya0NhcmRBcHBlYXJlZChpbmZvLnR5cGUsIGluZm8udmFyaWFudCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2FyZFZpc3VhbChcclxuICAgICAgICAgICAgY2FyZCxcclxuICAgICAgICAgICAgaW5mby50eXBlLFxyXG4gICAgICAgICAgICBpbmZvLnZhcmlhbnRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21DYXJkSW5mbygpOiB7IHR5cGU6IHN0cmluZzsgdmFyaWFudDogbnVtYmVyIH0ge1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuZ2V0VW5hcHBlYXJlZENhcmRPcHRpb25zKCk7XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiBvcHRpb25zW1xyXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmxlbmd0aClcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmRLZXkodHlwZTogc3RyaW5nLCB2YXJpYW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0eXBlfToke3ZhcmlhbnR9YDtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrQ2FyZEFwcGVhcmVkKHR5cGU6IHN0cmluZywgdmFyaWFudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlYXJlZENhcmRzLmFkZCh0aGlzLmNhcmRLZXkodHlwZSwgdmFyaWFudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NhcmRBcHBlYXJlZCh0eXBlOiBzdHJpbmcsIHZhcmlhbnQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcGVhcmVkQ2FyZHMuaGFzKHRoaXMuY2FyZEtleSh0eXBlLCB2YXJpYW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENo4buJIGPDoWMgdGjhursgKHR5cGUgKyB2YXJpYW50KSBjaMawYSB04burbmcgc3Bhd24gLyBzZXR1cCAqL1xyXG4gICAgZ2V0VW5hcHBlYXJlZENhcmRPcHRpb25zKCk6IHsgdHlwZTogc3RyaW5nOyB2YXJpYW50OiBudW1iZXIgfVtdIHtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IHsgdHlwZTogc3RyaW5nOyB2YXJpYW50OiBudW1iZXIgfVtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IHR5cGUgb2YgdGhpcy5nZXRTcGF3bmFibGVUeXBlcygpKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwW3R5cGVdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgdiA9IDE7IHYgPD0gc3ByaXRlcy5sZW5ndGg7IHYrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNDYXJkQXBwZWFyZWQodHlwZSwgdikpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goeyB0eXBlLCB2YXJpYW50OiB2IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGF3bmFibGVUeXBlcygpOiBzdHJpbmdbXSB7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRNaXNzaW9uSWRzKCkuZmlsdGVyKGlkID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXBbaWRdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNwcml0ZXMgJiYgc3ByaXRlcy5sZW5ndGggPiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZEdhbWUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVFbmRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5waGFvaG9hLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lbmRHYW1lTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWVFbmRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG5cclxuICAgICAgICBpZiAoY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGxldCBnYW1lRG9udXQgPSBjYW52YXMuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpIGFzIGFueTtcclxuICAgICAgICAgICAgaWYgKGdhbWVEb251dCAmJiBnYW1lRG9udXQub25FbmRHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lRG9udXQub25FbmRHYW1lKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5sb2coXCJbR2FtZU1hbmFnZXJdIEhvw6BuIHRow6BuaFwiLCB0aGlzLm1pc3Npb25zVG9XaW4sIFwibWlzc2lvbiDigJQga+G6v3QgdGjDumMgZ2FtZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXJkVmlzdWFsKFxyXG4gICAgICAgIGNhcmQ6IGNjLk5vZGUsXHJcbiAgICAgICAgdHlwZTogc3RyaW5nLFxyXG4gICAgICAgIHZhcmlhbnQ6IG51bWJlclxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIGxldCBmcm9udCA9IGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJmcm9udFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGljb24gPSBmcm9udFxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGxiVGl0bGUgPSBmcm9udFxyXG4gICAgICAgIC8vICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJsYlRpdGxlXCIpXHJcbiAgICAgICAgLy8gICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICAvLyBsYlRpdGxlLnN0cmluZyA9IHRoaXMuZ2V0Q2FyZE5hbWUodHlwZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFyaWFudCwgdHlwZSlcclxuICAgICAgICB2YXJpYW50IC09IDE7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXBbdHlwZV07XHJcblxyXG4gICAgICAgIGlmICghc3ByaXRlcyB8fCAhc3ByaXRlc1t2YXJpYW50XSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKGBbR2FtZU1hbmFnZXJdIFRoaeG6v3Ugc3ByaXRlOiB0eXBlPSR7dHlwZX0sIHZhcmlhbnQ9JHt2YXJpYW50ICsgMX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHNwcml0ZXNbdmFyaWFudF07XHJcbiAgICAgICAgdGhpcy5maXRJY29uVG9DYXJkKGljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpdEljb25Ub0NhcmQoaWNvbjogY2MuU3ByaXRlKSB7XHJcblxyXG4gICAgICAgIGlmICghaWNvbiB8fCAhaWNvbi5zcHJpdGVGcmFtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpY29uLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgICAgICBpY29uLm5vZGUuc2V0U2NhbGUoMC45KTtcclxuXHJcbiAgICAgICAgbGV0IGZyb250ID0gaWNvbi5ub2RlLnBhcmVudDtcclxuICAgICAgICBpZiAoIWZyb250KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBtYXhXaWR0aCA9IGZyb250LndpZHRoICogdGhpcy5pY29uRmlsbFJhdGlvO1xyXG4gICAgICAgIGxldCBtYXhIZWlnaHQgPSBmcm9udC5oZWlnaHQgKiB0aGlzLmljb25GaWxsUmF0aW87XHJcblxyXG4gICAgICAgIGxldCByZWN0ID0gaWNvbi5zcHJpdGVGcmFtZS5nZXRSZWN0KCk7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgIG1heFdpZHRoIC8gcmVjdC53aWR0aCxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0IC8gcmVjdC5oZWlnaHRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpY29uLm5vZGUuc2V0Q29udGVudFNpemUoXHJcbiAgICAgICAgICAgIHJlY3Qud2lkdGggKiBzY2FsZSxcclxuICAgICAgICAgICAgcmVjdC5oZWlnaHQgKiBzY2FsZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FyZE5hbWUodHlwZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRNaXNzaW9uVGl0bGUodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tVHlwZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IGlkcyA9IGdldE1pc3Npb25JZHMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlkc1tcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaWRzLmxlbmd0aClcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxufSJdfQ==