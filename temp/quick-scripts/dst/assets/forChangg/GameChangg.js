
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/forChangg/GameChangg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZm9yQ2hhbmdnXFxHYW1lQ2hhbmdnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbU5DO1FBak5HLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFNBQUcsR0FBYyxJQUFJLENBQUM7UUFFdEIsVUFBSSxHQUFnQixJQUFJLENBQUE7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFBO1FBRWQsa0JBQVksR0FBd0IsSUFBSSxDQUFDO1FBQ3pDLGdCQUFVLEdBQUcsS0FBSyxDQUFDOztJQTRML0IsQ0FBQztJQTFMYSx5QkFBTSxHQUFoQjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUN0QixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZDLGdCQUFnQjtJQUNwQixDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUFBLGlCQXlDQztRQXhDRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFB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UyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtRQUU1QixNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1FBQ3pDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFFeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFB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RXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0U7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQ0FDRTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MENBQ0Q7SUFwQkwsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1ONUI7SUFBRCxlQUFDO0NBbk5ELEFBbU5DLENBbk5xQyxFQUFFLENBQUMsU0FBUyxHQW1OakQ7a0JBbk5vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0TXVzaWM6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dE5vdGk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dE5vdGkyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXROb3RpMzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVObDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmU6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aUVuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBuaGFjOmNjLkF1ZGlvQ2xpcD1udWxsXHJcblxyXG4gICAgcHJpdmF0ZSBfcmFpblNwYXduQ2I6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfaXNSYWluaW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcclxuICAgICAgICBjYy52aWV3LnNldFJlc2l6ZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLm5oYWMsdHJ1ZSwwLjUpXHJcbiAgICAgICAgLy8gdGhpcy5yYWluTmwoKVxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnR1dE5vdGkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDIpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50dXROb3RpKS5ieSgwLjQsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIC0xMDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50dXROb3RpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9LCA1KVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHV0Tm90aTMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yYWluQ29pbig1LCAwLjAzKTtcclxuICAgICAgICB9LCA2KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldpblwiLCB0cnVlKTtcclxuICAgICAgICB9LCA2LjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnR1dE5vdGkzKS5ieSgwLjQsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIC0xMDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50dXROb3RpMy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcFJhaW4oKVxyXG4gICAgICAgIH0sIDgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnR1dE5vdGkyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25HKClcclxuICAgICAgICB9LCAxMClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudHV0Tm90aTIpLmJ5KDAuNCwgeyBvcGFjaXR5OiAtMjU1LCBwb3NpdGlvbjogY2MudjMoMCwgLTEwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1dE5vdGkyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9LCAxMC41ICsgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5hbmltLm5vZGUucGFyZW50XHJcbiAgICAgICAgICAgIGNoYXIuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNoYXIuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDEyLjEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlFbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDE0KVxyXG4gICAgfVxyXG4gICAgYWN0aW9uRygpIHtcclxuICAgICAgICB0aGlzLnJhaW5ObCg1LCAwLjAzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogTcawYSBuxINuZyBsxrDhu6NuZyByxqFpIHThu6sgdHLDqm4geHXhu5FuZyAqL1xyXG4gICAgcmFpbk5sKGR1cmF0aW9uOiBudW1iZXIgPSAzLCBzcGF3bkludGVydmFsOiBudW1iZXIgPSAwLjAzKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFJhaW4odGhpcy5wcmVObCwgZHVyYXRpb24sIHNwYXduSW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBNxrBhIGNvaW4gcsahaSB04burIHRyw6puIHh14buRbmcgKi9cclxuICAgIHJhaW5Db2luKGR1cmF0aW9uOiBudW1iZXIgPSAzLCBzcGF3bkludGVydmFsOiBudW1iZXIgPSAwLjAzKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFJhaW4odGhpcy5wcmUsIGR1cmF0aW9uLCBzcGF3bkludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFJhaW4ocHJlZmFiOiBjYy5QcmVmYWIsIGR1cmF0aW9uOiBudW1iZXIgPSAzLCBzcGF3bkludGVydmFsOiBudW1iZXIgPSAwLjAzKSB7XHJcbiAgICAgICAgaWYgKCFwcmVmYWIgfHwgdGhpcy5faXNSYWluaW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5faXNSYWluaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZWxhcHNlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcmFpblNwYXduQ2IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25SYWluSXRlbShwcmVmYWIpO1xyXG4gICAgICAgICAgICBlbGFwc2VkICs9IHNwYXduSW50ZXJ2YWw7XHJcbiAgICAgICAgICAgIGlmIChlbGFwc2VkID49IGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BSYWluKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3JhaW5TcGF3bkNiKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLl9yYWluU3Bhd25DYiwgc3Bhd25JbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFJhaW4oKSB7XHJcbiAgICAgICAgdGhpcy5faXNSYWluaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JhaW5TcGF3bkNiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl9yYWluU3Bhd25DYik7XHJcbiAgICAgICAgICAgIHRoaXMuX3JhaW5TcGF3bkNiID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25SYWluSXRlbShwcmVmYWI6IGNjLlByZWZhYikge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpdGVtKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFsZlcgPSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCBoYWxmSCA9IGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICBjb25zdCBtYXJnaW5YID0gNjA7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgKiAoaGFsZlcgLSBtYXJnaW5YKTtcclxuICAgICAgICBjb25zdCBzdGFydFkgPSBoYWxmSCArIDgwICsgTWF0aC5yYW5kb20oKSAqIDEyMDtcclxuICAgICAgICBjb25zdCBlbmRZID0gLWhhbGZIIC0gODA7XHJcbiAgICAgICAgY29uc3QgZHJpZnRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTAwO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMi44ICsgTWF0aC5yYW5kb20oKSAqIDEuNTtcclxuICAgICAgICBjb25zdCBzY2FsZSA9IDAuNSArIE1hdGgucmFuZG9tKCkgKiAwLjc7XHJcbiAgICAgICAgY29uc3Qgc3BpbiA9IChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSAqICg2MCArIE1hdGgucmFuZG9tKCkgKiAxMjApO1xyXG5cclxuICAgICAgICBpdGVtLnNldFBvc2l0aW9uKHN0YXJ0WCwgc3RhcnRZKTtcclxuICAgICAgICBpdGVtLnNldFNjYWxlKHNjYWxlKTtcclxuICAgICAgICAvLyBpdGVtLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuXHJcbiAgICAgICAgY2MudHdlZW4oaXRlbSlcclxuICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogY2MudjMoc3RhcnRYICsgZHJpZnRYLCBlbmRZLCAwKSB9LCB7IGVhc2luZzogXCJsaW5lYXJcIiB9KSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoZHVyYXRpb24sIHsgYW5nbGU6IHNwaW4gfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiBpdGVtLmRlc3Ryb3koKSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVSZXNwb25zaXZlKCkge1xyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuODVcclxuXHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMudHV0Tm90aS5zY2FsZSA9IChsb2dpYykgPyAyIDogMVxyXG4gICAgICAgIHRoaXMudHV0Tm90aS5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtMTIwMCkgOiBjYy52MygwLCAtMzc2LjU1MylcclxuICAgICAgICB0aGlzLnR1dE5vdGkyLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgdGhpcy50dXROb3RpMi5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtMTIwMCkgOiBjYy52MygwLCAtMzc2LjU1MylcclxuICAgICAgICB0aGlzLnR1dE5vdGkzLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgdGhpcy50dXROb3RpMy5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtMTIwMCkgOiBjYy52MygwLCAtMzc2LjU1MylcclxuICAgICAgICAvLyB0aGlzLnR1dE11c2ljLnNjYWxlPShsb2dpYyk/MS42OjAuNlxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgY29uc3QgVEFMTF9QSE9ORV9NSU5fUkFUSU8gPSAyLjA7ICAgICAgICAvLyBpUGhvbmUgWCB+Mi4xNiwgMjA6OSBBbmRyb2lkIH4yLjIyXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuN1xyXG4gICAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPj0gVEFMTF9QSE9ORV9NSU5fUkFUSU8pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPiAyLjIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjc1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS41XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjg1XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7IH1cclxufVxyXG4iXX0=