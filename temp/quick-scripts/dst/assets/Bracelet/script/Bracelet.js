
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
        return _this;
        // update (dt) {}
    }
    // @property(cc.Node)
    // listCard
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2();
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
    };
    NewClass.prototype.start = function () {
        cc.audioEngine.play(this.soundBg, true, 0.5);
        cc.game.setFrameRate(60);
    };
    NewClass.prototype.btn_startGame = function () {
        var _this = this;
        this.scene2.active = true;
        cc.tween(this.scene1).to(0.4, { opacity: 0 }).call(function () {
            _this.scene1.active = false;
            _this.hand2.active = true;
        }).start();
    };
    NewClass.prototype.btn_cord = function (event) {
        var btn = event.currentTarget;
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
        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;
        this.plate.active = false;
        var cordGame = this.listCordRound.getComponent("CordRoundGame");
        if (cordGame) {
            cordGame.liftBracelet(cc.v3(0, 230, 0), 0.4);
        }
        else {
            cc.tween(this.listCordRound).to(0.4, { position: cc.v3(0, 230, 0) }).call(function () {
            }).start();
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
        this.btnOk4.active = true;
        for (var _i = 0, _a = this.listPet.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.active = false;
        }
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
        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;
        this.phaoho.active = true;
        this.scheduleOnce(function () {
            _this.endGame();
        }, 1);
    };
    NewClass.prototype.endGame = function () {
        this.endGameNode.active = true;
        this.linkToStore.active = true;
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQnJhY2VsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDeEIsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1S0M7UUFwS0csWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRzFCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsV0FBSyxHQUFhLElBQUksQ0FBQTtRQUV0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUE7O1FBa0l0QixpQkFBaUI7SUFDckIsQ0FBQztJQWxJRyxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFD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ekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDSztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNHO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQXBDTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUs1QjtJQUFELGVBQUM7Q0F2S0QsQUF1S0MsQ0F2S3FDLEVBQUUsQ0FBQyxTQUFTLEdBdUtqRDtrQkF2S29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJnbG9iYWxUaGlzLmlkU3RyaW5nID0gMDtcclxuZ2xvYmFsVGhpcy5pZENoYXJtID0gMDtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjZW5lMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NlbmUyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdHJpbmdOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhdGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kMzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcm1Ob2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpdGxlOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENvcmRSb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHN0cmluZ0JvdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RLZXk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RQZXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZEdhbWVOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuT2s0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvaG86IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RDYXJkXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigpO1xyXG4gICAgICAgIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnZpZXcuc2V0T3JpZW50YXRpb24oY2MubWFjcm8uT1JJRU5UQVRJT05fUE9SVFJBSVQpO1xyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXHJcbiAgICAgICAgY2MuZ2FtZS5zZXRGcmFtZVJhdGUoNjApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBidG5fc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNjZW5lMSkudG8oMC40LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUxLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGJ0bl9jb3JkKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zdHJpbmdOb2RlKS50bygwLjQsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zdHJpbmdOb2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jaGFybU5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCJDSE9PU0UgQ0hBUk1TXCJcclxuICAgICAgICB0aGlzLmhhbmQzLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgfVxyXG4gICAgYnRuX2NvcmQyKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdHJpbmdOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhcm1Ob2RlKS50bygwLjQsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFybU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucGxhdGUpLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMjMwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSBcIk1BS0UgQlJBQ0VMRVRcIlxyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lMigpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kMy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDAuNClcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUyKCkge1xyXG4gICAgICAgIGxldCBpZCA9IGdsb2JhbFRoaXMuaWRTdHJpbmc7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpZFwiLCBpZCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHN0cmluZ0Fyb3VuZCA9IHRoaXMubGlzdENvcmRSb3VuZC5jaGlsZHJlbltpZF07XHJcbiAgICAgICAgICAgIHN0cmluZ0Fyb3VuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBzdHJpbmdBcm91bmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcm1Ob2RlLmdldENvbXBvbmVudChcIkNoYXJtR2FtZVwiKS5PZmZFdmVudCgpO1xyXG4gICAgICAgICAgICBjYy50d2VlbihzdHJpbmdBcm91bmQpLnRvKDAuNCwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjb25zdCBjb3JkR2FtZSA9IHRoaXMubGlzdENvcmRSb3VuZC5nZXRDb21wb25lbnQoXCJDb3JkUm91bmRHYW1lXCIpO1xyXG4gICAgICAgICAgICBpZiAoY29yZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvcmRHYW1lLnN0YXJ0QnJhY2VsZXRNb2RlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjQpXHJcbiAgICAgICAgaWYgKHRoaXMuc3RyaW5nQm90KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyaW5nQm90LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBidG5fY29yZDMoZXZlbnQpIHtcclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGNvcmRHYW1lID0gdGhpcy5saXN0Q29yZFJvdW5kLmdldENvbXBvbmVudChcIkNvcmRSb3VuZEdhbWVcIik7XHJcbiAgICAgICAgaWYgKGNvcmRHYW1lKSB7XHJcbiAgICAgICAgICAgIGNvcmRHYW1lLmxpZnRCcmFjZWxldChjYy52MygwLCAyMzAsIDApLCAwLjQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdENvcmRSb3VuZCkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygwLCAyMzAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlLnN0cmluZyA9IFwiS0VZIENIQUlOXCJcclxuICAgICAgICAgICAgbGV0IGxvY2sgPSB0aGlzLmxpc3RDb3JkUm91bmQuY2hpbGRyZW5bZ2xvYmFsVGhpcy5pZFN0cmluZ10uY2hpbGRyZW5bMl1cclxuICAgICAgICAgICAgbG9jay5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgbG9jay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbihsb2NrKS50bygwLjQsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEtleS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDAuOClcclxuICAgIH1cclxuICAgIGJ0bl9jaG9zZUNhcmQoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5idG5PazQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RQZXQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIjBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBldC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UGV0LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UGV0LmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RQZXQuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UGV0LmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RQZXQuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ0bl9vazQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBoYW9oby5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZSgpO1xyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcbiAgICBlbmRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuZW5kR2FtZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=