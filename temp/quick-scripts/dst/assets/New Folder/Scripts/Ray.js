
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/New Folder/Scripts/Ray.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        this.rayWidth = this.node.children[0].width;
        this.gameplay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.update = function (dt) {
        if (!this.gameplay || !this.gameplay.isStartgame)
            return;
        var count = this.node.childrenCount;
        var rays = this.node.children;
        for (var i = 0; i < count; i++) {
            var ray = rays[i];
            ray.x -= this.speed * dt;
            if (ray.x <= -this.rayWidth) {
                ray.x += this.rayWidth * this.node.childrenCount;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTmV3IEZvbGRlclxcU2NyaXB0c1xcUmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0NDO1FBN0JHLFdBQUssR0FBVyxHQUFHLENBQUM7UUFFcEIsV0FBSyxHQUFHLEtBQUssQ0FBQTtRQUViLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsY0FBUSxHQUFHLElBQUksQ0FBQTs7SUF3Qm5CLENBQUM7SUF2QmEsd0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUVyRSxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVztZQUFFLE9BQU87UUFFekQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUU1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFZCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRXpCLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3pCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNwRDtTQUVSO0lBQ0wsQ0FBQztJQTVCRDtRQURDLFFBQVE7MkNBQ1c7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsyQ0FDUjtJQUxJLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnQzVCO0lBQUQsZUFBQztDQWhDRCxBQWdDQyxDQWhDcUMsRUFBRSxDQUFDLFNBQVMsR0FnQ2pEO2tCQWhDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gNTAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBuZ3VvYyA9IGZhbHNlXHJcblxyXG4gICAgcmF5V2lkdGg6IG51bWJlciA9IDMyNDk7XHJcbiAgICBnYW1lcGxheSA9IG51bGxcclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJheVdpZHRoID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZ2FtZXBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIilcclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5nYW1lcGxheSB8fCAhdGhpcy5nYW1lcGxheS5pc1N0YXJ0Z2FtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgY291bnQgPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBsZXQgcmF5cyA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmF5ID0gcmF5c1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICByYXkueCAtPSB0aGlzLnNwZWVkICogZHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJheS54IDw9IC10aGlzLnJheVdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF5LnggKz0gdGhpcy5yYXlXaWR0aCAqIHRoaXMubm9kZS5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19