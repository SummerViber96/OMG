"use strict";
cc._RF.push(module, 'a92fcmngglMpIVNMNdHFs2c', 'diaPhomai');
// RecipeRush/scripts/diaPhomai.ts

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
        _this.sauces = null;
        _this.tag = 0;
        _this.fillBar = null;
        _this.fillYellow = null;
        _this.fillRed = null;
        _this.hindMay1 = null;
        _this.timeWaiting = 30;
        _this.gamePlay = null;
        _this.isSuccess = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        this.loadTime();
    };
    NewClass.prototype.loadTime = function () {
        var _this = this;
        cc.Tween.stopAllByTarget(this.fillBar);
        if (this.fillBar) {
            this.fillBar.fillRange = 1;
            var changedYellow_1 = false;
            var changedRed_1 = false;
            cc.tween(this.fillBar)
                .to(this.timeWaiting, { fillRange: 0 }, {
                progress: function (start, end, current, ratio) {
                    var value = start + (end - start) * ratio;
                    _this.fillBar.fillRange = value;
                    if (value <= 0.5 && !changedYellow_1) {
                        changedYellow_1 = true;
                        _this.fillBar.spriteFrame = _this.fillYellow;
                        if (!_this.isSuccess) {
                            _this.hindMay1.active = true;
                        }
                    }
                    if (value <= 0.25 && !changedRed_1) {
                        changedRed_1 = true;
                        _this.fillBar.spriteFrame = _this.fillRed;
                    }
                    return value;
                }
            }).call(function () {
                if (!_this.isSuccess) {
                    _this.gamePlay.onEndGame(false);
                }
            })
                .start();
        }
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        var _this = this;
        // this.sauces.play()
        this.scheduleOnce(function () {
            if (_this.tag == 0) {
                other.getComponent("pizza").getPhomai();
            }
            else if (_this.tag == 1) {
                other.getComponent("pizza").getDecore1();
            }
            else if (_this.tag == 2) {
                other.getComponent("pizza").getRau();
            }
            else if (_this.tag == 3) {
                other.getComponent("pizza").getChin();
            }
        }, 0.2);
    };
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "sauces", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillBar", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "fillYellow", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "fillRed", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hindMay1", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "timeWaiting", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();