
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/DrawGame/DrawMask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f7663JjNdMq4htvs9Mos3X', 'DrawMask');
// DrawGame/DrawMask.ts

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
var MAX_DIST = 80;
var DrawMask = /** @class */ (function (_super) {
    __extends(DrawMask, _super);
    function DrawMask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drawArea = null; // Node chứa Mask và Graphics
        _this.drawer = null; // GraphicsMaskDrawer
        _this.targetPoints = []; // Các điểm theo thứ tự outline
        _this.listLevel = [];
        _this.index = 0;
        _this.drawing = false;
        return _this;
    }
    DrawMask.prototype.onLoad = function () {
        this.drawer.lineWidth = 40;
        this.drawer.lineCap = cc.Graphics.LineCap.ROUND;
        this.drawer.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.drawArea.on(cc.Node.EventType.TOUCH_START, this.onStart, this);
        this.drawArea.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.drawArea.on(cc.Node.EventType.TOUCH_END, this.onEnd, this);
        this.drawer.fillColor = cc.Color.WHITE;
        this.drawer.lineCap = cc.Graphics.LineCap.ROUND;
        var data = this.listLevel[0].children[0];
        for (var i = 0; i < data.childrenCount; i++) {
            var pos = data.children[i].position;
            pos = data.convertToWorldSpaceAR(pos);
            pos = this.drawArea.convertToNodeSpaceAR(pos);
            this.targetPoints.push(cc.v2(pos.x, pos.y));
        }
    };
    DrawMask.prototype.getPos = function (ev) {
        return this.drawArea.convertToNodeSpaceAR(ev.getLocation());
    };
    DrawMask.prototype.onStart = function (ev) {
        this.index = 0;
        this.drawer.clear();
        var pos = this.getPos(ev.getTouches()[0]);
        if (!this.isValidG(pos))
            return this.fail();
        this.drawer.moveTo(pos.x, pos.y);
        this.drawing = true;
    };
    DrawMask.prototype.onMove = function (ev) {
        console.log("move");
        if (!this.drawing)
            return;
        var pos = this.getPos(ev.getTouches()[0]);
        if (this.isValidG(pos)) {
            this.drawer.lineTo(pos.x, pos.y);
            this.drawer.stroke();
            console.log("ve");
            this.index++;
            if (this.index >= this.targetPoints.length - 2)
                this.win();
        }
        //  else this.fail();
    };
    DrawMask.prototype.onEnd = function () {
        if (this.index < this.targetPoints.length - 2)
            this.fail();
    };
    DrawMask.prototype.isValidG = function (pos) {
        var target = this.targetPoints[this.index];
        return pos.sub(target).mag() < MAX_DIST;
    };
    DrawMask.prototype.fail = function () {
        this.drawing = false;
        cc.log("FAIL!");
        // TODO: Reset nếu muốn
    };
    DrawMask.prototype.win = function () {
        this.drawing = false;
        cc.log("WIN!!");
    };
    __decorate([
        property(cc.Node)
    ], DrawMask.prototype, "drawArea", void 0);
    __decorate([
        property(cc.Graphics)
    ], DrawMask.prototype, "drawer", void 0);
    __decorate([
        property([cc.Vec2])
    ], DrawMask.prototype, "targetPoints", void 0);
    __decorate([
        property(cc.Node)
    ], DrawMask.prototype, "listLevel", void 0);
    DrawMask = __decorate([
        ccclass
    ], DrawMask);
    return DrawMask;
}(cc.Component));
exports.default = DrawMask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRHJhd0dhbWVcXERyYXdNYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUdwQjtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTRGQztRQXpGRyxjQUFRLEdBQVksSUFBSSxDQUFDLENBQUMsNkJBQTZCO1FBR3ZELFlBQU0sR0FBZ0IsSUFBSSxDQUFDLENBQUMscUJBQXFCO1FBR2pELGtCQUFZLEdBQWMsRUFBRSxDQUFDLENBQUMsK0JBQStCO1FBRTdELGVBQVMsR0FBYyxFQUFFLENBQUE7UUFFakIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixhQUFPLEdBQVksS0FBSyxDQUFDOztJQThFckMsQ0FBQztJQTVFRyx5QkFBTSxHQUFOO1FBSUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUs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LElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsR0FBWTtRQUNqQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQzVDLENBQUM7SUFFRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQix1QkFBdUI7SUFDM0IsQ0FBQztJQUVELHNCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUF4RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzRDQUNLO0lBRzNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2tEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFYUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNEY1QjtJQUFELGVBQUM7Q0E1RkQsQUE0RkMsQ0E1RnFDLEVBQUUsQ0FBQyxTQUFTLEdBNEZqRDtrQkE1Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCBNQVhfRElTVCA9IDgwO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd01hc2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZHJhd0FyZWE6IGNjLk5vZGUgPSBudWxsOyAvLyBOb2RlIGNo4bupYSBNYXNrIHbDoCBHcmFwaGljc1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIGRyYXdlcjogY2MuR3JhcGhpY3MgPSBudWxsOyAvLyBHcmFwaGljc01hc2tEcmF3ZXJcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlZlYzJdKVxyXG4gICAgdGFyZ2V0UG9pbnRzOiBjYy5WZWMyW10gPSBbXTsgLy8gQ8OhYyDEkWnhu4NtIHRoZW8gdGjhu6kgdOG7sSBvdXRsaW5lXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RMZXZlbDogY2MuTm9kZVtdID0gW11cclxuXHJcbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkcmF3aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuZHJhd2VyLmxpbmVXaWR0aCA9IDQwO1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0FyZWEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25TdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5kcmF3QXJlYS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5kcmF3QXJlYS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25FbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLmZpbGxDb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5saXN0TGV2ZWxbMF0uY2hpbGRyZW5bMF1cclxuICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gZGF0YS5jaGlsZHJlbltpXS5wb3NpdGlvblxyXG4gICAgICAgICAgICBwb3MgPSBkYXRhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuZHJhd0FyZWEuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFBvaW50cy5wdXNoKGNjLnYyKHBvcy54LCBwb3MueSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBvcyhldjogY2MuVG91Y2gpOiBjYy5WZWMyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kcmF3QXJlYS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldi5nZXRMb2NhdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN0YXJ0KGV2OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5nZXRQb3MoZXYuZ2V0VG91Y2hlcygpWzBdKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEcocG9zKSkgcmV0dXJuIHRoaXMuZmFpbCgpO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdlci5tb3ZlVG8ocG9zLngsIHBvcy55KTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW92ZShldjogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW92ZVwiKVxyXG4gICAgICAgIGlmICghdGhpcy5kcmF3aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0UG9zKGV2LmdldFRvdWNoZXMoKVswXSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRHKHBvcykpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3ZXIubGluZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyLnN0cm9rZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZlXCIpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMudGFyZ2V0UG9pbnRzLmxlbmd0aCAtIDIpIHRoaXMud2luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vICBlbHNlIHRoaXMuZmFpbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50YXJnZXRQb2ludHMubGVuZ3RoIC0gMikgdGhpcy5mYWlsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZEcocG9zOiBjYy5WZWMyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXRQb2ludHNbdGhpcy5pbmRleF07XHJcbiAgICAgICAgcmV0dXJuIHBvcy5zdWIodGFyZ2V0KS5tYWcoKSA8IE1BWF9ESVNUO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWwoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZmFsc2U7XHJcbiAgICAgICAgY2MubG9nKFwiRkFJTCFcIik7XHJcbiAgICAgICAgLy8gVE9ETzogUmVzZXQgbuG6v3UgbXXhu5FuXHJcbiAgICB9XHJcblxyXG4gICAgd2luKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmxvZyhcIldJTiEhXCIpO1xyXG4gICAgfVxyXG59Il19