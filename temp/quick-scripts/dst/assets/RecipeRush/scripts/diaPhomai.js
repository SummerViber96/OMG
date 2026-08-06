
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/diaPhomai.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                        _this.hindMay1.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcZGlhUGhvbWFpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUZDO1FBaEZHLFlBQU0sR0FBaUIsSUFBSSxDQUFBO1FBRTNCLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFFUCxhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLGNBQVEsR0FBRyxJQUFJLENBQUE7O1FBa0VmLGlCQUFpQjtJQUNyQixDQUFDO0lBbEVHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQUEsaUJBcUNDO1FBcENHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxlQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksWUFBVSxHQUFHLEtBQUssQ0FBQztZQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ2pCLEVB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Y2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgc2F1Y2VzOiBjYy5BbmltYXRpb24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHRhZyA9IDBcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBmaWxsWWVsbG93OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBmaWxsUmVkOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpbmRNYXkxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGltZVdhaXRpbmcgPSAzMFxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpXHJcbiAgICAgICAgdGhpcy5sb2FkVGltZSgpXHJcbiAgICB9XHJcbiAgICBsb2FkVGltZSgpIHtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5maWxsQmFyKVxyXG4gICAgICAgIGlmICh0aGlzLmZpbGxCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDE7XHJcbiAgICAgICAgICAgIGxldCBjaGFuZ2VkWWVsbG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBjaGFuZ2VkUmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbEJhcilcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLnRpbWVXYWl0aW5nLCB7IGZpbGxSYW5nZTogMCB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCByYXRpbykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8PSAwLjUgJiYgIWNoYW5nZWRZZWxsb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRZZWxsb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsWWVsbG93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaW5kTWF5MS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8PSAwLjI1ICYmICFjaGFuZ2VkUmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkUmVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsUmVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1N1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5vbkVuZEdhbWUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zYXVjZXMucGxheSgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YWcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgb3RoZXIuZ2V0Q29tcG9uZW50KFwicGl6emFcIikuZ2V0UGhvbWFpKClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YWcgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgb3RoZXIuZ2V0Q29tcG9uZW50KFwicGl6emFcIikuZ2V0RGVjb3JlMSgpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudGFnID09IDIpIHtcclxuICAgICAgICAgICAgICAgIG90aGVyLmdldENvbXBvbmVudChcInBpenphXCIpLmdldFJhdSgpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudGFnID09IDMpIHtcclxuICAgICAgICAgICAgICAgIG90aGVyLmdldENvbXBvbmVudChcInBpenphXCIpLmdldENoaW4oKVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAwLjIpXHJcblxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=