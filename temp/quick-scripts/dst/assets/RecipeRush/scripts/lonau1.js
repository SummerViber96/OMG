
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/lonau1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44863UUir9CY69WqIXQDNe3', 'lonau1');
// RecipeRush/scripts/lonau1.ts

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
        _this.soundXit = null;
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
        this.fillBar.fillRange = 1;
        var changedYellow = false;
        var changedRed = false;
        cc.tween(this.fillBar)
            .to(this.timeWaiting, { fillRange: 0 }, {
            progress: function (start, end, current, ratio) {
                var value = start + (end - start) * ratio;
                _this.fillBar.fillRange = value;
                if (value <= 0.5 && !changedYellow) {
                    changedYellow = true;
                    _this.fillBar.spriteFrame = _this.fillYellow;
                    if (_this.isSuccess == false) {
                        _this.hindMay1.active = true;
                    }
                }
                if (value <= 0.25 && !changedRed) {
                    changedRed = true;
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
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        this.sauces.play();
        if (this.gamePlay.isMox == false) {
            cc.audioEngine.play(this.soundXit, false, 0.3);
        }
        this.scheduleOnce(function () {
            other.getComponent("pizza").getTomato();
        }, 0.2);
    };
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "sauces", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundXit", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbG9uYXUxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUVDO1FBdEVHLFlBQU0sR0FBaUIsSUFBSSxDQUFBO1FBRTNCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBRWxDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBRyxFQUFFLENBQUE7UUFDaEIsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLGVBQVMsR0FBQyxLQUFLLENBQUE7O1FBdURmLGlCQUFpQjtJQUNyQixDQUFDO0lBdkRHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBRW5CLENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQUEsaUJBb0NDO1FBbkNHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDakIsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsUUFBUSxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSztnQkFFakMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUUvQixJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ2hDLGFBQWEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUM7b0JBQzNDLElBQUcsS0FBSSxDQUFDLFNBQVMsSUFBRSxLQUFLLEVBQUM7d0JBQ3JCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtxQkFDOUI7aUJBQ0o7Z0JBRUQsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUM5QixVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUdsQixLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDO2lCQUUzQztnQkFFRCxPQUFPLEtBQUssQ0FBQztZQUNqQixDQUFDO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUNqQztRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUM5QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUVqRDtRQUNELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRTNDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUVYLENBQUM7SUFwRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0Q0FDSTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDUztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZDQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDTDtJQWZDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5RTVCO0lBQUQsZUFBQztDQXpFRCxBQXlFQyxDQXpFcUMsRUFBRSxDQUFDLFNBQVMsR0F5RWpEO2tCQXpFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgc2F1Y2VzOiBjYy5BbmltYXRpb24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRYaXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBmaWxsWWVsbG93OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBmaWxsUmVkOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpbmRNYXkxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGltZVdhaXRpbmcgPSAzMFxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICBpc1N1Y2Nlc3M9ZmFsc2VcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIilcclxuICAgICAgICB0aGlzLmxvYWRUaW1lKClcclxuXHJcbiAgICB9XHJcbiAgICBsb2FkVGltZSgpIHtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5maWxsQmFyKVxyXG4gICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSAxO1xyXG4gICAgICAgIGxldCBjaGFuZ2VkWWVsbG93ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNoYW5nZWRSZWQgPSBmYWxzZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGxCYXIpXHJcbiAgICAgICAgICAgIC50byh0aGlzLnRpbWVXYWl0aW5nLCB7IGZpbGxSYW5nZTogMCB9LCB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlIDw9IDAuNSAmJiAhY2hhbmdlZFllbGxvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkWWVsbG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsWWVsbG93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzU3VjY2Vzcz09ZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaW5kTWF5MS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8PSAwLjI1ICYmICFjaGFuZ2VkUmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRSZWQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbEJhci5zcHJpdGVGcmFtZSA9IHRoaXMuZmlsbFJlZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkub25FbmRHYW1lKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICB0aGlzLnNhdWNlcy5wbGF5KClcclxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5pc01veCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRYaXQsIGZhbHNlLCAwLjMpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIG90aGVyLmdldENvbXBvbmVudChcInBpenphXCIpLmdldFRvbWF0bygpXHJcblxyXG4gICAgICAgIH0sIDAuMilcclxuXHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==