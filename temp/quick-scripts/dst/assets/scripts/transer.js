
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdHJhbnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNEQztRQXBERyxVQUFJLEdBQWdCLElBQUksQ0FBQTtRQUV4QixTQUFHLEdBQVksSUFBSSxDQUFBOztRQWlEbkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFoREcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCx3QkFBSyxHQUFMO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDNUQsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ2hCLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFFNUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDZCxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzNE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bnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFnOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuICAgIG1vdmUxKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIGZhbHNlKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygtOSwgLTIxOSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNXb29kKClcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgZmFsc2UpXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuIFxyXG4gICAgdHJhbnNXb29kKCkge1xyXG4gICAgICAgIGxldCBnYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIllDXzdcIilcclxuICAgICAgICBsZXQgY3VzID0gZ2FtZVBsYXkuYXJyQ3VzW2dhbWVQbGF5LmFyckN1cy5sZW5ndGgtMV1cclxuICAgICAgICBsZXQgY291bnQgPSAwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuYmFnLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmJhZy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGNoaWxkLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLmJhZy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgcG9zID0gY3VzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IGN1cztcclxuICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS5kZWxheSgwLjA1ICogY291bnQpLmJlemllclRvKDAuMywgY2MudjIocG9zLngsIHBvcy55KSwgY2MudjIocG9zLnggLyAyLCBwb3MueSArIDIwMCksIGNjLnYyKDAsIDUwKSkuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlMigpXHJcbiAgICAgICAgICAgIGdhbWVQbGF5Lm1vdmVCYWNrKClcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICB9XHJcbiAgICBtb3ZlMigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG5cclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCBmYWxzZSlcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKC0xMjcuOCwgLTEwMikgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudHJhbnNXb29kKClcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJZQ183XCIpLmlzTW92ZUNoYXIgPSBmYWxzZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19