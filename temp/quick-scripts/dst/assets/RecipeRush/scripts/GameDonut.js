
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
        _this.logo = null;
        _this.mainCamera = null;
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
    };
    NewClass.prototype.moveTicket = function () {
        this.ticket.active = true;
        cc.audioEngine.play(this.soundTicketFly, false, 0.3);
        cc.tween(this.camera.node).to(1, { position: cc.v3(1750, -200.232) }).call(function () {
            // this.ticket.getComponent(cc.Animation).play("ticket_show")
        }).start();
        cc.tween(this.camera).to(1, { zoomRatio: 1 }).start();
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
            }).start();
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundDO, false, 1);
            }, 3.5);
            _this.scheduleOnce(function () {
                _this.video.node.scale = 2;
                _this.video.node.position = cc.v3(1700, -300);
                // this.video.node.position=
            }, 4);
            _this.scheduleOnce(function () {
                _this.video.node.position = cc.v3(-900, -1000);
            }, 5 - 0.3);
            _this.scheduleOnce(function () {
                _this.listCus2.active = true;
                _this.camera.node.position = cc.v3(-40, 300 - 100, 0);
                _this.camera.zoomRatio = 0.8;
                _this.video.node.active = false;
                _this.failUi.active = true;
                cc.audioEngine.play(_this.soundFail, false, 1);
                _this.scheduleOnce(function () {
                    _this.failUi.active = false;
                    cc.tween(_this.camera.node).to(1, { position: cc.v3(-160 + 40 + 250, 300) }).start();
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
        // this.listCus.scale = (logic) ? 1 : 1
        // // this.listKhay.scale = (logic) ? 1.1 : 1
        this.timeup.scale = (logic) ? 1 : 1.4;
        this.amazing.scale = (logic) ? 1 : 1.4;
        this.endCardDoc.scale = 1.5;
        this.notiMission.scale = (logic) ? 2 : 1;
        this.barMission2.scale = (logic) ? 2 : 1;
        // this.tutMision.scale = (logic) ? 2 : 1
        this.barMission.scale = (logic) ? 1.7 : 1;
        // this.barMission2.scale = (logic) ? 2 : 1
        this.mainCamera.node.position = (logic) ? cc.v3(-160, 300, 0) : cc.v3(0, 120, 0);
        this.barMission.getComponent(cc.Widget).top = 50;
        if (this.isEndGame) {
            this.endCardDoc.active = (logic) ? true : false;
            this.endCardWin.active = (logic) ? false : true;
        }
        if (logic == true) {
            this.isDoc = true;
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            var TALL_PHONE_MIN_RATIO = 2.0; // iPhone X ~2.16, 20:9 Android ~2.22
            this.camera.zoomRatio = 1.4;
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {
                this.barCoin.getComponent(cc.Widget).top = 300 + 30;
                this.barMission.getComponent(cc.Widget).top = 150 + 30;
                if (aspectRatio > 2.2) {
                    this.camera.zoomRatio = 1.75;
                }
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.5;
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
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.85;
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
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcR2FtZURvbnV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0FBRXZCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcTdCQztRQW43Qkcsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFHaEMsZUFBUyxH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UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1FBQ3JDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0QsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNyQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUMvQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDMUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0QsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNoQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDVixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFBQSxpQkF5SEM7UUF4SEcsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JJLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN0SSxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEksSUFB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LENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDL0QsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzdELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDdEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUM3RSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUN0RSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDN0QsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUks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SSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9ELHVDQUF1QztRQUN2Qyw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzNCLElBQUksQ0FB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QUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0k7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUF4S0wsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXE3QjVCO0lBQUQsZUFBQztDQXI3QkQsQUFxN0JDLENBcjdCcUMsRUFBRSxDQUFDLFNBQVMsR0FxN0JqRDtrQkFyN0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuY29pbiA9IDBcclxuZ2xvYmFsVGhpcy5HYW1lID0gZmFsc2VcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2hvd1BvcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsb3NlUG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE9rOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRyYW5zOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2VsbERvbmU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua2luZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3JlYW06IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoZXJyeTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENyZWFtTWluaTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJhbmg6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRBbmdyeTE6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRBbmdyeTI6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRGb290OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRnVubnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRPcGVuT3JkZXI6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRpY2tldEZseTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRE86IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEZhaWw6Y2MuQXVkaW9DbGlwPW51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmRXaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJUaW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyQ29pbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb0hvYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1ldXA6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFtYXppbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgbm90aUNvaW46IGNjLkFuaW1hdGlvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aU1pc3Npb246IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkRG9jOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vbmV3XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJNaXNzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJNaXNzaW9uMjogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vYnRuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpbmQxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsaXN0UHJlQ1VzOiBjYy5QcmVmYWJbXSA9IFtdXHJcblxyXG4gICAgLy9uZXdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGlja2V0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGVmMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoZWYyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlVG9tOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlVG9mdTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVIYW5oOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZURhdTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVTYXVjZTogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF0ZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXRlTGlzdDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuVG86IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5EYXU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5IYW5oOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5EYXVQaHU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5TYXVjZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFRpY2s6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJdGVtTm9pOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub2lTdXA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlZpZGVvUGxheWVyKVxyXG4gICAgdmlkZW86IGNjLlZpZGVvUGxheWVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VzMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXMyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmYWlsVWk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBtY0NvbXAgPSBudWxsXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyB0dXRNaXNpb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBhcnJCZXAgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICBhcnJEaWEgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcblxyXG5cclxuICAgIG1heEtoYXkgPSA3XHJcblxyXG4gICAgYXJyRG9udXRwb3MgPSBbXVxyXG5cclxuICAgIGlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgaXNUdXRNZWF0ID0gZmFsc2VcclxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXHJcbiAgICBpc1R1dENsaWNrTWVhdCA9IGZhbHNlXHJcblxyXG5cclxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcclxuICAgIC8vIGlzU3RlcCA9IDBcclxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIG1heEN1c3RvbWVycyA9IDZcclxuICAgIGlkU291bmQgPSBudWxsXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICAvL2l0ZW06IDA6YnVnZXIsIDE6IGtlbSAyOmRvbnV0IDM6a2hvYWl0YXkgNDpwaG8gNTogcHVkZGluZyA2OiB0cmEgIDc6YmFuaG1pIDg6Y29jb251dFxyXG4gICAgcmF5WTogbnVtYmVyW10gPSBbMTIwLCAwLCAtMTIwXTsgICAvLyB24buLIHRyw60gWSBj4bunYSAzIHJheVxyXG4gICAgc3Bhd25YOiBudW1iZXIgPSA3MDA7ICAgICAgICAgICAgICAvLyB24buLIHRyw60gc3Bhd24gYsOqbiBwaOG6o2lcclxuICAgIGFyckl0ZW0gPSBbW10sIFtdXVxyXG4gICAgYXJyS2hheSA9IFtdXHJcbiAgICBhcnJUYXJnZXRNaXNzaW9uID0gW11cclxuICAgIGFyckN1cyA9IFtdXHJcbiAgICBzZWxsVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgc2VsbFRyYXlTbG90ID0gLTFcclxuICAgIGN1c0NvdW50ZXJQb3MgPSBudWxsXHJcbiAgICBjdXNTbG90R2FwID0gNTAwXHJcbiAgICBjdXNFbnRlck9mZnNldCA9IGNjLnYzKDM1MCwgMCwgMClcclxuICAgIGN1c1dhbGtTcGVlZCA9IDQzNy41XHJcbiAgICBjb3VudGVyQ3VzQ291bnQgPSAwXHJcbiAgICBwcmVDdXNJbmRleCA9IDBcclxuICAgIGlzU3RhcnRnYW1lID0gZmFsc2VcclxuICAgIGlzRmlyc3RDbGljayA9IGZhbHNlXHJcbiAgICAvL21pc3Npb25cclxuICAgIG1zVG9tID0gZmFsc2U7XHJcbiAgICBtc0hhbmggPSBmYWxzZTtcclxuICAgIG1zRGF1ID0gZmFsc2U7XHJcbiAgICBtc1RvZnUgPSBmYWxzZVxyXG4gICAgbXNTYXVjZXMgPSBmYWxzZVxyXG4gICAgLy8wOmJhbmggdGh1b25nIDE6Y2hvY29sYXRlIDI6IHN0cmF3YmVycnkgXHJcbiAgICBpZEZ1bm55ID0gbnVsbFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVGlja2V0KClcclxuICAgICAgICB9LCAxLjUpXHJcbiAgICAgICAgbGV0IGFuaW1DaGVmdDEgPSB0aGlzLmNoZWYxLmNoaWxkcmVuWzBdXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBhbmltQ2hlZnQxLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiV2luXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLmlkRnVubnkgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRGdW5ueSwgZmFsc2UsIDEpXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkRnVubnkpXHJcbiAgICAgICAgICAgIGFuaW1DaGVmdDEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcblxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBpc0hhbmQgPSBudWxsXHJcbiAgICBpc1Nob3dNZW51ID0gZmFsc2VcclxuICAgIG1vdmVUaWNrZXQoKSB7XHJcbiAgICAgICAgdGhpcy50aWNrZXQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRpY2tldEZseSwgZmFsc2UsIDAuMylcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygxNzUwLCAtMjAwLjIzMikgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudGlja2V0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0aWNrZXRfc2hvd1wiKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMSwgeyB6b29tUmF0aW86IDEgfSkuc3RhcnQoKVxyXG5cclxuICAgIH1cclxuICAgIHNob3dUaWNrZXQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZE9wZW5PcmRlciwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3dNZW51ID0gdHJ1ZVxyXG4gICAgICAgIH0sIDAuNClcclxuICAgIH1cclxuICAgIGFyclRvbSA9IFtdO1xyXG4gICAgYXJySGFuaCA9IFtdO1xyXG4gICAgYXJyRGF1ID0gW107XHJcbiAgICBhcnJUb2Z1ID0gW107XHJcbiAgICBhcnJTYXVjZSA9IG51bGxcclxuICAgIGJ0bl90b20oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZClcclxuXHJcbiAgICAgICAgdGhpcy5tc1RvbSA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0blRvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYyKC03NSwgLTI0KSwgY2MudjIoLTY0LCAxOSksIGNjLnYyKC00NCwgLTMpXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVUb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVRvbSk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucG9zaXRpb24gPSBjYy52MygtMzM0LCAtMjkpO1xyXG4gICAgICAgICAgICAgICAgcHJlVG9tLnBhcmVudCA9IHRoaXMucGxhdGVMaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyclRvbS5wdXNoKHByZVRvbSlcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHByZVRvbSkuYmV6aWVyVG8oMC41LCBjYy52MigtMzM0LCAtMjkpLCBjYy52MigtMzM0LCAtMjkgKyAzMDApLCBhcnJQb3NbaV0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgaSAqIDAuMTUpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKClcclxuICAgICAgICB9LCAwLjUgKyAwLjE1ICogMylcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tIaW5kKClcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG4gICAgYnRuX2hhbmgoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmQpXHJcblxyXG4gICAgICAgIHRoaXMubXNIYW5oID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0bkhhbmguZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdFRpY2suY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYyKDYxLCA0MSksIGNjLnYyKDgwLCAxMCksIGNjLnYyKDM3LCAxMyldXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZVRvbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlSGFuaCk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucG9zaXRpb24gPSBjYy52MygyNSwgLTI1MSk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucGFyZW50ID0gdGhpcy5wbGF0ZUxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJySGFuaC5wdXNoKHByZVRvbSlcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwcmVUb20pLmJlemllclRvKDAuNSwgY2MudjIoMjUsIC0yNTEpLCBjYy52MigyNSwgLTI1MSArIDM1MCksIGFyclBvc1tpXSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCBpICogMC4xNSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoKVxyXG4gICAgICAgIH0sIDAuNSArIDAuMTUgKiAzKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0hpbmQoKVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBidG5fZGF1UGh1KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2hvd01lbnUgPT0gZmFsc2UpIHJldHVyblxyXG5cclxuICAgICAgICB0aGlzLm1zVG9mdSA9IHRydWU7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZClcclxuXHJcbiAgICAgICAgdGhpcy5idG5EYXVQaHUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdFRpY2suY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYyKDI2LCAtMzIpLCBjYy52MigzLCAtNTkpLCBjYy52Mig0NywgLTU1KV1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlVG9tID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVUb2Z1KTtcclxuICAgICAgICAgICAgICAgIHByZVRvbS5wb3NpdGlvbiA9IGNjLnYzKDE4MCwgLTI1Nik7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucGFyZW50ID0gdGhpcy5wbGF0ZUxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyVG9mdS5wdXNoKHByZVRvbSlcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwcmVUb20pLmJlemllclRvKDAuNSwgY2MudjIoMTgwLCAtMjU2KSwgY2MudjIoMTgwLCAtMjU2ICsgMzUwKSwgYXJyUG9zW2ldKS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIGkgKiAwLjE1KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcygpXHJcbiAgICAgICAgfSwgMC41ICsgMC4xNSAqIDMpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSGluZCgpXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGJ0bl9kYXUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmQpXHJcblxyXG4gICAgICAgIHRoaXMubXNEYXUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5EYXUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmxpc3RUaWNrLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYyKC01LCAtOSksIGNjLnYyKC04LCAxMSksIGNjLnYyKC0yMSwgMTEpXVxyXG4gICAgICAgIGxldCBhcnJBbmdsZSA9IFs0NSwgNTUsIDczXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVUb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhdSk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucG9zaXRpb24gPSBjYy52MygtMTM0LCAtMjQ1KTtcclxuICAgICAgICAgICAgICAgIHByZVRvbS5wYXJlbnQgPSB0aGlzLnBsYXRlTGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJEYXUucHVzaChwcmVUb20pXHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocHJlVG9tKS5iZXppZXJUbygwLjUsIGNjLnYyKC0xMzQsIC0yNDUpLCBjYy52MigtMTM0LCAtMjQ1ICsgMzUwKSwgYXJyUG9zW2ldKS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwcmVUb20pLnRvKDAuNSwgeyBhbmdsZTogYXJyQW5nbGVbaV0gfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCBpICogMC4xNSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoKVxyXG4gICAgICAgIH0sIDAuNSArIDAuMTUgKiAzKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0hpbmQoKVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBpc1NhdWNlRmluYWwgPSBmYWxzZVxyXG4gICAgYnRuX3NhdWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2hvd01lbnUgPT0gZmFsc2UpIHJldHVyblxyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kKVxyXG4gICAgICAgIHRoaXMuYnRuU2F1Y2UuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52MigzMDAsIDIpXHJcbiAgICAgICAgbGV0IGVuZHBvcyA9IGNjLnYyKDEuNSwgNjcpO1xyXG4gICAgICAgIGxldCBwcmVTYXVjZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlU2F1Y2UpXHJcbiAgICAgICAgcHJlU2F1Y2UucG9zaXRpb24gPSBjYy52MyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuICAgICAgICBwcmVTYXVjZS5wYXJlbnQgPSB0aGlzLnBsYXRlTGlzdFxyXG4gICAgICAgIHRoaXMuYXJyU2F1Y2UgPSBwcmVTYXVjZTtcclxuICAgICAgICBjYy50d2VlbihwcmVTYXVjZSkuYmV6aWVyVG8oMC41LCBzdGFydFBvcywgY2MudjIoc3RhcnRQb3MueCwgc3RhcnRQb3MueSArIDMwMCksIGVuZHBvcykuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMubXNTYXVjZXMgPSB0cnVlXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1NhdWNlRmluYWwgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKClcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSGluZCgpXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGNoZWNrU3VjY2VzcygpIHtcclxuICAgICAgICBpZiAodGhpcy5tc0RhdSA9PSB0cnVlICYmIHRoaXMubXNIYW5oID09IHRydWUgJiYgdGhpcy5tc1NhdWNlcyA9PSB0cnVlICYmIHRoaXMubXNUb2Z1ID09IHRydWUgJiYgdGhpcy5tc1RvbSA9PSB0cnVlICYmIHRoaXMuaXNTYXVjZUZpbmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhdGUuZ2V0Q2hpbGRCeU5hbWUoXCJwaGFvaG9hXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNlbGxEb25lLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgfSwgMC41KVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0hpbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXNUb2Z1ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1zSGFuaCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tc0RhdSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tc1NhdWNlcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlkRm9vdCA9IG51bGxcclxuICAgIGJ0bl9wbGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnBsYXRlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls1XS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIGxldCBjaGVmQU5pbSA9IHRoaXMuY2hlZjIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigwLCBcIkwtYXJtXCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy5wbGF0ZS5wYXJlbnQgPSB0aGlzLmNoZWYyO1xyXG4gICAgICAgIHRoaXMucGxhdGUucG9zaXRpb24gPSBjYy52MygyMTcsIDQ4MilcclxuICAgICAgICB0aGlzLnBsYXRlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRm9vdCwgZmFsc2UsIDAuNSlcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDEyMzksIDM0NikgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hlZjIpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTIzMSwgLTIxOSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZEZvb3QpXHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNJdGVtKClcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDEsIFwiV2Fsa1wiLCB0cnVlKTtcclxuXHJcbiAgICB9XHJcbiAgICB0cmFuc0l0ZW0oKSB7XHJcbiAgICAgICAgbGV0IGFyclBvc0RhdSA9IFt0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuWzBdLnBvc2l0aW9uLCB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuWzFdLnBvc2l0aW9uLCB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuWzJdLnBvc2l0aW9uXVxyXG4gICAgICAgIGxldCBhcnJQb3NUb2Z1ID0gW3RoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bNF0ucG9zaXRpb24sIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bM10ucG9zaXRpb24sIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bNV0ucG9zaXRpb25dXHJcbiAgICAgICAgbGV0IGFyclBvc0hhbmggPSBbdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbls2XS5wb3NpdGlvbiwgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbls3XS5wb3NpdGlvbiwgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbls4XS5wb3NpdGlvbl1cclxuICAgICAgICBsZXQgYXJyUG9zVG9tID0gW3RoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bOV0ucG9zaXRpb24sIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bMTBdLnBvc2l0aW9uLCB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuWzExXS5wb3NpdGlvbl1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gdGhpcy5hcnJUb21baV07XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSB0aGlzLmFyckRhdVtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtMyA9IHRoaXMuYXJySGFuaFtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtNCA9IHRoaXMuYXJyVG9mdVtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MxID0gYXJyUG9zVG9tW2ldO1xyXG4gICAgICAgICAgICAgICAgcG9zMSA9IHRoaXMubGlzdEl0ZW1Ob2kuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczEpXHJcbiAgICAgICAgICAgICAgICBwb3MxID0gaXRlbTEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczIgPSBhcnJQb3NUb2Z1W2ldO1xyXG4gICAgICAgICAgICAgICAgcG9zMiA9IHRoaXMubGlzdEl0ZW1Ob2kuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczIpXHJcbiAgICAgICAgICAgICAgICBwb3MyID0gaXRlbTQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczMgPSBhcnJQb3NIYW5oW2ldO1xyXG4gICAgICAgICAgICAgICAgcG9zMyA9IHRoaXMubGlzdEl0ZW1Ob2kuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczMpXHJcbiAgICAgICAgICAgICAgICBwb3MzID0gaXRlbTMucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczQgPSBhcnJQb3NEYXVbaV07XHJcbiAgICAgICAgICAgICAgICBwb3M0ID0gdGhpcy5saXN0SXRlbU5vaS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zNClcclxuICAgICAgICAgICAgICAgIHBvczQgPSBpdGVtMi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zNCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtMSkuYmV6aWVyVG8oMC42LCBjYy52MihpdGVtMS54LCBpdGVtMS55KSwgY2MudjIoaXRlbTEueCwgaXRlbTEueSArIDQwMCksIGNjLnYzKHBvczEueCwgcG9zMS55KSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuW2kgKyA5XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbltpICsgOV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0pLmRlbGF5KDAuNCkudG8oMi41LCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaXRlbTIpLmJlemllclRvKDAuNiwgY2MudjIoaXRlbTIueCwgaXRlbTIueSksIGNjLnYyKGl0ZW0yLngsIGl0ZW0yLnkgKyA0MDApLCBjYy52Myhwb3M0LngsIHBvczQueSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtMykuYmV6aWVyVG8oMC42LCBjYy52MihpdGVtMi54LCBpdGVtMi55KSwgY2MudjIoaXRlbTIueCwgaXRlbTIueSArIDQwMCksIGNjLnYzKHBvczMueCwgcG9zMy55KSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuW2kgKyA2XS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaXRlbTQpLmJlemllclRvKDAuNiwgY2MudjIoaXRlbTIueCwgaXRlbTIueSksIGNjLnYyKGl0ZW0yLngsIGl0ZW0yLnkgKyA0MDApLCBjYy52Myhwb3MyLngsIHBvczIueSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW00LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbltpICsgM10uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYXJyU2F1Y2UpLmJlemllclRvKDAuNiwgY2MudjIodGhpcy5hcnJTYXVjZS54LCB0aGlzLmFyclNhdWNlLnkpLCBjYy52Mih0aGlzLmFyclNhdWNlLngsIHRoaXMuYXJyU2F1Y2UueSArIDQwMCksIGNjLnYzKHBvczEueCwgcG9zMS55KSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJTYXVjZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAwLjEgKiBpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjaGVmQU5pbSA9IHRoaXMuY2hlZjIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICB0aGlzLnBsYXRlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9pU3VwLmdldENvbXBvbmVudChcImNvb2tpbmdcIikuc2V0T24oKVxyXG4gICAgICAgICAgICB0aGlzLmlzU091bmROYXUgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDcmVhbU1pbmksIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bixmYWxzZSwxKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLmN1czEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlzU091bmROYXUpXHJcbiAgICAgICAgICAgIHRoaXMuY2hlZjIuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF0ZTJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHBsYXRlMiA9IHRoaXMuY2hlZjIuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF0ZTJcIilcclxuICAgICAgICAgICAgbGV0IGNoZWZBTmltID0gdGhpcy5jaGVmMi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigxLCBcIldhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigwLCBcIkwtYXJtXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuaWRGb290ID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRm9vdCwgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgdGhpcy50aWNrZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50aWNrZXQpLnRvKDAuMywgeyBzY2FsZTogMi4xIH0pLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkuYnkoMSwgeyBwb3NpdGlvbjogY2MudjMoMCwgLTYwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNoZWYyKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygxMzkyLCAtNTkyKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjaGVmQU5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkRm9vdClcclxuICAgICAgICAgICAgICAgIHBsYXRlMi5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIHBsYXRlMi5wb3NpdGlvbiA9IGNjLnYzKDEyMzYsIC0zODIpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4ocGxhdGUyKS5kZWxheSgxLjEpLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoMTIzNiwgLTU1MCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW8ucGxheSgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRE8sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgfSwgMy41KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5vZGUuc2NhbGUgPSAyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5vZGUucG9zaXRpb24gPSBjYy52MygxNzAwLCAtMzAwKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy52aWRlby5ub2RlLnBvc2l0aW9uPVxyXG4gICAgICAgICAgICB9LCA0KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5vZGUucG9zaXRpb24gPSBjYy52MygtOTAwLCAtMTAwMClcclxuXHJcbiAgICAgICAgICAgIH0sIDUgLSAwLjMpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEN1czIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC00MCwgMzAwIC0gMTAwLCAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhaWxVaS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRmFpbCxmYWxzZSwxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbFVpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTE2MCArIDQwICsgMjUwLCAzMDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWYxLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiRmFpbFwiLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRBbmdyeTEsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua0xvc2UsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMylcclxuICAgICAgICAgICAgICAgIH0sIDEuMylcclxuXHJcbiAgICAgICAgICAgIH0sIDUuOClcclxuXHJcbiAgICAgICAgfSwgMylcclxuICAgIH1cclxuICAgIGlzU091bmROYXUgPSBudWxsXHJcblxyXG5cclxuICAgIHJlcGxhY2VDdXN0b21lcihkZXBhcnRlZEN1czogY2MuTm9kZSwgY291bnRlclBvczogY2MuVmVjMykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLmFyckN1cy5pbmRleE9mKGRlcGFydGVkQ3VzKVxyXG5cclxuICAgICAgICBsZXQgbmV3Q3VzID0gdGhpcy5zcGF3bkN1c3RvbWVyRnJvbVByZWZhYigpXHJcbiAgICAgICAgaWYgKCFuZXdDdXMpIHJldHVyblxyXG4gICAgICAgIHRoaXMuYnRuQ2FrZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0blBvdGF0by5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbmV3Q3VzQ29tcCA9IG5ld0N1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAgICAgaWYgKG5ld0N1c0NvbXApIHtcclxuICAgICAgICAgICAgbmV3Q3VzQ29tcC5nYW1lUGxheSA9IHRoaXNcclxuICAgICAgICAgICAgbmV3Q3VzQ29tcC5pc1JlYWR5Rm9yU2VsbCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxsVGFyZ2V0Q3VzID09PSBkZXBhcnRlZEN1cyB8fCB0aGlzLmlzVGFyZ2V0Q3VzID09PSBkZXBhcnRlZEN1cykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGxUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gLTFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubWNDb21wKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWNDb21wLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2lkeF0gPSBuZXdDdXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKG5ld0N1cylcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVwYXJ0ZWRDdXMuZGVzdHJveSgpXHJcblxyXG4gICAgICAgIGxldCBzcGF3blBvcyA9IGNvdW50ZXJQb3MuY2xvbmUoKS5hZGQodGhpcy5jdXNFbnRlck9mZnNldClcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBzcGF3blBvcy5zdWIoY291bnRlclBvcykubWFnKClcclxuICAgICAgICBsZXQgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHRoaXMuY3VzV2Fsa1NwZWVkXHJcblxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChuZXdDdXMpXHJcbiAgICAgICAgbmV3Q3VzLnBvc2l0aW9uID0gc3Bhd25Qb3NcclxuICAgICAgICBuZXdDdXMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIG5ld0N1c0NvbXAubW92ZSgpXHJcbiAgICAgICAgY2MudHdlZW4obmV3Q3VzKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgcG9zaXRpb246IGNvdW50ZXJQb3MgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3Q3VzQ29tcC5zaG93TWlzc2lvbigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gbmV3Q3VzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBvbkhpbmQoKSB7XHJcbiAgICAgICAgdGhpcy5oaW5kMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEN1c1F1ZXVlKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW50ZXJDdXN0b21lcnMoMSwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5DaGlja2VuLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzKVxyXG4gICAgfVxyXG4gICAgaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgaXNGaXN0ID0gZmFsc2VcclxuICAgIGlzRmlzdENsaWNrQ2hpY2tlbiA9IGZhbHNlXHJcblxyXG4gICAgaXNNY0J1c3koKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNNb3ZpbmcgfHwgKHRoaXMubWNDb21wICYmIHRoaXMubWNDb21wLmlzV2Fsa2luZygpKVxyXG4gICAgfVxyXG5cclxuICAgIGJ0bl9jaGlja2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuaXNGaXN0Q2xpY2tDaGlja2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXN0Q2xpY2tDaGlja2VuID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5jb3VudERvd24oKVxyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubWNDb21wLmNhblBpY2tNb3JlQ2hpY2tlbigpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bkNoaWNrZW4uZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0NoaWNrZW4oKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5fbWF5Q2hpZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuY2FuRG9BbnlNYWNoaW5lQWN0aW9uKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bk1hY2hpbmUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb01hY2hpbmUoKVxyXG4gICAgfVxyXG4gICAgYnRuX2NvbGEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjb2NhQ29tcCA9IHRoaXMuYnRuQ29jYS5nZXRDb21wb25lbnQoXCJjb2NhXCIpXHJcbiAgICAgICAgbGV0IGNhbkNvb2sgPSAhY29jYUNvbXAuaXNCdXN5KClcclxuICAgICAgICBsZXQgY2FuUGlja3VwID0gY29jYUNvbXAuaXNDb2NhICYmIHRoaXMubWNDb21wLmNhblBpY2tJdGVtVHlwZShcImNvY2FcIilcclxuICAgICAgICBpZiAoIWNhbkNvb2sgJiYgIWNhblBpY2t1cCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQ29jYSgpXHJcbiAgICB9XHJcbiAgICAvLyBidG5fc2F1Y2UoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgLy8gICAgIGlmICghdGhpcy5tY0NvbXAuaGFzQW55SXRlbSgpIHx8IHRoaXMubWNDb21wLmZpbmRDb29rZWRUcmF5U2xvdCgpIDwgMCkgcmV0dXJuO1xyXG4gICAgLy8gICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAvLyAgICAgdGhpcy5tY0NvbXAubW92ZVRvU2F1Y2UoKVxyXG4gICAgLy8gfVxyXG4gICAgYnRuX2Nha2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc01vdmluZylcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9DYWtlKClcclxuICAgIH1cclxuICAgIGJ0bl90b21hdG8oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvVG9tYXRvKClcclxuICAgIH1cclxuICAgIGdldEN1c1RyYXlJbmRleChjdXNOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzTm9kZSlcclxuICAgIH1cclxuICAgIGNoZWNrU2VsbCh0YXJnZXRDdXM/OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBzZWxsIE1haW5cIilcclxuICAgICAgICBsZXQgY3VzID0gdGFyZ2V0Q3VzIHx8IHRoaXMuc2VsbFRhcmdldEN1cyB8fCB0aGlzLmlzVGFyZ2V0Q3VzIHx8IHRoaXMuYXJyQ3VzWzBdXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSB8fCAhY3VzKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8IGN1c0NvbXAuaXNTdWNjZXNzIHx8ICFjdXNDb21wLmlzUmVhZHlGb3JTZWxsKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgdHJheUlkeCA9IHRoaXMubWNDb21wLmZpbmRUcmF5Rm9yQ3VzdG9tZXIoY3VzQ29tcClcclxuICAgICAgICBpZiAoIXRoaXMubWNDb21wLmhhc0FueUl0ZW0oKSB8fCB0cmF5SWR4IDwgMCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZWxsVGFyZ2V0Q3VzID0gY3VzXHJcbiAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSB0cmF5SWR4XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IGN1c1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQnV5KClcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVTZWxsQXRDb3VudGVyKCkge1xyXG4gICAgICAgIGxldCBjdXMgPSB0aGlzLnNlbGxUYXJnZXRDdXMgfHwgdGhpcy5pc1RhcmdldEN1cyB8fCB0aGlzLmFyckN1c1swXVxyXG4gICAgICAgIGlmICghY3VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKVxyXG4gICAgICAgIGlmICghY3VzQ29tcCB8fCBjdXNDb21wLmlzU3VjY2VzcyB8fCAhY3VzQ29tcC5pc1JlYWR5Rm9yU2VsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSAtMVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzQ29tcC52YWxpZGF0ZVNlbGwoKVxyXG4gICAgfVxyXG4gICAgbmV4dEN1cyh2YWx1ZTogYm9vbGVhbiwgZGVwYXJ0ZWRDdXM/OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKGRlcGFydGVkQ3VzKSB7XHJcbiAgICAgICAgICAgIGxldCBpZHggPSB0aGlzLmFyckN1cy5pbmRleE9mKGRlcGFydGVkQ3VzKVxyXG4gICAgICAgICAgICBpZiAoaWR4ID49IDApIHRoaXMuYXJyQ3VzLnNwbGljZShpZHgsIDEpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFyckN1cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnNwbGljZSgwLCAxKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb3VudEN1cysrXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5idG5DYWtlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blBvdGF0by5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb3VudEN1cyA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5iYXJNaXNzaW9uMikuYnkoMC40LCB7IG9wYWNpdHk6IC0yNTUsIHBvc2l0aW9uOiBjYy52MygwLCAyMDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbjIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZWxsVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgICAgIHRoaXMuc2VsbFRyYXlTbG90ID0gLTFcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPj0gdGhpcy5tYXhDdXN0b21lcnMgfHwgdGhpcy5hcnJDdXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKHRydWUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdhc0dyb3VwQXRDb3VudGVyID0gdGhpcy5jb3VudGVyQ3VzQ291bnQgPiAxXHJcbiAgICAgICAgaWYgKHdhc0dyb3VwQXRDb3VudGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlckN1c0NvdW50LS1cclxuICAgICAgICAgICAgdGhpcy5tY0NvbXAuYWZ0ZXJDdXN0b21lckxlZnQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgdGhpcy5tY0NvbXAucmVzZXRUb1N0YXJ0KClcclxuXHJcbiAgICAgICAgbGV0IGVudGVyQ291bnQgPSB0aGlzLmdldEVudGVyQ291bnRGb3JXYXZlKClcclxuICAgICAgICB0aGlzLmVudGVyQ3VzdG9tZXJzKGVudGVyQ291bnQpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcblxyXG4gICAgfVxyXG4gICAgb2ZmR3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VuZEdhbWUgPSBmYWxzZVxyXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKClcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLmFtYXppbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtpbmcsIGZhbHNlLCAwLjUpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua0xvc2UsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5lbmRDYXJkV2luKSB0aGlzLmVuZENhcmRXaW4uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB9LCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFyckN1cykge1xyXG4gICAgICAgICAgICAvLyAgICAgY2hpbGQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCI2LmFuZ3J5XCIsIHRydWUpXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgICAgIC8vIHRoaXMudGltZXVwLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua2luZywgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAxKVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2Nob29zZShldmVudCwgdmFsdWUpIHtcclxuICAgIGlzRG9jID0gZmFsc2VcclxuICAgIC8vIHVwZGF0ZShkdCkge1xyXG4gICAgLy8gICAgIC8vIHRoaXMubGJDb2luLnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXHJcbiAgICAvLyAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgLy8gICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgdXBkYXRlUmVzcG9uc2l2ZSgpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXJyUG9zTWVudU5nYW5nID0gW2NjLnYzKC0zOTEsIC0xMDIpLCBjYy52MygzNzUsIC0xMTIpLCBjYy52MygxMTQsIC0xMjApLCBjYy52MygtNDA5LCAtMjg0KSwgY2MudjMoLTE1OCwgLTI5NiksIGNjLnYzKDExOCwgLTI4MCksIGNjLnYzKDM5MCwgLTI5NiksIGNjLnYzKC0xMzcsIC0xMTYpXTtcclxuICAgIGFyclBvc0RvYyA9IFtjYy52MygyNiwgLTMzNyksIGNjLnYzKDMzNiwgLTExMiksIGNjLnYzKDE1LjUsIC0xMjEpLCBjYy52MygtMTcwLCAtNTI1LjcpLCBjYy52MygtMzAwLCAtMzUyKSwgY2MudjMoMTg2Ljk2LCAtNTEyKSwgY2MudjMoMzU1LCAtMzM1KSwgY2MudjMoLTI5MiwgLTExNildXHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmVuZENhcmRXaW4uc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNiA6IDAuNFxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5zY2FsZSA9IChsb2dpYykgPyAyLjUgOiAxLjRcclxuICAgICAgICB0aGlzLmJhckNvaW4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gKGxvZ2ljKSA/IDIxMCA6IDE0MFxyXG4gICAgICAgIHRoaXMucGhhb0hvYS5zY2FsZSA9IChsb2dpYykgPyA5IDogNVxyXG4gICAgICAgIHRoaXMuZ3VpbGQuc2NhbGUgPSAobG9naWMpID8gMiA6IDEuMlxyXG4gICAgICAgIHRoaXMuZ3VpbGQucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoMCwgLTkwMCkgOiBjYy52MygwLCAtMzYwKVxyXG4gICAgICAgIC8vIHRoaXMubGlzdEN1cy5zY2FsZSA9IChsb2dpYykgPyAxIDogMVxyXG4gICAgICAgIC8vIC8vIHRoaXMubGlzdEtoYXkuc2NhbGUgPSAobG9naWMpID8gMS4xIDogMVxyXG4gICAgICAgIHRoaXMudGltZXVwLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcclxuICAgICAgICB0aGlzLmFtYXppbmcuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuNVxyXG4gICAgICAgIHRoaXMubm90aU1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMiA6IDFcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24yLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgLy8gdGhpcy50dXRNaXNpb24uc2NhbGUgPSAobG9naWMpID8gMiA6IDFcclxuICAgICAgICB0aGlzLmJhck1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMS43IDogMVxyXG4gICAgICAgIC8vIHRoaXMuYmFyTWlzc2lvbjIuc2NhbGUgPSAobG9naWMpID8gMiA6IDFcclxuICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygtMTYwLCAzMDAsIDApIDogY2MudjMoMCwgMTIwLCAwKVxyXG4gICAgICAgIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA1MFxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLmFjdGl2ZSA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICBjb25zdCBUQUxMX1BIT05FX01JTl9SQVRJTyA9IDIuMDsgICAgICAgIC8vIGlQaG9uZSBYIH4yLjE2LCAyMDo5IEFuZHJvaWQgfjIuMjJcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS40XHJcbiAgICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA+PSBUQUxMX1BIT05FX01JTl9SQVRJTykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJDb2luLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDMwMCArIDMwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhck1pc3Npb24uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMTUwICsgMzBcclxuICAgICAgICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA+IDIuMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNzVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjVcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuMlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJDb2luLnNjYWxlID0gMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzRG9jID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44NVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=