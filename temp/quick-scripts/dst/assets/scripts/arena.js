
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/arena.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b3a3nORe5Au4O7QsLuPyhF', 'arena');
// scripts/arena.ts

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
        _this.currentTarget = 200;
        _this.fillBar = null;
        _this.isSucess = false;
        _this.count = 0;
        _this.gamePlay = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("ICY_19");
    };
    NewClass.prototype.upgrade = function (value) {
        var _this = this;
        if (!this.isSucess) {
            this.count += value;
            var fill = this.count / this.currentTarget;
            cc.tween(this.fillBar).to(0.5, { fillRange: fill }).call(function () {
                if (_this.fillBar.fillRange >= 1) {
                    _this.isSucess = true;
                    if (_this.node.name == "arena1") {
                        _this.gamePlay.updateOpen1();
                    }
                    // else {
                    //     this.gamePlay.updateOpen2()
                    // }
                    if (_this.node.name == "arena3") {
                        cc.tween(_this.node).to(0.3, { scale: 0 }).call(function () {
                            _this.node.active = false;
                        }).start();
                        _this.gamePlay.farm3.active = true;
                        _this.gamePlay.listArrow.children[5].active = false;
                        _this.gamePlay.listArrow.children[6].active = true;
                        _this.gamePlay.isTargetDraw = _this.gamePlay.listArrow.children[6];
                        // this.scheduleOnce(() => {
                        //     console.log("on arrow 6")
                        //     this.gamePlay.listArrow.children[6].active = true
                        // }, 0.5)
                    }
                    else if (_this.node.name == "arena4") {
                        cc.tween(_this.node).to(0.3, { scale: 0 }).call(function () {
                            _this.node.active = false;
                        }).start();
                        _this.gamePlay.farm4.active = true;
                        _this.gamePlay.listArrow.children[6].active = false;
                        // this.scheduleOnce(() => {
                        _this.gamePlay.onEndGame();
                        // }, 1)
                    }
                    console.log("uopdate");
                }
            }).start();
        }
    };
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "currentTarget", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillBar", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYXJlbmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrRUM7UUEvREcsbUJBQWEsR0FBRyxHQUFHLENBQUM7UUFFcEIsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUN6QixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixjQUFRLEdBQUcsSUFBSSxDQUFBOztRQXlEZixpQkFBaUI7SUFDckIsQ0FBQztJQXpERyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsS0FBSztRQUFiLGlCQW1EQztRQWxERyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQTtZQUNuQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUE7WUFDMUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDckQsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7b0JBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTt3QkFDNUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtxQkFDOUI7b0JBQ0QsU0FBUztvQkFDVCxrQ0FBa0M7b0JBQ2xDLElBQUk7b0JBQ0osSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7d0JBQzVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBRTNDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTt3QkFFNUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7d0JBQ1YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTt3QkFDakMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7d0JBQ2xELEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO3dCQUNqRCxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBRWhFLDRCQUE0Qjt3QkFDNUIsZ0NBQWdDO3dCQUNoQyx3REFBd0Q7d0JBRXhELFVBQVU7cUJBRWI7eUJBQ0ksSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7d0JBQ2pDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBRTNDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTt3QkFFNUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7d0JBQ1YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTt3QkFDakMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7d0JBQ2xELDRCQUE0Qjt3QkFDNUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQTt3QkFFekIsUUFBUTtxQkFFWDtvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2lCQUN6QjtZQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1NBRWI7SUFFTCxDQUFDO0lBNUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7bURBQ0Q7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSztJQUxSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrRTVCO0lBQUQsZUFBQztDQWxFRCxBQWtFQyxDQWxFcUMsRUFBRSxDQUFDLFNBQVMsR0FrRWpEO2tCQWxFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIGN1cnJlbnRUYXJnZXQgPSAyMDA7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlsbEJhcjogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgaXNTdWNlc3MgPSBmYWxzZTtcclxuICAgIGNvdW50ID0gMDtcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIklDWV8xOVwiKVxyXG4gICAgfVxyXG4gICAgdXBncmFkZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1N1Y2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ICs9IHZhbHVlXHJcbiAgICAgICAgICAgIGxldCBmaWxsID0gdGhpcy5jb3VudCAvIHRoaXMuY3VycmVudFRhcmdldFxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGxCYXIpLnRvKDAuNSwgeyBmaWxsUmFuZ2U6IGZpbGwgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxsQmFyLmZpbGxSYW5nZSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Y2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwiYXJlbmExXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS51cGRhdGVPcGVuMSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdhbWVQbGF5LnVwZGF0ZU9wZW4yKClcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwiYXJlbmEzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuZmFybTMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RBcnJvdy5jaGlsZHJlbls1XS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RBcnJvdy5jaGlsZHJlbls2XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNUYXJnZXREcmF3ID0gdGhpcy5nYW1lUGxheS5saXN0QXJyb3cuY2hpbGRyZW5bNl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwib24gYXJyb3cgNlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5nYW1lUGxheS5saXN0QXJyb3cuY2hpbGRyZW5bNl0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSwgMC41KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJhcmVuYTRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMywgeyBzY2FsZTogMCB9KS5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5mYXJtNC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubGlzdEFycm93LmNoaWxkcmVuWzZdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5vbkVuZEdhbWUoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW9wZGF0ZVwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=