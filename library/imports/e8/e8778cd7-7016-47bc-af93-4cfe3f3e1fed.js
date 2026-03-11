"use strict";
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