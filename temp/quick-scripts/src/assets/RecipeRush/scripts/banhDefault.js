"use strict";
cc._RF.push(module, 'b7d52gWDddGsLoGkswEXSaj', 'banhDefault');
// RecipeRush/scripts/banhDefault.ts

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
        _this.preBanh = null;
        _this.soundSwoosh = null;
        _this.listBanhTren = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.spawbanh();
    };
    NewClass.prototype.spawbanh = function () {
        var _this = this;
        for (var i = 0; i < 4; i++) {
            this.scheduleOnce(function () {
                var banh = cc.instantiate(_this.preBanh);
                banh.parent = _this.node;
                banh.position = cc.v3(2638, -1729);
                banh.angle = 5;
                cc.audioEngine.play(_this.soundSwoosh, false, 1);
                cc.tween(banh).bezierTo(0.3, cc.v2(2638, -1729), cc.v2(2864, -1279 + 300), cc.v2(3038, -1437)).delay(0.3).bezierTo(0.4, cc.v2(3038, -1437), cc.v2(3176, -1214 + 300), cc.v2(3495, -1315)).call(function () {
                    banh.children[0].active = false;
                    banh.children[1].active = true;
                }).start();
                cc.tween(banh.children[0]).to(0.5, { angle: 0 }).start();
            }, 0.5 * i);
        }
        this.scheduleOnce(function () {
            _this.listBanhTren.children[0].active = true;
        }, 2);
        this.scheduleOnce(function () {
            _this.listBanhTren.children[1].active = true;
        }, 2.5);
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBanh", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSwoosh", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBanhTren", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();