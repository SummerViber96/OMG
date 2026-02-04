
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
        _this.listCard2 = null;
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
        _this.linkToStore = null;
        _this.isTab = false;
        _this.isClickCard = false;
        return _this;
        // update (dt) {}
    }
    // @property(cc.Node)
    // endCard: cc.Node = null
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
            _this.scheduleOnce(function () {
                if (_this.isClickCard == false) {
                    _this.listCard.getChildByName("hand").active = true;
                }
            }, 2);
            cc.audioEngine.play(_this.soundPopUp, false, 1);
        }, 1);
    };
    NewClass.prototype.btn_chooseCard = function (event, value) {
        this.isClickCard = true;
        this.listCard.getChildByName("hand").active = false;
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
    NewClass.prototype.endGame = function () {
        var _this = this;
        cc.audioEngine.play(this.soundPopUp, false, 1);
        this.hand.active = true;
        this.scheduleOnce(function () {
            _this.listCard2.getChildByName("hand").active = true;
        }, 1);
        this.listCard2.active = true;
        this.linkToStore.active = true;
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
        property(cc.Node)
    ], NewClass.prototype, "listCard2", void 0);
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
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSG90ZWxoYWlyXFxTY2VuZTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2R0M7UUEzR0csWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFFakMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBa0IzQixXQUFLLEdBQUcsS0FBSyxDQUFBO1FBMEJiLGlCQUFXLEdBQUcsS0FBSyxDQUFBOztRQWtDbkIsaUJBQWlCO0lBQ3JCLENBQUM7SUE5RUcscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQix3QkFBSyxHQUFMO1FBQUEsaUJBY0M7UUFiRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsVUFBVSxFQUFFLFNBQVM7WUFDakUsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMs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QUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNLO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQTlCVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkc1QjtJQUFELGVBQUM7Q0E3R0QsQUE2R0MsQ0E3R3FDLEVBQUUsQ0FBQyxTQUFTLEdBNkdqRDtrQkE3R29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYW5pbUN1dFNoaXJ0OiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENhcmQyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdyb25nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzaGlydDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpY2tldDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGFvQ2FvOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXRIYW06IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRQb3BVcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGhhaXJDdXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgdGhpcy5hbmltQ3V0U2hpcnQuc2V0Q29tcGxldGVMaXN0ZW5lcihmdW5jdGlvbiAodHJhY2tFbnRyeSwgbG9vcENvdW50KSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gdHJhY2tFbnRyeS5hbmltYXRpb24gPyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lIDogJyc7XHJcbiAgICAgICAgICAgIC8vIGlmIChuYW1lID09ICdhbmltYXRpb24nKSB7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgc2VsZi5hbmltQ3V0U2hpcnQubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RhYikgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBpc1RhYiA9IGZhbHNlXHJcbiAgICB0YXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYWIpIHJldHVybjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuaGFpckN1dCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuaXNUYWIgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zaGlydC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYW5pbUN1dFNoaXJ0Lm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2hvd1N0ZXAxKClcclxuICAgIH1cclxuICAgIHNob3dTdGVwMSgpIHtcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMS44LCB7IHpvb21SYXRpbzogMS41IH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDEuOCwgeyBzY2FsZTogMS41LCBwb3NpdGlvbjogY2MudjMoMCwgMTAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMS44LCB7IHBvc2l0aW9uOiBjYy52MygwLCAtMTAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDbGlja0NhcmQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDYXJkLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFBvcFVwLCBmYWxzZSwgMSlcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG4gICAgaXNDbGlja0NhcmQgPSBmYWxzZVxyXG4gICAgYnRuX2Nob29zZUNhcmQoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5pc0NsaWNrQ2FyZCA9IHRydWVcclxuICAgICAgICB0aGlzLmxpc3RDYXJkLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FyZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlja2V0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMudGlja2V0LmdldENvbXBvbmVudChcIlNjcmF0Y2hfdGlja2V0XCIpLmFkZEV2ZW50KClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGFvQ2FvLmFjdGl2ZT10cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1dEhhbS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkV3JvbmdcIilcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVuZEdhbWUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUG9wVXAsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2FyZDIuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfSwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5saXN0Q2FyZDIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19