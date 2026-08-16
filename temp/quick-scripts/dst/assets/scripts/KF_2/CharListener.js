
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/KF_2/CharListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d757lSmdhEH6OcUwLFBN6u', 'CharListener');
// scripts/KF_2/CharListener.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Char_1 = require("./Char");
var MR_4_1 = require("./MR_4");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var collider = this.getComponent(cc.BoxCollider3D);
        collider.on('trigger-enter', this.onTrigger, this);
    };
    NewClass.prototype.onTrigger = function (event) {
        var charComp = this.node.getComponent(Char_1.default);
        var gameComp = this.node.parent.parent.getComponent(MR_4_1.default);
        var otherNode = event.otherCollider.node;
        console.log("event", event, otherNode.name);
        var selfNode = event.selfCollider.node;
        if (otherNode.name !== selfNode.name && selfNode.name == 'char') {
            // if ((otherNode.name == 'cayngo' || otherNode.name == 'caycachua') && charComp.numCarry < 24) {
            //     otherNode.children[2].destroy();
            //     otherNode.getComponent(cc.BoxCollider3D).enabled = false;
            //     charComp.addItem(otherNode.name);
            // }
        }
        if (otherNode.name !== selfNode.name && selfNode.name == 'nv' && otherNode.name == 'IconGetBanhMif') {
            charComp.addBanhMi();
            gameComp.listArrow.children[0].active = false;
            gameComp.listArrow.children[1].active = true;
        }
        else if (otherNode.name !== selfNode.name && selfNode.name == 'nv' && otherNode.name == 'unlockNode') {
            console.log("step2", gameComp.countMoney);
            if (gameComp.countMoney < 50) {
                gameComp.char.parent.getChildByName("text").getComponent(cc.Animation).play();
            }
            else {
                gameComp.stepEnd();
            }
        }
        else if (otherNode.name !== selfNode.name && selfNode.name == 'nv' && otherNode.name == 'areaSell') {
            if (charComp.isBanhMi) {
                gameComp.getMoney();
                gameComp.listArrow.children[1].active = false;
                gameComp.listArrow.children[0].active = true;
            }
        }
        // if (otherNode.name !== selfNode.name && selfNode.name == 'char' && otherNode.name == 'banthungan') {
        //     if(cc.Canvas.instance.node.getComponent(GamePlay).countCustomer == 4) {
        //         cc.Canvas.instance.node.getComponent(GamePlay).endGame();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcQ2hhckxpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLCtCQUEwQjtBQUMxQiwrQkFBNkI7QUFFN0I7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBMERBLENBQUM7SUF4REcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsNEJBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLFFBQVEsR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQVEsQ0FBQyxDQUFBO1FBQzVELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFekMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFFdkMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDN0QsaUdBQWlHO1lBQ2pHLHVDQUF1QztZQUN2QyxnRUFBZ0U7WUFDaEUsd0NBQXdDO1lBQ3hDLElBQUk7U0FDUDtRQUNELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksZ0JBQWdCLEVBQUU7WUFDakcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ3BCLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7WUFDNUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztTQUM5QzthQUNJLElBQUcsU0FBUyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO1lBQ2pHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN4QyxJQUFHLFFBQVEsQ0FBQyxVQUFVLEdBQUMsRUFBRSxFQUFDO2dCQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUNoRjtpQkFDRztnQkFDQSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7YUFFckI7U0FDSjthQUNJLElBQUcsU0FBUyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO1lBQy9GLElBQUcsUUFBUSxDQUFDLFFBQVEsRUFBQztnQkFDakIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNuQixRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO2dCQUM1QyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO2FBRzlDO1NBQ0o7UUFDRCx1R0FBdUc7UUFDdkcsOEVBQThFO1FBQzlFLG9FQUFvRTtRQUVwRSxRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUF2RGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRDVCO0lBQUQsZUFBQztDQTFERCxBQTBEQyxDQTFEcUMsRUFBRSxDQUFDLFNBQVMsR0EwRGpEO2tCQTFEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IENoYXIgZnJvbSAnLi9DaGFyJztcbmltcG9ydCBHYW1lUGxheSBmcm9tICcuL01SXzQnXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcjNEKTtcbiAgICAgICAgY29sbGlkZXIub24oJ3RyaWdnZXItZW50ZXInLCB0aGlzLm9uVHJpZ2dlciwgdGhpcyk7XG4gICAgfVxuICAgIG9uVHJpZ2dlcihldmVudCkge1xuICAgICAgICBsZXQgY2hhckNvbXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENoYXIpO1xuICAgICAgICBsZXQgZ2FtZUNvbXA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50LmdldENvbXBvbmVudChHYW1lUGxheSlcbiAgICAgICAgbGV0IG90aGVyTm9kZSA9IGV2ZW50Lm90aGVyQ29sbGlkZXIubm9kZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJldmVudFwiLGV2ZW50LG90aGVyTm9kZS5uYW1lKVxuXG4gICAgICAgIGxldCBzZWxmTm9kZSA9IGV2ZW50LnNlbGZDb2xsaWRlci5ub2RlO1xuXG4gICAgICAgIGlmIChvdGhlck5vZGUubmFtZSAhPT0gc2VsZk5vZGUubmFtZSAmJiBzZWxmTm9kZS5uYW1lID09ICdjaGFyJykge1xuICAgICAgICAgICAgLy8gaWYgKChvdGhlck5vZGUubmFtZSA9PSAnY2F5bmdvJyB8fCBvdGhlck5vZGUubmFtZSA9PSAnY2F5Y2FjaHVhJykgJiYgY2hhckNvbXAubnVtQ2FycnkgPCAyNCkge1xuICAgICAgICAgICAgLy8gICAgIG90aGVyTm9kZS5jaGlsZHJlblsyXS5kZXN0cm95KCk7XG4gICAgICAgICAgICAvLyAgICAgb3RoZXJOb2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcjNEKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgY2hhckNvbXAuYWRkSXRlbShvdGhlck5vZGUubmFtZSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyTm9kZS5uYW1lICE9PSBzZWxmTm9kZS5uYW1lICYmIHNlbGZOb2RlLm5hbWUgPT0gJ252JyAmJiBvdGhlck5vZGUubmFtZSA9PSAnSWNvbkdldEJhbmhNaWYnKSB7XG4gICAgICAgICAgICBjaGFyQ29tcC5hZGRCYW5oTWkoKVxuICAgICAgICAgICAgZ2FtZUNvbXAubGlzdEFycm93LmNoaWxkcmVuWzBdLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgICAgIGdhbWVDb21wLmxpc3RBcnJvdy5jaGlsZHJlblsxXS5hY3RpdmU9dHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG90aGVyTm9kZS5uYW1lICE9PSBzZWxmTm9kZS5uYW1lICYmIHNlbGZOb2RlLm5hbWUgPT0gJ252JyAmJiBvdGhlck5vZGUubmFtZSA9PSAndW5sb2NrTm9kZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RlcDJcIixnYW1lQ29tcC5jb3VudE1vbmV5KVxuICAgICAgICAgICAgaWYoZ2FtZUNvbXAuY291bnRNb25leTw1MCl7XG4gICAgICAgICAgICAgICAgZ2FtZUNvbXAuY2hhci5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBnYW1lQ29tcC5zdGVwRW5kKClcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYob3RoZXJOb2RlLm5hbWUgIT09IHNlbGZOb2RlLm5hbWUgJiYgc2VsZk5vZGUubmFtZSA9PSAnbnYnICYmIG90aGVyTm9kZS5uYW1lID09ICdhcmVhU2VsbCcpIHtcbiAgICAgICAgICAgIGlmKGNoYXJDb21wLmlzQmFuaE1pKXtcbiAgICAgICAgICAgICAgICBnYW1lQ29tcC5nZXRNb25leSgpXG4gICAgICAgICAgICAgICAgZ2FtZUNvbXAubGlzdEFycm93LmNoaWxkcmVuWzFdLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgICAgICAgICBnYW1lQ29tcC5saXN0QXJyb3cuY2hpbGRyZW5bMF0uYWN0aXZlPXRydWU7XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIChvdGhlck5vZGUubmFtZSAhPT0gc2VsZk5vZGUubmFtZSAmJiBzZWxmTm9kZS5uYW1lID09ICdjaGFyJyAmJiBvdGhlck5vZGUubmFtZSA9PSAnYmFudGh1bmdhbicpIHtcbiAgICAgICAgLy8gICAgIGlmKGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChHYW1lUGxheSkuY291bnRDdXN0b21lciA9PSA0KSB7XG4gICAgICAgIC8vICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVQbGF5KS5lbmRHYW1lKCk7XG5cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=