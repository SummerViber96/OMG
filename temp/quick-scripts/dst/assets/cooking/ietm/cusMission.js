
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cooking/ietm/cusMission.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2147a0Ce3ZCdIsZ8wX2Vtd8', 'cusMission');
// cooking/ietm/cusMission.ts

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
        _this.soundHappy = null;
        _this.dau = false;
        _this.socola = false;
        _this.count = [];
        _this.lbCountSc = null;
        _this.lbCountDau = null;
        _this.pop = null;
        _this.anim = null;
        _this.doneNode = null;
        _this.doneNode2 = null;
        _this.fillBar = null;
        _this.isEnd = false;
        _this.isSuccess = false;
        _this.gamePlay = null;
        _this.timeFill = 60;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        // this.loadTime()
    };
    // checkBread(bread) {
    //     if (this.isEnd) return;
    //     let breadComp = bread.getComponent("preBread");
    //     if (this.bread == true && this.hotDog == breadComp.isHotDog && this.chili == breadComp.isTuongCa) {
    //         this.updateMission()
    //     }
    //     else {
    //         this.scheduleOnce(() => {
    //             this.isEnd = true
    //             this.end(false)
    //             cc.audioEngine.play(this.gamePlay.soundWrong, false, 0.8)
    //         }, 0.4)
    //     }
    // }
    // checkBuger(buger) {
    //     if (this.isEnd) return;
    //     let breadComp = buger.getComponent("buger");
    //     if (this.buger == true && this.meat == breadComp.isMeat && this.vegettable == breadComp.isvegettable) {
    //         this.updateMission()
    //     }
    //     else {
    //         this.scheduleOnce(() => {
    //             this.isEnd = true
    //             this.end(false)
    //             cc.audioEngine.play(this.gamePlay.soundWrong, false, 0.8)
    //         }, 0.4)
    //     }
    // }
    NewClass.prototype.updateMission = function (value) {
        var _this = this;
        cc.audioEngine.play(this.gamePlay.soundSellDone, false, 1);
        switch (value) {
            case 0: //dau
                this.count[0]--;
                if (this.count[0] == 0) {
                    this.isEnd = true;
                    this.scheduleOnce(function () {
                        _this.doneNode.active = true;
                    }, 0.3);
                    this.lbCountDau.node.active = false;
                }
                break;
            case 1: //socola
                this.count[1]--;
                if (this.count[1] == 0) {
                    this.isEnd = true;
                    this.scheduleOnce(function () {
                        _this.doneNode2.active = true;
                    }, 0.3);
                    this.lbCountSc.node.active = false;
                    // this.scheduleOnce(() => {
                    // }, 0.4)
                }
                break;
        }
        this.scheduleOnce(function () {
            _this.node.getChildByName("vfx_coin").active = true;
            _this.node.getChildByName("vfx_coin").getComponent(cc.Animation).play();
            _this.pop.getChildByName("right").active = true;
            _this.pop.getChildByName("right").getComponent(cc.Animation).play();
        }, 0.4);
        if (this.count[1] == 0 && this.count[0] == 0) {
            this.end(true);
        }
        globalThis.gold += 50;
        // this.count--;
        // this.scheduleOnce(() => {
        //     cc.audioEngine.play(this.gamePlay.soundYes, false, 1)
        //     cc.audioEngine.play(this.gamePlay.soundNice, false, 0.5)
        //     this.anim.setAnimation(0, "8.happy", true)
        // }, 0.4)
    };
    NewClass.prototype.end = function (value) {
        var _this = this;
        if (this.isSuccess)
            return;
        this.isSuccess = true;
        this.gamePlay.successCus();
        if (value == true) {
            cc.audioEngine.play(this.soundHappy, false, 1);
            this.doneNode.active = true;
            this.doneNode2.active = true;
            this.lbCountDau.node.active = false;
            this.lbCountSc.node.active = false;
            this.anim.setAnimation(0, "happy", false);
            this.pop.getChildByName("right").active = true;
            this.node.getChildByName("happy").active = true;
        }
        else {
            this.unscheduleAllCallbacks();
            this.anim.setAnimation(0, "angry", false);
            this.pop.getChildByName("wrong").active = true;
            this.node.getChildByName("angry").active = true;
        }
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.gamePlay.soundClosePop, false, 1);
            cc.tween(_this.pop).to(0.3, { scale: 0 }).start();
            _this.anim.setAnimation(0, "walk", true);
            cc.tween(_this.node).to(1, { position: cc.v3(-900, 123.591) }).call(function () {
                _this.node.active = false;
                _this.gamePlay.nextCus(value);
            }).start();
        }, 0.5);
    };
    NewClass.prototype.update = function (dt) {
        // this.lbCountSc.string = "x" + this.count[1].toString()
        // this.lbCountDau.string = "x" + this.count[0].toString()
    };
    NewClass.prototype.happy = function () {
        var _this = this;
        this.anim.setAnimation(0, "happy", false);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "idle", true);
        }, 1);
    };
    NewClass.prototype.checkSell = function (donut) {
        var donutComp = donut.getComponent("donut");
        var check = false;
        if (this.socola && this.count[1] > 0) {
            if (donutComp.isSocola) {
                this.updateMission(1);
                check = true;
            }
        }
        if (this.dau) {
            if (donutComp.isDau && this.count[0] > 0) {
                this.updateMission(0);
                check = true;
            }
        }
        if (check == false) {
            this.isEnd = true;
            this.end(false);
            cc.audioEngine.play(this.gamePlay.soundWrong, false, 0.8);
        }
    };
    NewClass.prototype.loadTime = function () {
        cc.tween(this.fillBar).to(this.timeFill, { fillRange: 0 }).call(function () { }).start();
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHappy", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "dau", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "socola", void 0);
    __decorate([
        property([cc.Integer])
    ], NewClass.prototype, "count", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCountSc", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCountDau", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "doneNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "doneNode2", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillBar", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcY3VzTWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlNQztRQS9MRyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsU0FBRyxHQUFHLEtBQUssQ0FBQTtRQUVYLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFHZixXQUFLLEdBQUcsRUFBRSxDQUFBO1FBRVYsZUFBUyxHQUFhLElBQUksQ0FBQTtRQUUxQixnQkFBVSxHQUFhLElBQUksQ0FBQTtRQUUzQixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBQ3pCLFdBQUssR0FBRyxLQUFLLENBQUE7UUFDYixlQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixjQUFRLEdBQUcsRUFBRSxDQUFBOztJQXNLakIsQ0FBQztJQXJLRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ2pFLGtCQUFrQjtJQUN0QixDQUFDO0lBQ0Qsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixzREFBc0Q7SUFDdEQsMEdBQTBHO0lBQzFHLCtCQUErQjtJQUMvQixRQUFRO0lBQ1IsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLHdFQUF3RTtJQUN4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QyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lDQUNWO0lBRVg7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0Q0FDTjtJQUdmO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzJDQUNiO0lBRVY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQ0FDRTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSztJQXZCUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaU01QjtJQUFELGVBQUM7Q0FqTUQsQUFpTUMsQ0FqTXFDLEVBQUUsQ0FBQyxTQUFTLEdBaU1qRDtrQkFqTW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIYXBweTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBkYXUgPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBzb2NvbGEgPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLkludGVnZXJdKVxyXG4gICAgY291bnQgPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb3VudFNjOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ291bnREYXU6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3A6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9uZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvbmVOb2RlMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBpc0VuZCA9IGZhbHNlXHJcbiAgICBpc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICB0aW1lRmlsbCA9IDYwXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpXHJcbiAgICAgICAgLy8gdGhpcy5sb2FkVGltZSgpXHJcbiAgICB9XHJcbiAgICAvLyBjaGVja0JyZWFkKGJyZWFkKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNFbmQpIHJldHVybjtcclxuICAgIC8vICAgICBsZXQgYnJlYWRDb21wID0gYnJlYWQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIik7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuYnJlYWQgPT0gdHJ1ZSAmJiB0aGlzLmhvdERvZyA9PSBicmVhZENvbXAuaXNIb3REb2cgJiYgdGhpcy5jaGlsaSA9PSBicmVhZENvbXAuaXNUdW9uZ0NhKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudXBkYXRlTWlzc2lvbigpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5lbmQoZmFsc2UpXHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRXcm9uZywgZmFsc2UsIDAuOClcclxuICAgIC8vICAgICAgICAgfSwgMC40KVxyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjaGVja0J1Z2VyKGJ1Z2VyKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNFbmQpIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgbGV0IGJyZWFkQ29tcCA9IGJ1Z2VyLmdldENvbXBvbmVudChcImJ1Z2VyXCIpO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmJ1Z2VyID09IHRydWUgJiYgdGhpcy5tZWF0ID09IGJyZWFkQ29tcC5pc01lYXQgJiYgdGhpcy52ZWdldHRhYmxlID09IGJyZWFkQ29tcC5pc3ZlZ2V0dGFibGUpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy51cGRhdGVNaXNzaW9uKClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmVuZChmYWxzZSlcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZFdyb25nLCBmYWxzZSwgMC44KVxyXG4gICAgLy8gICAgICAgICB9LCAwLjQpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHVwZGF0ZU1pc3Npb24odmFsdWUpIHsgLy8xOnNvY29sYSAvLzA6ZGF1XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy9kYXVcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRbMF0tLVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmVOb2RlLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJDb3VudERhdS5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOiAvL3NvY29sYVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudFsxXS0tXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudFsxXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZU5vZGUyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJDb3VudFNjLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB9LCAwLjQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhfY29pblwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZmeF9jb2luXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAgICAgfSwgMC40KVxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50WzFdID09IDAgJiYgdGhpcy5jb3VudFswXSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kKHRydWUpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gNTBcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jb3VudC0tO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kWWVzLCBmYWxzZSwgMSlcclxuICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kTmljZSwgZmFsc2UsIDAuNSlcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCI4LmhhcHB5XCIsIHRydWUpXHJcblxyXG5cclxuICAgICAgICAvLyB9LCAwLjQpXHJcblxyXG4gICAgfVxyXG4gICAgZW5kKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdWNjZXNzKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1N1Y2Nlc3MgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5zdWNjZXNzQ3VzKClcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGFwcHksIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLmRvbmVOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZG9uZU5vZGUyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxiQ291bnREYXUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sYkNvdW50U2Mubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiaGFwcHlcIiwgZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYXBweVwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImFuZ3J5XCIsIGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcIndyb25nXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYW5ncnlcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRDbG9zZVBvcCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnBvcCkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIndhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtOTAwLCAxMjMuNTkxKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5uZXh0Q3VzKHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDAuNSlcclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5sYkNvdW50U2Muc3RyaW5nID0gXCJ4XCIgKyB0aGlzLmNvdW50WzFdLnRvU3RyaW5nKClcclxuICAgICAgICAvLyB0aGlzLmxiQ291bnREYXUuc3RyaW5nID0gXCJ4XCIgKyB0aGlzLmNvdW50WzBdLnRvU3RyaW5nKClcclxuXHJcbiAgICB9XHJcbiAgICBoYXBweSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiaGFwcHlcIiwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG5cclxuICAgIH1cclxuICAgIGNoZWNrU2VsbChkb251dCkge1xyXG4gICAgICAgIGxldCBkb251dENvbXAgPSBkb251dC5nZXRDb21wb25lbnQoXCJkb251dFwiKVxyXG4gICAgICAgIGxldCBjaGVjayA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuc29jb2xhICYmIHRoaXMuY291bnRbMV0gPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChkb251dENvbXAuaXNTb2NvbGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWlzc2lvbigxKVxyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF1KSB7XHJcbiAgICAgICAgICAgIGlmIChkb251dENvbXAuaXNEYXUgJiYgdGhpcy5jb3VudFswXSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWlzc2lvbigwKVxyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZW5kKGZhbHNlKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRXcm9uZywgZmFsc2UsIDAuOClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkVGltZSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGxCYXIpLnRvKHRoaXMudGltZUZpbGwsIHsgZmlsbFJhbmdlOiAwIH0pLmNhbGwoKCkgPT4geyB9KS5zdGFydCgpXHJcbiAgICB9XHJcbn1cclxuIl19