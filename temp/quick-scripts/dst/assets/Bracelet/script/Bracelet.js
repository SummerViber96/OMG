
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bracelet/script/Bracelet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        cc.view.setDesignResolutionSize(1080, 1920, cc.ResolutionPolicy.SHOW_ALL);
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
            this.title.string = "Let's make a Pink Bracelets!";
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
        this.title.string = "Let's make a Pink Bracelets!";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQnJhY2VsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDeEIsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1VkM7UUFyVkcsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFHN0IsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRzFCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsV0FBSyxHQUFhLElBQUksQ0FBQTtRQUV0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixxQkFBcUI7UUFDckIsV0FBVztRQUNYLGNBQVEsR0FBRyw4QkFBOEIsQ0FBQTtRQUV6QywyQkFBcUIsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuQyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFFN0IsNkVBQTZFO1FBRTdFLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLDZEQUE2RDtRQUU3RCxnQkFBVSxHQUFXLENBQUMsQ0FBQzs7UUEwUnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBelJHLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUMzQixJQUFJLEVBQ0osSUFBSSxFQUNKLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQy9CLENBQUM7UUFDRixFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNsRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxXQUFXLEVBQUU7WUFDOUIsTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUV0QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBRTdDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxzQ0FBbUIsR0FBbkIsVUFBb0IsTUFBa0IsRUFBRSxTQUEwQjtRQUFsRSxpQkE2RUM7UUE3RW1CLHVCQUFBLEVBQUEsVUFBa0I7UUFBRSwwQkFBQSxFQUFBLGdCQUEwQjtRQUM5RCxVQUFVLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUU3QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM3QjtRQUVELGtFQUFrRTtRQUNsRSxJQUFJLFNBQVMsR0FBUSxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFO2dCQUN2RCxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDeEI7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsSUFBSSxHQUFHO2dCQUFFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQy9CO1FBRUQsb0JBQW9CO1FBQ3BCLGdDQUFnQztRQUNoQyxnREFBZ0Q7UUFDaEQsZ0NBQWdDO1FBQ2hDLElBQUk7UUFDSixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyw4QkFBOEIsQ0FBQztTQUN0RDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsYUFBYSxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNFLElBQUksWUFBWSxFQUFFO2dCQUNkLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixZQUFZLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzthQUM5QjtZQUNELElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxhQUFhLElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFRLENBQUM7WUFDL0YsSUFBSSxRQUFRLElBQUksT0FBTyxRQUFRLENBQUMsaUJBQWlCLEtBQUssVUFBVSxFQUFFO2dCQUM5RCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUNoQztZQUNELEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRXpCLG9FQUFvRTtZQUNwRSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxrQkFBa0IsS0FBSyxVQUFVLEVBQUU7Z0JBQ2pFLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQztZQUVELElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDbkU7YUFDSjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFHRCxnQ0FBYSxHQUFiO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNuQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUN6RixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQy9DLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUMxQixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDZCxDQUFDO0lBQ0QsMkJBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRTlDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDNUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFBO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUU3QixDQUFDO0lBQ0QsNEJBQVMsR0FBVCxVQUFVLEtBQUs7UUFBZixpQkFrQkM7UUFqQkcsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUM5QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUU5QyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzVDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMvQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xELEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNwRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyw4QkFBOEIsQ0FBQTtRQUNsRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFFWCxDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLG9DQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDeEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxZQUFZLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkQsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDM0IsWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDeEQsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEUsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDaEM7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0lBRUwsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQWYsaUJBdUJDO1FBdEJHLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFOUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM1QyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEUsSUFBSSxRQUFRLEVBQUU7WUFDVixRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMvQixRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hGO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztZQUNoQyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3ZFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pELEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBQ0QsZ0NBQWEsR0FBYixVQUFjLEtBQUssRUFBRSxLQUFLO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUU5QyxLQUFrQixVQUFxQixFQUFyQixLQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFyQixjQUFxQixFQUFyQixJQUFxQixFQUFFO1lBQXBDLElBQUksS0FBSyxTQUFBO1lBQ1YsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDM0QsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUUzRCxNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRTNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsS0FBSztRQUFiLGlCQWtCQztRQWpCRyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRTlDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDNUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEUsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ2pGO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRTVDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUNPLHNDQUFtQixHQUEzQixVQUE0QixhQUFxQixFQUFFLFFBQW9CO1FBQXZFLGlCQVlDO1FBWmtELHlCQUFBLEVBQUEsWUFBb0I7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixPQUFPO1NBQ1Y7UUFDRCxJQUFNLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUNaLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQUU7WUFDcEMsUUFBUSxFQUFFO2dCQUNOLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDMUUsQ0FBQztTQUNKLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMscUJBQXFCLElBQUksQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUE7U0FDOUI7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQWxWRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNNO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDSztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNHO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBVTNCO1FBREMsUUFBUTtxREFDdUI7SUFJaEM7UUFEQyxRQUFRO2dEQUNjO0lBNUROLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1VjVCO0lBQUQsZUFBQztDQXZWRCxBQXVWQyxDQXZWcUMsRUFBRSxDQUFDLFNBQVMsR0F1VmpEO2tCQXZWb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImdsb2JhbFRoaXMuaWRTdHJpbmcgPSAwO1xyXG5nbG9iYWxUaGlzLmlkQ2hhcm0gPSAwO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjZW5lMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RyaW5nTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXRlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDM6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJtTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aXRsZTogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDb3JkUm91bmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdHJpbmdCb3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0S2V5OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UGV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRHYW1lTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9rNDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb2hvOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJnTmVuOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB2b25nRGVmYXVsdDogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbGlzdENhcmRcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcblxyXG4gICAgc2VsZWN0ZWRLZXljaGFpbkluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIGxhc3RNYXRjaFBlcmNlbnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqIHRydWUgPSB2w6BvIGdhbWUgdGjhurNuZyBtw6BuIGvDqW8gY2hhcm0gdGjhuqMgdsOybmcgKGPDsyBjaGFybSBz4bq1biB0csOqbiBraGF5KS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgb3BlbkF0Q2hhcm1Ecm9wOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogaWQgZMOieSBraGkgc2tpcCB2w6BvIG3DoG4gdGjhuqMgY2hhcm0gKDA9xJFlbiDigKYgND1ncmVlbiDigKYpLiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBza2lwQ29yZElkOiBudW1iZXIgPSA0O1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKFxyXG4gICAgICAgICAgICAxMDgwLFxyXG4gICAgICAgICAgICAxOTIwLFxyXG4gICAgICAgICAgICBjYy5SZXNvbHV0aW9uUG9saWN5LlNIT1dfQUxMXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKCk7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy52aWV3LnNldE9yaWVudGF0aW9uKGNjLm1hY3JvLk9SSUVOVEFUSU9OX1BPUlRSQUlUKTtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG4gICAgICAgIGNjLmdhbWUuc2V0RnJhbWVSYXRlKDYwKTtcclxuICAgICAgICBpZiAodGhpcy5vcGVuQXRDaGFybURyb3ApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3BlbkNoYXJtRHJvcFNjcmVlbih0aGlzLnNraXBDb3JkSWQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBN4bufIHRo4bqzbmcgbcOgbiBrw6lvIGNoYXJtIHRo4bqjIHbDoG8gdsOybmcgKyBzcGF3biBjaGFybSBz4bq1biB0csOqbiBraGF5LlxyXG4gICAgICogQHBhcmFtIGNvcmRJZCBpZCBkw6J5IChnbG9iYWxUaGlzLmlkU3RyaW5nKVxyXG4gICAgICogQHBhcmFtIGNoYXJtVGFncyBkYW5oIHPDoWNoIHRhZyBjaGFybSBzcGF3bjsgbnVsbCA9IG3hurdjIMSR4buLbmhcclxuICAgICAqL1xyXG4gICAgb3BlbkNoYXJtRHJvcFNjcmVlbihjb3JkSWQ6IG51bWJlciA9IDAsIGNoYXJtVGFnczogbnVtYmVyW10gPSBudWxsKSB7XHJcbiAgICAgICAgZ2xvYmFsVGhpcy5pZFN0cmluZyA9IGNvcmRJZDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUxLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lMS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RyaW5nTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0cmluZ05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhhbmQyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBU4bqvdCBjaGFybU5vZGUgdHLGsOG7m2MgxJHhu4MgdHLDoW5oIENoYXJtR2FtZS5zdGFydCgpIGfhuq9uIHRvdWNoIHNwb29uLlxyXG4gICAgICAgIGxldCBjaGFybUdhbWU6IGFueSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcm1Ob2RlKSB7XHJcbiAgICAgICAgICAgIGNoYXJtR2FtZSA9IHRoaXMuY2hhcm1Ob2RlLmdldENvbXBvbmVudCgnQ2hhcm1HYW1lJyk7XHJcbiAgICAgICAgICAgIGlmIChjaGFybUdhbWUgJiYgdHlwZW9mIGNoYXJtR2FtZS5PZmZFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgY2hhcm1HYW1lLk9mZkV2ZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGFybU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcm1Ob2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJnTmVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmdOZW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5iZ05lbi5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52b25nRGVmYXVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLnZvbmdEZWZhdWx0LnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgdGhpcy52b25nRGVmYXVsdC5zZXRQb3NpdGlvbihjYy52MygzMzAsIDgyMCwgMCkpO1xyXG4gICAgICAgICAgICB0aGlzLnZvbmdEZWZhdWx0LnNjYWxlID0gMC4yODtcclxuICAgICAgICAgICAgY29uc3QgYnRuID0gdGhpcy52b25nRGVmYXVsdC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgaWYgKGJ0bikgYnRuLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMucGxhdGUpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF0ZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXRlLnNldFBvc2l0aW9uKGNjLnYzKDAsIDEwMCwgMCkpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJyaW5nUGxhdGVUb0Zyb250KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh0aGlzLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCJMZXQncyBtYWtlIGEgUGluayBCcmFjZWxldHMhXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0cmluZ0JvdCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0cmluZ0JvdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBnbG9iYWxUaGlzLmlkU3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJpbmdBcm91bmQgPSB0aGlzLmxpc3RDb3JkUm91bmQgJiYgdGhpcy5saXN0Q29yZFJvdW5kLmNoaWxkcmVuW2lkXTtcclxuICAgICAgICAgICAgaWYgKHN0cmluZ0Fyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nQXJvdW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmdBcm91bmQub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb3JkR2FtZSA9IHRoaXMubGlzdENvcmRSb3VuZCAmJiB0aGlzLmxpc3RDb3JkUm91bmQuZ2V0Q29tcG9uZW50KCdDb3JkUm91bmRHYW1lJykgYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoY29yZEdhbWUgJiYgdHlwZW9mIGNvcmRHYW1lLnN0YXJ0QnJhY2VsZXRNb2RlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBjb3JkR2FtZS5zdGFydEJyYWNlbGV0TW9kZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYnJpbmdQbGF0ZVRvRnJvbnQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNwYXduIHNhdSBraGkgc2NlbmUyICsgYnJhY2VsZXQgbW9kZSDEkcOjIHPhurVuIHPDoG5nIChwaHlzaWNzL3RvdWNoKS5cclxuICAgICAgICAgICAgaWYgKGNoYXJtR2FtZSAmJiB0eXBlb2YgY2hhcm1HYW1lLnNwYXduQ2hhcm1zT25QbGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgY2hhcm1HYW1lLnNwYXduQ2hhcm1zT25QbGF0ZShjaGFybVRhZ3MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kMy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFuZDMucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kMy5zZXRTaWJsaW5nSW5kZXgodGhpcy5oYW5kMy5wYXJlbnQuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC4wNSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJ0bl9zdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmJnTmVuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iZ05lbi5vcGFjaXR5ID0gMDtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJnTmVuKS50bygwLjQsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLnZvbmdEZWZhdWx0LnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudm9uZ0RlZmF1bHQpLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoMzMwLCA4MjAsIDApLCBzY2FsZTogMC4yOCB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zY2VuZTEpLnRvKDAuNCwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy52b25nRGVmYXVsdC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBidG5fY29yZChldmVudCkge1xyXG4gICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zdHJpbmdOb2RlKS50bygwLjQsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zdHJpbmdOb2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jaGFybU5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCJDSE9PU0UgQ0hBUk1TXCJcclxuICAgICAgICB0aGlzLmhhbmQzLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgfVxyXG4gICAgYnRuX2NvcmQyKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0cmluZ05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFybU5vZGUpLnRvKDAuNCwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJtTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5wbGF0ZSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygwLCAxMDAsIDApIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmJyaW5nUGxhdGVUb0Zyb250KCk7XHJcbiAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSBcIkxldCdzIG1ha2UgYSBQaW5rIEJyYWNlbGV0cyFcIlxyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lMigpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kMy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDAuNClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIMSQxrBhIGtoYXkgKHBsYXRlKSArIGNoYXJtIGzDqm4gdHLDqm4gY8O5bmcgxJHhu4Mga2jDtG5nIGLhu4sgdsOybmcgY2hlLiAqL1xyXG4gICAgYnJpbmdQbGF0ZVRvRnJvbnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wbGF0ZS5wYXJlbnQ7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnBsYXRlLnNldFNpYmxpbmdJbmRleChwYXJlbnQuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZTIoKSB7XHJcbiAgICAgICAgbGV0IGlkID0gZ2xvYmFsVGhpcy5pZFN0cmluZztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlkXCIsIGlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3RyaW5nQXJvdW5kID0gdGhpcy5saXN0Q29yZFJvdW5kLmNoaWxkcmVuW2lkXTtcclxuICAgICAgICAgICAgc3RyaW5nQXJvdW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHN0cmluZ0Fyb3VuZC5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jaGFybU5vZGUuZ2V0Q29tcG9uZW50KFwiQ2hhcm1HYW1lXCIpLk9mZkV2ZW50KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHN0cmluZ0Fyb3VuZCkudG8oMC40LCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvcmRHYW1lID0gdGhpcy5saXN0Q29yZFJvdW5kLmdldENvbXBvbmVudChcIkNvcmRSb3VuZEdhbWVcIik7XHJcbiAgICAgICAgICAgIGlmIChjb3JkR2FtZSkge1xyXG4gICAgICAgICAgICAgICAgY29yZEdhbWUuc3RhcnRCcmFjZWxldE1vZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuNClcclxuICAgICAgICBpZiAodGhpcy5zdHJpbmdCb3QpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHJpbmdCb3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGJ0bl9jb3JkMyhldmVudCkge1xyXG4gICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wbGF0ZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgY29yZEdhbWUgPSB0aGlzLmxpc3RDb3JkUm91bmQuZ2V0Q29tcG9uZW50KFwiQ29yZFJvdW5kR2FtZVwiKTtcclxuICAgICAgICBpZiAoY29yZEdhbWUpIHtcclxuICAgICAgICAgICAgY29yZEdhbWUuZmluaXNoQnJhY2VsZXRQaGFzZSgpO1xyXG4gICAgICAgICAgICBjb3JkR2FtZS5saWZ0QnJhY2VsZXQoY2MudjMoMCwgMjMwLCAwKSwgMC40KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RDb3JkUm91bmQpLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMjMwLCAwKSB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCJLRVkgQ0hBSU5cIjtcclxuICAgICAgICAgICAgbGV0IGxvY2sgPSB0aGlzLmxpc3RDb3JkUm91bmQuY2hpbGRyZW5bZ2xvYmFsVGhpcy5pZFN0cmluZ10uY2hpbGRyZW5bMl1cclxuICAgICAgICAgICAgbG9jay5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgbG9jay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbihsb2NrKS50bygwLjQsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEtleS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDAuOClcclxuICAgIH1cclxuICAgIGJ0bl9jaG9zZUNhcmQoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEtleWNoYWluSW5kZXggPSBwYXJzZUludCh2YWx1ZSwgMTApO1xyXG4gICAgICAgIHRoaXMuYnRuT2s0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RQZXQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFuZENhcmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UGV0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RQZXQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RQZXQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBldC5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RQZXQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBldC5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnRuX29rNChldmVudCkge1xyXG4gICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcmRHYW1lID0gdGhpcy5saXN0Q29yZFJvdW5kLmdldENvbXBvbmVudChcIkNvcmRSb3VuZEdhbWVcIik7XHJcbiAgICAgICAgaWYgKGNvcmRHYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdE1hdGNoUGVyY2VudCA9IGNvcmRHYW1lLmZpbmlzaEFuZENvbXBhcmUodGhpcy5zZWxlY3RlZEtleWNoYWluSW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5waGFvaG8uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZSgpO1xyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFuaW1hdGVNYXRjaFBlcmNlbnQodGFyZ2V0UGVyY2VudDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIGlmICghdGhpcy50aXRsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSB7IHZhbHVlOiAwIH07XHJcbiAgICAgICAgY2MudHdlZW4oY291bnRlcilcclxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHZhbHVlOiB0YXJnZXRQZXJjZW50IH0sIHtcclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSBcIkNPTVBMRVRFICDigKIgIFwiICsgTWF0aC5yb3VuZChjb3VudGVyLnZhbHVlKSArIFwiJVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRHYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkS2V5Y2hhaW5JbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdE1hdGNoUGVyY2VudCArPSAzMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW1hdGVNYXRjaFBlcmNlbnQodGhpcy5sYXN0TWF0Y2hQZXJjZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19