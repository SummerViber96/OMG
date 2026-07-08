
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
        _this.fillYellow = null;
        _this.fillRed = null;
        _this.tag = 0;
        _this.gamePlay = null;
        _this.isSuccess = false;
        _this.isCountingDown = false;
        _this.fillBarColorState = 0;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
    };
    NewClass.prototype.countDown = function () {
        var _this = this;
        this.fillBar.node.parent.active = true;
        this.isCountingDown = true;
        this.fillBarColorState = 0;
        cc.tween(this.fillBar).to(this.countTime, { fillRange: 0 }).call(function () {
            _this.isCountingDown = false;
            if (!_this.isSuccess) {
                _this.gamePlay.cusOut(_this.node);
                _this.pop.active = false;
            }
        }).start();
    };
    NewClass.prototype.moveByEnd = function () {
        var _this = this;
        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).by(1, { position: cc.v3(-120, 50) }).call(function () {
            _this.anim.setAnimation(0, "Waiting2", true);
            _this.pop.active = true;
        }).start();
    };
    NewClass.prototype.walk = function (time, pos) {
        this.pop.active = false;
        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).by(time, { position: pos }).call(function () {
        }).start();
    };
    NewClass.prototype.updateFillBarColor = function () {
        if (!this.isCountingDown)
            return;
        var range = this.fillBar.fillRange;
        if (range < 0.2 && this.fillBarColorState < 2) {
            this.fillBar.spriteFrame = this.fillRed;
            this.fillBarColorState = 2;
        }
        else if (range < 0.5 && this.fillBarColorState < 1) {
            this.fillBar.spriteFrame = this.fillYellow;
            this.fillBarColorState = 1;
            this.anim.setAnimation(0, "Waiting3", true);
        }
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
        // this.pop.getChildByName("hand").active = true
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
    NewClass.prototype.ngoiTho = function () {
        this.anim.setAnimation(0, "Abdominal_Tired", true);
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
        this.anim.setAnimation(0, "HappyOut", false);
        cc.tween(this.pop).to(0.2, { scale: 0 }).start();
        this.node.getChildByName("notiBonusCoin2").active = true;
    };
    NewClass.prototype.smile = function () {
        console.log("smile");
        this.isCountingDown = false;
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
            _this.anim.setAnimation(0, "Waiting2", true);
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
        }, 3.2);
    };
    NewClass.prototype.boxing = function () {
        this.anim.setAnimation(0, "Boxing", true);
        this.node.scaleX = 1;
    };
    NewClass.prototype.moveOut = function () {
        var _this = this;
        this.isSuccess = true;
        this.isCountingDown = false;
        this.fillBar.node.parent.active = false;
        this.anim.setAnimation(0, "WalkInL", true);
        cc.tween(this.node).to(2.5, { position: cc.v3(392, 74) }).call(function () {
            _this.node.active = false;
        }).start();
    };
    NewClass.prototype.moveOut2 = function () {
        var _this = this;
        this.isSuccess = true;
        this.isCountingDown = false;
        this.fillBar.node.parent.active = false;
        this.anim.setAnimation(0, "WalkOutR", true);
        cc.tween(this.node).to(1, { position: cc.v3(101, -143) }).call(function () {
            _this.anim.setAnimation(0, "WalkInR", true);
        }).to(2, { position: cc.v3(392, 74) }).call(function () {
            _this.node.active = false;
        }).start();
    };
    NewClass.prototype.update = function () {
        this.updateFillBarColor();
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
        property(cc.SpriteFrame)
    ], NewClass.prototype, "fillYellow", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "fillRed", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXGN1c0d5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlPQztRQTlORyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixlQUFTLEdBQUcsQ0FBQyxDQUFBO1FBRWIsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUV6QixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFFL0IsU0FBRyxHQUFHLENBQUMsQ0FBQTtRQUNQLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixlQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLG9CQUFjLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLHVCQUFpQixHQUFHLENBQUMsQ0FBQTs7SUE0TXpCLENBQUM7SUEzTUcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUE7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQTtRQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFB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LENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ2pEO0lBQ0wsQ0FBQztJQUNELDZCQUFVLEdBQVY7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTVDLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFakMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBRTFCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFDRCw4QkFBVyxHQUFYO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxZ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LFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpTzVCO0lBQUQsZUFBQztDQWpPRCxBQWlPQyxDQWpPcUMsRUFBRSxDQUFDLFNBQVMsR0FpT2pEO2tCQWpPb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9wOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIYXBweTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBjb3VudFRpbWUgPSAwXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlsbEJhcjogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZmlsbFllbGxvdzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZmlsbFJlZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICB0YWcgPSAwXHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIGlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICBpc0NvdW50aW5nRG93biA9IGZhbHNlXHJcbiAgICBmaWxsQmFyQ29sb3JTdGF0ZSA9IDBcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHeW1cIilcclxuICAgIH1cclxuICAgIGNvdW50RG93bigpIHtcclxuICAgICAgICB0aGlzLmZpbGxCYXIubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNDb3VudGluZ0Rvd24gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5maWxsQmFyQ29sb3JTdGF0ZSA9IDBcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGxCYXIpLnRvKHRoaXMuY291bnRUaW1lLCB7IGZpbGxSYW5nZTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvdW50aW5nRG93biA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1N1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuY3VzT3V0KHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIHRoaXMucG9wLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBtb3ZlQnlFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtPdXRSXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuYnkoMSwgeyBwb3NpdGlvbjogY2MudjMoLTEyMCwgNTApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2FpdGluZzJcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgfVxyXG4gICAgd2Fsayh0aW1lLCBwb3MpIHtcclxuICAgICAgICB0aGlzLnBvcC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtPdXRSXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuYnkodGltZSwgeyBwb3NpdGlvbjogcG9zfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICB1cGRhdGVGaWxsQmFyQ29sb3IoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ291bnRpbmdEb3duKSByZXR1cm5cclxuICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuZmlsbEJhci5maWxsUmFuZ2VcclxuICAgICAgICBpZiAocmFuZ2UgPCAwLjIgJiYgdGhpcy5maWxsQmFyQ29sb3JTdGF0ZSA8IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsUmVkXHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEJhckNvbG9yU3RhdGUgPSAyXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2UgPCAwLjUgJiYgdGhpcy5maWxsQmFyQ29sb3JTdGF0ZSA8IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsWWVsbG93XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEJhckNvbG9yU3RhdGUgPSAxXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nM1wiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93TWlzaW9uKCkge1xyXG4gICAgICAgIHRoaXMucG9wLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgfVxyXG4gICAgbW92ZShwb3MsIHRpbWUpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0luTFwiLCB0cnVlKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKHRpbWUsIHsgcG9zaXRpb246IHBvcyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVCTFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgbW92ZTMocG9zLCB0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtPdXRSXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8odGltZSwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZUJMXCIsIHRydWUpO1xyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBtb3ZlMihwb3MsIHRpbWUpIHtcclxuICAgICAgICAvLyB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0luUlwiLCB0cnVlKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKHRpbWUsIHsgcG9zaXRpb246IHBvcyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhaXRpbmczXCIsIHRydWUpO1xyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBzaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiU2l0X1dhaXRpbmdcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBzaG93UG9wKCkge1xyXG4gICAgICAgIHRoaXMucG9wLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAgICAgLy8gdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIGNsaWNrUG9wKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xjaWsgcG9wXCIpXHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNsaWNrIHBvcFwiKVxyXG4gICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0XHJcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnBvcCkudG8oMC4yLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5kb0N1cyh0aGlzLnRhZylcclxuXHJcbiAgICB9XHJcbiAgICBnYXBCdW5nKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJBYmRvbWluYWxcIiwgdHJ1ZSlcclxuICAgIH1cclxuICAgIG5nb2lUaG8oKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkFiZG9taW5hbF9UaXJlZFwiLCB0cnVlKVxyXG5cclxuICAgIH1cclxuICAgIGRheVRhKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJBYkNydW5jaFwiLCB0cnVlKVxyXG5cclxuICAgIH1cclxuICAgIHR1Y0dpYW4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0dWMgZ2lhblwiKVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nM1wiLCB0cnVlKVxyXG5cclxuICAgIH1cclxuICAgIGhhcHB5KCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnNvdW5kSGFwcHkpIHtcclxuICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGFwcHksIGZhbHNlLCAxKVxyXG4gICAgICAgIC8vICAgICB0aFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSGFwcHlPdXRcIiwgZmFsc2UpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wKS50bygwLjIsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBzbWlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNtaWxlXCIpXHJcbiAgICAgICAgdGhpcy5pc0NvdW50aW5nRG93biA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5maWxsQmFyLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc1N1Y2Nlc3MgPSB0cnVlXHJcbiAgICAgICAgaWYgKHRoaXMuc291bmRIYXBweSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIYXBweSwgZmFsc2UsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc21pbGUyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kSGFwcHkpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGFwcHksIGZhbHNlLCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVUb1dhaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtJblJcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMubW92ZTIoY2MudjMoMzI0LCAtOCksIDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa091dFJcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmUyKGNjLnYzKDE1NywgMjkpLCAxKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhaXRpbmcyXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcC5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBtb3ZlVG9XYWl0MigpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0luUlwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlMihjYy52MygzMjQsIC04KSwgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrT3V0UlwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW92ZTIoY2MudjMoNjAsIDI5KSwgMSlcclxuXHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nM1wiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIG1vdmVUb1dhaXQzKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrSW5SXCIsIHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmUyKGNjLnYzKDMyNCwgLTgpLCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtPdXRSXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZlMihjYy52MygtMTUwLCAtODApLCAyKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhaXRpbmczXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc2hvd01pc3Npb25Cb3hpbmcoKVxyXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93bigpXHJcbiAgICAgICAgfSwgMy4yKVxyXG4gICAgfVxyXG4gICAgYm94aW5nKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJCb3hpbmdcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuXHJcbiAgICB9XHJcbiAgICBtb3ZlT3V0KCkge1xyXG4gICAgICAgIHRoaXMuaXNTdWNjZXNzID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNDb3VudGluZ0Rvd24gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZmlsbEJhci5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrSW5MXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMi41LCB7IHBvc2l0aW9uOiBjYy52MygzOTIsIDc0KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgbW92ZU91dDIoKSB7XHJcbiAgICAgICAgdGhpcy5pc1N1Y2Nlc3MgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pc0NvdW50aW5nRG93biA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5maWxsQmFyLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtPdXRSXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMTAxLCAtMTQzKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtJblJcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoMzkyLCA3NCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxCYXJDb2xvcigpXHJcbiAgICB9XHJcbn1cclxuIl19