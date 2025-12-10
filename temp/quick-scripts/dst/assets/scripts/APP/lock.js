
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/lock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c780gc2xFFhKsztDH5wUrv', 'lock');
// scripts/APP/lock.ts

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
        _this.lockCurrent = 100;
        _this.bg = null;
        _this.tag = "";
        _this.gameplay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gameplay = cc.Canvas.instance.node.getComponent("GameApp");
    };
    NewClass.prototype.setGray = function (img) {
        img.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', img));
    };
    NewClass.prototype.offGray = function (img) {
        img.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', img));
    };
    NewClass.prototype.update = function (dt) {
        if (globalThis.gold >= this.lockCurrent) {
            if ((this.tag == "buger" && this.gameplay.isNoBuger == false) || (this.tag == "veget" && this.gameplay.isNoVeget == false) || this.tag == "meat") {
                this.offGray(this.bg);
            }
        }
        else {
            this.setGray(this.bg);
        }
    };
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "lockCurrent", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "bg", void 0);
    __decorate([
        property(cc.String)
    ], NewClass.prototype, "tag", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxsb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0NDO1FBN0JHLGlCQUFXLEdBQUcsR0FBRyxDQUFBO1FBRWpCLFFBQUUsR0FBYyxJQUFJLENBQUE7UUFFcEIsU0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUNSLGNBQVEsR0FBRyxJQUFJLENBQUE7O0lBd0JuQixDQUFDO0lBdkJHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUNELDBCQUFPLEdBQVAsVUFBUSxHQUFHO1FBQ1AsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXBGLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsR0FBRztRQUNQLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFFLEtBQUssQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUUsS0FBSyxDQUFDLElBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUM7Z0JBQ25JLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2FBRXhCO1NBQ0o7YUFDSTtZQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1NBRXhCO0lBQ0wsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lEQUNKO0lBRWpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0E7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDWjtJQVBTLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnQzVCO0lBQUQsZUFBQztDQWhDRCxBQWdDQyxDQWhDcUMsRUFBRSxDQUFDLFNBQVMsR0FnQ2pEO2tCQWhDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgbG9ja0N1cnJlbnQgPSAxMDBcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBiZzogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIHRhZyA9IFwiXCJcclxuICAgIGdhbWVwbGF5ID0gbnVsbFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lcGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVBcHBcIilcclxuICAgIH1cclxuICAgIHNldEdyYXkoaW1nKSB7XHJcbiAgICAgICAgaW1nLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBpbWcpKTtcclxuXHJcbiAgICB9XHJcbiAgICBvZmZHcmF5KGltZykge1xyXG4gICAgICAgIGltZy5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIGltZykpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuZ29sZCA+PSB0aGlzLmxvY2tDdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmICgodGhpcy50YWcgPT0gXCJidWdlclwiICYmdGhpcy5nYW1lcGxheS5pc05vQnVnZXI9PWZhbHNlKXx8KHRoaXMudGFnID09IFwidmVnZXRcIiAmJnRoaXMuZ2FtZXBsYXkuaXNOb1ZlZ2V0PT1mYWxzZSl8fHRoaXMudGFnID09IFwibWVhdFwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub2ZmR3JheSh0aGlzLmJnKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0R3JheSh0aGlzLmJnKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19