
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTswQ0FDYztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUM7MkRBQ29CO0lBUmxDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1RTVCO0lBQUQsZUFBQztDQXZFRCxBQXVFQyxDQXZFcUMsRUFBRSxDQUFDLFNBQVMsR0F1RWpEO2tCQXZFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuICAgIEBwcm9wZXJ0eShjYy5Ta2VsZXRvbkFuaW1hdGlvbilcbiAgICBib2R5U2tlbGV0b25BbmltYXRpb246IGNjLlNrZWxldG9uQW5pbWF0aW9uID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dCA9PSBcImN1czFcIikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlMigpXG5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50ZXh0ID09IFwiY3VzMlwiKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUzKClcblxuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmUxKCkge1xuICAgICAgICBsZXQgbG9jYWxwb3MgPSBjYy52MygtMTU4LjkyNSwgLTQ3Ni4yOTMsIC0zMjMuMTk3KVxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICBjYy50d2VlbigpLnNldCh7IHBvc2l0aW9uOiBsb2NhbHBvcyB9KS50bygyLCB7IHBvc2l0aW9uOiBjYy52MygxODIuMDk1LCAtMzA3LjU3OCwgLTMyMy4xOTcpIH0pLnNldCh7XG4gICAgICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGNjLnYzKDM2LjE3LCAtMTguODMxLCAtMTAuOTUyKVxuICAgICAgICAgICAgfSkudG8oMiwgeyBwb3NpdGlvbjogbG9jYWxwb3MgfSlcbiAgICAgICAgKS5zdGFydCgpXG4gICAgfVxuICAgIG1vdmUyKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICBjYy50d2VlbigpLnNldCh7IHBvc2l0aW9uOiBjYy52MygyMTIuMzY0LCAtMzcuMTc2LCAtMjIuMjU1KSwgZXVsZXJBbmdsZXM6IGNjLnYzKC00NS43MTksIDE1MC45NzMsIDM0LjY4MSkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlKClcbiAgICAgICAgICAgIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZSgpXG4gICAgICAgICAgICB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoNDguMzIsIDI0LjE4NiwgMzAuMjk4KSB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52Myg3MSwgNTEuOTIyLCAtNjYuMDkzKSB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTQ1LjcxOSwgMTUwLjk3MywgMzQuNjgxKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGUoKVxuICAgICAgICAgICAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKClcbiAgICAgICAgICAgIH0pLnNldCh7XG4gICAgICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGNjLnYzKC00OC45OTcsIC0xNTcuMTgyLCAtMjguOTQ3KVxuICAgICAgICAgICAgfSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMjEyLjM2NCwgLTM3LjE3NiwgLTIyLjI1NSkgfSlcbiAgICAgICAgKS5zdGFydCgpXG4gICAgfVxuICAgIG1vdmUzKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICBjYy50d2VlbigpLnNldCh7IHBvc2l0aW9uOiBjYy52MygtMzcyLjAxNCwgLTE2Ni4wNzksIC01MjIuNDQ3KSwgZXVsZXJBbmdsZXM6IGNjLnYzKC0zNi41ODMsIDE0MS43NTUsIDE4LjM5MSkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlKClcbiAgICAgICAgICAgIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZSgpXG4gICAgICAgICAgICB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTM2LjU4MywgMTQxLjc1NSwgMTguMzkxKSB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMjc2LjA0OSwgLTEwNC40NzIsIC01MjIuNDQ3KSB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoLTQ1LjcxOSwgMTUwLjk3MywgMzQuNjgxKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGUoKVxuICAgICAgICAgICAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKClcbiAgICAgICAgICAgIH0pLnNldCh7XG4gICAgICAgICAgICAgICAgZXVsZXJBbmdsZXM6IGNjLnYzKDM4LjE3OSwgLTMyLjU2NywgLTE0LjIyMylcbiAgICAgICAgICAgIH0pLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0zNzIuMDE0LCAtMTY2LjA3OSwgLTUyMi40NDcpIH0pXG4gICAgICAgICkuc3RhcnQoKVxuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbkFuaW1hdGlvbi5wbGF5KCdXYWxrJyk7XG5cbiAgICB9XG4gICAgaWRsZSgpIHtcbiAgICAgICAgdGhpcy5ib2R5U2tlbGV0b25BbmltYXRpb24ucGxheSgnSWRsZSAxJyk7XG5cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==