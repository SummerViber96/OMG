
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listener/charListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '021fbGFpt1IuojzmG0GWQi9', 'charListener');
// scripts/listener/charListener.ts

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
var treeListener_1 = require("./treeListener");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = null;
        _this.gamePlay = null;
        _this.isFirst = true;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        this.className = this["__classname__"];
        this.gamePlay = cc.Canvas.instance.node.getComponent("ICY_19");
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (self.getComponent(this.className) && other.node.getComponent(treeListener_1.default) && this.node.getComponent("character").isSub == true) {
            other.node.getComponent(cc.CircleCollider).enabled = false;
            this.gamePlay.collectEggsSub(other.node);
        }
        if (this.node.getComponent("character").isSub == false) {
            if (self.getComponent(this.className) && other.getComponent(treeListener_1.default) && this.node.getComponent("character").isSub == false) {
                if (this.isFirst) {
                    this.isFirst = false;
                    this.gamePlay.arrowNode.active = false;
                    this.gamePlay.listArrow.children[3].active = true;
                }
                other.node.getComponent(cc.CircleCollider).enabled = false;
                this.gamePlay.collectEggs(other.node);
            }
        }
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        // if (other.node.name == "ke" && this.gamePlay.isTranske == false) {
        //     this.gamePlay.offWoodFromKe()
        //     // this.node.getComponent("character").isSellding=true
        // }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        // if (self.getComponent(this.className) && other.getComponent(TL)) {
        //     this.node.getComponent("character").removeEnemy(other.node._id)
        // }
        // if (this.node.getComponent("character").isSub == false) {
        //     if (other.node.name == "sellToCus") {
        //         this.node.getComponent("character").isSellding = false
        //     }
        //     if (other.node.name == "ke") {
        //         this.gamePlay.offWoodFromKe()
        //         // this.node.getComponent("character").isSellding=true
        //     }
        //     if (other.node.name == "sellToCus") {
        //         this.gamePlay.offSell()
        //     }
        // }
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdGVuZXJcXGNoYXJMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtRUM7UUEvREcsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQU8sR0FBRyxJQUFJLENBQUM7O0lBNkRuQixDQUFDO0lBbEVHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBSUQseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBRXhCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFFdkgsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUE7WUFFeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBRTNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFO1lBQ3BELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxzQkFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDcEgsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO29CQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO29CQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFBO29CQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtpQkFDakQ7Z0JBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUE7Z0JBRXhELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUV4QztTQUVKO0lBSUwsQ0FBQztJQUNELGtDQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIscUVBQXFFO1FBQ3JFLG9DQUFvQztRQUNwQyw2REFBNkQ7UUFDN0QsSUFBSTtJQUNSLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLHFFQUFxRTtRQUNyRSxzRUFBc0U7UUFFdEUsSUFBSTtRQUdKLDREQUE0RDtRQUM1RCw0Q0FBNEM7UUFDNUMsaUVBQWlFO1FBQ2pFLFFBQVE7UUFDUixxQ0FBcUM7UUFDckMsd0NBQXdDO1FBQ3hDLGlFQUFpRTtRQUNqRSxRQUFRO1FBQ1IsNENBQTRDO1FBQzVDLGtDQUFrQztRQUNsQyxRQUFRO1FBQ1IsSUFBSTtJQUVSLENBQUM7SUFoRWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRTVCO0lBQUQsZUFBQztDQW5FRCxBQW1FQyxDQW5FcUMsRUFBRSxDQUFDLFNBQVMsR0FtRWpEO2tCQW5Fb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUTCBmcm9tIFwiLi90cmVlTGlzdGVuZXJcIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuICAgIGNsYXNzTmFtZSA9IG51bGw7XHJcbiAgICBnYW1lUGxheSA9IG51bGw7XHJcbiAgICBpc0ZpcnN0ID0gdHJ1ZTtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IHRoaXNbXCJfX2NsYXNzbmFtZV9fXCJdO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJJQ1lfMTlcIilcclxuICAgIH1cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuXHJcbiAgICAgICAgaWYgKHNlbGYuZ2V0Q29tcG9uZW50KHRoaXMuY2xhc3NOYW1lKSAmJiBvdGhlci5ub2RlLmdldENvbXBvbmVudChUTCkgJiYgdGhpcy5ub2RlLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5pc1N1YiA9PSB0cnVlKSB7XHJcbiAgIFxyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZD1mYWxzZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jb2xsZWN0RWdnc1N1YihvdGhlci5ub2RlKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNTdWIgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuZ2V0Q29tcG9uZW50KHRoaXMuY2xhc3NOYW1lKSAmJiBvdGhlci5nZXRDb21wb25lbnQoVEwpICYmIHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNTdWIgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgaWYodGhpcy5pc0ZpcnN0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmFycm93Tm9kZS5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubGlzdEFycm93LmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLmVuYWJsZWQ9ZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmNvbGxlY3RFZ2dzKG90aGVyLm5vZGUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuIFxyXG5cclxuICAgIH1cclxuICAgIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZikge1xyXG4gICAgICAgIC8vIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJrZVwiICYmIHRoaXMuZ2FtZVBsYXkuaXNUcmFuc2tlID09IGZhbHNlKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZVBsYXkub2ZmV29vZEZyb21LZSgpXHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNTZWxsZGluZz10cnVlXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgLy8gaWYgKHNlbGYuZ2V0Q29tcG9uZW50KHRoaXMuY2xhc3NOYW1lKSAmJiBvdGhlci5nZXRDb21wb25lbnQoVEwpKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikucmVtb3ZlRW5lbXkob3RoZXIubm9kZS5faWQpXHJcblxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlzU3ViID09IGZhbHNlKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJzZWxsVG9DdXNcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5pc1NlbGxkaW5nID0gZmFsc2VcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwia2VcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5nYW1lUGxheS5vZmZXb29kRnJvbUtlKClcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNTZWxsZGluZz10cnVlXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgaWYgKG90aGVyLm5vZGUubmFtZSA9PSBcInNlbGxUb0N1c1wiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmdhbWVQbGF5Lm9mZlNlbGwoKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=