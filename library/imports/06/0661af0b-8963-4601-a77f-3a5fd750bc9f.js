"use strict";
cc._RF.push(module, '0661a8LiWNGAad/Ol/XULyf', 'Gym3');
// Gym/Script/Gym3.ts

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
globalThis.gold = 100;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        // @property(cc.Node)
        // npc: cc.Node = null
        _this.bg = null;
        _this.soundBG = null;
        _this.soundShowPop = null;
        _this.soundClick = null;
        _this.soundCoin = null;
        _this.soundConfirm = null;
        _this.soundWin = null;
        _this.soundOver = null;
        _this.soundPut = null;
        _this.phaohoa = null;
        _this.linkToStore = null;
        _this.logo = null;
        _this.monster = null;
        _this.avtYou = null;
        _this.avtMonster = null;
        _this.btnBeat = null;
        _this.warning = null;
        _this.winNode = null;
        _this.loseNode = null;
        _this.fillYellow = null;
        // @property(cc.Label)
        // texTnoti: cc.Label = null
        _this.pop = null;
        _this.textHalf = null;
        _this.crowHero = null;
        _this.crowMonster = null;
        _this.listSoundHero = [];
        _this.listSoundMonster = [];
        _this.endCard = null;
        _this.countDown = null;
        _this.arrPosCus = [];
        _this.arrCus = [];
        _this.arrCrunch = [];
        _this.isHind = false;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.isEndgame = false;
        _this.isHeroLead = false;
        _this.heroAnim = null;
        _this.monsterAnim = null;
        _this.isFirst = false;
        _this.isDelay = false;
        _this.delayTime = 0.15;
        _this.countHit = 3;
        _this.rdNext = 4;
        _this.countSoundHero = 0;
        _this.arr50rep = 0;
        _this.isSpeedUp = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBG, true, 0.4);
        this.heroAnim = this.crowHero.getComponent(cc.Animation);
        this.monsterAnim = this.crowMonster.getComponent(cc.Animation);
    };
    NewClass.prototype.btn_YouHit = function () {
        var _this = this;
        if (this.isDelay)
            return;
        this.isDelay = true;
        this.scheduleOnce(function () {
            _this.isDelay = false;
        }, this.delayTime);
        cc.audioEngine.play(this.soundConfirm, false, 1);
        // cc.audioEngine.play(this.soundPut, false, 1)
        // let rd = Math.floor(Math.random() * 1)
        this.countHit++;
        if (this.countHit == this.rdNext) {
            this.countHit = 0;
            this.rdNext = Math.floor(Math.random() * 2) + 4;
            cc.audioEngine.play(this.listSoundHero[this.countSoundHero], false, 1);
            this.countSoundHero++;
            if (this.countSoundHero >= this.listSoundHero.length) {
                this.countSoundHero = 0;
            }
        }
        this.pop.active = false;
        this.you.getComponent(cc.Animation).play();
        if (this.isFirst == false) {
            // this.texTnoti.node.parent.active = true
            this.isFirst = true;
            this.btnBeat.getChildByName("hand").active = false;
        }
    };
    NewClass.prototype.monsterHit = function () {
        this.monster.getComponent(cc.Animation).play();
    };
    NewClass.prototype.startMonster = function () {
        var _this = this;
        this.monster.getComponent(cc.Animation).play();
        this.crowMonster.active = true;
        this.schedule(this.monsterHit, 0.7, 1);
        this.warning.active = true;
        this.scheduleOnce(function () {
            _this.warning.active = false;
            // this.npc.active = true
            _this.pop.active = true;
            _this.btnBeat.active = true;
            _this.btnBeat.scale = 0;
            _this.scheduleOnce(function () {
                _this.startGame();
            }, 0.4);
            cc.tween(_this.btnBeat).delay(5).call(function () {
                // this.npc.active = false
            })
                .to(0.25, { scale: 1.1 }, { easing: "backOut" })
                .to(0.1, { scale: 1 })
                .call(function () {
            })
                .start();
        }, 2.5);
    };
    NewClass.prototype.to50rep = function () {
        this.arr50rep++;
        if (this.arr50rep == 2) {
            this.textHalf.active = true;
            this.speedUp();
        }
    };
    NewClass.prototype.speedUp = function () {
        // console.log("speedUp")
        this.isSpeedUp = true;
        this.warning.active = true;
        this.btnBeat.children[1].active = true;
        this.unschedule(this.monsterHit);
        this.schedule(this.monsterHit, 0.4);
        this.avtMonster.getChildByName("fill").getComponent(cc.Sprite).spriteFrame = this.fillYellow;
        this.avtYou.getChildByName("fill").getComponent(cc.Sprite).spriteFrame = this.fillYellow;
        this.monster.getComponent("rep").upgradeMonster();
        this.you.getComponent("rep").upgradeMonster();
        this.delayTime = 0.1;
    };
    NewClass.prototype.startGame = function () {
        console.log("startGame");
        this.monsterHit();
        this.schedule(this.monsterHit, 0.6);
    };
    NewClass.prototype.onEndGame = function (value) {
        if (this.isEndgame)
            return;
        this.unscheduleAllCallbacks();
        this.monster.getComponent(cc.Animation).stop();
        this.btnBeat.getComponent(cc.Button).enabled = false;
        this.you.getComponent("rep").stopFill();
        this.monster.getComponent("rep").stopFill();
        this.isEndgame = true;
        if (value) {
            this.winNode.active = true;
            this.phaohoa.active = true;
            cc.audioEngine.play(this.soundWin, false, 1);
        }
        else {
            this.loseNode.active = true;
            cc.audioEngine.play(this.soundOver, false, 1);
        }
        this.linkToStore.active = true;
    };
    NewClass.prototype.update = function (dt) {
        // if (this.isSpeedUp) return;
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
        var isHeroWinning = globalThis.youRep > globalThis.monsterRep;
        // không đổi trạng thái thì bỏ qua
        if (this.isHeroLead == isHeroWinning)
            return;
        this.isHeroLead = isHeroWinning;
        if (isHeroWinning) {
            this.crowHero.active = true;
            this.crowMonster.active = false;
            this.heroAnim.play();
        }
        else {
            this.crowHero.active = false;
            this.crowMonster.active = true;
            this.monsterAnim.play();
        }
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.camera.node.position = cc.v3(0, 0);
        // this.endCard.scale = (logic) ? 1.5 : 0.7
        this.logo.scale = (logic) ? 1.5 : 1;
        this.logo.getComponent(cc.Widget).top = 18.04;
        this.bg.position = (logic) ? cc.v3(0, -200) : cc.v3(0, 0);
        this.bg.scale = (logic) ? 1.3 : 1;
        this.phaohoa.scale = (logic) ? 7 : 3;
        this.btnBeat.scale = (logic) ? 1.6 : 1;
        this.btnBeat.getComponent(cc.Widget).bottom = (logic) ? 350 : 47;
        this.loseNode.scale = (logic) ? 1.4 : 0.7;
        this.winNode.scale = (logic) ? 1.4 : 0.7;
        this.countDown.scale = (logic) ? 1.4 : 1;
        this.you.x = (logic) ? -280 : -350;
        this.monster.x = (logic) ? 280 : 350;
        this.avtYou.x = (logic) ? -280 : -490;
        this.avtMonster.x = (logic) ? 280 : 490;
        this.avtMonster.y = (logic) ? 350 : 280;
        this.avtYou.y = (logic) ? 350 : 280;
        this.btnBeat.y = (logic) ? -1200 : -422;
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // this.camera.node.position = cc.v3(-70, 0)
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 1.8;
            this.camera.node.position = cc.v3(0, 0);
            this.logo.getComponent(cc.Widget).top = 100;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")'
                this.logo.getComponent(cc.Widget).top = 300;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.6;
                this.btnBeat.y = -950;
                this.avtMonster.y = 240;
                this.avtYou.y = 240;
                this.logo.getComponent(cc.Widget).top = 15;
            }
            else {
            }
        }
        else {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 0.8
                this.btnBeat.scale = 0.8;
            }
        }
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBG", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundShowPop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCoin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundConfirm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundOver", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaohoa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "you", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "monster", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "avtYou", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "avtMonster", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnBeat", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "warning", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "winNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "loseNode", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "fillYellow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textHalf", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "crowHero", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "crowMonster", void 0);
    __decorate([
        property([cc.AudioClip])
    ], NewClass.prototype, "listSoundHero", void 0);
    __decorate([
        property([cc.AudioClip])
    ], NewClass.prototype, "listSoundMonster", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "countDown", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();