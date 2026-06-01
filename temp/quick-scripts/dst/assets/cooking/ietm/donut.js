
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcZG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxSEM7UUFuSEcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsYUFBTyxHQUFDLENBQUMsQ0FBQTtRQUNULGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBSyxHQUFHLENBQUMsQ0FBQTtRQTJCVCxnQkFBVSxHQUFHLEtBQUssQ0FBQTs7UUF1RWxCLG1CQUFtQjtRQUVuQixJQUFJO0lBRVIsQ0FBQztJQXJHRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRWpFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVB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QyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUUsbURBQW1EO1FBRXZELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQTlHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBUlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFINUI7SUFBRCxlQUFDO0NBckhELEFBcUhDLENBckhxQyxFQUFFLENBQUMsU0FBUyxHQXFIakQ7a0JBckhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB2ZnhTbW9rZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljb25DaGluOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaWNvbkRhdTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljb25Tb2NvbGE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgdGFnS2hheT0wXHJcbiAgICBpc1NvY29sYSA9IGZhbHNlO1xyXG4gICAgaXNEYXUgPSBmYWxzZTtcclxuICAgIGlzU3RlcCA9IDA7XHJcbiAgICBnYW1lUGxheSA9IG51bGw7XHJcbiAgICBpc1JlYWR5ID0gZmFsc2U7XHJcbiAgICB2YWx1ZSA9IDBcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIilcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlYXIoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmljb25DaGluKS50bygxLjMsIHsgb3BhY2l0eTogMjU1IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblRvdWNoKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy50cnlBY3Rpb24oZXZlbnQpXHJcbiAgICB9XHJcbiAgICBpc1RvdWNoaW5nID0gZmFsc2VcclxuICAgIHRyeUFjdGlvbihldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3VjaGluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyB0b3VjaCBwb3NpdGlvbiAoV09STEQpXHJcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBjb252ZXJ0IFdPUkxEIOKGkiBMT0NBTCBj4bunYSBwYXJlbnRcclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMuZ2FtZVBsYXkuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChjYy52Mih3b3JsZFBvcy54LCB3b3JsZFBvcy55KSk7XHJcbiAgICAgICAgbG9jYWxQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGxvY2FsUG9zKTtcclxuICAgICAgICAvLyByZWN0IGPhu6dhIG5vZGUgdHJvbmcgcGFyZW50IHNwYWNlXHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpO1xyXG5cclxuICAgICAgICBpZiAocmVjdC5jb250YWlucyhsb2NhbFBvcykpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RvdWNoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idG5fY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblRvdWNoRW5kKCkge1xyXG4gICAgICAgIC8vIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlOyAvLyByZXNldCDEkeG7gyBs4bqnbiBzYXUgdnXhu5F0IGzhuqFpIMSRxrDhu6NjXHJcbiAgICB9XHJcbiAgICBidG5fY2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKVxyXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KSByZXR1cm47XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNTdGVwID09IDApIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmNsaWNrRG9udXQodGhpcy52YWx1ZSwgdGhpcy5ub2RlLHRoaXMudGFnS2hheSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIC8vIHRoaXMuaXNTdGVwID0gMTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDEpIHtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZD1mYWxzZVxyXG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVQbGF5LnNlbGxEb251dCh0aGlzLnZhbHVlLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuICAgIGNoZWNrTmhhbigpIHtcclxuICAgIH1cclxuICAgIGFwcGVhcigpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52ZnhTbW9rZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBvblNvY29sYSgpIHtcclxuICAgICAgICB0aGlzLmlzU3RlcCA9IDJcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmljb25Tb2NvbGEuc2NhbGUgPSAwO1xyXG4gICAgICAgIHRoaXMuaWNvblNvY29sYS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pc1NvY29sYSA9IHRydWVcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmljb25Tb2NvbGEpLnRvKDAuMywgeyBzY2FsZTogMC4zNSB9KS50bygwLjA1LCB7IHNjYWxlOiAwLjMgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgfVxyXG4gICAgb25EYXUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMuaXNTdGVwID0gMlxyXG4gICAgICAgIHRoaXMuaWNvbkRhdS5zY2FsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5pY29uRGF1LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmlzRGF1ID0gdHJ1ZVxyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmljb25EYXUpLnRvKDAuMywgeyBzY2FsZTogMC44IH0pLnRvKDAuMDUsIHsgc2NhbGU6IDAuNzggfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICAvLyBjaGVja1Nsb3RLaGF5KCl7XHJcblxyXG4gICAgLy8gfVxyXG5cclxufVxyXG4iXX0=