"use strict";
cc._RF.push(module, '5b794Rk0MZKwJ0nof/GU6Wo', 'Ray');
// New Folder/Scripts/Ray.ts

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
        _this.speed = 500;
        _this.nguoc = false;
        _this.rayWidth = 3249;
        _this.gameplay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gameplay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.update = function (dt) {
        if (this.gameplay.isStartgame) {
            for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
                var ray = _a[_i];
                if (this.nguoc == false) {
                    ray.x -= this.speed * dt;
                    if (ray.x <= -this.rayWidth) {
                        ray.x += this.rayWidth * this.node.childrenCount;
                    }
                }
                else {
                    ray.x += this.speed * dt;
                    if (ray.x >= this.rayWidth) {
                        ray.x -= this.rayWidth * this.node.childrenCount;
                    }
                }
            }
        }
    };
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "nguoc", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();