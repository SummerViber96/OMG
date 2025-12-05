
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/NewDraw/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15b9eCPrpNKMK+sDzHeUqdL', 'GameManager');
// NewDraw/GameManager.ts

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
        _this.level1 = null;
        _this.mainGame = null;
        _this.win = null;
        _this.level1Node = null;
        _this.listLevelNode = [];
        _this.soundBg = null;
        _this.soundWin = null;
        _this.soundFail = null;
        _this.hand = null;
        _this.linkToStore = null;
        _this.level = 1;
        _this.isLocalLevel = null;
        _this.isNextLevel = null;
        // loadPolygonLevel(id: number) {
        //     cc.resources.load(`levels_polygon/level${id}`, cc.JsonAsset, (err, json: cc.JsonAsset) => {
        //         const raw = json.json as number[][];
        //         const points = raw.map(p => cc.v2(p[0], p[1]));
        //         const node = new cc.Node("LevelPoly");
        //         node.parent = this.levelHolder;
        //         const poly = node.addComponent(cc.PolygonCollider);
        //         poly.points = points;
        //         poly.apply();
        //         this.currentPolygon = points;
        //     });
        // }
        _this.levelNode = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        cc.audioEngine.play(this.soundBg, true, 0.5);
        this.loadLevel(this.level);
    };
    NewClass.prototype.loadLevel = function (level) {
        if (this.level == 4) {
            this.linkToStore.active = true;
            var data_1 = this.listLevelNode[level - 1];
            data_1.scale = 0.2;
            data_1.active = true;
            this.isLocalLevel = data_1;
            cc.tween(data_1).to(0.3, { scale: 1.1 }).to(0.05, { scale: 1 }).start();
            return;
        }
        var prefab = this.level1;
        var levelNode = cc.instantiate(prefab);
        this.node.addChild(levelNode);
        levelNode.getComponent("DrawCheck").loadLevel(this.listLevelNode[level - 1]);
        this.levelNode = levelNode;
        var data = this.listLevelNode[level - 1];
        data.scale = 0.2;
        data.active = true;
        this.isLocalLevel = data;
        cc.tween(data).to(0.3, { scale: 1.1 }).to(0.05, { scale: 1 }).start();
        // Gọi hàm load
        // levelNode.getComponent("DrawCheck").loadLevel();
        // levelNode.getComponent("DrawCheck").loadOutlineFromJSON(levelDataJSON);
        // levelNode.getComponent("DrawCheck").loadMatrixJSON(levelDataJSON);
    };
    NewClass.prototype.nextLevel = function () {
        var _this = this;
        var first = this.isLocalLevel;
        this.levelNode.getComponent("DrawCheck").clearGame();
        cc.tween(first).to(0.3, { scale: 0 }).call(function () {
            first.active = false;
        }).start();
        this.level++;
        this.scheduleOnce(function () {
            _this.loadLevel(_this.level);
        }, 0.5);
    };
    NewClass.prototype.winGame = function () {
        var _this = this;
        cc.audioEngine.play(this.soundWin, false, 1);
        this.win.getComponent(cc.Animation).play();
        var first = this.isLocalLevel;
        this.levelNode.getComponent("DrawCheck").clearGame();
        cc.tween(first).to(0.3, { scale: 0 }).call(function () {
            first.active = false;
        }).start();
        this.level++;
        this.scheduleOnce(function () {
            _this.loadLevel(_this.level);
        }, 0.5);
    };
    NewClass.prototype.fail = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "level1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mainGame", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "win", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "level1Node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listLevelNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundFail", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTmV3RHJhd1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1R0M7UUFwR0csWUFBTSxHQUFjLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsbUJBQWEsR0FBYyxFQUFFLENBQUE7UUFFN0IsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixXQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ1Qsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsaUJBQVcsR0FBRyxJQUFJLENBQUE7UUFNbEIsaUNBQWlDO1FBQ2pDLGtHQUFrRztRQUNsRywrQ0FBK0M7UUFDL0MsMERBQTBEO1FBRTFELGlEQUFpRDtRQUNqRCwwQ0FBMEM7UUFFMUMsOERBQThEO1FBQzlELGdDQUFnQztRQUNoQyx3QkFBd0I7UUFFeEIsd0NBQXdDO1FBQ3hDLFVBQVU7UUFDVixJQUFJO1FBQ0osZUFBUyxHQUFHLElBQUksQ0FBQTs7UUF5RGhCLGlCQUFpQjtJQUNyQixDQUFDO0lBOUVHLHdCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FB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O0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFyQlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVHNUI7SUFBRCxlQUFDO0NBdkdELEFBdUdDLENBdkdxQyxFQUFFLENBQUMsU0FBUyxHQXVHakQ7a0JBdkdvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsZXZlbDE6IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFpbkdhbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3aW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsZXZlbDFOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0TGV2ZWxOb2RlOiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRGYWlsOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGxcclxuICAgIGxldmVsID0gMVxyXG4gICAgaXNMb2NhbExldmVsID0gbnVsbDtcclxuICAgIGlzTmV4dExldmVsID0gbnVsbFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuNSlcclxuICAgICAgICB0aGlzLmxvYWRMZXZlbCh0aGlzLmxldmVsKVxyXG5cclxuICAgIH1cclxuICAgIC8vIGxvYWRQb2x5Z29uTGV2ZWwoaWQ6IG51bWJlcikge1xyXG4gICAgLy8gICAgIGNjLnJlc291cmNlcy5sb2FkKGBsZXZlbHNfcG9seWdvbi9sZXZlbCR7aWR9YCwgY2MuSnNvbkFzc2V0LCAoZXJyLCBqc29uOiBjYy5Kc29uQXNzZXQpID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmF3ID0ganNvbi5qc29uIGFzIG51bWJlcltdW107XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHBvaW50cyA9IHJhdy5tYXAocCA9PiBjYy52MihwWzBdLCBwWzFdKSk7XHJcblxyXG4gICAgLy8gICAgICAgICBjb25zdCBub2RlID0gbmV3IGNjLk5vZGUoXCJMZXZlbFBvbHlcIik7XHJcbiAgICAvLyAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5sZXZlbEhvbGRlcjtcclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHBvbHkgPSBub2RlLmFkZENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgLy8gICAgICAgICBwb2x5LnBvaW50cyA9IHBvaW50cztcclxuICAgIC8vICAgICAgICAgcG9seS5hcHBseSgpO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50UG9seWdvbiA9IHBvaW50cztcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIGxldmVsTm9kZSA9IG51bGxcclxuICAgIGxvYWRMZXZlbChsZXZlbCkge1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxpc3RMZXZlbE5vZGVbbGV2ZWwgLSAxXTtcclxuICAgICAgICAgICAgZGF0YS5zY2FsZSA9IDAuMlxyXG4gICAgICAgICAgICBkYXRhLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbExldmVsID0gZGF0YVxyXG4gICAgICAgICAgICBjYy50d2VlbihkYXRhKS50bygwLjMsIHsgc2NhbGU6IDEuMSB9KS50bygwLjA1LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcmVmYWIgPSB0aGlzLmxldmVsMVxyXG4gICAgICAgIGNvbnN0IGxldmVsTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTm9kZSk7XHJcbiAgICAgICAgbGV2ZWxOb2RlLmdldENvbXBvbmVudChcIkRyYXdDaGVja1wiKS5sb2FkTGV2ZWwodGhpcy5saXN0TGV2ZWxOb2RlW2xldmVsIC0gMV0pXHJcbiAgICAgICAgdGhpcy5sZXZlbE5vZGUgPSBsZXZlbE5vZGVcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMubGlzdExldmVsTm9kZVtsZXZlbCAtIDFdO1xyXG4gICAgICAgIGRhdGEuc2NhbGUgPSAwLjJcclxuICAgICAgICBkYXRhLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0xvY2FsTGV2ZWwgPSBkYXRhXHJcbiAgICAgICAgY2MudHdlZW4oZGF0YSkudG8oMC4zLCB7IHNjYWxlOiAxLjEgfSkudG8oMC4wNSwgeyBzY2FsZTogMSB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gR+G7jWkgaMOgbSBsb2FkXHJcbiAgICAgICAgLy8gbGV2ZWxOb2RlLmdldENvbXBvbmVudChcIkRyYXdDaGVja1wiKS5sb2FkTGV2ZWwoKTtcclxuICAgICAgICAvLyBsZXZlbE5vZGUuZ2V0Q29tcG9uZW50KFwiRHJhd0NoZWNrXCIpLmxvYWRPdXRsaW5lRnJvbUpTT04obGV2ZWxEYXRhSlNPTik7XHJcbiAgICAgICAgLy8gbGV2ZWxOb2RlLmdldENvbXBvbmVudChcIkRyYXdDaGVja1wiKS5sb2FkTWF0cml4SlNPTihsZXZlbERhdGFKU09OKTtcclxuICAgIH1cclxuICAgIG5leHRMZXZlbCgpIHtcclxuICAgICAgICBsZXQgZmlyc3QgPSB0aGlzLmlzTG9jYWxMZXZlbDtcclxuICAgICAgICB0aGlzLmxldmVsTm9kZS5nZXRDb21wb25lbnQoXCJEcmF3Q2hlY2tcIikuY2xlYXJHYW1lKClcclxuICAgICAgICBjYy50d2VlbihmaXJzdCkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJzdC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmxldmVsKytcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZExldmVsKHRoaXMubGV2ZWwpXHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuXHJcbiAgICB9XHJcbiAgICB3aW5HYW1lKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy53aW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgbGV0IGZpcnN0ID0gdGhpcy5pc0xvY2FsTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5sZXZlbE5vZGUuZ2V0Q29tcG9uZW50KFwiRHJhd0NoZWNrXCIpLmNsZWFyR2FtZSgpXHJcbiAgICAgICAgY2MudHdlZW4oZmlyc3QpLnRvKDAuMywgeyBzY2FsZTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgZmlyc3QuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5sZXZlbCsrXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMZXZlbCh0aGlzLmxldmVsKVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgIH1cclxuICAgIGZhaWwoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=