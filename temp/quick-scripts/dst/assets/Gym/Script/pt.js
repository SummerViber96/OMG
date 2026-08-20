
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Gym/Script/pt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '788d1Fp8UhPB5zbZhlDwzXL', 'pt');
// Gym/Script/pt.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.tag = 0;
        _this.gamePlay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
    };
    NewClass.prototype.moveIn = function (fncDone) {
        var _this = this;
        this.node.active = true;
        var anim = this.anim;
        anim.setAnimation(0, "WalkOutL", true);
        anim.timeScale = 2;
        switch (this.tag) {
            case 0:
                cc.tween(this.node).to(2.6, { position: cc.v3(-1.6, -92) }).to(0.5, { position: cc.v3(-100, -80) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 1: //may day ta 1
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).call(function () {
                    _this.node.scaleX = -1;
                }).to(2, { position: cc.v3(698.565, -184.59) }).call(function () {
                    _this.node.scaleX = 1;
                }).to(1.5, { position: cc.v3(348.565, -333) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 2: //may boxing
                anim.setAnimation(0, "WalkOutL", true);
                anim.timeScale = 2;
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).call(function () {
                    _this.node.scaleX = -1;
                }).to(2, { position: cc.v3(850, -120) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    _this.node.scaleX = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 3: //may day ta 2
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).call(function () {
                    _this.node.scaleX = -1;
                }).to(2, { position: cc.v3(698.565, -184.59) }).call(function () {
                    _this.node.scaleX = 1;
                }).to(0.6, { position: cc.v3(572, -203) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 4: // may day 2
                cc.tween(this.node).to(0.4, { position: cc.v3(310, 52) }).to(0.5, { position: cc.v3(442, -35) }).to(0.8, { position: cc.v3(267, -146) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 5: //may day3
                cc.tween(this.node).to(1.5, { position: cc.v3(86, -10) }).to(0.5, { position: cc.v3(40, 14) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
            case 6: //may day3
                cc.tween(this.node).to(1, { position: cc.v3(182.844, 90) }).call(function () {
                    anim.setAnimation(0, "WorkFL", true);
                    anim.timeScale = 1;
                    fncDone();
                    _this.scheduleOnce(function () {
                        _this.moveOut();
                    }, 2);
                }).start();
                break;
        }
    };
    NewClass.prototype.moveOut = function () {
        var _this = this;
        var anim = this.anim;
        anim.setAnimation(0, "WalkOutL", true);
        switch (this.tag) {
            case 0:
                this.node.scaleX = -1;
                cc.tween(this.node).to(0.5, { position: cc.v3(-1.6, -92) }).to(2.6, { position: cc.v3(382, 120) }).call(function () {
                    _this.node.active = false;
                }).start();
                this.scheduleOnce(function () {
                    _this.gamePlay.openDoor();
                }, 2.6);
                break;
            case 1:
                this.node.scaleX = -1;
                cc.tween(this.node).to(1.5, { position: cc.v3(698.565, -184.59) }).call(function () {
                    _this.node.scaleX = 1;
                }).to(2, { position: cc.v3(310, 52) }).call(function () {
                    _this.node.scaleX = -1;
                }).to(0.4, { position: cc.v3(382, 120) }).call(function () {
                    _this.node.active = false;
                }).start();
                this.scheduleOnce(function () {
                    _this.gamePlay.openDoor();
                }, 3.5);
                break;
            case 2:
                this.node.scaleX = 1;
                cc.tween(this.node).to(2, { position: cc.v3(310, 52) }).call(function () {
                    _this.node.scaleX = -1;
                }).to(0.4, { position: cc.v3(382, 120) }).call(function () {
                    _this.node.active = false;
                }).start();
                this.scheduleOnce(function () {
                    _this.gamePlay.openDoor();
                }, 2);
                break;
        }
    };
    NewClass.prototype.update = function (dt) {
        // this.node.zIndex=-this.node.y
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXHB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUpDO1FBdEpHLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFDUCxjQUFRLEdBQUcsSUFBSSxDQUFBOztJQW1KbkIsQ0FBQztJQWpKRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRS9ELENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sT0FBTztRQUFkLGlCQTRGQztRQTNGRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDbEIsUUFBUSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2QsS0FBSyxDQUFDO2dCQUNGLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVB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Q0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUNMLE1BQU07U0FDYjtJQUNMLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLGdDQUFnQztJQUNwQyxDQUFDO0lBckpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0U7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5Q0FDZDtJQUxVLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5SjVCO0lBQUQsZUFBQztDQXpKRCxBQXlKQyxDQXpKcUMsRUFBRSxDQUFDLFNBQVMsR0F5SmpEO2tCQXpKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHRhZyA9IDBcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHeW1cIilcclxuXHJcbiAgICB9XHJcbiAgICBtb3ZlSW4oZm5jRG9uZSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgYW5pbSA9IHRoaXMuYW5pbVxyXG4gICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa091dExcIiwgdHJ1ZSlcclxuICAgICAgICBhbmltLnRpbWVTY2FsZSA9IDJcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudGFnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMi42LCB7IHBvc2l0aW9uOiBjYy52MygtMS42LCAtOTIpIH0pLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTEwMCwgLTgwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldvcmtGTFwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0udGltZVNjYWxlID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGZuY0RvbmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlT3V0KClcclxuICAgICAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTovL21heSBkYXkgdGEgMVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKDMxMCwgNTIpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICAgICAgfSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoNjk4LjU2NSwgLTE4NC41OSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgICAgIH0pLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMzQ4LjU2NSwgLTMzMykgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXb3JrRkxcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBhbmltLnRpbWVTY2FsZSA9IDFcclxuICAgICAgICAgICAgICAgICAgICBmbmNEb25lKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU91dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMjogLy9tYXkgYm94aW5nXHJcbiAgICAgICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtPdXRMXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBhbmltLnRpbWVTY2FsZSA9IDJcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygzMTAsIDUyKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgICAgIH0pLnRvKDIsIHsgcG9zaXRpb246IGNjLnYzKDg1MCwgLTEyMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXb3JrRkxcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBhbmltLnRpbWVTY2FsZSA9IDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGZuY0RvbmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlT3V0KClcclxuICAgICAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzovL21heSBkYXkgdGEgMlxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKDMxMCwgNTIpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICAgICAgfSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoNjk4LjU2NSwgLTE4NC41OSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgICAgIH0pLnRvKDAuNiwgeyBwb3NpdGlvbjogY2MudjMoNTcyLCAtMjAzKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldvcmtGTFwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0udGltZVNjYWxlID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGZuY0RvbmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlT3V0KClcclxuICAgICAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6Ly8gbWF5IGRheSAyXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoMzEwLCA1MikgfSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52Myg0NDIsIC0zNSkgfSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygyNjcsIC0xNDYpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV29ya0ZMXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbS50aW1lU2NhbGUgPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgZm5jRG9uZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVPdXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1Oi8vbWF5IGRheTNcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52Myg4NiwgLTEwKSB9KS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDQwLCAxNCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXb3JrRkxcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBhbmltLnRpbWVTY2FsZSA9IDFcclxuICAgICAgICAgICAgICAgICAgICBmbmNEb25lKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU91dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6Ly9tYXkgZGF5M1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygxODIuODQ0LCA5MCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXb3JrRkxcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBhbmltLnRpbWVTY2FsZSA9IDFcclxuICAgICAgICAgICAgICAgICAgICBmbmNEb25lKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU91dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVPdXQoKSB7XHJcblxyXG4gICAgICAgIGxldCBhbmltID0gdGhpcy5hbmltXHJcbiAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrT3V0TFwiLCB0cnVlKVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50YWcpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTEuNiwgLTkyKSB9KS50bygyLjYsIHsgcG9zaXRpb246IGNjLnYzKDM4MiwgMTIwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5vcGVuRG9vcigpXHJcbiAgICAgICAgICAgICAgICB9LCAyLjYpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52Myg2OTguNTY1LCAtMTg0LjU5KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICAgICAgfSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoMzEwLCA1MikgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgICAgICB9KS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKDM4MiwgMTIwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lm9wZW5Eb29yKClcclxuICAgICAgICAgICAgICAgIH0sIDMuNSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoMzEwLCA1MikgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgICAgICB9KS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKDM4MiwgMTIwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5vcGVuRG9vcigpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnpJbmRleD0tdGhpcy5ub2RlLnlcclxuICAgIH1cclxufVxyXG4iXX0=