
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listener/rangeListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d575F5AdFBp79tQ3agM8NB', 'rangeListener');
// scripts/listener/rangeListener.ts

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
        _this.target = null;
        _this.className = null;
        _this.gamePlay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        this.className = this["__classname__"];
        this.gamePlay = cc.Canvas.instance.node.getComponent("ICY_19");
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (this.target.getComponent("character").isSub == false) {
            if (other.node.name == "arenaSell1") {
                if (this.gamePlay.countMoneyBag > 0) {
                    this.gamePlay.getSell();
                }
                else {
                    this.gamePlay.char.getChildByName("textUd").getComponent(cc.Animation).play();
                    this.gamePlay.listArrow.children[3].active = true;
                    this.gamePlay.arrowNode.active = false;
                }
            }
            if (other.node.name == "arenaSell3") {
                if (this.gamePlay.countMoneyBag > 0) {
                    this.gamePlay.getSell3(3);
                }
                else {
                    this.gamePlay.char.getChildByName("textUd").getComponent(cc.Animation).play();
                    this.gamePlay.listArrow.children[3].active = true;
                    this.gamePlay.arrowNode.active = false;
                }
            }
            if (other.node.name == "arenaSell4") {
                if (this.gamePlay.countMoneyBag > 0) {
                    this.gamePlay.getSell3(4);
                }
                else {
                    this.gamePlay.char.getChildByName("textUd").getComponent(cc.Animation).play();
                    this.gamePlay.listArrow.children[3].active = true;
                    this.gamePlay.arrowNode.active = false;
                }
            }
            else if (other.node.name == "sellToCus") {
                other.node.parent.children[1].color = cc.Color.GREEN;
                this.gamePlay.sellToCus2();
                this.target.getComponent("character").isSellding = true;
            }
            else if (other.node.name == "ke") {
                this.gamePlay.addWoodFromKe();
            }
        }
        // else if()
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        if (other.node.name == "ke" && this.gamePlay.isTranske == false) {
            this.gamePlay.offWoodFromKe();
            // this.node.getComponent("character").isSellding=true
        }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        // if (self.getComponent(this.className) && other.getComponent(TL)) {
        //     this.node.getComponent("character").removeEnemy(other.node._id)
        // }
        if (this.target.getComponent("character").isSub == false) {
            if (other.node.name == "sellToCus") {
                this.target.getComponent("character").isSellding = false;
                other.node.parent.children[1].color = cc.Color.WHITE;
            }
            if (other.node.name == "ke") {
                this.gamePlay.offWoodFromKe();
                // this.node.getComponent("character").isSellding=true
            }
            if (other.node.name == "sellToCus") {
                this.gamePlay.offSell();
            }
            if (other.node.name == "arenaSell1") {
                this.gamePlay.offSellMone();
            }
            if (other.node.name == "arenaSell3") {
                this.gamePlay.offSellMone3(3);
            }
            if (other.node.name == "arenaSell4") {
                this.gamePlay.offSellMone3(4);
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdGVuZXJcXHJhbmdlTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1R0M7UUFyR0csWUFBTSxHQUFZLElBQUksQ0FBQTtRQUl0QixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVEsR0FBRyxJQUFJLENBQUE7O0lBZ0duQixDQUFDO0lBcEdHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBR3hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUN0RCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7aUJBRTFCO3FCQUNJO29CQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxD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OiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRMIGZyb20gXCIuL3RyZWVMaXN0ZW5lclwiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBjbGFzc05hbWUgPSBudWxsO1xyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSB0aGlzW1wiX19jbGFzc25hbWVfX1wiXTtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiSUNZXzE5XCIpXHJcbiAgICB9XHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlzU3ViID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJhcmVuYVNlbGwxXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQbGF5LmNvdW50TW9uZXlCYWcgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5nZXRTZWxsKClcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0VWRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5saXN0QXJyb3cuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmFycm93Tm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwiYXJlbmFTZWxsM1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5jb3VudE1vbmV5QmFnID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuZ2V0U2VsbDMoMylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuY2hhci5nZXRDaGlsZEJ5TmFtZShcInRleHRVZFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RBcnJvdy5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyb3dOb2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUubmFtZSA9PSBcImFyZW5hU2VsbDRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuY291bnRNb25leUJhZyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmdldFNlbGwzKDQpXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jaGFyLmdldENoaWxkQnlOYW1lKFwidGV4dFVkXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubGlzdEFycm93LmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5hcnJvd05vZGUuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3RoZXIubm9kZS5uYW1lID09IFwic2VsbFRvQ3VzXCIpIHtcclxuICAgICAgICAgICAgICAgIG90aGVyLm5vZGUucGFyZW50LmNoaWxkcmVuWzFdLmNvbG9yID0gY2MuQ29sb3IuR1JFRU5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc2VsbFRvQ3VzMigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNTZWxsZGluZyA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJrZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmFkZFdvb2RGcm9tS2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlbHNlIGlmKClcclxuXHJcbiAgICB9XHJcbiAgICBvbkNvbGxpc2lvblN0YXkob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwia2VcIiAmJiB0aGlzLmdhbWVQbGF5LmlzVHJhbnNrZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lm9mZldvb2RGcm9tS2UoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlzU2VsbGRpbmc9dHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQ29sbGlzaW9uRXhpdChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIC8vIGlmIChzZWxmLmdldENvbXBvbmVudCh0aGlzLmNsYXNzTmFtZSkgJiYgb3RoZXIuZ2V0Q29tcG9uZW50KFRMKSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLnJlbW92ZUVuZW15KG90aGVyLm5vZGUuX2lkKVxyXG5cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlzU3ViID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJzZWxsVG9DdXNcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlzU2VsbGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5wYXJlbnQuY2hpbGRyZW5bMV0uY29sb3IgPSBjYy5Db2xvci5XSElURVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwia2VcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5vZmZXb29kRnJvbUtlKClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNTZWxsZGluZz10cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUubmFtZSA9PSBcInNlbGxUb0N1c1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lm9mZlNlbGwoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJhcmVuYVNlbGwxXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkub2ZmU2VsbE1vbmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJhcmVuYVNlbGwzXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkub2ZmU2VsbE1vbmUzKDMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUubmFtZSA9PSBcImFyZW5hU2VsbDRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5vZmZTZWxsTW9uZTMoNClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=