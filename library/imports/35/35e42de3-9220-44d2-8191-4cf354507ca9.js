"use strict";
cc._RF.push(module, '35e423jkiBE0oGRTPNUUHyp', 'LevelManager');
// DrawLine/LevelManager.ts

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
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelPrefab = null;
        _this.levelHolder = null;
        _this.drawNode = null;
        _this.current = null;
        _this.levelIndex = 1;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        this.loadLevel(this.levelIndex);
        this.drawNode.on("DRAW_END", this.onDrawEnd, this);
    };
    GameManager.prototype.loadLevel = function (id) {
        if (this.current) {
            this.current.destroy();
            this.current = null;
        }
        // Tạo instance của prefab level
        this.current = cc.instantiate(this.levelPrefab);
        this.levelHolder.addChild(this.current);
        var sprite = this.current.getComponent(cc.Sprite);
        // Load đúng kiểu SpriteFrame
        cc.resources.load("levels/level" + id, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                console.log("❌ Lỗi load SpriteFrame:", err);
                return;
            }
            sprite.spriteFrame = spriteFrame;
        });
    };
    GameManager.prototype.onDrawEnd = function (points) {
        var outline = this.current.getComponent("LevelOutline");
        if (outline.isDrawCorrect(points)) {
            cc.log("✔ Level Hoàn Thành");
            this.levelIndex++;
            this.loadLevel(this.levelIndex);
        }
        else {
            cc.log("❌ Sai outline");
        }
    };
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "levelPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "levelHolder", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "drawNode", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();