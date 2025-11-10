"use strict";
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