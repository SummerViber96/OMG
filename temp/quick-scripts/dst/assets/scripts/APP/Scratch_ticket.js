
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
        _this.soundCao = null;
        _this.scene1 = null;
        _this.progerss = 0;
        _this.gamePlay = null;
        _this.isDelaySound = false;
        _this.isIdCao = null;
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
        var _this = this;
        var pos = event.getLocation();
        pos = this.camera.getScreenToWorldPoint(pos);
        var point = this.ticketNode.convertToNodeSpaceAR(pos);
        var isNew = this.clearMask(point);
        this.ham.active = true;
        if (this.isIdCao && isNew) {
            cc.audioEngine.stop(this.isIdCao);
            this.isIdCao = cc.audioEngine.play(this.soundCao, false, 2);
            this.isDelaySound = true;
            this.scheduleOnce(function () {
                _this.isDelaySound = false;
            }, 0.2);
        }
        var pos2 = event.getLocation();
        pos2 = this.camera.getScreenToWorldPoint(pos2);
        var posHam = this.ham.parent.convertToNodeSpaceAR(pos2);
        this.ham.position = posHam.add(cc.v3(0, -50));
        // this.gamePlay.handSwipe.active = false;
        // this.gamePlay.handSwipe2.active = false;
    };
    Scratch_ticket.prototype.touchMoveEvent = function (event) {
        var _this = this;
        var pos = event.getLocation();
        pos = this.camera.getScreenToWorldPoint(pos);
        var posHam = this.ham.parent.convertToNodeSpaceAR(pos);
        var point = this.ticketNode.convertToNodeSpaceAR(pos);
        this.ham.position = posHam.add(cc.v3(0, -50));
        var isNew = this.clearMask(point);
        this.calcProgress();
        if (isNew) {
            if (!this.isDelaySound) {
                this.isDelaySound = true;
                cc.audioEngine.play(this.soundCao, false, 2);
                this.scheduleOnce(function () {
                    _this.isDelaySound = false;
                }, 0.1);
            }
        }
    };
    Scratch_ticket.prototype.touchEndEvent = function () {
        if (this.isIdCao) {
            cc.audioEngine.stop(this.isIdCao);
        }
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
        if (this.progerss >= 50) {
            this.beforeDestroy();
            this.ham.active = false;
            this.scheduleOnce(function () {
                _this.scene1.getComponent("Scene1").endGame();
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
        var isNewScratch = false; // 👈 quan trọng
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
                if (xFlag && yFlag) {
                    isNewScratch = true; // ✅ có cạo mới
                    item.isHit = true;
                }
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
                // item.isHit = item.isHit || cc.Intersection.lineRect(prevPos, curPos, item.rect);
                if (item.isHit)
                    return;
                if (cc.Intersection.lineRect(prevPos_1, curPos_1, item.rect)) {
                    item.isHit = true;
                    isNewScratch = true; // ✅ có cạo mới
                }
            });
        }
        return isNewScratch;
    };
    Scratch_ticket.prototype.reset = function () {
        var mask = this.maskNode.getComponent(cc.Mask);
        mask._graphics.clear();
        this.tempDrawPoints = [];
        this.polygonPointsList = [];
        this.progerss = 0;
        this.ticketNode.getComponent(cc.Graphics).clear();
        // 生成小格子，用来辅助统计涂层的刮开比例
        for (var x = 0; x < 250; x += CALC_RECT_WIDTH) {
            for (var y = 0; y < 270; y += CALC_RECT_WIDTH) {
                this.polygonPointsList.push({
                    rect: cc.rect(x - 250 / 2, y - 270 / 2, CALC_RECT_WIDTH, CALC_RECT_WIDTH),
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
    __decorate([
        property(cc.AudioClip)
    ], Scratch_ticket.prototype, "soundCao", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "scene1", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxTY3JhdGNoX3RpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsNkJBQTRCO0FBRTVCO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBc01DO1FBcE1DLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLFlBQU0sR0FBUyxJQUFJLENBQUE7UUFDbkIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUViLGNBQVEsR0FBRyxJQUFJLENBQUM7UUE0Q2hCLGtCQUFZLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLGFBQU8sR0FBRyxJQUFJLENBQUE7UUErQmQsa0JBQVksR0FBWSxLQUFLLENBQUMsQ0FBQyx3QkFBd0I7UUErQnZELG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBbUQvQix1QkFBaUIsR0FBd0MsRUFBRSxDQUFDOztJQW9COUQsQ0FBQztJQWhMQywrQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQVEsQ0FBQyxDQUFDO1FBQy9ELGtCQUFrQjtJQUNwQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFh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LENBQUMsU0FBUyxHQXNNdkQ7a0JBdE1vQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuY29uc3QgQ0FMQ19SRUNUX1dJRFRIID0gNDA7XHJcbmNvbnN0IENMRUFSX0xJTkVfV0lEVEggPSA0MDtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gJy4vQ0MyJ1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JhdGNoX3RpY2tldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgbWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRpY2tldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgbGluZVdpZHRoID0gMDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBoYW06IGNjLk5vZGUgPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgdHV0SGFtOiBjYy5Ob2RlID0gbnVsbFxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgc291bmRDYW86IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBzY2VuZTE6Y2MuTm9kZT1udWxsXHJcbiAgcHJvZ2Vyc3MgPSAwO1xyXG5cclxuICBnYW1lUGxheSA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoR2FtZVBsYXkpO1xyXG4gICAgLy8gdGhpcy5hZGRFdmVudCgpXHJcbiAgfVxyXG5cclxuICBhZGRFdmVudCgpIHtcclxuICAgIHRoaXMudGlja2V0Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMudGlja2V0Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMudGlja2V0Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICB0b3VjaFN0YXJ0RXZlbnQoZXZlbnQpIHtcclxuICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICBwb3MgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zKTtcclxuICAgIGxldCBwb2ludCA9IHRoaXMudGlja2V0Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgbGV0IGlzTmV3ID0gdGhpcy5jbGVhck1hc2socG9pbnQpO1xyXG4gICAgdGhpcy5oYW0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgaWYgKHRoaXMuaXNJZENhbyAmJiBpc05ldykge1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaXNJZENhbylcclxuICAgICAgdGhpcy5pc0lkQ2FvID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2FvLCBmYWxzZSwgMilcclxuICAgICAgdGhpcy5pc0RlbGF5U291bmQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0RlbGF5U291bmQgPSBmYWxzZVxyXG4gICAgICB9LCAwLjIpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBvczIgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICBwb3MyID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvczIpO1xyXG4gICAgbGV0IHBvc0hhbSA9IHRoaXMuaGFtLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MyKVxyXG4gICAgdGhpcy5oYW0ucG9zaXRpb24gPSBwb3NIYW0uYWRkKGNjLnYzKDAsLTUwKSlcclxuICAgIC8vIHRoaXMuZ2FtZVBsYXkuaGFuZFN3aXBlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5nYW1lUGxheS5oYW5kU3dpcGUyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuICBpc0RlbGF5U291bmQgPSBmYWxzZVxyXG4gIGlzSWRDYW8gPSBudWxsXHJcbiAgdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcclxuXHJcblxyXG4gICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MpO1xyXG4gICAgbGV0IHBvc0hhbSA9IHRoaXMuaGFtLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICBsZXQgcG9pbnQgPSB0aGlzLnRpY2tldE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgIHRoaXMuaGFtLnBvc2l0aW9uID0gcG9zSGFtLmFkZChjYy52MygwLC01MCkpXHJcbiAgICBsZXQgaXNOZXcgPSB0aGlzLmNsZWFyTWFzayhwb2ludCk7XHJcbiAgICB0aGlzLmNhbGNQcm9ncmVzcygpO1xyXG4gICAgaWYgKGlzTmV3KSB7XHJcbiAgICAgIGlmICghdGhpcy5pc0RlbGF5U291bmQpIHtcclxuICAgICAgICB0aGlzLmlzRGVsYXlTb3VuZCA9IHRydWU7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2FvLCBmYWxzZSwgMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzRGVsYXlTb3VuZCA9IGZhbHNlXHJcbiAgICAgICAgfSwgMC4xKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b3VjaEVuZEV2ZW50KCkge1xyXG4gICAgaWYgKHRoaXMuaXNJZENhbykge1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaXNJZENhbylcclxuXHJcbiAgICB9XHJcbiAgICB0aGlzLnRlbXBEcmF3UG9pbnRzID0gW107XHJcbiAgICB0aGlzLmNhbGNQcm9ncmVzcygpO1xyXG4gIH1cclxuXHJcbiAgY2FsY0RlYnVnZ2VyOiBib29sZWFuID0gZmFsc2U7IC8vIOi+heWKqeW8gOWFs++8jOW8gOWQr+WImeS8mue7mOWItuWIkuW8gOa2guWxguaJgOWxnueahOWwj+agvOWtkFxyXG4gIGNhbGNQcm9ncmVzcygpIHtcclxuICAgIGxldCBoaXRJdGVtQ291bnQgPSAwO1xyXG4gICAgbGV0IGN0eCA9IHRoaXMudGlja2V0Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS5pc0hpdCkgcmV0dXJuO1xyXG4gICAgICBoaXRJdGVtQ291bnQgKz0gMTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5jYWxjRGVidWdnZXIpIHJldHVybjtcclxuICAgICAgY3R4LnJlY3QoaXRlbS5yZWN0LngsIGl0ZW0ucmVjdC55LCBpdGVtLnJlY3Qud2lkdGgsIGl0ZW0ucmVjdC5oZWlnaHQpO1xyXG4gICAgICBjdHguZmlsbENvbG9yID0gY2MuY29sb3IoMjE2LCAxOCwgMTgsIDI1NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByb2dlcnNzID0gTWF0aC5jZWlsKChoaXRJdGVtQ291bnQgLyB0aGlzLnBvbHlnb25Qb2ludHNMaXN0Lmxlbmd0aCkgKiAxMDApO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9nZXJzcyk7XHJcbiAgICBpZiAodGhpcy5wcm9nZXJzcyA+IDUpIHtcclxuICAgICAgdGhpcy50dXRIYW0uYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb2dlcnNzID49IDUwKSB7XHJcbiAgICAgIHRoaXMuYmVmb3JlRGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmhhbS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2VuZTEuZ2V0Q29tcG9uZW50KFwiU2NlbmUxXCIpLmVuZEdhbWUoKVxyXG5cclxuICAgICAgfSwgMC40KVxyXG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMywgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGVtcERyYXdQb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gIGNsZWFyTWFzayhwb3MpIHtcclxuICAgIGxldCBtYXNrOiBhbnkgPSB0aGlzLm1hc2tOb2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgIGxldCBzdGVuY2lsID0gbWFzay5fZ3JhcGhpY3M7XHJcbiAgICBjb25zdCBsZW4gPSB0aGlzLnRlbXBEcmF3UG9pbnRzLmxlbmd0aDtcclxuICAgIHRoaXMudGVtcERyYXdQb2ludHMucHVzaChwb3MpO1xyXG4gICAgbGV0IGlzTmV3U2NyYXRjaCA9IGZhbHNlOyAvLyDwn5GIIHF1YW4gdHLhu41uZ1xyXG5cclxuICAgIGlmIChsZW4gPD0gMSkge1xyXG4gICAgICAvLyDlj6rmnInkuIDkuKrngrnvvIznlKjlnIbmnaXmuIXpmaTmtoLlsYJcclxuICAgICAgc3RlbmNpbC5jaXJjbGUocG9zLngsIHBvcy55LCBDTEVBUl9MSU5FX1dJRFRIICogdGhpcy5saW5lV2lkdGgpO1xyXG4gICAgICBzdGVuY2lsLmZpbGwoKTtcclxuXHJcbiAgICAgIC8vIOiusOW9leeCueaJgOWcqOeahOagvOWtkFxyXG4gICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pc0hpdCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHhGbGFnID0gcG9zLnggPiBpdGVtLnJlY3QueCAmJiBwb3MueCA8IGl0ZW0ucmVjdC54ICsgaXRlbS5yZWN0LndpZHRoO1xyXG4gICAgICAgIGNvbnN0IHlGbGFnID0gcG9zLnkgPiBpdGVtLnJlY3QueSAmJiBwb3MueSA8IGl0ZW0ucmVjdC55ICsgaXRlbS5yZWN0LmhlaWdodDtcclxuICAgICAgICBpZiAoeEZsYWcgJiYgeUZsYWcpIHtcclxuICAgICAgICAgIGlzTmV3U2NyYXRjaCA9IHRydWU7IC8vIOKchSBjw7MgY+G6oW8gbeG7m2lcclxuICAgICAgICAgIGl0ZW0uaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlrZjlnKjlpJrkuKrngrnvvIznlKjnur/mrrXmnaXmuIXpmaTmtoLlsYJcclxuICAgICAgbGV0IHByZXZQb3MgPSB0aGlzLnRlbXBEcmF3UG9pbnRzW2xlbiAtIDJdO1xyXG4gICAgICBsZXQgY3VyUG9zID0gdGhpcy50ZW1wRHJhd1BvaW50c1tsZW4gLSAxXTtcclxuXHJcbiAgICAgIHN0ZW5jaWwubW92ZVRvKHByZXZQb3MueCwgcHJldlBvcy55KTtcclxuICAgICAgc3RlbmNpbC5saW5lVG8oY3VyUG9zLngsIGN1clBvcy55KTtcclxuICAgICAgc3RlbmNpbC5saW5lV2lkdGggPSBDTEVBUl9MSU5FX1dJRFRIICogMiAqIHRoaXMubGluZVdpZHRoO1xyXG4gICAgICBzdGVuY2lsLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xyXG4gICAgICBzdGVuY2lsLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XHJcbiAgICAgIHN0ZW5jaWwuc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICBzdGVuY2lsLnN0cm9rZSgpO1xyXG5cclxuICAgICAgLy8g6K6w5b2V57q/5q6157uP6L+H55qE5qC85a2QXHJcbiAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIGl0ZW0uaXNIaXQgPSBpdGVtLmlzSGl0IHx8IGNjLkludGVyc2VjdGlvbi5saW5lUmVjdChwcmV2UG9zLCBjdXJQb3MsIGl0ZW0ucmVjdCk7XHJcbiAgICAgICAgaWYgKGl0ZW0uaXNIaXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5saW5lUmVjdChwcmV2UG9zLCBjdXJQb3MsIGl0ZW0ucmVjdCkpIHtcclxuICAgICAgICAgIGl0ZW0uaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgaXNOZXdTY3JhdGNoID0gdHJ1ZTsgLy8g4pyFIGPDsyBj4bqhbyBt4bubaVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNOZXdTY3JhdGNoO1xyXG5cclxuICB9XHJcblxyXG4gIHBvbHlnb25Qb2ludHNMaXN0OiB7IHJlY3Q6IGNjLlJlY3Q7IGlzSGl0OiBib29sZWFuIH1bXSA9IFtdO1xyXG4gIHJlc2V0KCkge1xyXG4gICAgbGV0IG1hc2s6IGFueSA9IHRoaXMubWFza05vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgbWFzay5fZ3JhcGhpY3MuY2xlYXIoKTtcclxuXHJcbiAgICB0aGlzLnRlbXBEcmF3UG9pbnRzID0gW107XHJcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0ID0gW107XHJcbiAgICB0aGlzLnByb2dlcnNzID0gMDtcclxuICAgIHRoaXMudGlja2V0Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmNsZWFyKCk7XHJcblxyXG4gICAgLy8g55Sf5oiQ5bCP5qC85a2Q77yM55So5p2l6L6F5Yqp57uf6K6h5raC5bGC55qE5Yiu5byA5q+U5L6LXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDI1MDsgeCArPSBDQUxDX1JFQ1RfV0lEVEgpIHtcclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAyNzA7IHkgKz0gQ0FMQ19SRUNUX1dJRFRIKSB7XHJcbiAgICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5wdXNoKHtcclxuICAgICAgICAgIHJlY3Q6IGNjLnJlY3QoeCAtIDI1MCAvIDIsIHkgLSAyNzAgLyAyLCBDQUxDX1JFQ1RfV0lEVEgsIENBTENfUkVDVF9XSURUSCksXHJcbiAgICAgICAgICBpc0hpdDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=