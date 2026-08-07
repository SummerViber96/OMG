
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcZGlhUGhvbWFpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0ZDO1FBbkZHLFlBQU0sR0FBaUIsSUFBSSxDQUFBO1FBRTNCLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFFUCxhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixlQUFTLEdBQUcsS0FBSyxDQUFBOztRQW9FakIsaUJBQWlCO0lBQ3JCLENBQUM7SUFwRUcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUNELDJCQUFRLEdBQVI7UUFBQSxpQkF1Q0M7UUF0Q0csRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3RDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLGVBQWEsR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxZQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFB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QUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBzYXVjZXM6IGNjLkFuaW1hdGlvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGFnID0gMFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGxCYXI6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGZpbGxZZWxsb3c6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGZpbGxSZWQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGluZE1heTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICB0aW1lV2FpdGluZyA9IDMwXHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIGlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpXHJcbiAgICAgICAgdGhpcy5sb2FkVGltZSgpXHJcbiAgICB9XHJcbiAgICBsb2FkVGltZSgpIHtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5maWxsQmFyKVxyXG4gICAgICAgIGlmICh0aGlzLmZpbGxCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDE7XHJcbiAgICAgICAgICAgIGxldCBjaGFuZ2VkWWVsbG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBjaGFuZ2VkUmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbEJhcilcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLnRpbWVXYWl0aW5nLCB7IGZpbGxSYW5nZTogMCB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCByYXRpbykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8PSAwLjUgJiYgIWNoYW5nZWRZZWxsb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRZZWxsb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsWWVsbG93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuaXNTdWNjZXNzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpbmRNYXkxLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlIDw9IDAuMjUgJiYgIWNoYW5nZWRSZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRSZWQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWUgPSB0aGlzLmZpbGxSZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lm9uRW5kR2FtZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICAvLyB0aGlzLnNhdWNlcy5wbGF5KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5nZXRDb21wb25lbnQoXCJwaXp6YVwiKS5nZXRQaG9tYWkoKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRhZyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5nZXRDb21wb25lbnQoXCJwaXp6YVwiKS5nZXREZWNvcmUxKClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YWcgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgb3RoZXIuZ2V0Q29tcG9uZW50KFwicGl6emFcIikuZ2V0UmF1KClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YWcgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgb3RoZXIuZ2V0Q29tcG9uZW50KFwicGl6emFcIikuZ2V0Q2hpbigpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDAuMilcclxuXHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==