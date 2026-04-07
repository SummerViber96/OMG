"use strict";
cc._RF.push(module, '6e65fEZiEFJqILHmRkzgt0r', 'Banh');
// scripts/CafeCream/Banh.ts

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
        _this.tag = 0;
        _this.isChin = false;
        _this.gamePlay = null;
        _this.isbanh = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.addEndEventSpine();
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.setOn = function () {
        this.anim.node.active = true;
        this.anim.setAnimation(0, "lv1-song", false);
        this.isbanh = true;
    };
    NewClass.prototype.addEndEventSpine = function () {
        var self = this;
        this.anim.setCompleteListener(function (track) {
            if (track.animation.name == "lv1-song") {
                self.setChin();
                // console.log(this.isChin)
            }
            // update (dt) {}
        });
    };
    NewClass.prototype.setChin = function () {
        this.isChin = true;
        this.anim.setAnimation(0, "lv1-chin", true);
        // this.node.getComponent(cc.Button).enabled = true
    };
    NewClass.prototype.btn_click = function () {
        console.log(this.isChin);
        // if (this.isChin == true) {
        // if (!this.isChin) return;
        if (!this.isbanh)
            return;
        this.isbanh = false;
        this.gamePlay.arrBep[this.tag] = false;
        this.gamePlay.btn_bep(this.tag);
        this.anim.node.active = false;
        this.node.getComponent(cc.Button).enabled = false;
        // }
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