
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxTY3JhdGNoX3RpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsNkJBQTRCO0FBRTVCO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBb01DO1FBbE1DLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBQzdCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBNENoQixrQkFBWSxHQUFHLEtBQUssQ0FBQTtRQUNwQixhQUFPLEdBQUcsSUFBSSxDQUFBO1FBK0JkLGtCQUFZLEdBQVksS0FBSyxDQUFDLENBQUMsd0JBQXdCO1FBK0J2RCxvQkFBYyxHQUFjLEVBQUUsQ0FBQztRQW1EL0IsdUJBQWlCLEdBQXdDLEVBQUUsQ0FBQzs7SUFvQjlELENBQUM7SUFoTEMsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFRLENBQUMsQ0FBQztRQUMvRCxrQkFBa0I7SUFDcEIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hG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ZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuY29uc3QgQ0FMQ19SRUNUX1dJRFRIID0gNDA7XHJcbmNvbnN0IENMRUFSX0xJTkVfV0lEVEggPSA0MDtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gJy4vQ0MyJ1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JhdGNoX3RpY2tldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgbWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRpY2tldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgbGluZVdpZHRoID0gMDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBoYW06IGNjLk5vZGUgPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgdHV0SGFtOiBjYy5Ob2RlID0gbnVsbFxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgc291bmRDYW86IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICBwcm9nZXJzcyA9IDA7XHJcblxyXG4gIGdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChHYW1lUGxheSk7XHJcbiAgICAvLyB0aGlzLmFkZEV2ZW50KClcclxuICB9XHJcblxyXG4gIGFkZEV2ZW50KCkge1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLnRpY2tldE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLnRpY2tldE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnRpY2tldE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLnRpY2tldE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLnRpY2tldE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHRvdWNoU3RhcnRFdmVudChldmVudCkge1xyXG4gICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MpO1xyXG4gICAgbGV0IHBvaW50ID0gdGhpcy50aWNrZXROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICBsZXQgaXNOZXcgPSB0aGlzLmNsZWFyTWFzayhwb2ludCk7XHJcbiAgICB0aGlzLmhhbS5hY3RpdmUgPSB0cnVlXHJcbiAgICBpZiAodGhpcy5pc0lkQ2FvICYmIGlzTmV3KSB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pc0lkQ2FvKVxyXG4gICAgICB0aGlzLmlzSWRDYW8gPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDYW8sIGZhbHNlLCAyKVxyXG4gICAgICB0aGlzLmlzRGVsYXlTb3VuZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzRGVsYXlTb3VuZCA9IGZhbHNlXHJcbiAgICAgIH0sIDAuMilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcG9zMiA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgIHBvczIgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zMik7XHJcbiAgICBsZXQgcG9zSGFtID0gdGhpcy5oYW0ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpXHJcbiAgICB0aGlzLmhhbS5wb3NpdGlvbiA9IHBvc0hhbS5hZGQoY2MudjMoMCwtNTApKVxyXG4gICAgLy8gdGhpcy5nYW1lUGxheS5oYW5kU3dpcGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLmdhbWVQbGF5LmhhbmRTd2lwZTIuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG4gIGlzRGVsYXlTb3VuZCA9IGZhbHNlXHJcbiAgaXNJZENhbyA9IG51bGxcclxuICB0b3VjaE1vdmVFdmVudChldmVudCkge1xyXG5cclxuXHJcbiAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgcG9zID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvcyk7XHJcbiAgICBsZXQgcG9zSGFtID0gdGhpcy5oYW0ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgIGxldCBwb2ludCA9IHRoaXMudGlja2V0Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgdGhpcy5oYW0ucG9zaXRpb24gPSBwb3NIYW0uYWRkKGNjLnYzKDAsLTUwKSlcclxuICAgIGxldCBpc05ldyA9IHRoaXMuY2xlYXJNYXNrKHBvaW50KTtcclxuICAgIHRoaXMuY2FsY1Byb2dyZXNzKCk7XHJcbiAgICBpZiAoaXNOZXcpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzRGVsYXlTb3VuZCkge1xyXG4gICAgICAgIHRoaXMuaXNEZWxheVNvdW5kID0gdHJ1ZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDYW8sIGZhbHNlLCAyKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNEZWxheVNvdW5kID0gZmFsc2VcclxuICAgICAgICB9LCAwLjEpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvdWNoRW5kRXZlbnQoKSB7XHJcbiAgICBpZiAodGhpcy5pc0lkQ2FvKSB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pc0lkQ2FvKVxyXG5cclxuICAgIH1cclxuICAgIHRoaXMudGVtcERyYXdQb2ludHMgPSBbXTtcclxuICAgIHRoaXMuY2FsY1Byb2dyZXNzKCk7XHJcbiAgfVxyXG5cclxuICBjYWxjRGVidWdnZXI6IGJvb2xlYW4gPSBmYWxzZTsgLy8g6L6F5Yqp5byA5YWz77yM5byA5ZCv5YiZ5Lya57uY5Yi25YiS5byA5raC5bGC5omA5bGe55qE5bCP5qC85a2QXHJcbiAgY2FsY1Byb2dyZXNzKCkge1xyXG4gICAgbGV0IGhpdEl0ZW1Db3VudCA9IDA7XHJcbiAgICBsZXQgY3R4ID0gdGhpcy50aWNrZXROb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKCFpdGVtLmlzSGl0KSByZXR1cm47XHJcbiAgICAgIGhpdEl0ZW1Db3VudCArPSAxO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmNhbGNEZWJ1Z2dlcikgcmV0dXJuO1xyXG4gICAgICBjdHgucmVjdChpdGVtLnJlY3QueCwgaXRlbS5yZWN0LnksIGl0ZW0ucmVjdC53aWR0aCwgaXRlbS5yZWN0LmhlaWdodCk7XHJcbiAgICAgIGN0eC5maWxsQ29sb3IgPSBjYy5jb2xvcigyMTYsIDE4LCAxOCwgMjU1KTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucHJvZ2Vyc3MgPSBNYXRoLmNlaWwoKGhpdEl0ZW1Db3VudCAvIHRoaXMucG9seWdvblBvaW50c0xpc3QubGVuZ3RoKSAqIDEwMCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb2dlcnNzKTtcclxuICAgIGlmICh0aGlzLnByb2dlcnNzID4gNSkge1xyXG4gICAgICB0aGlzLnR1dEhhbS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvZ2Vyc3MgPj0gNTApIHtcclxuICAgICAgdGhpcy5iZWZvcmVEZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuaGFtLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmNvbXBsZXRlU2NlbmUoKTtcclxuXHJcbiAgICAgIH0sIDAuNClcclxuICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjMsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlbXBEcmF3UG9pbnRzOiBjYy5WZWMyW10gPSBbXTtcclxuICBjbGVhck1hc2socG9zKSB7XHJcbiAgICBsZXQgbWFzazogYW55ID0gdGhpcy5tYXNrTm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICBsZXQgc3RlbmNpbCA9IG1hc2suX2dyYXBoaWNzO1xyXG4gICAgY29uc3QgbGVuID0gdGhpcy50ZW1wRHJhd1BvaW50cy5sZW5ndGg7XHJcbiAgICB0aGlzLnRlbXBEcmF3UG9pbnRzLnB1c2gocG9zKTtcclxuICAgIGxldCBpc05ld1NjcmF0Y2ggPSBmYWxzZTsgLy8g8J+RiCBxdWFuIHRy4buNbmdcclxuXHJcbiAgICBpZiAobGVuIDw9IDEpIHtcclxuICAgICAgLy8g5Y+q5pyJ5LiA5Liq54K577yM55So5ZyG5p2l5riF6Zmk5raC5bGCXHJcbiAgICAgIHN0ZW5jaWwuY2lyY2xlKHBvcy54LCBwb3MueSwgQ0xFQVJfTElORV9XSURUSCAqIHRoaXMubGluZVdpZHRoKTtcclxuICAgICAgc3RlbmNpbC5maWxsKCk7XHJcblxyXG4gICAgICAvLyDorrDlvZXngrnmiYDlnKjnmoTmoLzlrZBcclxuICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaXNIaXQpIHJldHVybjtcclxuICAgICAgICBjb25zdCB4RmxhZyA9IHBvcy54ID4gaXRlbS5yZWN0LnggJiYgcG9zLnggPCBpdGVtLnJlY3QueCArIGl0ZW0ucmVjdC53aWR0aDtcclxuICAgICAgICBjb25zdCB5RmxhZyA9IHBvcy55ID4gaXRlbS5yZWN0LnkgJiYgcG9zLnkgPCBpdGVtLnJlY3QueSArIGl0ZW0ucmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHhGbGFnICYmIHlGbGFnKSB7XHJcbiAgICAgICAgICBpc05ld1NjcmF0Y2ggPSB0cnVlOyAvLyDinIUgY8OzIGPhuqFvIG3hu5tpXHJcbiAgICAgICAgICBpdGVtLmlzSGl0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5a2Y5Zyo5aSa5Liq54K577yM55So57q/5q615p2l5riF6Zmk5raC5bGCXHJcbiAgICAgIGxldCBwcmV2UG9zID0gdGhpcy50ZW1wRHJhd1BvaW50c1tsZW4gLSAyXTtcclxuICAgICAgbGV0IGN1clBvcyA9IHRoaXMudGVtcERyYXdQb2ludHNbbGVuIC0gMV07XHJcblxyXG4gICAgICBzdGVuY2lsLm1vdmVUbyhwcmV2UG9zLngsIHByZXZQb3MueSk7XHJcbiAgICAgIHN0ZW5jaWwubGluZVRvKGN1clBvcy54LCBjdXJQb3MueSk7XHJcbiAgICAgIHN0ZW5jaWwubGluZVdpZHRoID0gQ0xFQVJfTElORV9XSURUSCAqIDIgKiB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgc3RlbmNpbC5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgc3RlbmNpbC5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xyXG4gICAgICBzdGVuY2lsLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgc3RlbmNpbC5zdHJva2UoKTtcclxuXHJcbiAgICAgIC8vIOiusOW9lee6v+autee7j+i/h+eahOagvOWtkFxyXG4gICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAvLyBpdGVtLmlzSGl0ID0gaXRlbS5pc0hpdCB8fCBjYy5JbnRlcnNlY3Rpb24ubGluZVJlY3QocHJldlBvcywgY3VyUG9zLCBpdGVtLnJlY3QpO1xyXG4gICAgICAgIGlmIChpdGVtLmlzSGl0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ubGluZVJlY3QocHJldlBvcywgY3VyUG9zLCBpdGVtLnJlY3QpKSB7XHJcbiAgICAgICAgICBpdGVtLmlzSGl0ID0gdHJ1ZTtcclxuICAgICAgICAgIGlzTmV3U2NyYXRjaCA9IHRydWU7IC8vIOKchSBjw7MgY+G6oW8gbeG7m2lcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzTmV3U2NyYXRjaDtcclxuXHJcbiAgfVxyXG5cclxuICBwb2x5Z29uUG9pbnRzTGlzdDogeyByZWN0OiBjYy5SZWN0OyBpc0hpdDogYm9vbGVhbiB9W10gPSBbXTtcclxuICByZXNldCgpIHtcclxuICAgIGxldCBtYXNrOiBhbnkgPSB0aGlzLm1hc2tOb2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgIG1hc2suX2dyYXBoaWNzLmNsZWFyKCk7XHJcblxyXG4gICAgdGhpcy50ZW1wRHJhd1BvaW50cyA9IFtdO1xyXG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5wcm9nZXJzcyA9IDA7XHJcbiAgICB0aGlzLnRpY2tldE5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKS5jbGVhcigpO1xyXG5cclxuICAgIC8vIOeUn+aIkOWwj+agvOWtkO+8jOeUqOadpei+heWKqee7n+iuoea2guWxgueahOWIruW8gOavlOS+i1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAyNTA7IHggKz0gQ0FMQ19SRUNUX1dJRFRIKSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMjcwOyB5ICs9IENBTENfUkVDVF9XSURUSCkge1xyXG4gICAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QucHVzaCh7XHJcbiAgICAgICAgICByZWN0OiBjYy5yZWN0KHggLSAyNTAgLyAyLCB5IC0gMjcwIC8gMiwgQ0FMQ19SRUNUX1dJRFRILCBDQUxDX1JFQ1RfV0lEVEgpLFxyXG4gICAgICAgICAgaXNIaXQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19