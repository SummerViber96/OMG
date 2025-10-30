"use strict";
cc._RF.push(module, '175c95KQxdMFaXQ667wjLz8', 'JoyStick');
// scripts/common/JoyStick.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dot = null;
        _this.ring = null;
        _this.guild = null;
        _this.shadow = null;
        _this.radius = null;
        _this.stickPos = null;
        _this.touchLocation = null;
        _this.gamePlay = null;
        _this.offGuide = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("ICY_19");
    };
    NewClass.prototype.start = function () {
        this.radius = this.ring.width / 2;
        this.initTouchEvent();
    };
    NewClass.prototype.initTouchEvent = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    NewClass.prototype.touchStartEvent = function (event) {
        if (!this.offGuide) {
            this.offGuide = true;
            this.guild.active = false;
            this.node.getChildByName("name").active = false;
            this.shadow.active = false;
        }
        // if (this.gamePlay.isArrowOn) {
        //     this.gamePlay.arrow2.active = false;
        // }
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.stickPos = this.ring.getPosition();
        var distance = touchPos.sub(this.ring.getPosition().mag());
        if (this.radius > distance) {
            this.dot.setPosition(touchPos);
        }
        this.gamePlay.charComp.directionX = (this.dot.x > 0) ? -1 : 1;
        this.gamePlay.charComp.direction = (this.dot.y > 0) ? 1 : 2;
        this.gamePlay.charComp.run();
        this.stickPos = touchPos;
        this.node.opacity = 255;
        this.touchLocation = event.getLocation();
        this.ring.setPosition(touchPos);
        this.dot.setPosition(touchPos);
    };
    NewClass.prototype.touchMoveEvent = function (event) {
        // if (this.gamePlay.isArrowOn) return;
        if (this.touchLocation === event.getLocation()) {
            return false;
        }
        var touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
        var distance = touchPos.mag();
        var posX = this.stickPos.x + touchPos.x;
        var posY = this.stickPos.y + touchPos.y;
        var p = cc.v2(posX, posY).sub(this.ring.getPosition()).normalize();
        if (this.radius > distance) {
            this.dot.setPosition(cc.v2(posX, posY));
        }
        else {
            var x = this.stickPos.x + p.x * this.radius;
            var y = this.stickPos.y + p.y * this.radius;
            this.dot.setPosition(cc.v2(x, y));
        }
        this.gamePlay.charComp.moveDir = p;
        this.gamePlay.charComp.directionX = (this.dot.x - this.ring.x > 0) ? -1 : 1;
        this.gamePlay.charComp.direction = (this.dot.y > 0) ? 1 : 2;
        this.gamePlay.charComp.run();
    };
    NewClass.prototype.touchEndEvent = function () {
        this.dot.setPosition(this.ring.getPosition());
        // this.node.opacity = 0;
        this.gamePlay.charComp.stop();
        this.dot.setPosition(cc.v3(0, 0));
        this.ring.setPosition(cc.v3(0, 0));
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dot", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ring", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "shadow", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();