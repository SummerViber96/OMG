
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/giaoBullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2lhb0J1bGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWlEO0FBQ2pELDJDQUEyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQThGQSxDQUFDO0lBNUZHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCx3QkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLEtBQUs7UUFDZCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELDhCQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsS0FBSztRQUNwQiw2REFBNkQ7UUFDN0QseURBQXlEO1FBRXpELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTNDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RCxPQUFPO1FBQ1AsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyRCxJQUFJLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUVoRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDckosRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcs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M0ZnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOEY1QjtJQUFELGVBQUM7Q0E5RkQsQUE4RkMsQ0E5RnFDLEVBQUUsQ0FBQyxTQUFTLEdBOEZqRDtrQkE5Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBDb25zdGFudCB9IGZyb20gXCIuLi8uLi9Db25zdGFudF8xXzFcIjtcclxuLy8gaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi4vLi4vdG93ZXIvQnVsbGV0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuICAgIHNob290KGVuZW15LCB0b3dlcikge1xyXG4gICAgICAgIC8vIHRoaXMuZGF0YSA9IHRvd2VyLmRhdGE7XHJcbiAgICAgICAgdGhpcy5zaG9vdEN1c3RvbShlbmVteSwgdG93ZXIpO1xyXG4gICAgfVxyXG4gICAgc2hvb3RDdXN0b20oZW5lbXksIHRvd2VyKSB7XHJcbiAgICAgICAgLy8gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZW1pdChDb25zdGFudC5FVkVOVC5BUkNIRVJfU0hPT1QpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS56SW5kZXggPSBDb25zdGFudC5UT1dFUl9GUk9OVF9CVUxMRVRfWklOREVYO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY2MudjMoMCwgOTApKTtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gKHRvd2VyLmlzRnJvbnQpID8gNCA6IDA7XHJcblxyXG4gICAgICAgIGxldCBlbmVteU5vZGUgPSBlbmVteTtcclxuICAgICAgICBsZXQgZVBvc1cgPSBlbmVteU5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihlbmVteU5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIGxldCBlUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlUG9zVyk7XHJcblxyXG4gICAgICAgIC8vIG1vdmVcclxuICAgICAgICBsZXQgdFBvcyA9IGNjLnYyKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgbGV0IG1pZGRsZVBvc1ggPSAoZVBvcy54IC0gdGhpcy5ub2RlLnBvc2l0aW9uLngpIC8gMjtcclxuXHJcbiAgICAgICAgbGV0IHJvdGF0ZVBhcmFtID0gKHRoaXMubm9kZS5wYXJlbnQueCA8IGVuZW15Tm9kZS54KSA/IDEgOiAtMTtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAodGhpcy5ub2RlLnBhcmVudC54IDwgZW5lbXlOb2RlLngpID8gNTAgOiAxMzA7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0Um90YXRlQW5nbGUoZW5lbXksIHRvd2VyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5iZXppZXJUbygwLjYsIFt0UG9zLCB0UG9zLmFkZChjYy52MihtaWRkbGVQb3NYLCB0aGlzLmdldFNob290SGVpZ2h0KGVuZW15LCB0b3dlcikpKSwgZVBvcy5hZGQoY2MudjMoMCwgMzApKV0pLFxyXG4gICAgICAgICAgICBjYy5yb3RhdGVCeSgwLjYsIHRoaXMuZ2V0Um90YXRlQW5nbGUoZW5lbXksIHRvd2VyKSAqIHJvdGF0ZVBhcmFtKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbmVteS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5lbXkuYXR0YWNrZWQodGhpcy5kYXRhLmF0dGFja0RhbWFnZSwgdGhpcy5kYXRhLmF0dGFja1R5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNob290SGVpZ2h0KGVuZW15LCB0b3dlcikge1xyXG4gICAgICAgIGxldCBlUG9zID0gZW5lbXkucG9zaXRpb247XHJcbiAgICAgICAgbGV0IHRQb3MgPSB0b3dlci5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguYWJzKE1hdGguYWJzKGVQb3MueCkgLSBNYXRoLmFicyh0UG9zLngpKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCAzMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA8IDUwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAzMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlIDwgMTAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA2MDtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlIDwgMTUwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA4MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3RhdGVBbmdsZShlbmVteSwgdG93ZXIpIHtcclxuICAgICAgICBsZXQgZVBvcyA9IGVuZW15LnBvc2l0aW9uO1xyXG4gICAgICAgIGxldCB0UG9zID0gdG93ZXIubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLmFicyhNYXRoLmFicyhlUG9zLngpIC0gTWF0aC5hYnModFBvcy54KSk7XHJcbiAgICAgICAgaWYgKHRvd2VyLmlzRnJvbnQpIHtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgNTApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxNDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxMzA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPCAxNTApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDYwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gNTA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlzdGFuY2UoZGVzdGluYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gZGVzdGluYXRpb24uc3ViKHRoaXMubm9kZS5wb3NpdGlvbikubWFnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhcnRQb3ModG93ZXIpIHtcclxuICAgICAgICBsZXQgYW5pbSA9IHRvd2VyLmFuaW0ubm9kZTtcclxuICAgICAgICBsZXQgYW5pbTIgPSB0b3dlci5hbmltMi5ub2RlO1xyXG4gICAgICAgIGxldCBhZGRQb3MgPSBjYy52MygpO1xyXG4gICAgICAgIGlmIChhbmltLm5hbWUgPT0gYW5pbTIubmFtZSkge1xyXG4gICAgICAgICAgICBhZGRQb3MgPSBjYy52MygtNCwgNTkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZFBvcyA9IGNjLnYzKDI2LCA2NCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGFkZFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=