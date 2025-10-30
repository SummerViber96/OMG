
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
        if (this.isICON.children[0]) {
            this.isICON.children[0].active = false;
        }
        cc.audioEngine.stop(this.audioID);
        this.isPlay = false;
        this.playBtn.spriteFrame = this.soundOff;
        this.node.getComponent(cc.Animation).play("scene_close");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxtYWluTXVzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzSEM7UUFwSEcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFFN0Isa0JBQVksR0FBaUIsSUFBSSxDQUFBO1FBRWpDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIscUNBQXFDO1FBQ3JDLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGFBQU8sR0FBRyxDQUFDLENBQUE7UUFDWCxZQUFNLEdBQUcsSUFBSSxDQUFBO1FBa0JiLGFBQU8sR0FBRyxJQUFJLENBQUE7O0lBc0VsQixDQUFDO0lBdkZHLHdCQUFLLEdBQUw7UUFDSSw4Q0FBOEM7UUFDOUMsbUJBQW1CO0lBQ3ZCLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0s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QVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdGljb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb29wYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwbGF5QnRuOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmREb2c6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFpckhvcm46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFBob3RvOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRNZW1lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgc291bmRPbjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgc291bmRPZmY6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG5hbWV0eHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICAvL2RhdGEgOjEgaGFpciAyOmFpcmhvcm4gMzptZW1lIDQ6ZG9nXHJcbiAgICBpc0xvb3AgPSBmYWxzZTtcclxuICAgIGlzUGxheSA9IGZhbHNlO1xyXG4gICAgaXNWYWx1ZSA9IG51bGw7XHJcbiAgICBpc1RhcmdldEljb24gPSBudWxsO1xyXG4gICAgaXNWb2x1bSA9IDFcclxuICAgIGlzSUNPTiA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuaXNUYXJnZXRJY29uPXRoaXMubGlzdGljb24uY2hpbGRyZW5bMF1cclxuICAgICAgICAvLyB0aGlzLmxvYWREYXRhKDIpXHJcbiAgICB9XHJcbiAgICBsb2FkRGF0YSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaXNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0SWNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0SWNvbi5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saXN0aWNvbi5jaGlsZHJlblt2YWx1ZSAtIDFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmlzSUNPTiA9IHRoaXMubGlzdGljb24uY2hpbGRyZW5bdmFsdWUgLSAxXVxyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRJY29uID0gdGhpcy5saXN0aWNvbi5jaGlsZHJlblt2YWx1ZSAtIDFdXHJcbiAgICAgICAgbGV0IGFyclRleHQgPSBbXCJIYWlyIENsaXBwZXJcIiwgXCJBaXIgSG9yblwiLCBcIk1lbWVcIiwgXCJEb2dcIl1cclxuICAgICAgICB0aGlzLm5hbWV0eHQuc3RyaW5nID0gYXJyVGV4dFt2YWx1ZSAtIDFdXHJcblxyXG4gICAgfSAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG4gICAgYXVkaW9JRCA9IG51bGxcclxuICAgIGJ0bl9QbGF5KCkge1xyXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGlmICghdGhpcy5pc1BsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1BsYXkgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMucGxheUJ0bi5zcHJpdGVGcmFtZSA9IHRoaXMuc291bmRPblxyXG4gICAgICAgICAgICBsZXQgbXVzaWMgPSBudWxsXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5pc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbXVzaWMgPSB0aGlzLnNvdW5kUGhvdG9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSUNPTi5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kUGhvdG8sIHRoaXMuaXNMb29wKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubmFtZXR4dC5zdHJpbmcgPSBcIkFpciBIb3JuXCJcclxuICAgICAgICAgICAgICAgICAgICBtdXNpYyA9IHRoaXMuc291bmRBaXJIb3JuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0lDT04uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRBaXJIb3JuLCB0aGlzLmlzTG9vcClcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5hbWV0eHQuc3RyaW5nID0gXCJNZW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBtdXNpYyA9IHRoaXMuc291bmRNZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRNZW1lLCB0aGlzLmlzTG9vcClcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5hbWV0eHQuc3RyaW5nID0gXCJEb2dcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11c2ljID0gdGhpcy5zb3VuZERvZ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kRG9nLCB0aGlzLmlzTG9vcClcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShtdXNpYywgdGhpcy5pc0xvb3AsIHRoaXMuaXNWb2x1bSlcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2sodGhpcy5hdWRpb0lELCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJQaMOhdCBuaOG6oWMgeG9uZyBy4buTaSFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlCdG4uc3ByaXRlRnJhbWUgPSB0aGlzLnNvdW5kT2ZmXHJcbiAgICAgICAgICAgICAgICAvLyBUaOG7sWMgaGnhu4duIGjDoG5oIMSR4buZbmcga2jDoWMg4bufIMSRw6J5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnBsYXlCdG4uc3ByaXRlRnJhbWUgPSB0aGlzLnNvdW5kT2ZmXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5hdWRpb0lEKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJQ09OLmNoaWxkcmVuWzBdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSUNPTi5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnRuTG9vcCgpIHtcclxuICAgICAgICB0aGlzLmlzTG9vcCA9ICh0aGlzLmlzTG9vcCA9PSB0cnVlKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIHRoaXMubG9vcGJ0bi5jaGlsZHJlblswXS5wb3NpdGlvbiA9ICh0aGlzLmlzTG9vcCkgPyBjYy52MygzNiwgMCkgOiBjYy52MygtMTksIDApXHJcbiAgICAgICAgdGhpcy5sb29wYnRuLmNoaWxkcmVuWzBdLmNvbG9yID0gKHRoaXMuaXNMb29wKSA/IGNjLmNvbG9yKCkuZnJvbUhFWChcIiNGRjM5MjdcIikgOiBjYy5jb2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpXHJcbiAgICB9XHJcbiAgICBidG5fYmFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0lDT04uY2hpbGRyZW5bMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0lDT04uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmF1ZGlvSUQpXHJcbiAgICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucGxheUJ0bi5zcHJpdGVGcmFtZSA9IHRoaXMuc291bmRPZmZcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInNjZW5lX2Nsb3NlXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0Vm9sdW1lKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5pc1ZvbHVtID0gdmFsdWVcclxuICAgICAgICBpZiAodGhpcy5hdWRpb0lEICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHRoaXMuYXVkaW9JRCwgdmFsdWUpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=