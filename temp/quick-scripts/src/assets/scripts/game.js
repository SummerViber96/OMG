"use strict";
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