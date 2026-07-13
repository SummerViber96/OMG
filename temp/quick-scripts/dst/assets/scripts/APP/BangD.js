
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/BangD.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fcafCRKpNPtYVaG8s3ps06', 'BangD');
// scripts/APP/BangD.ts

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
        _this.listBun = [];
        _this.anim = null;
        _this.listXaphong = [];
        _this.egg = null;
        _this.fill = null;
        _this.noti = null;
        _this.progerss = 0;
        _this.gamePlay = null;
        _this.isDelaySound = false;
        _this.isIdCao = null;
        _this.isCountStep = 0;
        _this.calcDebugger = false; // 辅助开关，开启则会绘制划开涂层所属的小格子
        _this.tempDrawPoints = [];
        _this.polygonPointsList = [];
        return _this;
    }
    Scratch_ticket.prototype.onLoad = function () {
        // this.reset();
        this.gamePlay = cc.Canvas.instance.node.getComponent(CC2_1.default);
        // this.addEvent()
    };
    Scratch_ticket.prototype.addEvent = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    Scratch_ticket.prototype.beforeDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    Scratch_ticket.prototype.touchStartEvent = function (event) {
        var pos = event.getLocation();
        pos = this.camera.getScreenToWorldPoint(pos);
        var point = this.node.parent.convertToNodeSpaceAR(pos);
        // let isNew = this.clearMask(point);
        this.tutHam.active = false;
        // if (this.isIdCao) {
        //   cc.audioEngine.stop(this.isIdCao)
        //   this.isIdCao = cc.audioEngine.play(this.soundCao, false, 2)
        //   this.isDelaySound = true;
        //   this.scheduleOnce(() => {
        //     this.isDelaySound = false
        //   }, 0.2)
        // }
        var pos2 = event.getLocation();
        pos2 = this.camera.getScreenToWorldPoint(pos2);
        var posHam = this.node.convertToNodeSpaceAR(pos2);
        this.node.position = posHam.add(cc.v3(0, -50));
        // this.gamePlay.handSwipe.active = false;
        // this.gamePlay.handSwipe2.active = false;
    };
    Scratch_ticket.prototype.touchMoveEvent = function (event) {
        var pos = event.getLocation();
        pos = this.camera.getScreenToWorldPoint(pos);
        var posHam = this.node.parent.convertToNodeSpaceAR(pos);
        this.node.position = posHam.add(cc.v3(0, -50));
        // if (!this.isDelaySound) {
        //   this.isDelaySound = true;
        //   cc.audioEngine.play(this.soundCao, false, 2)
        //   this.scheduleOnce(() => {
        //     this.isDelaySound = false
        //   }, 0.1)
        // }
    };
    Scratch_ticket.prototype.checkItem = function () {
        for (var i = 0; i < this.listBun.length; i++) {
            // console.log(this.node.position.sub(pos).mag())
            if (this.listBun[i].active) {
                var pos = this.listBun[i].position;
                pos = this.listBun[i].parent.convertToWorldSpaceAR(pos);
                pos = this.node.parent.convertToNodeSpaceAR(pos);
                if (this.node.position.sub(pos).mag() < 100) {
                    this.listBun[i].active = false;
                    this.node.position = pos;
                    this.beforeDestroy();
                    this.checkEndStep();
                    return true;
                }
            }
        }
        return false;
    };
    Scratch_ticket.prototype.checkEndStep = function () {
        var _this = this;
        this.isCountStep++;
        console.log(this.isCountStep);
        if (this.isCountStep == 1) {
            this.noti.active = true;
            this.anim.setAnimation(0, "Pet_Happy", true);
            cc.tween(this.fill).to(0.3, { fillRange: 1 }).call(function () {
                _this.fill.node.parent.active = false;
            }).start();
            this.endStep();
        }
    };
    Scratch_ticket.prototype.endStep = function () {
        // this.gamePlay.step3()
        // for (let child of this.listXaphong) {
        //   cc.tween(child).to(0.5, { opacity: 0 }).call(() => {
        //     child.active = false
        //   }).start();
        // }
        this.node.active = false;
        this.gamePlay.onEndGame();
    };
    Scratch_ticket.prototype.touchEndEvent = function () {
        // if (this.isIdCao) {
        //   cc.audioEngine.stop(this.isIdCao)
        // }
        this.checkItem();
        // this.tempDrawPoints = [];
        // this.calcProgress();
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
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "listBun", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Scratch_ticket.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "listXaphong", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "egg", void 0);
    __decorate([
        property(cc.Sprite)
    ], Scratch_ticket.prototype, "fill", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "noti", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxCYW5nRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsNkJBQTRCO0FBRTVCO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBOFBDO1FBNVBDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBYyxFQUFFLENBQUE7UUFFdkIsVUFBSSxHQUFnQixJQUFJLENBQUE7UUFHeEIsaUJBQVcsR0FBYyxFQUFFLENBQUE7UUFFM0IsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQWMsSUFBSSxDQUFBO1FBRXRCLFVBQUksR0FBUyxJQUFJLENBQUE7UUFDakIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUViLGNBQVEsR0FBRyxJQUFJLENBQUM7UUE0Q2hCLGtCQUFZLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLGFBQU8sR0FBRyxJQUFJLENBQUE7UUFxQ2QsaUJBQVcsR0FBRyxDQUFDLENBQUE7UUF1Q2Ysa0JBQVksR0FBWSxLQUFLLENBQUMsQ0FBQyx3QkFBd0I7UUErQnZELG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBbUQvQix1QkFBaUIsR0FBd0MsRUFBRSxDQUFDOztJQW9COUQsQ0FBQztJQTdOQywrQkFBTSxHQUFOO1FB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Q0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDRTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNEO0lBNUJFLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E4UGxDO0lBQUQscUJBQUM7Q0E5UEQsQUE4UEMsQ0E5UDJDLEVBQUUsQ0FBQyxTQUFTLEdBOFB2RDtrQkE5UG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5jb25zdCBDQUxDX1JFQ1RfV0lEVEggPSA0MDtcclxuY29uc3QgQ0xFQVJfTElORV9XSURUSCA9IDQwO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSAnLi9DQzInXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmF0Y2hfdGlja2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBtYXNrTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgdGlja2V0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICBsaW5lV2lkdGggPSAwO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhhbTogY2MuTm9kZSA9IG51bGxcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICB0dXRIYW06IGNjLk5vZGUgPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBzb3VuZENhbzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGxpc3RCdW46IGNjLk5vZGVbXSA9IFtdXHJcbiAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG5cclxuICBsaXN0WGFwaG9uZzogY2MuTm9kZVtdID0gW11cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBlZ2c6IGNjLk5vZGUgPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICBmaWxsOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgbm90aTpjYy5Ob2RlPW51bGxcclxuICBwcm9nZXJzcyA9IDA7XHJcblxyXG4gIGdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gdGhpcy5yZXNldCgpO1xyXG4gICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChHYW1lUGxheSk7XHJcbiAgICAvLyB0aGlzLmFkZEV2ZW50KClcclxuICB9XHJcblxyXG4gIGFkZEV2ZW50KCkge1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHRvdWNoU3RhcnRFdmVudChldmVudCkge1xyXG4gICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MpO1xyXG4gICAgbGV0IHBvaW50ID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgLy8gbGV0IGlzTmV3ID0gdGhpcy5jbGVhck1hc2socG9pbnQpO1xyXG4gICAgdGhpcy50dXRIYW0uYWN0aXZlID0gZmFsc2VcclxuICAgIC8vIGlmICh0aGlzLmlzSWRDYW8pIHtcclxuICAgIC8vICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlzSWRDYW8pXHJcbiAgICAvLyAgIHRoaXMuaXNJZENhbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENhbywgZmFsc2UsIDIpXHJcbiAgICAvLyAgIHRoaXMuaXNEZWxheVNvdW5kID0gdHJ1ZTtcclxuICAgIC8vICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMuaXNEZWxheVNvdW5kID0gZmFsc2VcclxuICAgIC8vICAgfSwgMC4yKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGxldCBwb3MyID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgcG9zMiA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MyKTtcclxuICAgIGxldCBwb3NIYW0gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMilcclxuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc0hhbS5hZGQoY2MudjMoMCwgLTUwKSlcclxuICAgIC8vIHRoaXMuZ2FtZVBsYXkuaGFuZFN3aXBlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5nYW1lUGxheS5oYW5kU3dpcGUyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuICBpc0RlbGF5U291bmQgPSBmYWxzZVxyXG4gIGlzSWRDYW8gPSBudWxsXHJcbiAgdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcclxuXHJcblxyXG4gICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MpO1xyXG4gICAgbGV0IHBvc0hhbSA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG5cclxuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc0hhbS5hZGQoY2MudjMoMCwgLTUwKSlcclxuICAgIC8vIGlmICghdGhpcy5pc0RlbGF5U291bmQpIHtcclxuICAgIC8vICAgdGhpcy5pc0RlbGF5U291bmQgPSB0cnVlO1xyXG4gICAgLy8gICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDYW8sIGZhbHNlLCAyKVxyXG4gICAgLy8gICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5pc0RlbGF5U291bmQgPSBmYWxzZVxyXG4gICAgLy8gICB9LCAwLjEpXHJcbiAgICAvLyB9XHJcblxyXG4gIH1cclxuICBjaGVja0l0ZW0oKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJ1bi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBvcykubWFnKCkpXHJcblxyXG4gICAgICBpZiAodGhpcy5saXN0QnVuW2ldLmFjdGl2ZSkge1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmxpc3RCdW5baV0ucG9zaXRpb247XHJcbiAgICAgICAgcG9zID0gdGhpcy5saXN0QnVuW2ldLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wb3NpdGlvbi5zdWIocG9zKS5tYWcoKSA8IDEwMCkge1xyXG4gICAgICAgICAgdGhpcy5saXN0QnVuW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICAgIHRoaXMuYmVmb3JlRGVzdHJveSgpXHJcbiAgICAgICAgICB0aGlzLmNoZWNrRW5kU3RlcCgpXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIGlzQ291bnRTdGVwID0gMFxyXG4gIGNoZWNrRW5kU3RlcCgpIHtcclxuICAgIHRoaXMuaXNDb3VudFN0ZXArK1xyXG4gICAgY29uc29sZS5sb2codGhpcy5pc0NvdW50U3RlcClcclxuICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDEpIHtcclxuICAgICAgdGhpcy5ub3RpLmFjdGl2ZT10cnVlXHJcbiAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJQZXRfSGFwcHlcIiwgdHJ1ZSlcclxuICAgICAgY2MudHdlZW4odGhpcy5maWxsKS50bygwLjMsIHsgZmlsbFJhbmdlOiAxIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZmlsbC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICB9KS5zdGFydCgpXHJcbiAgICAgIHRoaXMuZW5kU3RlcCgpXHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcbiAgZW5kU3RlcCgpIHtcclxuICAgIC8vIHRoaXMuZ2FtZVBsYXkuc3RlcDMoKVxyXG5cclxuICAgIC8vIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdFhhcGhvbmcpIHtcclxuICAgIC8vICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgIGNoaWxkLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgIH0pLnN0YXJ0KCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB0aGlzLmdhbWVQbGF5Lm9uRW5kR2FtZSgpXHJcblxyXG4gIH1cclxuICB0b3VjaEVuZEV2ZW50KCkge1xyXG4gICAgLy8gaWYgKHRoaXMuaXNJZENhbykge1xyXG4gICAgLy8gICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaXNJZENhbylcclxuXHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLmNoZWNrSXRlbSgpXHJcblxyXG4gICAgLy8gdGhpcy50ZW1wRHJhd1BvaW50cyA9IFtdO1xyXG4gICAgLy8gdGhpcy5jYWxjUHJvZ3Jlc3MoKTtcclxuICB9XHJcblxyXG4gIGNhbGNEZWJ1Z2dlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyDovoXliqnlvIDlhbPvvIzlvIDlkK/liJnkvJrnu5jliLbliJLlvIDmtoLlsYLmiYDlsZ7nmoTlsI/moLzlrZBcclxuICBjYWxjUHJvZ3Jlc3MoKSB7XHJcbiAgICBsZXQgaGl0SXRlbUNvdW50ID0gMDtcclxuICAgIGxldCBjdHggPSB0aGlzLnRpY2tldE5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0uaXNIaXQpIHJldHVybjtcclxuICAgICAgaGl0SXRlbUNvdW50ICs9IDE7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuY2FsY0RlYnVnZ2VyKSByZXR1cm47XHJcbiAgICAgIGN0eC5yZWN0KGl0ZW0ucmVjdC54LCBpdGVtLnJlY3QueSwgaXRlbS5yZWN0LndpZHRoLCBpdGVtLnJlY3QuaGVpZ2h0KTtcclxuICAgICAgY3R4LmZpbGxDb2xvciA9IGNjLmNvbG9yKDIxNiwgMTgsIDE4LCAyNTUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wcm9nZXJzcyA9IE1hdGguY2VpbCgoaGl0SXRlbUNvdW50IC8gdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5sZW5ndGgpICogMTAwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvZ2Vyc3MpO1xyXG4gICAgaWYgKHRoaXMucHJvZ2Vyc3MgPiA1KSB7XHJcbiAgICAgIHRoaXMudHV0SGFtLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9nZXJzcyA+PSA1MCkge1xyXG4gICAgICB0aGlzLmJlZm9yZURlc3Ryb3koKTtcclxuICAgICAgdGhpcy5oYW0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuY29tcGxldGVTY2VuZSgpO1xyXG5cclxuICAgICAgfSwgMC40KVxyXG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMywgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGVtcERyYXdQb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gIGNsZWFyTWFzayhwb3MpIHtcclxuICAgIGxldCBtYXNrOiBhbnkgPSB0aGlzLm1hc2tOb2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgIGxldCBzdGVuY2lsID0gbWFzay5fZ3JhcGhpY3M7XHJcbiAgICBjb25zdCBsZW4gPSB0aGlzLnRlbXBEcmF3UG9pbnRzLmxlbmd0aDtcclxuICAgIHRoaXMudGVtcERyYXdQb2ludHMucHVzaChwb3MpO1xyXG4gICAgbGV0IGlzTmV3U2NyYXRjaCA9IGZhbHNlOyAvLyDwn5GIIHF1YW4gdHLhu41uZ1xyXG5cclxuICAgIGlmIChsZW4gPD0gMSkge1xyXG4gICAgICAvLyDlj6rmnInkuIDkuKrngrnvvIznlKjlnIbmnaXmuIXpmaTmtoLlsYJcclxuICAgICAgc3RlbmNpbC5jaXJjbGUocG9zLngsIHBvcy55LCBDTEVBUl9MSU5FX1dJRFRIICogdGhpcy5saW5lV2lkdGgpO1xyXG4gICAgICBzdGVuY2lsLmZpbGwoKTtcclxuXHJcbiAgICAgIC8vIOiusOW9leeCueaJgOWcqOeahOagvOWtkFxyXG4gICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pc0hpdCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHhGbGFnID0gcG9zLnggPiBpdGVtLnJlY3QueCAmJiBwb3MueCA8IGl0ZW0ucmVjdC54ICsgaXRlbS5yZWN0LndpZHRoO1xyXG4gICAgICAgIGNvbnN0IHlGbGFnID0gcG9zLnkgPiBpdGVtLnJlY3QueSAmJiBwb3MueSA8IGl0ZW0ucmVjdC55ICsgaXRlbS5yZWN0LmhlaWdodDtcclxuICAgICAgICBpZiAoeEZsYWcgJiYgeUZsYWcpIHtcclxuICAgICAgICAgIGlzTmV3U2NyYXRjaCA9IHRydWU7IC8vIOKchSBjw7MgY+G6oW8gbeG7m2lcclxuICAgICAgICAgIGl0ZW0uaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlrZjlnKjlpJrkuKrngrnvvIznlKjnur/mrrXmnaXmuIXpmaTmtoLlsYJcclxuICAgICAgbGV0IHByZXZQb3MgPSB0aGlzLnRlbXBEcmF3UG9pbnRzW2xlbiAtIDJdO1xyXG4gICAgICBsZXQgY3VyUG9zID0gdGhpcy50ZW1wRHJhd1BvaW50c1tsZW4gLSAxXTtcclxuXHJcbiAgICAgIHN0ZW5jaWwubW92ZVRvKHByZXZQb3MueCwgcHJldlBvcy55KTtcclxuICAgICAgc3RlbmNpbC5saW5lVG8oY3VyUG9zLngsIGN1clBvcy55KTtcclxuICAgICAgc3RlbmNpbC5saW5lV2lkdGggPSBDTEVBUl9MSU5FX1dJRFRIICogMiAqIHRoaXMubGluZVdpZHRoO1xyXG4gICAgICBzdGVuY2lsLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xyXG4gICAgICBzdGVuY2lsLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XHJcbiAgICAgIHN0ZW5jaWwuc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICBzdGVuY2lsLnN0cm9rZSgpO1xyXG5cclxuICAgICAgLy8g6K6w5b2V57q/5q6157uP6L+H55qE5qC85a2QXHJcbiAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIGl0ZW0uaXNIaXQgPSBpdGVtLmlzSGl0IHx8IGNjLkludGVyc2VjdGlvbi5saW5lUmVjdChwcmV2UG9zLCBjdXJQb3MsIGl0ZW0ucmVjdCk7XHJcbiAgICAgICAgaWYgKGl0ZW0uaXNIaXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5saW5lUmVjdChwcmV2UG9zLCBjdXJQb3MsIGl0ZW0ucmVjdCkpIHtcclxuICAgICAgICAgIGl0ZW0uaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgaXNOZXdTY3JhdGNoID0gdHJ1ZTsgLy8g4pyFIGPDsyBj4bqhbyBt4bubaVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNOZXdTY3JhdGNoO1xyXG5cclxuICB9XHJcblxyXG4gIHBvbHlnb25Qb2ludHNMaXN0OiB7IHJlY3Q6IGNjLlJlY3Q7IGlzSGl0OiBib29sZWFuIH1bXSA9IFtdO1xyXG4gIHJlc2V0KCkge1xyXG4gICAgbGV0IG1hc2s6IGFueSA9IHRoaXMubWFza05vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgbWFzay5fZ3JhcGhpY3MuY2xlYXIoKTtcclxuXHJcbiAgICB0aGlzLnRlbXBEcmF3UG9pbnRzID0gW107XHJcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0ID0gW107XHJcbiAgICB0aGlzLnByb2dlcnNzID0gMDtcclxuICAgIHRoaXMudGlja2V0Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmNsZWFyKCk7XHJcblxyXG4gICAgLy8g55Sf5oiQ5bCP5qC85a2Q77yM55So5p2l6L6F5Yqp57uf6K6h5raC5bGC55qE5Yiu5byA5q+U5L6LXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDI1MDsgeCArPSBDQUxDX1JFQ1RfV0lEVEgpIHtcclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAyNzA7IHkgKz0gQ0FMQ19SRUNUX1dJRFRIKSB7XHJcbiAgICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5wdXNoKHtcclxuICAgICAgICAgIHJlY3Q6IGNjLnJlY3QoeCAtIDI1MCAvIDIsIHkgLSAyNzAgLyAyLCBDQUxDX1JFQ1RfV0lEVEgsIENBTENfUkVDVF9XSURUSCksXHJcbiAgICAgICAgICBpc0hpdDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=