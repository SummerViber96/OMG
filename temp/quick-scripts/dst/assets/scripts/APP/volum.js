
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/volum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c158f06hpVLgqIahEbCyyRx', 'volum');
// scripts/APP/volum.ts

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
        _this.progressBar = null;
        _this.handle = null;
        _this.musicScene = null;
        // @property(cc.AudioSource)
        // audioSources: cc.AudioSource = null;
        _this.maxWidth = 200;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onDrag, this);
    };
    NewClass.prototype.onDrag = function (event) {
        var pos = this.progressBar.node.convertToNodeSpaceAR(event.getLocation());
        var x = cc.misc.clampf(pos.x / this.maxWidth + 0.5, 0, 1);
        this.progressBar.progress = x;
        this.updateHandlePos();
        this.setVolume(x);
    };
    NewClass.prototype.updateHandlePos = function () {
        var width = this.maxWidth * (this.progressBar.progress - 0.5);
        this.handle.x = width;
    };
    NewClass.prototype.setVolume = function (value) {
        this.musicScene.getComponent("mainMusic").setVolume(value);
        // cc.audioEngine.setVolume()
        // if (this.audioSource) {
        //     this.audioSource.volume = value;
        // }
    };
    __decorate([
        property(cc.ProgressBar)
    ], NewClass.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handle", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "musicScene", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "maxWidth", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FQUC92b2x1bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXFDQztRQW5DRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUMxQiw0QkFBNEI7UUFDNUIsdUNBQXVDO1FBRXZDLGNBQVEsR0FBRyxHQUFHLENBQUM7O0lBMkJuQixDQUFDO0lBMUJHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEtBQUs7UUFDUixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELGtDQUFlLEdBQWY7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxRCw2QkFBNkI7UUFDN0IsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxJQUFJO0lBQ1IsQ0FBQztJQWpDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNVO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUkxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzhDQUNOO0lBVkUsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFDNUI7SUFBRCxlQUFDO0NBckNELEFBcUNDLENBckNxQyxFQUFFLENBQUMsU0FBUyxHQXFDakQ7a0JBckNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kbGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG11c2ljU2NlbmU6IGNjLk5vZGUgPSBudWxsXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIC8vIGF1ZGlvU291cmNlczogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIG1heFdpZHRoID0gMjAwO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25EcmFnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uRHJhZywgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EcmFnKGV2ZW50KSB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnByb2dyZXNzQmFyLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIGxldCB4ID0gY2MubWlzYy5jbGFtcGYocG9zLnggLyB0aGlzLm1heFdpZHRoICsgMC41LCAwLCAxKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHg7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlUG9zKCk7XG4gICAgICAgIHRoaXMuc2V0Vm9sdW1lKHgpO1xuICAgIH1cblxuICAgIHVwZGF0ZUhhbmRsZVBvcygpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5tYXhXaWR0aCAqICh0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzIC0gMC41KTtcbiAgICAgICAgdGhpcy5oYW5kbGUueCA9IHdpZHRoO1xuICAgIH1cblxuICAgIHNldFZvbHVtZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm11c2ljU2NlbmUuZ2V0Q29tcG9uZW50KFwibWFpbk11c2ljXCIpLnNldFZvbHVtZSh2YWx1ZSlcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKClcbiAgICAgICAgLy8gaWYgKHRoaXMuYXVkaW9Tb3VyY2UpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYXVkaW9Tb3VyY2Uudm9sdW1lID0gdmFsdWU7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbn0iXX0=