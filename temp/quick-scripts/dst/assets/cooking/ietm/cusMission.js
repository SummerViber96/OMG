
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cooking/ietm/cusMission.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2147a0Ce3ZCdIsZ8wX2Vtd8', 'cusMission');
// cooking/ietm/cusMission.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bread = true;
        _this.hotDog = true;
        _this.chili = false;
        _this.count = 3;
        _this.lbCount = null;
        _this.pop = null;
        _this.anim = null;
        _this.isEnd = false;
        _this.gamePlay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameApp");
    };
    NewClass.prototype.checkBread = function (bread) {
        if (this.isEnd)
            return;
        var breadComp = bread.getComponent("preBread");
        if (this.hotDog == breadComp.isHotDog && this.chili == breadComp.isTuongCa) {
            this.updateMission();
        }
        else {
            this.isEnd = true;
            this.end(false);
            cc.audioEngine.play(this.gamePlay.soundWrong, false, 1);
        }
    };
    NewClass.prototype.updateMission = function () {
        this.count--;
        this.anim.setAnimation(0, "8.happy", true);
        if (this.count == 0) {
            this.isEnd = true;
            this.end(true);
        }
    };
    NewClass.prototype.end = function (value) {
        var _this = this;
        this.gamePlay.successCus();
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.gamePlay.soundClosePop, false, 1);
            cc.tween(_this.pop).to(0.3, { scale: 0 }).start();
            cc.tween(_this.node).to(0.8, { position: cc.v3(-700, 123.591) }).call(function () {
                _this.node.active = false;
                _this.gamePlay.nextCus();
            }).start();
        }, 0.5);
        if (value == true) {
            this.anim.setAnimation(0, "8.happy", false);
        }
        else {
            this.anim.setAnimation(0, "7.angry_idle", false);
        }
    };
    NewClass.prototype.update = function (dt) {
        // this.lbCount.string = this.count.toString()
    };
    NewClass.prototype.happy = function () {
        var _this = this;
        this.anim.setAnimation(0, "happy1.5s", false);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "idle", true);
        }, 1);
    };
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "bread", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "hotDog", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "chili", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "count", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCount", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcY3VzTWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZFQztRQTNFRyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUVkLFdBQUssR0FBRyxLQUFLLENBQUE7UUFFYixXQUFLLEdBQUcsQ0FBQyxDQUFBO1FBRVQsYUFBTyxHQUFhLElBQUksQ0FBQTtRQUV4QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBQ3hCLFdBQUssR0FBRyxLQUFLLENBQUE7UUFDYixjQUFRLEdBQUcsSUFBSSxDQUFBOztJQTZEbkIsQ0FBQztJQTVERyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRW5FLENBQUM7SUFDRCw2QkFBVSxHQUFWLFVBQVcsS0FBSztRQUNaLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ3ZCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3hFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtTQUN2QjthQUNJO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxL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Q0U7SUFkUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkU1QjtJQUFELGVBQUM7Q0E3RUQsQUE2RUMsQ0E3RXFDLEVBQUUsQ0FBQyxTQUFTLEdBNkVqRDtrQkE3RW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGJyZWFkID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgaG90RG9nID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgY2hpbGkgPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBjb3VudCA9IDNcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ291bnQ6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3A6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIGlzRW5kID0gZmFsc2VcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVBcHBcIilcclxuXHJcbiAgICB9XHJcbiAgICBjaGVja0JyZWFkKGJyZWFkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmQpIHJldHVybjtcclxuICAgICAgICBsZXQgYnJlYWRDb21wID0gYnJlYWQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuaG90RG9nID09IGJyZWFkQ29tcC5pc0hvdERvZyAmJiB0aGlzLmNoaWxpID09IGJyZWFkQ29tcC5pc1R1b25nQ2EpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNaXNzaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZW5kKGZhbHNlKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1pc3Npb24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudC0tO1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCI4LmhhcHB5XCIsIHRydWUpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5kKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZW5kKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5zdWNjZXNzQ3VzKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZENsb3NlUG9wLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTcwMCwgMTIzLjU5MSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubmV4dEN1cygpXHJcblxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCI4LmhhcHB5XCIsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIjcuYW5ncnlfaWRsZVwiLCBmYWxzZSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIHRoaXMubGJDb3VudC5zdHJpbmcgPSB0aGlzLmNvdW50LnRvU3RyaW5nKClcclxuXHJcbiAgICB9XHJcbiAgICBoYXBweSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiaGFwcHkxLjVzXCIsIGZhbHNlKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSlcclxuXHJcbiAgICAgICAgfSwxKVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=