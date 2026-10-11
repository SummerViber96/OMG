
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcQ3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsdUNBQWlDO0FBRWpDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUVDO1FBcEVHLDJCQUFxQixHQUF5QixJQUFJLENBQUM7UUFHbkQsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsZUFBUyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUdwQyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUViLFlBQU0sR0FBRyxLQUFLLENBQUM7O1FBaURmLGlCQUFpQjtJQUNyQixDQUFDO0lBaERHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksSUFBSSxJQUFJLFlBQVk7WUFBRSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUUsSUFBSSxJQUFJLElBQUksU0FBUztZQUFFLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRSxJQUFJLFFBQVEsSUFBSSxJQUFJO1lBQUUsT0FBTTtRQUM1QixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsUUFBUSxRQUFLLENBQUM7UUFDN0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQix1Q0FBdUM7UUFDdkMsZ0ZBQWdGO1FBQ2hGLGdEQUFnRDtRQUNoRCxpS0FBaUs7UUFDakssaURBQWlEO1FBQ2pELHdEQUF3RDtRQUN4RCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQzlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFOUMsQ0FBQztJQWpFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUM7MkRBQ29CO0lBR25EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ1c7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNrQjtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBZlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVFNUI7SUFBRCxlQUFDO0NBdkVELEFBdUVDLENBdkVxQyxFQUFFLENBQUMsU0FBUyxHQXVFakQ7a0JBdkVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gJy4vR2FtZVBsYXknXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2tlbGV0b25BbmltYXRpb24pXHJcbiAgICBib2R5U2tlbGV0b25BbmltYXRpb246IGNjLlNrZWxldG9uQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYmFwTmdvUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBxdWFDYWNodWFQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlZlYzMpXHJcbiAgICBwb3N0UXVldWU6IGNjLlZlYzMgPSBjYy52MygwLCAwLCAwKTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBudW1MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgICBudW1DYXJyeSA9IDA7XHJcblxyXG4gICAgaXNNb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChHYW1lUGxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5udW1DYXJyeSsrO1xyXG4gICAgICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLnBsYXkoJ0lkbGUgMicpO1xyXG4gICAgICAgIGxldCBpdGVtTm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3RyYWljYWNodWEnKSBpdGVtTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucXVhQ2FjaHVhUHJlZmFiKTtcclxuICAgICAgICBpZiAobmFtZSA9PSAndHJhaW5nbycpIGl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5iYXBOZ29QcmVmYWIpO1xyXG4gICAgICAgIGlmIChpdGVtTm9kZSA9PSBudWxsKSByZXR1cm5cclxuICAgICAgICBpdGVtTm9kZS5zZXRQb3NpdGlvbihjYy52MygwLCAwLjUgKyAodGhpcy5udW1DYXJyeSkgKiAwLjIsIDAuMykpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpdGVtTm9kZSk7XHJcbiAgICAgICAgdGhpcy5udW1MYWJlbC5zdHJpbmcgPSBgJHt0aGlzLm51bUNhcnJ5fS8xMmA7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LmdldEl0ZW1Tb3VuZCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLm51bUNhcnJ5ID09IDEyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuY291bnRDdXN0b21lcisrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5jb3VudEN1c3RvbWVyID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyb3dUaW5oVGllbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5hcnJvd0tlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLm51bUxhYmVsLm5vZGUucGFyZW50LmRlc3Ryb3koKTtcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMjUsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIC0xODAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KCdSdW4gMicpO1xyXG4gICAgICAgIC8vIH0pLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5ub2RlLngsIDAsIHRoaXMucG9zdFF1ZXVlLnopIH0pLnRvKDAuMjUsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIC05MCwgMCkgfSkudG8oMiwgeyBwb3NpdGlvbjogdGhpcy5wb3N0UXVldWUgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLnBsYXkoJ0lkbGUgMicpO1xyXG4gICAgICAgIC8vIH0pLnRvKDAuMjUsIHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIDAsIDApIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheSgnV2FsaycpO1xyXG4gICAgfVxyXG4gICAgZG93bigpIHtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLm5vZGUucm90YXRpb25ZID0gOTBcclxuICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KCdJZGxlIDInKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFuR2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxQbGF0Zm9ybUJyYW5kSWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQW1CQztRQWhCRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFHbkMsYUFBTyxHQUFtQixJQUFJLENBQUM7O1FBWS9CLGlCQUFpQjtJQUNyQixDQUFDO0lBWEcsaUNBQUssR0FBTDtRQUNJLDBEQUEwRDtRQUMxRCxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQy9EO2FBQ0ksSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzBEQUNVO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ007SUFOZCxpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQW1CckM7SUFBRCx3QkFBQztDQW5CRCxBQW1CQyxDQW5COEMsRUFBRSxDQUFDLFNBQVMsR0FtQjFEO2tCQW5Cb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUJyYW5kSWNvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgYW5kcm9pZEljb246IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBpb3NJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaW9zSWNvbjtcclxuICAgICAgICBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYW5kcm9pZEljb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaW9zSWNvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUUxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNVQztRQXBVRyxZQUFNLEdBQWMsSUFBSSxDQUFBO1FBRXhCLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFHL0IsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsa0JBQVksR0FBYSxJQUFJLENBQUE7UUFDN0IsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFFZixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2QixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUVwQixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGNBQVEsR0FBRyw4QkFBOEIsQ0FBQTtRQUV6Qyx3QkFBd0I7UUFDeEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0JBQVUsR0FBRyxFQUFFLENBQUE7UUE2QmYsWUFBTSxHQUFHLElBQUksQ0FBQTtRQWdFYixpQkFBVyxHQUFHLEdBQUcsQ0FBQTtRQUNqQixxQkFBZSxHQUFHLENBQUMsQ0FBQTtRQXlJbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUE7O0lBOEJyQixDQUFDO0lBcFFHLHlCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUFBLGlCQXVCQztRQXJCRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksV0FBVyxFQUFFO1lBQzlCLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDdEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNyRCxpQ0FBaUM7UUFDckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNqQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBQ0YsMERBQTBEO0lBRTlELENBQUM7SUFFRCxxQkFBcUI7SUFDckIsMkJBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVTtZQUUzQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FFbEU7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN4QyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDdkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7SUFDN0MsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FFbkI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsaUNBQWlDO1FBRWpDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRWhELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RCLCtDQUErQztRQUMvQyxpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDLDZCQUE2QjtRQUM3QixpQ0FBaUM7UUFDakMseURBQXlEO1FBQ3pELGtDQUFrQztRQUNsQyw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLHNDQUFzQztRQUV0QyxVQUFVO0lBQ2QsQ0FBQztJQUdELDhCQUFXLEdBQVg7UUFDSSwyQkFBMkI7UUFDM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUV0RCxPQUFPO1FBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2pCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDN0IsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQ2QsaUJBQWlCO1lBQ2pCLHNCQUFzQjtTQUV6QjtRQUNELElBQUksT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7U0FDdEM7UUFDRCxJQUFJLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRywyQkFBMkIsQ0FBQTtTQUN6RjthQUNJO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsdUJBQXVCLENBQUE7U0FHckY7SUFDTCxDQUFDO0lBQ0QscUNBQWtCLEdBQWxCLFVBQW1CLGFBQWE7UUFBaEMsaUJBZ0JDO1FBZkcsSUFBSSxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFL0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDUixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsR0FBRyxHQUFHLEVBQUUsRUFBRTtZQUNuQyxRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDckMsSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFO29CQUNYLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFFdEI7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDbkIsQ0FBQztTQUNKLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLGVBQWU7UUFDZixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsZUFBZTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUUzQixlQUFlO1FBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxnQ0FBYSxHQUFiLFVBQWMsWUFBWTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzVFLDRDQUE0QztRQUU1QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUNoRCxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUE7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtRQUMzQix5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUE7UUFFNUIsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO1lBQ3RCLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBRWhDLDRDQUE0QztZQUU1QyxzREFBc0Q7WUFDdEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdEUsbUNBQW1DO1lBQ25DLElBQU0scUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVM7WUFDbEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBVSxTQUFTO1lBRWpELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsR0FBRyxTQUFTLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7YUFFOUI7aUJBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsR0FBRyxTQUFTLEVBQUU7YUFJeEQ7U0FDSjthQUNJO1lBQ0QsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QyxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFFaEMsc0RBQXNEO1lBQ3RELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXRFLG1DQUFtQztZQUNuQyxJQUFNLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxTQUFTO1lBQ2xELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQVUsU0FBUztZQUVqRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsU0FBUyxFQUFFO2dCQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO2dCQUMzQix1REFBdUQ7Z0JBQ3ZELHVCQUF1QjthQUMxQjtpQkFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxHQUFHLFNBQVMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO2dCQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7Z0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtnQkFDbEMsc0RBQXNEO2dCQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFBO2dCQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFBO2dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTthQUV2QjtTQUNKO0lBSUwsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDSSxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7U0FDMUI7YUFDSSxJQUFJLGdCQUFnQixDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTtTQUN6QjtJQUNMLENBQUM7SUFHRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUU7WUFFekMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV6RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFFckQsWUFBWTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUUzRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQztJQW5VRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0k7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNVO0lBbkRaLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzVTVCO0lBQUQsZUFBQztDQXRVRCxBQXNVQyxDQXRVcUMsRUFBRSxDQUFDLFNBQVMsR0FzVWpEO2tCQXRVb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuY2MubWFjcm8uRU5BQkxFX1RSQU5TUEFSRU5UX0NBTlZBUyA9IHRydWU7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5WaWRlb1BsYXllcilcclxuICAgIHZpZGVvOiBjYy5WaWRlb1BsYXllciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Db2xsZWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkZyeTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5TZXJ2ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5DbGVhbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb25maXJtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRWZ4OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kR2lybDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEN5Y2xlOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0R3VpbGQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRleHRHdWlsZDI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb2hvYTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZEd1aWxkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGxCYXI6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcGVyY2VudExhYmVsOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIHNvdW5kRWZ4SWQgPSAwO1xyXG5cclxuICAgIGN1cnJTY3JlZW5XaWR0aCA9IG51bGw7XHJcblxyXG4gICAgaXNIb3Jpem9udGFsID0gdHJ1ZTtcclxuXHJcbiAgICBpc1BsYXkxID0gZmFsc2U7XHJcblxyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGlkU291bmRDeWNsZSA9IG51bGw7XHJcbiAgICBpZFNvdW5kR2lybCA9IG51bGw7XHJcbiAgICBkZWNheVNwZWVkID0gMTBcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCBmYWxzZSwgMSlcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWRlby5wbGF5KCk7XHJcblxyXG4gICAgICAgIH0sIDAuMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW8uc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5idG5Db2xsZWN0LmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRleHRHdWlsZDIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCAxLjIpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdG9wQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEN5Y2xlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyB0aGlzLnZpZGVvLm5vZGUub24oJ2NvbXBsZXRlZCcsIHRoaXMub25WaWRlb0VuZCwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG4gICAgaXNTdG9wID0gdHJ1ZVxyXG4gICAgLy8gX3N0b3BDYWxsYmFjaz1udWxsXHJcbiAgICBwbGF5Q3lsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5oYW5kR3VpbGQuYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kR3VpbGQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucGVyY2VudExhYmVsLnN0cmluZyA9IFwiMCVcIjsgLy8g8J+RiCBpbml0XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlkU291bmRDeWNsZSA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEN5Y2xlLCB0cnVlLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5pZFNvdW5kR2lybCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdpcmwsIHRydWUsIDEpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52aWRlby5yZXN1bWUoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5pZFNvdW5kQ3ljbGUpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMuaWRTb3VuZEdpcmwpXHJcblxyXG4gICAgICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEN5Y2xlKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuaWRTb3VuZEN5Y2xlKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuaWRTb3VuZEdpcmwpXHJcblxyXG4gICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZpZGVvLnBhdXNlKCk7IC8vIGhv4bq3YyBwYXVzZSBu4bq/dSBj4bqnblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bl9jeWNsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5Q3lsZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRQcm9ncmVzcygpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRleHRHdWlsZC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29uZmlybSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl9zdG9wQ2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuX3N0b3BDYWxsYmFjaywgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25WaWRlb0VuZCgpIHtcclxuICAgICAgICB0aGlzLnNob3dFbmRjYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0VuZGNhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1N0b3AgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kR2FtZVwiKVxyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgLy8gdGhpcy5idG5Db2xsZWN0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gdGhpcy50ZXh0R3VpbGQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAvLyB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vIHRoaXMudGV4dEd1aWxkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuYnRuQ29sbGVjdC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy50ZXh0R3VpbGQyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMucGhhb2hvYS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIH0sIDAuNSlcclxuICAgIH1cclxuICAgIG1heFByb2dyZXNzID0gMTAwXHJcbiAgICBjdXJyZW50UHJvZ3Jlc3MgPSAwXHJcbiAgICBhZGRQcm9ncmVzcygpIHtcclxuICAgICAgICAvLyBs4buxYyBnaeG6o20gZOG6p24gKGdp4buRbmcgYWRzKVxyXG4gICAgICAgIGxldCBwb3dlciA9IE1hdGgubWF4KDMsIDEwIC0gdGhpcy5jdXJyZW50UHJvZ3Jlc3MgKiAwLjA1KTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgKz0gcG93ZXI7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnRQcm9ncmVzcywgdGhpcy5tYXhQcm9ncmVzcyk7XHJcblxyXG4gICAgICAgIGxldCBwZXJjZW50ID0gdGhpcy5jdXJyZW50UHJvZ3Jlc3MgLyB0aGlzLm1heFByb2dyZXNzO1xyXG5cclxuICAgICAgICAvLyBtxrDhu6N0XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5maWxsQmFyKVxyXG4gICAgICAgICAgICAudG8oMSwgeyBmaWxsUmFuZ2U6IHBlcmNlbnQgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgbGV0IHBlcmNlbnRUZXh0ID0gTWF0aC5mbG9vcihwZXJjZW50ICogMTAwKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnRMYWJlbChwZXJjZW50KTtcclxuICAgICAgICBpZiAocGVyY2VudCA+PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMub25GdWxsKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2hvd0VuZGNhcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwZXJjZW50ID4gMC44KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyY2VudExhYmVsLm5vZGUuc2NhbGUgPSAxLjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwZXJjZW50ID4gMC41KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJLZWVwIGdvaW5nISBBbG1vc3QgdGhlcmUhXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJDYW4geW91IG1ha2UgaGVyIGZpdD9cIlxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlUGVyY2VudExhYmVsKHRhcmdldFBlcmNlbnQpIHtcclxuICAgICAgICBsZXQgb2JqID0geyB2YWx1ZTogcGFyc2VGbG9hdCh0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcpIHx8IDAgfTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4ob2JqKVxyXG4gICAgICAgICAgICAudG8oMSwgeyB2YWx1ZTogdGFyZ2V0UGVyY2VudCAqIDEwMCB9LCB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gTWF0aC5mbG9vcihzdGFydCArIChlbmQgLSBzdGFydCkgKiB0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSB2YWwgKyBcIiVcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09IDkwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VuZGNhcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIG9uRnVsbCgpIHtcclxuICAgICAgICAvLyBzdG9wIG3hu41pIHRo4bupXHJcbiAgICAgICAgdGhpcy5zdG9wQ3ljbGUoKTtcclxuXHJcbiAgICAgICAgLy8gxJHhuqNtIGLhuqNvIGZ1bGxcclxuICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMTtcclxuXHJcbiAgICAgICAgLy8gc2hvdyBlbmRjYXJkXHJcbiAgICAgICAgdGhpcy5zaG93RW5kY2FyZCgpO1xyXG4gICAgfVxyXG4gICAgc2V0U2NyZWVuU2l6ZShpc0hvcml6b250YWwpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gKGlzSG9yaXpvbnRhbCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IChpc0hvcml6b250YWwpID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMubGlua1RvU3RvcmUuc2NhbGU9KGlzSG9yaXpvbnRhbCk/MC42XHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChpc0hvcml6b250YWwpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGlzSG9yaXpvbnRhbCkgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICB0aGlzLnRleHRHdWlsZC55ID0gNDA1LjczMlxyXG4gICAgICAgIHRoaXMuYmFyLnkgPSA1MDMuMzExXHJcbiAgICAgICAgdGhpcy5idG5Db2xsZWN0LnNjYWxlID0gMVxyXG4gICAgICAgIHRoaXMuYmFyLnNjYWxlID0gMC40NTtcclxuICAgICAgICB0aGlzLnRleHRHdWlsZC5zY2FsZSA9IDFcclxuICAgICAgICB0aGlzLnZpZGVvLm5vZGUuc2NhbGUgPSA2LjRcclxuICAgICAgICAvLyB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gNjIuMjNcclxuICAgICAgICB0aGlzLmJ0bkNvbGxlY3QueSA9IC01MDcuNzY5XHJcblxyXG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygtNzAsIDApXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlby5ub2RlLnNjYWxlID0gNi41XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlby5ub2RlLnNjYWxlID0gNy40XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gMTQwXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1hbiB4XCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC43MlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Db2xsZWN0LnNjYWxlID0gMC44XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbGxlY3QueSA9IC01MDcuNzY5ICsgMTQwXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkNvbGxlY3QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gNTBcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkLnkgPSA0NjAuODk1IC0gMTQwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhci55ID0gNTUwLjAxNyAtIDE2MFxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhci5zY2FsZSA9IDAuM1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIGlzdmVydGljYWwgPSB0cnVlXHJcbiAgICByZXNwb25zaXZlKCkge1xyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA+PSBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFNjcmVlblNpemUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFNjcmVlblNpemUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc1N0b3AgJiYgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyAtPSB0aGlzLmRlY2F5U3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSBNYXRoLm1heCgwLCB0aGlzLmN1cnJlbnRQcm9ncmVzcyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5jdXJyZW50UHJvZ3Jlc3MgLyB0aGlzLm1heFByb2dyZXNzO1xyXG5cclxuICAgICAgICAgICAgLy8gbGVycCBtxrDhu6N0XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSBjYy5taXNjLmxlcnAodGhpcy5maWxsQmFyLmZpbGxSYW5nZSwgdGFyZ2V0LCAwLjIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBlcmNlbnRUZXh0ID0gTWF0aC5mbG9vcih0YXJnZXQgKiAxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSBwZXJjZW50VGV4dCArIFwiJVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcR2FtZVBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsK0JBQTBCO0FBQzFCLHVDQUFrQztBQUNsQyx1Q0FBaUM7QUFFakM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpUkM7UUE5UUcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFJeEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWMsSUFBSSxDQUFD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XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBDaGFyIGZyb20gXCIuL0NoYXJcIjtcclxuaW1wb3J0IEN1c3RvbWVyIGZyb20gJy4vQ3VzdG9tZXInO1xyXG5pbXBvcnQgSm95U3RpY2sgZnJvbSAnLi9Kb3lTdGljaydcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kR3VpZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJyb3dHYXJkZW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJyb3dLZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJyb3dUaW5oVGllbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYXJkZW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VzdG9tZXIxTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjdXN0b21lcjJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGN1c3RvbWVyM05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VzdG9tZXI0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBrZUNhY2h1YTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBrZU5nbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Db250aW51ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBqb3lTdGljazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRhbmdDYWNodWFQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRhbmdOZ29QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNheU5nb1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY2F5Q2FjaHVhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmEzRDogY2MuQ2FtZXJhID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhMkQ6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGJnU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGdldEl0ZW1Tb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICB0YW5nQ2FjaHVhTm9kZSA9IG51bGw7XHJcblxyXG4gICAgdGFuZ05nb05vZGUgPSBudWxsO1xyXG5cclxuICAgIHRhbmcyQ2FjaHVhTm9kZSA9IG51bGw7XHJcblxyXG4gICAgdGFuZzJOZ29Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBjaGFyQ29tcCA9IG51bGw7XHJcblxyXG4gICAgbnVtTmdvID0gMDtcclxuXHJcbiAgICBudW1DYUNodWEgPSAwO1xyXG5cclxuICAgIGNvdW50Q3VzdG9tZXIgPSAwO1xyXG5cclxuICAgIGN1cnJTY3JlZW5XaWR0aCA9IG51bGw7XHJcblxyXG4gICAgaXNIb3Jpem9udGFsID0gdHJ1ZTtcclxuXHJcbiAgICBpc0VuZEdhbWUgPSBmYWxzZTtcclxuXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmNoYXJDb21wID0gdGhpcy5jaGFyLmdldENvbXBvbmVudChDaGFyKTtcclxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljczNETWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlR2FyZGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRUYW5nSXRlbSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ1NvdW5kLCB0cnVlLCAwLjUpO1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUYW5nSXRlbSgpIHtcclxuICAgICAgICB0aGlzLnRhbmdDYWNodWFOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50YW5nQ2FjaHVhUHJlZmFiKTtcclxuICAgICAgICB0aGlzLmtlQ2FjaHVhLmFkZENoaWxkKHRoaXMudGFuZ0NhY2h1YU5vZGUpO1xyXG4gICAgICAgIHRoaXMudGFuZ05nb05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhbmdOZ29QcmVmYWIpO1xyXG4gICAgICAgIHRoaXMua2VOZ28uYWRkQ2hpbGQodGhpcy50YW5nTmdvTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbU9uS2UobmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09ICd0cmFpbmdvJykge1xyXG4gICAgICAgICAgICB0aGlzLm51bU5nbysrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5udW1OZ28gPiAwICYmIHRoaXMubnVtTmdvIDw9IDI0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhbmdOZ29Ob2RlLmNoaWxkcmVuW3RoaXMubnVtTmdvIC0gMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bU5nbyA8PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFuZ05nb05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlID09IHRydWUgJiYgaW5kZXggPCAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lcjFOb2RlLmdldENvbXBvbmVudChDdXN0b21lcikuZ2V0SXRlbSgndHJhaW5nbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDAuMDIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bU5nbyA+PSAxMiAmJiB0aGlzLm51bU5nbyA8IDI0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YW5nTmdvTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5hY3RpdmUgPT0gdHJ1ZSAmJiBpbmRleCA+PSAxMiAmJiBpbmRleCA8IDI0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyMk5vZGUuZ2V0Q29tcG9uZW50KEN1c3RvbWVyKS5nZXRJdGVtKCd0cmFpbmdvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGluZGV4ICogMC4wMilcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5udW1OZ28gPiAyNCAmJiB0aGlzLm51bU5nbyA8PSA0OCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YW5nTmdvTm9kZS5jaGlsZHJlblt0aGlzLm51bU5nbyAtIDI1XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09ICd0cmFpY2FjaHVhJykge1xyXG4gICAgICAgICAgICB0aGlzLm51bUNhQ2h1YSsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5udW1DYUNodWEgPiAwICYmIHRoaXMubnVtQ2FDaHVhIDw9IDI0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhbmdDYWNodWFOb2RlLmNoaWxkcmVuW3RoaXMubnVtQ2FDaHVhIC0gMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bUNhQ2h1YSA8PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFuZ0NhY2h1YU5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlID09IHRydWUgJiYgaW5kZXggPCAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lcjNOb2RlLmdldENvbXBvbmVudChDdXN0b21lcikuZ2V0SXRlbSgndHJhaWNhY2h1YScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDAuMDIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubnVtQ2FDaHVhID4gMTIgJiYgdGhpcy5udW1DYUNodWEgPD0gMjQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhbmdDYWNodWFOb2RlLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFjdGl2ZSA9PSB0cnVlICYmIGluZGV4ID49IDEyICYmIGluZGV4IDwgMjQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXI0Tm9kZS5nZXRDb21wb25lbnQoQ3VzdG9tZXIpLmdldEl0ZW0oJ3RyYWljYWNodWEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXggKiAwLjAyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubnVtQ2FDaHVhID4gMjQgJiYgdGhpcy5udW1DYUNodWEgPD0gNDgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFuZ0NhY2h1YU5vZGUuY2hpbGRyZW5bdGhpcy5udW1DYUNodWEgLSAyNV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbmRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuaXNFbmRHYW1lID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFycm93VGluaFRpZW4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oYW5kR3VpZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLmJ0bkNvbnRpbnVlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5qb3lTdGljay5nZXRDb21wb25lbnQoSm95U3RpY2spLm9mZlRvdWNoRXZlbnQoKTtcclxuICAgICAgICB0aGlzLmpveVN0aWNrLmdldENvbXBvbmVudChKb3lTdGljaykuZG90LnNldFBvc2l0aW9uKGNjLnYzKDAsIC0xODMpKTtcclxuICAgICAgICB0aGlzLmpveVN0aWNrLmdldENvbXBvbmVudChKb3lTdGljaykucmluZy5zZXRQb3NpdGlvbihjYy52MygwLCAtMTgzKSk7XHJcbiAgICAgICAgdGhpcy5qb3lTdGljay5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoYXJDb21wLmlkbGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY3JlYXRlR2FyZGVuKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2F5bmdvID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXlOZ29QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXJkZW4uYWRkQ2hpbGQoY2F5bmdvKTtcclxuICAgICAgICAgICAgICAgIGNheW5nby5zZXRQb3NpdGlvbihjYy52MygyICsgMyAqIGosIDAsIDMgKyAzICogaSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2F5Y2FjaHVhID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXlDYWNodWFQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXJkZW4uYWRkQ2hpbGQoY2F5Y2FjaHVhKTtcclxuICAgICAgICAgICAgICAgIGNheWNhY2h1YS5zZXRQb3NpdGlvbihjYy52MygtMiAtIDMgKiBqLCAwLCAzICsgMyAqIGkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFNjcmVlblNpemUoaXNIb3Jpem9udGFsKSB7IC8vIHJlc3BvbnNpdmUgZ2FtZSBuZ2FuZyBkb2NcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIHRoaXMuam95U3RpY2suc2NhbGUgPSAoaXNIb3Jpem9udGFsKSA/IDAuNSA6IDEuODtcclxuICAgICAgICB0aGlzLmJ0bkNvbnRpbnVlLmNoaWxkcmVuWzBdLnNjYWxlID0gKGlzSG9yaXpvbnRhbCkgPyAwLjI1IDogMC42O1xyXG4gICAgICAgIHRoaXMuY2FtZXJhM0Quem9vbVJhdGlvID0gKGlzSG9yaXpvbnRhbCkgPyAyIDogMS41O1xyXG4gICAgICAgIHRoaXMuY2FtZXJhM0Qubm9kZS5ldWxlckFuZ2xlcyA9IChpc0hvcml6b250YWwpID8gY2MudjMoLTQzLCAwLCAwKSA6IGNjLnYzKC00NiwgMCwgMClcclxuICAgICAgICAvLyBjYW52YXMuZml0SGVpZ2h0ID0gKGlzSG9yaXpvbnRhbCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgLy8gY2FudmFzLmZpdFdpZHRoID0gKGlzSG9yaXpvbnRhbCkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzcG9uc2l2ZSgpIHtcclxuICAgICAgICAvLyBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZXZpY2VSZXNvbHV0aW9uKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW52YXMuZGVzaWduUmVzb2x1dGlvbilcclxuICAgICAgICAvLyAvLyBjYWxjdWx0ZSBkZXNpZ24gcmF0aW9cclxuICAgICAgICAvLyBsZXQgZGVzaXJlZFJhdGlvID0gY2FudmFzLmRlc2lnblJlc29sdXRpb24ud2lkdGggLyBjYW52YXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgLy8gLy8gY2FsY3VsdGUgZGV2aWNlIHJhdGlvXHJcbiAgICAgICAgLy8gbGV0IGRldmljZVJhdGlvID0gZGV2aWNlUmVzb2x1dGlvbi53aWR0aCAvIGRldmljZVJlc29sdXRpb24uaGVpZ2h0O1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoID49IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZSh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5pc0hvcml6b250YWwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW5TaXplKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5pc0hvcml6b250YWwgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VyclNjcmVlbldpZHRoICE9PSB3aW5TaXplLndpZHRoKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICghdGhpcy5jdXJyU2NyZWVuV2lkdGgpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh3aW5TaXplLndpZHRoID4gNTAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW5TaXplKHRydWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNIb3Jpem9udGFsID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW5TaXplKGZhbHNlKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmlzSG9yaXpvbnRhbCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdXJyU2NyZWVuV2lkdGggPSB3aW5TaXplLndpZHRoO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5jdXJyU2NyZWVuV2lkdGggPCB3aW5TaXplLndpZHRoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFNjcmVlblNpemUodHJ1ZSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzSG9yaXpvbnRhbCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFNjcmVlblNpemUoZmFsc2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc0hvcml6b250YWwgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJTY3JlZW5XaWR0aCA9IHdpblNpemUud2lkdGg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYTNELm5vZGUuc2V0UG9zaXRpb24odGhpcy5jaGFyLnBvc2l0aW9uLmFkZChjYy52MygwLCAzMCwgMjYpKS5jbGFtcGYoY2MudjMoLTksIDMwLCAzOCksIGNjLnYzKDksIDMwLCAzMCkpKTtcclxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTswQ0FDYztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUM7MkRBQ29CO0lBUmxDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1RTVCO0lBQUQsZUFBQztDQXZFRCxBQXVFQyxDQXZFcUMsRUFBRSxDQUFDLFNBQVMsR0F1RWpEO2tCQXZFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcbiAgICBAcHJvcGVydHkoY2MuU2tlbGV0b25BbmltYXRpb24pXHJcbiAgICBib2R5U2tlbGV0b25BbmltYXRpb246IGNjLlNrZWxldG9uQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0ID09IFwiY3VzMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZTIoKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dCA9PSBcImN1czJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUzKClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZTEoKSB7XHJcbiAgICAgICAgbGV0IGxvY2FscG9zID0gY2MudjMoLTE1OC45MjUsIC00NzYuMjkzLCAtMzIzLjE5NylcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuc2V0KHsgcG9zaXRpb246IGxvY2FscG9zIH0pLnRvKDIsIHsgcG9zaXRpb246IGNjLnYzKDE4Mi4wOTUsIC0zMDcuNTc4LCAtMzIzLjE5NykgfSkuc2V0KHtcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiBjYy52MygzNi4xNywgLTE4LjgzMSwgLTEwLjk1MilcclxuICAgICAgICAgICAgfSkudG8oMiwgeyBwb3NpdGlvbjogbG9jYWxwb3MgfSlcclxuICAgICAgICApLnN0YXJ0KClcclxuICAgIH1cclxuICAgIG1vdmUyKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgY2MudHdlZW4oKS5zZXQoeyBwb3NpdGlvbjogY2MudjMoMjEyLjM2NCwgLTM3LjE3NiwgLTIyLjI1NSksIGV1bGVyQW5nbGVzOiBjYy52MygtNDUuNzE5LCAxNTAuOTczLCAzNC42ODEpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlKClcclxuICAgICAgICAgICAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoKVxyXG4gICAgICAgICAgICB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoNDguMzIsIDI0LjE4NiwgMzAuMjk4KSB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52Myg3MSwgNTEuOTIyLCAtNjYuMDkzKSB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTQ1LjcxOSwgMTUwLjk3MywgMzQuNjgxKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXHJcbiAgICAgICAgICAgIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKClcclxuICAgICAgICAgICAgfSkuc2V0KHtcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiBjYy52MygtNDguOTk3LCAtMTU3LjE4MiwgLTI4Ljk0NylcclxuICAgICAgICAgICAgfSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMjEyLjM2NCwgLTM3LjE3NiwgLTIyLjI1NSkgfSlcclxuICAgICAgICApLnN0YXJ0KClcclxuICAgIH1cclxuICAgIG1vdmUzKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgY2MudHdlZW4oKS5zZXQoeyBwb3NpdGlvbjogY2MudjMoLTM3Mi4wMTQsIC0xNjYuMDc5LCAtNTIyLjQ0NyksIGV1bGVyQW5nbGVzOiBjYy52MygtMzYuNTgzLCAxNDEuNzU1LCAxOC4zOTEpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlKClcclxuICAgICAgICAgICAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoKVxyXG4gICAgICAgICAgICB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTM2LjU4MywgMTQxLjc1NSwgMTguMzkxKSB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMjc2LjA0OSwgLTEwNC40NzIsIC01MjIuNDQ3KSB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTQ1LjcxOSwgMTUwLjk3MywgMzQuNjgxKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXHJcbiAgICAgICAgICAgIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKClcclxuICAgICAgICAgICAgfSkuc2V0KHtcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiBjYy52MygzOC4xNzksIC0zMi41NjcsIC0xNC4yMjMpXHJcbiAgICAgICAgICAgIH0pLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0zNzIuMDE0LCAtMTY2LjA3OSwgLTUyMi40NDcpIH0pXHJcbiAgICAgICAgKS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLnBsYXkoJ1dhbGsnKTtcclxuXHJcbiAgICB9XHJcbiAgICBpZGxlKCkge1xyXG4gICAgICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLnBsYXkoJ0lkbGUgMScpO1xyXG5cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcQ2hhckxpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLCtCQUEwQjtBQUMxQiwrQkFBNkI7QUFFN0I7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBMERBLENBQUM7SUF4REcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsNEJBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLFFBQVEsR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQVEsQ0FBQyxDQUFBO1FBQzVELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFekMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFFdkMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDN0QsaUdBQWlHO1lBQ2pHLHVDQUF1QztZQUN2QyxnRUFBZ0U7WUFDaEUsd0NBQXdDO1lBQ3hDLElBQUk7U0FDUDtRQUNELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksZ0JBQWdCLEVBQUU7WUFDakcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ3BCLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7WUFDNUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztTQUM5QzthQUNJLElBQUcsU0FBUyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO1lBQ2pHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN4QyxJQUFHLFFBQVEsQ0FBQyxVQUFVLEdBQUMsRUFBRSxFQUFDO2dCQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUNoRjtpQkFDRztnQkFDQSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7YUFFckI7U0FDSjthQUNJLElBQUcsU0FBUyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO1lBQy9GLElBQUcsUUFBUSxDQUFDLFFBQVEsRUFBQztnQkFDakIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNuQixRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO2dCQUM1QyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO2FBRzlDO1NBQ0o7UUFDRCx1R0FBdUc7UUFDdkcsOEVBQThFO1FBQzlFLG9FQUFvRTtRQUVwRSxRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUF2RGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRDVCO0lBQUQsZUFBQztDQTFERCxBQTBEQyxDQTFEcUMsRUFBRSxDQUFDLFNBQVMsR0EwRGpEO2tCQTFEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBDaGFyIGZyb20gJy4vQ2hhcic7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tICcuL01SXzQnXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcjNEKTtcclxuICAgICAgICBjb2xsaWRlci5vbigndHJpZ2dlci1lbnRlcicsIHRoaXMub25UcmlnZ2VyLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uVHJpZ2dlcihldmVudCkge1xyXG4gICAgICAgIGxldCBjaGFyQ29tcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ2hhcik7XHJcbiAgICAgICAgbGV0IGdhbWVDb21wPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoR2FtZVBsYXkpXHJcbiAgICAgICAgbGV0IG90aGVyTm9kZSA9IGV2ZW50Lm90aGVyQ29sbGlkZXIubm9kZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIsZXZlbnQsb3RoZXJOb2RlLm5hbWUpXHJcblxyXG4gICAgICAgIGxldCBzZWxmTm9kZSA9IGV2ZW50LnNlbGZDb2xsaWRlci5ub2RlO1xyXG5cclxuICAgICAgICBpZiAob3RoZXJOb2RlLm5hbWUgIT09IHNlbGZOb2RlLm5hbWUgJiYgc2VsZk5vZGUubmFtZSA9PSAnY2hhcicpIHtcclxuICAgICAgICAgICAgLy8gaWYgKChvdGhlck5vZGUubmFtZSA9PSAnY2F5bmdvJyB8fCBvdGhlck5vZGUubmFtZSA9PSAnY2F5Y2FjaHVhJykgJiYgY2hhckNvbXAubnVtQ2FycnkgPCAyNCkge1xyXG4gICAgICAgICAgICAvLyAgICAgb3RoZXJOb2RlLmNoaWxkcmVuWzJdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gICAgIG90aGVyTm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIzRCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgY2hhckNvbXAuYWRkSXRlbShvdGhlck5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG90aGVyTm9kZS5uYW1lICE9PSBzZWxmTm9kZS5uYW1lICYmIHNlbGZOb2RlLm5hbWUgPT0gJ252JyAmJiBvdGhlck5vZGUubmFtZSA9PSAnSWNvbkdldEJhbmhNaWYnKSB7XHJcbiAgICAgICAgICAgIGNoYXJDb21wLmFkZEJhbmhNaSgpXHJcbiAgICAgICAgICAgIGdhbWVDb21wLmxpc3RBcnJvdy5jaGlsZHJlblswXS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIGdhbWVDb21wLmxpc3RBcnJvdy5jaGlsZHJlblsxXS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihvdGhlck5vZGUubmFtZSAhPT0gc2VsZk5vZGUubmFtZSAmJiBzZWxmTm9kZS5uYW1lID09ICdudicgJiYgb3RoZXJOb2RlLm5hbWUgPT0gJ3VubG9ja05vZGUnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RlcDJcIixnYW1lQ29tcC5jb3VudE1vbmV5KVxyXG4gICAgICAgICAgICBpZihnYW1lQ29tcC5jb3VudE1vbmV5PDUwKXtcclxuICAgICAgICAgICAgICAgIGdhbWVDb21wLmNoYXIucGFyZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZ2FtZUNvbXAuc3RlcEVuZCgpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYob3RoZXJOb2RlLm5hbWUgIT09IHNlbGZOb2RlLm5hbWUgJiYgc2VsZk5vZGUubmFtZSA9PSAnbnYnICYmIG90aGVyTm9kZS5uYW1lID09ICdhcmVhU2VsbCcpIHtcclxuICAgICAgICAgICAgaWYoY2hhckNvbXAuaXNCYW5oTWkpe1xyXG4gICAgICAgICAgICAgICAgZ2FtZUNvbXAuZ2V0TW9uZXkoKVxyXG4gICAgICAgICAgICAgICAgZ2FtZUNvbXAubGlzdEFycm93LmNoaWxkcmVuWzFdLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGdhbWVDb21wLmxpc3RBcnJvdy5jaGlsZHJlblswXS5hY3RpdmU9dHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIChvdGhlck5vZGUubmFtZSAhPT0gc2VsZk5vZGUubmFtZSAmJiBzZWxmTm9kZS5uYW1lID09ICdjaGFyJyAmJiBvdGhlck5vZGUubmFtZSA9PSAnYmFudGh1bmdhbicpIHtcclxuICAgICAgICAvLyAgICAgaWYoY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVQbGF5KS5jb3VudEN1c3RvbWVyID09IDQpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChHYW1lUGxheSkuZW5kR2FtZSgpO1xyXG5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcTVJfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBaUM7QUFDakMsK0JBQTBCO0FBSXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBRXRCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeVlDO1FBdllHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFnQixFQUFFLENBQUE7UUFFM0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFFN0IsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IscUJBQXFCO1FBQ3JCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIseUJBQXlCO1FBRXpCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBQzlCLHFCQUFxQjtRQUNyQiwrQkFBK0I7UUFFL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsU0FBRyxH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U0FBUyxDQUFDOzZDQUNLO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQVMzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFRckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUk5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQTNEVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeVk1QjtJQUFELGVBQUM7Q0F6WUQsQUF5WUMsQ0F6WXFDLEVBQUUsQ0FBQyxTQUFTLEdBeVlqRDtrQkF6WW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95U3RpY2sgZnJvbSAnLi9Kb3lTdGljaydcclxuaW1wb3J0IENoYXIgZnJvbSBcIi4vQ2hhclwiO1xyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMubW9uZXkgPSAyMDtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBqb3lTdGljazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmRHdWlkZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTNEOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxpc3RLSFByZTogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzaGFkb3c6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmEyRDogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTW9uZXk6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRVZDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kUHV0OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gYXJyb3cxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gYXJyb3cyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gYXJyb3c0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEFycm93OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGJhbkdoZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBhcnJvdzM6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGFycm93NTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBlZmZNb25leTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gdW5sb2NrTm9kZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0QmFuR2hlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGtoMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2gyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0S0g6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRHYW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdW5sb2NrTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGNoYXJDb21wID0gbnVsbDtcclxuICAgIGlzSG9yaXpvbnRhbCA9IHRydWU7XHJcbiAgICBpc0N1dFNjZW5lID0gZmFsc2U7XHJcbiAgICBpc1N0ZXAgPSAxO1xyXG4gICAgaXN2ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgY291bnRNb25leSA9IDIwO1xyXG4gICAgYXJyS0hNYW4gPSBbXVxyXG4gICAgYXJyS0hwb3MgPSBbW10sIFtdLCBbXV1cclxuICAgIGFyclBvc0N1cyA9IFtdXHJcbiAgICBjb3VudFVEID0gMFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmNoYXJDb21wID0gdGhpcy5jaGFyLmdldENvbXBvbmVudChDaGFyKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzM0RNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgLy8gbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubW92ZUNhbTEoKVxyXG4gICAgICAgIC8vIH0sIDAuMylcclxuICAgICAgICAvLyB0aGlzLmNyZWF0ZUtoKClcclxuICAgIH1cclxuICAgIGNyZWF0ZUtoKCkge1xyXG4gICAgICAgIGxldCBmaXJ0UG9zID0gW2NjLnYzKC02NCwgMy41LCAxNSksIGNjLnYzKC02MSwgMy41LCAxNSksIGNjLnYzKC01OCwgMy41LCAxNSldXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEtIUHJlLmxlbmd0aClcclxuICAgICAgICAvLyAgICAgbGV0IGtoID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0S0hQcmVbcmRdKVxyXG4gICAgICAgIC8vICAgICBraC5wYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJraFwiKVxyXG4gICAgICAgIC8vICAgICBsZXQgcm93ID0gaSAlIDNcclxuICAgICAgICAvLyAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoaSAvIDMpXHJcbiAgICAgICAgLy8gICAgIGtoLmxvY2FscG9zID0gZmlydFBvc1tyb3ddLmFkZChjYy52MygwLCAwLCAzICogY29sKSlcclxuICAgICAgICAvLyAgICAga2gucG9zaXRpb24gPSBraC5sb2NhbHBvcy5hZGQoY2MudjMoMCwgMCwgMTApKVxyXG4gICAgICAgIC8vICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiV2Fsa1wiKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmFycktITWFuLnB1c2goa2gpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYXJyS0hwb3Nbcm93XS5wdXNoKGtoLmxvY2FscG9zKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmFyclBvc0N1cy5wdXNoKGtoLmxvY2FscG9zKVxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbihraCkudG8oMSwgeyBwb3NpdGlvbjoga2gubG9jYWxwb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSWRsZSAxXCIpXHJcbiAgICAgICAgLy8gICAgICAgICBraC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX3Nob3dcIilcclxuICAgICAgICAvLyAgICAgICAgIGlmIChpID09IDE0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5waGFzZTEoKVxyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9LDAuNSlcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpICUgMiAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMjsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RLSFByZS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtoID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0S0hQcmVbcmRdKVxyXG4gICAgICAgICAgICAgICAgICAgIGtoLnBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImtoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHJvdyA9IGkgJSAzXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbCA9IGlcclxuICAgICAgICAgICAgICAgICAgICBraC5sb2NhbHBvcyA9IGZpcnRQb3Nbal0uYWRkKGNjLnYzKDAsIDAsIDMgKiBjb2wpKVxyXG4gICAgICAgICAgICAgICAgICAgIGtoLnBvc2l0aW9uID0ga2gubG9jYWxwb3MuYWRkKGNjLnYzKDAsIDAsIDEwKSlcclxuICAgICAgICAgICAgICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiV2Fsa1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyS0hNYW4ucHVzaChraClcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFycktIcG9zW3Jvd10ucHVzaChraC5sb2NhbHBvcylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclBvc0N1cy5wdXNoKGtoLmxvY2FscG9zKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGtoKS50bygxLCB7IHBvc2l0aW9uOiBraC5sb2NhbHBvcyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2guY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIklkbGUgMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBraC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX3Nob3dcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RLSFByZS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtoID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0S0hQcmVbcmRdKVxyXG4gICAgICAgICAgICAgICAgICAgIGtoLnBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImtoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHJvdyA9IGkgJSAzXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbCA9IGlcclxuICAgICAgICAgICAgICAgICAgICBraC5sb2NhbHBvcyA9IGZpcnRQb3Nbal0uYWRkKGNjLnYzKDAsIDAsIDMgKiBjb2wpKVxyXG4gICAgICAgICAgICAgICAgICAgIGtoLnBvc2l0aW9uID0ga2gubG9jYWxwb3MuYWRkKGNjLnYzKDAsIDAsIDEwKSlcclxuICAgICAgICAgICAgICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiV2Fsa1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyS0hNYW4ucHVzaChraClcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFycktIcG9zW3Jvd10ucHVzaChraC5sb2NhbHBvcylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclBvc0N1cy5wdXNoKGtoLmxvY2FscG9zKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGtoKS50bygxLCB7IHBvc2l0aW9uOiBraC5sb2NhbHBvcyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2guY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIklkbGUgMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBraC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX3Nob3dcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMiAmJiBqID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlMSgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb2ZmR3VpbGQoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0QXJyb3cuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc3RlcEVuZCgpIHtcclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmdldENvbXBvbmVudChcIkFkTWFuYWdlclwiKS5vcGVuQWRVcmwoKVxyXG4gICAgICAgIHRoaXMuam95U3RpY2suZ2V0Q29tcG9uZW50KEpveVN0aWNrKS50b3VjaEVuZEV2ZW50KClcclxuICAgICAgICB0aGlzLmpveVN0aWNrLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBwaGFzZTEoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuam95U3RpY2suYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNDdXRTY2VuZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FscG9zKVxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhM0Qubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNjUsIDI2LCAxMykgfSkuZGVsYXkoMC41KS50bygwLjUsIHsgcG9zaXRpb246IGxvY2FscG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gZmFsc2VcclxuICAgICAgICAvLyB0aGlzLmpveVN0aWNrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyB0aGlzLmlzQ3V0U2NlbmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIC8vIHN0ZXAxKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJvdzEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudGV4dC5wb3NpdGlvbiA9IHRoaXMuY2hhci5wb3NpdGlvblxyXG4gICAgLy8gICAgICAgICB0aGlzLnRleHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFycm93Mi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmJhbkdoZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImJvX3Nob3djYXNoXCIpXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMudW5sb2NrTm9kZTEuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyM0QpLmVuYWJsZWQ9ZmFsc2VcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1N0ZXAgPSAyO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNoYXJDb21wLmlzQ29tcGxldGVDYXJyeSA9IGZhbHNlO1xyXG5cclxuICAgIC8vICAgICAgICAgfSwgMC41KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSA0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5jb3VudE1vbmV5IC09IDUwO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxiTW9uZXkuc3RyaW5nID0gdGhpcy5jb3VudE1vbmV5LnRvU3RyaW5nKClcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1N0ZXAgPSA1XHJcbiAgICAvLyAgICAgICAgIGxldCBwb3MgPSB0aGlzLnVubG9ja05vZGUxLnBvc2l0aW9uO1xyXG4gICAgLy8gICAgICAgICBwb3MgPSB0aGlzLnVubG9ja05vZGUxLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJvdzIuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2hhckNvbXAudHJhbnNNb25leShwb3MpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJvdzEuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZTEuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubGlzdEJhbkdoZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubGlzdEJhbkdoZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9fc2hvd2Nhc2hcIilcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMubGlzdEJhbkdoZS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9fc2hvd2Nhc2hcIilcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmtoMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMua2gxLmdldENvbXBvbmVudChcIkN1c3RvbWVyXCIpLm1vdmUoKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5raDIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmtoMi5nZXRDb21wb25lbnQoXCJDdXN0b21lclwiKS5tb3ZlKClcclxuICAgIC8vICAgICAgICAgfSwgMC44KVxyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5saXN0S0guZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgIH0sIDEpXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIHN0ZXAyKCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwic3RlcDIyMjJcIiwgdGhpcy5pc1N0ZXApXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNTdGVwID09IDIpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJvdzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYmFuR2hlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1N0ZXAgPSAzXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuam95U3RpY2suZ2V0Q29tcG9uZW50KEpveVN0aWNrKS5pc0N1dFNjZW5lPXRydWVcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5qb3lTdGljay5nZXRDb21wb25lbnQoSm95U3RpY2spLnRvdWNoRW5kRXZlbnQoKVxyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXJyb3czLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQ3V0U2NlbmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQ3V0U2NlbmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGxvY2FscG9zID0gdGhpcy5jYW1lcmEzRC5ub2RlLnBvc2l0aW9uXHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbHBvcylcclxuICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhM0Qubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNjEsIDQxLCA0MikgfSkuZGVsYXkoMC41KS50bygwLjUsIHsgcG9zaXRpb246IGxvY2FscG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc0N1dFNjZW5lID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgfSwgMSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gNSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFycm93Mi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1N0ZXAgPSA2XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuYXJyb3cyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmJhbkdoZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFycm93My5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH1cclxuICAgIGdldE1vbmV5KCkge1xyXG4gICAgICAgIC8vIHRoaXMuYXJyS0hNYW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNvdW50VUQrK1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50VUQgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnVubG9ja05vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnVubG9ja05vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyM0QpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVubG9ja05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCAgdGhpcy51bmxvY2tOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImFycm93RW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saXN0QXJyb3cuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXQgbW9uZXlcIilcclxuICAgICAgICB0aGlzLmNoYXJDb21wLmlzQmFuaE1pID0gZmFsc2VcclxuICAgICAgICBsZXQgY2hpbGRsZWF2ZSA9IHRoaXMuYXJyS0hNYW5bMF1cclxuICAgICAgICBjaGlsZGxlYXZlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Ta2VsZXRvbkFuaW1hdGlvbikucGxheShcIldhbGtcIilcclxuICAgICAgICBjaGlsZGxlYXZlLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJwb3BfY2xvc2VcIilcclxuICAgICAgICBjaGlsZGxlYXZlLmV1bGVyQW5nbGVzID0gY2MudjMoMCwgOTAsIDApXHJcbiAgICAgICAgdGhpcy5jaGFyLmdldENvbXBvbmVudChcIkNoYXJcIikuYmFnLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5hcnJLSE1hblswXSkuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNSwgMCwgMCkgfSkuc2V0KHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIDE4MCwgMCkgfSkuYnkoMiwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMjApIH0pLmNhbGwoKCkgPT4geyBjaGlsZGxlYXZlLmFjdGl2ZSA9IGZhbHNlIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmFycktITWFuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmFyclBvc0N1c1tpIC0gMV1cclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJLSE1hbltpXVxyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuNSwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5hcnJLSE1hbi5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJLSE1hbi5zcGxpY2UoMCwgMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNoaWxkLmdldENvbXBvbmVudChcIkNoYXJcIikuaWRsZSgpXHJcblxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5lZmZNb25leS5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmVmZk1vbmV5LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIC8vIHRoaXMuY2hhckNvbXAuY3JlYXRlTW9uZXkoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudE1vbmV5ICs9IDg7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVtIG1vbmV5XCIpXHJcbiAgICAgICAgICAgIHRoaXMubGJNb25leS5zdHJpbmcgPSB0aGlzLmNvdW50TW9uZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNTdGVwID09IDQpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwib25ublwiKVxyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5hcnJvdzEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMua2gxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5raDEuZ2V0Q29tcG9uZW50KFwiQ3VzdG9tZXJcIikubW92ZSgpXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmFycm93NS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5lbmRHYW1lLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHJhbnNNb25leSgpe1xyXG5cclxuICAgIC8vIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhM0Qubm9kZS5zZXRQb3NpdGlvbih0aGlzLmNoYXIucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwLCAyNikpLmNsYW1wZihjYy52MygtOSwgMzAsIDM4KSwgY2MudjMoOSwgMzAsIDMwKSkpO1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5pc0N1dFNjZW5lKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhM0Qubm9kZS5zZXRQb3NpdGlvbih0aGlzLmNoYXIucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwICogMS4zLCAyNiAqIDEuMykpKTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcclxuICAgIH1cclxuICAgIHJlc3BvbnNpdmUoKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLndpblNpemUud2lkdGggPCBjYy53aW5TaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZml0Q2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDAuN1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24gPSB0aGlzLm1haW5DYW1lcmEubm9kZS5wb3NpdGlvbi5hZGQoIGNjLnYzKC0xMDAsIDApKVxyXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhM0Quem9vbVJhdGlvPTFcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLnVpRml0LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGQuc2NhbGUgPSBjaGlsZC5zY2FsZSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuc2NhbGVYID0gMC44XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVpRml0LnNjYWxlWSA9IDAuOFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhM0Quem9vbVJhdGlvPTEuNVxyXG4gICAgICAgICAgICAvLyB0aGlzLnVpRml0LmNoaWxkcmVuWzBdLnNjYWxlID0gMC40XHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuY2hpbGRyZW5bMV0uc2NhbGUgPSAxXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmZpdENhbWVyYS56b29tUmF0aW8gPSAxXHJcbiAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAxLjNcclxuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy8gc2V0U2NyZWVuU2l6ZShpc0hvcml6b250YWwpIHsgLy8gcmVzcG9uc2l2ZSBnYW1lIG5nYW5nIGRvY1xyXG4gICAgLy8gICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAvLyAgICAgdGhpcy5qb3lTdGljay5zY2FsZSA9IChpc0hvcml6b250YWwpID8gMC41IDogMS44O1xyXG4gICAgLy8gICAgIC8vIHRoaXMuYnRuQ29udGludWUuY2hpbGRyZW5bMF0uc2NhbGUgPSAoaXNIb3Jpem9udGFsKSA/IDAuMjUgOiAwLjY7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5jYW1lcmEzRC56b29tUmF0aW8gPSAoaXNIb3Jpem9udGFsKSA/IDIgOiAxLjU7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5jYW1lcmEzRC5ub2RlLmV1bGVyQW5nbGVzID0gKGlzSG9yaXpvbnRhbCkgPyBjYy52MygtNDMsIDAsIDApIDogY2MudjMoLTQ2LCAwLCAwKVxyXG4gICAgLy8gICAgIC8vIGNhbnZhcy5maXRIZWlnaHQgPSAoaXNIb3Jpem9udGFsKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIC8vICAgICAvLyBjYW52YXMuZml0V2lkdGggPSAoaXNIb3Jpem9udGFsKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIC8vIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcSm95U3RpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUlDO1FBbElHLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFHcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixxQkFBcUI7UUFDckIsZ0NBQWdDO1FBRWhDLFdBQUssR0FBWSxJQUFJLENBQUE7UUFDckIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUMsS0FBSyxDQUFDOztJQW9IckIsQ0FBQztJQWxIRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsQ0FBQyxDQUFDO1FBQy9ELDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IsU0FBUztJQUNiLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFB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QUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekM7YUFDSTtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7SUFFTCxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQUU7SUFDVCxDQUFDO0lBaklEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUtyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBWEosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFJNUI7SUFBRCxlQUFDO0NBcklELEFBcUlDLENBcklxQyxFQUFFLENBQUMsU0FBUyxHQXFJakQ7a0JBcklvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9NUl80XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG90OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJpbmc6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gcGxheWVyTHVjaXVzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpbGQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICByYWRpdXMgPSBudWxsO1xyXG4gICAgc3RpY2tQb3MgPSBudWxsO1xyXG4gICAgdG91Y2hMb2NhdGlvbiA9IG51bGw7XHJcbiAgICBnYW1lUGxheSA9IG51bGw7XHJcbiAgICBvZmZHdWlkZSA9IGZhbHNlO1xyXG4gICAgaXNDdXRTY2VuZT1mYWxzZTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMucmluZy53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5pbml0VG91Y2hFdmVudCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoR2FtZVBsYXkpO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ3VpbGQuYWN0aXZlPXRydWVcclxuICAgICAgICAvLyB9LDEuNSlcclxuICAgIH1cclxuICAgIGluaXRUb3VjaEV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUV2ZW50LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvZmZUb3VjaEV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMKTtcclxuICAgIH1cclxuICAgIHRvdWNoU3RhcnRFdmVudChldmVudCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNDdXRTY2VuZSlyZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5vZmZHdWlkZSYmdGhpcy5ndWlsZC5hY3RpdmU9PXRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLm9mZkd1aWRlPXRydWVcclxuICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiTVJfNFwiKS5vZmZHdWlsZCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaGFuZEd1aWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuc3RpY2tQb3MgPSB0aGlzLnJpbmcuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoUG9zLnN1Yih0aGlzLnJpbmcuZ2V0UG9zaXRpb24oKS5tYWcoKSk7XHJcbiAgICAgICAgaWYgKHRoaXMucmFkaXVzID4gZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24odG91Y2hQb3MpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuY2hhckNvbXAuZGlyZWN0aW9uWCA9ICh0aGlzLmRvdC54ID4gMCkgPyAtMSA6IDE7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jaGFyQ29tcC5ydW4oKTtcclxuICAgICAgICB0aGlzLnN0aWNrUG9zID0gdG91Y2hQb3M7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy50b3VjaExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLnJpbmcuc2V0UG9zaXRpb24odG91Y2hQb3MpO1xyXG4gICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcclxuXHJcbiAgICB9XHJcbiAgICB0b3VjaE1vdmVFdmVudChldmVudCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNDdXRTY2VuZSlyZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMudG91Y2hMb2NhdGlvbiA9PT0gZXZlbnQuZ2V0TG9jYXRpb24oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gdGhpcy5yaW5nLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hQb3MubWFnKCk7XHJcbiAgICAgICAgY29uc3QgcG9zWCA9IHRoaXMuc3RpY2tQb3MueCArIHRvdWNoUG9zLng7XHJcbiAgICAgICAgY29uc3QgcG9zWSA9IHRoaXMuc3RpY2tQb3MueSArIHRvdWNoUG9zLnk7XHJcblxyXG4gICAgICAgIGNvbnN0IHAgPSBjYy52Mihwb3NYLCBwb3NZKS5zdWIodGhpcy5yaW5nLmdldFBvc2l0aW9uKCkpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnJhZGl1cyA+IGRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYyKHBvc1gsIHBvc1kpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLnN0aWNrUG9zLnggKyBwLnggKiB0aGlzLnJhZGl1cztcclxuICAgICAgICAgICAgY29uc3QgeSA9IHRoaXMuc3RpY2tQb3MueSArIHAueSAqIHRoaXMucmFkaXVzO1xyXG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbihjYy52Mih4LCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuY2hhckNvbXAucnVuKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jaGFyQ29tcC5tb3ZlRGlyID0gcDtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmNoYXJDb21wLmRpcmVjdGlvblggPSAodGhpcy5kb3QueCA+IDApID8gLTEgOiAxO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuY2hhckNvbXAuYW5nbGUgPSB0aGlzLmNoZWNrQW5nbGUodGhpcy5kb3QueCwgdGhpcy5kb3QueSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQW5nbGUocG9zWCwgcG9zWSkge1xyXG4gICAgICAgIGxldCBhbmdsZSA9IDA7XHJcbiAgICAgICAgbGV0IG1pZFBvaW50ID0gdGhpcy5yaW5nLnBvc2l0aW9uO1xyXG4gICAgICAgIGlmIChwb3NYID09IG1pZFBvaW50LnggJiYgcG9zWSAhPSBtaWRQb2ludC55KSBhbmdsZSA9IChwb3NZIDw9IG1pZFBvaW50LnkpID8gMCA6IDE4MDtcclxuICAgICAgICBpZiAocG9zWSA9PSBtaWRQb2ludC55ICYmIHBvc1ggIT0gbWlkUG9pbnQueCkgYW5nbGUgPSAocG9zWCA8PSBtaWRQb2ludC54KSA/IC05MCA6IDkwO1xyXG4gICAgICAgIGlmIChwb3NYICE9IG1pZFBvaW50LnggJiYgcG9zWSAhPSBtaWRQb2ludC55KSB7XHJcbiAgICAgICAgICAgIGxldCB0YW4gPSAocG9zWCAtIG1pZFBvaW50LngpIC8gKHBvc1kgLSBtaWRQb2ludC55KTtcclxuICAgICAgICAgICAgYW5nbGUgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpXHJcbiAgICAgICAgICAgIGlmIChwb3NZIDwgbWlkUG9pbnQueSAmJiBwb3NYID4gbWlkUG9pbnQueCkge1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgKj0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvc1kgPCBtaWRQb2ludC55ICYmIHBvc1ggPCBtaWRQb2ludC54KSB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSAqPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9zWSA+IG1pZFBvaW50LnkgJiYgcG9zWCA+IG1pZFBvaW50LngpIHtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gMTgwIC0gYW5nbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvc1kgPiBtaWRQb2ludC55ICYmIHBvc1ggPCBtaWRQb2ludC54KSB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IDE4MCAtIGFuZ2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbmdsZTtcclxuICAgIH1cclxuICAgIHRvdWNoRW5kRXZlbnQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0N1dFNjZW5lKXJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYzKDAsIC0xODMpKTtcclxuICAgICAgICAgICAgdGhpcy5yaW5nLnNldFBvc2l0aW9uKGNjLnYzKDAsIC0xODMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmNoYXJDb21wLmlkbGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTVJfMjMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7QUFDZCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJUQztRQXpURyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxJQUFJLENBQUE7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBYyxJQUFJLENBQUE7UUFFOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGVBQVMsR0FBaUIsSUFBSSxDQUFBO1FBRTlCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixjQUFRLEdBQUcsOEJBQThCLENBQUE7UUFFekMsb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGVBQVMsR0FBRyxLQUFLLENBQUE7O0lBZ1JyQixDQUFDO0lBL1FHLHdCQUFLLEdBQUw7UUFDSSxJ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QUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdkYsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEYsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ1YsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzRCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDVixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM1RCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDVixJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQzFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDUCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFF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OiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmdsb2JhbFRoaXMubW9uZXkgPSAwXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBtYWluQ2FtZXJhMjogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTW9uZXlDb2xsZWN0OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RVbmxvY2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UG9wOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlTW9uZXk6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYk1vbmV5OiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVNwYXdNb25leTogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Db2xsZWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRNb25leTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2hvdzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0S0gzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtIMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGN1cnJlbnRCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuXHJcbiAgICBpc01vbmV5Q29sbGVjdCA9IDUwO1xyXG4gICAgaXNVbmxvY2sgPSAwO1xyXG4gICAgaXNVcGdyYWRlID0gZmFsc2VcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG4gICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoMCwgNTApKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoMjE0LCA0ODApKVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBzcGF3TW9uZXkoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBtb25leSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlU3Bhd01vbmV5KVxyXG4gICAgICAgICAgICBtb25leS5wYXJlbnQgPSB0aGlzLmJ0bkNvbGxlY3QucGFyZW50XHJcbiAgICAgICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmxiTW9uZXkubm9kZS5wYXJlbnQucG9zaXRpb25cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYnRuQ29sbGVjdC5wb3NpdGlvblxyXG4gICAgICAgICAgICBtb25leS5wb3NpdGlvbiA9IHBvc1xyXG5cclxuICAgICAgICAgICAgbGV0IHJkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwMCkgLSAyMDBcclxuICAgICAgICAgICAgbGV0IHJkeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwMCkgLSAyMDBcclxuICAgICAgICAgICAgbGV0IHBvczIgPSBjYy52Myhwb3MueCArIHJkeCwgcG9zLnkgKyByZHkpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG1vbmV5KS50bygwLjIsIHsgcG9zaXRpb246IHBvczIgfSkudG8oMC41LCB7IHBvc2l0aW9uOiBwb3NFbmQgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb25leS5kZXN0cm95KClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ0bl9jb2xsZWN0KCkge1xyXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuaXNNb25leUNvbGxlY3RcclxuICAgICAgICB0aGlzLmlzTW9uZXlDb2xsZWN0ID0gMFxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMubW9uZXkgKz0gY291bnQ7XHJcbiAgICAgICAgfSwgMC43KVxyXG5cclxuICAgICAgICBpZiAoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd01vbmV5KClcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTW9uZXksIGZhbHNlLCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc1VwZ3JhZGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmxvY2sgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVW5sb2NrID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb21DYW0oMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVW5sb2NrID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzVW5sb2NrID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVW5sb2NrID09IDEgJiYgZ2xvYmFsVGhpcy5tb25leSA+PSA3NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbUNhbSgyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVbmxvY2sgPSAyO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzVW5sb2NrID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVW5sb2NrID09IDIgJiYgZ2xvYmFsVGhpcy5tb25leSA+PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb21DYW0oMylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVW5sb2NrID0gMztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1VubG9jayA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInpvb20gNFwiKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmxvY2sgPT0gMyAmJiBnbG9iYWxUaGlzLm1vbmV5ID49IDEyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb21DYW0oNClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVW5sb2NrID0gNTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMuaXNVbmxvY2sgPT0gMykge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pc1VubG9jayA9PSAzICYmIGdsb2JhbFRoaXMubW9uZXkgPj0gMTIwMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy56b29tQ2FtKDQpXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzVW5sb2NrID0gNDtcclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmxiTW9uZXkuc3RyaW5nID0gZ2xvYmFsVGhpcy5tb25leS50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5sYk1vbmV5Q29sbGVjdC5zdHJpbmcgPSB0aGlzLmlzTW9uZXlDb2xsZWN0LnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRTY3JlZW5TaXplKGlzSG9yaXpvbnRhbCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IChpc0hvcml6b250YWwpID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRIZWlnaHQgPSAoaXNIb3Jpem9udGFsKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJlc3BvbnNpdmUoKSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoID49IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZSh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhMi5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5idG5Db2xsZWN0LnNjYWxlID0gMS41XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJhci5zY2FsZT0wLjlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhMi5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ29sbGVjdC5zY2FsZSA9IDFcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmFyLnNjYWxlPTAuNlxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidG5fdW5sb2NrKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0YWdfY2xvc2VcIilcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51bmxvY2tOb2RlKHRoaXMubGlzdFVubG9jay5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLm1vbmV5IC09IDI1XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1vbmV5KGNjLnYzKC0xMjMsIC0xNTUpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoLTI0MCwgLTIyNikpXHJcbiAgICAgICAgICAgICAgICB9LCAwLjgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52MygxMDAsIC0yMjYpKVxyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEtIMS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZSh0aGlzLmxpc3RVbmxvY2suY2hpbGRyZW5bMV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52Myg1MjQsIC0zNDkpKVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5tb25leSAtPSA3NVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52Myg1MjQsIC0zNDkpKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoLTEyMywgLTE1NSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25leShjYy52Myg2NDUsIC01MjQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoNTI0LCAtMzQ5KSlcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwLjgpXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVubG9ja05vZGUodGhpcy5saXN0VW5sb2NrLmNoaWxkcmVuWzJdKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoLTEyMywgLTE1NSkpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5jcmVhdGVNb25leShjYy52MygtMjQwLCAtMjI2KSlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB9LCAwLjgpXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVubG9ja05vZGUodGhpcy5saXN0VW5sb2NrLmNoaWxkcmVuWzNdKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMubW9uZXkgLT0gNDAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1vbmV5KGNjLnYzKC0xNDcsIDQzNCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1vbmV5KGNjLnYzKC0zODgsIDQ5OCkpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uZXkoY2MudjMoMTM1LCA0NDEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEtIMy5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMC44KVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNyZWF0ZU1vbmV5KHBvcykge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRNb25leSwgZmFsc2UsIDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1vbmV5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVNb25leSlcclxuICAgICAgICAgICAgbW9uZXkucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBtb25leS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgICAgICBtb25leS5ncm91cCA9IFwiY2FtXCJcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vbmV5Q29sbGVjdCArPSAyNVxyXG4gICAgICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgfSwgMilcclxuXHJcbiAgICB9XHJcbiAgICB6b29tQ2FtKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5pc1VwZ3JhZGUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93LCBmYWxzZSwgMSlcclxuICAgICAgICB9LCAwLjQpXHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDEuNSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxpc3RQb3AuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RQb3AuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKC0xMDAsIDApIH0pLmRlbGF5KDAuMTUpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGlzdFBvcC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTEwMCwgLTEwMCkgfSkuZGVsYXkoMC4xNSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5saXN0UG9wLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDEuNSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RQb3AuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoNDgxLCAtMjUwKSB9KS5kZWxheSgwLjE1KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmhhbmQyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52Myg0MDAsIC0zNTApIH0pLmRlbGF5KDAuMTUpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaGFuZDIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMS41IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMikudG8oMC4zLCB7IHpvb21SYXRpbzogMi41IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvcC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MygtNjksIDM1MCkgfSkuZGVsYXkoMC4xNSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTY5LCAzNTApIH0pLmRlbGF5KDAuMTUpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMS41IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMikudG8oMC4zLCB7IHpvb21SYXRpbzogMi41IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvcC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52Myg0MDIsIDE2NikgfSkuZGVsYXkoMC4xNSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoNDAyLCAzMDApIH0pLmRlbGF5KDAuMTUpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5sb2NrTm9kZShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBub2RlLmNoaWxkcmVuQ291bnQgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb21CYWNrKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBpICogMC4wNSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB6b29tQmFjaygpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDEgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIpLnRvKDAuMywgeyB6b29tUmF0aW86IDEuNSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzVXBncmFkZSA9IGZhbHNlXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MygwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1VwZ3JhZGUgPSBmYWxzZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcQ2hhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyx1Q0FBaUM7QUFFakM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3SkM7UUFySkcsMkJBQXFCLEdBQXlCLElBQUksQ0FBQztRQUduRCxjQUFRLEdBQUcsR0FBRyxDQUFDO1FBR2YsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUVkLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsWUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNWLGNBQVEsR0FBRyxLQUFLLENBQUE7O0lBNkdwQixDQUFDO0lBNUdHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1B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RSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsaUNBQWlDO1lBRWpDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBcEpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzsyREFDb0I7SUFHbkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDTjtJQUdmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBdEJILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3SjVCO0lBQUQsZUFBQztDQXhKRCxBQXdKQyxDQXhKcUMsRUFBRSxDQUFDLFNBQVMsR0F3SmpEO2tCQXhKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tICcuL0dhbWVQbGF5J1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNrZWxldG9uQW5pbWF0aW9uKVxyXG4gICAgYm9keVNrZWxldG9uQW5pbWF0aW9uOiBjYy5Ta2VsZXRvbkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBzcGVlZFJ1biA9IDI1MDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDYXJyeTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJhcE5nb1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcXVhQ2FjaHVhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENvbGxlY3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRQdXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgZ2FtZVBsYXkgPSBudWxsO1xyXG5cclxuICAgIGlzQ2FycnlpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBpc0NvbXBsZXRlQ2FycnkgPSBmYWxzZTtcclxuXHJcbiAgICBudW1DYXJyeSA9IDA7XHJcblxyXG4gICAgYW5nbGUgPSAwO1xyXG5cclxuICAgIGlzUnVuID0gZmFsc2U7XHJcblxyXG4gICAgbW92ZURpciA9IG51bGw7XHJcblxyXG4gICAgZGlyZWN0aW9uWCA9IG51bGw7XHJcblxyXG4gICAgbnVtQ2FjaHVhID0gMDtcclxuXHJcbiAgICBudW1OZ28gPSAwXHJcbiAgICBpc0JhbmhNaSA9IGZhbHNlXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVQbGF5KTtcclxuICAgICAgICB0aGlzLmlzQ29tcGxldGVDYXJyeSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1J1biAmJiAhdGhpcy5pc0NvbXBsZXRlQ2FycnkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1J1biA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGxldCBhbmltTmFtZSA9ICh0aGlzLmlzQ2FycnlpbmcpID8gJ1J1biAyJyA6ICdSdW4gMSc7XHJcbiAgICAgICAgICAgIGxldCBhbmltTmFtZSA9ICdSdW4gc3RhY2snO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheShhbmltTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkQmFuaE1pKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0JhbmhNaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUHV0LCBmYWxzZSwgMSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzQmFuaE1pID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5iYWcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgQm1cIilcclxuICAgICAgICAgICAgbGV0IGFuaW1OYW1lID0gJ1J1biBzdGFjayc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZGxlKCkge1xyXG4gICAgICAgIHRoaXMuaXNSdW4gPSBmYWxzZTtcclxuICAgICAgICAvLyBsZXQgYW5pbU5hbWUgPSAodGhpcy5pc0NhcnJ5aW5nKSA/ICdJZGxlIDInIDogJ0lkbGUgMSc7XHJcbiAgICAgICAgbGV0IGFuaW1OYW1lID0gJ0lkbGUnO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQmFuaE1pKSB7IGFuaW1OYW1lID0gXCJSdW4gc3RhY2tcIiB9XHJcbiAgICAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheShhbmltTmFtZSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVNb25leSgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbShcImNheW5nb1wiKVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHRyYW5zTW9uZXkocG9zKSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5saXN0Q2FycnkuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNNb25leVwiKVxyXG4gICAgICAgIGxldCBjb3VudCA9IDBcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5saXN0Q2FycnkuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdENhcnJ5LmNoaWxkcmVuW2ldKS5kZWxheShjb3VudCAqIDAuMDIpLnRvKDAuMywgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FycnkuY2hpbGRyZW5baV0uZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLm51bUNhcnJ5IDwgMzIpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5hcnJvd0dhcmRlbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZ2FtZVBsYXkuY291bnRDdXN0b21lciA8IDQpIHRoaXMuZ2FtZVBsYXkuYXJyb3dLZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2FycnlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBsZXQgYW5pbU5hbWUgPSAodGhpcy5pc0NhcnJ5aW5nKSA/ICdSdW4gMicgOiAnUnVuIDEnO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5udW1DYXJyeSArPSAyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtID09ICdjYXljYWNodWEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnF1YUNhY2h1YVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1DYWNodWEgKz0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtID09ICdjYXluZ28nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhcE5nb1ByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1OZ28gKz0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGl0ZW1Ob2RlLnNldFBvc2l0aW9uKGNjLnYzKDAsIDAuNSArICh0aGlzLm51bUNhcnJ5IC0gaSkgKiAwLjQsIDAuMykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FycnkuYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29sbGVjdCwgZmFsc2UsIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBsZXRlQ2FycnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdENhcnJ5LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVEZWxheSA9IHRoaXMubGlzdENhcnJ5LmNoaWxkcmVuLmxlbmd0aCAqIDAuMDJcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZUNhcnJ5KSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2FycnkuY2hpbGRyZW4ucmV2ZXJzZSgpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5hZGRJdGVtT25LZShpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtQ2FycnktLTtcclxuICAgICAgICAgICAgICAgIH0sIGluZGV4ICogMC4wMik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29tcGxldGVDYXJyeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NhcnJ5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1J1bikgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheSgnUnVuIDEnKTtcclxuICAgICAgICAgICAgfSwgdGltZURlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZURpciAmJiB0aGlzLmRpcmVjdGlvblggJiYgdGhpcy5pc1J1biAmJiAhdGhpcy5pc0NvbXBsZXRlQ2FycnkpIHtcclxuICAgICAgICAgICAgbGV0IGRlbHRhID0gY2MudjModGhpcy5tb3ZlRGlyLngsIDAsIC10aGlzLm1vdmVEaXIueSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGRlbHRhLm11bCh0aGlzLnNwZWVkUnVuIC8gMTMwMCkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zLmNsYW1wZihjYy52MygtODMsIDIwMCwgMTApLCBjYy52MygtNDAsIDAsIC0xNikpKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1Bvcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBjYy52MygwLCB0aGlzLmFuZ2xlLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxBZE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmRyb2lkTGluayIsImlvc0xpbmsiLCJkZWZhdWx0TGluayIsIm9wZW5BZFVybCIsImNsaWNrVGFnIiwid2luZG93IiwiYWRjaGFuZWwiLCJjb25zb2xlIiwibG9nIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTO0FBREEsS0FETDtBQUlSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUztBQURKLEtBSkQ7QUFPUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQTtBQVBMLEdBSFA7QUFlTEMsRUFBQUEsU0FBUyxFQUFFLHFCQUFVO0FBQ2pCO0FBQ0E7QUFDQSxRQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBQyxJQUFBQSxNQUFNLENBQUNMLFdBQVAsR0FBcUIsS0FBS0EsV0FBMUI7QUFDQUssSUFBQUEsTUFBTSxDQUFDSixPQUFQLEdBQWlCLEtBQUtBLE9BQXRCO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0gsV0FBUCxHQUFxQixLQUFLQSxXQUExQjtBQUNBLFFBQUlJLFFBQVEsR0FBRyw4QkFBZjs7QUFDQSxRQUFHRCxNQUFNLENBQUNGLFNBQVYsRUFBcUI7QUFDakJJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0FELE1BQUFBLE1BQU0sQ0FBQ0YsU0FBUCxDQUFpQkcsUUFBakI7QUFFSCxLQUpELE1BSU87QUFDSEQsTUFBQUEsTUFBTSxDQUFDSSxJQUFQO0FBQ0g7QUFDSjtBQTlCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFuZHJvaWRMaW5rOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpb3NMaW5rOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0TGluazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3BlbkFkVXJsOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vZ29vZ2xlIGluc3RhbnRcclxuICAgICAgICAvLyBjYy5hbmRyb2lkSW5zdGFudC5zaG93SW5zdGFsbFByb21wdCgnaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5nYW1lLnNwYWNlLnNob290ZXIyJylcclxuICAgICAgICB2YXIgY2xpY2tUYWcgPSAnJztcclxuICAgICAgICB3aW5kb3cuYW5kcm9pZExpbmsgPSB0aGlzLmFuZHJvaWRMaW5rO1xyXG4gICAgICAgIHdpbmRvdy5pb3NMaW5rID0gdGhpcy5pb3NMaW5rO1xyXG4gICAgICAgIHdpbmRvdy5kZWZhdWx0TGluayA9IHRoaXMuZGVmYXVsdExpbms7XHJcbiAgICAgICAgbGV0IGFkY2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICAgICAgaWYod2luZG93Lm9wZW5BZFVybCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhZGNoYW5lbCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuQWRVcmwoYWRjaGFuZWwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTVJfRGVjb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4SkM7UUE1SkcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFBO1FBQ3hCLGdCQUFVLEdBQUcsS0FBSyxDQUFBOztJQW9JdEIsQ0FBQztJQWxJRyxFQUFFO0lBRUYsd0JBQUssR0FBTDtRQUNJLDBDQUEwQztRQUUxQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUFBLGlCQTRCQztRQTNCRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUIsOENBQThDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxD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QUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUU1QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFFekIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUU1QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLDJDQUEyQztZQUMzQywyQ0FBMkM7WUFDM0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUM1QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUE7UUFDOUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUVoQyxRQUFRO0lBQ1osQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUV2QixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFFMUI7U0FDSjthQUNJO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFFeEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FHM0I7SUFJTCxDQUFDO0lBM0pEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBekJQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4SjVCO0lBQUQsZUFBQztDQTlKRCxBQThKQyxDQTlKcUMsRUFBRSxDQUFDLFNBQVMsR0E4SmpEO2tCQTlKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYXBOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmEzZDogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdyb3VwMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdyb3VwMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdyb3VwMzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVXBncmFkZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgb25FbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWluaUxvZ286IGNjLk5vZGUgPSBudWxsXHJcbiAgICBpc3ZlcnRpY2FsID0gZmFsc2VcclxuXHJcbiAgICAvL1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC44KVxyXG4gICAgfVxyXG4gICAgYnRuX2NhcmQxKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0Q2FyZC5jaGlsZHJlbikge1xyXG4gICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xyXG4gICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVcGdyYWRlLCBmYWxzZSwgMC44KVxyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTNkKS50bygwLjMsIHsgem9vbVJhdGlvOiAwLjYgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInNoYWRvd1wiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMubWFwTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubWFwTm9kZS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnBvc2l0aW9uID0gY2hpbGQucG9zaXRpb24uYWRkKGNjLnYzKDAsIDgsIDApKVxyXG4gICAgICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IDBcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5ID0gMC4xXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheSA9IDAuMTVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS5kZWxheShkZWxheSkuYnkoMC4zLCB7IHBvc2l0aW9uOiBjYy52MygwLCAtOCwgLTApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25TdGVwMigpXHJcbiAgICAgICAgfSwgMSlcclxuXHJcbiAgICB9XHJcbiAgICBidG5fY2FyZDIoKSB7XHJcbiAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVcGdyYWRlLCBmYWxzZSwgMC44KVxyXG5cclxuICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcclxuICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcclxuICAgICAgICB0aGlzLkdyb3VwMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZ3JvdXAxX29uXCIpXHJcbiAgICAgICAgdGhpcy5Hcm91cDEuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFkb3dcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25TdGVwMygpXHJcbiAgICAgICAgfSwgMC43KVxyXG4gICAgfVxyXG4gICAgYnRuX2NhcmQzKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Hcm91cDIuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFkb3dcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVcGdyYWRlLCBmYWxzZSwgMC44KVxyXG5cclxuICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcclxuICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcclxuICAgICAgICAvLyB0aGlzLkdyb3VwMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZ3JvdXAyX29uXCIpXHJcbiAgICAgICAgdGhpcy5Hcm91cDIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInNob3dfZ3JvdXAyXCIpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblN0ZXA0KClcclxuICAgICAgICB9LCAwLjgpXHJcbiAgICB9XHJcbiAgICBvblN0ZXAyKCkge1xyXG4gICAgICAgIHRoaXMuR3JvdXAxLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYTNkKS50bygwLjUsIHsgem9vbVJhdGlvOiAxLjUgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhM2Qubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic2NlbmVfdHJhbnMxXCIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSwgMC44KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG4gICAgb25TdGVwMygpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYTNkLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInNjZW5lX3RyYW5zMlwiKVxyXG4gICAgICAgIHRoaXMuR3JvdXAyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bNV0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSwgMC44KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG4gICAgb25TdGVwNCgpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYTNkLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInNjZW5lX3RyYW5zM1wiKVxyXG4gICAgICAgIHRoaXMuR3JvdXAzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bNl0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5saXN0Q2FyZC5jaGlsZHJlbls3XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRDYXJkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5taW5pTG9nby5hY3RpdmU9ZmFsc2VcclxuICAgICAgICB9LCAwLjkpXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIH0sIDEpXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG5cclxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc3ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcYW5pbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1CQztRQWhCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBWXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBWEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFkRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtQjVCO0lBQUQsZUFBQztDQW5CRCxBQW1CQyxDQW5CcUMsRUFBRSxDQUFDLFNBQVMsR0FtQmpEO2tCQW5Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgZmluaXNoKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxQbGF5QXVkaW8uanMiXSwibmFtZXMiOlsiZ2FtZVN0YXJ0IiwiY29uc29sZSIsImxvZyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNIOztBQUNEQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJHO0FBQ0pQLElBQUFBLFNBQVM7QUFDWixHQTNCSSxDQStCTDs7QUEvQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmZ1bmN0aW9uIGdhbWVTdGFydCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFoYVwiKTtcclxufVxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgZ2FtZVN0YXJ0KCk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
