
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/animal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e308XSWZ1F7bpy830Izbrv', 'animal');
// scripts/animal.ts

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
        _this.anim = null;
        _this.hp = 100;
        _this.gamePlay = null;
        _this.soundLonKeu = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.spineListener();
        this.gamePlay = cc.Canvas.instance.node.getComponent("game");
    };
    NewClass.prototype.idle = function () {
        this.anim.setAnimation(0, "Idle", true);
    };
    NewClass.prototype.run = function () {
        this.anim.setAnimation(0, "Move", true);
    };
    NewClass.prototype.attack = function () {
        this.anim.setAnimation(0, "Attack", true);
    };
    NewClass.prototype.die = function () {
        this.anim.setAnimation(0, "Dead", false);
    };
    NewClass.prototype.spineListener = function () {
        var _this = this;
        this.anim.setCompleteListener(function (track) {
            if (track.animation.name == 'Spawn') {
                // this.node.destroy();
                _this.idle();
            }
            if (track.animation.name == 'Spawn') {
                // this.node.destroy();
                _this.idle();
            }
        });
    };
    NewClass.prototype.attacked = function (damage) {
        var _this = this;
        this.hp -= damage;
        this.node.children[1].children[1].getComponent(cc.Sprite).fillRange = this.hp / 100;
        if (this.hp <= 0) {
            cc.audioEngine.play(this.soundLonKeu, false, 0.8);
            this.die();
            this.scheduleOnce(function () {
                _this.node.active = false;
                _this.gamePlay.btn_upgrade();
            }, 0.3);
        }
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundLonKeu", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYW5pbWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0RDO1FBdERHLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBQ3hCLFFBQUUsR0FBRyxHQUFHLENBQUM7UUFDVCxjQUFRLEdBQUcsSUFBSSxDQUFBO1FBRWYsaUJBQVcsR0FBYyxJQUFJLENBQUE7O1FBaUQ3QixpQkFBaUI7SUFDckIsQ0FBQztJQWpERyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFDRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ0Qsc0JBQUcsR0FBSDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBRTdDLENBQUM7SUFDRCxzQkFBRyxHQUFIO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUU1QyxDQUFDO0lBQ0QsZ0NBQWEsR0FBYjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFDLEtBQUs7WUFDaEMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7Z0JBQ2pDLHVCQUF1QjtnQkFDdkIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFBO2FBQ2Q7WUFDRCxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtnQkFDakMsdUJBQXVCO2dCQUN2QixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7YUFDZDtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELDJCQUFRLEdBQVIsVUFBUyxNQUFNO1FBQWYsaUJBYUM7UUFaRyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUE7UUFDbkYsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ2pELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUNWLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFBO2dCQUV0QixLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBRS9CLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtTQUNUO0lBQ0wsQ0FBQztJQXBERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzBDQUNFO0lBSXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ007SUFOWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0Q1QjtJQUFELGVBQUM7Q0F4REQsQUF3REMsQ0F4RHFDLEVBQUUsQ0FBQyxTQUFTLEdBd0RqRDtrQkF4RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsXHJcbiAgICBocCA9IDEwMDtcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9uS2V1OmNjLkF1ZGlvQ2xpcD1udWxsXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNwaW5lTGlzdGVuZXIoKVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJnYW1lXCIpXHJcbiAgICB9XHJcbiAgICBpZGxlKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIk1vdmVcIiwgdHJ1ZSlcclxuICAgIH1cclxuICAgIGF0dGFjaygpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiQXR0YWNrXCIsIHRydWUpXHJcblxyXG4gICAgfVxyXG4gICAgZGllKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJEZWFkXCIsIGZhbHNlKVxyXG5cclxuICAgIH1cclxuICAgIHNwaW5lTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0cmFjay5hbmltYXRpb24ubmFtZSA9PSAnU3Bhd24nKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHJhY2suYW5pbWF0aW9uLm5hbWUgPT0gJ1NwYXduJykge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXR0YWNrZWQoZGFtYWdlKSB7XHJcbiAgICAgICAgdGhpcy5ocCAtPSBkYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHRoaXMuaHAgLyAxMDBcclxuICAgICAgICBpZiAodGhpcy5ocCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvbktldSwgZmFsc2UsIDAuOClcclxuICAgICAgICAgICAgdGhpcy5kaWUoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT1mYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYnRuX3VwZ3JhZGUoKVxyXG5cclxuICAgICAgICAgICAgfSwwLjMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=