"use strict";
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
        _this.charms = [];
        _this.isTargetbox = null;
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
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();