"use strict";
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