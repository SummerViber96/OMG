"use strict";
cc._RF.push(module, '9d209eMGLBC+a9I6aN/ZHYQ', 'mainGun');
// scripts/APP/mainGun.ts

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
        _this.listBullet = null;
        _this.listBullet2 = null;
        _this.listIcon = null;
        _this.mainScene = null;
        _this.soundAkm = null;
        _this.soundPiston = null;
        _this.skeAkm = null;
        _this.skePiston = null;
        _this.noBullet = null;
        _this.soundReload = null;
        _this.hand = null;
        _this.anim = null;
        _this.isCountBullet = 0;
        _this.isMaxBullet = 0;
        _this.isListB = null;
        _this.soundAtk = null;
        _this.isLoop = false;
        _this.audioID = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.loadData = function (value) {
        if (value == 1) {
            //piston
            this.isMaxBullet = 6;
            this.listIcon.children[0].active = true;
            this.listIcon.children[1].active = false;
            this.isListB = this.listBullet2;
            this.listBullet.active = false;
            this.soundAtk = this.soundPiston;
            this.anim = this.skePiston;
        }
        else {
            // for()
            this.isMaxBullet = 23;
            this.listIcon.children[1].active = true;
            this.listIcon.children[0].active = false;
            this.isListB = this.listBullet;
            this.listBullet2.active = false;
            this.soundAtk = this.soundAkm;
            this.anim = this.skeAkm;
        }
        this.isCountBullet = this.isMaxBullet;
        this.isListB.active = true;
        this.btn_reLoad();
    };
    NewClass.prototype.btn_shot = function () {
        if (this.isCountBullet > 0) {
            this.hand.active = false;
            this.isCountBullet--;
            this.audioID = cc.audioEngine.playEffect(this.soundAtk, this.isLoop);
            this.anim.setAnimation(0, "atk", this.isLoop);
            this.isListB.children[this.isCountBullet].active = false;
            // if (this.isLoop==)
        }
        else {
            cc.audioEngine.playEffect(this.noBullet, false);
        }
    };
    NewClass.prototype.btn_back = function () {
        this.unscheduleAllCallbacks();
        cc.audioEngine.stop(this.audioID);
        this.node.getComponent(cc.Animation).play("scene_close");
        this.mainScene.active = true;
    };
    NewClass.prototype.btn_reLoad = function () {
        console.log("reload");
        cc.audioEngine.play(this.soundReload, false, 1);
        this.isCountBullet = this.isMaxBullet;
        for (var _i = 0, _a = this.isListB.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.active = true;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBullet", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBullet2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listIcon", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mainScene", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAkm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPiston", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "skeAkm", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "skePiston", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "noBullet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundReload", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();