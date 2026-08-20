
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
        this.pop.active = true;
        this.pop.getComponent(cc.Animation).play();
        this.pop.getChildByName("hand").active = true;
    };
    NewClass.prototype.clickPop = function (event, value) {
        // console.log("clcik pop")
        event.currentTarget.getComponent(cc.Button).enabled = false;
        // console.log("click pop")
        var btn = event.currentTarget;
        btn.getComponent(cc.Button).enabled = false;
        cc.tween(this.pop).to(0.2, { scale: 0 }).start();
        this.gamePlay.doCus(this.tag, this.node);
    };
    NewClass.prototype.gapBung = function () {
        this.anim.setAnimation(0, "Abdominal", true);
    };
    NewClass.prototype.dayTa = function () {
        this.anim.setAnimation(0, "AbCrunch", true);
    };
    NewClass.prototype.tucGian = function () {
        console.log("tuc gian");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXGN1c0d5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVGQztRQXBGRyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUMvQixhQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFckIsU0FBRyxHQUFHLENBQUMsQ0FBQTtRQUNQLGdCQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ2YsaUJBQVcsR0FBRyxDQUFDLENBQUE7UUFDZixnQkFBVSxHQUFHLElBQUksQ0FBQTtRQUNqQixVQUFJLEdBQUcsS0FBSyxDQUFBO1FBQ1osY0FBUSxHQUFHLElBQUksQ0FBQTs7UUF1RWYsaUJBQWlCO0lBQ3JCLENBQUM7SUF2RUcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUM5QyxDQUFDO0lBQ0QsdUJBQUksR0FBSixVQUFLLEdBQUcsRUFBRSxJQUFJO1FBQWQsaUJBTUM7UUFMRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakQsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFDRCxzQkFBRyxHQUFIO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDakQsQ0FBQztJQUNELDJCQUFRLEdBQVIsVUFBUyxLQUFLLEVBQUUsS0FBSztRQUNqQiwyQkFBMkI7UUFDM0IsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDM0QsMkJBQTJCO1FBQzNCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUE7UUFDN0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM1QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFNUMsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFDRCx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUUvQyxDQUFDO0lBQ0QsMEJBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUUvQyxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNqRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFHaEQsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTlDLENBQUM7SUFDRCw2QkFBVSxHQUFWLFVBQVcsS0FBSztRQUNaLFFBQVEsS0FBSyxFQUFFO1lBQ1gsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQzlDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDOUMsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUV6QyxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBbEZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQ0FDRTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7eUNBQ2Q7SUFWVSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUY1QjtJQUFELGVBQUM7Q0F2RkQsQUF1RkMsQ0F2RnFDLEVBQUUsQ0FBQyxTQUFTLEdBdUZqRDtrQkF2Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGFwcHk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIHBvc0RvbmUgPSBjYy52MygwLCAwKVxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICB0YWcgPSAwXHJcbiAgICBwYXJlbnROYW1lID0gXCJcIlxyXG4gICAgcGFyZW50SW5kZXggPSAwXHJcbiAgICBwYXJlbnROb2RlID0gbnVsbFxyXG4gICAgaXNQdCA9IGZhbHNlXHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHeW1cIilcclxuICAgIH1cclxuICAgIHNob3dNaXNpb24oKSB7XHJcbiAgICAgICAgdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICB9XHJcbiAgICBtb3ZlKHBvcywgdGltZSkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrSW5MXCIsIHRydWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8odGltZSwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZUJMXCIsIHRydWUpO1xyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBzaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiU2l0X1dhaXRpbmdcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBzaG93UG9wKCkge1xyXG4gICAgICAgIHRoaXMucG9wLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgY2xpY2tQb3AoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjbGNpayBwb3BcIilcclxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2xpY2sgcG9wXCIpXHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcclxuICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wKS50bygwLjIsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmRvQ3VzKHRoaXMudGFnLCB0aGlzLm5vZGUpXHJcblxyXG4gICAgfVxyXG4gICAgZ2FwQnVuZygpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiQWJkb21pbmFsXCIsIHRydWUpXHJcbiAgICB9XHJcbiAgICBkYXlUYSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiQWJDcnVuY2hcIiwgdHJ1ZSlcclxuXHJcbiAgICB9XHJcbiAgICB0dWNHaWFuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHVjIGdpYW5cIilcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2FpdGluZzNcIiwgdHJ1ZSlcclxuXHJcbiAgICB9XHJcbiAgICBoYXBweSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZEhhcHB5KSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhhcHB5LCBmYWxzZSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkhhcHB5T3V0XCIsIHRydWUpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBib3hpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIkJveGluZ1wiLCB0cnVlKTtcclxuXHJcbiAgICB9XHJcbiAgICB3YWl0aW5nVGFnKHZhbHVlKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiU2l0X1dhaXRpbmdcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiU2l0X1dhaXRpbmdcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZUZMXCIsIHRydWUpXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=