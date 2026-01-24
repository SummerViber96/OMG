
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
        _this.isEnd = false;
        _this.isSuccess = false;
        _this.gamePlay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
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
    NewClass.prototype.checkBuger = function (buger) {
        var _this = this;
        if (this.isEnd)
            return;
        var breadComp = buger.getComponent("buger");
        if (this.buger == true && this.meat == breadComp.isMeat && this.vegettable == breadComp.isvegettable) {
            this.updateMission();
        }
        else {
            this.scheduleOnce(function () {
                _this.isEnd = true;
                _this.end(false);
                cc.audioEngine.play(_this.gamePlay.soundWrong, false, 0.8);
            }, 0.4);
        }
    };
    NewClass.prototype.updateMission = function (value) {
        var _this = this;
        cc.audioEngine.play(this.gamePlay.soundSellDone, false, 1);
        switch (value) {
            case 0: //dau
                this.count[0]--;
                if (this.count[0] == 0) {
                    this.isEnd = true;
                }
                break;
            case 1: //socola
                this.count[1]--;
                if (this.count[1] == 0) {
                    this.isEnd = true;
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
            if (_this.count[1] == 0 && _this.count[0] == 0) {
                _this.end(true);
            }
        }, 0.4);
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
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.gamePlay.soundClosePop, false, 1);
            cc.tween(_this.pop).to(0.3, { scale: 0 }).start();
            _this.anim.setAnimation(0, "walk", true);
            cc.tween(_this.node).to(1, { position: cc.v3(-900, 123.591) }).call(function () {
                _this.node.active = false;
                _this.gamePlay.nextCus(value);
            }).start();
        }, 0.5);
        if (value == true) {
            cc.audioEngine.play(this.soundHappy, false, 1);
            this.anim.setAnimation(0, "happy", false);
            this.pop.getChildByName("right").active = true;
            this.node.getChildByName("happy").active = true;
        }
        else {
            this.anim.setAnimation(0, "angry", false);
            this.pop.getChildByName("wrong").active = true;
            this.node.getChildByName("angry").active = true;
        }
    };
    NewClass.prototype.update = function (dt) {
        this.lbCountSc.string = "x" + this.count[1].toString();
        this.lbCountDau.string = "x" + this.count[0].toString();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcY3VzTWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNLQztRQXBLRyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsU0FBRyxHQUFHLEtBQUssQ0FBQTtRQUVYLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFHZixXQUFLLEdBQUcsRUFBRSxDQUFBO1FBRVYsZUFBUyxHQUFhLElBQUksQ0FBQTtRQUUxQixnQkFBVSxHQUFhLElBQUksQ0FBQTtRQUUzQixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBQ3hCLFdBQUssR0FBRyxLQUFLLENBQUE7UUFDYixlQUFTLEdBQUMsS0FBSyxDQUFBO1FBQ2YsY0FBUSxHQUFHLElBQUksQ0FBQTs7SUFrSm5CLENBQUM7SUFqSkcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUVyRSxDQUFDO0lBQ0Qsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixzREFBc0Q7SUFDdEQsMEdBQTBHO0lBQzFHLCtCQUErQjtJQUMvQixRQUFRO0lBQ1IsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLHdFQUF3RTtJQUN4RSxrQkFBa0I7SUFFbEIsUUFBUTtJQUNSLElBQUk7SUFDSiw2QkFBVSxHQUFWLFVBQVcsS0FBSztRQUFoQixpQkFjQztRQWJHLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBRXZCLElBQUksU0FB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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzBDQUNFO0lBakJQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzSzVCO0lBQUQsZUFBQztDQXRLRCxBQXNLQyxDQXRLcUMsRUFBRSxDQUFDLFNBQVMsR0FzS2pEO2tCQXRLb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhhcHB5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGRhdSA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIHNvY29sYSA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuSW50ZWdlcl0pXHJcbiAgICBjb3VudCA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkNvdW50U2M6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb3VudERhdTogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgaXNFbmQgPSBmYWxzZVxyXG4gICAgaXNTdWNjZXNzPWZhbHNlXHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIilcclxuXHJcbiAgICB9XHJcbiAgICAvLyBjaGVja0JyZWFkKGJyZWFkKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNFbmQpIHJldHVybjtcclxuICAgIC8vICAgICBsZXQgYnJlYWRDb21wID0gYnJlYWQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIik7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuYnJlYWQgPT0gdHJ1ZSAmJiB0aGlzLmhvdERvZyA9PSBicmVhZENvbXAuaXNIb3REb2cgJiYgdGhpcy5jaGlsaSA9PSBicmVhZENvbXAuaXNUdW9uZ0NhKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudXBkYXRlTWlzc2lvbigpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5lbmQoZmFsc2UpXHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRXcm9uZywgZmFsc2UsIDAuOClcclxuICAgIC8vICAgICAgICAgfSwgMC40KVxyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBjaGVja0J1Z2VyKGJ1Z2VyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGJyZWFkQ29tcCA9IGJ1Z2VyLmdldENvbXBvbmVudChcImJ1Z2VyXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmJ1Z2VyID09IHRydWUgJiYgdGhpcy5tZWF0ID09IGJyZWFkQ29tcC5pc01lYXQgJiYgdGhpcy52ZWdldHRhYmxlID09IGJyZWFkQ29tcC5pc3ZlZ2V0dGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNaXNzaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZChmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZFdyb25nLCBmYWxzZSwgMC44KVxyXG4gICAgICAgICAgICB9LCAwLjQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1pc3Npb24odmFsdWUpIHsgLy8xOnNvY29sYSAvLzA6ZGF1XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy9kYXVcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRbMF0tLVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogLy9zb2NvbGFcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRbMV0tLVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMV0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB9LCAwLjQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhfY29pblwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZmeF9jb2luXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMV0gPT0gMCAmJiB0aGlzLmNvdW50WzBdID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kKHRydWUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC40KVxyXG5cclxuICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gNTBcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jb3VudC0tO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kWWVzLCBmYWxzZSwgMSlcclxuICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kTmljZSwgZmFsc2UsIDAuNSlcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCI4LmhhcHB5XCIsIHRydWUpXHJcblxyXG5cclxuICAgICAgICAvLyB9LCAwLjQpXHJcblxyXG4gICAgfVxyXG4gICAgZW5kKHZhbHVlKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc1N1Y2Nlc3MpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNTdWNjZXNzPXRydWVcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LnN1Y2Nlc3NDdXMoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kQ2xvc2VQb3AsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5wb3ApLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCxcIndhbGtcIix0cnVlKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC05MDAsIDEyMy41OTEpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lm5leHRDdXModmFsdWUpXHJcblxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhhcHB5LGZhbHNlLDEpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJoYXBweVwiLCBmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhcHB5XCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiYW5ncnlcIiwgZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwid3JvbmdcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhbmdyeVwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5sYkNvdW50U2Muc3RyaW5nID0gXCJ4XCIgKyB0aGlzLmNvdW50WzFdLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLmxiQ291bnREYXUuc3RyaW5nID0gXCJ4XCIgKyB0aGlzLmNvdW50WzBdLnRvU3RyaW5nKClcclxuXHJcbiAgICB9XHJcbiAgICBoYXBweSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiaGFwcHlcIiwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG5cclxuICAgIH1cclxuICAgIGNoZWNrU2VsbChkb251dCkge1xyXG4gICAgICAgIGxldCBkb251dENvbXAgPSBkb251dC5nZXRDb21wb25lbnQoXCJkb251dFwiKVxyXG4gICAgICAgIGxldCBjaGVjayA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuc29jb2xhJiZ0aGlzLmNvdW50WzFdPjApIHtcclxuICAgICAgICAgICAgaWYgKGRvbnV0Q29tcC5pc1NvY29sYSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNaXNzaW9uKDEpXHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXUpIHtcclxuICAgICAgICAgICAgaWYgKGRvbnV0Q29tcC5pc0RhdSYmdGhpcy5jb3VudFswXT4wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1pc3Npb24oMClcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVjayA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmVuZChmYWxzZSlcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kV3JvbmcsIGZhbHNlLCAwLjgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==