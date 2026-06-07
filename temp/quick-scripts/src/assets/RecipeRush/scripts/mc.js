"use strict";
cc._RF.push(module, '57915vrfK5CpYr2WpCyKiGH', 'mc');
// RecipeRush/scripts/mc.ts

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
        _this.preChicken = null;
        _this.khay = null;
        _this.anim = null;
        _this.chicken = false;
        _this.arrPos = [cc.v3(-190, -39), cc.v3(-207, -323), cc.v3(-207, -468)];
        _this.localId = 0;
        _this.gamePlay = null;
        _this.arrChicken = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.node.position = cc.v3(207, -58);
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.addChicken = function () {
    };
    NewClass.prototype.moveToChicken = function () {
        var _this = this;
        this.anim.setAnimation(0, "Walk", true);
        if (this.localId == 0) {
            cc.tween(this.node).to(1, { position: this.arrPos[0] }).call(function () {
                _this.spawChicken();
            }).start();
        }
    };
    NewClass.prototype.spawChicken = function () {
        this.gamePlay.btnChicken.children[0].getComponent(sp.Skeleton).setAnimation(0, "lv1-tap", false);
        this.chicken = true;
        this.localId = 1;
        this.khay.active = true;
        this.anim.setAnimation(1, "L-arm", true);
        this.anim.setAnimation(0, "Idle", true);
        var chicken = cc.instantiate(this.preChicken);
        chicken.parent = this.khay;
        chicken.getComponent(cc.Animation).play();
        this.gamePlay.isMoving = false;
        this.arrChicken = chicken;
    };
    NewClass.prototype.moveToMachine = function () {
        var _this = this;
        this.node.zIndex = 2;
        this.anim.setAnimation(0, "Walk", true);
        this.localId = 2;
        if (this.localId == 1) {
            cc.tween(this.node).to(1, { position: this.arrPos[1] }).call(function () {
                var chicken = _this.arrChicken;
                _this.chicken = false;
                _this.gamePlay.btnMachine.getComponent("machine").cooking(chicken);
                _this.anim.setAnimation(1, "<None>", true);
                _this.anim.setAnimation(0, "Idle", true);
                _this.anim.setAnimation(1, "Idle", false);
                _this.khay.active = false;
                _this.localId = 2;
                _this.gamePlay.isMoving = false;
            }).start();
        }
        else if (this.localId == 2) {
            this.khay.active = true;
            this.anim.setAnimation(1, "L-arm", true);
            this.anim.setAnimation(0, "Idle", true);
            this.gamePlay.isMoving = false;
            var chicken = this.gamePlay.btnMachine.getComponent("machine").getChicken();
            chicken.parent = this.khay;
            chicken.getComponent(cc.Animation).play();
            chicken.getComponent("chicken").chin2();
            this.arrChicken = chicken;
        }
    };
    NewClass.prototype.moveToSauce = function () {
        var _this = this;
        this.node.zIndex = 2;
        this.anim.setAnimation(0, "Walk", true);
        this.node.scaleX = -1;
        if (this.localId == 2) {
            cc.tween(this.node).to(0.5, { position: this.arrPos[2] }).call(function () {
                var chicken = _this.arrChicken;
                _this.gamePlay.isMoving = false;
            }).start();
        }
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preChicken", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "khay", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();