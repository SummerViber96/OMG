
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/NewDraw/DrawCheck.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTmV3RHJhd1xcRHJhd0NoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBcVVDO1FBbFVHLG9CQUFjLEdBQWdCLElBQUksQ0FBQztRQUduQyxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFHakMsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUd2QixxQkFBZSxHQUFXLElBQUksQ0FBQztRQUd2QixrQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUM3QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBQ3JDLGlCQUFXLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLGVBQVMsR0FBRyxDQUFDLENBQUE7UUFDYixjQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ2YsaUJBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN6QixrQkFBWSxHQUFHLElBQUksQ0FBQTtRQUNuQixnQkFBVSxHQUFHLElBQUksQ0FBQTtRQWlEakIsaUJBQWlCO1FBQ2pCLG1CQUFhLEdBQUcsSUFBSSxDQUFBO1FBa0VwQixjQUFRLEdBQUcsRUFBRSxDQUFBO1FBK0ViLFdBQVc7UUFDWCxlQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLGdCQUFVLEdBQUcsS0FBSyxDQUFBOztJQXdHdEIsQ0FBQztJQTVTRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ25FLElBQUksQ0FBQyxJQUFJ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REFDYztJQUd2QjtRQURDLFFBQVE7c0RBQ3NCO0lBWmQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXFVN0I7SUFBRCxnQkFBQztDQXJVRCxBQXFVQyxDQXJVc0MsRUFBRSxDQUFDLFNBQVMsR0FxVWxEO2tCQXJVb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3Q2hlY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIHRhcmdldEdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gICAgZHJhd0dyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0aHJlc2hvbGQ6IG51bWJlciA9IDI1O1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY29tcGxldGVQZXJjZW50OiBudW1iZXIgPSAwLjk4O1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHRhcmdldFBvaW50czogY2MuVmVjMltdID0gW107XHJcbiAgICBwcml2YXRlIGlzRHJhd2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBtYXRjaGVkQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1hdHJpeFBvaW50czogY2MuVmVjMltdID0gW107XHJcbiAgICBsb2NhbFBvaW50cyA9IFtdXHJcbiAgICBjb3VudEZhaWwgPSAwXHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIHRhcmdldFBvaW50ID0gY2MudjIoMCwgMClcclxuICAgIGlzU3RhcnRQb2ludCA9IG51bGxcclxuICAgIGlzRW5kUG9pbnQgPSBudWxsXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmRyYXdTYW1wbGVTaGFwZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2VuZXJhdGVUYXJnZXRQb2ludHMoKVxyXG4gICAgfVxyXG4gICAgbG9hZExldmVsKGRhdGEpIHtcclxuICAgICAgICAvLyBsZXQgcG9pbnRzID0gZGF0YS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKS5wb2ludHNcclxuICAgICAgICBsZXQgcG9pbnRzID0gW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2hpbGRyZW5bMF0uY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBkYXRhLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2ldLnBvc2l0aW9uXHJcbiAgICAgICAgICAgIHBvcyA9IGRhdGEuY2hpbGRyZW5bMF0uY29udmVydFRvV29ybGRTcGFjZUFSKHBvcylcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2gocG9zKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcmdldFBvaW50cyA9IHBvaW50c1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFyZ2V0UG9pbnRzKVxyXG4gICAgICAgIC8vIHRoaXMubG9jYWxQb2ludHMgPSBbXVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiogVE9VQ0ggU1RBUlQgKi9cclxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmF3aW5nKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzRHJhd2luZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tYXRjaGVkQ291bnQgPSAwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnRcIilcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubGluZVdpZHRoID0gMjg7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigwLCAyNTUsIDApO1xyXG4gICAgICAgIC8vIHRoaXMuZHJhd0dyYXBoaWNzLm1vdmVUbyhwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgIHRoaXMuaXNTdGFydFBvaW50ID0gbnVsbFxyXG4gICAgICAgIGlmICh0aGlzLmlzTmVhclBhdGgocG9zKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5tb3ZlVG8odGhpcy50YXJnZXRQb2ludC54LCB0aGlzLnRhcmdldFBvaW50LnkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdHcmFwaGljcy5tb3ZlVG8ocG9zMi54LCBwb3MyLnkpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUT1VDSCBNT1ZFICovXHJcbiAgICBpc1RhcmdldFBvaW50ID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0RyYXdpbmcpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5oYW5kLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgLy8gVuG6vVxyXG4gICAgICAgIC8vIEtp4buDbSB0cmFcclxuICAgICAgICBpZiAoIXRoaXMuaXNOZWFyUGF0aChwb3MpKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZmFpbCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdHcmFwaGljcy5saW5lVG8ocG9zLngsIHBvcy55KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5kcmF3R3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdHcmFwaGljcy5saW5lVG8ocG9zLngsIHBvcy55KTtcclxuICAgICAgICAgICAgLy8gbGV0IHBvczIgPSB0aGlzLnRhcmdldFBvaW50c1t0aGlzLmFyckNoZWNrW3RoaXMuYXJyQ2hlY2subGVuZ3RoIC0gMV1dXHJcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXBoaWNzLmxpbmVUbyhwb3MyLngsIHBvczIueSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdHcmFwaGljcy5zdHJva2UoKTtcclxuICAgICAgICAgICAgLy92ZSBsYWlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkcmF3XCIsdGhpcy5pc1N0YXJ0UG9pbnQsIHRoaXMuYXJyQ2hlY2tbdGhpcy5hcnJDaGVjay5sZW5ndGhdKVxyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gdGhpcy5pc1N0YXJ0UG9pbnQgKyAxOyBpIDw9IHRoaXMuYXJyQ2hlY2tbdGhpcy5hcnJDaGVjay5sZW5ndGgtMV07IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHBvczIgPSB0aGlzLnRhcmdldFBvaW50c1tpXVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5kcmF3R3JhcGhpY3MubGluZVRvKHBvczIueCwgcG9zMi55KTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZHJhd0dyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmxpbmVXaWR0aCA9IDI4O1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLm1vdmVUbyh0aGlzLnRhcmdldFBvaW50c1t0aGlzLmlzU3RhcnRQb2ludF0ueCwgdGhpcy50YXJnZXRQb2ludHNbdGhpcy5pc1N0YXJ0UG9pbnRdLnkpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNoZWNrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zMiA9IHRoaXMudGFyZ2V0UG9pbnRzW3RoaXMuYXJyQ2hlY2tbaV1dXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5saW5lVG8ocG9zMi54LCBwb3MyLnkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdW5pcXVlU2V0ID0gbmV3IFNldCh0aGlzLmFyckNoZWNrKTtcclxuICAgICAgICBjb25zdCB1bmlxdWVBcnJheTIgPSBBcnJheS5mcm9tKHVuaXF1ZVNldCk7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IHVuaXF1ZUFycmF5Mi5sZW5ndGggLyB0aGlzLnRhcmdldFBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgLy8gdGhpcy5hcnJDaGVjayA9IFtdXHJcblxyXG4gICAgICAgIGlmIChwZXJjZW50ID49IHRoaXMuY29tcGxldGVQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMud2luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUT1VDSCBFTkQgKi9cclxuICAgIHByaXZhdGUgb25Ub3VjaEVuZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmF3aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCB1bmlxdWVTZXQgPSBuZXcgU2V0KHRoaXMuYXJyQ2hlY2spO1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUFycmF5MiA9IEFycmF5LmZyb20odW5pcXVlU2V0KTtcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gdW5pcXVlQXJyYXkyLmxlbmd0aCAvIHRoaXMudGFyZ2V0UG9pbnRzLmxlbmd0aDtcclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5hcnJDaGVja1xyXG4gICAgICAgIHRoaXMuYXJyQ2hlY2sgPSBbXVxyXG5cclxuICAgICAgICBpZiAocGVyY2VudCA+PSB0aGlzLmNvbXBsZXRlUGVyY2VudCkge1xyXG4gICAgICAgICAgICB0aGlzLndpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbChhcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1hdGNoZWRDb3VudCA9IDBcclxuXHJcbiAgICB9XHJcbiAgICBhcnJDaGVjayA9IFtdXHJcbiAgICAvKiogS0nhu4JNIFRSQSBDw5MgR+G6pk4gxJDGr+G7nE5HIE3huqpVIEtIw5RORyAqL1xyXG4gICAgcHJpdmF0ZSBpc05lYXJQYXRoKHA6IGNjLlZlYzIpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFyZ2V0UG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocC5zdWIodGhpcy50YXJnZXRQb2ludHNbaV0pLm1hZygpIDw9IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcnJDaGVjay5pbmNsdWRlcyhpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyckNoZWNrW3RoaXMuYXJyQ2hlY2subGVuZ3RoIC0gMV0gPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy50YXJnZXRQb2ludHNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludCA9IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRydW5nIGRpZW1cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRQb3MgPSB0aGlzLnRhcmdldFBvaW50c1tpXVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyckNoZWNrLmxlbmd0aCA+IDAgJiYgbmV4dFBvcy5zdWIodGhpcy50YXJnZXRQb2ludHNbdGhpcy5hcnJDaGVja1t0aGlzLmFyckNoZWNrLmxlbmd0aCAtIDFdXSkubWFnKCkgPD0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyQ2hlY2sucHVzaChpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N0YXJ0UG9pbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N0YXJ0UG9pbnQgPSBpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLnRhcmdldFBvaW50c1tpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvaW50ID0gcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFyckNoZWNrLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyQ2hlY2sucHVzaChpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N0YXJ0UG9pbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N0YXJ0UG9pbnQgPSBpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLnRhcmdldFBvaW50c1tpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvaW50ID0gcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjaGVjayh2YWx1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDaGVjay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gaSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKiBXSU4gKi9cclxuICAgIHByaXZhdGUgd2luKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIvCfjokgV0lOICEhIVwiKTtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IHRydWVcclxuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKS53aW5HYW1lKClcclxuICAgIH1cclxuICAgIGNsZWFyR2FtZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5jbGVhcigpXHJcbiAgICAgICAgdGhpcy50YXJnZXRHcmFwaGljcy5jbGVhcigpXHJcbiAgICB9XHJcbiAgICAvKiogRkFJTCAqL1xyXG4gICAgaXNFbmRHYW1lID0gZmFsc2VcclxuICAgIGlzRGVsYXlEZW0gPSBmYWxzZVxyXG5cclxuICAgIHByaXZhdGUgZmFpbChhcnIpIHtcclxuICAgICAgICBjYy5sb2coXCLinYwgRkFJTCAhISFcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlXHJcbiAgICAgICAgLy8gdGhpcy5kcmF3R3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRURcclxuICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmxpbmVXaWR0aCA9IDI4O1xyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEXHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubW92ZVRvKHRoaXMudGFyZ2V0UG9pbnRzW3RoaXMuaXNTdGFydFBvaW50XS54LCB0aGlzLnRhcmdldFBvaW50c1t0aGlzLmlzU3RhcnRQb2ludF0ueSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MyID0gdGhpcy50YXJnZXRQb2ludHNbYXJyW2ldXVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5saW5lVG8ocG9zMi54LCBwb3MyLnkpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5mYWlsKClcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGF5RGVtID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWxheURlbSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5jb3VudEZhaWwrK1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RlbGF5RGVtID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZEZhaWwsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb3VudEZhaWwgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lm5leHRMZXZlbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ2hlY2sgPSBbXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvKiogTG9hZCBvdXRsaW5lIHThu6sgSlNPTiAqL1xyXG4gICAgcHVibGljIGxvYWRPdXRsaW5lRnJvbUpTT04oZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgZyA9IHRoaXMudGFyZ2V0R3JhcGhpY3M7XHJcbiAgICAgICAgZy5jbGVhcigpO1xyXG4gICAgICAgIGcubGluZVdpZHRoID0gMTA7XHJcbiAgICAgICAgZy5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDE4MCwgMTgwLCAxODApO1xyXG5cclxuICAgICAgICAvLyAtLS0gVuG6vSDEkcaw4budbmcgdGjhurNuZyAtLS1cclxuICAgICAgICBpZiAoZGF0YS5saW5lcyAmJiBkYXRhLmxpbmVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgZy5tb3ZlVG8oZGF0YS5saW5lc1swXS54LCBkYXRhLmxpbmVzWzBdLnkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGRhdGEubGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGcubGluZVRvKGRhdGEubGluZXNbaV0ueCwgZGF0YS5saW5lc1tpXS55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gLS0tIFbhur0gY2lyY2xlIC0tLVxyXG4gICAgICAgIGlmIChkYXRhLmNpcmNsZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyBvZiBkYXRhLmNpcmNsZXMpIHtcclxuICAgICAgICAgICAgICAgIGcuY2lyY2xlKGMuY3gsIGMuY3ksIGMucik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNhdSBraGkgduG6vSDihpIgZ2VuZXJhdGUgbOG6oWkgxJFp4buDbSBj4bqnbiBraeG7g20gdHJhXHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVRhcmdldFBvaW50c0Zyb21HcmFwaGljcyhkYXRhKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVUYXJnZXRQb2ludHNGcm9tR3JhcGhpY3MoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRQb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gTGluZXNcclxuICAgICAgICBpZiAoZGF0YS5saW5lcyAmJiBkYXRhLmxpbmVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxpbmVzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAxID0gZGF0YS5saW5lc1tpXTtcclxuICAgICAgICAgICAgICAgIGxldCBwMiA9IGRhdGEubGluZXNbaSArIDFdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDw9IDE7IHQgKz0gMC4wMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnRzLnB1c2goY2MudjIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAxLnggKyAocDIueCAtIHAxLngpICogdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDEueSArIChwMi55IC0gcDEueSkgKiB0XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENpcmNsZXNcclxuICAgICAgICBpZiAoZGF0YS5jaXJjbGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgb2YgZGF0YS5jaXJjbGVzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8PSBNYXRoLlBJICogMjsgYSArPSAwLjA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudjIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmN4ICsgTWF0aC5jb3MoYSkgKiBjLnIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmN5ICsgTWF0aC5zaW4oYSkgKiBjLnJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmxvZyhcIlRvdGFsIHRhcmdldCBwb2ludHM6XCIsIHRoaXMudGFyZ2V0UG9pbnRzLmxlbmd0aCk7XHJcbiAgICB9XHJcbn0iXX0=