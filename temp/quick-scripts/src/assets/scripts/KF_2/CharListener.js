"use strict";
cc._RF.push(module, '7d757lSmdhEH6OcUwLFBN6u', 'CharListener');
// scripts/KF_2/CharListener.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Char_1 = require("./Char");
var MR_4_1 = require("./MR_4");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var collider = this.getComponent(cc.BoxCollider3D);
        collider.on('trigger-enter', this.onTrigger, this);
    };
    NewClass.prototype.onTrigger = function (event) {
        var charComp = this.node.getComponent(Char_1.default);
        var gameComp = this.node.parent.parent.getComponent(MR_4_1.default);
        var otherNode = event.otherCollider.node;
        console.log("event", event, otherNode.name);
        var selfNode = event.selfCollider.node;
        if (otherNode.name !== selfNode.name && selfNode.name == 'char') {
            // if ((otherNode.name == 'cayngo' || otherNode.name == 'caycachua') && charComp.numCarry < 24) {
            //     otherNode.children[2].destroy();
            //     otherNode.getComponent(cc.BoxCollider3D).enabled = false;
            //     charComp.addItem(otherNode.name);
            // }
        }
        if (otherNode.name !== selfNode.name && selfNode.name == 'nv' && otherNode.name == 'IconGetBanhMif') {
            charComp.addBanhMi();
            gameComp.listArrow.children[0].active = false;
            gameComp.listArrow.children[1].active = true;
        }
        else if (otherNode.name !== selfNode.name && selfNode.name == 'nv' && otherNode.name == 'unlockNode') {
            console.log("step2", gameComp.countMoney);
            if (gameComp.countMoney < 50) {
                gameComp.char.parent.getChildByName("text").getComponent(cc.Animation).play();
            }
            else {
                gameComp.stepEnd();
            }
        }
        else if (otherNode.name !== selfNode.name && selfNode.name == 'nv' && otherNode.name == 'areaSell') {
            if (charComp.isBanhMi) {
                gameComp.getMoney();
                gameComp.listArrow.children[1].active = false;
                gameComp.listArrow.children[0].active = true;
            }
        }
        // if (otherNode.name !== selfNode.name && selfNode.name == 'char' && otherNode.name == 'banthungan') {
        //     if(cc.Canvas.instance.node.getComponent(GamePlay).countCustomer == 4) {
        //         cc.Canvas.instance.node.getComponent(GamePlay).endGame();
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