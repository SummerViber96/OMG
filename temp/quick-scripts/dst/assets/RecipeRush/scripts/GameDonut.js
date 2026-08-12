
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
        cc.tween(this.camera.node).to(1, { position: cc.v3(2000 + this.mag, -200.232) }).call(function () {
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
        var arrPos = [cc.v2(-22, 43), cc.v2(52, 9), cc.v2(-42, -24)];
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
        for (var i = 0; i < 3; i++) {
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
        if (this.isStep != 5) {
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
        var arrPos = [cc.v2(83, -36), cc.v2(51, -54), cc.v2(16, -62)];
        var arrAngle = [0, 0, 0];
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
        this.scheduleOnce(function () {
            _this.plate.getChildByName("hand").active = true;
            _this.plate.getComponent(cc.Button).enabled = true;
            _this.isStep = 6;
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
        // this.btnSauce.getComponent(cc.Button).enabled = false;
        this.listHand.children[1].active = false;
        // let startPos = cc.v2(300, 2)
        // let endpos = cc.v2(1.5, 67);
        this.listTick.children[1].active = true;
        // this.arrSauce = preSauce;
        for (var i = 0; i < this.listItemPlate2.childrenCount; i++) {
            if (i != 1) {
                var child = this.listItemPlate2.children[i];
                child.children[2 + i].active = true;
                child.getComponent(cc.Animation).play();
            }
        }
        this.msSauces = true;
        this.scheduleOnce(function () {
            _this.listHand.children[2].active = true;
            _this.isStep = 3;
        }, 0.3);
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
        var _this = this;
        if (this.isStep != 3) {
            this.btnHanh.getChildByName("hindBox").getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 0.5);
            return;
        }
        this.listHand.children[2].active = false;
        var child = this.listItemPlate2.children[1];
        this.listTick.children[2].active = true;
        child.children[2 + 1].active = true;
        child.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            _this.listHand.children[4].active = true;
            _this.isStep = 4;
        }, 0.6);
    };
    NewClass.prototype.btn_dauPhu = function () {
        // if (this.isStep != 3) return;
        var _this = this;
        if (this.isStep != 4) {
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
        this.listItemPlate2.children[2].children[5].active = true;
        this.listItemPlate2.children[2].getComponent(cc.Animation).play();
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
            _this.isStep = 5;
        }, 0.3);
    };
    NewClass.prototype.btn_dau = function () {
        var _this = this;
        // if (this.isStep != 4) return;
        if (this.isStep != 5) {
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
        var _loop_3 = function (i) {
            this_3.scheduleOnce(function () {
                var preTom = cc.instantiate(_this.preDau);
                preTom.position = cc.v3(-134, -245);
                preTom.parent = _this.listItemPlate2;
                _this.arrDau.push(preTom);
                cc.tween(preTom).bezierTo(0.5, cc.v2(-134, -245), cc.v2(-134, -245 + 350), arrPos[i]).start();
                cc.tween(preTom).to(0.5, { angle: arrAngle[i] }).start();
            }, i * 0.15);
        };
        var this_3 = this;
        for (var i = 0; i < 3; i++) {
            _loop_3(i);
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
        else if (this.isStep == 6) {
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
            var arrPosTom_1 = [this.listItemNoi.children[0].position, this.listItemNoi.children[1].position, this.listItemNoi.children[2].position];
            var _loop_4 = function (i) {
                this_4.scheduleOnce(function () {
                    var item1 = _this.arrTom[i];
                    var pos1 = arrPosTom_1[i];
                    pos1 = _this.listItemNoi.convertToWorldSpaceAR(pos1);
                    pos1 = item1.parent.convertToNodeSpaceAR(pos1);
                    cc.tween(item1).bezierTo(0.6, cc.v2(item1.x, item1.y), cc.v2(item1.x, item1.y + 400), cc.v3(pos1.x, pos1.y)).call(function () {
                        item1.active = false;
                        _this.listItemNoi.children[i].active = true;
                        cc.tween(_this.listItemNoi.children[i].children[0].children[1]).delay(0.4).to(2.5, { opacity: 255 }).start();
                    }).start();
                }, 0.1 * i);
            };
            var this_4 = this;
            for (var i = 0; i < 3; i++) {
                _loop_4(i);
            }
            this.scheduleOnce(function () {
                var chefANim = _this.chef2.children[0].getComponent(sp.Skeleton);
                _this.plate.active = false;
                chefANim.setAnimation(0, "Idle", true);
                _this.noiSup.getComponent("cooking").setOn();
                _this.isSOundNau = cc.audioEngine.play(_this.soundCreamMini, false, 1);
            }, 1);
            this.scheduleOnce(function () {
                for (var i = 0; i < 3; i++) {
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
        else if (this.isStep == 6) {
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
                }, 2.5);
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
            // this.barMission.getComponent("barTime").endGame()
            // this.amazing.active = true;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundThinking, false, 0.5);
            }, 0.5);
            cc.audioEngine.play(this.soundThinkWin, false, 1);
            // this.scheduleOnce(() => {
            //     if (this.endCardWin) this.endCardWin.active = true
            // }, 0.5)
        }
        else {
            cc.audioEngine.play(this.soundThinkWin, false, 0.5);
            // this.barMission.getComponent("barTime").endGame()
            // for (let child of this.arrCus) {
            //     child.children[0].getComponent(sp.Skeleton).setAnimation(0, "6.angry", true)
            // }
            // cc.audioEngine.stop(this.idSound)
            // this.timeup.active = true;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundThinking, false, 1);
                // this.endCard.active = true;
            }, 0.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcR2FtZURvbnV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0FBRXZCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNG9DQztRQTFvQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFHaEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWlCLElBQUksQ0FBQTtRQUVuQyxvQkFBYyxHQUFpQixJQUFJLENBQUE7UUFFbkMsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsZUFBUyxHQUFpQixJQUFJLENBQUE7UUFHOUIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQWMsSUFBSSxDQUFBO1FBRTNCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFJckIsY0FBUSxHQUFjLElBQUksQ0FBQTtRQUUxQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUl4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFFN0IsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsS0FBSztRQUdMLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBQzNCLEtBQUs7UUFHTCxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZ0JBQVUsR0FBZ0IsRUFBRSxDQUFBO1FBRTVCLEtBQUs7UUFFTCxZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsWUFBTSxHQUFjLElBQUksQ0FBQTtRQUV4QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQWMsSUFBSSxDQUFBO1FBRTFCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBRTdCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsWUFBTSxHQUFHLElBQUksQ0FBQTtRQUViLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIsWUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDckMsWUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFHckMsYUFBTyxHQUFHLENBQUMsQ0FBQTtRQUVYLGlCQUFXLEdBQUcsRUFBRSxDQUFBO1FBRWhCLGdCQUFVLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLGVBQVMsR0FBRyxLQUFLLENBQUE7UUFDakIscUJBQWUsR0FBRyxLQUFLLENBQUE7UUFDdkIsb0JBQWMsR0FBRyxLQUFLLENBQUE7UUFHdEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsYUFBYTtRQUNiLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVEsR0FBRyw4QkFBOEIsQ0FBQTtRQUN6QyxjQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQ1osa0JBQVksR0FBRyxDQUFDLENBQUE7UUFDaEIsYUFBTyxHQUFHLElBQUksQ0FBQTtRQUNkLFlBQU0sR0FBRyxDQUFDLENBQUE7UUFDVixzRkFBc0Y7UUFDdEYsVUFBSSxHQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUcscUJBQXFCO1FBQ3hELFlBQU0sR0FBVyxHQUFHLENBQUMsQ0FBYyx3QkFBd0I7UUFDM0QsYUFBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ2xCLGFBQU8sR0FBRyxFQUFFLENBQUE7UUFDWixzQkFBZ0IsR0FBRyxFQUFFLENBQUE7UUFDckIsWUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNYLG1CQUFhLEdBQUcsSUFBSSxDQUFBO1FBQ3BCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDakIsbUJBQWEsR0FBRyxJQUFJLENBQUE7UUFDcEIsZ0JBQVUsR0FBRyxHQUFHLENBQUE7UUFDaEIsb0JBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakMsa0JBQVksR0FBRyxLQUFLLENBQUE7UUFDcEIscUJBQWUsR0FBRyxDQUFDLENBQUE7UUFDbkIsaUJBQVcsR0FBRyxDQUFDLENBQUE7UUFDZixpQkFBVyxHQUFHLEtBQUssQ0FBQTtRQUNuQixrQkFBWSxHQUFHLEtBQUssQ0FBQTtRQUNwQixTQUFTO1FBQ1QsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsWUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNkLGNBQVEsR0FBRyxLQUFLLENBQUE7UUFDaEIsMENBQTBDO1FBQzFDLGFBQU8sR0FBRyxJQUFJLENBQUE7UUFDZCxTQUFHLEdBQUcsQ0FBQyxDQUFBO1FBMkJQLFlBQU0sR0FBRyxJQUFJLENBQUE7UUFDYixnQkFBVSxHQUFHLEtBQUssQ0FBQTtRQXNCbEIsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVEsR0FBRyxJQUFJLENBQUE7UUEyT2Ysa0JBQVksR0FBRyxLQUFLLENBQUE7UUFxQ3BCLGNBQVEsR0FBRyxLQUFLLENBQUE7UUEwQmhCLFlBQU0sR0FBRyxJQUFJLENBQUE7UUFrTmIsZ0JBQVUsR0FBRyxJQUFJLENBQUE7UUFpRWpCLGNBQVEsR0FBRyxLQUFLLENBQUE7UUFDaEIsWUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNkLHdCQUFrQixHQUFHLEtBQUssQ0FBQTtRQXdKMUIsZUFBUyxHQUFHLEtBQUssQ0FBQTtRQTBDakIsNkJBQTZCO1FBQzdCLFdBQUssR0FBRyxLQUFLLENBQUE7UUFtQmIscUJBQWUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkssZUFBUyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDcEssY0FBUSxHQUFHLENBQUMsQ0FBQTtRQUNaLGNBQVEsR0FBRyxDQUFDLENBQUE7UUFDWixrQkFBWSxHQUFHLENBQUMsQ0FBQTs7SUE0RnBCLENBQUM7SUExNkJHLHlCQUFNLEdBQU47UUFBQSxpQkF5QkM7UUF4QkcsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFdBQVcsRUFBRTtZQUM5QixNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMxQztRQUVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDdEIsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoRCwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDbEUsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2pDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRXRFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFHRCw2QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3BELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xGLDZEQUE2RDtRQUNqRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUVyRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUUsNkRBQTZEO1FBQ2pFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzlELENBQUM7SUFDRCw2QkFBVSxHQUFWO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM5QyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUN2QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTtRQUMxQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBTUQsY0FBYztJQUNkLDJDQUEyQztJQUMzQyxxREFBcUQ7SUFDckQsc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4Qix5REFBeUQ7SUFDekQsK0NBQStDO0lBQy9DLHFFQUFxRTtJQUNyRSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLHdEQUF3RDtJQUN4RCxrREFBa0Q7SUFDbEQsNkNBQTZDO0lBQzdDLHVDQUF1QztJQUN2QywwR0FBMEc7SUFDMUcsdUJBQXVCO0lBRXZCLFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixJQUFJO0lBQ0osRUFBRTtJQUNGLDZCQUFVLEdBQVY7UUFBQSxpQkEwQkM7UUF6QkcsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUs7WUFBRSxPQUFNO1FBQ3BDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBRWYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUN4QyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0NBQ25ELENBQUM7WUFDTixPQUFLLFlBQVksQ0FBQztnQkFDZCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQTtnQkFDOUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUMvRixDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBOzs7UUFQaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQWpCLENBQUM7U0FTVDtRQUNELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDdkIsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNwQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDVCxDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUFBLGlCQWtDQztRQWpDRyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDaEQsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUs7WUFBRSxPQUFNO1FBQ3BDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRS9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN2QyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDN0QsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dDQUNmLENBQUM7WUFDTixPQUFLLFlBQVksQ0FBQztnQkFDZCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQTtnQkFDbkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBRXhCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDN0YsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDNUQsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTs7O1FBVGhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUFqQixDQUFDO1NBV1Q7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUMvQyxLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNqRCxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNuQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFFWCxDQUFDO0lBQ0Qsa0NBQWUsR0FBZjtRQUFBLGlCQTZDQztRQTVDRyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSztZQUFFLE9BQU07UUFFcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ2hELE9BQU87U0FDVjtRQUNELGdDQUFnQztRQUNoQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMvQix5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUN4QywrQkFBK0I7UUFDL0IsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFFdkMsNEJBQTRCO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBRzNDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQ25DLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO2FBQzFDO1NBRUo7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCw0QkFBNEI7UUFDNUIsc0RBQXNEO1FBQ3RELHdEQUF3RDtRQUN4RCxVQUFVO1FBQ1YsNEJBQTRCO1FBQzVCLCtCQUErQjtRQUMvQiwwQkFBMEI7UUFDMUIsVUFBVTtRQUNWLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsUUFBUTtJQUNaLENBQUM7SUFHRCwyQkFBUSxHQUFSO1FBQUEsaUJBdUJDO1FBckJHLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6RSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNoRCxPQUFPO1NBQ1Y7UUFJRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBRXhDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFHdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNuQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUNJLGdDQUFnQztRQURwQyxpQkFtQ0M7UUFoQ0csSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ2hELE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBQUUsT0FBTTtRQUVwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUUvQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUlqRSxtREFBbUQ7UUFDbkQsMkNBQTJDO1FBQzNDLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsUUFBUTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNYLENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBcUNDO1FBcENHLGdDQUFnQztRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDaEQsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUs7WUFBRSxPQUFNO1FBRXBDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRS9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN2QyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzRCxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0NBQ2xCLENBQUM7WUFDTixPQUFLLFlBQVksQ0FBQztnQkFDZCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQTtnQkFDbkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBRXhCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDN0YsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDNUQsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTs7O1FBVGhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUFqQixDQUFDO1NBV1Q7UUFFRCw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLFFBQVE7SUFDWixDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUUzQyxxREFBcUQ7SUFDckQsc0NBQXNDO0lBQ3RDLDZEQUE2RDtJQUM3RCwrQ0FBK0M7SUFDL0MsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxtREFBbUQ7SUFDbkQseURBQXlEO0lBQ3pELHVDQUF1QztJQUN2QyxnQ0FBZ0M7SUFDaEMsc0dBQXNHO0lBQ3RHLDJCQUEyQjtJQUUzQixnQ0FBZ0M7SUFDaEMsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osSUFBSTtJQUNKLCtCQUFZLEdBQVo7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0SSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25ELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ25ELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDdkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDckQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBRVY7SUFDTCxDQUFDO0lBRUQsV0FBVztJQUNYLDRCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDakQsT0FBTTtTQUNUO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3ZDLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUN2QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDdkMsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3ZDLE9BQU87U0FDVjtJQUVMLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQUEsaUJBeUNDO1FBeENHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ2xELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9ELFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNyQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUVsQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDMUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBRTdFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMvRCxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDaEMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ3BCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ1YsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBRTFDO2FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFF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QUFLLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBTUQsNEJBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3JDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDekMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzNCLDJDQUEyQztRQUMzQywyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekMsK0VBQStFO1FBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFBO1FBRWhELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDbkQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDMUUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1lBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7U0FDcEM7UUFDRCxJQUFJLEtBQUss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QUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUkzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFJM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1E7SUFJNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0k7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDYTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBN0tKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0b0M1QjtJQUFELGVBQUM7Q0E1b0NELEFBNG9DQyxDQTVvQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBNG9DakQ7a0JBNW9Db0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5nbG9iYWxUaGlzLmNvaW4gPSAwXHJcbmdsb2JhbFRoaXMuR2FtZSA9IGZhbHNlXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbG9zZVBvcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRPazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUcmFuczogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENyZWFtOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDaGVycnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdyb25nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbU1pbmk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCYW5oOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua0xvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQW5ncnkxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQW5ncnkyOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRm9vdDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEZ1bm55OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kT3Blbk9yZGVyOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaWNrZXRGbHk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERPOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRGYWlsOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkV2luOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmFEb2M6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICB1aUNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhclRpbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJDb2luOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvSG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpbWV1cDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYW1hemluZzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBub3RpQ29pbjogY2MuQW5pbWF0aW9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub3RpTWlzc2lvbjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmREb2M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy9uZXdcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhck1pc3Npb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhck1pc3Npb24yOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy9idG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1jOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGluZDE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxpc3RQcmVDVXM6IGNjLlByZWZhYltdID0gW11cclxuXHJcbiAgICAvL25ld1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aWNrZXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoZWYxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hlZjI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGVmMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RIYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVRvbTogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVRvZnU6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlSGFuaDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVEYXU6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlU2F1Y2U6IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF0ZUxpc3Q6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blRvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuRGF1OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuSGFuaDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuRGF1UGh1OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuU2F1Y2U6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RUaWNrOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0SXRlbU5vaTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm9pU3VwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5WaWRlb1BsYXllcilcclxuICAgIHZpZGVvOiBjYy5WaWRlb1BsYXllciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGN1czE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3VzMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmFpbFVpOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0SXRlbVBsYXRlMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGN1czI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgbWNDb21wID0gbnVsbFxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gdHV0TWlzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYXJyQmVwID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG4gICAgYXJyRGlhID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG5cclxuXHJcbiAgICBtYXhLaGF5ID0gN1xyXG5cclxuICAgIGFyckRvbnV0cG9zID0gW11cclxuXHJcbiAgICBpc1R1dENoaWxpID0gZmFsc2VcclxuICAgIGlzVHV0TWVhdCA9IGZhbHNlXHJcbiAgICBpc1R1dFZlZ2V0VGFibGUgPSBmYWxzZVxyXG4gICAgaXNUdXRDbGlja01lYXQgPSBmYWxzZVxyXG5cclxuXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICAvLyBpc1N0ZXAgPSAwXHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBtYXhDdXN0b21lcnMgPSA2XHJcbiAgICBpZFNvdW5kID0gbnVsbFxyXG4gICAgaXNTdGVwID0gMFxyXG4gICAgLy9pdGVtOiAwOmJ1Z2VyLCAxOiBrZW0gMjpkb251dCAzOmtob2FpdGF5IDQ6cGhvIDU6IHB1ZGRpbmcgNjogdHJhICA3OmJhbmhtaSA4OmNvY29udXRcclxuICAgIHJheVk6IG51bWJlcltdID0gWzEyMCwgMCwgLTEyMF07ICAgLy8gduG7iyB0csOtIFkgY+G7p2EgMyByYXlcclxuICAgIHNwYXduWDogbnVtYmVyID0gNzAwOyAgICAgICAgICAgICAgLy8gduG7iyB0csOtIHNwYXduIGLDqm4gcGjhuqNpXHJcbiAgICBhcnJJdGVtID0gW1tdLCBbXV1cclxuICAgIGFycktoYXkgPSBbXVxyXG4gICAgYXJyVGFyZ2V0TWlzc2lvbiA9IFtdXHJcbiAgICBhcnJDdXMgPSBbXVxyXG4gICAgc2VsbFRhcmdldEN1cyA9IG51bGxcclxuICAgIHNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICBjdXNDb3VudGVyUG9zID0gbnVsbFxyXG4gICAgY3VzU2xvdEdhcCA9IDUwMFxyXG4gICAgY3VzRW50ZXJPZmZzZXQgPSBjYy52MygzNTAsIDAsIDApXHJcbiAgICBjdXNXYWxrU3BlZWQgPSA0MzcuNVxyXG4gICAgY291bnRlckN1c0NvdW50ID0gMFxyXG4gICAgcHJlQ3VzSW5kZXggPSAwXHJcbiAgICBpc1N0YXJ0Z2FtZSA9IGZhbHNlXHJcbiAgICBpc0ZpcnN0Q2xpY2sgPSBmYWxzZVxyXG4gICAgLy9taXNzaW9uXHJcbiAgICBtc1RvbSA9IGZhbHNlO1xyXG4gICAgbXNIYW5oID0gZmFsc2U7XHJcbiAgICBtc0RhdSA9IGZhbHNlO1xyXG4gICAgbXNUb2Z1ID0gZmFsc2VcclxuICAgIG1zU2F1Y2VzID0gZmFsc2VcclxuICAgIC8vMDpiYW5oIHRodW9uZyAxOmNob2NvbGF0ZSAyOiBzdHJhd2JlcnJ5IFxyXG4gICAgaWRGdW5ueSA9IG51bGxcclxuICAgIG1hZyA9IDBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgIGNjLnZpZXcuc2V0UmVzaXplQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRpY2tldCgpXHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIGxldCBhbmltQ2hlZnQxID0gdGhpcy5jaGVmMS5jaGlsZHJlblswXVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgYW5pbUNoZWZ0MS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIldpblwiLCBmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5pZEZ1bm55ID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRnVubnksIGZhbHNlLCAxKVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZEZ1bm55KVxyXG4gICAgICAgICAgICBhbmltQ2hlZnQxLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG5cclxuICAgICAgICB9LCAyKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwICsgdGhpcy5tYWdmcm9udCwgMTIwKVxyXG4gICAgfVxyXG4gICAgaXNIYW5kID0gbnVsbFxyXG4gICAgaXNTaG93TWVudSA9IGZhbHNlXHJcbiAgICBtb3ZlVGlja2V0KCkge1xyXG4gICAgICAgIHRoaXMudGlja2V0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaWNrZXRGbHksIGZhbHNlLCAwLjMpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMjAwMCArIHRoaXMubWFnLCAtMjAwLjIzMikgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudGlja2V0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0aWNrZXRfc2hvd1wiKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMSwgeyB6b29tUmF0aW86IDEgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygyMTAwLCAtMjAwLjIzMikgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudGlja2V0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0aWNrZXRfc2hvd1wiKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYykudG8oMSwgeyB6b29tUmF0aW86IDEuNiB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBzaG93VGlja2V0KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRPcGVuT3JkZXIsIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaXNTaG93TWVudSA9IHRydWVcclxuICAgICAgICB9LCAwLjQpXHJcbiAgICB9XHJcbiAgICBhcnJUb20gPSBbXTtcclxuICAgIGFyckhhbmggPSBbXTtcclxuICAgIGFyckRhdSA9IFtdO1xyXG4gICAgYXJyVG9mdSA9IFtdO1xyXG4gICAgYXJyU2F1Y2UgPSBudWxsXHJcbiAgICAvLyBidG5fdG9tKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzU2hvd01lbnUgPT0gZmFsc2UpIHJldHVyblxyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmQpXHJcbiAgICAvLyAgICAgdGhpcy5tc1RvbSA9IHRydWVcclxuICAgIC8vICAgICB0aGlzLmJ0blRvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgLy8gICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICBsZXQgYXJyUG9zID0gW2NjLnYyKC03NSwgLTI0KSwgY2MudjIoLTY0LCAxOSksIGNjLnYyKC00NCwgLTMpXVxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBwcmVUb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVRvbSk7XHJcbiAgICAvLyAgICAgICAgICAgICBwcmVUb20ucG9zaXRpb24gPSBjYy52MygtMzM0LCAtMjkpO1xyXG4gICAgLy8gICAgICAgICAgICAgcHJlVG9tLnBhcmVudCA9IHRoaXMucGxhdGVMaXN0XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFyclRvbS5wdXNoKHByZVRvbSlcclxuICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKHByZVRvbSkuYmV6aWVyVG8oMC41LCBjYy52MigtMzM0LCAtMjkpLCBjYy52MigtMzM0LCAtMjkgKyAzMDApLCBhcnJQb3NbaV0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgfSwgaSAqIDAuMTUpXHJcblxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKClcclxuICAgIC8vICAgICB9LCAwLjUgKyAwLjE1ICogMylcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2hlY2tIaW5kKClcclxuICAgIC8vICAgICB9LCAxKVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIGJ0bl9kb25udXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZClcclxuICAgICAgICB0aGlzLmlzU3RlcCA9IDFcclxuXHJcbiAgICAgICAgdGhpcy5tc1RvbSA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0blRvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYyKC0yMiwgNDMpLCBjYy52Mig1MiwgOSksIGNjLnYyKC00MiwgLTI0KV1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlVG9tID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVUb20pO1xyXG4gICAgICAgICAgICAgICAgcHJlVG9tLnBvc2l0aW9uID0gY2MudjMoLTMzNCwgLTI5KTtcclxuICAgICAgICAgICAgICAgIHByZVRvbS5wYXJlbnQgPSB0aGlzLnBsYXRlTGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJUb20ucHVzaChwcmVUb20pXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwcmVUb20pLmJlemllclRvKDAuNSwgY2MudjIoLTMzNCwgLTI5KSwgY2MudjIoLTMzNCwgLTI5ICsgMzAwKSwgYXJyUG9zW2ldKS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIGkgKiAwLjE1KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcygpXHJcbiAgICAgICAgfSwgMC41ICsgMC4xNSAqIDMpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSGluZCgpXHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxuICAgIGJ0bl9kYXVUYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwICE9IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5EYXUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kQm94XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZClcclxuXHJcbiAgICAgICAgdGhpcy5tc0RhdSA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bkRhdS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdFRpY2suY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjIoODMsIC0zNiksIGNjLnYyKDUxLCAtNTQpLCBjYy52MigxNiwgLTYyKV1cclxuICAgICAgICBsZXQgYXJyQW5nbGUgPSBbMCwgMCwgMF1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlVG9tID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVEYXUpO1xyXG4gICAgICAgICAgICAgICAgcHJlVG9tLnBvc2l0aW9uID0gY2MudjMoLTEzNCwgLTI0NSk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucGFyZW50ID0gdGhpcy5saXN0SXRlbVBsYXRlMlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJEYXUucHVzaChwcmVUb20pXHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocHJlVG9tKS5iZXppZXJUbygwLjUsIGNjLnYyKC0xMzQsIC0yNDUpLCBjYy52MigtMTM0LCAtMjQ1ICsgMzUwKSwgYXJyUG9zW2ldKS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwcmVUb20pLnRvKDAuNSwgeyBhbmdsZTogYXJyQW5nbGVbaV0gfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCBpICogMC4xNSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF0ZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnBsYXRlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gNlxyXG4gICAgICAgIH0sIDAuMylcclxuXHJcbiAgICB9XHJcbiAgICBidG5fc2F1Y2VEYXVUYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCAhPSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2F1Y2UuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kQm94XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNTdGVwICE9IDIpIHJldHVybjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kKVxyXG4gICAgICAgIC8vIHRoaXMuYnRuU2F1Y2UuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAvLyBsZXQgc3RhcnRQb3MgPSBjYy52MigzMDAsIDIpXHJcbiAgICAgICAgLy8gbGV0IGVuZHBvcyA9IGNjLnYyKDEuNSwgNjcpO1xyXG4gICAgICAgIHRoaXMubGlzdFRpY2suY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAvLyB0aGlzLmFyclNhdWNlID0gcHJlU2F1Y2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RJdGVtUGxhdGUyLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RJdGVtUGxhdGUyLmNoaWxkcmVuW2ldXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNoaWxkLmNoaWxkcmVuWzIgKyBpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tc1NhdWNlcyA9IHRydWVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDM7XHJcblxyXG4gICAgICAgIH0sIDAuMylcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxhdGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF0ZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIC8vIH0sIDAuMylcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNTYXVjZUZpbmFsID0gdHJ1ZVxyXG4gICAgICAgIC8vICAgICB0aGlzLmNoZWNrU3VjY2VzcygpXHJcbiAgICAgICAgLy8gfSwgMC4xKVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jaGVja0hpbmQoKVxyXG4gICAgICAgIC8vIH0sIDIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJ0bl9oYW5oKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgIT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkhhbmguZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kQm94XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RJdGVtUGxhdGUyLmNoaWxkcmVuWzFdXHJcbiAgICAgICAgdGhpcy5saXN0VGljay5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcblxyXG5cclxuICAgICAgICBjaGlsZC5jaGlsZHJlblsyICsgMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNoaWxkLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gNDtcclxuXHJcbiAgICAgICAgfSwgMC42KVxyXG4gICAgfVxyXG4gICAgYnRuX2RhdVBodSgpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5pc1N0ZXAgIT0gMykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgIT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkRhdVBodS5nZXRDaGlsZEJ5TmFtZShcImhpbmRCb3hcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIHRoaXMubXNUb2Z1ID0gdHJ1ZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kKVxyXG5cclxuICAgICAgICB0aGlzLmJ0bkRhdVBodS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0VGljay5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5saXN0SXRlbVBsYXRlMi5jaGlsZHJlblsyXS5jaGlsZHJlbls1XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1QbGF0ZTIuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5hcnJUb21bMl0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgLy8gdGhpcy5hcnJUb21bMl0uY2hpbGRyZW5bNV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoKVxyXG4gICAgICAgIC8vIH0sIDAuNSArIDAuMTUgKiAzKVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jaGVja0hpbmQoKVxyXG4gICAgICAgIC8vIH0sIDIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gNVxyXG4gICAgICAgIH0sIDAuMylcclxuICAgIH1cclxuICAgIGJ0bl9kYXUoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNTdGVwICE9IDQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgIT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkRhdS5nZXRDaGlsZEJ5TmFtZShcImhpbmRCb3hcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1Nob3dNZW51ID09IGZhbHNlKSByZXR1cm5cclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZClcclxuXHJcbiAgICAgICAgdGhpcy5tc0RhdSA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bkRhdS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdFRpY2suY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjIoLTUsIC05KSwgY2MudjIoLTgsIDExKSwgY2MudjIoLTIxLCAxMSldXHJcbiAgICAgICAgbGV0IGFyckFuZ2xlID0gWzQ1LCA1NSwgNzNdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZVRvbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRGF1KTtcclxuICAgICAgICAgICAgICAgIHByZVRvbS5wb3NpdGlvbiA9IGNjLnYzKC0xMzQsIC0yNDUpO1xyXG4gICAgICAgICAgICAgICAgcHJlVG9tLnBhcmVudCA9IHRoaXMubGlzdEl0ZW1QbGF0ZTJcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyRGF1LnB1c2gocHJlVG9tKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHByZVRvbSkuYmV6aWVyVG8oMC41LCBjYy52MigtMTM0LCAtMjQ1KSwgY2MudjIoLTEzNCwgLTI0NSArIDM1MCksIGFyclBvc1tpXSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocHJlVG9tKS50bygwLjUsIHsgYW5nbGU6IGFyckFuZ2xlW2ldIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgaSAqIDAuMTUpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNoZWNrU3VjY2VzcygpXHJcbiAgICAgICAgLy8gfSwgMC41ICsgMC4xNSAqIDMpXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNoZWNrSGluZCgpXHJcbiAgICAgICAgLy8gfSwgMilcclxuICAgIH1cclxuICAgIGlzU2F1Y2VGaW5hbCA9IGZhbHNlXHJcbiAgICAvLyBidG5fc2F1Y2UoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcblxyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmQpXHJcbiAgICAvLyAgICAgdGhpcy5idG5TYXVjZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKDMwMCwgMilcclxuICAgIC8vICAgICBsZXQgZW5kcG9zID0gY2MudjIoMS41LCA2Nyk7XHJcbiAgICAvLyAgICAgbGV0IHByZVNhdWNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVTYXVjZSlcclxuICAgIC8vICAgICBwcmVTYXVjZS5wb3NpdGlvbiA9IGNjLnYzKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG4gICAgLy8gICAgIHByZVNhdWNlLnBhcmVudCA9IHRoaXMucGxhdGVMaXN0XHJcbiAgICAvLyAgICAgdGhpcy5hcnJTYXVjZSA9IHByZVNhdWNlO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHByZVNhdWNlKS5iZXppZXJUbygwLjUsIHN0YXJ0UG9zLCBjYy52MihzdGFydFBvcy54LCBzdGFydFBvcy55ICsgMzAwKSwgZW5kcG9zKS5zdGFydCgpXHJcbiAgICAvLyAgICAgdGhpcy5tc1NhdWNlcyA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzU2F1Y2VGaW5hbCA9IHRydWVcclxuICAgIC8vICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoKVxyXG4gICAgLy8gICAgIH0sIDAuNSlcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY2hlY2tIaW5kKClcclxuICAgIC8vICAgICB9LCAyKVxyXG4gICAgLy8gfVxyXG4gICAgY2hlY2tTdWNjZXNzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1zRGF1ID09IHRydWUgJiYgdGhpcy5tc0hhbmggPT0gdHJ1ZSAmJiB0aGlzLm1zU2F1Y2VzID09IHRydWUgJiYgdGhpcy5tc1RvZnUgPT0gdHJ1ZSAmJiB0aGlzLm1zVG9tID09IHRydWUgJiYgdGhpcy5pc1NhdWNlRmluYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF0ZS5nZXRDaGlsZEJ5TmFtZShcInBoYW9ob2FcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2VsbERvbmUsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0ZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1zUGFsZXQxID0gZmFsc2VcclxuICAgIC8vIGlzU3RlcD0wXHJcbiAgICBjaGVja0hpbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXNQYWxldDEgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF0ZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnBsYXRlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tc1NhdWNlcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tc0hhbmggPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubXNEYXUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubXNUb2Z1ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlkRm9vdCA9IG51bGxcclxuICAgIGJ0bl9wbGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnBsYXRlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls1XS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIGxldCBjaGVmQU5pbSA9IHRoaXMuY2hlZjIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigwLCBcIkwtYXJtXCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy5wbGF0ZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnBsYXRlLnBhcmVudCA9IHRoaXMuY2hlZjI7XHJcbiAgICAgICAgdGhpcy5wbGF0ZS5wb3NpdGlvbiA9IGNjLnYzKDIxNywgNDgyKVxyXG4gICAgICAgIHRoaXMucGxhdGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRGb290LCBmYWxzZSwgMC41KVxyXG4gICAgICAgIHRoaXMuY2hlZjIuc2NhbGVYID0gMVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDEyMzksIDM0NikgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDEyMzksIDM0NikgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaGVmMikudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygxMjMxLCAtMjE5KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRGb290KVxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc0l0ZW0oKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigxLCBcIldhbGtcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSA2KSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTIzOSwgLTIwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDEyMzksIC0yMDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5jaGVmMy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hlZjIpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTIzMSwgLTU5NS4xNSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGVmQU5pbS5zZXRBbmltYXRpb24oMSwgXCJJZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRGb290KVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50cmFuc0l0ZW0oKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc0l0ZW0oKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigxLCBcIldhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHRyYW5zSXRlbSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzU3RlcClcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgYXJyUG9zVG9tID0gW3RoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bMF0ucG9zaXRpb24sIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bMV0ucG9zaXRpb24sIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bMl0ucG9zaXRpb25dXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IHRoaXMuYXJyVG9tW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zMSA9IGFyclBvc1RvbVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBwb3MxID0gdGhpcy5saXN0SXRlbU5vaS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zMSlcclxuICAgICAgICAgICAgICAgICAgICBwb3MxID0gaXRlbTEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtMSkuYmV6aWVyVG8oMC42LCBjYy52MihpdGVtMS54LCBpdGVtMS55KSwgY2MudjIoaXRlbTEueCwgaXRlbTEueSArIDQwMCksIGNjLnYzKHBvczEueCwgcG9zMS55KSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0xLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdKS5kZWxheSgwLjQpLnRvKDIuNSwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMC4xICogaSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlZkFOaW0gPSB0aGlzLmNoZWYyLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vaVN1cC5nZXRDb21wb25lbnQoXCJjb29raW5nXCIpLnNldE9uKClcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTT3VuZE5hdSA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENyZWFtTWluaSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNlbGxEb25lLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlzU091bmROYXUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRlID0gdGhpcy5jaGVmMi5nZXRDaGlsZEJ5TmFtZShcInBsYXRlMlwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0ZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBsYXRlMiA9IHRoaXMuY2hlZjIuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF0ZTJcIilcclxuICAgICAgICAgICAgICAgIGxldCBjaGVmQU5pbSA9IHRoaXMuY2hlZjIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDEsIFwiV2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigwLCBcIkwtYXJtXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkRm9vdCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEZvb3QsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDEyMzksIDM0NikgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygxMjM5LCAzNDYpIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDIwMDAsIC0yMDAuMjMyKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygyMTAwLCAtMjAwLjIzMikgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVmMi5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaGVmMikudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygyMzE2LCAtNTk1KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVmQU5pbS5zZXRBbmltYXRpb24oMSwgXCJJZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZEZvb3QpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF0ZS5wYXJlbnQgPSB0aGlzLmNoZWYyLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXRlLnBvc2l0aW9uID0gY2MudjMoMjI4NSwgLTM1MSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnRyYW5zSXRlbSgpXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICB9LCAzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlja2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBwbGF0ZTIgPSB0aGlzLmNoZWYyLmdldENoaWxkQnlOYW1lKFwicGxhdGUyXCIpXHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnRpY2tldCkudG8oMC4zLCB7IHNjYWxlOiAyLjEgfSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MygwLCAtNDAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLmJ5KDEsIHsgcG9zaXRpb246IGNjLnYzKDAsIC00MDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIHBsYXRlMi5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICAgICAgcGxhdGUyLnBvc2l0aW9uID0gY2MudjMoMTIzNiwgLTM4MilcclxuICAgICAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmNoZWYzLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgLy8gfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2VlbihwbGF0ZTIpLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoMTIzNiwgLTU1MCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwbGF0ZTIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWYzLmdldENoaWxkQnlOYW1lKFwicGxhdGUyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBhbmltLnNldEFuaW1hdGlvbigxLCBcIldhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIkwtYXJtXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWYzLnNjYWxlWCA9IDEgICAgICAgICAgICAgICAgLy8gdGhpcy52aWRlby5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZERPLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDEsIFwiV2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hlZjMpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoLTQ3NSwgLTEyMjQuNjk4KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldpblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDEsIFwiV2luXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVmMy5nZXRDaGlsZEJ5TmFtZShcInBsYXRlMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1czIuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNlbGxEb25lLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXMyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgfSwgMS40KVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkuYnkoMS41LCB7IHBvc2l0aW9uOiBjYy52MygtMTcwMCwgLTQwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkuYnkoMS41LCB7IHBvc2l0aW9uOiBjYy52MygtMTcwMCwgLTQwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAwLjcpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEN1czIuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0xNjAgKyA0MCArIDI1MCwgMzAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtNTAwICsgNDAgKyAyNTAsIDMwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5kLGZhbHNlLDAuNSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWV1cC5hY3RpdmU9dHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH0sMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRW5kR2FtZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0sIDIuNSlcclxuICAgICAgICAgICAgfSwgMSArIDIuNSlcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy52aWRlby5ub2RlLnNjYWxlID0gdGhpcy5pc1NjYWxlVmlkZW9cclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMudmlkZW8ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDE3MDAsIC0zMDApXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnZpZGVvLm5vZGUucG9zaXRpb24gPSBjYy52MygxNzAwLCAtMzAwKVxyXG5cclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMudmlkZW8ubm9kZS5wb3NpdGlvbj1cclxuICAgICAgICAgICAgLy8gfSwgNClcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy52aWRlby5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTkwMCArIHRoaXMubWFnVmlkZW8sIC0xMDAwKVxyXG5cclxuICAgICAgICAgICAgLy8gfSwgNSAtIDAuMylcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5saXN0Q3VzMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTQwLCAzMDAgLSAxMDAsIDApXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNhbWVyYURvYy5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTQwLCAzMDAgLSAxMDAsIDApXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNhbWVyYURvYy56b29tUmF0aW8gPSAxLjRcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy52aWRlby5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5mYWlsVWkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEZhaWwsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZmFpbFVpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTE2MCArIDQwICsgMjUwLCAzMDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMTYwICsgNDAgKyAyNTAsIDMwMCkgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmNoZWYxLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiRmFpbFwiLCBmYWxzZSlcclxuICAgICAgICAgICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRBbmdyeTEsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua0xvc2UsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUoZmFsc2UpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSwgMylcclxuICAgICAgICAgICAgLy8gICAgIH0sIDEuMylcclxuXHJcbiAgICAgICAgICAgIC8vIH0sIDUuOClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlzU091bmROYXUgPSBudWxsXHJcblxyXG5cclxuICAgIC8vIHJlcGxhY2VDdXN0b21lcihkZXBhcnRlZEN1czogY2MuTm9kZSwgY291bnRlclBvczogY2MuVmVjMykge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgLy8gICAgIGxldCBpZHggPSB0aGlzLmFyckN1cy5pbmRleE9mKGRlcGFydGVkQ3VzKVxyXG5cclxuICAgIC8vICAgICBsZXQgbmV3Q3VzID0gdGhpcy5zcGF3bkN1c3RvbWVyRnJvbVByZWZhYigpXHJcbiAgICAvLyAgICAgaWYgKCFuZXdDdXMpIHJldHVyblxyXG4gICAgLy8gICAgIHRoaXMuYnRuQ2FrZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLmJ0blBvdGF0by5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIC8vICAgICBsZXQgbmV3Q3VzQ29tcCA9IG5ld0N1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAvLyAgICAgaWYgKG5ld0N1c0NvbXApIHtcclxuICAgIC8vICAgICAgICAgbmV3Q3VzQ29tcC5nYW1lUGxheSA9IHRoaXNcclxuICAgIC8vICAgICAgICAgbmV3Q3VzQ29tcC5pc1JlYWR5Rm9yU2VsbCA9IGZhbHNlXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBpZiAodGhpcy5zZWxsVGFyZ2V0Q3VzID09PSBkZXBhcnRlZEN1cyB8fCB0aGlzLmlzVGFyZ2V0Q3VzID09PSBkZXBhcnRlZEN1cykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNlbGxUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gLTFcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAvLyAgICAgaWYgKHRoaXMubWNDb21wKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubWNDb21wLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyQ3VzW2lkeF0gPSBuZXdDdXNcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1cy5wdXNoKG5ld0N1cylcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZGVwYXJ0ZWRDdXMuZGVzdHJveSgpXHJcblxyXG4gICAgLy8gICAgIGxldCBzcGF3blBvcyA9IGNvdW50ZXJQb3MuY2xvbmUoKS5hZGQodGhpcy5jdXNFbnRlck9mZnNldClcclxuICAgIC8vICAgICBsZXQgZGlzdGFuY2UgPSBzcGF3blBvcy5zdWIoY291bnRlclBvcykubWFnKClcclxuICAgIC8vICAgICBsZXQgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHRoaXMuY3VzV2Fsa1NwZWVkXHJcblxyXG4gICAgLy8gICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChuZXdDdXMpXHJcbiAgICAvLyAgICAgbmV3Q3VzLnBvc2l0aW9uID0gc3Bhd25Qb3NcclxuICAgIC8vICAgICBuZXdDdXMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgIG5ld0N1c0NvbXAubW92ZSgpXHJcbiAgICAvLyAgICAgY2MudHdlZW4obmV3Q3VzKVxyXG4gICAgLy8gICAgICAgICAudG8oZHVyYXRpb24sIHsgcG9zaXRpb246IGNvdW50ZXJQb3MgfSlcclxuICAgIC8vICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgbmV3Q3VzQ29tcC5zaG93TWlzc2lvbigpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbmV3Q3VzXHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5zdGFydCgpXHJcbiAgICAvLyB9XHJcbiAgICBvbkhpbmQoKSB7XHJcbiAgICAgICAgdGhpcy5oaW5kMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEN1c1F1ZXVlKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW50ZXJDdXN0b21lcnMoMSwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5DaGlja2VuLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzKVxyXG4gICAgfVxyXG4gICAgaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgaXNGaXN0ID0gZmFsc2VcclxuICAgIGlzRmlzdENsaWNrQ2hpY2tlbiA9IGZhbHNlXHJcblxyXG4gICAgaXNNY0J1c3koKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNNb3ZpbmcgfHwgKHRoaXMubWNDb21wICYmIHRoaXMubWNDb21wLmlzV2Fsa2luZygpKVxyXG4gICAgfVxyXG5cclxuICAgIGJ0bl9jaGlja2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuaXNGaXN0Q2xpY2tDaGlja2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXN0Q2xpY2tDaGlja2VuID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5jb3VudERvd24oKVxyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubWNDb21wLmNhblBpY2tNb3JlQ2hpY2tlbigpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bkNoaWNrZW4uZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0NoaWNrZW4oKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5fbWF5Q2hpZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuY2FuRG9BbnlNYWNoaW5lQWN0aW9uKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bk1hY2hpbmUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb01hY2hpbmUoKVxyXG4gICAgfVxyXG4gICAgYnRuX2NvbGEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjb2NhQ29tcCA9IHRoaXMuYnRuQ29jYS5nZXRDb21wb25lbnQoXCJjb2NhXCIpXHJcbiAgICAgICAgbGV0IGNhbkNvb2sgPSAhY29jYUNvbXAuaXNCdXN5KClcclxuICAgICAgICBsZXQgY2FuUGlja3VwID0gY29jYUNvbXAuaXNDb2NhICYmIHRoaXMubWNDb21wLmNhblBpY2tJdGVtVHlwZShcImNvY2FcIilcclxuICAgICAgICBpZiAoIWNhbkNvb2sgJiYgIWNhblBpY2t1cCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQ29jYSgpXHJcbiAgICB9XHJcbiAgICAvLyBidG5fc2F1Y2UoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgLy8gICAgIGlmICghdGhpcy5tY0NvbXAuaGFzQW55SXRlbSgpIHx8IHRoaXMubWNDb21wLmZpbmRDb29rZWRUcmF5U2xvdCgpIDwgMCkgcmV0dXJuO1xyXG4gICAgLy8gICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAvLyAgICAgdGhpcy5tY0NvbXAubW92ZVRvU2F1Y2UoKVxyXG4gICAgLy8gfVxyXG4gICAgYnRuX2Nha2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc01vdmluZylcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9DYWtlKClcclxuICAgIH1cclxuICAgIGJ0bl90b21hdG8oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvVG9tYXRvKClcclxuICAgIH1cclxuICAgIGdldEN1c1RyYXlJbmRleChjdXNOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzTm9kZSlcclxuICAgIH1cclxuICAgIGNoZWNrU2VsbCh0YXJnZXRDdXM/OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBzZWxsIE1haW5cIilcclxuICAgICAgICBsZXQgY3VzID0gdGFyZ2V0Q3VzIHx8IHRoaXMuc2VsbFRhcmdldEN1cyB8fCB0aGlzLmlzVGFyZ2V0Q3VzIHx8IHRoaXMuYXJyQ3VzWzBdXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSB8fCAhY3VzKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8IGN1c0NvbXAuaXNTdWNjZXNzIHx8ICFjdXNDb21wLmlzUmVhZHlGb3JTZWxsKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgdHJheUlkeCA9IHRoaXMubWNDb21wLmZpbmRUcmF5Rm9yQ3VzdG9tZXIoY3VzQ29tcClcclxuICAgICAgICBpZiAoIXRoaXMubWNDb21wLmhhc0FueUl0ZW0oKSB8fCB0cmF5SWR4IDwgMCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZWxsVGFyZ2V0Q3VzID0gY3VzXHJcbiAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSB0cmF5SWR4XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IGN1c1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQnV5KClcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVTZWxsQXRDb3VudGVyKCkge1xyXG4gICAgICAgIGxldCBjdXMgPSB0aGlzLnNlbGxUYXJnZXRDdXMgfHwgdGhpcy5pc1RhcmdldEN1cyB8fCB0aGlzLmFyckN1c1swXVxyXG4gICAgICAgIGlmICghY3VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKVxyXG4gICAgICAgIGlmICghY3VzQ29tcCB8fCBjdXNDb21wLmlzU3VjY2VzcyB8fCAhY3VzQ29tcC5pc1JlYWR5Rm9yU2VsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSAtMVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzQ29tcC52YWxpZGF0ZVNlbGwoKVxyXG4gICAgfVxyXG4gICAgbmV4dEN1cyh2YWx1ZTogYm9vbGVhbiwgZGVwYXJ0ZWRDdXM/OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKGRlcGFydGVkQ3VzKSB7XHJcbiAgICAgICAgICAgIGxldCBpZHggPSB0aGlzLmFyckN1cy5pbmRleE9mKGRlcGFydGVkQ3VzKVxyXG4gICAgICAgICAgICBpZiAoaWR4ID49IDApIHRoaXMuYXJyQ3VzLnNwbGljZShpZHgsIDEpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFyckN1cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnNwbGljZSgwLCAxKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb3VudEN1cysrXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5idG5DYWtlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blBvdGF0by5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb3VudEN1cyA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5iYXJNaXNzaW9uMikuYnkoMC40LCB7IG9wYWNpdHk6IC0yNTUsIHBvc2l0aW9uOiBjYy52MygwLCAyMDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbjIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZWxsVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gLTFcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPj0gdGhpcy5tYXhDdXN0b21lcnMgfHwgdGhpcy5hcnJDdXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdhc0dyb3VwQXRDb3VudGVyID0gdGhpcy5jb3VudGVyQ3VzQ291bnQgPiAxXHJcbiAgICAgICAgaWYgKHdhc0dyb3VwQXRDb3VudGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlckN1c0NvdW50LS1cclxuICAgICAgICAgICAgdGhpcy5tY0NvbXAuYWZ0ZXJDdXN0b21lckxlZnQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgdGhpcy5tY0NvbXAucmVzZXRUb1N0YXJ0KClcclxuXHJcbiAgICAgICAgbGV0IGVudGVyQ291bnQgPSB0aGlzLmdldEVudGVyQ291bnRGb3JXYXZlKClcclxuICAgICAgICB0aGlzLmVudGVyQ3VzdG9tZXJzKGVudGVyQ291bnQpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcblxyXG4gICAgfVxyXG4gICAgb2ZmR3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VuZEdhbWUgPSBmYWxzZVxyXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKClcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLmFtYXppbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtpbmcsIGZhbHNlLCAwLjUpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua1dpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmVuZENhcmRXaW4pIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5rV2luLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICAvLyB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5hcnJDdXMpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNoaWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiNi5hbmdyeVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZFNvdW5kKVxyXG4gICAgICAgICAgICAvLyB0aGlzLnRpbWV1cC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtpbmcsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICBpc0RvYyA9IGZhbHNlXHJcbiAgICAvLyB1cGRhdGUoZHQpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxyXG4gICAgLy8gICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgIC8vICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHVwZGF0ZVJlc3BvbnNpdmUoKSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFyclBvc01lbnVOZ2FuZyA9IFtjYy52MygtMzkxLCAtMTAyKSwgY2MudjMoMzc1LCAtMTEyKSwgY2MudjMoMTE0LCAtMTIwKSwgY2MudjMoLTQwOSwgLTI4NCksIGNjLnYzKC0xNTgsIC0yOTYpLCBjYy52MygxMTgsIC0yODApLCBjYy52MygzOTAsIC0yOTYpLCBjYy52MygtMTM3LCAtMTE2KV07XHJcbiAgICBhcnJQb3NEb2MgPSBbY2MudjMoMjYsIC0zMzcpLCBjYy52MygzMzYsIC0xMTIpLCBjYy52MygxNS41LCAtMTIxKSwgY2MudjMoLTE3MCwgLTUyNS43KSwgY2MudjMoLTMwMCwgLTM1MiksIGNjLnYzKDE4Ni45NiwgLTUxMiksIGNjLnYzKDM1NSwgLTMzNSksIGNjLnYzKC0yOTIsIC0xMTYpXVxyXG4gICAgbWFnZnJvbnQgPSAwXHJcbiAgICBtYWdWaWRlbyA9IDBcclxuICAgIGlzU2NhbGVWaWRlbyA9IDFcclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5iYXJDb2luLnNjYWxlID0gKGxvZ2ljKSA/IDIuNSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAobG9naWMpID8gMjEwIDogMTQwXHJcbiAgICAgICAgdGhpcy5waGFvSG9hLnNjYWxlID0gKGxvZ2ljKSA/IDkgOiA1XHJcbiAgICAgICAgdGhpcy5ndWlsZC5zY2FsZSA9IChsb2dpYykgPyAyIDogMS4yXHJcbiAgICAgICAgdGhpcy5ndWlsZC5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtOTAwKSA6IGNjLnYzKDAsIC0zNjApXHJcblxyXG4gICAgICAgIHRoaXMudGltZXVwLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxLjRcclxuICAgICAgICB0aGlzLmFtYXppbmcuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuNVxyXG4gICAgICAgIC8vIHRoaXMubm90aU1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMiA6IDFcclxuICAgICAgICAvLyB0aGlzLmJhck1pc3Npb24yLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgdGhpcy5tYWdWaWRlbyA9IDBcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMS43IDogMVxyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoLTE2MCwgMzAwLCAwKSA6IGNjLnYzKDAsIDEyMCwgMClcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNTBcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgdGhpcy5jYW1lcmFEb2Mubm9kZS5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5tYWcgPSAwXHJcbiAgICAgICAgdGhpcy5tYWdmcm9udCA9IDBcclxuICAgICAgICB0aGlzLnZpZGVvLm5vZGUucGFyZW50LnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxO1xyXG4gICAgICAgIHRoaXMudmlkZW8ubm9kZS5wYXJlbnQucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoLTUwMCwgNjAwKSA6IGNjLnYzKDAsIDApXHJcbiAgICAgICAgdGhpcy5pc1NjYWxlVmlkZW8gPSAyXHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWdWaWRlbyA9IDMwMFxyXG4gICAgICAgICAgICB0aGlzLmlzU2NhbGVWaWRlbyA9IDEuNVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0RvYyA9IHRydWVcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIGNvbnN0IFRBTExfUEhPTkVfTUlOX1JBVElPID0gMi4wOyAgICAgICAgLy8gaVBob25lIFggfjIuMTYsIDIwOjkgQW5kcm9pZCB+Mi4yMlxyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjRcclxuICAgICAgICAgICAgaWYgKGFzcGVjdFJhdGlvID49IFRBTExfUEhPTkVfTUlOX1JBVElPKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhckNvaW4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMzAwICsgMzBcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAxNTAgKyAzMFxyXG4gICAgICAgICAgICAgICAgaWYgKGFzcGVjdFJhdGlvID4gMi4yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS43NVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLnNjYWxlID0gMS4yXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhckNvaW4uc2NhbGUgPSAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSBmYWxzZVxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1hZyA9IC0yMDBcclxuICAgICAgICAgICAgICAgIHRoaXMubWFnZnJvbnQgPSAyMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjg1XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1hZyA9IDIyMFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==