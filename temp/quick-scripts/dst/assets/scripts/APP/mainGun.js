
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FQUC9tYWluR3VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMkZDO1FBeEZHLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsWUFBTSxHQUFnQixJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ2YsYUFBTyxHQUFHLElBQUksQ0FBQTtRQUNkLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsYUFBTyxHQUFHLElBQUksQ0FBQTs7UUE0RGQsaUJBQWlCO0lBQ3JCLENBQUM7SUE1REcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLFFBQVE7WUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxN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QTtRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEMsS0FBa0IsVUFBcUIsRUFBckIsS0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBckIsY0FBcUIsRUFBckIsSUFBcUIsRUFBRTtZQUFwQyxJQUFJLEtBQUssU0FBQTtZQUNWLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ3RCO0lBQ0wsQ0FBQztJQXRGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDVTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzRDQUNLO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7K0NBQ1E7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNVO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUF2QkosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJGNUI7SUFBRCxlQUFDO0NBM0ZELEFBMkZDLENBM0ZxQyxFQUFFLENBQUMsU0FBUyxHQTJGakQ7a0JBM0ZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0QnVsbGV0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0QnVsbGV0MjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEljb246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1haW5TY2VuZTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQWttOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRQaXN0b246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIHNrZUFrbTogc3AuU2tlbGV0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBza2VQaXN0b246IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIG5vQnVsbGV0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRSZWxvYWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XG4gICAgYW5pbSA9IG51bGw7XG4gICAgaXNDb3VudEJ1bGxldCA9IDA7XG4gICAgaXNNYXhCdWxsZXQgPSAwXG4gICAgaXNMaXN0QiA9IG51bGxcbiAgICBzb3VuZEF0ayA9IG51bGxcbiAgICBpc0xvb3AgPSBmYWxzZVxuICAgIGF1ZGlvSUQgPSBudWxsXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG4gICAgbG9hZERhdGEodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IDEpIHtcbiAgICAgICAgICAgIC8vcGlzdG9uXG4gICAgICAgICAgICB0aGlzLmlzTWF4QnVsbGV0ID0gNlxuICAgICAgICAgICAgdGhpcy5saXN0SWNvbi5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5saXN0SWNvbi5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNMaXN0QiA9IHRoaXMubGlzdEJ1bGxldDI7XG4gICAgICAgICAgICB0aGlzLmxpc3RCdWxsZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQXRrID0gdGhpcy5zb3VuZFBpc3RvbjtcbiAgICAgICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuc2tlUGlzdG9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZm9yKClcbiAgICAgICAgICAgIHRoaXMuaXNNYXhCdWxsZXQgPSAyM1xuICAgICAgICAgICAgdGhpcy5saXN0SWNvbi5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5saXN0SWNvbi5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNMaXN0QiA9IHRoaXMubGlzdEJ1bGxldDtcbiAgICAgICAgICAgIHRoaXMubGlzdEJ1bGxldDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQXRrID0gdGhpcy5zb3VuZEFrbTtcbiAgICAgICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuc2tlQWttO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNDb3VudEJ1bGxldCA9IHRoaXMuaXNNYXhCdWxsZXRcbiAgICAgICAgdGhpcy5pc0xpc3RCLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnRuX3JlTG9hZCgpXG4gICAgfVxuICAgIGJ0bl9zaG90KCkge1xuICAgICAgICBpZiAodGhpcy5pc0NvdW50QnVsbGV0ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmlzQ291bnRCdWxsZXQtLTtcblxuICAgICAgICAgICAgdGhpcy5hdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNvdW5kQXRrLCB0aGlzLmlzTG9vcCk7XG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiYXRrXCIsIHRoaXMuaXNMb29wKVxuICAgICAgICAgICAgdGhpcy5pc0xpc3RCLmNoaWxkcmVuW3RoaXMuaXNDb3VudEJ1bGxldF0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzTG9vcD09KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5vQnVsbGV0LCBmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBidG5fYmFjaygpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmF1ZGlvSUQpXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic2NlbmVfY2xvc2VcIik7XG4gICAgICAgIHRoaXMubWFpblNjZW5lLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIH0sIDAuMylcbiAgICB9XG4gICAgYnRuX3JlTG9hZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWxvYWRcIilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUmVsb2FkLCBmYWxzZSwgMSlcbiAgICAgICAgdGhpcy5pc0NvdW50QnVsbGV0ID0gdGhpcy5pc01heEJ1bGxldDtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5pc0xpc3RCLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==