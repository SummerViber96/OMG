
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bracelet/script/CharmGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7e59GZZMRAnoyWWnTlUz5H', 'CharmGame');
// Bracelet/script/CharmGame.ts

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
        _this.spoon = null;
        _this.listBoxNode = null;
        _this.plate = null;
        _this.localPos = null;
        _this.listCharms = [];
        _this.notiFull = null;
        _this.btnOk = null;
        _this.hand3 = null;
        _this.charmHind = null;
        _this.soundXuc = null;
        _this.soundDo = null;
        _this.linkToStore = null;
        _this.charms = [];
        _this.isTargetbox = null;
        _this.isCountGame = 0;
        _this.totalCharm = 0;
        _this.isDelay = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
        for (var i = 0; i < this.listBoxNode.childrenCount; i++) {
            var child = this.listBoxNode.children[i];
            this.charms.push(child);
        }
        var touchNode = cc.Canvas.instance.node;
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    NewClass.prototype.OffEvent = function () {
        var touchNode = cc.Canvas.instance.node;
        touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    NewClass.prototype.onTouchStart = function (event) {
        if (this.isTargetbox)
            return;
        var pos = event.getLocation();
        this.checkSpoon(pos);
    };
    NewClass.prototype.checkSpoon = function (pos) {
        pos = this.listBoxNode.convertToNodeSpaceAR(pos);
        var box = this.getBox(pos);
        if (box) {
            this.btnOk.active = true;
            this.isTargetbox = box;
            this.spoon.active = true;
            this.spoon.getComponent(cc.Animation).play();
            this.spoon.position = pos.add(cc.v3(-30, 50));
            var boxComp = box.getComponent("BoxCharm");
            this.spoon.getComponent("Spoon").setCharms(boxComp.tag);
            this.hand3.active = false;
            cc.audioEngine.play(this.soundXuc, false, 1);
            // this.setHind(boxComp.tag)
        }
    };
    NewClass.prototype.getBox = function (pos) {
        for (var i = 0; i < this.charms.length; i++) {
            var posCharm = this.charms[i].position;
            if (pos.sub(posCharm).mag() <= 100) {
                return this.charms[i];
            }
        }
        return null;
    };
    NewClass.prototype.onTouchMove = function (event) {
        var pos = event.getLocation();
        pos = this.listBoxNode.convertToNodeSpaceAR(pos);
        if (this.isTargetbox) {
            this.spoon.position = pos.add(cc.v3(-30, 50));
        }
        else {
        }
    };
    NewClass.prototype.onTouchEnd = function (event) {
        var pos = event.getLocation();
        pos = this.listBoxNode.convertToNodeSpaceAR(pos);
        var check = this.checkPlate(pos);
        if (check == false) {
            this.clearSpoon();
        }
        else {
            this.dropCharms();
            this.isCountGame++;
            if (this.isCountGame == 2) {
                this.linkToStore.active = true;
            }
        }
    };
    NewClass.prototype.checkPlate = function (pos) {
        var check = pos.sub(this.plate.position).mag();
        if (check <= 300) {
            return true;
        }
        return false;
    };
    NewClass.prototype.clearSpoon = function () {
        this.isTargetbox = null;
        this.spoon.getComponent("Spoon").off();
    };
    NewClass.prototype.dropCharms = function () {
        var _this = this;
        if (!this.isTargetbox || !this.localPos)
            return;
        cc.audioEngine.play(this.soundDo, false, 1);
        var tag = this.isTargetbox.getComponent("BoxCharm").tag;
        var count = this.getCharmCount(tag);
        var centerPos = cc.v3(0, 80, 0);
        var dropDelay = 0.06;
        var _loop_1 = function (i) {
            this_1.scheduleOnce(function () {
                if (_this.totalCharm <= 40) {
                    _this.totalCharm++;
                    _this.spawnCharmWithDrop(i, tag, centerPos);
                }
                else {
                    _this.showNotiFull();
                }
            }, i * dropDelay);
        };
        var this_1 = this;
        for (var i = 0; i < count; i++) {
            _loop_1(i);
        }
        // this.scheduleOnce(() => {
        this.clearSpoon();
        // this.isTargetbox.getComponent("BoxCharm").getCharm();
        // }, count * dropDelay + 0.1);
    };
    NewClass.prototype.getCharmCount = function (tag) {
        var counts = [4, 5, 3, 5, 5, 3, 5, 5, 5];
        return counts[tag] || 0;
    };
    NewClass.prototype.getTargetPosition = function (index) {
        var marker = this.localPos.children[index];
        if (!marker)
            return cc.v3(0, 0, 0);
        var worldPos = marker.convertToWorldSpaceAR(cc.v2(0, 0));
        return this.plate.convertToNodeSpaceAR(worldPos);
    };
    NewClass.prototype.spawnCharmWithDrop = function (index, tag, centerPos) {
        var charm = cc.instantiate(this.listCharms[tag]);
        charm.parent = this.plate;
        charm.getComponent("CharmItem").loadIMG(index);
        charm.getComponent("CharmItem").tag = tag;
        var targetPos = this.getTargetPosition(index);
        var spread = cc.v3((Math.random() - 0.5) * 24, (Math.random() - 0.5) * 24, 0);
        charm.setPosition(centerPos.add(spread));
        var rigidBody = charm.getComponent(cc.RigidBody);
        if (!rigidBody)
            return;
        rigidBody.awake = true;
        rigidBody.active = true;
        var dir = cc.v2(targetPos.x - charm.x, targetPos.y - charm.y);
        var dist = dir.mag();
        if (dist > 0) {
            dir.normalizeSelf();
            var speed = Math.min(dist * 2.8, 650);
            rigidBody.linearVelocity = dir.mul(speed);
        }
        rigidBody.angularVelocity = (Math.random() - 0.5) * 18;
    };
    NewClass.prototype.showNotiFull = function () {
        var _this = this;
        if (this.isDelay)
            return;
        this.isDelay = true;
        this.scheduleOnce(function () {
            _this.isDelay = false;
        }, 1);
        this.notiFull.active = true;
        this.notiFull.getComponent(cc.Animation).play();
    };
    NewClass.prototype.btn_ok = function () {
        // this.notiFull.active = false;
        // this.btnOk.active = false;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "spoon", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBoxNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "plate", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "localPos", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "listCharms", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "notiFull", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "charmHind", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundXuc", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundDo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ2hhcm1HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNk1DO1FBM01HLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUU3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBQzNCLFlBQU0sR0FBRyxFQUFFLENBQUE7UUFDWCxpQkFBVyxHQUFHLElBQUksQ0FBQztRQThCbkIsaUJBQVcsR0FBRyxDQUFDLENBQUE7UUFtRWYsZ0JBQVUsR0FBRyxDQUFDLENBQUE7UUFtRWQsYUFBTyxHQUFHLEtBQUssQ0FBQTs7UUFjZixpQkFBaUI7SUFDckIsQ0FBQztJQWxMRyx5QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFFSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENB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QUNuRCxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLGdDQUFnQztRQUNoQyw2QkFBNkI7SUFDakMsQ0FBQztJQXpNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ0s7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQXhCVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNk01QjtJQUFELGVBQUM7Q0E3TUQsQUE2TUMsQ0E3TXFDLEVBQUUsQ0FBQyxTQUFTLEdBNk1qRDtrQkE3TW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNwb29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEJveE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF0ZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9jYWxQb3M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxpc3RDaGFybXM6IGNjLlByZWZhYltdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vdGlGdWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuT2s6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcm1IaW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFh1YzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRG86IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBjaGFybXMgPSBbXVxyXG4gICAgaXNUYXJnZXRib3ggPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJveE5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdEJveE5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcm1zLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3VjaE5vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIH1cclxuICAgIE9mZkV2ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHRvdWNoTm9kZSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRib3gpIHJldHVybjtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIHRoaXMuY2hlY2tTcG9vbihwb3MpXHJcblxyXG4gICAgfVxyXG4gICAgaXNDb3VudEdhbWUgPSAwXHJcbiAgICBjaGVja1Nwb29uKHBvcykge1xyXG4gICAgICAgIHBvcyA9IHRoaXMubGlzdEJveE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIGxldCBib3ggPSB0aGlzLmdldEJveChwb3MpXHJcbiAgICAgICAgaWYgKGJveCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bk9rLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRib3ggPSBib3hcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICB0aGlzLnNwb29uLnBvc2l0aW9uID0gcG9zLmFkZChjYy52MygtMzAsIDUwKSlcclxuICAgICAgICAgICAgbGV0IGJveENvbXAgPSBib3guZ2V0Q29tcG9uZW50KFwiQm94Q2hhcm1cIik7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uZ2V0Q29tcG9uZW50KFwiU3Bvb25cIikuc2V0Q2hhcm1zKGJveENvbXAudGFnKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmQzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRYdWMsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5zZXRIaW5kKGJveENvbXAudGFnKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm94KHBvcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvc0NoYXJtID0gdGhpcy5jaGFybXNbaV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgIGlmIChwb3Muc3ViKHBvc0NoYXJtKS5tYWcoKSA8PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJtc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgcG9zID0gdGhpcy5saXN0Qm94Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Ym94KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24ucG9zaXRpb24gPSBwb3MuYWRkKGNjLnYzKC0zMCwgNTApKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Ub3VjaEVuZChldmVudCkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvcyA9IHRoaXMubGlzdEJveE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrUGxhdGUocG9zKVxyXG4gICAgICAgIGlmIChjaGVjayA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU3Bvb24oKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJvcENoYXJtcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDb3VudEdhbWUrK1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3VudEdhbWUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja1BsYXRlKHBvcykge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHBvcy5zdWIodGhpcy5wbGF0ZS5wb3NpdGlvbikubWFnKClcclxuICAgICAgICBpZiAoY2hlY2sgPD0gMzAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY2xlYXJTcG9vbigpIHtcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Ym94ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNwb29uLmdldENvbXBvbmVudChcIlNwb29uXCIpLm9mZigpXHJcbiAgICB9XHJcbiAgICB0b3RhbENoYXJtID0gMFxyXG4gICAgZHJvcENoYXJtcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNUYXJnZXRib3ggfHwgIXRoaXMubG9jYWxQb3MpIHJldHVybjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmREbywgZmFsc2UsIDEpXHJcbiAgICAgICAgY29uc3QgdGFnID0gdGhpcy5pc1RhcmdldGJveC5nZXRDb21wb25lbnQoXCJCb3hDaGFybVwiKS50YWc7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdldENoYXJtQ291bnQodGFnKTtcclxuICAgICAgICBjb25zdCBjZW50ZXJQb3MgPSBjYy52MygwLCA4MCwgMCk7XHJcbiAgICAgICAgY29uc3QgZHJvcERlbGF5ID0gMC4wNjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ2hhcm0gPD0gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ2hhcm0rKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduQ2hhcm1XaXRoRHJvcChpLCB0YWcsIGNlbnRlclBvcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpRnVsbCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGkgKiBkcm9wRGVsYXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTcG9vbigpO1xyXG4gICAgICAgIC8vIHRoaXMuaXNUYXJnZXRib3guZ2V0Q29tcG9uZW50KFwiQm94Q2hhcm1cIikuZ2V0Q2hhcm0oKTtcclxuICAgICAgICAvLyB9LCBjb3VudCAqIGRyb3BEZWxheSArIDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybUNvdW50KHRhZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBjb3VudHMgPSBbNCwgNSwgMywgNSwgNSwgMywgNSwgNSwgNV07XHJcbiAgICAgICAgcmV0dXJuIGNvdW50c1t0YWddIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYXJnZXRQb3NpdGlvbihpbmRleDogbnVtYmVyKTogY2MuVmVjMyB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5sb2NhbFBvcy5jaGlsZHJlbltpbmRleF07XHJcbiAgICAgICAgaWYgKCFtYXJrZXIpIHJldHVybiBjYy52MygwLCAwLCAwKTtcclxuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IG1hcmtlci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXRlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNwYXduQ2hhcm1XaXRoRHJvcChpbmRleDogbnVtYmVyLCB0YWc6IG51bWJlciwgY2VudGVyUG9zOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgY29uc3QgY2hhcm0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RDaGFybXNbdGFnXSk7XHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gdGhpcy5wbGF0ZTtcclxuICAgICAgICBjaGFybS5nZXRDb21wb25lbnQoXCJDaGFybUl0ZW1cIikubG9hZElNRyhpbmRleCk7XHJcbiAgICAgICAgY2hhcm0uZ2V0Q29tcG9uZW50KFwiQ2hhcm1JdGVtXCIpLnRhZyA9IHRhZ1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHRoaXMuZ2V0VGFyZ2V0UG9zaXRpb24oaW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHNwcmVhZCA9IGNjLnYzKFxyXG4gICAgICAgICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyNCxcclxuICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjQsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKGNlbnRlclBvcy5hZGQoc3ByZWFkKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJpZ2lkQm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghcmlnaWRCb2R5KSByZXR1cm47XHJcblxyXG4gICAgICAgIHJpZ2lkQm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgcmlnaWRCb2R5LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpciA9IGNjLnYyKHRhcmdldFBvcy54IC0gY2hhcm0ueCwgdGFyZ2V0UG9zLnkgLSBjaGFybS55KTtcclxuICAgICAgICBjb25zdCBkaXN0ID0gZGlyLm1hZygpO1xyXG4gICAgICAgIGlmIChkaXN0ID4gMCkge1xyXG4gICAgICAgICAgICBkaXIubm9ybWFsaXplU2VsZigpO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IE1hdGgubWluKGRpc3QgKiAyLjgsIDY1MCk7XHJcbiAgICAgICAgICAgIHJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGRpci5tdWwoc3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByaWdpZEJvZHkuYW5ndWxhclZlbG9jaXR5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTg7XHJcbiAgICB9XHJcbiAgICBpc0RlbGF5ID0gZmFsc2VcclxuICAgIHNob3dOb3RpRnVsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGF5KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0RlbGF5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWxheSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5ub3RpRnVsbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm90aUZ1bGwuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICB9XHJcbiAgICBidG5fb2soKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub3RpRnVsbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLmJ0bk9rLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=