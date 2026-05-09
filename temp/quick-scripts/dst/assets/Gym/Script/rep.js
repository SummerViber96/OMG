
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Gym/Script/rep.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.fill = null;
        _this.rep = 0;
        _this.isMonster = false;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.gamePLay = null;
        _this.isFirst = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePLay = cc.Canvas.instance.node.getComponent("Gym3");
    };
    NewClass.prototype.hit = function () {
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
        this.fill.fillRange = (100 - this.rep) / 100;
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
    NewClass.prototype.loadFill = function () {
        var _this = this;
        cc.tween(this.fill).to(30, { fillRange: 0 }).call(function () {
            _this.gamePLay.onEndGame(false);
        }).start();
    };
    NewClass.prototype.upgradeMonster = function () {
        var _this = this;
        if (this.isMonster) {
            cc.tween(this.fill).to(10, { fillRange: 0 }).call(function () {
                _this.gamePLay.onEndGame(false);
            }).start();
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXHJlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtBQUN6QixVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUVmLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNERDO1FBekRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQTtRQUN0QixTQUFHLEdBQUcsQ0FBQyxDQUFBO1FBRVAsZUFBUyxHQUFHLEtBQUssQ0FBQTtRQUNqQix3QkFBd0I7UUFFeEIsZUFBZTtRQUNmLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixhQUFPLEdBQUcsS0FBSyxDQUFBOztRQThDZixpQkFBaUI7SUFDckIsQ0FBQztJQTlDRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFDRCxzQkFBRyxHQUFIO1FBQ0ksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQzFCO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQTtTQUNuQzthQUNJO1lBQ0QsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFBO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO1FBQzVDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUNqQztpQkFDSTtnQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUVoQztTQUNKO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtTQUN0QjtJQUVMLENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzlDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRWxDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFBQSxpQkFPQztRQU5HLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM5QyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUVsQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUNiO0lBQ0wsQ0FBQztJQXZERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0U7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsrQ0FDSjtJQVJBLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0RDVCO0lBQUQsZUFBQztDQTVERCxBQTREQyxDQTVEcUMsRUFBRSxDQUFDLFNBQVMsR0E0RGpEO2tCQTVEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImdsb2JhbFRoaXMubW9uc3RlclJlcCA9IDBcclxuZ2xvYmFsVGhpcy55b3VSZXAgPSAwXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlsbDogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgcmVwID0gMFxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBpc01vbnN0ZXIgPSBmYWxzZVxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcbiAgICBnYW1lUExheSA9IG51bGxcclxuICAgIGlzRmlyc3QgPSBmYWxzZVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUExheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkd5bTNcIilcclxuICAgIH1cclxuICAgIGhpdCgpIHtcclxuICAgICAgICB0aGlzLnJlcCsrO1xyXG4gICAgICAgIGlmICh0aGlzLnJlcCA9PSA1MCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQTGF5LnRvNTByZXAoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc01vbnN0ZXIpIHtcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5tb25zdGVyUmVwID0gdGhpcy5yZXBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMueW91UmVwID0gdGhpcy5yZXBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLnJlcC50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5maWxsLmZpbGxSYW5nZSA9ICgxMDAgLSB0aGlzLnJlcCkgLyAxMDBcclxuICAgICAgICBpZiAodGhpcy5yZXAgPT0gMTAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9uc3Rlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUExheS5vbkVuZEdhbWUoZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQTGF5Lm9uRW5kR2FtZSh0cnVlKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRGaWxsKClcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBsb2FkRmlsbCgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGwpLnRvKDMwLCB7IGZpbGxSYW5nZTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUExheS5vbkVuZEdhbWUoZmFsc2UpXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIHVwZ3JhZGVNb25zdGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW9uc3Rlcikge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGwpLnRvKDEwLCB7IGZpbGxSYW5nZTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBMYXkub25FbmRHYW1lKGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19