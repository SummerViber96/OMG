
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/CC2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '006034IWPVP7qZ4XOg11AcG', 'CC2');
// scripts/APP/CC2.ts

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
globalThis.coin = 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundBg = null;
        _this.hairCut = null;
        _this.char1 = null;
        _this.char2 = null;
        _this.char3 = null;
        _this.tut = null;
        _this.hand = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.logo = null;
        _this.barCoin = null;
        _this.preCoin = null;
        _this.lbCoin = null;
        _this.scene1 = null;
        _this.scene2 = null;
        _this.scene3 = null;
        _this.uiCamera = null;
        _this.uiNode = null;
        _this.btnUnlock = null;
        _this.rem2 = null;
        _this.placeChar2 = null;
        _this.itemShambo = null;
        _this.itemVoiHoaSen = null;
        _this.itemMaySay = null;
        _this.charDress = null;
        _this.xabong = null;
        _this.xabong2 = null;
        _this.charDressManager = null;
        _this.endCard = null;
        _this.failUI = null;
        _this.soundLose = null;
        _this.char2Hind = null;
        //hand
        _this.handScene21 = null;
        _this.char2Parent = null;
        _this.listHand = null;
        _this.touchNode = null;
        _this.water = null;
        _this.dryer = null;
        _this.sambo = null;
        _this.soundThank = null;
        _this.soundHi = null;
        _this.soundAngry1 = null;
        _this.soundAngry2 = null;
        _this.soundTranscreen = null;
        _this.soundClick = null;
        _this.soundWrong = null;
        _this.soundCoin = null;
        _this.soundFail = null;
        _this.soundUnlock = null;
        _this.soundPopUp = null;
        _this.listCard = null;
        _this.listCard2 = null;
        _this.soap = null;
        _this.tutSoap = null;
        _this.bangD = null;
        _this.tutBangD = null;
        _this.vetThuong = null;
        _this.lbVetThuong = null;
        _this.hindCuoi = null;
        _this.phaohoa = null;
        _this.endCard0 = null;
        _this.endCard02 = null;
        _this.selectedItem = null;
        _this.isStep1 = false;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.arrBtn = [];
        _this.isStep = 0;
        _this.isClickCard = false;
        _this.isunlock = false;
        _this.countStep = 0;
        _this.isClick = false;
        _this.isShowEnd = false;
        _this.isIpad = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.3);
        this.arrBtn = [this.itemShambo, this.itemVoiHoaSen, this.itemMaySay];
        // this.startScene()
    };
    NewClass.prototype.btn_clickPet = function () {
        var _this = this;
        console.log("btn_clickPet");
        cc.audioEngine.play(this.soundClick, false, 1);
        cc.tween(this.scene1).to(0.3, { opacity: 0 }).call(function () {
            _this.scene1.active = false;
        }).start();
        this.scheduleOnce(function () {
            _this.isStep1 = true;
            _this.camera.node.position = cc.v3(0, 0);
        }, 0.2);
        this.scene2.active = true;
        cc.audioEngine.play(this.soundTranscreen, false, 1);
        // this.handScene21.active = true;
        this.scheduleOnce(function () {
            _this.listCard.active = true;
            _this.scheduleOnce(function () {
                if (_this.isClickCard == false) {
                    _this.listCard.getChildByName("hand").active = true;
                }
            }, 1);
            cc.audioEngine.play(_this.soundPopUp, false, 1);
        }, 0.5);
    };
    NewClass.prototype.step3 = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.lbVetThuong.string = "Heal Your Pet!";
            _this.listCard2.active = true;
            _this.scheduleOnce(function () {
                _this.listCard2.getChildByName("hand").active = true;
                _this.vetThuong.active = true;
                _this.hindCuoi.active = true;
            }, 0.5);
        }, 0.5);
    };
    NewClass.prototype.btn_chooseCard = function (event, value) {
        console.log("btn_chooseCard", value);
        this.isClickCard = true;
        this.listCard.getChildByName("hand").active = false;
        cc.audioEngine.play(this.soundClick, false, 1);
        switch (value) {
            case "0":
                this.listCard.active = false;
                this.tutSoap.active = true;
                this.soap.active = true;
                this.soap.getComponent("Scratch_ticket").addEvent();
                // this.daoCao.active=true
                break;
            case "1":
                var btn = event.currentTarget;
                btn.getComponent(cc.Animation).play("cardWrong");
                cc.audioEngine.play(this.soundWrong, false, 0.5);
                break;
            case "2":
                var btn2 = event.currentTarget;
                btn2.getComponent(cc.Animation).play("cardWrong");
                cc.audioEngine.play(this.soundWrong, false, 0.5);
                break;
        }
    };
    NewClass.prototype.btn_chooseCard2 = function (event, value) {
        this.isClickCard = true;
        this.listCard2.getChildByName("hand").active = false;
        cc.audioEngine.play(this.soundClick, false, 1);
        switch (value) {
            case "0":
                this.listCard2.active = false;
                this.tutBangD.active = true;
                this.bangD.active = true;
                this.bangD.getComponent("BangD").addEvent();
                this.vetThuong.active = true;
                // this.daoCao.active=true
                break;
            case "1":
                var btn = event.currentTarget;
                btn.getComponent(cc.Animation).play("cardWrong");
                cc.audioEngine.play(this.soundWrong, false, 0.5);
                break;
            case "2":
                var btn2 = event.currentTarget;
                btn2.getComponent(cc.Animation).play("cardWrong");
                cc.audioEngine.play(this.soundWrong, false, 0.5);
                break;
        }
    };
    NewClass.prototype.completeScene = function () {
        var _this = this;
        // this.startScene()
        // this.scene1.active=false
        this.scene2.scale = 2;
        this.scene2.active = true;
        if (this.isIpad == false) {
            cc.tween(this.scene2).to(0.3, { scale: 1 }).call(function () {
            }).start();
        }
        else {
            cc.tween(this.scene2).to(0.3, { scale: 0.75 }).call(function () {
            }).start();
        }
        this.scheduleOnce(function () {
            _this.scene1.active = false;
            _this.startScene();
        }, 0.3);
    };
    NewClass.prototype.startScene = function () {
        var _this = this;
        this.barCoin.active = true;
        var char1Node = this.char1.node;
        cc.audioEngine.play(this.soundTranscreen, false, 1);
        cc.tween(char1Node).to(0.8, { position: cc.v3(110, -223) }).call(function () {
            _this.char1.setAnimation(0, "Happy", false);
            cc.audioEngine.play(_this.soundThank, false, 0.7);
            char1Node.scaleX = -1.5;
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundCoin, false, 1);
                _this.giveCoin();
            }, 0.3);
        }).start();
        this.char2.setAnimation(0, "Walk", true);
        this.scheduleOnce(function () {
            if (_this.isunlock)
                return;
            _this.handScene21.active = true;
        }, 3);
        cc.tween(this.char2.node.parent).to(3.8, { position: cc.v3(-407, -925) }).call(function () {
            _this.char2.setAnimation(0, "Talk", true);
            // this.char2.node.getChildByName("pop").active = true
            // cc.audioEngine.play(this.soundHi, false, 1)
        }).start();
    };
    NewClass.prototype.giveCoin = function () {
        var _this = this;
        var posStart = this.char1.node.parent.convertToWorldSpaceAR(this.char1.node.position);
        posStart = this.uiNode.convertToNodeSpaceAR(posStart).add(cc.v3(0, 420));
        var posEnd = this.barCoin.children[1].position;
        posEnd = this.barCoin.convertToWorldSpaceAR(posEnd);
        posEnd = this.uiNode.convertToNodeSpaceAR(posEnd);
        var midPos = cc.v2((posEnd.x + 500), (posStart.y + posEnd.y) / 2);
        for (var i = 0; i < 8; i++) {
            this.scheduleOnce(function () {
                var coin = cc.instantiate(_this.preCoin);
                // coin.parent = this.node;
                coin.parent = _this.scene2.parent;
                // coin.position = cc.v3(0, 0)
                coin.position = posStart;
                coin.zIndex = 5;
                cc.tween(coin).bezierTo(1, cc.v2(posStart.x, posStart.y), midPos, cc.v2(posEnd.x, posEnd.y)).start();
                cc.tween(coin).to(1, { scale: 1.3 }).call(function () {
                    coin.destroy();
                    globalThis.coin += 50;
                }).start();
            }, 0.05 * i);
        }
        this.scheduleOnce(function () {
            _this.btnUnlock.getComponent(cc.Animation).play();
        }, 0.6);
        this.scheduleOnce(function () {
            _this.char1.setAnimation(0, "Walk", true);
            _this.char1.node.zIndex = 2;
            cc.tween(_this.char1.node).by(4, { position: cc.v3(1600, 0) }).call(function () {
                _this.char1.node.active = false;
            }).start();
        }, 1);
    };
    NewClass.prototype.unlockCoin = function () {
        var _this = this;
        var posStart = this.btnUnlock.parent.convertToWorldSpaceAR(this.btnUnlock.position);
        posStart = this.uiNode.convertToNodeSpaceAR(posStart).add(cc.v3(0, 0));
        var posEnd = this.barCoin.children[1].position;
        posEnd = this.barCoin.convertToWorldSpaceAR(posEnd);
        posEnd = this.uiNode.convertToNodeSpaceAR(posEnd);
        var midPos = cc.v2((posEnd.x + 500), (posStart.y + posEnd.y) / 2);
        for (var i = 0; i < 8; i++) {
            this.scheduleOnce(function () {
                var coin = cc.instantiate(_this.preCoin);
                // coin.parent = this.node;
                coin.parent = _this.scene2.parent;
                // coin.position = cc.v3(0, 0)
                coin.position = posEnd;
                coin.zIndex = 5;
                cc.tween(coin).bezierTo(0.6, cc.v2(posEnd.x, posEnd.y), midPos, cc.v2(posStart.x, posStart.y)).start();
                cc.tween(coin).to(0.6, { scale: 1.3 }).call(function () {
                    coin.destroy();
                    globalThis.coin -= 50;
                    _this.btnUnlock.getComponent(cc.Animation).play("btn_scale");
                }).start();
            }, 0.04 * i);
        }
    };
    NewClass.prototype.btn_unlock = function (event) {
        var _this = this;
        if (this.isunlock)
            return;
        cc.audioEngine.play(this.soundCoin, false, 1);
        // for (let i = 0; i < 35; i++) {
        //     this.scheduleOnce(() => {
        //         globalThis.coin -= 10
        //     }, 0.02 * i)
        // }
        this.isunlock = true;
        this.handScene21.active = false;
        this.unlockCoin();
        this.scheduleOnce(function () {
            _this.btnUnlock.active = false;
            _this.rem2.opacity = 0;
            _this.rem2.active = true;
            cc.tween(_this.rem2).to(0.3, { opacity: 255 }).start();
            _this.scheduleOnce(function () {
                _this.onEventListener();
                _this.char2Hind.active = true;
                _this.char2.node.getChildByName("pop").active = true;
                cc.audioEngine.play(_this.soundHi, false, 1);
            }, 0.4);
        }, 0.85);
    };
    NewClass.prototype.onEventListener = function () {
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    NewClass.prototype.offEventListener = function () {
        this.touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    NewClass.prototype.onTouchStart = function (event) {
        if (this.selectedItem)
            return;
        var screenPos = event.getLocation();
        // let worldPos = this.camera.getScreenToWorldPoint(screenPos);
        var worldPos = screenPos;
        // Chuyển world → local (node main)
        var localPos = this.scene2.convertToNodeSpaceAR(worldPos);
        if (this.char2Parent.position.sub(cc.v3(localPos.x, localPos.y)).mag() < 300) {
            this.char2Parent.setPosition(localPos);
            this.selectedItem = this.char2Parent;
            this.char2Hind.active = false;
            this.char2Parent.children[0].active = true;
        }
        // Đặt vị trí cho item
        // this.main.guideDrag.active = false;
        // this.node.opacity = 0
    };
    NewClass.prototype.onTouchMove = function (event) {
        if (!this.selectedItem)
            return;
        var screenPos = event.getLocation();
        // let worldPos = this.camera.getScreenToWorldPoint(screenPos);
        var worldPos = screenPos;
        // Chuyển world → local (node main)
        var localPos = this.node.convertToNodeSpaceAR(worldPos);
        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
    };
    NewClass.prototype.onTouchEnd = function (event) {
        if (!this.selectedItem)
            return;
        var screenPos = event.getLocation();
        var worldPos = this.camera.getScreenToWorldPoint(screenPos);
        // Chuyển world → local (node main)
        var localPos = this.node.convertToNodeSpaceAR(worldPos);
        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
        var check = this.checkOnFloor(localPos);
        if (check == true) {
            this.selectedItem.position = cc.v3(-500, -259);
            this.offEventListener();
            this.moveStep2();
        }
    };
    NewClass.prototype.moveStep2 = function () {
        var _this = this;
        this.char2.node.parent.children[0].active = false;
        this.rem2.zIndex = 2;
        this.char2.setAnimation(0, "Walk", true);
        this.char2.node.getChildByName("pop").active = false;
        cc.tween(this.char2Parent).to(1, { position: cc.v3(-193, -259) }).call(function () {
            _this.char2Parent.active = false;
        }).start();
        this.scheduleOnce(function () {
            // cc.tween(this.camera).to(0.5, { zoomRatio: 2.1 }).start()
            // cc.tween(this.camera.node).to(0.5, { position: cc.v3(-182, 0) }).start()
            _this.scene2.active = false;
        }, 1.3);
        this.scheduleOnce(function () {
            if (_this.isIpad == false) {
                cc.tween(_this.scene2).to(0.5, { position: cc.v3(320, 0), scale: 2.1 }).start();
            }
            else {
                console.log("ipda");
                cc.tween(_this.scene2).to(0.5, { position: cc.v3(320, 0), scale: 1.5 }).start();
            }
        }, 0.7);
        this.scheduleOnce(function () {
            _this.scene3.opacity = 0;
            _this.scene3.active = true;
            cc.tween(_this.scene3).to(0.3, { opacity: 255 }).start();
            _this.barCoin.active = false;
            _this.scheduleOnce(function () {
                if (_this.isStep == 0) {
                    _this.listHand.children[0].active = true;
                }
            }, 2.3);
        }, 1.3);
    };
    NewClass.prototype.checkOnFloor = function (localPos) {
        if (localPos.sub(this.placeChar2.position).mag() <= 600) {
            return true;
        }
        else {
            this.selectedItem.position = cc.v3(-407, -925);
            this.selectedItem = null;
            return false;
        }
    };
    NewClass.prototype.btn_shambo = function () {
        var _this = this;
        if (this.isStep > 1)
            return;
        this.isStep = 1;
        this.countStep++;
        this.listHand.children[0].active = false;
        cc.audioEngine.play(this.soundClick, false, 1);
        this.arrBtn[0] = null;
        this.itemShambo.getComponent(cc.Button).enabled = false;
        this.itemShambo.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.sambo, false, 1);
            if (_this.countStep > 1) {
                _this.charDressManager.children[1].active = true;
                _this.xabong2.node.active = true;
                _this.xabong2.setAnimation(0, "show", false);
                _this.charDressManager.children[0].active = false;
                _this.charDressManager.children[2].active = false;
                _this.charDress.node.active = false;
            }
            else {
                _this.charDress.setAnimation(0, "Boil", true);
                _this.xabong.setAnimation(0, "animation", false);
            }
        }, 0.4);
        this.checkEnd();
        this.unschedule(this.checkHindGame);
        this.scheduleOnce(this.checkHindGame, 4);
    };
    NewClass.prototype.btn_tam = function () {
        var _this = this;
        if (this.isStep - 1) {
            cc.audioEngine.play(this.soundWrong, false, 0.5);
            this.itemVoiHoaSen.getComponent(cc.Animation).play("item_wrong");
            return;
        }
        this.isStep = 2;
        this.countStep++;
        cc.audioEngine.play(this.soundClick, false, 0.7);
        this.arrBtn[1] = null;
        this.listHand.children[1].active = false;
        this.itemVoiHoaSen.getComponent(cc.Button).enabled = false;
        this.itemVoiHoaSen.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.water, false, 1);
            _this.itemVoiHoaSen.children[1].children[0].active = true;
            _this.charDress.node.active = false;
            _this.charDressManager.children[2].active = true;
            _this.charDressManager.children[0].active = false;
            _this.charDressManager.children[1].active = false;
        }, 0.6);
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.soundAngry1, false, 0.7);
        }, 1);
        this.checkEnd();
        this.unschedule(this.checkHindGame);
        this.scheduleOnce(this.checkHindGame, 4);
    };
    NewClass.prototype.btn_saytoc = function () {
        var _this = this;
        if (this.isStep - 2) {
            cc.audioEngine.play(this.soundWrong, false, 0.5);
            this.itemMaySay.getComponent(cc.Animation).play("item_wrong");
            return;
        }
        this.isStep = 3;
        this.countStep++;
        this.arrBtn[2] = null;
        this.listHand.children[2].active = false;
        cc.audioEngine.play(this.soundClick, false, 0.7);
        this.xabong2.node.active = false;
        this.itemMaySay.getComponent(cc.Button).enabled = false;
        this.itemMaySay.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.dryer, false, 1);
            _this.itemMaySay.children[1].children[0].active = true;
            _this.charDressManager.children[0].active = true;
            _this.charDressManager.children[1].active = false;
            _this.charDressManager.children[2].active = false;
            _this.charDress.node.active = false;
        }, 0.5);
        this.scheduleOnce(function () {
            _this.itemMaySay.children[1].children[0].active = false;
        }, 2);
        this.scheduleOnce(function () {
            _this.charDressManager.children[0].active = false;
            _this.charDressManager.children[1].active = true;
        }, 2.3);
        this.unschedule(this.checkHindGame);
        this.scheduleOnce(this.checkHindGame, 4);
        this.checkEnd();
    };
    NewClass.prototype.checkHindGame = function () {
        var check = this.findHind();
        if (check != null) {
            this.listHand.children[check].active = true;
        }
    };
    NewClass.prototype.findHind = function () {
        var check = null;
        for (var i = 0; i < 3; i++) {
            if (this.arrBtn[i] != null) {
                return i;
            }
        }
        return check;
    };
    NewClass.prototype.checkEnd = function () {
        var _this = this;
        if (this.countStep == 3) {
            this.scheduleOnce(function () {
                _this.moveStep3();
            }, 2.6);
        }
    };
    NewClass.prototype.moveStep3 = function () {
        var _this = this;
        // this.scene2.zIndex = 3
        this.scene2.scale = 2;
        this.scene2.active = true;
        cc.audioEngine.play(this.soundTranscreen, false, 0.5);
        this.char2.node.active = false;
        if (this.isIpad == false) {
            cc.tween(this.scene2).to(0.5, { scale: 1, position: cc.v3(100, 0) }).call(function () {
            }).start();
        }
        else {
            cc.tween(this.scene2).to(0.5, { scale: 0.75, position: cc.v3(100, 0) }).call(function () {
            }).start();
        }
        this.scheduleOnce(function () {
            _this.scene3.active = false;
            _this.char3.node.active = true;
            cc.audioEngine.play(_this.soundAngry2, false, 0.5);
            cc.tween(_this.char3.node).to(0.5, { position: cc.v3(-456, -243) }).call(function () {
                _this.char3.setAnimation(0, "Angry", true);
                _this.onEndGame();
            }).start();
        }, 0.5);
    };
    NewClass.prototype.onEndGame = function () {
        var _this = this;
        this.hindCuoi.active = false;
        this.phaohoa.active = true;
        this.endCard0.active = true;
        this.scheduleOnce(function () {
            _this.isShowEnd = true;
            _this.failUI.active = false;
            cc.audioEngine.play(_this.soundLose, false, 1);
            // this.endCard.active = true;
            _this.linkToStore.active = true;
        }, 1.6);
    };
    NewClass.prototype.update = function (dt) {
        this.lbCoin.string = globalThis.coin.toString();
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
            if (this.isShowEnd == true) {
                this.endCard.active = true;
                this.endCard02.active = false;
            }
        }
        else {
            this.reponsive(false);
            if (this.isShowEnd == true) {
                this.endCard02.active = true;
                this.endCard.active = false;
            }
        }
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        // this.camera.zoomRatio = 1.05
        this.endCard.scale = (logic) ? 0.7 : 1;
        // this.endCard0.scale = (logic) ? 0.7 : 1
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.camera.zoomRatio = (logic) ? 1 : 1.5;
        this.listCard.scale = (logic) ? 1 : 1.4;
        this.listCard2.scale = (logic) ? 1 : 1.4;
        this.endCard0.position = (logic) ? cc.v3(0, 0) : cc.v3(0, 300);
        if (this.isStep1 == false) {
            this.camera.node.position = (logic) ? cc.v3(0, 0) : cc.v3(0, -300);
        }
        this.isIpad = false;
        // this.scene2.scale = 1
        if (logic == true) {
            // this.camera.node.position = cc.v3(0, 100)
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            // this.camera.zoomRatio = 2.5
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.isIpad = true;
                // this.scene2.scale=0.5
                // this.camera.zoomRatio = 0.6
                console.log("ipad");
                // this.scene2.scale
            }
        }
        else {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // this.camera.node.position = cc.v3(0, -30)
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 0.95
            }
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "hairCut", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "char1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "char2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "char3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
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
    ], NewClass.prototype, "barCoin", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCoin", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene3", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "uiCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnUnlock", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "rem2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "placeChar2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "itemShambo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "itemVoiHoaSen", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "itemMaySay", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "charDress", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "xabong", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "xabong2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "charDressManager", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "failUI", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundLose", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char2Hind", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handScene21", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char2Parent", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "touchNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "water", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "dryer", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "sambo", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThank", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHi", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAngry1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAngry2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundTranscreen", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCoin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundFail", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUnlock", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundPopUp", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "soap", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tutSoap", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bangD", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tutBangD", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "vetThuong", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbVetThuong", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hindCuoi", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaohoa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard0", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard02", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxDQzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDZCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQSt2QkM7UUE1dkJHLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBZ0IsSUFBSSxDQUFBO1FBRXpCLFdBQUssR0FBZ0IsSUFBSSxDQUFBO1FBRXpCLFNBQUcsR0FBWSxJQUFJLENBQUE7UUFFbkIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUdwQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUE7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixlQUFT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QUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDcEcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN0QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7b0JBQ2QsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUE7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2QsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQTtTQUNmO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNwRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1lBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQy9ELEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFZCxDQUFD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LENBQUMsS0FBSyxDQUFDO2lEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFoSVIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQSt2QjVCO0lBQUQsZUFBQztDQS92QkQsQUErdkJDLENBL3ZCcUMsRUFBRSxDQUFDLFNBQVMsR0ErdkJqRDtrQkEvdkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmdsb2JhbFRoaXMuY29pbiA9IDA7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBoYWlyQ3V0OiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBjaGFyMTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgY2hhcjI6IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgY2hhcjM6IHNwLlNrZWxldG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhckNvaW46IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ29pbjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb2luOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NlbmUxOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjZW5lMzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICB1aUNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5VbmxvY2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZW0yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhY2VDaGFyMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbVNoYW1ibzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGl0ZW1Wb2lIb2FTZW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtTWF5U2F5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGNoYXJEcmVzczogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgeGFib25nOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICB4YWJvbmcyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJEcmVzc01hbmFnZXI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZhaWxVSTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcjJIaW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vaGFuZFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kU2NlbmUyMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXIyUGFyZW50OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdG91Y2hOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHdhdGVyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGRyeWVyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNhbWJvOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGFuazogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5MTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQW5ncnkyOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUcmFuc2NyZWVuOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENvaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRGYWlsOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVW5sb2NrOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRQb3BVcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDYXJkMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNvYXA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXRTb2FwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFuZ0Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXRCYW5nRDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHZldFRodW9uZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlZldFRodW9uZzogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaW5kQ3VvaTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBoYW9ob2E6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkMDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDAyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEl0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgaXNTdGVwMSA9IGZhbHNlO1xyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIGFyckJ0biA9IFtdXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuMylcclxuICAgICAgICB0aGlzLmFyckJ0biA9IFt0aGlzLml0ZW1TaGFtYm8sIHRoaXMuaXRlbVZvaUhvYVNlbiwgdGhpcy5pdGVtTWF5U2F5XVxyXG4gICAgICAgIC8vIHRoaXMuc3RhcnRTY2VuZSgpXHJcbiAgICB9XHJcbiAgICBidG5fY2xpY2tQZXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJidG5fY2xpY2tQZXRcIilcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc2NlbmUxKS50bygwLjMsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZTEuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXAxID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwKVxyXG4gICAgICAgIH0sIDAuMilcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRyYW5zY3JlZW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIC8vIHRoaXMuaGFuZFNjZW5lMjEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDbGlja0NhcmQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDYXJkLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFBvcFVwLCBmYWxzZSwgMSlcclxuICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgfVxyXG4gICAgaXNDbGlja0NhcmQgPSBmYWxzZVxyXG5cclxuICAgIHN0ZXAzKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sYlZldFRodW9uZy5zdHJpbmcgPSBcIkhlYWwgWW91ciBQZXQhXCJcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FyZDIuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMudmV0VGh1b25nLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaGluZEN1b2kuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgIH1cclxuICAgIGJ0bl9jaG9vc2VDYXJkKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnRuX2Nob29zZUNhcmRcIiwgdmFsdWUpXHJcbiAgICAgICAgdGhpcy5pc0NsaWNrQ2FyZCA9IHRydWVcclxuICAgICAgICB0aGlzLmxpc3RDYXJkLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FyZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHV0U29hcC5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2FwLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc29hcC5nZXRDb21wb25lbnQoXCJTY3JhdGNoX3RpY2tldFwiKS5hZGRFdmVudCgpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRhb0Nhby5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZFdyb25nXCIpXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bjIgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgYnRuMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZFdyb25nXCIpXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidG5fY2hvb3NlQ2FyZDIoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5pc0NsaWNrQ2FyZCA9IHRydWVcclxuICAgICAgICB0aGlzLmxpc3RDYXJkMi5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIjBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENhcmQyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50dXRCYW5nRC5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5nRC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbmdELmdldENvbXBvbmVudChcIkJhbmdEXCIpLmFkZEV2ZW50KClcclxuICAgICAgICAgICAgICAgIHRoaXMudmV0VGh1b25nLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGFvQ2FvLmFjdGl2ZT10cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkV3JvbmdcIilcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuMiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBidG4yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkV3JvbmdcIilcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdyb25nLCBmYWxzZSwgMC41KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcGxldGVTY2VuZSgpIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXJ0U2NlbmUoKVxyXG4gICAgICAgIC8vIHRoaXMuc2NlbmUxLmFjdGl2ZT1mYWxzZVxyXG4gICAgICAgIHRoaXMuc2NlbmUyLnNjYWxlID0gMjtcclxuICAgICAgICB0aGlzLnNjZW5lMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNJcGFkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc2NlbmUyKS50bygwLjMsIHsgc2NhbGU6IDEgfSkuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNjZW5lMikudG8oMC4zLCB7IHNjYWxlOiAwLjc1IH0pLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2NlbmUoKVxyXG4gICAgICAgIH0sIDAuMylcclxuICAgIH1cclxuICAgIHN0YXJ0U2NlbmUoKSB7XHJcbiAgICAgICAgdGhpcy5iYXJDb2luLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBsZXQgY2hhcjFOb2RlID0gdGhpcy5jaGFyMS5ub2RlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVHJhbnNjcmVlbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgY2MudHdlZW4oY2hhcjFOb2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDExMCwgLTIyMykgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjEuc2V0QW5pbWF0aW9uKDAsIFwiSGFwcHlcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGFuaywgZmFsc2UsIDAuNylcclxuICAgICAgICAgICAgY2hhcjFOb2RlLnNjYWxlWCA9IC0xLjU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5naXZlQ29pbigpXHJcbiAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5jaGFyMi5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXN1bmxvY2spIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5oYW5kU2NlbmUyMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDMpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyMi5ub2RlLnBhcmVudCkudG8oMy44LCB7IHBvc2l0aW9uOiBjYy52MygtNDA3LCAtOTI1KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyMi5zZXRBbmltYXRpb24oMCwgXCJUYWxrXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNoYXIyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIaSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGdpdmVDb2luKCkge1xyXG4gICAgICAgIGxldCBwb3NTdGFydCA9IHRoaXMuY2hhcjEubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY2hhcjEubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgcG9zU3RhcnQgPSB0aGlzLnVpTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NTdGFydCkuYWRkKGNjLnYzKDAsIDQyMCkpO1xyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmJhckNvaW4uY2hpbGRyZW5bMV0ucG9zaXRpb247XHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy5iYXJDb2luLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NFbmQpO1xyXG4gICAgICAgIHBvc0VuZCA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZClcclxuXHJcbiAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKChwb3NFbmQueCArIDUwMCksIChwb3NTdGFydC55ICsgcG9zRW5kLnkpIC8gMilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29pbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2luLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIGNvaW4ucGFyZW50ID0gdGhpcy5zY2VuZTIucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgLy8gY29pbi5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgICAgICAgICBjb2luLnBvc2l0aW9uID0gcG9zU3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBjb2luLnpJbmRleCA9IDVcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4pLmJlemllclRvKDEsIGNjLnYyKHBvc1N0YXJ0LngsIHBvc1N0YXJ0LnkpLCBtaWRQb3MsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSkpLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4pLnRvKDEsIHsgc2NhbGU6IDEuMyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuY29pbiArPSA1MFxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAwLjA1ICogaSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blVubG9jay5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB9LCAwLjYpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIxLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjEubm9kZS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhcjEubm9kZSkuYnkoNCwgeyBwb3NpdGlvbjogY2MudjMoMTYwMCwgMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXIxLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG4gICAgdW5sb2NrQ29pbigpIHtcclxuICAgICAgICBsZXQgcG9zU3RhcnQgPSB0aGlzLmJ0blVubG9jay5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuYnRuVW5sb2NrLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3NTdGFydCA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc1N0YXJ0KS5hZGQoY2MudjMoMCwgMCkpO1xyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmJhckNvaW4uY2hpbGRyZW5bMV0ucG9zaXRpb247XHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy5iYXJDb2luLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NFbmQpO1xyXG4gICAgICAgIHBvc0VuZCA9IHRoaXMudWlOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZClcclxuXHJcbiAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKChwb3NFbmQueCArIDUwMCksIChwb3NTdGFydC55ICsgcG9zRW5kLnkpIC8gMilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29pbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2luLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIGNvaW4ucGFyZW50ID0gdGhpcy5zY2VuZTIucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgLy8gY29pbi5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgICAgICAgICBjb2luLnBvc2l0aW9uID0gcG9zRW5kO1xyXG4gICAgICAgICAgICAgICAgY29pbi56SW5kZXggPSA1XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihjb2luKS5iZXppZXJUbygwLjYsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSksIG1pZFBvcywgY2MudjIocG9zU3RhcnQueCwgcG9zU3RhcnQueSkpLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvaW4pLnRvKDAuNiwgeyBzY2FsZTogMS4zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4uZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jb2luIC09IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5VbmxvY2suZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImJ0bl9zY2FsZVwiKVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAwLjA0ICogaSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaXN1bmxvY2sgPSBmYWxzZVxyXG4gICAgY291bnRTdGVwID0gMFxyXG4gICAgYnRuX3VubG9jayhldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzdW5sb2NrKSByZXR1cm47XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMzU7IGkrKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWxUaGlzLmNvaW4gLT0gMTBcclxuXHJcbiAgICAgICAgLy8gICAgIH0sIDAuMDIgKiBpKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmlzdW5sb2NrID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaGFuZFNjZW5lMjEuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy51bmxvY2tDb2luKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0blVubG9jay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yZW0yLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgICAgIHRoaXMucmVtMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucmVtMikudG8oMC4zLCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FdmVudExpc3RlbmVyKClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcjJIaW5kLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcjIubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIaSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIH0sIDAuNClcclxuXHJcbiAgICAgICAgfSwgMC44NSlcclxuXHJcbiAgICB9XHJcbiAgICBvbkV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb2ZmRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtKSByZXR1cm5cclxuXHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIGxldCB3b3JsZFBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHNjcmVlblBvc1xyXG5cclxuICAgICAgICAvLyBDaHV54buDbiB3b3JsZCDihpIgbG9jYWwgKG5vZGUgbWFpbilcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLnNjZW5lMi5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcjJQYXJlbnQucG9zaXRpb24uc3ViKGNjLnYzKGxvY2FsUG9zLngsIGxvY2FsUG9zLnkpKS5tYWcoKSA8IDMwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIyUGFyZW50LnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmNoYXIyUGFyZW50XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjJIaW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjJQYXJlbnQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDEkOG6t3QgduG7iyB0csOtIGNobyBpdGVtXHJcblxyXG4gICAgICAgIC8vIHRoaXMubWFpbi5ndWlkZURyYWcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIGxldCB3b3JsZFBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHNjcmVlblBvc1xyXG5cclxuICAgICAgICAvLyBDaHV54buDbiB3b3JsZCDihpIgbG9jYWwgKG5vZGUgbWFpbilcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICAvLyDEkOG6t3QgduG7iyB0csOtIGNobyBpdGVtXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBzY3JlZW5Qb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQoc2NyZWVuUG9zKTtcclxuXHJcbiAgICAgICAgLy8gQ2h1eeG7g24gd29ybGQg4oaSIGxvY2FsIChub2RlIG1haW4pXHJcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgLy8gxJDhurd0IHbhu4sgdHLDrSBjaG8gaXRlbVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrT25GbG9vcihsb2NhbFBvcyk7XHJcbiAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0ucG9zaXRpb24gPSBjYy52MygtNTAwLCAtMjU5KVxyXG4gICAgICAgICAgICB0aGlzLm9mZkV2ZW50TGlzdGVuZXIoKVxyXG4gICAgICAgICAgICB0aGlzLm1vdmVTdGVwMigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZVN0ZXAyKCkge1xyXG4gICAgICAgIHRoaXMuY2hhcjIubm9kZS5wYXJlbnQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5yZW0yLnpJbmRleCA9IDJcclxuICAgICAgICB0aGlzLmNoYXIyLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jaGFyMi5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyMlBhcmVudCkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTE5MywgLTI1OSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjJQYXJlbnQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMC41LCB7IHpvb21SYXRpbzogMi4xIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtMTgyLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUyLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIH0sIDEuMylcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSXBhZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zY2VuZTIpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMzIwLCAwKSwgc2NhbGU6IDIuMSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcGRhXCIpXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNjZW5lMikudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygzMjAsIDApLCBzY2FsZTogMS41IH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgMC43KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZTMub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc2NlbmUzKS50bygwLjMsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5iYXJDb2luLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LCAyLjMpXHJcbiAgICAgICAgfSwgMS4zKVxyXG4gICAgfVxyXG4gICAgY2hlY2tPbkZsb29yKGxvY2FsUG9zKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsUG9zLnN1Yih0aGlzLnBsYWNlQ2hhcjIucG9zaXRpb24pLm1hZygpIDw9IDYwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0ucG9zaXRpb24gPSBjYy52MygtNDA3LCAtOTI1KVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzQ2xpY2sgPSBmYWxzZVxyXG4gICAgYnRuX3NoYW1ibygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPiAxKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1N0ZXAgPSAxXHJcbiAgICAgICAgdGhpcy5jb3VudFN0ZXArK1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5hcnJCdG5bMF0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXRlbVNoYW1iby5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtU2hhbWJvLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNhbWJvLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50U3RlcCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54YWJvbmcyLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy54YWJvbmcyLnNldEFuaW1hdGlvbigwLCBcInNob3dcIiwgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3Mubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3Muc2V0QW5pbWF0aW9uKDAsIFwiQm9pbFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueGFib25nLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCBmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAwLjQpXHJcbiAgICAgICAgdGhpcy5jaGVja0VuZCgpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hlY2tIaW5kR2FtZSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmNoZWNrSGluZEdhbWUsIDQpXHJcblxyXG4gICAgfVxyXG4gICAgYnRuX3RhbSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAhIC0gMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgdGhpcy5pdGVtVm9pSG9hU2VuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJpdGVtX3dyb25nXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNTdGVwID0gMlxyXG4gICAgICAgIHRoaXMuY291bnRTdGVwKytcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDAuNylcclxuXHJcbiAgICAgICAgdGhpcy5hcnJCdG5bMV0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLml0ZW1Wb2lIb2FTZW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbVZvaUhvYVNlbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMud2F0ZXIsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtVm9pSG9hU2VuLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3Mubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuXHJcbiAgICAgICAgfSwgMC42KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MSwgZmFsc2UsIDAuNylcclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuY2hlY2tFbmQoKVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNoZWNrSGluZEdhbWUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jaGVja0hpbmRHYW1lLCA0KVxyXG4gICAgfVxyXG4gICAgYnRuX3NheXRvYygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAhIC0gMikge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXcm9uZywgZmFsc2UsIDAuNSlcclxuICAgICAgICAgICAgdGhpcy5pdGVtTWF5U2F5LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJpdGVtX3dyb25nXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzU3RlcCA9IDNcclxuICAgICAgICB0aGlzLmNvdW50U3RlcCsrXHJcbiAgICAgICAgdGhpcy5hcnJCdG5bMl0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDAuNylcclxuXHJcbiAgICAgICAgdGhpcy54YWJvbmcyLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtTWF5U2F5LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLml0ZW1NYXlTYXkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmRyeWVyLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbU1heVNheS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJEcmVzc01hbmFnZXIuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3Mubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1NYXlTYXkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgfSwgMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhckRyZXNzTWFuYWdlci5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyRHJlc3NNYW5hZ2VyLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIH0sIDIuMylcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGVja0hpbmRHYW1lKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tIaW5kR2FtZSwgNClcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0VuZCgpXHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tIaW5kR2FtZSgpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmZpbmRIaW5kKClcclxuICAgICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuW2NoZWNrXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmluZEhpbmQoKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gbnVsbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyckJ0bltpXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGVja1xyXG5cclxuICAgIH1cclxuICAgIGNoZWNrRW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50U3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVN0ZXAzKClcclxuICAgICAgICAgICAgfSwgMi42KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVTdGVwMygpIHtcclxuICAgICAgICAvLyB0aGlzLnNjZW5lMi56SW5kZXggPSAzXHJcbiAgICAgICAgdGhpcy5zY2VuZTIuc2NhbGUgPSAyXHJcbiAgICAgICAgdGhpcy5zY2VuZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRyYW5zY3JlZW4sIGZhbHNlLCAwLjUpXHJcblxyXG4gICAgICAgIHRoaXMuY2hhcjIubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmlzSXBhZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNjZW5lMikudG8oMC41LCB7IHNjYWxlOiAxLCBwb3NpdGlvbjogY2MudjMoMTAwLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc2NlbmUyKS50bygwLjUsIHsgc2NhbGU6IDAuNzUsIHBvc2l0aW9uOiBjYy52MygxMDAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUzLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjMubm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MiwgZmFsc2UsIDAuNSlcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhcjMubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNDU2LCAtMjQzKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcjMuc2V0QW5pbWF0aW9uKDAsIFwiQW5ncnlcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDAuNSlcclxuXHJcblxyXG4gICAgfVxyXG4gICAgaXNTaG93RW5kID0gZmFsc2VcclxuICAgIG9uRW5kR2FtZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5oaW5kQ3VvaS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucGhhb2hvYS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkMC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvd0VuZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5mYWlsVUkuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTG9zZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAxLjYpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgICAgICB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmNvaW4udG9TdHJpbmcoKVxyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1Nob3dFbmQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZDAyLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2hvd0VuZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQwMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0lwYWQgPSBmYWxzZVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjA1XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDAuNyA6IDFcclxuICAgICAgICAvLyB0aGlzLmVuZENhcmQwLnNjYWxlID0gKGxvZ2ljKSA/IDAuNyA6IDFcclxuXHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNiA6IDAuNFxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IChsb2dpYykgPyAxIDogMS41XHJcbiAgICAgICAgdGhpcy5saXN0Q2FyZC5zY2FsZSA9IChsb2dpYykgPyAxIDogMS40XHJcbiAgICAgICAgdGhpcy5saXN0Q2FyZDIuc2NhbGUgPSAobG9naWMpID8gMSA6IDEuNFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZDAucG9zaXRpb24gPSAobG9naWMpID8gY2MudjMoMCwgMCkgOiBjYy52MygwLCAzMDApXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwMSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gKGxvZ2ljKSA/IGNjLnYzKDAsIDApIDogY2MudjMoMCwgLTMwMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNJcGFkID0gZmFsc2VcclxuICAgICAgICAvLyB0aGlzLnNjZW5lMi5zY2FsZSA9IDFcclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMTAwKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAyLjVcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSXBhZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NlbmUyLnNjYWxlPTAuNVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuNlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcGFkXCIpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjZW5lMi5zY2FsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0zMClcclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC45NVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=