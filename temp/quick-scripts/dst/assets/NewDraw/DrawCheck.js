
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
        _this.glowGraphics = null;
        _this.lightNode = null;
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
        // private onTouchMove(event: cc.Event.EventTouch) {
        //     if (!this.isDrawing) return;
        //     if (this.gamePlay.hand.active == true) {
        //         this.gamePlay.hand.active = false
        //     }
        //     const pos = this.node.convertToNodeSpaceAR(event.getLocation());
        //     // Vẽ
        //     // Kiểm tra
        //     if (!this.isNearPath(pos)) {
        //     }
        //     else {
        //         this.drawGraphics.clear();
        //         this.drawGraphics.lineWidth = 28;
        //         this.drawGraphics.strokeColor = cc.color(0, 255, 0);
        //         this.drawGraphics.moveTo(this.targetPoints[this.isStartPoint].x, this.targetPoints[this.isStartPoint].y);
        //         for (let i = 0; i < this.arrCheck.length; i++) {
        //             let pos2 = this.targetPoints[this.arrCheck[i]]
        //             this.drawGraphics.lineTo(pos2.x, pos2.y);
        //         }
        //         this.drawGraphics.stroke();
        //     }
        //     const uniqueSet = new Set(this.arrCheck);
        //     const uniqueArray2 = Array.from(uniqueSet);
        //     const percent = uniqueArray2.length / this.targetPoints.length;
        //     // this.arrCheck = []
        //     if (percent >= this.completePercent) {
        //         this.win();
        //     }
        // }
        _this.isDelay = false;
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
        if (!this.isDrawing || this.isEndGame)
            return;
        if (this.gamePlay.hand.active == true) {
            this.gamePlay.hand.active = false;
        }
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        if (!this.isNearPath(pos)) {
            // let min = 1000
            // let index = 0
            // for (let i = 0; i < this.targetPoints.length; i++) {
            //     if (pos.sub(this.targetPoints[i]).mag() <= min) {
            //         min = pos.sub(this.targetPoints[i]).mag()
            //         index = i
            //     }
            // }
            // if (min != 1000) {
            //     this.matchedCount++;
            //     // if (localId - i == 2) {
            //     //     this.arrCheck.push(i + 1)
            //     // }
            //     // else if (i - localId == 2) {
            //     //     this.arrCheck.push(i - 1)
            //     // }
            //     this.arrCheck.push(index)
            //     // let pos = this.targetPoints[i]
            //     // this.targetPoint = pos
            // }
            return;
        }
        this.redrawLine(); // vẽ lại toàn bộ 1 lần duy nhất
        var uniqueSet = new Set(this.arrCheck);
        var uniqueArray2 = Array.from(uniqueSet);
        var percent = uniqueArray2.length / this.targetPoints.length;
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
        this.lightNode.active = false;
        if (percent >= this.completePercent) {
            this.win();
        }
        else {
            this.fail(arr);
        }
        this.matchedCount = 0;
    };
    DrawCheck.prototype.redrawLine = function () {
        this.drawGraphics.clear();
        this.drawGraphics.lineWidth = 40;
        this.drawGraphics.strokeColor = cc.color(0, 255, 0);
        // for (let i = 1; i < this.arrCheck.length; i++) {
        //     if (this.arrCheck[i - 1] + 1 == this.arrCheck[i + 2]) {
        //         this.arrCheck.splice(i, 2)
        //     }
        // }
        // this.glowGraphics.clear();
        // this.glowGraphics.lineWidth = 40;
        // this.glowGraphics.strokeColor = cc.color(100, 255, 255, 120); // mờ
        if (this.arrCheck.length <= 1)
            return;
        var start = this.targetPoints[this.arrCheck[0]];
        this.drawGraphics.moveTo(start.x, start.y);
        for (var i = 1; i < this.arrCheck.length; i++) {
            var p = this.targetPoints[this.arrCheck[i]];
            this.drawGraphics.lineTo(p.x, p.y);
        }
        this.drawGraphics.stroke();
        this.updateMovingLight();
    };
    /** KIỂM TRA CÓ GẦN ĐƯỜNG MẪU KHÔNG */
    DrawCheck.prototype.isNearPath = function (p) {
        for (var i = 0; i < this.targetPoints.length; i++) {
            if (p.sub(this.targetPoints[i]).mag() <= this.threshold) {
                if (this.arrCheck.includes(i) && i != this.arrCheck[0]) {
                    if (this.arrCheck[this.arrCheck.length - 1] == i) {
                        var pos = this.targetPoints[i];
                        this.targetPoint = pos;
                        return true;
                    }
                    else {
                        // console.log("trung diem")
                        // return false
                    }
                    var lastIndex = this.arrCheck[this.arrCheck.length - 1];
                    if ((i == lastIndex - 1) || (i == lastIndex + 1)) {
                        var tp = this.targetPoints[i];
                        this.arrCheck.pop();
                        this.targetPoint = tp;
                        return true;
                    }
                }
                else {
                    var nextPos = this.targetPoints[i];
                    var localId = this.arrCheck[this.arrCheck.length - 1];
                    if (this.arrCheck.length > 0 && nextPos.sub(this.targetPoints[this.arrCheck[this.arrCheck.length - 1]]).mag() <= 120) {
                        this.matchedCount++;
                        if (localId - i == 2) {
                            this.arrCheck.push(i + 1);
                        }
                        else if (i - localId == 2) {
                            this.arrCheck.push(i - 1);
                        }
                        else if (localId - i == 3) {
                            this.arrCheck.push(i + 2);
                        }
                        else if (i - localId == 3) {
                            this.arrCheck.push(i - 2);
                        }
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
                        if (localId - i == 2) {
                            this.arrCheck.push(i + 1);
                        }
                        else if (i - localId == 2) {
                            this.arrCheck.push(i - 1);
                        }
                        this.arrCheck.push(i);
                        if (this.isStartPoint == null) {
                            this.isStartPoint = i;
                        }
                        var pos = this.targetPoints[i];
                        this.targetPoint = pos;
                        return true;
                    }
                }
            }
        }
        return false;
    };
    // private isNearPath(pos: cc.Vec2): boolean {
    //     for (let i = 0; i < this.targetPoints.length; i++) {
    //         let tp = this.targetPoints[i];
    //         if (pos.sub(tp).mag() <= this.threshold) {
    //             // Nếu chưa có điểm → bắt đầu
    //             if (this.arrCheck.length === 0) {
    //                 this.arrCheck.push(i);
    //                 this.isStartPoint = i;
    //                 this.targetPoint = tp;
    //                 return true;
    //             }
    //             let lastIndex = this.arrCheck[this.arrCheck.length - 1];
    //             // Nếu trùng cuối → chỉ cập nhật vẽ
    //             if (i === lastIndex) {
    //                 this.targetPoint = tp;
    //                 return true;
    //             }
    //             // 🔥 Phải đi đúng thứ tự liền kề (không nhảy đoạn)
    //             if (i === lastIndex + 1) {
    //                 this.arrCheck.push(i);
    //                 this.targetPoint = tp;
    //                 return true;
    //             }
    //             // 🔥 Cho phép đi lùi để xóa đường phía sau
    //             if (i === lastIndex - 1) {
    //                 this.arrCheck.pop();
    //                 this.targetPoint = tp;
    //                 return true;
    //             }
    //             // ❌ Đi sai hướng → ra ngoài → fail
    //             return false;
    //         }
    //     }
    //     return false;
    // }
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
        this.lightNode.active = false;
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
    DrawCheck.prototype.updateMovingLight = function () {
        if (!this.lightNode)
            return;
        if (this.arrCheck.length === 0)
            return;
        var lastIndex = this.arrCheck[this.arrCheck.length - 1];
        var p = this.targetPoints[lastIndex];
        this.lightNode.active = true;
        this.lightNode.parent = this.node.parent;
        this.lightNode.scale = 0.2;
        this.lightNode.setPosition(p);
    };
    DrawCheck.prototype.update = function (dt) {
        if (!this.lightNode)
            return;
        var s = 1 + Math.sin(Date.now() * 0.01) * 0.1;
        this.lightNode.scale = s;
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
    __decorate([
        property(cc.Graphics)
    ], DrawCheck.prototype, "glowGraphics", void 0);
    __decorate([
        property(cc.Node)
    ], DrawCheck.prototype, "lightNode", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTmV3RHJhd1xcRHJhd0NoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMmRDO1FBeGRHLG9CQUFjLEdBQWdCLElBQUksQ0FBQztRQUduQyxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFHakMsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUd2QixxQkFBZSxHQUFXLElBQUksQ0FBQztRQUUvQixrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFHakMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUVsQixrQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUM3QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBQ3JDLGlCQUFXLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLGVBQVMsR0FBRyxDQUFDLENBQUE7UUFDYixjQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ2YsaUJBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN6QixrQkFBWSxHQUFHLElBQUksQ0FBQTtRQUNuQixnQkFBVSxHQUFHLElBQUksQ0FBQTtRQWlEakIsaUJBQWlCO1FBQ2pCLG1CQUFhLEdBQUcsSUFBSSxDQUFBO1FBQ3BCLG9EQUFvRDtRQUNwRCxtQ0FBbUM7UUFDbkMsK0NBQStDO1FBQy9DLDRDQUE0QztRQUM1QyxRQUFRO1FBQ1IsdUVBQXVFO1FBQ3ZFLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsbUNBQW1DO1FBRW5DLFFBQVE7UUFDUixhQUFhO1FBRWIscUNBQXFDO1FBQ3JDLDRDQUE0QztRQUM1QywrREFBK0Q7UUFDL0Qsb0hBQW9IO1FBRXBILDJEQUEyRDtRQUMzRCw2REFBNkQ7UUFDN0Qsd0RBQXdEO1FBQ3hELFlBQVk7UUFDWixzQ0FBc0M7UUFFdEMsUUFBUTtRQUNSLGdEQUFnRDtRQUNoRCxrREFBa0Q7UUFDbEQsc0VBQXNFO1FBQ3RFLDRCQUE0QjtRQUU1Qiw2Q0FBNkM7UUFDN0Msc0JBQXNCO1FBQ3RCLFFBQVE7UUFDUixJQUFJO1FBQ0osYUFBTyxHQUFHLEtBQUssQ0FBQTtRQTBGZixjQUFRLEdBQUcsRUFBRSxDQUFBO1FBb0piLFdBQVc7UUFDWCxlQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLGdCQUFVLEdBQUcsS0FBSyxDQUFBOztJQTBIdEIsQ0FBQztJQTliRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BFLDBCQUEwQjtRQUMxQiw4QkFBOEI7SUFDbEMsQ0FBQztJQUNELDZCQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1Ysd0VBQXdFO1FBQ3hFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUE7WUFDL0MsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDakQsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNuQjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFBO1FBQzFCLGlDQUFpQztRQUNqQyx3QkFBd0I7SUFDNUIsQ0FBQztJQUdELGtCQUFrQjtJQUNWLGdDQUFZLEdBQXBCLFVBQXFCLEtBQTBCO1FBQzNDLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFNO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLHVCQUF1QjtRQUN2QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRCwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsNENBQTRDO1NBRS9DO2FBQ0k7WUFDRCxvQkFBb0I7U0FDdkI7SUFFTCxDQUFDO0lBdUNPLCtCQUFXLEdBQW5CLFVBQW9CLEtBQTBCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM5QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtTQUNwQztRQUNELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQix1REFBdUQ7WUFFdkQsd0RBQXdEO1lBQ3hELG9EQUFvRDtZQUNwRCxvQkFBb0I7WUFDcEIsUUFBUTtZQUNSLElBQUk7WUFDSixxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLGlDQUFpQztZQUNqQyx1Q0FBdUM7WUFDdkMsV0FBVztZQUNYLHNDQUFzQztZQUN0Qyx1Q0FBdUM7WUFFdkMsV0FBVztZQUNYLGdDQUFnQztZQUdoQyx3Q0FBd0M7WUFDeEMsZ0NBQWdDO1lBQ2hDLElBQUk7WUFFSixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxnQ0FBZ0M7UUFFbkQsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUUvRCxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNkO0lBQ0wsQ0FBQztJQUNELGdCQUFnQjtJQUNSLDhCQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQy9ELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQzdCLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDakMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQTtJQUV6QixDQUFDO0lBQ08sOEJBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsbURBQW1EO1FBRW5ELDhEQUE4RDtRQUM5RCxxQ0FBcUM7UUFFckMsUUFBUTtRQUNSLElBQUk7UUFFSiw2QkFBNkI7UUFDN0Isb0NBQW9DO1FBQ3BDLHNFQUFzRTtRQUN0RSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ3RDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFzQztJQUM5Qiw4QkFBVSxHQUFsQixVQUFtQixDQUFVO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUUvQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3JELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3BELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQzlDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFBO3dCQUN0QixPQUFPLElBQUksQ0FBQztxQkFFZjt5QkFDSTt3QkFDRCw0QkFBNEI7d0JBQzVCLGVBQWU7cUJBQ2xCO29CQUNELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDOUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7d0JBQ3RCLE9BQU8sSUFBSSxDQUFDO3FCQUNmO2lCQUVKO3FCQUNJO29CQUNELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ2xDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7b0JBQ3JELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUU7d0JBQ2xILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO3lCQUM1Qjs2QkFDSSxJQUFJLENBQUMsR0FBRyxPQUFPLElBQUksQ0FBQyxFQUFFOzRCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7eUJBRTVCOzZCQUNJLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTt5QkFFNUI7NkJBQ0ksSUFBSSxDQUFDLEdBQUcsT0FBTyxJQUFJLENBQUMsRUFBRTs0QkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO3lCQUU1Qjt3QkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTs0QkFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7eUJBRXhCO3dCQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFBO3dCQUV0QixPQUFPLElBQUksQ0FBQztxQkFDZjt5QkFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNwQixJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7eUJBQzVCOzZCQUNJLElBQUksQ0FBQyxHQUFHLE9BQU8sSUFBSSxDQUFDLEVBQUU7NEJBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTt5QkFFNUI7d0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7NEJBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFBO3lCQUV4Qjt3QkFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQTt3QkFDdEIsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7aUJBQ0o7YUFDSjtTQUVKO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELDhDQUE4QztJQUU5QywyREFBMkQ7SUFDM0QseUNBQXlDO0lBRXpDLHFEQUFxRDtJQUVyRCw0Q0FBNEM7SUFDNUMsZ0RBQWdEO0lBQ2hELHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMseUNBQXlDO0lBQ3pDLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFFaEIsdUVBQXVFO0lBRXZFLGtEQUFrRDtJQUNsRCxxQ0FBcUM7SUFDckMseUNBQXlDO0lBQ3pDLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFFaEIsa0VBQWtFO0lBQ2xFLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMseUNBQXlDO0lBQ3pDLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFFaEIsMERBQTBEO0lBQzFELHlDQUF5QztJQUN6Qyx1Q0FBdUM7SUFDdkMseUNBQXlDO0lBQ3pDLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFFaEIsa0RBQWtEO0lBQ2xELDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osUUFBUTtJQUVSLG9CQUFvQjtJQUNwQixJQUFJO0lBQ0oseUJBQUssR0FBTCxVQUFNLEtBQUs7UUFDUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxLQUFLLElBQUksQ0FBQztnQkFBRSxPQUFPLElBQUksQ0FBQztTQUMvQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxVQUFVO0lBQ0YsdUJBQUcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ3JCLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDakUsQ0FBQztJQUNELDZCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDL0IsQ0FBQztJQUtPLHdCQUFJLEdBQVosVUFBYSxHQUFHO1FBQWhCLGlCQXdDQztRQXZDRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ3JCLCtDQUErQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQTtRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNwQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUVoQixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBRTNCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNSO1FBQ0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRXRELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtTQUM1QjthQUNJO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMxQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUE7Z0JBQ2xCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1lBRTFCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUNWO0lBRUwsQ0FBQztJQUNELDJCQUEyQjtJQUNwQix1Q0FBbUIsR0FBMUIsVUFBMkIsSUFBUztRQUNoQyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNWLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXhDLHlCQUF5QjtRQUN6QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QztZQUNELENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNkO1FBRUQsb0JBQW9CO1FBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLEtBQWMsVUFBWSxFQUFaLEtBQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixjQUFZLEVBQVosSUFBWSxFQUFFO2dCQUF2QixJQUFJLENBQUMsU0FBQTtnQkFDTixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZDtRQUVELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNPLG9EQUFnQyxHQUF4QyxVQUF5QyxJQUFTO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLFFBQVE7UUFDUixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUUzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQ3hCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ3hCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQzNCLENBQUMsQ0FBQztpQkFDTjthQUNKO1NBQ0o7UUFFRCxVQUFVO1FBQ1YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsS0FBYyxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZLEVBQUU7Z0JBQXZCLElBQUksQ0FBQyxTQUFBO2dCQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDbEIsRUFBRSxDQUFDLEVBQUUsQ0FDRCxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDeEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQzNCLENBQ0osQ0FBQztpQkFDTDthQUNKO1NBQ0o7UUFFRCxFQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNPLHFDQUFpQixHQUF6QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTztRQUV2QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUF0ZEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxREFDYTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO21EQUNXO0lBR2pDO1FBREMsUUFBUTtnREFDYztJQUd2QjtRQURDLFFBQVE7c0RBQ3NCO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7bURBQ1c7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQWpCVCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMmQ3QjtJQUFELGdCQUFDO0NBM2RELEFBMmRDLENBM2RzQyxFQUFFLENBQUMsU0FBUyxHQTJkbEQ7a0JBM2RvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdDaGVjayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gICAgdGFyZ2V0R3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXHJcbiAgICBkcmF3R3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRocmVzaG9sZDogbnVtYmVyID0gMjU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjb21wbGV0ZVBlcmNlbnQ6IG51bWJlciA9IDAuOTg7XHJcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXHJcbiAgICBnbG93R3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpZ2h0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXRQb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBpc0RyYXdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbWF0Y2hlZENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBtYXRyaXhQb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgbG9jYWxQb2ludHMgPSBbXVxyXG4gICAgY291bnRGYWlsID0gMFxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICB0YXJnZXRQb2ludCA9IGNjLnYyKDAsIDApXHJcbiAgICBpc1N0YXJ0UG9pbnQgPSBudWxsXHJcbiAgICBpc0VuZFBvaW50ID0gbnVsbFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5kcmF3U2FtcGxlU2hhcGUoKTtcclxuICAgICAgICAvLyB0aGlzLmdlbmVyYXRlVGFyZ2V0UG9pbnRzKClcclxuICAgIH1cclxuICAgIGxvYWRMZXZlbChkYXRhKSB7XHJcbiAgICAgICAgLy8gbGV0IHBvaW50cyA9IGRhdGEuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikucG9pbnRzXHJcbiAgICAgICAgbGV0IHBvaW50cyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNoaWxkcmVuWzBdLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gZGF0YS5jaGlsZHJlblswXS5jaGlsZHJlbltpXS5wb3NpdGlvblxyXG4gICAgICAgICAgICBwb3MgPSBkYXRhLmNoaWxkcmVuWzBdLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvcylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXJnZXRQb2ludHMgPSBwb2ludHNcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRhcmdldFBvaW50cylcclxuICAgICAgICAvLyB0aGlzLmxvY2FsUG9pbnRzID0gW11cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqIFRPVUNIIFNUQVJUICovXHJcbiAgICBwcml2YXRlIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRHJhd2luZykgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWF0Y2hlZENvdW50ID0gMDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0XCIpXHJcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmxpbmVXaWR0aCA9IDI4O1xyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwKTtcclxuICAgICAgICAvLyB0aGlzLmRyYXdHcmFwaGljcy5tb3ZlVG8ocG9zLngsIHBvcy55KTtcclxuICAgICAgICB0aGlzLmlzU3RhcnRQb2ludCA9IG51bGxcclxuICAgICAgICBpZiAodGhpcy5pc05lYXJQYXRoKHBvcykpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubW92ZVRvKHRoaXMudGFyZ2V0UG9pbnQueCwgdGhpcy50YXJnZXRQb2ludC55KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5kcmF3R3JhcGhpY3MubW92ZVRvKHBvczIueCwgcG9zMi55KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogVE9VQ0ggTU9WRSAqL1xyXG4gICAgaXNUYXJnZXRQb2ludCA9IG51bGxcclxuICAgIC8vIHByaXZhdGUgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIC8vICAgICBpZiAoIXRoaXMuaXNEcmF3aW5nKSByZXR1cm47XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuaGFuZC5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdhbWVQbGF5LmhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgLy8gICAgIC8vIFbhur1cclxuICAgIC8vICAgICAvLyBLaeG7g20gdHJhXHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLmlzTmVhclBhdGgocG9zKSkge1xyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5jbGVhcigpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5saW5lV2lkdGggPSAyODtcclxuICAgIC8vICAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigwLCAyNTUsIDApO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5tb3ZlVG8odGhpcy50YXJnZXRQb2ludHNbdGhpcy5pc1N0YXJ0UG9pbnRdLngsIHRoaXMudGFyZ2V0UG9pbnRzW3RoaXMuaXNTdGFydFBvaW50XS55KTtcclxuXHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDaGVjay5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLnRhcmdldFBvaW50c1t0aGlzLmFyckNoZWNrW2ldXVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubGluZVRvKHBvczIueCwgcG9zMi55KTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5zdHJva2UoKTtcclxuXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnN0IHVuaXF1ZVNldCA9IG5ldyBTZXQodGhpcy5hcnJDaGVjayk7XHJcbiAgICAvLyAgICAgY29uc3QgdW5pcXVlQXJyYXkyID0gQXJyYXkuZnJvbSh1bmlxdWVTZXQpO1xyXG4gICAgLy8gICAgIGNvbnN0IHBlcmNlbnQgPSB1bmlxdWVBcnJheTIubGVuZ3RoIC8gdGhpcy50YXJnZXRQb2ludHMubGVuZ3RoO1xyXG4gICAgLy8gICAgIC8vIHRoaXMuYXJyQ2hlY2sgPSBbXVxyXG5cclxuICAgIC8vICAgICBpZiAocGVyY2VudCA+PSB0aGlzLmNvbXBsZXRlUGVyY2VudCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLndpbigpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIGlzRGVsYXkgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0RyYXdpbmcgfHwgdGhpcy5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5oYW5kLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc05lYXJQYXRoKHBvcykpIHtcclxuICAgICAgICAgICAgLy8gbGV0IG1pbiA9IDEwMDBcclxuICAgICAgICAgICAgLy8gbGV0IGluZGV4ID0gMFxyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFyZ2V0UG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHBvcy5zdWIodGhpcy50YXJnZXRQb2ludHNbaV0pLm1hZygpIDw9IG1pbikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIG1pbiA9IHBvcy5zdWIodGhpcy50YXJnZXRQb2ludHNbaV0pLm1hZygpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaW5kZXggPSBpXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKG1pbiAhPSAxMDAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm1hdGNoZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gaWYgKGxvY2FsSWQgLSBpID09IDIpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vICAgICB0aGlzLmFyckNoZWNrLnB1c2goaSArIDEpXHJcbiAgICAgICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBlbHNlIGlmIChpIC0gbG9jYWxJZCA9PSAyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgdGhpcy5hcnJDaGVjay5wdXNoKGkgLSAxKVxyXG5cclxuICAgICAgICAgICAgLy8gICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuYXJyQ2hlY2sucHVzaChpbmRleClcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IHBvcyA9IHRoaXMudGFyZ2V0UG9pbnRzW2ldXHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLnRhcmdldFBvaW50ID0gcG9zXHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVkcmF3TGluZSgpOyAvLyB24bq9IGzhuqFpIHRvw6BuIGLhu5kgMSBs4bqnbiBkdXkgbmjhuqV0XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaXF1ZVNldCA9IG5ldyBTZXQodGhpcy5hcnJDaGVjayk7XHJcbiAgICAgICAgY29uc3QgdW5pcXVlQXJyYXkyID0gQXJyYXkuZnJvbSh1bmlxdWVTZXQpO1xyXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSB1bmlxdWVBcnJheTIubGVuZ3RoIC8gdGhpcy50YXJnZXRQb2ludHMubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAocGVyY2VudCA+PSB0aGlzLmNvbXBsZXRlUGVyY2VudCkge1xyXG4gICAgICAgICAgICB0aGlzLndpbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBUT1VDSCBFTkQgKi9cclxuICAgIHByaXZhdGUgb25Ub3VjaEVuZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmF3aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCB1bmlxdWVTZXQgPSBuZXcgU2V0KHRoaXMuYXJyQ2hlY2spO1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUFycmF5MiA9IEFycmF5LmZyb20odW5pcXVlU2V0KTtcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gdW5pcXVlQXJyYXkyLmxlbmd0aCAvIHRoaXMudGFyZ2V0UG9pbnRzLmxlbmd0aDtcclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5hcnJDaGVja1xyXG4gICAgICAgIHRoaXMuYXJyQ2hlY2sgPSBbXVxyXG4gICAgICAgIHRoaXMubGlnaHROb2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHBlcmNlbnQgPj0gdGhpcy5jb21wbGV0ZVBlcmNlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy53aW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhaWwoYXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXRjaGVkQ291bnQgPSAwXHJcblxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWRyYXdMaW5lKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubGluZVdpZHRoID0gNDA7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigwLCAyNTUsIDApO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5hcnJDaGVjay5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuYXJyQ2hlY2tbaSAtIDFdICsgMSA9PSB0aGlzLmFyckNoZWNrW2kgKyAyXSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hcnJDaGVjay5zcGxpY2UoaSwgMilcclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2xvd0dyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgLy8gdGhpcy5nbG93R3JhcGhpY3MubGluZVdpZHRoID0gNDA7XHJcbiAgICAgICAgLy8gdGhpcy5nbG93R3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigxMDAsIDI1NSwgMjU1LCAxMjApOyAvLyBt4budXHJcbiAgICAgICAgaWYgKHRoaXMuYXJyQ2hlY2subGVuZ3RoIDw9IDEpIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLnRhcmdldFBvaW50c1t0aGlzLmFyckNoZWNrWzBdXTtcclxuICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmFyckNoZWNrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwID0gdGhpcy50YXJnZXRQb2ludHNbdGhpcy5hcnJDaGVja1tpXV07XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmxpbmVUbyhwLngsIHAueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTW92aW5nTGlnaHQoKTtcclxuICAgIH1cclxuICAgIGFyckNoZWNrID0gW11cclxuICAgIC8qKiBLSeG7gk0gVFJBIEPDkyBH4bqmTiDEkMav4bucTkcgTeG6qlUgS0jDlE5HICovXHJcbiAgICBwcml2YXRlIGlzTmVhclBhdGgocDogY2MuVmVjMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXJnZXRQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChwLnN1Yih0aGlzLnRhcmdldFBvaW50c1tpXSkubWFnKCkgPD0gdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyckNoZWNrLmluY2x1ZGVzKGkpICYmIGkgIT0gdGhpcy5hcnJDaGVja1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyckNoZWNrW3RoaXMuYXJyQ2hlY2subGVuZ3RoIC0gMV0gPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy50YXJnZXRQb2ludHNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludCA9IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRydW5nIGRpZW1cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmFyckNoZWNrW3RoaXMuYXJyQ2hlY2subGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpID09IGxhc3RJbmRleCAtIDEpIHx8IChpID09IGxhc3RJbmRleCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cCA9IHRoaXMudGFyZ2V0UG9pbnRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyQ2hlY2sucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnQgPSB0cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0UG9zID0gdGhpcy50YXJnZXRQb2ludHNbaV1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxJZCA9IHRoaXMuYXJyQ2hlY2tbdGhpcy5hcnJDaGVjay5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyckNoZWNrLmxlbmd0aCA+IDAgJiYgbmV4dFBvcy5zdWIodGhpcy50YXJnZXRQb2ludHNbdGhpcy5hcnJDaGVja1t0aGlzLmFyckNoZWNrLmxlbmd0aCAtIDFdXSkubWFnKCkgPD0gMTIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbElkIC0gaSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckNoZWNrLnB1c2goaSArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSAtIGxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJDaGVjay5wdXNoKGkgLSAxKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsb2NhbElkIC0gaSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckNoZWNrLnB1c2goaSArIDIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgLSBsb2NhbElkID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyQ2hlY2sucHVzaChpIC0gMilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJDaGVjay5wdXNoKGkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3RhcnRQb2ludCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3RhcnRQb2ludCA9IGlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMudGFyZ2V0UG9pbnRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnQgPSBwb3NcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFyckNoZWNrLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbElkIC0gaSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckNoZWNrLnB1c2goaSArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSAtIGxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJDaGVjay5wdXNoKGkgLSAxKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckNoZWNrLnB1c2goaSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGFydFBvaW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdGFydFBvaW50ID0gaVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMudGFyZ2V0UG9pbnRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnQgPSBwb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gcHJpdmF0ZSBpc05lYXJQYXRoKHBvczogY2MuVmVjMik6IGJvb2xlYW4ge1xyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFyZ2V0UG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCB0cCA9IHRoaXMudGFyZ2V0UG9pbnRzW2ldO1xyXG5cclxuICAgIC8vICAgICAgICAgaWYgKHBvcy5zdWIodHApLm1hZygpIDw9IHRoaXMudGhyZXNob2xkKSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgLy8gTuG6v3UgY2jGsGEgY8OzIMSRaeG7g20g4oaSIGLhuq90IMSR4bqndVxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuYXJyQ2hlY2subGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5hcnJDaGVjay5wdXNoKGkpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaXNTdGFydFBvaW50ID0gaTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvaW50ID0gdHA7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGxhc3RJbmRleCA9IHRoaXMuYXJyQ2hlY2tbdGhpcy5hcnJDaGVjay5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBO4bq/dSB0csO5bmcgY3Xhu5FpIOKGkiBjaOG7iSBj4bqtcCBuaOG6rXQgduG6vVxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGkgPT09IGxhc3RJbmRleCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnQgPSB0cDtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAvLyDwn5SlIFBo4bqjaSDEkWkgxJHDum5nIHRo4bupIHThu7EgbGnhu4FuIGvhu4EgKGtow7RuZyBuaOG6o3kgxJFv4bqhbilcclxuICAgIC8vICAgICAgICAgICAgIGlmIChpID09PSBsYXN0SW5kZXggKyAxKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5hcnJDaGVjay5wdXNoKGkpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnQgPSB0cDtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAvLyDwn5SlIENobyBwaMOpcCDEkWkgbMO5aSDEkeG7gyB4w7NhIMSRxrDhu51uZyBwaMOtYSBzYXVcclxuICAgIC8vICAgICAgICAgICAgIGlmIChpID09PSBsYXN0SW5kZXggLSAxKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5hcnJDaGVjay5wb3AoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvaW50ID0gdHA7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgLy8g4p2MIMSQaSBzYWkgaMaw4bubbmcg4oaSIHJhIG5nb8OgaSDihpIgZmFpbFxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyB9XHJcbiAgICBjaGVjayh2YWx1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDaGVjay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gaSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKiBXSU4gKi9cclxuICAgIHByaXZhdGUgd2luKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIvCfjokgV0lOICEhIVwiKTtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmxpZ2h0Tm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNFbmRHYW1lID0gdHJ1ZVxyXG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpLndpbkdhbWUoKVxyXG4gICAgfVxyXG4gICAgY2xlYXJHYW1lKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmNsZWFyKClcclxuICAgICAgICB0aGlzLnRhcmdldEdyYXBoaWNzLmNsZWFyKClcclxuICAgIH1cclxuICAgIC8qKiBGQUlMICovXHJcbiAgICBpc0VuZEdhbWUgPSBmYWxzZVxyXG4gICAgaXNEZWxheURlbSA9IGZhbHNlXHJcblxyXG4gICAgcHJpdmF0ZSBmYWlsKGFycikge1xyXG4gICAgICAgIGNjLmxvZyhcIuKdjCBGQUlMICEhIVwiKTtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IHRydWVcclxuICAgICAgICAvLyB0aGlzLmRyYXdHcmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRFxyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubGluZVdpZHRoID0gMjg7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRURcclxuICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5tb3ZlVG8odGhpcy50YXJnZXRQb2ludHNbdGhpcy5pc1N0YXJ0UG9pbnRdLngsIHRoaXMudGFyZ2V0UG9pbnRzW3RoaXMuaXNTdGFydFBvaW50XS55KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLnRhcmdldFBvaW50c1thcnJbaV1dXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmxpbmVUbyhwb3MyLngsIHBvczIueSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmZhaWwoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsYXlEZW0gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RlbGF5RGVtID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmNvdW50RmFpbCsrXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVsYXlEZW0gPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kRmFpbCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50RmFpbCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubmV4dExldmVsKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRHJhd2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDaGVjayA9IFtdXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8qKiBMb2FkIG91dGxpbmUgdOG7qyBKU09OICovXHJcbiAgICBwdWJsaWMgbG9hZE91dGxpbmVGcm9tSlNPTihkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBnID0gdGhpcy50YXJnZXRHcmFwaGljcztcclxuICAgICAgICBnLmNsZWFyKCk7XHJcbiAgICAgICAgZy5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICBnLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMTgwLCAxODAsIDE4MCk7XHJcblxyXG4gICAgICAgIC8vIC0tLSBW4bq9IMSRxrDhu51uZyB0aOG6s25nIC0tLVxyXG4gICAgICAgIGlmIChkYXRhLmxpbmVzICYmIGRhdGEubGluZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBnLm1vdmVUbyhkYXRhLmxpbmVzWzBdLngsIGRhdGEubGluZXNbMF0ueSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF0YS5saW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZy5saW5lVG8oZGF0YS5saW5lc1tpXS54LCBkYXRhLmxpbmVzW2ldLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGcuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0gVuG6vSBjaXJjbGUgLS0tXHJcbiAgICAgICAgaWYgKGRhdGEuY2lyY2xlcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjIG9mIGRhdGEuY2lyY2xlcykge1xyXG4gICAgICAgICAgICAgICAgZy5jaXJjbGUoYy5jeCwgYy5jeSwgYy5yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2F1IGtoaSB24bq9IOKGkiBnZW5lcmF0ZSBs4bqhaSDEkWnhu4NtIGPhuqduIGtp4buDbSB0cmFcclxuICAgICAgICB0aGlzLmdlbmVyYXRlVGFyZ2V0UG9pbnRzRnJvbUdyYXBoaWNzKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVRhcmdldFBvaW50c0Zyb21HcmFwaGljcyhkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnRhcmdldFBvaW50cyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBMaW5lc1xyXG4gICAgICAgIGlmIChkYXRhLmxpbmVzICYmIGRhdGEubGluZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGluZXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcDEgPSBkYXRhLmxpbmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHAyID0gZGF0YS5saW5lc1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPD0gMTsgdCArPSAwLjAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChjYy52MihcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDEueCArIChwMi54IC0gcDEueCkgKiB0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwMS55ICsgKHAyLnkgLSBwMS55KSAqIHRcclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2lyY2xlc1xyXG4gICAgICAgIGlmIChkYXRhLmNpcmNsZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyBvZiBkYXRhLmNpcmNsZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDw9IE1hdGguUEkgKiAyOyBhICs9IDAuMDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFBvaW50cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy52MihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuY3ggKyBNYXRoLmNvcyhhKSAqIGMucixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuY3kgKyBNYXRoLnNpbihhKSAqIGMuclxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MubG9nKFwiVG90YWwgdGFyZ2V0IHBvaW50czpcIiwgdGhpcy50YXJnZXRQb2ludHMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlTW92aW5nTGlnaHQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpZ2h0Tm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmFyckNoZWNrLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbGFzdEluZGV4ID0gdGhpcy5hcnJDaGVja1t0aGlzLmFyckNoZWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGxldCBwID0gdGhpcy50YXJnZXRQb2ludHNbbGFzdEluZGV4XTtcclxuXHJcbiAgICAgICAgdGhpcy5saWdodE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpZ2h0Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50XHJcbiAgICAgICAgdGhpcy5saWdodE5vZGUuc2NhbGUgPSAwLjJcclxuICAgICAgICB0aGlzLmxpZ2h0Tm9kZS5zZXRQb3NpdGlvbihwKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saWdodE5vZGUpIHJldHVybjtcclxuICAgICAgICBsZXQgcyA9IDEgKyBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMSkgKiAwLjE7XHJcbiAgICAgICAgdGhpcy5saWdodE5vZGUuc2NhbGUgPSBzO1xyXG4gICAgfVxyXG5cclxufSJdfQ==