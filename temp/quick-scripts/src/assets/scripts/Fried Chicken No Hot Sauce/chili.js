"use strict";
cc._RF.push(module, '73f60y6a1hAe4yvrClB4CYd', 'chili');
// scripts/Fried Chicken No Hot Sauce/chili.ts

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
        _this.sauce = null;
        _this.soundCream1 = null;
        _this.soundCream2 = null;
        _this.gamePlay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.onSauce = function (value) {
        if (value == 1) {
            this.sauce.children[0].active = true;
        }
        else {
            this.sauce.children[1].active = true;
        }
    };
    NewClass.prototype.onSound = function (value) {
        if (value == 1) {
            cc.audioEngine.play(this.soundCream1, false, 0.5);
        }
        else {
            cc.audioEngine.play(this.soundCream2, false, 0.5);
        }
    };
    NewClass.prototype.startSauce = function () {
        this.node.children[0].active = false;
    };
    NewClass.prototype.end = function () {
        this.gamePlay.setReadyChicken();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sauce", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCream1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCream2", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();