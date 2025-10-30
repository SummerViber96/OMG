"use strict";
cc._RF.push(module, '6b905o1gD5LX64qqugnDXV+', 'transer');
// scripts/transer.ts

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
        _this.anim = null;
        _this.bag = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.move1 = function () {
        var _this = this;
        this.node.scaleX = -1;
        this.anim.setAnimation(0, "Walk", false);
        cc.tween(this.node).to(0.8, { position: cc.v3(-9, -219) }).call(function () {
            _this.transWood();
            _this.anim.setAnimation(0, "Idle", false);
        }).start();
    };
    NewClass.prototype.transWood = function () {
        var _this = this;
        var gamePlay = cc.Canvas.instance.node.getComponent("YC_7");
        var cus = gamePlay.arrCus[gamePlay.arrCus.length - 1];
        var count = 0;
        var _loop_1 = function (i) {
            var child = this_1.bag.children[i];
            var pos = child.position;
            pos = this_1.bag.convertToWorldSpaceAR(pos);
            pos = cus.convertToNodeSpaceAR(pos);
            child.parent = cus;
            child.position = pos;
            count++;
            cc.tween(child).delay(0.05 * count).bezierTo(0.3, cc.v2(pos.x, pos.y), cc.v2(pos.x / 2, pos.y + 200), cc.v2(0, 50)).call(function () {
                child.destroy();
            }).start();
        };
        var this_1 = this;
        for (var i = this.bag.childrenCount - 1; i >= 0; i--) {
            _loop_1(i);
        }
        this.scheduleOnce(function () {
            _this.move2();
            gamePlay.moveBack();
        }, 0.5);
    };
    NewClass.prototype.move2 = function () {
        var _this = this;
        this.node.scaleX = 1;
        this.anim.setAnimation(0, "Walk", false);
        cc.tween(this.node).to(0.8, { position: cc.v3(-127.8, -102) }).call(function () {
            // this.transWood()
            _this.anim.setAnimation(0, "Idle", false);
            cc.Canvas.instance.node.getComponent("YC_7").isMoveChar = false;
        }).start();
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bag", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();