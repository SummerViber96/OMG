
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FQUC9sb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0NDO1FBN0JHLGlCQUFXLEdBQUcsR0FBRyxDQUFBO1FBRWpCLFFBQUUsR0FBYyxJQUFJLENBQUE7UUFFcEIsU0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUNSLGNBQVEsR0FBRyxJQUFJLENBQUE7O0lBd0JuQixDQUFDO0lBdkJHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUNELDBCQUFPLEdBQVAsVUFBUSxHQUFHO1FBQ1AsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXBGLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsR0FBRztRQUNQLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFFLEtBQUssQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUUsS0FBSyxDQUFDLElBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUM7Z0JBQ25JLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2FBRXhCO1NBQ0o7YUFDSTtZQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1NBRXhCO0lBQ0wsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lEQUNKO0lBRWpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0E7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDWjtJQVBTLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnQzVCO0lBQUQsZUFBQztDQWhDRCxBQWdDQyxDQWhDcUMsRUFBRSxDQUFDLFNBQVMsR0FnQ2pEO2tCQWhDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIGxvY2tDdXJyZW50ID0gMTAwXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBiZzogY2MuU3ByaXRlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgdGFnID0gXCJcIlxuICAgIGdhbWVwbGF5ID0gbnVsbFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVwbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZUFwcFwiKVxuICAgIH1cbiAgICBzZXRHcmF5KGltZykge1xuICAgICAgICBpbWcuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1ncmF5LXNwcml0ZScsIGltZykpO1xuXG4gICAgfVxuICAgIG9mZkdyYXkoaW1nKSB7XG4gICAgICAgIGltZy5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIGltZykpO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuZ29sZCA+PSB0aGlzLmxvY2tDdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoKHRoaXMudGFnID09IFwiYnVnZXJcIiAmJnRoaXMuZ2FtZXBsYXkuaXNOb0J1Z2VyPT1mYWxzZSl8fCh0aGlzLnRhZyA9PSBcInZlZ2V0XCIgJiZ0aGlzLmdhbWVwbGF5LmlzTm9WZWdldD09ZmFsc2UpfHx0aGlzLnRhZyA9PSBcIm1lYXRcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5vZmZHcmF5KHRoaXMuYmcpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5zZXRHcmF5KHRoaXMuYmcpXG5cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==