
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HeW0vU2NyaXB0L3JlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtBQUN6QixVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUVmLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMklDO1FBeElHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsbUJBQW1CO1FBRW5CLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLFVBQUksR0FBYyxJQUFJLENBQUE7UUFFdEIsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQTtRQUNyQyxjQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQ1osWUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNWLG9CQUFjLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFHUCxlQUFTLEdBQUcsS0FBSyxDQUFBO1FBRWpCLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixhQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ1AsZUFBUyxHQUFHLElBQUksQ0FBQzs7SUFvSDdCLENBQUM7SUFsSEcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUU1RCxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxzQkFBRyxHQUFIO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBRXBDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDZixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUMvQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDekUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUNyQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtvQkFDckQsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUE7aUJBQzFCO2FBQ0o7U0FDSjtRQUNELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUE7U0FDbkM7YUFDSTtZQUNELFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQTtTQUMvQjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFdkMsdUJBQXVCO1FBQ3ZCLCtDQUErQztRQUUvQyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBRXBCLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUNqQztpQkFDSTtnQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNoQztTQUNKO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtTQUN0QjtJQUNMLENBQUM7SUFDRCxnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFBO0lBQzVDLENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXRCRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQixFQUFFLENBQ0MsRUFBRSxFQUNGLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUNoQjtZQUNJLFFBQVEsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2pDLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBRTFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUVyQixPQUFPLEtBQUssQ0FBQztZQUNqQixDQUFDO1NBQ0osQ0FDSjthQUNBLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3RCLFlBQVk7SUFDaEIsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFBQSxpQkFzQkM7UUFyQkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDL0IsRUFBRSxDQUNDLEVBQUUsRUFDRixFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFDaEI7WUFDSSxRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLO2dCQUNqQyxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUUxQyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFckIsT0FBTyxLQUFLLENBQUM7WUFDakIsQ0FBQztTQUNKLENBQ0o7YUFDQSxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFBO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBdklEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFJdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNFO0lBRXRCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3NEQUNZO0lBT3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7K0NBQ0o7SUFuQkEsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJJNUI7SUFBRCxlQUFDO0NBM0lELEFBMklDLENBM0lxQyxFQUFFLENBQUMsU0FBUyxHQTJJakQ7a0JBM0lvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZ2xvYmFsVGhpcy5tb25zdGVyUmVwID0gMFxuZ2xvYmFsVGhpcy55b3VSZXAgPSAwXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIC8vIGxhYmVsIGhp4buDbiB0aOG7iyAlXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHBlcmNlbnRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBmaWxsOiBjYy5TcHJpdGUgPSBudWxsXG4gICAgQHByb3BlcnR5KFtjYy5BdWRpb0NsaXBdKVxuICAgIGxpc3RTb3VuZE1vbnN0ZXI6IGNjLkF1ZGlvQ2xpcFtdID0gW11cbiAgICBjb3VudEhpdCA9IDZcbiAgICByZE5leHQgPSA3XG4gICAgY291bnRTb3VuZEhlcm8gPSAwXG4gICAgcmVwID0gMFxuXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgaXNNb25zdGVyID0gZmFsc2VcblxuICAgIGdhbWVQTGF5ID0gbnVsbFxuICAgIGlzRmlyc3QgPSBmYWxzZVxuICAgIHByaXZhdGUgZmlsbFR3ZWVuID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVQTGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR3ltM1wiKVxuXG4gICAgICAgIC8vIHVwZGF0ZSAlIGzDumMgc3RhcnRcbiAgICAgICAgdGhpcy51cGRhdGVQZXJjZW50KClcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVQTGF5LmlzRW5kZ2FtZSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLmlzTW9uc3Rlcikge1xuICAgICAgICAgICAgdGhpcy5jb3VudEhpdCsrXG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudEhpdCA9PSB0aGlzLnJkTmV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnRIaXQgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5yZE5leHQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDZcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubGlzdFNvdW5kTW9uc3Rlclt0aGlzLmNvdW50U291bmRIZXJvXSwgZmFsc2UsIDEpXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudFNvdW5kSGVybysrXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRTb3VuZEhlcm8gPj0gdGhpcy5saXN0U291bmRNb25zdGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50U291bmRIZXJvID0gMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcCsrO1xuICAgICAgICBpZiAodGhpcy5yZXAgPT0gNTApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBMYXkudG81MHJlcCgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc01vbnN0ZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbFRoaXMubW9uc3RlclJlcCA9IHRoaXMucmVwXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWxUaGlzLnlvdVJlcCA9IHRoaXMucmVwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMucmVwLnRvU3RyaW5nKClcblxuICAgICAgICAvLyB1cGRhdGUgZmlsbCB0aGVvIHJlcFxuICAgICAgICAvLyB0aGlzLmZpbGwuZmlsbFJhbmdlID0gKDEwMCAtIHRoaXMucmVwKSAvIDEwMFxuXG4gICAgICAgIC8vIHVwZGF0ZSBsYWJlbCAlXG4gICAgICAgIHRoaXMudXBkYXRlUGVyY2VudCgpXG5cbiAgICAgICAgaWYgKHRoaXMucmVwID09IDEwMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb25zdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUExheS5vbkVuZEdhbWUoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQTGF5Lm9uRW5kR2FtZSh0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3QpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEZpbGwoKVxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVBlcmNlbnQoKSB7XG4gICAgICAgIGxldCBwZXJjZW50ID0gTWF0aC5mbG9vcih0aGlzLmZpbGwuZmlsbFJhbmdlICogMTAwKVxuICAgICAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSBwZXJjZW50ICsgXCIlXCJcbiAgICB9XG4gICAgc3RvcEZpbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbGxUd2Vlbikge1xuICAgICAgICAgICAgdGhpcy5maWxsVHdlZW4uc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5maWxsVHdlZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRGaWxsKCkge1xuICAgICAgICB0aGlzLmZpbGxUd2VlbiA9IGNjLnR3ZWVuKHRoaXMuZmlsbClcbiAgICAgICAgICAgIC50byhcbiAgICAgICAgICAgICAgICA4MCxcbiAgICAgICAgICAgICAgICB7IGZpbGxSYW5nZTogMCB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCByYXRpbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbC5maWxsUmFuZ2UgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGVyY2VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxsLmZpbGxSYW5nZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJjZW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUExheS5vbkVuZEdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgdGhpcy5maWxsVHdlZW4uc3RhcnQoKVxuICAgICAgICAvLyAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICB1cGdyYWRlTW9uc3RlcigpIHtcbiAgICAgICAgdGhpcy5maWxsVHdlZW4gPSBjYy50d2Vlbih0aGlzLmZpbGwpXG4gICAgICAgICAgICAudG8oXG4gICAgICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICAgICAgeyBmaWxsUmFuZ2U6IDAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAoc3RhcnQsIGVuZCwgY3VycmVudCwgcmF0aW8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGwuZmlsbFJhbmdlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsbC5maWxsUmFuZ2UgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGVyY2VudCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBMYXkub25FbmRHYW1lKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHRoaXMuZmlsbFR3ZWVuLnN0YXJ0KCk7XG4gICAgfVxufSJdfQ==