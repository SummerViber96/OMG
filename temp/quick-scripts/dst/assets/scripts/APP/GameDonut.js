
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
        _this.soundNuongBanh = null;
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
        // @property(cc.Node)
        // phaoHoa: cc.Node = null;
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
        _this.isWin = false;
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
            this.barTime.getComponent("barTime").countDown();
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
        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.4);
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
            this.isWin = true;
            this.barTime.getComponent("barTime").endGame();
            this.amazing.active = true;
            cc.audioEngine.play(this.soundEnd, false, 1);
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
        this.barTime.scale = (logic) ? 1.5 : 1;
        this.barTime.getComponent(cc.Widget).top = (logic) ? 155 : 57;
        // this.phaoHoa.scale = (logic) ? 9 : 5
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
        if (this.isEndGame && this.isWin == true) {
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
        property(cc.AudioClip)
    ], NewClass.prototype, "soundNuongBanh", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FQUC9HYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7QUFFdkI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2aUNDO1FBM2lDRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBQzdCLDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFDbkMsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QywwQkFBMEI7UUFDMUIsdUNBQXVDO1FBRXZDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUV2QyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLG9CQUFjLEdBQWlCLElBQUksQ0FBQTtRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZUFBUyxHQUFpQixJQUFJLENBQUE7UUFFOUIsb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FB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QUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBRTdELHVDQUF1QztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENB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QUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQTNJVCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNmlDNUI7SUFBRCxlQUFDO0NBN2lDRCxBQTZpQ0MsQ0E3aUNxQyxFQUFFLENBQUMsU0FBUyxHQTZpQ2pEO2tCQTdpQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5nbG9iYWxUaGlzLmNvaW4gPSAwXG5nbG9iYWxUaGlzLkdhbWUgPSBmYWxzZVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kU2hvd1BvcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRPazogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIC8vIHNvdW5kSGVsbG86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICAvLyBzb3VuZEhlbGxvQ3VzMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIC8vIHNvdW5kSGVsbG9DdXMzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRUcmFuczogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICAvLyBzb3VuZERvbnV0SnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kRW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRTZWxsRG9uZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kVGhpbmtpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ3JlYW06IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ2hlcnJ5OiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFdyb25nOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZENyZWFtTWluaTogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRUaGlua1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRCYW5oOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZE51b25nQmFuaDogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZENhcmRXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q3VzOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICB1aUNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiYXJUaW1lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiYXJDb2luOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q2hlY2tJdGVtOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBjbG9ja1RpbWU6IGNjLk5vZGUgPSBudWxsXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gY2FrZTogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gY3JlZWFtOiBjYy5Ob2RlID0gbnVsbFxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIHBoYW9Ib2E6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGxpc3RIYW5kOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGd1aWxkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXG4gICAgbGlzdEl0ZW06IGNjLlByZWZhYltdID0gW11cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0UmF5OiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0S2hheTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVLaGF5OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGJ0bkRvd25sb2FkOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RSYXlOb2RlOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpbWV1cDogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhbWF6aW5nOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgbm90aUNvaW46IGNjLkFuaW1hdGlvbiA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub3RpTWlzc2lvbjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXG4gICAgbGlzdFByZUN1czogY2MuUHJlZmFiW10gPSBbXVxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhYmxlOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RNZW51OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kdHV0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kdHV0MjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZHR1dDM6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGJ0blBpenphOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlQ29pbjogY2MuUHJlZmFiID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZENhcmREb2M6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vbmV3XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEJlcDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdERpYTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuQ2hvY29sYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5TdHJhd2JlcnJ5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUJhbmg6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgYXJyQmVwID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxuICAgIGFyckRpYSA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV1cblxuXG4gICAgbWF4S2hheSA9IDdcblxuICAgIGFyckRvbnV0cG9zID0gW11cbiAgICAvLyBhcnJEb251dCA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXVxuICAgIC8vIGFycktoYXkgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cbiAgICAvLyBhcnJLaGF5UG9zID0gW11cbiAgICBpc1R1dENoaWxpID0gZmFsc2VcbiAgICBpc1R1dE1lYXQgPSBmYWxzZVxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXG4gICAgaXNUdXRDbGlja01lYXQgPSBmYWxzZVxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgLy8gc291bmRCZzpjYy5BdWRpb0NsaXA9bnVsbDtcblxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcbiAgICAvLyBpc1N0ZXAgPSAwXG4gICAgaXNUYXJnZXRDdXMgPSBudWxsO1xuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXG4gICAgY291bnRDdXMgPSAwXG4gICAgaWRTb3VuZCA9IG51bGxcbiAgICBpc1N0ZXAgPSAwXG4gICAgLy9pdGVtOiAwOmJ1Z2VyLCAxOiBrZW0gMjpkb251dCAzOmtob2FpdGF5IDQ6cGhvIDU6IHB1ZGRpbmcgNjogdHJhICA3OmJhbmhtaSA4OmNvY29udXRcbiAgICByYXlZOiBudW1iZXJbXSA9IFsxMjAsIDAsIC0xMjBdOyAgIC8vIHbhu4sgdHLDrSBZIGPhu6dhIDMgcmF5XG4gICAgc3Bhd25YOiBudW1iZXIgPSA3MDA7ICAgICAgICAgICAgICAvLyB24buLIHRyw60gc3Bhd24gYsOqbiBwaOG6o2lcbiAgICBhcnJJdGVtID0gW1tdLCBbXV1cbiAgICBhcnJLaGF5ID0gW11cbiAgICAvLyBhcnJNaXNzaW9uID0gW1s2LCA3XSwgWzMsIDJdLCBbMCwgNCwgMV0sIFswLCA4XSwgWzcsIDUsIDZdLCBbMywgMSwgMl0sIFsxLCAyLCA2XSwgWzgsIDMsIDJdLCBbMSwgMCwgNl0sIFsyLCA1XSwgWzQsIDYsIDBdLCBbNywgMV0sIFszLCAxLCAyXSwgWzUsIDgsIDZdLCBbMy40XSwgWzAsIDJdLCBbNywgMV1dXG4gICAgYXJyVGFyZ2V0TWlzc2lvbiA9IFtdXG4gICAgYXJyQ3VzID0gW11cbiAgICBpc1N0YXJ0Z2FtZSA9IGZhbHNlXG4gICAgaXNGaXJzdENsaWNrID0gZmFsc2VcbiAgICAvLzA6YmFuaCB0aHVvbmcgMTpjaG9jb2xhdGUgMjogc3RyYXdiZXJyeSBcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDdXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlbltpXSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcbiAgICAgICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm90aU1pc3Npb24pLmJ5KDAuNCwgeyBvcGFjaXR5OiAtMjU1LCBwb3NpdGlvbjogY2MudjMoMCwgMjAwKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlNaXNzaW9uLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9LCAxLjUpXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhcnRHYW1lKClcbiAgICAgICAgLy8gfSwgMC41KVxuICAgIH1cbiAgICBpc0hhbmQgPSBudWxsXG5cbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGN1cykuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBmaXJzdEN1cyA9IHRoaXMuYXJyQ3VzWzBdO1xuICAgICAgICAgICAgZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5zaG93TWlzc2lvbigpO1xuICAgICAgICAgICAgbGV0IG1pc3Npb24gPSBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLm9yZGVyO1xuICAgICAgICAgICAgdGhpcy5zcGF3S2hheShtaXNzaW9uKTtcblxuICAgICAgICB9LCAwLjUpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RDbGljayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0blBpenphLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJidG5IaW5kR1wiKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzKVxuXG4gICAgfVxuICAgIGlzRmlyc3RDbGlja2JhbmggPSBmYWxzZVxuICAgIGlzRnJpc3QgPSBmYWxzZVxuICAgIGJ0bl9iYW5oKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNGcmlzdCkge1xuICAgICAgICAgICAgdGhpcy5pc0ZyaXN0ID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpXG4gICAgICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5jb3VudERvd24oKVxuXG4gICAgICAgIH1cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxuICAgICAgICB0aGlzLmlzRmlyc3RDbGljayA9IHRydWVcbiAgICAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0Q2xpY2tiYW5oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2tiYW5oID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZHR1dDIuYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgMilcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5nZXRTbG90QmVwKCk7XG4gICAgICAgIGlmIChjaGVjayAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFyckJlcFtjaGVja10gPSB0cnVlOztcbiAgICAgICAgICAgIHRoaXMubGlzdEJlcC5jaGlsZHJlbltjaGVja10uZ2V0Q29tcG9uZW50KFwiQmFuaFwiKS5zZXRPbigpXG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNGaXJzdFN0ZXAgPSBmYWxzZVxuICAgIGJ0bl9iZXAodGFnKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcbiAgICAgICAgdGhpcy5oYW5kdHV0Mi5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdFN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZHR1dDMuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0U3RlcCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmdldFNsb3REaWEoKTtcbiAgICAgICAgaWYgKGNoZWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyRGlhW2NoZWNrXSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMubGlzdERpYS5jaGlsZHJlbltjaGVja10uZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmdldEJhbmgoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2xvdEJlcCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckJlcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJCZXBbaV1cbiAgICAgICAgICAgIGlmIChjaGlsZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgZ2V0U2xvdERpYSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckRpYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0RGlhLmNoaWxkcmVuW2ldXG4gICAgICAgICAgICBpZiAoY2hpbGQuZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmlzQmFuaCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgYnRuX3N0cmF3QmVycnkoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyRGlhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBsZXQgY2hlY2sgPSB0aGlzLmFyckRpYVtpXTtcbiAgICAgICAgICAgIGxldCBiYW5oID0gdGhpcy5saXN0RGlhLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLnN0YXR1cyA9PSAwICYmIGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmlzQmFuaCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kdHV0My5hY3RpdmUgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc2V0U3RhdHVzKDIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnRuX2Nob2NvbGF0ZSgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEaWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGxldCBjaGVjayA9IHRoaXMuYXJyRGlhW2ldO1xuICAgICAgICAgICAgbGV0IGJhbmggPSB0aGlzLmxpc3REaWEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuc3RhdHVzID09IDAgJiYgYmFuaC5nZXRDb21wb25lbnQoXCJEaWFcIikuaXNCYW5oID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmR0dXQzLmFjdGl2ZSA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zZXRTdGF0dXMoMSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBidG5fY3JlYW0oKSB7XG5cblxuICAgIH1cbiAgICBpc0ZseWluZyA9IGZhbHNlXG4gICAgYnRuX3NlbGwoaXRlbSwgdGFnKSB7XG4gICAgICAgIC8vIGlmKHRoaXMuaXNNb3ZpbmcpcmV0dXJuO1xuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrTWlzc2lvbih0YWcsIGl0ZW0pO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXG4gICAgICAgIGxldCBtYWcgPSA1MFxuICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52MihpdGVtLngsIGl0ZW0ueSk7XG4gICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLmFyckN1c1swXS5nZXRDaGlsZEJ5TmFtZShcImJ1YmJsZXNcIikucG9zaXRpb24uYWRkKGNjLnYzKC0zMCwgMTIwKSlcbiAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKGVuZFBvcy54ICsgbWFnLCBlbmRQb3MueSArIDIwMCk7XG5cbiAgICAgICAgbGV0IGJhbmggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUJhbmgpO1xuICAgICAgICBiYW5oLnBhcmVudCA9IGl0ZW0ucGFyZW50O1xuICAgICAgICBiYW5oLnBvc2l0aW9uID0gY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XG4gICAgICAgIGJhbmguZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5sb2FkSXRlbSh0YWcpXG5cbiAgICAgICAgY2MudHdlZW4oYmFuaCkudG8oMC4yLCB7IHNjYWxlOiAxLjIgfSkuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4oYmFuaCkuYmV6aWVyVG8oMC40LCBzdGFydFBvcywgbWlkUG9zLCBlbmRQb3MpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kT2ssIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMF1dLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuZG9uZU5vZGUuY2hpbGRyZW5bdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVsxXV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuYW5ncnkoKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiYW5oLmRlc3Ryb3koKVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIC8vIH1cblxuICAgIH1cbiAgICAvLyBjaGVja01pc3Npb24odGFnKSB7XG4gICAgLy8gICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5vcmRlclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pc3Npb24ubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgIGlmIChtaXNzaW9uW2ldID09IHRhZykge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuZG9uZU5vZGUuY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIHNwYXdLaGF5KG1pc3Npb24pIHtcbiAgICAgICAgbGV0IGFyciA9IFtjYy52MygtNjAsIC0xMCksIGNjLnYzKDgwLCAtMTApXVxuICAgICAgICBpZiAobWlzc2lvbi5sZW5ndGggPT0gMykge1xuICAgICAgICAgICAgYXJyID0gW2NjLnYzKC03NSwgLTEwKSwgY2MudjMoMzAsIC0xMCksIGNjLnYzKDEyMCwgLTEwKV1cbiAgICAgICAgfVxuICAgICAgICBsZXQga2hheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheSk7XG4gICAgICAgIGtoYXkucGFyZW50ID0gdGhpcy5saXN0S2hheTtcbiAgICAgICAga2hheS5wb3NpdGlvbiA9IGNjLnYzKC0xMDAsIDUwKVxuICAgICAgICB0aGlzLmFycktoYXkucHVzaChraGF5KVxuICAgICAgICB0aGlzLmxvYWREYXRhS2hheShtaXNzaW9uLCBraGF5KVxuICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24ucHVzaChtaXNzaW9uKVxuICAgIH1cblxuICAgIGlzVGFyZ2V0SXRlbVBsYWNlID0gW11cbiAgICAvLyBjb3VudE1pc3MgPSAzXG4gICAgc3Bhd05leHRLaGF5KHBsYWNlKSB7XG4gICAgICAgIGxldCBmaXJzdEN1cyA9IHRoaXMuYXJyQ3VzWzFdO1xuICAgICAgICBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLnNob3dNaXNzaW9uKCk7XG4gICAgICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKTtcblxuICAgICAgICBsZXQgbWlzc2lvbiA9IGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikub3JkZXI7XG4gICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5zcGxpY2UocGxhY2UsIDEpXG4gICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5wdXNoKG1pc3Npb24pXG4gICAgICAgIGxldCBwb3MgPSBjYy52MygxMjAwLCAwKTtcbiAgICAgICAgbGV0IHByZUtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpXG4gICAgICAgIHByZUtoYXkucGFyZW50ID0gdGhpcy5saXN0S2hheTtcbiAgICAgICAgcHJlS2hheS5wb3NpdGlvbiA9IHBvc1xuICAgICAgICB0aGlzLmFycktoYXkucHVzaChwcmVLaGF5KVxuICAgICAgICB0aGlzLmxvYWREYXRhS2hheShtaXNzaW9uLCBwcmVLaGF5KVxuICAgICAgICBwcmVLaGF5LnBvc2l0aW9uID0gY2MudjMoLTEwMCArIDQwMCwgNTApXG4gICAgICAgIGxldCB0YXJnZXRLaGF5ID0gdGhpcy5hcnJLaGF5W3BsYWNlXVxuICAgICAgICBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBsYWNlICsgMTsgaSA8IHRoaXMuYXJyS2hheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGtoYXkgPSB0aGlzLmFycktoYXlbaV1cbiAgICAgICAgICAgIGNjLnR3ZWVuKGtoYXkpLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJLaGF5W2kgLSAxXSA9IGtoYXlcblxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdFJheVswXSkuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KS5zdGFydCgpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXJyS2hheS5zcGxpY2UocGxhY2UsIDEpO1xuXG4gICAgICAgIH0sIDAuMilcbiAgICB9XG4gICAgbG9hZERhdGFLaGF5KGRhdGEsIGtoYXkpIHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBhcnIgPSBbY2MudjMoLTYwLCAtMzApLCBjYy52Myg4MCwgLTMwKV1cblxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgICAgICBhcnIgPSBbY2MudjMoLTc1LCAtMzApLCBjYy52MygzMCwgLTMwKSwgY2MudjMoMTIwLCAtMzApXVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtkYXRhW2ldIC0gMV0pXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSBraGF5XG4gICAgICAgICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGFycltpXVxuICAgICAgICAgICAgICAgIGl0ZW0uc2NhbGUgPSAwLjY4XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIkl0ZW1cIikubG9hZEdyYXkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZpcnN0Q2xpY2sgPSBmYWxzZVxuICAgIGJ0bl9jbGlja0J0bihldmVudCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpXG5cbiAgICAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0blBpenphLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuZmlyc3RDbGljaykge1xuICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgfVxuICAgICAgICBsZXQgaWQgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgIGxldCBub2RlID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja01pc3Npb24oaWQsIG5vZGUpO1xuICAgICAgICBpZiAoY2hlY2spIHtcblxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxuICAgICAgICAgICAgbGV0IHBvcyA9IGNoZWNrLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hlY2sucG9zaXRpb24pO1xuICAgICAgICAgICAgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcblxuICAgICAgICAgICAgbGV0IG1hZyA9IChwb3MueCA+IG5vZGUueCkgPyAtNTAgOiA1MDtcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKG5vZGUueCwgbm9kZS55KTtcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBjYy52Mihwb3MueCwgcG9zLnkpO1xuICAgICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKGVuZFBvcy54ICsgbWFnLCBlbmRQb3MueSArIDIwMCk7XG5cbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtpZCAtIDFdKTtcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pLnRvKDAuMiwgeyBzY2FsZTogMS4yIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICBjYy50d2VlbihpdGVtKS5iZXppZXJUbygwLjQsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kT2ssIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMF1dLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuZG9uZU5vZGUuY2hpbGRyZW5bdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVsxXV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBjaGVja0l0ZW0oaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyclRhcmdldE1pc3Npb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3Npb25baV0gPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyckl0ZW0gPSBbaSwgal07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJJdGVtXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG5cblxuICAgIGNoZWNrTWlzc2lvbihpZCwgbm9kZSkge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWlzc2lvbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PSBtaXNzaW9uW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXVtqXSA9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEl0ZW1QbGFjZSA9IFtpLCBqXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBqKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJLaGF5W2ldLmNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImJ0bldyb25nXCIpXG4gICAgICAgIC8vIGlmICh0aGlzLmFyckN1c1swXSkge1xuICAgICAgICAvLyAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5hbmdyeSgpXG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlzQ291bnRDdXMgPSAzXG4gICAgaXNDb3VudERvbmUgPSAwXG4gICAgaXNNb3ZpbmcgPSBmYWxzZVxuICAgIGNvaW5BcnIgPSBbXVxuICAgIGNoZWNrU3VjY2VzcyhpLCBqKSB7Ly9jaGVjayBjdXMgaG9hbiB0aGFuaCBkb24gaGFuZyBjaHVhXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChqICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0S2hheSA9IHRoaXMuYXJyS2hheVtpXS5jaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICB0YXJnZXRLaGF5LmdldENvbXBvbmVudChcIkl0ZW1cIikub2ZmR3JheSh0YXJnZXRLaGF5LmNoaWxkcmVuWzFdKVxuICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMiwgeyBzY2FsZTogMi41IH0pLnRvKDAuMSwgeyBzY2FsZTogMi4yIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjIsIHsgc2NhbGU6IDAuOSB9KS50bygwLjEsIHsgc2NhbGU6IDAuNjUgfSkuc3RhcnQoKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgMC40KVxuICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZVxuICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBtaXNzaW9uLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgICBpZiAobWlzc2lvblttXSAhPSAxMDApIHtcbiAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb25lKytcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjdXMuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhfY29pblwiKS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgLy8gY3VzLmdldENoaWxkQnlOYW1lKFwidmZ4X2NvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubGlzdEN1cy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY3VzLnBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFdvcmxkVG9TY3JlZW5Qb2ludChwb3MpO1xuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvcyk7XG4gICAgICAgICAgICAgICAgcG9zID0gdGhpcy5iYXJDb2luLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcykuYWRkKGNjLnYzKDAsIDApKVxuXG4gICAgICAgICAgICAgICAgLy8gcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduQ29pbnNGcm9tQ3VzdG9tZXIocG9zLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdSBraGkgdOG7j2EgcmEgeG9uZyB0aMOsIG1vdmUgduG7gSB0aGFuaCBnb2xkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUNvaW5zVG9Hb2xkQmFyKHRoaXMuY29pbkFyciwgdGhpcy5iYXJDb2luKTtcbiAgICAgICAgICAgICAgICB9KTsgY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuaGFwcHkoKVxuICAgICAgICAgICAgICAgIHRoaXMubm90aUNvaW4ucGxheSgpXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDUwXG4gICAgICAgICAgICAgICAgaWYgKG1pc3Npb24ubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDEwMFxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxUaGlzLmNvaW4gPj0gMTAwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTZWxsRG9uZSwgZmFsc2UsIDEpXG4gICAgICAgICAgICB9LCAwLjYpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb3ZlQ3VzT3V0KGkpXG4gICAgICAgICAgICAgICAgdGhpcy5lbnF1ZXVlTW92ZSh0aGlzLmFyckN1c1tpXSk7XG4gICAgICAgICAgICB9LCAwLjgpXG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIHJld2FyZEdvbGQoY3VzdG9tZXJOb2RlOiBjYy5Ob2RlKSB7XG4gICAgLy8gICAgIGNvbnN0IHN0YXJ0UG9zID0gY3VzdG9tZXJOb2RlLnBvc2l0aW9uO1xuICAgIC8vICAgICBjb25zdCBjb2luczogY2MuTm9kZVtdID0gW107XG5cbiAgICAvLyAgICAgY29uc3QgY29pbkNvdW50ID0gNjtcbiAgICAvLyAgICAgY29uc3QgcmFkaXVzID0gMTIwO1xuXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29pbkNvdW50OyBpKyspIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNvaW4pO1xuICAgIC8vICAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgLy8gICAgICAgICBjb2luLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcbiAgICAvLyAgICAgICAgIGNvaW5zLnB1c2goY29pbik7XG5cbiAgICAvLyAgICAgICAgIGNvbnN0IGFuZ2xlID0gKE1hdGguUEkgKiAyIC8gY29pbkNvdW50KSAqIGk7XG4gICAgLy8gICAgICAgICBjb25zdCB0YXJnZXRQb3MgPSBzdGFydFBvcy5hZGQoY2MudjMoXG4gICAgLy8gICAgICAgICAgICAgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLFxuICAgIC8vICAgICAgICAgICAgIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cyxcbiAgICAvLyAgICAgICAgICAgICAwXG4gICAgLy8gICAgICAgICApKTtcblxuICAgIC8vICAgICAgICAgY2MudHdlZW4oY29pbilcbiAgICAvLyAgICAgICAgICAgICAudG8oMC4yNSwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxuICAgIC8vICAgICAgICAgICAgIC5kZWxheSgwLjEpXG4gICAgLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gY29pbkNvdW50IC0gMSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ29pbnNUb0dvbGRCYXIoY29pbnMsIHRoaXMuYmFyQ29pbik7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIHNwYXduQ29pbnNGcm9tQ3VzdG9tZXIoc3RhcnRQb3M6IGNjLlZlYzMsIG9uRmluaXNoPzogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmNvaW5BcnIgPSBbXVxuICAgICAgICBjb25zdCBjb2luQ291bnQgPSA2O1xuICAgICAgICBjb25zdCByYWRpdXMgPSA3MDsgLy8gxJHhu5kgdOG7j2EgcmFcblxuICAgICAgICBsZXQgZmluaXNoZWQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29pbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNvaW4pO1xuICAgICAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLmJhckNvaW47XG4gICAgICAgICAgICBjb2luLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcbiAgICAgICAgICAgIGNvaW4uc2NhbGUgPSAwLjhcbiAgICAgICAgICAgIHRoaXMuY29pbkFyci5wdXNoKGNvaW4pXG4gICAgICAgICAgICAvLyByYW5kb20gaMaw4bubbmcgdOG7j2FcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKE1hdGguUEkgKiAyIC8gY29pbkNvdW50KSAqIGk7XG4gICAgICAgICAgICBjb25zdCByYW5kb21SYWRpdXMgPSByYWRpdXMgKyBNYXRoLnJhbmRvbSgpICogNDA7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHN0YXJ0UG9zLmFkZChjYy52MyhcbiAgICAgICAgICAgICAgICBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb21SYWRpdXMsXG4gICAgICAgICAgICAgICAgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tUmFkaXVzLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICAvLyB04buPYSByYVxuICAgICAgICAgICAgY2MudHdlZW4oY29pbilcbiAgICAgICAgICAgICAgICAudG8oMC4yNSwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjA1KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkID09PSBjb2luQ291bnQgJiYgb25GaW5pc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmVDb2luc1RvR29sZEJhcihjb2luczogY2MuTm9kZVtdLCBnb2xkVGFyZ2V0OiBjYy5Ob2RlKSB7XG4gICAgICAgIC8vIGNvbnN0IHdvcmxkUG9zID0gZ29sZFRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGdvbGRUYXJnZXQucG9zaXRpb24pO1xuICAgICAgICBsZXQgbG9jYWwgPSBjYy52MygwLCAwKVxuICAgICAgICBjb2lucy5mb3JFYWNoKChjb2luLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3QgbG9jYWwgPSBjb2luLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4pXG4gICAgICAgICAgICAgICAgLmRlbGF5KGluZGV4ICogMC4wNSlcbiAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiBsb2NhbCwgc2NhbGU6IDAuNSB9LCB7IGVhc2luZzogXCJxdWFkSW5cIiB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29pbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYWRkR29sZCgxKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNEZW0gPSAwXG4gICAgZ2V0UGxhY2UoY3VzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyckN1cy5pbmRleE9mKGN1cyk7IC8vIGfhu41uIGjGoW5cblxuICAgIH1cbiAgICBlbnF1ZXVlTW92ZShjdXNOb2RlKSB7XG4gICAgICAgIHRoaXMubW92ZVF1ZXVlLnB1c2goY3VzTm9kZSk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7XG4gICAgfVxuICAgIHByb2Nlc3NRdWV1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLm1vdmVRdWV1ZS5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgICAgbGV0IGN1c05vZGUgPSB0aGlzLm1vdmVRdWV1ZS5zaGlmdCgpO1xuICAgICAgICB0aGlzLl9tb3ZlQ3VzT3V0KGN1c05vZGUpO1xuICAgIH1cblxuICAgIG1vdmVRdWV1ZSA9IFtdO1xuICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIF9tb3ZlQ3VzT3V0KGN1c05vZGUpIHtcbiAgICAgICAgLy8gaWYgKHBsYWNlIDwgMCB8fCBwbGFjZSA+PSB0aGlzLmFyckN1cy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgbGV0IHBsYWNlID0gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXNOb2RlKTtcblxuICAgICAgICAvLyBpZiAocGxhY2UgPCAwIHx8IHBsYWNlID49IHRoaXMuYXJyQ3VzLmxlbmd0aCkge1xuICAgICAgICAvLyAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc0NvdW50RG9uZSlcbiAgICAgICAgaWYgKHBsYWNlID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcbiAgICAgICAgLy8gbGV0IGZpcnN0Q3VzID0gdGhpcy5hcnJDdXNbcGxhY2VdO1xuICAgICAgICBsZXQgZmlyc3RDdXMgPSBjdXNOb2RlO1xuXG4gICAgICAgIC8vID09PT09IFNwYXduIGN1c3RvbWVyIHRp4bq/cCB0aGVvID09PT09XG4gICAgICAgIGxldCBuZXh0Q3VzID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuaXNDb3VudEN1c107XG5cbiAgICAgICAgaWYgKG5leHRDdXMpIHtcbiAgICAgICAgICAgIG5leHRDdXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBuZXh0Q3VzO1xuICAgICAgICAgICAgdGhpcy5pc0NvdW50Q3VzKys7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA9PT09PSBU4bqhbyBjdXN0b21lciBt4bubaSDhu58gY3Xhu5FpID09PT09XG4gICAgICAgIC8vIGxldCBuZXdDdXMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVDdXNbdGhpcy5pc0RlbV0pO1xuICAgICAgICAvLyBuZXdDdXMucGFyZW50ID0gdGhpcy5saXN0Q3VzO1xuXG4gICAgICAgIC8vIGxldCBsYXN0Q3VzID0gdGhpcy5hcnJDdXNbdGhpcy5hcnJDdXMubGVuZ3RoIC0gMV07XG4gICAgICAgIC8vIG5ld0N1cy5wb3NpdGlvbiA9IGxhc3RDdXMucG9zaXRpb24uYWRkKGNjLnYzKDYwMCwgMCkpO1xuXG4gICAgICAgIC8vIHRoaXMuaXNEZW0gPSAodGhpcy5pc0RlbSArIDEpICUgdGhpcy5saXN0UHJlQ3VzLmxlbmd0aDsgYGBcbiAgICAgICAgLy8gdGhpcy5hcnJDdXMucHVzaChuZXdDdXMpO1xuXG4gICAgICAgIC8vID09PT09IE1vdmUgdGjhurFuZyBi4buLIG91dCA9PT09PVxuICAgICAgICBmaXJzdEN1cy56SW5kZXggPSAtMTtcbiAgICAgICAgZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5pc1N1Y2Nlc3MgPSB0cnVlXG4gICAgICAgIGNjLnR3ZWVuKGZpcnN0Q3VzKVxuICAgICAgICAgICAgLmRlbGF5KDAuMylcbiAgICAgICAgICAgIC5ieSgwLjggKiAocGxhY2UgKyAxKSwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCAqIChwbGFjZSArIDEpLCAwKSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgY2MudHdlZW4oZmlyc3RDdXMpXG4gICAgICAgICAgICAuZGVsYXkoMC4zKVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAvLyA9PT09PSBNb3ZlIGPDoWMgdGjhurFuZyBwaMOtYSBzYXUgPT09PT1cbiAgICAgICAgZm9yIChsZXQgaSA9IHBsYWNlICsgMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckN1c1tpXTtcblxuICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMylcbiAgICAgICAgICAgICAgICAuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gPT09PT0gR+G7jWkgbG9hZFRpbWUgxJHDum5nIDEgbOG6p24gPT09PT1cbiAgICAgICAgLy8gaWYgKHRoaXMuaXNUYXJnZXRDdXMpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmlzVGFyZ2V0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKTtcbiAgICAgICAgLy8gICAgIH0sIDAuNCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyA9PT09PSBSZW1vdmUga2jhu49pIG3huqNuZyA9PT09PVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFyckN1cy5zcGxpY2UocGxhY2UsIDEpO1xuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XG5cbiAgICAgICAgfSwgMS4xKTtcblxuICAgICAgICAvLyA9PT09PSBTcGF3biBraGF5ID09PT09XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnREb25lIDwgNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd05leHRLaGF5KHBsYWNlKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwLjMpO1xuICAgICAgICBpZiAodGhpcy5pc0NvdW50RG9uZSA9PSA1KSB7XG4gICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmlzaE1vdmUoKSB7XG4gICAgICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7IC8vIGNo4bqheSB0aeG6v3AgdGjhurFuZyBr4bq/IHRp4bq/cFxuICAgIH1cbiAgICBjaGVja1N1Y2Nlc3NJdGVtKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xuICAgICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XG4gICAgICAgICAgICBsZXQgY2hlY2sgPSB0cnVlXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2lvbltqXSAhPSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKGksIG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGlzVGFyZ2V0Q3VzPW51bGxcbiAgICAvLyBtb3ZlQ3VzKCkge1xuICAgIC8vICAgICBpZiAodGhpcy5pc0NvdW50Q3VzIDwgNykge1xuICAgIC8vICAgICAgICAgdGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuaXNDb3VudEN1c10uYWN0aXZlID0gdHJ1ZVxuICAgIC8vICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmlzQ291bnRDdXNdXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmlzQ291bnRDdXNdKVxuICAgIC8vICAgICAgICAgdGhpcy5pc0NvdW50Q3VzKytcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckN1c1tpXTtcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC02MDAsIDApIH0pLmNhbGwoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpXG5cbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KS5zdGFydCgpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5hcnJDdXMuc2hpZnQoKVxuICAgIC8vICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXG4gICAgLy8gICAgIH0sIDAuNSlcbiAgICAvLyAgICAgdGhpcy5zcGF3TmV4dEtoYXkoKVxuXG4gICAgLy8gfVxuXG4gICAgaXRlbVF1ZXVlOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgc2h1ZmZsZUl0ZW0oKSB7XG4gICAgICAgIHRoaXMuaXRlbVF1ZXVlID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1RdWV1ZS5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2h1ZmZsZSBGaXNoZXItWWF0ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICBbdGhpcy5pdGVtUXVldWVbaV0sIHRoaXMuaXRlbVF1ZXVlW2pdXSA9IFt0aGlzLml0ZW1RdWV1ZVtqXSwgdGhpcy5pdGVtUXVldWVbaV1dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TmV4dEl0ZW1JbmRleCgpIHtcblxuICAgICAgICBpZiAodGhpcy5pdGVtUXVldWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2h1ZmZsZUl0ZW0oKTsgLy8gdOG6oW8gbMaw4bujdCBt4bubaVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVF1ZXVlLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgbGFzdEl0ZW1JbmRleDogbnVtYmVyW10gPSBbXTtcblxuICAgIHNwYXduSXRlbSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RSYXkubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgdGhpcy5sYXN0SXRlbUluZGV4W2ldID0gLTE7IC8vIGNoxrBhIGPDsyBpdGVtIHRyxrDhu5tjXG5cbiAgICAgICAgICAgIHRoaXMuc3Bhd25JdGVtT25SYXkoaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGF3bkl0ZW1PblJheShpbmRleDogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IG1hZyA9IChpbmRleCA9PSAwKSA/IDEwMDAgOiAtMTAwMDtcblxuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XG4gICAgICAgIH0sIDIpO1xuICAgIH1cblxuICAgIGNyZWF0ZUl0ZW0oaW5kZXg6IG51bWJlciwgbWFnOiBudW1iZXIpIHtcblxuICAgICAgICAvLyBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RJdGVtLmxlbmd0aCk7XG5cbiAgICAgICAgLy8gLy8gdHLDoW5oIHRyw7luZyBpdGVtIHRyxrDhu5tjXG4gICAgICAgIC8vIHdoaWxlIChyZCA9PT0gdGhpcy5sYXN0SXRlbUluZGV4W2luZGV4XSkge1xuICAgICAgICAvLyAgICAgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RJdGVtLmxlbmd0aCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IHJkID0gdGhpcy5nZXROZXh0SXRlbUluZGV4KCk7XG4gICAgICAgIHRoaXMubGFzdEl0ZW1JbmRleFtpbmRleF0gPSByZDtcblxuICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bcmRdKTtcbiAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmxpc3RSYXlbaW5kZXhdO1xuXG4gICAgICAgIHRoaXMuYXJySXRlbVtpbmRleF0ucHVzaChpdGVtKTtcblxuICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMobWFnLCAtNDApO1xuXG4gICAgICAgIHRoaXMubW92ZUl0ZW0oaXRlbSwgbWFnKTtcbiAgICB9XG4gICAgbW92ZUl0ZW0oaXRlbTogY2MuTm9kZSwgbWFnKSB7XG4gICAgICAgIGxldCB0YXJnZXRYID0gLW1hZztcbiAgICAgICAgY2MudHdlZW4oaXRlbSlcbiAgICAgICAgICAgIC50bygxNywgeyB4OiB0YXJnZXRYIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjQpXG5cbiAgICB9XG5cblxuICAgIHNldEdyYXkobm9kZSkge1xuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XG5cbiAgICB9XG4gICAgb2ZmR3JheShub2RlKSB7XG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XG4gICAgfVxuICAgIG1vdmVDbG9ja3RvVUkobm9kZTEpIHtcbiAgICAgICAgdGhpcy5tb3ZlSXRlbVRvVUkobm9kZTEsIHRoaXMuYmFyVGltZS5jaGlsZHJlblsxXSk7XG4gICAgfVxuICAgIG1vdmVJdGVtVG9VSShub2RlMSwgbm9kZTIpIHtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZGluLCBmYWxzZSwgMSlcbiAgICAgICAgbGV0IHBvcyA9IG5vZGUyLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTIucG9zaXRpb24pXG4gICAgICAgIHBvcyA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgLy8gcG9zID0gcG9zLmFkZChjYy52MygwLCAwKSlcbiAgICAgICAgbGV0IHBvczIgPSBub2RlMS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUxLnBvc2l0aW9uKTtcbiAgICAgICAgcG9zMiA9IHRoaXMubWFpbkNhbWVyYS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zMik7XG4gICAgICAgIHBvczIgPSB0aGlzLnVpQ2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MyKTtcbiAgICAgICAgcG9zMiA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpLmFkZChjYy52MygwLCAwKSlcbiAgICAgICAgbm9kZTEucGFyZW50ID0gdGhpcy51aU5vZGU7XG4gICAgICAgIG5vZGUxLnNjYWxlID0gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyAvIHRoaXMudWlDYW1lcmEuem9vbVJhdGlvICogMC43XG4gICAgICAgIG5vZGUxLnBvc2l0aW9uID0gcG9zMlxuICAgICAgICBjYy50d2Vlbihub2RlMSkudG8oMC40LCB7IHBvc2l0aW9uOiBwb3MsIHNjYWxlOiAwLjQgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBub2RlMS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgLy8gdGhpcy5taXNzaW9uQmFyLmdldENvbXBvbmVudChcInVwZGF0ZUJhclwiKS51cGRhdGVCYXIoKTtcbiAgICAgICAgICAgIC8vIHdvb2QuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImV4cFwiKVxuICAgICAgICAgICAgLy8gLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZE91dCwgZmFsc2UsIDEpXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9XG4gICAgaXNFbmRHYW1lID0gZmFsc2VcbiAgICBpc1dpbiA9IGZhbHNlXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IHRydWVcbiAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKVxuXG4gICAgICAgIH0sIDAuNSlcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNXaW4gPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcbiAgICAgICAgICAgIHRoaXMuYW1hemluZy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5rV2luLCBmYWxzZSwgMSlcbiAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5kQ2FyZC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9LCAwLjUpXG5cblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5iYXJUaW1lLmdldENvbXBvbmVudChcImJhclRpbWVcIikuZW5kR2FtZSgpXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFyckN1cykge1xuICAgICAgICAgICAgICAgIGNoaWxkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiNi5hbmdyeVwiLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXG4gICAgICAgICAgICB0aGlzLnRpbWV1cC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5raW5nLCBmYWxzZSwgMSlcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRMb3NlLCBmYWxzZSwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIDAuNSlcblxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXG4gICAgfVxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XG4gICAgaXNEb2MgPSBmYWxzZVxuICAgIC8vIHVwZGF0ZShkdCkge1xuICAgIC8vICAgICAvLyB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxuICAgIC8vICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgLy8gICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIHVwZGF0ZVJlc3BvbnNpdmUoKSB7XG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXJyUG9zTWVudU5nYW5nID0gW2NjLnYzKC0zOTEsIC0xMDIpLCBjYy52MygzNzUsIC0xMTIpLCBjYy52MygxMTQsIC0xMjApLCBjYy52MygtNDA5LCAtMjg0KSwgY2MudjMoLTE1OCwgLTI5NiksIGNjLnYzKDExOCwgLTI4MCksIGNjLnYzKDM5MCwgLTI5NiksIGNjLnYzKC0xMzcsIC0xMTYpXTtcbiAgICBhcnJQb3NEb2MgPSBbY2MudjMoMjYsIC0zMzcpLCBjYy52MygzMzYsIC0xMTIpLCBjYy52MygxNS41LCAtMTIxKSwgY2MudjMoLTE3MCwgLTUyNS43KSwgY2MudjMoLTMwMCwgLTM1MiksIGNjLnYzKDE4Ni45NiwgLTUxMiksIGNjLnYzKDM1NSwgLTMzNSksIGNjLnYzKC0yOTIsIC0xMTYpXVxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcbiAgICAgICAgdGhpcy5lbmRDYXJkV2luLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygtMjAwLCAxNDApIDogY2MudjMoMCwgNTApXG4gICAgICAgIHRoaXMuYmFyQ29pbi5zY2FsZSA9IChsb2dpYykgPyAyLjUgOiAxLjRcbiAgICAgICAgdGhpcy5iYXJDb2luLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IChsb2dpYykgPyAyMTAgOiA4MFxuICAgICAgICB0aGlzLmJhclRpbWUuc2NhbGUgPSAobG9naWMpID8gMS41IDogMVxuICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gKGxvZ2ljKSA/IDE1NSA6IDU3XG5cbiAgICAgICAgLy8gdGhpcy5waGFvSG9hLnNjYWxlID0gKGxvZ2ljKSA/IDkgOiA1XG4gICAgICAgIHRoaXMuZ3VpbGQuc2NhbGUgPSAobG9naWMpID8gMiA6IDEuMlxuICAgICAgICB0aGlzLmd1aWxkLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIC05MDApIDogY2MudjMoMCwgLTM2MClcbiAgICAgICAgdGhpcy5saXN0TWVudS55ID0gKGxvZ2ljKSA/IC04MCA6IDBcbiAgICAgICAgdGhpcy5saXN0Q3VzLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDFcbiAgICAgICAgdGhpcy5saXN0S2hheS5zY2FsZSA9IChsb2dpYykgPyAxLjEgOiAxXG4gICAgICAgIHRoaXMudGltZXVwLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcbiAgICAgICAgdGhpcy5hbWF6aW5nLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcbiAgICAgICAgdGhpcy5iZy5zY2FsZSA9IChsb2dpYykgPyAyLjEgOiAxXG4gICAgICAgIHRoaXMuYmcucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoLTIwMCwgMCkgOiBjYy52MygwLCA1MClcbiAgICAgICAgdGhpcy5saXN0TWVudS5zY2FsZSA9IChsb2dpYykgPyAxLjEgOiAxXG4gICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuNVxuICAgICAgICB0aGlzLm5vdGlNaXNzaW9uLnNjYWxlID0gKGxvZ2ljKSA/IDEuNiA6IDFcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lICYmIHRoaXMuaXNXaW4gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLmFjdGl2ZSA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcblxuICAgICAgICAgICAgdGhpcy5pc0RvYyA9IHRydWVcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS43XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhckNvaW4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjAwXG5cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdE1lbnUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmFyclBvc0RvY1tpXSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5saXN0TWVudS5jaGlsZHJlbltpXS5wb3NpdGlvbiA9IHRoaXMuYXJyUG9zRG9jW2ldXG5cbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlwaG9uZVhcIilcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLnNjYWxlID0gMS4yXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RNZW51LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5hcnJQb3NNZW51TmdhbmdbaV0pIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubGlzdE1lbnUuY2hpbGRyZW5baV0ucG9zaXRpb24gPSB0aGlzLmFyclBvc01lbnVOZ2FuZ1tpXVxuXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdE1lbnUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmFyclBvc0RvY1tpXSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5saXN0TWVudS5jaGlsZHJlbltpXS5wb3NpdGlvbiA9IHRoaXMuYXJyUG9zRG9jW2ldXG5cbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSBmYWxzZVxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RNZW51LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmFyclBvc01lbnVOZ2FuZ1tpXSkge1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmxpc3RNZW51LmNoaWxkcmVuW2ldLnBvc2l0aW9uID0gdGhpcy5hcnJQb3NNZW51TmdhbmdbaV1cblxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XG5cbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuODVcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxufVxuIl19