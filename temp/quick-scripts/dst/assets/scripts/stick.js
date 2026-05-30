
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0aWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUlDO1FBaklHLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFDdkIsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLGtCQUFZLEdBQUcsS0FBSyxDQUFBO1FBeUVwQixtQkFBYSxHQUFHLEtBQUssQ0FBQTs7SUFrQ3pCLENBQUM7SUExR0csd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFF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XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlQ29ybjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZVRvbWF0bzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUNhcnJvdDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob3VzZUNhcnJyb3Q6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG91c2VUb21hdG86IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvdXNlQ29ybjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEdldDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kSGl0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhbWVyYTI6IGNjLk5vZGUgPSBudWxsXG4gICAgZ2FtZVBsYXkgPSBudWxsXG4gICAgaXNEZWxheVNPdW5kID0gZmFsc2VcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5nZXRDb21wb25lbnQoXCJHYW1lMjhcIik7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG4gICAgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3ZlIHN0aWNrXCIpXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZVxuICAgICAgICAvLyBM4bqleSB24buLIHRyw60gdG91Y2hcbiAgICAgICAgbGV0IHRvdWNoUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgbGV0IHBvcyA9IGNjLnYzKDAsIDApXG4gICAgICAgIGlmICh0aGlzLmNhbWVyYS5hY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zID0gdGhpcy5jYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHRvdWNoUG9zKVxuICAgICAgICAgICAgdG91Y2hQb3MgPSB0b3VjaFBvcy5hZGQoY2MudjIodGhpcy5jYW1lcmEucG9zaXRpb24ueCwgdGhpcy5jYW1lcmEucG9zaXRpb24ueSArIDgwKSlcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcG9zID0gdGhpcy5jYW1lcmEyLmdldENvbXBvbmVudChjYy5DYW1lcmEpLmdldFNjcmVlblRvV29ybGRQb2ludCh0b3VjaFBvcylcblxuICAgICAgICAgICAgdG91Y2hQb3MgPSB0b3VjaFBvcy5hZGQoY2MudjIodGhpcy5jYW1lcmEyLnBvc2l0aW9uLngsIHRoaXMuY2FtZXJhMi5wb3NpdGlvbi55ICsgODApKVxuXG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2h1eeG7g24gxJHhu5VpIHNhbmcgdOG7jWEgxJHhu5kgY+G7p2EgcGFyZW50XG4gICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuICAgICAgICAvLyBEaSBjaHV54buDbiBzdGljayB04bubaSB24buLIHRyw60gdG91Y2hcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcbiAgICB9XG4gICAgb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgICAvLyB0aGlzLnN0aWNrTm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgIH1cblxuXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5jaGlsZHJlblswXS5uYW1lID09IFwiZmlyc3RcIikge1xuICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmN1dChvdGhlci5ub2RlKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbGxpc2lvblN0YXkob3RoZXIsIHNlbGYpIHtcblxuICAgIH1cbiAgICBjdXQobm9kZSkge1xuICAgICAgICBub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcblxuICAgICAgICBub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGxldCBwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbik7XG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLmdhbWVQbGF5LnN0ZXApIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBsZXQgcG9wID0gdGhpcy5ob3VzZUNhcnJyb3QuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIilcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXdJdGVtKHRoaXMucHJlQ2Fycm90LCBwb3AsIHBvcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgbGV0IHBvcDIgPSB0aGlzLmhvdXNlVG9tYXRvLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3SXRlbSh0aGlzLnByZVRvbWF0bywgcG9wMiwgcG9zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBsZXQgcG9wMyA9IHRoaXMuaG91c2VDb3JuLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3SXRlbSh0aGlzLnByZUNvcm4sIHBvcDMsIHBvcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxuICAgIGlzRGVsYXlTb3VuZDIgPSBmYWxzZVxuICAgIHNwYXdJdGVtKHByZUl0ZW0sIHBvcCwgcG9zKSB7XG4gICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUocHJlSXRlbSk7XG4gICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudFxuICAgICAgICBpdGVtLnBvc2l0aW9uID0gcG9zXG4gICAgICAgIGlmICghdGhpcy5pc0RlbGF5U091bmQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEZWxheVNPdW5kID0gdHJ1ZVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kR2V0LCBmYWxzZSwgMSlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVsYXlTT3VuZCA9IGZhbHNlXG4gICAgICAgICAgICB9LCAwLjA0KVxuICAgICAgICB9XG4gICAgICAgIGxldCBwb3NFbmQgPSBwb3AucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3AucG9zaXRpb24pO1xuICAgICAgICBwb3NFbmQgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZCk7XG4gICAgICAgIGxldCBwb3NNaWQgPSBjYy52MigocG9zLnggKyBwb3NFbmQueCkgLyAyLCAocG9zLnkgKyBwb3NFbmQueSkgLyAyICsgMzAwKVxuICAgICAgICBjYy50d2VlbihpdGVtKS5iZXppZXJUbygwLjgsIGNjLnYyKHBvcy54LCBwb3MueSksIHBvc01pZCwgY2MudjIocG9zRW5kLngsIHBvc0VuZC55ICsgMTAwKSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHBvcC5nZXRDb21wb25lbnQoXCJwb3BGYXJtXCIpLnVwZGF0ZUZpbGwoKVxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRGVsYXlTb3VuZDIpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIaXQsIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgIHRoaXMuaXNEZWxheVNvdW5kMiA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuaXNEZWxheVNvdW5kMiA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICB9LDAuMDYpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9XG5cblxuXG5cblxufVxuIl19