
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game28.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2431iArs1CVahAgy4umTnC', 'Game28');
// scripts/Game28.ts

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
        _this.shadow = null;
        _this.shadow2 = null;
        _this.listBat = [];
        _this.tut = null;
        _this.camera1 = null;
        _this.camera2 = null;
        _this.uiCamera = null;
        _this.barStar = null;
        // @property(cc.Node)
        // handFarm: cc.Node = null;
        _this.stickNode = null;
        _this.hand = null;
        _this.endCard = null;
        _this.linkToStore = null;
        _this.phaohoa = null;
        //logic
        _this.logic = null;
        _this.houseCarrot = null;
        _this.houseTomato = null;
        _this.houseCorn = null;
        _this.sister = null;
        _this.dad = null;
        _this.mom = null;
        _this.son = null;
        _this.farmTomato = null;
        _this.farmPatoto = null;
        _this.farmCorn = null;
        _this.preStar = null;
        _this.lbStart = null;
        //sound
        _this.soundBg = null;
        _this.soundPutIn = null;
        _this.soundVictory = null;
        _this.soundZee = null;
        _this.soundUpdate = null;
        _this.soundChicken = null;
        _this.soundHit = null;
        _this.soundGet = null;
        _this.soundNhanGo = null;
        _this.step = 1;
        _this.countStart = 0;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        cc.audioEngine.play(this.soundBg, true, 0.5);
        cc.game.setFrameRate(60);
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.scheduleOnce(function () {
            cc.tween(_this.camera2).by(0.5, { zoomRatio: 0.2 }).start();
            cc.tween(_this.camera1).by(0.5, { zoomRatio: 0.5 }).start();
            cc.tween(_this.camera1.node).to(0.5, { position: cc.v3(900, -300) }).start();
            cc.tween(_this.camera2.node).to(0.5, { position: cc.v3(900, -300) }).start();
            _this.scheduleOnce(function () {
                _this.houseCarrot.getChildByName("pop").active = true;
            }, 0.5);
        }, 1);
    };
    NewClass.prototype.updateHouse = function () {
        var _this = this;
        this.stickNode.active = false;
        var house = null;
        switch (this.step) {
            case 1:
                house = this.houseCarrot;
                this.spawEnegy(this.farmPatoto);
                this.scheduleOnce(function () {
                    cc.tween(_this.camera1.node).by(0.5, { position: cc.v3(-1200, 200) }).start();
                    cc.tween(_this.camera2.node).by(0.5, { position: cc.v3(-1350, 200) }).start();
                }, 1.7);
                this.scheduleOnce(function () {
                    _this.stickNode.position = cc.v3(-332, -41);
                    _this.stickNode.getComponent(cc.BoxCollider).enabled = false;
                    _this.stickNode.active = true;
                    _this.hand.active = true;
                    for (var _i = 0, _a = _this.farmTomato.children; _i < _a.length; _i++) {
                        var child = _a[_i];
                        child.getComponent(cc.PolygonCollider).enabled = true;
                    }
                    _this.houseTomato.getChildByName("pop").active = true;
                }, 2.2);
                break;
            case 2:
                house = this.houseTomato;
                this.spawEnegy(this.farmTomato);
                this.mom.setAnimation(0, "poke", true);
                cc.audioEngine.play(this.soundChicken, false, 0.3);
                this.scheduleOnce(function () {
                    cc.tween(_this.camera1.node).by(0.5, { position: cc.v3(-50, -900) }).start();
                    cc.tween(_this.camera2.node).by(0.5, { position: cc.v3(180, -900) }).start();
                    cc.tween(_this.camera2).by(0.5, { zoomRatio: -0.17 }).start();
                }, 1.7);
                this.scheduleOnce(function () {
                    _this.stickNode.position = cc.v3(-471.401, -1082.157);
                    _this.stickNode.getComponent(cc.BoxCollider).enabled = false;
                    _this.stickNode.active = true;
                    _this.hand.active = true;
                    _this.houseCorn.getChildByName("pop").active = true;
                }, 2.2);
                break;
            case 3:
                house = this.houseCorn;
                this.spawEnegy(this.farmCorn);
                this.dad.setAnimation(0, "poke", true);
                this.son.setAnimation(0, "poke", true);
                this.scheduleOnce(function () {
                    cc.tween(_this.camera1).by(0.6, { zoomRatio: -0.6 }).start();
                    // cc.tween(this.camera2).by(0.6, { zoomRatio: -0.2 }).start()
                    cc.tween(_this.camera1.node).by(0.6, { position: cc.v3(1200, 1000) }).start();
                    cc.tween(_this.camera2.node).by(0.6, { position: cc.v3(1000, 1000) }).start();
                }, 1);
                this.scheduleOnce(function () {
                    cc.tween(_this.camera1).by(0.6, { zoomRatio: 1.1 }).start();
                    cc.tween(_this.camera2).by(0.6, { zoomRatio: 1.1 }).start();
                    cc.tween(_this.camera1.node).by(0.6, { position: cc.v3(0, 200) }).start();
                    cc.tween(_this.camera2.node).by(0.6, { position: cc.v3(0, 200) }).start();
                    _this.son.node.position = cc.v3(600, 212);
                    _this.dad.node.position = cc.v3(801, 212);
                    _this.sister.node.position = cc.v3(525, 98);
                    _this.mom.node.position = cc.v3(876, 99);
                    _this.mom.node.scale = 0.1;
                    _this.mom.node.scaleX = -0.1;
                    _this.sister.node.scale = 0.12;
                    _this.sister.setAnimation(0, "poke", true);
                    _this.mom.setAnimation(0, "poke", true);
                    _this.dad.setAnimation(0, "poke", true);
                    _this.son.setAnimation(0, "poke", true);
                    cc.audioEngine.play(_this.soundZee, false, 1);
                    _this.phaohoa.active = true;
                    cc.audioEngine.play(_this.soundVictory, false, 1);
                    _this.scheduleOnce(function () {
                        _this.endCard.active = true;
                        _this.linkToStore.active = true;
                    }, 1.2);
                }, 2);
                break;
        }
        this.step++;
        var oldH = house.children[0];
        var newH = house.children[1];
        cc.tween(oldH).to(0.1, { scale: 1.4 }).to(0.1, { scale: 0.5 }).start();
        this.scheduleOnce(function () {
            newH.scale = 0.5;
            newH.active = true;
            _this.sister.setAnimation(0, "poke", true);
            cc.tween(newH).to(0.3, { scale: 1.4 }).to(0.1, { scale: 1.3 }).call(function () {
            }).start();
        }, 0.25);
        house.getChildByName("vfx_update").active = true;
        cc.audioEngine.play(this.soundUpdate, false, 1);
    };
    NewClass.prototype.btn_start = function (event) {
        var _this = this;
        event.currentTarget.getComponent(cc.Button).enabled = false;
        cc.tween(this.shadow).to(0.4, { opacity: 0 }).start();
        cc.tween(this.tut.children[1]).by(0.4, { opacity: -255, position: cc.v3(-100, 0) }).call(function () {
            _this.tut.active = false;
        }).start();
        cc.tween(this.tut.children[2]).to(0.4, { opacity: 0 }).start();
        // cc.tween(tjos)
        cc.tween(this.camera1).by(0.8, { zoomRatio: -1.5 }).start();
        cc.tween(this.camera2).by(0.8, { zoomRatio: -1.6 }).start();
        cc.tween(this.camera1.node).to(0.8, { position: cc.v3(-270, -700) }).start();
        cc.tween(this.camera2.node).to(0.8, { position: cc.v3(-180, -700) }).start();
        this.scheduleOnce(function () {
            _this.showTut1();
        }, 0.8);
    };
    NewClass.prototype.showTut1 = function () {
        cc.tween(this.shadow2).to(0.3, { opacity: 180 }).start();
        this.stickNode.active = true;
    };
    // showTut2() {
    //     this.stickNode.active = false
    //     this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    //     cc.tween(this.camera1.node).by(0.4, { position: cc.v3(-800, 0) }).start()
    //     cc.tween(this.camera2.node).by(0.4, { position: cc.v3(-800, 0) }).start()
    //     cc.tween(this.shadow2).to(0.4, { opacity: 0 }).call(() => { this.shadow2.active = false }).start()
    //     this.scheduleOnce(() => {
    //         this.listFood.active = true;
    //         cc.audioEngine.play(this.soundUpdate, false, 1)
    //     }, 0.4)
    //     this.scheduleOnce(() => {
    //         this.popChicken.active = true
    //     }, 0.5)
    // }
    // showTut3() {
    //     this.step = 3
    //     this.stickNode.active = false;
    //     cc.tween(this.camera1.node).by(0.7, { position: cc.v3(400, 0) }).start()
    //     cc.tween(this.camera2.node).by(0.7, { position: cc.v3(500, 0) }).start()
    //     cc.tween(this.camera1).by(0.7, { zoomRatio: 1 }).start()
    //     cc.tween(this.camera2).by(0.7, { zoomRatio: 1 }).start()
    //     this.scheduleOnce(() => {
    //         this.listFoodTable.active = true
    //         cc.audioEngine.play(this.soundUpdate, false, 1)
    //     }, 0.7)
    //     this.scheduleOnce(() => {
    //         cc.tween(this.camera1.node).by(1, { position: cc.v3(500, 500) }).start()
    //         cc.tween(this.camera2.node).by(1, { position: cc.v3(500, 500) }).start()
    //     }, 1)
    //     this.scheduleOnce(() => {
    //         this.phaohoa.active = true
    //         cc.audioEngine.play(this.soundVictory, false, 1)
    //         cc.audioEngine.play(this.soundZee, false, 1)
    //     }, 2.5)
    //     this.scheduleOnce(() => {
    //         this.endCard.active = true;
    //         this.linkToStore.active = true
    //     }, 2.7)
    // }
    // btn_chicken(event) {
    //     event.currentTarget.getComponent(cc.Button).enabled = false;
    //     this.stickNode.getComponent(cc.BoxCollider).enabled = false
    //     this.popEggs.active = true
    //     for (let child of this.popChicken.children) {
    //         child.getComponent(cc.Animation).play("pop_close");
    //     }
    //     this.scheduleOnce(() => {
    //         this.listFood.getComponent(cc.Animation).play()
    //         cc.audioEngine.play(this.soundPutIn, false, 1)
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundPutIn, false, 1)
    //         }, 0.05)
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundPutIn, false, 1)
    //         }, 0.1)
    //     }, 0.3)
    //     this.scheduleOnce(() => {
    //         cc.audioEngine.play(this.soundChicken, false, 0.5)
    //         this.listEggs.getComponent(cc.Animation).play()
    //         cc.audioEngine.play(this.soundUpdate, false, 1)
    //     }, 1.2)
    //     this.scheduleOnce(() => {
    //         cc.tween(this.camera1.node).by(1.2, { position: cc.v3(1200, 400) }).start()
    //         cc.tween(this.camera2.node).by(1.2, { position: cc.v3(1200, 400) }).start()
    //         cc.tween(this.camera1).by(1.2, { zoomRatio: 0.4 }).start()
    //         cc.tween(this.camera2).by(1.2, { zoomRatio: 0.4 }).start()
    //     }, 2.2)
    //     this.scheduleOnce(() => {
    //         this.schedule(() => {
    //             cc.audioEngine.play(this.soundPutIn, false, 1)
    //             this.popEggs.getComponent("popFarm").updateFill()
    //         }, 0.1, 4)
    //     }, 1.2 + 2)
    //     this.scheduleOnce(() => {
    //         this.popTomato.active = true
    //         cc.audioEngine.play(this.soundUpdate, false, 1)
    //     }, 4.3)
    //     this.scheduleOnce(() => {
    //         cc.tween(this.camera1.node).by(0.6, { position: cc.v3(-300, 0) }).start()
    //         cc.tween(this.camera2.node).by(0.6, { position: cc.v3(-500, 0) }).start()
    //         cc.tween(this.camera1).by(0.6, { zoomRatio: -0.4 }).start()
    //         cc.tween(this.camera2).by(0.6, { zoomRatio: -0.4 }).start()
    //     }, 4.7)
    //     this.scheduleOnce(() => {
    //         this.step = 2
    //         this.stickNode.active = true;
    //         this.stickNode.position = cc.v3(-288, -146);
    //         this.stickNode.scale = 0.8;
    //         this.stickNode.getChildByName("hand").active = true;
    //         this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    //         this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    //         for (let child of this.farmTomato.children) {
    //             child.getComponent(cc.PolygonCollider).enabled = true;
    //         }
    //     }, 4.7 + 0.6)
    // }
    NewClass.prototype.spawEnegy = function (farm) {
        var pos = farm.parent.convertToWorldSpaceAR(farm.position);
        var posStart = cc.v3(0, 0);
        if (this.camera1.node.active == true) {
            pos = this.camera1.getWorldToScreenPoint(pos);
        }
        else {
            pos = this.camera2.getWorldToScreenPoint(pos);
        }
        posStart = this.uiCamera.getScreenToWorldPoint(pos);
        posStart = this.barStar.convertToNodeSpaceAR(posStart);
        this.createReward(this.preStar, posStart.add(cc.v3(0, -50)), this.barStar.position.add(cc.v3(-60, 0)), this.barStar);
        // this.scheduleOnce(() => {
        //     if (this.step == 1) {
        //         cc.tween(this.camera.node).by(0.5, { position: cc.v3(-450, -150) }).start()
        //         cc.tween(this.cameraNgang.node).by(0.5, { position: cc.v3(-450, -150) }).start()
        //         this.stickNode.position = cc.v3(1041, 1594);
        //         this.stickNode.active = true
        //         this.stickNode.getComponent(cc.BoxCollider).enabled = false
        //         for (let children of this.farmCorn.children) {
        //             children.getComponent(cc.PolygonCollider).enabled = true
        //         }
        //         this.pop2.active = true
        //         this.step = 2
        //         this.hand.active = true
        //     }
        // }, 1)
    };
    NewClass.prototype.createReward = function (reward, posStart, posEnd, node) {
        var _this = this;
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.soundNhanGo, false, 1);
        }, 0.5);
        var _loop_1 = function (i) {
            var rewardNode = cc.instantiate(reward);
            var nodeScale = rewardNode.scale;
            rewardNode.opacity = 0;
            node.addChild(rewardNode);
            // rewardNode.zIndex=cc.macro.MIN_ZINDEX
            var distanceX = (i % 2 == 0) ? 40 : -40;
            var distanceY = (i % 2 == 0) ? 40 : -40;
            cc.tween(rewardNode).delay(0.15 * i).call(function () {
                cc.audioEngine.play(_this.soundGet, false, 1);
            }).set({ active: true, scale: 0, position: posStart, opacity: 255 })
                .parallel(cc.tween().bezierTo(0.25, posStart, posStart.add(cc.v2(0, 200 + distanceY * i)), posStart.add(cc.v2(distanceX * i, 30 + distanceY))), cc.tween(rewardNode).to(0.25, { scale: nodeScale })).call(function () {
                // cc.audioEngine.play(this.soundSpone, false, 0.8)
            })
                .repeat(2, cc.tween()
                .to(0.1, { scale: nodeScale + 0.05 })
                .to(0.1, { scale: nodeScale - 0.05 }))
                .call(function () {
            })
                .to(0.8, { position: posEnd })
                .call(function () {
                // cc.audioEngine.play(this.soundHit, false, 0.5)
                _this.countStart++;
                rewardNode.children[0].active = false;
                rewardNode.children[1].active = true;
                // if (this.step <= 2) {
                //     node.getComponent("btnMission").updateFill()
                // }
                // else if (this.step == 3 || this.step == 4) {
                //     node.getComponent("btnMission").updateFill()
                // }
            })
                .start();
        };
        for (var i = 0; i < 5; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera1.node.active = (logic) ? false : true;
        this.camera2.node.active = (logic) ? true : false;
        canvas.fitWidth = (logic) ? true : false;
        canvas.fitHeight = (logic) ? false : true;
        this.logic.scale = (logic) ? 0.35 : 0.6;
        this.tut.scale = (logic) ? 1 : 1.5;
        this.tut.position = (logic) ? cc.v3(-297.23, -1107.423) : cc.v3(-1200, -1107.423);
        this.phaohoa.scale = (logic) ? 1 : 1.5;
        this.endCard.scale = (logic) ? 1 : 1.2;
        this.barStar.scale = (logic) ? 1 : 1.5;
    };
    NewClass.prototype.update = function (dt) {
        this.lbStart.string = this.countStart.toString();
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "shadow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "shadow2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBat", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tut", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera1", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera2", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "uiCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barStar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "stickNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaohoa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logic", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "houseCarrot", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "houseTomato", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "houseCorn", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "sister", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "dad", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "mom", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "son", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "farmTomato", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "farmPatoto", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "farmCorn", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preStar", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbStart", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPutIn", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundVictory", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundZee", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUpdate", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChicken", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHit", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundGet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundNhanGo", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUyOC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtiQztRQWhiRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUV4QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWMsSUFBSSxDQUFBO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFDdkIscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUU1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBQ3ZCLE9BQU87UUFFUCxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsWUFBTSxHQUFnQixJQUFJLENBQUM7UUFFM0IsU0FBRyxHQUFnQixJQUFJLENBQUM7UUFFeEIsU0FBRyxHQUFnQixJQUFJLENBQUM7UUFFeEIsU0FBRyxHQUFnQixJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWMs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QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBRS9CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQ3RDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7b0JBQzNFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUMzRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFFaEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUNQLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNyRCxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxH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LElBQUksQ0FBQztnQkFDdEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFFaEQsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2lCQUMvRCxRQUFRLENBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ3BJLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUN0RCxDQUFDLElBQUksQ0FBQztnQkFDSCxtREFBbUQ7WUFDdkQsQ0FBQyxDQUFDO2lCQUNELE1BQU0sQ0FBQyxDQUFDLEVBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRTtpQkFDTCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQztpQkFDcEMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FDNUM7aUJBQ0EsSUFBSSxDQUFDO1lBQ04sQ0FBQyxDQUFDO2lCQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7aUJBQzdCLElBQUksQ0FBQztnQkFD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LFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzaGFkb3c6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNoYWRvdzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RCYXQ6IGNjLk5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIGNhbWVyYTE6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBjYW1lcmEyOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiYXJTdGFyOiBjYy5Ob2RlID0gbnVsbFxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGhhbmRGYXJtOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzdGlja05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGhhb2hvYTogY2MuTm9kZSA9IG51bGxcbiAgICAvL2xvZ2ljXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG9naWM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvdXNlQ2Fycm90OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob3VzZVRvbWF0bzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG91c2VDb3JuOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBzaXN0ZXI6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgZGFkOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIG1vbTogc3AuU2tlbGV0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBzb246IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZhcm1Ub21hdG86IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZmFybVBhdG90bzogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmYXJtQ29ybjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVTdGFyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlN0YXJ0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgLy9zb3VuZFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kUHV0SW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kVmljdG9yeTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kWmVlOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFVwZGF0ZTogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDaGlja2VuOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEhpdDogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRHZXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kTmhhbkdvOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgc3RlcCA9IDE7XG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxuICAgICAgICBjYy5nYW1lLnNldEZyYW1lUmF0ZSg2MCk7XG4gICAgICAgIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMikuYnkoMC41LCB7IHpvb21SYXRpbzogMC4yIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMSkuYnkoMC41LCB7IHpvb21SYXRpbzogMC41IH0pLnN0YXJ0KClcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDkwMCwgLTMwMCkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEyLm5vZGUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoOTAwLCAtMzAwKSB9KS5zdGFydCgpXG5cbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXNlQ2Fycm90LmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgfSwgMSlcblxuXG5cbiAgICB9XG4gICAgdXBkYXRlSG91c2UoKSB7XG4gICAgICAgIHRoaXMuc3RpY2tOb2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGxldCBob3VzZSA9IG51bGxcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0ZXApIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBob3VzZSA9IHRoaXMuaG91c2VDYXJyb3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3RW5lZ3kodGhpcy5mYXJtUGF0b3RvKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEubm9kZSkuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygtMTIwMCwgMjAwKSB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMi5ub2RlKS5ieSgwLjUsIHsgcG9zaXRpb246IGNjLnYzKC0xMzUwLCAyMDApIH0pLnN0YXJ0KClcblxuICAgICAgICAgICAgICAgIH0sIDEuNylcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGlja05vZGUucG9zaXRpb24gPSBjYy52MygtMzMyLCAtNDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0aWNrTm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0aWNrTm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuZmFybVRvbWF0by5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXNlVG9tYXRvLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9LCAyLjIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaG91c2UgPSB0aGlzLmhvdXNlVG9tYXRvO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd0VuZWd5KHRoaXMuZmFybVRvbWF0bylcblxuICAgICAgICAgICAgICAgIHRoaXMubW9tLnNldEFuaW1hdGlvbigwLCBcInBva2VcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGlja2VuLCBmYWxzZSwgMC4zKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExLm5vZGUpLmJ5KDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTUwLCAtOTAwKSB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMi5ub2RlKS5ieSgwLjUsIHsgcG9zaXRpb246IGNjLnYzKDE4MCwgLTkwMCkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIpLmJ5KDAuNSwgeyB6b29tUmF0aW86IC0wLjE3IH0pLnN0YXJ0KClcblxuICAgICAgICAgICAgICAgIH0sIDEuNylcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RpY2tOb2RlLnBvc2l0aW9uID0gY2MudjMoLTQ3MS40MDEsIC0xMDgyLjE1Nyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RpY2tOb2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RpY2tOb2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZUNvcm4uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgfSwgMi4yKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGhvdXNlID0gdGhpcy5ob3VzZUNvcm47XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3RW5lZ3kodGhpcy5mYXJtQ29ybilcbiAgICAgICAgICAgICAgICB0aGlzLmRhZC5zZXRBbmltYXRpb24oMCwgXCJwb2tlXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgdGhpcy5zb24uc2V0QW5pbWF0aW9uKDAsIFwicG9rZVwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExKS5ieSgwLjYsIHsgem9vbVJhdGlvOiAtMC42IH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEyKS5ieSgwLjYsIHsgem9vbVJhdGlvOiAtMC4yIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExLm5vZGUpLmJ5KDAuNiwgeyBwb3NpdGlvbjogY2MudjMoMTIwMCwgMTAwMCkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIubm9kZSkuYnkoMC42LCB7IHBvc2l0aW9uOiBjYy52MygxMDAwLCAxMDAwKSB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgfSwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMSkuYnkoMC42LCB7IHpvb21SYXRpbzogMS4xIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEyKS5ieSgwLjYsIHsgem9vbVJhdGlvOiAxLjEgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEubm9kZSkuYnkoMC42LCB7IHBvc2l0aW9uOiBjYy52MygwLCAyMDApIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEyLm5vZGUpLmJ5KDAuNiwgeyBwb3NpdGlvbjogY2MudjMoMCwgMjAwKSB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29uLm5vZGUucG9zaXRpb24gPSBjYy52Myg2MDAsIDIxMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFkLm5vZGUucG9zaXRpb24gPSBjYy52Myg4MDEsIDIxMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lzdGVyLm5vZGUucG9zaXRpb24gPSBjYy52Myg1MjUsIDk4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb20ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDg3NiwgOTkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9tLm5vZGUuc2NhbGUgPSAwLjE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9tLm5vZGUuc2NhbGVYID0gLTAuMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXN0ZXIubm9kZS5zY2FsZSA9IDAuMTJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXN0ZXIuc2V0QW5pbWF0aW9uKDAsIFwicG9rZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb20uc2V0QW5pbWF0aW9uKDAsIFwicG9rZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYWQuc2V0QW5pbWF0aW9uKDAsIFwicG9rZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb24uc2V0QW5pbWF0aW9uKDAsIFwicG9rZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kWmVlLCBmYWxzZSwgMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waGFvaG9hLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVmljdG9yeSwgZmFsc2UsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIDEuMilcbiAgICAgICAgICAgICAgICB9LCAyKVxuXG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RlcCsrXG4gICAgICAgIGxldCBvbGRIID0gaG91c2UuY2hpbGRyZW5bMF1cbiAgICAgICAgbGV0IG5ld0ggPSBob3VzZS5jaGlsZHJlblsxXVxuICAgICAgICBjYy50d2VlbihvbGRIKS50bygwLjEsIHsgc2NhbGU6IDEuNCB9KS50bygwLjEsIHsgc2NhbGU6IDAuNSB9KS5zdGFydCgpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIG5ld0guc2NhbGUgPSAwLjVcbiAgICAgICAgICAgIG5ld0guYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5zaXN0ZXIuc2V0QW5pbWF0aW9uKDAsIFwicG9rZVwiLCB0cnVlKVxuXG4gICAgICAgICAgICBjYy50d2VlbihuZXdIKS50bygwLjMsIHsgc2NhbGU6IDEuNCB9KS50bygwLjEsIHsgc2NhbGU6IDEuMyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfSwgMC4yNSlcblxuICAgICAgICBob3VzZS5nZXRDaGlsZEJ5TmFtZShcInZmeF91cGRhdGVcIikuYWN0aXZlID0gdHJ1ZVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVcGRhdGUsIGZhbHNlLCAxKVxuICAgIH1cblxuICAgIGJ0bl9zdGFydChldmVudCkge1xuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5zaGFkb3cpLnRvKDAuNCwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudHV0LmNoaWxkcmVuWzFdKS5ieSgwLjQsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKC0xMDAsIDApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50dXQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLnR1dC5jaGlsZHJlblsyXSkudG8oMC40LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxuICAgICAgICAvLyBjYy50d2Vlbih0am9zKVxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEpLmJ5KDAuOCwgeyB6b29tUmF0aW86IC0xLjUgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIpLmJ5KDAuOCwgeyB6b29tUmF0aW86IC0xLjYgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygtMjcwLCAtNzAwKSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMi5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKC0xODAsIC03MDApIH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93VHV0MSgpXG4gICAgICAgIH0sIDAuOClcblxuICAgIH1cbiAgICBzaG93VHV0MSgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5zaGFkb3cyKS50bygwLjMsIHsgb3BhY2l0eTogMTgwIH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5zdGlja05vZGUuYWN0aXZlID0gdHJ1ZVxuICAgIH1cbiAgICAvLyBzaG93VHV0MigpIHtcbiAgICAvLyAgICAgdGhpcy5zdGlja05vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAvLyAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcblxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEubm9kZSkuYnkoMC40LCB7IHBvc2l0aW9uOiBjYy52MygtODAwLCAwKSB9KS5zdGFydCgpXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMi5ub2RlKS5ieSgwLjQsIHsgcG9zaXRpb246IGNjLnYzKC04MDAsIDApIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5zaGFkb3cyKS50bygwLjQsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHsgdGhpcy5zaGFkb3cyLmFjdGl2ZSA9IGZhbHNlIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5saXN0Rm9vZC5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBkYXRlLCBmYWxzZSwgMSlcbiAgICAvLyAgICAgfSwgMC40KVxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLnBvcENoaWNrZW4uYWN0aXZlID0gdHJ1ZVxuICAgIC8vICAgICB9LCAwLjUpXG4gICAgLy8gfVxuICAgIC8vIHNob3dUdXQzKCkge1xuICAgIC8vICAgICB0aGlzLnN0ZXAgPSAzXG4gICAgLy8gICAgIHRoaXMuc3RpY2tOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEubm9kZSkuYnkoMC43LCB7IHBvc2l0aW9uOiBjYy52Myg0MDAsIDApIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEyLm5vZGUpLmJ5KDAuNywgeyBwb3NpdGlvbjogY2MudjMoNTAwLCAwKSB9KS5zdGFydCgpXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMSkuYnkoMC43LCB7IHpvb21SYXRpbzogMSB9KS5zdGFydCgpXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMikuYnkoMC43LCB7IHpvb21SYXRpbzogMSB9KS5zdGFydCgpXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdEZvb2RUYWJsZS5hY3RpdmUgPSB0cnVlXG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVcGRhdGUsIGZhbHNlLCAxKVxuXG4gICAgLy8gICAgIH0sIDAuNylcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExLm5vZGUpLmJ5KDEsIHsgcG9zaXRpb246IGNjLnYzKDUwMCwgNTAwKSB9KS5zdGFydCgpXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIubm9kZSkuYnkoMSwgeyBwb3NpdGlvbjogY2MudjMoNTAwLCA1MDApIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgfSwgMSlcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5waGFvaG9hLmFjdGl2ZSA9IHRydWVcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFZpY3RvcnksIGZhbHNlLCAxKVxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kWmVlLCBmYWxzZSwgMSlcbiAgICAvLyAgICAgfSwgMi41KVxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxuICAgIC8vICAgICB9LCAyLjcpXG4gICAgLy8gfVxuICAgIC8vIGJ0bl9jaGlja2VuKGV2ZW50KSB7XG4gICAgLy8gICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xuICAgIC8vICAgICB0aGlzLnN0aWNrTm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZVxuXG4gICAgLy8gICAgIHRoaXMucG9wRWdncy5hY3RpdmUgPSB0cnVlXG4gICAgLy8gICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMucG9wQ2hpY2tlbi5jaGlsZHJlbikge1xuICAgIC8vICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvcF9jbG9zZVwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLmxpc3RGb29kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUHV0SW4sIGZhbHNlLCAxKVxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFB1dEluLCBmYWxzZSwgMSlcblxuICAgIC8vICAgICAgICAgfSwgMC4wNSlcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRQdXRJbiwgZmFsc2UsIDEpXG5cbiAgICAvLyAgICAgICAgIH0sIDAuMSlcbiAgICAvLyAgICAgfSwgMC4zKVxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGlja2VuLCBmYWxzZSwgMC41KVxuICAgIC8vICAgICAgICAgdGhpcy5saXN0RWdncy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZGF0ZSwgZmFsc2UsIDEpXG4gICAgLy8gICAgIH0sIDEuMilcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExLm5vZGUpLmJ5KDEuMiwgeyBwb3NpdGlvbjogY2MudjMoMTIwMCwgNDAwKSB9KS5zdGFydCgpXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIubm9kZSkuYnkoMS4yLCB7IHBvc2l0aW9uOiBjYy52MygxMjAwLCA0MDApIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMSkuYnkoMS4yLCB7IHpvb21SYXRpbzogMC40IH0pLnN0YXJ0KClcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMikuYnkoMS4yLCB7IHpvb21SYXRpbzogMC40IH0pLnN0YXJ0KClcbiAgICAvLyAgICAgfSwgMi4yKVxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRQdXRJbiwgZmFsc2UsIDEpXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5wb3BFZ2dzLmdldENvbXBvbmVudChcInBvcEZhcm1cIikudXBkYXRlRmlsbCgpXG4gICAgLy8gICAgICAgICB9LCAwLjEsIDQpXG4gICAgLy8gICAgIH0sIDEuMiArIDIpXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMucG9wVG9tYXRvLmFjdGl2ZSA9IHRydWVcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZGF0ZSwgZmFsc2UsIDEpXG5cbiAgICAvLyAgICAgfSwgNC4zKVxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEubm9kZSkuYnkoMC42LCB7IHBvc2l0aW9uOiBjYy52MygtMzAwLCAwKSB9KS5zdGFydCgpXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIubm9kZSkuYnkoMC42LCB7IHBvc2l0aW9uOiBjYy52MygtNTAwLCAwKSB9KS5zdGFydCgpXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEpLmJ5KDAuNiwgeyB6b29tUmF0aW86IC0wLjQgfSkuc3RhcnQoKVxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEyKS5ieSgwLjYsIHsgem9vbVJhdGlvOiAtMC40IH0pLnN0YXJ0KClcbiAgICAvLyAgICAgfSwgNC43KVxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLnN0ZXAgPSAyXG4gICAgLy8gICAgICAgICB0aGlzLnN0aWNrTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgdGhpcy5zdGlja05vZGUucG9zaXRpb24gPSBjYy52MygtMjg4LCAtMTQ2KTtcbiAgICAvLyAgICAgICAgIHRoaXMuc3RpY2tOb2RlLnNjYWxlID0gMC44O1xuICAgIC8vICAgICAgICAgdGhpcy5zdGlja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgLy8gICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIC8vICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5mYXJtVG9tYXRvLmNoaWxkcmVuKSB7XG4gICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0sIDQuNyArIDAuNilcbiAgICAvLyB9XG4gICAgc3Bhd0VuZWd5KGZhcm0pIHtcbiAgICAgICAgbGV0IHBvcyA9IGZhcm0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihmYXJtLnBvc2l0aW9uKVxuICAgICAgICBsZXQgcG9zU3RhcnQgPSBjYy52MygwLCAwKVxuICAgICAgICBpZiAodGhpcy5jYW1lcmExLm5vZGUuYWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuY2FtZXJhMS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcG9zID0gdGhpcy5jYW1lcmEyLmdldFdvcmxkVG9TY3JlZW5Qb2ludChwb3MpXG4gICAgICAgIH1cblxuICAgICAgICBwb3NTdGFydCA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvcyk7XG4gICAgICAgIHBvc1N0YXJ0ID0gdGhpcy5iYXJTdGFyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc1N0YXJ0KVxuICAgICAgICB0aGlzLmNyZWF0ZVJld2FyZCh0aGlzLnByZVN0YXIsIHBvc1N0YXJ0LmFkZChjYy52MygwLCAtNTApKSwgdGhpcy5iYXJTdGFyLnBvc2l0aW9uLmFkZChjYy52MygtNjAsIDApKSwgdGhpcy5iYXJTdGFyKVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zdGVwID09IDEpIHtcbiAgICAgICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS5ieSgwLjUsIHsgcG9zaXRpb246IGNjLnYzKC00NTAsIC0xNTApIH0pLnN0YXJ0KClcbiAgICAgICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYU5nYW5nLm5vZGUpLmJ5KDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTQ1MCwgLTE1MCkgfSkuc3RhcnQoKVxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc3RpY2tOb2RlLnBvc2l0aW9uID0gY2MudjMoMTA0MSwgMTU5NCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zdGlja05vZGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc3RpY2tOb2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgZm9yIChsZXQgY2hpbGRyZW4gb2YgdGhpcy5mYXJtQ29ybi5jaGlsZHJlbikge1xuICAgICAgICAvLyAgICAgICAgICAgICBjaGlsZHJlbi5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvcDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc3RlcCA9IDJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LCAxKVxuICAgIH1cblxuICAgIGNyZWF0ZVJld2FyZChyZXdhcmQsIHBvc1N0YXJ0LCBwb3NFbmQsIG5vZGUpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTmhhbkdvLCBmYWxzZSwgMSlcblxuICAgICAgICB9LCAwLjUpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmV3YXJkTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJld2FyZCk7XG4gICAgICAgICAgICBsZXQgbm9kZVNjYWxlID0gcmV3YXJkTm9kZS5zY2FsZTtcbiAgICAgICAgICAgIHJld2FyZE5vZGUub3BhY2l0eSA9IDBcblxuICAgICAgICAgICAgbm9kZS5hZGRDaGlsZChyZXdhcmROb2RlKTtcbiAgICAgICAgICAgIC8vIHJld2FyZE5vZGUuekluZGV4PWNjLm1hY3JvLk1JTl9aSU5ERVhcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZVggPSAoaSAlIDIgPT0gMCkgPyA0MCA6IC00MFxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlWSA9IChpICUgMiA9PSAwKSA/IDQwIDogLTQwXG4gICAgICAgICAgICBjYy50d2VlbihyZXdhcmROb2RlKS5kZWxheSgwLjE1ICogaSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kR2V0LCBmYWxzZSwgMSlcblxuICAgICAgICAgICAgfSkuc2V0KHsgYWN0aXZlOiB0cnVlLCBzY2FsZTogMCwgcG9zaXRpb246IHBvc1N0YXJ0LCBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYmV6aWVyVG8oMC4yNSwgcG9zU3RhcnQsIHBvc1N0YXJ0LmFkZChjYy52MigwLCAyMDAgKyBkaXN0YW5jZVkgKiBpKSksIHBvc1N0YXJ0LmFkZChjYy52MihkaXN0YW5jZVggKiBpLCAzMCArIGRpc3RhbmNlWSkpKSxcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocmV3YXJkTm9kZSkudG8oMC4yNSwgeyBzY2FsZTogbm9kZVNjYWxlIH0pXG4gICAgICAgICAgICAgICAgKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3BvbmUsIGZhbHNlLCAwLjgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVwZWF0KDIsXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IG5vZGVTY2FsZSArIDAuMDUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IG5vZGVTY2FsZSAtIDAuMDUgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogcG9zRW5kIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIaXQsIGZhbHNlLCAwLjUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRTdGFydCsrXG4gICAgICAgICAgICAgICAgICAgIHJld2FyZE5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJld2FyZE5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuc3RlcCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBub2RlLmdldENvbXBvbmVudChcImJ0bk1pc3Npb25cIikudXBkYXRlRmlsbCgpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIGlmICh0aGlzLnN0ZXAgPT0gMyB8fCB0aGlzLnN0ZXAgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbm9kZS5nZXRDb21wb25lbnQoXCJidG5NaXNzaW9uXCIpLnVwZGF0ZUZpbGwoKVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgY291bnRTdGFydCA9IDBcbiAgICByZXBvbnNpdmUobG9naWMpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICB0aGlzLmNhbWVyYTEubm9kZS5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICB0aGlzLmNhbWVyYTIubm9kZS5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2dpYy5zY2FsZSA9IChsb2dpYykgPyAwLjM1IDogMC42O1xuICAgICAgICB0aGlzLnR1dC5zY2FsZSA9IChsb2dpYykgPyAxIDogMS41O1xuICAgICAgICB0aGlzLnR1dC5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygtMjk3LjIzLCAtMTEwNy40MjMpIDogY2MudjMoLTEyMDAsIC0xMTA3LjQyMyk7XG4gICAgICAgIHRoaXMucGhhb2hvYS5zY2FsZSA9IChsb2dpYykgPyAxIDogMS41O1xuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuMjtcbiAgICAgICAgdGhpcy5iYXJTdGFyLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjVcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGJTdGFydC5zdHJpbmcgPSB0aGlzLmNvdW50U3RhcnQudG9TdHJpbmcoKVxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19