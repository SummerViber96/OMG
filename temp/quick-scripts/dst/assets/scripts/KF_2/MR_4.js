
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcTVJfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBaUM7QUFDakMsK0JBQTBCO0FBSXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBRXRCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeVlDO1FBdllHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFnQixFQUFFLENBQUE7UUFFM0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFFN0IsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IscUJBQXFCO1FBQ3JCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIseUJBQXlCO1FBRXpCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBQzlCLHFCQUFxQjtRQUNyQiwrQkFBK0I7UUFFL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsU0FBRyxH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U0FBUyxDQUFDOzZDQUNLO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQVMzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFRckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUk5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQTNEVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeVk1QjtJQUFELGVBQUM7Q0F6WUQsQUF5WUMsQ0F6WXFDLEVBQUUsQ0FBQyxTQUFTLEdBeVlqRDtrQkF6WW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95U3RpY2sgZnJvbSAnLi9Kb3lTdGljaydcbmltcG9ydCBDaGFyIGZyb20gXCIuL0NoYXJcIjtcblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmdsb2JhbFRoaXMubW9uZXkgPSAyMDtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgam95U3RpY2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmRHdWlkZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBjYW1lcmEzRDogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGxpc3RLSFByZTogY2MuUHJlZmFiW10gPSBbXVxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNoYWRvdzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIGNhbWVyYTJEOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk1vbmV5OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFVkOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFB1dDogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gYXJyb3cxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBhcnJvdzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGFycm93NDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEFycm93OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXh0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBiYW5HaGUxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBhcnJvdzM6IGNjLk5vZGUgPSBudWxsXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gYXJyb3c1OiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgZWZmTW9uZXk6IGNjLkFuaW1hdGlvbiA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gdW5sb2NrTm9kZTE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RCYW5HaGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2gxOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGtoMjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0S0g6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZEdhbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVubG9ja05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGNoYXJDb21wID0gbnVsbDtcbiAgICBpc0hvcml6b250YWwgPSB0cnVlO1xuICAgIGlzQ3V0U2NlbmUgPSBmYWxzZTtcbiAgICBpc1N0ZXAgPSAxO1xuICAgIGlzdmVydGljYWwgPSBmYWxzZTtcbiAgICBjb3VudE1vbmV5ID0gMjA7XG4gICAgYXJyS0hNYW4gPSBbXVxuICAgIGFycktIcG9zID0gW1tdLCBbXSwgW11dXG4gICAgYXJyUG9zQ3VzID0gW11cbiAgICBjb3VudFVEID0gMFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlKCk7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5jaGFyQ29tcCA9IHRoaXMuY2hhci5nZXRDb21wb25lbnQoQ2hhcik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3MzRE1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG4gICAgICAgIC8vIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KTtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5tb3ZlQ2FtMSgpXG4gICAgICAgIC8vIH0sIDAuMylcbiAgICAgICAgLy8gdGhpcy5jcmVhdGVLaCgpXG4gICAgfVxuICAgIGNyZWF0ZUtoKCkge1xuICAgICAgICBsZXQgZmlydFBvcyA9IFtjYy52MygtNjQsIDMuNSwgMTUpLCBjYy52MygtNjEsIDMuNSwgMTUpLCBjYy52MygtNTgsIDMuNSwgMTUpXVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICAgICAgLy8gICAgIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEtIUHJlLmxlbmd0aClcbiAgICAgICAgLy8gICAgIGxldCBraCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEtIUHJlW3JkXSlcbiAgICAgICAgLy8gICAgIGtoLnBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImtoXCIpXG4gICAgICAgIC8vICAgICBsZXQgcm93ID0gaSAlIDNcbiAgICAgICAgLy8gICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKGkgLyAzKVxuICAgICAgICAvLyAgICAga2gubG9jYWxwb3MgPSBmaXJ0UG9zW3Jvd10uYWRkKGNjLnYzKDAsIDAsIDMgKiBjb2wpKVxuICAgICAgICAvLyAgICAga2gucG9zaXRpb24gPSBraC5sb2NhbHBvcy5hZGQoY2MudjMoMCwgMCwgMTApKVxuICAgICAgICAvLyAgICAga2guY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIldhbGtcIilcbiAgICAgICAgLy8gICAgIHRoaXMuYXJyS0hNYW4ucHVzaChraClcbiAgICAgICAgLy8gICAgIHRoaXMuYXJyS0hwb3Nbcm93XS5wdXNoKGtoLmxvY2FscG9zKVxuICAgICAgICAvLyAgICAgdGhpcy5hcnJQb3NDdXMucHVzaChraC5sb2NhbHBvcylcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKGtoKS50bygxLCB7IHBvc2l0aW9uOiBraC5sb2NhbHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSWRsZSAxXCIpXG4gICAgICAgIC8vICAgICAgICAga2guZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvcF9zaG93XCIpXG4gICAgICAgIC8vICAgICAgICAgaWYgKGkgPT0gMTQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMucGhhc2UxKClcblxuICAgICAgICAvLyAgICAgICAgICAgICB9LDAuNSlcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KS5zdGFydCgpXG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSAlIDIgIT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAyOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RLSFByZS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGxldCBraCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEtIUHJlW3JkXSlcbiAgICAgICAgICAgICAgICAgICAga2gucGFyZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwia2hcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHJvdyA9IGkgJSAzXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2wgPSBpXG4gICAgICAgICAgICAgICAgICAgIGtoLmxvY2FscG9zID0gZmlydFBvc1tqXS5hZGQoY2MudjMoMCwgMCwgMyAqIGNvbCkpXG4gICAgICAgICAgICAgICAgICAgIGtoLnBvc2l0aW9uID0ga2gubG9jYWxwb3MuYWRkKGNjLnYzKDAsIDAsIDEwKSlcbiAgICAgICAgICAgICAgICAgICAga2guY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIldhbGtcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJLSE1hbi5wdXNoKGtoKVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFycktIcG9zW3Jvd10ucHVzaChraC5sb2NhbHBvcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJQb3NDdXMucHVzaChraC5sb2NhbHBvcylcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oa2gpLnRvKDEsIHsgcG9zaXRpb246IGtoLmxvY2FscG9zIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2guY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIklkbGUgMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAga2guZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvcF9zaG93XCIpXG5cbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEtIUHJlLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtoID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0S0hQcmVbcmRdKVxuICAgICAgICAgICAgICAgICAgICBraC5wYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJraFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgcm93ID0gaSAlIDNcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbCA9IGlcbiAgICAgICAgICAgICAgICAgICAga2gubG9jYWxwb3MgPSBmaXJ0UG9zW2pdLmFkZChjYy52MygwLCAwLCAzICogY29sKSlcbiAgICAgICAgICAgICAgICAgICAga2gucG9zaXRpb24gPSBraC5sb2NhbHBvcy5hZGQoY2MudjMoMCwgMCwgMTApKVxuICAgICAgICAgICAgICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiV2Fsa1wiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycktITWFuLnB1c2goa2gpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYXJyS0hwb3Nbcm93XS5wdXNoKGtoLmxvY2FscG9zKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclBvc0N1cy5wdXNoKGtoLmxvY2FscG9zKVxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihraCkudG8oMSwgeyBwb3NpdGlvbjoga2gubG9jYWxwb3MgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBraC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSWRsZSAxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBraC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX3Nob3dcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDIgJiYgaiA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlMSgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2ZmR3VpbGQoKSB7XG4gICAgICAgIHRoaXMuc2hhZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpc3RBcnJvdy5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgfVxuICAgIHN0ZXBFbmQoKSB7XG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmdldENvbXBvbmVudChcIkFkTWFuYWdlclwiKS5vcGVuQWRVcmwoKVxuICAgICAgICB0aGlzLmpveVN0aWNrLmdldENvbXBvbmVudChKb3lTdGljaykudG91Y2hFbmRFdmVudCgpXG4gICAgICAgIHRoaXMuam95U3RpY2suYWN0aXZlID0gZmFsc2VcbiAgICB9XG4gICAgcGhhc2UxKCkge1xuICAgICAgICB0aGlzLmNoYXJDb21wLmlzQ29tcGxldGVDYXJyeSA9IGZhbHNlXG4gICAgICAgIHRoaXMuam95U3RpY2suYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzQ3V0U2NlbmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnNoYWRvdy5hY3RpdmUgPSB0cnVlXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FscG9zKVxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYTNELm5vZGUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTY1LCAyNiwgMTMpIH0pLmRlbGF5KDAuNSkudG8oMC41LCB7IHBvc2l0aW9uOiBsb2NhbHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZVxuICAgICAgICAvLyB0aGlzLmpveVN0aWNrLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgLy8gdGhpcy5pc0N1dFNjZW5lID0gZmFsc2VcbiAgICAgICAgLy8gfSkuc3RhcnQoKVxuICAgIH1cbiAgICAvLyBzdGVwMSgpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNTdGVwID09IDEpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyb3cxLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgdGhpcy50ZXh0LnBvc2l0aW9uID0gdGhpcy5jaGFyLnBvc2l0aW9uXG4gICAgLy8gICAgICAgICB0aGlzLnRleHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgIC8vICAgICAgICAgdGhpcy5hcnJvdzIuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuYmFuR2hlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9fc2hvd2Nhc2hcIilcbiAgICAvLyAgICAgICAgIC8vIHRoaXMudW5sb2NrTm9kZTEuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyM0QpLmVuYWJsZWQ9ZmFsc2VcbiAgICAvLyAgICAgICAgIHRoaXMuaXNTdGVwID0gMjtcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNoYXJDb21wLmlzQ29tcGxldGVDYXJyeSA9IGZhbHNlO1xuXG4gICAgLy8gICAgICAgICB9LCAwLjUpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gNCkge1xuICAgIC8vICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSB0cnVlO1xuICAgIC8vICAgICAgICAgdGhpcy5jb3VudE1vbmV5IC09IDUwO1xuICAgIC8vICAgICAgICAgdGhpcy5sYk1vbmV5LnN0cmluZyA9IHRoaXMuY291bnRNb25leS50b1N0cmluZygpXG4gICAgLy8gICAgICAgICB0aGlzLmlzU3RlcCA9IDVcbiAgICAvLyAgICAgICAgIGxldCBwb3MgPSB0aGlzLnVubG9ja05vZGUxLnBvc2l0aW9uO1xuICAgIC8vICAgICAgICAgcG9zID0gdGhpcy51bmxvY2tOb2RlMS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcyk7XG4gICAgLy8gICAgICAgICB0aGlzLmFycm93Mi5hY3RpdmUgPSB0cnVlO1xuXG4gICAgLy8gICAgICAgICB0aGlzLmNoYXJDb21wLnRyYW5zTW9uZXkocG9zKVxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSk7XG5cbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFycm93MS5hY3RpdmUgPSBmYWxzZVxuICAgIC8vICAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZTEuYWN0aXZlID0gZmFsc2VcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxpc3RCYW5HaGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKTtcblxuICAgIC8vICAgICAgICAgICAgIHRoaXMubGlzdEJhbkdoZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9fc2hvd2Nhc2hcIilcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmxpc3RCYW5HaGUuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImJvX3Nob3djYXNoXCIpXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmtoMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmtoMS5nZXRDb21wb25lbnQoXCJDdXN0b21lclwiKS5tb3ZlKClcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmtoMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmtoMi5nZXRDb21wb25lbnQoXCJDdXN0b21lclwiKS5tb3ZlKClcbiAgICAvLyAgICAgICAgIH0sIDAuOClcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMubGlzdEtILmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgIC8vICAgICAgICAgfSwgMSlcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuICAgIC8vIHN0ZXAyKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInN0ZXAyMjIyXCIsIHRoaXMuaXNTdGVwKVxuICAgIC8vICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xuICAgIC8vICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSB0cnVlO1xuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKTtcblxuICAgIC8vICAgICAgICAgdGhpcy5hcnJvdzIuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICB0aGlzLmJhbkdoZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgLy8gICAgICAgICB0aGlzLmlzU3RlcCA9IDNcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuam95U3RpY2suZ2V0Q29tcG9uZW50KEpveVN0aWNrKS5pc0N1dFNjZW5lPXRydWVcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuam95U3RpY2suZ2V0Q29tcG9uZW50KEpveVN0aWNrKS50b3VjaEVuZEV2ZW50KClcblxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJvdzMuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQ3V0U2NlbmUgPSB0cnVlXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0N1dFNjZW5lID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICBsZXQgbG9jYWxwb3MgPSB0aGlzLmNhbWVyYTNELm5vZGUucG9zaXRpb25cbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbHBvcylcbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTNELm5vZGUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTYxLCA0MSwgNDIpIH0pLmRlbGF5KDAuNSkudG8oMC41LCB7IHBvc2l0aW9uOiBsb2NhbHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc0N1dFNjZW5lID0gZmFsc2VcbiAgICAvLyAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgLy8gICAgICAgICB9LCAxKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDUpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyb3cyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmNoYXJDb21wLmlzQ29tcGxldGVDYXJyeSA9IHRydWU7XG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpO1xuICAgIC8vICAgICAgICAgdGhpcy5pc1N0ZXAgPSA2XG4gICAgLy8gICAgICAgICAvLyB0aGlzLmFycm93Mi5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMuYmFuR2hlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJvdzMuYWN0aXZlID0gdHJ1ZVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuICAgIGdldE1vbmV5KCkge1xuICAgICAgICAvLyB0aGlzLmFycktITWFuWzBdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuY291bnRVRCsrXG4gICAgICAgIGlmICh0aGlzLmNvdW50VUQgPT0gNCkge1xuICAgICAgICAgICAgdGhpcy51bmxvY2tOb2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMudW5sb2NrTm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIzRCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVubG9ja05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCAgdGhpcy51bmxvY2tOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd0VuZFwiKS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmxpc3RBcnJvdy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IG1vbmV5XCIpXG4gICAgICAgIHRoaXMuY2hhckNvbXAuaXNCYW5oTWkgPSBmYWxzZVxuICAgICAgICBsZXQgY2hpbGRsZWF2ZSA9IHRoaXMuYXJyS0hNYW5bMF1cbiAgICAgICAgY2hpbGRsZWF2ZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU2tlbGV0b25BbmltYXRpb24pLnBsYXkoXCJXYWxrXCIpXG4gICAgICAgIGNoaWxkbGVhdmUuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvcF9jbG9zZVwiKVxuICAgICAgICBjaGlsZGxlYXZlLmV1bGVyQW5nbGVzID0gY2MudjMoMCwgOTAsIDApXG4gICAgICAgIHRoaXMuY2hhci5nZXRDb21wb25lbnQoXCJDaGFyXCIpLmJhZy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBjYy50d2Vlbih0aGlzLmFycktITWFuWzBdKS5ieSgwLjUsIHsgcG9zaXRpb246IGNjLnYzKC01LCAwLCAwKSB9KS5zZXQoeyBldWxlckFuZ2xlczogY2MudjMoMCwgMTgwLCAwKSB9KS5ieSgyLCB7IHBvc2l0aW9uOiBjYy52MygwLCAwLCAyMCkgfSkuY2FsbCgoKSA9PiB7IGNoaWxkbGVhdmUuYWN0aXZlID0gZmFsc2UgfSkuc3RhcnQoKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5hcnJLSE1hbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYXJyUG9zQ3VzW2kgLSAxXVxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJLSE1hbltpXVxuXG4gICAgICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC41LCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5hcnJLSE1hbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyS0hNYW4uc3BsaWNlKDAsIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNoaWxkLmdldENvbXBvbmVudChcIkNoYXJcIikuaWRsZSgpXG5cbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSk7XG4gICAgICAgIHRoaXMuY2hhckNvbXAuaXNDb21wbGV0ZUNhcnJ5ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmVmZk1vbmV5Lm5vZGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmVmZk1vbmV5LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAvLyB0aGlzLmNoYXJDb21wLmNyZWF0ZU1vbmV5KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb3VudE1vbmV5ICs9IDg7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbSBtb25leVwiKVxuICAgICAgICAgICAgdGhpcy5sYk1vbmV5LnN0cmluZyA9IHRoaXMuY291bnRNb25leS50b1N0cmluZygpO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNTdGVwID09IDQpIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIm9ubm5cIilcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmFycm93MS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMua2gxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgLy8gICAgIHRoaXMua2gxLmdldENvbXBvbmVudChcIkN1c3RvbWVyXCIpLm1vdmUoKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5hcnJvdzUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5lbmRHYW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgICAgICAvLyAgICAgfSwgMC4zKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5jaGFyQ29tcC5pc0NvbXBsZXRlQ2FycnkgPSBmYWxzZTtcblxuICAgICAgICB9LCAwLjUpXG5cbiAgICB9XG5cbiAgICAvLyB0cmFuc01vbmV5KCl7XG5cbiAgICAvLyB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vIHRoaXMuY2FtZXJhM0Qubm9kZS5zZXRQb3NpdGlvbih0aGlzLmNoYXIucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwLCAyNikpLmNsYW1wZihjYy52MygtOSwgMzAsIDM4KSwgY2MudjMoOSwgMzAsIDMwKSkpO1xuICAgICAgICAvLyBpZiAoIXRoaXMuaXNDdXRTY2VuZSkge1xuICAgICAgICAvLyAgICAgdGhpcy5jYW1lcmEzRC5ub2RlLnNldFBvc2l0aW9uKHRoaXMuY2hhci5wb3NpdGlvbi5hZGQoY2MudjMoMCwgMzAgKiAxLjMsIDI2ICogMS4zKSkpO1xuXG4gICAgICAgIC8vIH1cblxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcbiAgICB9XG4gICAgcmVzcG9uc2l2ZSgpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5maXRDYW1lcmEuem9vbVJhdGlvID0gMC44XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDAuN1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uID0gdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24uYWRkKCBjYy52MygtMTAwLCAwKSlcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYTNELnpvb21SYXRpbz0xXG5cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLnVpRml0LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkLnNjYWxlID0gY2hpbGQuc2NhbGUgKiAwLjU7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuc2NhbGVYID0gMC44XG4gICAgICAgICAgICAgICAgLy8gdGhpcy51aUZpdC5zY2FsZVkgPSAwLjhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYTNELnpvb21SYXRpbz0xLjVcbiAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuY2hpbGRyZW5bMF0uc2NhbGUgPSAwLjRcbiAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuY2hpbGRyZW5bMV0uc2NhbGUgPSAxXG5cbiAgICAgICAgICAgIC8vIHRoaXMuZml0Q2FtZXJhLnpvb21SYXRpbyA9IDFcbiAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAxLjNcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIHNldFNjcmVlblNpemUoaXNIb3Jpem9udGFsKSB7IC8vIHJlc3BvbnNpdmUgZ2FtZSBuZ2FuZyBkb2NcbiAgICAvLyAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAvLyAgICAgdGhpcy5qb3lTdGljay5zY2FsZSA9IChpc0hvcml6b250YWwpID8gMC41IDogMS44O1xuICAgIC8vICAgICAvLyB0aGlzLmJ0bkNvbnRpbnVlLmNoaWxkcmVuWzBdLnNjYWxlID0gKGlzSG9yaXpvbnRhbCkgPyAwLjI1IDogMC42O1xuICAgIC8vICAgICAvLyB0aGlzLmNhbWVyYTNELnpvb21SYXRpbyA9IChpc0hvcml6b250YWwpID8gMiA6IDEuNTtcbiAgICAvLyAgICAgLy8gdGhpcy5jYW1lcmEzRC5ub2RlLmV1bGVyQW5nbGVzID0gKGlzSG9yaXpvbnRhbCkgPyBjYy52MygtNDMsIDAsIDApIDogY2MudjMoLTQ2LCAwLCAwKVxuICAgIC8vICAgICAvLyBjYW52YXMuZml0SGVpZ2h0ID0gKGlzSG9yaXpvbnRhbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgLy8gICAgIC8vIGNhbnZhcy5maXRXaWR0aCA9IChpc0hvcml6b250YWwpID8gZmFsc2UgOiB0cnVlO1xuICAgIC8vIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19