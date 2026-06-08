"use strict";
cc._RF.push(module, '32d54UTxD1PZqjw1KlF8Inw', 'chicken');
// RecipeRush/scripts/chicken.ts

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
        _this.sauce = null;
        _this.chinIdle = null;
        _this.tomato = null;
        _this.gamePlay = null;
        _this.isChin = false;
        _this.isSauce = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.song = function () {
        this.anim.node.active = true;
        this.anim.setAnimation(0, "lv1-song", true);
    };
    NewClass.prototype.chin = function () {
        this.anim.setAnimation(0, "lv1-chin", true);
    };
    NewClass.prototype.chin2 = function () {
        this.chinIdle.active = true;
        this.anim.node.active = false;
        this.isChin = true;
    };
    NewClass.prototype.addSauce = function () {
        this.sauce.active = true;
        this.node.getComponent(cc.Animation).play();
        this.isSauce = true;
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sauce", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "chinIdle", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tomato", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();