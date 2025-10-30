"use strict";
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