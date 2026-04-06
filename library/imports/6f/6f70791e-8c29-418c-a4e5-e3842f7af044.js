"use strict";
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
        _this.shadow = null;
        _this.btnPizza = null;
        _this.preCoin = null;
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
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        // this.spawFirstItem()
        // this.spawFistkhay()
        for (var i = 0; i < this.listCus.childrenCount; i++) {
            this.arrCus.push(this.listCus.children[i]);
        }
        // this.scheduleOnce(() => {
        //     cc.tween(this.notiMission).to(0.5, { opacity: 0 }).call(() => {
        //         this.notiMission.active = false;
        //         // this.clockTime.active = true
        //         this.clockTime.getComponent("timeClock").click()
        //     }).start()
        // }, 1.5)
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
        this.arrCus[0].getComponent("cusMission").loadTime();
        this.handtut.active = false;
        this.btnPizza.children[1].active = false;
        if (!this.firstClick) {
            this.firstClick = true;
            this.guild.active = false;
            this.handtut.active = false;
            this.shadow.active = false;
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
                console.log(_this.isTargetItemPlace);
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
        if (this.isDoc == false) {
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
        }
        else {
            for (var i = 0; i < 2; i++) {
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
        }
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
        if (value == true) {
            this.barTime.getComponent("barTime").endGame();
            this.amazing.active = true;
            // cc.audioEngine.play(this.soundEnd, false, 1)
            this.scheduleOnce(function () {
                // cc.audioEngine.play(this.soundThinkWin, false, 1)
                // cc.audioEngine.play(this.soundWin, false, 1)
                // this.endCard.getChildByName("title").active = false
                _this.endCardWin.active = true;
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
    NewClass.prototype.update = function (dt) {
        // this.lbCoin.string = globalThis.gold.toString()
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
        // this.barTime.scale = (logic) ? 2 : 1.1
        this.barCoin.scale = (logic) ? 2.5 : 1.4;
        this.barCoin.getComponent(cc.Widget).top = (logic) ? 130 : 80;
        // this.clockTime.scale = (logic) ? 1.7 : 1
        this.phaoHoa.scale = (logic) ? 9 : 5;
        this.guild.scale = (logic) ? 2 : 1.2;
        this.guild.position = (logic) ? cc.v3(0, -900) : cc.v3(0, -360);
        this.table.height = (logic) ? 1300 : 955;
        this.listMenu.y = (logic) ? -80 : 0;
        // this.listCus.position = (logic) ? cc.v3(230, 56) : cc.v3(0, 56)
        this.listCus.scale = (logic) ? 1.1 : 1;
        // this.listKhay.position = (logic) ? cc.v3(220, 14.6) : cc.v3(0, 14.6)
        this.listKhay.scale = (logic) ? 1.1 : 1;
        // this.listRayNode.parent.scale = (logic) ? 0.8 : 1
        // this.listRayNode.parent.position = (logic) ? cc.v3(0, -50) : cc.v3(0, 0)
        this.timeup.scale = (logic) ? 1 : 1.4;
        this.amazing.scale = (logic) ? 1 : 1.4;
        // this.notiMission.scale = (logic) ? 1.5 : 1
        this.bg.scale = (logic) ? 2 : 1.4;
        if (logic == true) {
            this.isDoc = true;
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // this.camera.node.position = cc.v3(0, -70)
            // this.btnDownload.getComponent(cc.Widget).bottom = 197
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 1.7;
            // this.camera.node.position = cc.v3(0, -150)
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                // this.btnDownload.getComponent(cc.Widget).bottom = 400
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 2;
                // this.camera.node.position = cc.v3(0, -120)
                // this.btnDownload.active = false
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
                this.camera.node.position = cc.v3(0, -50);
                // this.btnDownload.active = true
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
    ], NewClass.prototype, "shadow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnPizza", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCoin", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();