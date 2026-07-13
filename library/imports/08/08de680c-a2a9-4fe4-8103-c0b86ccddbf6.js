"use strict";
cc._RF.push(module, '08de6gMoqlP5IEDwLhszdv2', 'cardList');
// scripts/card/cardList.ts

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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
        _this.hand = null(templateObject_1 || (templateObject_1 = __makeTemplateObject(["n    start() {\n        this.scheduleOnce(() => {\n            this.node.getComponent(cc.Animation).play(\"card_tut\")\n        }, 0.6)\n    }\n    click() {\n        this.hand.setAnimation(0, \"Hand\", false)\n        this.scheduleOnce(() => {\n        this.hand.setAnimation(0, \"HandIdle\", false)\n        }, 0.7)\n    }\n    // update (dt) {}\n}\n"], ["n    start() {\n        this.scheduleOnce(() => {\n            this.node.getComponent(cc.Animation).play(\"card_tut\")\n        }, 0.6)\n    }\n    click() {\n        this.hand.setAnimation(0, \"Hand\", false)\n        this.scheduleOnce(() => {\n        this.hand.setAnimation(0, \"HandIdle\", false)\n        }, 0.7)\n    }\n    // update (dt) {}\n}\n"])));
        return _this;
    }
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "hand", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;
var templateObject_1;

cc._RF.pop();