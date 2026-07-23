
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
        // const counts = [4, 5, 3, 5, 5, 3, 5, 5, 5, 2, 2, 1, 1, 4, 7, 7, 8, 8, 8, 8, 2, 2, 6, 6, 6, 6,1,1,2,2];
        var counts = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
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
            : [7, 7, 7, 7, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 6, 6, 7, 3, 7, 5, 6, 5, 5, 4, 5, 6, 2, 5, 5, 1, 1, 6, 6, 4, 4, 3, 3, 1];
        // const list=[7, 7, 7, 7, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 6, 6, 7, 8, 7, 5, 9, 5, 5,8,8,9,9,5,5,1,1,6,6,4,4,2,2];
        var slotCount = this.localPos ? this.localPos.childrenCount : 0;
        var surface = this.getPlateSurface();
        for (var i = 0; i < list.length; i++) {
            // if (this.totalCharm > 40) break;
            var tag = list[i];
            if (tag == null || !this.listCharms[tag])
                continue;
            var colorIndex = slotCount > 0 ? (i % slotCount) : i;
            var charm = this.createCharmOnPlate(tag, colorIndex);
            if (!charm)
                continue;
            var pos = void 0;
            // pos = this.getTargetPosition(i % slotCount);
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
            charm.angle = Math.random() * 360;
            charm.getComponent("CharmItem").loadIMG(0);
            var body = charm.getComponent(cc.RigidBody);
            if (body) {
                body.linearVelocity = cc.v2(0, 0);
                body.angularVelocity = 0;
                body.syncPosition(true);
                body.syncRotation(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ2hhcm1HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdVZDO1FBclZHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUU3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBQzNCLFlBQU0sR0FBRyxFQUFFLENBQUE7UUFDWCxpQkFBVyxHQUFHLElBQUksQ0FBQztRQThCbkIsaUJBQVcsR0FBRyxDQUFDLENBQUE7UUFtRWYsZ0JBQVUsR0FBRyxDQUFDLENBQUE7UUE2TWQsYUFBTyxHQUFHLEtBQUssQ0FBQTs7UUFjZixpQkFBaUI7SUFDckIsQ0FBQztJQTVURyx5QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFFSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENB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NkJBQTZCO0lBQ2pDLENBQUM7SUFuVkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNLO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUF4QlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVWNUI7SUFBRCxlQUFDO0NBdlZELEFBdVZDLENBdlZxQyxFQUFFLENBQUMsU0FBUyxHQXVWakQ7a0JBdlZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzcG9vbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RCb3hOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhdGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvY2FsUG9zOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsaXN0Q2hhcm1zOiBjYy5QcmVmYWJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub3RpRnVsbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9rOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJtSGluZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRYdWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERvOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgY2hhcm1zID0gW11cclxuICAgIGlzVGFyZ2V0Ym94ID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCb3hOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RCb3hOb2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJtcy5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG91Y2hOb2RlID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcbiAgICBPZmZFdmVudCgpIHtcclxuICAgICAgICBjb25zdCB0b3VjaE5vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Ym94KSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICB0aGlzLmNoZWNrU3Bvb24ocG9zKVxyXG5cclxuICAgIH1cclxuICAgIGlzQ291bnRHYW1lID0gMFxyXG4gICAgY2hlY2tTcG9vbihwb3MpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmxpc3RCb3hOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBsZXQgYm94ID0gdGhpcy5nZXRCb3gocG9zKVxyXG4gICAgICAgIGlmIChib3gpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Pay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Ym94ID0gYm94XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5wb3NpdGlvbiA9IHBvcy5hZGQoY2MudjMoLTMwLCA1MCkpXHJcbiAgICAgICAgICAgIGxldCBib3hDb21wID0gYm94LmdldENvbXBvbmVudChcIkJveENoYXJtXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmdldENvbXBvbmVudChcIlNwb29uXCIpLnNldENoYXJtcyhib3hDb21wLnRhZylcclxuICAgICAgICAgICAgdGhpcy5oYW5kMy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kWHVjLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0SGluZChib3hDb21wLnRhZylcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEJveChwb3MpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NDaGFybSA9IHRoaXMuY2hhcm1zW2ldLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBpZiAocG9zLnN1Yihwb3NDaGFybSkubWFnKCkgPD0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFybXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBvblRvdWNoTW92ZShldmVudCkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvcyA9IHRoaXMubGlzdEJveE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldGJveCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLnBvc2l0aW9uID0gcG9zLmFkZChjYy52MygtMzAsIDUwKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb3MgPSB0aGlzLmxpc3RCb3hOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja1BsYXRlKHBvcylcclxuICAgICAgICBpZiAoY2hlY2sgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclNwb29uKClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyb3BDaGFybXMoKVxyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnRHYW1lKytcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzQ291bnRHYW1lID09IDIpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tQbGF0ZShwb3MpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSBwb3Muc3ViKHRoaXMucGxhdGUucG9zaXRpb24pLm1hZygpXHJcbiAgICAgICAgaWYgKGNoZWNrIDw9IDMwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNsZWFyU3Bvb24oKSB7XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldGJveCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zcG9vbi5nZXRDb21wb25lbnQoXCJTcG9vblwiKS5vZmYoKVxyXG4gICAgfVxyXG4gICAgdG90YWxDaGFybSA9IDBcclxuICAgIGRyb3BDaGFybXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGFyZ2V0Ym94IHx8ICF0aGlzLmxvY2FsUG9zKSByZXR1cm47XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRG8sIGZhbHNlLCAxKVxyXG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuaXNUYXJnZXRib3guZ2V0Q29tcG9uZW50KFwiQm94Q2hhcm1cIikudGFnO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRDaGFybUNvdW50KHRhZyk7XHJcbiAgICAgICAgY29uc3Qgc3VyZmFjZSA9IHRoaXMuZ2V0UGxhdGVTdXJmYWNlKCk7XHJcbiAgICAgICAgY29uc3QgY2VudGVyUG9zID0gc3VyZmFjZSAmJiBzdXJmYWNlICE9PSB0aGlzLnBsYXRlXHJcbiAgICAgICAgICAgID8gY2MudjMoc3VyZmFjZS54LCBzdXJmYWNlLnkgKyA4MCwgMClcclxuICAgICAgICAgICAgOiBjYy52MygwLCA4MCwgMCk7XHJcbiAgICAgICAgY29uc3QgZHJvcERlbGF5ID0gMC4wNjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ2hhcm0gPD0gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduQ2hhcm1XaXRoRHJvcChpLCB0YWcsIGNlbnRlclBvcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpRnVsbCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGkgKiBkcm9wRGVsYXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTcG9vbigpO1xyXG4gICAgICAgIC8vIHRoaXMuaXNUYXJnZXRib3guZ2V0Q29tcG9uZW50KFwiQm94Q2hhcm1cIikuZ2V0Q2hhcm0oKTtcclxuICAgICAgICAvLyB9LCBjb3VudCAqIGRyb3BEZWxheSArIDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybUNvdW50KHRhZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBjb25zdCBjb3VudHMgPSBbNCwgNSwgMywgNSwgNSwgMywgNSwgNSwgNSwgMiwgMiwgMSwgMSwgNCwgNywgNywgOCwgOCwgOCwgOCwgMiwgMiwgNiwgNiwgNiwgNiwxLDEsMiwyXTtcclxuICAgICAgICBjb25zdCBjb3VudHMgPSBbMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwyLDIsMiwyLDIsMiwyLDJdO1xyXG5cclxuICAgICAgICByZXR1cm4gY291bnRzW3RhZ10gfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogTm9kZSBzcHJpdGUga2hheSB0cuG6r25nIChjb24gY+G7p2EgdGhpcy5wbGF0ZSAvIGtoYXkpLiAqL1xyXG4gICAgcHJpdmF0ZSBnZXRQbGF0ZVN1cmZhY2UoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF0ZS5nZXRDaGlsZEJ5TmFtZSgncGxhdGUnKSB8fCB0aGlzLnBsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBPZmZzZXQgc2xvdCB04burIGxvY2FsUG9zLiAqL1xyXG4gICAgcHJpdmF0ZSBnZXRMb2NhbFBvc09mZnNldChpbmRleDogbnVtYmVyKTogY2MuVmVjMyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsUG9zIHx8ICF0aGlzLmxvY2FsUG9zLmNoaWxkcmVuW2luZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjMoMCwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMubG9jYWxQb3MuY2hpbGRyZW5baW5kZXhdO1xyXG4gICAgICAgIHJldHVybiBjYy52MyhtYXJrZXIueCwgbWFya2VyLnksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBW4buLIHRyw60gdHLDqm4gbeG6t3QgcGxhdGUgKGxvY2FsIGPhu6dhIGtoYXkpLiAqL1xyXG4gICAgcHJpdmF0ZSBnZXRUYXJnZXRQb3NpdGlvbihpbmRleDogbnVtYmVyKTogY2MuVmVjMyB7XHJcbiAgICAgICAgY29uc3Qgc3VyZmFjZSA9IHRoaXMuZ2V0UGxhdGVTdXJmYWNlKCk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRMb2NhbFBvc09mZnNldChpbmRleCk7XHJcbiAgICAgICAgaWYgKHN1cmZhY2UgJiYgc3VyZmFjZSAhPT0gdGhpcy5wbGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjMoc3VyZmFjZS54ICsgb2Zmc2V0LngsIHN1cmZhY2UueSArIG9mZnNldC55LCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxQb3MgJiYgdGhpcy5sb2NhbFBvcy5jaGlsZHJlbltpbmRleF0pIHtcclxuICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSB0aGlzLmxvY2FsUG9zLmNoaWxkcmVuW2luZGV4XS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF0ZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzcGF3bkNoYXJtV2l0aERyb3AoaW5kZXg6IG51bWJlciwgdGFnOiBudW1iZXIsIGNlbnRlclBvczogY2MuVmVjMykge1xyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gdGhpcy5jcmVhdGVDaGFybU9uUGxhdGUodGFnLCBpbmRleCk7XHJcbiAgICAgICAgaWYgKCFjaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRQb3MgPSB0aGlzLmdldFRhcmdldFBvc2l0aW9uKGluZGV4KTtcclxuICAgICAgICBjb25zdCBzcHJlYWQgPSBjYy52MyhcclxuICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjQsXHJcbiAgICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDI0LFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbihjZW50ZXJQb3MuYWRkKHNwcmVhZCkpO1xyXG5cclxuICAgICAgICBjb25zdCByaWdpZEJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXJpZ2lkQm9keSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkaXIgPSBjYy52Mih0YXJnZXRQb3MueCAtIGNoYXJtLngsIHRhcmdldFBvcy55IC0gY2hhcm0ueSk7XHJcbiAgICAgICAgY29uc3QgZGlzdCA9IGRpci5tYWcoKTtcclxuICAgICAgICBpZiAoZGlzdCA+IDApIHtcclxuICAgICAgICAgICAgZGlyLm5vcm1hbGl6ZVNlbGYoKTtcclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBNYXRoLm1pbihkaXN0ICogMi44LCA2NTApO1xyXG4gICAgICAgICAgICByaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBkaXIubXVsKHNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmlnaWRCb2R5LmFuZ3VsYXJWZWxvY2l0eSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDE4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3Bhd24gc+G6tW4gY2hhcm0gdHLDqm4ga2hheSDEkeG7gyBrw6lvIHRo4bqjIG5nYXkgKGtow7RuZyBj4bqnbiB4w7pjIHNwb29uKS5cclxuICAgICAqIEBwYXJhbSB0YWdzIGRhbmggc8OhY2ggdGFnIGNoYXJtOyBudWxsID0gdsOgaSBsb+G6oWkgbeG6t2MgxJHhu4tuaFxyXG4gICAgICovXHJcbiAgICBzcGF3bkNoYXJtc09uUGxhdGUodGFnczogbnVtYmVyW10gPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlIHx8ICF0aGlzLmxpc3RDaGFybXMgfHwgdGhpcy5saXN0Q2hhcm1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKCdbQ2hhcm1HYW1lXSBUaGnhur91IHBsYXRlIGhv4bq3YyBsaXN0Q2hhcm1zIOKAlCBraMO0bmcgc3Bhd24gxJHGsOG7o2MuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3QgPSB0YWdzICYmIHRhZ3MubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICA/IHRhZ3NcclxuICAgICAgICAgICAgOiBbNywgNywgNywgNywgMSwgMSwgMSwgMiwgMiwgMywgMywgMywgNCwgNCwgNiwgNiwgNywgMywgNywgNSwgNiwgNSwgNSwgNCwgNSwgNiwgMiwgNSwgNSwgMSwgMSwgNiwgNiwgNCwgNCwzLDMsMV07XHJcbiAgICAgICAgLy8gY29uc3QgbGlzdD1bNywgNywgNywgNywgMSwgMSwgMSwgMiwgMiwgMywgMywgMywgNCwgNCwgNiwgNiwgNywgOCwgNywgNSwgOSwgNSwgNSw4LDgsOSw5LDUsNSwxLDEsNiw2LDQsNCwyLDJdO1xyXG4gICAgICAgIGNvbnN0IHNsb3RDb3VudCA9IHRoaXMubG9jYWxQb3MgPyB0aGlzLmxvY2FsUG9zLmNoaWxkcmVuQ291bnQgOiAwO1xyXG5cclxuICAgICAgICBjb25zdCBzdXJmYWNlID0gdGhpcy5nZXRQbGF0ZVN1cmZhY2UoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnRvdGFsQ2hhcm0gPiA0MCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmICh0YWcgPT0gbnVsbCB8fCAhdGhpcy5saXN0Q2hhcm1zW3RhZ10pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sb3JJbmRleCA9IHNsb3RDb3VudCA+IDAgPyAoaSAlIHNsb3RDb3VudCkgOiBpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuY3JlYXRlQ2hhcm1PblBsYXRlKHRhZywgY29sb3JJbmRleCk7XHJcbiAgICAgICAgICAgIGlmICghY2hhcm0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBvczogY2MuVmVjMztcclxuICAgICAgICAgICAgLy8gcG9zID0gdGhpcy5nZXRUYXJnZXRQb3NpdGlvbihpICUgc2xvdENvdW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzbG90Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmdldFRhcmdldFBvc2l0aW9uKGkgJSBzbG90Q291bnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN1cmZhY2UgJiYgc3VyZmFjZSAhPT0gdGhpcy5wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29scyA9IDU7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52MyhcclxuICAgICAgICAgICAgICAgICAgICBzdXJmYWNlLnggKyAoaSAlIGNvbHMgLSAyKSAqIDkwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1cmZhY2UueSArIDQwIC0gTWF0aC5mbG9vcihpIC8gY29scykgKiA4MCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjMoKGkgJSA1IC0gMikgKiA3MCwgNDAgLSBNYXRoLmZsb29yKGkgLyA1KSAqIDcwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3ByZWFkID0gY2MudjMoXHJcbiAgICAgICAgICAgICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyMCxcclxuICAgICAgICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIwLFxyXG4gICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwb3MgPSBwb3MuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgICAgICAgICBjaGFybS5zZXRQb3NpdGlvbihwb3MuYWRkKHNwcmVhZCkpO1xyXG4gICAgICAgICAgICBjaGFybS5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICAgICAgICAgIGNoYXJtLmdldENvbXBvbmVudChcIkNoYXJtSXRlbVwiKS5sb2FkSU1HKDApXHJcblxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3luY1JvdGF0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBTcGF3biAxIGxv4bqhaSBjaGFybSDEkeG7pyBz4buRIGzGsOG7o25nIG5oxrAga2hpIHjDumMgYm94ICh0aGVvIHRhZykuICovXHJcbiAgICBzcGF3bkNoYXJtQm94T25QbGF0ZSh0YWc6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRDaGFybUNvdW50KHRhZyk7XHJcbiAgICAgICAgY29uc3QgdGFnczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3Bhd25DaGFybXNPblBsYXRlKHRhZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQ2hhcm1PblBsYXRlKHRhZzogbnVtYmVyLCBjb2xvckluZGV4OiBudW1iZXIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBjb25zdCBwcmVmYWIgPSB0aGlzLmxpc3RDaGFybXNbdGFnXTtcclxuICAgICAgICBpZiAoIXByZWZhYikge1xyXG4gICAgICAgICAgICBjYy53YXJuKCdbQ2hhcm1HYW1lXSBLaMO0bmcgY8OzIHByZWZhYiBjaGFybSB0YWc9JyArIHRhZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2hhcm0gPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIGNoYXJtLnBhcmVudCA9IHRoaXMucGxhdGU7XHJcbiAgICAgICAgY2hhcm0uc2V0U2libGluZ0luZGV4KHRoaXMucGxhdGUuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0gY2hhcm0uZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgbWF4Q29sb3IgPSBpdGVtLmxpc3RJbWcgJiYgaXRlbS5saXN0SW1nLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgID8gaXRlbS5saXN0SW1nLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgOiAxO1xyXG4gICAgICAgICAgICBpdGVtLmxvYWRJTUcoY29sb3JJbmRleCAlIG1heENvbG9yKTtcclxuICAgICAgICAgICAgaXRlbS50YWcgPSB0YWc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByaWdpZEJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAocmlnaWRCb2R5KSB7XHJcbiAgICAgICAgICAgIHJpZ2lkQm9keS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmlnaWRCb2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmlnaWRCb2R5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJpZ2lkQm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgICAgICByaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgcmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHJpZ2lkQm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICByaWdpZEJvZHkuc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICByaWdpZEJvZHkuc3luY1JvdGF0aW9uKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29sbGlkZXIgYuG6rXQgxJHhu4MgbuG6sW0gdHLDqm4ga2hheTsga2hpIGvDqW8gQ29yZFJvdW5kR2FtZSBz4bq9IHThuq90LlxyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgIGlmIChjb2xsaWRlcikge1xyXG4gICAgICAgICAgICBjb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG90YWxDaGFybSsrO1xyXG4gICAgICAgIHJldHVybiBjaGFybTtcclxuICAgIH1cclxuICAgIGlzRGVsYXkgPSBmYWxzZVxyXG4gICAgc2hvd05vdGlGdWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsYXkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRGVsYXkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0RlbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICB0aGlzLm5vdGlGdWxsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub3RpRnVsbC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIH1cclxuICAgIGJ0bl9vaygpIHtcclxuICAgICAgICAvLyB0aGlzLm5vdGlGdWxsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuYnRuT2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==