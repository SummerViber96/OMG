
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXGN1c0d5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVQQztRQXBQRyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFDL0IsYUFBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRXJCLFNBQUcsR0FBRyxDQUFDLENBQUE7UUFDUCxVQUFVO1FBRVYsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxXQUFLLEdBQW1CLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQ1osZ0JBQVUsR0FBRyxFQUFFLENBQUE7UUFDZixpQkFBVyxHQUFHLENBQUMsQ0FBQTtRQUNmLGdCQUFVLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLFVBQUksR0FBRyxLQUFLLENBQUE7UUFDWixtQkFBYSxHQUFHLEtBQUssQ0FBQTtRQUNyQixpQkFBVyxHQUFHLEtBQUssQ0FBQTtRQUNuQixjQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ2YsYUFBTyxHQUFtQixJQUFJLENBQUE7UUFDOUIsb0JBQWMsR0FBRyxLQUFLLENBQUE7UUFDdEIsa0JBQVksR0FBRyxDQUFDLENBQUE7UUFDaEIsZUFBUyxHQUFHLEtBQUssQ0FBQTtRQUNqQixnQkFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMs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RDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0U7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7eUNBQ2Q7SUFHUDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ087SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDSTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNVO0lBRTlCO1FBREMsUUFBUTs4Q0FDRztJQXZCSyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdVA1QjtJQUFELGVBQUM7Q0F2UEQsQUF1UEMsQ0F2UHFDLEVBQUUsQ0FBQyxTQUFTLEdBdVBqRDtrQkF2UG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGFwcHk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBwb3NEb25lID0gY2MudjMoMCwgMClcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGFnID0gMFxyXG4gICAgLy9maWxsIGJhclxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGxCYXI6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICB5ZWxsb3dTcDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcmVkU3A6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBhbmdyeVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgd2FpdFRpbWUgPSA4XHJcbiAgICBwYXJlbnROYW1lID0gXCJcIlxyXG4gICAgcGFyZW50SW5kZXggPSAwXHJcbiAgICBwYXJlbnROb2RlID0gbnVsbFxyXG4gICAgaXNQdCA9IGZhbHNlXHJcbiAgICBpc1F1ZXVlTW92aW5nID0gZmFsc2VcclxuICAgIGlzQW5ncnlXYWl0ID0gZmFsc2VcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgZ3JlZW5TcDogY2MuU3ByaXRlRnJhbWUgPSBudWxsXHJcbiAgICBpc1dhaXRQcm9ncmVzcyA9IGZhbHNlXHJcbiAgICB3YWl0VGltZUxlZnQgPSAwXHJcbiAgICBwb3BMaWZ0ZWQgPSBmYWxzZVxyXG4gICAgcG9wSG9tZVBvcyA9IGNjLnYzKDAsIDApXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR3ltXCIpXHJcbiAgICAgICAgaWYgKHRoaXMucG9wKSB0aGlzLnBvcEhvbWVQb3MgPSB0aGlzLnBvcC5wb3NpdGlvbi5jbG9uZSgpXHJcbiAgICAgICAgaWYgKHRoaXMuZmlsbEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmdyZWVuU3AgPSB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzV2FpdFByb2dyZXNzICYmIHRoaXMuZmlsbEJhci5ub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaWZ0UG9wKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wb3AgfHwgIXRoaXMuZ2FtZVBsYXkpIHJldHVyblxyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuZ2FtZVBsYXkuc29ydExheWVyIHx8IHRoaXMuZ2FtZVBsYXkubm9kZVxyXG4gICAgICAgIGlmICghdGhpcy5wb3BMaWZ0ZWQpIHRoaXMucG9wSG9tZVBvcyA9IHRoaXMucG9wLnBvc2l0aW9uLmNsb25lKClcclxuICAgICAgICBsZXQgd29ybGQgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucG9wSG9tZVBvcylcclxuICAgICAgICB0aGlzLnBvcC5wYXJlbnQgPSBsYXllclxyXG4gICAgICAgIHRoaXMucG9wLnBvc2l0aW9uID0gbGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGQpXHJcbiAgICAgICAgdGhpcy5wb3AuekluZGV4ID0gMTAwMDBcclxuICAgICAgICB0aGlzLnBvcExpZnRlZCA9IHRydWVcclxuICAgIH1cclxuICAgIHJlc2V0UG9wTGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBvcExpZnRlZCB8fCAhdGhpcy5wb3ApIHJldHVyblxyXG4gICAgICAgIHRoaXMucG9wLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgIHRoaXMucG9wLnBvc2l0aW9uID0gdGhpcy5wb3BIb21lUG9zXHJcbiAgICAgICAgdGhpcy5wb3AuekluZGV4ID0gMFxyXG4gICAgICAgIHRoaXMucG9wTGlmdGVkID0gZmFsc2VcclxuICAgIH1cclxuICAgIGZvbGxvd0xpZnRlZFBvcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucG9wTGlmdGVkIHx8ICF0aGlzLnBvcCB8fCAhdGhpcy5wb3AuaXNWYWxpZCB8fCAhdGhpcy5nYW1lUGxheSkgcmV0dXJuXHJcbiAgICAgICAgbGV0IGxheWVyID0gdGhpcy5wb3AucGFyZW50XHJcbiAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuXHJcbiAgICAgICAgbGV0IHdvcmxkID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBvcEhvbWVQb3MpXHJcbiAgICAgICAgdGhpcy5wb3AucG9zaXRpb24gPSBsYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZClcclxuICAgICAgICB0aGlzLnBvcC56SW5kZXggPSAxMDAwMFxyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcExpZnRlZCAmJiB0aGlzLnBvcCAmJiB0aGlzLnBvcC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB0aGlzLnBvcExpZnRlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd01pc2lvbigpIHtcclxuICAgICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIH1cclxuICAgIG1vdmUocG9zLCB0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtJbkxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byh0aW1lLCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlQkxcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIHNpdCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJTaXRfV2FpdGluZ1wiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNob3dQb3AoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93UXVldWVQb3AoKVxyXG4gICAgfVxyXG4gICAgc2hvd1F1ZXVlUG9wKCkge1xyXG4gICAgICAgIHRoaXMuaXNRdWV1ZU1vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5wb3ApXHJcbiAgICAgICAgdGhpcy5wb3Auc2NhbGUgPSAxXHJcbiAgICAgICAgdGhpcy5wb3AuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGxldCBwb3BBbmltID0gdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBpZiAocG9wQW5pbSkge1xyXG4gICAgICAgICAgICBwb3BBbmltLnBsYXkoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFuZCA9IHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgIGlmIChoYW5kKSB7XHJcbiAgICAgICAgICAgIGhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IHRoaXMucG9wLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYgKGJ0bikge1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsaWNrUG9wKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUXVldWVNb3ZpbmcpIHJldHVyblxyXG4gICAgICAgIGxldCBtb3ZlZCA9IHRoaXMuZ2FtZVBsYXkuZG9DdXModGhpcy50YWcsIHRoaXMubm9kZSlcclxuICAgICAgICBpZiAoIW1vdmVkKSByZXR1cm5cclxuICAgICAgICB0aGlzLmdhbWVQbGF5LnN0YXJ0Q291bnREb3duKClcclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBsZXQgaGFuZCA9IHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5yZXNldFBvcExheWVyKClcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5wb3ApXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5wb3ApLnRvKDAuMiwgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuaXNTdGVwID49IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5zaG93RnJlZUljb25QdEhhbmQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdhcEJ1bmcoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkFiZG9taW5hbFwiLCB0cnVlKVxyXG4gICAgfVxyXG4gICAgZGF5VGEoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkFiQ3J1bmNoXCIsIHRydWUpXHJcblxyXG4gICAgfVxyXG4gICAgdHVjR2lhbigpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheSAmJiB0aGlzLmdhbWVQbGF5LmlzRW5kZ2FtZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0FuZ3J5V2FpdCA9IHRydWVcclxuICAgICAgICBpZiAodGhpcy5zb3VuZEFuZ3J5ICYmIHRoaXMuZ2FtZVBsYXkgJiYgdGhpcy5nYW1lUGxheS5wbGF5U2Z4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkucGxheVNmeCh0aGlzLnNvdW5kQW5ncnksIGZhbHNlLCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2FpdGluZzNcIiwgdHJ1ZSlcclxuICAgIH1cclxuICAgIGhhcHB5KHBsYXlTb3VuZCA9IHRydWUpIHtcclxuICAgICAgICBpZiAocGxheVNvdW5kICYmIHRoaXMuc291bmRIYXBweSAmJiB0aGlzLmdhbWVQbGF5ICYmIHRoaXMuZ2FtZVBsYXkucGxheVNmeCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnBsYXlTZngodGhpcy5zb3VuZEhhcHB5LCBmYWxzZSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkhhcHB5T3V0XCIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgY2VsZWJyYXRlKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcFdhaXRQcm9ncmVzcygpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB0aGlzLmNsZWFyQW5ncnlGeCgpXHJcbiAgICAgICAgaWYgKHRoaXMucG9wKSB0aGlzLnBvcC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaGFwcHkoZmFsc2UpXHJcbiAgICB9XHJcbiAgICBjbGVhckFuZ3J5RngoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5uYW1lLmluZGV4T2YoXCJhbmdyeVwiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJveGluZygpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiQm94aW5nXCIsIHRydWUpO1xyXG5cclxuICAgIH1cclxuICAgIHdhaXRpbmdUYWcodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIlNpdF9XYWl0aW5nXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIlNpdF9XYWl0aW5nXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVGTFwiLCB0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0V2FpdFByb2dyZXNzKClcclxuICAgIH1cclxuICAgIHN0YXJ0V2FpdFByb2dyZXNzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5maWxsQmFyKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzV2FpdFByb2dyZXNzID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMud2FpdFRpbWVMZWZ0ID0gdGhpcy53YWl0VGltZVxyXG4gICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSAxXHJcbiAgICAgICAgaWYgKCF0aGlzLmdyZWVuU3ApIHRoaXMuZ3JlZW5TcCA9IHRoaXMuZmlsbEJhci5zcHJpdGVGcmFtZVxyXG4gICAgICAgIGlmICh0aGlzLmdyZWVuU3ApIHRoaXMuZmlsbEJhci5zcHJpdGVGcmFtZSA9IHRoaXMuZ3JlZW5TcFxyXG4gICAgICAgIGlmICh0aGlzLmZpbGxCYXIubm9kZS5wYXJlbnQpIHRoaXMuZmlsbEJhci5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBzdG9wV2FpdFByb2dyZXNzKCkge1xyXG4gICAgICAgIHRoaXMuaXNXYWl0UHJvZ3Jlc3MgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMud2FpdFRpbWVMZWZ0ID0gMFxyXG4gICAgICAgIGlmICh0aGlzLmZpbGxCYXIgJiYgdGhpcy5maWxsQmFyLm5vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEJhci5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYXduQW5ncnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkgJiYgdGhpcy5nYW1lUGxheS5pc0VuZGdhbWUpIHJldHVyblxyXG4gICAgICAgIGlmICghdGhpcy5hbmdyeVByZWZhYikgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ3J5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5hbmdyeVByZWZhYilcclxuICAgICAgICAgICAgICAgIGFuZ3J5LnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgYW5ncnkucG9zaXRpb24gPSBjYy52MygoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA1MCwgMTEwICsgTWF0aC5yYW5kb20oKSAqIDIwKS5hZGQoY2MudjMoMCw1MCkpXHJcbiAgICAgICAgICAgICAgICBhbmdyeS5vcGFjaXR5ID0gMjU1XHJcbiAgICAgICAgICAgICAgICBhbmdyeS5zY2FsZSA9IDAuOCArIE1hdGgucmFuZG9tKCkgKiAwLjNcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGFuZ3J5KS5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuOSwgeyBwb3NpdGlvbjogY2MudjMoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMzAsIDkwKSB9KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuOSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICApLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmdyeSAmJiBhbmdyeS5pc1ZhbGlkKSBhbmdyeS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgaSAqIDAuMTIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzV2FpdFByb2dyZXNzICYmIHRoaXMuZmlsbEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLndhaXRUaW1lTGVmdCAtPSBkdFxyXG4gICAgICAgICAgICBsZXQgcmF0aW8gPSB0aGlzLndhaXRUaW1lID4gMCA/IE1hdGgubWF4KDAsIHRoaXMud2FpdFRpbWVMZWZ0IC8gdGhpcy53YWl0VGltZSkgOiAwXHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSByYXRpb1xyXG4gICAgICAgICAgICBpZiAocmF0aW8gPD0gMC4yNSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVkU3ApIHRoaXMuZmlsbEJhci5zcHJpdGVGcmFtZSA9IHRoaXMucmVkU3BcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYXRpbyA8PSAwLjUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnllbGxvd1NwKSB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWUgPSB0aGlzLnllbGxvd1NwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJhdGlvIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFdhaXRQcm9ncmVzcygpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSAmJiB0aGlzLmdhbWVQbGF5LmlzRW5kZ2FtZSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkFuZ3J5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3BMaWZ0ZWQpIHRoaXMuZm9sbG93TGlmdGVkUG9wKClcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZVBsYXkgfHwgIXRoaXMuZ2FtZVBsYXkuc29ydExheWVyKSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudCA9PT0gdGhpcy5nYW1lUGxheS5zb3J0TGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IC1NYXRoLnJvdW5kKHRoaXMubm9kZS55KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=