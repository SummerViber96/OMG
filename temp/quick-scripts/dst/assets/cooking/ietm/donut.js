
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
        this.appear();
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
        console.log("click");
        if (!this.isReady)
            return;
        if (this.isStep == 0) {
            this.gamePlay.clickDonut(this.value, this.node);
            this.node.getComponent(cc.Button).enabled = false;
            // this.isStep = 1;
        }
        // else if (this.isStep == 1) {
        // }
        // else if (this.isStep == 2) {
        //     // this.node.getComponent(cc.Button).enabled=false
        //     this.gamePlay.sellDonut(this.value, this.node)
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcZG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvSEM7UUFsSEcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFLLEdBQUcsQ0FBQyxDQUFBO1FBMkJULGdCQUFVLEdBQUcsS0FBSyxDQUFBOztRQXVFbEIsbUJBQW1CO1FBRW5CLElBQUk7SUFFUixDQUFDO0lBckdHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxJ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Q0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFFLG1EQUFtRDtRQUV2RCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUE3R0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQVJWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvSDVCO0lBQUQsZUFBQztDQXBIRCxBQW9IQyxDQXBIcUMsRUFBRSxDQUFDLFNBQVMsR0FvSGpEO2tCQXBIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdmZ4U21va2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpY29uQ2hpbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljb25EYXU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpY29uU29jb2xhOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGlzU29jb2xhID0gZmFsc2U7XHJcbiAgICBpc0RhdSA9IGZhbHNlO1xyXG4gICAgaXNTdGVwID0gMDtcclxuICAgIGdhbWVQbGF5ID0gbnVsbDtcclxuICAgIGlzUmVhZHkgPSBmYWxzZTtcclxuICAgIHZhbHVlID0gMFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVEb251dFwiKVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVQbGF5Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLmFwcGVhcigpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaWNvbkNoaW4pLnRvKDEuNSwgeyBvcGFjaXR5OiAyNTUgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uVG91Y2goZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLnRyeUFjdGlvbihldmVudClcclxuICAgIH1cclxuICAgIGlzVG91Y2hpbmcgPSBmYWxzZVxyXG4gICAgdHJ5QWN0aW9uKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc1RvdWNoaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHRvdWNoIHBvc2l0aW9uIChXT1JMRClcclxuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnZlcnQgV09STEQg4oaSIExPQ0FMIGPhu6dhIHBhcmVudFxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5nYW1lUGxheS5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KGNjLnYyKHdvcmxkUG9zLngsIHdvcmxkUG9zLnkpKTtcclxuICAgICAgICBsb2NhbFBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobG9jYWxQb3MpO1xyXG4gICAgICAgIC8vIHJlY3QgY+G7p2Egbm9kZSB0cm9uZyBwYXJlbnQgc3BhY2VcclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgICAgIGlmIChyZWN0LmNvbnRhaW5zKGxvY2FsUG9zKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVG91Y2hpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bl9jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVG91Y2hFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoaW5nID0gZmFsc2U7IC8vIHJlc2V0IMSR4buDIGzhuqduIHNhdSB2deG7kXQgbOG6oWkgxJHGsOG7o2NcclxuICAgIH1cclxuICAgIGJ0bl9jbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmNsaWNrRG9udXQodGhpcy52YWx1ZSwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAvLyB0aGlzLmlzU3RlcCA9IDE7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDIpIHtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQ9ZmFsc2VcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW1lUGxheS5zZWxsRG9udXQodGhpcy52YWx1ZSwgdGhpcy5ub2RlKVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcbiAgICBjaGVja05oYW4oKSB7XHJcbiAgICB9XHJcbiAgICBhcHBlYXIoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudmZ4U21va2UuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgb25Tb2NvbGEoKSB7XHJcbiAgICAgICAgdGhpcy5pc1N0ZXAgPSAyXHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pY29uU29jb2xhLnNjYWxlID0gMDtcclxuICAgICAgICB0aGlzLmljb25Tb2NvbGEuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNTb2NvbGEgPSB0cnVlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5pY29uU29jb2xhKS50bygwLjMsIHsgc2NhbGU6IDAuMzUgfSkudG8oMC4wNSwgeyBzY2FsZTogMC4zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgIH1cclxuICAgIG9uRGF1KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICB0aGlzLmlzU3RlcCA9IDJcclxuICAgICAgICB0aGlzLmljb25EYXUuc2NhbGUgPSAwO1xyXG4gICAgICAgIHRoaXMuaWNvbkRhdS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pc0RhdSA9IHRydWVcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5pY29uRGF1KS50bygwLjMsIHsgc2NhbGU6IDAuOCB9KS50bygwLjA1LCB7IHNjYWxlOiAwLjc4IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgLy8gY2hlY2tTbG90S2hheSgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbn1cclxuIl19