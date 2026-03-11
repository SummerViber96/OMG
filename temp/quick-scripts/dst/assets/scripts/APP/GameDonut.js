
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
cc._RF.push(module, 'e8778zXcBZHvK+TTP4/Ph/t', 'GameDonut');
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
globalThis.coin = 100;
globalThis.scGame = false;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundShowPop = null;
        _this.soundClosePop = null;
        _this.soundBg = null;
        _this.soundWin = null;
        _this.soundLose = null;
        _this.soundHello = null;
        _this.soundHelloCus2 = null;
        _this.soundHelloCus3 = null;
        _this.soundTrans = null;
        _this.soundClick = null;
        _this.soundDonutJump = null;
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
        _this.clockTime = null;
        _this.cake = null;
        _this.creeam = null;
        _this.phaoHoa = null;
        _this.listHand = null;
        _this.warning = null;
        _this.guild = null;
        _this.listItem = [];
        _this.listRay = [];
        _this.listKhay = null;
        _this.preKhay = null;
        _this.btnDownload = null;
        _this.listRayNode = null;
        _this.timeup = null;
        _this.amazing = null;
        // @property(cc.Camera)
        // camera:cc.Camera=null
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
        _this.arrMission = [[6, 7], [3, 2], [0, 4, 1], [0, 2], [7, 8], [3, 1, 2], [1, 2, 6], [8, 3, 2], [0, 6]];
        _this.arrTargetMission = [];
        _this.arrCus = [];
        _this.isStartgame = false;
        _this.isHand = null;
        _this.countMiss = 3;
        _this.isCountCus = 3;
        _this.isCountDone = 0;
        // spawnItem() {
        //     for (let i = 0; i < this.listRay.length; i++) {
        //         let mag = (i == 0) ? 1000 : -1000
        //            let rd = Math.floor(Math.random() * this.listItem.length)
        //             let item = cc.instantiate(this.listItem[rd]);
        //             item.parent = this.listRay[i];
        //             this.arrItem[i].push(item);
        //             item.position = cc.v3(mag, -40)
        //             this.moveItem(item, mag);
        //         this.schedule(() => {
        //             let rd = Math.floor(Math.random() * this.listItem.length)
        //             let item = cc.instantiate(this.listItem[rd]);
        //             item.parent = this.listRay[i];
        //             this.arrItem[i].push(item);
        //             item.position = cc.v3(mag, -40)
        //             this.moveItem(item, mag);
        //         }, 2)
        //     }
        // }
        _this.itemQueue = [];
        _this.lastItemIndex = [];
        _this.isLast = false;
        _this.isEndGame = false;
        // btn_choose(event, value) {
        _this.isDoc = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        // this.schedule(() => {
        //     this.spawnItem();
        // }, 1); // mỗi 1s spawn 1 item
        // this.spawnItem()
        this.spawFirstItem();
        this.spawFistkhay();
        for (var i = 0; i < this.listCus.childrenCount; i++) {
            this.arrCus.push(this.listCus.children[i]);
        }
    };
    NewClass.prototype.spawFirstItem = function () {
        var arr = [3, 0, 5, 4, 6, 7, 8, 1, 2];
        var arr2 = [7, 1, 2, 8, 3, 0, 3, 6, 2,];
        for (var i = 0; i < arr.length; i++) {
            var rd = arr[i];
            var item = cc.instantiate(this.listItem[rd]);
            item.parent = this.listRay[0];
            this.arrItem[0].push(item);
            item.position = cc.v3((i - 4) * 250, -40);
            if (i == 4) {
                item.getChildByName("hand").active = true;
                this.isHand = item.getChildByName("hand");
            }
        }
        for (var i = 0; i < arr.length; i++) {
            var rd = arr2[i];
            var item = cc.instantiate(this.listItem[rd]);
            item.parent = this.listRay[1];
            this.arrItem[1].push(item);
            item.position = cc.v3((i - 4) * 250, -40);
        }
    };
    NewClass.prototype.startGame = function () {
        var _this = this;
        if (this.isStartgame == false) {
            this.barTime.getComponent("barTime").countDown();
            for (var i = 0; i < 3; i++) {
                var child = this.arrCus[i];
                child.getComponent("cusMission").loadTime();
            }
            this.isStartgame = true;
            this.isHand.active = false;
            this.guild.active = false;
            var _loop_1 = function (i) {
                var item = this_1.arrItem[0][i];
                var posNext = item.position.x - 2000;
                cc.tween(item)
                    .to(16, { x: posNext })
                    .call(function () {
                    item.destroy();
                })
                    .start();
            };
            var this_1 = this;
            for (var i = 0; i < this.arrItem[0].length; i++) {
                _loop_1(i);
            }
            var _loop_2 = function (i) {
                var item = this_2.arrItem[1][i];
                var posNext = item.position.x + 2000;
                cc.tween(item)
                    .to(16, { x: posNext })
                    .call(function () {
                    item.destroy();
                })
                    .start();
            };
            var this_2 = this;
            for (var i = 0; i < this.arrItem[1].length; i++) {
                _loop_2(i);
            }
            this.scheduleOnce(function () {
                _this.spawnItem();
            }, 1.7);
        }
        // this.spawnItem()
    };
    NewClass.prototype.spawFistkhay = function () {
        // this.arrTargetMission = this.arrMission
        var arr = [cc.v3(-600, 0), cc.v3(0, 0), cc.v3(600, 0)];
        for (var i = 0; i < 3; i++) {
            var preKhay = cc.instantiate(this.preKhay);
            preKhay.parent = this.listKhay;
            preKhay.position = arr[i];
            this.arrKhay.push(preKhay);
            this.loadDataKhay(this.arrMission[i], preKhay);
            this.arrTargetMission.push(this.arrMission[i]);
        }
    };
    NewClass.prototype.spawNextKhay = function () {
        var _this = this;
        // this.arrTargetMission.shift();
        if (this.isCountCus <= 7 && this.countMiss < 7) {
            var pos = cc.v3(1200, 0);
            var preKhay = cc.instantiate(this.preKhay);
            preKhay.parent = this.listKhay;
            preKhay.position = pos;
            this.arrKhay.push(preKhay);
            this.loadDataKhay(this.arrMission[this.countMiss], preKhay);
            this.arrTargetMission.push(this.arrMission[this.countMiss]);
            this.countMiss++;
        }
        for (var i = 0; i < this.arrKhay.length; i++) {
            var khay = this.arrKhay[i];
            cc.tween(khay).by(0.8, { position: cc.v3(-600, 0) }).start();
        }
        this.scheduleOnce(function () {
            _this.arrKhay.shift();
            _this.arrTargetMission.shift();
        }, 0.2);
    };
    NewClass.prototype.loadDataKhay = function (data, khay) {
        if (data) {
            var arr = [cc.v3(-170, -20), cc.v3(260, -20)];
            if (data.length == 3) {
                arr = [cc.v3(-256, -20), cc.v3(112.838, -20), cc.v3(427, -20)];
            }
            for (var i = 0; i < data.length; i++) {
                var item = cc.instantiate(this.listItem[data[i]]);
                item.parent = khay;
                item.position = arr[i];
                item.scale = 2.2;
                item.getComponent("Item").loadGray();
            }
        }
    };
    NewClass.prototype.checkMission = function (id, node) {
        // console.log(this.arrTargetMission)
        this.startGame();
        if (this.isDoc == false) {
            for (var i = 0; i < this.arrTargetMission.length; i++) {
                var mission = this.arrTargetMission[i];
                for (var j = 0; j < mission.length; j++) {
                    if (id == mission[j]) {
                        this.arrTargetMission[i][j] = 100;
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
                        this.checkSuccess(i, j);
                        return this.arrKhay[i].children[j];
                    }
                }
            }
        }
        node.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1);
        return null;
    };
    NewClass.prototype.checkSuccess = function (i, j) {
        var _this = this;
        this.scheduleOnce(function () {
            if (j != null) {
                var targetKhay = _this.arrKhay[i].children[j];
                targetKhay.getComponent("Item").offGray(targetKhay.children[1]);
                cc.tween(targetKhay).to(0.2, { scale: 2.5 }).to(0.1, { scale: 2.2 }).start();
            }
        }, 0.6);
        var mission = this.arrTargetMission[i];
        var check = true;
        var cus = this.arrCus[i];
        console.log(i, j);
        for (var m = 0; m < mission.length; m++) {
            if (mission[m] != 100) {
                check = false;
            }
        }
        if (check == true) {
            this.isCountDone++;
            this.scheduleOnce(function () {
                cus.getChildByName("vfx_coin").active = true;
                cus.getChildByName("vfx_coin").getComponent(cc.Animation).play();
                cus.getComponent("cusMission").happy();
                globalThis.coin += 50;
                if (mission.length == 3) {
                    globalThis.coin += 20;
                }
                cc.audioEngine.play(_this.soundSellDone, false, 1);
            }, 0.6);
            //bonus tien
            if (i == 0) {
                this.scheduleOnce(function () {
                    _this.moveCus();
                }, 0.8);
            }
            else {
                this.checkSuccessItem();
            }
            if (this.isCountDone == 7) {
                this.scheduleOnce(function () {
                    _this.onEndGame(true);
                }, 0.5);
            }
        }
        else {
            this.checkSuccessItem();
        }
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
    NewClass.prototype.moveCus = function () {
        var _this = this;
        if (this.isCountCus < 7) {
            this.listCus.children[this.isCountCus].active = true;
            this.arrCus.push(this.listCus.children[this.isCountCus]);
            this.isCountCus++;
        }
        for (var i = 0; i < this.arrCus.length; i++) {
            var child = this.arrCus[i];
            cc.tween(child).by(0.8, { position: cc.v3(-600, 0) }).call(function () {
            }).start();
        }
        this.scheduleOnce(function () {
            _this.arrCus.shift();
        }, 0.5);
        this.spawNextKhay();
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
            .to(16, { x: targetX })
            .call(function () {
            item.destroy();
        })
            .start();
    };
    NewClass.prototype.start = function () {
        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.5);
    };
    // startGame() {
    //     this.listHand.children[0].active = true
    //     // this.scheduleOnce(() => {
    //     //     if (this.isStep == 0) {
    //     //     }
    //     // }, 2)
    // }
    NewClass.prototype.btn_plate = function (event) {
        var btn = event.currentTarget;
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1);
    };
    NewClass.prototype.btn_cake = function (event) {
        var _this = this;
        var cake = null;
        if (this.isStep == 0) {
            this.barTime.getComponent("barTime").countDown();
            this.guild.active = false;
            this.listHand.children[0].active = false;
            cake = this.cake.children[0];
            this.listCheckItem.children[0].active = true;
            this.scheduleOnce(function () {
                if (_this.isStep == 1) {
                    _this.listHand.children[1].active = true;
                }
            }, 2.5);
        }
        else if (this.isStep == 3) {
            this.listHand.children[0].active = false;
            cake = this.cake.children[3];
            // this.listCheckItem.children[0].active = true
            this.listCheckItem.children[0].active = true;
            this.scheduleOnce(function () {
                if (_this.isStep == 4) {
                    _this.listHand.children[1].active = true;
                }
            }, 2.5);
        }
        else {
            var btn = event.currentTarget;
            btn.getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 1);
            return;
        }
        cc.audioEngine.play(this.soundShowPop, false, 1);
        cake.scale = 0.6;
        var localPos = cake.position;
        cake.position = localPos.add(cc.v3(0, 120));
        cake.active = true;
        this.isStep++;
        cc.tween(cake).to(0.2, { position: localPos }).to(0.2, { scale: 0.75 }).to(0.07, { scale: 0.7 }).start();
    };
    NewClass.prototype.btn_Dau = function (event) {
        var _this = this;
        if (this.isStep == 2) {
            cc.audioEngine.play(this.soundCherry, false, 1);
            this.listHand.children[2].active = false;
            var listFruit = this.cake.children[2];
            this.isStep++;
            listFruit.active = true;
            var _loop_3 = function (i) {
                var fruit = listFruit.children[i];
                fruit.active = false;
                var localPos = fruit.position;
                fruit.position = localPos.add(cc.v3(0, 120));
                var time = (i % 2 == 0) ? 0 : 0.2;
                this_3.scheduleOnce(function () {
                    fruit.active = true;
                    _this.listCheckItem.children[2].active = true;
                    _this.listCheckItem.children[3].active = true;
                    _this.listCheckItem.children[4].active = true;
                    _this.listCheckItem.children[5].active = true;
                    cc.tween(fruit).to(0.3, { position: localPos }).call(function () {
                        for (var _i = 0, _a = _this.listCheckItem.children; _i < _a.length; _i++) {
                            var child = _a[_i];
                            child.active = false;
                        }
                    }).start();
                }, time);
            };
            var this_3 = this;
            for (var i = 0; i < listFruit.childrenCount; i++) {
                _loop_3(i);
            }
            this.scheduleOnce(function () {
                if (_this.isStep == 3) {
                    _this.listHand.children[0].active = true;
                }
            }, 2.5);
        }
        else if (this.isStep == 5 && this.isLast == true) {
            this.listHand.children[2].active = false;
            cc.audioEngine.play(this.soundCherry, false, 1);
            this.listCheckItem.children[2].active = true;
            this.listCheckItem.children[3].active = true;
            this.listCheckItem.children[4].active = true;
            this.listCheckItem.children[5].active = true;
            var listFruit = this.cake.children[6];
            this.isStep++;
            listFruit.active = true;
            var _loop_4 = function (i) {
                var fruit = listFruit.children[i];
                fruit.active = false;
                var localPos = fruit.position;
                fruit.position = localPos.add(cc.v3(0, 120));
                var time = (i % 2 == 0) ? 0 : 0.3;
                this_4.scheduleOnce(function () {
                    fruit.active = true;
                    cc.tween(fruit).to(0.3, { position: localPos }).start();
                }, time);
            };
            var this_4 = this;
            for (var i = 0; i < listFruit.childrenCount; i++) {
                _loop_4(i);
            }
            this.scheduleOnce(function () {
                _this.phaoHoa.active = true;
                cc.audioEngine.play(_this.soundWin, false, 1);
                globalThis.coin += 100;
            }, 0.5);
            this.scheduleOnce(function () {
                _this.onEndGame(true);
            }, 1.5);
        }
        else {
            var btn = event.currentTarget;
            btn.getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 1);
        }
        // let btn = event.currentTarget
        // btn.getComponent(cc.Animation).play();
        // cc.audioEngine.play(this.soundWrong, false, 1)
    };
    NewClass.prototype.btn_Kiwi = function (event) {
        var btn = event.currentTarget;
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1);
    };
    NewClass.prototype.btn_Hoa = function (event) {
        var btn = event.currentTarget;
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1);
    };
    NewClass.prototype.btn_cream = function () {
        var _this = this;
        if (this.isStep == 1) {
            this.listHand.children[1].active = false;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundCream, false, 1);
            }, 0.3);
            this.listCheckItem.children[1].active = true;
            this.creeam.getComponent(cc.Animation).play("cream1");
            var cream = this.cake.children[1];
            this.isStep++;
            cream.scale = 0;
            cream.active = true;
            cc.tween(cream).delay(0.4).to(0.4, { scale: 0.7 }).start();
            this.scheduleOnce(function () {
                cc.tween(_this.creeam.children[1]).to(0.4, { position: cc.v3(0, 0), angle: 0 }).start();
            }, 1.2);
            this.scheduleOnce(function () {
                if (_this.isStep == 2) {
                    _this.listHand.children[2].active = true;
                }
            }, 2.5);
        }
        else if (this.isStep == 4) {
            this.listCheckItem.children[1].active = true;
            this.listHand.children[1].active = false;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundCream, false, 1);
            }, 0.5);
            this.creeam.getComponent(cc.Animation).play("cream2");
            var creamItem_1 = this.creeam.children[1];
            var cream = this.cake.children[4];
            this.isStep++;
            cream.scale = 0;
            cream.active = true;
            cc.tween(cream).delay(0.6).to(0.4, { scale: 0.7 }).start();
            var listCream_1 = this.cake.children[5];
            var listCream2_1 = this.cake.children[7];
            // cc.audioEngine.play(this.soundCream, false, 1)
            var arrrPos_1 = [cc.v3(-507, 222), cc.v3(-551, 197), cc.v3(-590, 161), cc.v3(-621, 111), cc.v3(-634, 50, 69), cc.v3(-631.5, 21), cc.v3(-612.6, -4), cc.v3(-568, -5.4), cc.v3(-528, 19.5),
                cc.v3(-490, 61), cc.v3(-464, 108), cc.v3(-456, 170), cc.v3(-473, 204)
            ];
            this.scheduleOnce(function () {
                _this.isLast = true;
            }, 2);
            this.scheduleOnce(function () {
                listCream_1.active = true;
                var _loop_5 = function (i) {
                    listCream_1.children[i].active = false;
                    _this.scheduleOnce(function () {
                        // creamItem.position = pos
                        // console.log()
                        // if (i % 2 == 0) {
                        //     cc.audioEngine.play(this.soundCreamMini, false, 1)
                        // }
                        cc.tween(creamItem_1).to(0.1, { position: arrrPos_1[i] }).start();
                        listCream_1.children[i].active = true;
                    }, 0.15 * i);
                };
                for (var i = 0; i < listCream_1.childrenCount; i++) {
                    _loop_5(i);
                }
            }, 1.3);
            this.scheduleOnce(function () {
                listCream2_1.active = true;
                var _loop_6 = function (i) {
                    listCream2_1.children[i].active = false;
                    _this.scheduleOnce(function () {
                        cc.tween(creamItem_1).to(0.1, { position: arrrPos_1[i + 6] }).start();
                        listCream2_1.children[i].active = true;
                    }, 0.15 * i);
                };
                for (var i = 0; i < listCream2_1.childrenCount; i++) {
                    _loop_6(i);
                }
            }, 1.3 + 0.15 * 6);
            this.scheduleOnce(function () {
                cc.tween(_this.creeam.children[1]).to(0.4, { position: cc.v3(0, 0), angle: 0 }).start();
                _this.scheduleOnce(function () {
                    if (_this.isStep == 5) {
                        _this.listHand.children[2].active = true;
                    }
                }, 2.5);
            }, 3.8);
        }
        else {
            cc.audioEngine.play(this.soundWrong, false, 1);
            this.creeam.getComponent(cc.Animation).play("btn_wrong");
        }
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
                cc.audioEngine.play(_this.soundThinkWin, false, 1);
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
        this.camera.node.position = cc.v3(0, 0);
        this.barTime.scale = (logic) ? 2 : 1.1;
        this.barCoin.scale = (logic) ? 2 : 1.1;
        this.clockTime.scale = (logic) ? 1.7 : 1;
        this.phaoHoa.scale = (logic) ? 9 : 5;
        this.guild.scale = (logic) ? 2 : 1.2;
        this.guild.position = (logic) ? cc.v3(0, -900) : cc.v3(0, -360);
        this.listCus.position = (logic) ? cc.v3(230, 56) : cc.v3(0, 56);
        this.listCus.scale = (logic) ? 0.7 : 1;
        this.listKhay.position = (logic) ? cc.v3(220, 14.6) : cc.v3(0, 14.6);
        this.listKhay.scale = (logic) ? 0.7 : 1;
        this.listRayNode.scale = (logic) ? 0.8 : 1;
        this.listRayNode.position = (logic) ? cc.v3(0, -50) : cc.v3(0, 0);
        this.timeup.scale = (logic) ? 1 : 1.4;
        this.amazing.scale = (logic) ? 1 : 1.4;
        this.btnDownload.active = (logic) ? true : false;
        if (logic == true) {
            this.isDoc = true;
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // this.camera.node.position = cc.v3(0, -70)
            this.btnDownload.getComponent(cc.Widget).bottom = 197;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 2.6;
            // this.camera.node.position = cc.v3(0, -150)
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.btnDownload.getComponent(cc.Widget).bottom = 400;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 2;
                // this.camera.node.position = cc.v3(0, -120)
                this.btnDownload.active = false;
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
    ], NewClass.prototype, "soundHello", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHelloCus2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHelloCus3", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundTrans", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundDonutJump", void 0);
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
    ], NewClass.prototype, "clockTime", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cake", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "creeam", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaoHoa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHand", void 0);
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
    ], NewClass.prototype, "btnDownload", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listRayNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "timeup", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "amazing", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUE7QUFDckIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4M0JDO1FBNTNCRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBR2xDLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUks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QVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyQyxJQUFJLFlBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN0QyxpREFBaUQ7WUFDakQsSUFBSSxTQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDdEwsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDcEUsQ0FBQTtZQUNELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFFdEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lB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QUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBRXRDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQ2hELElBQUksS0FBSyxJ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LElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs4Q0FDSTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBbkdOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4M0I1QjtJQUFELGVBQUM7Q0E5M0JELEFBODNCQyxDQTkzQnFDLEVBQUUsQ0FBQyxTQUFTLEdBODNCakQ7a0JBOTNCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5jb2luID0gMTAwXHJcbmdsb2JhbFRoaXMuc2NHYW1lID0gZmFsc2VcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2hvd1BvcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsb3NlUG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIZWxsbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvQ3VzMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvQ3VzMzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRyYW5zOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmREb251dEp1bXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRFbmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTZWxsRG9uZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5raW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hlcnJ5OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3JlYW1NaW5pOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkV2luOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIHVpQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyVGltZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhckNvaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2hlY2tJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2xvY2tUaW1lOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYWtlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3JlZWFtOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvSG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0SXRlbTogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UmF5OiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtoYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUtoYXk6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkRvd25sb2FkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UmF5Tm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGltZXVwOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhbWF6aW5nOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIC8vIGNhbWVyYTpjYy5DYW1lcmE9bnVsbFxyXG5cclxuICAgIG1heEtoYXkgPSA3XHJcblxyXG4gICAgYXJyRG9udXRwb3MgPSBbXVxyXG4gICAgYXJyRG9udXQgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIC8vIGFycktoYXkgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIC8vIGFycktoYXlQb3MgPSBbXVxyXG4gICAgaXNUdXRDaGlsaSA9IGZhbHNlXHJcbiAgICBpc1R1dE1lYXQgPSBmYWxzZVxyXG4gICAgaXNUdXRWZWdldFRhYmxlID0gZmFsc2VcclxuICAgIGlzVHV0Q2xpY2tNZWF0ID0gZmFsc2VcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZEJnOmNjLkF1ZGlvQ2xpcD1udWxsO1xyXG5cclxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcclxuICAgIC8vIGlzU3RlcCA9IDBcclxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIGlkU291bmQgPSBudWxsXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICAvL2l0ZW06IDA6YnVnZXIsIDE6IGtlbSAyOmRvbnV0IDM6a2hvYWl0YXkgNDpwaG8gNTogcHVkZGluZyA2OiB0cmEgIDc6YmFuaG1pIDg6Y29jb251dFxyXG4gICAgcmF5WTogbnVtYmVyW10gPSBbMTIwLCAwLCAtMTIwXTsgICAvLyB24buLIHRyw60gWSBj4bunYSAzIHJheVxyXG4gICAgc3Bhd25YOiBudW1iZXIgPSA3MDA7ICAgICAgICAgICAgICAvLyB24buLIHRyw60gc3Bhd24gYsOqbiBwaOG6o2lcclxuICAgIGFyckl0ZW0gPSBbW10sIFtdXVxyXG4gICAgYXJyS2hheSA9IFtdXHJcbiAgICBhcnJNaXNzaW9uID0gW1s2LCA3XSwgWzMsIDJdLCBbMCwgNCwgMV0sIFswLCAyXSwgWzcsIDhdLCBbMywgMSwgMl0sIFsxLCAyLCA2XSwgWzgsIDMsIDJdLCBbMCwgNl1dXHJcbiAgICBhcnJUYXJnZXRNaXNzaW9uID0gW11cclxuICAgIGFyckN1cyA9IFtdXHJcbiAgICBpc1N0YXJ0Z2FtZSA9IGZhbHNlXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNwYXduSXRlbSgpO1xyXG4gICAgICAgIC8vIH0sIDEpOyAvLyBt4buXaSAxcyBzcGF3biAxIGl0ZW1cclxuICAgICAgICAvLyB0aGlzLnNwYXduSXRlbSgpXHJcbiAgICAgICAgdGhpcy5zcGF3Rmlyc3RJdGVtKClcclxuICAgICAgICB0aGlzLnNwYXdGaXN0a2hheSgpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDdXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzSGFuZCA9IG51bGxcclxuICAgIHNwYXdGaXJzdEl0ZW0oKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFszLCAwLCA1LCA0LCA2LCA3LCA4LCAxLCAyXVxyXG4gICAgICAgIGxldCBhcnIyID0gWzcsIDEsIDIsIDgsIDMsIDAsIDMsIDYsIDIsXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmQgPSBhcnJbaV1cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW3JkXSk7XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5saXN0UmF5WzBdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hcnJJdGVtWzBdLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMoKGkgLSA0KSAqIDI1MCwgLTQwKTtcclxuICAgICAgICAgICAgaWYgKGkgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0hhbmQgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZCA9IGFycjJbaV1cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW3JkXSk7XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5saXN0UmF5WzFdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hcnJJdGVtWzFdLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMoKGkgLSA0KSAqIDI1MCwgLTQwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGdhbWUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJUaW1lLmdldENvbXBvbmVudChcImJhclRpbWVcIikuY291bnREb3duKClcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRnYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0hhbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckl0ZW1bMF0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5hcnJJdGVtWzBdW2ldXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zTmV4dCA9IGl0ZW0ucG9zaXRpb24ueCAtIDIwMDBcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDE2LCB7IHg6IHBvc05leHQgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1vdmVJdGVtKGl0ZW0saXRlbS5wb3NpdGlvbi5hZGQoY2MudjMoLTIwMDAsMCkpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJJdGVtWzFdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuYXJySXRlbVsxXVtpXVxyXG4gICAgICAgICAgICAgICAgbGV0IHBvc05leHQgPSBpdGVtLnBvc2l0aW9uLnggKyAyMDAwXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxNiwgeyB4OiBwb3NOZXh0IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb3ZlSXRlbShpdGVtLGl0ZW0ucG9zaXRpb24uYWRkKGNjLnYzKC0yMDAwLDApKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduSXRlbSgpXHJcbiAgICAgICAgICAgIH0sIDEuNylcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zcGF3bkl0ZW0oKVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBzcGF3RmlzdGtoYXkoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hcnJUYXJnZXRNaXNzaW9uID0gdGhpcy5hcnJNaXNzaW9uXHJcbiAgICAgICAgbGV0IGFyciA9IFtjYy52MygtNjAwLCAwKSwgY2MudjMoMCwgMCksIGNjLnYzKDYwMCwgMCldXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHByZUtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpXHJcbiAgICAgICAgICAgIHByZUtoYXkucGFyZW50ID0gdGhpcy5saXN0S2hheTtcclxuICAgICAgICAgICAgcHJlS2hheS5wb3NpdGlvbiA9IGFycltpXVxyXG4gICAgICAgICAgICB0aGlzLmFycktoYXkucHVzaChwcmVLaGF5KVxyXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhS2hheSh0aGlzLmFyck1pc3Npb25baV0sIHByZUtoYXkpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5wdXNoKHRoaXMuYXJyTWlzc2lvbltpXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY291bnRNaXNzID0gM1xyXG4gICAgc3Bhd05leHRLaGF5KCkge1xyXG4gICAgICAgIC8vIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5zaGlmdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRDdXMgPD0gNyAmJiB0aGlzLmNvdW50TWlzcyA8IDcpIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYzKDEyMDAsIDApO1xyXG4gICAgICAgICAgICBsZXQgcHJlS2hheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlS2hheSlcclxuICAgICAgICAgICAgcHJlS2hheS5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5O1xyXG4gICAgICAgICAgICBwcmVLaGF5LnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgICAgIHRoaXMuYXJyS2hheS5wdXNoKHByZUtoYXkpXHJcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGFLaGF5KHRoaXMuYXJyTWlzc2lvblt0aGlzLmNvdW50TWlzc10sIHByZUtoYXkpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5wdXNoKHRoaXMuYXJyTWlzc2lvblt0aGlzLmNvdW50TWlzc10pXHJcbiAgICAgICAgICAgIHRoaXMuY291bnRNaXNzKytcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJLaGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBraGF5ID0gdGhpcy5hcnJLaGF5W2ldXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGtoYXkpLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTYwMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyS2hheS5zaGlmdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24uc2hpZnQoKVxyXG4gICAgICAgIH0sIDAuMilcclxuICAgIH1cclxuICAgIGxvYWREYXRhS2hheShkYXRhLCBraGF5KSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IFtjYy52MygtMTcwLCAtMjApLCBjYy52MygyNjAsIC0yMCldXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIgPSBbY2MudjMoLTI1NiwgLTIwKSwgY2MudjMoMTEyLjgzOCwgLTIwKSwgY2MudjMoNDI3LCAtMjApXVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtkYXRhW2ldXSlcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0ga2hheVxyXG4gICAgICAgICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGFycltpXVxyXG4gICAgICAgICAgICAgICAgaXRlbS5zY2FsZSA9IDIuMlxyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoXCJJdGVtXCIpLmxvYWRHcmF5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBjaGVja01pc3Npb24oaWQsIG5vZGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFyclRhcmdldE1pc3Npb24pXHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0RvYyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gbWlzc2lvbltqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb25baV1bal0gPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKGksIGopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFycktoYXlbaV0uY2hpbGRyZW5bal07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3Npb24ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gbWlzc2lvbltqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb25baV1bal0gPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzKGksIGopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFycktoYXlbaV0uY2hpbGRyZW5bal07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlzQ291bnRDdXMgPSAzXHJcbiAgICBpc0NvdW50RG9uZSA9IDBcclxuICAgIGNoZWNrU3VjY2VzcyhpLCBqKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0S2hheSA9IHRoaXMuYXJyS2hheVtpXS5jaGlsZHJlbltqXTtcclxuICAgICAgICAgICAgICAgIHRhcmdldEtoYXkuZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5vZmZHcmF5KHRhcmdldEtoYXkuY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0YXJnZXRLaGF5KS50bygwLjIsIHsgc2NhbGU6IDIuNSB9KS50bygwLjEsIHsgc2NhbGU6IDIuMiB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgMC42KVxyXG4gICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWVcclxuICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICBjb25zb2xlLmxvZyhpLCBqKVxyXG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgbWlzc2lvbi5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICBpZiAobWlzc2lvblttXSAhPSAxMDApIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb25lKytcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY3VzLmdldENoaWxkQnlOYW1lKFwidmZ4X2NvaW5cIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY3VzLmdldENoaWxkQnlOYW1lKFwidmZ4X2NvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5oYXBweSgpXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gNTBcclxuICAgICAgICAgICAgICAgIGlmIChtaXNzaW9uLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDIwXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2VsbERvbmUsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB9LCAwLjYpXHJcblxyXG4gICAgICAgICAgICAvL2JvbnVzIHRpZW5cclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwLjgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2Vzc0l0ZW0oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnREb25lID09IDcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzSXRlbSgpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrU3VjY2Vzc0l0ZW0oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRydWVcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWlzc2lvbltqXSAhPSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZUN1cygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50Q3VzIDwgNykge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5pc0NvdW50Q3VzXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuaXNDb3VudEN1c10pXHJcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudEN1cysrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV07XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC02MDAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnNoaWZ0KClcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5zcGF3TmV4dEtoYXkoKVxyXG5cclxuICAgIH1cclxuICAgIC8vIHNwYXduSXRlbSgpIHtcclxuXHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0UmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBtYWcgPSAoaSA9PSAwKSA/IDEwMDAgOiAtMTAwMFxyXG4gICAgLy8gICAgICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RJdGVtLmxlbmd0aClcclxuICAgIC8vICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtyZF0pO1xyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmxpc3RSYXlbaV07XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFyckl0ZW1baV0ucHVzaChpdGVtKTtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBjYy52MyhtYWcsIC00MClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubW92ZUl0ZW0oaXRlbSwgbWFnKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RJdGVtLmxlbmd0aClcclxuICAgIC8vICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtyZF0pO1xyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmxpc3RSYXlbaV07XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFyckl0ZW1baV0ucHVzaChpdGVtKTtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBjYy52MyhtYWcsIC00MClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubW92ZUl0ZW0oaXRlbSwgbWFnKTtcclxuICAgIC8vICAgICAgICAgfSwgMilcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBpdGVtUXVldWU6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgc2h1ZmZsZUl0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtUXVldWUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RJdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVF1ZXVlLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaHVmZmxlIEZpc2hlci1ZYXRlc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLml0ZW1RdWV1ZS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFt0aGlzLml0ZW1RdWV1ZVtpXSwgdGhpcy5pdGVtUXVldWVbal1dID0gW3RoaXMuaXRlbVF1ZXVlW2pdLCB0aGlzLml0ZW1RdWV1ZVtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE5leHRJdGVtSW5kZXgoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLml0ZW1RdWV1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNodWZmbGVJdGVtKCk7IC8vIHThuqFvIGzGsOG7o3QgbeG7m2lcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1RdWV1ZS5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxhc3RJdGVtSW5kZXg6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgc3Bhd25JdGVtKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0UmF5Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxhc3RJdGVtSW5kZXhbaV0gPSAtMTsgLy8gY2jGsGEgY8OzIGl0ZW0gdHLGsOG7m2NcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25JdGVtT25SYXkoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduSXRlbU9uUmF5KGluZGV4OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgbGV0IG1hZyA9IChpbmRleCA9PSAwKSA/IDEwMDAgOiAtMTAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKGluZGV4LCBtYWcpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVJdGVtKGluZGV4LCBtYWcpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUl0ZW0oaW5kZXg6IG51bWJlciwgbWFnOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgLy8gbGV0IHJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5saXN0SXRlbS5sZW5ndGgpO1xyXG5cclxuICAgICAgICAvLyAvLyB0csOhbmggdHLDuW5nIGl0ZW0gdHLGsOG7m2NcclxuICAgICAgICAvLyB3aGlsZSAocmQgPT09IHRoaXMubGFzdEl0ZW1JbmRleFtpbmRleF0pIHtcclxuICAgICAgICAvLyAgICAgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RJdGVtLmxlbmd0aCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCByZCA9IHRoaXMuZ2V0TmV4dEl0ZW1JbmRleCgpO1xyXG4gICAgICAgIHRoaXMubGFzdEl0ZW1JbmRleFtpbmRleF0gPSByZDtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW3JkXSk7XHJcbiAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmxpc3RSYXlbaW5kZXhdO1xyXG5cclxuICAgICAgICB0aGlzLmFyckl0ZW1baW5kZXhdLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgIGl0ZW0ucG9zaXRpb24gPSBjYy52MyhtYWcsIC00MCk7XHJcblxyXG4gICAgICAgIHRoaXMubW92ZUl0ZW0oaXRlbSwgbWFnKTtcclxuICAgIH1cclxuICAgIG1vdmVJdGVtKGl0ZW06IGNjLk5vZGUsIG1hZykge1xyXG4gICAgICAgIGxldCB0YXJnZXRYID0gLW1hZztcclxuICAgICAgICBjYy50d2VlbihpdGVtKVxyXG4gICAgICAgICAgICAudG8oMTYsIHsgeDogdGFyZ2V0WCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pZFNvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuNSlcclxuXHJcbiAgICB9XHJcbiAgICAvLyBzdGFydEdhbWUoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgLy8gICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgaWYgKHRoaXMuaXNTdGVwID09IDApIHtcclxuICAgIC8vICAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIH0sIDIpXHJcbiAgICAvLyB9XHJcbiAgICBidG5fcGxhdGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG4gICAgfVxyXG4gICAgYnRuX2Nha2UoZXZlbnQpIHtcclxuICAgICAgICBsZXQgY2FrZSA9IG51bGxcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5jb3VudERvd24oKVxyXG4gICAgICAgICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNha2UgPSB0aGlzLmNha2UuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMi41KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGNha2UgPSB0aGlzLmNha2UuY2hpbGRyZW5bM11cclxuICAgICAgICAgICAgLy8gdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMi41KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcclxuICAgICAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgIGNha2Uuc2NhbGUgPSAwLjY7XHJcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gY2FrZS5wb3NpdGlvbjtcclxuICAgICAgICBjYWtlLnBvc2l0aW9uID0gbG9jYWxQb3MuYWRkKGNjLnYzKDAsIDEyMCkpXHJcblxyXG4gICAgICAgIGNha2UuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB0aGlzLmlzU3RlcCsrXHJcbiAgICAgICAgY2MudHdlZW4oY2FrZSkudG8oMC4yLCB7IHBvc2l0aW9uOiBsb2NhbFBvcyB9KS50bygwLjIsIHsgc2NhbGU6IDAuNzUgfSkudG8oMC4wNywgeyBzY2FsZTogMC43IH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGJ0bl9EYXUoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGVycnksIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGxpc3RGcnVpdCA9IHRoaXMuY2FrZS5jaGlsZHJlblsyXVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCsrXHJcbiAgICAgICAgICAgIGxpc3RGcnVpdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RGcnVpdC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBmcnVpdCA9IGxpc3RGcnVpdC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGZydWl0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSBmcnVpdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGZydWl0LnBvc2l0aW9uID0gbG9jYWxQb3MuYWRkKGNjLnYzKDAsIDEyMCkpXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZSA9IChpICUgMiA9PSAwKSA/IDAgOiAwLjJcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmcnVpdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihmcnVpdCkudG8oMC4zLCB7IHBvc2l0aW9uOiBsb2NhbFBvcyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfSwgdGltZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyLjUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDUgJiYgdGhpcy5pc0xhc3QgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGVycnksIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bNV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBsZXQgbGlzdEZydWl0ID0gdGhpcy5jYWtlLmNoaWxkcmVuWzZdXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwKytcclxuICAgICAgICAgICAgbGlzdEZydWl0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEZydWl0LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZydWl0ID0gbGlzdEZydWl0LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgZnJ1aXQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvcyA9IGZydWl0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgZnJ1aXQucG9zaXRpb24gPSBsb2NhbFBvcy5hZGQoY2MudjMoMCwgMTIwKSlcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lID0gKGkgJSAyID09IDApID8gMCA6IDAuM1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZydWl0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihmcnVpdCkudG8oMC4zLCB7IHBvc2l0aW9uOiBsb2NhbFBvcyB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB9LCB0aW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGhhb0hvYS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDEwMFxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKHRydWUpXHJcbiAgICAgICAgICAgIH0sIDEuNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0XHJcbiAgICAgICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcclxuICAgICAgICAvLyBidG4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMSlcclxuICAgIH1cclxuICAgIGJ0bl9LaXdpKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcclxuICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMSlcclxuICAgIH1cclxuICAgIGJ0bl9Ib2EoZXZlbnQpIHtcclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG4gICAgfVxyXG4gICAgaXNMYXN0ID0gZmFsc2VcclxuICAgIGJ0bl9jcmVhbSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENyZWFtLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3JlZWFtLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjcmVhbTFcIilcclxuICAgICAgICAgICAgbGV0IGNyZWFtID0gdGhpcy5jYWtlLmNoaWxkcmVuWzFdXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwKytcclxuICAgICAgICAgICAgY3JlYW0uc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICBjcmVhbS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNyZWFtKS5kZWxheSgwLjQpLnRvKDAuNCwgeyBzY2FsZTogMC43IH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jcmVlYW0uY2hpbGRyZW5bMV0pLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCksIGFuZ2xlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgMS4yKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyLjUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ3JlYW0sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICB0aGlzLmNyZWVhbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY3JlYW0yXCIpXHJcbiAgICAgICAgICAgIGxldCBjcmVhbUl0ZW0gPSB0aGlzLmNyZWVhbS5jaGlsZHJlblsxXVxyXG4gICAgICAgICAgICBsZXQgY3JlYW0gPSB0aGlzLmNha2UuY2hpbGRyZW5bNF1cclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXArK1xyXG4gICAgICAgICAgICBjcmVhbS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIGNyZWFtLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2MudHdlZW4oY3JlYW0pLmRlbGF5KDAuNikudG8oMC40LCB7IHNjYWxlOiAwLjcgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBsZXQgbGlzdENyZWFtID0gdGhpcy5jYWtlLmNoaWxkcmVuWzVdXHJcbiAgICAgICAgICAgIGxldCBsaXN0Q3JlYW0yID0gdGhpcy5jYWtlLmNoaWxkcmVuWzddXHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENyZWFtLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgbGV0IGFycnJQb3MgPSBbY2MudjMoLTUwNywgMjIyKSwgY2MudjMoLTU1MSwgMTk3KSwgY2MudjMoLTU5MCwgMTYxKSwgY2MudjMoLTYyMSwgMTExKSwgY2MudjMoLTYzNCwgNTAsIDY5KSwgY2MudjMoLTYzMS41LCAyMSksIGNjLnYzKC02MTIuNiwgLTQpLCBjYy52MygtNTY4LCAtNS40KSwgY2MudjMoLTUyOCwgMTkuNSksXHJcbiAgICAgICAgICAgIGNjLnYzKC00OTAsIDYxKSwgY2MudjMoLTQ2NCwgMTA4KSwgY2MudjMoLTQ1NiwgMTcwKSwgY2MudjMoLTQ3MywgMjA0KVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMYXN0ID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlzdENyZWFtLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RDcmVhbS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0Q3JlYW0uY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhbUl0ZW0ucG9zaXRpb24gPSBwb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoaSAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ3JlYW1NaW5pLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY3JlYW1JdGVtKS50bygwLjEsIHsgcG9zaXRpb246IGFycnJQb3NbaV0gfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdENyZWFtLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjE1ICogaSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxLjMpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpc3RDcmVhbTIuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdENyZWFtMi5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0Q3JlYW0yLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY3JlYW1JdGVtKS50bygwLjEsIHsgcG9zaXRpb246IGFycnJQb3NbaSArIDZdIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RDcmVhbTIuY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMTUgKiBpKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEuMyArIDAuMTUgKiA2KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNyZWVhbS5jaGlsZHJlblsxXSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygwLCAwKSwgYW5nbGU6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDIuNSlcclxuICAgICAgICAgICAgfSwgMy44KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV3JvbmcsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLmNyZWVhbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYnRuX3dyb25nXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcblxyXG4gICAgfVxyXG4gICAgb2ZmR3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuICAgIH1cclxuICAgIG1vdmVDbG9ja3RvVUkobm9kZTEpIHtcclxuICAgICAgICB0aGlzLm1vdmVJdGVtVG9VSShub2RlMSwgdGhpcy5iYXJUaW1lLmNoaWxkcmVuWzFdKTtcclxuICAgIH1cclxuICAgIG1vdmVJdGVtVG9VSShub2RlMSwgbm9kZTIpIHtcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIGxldCBwb3MgPSBub2RlMi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUyLnBvc2l0aW9uKVxyXG4gICAgICAgIHBvcyA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICAvLyBwb3MgPSBwb3MuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgICAgIGxldCBwb3MyID0gbm9kZTEucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMS5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zMiA9IHRoaXMubWFpbkNhbWVyYS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQocG9zMik7XHJcbiAgICAgICAgcG9zMiA9IHRoaXMudWlDYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHBvczIpO1xyXG4gICAgICAgIHBvczIgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MyKS5hZGQoY2MudjMoMCwgMCkpXHJcbiAgICAgICAgbm9kZTEucGFyZW50ID0gdGhpcy51aU5vZGU7XHJcbiAgICAgICAgbm9kZTEuc2NhbGUgPSB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvIC8gdGhpcy51aUNhbWVyYS56b29tUmF0aW8gKiAwLjdcclxuICAgICAgICBub2RlMS5wb3NpdGlvbiA9IHBvczJcclxuICAgICAgICBjYy50d2Vlbihub2RlMSkudG8oMC40LCB7IHBvc2l0aW9uOiBwb3MsIHNjYWxlOiAwLjQgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUxLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vIHRoaXMubWlzc2lvbkJhci5nZXRDb21wb25lbnQoXCJ1cGRhdGVCYXJcIikudXBkYXRlQmFyKCk7XHJcbiAgICAgICAgICAgIC8vIHdvb2QuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImV4cFwiKVxyXG4gICAgICAgICAgICAvLyAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kT3V0LCBmYWxzZSwgMSlcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBpc0VuZEdhbWUgPSBmYWxzZVxyXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy53YXJuaW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyVGltZS5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICB0aGlzLmFtYXppbmcuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEVuZCwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5rV2luLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZENhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkV2luLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJUaW1lLmdldENvbXBvbmVudChcImJhclRpbWVcIikuZW5kR2FtZSgpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYXJyQ3VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIjYuYW5ncnlcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZClcclxuICAgICAgICAgICAgdGhpcy50aW1ldXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGhpbmtpbmcsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTG9zZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgMC41KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2Nob29zZShldmVudCwgdmFsdWUpIHtcclxuICAgIGlzRG9jID0gZmFsc2VcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIHRoaXMubGJDb2luLnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuMiA6IDAuN1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuXHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNiA6IDAuNFxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwKVxyXG4gICAgICAgIHRoaXMuYmFyVGltZS5zY2FsZSA9IChsb2dpYykgPyAyIDogMS4xXHJcbiAgICAgICAgdGhpcy5iYXJDb2luLnNjYWxlID0gKGxvZ2ljKSA/IDIgOiAxLjFcclxuICAgICAgICB0aGlzLmNsb2NrVGltZS5zY2FsZSA9IChsb2dpYykgPyAxLjcgOiAxXHJcbiAgICAgICAgdGhpcy5waGFvSG9hLnNjYWxlID0gKGxvZ2ljKSA/IDkgOiA1XHJcbiAgICAgICAgdGhpcy5ndWlsZC5zY2FsZSA9IChsb2dpYykgPyAyIDogMS4yXHJcbiAgICAgICAgdGhpcy5ndWlsZC5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygwLCAtOTAwKSA6IGNjLnYzKDAsIC0zNjApXHJcbiAgICAgICAgdGhpcy5saXN0Q3VzLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDIzMCwgNTYpIDogY2MudjMoMCwgNTYpXHJcbiAgICAgICAgdGhpcy5saXN0Q3VzLnNjYWxlID0gKGxvZ2ljKSA/IDAuNyA6IDFcclxuICAgICAgICB0aGlzLmxpc3RLaGF5LnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDIyMCwgMTQuNikgOiBjYy52MygwLCAxNC42KVxyXG4gICAgICAgIHRoaXMubGlzdEtoYXkuc2NhbGUgPSAobG9naWMpID8gMC43IDogMVxyXG4gICAgICAgIHRoaXMubGlzdFJheU5vZGUuc2NhbGUgPSAobG9naWMpID8gMC44IDogMVxyXG4gICAgICAgIHRoaXMubGlzdFJheU5vZGUucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoMCwgLTUwKSA6IGNjLnYzKDAsIDApXHJcbiAgICAgICAgdGhpcy50aW1ldXAuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuYW1hemluZy5zY2FsZSA9IChsb2dpYykgPyAxIDogMS40XHJcblxyXG4gICAgICAgIHRoaXMuYnRuRG93bmxvYWQuYWN0aXZlID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTcwKVxyXG4gICAgICAgICAgICB0aGlzLmJ0bkRvd25sb2FkLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IDE5N1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMi42XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTUwKVxyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVjayBpcGhvbmV4XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkRvd25sb2FkLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IDQwMFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAyXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTEyMClcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuRG93bmxvYWQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RvYyA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuODVcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtNTApXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkRvd25sb2FkLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=