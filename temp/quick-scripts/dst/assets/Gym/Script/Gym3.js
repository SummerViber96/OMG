
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Gym/Script/Gym3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.npc = null;
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
        _this.arr50rep = 0;
        _this.isSpeedUp = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBG, true, 0.5);
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
        cc.audioEngine.play(this.soundPut, false, 1);
        this.pop.active = false;
        this.you.getComponent(cc.Animation).play();
        if (this.isFirst == false) {
            // this.texTnoti.node.parent.active = true
            this.isFirst = true;
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
        this.avtMonster.getComponent("rep").upgradeMonster();
        this.avtYou.getComponent("rep").upgradeMonster();
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
            this.phaohoa.active =
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
        var isHeroWinning = globalThis.youRep > globalThis.monsterRep;
        // không đổi trạng thái thì bỏ qua
        if (this.isHeroLead == isHeroWinning)
            return;
        this.isHeroLead = isHeroWinning;
        if (isHeroWinning) {
            this.crowHero.active = true;
            this.crowMonster.active = false;
            this.heroAnim.play();
            console.log("crow Hero");
        }
        else {
            this.crowHero.active = false;
            this.crowMonster.active = true;
            this.monsterAnim.play();
            console.log("crow Monster");
        }
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.camera.node.position = cc.v3(0, 0);
        // this.npc.scale = (logic) ? 1.7 : 1
        // this.npc.y = (logic) ? -700 : 0
        this.endCard.scale = (logic) ? 1.5 : 0.7;
        this.logo.scale = (logic) ? 1.5 : 1;
        this.logo.getComponent(cc.Widget).top = 48;
        // this.barCoin.y=(logic)?400:470
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
            this.camera.zoomRatio = 1.7;
            this.camera.node.position = cc.v3(150, 0);
            this.phaohoa.scale = (logic) ? 7 : 3;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.logo.getComponent(cc.Widget).top = 48 + 30;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.4;
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
                this.camera.zoomRatio = 0.8;
            }
        }
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "npc", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXEd5bTMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUE7QUFFckI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErUUM7UUE3UUcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBR25CLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFBO1FBRTlCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUlwQixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixnQkFBVSxHQUFtQixJQUFJLENBQUE7UUFDakMsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUU1QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIs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QUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ1E7SUFJakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQXZEVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK1E1QjtJQUFELGVBQUM7Q0EvUUQsQUErUUMsQ0EvUXFDLEVBQUUsQ0FBQyxTQUFTLEdBK1FqRDtrQkEvUW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5nb2xkID0gMTAwXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5wYzogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCRzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENvaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb25maXJtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kT3ZlcjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kUHV0OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBoYW9ob2E6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHlvdTogY2MuTm9kZVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtb25zdGVyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhdnRZb3U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhdnRNb25zdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQmVhdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3aW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9zZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBmaWxsWWVsbG93OiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIC8vIHRleFRub3RpOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9wOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0SGFsZjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3Jvd0hlcm86IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjcm93TW9uc3RlcjogY2MuTm9kZSA9IG51bGxcclxuICAgIGFyclBvc0N1cyA9IFtdXHJcbiAgICBhcnJDdXMgPSBbXVxyXG4gICAgYXJyQ3J1bmNoID0gW11cclxuICAgIGlzSGluZCA9IGZhbHNlXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgaXNFbmRnYW1lID0gZmFsc2VcclxuICAgIHByaXZhdGUgaXNIZXJvTGVhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgaGVyb0FuaW0gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtb25zdGVyQW5pbSA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQkcsIHRydWUsIDAuNSlcclxuICAgICAgICB0aGlzLmhlcm9BbmltID0gdGhpcy5jcm93SGVyby5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLm1vbnN0ZXJBbmltID0gdGhpcy5jcm93TW9uc3Rlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuXHJcbiAgICB9XHJcbiAgICBpc0ZpcnN0ID0gZmFsc2VcclxuICAgIGlzRGVsYXkgPSBmYWxzZVxyXG4gICAgZGVsYXlUaW1lID0gMC4xNVxyXG4gICAgYnRuX1lvdUhpdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGF5KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0RlbGF5ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0RlbGF5ID0gZmFsc2VcclxuXHJcbiAgICAgICAgfSwgdGhpcy5kZWxheVRpbWUpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUHV0LCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnBvcC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMueW91LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3QgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy50ZXhUbm90aS5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgbW9uc3RlckhpdCgpIHtcclxuICAgICAgICB0aGlzLm1vbnN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnRNb25zdGVyKCkge1xyXG4gICAgICAgIHRoaXMubW9uc3Rlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB0aGlzLmNyb3dNb25zdGVyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubW9uc3RlckhpdCwgMC43LCAxKVxyXG4gICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vIHRoaXMubnBjLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5wb3AuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmJ0bkJlYXQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmJ0bkJlYXQuc2NhbGUgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKClcclxuXHJcbiAgICAgICAgICAgIH0sIDAuNClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5idG5CZWF0KS5kZWxheSg1KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubnBjLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMjUsIHsgc2NhbGU6IDEuMSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IDEgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH0sIDIuNSlcclxuXHJcbiAgICB9XHJcbiAgICBhcnI1MHJlcCA9IDBcclxuICAgIHRvNTByZXAoKSB7XHJcbiAgICAgICAgdGhpcy5hcnI1MHJlcCsrXHJcbiAgICAgICAgaWYgKHRoaXMuYXJyNTByZXAgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRIYWxmLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRVcCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNTcGVlZFVwID0gZmFsc2VcclxuICAgIHNwZWVkVXAoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzcGVlZFVwXCIpXHJcbiAgICAgICAgdGhpcy5pc1NwZWVkVXAgPSB0cnVlXHJcbiAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bkJlYXQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLm1vbnN0ZXJIaXQpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5tb25zdGVySGl0LCAwLjQpO1xyXG4gICAgICAgIHRoaXMuYXZ0TW9uc3Rlci5nZXRDaGlsZEJ5TmFtZShcImZpbGxcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmZpbGxZZWxsb3c7XHJcbiAgICAgICAgdGhpcy5hdnRZb3UuZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsWWVsbG93XHJcbiAgICAgICAgdGhpcy5hdnRNb25zdGVyLmdldENvbXBvbmVudChcInJlcFwiKS51cGdyYWRlTW9uc3RlcigpXHJcbiAgICAgICAgdGhpcy5hdnRZb3UuZ2V0Q29tcG9uZW50KFwicmVwXCIpLnVwZ3JhZGVNb25zdGVyKClcclxuICAgICAgICB0aGlzLmRlbGF5VGltZSA9IDAuMVxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRHYW1lXCIpXHJcbiAgICAgICAgdGhpcy5tb25zdGVySGl0KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubW9uc3RlckhpdCwgMC42KVxyXG4gICAgfVxyXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRnYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLm1vbnN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcCgpXHJcbiAgICAgICAgdGhpcy5idG5CZWF0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMueW91LmdldENvbXBvbmVudChcInJlcFwiKS5zdG9wRmlsbCgpXHJcbiAgICAgICAgdGhpcy5tb25zdGVyLmdldENvbXBvbmVudChcInJlcFwiKS5zdG9wRmlsbCgpXHJcblxyXG4gICAgICAgIHRoaXMuaXNFbmRnYW1lID0gdHJ1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLndpbk5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnBoYW9ob2EuYWN0aXZlID1cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvc2VOb2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kT3ZlciwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5pc1NwZWVkVXApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGlzSGVyb1dpbm5pbmcgPSBnbG9iYWxUaGlzLnlvdVJlcCA+IGdsb2JhbFRoaXMubW9uc3RlclJlcDtcclxuICAgICAgICAvLyBraMO0bmcgxJHhu5VpIHRy4bqhbmcgdGjDoWkgdGjDrCBi4buPIHF1YVxyXG4gICAgICAgIGlmICh0aGlzLmlzSGVyb0xlYWQgPT0gaXNIZXJvV2lubmluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzSGVyb0xlYWQgPSBpc0hlcm9XaW5uaW5nO1xyXG5cclxuICAgICAgICBpZiAoaXNIZXJvV2lubmluZykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jcm93SGVyby5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNyb3dNb25zdGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oZXJvQW5pbS5wbGF5KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JvdyBIZXJvXCIpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNyb3dIZXJvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNyb3dNb25zdGVyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJBbmltLnBsYXkoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcm93IE1vbnN0ZXJcIilcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMVxyXG5cclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwKVxyXG4gICAgICAgIC8vIHRoaXMubnBjLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICAvLyB0aGlzLm5wYy55ID0gKGxvZ2ljKSA/IC03MDAgOiAwXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuNSA6IDAuN1xyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAxLjUgOiAxXHJcblxyXG4gICAgICAgIHRoaXMubG9nby5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA0OFxyXG4gICAgICAgIC8vIHRoaXMuYmFyQ29pbi55PShsb2dpYyk/NDAwOjQ3MFxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC03MCwgMClcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuN1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMTUwLCAwKVxyXG4gICAgICAgICAgICB0aGlzLnBoYW9ob2Euc2NhbGUgPSAobG9naWMpID8gNyA6IDNcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVjayBpcGhvbmV4XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNDggKyAzMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==