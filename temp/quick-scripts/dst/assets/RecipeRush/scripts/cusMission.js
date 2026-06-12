
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/cusMission.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2147a0Ce3ZCdIsZ8wX2Vtd8', 'cusMission');
// RecipeRush/scripts/cusMission.ts

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
        _this.chicken = false;
        _this.cake = false;
        _this.coca = false;
        _this.potato = false;
        _this.count = [];
        _this.order = [];
        _this.sauce = false;
        _this.lbCountSc = null;
        _this.lbCountDau = null;
        _this.pop = null;
        _this.anim = null;
        _this.doneNode = null;
        _this.fillBar = null;
        _this.fillYellow = null;
        _this.fillRed = null;
        _this.volumHello = 1;
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
        this.isEnd = false;
        this.isSuccess = false;
        this.isAngry = false;
        this.pop.getComponent(cc.Animation).play();
        this.anim.setAnimation(0, "idle", false);
        if (this.soundHello) {
            cc.audioEngine.play(this.soundHello, false, this.volumHello);
        }
        this.loadTime();
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
    NewClass.prototype.activeDone = function (value) {
        for (var i = 0; i < this.order.length; i++) {
            if (this.order[i] == value && this.doneNode.children[i].active == false) {
                this.doneNode.children[i].active = true;
                return;
            }
        }
    };
    NewClass.prototype.updateMission = function (value) {
        var _this = this;
        cc.audioEngine.play(this.gamePlay.soundSellDone, false, 1);
        this.activeDone(value);
        switch (value) {
            case 0: //chicken
                this.count[0]--;
                if (this.count[0] == 0) {
                    this.isEnd = true;
                    // this.lbCountDau.node.active = false
                }
                break;
            case 1: //coca
                this.count[1]--;
                if (this.count[1] == 0) {
                    this.isEnd = true;
                }
                break;
            case 2: //cake
                this.count[2]--;
                if (this.count[2] == 0) {
                    this.isEnd = true;
                }
                break;
            case 3: //potato
                this.count[3]--;
                if (this.count[3] == 0) {
                    this.isEnd = true;
                }
                break;
        }
        this.scheduleOnce(function () {
            _this.node.getChildByName("vfx_coin").active = true;
            _this.node.getChildByName("vfx_coin").getComponent(cc.Animation).play();
        }, 0.4);
        this.gamePlay.mcComp.deliverItem();
        this.gamePlay.sellTraySlot = -1;
        if (this.isOrderComplete()) {
            this.end(true);
        }
        globalThis.coin += 50;
    };
    NewClass.prototype.isOrderComplete = function () {
        if (!this.count || this.count.length === 0)
            return true;
        for (var i = 0; i < this.count.length; i++) {
            if (this.count[i] > 0)
                return false;
        }
        return true;
    };
    NewClass.prototype.move = function () {
        this.anim.setAnimation(0, "walk", false);
    };
    NewClass.prototype.end = function (value) {
        var _this = this;
        if (this.isSuccess)
            return;
        this.isSuccess = true;
        cc.Tween.stopAllByTarget(this.fillBar);
        if (value == true) {
            cc.audioEngine.play(this.soundHappy, false, 1);
            this.doneNode.active = true;
            // this.lbCountDau.node.active = false;
            // this.lbCountSc.node.active = false
            this.anim.setAnimation(0, "happy", false);
            // this.pop.getChildByName("right").active = true
            // this.node.getChildByName("happy").active = true
        }
        else {
            this.unscheduleAllCallbacks();
            this.anim.setAnimation(0, "angry", false);
            // this.pop.getChildByName("wrong").active = true
            // this.node.getChildByName("angry").active = true
        }
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.gamePlay.soundClosePop, false, 1);
            cc.tween(_this.pop).to(0.3, { scale: 0 }).start();
            _this.anim.setAnimation(0, "walk", true);
            cc.tween(_this.node)
                .by(1, { position: cc.v3(-500, 0) })
                .call(function () {
                _this.node.active = false;
                _this.gamePlay.nextCus(value, _this.node);
            })
                .start();
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
        this.anim.setAnimation(0, "angry", false);
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
    NewClass.prototype.checkSell = function () {
        console.log("checkSell");
        if (this.gamePlay.arrCus.indexOf(this.node) < 0)
            return false;
        return this.gamePlay.checkSell(this.node);
    };
    NewClass.prototype.validateSell = function () {
        var _this = this;
        var mcComp = this.gamePlay.mcComp;
        var itemType = mcComp.getItemType();
        var chickenComp = mcComp.getChickenComp(mcComp.getTrayItem());
        var isChickenValid = this.chicken && this.count[0] > 0
            && itemType === "chicken"
            && chickenComp && chickenComp.isChin
            && this.sauce == chickenComp.isSauce;
        var isCocaValid = this.coca && this.count[1] > 0 && itemType === "coca";
        var isCakeValid = this.cake && this.count[2] > 0 && itemType === "cake";
        var isPotatoValid = this.potato && this.count[3] > 0 && itemType === "tomato";
        if (isChickenValid || isCocaValid || isCakeValid || isPotatoValid) {
            var missionType_1 = isCocaValid ? 1 : isCakeValid ? 2 : isPotatoValid ? 3 : 0;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.gamePlay.soundOk, false, 1);
                _this.updateMission(missionType_1);
                mcComp.afterDeliver();
            }, 0.5);
            return true;
        }
        this.isEnd = true;
        cc.audioEngine.play(this.gamePlay.soundWrong, false, 0.8);
        var wrongtick = this.pop.getChildByName("x");
        wrongtick.active = true;
        wrongtick.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            wrongtick.active = false;
            mcComp.idle();
            _this.gamePlay.isMoving = false;
            _this.gamePlay.sellTraySlot = -1;
            _this.end(false);
        }, 0.5);
        return false;
    };
    NewClass.prototype.loadTime = function () {
        var _this = this;
        cc.Tween.stopAllByTarget(this.fillBar);
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
                    _this.anim.setAnimation(0, "angry", true);
                    if (_this.soundAngry) {
                        cc.audioEngine.play(_this.soundAngry, false, 1);
                    }
                }
                if (value <= 0.25 && !changedRed) {
                    changedRed = true;
                    _this.isAngry = true;
                    _this.fillBar.spriteFrame = _this.fillRed;
                    _this.anim.setAnimation(0, "angry", true);
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
    ], NewClass.prototype, "chicken", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "cake", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "coca", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "potato", void 0);
    __decorate([
        property([cc.Integer]) //0 chicken 1//coca 2//cake //3khoaitay
    ], NewClass.prototype, "count", void 0);
    __decorate([
        property([cc.Integer])
    ], NewClass.prototype, "order", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "sauce", void 0);
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
    ], NewClass.prototype, "volumHello", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcY3VzTWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlVQztRQS9URyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsYUFBTyxHQUFHLEtBQUssQ0FBQTtRQUVmLFVBQUksR0FBRyxLQUFLLENBQUM7UUFFYixVQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUVmLFdBQUssR0FBRyxFQUFFLENBQUE7UUFFVixXQUFLLEdBQUcsRUFBRSxDQUFBO1FBRVYsV0FBSyxHQUFHLEtBQUssQ0FBQTtRQUViLGVBQVMsR0FBYSxJQUFJLENBQUE7UUFFMUIsZ0JBQVUsR0FBYSxJQUFJLENBQUE7UUFFM0IsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQWdCLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBR3hCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBRWxDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQUMsQ0FBQyxDQUFBO1FBR1osaUJBQVcsR0FBRyxFQUFFLENBQUE7UUFFaEIsV0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNiLGVBQVMsR0FBRyxLQUFLLENBQUE7UUFDakIsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLGNBQVEsR0FBRyxFQUFFLENBQUE7UUFDYixhQUFPLEdB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Qzs2Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2dEQUNTO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnREFDVDtJQUdaO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ0w7SUE1Q0MsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlVNUI7SUFBRCxlQUFDO0NBalVELEFBaVVDLENBalVxQyxFQUFFLENBQUMsU0FBUyxHQWlVakQ7a0JBalVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGFwcHk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRBbmdyeTI6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGNoaWNrZW4gPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBjYWtlID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGNvY2EgPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgcG90YXRvID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoW2NjLkludGVnZXJdKS8vMCBjaGlja2VuIDEvL2NvY2EgMi8vY2FrZSAvLzNraG9haXRheVxyXG4gICAgY291bnQgPSBbXVxyXG4gICAgQHByb3BlcnR5KFtjYy5JbnRlZ2VyXSlcclxuICAgIG9yZGVyID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgc2F1Y2UgPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb3VudFNjOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ291bnREYXU6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3A6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9uZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGxCYXI6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGZpbGxZZWxsb3c6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGZpbGxSZWQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdm9sdW1IZWxsbz0xXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICB0aW1lV2FpdGluZyA9IDMwXHJcblxyXG4gICAgaXNFbmQgPSBmYWxzZVxyXG4gICAgaXNTdWNjZXNzID0gZmFsc2VcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgdGltZUZpbGwgPSA2MFxyXG4gICAgaXNBbmdyeSA9IGZhbHNlXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpXHJcbiAgICAgICAgLy8gdGhpcy5sb2FkVGltZSgpXHJcbiAgICAgICAgdGhpcy5hZGRFbmRFdmVudFNwaW5lKCk7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvd01pc3Npb24oKSB7XHJcbiAgICAgICAgdGhpcy5pc0VuZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNBbmdyeSA9IGZhbHNlXHJcbiAgICAgXHJcbiAgICAgICAgdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIGZhbHNlKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zb3VuZEhlbGxvKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhlbGxvLCBmYWxzZSwgdGhpcy52b2x1bUhlbGxvKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRUaW1lKClcclxuICAgIH1cclxuICAgIHVwZGF0ZUl0ZW0oaWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBpdGVtIFwiICsgaWQpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kT2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuZG9uZU5vZGUuY2hpbGRyZW5baWRdLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIGFkZEVuZEV2ZW50U3BpbmUoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gXCI3LmFuZ3J5X2lkbGVcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQW5ncnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiMy5idXlfaWRsZVwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGFjdGl2ZURvbmUodmFsdWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3JkZXJbaV0gPT0gdmFsdWUgJiYgdGhpcy5kb25lTm9kZS5jaGlsZHJlbltpXS5hY3RpdmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9uZU5vZGUuY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZU1pc3Npb24odmFsdWUpIHsgLy8xOnNvY29sYSAvLzA6ZGF1XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuYWN0aXZlRG9uZSh2YWx1ZSlcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy9jaGlja2VuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50WzBdLS1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50WzBdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxiQ291bnREYXUubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogLy9jb2NhXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50WzFdLS1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50WzFdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8vY2FrZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudFsyXS0tXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudFsyXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOiAvL3BvdGF0b1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudFszXS0tXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudFszXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhfY29pblwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZmeF9jb2luXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIH0sIDAuNClcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5tY0NvbXAuZGVsaXZlckl0ZW0oKVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuc2VsbFRyYXlTbG90ID0gLTFcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcmRlckNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmQodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDUwXHJcbiAgICB9XHJcbiAgICBpc09yZGVyQ29tcGxldGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvdW50IHx8IHRoaXMuY291bnQubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudFtpXSA+IDApIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwid2Fsa1wiLCBmYWxzZSlcclxuXHJcbiAgICB9XHJcbiAgICBlbmQodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N1Y2Nlc3MpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzU3VjY2VzcyA9IHRydWVcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5maWxsQmFyKVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIYXBweSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuZG9uZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMubGJDb3VudERhdS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmxiQ291bnRTYy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJoYXBweVwiLCBmYWxzZSlcclxuICAgICAgICAgICAgLy8gdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhcHB5XCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiYW5ncnlcIiwgZmFsc2UpXHJcbiAgICAgICAgICAgIC8vIHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwid3JvbmdcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhbmdyeVwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZENsb3NlUG9wLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5wb3ApLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJ3YWxrXCIsIHRydWUpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MygtNTAwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubmV4dEN1cyh2YWx1ZSwgdGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfSwgMC41KVxyXG5cclxuICAgIH1cclxuICAgIGxhdWdoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kSGFwcHkpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGFwcHksIGZhbHNlLCAwLjgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubGJDb3VudFNjLnN0cmluZyA9IFwieFwiICsgdGhpcy5jb3VudFsxXS50b1N0cmluZygpXHJcbiAgICAgICAgLy8gdGhpcy5sYkNvdW50RGF1LnN0cmluZyA9IFwieFwiICsgdGhpcy5jb3VudFswXS50b1N0cmluZygpXHJcblxyXG4gICAgfVxyXG4gICAgaGFwcHkoKSB7XHJcbiAgICAgICAgLy8gbGV0IGZpbGwgPSB0aGlzLmZpbGxCYXIubm9kZS5wYXJlbnRcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnBvcCkudG8oMC4yLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiOC5oYXBweVwiLCBmYWxzZSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCIzLmJ1eV9pZGxlXCIsIHRydWUpXHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICBpZiAodGhpcy5zb3VuZEhhcHB5KSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhhcHB5LCBmYWxzZSwgMC44KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBhbmdyeSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiYW5ncnlcIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRBbmdyeTIsIGZhbHNlLCAxKVxyXG4gICAgICAgIGxldCB3cm9uZ3RpY2sgPSB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZSgneCcpXHJcbiAgICAgICAgd3Jvbmd0aWNrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB3cm9uZ3RpY2suZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB3cm9uZ3RpY2suYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICB9XHJcbiAgICAvLyB3cm9uZygpe1xyXG5cclxuICAgIC8vIH1cclxuICAgIGNoZWNrU2VsbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrU2VsbFwiKVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVQbGF5LmFyckN1cy5pbmRleE9mKHRoaXMubm9kZSkgPCAwKSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lUGxheS5jaGVja1NlbGwodGhpcy5ub2RlKVxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVTZWxsKCkge1xyXG4gICAgICAgIGxldCBtY0NvbXAgPSB0aGlzLmdhbWVQbGF5Lm1jQ29tcFxyXG4gICAgICAgIGxldCBpdGVtVHlwZSA9IG1jQ29tcC5nZXRJdGVtVHlwZSgpXHJcbiAgICAgICAgbGV0IGNoaWNrZW5Db21wID0gbWNDb21wLmdldENoaWNrZW5Db21wKG1jQ29tcC5nZXRUcmF5SXRlbSgpKVxyXG5cclxuICAgICAgICBsZXQgaXNDaGlja2VuVmFsaWQgPSB0aGlzLmNoaWNrZW4gJiYgdGhpcy5jb3VudFswXSA+IDBcclxuICAgICAgICAgICAgJiYgaXRlbVR5cGUgPT09IFwiY2hpY2tlblwiXHJcbiAgICAgICAgICAgICYmIGNoaWNrZW5Db21wICYmIGNoaWNrZW5Db21wLmlzQ2hpblxyXG4gICAgICAgICAgICAmJiB0aGlzLnNhdWNlID09IGNoaWNrZW5Db21wLmlzU2F1Y2VcclxuXHJcbiAgICAgICAgbGV0IGlzQ29jYVZhbGlkID0gdGhpcy5jb2NhICYmIHRoaXMuY291bnRbMV0gPiAwICYmIGl0ZW1UeXBlID09PSBcImNvY2FcIlxyXG4gICAgICAgIGxldCBpc0Nha2VWYWxpZCA9IHRoaXMuY2FrZSAmJiB0aGlzLmNvdW50WzJdID4gMCAmJiBpdGVtVHlwZSA9PT0gXCJjYWtlXCJcclxuICAgICAgICBsZXQgaXNQb3RhdG9WYWxpZCA9IHRoaXMucG90YXRvICYmIHRoaXMuY291bnRbM10gPiAwICYmIGl0ZW1UeXBlID09PSBcInRvbWF0b1wiXHJcblxyXG4gICAgICAgIGlmIChpc0NoaWNrZW5WYWxpZCB8fCBpc0NvY2FWYWxpZCB8fCBpc0Nha2VWYWxpZCB8fCBpc1BvdGF0b1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGxldCBtaXNzaW9uVHlwZSA9IGlzQ29jYVZhbGlkID8gMSA6IGlzQ2FrZVZhbGlkID8gMiA6IGlzUG90YXRvVmFsaWQgPyAzIDogMFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRPaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNaXNzaW9uKG1pc3Npb25UeXBlKVxyXG4gICAgICAgICAgICAgICAgbWNDb21wLmFmdGVyRGVsaXZlcigpXHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kV3JvbmcsIGZhbHNlLCAwLjgpXHJcbiAgICAgICAgbGV0IHdyb25ndGljayA9IHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwieFwiKVxyXG4gICAgICAgIHdyb25ndGljay5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgd3Jvbmd0aWNrLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgd3Jvbmd0aWNrLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1jQ29tcC5pZGxlKClcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc2VsbFRyYXlTbG90ID0gLTFcclxuICAgICAgICAgICAgdGhpcy5lbmQoZmFsc2UpXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaXNEZWxheVNvdW5kID0gZmFsc2VcclxuICAgIGxvYWRUaW1lKCkge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmZpbGxCYXIpXHJcbiAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDE7XHJcbiAgICAgICAgbGV0IGNoYW5nZWRZZWxsb3cgPSBmYWxzZTtcclxuICAgICAgICBsZXQgY2hhbmdlZFJlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbEJhcilcclxuICAgICAgICAgICAgLnRvKHRoaXMudGltZVdhaXRpbmcsIHsgZmlsbFJhbmdlOiAwIH0sIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiAoc3RhcnQsIGVuZCwgY3VycmVudCwgcmF0aW8pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPD0gMC41ICYmICFjaGFuZ2VkWWVsbG93ICYmIHRoaXMuaXNTdWNjZXNzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRZZWxsb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWUgPSB0aGlzLmZpbGxZZWxsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJhbmdyeVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRBbmdyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQW5ncnksIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlIDw9IDAuMjUgJiYgIWNoYW5nZWRSZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZFJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBbmdyeSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbEJhci5zcHJpdGVGcmFtZSA9IHRoaXMuZmlsbFJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImFuZ3J5XCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRBbmdyeTIgJiYgdGhpcy5pc1N1Y2Nlc3MgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MiwgZmFsc2UsIDEpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgdGhpcy5nYW1lUGxheS5vbkVuZEdhbWUoZmFsc2UpICAgXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgaWQgPSB0aGlzLmdhbWVQbGF5LmdldFBsYWNlKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZVBsYXkuaXNDb3VudERvbmUrK1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5lbnF1ZXVlTW92ZSh0aGlzLm5vZGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==