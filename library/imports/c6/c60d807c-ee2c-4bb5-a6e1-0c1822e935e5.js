"use strict";
cc._RF.push(module, 'c60d8B87ixLtabhDBgi6TXl', 'BraceletDefaultMeta');
// Bracelet/script/BraceletDefaultMeta.ts

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
/** Gắn lên node vòng mẫu (defaultCharm) để khai báo dây và keychain đúng. */
var BraceletDefaultMeta = /** @class */ (function (_super) {
    __extends(BraceletDefaultMeta, _super);
    function BraceletDefaultMeta() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** idString của dây mẫu (2 = green, …). Đúng màu được +30%. */
        _this.cordId = 2;
        /** Index keychain đúng (0, 1 hoặc 2 — khớp btn_choseCard). */
        _this.keychainIndex = 0;
        return _this;
    }
    __decorate([
        property(cc.Integer)
    ], BraceletDefaultMeta.prototype, "cordId", void 0);
    __decorate([
        property(cc.Integer)
    ], BraceletDefaultMeta.prototype, "keychainIndex", void 0);
    BraceletDefaultMeta = __decorate([
        ccclass
    ], BraceletDefaultMeta);
    return BraceletDefaultMeta;
}(cc.Component));
exports.default = BraceletDefaultMeta;

cc._RF.pop();