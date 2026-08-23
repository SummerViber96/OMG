
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXGN1c0d5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdQQztRQXJQRyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFDL0IsYUFBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRXJCLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFDUCxVQUFVO1FBRVYsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxXQUFLLEdBQW1CLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQ1osZ0JBQVUsR0FBRyxFQUFFLENBQUE7UUFDZixpQkFBVyxHQUFHLENBQUMsQ0FBQTtRQUNmLGdCQUFVLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLFVBQUksR0FBRyxLQUFLLENBQUE7UUFDWixtQkFBYSxHQUFHLEtBQUssQ0FBQTtRQUNyQixpQkFBVyxHQUFHLEtBQUssQ0FBQTtRQUNuQixlQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLGNBQVEsR0FBRyxJQUFJLENBQUE7UUFDZixhQUFPLEdBQW1CLElBQUksQ0FBQTtRQUM5QixvQkFBYyxHQUFHLEtBQUssQ0FBQTtRQUN0QixrQkFBWSxHQUFHLENBQUMsQ0FBQTtRQUNoQixlQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLGdCQUFVLEdBQUcsRUFBRSxDQUFD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LENBQUE7U0FDOUM7SUFDTCxDQUFDO0lBcFBEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQ0FDRTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5Q0FDZDtJQUdQO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FDTztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNJO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1U7SUFFOUI7UUFEQyxRQUFROzhDQUNHO0lBdkJLLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3UDVCO0lBQUQsZUFBQztDQXhQRCxBQXdQQyxDQXhQcUMsRUFBRSxDQUFDLFNBQVMsR0F3UGpEO2tCQXhQb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9wOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIYXBweTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQW5ncnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIHBvc0RvbmUgPSBjYy52MygwLCAwKVxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICB0YWcgPSAwXHJcbiAgICAvL2ZpbGwgYmFyXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlsbEJhcjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHllbGxvd1NwOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICByZWRTcDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGFuZ3J5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICB3YWl0VGltZSA9IDhcclxuICAgIHBhcmVudE5hbWUgPSBcIlwiXHJcbiAgICBwYXJlbnRJbmRleCA9IDBcclxuICAgIHBhcmVudE5vZGUgPSBudWxsXHJcbiAgICBpc1B0ID0gZmFsc2VcclxuICAgIGlzUXVldWVNb3ZpbmcgPSBmYWxzZVxyXG4gICAgaXNBbmdyeVdhaXQgPSBmYWxzZVxyXG4gICAgaXNTcGF3bmVkID0gZmFsc2VcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgZ3JlZW5TcDogY2MuU3ByaXRlRnJhbWUgPSBudWxsXHJcbiAgICBpc1dhaXRQcm9ncmVzcyA9IGZhbHNlXHJcbiAgICB3YWl0VGltZUxlZnQgPSAwXHJcbiAgICBwb3BMaWZ0ZWQgPSBmYWxzZVxyXG4gICAgcG9wSG9tZVBvcyA9IGNjLnYzKDAsIDApXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR3ltXCIpXHJcbiAgICAgICAgaWYgKHRoaXMucG9wKSB0aGlzLnBvcEhvbWVQb3MgPSB0aGlzLnBvcC5wb3NpdGlvbi5jbG9uZSgpXHJcbiAgICAgICAgaWYgKHRoaXMuZmlsbEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmdyZWVuU3AgPSB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzV2FpdFByb2dyZXNzICYmIHRoaXMuZmlsbEJhci5ub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaWZ0UG9wKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wb3AgfHwgIXRoaXMuZ2FtZVBsYXkpIHJldHVyblxyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuZ2FtZVBsYXkuc29ydExheWVyIHx8IHRoaXMuZ2FtZVBsYXkubm9kZVxyXG4gICAgICAgIGlmICghdGhpcy5wb3BMaWZ0ZWQpIHRoaXMucG9wSG9tZVBvcyA9IHRoaXMucG9wLnBvc2l0aW9uLmNsb25lKClcclxuICAgICAgICBsZXQgd29ybGQgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucG9wSG9tZVBvcylcclxuICAgICAgICB0aGlzLnBvcC5wYXJlbnQgPSBsYXllclxyXG4gICAgICAgIHRoaXMucG9wLnBvc2l0aW9uID0gbGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGQpXHJcbiAgICAgICAgdGhpcy5wb3AuekluZGV4ID0gMTAwMDBcclxuICAgICAgICB0aGlzLnBvcExpZnRlZCA9IHRydWVcclxuICAgIH1cclxuICAgIHJlc2V0UG9wTGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBvcExpZnRlZCB8fCAhdGhpcy5wb3ApIHJldHVyblxyXG4gICAgICAgIHRoaXMucG9wLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgIHRoaXMucG9wLnBvc2l0aW9uID0gdGhpcy5wb3BIb21lUG9zXHJcbiAgICAgICAgdGhpcy5wb3AuekluZGV4ID0gMFxyXG4gICAgICAgIHRoaXMucG9wTGlmdGVkID0gZmFsc2VcclxuICAgIH1cclxuICAgIGZvbGxvd0xpZnRlZFBvcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucG9wTGlmdGVkIHx8ICF0aGlzLnBvcCB8fCAhdGhpcy5wb3AuaXNWYWxpZCB8fCAhdGhpcy5nYW1lUGxheSkgcmV0dXJuXHJcbiAgICAgICAgbGV0IGxheWVyID0gdGhpcy5wb3AucGFyZW50XHJcbiAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuXHJcbiAgICAgICAgbGV0IHdvcmxkID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBvcEhvbWVQb3MpXHJcbiAgICAgICAgdGhpcy5wb3AucG9zaXRpb24gPSBsYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZClcclxuICAgICAgICB0aGlzLnBvcC56SW5kZXggPSAxMDAwMFxyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcExpZnRlZCAmJiB0aGlzLnBvcCAmJiB0aGlzLnBvcC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB0aGlzLnBvcExpZnRlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd01pc2lvbigpIHtcclxuICAgICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIH1cclxuICAgIG1vdmUocG9zLCB0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtJbkxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byh0aW1lLCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlQkxcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIHNpdCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJTaXRfV2FpdGluZ1wiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNob3dQb3AoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93UXVldWVQb3AoKVxyXG4gICAgfVxyXG4gICAgc2hvd1F1ZXVlUG9wKCkge1xyXG4gICAgICAgIHRoaXMuaXNRdWV1ZU1vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5wb3ApXHJcbiAgICAgICAgdGhpcy5wb3Auc2NhbGUgPSAxXHJcbiAgICAgICAgdGhpcy5wb3AuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGxldCBwb3BBbmltID0gdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBpZiAocG9wQW5pbSkge1xyXG4gICAgICAgICAgICBwb3BBbmltLnBsYXkoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFuZCA9IHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgIGlmIChoYW5kKSB7XHJcbiAgICAgICAgICAgIGhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IHRoaXMucG9wLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYgKGJ0bikge1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsaWNrUG9wKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUXVldWVNb3ZpbmcpIHJldHVyblxyXG4gICAgICAgIGxldCBtb3ZlZCA9IHRoaXMuZ2FtZVBsYXkuZG9DdXModGhpcy50YWcsIHRoaXMubm9kZSlcclxuICAgICAgICBpZiAoIW1vdmVkKSByZXR1cm5cclxuICAgICAgICB0aGlzLmdhbWVQbGF5LnN0YXJ0Q291bnREb3duKClcclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBsZXQgaGFuZCA9IHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5yZXNldFBvcExheWVyKClcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5wb3ApXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5wb3ApLnRvKDAuMiwgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuaXNTdGVwID49IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5zaG93RnJlZUljb25QdEhhbmQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdhcEJ1bmcoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkFiZG9taW5hbFwiLCB0cnVlKVxyXG4gICAgfVxyXG4gICAgZGF5VGEoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkFiQ3J1bmNoXCIsIHRydWUpXHJcblxyXG4gICAgfVxyXG4gICAgdHVjR2lhbigpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheSAmJiB0aGlzLmdhbWVQbGF5LmlzRW5kZ2FtZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0FuZ3J5V2FpdCA9IHRydWVcclxuICAgICAgICBpZiAodGhpcy5zb3VuZEFuZ3J5ICYmIHRoaXMuZ2FtZVBsYXkgJiYgdGhpcy5nYW1lUGxheS5wbGF5U2Z4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkucGxheVNmeCh0aGlzLnNvdW5kQW5ncnksIGZhbHNlLCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2FpdGluZzNcIiwgdHJ1ZSlcclxuICAgIH1cclxuICAgIGhhcHB5KHBsYXlTb3VuZCA9IHRydWUpIHtcclxuICAgICAgICBpZiAocGxheVNvdW5kICYmIHRoaXMuc291bmRIYXBweSAmJiB0aGlzLmdhbWVQbGF5ICYmIHRoaXMuZ2FtZVBsYXkucGxheVNmeCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnBsYXlTZngodGhpcy5zb3VuZEhhcHB5LCBmYWxzZSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkhhcHB5T3V0XCIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgY2VsZWJyYXRlKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcFdhaXRQcm9ncmVzcygpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmNsZWFyQW5ncnlGeCgpXHJcbiAgICAgICAgaWYgKHRoaXMucG9wKSB0aGlzLnBvcC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaGFwcHkoZmFsc2UpXHJcbiAgICB9XHJcbiAgICBjbGVhckFuZ3J5RngoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5uYW1lLmluZGV4T2YoXCJhbmdyeVwiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJveGluZygpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiQm94aW5nXCIsIHRydWUpO1xyXG5cclxuICAgIH1cclxuICAgIHdhaXRpbmdUYWcodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIlNpdF9XYWl0aW5nXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIlNpdF9XYWl0aW5nXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVGTFwiLCB0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0V2FpdFByb2dyZXNzKClcclxuICAgIH1cclxuICAgIHN0YXJ0V2FpdFByb2dyZXNzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5maWxsQmFyKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzV2FpdFByb2dyZXNzID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMud2FpdFRpbWVMZWZ0ID0gdGhpcy53YWl0VGltZVxyXG4gICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSAxXHJcbiAgICAgICAgaWYgKCF0aGlzLmdyZWVuU3ApIHRoaXMuZ3JlZW5TcCA9IHRoaXMuZmlsbEJhci5zcHJpdGVGcmFtZVxyXG4gICAgICAgIGlmICh0aGlzLmdyZWVuU3ApIHRoaXMuZmlsbEJhci5zcHJpdGVGcmFtZSA9IHRoaXMuZ3JlZW5TcFxyXG4gICAgICAgIGlmICh0aGlzLmZpbGxCYXIubm9kZS5wYXJlbnQpIHRoaXMuZmlsbEJhci5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBzdG9wV2FpdFByb2dyZXNzKCkge1xyXG4gICAgICAgIHRoaXMuaXNXYWl0UHJvZ3Jlc3MgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMud2FpdFRpbWVMZWZ0ID0gMFxyXG4gICAgICAgIGlmICh0aGlzLmZpbGxCYXIgJiYgdGhpcy5maWxsQmFyLm5vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEJhci5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYXduQW5ncnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkgJiYgdGhpcy5nYW1lUGxheS5pc0VuZGdhbWUpIHJldHVyblxyXG4gICAgICAgIGlmICghdGhpcy5hbmdyeVByZWZhYikgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ3J5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5hbmdyeVByZWZhYilcclxuICAgICAgICAgICAgICAgIGFuZ3J5LnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgYW5ncnkucG9zaXRpb24gPSBjYy52MygoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA1MCwgMTEwICsgTWF0aC5yYW5kb20oKSAqIDIwKS5hZGQoY2MudjMoMCw1MCkpXHJcbiAgICAgICAgICAgICAgICBhbmdyeS5vcGFjaXR5ID0gMjU1XHJcbiAgICAgICAgICAgICAgICBhbmdyeS5zY2FsZSA9IDAuOCArIE1hdGgucmFuZG9tKCkgKiAwLjNcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGFuZ3J5KS5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuOSwgeyBwb3NpdGlvbjogY2MudjMoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMzAsIDkwKSB9KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuOSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICApLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmdyeSAmJiBhbmdyeS5pc1ZhbGlkKSBhbmdyeS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgaSAqIDAuMTIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzV2FpdFByb2dyZXNzICYmIHRoaXMuZmlsbEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLndhaXRUaW1lTGVmdCAtPSBkdFxyXG4gICAgICAgICAgICBsZXQgcmF0aW8gPSB0aGlzLndhaXRUaW1lID4gMCA/IE1hdGgubWF4KDAsIHRoaXMud2FpdFRpbWVMZWZ0IC8gdGhpcy53YWl0VGltZSkgOiAwXHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSByYXRpb1xyXG4gICAgICAgICAgICBpZiAocmF0aW8gPD0gMC4yNSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVkU3ApIHRoaXMuZmlsbEJhci5zcHJpdGVGcmFtZSA9IHRoaXMucmVkU3BcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYXRpbyA8PSAwLjUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnllbGxvd1NwKSB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWUgPSB0aGlzLnllbGxvd1NwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJhdGlvIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFdhaXRQcm9ncmVzcygpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSAmJiB0aGlzLmdhbWVQbGF5LmlzRW5kZ2FtZSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkFuZ3J5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3BMaWZ0ZWQpIHRoaXMuZm9sbG93TGlmdGVkUG9wKClcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZVBsYXkgfHwgIXRoaXMuZ2FtZVBsYXkuc29ydExheWVyKSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudCA9PT0gdGhpcy5nYW1lUGxheS5zb3J0TGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IC1NYXRoLnJvdW5kKHRoaXMubm9kZS55KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=