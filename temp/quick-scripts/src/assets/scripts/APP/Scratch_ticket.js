"use strict";
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