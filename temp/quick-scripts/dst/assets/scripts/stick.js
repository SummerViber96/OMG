
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/stick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '187aarZd8NJ5J7SptRvYPw5', 'stick');
// scripts/stick.ts

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
        _this.preCorn = null;
        _this.preTomato = null;
        _this.preCarrot = null;
        _this.houseCarrrot = null;
        _this.houseTomato = null;
        _this.houseCorn = null;
        _this.soundGet = null;
        _this.soundHit = null;
        _this.hand = null;
        _this.camera = null;
        _this.camera2 = null;
        _this.gamePlay = null;
        _this.isDelaySOund = false;
        _this.isDelaySound2 = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.getComponent("Game28");
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    NewClass.prototype.onTouchMove = function (event) {
        // console.log("move stick")
        this.hand.active = false;
        this.node.getComponent(cc.BoxCollider).enabled = true;
        // Lấy vị trí touch
        var touchPos = event.getLocation();
        var pos = cc.v3(0, 0);
        if (this.camera.active == true) {
            pos = this.camera.getComponent(cc.Camera).getScreenToWorldPoint(touchPos);
            touchPos = touchPos.add(cc.v2(this.camera.position.x, this.camera.position.y + 80));
        }
        else {
            pos = this.camera2.getComponent(cc.Camera).getScreenToWorldPoint(touchPos);
            touchPos = touchPos.add(cc.v2(this.camera2.position.x, this.camera2.position.y + 80));
        }
        // Chuyển đổi sang tọa độ của parent
        var localPos = this.node.parent.convertToNodeSpaceAR(pos);
        // Di chuyển stick tới vị trí touch
        this.node.setPosition(localPos);
    };
    NewClass.prototype.onTouchEnd = function (event) {
        // this.stickNode.active = false
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.node.children[0].name == "first") {
            if (other.node.children[1].active) {
                other.node.getComponent(cc.PolygonCollider).enabled = false;
                this.cut(other.node);
            }
        }
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
    };
    NewClass.prototype.cut = function (node) {
        node.children[0].active = true;
        node.children[1].active = false;
        var pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.parent.convertToNodeSpaceAR(pos);
        switch (this.gamePlay.step) {
            case 1:
                var pop = this.houseCarrrot.getChildByName("pop");
                this.spawItem(this.preCarrot, pop, pos);
                break;
            case 2:
                var pop2 = this.houseTomato.getChildByName("pop");
                this.spawItem(this.preTomato, pop2, pos);
                break;
            case 3:
                var pop3 = this.houseCorn.getChildByName("pop");
                this.spawItem(this.preCorn, pop3, pos);
                break;
        }
    };
    NewClass.prototype.spawItem = function (preItem, pop, pos) {
        var _this = this;
        var item = cc.instantiate(preItem);
        item.parent = this.node.parent;
        item.position = pos;
        if (!this.isDelaySOund) {
            this.isDelaySOund = true;
            cc.audioEngine.play(this.soundGet, false, 1);
            this.scheduleOnce(function () {
                _this.isDelaySOund = false;
            }, 0.04);
        }
        var posEnd = pop.parent.convertToWorldSpaceAR(pop.position);
        posEnd = this.node.parent.convertToNodeSpaceAR(posEnd);
        var posMid = cc.v2((pos.x + posEnd.x) / 2, (pos.y + posEnd.y) / 2 + 300);
        cc.tween(item).bezierTo(0.8, cc.v2(pos.x, pos.y), posMid, cc.v2(posEnd.x, posEnd.y + 100)).call(function () {
            item.children[0].active = false;
            item.children[1].active = true;
            pop.getComponent("popFarm").updateFill();
            if (!_this.isDelaySound2) {
                cc.audioEngine.play(_this.soundHit, false, 1);
                _this.isDelaySound2 = true;
                _this.scheduleOnce(function () {
                    _this.isDelaySound2 = false;
                }, 0.06);
            }
        }).start();
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCorn", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preTomato", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCarrot", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "houseCarrrot", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "houseTomato", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "houseCorn", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundGet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHit", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "camera2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3RpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtSUM7UUFqSUcsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBWSxJQUFJLENBQUE7UUFFNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUN2QixjQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ2Ysa0JBQVksR0FBRyxLQUFLLENBQUE7UUF5RXBCLG1CQUFhLEdBQUcsS0FBSyxDQUFBOztJQWtDekIsQ0FBQztJQTFHRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVB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XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNvcm46IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlVG9tYXRvOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNhcnJvdDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaG91c2VDYXJycm90OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBob3VzZVRvbWF0bzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhvdXNlQ29ybjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRHZXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIaXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbWVyYTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FtZXJhMjogY2MuTm9kZSA9IG51bGxcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgaXNEZWxheVNPdW5kID0gZmFsc2VcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2UuZ2V0Q29tcG9uZW50KFwiR2FtZTI4XCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmUgc3RpY2tcIilcclxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIC8vIEzhuqV5IHbhu4sgdHLDrSB0b3VjaFxyXG4gICAgICAgIGxldCB0b3VjaFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHBvcyA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgaWYgKHRoaXMuY2FtZXJhLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldENvbXBvbmVudChjYy5DYW1lcmEpLmdldFNjcmVlblRvV29ybGRQb2ludCh0b3VjaFBvcylcclxuICAgICAgICAgICAgdG91Y2hQb3MgPSB0b3VjaFBvcy5hZGQoY2MudjIodGhpcy5jYW1lcmEucG9zaXRpb24ueCwgdGhpcy5jYW1lcmEucG9zaXRpb24ueSArIDgwKSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLmNhbWVyYTIuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHRvdWNoUG9zKVxyXG5cclxuICAgICAgICAgICAgdG91Y2hQb3MgPSB0b3VjaFBvcy5hZGQoY2MudjIodGhpcy5jYW1lcmEyLnBvc2l0aW9uLngsIHRoaXMuY2FtZXJhMi5wb3NpdGlvbi55ICsgODApKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2h1eeG7g24gxJHhu5VpIHNhbmcgdOG7jWEgxJHhu5kgY+G7p2EgcGFyZW50XHJcbiAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgLy8gRGkgY2h1eeG7g24gc3RpY2sgdOG7m2kgduG7iyB0csOtIHRvdWNoXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgIH1cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQpIHtcclxuICAgICAgICAvLyB0aGlzLnN0aWNrTm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuY2hpbGRyZW5bMF0ubmFtZSA9PSBcImZpcnN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXQob3RoZXIubm9kZSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Db2xsaXNpb25TdGF5KG90aGVyLCBzZWxmKSB7XHJcblxyXG4gICAgfVxyXG4gICAgY3V0KG5vZGUpIHtcclxuICAgICAgICBub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgbm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGxldCBwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nYW1lUGxheS5zdGVwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGxldCBwb3AgPSB0aGlzLmhvdXNlQ2FycnJvdC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3SXRlbSh0aGlzLnByZUNhcnJvdCwgcG9wLCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGxldCBwb3AyID0gdGhpcy5ob3VzZVRvbWF0by5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3SXRlbSh0aGlzLnByZVRvbWF0bywgcG9wMiwgcG9zKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9wMyA9IHRoaXMuaG91c2VDb3JuLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXdJdGVtKHRoaXMucHJlQ29ybiwgcG9wMywgcG9zKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgaXNEZWxheVNvdW5kMiA9IGZhbHNlXHJcbiAgICBzcGF3SXRlbShwcmVJdGVtLCBwb3AsIHBvcykge1xyXG4gICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUocHJlSXRlbSk7XHJcbiAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50XHJcbiAgICAgICAgaXRlbS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIGlmICghdGhpcy5pc0RlbGF5U091bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RlbGF5U091bmQgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdldCwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEZWxheVNPdW5kID0gZmFsc2VcclxuICAgICAgICAgICAgfSwgMC4wNClcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBvc0VuZCA9IHBvcC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcC5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NFbmQpO1xyXG4gICAgICAgIGxldCBwb3NNaWQgPSBjYy52MigocG9zLnggKyBwb3NFbmQueCkgLyAyLCAocG9zLnkgKyBwb3NFbmQueSkgLyAyICsgMzAwKVxyXG4gICAgICAgIGNjLnR3ZWVuKGl0ZW0pLmJlemllclRvKDAuOCwgY2MudjIocG9zLngsIHBvcy55KSwgcG9zTWlkLCBjYy52Mihwb3NFbmQueCwgcG9zRW5kLnkgKyAxMDApKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcG9wLmdldENvbXBvbmVudChcInBvcEZhcm1cIikudXBkYXRlRmlsbCgpXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0RlbGF5U291bmQyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIaXQsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RlbGF5U291bmQyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEZWxheVNvdW5kMiA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgfSwwLjA2KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19