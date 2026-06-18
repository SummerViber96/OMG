
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
        _this.isReadyForSell = false;
        _this.gamePlay = null;
        _this.timeFill = 60;
        _this.isAngry = false;
        _this.isDelaySound = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.start = function () {
        if (!this.gamePlay) {
            this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        }
        this.addEndEventSpine();
    };
    NewClass.prototype.showMission = function (value) {
        this.isEnd = false;
        this.isSuccess = false;
        this.isAngry = false;
        this.isReadyForSell = true;
        cc.Tween.stopAllByTarget(this.pop);
        this.pop.scale = 0;
        if (this.doneNode) {
            for (var i = 0; i < this.doneNode.childrenCount; i++) {
                this.doneNode.children[i].active = false;
            }
        }
        this.pop.getComponent(cc.Animation).play();
        this.anim.setAnimation(0, "idle", false);
        if (this.soundHello) {
            cc.audioEngine.play(this.soundHello, false, this.volumHello);
        }
        if (!value) {
            this.loadTime();
        }
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
    NewClass.prototype.updateMission = function (value, deferEnd) {
        var _this = this;
        if (deferEnd === void 0) { deferEnd = false; }
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
        this.gamePlay.mcComp.deliverItem(this.gamePlay.sellTraySlot);
        this.gamePlay.sellTraySlot = -1;
        if (!deferEnd && this.isOrderComplete()) {
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
        this.isReadyForSell = false;
        this.anim.setAnimation(0, "walk", false);
    };
    NewClass.prototype.end = function (value, isTimeout) {
        var _this = this;
        if (isTimeout === void 0) { isTimeout = false; }
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
        var counterPos = this.node.position.clone();
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.gamePlay.soundClosePop, false, 1);
            cc.tween(_this.pop).to(0.3, { scale: 0 }).start();
            _this.anim.setAnimation(0, "walk", true);
            cc.tween(_this.node)
                .by(1, { position: cc.v3(-500, 0) })
                .call(function () {
                if (isTimeout) {
                    _this.gamePlay.replaceCustomer(_this.node, counterPos);
                }
                else {
                    _this.node.active = false;
                    _this.gamePlay.nextCus(value, _this.node);
                }
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
        if (this.isSuccess || !this.isReadyForSell)
            return false;
        if (!this.gamePlay || this.gamePlay.arrCus.indexOf(this.node) < 0)
            return false;
        return this.gamePlay.checkSell(this.node);
    };
    NewClass.prototype.validateSell = function () {
        var _this = this;
        if (this.isSuccess || !this.isReadyForSell) {
            this.gamePlay.isMoving = false;
            this.gamePlay.sellTraySlot = -1;
            return false;
        }
        var mcComp = this.gamePlay.mcComp;
        var validSlots = mcComp.findAllTraysForCustomer(this);
        if (validSlots.length > 0) {
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.gamePlay.soundOk, false, 1);
                for (var i = 0; i < validSlots.length; i++) {
                    var slot = validSlots[i];
                    var missionType = mcComp.getMissionTypeForSlot(slot);
                    _this.gamePlay.sellTraySlot = slot;
                    _this.updateMission(missionType, i < validSlots.length - 1);
                }
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
            if (!_this.isSuccess) {
                _this.end(false, true);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcY3VzTWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1WQztRQWpWRyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsYUFBTyxHQUFHLEtBQUssQ0FBQTtRQUVmLFVBQUksR0FBRyxLQUFLLENBQUM7UUFFYixVQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUVmLFdBQUssR0FBRyxFQUFFLENBQUE7UUFFVixXQUFLLEdBQUcsRUFBRSxDQUFBO1FBRVYsV0FBSyxHQUFHLEtBQUssQ0FBQTtRQUViLGVBQVMsR0FBYSxJQUFJLENBQUE7UUFFMUIsZ0JBQVUsR0FBYSxJQUFJLENBQUE7UUFFM0IsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQWdCLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBR3hCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBRWxDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQUMsQ0FBQyxDQUFBO1FBR1osaUJBQVcsR0FBRyxFQUFFLENBQUE7UUFFaEIsV0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNiLGVBQVMsR0FBRyxLQUFLLENBQUE7UUFDakIsb0JBQWMsR0FBRyxLQUFLLENBQUE7UUFDdEIsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLGNBQVEs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T0FBTyxDQUFDO2dEQUNUO0lBR1o7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDTDtJQTVDQyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbVY1QjtJQUFELGVBQUM7Q0FuVkQsQUFtVkMsQ0FuVnFDLEVBQUUsQ0FBQyxTQUFTLEdBbVZqRDtrQkFuVm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIYXBweTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQW5ncnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5MjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG86IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgY2hpY2tlbiA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGNha2UgPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgY29jYSA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBwb3RhdG8gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShbY2MuSW50ZWdlcl0pLy8wIGNoaWNrZW4gMS8vY29jYSAyLy9jYWtlIC8vM2tob2FpdGF5XHJcbiAgICBjb3VudCA9IFtdXHJcbiAgICBAcHJvcGVydHkoW2NjLkludGVnZXJdKVxyXG4gICAgb3JkZXIgPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBzYXVjZSA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkNvdW50U2M6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb3VudERhdTogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb25lTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlsbEJhcjogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZmlsbFllbGxvdzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZmlsbFJlZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICB2b2x1bUhlbGxvPTFcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHRpbWVXYWl0aW5nID0gMzBcclxuXHJcbiAgICBpc0VuZCA9IGZhbHNlXHJcbiAgICBpc1N1Y2Nlc3MgPSBmYWxzZVxyXG4gICAgaXNSZWFkeUZvclNlbGwgPSBmYWxzZVxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICB0aW1lRmlsbCA9IDYwXHJcbiAgICBpc0FuZ3J5ID0gZmFsc2VcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZVBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVEb251dFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZEVuZEV2ZW50U3BpbmUoKTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93TWlzc2lvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaXNFbmQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzQW5ncnkgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNSZWFkeUZvclNlbGwgPSB0cnVlXHJcblxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnBvcClcclxuICAgICAgICB0aGlzLnBvcC5zY2FsZSA9IDBcclxuICAgICAgICBpZiAodGhpcy5kb25lTm9kZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9uZU5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbmVOb2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIGZhbHNlKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zb3VuZEhlbGxvKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhlbGxvLCBmYWxzZSwgdGhpcy52b2x1bUhlbGxvKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRUaW1lKClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlSXRlbShpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIGl0ZW0gXCIgKyBpZClcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRPaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5kb25lTm9kZS5jaGlsZHJlbltpZF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYWRkRW5kRXZlbnRTcGluZSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0Q29tcGxldGVMaXN0ZW5lcih0cmFjayA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0cmFjay5hbmltYXRpb24ubmFtZSA9PSBcIjcuYW5ncnlfaWRsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNBbmdyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCIzLmJ1eV9pZGxlXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYWN0aXZlRG9uZSh2YWx1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcmRlcltpXSA9PSB2YWx1ZSAmJiB0aGlzLmRvbmVOb2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb25lTm9kZS5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlTWlzc2lvbih2YWx1ZSwgZGVmZXJFbmQgPSBmYWxzZSkgeyAvLzE6c29jb2xhIC8vMDpkYXVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRTZWxsRG9uZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5hY3RpdmVEb25lKHZhbHVlKVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAvL2NoaWNrZW5cclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRbMF0tLVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGJDb3VudERhdS5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOiAvL2NvY2FcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRbMV0tLVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMV0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogLy9jYWtlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50WzJdLS1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50WzJdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6IC8vcG90YXRvXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50WzNdLS1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50WzNdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZmeF9jb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidmZ4X2NvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgfSwgMC40KVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVQbGF5Lm1jQ29tcC5kZWxpdmVySXRlbSh0aGlzLmdhbWVQbGF5LnNlbGxUcmF5U2xvdClcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LnNlbGxUcmF5U2xvdCA9IC0xXHJcblxyXG4gICAgICAgIGlmICghZGVmZXJFbmQgJiYgdGhpcy5pc09yZGVyQ29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gNTBcclxuICAgIH1cclxuICAgIGlzT3JkZXJDb21wbGV0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY291bnQgfHwgdGhpcy5jb3VudC5sZW5ndGggPT09IDApIHJldHVybiB0cnVlXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50W2ldID4gMCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeUZvclNlbGwgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJ3YWxrXCIsIGZhbHNlKVxyXG5cclxuICAgIH1cclxuICAgIGVuZCh2YWx1ZSwgaXNUaW1lb3V0ID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N1Y2Nlc3MpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzU3VjY2VzcyA9IHRydWVcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5maWxsQmFyKVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIYXBweSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuZG9uZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMubGJDb3VudERhdS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmxiQ291bnRTYy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJoYXBweVwiLCBmYWxzZSlcclxuICAgICAgICAgICAgLy8gdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhcHB5XCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiYW5ncnlcIiwgZmFsc2UpXHJcbiAgICAgICAgICAgIC8vIHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwid3JvbmdcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhbmdyeVwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY291bnRlclBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbi5jbG9uZSgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRDbG9zZVBvcCwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwid2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAuYnkoMSwgeyBwb3NpdGlvbjogY2MudjMoLTUwMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkucmVwbGFjZUN1c3RvbWVyKHRoaXMubm9kZSwgY291bnRlclBvcylcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5uZXh0Q3VzKHZhbHVlLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfSwgMC41KVxyXG5cclxuICAgIH1cclxuICAgIGxhdWdoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kSGFwcHkpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGFwcHksIGZhbHNlLCAwLjgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubGJDb3VudFNjLnN0cmluZyA9IFwieFwiICsgdGhpcy5jb3VudFsxXS50b1N0cmluZygpXHJcbiAgICAgICAgLy8gdGhpcy5sYkNvdW50RGF1LnN0cmluZyA9IFwieFwiICsgdGhpcy5jb3VudFswXS50b1N0cmluZygpXHJcblxyXG4gICAgfVxyXG4gICAgaGFwcHkoKSB7XHJcbiAgICAgICAgLy8gbGV0IGZpbGwgPSB0aGlzLmZpbGxCYXIubm9kZS5wYXJlbnRcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnBvcCkudG8oMC4yLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiOC5oYXBweVwiLCBmYWxzZSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCIzLmJ1eV9pZGxlXCIsIHRydWUpXHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICBpZiAodGhpcy5zb3VuZEhhcHB5KSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhhcHB5LCBmYWxzZSwgMC44KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBhbmdyeSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiYW5ncnlcIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRBbmdyeTIsIGZhbHNlLCAxKVxyXG4gICAgICAgIGxldCB3cm9uZ3RpY2sgPSB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZSgneCcpXHJcbiAgICAgICAgd3Jvbmd0aWNrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB3cm9uZ3RpY2suZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB3cm9uZ3RpY2suYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICB9XHJcbiAgICAvLyB3cm9uZygpe1xyXG5cclxuICAgIC8vIH1cclxuICAgIGNoZWNrU2VsbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrU2VsbFwiKVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3VjY2VzcyB8fCAhdGhpcy5pc1JlYWR5Rm9yU2VsbCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVQbGF5IHx8IHRoaXMuZ2FtZVBsYXkuYXJyQ3VzLmluZGV4T2YodGhpcy5ub2RlKSA8IDApIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVQbGF5LmNoZWNrU2VsbCh0aGlzLm5vZGUpXHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZVNlbGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdWNjZXNzIHx8ICF0aGlzLmlzUmVhZHlGb3JTZWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWNDb21wID0gdGhpcy5nYW1lUGxheS5tY0NvbXBcclxuICAgICAgICBsZXQgdmFsaWRTbG90cyA9IG1jQ29tcC5maW5kQWxsVHJheXNGb3JDdXN0b21lcih0aGlzKVxyXG5cclxuICAgICAgICBpZiAodmFsaWRTbG90cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZE9rLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRTbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzbG90ID0gdmFsaWRTbG90c1tpXVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtaXNzaW9uVHlwZSA9IG1jQ29tcC5nZXRNaXNzaW9uVHlwZUZvclNsb3Qoc2xvdClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnNlbGxUcmF5U2xvdCA9IHNsb3RcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1pc3Npb24obWlzc2lvblR5cGUsIGkgPCB2YWxpZFNsb3RzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtY0NvbXAuYWZ0ZXJEZWxpdmVyKClcclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRXcm9uZywgZmFsc2UsIDAuOClcclxuICAgICAgICBsZXQgd3Jvbmd0aWNrID0gdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJ4XCIpXHJcbiAgICAgICAgd3Jvbmd0aWNrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB3cm9uZ3RpY2suZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB3cm9uZ3RpY2suYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgbWNDb21wLmlkbGUoKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5zZWxsVHJheVNsb3QgPSAtMVxyXG4gICAgICAgICAgICB0aGlzLmVuZChmYWxzZSlcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpc0RlbGF5U291bmQgPSBmYWxzZVxyXG4gICAgbG9hZFRpbWUoKSB7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZmlsbEJhcilcclxuICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMTtcclxuICAgICAgICBsZXQgY2hhbmdlZFllbGxvdyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjaGFuZ2VkUmVkID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5maWxsQmFyKVxyXG4gICAgICAgICAgICAudG8odGhpcy50aW1lV2FpdGluZywgeyBmaWxsUmFuZ2U6IDAgfSwge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCByYXRpbykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiByYXRpbztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8PSAwLjUgJiYgIWNoYW5nZWRZZWxsb3cgJiYgdGhpcy5pc1N1Y2Nlc3MgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZFllbGxvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbEJhci5zcHJpdGVGcmFtZSA9IHRoaXMuZmlsbFllbGxvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImFuZ3J5XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZEFuZ3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRBbmdyeSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPD0gMC4yNSAmJiAhY2hhbmdlZFJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkUmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FuZ3J5ID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsUmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiYW5ncnlcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZEFuZ3J5MiAmJiB0aGlzLmlzU3VjY2VzcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQW5ncnkyLCBmYWxzZSwgMSlcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1N1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZChmYWxzZSwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19