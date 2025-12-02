
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/DrawLine/LevelOutline.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e23aLfXKVEP5w4yoKW/ELJ', 'LevelOutline');
// DrawLine/LevelOutline.ts

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
var LevelOutline = /** @class */ (function (_super) {
    __extends(LevelOutline, _super);
    function LevelOutline() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.poly = null;
        _this.isReady = false;
        return _this;
    }
    LevelOutline.prototype.onLoad = function () {
        this.generateCollider();
    };
    LevelOutline.prototype.generateCollider = function () {
        var sf = this.sprite.spriteFrame;
        if (!sf)
            return;
        // Lấy ảnh của SpriteFrame
        var tex = sf.getTexture();
        var img = tex.getHtmlElementObj();
        // Tạo canvas tạm để đọc pixel
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var w = canvas.width;
        var h = canvas.height;
        // Chúng ta chỉ tìm điểm outline (pixel alpha > 20)
        var outlinePoints = [];
        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                var id = (y * w + x) * 4;
                var alpha = imgData.data[id + 3];
                if (alpha > 50) {
                    outlinePoints.push(new cc.Vec2(x - w / 2, h / 2 - y));
                }
            }
        }
        // Đơn giản hóa polygon (Ramer–Douglas–Peucker)
        var simplePts = this.simplifyPolygon(outlinePoints, 2);
        this.poly.points = simplePts;
        this.isReady = true;
    };
    LevelOutline.prototype.simplifyPolygon = function (points, tolerance) {
        // Simplify khá nhẹ
        if (points.length < 3)
            return points;
        var out = [];
        var last = points[0];
        out.push(last);
        for (var i = 1; i < points.length; i++) {
            if (points[i].sub(last).mag() > tolerance) {
                last = points[i];
                out.push(last);
            }
        }
        return out;
    };
    /** Kiểm tra toàn bộ đường vẽ có nằm trong outline không */
    LevelOutline.prototype.isDrawCorrect = function (points) {
        if (!this.poly || this.poly.points.length < 3)
            return false;
        var poly = this.poly.points;
        for (var i = 0; i < points.length; i++) {
            if (!this.pointInPoly(points[i], poly)) {
                return false;
            }
        }
        return true;
    };
    LevelOutline.prototype.pointInPoly = function (pt, poly) {
        var inside = false;
        for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
            var xi = poly[i].x, yi = poly[i].y;
            var xj = poly[j].x, yj = poly[j].y;
            var intersect = ((yi > pt.y) !== (yj > pt.y)) &&
                (pt.x < (xj - xi) * (pt.y - yi) / (yj - yi + 0.00001) + xi);
            if (intersect)
                inside = !inside;
        }
        return inside;
    };
    __decorate([
        property(cc.Sprite)
    ], LevelOutline.prototype, "sprite", void 0);
    __decorate([
        property(cc.PolygonCollider)
    ], LevelOutline.prototype, "poly", void 0);
    LevelOutline = __decorate([
        ccclass
    ], LevelOutline);
    return LevelOutline;
}(cc.Component));
exports.default = LevelOutline;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRHJhd0xpbmVcXExldmVsT3V0bGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXVHQztRQXBHRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLFVBQUksR0FBdUIsSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBK0Y1QixDQUFDO0lBN0ZHLDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDakMsSUFBSSxDQUFDLEVBQUU7WUFBRSxPQUFPO1FBRWhCLDBCQUEwQjtRQUMxQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixFQUFzQixDQUFDO1FBRXRELDhCQUE4QjtRQUM5QixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFFM0IsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekIsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FB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OiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbE91dGxpbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlBvbHlnb25Db2xsaWRlcilcclxuICAgIHBvbHk6IGNjLlBvbHlnb25Db2xsaWRlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc1JlYWR5ID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDb2xsaWRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQ29sbGlkZXIoKSB7XHJcbiAgICAgICAgbGV0IHNmID0gdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgaWYgKCFzZikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBM4bqleSDhuqNuaCBj4bunYSBTcHJpdGVGcmFtZVxyXG4gICAgICAgIGxldCB0ZXggPSBzZi5nZXRUZXh0dXJlKCk7XHJcbiAgICAgICAgbGV0IGltZyA9IHRleC5nZXRIdG1sRWxlbWVudE9iaigpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIFThuqFvIGNhbnZhcyB04bqhbSDEkeG7gyDEkeG7jWMgcGl4ZWxcclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcclxuXHJcbiAgICAgICAgbGV0IGltZ0RhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgbGV0IHcgPSBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgbGV0IGggPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBDaMO6bmcgdGEgY2jhu4kgdMOsbSDEkWnhu4NtIG91dGxpbmUgKHBpeGVsIGFscGhhID4gMjApXHJcbiAgICAgICAgbGV0IG91dGxpbmVQb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpZCA9ICh5ICogdyArIHgpICogNDtcclxuICAgICAgICAgICAgICAgIGxldCBhbHBoYSA9IGltZ0RhdGEuZGF0YVtpZCArIDNdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbHBoYSA+IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZVBvaW50cy5wdXNoKG5ldyBjYy5WZWMyKHggLSB3IC8gMiwgaCAvIDIgLSB5KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIMSQxqFuIGdp4bqjbiBow7NhIHBvbHlnb24gKFJhbWVy4oCTRG91Z2xhc+KAk1BldWNrZXIpXHJcbiAgICAgICAgbGV0IHNpbXBsZVB0cyA9IHRoaXMuc2ltcGxpZnlQb2x5Z29uKG91dGxpbmVQb2ludHMsIDIpO1xyXG5cclxuICAgICAgICB0aGlzLnBvbHkucG9pbnRzID0gc2ltcGxlUHRzO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNpbXBsaWZ5UG9seWdvbihwb2ludHM6IGNjLlZlYzJbXSwgdG9sZXJhbmNlOiBudW1iZXIpOiBjYy5WZWMyW10ge1xyXG4gICAgICAgIC8vIFNpbXBsaWZ5IGtow6EgbmjhurlcclxuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDMpIHJldHVybiBwb2ludHM7XHJcblxyXG4gICAgICAgIGxldCBvdXQ6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBsYXN0ID0gcG9pbnRzWzBdO1xyXG4gICAgICAgIG91dC5wdXNoKGxhc3QpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocG9pbnRzW2ldLnN1YihsYXN0KS5tYWcoKSA+IHRvbGVyYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgbGFzdCA9IHBvaW50c1tpXTtcclxuICAgICAgICAgICAgICAgIG91dC5wdXNoKGxhc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEtp4buDbSB0cmEgdG/DoG4gYuG7mSDEkcaw4budbmcgduG6vSBjw7MgbuG6sW0gdHJvbmcgb3V0bGluZSBraMO0bmcgKi9cclxuICAgIHB1YmxpYyBpc0RyYXdDb3JyZWN0KHBvaW50czogY2MuVmVjMltdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBvbHkgfHwgdGhpcy5wb2x5LnBvaW50cy5sZW5ndGggPCAzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBwb2x5ID0gdGhpcy5wb2x5LnBvaW50cztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvaW50SW5Qb2x5KHBvaW50c1tpXSwgcG9seSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHBvaW50SW5Qb2x5KHB0OiBjYy5WZWMyLCBwb2x5OiBjYy5WZWMyW10pOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgaW5zaWRlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcG9seS5sZW5ndGggLSAxOyBpIDwgcG9seS5sZW5ndGg7IGogPSBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHhpID0gcG9seVtpXS54LCB5aSA9IHBvbHlbaV0ueTtcclxuICAgICAgICAgICAgbGV0IHhqID0gcG9seVtqXS54LCB5aiA9IHBvbHlbal0ueTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbnRlcnNlY3QgPSAoKHlpID4gcHQueSkgIT09ICh5aiA+IHB0LnkpKSAmJlxyXG4gICAgICAgICAgICAgICAgKHB0LnggPCAoeGogLSB4aSkgKiAocHQueSAtIHlpKSAvICh5aiAtIHlpICsgMC4wMDAwMSkgKyB4aSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW50ZXJzZWN0KSBpbnNpZGUgPSAhaW5zaWRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc2lkZTtcclxuICAgIH1cclxufSJdfQ==