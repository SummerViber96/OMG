
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cooking/ietm/cake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0e7dXJ14JNaIPtR1lC/LWQ', 'cake');
// cooking/ietm/cake.ts

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
        if (this.gamePlay.isPhase2)
            return;
        if (this.selectedItem)
            return;
        // cc.audioEngine.play(this.gamePlay.clickSound, false, 2);
        this.selectedItem = cc.instantiate(this.itemPrefab);
        // let pos = event.getLocation()
        // const touchPos = this.main.convertToNodeSpaceAR(event.getLocation());
        // this.selectedItem.setPosition(touchPos);
        this.main.addChild(this.selectedItem);
        var screenPos = event.getLocation();
        var worldPos = this.gamePlay.camera.getScreenToWorldPoint(screenPos);
        // Chuyển world → local (node main)
        var localPos = this.main.convertToNodeSpaceAR(worldPos);
        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
        // this.main.guideDrag.active = false;
        // this.node.opacity = 0
    };
    NewClass.prototype.onTouchMove = function (event) {
        if (this.gamePlay.isPhase2)
            return;
        var screenPos = event.getLocation();
        var worldPos = this.gamePlay.camera.getScreenToWorldPoint(screenPos);
        // Chuyển world → local (node main)
        var localPos = this.main.convertToNodeSpaceAR(worldPos);
        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
    };
    NewClass.prototype.onTouchEnd = function (event) {
        if (this.gamePlay.isPhase2)
            return;
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
            if (this.gamePlay.isPhase3 == true) {
                this.selectedItem.position = cc.v3(0, -150);
                this.gamePlay.isTang = 2;
                this.gamePlay.listHand.children[2].active = true;
            }
            else {
                this.selectedItem.position = cc.v3(0, -228);
                this.gamePlay.listHand.children[1].active = true;
            }
            this.gamePlay.listHand.children[0].active = false;
            this.gamePlay.cusComp.happy();
            this.gamePlay.isCake = true;
            this.gamePlay.cake = this.selectedItem;
            this.selectedItem = null;
            this.gamePlay.isPhase2 = true;
        }
        else {
            var child = this.selectedItem;
            child.destroy();
            this.selectedItem = null;
        }
    };
    NewClass.prototype.tutOnPlate = function () {
        if (this.selectedItem) {
            this.selectedItem.destroy();
        }
        this.selectedItem = cc.instantiate(this.itemPrefab);
        this.main.addChild(this.selectedItem);
        if (this.gamePlay.isPhase3 == true) {
            this.selectedItem.position = cc.v3(0, -150);
            this.gamePlay.isTang = 2;
            this.gamePlay.listHand.children[2].active = true;
            this.gamePlay.setTut4();
        }
        else {
            this.selectedItem.position = cc.v3(0, -228);
            this.gamePlay.listHand.children[1].active = true;
            this.gamePlay.setTut2();
        }
        this.gamePlay.listHand.children[0].active = false;
        this.gamePlay.cusComp.happy();
        this.gamePlay.isCake = true;
        this.gamePlay.cake = this.selectedItem;
        this.selectedItem = null;
        this.gamePlay.isPhase2 = true;
    };
    NewClass.prototype.xitHong = function () {
        this.anim.setAnimation(0, "cake2", false);
    };
    NewClass.prototype.xitkem = function () {
        this.anim.setAnimation(0, "cake1", false);
    };
    NewClass.prototype.xitQua = function () {
        this.anim.setAnimation(0, "cake7", false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcY2FrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJJQztRQXpJRyxnQkFBVSxHQUFjLElBQUksQ0FBQTtRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBQ1osa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFckMsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQWdCLElBQUksQ0FBQTtRQUN4QixjQUFRLEdBQUcsSUFBSSxDQUFDOztRQWdJaEIsaUJBQWlCO0lBQ3JCLENBQUM7SUEvSEcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUUzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFD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N0MsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUU3QyxDQUFDO0lBdklEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0U7SUFUUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkk1QjtJQUFELGVBQUM7Q0EzSUQsQUEySUMsQ0EzSXFDLEVBQUUsQ0FBQyxTQUFTLEdBMklqRDtrQkEzSW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1haW46IGNjLk5vZGUgPSBudWxsXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkSXRlbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBhbGV0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgZ2FtZVBsYXkgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJDQzJcIilcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVQbGF5LmlzUGhhc2UyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtKSByZXR1cm5cclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuY2xpY2tTb3VuZCwgZmFsc2UsIDIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiKTtcclxuICAgICAgICAvLyBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG5cclxuICAgICAgICAvLyBjb25zdCB0b3VjaFBvcyA9IHRoaXMubWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICAvLyB0aGlzLnNlbGVjdGVkSXRlbS5zZXRQb3NpdGlvbih0b3VjaFBvcyk7XHJcbiAgICAgICAgdGhpcy5tYWluLmFkZENoaWxkKHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICBsZXQgc2NyZWVuUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5nYW1lUGxheS5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XHJcblxyXG4gICAgICAgIC8vIENodXnhu4NuIHdvcmxkIOKGkiBsb2NhbCAobm9kZSBtYWluKVxyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIMSQ4bq3dCB24buLIHRyw60gY2hvIGl0ZW1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgLy8gdGhpcy5tYWluLmd1aWRlRHJhZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub3BhY2l0eSA9IDBcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVQbGF5LmlzUGhhc2UyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBzY3JlZW5Qb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLmdhbWVQbGF5LmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQoc2NyZWVuUG9zKTtcclxuXHJcbiAgICAgICAgLy8gQ2h1eeG7g24gd29ybGQg4oaSIGxvY2FsIChub2RlIG1haW4pXHJcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5tYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgLy8gxJDhurd0IHbhu4sgdHLDrSBjaG8gaXRlbVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuaXNQaGFzZTIpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMuZ2FtZVBsYXkuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xyXG5cclxuICAgICAgICAvLyBDaHV54buDbiB3b3JsZCDihpIgbG9jYWwgKG5vZGUgbWFpbilcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm1haW4uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICAvLyDEkOG6t3QgduG7iyB0csOtIGNobyBpdGVtXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tPblBsYXRlKGxvY2FsUG9zKVxyXG4gICAgfVxyXG4gICAgY2hlY2tPblBsYXRlKGxvY2FsUG9zKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsUG9zLnN1Yih0aGlzLnBhbGV0LnBvc2l0aW9uKS5tYWcoKSA8PSAxMzApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuaXNQaGFzZTMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0ucG9zaXRpb24gPSBjYy52MygwLCAtMTUwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc1RhbmcgPSAyXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0yMjgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuY3VzQ29tcC5oYXBweSgpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNDYWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jYWtlID0gdGhpcy5zZWxlY3RlZEl0ZW1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNQaGFzZTIgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnNlbGVjdGVkSXRlbVxyXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0dXRPblBsYXRlKCkge1xyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRJdGVtKXtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5kZXN0cm95KClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLmFkZENoaWxkKHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5pc1BoYXNlMyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnBvc2l0aW9uID0gY2MudjMoMCwgLTE1MClcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc1RhbmcgPSAyXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnNldFR1dDQoKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnBvc2l0aW9uID0gY2MudjMoMCwgLTIyOClcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc2V0VHV0MigpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jdXNDb21wLmhhcHB5KClcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmlzQ2FrZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jYWtlID0gdGhpcy5zZWxlY3RlZEl0ZW1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGxcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmlzUGhhc2UyID0gdHJ1ZVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgeGl0SG9uZygpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiY2FrZTJcIiwgZmFsc2UpXHJcbiAgICB9XHJcbiAgICB4aXRrZW0oKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImNha2UxXCIsIGZhbHNlKVxyXG4gICAgfVxyXG4gICAgeGl0UXVhKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJjYWtlN1wiLCBmYWxzZSlcclxuXHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==