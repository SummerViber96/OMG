
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
        var _this = this;
        this.unscheduleAllCallbacks();
        cc.audioEngine.stop(this.audioID);
        this.node.getComponent(cc.Animation).play("scene_close");
        this.mainScene.active = true;
        this.scheduleOnce(function () {
            _this.node.active = false;
        }, 0.3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxtYWluR3VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMkZDO1FBeEZHLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsWUFBTSxHQUFnQixJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ2YsYUFBTyxHQUFHLElBQUksQ0FBQTtRQUNkLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsYUFBTyxHQUFHLElBQUksQ0FBQTs7UUE0RGQsaUJBQWlCO0lBQ3JCLENBQUM7SUE1REcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLFFBQVE7WUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FB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Q0FBQTtRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEMsS0FBa0IsVUFBcUIsRUFBckIsS0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBckIsY0FBcUIsRUFBckIsSUFBcUIsRUFBRTtZQUFwQyxJQUFJLEtBQUssU0FBQTtZQUNWLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ3RCO0lBQ0wsQ0FBQztJQXRGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDVTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzRDQUNLO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7K0NBQ1E7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNVO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUF2QkosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJGNUI7SUFBRCxlQUFDO0NBM0ZELEFBMkZDLENBM0ZxQyxFQUFFLENBQUMsU0FBUyxHQTJGakQ7a0JBM0ZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEJ1bGxldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RCdWxsZXQyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEljb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluU2NlbmU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRBa206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRQaXN0b246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBza2VBa206IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIHNrZVBpc3Rvbjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIG5vQnVsbGV0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kUmVsb2FkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGFuaW0gPSBudWxsO1xyXG4gICAgaXNDb3VudEJ1bGxldCA9IDA7XHJcbiAgICBpc01heEJ1bGxldCA9IDBcclxuICAgIGlzTGlzdEIgPSBudWxsXHJcbiAgICBzb3VuZEF0ayA9IG51bGxcclxuICAgIGlzTG9vcCA9IGZhbHNlXHJcbiAgICBhdWRpb0lEID0gbnVsbFxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgbG9hZERhdGEodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgICAgICAgICAvL3Bpc3RvblxyXG4gICAgICAgICAgICB0aGlzLmlzTWF4QnVsbGV0ID0gNlxyXG4gICAgICAgICAgICB0aGlzLmxpc3RJY29uLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEljb24uY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMaXN0QiA9IHRoaXMubGlzdEJ1bGxldDI7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEJ1bGxldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zb3VuZEF0ayA9IHRoaXMuc291bmRQaXN0b247XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuc2tlUGlzdG9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZm9yKClcclxuICAgICAgICAgICAgdGhpcy5pc01heEJ1bGxldCA9IDIzXHJcbiAgICAgICAgICAgIHRoaXMubGlzdEljb24uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0SWNvbi5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0xpc3RCID0gdGhpcy5saXN0QnVsbGV0O1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RCdWxsZXQyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQXRrID0gdGhpcy5zb3VuZEFrbTtcclxuICAgICAgICAgICAgdGhpcy5hbmltID0gdGhpcy5za2VBa207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNDb3VudEJ1bGxldCA9IHRoaXMuaXNNYXhCdWxsZXRcclxuICAgICAgICB0aGlzLmlzTGlzdEIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0bl9yZUxvYWQoKVxyXG4gICAgfVxyXG4gICAgYnRuX3Nob3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudEJ1bGxldCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudEJ1bGxldC0tO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNvdW5kQXRrLCB0aGlzLmlzTG9vcCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJhdGtcIiwgdGhpcy5pc0xvb3ApXHJcbiAgICAgICAgICAgIHRoaXMuaXNMaXN0Qi5jaGlsZHJlblt0aGlzLmlzQ291bnRCdWxsZXRdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzTG9vcD09KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5vQnVsbGV0LCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidG5fYmFjaygpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5hdWRpb0lEKVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic2NlbmVfY2xvc2VcIik7XHJcbiAgICAgICAgdGhpcy5tYWluU2NlbmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSwgMC4zKVxyXG4gICAgfVxyXG4gICAgYnRuX3JlTG9hZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbG9hZFwiKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFJlbG9hZCwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5pc0NvdW50QnVsbGV0ID0gdGhpcy5pc01heEJ1bGxldDtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmlzTGlzdEIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19