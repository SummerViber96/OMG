
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
globalThis.coin = 0;
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
        _this.notiCoin = null;
        _this.notiMission = null;
        _this.listPreCus = [];
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
        _this.arrMission = [[6, 7], [3, 2], [0, 4, 1], [0, 8], [7, 5, 6], [3, 1, 2], [1, 2, 6], [8, 3, 2], [1, 0, 6], [2, 5], [4, 6, 0], [7, 1], [3, 1, 2], [5, 8, 6], [3.4], [0, 2], [7, 1]];
        _this.arrTargetMission = [];
        _this.arrCus = [];
        _this.isStartgame = false;
        _this.isHand = null;
        _this.countMiss = 3;
        _this.isCountCus = 3;
        _this.isCountDone = 0;
        _this.isMoving = false;
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
        this.spawFirstItem();
        this.spawFistkhay();
        for (var i = 0; i < this.listCus.childrenCount; i++) {
            this.arrCus.push(this.listCus.children[i]);
        }
        this.scheduleOnce(function () {
            cc.tween(_this.notiMission).to(0.5, { opacity: 0 }).call(function () {
                _this.notiMission.active = false;
                // this.clockTime.active = true
                _this.clockTime.getComponent("timeClock").click();
            }).start();
        }, 1.5);
    };
    NewClass.prototype.spawFirstItem = function () {
        var _this = this;
        var arr = [3, 0, 5, 4, 6, 7, 8, 1, 2];
        var arr2 = [7, 1, 2, 8, 3, 0, 5, 6, 2,];
        var _loop_1 = function (i) {
            var rd = arr[i];
            var item = cc.instantiate(this_1.listItem[rd]);
            item.parent = this_1.listRay[0];
            this_1.arrItem[0].push(item);
            item.position = cc.v3((i - 4) * 250, -40);
            if (i == 4) {
                this_1.scheduleOnce(function () {
                    item.getChildByName("hand").active = true;
                    _this.isHand = item.getChildByName("hand");
                }, 1.5);
            }
        };
        var this_1 = this;
        for (var i = 0; i < arr.length; i++) {
            _loop_1(i);
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
            this.guild.opacity = 0;
            var _loop_2 = function (i) {
                var item = this_2.arrItem[0][i];
                var posNext = item.position.x - 2000;
                cc.tween(item)
                    .to(17, { x: posNext })
                    .call(function () {
                    item.destroy();
                })
                    .start();
            };
            var this_2 = this;
            for (var i = 0; i < this.arrItem[0].length; i++) {
                _loop_2(i);
            }
            var _loop_3 = function (i) {
                var item = this_3.arrItem[1][i];
                var posNext = item.position.x + 2000;
                cc.tween(item)
                    .to(16, { x: posNext })
                    .call(function () {
                    item.destroy();
                })
                    .start();
            };
            var this_3 = this;
            for (var i = 0; i < this.arrItem[1].length; i++) {
                _loop_3(i);
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
    NewClass.prototype.spawNextKhay = function (place) {
        var _this = this;
        // this.arrTargetMission.shift();
        this.arrTargetMission.splice(place, 1);
        this.arrTargetMission.push(this.arrMission[this.countMiss]);
        // if ( this.countMiss < 9) {
        var pos = cc.v3(1200, 0);
        var preKhay = cc.instantiate(this.preKhay);
        preKhay.parent = this.listKhay;
        preKhay.position = pos;
        this.arrKhay.push(preKhay);
        this.loadDataKhay(this.arrMission[this.countMiss], preKhay);
        this.countMiss++;
        // }
        var targetKhay = this.arrKhay[place];
        cc.tween(targetKhay).to(0.3, { scale: 0 }).start();
        var _loop_4 = function (i) {
            var khay = this_4.arrKhay[i];
            cc.tween(khay).by(0.8, { position: cc.v3(-600, 0) }).call(function () {
                _this.arrKhay[i - 1] = khay;
            }).start();
        };
        var this_4 = this;
        for (var i = place + 1; i < this.arrKhay.length; i++) {
            _loop_4(i);
        }
        this.scheduleOnce(function () {
            _this.arrKhay.splice(place, 1);
            // this.arrTargetMission.shift()
        }, 0.2);
    };
    NewClass.prototype.loadDataKhay = function (data, khay) {
        if (data) {
            // let arr = [cc.v3(-170, -20), cc.v3(260, -20)]
            var arr = [cc.v3(-60, -10), cc.v3(80, -10)];
            if (data.length == 3) {
                // arr = [cc.v3(-256, -20), cc.v3(112.838, -20), cc.v3(427, -20)]
                arr = [cc.v3(-75, -10), cc.v3(30, -10), cc.v3(120, -10)];
            }
            for (var i = 0; i < data.length; i++) {
                var item = cc.instantiate(this.listItem[data[i]]);
                item.parent = khay;
                item.position = arr[i];
                item.scale = 0.65;
                item.getComponent(cc.Button).enabled = false;
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
                // cc.tween(targetKhay).to(0.2, { scale: 2.5 }).to(0.1, { scale: 2.2 }).start()
                cc.tween(targetKhay).to(0.2, { scale: 0.9 }).to(0.1, { scale: 0.65 }).start();
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
            this.isMoving = true;
            this.isCountDone++;
            this.scheduleOnce(function () {
                cus.getChildByName("vfx_coin").active = true;
                cus.getChildByName("vfx_coin").getComponent(cc.Animation).play();
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
        var newCus = cc.instantiate(this.listPreCus[this.isDem]);
        newCus.parent = this.listCus;
        var lastCus = this.arrCus[this.arrCus.length - 1];
        newCus.position = lastCus.position.add(cc.v3(600, 0));
        this.isDem = (this.isDem + 1) % this.listPreCus.length;
        "";
        this.arrCus.push(newCus);
        // ===== Move thằng bị out =====
        firstCus.zIndex = -1;
        firstCus.getComponent("cusMission").isSuccess = true;
        cc.tween(firstCus)
            .delay(0.3)
            .by(0.8 * (place + 1), { position: cc.v3(-600 * (place + 1), 0) })
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
                .by(0.8, { position: cc.v3(-600, 0) })
                .start();
        }
        // ===== Gọi loadTime đúng 1 lần =====
        if (this.isTargetCus) {
            this.scheduleOnce(function () {
                _this.isTargetCus.getComponent("cusMission").loadTime();
            }, 0.4);
        }
        // ===== Remove khỏi mảng =====
        this.scheduleOnce(function () {
            _this.arrCus.splice(place, 1);
            _this.isMoving = false;
            _this.finishMove();
        }, 1.1);
        // ===== Spawn khay =====
        this.scheduleOnce(function () {
            _this.spawNextKhay(place);
        }, 0.3);
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
        this.notiMission.scale = (logic) ? 1.5 : 1;
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
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "notiCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "notiMission", void 0);
    __decorate([
        property([cc.Prefab])
    ], NewClass.prototype, "listPreCus", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3dkJDO1FBdHZCRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBR2xDLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFBO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUVsQyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUks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R0FBRyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUNoRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFH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Q0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7OENBQ0k7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0RBQ007SUF6R1gsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXd2QjVCO0lBQUQsZUFBQztDQXh2QkQsQUF3dkJDLENBeHZCcUMsRUFBRSxDQUFDLFNBQVMsR0F3dkJqRDtrQkF4dkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuY29pbiA9IDBcclxuZ2xvYmFsVGhpcy5zY0dhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERvbnV0SnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGhpbmtpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENyZWFtOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDaGVycnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdyb25nOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDcmVhbU1pbmk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmRXaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXJUaW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFyQ29pbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGVja0l0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjbG9ja1RpbWU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNha2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjcmVlYW06IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBoYW9Ib2E6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RJdGVtOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RSYXk6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0S2hheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlS2hheTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuRG93bmxvYWQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RSYXlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1ldXA6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFtYXppbmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgbm90aUNvaW46IGNjLkFuaW1hdGlvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aU1pc3Npb246IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0UHJlQ3VzOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgLy8gY2FtZXJhOmNjLkNhbWVyYT1udWxsXHJcblxyXG4gICAgbWF4S2hheSA9IDdcclxuXHJcbiAgICBhcnJEb251dHBvcyA9IFtdXHJcbiAgICBhcnJEb251dCA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXVxyXG4gICAgLy8gYXJyS2hheSA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXVxyXG4gICAgLy8gYXJyS2hheVBvcyA9IFtdXHJcbiAgICBpc1R1dENoaWxpID0gZmFsc2VcclxuICAgIGlzVHV0TWVhdCA9IGZhbHNlXHJcbiAgICBpc1R1dFZlZ2V0VGFibGUgPSBmYWxzZVxyXG4gICAgaXNUdXRDbGlja01lYXQgPSBmYWxzZVxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIHNvdW5kQmc6Y2MuQXVkaW9DbGlwPW51bGw7XHJcblxyXG4gICAgaXNUYXJnZXRQb3AgPSBudWxsO1xyXG4gICAgLy8gaXNTdGVwID0gMFxyXG4gICAgaXNUYXJnZXRDdXMgPSBudWxsO1xyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIGNvdW50Q3VzID0gMFxyXG4gICAgaWRTb3VuZCA9IG51bGxcclxuICAgIGlzU3RlcCA9IDBcclxuICAgIC8vaXRlbTogMDpidWdlciwgMToga2VtIDI6ZG9udXQgMzpraG9haXRheSA0OnBobyA1OiBwdWRkaW5nIDY6IHRyYSAgNzpiYW5obWkgODpjb2NvbnV0XHJcbiAgICByYXlZOiBudW1iZXJbXSA9IFsxMjAsIDAsIC0xMjBdOyAgIC8vIHbhu4sgdHLDrSBZIGPhu6dhIDMgcmF5XHJcbiAgICBzcGF3blg6IG51bWJlciA9IDcwMDsgICAgICAgICAgICAgIC8vIHbhu4sgdHLDrSBzcGF3biBiw6puIHBo4bqjaVxyXG4gICAgYXJySXRlbSA9IFtbXSwgW11dXHJcbiAgICBhcnJLaGF5ID0gW11cclxuICAgIGFyck1pc3Npb24gPSBbWzYsIDddLCBbMywgMl0sIFswLCA0LCAxXSwgWzAsIDhdLCBbNywgNSwgNl0sIFszLCAxLCAyXSwgWzEsIDIsIDZdLCBbOCwgMywgMl0sIFsxLCAwLCA2XSwgWzIsIDVdLCBbNCwgNiwgMF0sIFs3LCAxXSwgWzMsIDEsIDJdLCBbNSwgOCwgNl0sIFszLjRdLCBbMCwgMl0sIFs3LCAxXV1cclxuICAgIGFyclRhcmdldE1pc3Npb24gPSBbXVxyXG4gICAgYXJyQ3VzID0gW11cclxuICAgIGlzU3RhcnRnYW1lID0gZmFsc2VcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3Bhd0ZpcnN0SXRlbSgpXHJcbiAgICAgICAgdGhpcy5zcGF3RmlzdGtoYXkoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vdGlNaXNzaW9uKS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aU1pc3Npb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNsb2NrVGltZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb2NrVGltZS5nZXRDb21wb25lbnQoXCJ0aW1lQ2xvY2tcIikuY2xpY2soKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgfVxyXG4gICAgaXNIYW5kID0gbnVsbFxyXG4gICAgc3Bhd0ZpcnN0SXRlbSgpIHtcclxuICAgICAgICBsZXQgYXJyID0gWzMsIDAsIDUsIDQsIDYsIDcsIDgsIDEsIDJdXHJcbiAgICAgICAgbGV0IGFycjIgPSBbNywgMSwgMiwgOCwgMywgMCwgNSwgNiwgMixdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZCA9IGFycltpXVxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bcmRdKTtcclxuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmxpc3RSYXlbMF07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFyckl0ZW1bMF0ucHVzaChpdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBjYy52MygoaSAtIDQpICogMjUwLCAtNDApO1xyXG4gICAgICAgICAgICBpZiAoaSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNIYW5kID0gaXRlbS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIilcclxuICAgICAgICAgICAgICAgIH0sIDEuNSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJkID0gYXJyMltpXVxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bcmRdKTtcclxuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmxpc3RSYXlbMV07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFyckl0ZW1bMV0ucHVzaChpdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBjYy52MygoaSAtIDQpICogMjUwLCAtNDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0Z2FtZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5jb3VudERvd24oKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydGdhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzSGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmd1aWxkLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJJdGVtWzBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuYXJySXRlbVswXVtpXVxyXG4gICAgICAgICAgICAgICAgbGV0IHBvc05leHQgPSBpdGVtLnBvc2l0aW9uLnggLSAyMDAwXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxNywgeyB4OiBwb3NOZXh0IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb3ZlSXRlbShpdGVtLGl0ZW0ucG9zaXRpb24uYWRkKGNjLnYzKC0yMDAwLDApKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJySXRlbVsxXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmFyckl0ZW1bMV1baV1cclxuICAgICAgICAgICAgICAgIGxldCBwb3NOZXh0ID0gaXRlbS5wb3NpdGlvbi54ICsgMjAwMFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMTYsIHsgeDogcG9zTmV4dCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubW92ZUl0ZW0oaXRlbSxpdGVtLnBvc2l0aW9uLmFkZChjYy52MygtMjAwMCwwKSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkl0ZW0oKVxyXG4gICAgICAgICAgICB9LCAxLjcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc3Bhd25JdGVtKClcclxuXHJcblxyXG4gICAgfVxyXG4gICAgc3Bhd0Zpc3RraGF5KCkge1xyXG4gICAgICAgIC8vIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbiA9IHRoaXMuYXJyTWlzc2lvblxyXG4gICAgICAgIGxldCBhcnIgPSBbY2MudjMoLTYwMCwgMCksIGNjLnYzKDAsIDApLCBjYy52Myg2MDAsIDApXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmVLaGF5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVLaGF5KVxyXG4gICAgICAgICAgICBwcmVLaGF5LnBhcmVudCA9IHRoaXMubGlzdEtoYXk7XHJcbiAgICAgICAgICAgIHByZUtoYXkucG9zaXRpb24gPSBhcnJbaV1cclxuICAgICAgICAgICAgdGhpcy5hcnJLaGF5LnB1c2gocHJlS2hheSlcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUtoYXkodGhpcy5hcnJNaXNzaW9uW2ldLCBwcmVLaGF5KVxyXG4gICAgICAgICAgICB0aGlzLmFyclRhcmdldE1pc3Npb24ucHVzaCh0aGlzLmFyck1pc3Npb25baV0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNvdW50TWlzcyA9IDNcclxuICAgIHNwYXdOZXh0S2hheShwbGFjZSkge1xyXG4gICAgICAgIC8vIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuYXJyVGFyZ2V0TWlzc2lvbi5zcGxpY2UocGxhY2UsIDEpXHJcbiAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uLnB1c2godGhpcy5hcnJNaXNzaW9uW3RoaXMuY291bnRNaXNzXSlcclxuXHJcbiAgICAgICAgLy8gaWYgKCB0aGlzLmNvdW50TWlzcyA8IDkpIHtcclxuICAgICAgICBsZXQgcG9zID0gY2MudjMoMTIwMCwgMCk7XHJcbiAgICAgICAgbGV0IHByZUtoYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUtoYXkpXHJcbiAgICAgICAgcHJlS2hheS5wYXJlbnQgPSB0aGlzLmxpc3RLaGF5O1xyXG4gICAgICAgIHByZUtoYXkucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB0aGlzLmFycktoYXkucHVzaChwcmVLaGF5KVxyXG4gICAgICAgIHRoaXMubG9hZERhdGFLaGF5KHRoaXMuYXJyTWlzc2lvblt0aGlzLmNvdW50TWlzc10sIHByZUtoYXkpXHJcblxyXG4gICAgICAgIHRoaXMuY291bnRNaXNzKytcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IHRhcmdldEtoYXkgPSB0aGlzLmFycktoYXlbcGxhY2VdXHJcbiAgICAgICAgY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICBmb3IgKGxldCBpID0gcGxhY2UgKyAxOyBpIDwgdGhpcy5hcnJLaGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBraGF5ID0gdGhpcy5hcnJLaGF5W2ldXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGtoYXkpLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTYwMCwgMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycktoYXlbaSAtIDFdID0ga2hheVxyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyS2hheS5zcGxpY2UocGxhY2UsIDEpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmFyclRhcmdldE1pc3Npb24uc2hpZnQoKVxyXG4gICAgICAgIH0sIDAuMilcclxuICAgIH1cclxuICAgIGxvYWREYXRhS2hheShkYXRhLCBraGF5KSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gbGV0IGFyciA9IFtjYy52MygtMTcwLCAtMjApLCBjYy52MygyNjAsIC0yMCldXHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbY2MudjMoLTYwLCAtMTApLCBjYy52Myg4MCwgLTEwKV1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhcnIgPSBbY2MudjMoLTI1NiwgLTIwKSwgY2MudjMoMTEyLjgzOCwgLTIwKSwgY2MudjMoNDI3LCAtMjApXVxyXG4gICAgICAgICAgICAgICAgYXJyID0gW2NjLnYzKC03NSwgLTEwKSwgY2MudjMoMzAsIC0xMCksIGNjLnYzKDEyMCwgLTEwKV1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RJdGVtW2RhdGFbaV1dKVxyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSBraGF5XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gYXJyW2ldXHJcbiAgICAgICAgICAgICAgICBpdGVtLnNjYWxlID0gMC42NVxyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiSXRlbVwiKS5sb2FkR3JheSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tNaXNzaW9uKGlkLCBub2RlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hcnJUYXJnZXRNaXNzaW9uKVxyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb2MgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyclRhcmdldE1pc3Npb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09IG1pc3Npb25bal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldW2pdID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJLaGF5W2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09IG1pc3Npb25bal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldW2pdID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJLaGF5W2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpc0NvdW50Q3VzID0gM1xyXG4gICAgaXNDb3VudERvbmUgPSAwXHJcbiAgICBpc01vdmluZyA9IGZhbHNlXHJcbiAgICBjaGVja1N1Y2Nlc3MoaSwgaikgey8vY2hlY2sgY3VzIGhvYW4gdGhhbmggZG9uIGhhbmcgY2h1YVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEtoYXkgPSB0aGlzLmFycktoYXlbaV0uY2hpbGRyZW5bal07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRLaGF5LmdldENvbXBvbmVudChcIkl0ZW1cIikub2ZmR3JheSh0YXJnZXRLaGF5LmNoaWxkcmVuWzFdKVxyXG4gICAgICAgICAgICAgICAgLy8gY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4yLCB7IHNjYWxlOiAyLjUgfSkudG8oMC4xLCB7IHNjYWxlOiAyLjIgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGFyZ2V0S2hheSkudG8oMC4yLCB7IHNjYWxlOiAwLjkgfSkudG8oMC4xLCB7IHNjYWxlOiAwLjY1IH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgMC42KVxyXG4gICAgICAgIGxldCBtaXNzaW9uID0gdGhpcy5hcnJUYXJnZXRNaXNzaW9uW2ldO1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWVcclxuICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IG1pc3Npb24ubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgaWYgKG1pc3Npb25bbV0gIT0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5pc0NvdW50RG9uZSsrXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGN1cy5nZXRDaGlsZEJ5TmFtZShcInZmeF9jb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGN1cy5nZXRDaGlsZEJ5TmFtZShcInZmeF9jb2luXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikuaGFwcHkoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpQ29pbi5wbGF5KClcclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuY29pbiArPSA1MFxyXG4gICAgICAgICAgICAgICAgaWYgKG1pc3Npb24ubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmNvaW4gKz0gMTAwXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFRoaXMuY29pbiA+PSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVuZEdhbWUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNlbGxEb25lLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgfSwgMC42KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1vdmVDdXNPdXQoaSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5xdWV1ZU1vdmUodGhpcy5hcnJDdXNbaV0pO1xyXG4gICAgICAgICAgICB9LCAwLjgpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpc0RlbSA9IDBcclxuICAgIGdldFBsYWNlKGN1cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyckN1cy5pbmRleE9mKGN1cyk7IC8vIGfhu41uIGjGoW5cclxuXHJcbiAgICB9XHJcbiAgICBlbnF1ZXVlTW92ZShjdXNOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlUXVldWUucHVzaChjdXNOb2RlKTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc1F1ZXVlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVRdWV1ZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgY3VzTm9kZSA9IHRoaXMubW92ZVF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5fbW92ZUN1c091dChjdXNOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlUXVldWUgPSBbXTtcclxuICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgX21vdmVDdXNPdXQoY3VzTm9kZSkge1xyXG4gICAgICAgIC8vIGlmIChwbGFjZSA8IDAgfHwgcGxhY2UgPj0gdGhpcy5hcnJDdXMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBsYWNlID0gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXNOb2RlKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKHBsYWNlIDwgMCB8fCBwbGFjZSA+PSB0aGlzLmFyckN1cy5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5maW5pc2hNb3ZlKCk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHBsYWNlID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIC8vIGxldCBmaXJzdEN1cyA9IHRoaXMuYXJyQ3VzW3BsYWNlXTtcclxuICAgICAgICBsZXQgZmlyc3RDdXMgPSBjdXNOb2RlO1xyXG5cclxuICAgICAgICAvLyA9PT09PSBTcGF3biBjdXN0b21lciB0aeG6v3AgdGhlbyA9PT09PVxyXG4gICAgICAgIGxldCBuZXh0Q3VzID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMuaXNDb3VudEN1c107XHJcblxyXG4gICAgICAgIGlmIChuZXh0Q3VzKSB7XHJcbiAgICAgICAgICAgIG5leHRDdXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG5leHRDdXM7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudEN1cysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gPT09PT0gVOG6oW8gY3VzdG9tZXIgbeG7m2kg4bufIGN14buRaSA9PT09PVxyXG4gICAgICAgIGxldCBuZXdDdXMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVDdXNbdGhpcy5pc0RlbV0pO1xyXG4gICAgICAgIG5ld0N1cy5wYXJlbnQgPSB0aGlzLmxpc3RDdXM7XHJcblxyXG4gICAgICAgIGxldCBsYXN0Q3VzID0gdGhpcy5hcnJDdXNbdGhpcy5hcnJDdXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgbmV3Q3VzLnBvc2l0aW9uID0gbGFzdEN1cy5wb3NpdGlvbi5hZGQoY2MudjMoNjAwLCAwKSk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNEZW0gPSAodGhpcy5pc0RlbSArIDEpICUgdGhpcy5saXN0UHJlQ3VzLmxlbmd0aDsgYGBcclxuICAgICAgICB0aGlzLmFyckN1cy5wdXNoKG5ld0N1cyk7XHJcblxyXG4gICAgICAgIC8vID09PT09IE1vdmUgdGjhurFuZyBi4buLIG91dCA9PT09PVxyXG4gICAgICAgIGZpcnN0Q3VzLnpJbmRleCA9IC0xO1xyXG5maXJzdEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmlzU3VjY2Vzcz10cnVlXHJcbiAgICAgICAgY2MudHdlZW4oZmlyc3RDdXMpXHJcbiAgICAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAgICAgICAgIC5ieSgwLjggKiAocGxhY2UgKyAxKSwgeyBwb3NpdGlvbjogY2MudjMoLTYwMCAqIChwbGFjZSArIDEpLCAwKSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4oZmlyc3RDdXMpXHJcbiAgICAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgLy8gPT09PT0gTW92ZSBjw6FjIHRo4bqxbmcgcGjDrWEgc2F1ID09PT09XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHBsYWNlICsgMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQ3VzW2ldO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgICAgICAgICAgICAgLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTYwMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gPT09PT0gR+G7jWkgbG9hZFRpbWUgxJHDum5nIDEgbOG6p24gPT09PT1cclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEN1cykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzLmdldENvbXBvbmVudChcImN1c01pc3Npb25cIikubG9hZFRpbWUoKTtcclxuICAgICAgICAgICAgfSwgMC40KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vID09PT09IFJlbW92ZSBraOG7j2kgbeG6o25nID09PT09XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5zcGxpY2UocGxhY2UsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpO1xyXG5cclxuICAgICAgICB9LCAxLjEpO1xyXG5cclxuICAgICAgICAvLyA9PT09PSBTcGF3biBraGF5ID09PT09XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNwYXdOZXh0S2hheShwbGFjZSk7XHJcbiAgICAgICAgfSwgMC4zKTtcclxuICAgIH1cclxuICAgIGZpbmlzaE1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpOyAvLyBjaOG6oXkgdGnhur9wIHRo4bqxbmcga+G6vyB0aeG6v3BcclxuICAgIH1cclxuICAgIGNoZWNrU3VjY2Vzc0l0ZW0oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLmFyclRhcmdldE1pc3Npb25baV07XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRydWVcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzaW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWlzc2lvbltqXSAhPSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyhpLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaXNUYXJnZXRDdXM9bnVsbFxyXG4gICAgLy8gbW92ZUN1cygpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc0NvdW50Q3VzIDwgNykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5pc0NvdW50Q3VzXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bdGhpcy5pc0NvdW50Q3VzXVxyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmlzQ291bnRDdXNdKVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnRDdXMrK1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQ3VzW2ldO1xyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihjaGlsZCkuYnkoMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNjAwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0Q3VzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNNaXNzaW9uXCIpLmxvYWRUaW1lKClcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFyckN1cy5zaGlmdCgpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgLy8gICAgIH0sIDAuNSlcclxuICAgIC8vICAgICB0aGlzLnNwYXdOZXh0S2hheSgpXHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIGl0ZW1RdWV1ZTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBzaHVmZmxlSXRlbSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1RdWV1ZSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtUXVldWUucHVzaChpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNodWZmbGUgRmlzaGVyLVlhdGVzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICAgICAgW3RoaXMuaXRlbVF1ZXVlW2ldLCB0aGlzLml0ZW1RdWV1ZVtqXV0gPSBbdGhpcy5pdGVtUXVldWVbal0sIHRoaXMuaXRlbVF1ZXVlW2ldXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV4dEl0ZW1JbmRleCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2h1ZmZsZUl0ZW0oKTsgLy8gdOG6oW8gbMaw4bujdCBt4bubaVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVF1ZXVlLnNoaWZ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdEl0ZW1JbmRleDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBzcGF3bkl0ZW0oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RSYXkubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdEl0ZW1JbmRleFtpXSA9IC0xOyAvLyBjaMawYSBjw7MgaXRlbSB0csaw4bubY1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zcGF3bkl0ZW1PblJheShpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25JdGVtT25SYXkoaW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBsZXQgbWFnID0gKGluZGV4ID09IDApID8gMTAwMCA6IC0xMDAwO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaW5kZXgsIG1hZyk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSXRlbShpbmRleDogbnVtYmVyLCBtYWc6IG51bWJlcikge1xyXG5cclxuICAgICAgICAvLyBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RJdGVtLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIC8vIC8vIHRyw6FuaCB0csO5bmcgaXRlbSB0csaw4bubY1xyXG4gICAgICAgIC8vIHdoaWxlIChyZCA9PT0gdGhpcy5sYXN0SXRlbUluZGV4W2luZGV4XSkge1xyXG4gICAgICAgIC8vICAgICByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEl0ZW0ubGVuZ3RoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IHJkID0gdGhpcy5nZXROZXh0SXRlbUluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5sYXN0SXRlbUluZGV4W2luZGV4XSA9IHJkO1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEl0ZW1bcmRdKTtcclxuICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubGlzdFJheVtpbmRleF07XHJcblxyXG4gICAgICAgIHRoaXMuYXJySXRlbVtpbmRleF0ucHVzaChpdGVtKTtcclxuXHJcbiAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGNjLnYzKG1hZywgLTQwKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbShpdGVtLCBtYWcpO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW0oaXRlbTogY2MuTm9kZSwgbWFnKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFggPSAtbWFnO1xyXG4gICAgICAgIGNjLnR3ZWVuKGl0ZW0pXHJcbiAgICAgICAgICAgIC50bygxNywgeyB4OiB0YXJnZXRYIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmlkU291bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0R3JheShub2RlKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlV2l0aEJ1aWx0aW4oJzJkLWdyYXktc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG5cclxuICAgIH1cclxuICAgIG9mZkdyYXkobm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlQ2xvY2t0b1VJKG5vZGUxKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbVRvVUkobm9kZTEsIHRoaXMuYmFyVGltZS5jaGlsZHJlblsxXSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbVRvVUkobm9kZTEsIG5vZGUyKSB7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZGluLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgcG9zID0gbm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbilcclxuICAgICAgICBwb3MgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgLy8gcG9zID0gcG9zLmFkZChjYy52MygwLCAwKSlcclxuICAgICAgICBsZXQgcG9zMiA9IG5vZGUxLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTEucG9zaXRpb24pO1xyXG4gICAgICAgIHBvczIgPSB0aGlzLm1haW5DYW1lcmEuZ2V0V29ybGRUb1NjcmVlblBvaW50KHBvczIpO1xyXG4gICAgICAgIHBvczIgPSB0aGlzLnVpQ2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwb3MyKTtcclxuICAgICAgICBwb3MyID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMikuYWRkKGNjLnYzKDAsIDApKVxyXG4gICAgICAgIG5vZGUxLnBhcmVudCA9IHRoaXMudWlOb2RlO1xyXG4gICAgICAgIG5vZGUxLnNjYWxlID0gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyAvIHRoaXMudWlDYW1lcmEuem9vbVJhdGlvICogMC43XHJcbiAgICAgICAgbm9kZTEucG9zaXRpb24gPSBwb3MyXHJcbiAgICAgICAgY2MudHdlZW4obm9kZTEpLnRvKDAuNCwgeyBwb3NpdGlvbjogcG9zLCBzY2FsZTogMC40IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAvLyB0aGlzLm1pc3Npb25CYXIuZ2V0Q29tcG9uZW50KFwidXBkYXRlQmFyXCIpLnVwZGF0ZUJhcigpO1xyXG4gICAgICAgICAgICAvLyB3b29kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJleHBcIilcclxuICAgICAgICAgICAgLy8gLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZE91dCwgZmFsc2UsIDEpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgaXNFbmRHYW1lID0gZmFsc2VcclxuICAgIG9uRW5kR2FtZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNFbmRHYW1lID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhclRpbWUuZ2V0Q29tcG9uZW50KFwiYmFyVGltZVwiKS5lbmRHYW1lKClcclxuICAgICAgICAgICAgdGhpcy5hbWF6aW5nLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGlua1dpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmRDYXJkLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZFdpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyVGltZS5nZXRDb21wb25lbnQoXCJiYXJUaW1lXCIpLmVuZEdhbWUoKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFyckN1cykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCI2LmFuZ3J5XCIsIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgICAgIHRoaXMudGltZXVwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5raW5nLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvc2UsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICBpc0RvYyA9IGZhbHNlXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmVuZENhcmRXaW4uc2NhbGUgPSAobG9naWMpID8gMS4yIDogMC43XHJcblxyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICB0aGlzLmJhclRpbWUuc2NhbGUgPSAobG9naWMpID8gMiA6IDEuMVxyXG4gICAgICAgIHRoaXMuYmFyQ29pbi5zY2FsZSA9IChsb2dpYykgPyAyIDogMS4xXHJcbiAgICAgICAgdGhpcy5jbG9ja1RpbWUuc2NhbGUgPSAobG9naWMpID8gMS43IDogMVxyXG4gICAgICAgIHRoaXMucGhhb0hvYS5zY2FsZSA9IChsb2dpYykgPyA5IDogNVxyXG4gICAgICAgIHRoaXMuZ3VpbGQuc2NhbGUgPSAobG9naWMpID8gMiA6IDEuMlxyXG4gICAgICAgIHRoaXMuZ3VpbGQucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoMCwgLTkwMCkgOiBjYy52MygwLCAtMzYwKVxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygyMzAsIDU2KSA6IGNjLnYzKDAsIDU2KVxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5zY2FsZSA9IChsb2dpYykgPyAwLjcgOiAxXHJcbiAgICAgICAgdGhpcy5saXN0S2hheS5wb3NpdGlvbiA9IChsb2dpYykgPyBjYy52MygyMjAsIDE0LjYpIDogY2MudjMoMCwgMTQuNilcclxuICAgICAgICB0aGlzLmxpc3RLaGF5LnNjYWxlID0gKGxvZ2ljKSA/IDAuNyA6IDFcclxuICAgICAgICB0aGlzLmxpc3RSYXlOb2RlLnNjYWxlID0gKGxvZ2ljKSA/IDAuOCA6IDFcclxuICAgICAgICB0aGlzLmxpc3RSYXlOb2RlLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIC01MCkgOiBjYy52MygwLCAwKVxyXG4gICAgICAgIHRoaXMudGltZXVwLnNjYWxlID0gKGxvZ2ljKSA/IDEgOiAxLjRcclxuICAgICAgICB0aGlzLmFtYXppbmcuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMubm90aU1pc3Npb24uc2NhbGUgPSAobG9naWMpID8gMS41IDogMVxyXG4gICAgICAgIHRoaXMuYnRuRG93bmxvYWQuYWN0aXZlID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb2MgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTcwKVxyXG4gICAgICAgICAgICB0aGlzLmJ0bkRvd25sb2FkLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IDE5N1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMi42XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTUwKVxyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVjayBpcGhvbmV4XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkRvd25sb2FkLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IDQwMFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAyXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTEyMClcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuRG93bmxvYWQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RvYyA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuODVcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtNTApXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkRvd25sb2FkLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=