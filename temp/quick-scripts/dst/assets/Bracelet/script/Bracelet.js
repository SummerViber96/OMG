
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
        cc.tween(this.plate).to(0.4, { position: cc.v3(0, 230, 0) }).start();
        this.title.string = "MAKE BRACELET";
        this.startGame2();
        this.scheduleOnce(function () {
            _this.hand3.active = true;
        }, 0.4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQnJhY2VsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDeEIsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1T0M7UUFyT0csY0FBUSxHQUFpQixJQUFJLENBQUE7UUFHN0IsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRzFCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsV0FBSyxHQUFhLElBQUksQ0FBQTtRQUV0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixxQkFBcUI7UUFDckIs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QUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQTlDVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdU81QjtJQUFELGVBQUM7Q0F2T0QsQUF1T0MsQ0F2T3FDLEVBQUUsQ0FBQyxTQUFTLEdBdU9qRDtrQkF2T29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJnbG9iYWxUaGlzLmlkU3RyaW5nID0gMDtcclxuZ2xvYmFsVGhpcy5pZENoYXJtID0gMDtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NlbmUxOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHN0cmluZ05vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF0ZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQzOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFybU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGl0bGU6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q29yZFJvdW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RyaW5nQm90OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtleTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFBldDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kR2FtZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5PazQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBoYW9obzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmRDYXJkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZ05lbjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdm9uZ0RlZmF1bHQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RDYXJkXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG5cclxuICAgIHNlbGVjdGVkS2V5Y2hhaW5JbmRleDogbnVtYmVyID0gLTE7XHJcbiAgICBsYXN0TWF0Y2hQZXJjZW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKCk7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy52aWV3LnNldE9yaWVudGF0aW9uKGNjLm1hY3JvLk9SSUVOVEFUSU9OX1BPUlRSQUlUKTtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG4gICAgICAgIGNjLmdhbWUuc2V0RnJhbWVSYXRlKDYwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYnRuX3N0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuYmdOZW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJnTmVuLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYmdOZW4pLnRvKDAuNCwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMudm9uZ0RlZmF1bHQucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy52b25nRGVmYXVsdCkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygzMzAsIDgyMCwgMCksIHNjYWxlOiAwLjI4IH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNjZW5lMSkudG8oMC40LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUxLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnZvbmdEZWZhdWx0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGJ0bl9jb3JkKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnN0cmluZ05vZGUpLnRvKDAuNCwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLnN0cmluZ05vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNoYXJtTm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSBcIkNIT09TRSBDSEFSTVNcIlxyXG4gICAgICAgIHRoaXMuaGFuZDMuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbiAgICBidG5fY29yZDIoZXZlbnQpIHtcclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RyaW5nTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXJtTm9kZSkudG8oMC40LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcm1Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnBsYXRlKS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKDAsIDIzMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCJNQUtFIEJSQUNFTEVUXCJcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZTIoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCAwLjQpXHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lMigpIHtcclxuICAgICAgICBsZXQgaWQgPSBnbG9iYWxUaGlzLmlkU3RyaW5nO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWRcIiwgaWQpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdHJpbmdBcm91bmQgPSB0aGlzLmxpc3RDb3JkUm91bmQuY2hpbGRyZW5baWRdO1xyXG4gICAgICAgICAgICBzdHJpbmdBcm91bmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3RyaW5nQXJvdW5kLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJtTm9kZS5nZXRDb21wb25lbnQoXCJDaGFybUdhbWVcIikuT2ZmRXZlbnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4oc3RyaW5nQXJvdW5kKS50bygwLjQsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY29uc3QgY29yZEdhbWUgPSB0aGlzLmxpc3RDb3JkUm91bmQuZ2V0Q29tcG9uZW50KFwiQ29yZFJvdW5kR2FtZVwiKTtcclxuICAgICAgICAgICAgaWYgKGNvcmRHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb3JkR2FtZS5zdGFydEJyYWNlbGV0TW9kZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC40KVxyXG4gICAgICAgIGlmICh0aGlzLnN0cmluZ0JvdCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0cmluZ0JvdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgYnRuX2NvcmQzKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBjb3JkR2FtZSA9IHRoaXMubGlzdENvcmRSb3VuZC5nZXRDb21wb25lbnQoXCJDb3JkUm91bmRHYW1lXCIpO1xyXG4gICAgICAgIGlmIChjb3JkR2FtZSkge1xyXG4gICAgICAgICAgICBjb3JkR2FtZS5maW5pc2hCcmFjZWxldFBoYXNlKCk7XHJcbiAgICAgICAgICAgIGNvcmRHYW1lLmxpZnRCcmFjZWxldChjYy52MygwLCAyMzAsIDApLCAwLjQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdENvcmRSb3VuZCkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygwLCAyMzAsIDApIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSBcIktFWSBDSEFJTlwiO1xyXG4gICAgICAgICAgICBsZXQgbG9jayA9IHRoaXMubGlzdENvcmRSb3VuZC5jaGlsZHJlbltnbG9iYWxUaGlzLmlkU3RyaW5nXS5jaGlsZHJlblsyXVxyXG4gICAgICAgICAgICBsb2NrLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICBsb2NrLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGxvY2spLnRvKDAuNCwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5saXN0S2V5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSwgMC44KVxyXG4gICAgfVxyXG4gICAgYnRuX2Nob3NlQ2FyZChldmVudCwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkS2V5Y2hhaW5JbmRleCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICAgICAgdGhpcy5idG5PazQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdFBldC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kQ2FyZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RQZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBldC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBldC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UGV0LmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBldC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UGV0LmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidG5fb2s0KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgY29yZEdhbWUgPSB0aGlzLmxpc3RDb3JkUm91bmQuZ2V0Q29tcG9uZW50KFwiQ29yZFJvdW5kR2FtZVwiKTtcclxuICAgICAgICBpZiAoY29yZEdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0TWF0Y2hQZXJjZW50ID0gY29yZEdhbWUuZmluaXNoQW5kQ29tcGFyZSh0aGlzLnNlbGVjdGVkS2V5Y2hhaW5JbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBoYW9oby5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIHByaXZhdGUgYW5pbWF0ZU1hdGNoUGVyY2VudCh0YXJnZXRQZXJjZW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY291bnRlciA9IHsgdmFsdWU6IDAgfTtcclxuICAgICAgICBjYy50d2Vlbihjb3VudGVyKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgdmFsdWU6IHRhcmdldFBlcmNlbnQgfSwge1xyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlLnN0cmluZyA9IFwiQ09NUExFVEUgIOKAoiAgXCIgKyBNYXRoLnJvdW5kKGNvdW50ZXIudmFsdWUpICsgXCIlXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZEdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRLZXljaGFpbkluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0TWF0Y2hQZXJjZW50ICs9IDMwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZU1hdGNoUGVyY2VudCh0aGlzLmxhc3RNYXRjaFBlcmNlbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=