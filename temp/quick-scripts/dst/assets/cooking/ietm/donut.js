
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cooking/ietm/donut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd082fz7BjJI/p/dZqh8GMFZ', 'donut');
// cooking/ietm/donut.ts

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
        _this.vfxSmoke = null;
        _this.iconChin = null;
        _this.iconDau = null;
        _this.iconSocola = null;
        _this.isSocola = false;
        _this.isDau = false;
        _this.isStep = 0;
        _this.gamePlay = null;
        _this.isReady = false;
        _this.value = 0;
        _this.isTouching = false;
        return _this;
        // checkSlotKhay(){
        // }
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        this.gamePlay.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
        this.gamePlay.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouch, this);
        this.gamePlay.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    NewClass.prototype.show = function () {
        var _this = this;
        cc.tween(this.iconChin).to(1.5, { opacity: 255 }).call(function () {
            _this.isReady = true;
            // this.node.getComponent(cc.Button).enabled = true
            _this.node.children[0].active = false;
            _this.node.children[1].active = true;
        }).start();
    };
    NewClass.prototype.onTouch = function (event) {
        var worldPos = event.getLocation();
        this.tryAction(event);
    };
    NewClass.prototype.tryAction = function (event) {
        if (!this.isReady)
            return;
        if (this.isTouching)
            return;
        // touch position (WORLD)
        var touchPos = event.getLocation();
        // convert WORLD → LOCAL của parent
        var worldPos = event.getLocation();
        var localPos = this.gamePlay.camera.getScreenToWorldPoint(cc.v2(worldPos.x, worldPos.y));
        localPos = this.node.parent.convertToNodeSpaceAR(localPos);
        // rect của node trong parent space
        var rect = this.node.getBoundingBox();
        if (rect.contains(localPos)) {
            this.isTouching = true;
            this.btn_click();
        }
    };
    NewClass.prototype.onTouchEnd = function () {
        this.isTouching = false; // reset để lần sau vuốt lại được
    };
    NewClass.prototype.btn_click = function () {
        if (!this.isReady)
            return;
        if (this.isStep == 0) {
            this.gamePlay.clickDonut(this.value, this.node);
            this.node.getComponent(cc.Button).enabled = false;
            // this.isStep = 1;
        }
        else if (this.isStep == 1) {
        }
        else if (this.isStep == 2) {
            // this.node.getComponent(cc.Button).enabled=false
            this.gamePlay.sellDonut(this.value, this.node);
        }
    };
    NewClass.prototype.checkNhan = function () {
    };
    NewClass.prototype.appear = function () {
        // this.node.getComponent(cc.Button).enabled = true;
        this.vfxSmoke.active = true;
    };
    NewClass.prototype.onSocola = function () {
        this.isStep = 2;
        this.node.children[1].active = false;
        this.iconSocola.scale = 0;
        this.iconSocola.active = true;
        this.isSocola = true;
        cc.tween(this.iconSocola).to(0.3, { scale: 0.35 }).to(0.05, { scale: 0.3 }).call(function () {
            // this.node.getComponent(cc.Button).enabled = true
        }).start();
    };
    NewClass.prototype.onDau = function () {
        this.node.children[1].active = false;
        this.isStep = 2;
        this.iconDau.scale = 0;
        this.iconDau.active = true;
        this.isDau = true;
        cc.tween(this.iconDau).to(0.3, { scale: 0.8 }).to(0.05, { scale: 0.78 }).call(function () {
            // this.node.getComponent(cc.Button).enabled = true
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "vfxSmoke", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "iconChin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "iconDau", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "iconSocola", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcZG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrSEM7UUFoSEcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFLLEdBQUcsQ0FBQyxDQUFBO1FBMEJULGdCQUFVLEdBQUcsS0FBSyxDQUFBOztRQXNFbEIsbUJBQW1CO1FBRW5CLElBQUk7SUFFUixDQUFDO0lBbkdHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxJ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QUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxRSxtREFBbUQ7UUFFdkQsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDZCxDQUFDO0lBM0dEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFSVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0g1QjtJQUFELGVBQUM7Q0FsSEQsQUFrSEMsQ0FsSHFDLEVBQUUsQ0FBQyxTQUFTLEdBa0hqRDtrQkFsSG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHZmeFNtb2tlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaWNvbkNoaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpY29uRGF1OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaWNvblNvY29sYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBpc1NvY29sYSA9IGZhbHNlO1xyXG4gICAgaXNEYXUgPSBmYWxzZTtcclxuICAgIGlzU3RlcCA9IDA7XHJcbiAgICBnYW1lUGxheSA9IG51bGw7XHJcbiAgICBpc1JlYWR5ID0gZmFsc2U7XHJcbiAgICB2YWx1ZSA9IDBcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIilcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5pY29uQ2hpbikudG8oMS41LCB7IG9wYWNpdHk6IDI1NSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Ub3VjaChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMudHJ5QWN0aW9uKGV2ZW50KVxyXG4gICAgfVxyXG4gICAgaXNUb3VjaGluZyA9IGZhbHNlXHJcbiAgICB0cnlBY3Rpb24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVG91Y2hpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gdG91Y2ggcG9zaXRpb24gKFdPUkxEKVxyXG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gY29udmVydCBXT1JMRCDihpIgTE9DQUwgY+G7p2EgcGFyZW50XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLmdhbWVQbGF5LmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQoY2MudjIod29ybGRQb3MueCwgd29ybGRQb3MueSkpO1xyXG4gICAgICAgIGxvY2FsUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhbFBvcyk7XHJcbiAgICAgICAgLy8gcmVjdCBj4bunYSBub2RlIHRyb25nIHBhcmVudCBzcGFjZVxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICAgICAgaWYgKHJlY3QuY29udGFpbnMobG9jYWxQb3MpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUb3VjaGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX2NsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Ub3VjaEVuZCgpIHtcclxuICAgICAgICB0aGlzLmlzVG91Y2hpbmcgPSBmYWxzZTsgLy8gcmVzZXQgxJHhu4MgbOG6p24gc2F1IHZ14buRdCBs4bqhaSDEkcaw4bujY1xyXG4gICAgfVxyXG4gICAgYnRuX2NsaWNrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jbGlja0RvbnV0KHRoaXMudmFsdWUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgLy8gdGhpcy5pc1N0ZXAgPSAxO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkPWZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc2VsbERvbnV0KHRoaXMudmFsdWUsIHRoaXMubm9kZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tOaGFuKCkge1xyXG4gICAgfVxyXG4gICAgYXBwZWFyKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZmeFNtb2tlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIG9uU29jb2xhKCkge1xyXG4gICAgICAgIHRoaXMuaXNTdGVwID0gMlxyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaWNvblNvY29sYS5zY2FsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5pY29uU29jb2xhLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmlzU29jb2xhID0gdHJ1ZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaWNvblNvY29sYSkudG8oMC4zLCB7IHNjYWxlOiAwLjM1IH0pLnRvKDAuMDUsIHsgc2NhbGU6IDAuMyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICB9XHJcbiAgICBvbkRhdSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5pc1N0ZXAgPSAyXHJcbiAgICAgICAgdGhpcy5pY29uRGF1LnNjYWxlID0gMDtcclxuICAgICAgICB0aGlzLmljb25EYXUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNEYXUgPSB0cnVlXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaWNvbkRhdSkudG8oMC4zLCB7IHNjYWxlOiAwLjggfSkudG8oMC4wNSwgeyBzY2FsZTogMC43OCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIC8vIGNoZWNrU2xvdEtoYXkoKXtcclxuXHJcbiAgICAvLyB9XHJcblxyXG59XHJcbiJdfQ==