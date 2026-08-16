
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/KF_2/Char');
require('./assets/scripts/KF_2/CharListener');
require('./assets/scripts/KF_2/Customer');
require('./assets/scripts/KF_2/GamePlay');
require('./assets/scripts/KF_2/JoyStick');
require('./assets/scripts/KF_2/MR_4');
require('./assets/scripts/KF_2/anim');
require('./assets/scripts/MR_23');
require('./assets/scripts/MR_Decor');
require('./assets/scripts/banGhe');
require('./assets/scripts/common/AdManager');
require('./assets/scripts/common/PlatformBrandIcon');
require('./assets/scripts/common/PlayAudio');
require('./assets/scripts/cus');
require('./assets/scripts/game');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/cus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e525d7/c0xMU6paoZdPdViG', 'cus');
// scripts/cus.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.bodySkeletonAnimation = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        if (this.text == "cus1") {
            this.move2();
        }
        if (this.text == "cus2") {
            this.move3();
        }
    };
    NewClass.prototype.move1 = function () {
        var localpos = cc.v3(-158.925, -476.293, -323.197);
        cc.tween(this.node).repeatForever(cc.tween().set({ position: localpos }).to(2, { position: cc.v3(182.095, -307.578, -323.197) }).set({
            eulerAngles: cc.v3(36.17, -18.831, -10.952)
        }).to(2, { position: localpos })).start();
    };
    NewClass.prototype.move2 = function () {
        var _this = this;
        cc.tween(this.node).repeatForever(cc.tween().set({ position: cc.v3(212.364, -37.176, -22.255), eulerAngles: cc.v3(-45.719, 150.973, 34.681) }).call(function () {
            _this.idle();
        }).delay(1).call(function () {
            _this.move();
        }).set({ eulerAngles: cc.v3(48.32, 24.186, 30.298) }).to(1, { position: cc.v3(71, 51.922, -66.093) }).set({ eulerAngles: cc.v3(-45.719, 150.973, 34.681) }).call(function () {
            _this.idle();
        }).delay(1).call(function () {
            _this.move();
        }).set({
            eulerAngles: cc.v3(-48.997, -157.182, -28.947)
        }).to(1, { position: cc.v3(212.364, -37.176, -22.255) })).start();
    };
    NewClass.prototype.move3 = function () {
        var _this = this;
        cc.tween(this.node).repeatForever(cc.tween().set({ position: cc.v3(-372.014, -166.079, -522.447), eulerAngles: cc.v3(-36.583, 141.755, 18.391) }).call(function () {
            _this.idle();
        }).delay(1).call(function () {
            _this.move();
        }).set({ eulerAngles: cc.v3(-36.583, 141.755, 18.391) }).to(1, { position: cc.v3(-276.049, -104.472, -522.447) }).set({ eulerAngles: cc.v3(-45.719, 150.973, 34.681) }).call(function () {
            _this.idle();
        }).delay(1).call(function () {
            _this.move();
        }).set({
            eulerAngles: cc.v3(38.179, -32.567, -14.223)
        }).to(1, { position: cc.v3(-372.014, -166.079, -522.447) })).start();
    };
    NewClass.prototype.move = function () {
        this.bodySkeletonAnimation.play('Walk');
    };
    NewClass.prototype.idle = function () {
        this.bodySkeletonAnimation.play('Idle 1');
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.SkeletonAnimation)
    ], NewClass.prototype, "bodySkeletonAnimation", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTswQ0FDYztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUM7MkRBQ29CO0lBUmxDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1RTVCO0lBQUQsZUFBQztDQXZFRCxBQXVFQyxDQXZFcUMsRUFBRSxDQUFDLFNBQVMsR0F1RWpEO2tCQXZFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuICAgIEBwcm9wZXJ0eShjYy5Ta2VsZXRvbkFuaW1hdGlvbilcbiAgICBib2R5U2tlbGV0b25BbmltYXRpb246IGNjLlNrZWxldG9uQW5pbWF0aW9uID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dCA9PSBcImN1czFcIikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlMigpXG5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50ZXh0ID09IFwiY3VzMlwiKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUzKClcblxuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmUxKCkge1xuICAgICAgICBsZXQgbG9jYWxwb3MgPSBjYy52MygtMTU4LjkyNSwgLTQ3Ni4yOTMsIC0zMjMuMTk3KVxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICBjYy50d2VlbigpLnNldCh7IHBvc2l0aW9uOiBsb2NhbHBvcyB9KS50bygyLCB7IHBvc2l0aW9uOiBjYy52MygxODIuMDk1LCAtMzA3LjU3OCwgLTMyMy4xOTcpIH0pLnNldCh7XG4gICAgICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGNjLnYzKDM2LjE3LCAtMTguODMxLCAtMTAuOTUyKVxuICAgICAgICAgICAgfSkudG8oMiwgeyBwb3NpdGlvbjogbG9jYWxwb3MgfSlcbiAgICAgICAgKS5zdGFydCgpXG4gICAgfVxuICAgIG1vdmUyKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICBjYy50d2VlbigpLnNldCh7IHBvc2l0aW9uOiBjYy52MygyMTIuMzY0LCAtMzcuMTc2LCAtMjIuMjU1KSwgZXVsZXJBbmdsZXM6IGNjLnYzKC00NS43MTksIDE1MC45NzMsIDM0LjY4MSkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlKClcbiAgICAgICAgICAgIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZSgpXG4gICAgICAgICAgICB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoNDguMzIsIDI0LjE4NiwgMzAuMjk4KSB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52Myg3MSwgNTEuOTIyLCAtNjYuMDkzKSB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTQ1LjcxOSwgMTUwLjk3MywgMzQuNjgxKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGUoKVxuICAgICAgICAgICAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKClcbiAgICAgICAgICAgIH0pLnNldCh7XG4gICAgICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGNjLnYzKC00OC45OTcsIC0xNTcuMTgyLCAtMjguOTQ3KVxuICAgICAgICAgICAgfSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMjEyLjM2NCwgLTM3LjE3NiwgLTIyLjI1NSkgfSlcbiAgICAgICAgKS5zdGFydCgpXG4gICAgfVxuICAgIG1vdmUzKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICBjYy50d2VlbigpLnNldCh7IHBvc2l0aW9uOiBjYy52MygtMzcyLjAxNCwgLTE2Ni4wNzksIC01MjIuNDQ3KSwgZXVsZXJBbmdsZXM6IGNjLnYzKC0zNi41ODMsIDE0MS43NTUsIDE4LjM5MSkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlKClcbiAgICAgICAgICAgIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZSgpXG4gICAgICAgICAgICB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTM2LjU4MywgMTQxLjc1NSwgMTguMzkxKSB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMjc2LjA0OSwgLTEwNC40NzIsIC01MjIuNDQ3KSB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTQ1LjcxOSwgMTUwLjk3MywgMzQuNjgxKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGUoKVxuICAgICAgICAgICAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKClcbiAgICAgICAgICAgIH0pLnNldCh7XG4gICAgICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGNjLnYzKDM4LjE3OSwgLTMyLjU2NywgLTE0LjIyMylcbiAgICAgICAgICAgIH0pLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0zNzIuMDE0LCAtMTY2LjA3OSwgLTUyMi40NDcpIH0pXG4gICAgICAgICkuc3RhcnQoKVxuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KCdXYWxrJyk7XG5cbiAgICB9XG4gICAgaWRsZSgpIHtcbiAgICAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheSgnSWRsZSAxJyk7XG5cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/PlatformBrandIcon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1aebTC/s9JN7qL7y4mT76t', 'PlatformBrandIcon');
// scripts/common/PlatformBrandIcon.ts

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
var PlatformBrandIcon = /** @class */ (function (_super) {
    __extends(PlatformBrandIcon, _super);
    function PlatformBrandIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.androidIcon = null;
        _this.iosIcon = null;
        return _this;
        // update (dt) {}
    }
    PlatformBrandIcon.prototype.start = function () {
        //this.getComponent(cc.Sprite).spriteFrame = this.iosIcon;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            this.getComponent(cc.Sprite).spriteFrame = this.androidIcon;
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            this.getComponent(cc.Sprite).spriteFrame = this.iosIcon;
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], PlatformBrandIcon.prototype, "androidIcon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PlatformBrandIcon.prototype, "iosIcon", void 0);
    PlatformBrandIcon = __decorate([
        ccclass
    ], PlatformBrandIcon);
    return PlatformBrandIcon;
}(cc.Component));
exports.default = PlatformBrandIcon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxQbGF0Zm9ybUJyYW5kSWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQW1CQztRQWhCRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFHbkMsYUFBTyxHQUFtQixJQUFJLENBQUM7O1FBWS9CLGlCQUFpQjtJQUNyQixDQUFDO0lBWEcsaUNBQUssR0FBTDtRQUNJLDBEQUEwRDtRQUMxRCxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQy9EO2FBQ0ksSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzBEQUNVO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ007SUFOZCxpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQW1CckM7SUFBRCx3QkFBQztDQW5CRCxBQW1CQyxDQW5COEMsRUFBRSxDQUFDLFNBQVMsR0FtQjFEO2tCQW5Cb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUJyYW5kSWNvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgYW5kcm9pZEljb246IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBpb3NJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaW9zSWNvbjtcbiAgICAgICAgaWYoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5hbmRyb2lkSWNvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pb3NJY29uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5af46B9aLZI+LEyNB9Bzehq', 'game');
// scripts/game.ts

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
cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.video = null;
        _this.btnCollect = null;
        _this.btnFry = null;
        _this.btnServe = null;
        _this.btnClean = null;
        _this.linkToStore = null;
        _this.soundBg = null;
        _this.soundConfirm = null;
        _this.soundWin = null;
        _this.soundEfx = null;
        _this.soundGirl = null;
        _this.soundCycle = null;
        _this.textGuild = null;
        _this.textGuild2 = null;
        _this.endCard = null;
        _this.linkToStore = null;
        _this.phaohoa = null;
        _this.handGuild = null;
        _this.fillBar = null;
        _this.bar = null;
        _this.percentLabel = null;
        _this.soundEfxId = 0;
        _this.currScreenWidth = null;
        _this.isHorizontal = true;
        _this.isPlay1 = false;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        // LIFE-CYCLE CALLBACKS:
        _this.idSoundCycle = null;
        _this.idSoundGirl = null;
        _this.decaySpeed = 10;
        _this.isStop = true;
        _this.maxProgress = 100;
        _this.currentProgress = 0;
        _this.isvertical = true;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
        var _this = this;
        cc.audioEngine.play(this.soundBg, false, 1);
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.scheduleOnce(function () {
            _this.video.play();
        }, 0.2);
        this.scheduleOnce(function () {
            _this.video.stop();
            _this.btnCollect.getComponent(cc.Button).enabled = true;
            _this.btnCollect.getChildByName("hand").active = true;
            // this.textGuild2.active = true;
        }, 1.2);
        this._stopCallback = function () {
            _this.stopCycle();
        };
        // this.video.node.on('completed', this.onVideoEnd, this);
    };
    // _stopCallback=null
    NewClass.prototype.playCyle = function () {
        if (this.handGuild.active == true) {
            this.handGuild.active = false;
            this.fillBar.fillRange = 0;
            this.percentLabel.string = "0%"; // 👈 init
            this.idSoundCycle = cc.audioEngine.play(this.soundCycle, true, 1);
            this.idSoundGirl = cc.audioEngine.play(this.soundGirl, true, 1);
        }
        this.video.resume();
        cc.audioEngine.resume(this.idSoundCycle);
        cc.audioEngine.resume(this.idSoundGirl);
        this.isStop = false;
    };
    NewClass.prototype.stopCycle = function () {
        cc.audioEngine.pause(this.idSoundCycle);
        cc.audioEngine.pause(this.idSoundGirl);
        this.isStop = true;
        this.video.pause(); // hoặc pause nếu cần
    };
    NewClass.prototype.btn_cycle = function () {
        if (this.isStop) {
            this.playCyle();
        }
        this.addProgress();
        // this.textGuild.active = false;
        cc.audioEngine.play(this.soundConfirm, false, 1);
        this.unschedule(this._stopCallback);
        this.scheduleOnce(this._stopCallback, 1);
    };
    NewClass.prototype.onVideoEnd = function () {
        this.showEndcard();
    };
    NewClass.prototype.showEndcard = function () {
        this.isStop = false;
        this.linkToStore.active = true;
        console.log("endGame");
        // cc.audioEngine.play(this.soundWin, false, 1)
        // this.btnCollect.active = false
        // this.textGuild.active = false
        // this.endCard.active = true
        // this.textGuild.active = false;
        // this.btnCollect.getChildByName("hand").active = false;
        // this.textGuild2.active = false;
        // this.phaohoa.active = true
        // this.scheduleOnce(() => {
        //     this.linkToStore.active = true;
        // }, 0.5)
    };
    NewClass.prototype.addProgress = function () {
        // lực giảm dần (giống ads)
        var power = Math.max(3, 10 - this.currentProgress * 0.05);
        this.currentProgress += power;
        this.currentProgress = Math.min(this.currentProgress, this.maxProgress);
        var percent = this.currentProgress / this.maxProgress;
        // mượt
        cc.tween(this.fillBar)
            .to(1, { fillRange: percent })
            .start();
        var percentText = Math.floor(percent * 100);
        this.updatePercentLabel(percent);
        if (percent >= 1) {
            // this.onFull();
            // this.showEndcard();
        }
        if (percent > 0.8) {
            this.percentLabel.node.scale = 1.2;
        }
        if (percent > 0.5) {
            this.textGuild.children[0].getComponent(cc.Label).string = "Keep going! Almost there!";
        }
        else {
            this.textGuild.children[0].getComponent(cc.Label).string = "Can you make her fit?";
        }
    };
    NewClass.prototype.updatePercentLabel = function (targetPercent) {
        var _this = this;
        var obj = { value: parseFloat(this.percentLabel.string) || 0 };
        cc.tween(obj)
            .to(1, { value: targetPercent * 100 }, {
            progress: function (start, end, current, t) {
                var val = Math.floor(start + (end - start) * t);
                _this.percentLabel.string = val + "%";
                if (val == 90) {
                    _this.showEndcard();
                }
                return current;
            }
        })
            .start();
    };
    NewClass.prototype.onFull = function () {
        // stop mọi thứ
        this.stopCycle();
        // đảm bảo full
        this.fillBar.fillRange = 1;
        // show endcard
        this.showEndcard();
    };
    NewClass.prototype.setScreenSize = function (isHorizontal) {
        this.camera.zoomRatio = 1;
        this.node.getComponent(cc.Canvas).fitWidth = (isHorizontal) ? true : false;
        this.node.getComponent(cc.Canvas).fitHeight = (isHorizontal) ? false : true;
        // this.linkToStore.scale=(isHorizontal)?0.6
        var canvas = this.node.getComponent(cc.Canvas);
        canvas.fitHeight = (isHorizontal) ? true : false;
        canvas.fitWidth = (isHorizontal) ? false : true;
        this.textGuild.y = 405.732;
        this.bar.y = 503.311;
        this.btnCollect.scale = 1;
        this.bar.scale = 0.45;
        this.textGuild.scale = 1;
        this.video.node.scale = 6.4;
        // this.btnCollect.getComponent(cc.Widget).bottom = 62.23
        this.btnCollect.y = -507.769;
        if (isHorizontal == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // this.camera.node.position = cc.v3(-70, 0)
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                this.video.node.scale = 6.5;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
            }
        }
        else {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                this.video.node.scale = 7.4;
                // this.btnCollect.getComponent(cc.Widget).bottom = 140
                // console.log("man x")
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.72;
                this.btnCollect.scale = 0.8;
                this.btnCollect.y = -507.769 + 140;
                // this.btnCollect.getComponent(cc.Widget).bottom = 50
                this.textGuild.y = 460.895 - 140;
                this.bar.y = 550.017 - 160;
                this.textGuild.scale = 0.8;
                this.bar.scale = 0.3;
            }
        }
    };
    NewClass.prototype.responsive = function () {
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width >= deviceResolution.height) {
            this.setScreenSize(true);
            this.isvertical = false;
        }
        else if (deviceResolution.width < deviceResolution.height) {
            this.setScreenSize(false);
            this.isvertical = true;
        }
    };
    NewClass.prototype.update = function (dt) {
        this.responsive();
        if (this.isStop && this.currentProgress > 0) {
            this.currentProgress -= this.decaySpeed * dt;
            this.currentProgress = Math.max(0, this.currentProgress);
            var target = this.currentProgress / this.maxProgress;
            // lerp mượt
            this.fillBar.fillRange = cc.misc.lerp(this.fillBar.fillRange, target, 0.2);
            var percentText = Math.floor(target * 100);
            this.percentLabel.string = percentText + "%";
        }
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.VideoPlayer)
    ], NewClass.prototype, "video", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnCollect", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnFry", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnServe", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnClean", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundConfirm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEfx", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundGirl", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCycle", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textGuild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textGuild2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaohoa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handGuild", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bar", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "percentLabel", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUUxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNVQztRQXBVRyxZQUFNLEdBQWMsSUFBSSxDQUFBO1FBRXhCLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFHL0IsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsa0JBQVksR0FBYSxJQUFJLENBQUE7UUFDN0IsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFFZixxQkFBZSxHQUFHLElBQUksQ0FB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bGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuY2MubWFjcm8uRU5BQkxFX1RSQU5TUEFSRU5UX0NBTlZBUyA9IHRydWU7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlZpZGVvUGxheWVyKVxuICAgIHZpZGVvOiBjYy5WaWRlb1BsYXllciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5Db2xsZWN0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bkZyeTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5TZXJ2ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5DbGVhbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZENvbmZpcm06IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kRWZ4OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRHaXJsOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDeWNsZTogY2MuQXVkaW9DbGlwID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGV4dEd1aWxkOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRleHRHdWlsZDI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGhhb2hvYTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kR3VpbGQ6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmFyOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwZXJjZW50TGFiZWw6IGNjLkxhYmVsID0gbnVsbFxuICAgIHNvdW5kRWZ4SWQgPSAwO1xuXG4gICAgY3VyclNjcmVlbldpZHRoID0gbnVsbDtcblxuICAgIGlzSG9yaXpvbnRhbCA9IHRydWU7XG5cbiAgICBpc1BsYXkxID0gZmFsc2U7XG5cbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgaWRTb3VuZEN5Y2xlID0gbnVsbDtcbiAgICBpZFNvdW5kR2lybCA9IG51bGw7XG4gICAgZGVjYXlTcGVlZCA9IDEwXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIGZhbHNlLCAxKVxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvLnBsYXkoKTtcblxuICAgICAgICB9LCAwLjIpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8uc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5idG5Db2xsZWN0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB0aGlzLnRleHRHdWlsZDIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSwgMS4yKTtcblxuICAgICAgICB0aGlzLl9zdG9wQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3BDeWNsZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzLnZpZGVvLm5vZGUub24oJ2NvbXBsZXRlZCcsIHRoaXMub25WaWRlb0VuZCwgdGhpcyk7XG5cbiAgICB9XG4gICAgaXNTdG9wID0gdHJ1ZVxuICAgIC8vIF9zdG9wQ2FsbGJhY2s9bnVsbFxuICAgIHBsYXlDeWxlKCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kR3VpbGQuYWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZEd1aWxkLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMDtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudExhYmVsLnN0cmluZyA9IFwiMCVcIjsgLy8g8J+RiCBpbml0XG5cbiAgICAgICAgICAgIHRoaXMuaWRTb3VuZEN5Y2xlID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ3ljbGUsIHRydWUsIDEpO1xuICAgICAgICAgICAgdGhpcy5pZFNvdW5kR2lybCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdpcmwsIHRydWUsIDEpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlkZW8ucmVzdW1lKCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLmlkU291bmRDeWNsZSlcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMuaWRTb3VuZEdpcmwpXG5cbiAgICAgICAgdGhpcy5pc1N0b3AgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdG9wQ3ljbGUoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuaWRTb3VuZEN5Y2xlKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLmlkU291bmRHaXJsKVxuXG4gICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWRlby5wYXVzZSgpOyAvLyBob+G6t2MgcGF1c2UgbuG6v3UgY+G6p25cbiAgICB9XG5cbiAgICBidG5fY3ljbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q3lsZSgpO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRQcm9ncmVzcygpO1xuXG4gICAgICAgIC8vIHRoaXMudGV4dEd1aWxkLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbmZpcm0sIGZhbHNlLCAxKVxuXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl9zdG9wQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLl9zdG9wQ2FsbGJhY2ssIDEpO1xuICAgIH1cblxuICAgIG9uVmlkZW9FbmQoKSB7XG4gICAgICAgIHRoaXMuc2hvd0VuZGNhcmQoKTtcbiAgICB9XG5cbiAgICBzaG93RW5kY2FyZCgpIHtcbiAgICAgICAgdGhpcy5pc1N0b3AgPSBmYWxzZVxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmRHYW1lXCIpXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXG4gICAgICAgIC8vIHRoaXMuYnRuQ29sbGVjdC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAvLyB0aGlzLnRleHRHdWlsZC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAvLyB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAvLyB0aGlzLnRleHRHdWlsZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5idG5Db2xsZWN0LmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy50ZXh0R3VpbGQyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnBoYW9ob2EuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgLy8gfSwgMC41KVxuICAgIH1cbiAgICBtYXhQcm9ncmVzcyA9IDEwMFxuICAgIGN1cnJlbnRQcm9ncmVzcyA9IDBcbiAgICBhZGRQcm9ncmVzcygpIHtcbiAgICAgICAgLy8gbOG7sWMgZ2nhuqNtIGThuqduIChnaeG7kW5nIGFkcylcbiAgICAgICAgbGV0IHBvd2VyID0gTWF0aC5tYXgoMywgMTAgLSB0aGlzLmN1cnJlbnRQcm9ncmVzcyAqIDAuMDUpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFByb2dyZXNzICs9IHBvd2VyO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IE1hdGgubWluKHRoaXMuY3VycmVudFByb2dyZXNzLCB0aGlzLm1heFByb2dyZXNzKTtcblxuICAgICAgICBsZXQgcGVyY2VudCA9IHRoaXMuY3VycmVudFByb2dyZXNzIC8gdGhpcy5tYXhQcm9ncmVzcztcblxuICAgICAgICAvLyBtxrDhu6N0XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbEJhcilcbiAgICAgICAgICAgIC50bygxLCB7IGZpbGxSYW5nZTogcGVyY2VudCB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIGxldCBwZXJjZW50VGV4dCA9IE1hdGguZmxvb3IocGVyY2VudCAqIDEwMCk7XG4gICAgICAgIHRoaXMudXBkYXRlUGVyY2VudExhYmVsKHBlcmNlbnQpO1xuICAgICAgICBpZiAocGVyY2VudCA+PSAxKSB7XG4gICAgICAgICAgICAvLyB0aGlzLm9uRnVsbCgpO1xuICAgICAgICAgICAgLy8gdGhpcy5zaG93RW5kY2FyZCgpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnQgPiAwLjgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudExhYmVsLm5vZGUuc2NhbGUgPSAxLjI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnQgPiAwLjUpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJLZWVwIGdvaW5nISBBbG1vc3QgdGhlcmUhXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJDYW4geW91IG1ha2UgaGVyIGZpdD9cIlxuXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVQZXJjZW50TGFiZWwodGFyZ2V0UGVyY2VudCkge1xuICAgICAgICBsZXQgb2JqID0geyB2YWx1ZTogcGFyc2VGbG9hdCh0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcpIHx8IDAgfTtcblxuICAgICAgICBjYy50d2VlbihvYmopXG4gICAgICAgICAgICAudG8oMSwgeyB2YWx1ZTogdGFyZ2V0UGVyY2VudCAqIDEwMCB9LCB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCB0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBNYXRoLmZsb29yKHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSB2YWwgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSA5MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RW5kY2FyZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cbiAgICBvbkZ1bGwoKSB7XG4gICAgICAgIC8vIHN0b3AgbeG7jWkgdGjhu6lcbiAgICAgICAgdGhpcy5zdG9wQ3ljbGUoKTtcblxuICAgICAgICAvLyDEkeG6o20gYuG6o28gZnVsbFxuICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMTtcblxuICAgICAgICAvLyBzaG93IGVuZGNhcmRcbiAgICAgICAgdGhpcy5zaG93RW5kY2FyZCgpO1xuICAgIH1cbiAgICBzZXRTY3JlZW5TaXplKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IChpc0hvcml6b250YWwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0SGVpZ2h0ID0gKGlzSG9yaXpvbnRhbCkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIC8vIHRoaXMubGlua1RvU3RvcmUuc2NhbGU9KGlzSG9yaXpvbnRhbCk/MC42XG5cbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChpc0hvcml6b250YWwpID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChpc0hvcml6b250YWwpID8gZmFsc2UgOiB0cnVlXG4gICAgICAgIHRoaXMudGV4dEd1aWxkLnkgPSA0MDUuNzMyXG4gICAgICAgIHRoaXMuYmFyLnkgPSA1MDMuMzExXG4gICAgICAgIHRoaXMuYnRuQ29sbGVjdC5zY2FsZSA9IDFcbiAgICAgICAgdGhpcy5iYXIuc2NhbGUgPSAwLjQ1O1xuICAgICAgICB0aGlzLnRleHRHdWlsZC5zY2FsZSA9IDFcbiAgICAgICAgdGhpcy52aWRlby5ub2RlLnNjYWxlID0gNi40XG4gICAgICAgIC8vIHRoaXMuYnRuQ29sbGVjdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSA2Mi4yM1xuICAgICAgICB0aGlzLmJ0bkNvbGxlY3QueSA9IC01MDcuNzY5XG5cbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xuXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTcwLCAwKVxuXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlby5ub2RlLnNjYWxlID0gNi41XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcblxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XG5cbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5vZGUuc2NhbGUgPSA3LjRcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gMTQwXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYW4geFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuNzJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbGxlY3Quc2NhbGUgPSAwLjhcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbGxlY3QueSA9IC01MDcuNzY5ICsgMTQwXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5idG5Db2xsZWN0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IDUwXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQueSA9IDQ2MC44OTUgLSAxNDBcbiAgICAgICAgICAgICAgICB0aGlzLmJhci55ID0gNTUwLjAxNyAtIDE2MFxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLnNjYWxlID0gMC44O1xuICAgICAgICAgICAgICAgIHRoaXMuYmFyLnNjYWxlID0gMC4zXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgIH1cbiAgICBpc3ZlcnRpY2FsID0gdHJ1ZVxuICAgIHJlc3BvbnNpdmUoKSB7XG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPj0gZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFNjcmVlblNpemUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlKCk7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcCAmJiB0aGlzLmN1cnJlbnRQcm9ncmVzcyA+IDApIHtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgLT0gdGhpcy5kZWNheVNwZWVkICogZHQ7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IE1hdGgubWF4KDAsIHRoaXMuY3VycmVudFByb2dyZXNzKTtcblxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuY3VycmVudFByb2dyZXNzIC8gdGhpcy5tYXhQcm9ncmVzcztcblxuICAgICAgICAgICAgLy8gbGVycCBtxrDhu6N0XG4gICAgICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gY2MubWlzYy5sZXJwKHRoaXMuZmlsbEJhci5maWxsUmFuZ2UsIHRhcmdldCwgMC4yKTtcblxuICAgICAgICAgICAgbGV0IHBlcmNlbnRUZXh0ID0gTWF0aC5mbG9vcih0YXJnZXQgKiAxMDApO1xuICAgICAgICAgICAgdGhpcy5wZXJjZW50TGFiZWwuc3RyaW5nID0gcGVyY2VudFRleHQgKyBcIiVcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MR_Decor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f788vUAzhDkpEx4DQ8efSh', 'MR_Decor');
// scripts/MR_Decor.ts

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
        _this.mapNode = null;
        _this.camera3d = null;
        _this.listCard = null;
        _this.guild = null;
        _this.Group1 = null;
        _this.Group2 = null;
        _this.Group3 = null;
        _this.linkToStore = null;
        _this.soundBg = null;
        _this.soundUpgrade = null;
        _this.onEndCard = null;
        _this.miniLogo = null;
        _this.isvertical = false;
        return _this;
    }
    //
    NewClass.prototype.start = function () {
        // window.gameReady && window.gameReady();
        cc.audioEngine.play(this.soundBg, true, 0.8);
    };
    NewClass.prototype.btn_card1 = function () {
        var _this = this;
        this.guild.active = false;
        // for (let child of this.listCard.children) {
        this.listCard.children[0].getComponent(cc.Animation).play("card_off");
        this.listCard.children[1].getComponent(cc.Animation).play("card_off");
        // }
        cc.audioEngine.play(this.soundUpgrade, false, 0.8);
        cc.tween(this.camera3d).to(0.3, { zoomRatio: 0.6 }).call(function () {
            _this.mapNode.getChildByName("shadow").active = false;
            for (var i = 1; i < _this.mapNode.childrenCount; i++) {
                var child = _this.mapNode.children[i];
                child.position = child.position.add(cc.v3(0, 8, 0));
                child.active = true;
                var delay = 0;
                if (i < 4) {
                    delay = 0.1;
                }
                if (i < 2) {
                    delay = 0.15;
                }
                cc.tween(child).delay(delay).by(0.3, { position: cc.v3(0, -8, -0) }).start();
            }
        }).start();
        this.scheduleOnce(function () {
            _this.onStep2();
        }, 1);
    };
    NewClass.prototype.btn_card2 = function () {
        var _this = this;
        this.guild.active = false;
        cc.audioEngine.play(this.soundUpgrade, false, 0.8);
        this.listCard.children[2].getComponent(cc.Animation).play("card_off");
        this.listCard.children[3].getComponent(cc.Animation).play("card_off");
        this.Group1.getComponent(cc.Animation).play("group1_on");
        this.Group1.getChildByName("shadow").active = false;
        this.scheduleOnce(function () {
            _this.onStep3();
        }, 0.7);
    };
    NewClass.prototype.btn_card3 = function () {
        var _this = this;
        this.guild.active = false;
        this.Group2.getChildByName("shadow").active = false;
        cc.audioEngine.play(this.soundUpgrade, false, 0.8);
        this.listCard.children[4].getComponent(cc.Animation).play("card_off");
        this.listCard.children[5].getComponent(cc.Animation).play("card_off");
        // this.Group1.getComponent(cc.Animation).play("group2_on")
        this.Group2.getComponent(cc.Animation).play("show_group2");
        this.scheduleOnce(function () {
            _this.onStep4();
        }, 0.8);
    };
    NewClass.prototype.onStep2 = function () {
        var _this = this;
        this.Group1.active = true;
        // cc.tween(this.camera3d).to(0.5, { zoomRatio: 1.5 }).start()
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans1");
        this.scheduleOnce(function () {
            _this.listCard.children[2].active = true;
            _this.listCard.children[3].active = true;
        }, 0.8);
        this.scheduleOnce(function () {
            _this.guild.active = true;
        }, 1);
    };
    NewClass.prototype.onStep3 = function () {
        var _this = this;
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans2");
        this.Group2.active = true;
        this.scheduleOnce(function () {
            _this.listCard.children[4].active = true;
            _this.listCard.children[5].active = true;
        }, 0.8);
        this.scheduleOnce(function () {
            _this.guild.active = true;
        }, 1);
    };
    NewClass.prototype.onStep4 = function () {
        var _this = this;
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans3");
        this.Group3.active = true;
        this.scheduleOnce(function () {
            // this.listCard.children[6].active = true;
            // this.listCard.children[7].active = true;
            _this.linkToStore.active = true;
            _this.onEndCard.active = true;
            _this.miniLogo.active = false;
        }, 0.9);
        // this.scheduleOnce(() => {
        //     this.guild.active = true;
        // }, 1)
    };
    NewClass.prototype.update = function (dt) {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
            }
        }
        else {
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mapNode", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera3d", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Group1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Group2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Group3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUpgrade", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "onEndCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "miniLogo", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTVJfRGVjb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4SkM7UUE1SkcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFBO1FBQ3hCLGdCQUFVLEdBQUcsS0FBSyxDQUFBOztJQW9JdEIsQ0FBQztJQWxJRyxFQUFFO0lBRUYsd0JBQUssR0FBTDtRQUNJLDBDQUEwQztRQUUxQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUFBLGlCQTRCQztRQTNCRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUIsOENBQThDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxD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QUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUU1QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFFekIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUU1QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLDJDQUEyQztZQUMzQywyQ0FBMkM7WUFDM0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUM1QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUE7UUFDOUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUVoQyxRQUFRO0lBQ1osQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUV2QixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFFMUI7U0FDSjthQUNJO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFFeEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FHM0I7SUFJTCxDQUFDO0lBM0pEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBekJQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4SjVCO0lBQUQsZUFBQztDQTlKRCxBQThKQyxDQTlKcUMsRUFBRSxDQUFDLFNBQVMsR0E4SmpEO2tCQTlKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFwTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBjYW1lcmEzZDogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q2FyZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ3VpbGQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIEdyb3VwMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgR3JvdXAyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBHcm91cDM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRVcGdyYWRlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG9uRW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWluaUxvZ286IGNjLk5vZGUgPSBudWxsXG4gICAgaXN2ZXJ0aWNhbCA9IGZhbHNlXG5cbiAgICAvL1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xuXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjgpXG4gICAgfVxuICAgIGJ0bl9jYXJkMSgpIHtcbiAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0Q2FyZC5jaGlsZHJlbikge1xuICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcbiAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBncmFkZSwgZmFsc2UsIDAuOClcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTNkKS50bygwLjMsIHsgem9vbVJhdGlvOiAwLjYgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFkb3dcIikuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5tYXBOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubWFwTm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IGNoaWxkLnBvc2l0aW9uLmFkZChjYy52MygwLCA4LCAwKSlcbiAgICAgICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IDBcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsYXkgPSAwLjFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5ID0gMC4xNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZCkuZGVsYXkoZGVsYXkpLmJ5KDAuMywgeyBwb3NpdGlvbjogY2MudjMoMCwgLTgsIC0wKSB9KS5zdGFydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblN0ZXAyKClcbiAgICAgICAgfSwgMSlcblxuICAgIH1cbiAgICBidG5fY2FyZDIoKSB7XG4gICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZ3JhZGUsIGZhbHNlLCAwLjgpXG5cbiAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XG4gICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bM10uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xuICAgICAgICB0aGlzLkdyb3VwMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZ3JvdXAxX29uXCIpXG4gICAgICAgIHRoaXMuR3JvdXAxLmdldENoaWxkQnlOYW1lKFwic2hhZG93XCIpLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TdGVwMygpXG4gICAgICAgIH0sIDAuNylcbiAgICB9XG4gICAgYnRuX2NhcmQzKCkge1xuICAgICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLkdyb3VwMi5nZXRDaGlsZEJ5TmFtZShcInNoYWRvd1wiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVcGdyYWRlLCBmYWxzZSwgMC44KVxuXG4gICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bNF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xuICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcbiAgICAgICAgLy8gdGhpcy5Hcm91cDEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImdyb3VwMl9vblwiKVxuICAgICAgICB0aGlzLkdyb3VwMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic2hvd19ncm91cDJcIilcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU3RlcDQoKVxuICAgICAgICB9LCAwLjgpXG4gICAgfVxuICAgIG9uU3RlcDIoKSB7XG4gICAgICAgIHRoaXMuR3JvdXAxLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEzZCkudG8oMC41LCB7IHpvb21SYXRpbzogMS41IH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5jYW1lcmEzZC5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzY2VuZV90cmFuczFcIilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIH0sIDAuOClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIH0sIDEpXG4gICAgfVxuICAgIG9uU3RlcDMoKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhM2Qubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic2NlbmVfdHJhbnMyXCIpXG4gICAgICAgIHRoaXMuR3JvdXAyLmFjdGl2ZSA9IHRydWVcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgfSwgMC44KVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgfSwgMSlcbiAgICB9XG4gICAgb25TdGVwNCgpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEzZC5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzY2VuZV90cmFuczNcIilcbiAgICAgICAgdGhpcy5Hcm91cDMuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzZdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzddLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRW5kQ2FyZC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLm1pbmlMb2dvLmFjdGl2ZT1mYWxzZVxuICAgICAgICB9LCAwLjkpXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAvLyB9LCAxKVxuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcblxuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcblxuXG4gICAgICAgIH1cblxuXG5cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/KF_2/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd993ax3kuNGJrkzS2Qryu6x', 'GamePlay');
// scripts/KF_2/GamePlay.ts

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
var Customer_1 = require("./Customer");
var JoyStick_1 = require("./JoyStick");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.char = null;
        _this.handGuide = null;
        _this.arrowGarden = null;
        _this.arrowKe = null;
        _this.arrowTinhTien = null;
        _this.garden = null;
        _this.customer1Node = null;
        _this.customer2Node = null;
        _this.customer3Node = null;
        _this.customer4Node = null;
        _this.keCachua = null;
        _this.keNgo = null;
        _this.btnContinue = null;
        _this.linkToStore = null;
        _this.joyStick = null;
        _this.tangCachuaPrefab = null;
        _this.tangNgoPrefab = null;
        _this.cayNgoPrefab = null;
        _this.cayCachuaPrefab = null;
        _this.camera3D = null;
        _this.camera2D = null;
        _this.bgSound = null;
        _this.getItemSound = null;
        _this.tangCachuaNode = null;
        _this.tangNgoNode = null;
        _this.tang2CachuaNode = null;
        _this.tang2NgoNode = null;
        _this.charComp = null;
        _this.numNgo = 0;
        _this.numCaChua = 0;
        _this.countCustomer = 0;
        _this.currScreenWidth = null;
        _this.isHorizontal = true;
        _this.isEndGame = false;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.charComp = this.char.getComponent(Char_1.default);
        this.responsive();
    };
    NewClass.prototype.start = function () {
        cc.director.getPhysics3DManager().enabled = true;
        this.createGarden();
        this.addTangItem();
        cc.audioEngine.play(this.bgSound, true, 0.5);
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    };
    NewClass.prototype.addTangItem = function () {
        this.tangCachuaNode = cc.instantiate(this.tangCachuaPrefab);
        this.keCachua.addChild(this.tangCachuaNode);
        this.tangNgoNode = cc.instantiate(this.tangNgoPrefab);
        this.keNgo.addChild(this.tangNgoNode);
    };
    NewClass.prototype.addItemOnKe = function (name) {
        var _this = this;
        if (name == 'traingo') {
            this.numNgo++;
            if (this.numNgo > 0 && this.numNgo <= 24) {
                this.tangNgoNode.children[this.numNgo - 1].active = true;
                if (this.numNgo <= 12) {
                    this.tangNgoNode.children.forEach(function (item, index) {
                        _this.scheduleOnce(function () {
                            if (item.active == true && index < 12) {
                                item.active = false;
                                _this.customer1Node.getComponent(Customer_1.default).getItem('traingo');
                            }
                        }, index * 0.02);
                    });
                }
                ;
                if (this.numNgo >= 12 && this.numNgo < 24) {
                    this.tangNgoNode.children.forEach(function (item, index) {
                        _this.scheduleOnce(function () {
                            if (item.active == true && index >= 12 && index < 24) {
                                item.active = false;
                                _this.customer2Node.getComponent(Customer_1.default).getItem('traingo');
                            }
                        }, index * 0.02);
                    });
                }
            }
            if (this.numNgo > 24 && this.numNgo <= 48) {
                this.tangNgoNode.children[this.numNgo - 25].active = true;
            }
        }
        if (name == 'traicachua') {
            this.numCaChua++;
            if (this.numCaChua > 0 && this.numCaChua <= 24) {
                this.tangCachuaNode.children[this.numCaChua - 1].active = true;
                if (this.numCaChua <= 12) {
                    this.tangCachuaNode.children.forEach(function (item, index) {
                        _this.scheduleOnce(function () {
                            if (item.active == true && index < 12) {
                                item.active = false;
                                _this.customer3Node.getComponent(Customer_1.default).getItem('traicachua');
                            }
                        }, index * 0.02);
                    });
                }
                ;
                if (this.numCaChua > 12 && this.numCaChua <= 24) {
                    this.tangCachuaNode.children.forEach(function (item, index) {
                        _this.scheduleOnce(function () {
                            if (item.active == true && index >= 12 && index < 24) {
                                item.active = false;
                                _this.customer4Node.getComponent(Customer_1.default).getItem('traicachua');
                            }
                        }, index * 0.02);
                    });
                }
                ;
            }
            if (this.numCaChua > 24 && this.numCaChua <= 48) {
                this.tangCachuaNode.children[this.numCaChua - 25].active = true;
            }
        }
    };
    NewClass.prototype.endGame = function () {
        this.isEndGame = true;
        this.arrowTinhTien.active = false;
        this.handGuide.active = true;
        // this.btnContinue.active = true;
        this.joyStick.getComponent(JoyStick_1.default).offTouchEvent();
        this.joyStick.getComponent(JoyStick_1.default).dot.setPosition(cc.v3(0, -183));
        this.joyStick.getComponent(JoyStick_1.default).ring.setPosition(cc.v3(0, -183));
        this.joyStick.opacity = 255;
        this.linkToStore.active = true;
        this.charComp.idle();
    };
    NewClass.prototype.createGarden = function () {
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 4; j++) {
                var cayngo = cc.instantiate(this.cayNgoPrefab);
                this.garden.addChild(cayngo);
                cayngo.setPosition(cc.v3(2 + 3 * j, 0, 3 + 3 * i));
            }
        }
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 4; j++) {
                var caycachua = cc.instantiate(this.cayCachuaPrefab);
                this.garden.addChild(caycachua);
                caycachua.setPosition(cc.v3(-2 - 3 * j, 0, 3 + 3 * i));
            }
        }
    };
    NewClass.prototype.setScreenSize = function (isHorizontal) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.joyStick.scale = (isHorizontal) ? 0.5 : 1.8;
        this.btnContinue.children[0].scale = (isHorizontal) ? 0.25 : 0.6;
        this.camera3D.zoomRatio = (isHorizontal) ? 2 : 1.5;
        this.camera3D.node.eulerAngles = (isHorizontal) ? cc.v3(-43, 0, 0) : cc.v3(-46, 0, 0);
        // canvas.fitHeight = (isHorizontal) ? true : false;
        // canvas.fitWidth = (isHorizontal) ? false : true;
    };
    NewClass.prototype.responsive = function () {
        // let canvas = this.node.getComponent(cc.Canvas);
        var deviceResolution = cc.view.getFrameSize();
        // console.log(deviceResolution);
        // console.log(canvas.designResolution)
        // // calculte design ratio
        // let desiredRatio = canvas.designResolution.width / canvas.designResolution.height;
        // // calculte device ratio
        // let deviceRatio = deviceResolution.width / deviceResolution.height;
        if (deviceResolution.width >= deviceResolution.height) {
            this.setScreenSize(true);
            this.isHorizontal = true;
        }
        else if (deviceResolution.width < deviceResolution.height) {
            this.setScreenSize(false);
            this.isHorizontal = false;
        }
        // if (this.currScreenWidth !== winSize.width) {
        //     if (!this.currScreenWidth) {
        //         if (winSize.width > 500) {
        //             this.setScreenSize(true);
        //             this.isHorizontal = true;
        //         } else {
        //             this.setScreenSize(false);
        //             this.isHorizontal = false;
        //         }
        //         this.currScreenWidth = winSize.width;
        //         return;
        //     }
        //     if (this.currScreenWidth < winSize.width) {
        //         this.setScreenSize(true);
        //         this.isHorizontal = true;
        //     } else {
        //         this.setScreenSize(false);
        //         this.isHorizontal = false;
        //     }
        //     this.currScreenWidth = winSize.width;
        // }
    };
    NewClass.prototype.update = function (dt) {
        this.camera3D.node.setPosition(this.char.position.add(cc.v3(0, 30, 26)).clampf(cc.v3(-9, 30, 38), cc.v3(9, 30, 30)));
        this.responsive();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handGuide", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrowGarden", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrowKe", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrowTinhTien", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "garden", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "customer1Node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "customer2Node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "customer3Node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "customer4Node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "keCachua", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "keNgo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnContinue", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "joyStick", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "tangCachuaPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "tangNgoPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "cayNgoPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "cayCachuaPrefab", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera3D", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera2D", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "getItemSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcR2FtZVBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsK0JBQTBCO0FBQzFCLHVDQUFrQztBQUNsQyx1Q0FBaUM7QUFFakM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpUkM7UUE5UUcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFJeEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWMsSUFBSSxDQUFD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XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IENoYXIgZnJvbSBcIi4vQ2hhclwiO1xuaW1wb3J0IEN1c3RvbWVyIGZyb20gJy4vQ3VzdG9tZXInO1xuaW1wb3J0IEpveVN0aWNrIGZyb20gJy4vSm95U3RpY2snXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kR3VpZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJyb3dHYXJkZW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJyb3dLZTogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFycm93VGluaFRpZW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2FyZGVuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGN1c3RvbWVyMU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY3VzdG9tZXIyTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjdXN0b21lcjNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGN1c3RvbWVyNE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2VDYWNodWE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2VOZ286IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuQ29udGludWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgam95U3RpY2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB0YW5nQ2FjaHVhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB0YW5nTmdvUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjYXlOZ29QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNheUNhY2h1YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgY2FtZXJhM0Q6IGNjLkNhbWVyYSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIGNhbWVyYTJEOiBjYy5DYW1lcmEgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBnZXRJdGVtU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICB0YW5nQ2FjaHVhTm9kZSA9IG51bGw7XG5cbiAgICB0YW5nTmdvTm9kZSA9IG51bGw7XG5cbiAgICB0YW5nMkNhY2h1YU5vZGUgPSBudWxsO1xuXG4gICAgdGFuZzJOZ29Ob2RlID0gbnVsbDtcblxuICAgIGNoYXJDb21wID0gbnVsbDtcblxuICAgIG51bU5nbyA9IDA7XG5cbiAgICBudW1DYUNodWEgPSAwO1xuXG4gICAgY291bnRDdXN0b21lciA9IDA7XG5cbiAgICBjdXJyU2NyZWVuV2lkdGggPSBudWxsO1xuXG4gICAgaXNIb3Jpem9udGFsID0gdHJ1ZTtcblxuICAgIGlzRW5kR2FtZSA9IGZhbHNlO1xuXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNoYXJDb21wID0gdGhpcy5jaGFyLmdldENvbXBvbmVudChDaGFyKTtcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlKCk7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljczNETWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNyZWF0ZUdhcmRlbigpO1xuICAgICAgICB0aGlzLmFkZFRhbmdJdGVtKCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ1NvdW5kLCB0cnVlLCAwLjUpO1xuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRUYW5nSXRlbSgpIHtcbiAgICAgICAgdGhpcy50YW5nQ2FjaHVhTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGFuZ0NhY2h1YVByZWZhYik7XG4gICAgICAgIHRoaXMua2VDYWNodWEuYWRkQ2hpbGQodGhpcy50YW5nQ2FjaHVhTm9kZSk7XG4gICAgICAgIHRoaXMudGFuZ05nb05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhbmdOZ29QcmVmYWIpO1xuICAgICAgICB0aGlzLmtlTmdvLmFkZENoaWxkKHRoaXMudGFuZ05nb05vZGUpO1xuICAgIH1cblxuICAgIGFkZEl0ZW1PbktlKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3RyYWluZ28nKSB7XG4gICAgICAgICAgICB0aGlzLm51bU5nbysrO1xuICAgICAgICAgICAgaWYgKHRoaXMubnVtTmdvID4gMCAmJiB0aGlzLm51bU5nbyA8PSAyNCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFuZ05nb05vZGUuY2hpbGRyZW5bdGhpcy5udW1OZ28gLSAxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bU5nbyA8PSAxMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhbmdOZ29Ob2RlLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlID09IHRydWUgJiYgaW5kZXggPCAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyMU5vZGUuZ2V0Q29tcG9uZW50KEN1c3RvbWVyKS5nZXRJdGVtKCd0cmFpbmdvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXggKiAwLjAyKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubnVtTmdvID49IDEyICYmIHRoaXMubnVtTmdvIDwgMjQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YW5nTmdvTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFjdGl2ZSA9PSB0cnVlICYmIGluZGV4ID49IDEyICYmIGluZGV4IDwgMjQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lcjJOb2RlLmdldENvbXBvbmVudChDdXN0b21lcikuZ2V0SXRlbSgndHJhaW5nbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGluZGV4ICogMC4wMilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubnVtTmdvID4gMjQgJiYgdGhpcy5udW1OZ28gPD0gNDgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhbmdOZ29Ob2RlLmNoaWxkcmVuW3RoaXMubnVtTmdvIC0gMjVdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT0gJ3RyYWljYWNodWEnKSB7XG4gICAgICAgICAgICB0aGlzLm51bUNhQ2h1YSsrO1xuICAgICAgICAgICAgaWYgKHRoaXMubnVtQ2FDaHVhID4gMCAmJiB0aGlzLm51bUNhQ2h1YSA8PSAyNCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFuZ0NhY2h1YU5vZGUuY2hpbGRyZW5bdGhpcy5udW1DYUNodWEgLSAxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bUNhQ2h1YSA8PSAxMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhbmdDYWNodWFOb2RlLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlID09IHRydWUgJiYgaW5kZXggPCAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyM05vZGUuZ2V0Q29tcG9uZW50KEN1c3RvbWVyKS5nZXRJdGVtKCd0cmFpY2FjaHVhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXggKiAwLjAyKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bUNhQ2h1YSA+IDEyICYmIHRoaXMubnVtQ2FDaHVhIDw9IDI0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFuZ0NhY2h1YU5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5hY3RpdmUgPT0gdHJ1ZSAmJiBpbmRleCA+PSAxMiAmJiBpbmRleCA8IDI0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXI0Tm9kZS5nZXRDb21wb25lbnQoQ3VzdG9tZXIpLmdldEl0ZW0oJ3RyYWljYWNodWEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDAuMDIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm51bUNhQ2h1YSA+IDI0ICYmIHRoaXMubnVtQ2FDaHVhIDw9IDQ4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YW5nQ2FjaHVhTm9kZS5jaGlsZHJlblt0aGlzLm51bUNhQ2h1YSAtIDI1XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG4gICAgZW5kR2FtZSgpIHtcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFycm93VGluaFRpZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFuZEd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuYnRuQ29udGludWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5qb3lTdGljay5nZXRDb21wb25lbnQoSm95U3RpY2spLm9mZlRvdWNoRXZlbnQoKTtcbiAgICAgICAgdGhpcy5qb3lTdGljay5nZXRDb21wb25lbnQoSm95U3RpY2spLmRvdC5zZXRQb3NpdGlvbihjYy52MygwLCAtMTgzKSk7XG4gICAgICAgIHRoaXMuam95U3RpY2suZ2V0Q29tcG9uZW50KEpveVN0aWNrKS5yaW5nLnNldFBvc2l0aW9uKGNjLnYzKDAsIC0xODMpKTtcbiAgICAgICAgdGhpcy5qb3lTdGljay5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hhckNvbXAuaWRsZSgpO1xuICAgIH1cblxuXG4gICAgY3JlYXRlR2FyZGVuKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2F5bmdvID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXlOZ29QcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FyZGVuLmFkZENoaWxkKGNheW5nbyk7XG4gICAgICAgICAgICAgICAgY2F5bmdvLnNldFBvc2l0aW9uKGNjLnYzKDIgKyAzICogaiwgMCwgMyArIDMgKiBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNheWNhY2h1YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2F5Q2FjaHVhUHJlZmFiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhcmRlbi5hZGRDaGlsZChjYXljYWNodWEpO1xuICAgICAgICAgICAgICAgIGNheWNhY2h1YS5zZXRQb3NpdGlvbihjYy52MygtMiAtIDMgKiBqLCAwLCAzICsgMyAqIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRTY3JlZW5TaXplKGlzSG9yaXpvbnRhbCkgeyAvLyByZXNwb25zaXZlIGdhbWUgbmdhbmcgZG9jXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XG4gICAgICAgIHRoaXMuam95U3RpY2suc2NhbGUgPSAoaXNIb3Jpem9udGFsKSA/IDAuNSA6IDEuODtcbiAgICAgICAgdGhpcy5idG5Db250aW51ZS5jaGlsZHJlblswXS5zY2FsZSA9IChpc0hvcml6b250YWwpID8gMC4yNSA6IDAuNjtcbiAgICAgICAgdGhpcy5jYW1lcmEzRC56b29tUmF0aW8gPSAoaXNIb3Jpem9udGFsKSA/IDIgOiAxLjU7XG4gICAgICAgIHRoaXMuY2FtZXJhM0Qubm9kZS5ldWxlckFuZ2xlcyA9IChpc0hvcml6b250YWwpID8gY2MudjMoLTQzLCAwLCAwKSA6IGNjLnYzKC00NiwgMCwgMClcbiAgICAgICAgLy8gY2FudmFzLmZpdEhlaWdodCA9IChpc0hvcml6b250YWwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAvLyBjYW52YXMuZml0V2lkdGggPSAoaXNIb3Jpem9udGFsKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICByZXNwb25zaXZlKCkge1xuICAgICAgICAvLyBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRldmljZVJlc29sdXRpb24pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW52YXMuZGVzaWduUmVzb2x1dGlvbilcbiAgICAgICAgLy8gLy8gY2FsY3VsdGUgZGVzaWduIHJhdGlvXG4gICAgICAgIC8vIGxldCBkZXNpcmVkUmF0aW8gPSBjYW52YXMuZGVzaWduUmVzb2x1dGlvbi53aWR0aCAvIGNhbnZhcy5kZXNpZ25SZXNvbHV0aW9uLmhlaWdodDtcbiAgICAgICAgLy8gLy8gY2FsY3VsdGUgZGV2aWNlIHJhdGlvXG4gICAgICAgIC8vIGxldCBkZXZpY2VSYXRpbyA9IGRldmljZVJlc29sdXRpb24ud2lkdGggLyBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodDtcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPj0gZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaXNIb3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmlzSG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmICh0aGlzLmN1cnJTY3JlZW5XaWR0aCAhPT0gd2luU2l6ZS53aWR0aCkge1xuICAgICAgICAvLyAgICAgaWYgKCF0aGlzLmN1cnJTY3JlZW5XaWR0aCkge1xuICAgICAgICAvLyAgICAgICAgIGlmICh3aW5TaXplLndpZHRoID4gNTAwKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZSh0cnVlKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5pc0hvcml6b250YWwgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZShmYWxzZSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNIb3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3VyclNjcmVlbldpZHRoID0gd2luU2l6ZS53aWR0aDtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmN1cnJTY3JlZW5XaWR0aCA8IHdpblNpemUud2lkdGgpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFNjcmVlblNpemUodHJ1ZSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc0hvcml6b250YWwgPSB0cnVlO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFNjcmVlblNpemUoZmFsc2UpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuaXNIb3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJTY3JlZW5XaWR0aCA9IHdpblNpemUud2lkdGg7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmNhbWVyYTNELm5vZGUuc2V0UG9zaXRpb24odGhpcy5jaGFyLnBvc2l0aW9uLmFkZChjYy52MygwLCAzMCwgMjYpKS5jbGFtcGYoY2MudjMoLTksIDMwLCAzOCksIGNjLnYzKDksIDMwLCAzMCkpKTtcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlKCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/KF_2/anim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e5bfsDkgBFDokB8OsCRZJ/', 'anim');
// scripts/KF_2/anim.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.finish = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcYW5pbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1CQztRQWhCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBWXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBWEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFkRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtQjVCO0lBQUQsZUFBQztDQW5CRCxBQW1CQyxDQW5CcUMsRUFBRSxDQUFDLFNBQVMsR0FtQmpEO2tCQW5Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIGZpbmlzaCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MR_23.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '466c2hSJ7hD1qTOfyqF8ud8', 'MR_23');
// scripts/MR_23.ts

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
globalThis.money = 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainCamera = null;
        _this.mainCamera2 = null;
        _this.lbMoneyCollect = null;
        _this.listUnlock = null;
        _this.listPop = null;
        _this.hand = null;
        _this.hand2 = null;
        _this.preMoney = null;
        _this.lbMoney = null;
        _this.linkToStore = null;
        _this.preSpawMoney = null;
        _this.btnCollect = null;
        _this.soundBg = null;
        _this.soundUd = null;
        _this.soundMoney = null;
        _this.soundShow = null;
        _this.listKH3 = null;
        _this.listKH1 = null;
        _this.currentBar = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.isMoneyCollect = 50;
        _this.isUnlock = 0;
        _this.isUpgrade = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.5);
        this.createMoney(cc.v3(0, 50));
        this.createMoney(cc.v3(214, 480));
    };
    NewClass.prototype.spawMoney = function () {
        var _loop_1 = function (i) {
            var money = cc.instantiate(this_1.preSpawMoney);
            money.parent = this_1.btnCollect.parent;
            var posEnd = this_1.lbMoney.node.parent.position;
            var pos = this_1.btnCollect.position;
            money.position = pos;
            var rdx = Math.floor(Math.random() * 400) - 200;
            var rdy = Math.floor(Math.random() * 400) - 200;
            var pos2 = cc.v3(pos.x + rdx, pos.y + rdy);
            cc.tween(money).to(0.2, { position: pos2 }).to(0.5, { position: posEnd }).call(function () {
                money.destroy();
            }).start();
        };
        var this_1 = this;
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.btn_collect = function () {
        this.hand.active = false;
        var count = this.isMoneyCollect;
        this.isMoneyCollect = 0;
        this.scheduleOnce(function () {
            globalThis.money += count;
        }, 0.7);
        if (count > 0) {
            this.spawMoney();
            cc.audioEngine.play(this.soundMoney, false, 1);
        }
        if (!this.isUpgrade) {
            if (this.isUnlock == 0) {
                if (this.isUnlock == 0) {
                    this.zoomCam(1);
                    this.isUnlock = 1;
                }
            }
            else if (this.isUnlock == 1) {
                if (this.isUnlock == 1 && globalThis.money >= 75) {
                    this.zoomCam(2);
                    this.isUnlock = 2;
                }
            }
            else if (this.isUnlock == 2) {
                if (this.isUnlock == 2 && globalThis.money >= 400) {
                    this.zoomCam(3);
                    this.isUnlock = 3;
                }
            }
            else if (this.isUnlock == 3) {
                console.log("zoom 4");
                if (this.isUnlock == 3 && globalThis.money >= 1200) {
                    this.zoomCam(4);
                    this.isUnlock = 5;
                }
            }
        }
        // else if (this.isUnlock == 3) {
        //     if (this.isUnlock == 3 && globalThis.money >= 1200) {
        //         this.zoomCam(4)
        //         this.isUnlock = 4;
        //     }
        // }
    };
    NewClass.prototype.update = function (dt) {
        this.lbMoney.string = globalThis.money.toString();
        this.lbMoneyCollect.string = this.isMoneyCollect.toString();
        this.responsive();
    };
    NewClass.prototype.setScreenSize = function (isHorizontal) {
        this.node.getComponent(cc.Canvas).fitWidth = (isHorizontal) ? false : true;
        this.node.getComponent(cc.Canvas).fitHeight = (isHorizontal) ? true : false;
    };
    NewClass.prototype.responsive = function () {
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width >= deviceResolution.height) {
            this.setScreenSize(true);
            this.mainCamera.node.active = false;
            this.mainCamera2.node.active = true;
            this.btnCollect.scale = 1.5;
            this.currentBar.scale = 0.9;
        }
        else if (deviceResolution.width < deviceResolution.height) {
            this.setScreenSize(false);
            this.mainCamera.node.active = true;
            this.mainCamera2.node.active = false;
            this.btnCollect.scale = 1;
            this.currentBar.scale = 0.6;
        }
    };
    NewClass.prototype.btn_unlock = function (event, value) {
        var _this = this;
        event.currentTarget.parent.getComponent(cc.Animation).play("tag_close");
        cc.audioEngine.play(this.soundUd, false, 1);
        switch (value) {
            case "1":
                this.unlockNode(this.listUnlock.children[0]);
                globalThis.money -= 25;
                this.createMoney(cc.v3(-123, -155));
                this.scheduleOnce(function () {
                    _this.createMoney(cc.v3(-240, -226));
                }, 0.8);
                this.scheduleOnce(function () {
                    _this.createMoney(cc.v3(100, -226));
                }, 1);
                this.listKH1.active = true;
                break;
            case "2":
                this.unlockNode(this.listUnlock.children[1]);
                this.createMoney(cc.v3(524, -349));
                globalThis.money -= 75;
                this.createMoney(cc.v3(524, -349));
                // this.createMoney(cc.v3(-123, -155))
                this.scheduleOnce(function () {
                    _this.createMoney(cc.v3(645, -524));
                    _this.createMoney(cc.v3(524, -349));
                }, 0.8);
                break;
            case "3":
                this.unlockNode(this.listUnlock.children[2]);
                // this.createMoney(cc.v3(-123, -155))
                // this.scheduleOnce(() => {
                //     this.createMoney(cc.v3(-240, -226))
                // }, 0.8)
                break;
            case "4":
                this.unlockNode(this.listUnlock.children[3]);
                globalThis.money -= 400;
                this.createMoney(cc.v3(-147, 434));
                this.createMoney(cc.v3(-388, 498));
                this.scheduleOnce(function () {
                    _this.createMoney(cc.v3(135, 441));
                    _this.listKH3.active = true;
                }, 0.8);
                break;
        }
    };
    NewClass.prototype.createMoney = function (pos) {
        var _this = this;
        this.schedule(function () {
            cc.audioEngine.play(_this.soundMoney, false, 1);
            var money = cc.instantiate(_this.preMoney);
            money.parent = _this.node;
            money.position = pos;
            money.group = "cam";
            _this.scheduleOnce(function () {
                _this.isMoneyCollect += 25;
            }, 0.2);
        }, 2);
    };
    NewClass.prototype.zoomCam = function (value) {
        var _this = this;
        this.isUpgrade = true;
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.soundShow, false, 1);
        }, 0.4);
        switch (value) {
            case 1:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(function () {
                    // this.listPop.children[0].active = true
                }).start();
                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(function () {
                }).start();
                this.scheduleOnce(function () {
                    _this.listPop.children[0].active = true;
                }, 0.3);
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-100, 0) }).delay(0.15).call(function () {
                    // this.listPop.children[0].active = true
                    _this.hand2.active = true;
                }).start();
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(-100, -100) }).delay(0.15).call(function () {
                    // this.listPop.children[0].active = true
                    _this.hand2.active = true;
                }).start();
                break;
            case 2:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(function () {
                }).start();
                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(function () {
                }).start();
                this.scheduleOnce(function () {
                    _this.listPop.children[1].active = true;
                }, 0.3);
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(481, -250) }).delay(0.15).call(function () {
                    // this.hand2.active = true
                }).start();
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(400, -350) }).delay(0.15).call(function () {
                    // this.hand2.active = true
                }).start();
                break;
            case 3:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(function () {
                }).start();
                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(function () {
                }).start();
                this.scheduleOnce(function () {
                    _this.listPop.children[2].active = true;
                }, 0.3);
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-69, 350) }).delay(0.15).call(function () {
                }).start();
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(-69, 350) }).delay(0.15).call(function () {
                }).start();
                break;
            case 4:
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.5 }).call(function () {
                }).start();
                cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 2.5 }).call(function () {
                }).start();
                this.scheduleOnce(function () {
                    _this.listPop.children[3].active = true;
                }, 0.3);
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(402, 166) }).delay(0.15).call(function () {
                    _this.linkToStore.active = true;
                }).start();
                cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(402, 300) }).delay(0.15).call(function () {
                    _this.linkToStore.active = true;
                }).start();
                break;
        }
    };
    NewClass.prototype.unlockNode = function (node) {
        var _this = this;
        node.active = true;
        var _loop_2 = function (i) {
            this_2.scheduleOnce(function () {
                node.children[i].active = true;
                if (i == node.childrenCount - 1) {
                    _this.scheduleOnce(function () {
                        _this.zoomBack();
                    }, 0.5);
                }
            }, i * 0.05);
        };
        var this_2 = this;
        for (var i = 0; i < node.childrenCount; i++) {
            _loop_2(i);
        }
    };
    NewClass.prototype.zoomBack = function () {
        var _this = this;
        cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1 }).start();
        cc.tween(this.mainCamera2).to(0.3, { zoomRatio: 1.5 }).start();
        cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(0, 0) }).call(function () {
            _this.isUpgrade = false;
        }).start();
        cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(0, 0) }).call(function () {
            _this.isUpgrade = false;
        }).start();
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera2", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbMoneyCollect", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listUnlock", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listPop", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand2", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preMoney", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbMoney", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preSpawMoney", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnCollect", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundMoney", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundShow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKH3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKH1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "currentBar", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTVJfMjMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7QUFDZCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJUQztRQXpURyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxJQUFJLENBQUE7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBYyxJQUFJLENBQUE7UUFFOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGVBQVMsR0FBaUIsSUFBSSxDQUFBO1FBRTlCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixjQUFRLEdBQUcsOEJBQThCLENBQUE7UUFFekMsb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGVBQVMsR0FBRyxLQUFLLENBQUE7O0lBZ1JyQixDQUFDO0lBL1FHLHdCQUFLLEdBQUw7UUFDSSxJ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QUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdkYsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEYsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ1YsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzRCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDVixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM1RCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDVixJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQzFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDUCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFF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OiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5nbG9iYWxUaGlzLm1vbmV5ID0gMFxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgbWFpbkNhbWVyYTI6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTW9uZXlDb2xsZWN0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdFVubG9jazogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdFBvcDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kMjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZU1vbmV5OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk1vbmV5OiBjYy5MYWJlbCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVTcGF3TW9uZXk6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5Db2xsZWN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRNb25leTogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRTaG93OiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEtIMzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEtIMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY3VycmVudEJhcjogY2MuTm9kZSA9IG51bGw7XG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcblxuICAgIGlzTW9uZXlDb2xsZWN0ID0gNTA7XG4gICAgaXNVbmxvY2sgPSAwO1xuICAgIGlzVXBncmFkZSA9IGZhbHNlXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxuICAgICAgICB0aGlzLmNyZWF0ZU1vbmV5KGNjLnYzKDAsIDUwKSlcbiAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52MygyMTQsIDQ4MCkpXG4gICAgICAgXG4gICAgfVxuICAgIHNwYXdNb25leSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbW9uZXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVNwYXdNb25leSlcbiAgICAgICAgICAgIG1vbmV5LnBhcmVudCA9IHRoaXMuYnRuQ29sbGVjdC5wYXJlbnRcbiAgICAgICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmxiTW9uZXkubm9kZS5wYXJlbnQucG9zaXRpb25cbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmJ0bkNvbGxlY3QucG9zaXRpb25cbiAgICAgICAgICAgIG1vbmV5LnBvc2l0aW9uID0gcG9zXG5cbiAgICAgICAgICAgIGxldCByZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0MDApIC0gMjAwXG4gICAgICAgICAgICBsZXQgcmR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDAwKSAtIDIwMFxuICAgICAgICAgICAgbGV0IHBvczIgPSBjYy52Myhwb3MueCArIHJkeCwgcG9zLnkgKyByZHkpXG4gICAgICAgICAgICBjYy50d2Vlbihtb25leSkudG8oMC4yLCB7IHBvc2l0aW9uOiBwb3MyIH0pLnRvKDAuNSwgeyBwb3NpdGlvbjogcG9zRW5kIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vbmV5LmRlc3Ryb3koKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGJ0bl9jb2xsZWN0KCkge1xuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5pc01vbmV5Q29sbGVjdFxuICAgICAgICB0aGlzLmlzTW9uZXlDb2xsZWN0ID0gMFxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbFRoaXMubW9uZXkgKz0gY291bnQ7XG4gICAgICAgIH0sIDAuNylcblxuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwYXdNb25leSgpXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRNb25leSwgZmFsc2UsIDEpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBncmFkZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmxvY2sgPT0gMCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmxvY2sgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb21DYW0oMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1VubG9jayA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1VubG9jayA9PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmxvY2sgPT0gMSAmJiBnbG9iYWxUaGlzLm1vbmV5ID49IDc1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbUNhbSgyKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVW5sb2NrID0gMjtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNVbmxvY2sgPT0gMikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVW5sb2NrID09IDIgJiYgZ2xvYmFsVGhpcy5tb25leSA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tQ2FtKDMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVbmxvY2sgPSAzO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1VubG9jayA9PSAzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ6b29tIDRcIilcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1VubG9jayA9PSAzICYmIGdsb2JhbFRoaXMubW9uZXkgPj0gMTIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb21DYW0oNClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1VubG9jayA9IDU7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLmlzVW5sb2NrID09IDMpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmlzVW5sb2NrID09IDMgJiYgZ2xvYmFsVGhpcy5tb25leSA+PSAxMjAwKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy56b29tQ2FtKDQpXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc1VubG9jayA9IDQ7XG5cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5sYk1vbmV5LnN0cmluZyA9IGdsb2JhbFRoaXMubW9uZXkudG9TdHJpbmcoKVxuICAgICAgICB0aGlzLmxiTW9uZXlDb2xsZWN0LnN0cmluZyA9IHRoaXMuaXNNb25leUNvbGxlY3QudG9TdHJpbmcoKVxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcblxuICAgIH1cbiAgICBzZXRTY3JlZW5TaXplKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0V2lkdGggPSAoaXNIb3Jpem9udGFsKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IChpc0hvcml6b250YWwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXNwb25zaXZlKCkge1xuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoID49IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFNjcmVlblNpemUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhMi5ub2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuYnRuQ29sbGVjdC5zY2FsZSA9IDEuNVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmFyLnNjYWxlPTAuOVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW5TaXplKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYTIubm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5idG5Db2xsZWN0LnNjYWxlID0gMVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmFyLnNjYWxlPTAuNlxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgYnRuX3VubG9jayhldmVudCwgdmFsdWUpIHtcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInRhZ19jbG9zZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgdGhpcy51bmxvY2tOb2RlKHRoaXMubGlzdFVubG9jay5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5tb25leSAtPSAyNVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoLTEyMywgLTE1NSkpXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1vbmV5KGNjLnYzKC0yNDAsIC0yMjYpKVxuICAgICAgICAgICAgICAgIH0sIDAuOClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoMTAwLCAtMjI2KSlcbiAgICAgICAgICAgICAgICB9LCAxKVxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEtIMS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZSh0aGlzLmxpc3RVbmxvY2suY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoNTI0LCAtMzQ5KSlcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLm1vbmV5IC09IDc1XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52Myg1MjQsIC0zNDkpKVxuXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jcmVhdGVNb25leShjYy52MygtMTIzLCAtMTU1KSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoNjQ1LCAtNTI0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52Myg1MjQsIC0zNDkpKVxuXG4gICAgICAgICAgICAgICAgfSwgMC44KVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZSh0aGlzLmxpc3RVbmxvY2suY2hpbGRyZW5bMl0pO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoLTEyMywgLTE1NSkpXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmNyZWF0ZU1vbmV5KGNjLnYzKC0yNDAsIC0yMjYpKVxuXG4gICAgICAgICAgICAgICAgLy8gfSwgMC44KVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZSh0aGlzLmxpc3RVbmxvY2suY2hpbGRyZW5bM10pO1xuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMubW9uZXkgLT0gNDAwXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52MygtMTQ3LCA0MzQpKVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoLTM4OCwgNDk4KSlcblxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52MygxMzUsIDQ0MSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEtIMy5hY3RpdmUgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICB9LCAwLjgpXG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVNb25leShwb3MpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRNb25leSwgZmFsc2UsIDEpO1xuXG4gICAgICAgICAgICBsZXQgbW9uZXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZU1vbmV5KVxuICAgICAgICAgICAgbW9uZXkucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgbW9uZXkucG9zaXRpb24gPSBwb3NcbiAgICAgICAgICAgIG1vbmV5Lmdyb3VwID0gXCJjYW1cIlxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNNb25leUNvbGxlY3QgKz0gMjVcbiAgICAgICAgICAgIH0sIDAuMilcbiAgICAgICAgfSwgMilcblxuICAgIH1cbiAgICB6b29tQ2FtKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNVcGdyYWRlID0gdHJ1ZVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93LCBmYWxzZSwgMSlcbiAgICAgICAgfSwgMC40KVxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAxLjUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGlzdFBvcC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMikudG8oMC4zLCB7IHpvb21SYXRpbzogMi41IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvcC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTEwMCwgMCkgfSkuZGVsYXkoMC4xNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGlzdFBvcC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTEwMCwgLTEwMCkgfSkuZGVsYXkoMC4xNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGlzdFBvcC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDEuNSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMikudG8oMC4zLCB7IHpvb21SYXRpbzogMi41IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvcC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDQ4MSwgLTI1MCkgfSkuZGVsYXkoMC4xNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaGFuZDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoNDAwLCAtMzUwKSB9KS5kZWxheSgwLjE1KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5oYW5kMi5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMS41IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0UG9wLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9LCAwLjMpXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTY5LCAzNTApIH0pLmRlbGF5KDAuMTUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTY5LCAzNTApIH0pLmRlbGF5KDAuMTUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDEuNSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMikudG8oMC4zLCB7IHpvb21SYXRpbzogMi41IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvcC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDQwMiwgMTY2KSB9KS5kZWxheSgwLjE1KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52Myg0MDIsIDMwMCkgfSkuZGVsYXkoMC4xNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bmxvY2tOb2RlKG5vZGUpIHtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gbm9kZS5jaGlsZHJlbkNvdW50IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb21CYWNrKClcblxuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgaSAqIDAuMDUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgem9vbUJhY2soKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIpLnRvKDAuMywgeyB6b29tUmF0aW86IDEuNSB9KS5zdGFydCgpXG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzVXBncmFkZSA9IGZhbHNlXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMi5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1VwZ3JhZGUgPSBmYWxzZVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/KF_2/MR_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7015blpAbhBzJLVPYbJKXyz', 'MR_4');
// scripts/KF_2/MR_4.ts

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
var JoyStick_1 = require("./JoyStick");
var Char_1 = require("./Char");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
globalThis.money = 20;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.joyStick = null;
        _this.handGuide = null;
        _this.char = null;
        _this.camera3D = null;
        _this.listKHPre = [];
        _this.shadow = null;
        _this.camera2D = null;
        _this.lbMoney = null;
        _this.soundBg = null;
        _this.soundUd = null;
        _this.soundPut = null;
        _this.linkToStore = null;
        // @property(cc.Node)
        // arrow1: cc.Node = null;
        // @property(cc.Node)
        // arrow2: cc.Node = null;
        // @property(cc.Node)
        // arrow4: cc.Node = null;
        _this.listArrow = null;
        _this.text = null;
        // @property(cc.Node)
        // banGhe1: cc.Node = null;
        // @property(cc.Node)
        // arrow3: cc.Node = null
        // @property(cc.Node)
        // arrow5: cc.Node = null
        _this.effMoney = null;
        // @property(cc.Node)
        // unlockNode1: cc.Node = null;
        _this.listBanGhe = null;
        _this.kh1 = null;
        _this.kh2 = null;
        _this.listKH = null;
        _this.endGame = null;
        _this.unlockNode = null;
        // LIFE-CYCLE CALLBACKS:
        _this.charComp = null;
        _this.isHorizontal = true;
        _this.isCutScene = false;
        _this.isStep = 1;
        _this.isvertical = false;
        _this.countMoney = 20;
        _this.arrKHMan = [];
        _this.arrKHpos = [[], [], []];
        _this.arrPosCus = [];
        _this.countUD = 0;
        return _this;
        // setScreenSize(isHorizontal) { // responsive game ngang doc
        //     let canvas = this.node.getComponent(cc.Canvas);
        //     this.joyStick.scale = (isHorizontal) ? 0.5 : 1.8;
        //     // this.btnContinue.children[0].scale = (isHorizontal) ? 0.25 : 0.6;
        //     // this.camera3D.zoomRatio = (isHorizontal) ? 2 : 1.5;
        //     // this.camera3D.node.eulerAngles = (isHorizontal) ? cc.v3(-43, 0, 0) : cc.v3(-46, 0, 0)
        //     // canvas.fitHeight = (isHorizontal) ? true : false;
        //     // canvas.fitWidth = (isHorizontal) ? false : true;
        // }
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.responsive();
    };
    NewClass.prototype.start = function () {
        this.charComp = this.char.getComponent(Char_1.default);
        cc.director.getPhysics3DManager().enabled = true;
        window.gameReady && window.gameReady();
        // let manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        cc.audioEngine.play(this.soundBg, true, 0.5);
        // this.scheduleOnce(() => {
        //     this.moveCam1()
        // }, 0.3)
        // this.createKh()
    };
    NewClass.prototype.createKh = function () {
        var _this = this;
        var firtPos = [cc.v3(-64, 3.5, 15), cc.v3(-61, 3.5, 15), cc.v3(-58, 3.5, 15)];
        var _loop_1 = function (i) {
            if (i % 2 != 0) {
                var _loop_2 = function (j) {
                    var rd = Math.floor(Math.random() * this_1.listKHPre.length);
                    var kh = cc.instantiate(this_1.listKHPre[rd]);
                    kh.parent = this_1.node.getChildByName("kh");
                    // let row = i % 3
                    var col = i;
                    kh.localpos = firtPos[j].add(cc.v3(0, 0, 3 * col));
                    kh.position = kh.localpos.add(cc.v3(0, 0, 10));
                    kh.children[0].getComponent(cc.Animation).play("Walk");
                    this_1.arrKHMan.push(kh);
                    // this.arrKHpos[row].push(kh.localpos)
                    this_1.arrPosCus.push(kh.localpos);
                    cc.tween(kh).to(1, { position: kh.localpos }).call(function () {
                        kh.children[0].getComponent(cc.Animation).play("Idle 1");
                        kh.getChildByName("pop").getComponent(cc.Animation).play("pop_show");
                    }).start();
                };
                for (var j = 2; j >= 0; j--) {
                    _loop_2(j);
                }
            }
            else {
                var _loop_3 = function (j) {
                    var rd = Math.floor(Math.random() * this_1.listKHPre.length);
                    var kh = cc.instantiate(this_1.listKHPre[rd]);
                    kh.parent = this_1.node.getChildByName("kh");
                    // let row = i % 3
                    var col = i;
                    kh.localpos = firtPos[j].add(cc.v3(0, 0, 3 * col));
                    kh.position = kh.localpos.add(cc.v3(0, 0, 10));
                    kh.children[0].getComponent(cc.Animation).play("Walk");
                    this_1.arrKHMan.push(kh);
                    // this.arrKHpos[row].push(kh.localpos)
                    this_1.arrPosCus.push(kh.localpos);
                    cc.tween(kh).to(1, { position: kh.localpos }).call(function () {
                        kh.children[0].getComponent(cc.Animation).play("Idle 1");
                        kh.getChildByName("pop").getComponent(cc.Animation).play("pop_show");
                        if (i == 2 && j == 2) {
                            _this.scheduleOnce(function () {
                                _this.phase1();
                            }, 0.5);
                        }
                    }).start();
                };
                for (var j = 0; j < 3; j++) {
                    _loop_3(j);
                }
            }
        };
        var this_1 = this;
        // for (let i = 0; i < 15; i++) {
        //     let rd = Math.floor(Math.random() * this.listKHPre.length)
        //     let kh = cc.instantiate(this.listKHPre[rd])
        //     kh.parent = this.node.getChildByName("kh")
        //     let row = i % 3
        //     let col = Math.floor(i / 3)
        //     kh.localpos = firtPos[row].add(cc.v3(0, 0, 3 * col))
        //     kh.position = kh.localpos.add(cc.v3(0, 0, 10))
        //     kh.children[0].getComponent(cc.Animation).play("Walk")
        //     this.arrKHMan.push(kh)
        //     this.arrKHpos[row].push(kh.localpos)
        //     this.arrPosCus.push(kh.localpos)
        //     cc.tween(kh).to(1, { position: kh.localpos }).call(() => {
        //         kh.children[0].getComponent(cc.Animation).play("Idle 1")
        //         kh.getChildByName("pop").getComponent(cc.Animation).play("pop_show")
        //         if (i == 14) {
        //             this.scheduleOnce(()=>{
        //                 this.phase1()
        //             },0.5)
        //         }
        //     }).start()
        // }
        for (var i = 0; i < 5; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.offGuild = function () {
        this.shadow.active = false;
        this.listArrow.children[0].active = true;
    };
    NewClass.prototype.stepEnd = function () {
        this.linkToStore.active = true;
        this.linkToStore.getComponent("AdManager").openAdUrl();
        this.joyStick.getComponent(JoyStick_1.default).touchEndEvent();
        this.joyStick.active = false;
    };
    NewClass.prototype.phase1 = function () {
        this.charComp.isCompleteCarry = false;
        this.joyStick.active = true;
        this.isCutScene = false;
        this.shadow.active = true;
        // console.log(localpos)
        // cc.tween(this.camera3D.node).to(0.5, { position: cc.v3(-65, 26, 13) }).delay(0.5).to(0.5, { position: localpos }).call(() => {
        // this.charComp.isCompleteCarry = false
        // this.joyStick.active = true
        // this.isCutScene = false
        // }).start()
    };
    // step1() {
    //     if (this.isStep == 1) {
    //         this.charComp.isCompleteCarry = true;
    //         this.arrow1.active = false;
    //         this.text.position = this.char.position
    //         this.text.getComponent(cc.Animation).play();
    //         this.arrow2.active = true;
    //         this.banGhe1.getComponent(cc.Animation).play("bo_showcash")
    //         // this.unlockNode1.getComponent(cc.Collider3D).enabled=false
    //         this.isStep = 2;
    //         this.scheduleOnce(() => {
    //             this.charComp.isCompleteCarry = false;
    //         }, 0.5)
    //     }
    //     else if (this.isStep == 4) {
    //         this.charComp.isCompleteCarry = true;
    //         this.countMoney -= 50;
    //         this.lbMoney.string = this.countMoney.toString()
    //         this.isStep = 5
    //         let pos = this.unlockNode1.position;
    //         pos = this.unlockNode1.parent.convertToWorldSpaceAR(pos);
    //         this.arrow2.active = true;
    //         this.charComp.transMoney(pos)
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundUd, false, 1);
    //             this.arrow1.active = false
    //             this.unlockNode1.active = false
    //             this.listBanGhe.children[1].active = true;
    //         })
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundUd, false, 1);
    //             this.listBanGhe.children[0].getComponent(cc.Animation).play("bo_showcash")
    //             // this.listBanGhe.children[1].getComponent(cc.Animation).play("bo_showcash")
    //             this.charComp.isCompleteCarry = false;
    //             // this.kh1.getComponent(cc.Animation).play()
    //             // this.kh1.getComponent("Customer").move()
    //             this.kh2.getComponent(cc.Animation).play()
    //             this.kh2.getComponent("Customer").move()
    //         }, 0.8)
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundUd, false, 1);
    //             this.listKH.getComponent(cc.Animation).play()
    //         }, 1)
    //     }
    // }
    // step2() {
    //     console.log("step2222", this.isStep)
    //     if (this.isStep == 2) {
    //         this.charComp.isCompleteCarry = true;
    //         cc.audioEngine.play(this.soundUd, false, 1);
    //         this.arrow2.active = false;
    //         this.banGhe1.getComponent(cc.Animation).play()
    //         this.isStep = 3
    //         // this.joyStick.getComponent(JoyStick).isCutScene=true
    //         // this.joyStick.getComponent(JoyStick).touchEndEvent()
    //         this.scheduleOnce(() => {
    //             this.arrow3.active = true;
    //             this.isCutScene = true
    //             this.isCutScene = true;
    //             let localpos = this.camera3D.node.position
    //             console.log(localpos)
    //             cc.tween(this.camera3D.node).to(0.5, { position: cc.v3(-61, 41, 42) }).delay(0.5).to(0.5, { position: localpos }).call(() => {
    //                 this.charComp.isCompleteCarry = false;
    //                 this.isCutScene = false
    //             }).start()
    //         }, 1)
    //     }
    //     else if (this.isStep == 5) {
    //         this.arrow2.active = false;
    //         // this.charComp.isCompleteCarry = true;
    //         cc.audioEngine.play(this.soundUd, false, 1);
    //         this.isStep = 6
    //         // this.arrow2.active = false;
    //         this.banGhe1.getComponent(cc.Animation).play();
    //         this.scheduleOnce(() => {
    //             this.arrow3.active = true
    //         })
    //     }
    // }
    NewClass.prototype.getMoney = function () {
        var _this = this;
        // this.arrKHMan[0].active = false
        this.countUD++;
        if (this.countUD == 4) {
            this.unlockNode.active = true;
            this.unlockNode.getComponent(cc.BoxCollider3D).enabled = true;
            this.unlockNode.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', this.unlockNode.getComponent(cc.Sprite)));
            this.node.getChildByName("arrowEnd").active = true;
            this.listArrow.active = false;
        }
        console.log("get money");
        this.charComp.isBanhMi = false;
        var childleave = this.arrKHMan[0];
        childleave.children[0].getComponent(cc.SkeletonAnimation).play("Walk");
        childleave.children[1].getComponent(cc.Animation).play("pop_close");
        childleave.eulerAngles = cc.v3(0, 90, 0);
        this.char.getComponent("Char").bag.active = false;
        cc.tween(this.arrKHMan[0]).by(0.5, { position: cc.v3(-5, 0, 0) }).set({ eulerAngles: cc.v3(0, 180, 0) }).by(2, { position: cc.v3(0, 0, 20) }).call(function () { childleave.active = false; }).start();
        var _loop_4 = function (i) {
            var pos = this_2.arrPosCus[i - 1];
            var child = this_2.arrKHMan[i];
            cc.tween(child).to(0.5, { position: pos }).call(function () {
                if (i == _this.arrKHMan.length - 1) {
                    _this.arrKHMan.splice(0, 1);
                }
                // child.getComponent("Char").idle()
            }).start();
        };
        var this_2 = this;
        for (var i = 1; i < this.arrKHMan.length; i++) {
            _loop_4(i);
        }
        cc.audioEngine.play(this.soundUd, false, 1);
        this.charComp.isCompleteCarry = true;
        this.effMoney.node.active = true;
        this.effMoney.getComponent(cc.Animation).play();
        // this.charComp.createMoney()
        this.scheduleOnce(function () {
            _this.countMoney += 8;
            console.log("dem money");
            _this.lbMoney.string = _this.countMoney.toString();
            // if (this.isStep == 4) {
            //     console.log("onnn")
            //     // this.arrow1.active = true;
            //     this.kh1.getComponent(cc.Animation).play()
            //     this.kh1.getComponent("Customer").move()
            // }
            // else {
            //     // this.arrow5.active = true
            //     this.scheduleOnce(() => {
            //         this.endGame.active = true;
            //         this.linkToStore.active = true
            //     }, 0.3)
            // }
            _this.charComp.isCompleteCarry = false;
        }, 0.5);
    };
    // transMoney(){
    // }
    NewClass.prototype.update = function (dt) {
        // this.camera3D.node.setPosition(this.char.position.add(cc.v3(0, 30, 26)).clampf(cc.v3(-9, 30, 38), cc.v3(9, 30, 30)));
        // if (!this.isCutScene) {
        //     this.camera3D.node.setPosition(this.char.position.add(cc.v3(0, 30 * 1.3, 26 * 1.3)));
        // }
        this.responsive();
    };
    NewClass.prototype.responsive = function () {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // this.fitCamera.zoomRatio = 0.8
                // this.mainCamera.zoomRatio = 0.7
                // this.mainCamera.node.position = this.mainCamera.node.position.add( cc.v3(-100, 0))
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.camera3D.zoomRatio = 1;
                // for (let child of this.uiFit.children) {
                //     child.scale = child.scale * 0.5;
                // }
                // this.uiFit.scaleX = 0.8
                // this.uiFit.scaleY = 0.8
            }
        }
        else {
            this.isvertical = false;
            this.camera3D.zoomRatio = 1.5;
            // this.uiFit.children[0].scale = 0.4
            // this.uiFit.children[1].scale = 1
            // this.fitCamera.zoomRatio = 1
            // this.mainCamera.zoomRatio = 1.3
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "joyStick", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handGuide", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera3D", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "listKHPre", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "shadow", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera2D", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbMoney", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listArrow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "effMoney", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBanGhe", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "kh1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "kh2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKH", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endGame", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "unlockNode", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcTVJfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBaUM7QUFDakMsK0JBQTBCO0FBSXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBRXRCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeVlDO1FBdllHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFnQixFQUFFLENBQUE7UUFFM0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFFN0IsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IscUJBQXFCO1FBQ3JCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIseUJBQXlCO1FBRXpCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBQzlCLHFCQUFxQjtRQUNyQiwrQkFBK0I7UUFFL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsU0FBRyxH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U0FBUyxDQUFDOzZDQUNLO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQVMzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFRckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUk5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQTNEVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeVk1QjtJQUFELGVBQUM7Q0F6WUQsQUF5WUMsQ0F6WXFDLEVBQUUsQ0FBQyxTQUFTLEdBeVlqRDtrQkF6WW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95U3RpY2sgZnJvbSAnLi9Kb3lTdGljaydcbmltcG9ydCBDaGFyIGZyb20gXCIuL0NoYXJcIjtcblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmdsb2JhbFRoaXMubW9uZXkgPSAyMDtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgam95U3RpY2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmRHdWlkZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBjYW1lcmEzRDogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGxpc3RLSFByZTogY2MuUHJlZmFiW10gPSBbXVxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNoYWRvdzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIGNhbWVyYTJEOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk1vbmV5OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFVkOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFB1dDogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gYXJyb3cxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBhcnJvdzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGFycm93NDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEFycm93OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXh0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBiYW5HaGUxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBhcnJvdzM6IGNjLk5vZGUgPSBudWxsXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gYXJyb3c1OiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgZWZmTW9uZXk6IGNjLkFuaW1hdGlvbiA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gdW5sb2NrTm9kZTE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RCYW5HaGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2gxOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGtoMjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0S0g6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZEdhbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVubG9ja05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGNoYXJDb21wID0gbnVsbDtcbiAgICBpc0hvcml6b250YWwgPSB0cnVlO1xuICAgIGlzQ3V0U2NlbmUgPSBmYWxzZTtcbiAgICBpc1N0ZXAgPSAxO1xuICAgIGlzdmVydGljYWwgPSBmYWxzZTtcbiAgICBjb3VudE1vbmV5ID0gMjA7XG4gICAgYXJyS0hNYW4gPSBbXVxuICAgIGFycktIcG9zID0gW1tdLCBbXSwgW11dXG4gICAgYXJyUG9zQ3VzID0gW11cbiAgICBjb3VudFVEID0gMFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlKCk7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5jaGFyQ29tcCA9IHRoaXMuY2hhci5nZXRDb21wb25lbnQoQ2hhcik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3MzRE1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG4gICAgICAgIC8vIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KTtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5tb3ZlQ2FtMSgpXG4gICAgICAgIC8vIH0sIDAuMylcbiAgICAgICAgLy8gdGhpcy5jcmVhdGVLaCgpXG4gICAgfVxuICAgIGNyZWF0ZUtoKCkge1xuICAgICAgICBsZXQgZmlydFBvcyA9IFtjYy52MygtNjQsIDMuNSwgMTUpLCBjYy52MygtNjEsIDMuNSwgMTUpLCBjYy52MygtNTgsIDMuNSwgMTUpXVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICAgICAgLy8gICAgIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEtIUHJlLmxlbmd0aClcbiAgICAgICAgLy8gICAgIGxldCBraCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEtIUHJlW3JkXSlcbiAgICAgICAgLy8gICAgIGtoLnBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImtoXCIpXG4gICAgICAgIC8vICAgICBsZXQgcm93ID0gaSAlIDNcbiAgICAgICAgLy8gICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKGkgLyAzKVxuICAgICAgICAvLyAgICAga2gubG9jYWxwb3MgPSBmaXJ0UG9zW3Jvd10uYWRkKGNjLnYzKDAsIDAsIDMgKiBjb2wpKVxuICAgICAgICAvLyAgICAga2gucG9zaXRpb24gPSBraC5sb2NhbHBvcy5hZGQoY2MudjMoMCwgMCwgMTApKVxuICAgICAgICAvLyAgICAga2guY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIldhbGtcIilcbiAgICAgICAgLy8gICAgIHRoaXMuYXJyS0hNYW4ucHVzaChraClcbiAgICAgICAgLy8gICAgIHRoaXMuYXJyS0hwb3Nbcm93XS5wdXNoKGtoLmxvY2FscG9zKVxuICAgICAgICAvLyAgICAgdGhpcy5hcnJQb3NDdXMucHVzaChraC5sb2NhbHBvcylcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKGtoKS50bygxLCB7IHBvc2l0aW9uOiBraC5sb2NhbHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSWRsZSAxXCIpXG4gICAgICAgIC8vICAgICAgICAga2guZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvcF9zaG93XCIpXG4gICAgICAgIC8vICAgICAgICAgaWYgKGkgPT0gMTQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMucGhhc2UxKClcblxuICAgICAgICAvLyAgICAgICAgICAgICB9LDAuNSlcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KS5zdGFydCgpXG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSAlIDIgIT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAyOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RLSFByZS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGxldCBraCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEtIUHJlW3JkXSlcbiAgICAgICAgICAgICAgICAgICAga2gucGFyZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwia2hcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHJvdyA9IGkgJSAzXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2wgPSBpXG4gICAgICAgICAgICAgICAgICAgIGtoLmxvY2FscG9zID0gZmlydFBvc1tqXS5hZGQoY2MudjMoMCwgMCwgMyAqIGNvbCkpXG4gICAgICAgICAgICAgICAgICAgIGtoLnBvc2l0aW9uID0ga2gubG9jYWxwb3MuYWRkKGNjLnYzKDAsIDAsIDEwKSlcbiAgICAgICAgICAgICAgICAgICAga2guY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIldhbGtcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJLSE1hbi5wdXNoKGtoKVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFycktIcG9zW3Jvd10ucHVzaChraC5sb2NhbHBvcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJQb3NDdXMucHVzaChraC5sb2NhbHBvcylcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oa2gpLnRvKDEsIHsgcG9zaXRpb246IGtoLmxvY2FscG9zIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2guY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIklkbGUgMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAga2guZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvcF9zaG93XCIpXG5cbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEtIUHJlLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtoID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0S0hQcmVbcmRdKVxuICAgICAgICAgICAgICAgICAgICBraC5wYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJraFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgcm93ID0gaSAlIDNcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbCA9IGlcbiAgICAgICAgICAgICAgICAgICAga2gubG9jYWxwb3MgPSBmaXJ0UG9zW2pdLmFkZChjYy52MygwLCAwLCAzICogY29sKSlcbiAgICAgICAgICAgICAgICAgICAga2gucG9zaXRpb24gPSBraC5sb2NhbHBvcy5hZGQoY2MudjMoMCwgMCwgMTApKVxuICAgICAgICAgICAgICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiV2Fsa1wiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycktITWFuLnB1c2goa2gpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYXJyS0hwb3Nbcm93XS5wdXNoKGtoLmxvY2FscG9zKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclBvc0N1cy5wdXNoKGtoLmxvY2FscG9zKVxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihraCkudG8oMSwgeyBwb3NpdGlvbjoga2gubG9jYWxwb3MgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSWRsZSAxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBraC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX3Nob3dcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDIgJiYgaiA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlMSgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2ZmR3VpbGQoKSB7XG4gICAgICAgIHRoaXMuc2hhZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpc3RBcnJvdy5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgfVxuICAgIHN0ZXBFbmQoKSB7XG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmdldENvbXBvbmVudChcIkFkTWFuYWdlclwiKS5vcGVuQWRVcmwoKVxuICAgICAgICB0aGlzLmpveVN0aWNrLmdldENvbXBvbmVudChKb3lTdGljaykudG91Y2hFbmRFdmVudCgpXG4gICAgICAgIHRoaXMuam95U3RpY2suYWN0aXZlID0gZmFsc2VcbiAgICB9XG4gICAgcGhhc2UxKCkge1xuICAgICAgICB0aGlzLmNoYXJDb21wLmlzQ29tcGxldGVDYXJyeSA9IGZhbHNlXG4gICAgICAgIHRoaXMuam95U3RpY2suYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzQ3V0U2NlbmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnNoYWRvdy5hY3RpdmUgPSB0cnVlXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FscG9zKVxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYTNELm5vZGUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTY1LCAyNiwgMTMpIH0pLmRlbGF5KDAuNSkudG8oMC41LCB7IHBvc2l0aW9uOiBsb2NhbHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZVxuICAgICAgICAvLyB0aGlzLmpveVN0aWNrLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgLy8gdGhpcy5pc0N1dFNjZW5lID0gZmFsc2VcbiAgICAgICAgLy8gfSkuc3RhcnQoKVxuICAgIH1cbiAgICAvLyBzdGVwMSgpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNTdGVwID09IDEpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyb3cxLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgdGhpcy50ZXh0LnBvc2l0aW9uID0gdGhpcy5jaGFyLnBvc2l0aW9uXG4gICAgLy8gICAgICAgICB0aGlzLnRleHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgIC8vICAgICAgICAgdGhpcy5hcnJvdzIuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuYmFuR2hlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9fc2hvd2Nhc2hcIilcbiAgICAvLyAgICAgICAgIC8vIHRoaXMudW5sb2NrTm9kZTEuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyM0QpLmVuYWJsZWQ9ZmFsc2VcbiAgICAvLyAgICAgICAgIHRoaXMuaXNTdGVwID0gMjtcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNoYXJDb21wLmlzQ29tcGxldGVDYXJyeSA9IGZhbHNlO1xuXG4gICAgLy8gICAgICAgICB9LCAwLjUpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gNCkge1xuICAgIC8vICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSB0cnVlO1xuICAgIC8vICAgICAgICAgdGhpcy5jb3VudE1vbmV5IC09IDUwO1xuICAgIC8vICAgICAgICAgdGhpcy5sYk1vbmV5LnN0cmluZyA9IHRoaXMuY291bnRNb25leS50b1N0cmluZygpXG4gICAgLy8gICAgICAgICB0aGlzLmlzU3RlcCA9IDVcbiAgICAvLyAgICAgICAgIGxldCBwb3MgPSB0aGlzLnVubG9ja05vZGUxLnBvc2l0aW9uO1xuICAgIC8vICAgICAgICAgcG9zID0gdGhpcy51bmxvY2tOb2RlMS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcyk7XG4gICAgLy8gICAgICAgICB0aGlzLmFycm93Mi5hY3RpdmUgPSB0cnVlO1xuXG4gICAgLy8gICAgICAgICB0aGlzLmNoYXJDb21wLnRyYW5zTW9uZXkocG9zKVxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSk7XG5cbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFycm93MS5hY3RpdmUgPSBmYWxzZVxuICAgIC8vICAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZTEuYWN0aXZlID0gZmFsc2VcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxpc3RCYW5HaGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKTtcblxuICAgIC8vICAgICAgICAgICAgIHRoaXMubGlzdEJhbkdoZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9fc2hvd2Nhc2hcIilcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmxpc3RCYW5HaGUuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImJvX3Nob3djYXNoXCIpXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmtoMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmtoMS5nZXRDb21wb25lbnQoXCJDdXN0b21lclwiKS5tb3ZlKClcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmtoMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmtoMi5nZXRDb21wb25lbnQoXCJDdXN0b21lclwiKS5tb3ZlKClcbiAgICAvLyAgICAgICAgIH0sIDAuOClcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMubGlzdEtILmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgIC8vICAgICAgICAgfSwgMSlcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuICAgIC8vIHN0ZXAyKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInN0ZXAyMjIyXCIsIHRoaXMuaXNTdGVwKVxuICAgIC8vICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xuICAgIC8vICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSB0cnVlO1xuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKTtcblxuICAgIC8vICAgICAgICAgdGhpcy5hcnJvdzIuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICB0aGlzLmJhbkdoZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgLy8gICAgICAgICB0aGlzLmlzU3RlcCA9IDNcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuam95U3RpY2suZ2V0Q29tcG9uZW50KEpveVN0aWNrKS5pc0N1dFNjZW5lPXRydWVcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuam95U3RpY2suZ2V0Q29tcG9uZW50KEpveVN0aWNrKS50b3VjaEVuZEV2ZW50KClcblxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJvdzMuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQ3V0U2NlbmUgPSB0cnVlXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0N1dFNjZW5lID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICBsZXQgbG9jYWxwb3MgPSB0aGlzLmNhbWVyYTNELm5vZGUucG9zaXRpb25cbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbHBvcylcbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTNELm5vZGUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTYxLCA0MSwgNDIpIH0pLmRlbGF5KDAuNSkudG8oMC41LCB7IHBvc2l0aW9uOiBsb2NhbHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc0N1dFNjZW5lID0gZmFsc2VcbiAgICAvLyAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgLy8gICAgICAgICB9LCAxKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDUpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyb3cyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNoYXJDb21wLmlzQ29tcGxldGVDYXJyeSA9IHRydWU7XG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xuICAgIC8vICAgICAgICAgdGhpcy5pc1N0ZXAgPSA2XG4gICAgLy8gICAgICAgICAvLyB0aGlzLmFycm93Mi5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMuYmFuR2hlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJvdzMuYWN0aXZlID0gdHJ1ZVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuICAgIGdldE1vbmV5KCkge1xuICAgICAgICAvLyB0aGlzLmFycktITWFuWzBdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuY291bnRVRCsrXG4gICAgICAgIGlmICh0aGlzLmNvdW50VUQgPT0gNCkge1xuICAgICAgICAgICAgdGhpcy51bmxvY2tOb2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIzRCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVubG9ja05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCAgdGhpcy51bmxvY2tOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd0VuZFwiKS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmxpc3RBcnJvdy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IG1vbmV5XCIpXG4gICAgICAgIHRoaXMuY2hhckNvbXAuaXNCYW5oTWkgPSBmYWxzZVxuICAgICAgICBsZXQgY2hpbGRsZWF2ZSA9IHRoaXMuYXJyS0hNYW5bMF1cbiAgICAgICAgY2hpbGRsZWF2ZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU2tlbGV0b25BbmltYXRpb24pLnBsYXkoXCJXYWxrXCIpXG4gICAgICAgIGNoaWxkbGVhdmUuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvcF9jbG9zZVwiKVxuICAgICAgICBjaGlsZGxlYXZlLmV1bGVyQW5nbGVzID0gY2MudjMoMCwgOTAsIDApXG4gICAgICAgIHRoaXMuY2hhci5nZXRDb21wb25lbnQoXCJDaGFyXCIpLmJhZy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBjYy50d2Vlbih0aGlzLmFycktITWFuWzBdKS5ieSgwLjUsIHsgcG9zaXRpb246IGNjLnYzKC01LCAwLCAwKSB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoMCwgMTgwLCAwKSB9KS5ieSgyLCB7IHBvc2l0aW9uOiBjYy52MygwLCAwLCAyMCkgfSkuY2FsbCgoKSA9PiB7IGNoaWxkbGVhdmUuYWN0aXZlID0gZmFsc2UgfSkuc3RhcnQoKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5hcnJLSE1hbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYXJyUG9zQ3VzW2kgLSAxXVxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJLSE1hbltpXVxuXG4gICAgICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC41LCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5hcnJLSE1hbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyS0hNYW4uc3BsaWNlKDAsIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNoaWxkLmdldENvbXBvbmVudChcIkNoYXJcIikuaWRsZSgpXG5cbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSk7XG4gICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmVmZk1vbmV5Lm5vZGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmVmZk1vbmV5LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAvLyB0aGlzLmNoYXJDb21wLmNyZWF0ZU1vbmV5KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb3VudE1vbmV5ICs9IDg7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbSBtb25leVwiKVxuICAgICAgICAgICAgdGhpcy5sYk1vbmV5LnN0cmluZyA9IHRoaXMuY291bnRNb25leS50b1N0cmluZygpO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNTdGVwID09IDQpIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIm9ubm5cIilcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmFycm93MS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMua2gxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgLy8gICAgIHRoaXMua2gxLmdldENvbXBvbmVudChcIkN1c3RvbWVyXCIpLm1vdmUoKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5hcnJvdzUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5lbmRHYW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgICAgICAvLyAgICAgfSwgMC4zKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZTtcblxuICAgICAgICB9LCAwLjUpXG5cbiAgICB9XG5cbiAgICAvLyB0cmFuc01vbmV5KCl7XG5cbiAgICAvLyB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vIHRoaXMuY2FtZXJhM0Qubm9kZS5zZXRQb3NpdGlvbih0aGlzLmNoYXIucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwLCAyNikpLmNsYW1wZihjYy52MygtOSwgMzAsIDM4KSwgY2MudjMoOSwgMzAsIDMwKSkpO1xuICAgICAgICAvLyBpZiAoIXRoaXMuaXNDdXRTY2VuZSkge1xuICAgICAgICAvLyAgICAgdGhpcy5jYW1lcmEzRC5ub2RlLnNldFBvc2l0aW9uKHRoaXMuY2hhci5wb3NpdGlvbi5hZGQoY2MudjMoMCwgMzAgKiAxLjMsIDI2ICogMS4zKSkpO1xuXG4gICAgICAgIC8vIH1cblxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcbiAgICB9XG4gICAgcmVzcG9uc2l2ZSgpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5maXRDYW1lcmEuem9vbVJhdGlvID0gMC44XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDAuN1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uID0gdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24uYWRkKCBjYy52MygtMTAwLCAwKSlcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYTNELnpvb21SYXRpbz0xXG5cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLnVpRml0LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkLnNjYWxlID0gY2hpbGQuc2NhbGUgKiAwLjU7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuc2NhbGVYID0gMC44XG4gICAgICAgICAgICAgICAgLy8gdGhpcy51aUZpdC5zY2FsZVkgPSAwLjhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYTNELnpvb21SYXRpbz0xLjVcbiAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuY2hpbGRyZW5bMF0uc2NhbGUgPSAwLjRcbiAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuY2hpbGRyZW5bMV0uc2NhbGUgPSAxXG5cbiAgICAgICAgICAgIC8vIHRoaXMuZml0Q2FtZXJhLnpvb21SYXRpbyA9IDFcbiAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAxLjNcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIHNldFNjcmVlblNpemUoaXNIb3Jpem9udGFsKSB7IC8vIHJlc3BvbnNpdmUgZ2FtZSBuZ2FuZyBkb2NcbiAgICAvLyAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAvLyAgICAgdGhpcy5qb3lTdGljay5zY2FsZSA9IChpc0hvcml6b250YWwpID8gMC41IDogMS44O1xuICAgIC8vICAgICAvLyB0aGlzLmJ0bkNvbnRpbnVlLmNoaWxkcmVuWzBdLnNjYWxlID0gKGlzSG9yaXpvbnRhbCkgPyAwLjI1IDogMC42O1xuICAgIC8vICAgICAvLyB0aGlzLmNhbWVyYTNELnpvb21SYXRpbyA9IChpc0hvcml6b250YWwpID8gMiA6IDEuNTtcbiAgICAvLyAgICAgLy8gdGhpcy5jYW1lcmEzRC5ub2RlLmV1bGVyQW5nbGVzID0gKGlzSG9yaXpvbnRhbCkgPyBjYy52MygtNDMsIDAsIDApIDogY2MudjMoLTQ2LCAwLCAwKVxuICAgIC8vICAgICAvLyBjYW52YXMuZml0SGVpZ2h0ID0gKGlzSG9yaXpvbnRhbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgLy8gICAgIC8vIGNhbnZhcy5maXRXaWR0aCA9IChpc0hvcml6b250YWwpID8gZmFsc2UgOiB0cnVlO1xuICAgIC8vIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/PlayAudio.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96432PCpEpC3448V1GpNkdv', 'PlayAudio');
// scripts/common/PlayAudio.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
function gameStart() {
  console.log("haha");
}

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    gameStart();
  } // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxQbGF5QXVkaW8uanMiXSwibmFtZXMiOlsiZ2FtZVN0YXJ0IiwiY29uc29sZSIsImxvZyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNIOztBQUNEQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJHO0FBQ0pQLElBQUFBLFNBQVM7QUFDWixHQTNCSSxDQStCTDs7QUEvQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbmZ1bmN0aW9uIGdhbWVTdGFydCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImhhaGFcIik7XG59XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBnYW1lU3RhcnQoKTtcbiAgICB9LFxuXG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/banGhe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '643f7vZMjBBIKLBPU60hGEM', 'banGhe');
// scripts/banGhe.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFuR2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/KF_2/Char.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f57247rIspPNKwUuyjq9OYW', 'Char');
// scripts/KF_2/Char.ts

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
        _this.speedRun = 250;
        _this.listCarry = null;
        _this.bapNgoPrefab = null;
        _this.quaCachuaPrefab = null;
        _this.soundCollect = null;
        _this.soundPut = null;
        _this.bag = null;
        _this.gamePlay = null;
        _this.isCarrying = false;
        _this.isCompleteCarry = false;
        _this.numCarry = 0;
        _this.angle = 0;
        _this.isRun = false;
        _this.moveDir = null;
        _this.directionX = null;
        _this.numCachua = 0;
        _this.numNgo = 0;
        _this.isBanhMi = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent(GamePlay_1.default);
        this.isCompleteCarry = true;
    };
    NewClass.prototype.run = function () {
        if (!this.isRun && !this.isCompleteCarry) {
            this.isRun = true;
            // let animName = (this.isCarrying) ? 'Run 2' : 'Run 1';
            var animName = 'Run stack';
            this.bodySkeletonAnimation.play(animName);
        }
    };
    NewClass.prototype.addBanhMi = function () {
        if (!this.isBanhMi) {
            cc.audioEngine.play(this.soundPut, false, 1);
            this.isBanhMi = true;
            this.bag.active = true;
            console.log("add Bm");
            var animName = 'Run stack';
            this.bodySkeletonAnimation.play(animName);
        }
    };
    NewClass.prototype.idle = function () {
        this.isRun = false;
        // let animName = (this.isCarrying) ? 'Idle 2' : 'Idle 1';
        var animName = 'Idle';
        if (this.isBanhMi) {
            animName = "Run stack";
        }
        this.bodySkeletonAnimation.play(animName);
    };
    NewClass.prototype.createMoney = function () {
        // for (let i = 0; i < 8; i++) {
        this.addItem("cayngo");
        // }
    };
    NewClass.prototype.transMoney = function (pos) {
        var _this = this;
        pos = this.listCarry.convertToNodeSpaceAR(pos);
        console.log("transMoney");
        var count = 0;
        var _loop_1 = function (i) {
            cc.tween(this_1.listCarry.children[i]).delay(count * 0.02).to(0.3, { position: pos }).call(function () {
                _this.listCarry.children[i].destroy();
            }).start();
            count++;
        };
        var this_1 = this;
        for (var i = this.listCarry.childrenCount - 1; i >= 0; i--) {
            _loop_1(i);
        }
    };
    NewClass.prototype.addItem = function (item) {
        if (this.numCarry < 32) {
            // this.gamePlay.arrowGarden.active = false;
            // if (this.gamePlay.countCustomer < 4) this.gamePlay.arrowKe.active = true;
            this.isCarrying = true;
            // let animName = (this.isCarrying) ? 'Run 2' : 'Run 1';
            // this.bodySkeletonAnimation.play(animName);
            this.numCarry += 2;
            for (var i = 0; i < 8; i++) {
                var itemNode = null;
                if (item == 'caycachua') {
                    itemNode = cc.instantiate(this.quaCachuaPrefab);
                    this.numCachua += 2;
                }
                if (item == 'cayngo') {
                    itemNode = cc.instantiate(this.bapNgoPrefab);
                    this.numNgo += 2;
                }
                itemNode.setPosition(cc.v3(0, 0.5 + (this.numCarry - i) * 0.4, 0.3));
                this.listCarry.addChild(itemNode);
                // cc.audioEngine.play(this.soundCollect, false, 2);
            }
        }
    };
    NewClass.prototype.completeCarry = function () {
        var _this = this;
        if (this.listCarry.children.length > 0) {
            var timeDelay = this.listCarry.children.length * 0.02;
            if (this.isCompleteCarry)
                return;
            this.isCompleteCarry = true;
            this.listCarry.children.reverse().forEach(function (item, index) {
                _this.scheduleOnce(function () {
                    _this.gamePlay.addItemOnKe(item.name);
                    item.destroy();
                    _this.numCarry--;
                }, index * 0.02);
            });
            this.scheduleOnce(function () {
                _this.isCompleteCarry = false;
                _this.isCarrying = false;
                if (_this.isRun)
                    _this.bodySkeletonAnimation.play('Run 1');
            }, timeDelay);
        }
    };
    NewClass.prototype.update = function (dt) {
        if (this.moveDir && this.directionX && this.isRun && !this.isCompleteCarry) {
            var delta = cc.v3(this.moveDir.x, 0, -this.moveDir.y);
            var newPos = this.node.position.add(delta.mul(this.speedRun / 1300));
            this.node.setPosition(newPos.clampf(cc.v3(-83, 200, 10), cc.v3(-40, 0, -16)));
            // this.node.setPosition(newPos);
            this.node.eulerAngles = cc.v3(0, this.angle, 0);
        }
    };
    __decorate([
        property(cc.SkeletonAnimation)
    ], NewClass.prototype, "bodySkeletonAnimation", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "speedRun", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCarry", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bapNgoPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "quaCachuaPrefab", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCollect", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bag", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcQ2hhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyx1Q0FBaUM7QUFFakM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3SkM7UUFySkcsMkJBQXFCLEdBQXlCLElBQUksQ0FBQztRQUduRCxjQUFRLEdBQUcsR0FBRyxDQUFDO1FBR2YsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUVkLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsWUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNWLGNBQVEsR0FBRyxLQUFLLENBQUE7O0lBNkdwQixDQUFDO0lBNUdHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1B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RSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsaUNBQWlDO1lBRWpDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBcEpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzsyREFDb0I7SUFHbkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDTjtJQUdmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBdEJILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3SjVCO0lBQUQsZUFBQztDQXhKRCxBQXdKQyxDQXhKcUMsRUFBRSxDQUFDLFNBQVMsR0F3SmpEO2tCQXhKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IEdhbWVQbGF5IGZyb20gJy4vR2FtZVBsYXknXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNrZWxldG9uQW5pbWF0aW9uKVxuICAgIGJvZHlTa2VsZXRvbkFuaW1hdGlvbjogY2MuU2tlbGV0b25BbmltYXRpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgc3BlZWRSdW4gPSAyNTA7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q2Fycnk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBiYXBOZ29QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHF1YUNhY2h1YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDb2xsZWN0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRQdXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmFnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGdhbWVQbGF5ID0gbnVsbDtcblxuICAgIGlzQ2FycnlpbmcgPSBmYWxzZTtcblxuICAgIGlzQ29tcGxldGVDYXJyeSA9IGZhbHNlO1xuXG4gICAgbnVtQ2FycnkgPSAwO1xuXG4gICAgYW5nbGUgPSAwO1xuXG4gICAgaXNSdW4gPSBmYWxzZTtcblxuICAgIG1vdmVEaXIgPSBudWxsO1xuXG4gICAgZGlyZWN0aW9uWCA9IG51bGw7XG5cbiAgICBudW1DYWNodWEgPSAwO1xuXG4gICAgbnVtTmdvID0gMFxuICAgIGlzQmFuaE1pID0gZmFsc2VcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoR2FtZVBsYXkpO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVDYXJyeSA9IHRydWU7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSdW4gJiYgIXRoaXMuaXNDb21wbGV0ZUNhcnJ5KSB7XG4gICAgICAgICAgICB0aGlzLmlzUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGxldCBhbmltTmFtZSA9ICh0aGlzLmlzQ2FycnlpbmcpID8gJ1J1biAyJyA6ICdSdW4gMSc7XG4gICAgICAgICAgICBsZXQgYW5pbU5hbWUgPSAnUnVuIHN0YWNrJztcblxuICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheShhbmltTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQmFuaE1pKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNCYW5oTWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRQdXQsIGZhbHNlLCAxKTtcblxuICAgICAgICAgICAgdGhpcy5pc0JhbmhNaSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJhZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgQm1cIilcbiAgICAgICAgICAgIGxldCBhbmltTmFtZSA9ICdSdW4gc3RhY2snO1xuXG4gICAgICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZGxlKCkge1xuICAgICAgICB0aGlzLmlzUnVuID0gZmFsc2U7XG4gICAgICAgIC8vIGxldCBhbmltTmFtZSA9ICh0aGlzLmlzQ2FycnlpbmcpID8gJ0lkbGUgMicgOiAnSWRsZSAxJztcbiAgICAgICAgbGV0IGFuaW1OYW1lID0gJ0lkbGUnO1xuICAgICAgICBpZiAodGhpcy5pc0JhbmhNaSkgeyBhbmltTmFtZSA9IFwiUnVuIHN0YWNrXCIgfVxuICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcbiAgICB9XG4gICAgY3JlYXRlTW9uZXkoKSB7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIHRoaXMuYWRkSXRlbShcImNheW5nb1wiKVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIHRyYW5zTW9uZXkocG9zKSB7XG4gICAgICAgIHBvcyA9IHRoaXMubGlzdENhcnJ5LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc01vbmV5XCIpXG4gICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdENhcnJ5LmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5saXN0Q2FycnkuY2hpbGRyZW5baV0pLmRlbGF5KGNvdW50ICogMC4wMikudG8oMC4zLCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FycnkuY2hpbGRyZW5baV0uZGVzdHJveSgpXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLm51bUNhcnJ5IDwgMzIpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZVBsYXkuYXJyb3dHYXJkZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5nYW1lUGxheS5jb3VudEN1c3RvbWVyIDwgNCkgdGhpcy5nYW1lUGxheS5hcnJvd0tlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzQ2FycnlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gbGV0IGFuaW1OYW1lID0gKHRoaXMuaXNDYXJyeWluZykgPyAnUnVuIDInIDogJ1J1biAxJztcbiAgICAgICAgICAgIC8vIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLnBsYXkoYW5pbU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5udW1DYXJyeSArPSAyO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbU5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtID09ICdjYXljYWNodWEnKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5xdWFDYWNodWFQcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm51bUNhY2h1YSArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PSAnY2F5bmdvJykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFwTmdvUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1OZ28gKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbU5vZGUuc2V0UG9zaXRpb24oY2MudjMoMCwgMC41ICsgKHRoaXMubnVtQ2FycnkgLSBpKSAqIDAuNCwgMC4zKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FycnkuYWRkQ2hpbGQoaXRlbU5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbGxlY3QsIGZhbHNlLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlQ2FycnkoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RDYXJyeS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGltZURlbGF5ID0gdGhpcy5saXN0Q2FycnkuY2hpbGRyZW4ubGVuZ3RoICogMC4wMlxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZUNhcnJ5KSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGVDYXJyeSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJyeS5jaGlsZHJlbi5yZXZlcnNlKCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYWRkSXRlbU9uS2UoaXRlbS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtQ2FycnktLTtcbiAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDAuMDIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FycnlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1J1bikgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheSgnUnVuIDEnKTtcbiAgICAgICAgICAgIH0sIHRpbWVEZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMubW92ZURpciAmJiB0aGlzLmRpcmVjdGlvblggJiYgdGhpcy5pc1J1biAmJiAhdGhpcy5pc0NvbXBsZXRlQ2FycnkpIHtcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGNjLnYzKHRoaXMubW92ZURpci54LCAwLCAtdGhpcy5tb3ZlRGlyLnkpO1xuICAgICAgICAgICAgbGV0IG5ld1BvcyA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoZGVsdGEubXVsKHRoaXMuc3BlZWRSdW4gLyAxMzAwKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zLmNsYW1wZihjYy52MygtODMsIDIwMCwgMTApLCBjYy52MygtNDAsIDAsIC0xNikpKTtcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXdQb3MpO1xuXG4gICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBjYy52MygwLCB0aGlzLmFuZ2xlLCAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/KF_2/JoyStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c03fcxe1ZOs4xcnKAlCewQ', 'JoyStick');
// scripts/KF_2/JoyStick.ts

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
var MR_4_1 = require("./MR_4");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dot = null;
        _this.ring = null;
        // @property(cc.Node)
        // playerLucius: cc.Node = null;
        _this.guild = null;
        _this.radius = null;
        _this.stickPos = null;
        _this.touchLocation = null;
        _this.gamePlay = null;
        _this.offGuide = false;
        _this.isCutScene = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.radius = this.ring.width / 2;
        this.initTouchEvent();
        this.gamePlay = cc.Canvas.instance.node.getComponent(MR_4_1.default);
        // this.scheduleOnce(()=>{
        //     this.guild.active=true
        // },1.5)
    };
    NewClass.prototype.initTouchEvent = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    NewClass.prototype.offTouchEvent = function () {
        this.node.off(cc.Node.EventType.TOUCH_START);
        this.node.off(cc.Node.EventType.TOUCH_MOVE);
        this.node.off(cc.Node.EventType.TOUCH_END);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL);
    };
    NewClass.prototype.touchStartEvent = function (event) {
        if (this.isCutScene)
            return;
        if (!this.offGuide && this.guild.active == true) {
            this.guild.active = false;
            this.offGuide = true;
            cc.Canvas.instance.node.getComponent("MR_4").offGuild();
        }
        this.gamePlay.handGuide.active = false;
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.stickPos = this.ring.getPosition();
        var distance = touchPos.sub(this.ring.getPosition().mag());
        if (this.radius > distance) {
            this.dot.setPosition(touchPos);
        }
        this.gamePlay.charComp.directionX = (this.dot.x > 0) ? -1 : 1;
        this.gamePlay.charComp.run();
        this.stickPos = touchPos;
        this.node.opacity = 255;
        this.touchLocation = event.getLocation();
        this.ring.setPosition(touchPos);
        this.dot.setPosition(touchPos);
    };
    NewClass.prototype.touchMoveEvent = function (event) {
        if (this.isCutScene)
            return;
        if (this.touchLocation === event.getLocation()) {
            return false;
        }
        var touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
        var distance = touchPos.mag();
        var posX = this.stickPos.x + touchPos.x;
        var posY = this.stickPos.y + touchPos.y;
        var p = cc.v2(posX, posY).sub(this.ring.getPosition()).normalize();
        if (this.radius > distance) {
            this.dot.setPosition(cc.v2(posX, posY));
        }
        else {
            var x = this.stickPos.x + p.x * this.radius;
            var y = this.stickPos.y + p.y * this.radius;
            this.dot.setPosition(cc.v2(x, y));
        }
        this.gamePlay.charComp.run();
        this.gamePlay.charComp.moveDir = p;
        this.gamePlay.charComp.directionX = (this.dot.x > 0) ? -1 : 1;
        this.gamePlay.charComp.angle = this.checkAngle(this.dot.x, this.dot.y);
    };
    NewClass.prototype.checkAngle = function (posX, posY) {
        var angle = 0;
        var midPoint = this.ring.position;
        if (posX == midPoint.x && posY != midPoint.y)
            angle = (posY <= midPoint.y) ? 0 : 180;
        if (posY == midPoint.y && posX != midPoint.x)
            angle = (posX <= midPoint.x) ? -90 : 90;
        if (posX != midPoint.x && posY != midPoint.y) {
            var tan = (posX - midPoint.x) / (posY - midPoint.y);
            angle = cc.misc.radiansToDegrees(Math.atan(tan));
            if (posY < midPoint.y && posX > midPoint.x) {
                angle *= -1;
            }
            if (posY < midPoint.y && posX < midPoint.x) {
                angle *= -1;
            }
            if (posY > midPoint.y && posX > midPoint.x) {
                angle = 180 - angle;
            }
            if (posY > midPoint.y && posX < midPoint.x) {
                angle = 180 - angle;
            }
        }
        return angle;
    };
    NewClass.prototype.touchEndEvent = function () {
        if (this.isCutScene)
            return;
        if (this.gamePlay.isEndGame) {
            this.dot.setPosition(cc.v3(0, -183));
            this.ring.setPosition(cc.v3(0, -183));
        }
        else {
            this.dot.setPosition(this.ring.getPosition());
            this.node.opacity = 0;
            this.gamePlay.charComp.idle();
        }
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dot", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ring", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcSm95U3RpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUlDO1FBbElHLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFHcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixxQkFBcUI7UUFDckIsZ0NBQWdDO1FBRWhDLFdBQUssR0FBWSxJQUFJLENBQUE7UUFDckIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUMsS0FBSyxDQUFDOztJQW9IckIsQ0FBQztJQWxIRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsQ0FBQyxDQUFDO1FBQy9ELDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IsU0FBUztJQUNiLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFB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QUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekM7YUFDSTtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7SUFFTCxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQUU7SUFDVCxDQUFDO0lBaklEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUtyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBWEosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFJNUI7SUFBRCxlQUFDO0NBcklELEFBcUlDLENBcklxQyxFQUFFLENBQUMsU0FBUyxHQXFJakQ7a0JBcklvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vTVJfNFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG90OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJpbmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gcGxheWVyTHVjaXVzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGxcbiAgICByYWRpdXMgPSBudWxsO1xuICAgIHN0aWNrUG9zID0gbnVsbDtcbiAgICB0b3VjaExvY2F0aW9uID0gbnVsbDtcbiAgICBnYW1lUGxheSA9IG51bGw7XG4gICAgb2ZmR3VpZGUgPSBmYWxzZTtcbiAgICBpc0N1dFNjZW5lPWZhbHNlO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMucmluZy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMuaW5pdFRvdWNoRXZlbnQoKTtcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChHYW1lUGxheSk7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgIC8vICAgICB0aGlzLmd1aWxkLmFjdGl2ZT10cnVlXG4gICAgICAgIC8vIH0sMS41KVxuICAgIH1cbiAgICBpbml0VG91Y2hFdmVudCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICB9XG4gICAgb2ZmVG91Y2hFdmVudCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xuICAgIH1cbiAgICB0b3VjaFN0YXJ0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYodGhpcy5pc0N1dFNjZW5lKXJldHVybjtcblxuICAgICAgICBpZiAoIXRoaXMub2ZmR3VpZGUmJnRoaXMuZ3VpbGQuYWN0aXZlPT10cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLm9mZkd1aWRlPXRydWVcbiAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIk1SXzRcIikub2ZmR3VpbGQoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaGFuZEd1aWRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgdGhpcy5zdGlja1BvcyA9IHRoaXMucmluZy5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoUG9zLnN1Yih0aGlzLnJpbmcuZ2V0UG9zaXRpb24oKS5tYWcoKSk7XG4gICAgICAgIGlmICh0aGlzLnJhZGl1cyA+IGRpc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbih0b3VjaFBvcylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWVQbGF5LmNoYXJDb21wLmRpcmVjdGlvblggPSAodGhpcy5kb3QueCA+IDApID8gLTEgOiAxO1xuICAgICAgICB0aGlzLmdhbWVQbGF5LmNoYXJDb21wLnJ1bigpO1xuICAgICAgICB0aGlzLnN0aWNrUG9zID0gdG91Y2hQb3M7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLnRvdWNoTG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICB0aGlzLnJpbmcuc2V0UG9zaXRpb24odG91Y2hQb3MpO1xuICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbih0b3VjaFBvcyk7XG5cbiAgICB9XG4gICAgdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYodGhpcy5pc0N1dFNjZW5lKXJldHVybjtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hMb2NhdGlvbiA9PT0gZXZlbnQuZ2V0TG9jYXRpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gdGhpcy5yaW5nLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoUG9zLm1hZygpO1xuICAgICAgICBjb25zdCBwb3NYID0gdGhpcy5zdGlja1Bvcy54ICsgdG91Y2hQb3MueDtcbiAgICAgICAgY29uc3QgcG9zWSA9IHRoaXMuc3RpY2tQb3MueSArIHRvdWNoUG9zLnk7XG5cbiAgICAgICAgY29uc3QgcCA9IGNjLnYyKHBvc1gsIHBvc1kpLnN1Yih0aGlzLnJpbmcuZ2V0UG9zaXRpb24oKSkubm9ybWFsaXplKCk7XG4gICAgICAgIGlmICh0aGlzLnJhZGl1cyA+IGRpc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbihjYy52Mihwb3NYLCBwb3NZKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5zdGlja1Bvcy54ICsgcC54ICogdGhpcy5yYWRpdXM7XG4gICAgICAgICAgICBjb25zdCB5ID0gdGhpcy5zdGlja1Bvcy55ICsgcC55ICogdGhpcy5yYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbihjYy52Mih4LCB5KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lUGxheS5jaGFyQ29tcC5ydW4oKTtcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jaGFyQ29tcC5tb3ZlRGlyID0gcDtcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jaGFyQ29tcC5kaXJlY3Rpb25YID0gKHRoaXMuZG90LnggPiAwKSA/IC0xIDogMTtcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jaGFyQ29tcC5hbmdsZSA9IHRoaXMuY2hlY2tBbmdsZSh0aGlzLmRvdC54LCB0aGlzLmRvdC55KTtcblxuICAgIH1cblxuICAgIGNoZWNrQW5nbGUocG9zWCwgcG9zWSkge1xuICAgICAgICBsZXQgYW5nbGUgPSAwO1xuICAgICAgICBsZXQgbWlkUG9pbnQgPSB0aGlzLnJpbmcucG9zaXRpb247XG4gICAgICAgIGlmIChwb3NYID09IG1pZFBvaW50LnggJiYgcG9zWSAhPSBtaWRQb2ludC55KSBhbmdsZSA9IChwb3NZIDw9IG1pZFBvaW50LnkpID8gMCA6IDE4MDtcbiAgICAgICAgaWYgKHBvc1kgPT0gbWlkUG9pbnQueSAmJiBwb3NYICE9IG1pZFBvaW50LngpIGFuZ2xlID0gKHBvc1ggPD0gbWlkUG9pbnQueCkgPyAtOTAgOiA5MDtcbiAgICAgICAgaWYgKHBvc1ggIT0gbWlkUG9pbnQueCAmJiBwb3NZICE9IG1pZFBvaW50LnkpIHtcbiAgICAgICAgICAgIGxldCB0YW4gPSAocG9zWCAtIG1pZFBvaW50LngpIC8gKHBvc1kgLSBtaWRQb2ludC55KTtcbiAgICAgICAgICAgIGFuZ2xlID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKVxuICAgICAgICAgICAgaWYgKHBvc1kgPCBtaWRQb2ludC55ICYmIHBvc1ggPiBtaWRQb2ludC54KSB7XG4gICAgICAgICAgICAgICAgYW5nbGUgKj0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zWSA8IG1pZFBvaW50LnkgJiYgcG9zWCA8IG1pZFBvaW50LngpIHtcbiAgICAgICAgICAgICAgICBhbmdsZSAqPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3NZID4gbWlkUG9pbnQueSAmJiBwb3NYID4gbWlkUG9pbnQueCkge1xuICAgICAgICAgICAgICAgIGFuZ2xlID0gMTgwIC0gYW5nbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zWSA+IG1pZFBvaW50LnkgJiYgcG9zWCA8IG1pZFBvaW50LngpIHtcbiAgICAgICAgICAgICAgICBhbmdsZSA9IDE4MCAtIGFuZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbmdsZTtcbiAgICB9XG4gICAgdG91Y2hFbmRFdmVudCgpIHtcbiAgICAgICAgaWYodGhpcy5pc0N1dFNjZW5lKXJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5pc0VuZEdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYzKDAsIC0xODMpKTtcbiAgICAgICAgICAgIHRoaXMucmluZy5zZXRQb3NpdGlvbihjYy52MygwLCAtMTgzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbih0aGlzLnJpbmcuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmNoYXJDb21wLmlkbGUoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/AdManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f337+j6dlK4oyeX5iPIsII', 'AdManager');
// scripts/common/AdManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    androidLink: {
      "default": ''
    },
    iosLink: {
      "default": ''
    },
    defaultLink: {
      "default": ''
    }
  },
  openAdUrl: function openAdUrl() {
    //google instant
    // cc.androidInstant.showInstallPrompt('https://play.google.com/store/apps/details?id=com.game.space.shooter2')
    var clickTag = '';
    window.androidLink = this.androidLink;
    window.iosLink = this.iosLink;
    window.defaultLink = this.defaultLink;
    var adchanel = '{{__adv_channels_adapter__}}';

    if (window.openAdUrl) {
      console.log(adchanel);
      window.openAdUrl(adchanel);
    } else {
      window.open();
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxBZE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmRyb2lkTGluayIsImlvc0xpbmsiLCJkZWZhdWx0TGluayIsIm9wZW5BZFVybCIsImNsaWNrVGFnIiwid2luZG93IiwiYWRjaGFuZWwiLCJjb25zb2xlIiwibG9nIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTO0FBREEsS0FETDtBQUlSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUztBQURKLEtBSkQ7QUFPUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQTtBQVBMLEdBSFA7QUFlTEMsRUFBQUEsU0FBUyxFQUFFLHFCQUFVO0FBQ2pCO0FBQ0E7QUFDQSxRQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBQyxJQUFBQSxNQUFNLENBQUNMLFdBQVAsR0FBcUIsS0FBS0EsV0FBMUI7QUFDQUssSUFBQUEsTUFBTSxDQUFDSixPQUFQLEdBQWlCLEtBQUtBLE9BQXRCO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0gsV0FBUCxHQUFxQixLQUFLQSxXQUExQjtBQUNBLFFBQUlJLFFBQVEsR0FBRyw4QkFBZjs7QUFDQSxRQUFHRCxNQUFNLENBQUNGLFNBQVYsRUFBcUI7QUFDakJJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0FELE1BQUFBLE1BQU0sQ0FBQ0YsU0FBUCxDQUFpQkcsUUFBakI7QUFFSCxLQUpELE1BSU87QUFDSEQsTUFBQUEsTUFBTSxDQUFDSSxJQUFQO0FBQ0g7QUFDSjtBQTlCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBhbmRyb2lkTGluazoge1xuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgaW9zTGluazoge1xuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdExpbms6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb3BlbkFkVXJsOiBmdW5jdGlvbigpe1xuICAgICAgICAvL2dvb2dsZSBpbnN0YW50XG4gICAgICAgIC8vIGNjLmFuZHJvaWRJbnN0YW50LnNob3dJbnN0YWxsUHJvbXB0KCdodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmdhbWUuc3BhY2Uuc2hvb3RlcjInKVxuICAgICAgICB2YXIgY2xpY2tUYWcgPSAnJztcbiAgICAgICAgd2luZG93LmFuZHJvaWRMaW5rID0gdGhpcy5hbmRyb2lkTGluaztcbiAgICAgICAgd2luZG93Lmlvc0xpbmsgPSB0aGlzLmlvc0xpbms7XG4gICAgICAgIHdpbmRvdy5kZWZhdWx0TGluayA9IHRoaXMuZGVmYXVsdExpbms7XG4gICAgICAgIGxldCBhZGNoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xuICAgICAgICBpZih3aW5kb3cub3BlbkFkVXJsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhZGNoYW5lbCk7XG4gICAgICAgICAgICB3aW5kb3cub3BlbkFkVXJsKGFkY2hhbmVsKTtcbiAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbigpO1xuICAgICAgICB9XG4gICAgfVxufSk7Il19
//------QC-SOURCE-SPLIT------
