
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bracelet/script/BraceletDefaultMeta.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQnJhY2VsZXREZWZhdWx0TWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qyw2RUFBNkU7QUFFN0U7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUFTQztRQVBHLCtEQUErRDtRQUUvRCxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLDhEQUE4RDtRQUU5RCxtQkFBYSxHQUFXLENBQUMsQ0FBQzs7SUFDOUIsQ0FBQztJQUxHO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7dURBQ0Y7SUFJbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4REFDSztJQVJULG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBU3ZDO0lBQUQsMEJBQUM7Q0FURCxBQVNDLENBVGdELEVBQUUsQ0FBQyxTQUFTLEdBUzVEO2tCQVRvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKiogR+G6r24gbMOqbiBub2RlIHbDsm5nIG3huqt1IChkZWZhdWx0Q2hhcm0pIMSR4buDIGtoYWkgYsOhbyBkw6J5IHbDoCBrZXljaGFpbiDEkcO6bmcuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhY2VsZXREZWZhdWx0TWV0YSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvKiogaWRTdHJpbmcgY+G7p2EgZMOieSBt4bqrdSAoMiA9IGdyZWVuLCDigKYpLiDEkMO6bmcgbcOgdSDEkcaw4bujYyArMzAlLiAqL1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIGNvcmRJZDogbnVtYmVyID0gMjtcblxuICAgIC8qKiBJbmRleCBrZXljaGFpbiDEkcO6bmcgKDAsIDEgaG/hurdjIDIg4oCUIGto4bubcCBidG5fY2hvc2VDYXJkKS4gKi9cbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBrZXljaGFpbkluZGV4OiBudW1iZXIgPSAwO1xufVxuIl19