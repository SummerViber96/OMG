
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/mainMusic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        var arrText = ["Hair Clipper", "Air Horn", "Meme", "Dog"];
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
            }
            this.audioID = cc.audioEngine.play(music, this.isLoop, this.isVolum);
            cc.audioEngine.setFinishCallback(this.audioID, function () {
                cc.log("Phát nhạc xong rồi!");
                _this.isPlay = false;
                _this.playBtn.spriteFrame = _this.soundOff;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxtYWluTXVzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwSEM7UUF4SEcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFFN0Isa0JBQVksR0FBaUIsSUFBSSxDQUFBO1FBRWpDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFHcEIscUNBQXFDO1FBQ3JDLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGFBQU8sR0FBRyxDQUFDLENBQUE7UUFDWCxZQUFNLEdBQUcsSUFBSSxDQUFBO1FBa0JiLGFBQU8sR0FBRyxJQUFJLENBQUE7O0lBeUVsQixDQUFDO0lBMUZHLHdCQUFLLEdBQUw7UUFDSSw4Q0FBOEM7UUFDOUMsbUJBQW1CO0lBQ3ZCLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0s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SSxDQUFDOzBDQUNFO0lBdEJILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwSDVCO0lBQUQsZUFBQztDQTFIRCxBQTBIQyxDQTFIcUMsRUFBRSxDQUFDLFNBQVMsR0EwSGpEO2tCQTFIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0aWNvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvb3BidG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHBsYXlCdG46IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERvZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQWlySG9ybjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kUGhvdG86IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE1lbWU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBzb3VuZE9uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBzb3VuZE9mZjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbmFtZXR4dDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gIFxyXG5cclxuICAgIC8vZGF0YSA6MSBoYWlyIDI6YWlyaG9ybiAzOm1lbWUgNDpkb2dcclxuICAgIGlzTG9vcCA9IGZhbHNlO1xyXG4gICAgaXNQbGF5ID0gZmFsc2U7XHJcbiAgICBpc1ZhbHVlID0gbnVsbDtcclxuICAgIGlzVGFyZ2V0SWNvbiA9IG51bGw7XHJcbiAgICBpc1ZvbHVtID0gMVxyXG4gICAgaXNJQ09OID0gbnVsbFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5pc1RhcmdldEljb249dGhpcy5saXN0aWNvbi5jaGlsZHJlblswXVxyXG4gICAgICAgIC8vIHRoaXMubG9hZERhdGEoMilcclxuICAgIH1cclxuICAgIGxvYWREYXRhKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRJY29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRJY29uLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RpY29uLmNoaWxkcmVuW3ZhbHVlIC0gMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNJQ09OID0gdGhpcy5saXN0aWNvbi5jaGlsZHJlblt2YWx1ZSAtIDFdXHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEljb24gPSB0aGlzLmxpc3RpY29uLmNoaWxkcmVuW3ZhbHVlIC0gMV1cclxuICAgICAgICBsZXQgYXJyVGV4dCA9IFtcIkhhaXIgQ2xpcHBlclwiLCBcIkFpciBIb3JuXCIsIFwiTWVtZVwiLCBcIkRvZ1wiXVxyXG4gICAgICAgIHRoaXMubmFtZXR4dC5zdHJpbmcgPSBhcnJUZXh0W3ZhbHVlIC0gMV1cclxuXHJcbiAgICB9ICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbiAgICBhdWRpb0lEID0gbnVsbFxyXG4gICAgYnRuX1BsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxheSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5wbGF5QnRuLnNwcml0ZUZyYW1lID0gdGhpcy5zb3VuZE9uXHJcbiAgICAgICAgICAgIGxldCBtdXNpYyA9IG51bGxcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmlzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBtdXNpYyA9IHRoaXMuc291bmRQaG90b1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNJQ09OLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRQaG90bywgdGhpcy5pc0xvb3ApXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5uYW1ldHh0LnN0cmluZyA9IFwiQWlyIEhvcm5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG11c2ljID0gdGhpcy5zb3VuZEFpckhvcm5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSUNPTi5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5zb3VuZEFpckhvcm4sIHRoaXMuaXNMb29wKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubmFtZXR4dC5zdHJpbmcgPSBcIk1lbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11c2ljID0gdGhpcy5zb3VuZE1lbWVcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5zb3VuZE1lbWUsIHRoaXMuaXNMb29wKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubmFtZXR4dC5zdHJpbmcgPSBcIkRvZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbXVzaWMgPSB0aGlzLnNvdW5kRG9nXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmREb2csIHRoaXMuaXNMb29wKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KG11c2ljLCB0aGlzLmlzTG9vcCwgdGhpcy5pc1ZvbHVtKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayh0aGlzLmF1ZGlvSUQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlBow6F0IG5o4bqhYyB4b25nIHLhu5NpIVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUJ0bi5zcHJpdGVGcmFtZSA9IHRoaXMuc291bmRPZmZcclxuICAgICAgICAgICAgICAgIC8vIFRo4buxYyBoaeG7h24gaMOgbmggxJHhu5luZyBraMOhYyDhu58gxJHDonlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxheSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGxheUJ0bi5zcHJpdGVGcmFtZSA9IHRoaXMuc291bmRPZmZcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmF1ZGlvSUQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0lDT04uY2hpbGRyZW5bMF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNJQ09OLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidG5Mb29wKCkge1xyXG4gICAgICAgIHRoaXMuaXNMb29wID0gKHRoaXMuaXNMb29wID09IHRydWUpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgdGhpcy5sb29wYnRuLmNoaWxkcmVuWzBdLnBvc2l0aW9uID0gKHRoaXMuaXNMb29wKSA/IGNjLnYzKDM2LCAwKSA6IGNjLnYzKC0xOSwgMClcclxuICAgICAgICB0aGlzLmxvb3BidG4uY2hpbGRyZW5bMF0uY29sb3IgPSAodGhpcy5pc0xvb3ApID8gY2MuY29sb3IoKS5mcm9tSEVYKFwiI0ZGMzkyN1wiKSA6IGNjLmNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIilcclxuICAgIH1cclxuICAgIGJ0bl9iYWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSUNPTi5jaGlsZHJlblswXSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzSUNPTi5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuYXVkaW9JRClcclxuICAgICAgICB0aGlzLmlzUGxheSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wbGF5QnRuLnNwcml0ZUZyYW1lID0gdGhpcy5zb3VuZE9mZlxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic2NlbmVfY2xvc2VcIik7XHJcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0sIDAuMylcclxuICAgIH1cclxuICAgIHNldFZvbHVtZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaXNWb2x1bSA9IHZhbHVlXHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9JRCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmF1ZGlvSUQsIHZhbHVlKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19