
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dpYW9CdWxsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFpRDtBQUNqRCwyQ0FBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUE4RkEsQ0FBQztJQTVGRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0Qsd0JBQUssR0FBTCxVQUFNLEtBQUssRUFBRSxLQUFLO1FBQ2QsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCw4QkFBVyxHQUFYLFVBQVksS0FBSyxFQUFFLEtBQUs7UUFDcEIsNkRBQTZEO1FBQzdELHlEQUF5RDtRQUV6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEQsT0FBTztRQUNQLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFFaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3JKLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLFdB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Z0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThGNUI7SUFBRCxlQUFDO0NBOUZELEFBOEZDLENBOUZxQyxFQUFFLENBQUMsU0FBUyxHQThGakQ7a0JBOUZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi4vLi4vQ29uc3RhbnRfMV8xXCI7XG4vLyBpbXBvcnQgQnVsbGV0IGZyb20gXCIuLi8uLi90b3dlci9CdWxsZXRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBzaG9vdChlbmVteSwgdG93ZXIpIHtcbiAgICAgICAgLy8gdGhpcy5kYXRhID0gdG93ZXIuZGF0YTtcbiAgICAgICAgdGhpcy5zaG9vdEN1c3RvbShlbmVteSwgdG93ZXIpO1xuICAgIH1cbiAgICBzaG9vdEN1c3RvbShlbmVteSwgdG93ZXIpIHtcbiAgICAgICAgLy8gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZW1pdChDb25zdGFudC5FVkVOVC5BUkNIRVJfU0hPT1QpO1xuICAgICAgICAvLyB0aGlzLm5vZGUuekluZGV4ID0gQ29uc3RhbnQuVE9XRVJfRlJPTlRfQlVMTEVUX1pJTkRFWDtcblxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY2MudjMoMCwgOTApKTtcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9ICh0b3dlci5pc0Zyb250KSA/IDQgOiAwO1xuXG4gICAgICAgIGxldCBlbmVteU5vZGUgPSBlbmVteTtcbiAgICAgICAgbGV0IGVQb3NXID0gZW5lbXlOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZW5lbXlOb2RlLnBvc2l0aW9uKTtcbiAgICAgICAgbGV0IGVQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGVQb3NXKTtcblxuICAgICAgICAvLyBtb3ZlXG4gICAgICAgIGxldCB0UG9zID0gY2MudjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcbiAgICAgICAgbGV0IG1pZGRsZVBvc1ggPSAoZVBvcy54IC0gdGhpcy5ub2RlLnBvc2l0aW9uLngpIC8gMjtcblxuICAgICAgICBsZXQgcm90YXRlUGFyYW0gPSAodGhpcy5ub2RlLnBhcmVudC54IDwgZW5lbXlOb2RlLngpID8gMSA6IC0xO1xuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAodGhpcy5ub2RlLnBhcmVudC54IDwgZW5lbXlOb2RlLngpID8gNTAgOiAxMzA7XG5cbiAgICAgICAgdGhpcy5nZXRSb3RhdGVBbmdsZShlbmVteSwgdG93ZXIpO1xuXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc3Bhd24oY2MuYmV6aWVyVG8oMC42LCBbdFBvcywgdFBvcy5hZGQoY2MudjIobWlkZGxlUG9zWCwgdGhpcy5nZXRTaG9vdEhlaWdodChlbmVteSwgdG93ZXIpKSksIGVQb3MuYWRkKGNjLnYzKDAsIDMwKSldKSxcbiAgICAgICAgICAgIGNjLnJvdGF0ZUJ5KDAuNiwgdGhpcy5nZXRSb3RhdGVBbmdsZShlbmVteSwgdG93ZXIpICogcm90YXRlUGFyYW0pXG4gICAgICAgICksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5lbXkuYXR0YWNrZWQodGhpcy5kYXRhLmF0dGFja0RhbWFnZSwgdGhpcy5kYXRhLmF0dGFja1R5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKSkpO1xuICAgIH1cblxuICAgIGdldFNob290SGVpZ2h0KGVuZW15LCB0b3dlcikge1xuICAgICAgICBsZXQgZVBvcyA9IGVuZW15LnBvc2l0aW9uO1xuICAgICAgICBsZXQgdFBvcyA9IHRvd2VyLm5vZGUucG9zaXRpb247XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguYWJzKE1hdGguYWJzKGVQb3MueCkgLSBNYXRoLmFicyh0UG9zLngpKTtcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgMzApIHtcbiAgICAgICAgICAgIHJldHVybiAxMDtcbiAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA8IDUwKSB7XG4gICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPCAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiA2MDtcbiAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA8IDE1MCkge1xuICAgICAgICAgICAgcmV0dXJuIDgwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxMDA7XG4gICAgfVxuXG4gICAgZ2V0Um90YXRlQW5nbGUoZW5lbXksIHRvd2VyKSB7XG4gICAgICAgIGxldCBlUG9zID0gZW5lbXkucG9zaXRpb247XG4gICAgICAgIGxldCB0UG9zID0gdG93ZXIubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5hYnMoTWF0aC5hYnMoZVBvcy54KSAtIE1hdGguYWJzKHRQb3MueCkpO1xuICAgICAgICBpZiAodG93ZXIuaXNGcm9udCkge1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgNTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTQwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA8IDEwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxMzA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlIDwgMTUwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDEyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiA2MDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gNTA7XG4gICAgfVxuXG4gICAgZ2V0RGlzdGFuY2UoZGVzdGluYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uLnN1Yih0aGlzLm5vZGUucG9zaXRpb24pLm1hZygpO1xuICAgIH1cblxuICAgIGdldFN0YXJ0UG9zKHRvd2VyKSB7XG4gICAgICAgIGxldCBhbmltID0gdG93ZXIuYW5pbS5ub2RlO1xuICAgICAgICBsZXQgYW5pbTIgPSB0b3dlci5hbmltMi5ub2RlO1xuICAgICAgICBsZXQgYWRkUG9zID0gY2MudjMoKTtcbiAgICAgICAgaWYgKGFuaW0ubmFtZSA9PSBhbmltMi5uYW1lKSB7XG4gICAgICAgICAgICBhZGRQb3MgPSBjYy52MygtNCwgNTkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkUG9zID0gY2MudjMoMjYsIDY0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZChhZGRQb3MpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=