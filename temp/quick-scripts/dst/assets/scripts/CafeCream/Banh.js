
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2FmZUNyZWFtXFxCYW5oLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUVDO1FBOURHLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFFUCxjQUFRLEdBQWMsSUFBSSxDQUFBO1FBRTFCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFDckIsWUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNkLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsVUFBSSxHQUFHLENBQUMsQ0FBQTtRQUNSLGFBQU8sR0FBRyxJQUFJLENBQUE7O0lBbURsQixDQUFDO0lBbERHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7SUFFckUsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFBQSxpQkFVQztRQVJHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDeEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekQsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQzdCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELG1DQUFnQixHQUFoQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBQSxLQUFLO1lBQy9CLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ2QsMkJBQTJCO2FBQzlCO1lBRUQsaUJBQWlCO1FBQ3JCLENBQUMsQ0FBQSxDQUFBO0lBRUwsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDaEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQ0ksNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDM0IsSUFBSTtJQUNSLENBQUM7SUE1REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQ0FDRTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lDQUNkO0lBRVA7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBVEosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlFNUI7SUFBRCxlQUFDO0NBakVELEFBaUVDLENBakVxQyxFQUFFLENBQUMsU0FBUyxHQWlFakQ7a0JBakVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICB0YWcgPSAwXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlsbFRpbWU6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2xvY2s6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBpc0NoaW4gPSBmYWxzZVxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICBpc2JhbmggPSBmYWxzZVxyXG4gICAgdGltZSA9IDJcclxuICAgIGlkU291bmQgPSBudWxsXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmFkZEVuZEV2ZW50U3BpbmUoKTtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpXHJcblxyXG4gICAgfVxyXG4gICAgc2V0T24oKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZE51b25nQmFuaCwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5hbmltLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJsdjEtc29uZ1wiLCBmYWxzZSlcclxuICAgICAgICB0aGlzLmlzYmFuaCA9IHRydWVcclxuICAgICAgICB0aGlzLmNsb2NrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGxUaW1lKS50byh0aGlzLnRpbWUsIHsgZmlsbFJhbmdlOiAxIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb2NrLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIGFkZEVuZEV2ZW50U3BpbmUoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgdGhpcy5hbmltLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCJsdjEtc29uZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldENoaW4oKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc0NoaW4pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNldENoaW4oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgdGhpcy5pc0NoaW4gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5hbmltLnRpbWVTY2FsZSA9IDFcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwibHYxLWNoaW5cIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRCYW5oLCBmYWxzZSwgMC43KVxyXG4gICAgfVxyXG4gICAgYnRuX2NsaWNrKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzQ2hpbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2hpbikgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5pc2JhbmgpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzYmFuaCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5hcnJCZXBbdGhpcy50YWddID0gZmFsc2VcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmJ0bl9iZXAodGhpcy50YWcpXHJcbiAgICAgICAgdGhpcy5hbmltLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jbG9jay5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZmlsbFRpbWUuZmlsbFJhbmdlID0gMFxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19