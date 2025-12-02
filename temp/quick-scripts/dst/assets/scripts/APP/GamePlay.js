
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXdKQztRQXJKRyxrQkFBWSxHQUFnQixJQUFJLENBQUMsQ0FBTyxvQkFBb0I7UUFHNUQsb0JBQWMsR0FBZ0IsSUFBSSxDQUFDLENBQUssb0JBQW9CO1FBRzVELGVBQVMsR0FBVyxFQUFFLENBQUMsQ0FBaUIsMEJBQTBCO1FBR2xFLDZCQUF1QixHQUFXLElBQUksQ0FBQyxDQUFDLHNCQUFzQjtRQUc5RCxrQkFBWSxHQUFjLEVBQUUsQ0FBQyxDQUFXLHFCQUFxQjtRQUVyRCxlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGlCQUFXLEdBQWMsRUFBRSxDQUFDO1FBQzVCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDOztJQXFJckMsQ0FBQztJQW5JRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUks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Q0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2RDtRQUVELGlCQUFpQjtRQUNqQixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUVuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDbEIsRUFBRSxDQUFDLEVBQUUsQ0FDRCxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUMvQixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUNsQyxDQUNKLENBQUM7U0FDTDtJQUNMLENBQUM7SUFwSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzttREFDVztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3FEQUNhO0lBR25DO1FBREMsUUFBUTtnREFDYztJQUd2QjtRQURDLFFBQVE7OERBQzhCO0lBR3ZDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO21EQUNTO0lBZlosU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdKN0I7SUFBRCxnQkFBQztDQXhKRCxBQXdKQyxDQXhKc0MsRUFBRSxDQUFDLFNBQVMsR0F3SmxEO2tCQXhKb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3Q2hlY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIGRyYXdHcmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsOyAgICAgICAvLyBuw6l0IG5nxrDhu51pIGNoxqFpIHbhur1cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXHJcbiAgICB0YXJnZXRHcmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsOyAgICAgLy8gbsOpdCBt4bqrdSAobcOgdSB4w6FtKVxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGhyZXNob2xkOiBudW1iZXIgPSAyNTsgICAgICAgICAgICAgICAgIC8vIHBo4bqhbSB2aSBzYWkgc+G7kSBjaG8gcGjDqXBcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGNvbXBsZXRlUGVyY2VudFJlcXVpcmVkOiBudW1iZXIgPSAwLjg1OyAvLyBwaOG6o2kgaG/DoG4gdGjDoG5oIDg1JVxyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuVmVjMl0pXHJcbiAgICB0YXJnZXRQb2ludHM6IGNjLlZlYzJbXSA9IFtdOyAgICAgICAgICAgLy8gZGFuaCBzw6FjaCDEkWnhu4NtIG3huqt1XHJcblxyXG4gICAgcHJpdmF0ZSBpc0RyYXdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZHJhd25Qb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBtYXRjaGVkQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZUFuZENpcmNsZSgpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVUYXJnZXRQb2ludHMoKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENodXnhu4NuIHThu41hIMSR4buZIG3DoG4gaMOsbmgg4oaSIGxvY2FsIG5vZGVcclxuICAgIHByaXZhdGUgdG9Mb2NhbChwb3M6IGNjLlZlYzIpOiBjYy5WZWMyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWF0Y2hlZENvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmRyYXduUG9pbnRzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnRvTG9jYWwoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubGluZVdpZHRoID0gODtcclxuICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0dyYXBoaWNzLm1vdmVUbyhwLngsIHAueSk7XHJcbiAgICAgICAgdGhpcy5kcmF3blBvaW50cy5wdXNoKHApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRHJhd2luZykgcmV0dXJuO1xyXG5jb25zb2xlLmxvZyhcIm1vdmVcIilcclxuICAgICAgICBjb25zdCBwID0gdGhpcy50b0xvY2FsKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuZHJhd25Qb2ludHMucHVzaChwKTtcclxuXHJcbiAgICAgICAgLy8gVuG6vSBuw6l0XHJcbiAgICAgICAgdGhpcy5kcmF3R3JhcGhpY3MubGluZVRvKHAueCwgcC55KTtcclxuICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gS2nhu4NtIHRyYSB0aGVvIG3huqt1XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc05lYXJUYXJnZXQocCkpXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTmVhclRhcmdldChwKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhaWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEVuZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmF3aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNEcmF3aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLm1hdGNoZWRDb3VudCAvIHRoaXMudGFyZ2V0UG9pbnRzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKHBlcmNlbnQgPj0gdGhpcy5jb21wbGV0ZVBlcmNlbnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLndpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBLaeG7g20gdHJhIMSRaeG7g20gbmfGsOG7nWkgduG6vSBjw7MgbuG6sW0gZ+G6p24gxJHGsOG7nW5nIG3huqt1IGtow7RuZ1xyXG4gICAgcHJpdmF0ZSBpc05lYXJUYXJnZXQocDogY2MuVmVjMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXJnZXRQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdHAgPSB0aGlzLnRhcmdldFBvaW50c1tpXTtcclxuICAgICAgICAgICAgaWYgKHAuc3ViKHRwKS5tYWcoKSA8PSB0aGlzLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVkQ291bnQrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdpbigpIHtcclxuICAgICAgICBjYy5sb2coXCJXSU4hXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IGhp4buHdSDhu6luZyB3aW4gaG/hurdjIGxvYWQgbGV2ZWxcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZhaWwoKSB7XHJcbiAgICAgICAgY2MubG9nKFwiRkFJTCFcIik7XHJcbiAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRyYXdHcmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgIC8vIFRPRE86IGhp4buHdSDhu6luZyBmYWlsLCByZXNldCBsZXZlbFxyXG4gICAgfVxyXG4gICAgZHJhd1NxdWFyZUFuZENpcmNsZSgpIHtcclxuICAgICAgICBjb25zdCBnID0gdGhpcy50YXJnZXRHcmFwaGljcztcclxuICAgICAgICBnLmNsZWFyKCk7XHJcbiAgICAgICAgZy5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICBnLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMTgwLCAxODAsIDE4MCk7XHJcblxyXG4gICAgICAgIC8vIFbhur0gaMOsbmggdnXDtG5nXHJcbiAgICAgICAgZy5tb3ZlVG8oLTEwMCwgNTApO1xyXG4gICAgICAgIGcubGluZVRvKDEwMCwgNTApO1xyXG4gICAgICAgIGcubGluZVRvKDEwMCwgLTE1MCk7XHJcbiAgICAgICAgZy5saW5lVG8oLTEwMCwgLTE1MCk7XHJcbiAgICAgICAgZy5saW5lVG8oLTEwMCwgNTApO1xyXG5cclxuICAgICAgICAvLyBW4bq9IGjDrG5oIHRyw7JuIHBow61hIGTGsOG7m2lcclxuICAgICAgICBnLmNpcmNsZSgwLCAtMjAwLCAxMjApO1xyXG5cclxuICAgICAgICBnLnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVUYXJnZXRQb2ludHMoKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRQb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gLS0tIFNxdWFyZSAtLS1cclxuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8PSAxOyB0ICs9IDAuMDEpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChjYy52MigtMTAwICsgdCAqIDIwMCwgNTApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPD0gMTsgdCArPSAwLjAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnRzLnB1c2goY2MudjIoMTAwLCA1MCAtIHQgKiAyMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPD0gMTsgdCArPSAwLjAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnRzLnB1c2goY2MudjIoMTAwIC0gdCAqIDIwMCwgLTE1MCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8PSAxOyB0ICs9IDAuMDEpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChjYy52MigtMTAwLCAtMTUwICsgdCAqIDIwMCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gLS0tIENpcmNsZSAtLS1cclxuICAgICAgICBjb25zdCBjZW50ZXIgPSBjYy52MigwLCAtMjAwKTtcclxuICAgICAgICBjb25zdCByYWRpdXMgPSAxMjA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDw9IE1hdGguUEkgKiAyOyBhICs9IDAuMDUpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRQb2ludHMucHVzaChcclxuICAgICAgICAgICAgICAgIGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlci54ICsgTWF0aC5jb3MoYSkgKiByYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyLnkgKyBNYXRoLnNpbihhKSAqIHJhZGl1c1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==