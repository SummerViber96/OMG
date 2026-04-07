
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
        _this.maxKhay = 7;
        _this.arrDonutpos = [];
        _this.arrDonut = [null, null, null, null, null, null, null];
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
            _this.startGame();
        }, 0.5);
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
        // this.scheduleOnce(() => {
        //     cc.tween(this.shadow).to(0.3, { opacity: 150 }).start();
        //     this.handtut.active = true;
        //     this.btnPizza.getComponent(cc.Animation).play("btnHindG");
        //     this.guild.active = true
        // }, 1)
        // this.spawFistkhay()
        // if (this.isStartgame == false) {
        //     this.barTime.getComponent("barTime").countDown()
        //     for (let i = 0; i < 3; i++) {
        //         let child = this.arrCus[i]
        //         child.getComponent("cusMission").loadTime()
        //     }
        //     this.isStartgame = true;
        //     this.isHand.active = false;
        //     this.guild.active = false
        //     this.guild.opacity = 0
        //     for (let i = 0; i < this.arrItem[0].length; i++) {
        //         let item = this.arrItem[0][i]
        //         let posNext = item.position.x - 2000
        //         cc.tween(item)
        //             .to(17, { x: posNext })
        //             .call(() => {
        //                 item.destroy();
        //             })
        //             .start();
        //         // this.moveItem(item,item.position.add(cc.v3(-2000,0)))
        //     }
        //     for (let i = 0; i < this.arrItem[1].length; i++) {
        //         let item = this.arrItem[1][i]
        //         let posNext = item.position.x + 2000
        //         cc.tween(item)
        //             .to(16, { x: posNext })
        //             .call(() => {
        //                 item.destroy();
        //             })
        //             .start();
        //         // this.moveItem(item,item.position.add(cc.v3(-2000,0)))
        //     }
        //     this.scheduleOnce(() => {
        //         this.spawnItem()
        //     }, 1.7)
        // }
        // this.spawnItem()
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
        this.checkMission;
        this.handtut.active = false;
        this.btnPizza.children[1].active = false;
        if (!this.firstClick) {
            this.arrCus[0].getComponent("cusMission").loadTime();
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
        var _this = this;
        // const worldPos = goldTarget.parent.convertToWorldSpaceAR(goldTarget.position);
        var local = cc.v3(0, 0);
        coins.forEach(function (coin, index) {
            // const local = coin.parent.convertToNodeSpaceAR(worldPos);
            cc.tween(coin)
                .delay(index * 0.05)
                .to(0.4, { position: local, scale: 0.5 }, { easing: "quadIn" })
                .call(function () {
                coin.destroy();
                _this.notiCoin.play();
                globalThis.coin += 10;
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
        this.camera.node.position = (logic) ? cc.v3(0, 0) : cc.v3(0, 100);
        this.barCoin.scale = (logic) ? 2.5 : 1.4;
        this.barCoin.getComponent(cc.Widget).top = (logic) ? 210 : 80;
        this.phaoHoa.scale = (logic) ? 9 : 5;
        this.guild.scale = (logic) ? 2 : 1.2;
        this.guild.position = (logic) ? cc.v3(0, -900) : cc.v3(0, -360);
        this.table.height = (logic) ? 1300 : 955;
        this.listMenu.y = (logic) ? -80 : 0;
        this.listCus.scale = (logic) ? 1.1 : 1;
        this.listKhay.scale = (logic) ? 1.1 : 1;
        this.timeup.scale = (logic) ? 1 : 1.4;
        this.amazing.scale = (logic) ? 1 : 1.4;
        this.bg.scale = (logic) ? 2 : 1.4;
        this.listMenu.scale = (logic) ? 1.1 : 1;
        this.endCardDoc.scale = 1.5;
        if (this.isEndGame) {
            this.endCardDoc.active = (logic) ? true : false;
            this.endCardWin.active = (logic) ? false : true;
        }
        if (logic == true) {
            this.isDoc = true;
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            this.table.height = 2000;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 1.7;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                this.barCoin.getComponent(cc.Widget).top = 200;
                this.table.height = 2400;
                for (var i = 0; i < this.listMenu.childrenCount; i++) {
                    if (this.arrPosDoc[i]) {
                        this.listMenu.children[i].position = this.arrPosDoc[i];
                    }
                }
                console.log("iphoneX");
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.5;
                this.table.height = 1400;
                this.endCardDoc.scale = 1.2;
                for (var i = 0; i < this.listMenu.childrenCount; i++) {
                    if (this.arrPosMenuNgang[i]) {
                        this.listMenu.children[i].position = this.arrPosMenuNgang[i];
                    }
                }
            }
            else {
                for (var i = 0; i < this.listMenu.childrenCount; i++) {
                    if (this.arrPosDoc[i]) {
                        this.listMenu.children[i].position = this.arrPosDoc[i];
                    }
                }
            }
        }
        else {
            this.isDoc = false;
            for (var i = 0; i < this.listMenu.childrenCount; i++) {
                if (this.arrPosMenuNgang[i]) {
                    this.listMenu.children[i].position = this.arrPosMenuNgang[i];
                }
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7QUFFdkI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzK0JDO1FBcCtCRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBQzdCLDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFDbkMsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QywwQkFBMEI7UUFDMUIsdUNBQXVDO1FBRXZDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUV2QyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLG9CQUFjLEdBQWlCLElBQUksQ0FBQTtRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FB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LENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZLLGVBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBOztJQThHeEssQ0FBQztJQTkwQkcseUJBQU0sR0FBTjtRQUFBLGlCQWdCQztRQWZHLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxXQUFXLEVBQUU7WUFDOUIsTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDMUM7UUFH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TUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtRQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7WUFD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QyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUkxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0RBQ007SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDQTtJQUVsQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQXpIVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcytCNUI7SUFBRCxlQUFDO0NBdCtCRCxBQXMrQkMsQ0F0K0JxQyxFQUFFLENBQUMsU0FBUyxHQXMrQmpEO2tCQXQrQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5jb2luID0gMFxyXG5nbG9iYWxUaGlzLkdhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kT2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gc291bmRIZWxsbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZEhlbGxvQ3VzMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZEhlbGxvQ3VzMzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRyYW5zOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gc291bmREb251dEp1bXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRFbmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTZWxsRG9uZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5raW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hlcnJ5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3JlYW1NaW5pOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkV2luOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIHVpQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyVGltZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhckNvaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2hlY2tJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gY2xvY2tUaW1lOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBjYWtlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gY3JlZWFtOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvSG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbGlzdEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0SXRlbTogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UmF5OiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtoYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUtoYXk6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGJ0bkRvd25sb2FkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UmF5Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGltZXVwOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhbWF6aW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIG5vdGlDb2luOiBjYy5BbmltYXRpb24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vdGlNaXNzaW9uOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdFByZUN1czogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGFibGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RNZW51OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZHR1dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5QaXp6YTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDb2luOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmREb2M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgbWF4S2hheSA9IDdcclxuXHJcbiAgICBhcnJEb251dHBvcyA9IFtdXHJcbiAgICBhcnJEb251dCA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXVxyXG4gICAgLy8gYXJyS2hheSA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXVxyXG4gICAgLy8gYXJyS2hheVBvcyA9IFtdXHJcbiAgICBpc1R1dENoaWxpID0gZmFsc2VcclxuICAgIGlzVHV0TWVhdCA9IGZhbHNlXHJcbiAgICBpc1R1dFZlZ2V0VGFibGUgPSBmYWxzZVxyXG4gICAgaXNUdXRDbGlja01lYXQgPSBmYWxzZVxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIHNvdW5kQmc6Y2MuQXVkaW9DbGlwPW51bGw7XHJcblxyXG4gICAgaXNUYXJnZXRQb3AgPSBudWxsO1xyXG4gICAgLy8gaXNTdGVwID0gMFxyXG4gICAgaXNUYXJnZXRDdXMgPSBudWxsO1xyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIGNvdW50Q3VzID0gMFxyXG4gICAgaWRTb3VuZCA9IG51bGxcclxuICAgIGlzU3RlcCA9IDBcclxuICAgIC8vaXRlbTogMDpidWdlciwgMToga2VtIDI6ZG9udXQgMzpraG9haXRheSA0OnBobyA1OiBwdWRkaW5nIDY6IHRyYSAgNzpiYW5obWkgODpjb2NvbnV0XHJcbiAgICByYXlZOiBudW1iZXJbXSA9IFsxMjAsIDAsIC0xMjBdOyAgIC8vIHbhu4sgdHLDrSBZIGPhu6dhIDMgcmF5XHJcbiAgICBzcGF3blg6IG51bWJlciA9IDcwMDsgICAgICAgICAgICAgIC8vIHbhu4sgdHLDrSBzcGF3biBiw6puIHBo4bqjaVxyXG4gICAgYXJySXRlbSA9IFtbXSwgW11dXHJcbiAgICBhcnJLaGF5ID0gW11cclxuICAgIC8vIGFyck1pc3Npb24gPSBbWzYsIDddLCBbMywgMl0sIFswLCA0LCAxXSwgWzAsIDhdLCBbNywgNSwgNl0sIFszLCAxLCAyXSwgWzEsIDIsIDZdLCBbOCwgMywgMl0sIFsxLCAwLCA2XSwgWzIsIDVdLCBbNCwgNiwgMF0sIFs3LCAxXSwgWzMsIDEsIDJdLCBbNSwgOCwgNl0sIFszLjRdLCBbMCwgMl0sIFs3LCAxXV1cclxuICAgIGFyclRhcmdldE1pc3Npb24gPSBbXVxyXG4gICAgYXJyQ3VzID0gW11cclxuICAgIGlzU3RhcnRnYW1lID0gZmFsc2VcclxuICAgIGlzRmlyc3RDbGljayA9IGZhbHNlXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDdXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVJlc3BvbnNpdmUoKTtcclxuICAgICAgICBjYy52aWV3LnNldFJlc2l6ZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgfVxyXG4gICAgaXNIYW5kID0gbnVsbFxyXG5cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXTtcclxuICAgICAgICAgICAgY2MudHdlZW4oY3VzKS5ieSgwLjUsIHsgcG9zaXRpb246IGNjLnYzKC00MDAsIDApIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0Q3VzID0gdGhpcy5hcnJDdXNbMF07XHJcbiAgICAgICAgICAgIGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuc2hvd01pc3Npb24oKTtcclxuICAgICAgICAgICAgbGV0IG1pc3Npb24gPSBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLm9yZGVyO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXdLaGF5KG1pc3Npb24pO1xyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdENsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5QaXp6YS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYnRuSGluZEdcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMylcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuc2hhZG93KS50bygwLjMsIHsgb3BhY2l0eTogMTUwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaGFuZHR1dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJ0blBpenphLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJidG5IaW5kR1wiKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgLy8gfSwgMSlcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zcGF3RmlzdGtoYXkoKVxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5pc1N0YXJ0Z2FtZSA9PSBmYWxzZSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5jb3VudERvd24oKVxyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNTdGFydGdhbWUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzSGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIC8vICAgICB0aGlzLmd1aWxkLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJJdGVtWzBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgaXRlbSA9IHRoaXMuYXJySXRlbVswXVtpXVxyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHBvc05leHQgPSBpdGVtLnBvc2l0aW9uLnggLSAyMDAwXHJcbiAgICAgICAgLy8gICAgICAgICBjYy50d2VlbihpdGVtKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC50bygxNywgeyB4OiBwb3NOZXh0IH0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5tb3ZlSXRlbShpdGVtLGl0ZW0ucG9zaXRpb24uYWRkKGNjLnYzKC0yMDAwLDApKSlcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJySXRlbVsxXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmFyckl0ZW1bMV1baV1cclxuICAgICAgICAvLyAgICAgICAgIGxldCBwb3NOZXh0ID0gaXRlbS5wb3NpdGlvbi54ICsgMjAwMFxyXG4gICAgICAgIC8vICAgICAgICAgY2MudHdlZW4oaXRlbSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAudG8oMTYsIHsgeDogcG9zTmV4dCB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMubW92ZUl0ZW0oaXRlbSxpdGVtLnBvc2l0aW9uLmFkZChjYy52MygtMjAwMCwwKSkpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zcGF3bkl0ZW0oKVxyXG4gICAgICAgIC8vICAgICB9LCAxLjcpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuc3Bhd25JdGVtKClcclxuXHJcblxyXG4gICAgfVxyXG4gICAgc3Bhd0toYXkobWlzc2lvbikge1xyXG4gICAgICAgIGxldCBhcnIgPSBbY2MudjMoLTYwLCAtMTApLCBjYy52Myg4MCwgLTEwKV1cclxuICAgICAgICBpZiAobWlzc2lvbi5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICBhcnIgPSBbY2MudjMoLTc1LCAtMTApLCBjYy52MygzMCwgLTEwKSwgY2MudjMoMTIwLCAtMTApXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQga2hheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheSk7XHJcbiAgICAgICAga2hheS5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5O1xyXG4gICAgICAgIGtoYXkucG9zaXRpb24gPSBjYy52MygtMTAwLCA1MClcclxuICAgICAgICB0aGlzLmFycktoYXkucHVzaChraGF5KVxyXG4gICAgICAgIHRoaXMubG9hZERhdGFLaGF5KG1pc3Npb24sIGtoYXkpXHJcbiAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnB1c2gobWlzc2lvbilcclxuICAgIH1cclxuICAgIC8vIHNwYXdGaXN0a2hheSgpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmFyclRhcmdldE1pc3Npb24gPSB0aGlzLmFyck1pc3Npb25cclxuICAgIC8vICAgICBsZXQgYXJyID0gW2NjLnYzKC02MDAsIDApLCBjYy52MygwLCAwKSwgY2MudjMoNjAwLCAwKV1cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgcHJlS2hheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheSlcclxuICAgIC8vICAgICAgICAgcHJlS2hheS5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5O1xyXG4gICAgLy8gICAgICAgICBwcmVLaGF5LnBvc2l0aW9uID0gYXJyW2ldXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyS2hheS5wdXNoKHByZUtoYXkpXHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZERhdGFLaGF5KHRoaXMuYXJyTWlzc2lvbltpXSwgcHJlS2hheSlcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnB1c2godGhpcy5hcnJNaXNzaW9uW2ldKVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9XHJcbiAgICBpc1RhcmdldEl0ZW1QbGFjZSA9IFtdXHJcbiAgICAvLyBjb3VudE1pc3MgPSAzXHJcbiAgICBzcGF3TmV4dEtoYXkocGxhY2UpIHtcclxuICAgICAgICBsZXQgZmlyc3RDdXMgPSB0aGlzLmFyckN1c1sxXTtcclxuICAgICAgICBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLnNob3dNaXNzaW9uKCk7XHJcbiAgICAgICAgZmlyc3RDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpO1xyXG5cclxuICAgICAgICBsZXQgbWlzc2lvbiA9IGZpcnN0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikub3JkZXI7XHJcbiAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnNwbGljZShwbGFjZSwgMSlcclxuICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24ucHVzaChtaXNzaW9uKVxyXG4gICAgICAgIGxldCBwb3MgPSBjYy52MygxMjAwLCAwKTtcclxuICAgICAgICBsZXQgcHJlS2hheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheSlcclxuICAgICAgICBwcmVLaGF5LnBhcmVudCA9IHRoaXMubGlzdEtoYXk7XHJcbiAgICAgICAgcHJlS2hheS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIHRoaXMuYXJyS2hheS5wdXNoKHByZUtoYXkpXHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YUtoYXkobWlzc2lvbiwgcHJlS2hheSlcclxuICAgICAgICBwcmVLaGF5LnBvc2l0aW9uID0gY2MudjMoLTEwMCArIDQwMCwgNTApXHJcbiAgICAgICAgbGV0IHRhcmdldEtoYXkgPSB0aGlzLmFycktoYXlbcGxhY2VdXHJcbiAgICAgICAgY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNDb3VudERvbmUgPT0gMykge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImtoYXkgbmV3XCIpXHJcbiAgICAgICAgLy8gICAgIGxldCBmaXJzdEN1czIgPSB0aGlzLmFyckN1c1syXTtcclxuICAgICAgICAvLyAgICAgZmlyc3RDdXMyLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuc2hvd01pc3Npb24oKTtcclxuXHJcbiAgICAgICAgLy8gICAgIGxldCBtaXNzaW9uMiA9IGZpcnN0Q3VzMi5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLm9yZGVyO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24ucHVzaChtaXNzaW9uMilcclxuICAgICAgICAvLyAgICAgbGV0IHBvczIgPSBjYy52MygwLCAwKTtcclxuICAgICAgICAvLyAgICAgbGV0IHByZUtoYXkyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVLaGF5KVxyXG4gICAgICAgIC8vICAgICBwcmVLaGF5Mi5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5O1xyXG4gICAgICAgIC8vICAgICBwcmVLaGF5Mi5wb3NpdGlvbiA9IHBvczJcclxuICAgICAgICAvLyAgICAgdGhpcy5hcnJLaGF5LnB1c2gocHJlS2hheTIpXHJcbiAgICAgICAgLy8gICAgIHRoaXMubG9hZERhdGFLaGF5KG1pc3Npb24yLCBwcmVLaGF5MilcclxuICAgICAgICAvLyAgICAgcHJlS2hheTIucG9zaXRpb24gPSBjYy52MygtMTAwICsgNDAwICsgNDAwLCA1MClcclxuICAgICAgICAvLyAgICAgLy8gY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSBwbGFjZSArIDE7IGkgPCB0aGlzLmFycktoYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGtoYXkgPSB0aGlzLmFycktoYXlbaV1cclxuICAgICAgICAgICAgY2MudHdlZW4oa2hheSkuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyS2hheVtpIC0gMV0gPSBraGF5XHJcblxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdFJheVswXSkuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFycktoYXkuc3BsaWNlKHBsYWNlLCAxKTtcclxuXHJcbiAgICAgICAgfSwgMC4yKVxyXG4gICAgfVxyXG4gICAgbG9hZERhdGFLaGF5KGRhdGEsIGtoYXkpIHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gW2NjLnYzKC02MCwgLTMwKSwgY2MudjMoODAsIC0zMCldXHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICAgICAgYXJyID0gW2NjLnYzKC03NSwgLTMwKSwgY2MudjMoMzAsIC0zMCksIGNjLnYzKDEyMCwgLTMwKV1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW2RhdGFbaV0gLSAxXSlcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0ga2hheVxyXG4gICAgICAgICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGFycltpXVxyXG4gICAgICAgICAgICAgICAgaXRlbS5zY2FsZSA9IDAuNjhcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIkl0ZW1cIikubG9hZEdyYXkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmlyc3RDbGljayA9IGZhbHNlXHJcbiAgICBidG5fY2xpY2tCdG4oZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja01pc3Npb25cclxuICAgICAgICB0aGlzLmhhbmR0dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5QaXp6YS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyc3RDbGljaykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZHR1dC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICBsZXQgbm9kZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja01pc3Npb24oaWQsIG5vZGUpO1xyXG4gICAgICAgIGlmIChjaGVjaykge1xyXG5cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gY2hlY2sucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGVjay5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHBvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWFnID0gKHBvcy54ID4gbm9kZS54KSA/IC01MCA6IDUwO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52Mihub2RlLngsIG5vZGUueSk7XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBjYy52Mihwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoZW5kUG9zLnggKyBtYWcsIGVuZFBvcy55ICsgMjAwKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtpZCAtIDFdKTtcclxuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSBub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGNjLnYzKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oaXRlbSkudG8oMC4yLCB7IHNjYWxlOiAxLjIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4oaXRlbSkuYmV6aWVyVG8oMC40LCBzdGFydFBvcywgbWlkUG9zLCBlbmRQb3MpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kT2ssIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbdGhpcy5pc1RhcmdldEl0ZW1QbGFjZVswXV0uZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5kb25lTm9kZS5jaGlsZHJlblt0aGlzLmlzVGFyZ2V0SXRlbVBsYWNlWzFdXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNoZWNrSXRlbShpZCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChtaXNzaW9uW2ldID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyckl0ZW0gPSBbaSwgal07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyckl0ZW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY2hlY2tNaXNzaW9uKGlkLCBub2RlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hcnJUYXJnZXRNaXNzaW9uKVxyXG4gICAgICAgIC8vIHRoaXMuc3RhcnRHYW1lKClcclxuICAgICAgICAvLyBpZiAodGhpcy5pc0RvYyA9PSBmYWxzZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpZCA9PSBtaXNzaW9uW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldW2pdID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRJdGVtUGxhY2UgPSBbaSwgal1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBqKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFycktoYXlbaV0uY2hpbGRyZW5bal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoaWQgPT0gbWlzc2lvbltqXSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb25baV1bal0gPSAxMDA7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRJdGVtUGxhY2UgPSBbaSwgal1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKGksIGopXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFycktoYXlbaV0uY2hpbGRyZW5bal07XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImJ0bldyb25nXCIpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh0aGlzLmFyckN1c1swXSkge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1swXS5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmFuZ3J5KClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpc0NvdW50Q3VzID0gM1xyXG4gICAgaXNDb3VudERvbmUgPSAwXHJcbiAgICBpc01vdmluZyA9IGZhbHNlXHJcbiAgICBjb2luQXJyID0gW11cclxuICAgIGNoZWNrU3VjY2VzcyhpLCBqKSB7Ly9jaGVjayBjdXMgaG9hbiB0aGFuaCBkb24gaGFuZyBjaHVhXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0S2hheSA9IHRoaXMuYXJyS2hheVtpXS5jaGlsZHJlbltqXTtcclxuICAgICAgICAgICAgICAgIHRhcmdldEtoYXkuZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5vZmZHcmF5KHRhcmdldEtoYXkuY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjIsIHsgc2NhbGU6IDIuNSB9KS50bygwLjEsIHsgc2NhbGU6IDIuMiB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjIsIHsgc2NhbGU6IDAuOSB9KS50bygwLjEsIHsgc2NhbGU6IDAuNjUgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAwLjQpXHJcbiAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZVxyXG4gICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgbWlzc2lvbi5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICBpZiAobWlzc2lvblttXSAhPSAxMDApIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb25lKytcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY3VzLmdldENoaWxkQnlOYW1lKFwidmZ4X2NvaW5cIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gY3VzLmdldENoaWxkQnlOYW1lKFwidmZ4X2NvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0Q3VzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjdXMucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmNhbWVyYS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zKTtcclxuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvcyk7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmJhckNvaW4uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKS5hZGQoY2MudjMoMCwgMCkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25Db2luc0Zyb21DdXN0b21lcihwb3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzYXUga2hpIHThu49hIHJhIHhvbmcgdGjDrCBtb3ZlIHbhu4EgdGhhbmggZ29sZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUNvaW5zVG9Hb2xkQmFyKHRoaXMuY29pbkFyciwgdGhpcy5iYXJDb2luKTtcclxuICAgICAgICAgICAgICAgIH0pOyBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5oYXBweSgpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB9LCAwLjYpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubW92ZUN1c091dChpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnF1ZXVlTW92ZSh0aGlzLmFyckN1c1tpXSk7XHJcbiAgICAgICAgICAgIH0sIDAuOClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vIHJld2FyZEdvbGQoY3VzdG9tZXJOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgc3RhcnRQb3MgPSBjdXN0b21lck5vZGUucG9zaXRpb247XHJcbiAgICAvLyAgICAgY29uc3QgY29pbnM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vICAgICBjb25zdCBjb2luQ291bnQgPSA2O1xyXG4gICAgLy8gICAgIGNvbnN0IHJhZGl1cyA9IDEyMDtcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2luQ291bnQ7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBjb2luID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcclxuICAgIC8vICAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAvLyAgICAgICAgIGNvaW4uc2V0UG9zaXRpb24oc3RhcnRQb3MpO1xyXG4gICAgLy8gICAgICAgICBjb2lucy5wdXNoKGNvaW4pO1xyXG5cclxuICAgIC8vICAgICAgICAgY29uc3QgYW5nbGUgPSAoTWF0aC5QSSAqIDIgLyBjb2luQ291bnQpICogaTtcclxuICAgIC8vICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gc3RhcnRQb3MuYWRkKGNjLnYzKFxyXG4gICAgLy8gICAgICAgICAgICAgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLFxyXG4gICAgLy8gICAgICAgICAgICAgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzLFxyXG4gICAgLy8gICAgICAgICAgICAgMFxyXG4gICAgLy8gICAgICAgICApKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGNvaW4pXHJcbiAgICAvLyAgICAgICAgICAgICAudG8oMC4yNSwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLmRlbGF5KDAuMSlcclxuICAgIC8vICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gY29pbkNvdW50IC0gMSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDb2luc1RvR29sZEJhcihjb2lucywgdGhpcy5iYXJDb2luKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgc3Bhd25Db2luc0Zyb21DdXN0b21lcihzdGFydFBvczogY2MuVmVjMywgb25GaW5pc2g/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5jb2luQXJyID0gW11cclxuICAgICAgICBjb25zdCBjb2luQ291bnQgPSA2O1xyXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDcwOyAvLyDEkeG7mSB04buPYSByYVxyXG5cclxuICAgICAgICBsZXQgZmluaXNoZWQgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvaW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNvaW4pO1xyXG4gICAgICAgICAgICBjb2luLnBhcmVudCA9IHRoaXMuYmFyQ29pbjtcclxuICAgICAgICAgICAgY29pbi5zZXRQb3NpdGlvbihzdGFydFBvcyk7XHJcbiAgICAgICAgICAgIGNvaW4uc2NhbGUgPSAwLjhcclxuICAgICAgICAgICAgdGhpcy5jb2luQXJyLnB1c2goY29pbilcclxuICAgICAgICAgICAgLy8gcmFuZG9tIGjGsOG7m25nIHThu49hXHJcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKE1hdGguUEkgKiAyIC8gY29pbkNvdW50KSAqIGk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVJhZGl1cyA9IHJhZGl1cyArIE1hdGgucmFuZG9tKCkgKiA0MDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHN0YXJ0UG9zLmFkZChjYy52MyhcclxuICAgICAgICAgICAgICAgIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbVJhZGl1cyxcclxuICAgICAgICAgICAgICAgIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbVJhZGl1cyxcclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgICAgICAvLyB04buPYSByYVxyXG4gICAgICAgICAgICBjYy50d2Vlbihjb2luKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMjUsIHsgcG9zaXRpb246IHRhcmdldFBvcyB9LCB7IGVhc2luZzogXCJxdWFkT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjA1KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkID09PSBjb2luQ291bnQgJiYgb25GaW5pc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5pc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZUNvaW5zVG9Hb2xkQmFyKGNvaW5zOiBjYy5Ob2RlW10sIGdvbGRUYXJnZXQ6IGNjLk5vZGUpIHtcclxuICAgICAgICAvLyBjb25zdCB3b3JsZFBvcyA9IGdvbGRUYXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihnb2xkVGFyZ2V0LnBvc2l0aW9uKTtcclxuICAgICAgICBsZXQgbG9jYWwgPSBjYy52MygwLCAwKVxyXG4gICAgICAgIGNvaW5zLmZvckVhY2goKGNvaW4sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGxvY2FsID0gY29pbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oY29pbilcclxuICAgICAgICAgICAgICAgIC5kZWxheShpbmRleCAqIDAuMDUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiBsb2NhbCwgc2NhbGU6IDAuNSB9LCB7IGVhc2luZzogXCJxdWFkSW5cIiB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aUNvaW4ucGxheSgpXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDEwXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYWRkR29sZCgxKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlzRGVtID0gMFxyXG4gICAgZ2V0UGxhY2UoY3VzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzKTsgLy8gZ+G7jW4gaMahblxyXG5cclxuICAgIH1cclxuICAgIGVucXVldWVNb3ZlKGN1c05vZGUpIHtcclxuICAgICAgICB0aGlzLm1vdmVRdWV1ZS5wdXNoKGN1c05vZGUpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzUXVldWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZVF1ZXVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBjdXNOb2RlID0gdGhpcy5tb3ZlUXVldWUuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLl9tb3ZlQ3VzT3V0KGN1c05vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVRdWV1ZSA9IFtdO1xyXG4gICAgaXNQcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBfbW92ZUN1c091dChjdXNOb2RlKSB7XHJcbiAgICAgICAgLy8gaWYgKHBsYWNlIDwgMCB8fCBwbGFjZSA+PSB0aGlzLmFyckN1cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBsZXQgcGxhY2UgPSB0aGlzLmFyckN1cy5pbmRleE9mKGN1c05vZGUpO1xyXG5cclxuICAgICAgICAvLyBpZiAocGxhY2UgPCAwIHx8IHBsYWNlID49IHRoaXMuYXJyQ3VzLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmZpbmlzaE1vdmUoKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzQ291bnREb25lKVxyXG4gICAgICAgIGlmIChwbGFjZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICAvLyBsZXQgZmlyc3RDdXMgPSB0aGlzLmFyckN1c1twbGFjZV07XHJcbiAgICAgICAgbGV0IGZpcnN0Q3VzID0gY3VzTm9kZTtcclxuXHJcbiAgICAgICAgLy8gPT09PT0gU3Bhd24gY3VzdG9tZXIgdGnhur9wIHRoZW8gPT09PT1cclxuICAgICAgICBsZXQgbmV4dEN1cyA9IHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmlzQ291bnRDdXNdO1xyXG5cclxuICAgICAgICBpZiAobmV4dEN1cykge1xyXG4gICAgICAgICAgICBuZXh0Q3VzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSBuZXh0Q3VzO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnRDdXMrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vID09PT09IFThuqFvIGN1c3RvbWVyIG3hu5tpIOG7nyBjdeG7kWkgPT09PT1cclxuICAgICAgICAvLyBsZXQgbmV3Q3VzID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJlQ3VzW3RoaXMuaXNEZW1dKTtcclxuICAgICAgICAvLyBuZXdDdXMucGFyZW50ID0gdGhpcy5saXN0Q3VzO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGFzdEN1cyA9IHRoaXMuYXJyQ3VzW3RoaXMuYXJyQ3VzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIC8vIG5ld0N1cy5wb3NpdGlvbiA9IGxhc3RDdXMucG9zaXRpb24uYWRkKGNjLnYzKDYwMCwgMCkpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmlzRGVtID0gKHRoaXMuaXNEZW0gKyAxKSAlIHRoaXMubGlzdFByZUN1cy5sZW5ndGg7IGBgXHJcbiAgICAgICAgLy8gdGhpcy5hcnJDdXMucHVzaChuZXdDdXMpO1xyXG5cclxuICAgICAgICAvLyA9PT09PSBNb3ZlIHRo4bqxbmcgYuG7iyBvdXQgPT09PT1cclxuICAgICAgICBmaXJzdEN1cy56SW5kZXggPSAtMTtcclxuICAgICAgICBmaXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmlzU3VjY2VzcyA9IHRydWVcclxuICAgICAgICBjYy50d2VlbihmaXJzdEN1cylcclxuICAgICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgICAgICAgICAgLmJ5KDAuOCAqIChwbGFjZSArIDEpLCB7IHBvc2l0aW9uOiBjYy52MygtNDAwICogKHBsYWNlICsgMSksIDApIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICBjYy50d2VlbihmaXJzdEN1cylcclxuICAgICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyA9PT09PSBNb3ZlIGPDoWMgdGjhurFuZyBwaMOtYSBzYXUgPT09PT1cclxuICAgICAgICBmb3IgKGxldCBpID0gcGxhY2UgKyAxOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV07XHJcblxyXG4gICAgICAgICAgICBjYy50d2VlbihjaGlsZClcclxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAgICAgICAgICAgICAuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDAwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA9PT09PSBH4buNaSBsb2FkVGltZSDEkcO6bmcgMSBs4bqnbiA9PT09PVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzVGFyZ2V0Q3VzKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuaXNUYXJnZXRDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpO1xyXG4gICAgICAgIC8vICAgICB9LCAwLjQpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gPT09PT0gUmVtb3ZlIGto4buPaSBt4bqjbmcgPT09PT1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnNwbGljZShwbGFjZSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XHJcblxyXG4gICAgICAgIH0sIDEuMSk7XHJcblxyXG4gICAgICAgIC8vID09PT09IFNwYXduIGtoYXkgPT09PT1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnREb25lIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3TmV4dEtoYXkocGxhY2UpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudERvbmUgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpbmlzaE1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpOyAvLyBjaOG6oXkgdGnhur9wIHRo4bqxbmcga+G6vyB0aeG6v3BcclxuICAgIH1cclxuICAgIGNoZWNrU3VjY2Vzc0l0ZW0oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRydWVcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWlzc2lvbltqXSAhPSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaXNUYXJnZXRDdXM9bnVsbFxyXG4gICAgLy8gbW92ZUN1cygpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc0NvdW50Q3VzIDwgNykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5pc0NvdW50Q3VzXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5pc0NvdW50Q3VzXVxyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmlzQ291bnRDdXNdKVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnRDdXMrK1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQ3VzW2ldO1xyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihjaGlsZCkuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNjAwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1cy5zaGlmdCgpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgLy8gICAgIH0sIDAuNSlcclxuICAgIC8vICAgICB0aGlzLnNwYXdOZXh0S2hheSgpXHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIGl0ZW1RdWV1ZTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBzaHVmZmxlSXRlbSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1RdWV1ZSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtUXVldWUucHVzaChpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNodWZmbGUgRmlzaGVyLVlhdGVzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICAgICAgW3RoaXMuaXRlbVF1ZXVlW2ldLCB0aGlzLml0ZW1RdWV1ZVtqXV0gPSBbdGhpcy5pdGVtUXVldWVbal0sIHRoaXMuaXRlbVF1ZXVlW2ldXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV4dEl0ZW1JbmRleCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2h1ZmZsZUl0ZW0oKTsgLy8gdOG6oW8gbMaw4bujdCBt4bubaVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVF1ZXVlLnNoaWZ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdEl0ZW1JbmRleDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBzcGF3bkl0ZW0oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RSYXkubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdEl0ZW1JbmRleFtpXSA9IC0xOyAvLyBjaMawYSBjw7MgaXRlbSB0csaw4bubY1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zcGF3bkl0ZW1PblJheShpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25JdGVtT25SYXkoaW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBsZXQgbWFnID0gKGluZGV4ID09IDApID8gMTAwMCA6IC0xMDAwO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSXRlbShpbmRleDogbnVtYmVyLCBtYWc6IG51bWJlcikge1xyXG5cclxuICAgICAgICAvLyBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RJdGVtLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIC8vIC8vIHRyw6FuaCB0csO5bmcgaXRlbSB0csaw4bubY1xyXG4gICAgICAgIC8vIHdoaWxlIChyZCA9PT0gdGhpcy5sYXN0SXRlbUluZGV4W2luZGV4XSkge1xyXG4gICAgICAgIC8vICAgICByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEl0ZW0ubGVuZ3RoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IHJkID0gdGhpcy5nZXROZXh0SXRlbUluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5sYXN0SXRlbUluZGV4W2luZGV4XSA9IHJkO1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bcmRdKTtcclxuICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubGlzdFJheVtpbmRleF07XHJcblxyXG4gICAgICAgIHRoaXMuYXJySXRlbVtpbmRleF0ucHVzaChpdGVtKTtcclxuXHJcbiAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGNjLnYzKG1hZywgLTQwKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbShpdGVtLCBtYWcpO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW0oaXRlbTogY2MuTm9kZSwgbWFnKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFggPSAtbWFnO1xyXG4gICAgICAgIGNjLnR3ZWVuKGl0ZW0pXHJcbiAgICAgICAgICAgIC50bygxNywgeyB4OiB0YXJnZXRYIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmlkU291bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0R3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLWdyYXktc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG5cclxuICAgIH1cclxuICAgIG9mZkdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlQ2xvY2t0b1VJKG5vZGUxKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbVRvVUkobm9kZTEsIHRoaXMuYmFyVGltZS5jaGlsZHJlblsxXSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbVRvVUkobm9kZTEsIG5vZGUyKSB7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZGluLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgcG9zID0gbm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbilcclxuICAgICAgICBwb3MgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgLy8gcG9zID0gcG9zLmFkZChjYy52MygwLCAwKSlcclxuICAgICAgICBsZXQgcG9zMiA9IG5vZGUxLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTEucG9zaXRpb24pO1xyXG4gICAgICAgIHBvczIgPSB0aGlzLm1haW5DYW1lcmEuZ2V0V29ybGRUb1NjcmVlblBvaW50KHBvczIpO1xyXG4gICAgICAgIHBvczIgPSB0aGlzLnVpQ2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MyKTtcclxuICAgICAgICBwb3MyID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMikuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgICAgIG5vZGUxLnBhcmVudCA9IHRoaXMudWlOb2RlO1xyXG4gICAgICAgIG5vZGUxLnNjYWxlID0gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyAvIHRoaXMudWlDYW1lcmEuem9vbVJhdGlvICogMC43XHJcbiAgICAgICAgbm9kZTEucG9zaXRpb24gPSBwb3MyXHJcbiAgICAgICAgY2MudHdlZW4obm9kZTEpLnRvKDAuNCwgeyBwb3NpdGlvbjogcG9zLCBzY2FsZTogMC40IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAvLyB0aGlzLm1pc3Npb25CYXIuZ2V0Q29tcG9uZW50KFwidXBkYXRlQmFyXCIpLnVwZGF0ZUJhcigpO1xyXG4gICAgICAgICAgICAvLyB3b29kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJleHBcIilcclxuICAgICAgICAgICAgLy8gLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZE91dCwgZmFsc2UsIDEpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgaXNFbmRHYW1lID0gZmFsc2VcclxuICAgIG9uRW5kR2FtZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNFbmRHYW1lID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzcG9uc2l2ZSgpXHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcclxuICAgICAgICAgICAgdGhpcy5hbWF6aW5nLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua1dpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmRDYXJkLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyVGltZS5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFyckN1cykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCI2LmFuZ3J5XCIsIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgICAgIHRoaXMudGltZXVwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5raW5nLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvc2UsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICBpc0RvYyA9IGZhbHNlXHJcbiAgICAvLyB1cGRhdGUoZHQpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxyXG4gICAgLy8gICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgIC8vICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHVwZGF0ZVJlc3BvbnNpdmUoKSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFyclBvc01lbnVOZ2FuZyA9IFtjYy52MygtMzkxLCAtMTAyKSwgY2MudjMoMzc1LCAtMTEyKSwgY2MudjMoMTE0LCAtMTIwKSwgY2MudjMoLTQwOSwgLTI4NCksIGNjLnYzKC0xNTgsIC0yOTYpLCBjYy52MygxMTgsIC0yODApLCBjYy52MygzOTAsIC0yOTYpLCBjYy52MygtMTM3LCAtMTE2KV07XHJcbiAgICBhcnJQb3NEb2MgPSBbY2MudjMoMjYsIC0zMzcpLCBjYy52MygzMzYsIC0xMTIpLCBjYy52MygxNS41LCAtMTIxKSwgY2MudjMoLTE3MCwgLTUyNS43KSwgY2MudjMoLTMwMCwgLTM1MiksIGNjLnYzKDE4Ni45NiwgLTUxMiksIGNjLnYzKDM1NSwgLTMzNSksIGNjLnYzKC0yOTIsIC0xMTYpXVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAwKSA6IGNjLnYzKDAsIDEwMClcclxuICAgICAgICB0aGlzLmJhckNvaW4uc2NhbGUgPSAobG9naWMpID8gMi41IDogMS40XHJcbiAgICAgICAgdGhpcy5iYXJDb2luLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IChsb2dpYykgPyAyMTAgOiA4MFxyXG4gICAgICAgIHRoaXMucGhhb0hvYS5zY2FsZSA9IChsb2dpYykgPyA5IDogNVxyXG4gICAgICAgIHRoaXMuZ3VpbGQuc2NhbGUgPSAobG9naWMpID8gMiA6IDEuMlxyXG4gICAgICAgIHRoaXMuZ3VpbGQucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoMCwgLTkwMCkgOiBjYy52MygwLCAtMzYwKVxyXG4gICAgICAgIHRoaXMudGFibGUuaGVpZ2h0ID0gKGxvZ2ljKSA/IDEzMDAgOiA5NTVcclxuICAgICAgICB0aGlzLmxpc3RNZW51LnkgPSAobG9naWMpID8gLTgwIDogMFxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5zY2FsZSA9IChsb2dpYykgPyAxLjEgOiAxXHJcbiAgICAgICAgdGhpcy5saXN0S2hheS5zY2FsZSA9IChsb2dpYykgPyAxLjEgOiAxXHJcbiAgICAgICAgdGhpcy50aW1ldXAuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYW1hemluZy5zY2FsZSA9IChsb2dpYykgPyAxIDogMS40XHJcbiAgICAgICAgdGhpcy5iZy5zY2FsZSA9IChsb2dpYykgPyAyIDogMS40XHJcbiAgICAgICAgdGhpcy5saXN0TWVudS5zY2FsZSA9IChsb2dpYykgPyAxLjEgOiAxXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkRG9jLnNjYWxlID0gMS41XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzRG9jID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy50YWJsZS5oZWlnaHQgPSAyMDAwXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuN1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJDb2luLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIwMFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZS5oZWlnaHQgPSAyNDAwXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RNZW51LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyclBvc0RvY1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RNZW51LmNoaWxkcmVuW2ldLnBvc2l0aW9uID0gdGhpcy5hcnJQb3NEb2NbaV1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcGhvbmVYXCIpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudGFibGUuaGVpZ2h0ID0gMTQwMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLnNjYWxlID0gMS4yXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdE1lbnUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJyUG9zTWVudU5nYW5nW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE1lbnUuY2hpbGRyZW5baV0ucG9zaXRpb24gPSB0aGlzLmFyclBvc01lbnVOZ2FuZ1tpXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdE1lbnUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJyUG9zRG9jW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE1lbnUuY2hpbGRyZW5baV0ucG9zaXRpb24gPSB0aGlzLmFyclBvc0RvY1tpXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSBmYWxzZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdE1lbnUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcnJQb3NNZW51TmdhbmdbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RNZW51LmNoaWxkcmVuW2ldLnBvc2l0aW9uID0gdGhpcy5hcnJQb3NNZW51TmdhbmdbaV1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjg1XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==