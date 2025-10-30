"use strict";
cc._RF.push(module, '090dcmnetNG3KqP1GXB4VGk', 'giaoBullet');
// scripts/giaoBullet.ts

"use strict";
// import { Constant } from "../../Constant_1_1";
// import Bullet from "../../tower/Bullet";
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.shoot = function (enemy, tower) {
        // this.data = tower.data;
        this.shootCustom(enemy, tower);
    };
    NewClass.prototype.shootCustom = function (enemy, tower) {
        // cc.Canvas.instance.node.emit(Constant.EVENT.ARCHER_SHOOT);
        // this.node.zIndex = Constant.TOWER_FRONT_BULLET_ZINDEX;
        this.node.setPosition(cc.v3(0, 90));
        this.node.zIndex = (tower.isFront) ? 4 : 0;
        var enemyNode = enemy;
        var ePosW = enemyNode.parent.convertToWorldSpaceAR(enemyNode.position);
        var ePos = this.node.parent.convertToNodeSpaceAR(ePosW);
        // move
        var tPos = cc.v2(this.node.position.x, this.node.position.y);
        var middlePosX = (ePos.x - this.node.position.x) / 2;
        var rotateParam = (this.node.parent.x < enemyNode.x) ? 1 : -1;
        this.node.angle = (this.node.parent.x < enemyNode.x) ? 50 : 130;
        this.getRotateAngle(enemy, tower);
        this.node.runAction(cc.sequence(cc.spawn(cc.bezierTo(0.6, [tPos, tPos.add(cc.v2(middlePosX, this.getShootHeight(enemy, tower))), ePos.add(cc.v3(0, 30))]), cc.rotateBy(0.6, this.getRotateAngle(enemy, tower) * rotateParam)), cc.callFunc(function () {
            if (enemy.isValid) {
                // enemy.attacked(this.data.attackDamage, this.data.attackType);
            }
            this.node.destroy();
        }.bind(this))));
    };
    NewClass.prototype.getShootHeight = function (enemy, tower) {
        var ePos = enemy.position;
        var tPos = tower.node.position;
        var distance = Math.abs(Math.abs(ePos.x) - Math.abs(tPos.x));
        if (distance < 30) {
            return 10;
        }
        else if (distance < 50) {
            return 30;
        }
        else if (distance < 100) {
            return 60;
        }
        else if (distance < 150) {
            return 80;
        }
        return 100;
    };
    NewClass.prototype.getRotateAngle = function (enemy, tower) {
        var ePos = enemy.position;
        var tPos = tower.node.position;
        var distance = Math.abs(Math.abs(ePos.x) - Math.abs(tPos.x));
        if (tower.isFront) {
            if (distance < 50) {
                return 140;
            }
            else if (distance < 100) {
                return 130;
            }
            else if (distance < 150) {
                return 120;
            }
            return 60;
        }
        return 50;
    };
    NewClass.prototype.getDistance = function (destination) {
        return destination.sub(this.node.position).mag();
    };
    NewClass.prototype.getStartPos = function (tower) {
        var anim = tower.anim.node;
        var anim2 = tower.anim2.node;
        var addPos = cc.v3();
        if (anim.name == anim2.name) {
            addPos = cc.v3(-4, 59);
        }
        else {
            addPos = cc.v3(26, 64);
        }
        return this.node.position.add(addPos);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();