
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/GameDonut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f707kejClBjKTl44QvevBE', 'GameDonut');
// RecipeRush/scripts/GameDonut.ts

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
globalThis.coin = 0;
globalThis.Game = false;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundShowPop = null;
        _this.soundClosePop = null;
        _this.soundBg = null;
        _this.soundWin = null;
        _this.soundLose = null;
        _this.soundOk = null;
        _this.soundTrans = null;
        _this.soundClick = null;
        _this.soundEnd = null;
        _this.soundSellDone = null;
        _this.soundThinking = null;
        _this.soundCream = null;
        _this.soundCherry = null;
        _this.soundWrong = null;
        _this.soundCreamMini = null;
        _this.soundThinkWin = null;
        _this.soundBanh = null;
        _this.soundThinkLose = null;
        _this.soundThinkWin = null;
        _this.soundAngry1 = null;
        _this.soundAngry2 = null;
        _this.soundFoot = null;
        _this.soundFunny = null;
        _this.soundOpenOrder = null;
        _this.soundTicketFly = null;
        _this.soundDO = null;
        _this.soundFail = null;
        _this.tut = null;
        _this.hand = null;
        _this.endCard = null;
        _this.endCardWin = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.cameraDoc = null;
        _this.logo = null;
        _this.uiCamera = null;
        _this.uiNode = null;
        _this.barTime = null;
        _this.barCoin = null;
        _this.phaoHoa = null;
        _this.warning = null;
        _this.guild = null;
        _this.timeup = null;
        _this.amazing = null;
        _this.notiCoin = null;
        _this.notiMission = null;
        _this.endCardDoc = null;
        //new
        _this.barMission = null;
        _this.barMission2 = null;
        //btn
        _this.mc = null;
        _this.hind1 = null;
        _this.listPreCUs = [];
        //new
        _this.ticket = null;
        _this.chef1 = null;
        _this.chef2 = null;
        _this.chef3 = null;
        _this.listHand = null;
        _this.preTom = null;
        _this.preTofu = null;
        _this.preHanh = null;
        _this.preDau = null;
        _this.preSauce = null;
        _this.plate = null;
        _this.plateList = null;
        _this.btnTo = null;
        _this.btnDau = null;
        _this.btnHanh = null;
        _this.btnDauPhu = null;
        _this.btnSauce = null;
        _this.listTick = null;
        _this.listItemNoi = null;
        _this.noiSup = null;
        _this.video = null;
        _this.cus1 = null;
        _this.listCus2 = null;
        _this.failUi = null;
        _this.listItemPlate2 = null;
        _this.cus2 = null;
        _this.garan2 = null;
        _this.mcComp = null;
        // @property(cc.Node)
        // tutMision: cc.Node = null
        _this.arrBep = [false, false, false, false];
        _this.arrDia = [false, false, false, false];
        _this.maxKhay = 7;
        _this.arrDonutpos = [];
        _this.isTutChili = false;
        _this.isTutMeat = false;
        _this.isTutVegetTable = false;
        _this.isTutClickMeat = false;
        _this.isTargetPop = null;
        // isStep = 0
        _this.isTargetCus = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.maxCustomers = 6;
        _this.idSound = null;
        _this.isStep = 0;
        //item: 0:buger, 1: kem 2:donut 3:khoaitay 4:pho 5: pudding 6: tra  7:banhmi 8:coconut
        _this.rayY = [120, 0, -120]; // vị trí Y của 3 ray
        _this.spawnX = 700; // vị trí spawn bên phải
        _this.arrItem = [[], []];
        _this.arrKhay = [];
        _this.arrTargetMission = [];
        _this.arrCus = [];
        _this.sellTargetCus = null;
        _this.sellTraySlot = -1;
        _this.cusCounterPos = null;
        _this.cusSlotGap = 500;
        _this.cusEnterOffset = cc.v3(350, 0, 0);
        _this.cusWalkSpeed = 437.5;
        _this.counterCusCount = 0;
        _this.preCusIndex = 0;
        _this.isStartgame = false;
        _this.isFirstClick = false;
        //mission
        _this.msTom = false;
        _this.msHanh = false;
        _this.msDau = false;
        _this.msTofu = false;
        _this.msSauces = false;
        //0:banh thuong 1:chocolate 2: strawberry 
        _this.idFunny = null;
        _this.mag = 0;
        _this.isHand = null;
        _this.isShowMenu = false;
        _this.arrTom = [];
        _this.arrHanh = [];
        _this.arrDau = [];
        _this.arrTofu = [];
        _this.arrSauce = null;
        _this.isSauceFinal = false;
        _this.msPalet1 = false;
        _this.idFoot = null;
        _this.isSOundNau = null;
        _this.isMoving = false;
        _this.isFist = false;
        _this.isFistClickChicken = false;
        _this.isEndGame = false;
        // btn_choose(event, value) {
        _this.isDoc = false;
        _this.arrPosMenuNgang = [cc.v3(-391, -102), cc.v3(375, -112), cc.v3(114, -120), cc.v3(-409, -284), cc.v3(-158, -296), cc.v3(118, -280), cc.v3(390, -296), cc.v3(-137, -116)];
        _this.arrPosDoc = [cc.v3(26, -337), cc.v3(336, -112), cc.v3(15.5, -121), cc.v3(-170, -525.7), cc.v3(-300, -352), cc.v3(186.96, -512), cc.v3(355, -335), cc.v3(-292, -116)];
        _this.magfront = 0;
        _this.magVideo = 0;
        _this.isScaleVideo = 1;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.updateResponsive();
        cc.view.setResizeCallback(function () {
            _this.updateResponsive();
        });
        cc.audioEngine.play(this.soundShowPop, false, 1);
        // this.camera.node.position = cc.v3(0, 0)
        this.scheduleOnce(function () {
            _this.moveTicket();
        }, 1.5);
        var animCheft1 = this.chef1.children[0];
        this.scheduleOnce(function () {
            animCheft1.getComponent(sp.Skeleton).setAnimation(0, "Win", false);
            _this.idFunny = cc.audioEngine.play(_this.soundFunny, false, 1);
        }, 0.5);
        this.scheduleOnce(function () {
            cc.audioEngine.stop(_this.idFunny);
            animCheft1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
        }, 2);
        this.camera.node.position = cc.v3(0 + this.magfront, 120);
    };
    NewClass.prototype.moveTicket = function () {
        this.ticket.active = true;
        cc.audioEngine.play(this.soundTicketFly, false, 0.3);
        cc.tween(this.camera.node).to(1, { position: cc.v3(2000, -200.232) }).call(function () {
            // this.ticket.getComponent(cc.Animation).play("ticket_show")
        }).start();
        cc.tween(this.camera).to(1, { zoomRatio: 1 }).start();
        cc.tween(this.cameraDoc.node).to(1, { position: cc.v3(2100, -200.232) }).call(function () {
            // this.ticket.getComponent(cc.Animation).play("ticket_show")
        }).start();
        cc.tween(this.cameraDoc).to(1, { zoomRatio: 1.6 }).start();
    };
    NewClass.prototype.showTicket = function () {
        var _this = this;
        cc.audioEngine.play(this.soundClick, false, 1);
        cc.audioEngine.play(this.soundOpenOrder, false, 1);
        this.scheduleOnce(function () {
            _this.listHand.children[0].active = true;
            _this.isShowMenu = true;
        }, 0.4);
    };
    // btn_tom() {
    //     if (this.isShowMenu == false) return
    //     cc.audioEngine.play(this.soundClick, false, 1)
    //     this.unschedule(this.checkHind)
    //     this.msTom = true
    //     this.btnTo.getComponent(cc.Button).enabled = false
    //     this.listHand.children[0].active = false
    //     let arrPos = [cc.v2(-75, -24), cc.v2(-64, 19), cc.v2(-44, -3)]
    //     for (let i = 0; i < 3; i++) {
    //         this.scheduleOnce(() => {
    //             let preTom = cc.instantiate(this.preTom);
    //             preTom.position = cc.v3(-334, -29);
    //             preTom.parent = this.plateList
    //             this.arrTom.push(preTom)
    //             cc.tween(preTom).bezierTo(0.5, cc.v2(-334, -29), cc.v2(-334, -29 + 300), arrPos[i]).start()
    //         }, i * 0.15)
    //     }
    //     this.scheduleOnce(() => {
    //         this.checkSuccess()
    //     }, 0.5 + 0.15 * 3)
    //     this.scheduleOnce(() => {
    //         this.checkHind()
    //     }, 1)
    // }
    //
    NewClass.prototype.btn_donnut = function () {
        var _this = this;
        if (this.isShowMenu == false)
            return;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.unschedule(this.checkHind);
        this.isStep = 1;
        this.msTom = true;
        this.btnTo.getComponent(cc.Button).enabled = false;
        this.listHand.children[0].active = false;
        var arrPos = [cc.v2(-0, 0), cc.v2(52, 9), cc.v2(-42, -24)];
        var _loop_1 = function (i) {
            this_1.scheduleOnce(function () {
                var preTom = cc.instantiate(_this.preTom);
                preTom.position = cc.v3(-334, -29);
                preTom.parent = _this.plateList;
                _this.arrTom.push(preTom);
                cc.tween(preTom).bezierTo(0.5, cc.v2(-334, -29), cc.v2(-334, -29 + 300), arrPos[i]).start();
            }, i * 0.15);
        };
        var this_1 = this;
        for (var i = 0; i < 1; i++) {
            _loop_1(i);
        }
        this.scheduleOnce(function () {
            _this.checkSuccess();
        }, 0.5 + 0.15 * 3);
        this.scheduleOnce(function () {
            _this.checkHind();
        }, 1);
    };
    NewClass.prototype.btn_dauTay = function () {
        var _this = this;
        if (this.isStep != 4) {
            this.btnDau.getChildByName("hindBox").getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 0.5);
            return;
        }
        if (this.isShowMenu == false)
            return;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.unschedule(this.checkHind);
        this.msDau = true;
        this.btnDau.getComponent(cc.Button).enabled = false;
        this.listHand.children[3].active = false;
        this.listTick.children[1].active = true;
        var itemSauce = this.garan2.children[1];
        itemSauce.scale = 0.5;
        itemSauce.active = true;
        cc.tween(itemSauce).to(0.2, { scale: 1.15 }).to(0.05, { scale: 1 }).start();
        // let arrPos = [cc.v2(83, -36), cc.v2(51, -54), cc.v2(16, -62)]
        // let arrAngle = [0, 0, 0]
        // for (let i = 0; i < 3; i++) {
        //     this.scheduleOnce(() => {
        //         let preTom = cc.instantiate(this.preDau);
        //         preTom.position = cc.v3(-134, -245);
        //         preTom.parent = this.listItemPlate2
        //         this.arrDau.push(preTom)
        //         cc.tween(preTom).bezierTo(0.5, cc.v2(-134, -245), cc.v2(-134, -245 + 350), arrPos[i]).start()
        //         cc.tween(preTom).to(0.5, { angle: arrAngle[i] }).start()
        //     }, i * 0.15)
        // }
        this.scheduleOnce(function () {
            _this.plate.getChildByName("hand").active = true;
            _this.plate.getComponent(cc.Button).enabled = true;
            _this.isStep = 5;
        }, 0.3);
    };
    NewClass.prototype.btn_sauceDauTay = function () {
        var _this = this;
        if (this.isShowMenu == false)
            return;
        if (this.isStep != 2) {
            this.btnSauce.getChildByName("hindBox").getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 0.5);
            return;
        }
        // if (this.isStep != 2) return;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.unschedule(this.checkHind);
        this.btnSauce.getComponent(cc.Button).enabled = false;
        this.listHand.children[1].active = false;
        // let startPos = cc.v2(300, 2)
        // let endpos = cc.v2(1.5, 67);
        this.listTick.children[0].active = true;
        // this.arrSauce = preSauce;
        var itemRau = this.garan2.children[0];
        itemRau.scale = 0.5;
        itemRau.active = true;
        cc.tween(itemRau).to(0.2, { scale: 1.15 }).to(0.05, { scale: 1 }).start();
        this.msSauces = true;
        this.scheduleOnce(function () {
            _this.listHand.children[4].active = true;
            _this.isStep = 3;
        }, 0.6);
        // this.scheduleOnce(() => {
        //     this.plate.getChildByName("hand").active = true
        //     this.plate.getComponent(cc.Button).enabled = true
        // }, 0.3)
        // this.scheduleOnce(() => {
        //     this.isSauceFinal = true
        //     this.checkSuccess()
        // }, 0.1)
        // this.scheduleOnce(() => {
        //     this.checkHind()
        // }, 2)
    };
    NewClass.prototype.btn_hanh = function () {
        this.btnHanh.getChildByName("hindBox").getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 0.5);
        return;
        // if (this.isShowMenu == false) return
        // cc.audioEngine.play(this.soundClick, false, 1)
        // this.unschedule(this.checkHind)
        // this.msHanh = true;
        // this.btnHanh.getComponent(cc.Button).enabled = false
        // this.listHand.children[2].active = false
        // this.listTick.children[1].active = true
        // this.scheduleOnce(() => {
        //     this.checkSuccess()
        // }, 0.5 + 0.15 * 3)
        // this.scheduleOnce(() => {
        //     this.checkHind()
        // }, 2)
    };
    NewClass.prototype.btn_dauPhu = function () {
        // if (this.isStep != 3) return;
        var _this = this;
        if (this.isStep != 3) {
            this.btnDauPhu.getChildByName("hindBox").getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 0.5);
            return;
        }
        if (this.isShowMenu == false)
            return;
        this.msTofu = true;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.unschedule(this.checkHind);
        this.btnDauPhu.getComponent(cc.Button).enabled = false;
        this.listHand.children[4].active = false;
        this.listTick.children[2].active = true;
        var itemSauce = this.garan2.children[3];
        itemSauce.scale = 0.5;
        itemSauce.active = true;
        cc.tween(itemSauce).to(0.2, { scale: 1.15 }).to(0.05, { scale: 1 }).start();
        // this.listItemPlate2.children[2].children[5].active = true;
        // this.listItemPlate2.children[2].getComponent(cc.Animation).play()
        // this.arrTom[2].getComponent(cc.Animation).play()
        // this.arrTom[2].children[5].active = true
        // this.scheduleOnce(() => {
        //     this.checkSuccess()
        // }, 0.5 + 0.15 * 3)
        // this.scheduleOnce(() => {
        //     this.checkHind()
        // }, 2)
        this.scheduleOnce(function () {
            _this.listHand.children[3].active = true;
            _this.isStep = 4;
        }, 0.3);
    };
    NewClass.prototype.btn_dau = function () {
        var _this = this;
        // if (this.isStep != 4) return;
        if (this.isStep != 4) {
            this.btnDau.getChildByName("hindBox").getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 0.5);
            return;
        }
        if (this.isShowMenu == false)
            return;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.unschedule(this.checkHind);
        this.msDau = true;
        this.btnDau.getComponent(cc.Button).enabled = false;
        this.listHand.children[3].active = false;
        this.listTick.children[0].active = true;
        var arrPos = [cc.v2(-5, -9), cc.v2(-8, 11), cc.v2(-21, 11)];
        var arrAngle = [45, 55, 73];
        var _loop_2 = function (i) {
            this_2.scheduleOnce(function () {
                var preTom = cc.instantiate(_this.preDau);
                preTom.position = cc.v3(-134, -245);
                preTom.parent = _this.listItemPlate2;
                _this.arrDau.push(preTom);
                cc.tween(preTom).bezierTo(0.5, cc.v2(-134, -245), cc.v2(-134, -245 + 350), arrPos[i]).start();
                cc.tween(preTom).to(0.5, { angle: arrAngle[i] }).start();
            }, i * 0.15);
        };
        var this_2 = this;
        for (var i = 0; i < 3; i++) {
            _loop_2(i);
        }
        // this.scheduleOnce(() => {
        //     this.checkSuccess()
        // }, 0.5 + 0.15 * 3)
        // this.scheduleOnce(() => {
        //     this.checkHind()
        // }, 2)
    };
    // btn_sauce() {
    //     if (this.isShowMenu == false) return
    //     cc.audioEngine.play(this.soundClick, false, 1)
    //     this.unschedule(this.checkHind)
    //     this.btnSauce.getComponent(cc.Button).enabled = false;
    //     this.listHand.children[1].active = false
    //     let startPos = cc.v2(300, 2)
    //     let endpos = cc.v2(1.5, 67);
    //     let preSauce = cc.instantiate(this.preSauce)
    //     preSauce.position = cc.v3(startPos.x, startPos.y);
    //     preSauce.parent = this.plateList
    //     this.arrSauce = preSauce;
    //     cc.tween(preSauce).bezierTo(0.5, startPos, cc.v2(startPos.x, startPos.y + 300), endpos).start()
    //     this.msSauces = true
    //     this.scheduleOnce(() => {
    //         this.isSauceFinal = true
    //         this.checkSuccess()
    //     }, 0.5)
    //     this.scheduleOnce(() => {
    //         this.checkHind()
    //     }, 2)
    // }
    NewClass.prototype.checkSuccess = function () {
        var _this = this;
        if (this.msDau == true && this.msHanh == true && this.msSauces == true && this.msTofu == true && this.msTom == true && this.isSauceFinal) {
            this.plate.getChildByName("phaohoa").active = true;
            cc.audioEngine.play(this.soundSellDone, false, 0.5);
            this.scheduleOnce(function () {
                _this.plate.children[0].active = true;
                _this.listHand.children[5].active = true;
                _this.plate.getComponent(cc.Button).enabled = true;
            }, 0.5);
        }
    };
    // isStep=0
    NewClass.prototype.checkHind = function () {
        if (this.msPalet1 == false) {
            this.plate.getChildByName("hand").active = true;
            this.plate.getComponent(cc.Button).enabled = true;
            return;
        }
        if (this.msSauces == false) {
            this.listHand.children[1].active = true;
            return;
        }
        if (this.msHanh == false) {
            this.listHand.children[2].active = true;
            return;
        }
        if (this.msDau == false) {
            this.listHand.children[3].active = true;
            return;
        }
        if (this.msTofu == false) {
            this.listHand.children[4].active = true;
            return;
        }
    };
    NewClass.prototype.btn_plate = function () {
        var _this = this;
        this.plate.getComponent(cc.Button).enabled = false;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.listHand.children[5].active = false;
        this.listHand.children[5].opacity = 0;
        var chefANim = this.chef2.children[0].getComponent(sp.Skeleton);
        chefANim.setAnimation(0, "L-arm", true);
        this.plate.getChildByName("hand").active = false;
        this.plate.parent = this.chef2;
        this.plate.position = cc.v3(217, 482);
        this.plate.children[0].active = false;
        cc.audioEngine.play(this.soundFoot, false, 0.5);
        this.chef2.scaleX = 1;
        if (this.isStep == 1) {
            cc.tween(this.camera.node).to(1.5, { position: cc.v3(1239, 346) }).start();
            cc.tween(this.cameraDoc.node).to(1.5, { position: cc.v3(1239, 346) }).start();
            cc.tween(this.chef2).to(1.5, { position: cc.v3(1231, -219) }).call(function () {
                chefANim.setAnimation(1, "Idle", true);
                cc.audioEngine.stop(_this.idFoot);
                _this.transItem();
            }).start();
            chefANim.setAnimation(1, "Walk", true);
        }
        else if (this.isStep == 5) {
            cc.tween(this.camera.node).to(1.5, { position: cc.v3(1239, -200) }).start();
            cc.tween(this.cameraDoc.node).to(1.5, { position: cc.v3(1239, -200) }).start();
            this.chef3.active = true;
            cc.tween(this.chef2).to(1.5, { position: cc.v3(1231, -595.15) }).call(function () {
                chefANim.setAnimation(1, "Idle", true);
                chefANim.setAnimation(0, "Idle", true);
                cc.audioEngine.stop(_this.idFoot);
                // this.transItem()
                _this.transItem();
            }).start();
            chefANim.setAnimation(1, "Walk", true);
        }
    };
    NewClass.prototype.transItem = function () {
        var _this = this;
        console.log(this.isStep);
        if (this.isStep == 1) {
            var arrPosTom_1 = [this.listItemNoi.children[0].position];
            var _loop_3 = function (i) {
                this_3.scheduleOnce(function () {
                    var item1 = _this.arrTom[i];
                    var pos1 = arrPosTom_1[i];
                    pos1 = _this.listItemNoi.convertToWorldSpaceAR(pos1);
                    pos1 = item1.parent.convertToNodeSpaceAR(pos1);
                    cc.tween(item1).bezierTo(0.6, cc.v2(item1.x, item1.y), cc.v2(item1.x, item1.y + 400), cc.v3(pos1.x, pos1.y)).call(function () {
                        item1.active = false;
                        _this.listItemNoi.children[i].active = true;
                        // this.listItemNoi.children[i].children[0].children[1].active=true
                        cc.tween(_this.listItemNoi.children[i].children[0].children[1]).delay(0.4).to(2.5, { opacity: 255 }).start();
                    }).start();
                }, 0.1 * i);
            };
            var this_3 = this;
            for (var i = 0; i < 1; i++) {
                _loop_3(i);
            }
            this.scheduleOnce(function () {
                for (var i = 0; i < 1; i++) {
                    var item1 = _this.listItemNoi.children[i];
                    item1.children[1].getComponent(sp.Skeleton).setAnimation(0, "lv1-chin", false);
                }
            }, 2.5);
            this.scheduleOnce(function () {
                var chefANim = _this.chef2.children[0].getComponent(sp.Skeleton);
                _this.plate.active = false;
                chefANim.setAnimation(0, "Idle", true);
                _this.noiSup.getComponent("cooking").setOn();
                _this.isSOundNau = cc.audioEngine.play(_this.soundCreamMini, false, 1);
            }, 1);
            this.scheduleOnce(function () {
                for (var i = 0; i < 1; i++) {
                    var item1 = _this.listItemNoi.children[i];
                    item1.active = false;
                }
                cc.audioEngine.play(_this.soundSellDone, false, 1);
                _this.cus1.active = false;
                cc.audioEngine.stop(_this.isSOundNau);
                _this.plate = _this.chef2.getChildByName("plate2");
                _this.plate.active = true;
                // let plate2 = this.chef2.getChildByName("plate2")
                var chefANim = _this.chef2.children[0].getComponent(sp.Skeleton);
                chefANim.setAnimation(1, "Walk", true);
                chefANim.setAnimation(0, "L-arm", true);
                _this.idFoot = cc.audioEngine.play(_this.soundFoot, false, 0.5);
                cc.tween(_this.camera.node).to(1.5, { position: cc.v3(1239, 346) }).start();
                cc.tween(_this.cameraDoc.node).to(1.5, { position: cc.v3(1239, 346) }).start();
                cc.tween(_this.camera.node).to(1.5, { position: cc.v3(2000, -200.232) }).call(function () {
                }).start();
                cc.tween(_this.cameraDoc.node).to(1.5, { position: cc.v3(2100, -200.232) }).call(function () {
                }).start();
                _this.chef2.scaleX = -1;
                cc.tween(_this.chef2).to(1.5, { position: cc.v3(2316, -595) }).call(function () {
                    chefANim.setAnimation(1, "Idle", true);
                    chefANim.setAnimation(0, "Idle", true);
                    cc.audioEngine.stop(_this.idFoot);
                    _this.plate.parent = _this.chef2.parent;
                    _this.plate.position = cc.v3(2285, -351);
                    _this.isStep = 2;
                    _this.listHand.children[1].active = true;
                    // this.transItem()
                }).start();
            }, 3);
        }
        else if (this.isStep == 5) {
            this.ticket.children[0].active = true;
            var plate2_1 = this.chef2.getChildByName("plate2");
            cc.tween(this.ticket).to(0.3, { scale: 2.1 }).to(0.5, { opacity: 0 }).start();
            cc.tween(this.camera.node).by(1, { position: cc.v3(0, -400) }).start();
            cc.tween(this.cameraDoc.node).by(1, { position: cc.v3(0, -400) }).start();
            plate2_1.parent = this.node;
            plate2_1.position = cc.v3(1236, -382);
            var anim_1 = this.chef3.children[0].getComponent(sp.Skeleton);
            // }).start()
            cc.tween(plate2_1).to(0.4, { position: cc.v3(1236, -550) }).call(function () {
                plate2_1.active = false;
                _this.chef3.getChildByName("plate2").active = true;
                // anim.setAnimation(1, "Walk", true);
                anim_1.setAnimation(0, "L-arm", true);
                _this.chef3.scaleX = 1; // this.video.node.active = true;
            }).start();
            this.scheduleOnce(function () {
                // cc.audioEngine.play(this.soundDO, false, 1)
                anim_1.setAnimation(1, "Walk", true);
                cc.tween(_this.chef3).to(1.5, { position: cc.v3(-475, -1224.698) }).call(function () {
                    anim_1.setAnimation(0, "Win", true);
                    anim_1.setAnimation(1, "Win", true);
                    _this.chef3.getChildByName("plate2").active = false;
                    _this.cus2.children[1].active = true;
                    cc.audioEngine.play(_this.soundSellDone, false, 1);
                }).start();
                _this.scheduleOnce(function () {
                    _this.cus2.getComponent(cc.Animation).play();
                }, 1.4);
                cc.tween(_this.camera.node).by(1.5, { position: cc.v3(-1700, -400) }).start();
                cc.tween(_this.cameraDoc.node).by(1.5, { position: cc.v3(-1700, -400) }).start();
            }, 0.7);
            this.scheduleOnce(function () {
                _this.listCus2.active = true;
                cc.tween(_this.camera.node).to(1, { position: cc.v3(-160 + 40 + 250, 300) }).start();
                cc.tween(_this.cameraDoc.node).to(1, { position: cc.v3(-500 + 40 + 250, 300) }).start();
                cc.audioEngine.play(_this.soundEnd, false, 0.5);
                _this.scheduleOnce(function () {
                    _this.timeup.active = true;
                }, 1);
                _this.scheduleOnce(function () {
                    _this.onEndGame(false);
                }, 2);
            }, 1 + 2.5);
            // this.scheduleOnce(() => {
            //     this.video.node.scale = this.isScaleVideo
            //     // this.video.node.position = cc.v3(1700, -300)
            //     this.video.node.position = cc.v3(1700, -300)
            //     // this.video.node.position=
            // }, 4)
            // this.scheduleOnce(() => {
            //     this.video.node.position = cc.v3(-900 + this.magVideo, -1000)
            // }, 5 - 0.3)
            // this.scheduleOnce(() => {
            //     this.listCus2.active = true
            //     this.camera.node.position = cc.v3(-40, 300 - 100, 0)
            //     this.cameraDoc.node.position = cc.v3(-40, 300 - 100, 0)
            //     this.cameraDoc.zoomRatio = 1.4
            //     this.camera.zoomRatio = 0.8
            //     this.video.node.active = false
            //     this.failUi.active = true;
            //     cc.audioEngine.play(this.soundFail, false, 1)
            //     this.scheduleOnce(() => {
            //         this.failUi.active = false
            //         cc.tween(this.camera.node).to(1, { position: cc.v3(-160 + 40 + 250, 300) }).start()
            //         cc.tween(this.cameraDoc.node).to(1, { position: cc.v3(-160 + 40 + 250, 300) }).start()
            //         this.chef1.children[0].getComponent(sp.Skeleton).setAnimation(0, "Fail", false)
            //         cc.audioEngine.play(this.soundAngry1, false, 1)
            //         cc.audioEngine.play(this.soundAngry2, false, 1)
            //         this.scheduleOnce(() => {
            //             cc.audioEngine.play(this.soundThinkLose, false, 1)
            //         }, 2)
            //         this.scheduleOnce(() => {
            //             this.onEndGame(false)
            //         }, 3)
            //     }, 1.3)
            // }, 5.8)
        }
    };
    // replaceCustomer(departedCus: cc.Node, counterPos: cc.Vec3) {
    //     if (this.isEndGame) return;
    //     let idx = this.arrCus.indexOf(departedCus)
    //     let newCus = this.spawnCustomerFromPrefab()
    //     if (!newCus) return
    //     this.btnCake.getComponent(cc.Button).enabled = true;
    //     this.btnPotato.getComponent(cc.Button).enabled = true;
    //     let newCusComp = newCus.getComponent("cusMission")
    //     if (newCusComp) {
    //         newCusComp.gamePlay = this
    //         newCusComp.isReadyForSell = false
    //     }
    //     if (this.sellTargetCus === departedCus || this.isTargetCus === departedCus) {
    //         this.sellTargetCus = null
    //         this.sellTraySlot = -1
    //     }
    //     this.isMoving = false
    //     if (this.mcComp) {
    //         this.mcComp.unscheduleAllCallbacks()
    //     }
    //     if (idx >= 0) {
    //         this.arrCus[idx] = newCus
    //     } else {
    //         this.arrCus.push(newCus)
    //     }
    //     departedCus.destroy()
    //     let spawnPos = counterPos.clone().add(this.cusEnterOffset)
    //     let distance = spawnPos.sub(counterPos).mag()
    //     let duration = distance / this.cusWalkSpeed
    //     cc.Tween.stopAllByTarget(newCus)
    //     newCus.position = spawnPos
    //     newCus.active = true
    //     newCusComp.move()
    //     cc.tween(newCus)
    //         .to(duration, { position: counterPos })
    //         .call(() => {
    //             newCusComp.showMission()
    //             this.isTargetCus = newCus
    //         })
    //         .start()
    // }
    NewClass.prototype.onHind = function () {
        this.hind1.active = true;
    };
    NewClass.prototype.startGame = function () {
        var _this = this;
        this.initCusQueue();
        for (var i = 1; i < this.arrCus.length; i++) {
            this.arrCus[i].active = false;
        }
        this.enterCustomers(1, true);
        this.scheduleOnce(function () {
            if (!_this.isFirstClick) {
                _this.isFirstClick = true;
                _this.btnChicken.getChildByName("hind").active = true;
            }
        }, 3);
    };
    NewClass.prototype.isMcBusy = function () {
        return this.isMoving || (this.mcComp && this.mcComp.isWalking());
    };
    NewClass.prototype.btn_chicken = function () {
        var _this = this;
        if (this.isMcBusy())
            return;
        if (!this.isFistClickChicken) {
            this.isFistClickChicken = true;
            this.barMission.getComponent("barTime").countDown();
            this.arrCus[0].getComponent("cusMission").loadTime();
            this.scheduleOnce(function () {
                _this.btnMachine.getChildByName("hind").active = true;
            }, 2);
        }
        if (!this.mcComp.canPickMoreChicken())
            return;
        this.isMoving = true;
        this.btnChicken.getChildByName("hind").opacity = 0;
        this.mcComp.moveToChicken();
    };
    NewClass.prototype.btn_mayChien = function () {
        if (this.isMcBusy())
            return;
        if (!this.mcComp.canDoAnyMachineAction())
            return;
        this.isMoving = true;
        this.btnMachine.getChildByName("hind").active = false;
        this.btnMachine.getChildByName("hind").opacity = 0;
        this.mcComp.moveToMachine();
    };
    NewClass.prototype.btn_cola = function () {
        if (this.isMcBusy())
            return;
        var cocaComp = this.btnCoca.getComponent("coca");
        var canCook = !cocaComp.isBusy();
        var canPickup = cocaComp.isCoca && this.mcComp.canPickItemType("coca");
        if (!canCook && !canPickup)
            return;
        this.isMoving = true;
        this.mcComp.moveToCoca();
    };
    // btn_sauce() {
    //     if (this.isMcBusy()) return;
    //     if (!this.mcComp.hasAnyItem() || this.mcComp.findCookedTraySlot() < 0) return;
    //     this.isMoving = true
    //     this.mcComp.moveToSauce()
    // }
    NewClass.prototype.btn_cake = function () {
        console.log(this.isMoving);
        if (this.isMcBusy())
            return;
        this.isMoving = true;
        this.mcComp.moveToCake();
    };
    NewClass.prototype.btn_tomato = function () {
        if (this.isMcBusy())
            return;
        this.isMoving = true;
        this.mcComp.moveToTomato();
    };
    NewClass.prototype.getCusTrayIndex = function (cusNode) {
        return this.arrCus.indexOf(cusNode);
    };
    NewClass.prototype.checkSell = function (targetCus) {
        console.log("check sell Main");
        var cus = targetCus || this.sellTargetCus || this.isTargetCus || this.arrCus[0];
        if (this.isMcBusy() || !cus)
            return false;
        var cusComp = cus.getComponent("cusMission");
        if (!cusComp || cusComp.isSuccess || !cusComp.isReadyForSell)
            return false;
        var trayIdx = this.mcComp.findTrayForCustomer(cusComp);
        if (!this.mcComp.hasAnyItem() || trayIdx < 0)
            return false;
        this.sellTargetCus = cus;
        this.sellTraySlot = trayIdx;
        this.isTargetCus = cus;
        this.isMoving = true;
        this.mcComp.moveToBuy();
        return true;
    };
    NewClass.prototype.validateSellAtCounter = function () {
        var cus = this.sellTargetCus || this.isTargetCus || this.arrCus[0];
        if (!cus) {
            this.isMoving = false;
            return;
        }
        var cusComp = cus.getComponent("cusMission");
        if (!cusComp || cusComp.isSuccess || !cusComp.isReadyForSell) {
            this.isMoving = false;
            this.sellTraySlot = -1;
            return;
        }
        cusComp.validateSell();
    };
    NewClass.prototype.nextCus = function (value, departedCus) {
        var _this = this;
        if (departedCus) {
            var idx = this.arrCus.indexOf(departedCus);
            if (idx >= 0)
                this.arrCus.splice(idx, 1);
        }
        else if (this.arrCus.length > 0) {
            this.arrCus.splice(0, 1);
        }
        this.countCus++;
        if (this.countCus == 1) {
            this.btnCake.getComponent(cc.Button).enabled = true;
            this.btnPotato.getComponent(cc.Button).enabled = true;
        }
        else if (this.countCus == 3) {
            this.barMission2.active = true;
            this.scheduleOnce(function () {
                cc.tween(_this.barMission2).by(0.4, { opacity: -255, position: cc.v3(0, 200) }).call(function () {
                    _this.barMission2.active = false;
                }).start();
            }, 1);
        }
        this.isMoving = false;
        this.sellTargetCus = null;
        this.sellTraySlot = -1;
        if (this.countCus >= this.maxCustomers || this.arrCus.length === 0) {
            this.isTargetCus = null;
            this.onEndGame(true);
            return;
        }
        var wasGroupAtCounter = this.counterCusCount > 1;
        if (wasGroupAtCounter) {
            this.counterCusCount--;
            this.mcComp.afterCustomerLeft();
            return;
        }
        this.isTargetCus = null;
        this.mcComp.resetToStart();
        var enterCount = this.getEnterCountForWave();
        this.enterCustomers(enterCount);
    };
    NewClass.prototype.start = function () {
        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.5);
    };
    NewClass.prototype.setGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.offGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    };
    NewClass.prototype.onEndGame = function (value) {
        var _this = this;
        if (this.isEndGame)
            return;
        this.isEndGame = true;
        this.warning.active = false;
        this.scheduleOnce(function () {
            _this.updateResponsive();
        }, 0.5);
        if (value == true) {
            cc.audioEngine.play(this.soundThinking, false, 0.5);
        }
        else {
            cc.audioEngine.play(this.soundThinking, false, 1);
        }
        this.linkToStore.active = true;
    };
    // update(dt) {
    //     // this.lbCoin.string = globalThis.gold.toString()
    //     let deviceResolution = cc.view.getFrameSize();
    //     if (deviceResolution.width < deviceResolution.height) {
    //         this.reponsive(true);
    //     }
    //     else {
    //         this.reponsive(false);
    //     }
    // }
    NewClass.prototype.updateResponsive = function () {
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
        // this.camera.zoomRatio = 0.8
        this.endCard.scale = (logic) ? 1.2 : 0.7;
        this.endCardWin.scale = (logic) ? 1.2 : 0.7;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.barCoin.scale = (logic) ? 2.5 : 1.4;
        this.barCoin.getComponent(cc.Widget).top = (logic) ? 210 : 140;
        this.phaoHoa.scale = (logic) ? 9 : 5;
        this.guild.scale = (logic) ? 2 : 1.2;
        this.guild.position = (logic) ? cc.v3(0, -900) : cc.v3(0, -360);
        this.timeup.scale = (logic) ? 2 : 1.4;
        this.amazing.scale = (logic) ? 1 : 1.4;
        this.endCardDoc.scale = 1.5;
        // this.notiMission.scale = (logic) ? 2 : 1
        // this.barMission2.scale = (logic) ? 2 : 1
        this.magVideo = 0;
        this.barMission.scale = (logic) ? 1.7 : 1;
        // this.camera.node.position = (logic) ? cc.v3(-160, 300, 0) : cc.v3(0, 120, 0)
        this.barMission.getComponent(cc.Widget).top = 50;
        this.camera.node.active = (logic) ? false : true;
        this.cameraDoc.node.active = (logic) ? true : false;
        this.mag = 0;
        this.magfront = 0;
        this.video.node.parent.scale = (logic) ? 2 : 1;
        this.video.node.parent.position = (logic) ? cc.v3(-500, 600) : cc.v3(0, 0);
        this.isScaleVideo = 2;
        if (this.isEndGame) {
            this.endCardDoc.active = (logic) ? true : false;
            this.endCardWin.active = (logic) ? false :
                this.endCardWin.active = true;
        }
        if (logic == true) {
            this.magVideo = 300;
            this.isScaleVideo = 1.5;
            this.isDoc = true;
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            var TALL_PHONE_MIN_RATIO = 2.0; // iPhone X ~2.16, 20:9 Android ~2.22
            // this.camera.zoomRatio = 1.4
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {
                this.barCoin.getComponent(cc.Widget).top = 300 + 30;
                this.barMission.getComponent(cc.Widget).top = 150 + 30;
                if (aspectRatio > 2.2) {
                    this.camera.zoomRatio = 1.75;
                }
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 1.5
                this.endCardDoc.scale = 1.2;
                this.barCoin.scale = 2;
            }
        }
        else {
            this.isDoc = false;
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // this.mag = -200
                this.magfront = 200;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 0.85
                // this.mag = 220
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
        property(cc.AudioClip)
    ], NewClass.prototype, "soundOk", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundTrans", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEnd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSellDone", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThinking", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCream", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCherry", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCreamMini", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThinkWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBanh", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThinkLose", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThinkWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAngry1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAngry2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundFoot", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundFunny", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundOpenOrder", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundTicketFly", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundDO", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundFail", void 0);
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
    ], NewClass.prototype, "endCardWin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "cameraDoc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "uiCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaoHoa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "warning", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "timeup", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "amazing", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "notiCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "notiMission", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCardDoc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barMission", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "barMission2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hind1", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "listPreCUs", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ticket", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "chef1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "chef2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "chef3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHand", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preTom", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preTofu", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preHanh", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDau", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preSauce", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "plate", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "plateList", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnTo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnDau", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnHanh", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnDauPhu", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnSauce", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listTick", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listItemNoi", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "noiSup", void 0);
    __decorate([
        property(cc.VideoPlayer)
    ], NewClass.prototype, "video", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cus1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCus2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "failUi", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listItemPlate2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cus2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "garan2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcR2FtZURvbnV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0FBRXZCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMm9DQztRQXpvQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFHaEMsZUFBUyxH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QUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hELDBDQUEwQztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3JCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNQLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUNsRSxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNQLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDakMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFdEUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDN0QsQ0FBQztJQUdELDZCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJ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QUFHLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUVsQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDMUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBRTdFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMvRCxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDaEMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ3BCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ1YsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBRTFDO2FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN2QixFQUFFLENB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QUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUUvRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7UUFDM0IsMkNBQTJDO1FBQzNDLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN6QywrRUFBK0U7UUFDL0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUE7UUFFaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FB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QUFDO0NBM29DRCxBQTJvQ0MsQ0Ezb0NxQyxFQUFFLENBQUMsU0FBUyxHQTJvQ2pEO2tCQTNvQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5jb2luID0gMFxyXG5nbG9iYWxUaGlzLkdhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kT2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRFbmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTZWxsRG9uZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5raW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hlcnJ5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3JlYW1NaW5pOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmFuaDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5MTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5MjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEZvb3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRGdW5ueTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE9wZW5PcmRlcjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGlja2V0Rmx5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRETzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRmFpbDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZFdpbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhRG9jOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJUaW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyQ29pbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb0hvYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1ldXA6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFtYXppbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgbm90aUNvaW46IGNjLkFuaW1hdGlvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aU1pc3Npb246IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkRG9jOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vbmV3XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJNaXNzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJNaXNzaW9uMjogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vYnRuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpbmQxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsaXN0UHJlQ1VzOiBjYy5QcmVmYWJbXSA9IFtdXHJcblxyXG4gICAgLy9uZXdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGlja2V0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGVmMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoZWYyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hlZjM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVUb206IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVUb2Z1OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUhhbmg6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlRGF1OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVNhdWNlOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhdGVMaXN0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5UbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkRhdTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkhhbmg6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkRhdVBodTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blNhdWNlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0VGljazogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEl0ZW1Ob2k6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vaVN1cDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuVmlkZW9QbGF5ZXIpXHJcbiAgICB2aWRlbzogY2MuVmlkZW9QbGF5ZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjdXMxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZhaWxVaTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEl0ZW1QbGF0ZTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjdXMyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FyYW4yOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgbWNDb21wID0gbnVsbFxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gdHV0TWlzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYXJyQmVwID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG4gICAgYXJyRGlhID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG5cclxuXHJcbiAgICBtYXhLaGF5ID0gN1xyXG5cclxuICAgIGFyckRvbnV0cG9zID0gW11cclxuXHJcbiAgICBpc1R1dENoaWxpID0gZmFsc2VcclxuICAgIGlzVHV0TWVhdCA9IGZhbHNlXHJcbiAgICBpc1R1dFZlZ2V0VGFibGUgPSBmYWxzZVxyXG4gICAgaXNUdXRDbGlja01lYXQgPSBmYWxzZVxyXG5cclxuXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICAvLyBpc1N0ZXAgPSAwXHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBtYXhDdXN0b21lcnMgPSA2XHJcbiAgICBpZFNvdW5kID0gbnVsbFxyXG4gICAgaXNTdGVwID0gMFxyXG4gICAgLy9pdGVtOiAwOmJ1Z2VyLCAxOiBrZW0gMjpkb251dCAzOmtob2FpdGF5IDQ6cGhvIDU6IHB1ZGRpbmcgNjogdHJhICA3OmJhbmhtaSA4OmNvY29udXRcclxuICAgIHJheVk6IG51bWJlcltdID0gWzEyMCwgMCwgLTEyMF07ICAgLy8gduG7iyB0csOtIFkgY+G7p2EgMyByYXlcclxuICAgIHNwYXduWDogbnVtYmVyID0gNzAwOyAgICAgICAgICAgICAgLy8gduG7iyB0csOtIHNwYXduIGLDqm4gcGjhuqNpXHJcbiAgICBhcnJJdGVtID0gW1tdLCBbXV1cclxuICAgIGFycktoYXkgPSBbXVxyXG4gICAgYXJyVGFyZ2V0TWlzc2lvbiA9IFtdXHJcbiAgICBhcnJDdXMgPSBbXVxyXG4gICAgc2VsbFRhcmdldEN1cyA9IG51bGxcclxuICAgIHNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICBjdXNDb3VudGVyUG9zID0gbnVsbFxyXG4gICAgY3VzU2xvdEdhcCA9IDUwMFxyXG4gICAgY3VzRW50ZXJPZmZzZXQgPSBjYy52MygzNTAsIDAsIDApXHJcbiAgICBjdXNXYWxrU3BlZWQgPSA0MzcuNVxyXG4gICAgY291bnRlckN1c0NvdW50ID0gMFxyXG4gICAgcHJlQ3VzSW5kZXggPSAwXHJcbiAgICBpc1N0YXJ0Z2FtZSA9IGZhbHNlXHJcbiAgICBpc0ZpcnN0Q2xpY2sgPSBmYWxzZVxyXG4gICAgLy9taXNzaW9uXHJcbiAgICBtc1RvbSA9IGZhbHNlO1xyXG4gICAgbXNIYW5oID0gZmFsc2U7XHJcbiAgICBtc0RhdSA9IGZhbHNlO1xyXG4gICAgbXNUb2Z1ID0gZmFsc2VcclxuICAgIG1zU2F1Y2VzID0gZmFsc2VcclxuICAgIC8vMDpiYW5oIHRodW9uZyAxOmNob2NvbGF0ZSAyOiBzdHJhd2JlcnJ5IFxyXG4gICAgaWRGdW5ueSA9IG51bGxcclxuICAgIG1hZyA9IDBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgIGNjLnZpZXcuc2V0UmVzaXplQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRpY2tldCgpXHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIGxldCBhbmltQ2hlZnQxID0gdGhpcy5jaGVmMS5jaGlsZHJlblswXVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgYW5pbUNoZWZ0MS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIldpblwiLCBmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5pZEZ1bm55ID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRnVubnksIGZhbHNlLCAxKVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZEZ1bm55KVxyXG4gICAgICAgICAgICBhbmltQ2hlZnQxLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG5cclxuICAgICAgICB9LCAyKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwICsgdGhpcy5tYWdmcm9udCwgMTIwKVxyXG4gICAgfVxyXG4gICAgaXNIYW5kID0gbnVsbFxyXG4gICAgaXNTaG93TWVudSA9IGZhbHNlXHJcbiAgICBtb3ZlVGlja2V0KCkge1xyXG4gICAgICAgIHRoaXMudGlja2V0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaWNrZXRGbHksIGZhbHNlLCAwLjMpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMjAwMCwgLTIwMC4yMzIpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRpY2tldC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwidGlja2V0X3Nob3dcIilcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDEsIHsgem9vbVJhdGlvOiAxIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMjEwMCwgLTIwMC4yMzIpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRpY2tldC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwidGlja2V0X3Nob3dcIilcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2MpLnRvKDEsIHsgem9vbVJhdGlvOiAxLjYgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgc2hvd1RpY2tldCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kT3Blbk9yZGVyLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzU2hvd01lbnUgPSB0cnVlXHJcbiAgICAgICAgfSwgMC40KVxyXG4gICAgfVxyXG4gICAgYXJyVG9tID0gW107XHJcbiAgICBhcnJIYW5oID0gW107XHJcbiAgICBhcnJEYXUgPSBbXTtcclxuICAgIGFyclRvZnUgPSBbXTtcclxuICAgIGFyclNhdWNlID0gbnVsbFxyXG4gICAgLy8gYnRuX3RvbSgpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc1Nob3dNZW51ID09IGZhbHNlKSByZXR1cm5cclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kKVxyXG4gICAgLy8gICAgIHRoaXMubXNUb20gPSB0cnVlXHJcbiAgICAvLyAgICAgdGhpcy5idG5Uby5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgIC8vICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgbGV0IGFyclBvcyA9IFtjYy52MigtNzUsIC0yNCksIGNjLnYyKC02NCwgMTkpLCBjYy52MigtNDQsIC0zKV1cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgcHJlVG9tID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVUb20pO1xyXG4gICAgLy8gICAgICAgICAgICAgcHJlVG9tLnBvc2l0aW9uID0gY2MudjMoLTMzNCwgLTI5KTtcclxuICAgIC8vICAgICAgICAgICAgIHByZVRvbS5wYXJlbnQgPSB0aGlzLnBsYXRlTGlzdFxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJUb20ucHVzaChwcmVUb20pXHJcbiAgICAvLyAgICAgICAgICAgICBjYy50d2VlbihwcmVUb20pLmJlemllclRvKDAuNSwgY2MudjIoLTMzNCwgLTI5KSwgY2MudjIoLTMzNCwgLTI5ICsgMzAwKSwgYXJyUG9zW2ldKS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgIH0sIGkgKiAwLjE1KVxyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcygpXHJcbiAgICAvLyAgICAgfSwgMC41ICsgMC4xNSAqIDMpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNoZWNrSGluZCgpXHJcbiAgICAvLyAgICAgfSwgMSlcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICBidG5fZG9ubnV0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2hvd01lbnUgPT0gZmFsc2UpIHJldHVyblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmQpXHJcbiAgICAgICAgdGhpcy5pc1N0ZXAgPSAxXHJcblxyXG4gICAgICAgIHRoaXMubXNUb20gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5Uby5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgbGV0IGFyclBvcyA9IFtjYy52MigtMCwgMCksIGNjLnYyKDUyLCA5KSwgY2MudjIoLTQyLCAtMjQpXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVUb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVRvbSk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucG9zaXRpb24gPSBjYy52MygtMzM0LCAtMjkpO1xyXG4gICAgICAgICAgICAgICAgcHJlVG9tLnBhcmVudCA9IHRoaXMucGxhdGVMaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyclRvbS5wdXNoKHByZVRvbSlcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHByZVRvbSkuYmV6aWVyVG8oMC41LCBjYy52MigtMzM0LCAtMjkpLCBjYy52MigtMzM0LCAtMjkgKyAzMDApLCBhcnJQb3NbaV0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgaSAqIDAuMTUpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKClcclxuICAgICAgICB9LCAwLjUgKyAwLjE1ICogMylcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tIaW5kKClcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG4gICAgYnRuX2RhdVRheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgIT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkRhdS5nZXRDaGlsZEJ5TmFtZShcImhpbmRCb3hcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1Nob3dNZW51ID09IGZhbHNlKSByZXR1cm5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kKVxyXG5cclxuICAgICAgICB0aGlzLm1zRGF1ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuRGF1LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0VGljay5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgbGV0IGl0ZW1TYXVjZSA9IHRoaXMuZ2FyYW4yLmNoaWxkcmVuWzFdXHJcbiAgICAgICAgaXRlbVNhdWNlLnNjYWxlID0gMC41XHJcbiAgICAgICAgaXRlbVNhdWNlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4oaXRlbVNhdWNlKS50bygwLjIsIHsgc2NhbGU6IDEuMTUgfSkudG8oMC4wNSwgeyBzY2FsZTogMSB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gbGV0IGFyclBvcyA9IFtjYy52Mig4MywgLTM2KSwgY2MudjIoNTEsIC01NCksIGNjLnYyKDE2LCAtNjIpXVxyXG4gICAgICAgIC8vIGxldCBhcnJBbmdsZSA9IFswLCAwLCAwXVxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBwcmVUb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhdSk7XHJcbiAgICAgICAgLy8gICAgICAgICBwcmVUb20ucG9zaXRpb24gPSBjYy52MygtMTM0LCAtMjQ1KTtcclxuICAgICAgICAvLyAgICAgICAgIHByZVRvbS5wYXJlbnQgPSB0aGlzLmxpc3RJdGVtUGxhdGUyXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFyckRhdS5wdXNoKHByZVRvbSlcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBjYy50d2VlbihwcmVUb20pLmJlemllclRvKDAuNSwgY2MudjIoLTEzNCwgLTI0NSksIGNjLnYyKC0xMzQsIC0yNDUgKyAzNTApLCBhcnJQb3NbaV0pLnN0YXJ0KClcclxuICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHByZVRvbSkudG8oMC41LCB7IGFuZ2xlOiBhcnJBbmdsZVtpXSB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gICAgIH0sIGkgKiAwLjE1KVxyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXRlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMucGxhdGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSA1XHJcbiAgICAgICAgfSwgMC4zKVxyXG5cclxuICAgIH1cclxuICAgIGJ0bl9zYXVjZURhdVRheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1Nob3dNZW51ID09IGZhbHNlKSByZXR1cm5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwICE9IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5TYXVjZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRCb3hcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5pc1N0ZXAgIT0gMikgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmQpXHJcbiAgICAgICAgdGhpcy5idG5TYXVjZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIGxldCBzdGFydFBvcyA9IGNjLnYyKDMwMCwgMilcclxuICAgICAgICAvLyBsZXQgZW5kcG9zID0gY2MudjIoMS41LCA2Nyk7XHJcbiAgICAgICAgdGhpcy5saXN0VGljay5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIC8vIHRoaXMuYXJyU2F1Y2UgPSBwcmVTYXVjZTtcclxuICAgICAgICBsZXQgaXRlbVJhdSA9IHRoaXMuZ2FyYW4yLmNoaWxkcmVuWzBdXHJcbiAgICAgICAgaXRlbVJhdS5zY2FsZSA9IDAuNVxyXG4gICAgICAgIGl0ZW1SYXUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy50d2VlbihpdGVtUmF1KS50bygwLjIsIHsgc2NhbGU6IDEuMTUgfSkudG8oMC4wNSwgeyBzY2FsZTogMSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5tc1NhdWNlcyA9IHRydWVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDM7XHJcblxyXG4gICAgICAgIH0sIDAuNilcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxhdGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF0ZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIC8vIH0sIDAuMylcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNTYXVjZUZpbmFsID0gdHJ1ZVxyXG4gICAgICAgIC8vICAgICB0aGlzLmNoZWNrU3VjY2VzcygpXHJcbiAgICAgICAgLy8gfSwgMC4xKVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jaGVja0hpbmQoKVxyXG4gICAgICAgIC8vIH0sIDIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJ0bl9oYW5oKCkge1xyXG5cclxuICAgICAgICB0aGlzLmJ0bkhhbmguZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kQm94XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDAuNSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzU2hvd01lbnUgPT0gZmFsc2UpIHJldHVyblxyXG5cclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgLy8gdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kKVxyXG5cclxuICAgICAgICAvLyB0aGlzLm1zSGFuaCA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5idG5IYW5oLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIC8vIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAvLyB0aGlzLmxpc3RUaWNrLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoKVxyXG4gICAgICAgIC8vIH0sIDAuNSArIDAuMTUgKiAzKVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jaGVja0hpbmQoKVxyXG4gICAgICAgIC8vIH0sIDIpXHJcbiAgICB9XHJcbiAgICBidG5fZGF1UGh1KCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzU3RlcCAhPSAzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCAhPSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuRGF1UGh1LmdldENoaWxkQnlOYW1lKFwiaGluZEJveFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1Nob3dNZW51ID09IGZhbHNlKSByZXR1cm5cclxuXHJcbiAgICAgICAgdGhpcy5tc1RvZnUgPSB0cnVlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmQpXHJcblxyXG4gICAgICAgIHRoaXMuYnRuRGF1UGh1LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmxpc3RUaWNrLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBsZXQgaXRlbVNhdWNlID0gdGhpcy5nYXJhbjIuY2hpbGRyZW5bM11cclxuICAgICAgICBpdGVtU2F1Y2Uuc2NhbGUgPSAwLjVcclxuICAgICAgICBpdGVtU2F1Y2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy50d2VlbihpdGVtU2F1Y2UpLnRvKDAuMiwgeyBzY2FsZTogMS4xNSB9KS50bygwLjA1LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyB0aGlzLmxpc3RJdGVtUGxhdGUyLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5saXN0SXRlbVBsYXRlMi5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLmFyclRvbVsyXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAvLyB0aGlzLmFyclRvbVsyXS5jaGlsZHJlbls1XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNoZWNrU3VjY2VzcygpXHJcbiAgICAgICAgLy8gfSwgMC41ICsgMC4xNSAqIDMpXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNoZWNrSGluZCgpXHJcbiAgICAgICAgLy8gfSwgMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSA0XHJcbiAgICAgICAgfSwgMC4zKVxyXG4gICAgfVxyXG4gICAgYnRuX2RhdSgpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5pc1N0ZXAgIT0gNCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCAhPSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuRGF1LmdldENoaWxkQnlOYW1lKFwiaGluZEJveFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU2hvd01lbnUgPT0gZmFsc2UpIHJldHVyblxyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kKVxyXG5cclxuICAgICAgICB0aGlzLm1zRGF1ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuRGF1LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0VGljay5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgbGV0IGFyclBvcyA9IFtjYy52MigtNSwgLTkpLCBjYy52MigtOCwgMTEpLCBjYy52MigtMjEsIDExKV1cclxuICAgICAgICBsZXQgYXJyQW5nbGUgPSBbNDUsIDU1LCA3M11cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlVG9tID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVEYXUpO1xyXG4gICAgICAgICAgICAgICAgcHJlVG9tLnBvc2l0aW9uID0gY2MudjMoLTEzNCwgLTI0NSk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucGFyZW50ID0gdGhpcy5saXN0SXRlbVBsYXRlMlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJEYXUucHVzaChwcmVUb20pXHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocHJlVG9tKS5iZXppZXJUbygwLjUsIGNjLnYyKC0xMzQsIC0yNDUpLCBjYy52MigtMTM0LCAtMjQ1ICsgMzUwKSwgYXJyUG9zW2ldKS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwcmVUb20pLnRvKDAuNSwgeyBhbmdsZTogYXJyQW5nbGVbaV0gfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCBpICogMC4xNSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2hlY2tTdWNjZXNzKClcclxuICAgICAgICAvLyB9LCAwLjUgKyAwLjE1ICogMylcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2hlY2tIaW5kKClcclxuICAgICAgICAvLyB9LCAyKVxyXG4gICAgfVxyXG4gICAgaXNTYXVjZUZpbmFsID0gZmFsc2VcclxuICAgIC8vIGJ0bl9zYXVjZSgpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc1Nob3dNZW51ID09IGZhbHNlKSByZXR1cm5cclxuXHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZClcclxuICAgIC8vICAgICB0aGlzLmJ0blNhdWNlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgbGV0IHN0YXJ0UG9zID0gY2MudjIoMzAwLCAyKVxyXG4gICAgLy8gICAgIGxldCBlbmRwb3MgPSBjYy52MigxLjUsIDY3KTtcclxuICAgIC8vICAgICBsZXQgcHJlU2F1Y2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVNhdWNlKVxyXG4gICAgLy8gICAgIHByZVNhdWNlLnBvc2l0aW9uID0gY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcbiAgICAvLyAgICAgcHJlU2F1Y2UucGFyZW50ID0gdGhpcy5wbGF0ZUxpc3RcclxuICAgIC8vICAgICB0aGlzLmFyclNhdWNlID0gcHJlU2F1Y2U7XHJcbiAgICAvLyAgICAgY2MudHdlZW4ocHJlU2F1Y2UpLmJlemllclRvKDAuNSwgc3RhcnRQb3MsIGNjLnYyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkgKyAzMDApLCBlbmRwb3MpLnN0YXJ0KClcclxuICAgIC8vICAgICB0aGlzLm1zU2F1Y2VzID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNTYXVjZUZpbmFsID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcygpXHJcbiAgICAvLyAgICAgfSwgMC41KVxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5jaGVja0hpbmQoKVxyXG4gICAgLy8gICAgIH0sIDIpXHJcbiAgICAvLyB9XHJcbiAgICBjaGVja1N1Y2Nlc3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXNEYXUgPT0gdHJ1ZSAmJiB0aGlzLm1zSGFuaCA9PSB0cnVlICYmIHRoaXMubXNTYXVjZXMgPT0gdHJ1ZSAmJiB0aGlzLm1zVG9mdSA9PSB0cnVlICYmIHRoaXMubXNUb20gPT0gdHJ1ZSAmJiB0aGlzLmlzU2F1Y2VGaW5hbCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXRlLmdldENoaWxkQnlOYW1lKFwicGhhb2hvYVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTZWxsRG9uZSwgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0ZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls1XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbXNQYWxldDEgPSBmYWxzZVxyXG4gICAgLy8gaXNTdGVwPTBcclxuICAgIGNoZWNrSGluZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tc1BhbGV0MSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXRlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMucGxhdGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1zU2F1Y2VzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1zSGFuaCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tc0RhdSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tc1RvZnUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaWRGb290ID0gbnVsbFxyXG4gICAgYnRuX3BsYXRlKCkge1xyXG4gICAgICAgIHRoaXMucGxhdGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzVdLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgbGV0IGNoZWZBTmltID0gdGhpcy5jaGVmMi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDAsIFwiTC1hcm1cIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnBsYXRlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucGxhdGUucGFyZW50ID0gdGhpcy5jaGVmMjtcclxuICAgICAgICB0aGlzLnBsYXRlLnBvc2l0aW9uID0gY2MudjMoMjE3LCA0ODIpXHJcbiAgICAgICAgdGhpcy5wbGF0ZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEZvb3QsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgdGhpcy5jaGVmMi5zY2FsZVggPSAxXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTIzOSwgMzQ2KSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTIzOSwgMzQ2KSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNoZWYyKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDEyMzEsIC0yMTkpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDEsIFwiSWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZEZvb3QpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zSXRlbSgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDEsIFwiV2Fsa1wiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDUpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygxMjM5LCAtMjAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTIzOSwgLTIwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLmNoZWYzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaGVmMikudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygxMjMxLCAtNTk1LjE1KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjaGVmQU5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZEZvb3QpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRyYW5zSXRlbSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zSXRlbSgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDEsIFwiV2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgdHJhbnNJdGVtKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNTdGVwKVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJQb3NUb20gPSBbdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlblswXS5wb3NpdGlvbl1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gdGhpcy5hcnJUb21baV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MxID0gYXJyUG9zVG9tW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvczEgPSB0aGlzLmxpc3RJdGVtTm9pLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MxKVxyXG4gICAgICAgICAgICAgICAgICAgIHBvczEgPSBpdGVtMS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0xKS5iZXppZXJUbygwLjYsIGNjLnYyKGl0ZW0xLngsIGl0ZW0xLnkpLCBjYy52MihpdGVtMS54LCBpdGVtMS55ICsgNDAwKSwgY2MudjMocG9zMS54LCBwb3MxLnkpKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlPXRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbltpXS5jaGlsZHJlblswXS5jaGlsZHJlblsxXSkuZGVsYXkoMC40KS50bygyLjUsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDAuMSAqIGkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtMS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImx2MS1jaGluXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyLjUpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVmQU5pbSA9IHRoaXMuY2hlZjIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0ZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9pU3VwLmdldENvbXBvbmVudChcImNvb2tpbmdcIikuc2V0T24oKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NPdW5kTmF1ID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ3JlYW1NaW5pLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXMxLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaXNTT3VuZE5hdSlcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdGUgPSB0aGlzLmNoZWYyLmdldENoaWxkQnlOYW1lKFwicGxhdGUyXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcGxhdGUyID0gdGhpcy5jaGVmMi5nZXRDaGlsZEJ5TmFtZShcInBsYXRlMlwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWZBTmltID0gdGhpcy5jaGVmMi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgICBjaGVmQU5pbS5zZXRBbmltYXRpb24oMSwgXCJXYWxrXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDAsIFwiTC1hcm1cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRGb290ID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRm9vdCwgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTIzOSwgMzQ2KSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDEyMzksIDM0NikgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMjAwMCwgLTIwMC4yMzIpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDIxMDAsIC0yMDAuMjMyKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWYyLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNoZWYyKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDIzMTYsIC01OTUpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkRm9vdClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXRlLnBhcmVudCA9IHRoaXMuY2hlZjIucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhdGUucG9zaXRpb24gPSBjYy52MygyMjg1LCAtMzUxKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudHJhbnNJdGVtKClcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIH0sIDMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy50aWNrZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHBsYXRlMiA9IHRoaXMuY2hlZjIuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF0ZTJcIilcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudGlja2V0KS50bygwLjMsIHsgc2NhbGU6IDIuMSB9KS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLmJ5KDEsIHsgcG9zaXRpb246IGNjLnYzKDAsIC00MDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkuYnkoMSwgeyBwb3NpdGlvbjogY2MudjMoMCwgLTQwMCkgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgcGxhdGUyLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICBwbGF0ZTIucG9zaXRpb24gPSBjYy52MygxMjM2LCAtMzgyKVxyXG4gICAgICAgICAgICBsZXQgYW5pbSA9IHRoaXMuY2hlZjMuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAvLyB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHBsYXRlMikudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygxMjM2LCAtNTUwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBsYXRlMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlZjMuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF0ZTJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGFuaW0uc2V0QW5pbWF0aW9uKDEsIFwiV2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiTC1hcm1cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlZjMuc2NhbGVYID0gMSAgICAgICAgICAgICAgICAvLyB0aGlzLnZpZGVvLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRE8sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMSwgXCJXYWxrXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaGVmMykudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygtNDc1LCAtMTIyNC42OTgpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2luXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMSwgXCJXaW5cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWYzLmdldENoaWxkQnlOYW1lKFwicGxhdGUyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzMi5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1czIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICB9LCAxLjQpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS5ieSgxLjUsIHsgcG9zaXRpb246IGNjLnYzKC0xNzAwLCAtNDAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS5ieSgxLjUsIHsgcG9zaXRpb246IGNjLnYzKC0xNzAwLCAtNDAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIDAuNylcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q3VzMi5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTE2MCArIDQwICsgMjUwLCAzMDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC01MDAgKyA0MCArIDI1MCwgMzAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1ldXAuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICB9LCAxICsgMi41KVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnZpZGVvLm5vZGUuc2NhbGUgPSB0aGlzLmlzU2NhbGVWaWRlb1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy52aWRlby5ub2RlLnBvc2l0aW9uID0gY2MudjMoMTcwMCwgLTMwMClcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudmlkZW8ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDE3MDAsIC0zMDApXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy52aWRlby5ub2RlLnBvc2l0aW9uPVxyXG4gICAgICAgICAgICAvLyB9LCA0KVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnZpZGVvLm5vZGUucG9zaXRpb24gPSBjYy52MygtOTAwICsgdGhpcy5tYWdWaWRlbywgLTEwMDApXHJcblxyXG4gICAgICAgICAgICAvLyB9LCA1IC0gMC4zKVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmxpc3RDdXMyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygtNDAsIDMwMCAtIDEwMCwgMClcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhRG9jLm5vZGUucG9zaXRpb24gPSBjYy52MygtNDAsIDMwMCAtIDEwMCwgMClcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhRG9jLnpvb21SYXRpbyA9IDEuNFxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnZpZGVvLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmZhaWxVaS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRmFpbCwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5mYWlsVWkuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMTYwICsgNDAgKyAyNTAsIDMwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0xNjAgKyA0MCArIDI1MCwgMzAwKSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuY2hlZjEuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJGYWlsXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQW5ncnkyLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5rTG9zZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm9uRW5kR2FtZShmYWxzZSlcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LCAzKVxyXG4gICAgICAgICAgICAvLyAgICAgfSwgMS4zKVxyXG5cclxuICAgICAgICAgICAgLy8gfSwgNS44KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaXNTT3VuZE5hdSA9IG51bGxcclxuXHJcblxyXG4gICAgLy8gcmVwbGFjZUN1c3RvbWVyKGRlcGFydGVkQ3VzOiBjYy5Ob2RlLCBjb3VudGVyUG9zOiBjYy5WZWMzKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICAvLyAgICAgbGV0IGlkeCA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoZGVwYXJ0ZWRDdXMpXHJcblxyXG4gICAgLy8gICAgIGxldCBuZXdDdXMgPSB0aGlzLnNwYXduQ3VzdG9tZXJGcm9tUHJlZmFiKClcclxuICAgIC8vICAgICBpZiAoIW5ld0N1cykgcmV0dXJuXHJcbiAgICAvLyAgICAgdGhpcy5idG5DYWtlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMuYnRuUG90YXRvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgLy8gICAgIGxldCBuZXdDdXNDb21wID0gbmV3Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIilcclxuICAgIC8vICAgICBpZiAobmV3Q3VzQ29tcCkge1xyXG4gICAgLy8gICAgICAgICBuZXdDdXNDb21wLmdhbWVQbGF5ID0gdGhpc1xyXG4gICAgLy8gICAgICAgICBuZXdDdXNDb21wLmlzUmVhZHlGb3JTZWxsID0gZmFsc2VcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGlmICh0aGlzLnNlbGxUYXJnZXRDdXMgPT09IGRlcGFydGVkQ3VzIHx8IHRoaXMuaXNUYXJnZXRDdXMgPT09IGRlcGFydGVkQ3VzKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2VsbFRhcmdldEN1cyA9IG51bGxcclxuICAgIC8vICAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSAtMVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgIC8vICAgICBpZiAodGhpcy5tY0NvbXApIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5tY0NvbXAudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJDdXNbaWR4XSA9IG5ld0N1c1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2gobmV3Q3VzKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBkZXBhcnRlZEN1cy5kZXN0cm95KClcclxuXHJcbiAgICAvLyAgICAgbGV0IHNwYXduUG9zID0gY291bnRlclBvcy5jbG9uZSgpLmFkZCh0aGlzLmN1c0VudGVyT2Zmc2V0KVxyXG4gICAgLy8gICAgIGxldCBkaXN0YW5jZSA9IHNwYXduUG9zLnN1Yihjb3VudGVyUG9zKS5tYWcoKVxyXG4gICAgLy8gICAgIGxldCBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gdGhpcy5jdXNXYWxrU3BlZWRcclxuXHJcbiAgICAvLyAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5ld0N1cylcclxuICAgIC8vICAgICBuZXdDdXMucG9zaXRpb24gPSBzcGF3blBvc1xyXG4gICAgLy8gICAgIG5ld0N1cy5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgbmV3Q3VzQ29tcC5tb3ZlKClcclxuICAgIC8vICAgICBjYy50d2VlbihuZXdDdXMpXHJcbiAgICAvLyAgICAgICAgIC50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogY291bnRlclBvcyB9KVxyXG4gICAgLy8gICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBuZXdDdXNDb21wLnNob3dNaXNzaW9uKClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBuZXdDdXNcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLnN0YXJ0KClcclxuICAgIC8vIH1cclxuICAgIG9uSGluZCgpIHtcclxuICAgICAgICB0aGlzLmhpbmQxLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Q3VzUXVldWUoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbaV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbnRlckN1c3RvbWVycygxLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RDbGljaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNoaWNrZW4uZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMpXHJcbiAgICB9XHJcbiAgICBpc01vdmluZyA9IGZhbHNlXHJcbiAgICBpc0Zpc3QgPSBmYWxzZVxyXG4gICAgaXNGaXN0Q2xpY2tDaGlja2VuID0gZmFsc2VcclxuXHJcbiAgICBpc01jQnVzeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc01vdmluZyB8fCAodGhpcy5tY0NvbXAgJiYgdGhpcy5tY0NvbXAuaXNXYWxraW5nKCkpXHJcbiAgICB9XHJcblxyXG4gICAgYnRuX2NoaWNrZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Zpc3RDbGlja0NoaWNrZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Zpc3RDbGlja0NoaWNrZW4gPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmNvdW50RG93bigpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuY2FuUGlja01vcmVDaGlja2VuKCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuQ2hpY2tlbi5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQ2hpY2tlbigpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bl9tYXlDaGllbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5jYW5Eb0FueU1hY2hpbmVBY3Rpb24oKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmJ0bk1hY2hpbmUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvTWFjaGluZSgpXHJcbiAgICB9XHJcbiAgICBidG5fY29sYSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNvY2FDb21wID0gdGhpcy5idG5Db2NhLmdldENvbXBvbmVudChcImNvY2FcIilcclxuICAgICAgICBsZXQgY2FuQ29vayA9ICFjb2NhQ29tcC5pc0J1c3koKVxyXG4gICAgICAgIGxldCBjYW5QaWNrdXAgPSBjb2NhQ29tcC5pc0NvY2EgJiYgdGhpcy5tY0NvbXAuY2FuUGlja0l0ZW1UeXBlKFwiY29jYVwiKVxyXG4gICAgICAgIGlmICghY2FuQ29vayAmJiAhY2FuUGlja3VwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9Db2NhKClcclxuICAgIH1cclxuICAgIC8vIGJ0bl9zYXVjZSgpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLm1jQ29tcC5oYXNBbnlJdGVtKCkgfHwgdGhpcy5tY0NvbXAuZmluZENvb2tlZFRyYXlTbG90KCkgPCAwKSByZXR1cm47XHJcbiAgICAvLyAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgIC8vICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9TYXVjZSgpXHJcbiAgICAvLyB9XHJcbiAgICBidG5fY2FrZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzTW92aW5nKVxyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0Nha2UoKVxyXG4gICAgfVxyXG4gICAgYnRuX3RvbWF0bygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9Ub21hdG8oKVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VzVHJheUluZGV4KGN1c05vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXNOb2RlKVxyXG4gICAgfVxyXG4gICAgY2hlY2tTZWxsKHRhcmdldEN1cz86IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIHNlbGwgTWFpblwiKVxyXG4gICAgICAgIGxldCBjdXMgPSB0YXJnZXRDdXMgfHwgdGhpcy5zZWxsVGFyZ2V0Q3VzIHx8IHRoaXMuaXNUYXJnZXRDdXMgfHwgdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpIHx8ICFjdXMpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgY3VzQ29tcC5pc1N1Y2Nlc3MgfHwgIWN1c0NvbXAuaXNSZWFkeUZvclNlbGwpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCB0cmF5SWR4ID0gdGhpcy5tY0NvbXAuZmluZFRyYXlGb3JDdXN0b21lcihjdXNDb21wKVxyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuaGFzQW55SXRlbSgpIHx8IHRyYXlJZHggPCAwKSByZXR1cm4gZmFsc2VcclxuICAgICAgICB0aGlzLnNlbGxUYXJnZXRDdXMgPSBjdXNcclxuICAgICAgICB0aGlzLnNlbGxUcmF5U2xvdCA9IHRyYXlJZHhcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gY3VzXHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9CdXkoKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZVNlbGxBdENvdW50ZXIoKSB7XHJcbiAgICAgICAgbGV0IGN1cyA9IHRoaXMuc2VsbFRhcmdldEN1cyB8fCB0aGlzLmlzVGFyZ2V0Q3VzIHx8IHRoaXMuYXJyQ3VzWzBdXHJcbiAgICAgICAgaWYgKCFjdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8IGN1c0NvbXAuaXNTdWNjZXNzIHx8ICFjdXNDb21wLmlzUmVhZHlGb3JTZWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXNDb21wLnZhbGlkYXRlU2VsbCgpXHJcbiAgICB9XHJcbiAgICBuZXh0Q3VzKHZhbHVlOiBib29sZWFuLCBkZXBhcnRlZEN1cz86IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoZGVwYXJ0ZWRDdXMpIHtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoZGVwYXJ0ZWRDdXMpXHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkgdGhpcy5hcnJDdXMuc3BsaWNlKGlkeCwgMSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXJyQ3VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMuc3BsaWNlKDAsIDEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0bkNha2UuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuUG90YXRvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvdW50Q3VzID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJhck1pc3Npb24yKS5ieSgwLjQsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIDIwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNlbGxUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSAtMVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA+PSB0aGlzLm1heEN1c3RvbWVycyB8fCB0aGlzLmFyckN1cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgd2FzR3JvdXBBdENvdW50ZXIgPSB0aGlzLmNvdW50ZXJDdXNDb3VudCA+IDFcclxuICAgICAgICBpZiAod2FzR3JvdXBBdENvdW50ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyQ3VzQ291bnQtLVxyXG4gICAgICAgICAgICB0aGlzLm1jQ29tcC5hZnRlckN1c3RvbWVyTGVmdCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGxcclxuICAgICAgICB0aGlzLm1jQ29tcC5yZXNldFRvU3RhcnQoKVxyXG5cclxuICAgICAgICBsZXQgZW50ZXJDb3VudCA9IHRoaXMuZ2V0RW50ZXJDb3VudEZvcldhdmUoKVxyXG4gICAgICAgIHRoaXMuZW50ZXJDdXN0b21lcnMoZW50ZXJDb3VudClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pZFNvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuNSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldEdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1ncmF5LXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuXHJcbiAgICB9XHJcbiAgICBvZmZHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW5kR2FtZSA9IGZhbHNlXHJcblxyXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKClcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua2luZywgZmFsc2UsIDAuNSlcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtpbmcsIGZhbHNlLCAxKVxyXG4gICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICBpc0RvYyA9IGZhbHNlXHJcbiAgICAvLyB1cGRhdGUoZHQpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxyXG4gICAgLy8gICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgIC8vICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHVwZGF0ZVJlc3BvbnNpdmUoKSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFyclBvc01lbnVOZ2FuZyA9IFtjYy52MygtMzkxLCAtMTAyKSwgY2MudjMoMzc1LCAtMTEyKSwgY2MudjMoMTE0LCAtMTIwKSwgY2MudjMoLTQwOSwgLTI4NCksIGNjLnYzKC0xNTgsIC0yOTYpLCBjYy52MygxMTgsIC0yODApLCBjYy52MygzOTAsIC0yOTYpLCBjYy52MygtMTM3LCAtMTE2KV07XHJcbiAgICBhcnJQb3NEb2MgPSBbY2MudjMoMjYsIC0zMzcpLCBjYy52MygzMzYsIC0xMTIpLCBjYy52MygxNS41LCAtMTIxKSwgY2MudjMoLTE3MCwgLTUyNS43KSwgY2MudjMoLTMwMCwgLTM1MiksIGNjLnYzKDE4Ni45NiwgLTUxMiksIGNjLnYzKDM1NSwgLTMzNSksIGNjLnYzKC0yOTIsIC0xMTYpXVxyXG4gICAgbWFnZnJvbnQgPSAwXHJcbiAgICBtYWdWaWRlbyA9IDBcclxuICAgIGlzU2NhbGVWaWRlbyA9IDFcclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5iYXJDb2luLnNjYWxlID0gKGxvZ2ljKSA/IDIuNSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAobG9naWMpID8gMjEwIDogMTQwXHJcbiAgICAgICAgdGhpcy5waGFvSG9hLnNjYWxlID0gKGxvZ2ljKSA/IDkgOiA1XHJcbiAgICAgICAgdGhpcy5ndWlsZC5zY2FsZSA9IChsb2dpYykgPyAyIDogMS4yXHJcbiAgICAgICAgdGhpcy5ndWlsZC5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtOTAwKSA6IGNjLnYzKDAsIC0zNjApXHJcblxyXG4gICAgICAgIHRoaXMudGltZXVwLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxLjRcclxuICAgICAgICB0aGlzLmFtYXppbmcuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuNVxyXG4gICAgICAgIC8vIHRoaXMubm90aU1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMiA6IDFcclxuICAgICAgICAvLyB0aGlzLmJhck1pc3Npb24yLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgdGhpcy5tYWdWaWRlbyA9IDBcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMS43IDogMVxyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoLTE2MCwgMzAwLCAwKSA6IGNjLnYzKDAsIDEyMCwgMClcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNTBcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgdGhpcy5jYW1lcmFEb2Mubm9kZS5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5tYWcgPSAwXHJcbiAgICAgICAgdGhpcy5tYWdmcm9udCA9IDBcclxuICAgICAgICB0aGlzLnZpZGVvLm5vZGUucGFyZW50LnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxO1xyXG4gICAgICAgIHRoaXMudmlkZW8ubm9kZS5wYXJlbnQucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoLTUwMCwgNjAwKSA6IGNjLnYzKDAsIDApXHJcbiAgICAgICAgdGhpcy5pc1NjYWxlVmlkZW8gPSAyXHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWdWaWRlbyA9IDMwMFxyXG4gICAgICAgICAgICB0aGlzLmlzU2NhbGVWaWRlbyA9IDEuNVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0RvYyA9IHRydWVcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIGNvbnN0IFRBTExfUEhPTkVfTUlOX1JBVElPID0gMi4wOyAgICAgICAgLy8gaVBob25lIFggfjIuMTYsIDIwOjkgQW5kcm9pZCB+Mi4yMlxyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjRcclxuICAgICAgICAgICAgaWYgKGFzcGVjdFJhdGlvID49IFRBTExfUEhPTkVfTUlOX1JBVElPKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhckNvaW4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMzAwICsgMzBcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAxNTAgKyAzMFxyXG4gICAgICAgICAgICAgICAgaWYgKGFzcGVjdFJhdGlvID4gMi4yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS43NVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLnNjYWxlID0gMS4yXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhckNvaW4uc2NhbGUgPSAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSBmYWxzZVxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1hZyA9IC0yMDBcclxuICAgICAgICAgICAgICAgIHRoaXMubWFnZnJvbnQgPSAyMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjg1XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1hZyA9IDIyMFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==