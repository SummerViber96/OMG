"use strict";
cc._RF.push(module, '84628WGG69HXJzfyX7OfO89', 'mainMusic');
// scripts/APP/mainMusic.ts

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
        _this.listicon = null;
        _this.loopbtn = null;
        _this.playBtn = null;
        _this.soundDog = null;
        _this.soundAirHorn = null;
        _this.soundPhoto = null;
        _this.soundMeme = null;
        _this.soundFart = null;
        _this.soundtust = null;
        _this.soundOn = null;
        _this.soundOff = null;
        _this.nametxt = null;
        _this.hand = null;
        //data :1 hair 2:airhorn 3:meme 4:dog
        _this.isLoop = false;
        _this.isPlay = false;
        _this.isValue = null;
        _this.isTargetIcon = null;
        _this.isVolum = 1;
        _this.isICON = null;
        _this.audioID = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        // this.isTargetIcon=this.listicon.children[0]
        // this.loadData(2)
    };
    NewClass.prototype.loadData = function (value) {
        this.isValue = value;
        if (this.isTargetIcon) {
            this.isTargetIcon.active = false;
        }
        this.listicon.children[value - 1].active = true;
        this.isICON = this.listicon.children[value - 1];
        this.isTargetIcon = this.listicon.children[value - 1];
        var arrText = ["Hair Clipper", "Air Horn", "Meme", "Dog", "Fart", "Taser"];
        this.nametxt.string = arrText[value - 1];
    }; // update (dt) {}
    NewClass.prototype.btn_Play = function () {
        var _this = this;
        this.hand.active = false;
        if (!this.isPlay) {
            this.isPlay = true;
            this.playBtn.spriteFrame = this.soundOn;
            var music = null;
            switch (this.isValue) {
                case 1:
                    music = this.soundPhoto;
                    this.isICON.children[0].active = true;
                    // cc.audioEngine.playMusic(this.soundPhoto, this.isLoop)
                    break;
                case 2:
                    // this.nametxt.string = "Air Horn"
                    music = this.soundAirHorn;
                    this.isICON.children[0].active = true;
                    // cc.audioEngine.playMusic(this.soundAirHorn, this.isLoop)
                    break;
                case 3:
                    // this.nametxt.string = "Meme"
                    music = this.soundMeme;
                    // cc.audioEngine.playMusic(this.soundMeme, this.isLoop)
                    break;
                case 4:
                    // this.nametxt.string = "Dog"
                    music = this.soundDog;
                    // cc.audioEngine.playMusic(this.soundDog, this.isLoop)
                    break;
                case 5:
                    // this.nametxt.string = "Dog"
                    music = this.soundFart;
                    // cc.audioEngine.playMusic(this.soundDog, this.isLoop)
                    break;
                case 6:
                    // this.nametxt.string = "Dog"
                    music = this.soundtust;
                    this.isICON.children[0].active = true;
                    // cc.audioEngine.playMusic(this.soundDog, this.isLoop)
                    break;
            }
            this.audioID = cc.audioEngine.play(music, this.isLoop, this.isVolum);
            cc.audioEngine.setFinishCallback(this.audioID, function () {
                cc.log("Phát nhạc xong rồi!");
                _this.isPlay = false;
                _this.playBtn.spriteFrame = _this.soundOff;
                if (_this.isICON.children[0]) {
                    _this.isICON.children[0].active = false;
                }
                // Thực hiện hành động khác ở đây
            });
        }
        else {
            this.isPlay = false;
            this.playBtn.spriteFrame = this.soundOff;
            cc.audioEngine.stop(this.audioID);
            if (this.isICON.children[0]) {
                this.isICON.children[0].active = false;
            }
        }
    };
    NewClass.prototype.btnLoop = function () {
        this.isLoop = (this.isLoop == true) ? false : true;
        this.loopbtn.children[0].position = (this.isLoop) ? cc.v3(36, 0) : cc.v3(-19, 0);
        this.loopbtn.children[0].color = (this.isLoop) ? cc.color().fromHEX("#FF3927") : cc.color().fromHEX("#FFFFFF");
    };
    NewClass.prototype.btn_back = function () {
        var _this = this;
        if (this.isICON.children[0]) {
            this.isICON.children[0].active = false;
        }
        cc.audioEngine.stop(this.audioID);
        this.isPlay = false;
        this.playBtn.spriteFrame = this.soundOff;
        this.node.getComponent(cc.Animation).play("scene_close");
        this.scheduleOnce(function () {
            _this.node.active = false;
        }, 0.3);
    };
    NewClass.prototype.setVolume = function (value) {
        this.isVolum = value;
        if (this.audioID != null) {
            cc.audioEngine.setVolume(this.audioID, value);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listicon", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "loopbtn", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "playBtn", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundDog", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAirHorn", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPhoto", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundMeme", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundFart", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundtust", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "soundOn", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "soundOff", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "nametxt", void 0);
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