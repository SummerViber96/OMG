
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cooking/ietm/cake2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32d54UTxD1PZqjw1KlF8Inw', 'cake2');
// cooking/ietm/cake2.ts

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
        _this.itemPrefab = null;
        _this.main = null;
        _this.selectedItem = null;
        _this.palet = null;
        _this.anim = null;
        _this.gamePlay = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("CC2");
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    NewClass.prototype.onTouchStart = function (event) {
        if (this.selectedItem)
            return;
        // cc.audioEngine.play(this.gamePlay.clickSound, false, 2);
        this.selectedItem = cc.instantiate(this.itemPrefab);
        // let pos = event.getLocation()
        // const touchPos = this.main.convertToNodeSpaceAR(event.getLocation());
        // this.selectedItem.setPosition(touchPos);
        this.main.addChild(this.selectedItem);
        // this.main.guideDrag.active = false;
        // this.node.opacity = 0
    };
    NewClass.prototype.onTouchMove = function (event) {
        var screenPos = event.getLocation();
        var worldPos = this.gamePlay.camera.getScreenToWorldPoint(screenPos);
        // Chuyển world → local (node main)
        var localPos = this.main.convertToNodeSpaceAR(worldPos);
        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
    };
    NewClass.prototype.onTouchEnd = function (event) {
        var screenPos = event.getLocation();
        var worldPos = this.gamePlay.camera.getScreenToWorldPoint(screenPos);
        // Chuyển world → local (node main)
        var localPos = this.main.convertToNodeSpaceAR(worldPos);
        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
        this.checkOnPlate(localPos);
    };
    NewClass.prototype.checkOnPlate = function (localPos) {
        if (localPos.sub(this.palet.position).mag() <= 130) {
            this.selectedItem.position = cc.v3(0, -228);
            this.gamePlay.cusComp.happy();
            this.gamePlay.isCake = true;
            this.gamePlay.cake = this.selectedItem;
            console.log(this.selectedItem);
        }
    };
    NewClass.prototype.xitHong = function () {
        this.anim.setAnimation(0, "cake2", false);
    };
    NewClass.prototype.xitkem = function () {
        this.anim.setAnimation(0, "cake1", false);
    };
    NewClass.prototype.xitQua = function () {
        this.anim.setAnimation(0, "cake8", false);
    };
    NewClass.prototype.xitQuaKem = function () {
        console.log("xit qua kenm");
        this.anim.setAnimation(0, "cake5", false);
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "itemPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "main", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "palet", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcY2FrZTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtRkM7UUFqRkcsZ0JBQVUsR0FBYyxJQUFJLENBQUE7UUFFNUIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUNaLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXJDLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsVUFBSSxHQUFnQixJQUFJLENBQUE7UUFDeEIsY0FBUSxHQUFHLElBQUksQ0FBQzs7UUF3RWhCLGlCQUFpQjtJQUNyQixDQUFDO0lBdkVHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FB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QUMsWUFBWSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFFN0MsQ0FBQztJQS9FRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzBDQUNFO0lBVFAsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1GNUI7SUFBRCxlQUFDO0NBbkZELEFBbUZDLENBbkZxQyxFQUFFLENBQUMsU0FBUyxHQW1GakQ7a0JBbkZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgaXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEl0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwYWxldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIGdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiQ0MyXCIpXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHJldHVyblxyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5jbGlja1NvdW5kLCBmYWxzZSwgMik7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xyXG4gICAgICAgIC8vIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHRvdWNoUG9zID0gdGhpcy5tYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRJdGVtLnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcclxuICAgICAgICB0aGlzLm1haW4uYWRkQ2hpbGQodGhpcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgIC8vIHRoaXMubWFpbi5ndWlkZURyYWcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuXHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMuZ2FtZVBsYXkuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xyXG5cclxuICAgICAgICAvLyBDaHV54buDbiB3b3JsZCDihpIgbG9jYWwgKG5vZGUgbWFpbilcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm1haW4uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICAvLyDEkOG6t3QgduG7iyB0csOtIGNobyBpdGVtXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgc2NyZWVuUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5nYW1lUGxheS5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XHJcblxyXG4gICAgICAgIC8vIENodXnhu4NuIHdvcmxkIOKGkiBsb2NhbCAobm9kZSBtYWluKVxyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIMSQ4bq3dCB24buLIHRyw60gY2hvIGl0ZW1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgdGhpcy5jaGVja09uUGxhdGUobG9jYWxQb3MpXHJcbiAgICB9XHJcbiAgICBjaGVja09uUGxhdGUobG9jYWxQb3MpIHtcclxuICAgICAgICBpZiAobG9jYWxQb3Muc3ViKHRoaXMucGFsZXQucG9zaXRpb24pLm1hZygpIDw9IDEzMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0yMjgpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuY3VzQ29tcC5oYXBweSgpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNDYWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jYWtlID0gdGhpcy5zZWxlY3RlZEl0ZW1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZEl0ZW0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgeGl0SG9uZygpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiY2FrZTJcIiwgZmFsc2UpXHJcbiAgICB9XHJcbiAgICB4aXRrZW0oKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImNha2UxXCIsIGZhbHNlKVxyXG4gICAgfVxyXG4gICAgeGl0UXVhKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJjYWtlOFwiLCBmYWxzZSlcclxuXHJcbiAgICB9XHJcbiAgICB4aXRRdWFLZW0oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ4aXQgcXVhIGtlbm1cIilcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiY2FrZTVcIiwgZmFsc2UpXHJcblxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=