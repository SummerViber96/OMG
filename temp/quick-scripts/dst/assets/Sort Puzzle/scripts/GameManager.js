
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
        _this.cardBg = null;
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
        for (var i = parent.childrenCount - 1; i >= 0; i--) {
            var child = parent.children[i];
            if (child.getComponent("CardBgSlot"))
                continue;
            child.destroy();
        }
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
        var spawned = 0;
        for (var i = 0; i < this.stackRefillCount; i++) {
            var info = this.randomCardInfo();
            if (!info)
                break;
            var cardNode = this.createCardNode(stack.node, info);
            cardNode.y = i * 20;
            cardNode.zIndex = i;
            spawned++;
        }
        stack.setup();
        if (this.isSpawnPoolEmpty()) {
            this.ensureBgSlot(stack);
            stack.setup();
        }
        if (spawned === 0)
            return;
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
    GameManager.prototype.isSpawnPoolEmpty = function () {
        return this.getUnappearedCardOptions().length === 0;
    };
    GameManager.prototype.ensureBgSlot = function (stack) {
        if (!this.cardBg) {
            cc.warn("[GameManager] Chưa gán prefab cardBg trong Editor");
            return;
        }
        if (stack.bgSlot || stack.node.getComponentInChildren("CardBgSlot")) {
            return;
        }
        var bgNode = cc.instantiate(this.cardBg);
        stack.node.addChild(bgNode, 0);
        bgNode.setPosition(0, 0);
        bgNode.zIndex = 0;
        var bgComp = bgNode.getComponent("CardBgSlot");
        if (!bgComp) {
            bgComp = bgNode.addComponent("CardBgSlot");
        }
        var icon = bgNode.getChildByName("icon");
        if (icon) {
            bgComp.placeholder = icon;
        }
        bgComp.init(this, stack);
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
        property(cc.Prefab)
    ], GameManager.prototype, "cardBg", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXEdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUl5QjtBQUVuQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW9zQkM7UUFqc0JHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixzQkFBZ0IsR0FBcUIsRUFBRSxDQUFDO1FBR3hDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUdyQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFHckMsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUd2QyxxQkFBZSxHQUFxQixFQUFFLENBQUM7UUFHdkMsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUVyQyxpQkFBVyxHQUFxQixFQUFFLENBQUM7UUFFbkMsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLE9BQU87UUFFUCxjQUFRLEdBQWlCLElBQUksQ0FBQTtRQUU3QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixvQkFBYyxHQUFpQixJQUFJLENBQUE7UUFFbkMsZUFBUyxHQUFpQixJQUFJLENBQUE7UUFFOUIsYUFB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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ0s7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDWTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDRztJQWN2QjtRQURDLFFBQVE7c0RBQ1M7SUFPbEI7UUFEQyxRQUFRO3lEQUNZO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVFQUF1RSxFQUFFLENBQUM7c0RBQzFFO0lBMUZKLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0Fvc0IvQjtJQUFELGtCQUFDO0NBcHNCRCxBQW9zQkMsQ0Fwc0J3QyxFQUFFLENBQUMsU0FBUyxHQW9zQnBEO2tCQXBzQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgZ2V0TWlzc2lvbklkcyxcclxuICAgIGdldE1pc3Npb25UaXRsZSxcclxuICAgIGdldE5leHRTcGF3bk1pc3Npb25cclxufSBmcm9tIFwiLi9NaXNzaW9uQ29uZmlnXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjYXJkUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRHYW1lTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvaG9hOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGFzdHJvbmF1dFNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGZhcm1lclNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHNpbmdlclNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHBvbGljZVNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGZvb3RiYWxsU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgYWlycGxhbmVTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBlc3BvcnRTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICB2aWtpbmdTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGFybXlTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1dEdhbWU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmRHdWlsZDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICAvL3NvdW5kXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENvbXBsZXRlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2tDYXJkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVG91Y2hDYXJkOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlRG9uZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVXcm9uZzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm9hcmROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJNb3ZlQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjYXJkQmc6Y2MuUHJlZmFiID0gbnVsbFxyXG4gICAgY291bnRNb3ZlID0gMzBcclxuXHJcbiAgICBzcHJpdGVNYXA6IFJlY29yZDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lW10+ID0ge307XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG5cclxuICAgIHNwYXduUXVldWVJbmRleCA9IDA7XHJcblxyXG4gICAgLyoqIFRo4bq7IMSRw6MgY8OzIHRyw6puIGLDoG4gKHNldHVwICsgc3Bhd24gcmFuZG9tKSwga2V5ID0gXCJ0eXBlOnZhcmlhbnRcIiAqL1xyXG4gICAgYXBwZWFyZWRDYXJkcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICAgIGNvbXBsZXRlZE1pc3Npb25Db3VudCA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaXNzaW9uc1RvV2luID0gMztcclxuXHJcbiAgICBnYW1lRW5kZWQgPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgaW5zOiBHYW1lTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzdGFja1JlZmlsbENvdW50ID0gMztcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlThu7cgbOG7hyBjaGnhur9tIGRp4buHbiB0w61jaCBt4bq3dCB0aOG6uyAoMOKAkzEpLCB2w60gZOG7pSAwLjkyID0gfjkyJSBjaGnhu4F1IHLhu5luZy9jYW9cIiB9KVxyXG4gICAgaWNvbkZpbGxSYXRpbyA9IDAuOTI7XHJcbiAgICAvKlxyXG4gICAgICAgIEhpZXJhcmNoeTpcclxuXHJcbiAgICAgICAgQ2FudmFzXHJcbiAgICAgICAgIOKUnOKUgOKUgCBCb2FyZFxyXG4gICAgICAgICDilIIgICAg4pSc4pSA4pSAIFJvdzFcclxuICAgICAgICAg4pSCICAgIOKUgiAgICDilJzilIDilIAgTGVmdFN0YWNrXHJcbiAgICAgICAgIOKUgiAgICDilIIgICAg4pSc4pSA4pSAIENlbnRlclNsb3RcclxuICAgICAgICAg4pSCICAgIOKUgiAgICDilJTilIDilIAgUmlnaHRTdGFja1xyXG4gICAgICAgICDilIIgICAg4pSc4pSA4pSAIFJvdzJcclxuICAgICAgICAg4pSCICAgIOKUnOKUgOKUgCBSb3czXHJcbiAgICAgICAgIOKUgiAgICDilJTilIDilIAgUm93NFxyXG4gICAgICAgICDilJTilIDilIAgRHJhZ0xheWVyXHJcbiAgICAqL1xyXG5cclxuICAgIGxldmVsRGF0YSA9IFtcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaXNzaW9uOiBcInBvbGljZVwiLFxyXG5cclxuICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2luZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZhcm1lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmb290YmFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2xpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXN0cm9uYXV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pc3Npb246IFwic2luZ2VyXCIsXHJcblxyXG4gICAgICAgICAgICBsZWZ0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhaXJwbGFuZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmYXJtZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXN0cm9uYXV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICByaWdodDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9vdGJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9saWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNpbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaXNzaW9uOiBcImFzdHJvbmF1dFwiLFxyXG5cclxuICAgICAgICAgICAgbGVmdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9vdGJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmFybWVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgcmlnaHQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFpcnBsYW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzdHJvbmF1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzaW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWlzc2lvbjogXCJmYXJtZXJcIixcclxuXHJcbiAgICAgICAgICAgIGxlZnQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZvb3RiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZhcm1lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzaW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhaXJwbGFuZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3Ryb25hdXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWlycGxhbmVcIixcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbiAgICBjaGVja01vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudE1vdmUtLTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudE1vdmUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGJNb3ZlQ291bnQuc3RyaW5nID0gXCJNb3ZlczogXCIgKyB0aGlzLmNvdW50TW92ZS50b1N0cmluZygpXHJcbiAgICB9XHJcbiAgICBhZGRXcm9uZyhwb3MpIHtcclxuICAgICAgICBsZXQgZml4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXcm9uZylcclxuICAgICAgICBmaXgucGFyZW50ID0gdGhpcy5ib2FyZE5vZGU7XHJcbiAgICAgICAgZml4LnBvc2l0aW9uID0gcG9zXHJcbiAgICB9XHJcbiAgICBhZGREb25lKHBvcykge1xyXG4gICAgICAgIGxldCBmaXggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURvbmUpXHJcbiAgICAgICAgZml4LnBhcmVudCA9IHRoaXMuYm9hcmROb2RlO1xyXG4gICAgICAgIGZpeC5wb3NpdGlvbiA9IHBvc1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbGV0IGRyYWdMYXllciA9IGNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcIkRyYWdMYXllclwiKTtcclxuXHJcbiAgICAgICAgaWYgKGRyYWdMYXllcikge1xyXG4gICAgICAgICAgICBkcmFnTGF5ZXIuc2V0U2libGluZ0luZGV4KGNhbnZhcy5jaGlsZHJlbkNvdW50IC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZU1hcCA9IHtcclxuICAgICAgICAgICAgYXN0cm9uYXV0OiB0aGlzLmFzdHJvbmF1dFNwcml0ZXMsXHJcbiAgICAgICAgICAgIGZhcm1lcjogdGhpcy5mYXJtZXJTcHJpdGVzLFxyXG4gICAgICAgICAgICBzaW5nZXI6IHRoaXMuc2luZ2VyU3ByaXRlcyxcclxuICAgICAgICAgICAgcG9saWNlOiB0aGlzLnBvbGljZVNwcml0ZXMsXHJcbiAgICAgICAgICAgIGZvb3RiYWxsOiB0aGlzLmZvb3RiYWxsU3ByaXRlcyxcclxuICAgICAgICAgICAgYWlycGxhbmU6IHRoaXMuYWlycGxhbmVTcHJpdGVzLFxyXG4gICAgICAgICAgICB2aWtpbmdzOiB0aGlzLnZpa2luZ1Nwcml0ZXMsXHJcbiAgICAgICAgICAgIGFybXk6IHRoaXMuYXJteVNwcml0ZXMsXHJcbiAgICAgICAgICAgIC8vIGVzcG9ydDogdGhpcy5lc3BvcnRTcHJpdGVzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9mZkd1aWxkXHJcbiAgICAgICAgICAgIC8vIHRoaXMucHV0R2FtZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0sIDMpXHJcbiAgICB9XHJcbiAgICBpc09mZkd1aWxkID0gZmFsc2VcclxuXHJcbiAgICBvZmZHdWlsZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09mZkd1aWxkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc09mZkd1aWxkID0gdHJ1ZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucHV0R2FtZSkudG8oMC4yLCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHV0R2FtZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAvLyB0aGlzLmhhbmRHdWlsZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoXHJcbiAgICAgICAgICAgIDEwODAsXHJcbiAgICAgICAgICAgIDE5MjAsXHJcbiAgICAgICAgICAgIGNjLlJlc29sdXRpb25Qb2xpY3kuU0hPV19BTExcclxuICAgICAgICApO1xyXG4gICAgICAgIEdhbWVNYW5hZ2VyLmlucyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hcHBlYXJlZENhcmRzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRNaXNzaW9uQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2FtZUVuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGF3bkJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TbG90Q29tcGxldGUoY29tcGxldGVkU2xvdCkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBsZXRlZE1pc3Npb25Db3VudCsrO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb21wbGV0ZWRNaXNzaW9uQ291bnQgPj0gdGhpcy5taXNzaW9uc1RvV2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZSh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb21wbGV0ZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgbGV0IG9sZE5vZGUgPSBjb21wbGV0ZWRTbG90Lm5vZGU7XHJcbiAgICAgICAgbGV0IHJvdyA9IG9sZE5vZGUucGFyZW50O1xyXG4gICAgICAgIGxldCBwb3MgPSBvbGROb2RlLnBvc2l0aW9uLmNsb25lKCk7XHJcblxyXG4gICAgICAgIGxldCBuZXdNaXNzaW9uID0gdGhpcy5nZXROZXh0TWlzc2lvbihjb21wbGV0ZWRTbG90Lm1pc3Npb25UeXBlKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Nsb3ROb2RlID0gY2MuaW5zdGFudGlhdGUob2xkTm9kZSk7XHJcblxyXG4gICAgICAgIHJvdy5hZGRDaGlsZChuZXdTbG90Tm9kZSk7XHJcblxyXG4gICAgICAgIG5ld1Nsb3ROb2RlLm5hbWUgPSBcIkNlbnRlclNsb3RcIjtcclxuICAgICAgICBuZXdTbG90Tm9kZS5wb3NpdGlvbiA9IHBvcztcclxuICAgICAgICBuZXdTbG90Tm9kZS5zY2FsZSA9IDA7XHJcblxyXG4gICAgICAgIG9sZE5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICBsZXQgc2xvdCA9IG5ld1Nsb3ROb2RlLmdldENvbXBvbmVudChcIlNsb3RcIik7XHJcblxyXG4gICAgICAgIHNsb3QuaW5pdChuZXdNaXNzaW9uKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4obmV3U2xvdE5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiAxXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV4dE1pc3Npb24oZXhjbHVkZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBnZXROZXh0U3Bhd25NaXNzaW9uKFxyXG4gICAgICAgICAgICBleGNsdWRlLFxyXG4gICAgICAgICAgICB0aGlzLnNwYXduUXVldWVJbmRleFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Bhd25RdWV1ZUluZGV4ID0gcmVzdWx0Lm5leHRJbmRleDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5taXNzaW9uSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25Cb2FyZCgpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMuYm9hcmQuY2hpbGRyZW5baV07XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMubGV2ZWxEYXRhW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkYXRhKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsZWZ0U3RhY2sgPSByb3cuZ2V0Q2hpbGRCeU5hbWUoXCJMZWZ0U3RhY2tcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmlnaHRTdGFjayA9IHJvdy5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0U3RhY2tcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2xvdCA9IHJvdy5nZXRDaGlsZEJ5TmFtZShcIkNlbnRlclNsb3RcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBpbml0IHNsb3RcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5taXNzaW9uKVxyXG4gICAgICAgICAgICBzbG90LmdldENvbXBvbmVudChcIlNsb3RcIilcclxuICAgICAgICAgICAgICAgIC5pbml0KGRhdGEubWlzc2lvbik7XHJcblxyXG4gICAgICAgICAgICAvLyBzcGF3biBzdGFja1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduU3RhY2sobGVmdFN0YWNrLCBkYXRhLmxlZnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zcGF3blN0YWNrKHJpZ2h0U3RhY2ssIGRhdGEucmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGF3blN0YWNrKHBhcmVudDogY2MuTm9kZSwgZGF0YTogYW55W10pIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhcmVudC5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHBhcmVudC5jaGlsZHJlbltpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5nZXRDb21wb25lbnQoXCJDYXJkQmdTbG90XCIpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGluZm8gPSBkYXRhW2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhcmROb2RlID0gdGhpcy5jcmVhdGVDYXJkTm9kZShwYXJlbnQsIGluZm8pO1xyXG5cclxuICAgICAgICAgICAgY2FyZE5vZGUueSA9IGkgKiAyMDtcclxuICAgICAgICAgICAgY2FyZE5vZGUuekluZGV4ID0gaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdGFja0NvbXAgPSBwYXJlbnQuZ2V0Q29tcG9uZW50KFwiQ2FyZFN0YWNrXCIpO1xyXG5cclxuICAgICAgICBzdGFja0NvbXAuaW5pdCh0aGlzKTtcclxuICAgICAgICBzdGFja0NvbXAuc2V0dXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN0YWNrRW1wdHkoc3RhY2spIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUVuZGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBzcGF3bmVkID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YWNrUmVmaWxsQ291bnQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGluZm8gPSB0aGlzLnJhbmRvbUNhcmRJbmZvKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWluZm8pIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhcmROb2RlID0gdGhpcy5jcmVhdGVDYXJkTm9kZShzdGFjay5ub2RlLCBpbmZvKTtcclxuXHJcbiAgICAgICAgICAgIGNhcmROb2RlLnkgPSBpICogMjA7XHJcbiAgICAgICAgICAgIGNhcmROb2RlLnpJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIHNwYXduZWQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YWNrLnNldHVwKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU3Bhd25Qb29sRW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuc3VyZUJnU2xvdChzdGFjayk7XHJcbiAgICAgICAgICAgIHN0YWNrLnNldHVwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3Bhd25lZCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdG9wID0gc3RhY2suY2FyZHNbc3RhY2suY2FyZHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIGlmICh0b3ApIHtcclxuXHJcbiAgICAgICAgICAgIHRvcC5ub2RlLnNjYWxlID0gMDtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRvcC5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMTUsIHtcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNTcGF3blBvb2xFbXB0eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRVbmFwcGVhcmVkQ2FyZE9wdGlvbnMoKS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZW5zdXJlQmdTbG90KHN0YWNrKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jYXJkQmcpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltHYW1lTWFuYWdlcl0gQ2jGsGEgZ8OhbiBwcmVmYWIgY2FyZEJnIHRyb25nIEVkaXRvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YWNrLmJnU2xvdCB8fCBzdGFjay5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oXCJDYXJkQmdTbG90XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBiZ05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRCZyk7XHJcblxyXG4gICAgICAgIHN0YWNrLm5vZGUuYWRkQ2hpbGQoYmdOb2RlLCAwKTtcclxuICAgICAgICBiZ05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgYmdOb2RlLnpJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIGxldCBiZ0NvbXAgPSBiZ05vZGUuZ2V0Q29tcG9uZW50KFwiQ2FyZEJnU2xvdFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFiZ0NvbXApIHtcclxuICAgICAgICAgICAgYmdDb21wID0gYmdOb2RlLmFkZENvbXBvbmVudChcIkNhcmRCZ1Nsb3RcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaWNvbiA9IGJnTm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIik7XHJcblxyXG4gICAgICAgIGlmIChpY29uKSB7XHJcbiAgICAgICAgICAgIGJnQ29tcC5wbGFjZWhvbGRlciA9IGljb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiZ0NvbXAuaW5pdCh0aGlzLCBzdGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2FyZE5vZGUoXHJcbiAgICAgICAgcGFyZW50OiBjYy5Ob2RlLFxyXG4gICAgICAgIGluZm86IHsgdHlwZTogc3RyaW5nOyB2YXJpYW50OiBudW1iZXIgfVxyXG4gICAgKTogY2MuTm9kZSB7XHJcblxyXG4gICAgICAgIGxldCBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkUHJlZmFiKTtcclxuXHJcbiAgICAgICAgcGFyZW50LmFkZENoaWxkKGNhcmQpO1xyXG5cclxuICAgICAgICBsZXQgY2FyZENvbXAgPSBjYXJkLmdldENvbXBvbmVudChcIkNhcmRcIik7XHJcblxyXG4gICAgICAgIGNhcmRDb21wLmNhcmRUeXBlID0gaW5mby50eXBlO1xyXG5cclxuICAgICAgICBjYXJkQ29tcC52YXJpYW50ID0gaW5mby52YXJpYW50O1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtDYXJkQXBwZWFyZWQoaW5mby50eXBlLCBpbmZvLnZhcmlhbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnNldENhcmRWaXN1YWwoXHJcbiAgICAgICAgICAgIGNhcmQsXHJcbiAgICAgICAgICAgIGluZm8udHlwZSxcclxuICAgICAgICAgICAgaW5mby52YXJpYW50XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQ2FyZEluZm8oKTogeyB0eXBlOiBzdHJpbmc7IHZhcmlhbnQ6IG51bWJlciB9IHtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmdldFVuYXBwZWFyZWRDYXJkT3B0aW9ucygpO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gb3B0aW9uc1tcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3B0aW9ucy5sZW5ndGgpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBjYXJkS2V5KHR5cGU6IHN0cmluZywgdmFyaWFudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7dHlwZX06JHt2YXJpYW50fWA7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0NhcmRBcHBlYXJlZCh0eXBlOiBzdHJpbmcsIHZhcmlhbnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYXBwZWFyZWRDYXJkcy5hZGQodGhpcy5jYXJkS2V5KHR5cGUsIHZhcmlhbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDYXJkQXBwZWFyZWQodHlwZTogc3RyaW5nLCB2YXJpYW50OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHBlYXJlZENhcmRzLmhhcyh0aGlzLmNhcmRLZXkodHlwZSwgdmFyaWFudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDaOG7iSBjw6FjIHRo4bq7ICh0eXBlICsgdmFyaWFudCkgY2jGsGEgdOG7q25nIHNwYXduIC8gc2V0dXAgKi9cclxuICAgIGdldFVuYXBwZWFyZWRDYXJkT3B0aW9ucygpOiB7IHR5cGU6IHN0cmluZzsgdmFyaWFudDogbnVtYmVyIH1bXSB7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zOiB7IHR5cGU6IHN0cmluZzsgdmFyaWFudDogbnVtYmVyIH1bXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0eXBlIG9mIHRoaXMuZ2V0U3Bhd25hYmxlVHlwZXMoKSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNwcml0ZXMgPSB0aGlzLnNwcml0ZU1hcFt0eXBlXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHYgPSAxOyB2IDw9IHNwcml0ZXMubGVuZ3RoOyB2KyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzQ2FyZEFwcGVhcmVkKHR5cGUsIHYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHsgdHlwZSwgdmFyaWFudDogdiB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Bhd25hYmxlVHlwZXMoKTogc3RyaW5nW10ge1xyXG5cclxuICAgICAgICByZXR1cm4gZ2V0TWlzc2lvbklkcygpLmZpbHRlcihpZCA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwW2lkXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzcHJpdGVzICYmIHNwcml0ZXMubGVuZ3RoID4gMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRHYW1lKHZhbHVlKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVFbmRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTG9zZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBoYW9ob2EuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZUVuZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcblxyXG4gICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgbGV0IGdhbWVEb251dCA9IGNhbnZhcy5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIikgYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoZ2FtZURvbnV0ICYmIGdhbWVEb251dC5vbkVuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVEb251dC5vbkVuZEdhbWUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmxvZyhcIltHYW1lTWFuYWdlcl0gSG/DoG4gdGjDoG5oXCIsIHRoaXMubWlzc2lvbnNUb1dpbiwgXCJtaXNzaW9uIOKAlCBr4bq/dCB0aMO6YyBnYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmRWaXN1YWwoXHJcbiAgICAgICAgY2FyZDogY2MuTm9kZSxcclxuICAgICAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICAgICAgdmFyaWFudDogbnVtYmVyXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgbGV0IGZyb250ID0gY2FyZC5nZXRDaGlsZEJ5TmFtZShcImZyb250XCIpO1xyXG5cclxuICAgICAgICBsZXQgaWNvbiA9IGZyb250XHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImljb25cIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGJUaXRsZSA9IGZyb250XHJcbiAgICAgICAgLy8gICAgIC5nZXRDaGlsZEJ5TmFtZShcImxiVGl0bGVcIilcclxuICAgICAgICAvLyAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIC8vIGxiVGl0bGUuc3RyaW5nID0gdGhpcy5nZXRDYXJkTmFtZSh0eXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YXJpYW50LCB0eXBlKVxyXG4gICAgICAgIHZhcmlhbnQgLT0gMTtcclxuXHJcbiAgICAgICAgbGV0IHNwcml0ZXMgPSB0aGlzLnNwcml0ZU1hcFt0eXBlXTtcclxuXHJcbiAgICAgICAgaWYgKCFzcHJpdGVzIHx8ICFzcHJpdGVzW3ZhcmlhbnRdKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oYFtHYW1lTWFuYWdlcl0gVGhp4bq/dSBzcHJpdGU6IHR5cGU9JHt0eXBlfSwgdmFyaWFudD0ke3ZhcmlhbnQgKyAxfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gc3ByaXRlc1t2YXJpYW50XTtcclxuICAgICAgICB0aGlzLmZpdEljb25Ub0NhcmQoaWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZml0SWNvblRvQ2FyZChpY29uOiBjYy5TcHJpdGUpIHtcclxuXHJcbiAgICAgICAgaWYgKCFpY29uIHx8ICFpY29uLnNwcml0ZUZyYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgIGljb24uc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgIGljb24ubm9kZS5zZXRTY2FsZSgwLjkpO1xyXG5cclxuICAgICAgICBsZXQgZnJvbnQgPSBpY29uLm5vZGUucGFyZW50O1xyXG4gICAgICAgIGlmICghZnJvbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IG1heFdpZHRoID0gZnJvbnQud2lkdGggKiB0aGlzLmljb25GaWxsUmF0aW87XHJcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IGZyb250LmhlaWdodCAqIHRoaXMuaWNvbkZpbGxSYXRpbztcclxuXHJcbiAgICAgICAgbGV0IHJlY3QgPSBpY29uLnNwcml0ZUZyYW1lLmdldFJlY3QoKTtcclxuICAgICAgICBsZXQgc2NhbGUgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgbWF4V2lkdGggLyByZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQgLyByZWN0LmhlaWdodFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGljb24ubm9kZS5zZXRDb250ZW50U2l6ZShcclxuICAgICAgICAgICAgcmVjdC53aWR0aCAqIHNjYWxlLFxyXG4gICAgICAgICAgICByZWN0LmhlaWdodCAqIHNjYWxlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJkTmFtZSh0eXBlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdldE1pc3Npb25UaXRsZSh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21UeXBlKCkge1xyXG5cclxuICAgICAgICBsZXQgaWRzID0gZ2V0TWlzc2lvbklkcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gaWRzW1xyXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpZHMubGVuZ3RoKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG59Il19