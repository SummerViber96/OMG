
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/GameDonut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f707kejClBjKTl44QvevBE', 'GameDonut');
// scripts/APP/GameDonut.ts

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
        // @property(cc.AudioClip)
        // soundHello: cc.AudioClip = null;
        // @property(cc.AudioClip)
        // soundHelloCus2: cc.AudioClip = null;
        // @property(cc.AudioClip)
        // soundHelloCus3: cc.AudioClip = null;
        _this.soundTrans = null;
        _this.soundClick = null;
        // @property(cc.AudioClip)
        // soundDonutJump: cc.AudioClip = null;
        _this.soundEnd = null;
        _this.soundSellDone = null;
        _this.soundThinking = null;
        _this.soundCream = null;
        _this.soundCherry = null;
        _this.soundWrong = null;
        _this.soundCreamMini = null;
        _this.soundThinkWin = null;
        _this.soundBanh = null;
        _this.tut = null;
        _this.hand = null;
        _this.endCard = null;
        _this.endCardWin = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.logo = null;
        _this.listCus = null;
        _this.mainCamera = null;
        _this.uiCamera = null;
        _this.uiNode = null;
        _this.barTime = null;
        _this.barCoin = null;
        _this.listCheckItem = null;
        // @property(cc.Node)
        // clockTime: cc.Node = null
        // @property(cc.Node)
        // cake: cc.Node = null;
        // @property(cc.Node)
        // creeam: cc.Node = null
        _this.phaoHoa = null;
        // @property(cc.Node)
        // listHand: cc.Node = null;
        _this.warning = null;
        _this.guild = null;
        _this.listItem = [];
        _this.listRay = [];
        _this.listKhay = null;
        _this.preKhay = null;
        // @property(cc.Node)
        // btnDownload: cc.Node = null
        _this.listRayNode = null;
        _this.timeup = null;
        _this.amazing = null;
        _this.notiCoin = null;
        _this.notiMission = null;
        _this.listPreCus = [];
        _this.bg = null;
        _this.table = null;
        _this.listMenu = null;
        _this.handtut = null;
        _this.handtut2 = null;
        _this.handtut3 = null;
        // @property(cc.Node)
        // btnPizza: cc.Node = null
        _this.preCoin = null;
        _this.endCardDoc = null;
        //new
        _this.listBep = null;
        _this.listDia = null;
        _this.btnChocolate = null;
        _this.btnStrawberry = null;
        _this.preBanh = null;
        _this.arrBep = [false, false, false, false];
        _this.arrDia = [false, false, false, false];
        _this.maxKhay = 7;
        _this.arrDonutpos = [];
        // arrDonut = [null, null, null, null, null, null, null]
        // arrKhay = [null, null, null, null, null, null, null]
        // arrKhayPos = []
        _this.isTutChili = false;
        _this.isTutMeat = false;
        _this.isTutVegetTable = false;
        _this.isTutClickMeat = false;
        // @property(cc.AudioClip)
        // soundBg:cc.AudioClip=null;
        _this.isTargetPop = null;
        // isStep = 0
        _this.isTargetCus = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.idSound = null;
        _this.isStep = 0;
        //item: 0:buger, 1: kem 2:donut 3:khoaitay 4:pho 5: pudding 6: tra  7:banhmi 8:coconut
        _this.rayY = [120, 0, -120]; // vị trí Y của 3 ray
        _this.spawnX = 700; // vị trí spawn bên phải
        _this.arrItem = [[], []];
        _this.arrKhay = [];
        // arrMission = [[6, 7], [3, 2], [0, 4, 1], [0, 8], [7, 5, 6], [3, 1, 2], [1, 2, 6], [8, 3, 2], [1, 0, 6], [2, 5], [4, 6, 0], [7, 1], [3, 1, 2], [5, 8, 6], [3.4], [0, 2], [7, 1]]
        _this.arrTargetMission = [];
        _this.arrCus = [];
        _this.isStartgame = false;
        _this.isFirstClick = false;
        _this.isHand = null;
        _this.isFirstClickbanh = false;
        _this.isFrist = false;
        _this.isFirstStep = false;
        _this.isFlying = false;
        _this.isTargetItemPlace = [];
        _this.firstClick = false;
        _this.isCountCus = 3;
        _this.isCountDone = 0;
        _this.isMoving = false;
        _this.coinArr = [];
        _this.isDem = 0;
        _this.moveQueue = [];
        _this.isProcessing = false;
        // isTargetCus=null
        // moveCus() {
        //     if (this.isCountCus < 7) {
        //         this.listCus.children[this.isCountCus].active = true
        //         this.isTargetCus = this.listCus.children[this.isCountCus]
        //         this.arrCus.push(this.listCus.children[this.isCountCus])
        //         this.isCountCus++
        //     }
        //     for (let i = 0; i < this.arrCus.length; i++) {
        //         let child = this.arrCus[i];
        //         cc.tween(child).by(0.8, { position: cc.v3(-600, 0) }).call(() => {
        //             if (this.isTargetCus) {
        //                 this.isTargetCus.getComponent("cusMission").loadTime()
        //             }
        //         }).start()
        //     }
        //     this.scheduleOnce(() => {
        //         this.arrCus.shift()
        //         this.isMoving = false
        //     }, 0.5)
        //     this.spawNextKhay()
        // }
        _this.itemQueue = [];
        _this.lastItemIndex = [];
        _this.isEndGame = false;
        // btn_choose(event, value) {
        _this.isDoc = false;
        _this.arrPosMenuNgang = [cc.v3(-391, -102), cc.v3(375, -112), cc.v3(114, -120), cc.v3(-409, -284), cc.v3(-158, -296), cc.v3(118, -280), cc.v3(390, -296), cc.v3(-137, -116)];
        _this.arrPosDoc = [cc.v3(26, -337), cc.v3(336, -112), cc.v3(15.5, -121), cc.v3(-170, -525.7), cc.v3(-300, -352), cc.v3(186.96, -512), cc.v3(355, -335), cc.v3(-292, -116)];
        return _this;
    }
    //0:banh thuong 1:chocolate 2: strawberry 
    NewClass.prototype.onLoad = function () {
        var _this = this;
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        for (var i = 0; i < this.listCus.childrenCount; i++) {
            this.arrCus.push(this.listCus.children[i]);
        }
        this.updateResponsive();
        cc.view.setResizeCallback(function () {
            _this.updateResponsive();
        });
        this.scheduleOnce(function () {
            cc.tween(_this.notiMission).by(0.4, { opacity: -255, position: cc.v3(0, 200) }).call(function () {
                _this.notiMission.active = false;
                _this.startGame();
            }).start();
        }, 1.5);
        // this.scheduleOnce(() => {
        //     this.startGame()
        // }, 0.5)
    };
    NewClass.prototype.startGame = function () {
        var _this = this;
        for (var i = 0; i < this.arrCus.length; i++) {
            var cus = this.arrCus[i];
            cc.tween(cus).by(0.5, { position: cc.v3(-400, 0) }).start();
        }
        this.scheduleOnce(function () {
            var firstCus = _this.arrCus[0];
            firstCus.getComponent("cusMission").showMission();
            var mission = firstCus.getComponent("cusMission").order;
            _this.spawKhay(mission);
        }, 0.5);
        this.scheduleOnce(function () {
            if (!_this.isFirstClick) {
                _this.isFirstClick = true;
                _this.handtut.active = true;
                // this.btnPizza.getComponent(cc.Animation).play("btnHindG");
            }
        }, 3);
    };
    NewClass.prototype.btn_banh = function () {
        var _this = this;
        if (!this.isFrist) {
            this.isFrist = true;
            this.arrCus[0].getComponent("cusMission").loadTime();
        }
        cc.audioEngine.play(this.soundClick, false, 1);
        this.isFirstClick = true;
        this.handtut.active = false;
        this.scheduleOnce(function () {
            if (!_this.isFirstClickbanh) {
                _this.isFirstClickbanh = true;
                _this.handtut2.active = true;
            }
        }, 2);
        var check = this.getSlotBep();
        if (check != null) {
            this.arrBep[check] = true;
            ;
            this.listBep.children[check].getComponent("Banh").setOn();
        }
    };
    NewClass.prototype.btn_bep = function (tag) {
        cc.audioEngine.play(this.soundClick, false, 1);
        this.handtut2.active = false;
        if (!this.isFirstStep) {
            this.handtut3.active = true;
            this.isFirstStep = true;
        }
        var check = this.getSlotDia();
        if (check != null) {
            this.arrDia[check] = true;
            this.listDia.children[check].getComponent("Dia").getBanh();
        }
    };
    NewClass.prototype.getSlotBep = function () {
        for (var i = 0; i < this.arrBep.length; i++) {
            var child = this.arrBep[i];
            if (child == false) {
                return i;
            }
        }
        return null;
    };
    NewClass.prototype.getSlotDia = function () {
        for (var i = 0; i < this.arrDia.length; i++) {
            var child = this.listDia.children[i];
            if (child.getComponent("Dia").isBanh == false) {
                return i;
            }
        }
        return null;
    };
    NewClass.prototype.btn_strawBerry = function () {
        cc.audioEngine.play(this.soundClick, false, 1);
        for (var i = 0; i < this.arrDia.length; i++) {
            // let check = this.arrDia[i];
            var banh = this.listDia.children[i];
            if (banh.getComponent("Dia").status == 0 && banh.getComponent("Dia").isBanh == true) {
                this.handtut3.active = false;
                banh.getComponent("Dia").setStatus(2);
                break;
            }
        }
    };
    NewClass.prototype.btn_chocolate = function () {
        cc.audioEngine.play(this.soundClick, false, 1);
        for (var i = 0; i < this.arrDia.length; i++) {
            // let check = this.arrDia[i];
            var banh = this.listDia.children[i];
            if (banh.getComponent("Dia").status == 0 && banh.getComponent("Dia").isBanh == true) {
                this.handtut3.active = false;
                banh.getComponent("Dia").setStatus(1);
                break;
            }
        }
    };
    NewClass.prototype.btn_cream = function () {
    };
    NewClass.prototype.btn_sell = function (item, tag) {
        var _this = this;
        // if(this.isMoving)return;
        var check = this.checkMission(tag, item);
        cc.audioEngine.play(this.soundClick, false, 1);
        var mag = 50;
        var startPos = cc.v2(item.x, item.y);
        var endPos = this.arrCus[0].getChildByName("bubbles").position.add(cc.v3(-30, 120));
        var midPos = cc.v2(endPos.x + mag, endPos.y + 200);
        var banh = cc.instantiate(this.preBanh);
        banh.parent = item.parent;
        banh.position = cc.v3(startPos.x, startPos.y);
        banh.getComponent("Item").loadItem(tag);
        cc.tween(banh).to(0.2, { scale: 1.2 }).start();
        cc.tween(banh).bezierTo(0.4, startPos, midPos, endPos).call(function () {
            if (check) {
                cc.audioEngine.play(_this.soundOk, false, 1);
                _this.arrCus[_this.isTargetItemPlace[0]].getComponent("cusMission").doneNode.children[_this.isTargetItemPlace[1]].active = true;
            }
            else {
                cc.audioEngine.play(_this.soundWrong, false, 1);
                _this.arrCus[0].getComponent("cusMission").angry();
            }
            banh.destroy();
        }).start();
        // }
    };
    // checkMission(tag) {
    //     let mission = this.arrCus[0].getComponent("cusMission").order
    //     for (let i = 0; i < mission.length; i++) {
    //         if (mission[i] == tag) {
    //             this.arrCus[0].getComponent("cusMission").doneNode.children[i].active = true
    //         }
    //     }
    // }
    NewClass.prototype.spawKhay = function (mission) {
        var arr = [cc.v3(-60, -10), cc.v3(80, -10)];
        if (mission.length == 3) {
            arr = [cc.v3(-75, -10), cc.v3(30, -10), cc.v3(120, -10)];
        }
        var khay = cc.instantiate(this.preKhay);
        khay.parent = this.listKhay;
        khay.position = cc.v3(-100, 50);
        this.arrKhay.push(khay);
        this.loadDataKhay(mission, khay);
        this.arrTargetMission.push(mission);
    };
    // countMiss = 3
    NewClass.prototype.spawNextKhay = function (place) {
        var _this = this;
        var firstCus = this.arrCus[1];
        firstCus.getComponent("cusMission").showMission();
        firstCus.getComponent("cusMission").loadTime();
        var mission = firstCus.getComponent("cusMission").order;
        this.arrTargetMission.splice(place, 1);
        this.arrTargetMission.push(mission);
        var pos = cc.v3(1200, 0);
        var preKhay = cc.instantiate(this.preKhay);
        preKhay.parent = this.listKhay;
        preKhay.position = pos;
        this.arrKhay.push(preKhay);
        this.loadDataKhay(mission, preKhay);
        preKhay.position = cc.v3(-100 + 400, 50);
        var targetKhay = this.arrKhay[place];
        cc.tween(targetKhay).to(0.3, { scale: 0 }).start();
        var _loop_1 = function (i) {
            var khay = this_1.arrKhay[i];
            cc.tween(khay).by(0.8, { position: cc.v3(-400, 0) }).call(function () {
                _this.arrKhay[i - 1] = khay;
            }).start();
        };
        var this_1 = this;
        for (var i = place + 1; i < this.arrKhay.length; i++) {
            _loop_1(i);
        }
        cc.tween(this.listRay[0]).by(0.8, { position: cc.v3(-400, 0) }).start();
        this.scheduleOnce(function () {
            _this.arrKhay.splice(place, 1);
        }, 0.2);
    };
    NewClass.prototype.loadDataKhay = function (data, khay) {
        if (data) {
            var arr = [cc.v3(-60, -30), cc.v3(80, -30)];
            if (data.length == 3) {
                arr = [cc.v3(-75, -30), cc.v3(30, -30), cc.v3(120, -30)];
            }
            for (var i = 0; i < data.length; i++) {
                var item = cc.instantiate(this.listItem[data[i] - 1]);
                item.parent = khay;
                item.position = arr[i];
                item.scale = 0.68;
                item.getComponent(cc.Button).enabled = false;
                item.getComponent("Item").loadGray();
            }
        }
    };
    NewClass.prototype.btn_clickBtn = function (event, value) {
        var _this = this;
        this.arrCus[0].getComponent("cusMission").loadTime();
        this.handtut.active = false;
        this.btnPizza.children[1].active = false;
        if (!this.firstClick) {
            this.firstClick = true;
            this.guild.active = false;
            this.handtut.active = false;
        }
        var id = parseInt(value);
        var node = event.currentTarget;
        var check = this.checkMission(id, node);
        if (check) {
            cc.audioEngine.play(this.soundClick, false, 1);
            var pos = check.parent.convertToWorldSpaceAR(check.position);
            pos = node.parent.convertToNodeSpaceAR(pos);
            var mag = (pos.x > node.x) ? -50 : 50;
            var startPos = cc.v2(node.x, node.y);
            var endPos = cc.v2(pos.x, pos.y);
            var midPos = cc.v2(endPos.x + mag, endPos.y + 200);
            var item_1 = cc.instantiate(this.listItem[id - 1]);
            item_1.parent = node.parent;
            item_1.position = cc.v3(startPos.x, startPos.y);
            cc.tween(item_1).to(0.2, { scale: 1.2 }).start();
            cc.tween(item_1).bezierTo(0.4, startPos, midPos, endPos).call(function () {
                cc.audioEngine.play(_this.soundOk, false, 1);
                _this.arrCus[_this.isTargetItemPlace[0]].getComponent("cusMission").doneNode.children[_this.isTargetItemPlace[1]].active = true;
                item_1.destroy();
            }).start();
        }
    };
    NewClass.prototype.checkItem = function (id) {
        for (var i = 0; i < this.arrTargetMission.length; i++) {
            var mission = this.arrTargetMission[i];
            for (var j = 0; j < mission.length; j++) {
                if (mission[i] == id) {
                    var arrItem = [i, j];
                    return arrItem;
                }
            }
        }
        return null;
    };
    NewClass.prototype.checkMission = function (id, node) {
        for (var i = 0; i < this.arrTargetMission.length; i++) {
            var mission = this.arrTargetMission[i];
            for (var j = 0; j < mission.length; j++) {
                if (id == mission[j]) {
                    this.arrTargetMission[i][j] = 100;
                    this.isTargetItemPlace = [i, j];
                    this.checkSuccess(i, j);
                    return this.arrKhay[i].children[j];
                }
            }
        }
        // node.getComponent(cc.Animation).play("btnWrong")
        // if (this.arrCus[0]) {
        //     this.arrCus[0].getComponent("cusMission").angry()
        // }
        return null;
    };
    NewClass.prototype.checkSuccess = function (i, j) {
        var _this = this;
        this.scheduleOnce(function () {
            if (j != null) {
                var targetKhay = _this.arrKhay[i].children[j];
                targetKhay.getComponent("Item").offGray(targetKhay.children[1]);
                // cc.tween(targetKhay).to(0.2, { scale: 2.5 }).to(0.1, { scale: 2.2 }).start()
                cc.tween(targetKhay).to(0.2, { scale: 0.9 }).to(0.1, { scale: 0.65 }).start();
            }
        }, 0.4);
        var mission = this.arrTargetMission[i];
        var check = true;
        var cus = this.arrCus[i];
        for (var m = 0; m < mission.length; m++) {
            if (mission[m] != 100) {
                check = false;
            }
        }
        if (check == true) {
            this.isMoving = true;
            this.isCountDone++;
            this.scheduleOnce(function () {
                // cus.getChildByName("vfx_coin").active = true
                // cus.getChildByName("vfx_coin").getComponent(cc.Animation).play()
                var pos = _this.listCus.convertToWorldSpaceAR(cus.position);
                pos = _this.camera.getWorldToScreenPoint(pos);
                pos = _this.uiCamera.getScreenToWorldPoint(pos);
                pos = _this.barCoin.convertToNodeSpaceAR(pos).add(cc.v3(0, 0));
                // pos = this.node.convertToNodeSpaceAR(pos)
                _this.spawnCoinsFromCustomer(pos, function () {
                    // sau khi tỏa ra xong thì move về thanh gold
                    _this.moveCoinsToGoldBar(_this.coinArr, _this.barCoin);
                });
                cus.getComponent("cusMission").happy();
                _this.notiCoin.play();
                globalThis.coin += 50;
                if (mission.length == 3) {
                    globalThis.coin += 100;
                }
                if (globalThis.coin >= 1000) {
                    _this.onEndGame(true);
                }
                cc.audioEngine.play(_this.soundSellDone, false, 1);
            }, 0.6);
            this.scheduleOnce(function () {
                // this.moveCusOut(i)
                _this.enqueueMove(_this.arrCus[i]);
            }, 0.8);
        }
    };
    // rewardGold(customerNode: cc.Node) {
    //     const startPos = customerNode.position;
    //     const coins: cc.Node[] = [];
    //     const coinCount = 6;
    //     const radius = 120;
    //     for (let i = 0; i < coinCount; i++) {
    //         const coin = cc.instantiate(this.preCoin);
    //         coin.parent = this.node;
    //         coin.setPosition(startPos);
    //         coins.push(coin);
    //         const angle = (Math.PI * 2 / coinCount) * i;
    //         const targetPos = startPos.add(cc.v3(
    //             Math.cos(angle) * radius,
    //             Math.sin(angle) * radius,
    //             0
    //         ));
    //         cc.tween(coin)
    //             .to(0.25, { position: targetPos }, { easing: "quadOut" })
    //             .delay(0.1)
    //             .call(() => {
    //                 if (i === coinCount - 1) {
    //                     this.moveCoinsToGoldBar(coins, this.barCoin);
    //                 }
    //             })
    //             .start();
    //     }
    // }
    NewClass.prototype.spawnCoinsFromCustomer = function (startPos, onFinish) {
        this.coinArr = [];
        var coinCount = 6;
        var radius = 70; // độ tỏa ra
        var finished = 0;
        for (var i = 0; i < coinCount; i++) {
            var coin = cc.instantiate(this.preCoin);
            coin.parent = this.barCoin;
            coin.setPosition(startPos);
            coin.scale = 0.8;
            this.coinArr.push(coin);
            // random hướng tỏa
            var angle = (Math.PI * 2 / coinCount) * i;
            var randomRadius = radius + Math.random() * 40;
            var targetPos = startPos.add(cc.v3(Math.cos(angle) * randomRadius, Math.sin(angle) * randomRadius, 0));
            // tỏa ra
            cc.tween(coin)
                .to(0.25, { position: targetPos }, { easing: "quadOut" })
                .delay(0.05)
                .call(function () {
                finished++;
                if (finished === coinCount && onFinish) {
                    onFinish();
                }
            })
                .start();
        }
    };
    NewClass.prototype.moveCoinsToGoldBar = function (coins, goldTarget) {
        // const worldPos = goldTarget.parent.convertToWorldSpaceAR(goldTarget.position);
        var local = cc.v3(0, 0);
        coins.forEach(function (coin, index) {
            // const local = coin.parent.convertToNodeSpaceAR(worldPos);
            cc.tween(coin)
                .delay(index * 0.05)
                .to(0.4, { position: local, scale: 0.5 }, { easing: "quadIn" })
                .call(function () {
                coin.destroy();
                // this.addGold(1);
            })
                .start();
        });
    };
    NewClass.prototype.getPlace = function (cus) {
        return this.arrCus.indexOf(cus); // gọn hơn
    };
    NewClass.prototype.enqueueMove = function (cusNode) {
        this.moveQueue.push(cusNode);
        this.processQueue();
    };
    NewClass.prototype.processQueue = function () {
        if (this.isProcessing)
            return;
        if (this.moveQueue.length === 0)
            return;
        this.isProcessing = true;
        var cusNode = this.moveQueue.shift();
        this._moveCusOut(cusNode);
    };
    NewClass.prototype._moveCusOut = function (cusNode) {
        var _this = this;
        // if (place < 0 || place >= this.arrCus.length) return;
        var place = this.arrCus.indexOf(cusNode);
        // if (place < 0 || place >= this.arrCus.length) {
        //     this.finishMove();
        //     return;
        // }
        // console.log(this.isCountDone)
        if (place === -1) {
            this.finishMove();
            return;
        }
        this.isMoving = true;
        // let firstCus = this.arrCus[place];
        var firstCus = cusNode;
        // ===== Spawn customer tiếp theo =====
        var nextCus = this.listCus.children[this.isCountCus];
        if (nextCus) {
            nextCus.active = true;
            this.isTargetCus = nextCus;
            this.isCountCus++;
        }
        // ===== Tạo customer mới ở cuối =====
        // let newCus = cc.instantiate(this.listPreCus[this.isDem]);
        // newCus.parent = this.listCus;
        // let lastCus = this.arrCus[this.arrCus.length - 1];
        // newCus.position = lastCus.position.add(cc.v3(600, 0));
        // this.isDem = (this.isDem + 1) % this.listPreCus.length; ``
        // this.arrCus.push(newCus);
        // ===== Move thằng bị out =====
        firstCus.zIndex = -1;
        firstCus.getComponent("cusMission").isSuccess = true;
        cc.tween(firstCus)
            .delay(0.3)
            .by(0.8 * (place + 1), { position: cc.v3(-400 * (place + 1), 0) })
            .start();
        cc.tween(firstCus)
            .delay(0.3)
            .to(0.5, { opacity: 0 })
            .start();
        // ===== Move các thằng phía sau =====
        for (var i = place + 1; i < this.arrCus.length; i++) {
            var child = this.arrCus[i];
            cc.tween(child)
                .delay(0.3)
                .by(0.8, { position: cc.v3(-400, 0) })
                .start();
        }
        // ===== Gọi loadTime đúng 1 lần =====
        // if (this.isTargetCus) {
        //     this.scheduleOnce(() => {
        //         // this.isTargetCus.getComponent("cusMission").loadTime();
        //     }, 0.4);
        // }
        // ===== Remove khỏi mảng =====
        this.scheduleOnce(function () {
            _this.arrCus.splice(place, 1);
            _this.isMoving = false;
            _this.finishMove();
        }, 1.1);
        // ===== Spawn khay =====
        this.scheduleOnce(function () {
            if (_this.isCountDone < 5) {
                _this.spawNextKhay(place);
            }
        }, 0.3);
        if (this.isCountDone == 5) {
            this.onEndGame(true);
        }
    };
    NewClass.prototype.finishMove = function () {
        this.isProcessing = false;
        this.processQueue(); // chạy tiếp thằng kế tiếp
    };
    NewClass.prototype.checkSuccessItem = function () {
        for (var i = 0; i < 1; i++) {
            var mission = this.arrTargetMission[i];
            var check = true;
            for (var j = 0; j < mission.length; j++) {
                if (mission[j] != 100) {
                    check = false;
                }
            }
            if (check) {
                this.checkSuccess(i, null);
                return;
            }
        }
    };
    NewClass.prototype.shuffleItem = function () {
        var _a;
        this.itemQueue = [];
        for (var i = 0; i < this.listItem.length; i++) {
            this.itemQueue.push(i);
        }
        // shuffle Fisher-Yates
        for (var i = this.itemQueue.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.itemQueue[j], this.itemQueue[i]], this.itemQueue[i] = _a[0], this.itemQueue[j] = _a[1];
        }
    };
    NewClass.prototype.getNextItemIndex = function () {
        if (this.itemQueue.length == 0) {
            this.shuffleItem(); // tạo lượt mới
        }
        return this.itemQueue.shift();
    };
    NewClass.prototype.spawnItem = function () {
        for (var i = 0; i < this.listRay.length; i++) {
            this.lastItemIndex[i] = -1; // chưa có item trước
            this.spawnItemOnRay(i);
        }
    };
    NewClass.prototype.spawnItemOnRay = function (index) {
        var _this = this;
        var mag = (index == 0) ? 1000 : -1000;
        this.createItem(index, mag);
        this.schedule(function () {
            _this.createItem(index, mag);
        }, 2);
    };
    NewClass.prototype.createItem = function (index, mag) {
        // let rd = Math.floor(Math.random() * this.listItem.length);
        // // tránh trùng item trước
        // while (rd === this.lastItemIndex[index]) {
        //     rd = Math.floor(Math.random() * this.listItem.length);
        // }
        var rd = this.getNextItemIndex();
        this.lastItemIndex[index] = rd;
        var item = cc.instantiate(this.listItem[rd]);
        item.parent = this.listRay[index];
        this.arrItem[index].push(item);
        item.position = cc.v3(mag, -40);
        this.moveItem(item, mag);
    };
    NewClass.prototype.moveItem = function (item, mag) {
        var targetX = -mag;
        cc.tween(item)
            .to(17, { x: targetX })
            .call(function () {
            item.destroy();
        })
            .start();
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
    NewClass.prototype.moveClocktoUI = function (node1) {
        this.moveItemToUI(node1, this.barTime.children[1]);
    };
    NewClass.prototype.moveItemToUI = function (node1, node2) {
        // cc.audioEngine.play(this.soundWoodin, false, 1)
        var pos = node2.parent.convertToWorldSpaceAR(node2.position);
        pos = this.uiNode.convertToNodeSpaceAR(pos);
        // pos = pos.add(cc.v3(0, 0))
        var pos2 = node1.parent.convertToWorldSpaceAR(node1.position);
        pos2 = this.mainCamera.getWorldToScreenPoint(pos2);
        pos2 = this.uiCamera.getScreenToWorldPoint(pos2);
        pos2 = this.uiNode.convertToNodeSpaceAR(pos2).add(cc.v3(0, 0));
        node1.parent = this.uiNode;
        node1.scale = this.mainCamera.zoomRatio / this.uiCamera.zoomRatio * 0.7;
        node1.position = pos2;
        cc.tween(node1).to(0.4, { position: pos, scale: 0.4 }).call(function () {
            node1.active = false;
            // this.missionBar.getComponent("updateBar").updateBar();
            // wood.getComponent(cc.Animation).play("exp")
            // // cc.audioEngine.play(this.soundWoodOut, false, 1)
        }).start();
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
            this.barTime.getComponent("barTime").endGame();
            this.amazing.active = true;
            // cc.audioEngine.play(this.soundEnd, false, 1)
            this.scheduleOnce(function () {
                // cc.audioEngine.play(this.soundThinkWin, false, 1)
                // cc.audioEngine.play(this.soundWin, false, 1)
                // this.endCard.getChildByName("title").active = false
                // this.endCardWin.active = true;
            }, 0.5);
        }
        else {
            this.barTime.getComponent("barTime").endGame();
            for (var _i = 0, _a = this.arrCus; _i < _a.length; _i++) {
                var child = _a[_i];
                child.children[0].getComponent(sp.Skeleton).setAnimation(0, "6.angry", true);
            }
            cc.audioEngine.stop(this.idSound);
            this.timeup.active = true;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundThinking, false, 1);
                cc.audioEngine.play(_this.soundLose, false, 1);
                _this.endCard.active = true;
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
        this.camera.zoomRatio = 1;
        this.endCard.scale = (logic) ? 1.2 : 0.7;
        this.endCardWin.scale = (logic) ? 1.2 : 0.7;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.camera.node.position = (logic) ? cc.v3(-200, 140) : cc.v3(0, 50);
        this.barCoin.scale = (logic) ? 2.5 : 1.4;
        this.barCoin.getComponent(cc.Widget).top = (logic) ? 210 : 80;
        this.phaoHoa.scale = (logic) ? 9 : 5;
        this.guild.scale = (logic) ? 2 : 1.2;
        this.guild.position = (logic) ? cc.v3(0, -900) : cc.v3(0, -360);
        this.listMenu.y = (logic) ? -80 : 0;
        this.listCus.scale = (logic) ? 1.2 : 1;
        this.listKhay.scale = (logic) ? 1.1 : 1;
        this.timeup.scale = (logic) ? 1 : 1.4;
        this.amazing.scale = (logic) ? 1 : 1.4;
        this.bg.scale = (logic) ? 2.1 : 1;
        this.bg.position = (logic) ? cc.v3(-200, 0) : cc.v3(0, 50);
        this.listMenu.scale = (logic) ? 1.1 : 1;
        this.endCardDoc.scale = 1.5;
        this.notiMission.scale = (logic) ? 1.6 : 1;
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
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 1.7;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                this.barCoin.getComponent(cc.Widget).top = 200;
                // for (let i = 0; i < this.listMenu.childrenCount; i++) {
                //     if (this.arrPosDoc[i]) {
                //         this.listMenu.children[i].position = this.arrPosDoc[i]
                //     }
                // }
                // console.log("iphoneX")
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.5;
                this.endCardDoc.scale = 1.2;
                // for (let i = 0; i < this.listMenu.childrenCount; i++) {
                //     if (this.arrPosMenuNgang[i]) {
                //         this.listMenu.children[i].position = this.arrPosMenuNgang[i]
                //     }
                // }
            }
            else {
                // for (let i = 0; i < this.listMenu.childrenCount; i++) {
                //     if (this.arrPosDoc[i]) {
                //         this.listMenu.children[i].position = this.arrPosDoc[i]
                //     }
                // }
            }
        }
        else {
            this.isDoc = false;
            // for (let i = 0; i < this.listMenu.childrenCount; i++) {
            //     if (this.arrPosMenuNgang[i]) {
            //         this.listMenu.children[i].position = this.arrPosMenuNgang[i]
            //     }
            // }
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
        property(cc.Node)
    ], NewClass.prototype, "listCus", void 0);
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
    ], NewClass.prototype, "listCheckItem", void 0);
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
        property([cc.Prefab])
    ], NewClass.prototype, "listItem", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listRay", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKhay", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preKhay", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listRayNode", void 0);
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
        property([cc.Prefab])
    ], NewClass.prototype, "listPreCus", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "table", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listMenu", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handtut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handtut2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handtut3", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCardDoc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBep", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listDia", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnChocolate", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnStrawberry", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBanh", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7QUFFdkI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxaUNDO1FBbmlDRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBQzdCLDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFDbkMsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QywwQkFBMEI7UUFDMUIsdUNBQXVDO1FBRXZDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUV2QyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLG9CQUFjLEdBQWlCLElBQUksQ0FBQTtRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZUFBUyxHQUFpQixJQUFJLENBQUE7UUFFOUIsU0FBRyxHQUFZLElBQUksQ0FBQTtR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LEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDckMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUN6QyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN0QyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1lBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1NBQ2xEO1FBQ0QsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBRWYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7WUFDakIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QyxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQU0s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QyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBSXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNZO0lBUTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFJeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzhDQUNJO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBSTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnREFDTTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNBO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBeklULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxaUM1QjtJQUFELGVBQUM7Q0FyaUNELEFBcWlDQyxDQXJpQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBcWlDakQ7a0JBcmlDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5nbG9iYWxUaGlzLmNvaW4gPSAwXHJcbmdsb2JhbFRoaXMuR2FtZSA9IGZhbHNlXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbG9zZVBvcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRPazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIHNvdW5kSGVsbG9DdXMyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIHNvdW5kSGVsbG9DdXMzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZERvbnV0SnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENyZWFtOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDaGVycnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdyb25nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbU1pbmk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCYW5oOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmRXaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJUaW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyQ29pbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGVja0l0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBjbG9ja1RpbWU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGNha2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBjcmVlYW06IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBoYW9Ib2E6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RJdGVtOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RSYXk6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0S2hheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlS2hheTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gYnRuRG93bmxvYWQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RSYXlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1ldXA6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFtYXppbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgbm90aUNvaW46IGNjLkFuaW1hdGlvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aU1pc3Npb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0UHJlQ3VzOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YWJsZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdE1lbnU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kdHV0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZHR1dDI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kdHV0MzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGJ0blBpenphOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNvaW46IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZERvYzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL25ld1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0QmVwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdERpYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNob2NvbGF0ZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blN0cmF3YmVycnk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUJhbmg6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBhcnJCZXAgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICBhcnJEaWEgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcblxyXG5cclxuICAgIG1heEtoYXkgPSA3XHJcblxyXG4gICAgYXJyRG9udXRwb3MgPSBbXVxyXG4gICAgLy8gYXJyRG9udXQgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIC8vIGFycktoYXkgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIC8vIGFycktoYXlQb3MgPSBbXVxyXG4gICAgaXNUdXRDaGlsaSA9IGZhbHNlXHJcbiAgICBpc1R1dE1lYXQgPSBmYWxzZVxyXG4gICAgaXNUdXRWZWdldFRhYmxlID0gZmFsc2VcclxuICAgIGlzVHV0Q2xpY2tNZWF0ID0gZmFsc2VcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZEJnOmNjLkF1ZGlvQ2xpcD1udWxsO1xyXG5cclxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcclxuICAgIC8vIGlzU3RlcCA9IDBcclxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIGlkU291bmQgPSBudWxsXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICAvL2l0ZW06IDA6YnVnZXIsIDE6IGtlbSAyOmRvbnV0IDM6a2hvYWl0YXkgNDpwaG8gNTogcHVkZGluZyA2OiB0cmEgIDc6YmFuaG1pIDg6Y29jb251dFxyXG4gICAgcmF5WTogbnVtYmVyW10gPSBbMTIwLCAwLCAtMTIwXTsgICAvLyB24buLIHRyw60gWSBj4bunYSAzIHJheVxyXG4gICAgc3Bhd25YOiBudW1iZXIgPSA3MDA7ICAgICAgICAgICAgICAvLyB24buLIHRyw60gc3Bhd24gYsOqbiBwaOG6o2lcclxuICAgIGFyckl0ZW0gPSBbW10sIFtdXVxyXG4gICAgYXJyS2hheSA9IFtdXHJcbiAgICAvLyBhcnJNaXNzaW9uID0gW1s2LCA3XSwgWzMsIDJdLCBbMCwgNCwgMV0sIFswLCA4XSwgWzcsIDUsIDZdLCBbMywgMSwgMl0sIFsxLCAyLCA2XSwgWzgsIDMsIDJdLCBbMSwgMCwgNl0sIFsyLCA1XSwgWzQsIDYsIDBdLCBbNywgMV0sIFszLCAxLCAyXSwgWzUsIDgsIDZdLCBbMy40XSwgWzAsIDJdLCBbNywgMV1dXHJcbiAgICBhcnJUYXJnZXRNaXNzaW9uID0gW11cclxuICAgIGFyckN1cyA9IFtdXHJcbiAgICBpc1N0YXJ0Z2FtZSA9IGZhbHNlXHJcbiAgICBpc0ZpcnN0Q2xpY2sgPSBmYWxzZVxyXG4gICAgLy8wOmJhbmggdGh1b25nIDE6Y2hvY29sYXRlIDI6IHN0cmF3YmVycnkgXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDdXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcclxuICAgICAgICBjYy52aWV3LnNldFJlc2l6ZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vdGlNaXNzaW9uKS5ieSgwLjQsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIDIwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlNaXNzaW9uLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9LCAxLjUpXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXJ0R2FtZSgpXHJcbiAgICAgICAgLy8gfSwgMC41KVxyXG4gICAgfVxyXG4gICAgaXNIYW5kID0gbnVsbFxyXG5cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXTtcclxuICAgICAgICAgICAgY2MudHdlZW4oY3VzKS5ieSgwLjUsIHsgcG9zaXRpb246IGNjLnYzKC00MDAsIDApIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0Q3VzID0gdGhpcy5hcnJDdXNbMF07XHJcbiAgICAgICAgICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuc2hvd01pc3Npb24oKTtcclxuICAgICAgICAgICAgbGV0IG1pc3Npb24gPSBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLm9yZGVyO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXdLaGF5KG1pc3Npb24pO1xyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5idG5QaXp6YS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYnRuSGluZEdcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMylcclxuXHJcbiAgICB9XHJcbiAgICBpc0ZpcnN0Q2xpY2tiYW5oID0gZmFsc2VcclxuICAgIGlzRnJpc3QgPSBmYWxzZVxyXG4gICAgYnRuX2JhbmgoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRnJpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZyaXN0ID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmlzRmlyc3RDbGljayA9IHRydWVcclxuICAgICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2tiYW5oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RDbGlja2JhbmggPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmR0dXQyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgMilcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmdldFNsb3RCZXAoKTtcclxuICAgICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyckJlcFtjaGVja10gPSB0cnVlOztcclxuICAgICAgICAgICAgdGhpcy5saXN0QmVwLmNoaWxkcmVuW2NoZWNrXS5nZXRDb21wb25lbnQoXCJCYW5oXCIpLnNldE9uKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0ZpcnN0U3RlcCA9IGZhbHNlXHJcbiAgICBidG5fYmVwKHRhZykge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmhhbmR0dXQyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RTdGVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZHR1dDMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3RTdGVwID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmdldFNsb3REaWEoKTtcclxuICAgICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyckRpYVtjaGVja10gPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdERpYS5jaGlsZHJlbltjaGVja10uZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmdldEJhbmgoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRTbG90QmVwKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJCZXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJCZXBbaV1cclxuICAgICAgICAgICAgaWYgKGNoaWxkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBnZXRTbG90RGlhKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEaWEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0RGlhLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5nZXRDb21wb25lbnQoXCJEaWFcIikuaXNCYW5oID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBidG5fc3RyYXdCZXJyeSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEaWEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gbGV0IGNoZWNrID0gdGhpcy5hcnJEaWFbaV07XHJcbiAgICAgICAgICAgIGxldCBiYW5oID0gdGhpcy5saXN0RGlhLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc3RhdHVzID09IDAgJiYgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuaXNCYW5oID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZHR1dDMuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zZXRTdGF0dXMoMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnRuX2Nob2NvbGF0ZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEaWEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gbGV0IGNoZWNrID0gdGhpcy5hcnJEaWFbaV07XHJcbiAgICAgICAgICAgIGxldCBiYW5oID0gdGhpcy5saXN0RGlhLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc3RhdHVzID09IDAgJiYgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuaXNCYW5oID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZHR1dDMuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zZXRTdGF0dXMoMSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnRuX2NyZWFtKCkge1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBpc0ZseWluZyA9IGZhbHNlXHJcbiAgICBidG5fc2VsbChpdGVtLCB0YWcpIHtcclxuICAgICAgICAvLyBpZih0aGlzLmlzTW92aW5nKXJldHVybjtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrTWlzc2lvbih0YWcsIGl0ZW0pO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgbWFnID0gNTBcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52MihpdGVtLngsIGl0ZW0ueSk7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IHRoaXMuYXJyQ3VzWzBdLmdldENoaWxkQnlOYW1lKFwiYnViYmxlc1wiKS5wb3NpdGlvbi5hZGQoY2MudjMoLTMwLCAxMjApKVxyXG4gICAgICAgIGxldCBtaWRQb3MgPSBjYy52MihlbmRQb3MueCArIG1hZywgZW5kUG9zLnkgKyAyMDApO1xyXG5cclxuICAgICAgICBsZXQgYmFuaCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQmFuaCk7XHJcbiAgICAgICAgYmFuaC5wYXJlbnQgPSBpdGVtLnBhcmVudDtcclxuICAgICAgICBiYW5oLnBvc2l0aW9uID0gY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcbiAgICAgICAgYmFuaC5nZXRDb21wb25lbnQoXCJJdGVtXCIpLmxvYWRJdGVtKHRhZylcclxuXHJcbiAgICAgICAgY2MudHdlZW4oYmFuaCkudG8oMC4yLCB7IHNjYWxlOiAxLjIgfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2VlbihiYW5oKS5iZXppZXJUbygwLjQsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kT2ssIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVswXV0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5kb25lTm9kZS5jaGlsZHJlblt0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlWzFdXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmFuZ3J5KClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmFuaC5kZXN0cm95KClcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuICAgIC8vIGNoZWNrTWlzc2lvbih0YWcpIHtcclxuICAgIC8vICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikub3JkZXJcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pc3Npb24ubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKG1pc3Npb25baV0gPT0gdGFnKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmRvbmVOb2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHNwYXdLaGF5KG1pc3Npb24pIHtcclxuICAgICAgICBsZXQgYXJyID0gW2NjLnYzKC02MCwgLTEwKSwgY2MudjMoODAsIC0xMCldXHJcbiAgICAgICAgaWYgKG1pc3Npb24ubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgYXJyID0gW2NjLnYzKC03NSwgLTEwKSwgY2MudjMoMzAsIC0xMCksIGNjLnYzKDEyMCwgLTEwKV1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpO1xyXG4gICAgICAgIGtoYXkucGFyZW50ID0gdGhpcy5saXN0S2hheTtcclxuICAgICAgICBraGF5LnBvc2l0aW9uID0gY2MudjMoLTEwMCwgNTApXHJcbiAgICAgICAgdGhpcy5hcnJLaGF5LnB1c2goa2hheSlcclxuICAgICAgICB0aGlzLmxvYWREYXRhS2hheShtaXNzaW9uLCBraGF5KVxyXG4gICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5wdXNoKG1pc3Npb24pXHJcbiAgICB9XHJcblxyXG4gICAgaXNUYXJnZXRJdGVtUGxhY2UgPSBbXVxyXG4gICAgLy8gY291bnRNaXNzID0gM1xyXG4gICAgc3Bhd05leHRLaGF5KHBsYWNlKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0Q3VzID0gdGhpcy5hcnJDdXNbMV07XHJcbiAgICAgICAgZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5zaG93TWlzc2lvbigpO1xyXG4gICAgICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKTtcclxuXHJcbiAgICAgICAgbGV0IG1pc3Npb24gPSBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLm9yZGVyO1xyXG4gICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5zcGxpY2UocGxhY2UsIDEpXHJcbiAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnB1c2gobWlzc2lvbilcclxuICAgICAgICBsZXQgcG9zID0gY2MudjMoMTIwMCwgMCk7XHJcbiAgICAgICAgbGV0IHByZUtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpXHJcbiAgICAgICAgcHJlS2hheS5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5O1xyXG4gICAgICAgIHByZUtoYXkucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB0aGlzLmFycktoYXkucHVzaChwcmVLaGF5KVxyXG4gICAgICAgIHRoaXMubG9hZERhdGFLaGF5KG1pc3Npb24sIHByZUtoYXkpXHJcbiAgICAgICAgcHJlS2hheS5wb3NpdGlvbiA9IGNjLnYzKC0xMDAgKyA0MDAsIDUwKVxyXG4gICAgICAgIGxldCB0YXJnZXRLaGF5ID0gdGhpcy5hcnJLaGF5W3BsYWNlXVxyXG4gICAgICAgIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gcGxhY2UgKyAxOyBpIDwgdGhpcy5hcnJLaGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBraGF5ID0gdGhpcy5hcnJLaGF5W2ldXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGtoYXkpLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycktoYXlbaSAtIDFdID0ga2hheVxyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RSYXlbMF0pLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcnJLaGF5LnNwbGljZShwbGFjZSwgMSk7XHJcblxyXG4gICAgICAgIH0sIDAuMilcclxuICAgIH1cclxuICAgIGxvYWREYXRhS2hheShkYXRhLCBraGF5KSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IFtjYy52MygtNjAsIC0zMCksIGNjLnYzKDgwLCAtMzApXVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgICAgIGFyciA9IFtjYy52MygtNzUsIC0zMCksIGNjLnYzKDMwLCAtMzApLCBjYy52MygxMjAsIC0zMCldXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtkYXRhW2ldIC0gMV0pXHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IGtoYXlcclxuICAgICAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBhcnJbaV1cclxuICAgICAgICAgICAgICAgIGl0ZW0uc2NhbGUgPSAwLjY4XHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoXCJJdGVtXCIpLmxvYWRHcmF5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpcnN0Q2xpY2sgPSBmYWxzZVxyXG4gICAgYnRuX2NsaWNrQnRuKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKVxyXG5cclxuICAgICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5QaXp6YS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyc3RDbGljaykge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaWQgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tNaXNzaW9uKGlkLCBub2RlKTtcclxuICAgICAgICBpZiAoY2hlY2spIHtcclxuXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGNoZWNrLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hlY2sucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1hZyA9IChwb3MueCA+IG5vZGUueCkgPyAtNTAgOiA1MDtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2MudjIobm9kZS54LCBub2RlLnkpO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIocG9zLngsIHBvcy55KTtcclxuICAgICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKGVuZFBvcy54ICsgbWFnLCBlbmRQb3MueSArIDIwMCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1baWQgLSAxXSk7XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBjYy52MyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pLnRvKDAuMiwgeyBzY2FsZTogMS4yIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pLmJlemllclRvKDAuNCwgc3RhcnRQb3MsIG1pZFBvcywgZW5kUG9zKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZE9rLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMF1dLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuZG9uZU5vZGUuY2hpbGRyZW5bdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVsxXV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBjaGVja0l0ZW0oaWQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWlzc2lvbltpXSA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnJJdGVtID0gW2ksIGpdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJJdGVtXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNoZWNrTWlzc2lvbihpZCwgbm9kZSkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gbWlzc2lvbltqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXVtqXSA9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlID0gW2ksIGpdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoaSwgailcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJLaGF5W2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJidG5Xcm9uZ1wiKVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmFyckN1c1swXSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmFuZ3J5KClcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpc0NvdW50Q3VzID0gM1xyXG4gICAgaXNDb3VudERvbmUgPSAwXHJcbiAgICBpc01vdmluZyA9IGZhbHNlXHJcbiAgICBjb2luQXJyID0gW11cclxuICAgIGNoZWNrU3VjY2VzcyhpLCBqKSB7Ly9jaGVjayBjdXMgaG9hbiB0aGFuaCBkb24gaGFuZyBjaHVhXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0S2hheSA9IHRoaXMuYXJyS2hheVtpXS5jaGlsZHJlbltqXTtcclxuICAgICAgICAgICAgICAgIHRhcmdldEtoYXkuZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5vZmZHcmF5KHRhcmdldEtoYXkuY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjIsIHsgc2NhbGU6IDIuNSB9KS50bygwLjEsIHsgc2NhbGU6IDIuMiB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjIsIHsgc2NhbGU6IDAuOSB9KS50bygwLjEsIHsgc2NhbGU6IDAuNjUgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAwLjQpXHJcbiAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZVxyXG4gICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgbWlzc2lvbi5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICBpZiAobWlzc2lvblttXSAhPSAxMDApIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb25lKytcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY3VzLmdldENoaWxkQnlOYW1lKFwidmZ4X2NvaW5cIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gY3VzLmdldENoaWxkQnlOYW1lKFwidmZ4X2NvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0Q3VzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjdXMucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmNhbWVyYS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zKTtcclxuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvcyk7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmJhckNvaW4uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKS5hZGQoY2MudjMoMCwgMCkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25Db2luc0Zyb21DdXN0b21lcihwb3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXUga2hpIHThu49hIHJhIHhvbmcgdGjDrCBtb3ZlIHbhu4EgdGhhbmggZ29sZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUNvaW5zVG9Hb2xkQmFyKHRoaXMuY29pbkFyciwgdGhpcy5iYXJDb2luKTtcclxuICAgICAgICAgICAgICAgIH0pOyBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5oYXBweSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlDb2luLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDUwXHJcbiAgICAgICAgICAgICAgICBpZiAobWlzc2lvbi5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuY29pbiArPSAxMDBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsVGhpcy5jb2luID49IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB9LCAwLjYpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubW92ZUN1c091dChpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnF1ZXVlTW92ZSh0aGlzLmFyckN1c1tpXSk7XHJcbiAgICAgICAgICAgIH0sIDAuOClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vIHJld2FyZEdvbGQoY3VzdG9tZXJOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgc3RhcnRQb3MgPSBjdXN0b21lck5vZGUucG9zaXRpb247XHJcbiAgICAvLyAgICAgY29uc3QgY29pbnM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vICAgICBjb25zdCBjb2luQ291bnQgPSA2O1xyXG4gICAgLy8gICAgIGNvbnN0IHJhZGl1cyA9IDEyMDtcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2luQ291bnQ7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBjb2luID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcclxuICAgIC8vICAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAvLyAgICAgICAgIGNvaW4uc2V0UG9zaXRpb24oc3RhcnRQb3MpO1xyXG4gICAgLy8gICAgICAgICBjb2lucy5wdXNoKGNvaW4pO1xyXG5cclxuICAgIC8vICAgICAgICAgY29uc3QgYW5nbGUgPSAoTWF0aC5QSSAqIDIgLyBjb2luQ291bnQpICogaTtcclxuICAgIC8vICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gc3RhcnRQb3MuYWRkKGNjLnYzKFxyXG4gICAgLy8gICAgICAgICAgICAgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLFxyXG4gICAgLy8gICAgICAgICAgICAgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzLFxyXG4gICAgLy8gICAgICAgICAgICAgMFxyXG4gICAgLy8gICAgICAgICApKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGNvaW4pXHJcbiAgICAvLyAgICAgICAgICAgICAudG8oMC4yNSwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLmRlbGF5KDAuMSlcclxuICAgIC8vICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gY29pbkNvdW50IC0gMSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDb2luc1RvR29sZEJhcihjb2lucywgdGhpcy5iYXJDb2luKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgc3Bhd25Db2luc0Zyb21DdXN0b21lcihzdGFydFBvczogY2MuVmVjMywgb25GaW5pc2g/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5jb2luQXJyID0gW11cclxuICAgICAgICBjb25zdCBjb2luQ291bnQgPSA2O1xyXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDcwOyAvLyDEkeG7mSB04buPYSByYVxyXG5cclxuICAgICAgICBsZXQgZmluaXNoZWQgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvaW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNvaW4pO1xyXG4gICAgICAgICAgICBjb2luLnBhcmVudCA9IHRoaXMuYmFyQ29pbjtcclxuICAgICAgICAgICAgY29pbi5zZXRQb3NpdGlvbihzdGFydFBvcyk7XHJcbiAgICAgICAgICAgIGNvaW4uc2NhbGUgPSAwLjhcclxuICAgICAgICAgICAgdGhpcy5jb2luQXJyLnB1c2goY29pbilcclxuICAgICAgICAgICAgLy8gcmFuZG9tIGjGsOG7m25nIHThu49hXHJcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKE1hdGguUEkgKiAyIC8gY29pbkNvdW50KSAqIGk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVJhZGl1cyA9IHJhZGl1cyArIE1hdGgucmFuZG9tKCkgKiA0MDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHN0YXJ0UG9zLmFkZChjYy52MyhcclxuICAgICAgICAgICAgICAgIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbVJhZGl1cyxcclxuICAgICAgICAgICAgICAgIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbVJhZGl1cyxcclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgICAgICAvLyB04buPYSByYVxyXG4gICAgICAgICAgICBjYy50d2Vlbihjb2luKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMjUsIHsgcG9zaXRpb246IHRhcmdldFBvcyB9LCB7IGVhc2luZzogXCJxdWFkT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjA1KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkID09PSBjb2luQ291bnQgJiYgb25GaW5pc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5pc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZUNvaW5zVG9Hb2xkQmFyKGNvaW5zOiBjYy5Ob2RlW10sIGdvbGRUYXJnZXQ6IGNjLk5vZGUpIHtcclxuICAgICAgICAvLyBjb25zdCB3b3JsZFBvcyA9IGdvbGRUYXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihnb2xkVGFyZ2V0LnBvc2l0aW9uKTtcclxuICAgICAgICBsZXQgbG9jYWwgPSBjYy52MygwLCAwKVxyXG4gICAgICAgIGNvaW5zLmZvckVhY2goKGNvaW4sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGxvY2FsID0gY29pbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oY29pbilcclxuICAgICAgICAgICAgICAgIC5kZWxheShpbmRleCAqIDAuMDUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiBsb2NhbCwgc2NhbGU6IDAuNSB9LCB7IGVhc2luZzogXCJxdWFkSW5cIiB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYWRkR29sZCgxKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlzRGVtID0gMFxyXG4gICAgZ2V0UGxhY2UoY3VzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzKTsgLy8gZ+G7jW4gaMahblxyXG5cclxuICAgIH1cclxuICAgIGVucXVldWVNb3ZlKGN1c05vZGUpIHtcclxuICAgICAgICB0aGlzLm1vdmVRdWV1ZS5wdXNoKGN1c05vZGUpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzUXVldWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZVF1ZXVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBjdXNOb2RlID0gdGhpcy5tb3ZlUXVldWUuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLl9tb3ZlQ3VzT3V0KGN1c05vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVRdWV1ZSA9IFtdO1xyXG4gICAgaXNQcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBfbW92ZUN1c091dChjdXNOb2RlKSB7XHJcbiAgICAgICAgLy8gaWYgKHBsYWNlIDwgMCB8fCBwbGFjZSA+PSB0aGlzLmFyckN1cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBsZXQgcGxhY2UgPSB0aGlzLmFyckN1cy5pbmRleE9mKGN1c05vZGUpO1xyXG5cclxuICAgICAgICAvLyBpZiAocGxhY2UgPCAwIHx8IHBsYWNlID49IHRoaXMuYXJyQ3VzLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmZpbmlzaE1vdmUoKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzQ291bnREb25lKVxyXG4gICAgICAgIGlmIChwbGFjZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICAvLyBsZXQgZmlyc3RDdXMgPSB0aGlzLmFyckN1c1twbGFjZV07XHJcbiAgICAgICAgbGV0IGZpcnN0Q3VzID0gY3VzTm9kZTtcclxuXHJcbiAgICAgICAgLy8gPT09PT0gU3Bhd24gY3VzdG9tZXIgdGnhur9wIHRoZW8gPT09PT1cclxuICAgICAgICBsZXQgbmV4dEN1cyA9IHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmlzQ291bnRDdXNdO1xyXG5cclxuICAgICAgICBpZiAobmV4dEN1cykge1xyXG4gICAgICAgICAgICBuZXh0Q3VzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBuZXh0Q3VzO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnRDdXMrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vID09PT09IFThuqFvIGN1c3RvbWVyIG3hu5tpIOG7nyBjdeG7kWkgPT09PT1cclxuICAgICAgICAvLyBsZXQgbmV3Q3VzID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJlQ3VzW3RoaXMuaXNEZW1dKTtcclxuICAgICAgICAvLyBuZXdDdXMucGFyZW50ID0gdGhpcy5saXN0Q3VzO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGFzdEN1cyA9IHRoaXMuYXJyQ3VzW3RoaXMuYXJyQ3VzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIC8vIG5ld0N1cy5wb3NpdGlvbiA9IGxhc3RDdXMucG9zaXRpb24uYWRkKGNjLnYzKDYwMCwgMCkpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmlzRGVtID0gKHRoaXMuaXNEZW0gKyAxKSAlIHRoaXMubGlzdFByZUN1cy5sZW5ndGg7IGBgXHJcbiAgICAgICAgLy8gdGhpcy5hcnJDdXMucHVzaChuZXdDdXMpO1xyXG5cclxuICAgICAgICAvLyA9PT09PSBNb3ZlIHRo4bqxbmcgYuG7iyBvdXQgPT09PT1cclxuICAgICAgICBmaXJzdEN1cy56SW5kZXggPSAtMTtcclxuICAgICAgICBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmlzU3VjY2VzcyA9IHRydWVcclxuICAgICAgICBjYy50d2VlbihmaXJzdEN1cylcclxuICAgICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgICAgICAgICAgLmJ5KDAuOCAqIChwbGFjZSArIDEpLCB7IHBvc2l0aW9uOiBjYy52MygtNDAwICogKHBsYWNlICsgMSksIDApIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICBjYy50d2VlbihmaXJzdEN1cylcclxuICAgICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyA9PT09PSBNb3ZlIGPDoWMgdGjhurFuZyBwaMOtYSBzYXUgPT09PT1cclxuICAgICAgICBmb3IgKGxldCBpID0gcGxhY2UgKyAxOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV07XHJcblxyXG4gICAgICAgICAgICBjYy50d2VlbihjaGlsZClcclxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAgICAgICAgICAgICAuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA9PT09PSBH4buNaSBsb2FkVGltZSDEkcO6bmcgMSBs4bqnbiA9PT09PVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzVGFyZ2V0Q3VzKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuaXNUYXJnZXRDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpO1xyXG4gICAgICAgIC8vICAgICB9LCAwLjQpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gPT09PT0gUmVtb3ZlIGto4buPaSBt4bqjbmcgPT09PT1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnNwbGljZShwbGFjZSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XHJcblxyXG4gICAgICAgIH0sIDEuMSk7XHJcblxyXG4gICAgICAgIC8vID09PT09IFNwYXduIGtoYXkgPT09PT1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnREb25lIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3TmV4dEtoYXkocGxhY2UpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudERvbmUgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpbmlzaE1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpOyAvLyBjaOG6oXkgdGnhur9wIHRo4bqxbmcga+G6vyB0aeG6v3BcclxuICAgIH1cclxuICAgIGNoZWNrU3VjY2Vzc0l0ZW0oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRydWVcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWlzc2lvbltqXSAhPSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaXNUYXJnZXRDdXM9bnVsbFxyXG4gICAgLy8gbW92ZUN1cygpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc0NvdW50Q3VzIDwgNykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5pc0NvdW50Q3VzXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5pc0NvdW50Q3VzXVxyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmlzQ291bnRDdXNdKVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnRDdXMrK1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQ3VzW2ldO1xyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihjaGlsZCkuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNjAwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1cy5zaGlmdCgpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgLy8gICAgIH0sIDAuNSlcclxuICAgIC8vICAgICB0aGlzLnNwYXdOZXh0S2hheSgpXHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIGl0ZW1RdWV1ZTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBzaHVmZmxlSXRlbSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1RdWV1ZSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtUXVldWUucHVzaChpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNodWZmbGUgRmlzaGVyLVlhdGVzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICAgICAgW3RoaXMuaXRlbVF1ZXVlW2ldLCB0aGlzLml0ZW1RdWV1ZVtqXV0gPSBbdGhpcy5pdGVtUXVldWVbal0sIHRoaXMuaXRlbVF1ZXVlW2ldXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV4dEl0ZW1JbmRleCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2h1ZmZsZUl0ZW0oKTsgLy8gdOG6oW8gbMaw4bujdCBt4bubaVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVF1ZXVlLnNoaWZ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdEl0ZW1JbmRleDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBzcGF3bkl0ZW0oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RSYXkubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdEl0ZW1JbmRleFtpXSA9IC0xOyAvLyBjaMawYSBjw7MgaXRlbSB0csaw4bubY1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zcGF3bkl0ZW1PblJheShpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25JdGVtT25SYXkoaW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBsZXQgbWFnID0gKGluZGV4ID09IDApID8gMTAwMCA6IC0xMDAwO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSXRlbShpbmRleDogbnVtYmVyLCBtYWc6IG51bWJlcikge1xyXG5cclxuICAgICAgICAvLyBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RJdGVtLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIC8vIC8vIHRyw6FuaCB0csO5bmcgaXRlbSB0csaw4bubY1xyXG4gICAgICAgIC8vIHdoaWxlIChyZCA9PT0gdGhpcy5sYXN0SXRlbUluZGV4W2luZGV4XSkge1xyXG4gICAgICAgIC8vICAgICByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEl0ZW0ubGVuZ3RoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IHJkID0gdGhpcy5nZXROZXh0SXRlbUluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5sYXN0SXRlbUluZGV4W2luZGV4XSA9IHJkO1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bcmRdKTtcclxuICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubGlzdFJheVtpbmRleF07XHJcblxyXG4gICAgICAgIHRoaXMuYXJySXRlbVtpbmRleF0ucHVzaChpdGVtKTtcclxuXHJcbiAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGNjLnYzKG1hZywgLTQwKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbShpdGVtLCBtYWcpO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW0oaXRlbTogY2MuTm9kZSwgbWFnKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFggPSAtbWFnO1xyXG4gICAgICAgIGNjLnR3ZWVuKGl0ZW0pXHJcbiAgICAgICAgICAgIC50bygxNywgeyB4OiB0YXJnZXRYIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmlkU291bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0R3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLWdyYXktc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG5cclxuICAgIH1cclxuICAgIG9mZkdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlQ2xvY2t0b1VJKG5vZGUxKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbVRvVUkobm9kZTEsIHRoaXMuYmFyVGltZS5jaGlsZHJlblsxXSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbVRvVUkobm9kZTEsIG5vZGUyKSB7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZGluLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgcG9zID0gbm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbilcclxuICAgICAgICBwb3MgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgLy8gcG9zID0gcG9zLmFkZChjYy52MygwLCAwKSlcclxuICAgICAgICBsZXQgcG9zMiA9IG5vZGUxLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTEucG9zaXRpb24pO1xyXG4gICAgICAgIHBvczIgPSB0aGlzLm1haW5DYW1lcmEuZ2V0V29ybGRUb1NjcmVlblBvaW50KHBvczIpO1xyXG4gICAgICAgIHBvczIgPSB0aGlzLnVpQ2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MyKTtcclxuICAgICAgICBwb3MyID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMikuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgICAgIG5vZGUxLnBhcmVudCA9IHRoaXMudWlOb2RlO1xyXG4gICAgICAgIG5vZGUxLnNjYWxlID0gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyAvIHRoaXMudWlDYW1lcmEuem9vbVJhdGlvICogMC43XHJcbiAgICAgICAgbm9kZTEucG9zaXRpb24gPSBwb3MyXHJcbiAgICAgICAgY2MudHdlZW4obm9kZTEpLnRvKDAuNCwgeyBwb3NpdGlvbjogcG9zLCBzY2FsZTogMC40IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAvLyB0aGlzLm1pc3Npb25CYXIuZ2V0Q29tcG9uZW50KFwidXBkYXRlQmFyXCIpLnVwZGF0ZUJhcigpO1xyXG4gICAgICAgICAgICAvLyB3b29kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJleHBcIilcclxuICAgICAgICAgICAgLy8gLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZE91dCwgZmFsc2UsIDEpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgaXNFbmRHYW1lID0gZmFsc2VcclxuICAgIG9uRW5kR2FtZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNFbmRHYW1lID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpXHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcclxuICAgICAgICAgICAgdGhpcy5hbWF6aW5nLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua1dpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmRDYXJkLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyVGltZS5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFyckN1cykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCI2LmFuZ3J5XCIsIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgICAgIHRoaXMudGltZXVwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5raW5nLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvc2UsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICBpc0RvYyA9IGZhbHNlXHJcbiAgICAvLyB1cGRhdGUoZHQpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxyXG4gICAgLy8gICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgIC8vICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHVwZGF0ZVJlc3BvbnNpdmUoKSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFyclBvc01lbnVOZ2FuZyA9IFtjYy52MygtMzkxLCAtMTAyKSwgY2MudjMoMzc1LCAtMTEyKSwgY2MudjMoMTE0LCAtMTIwKSwgY2MudjMoLTQwOSwgLTI4NCksIGNjLnYzKC0xNTgsIC0yOTYpLCBjYy52MygxMTgsIC0yODApLCBjYy52MygzOTAsIC0yOTYpLCBjYy52MygtMTM3LCAtMTE2KV07XHJcbiAgICBhcnJQb3NEb2MgPSBbY2MudjMoMjYsIC0zMzcpLCBjYy52MygzMzYsIC0xMTIpLCBjYy52MygxNS41LCAtMTIxKSwgY2MudjMoLTE3MCwgLTUyNS43KSwgY2MudjMoLTMwMCwgLTM1MiksIGNjLnYzKDE4Ni45NiwgLTUxMiksIGNjLnYzKDM1NSwgLTMzNSksIGNjLnYzKC0yOTIsIC0xMTYpXVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygtMjAwLCAxNDApIDogY2MudjMoMCwgNTApXHJcbiAgICAgICAgdGhpcy5iYXJDb2luLnNjYWxlID0gKGxvZ2ljKSA/IDIuNSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAobG9naWMpID8gMjEwIDogODBcclxuICAgICAgICB0aGlzLnBoYW9Ib2Euc2NhbGUgPSAobG9naWMpID8gOSA6IDVcclxuICAgICAgICB0aGlzLmd1aWxkLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxLjJcclxuICAgICAgICB0aGlzLmd1aWxkLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIC05MDApIDogY2MudjMoMCwgLTM2MClcclxuICAgICAgICB0aGlzLmxpc3RNZW51LnkgPSAobG9naWMpID8gLTgwIDogMFxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAxXHJcbiAgICAgICAgdGhpcy5saXN0S2hheS5zY2FsZSA9IChsb2dpYykgPyAxLjEgOiAxXHJcbiAgICAgICAgdGhpcy50aW1ldXAuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYW1hemluZy5zY2FsZSA9IChsb2dpYykgPyAxIDogMS40XHJcbiAgICAgICAgdGhpcy5iZy5zY2FsZSA9IChsb2dpYykgPyAyLjEgOiAxXHJcbiAgICAgICAgdGhpcy5iZy5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygtMjAwLCAwKSA6IGNjLnYzKDAsIDUwKVxyXG4gICAgICAgIHRoaXMubGlzdE1lbnUuc2NhbGUgPSAobG9naWMpID8gMS4xIDogMVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuNVxyXG4gICAgICAgIHRoaXMubm90aU1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMS42IDogMVxyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZENhcmREb2MuYWN0aXZlID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmVuZENhcmRXaW4uYWN0aXZlID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0RvYyA9IHRydWVcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuN1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJDb2luLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIwMFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0TWVudS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5hcnJQb3NEb2NbaV0pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5saXN0TWVudS5jaGlsZHJlbltpXS5wb3NpdGlvbiA9IHRoaXMuYXJyUG9zRG9jW2ldXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXBob25lWFwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjVcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmREb2Muc2NhbGUgPSAxLjJcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0TWVudS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5hcnJQb3NNZW51TmdhbmdbaV0pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5saXN0TWVudS5jaGlsZHJlbltpXS5wb3NpdGlvbiA9IHRoaXMuYXJyUG9zTWVudU5nYW5nW2ldXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0TWVudS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5hcnJQb3NEb2NbaV0pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5saXN0TWVudS5jaGlsZHJlbltpXS5wb3NpdGlvbiA9IHRoaXMuYXJyUG9zRG9jW2ldXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RvYyA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0TWVudS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmFyclBvc01lbnVOZ2FuZ1tpXSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubGlzdE1lbnUuY2hpbGRyZW5baV0ucG9zaXRpb24gPSB0aGlzLmFyclBvc01lbnVOZ2FuZ1tpXVxyXG5cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuODVcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19