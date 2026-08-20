
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
        _this.posDone = cc.v3(0, 0);
        _this.tag = 0;
        _this.parentName = "";
        _this.parentIndex = 0;
        _this.parentNode = null;
        _this.isPt = false;
        _this.isQueueMoving = false;
        _this.isAngryWait = false;
        _this.gamePlay = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
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
        var btn = event.currentTarget;
        btn.getComponent(cc.Button).enabled = false;
        var hand = this.pop.getChildByName("hand");
        if (hand)
            hand.active = false;
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
        this.isAngryWait = true;
        this.anim.setAnimation(0, "Waiting3", true);
    };
    NewClass.prototype.happy = function () {
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 1);
        }
        this.anim.setAnimation(0, "HappyOut", true);
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
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXGN1c0d5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlIQztRQTlHRyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUMvQixhQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFckIsU0FBRyxHQUFHLENBQUMsQ0FBQTtRQUNQLGdCQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ2YsaUJBQVcsR0FBRyxDQUFDLENBQUE7UUFDZixnQkFBVSxHQUFHLElBQUksQ0FBQTtRQUNqQixVQUFJLEdBQUcsS0FBSyxDQUFBO1FBQ1osbUJBQWEsR0FBRyxLQUFLLENBQUE7UUFDckIsaUJBQVcsR0FBRyxLQUFLLENBQUE7UUFDbkIsY0FBUSxHQUFHLElBQUksQ0FBQTs7UUErRmYsaUJBQWlCO0lBQ3JCLENBQUM7SUEvRkcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUM5QyxDQUFDO0lBQ0QsdUJBQUksR0FBSixVQUFLLEdBQUcsRUFBRSxJQUFJO1FBQWQsaUJBTUM7UUFMRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakQsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFDRCxzQkFBRyxHQUFIO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUNELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFDcEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2pELElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ2pCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtTQUN0QjtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMxQyxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1NBQ3JCO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtTQUNsQztJQUNMLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsS0FBSyxFQUFFLEtBQUs7UUFDakIsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLE9BQU07UUFDOUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFNO1FBQ2xCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUE7UUFDN0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUMzQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMxQyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2hELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtTQUNyQztJQUNMLENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFFL0MsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFDRCx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUdoRCxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFOUMsQ0FBQztJQUNELDZCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLFFBQVEsS0FBSyxFQUFFO1lBQ1gsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQzlDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDOUMsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUV6QyxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBNUdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQ0FDRTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7eUNBQ2Q7SUFWVSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUg1QjtJQUFELGVBQUM7Q0FqSEQsQUFpSEMsQ0FqSHFDLEVBQUUsQ0FBQyxTQUFTLEdBaUhqRDtrQkFqSG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGFwcHk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIHBvc0RvbmUgPSBjYy52MygwLCAwKVxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICB0YWcgPSAwXHJcbiAgICBwYXJlbnROYW1lID0gXCJcIlxyXG4gICAgcGFyZW50SW5kZXggPSAwXHJcbiAgICBwYXJlbnROb2RlID0gbnVsbFxyXG4gICAgaXNQdCA9IGZhbHNlXHJcbiAgICBpc1F1ZXVlTW92aW5nID0gZmFsc2VcclxuICAgIGlzQW5ncnlXYWl0ID0gZmFsc2VcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkd5bVwiKVxyXG4gICAgfVxyXG4gICAgc2hvd01pc2lvbigpIHtcclxuICAgICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIH1cclxuICAgIG1vdmUocG9zLCB0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtJbkxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byh0aW1lLCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlQkxcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIHNpdCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJTaXRfV2FpdGluZ1wiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNob3dQb3AoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93UXVldWVQb3AoKVxyXG4gICAgfVxyXG4gICAgc2hvd1F1ZXVlUG9wKCkge1xyXG4gICAgICAgIHRoaXMuaXNRdWV1ZU1vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5wb3ApXHJcbiAgICAgICAgdGhpcy5wb3Auc2NhbGUgPSAxXHJcbiAgICAgICAgdGhpcy5wb3AuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGxldCBwb3BBbmltID0gdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBpZiAocG9wQW5pbSkge1xyXG4gICAgICAgICAgICBwb3BBbmltLnBsYXkoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFuZCA9IHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgIGlmIChoYW5kKSB7XHJcbiAgICAgICAgICAgIGhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IHRoaXMucG9wLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYgKGJ0bikge1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsaWNrUG9wKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUXVldWVNb3ZpbmcpIHJldHVyblxyXG4gICAgICAgIGxldCBtb3ZlZCA9IHRoaXMuZ2FtZVBsYXkuZG9DdXModGhpcy50YWcsIHRoaXMubm9kZSlcclxuICAgICAgICBpZiAoIW1vdmVkKSByZXR1cm5cclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBsZXQgaGFuZCA9IHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMucG9wKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wKS50bygwLjIsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVQbGF5LmlzU3RlcCA+PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc2hvd0ZyZWVJY29uUHRIYW5kKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnYXBCdW5nKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJBYmRvbWluYWxcIiwgdHJ1ZSlcclxuICAgIH1cclxuICAgIGRheVRhKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJBYkNydW5jaFwiLCB0cnVlKVxyXG5cclxuICAgIH1cclxuICAgIHR1Y0dpYW4oKSB7XHJcbiAgICAgICAgdGhpcy5pc0FuZ3J5V2FpdCA9IHRydWVcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2FpdGluZzNcIiwgdHJ1ZSlcclxuICAgIH1cclxuICAgIGhhcHB5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kSGFwcHkpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGFwcHksIGZhbHNlLCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSGFwcHlPdXRcIiwgdHJ1ZSk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIGJveGluZygpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiQm94aW5nXCIsIHRydWUpO1xyXG5cclxuICAgIH1cclxuICAgIHdhaXRpbmdUYWcodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIlNpdF9XYWl0aW5nXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIlNpdF9XYWl0aW5nXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVGTFwiLCB0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19