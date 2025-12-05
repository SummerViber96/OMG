"use strict";
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