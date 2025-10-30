
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/mainGun.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d209eMGLBC+a9I6aN/ZHYQ', 'mainGun');
// scripts/APP/mainGun.ts

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
        _this.listBullet = null;
        _this.listBullet2 = null;
        _this.listIcon = null;
        _this.mainScene = null;
        _this.soundAkm = null;
        _this.soundPiston = null;
        _this.skeAkm = null;
        _this.skePiston = null;
        _this.noBullet = null;
        _this.soundReload = null;
        _this.hand = null;
        _this.anim = null;
        _this.isCountBullet = 0;
        _this.isMaxBullet = 0;
        _this.isListB = null;
        _this.soundAtk = null;
        _this.isLoop = false;
        _this.audioID = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.loadData = function (value) {
        if (value == 1) {
            //piston
            this.isMaxBullet = 6;
            this.listIcon.children[0].active = true;
            this.listIcon.children[1].active = false;
            this.isListB = this.listBullet2;
            this.listBullet.active = false;
            this.soundAtk = this.soundPiston;
            this.anim = this.skePiston;
        }
        else {
            // for()
            this.isMaxBullet = 23;
            this.listIcon.children[1].active = true;
            this.listIcon.children[0].active = false;
            this.isListB = this.listBullet;
            this.listBullet2.active = false;
            this.soundAtk = this.soundAkm;
            this.anim = this.skeAkm;
        }
        this.isCountBullet = this.isMaxBullet;
        this.isListB.active = true;
        this.btn_reLoad();
    };
    NewClass.prototype.btn_shot = function () {
        if (this.isCountBullet > 0) {
            this.hand.active = false;
            this.isCountBullet--;
            this.audioID = cc.audioEngine.playEffect(this.soundAtk, this.isLoop);
            this.anim.setAnimation(0, "atk", this.isLoop);
            this.isListB.children[this.isCountBullet].active = false;
            // if (this.isLoop==)
        }
        else {
            cc.audioEngine.playEffect(this.noBullet, false);
        }
    };
    NewClass.prototype.btn_back = function () {
        this.unscheduleAllCallbacks();
        cc.audioEngine.stop(this.audioID);
        this.node.getComponent(cc.Animation).play("scene_close");
        this.mainScene.active = true;
    };
    NewClass.prototype.btn_reLoad = function () {
        console.log("reload");
        cc.audioEngine.play(this.soundReload, false, 1);
        this.isCountBullet = this.isMaxBullet;
        for (var _i = 0, _a = this.isListB.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.active = true;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBullet", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBullet2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listIcon", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mainScene", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAkm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPiston", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "skeAkm", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "skePiston", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "noBullet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundReload", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxtYWluR3VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0ZDO1FBckZHLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsWUFBTSxHQUFnQixJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ2YsYUFBTyxHQUFHLElBQUksQ0FBQTtRQUNkLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsYUFBTyxHQUFHLElBQUksQ0FBQTs7UUF5RGQsaUJBQWlCO0lBQ3JCLENBQUM7SUF6REcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLFFBQVE7WUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FB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QUFxQixFQUFyQixJQUFxQixFQUFFO1lBQXBDLElBQUksS0FBSyxTQUFBO1lBQ1YsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7U0FDdEI7SUFDTCxDQUFDO0lBbkZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNVO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NENBQ0s7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsrQ0FDUTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQXZCSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0Y1QjtJQUFELGVBQUM7Q0F4RkQsQUF3RkMsQ0F4RnFDLEVBQUUsQ0FBQyxTQUFTLEdBd0ZqRDtrQkF4Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0QnVsbGV0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEJ1bGxldDI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0SWNvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1haW5TY2VuZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFrbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFBpc3RvbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIHNrZUFrbTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgc2tlUGlzdG9uOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgbm9CdWxsZXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRSZWxvYWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYW5pbSA9IG51bGw7XHJcbiAgICBpc0NvdW50QnVsbGV0ID0gMDtcclxuICAgIGlzTWF4QnVsbGV0ID0gMFxyXG4gICAgaXNMaXN0QiA9IG51bGxcclxuICAgIHNvdW5kQXRrID0gbnVsbFxyXG4gICAgaXNMb29wID0gZmFsc2VcclxuICAgIGF1ZGlvSUQgPSBudWxsXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBsb2FkRGF0YSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vcGlzdG9uXHJcbiAgICAgICAgICAgIHRoaXMuaXNNYXhCdWxsZXQgPSA2XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEljb24uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0SWNvbi5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0xpc3RCID0gdGhpcy5saXN0QnVsbGV0MjtcclxuICAgICAgICAgICAgdGhpcy5saXN0QnVsbGV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQXRrID0gdGhpcy5zb3VuZFBpc3RvbjtcclxuICAgICAgICAgICAgdGhpcy5hbmltID0gdGhpcy5za2VQaXN0b247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBmb3IoKVxyXG4gICAgICAgICAgICB0aGlzLmlzTWF4QnVsbGV0ID0gMjNcclxuICAgICAgICAgICAgdGhpcy5saXN0SWNvbi5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RJY29uLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTGlzdEIgPSB0aGlzLmxpc3RCdWxsZXQ7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEJ1bGxldDIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRBdGsgPSB0aGlzLnNvdW5kQWttO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLnNrZUFrbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0NvdW50QnVsbGV0ID0gdGhpcy5pc01heEJ1bGxldFxyXG4gICAgICAgIHRoaXMuaXNMaXN0Qi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnRuX3JlTG9hZCgpXHJcbiAgICB9XHJcbiAgICBidG5fc2hvdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50QnVsbGV0ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlPWZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudEJ1bGxldC0tO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNvdW5kQXRrLCB0aGlzLmlzTG9vcCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJhdGtcIiwgdGhpcy5pc0xvb3ApXHJcbiAgICAgICAgICAgIHRoaXMuaXNMaXN0Qi5jaGlsZHJlblt0aGlzLmlzQ291bnRCdWxsZXRdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzTG9vcD09KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5vQnVsbGV0LCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidG5fYmFjaygpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5hdWRpb0lEKVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic2NlbmVfY2xvc2VcIik7XHJcbiAgICAgICAgdGhpcy5tYWluU2NlbmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYnRuX3JlTG9hZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbG9hZFwiKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFJlbG9hZCwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5pc0NvdW50QnVsbGV0ID0gdGhpcy5pc01heEJ1bGxldDtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmlzTGlzdEIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19