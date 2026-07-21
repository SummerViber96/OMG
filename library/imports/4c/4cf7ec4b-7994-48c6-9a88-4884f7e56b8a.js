"use strict";
cc._RF.push(module, '4cf7exLeZRIxpqISIT35WuK', 'listCus2');
// RecipeRush/scripts/listCus2.ts

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
        _this.prEmoji = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < 50; i++) {
            this.scheduleOnce(function () {
                _this.spawnAngryEmoji(_this.node, _this.prEmoji, _this.node);
            }, i * 0.08);
        }
    };
    NewClass.prototype.spawnAngryEmoji = function (parent, prefab, target) {
        var emoji = cc.instantiate(prefab);
        parent.addChild(emoji);
        // Vị trí bắt đầu (dưới đầu nhân vật)
        var startX = target.x + (Math.random() - 0.5) * 300 + 400;
        var startY = target.y + 280;
        emoji.setPosition(startX, startY);
        emoji.opacity = 0;
        emoji.scale = 0.2;
        var endY = startY + 500;
        var offsetX = (Math.random() - 0.5) * 500;
        cc.tween(emoji)
            .parallel(
        // Bay lên
        cc.tween().to(2, {
            position: cc.v3(startX + offsetX, endY)
        }, {
            easing: "sineOut"
        }), 
        // Scale
        cc.tween()
            .to(0.2, { scale: 1.1 })
            .to(0.8, { scale: 0.9 })
            .to(0.2, { scale: 0.8 }), 
        // Fade
        cc.tween()
            .to(0.2, { opacity: 255 })
            .delay(1.4)
            .to(0.4, { opacity: 0 }), 
        // Lắc trái phải
        cc.tween()
            .by(0.15, { x: -10 })
            .by(0.15, { x: 20 })
            .by(0.15, { x: -20 })
            .by(0.15, { x: 20 })
            .by(0.15, { x: -10 }))
            .call(function () {
            emoji.destroy();
        })
            .start();
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "prEmoji", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();