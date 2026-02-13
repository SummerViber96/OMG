
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/CakeAssembly/script/barTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12d9aIcZiFOIKcwKRQcVGPF', 'barTime');
// CakeAssembly/script/barTime.ts

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
        _this.lbTime = null;
        _this.gamePlay = null;
        _this.clockSound = null;
        _this.warning = null;
        _this.isTime = 30;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.countDown = function () {
        var _this = this;
        this.schedule(function () {
            _this.isTime--;
            _this.lbTime.string = "00:" + _this.isTime;
            if (_this.isTime <= 10) {
                if (_this.gamePlay.isEndGame == false) {
                    cc.audioEngine.play(_this.clockSound, false, 1);
                    _this.warning.active = true;
                }
            }
            _this.lbTime.getComponent(cc.Animation).play();
            if (_this.isTime == 0) {
                _this.warning.active = false;
                _this.gamePlay.onEndGame(false);
            }
        }, 1, 29);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbTime", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "clockSound", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "warning", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ2FrZUFzc2VtYmx5XFxzY3JpcHRcXGJhclRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQ0M7UUE5QkcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUN4QixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixhQUFPLEdBQVksSUFBSSxDQUFBO1FBQ3ZCLFlBQU0sR0FBRyxFQUFFLENBQUM7O1FBdUJaLGlCQUFpQjtJQUNyQixDQUFDO0lBdkJHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFdEUsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pDLElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7Z0JBQ25CLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFO29CQUNsQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtvQkFDOUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2lCQUM3QjthQUVKO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzdDLElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDM0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDakM7UUFDTCxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2IsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQVJOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQzVCO0lBQUQsZUFBQztDQWpDRCxBQWlDQyxDQWpDcUMsRUFBRSxDQUFDLFNBQVMsR0FpQ2pEO2tCQWpDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlRpbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIGdhbWVQbGF5ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBjbG9ja1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBpc1RpbWUgPSAzMDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIik7XHJcblxyXG4gICAgfVxyXG4gICAgY291bnREb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGltZS0tO1xyXG4gICAgICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgPSBcIjAwOlwiICsgdGhpcy5pc1RpbWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGltZSA8PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkuaXNFbmRHYW1lID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmNsb2NrU291bmQsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGJUaW1lLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RpbWUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lm9uRW5kR2FtZShmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEsIDI5KVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=