
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
            // if (this.isCountGame == 2) {
            //     this.linkToStore.active = true
            // }
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
        var surface = this.getPlateSurface();
        var centerPos = surface && surface !== this.plate
            ? cc.v3(surface.x, surface.y + 80, 0)
            : cc.v3(0, 80, 0);
        var dropDelay = 0.06;
        var _loop_1 = function (i) {
            this_1.scheduleOnce(function () {
                if (_this.totalCharm <= 40) {
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
        var counts = [4, 5, 3, 5, 5, 3, 5, 5, 5, 2, 2, 1, 1, 4, 7, 7, 8, 8, 8, 8, 2, 2, 6, 6, 6, 6, 1, 1, 2, 2];
        return counts[tag] || 0;
    };
    /** Node sprite khay trắng (con của this.plate / khay). */
    NewClass.prototype.getPlateSurface = function () {
        if (!this.plate)
            return null;
        return this.plate.getChildByName('plate') || this.plate;
    };
    /** Offset slot từ localPos. */
    NewClass.prototype.getLocalPosOffset = function (index) {
        if (!this.localPos || !this.localPos.children[index]) {
            return cc.v3(0, 0, 0);
        }
        var marker = this.localPos.children[index];
        return cc.v3(marker.x, marker.y, 0);
    };
    /** Vị trí trên mặt plate (local của khay). */
    NewClass.prototype.getTargetPosition = function (index) {
        var surface = this.getPlateSurface();
        var offset = this.getLocalPosOffset(index);
        if (surface && surface !== this.plate) {
            return cc.v3(surface.x + offset.x, surface.y + offset.y, 0);
        }
        if (this.localPos && this.localPos.children[index]) {
            var worldPos = this.localPos.children[index].convertToWorldSpaceAR(cc.v2(0, 0));
            return this.plate.convertToNodeSpaceAR(worldPos);
        }
        return offset;
    };
    NewClass.prototype.spawnCharmWithDrop = function (index, tag, centerPos) {
        var charm = this.createCharmOnPlate(tag, index);
        if (!charm)
            return;
        var targetPos = this.getTargetPosition(index);
        var spread = cc.v3((Math.random() - 0.5) * 24, (Math.random() - 0.5) * 24, 0);
        charm.setPosition(centerPos.add(spread));
        var rigidBody = charm.getComponent(cc.RigidBody);
        if (!rigidBody)
            return;
        var dir = cc.v2(targetPos.x - charm.x, targetPos.y - charm.y);
        var dist = dir.mag();
        if (dist > 0) {
            dir.normalizeSelf();
            var speed = Math.min(dist * 2.8, 650);
            rigidBody.linearVelocity = dir.mul(speed);
        }
        rigidBody.angularVelocity = (Math.random() - 0.5) * 18;
    };
    /**
     * Spawn sẵn charm trên khay để kéo thả ngay (không cần xúc spoon).
     * @param tags danh sách tag charm; null = vài loại mặc định
     */
    NewClass.prototype.spawnCharmsOnPlate = function (tags) {
        if (tags === void 0) { tags = null; }
        if (!this.plate || !this.listCharms || this.listCharms.length === 0) {
            cc.warn('[CharmGame] Thiếu plate hoặc listCharms — không spawn được.');
            return;
        }
        var list = tags && tags.length > 0
            ? tags
            : [0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 6, 6, 7, 8, 7, 5, 9, 5, 5, 8, 8];
        var slotCount = this.localPos ? this.localPos.childrenCount : 0;
        var surface = this.getPlateSurface();
        for (var i = 0; i < list.length; i++) {
            if (this.totalCharm > 40)
                break;
            var tag = list[i];
            if (tag == null || !this.listCharms[tag])
                continue;
            var colorIndex = slotCount > 0 ? (i % slotCount) : i;
            var charm = this.createCharmOnPlate(tag, colorIndex);
            if (!charm)
                continue;
            var pos = void 0;
            if (slotCount > 0) {
                pos = this.getTargetPosition(i % slotCount);
            }
            else if (surface && surface !== this.plate) {
                var cols = 5;
                pos = cc.v3(surface.x + (i % cols - 2) * 90, surface.y + 40 - Math.floor(i / cols) * 80, 0);
            }
            else {
                pos = cc.v3((i % 5 - 2) * 70, 40 - Math.floor(i / 5) * 70, 0);
            }
            var spread = cc.v3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, 0);
            pos = pos.add(cc.v3(0, 0));
            charm.setPosition(pos.add(spread));
            var body = charm.getComponent(cc.RigidBody);
            if (body) {
                body.linearVelocity = cc.v2(0, 0);
                body.angularVelocity = 0;
                body.syncPosition(true);
            }
        }
    };
    /** Spawn 1 loại charm đủ số lượng như khi xúc box (theo tag). */
    NewClass.prototype.spawnCharmBoxOnPlate = function (tag) {
        var count = this.getCharmCount(tag);
        var tags = [];
        for (var i = 0; i < count; i++) {
            tags.push(tag);
        }
        this.spawnCharmsOnPlate(tags);
    };
    NewClass.prototype.createCharmOnPlate = function (tag, colorIndex) {
        var prefab = this.listCharms[tag];
        if (!prefab) {
            cc.warn('[CharmGame] Không có prefab charm tag=' + tag);
            return null;
        }
        var charm = cc.instantiate(prefab);
        charm.parent = this.plate;
        charm.setSiblingIndex(this.plate.childrenCount - 1);
        var item = charm.getComponent('CharmItem');
        if (item) {
            var maxColor = item.listImg && item.listImg.length > 0
                ? item.listImg.length
                : 1;
            item.loadIMG(colorIndex % maxColor);
            item.tag = tag;
        }
        var rigidBody = charm.getComponent(cc.RigidBody);
        if (rigidBody) {
            rigidBody.enabled = true;
            rigidBody.awake = true;
            rigidBody.active = true;
            rigidBody.type = cc.RigidBodyType.Dynamic;
            rigidBody.gravityScale = 0;
            rigidBody.linearVelocity = cc.v2(0, 0);
            rigidBody.angularVelocity = 0;
            rigidBody.syncPosition(true);
            rigidBody.syncRotation(true);
        }
        // Collider bật để nằm trên khay; khi kéo CordRoundGame sẽ tắt.
        var collider = charm.getComponent(cc.PhysicsPolygonCollider);
        if (collider) {
            collider.enabled = true;
        }
        this.totalCharm++;
        return charm;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ2hhcm1HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK1VDO1FBN1VHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUU3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBQzNCLFlBQU0sR0FBRyxFQUFFLENBQUE7UUFDWCxpQkFBVyxHQUFHLElBQUksQ0FBQztRQThCbkIsaUJBQVcsR0FBRyxDQUFDLENBQUE7UUFtRWYsZ0JBQVUsR0FBRyxDQUFDLENBQUE7UUFxTWQsYUFBTyxHQUFHLEtBQUssQ0FBQTs7UUFjZixpQkFBaUI7SUFDckIsQ0FBQztJQXBURyx5QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFFSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENB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OytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDSztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBeEJWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErVTVCO0lBQUQsZUFBQztDQS9VRCxBQStVQyxDQS9VcUMsRUFBRSxDQUFDLFNBQVMsR0ErVWpEO2tCQS9Vb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3Bvb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Qm94Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXRlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2NhbFBvczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbGlzdENoYXJtczogY2MuUHJlZmFiW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aUZ1bGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5PazogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFybUhpbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kWHVjOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmREbzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGxcclxuICAgIGNoYXJtcyA9IFtdXHJcbiAgICBpc1RhcmdldGJveCA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Qm94Tm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Qm94Tm9kZS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgdGhpcy5jaGFybXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvdWNoTm9kZSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG4gICAgT2ZmRXZlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hOb2RlID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldGJveCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy5jaGVja1Nwb29uKHBvcylcclxuXHJcbiAgICB9XHJcbiAgICBpc0NvdW50R2FtZSA9IDBcclxuICAgIGNoZWNrU3Bvb24ocG9zKSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5saXN0Qm94Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgbGV0IGJveCA9IHRoaXMuZ2V0Qm94KHBvcylcclxuICAgICAgICBpZiAoYm94KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuT2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldGJveCA9IGJveFxyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24ucG9zaXRpb24gPSBwb3MuYWRkKGNjLnYzKC0zMCwgNTApKVxyXG4gICAgICAgICAgICBsZXQgYm94Q29tcCA9IGJveC5nZXRDb21wb25lbnQoXCJCb3hDaGFybVwiKTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5nZXRDb21wb25lbnQoXCJTcG9vblwiKS5zZXRDaGFybXMoYm94Q29tcC50YWcpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFh1YywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnNldEhpbmQoYm94Q29tcC50YWcpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRCb3gocG9zKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zQ2hhcm0gPSB0aGlzLmNoYXJtc1tpXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgaWYgKHBvcy5zdWIocG9zQ2hhcm0pLm1hZygpIDw9IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcm1zW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb3MgPSB0aGlzLmxpc3RCb3hOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRib3gpIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5wb3NpdGlvbiA9IHBvcy5hZGQoY2MudjMoLTMwLCA1MCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgcG9zID0gdGhpcy5saXN0Qm94Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tQbGF0ZShwb3MpXHJcbiAgICAgICAgaWYgKGNoZWNrID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTcG9vbigpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kcm9wQ2hhcm1zKClcclxuICAgICAgICAgICAgdGhpcy5pc0NvdW50R2FtZSsrXHJcblxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5pc0NvdW50R2FtZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrUGxhdGUocG9zKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gcG9zLnN1Yih0aGlzLnBsYXRlLnBvc2l0aW9uKS5tYWcoKVxyXG4gICAgICAgIGlmIChjaGVjayA8PSAzMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjbGVhclNwb29uKCkge1xyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRib3ggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3Bvb24uZ2V0Q29tcG9uZW50KFwiU3Bvb25cIikub2ZmKClcclxuICAgIH1cclxuICAgIHRvdGFsQ2hhcm0gPSAwXHJcbiAgICBkcm9wQ2hhcm1zKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1RhcmdldGJveCB8fCAhdGhpcy5sb2NhbFBvcykgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZERvLCBmYWxzZSwgMSlcclxuICAgICAgICBjb25zdCB0YWcgPSB0aGlzLmlzVGFyZ2V0Ym94LmdldENvbXBvbmVudChcIkJveENoYXJtXCIpLnRhZztcclxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0Q2hhcm1Db3VudCh0YWcpO1xyXG4gICAgICAgIGNvbnN0IHN1cmZhY2UgPSB0aGlzLmdldFBsYXRlU3VyZmFjZSgpO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclBvcyA9IHN1cmZhY2UgJiYgc3VyZmFjZSAhPT0gdGhpcy5wbGF0ZVxyXG4gICAgICAgICAgICA/IGNjLnYzKHN1cmZhY2UueCwgc3VyZmFjZS55ICsgODAsIDApXHJcbiAgICAgICAgICAgIDogY2MudjMoMCwgODAsIDApO1xyXG4gICAgICAgIGNvbnN0IGRyb3BEZWxheSA9IDAuMDY7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbENoYXJtIDw9IDQwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bkNoYXJtV2l0aERyb3AoaSwgdGFnLCBjZW50ZXJQb3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aUZ1bGwoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBpICogZHJvcERlbGF5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNsZWFyU3Bvb24oKTtcclxuICAgICAgICAvLyB0aGlzLmlzVGFyZ2V0Ym94LmdldENvbXBvbmVudChcIkJveENoYXJtXCIpLmdldENoYXJtKCk7XHJcbiAgICAgICAgLy8gfSwgY291bnQgKiBkcm9wRGVsYXkgKyAwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1Db3VudCh0YWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgY291bnRzID0gWzQsIDUsIDMsIDUsIDUsIDMsIDUsIDUsIDUsIDIsIDIsIDEsIDEsIDQsIDcsIDcsIDgsIDgsIDgsIDgsIDIsIDIsIDYsIDYsIDYsIDYsMSwxLDIsMl07XHJcbiAgICAgICAgcmV0dXJuIGNvdW50c1t0YWddIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIE5vZGUgc3ByaXRlIGtoYXkgdHLhuq9uZyAoY29uIGPhu6dhIHRoaXMucGxhdGUgLyBraGF5KS4gKi9cclxuICAgIHByaXZhdGUgZ2V0UGxhdGVTdXJmYWNlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhdGUuZ2V0Q2hpbGRCeU5hbWUoJ3BsYXRlJykgfHwgdGhpcy5wbGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogT2Zmc2V0IHNsb3QgdOG7qyBsb2NhbFBvcy4gKi9cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxQb3NPZmZzZXQoaW5kZXg6IG51bWJlcik6IGNjLlZlYzMge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbFBvcyB8fCAhdGhpcy5sb2NhbFBvcy5jaGlsZHJlbltpbmRleF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXJrZXIgPSB0aGlzLmxvY2FsUG9zLmNoaWxkcmVuW2luZGV4XTtcclxuICAgICAgICByZXR1cm4gY2MudjMobWFya2VyLngsIG1hcmtlci55LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVuG7iyB0csOtIHRyw6puIG3hurd0IHBsYXRlIChsb2NhbCBj4bunYSBraGF5KS4gKi9cclxuICAgIHByaXZhdGUgZ2V0VGFyZ2V0UG9zaXRpb24oaW5kZXg6IG51bWJlcik6IGNjLlZlYzMge1xyXG4gICAgICAgIGNvbnN0IHN1cmZhY2UgPSB0aGlzLmdldFBsYXRlU3VyZmFjZSgpO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0TG9jYWxQb3NPZmZzZXQoaW5kZXgpO1xyXG4gICAgICAgIGlmIChzdXJmYWNlICYmIHN1cmZhY2UgIT09IHRoaXMucGxhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYzKHN1cmZhY2UueCArIG9mZnNldC54LCBzdXJmYWNlLnkgKyBvZmZzZXQueSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsUG9zICYmIHRoaXMubG9jYWxQb3MuY2hpbGRyZW5baW5kZXhdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gdGhpcy5sb2NhbFBvcy5jaGlsZHJlbltpbmRleF0uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxhdGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3Bhd25DaGFybVdpdGhEcm9wKGluZGV4OiBudW1iZXIsIHRhZzogbnVtYmVyLCBjZW50ZXJQb3M6IGNjLlZlYzMpIHtcclxuICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuY3JlYXRlQ2hhcm1PblBsYXRlKHRhZywgaW5kZXgpO1xyXG4gICAgICAgIGlmICghY2hhcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gdGhpcy5nZXRUYXJnZXRQb3NpdGlvbihpbmRleCk7XHJcbiAgICAgICAgY29uc3Qgc3ByZWFkID0gY2MudjMoXHJcbiAgICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDI0LFxyXG4gICAgICAgICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyNCxcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24oY2VudGVyUG9zLmFkZChzcHJlYWQpKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmlnaWRCb2R5ID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFyaWdpZEJvZHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZGlyID0gY2MudjIodGFyZ2V0UG9zLnggLSBjaGFybS54LCB0YXJnZXRQb3MueSAtIGNoYXJtLnkpO1xyXG4gICAgICAgIGNvbnN0IGRpc3QgPSBkaXIubWFnKCk7XHJcbiAgICAgICAgaWYgKGRpc3QgPiAwKSB7XHJcbiAgICAgICAgICAgIGRpci5ub3JtYWxpemVTZWxmKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gTWF0aC5taW4oZGlzdCAqIDIuOCwgNjUwKTtcclxuICAgICAgICAgICAgcmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gZGlyLm11bChzcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJpZ2lkQm9keS5hbmd1bGFyVmVsb2NpdHkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAxODtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwYXduIHPhurVuIGNoYXJtIHRyw6puIGtoYXkgxJHhu4Mga8OpbyB0aOG6oyBuZ2F5IChraMO0bmcgY+G6p24geMO6YyBzcG9vbikuXHJcbiAgICAgKiBAcGFyYW0gdGFncyBkYW5oIHPDoWNoIHRhZyBjaGFybTsgbnVsbCA9IHbDoGkgbG/huqFpIG3hurdjIMSR4buLbmhcclxuICAgICAqL1xyXG4gICAgc3Bhd25DaGFybXNPblBsYXRlKHRhZ3M6IG51bWJlcltdID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSB8fCAhdGhpcy5saXN0Q2hhcm1zIHx8IHRoaXMubGlzdENoYXJtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NoYXJtR2FtZV0gVGhp4bq/dSBwbGF0ZSBob+G6t2MgbGlzdENoYXJtcyDigJQga2jDtG5nIHNwYXduIMSRxrDhu6NjLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsaXN0ID0gdGFncyAmJiB0YWdzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyB0YWdzXHJcbiAgICAgICAgICAgIDogWzAsIDAsIDAsIDAsIDEsIDEsIDEsIDIsIDIsIDMsIDMsIDMsIDQsIDQsIDYsIDYsIDcsIDgsIDcsIDUsIDksIDUsIDUsOCw4XTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2xvdENvdW50ID0gdGhpcy5sb2NhbFBvcyA/IHRoaXMubG9jYWxQb3MuY2hpbGRyZW5Db3VudCA6IDA7XHJcbiAgICAgICAgY29uc3Qgc3VyZmFjZSA9IHRoaXMuZ2V0UGxhdGVTdXJmYWNlKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbENoYXJtID4gNDApIGJyZWFrO1xyXG4gICAgICAgICAgICBjb25zdCB0YWcgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAodGFnID09IG51bGwgfHwgIXRoaXMubGlzdENoYXJtc1t0YWddKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ySW5kZXggPSBzbG90Q291bnQgPiAwID8gKGkgJSBzbG90Q291bnQpIDogaTtcclxuICAgICAgICAgICAgY29uc3QgY2hhcm0gPSB0aGlzLmNyZWF0ZUNoYXJtT25QbGF0ZSh0YWcsIGNvbG9ySW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoIWNoYXJtKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwb3M6IGNjLlZlYzM7XHJcbiAgICAgICAgICAgIGlmIChzbG90Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmdldFRhcmdldFBvc2l0aW9uKGkgJSBzbG90Q291bnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN1cmZhY2UgJiYgc3VyZmFjZSAhPT0gdGhpcy5wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29scyA9IDU7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52MyhcclxuICAgICAgICAgICAgICAgICAgICBzdXJmYWNlLnggKyAoaSAlIGNvbHMgLSAyKSAqIDkwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1cmZhY2UueSArIDQwIC0gTWF0aC5mbG9vcihpIC8gY29scykgKiA4MCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjMoKGkgJSA1IC0gMikgKiA3MCwgNDAgLSBNYXRoLmZsb29yKGkgLyA1KSAqIDcwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3ByZWFkID0gY2MudjMoXHJcbiAgICAgICAgICAgICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyMCxcclxuICAgICAgICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIwLFxyXG4gICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwb3MgPSBwb3MuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgICAgICAgICBjaGFybS5zZXRQb3NpdGlvbihwb3MuYWRkKHNwcmVhZCkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFNwYXduIDEgbG/huqFpIGNoYXJtIMSR4bunIHPhu5EgbMaw4bujbmcgbmjGsCBraGkgeMO6YyBib3ggKHRoZW8gdGFnKS4gKi9cclxuICAgIHNwYXduQ2hhcm1Cb3hPblBsYXRlKHRhZzogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdldENoYXJtQ291bnQodGFnKTtcclxuICAgICAgICBjb25zdCB0YWdzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0YWdzLnB1c2godGFnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcGF3bkNoYXJtc09uUGxhdGUodGFncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDaGFybU9uUGxhdGUodGFnOiBudW1iZXIsIGNvbG9ySW5kZXg6IG51bWJlcik6IGNjLk5vZGUge1xyXG4gICAgICAgIGNvbnN0IHByZWZhYiA9IHRoaXMubGlzdENoYXJtc1t0YWddO1xyXG4gICAgICAgIGlmICghcHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDaGFybUdhbWVdIEtow7RuZyBjw7MgcHJlZmFiIGNoYXJtIHRhZz0nICsgdGFnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGFybSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gdGhpcy5wbGF0ZTtcclxuICAgICAgICBjaGFybS5zZXRTaWJsaW5nSW5kZXgodGhpcy5wbGF0ZS5jaGlsZHJlbkNvdW50IC0gMSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjaGFybS5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpIGFzIGFueTtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXhDb2xvciA9IGl0ZW0ubGlzdEltZyAmJiBpdGVtLmxpc3RJbWcubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgPyBpdGVtLmxpc3RJbWcubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA6IDE7XHJcbiAgICAgICAgICAgIGl0ZW0ubG9hZElNRyhjb2xvckluZGV4ICUgbWF4Q29sb3IpO1xyXG4gICAgICAgICAgICBpdGVtLnRhZyA9IHRhZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJpZ2lkQm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChyaWdpZEJvZHkpIHtcclxuICAgICAgICAgICAgcmlnaWRCb2R5LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByaWdpZEJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICByaWdpZEJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmlnaWRCb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgICAgIHJpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICByaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgcmlnaWRCb2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHJpZ2lkQm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIHJpZ2lkQm9keS5zeW5jUm90YXRpb24odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb2xsaWRlciBi4bqtdCDEkeG7gyBu4bqxbSB0csOqbiBraGF5OyBraGkga8OpbyBDb3JkUm91bmRHYW1lIHPhur0gdOG6r3QuXHJcbiAgICAgICAgY29uc3QgY29sbGlkZXIgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3RhbENoYXJtKys7XHJcbiAgICAgICAgcmV0dXJuIGNoYXJtO1xyXG4gICAgfVxyXG4gICAgaXNEZWxheSA9IGZhbHNlXHJcbiAgICBzaG93Tm90aUZ1bGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxheSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNEZWxheSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVsYXkgPSBmYWxzZTtcclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMubm90aUZ1bGwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vdGlGdWxsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgfVxyXG4gICAgYnRuX29rKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm90aUZ1bGwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5idG5Pay5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19