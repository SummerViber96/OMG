
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/Scratch_ticket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8d19gq0JRDd79bbjASbLHt', 'Scratch_ticket');
// scripts/APP/Scratch_ticket.ts

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
var CALC_RECT_WIDTH = 40;
var CLEAR_LINE_WIDTH = 40;
var CC2_1 = require("./CC2");
var Scratch_ticket = /** @class */ (function (_super) {
    __extends(Scratch_ticket, _super);
    function Scratch_ticket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskNode = null;
        _this.camera = null;
        _this.ticketNode = null;
        _this.lineWidth = 0;
        _this.ham = null;
        _this.tutHam = null;
        _this.soundCao = null;
        _this.listBun = [];
        _this.anim = null;
        _this.listXaphong = [];
        _this.text = null;
        _this.egg = null;
        _this.progerss = 0;
        _this.gamePlay = null;
        _this.isDelaySound = false;
        _this.isIdCao = null;
        _this.isCountStep = 0;
        _this.calcDebugger = false; // 辅助开关，开启则会绘制划开涂层所属的小格子
        _this.tempDrawPoints = [];
        _this.polygonPointsList = [];
        return _this;
    }
    Scratch_ticket.prototype.onLoad = function () {
        // this.reset();
        this.gamePlay = cc.Canvas.instance.node.getComponent(CC2_1.default);
        // this.addEvent()
    };
    Scratch_ticket.prototype.addEvent = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    Scratch_ticket.prototype.beforeDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    Scratch_ticket.prototype.touchStartEvent = function (event) {
        var _this = this;
        var pos = event.getLocation();
        pos = this.camera.getScreenToWorldPoint(pos);
        var point = this.node.parent.convertToNodeSpaceAR(pos);
        // let isNew = this.clearMask(point);
        this.node.opacity = 255;
        this.tutHam.active = false;
        if (this.isIdCao) {
            cc.audioEngine.stop(this.isIdCao);
            this.isIdCao = cc.audioEngine.play(this.soundCao, false, 2);
            this.isDelaySound = true;
            this.scheduleOnce(function () {
                _this.isDelaySound = false;
            }, 0.2);
        }
        var pos2 = event.getLocation();
        pos2 = this.camera.getScreenToWorldPoint(pos2);
        var posHam = this.node.convertToNodeSpaceAR(pos2);
        this.node.position = posHam.add(cc.v3(0, -50));
        // this.gamePlay.handSwipe.active = false;
        // this.gamePlay.handSwipe2.active = false;
    };
    Scratch_ticket.prototype.touchMoveEvent = function (event) {
        var _this = this;
        var pos = event.getLocation();
        pos = this.camera.getScreenToWorldPoint(pos);
        var posHam = this.node.parent.convertToNodeSpaceAR(pos);
        this.node.position = posHam.add(cc.v3(0, -50));
        this.checkItem();
        if (!this.isDelaySound) {
            this.isDelaySound = true;
            cc.audioEngine.play(this.soundCao, false, 2);
            this.scheduleOnce(function () {
                _this.isDelaySound = false;
            }, 0.1);
        }
    };
    Scratch_ticket.prototype.checkItem = function () {
        for (var i = 0; i < this.listBun.length; i++) {
            // console.log(this.node.position.sub(pos).mag())
            if (this.listBun[i].active) {
                var pos = this.listBun[i].position;
                pos = this.listBun[i].parent.convertToWorldSpaceAR(pos);
                pos = this.node.parent.convertToNodeSpaceAR(pos);
                if (this.node.position.sub(pos).mag() < 50) {
                    this.listBun[i].active = false;
                    this.listXaphong[i].active = true;
                    this.checkEndStep();
                    return true;
                }
            }
        }
        return false;
    };
    Scratch_ticket.prototype.checkEndStep = function () {
        this.isCountStep++;
        console.log(this.isCountStep);
        if (this.isCountStep == 4) {
            this.endStep();
        }
        if (this.isCountStep == 2) {
            // this.anim.setAnimation(0, "Pet_Caring", true)
        }
        if (this.isCountStep == 3) {
            // this.text.string="Great!"
            this.anim.node.parent.position = cc.v3(49, -17);
            this.anim.setAnimation(0, "Pet_FurDrying", true);
        }
    };
    Scratch_ticket.prototype.endStep = function () {
        this.gamePlay.step3();
        var _loop_1 = function (child) {
            cc.tween(child).to(0.5, { opacity: 0 }).call(function () {
                child.active = false;
            }).start();
        };
        for (var _i = 0, _a = this.listXaphong; _i < _a.length; _i++) {
            var child = _a[_i];
            _loop_1(child);
        }
        this.node.active = false;
    };
    Scratch_ticket.prototype.touchEndEvent = function () {
        if (this.isIdCao) {
            cc.audioEngine.stop(this.isIdCao);
        }
        // this.tempDrawPoints = [];
        // this.calcProgress();
    };
    Scratch_ticket.prototype.calcProgress = function () {
        var _this = this;
        var hitItemCount = 0;
        var ctx = this.ticketNode.getComponent(cc.Graphics);
        this.polygonPointsList.forEach(function (item) {
            if (!item.isHit)
                return;
            hitItemCount += 1;
            if (!_this.calcDebugger)
                return;
            ctx.rect(item.rect.x, item.rect.y, item.rect.width, item.rect.height);
            ctx.fillColor = cc.color(216, 18, 18, 255);
            ctx.fill();
        });
        this.progerss = Math.ceil((hitItemCount / this.polygonPointsList.length) * 100);
        // console.log(this.progerss);
        if (this.progerss > 5) {
            this.tutHam.active = false;
        }
        if (this.progerss >= 50) {
            this.beforeDestroy();
            this.ham.active = false;
            this.scheduleOnce(function () {
                _this.gamePlay.completeScene();
            }, 0.4);
            cc.tween(this.node).to(0.3, { opacity: 0 }).call(function () {
            }).start();
        }
    };
    Scratch_ticket.prototype.clearMask = function (pos) {
        var mask = this.maskNode.getComponent(cc.Mask);
        var stencil = mask._graphics;
        var len = this.tempDrawPoints.length;
        this.tempDrawPoints.push(pos);
        var isNewScratch = false; // 👈 quan trọng
        if (len <= 1) {
            // 只有一个点，用圆来清除涂层
            stencil.circle(pos.x, pos.y, CLEAR_LINE_WIDTH * this.lineWidth);
            stencil.fill();
            // 记录点所在的格子
            this.polygonPointsList.forEach(function (item) {
                if (item.isHit)
                    return;
                var xFlag = pos.x > item.rect.x && pos.x < item.rect.x + item.rect.width;
                var yFlag = pos.y > item.rect.y && pos.y < item.rect.y + item.rect.height;
                if (xFlag && yFlag) {
                    isNewScratch = true; // ✅ có cạo mới
                    item.isHit = true;
                }
            });
        }
        else {
            // 存在多个点，用线段来清除涂层
            var prevPos_1 = this.tempDrawPoints[len - 2];
            var curPos_1 = this.tempDrawPoints[len - 1];
            stencil.moveTo(prevPos_1.x, prevPos_1.y);
            stencil.lineTo(curPos_1.x, curPos_1.y);
            stencil.lineWidth = CLEAR_LINE_WIDTH * 2 * this.lineWidth;
            stencil.lineCap = cc.Graphics.LineCap.ROUND;
            stencil.lineJoin = cc.Graphics.LineJoin.ROUND;
            stencil.strokeColor = cc.color(255, 255, 255, 255);
            stencil.stroke();
            // 记录线段经过的格子
            this.polygonPointsList.forEach(function (item) {
                // item.isHit = item.isHit || cc.Intersection.lineRect(prevPos, curPos, item.rect);
                if (item.isHit)
                    return;
                if (cc.Intersection.lineRect(prevPos_1, curPos_1, item.rect)) {
                    item.isHit = true;
                    isNewScratch = true; // ✅ có cạo mới
                }
            });
        }
        return isNewScratch;
    };
    Scratch_ticket.prototype.reset = function () {
        var mask = this.maskNode.getComponent(cc.Mask);
        mask._graphics.clear();
        this.tempDrawPoints = [];
        this.polygonPointsList = [];
        this.progerss = 0;
        this.ticketNode.getComponent(cc.Graphics).clear();
        // 生成小格子，用来辅助统计涂层的刮开比例
        for (var x = 0; x < 250; x += CALC_RECT_WIDTH) {
            for (var y = 0; y < 270; y += CALC_RECT_WIDTH) {
                this.polygonPointsList.push({
                    rect: cc.rect(x - 250 / 2, y - 270 / 2, CALC_RECT_WIDTH, CALC_RECT_WIDTH),
                    isHit: false
                });
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "maskNode", void 0);
    __decorate([
        property(cc.Camera)
    ], Scratch_ticket.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "ticketNode", void 0);
    __decorate([
        property(cc.Float)
    ], Scratch_ticket.prototype, "lineWidth", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "ham", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "tutHam", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Scratch_ticket.prototype, "soundCao", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "listBun", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Scratch_ticket.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "listXaphong", void 0);
    __decorate([
        property(cc.Label)
    ], Scratch_ticket.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "egg", void 0);
    Scratch_ticket = __decorate([
        ccclass
    ], Scratch_ticket);
    return Scratch_ticket;
}(cc.Component));
exports.default = Scratch_ticket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxTY3JhdGNoX3RpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsNkJBQTRCO0FBRTVCO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBOFBDO1FBNVBDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBYyxFQUFFLENBQUE7UUFFdkIsVUFBSSxHQUFnQixJQUFJLENBQUE7UUFHeEIsaUJBQVcsR0FBYyxFQUFFLENBQUE7UUFFM0IsVUFBSSxHQUFhLElBQUksQ0FBQTtRQUVyQixTQUFHLEdBQVksSUFBSSxDQUFBO1FBQ25CLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBNkNoQixrQkFBWSxHQUFHLEtBQUssQ0FBQTtRQUNwQixhQUFPLEdBQUcsSUFBSSxDQUFBO1FBcUNkLGlCQUFXLEdBQUcsQ0FBQyxDQUFBO1FBd0NmLGtCQUFZLEdBQVksS0FBSyxDQUFDLENBQUMsd0JBQXdCO1FBK0J2RCxvQkFBYyxHQUFjLEVBQUUsQ0FBQztRQW1EL0IsdUJBQWlCLEdBQXdDLEVBQUUsQ0FBQzs7SUFvQjlELENBQUM7SUEvTkMsK0JBQU0sR0FBTjtRQUNFLGdCQUFnQjtRQUNoQixJ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QUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztvQkFDekUsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7SUEzUEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDTDtJQUVkO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnREFDRTtJQUd4QjtRQUZDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUVTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ0U7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDQztJQTFCQSxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBOFBsQztJQUFELHFCQUFDO0NBOVBELEFBOFBDLENBOVAyQyxFQUFFLENBQUMsU0FBUyxHQThQdkQ7a0JBOVBvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuY29uc3QgQ0FMQ19SRUNUX1dJRFRIID0gNDA7XHJcbmNvbnN0IENMRUFSX0xJTkVfV0lEVEggPSA0MDtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gJy4vQ0MyJ1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JhdGNoX3RpY2tldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgbWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRpY2tldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgbGluZVdpZHRoID0gMDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBoYW06IGNjLk5vZGUgPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgdHV0SGFtOiBjYy5Ob2RlID0gbnVsbFxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgc291bmRDYW86IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBsaXN0QnVuOiBjYy5Ob2RlW10gPSBbXVxyXG4gIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuXHJcbiAgbGlzdFhhcGhvbmc6IGNjLk5vZGVbXSA9IFtdXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHRleHQ6IGNjLkxhYmVsID0gbnVsbFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGVnZzogY2MuTm9kZSA9IG51bGxcclxuICBwcm9nZXJzcyA9IDA7XHJcblxyXG4gIGdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gdGhpcy5yZXNldCgpO1xyXG4gICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChHYW1lUGxheSk7XHJcbiAgICAvLyB0aGlzLmFkZEV2ZW50KClcclxuICB9XHJcblxyXG4gIGFkZEV2ZW50KCkge1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHRvdWNoU3RhcnRFdmVudChldmVudCkge1xyXG4gICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MpO1xyXG4gICAgbGV0IHBvaW50ID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgLy8gbGV0IGlzTmV3ID0gdGhpcy5jbGVhck1hc2socG9pbnQpO1xyXG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTVcclxuICAgIHRoaXMudHV0SGFtLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICBpZiAodGhpcy5pc0lkQ2FvKSB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pc0lkQ2FvKVxyXG4gICAgICB0aGlzLmlzSWRDYW8gPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDYW8sIGZhbHNlLCAyKVxyXG4gICAgICB0aGlzLmlzRGVsYXlTb3VuZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzRGVsYXlTb3VuZCA9IGZhbHNlXHJcbiAgICAgIH0sIDAuMilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcG9zMiA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgIHBvczIgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zMik7XHJcbiAgICBsZXQgcG9zSGFtID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpXHJcbiAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NIYW0uYWRkKGNjLnYzKDAsIC01MCkpXHJcbiAgICAvLyB0aGlzLmdhbWVQbGF5LmhhbmRTd2lwZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vIHRoaXMuZ2FtZVBsYXkuaGFuZFN3aXBlMi5hY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcbiAgaXNEZWxheVNvdW5kID0gZmFsc2VcclxuICBpc0lkQ2FvID0gbnVsbFxyXG4gIHRvdWNoTW92ZUV2ZW50KGV2ZW50KSB7XHJcblxyXG5cclxuICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICBwb3MgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zKTtcclxuICAgIGxldCBwb3NIYW0gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuXHJcbiAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NIYW0uYWRkKGNjLnYzKDAsIC01MCkpXHJcbiAgICB0aGlzLmNoZWNrSXRlbSgpXHJcbiAgICBpZiAoIXRoaXMuaXNEZWxheVNvdW5kKSB7XHJcbiAgICAgIHRoaXMuaXNEZWxheVNvdW5kID0gdHJ1ZTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2FvLCBmYWxzZSwgMilcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNEZWxheVNvdW5kID0gZmFsc2VcclxuICAgICAgfSwgMC4xKVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgY2hlY2tJdGVtKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCdW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnBvc2l0aW9uLnN1Yihwb3MpLm1hZygpKVxyXG5cclxuICAgICAgaWYgKHRoaXMubGlzdEJ1bltpXS5hY3RpdmUpIHtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0QnVuW2ldLnBvc2l0aW9uO1xyXG4gICAgICAgIHBvcyA9IHRoaXMubGlzdEJ1bltpXS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBvcykubWFnKCkgPCA1MCkge1xyXG4gICAgICAgICAgdGhpcy5saXN0QnVuW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLmxpc3RYYXBob25nW2ldLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgIHRoaXMuY2hlY2tFbmRTdGVwKClcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgaXNDb3VudFN0ZXAgPSAwXHJcbiAgY2hlY2tFbmRTdGVwKCkge1xyXG4gICAgdGhpcy5pc0NvdW50U3RlcCsrXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlzQ291bnRTdGVwKVxyXG4gICAgaWYgKHRoaXMuaXNDb3VudFN0ZXAgPT0gNCkge1xyXG4gICAgICB0aGlzLmVuZFN0ZXAoKVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNDb3VudFN0ZXAgPT0gMikge1xyXG4gICAgICAvLyB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiUGV0X0NhcmluZ1wiLCB0cnVlKVxyXG5cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDMpIHtcclxuICAgICAgLy8gdGhpcy50ZXh0LnN0cmluZz1cIkdyZWF0IVwiXHJcbiAgICAgIHRoaXMuYW5pbS5ub2RlLnBhcmVudC5wb3NpdGlvbj1jYy52Myg0OSwtMTcpXHJcblxyXG4gICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiUGV0X0Z1ckRyeWluZ1wiLCB0cnVlKVxyXG5cclxuICAgIH1cclxuICB9XHJcbiAgZW5kU3RlcCgpIHtcclxuICAgIHRoaXMuZ2FtZVBsYXkuc3RlcDMoKVxyXG4gICAgXHJcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdFhhcGhvbmcpIHtcclxuICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICBjaGlsZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gIFxyXG4gIH1cclxuICB0b3VjaEVuZEV2ZW50KCkge1xyXG4gICAgaWYgKHRoaXMuaXNJZENhbykge1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaXNJZENhbylcclxuXHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLnRlbXBEcmF3UG9pbnRzID0gW107XHJcbiAgICAvLyB0aGlzLmNhbGNQcm9ncmVzcygpO1xyXG4gIH1cclxuXHJcbiAgY2FsY0RlYnVnZ2VyOiBib29sZWFuID0gZmFsc2U7IC8vIOi+heWKqeW8gOWFs++8jOW8gOWQr+WImeS8mue7mOWItuWIkuW8gOa2guWxguaJgOWxnueahOWwj+agvOWtkFxyXG4gIGNhbGNQcm9ncmVzcygpIHtcclxuICAgIGxldCBoaXRJdGVtQ291bnQgPSAwO1xyXG4gICAgbGV0IGN0eCA9IHRoaXMudGlja2V0Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS5pc0hpdCkgcmV0dXJuO1xyXG4gICAgICBoaXRJdGVtQ291bnQgKz0gMTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5jYWxjRGVidWdnZXIpIHJldHVybjtcclxuICAgICAgY3R4LnJlY3QoaXRlbS5yZWN0LngsIGl0ZW0ucmVjdC55LCBpdGVtLnJlY3Qud2lkdGgsIGl0ZW0ucmVjdC5oZWlnaHQpO1xyXG4gICAgICBjdHguZmlsbENvbG9yID0gY2MuY29sb3IoMjE2LCAxOCwgMTgsIDI1NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByb2dlcnNzID0gTWF0aC5jZWlsKChoaXRJdGVtQ291bnQgLyB0aGlzLnBvbHlnb25Qb2ludHNMaXN0Lmxlbmd0aCkgKiAxMDApO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9nZXJzcyk7XHJcbiAgICBpZiAodGhpcy5wcm9nZXJzcyA+IDUpIHtcclxuICAgICAgdGhpcy50dXRIYW0uYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb2dlcnNzID49IDUwKSB7XHJcbiAgICAgIHRoaXMuYmVmb3JlRGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmhhbS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jb21wbGV0ZVNjZW5lKCk7XHJcblxyXG4gICAgICB9LCAwLjQpXHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZW1wRHJhd1BvaW50czogY2MuVmVjMltdID0gW107XHJcbiAgY2xlYXJNYXNrKHBvcykge1xyXG4gICAgbGV0IG1hc2s6IGFueSA9IHRoaXMubWFza05vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgbGV0IHN0ZW5jaWwgPSBtYXNrLl9ncmFwaGljcztcclxuICAgIGNvbnN0IGxlbiA9IHRoaXMudGVtcERyYXdQb2ludHMubGVuZ3RoO1xyXG4gICAgdGhpcy50ZW1wRHJhd1BvaW50cy5wdXNoKHBvcyk7XHJcbiAgICBsZXQgaXNOZXdTY3JhdGNoID0gZmFsc2U7IC8vIPCfkYggcXVhbiB0cuG7jW5nXHJcblxyXG4gICAgaWYgKGxlbiA8PSAxKSB7XHJcbiAgICAgIC8vIOWPquacieS4gOS4queCue+8jOeUqOWchuadpea4hemZpOa2guWxglxyXG4gICAgICBzdGVuY2lsLmNpcmNsZShwb3MueCwgcG9zLnksIENMRUFSX0xJTkVfV0lEVEggKiB0aGlzLmxpbmVXaWR0aCk7XHJcbiAgICAgIHN0ZW5jaWwuZmlsbCgpO1xyXG5cclxuICAgICAgLy8g6K6w5b2V54K55omA5Zyo55qE5qC85a2QXHJcbiAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmlzSGl0KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgeEZsYWcgPSBwb3MueCA+IGl0ZW0ucmVjdC54ICYmIHBvcy54IDwgaXRlbS5yZWN0LnggKyBpdGVtLnJlY3Qud2lkdGg7XHJcbiAgICAgICAgY29uc3QgeUZsYWcgPSBwb3MueSA+IGl0ZW0ucmVjdC55ICYmIHBvcy55IDwgaXRlbS5yZWN0LnkgKyBpdGVtLnJlY3QuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh4RmxhZyAmJiB5RmxhZykge1xyXG4gICAgICAgICAgaXNOZXdTY3JhdGNoID0gdHJ1ZTsgLy8g4pyFIGPDsyBj4bqhbyBt4bubaVxyXG4gICAgICAgICAgaXRlbS5pc0hpdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWtmOWcqOWkmuS4queCue+8jOeUqOe6v+auteadpea4hemZpOa2guWxglxyXG4gICAgICBsZXQgcHJldlBvcyA9IHRoaXMudGVtcERyYXdQb2ludHNbbGVuIC0gMl07XHJcbiAgICAgIGxldCBjdXJQb3MgPSB0aGlzLnRlbXBEcmF3UG9pbnRzW2xlbiAtIDFdO1xyXG5cclxuICAgICAgc3RlbmNpbC5tb3ZlVG8ocHJldlBvcy54LCBwcmV2UG9zLnkpO1xyXG4gICAgICBzdGVuY2lsLmxpbmVUbyhjdXJQb3MueCwgY3VyUG9zLnkpO1xyXG4gICAgICBzdGVuY2lsLmxpbmVXaWR0aCA9IENMRUFSX0xJTkVfV0lEVEggKiAyICogdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgIHN0ZW5jaWwubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgIHN0ZW5jaWwubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcclxuICAgICAgc3RlbmNpbC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIHN0ZW5jaWwuc3Ryb2tlKCk7XHJcblxyXG4gICAgICAvLyDorrDlvZXnur/mrrXnu4/ov4fnmoTmoLzlrZBcclxuICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgLy8gaXRlbS5pc0hpdCA9IGl0ZW0uaXNIaXQgfHwgY2MuSW50ZXJzZWN0aW9uLmxpbmVSZWN0KHByZXZQb3MsIGN1clBvcywgaXRlbS5yZWN0KTtcclxuICAgICAgICBpZiAoaXRlbS5pc0hpdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoY2MuSW50ZXJzZWN0aW9uLmxpbmVSZWN0KHByZXZQb3MsIGN1clBvcywgaXRlbS5yZWN0KSkge1xyXG4gICAgICAgICAgaXRlbS5pc0hpdCA9IHRydWU7XHJcbiAgICAgICAgICBpc05ld1NjcmF0Y2ggPSB0cnVlOyAvLyDinIUgY8OzIGPhuqFvIG3hu5tpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc05ld1NjcmF0Y2g7XHJcblxyXG4gIH1cclxuXHJcbiAgcG9seWdvblBvaW50c0xpc3Q6IHsgcmVjdDogY2MuUmVjdDsgaXNIaXQ6IGJvb2xlYW4gfVtdID0gW107XHJcbiAgcmVzZXQoKSB7XHJcbiAgICBsZXQgbWFzazogYW55ID0gdGhpcy5tYXNrTm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICBtYXNrLl9ncmFwaGljcy5jbGVhcigpO1xyXG5cclxuICAgIHRoaXMudGVtcERyYXdQb2ludHMgPSBbXTtcclxuICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QgPSBbXTtcclxuICAgIHRoaXMucHJvZ2Vyc3MgPSAwO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuXHJcbiAgICAvLyDnlJ/miJDlsI/moLzlrZDvvIznlKjmnaXovoXliqnnu5/orqHmtoLlsYLnmoTliK7lvIDmr5TkvotcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMjUwOyB4ICs9IENBTENfUkVDVF9XSURUSCkge1xyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDI3MDsgeSArPSBDQUxDX1JFQ1RfV0lEVEgpIHtcclxuICAgICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LnB1c2goe1xyXG4gICAgICAgICAgcmVjdDogY2MucmVjdCh4IC0gMjUwIC8gMiwgeSAtIDI3MCAvIDIsIENBTENfUkVDVF9XSURUSCwgQ0FMQ19SRUNUX1dJRFRIKSxcclxuICAgICAgICAgIGlzSGl0OiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==