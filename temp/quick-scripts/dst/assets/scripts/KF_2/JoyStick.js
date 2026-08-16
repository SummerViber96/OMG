
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