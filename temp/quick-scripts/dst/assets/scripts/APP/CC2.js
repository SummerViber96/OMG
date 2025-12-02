
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
        _this.soundClosePop = null;
        _this.soundBg = null;
        _this.soundWin = null;
        _this.soundLose = null;
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
        var _this = this;
        this.cusComp = this.cus.getComponent("cusMission");
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.showCus();
        cc.audioEngine.play(this.soundBg, true, 0.4);
        this.listHand.zIndex = 5;
        this.scheduleOnce(function () {
            if (_this.isTut == 0) {
                _this.btn_cake();
            }
        }, 5);
    };
    NewClass.prototype.setTut2 = function () {
        var _this = this;
        this.isTut = 2;
        this.scheduleOnce(function () {
            console.log(_this.isTut);
            if (_this.isTut == 2) {
                _this.btn_xitHong();
            }
        }, 5);
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
        cc.audioEngine.play(this.soundWrong, false, 1);
        this.listCus.children[0].children[0].getComponent(cc.Animation).play();
        var child = this.listCus.children[0].children[1].getComponent(sp.Skeleton).setAnimation(0, "angry", true);
        this.scheduleOnce(function () {
            _this.listHand.children[2].active = true;
        }, 1);
        this.scheduleOnce(function () {
            if (_this.isTut == 4) {
                _this.btn_xitKem();
            }
        }, 5);
    };
    NewClass.prototype.btn_cherry = function () {
        var _this = this;
        cc.audioEngine.play(this.soundCherry, false, 1);
        this.btnCherry.getComponent(cc.Button).enabled = true;
        this.cherry.getComponent(cc.Animation).play();
        this.isTut = 6;
        this.listHand.children[3].active = false;
        cc.audioEngine.play(this.soundNo, false, 1);
        this.scheduleOnce(function () {
            _this.onEndGame();
        }, 2);
    };
    NewClass.prototype.btn_xitHong = function () {
        var _this = this;
        this.btnXitHong.getComponent(cc.Button).enabled = false;
        cc.audioEngine.play(this.soundChesse, false, 1);
        this.cakeMain.getComponent(cc.Animation).play("cake_2");
        this.listHand.children[1].active = false;
        this.scheduleOnce(function () {
            _this.listHand.children[0].active = true;
        }, 1);
        this.isTut = 3;
        this.scheduleOnce(function () {
            if (_this.isTut == 3) {
                _this.btm_cake2();
            }
        }, 5);
    };
    NewClass.prototype.btn_xitKem = function () {
        var _this = this;
        this.btnXitKem.getComponent(cc.Button).enabled = false;
        cc.audioEngine.play(this.soundChesse, false, 1);
        this.cakeMain.getComponent(cc.Animation).play("cake_4");
        this.listHand.children[2].active = false;
        this.scheduleOnce(function () {
            _this.listHand.children[3].active = true;
        }, 1);
        this.isTut = 5;
        this.scheduleOnce(function () {
            if (_this.isTut == 5) {
                // this.btm_cake2()
                _this.btn_cherry();
            }
        }, 5);
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
        var _this = this;
        this.isTut = 4;
        this.scheduleOnce(function () {
            if (_this.isTut == 4) {
                _this.btn_xitKem();
            }
        }, 5);
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
            cc.audioEngine.play(_this.soundOpen, false, 1);
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
        cc.audioEngine.play(this.soundWin, false, 1);
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
    ], NewClass.prototype, "soundClosePop", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxDQzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEycEJDO1FBenBCRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUE7UUFFOUIsaUJBQVcsR0FBaUIsSUFBSSxDQUFBO1FBRWhDLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxH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QUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUEzRFQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJwQjVCO0lBQUQsZUFBQztDQTNwQkQsQUEycEJDLENBM3BCcUMsRUFBRSxDQUFDLFNBQVMsR0EycEJqRDtrQkEzcEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2hvd1BvcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsb3NlUG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoZXNzZTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE9wZW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgICAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDaGVycnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgICAgICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE5vOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZnhDb2xvcjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjdXM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB4aXRLZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB4aXRIb25nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYWtlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNha2VNYWluOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FrZU1haW4yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuWGl0SG9uZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blhpdEtlbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoZXJyeTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNoZXJyeTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBjdXNDb21wID0gbnVsbFxyXG4gICAgY2FrZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gc291bmRCZzpjYy5BdWRpb0NsaXA9bnVsbDtcclxuICAgIGlzQ2FrZSA9IGZhbHNlXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBpc1RhbmcgPSAxO1xyXG4gICAgaXNLZW0gPSAwO1xyXG4gICAgaXNLZW0yID0gMDtcclxuICAgIGlzVHV0ID0gMFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXNDb21wID0gdGhpcy5jdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKVxyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dDdXMoKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjQpXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC56SW5kZXggPSA1XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1R1dCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9jYWtlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUpXHJcbiAgICB9XHJcbiAgICBzZXRUdXQyKCkge1xyXG4gICAgICAgIHRoaXMuaXNUdXQgPSAyXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzVHV0KVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1R1dCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl94aXRIb25nKClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCA1KVxyXG4gICAgfVxyXG4gICAgaXNDb3VudENha2UgPSAwXHJcbiAgICBidG5fY2FrZSgpIHtcclxuICAgICAgICB0aGlzLmNha2VNYWluLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmlzUGhhc2UzID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhbmcgPSAyXHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnNldFR1dDIoKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWtlTWFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FrZV9zcGF3MVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1RhbmcgPSAyXHJcbiAgICAgICAgdGhpcy5jdXNDb21wLmhhcHB5KClcclxuICAgICAgICB0aGlzLmlzQ2FrZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1BoYXNlMiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWtlTWFpbjIuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9LCAyKVxyXG5cclxuICAgIH1cclxuICAgIGJ0bV9jYWtlMigpIHtcclxuICAgICAgICB0aGlzLmlzVHV0ID0gNDtcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMuY2FrZU1haW4yLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG5cclxuICAgICAgICB0aGlzLmNha2VNYWluLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYWtlXzNcIik7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcImFuZ3J5XCIsdHJ1ZSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1R1dCA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl94aXRLZW0oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNSlcclxuXHJcbiAgICB9XHJcbiAgICBidG5fY2hlcnJ5KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoZXJyeSxmYWxzZSwxKVxyXG4gICAgICAgIHRoaXMuYnRuQ2hlcnJ5LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5jaGVycnkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIHRoaXMuaXNUdXQgPSA2XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZE5vLGZhbHNlLDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUoKVxyXG5cclxuICAgICAgICB9LDIpXHJcblxyXG4gICAgfVxyXG4gICAgaXNEZWxheUhvbmcgPSBmYWxzZVxyXG4gICAgYnRuX3hpdEhvbmcoKSB7XHJcbiAgICAgICAgdGhpcy5idG5YaXRIb25nLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoZXNzZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5jYWtlTWFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FrZV8yXCIpO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5pc1R1dCA9IDNcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHV0ID09IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRtX2Nha2UyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUpXHJcbiAgICB9XHJcbiAgICBidG5feGl0S2VtKCkge1xyXG4gICAgICAgIHRoaXMuYnRuWGl0S2VtLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoZXNzZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5jYWtlTWFpbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FrZV80XCIpO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5pc1R1dCA9IDVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHV0ID09IDUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYnRtX2Nha2UyKClcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX2NoZXJyeSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1KVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX3hpdEhvbmcoKSB7XHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLmlzQ2FrZSkgcmV0dXJuXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNEZWxheUhvbmcpIHJldHVybjtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc1RhbmcgPT0gMSkge1xyXG5cclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuaXNLZW0gPT0gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc1R1dCA9IDNcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9LCAwLjQpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jYWtlLmdldENvbXBvbmVudChcImNha2UyXCIpLnhpdEhvbmcoKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaXNQaGFzZTIgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaXNQaGFzZTMgPSB0cnVlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgfSwgMC40KVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0tlbSA9IDFcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmNha2VNYWluLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYWtlMlwiKTtcclxuXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5pc0tlbTIgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jYWtlKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzVHV0ID0gNVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNha2UuZ2V0Q29tcG9uZW50KFwiY2FrZTJcIikueGl0SG9uZygpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc0tlbTJRdWEgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIH0sIDAuNSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNLZW0gPSAzXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hlc3NlLCBmYWxzZSwgMSlcclxuXHJcbiAgICAvLyAgICAgdGhpcy5pc0RlbGF5SG9uZyA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy54aXRIb25nLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIC8vICAgICB0aGlzLnhpdEhvbmcuekluZGV4ID0gMVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy54aXRIb25nLnBvc2l0aW9uID0gY2MudjMoLTI3MS42NjQsIC0zNzMuOTA0KVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzRGVsYXlIb25nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmlzVHV0ID09IDMpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNha2VOb2RlLmdldENvbXBvbmVudChcImNha2VcIikudHV0T25QbGF0ZSgpXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0sIDUpXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzVHV0ID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1R1dCA9PSA1KSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuX3F1YSgpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSwgNSlcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICB9LCAwLjQpXHJcbiAgICAvLyB9XHJcbiAgICBzZXRUdXQ0KCkge1xyXG4gICAgICAgIHRoaXMuaXNUdXQgPSA0O1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXQgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5feGl0S2VtKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUpXHJcbiAgICB9XHJcbiAgICBpc0RlbGF5S2VtID0gZmFsc2VcclxuICAgIGlzUGhhc2UyID0gZmFsc2VcclxuICAgIGlzUGhhc2UzID0gZmFsc2VcclxuICAgIC8vIGJ0bl94aXRLZW0oKSB7XHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLmlzQ2FrZSkgcmV0dXJuXHJcblxyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzRGVsYXlLZW0pIHJldHVybjtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc1RhbmcgPT0gMSkge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5pc0tlbSA9PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgfSwgMC40KVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc1R1dCA9IDNcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jYWtlLmdldENvbXBvbmVudChcImNha2UyXCIpLnhpdGtlbSgpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc1BoYXNlMiA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaXNQaGFzZTMgPSB0cnVlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0tlbSA9IDFcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuaXNLZW0yID09IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNUdXQgPSA1XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2FrZS5nZXRDb21wb25lbnQoXCJjYWtlMlwiKS54aXRrZW0oKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaXNLZW0yUXVhID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIH0sIDAuNSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNLZW0gPSAzXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoZXNzZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgLy8gICAgIHRoaXMuaXNEZWxheUtlbSA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy54aXRLZW0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgIHRoaXMueGl0S2VtLnpJbmRleCA9IDFcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMueGl0S2VtLnBvc2l0aW9uID0gY2MudjMoMjcxLjk1OCwgLTM3My43NjUpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNEZWxheUtlbSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5pc1R1dCA9PSAzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jYWtlTm9kZS5nZXRDb21wb25lbnQoXCJjYWtlXCIpLnR1dE9uUGxhdGUoKVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9LCA1KVxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5pc1R1dCA9PSA1KSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXQgPT0gNSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bl9xdWEoKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0sIDUpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9LCAwLjUpXHJcbiAgICAvLyB9XHJcbiAgICBpc0tlbTJRdWEgPSBudWxsXHJcbiAgICBidG5fcXVhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzS2VtMlF1YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1R1dCA9IDZcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzS2VtMlF1YSkge1xyXG4gICAgICAgICAgICB0aGlzLmNha2UuZ2V0Q29tcG9uZW50KFwiY2FrZTJcIikueGl0UXVhS2VtKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FrZS5nZXRDb21wb25lbnQoXCJjYWtlMlwiKS54aXRRdWEoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKClcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG4gICAgc2hvd0N1cygpIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bMF1cclxuICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IGNjLnYzKC03MDAsIC01MClcclxuICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygwLCAtNTApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRPcGVuLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0UG9wID0gY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIilcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IGNoaWxkO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAvLyB9LCAwLjEpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgIH1cclxuICAgIHN1Y2Nlc3NDdXMoKSB7XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldFBvcCA9IG51bGw7XHJcblxyXG4gICAgfVxyXG4gICAgY3JlYXRGeENvbG9yKHBvcywgc2NhbGUpIHtcclxuICAgICAgICBsZXQgcHJlID0gY2MuaW5zdGFudGlhdGUodGhpcy5meENvbG9yKVxyXG4gICAgICAgIHByZS5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICBwcmUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICBwcmUuc2NhbGUgPSBzY2FsZVxyXG4gICAgfVxyXG4gICAgbmV4dEN1cygpIHtcclxuICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmNvdW50Q3VzXVxyXG4gICAgICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IGNjLnYzKDcwMCwgMTIzLjU5MSlcclxuICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygwLCAxMjMuNTkxKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRQb3AgPSBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDAuMSlcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBhcnJIb3REb2cgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XHJcbiAgICBhcnJCcmVhayA9IFtudWxsLCBudWxsLCBudWxsXTtcclxuICAgIGFyclR1b25nQ2EgPSBbXVxyXG4gICAgYnRuX2hvdERvZyhldmVudCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmFyckhvdERvZy5sZW5ndGggPj0gNikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tTbG90SG90RG9nKClcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVjaylcclxuICAgICAgICBpZiAoY2hlY2sgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGxldCBkZW0gPSB0aGlzLmFyckhvdERvZy5sZW5ndGhcclxuICAgICAgICBsZXQgaG90RG9nID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVIb3REb2cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdENoYW8pXHJcbiAgICAgICAgaG90RG9nLnBhcmVudCA9IHRoaXMubGlzdENoYW8uY2hpbGRyZW5bY2hlY2tdO1xyXG4gICAgICAgIGhvdERvZy5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgaG90RG9nLmdldENvbXBvbmVudChcImhvdGRvZ1wiKS52YWx1ZSA9IGNoZWNrXHJcbiAgICAgICAgdGhpcy5hcnJIb3REb2dbY2hlY2tdID0gaG90RG9nXHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucG9zaXRpb25cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDIpXHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tTbG90SG90RG9nKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJIb3REb2cubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJySG90RG9nW2ldID09IG51bGwpIHJldHVybiBpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjaGVja1Nsb3RCcmVhZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQnJlYWsubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyQnJlYWtbaV0gPT0gbnVsbCkgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGJ0bl9icmVhZChldmVudCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmFyckJyZWFrLmxlbmd0aCA+PSAzKSByZXR1cm47XHJcbiAgICAgICAgLy8gbGV0IGRlbSA9IHRoaXMuYXJyQnJlYWsubGVuZ3RoXHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja1Nsb3RCcmVhZCgpXHJcbiAgICAgICAgaWYgKGNoZWNrID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgbGV0IGJyZWFkID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVCcmVhZCk7XHJcbiAgICAgICAgYnJlYWQucGFyZW50ID0gdGhpcy5saXN0S2hheUJhbmhNaS5jaGlsZHJlbltjaGVja107XHJcbiAgICAgICAgYnJlYWQucG9zaXRpb24gPSBjYy52MygwLCAwKVxyXG4gICAgICAgIGJyZWFkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLnZhbHVlID0gY2hlY2tcclxuICAgICAgICB0aGlzLmFyckJyZWFrW2NoZWNrXSA9IGJyZWFkXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuY3VycmVudFRhcmdldC5wb3NpdGlvblxyXG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcywgMilcclxuXHJcbiAgICB9XHJcbiAgICBzZWxsQnJlYWQodmFsdWUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEN1cyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRQb3AgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0ub3BhY2l0eSA9IDBcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJCcmVha1t2YWx1ZV07XHJcbiAgICAgICAgdGhpcy5hcnJCcmVha1t2YWx1ZV0gPSBudWxsO1xyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmlzVGFyZ2V0UG9wLnBvc2l0aW9uXHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy5pc1RhcmdldFBvcC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc0VuZClcclxuICAgICAgICBwb3NFbmQgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKVxyXG4gICAgICAgIGxldCBwb3MgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoaWxkLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjQsIHsgcG9zaXRpb246IHBvc0VuZC5hZGQoY2MudjMoNTAsIDApKSwgc2NhbGU6IDAuNyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQub3BhY2l0eSA9IDBcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmNoZWNrQnJlYWQoY2hpbGQpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDEuNSlcclxuICAgIH1cclxuICAgIGlzRGVsYXl0dW9uZyA9IGZhbHNlXHJcbiAgICBidG5fdHVvbmdDYSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGF5dHVvbmcpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5hcnJCcmVhay5sZW5ndGggPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBicmVhZCA9IHRoaXMuY2hlY2tUdW9uZ0NhKCk7XHJcbiAgICAgICAgaWYgKGJyZWFkID09IG51bGwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRGVsYXl0dW9uZyA9IHRydWVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICBsZXQgcG9zU3RhcnQgPSBicmVhZC5wb3NpdGlvbi5hZGQoY2MudjMoNDAsIDE1MCkpO1xyXG4gICAgICAgIHBvc1N0YXJ0ID0gYnJlYWQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NTdGFydCk7XHJcbiAgICAgICAgcG9zU3RhcnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zU3RhcnQpXHJcbiAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMudHVvbmdPdC5wb3NpdGlvblxyXG4gICAgICAgIGxldCBwb3NNaWQgPSBjYy52MigocG9zU3RhcnQueCArIHBvc0VuZC54KSAvIDIsIChwb3NTdGFydC55ICsgcG9zRW5kLnkpIC8gMiArIDEwMClcclxuICAgICAgICB0aGlzLnR1b25nT3QuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBicmVhZC5nZXRDb21wb25lbnQoXCJwcmVCcmVhZFwiKS5nZXRUdW9uZ0NhKClcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hlc3NlLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgfSwgMC4yNSlcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnR1b25nT3QpLmJlemllclRvKDAuNSwgY2MudjIocG9zRW5kLngsIHBvc0VuZC55KSwgY2MudjIocG9zTWlkLngsIHBvc01pZC55KSwgY2MudjIocG9zU3RhcnQueCwgcG9zU3RhcnQueSkpLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICB9KS5kZWxheSgwLjIpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnR1b25nT3QucG9zaXRpb24gPSBwb3NFbmRcclxuICAgICAgICAgICAgdGhpcy50dW9uZ090LmNoaWxkcmVuWzBdLmFuZ2xlID0gMFxyXG4gICAgICAgICAgICB0aGlzLmlzRGVsYXl0dW9uZyA9IGZhbHNlXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgIH1cclxuICAgIGNoZWNrVHVvbmdDYSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQnJlYWsubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNobGQgPSB0aGlzLmFyckJyZWFrW2ldXHJcbiAgICAgICAgICAgIGlmIChjaGxkICE9IG51bGwgJiYgY2hsZC5nZXRDb21wb25lbnQoXCJwcmVCcmVhZFwiKS5pc0hvdERvZyA9PSB0cnVlICYmIGNobGQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIikuaXNUdW9uZ0NhID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hsZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tIb3REb2codmFsdWUsIG5vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5hcnJCcmVhay5sZW5ndGggPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hlY2tCcmVhZCgpXHJcbiAgICAgICAgaWYgKGNoaWxkID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIHRoaXMuYXJySG90RG9nW3ZhbHVlXSA9IG51bGxcclxuICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoXCJwcmVCcmVhZFwiKS5nZXRIb3REb2coKVxyXG4gICAgICAgIGxldCBwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBub2RlLm9wYWNpdHkgPSAwXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KClcclxuXHJcbiAgICAgICAgfSwgMC4xKVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDEuNSlcclxuICAgIH1cclxuICAgIGNoZWNrQnJlYWQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckJyZWFrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGxkID0gdGhpcy5hcnJCcmVha1tpXVxyXG4gICAgICAgICAgICBpZiAoY2hsZCAhPSBudWxsICYmIGNobGQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIikuaXNIb3REb2cgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGxkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIG9uRW5kR2FtZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2Nob29zZShldmVudCwgdmFsdWUpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIC8vICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuc2NlbmVNdXNpYy5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KFwibWFpbk11c2ljXCIpLmxvYWREYXRhKDEpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KFwibWFpbk11c2ljXCIpLmxvYWREYXRhKDIpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4ucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLmdldENvbXBvbmVudChcIm1haW5HdW5cIikubG9hZERhdGEoMSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTWFpbi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KFwibWFpbk11c2ljXCIpLmxvYWREYXRhKDMpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5wb3NpdGlvbiA9IGNjLnYzKDMwMDAsIDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoXCJtYWluTXVzaWNcIikubG9hZERhdGEoNClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5wb3NpdGlvbiA9IGNjLnYzKDMwMDAsIDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4uZ2V0Q29tcG9uZW50KFwibWFpbkd1blwiKS5sb2FkRGF0YSgyKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNYWluLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjA1XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMTAwKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAyLjVcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjhcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTMwKVxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjk1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==