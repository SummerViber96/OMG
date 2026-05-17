
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
        var _this = this;
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        this.gamePlay.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
        this.gamePlay.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouch, this);
        this.gamePlay.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcZG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2R0M7UUEzR0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFLLEdBQUcsQ0FBQyxDQUFBO1FBcUJULGdCQUFVLEdBQUcsS0FBSyxDQUFBOztRQXNFbEIsbUJBQW1CO1FBRW5CLElBQUk7SUFFUixDQUFDO0lBOUZHLHdCQUFLLEdBQUw7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUVqRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxD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RSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUUsbURBQW1EO1FBRXZELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQXRHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBUlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZHNUI7SUFBRCxlQUFDO0NBN0dELEFBNkdDLENBN0dxQyxFQUFFLENBQUMsU0FBUyxHQTZHakQ7a0JBN0dvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB2ZnhTbW9rZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljb25DaGluOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaWNvbkRhdTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljb25Tb2NvbGE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgaXNTb2NvbGEgPSBmYWxzZTtcclxuICAgIGlzRGF1ID0gZmFsc2U7XHJcbiAgICBpc1N0ZXAgPSAwO1xyXG4gICAgZ2FtZVBsYXkgPSBudWxsO1xyXG4gICAgaXNSZWFkeSA9IGZhbHNlO1xyXG4gICAgdmFsdWUgPSAwXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmljb25DaGluKS50bygxLjUsIHsgb3BhY2l0eTogMjU1IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgb25Ub3VjaChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMudHJ5QWN0aW9uKGV2ZW50KVxyXG4gICAgfVxyXG4gICAgaXNUb3VjaGluZyA9IGZhbHNlXHJcbiAgICB0cnlBY3Rpb24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVG91Y2hpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gdG91Y2ggcG9zaXRpb24gKFdPUkxEKVxyXG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gY29udmVydCBXT1JMRCDihpIgTE9DQUwgY+G7p2EgcGFyZW50XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLmdhbWVQbGF5LmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQoY2MudjIod29ybGRQb3MueCwgd29ybGRQb3MueSkpO1xyXG4gICAgICAgIGxvY2FsUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhbFBvcyk7XHJcbiAgICAgICAgLy8gcmVjdCBj4bunYSBub2RlIHRyb25nIHBhcmVudCBzcGFjZVxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICAgICAgaWYgKHJlY3QuY29udGFpbnMobG9jYWxQb3MpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUb3VjaGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX2NsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Ub3VjaEVuZCgpIHtcclxuICAgICAgICB0aGlzLmlzVG91Y2hpbmcgPSBmYWxzZTsgLy8gcmVzZXQgxJHhu4MgbOG6p24gc2F1IHZ14buRdCBs4bqhaSDEkcaw4bujY1xyXG4gICAgfVxyXG4gICAgYnRuX2NsaWNrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jbGlja0RvbnV0KHRoaXMudmFsdWUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgLy8gdGhpcy5pc1N0ZXAgPSAxO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkPWZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc2VsbERvbnV0KHRoaXMudmFsdWUsIHRoaXMubm9kZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tOaGFuKCkge1xyXG4gICAgfVxyXG4gICAgYXBwZWFyKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZmeFNtb2tlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIG9uU29jb2xhKCkge1xyXG4gICAgICAgIHRoaXMuaXNTdGVwID0gMlxyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaWNvblNvY29sYS5zY2FsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5pY29uU29jb2xhLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmlzU29jb2xhID0gdHJ1ZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaWNvblNvY29sYSkudG8oMC4zLCB7IHNjYWxlOiAwLjM1IH0pLnRvKDAuMDUsIHsgc2NhbGU6IDAuMyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICB9XHJcbiAgICBvbkRhdSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5pc1N0ZXAgPSAyXHJcbiAgICAgICAgdGhpcy5pY29uRGF1LnNjYWxlID0gMDtcclxuICAgICAgICB0aGlzLmljb25EYXUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNEYXUgPSB0cnVlXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaWNvbkRhdSkudG8oMC4zLCB7IHNjYWxlOiAwLjggfSkudG8oMC4wNSwgeyBzY2FsZTogMC43OCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIC8vIGNoZWNrU2xvdEtoYXkoKXtcclxuXHJcbiAgICAvLyB9XHJcblxyXG59XHJcbiJdfQ==