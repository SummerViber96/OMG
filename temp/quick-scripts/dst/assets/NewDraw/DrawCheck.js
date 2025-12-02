
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
        _this.completePercent = 0.9;
        _this.targetPoints = [];
        _this.isDrawing = false;
        _this.matchedCount = 0;
        _this.matrixPoints = [];
        _this.localPoints = [];
        /** TOUCH MOVE */
        _this.isTargetPoint = null;
        return _this;
    }
    DrawCheck.prototype.onLoad = function () {
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
            points.push(data.children[0].children[i].position);
        }
        this.targetPoints = points;
        this.localPoints = [];
    };
    DrawCheck.prototype.loadMatrixJSON = function (matrix) {
        var rows = matrix.length;
        var cols = matrix[0].length;
        var outlinePoints = [];
        var cellSize = 20; // scale mỗi ô pixel -> 20px
        // Quét ma trận
        for (var y = 0; y < rows; y++) {
            for (var x = 0; x < cols; x++) {
                if (matrix[y][x] === -1) {
                    var worldX = (x - cols / 2) * cellSize;
                    var worldY = (rows / 2 - y) * cellSize;
                    outlinePoints.push(cc.v2(worldX, worldY));
                }
            }
        }
        // // Lưu lại
        // this.matrixPoints = outlinePoints;
        // cc.log("Total outline pixel points:", outlinePoints.length);
        // // Vẽ lên targetGraphics
        // this.drawFromPixelPoints(outlinePoints);
        // // Generate lại targetPoints
        // this.targetPoints = outlinePoints;
        this.matrixPoints = outlinePoints;
        this.targetPoints = outlinePoints; // FIX: targetPoints chính là pixel points
        cc.log("Total outline pixel points:", outlinePoints.length);
        // FIX: vẽ đúng dạng pixel, không nối zig-zag
        this.drawPixelDots(outlinePoints);
    };
    DrawCheck.prototype.drawPixelDots = function (points) {
        var g = this.targetGraphics;
        g.clear();
        g.lineWidth = 1;
        g.fillColor = cc.color(180, 180, 180);
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var p = points_1[_i];
            g.circle(p.x, p.y, 5);
            g.fill();
        }
    };
    // private drawFromPixelPoints(points: cc.Vec2[]) {
    //     const g = this.targetGraphics;
    //     g.clear();
    //     g.lineWidth = 8;
    //     g.strokeColor = cc.color(180, 180, 180);
    //     if (points.length == 0) return;
    //     // Nối trực tiếp (hoặc bạn có thể nhóm theo cluster)
    //     g.moveTo(points[0].x, points[0].y);
    //     for (let i = 1; i < points.length; i++) {
    //         g.lineTo(points[i].x, points[i].y);
    //     }
    //     g.stroke();
    // }
    /** VẼ HÌNH MẪU */
    DrawCheck.prototype.drawSampleShape = function () {
        var g = this.targetGraphics;
        g.lineWidth = 10;
        g.strokeColor = cc.color(180, 180, 180);
        // Square
        g.moveTo(-200, 100);
        g.lineTo(200, 100);
        g.lineTo(200, -300);
        g.lineTo(-200, -300);
        g.lineTo(-200, 100);
        // Circle
        g.circle(0, -200, 240);
        g.stroke();
    };
    /** TẠO DANH SÁCH ĐIỂM OUTLINE */
    DrawCheck.prototype.generateTargetPoints = function () {
        this.targetPoints = [];
        // Square
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
        // Circle
        var center = cc.v2(0, -200);
        var radius = 120;
        for (var a = 0; a <= Math.PI * 2; a += 0.05) {
            this.targetPoints.push(cc.v2(center.x + Math.cos(a) * radius, center.y + Math.sin(a) * radius));
        }
    };
    /** TOUCH START */
    DrawCheck.prototype.onTouchStart = function (event) {
        this.isDrawing = true;
        this.matchedCount = 0;
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.drawGraphics.clear();
        this.drawGraphics.lineWidth = 14;
        this.drawGraphics.strokeColor = cc.color(0, 255, 0);
        this.drawGraphics.moveTo(pos.x, pos.y);
    };
    DrawCheck.prototype.onTouchMove = function (event) {
        if (!this.isDrawing)
            return;
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        // Vẽ
        // Kiểm tra
        if (!this.isNearPath(pos)) {
            this.fail();
            this.drawGraphics.lineTo(pos.x, pos.y);
            this.drawGraphics.stroke();
        }
        else {
            this.drawGraphics.lineTo(this.isTargetPoint.x, this.isTargetPoint.y);
            this.drawGraphics.stroke();
        }
    };
    /** TOUCH END */
    DrawCheck.prototype.onTouchEnd = function () {
        if (!this.isDrawing)
            return;
        this.isDrawing = false;
        var percent = this.matchedCount / this.targetPoints.length;
        if (percent >= this.completePercent) {
            this.win();
        }
        else {
            this.fail();
        }
        this.matchedCount = 0;
    };
    /** KIỂM TRA CÓ GẦN ĐƯỜNG MẪU KHÔNG */
    DrawCheck.prototype.isNearPath = function (p) {
        for (var i = 0; i < this.targetPoints.length; i++) {
            if (p.sub(this.targetPoints[i]).mag() <= this.threshold) {
                this.matchedCount++;
                var pos = this.targetPoints[i];
                this.isTargetPoint = pos;
                // this.targetPoints.splice(i, 1)
                return true;
            }
        }
        // if (p.sub(this.targetPoints[this.matchedCount]).mag() <= this.threshold) {
        //     this.matchedCount++;
        //     let pos = this.targetPoints[this.matchedCount]
        //     this.isTargetPoint = pos
        //     // this.targetPoints.splice(i, 1)
        //     return true;
        // }
        return false;
    };
    /** WIN */
    DrawCheck.prototype.win = function () {
        cc.log("🎉 WIN !!!");
        cc.Canvas.instance.node.getComponent("GameManager").winGame();
    };
    /** FAIL */
    DrawCheck.prototype.fail = function () {
        cc.log("❌ FAIL !!!");
        this.drawGraphics.clear();
        this.isDrawing = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTmV3RHJhd1xcRHJhd0NoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMFNDO1FBdlNHLG9CQUFjLEdBQWdCLElBQUksQ0FBQztRQUduQyxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFHakMsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUd2QixxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUd0QixrQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUM3QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBQ3JDLGlCQUFXLEdBQUcsRUFBRSxDQUFBO1FBbUpoQixpQkFBaUI7UUFDakIsbUJBQWEsR0FBRyxJQUFJLENBQUE7O0lBbUl4QixDQUFDO0lBdFJHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FB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QUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0RDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsU0FBUztRQUNULElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENB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QUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUN4QixDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDM0IsQ0FDSixDQUFDO2lCQUNMO2FBQ0o7U0FDSjtRQUVELEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBdFNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7cURBQ2E7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzttREFDVztJQUdqQztRQURDLFFBQVE7Z0RBQ2M7SUFHdkI7UUFEQyxRQUFRO3NEQUNxQjtJQVpiLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EwUzdCO0lBQUQsZ0JBQUM7Q0ExU0QsQUEwU0MsQ0ExU3NDLEVBQUUsQ0FBQyxTQUFTLEdBMFNsRDtrQkExU29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd0NoZWNrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXHJcbiAgICB0YXJnZXRHcmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIGRyYXdHcmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGhyZXNob2xkOiBudW1iZXIgPSAyNTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGNvbXBsZXRlUGVyY2VudDogbnVtYmVyID0gMC45O1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHRhcmdldFBvaW50czogY2MuVmVjMltdID0gW107XHJcbiAgICBwcml2YXRlIGlzRHJhd2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBtYXRjaGVkQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1hdHJpeFBvaW50czogY2MuVmVjMltdID0gW107XHJcbiAgICBsb2NhbFBvaW50cyA9IFtdXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmRyYXdTYW1wbGVTaGFwZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2VuZXJhdGVUYXJnZXRQb2ludHMoKVxyXG4gICAgfVxyXG4gICAgbG9hZExldmVsKGRhdGEpIHtcclxuICAgICAgICAvLyBsZXQgcG9pbnRzID0gZGF0YS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKS5wb2ludHNcclxuICAgICAgICBsZXQgcG9pbnRzID0gW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2hpbGRyZW5bMF0uY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKGRhdGEuY2hpbGRyZW5bMF0uY2hpbGRyZW5baV0ucG9zaXRpb24pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0UG9pbnRzID0gcG9pbnRzXHJcbiAgICAgICAgdGhpcy5sb2NhbFBvaW50cyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRNYXRyaXhKU09OKG1hdHJpeDogbnVtYmVyW11bXSkge1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBtYXRyaXgubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGNvbHMgPSBtYXRyaXhbMF0ubGVuZ3RoO1xyXG5cclxuICAgICAgICBsZXQgb3V0bGluZVBvaW50czogY2MuVmVjMltdID0gW107XHJcbiAgICAgICAgbGV0IGNlbGxTaXplID0gMjA7ICAgLy8gc2NhbGUgbeG7l2kgw7QgcGl4ZWwgLT4gMjBweFxyXG5cclxuICAgICAgICAvLyBRdcOpdCBtYSB0cuG6rW5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHJvd3M7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNvbHM7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdHJpeFt5XVt4XSA9PT0gLTEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdvcmxkWCA9ICh4IC0gY29scyAvIDIpICogY2VsbFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdvcmxkWSA9IChyb3dzIC8gMiAtIHkpICogY2VsbFNpemU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVQb2ludHMucHVzaChjYy52Mih3b3JsZFgsIHdvcmxkWSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAvLyBMxrB1IGzhuqFpXHJcbiAgICAgICAgLy8gdGhpcy5tYXRyaXhQb2ludHMgPSBvdXRsaW5lUG9pbnRzO1xyXG4gICAgICAgIC8vIGNjLmxvZyhcIlRvdGFsIG91dGxpbmUgcGl4ZWwgcG9pbnRzOlwiLCBvdXRsaW5lUG9pbnRzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIC8vIC8vIFbhur0gbMOqbiB0YXJnZXRHcmFwaGljc1xyXG4gICAgICAgIC8vIHRoaXMuZHJhd0Zyb21QaXhlbFBvaW50cyhvdXRsaW5lUG9pbnRzKTtcclxuXHJcbiAgICAgICAgLy8gLy8gR2VuZXJhdGUgbOG6oWkgdGFyZ2V0UG9pbnRzXHJcbiAgICAgICAgLy8gdGhpcy50YXJnZXRQb2ludHMgPSBvdXRsaW5lUG9pbnRzO1xyXG4gICAgICAgIHRoaXMubWF0cml4UG9pbnRzID0gb3V0bGluZVBvaW50cztcclxuICAgICAgICB0aGlzLnRhcmdldFBvaW50cyA9IG91dGxpbmVQb2ludHM7ICAgICAvLyBGSVg6IHRhcmdldFBvaW50cyBjaMOtbmggbMOgIHBpeGVsIHBvaW50c1xyXG4gICAgICAgIGNjLmxvZyhcIlRvdGFsIG91dGxpbmUgcGl4ZWwgcG9pbnRzOlwiLCBvdXRsaW5lUG9pbnRzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIC8vIEZJWDogduG6vSDEkcO6bmcgZOG6oW5nIHBpeGVsLCBraMO0bmcgbuG7kWkgemlnLXphZ1xyXG4gICAgICAgIHRoaXMuZHJhd1BpeGVsRG90cyhvdXRsaW5lUG9pbnRzKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJhd1BpeGVsRG90cyhwb2ludHM6IGNjLlZlYzJbXSkge1xyXG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLnRhcmdldEdyYXBoaWNzO1xyXG4gICAgICAgIGcuY2xlYXIoKTtcclxuICAgICAgICBnLmxpbmVXaWR0aCA9IDE7XHJcbiAgICAgICAgZy5maWxsQ29sb3IgPSBjYy5jb2xvcigxODAsIDE4MCwgMTgwKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcCBvZiBwb2ludHMpIHtcclxuICAgICAgICAgICAgZy5jaXJjbGUocC54LCBwLnksIDUpO1xyXG4gICAgICAgICAgICBnLmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBwcml2YXRlIGRyYXdGcm9tUGl4ZWxQb2ludHMocG9pbnRzOiBjYy5WZWMyW10pIHtcclxuICAgIC8vICAgICBjb25zdCBnID0gdGhpcy50YXJnZXRHcmFwaGljcztcclxuICAgIC8vICAgICBnLmNsZWFyKCk7XHJcbiAgICAvLyAgICAgZy5saW5lV2lkdGggPSA4O1xyXG4gICAgLy8gICAgIGcuc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigxODAsIDE4MCwgMTgwKTtcclxuXHJcbiAgICAvLyAgICAgaWYgKHBvaW50cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIC8vICAgICAvLyBO4buRaSB0cuG7sWMgdGnhur9wIChob+G6t2MgYuG6oW4gY8OzIHRo4buDIG5ow7NtIHRoZW8gY2x1c3RlcilcclxuICAgIC8vICAgICBnLm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpO1xyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBnLmxpbmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnkpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgZy5zdHJva2UoKTtcclxuICAgIC8vIH1cclxuICAgIC8qKiBW4bq8IEjDjE5IIE3huqpVICovXHJcbiAgICBwcml2YXRlIGRyYXdTYW1wbGVTaGFwZSgpIHtcclxuICAgICAgICBjb25zdCBnID0gdGhpcy50YXJnZXRHcmFwaGljcztcclxuICAgICAgICBnLmxpbmVXaWR0aCA9IDEwO1xyXG4gICAgICAgIGcuc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigxODAsIDE4MCwgMTgwKTtcclxuXHJcbiAgICAgICAgLy8gU3F1YXJlXHJcbiAgICAgICAgZy5tb3ZlVG8oLTIwMCwgMTAwKTtcclxuICAgICAgICBnLmxpbmVUbygyMDAsIDEwMCk7XHJcbiAgICAgICAgZy5saW5lVG8oMjAwLCAtMzAwKTtcclxuICAgICAgICBnLmxpbmVUbygtMjAwLCAtMzAwKTtcclxuICAgICAgICBnLmxpbmVUbygtMjAwLCAxMDApO1xyXG5cclxuICAgICAgICAvLyBDaXJjbGVcclxuICAgICAgICBnLmNpcmNsZSgwLCAtMjAwLCAyNDApO1xyXG5cclxuICAgICAgICBnLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBU4bqgTyBEQU5IIFPDgUNIIMSQSeG7gk0gT1VUTElORSAqL1xyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVRhcmdldFBvaW50cygpIHtcclxuICAgICAgICB0aGlzLnRhcmdldFBvaW50cyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBTcXVhcmVcclxuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8PSAxOyB0ICs9IDAuMDEpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChjYy52MigtMTAwICsgdCAqIDIwMCwgNTApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPD0gMTsgdCArPSAwLjAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnRzLnB1c2goY2MudjIoMTAwLCA1MCAtIHQgKiAyMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPD0gMTsgdCArPSAwLjAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnRzLnB1c2goY2MudjIoMTAwIC0gdCAqIDIwMCwgLTE1MCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8PSAxOyB0ICs9IDAuMDEpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChjYy52MigtMTAwLCAtMTUwICsgdCAqIDIwMCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2lyY2xlXHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gY2MudjIoMCwgLTIwMCk7XHJcbiAgICAgICAgY29uc3QgcmFkaXVzID0gMTIwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8PSBNYXRoLlBJICogMjsgYSArPSAwLjA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnRzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBjYy52MihcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIueCArIE1hdGguY29zKGEpICogcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlci55ICsgTWF0aC5zaW4oYSkgKiByYWRpdXNcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRPVUNIIFNUQVJUICovXHJcbiAgICBwcml2YXRlIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMuaXNEcmF3aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1hdGNoZWRDb3VudCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5saW5lV2lkdGggPSAxNDtcclxuICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubW92ZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRPVUNIIE1PVkUgKi9cclxuICAgIGlzVGFyZ2V0UG9pbnQgPSBudWxsXHJcbiAgICBwcml2YXRlIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRHJhd2luZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgIC8vIFbhur1cclxuXHJcblxyXG4gICAgICAgIC8vIEtp4buDbSB0cmFcclxuICAgICAgICBpZiAoIXRoaXMuaXNOZWFyUGF0aChwb3MpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5saW5lVG8ocG9zLngsIHBvcy55KTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5saW5lVG8odGhpcy5pc1RhcmdldFBvaW50LngsIHRoaXMuaXNUYXJnZXRQb2ludC55KTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUT1VDSCBFTkQgKi9cclxuICAgIHByaXZhdGUgb25Ub3VjaEVuZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmF3aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNEcmF3aW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IHRoaXMubWF0Y2hlZENvdW50IC8gdGhpcy50YXJnZXRQb2ludHMubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAocGVyY2VudCA+PSB0aGlzLmNvbXBsZXRlUGVyY2VudCkge1xyXG4gICAgICAgICAgICB0aGlzLndpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1hdGNoZWRDb3VudCA9IDBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEtJ4buCTSBUUkEgQ8OTIEfhuqZOIMSQxq/hu5xORyBN4bqqVSBLSMOUTkcgKi9cclxuICAgIHByaXZhdGUgaXNOZWFyUGF0aChwOiBjYy5WZWMyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhcmdldFBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocC5zdWIodGhpcy50YXJnZXRQb2ludHNbaV0pLm1hZygpIDw9IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMudGFyZ2V0UG9pbnRzW2ldXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0UG9pbnQgPSBwb3NcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudGFyZ2V0UG9pbnRzLnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHAuc3ViKHRoaXMudGFyZ2V0UG9pbnRzW3RoaXMubWF0Y2hlZENvdW50XSkubWFnKCkgPD0gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5tYXRjaGVkQ291bnQrKztcclxuICAgICAgICAvLyAgICAgbGV0IHBvcyA9IHRoaXMudGFyZ2V0UG9pbnRzW3RoaXMubWF0Y2hlZENvdW50XVxyXG4gICAgICAgIC8vICAgICB0aGlzLmlzVGFyZ2V0UG9pbnQgPSBwb3NcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy50YXJnZXRQb2ludHMuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFdJTiAqL1xyXG4gICAgcHJpdmF0ZSB3aW4oKSB7XHJcbiAgICAgICAgY2MubG9nKFwi8J+OiSBXSU4gISEhXCIpO1xyXG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpLndpbkdhbWUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBGQUlMICovXHJcbiAgICBwcml2YXRlIGZhaWwoKSB7XHJcbiAgICAgICAgY2MubG9nKFwi4p2MIEZBSUwgISEhXCIpO1xyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKiBMb2FkIG91dGxpbmUgdOG7qyBKU09OICovXHJcbiAgICBwdWJsaWMgbG9hZE91dGxpbmVGcm9tSlNPTihkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBnID0gdGhpcy50YXJnZXRHcmFwaGljcztcclxuICAgICAgICBnLmNsZWFyKCk7XHJcbiAgICAgICAgZy5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICBnLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMTgwLCAxODAsIDE4MCk7XHJcblxyXG4gICAgICAgIC8vIC0tLSBW4bq9IMSRxrDhu51uZyB0aOG6s25nIC0tLVxyXG4gICAgICAgIGlmIChkYXRhLmxpbmVzICYmIGRhdGEubGluZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBnLm1vdmVUbyhkYXRhLmxpbmVzWzBdLngsIGRhdGEubGluZXNbMF0ueSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF0YS5saW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZy5saW5lVG8oZGF0YS5saW5lc1tpXS54LCBkYXRhLmxpbmVzW2ldLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGcuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0gVuG6vSBjaXJjbGUgLS0tXHJcbiAgICAgICAgaWYgKGRhdGEuY2lyY2xlcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjIG9mIGRhdGEuY2lyY2xlcykge1xyXG4gICAgICAgICAgICAgICAgZy5jaXJjbGUoYy5jeCwgYy5jeSwgYy5yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2F1IGtoaSB24bq9IOKGkiBnZW5lcmF0ZSBs4bqhaSDEkWnhu4NtIGPhuqduIGtp4buDbSB0cmFcclxuICAgICAgICB0aGlzLmdlbmVyYXRlVGFyZ2V0UG9pbnRzRnJvbUdyYXBoaWNzKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVRhcmdldFBvaW50c0Zyb21HcmFwaGljcyhkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnRhcmdldFBvaW50cyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBMaW5lc1xyXG4gICAgICAgIGlmIChkYXRhLmxpbmVzICYmIGRhdGEubGluZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGluZXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcDEgPSBkYXRhLmxpbmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHAyID0gZGF0YS5saW5lc1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPD0gMTsgdCArPSAwLjAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChjYy52MihcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDEueCArIChwMi54IC0gcDEueCkgKiB0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwMS55ICsgKHAyLnkgLSBwMS55KSAqIHRcclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2lyY2xlc1xyXG4gICAgICAgIGlmIChkYXRhLmNpcmNsZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyBvZiBkYXRhLmNpcmNsZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDw9IE1hdGguUEkgKiAyOyBhICs9IDAuMDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvaW50cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy52MihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuY3ggKyBNYXRoLmNvcyhhKSAqIGMucixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuY3kgKyBNYXRoLnNpbihhKSAqIGMuclxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MubG9nKFwiVG90YWwgdGFyZ2V0IHBvaW50czpcIiwgdGhpcy50YXJnZXRQb2ludHMubGVuZ3RoKTtcclxuICAgIH1cclxufSJdfQ==