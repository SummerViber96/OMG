"use strict";
cc._RF.push(module, '0e6bbZcOyZLypMOKq5szwS2', 'rep');
// Gym/Script/rep.ts

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
globalThis.monsterRep = 0;
globalThis.youRep = 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        // label hiển thị %
        _this.percentLabel = null;
        _this.fill = null;
        _this.rep = 0;
        _this.isMonster = false;
        _this.gamePLay = null;
        _this.isFirst = false;
        _this.fillTween = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePLay = cc.Canvas.instance.node.getComponent("Gym3");
        // update % lúc start
        this.updatePercent();
    };
    NewClass.prototype.hit = function () {
        if (this.gamePLay.isEndgame)
            return;
        this.rep++;
        if (this.rep == 50) {
            this.gamePLay.to50rep();
        }
        if (this.isMonster) {
            globalThis.monsterRep = this.rep;
        }
        else {
            globalThis.youRep = this.rep;
        }
        this.label.string = this.rep.toString();
        // update fill theo rep
        // this.fill.fillRange = (100 - this.rep) / 100
        // update label %
        this.updatePercent();
        if (this.rep == 100) {
            if (this.isMonster) {
                this.gamePLay.onEndGame(false);
            }
            else {
                this.gamePLay.onEndGame(true);
            }
        }
        if (!this.isFirst) {
            this.loadFill();
            this.isFirst = true;
        }
    };
    NewClass.prototype.updatePercent = function () {
        var percent = Math.floor(this.fill.fillRange * 100);
        this.percentLabel.string = percent + "%";
    };
    NewClass.prototype.stopFill = function () {
        if (this.fillTween) {
            this.fillTween.stop();
            this.fillTween = null;
        }
    };
    NewClass.prototype.loadFill = function () {
        var _this = this;
        this.fillTween = cc.tween(this.fill)
            .to(80, { fillRange: 0 }, {
            progress: function (start, end, current, ratio) {
                var value = start + (end - start) * ratio;
                _this.fill.fillRange = value;
                _this.updatePercent();
                return value;
            }
        })
            .call(function () {
            _this.fill.fillRange = 0;
            _this.updatePercent();
            _this.gamePLay.onEndGame(false);
        });
        this.fillTween.start();
        // .start();
    };
    NewClass.prototype.upgradeMonster = function () {
        var _this = this;
        this.fillTween = cc.tween(this.fill)
            .to(30, { fillRange: 0 }, {
            progress: function (start, end, current, ratio) {
                var value = start + (end - start) * ratio;
                _this.fill.fillRange = value;
                _this.updatePercent();
                return value;
            }
        })
            .call(function () {
            _this.fill.fillRange = 0;
            _this.updatePercent();
            _this.gamePLay.onEndGame(false);
        });
        this.fillTween.start();
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "percentLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fill", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isMonster", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();