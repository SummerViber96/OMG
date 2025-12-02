
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/DrawLine/LevelManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRHJhd0xpbmVcXExldmVsTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXNEQztRQW5ERyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZ0JBQVUsR0FBRyxDQUFDLENBQUM7O0lBMENuQixDQUFDO0lBeENHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLEVBQVU7UUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUVELGdDQUFnQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEQsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFlLEVBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsR0FBVSxFQUFFLFdBQTJCO1lBQzNGLElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzVDLE9BQU87YUFDVjtZQUVELE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxNQUFpQjtRQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV4RCxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFsREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ087SUFUUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBc0QvQjtJQUFELGtCQUFDO0NBdERELEFBc0RDLENBdER3QyxFQUFFLENBQUMsU0FBUyxHQXNEcEQ7a0JBdERvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbGV2ZWxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsZXZlbEhvbGRlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkcmF3Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgY3VycmVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBsZXZlbEluZGV4ID0gMTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTGV2ZWwodGhpcy5sZXZlbEluZGV4KTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3Tm9kZS5vbihcIkRSQVdfRU5EXCIsIHRoaXMub25EcmF3RW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGV2ZWwoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFThuqFvIGluc3RhbmNlIGPhu6dhIHByZWZhYiBsZXZlbFxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxIb2xkZXIuYWRkQ2hpbGQodGhpcy5jdXJyZW50KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5jdXJyZW50LmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cclxuICAgICAgICAvLyBMb2FkIMSRw7puZyBraeG7g3UgU3ByaXRlRnJhbWVcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChgbGV2ZWxzL2xldmVsJHtpZH1gLCBjYy5TcHJpdGVGcmFtZSwgKGVycjogRXJyb3IsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKdjCBM4buXaSBsb2FkIFNwcml0ZUZyYW1lOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdFbmQocG9pbnRzOiBjYy5WZWMyW10pIHtcclxuICAgICAgICBsZXQgb3V0bGluZSA9IHRoaXMuY3VycmVudC5nZXRDb21wb25lbnQoXCJMZXZlbE91dGxpbmVcIik7XHJcblxyXG4gICAgICAgIGlmIChvdXRsaW5lLmlzRHJhd0NvcnJlY3QocG9pbnRzKSkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCLinJQgTGV2ZWwgSG/DoG4gVGjDoG5oXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsSW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5sb2FkTGV2ZWwodGhpcy5sZXZlbEluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCLinYwgU2FpIG91dGxpbmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19