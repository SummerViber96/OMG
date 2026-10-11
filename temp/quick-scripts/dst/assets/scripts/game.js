
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5af46B9aLZI+LEyNB9Bzehq', 'game');
// scripts/game.ts

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
cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.video = null;
        _this.btnCollect = null;
        _this.btnFry = null;
        _this.btnServe = null;
        _this.btnClean = null;
        _this.linkToStore = null;
        _this.soundBg = null;
        _this.soundConfirm = null;
        _this.soundWin = null;
        _this.soundEfx = null;
        _this.soundGirl = null;
        _this.soundCycle = null;
        _this.textGuild = null;
        _this.textGuild2 = null;
        _this.endCard = null;
        _this.linkToStore = null;
        _this.phaohoa = null;
        _this.handGuild = null;
        _this.fillBar = null;
        _this.bar = null;
        _this.percentLabel = null;
        _this.soundEfxId = 0;
        _this.currScreenWidth = null;
        _this.isHorizontal = true;
        _this.isPlay1 = false;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        // LIFE-CYCLE CALLBACKS:
        _this.idSoundCycle = null;
        _this.idSoundGirl = null;
        _this.decaySpeed = 10;
        _this.isStop = true;
        _this.maxProgress = 100;
        _this.currentProgress = 0;
        _this.isvertical = true;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
        var _this = this;
        cc.audioEngine.play(this.soundBg, false, 1);
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.scheduleOnce(function () {
            _this.video.play();
        }, 0.2);
        this.scheduleOnce(function () {
            _this.video.stop();
            _this.btnCollect.getComponent(cc.Button).enabled = true;
            _this.btnCollect.getChildByName("hand").active = true;
            // this.textGuild2.active = true;
        }, 1.2);
        this._stopCallback = function () {
            _this.stopCycle();
        };
        // this.video.node.on('completed', this.onVideoEnd, this);
    };
    // _stopCallback=null
    NewClass.prototype.playCyle = function () {
        if (this.handGuild.active == true) {
            this.handGuild.active = false;
            this.fillBar.fillRange = 0;
            this.percentLabel.string = "0%"; // 👈 init
            this.idSoundCycle = cc.audioEngine.play(this.soundCycle, true, 1);
            this.idSoundGirl = cc.audioEngine.play(this.soundGirl, true, 1);
        }
        this.video.resume();
        cc.audioEngine.resume(this.idSoundCycle);
        cc.audioEngine.resume(this.idSoundGirl);
        this.isStop = false;
    };
    NewClass.prototype.stopCycle = function () {
        cc.audioEngine.pause(this.idSoundCycle);
        cc.audioEngine.pause(this.idSoundGirl);
        this.isStop = true;
        this.video.pause(); // hoặc pause nếu cần
    };
    NewClass.prototype.btn_cycle = function () {
        if (this.isStop) {
            this.playCyle();
        }
        this.addProgress();
        // this.textGuild.active = false;
        cc.audioEngine.play(this.soundConfirm, false, 1);
        this.unschedule(this._stopCallback);
        this.scheduleOnce(this._stopCallback, 1);
    };
    NewClass.prototype.onVideoEnd = function () {
        this.showEndcard();
    };
    NewClass.prototype.showEndcard = function () {
        this.isStop = false;
        this.linkToStore.active = true;
        console.log("endGame");
        // cc.audioEngine.play(this.soundWin, false, 1)
        // this.btnCollect.active = false
        // this.textGuild.active = false
        // this.endCard.active = true
        // this.textGuild.active = false;
        // this.btnCollect.getChildByName("hand").active = false;
        // this.textGuild2.active = false;
        // this.phaohoa.active = true
        // this.scheduleOnce(() => {
        //     this.linkToStore.active = true;
        // }, 0.5)
    };
    NewClass.prototype.addProgress = function () {
        // lực giảm dần (giống ads)
        var power = Math.max(3, 10 - this.currentProgress * 0.05);
        this.currentProgress += power;
        this.currentProgress = Math.min(this.currentProgress, this.maxProgress);
        var percent = this.currentProgress / this.maxProgress;
        // mượt
        cc.tween(this.fillBar)
            .to(1, { fillRange: percent })
            .start();
        var percentText = Math.floor(percent * 100);
        this.updatePercentLabel(percent);
        if (percent >= 1) {
            // this.onFull();
            // this.showEndcard();
        }
        if (percent > 0.8) {
            this.percentLabel.node.scale = 1.2;
        }
        if (percent > 0.5) {
            this.textGuild.children[0].getComponent(cc.Label).string = "Keep going! Almost there!";
        }
        else {
            this.textGuild.children[0].getComponent(cc.Label).string = "Can you make her fit?";
        }
    };
    NewClass.prototype.updatePercentLabel = function (targetPercent) {
        var _this = this;
        var obj = { value: parseFloat(this.percentLabel.string) || 0 };
        cc.tween(obj)
            .to(1, { value: targetPercent * 100 }, {
            progress: function (start, end, current, t) {
                var val = Math.floor(start + (end - start) * t);
                _this.percentLabel.string = val + "%";
                if (val == 90) {
                    _this.showEndcard();
                }
                return current;
            }
        })
            .start();
    };
    NewClass.prototype.onFull = function () {
        // stop mọi thứ
        this.stopCycle();
        // đảm bảo full
        this.fillBar.fillRange = 1;
        // show endcard
        this.showEndcard();
    };
    NewClass.prototype.setScreenSize = function (isHorizontal) {
        this.camera.zoomRatio = 1;
        this.node.getComponent(cc.Canvas).fitWidth = (isHorizontal) ? true : false;
        this.node.getComponent(cc.Canvas).fitHeight = (isHorizontal) ? false : true;
        // this.linkToStore.scale=(isHorizontal)?0.6
        var canvas = this.node.getComponent(cc.Canvas);
        canvas.fitHeight = (isHorizontal) ? true : false;
        canvas.fitWidth = (isHorizontal) ? false : true;
        this.textGuild.y = 405.732;
        this.bar.y = 503.311;
        this.btnCollect.scale = 1;
        this.bar.scale = 0.45;
        this.textGuild.scale = 1;
        this.video.node.scale = 6.4;
        // this.btnCollect.getComponent(cc.Widget).bottom = 62.23
        this.btnCollect.y = -507.769;
        if (isHorizontal == true) {
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
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                this.video.node.scale = 6.5;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
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
                this.video.node.scale = 7.4;
                // this.btnCollect.getComponent(cc.Widget).bottom = 140
                // console.log("man x")
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.72;
                this.btnCollect.scale = 0.8;
                this.btnCollect.y = -507.769 + 140;
                // this.btnCollect.getComponent(cc.Widget).bottom = 50
                this.textGuild.y = 460.895 - 140;
                this.bar.y = 550.017 - 160;
                this.textGuild.scale = 0.8;
                this.bar.scale = 0.3;
            }
        }
    };
    NewClass.prototype.responsive = function () {
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width >= deviceResolution.height) {
            this.setScreenSize(true);
            this.isvertical = false;
        }
        else if (deviceResolution.width < deviceResolution.height) {
            this.setScreenSize(false);
            this.isvertical = true;
        }
    };
    NewClass.prototype.update = function (dt) {
        this.responsive();
        if (this.isStop && this.currentProgress > 0) {
            this.currentProgress -= this.decaySpeed * dt;
            this.currentProgress = Math.max(0, this.currentProgress);
            var target = this.currentProgress / this.maxProgress;
            // lerp mượt
            this.fillBar.fillRange = cc.misc.lerp(this.fillBar.fillRange, target, 0.2);
            var percentText = Math.floor(target * 100);
            this.percentLabel.string = percentText + "%";
        }
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.VideoPlayer)
    ], NewClass.prototype, "video", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnCollect", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnFry", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnServe", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnClean", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundConfirm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEfx", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundGirl", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCycle", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textGuild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textGuild2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaohoa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handGuild", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bar", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "percentLabel", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUUxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNVQztRQXBVRyxZQUFNLEdBQWMsSUFBSSxDQUFBO1FBRXhCLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFHL0IsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsa0JBQVksR0FBYSxJQUFJLENBQUE7UUFDN0IsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFFZixxQkFBZSxHQUFHLElBQUksQ0FB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bGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuY2MubWFjcm8uRU5BQkxFX1RSQU5TUEFSRU5UX0NBTlZBUyA9IHRydWU7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5WaWRlb1BsYXllcilcclxuICAgIHZpZGVvOiBjYy5WaWRlb1BsYXllciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Db2xsZWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkZyeTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5TZXJ2ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5DbGVhbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb25maXJtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRWZ4OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kR2lybDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEN5Y2xlOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0R3VpbGQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRleHRHdWlsZDI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb2hvYTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZEd1aWxkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGxCYXI6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcGVyY2VudExhYmVsOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIHNvdW5kRWZ4SWQgPSAwO1xyXG5cclxuICAgIGN1cnJTY3JlZW5XaWR0aCA9IG51bGw7XHJcblxyXG4gICAgaXNIb3Jpem9udGFsID0gdHJ1ZTtcclxuXHJcbiAgICBpc1BsYXkxID0gZmFsc2U7XHJcblxyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGlkU291bmRDeWNsZSA9IG51bGw7XHJcbiAgICBpZFNvdW5kR2lybCA9IG51bGw7XHJcbiAgICBkZWNheVNwZWVkID0gMTBcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCBmYWxzZSwgMSlcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWRlby5wbGF5KCk7XHJcblxyXG4gICAgICAgIH0sIDAuMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW8uc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5idG5Db2xsZWN0LmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRleHRHdWlsZDIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCAxLjIpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdG9wQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEN5Y2xlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyB0aGlzLnZpZGVvLm5vZGUub24oJ2NvbXBsZXRlZCcsIHRoaXMub25WaWRlb0VuZCwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG4gICAgaXNTdG9wID0gdHJ1ZVxyXG4gICAgLy8gX3N0b3BDYWxsYmFjaz1udWxsXHJcbiAgICBwbGF5Q3lsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5oYW5kR3VpbGQuYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kR3VpbGQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucGVyY2VudExhYmVsLnN0cmluZyA9IFwiMCVcIjsgLy8g8J+RiCBpbml0XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlkU291bmRDeWNsZSA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEN5Y2xlLCB0cnVlLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5pZFNvdW5kR2lybCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdpcmwsIHRydWUsIDEpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52aWRlby5yZXN1bWUoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5pZFNvdW5kQ3ljbGUpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMuaWRTb3VuZEdpcmwpXHJcblxyXG4gICAgICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEN5Y2xlKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuaWRTb3VuZEN5Y2xlKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuaWRTb3VuZEdpcmwpXHJcblxyXG4gICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZpZGVvLnBhdXNlKCk7IC8vIGhv4bq3YyBwYXVzZSBu4bq/dSBj4bqnblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bl9jeWNsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5Q3lsZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRQcm9ncmVzcygpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRleHRHdWlsZC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29uZmlybSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl9zdG9wQ2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuX3N0b3BDYWxsYmFjaywgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25WaWRlb0VuZCgpIHtcclxuICAgICAgICB0aGlzLnNob3dFbmRjYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0VuZGNhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1N0b3AgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kR2FtZVwiKVxyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgLy8gdGhpcy5idG5Db2xsZWN0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gdGhpcy50ZXh0R3VpbGQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAvLyB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vIHRoaXMudGV4dEd1aWxkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuYnRuQ29sbGVjdC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy50ZXh0R3VpbGQyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMucGhhb2hvYS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIH0sIDAuNSlcclxuICAgIH1cclxuICAgIG1heFByb2dyZXNzID0gMTAwXHJcbiAgICBjdXJyZW50UHJvZ3Jlc3MgPSAwXHJcbiAgICBhZGRQcm9ncmVzcygpIHtcclxuICAgICAgICAvLyBs4buxYyBnaeG6o20gZOG6p24gKGdp4buRbmcgYWRzKVxyXG4gICAgICAgIGxldCBwb3dlciA9IE1hdGgubWF4KDMsIDEwIC0gdGhpcy5jdXJyZW50UHJvZ3Jlc3MgKiAwLjA1KTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgKz0gcG93ZXI7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnRQcm9ncmVzcywgdGhpcy5tYXhQcm9ncmVzcyk7XHJcblxyXG4gICAgICAgIGxldCBwZXJjZW50ID0gdGhpcy5jdXJyZW50UHJvZ3Jlc3MgLyB0aGlzLm1heFByb2dyZXNzO1xyXG5cclxuICAgICAgICAvLyBtxrDhu6N0XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5maWxsQmFyKVxyXG4gICAgICAgICAgICAudG8oMSwgeyBmaWxsUmFuZ2U6IHBlcmNlbnQgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgbGV0IHBlcmNlbnRUZXh0ID0gTWF0aC5mbG9vcihwZXJjZW50ICogMTAwKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnRMYWJlbChwZXJjZW50KTtcclxuICAgICAgICBpZiAocGVyY2VudCA+PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMub25GdWxsKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VuZGNhcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwZXJjZW50ID4gMC44KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyY2VudExhYmVsLm5vZGUuc2NhbGUgPSAxLjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwZXJjZW50ID4gMC41KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJLZWVwIGdvaW5nISBBbG1vc3QgdGhlcmUhXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJDYW4geW91IG1ha2UgaGVyIGZpdD9cIlxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlUGVyY2VudExhYmVsKHRhcmdldFBlcmNlbnQpIHtcclxuICAgICAgICBsZXQgb2JqID0geyB2YWx1ZTogcGFyc2VGbG9hdCh0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcpIHx8IDAgfTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4ob2JqKVxyXG4gICAgICAgICAgICAudG8oMSwgeyB2YWx1ZTogdGFyZ2V0UGVyY2VudCAqIDEwMCB9LCB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gTWF0aC5mbG9vcihzdGFydCArIChlbmQgLSBzdGFydCkgKiB0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSB2YWwgKyBcIiVcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09IDkwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VuZGNhcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIG9uRnVsbCgpIHtcclxuICAgICAgICAvLyBzdG9wIG3hu41pIHRo4bupXHJcbiAgICAgICAgdGhpcy5zdG9wQ3ljbGUoKTtcclxuXHJcbiAgICAgICAgLy8gxJHhuqNtIGLhuqNvIGZ1bGxcclxuICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMTtcclxuXHJcbiAgICAgICAgLy8gc2hvdyBlbmRjYXJkXHJcbiAgICAgICAgdGhpcy5zaG93RW5kY2FyZCgpO1xyXG4gICAgfVxyXG4gICAgc2V0U2NyZWVuU2l6ZShpc0hvcml6b250YWwpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gKGlzSG9yaXpvbnRhbCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IChpc0hvcml6b250YWwpID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMubGlua1RvU3RvcmUuc2NhbGU9KGlzSG9yaXpvbnRhbCk/MC42XHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChpc0hvcml6b250YWwpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGlzSG9yaXpvbnRhbCkgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICB0aGlzLnRleHRHdWlsZC55ID0gNDA1LjczMlxyXG4gICAgICAgIHRoaXMuYmFyLnkgPSA1MDMuMzExXHJcbiAgICAgICAgdGhpcy5idG5Db2xsZWN0LnNjYWxlID0gMVxyXG4gICAgICAgIHRoaXMuYmFyLnNjYWxlID0gMC40NTtcclxuICAgICAgICB0aGlzLnRleHRHdWlsZC5zY2FsZSA9IDFcclxuICAgICAgICB0aGlzLnZpZGVvLm5vZGUuc2NhbGUgPSA2LjRcclxuICAgICAgICAvLyB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gNjIuMjNcclxuICAgICAgICB0aGlzLmJ0bkNvbGxlY3QueSA9IC01MDcuNzY5XHJcblxyXG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygtNzAsIDApXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlby5ub2RlLnNjYWxlID0gNi41XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlby5ub2RlLnNjYWxlID0gNy40XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gMTQwXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1hbiB4XCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC43MlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Db2xsZWN0LnNjYWxlID0gMC44XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbGxlY3QueSA9IC01MDcuNzY5ICsgMTQwXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gNTBcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLnkgPSA0NjAuODk1IC0gMTQwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhci55ID0gNTUwLjAxNyAtIDE2MFxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhci5zY2FsZSA9IDAuM1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIGlzdmVydGljYWwgPSB0cnVlXHJcbiAgICByZXNwb25zaXZlKCkge1xyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA+PSBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFNjcmVlblNpemUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFNjcmVlblNpemUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc1N0b3AgJiYgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyAtPSB0aGlzLmRlY2F5U3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSBNYXRoLm1heCgwLCB0aGlzLmN1cnJlbnRQcm9ncmVzcyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5jdXJyZW50UHJvZ3Jlc3MgLyB0aGlzLm1heFByb2dyZXNzO1xyXG5cclxuICAgICAgICAgICAgLy8gbGVycCBtxrDhu6N0XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSBjYy5taXNjLmxlcnAodGhpcy5maWxsQmFyLmZpbGxSYW5nZSwgdGFyZ2V0LCAwLjIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBlcmNlbnRUZXh0ID0gTWF0aC5mbG9vcih0YXJnZXQgKiAxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSBwZXJjZW50VGV4dCArIFwiJVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=