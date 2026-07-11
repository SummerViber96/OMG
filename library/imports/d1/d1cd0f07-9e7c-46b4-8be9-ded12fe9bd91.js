"use strict";
cc._RF.push(module, 'd1cd08HnnxGtIvp3tEv6b2R', 'Bracelet');
// Bracelet/script/Bracelet.ts

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
globalThis.idString = 0;
globalThis.idCharm = 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundWin = null;
        _this.scene1 = null;
        _this.scene2 = null;
        _this.stringNode = null;
        _this.plate = null;
        _this.hand2 = null;
        _this.hand3 = null;
        _this.charmNode = null;
        _this.soundBg = null;
        _this.title = null;
        _this.listCordRound = null;
        _this.stringBot = null;
        _this.listKey = null;
        _this.listPet = null;
        _this.endGameNode = null;
        _this.linkToStore = null;
        _this.btnOk4 = null;
        _this.phaoho = null;
        _this.soundClick = null;
        _this.handCard = null;
        _this.bgNen = null;
        _this.vongDefault = null;
        // @property(cc.Node)
        // listCard
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.selectedKeychainIndex = -1;
        _this.lastMatchPercent = 0;
        /** true = vào game thẳng màn kéo charm thả vòng (có charm sẵn trên khay). */
        _this.openAtCharmDrop = true;
        /** id dây khi skip vào màn thả charm (0=đen … 4=green …). */
        _this.skipCordId = 4;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2();
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    };
    NewClass.prototype.start = function () {
        cc.audioEngine.play(this.soundBg, true, 0.5);
        cc.game.setFrameRate(60);
        if (this.openAtCharmDrop) {
            this.openCharmDropScreen(this.skipCordId);
        }
    };
    /**
     * Mở thẳng màn kéo charm thả vào vòng + spawn charm sẵn trên khay.
     * @param cordId id dây (globalThis.idString)
     * @param charmTags danh sách tag charm spawn; null = mặc định
     */
    NewClass.prototype.openCharmDropScreen = function (cordId, charmTags) {
        var _this = this;
        if (cordId === void 0) { cordId = 0; }
        if (charmTags === void 0) { charmTags = null; }
        globalThis.idString = cordId;
        if (this.scene1) {
            this.scene1.active = false;
            this.scene1.opacity = 0;
        }
        if (this.stringNode) {
            this.stringNode.active = false;
        }
        if (this.hand2) {
            this.hand2.active = false;
        }
        // Tắt charmNode trước để tránh CharmGame.start() gắn touch spoon.
        var charmGame = null;
        if (this.charmNode) {
            charmGame = this.charmNode.getComponent('CharmGame');
            if (charmGame && typeof charmGame.OffEvent === 'function') {
                charmGame.OffEvent();
            }
            this.charmNode.active = false;
            this.charmNode.opacity = 0;
        }
        if (this.scene2) {
            this.scene2.active = true;
        }
        if (this.bgNen) {
            this.bgNen.active = true;
            this.bgNen.opacity = 255;
        }
        if (this.vongDefault) {
            this.vongDefault.parent = this.node;
            this.vongDefault.setPosition(cc.v3(330, 820, 0));
            this.vongDefault.scale = 0.28;
            var btn = this.vongDefault.getComponent(cc.Button);
            if (btn)
                btn.enabled = true;
        }
        // if (this.plate) {
        //     this.plate.active = true;
        //     this.plate.setPosition(cc.v3(0, 100, 0));
        //     this.bringPlateToFront();
        // }
        if (this.title) {
            this.title.string = 'MAKE BRACELET';
        }
        if (this.stringBot) {
            this.stringBot.active = false;
        }
        this.scheduleOnce(function () {
            var id = globalThis.idString;
            var stringAround = _this.listCordRound && _this.listCordRound.children[id];
            if (stringAround) {
                stringAround.active = true;
                stringAround.opacity = 255;
            }
            var cordGame = _this.listCordRound && _this.listCordRound.getComponent('CordRoundGame');
            if (cordGame && typeof cordGame.startBraceletMode === 'function') {
                cordGame.startBraceletMode();
            }
            _this.bringPlateToFront();
            // Spawn sau khi scene2 + bracelet mode đã sẵn sàng (physics/touch).
            if (charmGame && typeof charmGame.spawnCharmsOnPlate === 'function') {
                charmGame.spawnCharmsOnPlate(charmTags);
            }
            if (_this.hand3) {
                _this.hand3.active = true;
                if (_this.hand3.parent) {
                    _this.hand3.setSiblingIndex(_this.hand3.parent.childrenCount - 1);
                }
            }
        }, 0.05);
    };
    NewClass.prototype.btn_startGame = function () {
        var _this = this;
        this.scene2.active = true;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.bgNen.active = true;
        this.bgNen.opacity = 0;
        cc.tween(this.bgNen).to(0.4, { opacity: 255 }).start();
        this.vongDefault.parent = this.node;
        cc.tween(this.vongDefault).to(0.4, { position: cc.v3(330, 820, 0), scale: 0.28 }).start();
        cc.tween(this.scene1).to(0.4, { opacity: 0 }).call(function () {
            _this.scene1.active = false;
            _this.hand2.active = true;
            _this.vongDefault.getComponent(cc.Button).enabled = true;
        }).start();
    };
    NewClass.prototype.btn_cord = function (event) {
        var btn = event.currentTarget;
        cc.audioEngine.play(this.soundClick, false, 1);
        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;
        cc.tween(this.stringNode).to(0.4, { opacity: 0 }).start();
        this.stringNode.active = false;
        this.charmNode.active = true;
        this.title.string = "CHOOSE CHARMS";
        this.hand3.active = true;
    };
    NewClass.prototype.btn_cord2 = function (event) {
        var _this = this;
        var btn = event.currentTarget;
        cc.audioEngine.play(this.soundClick, false, 1);
        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;
        this.stringNode.active = false;
        cc.tween(this.charmNode).to(0.4, { opacity: 0 }).call(function () {
            _this.charmNode.active = false;
        }).start();
        cc.tween(this.plate).to(0.4, { position: cc.v3(0, 100, 0) }).start();
        this.bringPlateToFront();
        this.title.string = "MAKE BRACELET";
        this.startGame2();
        this.scheduleOnce(function () {
            _this.hand3.active = true;
        }, 0.4);
    };
    /** Đưa khay (plate) + charm lên trên cùng để không bị vòng che. */
    NewClass.prototype.bringPlateToFront = function () {
        if (!this.plate)
            return;
        var parent = this.plate.parent;
        if (!parent)
            return;
        this.plate.setSiblingIndex(parent.childrenCount - 1);
    };
    NewClass.prototype.startGame2 = function () {
        var _this = this;
        var id = globalThis.idString;
        console.log("id", id);
        this.scheduleOnce(function () {
            var stringAround = _this.listCordRound.children[id];
            stringAround.active = true;
            stringAround.opacity = 0;
            _this.charmNode.getComponent("CharmGame").OffEvent();
            cc.tween(stringAround).to(0.4, { opacity: 255 }).start();
            var cordGame = _this.listCordRound.getComponent("CordRoundGame");
            if (cordGame) {
                cordGame.startBraceletMode();
            }
        }, 0.4);
        if (this.stringBot) {
            this.stringBot.active = false;
        }
    };
    NewClass.prototype.btn_cord3 = function (event) {
        var _this = this;
        var btn = event.currentTarget;
        cc.audioEngine.play(this.soundClick, false, 1);
        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;
        this.plate.active = false;
        var cordGame = this.listCordRound.getComponent("CordRoundGame");
        if (cordGame) {
            cordGame.finishBraceletPhase();
            cordGame.liftBracelet(cc.v3(0, 230, 0), 0.4);
        }
        else {
            cc.tween(this.listCordRound).to(0.4, { position: cc.v3(0, 230, 0) }).start();
        }
        this.scheduleOnce(function () {
            _this.title.string = "KEY CHAIN";
            var lock = _this.listCordRound.children[globalThis.idString].children[2];
            lock.opacity = 0;
            lock.active = true;
            cc.tween(lock).to(0.4, { opacity: 255 }).start();
            _this.listKey.active = true;
        }, 0.8);
    };
    NewClass.prototype.btn_choseCard = function (event, value) {
        this.selectedKeychainIndex = parseInt(value, 10);
        this.btnOk4.active = true;
        cc.audioEngine.play(this.soundClick, false, 1);
        for (var _i = 0, _a = this.listPet.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.active = false;
        }
        this.handCard.active = false;
        switch (value) {
            case "0":
                this.listPet.children[0].active = true;
                this.listPet.children[0].getComponent(cc.Animation).play();
                break;
            case "1":
                this.listPet.children[1].active = true;
                this.listPet.children[1].getComponent(cc.Animation).play();
                break;
            case "2":
                this.listPet.children[2].active = true;
                this.listPet.children[2].getComponent(cc.Animation).play();
                break;
        }
    };
    NewClass.prototype.btn_ok4 = function (event) {
        var _this = this;
        var btn = event.currentTarget;
        cc.audioEngine.play(this.soundClick, false, 1);
        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;
        var cordGame = this.listCordRound.getComponent("CordRoundGame");
        if (cordGame) {
            this.lastMatchPercent = cordGame.finishAndCompare(this.selectedKeychainIndex);
        }
        this.phaoho.active = true;
        cc.audioEngine.play(this.soundWin, false, 1);
        this.scheduleOnce(function () {
            _this.endGame();
        }, 2);
    };
    NewClass.prototype.animateMatchPercent = function (targetPercent, duration) {
        var _this = this;
        if (duration === void 0) { duration = 1; }
        if (!this.title) {
            return;
        }
        var counter = { value: 0 };
        cc.tween(counter)
            .to(duration, { value: targetPercent }, {
            onUpdate: function () {
                _this.title.string = "COMPLETE  •  " + Math.round(counter.value) + "%";
            }
        })
            .start();
    };
    NewClass.prototype.endGame = function () {
        var _this = this;
        if (this.selectedKeychainIndex == 1) {
            this.lastMatchPercent += 30;
        }
        this.animateMatchPercent(this.lastMatchPercent);
        this.scheduleOnce(function () {
            _this.endGameNode.active = true;
            _this.linkToStore.active = true;
        }, 1);
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "stringNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "plate", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "charmNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "title", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCordRound", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "stringBot", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKey", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listPet", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endGameNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnOk4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaoho", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bgNen", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "vongDefault", void 0);
    __decorate([
        property
    ], NewClass.prototype, "openAtCharmDrop", void 0);
    __decorate([
        property
    ], NewClass.prototype, "skipCordId", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();