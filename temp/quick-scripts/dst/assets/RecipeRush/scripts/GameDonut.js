
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
globalThis.coin = 1000;
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
        _this.soundSwoosh = null;
        _this.arrVoice = [];
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
        _this.video = null;
        _this.cus1 = null;
        _this.listCus2 = null;
        _this.failUi = null;
        //new
        _this.firstCus = null;
        _this.ray = null;
        _this.rayAnim = null;
        _this.btnMay1 = null;
        _this.btnMay1Sub = null;
        _this.pizzaNode = null;
        _this.pizzaPrefab = null;
        _this.btnMay2 = null;
        _this.posPizza = null;
        _this.pizzaTable = null;
        _this.cusban = null;
        _this.animChef3 = null;
        _this.hindMay1 = null;
        _this.hindMay2 = null;
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
        _this.arrPizza = [];
        _this.isMay1 = 0;
        _this.isPlay = false;
        _this.isF = false;
        _this.isMay2 = 0;
        _this.isPlay2 = false;
        _this.isMox = false;
        _this.isCountpizza = 2;
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
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.updateResponsive();
        cc.view.setResizeCallback(function () {
            _this.updateResponsive();
        });
        cc.audioEngine.play(this.soundShowPop, false, 1);
        // this.camera.node.position = cc.v3(0, 0)
        // this.scheduleOnce(() => {
        //     this.moveTicket()
        // }, 1.5)
        // let animCheft1 = this.chef1.children[0]
        // this.scheduleOnce(() => {
        //     animCheft1.getComponent(sp.Skeleton).setAnimation(0, "Win", false)
        //     this.idFunny = cc.audioEngine.play(this.soundFunny, false, 1)
        // }, 0.5)
        // this.scheduleOnce(() => {
        //     cc.audioEngine.stop(this.idFunny)
        //     animCheft1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true)
        // }, 2)
        // this.camera.node.position = cc.v3(0 + this.magfront, 120)
        this.scheduleOnce(function () {
            cc.tween(_this.camera).to(0.5, { zoomRatio: 0.75 }).start();
            cc.tween(_this.camera.node).to(0.5, { position: cc.v3(3352.393 - 50, -1228.292) }).start();
            // cc.tween(this.camera).to(0.5, { zoomRatio: 0.75 }).start()
            cc.tween(_this.cameraDoc.node).to(0.5, { position: cc.v3(3352.393 + 300, -1228.292) }).start();
        }, 1.5);
        this.scheduleOnce(function () {
            _this.firstCus.children[1].active = true;
            _this.scheduleOnce(function () {
                _this.firstCus.children[2].active = true;
            }, 0.3);
        }, 2);
    };
    NewClass.prototype.btn_addRay = function (evnt) {
        var _this = this;
        globalThis.coin -= 500;
        this.firstCus.children[1].getComponent(cc.Button).enabled = false;
        cc.tween(this.camera.node).to(0.7, { position: cc.v3(3352.393 - 50, -1228.292 + 1500) }).start();
        cc.tween(this.cameraDoc.node).to(0.7, { position: cc.v3(3352.393 + 300, -1228.292 + 1000) }).start();
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.soundOk, false, 1);
            _this.firstCus.children[1].active = false;
            _this.firstCus.children[2].active = false;
            _this.scheduleOnce(function () {
                _this.ray.active = true;
                _this.rayAnim.active = true;
                _this.spawPizzaFirst();
                // this.spawPizza()
            }, 0.1);
            _this.scheduleOnce(function () {
                _this.btnMay1.getComponent(cc.Button).enabled = true;
                _this.btnMay1.getChildByName("hand").active = true;
                _this.btnMay1.children[0].getChildByName("aBoard").active = true;
            }, 2.2);
        }, 0.3);
    };
    NewClass.prototype.spawPizzaFirst = function () {
        var _this = this;
        this.spawPizza();
        this.schedule(this.spawPizza, 1, 1);
        this.scheduleOnce(function () {
            _this.rayAnim.getComponent(cc.Animation).pause();
            for (var i = 0; i < _this.arrPizza.length; i++) {
                _this.arrPizza[i].getComponent(cc.Animation).pause();
            }
        }, 2.2);
    };
    NewClass.prototype.resumPizza = function () {
        var _this = this;
        this.rayAnim.getComponent(cc.Animation).resume();
        for (var i = 0; i < this.arrPizza.length; i++) {
            this.arrPizza[i].getComponent(cc.Animation).resume();
        }
        this.schedule(this.spawPizza, 1, 2);
        this.scheduleOnce(function () {
            _this.rayAnim.getComponent(cc.Animation).pause();
            for (var i = 0; i < _this.arrPizza.length; i++) {
                _this.arrPizza[i].getComponent(cc.Animation).pause();
            }
        }, 3.7);
    };
    NewClass.prototype.resumPizza2 = function () {
        this.rayAnim.getComponent(cc.Animation).resume();
        for (var i = 0; i < this.arrPizza.length; i++) {
            this.arrPizza[i].getComponent(cc.Animation).resume();
        }
        this.schedule(this.spawPizza, 1);
    };
    NewClass.prototype.spawPizza = function () {
        var pizza = cc.instantiate(this.pizzaPrefab);
        pizza.parent = this.pizzaNode;
        this.arrPizza.push(pizza);
        // this.schedule(() => {
        //     let pizza = cc.instantiate(this.pizzaPrefab);
        //     pizza.parent = this.pizzaNode;
        // }, 1.4)
    };
    NewClass.prototype.btn_upgradeMay1 = function () {
        var _this = this;
        if (this.isMay1 > 1)
            return;
        if (this.isPlay)
            return;
        this.isPlay = true;
        cc.audioEngine.play(this.soundOk, false, 1);
        globalThis.coin -= 100;
        this.btnMay1.scale = 1.54;
        this.btnMay1Sub.scale = 3.1;
        var anim = this.chef2.children[0].getComponent(sp.Skeleton);
        this.isMay1++;
        var fx = this.btnMay1.getChildByName("fx_upgrade");
        fx.getComponent(cc.Animation).play();
        cc.tween(this.btnMay1.children[0]).to(0.2, { scale: 1 * 0.5 }).call(function () {
            _this.btnMay1.children[0].children[_this.isMay1 - 1].active = false;
            _this.btnMay1.children[0].children[_this.isMay1].active = true;
            _this.isPlay = false;
        }).to(0.2, { scale: 1 }).start();
        cc.tween(this.btnMay1Sub).to(0.2, { scale: 3.1 * 0.5 }).call(function () {
            _this.btnMay1Sub.children[_this.isMay1].active = false;
            _this.btnMay1Sub.children[_this.isMay1 + 1].active = true;
        }).to(0.2, { scale: 3.1 }).start();
        if (this.isMay1 == 2) {
            this.btnMay1.getChildByName("hand").active = false;
            // this.btnMay1.children[0].getChildByName("btn").active = false;
            // this.btnMay1.children[0].getChildByName("progress").active = false;
            this.btnMay1.children[0].getChildByName("aBoard").active = false;
            this.btnMay1.getComponent("lonau1").isSuccess = true;
            this.hindMay1.active = false;
            if (this.isF == false) {
                this.isF = true;
                anim.setAnimation(0, "Win", true);
                cc.audioEngine.play(this.arrVoice[0], false, 1);
                this.scheduleOnce(function () {
                    anim.setAnimation(0, "Walk", true);
                    _this.chef2.scaleX = 1;
                    cc.tween(_this.chef2).to(0.8, { position: cc.v3(3066.776, -291.679) }).call(function () {
                        anim.setAnimation(0, "Back-Idle", false);
                        _this.chef2.scaleX = -1;
                    }).start();
                }, 2);
            }
            this.resumPizza();
            this.moveScene2();
        }
        else {
            anim.setAnimation(0, "Idle", true);
        }
    };
    NewClass.prototype.moveScene2 = function () {
        var _this = this;
        this.scheduleOnce(function () {
            cc.tween(_this.camera.node).to(1.2, { position: cc.v3(3352.393 - 2000, -1228.292 + 1500) }).start();
            cc.tween(_this.cameraDoc.node).to(1.2, { position: cc.v3(3352.393 - 1700, -1228.292 + 1000) }).start();
        }, 3);
        this.scheduleOnce(function () {
            _this.btnMay2.getComponent(cc.Button).enabled = true;
            _this.btnMay2.getChildByName("hand").active = true;
            _this.btnMay2.children[0].getChildByName("aBoard").active = true;
        }, 4.4);
    };
    NewClass.prototype.btn_upgradeLoNuong = function () {
        var _this = this;
        if (this.isMay2 > 1)
            return;
        if (this.isPlay2)
            return;
        globalThis.coin -= 100;
        cc.audioEngine.play(this.soundOk, false, 1);
        this.isPlay2 = true;
        this.btnMay2.scale = 2.9;
        var fx = this.btnMay2.getChildByName("fx_upgrade");
        fx.getComponent(cc.Animation).play();
        this.isMay2++;
        cc.tween(this.btnMay2.children[0]).to(0.2, { scale: 1 * 0.5 }).call(function () {
            _this.btnMay2.children[0].children[_this.isMay2].active = false;
            _this.btnMay2.children[0].children[_this.isMay2 + 1].active = true;
            _this.isPlay2 = false;
        }).to(0.2, { scale: 1 }).start();
        if (this.isMay2 == 2) {
            this.hindMay2.active = false;
            this.isMox = true;
            this.animChef3.setAnimation(0, "Win", true);
            cc.audioEngine.play(this.arrVoice[1], false, 1);
            this.btnMay2.getComponent("diaPhomai").isSuccess = true;
            this.btnMay2.getChildByName("hand").active = false;
            this.btnMay2.children[0].getChildByName("hind").active = false;
            // this.moveScene2();
            this.scheduleOnce(function () {
                _this.moveScene3();
            }, 3);
            this.resumPizza2();
            this.btnMay2.children[0].getChildByName("aBoard").active = false;
        }
        else {
            this.animChef3.setAnimation(0, "Idle", true);
        }
    };
    NewClass.prototype.moveScene3 = function () {
        var _this = this;
        cc.tween(this.camera.node).to(2, { position: cc.v3(3352.393 - 2000, -1228.292) }).start();
        cc.tween(this.cameraDoc.node).to(2, { position: cc.v3(3352.393 - 1750, -1228.292) }).start();
        var anim = this.chef3.children[0].getComponent(sp.Skeleton);
        anim.setAnimation(0, "Walk", true);
        this.idFoot = cc.audioEngine.play(this.soundFoot, false, 0.5);
        cc.tween(this.chef3).to(2.5, { position: cc.v3(1131.269, -1539.125) }).call(function () {
            anim.setAnimation(0, "Idle", true);
            anim.setAnimation(1, "L-arm", true);
            cc.audioEngine.stop(_this.idFoot);
            _this.chef3.children[1].active = true;
            _this.scheduleOnce(function () {
                _this.getPizza();
            }, 1);
        }).start();
    };
    NewClass.prototype.getPizza = function () {
        var _this = this;
        var palete = this.chef3.children[1];
        var _loop_1 = function (i) {
            var pizza = this_1.pizzaTable.children[i];
            this_1.scheduleOnce(function () {
                pizza.zIndex = 3;
                cc.audioEngine.play(_this.soundSwoosh, false, 0.5);
                var posEnd = _this.chef3.children[1].convertToWorldSpaceAR(_this.chef3.children[1].children[0].position);
                posEnd = _this.pizzaTable.convertToNodeSpaceAR(posEnd);
                cc.tween(pizza).to(0.5, { position: posEnd }).call(function () {
                    pizza.active = false;
                    palete.children[i + 1].active = true;
                }).start();
            }, 0.1 * i);
        };
        var this_1 = this;
        for (var i = 0; i < 3; i++) {
            _loop_1(i);
        }
        this.scheduleOnce(function () {
            _this.chef3.scale = 1;
            var anim = _this.chef3.children[0].getComponent(sp.Skeleton);
            anim.setAnimation(0, "Walk", true);
            _this.idFoot = cc.audioEngine.play(_this.soundFoot, false, 0.5);
            cc.tween(_this.camera.node).to(2, { position: cc.v3(3352.393 - 2000 - 2000, -1228.292) }).to(2, { position: cc.v3(3352.393 - 2000 - 2000, -1228.292 + 1000) }).start();
            cc.tween(_this.cameraDoc.node).to(2, { position: cc.v3(3352.393 - 2000 - 2000, -1228.292) }).to(2, { position: cc.v3(3352.393 - 2000 - 2000, -1228.292 + 1000) }).start();
            cc.tween(_this.chef3).to(2, { position: cc.v3(-463 + 200, -1559) }).call(function () {
                _this.cusban.children[2].active = true;
                palete.children[3].active = false;
                _this.cusban.children[1].active = true;
                _this.cusban.children[0].active = false;
                globalThis.coin += 500;
                // cc.audioEngine.stop(this.idFoot)
                _this.chef3.scaleX = -1;
            }).to(2, { position: cc.v3(-235, -615) }).call(function () {
                _this.chef3.scaleX = 1;
                _this.cusban.children[3].active = true;
                _this.cusban.children[4].active = true;
                cc.audioEngine.play(_this.arrVoice[3], false, 1);
                globalThis.coin += 1000;
                palete.active = false;
                _this.animChef3.setAnimation(0, "Win", true);
                _this.animChef3.setAnimation(1, "Win", true);
                _this.scheduleOnce(function () {
                    _this.onEndGame(true);
                }, 2);
            }).start();
            // cc.tween(this)
        }, 0.7);
    };
    NewClass.prototype.addPizza = function (pizza) {
        pizza.parent = this.pizzaTable;
        cc.tween(pizza).to(0.4, { position: this.posPizza.children[this.isCountpizza].position }).start();
        this.isCountpizza++;
        if (this.isCountpizza > 5) {
            this.isCountpizza = 0;
        }
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
        var _loop_2 = function (i) {
            this_2.scheduleOnce(function () {
                var preTom = cc.instantiate(_this.preTom);
                preTom.position = cc.v3(-334, -29);
                preTom.parent = _this.plateList;
                _this.arrTom.push(preTom);
                cc.tween(preTom).bezierTo(0.5, cc.v2(-334, -29), cc.v2(-334, -29 + 300), arrPos[i]).start();
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
        var _loop_3 = function (i) {
            this_3.scheduleOnce(function () {
                var preTom = cc.instantiate(_this.preHanh);
                preTom.position = cc.v3(25, -251);
                preTom.parent = _this.plateList;
                _this.arrHanh.push(preTom);
                cc.tween(preTom).bezierTo(0.5, cc.v2(25, -251), cc.v2(25, -251 + 350), arrPos[i]).start();
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
        var _loop_4 = function (i) {
            this_4.scheduleOnce(function () {
                var preTom = cc.instantiate(_this.preTofu);
                preTom.position = cc.v3(180, -256);
                preTom.parent = _this.plateList;
                _this.arrTofu.push(preTom);
                cc.tween(preTom).bezierTo(0.5, cc.v2(180, -256), cc.v2(180, -256 + 350), arrPos[i]).start();
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
        var _loop_5 = function (i) {
            this_5.scheduleOnce(function () {
                var preTom = cc.instantiate(_this.preDau);
                preTom.position = cc.v3(-134, -245);
                preTom.parent = _this.plateList;
                _this.arrDau.push(preTom);
                cc.tween(preTom).bezierTo(0.5, cc.v2(-134, -245), cc.v2(-134, -245 + 350), arrPos[i]).start();
                cc.tween(preTom).to(0.5, { angle: arrAngle[i] }).start();
            }, i * 0.15);
        };
        var this_5 = this;
        for (var i = 0; i < 3; i++) {
            _loop_5(i);
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
        var _loop_6 = function (i) {
            this_6.scheduleOnce(function () {
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
        var this_6 = this;
        for (var i = 0; i < 3; i++) {
            _loop_6(i);
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
        // this.warning.active = false;
        this.scheduleOnce(function () {
            _this.updateResponsive();
        }, 0.5);
        if (value == true) {
            // this.barMission.getComponent("barTime").endGame()
            // this.amazing.active = true;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundThinking, false, 0.5);
            }, 0.5);
            // cc.audioEngine.play(this.soundThinkLose, false, 1)
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
            cc.audioEngine.play(this.soundThinking, false, 0.5);
            this.scheduleOnce(function () {
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
        // this.phaoHoa.scale = (logic) ? 9 : 5
        // this.guild.scale = (logic) ? 2 : 1.2
        // this.guild.position = (logic) ? cc.v3(0, -900) : cc.v3(0, -360)
        // this.timeup.scale = (logic) ? 1 : 1.4
        // this.amazing.scale = (logic) ? 1 : 1.4
        this.endCardDoc.scale = 1.57;
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
        this.isScaleVideo = 2;
        if (this.isEndGame) {
            this.endCardDoc.active = (logic) ? true : false;
            this.endCardWin.active = (logic) ? false : true;
            // this.endCardWin.active = true
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
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSwoosh", void 0);
    __decorate([
        property([cc.AudioClip])
    ], NewClass.prototype, "arrVoice", void 0);
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
    ], NewClass.prototype, "firstCus", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ray", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "rayAnim", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnMay1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnMay1Sub", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pizzaNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "pizzaPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnMay2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "posPizza", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pizzaTable", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cusban", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "animChef3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hindMay1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hindMay2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcR2FtZURvbnV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBQ3RCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0FBRXZCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa3ZDQztRQWh2Q0csa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFHaEMsZUFBUyxH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QVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUN6RixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFNUYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUU3RCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4RSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNoQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3BDLEtB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UUFBUSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUV4SyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDcEUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDckMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2dCQUNqQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUNyQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2dCQUN0QyxVQUFVLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQTtnQkFDdEIsbUNBQW1DO2dCQUNuQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUMxQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzQyxLQUFJLENBQUMs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QUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7UUFDckMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMvRCxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3JDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQy9DLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUMxRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFN0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0QsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNoQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDVixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFBQSxpQkFrSUM7UUFqSUcsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JJLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN0SSxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMs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QUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBRW5ILENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzlHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO29CQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUM5QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDVixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUM5RyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtvQkFDcEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBRWxELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzlHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO29CQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFFbEQsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN0SixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2QsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQTs7O1FBekNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUFqQixDQUFDO1NBMENUO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksUUFBUSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDL0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ3pCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUMzQyxLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3BFLHlDQUF5QztRQUU3QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDakQsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNwQyxLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xELElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ2hELElBQUksUUFBUSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDL0QsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzdELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDdEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUM3RSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUN0RSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUV6RSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDN0QsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDaEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFBO2dCQUN6QixNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDdkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDVixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDakIs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Qzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBN0tSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrdkM1QjtJQUFELGVBQUM7Q0FsdkNELEFBa3ZDQyxDQWx2Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBa3ZDakQ7a0JBbHZDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5nbG9iYWxUaGlzLmNvaW4gPSAxMDAwXHJcbmdsb2JhbFRoaXMuR2FtZSA9IGZhbHNlXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbG9zZVBvcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRPazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUcmFuczogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENyZWFtOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDaGVycnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdyb25nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbU1pbmk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCYW5oOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua0xvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQW5ncnkxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQW5ncnkyOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRm9vdDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEZ1bm55OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kT3Blbk9yZGVyOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaWNrZXRGbHk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERPOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRGYWlsOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTd29vc2g6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLkF1ZGlvQ2xpcF0pXHJcbiAgICBhcnJWb2ljZTogY2MuQXVkaW9DbGlwW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkV2luOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmFEb2M6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICB1aUNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhclRpbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJDb2luOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvSG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpbWV1cDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYW1hemluZzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBub3RpQ29pbjogY2MuQW5pbWF0aW9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub3RpTWlzc2lvbjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmREb2M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy9uZXdcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhck1pc3Npb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhck1pc3Npb24yOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy9idG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1jOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGluZDE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxpc3RQcmVDVXM6IGNjLlByZWZhYltdID0gW11cclxuXHJcbiAgICAvL25ld1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aWNrZXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoZWYxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hlZjI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGVmMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RIYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5WaWRlb1BsYXllcilcclxuICAgIHZpZGVvOiBjYy5WaWRlb1BsYXllciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGN1czE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3VzMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmFpbFVpOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIC8vbmV3XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZpcnN0Q3VzOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByYXk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJheUFuaW06IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk1heTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5NYXkxU3ViOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGl6emFOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwaXp6YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuTWF5MjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9zUGl6emE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaXp6YVRhYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VzYmFuOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYW5pbUNoZWYzOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGluZE1heTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaW5kTWF5MjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBtY0NvbXAgPSBudWxsXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyB0dXRNaXNpb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBhcnJCZXAgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICBhcnJEaWEgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcblxyXG5cclxuICAgIG1heEtoYXkgPSA3XHJcblxyXG4gICAgYXJyRG9udXRwb3MgPSBbXVxyXG5cclxuICAgIGlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgaXNUdXRNZWF0ID0gZmFsc2VcclxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXHJcbiAgICBpc1R1dENsaWNrTWVhdCA9IGZhbHNlXHJcblxyXG5cclxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcclxuICAgIC8vIGlzU3RlcCA9IDBcclxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIG1heEN1c3RvbWVycyA9IDZcclxuICAgIGlkU291bmQgPSBudWxsXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICAvL2l0ZW06IDA6YnVnZXIsIDE6IGtlbSAyOmRvbnV0IDM6a2hvYWl0YXkgNDpwaG8gNTogcHVkZGluZyA2OiB0cmEgIDc6YmFuaG1pIDg6Y29jb251dFxyXG4gICAgcmF5WTogbnVtYmVyW10gPSBbMTIwLCAwLCAtMTIwXTsgICAvLyB24buLIHRyw60gWSBj4bunYSAzIHJheVxyXG4gICAgc3Bhd25YOiBudW1iZXIgPSA3MDA7ICAgICAgICAgICAgICAvLyB24buLIHRyw60gc3Bhd24gYsOqbiBwaOG6o2lcclxuICAgIGFyckl0ZW0gPSBbW10sIFtdXVxyXG4gICAgYXJyS2hheSA9IFtdXHJcbiAgICBhcnJUYXJnZXRNaXNzaW9uID0gW11cclxuICAgIGFyckN1cyA9IFtdXHJcbiAgICBzZWxsVGFyZ2V0Q3VzID0gbnVsbFxyXG4gICAgc2VsbFRyYXlTbG90ID0gLTFcclxuICAgIGN1c0NvdW50ZXJQb3MgPSBudWxsXHJcbiAgICBjdXNTbG90R2FwID0gNTAwXHJcbiAgICBjdXNFbnRlck9mZnNldCA9IGNjLnYzKDM1MCwgMCwgMClcclxuICAgIGN1c1dhbGtTcGVlZCA9IDQzNy41XHJcbiAgICBjb3VudGVyQ3VzQ291bnQgPSAwXHJcbiAgICBwcmVDdXNJbmRleCA9IDBcclxuICAgIGlzU3RhcnRnYW1lID0gZmFsc2VcclxuICAgIGlzRmlyc3RDbGljayA9IGZhbHNlXHJcbiAgICAvL21pc3Npb25cclxuICAgIG1zVG9tID0gZmFsc2U7XHJcbiAgICBtc0hhbmggPSBmYWxzZTtcclxuICAgIG1zRGF1ID0gZmFsc2U7XHJcbiAgICBtc1RvZnUgPSBmYWxzZVxyXG4gICAgbXNTYXVjZXMgPSBmYWxzZVxyXG4gICAgLy8wOmJhbmggdGh1b25nIDE6Y2hvY29sYXRlIDI6IHN0cmF3YmVycnkgXHJcbiAgICBpZEZ1bm55ID0gbnVsbFxyXG4gICAgbWFnID0gMFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcclxuICAgICAgICBjYy52aWV3LnNldFJlc2l6ZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm1vdmVUaWNrZXQoKVxyXG4gICAgICAgIC8vIH0sIDEuNSlcclxuICAgICAgICAvLyBsZXQgYW5pbUNoZWZ0MSA9IHRoaXMuY2hlZjEuY2hpbGRyZW5bMF1cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGFuaW1DaGVmdDEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJXaW5cIiwgZmFsc2UpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuaWRGdW5ueSA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEZ1bm55LCBmYWxzZSwgMSlcclxuICAgICAgICAvLyB9LCAwLjUpXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRGdW5ueSlcclxuICAgICAgICAvLyAgICAgYW5pbUNoZWZ0MS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuXHJcbiAgICAgICAgLy8gfSwgMilcclxuICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCArIHRoaXMubWFnZnJvbnQsIDEyMClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjUsIHsgem9vbVJhdGlvOiAwLjc1IH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygzMzUyLjM5MyAtIDUwLCAtMTIyOC4yOTIpIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuNSwgeyB6b29tUmF0aW86IDAuNzUgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDMzNTIuMzkzICsgMzAwLCAtMTIyOC4yOTIpIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdEN1cy5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RDdXMuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgfSwgMilcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIGJ0bl9hZGRSYXkoZXZudCkge1xyXG4gICAgICAgIGdsb2JhbFRoaXMuY29pbiAtPSA1MDBcclxuICAgICAgICB0aGlzLmZpcnN0Q3VzLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNywgeyBwb3NpdGlvbjogY2MudjMoMzM1Mi4zOTMgLSA1MCwgLTEyMjguMjkyICsgMTUwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDAuNywgeyBwb3NpdGlvbjogY2MudjMoMzM1Mi4zOTMgKyAzMDAsIC0xMjI4LjI5MiArIDEwMDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRPaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q3VzLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q3VzLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmF5QW5pbS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3UGl6emFGaXJzdCgpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNwYXdQaXp6YSgpXHJcbiAgICAgICAgICAgIH0sIDAuMSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5NYXkxLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5NYXkxLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bk1heTEuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhQm9hcmRcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfSwgMi4yKVxyXG4gICAgICAgIH0sIDAuMylcclxuICAgIH1cclxuICAgIGFyclBpenphID0gW11cclxuICAgIHNwYXdQaXp6YUZpcnN0KCkge1xyXG4gICAgICAgIHRoaXMuc3Bhd1BpenphKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd1BpenphLCAxLCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yYXlBbmltLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBhdXNlKClcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJQaXp6YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJQaXp6YVtpXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wYXVzZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyLjIpXHJcbiAgICB9XHJcbiAgICByZXN1bVBpenphKCkge1xyXG4gICAgICAgIHRoaXMucmF5QW5pbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5yZXN1bWUoKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyUGl6emEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJQaXp6YVtpXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5yZXN1bWUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd1BpenphLCAxLCAyKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yYXlBbmltLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBhdXNlKClcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJQaXp6YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJQaXp6YVtpXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wYXVzZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzLjcpXHJcbiAgICB9XHJcbiAgICByZXN1bVBpenphMigpIHtcclxuICAgICAgICB0aGlzLnJheUFuaW0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucmVzdW1lKClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyclBpenphLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyUGl6emFbaV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucmVzdW1lKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNwYXdQaXp6YSwgMSlcclxuICAgIH1cclxuICAgIHNwYXdQaXp6YSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHBpenphID0gY2MuaW5zdGFudGlhdGUodGhpcy5waXp6YVByZWZhYik7XHJcbiAgICAgICAgcGl6emEucGFyZW50ID0gdGhpcy5waXp6YU5vZGU7XHJcbiAgICAgICAgdGhpcy5hcnJQaXp6YS5wdXNoKHBpenphKVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBsZXQgcGl6emEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpenphUHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgcGl6emEucGFyZW50ID0gdGhpcy5waXp6YU5vZGU7XHJcblxyXG4gICAgICAgIC8vIH0sIDEuNClcclxuICAgIH1cclxuICAgIGlzTWF5MSA9IDBcclxuICAgIGlzUGxheSA9IGZhbHNlXHJcbiAgICBpc0YgPSBmYWxzZVxyXG4gICAgYnRuX3VwZ3JhZGVNYXkxKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWF5MSA+IDEpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc1BsYXkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzUGxheSA9IHRydWVcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRPaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGdsb2JhbFRoaXMuY29pbiAtPSAxMDBcclxuICAgICAgICB0aGlzLmJ0bk1heTEuc2NhbGUgPSAxLjU0XHJcbiAgICAgICAgdGhpcy5idG5NYXkxU3ViLnNjYWxlID0gMy4xXHJcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmNoZWYyLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLmlzTWF5MSsrXHJcbiAgICAgICAgbGV0IGZ4ID0gdGhpcy5idG5NYXkxLmdldENoaWxkQnlOYW1lKFwiZnhfdXBncmFkZVwiKVxyXG4gICAgICAgIGZ4LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuTWF5MS5jaGlsZHJlblswXSkudG8oMC4yLCB7IHNjYWxlOiAxICogMC41IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bk1heTEuY2hpbGRyZW5bMF0uY2hpbGRyZW5bdGhpcy5pc01heTEgLSAxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idG5NYXkxLmNoaWxkcmVuWzBdLmNoaWxkcmVuW3RoaXMuaXNNYXkxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxheSA9IGZhbHNlXHJcbiAgICAgICAgfSkudG8oMC4yLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bk1heTFTdWIpLnRvKDAuMiwgeyBzY2FsZTogMy4xICogMC41IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bk1heTFTdWIuY2hpbGRyZW5bdGhpcy5pc01heTFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bk1heTFTdWIuY2hpbGRyZW5bdGhpcy5pc01heTEgKyAxXS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9KS50bygwLjIsIHsgc2NhbGU6IDMuMSB9KS5zdGFydCgpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNYXkxID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5NYXkxLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAvLyB0aGlzLmJ0bk1heTEuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYnRuTWF5MS5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bk1heTEuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhQm9hcmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5idG5NYXkxLmdldENvbXBvbmVudChcImxvbmF1MVwiKS5pc1N1Y2Nlc3MgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaGluZE1heTEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNGID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldpblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmFyclZvaWNlWzBdLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWYyLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNoZWYyKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDMwNjYuNzc2LCAtMjkxLjY3OSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiQmFjay1JZGxlXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWYyLnNjYWxlWCA9IC0xXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVzdW1QaXp6YSgpXHJcbiAgICAgICAgICAgIHRoaXMubW92ZVNjZW5lMigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBtb3ZlU2NlbmUyKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMS4yLCB7IHBvc2l0aW9uOiBjYy52MygzMzUyLjM5MyAtIDIwMDAsIC0xMjI4LjI5MiArIDE1MDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkudG8oMS4yLCB7IHBvc2l0aW9uOiBjYy52MygzMzUyLjM5MyAtIDE3MDAsIC0xMjI4LjI5MiArIDEwMDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgfSwgMylcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTWF5Mi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmJ0bk1heTIuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5idG5NYXkyLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYUJvYXJkXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCA0LjQpXHJcbiAgICB9XHJcbiAgICBpc01heTIgPSAwXHJcbiAgICBpc1BsYXkyID0gZmFsc2VcclxuICAgIGlzTW94ID0gZmFsc2VcclxuICAgIGJ0bl91cGdyYWRlTG9OdW9uZygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01heTIgPiAxKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5MikgcmV0dXJuO1xyXG4gICAgICAgIGdsb2JhbFRoaXMuY29pbiAtPSAxMDBcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRPaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuaXNQbGF5MiA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bk1heTIuc2NhbGUgPSAyLjlcclxuICAgICAgICBsZXQgZnggPSB0aGlzLmJ0bk1heTIuZ2V0Q2hpbGRCeU5hbWUoXCJmeF91cGdyYWRlXCIpXHJcbiAgICAgICAgZnguZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgdGhpcy5pc01heTIrK1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bk1heTIuY2hpbGRyZW5bMF0pLnRvKDAuMiwgeyBzY2FsZTogMSAqIDAuNSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idG5NYXkyLmNoaWxkcmVuWzBdLmNoaWxkcmVuW3RoaXMuaXNNYXkyXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idG5NYXkyLmNoaWxkcmVuWzBdLmNoaWxkcmVuW3RoaXMuaXNNYXkyICsgMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1BsYXkyID0gZmFsc2VcclxuICAgICAgICB9KS50bygwLjIsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc01heTIgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmhpbmRNYXkyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ggPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUNoZWYzLnNldEFuaW1hdGlvbigwLCBcIldpblwiLCB0cnVlKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYXJyVm9pY2VbMV0sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLmJ0bk1heTIuZ2V0Q29tcG9uZW50KFwiZGlhUGhvbWFpXCIpLmlzU3VjY2VzcyA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnRuTWF5Mi5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5idG5NYXkyLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5tb3ZlU2NlbmUyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVNjZW5lMygpXHJcbiAgICAgICAgICAgIH0sIDMpXHJcbiAgICAgICAgICAgIHRoaXMucmVzdW1QaXp6YTIoKVxyXG4gICAgICAgICAgICB0aGlzLmJ0bk1heTIuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhQm9hcmRcIikuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1DaGVmMy5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVTY2VuZTMoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoMzM1Mi4zOTMgLSAyMDAwLCAtMTIyOC4yOTIpIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygyLCB7IHBvc2l0aW9uOiBjYy52MygzMzUyLjM5MyAtIDE3NTAsIC0xMjI4LjI5MikgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICBsZXQgYW5pbSA9IHRoaXMuY2hlZjMuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmlkRm9vdCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEZvb3QsIGZhbHNlLCAwLjUpXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hlZjMpLnRvKDIuNSwgeyBwb3NpdGlvbjogY2MudjMoMTEzMS4yNjksIC0xNTM5LjEyNSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMSwgXCJMLWFybVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkRm9vdClcclxuICAgICAgICAgICAgdGhpcy5jaGVmMy5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGl6emEoKVxyXG5cclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgfVxyXG4gICAgZ2V0UGl6emEoKSB7XHJcbiAgICAgICAgbGV0IHBhbGV0ZSA9IHRoaXMuY2hlZjMuY2hpbGRyZW5bMV1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcGl6emEgPSB0aGlzLnBpenphVGFibGUuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGl6emEuekluZGV4ID0gM1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3dvb3NoLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuY2hlZjMuY2hpbGRyZW5bMV0uY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY2hlZjMuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0ucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICBwb3NFbmQgPSB0aGlzLnBpenphVGFibGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocGl6emEpLnRvKDAuNSwgeyBwb3NpdGlvbjogcG9zRW5kIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBpenphLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhbGV0ZS5jaGlsZHJlbltpICsgMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAwLjEgKiBpKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWYzLnNjYWxlID0gMVxyXG4gICAgICAgICAgICBsZXQgYW5pbSA9IHRoaXMuY2hlZjMuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWRGb290ID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRm9vdCwgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoMzM1Mi4zOTMgLSAyMDAwIC0gMjAwMCwgLTEyMjguMjkyKSB9KS50bygyLCB7IHBvc2l0aW9uOiBjYy52MygzMzUyLjM5MyAtIDIwMDAgLSAyMDAwLCAtMTIyOC4yOTIgKyAxMDAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDIsIHsgcG9zaXRpb246IGNjLnYzKDMzNTIuMzkzIC0gMjAwMCAtIDIwMDAsIC0xMjI4LjI5MikgfSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoMzM1Mi4zOTMgLSAyMDAwIC0gMjAwMCwgLTEyMjguMjkyICsgMTAwMCkgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaGVmMykudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoLTQ2MyArIDIwMCwgLTE1NTkpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXNiYW4uY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcGFsZXRlLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c2Jhbi5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c2Jhbi5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDUwMFxyXG4gICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkRm9vdClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlZjMuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgfSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoLTIzNSwgLTYxNSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWYzLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzYmFuLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzYmFuLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hcnJWb2ljZVszXSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gMTAwMFxyXG5cclxuICAgICAgICAgICAgICAgIHBhbGV0ZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltQ2hlZjMuc2V0QW5pbWF0aW9uKDAsIFwiV2luXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1DaGVmMy5zZXRBbmltYXRpb24oMSwgXCJXaW5cIiwgdHJ1ZSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcylcclxuICAgICAgICB9LCAwLjcpXHJcbiAgICB9XHJcbiAgICBpc0NvdW50cGl6emEgPSAyXHJcbiAgICBhZGRQaXp6YShwaXp6YSkge1xyXG4gICAgICAgIHBpenphLnBhcmVudCA9IHRoaXMucGl6emFUYWJsZVxyXG4gICAgICAgIGNjLnR3ZWVuKHBpenphKS50bygwLjQsIHsgcG9zaXRpb246IHRoaXMucG9zUGl6emEuY2hpbGRyZW5bdGhpcy5pc0NvdW50cGl6emFdLnBvc2l0aW9uIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmlzQ291bnRwaXp6YSsrXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudHBpenphID4gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnRwaXp6YSA9IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0hhbmQgPSBudWxsXHJcbiAgICBpc1Nob3dNZW51ID0gZmFsc2VcclxuICAgIG1vdmVUaWNrZXQoKSB7XHJcbiAgICAgICAgdGhpcy50aWNrZXQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRpY2tldEZseSwgZmFsc2UsIDAuMylcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygxNzUwICsgdGhpcy5tYWcsIC0yMDAuMjMyKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy50aWNrZXQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInRpY2tldF9zaG93XCIpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygxLCB7IHpvb21SYXRpbzogMSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKDIxMDAsIC0yMDAuMjMyKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy50aWNrZXQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInRpY2tldF9zaG93XCIpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jKS50bygxLCB7IHpvb21SYXRpbzogMS42IH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIHNob3dUaWNrZXQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZE9wZW5PcmRlciwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3dNZW51ID0gdHJ1ZVxyXG4gICAgICAgIH0sIDAuNClcclxuICAgIH1cclxuICAgIGFyclRvbSA9IFtdO1xyXG4gICAgYXJySGFuaCA9IFtdO1xyXG4gICAgYXJyRGF1ID0gW107XHJcbiAgICBhcnJUb2Z1ID0gW107XHJcbiAgICBhcnJTYXVjZSA9IG51bGxcclxuICAgIGJ0bl90b20oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZClcclxuXHJcbiAgICAgICAgdGhpcy5tc1RvbSA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0blRvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYyKC03NSwgLTI0KSwgY2MudjIoLTY0LCAxOSksIGNjLnYyKC00NCwgLTMpXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVUb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVRvbSk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucG9zaXRpb24gPSBjYy52MygtMzM0LCAtMjkpO1xyXG4gICAgICAgICAgICAgICAgcHJlVG9tLnBhcmVudCA9IHRoaXMucGxhdGVMaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyclRvbS5wdXNoKHByZVRvbSlcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHByZVRvbSkuYmV6aWVyVG8oMC41LCBjYy52MigtMzM0LCAtMjkpLCBjYy52MigtMzM0LCAtMjkgKyAzMDApLCBhcnJQb3NbaV0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgaSAqIDAuMTUpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKClcclxuICAgICAgICB9LCAwLjUgKyAwLjE1ICogMylcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tIaW5kKClcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG4gICAgYnRuX2hhbmgoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmQpXHJcblxyXG4gICAgICAgIHRoaXMubXNIYW5oID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0bkhhbmguZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdFRpY2suY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYyKDYxLCA0MSksIGNjLnYyKDgwLCAxMCksIGNjLnYyKDM3LCAxMyldXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZVRvbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlSGFuaCk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucG9zaXRpb24gPSBjYy52MygyNSwgLTI1MSk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucGFyZW50ID0gdGhpcy5wbGF0ZUxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJySGFuaC5wdXNoKHByZVRvbSlcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwcmVUb20pLmJlemllclRvKDAuNSwgY2MudjIoMjUsIC0yNTEpLCBjYy52MigyNSwgLTI1MSArIDM1MCksIGFyclBvc1tpXSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCBpICogMC4xNSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoKVxyXG4gICAgICAgIH0sIDAuNSArIDAuMTUgKiAzKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0hpbmQoKVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBidG5fZGF1UGh1KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2hvd01lbnUgPT0gZmFsc2UpIHJldHVyblxyXG5cclxuICAgICAgICB0aGlzLm1zVG9mdSA9IHRydWU7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZClcclxuXHJcbiAgICAgICAgdGhpcy5idG5EYXVQaHUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdFRpY2suY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYyKDI2LCAtMzIpLCBjYy52MigzLCAtNTkpLCBjYy52Mig0NywgLTU1KV1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlVG9tID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVUb2Z1KTtcclxuICAgICAgICAgICAgICAgIHByZVRvbS5wb3NpdGlvbiA9IGNjLnYzKDE4MCwgLTI1Nik7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucGFyZW50ID0gdGhpcy5wbGF0ZUxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyVG9mdS5wdXNoKHByZVRvbSlcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwcmVUb20pLmJlemllclRvKDAuNSwgY2MudjIoMTgwLCAtMjU2KSwgY2MudjIoMTgwLCAtMjU2ICsgMzUwKSwgYXJyUG9zW2ldKS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIGkgKiAwLjE1KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcygpXHJcbiAgICAgICAgfSwgMC41ICsgMC4xNSAqIDMpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSGluZCgpXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGJ0bl9kYXUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TWVudSA9PSBmYWxzZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmQpXHJcblxyXG4gICAgICAgIHRoaXMubXNEYXUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5idG5EYXUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bM10uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmxpc3RUaWNrLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYyKC01LCAtOSksIGNjLnYyKC04LCAxMSksIGNjLnYyKC0yMSwgMTEpXVxyXG4gICAgICAgIGxldCBhcnJBbmdsZSA9IFs0NSwgNTUsIDczXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVUb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhdSk7XHJcbiAgICAgICAgICAgICAgICBwcmVUb20ucG9zaXRpb24gPSBjYy52MygtMTM0LCAtMjQ1KTtcclxuICAgICAgICAgICAgICAgIHByZVRvbS5wYXJlbnQgPSB0aGlzLnBsYXRlTGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJEYXUucHVzaChwcmVUb20pXHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocHJlVG9tKS5iZXppZXJUbygwLjUsIGNjLnYyKC0xMzQsIC0yNDUpLCBjYy52MigtMTM0LCAtMjQ1ICsgMzUwKSwgYXJyUG9zW2ldKS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwcmVUb20pLnRvKDAuNSwgeyBhbmdsZTogYXJyQW5nbGVbaV0gfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCBpICogMC4xNSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoKVxyXG4gICAgICAgIH0sIDAuNSArIDAuMTUgKiAzKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0hpbmQoKVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcbiAgICBpc1NhdWNlRmluYWwgPSBmYWxzZVxyXG4gICAgYnRuX3NhdWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2hvd01lbnUgPT0gZmFsc2UpIHJldHVyblxyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kKVxyXG4gICAgICAgIHRoaXMuYnRuU2F1Y2UuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52MigzMDAsIDIpXHJcbiAgICAgICAgbGV0IGVuZHBvcyA9IGNjLnYyKDEuNSwgNjcpO1xyXG4gICAgICAgIGxldCBwcmVTYXVjZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlU2F1Y2UpXHJcbiAgICAgICAgcHJlU2F1Y2UucG9zaXRpb24gPSBjYy52MyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuICAgICAgICBwcmVTYXVjZS5wYXJlbnQgPSB0aGlzLnBsYXRlTGlzdFxyXG4gICAgICAgIHRoaXMuYXJyU2F1Y2UgPSBwcmVTYXVjZTtcclxuICAgICAgICBjYy50d2VlbihwcmVTYXVjZSkuYmV6aWVyVG8oMC41LCBzdGFydFBvcywgY2MudjIoc3RhcnRQb3MueCwgc3RhcnRQb3MueSArIDMwMCksIGVuZHBvcykuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMubXNTYXVjZXMgPSB0cnVlXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1NhdWNlRmluYWwgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKClcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSGluZCgpXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGNoZWNrU3VjY2VzcygpIHtcclxuICAgICAgICBpZiAodGhpcy5tc0RhdSA9PSB0cnVlICYmIHRoaXMubXNIYW5oID09IHRydWUgJiYgdGhpcy5tc1NhdWNlcyA9PSB0cnVlICYmIHRoaXMubXNUb2Z1ID09IHRydWUgJiYgdGhpcy5tc1RvbSA9PSB0cnVlICYmIHRoaXMuaXNTYXVjZUZpbmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhdGUuZ2V0Q2hpbGRCeU5hbWUoXCJwaGFvaG9hXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNlbGxEb25lLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgfSwgMC41KVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0hpbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXNUb2Z1ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1zSGFuaCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tc0RhdSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tc1NhdWNlcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlkRm9vdCA9IG51bGxcclxuICAgIGJ0bl9wbGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnBsYXRlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls1XS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIGxldCBjaGVmQU5pbSA9IHRoaXMuY2hlZjIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigwLCBcIkwtYXJtXCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy5wbGF0ZS5wYXJlbnQgPSB0aGlzLmNoZWYyO1xyXG4gICAgICAgIHRoaXMucGxhdGUucG9zaXRpb24gPSBjYy52MygyMTcsIDQ4MilcclxuICAgICAgICB0aGlzLnBsYXRlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRm9vdCwgZmFsc2UsIDAuNSlcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDEyMzksIDM0NikgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTIzOSwgMzQ2KSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hlZjIpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTIzMSwgLTIxOSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZEZvb3QpXHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNJdGVtKClcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgY2hlZkFOaW0uc2V0QW5pbWF0aW9uKDEsIFwiV2Fsa1wiLCB0cnVlKTtcclxuXHJcbiAgICB9XHJcbiAgICB0cmFuc0l0ZW0oKSB7XHJcbiAgICAgICAgbGV0IGFyclBvc0RhdSA9IFt0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuWzBdLnBvc2l0aW9uLCB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuWzFdLnBvc2l0aW9uLCB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuWzJdLnBvc2l0aW9uXVxyXG4gICAgICAgIGxldCBhcnJQb3NUb2Z1ID0gW3RoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bNF0ucG9zaXRpb24sIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bM10ucG9zaXRpb24sIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bNV0ucG9zaXRpb25dXHJcbiAgICAgICAgbGV0IGFyclBvc0hhbmggPSBbdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbls2XS5wb3NpdGlvbiwgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbls3XS5wb3NpdGlvbiwgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbls4XS5wb3NpdGlvbl1cclxuICAgICAgICBsZXQgYXJyUG9zVG9tID0gW3RoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bOV0ucG9zaXRpb24sIHRoaXMubGlzdEl0ZW1Ob2kuY2hpbGRyZW5bMTBdLnBvc2l0aW9uLCB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuWzExXS5wb3NpdGlvbl1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gdGhpcy5hcnJUb21baV07XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSB0aGlzLmFyckRhdVtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtMyA9IHRoaXMuYXJySGFuaFtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtNCA9IHRoaXMuYXJyVG9mdVtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MxID0gYXJyUG9zVG9tW2ldO1xyXG4gICAgICAgICAgICAgICAgcG9zMSA9IHRoaXMubGlzdEl0ZW1Ob2kuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczEpXHJcbiAgICAgICAgICAgICAgICBwb3MxID0gaXRlbTEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczIgPSBhcnJQb3NUb2Z1W2ldO1xyXG4gICAgICAgICAgICAgICAgcG9zMiA9IHRoaXMubGlzdEl0ZW1Ob2kuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczIpXHJcbiAgICAgICAgICAgICAgICBwb3MyID0gaXRlbTQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczMgPSBhcnJQb3NIYW5oW2ldO1xyXG4gICAgICAgICAgICAgICAgcG9zMyA9IHRoaXMubGlzdEl0ZW1Ob2kuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczMpXHJcbiAgICAgICAgICAgICAgICBwb3MzID0gaXRlbTMucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczQgPSBhcnJQb3NEYXVbaV07XHJcbiAgICAgICAgICAgICAgICBwb3M0ID0gdGhpcy5saXN0SXRlbU5vaS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zNClcclxuICAgICAgICAgICAgICAgIHBvczQgPSBpdGVtMi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zNCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtMSkuYmV6aWVyVG8oMC42LCBjYy52MihpdGVtMS54LCBpdGVtMS55KSwgY2MudjIoaXRlbTEueCwgaXRlbTEueSArIDQwMCksIGNjLnYzKHBvczEueCwgcG9zMS55KSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuW2kgKyA5XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbltpICsgOV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0pLmRlbGF5KDAuNCkudG8oMi41LCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaXRlbTIpLmJlemllclRvKDAuNiwgY2MudjIoaXRlbTIueCwgaXRlbTIueSksIGNjLnYyKGl0ZW0yLngsIGl0ZW0yLnkgKyA0MDApLCBjYy52Myhwb3M0LngsIHBvczQueSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtMykuYmV6aWVyVG8oMC42LCBjYy52MihpdGVtMi54LCBpdGVtMi55KSwgY2MudjIoaXRlbTIueCwgaXRlbTIueSArIDQwMCksIGNjLnYzKHBvczMueCwgcG9zMy55KSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RJdGVtTm9pLmNoaWxkcmVuW2kgKyA2XS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaXRlbTQpLmJlemllclRvKDAuNiwgY2MudjIoaXRlbTIueCwgaXRlbTIueSksIGNjLnYyKGl0ZW0yLngsIGl0ZW0yLnkgKyA0MDApLCBjYy52Myhwb3MyLngsIHBvczIueSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW00LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SXRlbU5vaS5jaGlsZHJlbltpICsgM10uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYXJyU2F1Y2UpLmJlemllclRvKDAuNiwgY2MudjIodGhpcy5hcnJTYXVjZS54LCB0aGlzLmFyclNhdWNlLnkpLCBjYy52Mih0aGlzLmFyclNhdWNlLngsIHRoaXMuYXJyU2F1Y2UueSArIDQwMCksIGNjLnYzKHBvczEueCwgcG9zMS55KSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJTYXVjZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAwLjEgKiBpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjaGVmQU5pbSA9IHRoaXMuY2hlZjIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICB0aGlzLnBsYXRlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9pU3VwLmdldENvbXBvbmVudChcImNvb2tpbmdcIikuc2V0T24oKVxyXG4gICAgICAgICAgICB0aGlzLmlzU091bmROYXUgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDcmVhbU1pbmksIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bixmYWxzZSwxKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLmN1czEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlzU091bmROYXUpXHJcbiAgICAgICAgICAgIHRoaXMuY2hlZjIuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF0ZTJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHBsYXRlMiA9IHRoaXMuY2hlZjIuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF0ZTJcIilcclxuICAgICAgICAgICAgbGV0IGNoZWZBTmltID0gdGhpcy5jaGVmMi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigxLCBcIldhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigwLCBcIkwtYXJtXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuaWRGb290ID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRm9vdCwgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgdGhpcy50aWNrZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50aWNrZXQpLnRvKDAuMywgeyBzY2FsZTogMi4xIH0pLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkuYnkoMSwgeyBwb3NpdGlvbjogY2MudjMoMCwgLTYwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MygwLCAtNjAwKSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNoZWYyKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygxMzkyLCAtNTkyKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoZWZBTmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjaGVmQU5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkRm9vdClcclxuICAgICAgICAgICAgICAgIHBsYXRlMi5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIHBsYXRlMi5wb3NpdGlvbiA9IGNjLnYzKDEyMzYsIC0zODIpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4ocGxhdGUyKS5kZWxheSgxLjEpLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoMTIzNiwgLTU1MCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW8ucGxheSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWYzLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRE8sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgfSwgMy41KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5vZGUuc2NhbGUgPSB0aGlzLmlzU2NhbGVWaWRlb1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy52aWRlby5ub2RlLnBvc2l0aW9uID0gY2MudjMoMTcwMCwgLTMwMClcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW8ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDE3MDAsIC0zMDApXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy52aWRlby5ub2RlLnBvc2l0aW9uPVxyXG4gICAgICAgICAgICB9LCA0KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5vZGUucG9zaXRpb24gPSBjYy52MygtOTAwICsgdGhpcy5tYWdWaWRlbywgLTEwMDApXHJcblxyXG4gICAgICAgICAgICB9LCA1IC0gMC4zKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDdXMyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygtNDAsIDMwMCAtIDEwMCwgMClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhRG9jLm5vZGUucG9zaXRpb24gPSBjYy52MygtNDAsIDMwMCAtIDEwMCwgMClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhRG9jLnpvb21SYXRpbyA9IDEuNFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhaWxVaS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRmFpbCwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsVWkuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMTYwICsgNDAgKyAyNTAsIDMwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0xNjAgKyA0MCArIDI1MCwgMzAwKSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlZjEuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJGYWlsXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQW5ncnkyLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5rTG9zZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRW5kR2FtZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB9LCAzKVxyXG4gICAgICAgICAgICAgICAgfSwgMS4zKVxyXG5cclxuICAgICAgICAgICAgfSwgNS44KVxyXG5cclxuICAgICAgICB9LCAzKVxyXG4gICAgfVxyXG4gICAgaXNTT3VuZE5hdSA9IG51bGxcclxuXHJcblxyXG4gICAgcmVwbGFjZUN1c3RvbWVyKGRlcGFydGVkQ3VzOiBjYy5Ob2RlLCBjb3VudGVyUG9zOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoZGVwYXJ0ZWRDdXMpXHJcblxyXG4gICAgICAgIGxldCBuZXdDdXMgPSB0aGlzLnNwYXduQ3VzdG9tZXJGcm9tUHJlZmFiKClcclxuICAgICAgICBpZiAoIW5ld0N1cykgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5idG5DYWtlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnRuUG90YXRvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBuZXdDdXNDb21wID0gbmV3Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIilcclxuICAgICAgICBpZiAobmV3Q3VzQ29tcCkge1xyXG4gICAgICAgICAgICBuZXdDdXNDb21wLmdhbWVQbGF5ID0gdGhpc1xyXG4gICAgICAgICAgICBuZXdDdXNDb21wLmlzUmVhZHlGb3JTZWxsID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGxUYXJnZXRDdXMgPT09IGRlcGFydGVkQ3VzIHx8IHRoaXMuaXNUYXJnZXRDdXMgPT09IGRlcGFydGVkQ3VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsbFRhcmdldEN1cyA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSAtMVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5tY0NvbXApIHtcclxuICAgICAgICAgICAgdGhpcy5tY0NvbXAudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbaWR4XSA9IG5ld0N1c1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2gobmV3Q3VzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZXBhcnRlZEN1cy5kZXN0cm95KClcclxuXHJcbiAgICAgICAgbGV0IHNwYXduUG9zID0gY291bnRlclBvcy5jbG9uZSgpLmFkZCh0aGlzLmN1c0VudGVyT2Zmc2V0KVxyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IHNwYXduUG9zLnN1Yihjb3VudGVyUG9zKS5tYWcoKVxyXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gdGhpcy5jdXNXYWxrU3BlZWRcclxuXHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5ld0N1cylcclxuICAgICAgICBuZXdDdXMucG9zaXRpb24gPSBzcGF3blBvc1xyXG4gICAgICAgIG5ld0N1cy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgbmV3Q3VzQ29tcC5tb3ZlKClcclxuICAgICAgICBjYy50d2VlbihuZXdDdXMpXHJcbiAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogY291bnRlclBvcyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXdDdXNDb21wLnNob3dNaXNzaW9uKClcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBuZXdDdXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuICAgIG9uSGluZCgpIHtcclxuICAgICAgICB0aGlzLmhpbmQxLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Q3VzUXVldWUoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbaV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbnRlckN1c3RvbWVycygxLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RDbGljaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNoaWNrZW4uZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMpXHJcbiAgICB9XHJcbiAgICBpc01vdmluZyA9IGZhbHNlXHJcbiAgICBpc0Zpc3QgPSBmYWxzZVxyXG4gICAgaXNGaXN0Q2xpY2tDaGlja2VuID0gZmFsc2VcclxuXHJcbiAgICBpc01jQnVzeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc01vdmluZyB8fCAodGhpcy5tY0NvbXAgJiYgdGhpcy5tY0NvbXAuaXNXYWxraW5nKCkpXHJcbiAgICB9XHJcblxyXG4gICAgYnRuX2NoaWNrZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNY0J1c3koKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Zpc3RDbGlja0NoaWNrZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Zpc3RDbGlja0NoaWNrZW4gPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYmFyTWlzc2lvbi5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmNvdW50RG93bigpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5NYWNoaW5lLmdldENoaWxkQnlOYW1lKFwiaGluZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuY2FuUGlja01vcmVDaGlja2VuKCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuQ2hpY2tlbi5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvQ2hpY2tlbigpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bl9tYXlDaGllbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLm1jQ29tcC5jYW5Eb0FueU1hY2hpbmVBY3Rpb24oKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuTWFjaGluZS5nZXRDaGlsZEJ5TmFtZShcImhpbmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmJ0bk1hY2hpbmUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5tY0NvbXAubW92ZVRvTWFjaGluZSgpXHJcbiAgICB9XHJcbiAgICBidG5fY29sYSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNvY2FDb21wID0gdGhpcy5idG5Db2NhLmdldENvbXBvbmVudChcImNvY2FcIilcclxuICAgICAgICBsZXQgY2FuQ29vayA9ICFjb2NhQ29tcC5pc0J1c3koKVxyXG4gICAgICAgIGxldCBjYW5QaWNrdXAgPSBjb2NhQ29tcC5pc0NvY2EgJiYgdGhpcy5tY0NvbXAuY2FuUGlja0l0ZW1UeXBlKFwiY29jYVwiKVxyXG4gICAgICAgIGlmICghY2FuQ29vayAmJiAhY2FuUGlja3VwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9Db2NhKClcclxuICAgIH1cclxuICAgIC8vIGJ0bl9zYXVjZSgpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLm1jQ29tcC5oYXNBbnlJdGVtKCkgfHwgdGhpcy5tY0NvbXAuZmluZENvb2tlZFRyYXlTbG90KCkgPCAwKSByZXR1cm47XHJcbiAgICAvLyAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgIC8vICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9TYXVjZSgpXHJcbiAgICAvLyB9XHJcbiAgICBidG5fY2FrZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzTW92aW5nKVxyXG4gICAgICAgIGlmICh0aGlzLmlzTWNCdXN5KCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubWNDb21wLm1vdmVUb0Nha2UoKVxyXG4gICAgfVxyXG4gICAgYnRuX3RvbWF0bygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9Ub21hdG8oKVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VzVHJheUluZGV4KGN1c05vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXNOb2RlKVxyXG4gICAgfVxyXG4gICAgY2hlY2tTZWxsKHRhcmdldEN1cz86IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIHNlbGwgTWFpblwiKVxyXG4gICAgICAgIGxldCBjdXMgPSB0YXJnZXRDdXMgfHwgdGhpcy5zZWxsVGFyZ2V0Q3VzIHx8IHRoaXMuaXNUYXJnZXRDdXMgfHwgdGhpcy5hcnJDdXNbMF1cclxuICAgICAgICBpZiAodGhpcy5pc01jQnVzeSgpIHx8ICFjdXMpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgY3VzQ29tcC5pc1N1Y2Nlc3MgfHwgIWN1c0NvbXAuaXNSZWFkeUZvclNlbGwpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCB0cmF5SWR4ID0gdGhpcy5tY0NvbXAuZmluZFRyYXlGb3JDdXN0b21lcihjdXNDb21wKVxyXG4gICAgICAgIGlmICghdGhpcy5tY0NvbXAuaGFzQW55SXRlbSgpIHx8IHRyYXlJZHggPCAwKSByZXR1cm4gZmFsc2VcclxuICAgICAgICB0aGlzLnNlbGxUYXJnZXRDdXMgPSBjdXNcclxuICAgICAgICB0aGlzLnNlbGxUcmF5U2xvdCA9IHRyYXlJZHhcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzID0gY3VzXHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm1jQ29tcC5tb3ZlVG9CdXkoKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZVNlbGxBdENvdW50ZXIoKSB7XHJcbiAgICAgICAgbGV0IGN1cyA9IHRoaXMuc2VsbFRhcmdldEN1cyB8fCB0aGlzLmlzVGFyZ2V0Q3VzIHx8IHRoaXMuYXJyQ3VzWzBdXHJcbiAgICAgICAgaWYgKCFjdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8IGN1c0NvbXAuaXNTdWNjZXNzIHx8ICFjdXNDb21wLmlzUmVhZHlGb3JTZWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNlbGxUcmF5U2xvdCA9IC0xXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXNDb21wLnZhbGlkYXRlU2VsbCgpXHJcbiAgICB9XHJcbiAgICBuZXh0Q3VzKHZhbHVlOiBib29sZWFuLCBkZXBhcnRlZEN1cz86IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoZGVwYXJ0ZWRDdXMpIHtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoZGVwYXJ0ZWRDdXMpXHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkgdGhpcy5hcnJDdXMuc3BsaWNlKGlkeCwgMSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXJyQ3VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMuc3BsaWNlKDAsIDEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0bkNha2UuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuUG90YXRvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvdW50Q3VzID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJhck1pc3Npb24yKS5ieSgwLjQsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIDIwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNlbGxUYXJnZXRDdXMgPSBudWxsXHJcbiAgICAgICAgdGhpcy5zZWxsVHJheVNsb3QgPSAtMVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA+PSB0aGlzLm1heEN1c3RvbWVycyB8fCB0aGlzLmFyckN1cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgd2FzR3JvdXBBdENvdW50ZXIgPSB0aGlzLmNvdW50ZXJDdXNDb3VudCA+IDFcclxuICAgICAgICBpZiAod2FzR3JvdXBBdENvdW50ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyQ3VzQ291bnQtLVxyXG4gICAgICAgICAgICB0aGlzLm1jQ29tcC5hZnRlckN1c3RvbWVyTGVmdCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGxcclxuICAgICAgICB0aGlzLm1jQ29tcC5yZXNldFRvU3RhcnQoKVxyXG5cclxuICAgICAgICBsZXQgZW50ZXJDb3VudCA9IHRoaXMuZ2V0RW50ZXJDb3VudEZvcldhdmUoKVxyXG4gICAgICAgIHRoaXMuZW50ZXJDdXN0b21lcnMoZW50ZXJDb3VudClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pZFNvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuNSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldEdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1ncmF5LXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuXHJcbiAgICB9XHJcbiAgICBvZmZHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW5kR2FtZSA9IGZhbHNlXHJcbiAgICBvbkVuZEdhbWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IHRydWVcclxuICAgICAgICAvLyB0aGlzLndhcm5pbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5iYXJNaXNzaW9uLmdldENvbXBvbmVudChcImJhclRpbWVcIikuZW5kR2FtZSgpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuYW1hemluZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua2luZywgZmFsc2UsIDAuNSlcclxuXHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuXHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5rTG9zZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmVuZENhcmRXaW4pIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5iYXJNaXNzaW9uLmdldENvbXBvbmVudChcImJhclRpbWVcIikuZW5kR2FtZSgpXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYXJyQ3VzKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjaGlsZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIjYuYW5ncnlcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZClcclxuICAgICAgICAgICAgLy8gdGhpcy50aW1ldXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtpbmcsIGZhbHNlLCAwLjUpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgMSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICBpc0RvYyA9IGZhbHNlXHJcbiAgICAvLyB1cGRhdGUoZHQpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxyXG4gICAgLy8gICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgIC8vICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHVwZGF0ZVJlc3BvbnNpdmUoKSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFyclBvc01lbnVOZ2FuZyA9IFtjYy52MygtMzkxLCAtMTAyKSwgY2MudjMoMzc1LCAtMTEyKSwgY2MudjMoMTE0LCAtMTIwKSwgY2MudjMoLTQwOSwgLTI4NCksIGNjLnYzKC0xNTgsIC0yOTYpLCBjYy52MygxMTgsIC0yODApLCBjYy52MygzOTAsIC0yOTYpLCBjYy52MygtMTM3LCAtMTE2KV07XHJcbiAgICBhcnJQb3NEb2MgPSBbY2MudjMoMjYsIC0zMzcpLCBjYy52MygzMzYsIC0xMTIpLCBjYy52MygxNS41LCAtMTIxKSwgY2MudjMoLTE3MCwgLTUyNS43KSwgY2MudjMoLTMwMCwgLTM1MiksIGNjLnYzKDE4Ni45NiwgLTUxMiksIGNjLnYzKDM1NSwgLTMzNSksIGNjLnYzKC0yOTIsIC0xMTYpXVxyXG4gICAgbWFnZnJvbnQgPSAwXHJcbiAgICBtYWdWaWRlbyA9IDBcclxuICAgIGlzU2NhbGVWaWRlbyA9IDFcclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5iYXJDb2luLnNjYWxlID0gKGxvZ2ljKSA/IDIuNSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAobG9naWMpID8gMjEwIDogMTQwXHJcbiAgICAgICAgLy8gdGhpcy5waGFvSG9hLnNjYWxlID0gKGxvZ2ljKSA/IDkgOiA1XHJcbiAgICAgICAgLy8gdGhpcy5ndWlsZC5zY2FsZSA9IChsb2dpYykgPyAyIDogMS4yXHJcbiAgICAgICAgLy8gdGhpcy5ndWlsZC5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtOTAwKSA6IGNjLnYzKDAsIC0zNjApXHJcblxyXG4gICAgICAgIC8vIHRoaXMudGltZXVwLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcclxuICAgICAgICAvLyB0aGlzLmFtYXppbmcuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuNTdcclxuICAgICAgICAvLyB0aGlzLm5vdGlNaXNzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxXHJcbiAgICAgICAgLy8gdGhpcy5iYXJNaXNzaW9uMi5zY2FsZSA9IChsb2dpYykgPyAyIDogMVxyXG4gICAgICAgIHRoaXMubWFnVmlkZW8gPSAwXHJcbiAgICAgICAgdGhpcy5iYXJNaXNzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKC0xNjAsIDMwMCwgMCkgOiBjYy52MygwLCAxMjAsIDApXHJcbiAgICAgICAgdGhpcy5iYXJNaXNzaW9uLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDUwXHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUuYWN0aXZlID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIHRoaXMuY2FtZXJhRG9jLm5vZGUuYWN0aXZlID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMubWFnID0gMFxyXG4gICAgICAgIHRoaXMubWFnZnJvbnQgPSAwXHJcblxyXG4gICAgICAgIHRoaXMuaXNTY2FsZVZpZGVvID0gMlxyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZENhcmREb2MuYWN0aXZlID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmVuZENhcmRXaW4uYWN0aXZlID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgICAgICAvLyB0aGlzLmVuZENhcmRXaW4uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hZ1ZpZGVvID0gMzAwXHJcbiAgICAgICAgICAgIHRoaXMuaXNTY2FsZVZpZGVvID0gMS41XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzRG9jID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgY29uc3QgVEFMTF9QSE9ORV9NSU5fUkFUSU8gPSAyLjA7ICAgICAgICAvLyBpUGhvbmUgWCB+Mi4xNiwgMjA6OSBBbmRyb2lkIH4yLjIyXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNFxyXG4gICAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPj0gVEFMTF9QSE9ORV9NSU5fUkFUSU8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAzMDAgKyAzMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJNaXNzaW9uLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDE1MCArIDMwXHJcbiAgICAgICAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPiAyLjIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjc1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS41XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmREb2Muc2NhbGUgPSAxLjJcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFyQ29pbi5zY2FsZSA9IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RvYyA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFnID0gLTIwMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWdmcm9udCA9IDIwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuODVcclxuICAgICAgICAgICAgICAgIHRoaXMubWFnID0gMjIwXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19