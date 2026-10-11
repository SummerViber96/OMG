
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/cus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e525d7/c0xMU6paoZdPdViG', 'cus');
// scripts/cus.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.bodySkeletonAnimation = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        if (this.text == "cus1") {
            this.move2();
        }
        if (this.text == "cus2") {
            this.move3();
        }
    };
    NewClass.prototype.move1 = function () {
        var localpos = cc.v3(-158.925, -476.293, -323.197);
        cc.tween(this.node).repeatForever(cc.tween().set({ position: localpos }).to(2, { position: cc.v3(182.095, -307.578, -323.197) }).set({
            eulerAngles: cc.v3(36.17, -18.831, -10.952)
        }).to(2, { position: localpos })).start();
    };
    NewClass.prototype.move2 = function () {
        var _this = this;
        cc.tween(this.node).repeatForever(cc.tween().set({ position: cc.v3(212.364, -37.176, -22.255), eulerAngles: cc.v3(-45.719, 150.973, 34.681) }).call(function () {
            _this.idle();
        }).delay(1).call(function () {
            _this.move();
        }).set({ eulerAngles: cc.v3(48.32, 24.186, 30.298) }).to(1, { position: cc.v3(71, 51.922, -66.093) }).set({ eulerAngles: cc.v3(-45.719, 150.973, 34.681) }).call(function () {
            _this.idle();
        }).delay(1).call(function () {
            _this.move();
        }).set({
            eulerAngles: cc.v3(-48.997, -157.182, -28.947)
        }).to(1, { position: cc.v3(212.364, -37.176, -22.255) })).start();
    };
    NewClass.prototype.move3 = function () {
        var _this = this;
        cc.tween(this.node).repeatForever(cc.tween().set({ position: cc.v3(-372.014, -166.079, -522.447), eulerAngles: cc.v3(-36.583, 141.755, 18.391) }).call(function () {
            _this.idle();
        }).delay(1).call(function () {
            _this.move();
        }).set({ eulerAngles: cc.v3(-36.583, 141.755, 18.391) }).to(1, { position: cc.v3(-276.049, -104.472, -522.447) }).set({ eulerAngles: cc.v3(-45.719, 150.973, 34.681) }).call(function () {
            _this.idle();
        }).delay(1).call(function () {
            _this.move();
        }).set({
            eulerAngles: cc.v3(38.179, -32.567, -14.223)
        }).to(1, { position: cc.v3(-372.014, -166.079, -522.447) })).start();
    };
    NewClass.prototype.move = function () {
        this.bodySkeletonAnimation.play('Walk');
    };
    NewClass.prototype.idle = function () {
        this.bodySkeletonAnimation.play('Idle 1');
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.SkeletonAnimation)
    ], NewClass.prototype, "bodySkeletonAnimation", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTswQ0FDYztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUM7MkRBQ29CO0lBUmxDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1RTVCO0lBQUQsZUFBQztDQXZFRCxBQXVFQyxDQXZFcUMsRUFBRSxDQUFDLFNBQVMsR0F1RWpEO2tCQXZFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcbiAgICBAcHJvcGVydHkoY2MuU2tlbGV0b25BbmltYXRpb24pXHJcbiAgICBib2R5U2tlbGV0b25BbmltYXRpb246IGNjLlNrZWxldG9uQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0ID09IFwiY3VzMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZTIoKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dCA9PSBcImN1czJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUzKClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZTEoKSB7XHJcbiAgICAgICAgbGV0IGxvY2FscG9zID0gY2MudjMoLTE1OC45MjUsIC00NzYuMjkzLCAtMzIzLjE5NylcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuc2V0KHsgcG9zaXRpb246IGxvY2FscG9zIH0pLnRvKDIsIHsgcG9zaXRpb246IGNjLnYzKDE4Mi4wOTUsIC0zMDcuNTc4LCAtMzIzLjE5NykgfSkuc2V0KHtcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiBjYy52MygzNi4xNywgLTE4LjgzMSwgLTEwLjk1MilcclxuICAgICAgICAgICAgfSkudG8oMiwgeyBwb3NpdGlvbjogbG9jYWxwb3MgfSlcclxuICAgICAgICApLnN0YXJ0KClcclxuICAgIH1cclxuICAgIG1vdmUyKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgY2MudHdlZW4oKS5zZXQoeyBwb3NpdGlvbjogY2MudjMoMjEyLjM2NCwgLTM3LjE3NiwgLTIyLjI1NSksIGV1bGVyQW5nbGVzOiBjYy52MygtNDUuNzE5LCAxNTAuOTczLCAzNC42ODEpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlKClcclxuICAgICAgICAgICAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoKVxyXG4gICAgICAgICAgICB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoNDguMzIsIDI0LjE4NiwgMzAuMjk4KSB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52Myg3MSwgNTEuOTIyLCAtNjYuMDkzKSB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTQ1LjcxOSwgMTUwLjk3MywgMzQuNjgxKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXHJcbiAgICAgICAgICAgIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKClcclxuICAgICAgICAgICAgfSkuc2V0KHtcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiBjYy52MygtNDguOTk3LCAtMTU3LjE4MiwgLTI4Ljk0NylcclxuICAgICAgICAgICAgfSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMjEyLjM2NCwgLTM3LjE3NiwgLTIyLjI1NSkgfSlcclxuICAgICAgICApLnN0YXJ0KClcclxuICAgIH1cclxuICAgIG1vdmUzKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgY2MudHdlZW4oKS5zZXQoeyBwb3NpdGlvbjogY2MudjMoLTM3Mi4wMTQsIC0xNjYuMDc5LCAtNTIyLjQ0NyksIGV1bGVyQW5nbGVzOiBjYy52MygtMzYuNTgzLCAxNDEuNzU1LCAxOC4zOTEpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlKClcclxuICAgICAgICAgICAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoKVxyXG4gICAgICAgICAgICB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTM2LjU4MywgMTQxLjc1NSwgMTguMzkxKSB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMjc2LjA0OSwgLTEwNC40NzIsIC01MjIuNDQ3KSB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTQ1LjcxOSwgMTUwLjk3MywgMzQuNjgxKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXHJcbiAgICAgICAgICAgIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKClcclxuICAgICAgICAgICAgfSkuc2V0KHtcclxuICAgICAgICAgICAgICAgIGV1bGVyQW5nbGVzOiBjYy52MygzOC4xNzksIC0zMi41NjcsIC0xNC4yMjMpXHJcbiAgICAgICAgICAgIH0pLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0zNzIuMDE0LCAtMTY2LjA3OSwgLTUyMi40NDcpIH0pXHJcbiAgICAgICAgKS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLnBsYXkoJ1dhbGsnKTtcclxuXHJcbiAgICB9XHJcbiAgICBpZGxlKCkge1xyXG4gICAgICAgIHRoaXMuYm9keVNrZWxldG9uQW5pbWF0aW9uLnBsYXkoJ0lkbGUgMScpO1xyXG5cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19