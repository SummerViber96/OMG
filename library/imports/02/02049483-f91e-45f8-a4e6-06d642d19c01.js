"use strict";
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
        _this.soundAngry = null;
        _this.posDone = cc.v3(0, 0);
        _this.tag = 0;
        //fill bar
        _this.fillBar = null;
        _this.yellowSp = null;
        _this.redSp = null;
        _this.angryPrefab = null;
        _this.waitTime = 8;
        _this.parentName = "";
        _this.parentIndex = 0;
        _this.parentNode = null;
        _this.isPt = false;
        _this.isQueueMoving = false;
        _this.isAngryWait = false;
        _this.isSpawned = false;
        _this.gamePlay = null;
        _this.greenSp = null;
        _this.isWaitProgress = false;
        _this.waitTimeLeft = 0;
        _this.popLifted = false;
        _this.popHomePos = cc.v3(0, 0);
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
        if (this.pop)
            this.popHomePos = this.pop.position.clone();
        if (this.fillBar) {
            this.greenSp = this.fillBar.spriteFrame;
            if (!this.isWaitProgress && this.fillBar.node.parent) {
                this.fillBar.node.parent.active = false;
            }
        }
    };
    NewClass.prototype.liftPop = function () {
        if (!this.pop || !this.gamePlay)
            return;
        var layer = this.gamePlay.sortLayer || this.gamePlay.node;
        if (!this.popLifted)
            this.popHomePos = this.pop.position.clone();
        var world = this.node.convertToWorldSpaceAR(this.popHomePos);
        this.pop.parent = layer;
        this.pop.position = layer.convertToNodeSpaceAR(world);
        this.pop.zIndex = 10000;
        this.popLifted = true;
    };
    NewClass.prototype.resetPopLayer = function () {
        if (!this.popLifted || !this.pop)
            return;
        this.pop.parent = this.node;
        this.pop.position = this.popHomePos;
        this.pop.zIndex = 0;
        this.popLifted = false;
    };
    NewClass.prototype.followLiftedPop = function () {
        if (!this.popLifted || !this.pop || !this.pop.isValid || !this.gamePlay)
            return;
        var layer = this.pop.parent;
        if (!layer)
            return;
        var world = this.node.convertToWorldSpaceAR(this.popHomePos);
        this.pop.position = layer.convertToNodeSpaceAR(world);
        this.pop.zIndex = 10000;
    };
    NewClass.prototype.onDestroy = function () {
        if (this.popLifted && this.pop && this.pop.isValid) {
            this.pop.destroy();
            this.popLifted = false;
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
    NewClass.prototype.sit = function () {
        this.node.scaleX = 1;
        this.anim.setAnimation(0, "Sit_Waiting", true);
    };
    NewClass.prototype.showPop = function () {
        this.showQueuePop();
    };
    NewClass.prototype.showQueuePop = function () {
        this.isQueueMoving = false;
        this.node.scaleX = 1;
        cc.Tween.stopAllByTarget(this.pop);
        this.pop.scale = 1;
        this.pop.active = true;
        var popAnim = this.pop.getComponent(cc.Animation);
        if (popAnim) {
            popAnim.play();
        }
        var hand = this.pop.getChildByName("hand");
        if (hand) {
            hand.active = false;
        }
        var btn = this.pop.getComponent(cc.Button);
        if (btn) {
            btn.enabled = true;
        }
        if (this.gamePlay) {
            this.gamePlay.updateQueueHand();
        }
    };
    NewClass.prototype.clickPop = function (event, value) {
        if (this.isQueueMoving)
            return;
        var moved = this.gamePlay.doCus(this.tag, this.node);
        if (!moved)
            return;
        this.gamePlay.startCountDown();
        var btn = event.currentTarget;
        btn.getComponent(cc.Button).enabled = false;
        var hand = this.pop.getChildByName("hand");
        if (hand)
            hand.active = false;
        this.resetPopLayer();
        cc.Tween.stopAllByTarget(this.pop);
        cc.tween(this.pop).to(0.2, { scale: 0 }).start();
        if (this.gamePlay.isStep >= 4) {
            this.gamePlay.showFreeIconPtHand();
        }
    };
    NewClass.prototype.gapBung = function () {
        this.anim.setAnimation(0, "Abdominal", true);
    };
    NewClass.prototype.dayTa = function () {
        this.anim.setAnimation(0, "AbCrunch", true);
    };
    NewClass.prototype.tucGian = function () {
        if (this.gamePlay && this.gamePlay.isEndgame)
            return;
        this.isAngryWait = true;
        if (this.soundAngry && this.gamePlay && this.gamePlay.playSfx) {
            this.gamePlay.playSfx(this.soundAngry, false, 1);
        }
        this.anim.setAnimation(0, "Waiting3", true);
    };
    NewClass.prototype.happy = function (playSound) {
        if (playSound === void 0) { playSound = true; }
        if (playSound && this.soundHappy && this.gamePlay && this.gamePlay.playSfx) {
            this.gamePlay.playSfx(this.soundHappy, false, 1);
        }
        this.anim.setAnimation(0, "HappyOut", true);
    };
    NewClass.prototype.celebrate = function () {
        this.stopWaitProgress();
        this.unscheduleAllCallbacks();
        this.clearAngryFx();
        if (this.pop)
            this.pop.active = false;
        this.happy(false);
    };
    NewClass.prototype.clearAngryFx = function () {
        for (var i = this.node.childrenCount - 1; i >= 0; i--) {
            var child = this.node.children[i];
            if (child && child.name.indexOf("angry") >= 0) {
                child.destroy();
            }
        }
    };
    NewClass.prototype.boxing = function () {
        this.anim.setAnimation(0, "Boxing", true);
    };
    NewClass.prototype.waitingTag = function (value) {
        this.node.scaleX = 1;
        switch (value) {
            case 0:
                this.anim.setAnimation(0, "Sit_Waiting", true);
                break;
            case 1:
                this.anim.setAnimation(0, "Sit_Waiting", true);
                break;
            case 2:
                this.anim.setAnimation(0, "IdleFL", true);
                break;
        }
        this.startWaitProgress();
    };
    NewClass.prototype.startWaitProgress = function () {
        if (!this.fillBar)
            return;
        this.isWaitProgress = true;
        this.waitTimeLeft = this.waitTime;
        this.fillBar.fillRange = 1;
        if (!this.greenSp)
            this.greenSp = this.fillBar.spriteFrame;
        if (this.greenSp)
            this.fillBar.spriteFrame = this.greenSp;
        if (this.fillBar.node.parent)
            this.fillBar.node.parent.active = true;
    };
    NewClass.prototype.stopWaitProgress = function () {
        this.isWaitProgress = false;
        this.waitTimeLeft = 0;
        if (this.fillBar && this.fillBar.node.parent) {
            this.fillBar.node.parent.active = false;
        }
    };
    NewClass.prototype.spawnAngry = function () {
        var _this = this;
        if (this.gamePlay && this.gamePlay.isEndgame)
            return;
        if (!this.angryPrefab)
            return;
        for (var i = 0; i < 4; i++) {
            this.scheduleOnce(function () {
                var angry = cc.instantiate(_this.angryPrefab);
                angry.parent = _this.node;
                angry.position = cc.v3((Math.random() - 0.5) * 50, 110 + Math.random() * 20).add(cc.v3(0, 50));
                angry.opacity = 255;
                angry.scale = 0.8 + Math.random() * 0.3;
                cc.tween(angry).parallel(cc.tween().by(0.9, { position: cc.v3((Math.random() - 0.5) * 30, 90) }), cc.tween().to(0.9, { opacity: 0 })).call(function () {
                    if (angry && angry.isValid)
                        angry.destroy();
                }).start();
            }, i * 0.12);
        }
    };
    // update (dt) {}
    NewClass.prototype.update = function (dt) {
        if (this.isWaitProgress && this.fillBar) {
            this.waitTimeLeft -= dt;
            var ratio = this.waitTime > 0 ? Math.max(0, this.waitTimeLeft / this.waitTime) : 0;
            this.fillBar.fillRange = ratio;
            if (ratio <= 0.25) {
                if (this.redSp)
                    this.fillBar.spriteFrame = this.redSp;
            }
            else if (ratio <= 0.5) {
                if (this.yellowSp)
                    this.fillBar.spriteFrame = this.yellowSp;
            }
            if (ratio <= 0) {
                this.stopWaitProgress();
                if (this.gamePlay && this.gamePlay.isEndgame)
                    return;
                this.tucGian();
                this.spawnAngry();
            }
        }
        if (this.popLifted)
            this.followLiftedPop();
        if (!this.gamePlay || !this.gamePlay.sortLayer)
            return;
        if (this.node.parent === this.gamePlay.sortLayer) {
            this.node.zIndex = -Math.round(this.node.y);
        }
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
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAngry", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillBar", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "yellowSp", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "redSp", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "angryPrefab", void 0);
    __decorate([
        property
    ], NewClass.prototype, "waitTime", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();