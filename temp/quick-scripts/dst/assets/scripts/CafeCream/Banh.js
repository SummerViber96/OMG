
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CafeCream/Banh.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e65fEZiEFJqILHmRkzgt0r', 'Banh');
// scripts/CafeCream/Banh.ts

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
        _this.anim = null;
        _this.tag = 0;
        _this.fillTime = null;
        _this.clock = null;
        _this.isChin = false;
        _this.gamePlay = null;
        _this.isbanh = false;
        _this.time = 2;
        _this.idSound = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.addEndEventSpine();
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.setOn = function () {
        var _this = this;
        this.idSound = cc.audioEngine.play(this.gamePlay.soundNuongBanh, false, 1);
        this.anim.node.active = true;
        this.anim.setAnimation(0, "lv1-song", false);
        this.isbanh = true;
        this.clock.active = true;
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(function () {
            _this.clock.active = false;
        }).start();
    };
    NewClass.prototype.addEndEventSpine = function () {
        var self = this;
        this.anim.setCompleteListener(function (track) {
            if (track.animation.name == "lv1-song") {
                self.setChin();
                // console.log(this.isChin)
            }
            // update (dt) {}
        });
    };
    NewClass.prototype.setChin = function () {
        cc.audioEngine.stop(this.idSound);
        this.isChin = true;
        this.anim.timeScale = 1;
        this.anim.setAnimation(0, "lv1-chin", true);
        this.node.getComponent(cc.Button).enabled = true;
        cc.audioEngine.play(this.gamePlay.soundBanh, false, 0.7);
    };
    NewClass.prototype.btn_click = function () {
        // if (this.isChin == true) {
        if (!this.isChin)
            return;
        if (!this.isbanh)
            return;
        this.isbanh = false;
        this.gamePlay.arrBep[this.tag] = false;
        this.gamePlay.btn_bep(this.tag);
        this.anim.node.active = false;
        this.node.getComponent(cc.Button).enabled = false;
        this.clock.active = false;
        this.fillTime.fillRange = 0;
        // }
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "clock", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NhZmVDcmVhbS9CYW5oLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUVDO1FBOURHLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFFUCxjQUFRLEdBQWMsSUFBSSxDQUFBO1FBRTFCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFDckIsWUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNkLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsVUFBSSxHQUFHLENBQUMsQ0FBQTtRQUNSLGFBQU8sR0FBRyxJQUFJLENBQUE7O0lBbURsQixDQUFDO0lBbERHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7SUFFckUsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFBQSxpQkFVQztRQVJHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsTUFB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bmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgdGFnID0gMFxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgZmlsbFRpbWU6IGNjLlNwcml0ZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjbG9jazogY2MuTm9kZSA9IG51bGxcbiAgICBpc0NoaW4gPSBmYWxzZVxuICAgIGdhbWVQbGF5ID0gbnVsbFxuICAgIGlzYmFuaCA9IGZhbHNlXG4gICAgdGltZSA9IDJcbiAgICBpZFNvdW5kID0gbnVsbFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFkZEVuZEV2ZW50U3BpbmUoKTtcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVEb251dFwiKVxuXG4gICAgfVxuICAgIHNldE9uKCkge1xuXG4gICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZE51b25nQmFuaCwgZmFsc2UsIDEpXG4gICAgICAgIHRoaXMuYW5pbS5ub2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImx2MS1zb25nXCIsIGZhbHNlKVxuICAgICAgICB0aGlzLmlzYmFuaCA9IHRydWVcbiAgICAgICAgdGhpcy5jbG9jay5hY3RpdmUgPSB0cnVlXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbFRpbWUpLnRvKHRoaXMudGltZSwgeyBmaWxsUmFuZ2U6IDEgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb2NrLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIGFkZEVuZEV2ZW50U3BpbmUoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB0aGlzLmFuaW0uc2V0Q29tcGxldGVMaXN0ZW5lcih0cmFjayA9PiB7XG4gICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJsdjEtc29uZ1wiKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRDaGluKClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzQ2hpbilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdXBkYXRlIChkdCkge31cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHNldENoaW4oKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZFNvdW5kKVxuICAgICAgICB0aGlzLmlzQ2hpbiA9IHRydWVcbiAgICAgICAgdGhpcy5hbmltLnRpbWVTY2FsZSA9IDFcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImx2MS1jaGluXCIsIHRydWUpXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRCYW5oLCBmYWxzZSwgMC43KVxuICAgIH1cbiAgICBidG5fY2xpY2soKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmlzQ2hpbiA9PSB0cnVlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0NoaW4pIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmlzYmFuaCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzYmFuaCA9IGZhbHNlXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyQmVwW3RoaXMudGFnXSA9IGZhbHNlXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuYnRuX2JlcCh0aGlzLnRhZylcbiAgICAgICAgdGhpcy5hbmltLm5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmNsb2NrLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuZmlsbFRpbWUuZmlsbFJhbmdlID0gMFxuICAgICAgICAvLyB9XG4gICAgfVxuXG59XG4iXX0=