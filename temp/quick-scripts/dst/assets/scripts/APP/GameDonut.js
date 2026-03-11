
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
        for (var m = 0; m < mission.length; m++) {
            if (mission[m] != 100) {
                check = false;
            }
        }
        if (check == true) {
            this.isCountDone++;
            console.log(this.isCountDone, "done");
            this.scheduleOnce(function () {
                cus.getChildByName("vfx_coin").active = true;
                cus.getChildByName("vfx_coin").getComponent(cc.Animation).play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUE7QUFDckIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwM0JDO1FBeDNCRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBR2xDLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUks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LENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUNiO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBRXZCLENBQUM7SUF3QkQsOEJBQVcsR0FBWDs7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFFRCx1QkFBdUI7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEtBQXlDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTlFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFB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QUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7Z0JBQ3RMLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2FBQ3BFLENBQUE7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBRXRCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsV0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7d0NBRWQsQ0FBQztvQkFDTixXQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7b0JBRXBDLEtBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2QsMkJBQTJCO3dCQUMzQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIseURBQXlEO3dCQUV6RCxJQUFJO3dCQUNKLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO3dCQUU3RCxXQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7b0JBQ3ZDLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUE7O2dCQWJoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUU7NEJBQXZDLENBQUM7aUJBZ0JUO1lBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxZQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTt3Q0FFZixDQUFDO29CQUNOLFlBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtvQkFDckMsS0FBSSxDQUFDLFlBQVksQ0FBQzt3QkFFZCxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7d0JBRWpFLFlBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtvQkFDeEMsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQTs7Z0JBUGhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRTs0QkFBeEMsQ0FBQztpQkFVVDtZQUNMLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ3RGLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsSUFBSSxLQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtxQkFDMUM7Z0JBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ1Y7YUFDSTtZQUNELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDM0Q7SUFFTCxDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRJLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pJLENBQUM7SUFDRCxnQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELCtCQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsS0FBSztRQUNyQixrREFBa0Q7UUFDbEQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDNUQsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDM0MsNkJBQTZCO1FBQzdCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlELElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlELEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtRQUN2RSxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtRQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4RCxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUNwQix5REFBeUQ7WUFDekQsOENBQThDO1lBQzlDLHNEQUFzRDtRQUMxRCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsS0FBSztRQUFmLGlCQWtDQztRQWpDRyxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRTNCLCtDQUErQztZQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUNqRCwrQ0FBK0M7Z0JBQy9DLHNEQUFzRDtnQkFDdEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUdWO2FBQ0k7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUM5QyxLQUFrQixVQUFXLEVBQVgsS0FBQSxJQUFJLENBQUMsTUFBTSxFQUFYLGNBQVcsRUFBWCxJQUFXLEVBQUU7Z0JBQTFCLElBQUksS0FBSyxTQUFBO2dCQUNWLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUMvRTtZQUNELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDakQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQzdDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FHVjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtJQUNsQyxDQUFDO0lBR0QseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxrREFBa0Q7UUFDbEQsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLElBQUksZ0JBQWdCLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO2FBQ0k7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUUzQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1FBQ3pDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUV0QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUNoRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUNqQixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFB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QUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBSXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7OENBQ0k7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQW5HTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMDNCNUI7SUFBRCxlQUFDO0NBMTNCRCxBQTAzQkMsQ0ExM0JxQyxFQUFFLENBQUMsU0FBUyxHQTAzQmpEO2tCQTEzQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuY29pbiA9IDEwMFxyXG5nbG9iYWxUaGlzLnNjR2FtZSA9IGZhbHNlXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbG9zZVBvcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIZWxsb0N1czI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIZWxsb0N1czM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUcmFuczogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRG9udXRKdW1wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2VsbERvbmU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGlua2luZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3JlYW06IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoZXJyeTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENyZWFtTWluaTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZFdpbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3VzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIG1haW5DYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICB1aUNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhclRpbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJDb2luOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENoZWNrSXRlbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNsb2NrVGltZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FrZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNyZWVhbTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb0hvYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd2FybmluZzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpbGQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdEl0ZW06IGNjLlByZWZhYltdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFJheTogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RLaGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVLaGF5OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Eb3dubG9hZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFJheU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpbWV1cDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYW1hemluZzogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICAvLyBjYW1lcmE6Y2MuQ2FtZXJhPW51bGxcclxuXHJcbiAgICBtYXhLaGF5ID0gN1xyXG5cclxuICAgIGFyckRvbnV0cG9zID0gW11cclxuICAgIGFyckRvbnV0ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdXHJcbiAgICAvLyBhcnJLaGF5ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdXHJcbiAgICAvLyBhcnJLaGF5UG9zID0gW11cclxuICAgIGlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgaXNUdXRNZWF0ID0gZmFsc2VcclxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXHJcbiAgICBpc1R1dENsaWNrTWVhdCA9IGZhbHNlXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gc291bmRCZzpjYy5BdWRpb0NsaXA9bnVsbDtcclxuXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICAvLyBpc1N0ZXAgPSAwXHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBpZFNvdW5kID0gbnVsbFxyXG4gICAgaXNTdGVwID0gMFxyXG4gICAgLy9pdGVtOiAwOmJ1Z2VyLCAxOiBrZW0gMjpkb251dCAzOmtob2FpdGF5IDQ6cGhvIDU6IHB1ZGRpbmcgNjogdHJhICA3OmJhbmhtaSA4OmNvY29udXRcclxuICAgIHJheVk6IG51bWJlcltdID0gWzEyMCwgMCwgLTEyMF07ICAgLy8gduG7iyB0csOtIFkgY+G7p2EgMyByYXlcclxuICAgIHNwYXduWDogbnVtYmVyID0gNzAwOyAgICAgICAgICAgICAgLy8gduG7iyB0csOtIHNwYXduIGLDqm4gcGjhuqNpXHJcbiAgICBhcnJJdGVtID0gW1tdLCBbXV1cclxuICAgIGFycktoYXkgPSBbXVxyXG4gICAgYXJyTWlzc2lvbiA9IFtbNiwgN10sIFszLCAyXSwgWzAsIDQsIDFdLCBbMCwgMl0sIFs3LCA4XSwgWzMsIDEsIDJdLCBbMSwgMiwgNl0sIFs4LCAzLCAyXSwgWzAsIDZdXVxyXG4gICAgYXJyVGFyZ2V0TWlzc2lvbiA9IFtdXHJcbiAgICBhcnJDdXMgPSBbXVxyXG4gICAgaXNTdGFydGdhbWUgPSBmYWxzZVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zcGF3bkl0ZW0oKTtcclxuICAgICAgICAvLyB9LCAxKTsgLy8gbeG7l2kgMXMgc3Bhd24gMSBpdGVtXHJcbiAgICAgICAgLy8gdGhpcy5zcGF3bkl0ZW0oKVxyXG4gICAgICAgIHRoaXMuc3Bhd0ZpcnN0SXRlbSgpXHJcbiAgICAgICAgdGhpcy5zcGF3RmlzdGtoYXkoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0hhbmQgPSBudWxsXHJcbiAgICBzcGF3Rmlyc3RJdGVtKCkge1xyXG4gICAgICAgIGxldCBhcnIgPSBbMywgMCwgNSwgNCwgNiwgNywgOCwgMSwgMl1cclxuICAgICAgICBsZXQgYXJyMiA9IFs3LCAxLCAyLCA4LCAzLCAwLCAzLCA2LCAyLF1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJkID0gYXJyW2ldXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtyZF0pO1xyXG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubGlzdFJheVswXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXJySXRlbVswXS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGNjLnYzKChpIC0gNCkgKiAyNTAsIC00MCk7XHJcbiAgICAgICAgICAgIGlmIChpID09IDQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNIYW5kID0gaXRlbS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmQgPSBhcnIyW2ldXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtyZF0pO1xyXG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubGlzdFJheVsxXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXJySXRlbVsxXS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGNjLnYzKChpIC0gNCkgKiAyNTAsIC00MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRnYW1lID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyVGltZS5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmNvdW50RG93bigpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5sb2FkVGltZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0Z2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNIYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJJdGVtWzBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuYXJySXRlbVswXVtpXVxyXG4gICAgICAgICAgICAgICAgbGV0IHBvc05leHQgPSBpdGVtLnBvc2l0aW9uLnggLSAyMDAwXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxNiwgeyB4OiBwb3NOZXh0IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb3ZlSXRlbShpdGVtLGl0ZW0ucG9zaXRpb24uYWRkKGNjLnYzKC0yMDAwLDApKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJySXRlbVsxXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmFyckl0ZW1bMV1baV1cclxuICAgICAgICAgICAgICAgIGxldCBwb3NOZXh0ID0gaXRlbS5wb3NpdGlvbi54ICsgMjAwMFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMTYsIHsgeDogcG9zTmV4dCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubW92ZUl0ZW0oaXRlbSxpdGVtLnBvc2l0aW9uLmFkZChjYy52MygtMjAwMCwwKSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkl0ZW0oKVxyXG4gICAgICAgICAgICB9LCAxLjcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc3Bhd25JdGVtKClcclxuXHJcblxyXG4gICAgfVxyXG4gICAgc3Bhd0Zpc3RraGF5KCkge1xyXG4gICAgICAgIC8vIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbiA9IHRoaXMuYXJyTWlzc2lvblxyXG4gICAgICAgIGxldCBhcnIgPSBbY2MudjMoLTYwMCwgMCksIGNjLnYzKDAsIDApLCBjYy52Myg2MDAsIDApXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmVLaGF5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVLaGF5KVxyXG4gICAgICAgICAgICBwcmVLaGF5LnBhcmVudCA9IHRoaXMubGlzdEtoYXk7XHJcbiAgICAgICAgICAgIHByZUtoYXkucG9zaXRpb24gPSBhcnJbaV1cclxuICAgICAgICAgICAgdGhpcy5hcnJLaGF5LnB1c2gocHJlS2hheSlcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUtoYXkodGhpcy5hcnJNaXNzaW9uW2ldLCBwcmVLaGF5KVxyXG4gICAgICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24ucHVzaCh0aGlzLmFyck1pc3Npb25baV0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNvdW50TWlzcyA9IDNcclxuICAgIHNwYXdOZXh0S2hheSgpIHtcclxuICAgICAgICAvLyB0aGlzLmFyclRhcmdldE1pc3Npb24uc2hpZnQoKTtcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50Q3VzIDw9IDcgJiYgdGhpcy5jb3VudE1pc3MgPCA3KSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBjYy52MygxMjAwLCAwKTtcclxuICAgICAgICAgICAgbGV0IHByZUtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpXHJcbiAgICAgICAgICAgIHByZUtoYXkucGFyZW50ID0gdGhpcy5saXN0S2hheTtcclxuICAgICAgICAgICAgcHJlS2hheS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgICAgICB0aGlzLmFycktoYXkucHVzaChwcmVLaGF5KVxyXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhS2hheSh0aGlzLmFyck1pc3Npb25bdGhpcy5jb3VudE1pc3NdLCBwcmVLaGF5KVxyXG4gICAgICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24ucHVzaCh0aGlzLmFyck1pc3Npb25bdGhpcy5jb3VudE1pc3NdKVxyXG4gICAgICAgICAgICB0aGlzLmNvdW50TWlzcysrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyS2hheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQga2hheSA9IHRoaXMuYXJyS2hheVtpXVxyXG4gICAgICAgICAgICBjYy50d2VlbihraGF5KS5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC02MDAsIDApIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFycktoYXkuc2hpZnQoKTtcclxuICAgICAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnNoaWZ0KClcclxuICAgICAgICB9LCAwLjIpXHJcbiAgICB9XHJcbiAgICBsb2FkRGF0YUtoYXkoZGF0YSwga2hheSkge1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbY2MudjMoLTE3MCwgLTIwKSwgY2MudjMoMjYwLCAtMjApXVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICAgICAgYXJyID0gW2NjLnYzKC0yNTYsIC0yMCksIGNjLnYzKDExMi44MzgsIC0yMCksIGNjLnYzKDQyNywgLTIwKV1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bZGF0YVtpXV0pXHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IGtoYXlcclxuICAgICAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBhcnJbaV1cclxuICAgICAgICAgICAgICAgIGl0ZW0uc2NhbGUgPSAyLjJcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5sb2FkR3JheSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tNaXNzaW9uKGlkLCBub2RlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hcnJUYXJnZXRNaXNzaW9uKVxyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb2MgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyclRhcmdldE1pc3Npb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09IG1pc3Npb25bal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldW2pdID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJLaGF5W2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09IG1pc3Npb25bal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldW2pdID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJLaGF5W2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpc0NvdW50Q3VzID0gM1xyXG4gICAgaXNDb3VudERvbmUgPSAwXHJcbiAgICBjaGVja1N1Y2Nlc3MoaSwgaikge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEtoYXkgPSB0aGlzLmFycktoYXlbaV0uY2hpbGRyZW5bal07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRLaGF5LmdldENvbXBvbmVudChcIkl0ZW1cIikub2ZmR3JheSh0YXJnZXRLaGF5LmNoaWxkcmVuWzFdKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4yLCB7IHNjYWxlOiAyLjUgfSkudG8oMC4xLCB7IHNjYWxlOiAyLjIgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDAuNilcclxuICAgICAgICBsZXQgbWlzc2lvbiA9IHRoaXMuYXJyVGFyZ2V0TWlzc2lvbltpXTtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlXHJcbiAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcblxyXG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgbWlzc2lvbi5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICBpZiAobWlzc2lvblttXSAhPSAxMDApIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb25lKytcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0NvdW50RG9uZSwgXCJkb25lXCIpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGN1cy5nZXRDaGlsZEJ5TmFtZShcInZmeF9jb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGN1cy5nZXRDaGlsZEJ5TmFtZShcInZmeF9jb2luXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luICs9IDUwXHJcbiAgICAgICAgICAgICAgICBpZiAobWlzc2lvbi5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuY29pbiArPSAyMFxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNlbGxEb25lLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgfSwgMC42KVxyXG5cclxuICAgICAgICAgICAgLy9ib251cyB0aWVuXHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMC44KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3NJdGVtKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvdW50RG9uZSA9PSA3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuXHJcbiAgICAgICAgICAgICAgICB9LDAuNSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzSXRlbSgpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrU3VjY2Vzc0l0ZW0oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRydWVcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWlzc2lvbltqXSAhPSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZUN1cygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50Q3VzIDwgNykge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5pc0NvdW50Q3VzXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuaXNDb3VudEN1c10pXHJcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudEN1cysrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV07XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYzKC02MDAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3Bhd05leHRLaGF5KClcclxuXHJcbiAgICB9XHJcbiAgICAvLyBzcGF3bkl0ZW0oKSB7XHJcblxyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgbWFnID0gKGkgPT0gMCkgPyAxMDAwIDogLTEwMDBcclxuICAgIC8vICAgICAgICAgICAgbGV0IHJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5saXN0SXRlbS5sZW5ndGgpXHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bcmRdKTtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5saXN0UmF5W2ldO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJJdGVtW2ldLnB1c2goaXRlbSk7XHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMobWFnLCAtNDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm1vdmVJdGVtKGl0ZW0sIG1hZyk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5saXN0SXRlbS5sZW5ndGgpXHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bcmRdKTtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5saXN0UmF5W2ldO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcnJJdGVtW2ldLnB1c2goaXRlbSk7XHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMobWFnLCAtNDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm1vdmVJdGVtKGl0ZW0sIG1hZyk7XHJcbiAgICAvLyAgICAgICAgIH0sIDIpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgaXRlbVF1ZXVlOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHNodWZmbGVJdGVtKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbVF1ZXVlID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0SXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1RdWV1ZS5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2h1ZmZsZSBGaXNoZXItWWF0ZXNcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pdGVtUXVldWUubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgICAgICBbdGhpcy5pdGVtUXVldWVbaV0sIHRoaXMuaXRlbVF1ZXVlW2pdXSA9IFt0aGlzLml0ZW1RdWV1ZVtqXSwgdGhpcy5pdGVtUXVldWVbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXROZXh0SXRlbUluZGV4KCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pdGVtUXVldWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaHVmZmxlSXRlbSgpOyAvLyB04bqhbyBsxrDhu6N0IG3hu5tpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtUXVldWUuc2hpZnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0SXRlbUluZGV4OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHNwYXduSXRlbSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFJheS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXN0SXRlbUluZGV4W2ldID0gLTE7IC8vIGNoxrBhIGPDsyBpdGVtIHRyxrDhu5tjXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNwYXduSXRlbU9uUmF5KGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bkl0ZW1PblJheShpbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGxldCBtYWcgPSAoaW5kZXggPT0gMCkgPyAxMDAwIDogLTEwMDA7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbShpbmRleCwgbWFnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbShpbmRleCwgbWFnKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJdGVtKGluZGV4OiBudW1iZXIsIG1hZzogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIC8vIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEl0ZW0ubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgLy8gLy8gdHLDoW5oIHRyw7luZyBpdGVtIHRyxrDhu5tjXHJcbiAgICAgICAgLy8gd2hpbGUgKHJkID09PSB0aGlzLmxhc3RJdGVtSW5kZXhbaW5kZXhdKSB7XHJcbiAgICAgICAgLy8gICAgIHJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5saXN0SXRlbS5sZW5ndGgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgcmQgPSB0aGlzLmdldE5leHRJdGVtSW5kZXgoKTtcclxuICAgICAgICB0aGlzLmxhc3RJdGVtSW5kZXhbaW5kZXhdID0gcmQ7XHJcblxyXG4gICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbVtyZF0pO1xyXG4gICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5saXN0UmF5W2luZGV4XTtcclxuXHJcbiAgICAgICAgdGhpcy5hcnJJdGVtW2luZGV4XS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMobWFnLCAtNDApO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVJdGVtKGl0ZW0sIG1hZyk7XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbShpdGVtOiBjYy5Ob2RlLCBtYWcpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0WCA9IC1tYWc7XHJcbiAgICAgICAgY2MudHdlZW4oaXRlbSlcclxuICAgICAgICAgICAgLnRvKDE2LCB7IHg6IHRhcmdldFggfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaWRTb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXHJcblxyXG4gICAgfVxyXG4gICAgLy8gc3RhcnRHYW1lKCkge1xyXG4gICAgLy8gICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gICAgIGlmICh0aGlzLmlzU3RlcCA9PSAwKSB7XHJcbiAgICAvLyAgICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyB9LCAyKVxyXG4gICAgLy8gfVxyXG4gICAgYnRuX3BsYXRlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcclxuICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMSlcclxuICAgIH1cclxuICAgIGJ0bl9jYWtlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGNha2UgPSBudWxsXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5iYXJUaW1lLmdldENvbXBvbmVudChcImJhclRpbWVcIikuY291bnREb3duKClcclxuICAgICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYWtlID0gdGhpcy5jYWtlLmNoaWxkcmVuWzBdXHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDIuNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICBjYWtlID0gdGhpcy5jYWtlLmNoaWxkcmVuWzNdXHJcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDIuNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0XHJcbiAgICAgICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICBjYWtlLnNjYWxlID0gMC42O1xyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IGNha2UucG9zaXRpb247XHJcbiAgICAgICAgY2FrZS5wb3NpdGlvbiA9IGxvY2FsUG9zLmFkZChjYy52MygwLCAxMjApKVxyXG5cclxuICAgICAgICBjYWtlLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgdGhpcy5pc1N0ZXArK1xyXG4gICAgICAgIGNjLnR3ZWVuKGNha2UpLnRvKDAuMiwgeyBwb3NpdGlvbjogbG9jYWxQb3MgfSkudG8oMC4yLCB7IHNjYWxlOiAwLjc1IH0pLnRvKDAuMDcsIHsgc2NhbGU6IDAuNyB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBidG5fRGF1KGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDIpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hlcnJ5LCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBsaXN0RnJ1aXQgPSB0aGlzLmNha2UuY2hpbGRyZW5bMl1cclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXArK1xyXG4gICAgICAgICAgICBsaXN0RnJ1aXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0RnJ1aXQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnJ1aXQgPSBsaXN0RnJ1aXQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBmcnVpdC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gZnJ1aXQucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBmcnVpdC5wb3NpdGlvbiA9IGxvY2FsUG9zLmFkZChjYy52MygwLCAxMjApKVxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSAoaSAlIDIgPT0gMCkgPyAwIDogMC4yXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJ1aXQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGVja0l0ZW0uY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlbls1XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oZnJ1aXQpLnRvKDAuMywgeyBwb3NpdGlvbjogbG9jYWxQb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0sIHRpbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMi41KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSA1ICYmIHRoaXMuaXNMYXN0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hlcnJ5LCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hlY2tJdGVtLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgbGV0IGxpc3RGcnVpdCA9IHRoaXMuY2FrZS5jaGlsZHJlbls2XVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCsrXHJcbiAgICAgICAgICAgIGxpc3RGcnVpdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RGcnVpdC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBmcnVpdCA9IGxpc3RGcnVpdC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGZydWl0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSBmcnVpdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGZydWl0LnBvc2l0aW9uID0gbG9jYWxQb3MuYWRkKGNjLnYzKDAsIDEyMCkpXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZSA9IChpICUgMiA9PSAwKSA/IDAgOiAwLjNcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmcnVpdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oZnJ1aXQpLnRvKDAuMywgeyBwb3NpdGlvbjogbG9jYWxQb3MgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfSwgdGltZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBoYW9Ib2EuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV2luLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuY29pbiArPSAxMDBcclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW5kR2FtZSh0cnVlKVxyXG4gICAgICAgICAgICB9LCAxLjUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0XHJcbiAgICAgICAgLy8gYnRuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICB9XHJcbiAgICBidG5fS2l3aShldmVudCkge1xyXG4gICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0XHJcbiAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDEpXHJcbiAgICB9XHJcbiAgICBidG5fSG9hKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcclxuICAgICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMSlcclxuICAgIH1cclxuICAgIGlzTGFzdCA9IGZhbHNlXHJcbiAgICBidG5fY3JlYW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDcmVhbSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNyZWVhbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY3JlYW0xXCIpXHJcbiAgICAgICAgICAgIGxldCBjcmVhbSA9IHRoaXMuY2FrZS5jaGlsZHJlblsxXVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCsrXHJcbiAgICAgICAgICAgIGNyZWFtLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgY3JlYW0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjYy50d2VlbihjcmVhbSkuZGVsYXkoMC40KS50bygwLjQsIHsgc2NhbGU6IDAuNyB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3JlZWFtLmNoaWxkcmVuWzFdKS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApLCBhbmdsZTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIDEuMilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMi41KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENoZWNrSXRlbS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENyZWFtLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgdGhpcy5jcmVlYW0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNyZWFtMlwiKVxyXG4gICAgICAgICAgICBsZXQgY3JlYW1JdGVtID0gdGhpcy5jcmVlYW0uY2hpbGRyZW5bMV1cclxuICAgICAgICAgICAgbGV0IGNyZWFtID0gdGhpcy5jYWtlLmNoaWxkcmVuWzRdXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwKytcclxuICAgICAgICAgICAgY3JlYW0uc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICBjcmVhbS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNyZWFtKS5kZWxheSgwLjYpLnRvKDAuNCwgeyBzY2FsZTogMC43IH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgbGV0IGxpc3RDcmVhbSA9IHRoaXMuY2FrZS5jaGlsZHJlbls1XVxyXG4gICAgICAgICAgICBsZXQgbGlzdENyZWFtMiA9IHRoaXMuY2FrZS5jaGlsZHJlbls3XVxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDcmVhbSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIGxldCBhcnJyUG9zID0gW2NjLnYzKC01MDcsIDIyMiksIGNjLnYzKC01NTEsIDE5NyksIGNjLnYzKC01OTAsIDE2MSksIGNjLnYzKC02MjEsIDExMSksIGNjLnYzKC02MzQsIDUwLCA2OSksIGNjLnYzKC02MzEuNSwgMjEpLCBjYy52MygtNjEyLjYsIC00KSwgY2MudjMoLTU2OCwgLTUuNCksIGNjLnYzKC01MjgsIDE5LjUpLFxyXG4gICAgICAgICAgICBjYy52MygtNDkwLCA2MSksIGNjLnYzKC00NjQsIDEwOCksIGNjLnYzKC00NTYsIDE3MCksIGNjLnYzKC00NzMsIDIwNClcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTGFzdCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpc3RDcmVhbS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Q3JlYW0uY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdENyZWFtLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYW1JdGVtLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGkgJSAyID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENyZWFtTWluaSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNyZWFtSXRlbSkudG8oMC4xLCB7IHBvc2l0aW9uOiBhcnJyUG9zW2ldIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RDcmVhbS5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4xNSAqIGkpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMS4zKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0Q3JlYW0yLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RDcmVhbTIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdENyZWFtMi5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNyZWFtSXRlbSkudG8oMC4xLCB7IHBvc2l0aW9uOiBhcnJyUG9zW2kgKyA2XSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0Q3JlYW0yLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjE1ICogaSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxLjMgKyAwLjE1ICogNilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jcmVlYW0uY2hpbGRyZW5bMV0pLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCksIGFuZ2xlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAyLjUpXHJcbiAgICAgICAgICAgIH0sIDMuOClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5jcmVlYW0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImJ0bl93cm9uZ1wiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLWdyYXktc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG5cclxuICAgIH1cclxuICAgIG9mZkdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlQ2xvY2t0b1VJKG5vZGUxKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbVRvVUkobm9kZTEsIHRoaXMuYmFyVGltZS5jaGlsZHJlblsxXSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbVRvVUkobm9kZTEsIG5vZGUyKSB7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZGluLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgcG9zID0gbm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbilcclxuICAgICAgICBwb3MgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgLy8gcG9zID0gcG9zLmFkZChjYy52MygwLCAwKSlcclxuICAgICAgICBsZXQgcG9zMiA9IG5vZGUxLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTEucG9zaXRpb24pO1xyXG4gICAgICAgIHBvczIgPSB0aGlzLm1haW5DYW1lcmEuZ2V0V29ybGRUb1NjcmVlblBvaW50KHBvczIpO1xyXG4gICAgICAgIHBvczIgPSB0aGlzLnVpQ2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MyKTtcclxuICAgICAgICBwb3MyID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMikuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgICAgIG5vZGUxLnBhcmVudCA9IHRoaXMudWlOb2RlO1xyXG4gICAgICAgIG5vZGUxLnNjYWxlID0gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyAvIHRoaXMudWlDYW1lcmEuem9vbVJhdGlvICogMC43XHJcbiAgICAgICAgbm9kZTEucG9zaXRpb24gPSBwb3MyXHJcbiAgICAgICAgY2MudHdlZW4obm9kZTEpLnRvKDAuNCwgeyBwb3NpdGlvbjogcG9zLCBzY2FsZTogMC40IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAvLyB0aGlzLm1pc3Npb25CYXIuZ2V0Q29tcG9uZW50KFwidXBkYXRlQmFyXCIpLnVwZGF0ZUJhcigpO1xyXG4gICAgICAgICAgICAvLyB3b29kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJleHBcIilcclxuICAgICAgICAgICAgLy8gLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZE91dCwgZmFsc2UsIDEpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgaXNFbmRHYW1lID0gZmFsc2VcclxuICAgIG9uRW5kR2FtZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNFbmRHYW1lID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcclxuICAgICAgICAgICAgdGhpcy5hbWF6aW5nLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua1dpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmRDYXJkLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyVGltZS5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFyckN1cykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCI2LmFuZ3J5XCIsIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgICAgIHRoaXMudGltZXVwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5raW5nLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvc2UsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICBpc0RvYyA9IGZhbHNlXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmVuZENhcmRXaW4uc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcblxyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICB0aGlzLmJhclRpbWUuc2NhbGUgPSAobG9naWMpID8gMiA6IDEuMVxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5zY2FsZSA9IChsb2dpYykgPyAyIDogMS4xXHJcbiAgICAgICAgdGhpcy5jbG9ja1RpbWUuc2NhbGUgPSAobG9naWMpID8gMS43IDogMVxyXG4gICAgICAgIHRoaXMucGhhb0hvYS5zY2FsZSA9IChsb2dpYykgPyA5IDogNVxyXG4gICAgICAgIHRoaXMuZ3VpbGQuc2NhbGUgPSAobG9naWMpID8gMiA6IDEuMlxyXG4gICAgICAgIHRoaXMuZ3VpbGQucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoMCwgLTkwMCkgOiBjYy52MygwLCAtMzYwKVxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygyMzAsIDU2KSA6IGNjLnYzKDAsIDU2KVxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5zY2FsZSA9IChsb2dpYykgPyAwLjcgOiAxXHJcbiAgICAgICAgdGhpcy5saXN0S2hheS5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygyMjAsIDE0LjYpIDogY2MudjMoMCwgMTQuNilcclxuICAgICAgICB0aGlzLmxpc3RLaGF5LnNjYWxlID0gKGxvZ2ljKSA/IDAuNyA6IDFcclxuICAgICAgICB0aGlzLmxpc3RSYXlOb2RlLnNjYWxlID0gKGxvZ2ljKSA/IDAuOCA6IDFcclxuICAgICAgICB0aGlzLmxpc3RSYXlOb2RlLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIC01MCkgOiBjYy52MygwLCAwKVxyXG4gICAgICAgIHRoaXMudGltZXVwLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcclxuICAgICAgICB0aGlzLmFtYXppbmcuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG5cclxuICAgICAgICB0aGlzLmJ0bkRvd25sb2FkLmFjdGl2ZSA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRG9jID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC03MClcclxuICAgICAgICAgICAgdGhpcy5idG5Eb3dubG9hZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAxOTdcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDIuNlxyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTE1MClcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Eb3dubG9hZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSA0MDBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0xMjApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkRvd25sb2FkLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjg1XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTUwKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5idG5Eb3dubG9hZC5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19