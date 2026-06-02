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