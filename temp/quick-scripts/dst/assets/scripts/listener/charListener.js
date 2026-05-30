
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xpc3RlbmVyL2NoYXJMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtRUM7UUEvREcsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQU8sR0FBRyxJQUFJLENBQUM7O0lBNkRuQixDQUFDO0lBbEVHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBSUQseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBRXhCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFFdkgsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUE7WUFFeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBRTNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFO1lBQ3BELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxzQkFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDcEgsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO29CQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO29CQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFBO29CQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtpQkFDakQ7Z0JBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUE7Z0JBRXhELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUV4QztTQUVKO0lBSUwsQ0FBQztJQUNELGtDQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIscUVBQXFFO1FBQ3JFLG9DQUFvQztRQUNwQyw2REFBNkQ7UUFDN0QsSUFBSTtJQUNSLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLHFFQUFxRTtRQUNyRSxzRUFBc0U7UUFFdEUsSUFBSTtRQUdKLDREQUE0RDtRQUM1RCw0Q0FBNEM7UUFDNUMsaUVBQWlFO1FBQ2pFLFFBQVE7UUFDUixxQ0FBcUM7UUFDckMsd0NBQXdDO1FBQ3hDLGlFQUFpRTtRQUNqRSxRQUFRO1FBQ1IsNENBQTRDO1FBQzVDLGtDQUFrQztRQUNsQyxRQUFRO1FBQ1IsSUFBSTtJQUVSLENBQUM7SUFoRWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRTVCO0lBQUQsZUFBQztDQW5FRCxBQW1FQyxDQW5FcUMsRUFBRSxDQUFDLFNBQVMsR0FtRWpEO2tCQW5Fb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUTCBmcm9tIFwiLi90cmVlTGlzdGVuZXJcIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIGNsYXNzTmFtZSA9IG51bGw7XG4gICAgZ2FtZVBsYXkgPSBudWxsO1xuICAgIGlzRmlyc3QgPSB0cnVlO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSB0aGlzW1wiX19jbGFzc25hbWVfX1wiXTtcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIklDWV8xOVwiKVxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG5cbiAgICAgICAgaWYgKHNlbGYuZ2V0Q29tcG9uZW50KHRoaXMuY2xhc3NOYW1lKSAmJiBvdGhlci5ub2RlLmdldENvbXBvbmVudChUTCkgJiYgdGhpcy5ub2RlLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5pc1N1YiA9PSB0cnVlKSB7XG4gICBcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkPWZhbHNlXG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuY29sbGVjdEVnZ3NTdWIob3RoZXIubm9kZSlcblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlzU3ViID09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5nZXRDb21wb25lbnQodGhpcy5jbGFzc05hbWUpICYmIG90aGVyLmdldENvbXBvbmVudChUTCkgJiYgdGhpcy5ub2RlLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5pc1N1YiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgaWYodGhpcy5pc0ZpcnN0KXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyb3dOb2RlLmFjdGl2ZT1mYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubGlzdEFycm93LmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZD1mYWxzZVxuXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jb2xsZWN0RWdncyhvdGhlci5ub2RlKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9XG5cbiBcblxuICAgIH1cbiAgICBvbkNvbGxpc2lvblN0YXkob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgLy8gaWYgKG90aGVyLm5vZGUubmFtZSA9PSBcImtlXCIgJiYgdGhpcy5nYW1lUGxheS5pc1RyYW5za2UgPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZVBsYXkub2ZmV29vZEZyb21LZSgpXG4gICAgICAgIC8vICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlzU2VsbGRpbmc9dHJ1ZVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRXhpdChvdGhlciwgc2VsZikge1xuICAgICAgICAvLyBpZiAoc2VsZi5nZXRDb21wb25lbnQodGhpcy5jbGFzc05hbWUpICYmIG90aGVyLmdldENvbXBvbmVudChUTCkpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikucmVtb3ZlRW5lbXkob3RoZXIubm9kZS5faWQpXG5cbiAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgLy8gaWYgKHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNTdWIgPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJzZWxsVG9DdXNcIikge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNTZWxsZGluZyA9IGZhbHNlXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwia2VcIikge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuZ2FtZVBsYXkub2ZmV29vZEZyb21LZSgpXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5pc1NlbGxkaW5nPXRydWVcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJzZWxsVG9DdXNcIikge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuZ2FtZVBsYXkub2ZmU2VsbCgpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiBcbiAgICB9XG5cblxufVxuIl19