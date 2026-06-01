
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/JoyStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '175c95KQxdMFaXQ667wjLz8', 'JoyStick');
// scripts/common/JoyStick.ts

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
        _this.dot = null;
        _this.ring = null;
        _this.guild = null;
        _this.shadow = null;
        _this.radius = null;
        _this.stickPos = null;
        _this.touchLocation = null;
        _this.gamePlay = null;
        _this.offGuide = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("ICY_19");
    };
    NewClass.prototype.start = function () {
        this.radius = this.ring.width / 2;
        this.initTouchEvent();
    };
    NewClass.prototype.initTouchEvent = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    NewClass.prototype.touchStartEvent = function (event) {
        if (!this.offGuide) {
            this.offGuide = true;
            this.guild.active = false;
            this.node.getChildByName("name").active = false;
            this.shadow.active = false;
        }
        // if (this.gamePlay.isArrowOn) {
        //     this.gamePlay.arrow2.active = false;
        // }
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.stickPos = this.ring.getPosition();
        var distance = touchPos.sub(this.ring.getPosition().mag());
        if (this.radius > distance) {
            this.dot.setPosition(touchPos);
        }
        this.gamePlay.charComp.directionX = (this.dot.x > 0) ? -1 : 1;
        this.gamePlay.charComp.direction = (this.dot.y > 0) ? 1 : 2;
        this.gamePlay.charComp.run();
        this.stickPos = touchPos;
        this.node.opacity = 255;
        this.touchLocation = event.getLocation();
        this.ring.setPosition(touchPos);
        this.dot.setPosition(touchPos);
    };
    NewClass.prototype.touchMoveEvent = function (event) {
        // if (this.gamePlay.isArrowOn) return;
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
        this.gamePlay.charComp.moveDir = p;
        this.gamePlay.charComp.directionX = (this.dot.x - this.ring.x > 0) ? -1 : 1;
        this.gamePlay.charComp.direction = (this.dot.y > 0) ? 1 : 2;
        this.gamePlay.charComp.run();
    };
    NewClass.prototype.touchEndEvent = function () {
        this.dot.setPosition(this.ring.getPosition());
        // this.node.opacity = 0;
        this.gamePlay.charComp.stop();
        this.dot.setPosition(cc.v3(0, 0));
        this.ring.setPosition(cc.v3(0, 0));
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
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "shadow", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxKb3lTdGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNHQztRQW5HRyxTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBQ3RCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUF1RnJCLENBQUM7SUFyRkcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFMUIsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMs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QUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUUxQyxJQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JFLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUNJO1lBQ0QsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzlDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO1FBR0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFakMsQ0FBQztJQUNELGdDQUFhLEdBQWI7UUFFSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDOUMseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQUU7SUFDVCxDQUFDO0lBbEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFWTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0c1QjtJQUFELGVBQUM7Q0F0R0QsQUFzR0MsQ0F0R3FDLEVBQUUsQ0FBQyxTQUFTLEdBc0dqRDtrQkF0R29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi4vY29uc3RhbnRcIjtcclxuaW1wb3J0IEcgZnJvbSBcIi4uL0lDWV8xOVwiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmluZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2hhZG93OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcmFkaXVzID0gbnVsbDtcclxuICAgIHN0aWNrUG9zID0gbnVsbDtcclxuICAgIHRvdWNoTG9jYXRpb24gPSBudWxsO1xyXG4gICAgZ2FtZVBsYXkgPSBudWxsO1xyXG4gICAgb2ZmR3VpZGUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJJQ1lfMTlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5yaW5nLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLmluaXRUb3VjaEV2ZW50KCk7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0VG91Y2hFdmVudCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydEV2ZW50LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdG91Y2hTdGFydEV2ZW50KGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5vZmZHdWlkZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZkd1aWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2hhZG93LmFjdGl2ZT1mYWxzZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmdhbWVQbGF5LmlzQXJyb3dPbikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVQbGF5LmFycm93Mi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5zdGlja1BvcyA9IHRoaXMucmluZy5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hQb3Muc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpLm1hZygpKTtcclxuICAgICAgICBpZiAodGhpcy5yYWRpdXMgPiBkaXN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbih0b3VjaFBvcylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jaGFyQ29tcC5kaXJlY3Rpb25YID0gKHRoaXMuZG90LnggPiAwKSA/IC0xIDogMTtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmNoYXJDb21wLmRpcmVjdGlvbiA9ICh0aGlzLmRvdC55ID4gMCkgPyAxIDogMjtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmNoYXJDb21wLnJ1bigpO1xyXG4gICAgICAgIHRoaXMuc3RpY2tQb3MgPSB0b3VjaFBvcztcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLnRvdWNoTG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmluZy5zZXRQb3NpdGlvbih0b3VjaFBvcyk7XHJcbiAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24odG91Y2hQb3MpO1xyXG5cclxuICAgIH1cclxuICAgIHRvdWNoTW92ZUV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZ2FtZVBsYXkuaXNBcnJvd09uKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRvdWNoTG9jYXRpb24gPT09IGV2ZW50LmdldExvY2F0aW9uKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMucmluZy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoUG9zLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IHBvc1ggPSB0aGlzLnN0aWNrUG9zLnggKyB0b3VjaFBvcy54O1xyXG4gICAgICAgIGNvbnN0IHBvc1kgPSB0aGlzLnN0aWNrUG9zLnkgKyB0b3VjaFBvcy55O1xyXG5cclxuICAgICAgICBjb25zdCBwID0gY2MudjIocG9zWCwgcG9zWSkuc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKS5ub3JtYWxpemUoKTtcclxuICAgICAgICBpZiAodGhpcy5yYWRpdXMgPiBkaXN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbihjYy52Mihwb3NYLCBwb3NZKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5zdGlja1Bvcy54ICsgcC54ICogdGhpcy5yYWRpdXM7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLnN0aWNrUG9zLnkgKyBwLnkgKiB0aGlzLnJhZGl1cztcclxuICAgICAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24oY2MudjIoeCwgeSkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuY2hhckNvbXAubW92ZURpciA9IHA7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jaGFyQ29tcC5kaXJlY3Rpb25YID0gKHRoaXMuZG90LnggLSB0aGlzLnJpbmcueCA+IDApID8gLTEgOiAxO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuY2hhckNvbXAuZGlyZWN0aW9uID0gKHRoaXMuZG90LnkgPiAwKSA/IDEgOiAyO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuY2hhckNvbXAucnVuKCk7XHJcblxyXG4gICAgfVxyXG4gICAgdG91Y2hFbmRFdmVudCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24odGhpcy5yaW5nLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmNoYXJDb21wLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbihjYy52MygwLCAwKSk7XHJcbiAgICAgICAgdGhpcy5yaW5nLnNldFBvc2l0aW9uKGNjLnYzKDAsIDApKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgIH1cclxufVxyXG4iXX0=