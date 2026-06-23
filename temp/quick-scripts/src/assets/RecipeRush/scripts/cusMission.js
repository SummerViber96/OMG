"use strict";
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
        this.pop.scale = 0;
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