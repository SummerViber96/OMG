
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/DrawLine/DrawToReveal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4200388gEZCmowxedZX7vWH', 'DrawToReveal');
// DrawLine/DrawToReveal.ts

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
var DrawController = /** @class */ (function (_super) {
    __extends(DrawController, _super);
    function DrawController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drawNode = null; // chứa Graphics
        _this.spark = null; // vệt sáng sprite nhỏ
        _this.tolerance = 20; // khoảng cho phép lệch khỏi đường mẫu
        _this.level1 = null;
        _this.samplePoints = [];
        _this.isDrawing = false;
        _this.lastValidPoint = null;
        return _this;
    }
    DrawController.prototype.onLoad = function () {
        this.gfx = this.drawNode.children[0].getComponent(cc.Graphics);
        this.gfx.lineWidth = 20;
        this.gfx.strokeColor = cc.Color.GREEN;
        // TODO: load path từ JSON hoặc polygon
        this.samplePoints = this.getSamplePath();
        this.spark.opacity = 0;
        var data = this.level1.children[0];
        for (var i = 0; i < data.childrenCount; i++) {
            var pos = data.children[i].position;
            pos = data.convertToWorldSpaceAR(pos);
            pos = this.drawNode.convertToNodeSpaceAR(pos);
            this.samplePoints.push(cc.v2(pos.x, pos.y));
        }
    };
    DrawController.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    DrawController.prototype.onTouchStart = function (event) {
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        if (!this.checkOnPath(pos))
            return;
        this.isDrawing = true;
        this.lastValidPoint = pos;
        this.gfx.moveTo(pos.x, pos.y);
        this.showSpark(pos);
    };
    DrawController.prototype.onTouchMove = function (event) {
        if (!this.isDrawing)
            return;
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        if (!this.checkOnPath(pos)) {
            this.fail();
            return;
        }
        this.gfx.lineTo(pos.x, pos.y);
        this.gfx.stroke();
        this.lastValidPoint = pos;
        this.moveSpark(pos);
    };
    DrawController.prototype.onTouchEnd = function () {
        this.isDrawing = false;
        this.spark.opacity = 0;
    };
    // ---- CHECK NEAR PATH ----
    DrawController.prototype.checkOnPath = function (pos) {
        var nearest = Infinity;
        for (var _i = 0, _a = this.samplePoints; _i < _a.length; _i++) {
            var p = _a[_i];
            var d = pos.sub(p).mag();
            if (d < nearest)
                nearest = d;
            if (d < this.tolerance)
                return true;
        }
        return false;
    };
    // ---- SPARK EFFECT (GLOW) ----
    DrawController.prototype.showSpark = function (pos) {
        this.spark.opacity = 255;
        this.spark.stopAllActions();
        this.spark.position = cc.v3(pos.x, pos.y);
        this.spark.scale = 1;
        cc.tween(this.spark)
            .repeatForever(cc.tween().to(0.3, { scale: 1.5, opacity: 200 }).to(0.3, { scale: 1, opacity: 255 }))
            .start();
    };
    DrawController.prototype.moveSpark = function (pos) {
        this.spark.position = cc.v3(pos.x, pos.y);
    };
    DrawController.prototype.fail = function () {
        this.isDrawing = false;
        this.spark.opacity = 0;
        cc.log("FAIL!!!");
    };
    DrawController.prototype.getSamplePath = function () {
        // Ví dụ tạo 1 đường cong
        return [
            new cc.Vec2(-200, 0),
            new cc.Vec2(-100, 50),
            new cc.Vec2(0, 100),
            new cc.Vec2(100, 50),
            new cc.Vec2(200, 0)
        ];
    };
    __decorate([
        property(cc.Node)
    ], DrawController.prototype, "drawNode", void 0);
    __decorate([
        property(cc.Node)
    ], DrawController.prototype, "spark", void 0);
    __decorate([
        property(cc.Float)
    ], DrawController.prototype, "tolerance", void 0);
    __decorate([
        property(cc.Node)
    ], DrawController.prototype, "level1", void 0);
    DrawController = __decorate([
        ccclass
    ], DrawController);
    return DrawController;
}(cc.Component));
exports.default = DrawController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRHJhd0xpbmVcXERyYXdUb1JldmVhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXlIQztRQXRIRyxjQUFRLEdBQVksSUFBSSxDQUFDLENBQUMsZ0JBQWdCO1FBRzFDLFdBQUssR0FBWSxJQUFJLENBQUMsQ0FBQyxzQkFBc0I7UUFHN0MsZUFBUyxHQUFXLEVBQUUsQ0FBQyxDQUFDLHNDQUFzQztRQUU5RCxZQUFNLEdBQVksSUFBSSxDQUFBO1FBR2Qsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFDN0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixvQkFBYyxHQUFZLElBQUksQ0FBQzs7SUF5RzNDLENBQUM7SUF2R0csK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFdEMsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUl2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFB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Iiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd0NvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZHJhd05vZGU6IGNjLk5vZGUgPSBudWxsOyAvLyBjaOG7qWEgR3JhcGhpY3NcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNwYXJrOiBjYy5Ob2RlID0gbnVsbDsgLy8gduG7h3Qgc8Ohbmcgc3ByaXRlIG5o4buPXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgdG9sZXJhbmNlOiBudW1iZXIgPSAyMDsgLy8ga2hv4bqjbmcgY2hvIHBow6lwIGzhu4djaCBraOG7j2kgxJHGsOG7nW5nIG3huqt1XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxldmVsMTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBwcml2YXRlIGdmeDogY2MuR3JhcGhpY3M7XHJcbiAgICBwcml2YXRlIHNhbXBsZVBvaW50czogY2MuVmVjMltdID0gW107XHJcbiAgICBwcml2YXRlIGlzRHJhd2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBsYXN0VmFsaWRQb2ludDogY2MuVmVjMiA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2Z4ID0gdGhpcy5kcmF3Tm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuZ2Z4LmxpbmVXaWR0aCA9IDIwO1xyXG4gICAgICAgIHRoaXMuZ2Z4LnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcblxyXG4gICAgICAgIC8vIFRPRE86IGxvYWQgcGF0aCB04burIEpTT04gaG/hurdjIHBvbHlnb25cclxuICAgICAgICB0aGlzLnNhbXBsZVBvaW50cyA9IHRoaXMuZ2V0U2FtcGxlUGF0aCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNwYXJrLm9wYWNpdHkgPSAwO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5sZXZlbDEuY2hpbGRyZW5bMF1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBkYXRhLmNoaWxkcmVuW2ldLnBvc2l0aW9uXHJcbiAgICAgICAgICAgIHBvcyA9IGRhdGEuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcylcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5kcmF3Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlUG9pbnRzLnB1c2goY2MudjIocG9zLngsIHBvcy55KSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tPblBhdGgocG9zKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzRHJhd2luZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYXN0VmFsaWRQb2ludCA9IHBvcztcclxuICAgICAgICB0aGlzLmdmeC5tb3ZlVG8ocG9zLngsIHBvcy55KTtcclxuICAgICAgICB0aGlzLnNob3dTcGFyayhwb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmF3aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrT25QYXRoKHBvcykpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWlsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2Z4LmxpbmVUbyhwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgIHRoaXMuZ2Z4LnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMubGFzdFZhbGlkUG9pbnQgPSBwb3M7XHJcbiAgICAgICAgdGhpcy5tb3ZlU3BhcmsocG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwYXJrLm9wYWNpdHkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0gQ0hFQ0sgTkVBUiBQQVRIIC0tLS1cclxuICAgIHByaXZhdGUgY2hlY2tPblBhdGgocG9zOiBjYy5WZWMyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IG5lYXJlc3QgPSBJbmZpbml0eTtcclxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMuc2FtcGxlUG9pbnRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBwb3Muc3ViKHApLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZCA8IG5lYXJlc3QpIG5lYXJlc3QgPSBkO1xyXG4gICAgICAgICAgICBpZiAoZCA8IHRoaXMudG9sZXJhbmNlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0gU1BBUksgRUZGRUNUIChHTE9XKSAtLS0tXHJcbiAgICBwcml2YXRlIHNob3dTcGFyayhwb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICB0aGlzLnNwYXJrLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5zcGFyay5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuc3BhcmsucG9zaXRpb24gPSBjYy52Myhwb3MueCxwb3MueSk7XHJcbiAgICAgICAgdGhpcy5zcGFyay5zY2FsZSA9IDE7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zcGFyaylcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMywgeyBzY2FsZTogMS41LCBvcGFjaXR5OiAyMDAgfSkudG8oMC4zLCB7IHNjYWxlOiAxLCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVTcGFyayhwb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICB0aGlzLnNwYXJrLnBvc2l0aW9uID0gY2MudjMocG9zLngscG9zLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmFpbCgpIHtcclxuICAgICAgICB0aGlzLmlzRHJhd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3Bhcmsub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgY2MubG9nKFwiRkFJTCEhIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNhbXBsZVBhdGgoKTogY2MuVmVjMltdIHtcclxuICAgICAgICAvLyBWw60gZOG7pSB04bqhbyAxIMSRxrDhu51uZyBjb25nXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgbmV3IGNjLlZlYzIoLTIwMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMyKC0xMDAsIDUwKSxcclxuICAgICAgICAgICAgbmV3IGNjLlZlYzIoMCwgMTAwKSxcclxuICAgICAgICAgICAgbmV3IGNjLlZlYzIoMTAwLCA1MCksXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMyKDIwMCwgMClcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==