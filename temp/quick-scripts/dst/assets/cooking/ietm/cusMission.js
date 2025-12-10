
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
        _this.buger = false;
        _this.vegettable = false;
        _this.meat = false;
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
        var _this = this;
        if (this.isEnd)
            return;
        var breadComp = bread.getComponent("preBread");
        if (this.bread == true && this.hotDog == breadComp.isHotDog && this.chili == breadComp.isTuongCa) {
            this.updateMission();
        }
        else {
            this.scheduleOnce(function () {
                _this.isEnd = true;
                _this.end(false);
                cc.audioEngine.play(_this.gamePlay.soundWrong, false, 0.8);
            }, 0.4);
        }
    };
    NewClass.prototype.checkBuger = function (buger) {
        var _this = this;
        if (this.isEnd)
            return;
        var breadComp = buger.getComponent("buger");
        if (this.buger == true && this.meat == breadComp.isMeat && this.vegettable == breadComp.isvegettable) {
            this.updateMission();
        }
        else {
            this.scheduleOnce(function () {
                _this.isEnd = true;
                _this.end(false);
                cc.audioEngine.play(_this.gamePlay.soundWrong, false, 0.8);
            }, 0.4);
        }
    };
    NewClass.prototype.updateMission = function () {
        var _this = this;
        this.count--;
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.gamePlay.soundYes, false, 1);
            cc.audioEngine.play(_this.gamePlay.soundNice, false, 0.5);
            _this.node.getChildByName("vfx_coin").active = true;
            _this.node.getChildByName("vfx_coin").getComponent(cc.Animation).play();
            globalThis.gold += 50;
            _this.anim.setAnimation(0, "8.happy", true);
            _this.pop.getChildByName("right").active = true;
            _this.pop.getChildByName("right").getComponent(cc.Animation).play();
        }, 0.4);
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
            cc.tween(_this.node).to(1, { position: cc.v3(-900, 123.591) }).call(function () {
                _this.node.active = false;
                _this.gamePlay.nextCus(value);
            }).start();
        }, 0.5);
        if (value == true) {
            this.anim.setAnimation(0, "8.happy", false);
            this.pop.getChildByName("right").active = true;
            this.node.getChildByName("happy").active = true;
        }
        else {
            this.anim.setAnimation(0, "7.angry_idle", false);
            this.pop.getChildByName("wrong").active = true;
            this.node.getChildByName("angry").active = true;
        }
    };
    NewClass.prototype.update = function (dt) {
        this.lbCount.string = this.count.toString();
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
        property(cc.Boolean)
    ], NewClass.prototype, "buger", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "vegettable", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "meat", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcY3VzTWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9IQztRQWxIRyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUVkLFdBQUssR0FBRyxLQUFLLENBQUE7UUFFYixXQUFLLEdBQUcsS0FBSyxDQUFBO1FBRWIsZ0JBQVUsR0FBRyxLQUFLLENBQUE7UUFFbEIsVUFBSSxHQUFHLEtBQUssQ0FBQTtRQUVaLFdBQUssR0FBRyxDQUFDLENBQUE7UUFFVCxhQUFPLEdBQWEsSUFBSSxDQUFBO1FBRXhCLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsVUFBSSxHQUFnQixJQUFJLENBQUE7UUFDeEIsV0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNiLGNBQVEsR0FBRyxJQUFJLENBQUE7O0lBOEZuQixDQUFDO0lBN0ZHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFbkUsQ0FBQztJQUNELDZCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQWhCLGlCQWNDO1FBYkcsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDdkIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMs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LENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQ0FDRTtJQXBCUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0g1QjtJQUFELGVBQUM7Q0FwSEQsQUFvSEMsQ0FwSHFDLEVBQUUsQ0FBQyxTQUFTLEdBb0hqRDtrQkFwSG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGJyZWFkID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgaG90RG9nID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgY2hpbGkgPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBidWdlciA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIHZlZ2V0dGFibGUgPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBtZWF0ID0gZmFsc2VcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgY291bnQgPSAzXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkNvdW50OiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9wOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsXHJcbiAgICBpc0VuZCA9IGZhbHNlXHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lQXBwXCIpXHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tCcmVhZChicmVhZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGJyZWFkQ29tcCA9IGJyZWFkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmJyZWFkID09IHRydWUgJiYgdGhpcy5ob3REb2cgPT0gYnJlYWRDb21wLmlzSG90RG9nICYmIHRoaXMuY2hpbGkgPT0gYnJlYWRDb21wLmlzVHVvbmdDYSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1pc3Npb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kV3JvbmcsIGZhbHNlLCAwLjgpXHJcbiAgICAgICAgICAgIH0sIDAuNClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tCdWdlcihidWdlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBicmVhZENvbXAgPSBidWdlci5nZXRDb21wb25lbnQoXCJidWdlclwiKTtcclxuICAgICAgICBpZiAodGhpcy5idWdlciA9PSB0cnVlICYmIHRoaXMubWVhdCA9PSBicmVhZENvbXAuaXNNZWF0ICYmIHRoaXMudmVnZXR0YWJsZSA9PSBicmVhZENvbXAuaXN2ZWdldHRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWlzc2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmQoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRXcm9uZywgZmFsc2UsIDAuOClcclxuICAgICAgICAgICAgfSwgMC40KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVNaXNzaW9uKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNvdW50LS07XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRZZXMsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmROaWNlLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhfY29pblwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZmeF9jb2luXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gNTBcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIjguaGFwcHlcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgICAgIH0sIDAuNClcclxuICAgICAgICBpZiAodGhpcy5jb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmVuZCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVuZCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuc3VjY2Vzc0N1cygpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRDbG9zZVBvcCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnBvcCkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtOTAwLCAxMjMuNTkxKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5uZXh0Q3VzKHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiOC5oYXBweVwiLCBmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhcHB5XCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiNy5hbmdyeV9pZGxlXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcIndyb25nXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYW5ncnlcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5sYkNvdW50LnN0cmluZyA9IHRoaXMuY291bnQudG9TdHJpbmcoKVxyXG5cclxuICAgIH1cclxuICAgIGhhcHB5KCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJoYXBweTEuNXNcIiwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=