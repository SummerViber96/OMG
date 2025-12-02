"use strict";
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