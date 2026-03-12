"use strict";
cc._RF.push(module, '117cd3l+o5DXZvEnu2ZoU8Q', 'Item');
// New Folder/Scripts/Item.ts

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
        _this.tag = 0;
        _this.gameplay = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gameplay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.click = function () {
        var _this = this;
        if (this.gameplay.isMoving)
            return;
        var check = this.gameplay.checkMission(this.tag, this.node);
        cc.audioEngine.play(this.gameplay.soundTrans, false, 0.5);
        if (check) {
            var pos = check.parent.convertToWorldSpaceAR(check.position);
            pos = this.node.parent.convertToNodeSpaceAR(pos);
            this.node.stopAllActions();
            this.node.getComponent(cc.Button).enabled = false;
            var mag = (pos.x > this.node.x) ? -50 : 50;
            var startPos = cc.v2(this.node.x, this.node.y);
            var endPos = cc.v2(pos.x, pos.y);
            var midPos = cc.v2(endPos.x + mag, endPos.y + 200);
            cc.tween(this.node).to(0.6, { scale: 0.5 }).start();
            cc.tween(this.node).bezierTo(0.6, startPos, midPos, endPos).call(function () {
                _this.node.destroy();
            }).start();
            // cc.tween(this.node).to(0.6, { position: pos, scale: 0.8 }).call(() => {
            //     this.node.destroy()
            // }).start()
        }
    };
    NewClass.prototype.loadGray = function () {
        this.setGray(this.node.children[1]);
    };
    NewClass.prototype.setGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.offGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    };
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();