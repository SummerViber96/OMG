
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb29raW5nL2lldG0vY2FrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJJQztRQXpJRyxnQkFBVSxHQUFjLElBQUksQ0FBQTtRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBQ1osa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFckMsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQWdCLElBQUksQ0FBQTtRQUN4QixjQUFRLEdBQUcsSUFBSSxDQUFDOztRQWdJaEIsaUJBQWlCO0lBQ3JCLENBQUM7SUEvSEcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUUzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNB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Q0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUU3QyxDQUFDO0lBdklEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0U7SUFUUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkk1QjtJQUFELGVBQUM7Q0EzSUQsQUEySUMsQ0EzSXFDLEVBQUUsQ0FBQyxTQUFTLEdBMklqRDtrQkEzSW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFpbjogY2MuTm9kZSA9IG51bGxcbiAgICBwcml2YXRlIHNlbGVjdGVkSXRlbTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGFsZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGxcbiAgICBnYW1lUGxheSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkNDMlwiKVxuXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5pc1BoYXNlMikgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHJldHVyblxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuY2xpY2tTb3VuZCwgZmFsc2UsIDIpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgIC8vIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXG5cbiAgICAgICAgLy8gY29uc3QgdG91Y2hQb3MgPSB0aGlzLm1haW4uY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRJdGVtLnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcbiAgICAgICAgdGhpcy5tYWluLmFkZENoaWxkKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5nYW1lUGxheS5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XG5cbiAgICAgICAgLy8gQ2h1eeG7g24gd29ybGQg4oaSIGxvY2FsIChub2RlIG1haW4pXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG5cbiAgICAgICAgLy8gxJDhurd0IHbhu4sgdHLDrSBjaG8gaXRlbVxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XG4gICAgICAgIC8vIHRoaXMubWFpbi5ndWlkZURyYWcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMubm9kZS5vcGFjaXR5ID0gMFxuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVQbGF5LmlzUGhhc2UyKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5nYW1lUGxheS5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XG5cbiAgICAgICAgLy8gQ2h1eeG7g24gd29ybGQg4oaSIGxvY2FsIChub2RlIG1haW4pXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG5cbiAgICAgICAgLy8gxJDhurd0IHbhu4sgdHLDrSBjaG8gaXRlbVxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5pc1BoYXNlMikgcmV0dXJuO1xuXG4gICAgICAgIGxldCBzY3JlZW5Qb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMuZ2FtZVBsYXkuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xuXG4gICAgICAgIC8vIENodXnhu4NuIHdvcmxkIOKGkiBsb2NhbCAobm9kZSBtYWluKVxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm1haW4uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuXG4gICAgICAgIC8vIMSQ4bq3dCB24buLIHRyw60gY2hvIGl0ZW1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc2V0UG9zaXRpb24obG9jYWxQb3MpO1xuICAgICAgICB0aGlzLmNoZWNrT25QbGF0ZShsb2NhbFBvcylcbiAgICB9XG4gICAgY2hlY2tPblBsYXRlKGxvY2FsUG9zKSB7XG4gICAgICAgIGlmIChsb2NhbFBvcy5zdWIodGhpcy5wYWxldC5wb3NpdGlvbikubWFnKCkgPD0gMTMwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5pc1BoYXNlMyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0ucG9zaXRpb24gPSBjYy52MygwLCAtMTUwKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNUYW5nID0gMlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0yMjgpXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmN1c0NvbXAuaGFwcHkoKVxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc0Nha2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jYWtlID0gdGhpcy5zZWxlY3RlZEl0ZW1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc1BoYXNlMiA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuc2VsZWN0ZWRJdGVtXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGxcblxuICAgICAgICB9XG4gICAgfVxuICAgIHR1dE9uUGxhdGUoKSB7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRJdGVtKXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uZGVzdHJveSgpXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG5cbiAgICAgICAgdGhpcy5tYWluLmFkZENoaWxkKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuaXNQaGFzZTMgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0ucG9zaXRpb24gPSBjYy52MygwLCAtMTUwKVxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc1RhbmcgPSAyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc2V0VHV0NCgpXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnBvc2l0aW9uID0gY2MudjMoMCwgLTIyOClcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5zZXRUdXQyKClcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgdGhpcy5nYW1lUGxheS5jdXNDb21wLmhhcHB5KClcbiAgICAgICAgdGhpcy5nYW1lUGxheS5pc0Nha2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWVQbGF5LmNha2UgPSB0aGlzLnNlbGVjdGVkSXRlbVxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGxcbiAgICAgICAgdGhpcy5nYW1lUGxheS5pc1BoYXNlMiA9IHRydWVcblxuICAgIH1cblxuXG4gICAgeGl0SG9uZygpIHtcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImNha2UyXCIsIGZhbHNlKVxuICAgIH1cbiAgICB4aXRrZW0oKSB7XG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJjYWtlMVwiLCBmYWxzZSlcbiAgICB9XG4gICAgeGl0UXVhKCkge1xuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiY2FrZTdcIiwgZmFsc2UpXG5cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==