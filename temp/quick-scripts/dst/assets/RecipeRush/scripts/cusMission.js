
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
            cc.audioEngine.play(this.soundHello, false, 1);
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
            cc.audioEngine.play(this.gamePlay.soundOk, false, 1);
            var missionType_1 = isCocaValid ? 1 : isCakeValid ? 2 : isPotatoValid ? 3 : 0;
            this.scheduleOnce(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcY3VzTWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZUQztRQTNURyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsYUFBTyxHQUFHLEtBQUssQ0FBQTtRQUVmLFVBQUksR0FBRyxLQUFLLENBQUM7UUFFYixVQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUVmLFdBQUssR0FBRyxFQUFFLENBQUE7UUFFVixXQUFLLEdBQUcsRUFBRSxDQUFBO1FBRVYsV0FBSyxHQUFHLEtBQUssQ0FBQTtRQUViLGVBQVMsR0FBYSxJQUFJLENBQUE7UUFFMUIsZ0JBQVUsR0FBYSxJQUFJLENBQUE7UUFFM0IsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQWdCLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBR3hCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBRWxDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQUcsRUFBRSxDQUFBO1FBRWhCLFdBQUssR0FBRyxLQUFLLENBQUE7UUFDYixlQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixjQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ2IsYUFBTyxHQUFHLEtBQUssQ0FBQTtRQTJOZixrQkFBWSxH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QUUsQ0FBQyxXQUFXLENBQUM7NkNBQ007SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDTDtJQTFDQyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNlQ1QjtJQUFELGVBQUM7Q0E3VEQsQUE2VEMsQ0E3VHFDLEVBQUUsQ0FBQyxTQUFTLEdBNlRqRDtrQkE3VG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIYXBweTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQW5ncnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5MjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG86IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgY2hpY2tlbiA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGNha2UgPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgY29jYSA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBwb3RhdG8gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShbY2MuSW50ZWdlcl0pLy8wIGNoaWNrZW4gMS8vY29jYSAyLy9jYWtlIC8vM2tob2FpdGF5XHJcbiAgICBjb3VudCA9IFtdXHJcbiAgICBAcHJvcGVydHkoW2NjLkludGVnZXJdKVxyXG4gICAgb3JkZXIgPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBzYXVjZSA9IGZhbHNlXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkNvdW50U2M6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb3VudERhdTogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb25lTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlsbEJhcjogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZmlsbFllbGxvdzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZmlsbFJlZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGltZVdhaXRpbmcgPSAzMFxyXG5cclxuICAgIGlzRW5kID0gZmFsc2VcclxuICAgIGlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIHRpbWVGaWxsID0gNjBcclxuICAgIGlzQW5ncnkgPSBmYWxzZVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVEb251dFwiKVxyXG4gICAgICAgIC8vIHRoaXMubG9hZFRpbWUoKVxyXG4gICAgICAgIHRoaXMuYWRkRW5kRXZlbnRTcGluZSgpO1xyXG5cclxuICAgIH1cclxuICAgIHNob3dNaXNzaW9uKCkge1xyXG4gICAgICAgIHRoaXMuaXNFbmQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNTdWNjZXNzID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzQW5ncnkgPSBmYWxzZVxyXG4gICAgIFxyXG4gICAgICAgIHRoaXMucG9wLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG5cclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCBmYWxzZSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc291bmRIZWxsbykge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIZWxsbywgZmFsc2UsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZFRpbWUoKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlSXRlbShpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIGl0ZW0gXCIgKyBpZClcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRPaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5kb25lTm9kZS5jaGlsZHJlbltpZF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYWRkRW5kRXZlbnRTcGluZSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0Q29tcGxldGVMaXN0ZW5lcih0cmFjayA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0cmFjay5hbmltYXRpb24ubmFtZSA9PSBcIjcuYW5ncnlfaWRsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNBbmdyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCIzLmJ1eV9pZGxlXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYWN0aXZlRG9uZSh2YWx1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcmRlcltpXSA9PSB2YWx1ZSAmJiB0aGlzLmRvbmVOb2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb25lTm9kZS5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlTWlzc2lvbih2YWx1ZSkgeyAvLzE6c29jb2xhIC8vMDpkYXVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRTZWxsRG9uZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5hY3RpdmVEb25lKHZhbHVlKVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAvL2NoaWNrZW5cclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRbMF0tLVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGJDb3VudERhdS5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOiAvL2NvY2FcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRbMV0tLVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMV0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogLy9jYWtlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50WzJdLS1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50WzJdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6IC8vcG90YXRvXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50WzNdLS1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50WzNdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZmeF9jb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidmZ4X2NvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgfSwgMC40KVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVQbGF5Lm1jQ29tcC5kZWxpdmVySXRlbSgpXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5zZWxsVHJheVNsb3QgPSAtMVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc09yZGVyQ29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gNTBcclxuICAgIH1cclxuICAgIGlzT3JkZXJDb21wbGV0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY291bnQgfHwgdGhpcy5jb3VudC5sZW5ndGggPT09IDApIHJldHVybiB0cnVlXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50W2ldID4gMCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJ3YWxrXCIsIGZhbHNlKVxyXG5cclxuICAgIH1cclxuICAgIGVuZCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3VjY2VzcykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNTdWNjZXNzID0gdHJ1ZVxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmZpbGxCYXIpXHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhhcHB5LCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5kb25lTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5sYkNvdW50RGF1Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubGJDb3VudFNjLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImhhcHB5XCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAvLyB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFwcHlcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJhbmdyeVwiLCBmYWxzZSlcclxuICAgICAgICAgICAgLy8gdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1wiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImFuZ3J5XCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kQ2xvc2VQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnBvcCkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIndhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLmJ5KDEsIHsgcG9zaXRpb246IGNjLnYzKC01MDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5uZXh0Q3VzKHZhbHVlLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgfVxyXG4gICAgbGF1Z2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc291bmRIYXBweSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIYXBweSwgZmFsc2UsIDAuOClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5sYkNvdW50U2Muc3RyaW5nID0gXCJ4XCIgKyB0aGlzLmNvdW50WzFdLnRvU3RyaW5nKClcclxuICAgICAgICAvLyB0aGlzLmxiQ291bnREYXUuc3RyaW5nID0gXCJ4XCIgKyB0aGlzLmNvdW50WzBdLnRvU3RyaW5nKClcclxuXHJcbiAgICB9XHJcbiAgICBoYXBweSgpIHtcclxuICAgICAgICAvLyBsZXQgZmlsbCA9IHRoaXMuZmlsbEJhci5ub2RlLnBhcmVudFxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wKS50bygwLjIsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCI4LmhhcHB5XCIsIGZhbHNlKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIjMuYnV5X2lkbGVcIiwgdHJ1ZSlcclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kSGFwcHkpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGFwcHksIGZhbHNlLCAwLjgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGFuZ3J5KCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJhbmdyeVwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MiwgZmFsc2UsIDEpXHJcbiAgICAgICAgbGV0IHdyb25ndGljayA9IHRoaXMucG9wLmdldENoaWxkQnlOYW1lKCd4JylcclxuICAgICAgICB3cm9uZ3RpY2suYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHdyb25ndGljay5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdyb25ndGljay5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgIH1cclxuICAgIC8vIHdyb25nKCl7XHJcblxyXG4gICAgLy8gfVxyXG4gICAgY2hlY2tTZWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVQbGF5LmFyckN1cy5pbmRleE9mKHRoaXMubm9kZSkgPCAwKSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lUGxheS5jaGVja1NlbGwodGhpcy5ub2RlKVxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVTZWxsKCkge1xyXG4gICAgICAgIGxldCBtY0NvbXAgPSB0aGlzLmdhbWVQbGF5Lm1jQ29tcFxyXG4gICAgICAgIGxldCBpdGVtVHlwZSA9IG1jQ29tcC5nZXRJdGVtVHlwZSgpXHJcbiAgICAgICAgbGV0IGNoaWNrZW5Db21wID0gbWNDb21wLmdldENoaWNrZW5Db21wKG1jQ29tcC5nZXRUcmF5SXRlbSgpKVxyXG5cclxuICAgICAgICBsZXQgaXNDaGlja2VuVmFsaWQgPSB0aGlzLmNoaWNrZW4gJiYgdGhpcy5jb3VudFswXSA+IDBcclxuICAgICAgICAgICAgJiYgaXRlbVR5cGUgPT09IFwiY2hpY2tlblwiXHJcbiAgICAgICAgICAgICYmIGNoaWNrZW5Db21wICYmIGNoaWNrZW5Db21wLmlzQ2hpblxyXG4gICAgICAgICAgICAmJiB0aGlzLnNhdWNlID09IGNoaWNrZW5Db21wLmlzU2F1Y2VcclxuXHJcbiAgICAgICAgbGV0IGlzQ29jYVZhbGlkID0gdGhpcy5jb2NhICYmIHRoaXMuY291bnRbMV0gPiAwICYmIGl0ZW1UeXBlID09PSBcImNvY2FcIlxyXG4gICAgICAgIGxldCBpc0Nha2VWYWxpZCA9IHRoaXMuY2FrZSAmJiB0aGlzLmNvdW50WzJdID4gMCAmJiBpdGVtVHlwZSA9PT0gXCJjYWtlXCJcclxuICAgICAgICBsZXQgaXNQb3RhdG9WYWxpZCA9IHRoaXMucG90YXRvICYmIHRoaXMuY291bnRbM10gPiAwICYmIGl0ZW1UeXBlID09PSBcInRvbWF0b1wiXHJcblxyXG4gICAgICAgIGlmIChpc0NoaWNrZW5WYWxpZCB8fCBpc0NvY2FWYWxpZCB8fCBpc0Nha2VWYWxpZCB8fCBpc1BvdGF0b1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZE9rLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgbGV0IG1pc3Npb25UeXBlID0gaXNDb2NhVmFsaWQgPyAxIDogaXNDYWtlVmFsaWQgPyAyIDogaXNQb3RhdG9WYWxpZCA/IDMgOiAwXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWlzc2lvbihtaXNzaW9uVHlwZSlcclxuICAgICAgICAgICAgICAgIG1jQ29tcC5hZnRlckRlbGl2ZXIoKVxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZFdyb25nLCBmYWxzZSwgMC44KVxyXG4gICAgICAgIGxldCB3cm9uZ3RpY2sgPSB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcInhcIilcclxuICAgICAgICB3cm9uZ3RpY2suYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHdyb25ndGljay5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdyb25ndGljay5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBtY0NvbXAuaWRsZSgpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICAgICAgICAgIHRoaXMuZW5kKGZhbHNlKVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlzRGVsYXlTb3VuZCA9IGZhbHNlXHJcbiAgICBsb2FkVGltZSgpIHtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5maWxsQmFyKVxyXG4gICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSAxO1xyXG4gICAgICAgIGxldCBjaGFuZ2VkWWVsbG93ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNoYW5nZWRSZWQgPSBmYWxzZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGxCYXIpXHJcbiAgICAgICAgICAgIC50byh0aGlzLnRpbWVXYWl0aW5nLCB7IGZpbGxSYW5nZTogMCB9LCB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlIDw9IDAuNSAmJiAhY2hhbmdlZFllbGxvdyAmJiB0aGlzLmlzU3VjY2VzcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkWWVsbG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsWWVsbG93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiYW5ncnlcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kQW5ncnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5LCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8PSAwLjI1ICYmICFjaGFuZ2VkUmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRSZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQW5ncnkgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWUgPSB0aGlzLmZpbGxSZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJhbmdyeVwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kQW5ncnkyICYmIHRoaXMuaXNTdWNjZXNzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRBbmdyeTIsIGZhbHNlLCAxKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gIHRoaXMuZ2FtZVBsYXkub25FbmRHYW1lKGZhbHNlKSAgIFxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGlkID0gdGhpcy5nYW1lUGxheS5nZXRQbGFjZSh0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5LmlzQ291bnREb25lKytcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZVBsYXkuZW5xdWV1ZU1vdmUodGhpcy5ub2RlKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=