"use strict";
cc._RF.push(module, '021fbGFpt1IuojzmG0GWQi9', 'charListener');
// scripts/listener/charListener.ts

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
var treeListener_1 = require("./treeListener");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = null;
        _this.gamePlay = null;
        _this.isFirst = true;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        this.className = this["__classname__"];
        this.gamePlay = cc.Canvas.instance.node.getComponent("ICY_19");
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (self.getComponent(this.className) && other.node.getComponent(treeListener_1.default) && this.node.getComponent("character").isSub == true) {
            other.node.getComponent(cc.CircleCollider).enabled = false;
            this.gamePlay.collectEggsSub(other.node);
        }
        if (this.node.getComponent("character").isSub == false) {
            if (self.getComponent(this.className) && other.getComponent(treeListener_1.default) && this.node.getComponent("character").isSub == false) {
                if (this.isFirst) {
                    this.isFirst = false;
                    this.gamePlay.arrowNode.active = false;
                    this.gamePlay.listArrow.children[3].active = true;
                }
                other.node.getComponent(cc.CircleCollider).enabled = false;
                this.gamePlay.collectEggs(other.node);
            }
        }
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        // if (other.node.name == "ke" && this.gamePlay.isTranske == false) {
        //     this.gamePlay.offWoodFromKe()
        //     // this.node.getComponent("character").isSellding=true
        // }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        // if (self.getComponent(this.className) && other.getComponent(TL)) {
        //     this.node.getComponent("character").removeEnemy(other.node._id)
        // }
        // if (this.node.getComponent("character").isSub == false) {
        //     if (other.node.name == "sellToCus") {
        //         this.node.getComponent("character").isSellding = false
        //     }
        //     if (other.node.name == "ke") {
        //         this.gamePlay.offWoodFromKe()
        //         // this.node.getComponent("character").isSellding=true
        //     }
        //     if (other.node.name == "sellToCus") {
        //         this.gamePlay.offSell()
        //     }
        // }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();