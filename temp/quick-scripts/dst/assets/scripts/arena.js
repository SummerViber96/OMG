
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FyZW5hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0VDO1FBL0RHLG1CQUFhLEdBQUcsR0FBRyxDQUFDO1FBRXBCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFDekIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUSxHQUFHLElBQUksQ0FBQTs7UUF5RGYsaUJBQWlCO0lBQ3JCLENBQUM7SUF6REcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBQ0QsMEJBQU8sR0FBUCxVQUFRLEtBQUs7UUFBYixpQkFtREM7UUFsREcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUE7WUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFBO1lBQzFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JELElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO29CQUM3QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDckIsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7d0JBQzVCLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUE7cUJBQzlCO29CQUNELFNBQVM7b0JBQ1Qsa0NBQWtDO29CQUNsQyxJQUFJO29CQUNKLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO3dCQUM1QixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUUzQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7d0JBRTVCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO3dCQUNWLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7d0JBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO3dCQUNsRCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTt3QkFDakQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUVoRSw0QkFBNEI7d0JBQzVCLGdDQUFnQzt3QkFDaEMsd0RBQXdEO3dCQUV4RCxVQUFVO3FCQUViO3lCQUNJLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO3dCQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUUzQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7d0JBRTVCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO3dCQUNWLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7d0JBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO3dCQUNsRCw0QkFBNEI7d0JBQzVCLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUE7d0JBRXpCLFFBQVE7cUJBRVg7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtpQkFDekI7WUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUViO0lBRUwsQ0FBQztJQTVERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO21EQUNEO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFMUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0U1QjtJQUFELGVBQUM7Q0FsRUQsQUFrRUMsQ0FsRXFDLEVBQUUsQ0FBQyxTQUFTLEdBa0VqRDtrQkFsRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIGN1cnJlbnRUYXJnZXQgPSAyMDA7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXG4gICAgaXNTdWNlc3MgPSBmYWxzZTtcbiAgICBjb3VudCA9IDA7XG4gICAgZ2FtZVBsYXkgPSBudWxsXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJJQ1lfMTlcIilcbiAgICB9XG4gICAgdXBncmFkZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdWNlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnQgKz0gdmFsdWVcbiAgICAgICAgICAgIGxldCBmaWxsID0gdGhpcy5jb3VudCAvIHRoaXMuY3VycmVudFRhcmdldFxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5maWxsQmFyKS50bygwLjUsIHsgZmlsbFJhbmdlOiBmaWxsIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Y2VzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImFyZW5hMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnVwZGF0ZU9wZW4xKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2FtZVBsYXkudXBkYXRlT3BlbjIoKVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImFyZW5hM1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMywgeyBzY2FsZTogMCB9KS5jYWxsKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmZhcm0zLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubGlzdEFycm93LmNoaWxkcmVuWzVdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RBcnJvdy5jaGlsZHJlbls2XS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzVGFyZ2V0RHJhdyA9IHRoaXMuZ2FtZVBsYXkubGlzdEFycm93LmNoaWxkcmVuWzZdXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIm9uIGFycm93IDZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RBcnJvdy5jaGlsZHJlbls2XS5hY3RpdmUgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDAuNSlcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubm9kZS5uYW1lID09IFwiYXJlbmE0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLmNhbGwoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuZmFybTQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5saXN0QXJyb3cuY2hpbGRyZW5bNl0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkub25FbmRHYW1lKClcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSwgMSlcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW9wZGF0ZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnN0YXJ0KClcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19