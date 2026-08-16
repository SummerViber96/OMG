
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/KF_2/Customer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79c036ZbNxFR4mlo5wBrrpN', 'Customer');
// scripts/KF_2/Customer.ts

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
var GamePlay_1 = require("./GamePlay");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bodySkeletonAnimation = null;
        _this.bapNgoPrefab = null;
        _this.quaCachuaPrefab = null;
        _this.postQueue = cc.v3(0, 0, 0);
        _this.numLabel = null;
        _this.gamePlay = null;
        _this.numCarry = 0;
        _this.isMove = false;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent(GamePlay_1.default);
    };
    NewClass.prototype.getItem = function (name) {
        this.numCarry++;
        this.bodySkeletonAnimation.play('Idle 2');
        var itemNode = null;
        if (name == 'traicachua')
            itemNode = cc.instantiate(this.quaCachuaPrefab);
        if (name == 'traingo')
            itemNode = cc.instantiate(this.bapNgoPrefab);
        if (itemNode == null)
            return;
        itemNode.setPosition(cc.v3(0, 0.5 + (this.numCarry) * 0.2, 0.3));
        this.node.addChild(itemNode);
        this.numLabel.string = this.numCarry + "/12";
        cc.audioEngine.play(this.gamePlay.getItemSound, false, 1);
        if (this.numCarry == 12) {
            this.gamePlay.countCustomer++;
            if (this.gamePlay.countCustomer == 4) {
                this.gamePlay.arrowTinhTien.active = true;
                this.gamePlay.arrowKe.active = false;
            }
            this.move();
        }
    };
    NewClass.prototype.move = function () {
        if (this.isMove)
            return;
        this.isMove = true;
        // this.numLabel.node.parent.destroy();
        // cc.tween(this.node).to(0.25, { eulerAngles: cc.v3(0, -180, 0) }).call(() => {
        //     this.bodySkeletonAnimation.play('Run 2');
        // }).to(0.5, { position: cc.v3(this.node.x, 0, this.postQueue.z) }).to(0.25, { eulerAngles: cc.v3(0, -90, 0) }).to(2, { position: this.postQueue }).call(() => {
        //     this.bodySkeletonAnimation.play('Idle 2');
        // }).to(0.25, { eulerAngles: cc.v3(0, 0, 0) }).start();
        this.bodySkeletonAnimation.play('Walk');
    };
    NewClass.prototype.down = function () {
        this.isMove = false;
        this.bodySkeletonAnimation.node.rotationY = 90;
        this.bodySkeletonAnimation.play('Idle 2');
    };
    __decorate([
        property(cc.SkeletonAnimation)
    ], NewClass.prototype, "bodySkeletonAnimation", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bapNgoPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "quaCachuaPrefab", void 0);
    __decorate([
        property(cc.Vec3)
    ], NewClass.prototype, "postQueue", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "numLabel", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcQ3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsdUNBQWlDO0FBRWpDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUVDO1FBcEVHLDJCQUFxQixHQUF5QixJQUFJLENBQUM7UUFHbkQsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsZUFBUyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUdwQyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUViLFlBQU0sR0FBRyxLQUFLLENBQUM7O1FBaURmLGlCQUFpQjtJQUNyQixDQUFDO0lBaERHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksSUFBSSxJQUFJLFlBQVk7WUFBRSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUUsSUFBSSxJQUFJLElBQUksU0FBUztZQUFFLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRSxJQUFJLFFBQVEsSUFBSSxJQUFJO1lBQUUsT0FBTTtRQUM1QixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsUUFBUSxRQUFLLENBQUM7UUFDN0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQix1Q0FBdUM7UUFDdkMsZ0ZBQWdGO1FBQ2hGLGdEQUFnRDtRQUNoRCxpS0FBaUs7UUFDakssaURBQWlEO1FBQ2pELHdEQUF3RDtRQUN4RCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQzlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFOUMsQ0FBQztJQWpFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUM7MkRBQ29CO0lBR25EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ1c7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNrQjtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBZlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVFNUI7SUFBRCxlQUFDO0NBdkVELEFBdUVDLENBdkVxQyxFQUFFLENBQUMsU0FBUyxHQXVFakQ7a0JBdkVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgR2FtZVBsYXkgZnJvbSAnLi9HYW1lUGxheSdcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU2tlbGV0b25BbmltYXRpb24pXG4gICAgYm9keVNrZWxldG9uQW5pbWF0aW9uOiBjYy5Ta2VsZXRvbkFuaW1hdGlvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJhcE5nb1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcXVhQ2FjaHVhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlZlYzMpXG4gICAgcG9zdFF1ZXVlOiBjYy5WZWMzID0gY2MudjMoMCwgMCwgMCk7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbnVtTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIGdhbWVQbGF5ID0gbnVsbDtcblxuICAgIG51bUNhcnJ5ID0gMDtcblxuICAgIGlzTW92ZSA9IGZhbHNlO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVQbGF5KTtcbiAgICB9XG5cbiAgICBnZXRJdGVtKG5hbWUpIHtcbiAgICAgICAgdGhpcy5udW1DYXJyeSsrO1xuICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KCdJZGxlIDInKTtcbiAgICAgICAgbGV0IGl0ZW1Ob2RlID0gbnVsbDtcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3RyYWljYWNodWEnKSBpdGVtTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucXVhQ2FjaHVhUHJlZmFiKTtcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3RyYWluZ28nKSBpdGVtTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFwTmdvUHJlZmFiKTtcbiAgICAgICAgaWYgKGl0ZW1Ob2RlID09IG51bGwpIHJldHVyblxuICAgICAgICBpdGVtTm9kZS5zZXRQb3NpdGlvbihjYy52MygwLCAwLjUgKyAodGhpcy5udW1DYXJyeSkgKiAwLjIsIDAuMykpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaXRlbU5vZGUpO1xuICAgICAgICB0aGlzLm51bUxhYmVsLnN0cmluZyA9IGAke3RoaXMubnVtQ2Fycnl9LzEyYDtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LmdldEl0ZW1Tb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgICBpZiAodGhpcy5udW1DYXJyeSA9PSAxMikge1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jb3VudEN1c3RvbWVyKys7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5jb3VudEN1c3RvbWVyID09IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmFycm93VGluaFRpZW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmFycm93S2UuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW92ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMubnVtTGFiZWwubm9kZS5wYXJlbnQuZGVzdHJveSgpO1xuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMjUsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIC0xODAsIDApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheSgnUnVuIDInKTtcbiAgICAgICAgLy8gfSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLm5vZGUueCwgMCwgdGhpcy5wb3N0UXVldWUueikgfSkudG8oMC4yNSwgeyBldWxlckFuZ2xlczogY2MudjMoMCwgLTkwLCAwKSB9KS50bygyLCB7IHBvc2l0aW9uOiB0aGlzLnBvc3RRdWV1ZSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLnBsYXkoJ0lkbGUgMicpO1xuICAgICAgICAvLyB9KS50bygwLjI1LCB7IGV1bGVyQW5nbGVzOiBjYy52MygwLCAwLCAwKSB9KS5zdGFydCgpO1xuICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KCdXYWxrJyk7XG4gICAgfVxuICAgIGRvd24oKSB7XG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLm5vZGUucm90YXRpb25ZID0gOTBcbiAgICAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheSgnSWRsZSAyJyk7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19