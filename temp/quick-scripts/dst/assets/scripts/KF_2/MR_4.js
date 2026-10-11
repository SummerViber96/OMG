
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/KF_2/MR_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcTVJfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBaUM7QUFDakMsK0JBQTBCO0FBSXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBRXRCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeVlDO1FBdllHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFnQixFQUFFLENBQUE7UUFFM0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFFN0IsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IscUJBQXFCO1FBQ3JCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIseUJBQXlCO1FBRXpCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBQzlCLHFCQUFxQjtRQUNyQiwrQkFBK0I7UUFFL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsU0FBRyxH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U0FBUyxDQUFDOzZDQUNLO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQVMzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFRckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUk5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQTNEVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeVk1QjtJQUFELGVBQUM7Q0F6WUQsQUF5WUMsQ0F6WXFDLEVBQUUsQ0FBQyxTQUFTLEdBeVlqRDtrQkF6WW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95U3RpY2sgZnJvbSAnLi9Kb3lTdGljaydcclxuaW1wb3J0IENoYXIgZnJvbSBcIi4vQ2hhclwiO1xyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMubW9uZXkgPSAyMDtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBqb3lTdGljazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmRHdWlkZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTNEOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxpc3RLSFByZTogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzaGFkb3c6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmEyRDogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTW9uZXk6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRVZDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kUHV0OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gYXJyb3cxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gYXJyb3cyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gYXJyb3c0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEFycm93OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGJhbkdoZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBhcnJvdzM6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGFycm93NTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBlZmZNb25leTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gdW5sb2NrTm9kZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0QmFuR2hlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGtoMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2gyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0S0g6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRHYW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdW5sb2NrTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGNoYXJDb21wID0gbnVsbDtcclxuICAgIGlzSG9yaXpvbnRhbCA9IHRydWU7XHJcbiAgICBpc0N1dFNjZW5lID0gZmFsc2U7XHJcbiAgICBpc1N0ZXAgPSAxO1xyXG4gICAgaXN2ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgY291bnRNb25leSA9IDIwO1xyXG4gICAgYXJyS0hNYW4gPSBbXVxyXG4gICAgYXJyS0hwb3MgPSBbW10sIFtdLCBbXV1cclxuICAgIGFyclBvc0N1cyA9IFtdXHJcbiAgICBjb3VudFVEID0gMFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmNoYXJDb21wID0gdGhpcy5jaGFyLmdldENvbXBvbmVudChDaGFyKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzM0RNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgLy8gbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubW92ZUNhbTEoKVxyXG4gICAgICAgIC8vIH0sIDAuMylcclxuICAgICAgICAvLyB0aGlzLmNyZWF0ZUtoKClcclxuICAgIH1cclxuICAgIGNyZWF0ZUtoKCkge1xyXG4gICAgICAgIGxldCBmaXJ0UG9zID0gW2NjLnYzKC02NCwgMy41LCAxNSksIGNjLnYzKC02MSwgMy41LCAxNSksIGNjLnYzKC01OCwgMy41LCAxNSldXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEtIUHJlLmxlbmd0aClcclxuICAgICAgICAvLyAgICAgbGV0IGtoID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0S0hQcmVbcmRdKVxyXG4gICAgICAgIC8vICAgICBraC5wYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJraFwiKVxyXG4gICAgICAgIC8vICAgICBsZXQgcm93ID0gaSAlIDNcclxuICAgICAgICAvLyAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoaSAvIDMpXHJcbiAgICAgICAgLy8gICAgIGtoLmxvY2FscG9zID0gZmlydFBvc1tyb3ddLmFkZChjYy52MygwLCAwLCAzICogY29sKSlcclxuICAgICAgICAvLyAgICAga2gucG9zaXRpb24gPSBraC5sb2NhbHBvcy5hZGQoY2MudjMoMCwgMCwgMTApKVxyXG4gICAgICAgIC8vICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiV2Fsa1wiKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmFycktITWFuLnB1c2goa2gpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYXJyS0hwb3Nbcm93XS5wdXNoKGtoLmxvY2FscG9zKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmFyclBvc0N1cy5wdXNoKGtoLmxvY2FscG9zKVxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbihraCkudG8oMSwgeyBwb3NpdGlvbjoga2gubG9jYWxwb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSWRsZSAxXCIpXHJcbiAgICAgICAgLy8gICAgICAgICBraC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX3Nob3dcIilcclxuICAgICAgICAvLyAgICAgICAgIGlmIChpID09IDE0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5waGFzZTEoKVxyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB9LDAuNSlcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpICUgMiAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMjsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RLSFByZS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtoID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0S0hQcmVbcmRdKVxyXG4gICAgICAgICAgICAgICAgICAgIGtoLnBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImtoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHJvdyA9IGkgJSAzXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbCA9IGlcclxuICAgICAgICAgICAgICAgICAgICBraC5sb2NhbHBvcyA9IGZpcnRQb3Nbal0uYWRkKGNjLnYzKDAsIDAsIDMgKiBjb2wpKVxyXG4gICAgICAgICAgICAgICAgICAgIGtoLnBvc2l0aW9uID0ga2gubG9jYWxwb3MuYWRkKGNjLnYzKDAsIDAsIDEwKSlcclxuICAgICAgICAgICAgICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiV2Fsa1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyS0hNYW4ucHVzaChraClcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFycktIcG9zW3Jvd10ucHVzaChraC5sb2NhbHBvcylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclBvc0N1cy5wdXNoKGtoLmxvY2FscG9zKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGtoKS50bygxLCB7IHBvc2l0aW9uOiBraC5sb2NhbHBvcyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2guY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIklkbGUgMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBraC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX3Nob3dcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RLSFByZS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtoID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0S0hQcmVbcmRdKVxyXG4gICAgICAgICAgICAgICAgICAgIGtoLnBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImtoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHJvdyA9IGkgJSAzXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbCA9IGlcclxuICAgICAgICAgICAgICAgICAgICBraC5sb2NhbHBvcyA9IGZpcnRQb3Nbal0uYWRkKGNjLnYzKDAsIDAsIDMgKiBjb2wpKVxyXG4gICAgICAgICAgICAgICAgICAgIGtoLnBvc2l0aW9uID0ga2gubG9jYWxwb3MuYWRkKGNjLnYzKDAsIDAsIDEwKSlcclxuICAgICAgICAgICAgICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiV2Fsa1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyS0hNYW4ucHVzaChraClcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFycktIcG9zW3Jvd10ucHVzaChraC5sb2NhbHBvcylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclBvc0N1cy5wdXNoKGtoLmxvY2FscG9zKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGtoKS50bygxLCB7IHBvc2l0aW9uOiBraC5sb2NhbHBvcyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2guY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIklkbGUgMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBraC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX3Nob3dcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMiAmJiBqID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlMSgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb2ZmR3VpbGQoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0QXJyb3cuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc3RlcEVuZCgpIHtcclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmdldENvbXBvbmVudChcIkFkTWFuYWdlclwiKS5vcGVuQWRVcmwoKVxyXG4gICAgICAgIHRoaXMuam95U3RpY2suZ2V0Q29tcG9uZW50KEpveVN0aWNrKS50b3VjaEVuZEV2ZW50KClcclxuICAgICAgICB0aGlzLmpveVN0aWNrLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBwaGFzZTEoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuam95U3RpY2suYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaXNDdXRTY2VuZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FscG9zKVxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhM0Qubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNjUsIDI2LCAxMykgfSkuZGVsYXkoMC41KS50bygwLjUsIHsgcG9zaXRpb246IGxvY2FscG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gZmFsc2VcclxuICAgICAgICAvLyB0aGlzLmpveVN0aWNrLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyB0aGlzLmlzQ3V0U2NlbmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIC8vIHN0ZXAxKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJvdzEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudGV4dC5wb3NpdGlvbiA9IHRoaXMuY2hhci5wb3NpdGlvblxyXG4gICAgLy8gICAgICAgICB0aGlzLnRleHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFycm93Mi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmJhbkdoZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImJvX3Nob3djYXNoXCIpXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMudW5sb2NrTm9kZTEuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyM0QpLmVuYWJsZWQ9ZmFsc2VcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1N0ZXAgPSAyO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNoYXJDb21wLmlzQ29tcGxldGVDYXJyeSA9IGZhbHNlO1xyXG5cclxuICAgIC8vICAgICAgICAgfSwgMC41KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSA0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5jb3VudE1vbmV5IC09IDUwO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxiTW9uZXkuc3RyaW5nID0gdGhpcy5jb3VudE1vbmV5LnRvU3RyaW5nKClcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1N0ZXAgPSA1XHJcbiAgICAvLyAgICAgICAgIGxldCBwb3MgPSB0aGlzLnVubG9ja05vZGUxLnBvc2l0aW9uO1xyXG4gICAgLy8gICAgICAgICBwb3MgPSB0aGlzLnVubG9ja05vZGUxLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJvdzIuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2hhckNvbXAudHJhbnNNb25leShwb3MpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJvdzEuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZTEuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubGlzdEJhbkdoZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubGlzdEJhbkdoZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9fc2hvd2Nhc2hcIilcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMubGlzdEJhbkdoZS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9fc2hvd2Nhc2hcIilcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmtoMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMua2gxLmdldENvbXBvbmVudChcIkN1c3RvbWVyXCIpLm1vdmUoKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5raDIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmtoMi5nZXRDb21wb25lbnQoXCJDdXN0b21lclwiKS5tb3ZlKClcclxuICAgIC8vICAgICAgICAgfSwgMC44KVxyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5saXN0S0guZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgIH0sIDEpXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIHN0ZXAyKCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwic3RlcDIyMjJcIiwgdGhpcy5pc1N0ZXApXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNTdGVwID09IDIpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJvdzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYmFuR2hlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1N0ZXAgPSAzXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuam95U3RpY2suZ2V0Q29tcG9uZW50KEpveVN0aWNrKS5pc0N1dFNjZW5lPXRydWVcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5qb3lTdGljay5nZXRDb21wb25lbnQoSm95U3RpY2spLnRvdWNoRW5kRXZlbnQoKVxyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXJyb3czLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQ3V0U2NlbmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQ3V0U2NlbmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGxvY2FscG9zID0gdGhpcy5jYW1lcmEzRC5ub2RlLnBvc2l0aW9uXHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbHBvcylcclxuICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhM0Qubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNjEsIDQxLCA0MikgfSkuZGVsYXkoMC41KS50bygwLjUsIHsgcG9zaXRpb246IGxvY2FscG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc0N1dFNjZW5lID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgfSwgMSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gNSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFycm93Mi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1N0ZXAgPSA2XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuYXJyb3cyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmJhbkdoZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFycm93My5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH1cclxuICAgIGdldE1vbmV5KCkge1xyXG4gICAgICAgIC8vIHRoaXMuYXJyS0hNYW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNvdW50VUQrK1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50VUQgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnVubG9ja05vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnVubG9ja05vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyM0QpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVubG9ja05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCAgdGhpcy51bmxvY2tOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImFycm93RW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saXN0QXJyb3cuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXQgbW9uZXlcIilcclxuICAgICAgICB0aGlzLmNoYXJDb21wLmlzQmFuaE1pID0gZmFsc2VcclxuICAgICAgICBsZXQgY2hpbGRsZWF2ZSA9IHRoaXMuYXJyS0hNYW5bMF1cclxuICAgICAgICBjaGlsZGxlYXZlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Ta2VsZXRvbkFuaW1hdGlvbikucGxheShcIldhbGtcIilcclxuICAgICAgICBjaGlsZGxlYXZlLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJwb3BfY2xvc2VcIilcclxuICAgICAgICBjaGlsZGxlYXZlLmV1bGVyQW5nbGVzID0gY2MudjMoMCwgOTAsIDApXHJcbiAgICAgICAgdGhpcy5jaGFyLmdldENvbXBvbmVudChcIkNoYXJcIikuYmFnLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5hcnJLSE1hblswXSkuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNSwgMCwgMCkgfSkuc2V0KHsgZXVsZXJBbmdsZXM6IGNjLnYzKDAsIDE4MCwgMCkgfSkuYnkoMiwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMjApIH0pLmNhbGwoKCkgPT4geyBjaGlsZGxlYXZlLmFjdGl2ZSA9IGZhbHNlIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmFycktITWFuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmFyclBvc0N1c1tpIC0gMV1cclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJLSE1hbltpXVxyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuNSwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5hcnJLSE1hbi5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJLSE1hbi5zcGxpY2UoMCwgMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNoaWxkLmdldENvbXBvbmVudChcIkNoYXJcIikuaWRsZSgpXHJcblxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5lZmZNb25leS5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmVmZk1vbmV5LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIC8vIHRoaXMuY2hhckNvbXAuY3JlYXRlTW9uZXkoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudE1vbmV5ICs9IDg7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVtIG1vbmV5XCIpXHJcbiAgICAgICAgICAgIHRoaXMubGJNb25leS5zdHJpbmcgPSB0aGlzLmNvdW50TW9uZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNTdGVwID09IDQpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwib25ublwiKVxyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5hcnJvdzEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMua2gxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5raDEuZ2V0Q29tcG9uZW50KFwiQ3VzdG9tZXJcIikubW92ZSgpXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmFycm93NS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5lbmRHYW1lLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHJhbnNNb25leSgpe1xyXG5cclxuICAgIC8vIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhM0Qubm9kZS5zZXRQb3NpdGlvbih0aGlzLmNoYXIucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwLCAyNikpLmNsYW1wZihjYy52MygtOSwgMzAsIDM4KSwgY2MudjMoOSwgMzAsIDMwKSkpO1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5pc0N1dFNjZW5lKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhM0Qubm9kZS5zZXRQb3NpdGlvbih0aGlzLmNoYXIucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwICogMS4zLCAyNiAqIDEuMykpKTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcclxuICAgIH1cclxuICAgIHJlc3BvbnNpdmUoKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLndpblNpemUud2lkdGggPCBjYy53aW5TaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZml0Q2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDAuN1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24gPSB0aGlzLm1haW5DYW1lcmEubm9kZS5wb3NpdGlvbi5hZGQoIGNjLnYzKC0xMDAsIDApKVxyXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhM0Quem9vbVJhdGlvPTFcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLnVpRml0LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGQuc2NhbGUgPSBjaGlsZC5zY2FsZSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuc2NhbGVYID0gMC44XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVpRml0LnNjYWxlWSA9IDAuOFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhM0Quem9vbVJhdGlvPTEuNVxyXG4gICAgICAgICAgICAvLyB0aGlzLnVpRml0LmNoaWxkcmVuWzBdLnNjYWxlID0gMC40XHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuY2hpbGRyZW5bMV0uc2NhbGUgPSAxXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmZpdENhbWVyYS56b29tUmF0aW8gPSAxXHJcbiAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAxLjNcclxuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy8gc2V0U2NyZWVuU2l6ZShpc0hvcml6b250YWwpIHsgLy8gcmVzcG9uc2l2ZSBnYW1lIG5nYW5nIGRvY1xyXG4gICAgLy8gICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAvLyAgICAgdGhpcy5qb3lTdGljay5zY2FsZSA9IChpc0hvcml6b250YWwpID8gMC41IDogMS44O1xyXG4gICAgLy8gICAgIC8vIHRoaXMuYnRuQ29udGludWUuY2hpbGRyZW5bMF0uc2NhbGUgPSAoaXNIb3Jpem9udGFsKSA/IDAuMjUgOiAwLjY7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5jYW1lcmEzRC56b29tUmF0aW8gPSAoaXNIb3Jpem9udGFsKSA/IDIgOiAxLjU7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5jYW1lcmEzRC5ub2RlLmV1bGVyQW5nbGVzID0gKGlzSG9yaXpvbnRhbCkgPyBjYy52MygtNDMsIDAsIDApIDogY2MudjMoLTQ2LCAwLCAwKVxyXG4gICAgLy8gICAgIC8vIGNhbnZhcy5maXRIZWlnaHQgPSAoaXNIb3Jpem9udGFsKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIC8vICAgICAvLyBjYW52YXMuZml0V2lkdGggPSAoaXNIb3Jpem9udGFsKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIC8vIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19