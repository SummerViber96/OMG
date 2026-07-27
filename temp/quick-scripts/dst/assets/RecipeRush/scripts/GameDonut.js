
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
        cc.tween(this.camera.node).to(1, { position: cc.v3(1750 + this.mag, -200.232) }).call(function () {
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
    NewClass.prototype.btn_tom = function () {
        var _this = this;
        if (this.isShowMenu == false)
            return;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.unschedule(this.checkHind);
        this.msTom = true;
        this.btnTo.getComponent(cc.Button).enabled = false;
        this.listHand.children[0].active = false;
        var arrPos = [cc.v2(-75, -24), cc.v2(-64, 19), cc.v2(-44, -3)];
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
    NewClass.prototype.btn_hanh = function () {
        var _this = this;
        if (this.isShowMenu == false)
            return;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.unschedule(this.checkHind);
        this.msHanh = true;
        this.btnHanh.getComponent(cc.Button).enabled = false;
        this.listHand.children[2].active = false;
        this.listTick.children[1].active = true;
        var arrPos = [cc.v2(61, 41), cc.v2(80, 10), cc.v2(37, 13)];
        var _loop_2 = function (i) {
            this_2.scheduleOnce(function () {
                var preTom = cc.instantiate(_this.preHanh);
                preTom.position = cc.v3(25, -251);
                preTom.parent = _this.plateList;
                _this.arrHanh.push(preTom);
                cc.tween(preTom).bezierTo(0.5, cc.v2(25, -251), cc.v2(25, -251 + 350), arrPos[i]).start();
            }, i * 0.15);
        };
        var this_2 = this;
        for (var i = 0; i < 3; i++) {
            _loop_2(i);
        }
        this.scheduleOnce(function () {
            _this.checkSuccess();
        }, 0.5 + 0.15 * 3);
        this.scheduleOnce(function () {
            _this.checkHind();
        }, 2);
    };
    NewClass.prototype.btn_dauPhu = function () {
        var _this = this;
        if (this.isShowMenu == false)
            return;
        this.msTofu = true;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.unschedule(this.checkHind);
        this.btnDauPhu.getComponent(cc.Button).enabled = false;
        this.listHand.children[1].active = false;
        this.listTick.children[2].active = true;
        var arrPos = [cc.v2(26, -32), cc.v2(3, -59), cc.v2(47, -55)];
        var _loop_3 = function (i) {
            this_3.scheduleOnce(function () {
                var preTom = cc.instantiate(_this.preTofu);
                preTom.position = cc.v3(180, -256);
                preTom.parent = _this.plateList;
                _this.arrTofu.push(preTom);
                cc.tween(preTom).bezierTo(0.5, cc.v2(180, -256), cc.v2(180, -256 + 350), arrPos[i]).start();
            }, i * 0.15);
        };
        var this_3 = this;
        for (var i = 0; i < 3; i++) {
            _loop_3(i);
        }
        this.scheduleOnce(function () {
            _this.checkSuccess();
        }, 0.5 + 0.15 * 3);
        this.scheduleOnce(function () {
            _this.checkHind();
        }, 2);
    };
    NewClass.prototype.btn_dau = function () {
        var _this = this;
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
        var _loop_4 = function (i) {
            this_4.scheduleOnce(function () {
                var preTom = cc.instantiate(_this.preDau);
                preTom.position = cc.v3(-134, -245);
                preTom.parent = _this.plateList;
                _this.arrDau.push(preTom);
                cc.tween(preTom).bezierTo(0.5, cc.v2(-134, -245), cc.v2(-134, -245 + 350), arrPos[i]).start();
                cc.tween(preTom).to(0.5, { angle: arrAngle[i] }).start();
            }, i * 0.15);
        };
        var this_4 = this;
        for (var i = 0; i < 3; i++) {
            _loop_4(i);
        }
        this.scheduleOnce(function () {
            _this.checkSuccess();
        }, 0.5 + 0.15 * 3);
        this.scheduleOnce(function () {
            _this.checkHind();
        }, 2);
    };
    NewClass.prototype.btn_sauce = function () {
        var _this = this;
        if (this.isShowMenu == false)
            return;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.unschedule(this.checkHind);
        this.btnSauce.getComponent(cc.Button).enabled = false;
        this.listHand.children[4].active = false;
        var startPos = cc.v2(300, 2);
        var endpos = cc.v2(1.5, 67);
        var preSauce = cc.instantiate(this.preSauce);
        preSauce.position = cc.v3(startPos.x, startPos.y);
        preSauce.parent = this.plateList;
        this.arrSauce = preSauce;
        cc.tween(preSauce).bezierTo(0.5, startPos, cc.v2(startPos.x, startPos.y + 300), endpos).start();
        this.msSauces = true;
        this.scheduleOnce(function () {
            _this.isSauceFinal = true;
            _this.checkSuccess();
        }, 0.5);
        this.scheduleOnce(function () {
            _this.checkHind();
        }, 2);
    };
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
    NewClass.prototype.checkHind = function () {
        if (this.msTofu == false) {
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
        if (this.msSauces == false) {
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
        this.plate.parent = this.chef2;
        this.plate.position = cc.v3(217, 482);
        this.plate.children[0].active = false;
        cc.audioEngine.play(this.soundFoot, false, 0.5);
        cc.tween(this.camera.node).to(1.5, { position: cc.v3(1239, 346) }).start();
        cc.tween(this.cameraDoc.node).to(1.5, { position: cc.v3(1239, 346) }).start();
        cc.tween(this.chef2).to(1.5, { position: cc.v3(1231, -219) }).call(function () {
            chefANim.setAnimation(1, "Idle", true);
            cc.audioEngine.stop(_this.idFoot);
            _this.transItem();
        }).start();
        chefANim.setAnimation(1, "Walk", true);
    };
    NewClass.prototype.transItem = function () {
        var _this = this;
        var arrPosDau = [this.listItemNoi.children[0].position, this.listItemNoi.children[1].position, this.listItemNoi.children[2].position];
        var arrPosTofu = [this.listItemNoi.children[4].position, this.listItemNoi.children[3].position, this.listItemNoi.children[5].position];
        var arrPosHanh = [this.listItemNoi.children[6].position, this.listItemNoi.children[7].position, this.listItemNoi.children[8].position];
        var arrPosTom = [this.listItemNoi.children[9].position, this.listItemNoi.children[10].position, this.listItemNoi.children[11].position];
        var _loop_5 = function (i) {
            this_5.scheduleOnce(function () {
                var item1 = _this.arrTom[i];
                var item2 = _this.arrDau[i];
                var item3 = _this.arrHanh[i];
                var item4 = _this.arrTofu[i];
                var pos1 = arrPosTom[i];
                pos1 = _this.listItemNoi.convertToWorldSpaceAR(pos1);
                pos1 = item1.parent.convertToNodeSpaceAR(pos1);
                var pos2 = arrPosTofu[i];
                pos2 = _this.listItemNoi.convertToWorldSpaceAR(pos2);
                pos2 = item4.parent.convertToNodeSpaceAR(pos2);
                var pos3 = arrPosHanh[i];
                pos3 = _this.listItemNoi.convertToWorldSpaceAR(pos3);
                pos3 = item3.parent.convertToNodeSpaceAR(pos3);
                var pos4 = arrPosDau[i];
                pos4 = _this.listItemNoi.convertToWorldSpaceAR(pos4);
                pos4 = item2.parent.convertToNodeSpaceAR(pos4);
                cc.tween(item1).bezierTo(0.6, cc.v2(item1.x, item1.y), cc.v2(item1.x, item1.y + 400), cc.v3(pos1.x, pos1.y)).call(function () {
                    item1.active = false;
                    _this.listItemNoi.children[i + 9].active = true;
                    cc.tween(_this.listItemNoi.children[i + 9].children[0].children[1]).delay(0.4).to(2.5, { opacity: 255 }).start();
                }).start();
                cc.tween(item2).bezierTo(0.6, cc.v2(item2.x, item2.y), cc.v2(item2.x, item2.y + 400), cc.v3(pos4.x, pos4.y)).call(function () {
                    item2.active = false;
                    _this.listItemNoi.children[i].active = true;
                }).start();
                cc.tween(item3).bezierTo(0.6, cc.v2(item2.x, item2.y), cc.v2(item2.x, item2.y + 400), cc.v3(pos3.x, pos3.y)).call(function () {
                    item3.active = false;
                    _this.listItemNoi.children[i + 6].active = true;
                }).start();
                cc.tween(item4).bezierTo(0.6, cc.v2(item2.x, item2.y), cc.v2(item2.x, item2.y + 400), cc.v3(pos2.x, pos2.y)).call(function () {
                    item4.active = false;
                    _this.listItemNoi.children[i + 3].active = true;
                }).start();
                cc.tween(_this.arrSauce).bezierTo(0.6, cc.v2(_this.arrSauce.x, _this.arrSauce.y), cc.v2(_this.arrSauce.x, _this.arrSauce.y + 400), cc.v3(pos1.x, pos1.y)).call(function () {
                    _this.arrSauce.active = false;
                }).start();
            }, 0.1 * i);
        };
        var this_5 = this;
        for (var i = 0; i < 3; i++) {
            _loop_5(i);
        }
        this.scheduleOnce(function () {
            var chefANim = _this.chef2.children[0].getComponent(sp.Skeleton);
            _this.plate.active = false;
            chefANim.setAnimation(0, "Idle", true);
            _this.noiSup.getComponent("cooking").setOn();
            _this.isSOundNau = cc.audioEngine.play(_this.soundCreamMini, false, 1);
            // cc.audioEngine.play(this.soun,false,1)
        }, 1);
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.soundSellDone, false, 1);
            _this.cus1.active = false;
            cc.audioEngine.stop(_this.isSOundNau);
            _this.chef2.getChildByName("plate2").active = true;
            var plate2 = _this.chef2.getChildByName("plate2");
            var chefANim = _this.chef2.children[0].getComponent(sp.Skeleton);
            chefANim.setAnimation(1, "Walk", true);
            chefANim.setAnimation(0, "L-arm", true);
            _this.idFoot = cc.audioEngine.play(_this.soundFoot, false, 0.5);
            _this.ticket.children[0].active = true;
            cc.tween(_this.ticket).to(0.3, { scale: 2.1 }).to(0.5, { opacity: 0 }).start();
            cc.tween(_this.camera.node).by(1, { position: cc.v3(0, -600) }).start();
            cc.tween(_this.cameraDoc.node).by(1, { position: cc.v3(0, -600) }).start();
            cc.tween(_this.chef2).to(1, { position: cc.v3(1392, -592) }).call(function () {
                chefANim.setAnimation(1, "Idle", true);
                chefANim.setAnimation(0, "Idle", true);
                cc.audioEngine.stop(_this.idFoot);
                plate2.parent = _this.node;
                plate2.position = cc.v3(1236, -382);
            }).start();
            cc.tween(plate2).delay(1.1).to(0.4, { position: cc.v3(1236, -550) }).call(function () {
                _this.video.node.active = true;
                _this.video.play();
                _this.chef3.active = false;
            }).start();
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundDO, false, 1);
            }, 3.5);
            _this.scheduleOnce(function () {
                _this.video.node.scale = _this.isScaleVideo;
                // this.video.node.position = cc.v3(1700, -300)
                _this.video.node.position = cc.v3(1700, -300);
                // this.video.node.position=
            }, 4);
            _this.scheduleOnce(function () {
                _this.video.node.position = cc.v3(-900 + _this.magVideo, -1000);
            }, 5 - 0.3);
            _this.scheduleOnce(function () {
                _this.listCus2.active = true;
                _this.camera.node.position = cc.v3(-40, 300 - 100, 0);
                _this.cameraDoc.node.position = cc.v3(-40, 300 - 100, 0);
                _this.cameraDoc.zoomRatio = 1.4;
                _this.camera.zoomRatio = 0.8;
                _this.video.node.active = false;
                _this.failUi.active = true;
                cc.audioEngine.play(_this.soundFail, false, 1);
                _this.scheduleOnce(function () {
                    _this.failUi.active = false;
                    cc.tween(_this.camera.node).to(1, { position: cc.v3(-160 + 40 + 250, 300) }).start();
                    cc.tween(_this.cameraDoc.node).to(1, { position: cc.v3(-160 + 40 + 250, 300) }).start();
                    _this.chef1.children[0].getComponent(sp.Skeleton).setAnimation(0, "Fail", false);
                    cc.audioEngine.play(_this.soundAngry1, false, 1);
                    cc.audioEngine.play(_this.soundAngry2, false, 1);
                    _this.scheduleOnce(function () {
                        cc.audioEngine.play(_this.soundThinkLose, false, 1);
                    }, 2);
                    _this.scheduleOnce(function () {
                        _this.onEndGame(false);
                    }, 3);
                }, 1.3);
            }, 5.8);
        }, 3);
    };
    NewClass.prototype.replaceCustomer = function (departedCus, counterPos) {
        var _this = this;
        if (this.isEndGame)
            return;
        var idx = this.arrCus.indexOf(departedCus);
        var newCus = this.spawnCustomerFromPrefab();
        if (!newCus)
            return;
        this.btnCake.getComponent(cc.Button).enabled = true;
        this.btnPotato.getComponent(cc.Button).enabled = true;
        var newCusComp = newCus.getComponent("cusMission");
        if (newCusComp) {
            newCusComp.gamePlay = this;
            newCusComp.isReadyForSell = false;
        }
        if (this.sellTargetCus === departedCus || this.isTargetCus === departedCus) {
            this.sellTargetCus = null;
            this.sellTraySlot = -1;
        }
        this.isMoving = false;
        if (this.mcComp) {
            this.mcComp.unscheduleAllCallbacks();
        }
        if (idx >= 0) {
            this.arrCus[idx] = newCus;
        }
        else {
            this.arrCus.push(newCus);
        }
        departedCus.destroy();
        var spawnPos = counterPos.clone().add(this.cusEnterOffset);
        var distance = spawnPos.sub(counterPos).mag();
        var duration = distance / this.cusWalkSpeed;
        cc.Tween.stopAllByTarget(newCus);
        newCus.position = spawnPos;
        newCus.active = true;
        newCusComp.move();
        cc.tween(newCus)
            .to(duration, { position: counterPos })
            .call(function () {
            newCusComp.showMission();
            _this.isTargetCus = newCus;
        })
            .start();
    };
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
            cc.audioEngine.play(this.soundThinkLose, false, 1);
            // this.scheduleOnce(() => {
            //     if (this.endCardWin) this.endCardWin.active = true
            // }, 0.5)
        }
        else {
            // this.barMission.getComponent("barTime").endGame()
            // for (let child of this.arrCus) {
            //     child.children[0].getComponent(sp.Skeleton).setAnimation(0, "6.angry", true)
            // }
            // cc.audioEngine.stop(this.idSound)
            // this.timeup.active = true;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundThinking, false, 0.5);
                // this.endCard.active = true;
            }, 1);
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
        this.timeup.scale = (logic) ? 1 : 1.4;
        this.amazing.scale = (logic) ? 1 : 1.4;
        this.endCardDoc.scale = 1.5;
        this.notiMission.scale = (logic) ? 2 : 1;
        this.barMission2.scale = (logic) ? 2 : 1;
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
                this.mag = -200;
                this.magfront = 200;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 0.85
                this.mag = 220;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcR2FtZURvbnV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0FBRXZCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBazlCQztRQWg5Qkcsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFHaEMsZUFBUyxH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Q3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNyQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUMvQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDMUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRTdFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQy9ELFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDaEMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1YsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTNDLENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQUEsaUJBa0lDO1FBaklHLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNySSxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEksSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3RJLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FB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QUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDdkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM3RCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDN0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDdEUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFFekUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzdELFFBQVEsQ0FBQyxZQUFZ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QVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQzdDLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO29CQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUNuRixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUV0RixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBO29CQUMvRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtvQkFDL0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7b0JBQy9DLEtBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7b0JBRXRE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WSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDckMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUN6QyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUUvRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekMsK0VBQStFO1FBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFBO1FBRWhELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDbkQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDMUUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1lBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7U0FDcEM7UUFDRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEdB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aWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5jb2luID0gMFxyXG5nbG9iYWxUaGlzLkdhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kT2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRFbmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTZWxsRG9uZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5raW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hlcnJ5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3JlYW1NaW5pOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmFuaDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5MTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5MjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEZvb3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRGdW5ueTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE9wZW5PcmRlcjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGlja2V0Rmx5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRETzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRmFpbDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZFdpbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhRG9jOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJUaW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyQ29pbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb0hvYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1ldXA6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFtYXppbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgbm90aUNvaW46IGNjLkFuaW1hdGlvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aU1pc3Npb246IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkRG9jOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vbmV3XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJNaXNzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJNaXNzaW9uMjogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vYnRuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpbmQxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsaXN0UHJlQ1VzOiBjYy5QcmVmYWJbXSA9IFtdXHJcblxyXG4gICAgLy9uZXdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGlja2V0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGVmMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoZWYyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hlZjM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVUb206IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVUb2Z1OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUhhbmg6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlRGF1OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVNhdWNlOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhdGVMaXN0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5UbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkRhdTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkhhbmg6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkRhdVBodTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blNhdWNlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0VGljazogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEl0ZW1Ob2k6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vaVN1cDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuVmlkZW9QbGF5ZXIpXHJcbiAgICB2aWRlbzogY2MuVmlkZW9QbGF5ZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjdXMxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZhaWxVaTogY2MuTm9kZSA9IG51bGxcclxuICAgIG1jQ29tcCA9IG51bGxcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIHR1dE1pc2lvbjogY2MuTm9kZSA9IG51bGxcclxuICAgIGFyckJlcCA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV1cclxuICAgIGFyckRpYSA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV1cclxuXHJcblxyXG4gICAgbWF4S2hheSA9IDdcclxuXHJcbiAgICBhcnJEb251dHBvcyA9IFtdXHJcblxyXG4gICAgaXNUdXRDaGlsaSA9IGZhbHNlXHJcbiAgICBpc1R1dE1lYXQgPSBmYWxzZVxyXG4gICAgaXNUdXRWZWdldFRhYmxlID0gZmFsc2VcclxuICAgIGlzVHV0Q2xpY2tNZWF0ID0gZmFsc2VcclxuXHJcblxyXG4gICAgaXNUYXJnZXRQb3AgPSBudWxsO1xyXG4gICAgLy8gaXNTdGVwID0gMFxyXG4gICAgaXNUYXJnZXRDdXMgPSBudWxsO1xyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIGNvdW50Q3VzID0gMFxyXG4gICAgbWF4Q3VzdG9tZXJzID0gNlxyXG4gICAgaWRTb3VuZCA9IG51bGxcclxuICAgIGlzU3RlcCA9IDBcclxuICAgIC8vaXRlbTogMDpidWdlciwgMToga2VtIDI6ZG9udXQgMzpraG9haXRheSA0OnBobyA1OiBwdWRkaW5nIDY6IHRyYSAgNzpiYW5obWkgODpjb2NvbnV0XHJcbiAgICByYXlZOiBudW1iZXJbXSA9IFsxMjAsIDAsIC0xMjBdOyAgIC8vIHbhu4sgdHLDrSBZIGPhu6dhIDMgcmF5XHJcbiAgICBzcGF3blg6IG51bWJlciA9IDcwMDsgICAgICAgICAgICAgIC8vIHbhu4sgdHLDrSBzcGF3biBiw6puIHBo4bqjaVxyXG4gICAgYXJySXRlbSA9IFtbXSwgW11dXHJcbiAgICBhcnJLaGF5ID0gW11cclxuICAgIGFyclRhcmdldE1pc3Npb24gPSBbXVxyXG4gICAgYXJyQ3VzID0gW11cclxuICAgIHNlbGxUYXJnZXRDdXMgPSBudWxsXHJcbiAgICBzZWxsVHJheVNsb3QgPSAtMVxyXG4gICAgY3VzQ291bnRlclBvcyA9IG51bGxcclxuICAgIGN1c1Nsb3RHYXAgPSA1MDBcclxuICAgIGN1c0VudGVyT2Zmc2V0ID0gY2MudjMoMzUwLCAwLCAwKVxyXG4gICAgY3VzV2Fsa1NwZWVkID0gNDM3LjVcclxuICAgIGNvdW50ZXJDdXNDb3VudCA9IDBcclxuICAgIHByZUN1c0luZGV4ID0gMFxyXG4gICAgaXNTdGFydGdhbWUgPSBmYWxzZVxyXG4gICAgaXNGaXJzdENsaWNrID0gZmFsc2VcclxuICAgIC8vbWlzc2lvblxyXG4gICAgbXNUb20gPSBmYWxzZTtcclxuICAgIG1zSGFuaCA9IGZhbHNlO1xyXG4gICAgbXNEYXUgPSBmYWxzZTtcclxuICAgIG1zVG9mdSA9IGZhbHNlXHJcbiAgICBtc1NhdWNlcyA9IGZhbHNlXHJcbiAgICAvLzA6YmFuaCB0aHVvbmcgMTpjaG9jb2xhdGUgMjogc3RyYXdiZXJyeSBcclxuICAgIGlkRnVubnkgPSBudWxsXHJcbiAgICBtYWcgPSAwXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcclxuICAgICAgICBjYy52aWV3LnNldFJlc2l6ZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVUaWNrZXQoKVxyXG4gICAgICAgIH0sIDEuNSlcclxuICAgICAgICBsZXQgYW5pbUNoZWZ0MSA9IHRoaXMuY2hlZjEuY2hpbGRyZW5bMF1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFuaW1DaGVmdDEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJXaW5cIiwgZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMuaWRGdW5ueSA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEZ1bm55LCBmYWxzZSwgMSlcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRGdW5ueSlcclxuICAgICAgICAgICAgYW5pbUNoZWZ0MS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuXHJcbiAgICAgICAgfSwgMilcclxuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCArIHRoaXMubWFnZnJvbnQsIDEyMClcclxuICAgIH1cclxuICAgIGlzSGFuZCA9IG51bGxcclxuICAgIGlzU2hvd01lbnUgPSBmYWxzZVxyXG4gICAgbW92ZVRpY2tldCgpIHtcclxuICAgICAgICB0aGlzLnRpY2tldC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGlja2V0Rmx5LCBmYWxzZSwgMC4zKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKDE3NTAgKyB0aGlzLm1hZywgLTIwMC4yMzIpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRpY2tldC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwidGlja2V0X3Nob3dcIilcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDEsIHsgem9vbVJhdGlvOiAxIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMjEwMCwgLTIwMC4yMzIpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRpY2tldC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwidGlja2V0X3Nob3dcIilcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2MpLnRvKDEsIHsgem9vbVJhdGlvOiAxLjYgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgc2hvd1RpY2tldCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kT3Blbk9yZGVyLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzU2hvd01lbnUgPSB0cnVlXHJcbiAgICAgICAgfSwgMC40KVxyXG4gICAgfVxyXG4gICAgYXJyVG9tID0gW107XHJcbiAgICBhcnJIYW5oID0gW107XHJcbiAgICBhcnJEYXUgPSBbXTtcclxuICAgIGFyclRvZnUgPSBbXTtcclxuICAgIGFyclNhdWNlID0gbnVsbFxyXG4gICAgYnRuX3RvbSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1Nob3dNZW51ID09IGZhbHNlKSByZXR1cm5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kKVxyXG5cclxuICAgICAgICB0aGlzLm1zVG9tID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuVG8uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjIoLTc1LCAtMjQpLCBjYy52MigtNjQsIDE5KSwgY2MudjIoLTQ0LCAtMyldXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZVRvbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlVG9tKTtcclxuICAgICAgICAgICAgICAgIHByZVRvbS5wb3NpdGlvbiA9IGNjLnYzKC0zMzQsIC0yOSk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucGFyZW50ID0gdGhpcy5wbGF0ZUxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyVG9tLnB1c2gocHJlVG9tKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocHJlVG9tKS5iZXppZXJUbygwLjUsIGNjLnYyKC0zMzQsIC0yOSksIGNjLnYyKC0zMzQsIC0yOSArIDMwMCksIGFyclBvc1tpXSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCBpICogMC4xNSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoKVxyXG4gICAgICAgIH0sIDAuNSArIDAuMTUgKiAzKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0hpbmQoKVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcbiAgICBidG5faGFuaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1Nob3dNZW51ID09IGZhbHNlKSByZXR1cm5cclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZClcclxuXHJcbiAgICAgICAgdGhpcy5tc0hhbmggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnRuSGFuaC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0VGljay5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjIoNjEsIDQxKSwgY2MudjIoODAsIDEwKSwgY2MudjIoMzcsIDEzKV1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlVG9tID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVIYW5oKTtcclxuICAgICAgICAgICAgICAgIHByZVRvbS5wb3NpdGlvbiA9IGNjLnYzKDI1LCAtMjUxKTtcclxuICAgICAgICAgICAgICAgIHByZVRvbS5wYXJlbnQgPSB0aGlzLnBsYXRlTGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJIYW5oLnB1c2gocHJlVG9tKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHByZVRvbSkuYmV6aWVyVG8oMC41LCBjYy52MigyNSwgLTI1MSksIGNjLnYyKDI1LCAtMjUxICsgMzUwKSwgYXJyUG9zW2ldKS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIGkgKiAwLjE1KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcygpXHJcbiAgICAgICAgfSwgMC41ICsgMC4xNSAqIDMpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSGluZCgpXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGJ0bl9kYXVQaHUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIHRoaXMubXNUb2Z1ID0gdHJ1ZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kKVxyXG5cclxuICAgICAgICB0aGlzLmJ0bkRhdVBodS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0VGljay5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjIoMjYsIC0zMiksIGNjLnYyKDMsIC01OSksIGNjLnYyKDQ3LCAtNTUpXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVUb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVRvZnUpO1xyXG4gICAgICAgICAgICAgICAgcHJlVG9tLnBvc2l0aW9uID0gY2MudjMoMTgwLCAtMjU2KTtcclxuICAgICAgICAgICAgICAgIHByZVRvbS5wYXJlbnQgPSB0aGlzLnBsYXRlTGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJUb2Z1LnB1c2gocHJlVG9tKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHByZVRvbSkuYmV6aWVyVG8oMC41LCBjYy52MigxODAsIC0yNTYpLCBjYy52MigxODAsIC0yNTYgKyAzNTApLCBhcnJQb3NbaV0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgaSAqIDAuMTUpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKClcclxuICAgICAgICB9LCAwLjUgKyAwLjE1ICogMylcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tIaW5kKClcclxuICAgICAgICB9LCAyKVxyXG4gICAgfVxyXG4gICAgYnRuX2RhdSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1Nob3dNZW51ID09IGZhbHNlKSByZXR1cm5cclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZClcclxuXHJcbiAgICAgICAgdGhpcy5tc0RhdSA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bkRhdS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdFRpY2suY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjIoLTUsIC05KSwgY2MudjIoLTgsIDExKSwgY2MudjIoLTIxLCAxMSldXHJcbiAgICAgICAgbGV0IGFyckFuZ2xlID0gWzQ1LCA1NSwgNzNdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZVRvbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRGF1KTtcclxuICAgICAgICAgICAgICAgIHByZVRvbS5wb3NpdGlvbiA9IGNjLnYzKC0xMzQsIC0yNDUpO1xyXG4gICAgICAgICAgICAgICAgcHJlVG9tLnBhcmVudCA9IHRoaXMucGxhdGVMaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckRhdS5wdXNoKHByZVRvbSlcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwcmVUb20pLmJlemllclRvKDAuNSwgY2MudjIoLTEzNCwgLTI0NSksIGNjLnYyKC0xMzQsIC0yNDUgKyAzNTApLCBhcnJQb3NbaV0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHByZVRvbSkudG8oMC41LCB7IGFuZ2xlOiBhcnJBbmdsZVtpXSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIGkgKiAwLjE1KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcygpXHJcbiAgICAgICAgfSwgMC41ICsgMC4xNSAqIDMpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSGluZCgpXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGlzU2F1Y2VGaW5hbCA9IGZhbHNlXHJcbiAgICBidG5fc2F1Y2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmQpXHJcbiAgICAgICAgdGhpcy5idG5TYXVjZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls0XS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKDMwMCwgMilcclxuICAgICAgICBsZXQgZW5kcG9zID0gY2MudjIoMS41LCA2Nyk7XHJcbiAgICAgICAgbGV0IHByZVNhdWNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVTYXVjZSlcclxuICAgICAgICBwcmVTYXVjZS5wb3NpdGlvbiA9IGNjLnYzKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG4gICAgICAgIHByZVNhdWNlLnBhcmVudCA9IHRoaXMucGxhdGVMaXN0XHJcbiAgICAgICAgdGhpcy5hcnJTYXVjZSA9IHByZVNhdWNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHByZVNhdWNlKS5iZXppZXJUbygwLjUsIHN0YXJ0UG9zLCBjYy52MihzdGFydFBvcy54LCBzdGFydFBvcy55ICsgMzAwKSwgZW5kcG9zKS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5tc1NhdWNlcyA9IHRydWVcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2F1Y2VGaW5hbCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoKVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tIaW5kKClcclxuICAgICAgICB9LCAyKVxyXG4gICAgfVxyXG4gICAgY2hlY2tTdWNjZXNzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1zRGF1ID09IHRydWUgJiYgdGhpcy5tc0hhbmggPT0gdHJ1ZSAmJiB0aGlzLm1zU2F1Y2VzID09IHRydWUgJiYgdGhpcy5tc1RvZnUgPT0gdHJ1ZSAmJiB0aGlzLm1zVG9tID09IHRydWUgJiYgdGhpcy5pc1NhdWNlRmluYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF0ZS5nZXRDaGlsZEJ5TmFtZShcInBoYW9ob2FcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2VsbERvbmUsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0ZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrSGluZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tc1RvZnUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubXNIYW5oID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1zRGF1ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1zU2F1Y2VzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWRGb290ID0gbnVsbFxyXG4gICAgYnRuX3BsYXRlKCkge1xyXG4gICAgICAgIHRoaXMucGxhdGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzVdLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgbGV0IGNoZWZBTmltID0gdGhpcy5jaGVmMi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDAsIFwiTC1hcm1cIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnBsYXRlLnBhcmVudCA9IHRoaXMuY2hlZjI7XHJcbiAgICAgICAgdGhpcy5wbGF0ZS5wb3NpdGlvbiA9IGNjLnYzKDIxNywgNDgyKVxyXG4gICAgICAgIHRoaXMucGxhdGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRGb290LCBmYWxzZSwgMC41KVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTIzOSwgMzQ2KSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygxMjM5LCAzNDYpIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGVmMikudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygxMjMxLCAtMjE5KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDEsIFwiSWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkRm9vdClcclxuICAgICAgICAgICAgdGhpcy50cmFuc0l0ZW0oKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICBjaGVmQU5pbS5zZXRBbmltYXRpb24oMSwgXCJXYWxrXCIsIHRydWUpO1xyXG5cclxuICAgIH1cclxuICAgIHRyYW5zSXRlbSgpIHtcclxuICAgICAgICBsZXQgYXJyUG9zRGF1ID0gW3RoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bMF0ucG9zaXRpb24sIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bMV0ucG9zaXRpb24sIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bMl0ucG9zaXRpb25dXHJcbiAgICAgICAgbGV0IGFyclBvc1RvZnUgPSBbdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbls0XS5wb3NpdGlvbiwgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlblszXS5wb3NpdGlvbiwgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbls1XS5wb3NpdGlvbl1cclxuICAgICAgICBsZXQgYXJyUG9zSGFuaCA9IFt0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuWzZdLnBvc2l0aW9uLCB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuWzddLnBvc2l0aW9uLCB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuWzhdLnBvc2l0aW9uXVxyXG4gICAgICAgIGxldCBhcnJQb3NUb20gPSBbdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbls5XS5wb3NpdGlvbiwgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlblsxMF0ucG9zaXRpb24sIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bMTFdLnBvc2l0aW9uXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTEgPSB0aGlzLmFyclRvbVtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtMiA9IHRoaXMuYXJyRGF1W2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0zID0gdGhpcy5hcnJIYW5oW2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW00ID0gdGhpcy5hcnJUb2Z1W2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczEgPSBhcnJQb3NUb21baV07XHJcbiAgICAgICAgICAgICAgICBwb3MxID0gdGhpcy5saXN0SXRlbU5vaS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zMSlcclxuICAgICAgICAgICAgICAgIHBvczEgPSBpdGVtMS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zMiA9IGFyclBvc1RvZnVbaV07XHJcbiAgICAgICAgICAgICAgICBwb3MyID0gdGhpcy5saXN0SXRlbU5vaS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zMilcclxuICAgICAgICAgICAgICAgIHBvczIgPSBpdGVtNC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zMyA9IGFyclBvc0hhbmhbaV07XHJcbiAgICAgICAgICAgICAgICBwb3MzID0gdGhpcy5saXN0SXRlbU5vaS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zMylcclxuICAgICAgICAgICAgICAgIHBvczMgPSBpdGVtMy5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zNCA9IGFyclBvc0RhdVtpXTtcclxuICAgICAgICAgICAgICAgIHBvczQgPSB0aGlzLmxpc3RJdGVtTm9pLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3M0KVxyXG4gICAgICAgICAgICAgICAgcG9zNCA9IGl0ZW0yLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3M0KTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0xKS5iZXppZXJUbygwLjYsIGNjLnYyKGl0ZW0xLngsIGl0ZW0xLnkpLCBjYy52MihpdGVtMS54LCBpdGVtMS55ICsgNDAwKSwgY2MudjMocG9zMS54LCBwb3MxLnkpKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5baSArIDldLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuW2kgKyA5XS5jaGlsZHJlblswXS5jaGlsZHJlblsxXSkuZGVsYXkoMC40KS50bygyLjUsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtMikuYmV6aWVyVG8oMC42LCBjYy52MihpdGVtMi54LCBpdGVtMi55KSwgY2MudjIoaXRlbTIueCwgaXRlbTIueSArIDQwMCksIGNjLnYzKHBvczQueCwgcG9zNC55KSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0zKS5iZXppZXJUbygwLjYsIGNjLnYyKGl0ZW0yLngsIGl0ZW0yLnkpLCBjYy52MihpdGVtMi54LCBpdGVtMi55ICsgNDAwKSwgY2MudjMocG9zMy54LCBwb3MzLnkpKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtMy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5baSArIDZdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtNCkuYmV6aWVyVG8oMC42LCBjYy52MihpdGVtMi54LCBpdGVtMi55KSwgY2MudjIoaXRlbTIueCwgaXRlbTIueSArIDQwMCksIGNjLnYzKHBvczIueCwgcG9zMi55KSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuW2kgKyAzXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5hcnJTYXVjZSkuYmV6aWVyVG8oMC42LCBjYy52Mih0aGlzLmFyclNhdWNlLngsIHRoaXMuYXJyU2F1Y2UueSksIGNjLnYyKHRoaXMuYXJyU2F1Y2UueCwgdGhpcy5hcnJTYXVjZS55ICsgNDAwKSwgY2MudjMocG9zMS54LCBwb3MxLnkpKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclNhdWNlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIDAuMSAqIGkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNoZWZBTmltID0gdGhpcy5jaGVmMi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIHRoaXMucGxhdGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2lTdXAuZ2V0Q29tcG9uZW50KFwiY29va2luZ1wiKS5zZXRPbigpXHJcbiAgICAgICAgICAgIHRoaXMuaXNTT3VuZE5hdSA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENyZWFtTWluaSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuLGZhbHNlLDEpXHJcblxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTZWxsRG9uZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuY3VzMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaXNTT3VuZE5hdSlcclxuICAgICAgICAgICAgdGhpcy5jaGVmMi5nZXRDaGlsZEJ5TmFtZShcInBsYXRlMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgcGxhdGUyID0gdGhpcy5jaGVmMi5nZXRDaGlsZEJ5TmFtZShcInBsYXRlMlwiKVxyXG4gICAgICAgICAgICBsZXQgY2hlZkFOaW0gPSB0aGlzLmNoZWYyLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDEsIFwiV2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDAsIFwiTC1hcm1cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5pZEZvb3QgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRGb290LCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICB0aGlzLnRpY2tldC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnRpY2tldCkudG8oMC4zLCB7IHNjYWxlOiAyLjEgfSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MygwLCAtNjAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLmJ5KDEsIHsgcG9zaXRpb246IGNjLnYzKDAsIC02MDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hlZjIpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKDEzOTIsIC01OTIpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDEsIFwiSWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRGb290KVxyXG4gICAgICAgICAgICAgICAgcGxhdGUyLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgcGxhdGUyLnBvc2l0aW9uID0gY2MudjMoMTIzNiwgLTM4MilcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2VlbihwbGF0ZTIpLmRlbGF5KDEuMSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygxMjM2LCAtNTUwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW8ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlby5wbGF5KClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlZjMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRETywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICB9LCAzLjUpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW8ubm9kZS5zY2FsZSA9IHRoaXMuaXNTY2FsZVZpZGVvXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnZpZGVvLm5vZGUucG9zaXRpb24gPSBjYy52MygxNzAwLCAtMzAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlby5ub2RlLnBvc2l0aW9uID0gY2MudjMoMTcwMCwgLTMwMClcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnZpZGVvLm5vZGUucG9zaXRpb249XHJcbiAgICAgICAgICAgIH0sIDQpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW8ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC05MDAgKyB0aGlzLm1hZ1ZpZGVvLCAtMTAwMClcclxuXHJcbiAgICAgICAgICAgIH0sIDUgLSAwLjMpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEN1czIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC00MCwgMzAwIC0gMTAwLCAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFEb2Mubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC00MCwgMzAwIC0gMTAwLCAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFEb2Muem9vbVJhdGlvID0gMS40XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjhcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW8ubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmFpbFVpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRGYWlsLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxVaS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0xNjAgKyA0MCArIDI1MCwgMzAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTE2MCArIDQwICsgMjUwLCAzMDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVmMS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkZhaWxcIiwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQW5ncnkxLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRBbmdyeTIsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtMb3NlLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMpXHJcbiAgICAgICAgICAgICAgICB9LCAxLjMpXHJcblxyXG4gICAgICAgICAgICB9LCA1LjgpXHJcblxyXG4gICAgICAgIH0sIDMpXHJcbiAgICB9XHJcbiAgICBpc1NPdW5kTmF1ID0gbnVsbFxyXG5cclxuXHJcbiAgICByZXBsYWNlQ3VzdG9tZXIoZGVwYXJ0ZWRDdXM6IGNjLk5vZGUsIGNvdW50ZXJQb3M6IGNjLlZlYzMpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5hcnJDdXMuaW5kZXhPZihkZXBhcnRlZEN1cylcclxuXHJcbiAgICAgICAgbGV0IG5ld0N1cyA9IHRoaXMuc3Bhd25DdXN0b21lckZyb21QcmVmYWIoKVxyXG4gICAgICAgIGlmICghbmV3Q3VzKSByZXR1cm5cclxuICAgICAgICB0aGlzLmJ0bkNha2UuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5idG5Qb3RhdG8uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IG5ld0N1c0NvbXAgPSBuZXdDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKVxyXG4gICAgICAgIGlmIChuZXdDdXNDb21wKSB7XHJcbiAgICAgICAgICAgIG5ld0N1c0NvbXAuZ2FtZVBsYXkgPSB0aGlzXHJcbiAgICAgICAgICAgIG5ld0N1c0NvbXAuaXNSZWFkeUZvclNlbGwgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsbFRhcmdldEN1cyA9PT0gZGVwYXJ0ZWRDdXMgfHwgdGhpcy5pc1RhcmdldEN1cyA9PT0gZGVwYXJ0ZWRDdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxsVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLnNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm1jQ29tcCkge1xyXG4gICAgICAgICAgICB0aGlzLm1jQ29tcC51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1tpZHhdID0gbmV3Q3VzXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMucHVzaChuZXdDdXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlcGFydGVkQ3VzLmRlc3Ryb3koKVxyXG5cclxuICAgICAgICBsZXQgc3Bhd25Qb3MgPSBjb3VudGVyUG9zLmNsb25lKCkuYWRkKHRoaXMuY3VzRW50ZXJPZmZzZXQpXHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gc3Bhd25Qb3Muc3ViKGNvdW50ZXJQb3MpLm1hZygpXHJcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gZGlzdGFuY2UgLyB0aGlzLmN1c1dhbGtTcGVlZFxyXG5cclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobmV3Q3VzKVxyXG4gICAgICAgIG5ld0N1cy5wb3NpdGlvbiA9IHNwYXduUG9zXHJcbiAgICAgICAgbmV3Q3VzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBuZXdDdXNDb21wLm1vdmUoKVxyXG4gICAgICAgIGNjLnR3ZWVuKG5ld0N1cylcclxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHBvc2l0aW9uOiBjb3VudGVyUG9zIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld0N1c0NvbXAuc2hvd01pc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG5ld0N1c1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgb25IaW5kKCkge1xyXG4gICAgICAgIHRoaXMuaGluZDEuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmluaXRDdXNRdWV1ZSgpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1tpXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVudGVyQ3VzdG9tZXJzKDEsIHRydWUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RDbGljayA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2hpY2tlbi5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMylcclxuICAgIH1cclxuICAgIGlzTW92aW5nID0gZmFsc2VcclxuICAgIGlzRmlzdCA9IGZhbHNlXHJcbiAgICBpc0Zpc3RDbGlja0NoaWNrZW4gPSBmYWxzZVxyXG5cclxuICAgIGlzTWNCdXN5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTW92aW5nIHx8ICh0aGlzLm1jQ29tcCAmJiB0aGlzLm1jQ29tcC5pc1dhbGtpbmcoKSlcclxuICAgIH1cclxuXHJcbiAgICBidG5fY2hpY2tlbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlzdENsaWNrQ2hpY2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmlzdENsaWNrQ2hpY2tlbiA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uLmdldENvbXBvbmVudChcImJhclRpbWVcIikuY291bnREb3duKClcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bk1hY2hpbmUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfSwgMilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5jYW5QaWNrTW9yZUNoaWNrZW4oKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5DaGlja2VuLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9DaGlja2VuKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnRuX21heUNoaWVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMubWNDb21wLmNhbkRvQW55TWFjaGluZUFjdGlvbigpKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikub3BhY2l0eSA9IDBcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9NYWNoaW5lKClcclxuICAgIH1cclxuICAgIGJ0bl9jb2xhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICBsZXQgY29jYUNvbXAgPSB0aGlzLmJ0bkNvY2EuZ2V0Q29tcG9uZW50KFwiY29jYVwiKVxyXG4gICAgICAgIGxldCBjYW5Db29rID0gIWNvY2FDb21wLmlzQnVzeSgpXHJcbiAgICAgICAgbGV0IGNhblBpY2t1cCA9IGNvY2FDb21wLmlzQ29jYSAmJiB0aGlzLm1jQ29tcC5jYW5QaWNrSXRlbVR5cGUoXCJjb2NhXCIpXHJcbiAgICAgICAgaWYgKCFjYW5Db29rICYmICFjYW5QaWNrdXApIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0NvY2EoKVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX3NhdWNlKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgIC8vICAgICBpZiAoIXRoaXMubWNDb21wLmhhc0FueUl0ZW0oKSB8fCB0aGlzLm1jQ29tcC5maW5kQ29va2VkVHJheVNsb3QoKSA8IDApIHJldHVybjtcclxuICAgIC8vICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgLy8gICAgIHRoaXMubWNDb21wLm1vdmVUb1NhdWNlKClcclxuICAgIC8vIH1cclxuICAgIGJ0bl9jYWtlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNNb3ZpbmcpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQ2FrZSgpXHJcbiAgICB9XHJcbiAgICBidG5fdG9tYXRvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb1RvbWF0bygpXHJcbiAgICB9XHJcbiAgICBnZXRDdXNUcmF5SW5kZXgoY3VzTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyckN1cy5pbmRleE9mKGN1c05vZGUpXHJcbiAgICB9XHJcbiAgICBjaGVja1NlbGwodGFyZ2V0Q3VzPzogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgc2VsbCBNYWluXCIpXHJcbiAgICAgICAgbGV0IGN1cyA9IHRhcmdldEN1cyB8fCB0aGlzLnNlbGxUYXJnZXRDdXMgfHwgdGhpcy5pc1RhcmdldEN1cyB8fCB0aGlzLmFyckN1c1swXVxyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkgfHwgIWN1cykgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKVxyXG4gICAgICAgIGlmICghY3VzQ29tcCB8fCBjdXNDb21wLmlzU3VjY2VzcyB8fCAhY3VzQ29tcC5pc1JlYWR5Rm9yU2VsbCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IHRyYXlJZHggPSB0aGlzLm1jQ29tcC5maW5kVHJheUZvckN1c3RvbWVyKGN1c0NvbXApXHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5oYXNBbnlJdGVtKCkgfHwgdHJheUlkeCA8IDApIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2VsbFRhcmdldEN1cyA9IGN1c1xyXG4gICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gdHJheUlkeFxyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBjdXNcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0J1eSgpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHZhbGlkYXRlU2VsbEF0Q291bnRlcigpIHtcclxuICAgICAgICBsZXQgY3VzID0gdGhpcy5zZWxsVGFyZ2V0Q3VzIHx8IHRoaXMuaXNUYXJnZXRDdXMgfHwgdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICBpZiAoIWN1cykge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgY3VzQ29tcC5pc1N1Y2Nlc3MgfHwgIWN1c0NvbXAuaXNSZWFkeUZvclNlbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gLTFcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1c0NvbXAudmFsaWRhdGVTZWxsKClcclxuICAgIH1cclxuICAgIG5leHRDdXModmFsdWU6IGJvb2xlYW4sIGRlcGFydGVkQ3VzPzogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmIChkZXBhcnRlZEN1cykge1xyXG4gICAgICAgICAgICBsZXQgaWR4ID0gdGhpcy5hcnJDdXMuaW5kZXhPZihkZXBhcnRlZEN1cylcclxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB0aGlzLmFyckN1cy5zcGxpY2UoaWR4LCAxKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hcnJDdXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5zcGxpY2UoMCwgMSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY291bnRDdXMrK1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2FrZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idG5Qb3RhdG8uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY291bnRDdXMgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmJhck1pc3Npb24yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYmFyTWlzc2lvbjIpLmJ5KDAuNCwgeyBvcGFjaXR5OiAtMjU1LCBwb3NpdGlvbjogY2MudjMoMCwgMjAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhck1pc3Npb24yLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2VsbFRhcmdldEN1cyA9IG51bGxcclxuICAgICAgICB0aGlzLnNlbGxUcmF5U2xvdCA9IC0xXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID49IHRoaXMubWF4Q3VzdG9tZXJzIHx8IHRoaXMuYXJyQ3VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3YXNHcm91cEF0Q291bnRlciA9IHRoaXMuY291bnRlckN1c0NvdW50ID4gMVxyXG4gICAgICAgIGlmICh3YXNHcm91cEF0Q291bnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXJDdXNDb3VudC0tXHJcbiAgICAgICAgICAgIHRoaXMubWNDb21wLmFmdGVyQ3VzdG9tZXJMZWZ0KClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgIHRoaXMubWNDb21wLnJlc2V0VG9TdGFydCgpXHJcblxyXG4gICAgICAgIGxldCBlbnRlckNvdW50ID0gdGhpcy5nZXRFbnRlckNvdW50Rm9yV2F2ZSgpXHJcbiAgICAgICAgdGhpcy5lbnRlckN1c3RvbWVycyhlbnRlckNvdW50KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmlkU291bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0R3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLWdyYXktc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG5cclxuICAgIH1cclxuICAgIG9mZkdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbmRHYW1lID0gZmFsc2VcclxuICAgIG9uRW5kR2FtZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNFbmRHYW1lID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpXHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcclxuICAgICAgICAgICAgLy8gdGhpcy5hbWF6aW5nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5raW5nLCBmYWxzZSwgMC41KVxyXG5cclxuICAgICAgICAgICAgfSwgMC41KVxyXG5cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtMb3NlLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMuZW5kQ2FyZFdpbikgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gfSwgMC41KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5hcnJDdXMpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNoaWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiNi5hbmdyeVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZFNvdW5kKVxyXG4gICAgICAgICAgICAvLyB0aGlzLnRpbWV1cC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtpbmcsIGZhbHNlLCAwLjUpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgMSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICBpc0RvYyA9IGZhbHNlXHJcbiAgICAvLyB1cGRhdGUoZHQpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxyXG4gICAgLy8gICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgIC8vICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHVwZGF0ZVJlc3BvbnNpdmUoKSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFyclBvc01lbnVOZ2FuZyA9IFtjYy52MygtMzkxLCAtMTAyKSwgY2MudjMoMzc1LCAtMTEyKSwgY2MudjMoMTE0LCAtMTIwKSwgY2MudjMoLTQwOSwgLTI4NCksIGNjLnYzKC0xNTgsIC0yOTYpLCBjYy52MygxMTgsIC0yODApLCBjYy52MygzOTAsIC0yOTYpLCBjYy52MygtMTM3LCAtMTE2KV07XHJcbiAgICBhcnJQb3NEb2MgPSBbY2MudjMoMjYsIC0zMzcpLCBjYy52MygzMzYsIC0xMTIpLCBjYy52MygxNS41LCAtMTIxKSwgY2MudjMoLTE3MCwgLTUyNS43KSwgY2MudjMoLTMwMCwgLTM1MiksIGNjLnYzKDE4Ni45NiwgLTUxMiksIGNjLnYzKDM1NSwgLTMzNSksIGNjLnYzKC0yOTIsIC0xMTYpXVxyXG4gICAgbWFnZnJvbnQgPSAwXHJcbiAgICBtYWdWaWRlbyA9IDBcclxuICAgIGlzU2NhbGVWaWRlbyA9IDFcclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5iYXJDb2luLnNjYWxlID0gKGxvZ2ljKSA/IDIuNSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAobG9naWMpID8gMjEwIDogMTQwXHJcbiAgICAgICAgdGhpcy5waGFvSG9hLnNjYWxlID0gKGxvZ2ljKSA/IDkgOiA1XHJcbiAgICAgICAgdGhpcy5ndWlsZC5zY2FsZSA9IChsb2dpYykgPyAyIDogMS4yXHJcbiAgICAgICAgdGhpcy5ndWlsZC5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtOTAwKSA6IGNjLnYzKDAsIC0zNjApXHJcblxyXG4gICAgICAgIHRoaXMudGltZXVwLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcclxuICAgICAgICB0aGlzLmFtYXppbmcuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuNVxyXG4gICAgICAgIHRoaXMubm90aU1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMiA6IDFcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24yLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgdGhpcy5tYWdWaWRlbyA9IDBcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMS43IDogMVxyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoLTE2MCwgMzAwLCAwKSA6IGNjLnYzKDAsIDEyMCwgMClcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNTBcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgdGhpcy5jYW1lcmFEb2Mubm9kZS5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5tYWcgPSAwXHJcbiAgICAgICAgdGhpcy5tYWdmcm9udCA9IDBcclxuICAgICAgICB0aGlzLnZpZGVvLm5vZGUucGFyZW50LnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxO1xyXG4gICAgICAgIHRoaXMudmlkZW8ubm9kZS5wYXJlbnQucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoLTUwMCwgNjAwKSA6IGNjLnYzKDAsIDApXHJcbiAgICAgICAgdGhpcy5pc1NjYWxlVmlkZW8gPSAyXHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWdWaWRlbyA9IDMwMFxyXG4gICAgICAgICAgICB0aGlzLmlzU2NhbGVWaWRlbyA9IDEuNVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0RvYyA9IHRydWVcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIGNvbnN0IFRBTExfUEhPTkVfTUlOX1JBVElPID0gMi4wOyAgICAgICAgLy8gaVBob25lIFggfjIuMTYsIDIwOjkgQW5kcm9pZCB+Mi4yMlxyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjRcclxuICAgICAgICAgICAgaWYgKGFzcGVjdFJhdGlvID49IFRBTExfUEhPTkVfTUlOX1JBVElPKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhckNvaW4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMzAwICsgMzBcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAxNTAgKyAzMFxyXG4gICAgICAgICAgICAgICAgaWYgKGFzcGVjdFJhdGlvID4gMi4yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS43NVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLnNjYWxlID0gMS4yXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhckNvaW4uc2NhbGUgPSAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSBmYWxzZVxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hZyA9IC0yMDBcclxuICAgICAgICAgICAgICAgIHRoaXMubWFnZnJvbnQgPSAyMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjg1XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hZyA9IDIyMFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==