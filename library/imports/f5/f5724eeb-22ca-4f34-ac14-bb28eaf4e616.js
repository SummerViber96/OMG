"use strict";
cc._RF.push(module, 'f57247rIspPNKwUuyjq9OYW', 'Char');
// scripts/KF_2/Char.ts

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
var GamePlay_1 = require("./GamePlay");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bodySkeletonAnimation = null;
        _this.speedRun = 250;
        _this.listCarry = null;
        _this.bapNgoPrefab = null;
        _this.quaCachuaPrefab = null;
        _this.soundCollect = null;
        _this.soundPut = null;
        _this.bag = null;
        _this.gamePlay = null;
        _this.isCarrying = false;
        _this.isCompleteCarry = false;
        _this.numCarry = 0;
        _this.angle = 0;
        _this.isRun = false;
        _this.moveDir = null;
        _this.directionX = null;
        _this.numCachua = 0;
        _this.numNgo = 0;
        _this.isBanhMi = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent(GamePlay_1.default);
        this.isCompleteCarry = true;
    };
    NewClass.prototype.run = function () {
        if (!this.isRun && !this.isCompleteCarry) {
            this.isRun = true;
            // let animName = (this.isCarrying) ? 'Run 2' : 'Run 1';
            var animName = 'Run stack';
            this.bodySkeletonAnimation.play(animName);
        }
    };
    NewClass.prototype.addBanhMi = function () {
        if (!this.isBanhMi) {
            cc.audioEngine.play(this.soundPut, false, 1);
            this.isBanhMi = true;
            this.bag.active = true;
            console.log("add Bm");
            var animName = 'Run stack';
            this.bodySkeletonAnimation.play(animName);
        }
    };
    NewClass.prototype.idle = function () {
        this.isRun = false;
        // let animName = (this.isCarrying) ? 'Idle 2' : 'Idle 1';
        var animName = 'Idle';
        if (this.isBanhMi) {
            animName = "Run stack";
        }
        this.bodySkeletonAnimation.play(animName);
    };
    NewClass.prototype.createMoney = function () {
        // for (let i = 0; i < 8; i++) {
        this.addItem("cayngo");
        // }
    };
    NewClass.prototype.transMoney = function (pos) {
        var _this = this;
        pos = this.listCarry.convertToNodeSpaceAR(pos);
        console.log("transMoney");
        var count = 0;
        var _loop_1 = function (i) {
            cc.tween(this_1.listCarry.children[i]).delay(count * 0.02).to(0.3, { position: pos }).call(function () {
                _this.listCarry.children[i].destroy();
            }).start();
            count++;
        };
        var this_1 = this;
        for (var i = this.listCarry.childrenCount - 1; i >= 0; i--) {
            _loop_1(i);
        }
    };
    NewClass.prototype.addItem = function (item) {
        if (this.numCarry < 32) {
            // this.gamePlay.arrowGarden.active = false;
            // if (this.gamePlay.countCustomer < 4) this.gamePlay.arrowKe.active = true;
            this.isCarrying = true;
            // let animName = (this.isCarrying) ? 'Run 2' : 'Run 1';
            // this.bodySkeletonAnimation.play(animName);
            this.numCarry += 2;
            for (var i = 0; i < 8; i++) {
                var itemNode = null;
                if (item == 'caycachua') {
                    itemNode = cc.instantiate(this.quaCachuaPrefab);
                    this.numCachua += 2;
                }
                if (item == 'cayngo') {
                    itemNode = cc.instantiate(this.bapNgoPrefab);
                    this.numNgo += 2;
                }
                itemNode.setPosition(cc.v3(0, 0.5 + (this.numCarry - i) * 0.4, 0.3));
                this.listCarry.addChild(itemNode);
                // cc.audioEngine.play(this.soundCollect, false, 2);
            }
        }
    };
    NewClass.prototype.completeCarry = function () {
        var _this = this;
        if (this.listCarry.children.length > 0) {
            var timeDelay = this.listCarry.children.length * 0.02;
            if (this.isCompleteCarry)
                return;
            this.isCompleteCarry = true;
            this.listCarry.children.reverse().forEach(function (item, index) {
                _this.scheduleOnce(function () {
                    _this.gamePlay.addItemOnKe(item.name);
                    item.destroy();
                    _this.numCarry--;
                }, index * 0.02);
            });
            this.scheduleOnce(function () {
                _this.isCompleteCarry = false;
                _this.isCarrying = false;
                if (_this.isRun)
                    _this.bodySkeletonAnimation.play('Run 1');
            }, timeDelay);
        }
    };
    NewClass.prototype.update = function (dt) {
        if (this.moveDir && this.directionX && this.isRun && !this.isCompleteCarry) {
            var delta = cc.v3(this.moveDir.x, 0, -this.moveDir.y);
            var newPos = this.node.position.add(delta.mul(this.speedRun / 1300));
            this.node.setPosition(newPos.clampf(cc.v3(-83, 200, 10), cc.v3(-40, 0, -16)));
            // this.node.setPosition(newPos);
            this.node.eulerAngles = cc.v3(0, this.angle, 0);
        }
    };
    __decorate([
        property(cc.SkeletonAnimation)
    ], NewClass.prototype, "bodySkeletonAnimation", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "speedRun", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCarry", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bapNgoPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "quaCachuaPrefab", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCollect", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bag", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();