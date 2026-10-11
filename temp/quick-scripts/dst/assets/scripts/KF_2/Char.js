
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/KF_2/Char.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcQ2hhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyx1Q0FBaUM7QUFFakM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3SkM7UUFySkcsMkJBQXFCLEdBQXlCLElBQUksQ0FBQztRQUduRCxjQUFRLEdBQUcsR0FBRyxDQUFDO1FBR2YsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUVkLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsWUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNWLGNBQVEsR0FBRyxLQUFLLENBQUE7O0lBNkdwQixDQUFDO0lBNUdHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1B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RSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsaUNBQWlDO1lBRWpDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBcEpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzsyREFDb0I7SUFHbkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDTjtJQUdmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBdEJILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3SjVCO0lBQUQsZUFBQztDQXhKRCxBQXdKQyxDQXhKcUMsRUFBRSxDQUFDLFNBQVMsR0F3SmpEO2tCQXhKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tICcuL0dhbWVQbGF5J1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNrZWxldG9uQW5pbWF0aW9uKVxyXG4gICAgYm9keVNrZWxldG9uQW5pbWF0aW9uOiBjYy5Ta2VsZXRvbkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBzcGVlZFJ1biA9IDI1MDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDYXJyeTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJhcE5nb1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcXVhQ2FjaHVhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENvbGxlY3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRQdXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgZ2FtZVBsYXkgPSBudWxsO1xyXG5cclxuICAgIGlzQ2FycnlpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBpc0NvbXBsZXRlQ2FycnkgPSBmYWxzZTtcclxuXHJcbiAgICBudW1DYXJyeSA9IDA7XHJcblxyXG4gICAgYW5nbGUgPSAwO1xyXG5cclxuICAgIGlzUnVuID0gZmFsc2U7XHJcblxyXG4gICAgbW92ZURpciA9IG51bGw7XHJcblxyXG4gICAgZGlyZWN0aW9uWCA9IG51bGw7XHJcblxyXG4gICAgbnVtQ2FjaHVhID0gMDtcclxuXHJcbiAgICBudW1OZ28gPSAwXHJcbiAgICBpc0JhbmhNaSA9IGZhbHNlXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVQbGF5KTtcclxuICAgICAgICB0aGlzLmlzQ29tcGxldGVDYXJyeSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1J1biAmJiAhdGhpcy5pc0NvbXBsZXRlQ2FycnkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1J1biA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGxldCBhbmltTmFtZSA9ICh0aGlzLmlzQ2FycnlpbmcpID8gJ1J1biAyJyA6ICdSdW4gMSc7XHJcbiAgICAgICAgICAgIGxldCBhbmltTmFtZSA9ICdSdW4gc3RhY2snO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheShhbmltTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkQmFuaE1pKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0JhbmhNaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUHV0LCBmYWxzZSwgMSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzQmFuaE1pID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5iYWcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgQm1cIilcclxuICAgICAgICAgICAgbGV0IGFuaW1OYW1lID0gJ1J1biBzdGFjayc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZGxlKCkge1xyXG4gICAgICAgIHRoaXMuaXNSdW4gPSBmYWxzZTtcclxuICAgICAgICAvLyBsZXQgYW5pbU5hbWUgPSAodGhpcy5pc0NhcnJ5aW5nKSA/ICdJZGxlIDInIDogJ0lkbGUgMSc7XHJcbiAgICAgICAgbGV0IGFuaW1OYW1lID0gJ0lkbGUnO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQmFuaE1pKSB7IGFuaW1OYW1lID0gXCJSdW4gc3RhY2tcIiB9XHJcbiAgICAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheShhbmltTmFtZSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVNb25leSgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbShcImNheW5nb1wiKVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHRyYW5zTW9uZXkocG9zKSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5saXN0Q2FycnkuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNNb25leVwiKVxyXG4gICAgICAgIGxldCBjb3VudCA9IDBcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5saXN0Q2FycnkuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdENhcnJ5LmNoaWxkcmVuW2ldKS5kZWxheShjb3VudCAqIDAuMDIpLnRvKDAuMywgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FycnkuY2hpbGRyZW5baV0uZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLm51bUNhcnJ5IDwgMzIpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5hcnJvd0dhcmRlbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZ2FtZVBsYXkuY291bnRDdXN0b21lciA8IDQpIHRoaXMuZ2FtZVBsYXkuYXJyb3dLZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2FycnlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBsZXQgYW5pbU5hbWUgPSAodGhpcy5pc0NhcnJ5aW5nKSA/ICdSdW4gMicgOiAnUnVuIDEnO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5udW1DYXJyeSArPSAyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtID09ICdjYXljYWNodWEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnF1YUNhY2h1YVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1DYWNodWEgKz0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtID09ICdjYXluZ28nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhcE5nb1ByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1OZ28gKz0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGl0ZW1Ob2RlLnNldFBvc2l0aW9uKGNjLnYzKDAsIDAuNSArICh0aGlzLm51bUNhcnJ5IC0gaSkgKiAwLjQsIDAuMykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FycnkuYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29sbGVjdCwgZmFsc2UsIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBsZXRlQ2FycnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdENhcnJ5LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVEZWxheSA9IHRoaXMubGlzdENhcnJ5LmNoaWxkcmVuLmxlbmd0aCAqIDAuMDJcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZUNhcnJ5KSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2FycnkuY2hpbGRyZW4ucmV2ZXJzZSgpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5hZGRJdGVtT25LZShpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtQ2FycnktLTtcclxuICAgICAgICAgICAgICAgIH0sIGluZGV4ICogMC4wMik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29tcGxldGVDYXJyeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NhcnJ5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1J1bikgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheSgnUnVuIDEnKTtcclxuICAgICAgICAgICAgfSwgdGltZURlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZURpciAmJiB0aGlzLmRpcmVjdGlvblggJiYgdGhpcy5pc1J1biAmJiAhdGhpcy5pc0NvbXBsZXRlQ2FycnkpIHtcclxuICAgICAgICAgICAgbGV0IGRlbHRhID0gY2MudjModGhpcy5tb3ZlRGlyLngsIDAsIC10aGlzLm1vdmVEaXIueSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGRlbHRhLm11bCh0aGlzLnNwZWVkUnVuIC8gMTMwMCkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zLmNsYW1wZihjYy52MygtODMsIDIwMCwgMTApLCBjYy52MygtNDAsIDAsIC0xNikpKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1Bvcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBjYy52MygwLCB0aGlzLmFuZ2xlLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19