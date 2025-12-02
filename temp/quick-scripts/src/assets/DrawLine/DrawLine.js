"use strict";
cc._RF.push(module, 'b8433FmB7dATYGqk42rNFEs', 'DrawLine');
// DrawLine/DrawLine.ts

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
var DrawLine = /** @class */ (function (_super) {
    __extends(DrawLine, _super);
    function DrawLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.g = null;
        _this.points = [];
        _this.drawing = false;
        return _this;
    }
    DrawLine.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onEnd, this);
    };
    DrawLine.prototype.onStart = function (event) {
        var p = this.node.convertToNodeSpaceAR(event.getLocation());
        this.g.clear();
        this.g.moveTo(p.x, p.y);
        this.points = [p];
        this.drawing = true;
    };
    DrawLine.prototype.onMove = function (event) {
        if (!this.drawing)
            return;
        var p = this.node.convertToNodeSpaceAR(event.getLocation());
        this.points.push(p);
        this.g.lineTo(p.x, p.y);
        this.g.stroke();
    };
    DrawLine.prototype.onEnd = function (event) {
        this.drawing = false;
        this.node.emit("DRAW_END", this.points);
    };
    __decorate([
        property(cc.Graphics)
    ], DrawLine.prototype, "g", void 0);
    DrawLine = __decorate([
        ccclass
    ], DrawLine);
    return DrawLine;
}(cc.Component));
exports.default = DrawLine;

cc._RF.pop();