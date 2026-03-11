"use strict";
cc._RF.push(module, '980c1qM1dBOyrrFCog8mA+p', 'timeClock');
// CakeAssembly/script/timeClock.ts

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
        _this.order = null;
        _this.lbCountTime = null;
        _this.clock = null;
        _this.timeBar = null;
        _this.guild = null;
        _this.isTime = 30;
        _this.gamePlay = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        var _this = this;
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        cc.tween(this.lbCountTime.node).to(0.3, { scale: 0.9 }).to(0.1, { scale: 1 }).call(function () {
            _this.scheduleOnce(function () {
                _this.click();
            }, 0.2);
        }).start();
    };
    NewClass.prototype.click = function () {
        var _this = this;
        this.clock.getComponent(cc.Animation).stop();
        this.clock.angle = 0;
        cc.tween(this.lbCountTime.node).to(0.3, { opacity: 0 }).start();
        this.gamePlay.moveClocktoUI(this.clock);
        cc.tween(this.node.children[0]).to(0.4, { opacity: 0 }).call(function () {
            _this.node.active = false;
            // this.timeBar.getComponent("barTime").countDown();
            // this.order.active = true
            // this.gamePlay.startGame()
            _this.guild.active = true;
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "order", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCountTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "clock", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "timeBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();