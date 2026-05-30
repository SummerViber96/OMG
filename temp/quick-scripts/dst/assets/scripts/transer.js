
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/transer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b905o1gD5LX64qqugnDXV+', 'transer');
// scripts/transer.ts

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
        _this.anim = null;
        _this.bag = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.move1 = function () {
        var _this = this;
        this.node.scaleX = -1;
        this.anim.setAnimation(0, "Walk", false);
        cc.tween(this.node).to(0.8, { position: cc.v3(-9, -219) }).call(function () {
            _this.transWood();
            _this.anim.setAnimation(0, "Idle", false);
        }).start();
    };
    NewClass.prototype.transWood = function () {
        var _this = this;
        var gamePlay = cc.Canvas.instance.node.getComponent("YC_7");
        var cus = gamePlay.arrCus[gamePlay.arrCus.length - 1];
        var count = 0;
        var _loop_1 = function (i) {
            var child = this_1.bag.children[i];
            var pos = child.position;
            pos = this_1.bag.convertToWorldSpaceAR(pos);
            pos = cus.convertToNodeSpaceAR(pos);
            child.parent = cus;
            child.position = pos;
            count++;
            cc.tween(child).delay(0.05 * count).bezierTo(0.3, cc.v2(pos.x, pos.y), cc.v2(pos.x / 2, pos.y + 200), cc.v2(0, 50)).call(function () {
                child.destroy();
            }).start();
        };
        var this_1 = this;
        for (var i = this.bag.childrenCount - 1; i >= 0; i--) {
            _loop_1(i);
        }
        this.scheduleOnce(function () {
            _this.move2();
            gamePlay.moveBack();
        }, 0.5);
    };
    NewClass.prototype.move2 = function () {
        var _this = this;
        this.node.scaleX = 1;
        this.anim.setAnimation(0, "Walk", false);
        cc.tween(this.node).to(0.8, { position: cc.v3(-127.8, -102) }).call(function () {
            // this.transWood()
            _this.anim.setAnimation(0, "Idle", false);
            cc.Canvas.instance.node.getComponent("YC_7").isMoveChar = false;
        }).start();
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bag", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RyYW5zZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzREM7UUFwREcsVUFBSSxHQUFnQixJQUFJLENBQUE7UUFFeEIsU0FBRyxHQUFZLElBQUksQ0FBQTs7UUFpRG5CLGlCQUFpQjtJQUNyQixDQUFDO0lBaERHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUN4QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzVELEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUNoQixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBRTVDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFBQSxpQkFxQkM7UUFwQkcsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMzRCxJ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ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmFnOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG4gICAgbW92ZTEoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCBmYWxzZSlcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKC05LCAtMjE5KSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNXb29kKClcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIGZhbHNlKVxuXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9XG4gXG4gICAgdHJhbnNXb29kKCkge1xuICAgICAgICBsZXQgZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJZQ183XCIpXG4gICAgICAgIGxldCBjdXMgPSBnYW1lUGxheS5hcnJDdXNbZ2FtZVBsYXkuYXJyQ3VzLmxlbmd0aC0xXVxuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmJhZy5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYmFnLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IHBvcyA9IGNoaWxkLnBvc2l0aW9uO1xuICAgICAgICAgICAgcG9zID0gdGhpcy5iYWcuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICBwb3MgPSBjdXMuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IGN1cztcbiAgICAgICAgICAgIGNoaWxkLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS5kZWxheSgwLjA1ICogY291bnQpLmJlemllclRvKDAuMywgY2MudjIocG9zLngsIHBvcy55KSwgY2MudjIocG9zLnggLyAyLCBwb3MueSArIDIwMCksIGNjLnYyKDAsIDUwKSkuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlMigpXG4gICAgICAgICAgICBnYW1lUGxheS5tb3ZlQmFjaygpXG4gICAgICAgIH0sIDAuNSlcbiAgICB9XG4gICAgbW92ZTIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXG5cbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgZmFsc2UpXG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKC0xMjcuOCwgLTEwMikgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLnRyYW5zV29vZCgpXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCBmYWxzZSlcblxuICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiWUNfN1wiKS5pc01vdmVDaGFyID0gZmFsc2VcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19