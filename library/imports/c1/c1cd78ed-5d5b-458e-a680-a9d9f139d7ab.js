"use strict";
cc._RF.push(module, 'c1cd7jtXVtFjqaAqdnxOder', 'GameApp');
// scripts/APP/GameApp.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sceneMusic = null;
        _this.sceneGun = null;
        _this.sceneMain = null;
        _this.soundBg = null;
        _this.tut = null;
        _this.hand = null;
        _this.endCard = null;
        _this.linkToStore = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    };
    NewClass.prototype.startGame = function () {
        var _this = this;
        cc.tween(this.tut).to(0.3, { opacity: 0 }).call(function () {
            _this.tut.active = false;
            _this.hand.active = true;
        }).start();
        this.scheduleOnce(function () {
            _this.onEndGame();
        }, 20);
    };
    NewClass.prototype.onEndGame = function () {
        this.endCard.active = true;
        this.linkToStore.active = true;
    };
    NewClass.prototype.btn_choose = function (event, value) {
        console.log(value);
        switch (value) {
            case "0":
                this.hand.active = false;
                this.sceneMusic.position = cc.v3(3000, 0);
                this.sceneMusic.active = true;
                this.sceneMusic.getComponent("mainMusic").loadData(1);
                this.sceneMusic.getComponent(cc.Animation).play();
                // this.hand.active = true
                break;
            case "1":
                this.sceneMusic.position = cc.v3(3000, 0);
                this.sceneMusic.active = true;
                this.sceneMusic.getComponent("mainMusic").loadData(2);
                this.sceneMusic.getComponent(cc.Animation).play();
                break;
            case "2":
                this.sceneGun.position = cc.v3(3000, 0);
                this.sceneGun.active = true;
                this.sceneGun.getComponent("mainGun").loadData(1);
                this.sceneGun.getComponent(cc.Animation).play();
                this.sceneMain.active = false;
                break;
            case "3":
                this.sceneMusic.position = cc.v3(3000, 0);
                this.sceneMusic.active = true;
                this.sceneMusic.getComponent("mainMusic").loadData(3);
                this.sceneMusic.getComponent(cc.Animation).play();
                break;
            case "4":
                this.sceneMusic.position = cc.v3(3000, 0);
                this.sceneMusic.active = true;
                this.sceneMusic.getComponent("mainMusic").loadData(4);
                this.sceneMusic.getComponent(cc.Animation).play();
                break;
            case "5":
                this.sceneGun.position = cc.v3(3000, 0);
                this.sceneGun.active = true;
                this.sceneGun.getComponent("mainGun").loadData(2);
                this.sceneGun.getComponent(cc.Animation).play();
                this.sceneMain.active = false;
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sceneMusic", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sceneGun", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sceneMain", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();