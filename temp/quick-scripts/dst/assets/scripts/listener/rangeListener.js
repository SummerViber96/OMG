
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xpc3RlbmVyL3JhbmdlTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1R0M7UUFyR0csWUFBTSxHQUFZLElBQUksQ0FBQTtRQUl0QixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVEsR0FBRyxJQUFJLENBQUE7O0lBZ0duQixDQUFDO0lBcEdHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBR3hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUN0RCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7aUJBRTFCO3FCQUNJO29CQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRMIGZyb20gXCIuL3RyZWVMaXN0ZW5lclwiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbFxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIGNsYXNzTmFtZSA9IG51bGw7XG4gICAgZ2FtZVBsYXkgPSBudWxsXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IHRoaXNbXCJfX2NsYXNzbmFtZV9fXCJdO1xuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiSUNZXzE5XCIpXG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcblxuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNTdWIgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJhcmVuYVNlbGwxXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5jb3VudE1vbmV5QmFnID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmdldFNlbGwoKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0VWRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubGlzdEFycm93LmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyb3dOb2RlLmFjdGl2ZSA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwiYXJlbmFTZWxsM1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuY291bnRNb25leUJhZyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5nZXRTZWxsMygzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jaGFyLmdldENoaWxkQnlOYW1lKFwidGV4dFVkXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RBcnJvdy5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmFycm93Tm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJhcmVuYVNlbGw0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5jb3VudE1vbmV5QmFnID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmdldFNlbGwzKDQpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuY2hhci5nZXRDaGlsZEJ5TmFtZShcInRleHRVZFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5saXN0QXJyb3cuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5hcnJvd05vZGUuYWN0aXZlID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG90aGVyLm5vZGUubmFtZSA9PSBcInNlbGxUb0N1c1wiKSB7XG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5wYXJlbnQuY2hpbGRyZW5bMV0uY29sb3IgPSBjYy5Db2xvci5HUkVFTlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc2VsbFRvQ3VzMigpXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlzU2VsbGRpbmcgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJrZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5hZGRXb29kRnJvbUtlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsc2UgaWYoKVxuXG4gICAgfVxuICAgIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwia2VcIiAmJiB0aGlzLmdhbWVQbGF5LmlzVHJhbnNrZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5vZmZXb29kRnJvbUtlKClcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNTZWxsZGluZz10cnVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XG4gICAgICAgIC8vIGlmIChzZWxmLmdldENvbXBvbmVudCh0aGlzLmNsYXNzTmFtZSkgJiYgb3RoZXIuZ2V0Q29tcG9uZW50KFRMKSkge1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5yZW1vdmVFbmVteShvdGhlci5ub2RlLl9pZClcblxuICAgICAgICAvLyB9XG5cblxuICAgICAgICBpZiAodGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KFwiY2hhcmFjdGVyXCIpLmlzU3ViID09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwic2VsbFRvQ3VzXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoXCJjaGFyYWN0ZXJcIikuaXNTZWxsZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5wYXJlbnQuY2hpbGRyZW5bMV0uY29sb3IgPSBjYy5Db2xvci5XSElURVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwia2VcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkub2ZmV29vZEZyb21LZSgpXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChcImNoYXJhY3RlclwiKS5pc1NlbGxkaW5nPXRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJzZWxsVG9DdXNcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkub2ZmU2VsbCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwiYXJlbmFTZWxsMVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5vZmZTZWxsTW9uZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwiYXJlbmFTZWxsM1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5vZmZTZWxsTW9uZTMoMylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJhcmVuYVNlbGw0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lm9mZlNlbGxNb25lMyg0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuIl19