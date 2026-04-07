
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
        _this.btnPizza = null;
        _this.preCoin = null;
        _this.endCardDoc = null;
        //new
        _this.listBep = null;
        _this.listDia = null;
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
        // spawFistkhay() {
        //     // this.arrTargetMission = this.arrMission
        //     let arr = [cc.v3(-600, 0), cc.v3(0, 0), cc.v3(600, 0)]
        //     for (let i = 0; i < 3; i++) {
        //         let preKhay = cc.instantiate(this.preKhay)
        //         preKhay.parent = this.listKhay;
        //         preKhay.position = arr[i]
        //         this.arrKhay.push(preKhay)
        //         this.loadDataKhay(this.arrMission[i], preKhay)
        //         this.arrTargetMission.push(this.arrMission[i])
        //     }
        // }
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
        }, 1);
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
                _this.btnPizza.getComponent(cc.Animation).play("btnHindG");
            }
        }, 3);
    };
    NewClass.prototype.btn_banh = function () {
        var check = this.getSlotBep();
        if (check != null) {
            this.arrBep[check] = true;
            ;
            this.listBep.children[check].getComponent("Banh").setOn();
        }
    };
    NewClass.prototype.btn_bep = function (tag) {
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
            var child = this.arrDia[i];
            if (child == false) {
                return i;
            }
        }
        return null;
    };
    NewClass.prototype.btn_strawBerry = function () {
        for (var i = 0; i < this.arrDia.length; i++) {
            var check = this.arrDia[i];
            var banh = this.listDia.children[i];
            if (check && banh.getComponent("Dia").status == 0) {
                banh.getComponent("Dia").setStatus(2);
                break;
            }
        }
    };
    NewClass.prototype.btn_chocolate = function () {
        for (var i = 0; i < this.arrDia.length; i++) {
            var check = this.arrDia[i];
            var banh = this.listDia.children[i];
            if (check && banh.getComponent("Dia").status == 0) {
                banh.getComponent("Dia").setStatus(1);
                break;
            }
        }
    };
    NewClass.prototype.btn_cream = function () {
    };
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
        // if (this.isCountDone == 3) {
        //     console.log("khay new")
        //     let firstCus2 = this.arrCus[2];
        //     firstCus2.getComponent("cusMission").showMission();
        //     let mission2 = firstCus2.getComponent("cusMission").order;
        //     this.arrTargetMission.push(mission2)
        //     let pos2 = cc.v3(0, 0);
        //     let preKhay2 = cc.instantiate(this.preKhay)
        //     preKhay2.parent = this.listKhay;
        //     preKhay2.position = pos2
        //     this.arrKhay.push(preKhay2)
        //     this.loadDataKhay(mission2, preKhay2)
        //     preKhay2.position = cc.v3(-100 + 400 + 400, 50)
        //     // cc.tween(targetKhay).to(0.3, { scale: 0 }).start()
        // }
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
        this.checkMission;
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
        // console.log(this.arrTargetMission)
        // this.startGame()
        // if (this.isDoc == false) {
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
        // }
        // else {
        //     for (let i = 0; i < 2; i++) {
        //         let mission = this.arrTargetMission[i];
        //         for (let j = 0; j < mission.length; j++) {
        //             if (id == mission[j]) {
        //                 this.arrTargetMission[i][j] = 100;
        //                 this.isTargetItemPlace = [i, j]
        //                 this.checkSuccess(i, j)
        //                 return this.arrKhay[i].children[j];
        //             }
        //         }
        //     }
        // }
        node.getComponent(cc.Animation).play("btnWrong");
        cc.audioEngine.play(this.soundWrong, false, 1);
        if (this.arrCus[0]) {
            this.arrCus[0].getComponent("cusMission").angry();
        }
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
        this.camera.node.position = (logic) ? cc.v3(-200, 0) : cc.v3(0, 50);
        this.barCoin.scale = (logic) ? 2.5 : 1.4;
        this.barCoin.getComponent(cc.Widget).top = (logic) ? 210 : 80;
        this.phaoHoa.scale = (logic) ? 9 : 5;
        this.guild.scale = (logic) ? 2 : 1.2;
        this.guild.position = (logic) ? cc.v3(0, -900) : cc.v3(0, -360);
        this.listMenu.y = (logic) ? -80 : 0;
        this.listCus.scale = (logic) ? 1 : 1;
        this.listKhay.scale = (logic) ? 1.1 : 1;
        this.timeup.scale = (logic) ? 1 : 1.4;
        this.amazing.scale = (logic) ? 1 : 1.4;
        this.bg.scale = (logic) ? 1.77 : 1;
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
    ], NewClass.prototype, "btnPizza", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7QUFFdkI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnZ0NDO1FBOS9CRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBQzdCLDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFDbkMsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QywwQkFBMEI7UUFDMUIsdUNBQXVDO1FBRXZDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUV2QyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLG9CQUFjLEdBQWlCLElBQUksQ0FBQTtRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FB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QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZLLGVBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBOztJQTRHeEssQ0FBQztJQS8xQkcsMENBQTBDO0lBQzFD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LE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDekMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkMsSUFB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QUFJLENBQUM7Z0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBOUhQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnZ0M1QjtJQUFELGVBQUM7Q0FoZ0NELEFBZ2dDQyxDQWhnQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBZ2dDakQ7a0JBaGdDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5nbG9iYWxUaGlzLmNvaW4gPSAwXHJcbmdsb2JhbFRoaXMuR2FtZSA9IGZhbHNlXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbG9zZVBvcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRPazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIHNvdW5kSGVsbG9DdXMyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIHNvdW5kSGVsbG9DdXMzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZERvbnV0SnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENyZWFtOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDaGVycnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdyb25nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbU1pbmk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmRXaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJUaW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyQ29pbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGVja0l0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBjbG9ja1RpbWU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGNha2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBjcmVlYW06IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBoYW9Ib2E6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RJdGVtOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RSYXk6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0S2hheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlS2hheTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gYnRuRG93bmxvYWQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RSYXlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1ldXA6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFtYXppbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgbm90aUNvaW46IGNjLkFuaW1hdGlvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aU1pc3Npb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0UHJlQ3VzOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YWJsZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdE1lbnU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kdHV0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blBpenphOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNvaW46IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZERvYzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL25ld1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0QmVwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdERpYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBhcnJCZXAgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICBhcnJEaWEgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcblxyXG5cclxuICAgIG1heEtoYXkgPSA3XHJcblxyXG4gICAgYXJyRG9udXRwb3MgPSBbXVxyXG4gICAgLy8gYXJyRG9udXQgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIC8vIGFycktoYXkgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIC8vIGFycktoYXlQb3MgPSBbXVxyXG4gICAgaXNUdXRDaGlsaSA9IGZhbHNlXHJcbiAgICBpc1R1dE1lYXQgPSBmYWxzZVxyXG4gICAgaXNUdXRWZWdldFRhYmxlID0gZmFsc2VcclxuICAgIGlzVHV0Q2xpY2tNZWF0ID0gZmFsc2VcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZEJnOmNjLkF1ZGlvQ2xpcD1udWxsO1xyXG5cclxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcclxuICAgIC8vIGlzU3RlcCA9IDBcclxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIGlkU291bmQgPSBudWxsXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICAvL2l0ZW06IDA6YnVnZXIsIDE6IGtlbSAyOmRvbnV0IDM6a2hvYWl0YXkgNDpwaG8gNTogcHVkZGluZyA2OiB0cmEgIDc6YmFuaG1pIDg6Y29jb251dFxyXG4gICAgcmF5WTogbnVtYmVyW10gPSBbMTIwLCAwLCAtMTIwXTsgICAvLyB24buLIHRyw60gWSBj4bunYSAzIHJheVxyXG4gICAgc3Bhd25YOiBudW1iZXIgPSA3MDA7ICAgICAgICAgICAgICAvLyB24buLIHRyw60gc3Bhd24gYsOqbiBwaOG6o2lcclxuICAgIGFyckl0ZW0gPSBbW10sIFtdXVxyXG4gICAgYXJyS2hheSA9IFtdXHJcbiAgICAvLyBhcnJNaXNzaW9uID0gW1s2LCA3XSwgWzMsIDJdLCBbMCwgNCwgMV0sIFswLCA4XSwgWzcsIDUsIDZdLCBbMywgMSwgMl0sIFsxLCAyLCA2XSwgWzgsIDMsIDJdLCBbMSwgMCwgNl0sIFsyLCA1XSwgWzQsIDYsIDBdLCBbNywgMV0sIFszLCAxLCAyXSwgWzUsIDgsIDZdLCBbMy40XSwgWzAsIDJdLCBbNywgMV1dXHJcbiAgICBhcnJUYXJnZXRNaXNzaW9uID0gW11cclxuICAgIGFyckN1cyA9IFtdXHJcbiAgICBpc1N0YXJ0Z2FtZSA9IGZhbHNlXHJcbiAgICBpc0ZpcnN0Q2xpY2sgPSBmYWxzZVxyXG4gICAgLy8wOmJhbmggdGh1b25nIDE6Y2hvY29sYXRlIDI6IHN0cmF3YmVycnkgXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDdXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcclxuICAgICAgICBjYy52aWV3LnNldFJlc2l6ZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vdGlNaXNzaW9uKS5ieSgwLjQsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIDIwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlNaXNzaW9uLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGFydEdhbWUoKVxyXG4gICAgICAgIC8vIH0sIDAuNSlcclxuICAgIH1cclxuICAgIGlzSGFuZCA9IG51bGxcclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV07XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGN1cykuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdEN1cyA9IHRoaXMuYXJyQ3VzWzBdO1xyXG4gICAgICAgICAgICBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLnNob3dNaXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBtaXNzaW9uID0gZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5vcmRlcjtcclxuICAgICAgICAgICAgdGhpcy5zcGF3S2hheShtaXNzaW9uKTtcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RDbGljaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuUGl6emEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImJ0bkhpbmRHXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMpXHJcblxyXG4gICAgfVxyXG4gICAgYnRuX2JhbmgoKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5nZXRTbG90QmVwKCk7XHJcbiAgICAgICAgaWYgKGNoZWNrICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJCZXBbY2hlY2tdID0gdHJ1ZTs7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEJlcC5jaGlsZHJlbltjaGVja10uZ2V0Q29tcG9uZW50KFwiQmFuaFwiKS5zZXRPbigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnRuX2JlcCh0YWcpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmdldFNsb3REaWEoKTtcclxuICAgICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyckRpYVtjaGVja10gPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdERpYS5jaGlsZHJlbltjaGVja10uZ2V0Q29tcG9uZW50KFwiRGlhXCIpLmdldEJhbmgoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRTbG90QmVwKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJCZXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJCZXBbaV1cclxuICAgICAgICAgICAgaWYgKGNoaWxkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBnZXRTbG90RGlhKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJEaWEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJEaWFbaV1cclxuICAgICAgICAgICAgaWYgKGNoaWxkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBidG5fc3RyYXdCZXJyeSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyRGlhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRoaXMuYXJyRGlhW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmFuaCA9IHRoaXMubGlzdERpYS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrICYmIGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLnN0YXR1cyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zZXRTdGF0dXMoMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnRuX2Nob2NvbGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyRGlhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRoaXMuYXJyRGlhW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmFuaCA9IHRoaXMubGlzdERpYS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrICYmIGJhbmguZ2V0Q29tcG9uZW50KFwiRGlhXCIpLnN0YXR1cyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBiYW5oLmdldENvbXBvbmVudChcIkRpYVwiKS5zZXRTdGF0dXMoMSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnRuX2NyZWFtKCkge1xyXG5cclxuICAgIH1cclxuICAgIHNwYXdLaGF5KG1pc3Npb24pIHtcclxuICAgICAgICBsZXQgYXJyID0gW2NjLnYzKC02MCwgLTEwKSwgY2MudjMoODAsIC0xMCldXHJcbiAgICAgICAgaWYgKG1pc3Npb24ubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgYXJyID0gW2NjLnYzKC03NSwgLTEwKSwgY2MudjMoMzAsIC0xMCksIGNjLnYzKDEyMCwgLTEwKV1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpO1xyXG4gICAgICAgIGtoYXkucGFyZW50ID0gdGhpcy5saXN0S2hheTtcclxuICAgICAgICBraGF5LnBvc2l0aW9uID0gY2MudjMoLTEwMCwgNTApXHJcbiAgICAgICAgdGhpcy5hcnJLaGF5LnB1c2goa2hheSlcclxuICAgICAgICB0aGlzLmxvYWREYXRhS2hheShtaXNzaW9uLCBraGF5KVxyXG4gICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5wdXNoKG1pc3Npb24pXHJcbiAgICB9XHJcbiAgICAvLyBzcGF3RmlzdGtoYXkoKSB7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5hcnJUYXJnZXRNaXNzaW9uID0gdGhpcy5hcnJNaXNzaW9uXHJcbiAgICAvLyAgICAgbGV0IGFyciA9IFtjYy52MygtNjAwLCAwKSwgY2MudjMoMCwgMCksIGNjLnYzKDYwMCwgMCldXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IHByZUtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpXHJcbiAgICAvLyAgICAgICAgIHByZUtoYXkucGFyZW50ID0gdGhpcy5saXN0S2hheTtcclxuICAgIC8vICAgICAgICAgcHJlS2hheS5wb3NpdGlvbiA9IGFycltpXVxyXG4gICAgLy8gICAgICAgICB0aGlzLmFycktoYXkucHVzaChwcmVLaGF5KVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWREYXRhS2hheSh0aGlzLmFyck1pc3Npb25baV0sIHByZUtoYXkpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5wdXNoKHRoaXMuYXJyTWlzc2lvbltpXSlcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfVxyXG4gICAgaXNUYXJnZXRJdGVtUGxhY2UgPSBbXVxyXG4gICAgLy8gY291bnRNaXNzID0gM1xyXG4gICAgc3Bhd05leHRLaGF5KHBsYWNlKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0Q3VzID0gdGhpcy5hcnJDdXNbMV07XHJcbiAgICAgICAgZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5zaG93TWlzc2lvbigpO1xyXG4gICAgICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKTtcclxuXHJcbiAgICAgICAgbGV0IG1pc3Npb24gPSBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLm9yZGVyO1xyXG4gICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5zcGxpY2UocGxhY2UsIDEpXHJcbiAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnB1c2gobWlzc2lvbilcclxuICAgICAgICBsZXQgcG9zID0gY2MudjMoMTIwMCwgMCk7XHJcbiAgICAgICAgbGV0IHByZUtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpXHJcbiAgICAgICAgcHJlS2hheS5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5O1xyXG4gICAgICAgIHByZUtoYXkucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB0aGlzLmFycktoYXkucHVzaChwcmVLaGF5KVxyXG4gICAgICAgIHRoaXMubG9hZERhdGFLaGF5KG1pc3Npb24sIHByZUtoYXkpXHJcbiAgICAgICAgcHJlS2hheS5wb3NpdGlvbiA9IGNjLnYzKC0xMDAgKyA0MDAsIDUwKVxyXG4gICAgICAgIGxldCB0YXJnZXRLaGF5ID0gdGhpcy5hcnJLaGF5W3BsYWNlXVxyXG4gICAgICAgIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzQ291bnREb25lID09IDMpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJraGF5IG5ld1wiKVxyXG4gICAgICAgIC8vICAgICBsZXQgZmlyc3RDdXMyID0gdGhpcy5hcnJDdXNbMl07XHJcbiAgICAgICAgLy8gICAgIGZpcnN0Q3VzMi5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLnNob3dNaXNzaW9uKCk7XHJcblxyXG4gICAgICAgIC8vICAgICBsZXQgbWlzc2lvbjIgPSBmaXJzdEN1czIuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5vcmRlcjtcclxuICAgICAgICAvLyAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnB1c2gobWlzc2lvbjIpXHJcbiAgICAgICAgLy8gICAgIGxldCBwb3MyID0gY2MudjMoMCwgMCk7XHJcbiAgICAgICAgLy8gICAgIGxldCBwcmVLaGF5MiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheSlcclxuICAgICAgICAvLyAgICAgcHJlS2hheTIucGFyZW50ID0gdGhpcy5saXN0S2hheTtcclxuICAgICAgICAvLyAgICAgcHJlS2hheTIucG9zaXRpb24gPSBwb3MyXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYXJyS2hheS5wdXNoKHByZUtoYXkyKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmxvYWREYXRhS2hheShtaXNzaW9uMiwgcHJlS2hheTIpXHJcbiAgICAgICAgLy8gICAgIHByZUtoYXkyLnBvc2l0aW9uID0gY2MudjMoLTEwMCArIDQwMCArIDQwMCwgNTApXHJcbiAgICAgICAgLy8gICAgIC8vIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gcGxhY2UgKyAxOyBpIDwgdGhpcy5hcnJLaGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBraGF5ID0gdGhpcy5hcnJLaGF5W2ldXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGtoYXkpLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycktoYXlbaSAtIDFdID0ga2hheVxyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RSYXlbMF0pLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQwMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcnJLaGF5LnNwbGljZShwbGFjZSwgMSk7XHJcblxyXG4gICAgICAgIH0sIDAuMilcclxuICAgIH1cclxuICAgIGxvYWREYXRhS2hheShkYXRhLCBraGF5KSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IFtjYy52MygtNjAsIC0zMCksIGNjLnYzKDgwLCAtMzApXVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgICAgIGFyciA9IFtjYy52MygtNzUsIC0zMCksIGNjLnYzKDMwLCAtMzApLCBjYy52MygxMjAsIC0zMCldXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtkYXRhW2ldIC0gMV0pXHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IGtoYXlcclxuICAgICAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBhcnJbaV1cclxuICAgICAgICAgICAgICAgIGl0ZW0uc2NhbGUgPSAwLjY4XHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoXCJJdGVtXCIpLmxvYWRHcmF5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpcnN0Q2xpY2sgPSBmYWxzZVxyXG4gICAgYnRuX2NsaWNrQnRuKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKXRoaXMuY2hlY2tNaXNzaW9uXHJcbiAgICAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnRuUGl6emEuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZpcnN0Q2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kdHV0LmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgIGxldCBub2RlID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrTWlzc2lvbihpZCwgbm9kZSk7XHJcbiAgICAgICAgaWYgKGNoZWNrKSB7XHJcblxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBjaGVjay5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoZWNrLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtYWcgPSAocG9zLnggPiBub2RlLngpID8gLTUwIDogNTA7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKG5vZGUueCwgbm9kZS55KTtcclxuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52MihlbmRQb3MueCArIG1hZywgZW5kUG9zLnkgKyAyMDApO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW2lkIC0gMV0pO1xyXG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcblxyXG4gICAgICAgICAgICBjYy50d2VlbihpdGVtKS50bygwLjIsIHsgc2NhbGU6IDEuMiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2VlbihpdGVtKS5iZXppZXJUbygwLjQsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRPaywgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckN1c1t0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlWzBdXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmRvbmVOb2RlLmNoaWxkcmVuW3RoaXMuaXNUYXJnZXRJdGVtUGxhY2VbMV1dLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tJdGVtKGlkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyclRhcmdldE1pc3Npb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWlzc2lvbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1pc3Npb25baV0gPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXJySXRlbSA9IFtpLCBqXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJySXRlbVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjaGVja01pc3Npb24oaWQsIG5vZGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFyclRhcmdldE1pc3Npb24pXHJcbiAgICAgICAgLy8gdGhpcy5zdGFydEdhbWUoKVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzRG9jID09IGZhbHNlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyclRhcmdldE1pc3Npb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWlzc2lvbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkID09IG1pc3Npb25bal0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb25baV1bal0gPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEl0ZW1QbGFjZSA9IFtpLCBqXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKGksIGopXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyS2hheVtpXS5jaGlsZHJlbltqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWlzc2lvbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChpZCA9PSBtaXNzaW9uW2pdKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXVtqXSA9IDEwMDtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEl0ZW1QbGFjZSA9IFtpLCBqXVxyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoaSwgailcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyS2hheVtpXS5jaGlsZHJlbltqXTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYnRuV3JvbmdcIilcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICAgICAgaWYgKHRoaXMuYXJyQ3VzWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuYW5ncnkoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlzQ291bnRDdXMgPSAzXHJcbiAgICBpc0NvdW50RG9uZSA9IDBcclxuICAgIGlzTW92aW5nID0gZmFsc2VcclxuICAgIGNvaW5BcnIgPSBbXVxyXG4gICAgY2hlY2tTdWNjZXNzKGksIGopIHsvL2NoZWNrIGN1cyBob2FuIHRoYW5oIGRvbiBoYW5nIGNodWFcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChqICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRLaGF5ID0gdGhpcy5hcnJLaGF5W2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0S2hheS5nZXRDb21wb25lbnQoXCJJdGVtXCIpLm9mZkdyYXkodGFyZ2V0S2hheS5jaGlsZHJlblsxXSlcclxuICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMiwgeyBzY2FsZTogMi41IH0pLnRvKDAuMSwgeyBzY2FsZTogMi4yIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRhcmdldEtoYXkpLnRvKDAuMiwgeyBzY2FsZTogMC45IH0pLnRvKDAuMSwgeyBzY2FsZTogMC42NSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDAuNClcclxuICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlXHJcbiAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBtaXNzaW9uLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChtaXNzaW9uW21dICE9IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudERvbmUrK1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjdXMuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhfY29pblwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyBjdXMuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhfY29pblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmxpc3RDdXMuY29udmVydFRvV29ybGRTcGFjZUFSKGN1cy5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuY2FtZXJhLmdldFdvcmxkVG9TY3JlZW5Qb2ludChwb3MpO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gdGhpcy51aUNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocG9zKTtcclxuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuYmFyQ29pbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpLmFkZChjYy52MygwLCAwKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkNvaW5zRnJvbUN1c3RvbWVyKHBvcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdSBraGkgdOG7j2EgcmEgeG9uZyB0aMOsIG1vdmUgduG7gSB0aGFuaCBnb2xkXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ29pbnNUb0dvbGRCYXIodGhpcy5jb2luQXJyLCB0aGlzLmJhckNvaW4pO1xyXG4gICAgICAgICAgICAgICAgfSk7IGN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmhhcHB5KClcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aUNvaW4ucGxheSgpXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gNTBcclxuICAgICAgICAgICAgICAgIGlmIChtaXNzaW9uLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDEwMFxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxUaGlzLmNvaW4gPj0gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTZWxsRG9uZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIH0sIDAuNilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb3ZlQ3VzT3V0KGkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVucXVldWVNb3ZlKHRoaXMuYXJyQ3VzW2ldKTtcclxuICAgICAgICAgICAgfSwgMC44KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy8gcmV3YXJkR29sZChjdXN0b21lck5vZGU6IGNjLk5vZGUpIHtcclxuICAgIC8vICAgICBjb25zdCBzdGFydFBvcyA9IGN1c3RvbWVyTm9kZS5wb3NpdGlvbjtcclxuICAgIC8vICAgICBjb25zdCBjb2luczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgLy8gICAgIGNvbnN0IGNvaW5Db3VudCA9IDY7XHJcbiAgICAvLyAgICAgY29uc3QgcmFkaXVzID0gMTIwO1xyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvaW5Db3VudDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNvaW4pO1xyXG4gICAgLy8gICAgICAgICBjb2luLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgIC8vICAgICAgICAgY29pbi5zZXRQb3NpdGlvbihzdGFydFBvcyk7XHJcbiAgICAvLyAgICAgICAgIGNvaW5zLnB1c2goY29pbik7XHJcblxyXG4gICAgLy8gICAgICAgICBjb25zdCBhbmdsZSA9IChNYXRoLlBJICogMiAvIGNvaW5Db3VudCkgKiBpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCB0YXJnZXRQb3MgPSBzdGFydFBvcy5hZGQoY2MudjMoXHJcbiAgICAvLyAgICAgICAgICAgICBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsXHJcbiAgICAvLyAgICAgICAgICAgICBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMsXHJcbiAgICAvLyAgICAgICAgICAgICAwXHJcbiAgICAvLyAgICAgICAgICkpO1xyXG5cclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oY29pbilcclxuICAgIC8vICAgICAgICAgICAgIC50bygwLjI1LCB7IHBvc2l0aW9uOiB0YXJnZXRQb3MgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuZGVsYXkoMC4xKVxyXG4gICAgLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChpID09PSBjb2luQ291bnQgLSAxKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUNvaW5zVG9Hb2xkQmFyKGNvaW5zLCB0aGlzLmJhckNvaW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBzcGF3bkNvaW5zRnJvbUN1c3RvbWVyKHN0YXJ0UG9zOiBjYy5WZWMzLCBvbkZpbmlzaD86ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmNvaW5BcnIgPSBbXVxyXG4gICAgICAgIGNvbnN0IGNvaW5Db3VudCA9IDY7XHJcbiAgICAgICAgY29uc3QgcmFkaXVzID0gNzA7IC8vIMSR4buZIHThu49hIHJhXHJcblxyXG4gICAgICAgIGxldCBmaW5pc2hlZCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29pbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY29pbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XHJcbiAgICAgICAgICAgIGNvaW4ucGFyZW50ID0gdGhpcy5iYXJDb2luO1xyXG4gICAgICAgICAgICBjb2luLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgY29pbi5zY2FsZSA9IDAuOFxyXG4gICAgICAgICAgICB0aGlzLmNvaW5BcnIucHVzaChjb2luKVxyXG4gICAgICAgICAgICAvLyByYW5kb20gaMaw4bubbmcgdOG7j2FcclxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSAoTWF0aC5QSSAqIDIgLyBjb2luQ291bnQpICogaTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tUmFkaXVzID0gcmFkaXVzICsgTWF0aC5yYW5kb20oKSAqIDQwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gc3RhcnRQb3MuYWRkKGNjLnYzKFxyXG4gICAgICAgICAgICAgICAgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tUmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tUmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICApKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHThu49hIHJhXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yNSwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMDUpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmluaXNoZWQgPT09IGNvaW5Db3VudCAmJiBvbkZpbmlzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3ZlQ29pbnNUb0dvbGRCYXIoY29pbnM6IGNjLk5vZGVbXSwgZ29sZFRhcmdldDogY2MuTm9kZSkge1xyXG4gICAgICAgIC8vIGNvbnN0IHdvcmxkUG9zID0gZ29sZFRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGdvbGRUYXJnZXQucG9zaXRpb24pO1xyXG4gICAgICAgIGxldCBsb2NhbCA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgY29pbnMuZm9yRWFjaCgoY29pbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc3QgbG9jYWwgPSBjb2luLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbihjb2luKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KGluZGV4ICogMC4wNSlcclxuICAgICAgICAgICAgICAgIC50bygwLjQsIHsgcG9zaXRpb246IGxvY2FsLCBzY2FsZTogMC41IH0sIHsgZWFzaW5nOiBcInF1YWRJblwiIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hZGRHb2xkKDEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaXNEZW0gPSAwXHJcbiAgICBnZXRQbGFjZShjdXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXMpOyAvLyBn4buNbiBoxqFuXHJcblxyXG4gICAgfVxyXG4gICAgZW5xdWV1ZU1vdmUoY3VzTm9kZSkge1xyXG4gICAgICAgIHRoaXMubW92ZVF1ZXVlLnB1c2goY3VzTm9kZSk7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzUXVldWUoKTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NRdWV1ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1Byb2Nlc3NpbmcpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlUXVldWUubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IGN1c05vZGUgPSB0aGlzLm1vdmVRdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuX21vdmVDdXNPdXQoY3VzTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVF1ZXVlID0gW107XHJcbiAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgIF9tb3ZlQ3VzT3V0KGN1c05vZGUpIHtcclxuICAgICAgICAvLyBpZiAocGxhY2UgPCAwIHx8IHBsYWNlID49IHRoaXMuYXJyQ3VzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBwbGFjZSA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzTm9kZSk7XHJcblxyXG4gICAgICAgIC8vIGlmIChwbGFjZSA8IDAgfHwgcGxhY2UgPj0gdGhpcy5hcnJDdXMubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZmluaXNoTW92ZSgpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNDb3VudERvbmUpXHJcbiAgICAgICAgaWYgKHBsYWNlID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIC8vIGxldCBmaXJzdEN1cyA9IHRoaXMuYXJyQ3VzW3BsYWNlXTtcclxuICAgICAgICBsZXQgZmlyc3RDdXMgPSBjdXNOb2RlO1xyXG5cclxuICAgICAgICAvLyA9PT09PSBTcGF3biBjdXN0b21lciB0aeG6v3AgdGhlbyA9PT09PVxyXG4gICAgICAgIGxldCBuZXh0Q3VzID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuaXNDb3VudEN1c107XHJcblxyXG4gICAgICAgIGlmIChuZXh0Q3VzKSB7XHJcbiAgICAgICAgICAgIG5leHRDdXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG5leHRDdXM7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudEN1cysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gPT09PT0gVOG6oW8gY3VzdG9tZXIgbeG7m2kg4bufIGN14buRaSA9PT09PVxyXG4gICAgICAgIC8vIGxldCBuZXdDdXMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVDdXNbdGhpcy5pc0RlbV0pO1xyXG4gICAgICAgIC8vIG5ld0N1cy5wYXJlbnQgPSB0aGlzLmxpc3RDdXM7XHJcblxyXG4gICAgICAgIC8vIGxldCBsYXN0Q3VzID0gdGhpcy5hcnJDdXNbdGhpcy5hcnJDdXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgLy8gbmV3Q3VzLnBvc2l0aW9uID0gbGFzdEN1cy5wb3NpdGlvbi5hZGQoY2MudjMoNjAwLCAwKSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaXNEZW0gPSAodGhpcy5pc0RlbSArIDEpICUgdGhpcy5saXN0UHJlQ3VzLmxlbmd0aDsgYGBcclxuICAgICAgICAvLyB0aGlzLmFyckN1cy5wdXNoKG5ld0N1cyk7XHJcblxyXG4gICAgICAgIC8vID09PT09IE1vdmUgdGjhurFuZyBi4buLIG91dCA9PT09PVxyXG4gICAgICAgIGZpcnN0Q3VzLnpJbmRleCA9IC0xO1xyXG4gICAgICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuaXNTdWNjZXNzID0gdHJ1ZVxyXG4gICAgICAgIGNjLnR3ZWVuKGZpcnN0Q3VzKVxyXG4gICAgICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgICAgICAgICAuYnkoMC44ICogKHBsYWNlICsgMSksIHsgcG9zaXRpb246IGNjLnYzKC00MDAgKiAocGxhY2UgKyAxKSwgMCkgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGZpcnN0Q3VzKVxyXG4gICAgICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIC8vID09PT09IE1vdmUgY8OhYyB0aOG6sW5nIHBow61hIHNhdSA9PT09PVxyXG4gICAgICAgIGZvciAobGV0IGkgPSBwbGFjZSArIDE7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckN1c1tpXTtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgICAgICAgICAgICAgIC5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC00MDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vID09PT09IEfhu41pIGxvYWRUaW1lIMSRw7puZyAxIGzhuqduID09PT09XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNUYXJnZXRDdXMpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKCk7XHJcbiAgICAgICAgLy8gICAgIH0sIDAuNCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyA9PT09PSBSZW1vdmUga2jhu49pIG3huqNuZyA9PT09PVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMuc3BsaWNlKHBsYWNlLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKTtcclxuXHJcbiAgICAgICAgfSwgMS4xKTtcclxuXHJcbiAgICAgICAgLy8gPT09PT0gU3Bhd24ga2hheSA9PT09PVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3VudERvbmUgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXdOZXh0S2hheShwbGFjZSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50RG9uZSA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmluaXNoTW92ZSgpIHtcclxuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7IC8vIGNo4bqheSB0aeG6v3AgdGjhurFuZyBr4bq/IHRp4bq/cFxyXG4gICAgfVxyXG4gICAgY2hlY2tTdWNjZXNzSXRlbSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgICAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChtaXNzaW9uW2pdICE9IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKGksIG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBpc1RhcmdldEN1cz1udWxsXHJcbiAgICAvLyBtb3ZlQ3VzKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzQ291bnRDdXMgPCA3KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmlzQ291bnRDdXNdLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmlzQ291bnRDdXNdXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuaXNDb3VudEN1c10pXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNDb3VudEN1cysrXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV07XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC02MDAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRDdXMpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyQ3VzLnNoaWZ0KClcclxuICAgIC8vICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAvLyAgICAgfSwgMC41KVxyXG4gICAgLy8gICAgIHRoaXMuc3Bhd05leHRLaGF5KClcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgaXRlbVF1ZXVlOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHNodWZmbGVJdGVtKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbVF1ZXVlID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0SXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1RdWV1ZS5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2h1ZmZsZSBGaXNoZXItWWF0ZXNcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pdGVtUXVldWUubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgICAgICBbdGhpcy5pdGVtUXVldWVbaV0sIHRoaXMuaXRlbVF1ZXVlW2pdXSA9IFt0aGlzLml0ZW1RdWV1ZVtqXSwgdGhpcy5pdGVtUXVldWVbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXROZXh0SXRlbUluZGV4KCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pdGVtUXVldWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaHVmZmxlSXRlbSgpOyAvLyB04bqhbyBsxrDhu6N0IG3hu5tpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtUXVldWUuc2hpZnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0SXRlbUluZGV4OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHNwYXduSXRlbSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFJheS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXN0SXRlbUluZGV4W2ldID0gLTE7IC8vIGNoxrBhIGPDsyBpdGVtIHRyxrDhu5tjXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNwYXduSXRlbU9uUmF5KGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bkl0ZW1PblJheShpbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGxldCBtYWcgPSAoaW5kZXggPT0gMCkgPyAxMDAwIDogLTEwMDA7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbShpbmRleCwgbWFnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbShpbmRleCwgbWFnKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJdGVtKGluZGV4OiBudW1iZXIsIG1hZzogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIC8vIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEl0ZW0ubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgLy8gLy8gdHLDoW5oIHRyw7luZyBpdGVtIHRyxrDhu5tjXHJcbiAgICAgICAgLy8gd2hpbGUgKHJkID09PSB0aGlzLmxhc3RJdGVtSW5kZXhbaW5kZXhdKSB7XHJcbiAgICAgICAgLy8gICAgIHJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5saXN0SXRlbS5sZW5ndGgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgcmQgPSB0aGlzLmdldE5leHRJdGVtSW5kZXgoKTtcclxuICAgICAgICB0aGlzLmxhc3RJdGVtSW5kZXhbaW5kZXhdID0gcmQ7XHJcblxyXG4gICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtyZF0pO1xyXG4gICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5saXN0UmF5W2luZGV4XTtcclxuXHJcbiAgICAgICAgdGhpcy5hcnJJdGVtW2luZGV4XS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMobWFnLCAtNDApO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVJdGVtKGl0ZW0sIG1hZyk7XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbShpdGVtOiBjYy5Ob2RlLCBtYWcpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0WCA9IC1tYWc7XHJcbiAgICAgICAgY2MudHdlZW4oaXRlbSlcclxuICAgICAgICAgICAgLnRvKDE3LCB7IHg6IHRhcmdldFggfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcblxyXG4gICAgfVxyXG4gICAgb2ZmR3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuICAgIH1cclxuICAgIG1vdmVDbG9ja3RvVUkobm9kZTEpIHtcclxuICAgICAgICB0aGlzLm1vdmVJdGVtVG9VSShub2RlMSwgdGhpcy5iYXJUaW1lLmNoaWxkcmVuWzFdKTtcclxuICAgIH1cclxuICAgIG1vdmVJdGVtVG9VSShub2RlMSwgbm9kZTIpIHtcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIGxldCBwb3MgPSBub2RlMi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUyLnBvc2l0aW9uKVxyXG4gICAgICAgIHBvcyA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICAvLyBwb3MgPSBwb3MuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgICAgIGxldCBwb3MyID0gbm9kZTEucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMS5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zMiA9IHRoaXMubWFpbkNhbWVyYS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zMik7XHJcbiAgICAgICAgcG9zMiA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvczIpO1xyXG4gICAgICAgIHBvczIgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MyKS5hZGQoY2MudjMoMCwgMCkpXHJcbiAgICAgICAgbm9kZTEucGFyZW50ID0gdGhpcy51aU5vZGU7XHJcbiAgICAgICAgbm9kZTEuc2NhbGUgPSB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvIC8gdGhpcy51aUNhbWVyYS56b29tUmF0aW8gKiAwLjdcclxuICAgICAgICBub2RlMS5wb3NpdGlvbiA9IHBvczJcclxuICAgICAgICBjYy50d2Vlbihub2RlMSkudG8oMC40LCB7IHBvc2l0aW9uOiBwb3MsIHNjYWxlOiAwLjQgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUxLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vIHRoaXMubWlzc2lvbkJhci5nZXRDb21wb25lbnQoXCJ1cGRhdGVCYXJcIikudXBkYXRlQmFyKCk7XHJcbiAgICAgICAgICAgIC8vIHdvb2QuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImV4cFwiKVxyXG4gICAgICAgICAgICAvLyAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kT3V0LCBmYWxzZSwgMSlcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBpc0VuZEdhbWUgPSBmYWxzZVxyXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKClcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyVGltZS5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICB0aGlzLmFtYXppbmcuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEVuZCwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5rV2luLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZENhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJUaW1lLmdldENvbXBvbmVudChcImJhclRpbWVcIikuZW5kR2FtZSgpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYXJyQ3VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIjYuYW5ncnlcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZClcclxuICAgICAgICAgICAgdGhpcy50aW1ldXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtpbmcsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTG9zZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgMC41KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2Nob29zZShldmVudCwgdmFsdWUpIHtcclxuICAgIGlzRG9jID0gZmFsc2VcclxuICAgIC8vIHVwZGF0ZShkdCkge1xyXG4gICAgLy8gICAgIC8vIHRoaXMubGJDb2luLnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXHJcbiAgICAvLyAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgLy8gICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgdXBkYXRlUmVzcG9uc2l2ZSgpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXJyUG9zTWVudU5nYW5nID0gW2NjLnYzKC0zOTEsIC0xMDIpLCBjYy52MygzNzUsIC0xMTIpLCBjYy52MygxMTQsIC0xMjApLCBjYy52MygtNDA5LCAtMjg0KSwgY2MudjMoLTE1OCwgLTI5NiksIGNjLnYzKDExOCwgLTI4MCksIGNjLnYzKDM5MCwgLTI5NiksIGNjLnYzKC0xMzcsIC0xMTYpXTtcclxuICAgIGFyclBvc0RvYyA9IFtjYy52MygyNiwgLTMzNyksIGNjLnYzKDMzNiwgLTExMiksIGNjLnYzKDE1LjUsIC0xMjEpLCBjYy52MygtMTcwLCAtNTI1LjcpLCBjYy52MygtMzAwLCAtMzUyKSwgY2MudjMoMTg2Ljk2LCAtNTEyKSwgY2MudjMoMzU1LCAtMzM1KSwgY2MudjMoLTI5MiwgLTExNildXHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDFcclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkV2luLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKC0yMDAsIDApIDogY2MudjMoMCwgNTApXHJcbiAgICAgICAgdGhpcy5iYXJDb2luLnNjYWxlID0gKGxvZ2ljKSA/IDIuNSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAobG9naWMpID8gMjEwIDogODBcclxuICAgICAgICB0aGlzLnBoYW9Ib2Euc2NhbGUgPSAobG9naWMpID8gOSA6IDVcclxuICAgICAgICB0aGlzLmd1aWxkLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxLjJcclxuICAgICAgICB0aGlzLmd1aWxkLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIC05MDApIDogY2MudjMoMCwgLTM2MClcclxuICAgICAgICB0aGlzLmxpc3RNZW51LnkgPSAobG9naWMpID8gLTgwIDogMFxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5zY2FsZSA9IChsb2dpYykgPyAxIDogMVxyXG4gICAgICAgIHRoaXMubGlzdEtoYXkuc2NhbGUgPSAobG9naWMpID8gMS4xIDogMVxyXG4gICAgICAgIHRoaXMudGltZXVwLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcclxuICAgICAgICB0aGlzLmFtYXppbmcuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYmcuc2NhbGUgPSAobG9naWMpID8gMS43NyA6IDFcclxuICAgICAgICB0aGlzLmJnLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKC0yMDAsIDApIDogY2MudjMoMCwgNTApXHJcbiAgICAgICAgdGhpcy5saXN0TWVudS5zY2FsZSA9IChsb2dpYykgPyAxLjEgOiAxXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkRG9jLnNjYWxlID0gMS41XHJcbiAgICAgICAgdGhpcy5ub3RpTWlzc2lvbi5zY2FsZSA9IChsb2dpYykgPyAxLjYgOiAxXHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzRG9jID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS43XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhckNvaW4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjAwXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RNZW51LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmFyclBvc0RvY1tpXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmxpc3RNZW51LmNoaWxkcmVuW2ldLnBvc2l0aW9uID0gdGhpcy5hcnJQb3NEb2NbaV1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpcGhvbmVYXCIpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5zY2FsZSA9IDEuMlxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RNZW51LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmFyclBvc01lbnVOZ2FuZ1tpXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmxpc3RNZW51LmNoaWxkcmVuW2ldLnBvc2l0aW9uID0gdGhpcy5hcnJQb3NNZW51TmdhbmdbaV1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RNZW51LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmFyclBvc0RvY1tpXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmxpc3RNZW51LmNoaWxkcmVuW2ldLnBvc2l0aW9uID0gdGhpcy5hcnJQb3NEb2NbaV1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzRG9jID0gZmFsc2VcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RNZW51LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMuYXJyUG9zTWVudU5nYW5nW2ldKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5saXN0TWVudS5jaGlsZHJlbltpXS5wb3NpdGlvbiA9IHRoaXMuYXJyUG9zTWVudU5nYW5nW2ldXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44NVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=