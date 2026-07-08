
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Gym/Script/itemGym.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd40f42926xBKJ6BthhDphPw', 'itemGym');
// Gym/Script/itemGym.ts

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
        _this.tag = 0;
        _this.colorG = 0;
        _this.target = null;
        _this.gamePlay = null;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.localPos = cc.v3(0, 0);
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym");
        switch (this.tag) {
            case 0:
                this.target = this.gamePlay.giaTaNho;
                break;
            case 1:
                this.target = this.gamePlay.giaTaLon;
                break;
            case 2:
                this.target = this.gamePlay.tuKhan;
                break;
            case 3:
                this.target = this.gamePlay.tuNuoc;
                break;
        }
        var touchNode = this.node;
        this.localPos = this.node.position;
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    NewClass.prototype.getTouchPosInParent = function (event) {
        var worldPos = this.gamePlay.camera.getScreenToWorldPoint(event.getLocation());
        return this.node.parent.convertToNodeSpaceAR(worldPos);
    };
    NewClass.prototype.onTouchStart = function (event) {
        var touchPos = this.getTouchPosInParent(event);
        // this.localPos = this.node.position.sub(touchPos)
    };
    NewClass.prototype.onTouchMove = function (event) {
        var touchPos = this.getTouchPosInParent(event);
        this.node.setPosition(touchPos);
        if (this.target && this.target.getChildByName("hind").active == false) {
            this.target.getChildByName("hind").active = true;
        }
    };
    NewClass.prototype.onTouchEnd = function (event) {
        var _this = this;
        var check = this.gamePlay.checkItem(this.node, event.getLocation());
        console.log(check);
        if (!check) {
            cc.audioEngine.play(this.gamePlay.soundWrong, false, 1);
            this.node.getChildByName("wrong").getComponent(cc.Animation).play();
            this.scheduleOnce(function () {
                _this.node.setPosition(_this.localPos);
            }, 0.3);
        }
        this.target.getChildByName("hind").active = false;
    };
    NewClass.prototype.clickItem = function (event) {
        event.currentTarget.getComponent(cc.Button).enabled = false;
        console.log(this.node.name);
        this.gamePlay.clickItem(this.node);
    };
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "colorG", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXGl0ZW1HeW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtRkM7UUFoRkcsU0FBRyxHQUFHLENBQUMsQ0FBQTtRQUVQLFlBQU0sR0FBRyxDQUFDLENBQUE7UUFFVixZQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ2IsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUVmLHdCQUF3QjtRQUV4QixlQUFlO1FBQ2YsY0FBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOztRQXFFdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUE3REcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUUzRCxRQUFPLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDWixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDbkMsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUNuQyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pDLE1BQU07WUFD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LEdBQUcsS0FBSyxDQUFDO0lBQ3RELENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsS0FBSztRQUNYLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQTlFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lDQUNkO0lBRVA7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0Q0FDWDtJQUVWO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0w7SUFQSSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUY1QjtJQUFELGVBQUM7Q0FuRkQsQUFtRkMsQ0FuRnFDLEVBQUUsQ0FBQyxTQUFTLEdBbUZqRDtrQkFuRm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGFnID0gMFxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBjb2xvckcgPSAwXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhcmdldCA9IG51bGxcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgbG9jYWxQb3MgPSBjYy52MygwLCAwKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR3ltXCIpXHJcblxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnRhZyl7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0PXRoaXMuZ2FtZVBsYXkuZ2lhVGFOaG87XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQ9dGhpcy5nYW1lUGxheS5naWFUYUxvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldD10aGlzLmdhbWVQbGF5LnR1S2hhbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldD10aGlzLmdhbWVQbGF5LnR1TnVvYztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3VjaE5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5sb2NhbFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvblxyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0VG91Y2hQb3NJblBhcmVudChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zID0gdGhpcy5nYW1lUGxheS5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KGV2ZW50LmdldExvY2F0aW9uKCkpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpXHJcbiAgICB9XHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMuZ2V0VG91Y2hQb3NJblBhcmVudChldmVudClcclxuICAgICAgICAvLyB0aGlzLmxvY2FsUG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yih0b3VjaFBvcylcclxuICAgIH1cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLmdldFRvdWNoUG9zSW5QYXJlbnQoZXZlbnQpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRvdWNoUG9zKVxyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmdhbWVQbGF5LmNoZWNrSXRlbSh0aGlzLm5vZGUsIGV2ZW50LmdldExvY2F0aW9uKCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2spXHJcbiAgICAgICAgaWYgKCFjaGVjaykge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndyb25nXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5sb2NhbFBvcylcclxuXHJcbiAgICAgICAgICAgIH0sIDAuMylcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja0l0ZW0oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZS5uYW1lKVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuY2xpY2tJdGVtKHRoaXMubm9kZSlcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19