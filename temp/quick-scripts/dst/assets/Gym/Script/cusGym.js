
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
        _this.popShown = false;
        _this.isPopReady = false;
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
        if (!this.pop) {
            if (this.gamePlay)
                this.gamePlay.updateQueueHand();
            return;
        }
        if (this.popShown && this.pop.active) {
            var btn_1 = this.pop.getComponent(cc.Button);
            if (btn_1)
                btn_1.enabled = true;
            if (this.gamePlay)
                this.gamePlay.updateQueueHand();
            return;
        }
        this.isPopReady = false;
        this.unschedule(this.markPopReady);
        cc.Tween.stopAllByTarget(this.pop);
        this.pop.active = true;
        var popAnim = this.pop.getComponent(cc.Animation);
        if (popAnim) {
            popAnim.play();
        }
        else {
            this.pop.scale = 1;
        }
        this.popShown = true;
        var hand = this.pop.getChildByName("hand");
        if (hand) {
            hand.active = false;
        }
        var btn = this.pop.getComponent(cc.Button);
        if (btn) {
            btn.enabled = true;
        }
        this.scheduleOnce(this.markPopReady, 0.9);
        if (this.gamePlay) {
            this.gamePlay.updateQueueHand();
        }
    };
    NewClass.prototype.markPopReady = function () {
        if (!this.pop || !this.pop.active)
            return;
        this.isPopReady = true;
        if (this.gamePlay)
            this.gamePlay.updateQueueHand();
    };
    NewClass.prototype.clearPopState = function () {
        this.popShown = false;
        this.isPopReady = false;
        this.unschedule(this.markPopReady);
    };
    NewClass.prototype.clickPop = function (event, value) {
        var _this = this;
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
        this.clearPopState();
        cc.Tween.stopAllByTarget(this.pop);
        cc.tween(this.pop).to(0.2, { scale: 0 }).call(function () {
            if (_this.pop && _this.pop.isValid)
                _this.pop.active = false;
        }).start();
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
            this.gamePlay.playSfx(this.soundAngry, false, 0.5);
        }
        this.anim.setAnimation(0, "Waiting3", true);
        if (this.parentName === "Crunch") {
            this.node.position = cc.v3(-106.701, -47);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXGN1c0d5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlSQztRQXRSRyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFDL0IsYUFBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRXJCLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFDUCxVQUFVO1FBRVYsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxXQUFLLEdBQW1CLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQ1osZ0JBQVUsR0FBRyxFQUFFLENBQUE7UUFDZixpQkFBVyxHQUFHLENBQUMsQ0FBQTtRQUNmLGdCQUFVLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLFVBQUksR0FBRyxLQUFLLENBQUE7UUFDWixtQkFBYSxHQUFHLEtBQUssQ0FBQTtRQUNyQixpQkFBVyxHQUFHLEtBQUssQ0FBQTtRQUNuQixlQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixhQUFPLEdBQW1CLElBQUksQ0FBQTtRQUM5QixvQkFBYyxHQUFHLEtBQUssQ0FBQTtRQUN0QixrQkFBWSxHQUFHLENBQUMsQ0FBQTtRQUNoQixlQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLGdCQUFVLEdBQUcsRUFBRSxDQUFD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QXlSNUI7SUFBRCxlQUFDO0NBelJELEFBeVJDLENBelJxQyxFQUFFLENBQUMsU0FBUyxHQXlSakQ7a0JBelJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3A6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhhcHB5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRBbmdyeTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgcG9zRG9uZSA9IGNjLnYzKDAsIDApXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHRhZyA9IDBcclxuICAgIC8vZmlsbCBiYXJcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgeWVsbG93U3A6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHJlZFNwOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYW5ncnlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHdhaXRUaW1lID0gOFxyXG4gICAgcGFyZW50TmFtZSA9IFwiXCJcclxuICAgIHBhcmVudEluZGV4ID0gMFxyXG4gICAgcGFyZW50Tm9kZSA9IG51bGxcclxuICAgIGlzUHQgPSBmYWxzZVxyXG4gICAgaXNRdWV1ZU1vdmluZyA9IGZhbHNlXHJcbiAgICBpc0FuZ3J5V2FpdCA9IGZhbHNlXHJcbiAgICBpc1NwYXduZWQgPSBmYWxzZVxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICBncmVlblNwOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcclxuICAgIGlzV2FpdFByb2dyZXNzID0gZmFsc2VcclxuICAgIHdhaXRUaW1lTGVmdCA9IDBcclxuICAgIHBvcExpZnRlZCA9IGZhbHNlXHJcbiAgICBwb3BIb21lUG9zID0gY2MudjMoMCwgMClcclxuICAgIHBvcFNob3duID0gZmFsc2VcclxuICAgIGlzUG9wUmVhZHkgPSBmYWxzZVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkd5bVwiKVxyXG4gICAgICAgIGlmICh0aGlzLnBvcCkgdGhpcy5wb3BIb21lUG9zID0gdGhpcy5wb3AucG9zaXRpb24uY2xvbmUoKVxyXG4gICAgICAgIGlmICh0aGlzLmZpbGxCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmVlblNwID0gdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dhaXRQcm9ncmVzcyAmJiB0aGlzLmZpbGxCYXIubm9kZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbEJhci5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlmdFBvcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucG9wIHx8ICF0aGlzLmdhbWVQbGF5KSByZXR1cm5cclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLmdhbWVQbGF5LnNvcnRMYXllciB8fCB0aGlzLmdhbWVQbGF5Lm5vZGVcclxuICAgICAgICBpZiAoIXRoaXMucG9wTGlmdGVkKSB0aGlzLnBvcEhvbWVQb3MgPSB0aGlzLnBvcC5wb3NpdGlvbi5jbG9uZSgpXHJcbiAgICAgICAgbGV0IHdvcmxkID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBvcEhvbWVQb3MpXHJcbiAgICAgICAgdGhpcy5wb3AucGFyZW50ID0gbGF5ZXJcclxuICAgICAgICB0aGlzLnBvcC5wb3NpdGlvbiA9IGxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkKVxyXG4gICAgICAgIHRoaXMucG9wLnpJbmRleCA9IDEwMDAwXHJcbiAgICAgICAgdGhpcy5wb3BMaWZ0ZWQgPSB0cnVlXHJcbiAgICB9XHJcbiAgICByZXNldFBvcExheWVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wb3BMaWZ0ZWQgfHwgIXRoaXMucG9wKSByZXR1cm5cclxuICAgICAgICB0aGlzLnBvcC5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICB0aGlzLnBvcC5wb3NpdGlvbiA9IHRoaXMucG9wSG9tZVBvc1xyXG4gICAgICAgIHRoaXMucG9wLnpJbmRleCA9IDBcclxuICAgICAgICB0aGlzLnBvcExpZnRlZCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBmb2xsb3dMaWZ0ZWRQb3AoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBvcExpZnRlZCB8fCAhdGhpcy5wb3AgfHwgIXRoaXMucG9wLmlzVmFsaWQgfHwgIXRoaXMuZ2FtZVBsYXkpIHJldHVyblxyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMucG9wLnBhcmVudFxyXG4gICAgICAgIGlmICghbGF5ZXIpIHJldHVyblxyXG4gICAgICAgIGxldCB3b3JsZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wb3BIb21lUG9zKVxyXG4gICAgICAgIHRoaXMucG9wLnBvc2l0aW9uID0gbGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGQpXHJcbiAgICAgICAgdGhpcy5wb3AuekluZGV4ID0gMTAwMDBcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3BMaWZ0ZWQgJiYgdGhpcy5wb3AgJiYgdGhpcy5wb3AuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcC5kZXN0cm95KClcclxuICAgICAgICAgICAgdGhpcy5wb3BMaWZ0ZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dNaXNpb24oKSB7XHJcbiAgICAgICAgdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICB9XHJcbiAgICBtb3ZlKHBvcywgdGltZSkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrSW5MXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8odGltZSwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZUJMXCIsIHRydWUpO1xyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBzaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiU2l0X1dhaXRpbmdcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBzaG93UG9wKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd1F1ZXVlUG9wKClcclxuICAgIH1cclxuICAgIHNob3dRdWV1ZVBvcCgpIHtcclxuICAgICAgICB0aGlzLmlzUXVldWVNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgaWYgKCF0aGlzLnBvcCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9wU2hvd24gJiYgdGhpcy5wb3AuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgICAgICBpZiAoYnRuKSBidG4uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHRoaXMuZ2FtZVBsYXkudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNQb3BSZWFkeSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMubWFya1BvcFJlYWR5KVxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnBvcClcclxuICAgICAgICB0aGlzLnBvcC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgbGV0IHBvcEFuaW0gPSB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIGlmIChwb3BBbmltKSB7XHJcbiAgICAgICAgICAgIHBvcEFuaW0ucGxheSgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb3Auc2NhbGUgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9wU2hvd24gPSB0cnVlXHJcbiAgICAgICAgbGV0IGhhbmQgPSB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIilcclxuICAgICAgICBpZiAoaGFuZCkge1xyXG4gICAgICAgICAgICBoYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGlmIChidG4pIHtcclxuICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMubWFya1BvcFJlYWR5LCAwLjkpXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1hcmtQb3BSZWFkeSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucG9wIHx8ICF0aGlzLnBvcC5hY3RpdmUpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNQb3BSZWFkeSA9IHRydWVcclxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgfVxyXG4gICAgY2xlYXJQb3BTdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnBvcFNob3duID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzUG9wUmVhZHkgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLm1hcmtQb3BSZWFkeSlcclxuICAgIH1cclxuICAgIGNsaWNrUG9wKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUXVldWVNb3ZpbmcpIHJldHVyblxyXG4gICAgICAgIGxldCBtb3ZlZCA9IHRoaXMuZ2FtZVBsYXkuZG9DdXModGhpcy50YWcsIHRoaXMubm9kZSlcclxuICAgICAgICBpZiAoIW1vdmVkKSByZXR1cm5cclxuICAgICAgICB0aGlzLmdhbWVQbGF5LnN0YXJ0Q291bnREb3duKClcclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBsZXQgaGFuZCA9IHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5yZXNldFBvcExheWVyKClcclxuICAgICAgICB0aGlzLmNsZWFyUG9wU3RhdGUoKVxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnBvcClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnBvcCkudG8oMC4yLCB7IHNjYWxlOiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3AgJiYgdGhpcy5wb3AuaXNWYWxpZCkgdGhpcy5wb3AuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuaXNTdGVwID49IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5zaG93RnJlZUljb25QdEhhbmQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdhcEJ1bmcoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkFiZG9taW5hbFwiLCB0cnVlKVxyXG4gICAgfVxyXG4gICAgZGF5VGEoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkFiQ3J1bmNoXCIsIHRydWUpXHJcblxyXG4gICAgfVxyXG4gICAgdHVjR2lhbigpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheSAmJiB0aGlzLmdhbWVQbGF5LmlzRW5kZ2FtZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0FuZ3J5V2FpdCA9IHRydWVcclxuICAgICAgICBpZiAodGhpcy5zb3VuZEFuZ3J5ICYmIHRoaXMuZ2FtZVBsYXkgJiYgdGhpcy5nYW1lUGxheS5wbGF5U2Z4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkucGxheVNmeCh0aGlzLnNvdW5kQW5ncnksIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nM1wiLCB0cnVlKVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5hbWUgPT09IFwiQ3J1bmNoXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTEwNi43MDEsIC00NylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXBweShwbGF5U291bmQgPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKHBsYXlTb3VuZCAmJiB0aGlzLnNvdW5kSGFwcHkgJiYgdGhpcy5nYW1lUGxheSAmJiB0aGlzLmdhbWVQbGF5LnBsYXlTZngpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5wbGF5U2Z4KHRoaXMuc291bmRIYXBweSwgZmFsc2UsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJIYXBweU91dFwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGNlbGVicmF0ZSgpIHtcclxuICAgICAgICB0aGlzLnN0b3BXYWl0UHJvZ3Jlc3MoKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgdGhpcy5jbGVhckFuZ3J5RngoKVxyXG4gICAgICAgIGlmICh0aGlzLnBvcCkgdGhpcy5wb3AuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmhhcHB5KGZhbHNlKVxyXG4gICAgfVxyXG4gICAgY2xlYXJBbmdyeUZ4KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQubmFtZS5pbmRleE9mKFwiYW5ncnlcIikgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBib3hpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkJveGluZ1wiLCB0cnVlKTtcclxuXHJcbiAgICB9XHJcbiAgICB3YWl0aW5nVGFnKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJTaXRfV2FpdGluZ1wiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJTaXRfV2FpdGluZ1wiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlRkxcIiwgdHJ1ZSlcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydFdhaXRQcm9ncmVzcygpXHJcbiAgICB9XHJcbiAgICBzdGFydFdhaXRQcm9ncmVzcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlsbEJhcikgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc1dhaXRQcm9ncmVzcyA9IHRydWVcclxuICAgICAgICB0aGlzLndhaXRUaW1lTGVmdCA9IHRoaXMud2FpdFRpbWVcclxuICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMVxyXG4gICAgICAgIGlmICghdGhpcy5ncmVlblNwKSB0aGlzLmdyZWVuU3AgPSB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWVcclxuICAgICAgICBpZiAodGhpcy5ncmVlblNwKSB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWUgPSB0aGlzLmdyZWVuU3BcclxuICAgICAgICBpZiAodGhpcy5maWxsQmFyLm5vZGUucGFyZW50KSB0aGlzLmZpbGxCYXIubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc3RvcFdhaXRQcm9ncmVzcygpIHtcclxuICAgICAgICB0aGlzLmlzV2FpdFByb2dyZXNzID0gZmFsc2VcclxuICAgICAgICB0aGlzLndhaXRUaW1lTGVmdCA9IDBcclxuICAgICAgICBpZiAodGhpcy5maWxsQmFyICYmIHRoaXMuZmlsbEJhci5ub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxCYXIubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzcGF3bkFuZ3J5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVQbGF5ICYmIHRoaXMuZ2FtZVBsYXkuaXNFbmRnYW1lKSByZXR1cm5cclxuICAgICAgICBpZiAoIXRoaXMuYW5ncnlQcmVmYWIpIHJldHVyblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBhbmdyeSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYW5ncnlQcmVmYWIpXHJcbiAgICAgICAgICAgICAgICBhbmdyeS5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIGFuZ3J5LnBvc2l0aW9uID0gY2MudjMoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNTAsIDExMCArIE1hdGgucmFuZG9tKCkgKiAyMCkuYWRkKGNjLnYzKDAsNTApKVxyXG4gICAgICAgICAgICAgICAgYW5ncnkub3BhY2l0eSA9IDI1NVxyXG4gICAgICAgICAgICAgICAgYW5ncnkuc2NhbGUgPSAwLjggKyBNYXRoLnJhbmRvbSgpICogMC4zXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihhbmdyeSkucGFyYWxsZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjksIHsgcG9zaXRpb246IGNjLnYzKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDMwLCA5MCkgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjksIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5ncnkgJiYgYW5ncnkuaXNWYWxpZCkgYW5ncnkuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIGkgKiAwLjEyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1dhaXRQcm9ncmVzcyAmJiB0aGlzLmZpbGxCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy53YWl0VGltZUxlZnQgLT0gZHRcclxuICAgICAgICAgICAgbGV0IHJhdGlvID0gdGhpcy53YWl0VGltZSA+IDAgPyBNYXRoLm1heCgwLCB0aGlzLndhaXRUaW1lTGVmdCAvIHRoaXMud2FpdFRpbWUpIDogMFxyXG4gICAgICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gcmF0aW9cclxuICAgICAgICAgICAgaWYgKHJhdGlvIDw9IDAuMjUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZFNwKSB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWUgPSB0aGlzLnJlZFNwXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmF0aW8gPD0gMC41KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy55ZWxsb3dTcCkgdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lID0gdGhpcy55ZWxsb3dTcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyYXRpbyA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BXYWl0UHJvZ3Jlc3MoKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkgJiYgdGhpcy5nYW1lUGxheS5pc0VuZGdhbWUpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgdGhpcy50dWNHaWFuKClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25BbmdyeSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9wTGlmdGVkKSB0aGlzLmZvbGxvd0xpZnRlZFBvcCgpXHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVQbGF5IHx8ICF0aGlzLmdhbWVQbGF5LnNvcnRMYXllcikgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQgPT09IHRoaXMuZ2FtZVBsYXkuc29ydExheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAtTWF0aC5yb3VuZCh0aGlzLm5vZGUueSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19