"use strict";
cc._RF.push(module, '65e80EbwO1MULWYfcoG4cC2', 'GamePlay');
// scripts/APP/GamePlay.ts

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
var DrawCheck = /** @class */ (function (_super) {
    __extends(DrawCheck, _super);
    function DrawCheck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drawGraphics = null; // nét người chơi vẽ
        _this.targetGraphics = null; // nét mẫu (màu xám)
        _this.threshold = 25; // phạm vi sai số cho phép
        _this.completePercentRequired = 0.85; // phải hoàn thành 85%
        _this.targetPoints = []; // danh sách điểm mẫu
        _this.isDrawing = false;
        _this.drawnPoints = [];
        _this.matchedCount = 0;
        return _this;
    }
    DrawCheck.prototype.onLoad = function () {
        this.drawSquareAndCircle();
        this.generateTargetPoints();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    // Chuyển tọa độ màn hình → local node
    DrawCheck.prototype.toLocal = function (pos) {
        return this.node.convertToNodeSpaceAR(pos);
    };
    DrawCheck.prototype.onTouchStart = function (event) {
        this.isDrawing = true;
        this.matchedCount = 0;
        this.drawnPoints = [];
        var p = this.toLocal(event.getLocation());
        this.drawGraphics.clear();
        this.drawGraphics.lineWidth = 8;
        this.drawGraphics.strokeColor = cc.color(0, 255, 0);
        this.drawGraphics.moveTo(p.x, p.y);
        this.drawnPoints.push(p);
    };
    DrawCheck.prototype.onTouchMove = function (event) {
        if (!this.isDrawing)
            return;
        console.log("move");
        var p = this.toLocal(event.getLocation());
        this.drawnPoints.push(p);
        // Vẽ nét
        this.drawGraphics.lineTo(p.x, p.y);
        this.drawGraphics.stroke();
        // Kiểm tra theo mẫu
        console.log(this.isNearTarget(p));
        if (!this.isNearTarget(p)) {
            this.fail();
        }
    };
    DrawCheck.prototype.onTouchEnd = function () {
        if (!this.isDrawing)
            return;
        this.isDrawing = false;
        var percent = this.matchedCount / this.targetPoints.length;
        if (percent >= this.completePercentRequired) {
            this.win();
        }
        else {
            this.fail();
        }
    };
    // Kiểm tra điểm người vẽ có nằm gần đường mẫu không
    DrawCheck.prototype.isNearTarget = function (p) {
        for (var i = 0; i < this.targetPoints.length; i++) {
            var tp = this.targetPoints[i];
            if (p.sub(tp).mag() <= this.threshold) {
                this.matchedCount++;
                return true;
            }
        }
        return false;
    };
    DrawCheck.prototype.win = function () {
        cc.log("WIN!");
        // TODO: hiệu ứng win hoặc load level
    };
    DrawCheck.prototype.fail = function () {
        cc.log("FAIL!");
        this.isDrawing = false;
        this.drawGraphics.clear();
        // TODO: hiệu ứng fail, reset level
    };
    DrawCheck.prototype.drawSquareAndCircle = function () {
        var g = this.targetGraphics;
        g.clear();
        g.lineWidth = 10;
        g.strokeColor = cc.color(180, 180, 180);
        // Vẽ hình vuông
        g.moveTo(-100, 50);
        g.lineTo(100, 50);
        g.lineTo(100, -150);
        g.lineTo(-100, -150);
        g.lineTo(-100, 50);
        // Vẽ hình tròn phía dưới
        g.circle(0, -200, 120);
        g.stroke();
    };
    DrawCheck.prototype.generateTargetPoints = function () {
        this.targetPoints = [];
        // --- Square ---
        for (var t = 0; t <= 1; t += 0.01) {
            this.targetPoints.push(cc.v2(-100 + t * 200, 50));
        }
        for (var t = 0; t <= 1; t += 0.01) {
            this.targetPoints.push(cc.v2(100, 50 - t * 200));
        }
        for (var t = 0; t <= 1; t += 0.01) {
            this.targetPoints.push(cc.v2(100 - t * 200, -150));
        }
        for (var t = 0; t <= 1; t += 0.01) {
            this.targetPoints.push(cc.v2(-100, -150 + t * 200));
        }
        // --- Circle ---
        var center = cc.v2(0, -200);
        var radius = 120;
        for (var a = 0; a <= Math.PI * 2; a += 0.05) {
            this.targetPoints.push(cc.v2(center.x + Math.cos(a) * radius, center.y + Math.sin(a) * radius));
        }
    };
    __decorate([
        property(cc.Graphics)
    ], DrawCheck.prototype, "drawGraphics", void 0);
    __decorate([
        property(cc.Graphics)
    ], DrawCheck.prototype, "targetGraphics", void 0);
    __decorate([
        property
    ], DrawCheck.prototype, "threshold", void 0);
    __decorate([
        property
    ], DrawCheck.prototype, "completePercentRequired", void 0);
    __decorate([
        property([cc.Vec2])
    ], DrawCheck.prototype, "targetPoints", void 0);
    DrawCheck = __decorate([
        ccclass
    ], DrawCheck);
    return DrawCheck;
}(cc.Component));
exports.default = DrawCheck;

cc._RF.pop();