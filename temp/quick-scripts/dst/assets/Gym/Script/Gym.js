
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Gym/Script/Gym.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'acb91p4KBRCt4hVStYW/y/D', 'Gym');
// Gym/Script/Gym.ts

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
globalThis.gold = 100;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.npc = null;
        _this.npc2 = null;
        _this.listCusNode = null;
        _this.listPlacePos = null;
        _this.listCrunch = null;
        _this.boxing1 = null;
        _this.boxing2 = null;
        _this.soundBG = null;
        _this.soundShowPop = null;
        _this.soundClick = null;
        _this.soundCoin = null;
        _this.soundConfirm = null;
        _this.soundWin = null;
        _this.soundlose = null;
        _this.soundThink = null;
        _this.soundWrong = null;
        _this.game = null;
        _this.guildUpgrade = null;
        _this.guildUpgrade2 = null;
        _this.phaohoa = null;
        _this.linkToStore = null;
        _this.listE = null;
        _this.lbCoin = null;
        _this.dayTa1 = null;
        _this.fillBar = null;
        _this.endCard = null;
        _this.coinBar = null;
        _this.logo = null;
        _this.listTaDon = [];
        _this.listTaTo = [];
        _this.listItem = null;
        _this.listKhan = null;
        _this.listNuoc = null;
        _this.giaTaNho = null;
        _this.giaTaLon = null;
        _this.imgtaDo = null;
        _this.charTut1 = null;
        _this.charTut2 = null;
        _this.lbGuild = null;
        _this.tuNuoc = null;
        _this.tuKhan = null;
        _this.bartender1 = null;
        _this.tutBoxing = null;
        _this.listCus2 = null;
        _this.listItem2 = null;
        _this.mayDayTa = null;
        _this.mayGapBung = null;
        _this.mayDayTa2 = null;
        _this.arrPosCus = [];
        _this.arrCus = [];
        _this.arrCrunch = [];
        _this.isHind = false;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.isFristClick = false;
        _this.isTargetCus = null;
        _this.isCountOut = 0;
        _this.isCountWorkEnd = 0;
        _this.isCountTaNho = 0;
        _this.isCountTaTo = 0;
        _this.isCountCus = 0;
        _this.isCountKhan = 0;
        _this.isCountNuoc = 2;
        _this.isFirstItem = false;
        _this.isMoveCus2 = false;
        _this.isMoveCus3 = false;
        _this.isCloseTut = false;
        _this.isCountAction = 0;
        _this.isCus = 0;
        _this.isCountStep = 0;
        _this.isEndgame = false;
        _this.dem1 = 0;
        _this.dem2 = 0;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBG, true, 0.5);
        // this.scheduleOnce(() => {
        //     this.npc.active = true
        // }, 1)
        this.camera.node.position = cc.v3(250, -216);
        for (var i = 0; i < this.listCusNode.childrenCount; i++) {
            this.arrCus.push(this.listCusNode.children[i]);
        }
        for (var i = 0; i < this.listPlacePos.childrenCount; i++) {
            this.arrPosCus.push(this.listPlacePos.children[i].position);
        }
        for (var i = 0; i < this.listCrunch.childrenCount; i++) {
            this.arrCrunch.push(this.listCrunch.children[i]);
        }
        this.scheduleOnce(function () {
            _this.camera.node.getComponent(cc.Animation).play();
            _this.arrCus[0].getComponent("cusGym").moveToWait();
            for (var i = 1; i < _this.arrCus.length; i++) {
                _this.arrCus[i].getComponent("cusGym").move(_this.arrPosCus[i - 1], 1);
            }
            _this.isTargetCus = _this.arrCus[0];
        }, 0.5);
        this.scheduleOnce(function () {
            _this.npc.active = true;
        }, 3);
    };
    NewClass.prototype.showMision2 = function () {
        var _this = this;
        var char = this.mayGapBung.getChildByName("char");
        var charComp = char.getComponent("cusGym");
        charComp.ngoiTho();
        char.position = cc.v3(-14, -10);
        this.scheduleOnce(function () {
            charComp.showPop();
            _this.tuNuoc.children[0].active = true;
            _this.tuNuoc.getChildByName("hand").active = true;
            _this.tuNuoc.getComponent(cc.Button).enabled = true;
        }, 0.3);
    };
    NewClass.prototype.cusOut = function (node, value) {
        if (node.parent.name == "mayGapBung") {
            node.getComponent("cusGym").moveOut2();
        }
        else {
            node.getComponent("cusGym").moveOut();
        }
        if (value == true) {
            this.isCountOut++;
        }
        if (node.name == "CusBoxing") {
            this.tutBoxing.active = false;
        }
        if (this.isCountOut == 1 && this.arrCus[0].active == true) {
            this.moveCus2(false);
        }
        else if (this.isCountOut == 1 && this.mayGapBung.getChildByName("char").active == true) {
            this.moveCus3();
        }
        else if (this.isCountOut == 1 && this.arrCus[2].active == true) {
            // this.moveCus3()
            cc.tween(this.camera.node).to(0.5, { position: cc.v3(-100, 100) }).start();
            this.listCus2.active = true;
            for (var _i = 0, _a = this.listCus2.children; _i < _a.length; _i++) {
                var child = _a[_i];
                // child.getComponent("cusGym").happy()
                child.getComponent("cusGym").countDown();
            }
            this.listItem2.active = true;
            for (var _b = 0, _c = this.listItem2.children; _b < _c.length; _b++) {
                var child = _c[_b];
                child.children[0].active = true;
            }
            this.tutBoxing.getComponent(cc.Button).enabled = false;
        }
        if (this.isCountOut == 2) {
            this.onEndgame(false);
        }
    };
    NewClass.prototype.btn_workEnd = function (event, value) {
        var _this = this;
        event.currentTarget.getComponent(cc.Button).enabled = false;
        var char = null;
        if (value == "1") {
            char = this.listCus2.children[1];
            char.getComponent("cusGym").walk(1.2, cc.v3(-179, 10));
            this.scheduleOnce(function () {
                char.active = false;
                _this.mayGapBung.children[1].active = true;
                _this.mayGapBung.getChildByName("char2").active = true;
                _this.mayGapBung.getChildByName("char2").getComponent("cusGym").gapBung();
                _this.mayGapBung.getChildByName("char2").getChildByName("notiBonusCoin2").active = true;
                globalThis.gold += 50;
            }, 1.2);
        }
        else if (value == "2") {
            char = this.listCus2.children[0];
            char.getComponent("cusGym").walk(2, cc.v3(-402, -217));
            this.scheduleOnce(function () {
                char.active = false;
                _this.mayDayTa2.getChildByName("char2").active = true;
                _this.mayDayTa2.getChildByName("char2").getComponent("cusGym").dayTa();
                // this.dayTa1.getChildByName("char").position = cc.v3(1, -16)
                _this.mayDayTa2.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                _this.mayDayTa2.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                _this.mayDayTa2.getChildByName("char2").getChildByName("notiBonusCoin2").active = true;
                globalThis.gold += 50;
            }, 2);
        }
        else if (value == "3") {
            char = this.listCus2.children[2];
            char.getComponent("cusGym").walk(3, cc.v3(-675, -144));
            this.scheduleOnce(function () {
                char.active = false;
                _this.boxing2.getChildByName("char2").active = true;
                _this.boxing2.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                _this.boxing2.getChildByName("char2").getChildByName("notiBonusCoin2").active = true;
                globalThis.gold += 50;
                // this.boxing2.getChildByName("char2").getComponent("cusGym").boxing();
            }, 3);
        }
        this.isCountWorkEnd++;
        if (this.isCountWorkEnd == 3) {
            cc.tween(this.camera.node).by(1, { position: cc.v3(-150, 0) }).start();
            this.scheduleOnce(function () {
                _this.onEndgame(true);
            }, 3.2);
        }
        // console.log("click pop")
    };
    NewClass.prototype.checkItem = function (item, posTouch) {
        var itemComp = item.getComponent("itemGym");
        cc.audioEngine.play(this.soundClick, false, 1);
        this.isTargetCus.getChildByName("pop").active = false;
        if (!this.isFristClick) {
            this.isFristClick = true;
            this.giaTaNho.children[0].active = false;
            // this.scheduleOnce(() => {
            this.arrCus[0].getComponent("cusGym").countDown();
            this.npc2.active = false;
            // }, 0.8)
        }
        // if (itemComp.tag == 0) {
        //     let itemTarget = this.listTaDon[this.isCountTaNho]
        //     this.isCountTaNho++
        // }
        if (item.getChildByName("hand")) {
            item.getChildByName("hand").active = false;
        }
        var target = null;
        // let hind=null;
        switch (itemComp.tag) {
            case 0: //ta nho
                target = this.giaTaNho;
                break;
            case 1:
                target = this.giaTaLon;
                break;
            case 2:
                target = this.tuKhan;
                break;
            case 3:
                target = this.tuNuoc;
                break;
        }
        if (target) {
            var pos = target.parent.convertToWorldSpaceAR(target.position);
            target.getChildByName("hind").active = false;
            pos = item.parent.convertToNodeSpaceAR(pos);
            var mag = 100;
            console.log(item.position.sub(pos).mag());
            if (item.position.sub(pos).mag() < 100) {
                item.active = false;
                var itemTarget = null;
                switch (itemComp.tag) {
                    case 0: //ta nho
                        itemTarget = this.listTaDon[this.isCountTaNho];
                        if (itemComp.colorG == 1) {
                            itemTarget.children[1].getComponent(cc.Sprite).spriteFrame = this.imgtaDo;
                        }
                        this.isCountTaNho++;
                        break;
                    case 1:
                        itemTarget = this.listTaTo[this.isCountTaTo];
                        this.isCountTaTo++;
                        break;
                    case 2:
                        itemTarget = this.listKhan.children[this.isCountKhan];
                        this.isCountKhan++;
                        break;
                    case 3:
                        itemTarget = this.listNuoc.children[this.isCountNuoc];
                        this.isCountNuoc++;
                        console.log("isCountNuoc", this.isCountNuoc);
                        break;
                }
                if (itemTarget) {
                    itemTarget.active = true;
                    cc.audioEngine.play(this.soundCoin, false, 1);
                }
                this.checkStep();
                if (this.isFirstItem == false) {
                    this.isFirstItem = true;
                    for (var _i = 0, _a = this.listItem.children; _i < _a.length; _i++) {
                        var child = _a[_i];
                        child.children[0].active = true;
                    }
                }
                return true;
            }
        }
        return false;
    };
    NewClass.prototype.checkStep = function () {
        var _this = this;
        this.isCountCus++;
        if (this.isCountCus == 7) {
            this.isTargetCus.getComponent("cusGym").happy();
            this.isTargetCus.getComponent("cusGym").smile();
            globalThis.gold += 10;
            this.scheduleOnce(function () {
                _this.moveCus2(true);
            }, 1.5);
        }
        if (this.isCountCus == 13) {
            this.showMissionEnd();
        }
        // if (this.isCountCus == 11) {
        //     for (let child of this.listCus2.children) {
        //         child.getComponent("cusGym").happy()
        //         child.getComponent("cusGym").isSuccess = true
        //         // child.getComponent("cusGym").countDown()
        //     }
        //     this.onEndgame(true)
        // }
    };
    NewClass.prototype.showMissionEnd = function () {
        for (var _i = 0, _a = this.listCus2.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.getComponent("cusGym").moveByEnd();
        }
        // this.onEndgame(true);
    };
    NewClass.prototype.moveCus2 = function (value) {
        var _this = this;
        if (this.isMoveCus2)
            return;
        this.isMoveCus2 = true;
        if (value == true) {
            var finalPos = cc.v3(-297, -89);
            cc.tween(this.camera.node).to(1.2, { position: cc.v3(-479, 30) }).start();
            this.isTargetCus.getComponent("cusGym").move3(finalPos, 2);
            this.scheduleOnce(function () {
                globalThis.gold += 50;
                _this.isTargetCus.active = false;
                _this.mayDayTa.children[0].active = true;
                _this.mayDayTa.getChildByName("char").getChildByName("notiBonusCoin").active = true;
                _this.mayDayTa.getChildByName("char").getComponent("cusGym").dayTa();
                _this.mayDayTa.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                _this.mayDayTa.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true);
            }, 2);
        }
        // cc.tween(this.camera.node).to(0.8, { position: cc.v3(-20, 130) }).to(0.8, { position: cc.v3(-220, 130) }).start()
        // this.arrCus[1].getComponent("cusGym").moveToWait2()
        this.scheduleOnce(function () {
            // this.arrCus[1].getChildByName("pop").active = true
            // this.arrCus[1].getComponent("cusGym").countDown();
            // this.tuNuoc.children[0].active = true
            // this.tuNuoc.getChildByName("hand").active = true;
            // this.tuNuoc.getComponent(cc.Button).enabled = 
            _this.showMision2();
        }, 1.5);
    };
    NewClass.prototype.moveCus3 = function () {
        if (this.isMoveCus3)
            return;
        this.isMoveCus3 = true;
        this.tuNuoc.children[0].active = false;
        this.tuNuoc.getChildByName("hand").active = false;
        this.tuNuoc.getComponent(cc.Button).enabled = false;
        cc.tween(this.camera.node).to(1, { position: cc.v3(-20, 130) }).to(1, { position: cc.v3(-500, 0) }).start();
        this.arrCus[2].getComponent("cusGym").moveToWait3();
    };
    NewClass.prototype.btn_tuNuoc = function (event) {
        var _this = this;
        event.currentTarget.getComponent(cc.Button).enabled = false;
        this.tuNuoc.children[0].active = false;
        this.tuNuoc.getChildByName("hand").active = false;
        this.bartender1.getComponent("pt").moveGiveWater();
        var char = this.mayGapBung.getChildByName("char");
        var charComp = char.getComponent("cusGym");
        this.isCountNuoc--;
        this.listNuoc.children[this.isCountNuoc].active = false;
        // this.isCountOut--;
        this.scheduleOnce(function () {
            char.position = cc.v3(-21.5, -60);
            charComp.pop.active = true;
            charComp.happy();
            charComp.smile2();
        }, 1.5);
        this.scheduleOnce(function () {
            globalThis.gold += 50;
            _this.bartender1.getComponent("pt").moveBack();
        }, 1.7);
        this.scheduleOnce(function () {
            _this.cusOut(char, false);
        }, 2.3);
        // this.scheduleOnce(() => {
        //     this.arrCus[1].active = false;
        //     this.charTut2.active = true;
        //     this.charTut2.getComponent("cusGym").gapBung()
        // }, 6.2)
        this.scheduleOnce(function () {
            cc.tween(_this.camera.node).to(1, { position: cc.v3(-20, 130) }).to(1, { position: cc.v3(-500, 0) }).start();
            _this.arrCus[2].getComponent("cusGym").moveToWait3();
        }, 3);
        // this.scheduleOnce(())
    };
    NewClass.prototype.showMissionBoxing = function () {
        this.tutBoxing.children[0].active = true;
        this.tutBoxing.getComponent(cc.Button).enabled = true;
        this.tutBoxing.getChildByName("hand").active = true;
    };
    NewClass.prototype.btn_boxing = function (event) {
        var _this = this;
        event.currentTarget.getComponent(cc.Button).enabled = false;
        cc.tween(this.camera.node).to(0.6, { position: cc.v3(-600, -50) }).start();
        this.tutBoxing.active = false;
        this.tutBoxing.children[0].active = false;
        this.arrCus[2].getComponent("cusGym").happy();
        this.arrCus[2].getComponent("cusGym").smile();
        cc.audioEngine.play(this.soundCoin, false, 1);
        this.arrCus[2].getComponent("cusGym").move3(cc.v3(-650, -154), 2);
        this.scheduleOnce(function () {
            _this.arrCus[2].getComponent("cusGym").boxing();
            _this.boxing2.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
        }, 2.1);
        this.scheduleOnce(function () {
            cc.tween(_this.camera.node).to(0.5, { position: cc.v3(-180, 100) }).start();
            _this.listCus2.active = true;
            for (var _i = 0, _a = _this.listCus2.children; _i < _a.length; _i++) {
                var child = _a[_i];
                // child.getComponent("cusGym").happy()
                child.getComponent("cusGym").countDown();
            }
            _this.listItem2.active = true;
            for (var _b = 0, _c = _this.listItem2.children; _b < _c.length; _b++) {
                var child = _c[_b];
                child.children[0].active = true;
            }
            globalThis.gold += 50;
        }, 3.5);
        this.scheduleOnce(function () {
            _this.arrCus[2].active = false;
            _this.boxing2.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
        }, 5);
    };
    NewClass.prototype.spawFistCustomer = function () {
        var _this = this;
        var arr = [cc.v3(438, -159), cc.v3(577, -256)];
        for (var i = 0; i < this.arrCus.length; i++) {
            var cus = this.arrCus[i];
            cus.getComponent("cusGym").move(this.arrPosCus[i], 2.5);
        }
        this.scheduleOnce(function () {
            var _loop_1 = function (j) {
                var cus = _this.arrCus[j];
                cus.getComponent("cusGym").move(arr[j], 1 + 1 * j);
                _this.scheduleOnce(function () {
                    cus.getComponent("cusGym").sit();
                    if (j == 0) {
                        cus.getComponent("cusGym").showPop();
                        cc.audioEngine.play(_this.soundShowPop, false, 1);
                    }
                }, 1.1 + 1 * j);
            };
            for (var j = 0; j < 2; j++) {
                _loop_1(j);
            }
            for (var j = 2; j < _this.arrCus.length; j++) {
                var cus = _this.arrCus[j];
                cus.getComponent("cusGym").move(_this.arrPosCus[j - 2], 1.6);
            }
        }, 2.5);
        this.scheduleOnce(function () {
            _this.npc2.active = true;
            //         this.npc.active = false
            _this.listItem.children[5].getChildByName("hand").active = true;
            _this.listItem.children[5].getComponent(cc.Button).enabled = true;
            _this.giaTaNho.children[0].active = true;
            _this.listItem.children[5].children[0].active = true;
        }, 4);
    };
    NewClass.prototype.btn_closeTut = function () {
        var _this = this;
        console.log("click");
        if (this.isCloseTut)
            return;
        this.isCloseTut = true;
        cc.tween(this.npc).by(0.3, { opacity: -255, position: cc.v3(0, -80) }).call(function () {
            _this.npc.active = false;
            _this.listItem.children[5].getChildByName("hand").active = true;
            // this.listItem.children[5].getComponent(cc.Button).enabled = true;
            _this.giaTaNho.children[0].active = true;
            _this.listItem.children[5].children[0].active = true;
            _this.npc2.active = true;
        }).start();
    };
    NewClass.prototype.doCus = function (tag) {
        var _this = this;
        cc.audioEngine.play(this.soundClick, false, 1);
        cc.tween(this.npc2).by(0.2, { opacity: -255, position: cc.v3(0, -80) }).call(function () {
            _this.npc.active = false;
        }).start();
        this.moveCus(tag);
    };
    NewClass.prototype.moveCus = function (value) {
        var _this = this;
        cc.audioEngine.play(this.soundCoin, false, 1);
        if (value == 1) {
            var char_1 = this.arrCrunch[0].getChildByName("char");
            char_1.active = true;
            this.arrCus[0].active = false;
            char_1.getChildByName("notiBonusCoin").active = true;
            globalThis.gold += 2;
            this.scheduleOnce(function () {
                char_1.getComponent("cusGym").gapBung();
                char_1.position = cc.v3(1, -16);
                _this.arrCrunch[0].children[0].active = false;
                _this.arrCrunch[0].children[1].active = true;
            }, 0.5);
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundShowPop, false, 1);
                for (var i = 1; i < 4; i++) {
                    var pop = _this.arrCus[i].getChildByName("pop");
                    pop.getComponent(cc.Button).enabled = true;
                    pop.children[0].active = true;
                    pop.active = true;
                    if (i != 1) {
                        _this.arrCus[0].getComponent("cusGym").tucGian();
                    }
                }
                _this.scheduleOnce(function () {
                    _this.onHind();
                }, 3);
            }, 1.4);
        }
        else if (value == 2) {
            this.arrCus[1].active = false;
            this.dayTa1.getChildByName("char").active = true;
            var char_2 = this.arrCrunch[0].getChildByName("char");
            char_2.active = true;
            this.arrCus[0].active = false;
            this.dayTa1.getChildByName("char").getChildByName("notiBonusCoin").active = true;
            char_2.getChildByName("notiBonusCoin").active = true;
            globalThis.gold += 2;
            this.scheduleOnce(function () {
                _this.dayTa1.getChildByName("char").getComponent("cusGym").dayTa();
                // this.dayTa1.getChildByName("char").position = cc.v3(1, -16)
                _this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                _this.dayTa1.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                char_2.getComponent("cusGym").gapBung();
                char_2.position = cc.v3(1, -16);
                _this.arrCrunch[0].children[0].active = false;
                _this.arrCrunch[0].children[1].active = true;
            }, 0.5);
        }
        else if (value == 3) {
            this.boxing1.children[0].getChildByName("notiBonusCoin").active = true;
            globalThis.gold += 2;
            this.arrCus[2].active = false;
            this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
            this.boxing1.children[0].active = true;
        }
        else if (value == 4) {
            this.boxing2.children[0].getChildByName("notiBonusCoin").active = true;
            globalThis.gold += 2;
            this.arrCus[3].active = false;
            this.boxing2.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
            this.boxing2.children[0].active = true;
        }
        this.isCountAction++;
        if (this.isCountAction == 4) {
            this.scheduleOnce(function () {
                _this.moveCame1();
            }, 1);
        }
        if (value != 1) {
            this.isHind = true;
        }
    };
    NewClass.prototype.onHind = function () {
        var _this = this;
        var index = 1;
        this.schedule(function () {
            // tắt tất cả trước
            for (var i = 1; i < _this.arrCus.length; i++) {
                var pop_1 = _this.arrCus[i].getChildByName("pop");
                var hand_1 = pop_1.getChildByName("hand");
                hand_1.active = false;
            }
            // bật cái hiện tại
            var pop = _this.arrCus[index].getChildByName("pop");
            var hand = pop.getChildByName("hand");
            hand.active = true;
            index++;
            if (index >= _this.arrCus.length) {
                index = 1; // quay lại từ đầu
            }
        }, 0.5);
    };
    NewClass.prototype.moveCame1 = function () {
        var _this = this;
        cc.tween(this.game).to(0.5, { scale: 2.3 }).start();
        // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
        cc.tween(this.game).to(0.5, { position: cc.v3(200, -550) }).start();
        this.scheduleOnce(function () {
            _this.guildUpgrade.active = true;
        }, 0.5);
        this.isCus = 0;
    };
    NewClass.prototype.update = function (dt) {
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    };
    NewClass.prototype.btn_upgrade = function () {
        cc.audioEngine.play(this.soundConfirm, false, 1);
        this.isCountStep++;
        if (this.isCountStep < 5) {
            this.fillBar.fillRange = this.isCountStep * 0.25;
            // this.listE.children[this.isCountStep - 1].active = true
        }
        var btn = this.guildUpgrade.children[2].getChildByName("Button");
        btn.active = true;
        btn.position = cc.v3(60 * this.isCountStep, -17.93);
        if (this.isCus == 0) {
            var char_3 = this.listCrunch.children[0].getChildByName("char");
            char_3.getChildByName("vfx").getComponent(cc.Animation).play();
            char_3.getComponent(cc.Animation).play();
            if (this.isCountStep == 5) {
                cc.audioEngine.play(this.soundCoin, false, 1);
                char_3.getChildByName("notiBonusCoin2").active = true;
                char_3.getComponent("cusGym").happy();
                char_3.position = cc.v3(-67, -50);
                this.guildUpgrade.active = false;
                this.move4();
                globalThis.gold += 200;
                this.phaohoa.getComponent(cc.Animation).play();
                this.scheduleOnce(function () {
                    cc.tween(char_3).to(0.3, { opacity: 0 }).start();
                }, 1);
            }
        }
        else if (this.isCus == 1) {
            var char_4 = this.boxing1.children[0];
            char_4.getChildByName("vfx").getComponent(cc.Animation).play();
            if (this.isCountStep == 5) {
                cc.audioEngine.play(this.soundCoin, false, 1);
                globalThis.gold += 200;
                char_4.getChildByName("notiBonusCoin2").active = true;
                char_4.getComponent("cusGym").happy();
                this.guildUpgrade.active = false;
                // this.move4()
                this.phaohoa.getComponent(cc.Animation).play();
                this.scheduleOnce(function () {
                    cc.tween(char_4).to(0.3, { opacity: 0 }).start();
                }, 1);
            }
            if (this.isCountStep == 4) {
                this.linkToStore.active = true;
            }
        }
        else if (this.isCus == 2) {
            var char = this.boxing2.children[0];
            char.getChildByName("vfx").getComponent(cc.Animation).play();
            // if (this.isCountStep == 2) {
            //     this.linkToStore.active = true
            // }
        }
    };
    NewClass.prototype.onEndgame = function (value) {
        var _this = this;
        if (this.isEndgame == true) {
            return;
        }
        this.isEndgame = true;
        if (value == true) {
            cc.audioEngine.play(this.soundWin, false, 1);
        }
        else {
            cc.audioEngine.play(this.soundlose, false, 1);
            this.endCard.getChildByName("New Label").active = true;
            this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundThink, false, 1);
            }, 0.5);
        }
        this.endCard.active = true;
        this.linkToStore.active = true;
    };
    NewClass.prototype.move2 = function () {
        var _this = this;
        this.scheduleOnce(function () {
            cc.tween(_this.game).to(0.5, { scale: 1 }).start();
            // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
            cc.tween(_this.game).to(0.5, { position: cc.v3(0, 0) }).start();
            _this.isCus = 1;
            _this.isCountStep = 0;
            _this.fillBar.fillRange = 0;
        }, 1);
        this.scheduleOnce(function () {
            _this.move3();
        }, 1.7);
    };
    NewClass.prototype.move3 = function () {
        var _this = this;
        cc.tween(this.game).to(0.5, { scale: 2.7 }).start();
        // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
        cc.tween(this.game).to(0.5, { position: cc.v3(-1973, -120) }).start();
        this.scheduleOnce(function () {
            _this.guildUpgrade.active = true;
        }, 0.5);
    };
    NewClass.prototype.move4 = function () {
        var _this = this;
        this.scheduleOnce(function () {
            cc.tween(_this.game).to(0.5, { scale: 1 }).start();
            // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
            cc.tween(_this.game).to(0.5, { position: cc.v3(0, 0) }).start();
            _this.isCus = 2;
            _this.isCountStep = 0;
            _this.fillBar.fillRange = 0;
        }, 1);
        this.scheduleOnce(function () {
            _this.move5();
        }, 1.7);
    };
    NewClass.prototype.move5 = function () {
        var _this = this;
        cc.tween(this.game).to(1, { scale: 1.7 }).start();
        // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
        cc.tween(this.game).to(1, { position: cc.v3(1100, 100) }).start();
        // let text = this.guildUpgrade.getChildByName("New Label")
        // text.getComponent(cc.Label).string = "Last one! Finish strong!"
        this.scheduleOnce(function () {
            _this.guildUpgrade2.active = true;
        }, 0.5);
    };
    NewClass.prototype.btn_upgrade2 = function (event, value) {
        var _this = this;
        cc.audioEngine.play(this.soundConfirm, false, 1);
        if (value == "1") {
            var fill = this.guildUpgrade2.getChildByName("bgTrain2").children[1];
            var btn = this.guildUpgrade2.getChildByName("bgTrain2").getChildByName("Button");
            var char_5 = this.dayTa1.children[0];
            char_5.getComponent(cc.Animation).play();
            char_5.getChildByName("vfx").getComponent(cc.Animation).play();
            this.dem1++;
            fill.getComponent(cc.Sprite).fillRange = this.dem1 * 0.2;
            btn.active = true;
            btn.position = cc.v3(50 * this.dem1, -17.93);
            if (this.dem1 == 5) {
                event.currentTarget.active = false;
                cc.audioEngine.play(this.soundCoin, false, 1);
                char_5.getChildByName("notiBonusCoin2").active = true;
                char_5.getComponent("cusGym").happy();
                char_5.position = cc.v3(-81, -45);
                globalThis.gold += 200;
                this.phaohoa.getComponent(cc.Animation).play();
                this.scheduleOnce(function () {
                    cc.tween(char_5).to(0.3, { opacity: 0 }).start();
                }, 1);
            }
        }
        else {
            var fill = this.guildUpgrade2.getChildByName("bgTrain").children[1];
            var char_6 = this.boxing2.children[0];
            var btn = this.guildUpgrade2.getChildByName("bgTrain").getChildByName("Button");
            char_6.getComponent(cc.Animation).play();
            char_6.getChildByName("vfx").getComponent(cc.Animation).play();
            this.dem2++;
            btn.active = true;
            btn.position = cc.v3(50 * this.dem2, -17.93);
            fill.getComponent(cc.Sprite).fillRange = this.dem2 * 0.2;
            if (this.dem2 == 5) {
                event.currentTarget.active = false;
                cc.audioEngine.play(this.soundCoin, false, 1);
                char_6.getChildByName("notiBonusCoin2").active = true;
                char_6.getComponent("cusGym").happy();
                globalThis.gold += 200;
                this.phaohoa.getComponent(cc.Animation).play();
                this.scheduleOnce(function () {
                    cc.tween(char_6).to(0.3, { opacity: 0 }).start();
                }, 1);
            }
        }
        if (this.dem1 == 5 && this.dem2 == 5) {
            cc.tween(this.guildUpgrade2).to(0.26, { opacity: 0 }).call(function () {
                _this.guildUpgrade2.active = false;
            }).start();
            this.scheduleOnce(function () {
                _this.move2();
            }, 0.8);
        }
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1.5;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.guildUpgrade.scale = (logic) ? 2.4 : 1;
        this.guildUpgrade2.scale = (logic) ? 1.6 : 1;
        // this.camera.node.position = cc.v3(0, 0)
        this.lbCoin.string = globalThis.gold.toString();
        this.npc.scale = (logic) ? 1.7 : 1;
        this.npc2.scale = (logic) ? 1.7 : 1;
        this.npc.y = (logic) ? -700 : 0;
        this.npc2.y = (logic) ? -700 : 0;
        this.endCard.scale = (logic) ? 1.5 : 0.7;
        this.logo.scale = (logic) ? 1.5 : 1;
        this.coinBar.scale = (logic) ? 1.5 : 1;
        this.coinBar.getComponent(cc.Widget).top = 77;
        this.logo.getComponent(cc.Widget).top = 48;
        // this.barCoin.y=(logic)?400:470
        // if (logic == true) {
        //     const frameSize = cc.view.getFrameSize();
        //     const width = frameSize.width;
        //     const height = frameSize.height;
        //     // this.camera.node.position = cc.v3(-70, 0)
        //     // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
        //     const aspectRatio = Math.max(width, height) / Math.min(width, height);
        //     // Gần đúng tỷ lệ màn hình iPhone X
        //     const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
        //     const TOLERANCE = 0.05;
        //     const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
        //     this.camera.zoomRatio = 2
        //     // this.camera.node.position = cc.v3(150, 0)
        //     this.phaohoa.scale = (logic) ? 7 : 3
        //     if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
        //         // console.log("check iphonex")
        //         this.coinBar.getComponent(cc.Widget).top = 77 + 30;
        //         this.logo.getComponent(cc.Widget).top = 48 + 30
        //     }
        //     else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
        //         // this.camera.zoomRatio = 1.4
        //         this.guildUpgrade.scale = 1.8
        //         this.npc.y = -400
        //         this.npc2.y = -400
        //     }
        // }
        // else {
        //     const frameSize = cc.view.getFrameSize();
        //     const width = frameSize.width;
        //     const height = frameSize.height;
        //     // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
        //     const aspectRatio = Math.max(width, height) / Math.min(width, height);
        //     // Gần đúng tỷ lệ màn hình iPhone X
        //     const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
        //     const TOLERANCE = 0.05;
        //     const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
        //     if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
        //     }
        //     else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
        //         this.camera.zoomRatio = 1
        //     }
        // }
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            var TALL_PHONE_MIN_RATIO = 2.0; // iPhone X ~2.16, 20:9 Android ~2.22
            this.camera.zoomRatio = 2;
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {
                this.coinBar.getComponent(cc.Widget).top = 77 + 50;
                this.logo.getComponent(cc.Widget).top = 48 + 50;
                if (aspectRatio > 2.2) {
                    // this.camera.zoomRatio = 1.75
                }
                this.npc.y = -800;
                this.npc2.y = -800;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.guildUpgrade.scale = 1.8;
                this.npc.y = -400;
                this.npc2.y = -400;
            }
        }
        else {
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
                this.camera.zoomRatio = 1;
            }
        }
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "npc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "npc2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCusNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listPlacePos", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCrunch", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boxing1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boxing2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBG", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundShowPop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCoin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundConfirm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundlose", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThink", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "game", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guildUpgrade", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guildUpgrade2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaohoa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listE", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dayTa1", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "coinBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listTaDon", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listTaTo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listItem", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKhan", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listNuoc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "giaTaNho", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "giaTaLon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "imgtaDo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "charTut1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "charTut2", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbGuild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tuNuoc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tuKhan", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bartender1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tutBoxing", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCus2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listItem2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mayDayTa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mayGapBung", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mayDayTa2", void 0);
    __decorate([
        property
    ], NewClass.prototype, "arrPosCus", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXEd5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtBQUVyQjtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdnQ0M7UUE5L0JHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsa0JBQVksR0FBWSxJQUFJLENBQUE7UUFFNUIsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFFN0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLFlBQU0sR0FBYSxJQUFJLENBQUE7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixhQUFPLEdBQWMsSUFBSSxDQUFBO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGVBQVMsR0FBYyxFQUFFLENBQUE7UUFFekIsY0FBUSxHQUFjLEVBQUUsQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsYUFBTyxHQUFtQixJQUFJLENBQUE7UUFFOUIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLGFBQU8sR0FBYSxJQUFJLENBQUE7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUd6QixlQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ2QsWUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNYLGVBQVMsR0FBRyxFQUFFLENBQUE7UUFDZCxZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsY0FBUSxHQUFHLDhCQUE4QixDQUFBO1FBQ3pDLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFXLEdBQUcsSUFBSSxDQUFBO1FBK0NsQixnQkFBVSxHQUFHLENBQUMsQ0FBQTtRQTBDZCxvQkFBYyxHQUFHLENBQUMsQ0FBQTtRQXNEbEIsa0JBQVksR0FBRyxDQUFDLENBQUE7UUFDaEIsaUJBQVcsR0FBRyxDQUFDLENBQUE7UUFDZixnQkFBVSxHQUFHLENBQUMsQ0FBQTtRQUNkLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBNEhwQixnQkFBVSxHQUFHLEtBQUssQ0FBQTtRQW1DbEIsZ0JBQVUsR0FBRyxLQUFLLENBQUE7UUFzSWxCLGdCQUFVLEdBQUcsS0FBSyxDQUFBO1FBc0JsQixtQkFBYSxHQUFHLENBQUMsQ0FBQTtRQTRHakIsV0FBSyxHQUFHLENBQUMsQ0FBQTtRQW1CVCxpQkFBVyxHQUFHLENBQUMsQ0FBQTtRQW1FZixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBbUVsQixVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsVUFBSSxHQUFHLENBQUMsQ0FBQTs7SUFnTVosQ0FBQztJQXA1Qkcsd0JBQUssR0FBTDtRQUFBLGlCQStCQztRQTlCRyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksV0FBVyxFQUFFO1lBQzlCLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDNUMsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixRQUFRO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDakQ7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDOUQ7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNuRDtRQUNELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ2xELEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQ2xELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3ZFO1lBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMs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LEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRTFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRTdDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQzlDLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUUxRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUs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UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnZ0M1QjtJQUFELGVBQUM7Q0FoZ0NELEFBZ2dDQyxDQWhnQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBZ2dDakQ7a0JBaGdDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5nbG9iYWxUaGlzLmdvbGQgPSAxMDBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbnBjOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBucGMyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3VzTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFBsYWNlUG9zOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3J1bmNoOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib3hpbmcxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94aW5nMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCRzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENvaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb25maXJtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kbG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRoaW5rOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpbGRVcGdyYWRlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZFVwZ3JhZGUyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvaG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0RTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ29pbjogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRheVRhMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvaW5CYXI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RUYURvbjogY2MuTm9kZVtdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFRhVG86IGNjLk5vZGVbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtoYW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0TnVvYzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2lhVGFOaG86IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnaWFUYUxvbjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGltZ3RhRG86IGNjLlNwcml0ZUZyYW1lID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFyVHV0MTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhclR1dDI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkd1aWxkOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHVOdW9jOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dUtoYW46IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhcnRlbmRlcjE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dEJveGluZzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJdGVtMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWF5RGF5VGE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1heUdhcEJ1bmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1heURheVRhMjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGFyclBvc0N1cyA9IFtdXHJcbiAgICBhcnJDdXMgPSBbXVxyXG4gICAgYXJyQ3J1bmNoID0gW11cclxuICAgIGlzSGluZCA9IGZhbHNlXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgaXNGcmlzdENsaWNrID0gZmFsc2U7XHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCRywgdHJ1ZSwgMC41KVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ucGMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vIH0sIDEpXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDI1MCwgLTIxNilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzTm9kZS5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJQb3NDdXMucHVzaCh0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbltpXS5wb3NpdGlvbilcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDcnVuY2guY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoLnB1c2godGhpcy5saXN0Q3J1bmNoLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5tb3ZlVG9XYWl0KClcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbaV0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmUodGhpcy5hcnJQb3NDdXNbaSAtIDFdLCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMgPSB0aGlzLmFyckN1c1swXTtcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5wYy5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH0sIDMpXHJcblxyXG4gICAgfVxyXG4gICAgc2hvd01pc2lvbjIoKSB7XHJcbiAgICAgICAgbGV0IGNoYXIgPSB0aGlzLm1heUdhcEJ1bmcuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpO1xyXG4gICAgICAgIGxldCBjaGFyQ29tcCA9IGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpO1xyXG4gICAgICAgIGNoYXJDb21wLm5nb2lUaG8oKTtcclxuICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTE0LCAtMTApO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2hhckNvbXAuc2hvd1BvcCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50dU51b2MuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnR1TnVvYy5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50dU51b2MuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuXHJcbiAgICAgICAgfSwgMC4zKTtcclxuICAgIH1cclxuICAgIGlzQ291bnRPdXQgPSAwXHJcbiAgICBjdXNPdXQobm9kZSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAobm9kZS5wYXJlbnQubmFtZSA9PSBcIm1heUdhcEJ1bmdcIikge1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5tb3ZlT3V0MigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5tb3ZlT3V0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvdW50T3V0KytcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub2RlLm5hbWUgPT0gXCJDdXNCb3hpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnR1dEJveGluZy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudE91dCA9PSAxICYmIHRoaXMuYXJyQ3VzWzBdLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUN1czIoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNDb3VudE91dCA9PSAxICYmIHRoaXMubWF5R2FwQnVuZy5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikuYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzMygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNDb3VudE91dCA9PSAxICYmIHRoaXMuYXJyQ3VzWzJdLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubW92ZUN1czMoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKC0xMDAsIDEwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDdXMyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdEN1czIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIC8vIGNoaWxkLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuY291bnREb3duKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdEl0ZW0yLmNoaWxkcmVuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR1dEJveGluZy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudE91dCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRnYW1lKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzQ291bnRXb3JrRW5kID0gMFxyXG4gICAgYnRuX3dvcmtFbmQoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNoYXIgPSBudWxsO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBjaGFyID0gdGhpcy5saXN0Q3VzMi5jaGlsZHJlblsxXTtcclxuICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikud2FsaygxLjIsIGNjLnYzKC0xNzksIDEwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heUdhcEJ1bmcuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF5R2FwQnVuZy5nZXRDaGlsZEJ5TmFtZShcImNoYXIyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heUdhcEJ1bmcuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyMlwiKS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXlHYXBCdW5nLmdldENoaWxkQnlOYW1lKFwiY2hhcjJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDUwXHJcbiAgICAgICAgICAgIH0sIDEuMik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSBcIjJcIikge1xyXG4gICAgICAgICAgICBjaGFyID0gdGhpcy5saXN0Q3VzMi5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikud2FsaygyLCBjYy52MygtNDAyLCAtMjE3KSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heURheVRhMi5nZXRDaGlsZEJ5TmFtZShcImNoYXIyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heURheVRhMi5nZXRDaGlsZEJ5TmFtZShcImNoYXIyXCIpLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5kYXlUYSgpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRheVRhMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikucG9zaXRpb24gPSBjYy52MygxLCAtMTYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heURheVRhMi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXlEYXlUYTIuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMubWF5RGF5VGEyLmdldENoaWxkQnlOYW1lKFwiY2hhcjJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDUwXHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IFwiM1wiKSB7XHJcbiAgICAgICAgICAgIGNoYXIgPSB0aGlzLmxpc3RDdXMyLmNoaWxkcmVuWzJdO1xyXG4gICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS53YWxrKDMsIGNjLnYzKC02NzUsIC0xNDQpKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm94aW5nMi5nZXRDaGlsZEJ5TmFtZShcImNoYXIyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJveGluZzIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYm94aW5nMi5nZXRDaGlsZEJ5TmFtZShcImNoYXIyXCIpLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pbjJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSA1MFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ib3hpbmcyLmdldENoaWxkQnlOYW1lKFwiY2hhcjJcIikuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmJveGluZygpO1xyXG4gICAgICAgICAgICB9LCAzKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzQ291bnRXb3JrRW5kKys7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudFdvcmtFbmQgPT0gMykge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MygtMTUwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbmRnYW1lKHRydWUpXHJcbiAgICAgICAgICAgIH0sIDMuMilcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjbGljayBwb3BcIilcclxuXHJcblxyXG4gICAgfVxyXG4gICAgaXNDb3VudFRhTmhvID0gMFxyXG4gICAgaXNDb3VudFRhVG8gPSAwXHJcbiAgICBpc0NvdW50Q3VzID0gMFxyXG4gICAgaXNDb3VudEtoYW4gPSAwO1xyXG4gICAgaXNDb3VudE51b2MgPSAyO1xyXG4gICAgaXNGaXJzdEl0ZW0gPSBmYWxzZTtcclxuICAgIGNoZWNrSXRlbShpdGVtLCBwb3NUb3VjaCkge1xyXG4gICAgICAgIGxldCBpdGVtQ29tcCA9IGl0ZW0uZ2V0Q29tcG9uZW50KFwiaXRlbUd5bVwiKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0ZyaXN0Q2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZyaXN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdpYVRhTmhvLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmNvdW50RG93bigpO1xyXG4gICAgICAgICAgICB0aGlzLm5wYzIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgLy8gfSwgMC44KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAoaXRlbUNvbXAudGFnID09IDApIHtcclxuICAgICAgICAvLyAgICAgbGV0IGl0ZW1UYXJnZXQgPSB0aGlzLmxpc3RUYURvblt0aGlzLmlzQ291bnRUYU5ob11cclxuICAgICAgICAvLyAgICAgdGhpcy5pc0NvdW50VGFOaG8rK1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikpIHtcclxuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgLy8gbGV0IGhpbmQ9bnVsbDtcclxuICAgICAgICBzd2l0Y2ggKGl0ZW1Db21wLnRhZykge1xyXG4gICAgICAgICAgICBjYXNlIDA6Ly90YSBuaG9cclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuZ2lhVGFOaG9cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5naWFUYUxvblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnR1S2hhblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnR1TnVvY1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0YXJnZXQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwb3MgPSBpdGVtLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIGxldCBtYWcgPSAxMDA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0ucG9zaXRpb24uc3ViKHBvcykubWFnKCkpXHJcbiAgICAgICAgICAgIGlmIChpdGVtLnBvc2l0aW9uLnN1Yihwb3MpLm1hZygpIDwgMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1UYXJnZXQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtQ29tcC50YWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6Ly90YSBuaG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRhcmdldCA9IHRoaXMubGlzdFRhRG9uW3RoaXMuaXNDb3VudFRhTmhvXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbXAuY29sb3JHID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UYXJnZXQuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmltZ3RhRG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ291bnRUYU5obysrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRhcmdldCA9IHRoaXMubGlzdFRhVG9bdGhpcy5pc0NvdW50VGFUb11cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50VGFUbysrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRhcmdldCA9IHRoaXMubGlzdEtoYW4uY2hpbGRyZW5bdGhpcy5pc0NvdW50S2hhbl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50S2hhbisrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRhcmdldCA9IHRoaXMubGlzdE51b2MuY2hpbGRyZW5bdGhpcy5pc0NvdW50TnVvY11cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50TnVvYysrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNDb3VudE51b2NcIiwgdGhpcy5pc0NvdW50TnVvYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UYXJnZXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb2luLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdGVwKClcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRmlyc3RJdGVtID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0SXRlbSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0SXRlbS5jaGlsZHJlbilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0ZXAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvdW50Q3VzKytcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50Q3VzID09IDcpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuaGFwcHkoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLnNtaWxlKClcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDEwXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVDdXMyKHRydWUpXHJcbiAgICAgICAgICAgIH0sIDEuNSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRDdXMgPT0gMTMpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TWlzc2lvbkVuZCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNDb3VudEN1cyA9PSAxMSkge1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDdXMyLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuaGFwcHkoKVxyXG4gICAgICAgIC8vICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmlzU3VjY2VzcyA9IHRydWVcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNoaWxkLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5jb3VudERvd24oKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHRoaXMub25FbmRnYW1lKHRydWUpXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuICAgIHNob3dNaXNzaW9uRW5kKCkge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdEN1czIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmVCeUVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLm9uRW5kZ2FtZSh0cnVlKTtcclxuICAgIH1cclxuICAgIGlzTW92ZUN1czIgPSBmYWxzZVxyXG4gICAgbW92ZUN1czIodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01vdmVDdXMyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmVDdXMyID0gdHJ1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBmaW5hbFBvcyA9IGNjLnYzKC0yOTcsIC04OSk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDEuMiwgeyBwb3NpdGlvbjogY2MudjMoLTQ3OSwgMzApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikubW92ZTMoZmluYWxQb3MsIDIpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSA1MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heURheVRhLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heURheVRhLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKS5nZXRDaGlsZEJ5TmFtZShcIm5vdGlCb251c0NvaW5cIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubWF5RGF5VGEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5kYXlUYSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heURheVRhLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heURheVRhLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKC0yMCwgMTMwKSB9KS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKC0yMjAsIDEzMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vIHRoaXMuYXJyQ3VzWzFdLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5tb3ZlVG9XYWl0MigpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmFyckN1c1sxXS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXJyQ3VzWzFdLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5jb3VudERvd24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMudHVOdW9jLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gdGhpcy50dU51b2MuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudHVOdW9jLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBcclxuICAgICAgICAgICAgdGhpcy5zaG93TWlzaW9uMigpXHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgfVxyXG4gICAgaXNNb3ZlQ3VzMyA9IGZhbHNlXHJcblxyXG4gICAgbW92ZUN1czMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3ZlQ3VzMykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlQ3VzMyA9IHRydWVcclxuICAgICAgICB0aGlzLnR1TnVvYy5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudHVOdW9jLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnR1TnVvYy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMjAsIDEzMCkgfSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTUwMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5tb3ZlVG9XYWl0MygpXHJcbiAgICB9XHJcbiAgICBidG5fdHVOdW9jKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50dU51b2MuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnR1TnVvYy5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYXJ0ZW5kZXIxLmdldENvbXBvbmVudChcInB0XCIpLm1vdmVHaXZlV2F0ZXIoKVxyXG4gICAgICAgIGxldCBjaGFyID0gdGhpcy5tYXlHYXBCdW5nLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKTtcclxuICAgICAgICBsZXQgY2hhckNvbXAgPSBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKTtcclxuICAgICAgICB0aGlzLmlzQ291bnROdW9jLS1cclxuICAgICAgICB0aGlzLmxpc3ROdW9jLmNoaWxkcmVuW3RoaXMuaXNDb3VudE51b2NdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmlzQ291bnRPdXQtLTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygtMjEuNSwgLTYwKVxyXG4gICAgICAgICAgICBjaGFyQ29tcC5wb3AuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2hhckNvbXAuaGFwcHkoKTtcclxuICAgICAgICAgICAgY2hhckNvbXAuc21pbGUyKCk7XHJcblxyXG4gICAgICAgIH0sIDEuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSA1MFxyXG5cclxuICAgICAgICAgICAgdGhpcy5iYXJ0ZW5kZXIxLmdldENvbXBvbmVudChcInB0XCIpLm1vdmVCYWNrKClcclxuXHJcbiAgICAgICAgfSwgMS43KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXNPdXQoY2hhciwgZmFsc2UpXHJcbiAgICAgICAgfSwgMi4zKVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5hcnJDdXNbMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2hhclR1dDIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jaGFyVHV0Mi5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpXHJcblxyXG4gICAgICAgIC8vIH0sIDYuMilcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTIwLCAxMzApIH0pLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC01MDAsIDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmVUb1dhaXQzKClcclxuXHJcblxyXG4gICAgICAgIH0sIDMpXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpKVxyXG4gICAgfVxyXG4gICAgc2hvd01pc3Npb25Cb3hpbmcoKSB7XHJcbiAgICAgICAgdGhpcy50dXRCb3hpbmcuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHV0Qm94aW5nLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50dXRCb3hpbmcuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICB9XHJcbiAgICBidG5fYm94aW5nKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC42LCB7IHBvc2l0aW9uOiBjYy52MygtNjAwLCAtNTApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdGhpcy50dXRCb3hpbmcuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnR1dEJveGluZy5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgdGhpcy5hcnJDdXNbMl0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLnNtaWxlKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5tb3ZlMyhjYy52MygtNjUwLCAtMTU0KSwgMilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5ib3hpbmcoKVxyXG4gICAgICAgICAgICB0aGlzLmJveGluZzIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuXHJcbiAgICAgICAgfSwgMi4xKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtMTgwLCAxMDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5saXN0Q3VzMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDdXMyLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGlsZC5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuaGFwcHkoKVxyXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmNvdW50RG93bigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5saXN0SXRlbTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RJdGVtMi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gNTA7XHJcbiAgICAgICAgfSwgMy41KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuXHJcbiAgICAgICAgfSwgNSlcclxuXHJcblxyXG4gICAgfVxyXG4gICAgc3Bhd0Zpc3RDdXN0b21lcigpIHtcclxuICAgICAgICBsZXQgYXJyID0gW2NjLnYzKDQzOCwgLTE1OSksIGNjLnYzKDU3NywgLTI1NildO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikubW92ZSh0aGlzLmFyclBvc0N1c1tpXSwgMi41KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbal1cclxuICAgICAgICAgICAgICAgIGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikubW92ZShhcnJbal0sIDEgKyAxICogailcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLnNpdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLnNob3dQb3AoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMS4xICsgMSAqIGopXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDI7IGogPCB0aGlzLmFyckN1cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2pdXHJcbiAgICAgICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmUodGhpcy5hcnJQb3NDdXNbaiAtIDJdLCAxLjYpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDIuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubnBjMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5ucGMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5saXN0SXRlbS5jaGlsZHJlbls1XS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0SXRlbS5jaGlsZHJlbls1XS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5naWFUYU5oby5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW0uY2hpbGRyZW5bNV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDQpXHJcbiAgICB9XHJcbiAgICBpc0Nsb3NlVHV0ID0gZmFsc2VcclxuICAgIGJ0bl9jbG9zZVR1dCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDbG9zZVR1dCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNDbG9zZVR1dCA9IHRydWVcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5wYykuYnkoMC4zLCB7IG9wYWNpdHk6IC0yNTUsIHBvc2l0aW9uOiBjYy52MygwLCAtODApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5wYy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtLmNoaWxkcmVuWzVdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RJdGVtLmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdpYVRhTmhvLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saXN0SXRlbS5jaGlsZHJlbls1XS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubnBjMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgIH1cclxuICAgIGRvQ3VzKHRhZykge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5wYzIpLmJ5KDAuMiwgeyBvcGFjaXR5OiAtMjU1LCBwb3NpdGlvbjogY2MudjMoMCwgLTgwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ucGMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5tb3ZlQ3VzKHRhZylcclxuICAgIH1cclxuICAgIGlzQ291bnRBY3Rpb24gPSAwXHJcbiAgICBtb3ZlQ3VzKHZhbHVlKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgaWYgKHZhbHVlID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmFyckNydW5jaFswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2hhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1swXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pblwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wID0gdGhpcy5hcnJDdXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBwb3AuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSGluZCgpXHJcbiAgICAgICAgICAgICAgICB9LCAzKVxyXG4gICAgICAgICAgICB9LCAxLjQpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuYXJyQ3J1bmNoWzBdLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjaGFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKS5nZXRDaGlsZEJ5TmFtZShcIm5vdGlCb251c0NvaW5cIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pblwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZGF5VGEoKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpLnBvc2l0aW9uID0gY2MudjMoMSwgLTE2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5VGExLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmJveGluZzEuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDJcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcxLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDJcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbM10uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0NvdW50QWN0aW9uKys7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudEFjdGlvbiA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhbWUxKClcclxuXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNIaW5kID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uSGluZCgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdOG6r3QgdOG6pXQgY+G6oyB0csaw4bubY1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9wID0gdGhpcy5hcnJDdXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAgICAgICAgICAgICBoYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBi4bqtdCBjw6FpIGhp4buHbiB04bqhaVxyXG4gICAgICAgICAgICBsZXQgcG9wID0gdGhpcy5hcnJDdXNbaW5kZXhdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpO1xyXG4gICAgICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAgICAgICAgIGhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLmFyckN1cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMTsgLy8gcXVheSBs4bqhaSB04burIMSR4bqndVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuICAgIGlzQ3VzID0gMFxyXG4gICAgbW92ZUNhbWUxKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAyLjMgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMjAwLCAtNTUwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIHRoaXMuaXNDdXMgPSAwXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0NvdW50U3RlcCA9IDBcclxuICAgIGJ0bl91cGdyYWRlKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbmZpcm0sIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuaXNDb3VudFN0ZXArK1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwIDwgNSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gdGhpcy5pc0NvdW50U3RlcCAqIDAuMjVcclxuICAgICAgICAgICAgLy8gdGhpcy5saXN0RS5jaGlsZHJlblt0aGlzLmlzQ291bnRTdGVwIC0gMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IHRoaXMuZ3VpbGRVcGdyYWRlLmNoaWxkcmVuWzJdLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uXCIpXHJcbiAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYnRuLnBvc2l0aW9uID0gY2MudjMoNjAgKiB0aGlzLmlzQ291bnRTdGVwLCAtMTcuOTMpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDdXMgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMubGlzdENydW5jaC5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDUpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTY3LCAtNTApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZTQoKVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDIwMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5waGFvaG9hLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoYXIpLnRvKDAuMywgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNDdXMgPT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuYm94aW5nMS5jaGlsZHJlblswXVxyXG5cclxuICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDUpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyMDBcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pbjJcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmhhcHB5KClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb3ZlNCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3VudFN0ZXAgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc0N1cyA9PSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdXHJcbiAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5pc0NvdW50U3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzRW5kZ2FtZSA9IGZhbHNlO1xyXG5cclxuICAgIG9uRW5kZ2FtZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kZ2FtZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0VuZGdhbWUgPSB0cnVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kbG9zZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFRoaW5rLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgfSwgMC41KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBtb3ZlMigpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLmlzQ3VzID0gMVxyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnRTdGVwID0gMFxyXG4gICAgICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMFxyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlMygpXHJcbiAgICAgICAgfSwgMS43KVxyXG4gICAgfVxyXG4gICAgbW92ZTMoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5nYW1lKS50bygwLjUsIHsgc2NhbGU6IDIuNyB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtMTk3MywgLTEyMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ndWlsZFVwZ3JhZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgIH1cclxuICAgIG1vdmU0KCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5nYW1lKS50bygwLjUsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMi41IH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuaXNDdXMgPSAyXHJcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudFN0ZXAgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEJhci5maWxsUmFuZ2UgPSAwXHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZTUoKVxyXG4gICAgICAgIH0sIDEuNylcclxuICAgIH1cclxuICAgIG1vdmU1KCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMSwgeyBzY2FsZTogMS43IH0pLnN0YXJ0KClcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMi41IH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5nYW1lKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygxMTAwLCAxMDApIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyBsZXQgdGV4dCA9IHRoaXMuZ3VpbGRVcGdyYWRlLmdldENoaWxkQnlOYW1lKFwiTmV3IExhYmVsXCIpXHJcbiAgICAgICAgLy8gdGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiTGFzdCBvbmUhIEZpbmlzaCBzdHJvbmchXCJcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgfVxyXG4gICAgZGVtMSA9IDA7XHJcbiAgICBkZW0yID0gMFxyXG4gICAgYnRuX3VwZ3JhZGUyKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbmZpcm0sIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBsZXQgZmlsbCA9IHRoaXMuZ3VpbGRVcGdyYWRlMi5nZXRDaGlsZEJ5TmFtZShcImJnVHJhaW4yXCIpLmNoaWxkcmVuWzFdXHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmd1aWxkVXBncmFkZTIuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1RyYWluMlwiKS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvblwiKVxyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuZGF5VGExLmNoaWxkcmVuWzBdXHJcbiAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwidmZ4XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5kZW0xKytcclxuICAgICAgICAgICAgZmlsbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSB0aGlzLmRlbTEgKiAwLjJcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5wb3NpdGlvbiA9IGNjLnYzKDUwICogdGhpcy5kZW0xLCAtMTcuOTMpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlbTEgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcIm5vdGlCb251c0NvaW4yXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmhhcHB5KClcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygtODEsIC00NSlcclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyMDBcclxuICAgICAgICAgICAgICAgIHRoaXMucGhhb2hvYS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjaGFyKS50bygwLjMsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxsID0gdGhpcy5ndWlsZFVwZ3JhZGUyLmdldENoaWxkQnlOYW1lKFwiYmdUcmFpblwiKS5jaGlsZHJlblsxXVxyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuYm94aW5nMi5jaGlsZHJlblswXVxyXG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5ndWlsZFVwZ3JhZGUyLmdldENoaWxkQnlOYW1lKFwiYmdUcmFpblwiKS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvblwiKVxyXG5cclxuICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbTIrK1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLnBvc2l0aW9uID0gY2MudjMoNTAgKiB0aGlzLmRlbTIsIC0xNy45MylcclxuICAgICAgICAgICAgZmlsbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSB0aGlzLmRlbTIgKiAwLjJcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVtMiA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcIm5vdGlCb251c0NvaW4yXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmhhcHB5KClcclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyMDBcclxuICAgICAgICAgICAgICAgIHRoaXMucGhhb2hvYS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjaGFyKS50bygwLjMsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlbTEgPT0gNSAmJiB0aGlzLmRlbTIgPT0gNSkge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmd1aWxkVXBncmFkZTIpLnRvKDAuMjYsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZTIoKVxyXG4gICAgICAgICAgICB9LCAwLjgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjVcclxuXHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ndWlsZFVwZ3JhZGUuc2NhbGUgPSAobG9naWMpID8gMi40IDogMVxyXG4gICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlMi5zY2FsZSA9IChsb2dpYykgPyAxLjYgOiAxXHJcblxyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwKVxyXG4gICAgICAgIHRoaXMubGJDb2luLnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5ucGMuc2NhbGUgPSAobG9naWMpID8gMS43IDogMVxyXG4gICAgICAgIHRoaXMubnBjMi5zY2FsZSA9IChsb2dpYykgPyAxLjcgOiAxXHJcbiAgICAgICAgdGhpcy5ucGMueSA9IChsb2dpYykgPyAtNzAwIDogMFxyXG4gICAgICAgIHRoaXMubnBjMi55ID0gKGxvZ2ljKSA/IC03MDAgOiAwXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuNSA6IDAuN1xyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAxLjUgOiAxXHJcbiAgICAgICAgdGhpcy5jb2luQmFyLnNjYWxlID0gKGxvZ2ljKSA/IDEuNSA6IDE7XHJcbiAgICAgICAgdGhpcy5jb2luQmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDc3O1xyXG4gICAgICAgIHRoaXMubG9nby5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA0OFxyXG4gICAgICAgIC8vIHRoaXMuYmFyQ29pbi55PShsb2dpYyk/NDAwOjQ3MFxyXG4gICAgICAgIC8vIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgIC8vICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC03MCwgMClcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAvLyAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgLy8gICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAvLyAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAvLyAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDJcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDE1MCwgMClcclxuICAgICAgICAvLyAgICAgdGhpcy5waGFvaG9hLnNjYWxlID0gKGxvZ2ljKSA/IDcgOiAzXHJcbiAgICAgICAgLy8gICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb2luQmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDc3ICsgMzA7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNDggKyAzMFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNFxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ndWlsZFVwZ3JhZGUuc2NhbGUgPSAxLjhcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubnBjLnkgPSAtNDAwXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5wYzIueSA9IC00MDBcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAvLyAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgIC8vICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAvLyAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICBjb25zdCBUQUxMX1BIT05FX01JTl9SQVRJTyA9IDIuMDsgICAgICAgIC8vIGlQaG9uZSBYIH4yLjE2LCAyMDo5IEFuZHJvaWQgfjIuMjJcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMlxyXG4gICAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPj0gVEFMTF9QSE9ORV9NSU5fUkFUSU8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29pbkJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA3NyArIDUwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDQ4ICsgNTBcclxuICAgICAgICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA+IDIuMikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDEuNzVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdGhpcy5ucGMueSA9IC04MDBcclxuICAgICAgICAgICAgICAgIHRoaXMubnBjMi55ID0gLTgwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLnNjYWxlID0gMS44XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5wYy55ID0gLTQwMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ucGMyLnkgPSAtNDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDFcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19