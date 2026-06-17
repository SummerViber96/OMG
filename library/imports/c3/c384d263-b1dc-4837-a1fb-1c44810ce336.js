"use strict";
cc._RF.push(module, 'c384dJjsdxIN6H7HESBDOM2', 'machine');
// RecipeRush/scripts/machine.ts

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
        _this.soundChien = null;
        _this.soundDone = null;
        _this.tag = 0;
        _this.fillTime = null;
        _this.clock = null;
        _this.isChin = false;
        _this.gamePlay = null;
        _this.chicken = null;
        _this.time = 2;
        _this.isSoundCooking = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.setOn = function () {
        var _this = this;
        this.clock.active = true;
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(function () {
            _this.clock.active = false;
        }).start();
    };
    NewClass.prototype.setChin = function () {
        this.isChin = true;
        this.anim.setAnimation(0, "lv1-chin", true);
        this.node.getComponent(cc.Button).enabled = true;
        cc.audioEngine.play(this.gamePlay.soundBanh, false, 0.7);
    };
    NewClass.prototype.btn_click = function () {
    };
    NewClass.prototype.cooking = function (chicken) {
        var _this = this;
        // this.setOn()
        this.isSoundCooking = cc.audioEngine.play(this.soundChien, false, 1);
        chicken.parent = this.node;
        chicken.position = cc.v3(0.5, 17);
        chicken.getComponent("chicken").song();
        this.clock.active = true;
        this.fillTime.fillRange = 0;
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(function () {
            _this.clock.active = false;
            _this.isChin = true;
            cc.audioEngine.stop(_this.isSoundCooking);
            cc.audioEngine.play(_this.soundDone, false, 1);
            chicken.getComponent("chicken").chin();
            _this.node.getChildByName("hind").opacity = 255;
            _this.node.getChildByName("hind").active = true;
            _this.node.getChildByName("hind").zIndex = 2;
            _this.chicken = chicken;
        }).start();
    };
    NewClass.prototype.getChicken = function () {
        this.isChin = false;
        var chicken = this.chicken;
        this.chicken = null;
        this.gamePlay.onHind();
        return chicken;
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChien", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundDone", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "clock", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();