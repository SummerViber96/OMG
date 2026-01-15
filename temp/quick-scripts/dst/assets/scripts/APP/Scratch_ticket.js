
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/Scratch_ticket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8d19gq0JRDd79bbjASbLHt', 'Scratch_ticket');
// scripts/APP/Scratch_ticket.ts

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
var CALC_RECT_WIDTH = 40;
var CLEAR_LINE_WIDTH = 40;
var CC2_1 = require("./CC2");
var Scratch_ticket = /** @class */ (function (_super) {
    __extends(Scratch_ticket, _super);
    function Scratch_ticket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskNode = null;
        _this.camera = null;
        _this.ticketNode = null;
        _this.lineWidth = 0;
        _this.ham = null;
        _this.tutHam = null;
        _this.progerss = 0;
        _this.gamePlay = null;
        _this.calcDebugger = false; // 辅助开关，开启则会绘制划开涂层所属的小格子
        _this.tempDrawPoints = [];
        _this.polygonPointsList = [];
        return _this;
    }
    Scratch_ticket.prototype.onLoad = function () {
        this.reset();
        this.gamePlay = cc.Canvas.instance.node.getComponent(CC2_1.default);
        // this.addEvent()
    };
    Scratch_ticket.prototype.addEvent = function () {
        this.ticketNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.ticketNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.ticketNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.ticketNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    Scratch_ticket.prototype.beforeDestroy = function () {
        this.ticketNode.off(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.ticketNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.ticketNode.off(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.ticketNode.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    Scratch_ticket.prototype.touchStartEvent = function (event) {
        var pos = event.getLocation();
        pos = this.camera.getScreenToWorldPoint(pos);
        var point = this.ticketNode.convertToNodeSpaceAR(pos);
        this.clearMask(point);
        this.ham.active = true;
        // this.gamePlay.handSwipe.active = false;
        // this.gamePlay.handSwipe2.active = false;
    };
    Scratch_ticket.prototype.touchMoveEvent = function (event) {
        var pos = event.getLocation();
        pos = this.camera.getScreenToWorldPoint(pos);
        var posHam = this.ham.parent.convertToNodeSpaceAR(pos);
        var point = this.ticketNode.convertToNodeSpaceAR(pos);
        this.ham.position = posHam;
        this.clearMask(point);
        this.calcProgress();
    };
    Scratch_ticket.prototype.touchEndEvent = function () {
        this.tempDrawPoints = [];
        this.calcProgress();
    };
    Scratch_ticket.prototype.calcProgress = function () {
        var _this = this;
        var hitItemCount = 0;
        var ctx = this.ticketNode.getComponent(cc.Graphics);
        this.polygonPointsList.forEach(function (item) {
            if (!item.isHit)
                return;
            hitItemCount += 1;
            if (!_this.calcDebugger)
                return;
            ctx.rect(item.rect.x, item.rect.y, item.rect.width, item.rect.height);
            ctx.fillColor = cc.color(216, 18, 18, 255);
            ctx.fill();
        });
        this.progerss = Math.ceil((hitItemCount / this.polygonPointsList.length) * 100);
        // console.log(this.progerss);
        if (this.progerss > 5) {
            this.tutHam.active = false;
        }
        if (this.progerss >= 30) {
            this.beforeDestroy();
            this.ham.active = false;
            this.scheduleOnce(function () {
                _this.gamePlay.completeScene();
            }, 0.4);
            cc.tween(this.node).to(0.3, { opacity: 0 }).call(function () {
            }).start();
        }
    };
    Scratch_ticket.prototype.clearMask = function (pos) {
        var mask = this.maskNode.getComponent(cc.Mask);
        var stencil = mask._graphics;
        var len = this.tempDrawPoints.length;
        this.tempDrawPoints.push(pos);
        if (len <= 1) {
            // 只有一个点，用圆来清除涂层
            stencil.circle(pos.x, pos.y, CLEAR_LINE_WIDTH * this.lineWidth);
            stencil.fill();
            // 记录点所在的格子
            this.polygonPointsList.forEach(function (item) {
                if (item.isHit)
                    return;
                var xFlag = pos.x > item.rect.x && pos.x < item.rect.x + item.rect.width;
                var yFlag = pos.y > item.rect.y && pos.y < item.rect.y + item.rect.height;
                if (xFlag && yFlag)
                    item.isHit = true;
            });
        }
        else {
            // 存在多个点，用线段来清除涂层
            var prevPos_1 = this.tempDrawPoints[len - 2];
            var curPos_1 = this.tempDrawPoints[len - 1];
            stencil.moveTo(prevPos_1.x, prevPos_1.y);
            stencil.lineTo(curPos_1.x, curPos_1.y);
            stencil.lineWidth = CLEAR_LINE_WIDTH * 2 * this.lineWidth;
            stencil.lineCap = cc.Graphics.LineCap.ROUND;
            stencil.lineJoin = cc.Graphics.LineJoin.ROUND;
            stencil.strokeColor = cc.color(255, 255, 255, 255);
            stencil.stroke();
            // 记录线段经过的格子
            this.polygonPointsList.forEach(function (item) {
                item.isHit = item.isHit || cc.Intersection.lineRect(prevPos_1, curPos_1, item.rect);
            });
        }
    };
    Scratch_ticket.prototype.reset = function () {
        var mask = this.maskNode.getComponent(cc.Mask);
        mask._graphics.clear();
        this.tempDrawPoints = [];
        this.polygonPointsList = [];
        this.progerss = 0;
        this.ticketNode.getComponent(cc.Graphics).clear();
        // 生成小格子，用来辅助统计涂层的刮开比例
        for (var x = 0; x < this.ticketNode.width; x += CALC_RECT_WIDTH) {
            for (var y = 0; y < this.ticketNode.height; y += CALC_RECT_WIDTH) {
                this.polygonPointsList.push({
                    rect: cc.rect(x - this.ticketNode.width / 2, y - this.ticketNode.height / 2, CALC_RECT_WIDTH, CALC_RECT_WIDTH),
                    isHit: false
                });
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "maskNode", void 0);
    __decorate([
        property(cc.Camera)
    ], Scratch_ticket.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "ticketNode", void 0);
    __decorate([
        property(cc.Float)
    ], Scratch_ticket.prototype, "lineWidth", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "ham", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "tutHam", void 0);
    Scratch_ticket = __decorate([
        ccclass
    ], Scratch_ticket);
    return Scratch_ticket;
}(cc.Component));
exports.default = Scratch_ticket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxTY3JhdGNoX3RpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsNkJBQTRCO0FBRTVCO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBMEpDO1FBeEpDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBQ3RCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBZ0RoQixrQkFBWSxHQUFZLEtBQUssQ0FBQyxDQUFDLHdCQUF3QjtRQStCdkQsb0JBQWMsR0FBYyxFQUFFLENBQUM7UUF1Qy9CLHVCQUFpQixHQUF3QyxFQUFFLENBQUM7O0lBb0I5RCxDQUFDO0lBeElDLCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBUSxDQUFDLENBQUM7UUFDL0Qsa0JBQWtCO0lBQ3BCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFB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REFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDTDtJQUVkO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSTtJQWJILGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EwSmxDO0lBQUQscUJBQUM7Q0ExSkQsQUEwSkMsQ0ExSjJDLEVBQUUsQ0FBQyxTQUFTLEdBMEp2RDtrQkExSm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5jb25zdCBDQUxDX1JFQ1RfV0lEVEggPSA0MDtcclxuY29uc3QgQ0xFQVJfTElORV9XSURUSCA9IDQwO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSAnLi9DQzInXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmF0Y2hfdGlja2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBtYXNrTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgdGlja2V0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICBsaW5lV2lkdGggPSAwO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhhbTogY2MuTm9kZSA9IG51bGxcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICB0dXRIYW06IGNjLk5vZGUgPSBudWxsXHJcbiAgcHJvZ2Vyc3MgPSAwO1xyXG5cclxuICBnYW1lUGxheSA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoR2FtZVBsYXkpO1xyXG4gICAgLy8gdGhpcy5hZGRFdmVudCgpXHJcbiAgfVxyXG5cclxuICBhZGRFdmVudCgpIHtcclxuICAgIHRoaXMudGlja2V0Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMudGlja2V0Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMudGlja2V0Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICB0b3VjaFN0YXJ0RXZlbnQoZXZlbnQpIHtcclxuICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICBwb3MgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zKTtcclxuICAgIGxldCBwb2ludCA9IHRoaXMudGlja2V0Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgdGhpcy5jbGVhck1hc2socG9pbnQpO1xyXG4gICAgdGhpcy5oYW0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gdGhpcy5nYW1lUGxheS5oYW5kU3dpcGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLmdhbWVQbGF5LmhhbmRTd2lwZTIuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0b3VjaE1vdmVFdmVudChldmVudCkge1xyXG4gICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MpO1xyXG4gICAgbGV0IHBvc0hhbSA9IHRoaXMuaGFtLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICBsZXQgcG9pbnQgPSB0aGlzLnRpY2tldE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgIHRoaXMuaGFtLnBvc2l0aW9uID0gcG9zSGFtXHJcbiAgICB0aGlzLmNsZWFyTWFzayhwb2ludCk7XHJcbiAgICB0aGlzLmNhbGNQcm9ncmVzcygpO1xyXG5cclxuICB9XHJcblxyXG4gIHRvdWNoRW5kRXZlbnQoKSB7XHJcbiAgICB0aGlzLnRlbXBEcmF3UG9pbnRzID0gW107XHJcbiAgICB0aGlzLmNhbGNQcm9ncmVzcygpO1xyXG4gIH1cclxuXHJcbiAgY2FsY0RlYnVnZ2VyOiBib29sZWFuID0gZmFsc2U7IC8vIOi+heWKqeW8gOWFs++8jOW8gOWQr+WImeS8mue7mOWItuWIkuW8gOa2guWxguaJgOWxnueahOWwj+agvOWtkFxyXG4gIGNhbGNQcm9ncmVzcygpIHtcclxuICAgIGxldCBoaXRJdGVtQ291bnQgPSAwO1xyXG4gICAgbGV0IGN0eCA9IHRoaXMudGlja2V0Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS5pc0hpdCkgcmV0dXJuO1xyXG4gICAgICBoaXRJdGVtQ291bnQgKz0gMTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5jYWxjRGVidWdnZXIpIHJldHVybjtcclxuICAgICAgY3R4LnJlY3QoaXRlbS5yZWN0LngsIGl0ZW0ucmVjdC55LCBpdGVtLnJlY3Qud2lkdGgsIGl0ZW0ucmVjdC5oZWlnaHQpO1xyXG4gICAgICBjdHguZmlsbENvbG9yID0gY2MuY29sb3IoMjE2LCAxOCwgMTgsIDI1NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByb2dlcnNzID0gTWF0aC5jZWlsKChoaXRJdGVtQ291bnQgLyB0aGlzLnBvbHlnb25Qb2ludHNMaXN0Lmxlbmd0aCkgKiAxMDApO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9nZXJzcyk7XHJcbiAgICBpZiAodGhpcy5wcm9nZXJzcyA+IDUpIHtcclxuICAgICAgdGhpcy50dXRIYW0uYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb2dlcnNzID49IDMwKSB7XHJcbiAgICAgIHRoaXMuYmVmb3JlRGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmhhbS5hY3RpdmU9ZmFsc2VcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuY29tcGxldGVTY2VuZSgpO1xyXG5cclxuICAgICAgfSwgMC40KVxyXG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMywgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGVtcERyYXdQb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gIGNsZWFyTWFzayhwb3MpIHtcclxuICAgIGxldCBtYXNrOiBhbnkgPSB0aGlzLm1hc2tOb2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgIGxldCBzdGVuY2lsID0gbWFzay5fZ3JhcGhpY3M7XHJcbiAgICBjb25zdCBsZW4gPSB0aGlzLnRlbXBEcmF3UG9pbnRzLmxlbmd0aDtcclxuICAgIHRoaXMudGVtcERyYXdQb2ludHMucHVzaChwb3MpO1xyXG5cclxuICAgIGlmIChsZW4gPD0gMSkge1xyXG4gICAgICAvLyDlj6rmnInkuIDkuKrngrnvvIznlKjlnIbmnaXmuIXpmaTmtoLlsYJcclxuICAgICAgc3RlbmNpbC5jaXJjbGUocG9zLngsIHBvcy55LCBDTEVBUl9MSU5FX1dJRFRIICogdGhpcy5saW5lV2lkdGgpO1xyXG4gICAgICBzdGVuY2lsLmZpbGwoKTtcclxuXHJcbiAgICAgIC8vIOiusOW9leeCueaJgOWcqOeahOagvOWtkFxyXG4gICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pc0hpdCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHhGbGFnID0gcG9zLnggPiBpdGVtLnJlY3QueCAmJiBwb3MueCA8IGl0ZW0ucmVjdC54ICsgaXRlbS5yZWN0LndpZHRoO1xyXG4gICAgICAgIGNvbnN0IHlGbGFnID0gcG9zLnkgPiBpdGVtLnJlY3QueSAmJiBwb3MueSA8IGl0ZW0ucmVjdC55ICsgaXRlbS5yZWN0LmhlaWdodDtcclxuICAgICAgICBpZiAoeEZsYWcgJiYgeUZsYWcpIGl0ZW0uaXNIaXQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWtmOWcqOWkmuS4queCue+8jOeUqOe6v+auteadpea4hemZpOa2guWxglxyXG4gICAgICBsZXQgcHJldlBvcyA9IHRoaXMudGVtcERyYXdQb2ludHNbbGVuIC0gMl07XHJcbiAgICAgIGxldCBjdXJQb3MgPSB0aGlzLnRlbXBEcmF3UG9pbnRzW2xlbiAtIDFdO1xyXG5cclxuICAgICAgc3RlbmNpbC5tb3ZlVG8ocHJldlBvcy54LCBwcmV2UG9zLnkpO1xyXG4gICAgICBzdGVuY2lsLmxpbmVUbyhjdXJQb3MueCwgY3VyUG9zLnkpO1xyXG4gICAgICBzdGVuY2lsLmxpbmVXaWR0aCA9IENMRUFSX0xJTkVfV0lEVEggKiAyICogdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgIHN0ZW5jaWwubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgIHN0ZW5jaWwubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcclxuICAgICAgc3RlbmNpbC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIHN0ZW5jaWwuc3Ryb2tlKCk7XHJcblxyXG4gICAgICAvLyDorrDlvZXnur/mrrXnu4/ov4fnmoTmoLzlrZBcclxuICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5pc0hpdCA9IGl0ZW0uaXNIaXQgfHwgY2MuSW50ZXJzZWN0aW9uLmxpbmVSZWN0KHByZXZQb3MsIGN1clBvcywgaXRlbS5yZWN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb2x5Z29uUG9pbnRzTGlzdDogeyByZWN0OiBjYy5SZWN0OyBpc0hpdDogYm9vbGVhbiB9W10gPSBbXTtcclxuICByZXNldCgpIHtcclxuICAgIGxldCBtYXNrOiBhbnkgPSB0aGlzLm1hc2tOb2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgIG1hc2suX2dyYXBoaWNzLmNsZWFyKCk7XHJcblxyXG4gICAgdGhpcy50ZW1wRHJhd1BvaW50cyA9IFtdO1xyXG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5wcm9nZXJzcyA9IDA7XHJcbiAgICB0aGlzLnRpY2tldE5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKS5jbGVhcigpO1xyXG5cclxuICAgIC8vIOeUn+aIkOWwj+agvOWtkO+8jOeUqOadpei+heWKqee7n+iuoea2guWxgueahOWIruW8gOavlOS+i1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnRpY2tldE5vZGUud2lkdGg7IHggKz0gQ0FMQ19SRUNUX1dJRFRIKSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy50aWNrZXROb2RlLmhlaWdodDsgeSArPSBDQUxDX1JFQ1RfV0lEVEgpIHtcclxuICAgICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LnB1c2goe1xyXG4gICAgICAgICAgcmVjdDogY2MucmVjdCh4IC0gdGhpcy50aWNrZXROb2RlLndpZHRoIC8gMiwgeSAtIHRoaXMudGlja2V0Tm9kZS5oZWlnaHQgLyAyLCBDQUxDX1JFQ1RfV0lEVEgsIENBTENfUkVDVF9XSURUSCksXHJcbiAgICAgICAgICBpc0hpdDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=