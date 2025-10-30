"use strict";
cc._RF.push(module, '2e308XSWZ1F7bpy830Izbrv', 'animal');
// scripts/animal.ts

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
        _this.anim = null;
        _this.hp = 100;
        _this.gamePlay = null;
        _this.soundLonKeu = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.spineListener();
        this.gamePlay = cc.Canvas.instance.node.getComponent("game");
    };
    NewClass.prototype.idle = function () {
        this.anim.setAnimation(0, "Idle", true);
    };
    NewClass.prototype.run = function () {
        this.anim.setAnimation(0, "Move", true);
    };
    NewClass.prototype.attack = function () {
        this.anim.setAnimation(0, "Attack", true);
    };
    NewClass.prototype.die = function () {
        this.anim.setAnimation(0, "Dead", false);
    };
    NewClass.prototype.spineListener = function () {
        var _this = this;
        this.anim.setCompleteListener(function (track) {
            if (track.animation.name == 'Spawn') {
                // this.node.destroy();
                _this.idle();
            }
            if (track.animation.name == 'Spawn') {
                // this.node.destroy();
                _this.idle();
            }
        });
    };
    NewClass.prototype.attacked = function (damage) {
        var _this = this;
        this.hp -= damage;
        this.node.children[1].children[1].getComponent(cc.Sprite).fillRange = this.hp / 100;
        if (this.hp <= 0) {
            cc.audioEngine.play(this.soundLonKeu, false, 0.8);
            this.die();
            this.scheduleOnce(function () {
                _this.node.active = false;
                _this.gamePlay.btn_upgrade();
            }, 0.3);
        }
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundLonKeu", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();