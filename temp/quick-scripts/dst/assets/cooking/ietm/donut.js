
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
        _this.tagKhay = 0;
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
        cc.tween(this.iconChin).to(1.3, { opacity: 255 }).call(function () {
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
        // this.isTouching = false; // reset để lần sau vuốt lại được
    };
    NewClass.prototype.btn_click = function () {
        console.log("click");
        if (!this.isReady)
            return;
        // if (this.isStep == 0) {
        this.gamePlay.clickDonut(this.value, this.node, this.tagKhay);
        this.node.getComponent(cc.Button).enabled = false;
        // this.isStep = 1;
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb29raW5nL2lldG0vZG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxSEM7UUFuSEcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsYUFBTyxHQUFDLENBQUMsQ0FBQTtRQUNULGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBSyxHQUFHLENBQUMsQ0FBQTtRQTJCVCxnQkFBVSxHQUFHLEtBQUssQ0FBQTs7UUF1RWxCLG1CQUFtQjtRQUVuQixJQUFJO0lBRVIsQ0FBQztJQXJHRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRWpFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUs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QUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUUsbURBQW1EO1FBRXZELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQTlHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBUlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFINUI7SUFBRCxlQUFDO0NBckhELEFBcUhDLENBckhxQyxFQUFFLENBQUMsU0FBUyxHQXFIakQ7a0JBckhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdmZ4U21va2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGljb25DaGluOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY29uRGF1OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY29uU29jb2xhOiBjYy5Ob2RlID0gbnVsbDtcbiAgICB0YWdLaGF5PTBcbiAgICBpc1NvY29sYSA9IGZhbHNlO1xuICAgIGlzRGF1ID0gZmFsc2U7XG4gICAgaXNTdGVwID0gMDtcbiAgICBnYW1lUGxheSA9IG51bGw7XG4gICAgaXNSZWFkeSA9IGZhbHNlO1xuICAgIHZhbHVlID0gMFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpXG5cbiAgICAgICAgdGhpcy5nYW1lUGxheS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVQbGF5Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lUGxheS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcblxuXG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuYXBwZWFyKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaWNvbkNoaW4pLnRvKDEuMywgeyBvcGFjaXR5OiAyNTUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcblxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuXG5cbiAgICBvblRvdWNoKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy50cnlBY3Rpb24oZXZlbnQpXG4gICAgfVxuICAgIGlzVG91Y2hpbmcgPSBmYWxzZVxuICAgIHRyeUFjdGlvbihldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5pc1RvdWNoaW5nKSByZXR1cm47XG5cbiAgICAgICAgLy8gdG91Y2ggcG9zaXRpb24gKFdPUkxEKVxuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgLy8gY29udmVydCBXT1JMRCDihpIgTE9DQUwgY+G7p2EgcGFyZW50XG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMuZ2FtZVBsYXkuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChjYy52Mih3b3JsZFBvcy54LCB3b3JsZFBvcy55KSk7XG4gICAgICAgIGxvY2FsUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhbFBvcyk7XG4gICAgICAgIC8vIHJlY3QgY+G7p2Egbm9kZSB0cm9uZyBwYXJlbnQgc3BhY2VcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpO1xuXG4gICAgICAgIGlmIChyZWN0LmNvbnRhaW5zKGxvY2FsUG9zKSkge1xuICAgICAgICAgICAgdGhpcy5pc1RvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuX2NsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgLy8gdGhpcy5pc1RvdWNoaW5nID0gZmFsc2U7IC8vIHJlc2V0IMSR4buDIGzhuqduIHNhdSB2deG7kXQgbOG6oWkgxJHGsOG7o2NcbiAgICB9XG4gICAgYnRuX2NsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KSByZXR1cm47XG4gICAgICAgIC8vIGlmICh0aGlzLmlzU3RlcCA9PSAwKSB7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuY2xpY2tEb251dCh0aGlzLnZhbHVlLCB0aGlzLm5vZGUsdGhpcy50YWdLaGF5KTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICAvLyB0aGlzLmlzU3RlcCA9IDE7XG5cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xuICAgICAgICAvLyAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQ9ZmFsc2VcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZVBsYXkuc2VsbERvbnV0KHRoaXMudmFsdWUsIHRoaXMubm9kZSlcbiAgICAgICAgLy8gfVxuXG4gICAgfVxuICAgIGNoZWNrTmhhbigpIHtcbiAgICB9XG4gICAgYXBwZWFyKCkge1xuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudmZ4U21va2UuYWN0aXZlID0gdHJ1ZVxuICAgIH1cbiAgICBvblNvY29sYSgpIHtcbiAgICAgICAgdGhpcy5pc1N0ZXAgPSAyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLmljb25Tb2NvbGEuc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLmljb25Tb2NvbGEuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzU29jb2xhID0gdHJ1ZVxuICAgICAgICBjYy50d2Vlbih0aGlzLmljb25Tb2NvbGEpLnRvKDAuMywgeyBzY2FsZTogMC4zNSB9KS50bygwLjA1LCB7IHNjYWxlOiAwLjMgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcblxuICAgICAgICB9KS5zdGFydCgpXG5cbiAgICB9XG4gICAgb25EYXUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxuXG4gICAgICAgIHRoaXMuaXNTdGVwID0gMlxuICAgICAgICB0aGlzLmljb25EYXUuc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLmljb25EYXUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzRGF1ID0gdHJ1ZVxuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaWNvbkRhdSkudG8oMC4zLCB7IHNjYWxlOiAwLjggfSkudG8oMC4wNSwgeyBzY2FsZTogMC43OCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxuXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9XG4gICAgLy8gY2hlY2tTbG90S2hheSgpe1xuXG4gICAgLy8gfVxuXG59XG4iXX0=