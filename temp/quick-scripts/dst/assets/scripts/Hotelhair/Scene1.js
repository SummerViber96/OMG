
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Hotelhair/Scene1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '273d16vamRBJr4s0V3zY6L9', 'Scene1');
// scripts/Hotelhair/Scene1.ts

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
        _this.camera = null;
        _this.animCutShirt = null;
        _this.listCard = null;
        _this.soundWrong = null;
        _this.shirt = null;
        _this.hand = null;
        _this.tut = null;
        _this.ticket = null;
        _this.daoCao = null;
        _this.tutHam = null;
        _this.soundPopUp = null;
        _this.hairCut = null;
        _this.soundClick = null;
        _this.isTab = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        var _this = this;
        var self = this;
        this.animCutShirt.setCompleteListener(function (trackEntry, loopCount) {
            var name = trackEntry.animation ? trackEntry.animation.name : '';
            // if (name == 'animation') {
            // }
            self.animCutShirt.node.active = false;
        });
        this.scheduleOnce(function () {
            if (_this.isTab)
                return;
            _this.hand.active = true;
        }, 2);
    };
    NewClass.prototype.tap = function () {
        if (this.isTab)
            return;
        cc.audioEngine.play(this.hairCut, false, 1);
        this.isTab = true;
        this.tut.active = false;
        this.hand.active = false;
        this.shirt.active = false;
        this.animCutShirt.node.active = true;
        this.showStep1();
    };
    NewClass.prototype.showStep1 = function () {
        var _this = this;
        // cc.tween(this.camera).to(1.8, { zoomRatio: 1.5 }).start()
        cc.tween(this.node).to(1.8, { scale: 1.5, position: cc.v3(0, 100) }).start();
        // cc.tween(this.camera.node).to(1.8, { position: cc.v3(0, -100) }).start()
        this.scheduleOnce(function () {
            _this.listCard.active = true;
            cc.audioEngine.play(_this.soundPopUp, false, 1);
        }, 1);
    };
    NewClass.prototype.btn_chooseCard = function (event, value) {
        cc.audioEngine.play(this.soundClick, false, 1);
        switch (value) {
            case "0":
                this.listCard.active = false;
                this.ticket.active = true;
                this.ticket.getComponent("Scratch_ticket").addEvent();
                // this.daoCao.active=true
                this.tutHam.active = true;
                break;
            case "1":
                var btn = event.currentTarget;
                btn.getComponent(cc.Animation).play("cardWrong");
                cc.audioEngine.play(this.soundWrong, false, 0.5);
                break;
        }
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "animCutShirt", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "shirt", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ticket", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "daoCao", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tutHam", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPopUp", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "hairCut", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSG90ZWxoYWlyXFxTY2VuZTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrRkM7UUFoRkcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFFakMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGdCQUFVLEdBQWMsSUFBSSxDQUFBO1FBZ0I1QixXQUFLLEdBQUcsS0FBSyxDQUFBOztRQXVDYixpQkFBaUI7SUFDckIsQ0FBQztJQXZERyx3QkFBSyxHQUFMO1FBQUEsaUJBY0M7UUFiRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsVUFBVSxFQUFFLFNBQVM7WUFDakUsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNqRSw2QkFBNkI7WUFDN0IsSUFBSTtZQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFD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USxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUUvQjtRQURHLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNHO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ0s7SUExQlgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtGNUI7SUFBRCxlQUFDO0NBbEZELEFBa0ZDLENBbEZxQyxFQUFFLENBQUMsU0FBUyxHQWtGakQ7a0JBbEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW1DdXRTaGlydDogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2hpcnQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aWNrZXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRhb0NhbzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0SGFtOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kUG9wVXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGhhaXJDdXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsaWNrOmNjLkF1ZGlvQ2xpcD1udWxsXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgICB0aGlzLmFuaW1DdXRTaGlydC5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICh0cmFja0VudHJ5LCBsb29wQ291bnQpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSB0cmFja0VudHJ5LmFuaW1hdGlvbiA/IHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgOiAnJztcclxuICAgICAgICAgICAgLy8gaWYgKG5hbWUgPT0gJ2FuaW1hdGlvbicpIHtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBzZWxmLmFuaW1DdXRTaGlydC5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGFiKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGlzVGFiID0gZmFsc2VcclxuICAgIHRhcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RhYikgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5oYWlyQ3V0LCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5pc1RhYiA9IHRydWVcclxuICAgICAgICB0aGlzLnR1dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNoaXJ0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hbmltQ3V0U2hpcnQubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zaG93U3RlcDEoKVxyXG4gICAgfVxyXG4gICAgc2hvd1N0ZXAxKCkge1xyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygxLjgsIHsgem9vbVJhdGlvOiAxLjUgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMS44LCB7IHNjYWxlOiAxLjUsIHBvc2l0aW9uOiBjYy52MygwLCAxMDApIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLjgsIHsgcG9zaXRpb246IGNjLnYzKDAsIC0xMDApIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRQb3BVcCwgZmFsc2UsIDEpXHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxuICAgIGJ0bl9jaG9vc2VDYXJkKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLGZhbHNlLDEpXHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FyZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlja2V0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMudGlja2V0LmdldENvbXBvbmVudChcIlNjcmF0Y2hfdGlja2V0XCIpLmFkZEV2ZW50KClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGFvQ2FvLmFjdGl2ZT10cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1dEhhbS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkV3JvbmdcIilcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19