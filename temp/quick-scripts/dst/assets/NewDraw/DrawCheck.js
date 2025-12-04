
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
        _this.arrCheck = [];
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
            var pos = data.children[0].children[i].position;
            pos = data.children[0].convertToWorldSpaceAR(pos);
            pos = this.node.convertToNodeSpaceAR(pos);
            points.push(pos);
        }
        this.targetPoints = points;
        console.log(this.targetPoints);
        // console.log(this.targetPoints)
        // this.localPoints = []
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
        if (this.isDrawing)
            return;
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
            this.drawGraphics.lineTo(pos.x, pos.y);
            this.drawGraphics.stroke();
            console.log("draw");
        }
    };
    /** TOUCH END */
    DrawCheck.prototype.onTouchEnd = function () {
        if (!this.isDrawing)
            return;
        this.isDrawing = false;
        console.log(this.arrCheck);
        var uniqueSet = new Set(this.arrCheck);
        var uniqueArray2 = Array.from(uniqueSet);
        var percent = uniqueArray2.length / this.targetPoints.length;
        this.arrCheck = [];
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
                // console.log(this.check(i), i)
                if (this.arrCheck.includes(i)) {
                    if (this.arrCheck[this.arrCheck.length - 1] == i) {
                        var pos = this.targetPoints[i];
                        // this.isTargetPoint = pos
                        return true;
                    }
                    else {
                        console.log("trung diem");
                        // return false
                    }
                }
                else {
                    this.matchedCount++;
                    this.arrCheck.push(i);
                    var pos = this.targetPoints[i];
                    this.isTargetPoint = pos;
                    return true;
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
        cc.Canvas.instance.node.getComponent("GameManager").winGame();
    };
    /** FAIL */
    DrawCheck.prototype.fail = function () {
        var _this = this;
        cc.log("❌ FAIL !!!");
        this.drawGraphics.strokeColor = cc.Color.RED;
        this.scheduleOnce(function () {
            _this.drawGraphics.clear();
            _this.isDrawing = false;
            _this.arrCheck = [];
        }, 0.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTmV3RHJhd1xcRHJhd0NoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBOFVDO1FBM1VHLG9CQUFjLEdBQWdCLElBQUksQ0FBQztRQUduQyxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFHakMsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUd2QixxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUd0QixrQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUM3QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBQ3JDLGlCQUFXLEdBQUcsRUFBRSxDQUFBO1FBeUpoQixpQkFBaUI7UUFDakIsbUJBQWEsR0FBRyxJQUFJLENBQUE7UUF3Q3BCLGNBQVEsR0FBRyxFQUFFLENBQUE7O0lBeUhqQixDQUFDO0lBMVRHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJ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QUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZLEVBQUU7Z0JBQXZCLElBQUksQ0FBQyxTQUFBO2dCQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDbEIsRUFBRSxDQUFDLEVBQUUsQ0FDRCxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDeEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQzNCLENBQ0osQ0FBQztpQkFDTDthQUNKO1NBQ0o7UUFFRCxFQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQTFVRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3FEQUNhO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7bURBQ1c7SUFHakM7UUFEQyxRQUFRO2dEQUNjO0lBR3ZCO1FBREMsUUFBUTtzREFDcUI7SUFaYixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBOFU3QjtJQUFELGdCQUFDO0NBOVVELEFBOFVDLENBOVVzQyxFQUFFLENBQUMsU0FBUyxHQThVbEQ7a0JBOVVvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdDaGVjayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gICAgdGFyZ2V0R3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXHJcbiAgICBkcmF3R3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRocmVzaG9sZDogbnVtYmVyID0gMjU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjb21wbGV0ZVBlcmNlbnQ6IG51bWJlciA9IDAuOTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXRQb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBpc0RyYXdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbWF0Y2hlZENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBtYXRyaXhQb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgbG9jYWxQb2ludHMgPSBbXVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5kcmF3U2FtcGxlU2hhcGUoKTtcclxuICAgICAgICAvLyB0aGlzLmdlbmVyYXRlVGFyZ2V0UG9pbnRzKClcclxuICAgIH1cclxuICAgIGxvYWRMZXZlbChkYXRhKSB7XHJcbiAgICAgICAgLy8gbGV0IHBvaW50cyA9IGRhdGEuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikucG9pbnRzXHJcbiAgICAgICAgbGV0IHBvaW50cyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNoaWxkcmVuWzBdLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gZGF0YS5jaGlsZHJlblswXS5jaGlsZHJlbltpXS5wb3NpdGlvblxyXG4gICAgICAgICAgICBwb3MgPSBkYXRhLmNoaWxkcmVuWzBdLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvcylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXJnZXRQb2ludHMgPSBwb2ludHNcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhcmdldFBvaW50cylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRhcmdldFBvaW50cylcclxuICAgICAgICAvLyB0aGlzLmxvY2FsUG9pbnRzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZE1hdHJpeEpTT04obWF0cml4OiBudW1iZXJbXVtdKSB7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgY29scyA9IG1hdHJpeFswXS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGxldCBvdXRsaW5lUG9pbnRzOiBjYy5WZWMyW10gPSBbXTtcclxuICAgICAgICBsZXQgY2VsbFNpemUgPSAyMDsgICAvLyBzY2FsZSBt4buXaSDDtCBwaXhlbCAtPiAyMHB4XHJcblxyXG4gICAgICAgIC8vIFF1w6l0IG1hIHRy4bqtblxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcm93czsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY29sczsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0cml4W3ldW3hdID09PSAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgd29ybGRYID0gKHggLSBjb2xzIC8gMikgKiBjZWxsU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd29ybGRZID0gKHJvd3MgLyAyIC0geSkgKiBjZWxsU2l6ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZVBvaW50cy5wdXNoKGNjLnYyKHdvcmxkWCwgd29ybGRZKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC8vIEzGsHUgbOG6oWlcclxuICAgICAgICAvLyB0aGlzLm1hdHJpeFBvaW50cyA9IG91dGxpbmVQb2ludHM7XHJcbiAgICAgICAgLy8gY2MubG9nKFwiVG90YWwgb3V0bGluZSBwaXhlbCBwb2ludHM6XCIsIG91dGxpbmVQb2ludHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgLy8gLy8gVuG6vSBsw6puIHRhcmdldEdyYXBoaWNzXHJcbiAgICAgICAgLy8gdGhpcy5kcmF3RnJvbVBpeGVsUG9pbnRzKG91dGxpbmVQb2ludHMpO1xyXG5cclxuICAgICAgICAvLyAvLyBHZW5lcmF0ZSBs4bqhaSB0YXJnZXRQb2ludHNcclxuICAgICAgICAvLyB0aGlzLnRhcmdldFBvaW50cyA9IG91dGxpbmVQb2ludHM7XHJcbiAgICAgICAgdGhpcy5tYXRyaXhQb2ludHMgPSBvdXRsaW5lUG9pbnRzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0UG9pbnRzID0gb3V0bGluZVBvaW50czsgICAgIC8vIEZJWDogdGFyZ2V0UG9pbnRzIGNow61uaCBsw6AgcGl4ZWwgcG9pbnRzXHJcbiAgICAgICAgY2MubG9nKFwiVG90YWwgb3V0bGluZSBwaXhlbCBwb2ludHM6XCIsIG91dGxpbmVQb2ludHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgLy8gRklYOiB24bq9IMSRw7puZyBk4bqhbmcgcGl4ZWwsIGtow7RuZyBu4buRaSB6aWctemFnXHJcbiAgICAgICAgdGhpcy5kcmF3UGl4ZWxEb3RzKG91dGxpbmVQb2ludHMpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkcmF3UGl4ZWxEb3RzKHBvaW50czogY2MuVmVjMltdKSB7XHJcbiAgICAgICAgY29uc3QgZyA9IHRoaXMudGFyZ2V0R3JhcGhpY3M7XHJcbiAgICAgICAgZy5jbGVhcigpO1xyXG4gICAgICAgIGcubGluZVdpZHRoID0gMTtcclxuICAgICAgICBnLmZpbGxDb2xvciA9IGNjLmNvbG9yKDE4MCwgMTgwLCAxODApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwIG9mIHBvaW50cykge1xyXG4gICAgICAgICAgICBnLmNpcmNsZShwLngsIHAueSwgNSk7XHJcbiAgICAgICAgICAgIGcuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHByaXZhdGUgZHJhd0Zyb21QaXhlbFBvaW50cyhwb2ludHM6IGNjLlZlYzJbXSkge1xyXG4gICAgLy8gICAgIGNvbnN0IGcgPSB0aGlzLnRhcmdldEdyYXBoaWNzO1xyXG4gICAgLy8gICAgIGcuY2xlYXIoKTtcclxuICAgIC8vICAgICBnLmxpbmVXaWR0aCA9IDg7XHJcbiAgICAvLyAgICAgZy5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDE4MCwgMTgwLCAxODApO1xyXG5cclxuICAgIC8vICAgICBpZiAocG9pbnRzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgIC8vIE7hu5FpIHRy4buxYyB0aeG6v3AgKGhv4bq3YyBi4bqhbiBjw7MgdGjhu4MgbmjDs20gdGhlbyBjbHVzdGVyKVxyXG4gICAgLy8gICAgIGcubW92ZVRvKHBvaW50c1swXS54LCBwb2ludHNbMF0ueSk7XHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGcubGluZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBnLnN0cm9rZSgpO1xyXG4gICAgLy8gfVxyXG4gICAgLyoqIFbhurwgSMOMTkggTeG6qlUgKi9cclxuICAgIHByaXZhdGUgZHJhd1NhbXBsZVNoYXBlKCkge1xyXG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLnRhcmdldEdyYXBoaWNzO1xyXG4gICAgICAgIGcubGluZVdpZHRoID0gMTA7XHJcbiAgICAgICAgZy5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDE4MCwgMTgwLCAxODApO1xyXG5cclxuICAgICAgICAvLyBTcXVhcmVcclxuICAgICAgICBnLm1vdmVUbygtMjAwLCAxMDApO1xyXG4gICAgICAgIGcubGluZVRvKDIwMCwgMTAwKTtcclxuICAgICAgICBnLmxpbmVUbygyMDAsIC0zMDApO1xyXG4gICAgICAgIGcubGluZVRvKC0yMDAsIC0zMDApO1xyXG4gICAgICAgIGcubGluZVRvKC0yMDAsIDEwMCk7XHJcblxyXG4gICAgICAgIC8vIENpcmNsZVxyXG4gICAgICAgIGcuY2lyY2xlKDAsIC0yMDAsIDI0MCk7XHJcblxyXG4gICAgICAgIGcuc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFThuqBPIERBTkggU8OBQ0ggxJBJ4buCTSBPVVRMSU5FICovXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlVGFyZ2V0UG9pbnRzKCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0UG9pbnRzID0gW107XHJcblxyXG4gICAgICAgIC8vIFNxdWFyZVxyXG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDw9IDE7IHQgKz0gMC4wMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFBvaW50cy5wdXNoKGNjLnYyKC0xMDAgKyB0ICogMjAwLCA1MCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8PSAxOyB0ICs9IDAuMDEpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChjYy52MigxMDAsIDUwIC0gdCAqIDIwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8PSAxOyB0ICs9IDAuMDEpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChjYy52MigxMDAgLSB0ICogMjAwLCAtMTUwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDw9IDE7IHQgKz0gMC4wMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFBvaW50cy5wdXNoKGNjLnYyKC0xMDAsIC0xNTAgKyB0ICogMjAwKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaXJjbGVcclxuICAgICAgICBjb25zdCBjZW50ZXIgPSBjYy52MigwLCAtMjAwKTtcclxuICAgICAgICBjb25zdCByYWRpdXMgPSAxMjA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDw9IE1hdGguUEkgKiAyOyBhICs9IDAuMDUpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChcclxuICAgICAgICAgICAgICAgIGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlci54ICsgTWF0aC5jb3MoYSkgKiByYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyLnkgKyBNYXRoLnNpbihhKSAqIHJhZGl1c1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogVE9VQ0ggU1RBUlQgKi9cclxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmF3aW5nKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzRHJhd2luZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tYXRjaGVkQ291bnQgPSAwO1xyXG5cclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubGluZVdpZHRoID0gMTQ7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigwLCAyNTUsIDApO1xyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLm1vdmVUbyhwb3MueCwgcG9zLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUT1VDSCBNT1ZFICovXHJcbiAgICBpc1RhcmdldFBvaW50ID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0RyYXdpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG5cclxuICAgICAgICAvLyBW4bq9XHJcblxyXG5cclxuICAgICAgICAvLyBLaeG7g20gdHJhXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTmVhclBhdGgocG9zKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhaWwoKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubGluZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubGluZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRyYXdcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRPVUNIIEVORCAqL1xyXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0RyYXdpbmcpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRHJhd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyQ2hlY2spXHJcbiAgICAgICAgY29uc3QgdW5pcXVlU2V0ID0gbmV3IFNldCh0aGlzLmFyckNoZWNrKTtcclxuICAgICAgICBjb25zdCB1bmlxdWVBcnJheTIgPSBBcnJheS5mcm9tKHVuaXF1ZVNldCk7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IHVuaXF1ZUFycmF5Mi5sZW5ndGggLyB0aGlzLnRhcmdldFBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5hcnJDaGVjayA9IFtdXHJcblxyXG4gICAgICAgIGlmIChwZXJjZW50ID49IHRoaXMuY29tcGxldGVQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMud2luKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mYWlsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF0Y2hlZENvdW50ID0gMFxyXG5cclxuICAgIH1cclxuICAgIGFyckNoZWNrID0gW11cclxuICAgIC8qKiBLSeG7gk0gVFJBIEPDkyBH4bqmTiDEkMav4bucTkcgTeG6qlUgS0jDlE5HICovXHJcbiAgICBwcml2YXRlIGlzTmVhclBhdGgocDogY2MuVmVjMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXJnZXRQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChwLnN1Yih0aGlzLnRhcmdldFBvaW50c1tpXSkubWFnKCkgPD0gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2hlY2soaSksIGkpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcnJDaGVjay5pbmNsdWRlcyhpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyckNoZWNrW3RoaXMuYXJyQ2hlY2subGVuZ3RoIC0gMV0gPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy50YXJnZXRQb2ludHNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5pc1RhcmdldFBvaW50ID0gcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJ1bmcgZGllbVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyQ2hlY2sucHVzaChpKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLnRhcmdldFBvaW50c1tpXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRQb2ludCA9IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY2hlY2sodmFsdWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ2hlY2subGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IGkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKiogV0lOICovXHJcbiAgICBwcml2YXRlIHdpbigpIHtcclxuICAgICAgICBjYy5sb2coXCLwn46JIFdJTiAhISFcIik7XHJcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIikud2luR2FtZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEZBSUwgKi9cclxuICAgIHByaXZhdGUgZmFpbCgpIHtcclxuICAgICAgICBjYy5sb2coXCLinYwgRkFJTCAhISFcIik7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRURcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEcmF3aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ2hlY2sgPSBbXVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICB9XHJcbiAgICAvKiogTG9hZCBvdXRsaW5lIHThu6sgSlNPTiAqL1xyXG4gICAgcHVibGljIGxvYWRPdXRsaW5lRnJvbUpTT04oZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgZyA9IHRoaXMudGFyZ2V0R3JhcGhpY3M7XHJcbiAgICAgICAgZy5jbGVhcigpO1xyXG4gICAgICAgIGcubGluZVdpZHRoID0gMTA7XHJcbiAgICAgICAgZy5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDE4MCwgMTgwLCAxODApO1xyXG5cclxuICAgICAgICAvLyAtLS0gVuG6vSDEkcaw4budbmcgdGjhurNuZyAtLS1cclxuICAgICAgICBpZiAoZGF0YS5saW5lcyAmJiBkYXRhLmxpbmVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgZy5tb3ZlVG8oZGF0YS5saW5lc1swXS54LCBkYXRhLmxpbmVzWzBdLnkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGRhdGEubGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGcubGluZVRvKGRhdGEubGluZXNbaV0ueCwgZGF0YS5saW5lc1tpXS55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gLS0tIFbhur0gY2lyY2xlIC0tLVxyXG4gICAgICAgIGlmIChkYXRhLmNpcmNsZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyBvZiBkYXRhLmNpcmNsZXMpIHtcclxuICAgICAgICAgICAgICAgIGcuY2lyY2xlKGMuY3gsIGMuY3ksIGMucik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNhdSBraGkgduG6vSDihpIgZ2VuZXJhdGUgbOG6oWkgxJFp4buDbSBj4bqnbiBraeG7g20gdHJhXHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVRhcmdldFBvaW50c0Zyb21HcmFwaGljcyhkYXRhKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVUYXJnZXRQb2ludHNGcm9tR3JhcGhpY3MoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRQb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gTGluZXNcclxuICAgICAgICBpZiAoZGF0YS5saW5lcyAmJiBkYXRhLmxpbmVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxpbmVzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAxID0gZGF0YS5saW5lc1tpXTtcclxuICAgICAgICAgICAgICAgIGxldCBwMiA9IGRhdGEubGluZXNbaSArIDFdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDw9IDE7IHQgKz0gMC4wMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnRzLnB1c2goY2MudjIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAxLnggKyAocDIueCAtIHAxLngpICogdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDEueSArIChwMi55IC0gcDEueSkgKiB0XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENpcmNsZXNcclxuICAgICAgICBpZiAoZGF0YS5jaXJjbGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgb2YgZGF0YS5jaXJjbGVzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8PSBNYXRoLlBJICogMjsgYSArPSAwLjA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudjIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmN4ICsgTWF0aC5jb3MoYSkgKiBjLnIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmN5ICsgTWF0aC5zaW4oYSkgKiBjLnJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmxvZyhcIlRvdGFsIHRhcmdldCBwb2ludHM6XCIsIHRoaXMudGFyZ2V0UG9pbnRzLmxlbmd0aCk7XHJcbiAgICB9XHJcbn0iXX0=