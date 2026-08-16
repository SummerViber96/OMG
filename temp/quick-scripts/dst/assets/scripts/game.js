
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUUxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNVQztRQXBVRyxZQUFNLEdBQWMsSUFBSSxDQUFBO1FBRXhCLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFHL0IsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsa0JBQVksR0FBYSxJQUFJLENBQUE7UUFDN0IsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFFZixxQkFBZSxHQUFHLElBQUksQ0FB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bGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuY2MubWFjcm8uRU5BQkxFX1RSQU5TUEFSRU5UX0NBTlZBUyA9IHRydWU7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlZpZGVvUGxheWVyKVxuICAgIHZpZGVvOiBjYy5WaWRlb1BsYXllciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5Db2xsZWN0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bkZyeTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5TZXJ2ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5DbGVhbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZENvbmZpcm06IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kRWZ4OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRHaXJsOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDeWNsZTogY2MuQXVkaW9DbGlwID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGV4dEd1aWxkOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRleHRHdWlsZDI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGhhb2hvYTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kR3VpbGQ6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmFyOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwZXJjZW50TGFiZWw6IGNjLkxhYmVsID0gbnVsbFxuICAgIHNvdW5kRWZ4SWQgPSAwO1xuXG4gICAgY3VyclNjcmVlbldpZHRoID0gbnVsbDtcblxuICAgIGlzSG9yaXpvbnRhbCA9IHRydWU7XG5cbiAgICBpc1BsYXkxID0gZmFsc2U7XG5cbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgaWRTb3VuZEN5Y2xlID0gbnVsbDtcbiAgICBpZFNvdW5kR2lybCA9IG51bGw7XG4gICAgZGVjYXlTcGVlZCA9IDEwXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIGZhbHNlLCAxKVxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvLnBsYXkoKTtcblxuICAgICAgICB9LCAwLjIpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8uc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5idG5Db2xsZWN0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB0aGlzLnRleHRHdWlsZDIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSwgMS4yKTtcblxuICAgICAgICB0aGlzLl9zdG9wQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3BDeWNsZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzLnZpZGVvLm5vZGUub24oJ2NvbXBsZXRlZCcsIHRoaXMub25WaWRlb0VuZCwgdGhpcyk7XG5cbiAgICB9XG4gICAgaXNTdG9wID0gdHJ1ZVxuICAgIC8vIF9zdG9wQ2FsbGJhY2s9bnVsbFxuICAgIHBsYXlDeWxlKCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kR3VpbGQuYWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZEd1aWxkLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMDtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudExhYmVsLnN0cmluZyA9IFwiMCVcIjsgLy8g8J+RiCBpbml0XG5cbiAgICAgICAgICAgIHRoaXMuaWRTb3VuZEN5Y2xlID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ3ljbGUsIHRydWUsIDEpO1xuICAgICAgICAgICAgdGhpcy5pZFNvdW5kR2lybCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdpcmwsIHRydWUsIDEpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlkZW8ucmVzdW1lKCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLmlkU291bmRDeWNsZSlcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMuaWRTb3VuZEdpcmwpXG5cbiAgICAgICAgdGhpcy5pc1N0b3AgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdG9wQ3ljbGUoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuaWRTb3VuZEN5Y2xlKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLmlkU291bmRHaXJsKVxuXG4gICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWRlby5wYXVzZSgpOyAvLyBob+G6t2MgcGF1c2UgbuG6v3UgY+G6p25cbiAgICB9XG5cbiAgICBidG5fY3ljbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q3lsZSgpO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRQcm9ncmVzcygpO1xuXG4gICAgICAgIC8vIHRoaXMudGV4dEd1aWxkLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbmZpcm0sIGZhbHNlLCAxKVxuXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl9zdG9wQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLl9zdG9wQ2FsbGJhY2ssIDEpO1xuICAgIH1cblxuICAgIG9uVmlkZW9FbmQoKSB7XG4gICAgICAgIHRoaXMuc2hvd0VuZGNhcmQoKTtcbiAgICB9XG5cbiAgICBzaG93RW5kY2FyZCgpIHtcbiAgICAgICAgdGhpcy5pc1N0b3AgPSBmYWxzZVxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmRHYW1lXCIpXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXG4gICAgICAgIC8vIHRoaXMuYnRuQ29sbGVjdC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAvLyB0aGlzLnRleHRHdWlsZC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAvLyB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAvLyB0aGlzLnRleHRHdWlsZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5idG5Db2xsZWN0LmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy50ZXh0R3VpbGQyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnBoYW9ob2EuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgLy8gfSwgMC41KVxuICAgIH1cbiAgICBtYXhQcm9ncmVzcyA9IDEwMFxuICAgIGN1cnJlbnRQcm9ncmVzcyA9IDBcbiAgICBhZGRQcm9ncmVzcygpIHtcbiAgICAgICAgLy8gbOG7sWMgZ2nhuqNtIGThuqduIChnaeG7kW5nIGFkcylcbiAgICAgICAgbGV0IHBvd2VyID0gTWF0aC5tYXgoMywgMTAgLSB0aGlzLmN1cnJlbnRQcm9ncmVzcyAqIDAuMDUpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFByb2dyZXNzICs9IHBvd2VyO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IE1hdGgubWluKHRoaXMuY3VycmVudFByb2dyZXNzLCB0aGlzLm1heFByb2dyZXNzKTtcblxuICAgICAgICBsZXQgcGVyY2VudCA9IHRoaXMuY3VycmVudFByb2dyZXNzIC8gdGhpcy5tYXhQcm9ncmVzcztcblxuICAgICAgICAvLyBtxrDhu6N0XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbEJhcilcbiAgICAgICAgICAgIC50bygxLCB7IGZpbGxSYW5nZTogcGVyY2VudCB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIGxldCBwZXJjZW50VGV4dCA9IE1hdGguZmxvb3IocGVyY2VudCAqIDEwMCk7XG4gICAgICAgIHRoaXMudXBkYXRlUGVyY2VudExhYmVsKHBlcmNlbnQpO1xuICAgICAgICBpZiAocGVyY2VudCA+PSAxKSB7XG4gICAgICAgICAgICAvLyB0aGlzLm9uRnVsbCgpO1xuICAgICAgICAgICAgLy8gdGhpcy5zaG93RW5kY2FyZCgpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnQgPiAwLjgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudExhYmVsLm5vZGUuc2NhbGUgPSAxLjI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnQgPiAwLjUpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJLZWVwIGdvaW5nISBBbG1vc3QgdGhlcmUhXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJDYW4geW91IG1ha2UgaGVyIGZpdD9cIlxuXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVQZXJjZW50TGFiZWwodGFyZ2V0UGVyY2VudCkge1xuICAgICAgICBsZXQgb2JqID0geyB2YWx1ZTogcGFyc2VGbG9hdCh0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcpIHx8IDAgfTtcblxuICAgICAgICBjYy50d2VlbihvYmopXG4gICAgICAgICAgICAudG8oMSwgeyB2YWx1ZTogdGFyZ2V0UGVyY2VudCAqIDEwMCB9LCB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCB0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBNYXRoLmZsb29yKHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSB2YWwgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSA5MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RW5kY2FyZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cbiAgICBvbkZ1bGwoKSB7XG4gICAgICAgIC8vIHN0b3AgbeG7jWkgdGjhu6lcbiAgICAgICAgdGhpcy5zdG9wQ3ljbGUoKTtcblxuICAgICAgICAvLyDEkeG6o20gYuG6o28gZnVsbFxuICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMTtcblxuICAgICAgICAvLyBzaG93IGVuZGNhcmRcbiAgICAgICAgdGhpcy5zaG93RW5kY2FyZCgpO1xuICAgIH1cbiAgICBzZXRTY3JlZW5TaXplKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IChpc0hvcml6b250YWwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0SGVpZ2h0ID0gKGlzSG9yaXpvbnRhbCkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIC8vIHRoaXMubGlua1RvU3RvcmUuc2NhbGU9KGlzSG9yaXpvbnRhbCk/MC42XG5cbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChpc0hvcml6b250YWwpID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChpc0hvcml6b250YWwpID8gZmFsc2UgOiB0cnVlXG4gICAgICAgIHRoaXMudGV4dEd1aWxkLnkgPSA0MDUuNzMyXG4gICAgICAgIHRoaXMuYmFyLnkgPSA1MDMuMzExXG4gICAgICAgIHRoaXMuYnRuQ29sbGVjdC5zY2FsZSA9IDFcbiAgICAgICAgdGhpcy5iYXIuc2NhbGUgPSAwLjQ1O1xuICAgICAgICB0aGlzLnRleHRHdWlsZC5zY2FsZSA9IDFcbiAgICAgICAgdGhpcy52aWRlby5ub2RlLnNjYWxlID0gNi40XG4gICAgICAgIC8vIHRoaXMuYnRuQ29sbGVjdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSA2Mi4yM1xuICAgICAgICB0aGlzLmJ0bkNvbGxlY3QueSA9IC01MDcuNzY5XG5cbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xuXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTcwLCAwKVxuXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlby5ub2RlLnNjYWxlID0gNi41XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcblxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XG5cbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5vZGUuc2NhbGUgPSA3LjRcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gMTQwXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYW4geFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuNzJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbGxlY3Quc2NhbGUgPSAwLjhcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbGxlY3QueSA9IC01MDcuNzY5ICsgMTQwXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5idG5Db2xsZWN0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IDUwXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQueSA9IDQ2MC44OTUgLSAxNDBcbiAgICAgICAgICAgICAgICB0aGlzLmJhci55ID0gNTUwLjAxNyAtIDE2MFxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLnNjYWxlID0gMC44O1xuICAgICAgICAgICAgICAgIHRoaXMuYmFyLnNjYWxlID0gMC4zXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgIH1cbiAgICBpc3ZlcnRpY2FsID0gdHJ1ZVxuICAgIHJlc3BvbnNpdmUoKSB7XG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPj0gZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFNjcmVlblNpemUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlKCk7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcCAmJiB0aGlzLmN1cnJlbnRQcm9ncmVzcyA+IDApIHtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgLT0gdGhpcy5kZWNheVNwZWVkICogZHQ7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IE1hdGgubWF4KDAsIHRoaXMuY3VycmVudFByb2dyZXNzKTtcblxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuY3VycmVudFByb2dyZXNzIC8gdGhpcy5tYXhQcm9ncmVzcztcblxuICAgICAgICAgICAgLy8gbGVycCBtxrDhu6N0XG4gICAgICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gY2MubWlzYy5sZXJwKHRoaXMuZmlsbEJhci5maWxsUmFuZ2UsIHRhcmdldCwgMC4yKTtcblxuICAgICAgICAgICAgbGV0IHBlcmNlbnRUZXh0ID0gTWF0aC5mbG9vcih0YXJnZXQgKiAxMDApO1xuICAgICAgICAgICAgdGhpcy5wZXJjZW50TGFiZWwuc3RyaW5nID0gcGVyY2VudFRleHQgKyBcIiVcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==