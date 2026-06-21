"use strict";
cc._RF.push(module, '8aaf6xaTYNPCYICPWXe8rbe', 'GameChangg');
// forChangg/GameChangg.ts

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
        _this.camera = null;
        _this.tutMusic = null;
        _this.tutNoti = null;
        _this.tutNoti2 = null;
        _this.tutNoti3 = null;
        _this.preNl = null;
        _this.pre = null;
        _this.anim = null;
        _this.notiEnd = null;
        _this.nhac = null;
        _this._rainSpawnCb = null;
        _this._isRaining = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        this.updateResponsive();
        cc.view.setResizeCallback(function () {
            _this.updateResponsive();
        });
        cc.audioEngine.play(this.nhac, true, 0.5);
        // this.rainNl()
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.tutNoti.active = true;
        }, 2);
        this.scheduleOnce(function () {
            cc.tween(_this.tutNoti).by(0.4, { opacity: -255, position: cc.v3(0, -100) }).call(function () {
                _this.tutNoti.active = false;
            }).start();
        }, 5);
        this.scheduleOnce(function () {
            _this.tutNoti3.active = true;
            _this.rainCoin(5, 0.03);
        }, 6);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "Win", true);
        }, 6.5);
        this.scheduleOnce(function () {
            cc.tween(_this.tutNoti3).by(0.4, { opacity: -255, position: cc.v3(0, -100) }).call(function () {
                _this.tutNoti3.active = false;
            }).start();
            _this.stopRain();
        }, 8);
        this.scheduleOnce(function () {
            _this.tutNoti2.active = true;
            _this.actionG();
        }, 10);
        this.scheduleOnce(function () {
            cc.tween(_this.tutNoti2).by(0.4, { opacity: -255, position: cc.v3(0, -100) }).call(function () {
                _this.tutNoti2.active = false;
            }).start();
        }, 10.5 + 1);
        this.scheduleOnce(function () {
            var char = _this.anim.node.parent;
            char.children[0].active = false;
            char.children[1].active = true;
        }, 12.1);
        this.scheduleOnce(function () {
            _this.notiEnd.active = true;
        }, 14);
    };
    NewClass.prototype.actionG = function () {
        this.rainNl(5, 0.03);
    };
    /** Mưa năng lượng rơi từ trên xuống */
    NewClass.prototype.rainNl = function (duration, spawnInterval) {
        if (duration === void 0) { duration = 3; }
        if (spawnInterval === void 0) { spawnInterval = 0.03; }
        this.startRain(this.preNl, duration, spawnInterval);
    };
    /** Mưa coin rơi từ trên xuống */
    NewClass.prototype.rainCoin = function (duration, spawnInterval) {
        if (duration === void 0) { duration = 3; }
        if (spawnInterval === void 0) { spawnInterval = 0.03; }
        this.startRain(this.pre, duration, spawnInterval);
    };
    NewClass.prototype.startRain = function (prefab, duration, spawnInterval) {
        var _this = this;
        if (duration === void 0) { duration = 3; }
        if (spawnInterval === void 0) { spawnInterval = 0.03; }
        if (!prefab || this._isRaining)
            return;
        this._isRaining = true;
        var elapsed = 0;
        this._rainSpawnCb = function () {
            _this.spawnRainItem(prefab);
            elapsed += spawnInterval;
            if (elapsed >= duration) {
                _this.stopRain();
            }
        };
        this._rainSpawnCb();
        this.schedule(this._rainSpawnCb, spawnInterval);
    };
    NewClass.prototype.stopRain = function () {
        this._isRaining = false;
        if (this._rainSpawnCb) {
            this.unschedule(this._rainSpawnCb);
            this._rainSpawnCb = null;
        }
    };
    NewClass.prototype.spawnRainItem = function (prefab) {
        var item = cc.instantiate(prefab);
        this.node.addChild(item);
        var halfW = cc.winSize.width / 2;
        var halfH = cc.winSize.height / 2;
        var marginX = 60;
        var startX = (Math.random() * 2 - 1) * (halfW - marginX);
        var startY = halfH + 80 + Math.random() * 120;
        var endY = -halfH - 80;
        var driftX = (Math.random() - 0.5) * 100;
        var duration = 2.8 + Math.random() * 1.5;
        var scale = 0.5 + Math.random() * 0.7;
        var spin = (Math.random() > 0.5 ? 1 : -1) * (60 + Math.random() * 120);
        item.setPosition(startX, startY);
        item.setScale(scale);
        // item.angle = Math.random() * 360;
        cc.tween(item)
            .parallel(cc.tween().to(duration, { position: cc.v3(startX + driftX, endY, 0) }, { easing: "linear" }), cc.tween().by(duration, { angle: spin }))
            .call(function () { return item.destroy(); })
            .start();
    };
    NewClass.prototype.updateResponsive = function () {
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 0.85;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.tutNoti.scale = (logic) ? 2 : 1;
        this.tutNoti.position = (logic) ? cc.v3(0, -1200) : cc.v3(0, -376.553);
        this.tutNoti2.scale = (logic) ? 2 : 1;
        this.tutNoti2.position = (logic) ? cc.v3(0, -1200) : cc.v3(0, -376.553);
        this.tutNoti3.scale = (logic) ? 2 : 1;
        this.tutNoti3.position = (logic) ? cc.v3(0, -1200) : cc.v3(0, -376.553);
        // this.tutMusic.scale=(logic)?1.6:0.6
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            var TALL_PHONE_MIN_RATIO = 2.0; // iPhone X ~2.16, 20:9 Android ~2.22
            this.camera.zoomRatio = 1.7;
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {
                if (aspectRatio > 2.2) {
                    this.camera.zoomRatio = 1.75;
                }
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.5;
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
                this.camera.zoomRatio = 0.85;
            }
        }
    };
    NewClass.prototype.update = function (dt) { };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tutMusic", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tutNoti", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tutNoti2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tutNoti3", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preNl", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "pre", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "notiEnd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "nhac", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();