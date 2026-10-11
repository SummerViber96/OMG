
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcQ2hhckxpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLCtCQUEwQjtBQUMxQiwrQkFBNkI7QUFFN0I7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBMERBLENBQUM7SUF4REcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsNEJBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLFFBQVEsR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQVEsQ0FBQyxDQUFBO1FBQzVELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFekMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFFdkMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDN0QsaUdBQWlHO1lBQ2pHLHVDQUF1QztZQUN2QyxnRUFBZ0U7WUFDaEUsd0NBQXdDO1lBQ3hDLElBQUk7U0FDUDtRQUNELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksZ0JBQWdCLEVBQUU7WUFDakcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ3BCLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7WUFDNUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztTQUM5QzthQUNJLElBQUcsU0FBUyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO1lBQ2pHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN4QyxJQUFHLFFBQVEsQ0FBQyxVQUFVLEdBQUMsRUFBRSxFQUFDO2dCQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUNoRjtpQkFDRztnQkFDQSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7YUFFckI7U0FDSjthQUNJLElBQUcsU0FBUyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO1lBQy9GLElBQUcsUUFBUSxDQUFDLFFBQVEsRUFBQztnQkFDakIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNuQixRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO2dCQUM1QyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO2FBRzlDO1NBQ0o7UUFDRCx1R0FBdUc7UUFDdkcsOEVBQThFO1FBQzlFLG9FQUFvRTtRQUVwRSxRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUF2RGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRDVCO0lBQUQsZUFBQztDQTFERCxBQTBEQyxDQTFEcUMsRUFBRSxDQUFDLFNBQVMsR0EwRGpEO2tCQTFEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBDaGFyIGZyb20gJy4vQ2hhcic7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tICcuL01SXzQnXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcjNEKTtcclxuICAgICAgICBjb2xsaWRlci5vbigndHJpZ2dlci1lbnRlcicsIHRoaXMub25UcmlnZ2VyLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uVHJpZ2dlcihldmVudCkge1xyXG4gICAgICAgIGxldCBjaGFyQ29tcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ2hhcik7XHJcbiAgICAgICAgbGV0IGdhbWVDb21wPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoR2FtZVBsYXkpXHJcbiAgICAgICAgbGV0IG90aGVyTm9kZSA9IGV2ZW50Lm90aGVyQ29sbGlkZXIubm9kZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIsZXZlbnQsb3RoZXJOb2RlLm5hbWUpXHJcblxyXG4gICAgICAgIGxldCBzZWxmTm9kZSA9IGV2ZW50LnNlbGZDb2xsaWRlci5ub2RlO1xyXG5cclxuICAgICAgICBpZiAob3RoZXJOb2RlLm5hbWUgIT09IHNlbGZOb2RlLm5hbWUgJiYgc2VsZk5vZGUubmFtZSA9PSAnY2hhcicpIHtcclxuICAgICAgICAgICAgLy8gaWYgKChvdGhlck5vZGUubmFtZSA9PSAnY2F5bmdvJyB8fCBvdGhlck5vZGUubmFtZSA9PSAnY2F5Y2FjaHVhJykgJiYgY2hhckNvbXAubnVtQ2FycnkgPCAyNCkge1xyXG4gICAgICAgICAgICAvLyAgICAgb3RoZXJOb2RlLmNoaWxkcmVuWzJdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gICAgIG90aGVyTm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIzRCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgY2hhckNvbXAuYWRkSXRlbShvdGhlck5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG90aGVyTm9kZS5uYW1lICE9PSBzZWxmTm9kZS5uYW1lICYmIHNlbGZOb2RlLm5hbWUgPT0gJ252JyAmJiBvdGhlck5vZGUubmFtZSA9PSAnSWNvbkdldEJhbmhNaWYnKSB7XHJcbiAgICAgICAgICAgIGNoYXJDb21wLmFkZEJhbmhNaSgpXHJcbiAgICAgICAgICAgIGdhbWVDb21wLmxpc3RBcnJvdy5jaGlsZHJlblswXS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIGdhbWVDb21wLmxpc3RBcnJvdy5jaGlsZHJlblsxXS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihvdGhlck5vZGUubmFtZSAhPT0gc2VsZk5vZGUubmFtZSAmJiBzZWxmTm9kZS5uYW1lID09ICdudicgJiYgb3RoZXJOb2RlLm5hbWUgPT0gJ3VubG9ja05vZGUnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RlcDJcIixnYW1lQ29tcC5jb3VudE1vbmV5KVxyXG4gICAgICAgICAgICBpZihnYW1lQ29tcC5jb3VudE1vbmV5PDUwKXtcclxuICAgICAgICAgICAgICAgIGdhbWVDb21wLmNoYXIucGFyZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZ2FtZUNvbXAuc3RlcEVuZCgpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYob3RoZXJOb2RlLm5hbWUgIT09IHNlbGZOb2RlLm5hbWUgJiYgc2VsZk5vZGUubmFtZSA9PSAnbnYnICYmIG90aGVyTm9kZS5uYW1lID09ICdhcmVhU2VsbCcpIHtcclxuICAgICAgICAgICAgaWYoY2hhckNvbXAuaXNCYW5oTWkpe1xyXG4gICAgICAgICAgICAgICAgZ2FtZUNvbXAuZ2V0TW9uZXkoKVxyXG4gICAgICAgICAgICAgICAgZ2FtZUNvbXAubGlzdEFycm93LmNoaWxkcmVuWzFdLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGdhbWVDb21wLmxpc3RBcnJvdy5jaGlsZHJlblswXS5hY3RpdmU9dHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIChvdGhlck5vZGUubmFtZSAhPT0gc2VsZk5vZGUubmFtZSAmJiBzZWxmTm9kZS5uYW1lID09ICdjaGFyJyAmJiBvdGhlck5vZGUubmFtZSA9PSAnYmFudGh1bmdhbicpIHtcclxuICAgICAgICAvLyAgICAgaWYoY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVQbGF5KS5jb3VudEN1c3RvbWVyID09IDQpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChHYW1lUGxheSkuZW5kR2FtZSgpO1xyXG5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==