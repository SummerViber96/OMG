
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
        cc.tween(this.fill)
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
        })
            .start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXHJlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtBQUN6QixVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUVmLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNEhDO1FBekhHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsbUJBQW1CO1FBRW5CLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLFVBQUksR0FBYyxJQUFJLENBQUE7UUFFdEIsU0FBRyxHQUFHLENBQUMsQ0FBQTtRQUdQLGVBQVMsR0FBRyxLQUFLLENBQUE7UUFFakIsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLGFBQU8sR0FBRyxLQUFLLENBQUE7UUFDUCxlQUFTLEdBQUMsSUFBSSxDQUFDOztJQXlHM0IsQ0FBQztJQXZHRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTVELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVELHNCQUFHLEdBQUg7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUFFLE9BQU87UUFFcEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRVgsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQzFCO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLFVB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SSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUVyQixPQUFPLEtBQUssQ0FBQztZQUNqQixDQUFDO1NBQ0osQ0FDSjthQUNBLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXhIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBSXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDRTtJQUt0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUNKO0lBZkEsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRINUI7SUFBRCxlQUFDO0NBNUhELEFBNEhDLENBNUhxQyxFQUFFLENBQUMsU0FBUyxHQTRIakQ7a0JBNUhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZ2xvYmFsVGhpcy5tb25zdGVyUmVwID0gMFxyXG5nbG9iYWxUaGlzLnlvdVJlcCA9IDBcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBsYWJlbCBoaeG7g24gdGjhu4sgJVxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcGVyY2VudExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGw6IGNjLlNwcml0ZSA9IG51bGxcclxuXHJcbiAgICByZXAgPSAwXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBpc01vbnN0ZXIgPSBmYWxzZVxyXG5cclxuICAgIGdhbWVQTGF5ID0gbnVsbFxyXG4gICAgaXNGaXJzdCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIGZpbGxUd2Vlbj1udWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBMYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHeW0zXCIpXHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSAlIGzDumMgc3RhcnRcclxuICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnQoKVxyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lUExheS5pc0VuZGdhbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5yZXArKztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVwID09IDUwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBMYXkudG81MHJlcCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc01vbnN0ZXIpIHtcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5tb25zdGVyUmVwID0gdGhpcy5yZXBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMueW91UmVwID0gdGhpcy5yZXBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy5yZXAudG9TdHJpbmcoKVxyXG5cclxuICAgICAgICAvLyB1cGRhdGUgZmlsbCB0aGVvIHJlcFxyXG4gICAgICAgIC8vIHRoaXMuZmlsbC5maWxsUmFuZ2UgPSAoMTAwIC0gdGhpcy5yZXApIC8gMTAwXHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBsYWJlbCAlXHJcbiAgICAgICAgdGhpcy51cGRhdGVQZXJjZW50KClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVwID09IDEwMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vbnN0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBMYXkub25FbmRHYW1lKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUExheS5vbkVuZEdhbWUodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRmlsbCgpXHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVQZXJjZW50KCkge1xyXG4gICAgICAgIGxldCBwZXJjZW50ID0gTWF0aC5mbG9vcih0aGlzLmZpbGwuZmlsbFJhbmdlICogMTAwKVxyXG4gICAgICAgIHRoaXMucGVyY2VudExhYmVsLnN0cmluZyA9IHBlcmNlbnQgKyBcIiVcIlxyXG4gICAgfVxyXG4gICAgc3RvcEZpbGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsbFR3ZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFR3ZWVuLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsVHdlZW4gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvYWRGaWxsKCkge1xyXG4gICAgICAgIHRoaXMuZmlsbFR3ZWVuID0gY2MudHdlZW4odGhpcy5maWxsKVxyXG4gICAgICAgICAgICAudG8oXHJcbiAgICAgICAgICAgICAgICA4MCxcclxuICAgICAgICAgICAgICAgIHsgZmlsbFJhbmdlOiAwIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCByYXRpbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiByYXRpbztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbC5maWxsUmFuZ2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJjZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbC5maWxsUmFuZ2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJjZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQTGF5Lm9uRW5kR2FtZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFR3ZWVuLnN0YXJ0KClcclxuICAgICAgICAvLyAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlTW9uc3RlcigpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGwpXHJcbiAgICAgICAgICAgIC50byhcclxuICAgICAgICAgICAgICAgIDMwLFxyXG4gICAgICAgICAgICAgICAgeyBmaWxsUmFuZ2U6IDAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsLmZpbGxSYW5nZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBMYXkub25FbmRHYW1lKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0iXX0=