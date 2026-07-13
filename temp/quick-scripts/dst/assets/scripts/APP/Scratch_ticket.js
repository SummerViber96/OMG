
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
        _this.noti = null;
        _this.noti2 = null;
        _this.progress = null;
        _this.fillGreen = null;
        _this.fill = null;
        _this.itemVoiHoaSen = null;
        _this.water = null;
        _this.progerss = 0;
        _this.gamePlay = null;
        _this.isDelaySound = false;
        _this.isIdCao = null;
        _this.isCountStep = 0;
        _this.isEnd = false;
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
        this.unschedule(this.showHind);
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
        var _this = this;
        this.isCountStep++;
        console.log(this.isCountStep);
        cc.tween(this.fill).to(0.2, { fillRange: this.isCountStep * 0.2 }).start();
        if (this.isCountStep == 4) {
            this.noti2.active = true;
            this.scheduleOnce(function () {
                _this.isEnd = true;
                // this.listHand.children[1].active = false
                _this.itemVoiHoaSen.active = true;
                _this.itemVoiHoaSen.getComponent(cc.Animation).play();
                _this.scheduleOnce(function () {
                    cc.audioEngine.play(_this.water, false, 1);
                    _this.itemVoiHoaSen.children[1].children[0].active = true;
                }, 0.6);
                _this.scheduleOnce(function () {
                    _this.endStep();
                    _this.itemVoiHoaSen.active = false;
                }, 1.4);
            }, 0.5);
        }
        if (this.isCountStep == 2) {
            this.fill.spriteFrame = this.fillGreen;
            // this.anim.setAnimation(0, "Pet_Caring", true)
        }
        if (this.isCountStep == 3) {
            this.noti.active = true;
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
        this.scheduleOnce(this.showHind, 1);
        // this.tempDrawPoints = [];
        // this.calcProgress();
    };
    Scratch_ticket.prototype.showHind = function () {
        if (this.isEnd == false) {
            this.tutHam.active = true;
        }
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
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "noti", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "noti2", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "progress", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Scratch_ticket.prototype, "fillGreen", void 0);
    __decorate([
        property(cc.Sprite)
    ], Scratch_ticket.prototype, "fill", void 0);
    __decorate([
        property(cc.Node)
    ], Scratch_ticket.prototype, "itemVoiHoaSen", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Scratch_ticket.prototype, "water", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxTY3JhdGNoX3RpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsNkJBQTRCO0FBRTVCO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBc1NDO1FBcFNDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBYyxFQUFFLENBQUE7UUFFdkIsVUFBSSxHQUFnQixJQUFJLENBQUE7UUFHeEIsaUJBQVcsR0FBYyxFQUFFLENBQUE7UUFFM0IsVUFBSSxHQUFhLElBQUksQ0FBQTtRQUVyQixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBYyxJQUFJLENBQUE7UUFFdEIsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFFN0IsV0FBSyxHQUFpQixJQUFJLENBQUE7UUFDMUIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUViLGNBQVEsR0FBRyxJQUFJLENBQUM7UUE2Q2hCLGtCQUFZLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLGFBQU8sR0FB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QyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dEQUNFO0lBR3hCO1FBRkMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBRVM7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDRTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cURBQ1E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDRTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ0c7SUF4Q1AsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXNTbEM7SUFBRCxxQkFBQztDQXRTRCxBQXNTQyxDQXRTMkMsRUFBRSxDQUFDLFNBQVMsR0FzU3ZEO2tCQXRTb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmNvbnN0IENBTENfUkVDVF9XSURUSCA9IDQwO1xyXG5jb25zdCBDTEVBUl9MSU5FX1dJRFRIID0gNDA7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tICcuL0NDMidcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyYXRjaF90aWNrZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIG1hc2tOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICB0aWNrZXROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gIGxpbmVXaWR0aCA9IDA7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgaGFtOiBjYy5Ob2RlID0gbnVsbFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHR1dEhhbTogY2MuTm9kZSA9IG51bGxcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHNvdW5kQ2FvOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgbGlzdEJ1bjogY2MuTm9kZVtdID0gW11cclxuICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcblxyXG4gIGxpc3RYYXBob25nOiBjYy5Ob2RlW10gPSBbXVxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICB0ZXh0OiBjYy5MYWJlbCA9IG51bGxcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBlZ2c6IGNjLk5vZGUgPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgbm90aTogY2MuTm9kZSA9IG51bGxcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBub3RpMjogY2MuTm9kZSA9IG51bGxcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwcm9ncmVzczogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIGZpbGxHcmVlbjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgZmlsbDogY2MuU3ByaXRlID0gbnVsbFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGl0ZW1Wb2lIb2FTZW46IGNjLk5vZGUgPSBudWxsXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICB3YXRlcjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gIHByb2dlcnNzID0gMDtcclxuXHJcbiAgZ2FtZVBsYXkgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICAvLyB0aGlzLnJlc2V0KCk7XHJcbiAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVQbGF5KTtcclxuICAgIC8vIHRoaXMuYWRkRXZlbnQoKVxyXG4gIH1cclxuXHJcbiAgYWRkRXZlbnQoKSB7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydEV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydEV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdG91Y2hTdGFydEV2ZW50KGV2ZW50KSB7XHJcbiAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgcG9zID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvcyk7XHJcbiAgICBsZXQgcG9pbnQgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAvLyBsZXQgaXNOZXcgPSB0aGlzLmNsZWFyTWFzayhwb2ludCk7XHJcbiAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NVxyXG4gICAgdGhpcy50dXRIYW0uYWN0aXZlID0gZmFsc2VcclxuICAgIGlmICh0aGlzLmlzSWRDYW8pIHtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlzSWRDYW8pXHJcbiAgICAgIHRoaXMuaXNJZENhbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENhbywgZmFsc2UsIDIpXHJcbiAgICAgIHRoaXMuaXNEZWxheVNvdW5kID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNEZWxheVNvdW5kID0gZmFsc2VcclxuICAgICAgfSwgMC4yKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwb3MyID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgcG9zMiA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MyKTtcclxuICAgIGxldCBwb3NIYW0gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMilcclxuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc0hhbS5hZGQoY2MudjMoMCwgLTUwKSlcclxuICAgIC8vIHRoaXMuZ2FtZVBsYXkuaGFuZFN3aXBlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5nYW1lUGxheS5oYW5kU3dpcGUyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuICBpc0RlbGF5U291bmQgPSBmYWxzZVxyXG4gIGlzSWRDYW8gPSBudWxsXHJcbiAgdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcclxuXHJcbiAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaG93SGluZClcclxuICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICBwb3MgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zKTtcclxuICAgIGxldCBwb3NIYW0gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuXHJcbiAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NIYW0uYWRkKGNjLnYzKDAsIC01MCkpXHJcbiAgICB0aGlzLmNoZWNrSXRlbSgpXHJcbiAgICBpZiAoIXRoaXMuaXNEZWxheVNvdW5kKSB7XHJcbiAgICAgIHRoaXMuaXNEZWxheVNvdW5kID0gdHJ1ZTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2FvLCBmYWxzZSwgMilcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNEZWxheVNvdW5kID0gZmFsc2VcclxuICAgICAgfSwgMC4xKVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgY2hlY2tJdGVtKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCdW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnBvc2l0aW9uLnN1Yihwb3MpLm1hZygpKVxyXG5cclxuICAgICAgaWYgKHRoaXMubGlzdEJ1bltpXS5hY3RpdmUpIHtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0QnVuW2ldLnBvc2l0aW9uO1xyXG4gICAgICAgIHBvcyA9IHRoaXMubGlzdEJ1bltpXS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBvcykubWFnKCkgPCA1MCkge1xyXG4gICAgICAgICAgdGhpcy5saXN0QnVuW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLmxpc3RYYXBob25nW2ldLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgIHRoaXMuY2hlY2tFbmRTdGVwKClcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgaXNDb3VudFN0ZXAgPSAwXHJcbiAgY2hlY2tFbmRTdGVwKCkge1xyXG4gICAgdGhpcy5pc0NvdW50U3RlcCsrXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlzQ291bnRTdGVwKVxyXG4gICAgY2MudHdlZW4odGhpcy5maWxsKS50bygwLjIsIHsgZmlsbFJhbmdlOiB0aGlzLmlzQ291bnRTdGVwICogMC4yIH0pLnN0YXJ0KClcclxuXHJcbiAgICBpZiAodGhpcy5pc0NvdW50U3RlcCA9PSA0KSB7XHJcbiAgICAgIHRoaXMubm90aTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuICAgICAgICAvLyB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pdGVtVm9pSG9hU2VuLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLml0ZW1Wb2lIb2FTZW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy53YXRlciwgZmFsc2UsIDEpXHJcbiAgICAgICAgICB0aGlzLml0ZW1Wb2lIb2FTZW4uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDAuNilcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbmRTdGVwKClcclxuICAgICAgICAgIHRoaXMuaXRlbVZvaUhvYVNlbi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0sIDEuNClcclxuICAgICAgfSwgMC41KVxyXG5cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDIpIHtcclxuICAgICAgdGhpcy5maWxsLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsR3JlZW5cclxuICAgICAgLy8gdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIlBldF9DYXJpbmdcIiwgdHJ1ZSlcclxuXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0NvdW50U3RlcCA9PSAzKSB7XHJcbiAgICAgIHRoaXMubm90aS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgIC8vIHRoaXMudGV4dC5zdHJpbmc9XCJHcmVhdCFcIlxyXG4gICAgICB0aGlzLmFuaW0ubm9kZS5wYXJlbnQucG9zaXRpb24gPSBjYy52Myg0OSwgLTE3KVxyXG5cclxuICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIlBldF9GdXJEcnlpbmdcIiwgdHJ1ZSlcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIGVuZFN0ZXAoKSB7XHJcbiAgICB0aGlzLmdhbWVQbGF5LnN0ZXAzKClcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RYYXBob25nKSB7XHJcbiAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICBjaGlsZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICB9XHJcbiAgdG91Y2hFbmRFdmVudCgpIHtcclxuICAgIGlmICh0aGlzLmlzSWRDYW8pIHtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlzSWRDYW8pXHJcblxyXG4gICAgfVxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5zaG93SGluZCwgMSlcclxuICAgIC8vIHRoaXMudGVtcERyYXdQb2ludHMgPSBbXTtcclxuICAgIC8vIHRoaXMuY2FsY1Byb2dyZXNzKCk7XHJcbiAgfVxyXG4gIHNob3dIaW5kKCkge1xyXG4gICAgaWYgKHRoaXMuaXNFbmQgPT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy50dXRIYW0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuICBpc0VuZCA9IGZhbHNlXHJcbiAgY2FsY0RlYnVnZ2VyOiBib29sZWFuID0gZmFsc2U7IC8vIOi+heWKqeW8gOWFs++8jOW8gOWQr+WImeS8mue7mOWItuWIkuW8gOa2guWxguaJgOWxnueahOWwj+agvOWtkFxyXG4gIGNhbGNQcm9ncmVzcygpIHtcclxuICAgIGxldCBoaXRJdGVtQ291bnQgPSAwO1xyXG4gICAgbGV0IGN0eCA9IHRoaXMudGlja2V0Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS5pc0hpdCkgcmV0dXJuO1xyXG4gICAgICBoaXRJdGVtQ291bnQgKz0gMTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5jYWxjRGVidWdnZXIpIHJldHVybjtcclxuICAgICAgY3R4LnJlY3QoaXRlbS5yZWN0LngsIGl0ZW0ucmVjdC55LCBpdGVtLnJlY3Qud2lkdGgsIGl0ZW0ucmVjdC5oZWlnaHQpO1xyXG4gICAgICBjdHguZmlsbENvbG9yID0gY2MuY29sb3IoMjE2LCAxOCwgMTgsIDI1NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByb2dlcnNzID0gTWF0aC5jZWlsKChoaXRJdGVtQ291bnQgLyB0aGlzLnBvbHlnb25Qb2ludHNMaXN0Lmxlbmd0aCkgKiAxMDApO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9nZXJzcyk7XHJcbiAgICBpZiAodGhpcy5wcm9nZXJzcyA+IDUpIHtcclxuICAgICAgdGhpcy50dXRIYW0uYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb2dlcnNzID49IDUwKSB7XHJcbiAgICAgIHRoaXMuYmVmb3JlRGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmhhbS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jb21wbGV0ZVNjZW5lKCk7XHJcblxyXG4gICAgICB9LCAwLjQpXHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZW1wRHJhd1BvaW50czogY2MuVmVjMltdID0gW107XHJcbiAgY2xlYXJNYXNrKHBvcykge1xyXG4gICAgbGV0IG1hc2s6IGFueSA9IHRoaXMubWFza05vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgbGV0IHN0ZW5jaWwgPSBtYXNrLl9ncmFwaGljcztcclxuICAgIGNvbnN0IGxlbiA9IHRoaXMudGVtcERyYXdQb2ludHMubGVuZ3RoO1xyXG4gICAgdGhpcy50ZW1wRHJhd1BvaW50cy5wdXNoKHBvcyk7XHJcbiAgICBsZXQgaXNOZXdTY3JhdGNoID0gZmFsc2U7IC8vIPCfkYggcXVhbiB0cuG7jW5nXHJcblxyXG4gICAgaWYgKGxlbiA8PSAxKSB7XHJcbiAgICAgIC8vIOWPquacieS4gOS4queCue+8jOeUqOWchuadpea4hemZpOa2guWxglxyXG4gICAgICBzdGVuY2lsLmNpcmNsZShwb3MueCwgcG9zLnksIENMRUFSX0xJTkVfV0lEVEggKiB0aGlzLmxpbmVXaWR0aCk7XHJcbiAgICAgIHN0ZW5jaWwuZmlsbCgpO1xyXG5cclxuICAgICAgLy8g6K6w5b2V54K55omA5Zyo55qE5qC85a2QXHJcbiAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmlzSGl0KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgeEZsYWcgPSBwb3MueCA+IGl0ZW0ucmVjdC54ICYmIHBvcy54IDwgaXRlbS5yZWN0LnggKyBpdGVtLnJlY3Qud2lkdGg7XHJcbiAgICAgICAgY29uc3QgeUZsYWcgPSBwb3MueSA+IGl0ZW0ucmVjdC55ICYmIHBvcy55IDwgaXRlbS5yZWN0LnkgKyBpdGVtLnJlY3QuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh4RmxhZyAmJiB5RmxhZykge1xyXG4gICAgICAgICAgaXNOZXdTY3JhdGNoID0gdHJ1ZTsgLy8g4pyFIGPDsyBj4bqhbyBt4bubaVxyXG4gICAgICAgICAgaXRlbS5pc0hpdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWtmOWcqOWkmuS4queCue+8jOeUqOe6v+auteadpea4hemZpOa2guWxglxyXG4gICAgICBsZXQgcHJldlBvcyA9IHRoaXMudGVtcERyYXdQb2ludHNbbGVuIC0gMl07XHJcbiAgICAgIGxldCBjdXJQb3MgPSB0aGlzLnRlbXBEcmF3UG9pbnRzW2xlbiAtIDFdO1xyXG5cclxuICAgICAgc3RlbmNpbC5tb3ZlVG8ocHJldlBvcy54LCBwcmV2UG9zLnkpO1xyXG4gICAgICBzdGVuY2lsLmxpbmVUbyhjdXJQb3MueCwgY3VyUG9zLnkpO1xyXG4gICAgICBzdGVuY2lsLmxpbmVXaWR0aCA9IENMRUFSX0xJTkVfV0lEVEggKiAyICogdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgIHN0ZW5jaWwubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgIHN0ZW5jaWwubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcclxuICAgICAgc3RlbmNpbC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIHN0ZW5jaWwuc3Ryb2tlKCk7XHJcblxyXG4gICAgICAvLyDorrDlvZXnur/mrrXnu4/ov4fnmoTmoLzlrZBcclxuICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgLy8gaXRlbS5pc0hpdCA9IGl0ZW0uaXNIaXQgfHwgY2MuSW50ZXJzZWN0aW9uLmxpbmVSZWN0KHByZXZQb3MsIGN1clBvcywgaXRlbS5yZWN0KTtcclxuICAgICAgICBpZiAoaXRlbS5pc0hpdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoY2MuSW50ZXJzZWN0aW9uLmxpbmVSZWN0KHByZXZQb3MsIGN1clBvcywgaXRlbS5yZWN0KSkge1xyXG4gICAgICAgICAgaXRlbS5pc0hpdCA9IHRydWU7XHJcbiAgICAgICAgICBpc05ld1NjcmF0Y2ggPSB0cnVlOyAvLyDinIUgY8OzIGPhuqFvIG3hu5tpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc05ld1NjcmF0Y2g7XHJcblxyXG4gIH1cclxuXHJcbiAgcG9seWdvblBvaW50c0xpc3Q6IHsgcmVjdDogY2MuUmVjdDsgaXNIaXQ6IGJvb2xlYW4gfVtdID0gW107XHJcbiAgcmVzZXQoKSB7XHJcbiAgICBsZXQgbWFzazogYW55ID0gdGhpcy5tYXNrTm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICBtYXNrLl9ncmFwaGljcy5jbGVhcigpO1xyXG5cclxuICAgIHRoaXMudGVtcERyYXdQb2ludHMgPSBbXTtcclxuICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QgPSBbXTtcclxuICAgIHRoaXMucHJvZ2Vyc3MgPSAwO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuXHJcbiAgICAvLyDnlJ/miJDlsI/moLzlrZDvvIznlKjmnaXovoXliqnnu5/orqHmtoLlsYLnmoTliK7lvIDmr5TkvotcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMjUwOyB4ICs9IENBTENfUkVDVF9XSURUSCkge1xyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDI3MDsgeSArPSBDQUxDX1JFQ1RfV0lEVEgpIHtcclxuICAgICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LnB1c2goe1xyXG4gICAgICAgICAgcmVjdDogY2MucmVjdCh4IC0gMjUwIC8gMiwgeSAtIDI3MCAvIDIsIENBTENfUkVDVF9XSURUSCwgQ0FMQ19SRUNUX1dJRFRIKSxcclxuICAgICAgICAgIGlzSGl0OiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==