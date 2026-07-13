
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
        _this.linkToGame = null;
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
            this.isCountGame++;
            if (this.isCountGame == 3) {
                this.linkToGame.active = true;
            }
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
    ], NewClass.prototype, "linkToGame", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ2hhcm1HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNk1DO1FBM01HLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUU3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBQzFCLFlBQU0sR0FBRyxFQUFFLENBQUE7UUFDWCxpQkFBVyxHQUFHLElBQUksQ0FBQztRQThCbkIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFtRWhCLGdCQUFVLEdBQUcsQ0FBQyxDQUFBO1FBbUVkLGFBQU8sR0FBRyxLQUFLLENBQUE7O1FBY2YsaUJBQWlCO0lBQ3JCLENBQUM7SUFsTEcseUJBQU0sR0FBTjtJQUVBLENBQUM7SUFDRCx3QkFBSyxHQUFMO1FBRUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFeEUsQ0FBQztJQUNELDJCQUFRLEdBQVI7UUFDSSxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDMUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BFLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUs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O0lBQ25ELENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0ksZ0NBQWdDO1FBQ2hDLDZCQUE2QjtJQUNqQyxDQUFDO0lBek1EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDSztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBeEJULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2TTVCO0lBQUQsZUFBQztDQTdNRCxBQTZNQyxDQTdNcUMsRUFBRSxDQUFDLFNBQVMsR0E2TWpEO2tCQTdNb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3Bvb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Qm94Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXRlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2NhbFBvczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbGlzdENoYXJtczogY2MuUHJlZmFiW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aUZ1bGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5PazogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFybUhpbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kWHVjOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmREbzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9HYW1lOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgY2hhcm1zID0gW11cclxuICAgIGlzVGFyZ2V0Ym94ID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCb3hOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RCb3hOb2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJtcy5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG91Y2hOb2RlID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcbiAgICBPZmZFdmVudCgpIHtcclxuICAgICAgICBjb25zdCB0b3VjaE5vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Ym94KSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICB0aGlzLmNoZWNrU3Bvb24ocG9zKVxyXG5cclxuICAgIH1cclxuICAgIGlzQ291bnRHYW1lID0gMDtcclxuICAgIGNoZWNrU3Bvb24ocG9zKSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5saXN0Qm94Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgbGV0IGJveCA9IHRoaXMuZ2V0Qm94KHBvcylcclxuICAgICAgICBpZiAoYm94KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudEdhbWUrK1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3VudEdhbWUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rVG9HYW1lLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5idG5Pay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Ym94ID0gYm94XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5wb3NpdGlvbiA9IHBvcy5hZGQoY2MudjMoLTMwLCA1MCkpXHJcbiAgICAgICAgICAgIGxldCBib3hDb21wID0gYm94LmdldENvbXBvbmVudChcIkJveENoYXJtXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmdldENvbXBvbmVudChcIlNwb29uXCIpLnNldENoYXJtcyhib3hDb21wLnRhZylcclxuICAgICAgICAgICAgdGhpcy5oYW5kMy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kWHVjLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgLy8gdGhpcy5zZXRIaW5kKGJveENvbXAudGFnKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm94KHBvcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvc0NoYXJtID0gdGhpcy5jaGFybXNbaV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgIGlmIChwb3Muc3ViKHBvc0NoYXJtKS5tYWcoKSA8PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJtc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgcG9zID0gdGhpcy5saXN0Qm94Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Ym94KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24ucG9zaXRpb24gPSBwb3MuYWRkKGNjLnYzKC0zMCwgNTApKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Ub3VjaEVuZChldmVudCkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvcyA9IHRoaXMubGlzdEJveE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrUGxhdGUocG9zKVxyXG4gICAgICAgIGlmIChjaGVjayA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU3Bvb24oKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kcm9wQ2hhcm1zKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja1BsYXRlKHBvcykge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHBvcy5zdWIodGhpcy5wbGF0ZS5wb3NpdGlvbikubWFnKClcclxuICAgICAgICBpZiAoY2hlY2sgPD0gMzAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY2xlYXJTcG9vbigpIHtcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Ym94ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNwb29uLmdldENvbXBvbmVudChcIlNwb29uXCIpLm9mZigpXHJcbiAgICB9XHJcbiAgICB0b3RhbENoYXJtID0gMFxyXG4gICAgZHJvcENoYXJtcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNUYXJnZXRib3ggfHwgIXRoaXMubG9jYWxQb3MpIHJldHVybjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmREbywgZmFsc2UsIDEpXHJcbiAgICAgICAgY29uc3QgdGFnID0gdGhpcy5pc1RhcmdldGJveC5nZXRDb21wb25lbnQoXCJCb3hDaGFybVwiKS50YWc7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdldENoYXJtQ291bnQodGFnKTtcclxuICAgICAgICBjb25zdCBjZW50ZXJQb3MgPSBjYy52MygwLCA4MCwgMCk7XHJcbiAgICAgICAgY29uc3QgZHJvcERlbGF5ID0gMC4wNjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ2hhcm0gPD0gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ2hhcm0rKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduQ2hhcm1XaXRoRHJvcChpLCB0YWcsIGNlbnRlclBvcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpRnVsbCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGkgKiBkcm9wRGVsYXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTcG9vbigpO1xyXG4gICAgICAgIC8vIHRoaXMuaXNUYXJnZXRib3guZ2V0Q29tcG9uZW50KFwiQm94Q2hhcm1cIikuZ2V0Q2hhcm0oKTtcclxuICAgICAgICAvLyB9LCBjb3VudCAqIGRyb3BEZWxheSArIDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybUNvdW50KHRhZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBjb3VudHMgPSBbNCwgNSwgMywgNSwgNSwgMywgNSwgNSwgNV07XHJcbiAgICAgICAgcmV0dXJuIGNvdW50c1t0YWddIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYXJnZXRQb3NpdGlvbihpbmRleDogbnVtYmVyKTogY2MuVmVjMyB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5sb2NhbFBvcy5jaGlsZHJlbltpbmRleF07XHJcbiAgICAgICAgaWYgKCFtYXJrZXIpIHJldHVybiBjYy52MygwLCAwLCAwKTtcclxuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IG1hcmtlci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXRlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNwYXduQ2hhcm1XaXRoRHJvcChpbmRleDogbnVtYmVyLCB0YWc6IG51bWJlciwgY2VudGVyUG9zOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgY29uc3QgY2hhcm0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RDaGFybXNbdGFnXSk7XHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gdGhpcy5wbGF0ZTtcclxuICAgICAgICBjaGFybS5nZXRDb21wb25lbnQoXCJDaGFybUl0ZW1cIikubG9hZElNRyhpbmRleCk7XHJcbiAgICAgICAgY2hhcm0uZ2V0Q29tcG9uZW50KFwiQ2hhcm1JdGVtXCIpLnRhZyA9IHRhZ1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHRoaXMuZ2V0VGFyZ2V0UG9zaXRpb24oaW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHNwcmVhZCA9IGNjLnYzKFxyXG4gICAgICAgICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyNCxcclxuICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjQsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKGNlbnRlclBvcy5hZGQoc3ByZWFkKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJpZ2lkQm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghcmlnaWRCb2R5KSByZXR1cm47XHJcblxyXG4gICAgICAgIHJpZ2lkQm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgcmlnaWRCb2R5LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpciA9IGNjLnYyKHRhcmdldFBvcy54IC0gY2hhcm0ueCwgdGFyZ2V0UG9zLnkgLSBjaGFybS55KTtcclxuICAgICAgICBjb25zdCBkaXN0ID0gZGlyLm1hZygpO1xyXG4gICAgICAgIGlmIChkaXN0ID4gMCkge1xyXG4gICAgICAgICAgICBkaXIubm9ybWFsaXplU2VsZigpO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IE1hdGgubWluKGRpc3QgKiAyLjgsIDY1MCk7XHJcbiAgICAgICAgICAgIHJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGRpci5tdWwoc3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByaWdpZEJvZHkuYW5ndWxhclZlbG9jaXR5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTg7XHJcbiAgICB9XHJcbiAgICBpc0RlbGF5ID0gZmFsc2VcclxuICAgIHNob3dOb3RpRnVsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGF5KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0RlbGF5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWxheSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5ub3RpRnVsbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm90aUZ1bGwuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICB9XHJcbiAgICBidG5fb2soKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub3RpRnVsbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLmJ0bk9rLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=