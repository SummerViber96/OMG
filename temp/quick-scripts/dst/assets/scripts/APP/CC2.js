
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/CC2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '006034IWPVP7qZ4XOg11AcG', 'CC2');
// scripts/APP/CC2.ts

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
        _this.soundShowPop = null;
        _this.soundYouCant = null;
        _this.soundBg = null;
        _this.soundWin = null;
        _this.soundLose = null;
        _this.soundNoDau = null;
        _this.tut = null;
        _this.hand = null;
        _this.endCard = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.logo = null;
        _this.listCus = null;
        _this.soundChesse = null;
        _this.soundWrong = null;
        _this.soundOpen = null;
        _this.soundCherry = null;
        _this.soundNo = null;
        _this.fxColor = null;
        _this.cus = null;
        _this.xitKem = null;
        _this.xitHong = null;
        _this.listHand = null;
        _this.cakeNode = null;
        _this.cakeMain = null;
        _this.cakeMain2 = null;
        _this.btnXitHong = null;
        _this.btnXitKem = null;
        _this.cherry = null;
        _this.btnCherry = null;
        _this.cusComp = null;
        _this.cake = null;
        // @property(cc.AudioClip)
        // soundBg:cc.AudioClip=null;
        _this.isCake = false;
        _this.isTargetPop = null;
        _this.isTargetCus = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.isTang = 1;
        _this.isKem = 0;
        _this.isKem2 = 0;
        _this.isTut = 0;
        _this.idSound = null;
        _this.isCountCake = 0;
        _this.isDelayHong = false;
        _this.isDelayKem = false;
        _this.isPhase2 = false;
        _this.isPhase3 = false;
        // btn_xitKem() {
        //     if (!this.isCake) return
        //     if (this.isDelayKem) return;
        //     if (this.isTang == 1) {
        //         if (this.isKem == 0) {
        //             this.listHand.children[1].active = false
        //             this.scheduleOnce(() => {
        //                 this.listHand.children[0].active = true
        //             }, 0.4)
        //             this.isTut = 3
        //             this.scheduleOnce(() => {
        //                 this.cake.getComponent("cake2").xitkem()
        //                 this.isPhase2 = false;
        //                 this.isPhase3 = true
        //             }, 0.5)
        //             this.isKem = 1
        //         }
        //         else {
        //             return;
        //         }
        //     }
        //     else {
        //         if (this.isKem2 == 0) {
        //             this.isTut = 5
        //             this.scheduleOnce(() => {
        //                 this.cake.getComponent("cake2").xitkem()
        //                 this.isKem2Qua = true
        //                 this.listHand.children[2].active = false
        //                 this.listHand.children[3].active = true
        //             }, 0.5)
        //             this.isKem = 3
        //         }
        //         else {
        //             return;
        //         }
        //     }
        //     cc.audioEngine.play(this.soundChesse, false, 1)
        //     this.isDelayKem = true;
        //     this.xitKem.getComponent(cc.Animation).play();
        //     this.xitKem.zIndex = 1
        //     this.scheduleOnce(() => {
        //         this.xitKem.position = cc.v3(271.958, -373.765)
        //         this.isDelayKem = false;
        //         this.scheduleOnce(() => {
        //             if (this.isTut == 3) {
        //                 this.cakeNode.getComponent("cake").tutOnPlate()
        //             }
        //         }, 5)
        //         if (this.isTut == 5) {
        //             this.scheduleOnce(() => {
        //                 if (this.isTut == 5) {
        //                     this.btn_qua()
        //                 }
        //             }, 5)
        //         }
        //     }, 0.5)
        // }
        _this.isKem2Qua = null;
        _this.arrHotDog = [null, null, null, null, null, null];
        _this.arrBreak = [null, null, null];
        _this.arrTuongCa = [];
        _this.isDelaytuong = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.cusComp = this.cus.getComponent("cusMission");
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.showCus();
        cc.audioEngine.play(this.soundBg, true, 0.3);
        this.listHand.zIndex = 5;
        // this.scheduleOnce(() => {
        //     if (this.isTut == 0) {
        //         this.btn_cake()
        //     }
        // }, 5)
    };
    NewClass.prototype.setTut2 = function () {
        this.isTut = 2;
        // this.scheduleOnce(() => {
        //     console.log(this.isTut)
        //     if (this.isTut == 2) {
        //         this.btn_xitHong()
        //     }
        // }, 5)
    };
    NewClass.prototype.btn_cake = function () {
        var _this = this;
        this.cakeMain.getComponent(cc.Button).enabled = false;
        if (this.isPhase3 == true) {
            this.isTang = 2;
            this.listHand.children[2].active = true;
        }
        else {
            this.listHand.children[1].active = true;
            this.setTut2();
        }
        this.cakeMain.getComponent(cc.Animation).play("cake_spaw1");
        this.isTang = 2;
        this.cusComp.happy();
        this.isCake = true;
        this.isPhase2 = true;
        this.listHand.children[0].active = false;
        this.scheduleOnce(function () {
            _this.cakeMain2.active = true;
        }, 2);
    };
    NewClass.prototype.btm_cake2 = function () {
        var _this = this;
        this.isTut = 4;
        this.listHand.children[0].active = false;
        this.cakeMain2.getComponent(cc.Button).enabled = false;
        this.cakeMain.getComponent(cc.Animation).play("cake_3");
        cc.audioEngine.play(this.soundYouCant, false, 1);
        this.listCus.children[0].children[0].getComponent(cc.Animation).play();
        var child = this.listCus.children[0].children[1].getComponent(sp.Skeleton).setAnimation(0, "angry", true);
        this.scheduleOnce(function () {
            _this.listHand.children[2].active = true;
            _this.btnXitKem.getComponent(cc.Button).enabled = true;
        }, 1);
        // this.scheduleOnce(() => {
        //     if (this.isTut == 4) {
        //         this.btn_xitKem()
        //     }
        // }, 5)
    };
    NewClass.prototype.btn_cherry = function () {
        var _this = this;
        cc.audioEngine.play(this.soundNoDau, false, 1);
        cc.audioEngine.play(this.soundCherry, false, 1);
        this.btnCherry.getComponent(cc.Button).enabled = false;
        this.cherry.getComponent(cc.Animation).play();
        this.listCus.children[0].children[0].getComponent(cc.Animation).play();
        this.isTut = 6;
        this.listHand.children[3].active = false;
        this.scheduleOnce(function () {
            _this.onEndGame();
        }, 2);
    };
    NewClass.prototype.btn_xitHong = function () {
        var _this = this;
        cc.audioEngine.stop(this.idSound);
        cc.audioEngine.play(this.soundNo, false, 1);
        this.listCus.children[0].children[1].getComponent(sp.Skeleton).setAnimation(0, "walk-angry", true);
        this.btnXitHong.getComponent(cc.Button).enabled = false;
        cc.audioEngine.play(this.soundChesse, false, 1);
        this.cakeMain.getComponent(cc.Animation).play("cake_2");
        this.listHand.children[1].active = false;
        this.scheduleOnce(function () {
            _this.listHand.children[0].active = true;
        }, 1);
        this.isTut = 3;
        // this.scheduleOnce(() => {
        //     if (this.isTut == 3) {
        //         this.btm_cake2()
        //     }
        // }, 5)
    };
    NewClass.prototype.btn_xitKem = function () {
        var _this = this;
        cc.audioEngine.play(this.soundWrong, false, 1);
        this.btnXitKem.getComponent(cc.Button).enabled = false;
        cc.audioEngine.play(this.soundChesse, false, 1);
        this.cakeMain.getComponent(cc.Animation).play("cake_4");
        this.listHand.children[2].active = false;
        this.scheduleOnce(function () {
            _this.listHand.children[3].active = true;
        }, 1);
        this.isTut = 5;
        this.btnCherry.getComponent(cc.Button).enabled = true;
        // this.scheduleOnce(() => {
        //     if (this.isTut == 5) {
        //         // this.btm_cake2()
        //         this.btn_cherry()
        //     }
        // }, 5)
    };
    // btn_xitHong() {
    //     if (!this.isCake) return
    //     if (this.isDelayHong) return;
    //     if (this.isTang == 1) {
    //         if (this.isKem == 0) {
    //             this.listHand.children[1].active = false
    //             this.isTut = 3
    //             this.scheduleOnce(() => {
    //                 this.listHand.children[0].active = true
    //             }, 0.4)
    //             this.scheduleOnce(() => {
    //                 this.cake.getComponent("cake2").xitHong()
    //                 this.isPhase2 = false
    //                 this.isPhase3 = true
    //             }, 0.4)
    //             this.isKem = 1
    //         }
    //         else {
    //             return;
    //         }
    //         this.cakeMain.getComponent(cc.Animation).play("cake2");
    //     }
    //     else {
    //         if (this.isKem2 == 0) {
    //             // console.log(this.cake)
    //             this.listHand.children[2].active = false
    //             this.listHand.children[3].active = true
    //             this.isTut = 5
    //             this.scheduleOnce(() => {
    //                 this.cake.getComponent("cake2").xitHong()
    //                 this.isKem2Qua = false
    //             }, 0.5)
    //             this.isKem = 3
    //         }
    //         else {
    //             return;
    //         }
    //     }
    //     cc.audioEngine.play(this.soundChesse, false, 1)
    //     this.isDelayHong = true;
    //     this.xitHong.getComponent(cc.Animation).play();
    //     this.xitHong.zIndex = 1
    //     this.scheduleOnce(() => {
    //         this.xitHong.position = cc.v3(-271.664, -373.904)
    //         this.isDelayHong = false;
    //         this.scheduleOnce(() => {
    //             if (this.isTut == 3) {
    //                 this.cakeNode.getComponent("cake").tutOnPlate()
    //             }
    //         }, 5)
    //         if (this.isTut == 5) {
    //             this.scheduleOnce(() => {
    //                 if (this.isTut == 5) {
    //                     this.btn_qua()
    //                 }
    //             }, 5)
    //         }
    //     }, 0.4)
    // }
    NewClass.prototype.setTut4 = function () {
        this.isTut = 4;
        // this.scheduleOnce(() => {
        //     if (this.isTut == 4) {
        //         this.btn_xitKem()
        //     }
        // }, 5)
    };
    NewClass.prototype.btn_qua = function () {
        var _this = this;
        if (this.isKem2Qua == null)
            return;
        this.isTut = 6;
        this.listHand.children[3].active = false;
        if (this.isKem2Qua) {
            this.cake.getComponent("cake2").xitQuaKem();
        }
        else {
            this.cake.getComponent("cake2").xitQua();
        }
        this.scheduleOnce(function () {
            _this.onEndGame();
        }, 1);
    };
    NewClass.prototype.showCus = function () {
        var _this = this;
        var child = this.listCus.children[0];
        child.position = cc.v3(-700, -50);
        cc.tween(child).to(0.8, { position: cc.v3(0, -50) }).call(function () {
            _this.idSound = cc.audioEngine.play(_this.soundOpen, false, 1);
            child.getChildByName("pop").active = true;
            _this.isTargetPop = child.getChildByName("pop");
            _this.isTargetCus = child;
            _this.listHand.children[0].active = true;
            // this.scheduleOnce(() => {
            //     cc.audioEngine.play(this.soundShowPop, false, 1)
            // }, 0.1)
        }).start();
    };
    NewClass.prototype.successCus = function () {
        this.isTargetCus = null;
        this.isTargetPop = null;
    };
    NewClass.prototype.creatFxColor = function (pos, scale) {
        var pre = cc.instantiate(this.fxColor);
        pre.parent = this.node;
        pre.position = pos;
        pre.scale = scale;
    };
    NewClass.prototype.nextCus = function () {
        var _this = this;
        this.countCus++;
        if (this.countCus == 3) {
            this.onEndGame();
        }
        else {
            var child_1 = this.listCus.children[this.countCus];
            child_1.position = cc.v3(700, 123.591);
            child_1.active = true;
            cc.tween(child_1).to(0.8, { position: cc.v3(0, 123.591) }).call(function () {
                child_1.getChildByName("pop").active = true;
                _this.isTargetPop = child_1.getChildByName("pop");
                _this.isTargetCus = child_1;
                _this.scheduleOnce(function () {
                    cc.audioEngine.play(_this.soundShowPop, false, 1);
                }, 0.1);
            }).start();
        }
    };
    NewClass.prototype.btn_hotDog = function (event) {
        var _this = this;
        // if (this.arrHotDog.length >= 6) return;
        var check = this.checkSlotHotDog();
        console.log(check);
        if (check == null)
            return;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        this.listHand.children[0].opacity = 0;
        this.scheduleOnce(function () {
            _this.listHand.children[1].active = true;
        }, 0.5);
        var dem = this.arrHotDog.length;
        var hotDog = cc.instantiate(this.preHotDog);
        console.log(this.listChao);
        hotDog.parent = this.listChao.children[check];
        hotDog.position = cc.v3(0, 0);
        hotDog.getComponent("hotdog").value = check;
        this.arrHotDog[check] = hotDog;
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
    };
    NewClass.prototype.checkSlotHotDog = function () {
        for (var i = 0; i < this.arrHotDog.length; i++) {
            if (this.arrHotDog[i] == null)
                return i;
        }
        return null;
    };
    NewClass.prototype.checkSlotBread = function () {
        for (var i = 0; i < this.arrBreak.length; i++) {
            if (this.arrBreak[i] == null)
                return i;
        }
        return null;
    };
    NewClass.prototype.btn_bread = function (event) {
        var _this = this;
        // if (this.arrBreak.length >= 3) return;
        // let dem = this.arrBreak.length
        var check = this.checkSlotBread();
        if (check == null)
            return;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        var bread = cc.instantiate(this.preBread);
        bread.parent = this.listKhayBanhMi.children[check];
        bread.position = cc.v3(0, 0);
        bread.getComponent("preBread").value = check;
        this.arrBreak[check] = bread;
        this.listHand.children[1].opacity = 0;
        this.scheduleOnce(function () {
            _this.listHand.children[2].active = true;
        }, 0.5);
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
    };
    NewClass.prototype.sellBread = function (value) {
        var _this = this;
        // console.log(value)
        if (this.isTargetCus == null)
            return;
        if (this.isTargetPop == null)
            return;
        this.listHand.children[4].opacity = 0;
        var child = this.arrBreak[value];
        this.arrBreak[value] = null;
        var posEnd = this.isTargetPop.position;
        posEnd = this.isTargetPop.parent.convertToWorldSpaceAR(posEnd);
        posEnd = child.parent.convertToNodeSpaceAR(posEnd);
        var pos = child.parent.convertToWorldSpaceAR(child.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        cc.tween(child).to(0.4, { position: posEnd.add(cc.v3(50, 0)), scale: 0.7 }).call(function () {
            child.opacity = 0;
            _this.isTargetCus.getComponent("cusMission").checkBread(child);
        }).start();
        this.creatFxColor(pos, 1.5);
    };
    NewClass.prototype.btn_tuongCa = function () {
        var _this = this;
        if (this.isDelaytuong)
            return;
        if (this.arrBreak.length <= 0)
            return;
        var bread = this.checkTuongCa();
        if (bread == null)
            return;
        this.isDelaytuong = true;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        this.listHand.children[3].opacity = 0;
        this.scheduleOnce(function () {
            _this.listHand.children[4].active = true;
        }, 1);
        var posStart = bread.position.add(cc.v3(40, 150));
        posStart = bread.parent.convertToWorldSpaceAR(posStart);
        posStart = this.node.convertToNodeSpaceAR(posStart);
        var posEnd = this.tuongOt.position;
        var posMid = cc.v2((posStart.x + posEnd.x) / 2, (posStart.y + posEnd.y) / 2 + 100);
        this.tuongOt.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            bread.getComponent("preBread").getTuongCa();
            cc.audioEngine.play(_this.soundChesse, false, 1);
        }, 0.25);
        cc.tween(this.tuongOt).bezierTo(0.5, cc.v2(posEnd.x, posEnd.y), cc.v2(posMid.x, posMid.y), cc.v2(posStart.x, posStart.y)).call(function () {
        }).delay(0.2).call(function () {
            _this.tuongOt.position = posEnd;
            _this.tuongOt.children[0].angle = 0;
            _this.isDelaytuong = false;
        }).start();
    };
    NewClass.prototype.checkTuongCa = function () {
        for (var i = 0; i < this.arrBreak.length; i++) {
            var chld = this.arrBreak[i];
            if (chld != null && chld.getComponent("preBread").isHotDog == true && chld.getComponent("preBread").isTuongCa == false) {
                return chld;
            }
        }
        return null;
    };
    NewClass.prototype.clickHotDog = function (value, node) {
        var _this = this;
        if (this.arrBreak.length <= 0)
            return;
        var child = this.checkBread();
        if (child == null)
            return;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        this.listHand.children[2].opacity = 0;
        this.scheduleOnce(function () {
            _this.listHand.children[3].active = true;
        }, 0.5);
        this.arrHotDog[value] = null;
        child.getComponent("preBread").getHotDog();
        var pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        node.opacity = 0;
        this.scheduleOnce(function () {
            node.destroy();
        }, 0.1);
        this.creatFxColor(pos, 1.5);
    };
    NewClass.prototype.checkBread = function () {
        for (var i = 0; i < this.arrBreak.length; i++) {
            var chld = this.arrBreak[i];
            if (chld != null && chld.getComponent("preBread").isHotDog == false) {
                return chld;
            }
        }
        return null;
    };
    NewClass.prototype.onEndGame = function () {
        cc.audioEngine.play(this.soundLose, false, 1);
        this.endCard.active = true;
        this.linkToStore.active = true;
    };
    // btn_choose(event, value) {
    //     console.log(value)
    //     switch (value) {
    //         case "0":
    //             this.hand.active = false
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             // this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(1)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             // this.hand.active = true
    //             break;
    //         case "1":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(2)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "2":
    //             this.sceneGun.position = cc.v3(3000, 0)
    //             this.sceneGun.active = true
    //             this.sceneGun.getComponent("mainGun").loadData(1)
    //             this.sceneGun.getComponent(cc.Animation).play()
    //             this.sceneMain.active = false
    //             break;
    //         case "3":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(3)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "4":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(4)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "5":
    //             this.sceneGun.position = cc.v3(3000, 0)
    //             this.sceneGun.active = true
    //             this.sceneGun.getComponent("mainGun").loadData(2)
    //             this.sceneGun.getComponent(cc.Animation).play()
    //             this.sceneMain.active = false
    //             break;
    //     }
    // }
    NewClass.prototype.update = function (dt) {
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1.05;
        this.endCard.scale = (logic) ? 1.2 : 0.7;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        if (logic == true) {
            this.camera.node.position = cc.v3(0, 100);
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 2.5;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                console.log("check iphonex");
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.8;
            }
        }
        else {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            this.camera.node.position = cc.v3(0, -30);
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.95;
            }
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundShowPop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundYouCant", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundLose", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundNoDau", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tut", void 0);
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
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCus", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChesse", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundOpen", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCherry", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundNo", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "fxColor", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cus", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "xitKem", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "xitHong", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cakeNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cakeMain", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cakeMain2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnXitHong", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnXitKem", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cherry", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnCherry", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxDQzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1cUJDO1FBcnFCRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsa0JBQVksR0FBaUIsSUFBSSxDQUFBO1FBRWpDLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGVBQVMsR0FBaUIsSUFBSSxDQUFBO1FBRTlCLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMs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UyxDQUFDOytDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDSztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQTdEVCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdXFCNUI7SUFBRCxlQUFDO0NBdnFCRCxBQXVxQkMsQ0F2cUJxQyxFQUFFLENBQUMsU0FBUyxHQXVxQmpEO2tCQXZxQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kWW91Q2FudDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmROb0RhdTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoZXNzZTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE9wZW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoZXJyeTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTm86IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBmeENvbG9yOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGN1czogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHhpdEtlbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHhpdEhvbmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNha2VOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FrZU1haW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYWtlTWFpbjI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5YaXRIb25nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuWGl0S2VtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hlcnJ5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQ2hlcnJ5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGN1c0NvbXAgPSBudWxsXHJcbiAgICBjYWtlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZEJnOmNjLkF1ZGlvQ2xpcD1udWxsO1xyXG4gICAgaXNDYWtlID0gZmFsc2VcclxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcclxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIGlzVGFuZyA9IDE7XHJcbiAgICBpc0tlbSA9IDA7XHJcbiAgICBpc0tlbTIgPSAwO1xyXG4gICAgaXNUdXQgPSAwXHJcbiAgICBpZFNvdW5kID0gbnVsbFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXNDb21wID0gdGhpcy5jdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKVxyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dDdXMoKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjMpXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC56SW5kZXggPSA1XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pc1R1dCA9PSAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJ0bl9jYWtlKClcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sIDUpXHJcbiAgICB9XHJcbiAgICBzZXRUdXQyKCkge1xyXG4gICAgICAgIHRoaXMuaXNUdXQgPSAyXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmlzVHV0KVxyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pc1R1dCA9PSAyKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJ0bl94aXRIb25nKClcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyB9LCA1KVxyXG4gICAgfVxyXG4gICAgaXNDb3VudENha2UgPSAwXHJcbiAgICBidG5fY2FrZSgpIHtcclxuICAgICAgICB0aGlzLmNha2VNYWluLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmlzUGhhc2UzID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhbmcgPSAyXHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnNldFR1dDIoKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWtlTWFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FrZV9zcGF3MVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1RhbmcgPSAyXHJcbiAgICAgICAgdGhpcy5jdXNDb21wLmhhcHB5KClcclxuICAgICAgICB0aGlzLmlzQ2FrZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1BoYXNlMiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWtlTWFpbjIuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9LCAyKVxyXG5cclxuICAgIH1cclxuICAgIGJ0bV9jYWtlMigpIHtcclxuICAgICAgICB0aGlzLmlzVHV0ID0gNDtcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMuY2FrZU1haW4yLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG5cclxuICAgICAgICB0aGlzLmNha2VNYWluLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYWtlXzNcIik7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kWW91Q2FudCwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5saXN0Q3VzLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdEN1cy5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuZ3J5XCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5idG5YaXRLZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaXNUdXQgPT0gNCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5idG5feGl0S2VtKClcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sIDUpXHJcblxyXG4gICAgfVxyXG4gICAgYnRuX2NoZXJyeSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmROb0RhdSwgZmFsc2UsIDEpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hlcnJ5LCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmJ0bkNoZXJyeS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNoZXJyeS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgdGhpcy5saXN0Q3VzLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG5cclxuICAgICAgICB0aGlzLmlzVHV0ID0gNlxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKClcclxuXHJcbiAgICAgICAgfSwgMilcclxuXHJcbiAgICB9XHJcbiAgICBpc0RlbGF5SG9uZyA9IGZhbHNlXHJcbiAgICBidG5feGl0SG9uZygpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZClcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRObywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5saXN0Q3VzLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwid2Fsay1hbmdyeVwiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuYnRuWGl0SG9uZy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGVzc2UsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuY2FrZU1haW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNha2VfMlwiKTtcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuaXNUdXQgPSAzXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pc1R1dCA9PSAzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJ0bV9jYWtlMigpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LCA1KVxyXG4gICAgfVxyXG4gICAgYnRuX3hpdEtlbSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuYnRuWGl0S2VtLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoZXNzZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5jYWtlTWFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FrZV80XCIpO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5pc1R1dCA9IDVcclxuICAgICAgICB0aGlzLmJ0bkNoZXJyeS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaXNUdXQgPT0gNSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5idG1fY2FrZTIoKVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5idG5fY2hlcnJ5KClcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sIDUpXHJcbiAgICB9XHJcbiAgICAvLyBidG5feGl0SG9uZygpIHtcclxuICAgIC8vICAgICBpZiAoIXRoaXMuaXNDYWtlKSByZXR1cm5cclxuICAgIC8vICAgICBpZiAodGhpcy5pc0RlbGF5SG9uZykgcmV0dXJuO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzVGFuZyA9PSAxKSB7XHJcblxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5pc0tlbSA9PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzVHV0ID0gM1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIH0sIDAuNClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNha2UuZ2V0Q29tcG9uZW50KFwiY2FrZTJcIikueGl0SG9uZygpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc1BoYXNlMiA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc1BoYXNlMyA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9LCAwLjQpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzS2VtID0gMVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2FrZU1haW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNha2UyXCIpO1xyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzS2VtMiA9PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNha2UpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNUdXQgPSA1XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2FrZS5nZXRDb21wb25lbnQoXCJjYWtlMlwiKS54aXRIb25nKClcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmlzS2VtMlF1YSA9IGZhbHNlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0tlbSA9IDNcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGVzc2UsIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICB0aGlzLmlzRGVsYXlIb25nID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLnhpdEhvbmcuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgIHRoaXMueGl0SG9uZy56SW5kZXggPSAxXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnhpdEhvbmcucG9zaXRpb24gPSBjYy52MygtMjcxLjY2NCwgLTM3My45MDQpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNEZWxheUhvbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXQgPT0gMykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2FrZU5vZGUuZ2V0Q29tcG9uZW50KFwiY2FrZVwiKS50dXRPblBsYXRlKClcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSwgNSlcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuaXNUdXQgPT0gNSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVHV0ID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5fcXVhKClcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9LCA1KVxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgIH0sIDAuNClcclxuICAgIC8vIH1cclxuICAgIHNldFR1dDQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1R1dCA9IDQ7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pc1R1dCA9PSA0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJ0bl94aXRLZW0oKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSwgNSlcclxuICAgIH1cclxuICAgIGlzRGVsYXlLZW0gPSBmYWxzZVxyXG4gICAgaXNQaGFzZTIgPSBmYWxzZVxyXG4gICAgaXNQaGFzZTMgPSBmYWxzZVxyXG4gICAgLy8gYnRuX3hpdEtlbSgpIHtcclxuICAgIC8vICAgICBpZiAoIXRoaXMuaXNDYWtlKSByZXR1cm5cclxuXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNEZWxheUtlbSkgcmV0dXJuO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzVGFuZyA9PSAxKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzS2VtID09IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9LCAwLjQpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzVHV0ID0gM1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNha2UuZ2V0Q29tcG9uZW50KFwiY2FrZTJcIikueGl0a2VtKClcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmlzUGhhc2UyID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc1BoYXNlMyA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzS2VtID0gMVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5pc0tlbTIgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc1R1dCA9IDVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jYWtlLmdldENvbXBvbmVudChcImNha2UyXCIpLnhpdGtlbSgpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc0tlbTJRdWEgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0tlbSA9IDNcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hlc3NlLCBmYWxzZSwgMSlcclxuXHJcbiAgICAvLyAgICAgdGhpcy5pc0RlbGF5S2VtID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLnhpdEtlbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAvLyAgICAgdGhpcy54aXRLZW0uekluZGV4ID0gMVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy54aXRLZW0ucG9zaXRpb24gPSBjYy52MygyNzEuOTU4LCAtMzczLjc2NSlcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0RlbGF5S2VtID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmlzVHV0ID09IDMpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNha2VOb2RlLmdldENvbXBvbmVudChcImNha2VcIikudHV0T25QbGF0ZSgpXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0sIDUpXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzVHV0ID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1R1dCA9PSA1KSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuX3F1YSgpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSwgNSlcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0sIDAuNSlcclxuICAgIC8vIH1cclxuICAgIGlzS2VtMlF1YSA9IG51bGxcclxuICAgIGJ0bl9xdWEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNLZW0yUXVhID09IG51bGwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzVHV0ID0gNlxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNLZW0yUXVhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FrZS5nZXRDb21wb25lbnQoXCJjYWtlMlwiKS54aXRRdWFLZW0oKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYWtlLmdldENvbXBvbmVudChcImNha2UyXCIpLnhpdFF1YSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUoKVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcbiAgICBzaG93Q3VzKCkge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdEN1cy5jaGlsZHJlblswXVxyXG4gICAgICAgIGNoaWxkLnBvc2l0aW9uID0gY2MudjMoLTcwMCwgLTUwKVxyXG4gICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDAsIC01MCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZE9wZW4sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRQb3AgPSBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gY2hpbGQ7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIC8vIH0sIDAuMSlcclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgfVxyXG4gICAgc3VjY2Vzc0N1cygpIHtcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0UG9wID0gbnVsbDtcclxuXHJcbiAgICB9XHJcbiAgICBjcmVhdEZ4Q29sb3IocG9zLCBzY2FsZSkge1xyXG4gICAgICAgIGxldCBwcmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZ4Q29sb3IpXHJcbiAgICAgICAgcHJlLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgIHByZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIHByZS5zY2FsZSA9IHNjYWxlXHJcbiAgICB9XHJcbiAgICBuZXh0Q3VzKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRDdXMrK1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuY291bnRDdXNdXHJcbiAgICAgICAgICAgIGNoaWxkLnBvc2l0aW9uID0gY2MudjMoNzAwLCAxMjMuNTkxKVxyXG4gICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDAsIDEyMy41OTEpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldFBvcCA9IGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMC4xKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGFyckhvdERvZyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXTtcclxuICAgIGFyckJyZWFrID0gW251bGwsIG51bGwsIG51bGxdO1xyXG4gICAgYXJyVHVvbmdDYSA9IFtdXHJcbiAgICBidG5faG90RG9nKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYXJySG90RG9nLmxlbmd0aCA+PSA2KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja1Nsb3RIb3REb2coKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrKVxyXG4gICAgICAgIGlmIChjaGVjayA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgbGV0IGRlbSA9IHRoaXMuYXJySG90RG9nLmxlbmd0aFxyXG4gICAgICAgIGxldCBob3REb2cgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUhvdERvZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0Q2hhbylcclxuICAgICAgICBob3REb2cucGFyZW50ID0gdGhpcy5saXN0Q2hhby5jaGlsZHJlbltjaGVja107XHJcbiAgICAgICAgaG90RG9nLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICBob3REb2cuZ2V0Q29tcG9uZW50KFwiaG90ZG9nXCIpLnZhbHVlID0gY2hlY2tcclxuICAgICAgICB0aGlzLmFyckhvdERvZ1tjaGVja10gPSBob3REb2dcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuY3VycmVudFRhcmdldC5wb3NpdGlvblxyXG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcywgMilcclxuXHJcbiAgICB9XHJcbiAgICBjaGVja1Nsb3RIb3REb2coKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckhvdERvZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJIb3REb2dbaV0gPT0gbnVsbCkgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNoZWNrU2xvdEJyZWFkKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJCcmVhay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJCcmVha1tpXSA9PSBudWxsKSByZXR1cm4gaVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgYnRuX2JyZWFkKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYXJyQnJlYWsubGVuZ3RoID49IDMpIHJldHVybjtcclxuICAgICAgICAvLyBsZXQgZGVtID0gdGhpcy5hcnJCcmVhay5sZW5ndGhcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrU2xvdEJyZWFkKClcclxuICAgICAgICBpZiAoY2hlY2sgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBsZXQgYnJlYWQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUJyZWFkKTtcclxuICAgICAgICBicmVhZC5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5QmFuaE1pLmNoaWxkcmVuW2NoZWNrXTtcclxuICAgICAgICBicmVhZC5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgYnJlYWQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIikudmFsdWUgPSBjaGVja1xyXG4gICAgICAgIHRoaXMuYXJyQnJlYWtbY2hlY2tdID0gYnJlYWRcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLCAyKVxyXG5cclxuICAgIH1cclxuICAgIHNlbGxCcmVhZCh2YWx1ZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldFBvcCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls0XS5vcGFjaXR5ID0gMFxyXG5cclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckJyZWFrW3ZhbHVlXTtcclxuICAgICAgICB0aGlzLmFyckJyZWFrW3ZhbHVlXSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuaXNUYXJnZXRQb3AucG9zaXRpb25cclxuICAgICAgICBwb3NFbmQgPSB0aGlzLmlzVGFyZ2V0UG9wLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zRW5kKVxyXG4gICAgICAgIHBvc0VuZCA9IGNoaWxkLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NFbmQpXHJcbiAgICAgICAgbGV0IHBvcyA9IGNoaWxkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hpbGQucG9zaXRpb24pO1xyXG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuNCwgeyBwb3NpdGlvbjogcG9zRW5kLmFkZChjYy52Myg1MCwgMCkpLCBzY2FsZTogMC43IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5vcGFjaXR5ID0gMFxyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuY2hlY2tCcmVhZChjaGlsZClcclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcywgMS41KVxyXG4gICAgfVxyXG4gICAgaXNEZWxheXR1b25nID0gZmFsc2VcclxuICAgIGJ0bl90dW9uZ0NhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsYXl0dW9uZykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmFyckJyZWFrLmxlbmd0aCA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGJyZWFkID0gdGhpcy5jaGVja1R1b25nQ2EoKTtcclxuICAgICAgICBpZiAoYnJlYWQgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNEZWxheXR1b25nID0gdHJ1ZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIGxldCBwb3NTdGFydCA9IGJyZWFkLnBvc2l0aW9uLmFkZChjYy52Myg0MCwgMTUwKSk7XHJcbiAgICAgICAgcG9zU3RhcnQgPSBicmVhZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc1N0YXJ0KTtcclxuICAgICAgICBwb3NTdGFydCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NTdGFydClcclxuICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy50dW9uZ090LnBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHBvc01pZCA9IGNjLnYyKChwb3NTdGFydC54ICsgcG9zRW5kLngpIC8gMiwgKHBvc1N0YXJ0LnkgKyBwb3NFbmQueSkgLyAyICsgMTAwKVxyXG4gICAgICAgIHRoaXMudHVvbmdPdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJyZWFkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLmdldFR1b25nQ2EoKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGVzc2UsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB9LCAwLjI1KVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudHVvbmdPdCkuYmV6aWVyVG8oMC41LCBjYy52Mihwb3NFbmQueCwgcG9zRW5kLnkpLCBjYy52Mihwb3NNaWQueCwgcG9zTWlkLnkpLCBjYy52Mihwb3NTdGFydC54LCBwb3NTdGFydC55KSkuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgIH0pLmRlbGF5KDAuMikuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHVvbmdPdC5wb3NpdGlvbiA9IHBvc0VuZFxyXG4gICAgICAgICAgICB0aGlzLnR1b25nT3QuY2hpbGRyZW5bMF0uYW5nbGUgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWxheXR1b25nID0gZmFsc2VcclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tUdW9uZ0NhKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJCcmVhay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hsZCA9IHRoaXMuYXJyQnJlYWtbaV1cclxuICAgICAgICAgICAgaWYgKGNobGQgIT0gbnVsbCAmJiBjaGxkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLmlzSG90RG9nID09IHRydWUgJiYgY2hsZC5nZXRDb21wb25lbnQoXCJwcmVCcmVhZFwiKS5pc1R1b25nQ2EgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGxkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjbGlja0hvdERvZyh2YWx1ZSwgbm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFyckJyZWFrLmxlbmd0aCA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGVja0JyZWFkKClcclxuICAgICAgICBpZiAoY2hpbGQgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0ub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5hcnJIb3REb2dbdmFsdWVdID0gbnVsbFxyXG4gICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLmdldEhvdERvZygpXHJcbiAgICAgICAgbGV0IHBvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDBcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmRlc3Ryb3koKVxyXG5cclxuICAgICAgICB9LCAwLjEpXHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcywgMS41KVxyXG4gICAgfVxyXG4gICAgY2hlY2tCcmVhZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQnJlYWsubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNobGQgPSB0aGlzLmFyckJyZWFrW2ldXHJcbiAgICAgICAgICAgIGlmIChjaGxkICE9IG51bGwgJiYgY2hsZC5nZXRDb21wb25lbnQoXCJwcmVCcmVhZFwiKS5pc0hvdERvZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNobGRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgb25FbmRHYW1lKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvc2UsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2Nob29zZShldmVudCwgdmFsdWUpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIC8vICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuc2NlbmVNdXNpYy5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KFwibWFpbk11c2ljXCIpLmxvYWREYXRhKDEpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KFwibWFpbk11c2ljXCIpLmxvYWREYXRhKDIpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4ucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLmdldENvbXBvbmVudChcIm1haW5HdW5cIikubG9hZERhdGEoMSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTWFpbi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KFwibWFpbk11c2ljXCIpLmxvYWREYXRhKDMpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5wb3NpdGlvbiA9IGNjLnYzKDMwMDAsIDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoXCJtYWluTXVzaWNcIikubG9hZERhdGEoNClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5wb3NpdGlvbiA9IGNjLnYzKDMwMDAsIDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4uZ2V0Q29tcG9uZW50KFwibWFpbkd1blwiKS5sb2FkRGF0YSgyKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNYWluLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjA1XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMTAwKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAyLjVcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjhcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTMwKVxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjk1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==