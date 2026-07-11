
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/BangD.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fcafCRKpNPtYVaG8s3ps06', 'BangD');
// scripts/APP/BangD.ts

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
        var pos = event.getLocation();
        pos = this.camera.getScreenToWorldPoint(pos);
        var point = this.node.parent.convertToNodeSpaceAR(pos);
        // let isNew = this.clearMask(point);
        this.tutHam.active = false;
        // if (this.isIdCao) {
        //   cc.audioEngine.stop(this.isIdCao)
        //   this.isIdCao = cc.audioEngine.play(this.soundCao, false, 2)
        //   this.isDelaySound = true;
        //   this.scheduleOnce(() => {
        //     this.isDelaySound = false
        //   }, 0.2)
        // }
        var pos2 = event.getLocation();
        pos2 = this.camera.getScreenToWorldPoint(pos2);
        var posHam = this.node.convertToNodeSpaceAR(pos2);
        this.node.position = posHam.add(cc.v3(0, -50));
        // this.gamePlay.handSwipe.active = false;
        // this.gamePlay.handSwipe2.active = false;
    };
    Scratch_ticket.prototype.touchMoveEvent = function (event) {
        var pos = event.getLocation();
        pos = this.camera.getScreenToWorldPoint(pos);
        var posHam = this.node.parent.convertToNodeSpaceAR(pos);
        this.node.position = posHam.add(cc.v3(0, -50));
        // if (!this.isDelaySound) {
        //   this.isDelaySound = true;
        //   cc.audioEngine.play(this.soundCao, false, 2)
        //   this.scheduleOnce(() => {
        //     this.isDelaySound = false
        //   }, 0.1)
        // }
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
                    this.node.position = pos;
                    this.beforeDestroy();
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
        if (this.isCountStep == 1) {
            this.anim.setAnimation(0, "Pet_Happy", true);
            this.endStep();
        }
    };
    Scratch_ticket.prototype.endStep = function () {
        // this.gamePlay.step3()
        // for (let child of this.listXaphong) {
        //   cc.tween(child).to(0.5, { opacity: 0 }).call(() => {
        //     child.active = false
        //   }).start();
        // }
        this.node.active = false;
        this.gamePlay.onEndGame();
    };
    Scratch_ticket.prototype.touchEndEvent = function () {
        // if (this.isIdCao) {
        //   cc.audioEngine.stop(this.isIdCao)
        // }
        this.checkItem();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxCYW5nRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsNkJBQTRCO0FBRTVCO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBdVBDO1FBclBDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBYyxFQUFFLENBQUE7UUFFdkIsVUFBSSxHQUFnQixJQUFJLENBQUE7UUFHeEIsaUJBQVcsR0FBYyxFQUFFLENBQUE7UUFFM0IsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUNuQixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsY0FBUSxHQUFHLElBQUksQ0FBQztRQTRDaEIsa0JBQVksR0FBRyxLQUFLLENBQUE7UUFDcEIsYUFBTyxHQUFHLElBQUksQ0FBQTtRQXFDZCxpQkFBVyxHQUFHLENBQUMsQ0FBQTtRQW9DZixrQkFBWSxHQUFZLEtBQUssQ0FBQyxDQUFDLHdCQUF3QjtRQStCdkQsb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFtRC9CLHVCQUFpQixHQUF3QyxFQUFFLENBQUM7O0lBb0I5RCxDQUFDO0lBMU5DLCtCQUFNLEdBQU47UUFDRSxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxD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QztvQkFDekUsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7SUFwUEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDTDtJQUVkO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnREFDRTtJQUd4QjtRQUZDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUVTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0M7SUF4QkEsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXVQbEM7SUFBRCxxQkFBQztDQXZQRCxBQXVQQyxDQXZQMkMsRUFBRSxDQUFDLFNBQVMsR0F1UHZEO2tCQXZQb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmNvbnN0IENBTENfUkVDVF9XSURUSCA9IDQwO1xyXG5jb25zdCBDTEVBUl9MSU5FX1dJRFRIID0gNDA7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tICcuL0NDMidcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyYXRjaF90aWNrZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIG1hc2tOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICB0aWNrZXROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gIGxpbmVXaWR0aCA9IDA7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgaGFtOiBjYy5Ob2RlID0gbnVsbFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHR1dEhhbTogY2MuTm9kZSA9IG51bGxcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHNvdW5kQ2FvOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgbGlzdEJ1bjogY2MuTm9kZVtdID0gW11cclxuICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcblxyXG4gIGxpc3RYYXBob25nOiBjYy5Ob2RlW10gPSBbXVxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGVnZzogY2MuTm9kZSA9IG51bGxcclxuICBwcm9nZXJzcyA9IDA7XHJcblxyXG4gIGdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gdGhpcy5yZXNldCgpO1xyXG4gICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChHYW1lUGxheSk7XHJcbiAgICAvLyB0aGlzLmFkZEV2ZW50KClcclxuICB9XHJcblxyXG4gIGFkZEV2ZW50KCkge1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHRvdWNoU3RhcnRFdmVudChldmVudCkge1xyXG4gICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MpO1xyXG4gICAgbGV0IHBvaW50ID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgLy8gbGV0IGlzTmV3ID0gdGhpcy5jbGVhck1hc2socG9pbnQpO1xyXG4gICAgdGhpcy50dXRIYW0uYWN0aXZlID0gZmFsc2VcclxuICAgIC8vIGlmICh0aGlzLmlzSWRDYW8pIHtcclxuICAgIC8vICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlzSWRDYW8pXHJcbiAgICAvLyAgIHRoaXMuaXNJZENhbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENhbywgZmFsc2UsIDIpXHJcbiAgICAvLyAgIHRoaXMuaXNEZWxheVNvdW5kID0gdHJ1ZTtcclxuICAgIC8vICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMuaXNEZWxheVNvdW5kID0gZmFsc2VcclxuICAgIC8vICAgfSwgMC4yKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGxldCBwb3MyID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgcG9zMiA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MyKTtcclxuICAgIGxldCBwb3NIYW0gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMilcclxuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc0hhbS5hZGQoY2MudjMoMCwgLTUwKSlcclxuICAgIC8vIHRoaXMuZ2FtZVBsYXkuaGFuZFN3aXBlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5nYW1lUGxheS5oYW5kU3dpcGUyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuICBpc0RlbGF5U291bmQgPSBmYWxzZVxyXG4gIGlzSWRDYW8gPSBudWxsXHJcbiAgdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcclxuXHJcblxyXG4gICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MpO1xyXG4gICAgbGV0IHBvc0hhbSA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG5cclxuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc0hhbS5hZGQoY2MudjMoMCwgLTUwKSlcclxuICAgIC8vIGlmICghdGhpcy5pc0RlbGF5U291bmQpIHtcclxuICAgIC8vICAgdGhpcy5pc0RlbGF5U291bmQgPSB0cnVlO1xyXG4gICAgLy8gICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDYW8sIGZhbHNlLCAyKVxyXG4gICAgLy8gICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5pc0RlbGF5U291bmQgPSBmYWxzZVxyXG4gICAgLy8gICB9LCAwLjEpXHJcbiAgICAvLyB9XHJcblxyXG4gIH1cclxuICBjaGVja0l0ZW0oKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJ1bi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBvcykubWFnKCkpXHJcblxyXG4gICAgICBpZiAodGhpcy5saXN0QnVuW2ldLmFjdGl2ZSkge1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmxpc3RCdW5baV0ucG9zaXRpb247XHJcbiAgICAgICAgcG9zID0gdGhpcy5saXN0QnVuW2ldLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wb3NpdGlvbi5zdWIocG9zKS5tYWcoKSA8IDUwKSB7XHJcbiAgICAgICAgICB0aGlzLmxpc3RCdW5baV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgICAgdGhpcy5iZWZvcmVEZXN0cm95KClcclxuICAgICAgICAgIHRoaXMuY2hlY2tFbmRTdGVwKClcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgaXNDb3VudFN0ZXAgPSAwXHJcbiAgY2hlY2tFbmRTdGVwKCkge1xyXG4gICAgdGhpcy5pc0NvdW50U3RlcCsrXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlzQ291bnRTdGVwKVxyXG4gICAgaWYgKHRoaXMuaXNDb3VudFN0ZXAgPT0gMSkge1xyXG4gICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiUGV0X0hhcHB5XCIsIHRydWUpXHJcblxyXG4gICAgICB0aGlzLmVuZFN0ZXAoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG4gIGVuZFN0ZXAoKSB7XHJcbiAgICAvLyB0aGlzLmdhbWVQbGF5LnN0ZXAzKClcclxuXHJcbiAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RYYXBob25nKSB7XHJcbiAgICAvLyAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICBjaGlsZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICB9KS5zdGFydCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgdGhpcy5nYW1lUGxheS5vbkVuZEdhbWUoKVxyXG5cclxuICB9XHJcbiAgdG91Y2hFbmRFdmVudCgpIHtcclxuICAgIC8vIGlmICh0aGlzLmlzSWRDYW8pIHtcclxuICAgIC8vICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlzSWRDYW8pXHJcblxyXG4gICAgLy8gfVxyXG4gICAgdGhpcy5jaGVja0l0ZW0oKVxyXG5cclxuICAgIC8vIHRoaXMudGVtcERyYXdQb2ludHMgPSBbXTtcclxuICAgIC8vIHRoaXMuY2FsY1Byb2dyZXNzKCk7XHJcbiAgfVxyXG5cclxuICBjYWxjRGVidWdnZXI6IGJvb2xlYW4gPSBmYWxzZTsgLy8g6L6F5Yqp5byA5YWz77yM5byA5ZCv5YiZ5Lya57uY5Yi25YiS5byA5raC5bGC5omA5bGe55qE5bCP5qC85a2QXHJcbiAgY2FsY1Byb2dyZXNzKCkge1xyXG4gICAgbGV0IGhpdEl0ZW1Db3VudCA9IDA7XHJcbiAgICBsZXQgY3R4ID0gdGhpcy50aWNrZXROb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKCFpdGVtLmlzSGl0KSByZXR1cm47XHJcbiAgICAgIGhpdEl0ZW1Db3VudCArPSAxO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmNhbGNEZWJ1Z2dlcikgcmV0dXJuO1xyXG4gICAgICBjdHgucmVjdChpdGVtLnJlY3QueCwgaXRlbS5yZWN0LnksIGl0ZW0ucmVjdC53aWR0aCwgaXRlbS5yZWN0LmhlaWdodCk7XHJcbiAgICAgIGN0eC5maWxsQ29sb3IgPSBjYy5jb2xvcigyMTYsIDE4LCAxOCwgMjU1KTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucHJvZ2Vyc3MgPSBNYXRoLmNlaWwoKGhpdEl0ZW1Db3VudCAvIHRoaXMucG9seWdvblBvaW50c0xpc3QubGVuZ3RoKSAqIDEwMCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb2dlcnNzKTtcclxuICAgIGlmICh0aGlzLnByb2dlcnNzID4gNSkge1xyXG4gICAgICB0aGlzLnR1dEhhbS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvZ2Vyc3MgPj0gNTApIHtcclxuICAgICAgdGhpcy5iZWZvcmVEZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuaGFtLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmNvbXBsZXRlU2NlbmUoKTtcclxuXHJcbiAgICAgIH0sIDAuNClcclxuICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjMsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlbXBEcmF3UG9pbnRzOiBjYy5WZWMyW10gPSBbXTtcclxuICBjbGVhck1hc2socG9zKSB7XHJcbiAgICBsZXQgbWFzazogYW55ID0gdGhpcy5tYXNrTm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICBsZXQgc3RlbmNpbCA9IG1hc2suX2dyYXBoaWNzO1xyXG4gICAgY29uc3QgbGVuID0gdGhpcy50ZW1wRHJhd1BvaW50cy5sZW5ndGg7XHJcbiAgICB0aGlzLnRlbXBEcmF3UG9pbnRzLnB1c2gocG9zKTtcclxuICAgIGxldCBpc05ld1NjcmF0Y2ggPSBmYWxzZTsgLy8g8J+RiCBxdWFuIHRy4buNbmdcclxuXHJcbiAgICBpZiAobGVuIDw9IDEpIHtcclxuICAgICAgLy8g5Y+q5pyJ5LiA5Liq54K577yM55So5ZyG5p2l5riF6Zmk5raC5bGCXHJcbiAgICAgIHN0ZW5jaWwuY2lyY2xlKHBvcy54LCBwb3MueSwgQ0xFQVJfTElORV9XSURUSCAqIHRoaXMubGluZVdpZHRoKTtcclxuICAgICAgc3RlbmNpbC5maWxsKCk7XHJcblxyXG4gICAgICAvLyDorrDlvZXngrnmiYDlnKjnmoTmoLzlrZBcclxuICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaXNIaXQpIHJldHVybjtcclxuICAgICAgICBjb25zdCB4RmxhZyA9IHBvcy54ID4gaXRlbS5yZWN0LnggJiYgcG9zLnggPCBpdGVtLnJlY3QueCArIGl0ZW0ucmVjdC53aWR0aDtcclxuICAgICAgICBjb25zdCB5RmxhZyA9IHBvcy55ID4gaXRlbS5yZWN0LnkgJiYgcG9zLnkgPCBpdGVtLnJlY3QueSArIGl0ZW0ucmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHhGbGFnICYmIHlGbGFnKSB7XHJcbiAgICAgICAgICBpc05ld1NjcmF0Y2ggPSB0cnVlOyAvLyDinIUgY8OzIGPhuqFvIG3hu5tpXHJcbiAgICAgICAgICBpdGVtLmlzSGl0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5a2Y5Zyo5aSa5Liq54K577yM55So57q/5q615p2l5riF6Zmk5raC5bGCXHJcbiAgICAgIGxldCBwcmV2UG9zID0gdGhpcy50ZW1wRHJhd1BvaW50c1tsZW4gLSAyXTtcclxuICAgICAgbGV0IGN1clBvcyA9IHRoaXMudGVtcERyYXdQb2ludHNbbGVuIC0gMV07XHJcblxyXG4gICAgICBzdGVuY2lsLm1vdmVUbyhwcmV2UG9zLngsIHByZXZQb3MueSk7XHJcbiAgICAgIHN0ZW5jaWwubGluZVRvKGN1clBvcy54LCBjdXJQb3MueSk7XHJcbiAgICAgIHN0ZW5jaWwubGluZVdpZHRoID0gQ0xFQVJfTElORV9XSURUSCAqIDIgKiB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgc3RlbmNpbC5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgc3RlbmNpbC5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xyXG4gICAgICBzdGVuY2lsLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgc3RlbmNpbC5zdHJva2UoKTtcclxuXHJcbiAgICAgIC8vIOiusOW9lee6v+autee7j+i/h+eahOagvOWtkFxyXG4gICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAvLyBpdGVtLmlzSGl0ID0gaXRlbS5pc0hpdCB8fCBjYy5JbnRlcnNlY3Rpb24ubGluZVJlY3QocHJldlBvcywgY3VyUG9zLCBpdGVtLnJlY3QpO1xyXG4gICAgICAgIGlmIChpdGVtLmlzSGl0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ubGluZVJlY3QocHJldlBvcywgY3VyUG9zLCBpdGVtLnJlY3QpKSB7XHJcbiAgICAgICAgICBpdGVtLmlzSGl0ID0gdHJ1ZTtcclxuICAgICAgICAgIGlzTmV3U2NyYXRjaCA9IHRydWU7IC8vIOKchSBjw7MgY+G6oW8gbeG7m2lcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzTmV3U2NyYXRjaDtcclxuXHJcbiAgfVxyXG5cclxuICBwb2x5Z29uUG9pbnRzTGlzdDogeyByZWN0OiBjYy5SZWN0OyBpc0hpdDogYm9vbGVhbiB9W10gPSBbXTtcclxuICByZXNldCgpIHtcclxuICAgIGxldCBtYXNrOiBhbnkgPSB0aGlzLm1hc2tOb2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgIG1hc2suX2dyYXBoaWNzLmNsZWFyKCk7XHJcblxyXG4gICAgdGhpcy50ZW1wRHJhd1BvaW50cyA9IFtdO1xyXG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5wcm9nZXJzcyA9IDA7XHJcbiAgICB0aGlzLnRpY2tldE5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKS5jbGVhcigpO1xyXG5cclxuICAgIC8vIOeUn+aIkOWwj+agvOWtkO+8jOeUqOadpei+heWKqee7n+iuoea2guWxgueahOWIruW8gOavlOS+i1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAyNTA7IHggKz0gQ0FMQ19SRUNUX1dJRFRIKSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMjcwOyB5ICs9IENBTENfUkVDVF9XSURUSCkge1xyXG4gICAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QucHVzaCh7XHJcbiAgICAgICAgICByZWN0OiBjYy5yZWN0KHggLSAyNTAgLyAyLCB5IC0gMjcwIC8gMiwgQ0FMQ19SRUNUX1dJRFRILCBDQUxDX1JFQ1RfV0lEVEgpLFxyXG4gICAgICAgICAgaXNIaXQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19