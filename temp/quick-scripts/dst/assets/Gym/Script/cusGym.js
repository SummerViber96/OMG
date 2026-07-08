
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Gym/Script/cusGym.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02049SD+R5F+KTmBtZC0ZwB', 'cusGym');
// Gym/Script/cusGym.ts

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
        _this.pop = null;
        _this.anim = null;
        _this.soundHappy = null;
        _this.countTime = 0;
        _this.fillBar = null;
        _this.tag = 0;
        _this.gamePlay = null;
        _this.isSuccess = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
    };
    NewClass.prototype.countDown = function () {
        var _this = this;
        this.fillBar.node.parent.active = true;
        cc.tween(this.fillBar).to(this.countTime, { fillRange: 0 }).call(function () {
            if (!_this.isSuccess) {
                _this.gamePlay.cusOut(_this.node);
            }
        }).start();
    };
    NewClass.prototype.showMision = function () {
        this.pop.getComponent(cc.Animation).play();
    };
    NewClass.prototype.move = function (pos, time) {
        var _this = this;
        this.anim.setAnimation(0, "WalkInL", true);
        cc.tween(this.node).to(time, { position: pos }).call(function () {
            _this.anim.setAnimation(0, "IdleBL", true);
        }).start();
    };
    NewClass.prototype.move3 = function (pos, time) {
        var _this = this;
        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).to(time, { position: pos }).call(function () {
            _this.anim.setAnimation(0, "IdleBL", true);
        }).start();
    };
    NewClass.prototype.move2 = function (pos, time) {
        // this.anim.setAnimation(0, "WalkInR", true);
        cc.tween(this.node).to(time, { position: pos }).call(function () {
            // this.anim.setAnimation(0, "Waiting3", true);
        }).start();
    };
    NewClass.prototype.sit = function () {
        this.node.scaleX = 1;
        this.anim.setAnimation(0, "Sit_Waiting", true);
    };
    NewClass.prototype.showPop = function () {
        this.pop.active = true;
        this.pop.getComponent(cc.Animation).play();
        this.pop.getChildByName("hand").active = true;
    };
    NewClass.prototype.clickPop = function (event, value) {
        console.log("clcik pop");
        event.currentTarget.getComponent(cc.Button).enabled = false;
        // console.log("click pop")
        var btn = event.currentTarget;
        btn.getComponent(cc.Button).enabled = false;
        cc.tween(this.pop).to(0.2, { scale: 0 }).start();
        this.gamePlay.doCus(this.tag);
    };
    NewClass.prototype.gapBung = function () {
        this.anim.setAnimation(0, "Abdominal", true);
    };
    NewClass.prototype.dayTa = function () {
        this.anim.setAnimation(0, "AbCrunch", true);
    };
    NewClass.prototype.tucGian = function () {
        console.log("tuc gian");
        this.anim.setAnimation(0, "Waiting3", true);
    };
    NewClass.prototype.happy = function () {
        // if (this.soundHappy) {
        //     cc.audioEngine.play(this.soundHappy, false, 1)
        //     th
        // }
        this.anim.setAnimation(0, "HappyOut", true);
        cc.tween(this.pop).to(0.2, { scale: 0 }).start();
        this.node.getChildByName("notiBonusCoin2").active = true;
    };
    NewClass.prototype.smile = function () {
        console.log("smile");
        this.fillBar.node.parent.active = false;
        this.isSuccess = true;
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 1);
        }
    };
    NewClass.prototype.smile2 = function () {
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 1);
        }
    };
    NewClass.prototype.moveToWait = function () {
        var _this = this;
        this.anim.setAnimation(0, "WalkInR", true);
        this.move2(cc.v3(324, -8), 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "WalkOutR", true);
            _this.move2(cc.v3(157, 29), 1);
        }, 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "Waiting3", true);
            _this.pop.active = true;
        }, 2);
    };
    NewClass.prototype.moveToWait2 = function () {
        var _this = this;
        this.anim.setAnimation(0, "WalkInR", true);
        this.move2(cc.v3(324, -8), 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "WalkOutR", true);
            _this.move2(cc.v3(60, 29), 1);
        }, 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "Waiting3", true);
        }, 2);
    };
    NewClass.prototype.moveToWait3 = function () {
        var _this = this;
        this.anim.setAnimation(0, "WalkInR", true);
        this.move2(cc.v3(324, -8), 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "WalkOutR", true);
            _this.move2(cc.v3(-150, -80), 2);
        }, 1);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "Waiting3", true);
            _this.pop.active = true;
            _this.gamePlay.showMissionBoxing();
            _this.countDown();
        }, 3);
    };
    NewClass.prototype.boxing = function () {
        this.anim.setAnimation(0, "Boxing", true);
        this.node.scaleX = 1;
    };
    NewClass.prototype.moveOut = function () {
        var _this = this;
        this.isSuccess = true;
        this.fillBar.node.parent.active = false;
        this.anim.setAnimation(0, "WalkInL", true);
        cc.tween(this.node).to(2.5, { position: cc.v3(392, 74) }).call(function () {
            _this.node.active = false;
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHappy", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "countTime", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillBar", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXGN1c0d5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNLQztRQW5LRyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixlQUFTLEdBQUcsQ0FBQyxDQUFBO1FBRWIsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUV6QixTQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLGVBQVMsR0FBRyxLQUFLLENBQUE7O1FBc0pqQixpQkFBaUI7SUFDckIsQ0FBQztJQXRKRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN0QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3RCxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ2xDO1FBQ0ws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Q0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQ0FDRTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7K0NBQ1I7SUFFYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7eUNBQ2Q7SUFiVSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0s1QjtJQUFELGVBQUM7Q0F0S0QsQUFzS0MsQ0F0S3FDLEVBQUUsQ0FBQyxTQUFTLEdBc0tqRDtrQkF0S29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGFwcHk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgY291bnRUaW1lID0gMFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGxCYXI6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGFnID0gMFxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICBpc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkd5bVwiKVxyXG4gICAgfVxyXG4gICAgY291bnREb3duKCkge1xyXG4gICAgICAgIHRoaXMuZmlsbEJhci5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5maWxsQmFyKS50byh0aGlzLmNvdW50VGltZSwgeyBmaWxsUmFuZ2U6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1N1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuY3VzT3V0KHRoaXMubm9kZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIHNob3dNaXNpb24oKSB7XHJcbiAgICAgICAgdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICB9XHJcbiAgICBtb3ZlKHBvcywgdGltZSkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrSW5MXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8odGltZSwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZUJMXCIsIHRydWUpO1xyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBtb3ZlMyhwb3MsIHRpbWUpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa091dFJcIiwgdHJ1ZSk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byh0aW1lLCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlQkxcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIG1vdmUyKHBvcywgdGltZSkge1xyXG4gICAgICAgIC8vIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrSW5SXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8odGltZSwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2FpdGluZzNcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIHNpdCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJTaXRfV2FpdGluZ1wiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNob3dQb3AoKSB7XHJcbiAgICAgICAgdGhpcy5wb3AuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMucG9wLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBjbGlja1BvcChldmVudCwgdmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsY2lrIHBvcFwiKVxyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjbGljayBwb3BcIilcclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5wb3ApLnRvKDAuMiwgeyBzY2FsZTogMCB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuZG9DdXModGhpcy50YWcpXHJcblxyXG4gICAgfVxyXG4gICAgZ2FwQnVuZygpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiQWJkb21pbmFsXCIsIHRydWUpXHJcbiAgICB9XHJcbiAgICBkYXlUYSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiQWJDcnVuY2hcIiwgdHJ1ZSlcclxuXHJcbiAgICB9XHJcbiAgICB0dWNHaWFuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHVjIGdpYW5cIilcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2FpdGluZzNcIiwgdHJ1ZSlcclxuXHJcbiAgICB9XHJcbiAgICBoYXBweSgpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5zb3VuZEhhcHB5KSB7XHJcbiAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhhcHB5LCBmYWxzZSwgMSlcclxuICAgICAgICAvLyAgICAgdGhcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkhhcHB5T3V0XCIsIHRydWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wKS50bygwLjIsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBzbWlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNtaWxlXCIpXHJcbiAgICAgICAgdGhpcy5maWxsQmFyLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc1N1Y2Nlc3MgPSB0cnVlXHJcbiAgICAgICAgaWYgKHRoaXMuc291bmRIYXBweSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIYXBweSwgZmFsc2UsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc21pbGUyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kSGFwcHkpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGFwcHksIGZhbHNlLCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVUb1dhaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtJblJcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMubW92ZTIoY2MudjMoMzI0LCAtOCksIDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa091dFJcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmUyKGNjLnYzKDE1NywgMjkpLCAxKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhaXRpbmczXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcC5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBtb3ZlVG9XYWl0MigpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0luUlwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlMihjYy52MygzMjQsIC04KSwgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrT3V0UlwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW92ZTIoY2MudjMoNjAsIDI5KSwgMSlcclxuXHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nM1wiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIG1vdmVUb1dhaXQzKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrSW5SXCIsIHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmUyKGNjLnYzKDMyNCwgLTgpLCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtPdXRSXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZlMihjYy52MygtMTUwLCAtODApLCAyKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhaXRpbmczXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc2hvd01pc3Npb25Cb3hpbmcoKVxyXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93bigpXHJcbiAgICAgICAgfSwgMylcclxuICAgIH1cclxuICAgIGJveGluZygpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiQm94aW5nXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcblxyXG4gICAgfVxyXG4gICAgbW92ZU91dCgpIHtcclxuICAgICAgICB0aGlzLmlzU3VjY2VzcyA9IHRydWVcclxuICAgICAgICB0aGlzLmZpbGxCYXIubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0luTFwiLCB0cnVlKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDIuNSwgeyBwb3NpdGlvbjogY2MudjMoMzkyLCA3NCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19