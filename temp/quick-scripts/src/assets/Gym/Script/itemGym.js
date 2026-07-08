"use strict";
cc._RF.push(module, 'd40f42926xBKJ6BthhDphPw', 'itemGym');
// Gym/Script/itemGym.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.tag = 0;
        _this.colorG = 0;
        _this.target = null;
        _this.gamePlay = null;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.localPos = cc.v3(0, 0);
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
        switch (this.tag) {
            case 0:
                this.target = this.gamePlay.giaTaNho;
                break;
            case 1:
                this.target = this.gamePlay.giaTaLon;
                break;
            case 2:
                this.target = this.gamePlay.tuKhan;
                break;
            case 3:
                this.target = this.gamePlay.tuNuoc;
                break;
        }
        var touchNode = this.node;
        this.localPos = this.node.position;
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    NewClass.prototype.getTouchPosInParent = function (event) {
        var worldPos = this.gamePlay.camera.getScreenToWorldPoint(event.getLocation());
        return this.node.parent.convertToNodeSpaceAR(worldPos);
    };
    NewClass.prototype.onTouchStart = function (event) {
        var touchPos = this.getTouchPosInParent(event);
        // this.localPos = this.node.position.sub(touchPos)
    };
    NewClass.prototype.onTouchMove = function (event) {
        var touchPos = this.getTouchPosInParent(event);
        this.node.setPosition(touchPos);
        if (this.target && this.target.getChildByName("hind").active == false) {
            this.target.getChildByName("hind").active = true;
        }
    };
    NewClass.prototype.onTouchEnd = function (event) {
        var _this = this;
        var check = this.gamePlay.checkItem(this.node, event.getLocation());
        console.log(check);
        if (!check) {
            cc.audioEngine.play(this.gamePlay.soundWrong, false, 1);
            this.node.getChildByName("wrong").getComponent(cc.Animation).play();
            this.scheduleOnce(function () {
                _this.node.setPosition(_this.localPos);
            }, 0.3);
        }
        this.target.getChildByName("hind").active = false;
    };
    NewClass.prototype.clickItem = function (event) {
        event.currentTarget.getComponent(cc.Button).enabled = false;
        console.log(this.node.name);
        this.gamePlay.clickItem(this.node);
    };
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "colorG", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();