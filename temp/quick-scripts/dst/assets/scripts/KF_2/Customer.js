
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcQ3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsdUNBQWlDO0FBRWpDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUVDO1FBcEVHLDJCQUFxQixHQUF5QixJQUFJLENBQUM7UUFHbkQsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsZUFBUyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUdwQyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUViLFlBQU0sR0FBRyxLQUFLLENBQUM7O1FBaURmLGlCQUFpQjtJQUNyQixDQUFDO0lBaERHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksSUFBSSxJQUFJLFlBQVk7WUFBRSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUUsSUFBSSxJQUFJLElBQUksU0FBUztZQUFFLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRSxJQUFJLFFBQVEsSUFBSSxJQUFJO1lBQUUsT0FBTTtRQUM1QixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsUUFBUSxRQUFLLENBQUM7UUFDN0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQix1Q0FBdUM7UUFDdkMsZ0ZBQWdGO1FBQ2hGLGdEQUFnRDtRQUNoRCxpS0FBaUs7UUFDakssaURBQWlEO1FBQ2pELHdEQUF3RDtRQUN4RCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQzlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFOUMsQ0FBQztJQWpFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUM7MkRBQ29CO0lBR25EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ1c7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNrQjtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBZlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVFNUI7SUFBRCxlQUFDO0NBdkVELEFBdUVDLENBdkVxQyxFQUFFLENBQUMsU0FBUyxHQXVFakQ7a0JBdkVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gJy4vR2FtZVBsYXknXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2tlbGV0b25BbmltYXRpb24pXHJcbiAgICBib2R5U2tlbGV0b25BbmltYXRpb246IGNjLlNrZWxldG9uQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYmFwTmdvUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBxdWFDYWNodWFQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlZlYzMpXHJcbiAgICBwb3N0UXVldWU6IGNjLlZlYzMgPSBjYy52MygwLCAwLCAwKTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBudW1MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgICBudW1DYXJyeSA9IDA7XHJcblxyXG4gICAgaXNNb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChHYW1lUGxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5udW1DYXJyeSsrO1xyXG4gICAgICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLnBsYXkoJ0lkbGUgMicpO1xyXG4gICAgICAgIGxldCBpdGVtTm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3RyYWljYWNodWEnKSBpdGVtTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucXVhQ2FjaHVhUHJlZmFiKTtcclxuICAgICAgICBpZiAobmFtZSA9PSAndHJhaW5nbycpIGl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5iYXBOZ29QcmVmYWIpO1xyXG4gICAgICAgIGlmIChpdGVtTm9kZSA9PSBudWxsKSByZXR1cm5cclxuICAgICAgICBpdGVtTm9kZS5zZXRQb3NpdGlvbihjYy52MygwLCAwLjUgKyAodGhpcy5udW1DYXJyeSkgKiAwLjIsIDAuMykpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpdGVtTm9kZSk7XHJcbiAgICAgICAgdGhpcy5udW1MYWJlbC5zdHJpbmcgPSBgJHt0aGlzLm51bUNhcnJ5fS8xMmA7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LmdldEl0ZW1Tb3VuZCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLm51bUNhcnJ5ID09IDEyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuY291bnRDdXN0b21lcisrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5jb3VudEN1c3RvbWVyID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyb3dUaW5oVGllbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5hcnJvd0tlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLm51bUxhYmVsLm5vZGUucGFyZW50LmRlc3Ryb3koKTtcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMjUsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIC0xODAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KCdSdW4gMicpO1xyXG4gICAgICAgIC8vIH0pLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5ub2RlLngsIDAsIHRoaXMucG9zdFF1ZXVlLnopIH0pLnRvKDAuMjUsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIC05MCwgMCkgfSkudG8oMiwgeyBwb3NpdGlvbjogdGhpcy5wb3N0UXVldWUgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLnBsYXkoJ0lkbGUgMicpO1xyXG4gICAgICAgIC8vIH0pLnRvKDAuMjUsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIDAsIDApIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheSgnV2FsaycpO1xyXG4gICAgfVxyXG4gICAgZG93bigpIHtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLm5vZGUucm90YXRpb25ZID0gOTBcclxuICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KCdJZGxlIDInKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=