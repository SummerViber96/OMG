"use strict";
cc._RF.push(module, '6d575F5AdFBp79tQ3agM8NB', 'rangeListener');
// scripts/listener/rangeListener.ts

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
        _this.target = null;
        _this.className = null;
        _this.gamePlay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        this.className = this["__classname__"];
        this.gamePlay = cc.Canvas.instance.node.getComponent("ICY_19");
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (this.target.getComponent("character").isSub == false) {
            if (other.node.name == "arenaSell1") {
                if (this.gamePlay.countMoneyBag > 0) {
                    this.gamePlay.getSell();
                }
                else {
                    this.gamePlay.char.getChildByName("textUd").getComponent(cc.Animation).play();
                    this.gamePlay.listArrow.children[3].active = true;
                    this.gamePlay.arrowNode.active = false;
                }
            }
            if (other.node.name == "arenaSell3") {
                if (this.gamePlay.countMoneyBag > 0) {
                    this.gamePlay.getSell3(3);
                }
                else {
                    this.gamePlay.char.getChildByName("textUd").getComponent(cc.Animation).play();
                    this.gamePlay.listArrow.children[3].active = true;
                    this.gamePlay.arrowNode.active = false;
                }
            }
            if (other.node.name == "arenaSell4") {
                if (this.gamePlay.countMoneyBag > 0) {
                    this.gamePlay.getSell3(4);
                }
                else {
                    this.gamePlay.char.getChildByName("textUd").getComponent(cc.Animation).play();
                    this.gamePlay.listArrow.children[3].active = true;
                    this.gamePlay.arrowNode.active = false;
                }
            }
            else if (other.node.name == "sellToCus") {
                other.node.parent.children[1].color = cc.Color.GREEN;
                this.gamePlay.sellToCus2();
                this.target.getComponent("character").isSellding = true;
            }
            else if (other.node.name == "ke") {
                this.gamePlay.addWoodFromKe();
            }
        }
        // else if()
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        if (other.node.name == "ke" && this.gamePlay.isTranske == false) {
            this.gamePlay.offWoodFromKe();
            // this.node.getComponent("character").isSellding=true
        }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        // if (self.getComponent(this.className) && other.getComponent(TL)) {
        //     this.node.getComponent("character").removeEnemy(other.node._id)
        // }
        if (this.target.getComponent("character").isSub == false) {
            if (other.node.name == "sellToCus") {
                this.target.getComponent("character").isSellding = false;
                other.node.parent.children[1].color = cc.Color.WHITE;
            }
            if (other.node.name == "ke") {
                this.gamePlay.offWoodFromKe();
                // this.node.getComponent("character").isSellding=true
            }
            if (other.node.name == "sellToCus") {
                this.gamePlay.offSell();
            }
            if (other.node.name == "arenaSell1") {
                this.gamePlay.offSellMone();
            }
            if (other.node.name == "arenaSell3") {
                this.gamePlay.offSellMone3(3);
            }
            if (other.node.name == "arenaSell4") {
                this.gamePlay.offSellMone3(4);
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();