
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
        _this.soundAngry = null;
        _this.soundAngry2 = null;
        _this.soundHello = null;
        _this.dau = false;
        _this.socola = false;
        _this.count = [];
        _this.order = [];
        _this.lbCountSc = null;
        _this.lbCountDau = null;
        _this.pop = null;
        _this.anim = null;
        _this.doneNode = null;
        _this.fillBar = null;
        _this.fillYellow = null;
        _this.fillRed = null;
        _this.timeWaiting = 30;
        _this.isEnd = false;
        _this.isSuccess = false;
        _this.gamePlay = null;
        _this.timeFill = 60;
        _this.isAngry = false;
        _this.isDelaySound = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        // this.loadTime()
        this.addEndEventSpine();
    };
    NewClass.prototype.showMission = function () {
        this.pop.getComponent(cc.Animation).play();
        this.anim.setAnimation(0, "idle", false);
        if (this.soundHello) {
            cc.audioEngine.play(this.soundHello, false, 1);
        }
        // this.loadTime()
    };
    NewClass.prototype.updateItem = function (id) {
        console.log("update item " + id);
        cc.audioEngine.play(this.gamePlay.soundOk, false, 1);
        this.doneNode.children[id].active = true;
    };
    NewClass.prototype.addEndEventSpine = function () {
        var _this = this;
        this.anim.setCompleteListener(function (track) {
            if (track.animation.name == "7.angry_idle") {
                if (!_this.isAngry) {
                    _this.anim.setAnimation(0, "3.buy_idle", true);
                }
            }
        });
    };
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
    };
    NewClass.prototype.move = function () {
        this.anim.setAnimation(0, "walk", false);
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
    NewClass.prototype.laugh = function () {
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 0.8);
        }
    };
    NewClass.prototype.update = function (dt) {
        // this.lbCountSc.string = "x" + this.count[1].toString()
        // this.lbCountDau.string = "x" + this.count[0].toString()
    };
    NewClass.prototype.happy = function () {
        var _this = this;
        // let fill = this.fillBar.node.parent
        cc.tween(this.pop).to(0.2, { scale: 0 }).start();
        this.anim.setAnimation(0, "8.happy", false);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "3.buy_idle", true);
        }, 1);
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 0.8);
        }
    };
    NewClass.prototype.angry = function () {
        this.anim.setAnimation(0, "7.angry_idle", false);
        cc.audioEngine.play(this.soundAngry2, false, 1);
        var wrongtick = this.pop.getChildByName('x');
        wrongtick.active = true;
        wrongtick.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            wrongtick.active = false;
        }, 0.5);
    };
    // wrong(){
    // }
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
        var _this = this;
        cc.tween(this.fillBar).to(this.timeWaiting, { fillRange: 0 }).call(function () { }).start();
        this.fillBar.fillRange = 1;
        var changedYellow = false;
        var changedRed = false;
        cc.tween(this.fillBar)
            .to(this.timeWaiting, { fillRange: 0 }, {
            progress: function (start, end, current, ratio) {
                var value = start + (end - start) * ratio;
                _this.fillBar.fillRange = value;
                if (value <= 0.5 && !changedYellow && _this.isSuccess == false) {
                    changedYellow = true;
                    _this.fillBar.spriteFrame = _this.fillYellow;
                    _this.anim.setAnimation(0, "6.angry", true);
                    if (_this.soundAngry) {
                        cc.audioEngine.play(_this.soundAngry, false, 1);
                    }
                }
                if (value <= 0.25 && !changedRed) {
                    changedRed = true;
                    _this.isAngry = true;
                    _this.fillBar.spriteFrame = _this.fillRed;
                    _this.anim.setAnimation(0, "7.angry_idle", true);
                    if (_this.soundAngry2 && _this.isSuccess == false) {
                        cc.audioEngine.play(_this.soundAngry2, false, 1);
                    }
                }
                return value;
            }
        }).call(function () {
            //  this.gamePlay.onEndGame(false)   
            // let id = this.gamePlay.getPlace(this.node)
            // this.gamePlay.isCountDone++
            // this.gamePlay.enqueueMove(this.node);
        })
            .start();
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHappy", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAngry", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAngry2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHello", void 0);
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
        property([cc.Integer])
    ], NewClass.prototype, "order", void 0);
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
    ], NewClass.prototype, "timeWaiting", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcY3VzTWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVRQztRQXJRRyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsU0FBRyxHQUFHLEtBQUssQ0FBQTtRQUVYLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixXQUFLLEdBQUcsRUFBRSxDQUFBO1FBRVYsV0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUVWLGVBQVMsR0FBYSxJQUFJLENBQUE7UUFFMUIsZ0JBQVUsR0FBYSxJQUFJLENBQUE7UUFFM0IsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQWdCLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBR3hCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBRWxDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLFdBQUssR0FBRyxLQUFLLENBQUE7UUFDYixlQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixjQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ2IsYUFBTyxHQUFHLEtBQUssQ0FBQTtRQTRLZixrQkFBWSxHQUFHLEtBQUssQ0FBQTs7SUFrRHhCLENBQUM7SUE3Tkcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1B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Q2EsUUFBUSxDQXVRNUI7SUFBRCxlQUFDO0NBdlFELEFBdVFDLENBdlFxQyxFQUFFLENBQUMsU0FBUyxHQXVRakQ7a0JBdlFvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGFwcHk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRBbmdyeTI6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGRhdSA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIHNvY29sYSA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KFtjYy5JbnRlZ2VyXSlcclxuICAgIGNvdW50ID0gW11cclxuICAgIEBwcm9wZXJ0eShbY2MuSW50ZWdlcl0pXHJcbiAgICBvcmRlciA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkNvdW50U2M6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb3VudERhdTogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb25lTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlsbEJhcjogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZmlsbFllbGxvdzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZmlsbFJlZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGltZVdhaXRpbmcgPSAzMFxyXG4gICAgaXNFbmQgPSBmYWxzZVxyXG4gICAgaXNTdWNjZXNzID0gZmFsc2VcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgdGltZUZpbGwgPSA2MFxyXG4gICAgaXNBbmdyeSA9IGZhbHNlXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpXHJcbiAgICAgICAgLy8gdGhpcy5sb2FkVGltZSgpXHJcbiAgICAgICAgdGhpcy5hZGRFbmRFdmVudFNwaW5lKCk7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd01pc3Npb24oKSB7XHJcbiAgICAgICAgdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgZmFsc2UpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kSGVsbG8pIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGVsbG8sIGZhbHNlLCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmxvYWRUaW1lKClcclxuICAgIH1cclxuICAgIHVwZGF0ZUl0ZW0oaWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBpdGVtIFwiICsgaWQpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kT2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuZG9uZU5vZGUuY2hpbGRyZW5baWRdLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIGFkZEVuZEV2ZW50U3BpbmUoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCI3LmFuZ3J5X2lkbGVcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQW5ncnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiMy5idXlfaWRsZVwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHVwZGF0ZU1pc3Npb24odmFsdWUpIHsgLy8xOnNvY29sYSAvLzA6ZGF1XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy9kYXVcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRbMF0tLVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmVOb2RlLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJDb3VudERhdS5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOiAvL3NvY29sYVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudFsxXS0tXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudFsxXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYkNvdW50U2Mubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sIDAuNClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZmeF9jb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidmZ4X2NvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgIHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG5cclxuICAgICAgICB9LCAwLjQpXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRbMV0gPT0gMCAmJiB0aGlzLmNvdW50WzBdID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5lbmQodHJ1ZSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSA1MFxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJ3YWxrXCIsIGZhbHNlKVxyXG5cclxuICAgIH1cclxuICAgIGVuZCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3VjY2VzcykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNTdWNjZXNzID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuc3VjY2Vzc0N1cygpXHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhhcHB5LCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5kb25lTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYkNvdW50RGF1Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGJDb3VudFNjLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImhhcHB5XCIsIGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFwcHlcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJhbmdyeVwiLCBmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1wiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImFuZ3J5XCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kQ2xvc2VQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnBvcCkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIndhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtOTAwLCAxMjMuNTkxKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5uZXh0Q3VzKHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDAuNSlcclxuXHJcbiAgICB9XHJcbiAgICBsYXVnaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZEhhcHB5KSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhhcHB5LCBmYWxzZSwgMC44KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgICAgICAvLyB0aGlzLmxiQ291bnRTYy5zdHJpbmcgPSBcInhcIiArIHRoaXMuY291bnRbMV0udG9TdHJpbmcoKVxyXG4gICAgICAgIC8vIHRoaXMubGJDb3VudERhdS5zdHJpbmcgPSBcInhcIiArIHRoaXMuY291bnRbMF0udG9TdHJpbmcoKVxyXG5cclxuICAgIH1cclxuICAgIGhhcHB5KCkge1xyXG4gICAgICAgIC8vIGxldCBmaWxsID0gdGhpcy5maWxsQmFyLm5vZGUucGFyZW50XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5wb3ApLnRvKDAuMiwgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIjguaGFwcHlcIiwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiMy5idXlfaWRsZVwiLCB0cnVlKVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgaWYgKHRoaXMuc291bmRIYXBweSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIYXBweSwgZmFsc2UsIDAuOClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgYW5ncnkoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIjcuYW5ncnlfaWRsZVwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MiwgZmFsc2UsIDEpXHJcbiAgICAgICAgbGV0IHdyb25ndGljayA9IHRoaXMucG9wLmdldENoaWxkQnlOYW1lKCd4JylcclxuICAgICAgICB3cm9uZ3RpY2suYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHdyb25ndGljay5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdyb25ndGljay5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgIH1cclxuICAgIC8vIHdyb25nKCl7XHJcblxyXG4gICAgLy8gfVxyXG4gICAgY2hlY2tTZWxsKGRvbnV0KSB7XHJcbiAgICAgICAgbGV0IGRvbnV0Q29tcCA9IGRvbnV0LmdldENvbXBvbmVudChcImRvbnV0XCIpXHJcbiAgICAgICAgbGV0IGNoZWNrID0gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5zb2NvbGEgJiYgdGhpcy5jb3VudFsxXSA+IDApIHtcclxuICAgICAgICAgICAgaWYgKGRvbnV0Q29tcC5pc1NvY29sYSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNaXNzaW9uKDEpXHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXUpIHtcclxuICAgICAgICAgICAgaWYgKGRvbnV0Q29tcC5pc0RhdSAmJiB0aGlzLmNvdW50WzBdID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNaXNzaW9uKDApXHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2sgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5lbmQoZmFsc2UpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZFdyb25nLCBmYWxzZSwgMC44KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzRGVsYXlTb3VuZCA9IGZhbHNlXHJcbiAgICBsb2FkVGltZSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGxCYXIpLnRvKHRoaXMudGltZVdhaXRpbmcsIHsgZmlsbFJhbmdlOiAwIH0pLmNhbGwoKCkgPT4geyB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDE7XHJcbiAgICAgICAgbGV0IGNoYW5nZWRZZWxsb3cgPSBmYWxzZTtcclxuICAgICAgICBsZXQgY2hhbmdlZFJlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbEJhcilcclxuICAgICAgICAgICAgLnRvKHRoaXMudGltZVdhaXRpbmcsIHsgZmlsbFJhbmdlOiAwIH0sIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiAoc3RhcnQsIGVuZCwgY3VycmVudCwgcmF0aW8pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPD0gMC41ICYmICFjaGFuZ2VkWWVsbG93ICYmIHRoaXMuaXNTdWNjZXNzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRZZWxsb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWUgPSB0aGlzLmZpbGxZZWxsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCI2LmFuZ3J5XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZEFuZ3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRBbmdyeSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPD0gMC4yNSAmJiAhY2hhbmdlZFJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkUmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FuZ3J5ID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsUmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiNy5hbmdyeV9pZGxlXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRBbmdyeTIgJiYgdGhpcy5pc1N1Y2Nlc3MgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MiwgZmFsc2UsIDEpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgdGhpcy5nYW1lUGxheS5vbkVuZEdhbWUoZmFsc2UpICAgXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgaWQgPSB0aGlzLmdhbWVQbGF5LmdldFBsYWNlKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZVBsYXkuaXNDb3VudERvbmUrK1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5lbnF1ZXVlTW92ZSh0aGlzLm5vZGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==