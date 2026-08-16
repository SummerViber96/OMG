
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcQ2hhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyx1Q0FBaUM7QUFFakM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3SkM7UUFySkcsMkJBQXFCLEdBQXlCLElBQUksQ0FBQztRQUduRCxjQUFRLEdBQUcsR0FBRyxDQUFDO1FBR2YsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUVkLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsWUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNWLGNBQVEsR0FBRyxLQUFLLENBQUE7O0lBNkdwQixDQUFDO0lBNUdHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1B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RSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsaUNBQWlDO1lBRWpDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBcEpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzsyREFDb0I7SUFHbkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDTjtJQUdmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBdEJILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3SjVCO0lBQUQsZUFBQztDQXhKRCxBQXdKQyxDQXhKcUMsRUFBRSxDQUFDLFNBQVMsR0F3SmpEO2tCQXhKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IEdhbWVQbGF5IGZyb20gJy4vR2FtZVBsYXknXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNrZWxldG9uQW5pbWF0aW9uKVxuICAgIGJvZHlTa2VsZXRvbkFuaW1hdGlvbjogY2MuU2tlbGV0b25BbmltYXRpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgc3BlZWRSdW4gPSAyNTA7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q2Fycnk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBiYXBOZ29QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHF1YUNhY2h1YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDb2xsZWN0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRQdXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmFnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGdhbWVQbGF5ID0gbnVsbDtcblxuICAgIGlzQ2FycnlpbmcgPSBmYWxzZTtcblxuICAgIGlzQ29tcGxldGVDYXJyeSA9IGZhbHNlO1xuXG4gICAgbnVtQ2FycnkgPSAwO1xuXG4gICAgYW5nbGUgPSAwO1xuXG4gICAgaXNSdW4gPSBmYWxzZTtcblxuICAgIG1vdmVEaXIgPSBudWxsO1xuXG4gICAgZGlyZWN0aW9uWCA9IG51bGw7XG5cbiAgICBudW1DYWNodWEgPSAwO1xuXG4gICAgbnVtTmdvID0gMFxuICAgIGlzQmFuaE1pID0gZmFsc2VcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoR2FtZVBsYXkpO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVDYXJyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSdW4gJiYgIXRoaXMuaXNDb21wbGV0ZUNhcnJ5KSB7XG4gICAgICAgICAgICB0aGlzLmlzUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGxldCBhbmltTmFtZSA9ICh0aGlzLmlzQ2FycnlpbmcpID8gJ1J1biAyJyA6ICdSdW4gMSc7XG4gICAgICAgICAgICBsZXQgYW5pbU5hbWUgPSAnUnVuIHN0YWNrJztcblxuICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheShhbmltTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQmFuaE1pKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNCYW5oTWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRQdXQsIGZhbHNlLCAxKTtcblxuICAgICAgICAgICAgdGhpcy5pc0JhbmhNaSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJhZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgQm1cIilcbiAgICAgICAgICAgIGxldCBhbmltTmFtZSA9ICdSdW4gc3RhY2snO1xuXG4gICAgICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZGxlKCkge1xuICAgICAgICB0aGlzLmlzUnVuID0gZmFsc2U7XG4gICAgICAgIC8vIGxldCBhbmltTmFtZSA9ICh0aGlzLmlzQ2FycnlpbmcpID8gJ0lkbGUgMicgOiAnSWRsZSAxJztcbiAgICAgICAgbGV0IGFuaW1OYW1lID0gJ0lkbGUnO1xuICAgICAgICBpZiAodGhpcy5pc0JhbmhNaSkgeyBhbmltTmFtZSA9IFwiUnVuIHN0YWNrXCIgfVxuICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcbiAgICB9XG4gICAgY3JlYXRlTW9uZXkoKSB7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIHRoaXMuYWRkSXRlbShcImNheW5nb1wiKVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIHRyYW5zTW9uZXkocG9zKSB7XG4gICAgICAgIHBvcyA9IHRoaXMubGlzdENhcnJ5LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc01vbmV5XCIpXG4gICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdENhcnJ5LmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5saXN0Q2FycnkuY2hpbGRyZW5baV0pLmRlbGF5KGNvdW50ICogMC4wMikudG8oMC4zLCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FycnkuY2hpbGRyZW5baV0uZGVzdHJveSgpXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLm51bUNhcnJ5IDwgMzIpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZVBsYXkuYXJyb3dHYXJkZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5nYW1lUGxheS5jb3VudEN1c3RvbWVyIDwgNCkgdGhpcy5nYW1lUGxheS5hcnJvd0tlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzQ2FycnlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gbGV0IGFuaW1OYW1lID0gKHRoaXMuaXNDYXJyeWluZykgPyAnUnVuIDInIDogJ1J1biAxJztcbiAgICAgICAgICAgIC8vIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLnBsYXkoYW5pbU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5udW1DYXJyeSArPSAyO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbU5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtID09ICdjYXljYWNodWEnKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5xdWFDYWNodWFQcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm51bUNhY2h1YSArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PSAnY2F5bmdvJykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFwTmdvUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1OZ28gKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbU5vZGUuc2V0UG9zaXRpb24oY2MudjMoMCwgMC41ICsgKHRoaXMubnVtQ2FycnkgLSBpKSAqIDAuNCwgMC4zKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FycnkuYWRkQ2hpbGQoaXRlbU5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbGxlY3QsIGZhbHNlLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlQ2FycnkoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RDYXJyeS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGltZURlbGF5ID0gdGhpcy5saXN0Q2FycnkuY2hpbGRyZW4ubGVuZ3RoICogMC4wMlxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZUNhcnJ5KSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGVDYXJyeSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJyeS5jaGlsZHJlbi5yZXZlcnNlKCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYWRkSXRlbU9uS2UoaXRlbS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtQ2FycnktLTtcbiAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDAuMDIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FycnlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1J1bikgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheSgnUnVuIDEnKTtcbiAgICAgICAgICAgIH0sIHRpbWVEZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMubW92ZURpciAmJiB0aGlzLmRpcmVjdGlvblggJiYgdGhpcy5pc1J1biAmJiAhdGhpcy5pc0NvbXBsZXRlQ2FycnkpIHtcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGNjLnYzKHRoaXMubW92ZURpci54LCAwLCAtdGhpcy5tb3ZlRGlyLnkpO1xuICAgICAgICAgICAgbGV0IG5ld1BvcyA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoZGVsdGEubXVsKHRoaXMuc3BlZWRSdW4gLyAxMzAwKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zLmNsYW1wZihjYy52MygtODMsIDIwMCwgMTApLCBjYy52MygtNDAsIDAsIC0xNikpKTtcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXdQb3MpO1xuXG4gICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBjYy52MygwLCB0aGlzLmFuZ2xlLCAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==