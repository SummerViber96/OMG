"use strict";
cc._RF.push(module, '13835qwv9dPSq9iDRPyHzg2', 'DrawCheck');
// NewDraw/DrawCheck.ts

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
        _this.targetGraphics = null;
        _this.drawGraphics = null;
        _this.threshold = 25;
        _this.completePercent = 0.98;
        _this.targetPoints = [];
        _this.isDrawing = false;
        _this.matchedCount = 0;
        _this.matrixPoints = [];
        _this.localPoints = [];
        _this.countFail = 0;
        _this.gamePlay = null;
        _this.targetPoint = cc.v2(0, 0);
        _this.isStartPoint = null;
        _this.isEndPoint = null;
        /** TOUCH MOVE */
        _this.isTargetPoint = null;
        _this.arrCheck = [];
        /** FAIL */
        _this.isEndGame = false;
        _this.isDelayDem = false;
        return _this;
    }
    DrawCheck.prototype.onLoad = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameManager");
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        // this.drawSampleShape();
        // this.generateTargetPoints()
    };
    DrawCheck.prototype.loadLevel = function (data) {
        // let points = data.children[0].getComponent(cc.PolygonCollider).points
        var points = [];
        for (var i = 0; i < data.children[0].childrenCount; i++) {
            var pos = data.children[0].children[i].position;
            pos = data.children[0].convertToWorldSpaceAR(pos);
            pos = this.node.convertToNodeSpaceAR(pos);
            points.push(pos);
        }
        this.targetPoints = points;
        // console.log(this.targetPoints)
        // this.localPoints = []
    };
    /** TOUCH START */
    DrawCheck.prototype.onTouchStart = function (event) {
        if (this.isDrawing)
            return;
        this.isDrawing = true;
        this.matchedCount = 0;
        // console.log("start")
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.drawGraphics.clear();
        this.drawGraphics.lineWidth = 28;
        this.drawGraphics.strokeColor = cc.color(0, 255, 0);
        // this.drawGraphics.moveTo(pos.x, pos.y);
        this.isStartPoint = null;
        if (this.isNearPath(pos)) {
            this.drawGraphics.moveTo(this.targetPoint.x, this.targetPoint.y);
            // this.drawGraphics.moveTo(pos2.x, pos2.y);
        }
        else {
            // console.log("no")
        }
    };
    DrawCheck.prototype.onTouchMove = function (event) {
        if (!this.isDrawing)
            return;
        if (this.gamePlay.hand.active == true) {
            this.gamePlay.hand.active = false;
        }
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        // Vẽ
        // Kiểm tra
        if (!this.isNearPath(pos)) {
            // this.fail();
            // this.drawGraphics.lineTo(pos.x, pos.y);
            // this.drawGraphics.stroke();
        }
        else {
            // this.drawGraphics.lineTo(pos.x, pos.y);
            // let pos2 = this.targetPoints[this.arrCheck[this.arrCheck.length - 1]]
            // this.drawGraphics.lineTo(pos2.x, pos2.y);
            // this.drawGraphics.stroke();
            //ve lai
            // console.log("draw",this.isStartPoint, this.arrCheck[this.arrCheck.length])
            // for (let i = this.isStartPoint + 1; i <= this.arrCheck[this.arrCheck.length-1]; i++) {
            //     let pos2 = this.targetPoints[i]
            //     this.drawGraphics.lineTo(pos2.x, pos2.y);
            //     this.drawGraphics.stroke();
            // }
            this.drawGraphics.clear();
            this.drawGraphics.lineWidth = 28;
            this.drawGraphics.strokeColor = cc.color(0, 255, 0);
            this.drawGraphics.moveTo(this.targetPoints[this.isStartPoint].x, this.targetPoints[this.isStartPoint].y);
            for (var i = 0; i < this.arrCheck.length; i++) {
                var pos2 = this.targetPoints[this.arrCheck[i]];
                this.drawGraphics.lineTo(pos2.x, pos2.y);
                this.drawGraphics.stroke();
            }
        }
        var uniqueSet = new Set(this.arrCheck);
        var uniqueArray2 = Array.from(uniqueSet);
        var percent = uniqueArray2.length / this.targetPoints.length;
        // this.arrCheck = []
        if (percent >= this.completePercent) {
            this.win();
        }
    };
    /** TOUCH END */
    DrawCheck.prototype.onTouchEnd = function () {
        if (!this.isDrawing)
            return;
        this.isDrawing = false;
        var uniqueSet = new Set(this.arrCheck);
        var uniqueArray2 = Array.from(uniqueSet);
        var percent = uniqueArray2.length / this.targetPoints.length;
        var arr = this.arrCheck;
        this.arrCheck = [];
        if (percent >= this.completePercent) {
            this.win();
        }
        else {
            this.fail(arr);
        }
        this.matchedCount = 0;
    };
    /** KIỂM TRA CÓ GẦN ĐƯỜNG MẪU KHÔNG */
    DrawCheck.prototype.isNearPath = function (p) {
        for (var i = 0; i < this.targetPoints.length; i++) {
            if (p.sub(this.targetPoints[i]).mag() <= this.threshold) {
                if (this.arrCheck.includes(i)) {
                    if (this.arrCheck[this.arrCheck.length - 1] == i) {
                        var pos = this.targetPoints[i];
                        this.targetPoint = pos;
                        return true;
                    }
                    else {
                        // console.log("trung diem")
                        // return false
                    }
                }
                else {
                    var nextPos = this.targetPoints[i];
                    if (this.arrCheck.length > 0 && nextPos.sub(this.targetPoints[this.arrCheck[this.arrCheck.length - 1]]).mag() <= 100) {
                        this.matchedCount++;
                        this.arrCheck.push(i);
                        if (this.isStartPoint == null) {
                            this.isStartPoint = i;
                        }
                        var pos = this.targetPoints[i];
                        this.targetPoint = pos;
                        return true;
                    }
                    else if (this.arrCheck.length == 0) {
                        this.matchedCount++;
                        this.arrCheck.push(i);
                        if (this.isStartPoint == null) {
                            this.isStartPoint = i;
                        }
                        var pos = this.targetPoints[i];
                        this.targetPoint = pos;
                        return true;
                    }
                }
                // return true;
            }
        }
        return false;
    };
    DrawCheck.prototype.check = function (value) {
        for (var i = 0; i < this.arrCheck.length; i++) {
            if (value == i)
                return true;
        }
        return false;
    };
    /** WIN */
    DrawCheck.prototype.win = function () {
        cc.log("🎉 WIN !!!");
        if (this.isEndGame)
            return;
        this.isEndGame = true;
        cc.Canvas.instance.node.getComponent("GameManager").winGame();
    };
    DrawCheck.prototype.clearGame = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.drawGraphics.clear();
        this.targetGraphics.clear();
    };
    DrawCheck.prototype.fail = function (arr) {
        var _this = this;
        cc.log("❌ FAIL !!!");
        if (this.isEndGame)
            return;
        this.isEndGame = true;
        // this.drawGraphics.strokeColor = cc.Color.RED
        this.drawGraphics.clear();
        this.drawGraphics.lineWidth = 28;
        this.drawGraphics.strokeColor = cc.Color.RED;
        this.drawGraphics.moveTo(this.targetPoints[this.isStartPoint].x, this.targetPoints[this.isStartPoint].y);
        for (var i = 0; i < arr.length; i++) {
            var pos2 = this.targetPoints[arr[i]];
            this.drawGraphics.lineTo(pos2.x, pos2.y);
            this.drawGraphics.stroke();
        }
        this.gamePlay.fail();
        if (this.isDelayDem == false) {
            this.isDelayDem = true;
            this.countFail++;
            this.scheduleOnce(function () {
                _this.isDelayDem = false;
            }, 1);
        }
        cc.audioEngine.play(this.gamePlay.soundFail, false, 1);
        if (this.countFail == 3) {
            this.gamePlay.nextLevel();
        }
        else {
            this.scheduleOnce(function () {
                _this.drawGraphics.clear();
                _this.isDrawing = false;
                _this.arrCheck = [];
                _this.isEndGame = false;
            }, 0.5);
        }
    };
    /** Load outline từ JSON */
    DrawCheck.prototype.loadOutlineFromJSON = function (data) {
        var g = this.targetGraphics;
        g.clear();
        g.lineWidth = 10;
        g.strokeColor = cc.color(180, 180, 180);
        // --- Vẽ đường thẳng ---
        if (data.lines && data.lines.length > 1) {
            g.moveTo(data.lines[0].x, data.lines[0].y);
            for (var i = 1; i < data.lines.length; i++) {
                g.lineTo(data.lines[i].x, data.lines[i].y);
            }
            g.stroke();
        }
        // --- Vẽ circle ---
        if (data.circles) {
            for (var _i = 0, _a = data.circles; _i < _a.length; _i++) {
                var c = _a[_i];
                g.circle(c.cx, c.cy, c.r);
            }
            g.stroke();
        }
        // Sau khi vẽ → generate lại điểm cần kiểm tra
        this.generateTargetPointsFromGraphics(data);
    };
    DrawCheck.prototype.generateTargetPointsFromGraphics = function (data) {
        this.targetPoints = [];
        // Lines
        if (data.lines && data.lines.length > 1) {
            for (var i = 0; i < data.lines.length - 1; i++) {
                var p1 = data.lines[i];
                var p2 = data.lines[i + 1];
                for (var t = 0; t <= 1; t += 0.02) {
                    this.targetPoints.push(cc.v2(p1.x + (p2.x - p1.x) * t, p1.y + (p2.y - p1.y) * t));
                }
            }
        }
        // Circles
        if (data.circles) {
            for (var _i = 0, _a = data.circles; _i < _a.length; _i++) {
                var c = _a[_i];
                for (var a = 0; a <= Math.PI * 2; a += 0.05) {
                    this.targetPoints.push(cc.v2(c.cx + Math.cos(a) * c.r, c.cy + Math.sin(a) * c.r));
                }
            }
        }
        cc.log("Total target points:", this.targetPoints.length);
    };
    __decorate([
        property(cc.Graphics)
    ], DrawCheck.prototype, "targetGraphics", void 0);
    __decorate([
        property(cc.Graphics)
    ], DrawCheck.prototype, "drawGraphics", void 0);
    __decorate([
        property
    ], DrawCheck.prototype, "threshold", void 0);
    __decorate([
        property
    ], DrawCheck.prototype, "completePercent", void 0);
    DrawCheck = __decorate([
        ccclass
    ], DrawCheck);
    return DrawCheck;
}(cc.Component));
exports.default = DrawCheck;

cc._RF.pop();