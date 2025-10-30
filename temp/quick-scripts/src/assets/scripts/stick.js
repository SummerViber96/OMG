"use strict";
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