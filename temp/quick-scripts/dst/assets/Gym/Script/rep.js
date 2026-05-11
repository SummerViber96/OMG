
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
        // label hiển thị %
        _this.percentLabel = null;
        _this.fill = null;
        _this.listSoundMonster = [];
        _this.countHit = 6;
        _this.rdNext = 7;
        _this.countSoundHero = 0;
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
        if (this.isMonster) {
            this.countHit++;
            if (this.countHit == this.rdNext) {
                this.countHit = 0;
                this.rdNext = Math.floor(Math.random() * 2) + 6;
                cc.audioEngine.play(this.listSoundMonster[this.countSoundHero], false, 1);
                this.countSoundHero++;
                if (this.countSoundHero >= this.listSoundMonster.length) {
                    this.countSoundHero = 0;
                }
            }
        }
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
        property([cc.AudioClip])
    ], NewClass.prototype, "listSoundMonster", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXHJlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtBQUN6QixVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUVmLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMklDO1FBeElHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsbUJBQW1CO1FBRW5CLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLFVBQUksR0FBYyxJQUFJLENBQUE7UUFFdEIsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQTtRQUNyQyxjQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQ1osWUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNWLG9CQUFjLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFHUCxlQUFTLEdBQUcsS0FBSyxDQUFBO1FBRWpCLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixhQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ1AsZUFBUyxHQUFHLElBQUksQ0FBQzs7SUFvSDdCLENBQUM7SUFsSEcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUU1RCxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxzQkFBRyxHQUFIO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBRXBDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFB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QUMzQixDQUFDO0lBdklEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFJdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNFO0lBRXRCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3NEQUNZO0lBT3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7K0NBQ0o7SUFuQkEsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJJNUI7SUFBRCxlQUFDO0NBM0lELEFBMklDLENBM0lxQyxFQUFFLENBQUMsU0FBUyxHQTJJakQ7a0JBM0lvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZ2xvYmFsVGhpcy5tb25zdGVyUmVwID0gMFxyXG5nbG9iYWxUaGlzLnlvdVJlcCA9IDBcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBsYWJlbCBoaeG7g24gdGjhu4sgJVxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcGVyY2VudExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGw6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShbY2MuQXVkaW9DbGlwXSlcclxuICAgIGxpc3RTb3VuZE1vbnN0ZXI6IGNjLkF1ZGlvQ2xpcFtdID0gW11cclxuICAgIGNvdW50SGl0ID0gNlxyXG4gICAgcmROZXh0ID0gN1xyXG4gICAgY291bnRTb3VuZEhlcm8gPSAwXHJcbiAgICByZXAgPSAwXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBpc01vbnN0ZXIgPSBmYWxzZVxyXG5cclxuICAgIGdhbWVQTGF5ID0gbnVsbFxyXG4gICAgaXNGaXJzdCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIGZpbGxUd2VlbiA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUExheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkd5bTNcIilcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlICUgbMO6YyBzdGFydFxyXG4gICAgICAgIHRoaXMudXBkYXRlUGVyY2VudCgpXHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVQTGF5LmlzRW5kZ2FtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc01vbnN0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudEhpdCsrXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50SGl0ID09IHRoaXMucmROZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50SGl0ID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZE5leHQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDZcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5saXN0U291bmRNb25zdGVyW3RoaXMuY291bnRTb3VuZEhlcm9dLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRTb3VuZEhlcm8rK1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRTb3VuZEhlcm8gPj0gdGhpcy5saXN0U291bmRNb25zdGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRTb3VuZEhlcm8gPSAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXArKztcclxuICAgICAgICBpZiAodGhpcy5yZXAgPT0gNTApIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUExheS50bzUwcmVwKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTW9uc3Rlcikge1xyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLm1vbnN0ZXJSZXAgPSB0aGlzLnJlcFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy55b3VSZXAgPSB0aGlzLnJlcFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLnJlcC50b1N0cmluZygpXHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBmaWxsIHRoZW8gcmVwXHJcbiAgICAgICAgLy8gdGhpcy5maWxsLmZpbGxSYW5nZSA9ICgxMDAgLSB0aGlzLnJlcCkgLyAxMDBcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGxhYmVsICVcclxuICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnQoKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5yZXAgPT0gMTAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9uc3Rlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUExheS5vbkVuZEdhbWUoZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQTGF5Lm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRGaWxsKClcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZVBlcmNlbnQoKSB7XHJcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBNYXRoLmZsb29yKHRoaXMuZmlsbC5maWxsUmFuZ2UgKiAxMDApXHJcbiAgICAgICAgdGhpcy5wZXJjZW50TGFiZWwuc3RyaW5nID0gcGVyY2VudCArIFwiJVwiXHJcbiAgICB9XHJcbiAgICBzdG9wRmlsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5maWxsVHdlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsVHdlZW4uc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxUd2VlbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZEZpbGwoKSB7XHJcbiAgICAgICAgdGhpcy5maWxsVHdlZW4gPSBjYy50d2Vlbih0aGlzLmZpbGwpXHJcbiAgICAgICAgICAgIC50byhcclxuICAgICAgICAgICAgICAgIDgwLFxyXG4gICAgICAgICAgICAgICAgeyBmaWxsUmFuZ2U6IDAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsLmZpbGxSYW5nZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBMYXkub25FbmRHYW1lKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZpbGxUd2Vlbi5zdGFydCgpXHJcbiAgICAgICAgLy8gLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZU1vbnN0ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWxsVHdlZW4gPSBjYy50d2Vlbih0aGlzLmZpbGwpXHJcbiAgICAgICAgICAgIC50byhcclxuICAgICAgICAgICAgICAgIDMwLFxyXG4gICAgICAgICAgICAgICAgeyBmaWxsUmFuZ2U6IDAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsLmZpbGxSYW5nZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBMYXkub25FbmRHYW1lKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZpbGxUd2Vlbi5zdGFydCgpO1xyXG4gICAgfVxyXG59Il19