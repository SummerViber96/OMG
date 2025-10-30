
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZTI4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa2JDO1FBaGJHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWMsRUFBRSxDQUFDO1FBRXhCLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBYyxJQUFJLENBQUE7UUFFMUIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUN2QixxQkFBcUI7UUFDckIsNEJBQTRCO1FBRTVCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFDdkIsT0FBTztRQUVQLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixZQUFNLEdBQWdCLElBQUksQ0FBQztRQUUzQixTQUFHLEdBQWdCLElBQUksQ0FBQztRQUV4QixTQUFHLEdBQWdCLElBQUksQ0FBQztRQUV4QixTQUFHLEdBQWdCLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FB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b0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2hhZG93OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2hhZG93MjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RCYXQ6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhMTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmEyOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIHVpQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhclN0YXI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGhhbmRGYXJtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RpY2tOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb2hvYTogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vbG9naWNcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9naWM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBob3VzZUNhcnJvdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhvdXNlVG9tYXRvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaG91c2VDb3JuOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgc2lzdGVyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBkYWQ6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIG1vbTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgc29uOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmYXJtVG9tYXRvOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmYXJtUGF0b3RvOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmYXJtQ29ybjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlU3RhcjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiU3RhcnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIC8vc291bmRcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kUHV0SW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVmljdG9yeTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFplZTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVXBkYXRlOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDaGlja2VuOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhpdDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kR2V0OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmROaGFuR286IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIHN0ZXAgPSAxO1xyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXHJcbiAgICAgICAgY2MuZ2FtZS5zZXRGcmFtZVJhdGUoNjApO1xyXG4gICAgICAgIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEyKS5ieSgwLjUsIHsgem9vbVJhdGlvOiAwLjIgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEpLmJ5KDAuNSwgeyB6b29tUmF0aW86IDAuNSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDkwMCwgLTMwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52Myg5MDAsIC0zMDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG91c2VDYXJyb3QuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgfSwgMSlcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIHVwZGF0ZUhvdXNlKCkge1xyXG4gICAgICAgIHRoaXMuc3RpY2tOb2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgbGV0IGhvdXNlID0gbnVsbFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGVwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGhvdXNlID0gdGhpcy5ob3VzZUNhcnJvdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd0VuZWd5KHRoaXMuZmFybVBhdG90bylcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExLm5vZGUpLmJ5KDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTEyMDAsIDIwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMi5ub2RlKS5ieSgwLjUsIHsgcG9zaXRpb246IGNjLnYzKC0xMzUwLCAyMDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAxLjcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RpY2tOb2RlLnBvc2l0aW9uID0gY2MudjMoLTMzMiwgLTQxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0aWNrTm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RpY2tOb2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuZmFybVRvbWF0by5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXNlVG9tYXRvLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0sIDIuMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBob3VzZSA9IHRoaXMuaG91c2VUb21hdG87XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXdFbmVneSh0aGlzLmZhcm1Ub21hdG8pXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb20uc2V0QW5pbWF0aW9uKDAsIFwicG9rZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hpY2tlbiwgZmFsc2UsIDAuMylcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEubm9kZSkuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNTAsIC05MDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIubm9kZSkuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygxODAsIC05MDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIpLmJ5KDAuNSwgeyB6b29tUmF0aW86IC0wLjE3IH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAxLjcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGlja05vZGUucG9zaXRpb24gPSBjYy52MygtNDcxLjQwMSwgLTEwODIuMTU3KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0aWNrTm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RpY2tOb2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91c2VDb3JuLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAyLjIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgaG91c2UgPSB0aGlzLmhvdXNlQ29ybjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd0VuZWd5KHRoaXMuZmFybUNvcm4pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhZC5zZXRBbmltYXRpb24oMCwgXCJwb2tlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvbi5zZXRBbmltYXRpb24oMCwgXCJwb2tlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExKS5ieSgwLjYsIHsgem9vbVJhdGlvOiAtMC42IH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYTIpLmJ5KDAuNiwgeyB6b29tUmF0aW86IC0wLjIgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMS5ub2RlKS5ieSgwLjYsIHsgcG9zaXRpb246IGNjLnYzKDEyMDAsIDEwMDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIubm9kZSkuYnkoMC42LCB7IHBvc2l0aW9uOiBjYy52MygxMDAwLCAxMDAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMSkuYnkoMC42LCB7IHpvb21SYXRpbzogMS4xIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIpLmJ5KDAuNiwgeyB6b29tUmF0aW86IDEuMSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExLm5vZGUpLmJ5KDAuNiwgeyBwb3NpdGlvbjogY2MudjMoMCwgMjAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEyLm5vZGUpLmJ5KDAuNiwgeyBwb3NpdGlvbjogY2MudjMoMCwgMjAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb24ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDYwMCwgMjEyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhZC5ub2RlLnBvc2l0aW9uID0gY2MudjMoODAxLCAyMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lzdGVyLm5vZGUucG9zaXRpb24gPSBjYy52Myg1MjUsIDk4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbS5ub2RlLnBvc2l0aW9uID0gY2MudjMoODc2LCA5OSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbS5ub2RlLnNjYWxlID0gMC4xO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9tLm5vZGUuc2NhbGVYID0gLTAuMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpc3Rlci5ub2RlLnNjYWxlID0gMC4xMlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lzdGVyLnNldEFuaW1hdGlvbigwLCBcInBva2VcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb20uc2V0QW5pbWF0aW9uKDAsIFwicG9rZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhZC5zZXRBbmltYXRpb24oMCwgXCJwb2tlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29uLnNldEFuaW1hdGlvbigwLCBcInBva2VcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kWmVlLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFZpY3RvcnksIGZhbHNlLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAxLjIpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RlcCsrXHJcbiAgICAgICAgbGV0IG9sZEggPSBob3VzZS5jaGlsZHJlblswXVxyXG4gICAgICAgIGxldCBuZXdIID0gaG91c2UuY2hpbGRyZW5bMV1cclxuICAgICAgICBjYy50d2VlbihvbGRIKS50bygwLjEsIHsgc2NhbGU6IDEuNCB9KS50bygwLjEsIHsgc2NhbGU6IDAuNSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBuZXdILnNjYWxlID0gMC41XHJcbiAgICAgICAgICAgIG5ld0guYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnNpc3Rlci5zZXRBbmltYXRpb24oMCwgXCJwb2tlXCIsIHRydWUpXHJcblxyXG4gICAgICAgICAgICBjYy50d2VlbihuZXdIKS50bygwLjMsIHsgc2NhbGU6IDEuNCB9KS50bygwLjEsIHsgc2NhbGU6IDEuMyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDAuMjUpXHJcblxyXG4gICAgICAgIGhvdXNlLmdldENoaWxkQnlOYW1lKFwidmZ4X3VwZGF0ZVwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBkYXRlLCBmYWxzZSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBidG5fc3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNoYWRvdykudG8oMC40LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnR1dC5jaGlsZHJlblsxXSkuYnkoMC40LCB7IG9wYWNpdHk6IC0yNTUsIHBvc2l0aW9uOiBjYy52MygtMTAwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50dXQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy50dXQuY2hpbGRyZW5bMl0pLnRvKDAuNCwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyBjYy50d2Vlbih0am9zKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMSkuYnkoMC44LCB7IHpvb21SYXRpbzogLTEuNSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEyKS5ieSgwLjgsIHsgem9vbVJhdGlvOiAtMS42IH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygtMjcwLCAtNzAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEyLm5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTE4MCwgLTcwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VHV0MSgpXHJcbiAgICAgICAgfSwgMC44KVxyXG5cclxuICAgIH1cclxuICAgIHNob3dUdXQxKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc2hhZG93MikudG8oMC4zLCB7IG9wYWNpdHk6IDE4MCB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zdGlja05vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gc2hvd1R1dDIoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGlja05vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG5cclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEubm9kZSkuYnkoMC40LCB7IHBvc2l0aW9uOiBjYy52MygtODAwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEyLm5vZGUpLmJ5KDAuNCwgeyBwb3NpdGlvbjogY2MudjMoLTgwMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuc2hhZG93MikudG8oMC40LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7IHRoaXMuc2hhZG93Mi5hY3RpdmUgPSBmYWxzZSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxpc3RGb29kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZGF0ZSwgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgfSwgMC40KVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5wb3BDaGlja2VuLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICB9LCAwLjUpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBzaG93VHV0MygpIHtcclxuICAgIC8vICAgICB0aGlzLnN0ZXAgPSAzXHJcbiAgICAvLyAgICAgdGhpcy5zdGlja05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExLm5vZGUpLmJ5KDAuNywgeyBwb3NpdGlvbjogY2MudjMoNDAwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEyLm5vZGUpLmJ5KDAuNywgeyBwb3NpdGlvbjogY2MudjMoNTAwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExKS5ieSgwLjcsIHsgem9vbVJhdGlvOiAxIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIpLmJ5KDAuNywgeyB6b29tUmF0aW86IDEgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5saXN0Rm9vZFRhYmxlLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBkYXRlLCBmYWxzZSwgMSlcclxuXHJcbiAgICAvLyAgICAgfSwgMC43KVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExLm5vZGUpLmJ5KDEsIHsgcG9zaXRpb246IGNjLnYzKDUwMCwgNTAwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMi5ub2RlKS5ieSgxLCB7IHBvc2l0aW9uOiBjYy52Myg1MDAsIDUwMCkgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIH0sIDEpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnBoYW9ob2EuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRWaWN0b3J5LCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kWmVlLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICB9LCAyLjUpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgfSwgMi43KVxyXG4gICAgLy8gfVxyXG4gICAgLy8gYnRuX2NoaWNrZW4oZXZlbnQpIHtcclxuICAgIC8vICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLnN0aWNrTm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICB0aGlzLnBvcEVnZ3MuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMucG9wQ2hpY2tlbi5jaGlsZHJlbikge1xyXG4gICAgLy8gICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX2Nsb3NlXCIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdEZvb2QuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFB1dEluLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUHV0SW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgfSwgMC4wNSlcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUHV0SW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgfSwgMC4xKVxyXG4gICAgLy8gICAgIH0sIDAuMylcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoaWNrZW4sIGZhbHNlLCAwLjUpXHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdEVnZ3MuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZGF0ZSwgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgfSwgMS4yKVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExLm5vZGUpLmJ5KDEuMiwgeyBwb3NpdGlvbjogY2MudjMoMTIwMCwgNDAwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMi5ub2RlKS5ieSgxLjIsIHsgcG9zaXRpb246IGNjLnYzKDEyMDAsIDQwMCkgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTEpLmJ5KDEuMiwgeyB6b29tUmF0aW86IDAuNCB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMikuYnkoMS4yLCB7IHpvb21SYXRpbzogMC40IH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB9LCAyLjIpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFB1dEluLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMucG9wRWdncy5nZXRDb21wb25lbnQoXCJwb3BGYXJtXCIpLnVwZGF0ZUZpbGwoKVxyXG4gICAgLy8gICAgICAgICB9LCAwLjEsIDQpXHJcbiAgICAvLyAgICAgfSwgMS4yICsgMilcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9wVG9tYXRvLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBkYXRlLCBmYWxzZSwgMSlcclxuXHJcbiAgICAvLyAgICAgfSwgNC4zKVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmExLm5vZGUpLmJ5KDAuNiwgeyBwb3NpdGlvbjogY2MudjMoLTMwMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTIubm9kZSkuYnkoMC42LCB7IHBvc2l0aW9uOiBjYy52MygtNTAwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMSkuYnkoMC42LCB7IHpvb21SYXRpbzogLTAuNCB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhMikuYnkoMC42LCB7IHpvb21SYXRpbzogLTAuNCB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgfSwgNC43KVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGVwID0gMlxyXG4gICAgLy8gICAgICAgICB0aGlzLnN0aWNrTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0aWNrTm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0yODgsIC0xNDYpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0aWNrTm9kZS5zY2FsZSA9IDAuODtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGlja05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5mYXJtVG9tYXRvLmNoaWxkcmVuKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0sIDQuNyArIDAuNilcclxuICAgIC8vIH1cclxuICAgIHNwYXdFbmVneShmYXJtKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGZhcm0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihmYXJtLnBvc2l0aW9uKVxyXG4gICAgICAgIGxldCBwb3NTdGFydCA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgaWYgKHRoaXMuY2FtZXJhMS5ub2RlLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuY2FtZXJhMS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5jYW1lcmEyLmdldFdvcmxkVG9TY3JlZW5Qb2ludChwb3MpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3NTdGFydCA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvcyk7XHJcbiAgICAgICAgcG9zU3RhcnQgPSB0aGlzLmJhclN0YXIuY29udmVydFRvTm9kZVNwYWNlQVIocG9zU3RhcnQpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVSZXdhcmQodGhpcy5wcmVTdGFyLCBwb3NTdGFydC5hZGQoY2MudjMoMCwgLTUwKSksIHRoaXMuYmFyU3Rhci5wb3NpdGlvbi5hZGQoY2MudjMoLTYwLCAwKSksIHRoaXMuYmFyU3RhcilcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnN0ZXAgPT0gMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNDUwLCAtMTUwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYU5nYW5nLm5vZGUpLmJ5KDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTQ1MCwgLTE1MCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zdGlja05vZGUucG9zaXRpb24gPSBjYy52MygxMDQxLCAxNTk0KTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc3RpY2tOb2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc3RpY2tOb2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBjaGlsZHJlbiBvZiB0aGlzLmZhcm1Db3JuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2hpbGRyZW4uZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9wMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnN0ZXAgPSAyXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVSZXdhcmQocmV3YXJkLCBwb3NTdGFydCwgcG9zRW5kLCBub2RlKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmROaGFuR28sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJld2FyZE5vZGUgPSBjYy5pbnN0YW50aWF0ZShyZXdhcmQpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZVNjYWxlID0gcmV3YXJkTm9kZS5zY2FsZTtcclxuICAgICAgICAgICAgcmV3YXJkTm9kZS5vcGFjaXR5ID0gMFxyXG5cclxuICAgICAgICAgICAgbm9kZS5hZGRDaGlsZChyZXdhcmROb2RlKTtcclxuICAgICAgICAgICAgLy8gcmV3YXJkTm9kZS56SW5kZXg9Y2MubWFjcm8uTUlOX1pJTkRFWFxyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2VYID0gKGkgJSAyID09IDApID8gNDAgOiAtNDBcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlWSA9IChpICUgMiA9PSAwKSA/IDQwIDogLTQwXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHJld2FyZE5vZGUpLmRlbGF5KDAuMTUgKiBpKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdldCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICB9KS5zZXQoeyBhY3RpdmU6IHRydWUsIHNjYWxlOiAwLCBwb3NpdGlvbjogcG9zU3RhcnQsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYmV6aWVyVG8oMC4yNSwgcG9zU3RhcnQsIHBvc1N0YXJ0LmFkZChjYy52MigwLCAyMDAgKyBkaXN0YW5jZVkgKiBpKSksIHBvc1N0YXJ0LmFkZChjYy52MihkaXN0YW5jZVggKiBpLCAzMCArIGRpc3RhbmNlWSkpKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihyZXdhcmROb2RlKS50bygwLjI1LCB7IHNjYWxlOiBub2RlU2NhbGUgfSlcclxuICAgICAgICAgICAgICAgICkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3BvbmUsIGZhbHNlLCAwLjgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnJlcGVhdCgyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogbm9kZVNjYWxlICsgMC4wNSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBub2RlU2NhbGUgLSAwLjA1IH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogcG9zRW5kIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSGl0LCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRTdGFydCsrXHJcbiAgICAgICAgICAgICAgICAgICAgcmV3YXJkTm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXdhcmROb2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuc3RlcCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5vZGUuZ2V0Q29tcG9uZW50KFwiYnRuTWlzc2lvblwiKS51cGRhdGVGaWxsKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYgKHRoaXMuc3RlcCA9PSAzIHx8IHRoaXMuc3RlcCA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5vZGUuZ2V0Q29tcG9uZW50KFwiYnRuTWlzc2lvblwiKS51cGRhdGVGaWxsKClcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBjb3VudFN0YXJ0ID0gMFxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmExLm5vZGUuYWN0aXZlID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbWVyYTIubm9kZS5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5sb2dpYy5zY2FsZSA9IChsb2dpYykgPyAwLjM1IDogMC42O1xyXG4gICAgICAgIHRoaXMudHV0LnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjU7XHJcbiAgICAgICAgdGhpcy50dXQucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoLTI5Ny4yMywgLTExMDcuNDIzKSA6IGNjLnYzKC0xMjAwLCAtMTEwNy40MjMpO1xyXG4gICAgICAgIHRoaXMucGhhb2hvYS5zY2FsZSA9IChsb2dpYykgPyAxIDogMS41O1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxIDogMS4yO1xyXG4gICAgICAgIHRoaXMuYmFyU3Rhci5zY2FsZSA9IChsb2dpYykgPyAxIDogMS41XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxiU3RhcnQuc3RyaW5nID0gdGhpcy5jb3VudFN0YXJ0LnRvU3RyaW5nKClcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19