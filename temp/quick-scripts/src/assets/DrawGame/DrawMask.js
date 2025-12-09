"use strict";
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