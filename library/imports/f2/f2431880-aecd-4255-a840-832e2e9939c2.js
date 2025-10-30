"use strict";
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