
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FQUC9tYWluTXVzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwSEM7UUF4SEcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFFN0Isa0JBQVksR0FBaUIsSUFBSSxDQUFBO1FBRWpDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFHcEIscUNBQXFDO1FBQ3JDLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGFBQU8sR0FBRyxDQUFDLENBQUE7UUFDWCxZQUFNLEdBQUcsSUFBSSxDQUFBO1FBa0JiLGFBQU8sR0FBRyxJQUFJLENBQUE7O0lBeUVsQixDQUFDO0lBMUZHLHdCQUFLLEdBQUw7UUFDSSw4Q0FBOEM7UUFDOUMsbUJBQW1CO0lBQ3ZCLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FB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QUFDOzBDQUNFO0lBdEJILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwSDVCO0lBQUQsZUFBQztDQTFIRCxBQTBIQyxDQTFIcUMsRUFBRSxDQUFDLFNBQVMsR0EwSGpEO2tCQTFIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0aWNvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG9vcGJ0bjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBwbGF5QnRuOiBjYy5TcHJpdGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZERvZzogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRBaXJIb3JuOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFBob3RvOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZE1lbWU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNvdW5kT246IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc291bmRPZmY6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbmFtZXR4dDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXG4gIFxuXG4gICAgLy9kYXRhIDoxIGhhaXIgMjphaXJob3JuIDM6bWVtZSA0OmRvZ1xuICAgIGlzTG9vcCA9IGZhbHNlO1xuICAgIGlzUGxheSA9IGZhbHNlO1xuICAgIGlzVmFsdWUgPSBudWxsO1xuICAgIGlzVGFyZ2V0SWNvbiA9IG51bGw7XG4gICAgaXNWb2x1bSA9IDFcbiAgICBpc0lDT04gPSBudWxsXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMuaXNUYXJnZXRJY29uPXRoaXMubGlzdGljb24uY2hpbGRyZW5bMF1cbiAgICAgICAgLy8gdGhpcy5sb2FkRGF0YSgyKVxuICAgIH1cbiAgICBsb2FkRGF0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmlzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRJY29uKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0SWNvbi5hY3RpdmUgPSBmYWxzZVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0aWNvbi5jaGlsZHJlblt2YWx1ZSAtIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5pc0lDT04gPSB0aGlzLmxpc3RpY29uLmNoaWxkcmVuW3ZhbHVlIC0gMV1cbiAgICAgICAgdGhpcy5pc1RhcmdldEljb24gPSB0aGlzLmxpc3RpY29uLmNoaWxkcmVuW3ZhbHVlIC0gMV1cbiAgICAgICAgbGV0IGFyclRleHQgPSBbXCJIYWlyIENsaXBwZXJcIiwgXCJBaXIgSG9yblwiLCBcIk1lbWVcIiwgXCJEb2dcIl1cbiAgICAgICAgdGhpcy5uYW1ldHh0LnN0cmluZyA9IGFyclRleHRbdmFsdWUgLSAxXVxuXG4gICAgfSAgICAvLyB1cGRhdGUgKGR0KSB7fVxuICAgIGF1ZGlvSUQgPSBudWxsXG4gICAgYnRuX1BsYXkoKSB7XG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBpZiAoIXRoaXMuaXNQbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmlzUGxheSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMucGxheUJ0bi5zcHJpdGVGcmFtZSA9IHRoaXMuc291bmRPblxuICAgICAgICAgICAgbGV0IG11c2ljID0gbnVsbFxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmlzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIG11c2ljID0gdGhpcy5zb3VuZFBob3RvXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNJQ09OLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kUGhvdG8sIHRoaXMuaXNMb29wKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubmFtZXR4dC5zdHJpbmcgPSBcIkFpciBIb3JuXCJcbiAgICAgICAgICAgICAgICAgICAgbXVzaWMgPSB0aGlzLnNvdW5kQWlySG9yblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSUNPTi5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kQWlySG9ybiwgdGhpcy5pc0xvb3ApXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5uYW1ldHh0LnN0cmluZyA9IFwiTWVtZVwiXG4gICAgICAgICAgICAgICAgICAgIG11c2ljID0gdGhpcy5zb3VuZE1lbWVcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRNZW1lLCB0aGlzLmlzTG9vcClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5hbWV0eHQuc3RyaW5nID0gXCJEb2dcIlxuICAgICAgICAgICAgICAgICAgICBtdXNpYyA9IHRoaXMuc291bmREb2dcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmREb2csIHRoaXMuaXNMb29wKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShtdXNpYywgdGhpcy5pc0xvb3AsIHRoaXMuaXNWb2x1bSlcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKHRoaXMuYXVkaW9JRCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlBow6F0IG5o4bqhYyB4b25nIHLhu5NpIVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QnRuLnNwcml0ZUZyYW1lID0gdGhpcy5zb3VuZE9mZlxuICAgICAgICAgICAgICAgIC8vIFRo4buxYyBoaeG7h24gaMOgbmggxJHhu5luZyBraMOhYyDhu58gxJHDonlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5wbGF5QnRuLnNwcml0ZUZyYW1lID0gdGhpcy5zb3VuZE9mZlxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmF1ZGlvSUQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNJQ09OLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0lDT04uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBidG5Mb29wKCkge1xuICAgICAgICB0aGlzLmlzTG9vcCA9ICh0aGlzLmlzTG9vcCA9PSB0cnVlKSA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICB0aGlzLmxvb3BidG4uY2hpbGRyZW5bMF0ucG9zaXRpb24gPSAodGhpcy5pc0xvb3ApID8gY2MudjMoMzYsIDApIDogY2MudjMoLTE5LCAwKVxuICAgICAgICB0aGlzLmxvb3BidG4uY2hpbGRyZW5bMF0uY29sb3IgPSAodGhpcy5pc0xvb3ApID8gY2MuY29sb3IoKS5mcm9tSEVYKFwiI0ZGMzkyN1wiKSA6IGNjLmNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIilcbiAgICB9XG4gICAgYnRuX2JhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSUNPTi5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgdGhpcy5pc0lDT04uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuYXVkaW9JRClcbiAgICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZVxuICAgICAgICB0aGlzLnBsYXlCdG4uc3ByaXRlRnJhbWUgPSB0aGlzLnNvdW5kT2ZmXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic2NlbmVfY2xvc2VcIik7XG4gICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIH0sIDAuMylcbiAgICB9XG4gICAgc2V0Vm9sdW1lKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNWb2x1bSA9IHZhbHVlXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvSUQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHRoaXMuYXVkaW9JRCwgdmFsdWUpXG5cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==