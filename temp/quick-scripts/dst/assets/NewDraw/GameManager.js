
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
        // @property(cc.Node)
        // hand:cc.Node=null
        _this.level = 1;
        _this.isLocalLevel = null;
        _this.isNextLevel = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
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
        _this.isFirst = false;
        _this.isvertical = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.5);
        this.loadLevel(this.level);
    };
    NewClass.prototype.loadLevel = function (level) {
        var _this = this;
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
        this.scheduleOnce(function () {
            if (_this.isFirst == false) {
                _this.hand.active = true;
                _this.isFirst = true;
            }
        }, 0.5);
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
    NewClass.prototype.update = function (dt) {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                if (cc.winSize.height / cc.winSize.width < 1.35) {
                    canvas.fitHeight = true;
                }
            }
        }
        else {
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTmV3RHJhd1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4SUM7UUEzSUcsWUFBTSxHQUFjLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsbUJBQWEsR0FBYyxFQUFFLENBQUE7UUFFN0IsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLFdBQUssR0FBRyxDQUFDLENBQUE7UUFDVCxrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixpQkFBVyxHQUFHLElBQUksQ0FBQTtRQUNkLGNBQVEsR0FBRyw4QkFBOEIsQ0FBQTtRQVU3QyxpQ0FBaUM7UUFDakMsa0dBQWtHO1FBQ2xHLCtDQUErQztRQUMvQywwREFBMEQ7UUFFMUQsaURBQWlEO1FBQ2pELDBDQUEwQztRQUUxQyw4REFBOEQ7UUFDOUQsZ0NBQWdDO1FBQ2hDLHdCQUF3QjtRQUV4Qix3Q0FBd0M7UUFDeEMsVUFBVTtRQUNWLElBQUk7UUFDSixlQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLGFBQU8sR0FBRyxLQUFLLENBQUE7UUErRGYsZ0JBQVUsR0FBRyxLQUFLLENBQUE7O0lBMEJ0QixDQUFDO0lBakhHLHdCQUFLLEdBQUw7UUFDTSxJQUFJLElBQUksQ0FBQyxR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QUFFLENBQUMsU0FBUyxDQUFDOytDQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQXJCVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOEk1QjtJQUFELGVBQUM7Q0E5SUQsQUE4SUMsQ0E5SXFDLEVBQUUsQ0FBQyxTQUFTLEdBOElqRDtrQkE5SW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxldmVsMTogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluR2FtZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdpbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxldmVsMU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RMZXZlbE5vZGU6IGNjLk5vZGVbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEZhaWw6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBoYW5kOmNjLk5vZGU9bnVsbFxyXG4gICAgbGV2ZWwgPSAxXHJcbiAgICBpc0xvY2FsTGV2ZWwgPSBudWxsO1xyXG4gICAgaXNOZXh0TGV2ZWwgPSBudWxsXHJcbiAgICAgICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG4gICAgICAgIHRoaXMubG9hZExldmVsKHRoaXMubGV2ZWwpXHJcblxyXG4gICAgfVxyXG4gICAgLy8gbG9hZFBvbHlnb25MZXZlbChpZDogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgY2MucmVzb3VyY2VzLmxvYWQoYGxldmVsc19wb2x5Z29uL2xldmVsJHtpZH1gLCBjYy5Kc29uQXNzZXQsIChlcnIsIGpzb246IGNjLkpzb25Bc3NldCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zdCByYXcgPSBqc29uLmpzb24gYXMgbnVtYmVyW11bXTtcclxuICAgIC8vICAgICAgICAgY29uc3QgcG9pbnRzID0gcmF3Lm1hcChwID0+IGNjLnYyKHBbMF0sIHBbMV0pKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZShcIkxldmVsUG9seVwiKTtcclxuICAgIC8vICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmxldmVsSG9sZGVyO1xyXG5cclxuICAgIC8vICAgICAgICAgY29uc3QgcG9seSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XHJcbiAgICAvLyAgICAgICAgIHBvbHkucG9pbnRzID0gcG9pbnRzO1xyXG4gICAgLy8gICAgICAgICBwb2x5LmFwcGx5KCk7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRQb2x5Z29uID0gcG9pbnRzO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgbGV2ZWxOb2RlID0gbnVsbFxyXG4gICAgaXNGaXJzdCA9IGZhbHNlXHJcbiAgICBsb2FkTGV2ZWwobGV2ZWwpIHtcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxldmVsID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5saXN0TGV2ZWxOb2RlW2xldmVsIC0gMV07XHJcbiAgICAgICAgICAgIGRhdGEuc2NhbGUgPSAwLjJcclxuICAgICAgICAgICAgZGF0YS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxMZXZlbCA9IGRhdGFcclxuICAgICAgICAgICAgY2MudHdlZW4oZGF0YSkudG8oMC4zLCB7IHNjYWxlOiAxLjEgfSkudG8oMC4wNSwgeyBzY2FsZTogMSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJlZmFiID0gdGhpcy5sZXZlbDFcclxuICAgICAgICBjb25zdCBsZXZlbE5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbE5vZGUpO1xyXG4gICAgICAgIGxldmVsTm9kZS5nZXRDb21wb25lbnQoXCJEcmF3Q2hlY2tcIikubG9hZExldmVsKHRoaXMubGlzdExldmVsTm9kZVtsZXZlbCAtIDFdKVxyXG4gICAgICAgIHRoaXMubGV2ZWxOb2RlID0gbGV2ZWxOb2RlXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxpc3RMZXZlbE5vZGVbbGV2ZWwgLSAxXTtcclxuICAgICAgICBkYXRhLnNjYWxlID0gMC4yXHJcbiAgICAgICAgZGF0YS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNMb2NhbExldmVsID0gZGF0YVxyXG4gICAgICAgIGNjLnR3ZWVuKGRhdGEpLnRvKDAuMywgeyBzY2FsZTogMS4xIH0pLnRvKDAuMDUsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNGaXJzdCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICAvLyBH4buNaSBow6BtIGxvYWRcclxuICAgICAgICAvLyBsZXZlbE5vZGUuZ2V0Q29tcG9uZW50KFwiRHJhd0NoZWNrXCIpLmxvYWRMZXZlbCgpO1xyXG4gICAgICAgIC8vIGxldmVsTm9kZS5nZXRDb21wb25lbnQoXCJEcmF3Q2hlY2tcIikubG9hZE91dGxpbmVGcm9tSlNPTihsZXZlbERhdGFKU09OKTtcclxuICAgICAgICAvLyBsZXZlbE5vZGUuZ2V0Q29tcG9uZW50KFwiRHJhd0NoZWNrXCIpLmxvYWRNYXRyaXhKU09OKGxldmVsRGF0YUpTT04pO1xyXG4gICAgfVxyXG4gICAgbmV4dExldmVsKCkge1xyXG4gICAgICAgIGxldCBmaXJzdCA9IHRoaXMuaXNMb2NhbExldmVsO1xyXG4gICAgICAgIHRoaXMubGV2ZWxOb2RlLmdldENvbXBvbmVudChcIkRyYXdDaGVja1wiKS5jbGVhckdhbWUoKVxyXG4gICAgICAgIGNjLnR3ZWVuKGZpcnN0KS50bygwLjMsIHsgc2NhbGU6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcnN0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMubGV2ZWwrK1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTGV2ZWwodGhpcy5sZXZlbClcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG5cclxuICAgIH1cclxuICAgIHdpbkdhbWUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV2luLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLndpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICBsZXQgZmlyc3QgPSB0aGlzLmlzTG9jYWxMZXZlbDtcclxuICAgICAgICB0aGlzLmxldmVsTm9kZS5nZXRDb21wb25lbnQoXCJEcmF3Q2hlY2tcIikuY2xlYXJHYW1lKClcclxuICAgICAgICBjYy50d2VlbihmaXJzdCkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJzdC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmxldmVsKytcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZExldmVsKHRoaXMubGV2ZWwpXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgfVxyXG4gICAgZmFpbCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBpc3ZlcnRpY2FsID0gZmFsc2VcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcblxyXG4gICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIDwgY2Mud2luU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzdmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19