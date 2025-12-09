"use strict";
cc._RF.push(module, '4200388gEZCmowxedZX7vWH', 'DrawToReveal');
// DrawLine/DrawToReveal.ts

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
var DrawController = /** @class */ (function (_super) {
    __extends(DrawController, _super);
    function DrawController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drawNode = null; // chứa Graphics
        _this.spark = null; // vệt sáng sprite nhỏ
        _this.tolerance = 20; // khoảng cho phép lệch khỏi đường mẫu
        _this.level1 = null;
        _this.samplePoints = [];
        _this.isDrawing = false;
        _this.lastValidPoint = null;
        return _this;
    }
    DrawController.prototype.onLoad = function () {
        this.gfx = this.drawNode.children[0].getComponent(cc.Graphics);
        this.gfx.lineWidth = 20;
        this.gfx.strokeColor = cc.Color.GREEN;
        // TODO: load path từ JSON hoặc polygon
        this.samplePoints = this.getSamplePath();
        this.spark.opacity = 0;
        var data = this.level1.children[0];
        for (var i = 0; i < data.childrenCount; i++) {
            var pos = data.children[i].position;
            pos = data.convertToWorldSpaceAR(pos);
            pos = this.drawNode.convertToNodeSpaceAR(pos);
            this.samplePoints.push(cc.v2(pos.x, pos.y));
        }
    };
    DrawController.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    DrawController.prototype.onTouchStart = function (event) {
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        if (!this.checkOnPath(pos))
            return;
        this.isDrawing = true;
        this.lastValidPoint = pos;
        this.gfx.moveTo(pos.x, pos.y);
        this.showSpark(pos);
    };
    DrawController.prototype.onTouchMove = function (event) {
        if (!this.isDrawing)
            return;
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        if (!this.checkOnPath(pos)) {
            this.fail();
            return;
        }
        this.gfx.lineTo(pos.x, pos.y);
        this.gfx.stroke();
        this.lastValidPoint = pos;
        this.moveSpark(pos);
    };
    DrawController.prototype.onTouchEnd = function () {
        this.isDrawing = false;
        this.spark.opacity = 0;
    };
    // ---- CHECK NEAR PATH ----
    DrawController.prototype.checkOnPath = function (pos) {
        var nearest = Infinity;
        for (var _i = 0, _a = this.samplePoints; _i < _a.length; _i++) {
            var p = _a[_i];
            var d = pos.sub(p).mag();
            if (d < nearest)
                nearest = d;
            if (d < this.tolerance)
                return true;
        }
        return false;
    };
    // ---- SPARK EFFECT (GLOW) ----
    DrawController.prototype.showSpark = function (pos) {
        this.spark.opacity = 255;
        this.spark.stopAllActions();
        this.spark.position = cc.v3(pos.x, pos.y);
        this.spark.scale = 1;
        cc.tween(this.spark)
            .repeatForever(cc.tween().to(0.3, { scale: 1.5, opacity: 200 }).to(0.3, { scale: 1, opacity: 255 }))
            .start();
    };
    DrawController.prototype.moveSpark = function (pos) {
        this.spark.position = cc.v3(pos.x, pos.y);
    };
    DrawController.prototype.fail = function () {
        this.isDrawing = false;
        this.spark.opacity = 0;
        cc.log("FAIL!!!");
    };
    DrawController.prototype.getSamplePath = function () {
        // Ví dụ tạo 1 đường cong
        return [
            new cc.Vec2(-200, 0),
            new cc.Vec2(-100, 50),
            new cc.Vec2(0, 100),
            new cc.Vec2(100, 50),
            new cc.Vec2(200, 0)
        ];
    };
    __decorate([
        property(cc.Node)
    ], DrawController.prototype, "drawNode", void 0);
    __decorate([
        property(cc.Node)
    ], DrawController.prototype, "spark", void 0);
    __decorate([
        property(cc.Float)
    ], DrawController.prototype, "tolerance", void 0);
    __decorate([
        property(cc.Node)
    ], DrawController.prototype, "level1", void 0);
    DrawController = __decorate([
        ccclass
    ], DrawController);
    return DrawController;
}(cc.Component));
exports.default = DrawController;

cc._RF.pop();