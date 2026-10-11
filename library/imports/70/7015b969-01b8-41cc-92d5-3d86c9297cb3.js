"use strict";
cc._RF.push(module, '7015blpAbhBzJLVPYbJKXyz', 'MR_4');
// scripts/KF_2/MR_4.ts

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
var JoyStick_1 = require("./JoyStick");
var Char_1 = require("./Char");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
globalThis.money = 20;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.joyStick = null;
        _this.handGuide = null;
        _this.char = null;
        _this.camera3D = null;
        _this.listKHPre = [];
        _this.shadow = null;
        _this.camera2D = null;
        _this.lbMoney = null;
        _this.soundBg = null;
        _this.soundUd = null;
        _this.soundPut = null;
        _this.linkToStore = null;
        // @property(cc.Node)
        // arrow1: cc.Node = null;
        // @property(cc.Node)
        // arrow2: cc.Node = null;
        // @property(cc.Node)
        // arrow4: cc.Node = null;
        _this.listArrow = null;
        _this.text = null;
        // @property(cc.Node)
        // banGhe1: cc.Node = null;
        // @property(cc.Node)
        // arrow3: cc.Node = null
        // @property(cc.Node)
        // arrow5: cc.Node = null
        _this.effMoney = null;
        // @property(cc.Node)
        // unlockNode1: cc.Node = null;
        _this.listBanGhe = null;
        _this.kh1 = null;
        _this.kh2 = null;
        _this.listKH = null;
        _this.endGame = null;
        _this.unlockNode = null;
        // LIFE-CYCLE CALLBACKS:
        _this.charComp = null;
        _this.isHorizontal = true;
        _this.isCutScene = false;
        _this.isStep = 1;
        _this.isvertical = false;
        _this.countMoney = 20;
        _this.arrKHMan = [];
        _this.arrKHpos = [[], [], []];
        _this.arrPosCus = [];
        _this.countUD = 0;
        return _this;
        // setScreenSize(isHorizontal) { // responsive game ngang doc
        //     let canvas = this.node.getComponent(cc.Canvas);
        //     this.joyStick.scale = (isHorizontal) ? 0.5 : 1.8;
        //     // this.btnContinue.children[0].scale = (isHorizontal) ? 0.25 : 0.6;
        //     // this.camera3D.zoomRatio = (isHorizontal) ? 2 : 1.5;
        //     // this.camera3D.node.eulerAngles = (isHorizontal) ? cc.v3(-43, 0, 0) : cc.v3(-46, 0, 0)
        //     // canvas.fitHeight = (isHorizontal) ? true : false;
        //     // canvas.fitWidth = (isHorizontal) ? false : true;
        // }
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.responsive();
    };
    NewClass.prototype.start = function () {
        this.charComp = this.char.getComponent(Char_1.default);
        cc.director.getPhysics3DManager().enabled = true;
        window.gameReady && window.gameReady();
        // let manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        cc.audioEngine.play(this.soundBg, true, 0.5);
        // this.scheduleOnce(() => {
        //     this.moveCam1()
        // }, 0.3)
        // this.createKh()
    };
    NewClass.prototype.createKh = function () {
        var _this = this;
        var firtPos = [cc.v3(-64, 3.5, 15), cc.v3(-61, 3.5, 15), cc.v3(-58, 3.5, 15)];
        var _loop_1 = function (i) {
            if (i % 2 != 0) {
                var _loop_2 = function (j) {
                    var rd = Math.floor(Math.random() * this_1.listKHPre.length);
                    var kh = cc.instantiate(this_1.listKHPre[rd]);
                    kh.parent = this_1.node.getChildByName("kh");
                    // let row = i % 3
                    var col = i;
                    kh.localpos = firtPos[j].add(cc.v3(0, 0, 3 * col));
                    kh.position = kh.localpos.add(cc.v3(0, 0, 10));
                    kh.children[0].getComponent(cc.Animation).play("Walk");
                    this_1.arrKHMan.push(kh);
                    // this.arrKHpos[row].push(kh.localpos)
                    this_1.arrPosCus.push(kh.localpos);
                    cc.tween(kh).to(1, { position: kh.localpos }).call(function () {
                        kh.children[0].getComponent(cc.Animation).play("Idle 1");
                        kh.getChildByName("pop").getComponent(cc.Animation).play("pop_show");
                    }).start();
                };
                for (var j = 2; j >= 0; j--) {
                    _loop_2(j);
                }
            }
            else {
                var _loop_3 = function (j) {
                    var rd = Math.floor(Math.random() * this_1.listKHPre.length);
                    var kh = cc.instantiate(this_1.listKHPre[rd]);
                    kh.parent = this_1.node.getChildByName("kh");
                    // let row = i % 3
                    var col = i;
                    kh.localpos = firtPos[j].add(cc.v3(0, 0, 3 * col));
                    kh.position = kh.localpos.add(cc.v3(0, 0, 10));
                    kh.children[0].getComponent(cc.Animation).play("Walk");
                    this_1.arrKHMan.push(kh);
                    // this.arrKHpos[row].push(kh.localpos)
                    this_1.arrPosCus.push(kh.localpos);
                    cc.tween(kh).to(1, { position: kh.localpos }).call(function () {
                        kh.children[0].getComponent(cc.Animation).play("Idle 1");
                        kh.getChildByName("pop").getComponent(cc.Animation).play("pop_show");
                        if (i == 2 && j == 2) {
                            _this.scheduleOnce(function () {
                                _this.phase1();
                            }, 0.5);
                        }
                    }).start();
                };
                for (var j = 0; j < 3; j++) {
                    _loop_3(j);
                }
            }
        };
        var this_1 = this;
        // for (let i = 0; i < 15; i++) {
        //     let rd = Math.floor(Math.random() * this.listKHPre.length)
        //     let kh = cc.instantiate(this.listKHPre[rd])
        //     kh.parent = this.node.getChildByName("kh")
        //     let row = i % 3
        //     let col = Math.floor(i / 3)
        //     kh.localpos = firtPos[row].add(cc.v3(0, 0, 3 * col))
        //     kh.position = kh.localpos.add(cc.v3(0, 0, 10))
        //     kh.children[0].getComponent(cc.Animation).play("Walk")
        //     this.arrKHMan.push(kh)
        //     this.arrKHpos[row].push(kh.localpos)
        //     this.arrPosCus.push(kh.localpos)
        //     cc.tween(kh).to(1, { position: kh.localpos }).call(() => {
        //         kh.children[0].getComponent(cc.Animation).play("Idle 1")
        //         kh.getChildByName("pop").getComponent(cc.Animation).play("pop_show")
        //         if (i == 14) {
        //             this.scheduleOnce(()=>{
        //                 this.phase1()
        //             },0.5)
        //         }
        //     }).start()
        // }
        for (var i = 0; i < 5; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.offGuild = function () {
        this.shadow.active = false;
        this.listArrow.children[0].active = true;
    };
    NewClass.prototype.stepEnd = function () {
        this.linkToStore.active = true;
        this.linkToStore.getComponent("AdManager").openAdUrl();
        this.joyStick.getComponent(JoyStick_1.default).touchEndEvent();
        this.joyStick.active = false;
    };
    NewClass.prototype.phase1 = function () {
        this.charComp.isCompleteCarry = false;
        this.joyStick.active = true;
        this.isCutScene = false;
        this.shadow.active = true;
        // console.log(localpos)
        // cc.tween(this.camera3D.node).to(0.5, { position: cc.v3(-65, 26, 13) }).delay(0.5).to(0.5, { position: localpos }).call(() => {
        // this.charComp.isCompleteCarry = false
        // this.joyStick.active = true
        // this.isCutScene = false
        // }).start()
    };
    // step1() {
    //     if (this.isStep == 1) {
    //         this.charComp.isCompleteCarry = true;
    //         this.arrow1.active = false;
    //         this.text.position = this.char.position
    //         this.text.getComponent(cc.Animation).play();
    //         this.arrow2.active = true;
    //         this.banGhe1.getComponent(cc.Animation).play("bo_showcash")
    //         // this.unlockNode1.getComponent(cc.Collider3D).enabled=false
    //         this.isStep = 2;
    //         this.scheduleOnce(() => {
    //             this.charComp.isCompleteCarry = false;
    //         }, 0.5)
    //     }
    //     else if (this.isStep == 4) {
    //         this.charComp.isCompleteCarry = true;
    //         this.countMoney -= 50;
    //         this.lbMoney.string = this.countMoney.toString()
    //         this.isStep = 5
    //         let pos = this.unlockNode1.position;
    //         pos = this.unlockNode1.parent.convertToWorldSpaceAR(pos);
    //         this.arrow2.active = true;
    //         this.charComp.transMoney(pos)
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundUd, false, 1);
    //             this.arrow1.active = false
    //             this.unlockNode1.active = false
    //             this.listBanGhe.children[1].active = true;
    //         })
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundUd, false, 1);
    //             this.listBanGhe.children[0].getComponent(cc.Animation).play("bo_showcash")
    //             // this.listBanGhe.children[1].getComponent(cc.Animation).play("bo_showcash")
    //             this.charComp.isCompleteCarry = false;
    //             // this.kh1.getComponent(cc.Animation).play()
    //             // this.kh1.getComponent("Customer").move()
    //             this.kh2.getComponent(cc.Animation).play()
    //             this.kh2.getComponent("Customer").move()
    //         }, 0.8)
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundUd, false, 1);
    //             this.listKH.getComponent(cc.Animation).play()
    //         }, 1)
    //     }
    // }
    // step2() {
    //     console.log("step2222", this.isStep)
    //     if (this.isStep == 2) {
    //         this.charComp.isCompleteCarry = true;
    //         cc.audioEngine.play(this.soundUd, false, 1);
    //         this.arrow2.active = false;
    //         this.banGhe1.getComponent(cc.Animation).play()
    //         this.isStep = 3
    //         // this.joyStick.getComponent(JoyStick).isCutScene=true
    //         // this.joyStick.getComponent(JoyStick).touchEndEvent()
    //         this.scheduleOnce(() => {
    //             this.arrow3.active = true;
    //             this.isCutScene = true
    //             this.isCutScene = true;
    //             let localpos = this.camera3D.node.position
    //             console.log(localpos)
    //             cc.tween(this.camera3D.node).to(0.5, { position: cc.v3(-61, 41, 42) }).delay(0.5).to(0.5, { position: localpos }).call(() => {
    //                 this.charComp.isCompleteCarry = false;
    //                 this.isCutScene = false
    //             }).start()
    //         }, 1)
    //     }
    //     else if (this.isStep == 5) {
    //         this.arrow2.active = false;
    //         // this.charComp.isCompleteCarry = true;
    //         cc.audioEngine.play(this.soundUd, false, 1);
    //         this.isStep = 6
    //         // this.arrow2.active = false;
    //         this.banGhe1.getComponent(cc.Animation).play();
    //         this.scheduleOnce(() => {
    //             this.arrow3.active = true
    //         })
    //     }
    // }
    NewClass.prototype.getMoney = function () {
        var _this = this;
        // this.arrKHMan[0].active = false
        this.countUD++;
        if (this.countUD == 4) {
            this.unlockNode.active = true;
            this.unlockNode.getComponent(cc.BoxCollider3D).enabled = true;
            this.unlockNode.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', this.unlockNode.getComponent(cc.Sprite)));
            this.node.getChildByName("arrowEnd").active = true;
            this.listArrow.active = false;
        }
        console.log("get money");
        this.charComp.isBanhMi = false;
        var childleave = this.arrKHMan[0];
        childleave.children[0].getComponent(cc.SkeletonAnimation).play("Walk");
        childleave.children[1].getComponent(cc.Animation).play("pop_close");
        childleave.eulerAngles = cc.v3(0, 90, 0);
        this.char.getComponent("Char").bag.active = false;
        cc.tween(this.arrKHMan[0]).by(0.5, { position: cc.v3(-5, 0, 0) }).set({ eulerAngles: cc.v3(0, 180, 0) }).by(2, { position: cc.v3(0, 0, 20) }).call(function () { childleave.active = false; }).start();
        var _loop_4 = function (i) {
            var pos = this_2.arrPosCus[i - 1];
            var child = this_2.arrKHMan[i];
            cc.tween(child).to(0.5, { position: pos }).call(function () {
                if (i == _this.arrKHMan.length - 1) {
                    _this.arrKHMan.splice(0, 1);
                }
                // child.getComponent("Char").idle()
            }).start();
        };
        var this_2 = this;
        for (var i = 1; i < this.arrKHMan.length; i++) {
            _loop_4(i);
        }
        cc.audioEngine.play(this.soundUd, false, 1);
        this.charComp.isCompleteCarry = true;
        this.effMoney.node.active = true;
        this.effMoney.getComponent(cc.Animation).play();
        // this.charComp.createMoney()
        this.scheduleOnce(function () {
            _this.countMoney += 8;
            console.log("dem money");
            _this.lbMoney.string = _this.countMoney.toString();
            // if (this.isStep == 4) {
            //     console.log("onnn")
            //     // this.arrow1.active = true;
            //     this.kh1.getComponent(cc.Animation).play()
            //     this.kh1.getComponent("Customer").move()
            // }
            // else {
            //     // this.arrow5.active = true
            //     this.scheduleOnce(() => {
            //         this.endGame.active = true;
            //         this.linkToStore.active = true
            //     }, 0.3)
            // }
            _this.charComp.isCompleteCarry = false;
        }, 0.5);
    };
    // transMoney(){
    // }
    NewClass.prototype.update = function (dt) {
        // this.camera3D.node.setPosition(this.char.position.add(cc.v3(0, 30, 26)).clampf(cc.v3(-9, 30, 38), cc.v3(9, 30, 30)));
        // if (!this.isCutScene) {
        //     this.camera3D.node.setPosition(this.char.position.add(cc.v3(0, 30 * 1.3, 26 * 1.3)));
        // }
        this.responsive();
    };
    NewClass.prototype.responsive = function () {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // this.fitCamera.zoomRatio = 0.8
                // this.mainCamera.zoomRatio = 0.7
                // this.mainCamera.node.position = this.mainCamera.node.position.add( cc.v3(-100, 0))
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.camera3D.zoomRatio = 1;
                // for (let child of this.uiFit.children) {
                //     child.scale = child.scale * 0.5;
                // }
                // this.uiFit.scaleX = 0.8
                // this.uiFit.scaleY = 0.8
            }
        }
        else {
            this.isvertical = false;
            this.camera3D.zoomRatio = 1.5;
            // this.uiFit.children[0].scale = 0.4
            // this.uiFit.children[1].scale = 1
            // this.fitCamera.zoomRatio = 1
            // this.mainCamera.zoomRatio = 1.3
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "joyStick", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handGuide", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera3D", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "listKHPre", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "shadow", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera2D", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbMoney", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listArrow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "effMoney", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBanGhe", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "kh1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "kh2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKH", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endGame", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "unlockNode", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();