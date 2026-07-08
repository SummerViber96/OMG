
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
        // cc.tween(this.camera.node).delay(0.5).to(0.5,{position:cc.v3(0,100)}).start()
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
        // this.scheduleOnce(() => {
        //     cc.tween(this.npc).by(0.2, { opacity: -255, position: cc.v3(0, -80) }).call(() => {
        //         this.npc.active = false
        //         this.listItem.children[5].getChildByName("hand").active = true;
        //         this.listItem.children[5].getComponent(cc.Button).enabled = true;
        //         this.giaTaNho.children[0].active = true
        //         this.listItem.children[5].children[0].active = true
        //         this.npc2.active = true
        //     }).start()
        // }, 5)
        // this.spawFistCustomer()
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
    NewClass.prototype.cusOut = function (node) {
        if (node.parent.name == "mayGapBung") {
            node.getComponent("cusGym").moveOut2();
        }
        else {
            node.getComponent("cusGym").moveOut();
        }
        this.isCountOut++;
        console.log("move out");
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
            }, 2);
        }
        else if (value == "3") {
            char = this.listCus2.children[2];
            char.getComponent("cusGym").walk(3, cc.v3(-675, -144));
            this.scheduleOnce(function () {
                char.active = false;
                _this.boxing2.getChildByName("char2").active = true;
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
    // clickItem(item) {
    //     this.npc2.active = false
    //     if (!this.isFristClick) {
    //         this.isFristClick = true;
    //         this.giaTaNho.children[0].active = false
    //         // this.scheduleOnce(() => {
    //         this.arrCus[0].getComponent("cusGym").countDown();
    //         // }, 0.8)
    //     }
    //     if (item.getChildByName("hand")) {
    //         item.getChildByName("hand").active = false
    //     }
    //     globalThis.gold += 10
    //     item.getChildByName("red").active = false;
    //     let pos = item.parent.convertToWorldSpaceAR(item.position);
    //     pos = this.node.convertToNodeSpaceAR(pos)
    //     let itemComp = item.getComponent("itemGym")
    //     if (itemComp.tag == 0) {
    //         let itemTarget = this.listTaDon[this.isCountTaNho]
    //         this.isCountTaNho++
    //         let posEnd = itemTarget.position;
    //         if (itemComp.colorG == 1) {
    //             itemTarget.children[1].getComponent(cc.Sprite).spriteFrame = this.imgtaDo
    //         }
    //         posEnd = itemTarget.parent.convertToWorldSpaceAR(posEnd);
    //         posEnd = this.node.convertToNodeSpaceAR(posEnd);
    //         let mag = 100;
    //         let midPos = cc.v2((pos.x + posEnd.x) / 2, posEnd.y + mag);
    //         cc.tween(item).bezierTo(0.6, cc.v2(pos.x, pos.y), midPos, cc.v2(posEnd.x, posEnd.y)).call(() => {
    //             item.active = false;
    //             itemTarget.active = true
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //             if (this.isCountCus == 0) {
    //                 // this.isTargetCus.getComponent("cusGym").happy();
    //                 // this.isTargetCus.getComponent("cusGym").smile2();
    //                 for (let child of this.listItem.children) {
    //                     if (child.active) {
    //                         child.getChildByName("red").active = true
    //                         child.getComponent(cc.Button).enabled = true
    //                     }
    //                 }
    //                 this.lbGuild.string = "Nice! Keep cleaning!"
    //                 this.npc2.active = true
    //                 this.npc2.getComponent(cc.Animation).play()
    //                 this.listItem.children[4].getChildByName("hand").active = true
    //                 this.scheduleOnce(() => {
    //                     this.npc2.active = false
    //                 }, 2)
    //             }
    //             this.checkStep()
    //         }).start()
    //     }
    //     else if (itemComp.tag == 1) {
    //         let itemTarget = this.listTaTo[this.isCountTaTo]
    //         this.isCountTaTo++
    //         let posEnd = itemTarget.position;
    //         posEnd = itemTarget.parent.convertToWorldSpaceAR(posEnd);
    //         posEnd = this.node.convertToNodeSpaceAR(posEnd);
    //         let mag = 100;
    //         let midPos = cc.v2((pos.x + posEnd.x) / 2, posEnd.y + mag);
    //         cc.tween(item).bezierTo(0.6, cc.v2(pos.x, pos.y), midPos, cc.v2(posEnd.x, posEnd.y)).call(() => {
    //             item.active = false;
    //             itemTarget.active = true
    //             // this.isTargetCus.getComponent("cusGym").happy();
    //             // this.isCountCus++
    //             this.checkStep()
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //         }).start()
    //     }
    //     else if (itemComp.tag == 2) {
    //         let itemTarget = this.listKhan.children[this.isCountKhan]
    //         this.isCountKhan++
    //         let posEnd = itemTarget.position;
    //         item.children[2].active = false;
    //         posEnd = itemTarget.parent.convertToWorldSpaceAR(posEnd);
    //         posEnd = this.node.convertToNodeSpaceAR(posEnd);
    //         let mag = 100;
    //         let midPos = cc.v2((pos.x + posEnd.x) / 2, posEnd.y + mag);
    //         cc.tween(item).bezierTo(0.6, cc.v2(pos.x, pos.y), midPos, cc.v2(posEnd.x, posEnd.y)).call(() => {
    //             item.active = false;
    //             itemTarget.active = true
    //             // this.isTargetCus.getComponent("cusGym").happy();
    //             // this.isCountCus++
    //             this.checkStep()
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //         }).start()
    //         cc.tween(item).to(0.6, { angle: 0 }).start()
    //     }
    //     else if (itemComp.tag == 3) {
    //         let itemTarget = this.listNuoc.children[this.isCountNuoc]
    //         this.isCountNuoc++
    //         let posEnd = itemTarget.position;
    //         posEnd = itemTarget.parent.convertToWorldSpaceAR(posEnd);
    //         posEnd = this.node.convertToNodeSpaceAR(posEnd);
    //         let mag = 100;
    //         let midPos = cc.v2((pos.x + posEnd.x) / 2, posEnd.y + mag);
    //         cc.tween(item).bezierTo(0.6, cc.v2(pos.x, pos.y), midPos, cc.v2(posEnd.x, posEnd.y)).call(() => {
    //             item.active = false;
    //             itemTarget.active = true
    //             // this.isTargetCus.getComponent("cusGym").happy();
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //             this.checkStep()
    //         }).start()
    //     }
    // }
    NewClass.prototype.checkStep = function () {
        var _this = this;
        this.isCountCus++;
        if (this.isCountCus == 7) {
            this.isTargetCus.getComponent("cusGym").happy();
            this.isTargetCus.getComponent("cusGym").smile();
            this.scheduleOnce(function () {
                _this.moveCus2(true);
            }, 1);
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
                _this.scheduleOnce(function () {
                    _this.mayDayTa.getChildByName("char").getComponent("cusGym").dayTa();
                    _this.mayDayTa.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                    _this.mayDayTa.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                }, 0.8);
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
            _this.cusOut(char);
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
            // this.listItem.children[5].children[0].active = true
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
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // this.camera.node.position = cc.v3(-70, 0)
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 2;
            // this.camera.node.position = cc.v3(150, 0)
            this.phaohoa.scale = (logic) ? 7 : 3;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.coinBar.getComponent(cc.Widget).top = 77 + 30;
                this.logo.getComponent(cc.Widget).top = 48 + 30;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 1.4
                this.guildUpgrade.scale = 1.8;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXEd5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtBQUVyQjtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtrQ0M7UUFoa0NHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsa0JBQVksR0FBWSxJQUFJLENBQUE7UUFFNUIsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFFN0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLFlBQU0sR0FBYSxJQUFJLENBQUE7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Q2pEO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQzlEO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDbkQ7UUFDRCxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDbEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDdkU7WUFDRCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFFLEdBQUcsQ0FB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QUUxRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUU3QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUM5QyxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFMUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVB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QUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBR3pCO1FBREMsUUFBUTsrQ0FDSztJQXJHRyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa2tDNUI7SUFBRCxlQUFDO0NBbGtDRCxBQWtrQ0MsQ0Fsa0NxQyxFQUFFLENBQUMsU0FBUyxHQWtrQ2pEO2tCQWxrQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5nb2xkID0gMTAwXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5wYzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbnBjMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1c05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RQbGFjZVBvczogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENydW5jaDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94aW5nMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJveGluZzI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQkc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ29uZmlybTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZGxvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUaGluazogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkVXBncmFkZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpbGRVcGdyYWRlMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhhb2hvYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkNvaW46IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkYXlUYTE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlsbEJhcjogY2MuU3ByaXRlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb2luQmFyOiBjYy5Ob2RlXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RUYURvbjogY2MuTm9kZVtdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFRhVG86IGNjLk5vZGVbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtoYW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0TnVvYzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2lhVGFOaG86IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnaWFUYUxvbjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGltZ3RhRG86IGNjLlNwcml0ZUZyYW1lID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFyVHV0MTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhclR1dDI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkd1aWxkOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHVOdW9jOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dUtoYW46IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhcnRlbmRlcjE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dEJveGluZzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJdGVtMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWF5RGF5VGE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1heUdhcEJ1bmc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1heURheVRhMjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGFyclBvc0N1cyA9IFtdXHJcbiAgICBhcnJDdXMgPSBbXVxyXG4gICAgYXJyQ3J1bmNoID0gW11cclxuICAgIGlzSGluZCA9IGZhbHNlXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgaXNGcmlzdENsaWNrID0gZmFsc2U7XHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCRywgdHJ1ZSwgMC41KVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ucGMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vIH0sIDEpXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDI1MCwgLTIxNilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzTm9kZS5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJQb3NDdXMucHVzaCh0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbltpXS5wb3NpdGlvbilcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDcnVuY2guY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoLnB1c2godGhpcy5saXN0Q3J1bmNoLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS5kZWxheSgwLjUpLnRvKDAuNSx7cG9zaXRpb246Y2MudjMoMCwxMDApfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmVUb1dhaXQoKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckN1c1tpXS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikubW92ZSh0aGlzLmFyclBvc0N1c1tpIC0gMV0sIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IHRoaXMuYXJyQ3VzWzBdO1xyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubnBjLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfSwgMylcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubnBjKS5ieSgwLjIsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIC04MCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5wYy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5saXN0SXRlbS5jaGlsZHJlbls1XS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubGlzdEl0ZW0uY2hpbGRyZW5bNV0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmdpYVRhTmhvLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubGlzdEl0ZW0uY2hpbGRyZW5bNV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ucGMyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgLy8gICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyB9LCA1KVxyXG4gICAgICAgIC8vIHRoaXMuc3Bhd0Zpc3RDdXN0b21lcigpXHJcbiAgICB9XHJcbiAgICBzaG93TWlzaW9uMigpIHtcclxuICAgICAgICBsZXQgY2hhciA9IHRoaXMubWF5R2FwQnVuZy5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIik7XHJcbiAgICAgICAgbGV0IGNoYXJDb21wID0gY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIik7XHJcbiAgICAgICAgY2hhckNvbXAubmdvaVRobygpO1xyXG4gICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygtMTQsIC0xMCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFyQ29tcC5zaG93UG9wKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnR1TnVvYy5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMudHVOdW9jLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnR1TnVvYy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG5cclxuICAgICAgICB9LCAwLjMpO1xyXG4gICAgfVxyXG4gICAgaXNDb3VudE91dCA9IDBcclxuICAgIGN1c091dChub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUucGFyZW50Lm5hbWUgPT0gXCJtYXlHYXBCdW5nXCIpIHtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikubW92ZU91dDIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikubW92ZU91dCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzQ291bnRPdXQrK1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW92ZSBvdXRcIilcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudE91dCA9PSAxICYmIHRoaXMuYXJyQ3VzWzBdLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUN1czIoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNDb3VudE91dCA9PSAxICYmIHRoaXMubWF5R2FwQnVuZy5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikuYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzMygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNDb3VudE91dCA9PSAxICYmIHRoaXMuYXJyQ3VzWzJdLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubW92ZUN1czMoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKC0xMDAsIDEwMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RDdXMyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdEN1czIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIC8vIGNoaWxkLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuY291bnREb3duKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdEl0ZW0yLmNoaWxkcmVuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR1dEJveGluZy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudE91dCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRnYW1lKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzQ291bnRXb3JrRW5kID0gMFxyXG4gICAgYnRuX3dvcmtFbmQoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNoYXIgPSBudWxsO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBjaGFyID0gdGhpcy5saXN0Q3VzMi5jaGlsZHJlblsxXTtcclxuICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikud2FsaygxLjIsIGNjLnYzKC0xNzksIDEwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heUdhcEJ1bmcuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF5R2FwQnVuZy5nZXRDaGlsZEJ5TmFtZShcImNoYXIyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heUdhcEJ1bmcuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyMlwiKS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpO1xyXG5cclxuICAgICAgICAgICAgfSwgMS4yKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgIGNoYXIgPSB0aGlzLmxpc3RDdXMyLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS53YWxrKDIsIGNjLnYzKC00MDIsIC0yMTcpKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF5RGF5VGEyLmdldENoaWxkQnlOYW1lKFwiY2hhcjJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF5RGF5VGEyLmdldENoaWxkQnlOYW1lKFwiY2hhcjJcIikuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmRheVRhKClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKS5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMubWF5RGF5VGEyLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heURheVRhMi5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSBcIjNcIikge1xyXG4gICAgICAgICAgICBjaGFyID0gdGhpcy5saXN0Q3VzMi5jaGlsZHJlblsyXTtcclxuICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikud2FsaygzLCBjYy52MygtNjc1LCAtMTQ0KSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJveGluZzIuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ib3hpbmcyLmdldENoaWxkQnlOYW1lKFwiY2hhcjJcIikuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmJveGluZygpO1xyXG4gICAgICAgICAgICB9LCAzKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzQ291bnRXb3JrRW5kKys7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudFdvcmtFbmQgPT0gMykge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MygtMTUwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbmRnYW1lKHRydWUpXHJcbiAgICAgICAgICAgIH0sIDMuMilcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjbGljayBwb3BcIilcclxuXHJcblxyXG4gICAgfVxyXG4gICAgaXNDb3VudFRhTmhvID0gMFxyXG4gICAgaXNDb3VudFRhVG8gPSAwXHJcbiAgICBpc0NvdW50Q3VzID0gMFxyXG4gICAgaXNDb3VudEtoYW4gPSAwO1xyXG4gICAgaXNDb3VudE51b2MgPSAyO1xyXG4gICAgaXNGaXJzdEl0ZW0gPSBmYWxzZTtcclxuICAgIGNoZWNrSXRlbShpdGVtLCBwb3NUb3VjaCkge1xyXG4gICAgICAgIGxldCBpdGVtQ29tcCA9IGl0ZW0uZ2V0Q29tcG9uZW50KFwiaXRlbUd5bVwiKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0ZyaXN0Q2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZyaXN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdpYVRhTmhvLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmNvdW50RG93bigpO1xyXG4gICAgICAgICAgICB0aGlzLm5wYzIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgLy8gfSwgMC44KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAoaXRlbUNvbXAudGFnID09IDApIHtcclxuICAgICAgICAvLyAgICAgbGV0IGl0ZW1UYXJnZXQgPSB0aGlzLmxpc3RUYURvblt0aGlzLmlzQ291bnRUYU5ob11cclxuICAgICAgICAvLyAgICAgdGhpcy5pc0NvdW50VGFOaG8rK1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikpIHtcclxuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgLy8gbGV0IGhpbmQ9bnVsbDtcclxuICAgICAgICBzd2l0Y2ggKGl0ZW1Db21wLnRhZykge1xyXG4gICAgICAgICAgICBjYXNlIDA6Ly90YSBuaG9cclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuZ2lhVGFOaG9cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5naWFUYUxvblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnR1S2hhblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnR1TnVvY1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0YXJnZXQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJoaW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwb3MgPSBpdGVtLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgIGxldCBtYWcgPSAxMDA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0ucG9zaXRpb24uc3ViKHBvcykubWFnKCkpXHJcbiAgICAgICAgICAgIGlmIChpdGVtLnBvc2l0aW9uLnN1Yihwb3MpLm1hZygpIDwgMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1UYXJnZXQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtQ29tcC50YWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6Ly90YSBuaG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRhcmdldCA9IHRoaXMubGlzdFRhRG9uW3RoaXMuaXNDb3VudFRhTmhvXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbXAuY29sb3JHID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UYXJnZXQuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmltZ3RhRG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ291bnRUYU5obysrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRhcmdldCA9IHRoaXMubGlzdFRhVG9bdGhpcy5pc0NvdW50VGFUb11cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50VGFUbysrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRhcmdldCA9IHRoaXMubGlzdEtoYW4uY2hpbGRyZW5bdGhpcy5pc0NvdW50S2hhbl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50S2hhbisrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRhcmdldCA9IHRoaXMubGlzdE51b2MuY2hpbGRyZW5bdGhpcy5pc0NvdW50TnVvY11cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50TnVvYysrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNDb3VudE51b2NcIiwgdGhpcy5pc0NvdW50TnVvYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UYXJnZXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb2luLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTdGVwKClcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRmlyc3RJdGVtID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0SXRlbSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0SXRlbS5jaGlsZHJlbilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIGNsaWNrSXRlbShpdGVtKSB7XHJcbiAgICAvLyAgICAgdGhpcy5ucGMyLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgLy8gICAgIGlmICghdGhpcy5pc0ZyaXN0Q2xpY2spIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0ZyaXN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdpYVRhTmhvLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnJDdXNbMF0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmNvdW50RG93bigpO1xyXG4gICAgLy8gICAgICAgICAvLyB9LCAwLjgpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmIChpdGVtLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKSkge1xyXG4gICAgLy8gICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDEwXHJcblxyXG4gICAgLy8gICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJyZWRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgbGV0IHBvcyA9IGl0ZW0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpdGVtLnBvc2l0aW9uKTtcclxuICAgIC8vICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgLy8gICAgIGxldCBpdGVtQ29tcCA9IGl0ZW0uZ2V0Q29tcG9uZW50KFwiaXRlbUd5bVwiKVxyXG4gICAgLy8gICAgIGlmIChpdGVtQ29tcC50YWcgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICBsZXQgaXRlbVRhcmdldCA9IHRoaXMubGlzdFRhRG9uW3RoaXMuaXNDb3VudFRhTmhvXVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnRUYU5obysrXHJcbiAgICAvLyAgICAgICAgIGxldCBwb3NFbmQgPSBpdGVtVGFyZ2V0LnBvc2l0aW9uO1xyXG4gICAgLy8gICAgICAgICBpZiAoaXRlbUNvbXAuY29sb3JHID09IDEpIHtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW1UYXJnZXQuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmltZ3RhRG9cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBwb3NFbmQgPSBpdGVtVGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zRW5kKTtcclxuICAgIC8vICAgICAgICAgcG9zRW5kID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZCk7XHJcbiAgICAvLyAgICAgICAgIGxldCBtYWcgPSAxMDA7XHJcbiAgICAvLyAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52MigocG9zLnggKyBwb3NFbmQueCkgLyAyLCBwb3NFbmQueSArIG1hZyk7XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pLmJlemllclRvKDAuNiwgY2MudjIocG9zLngsIHBvcy55KSwgbWlkUG9zLCBjYy52Mihwb3NFbmQueCwgcG9zRW5kLnkpKS5jYWxsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtVGFyZ2V0LmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3VudEN1cyA9PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuaGFwcHkoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyB0aGlzLmlzVGFyZ2V0Q3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5zbWlsZTIoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RJdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5hY3RpdmUpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwicmVkXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5sYkd1aWxkLnN0cmluZyA9IFwiTmljZSEgS2VlcCBjbGVhbmluZyFcIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubnBjMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ucGMyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubGlzdEl0ZW0uY2hpbGRyZW5bNF0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMubnBjMi5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jaGVja1N0ZXAoKVxyXG5cclxuICAgIC8vICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIGlmIChpdGVtQ29tcC50YWcgPT0gMSkge1xyXG4gICAgLy8gICAgICAgICBsZXQgaXRlbVRhcmdldCA9IHRoaXMubGlzdFRhVG9bdGhpcy5pc0NvdW50VGFUb11cclxuICAgIC8vICAgICAgICAgdGhpcy5pc0NvdW50VGFUbysrXHJcbiAgICAvLyAgICAgICAgIGxldCBwb3NFbmQgPSBpdGVtVGFyZ2V0LnBvc2l0aW9uO1xyXG5cclxuICAgIC8vICAgICAgICAgcG9zRW5kID0gaXRlbVRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc0VuZCk7XHJcbiAgICAvLyAgICAgICAgIHBvc0VuZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NFbmQpO1xyXG4gICAgLy8gICAgICAgICBsZXQgbWFnID0gMTAwO1xyXG4gICAgLy8gICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHBvcy54ICsgcG9zRW5kLngpIC8gMiwgcG9zRW5kLnkgKyBtYWcpO1xyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihpdGVtKS5iZXppZXJUbygwLjYsIGNjLnYyKHBvcy54LCBwb3MueSksIG1pZFBvcywgY2MudjIocG9zRW5kLngsIHBvc0VuZC55KSkuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgaXRlbVRhcmdldC5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmlzVGFyZ2V0Q3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5pc0NvdW50Q3VzKytcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY2hlY2tTdGVwKClcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuXHJcbiAgICAvLyAgICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2UgaWYgKGl0ZW1Db21wLnRhZyA9PSAyKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBpdGVtVGFyZ2V0ID0gdGhpcy5saXN0S2hhbi5jaGlsZHJlblt0aGlzLmlzQ291bnRLaGFuXVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnRLaGFuKytcclxuICAgIC8vICAgICAgICAgbGV0IHBvc0VuZCA9IGl0ZW1UYXJnZXQucG9zaXRpb247XHJcbiAgICAvLyAgICAgICAgIGl0ZW0uY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHBvc0VuZCA9IGl0ZW1UYXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NFbmQpO1xyXG4gICAgLy8gICAgICAgICBwb3NFbmQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKTtcclxuICAgIC8vICAgICAgICAgbGV0IG1hZyA9IDEwMDtcclxuICAgIC8vICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKChwb3MueCArIHBvc0VuZC54KSAvIDIsIHBvc0VuZC55ICsgbWFnKTtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4oaXRlbSkuYmV6aWVyVG8oMC42LCBjYy52Mihwb3MueCwgcG9zLnkpLCBtaWRQb3MsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW1UYXJnZXQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuaGFwcHkoKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmlzQ291bnRDdXMrK1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jaGVja1N0ZXAoKVxyXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpXHJcblxyXG5cclxuICAgIC8vICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihpdGVtKS50bygwLjYsIHsgYW5nbGU6IDAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIGlmIChpdGVtQ29tcC50YWcgPT0gMykge1xyXG4gICAgLy8gICAgICAgICBsZXQgaXRlbVRhcmdldCA9IHRoaXMubGlzdE51b2MuY2hpbGRyZW5bdGhpcy5pc0NvdW50TnVvY11cclxuICAgIC8vICAgICAgICAgdGhpcy5pc0NvdW50TnVvYysrXHJcbiAgICAvLyAgICAgICAgIGxldCBwb3NFbmQgPSBpdGVtVGFyZ2V0LnBvc2l0aW9uO1xyXG5cclxuICAgIC8vICAgICAgICAgcG9zRW5kID0gaXRlbVRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc0VuZCk7XHJcbiAgICAvLyAgICAgICAgIHBvc0VuZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NFbmQpO1xyXG4gICAgLy8gICAgICAgICBsZXQgbWFnID0gMTAwO1xyXG4gICAgLy8gICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHBvcy54ICsgcG9zRW5kLngpIC8gMiwgcG9zRW5kLnkgKyBtYWcpO1xyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihpdGVtKS5iZXppZXJUbygwLjYsIGNjLnYyKHBvcy54LCBwb3MueSksIG1pZFBvcywgY2MudjIocG9zRW5kLngsIHBvc0VuZC55KSkuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgaXRlbVRhcmdldC5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuaGFwcHkoKTtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY2hlY2tTdGVwKClcclxuXHJcbiAgICAvLyAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBjaGVja1N0ZXAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvdW50Q3VzKytcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50Q3VzID09IDcpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuaGFwcHkoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLnNtaWxlKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVDdXMyKHRydWUpXHJcbiAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50Q3VzID09IDEzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01pc3Npb25FbmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzQ291bnRDdXMgPT0gMTEpIHtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0Q3VzMi5jaGlsZHJlbikge1xyXG4gICAgICAgIC8vICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmhhcHB5KClcclxuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5pc1N1Y2Nlc3MgPSB0cnVlXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjaGlsZC5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuY291bnREb3duKClcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLm9uRW5kZ2FtZSh0cnVlKVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcbiAgICBzaG93TWlzc2lvbkVuZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RDdXMyLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5tb3ZlQnlFbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5vbkVuZGdhbWUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBpc01vdmVDdXMyID0gZmFsc2VcclxuICAgIG1vdmVDdXMyKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3ZlQ3VzMikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlQ3VzMiA9IHRydWVcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBsZXQgZmluYWxQb3MgPSBjYy52MygtMjk3LCAtODkpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygxLjIsIHsgcG9zaXRpb246IGNjLnYzKC00NzksIDMwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmUzKGZpbmFsUG9zLCAyKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gNTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0Q3VzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXlEYXlUYS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXlEYXlUYS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heURheVRhLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZGF5VGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF5RGF5VGEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heURheVRhLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMC44KVxyXG5cclxuICAgICAgICAgICAgfSwgMilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTIwLCAxMzApIH0pLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTIyMCwgMTMwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gdGhpcy5hcnJDdXNbMV0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmVUb1dhaXQyKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXJyQ3VzWzFdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gdGhpcy5hcnJDdXNbMV0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmNvdW50RG93bigpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy50dU51b2MuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB0aGlzLnR1TnVvYy5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy50dU51b2MuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IFxyXG4gICAgICAgICAgICB0aGlzLnNob3dNaXNpb24yKClcclxuICAgICAgICB9LCAxLjUpXHJcbiAgICB9XHJcbiAgICBpc01vdmVDdXMzID0gZmFsc2VcclxuXHJcbiAgICBtb3ZlQ3VzMygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01vdmVDdXMzKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01vdmVDdXMzID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHVOdW9jLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50dU51b2MuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHVOdW9jLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0yMCwgMTMwKSB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtNTAwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5hcnJDdXNbMl0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmVUb1dhaXQzKClcclxuICAgIH1cclxuICAgIGJ0bl90dU51b2MoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnR1TnVvYy5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudHVOdW9jLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJhcnRlbmRlcjEuZ2V0Q29tcG9uZW50KFwicHRcIikubW92ZUdpdmVXYXRlcigpXHJcbiAgICAgICAgbGV0IGNoYXIgPSB0aGlzLm1heUdhcEJ1bmcuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpO1xyXG4gICAgICAgIGxldCBjaGFyQ29tcCA9IGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpO1xyXG4gICAgICAgIHRoaXMuaXNDb3VudE51b2MtLVxyXG4gICAgICAgIHRoaXMubGlzdE51b2MuY2hpbGRyZW5bdGhpcy5pc0NvdW50TnVvY10uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaXNDb3VudE91dC0tO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKC0yMS41LCAtNjApXHJcbiAgICAgICAgICAgIGNoYXJDb21wLnBvcC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjaGFyQ29tcC5oYXBweSgpO1xyXG4gICAgICAgICAgICBjaGFyQ29tcC5zbWlsZTIoKTtcclxuXHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDUwXHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhcnRlbmRlcjEuZ2V0Q29tcG9uZW50KFwicHRcIikubW92ZUJhY2soKVxyXG5cclxuICAgICAgICB9LCAxLjcpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1c091dChjaGFyKVxyXG4gICAgICAgIH0sIDIuMylcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYXJyQ3VzWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNoYXJUdXQyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2hhclR1dDIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG5cclxuICAgICAgICAvLyB9LCA2LjIpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0yMCwgMTMwKSB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtNTAwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5tb3ZlVG9XYWl0MygpXHJcblxyXG5cclxuICAgICAgICB9LCAzKVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSlcclxuICAgIH1cclxuICAgIHNob3dNaXNzaW9uQm94aW5nKCkge1xyXG4gICAgICAgIHRoaXMudHV0Qm94aW5nLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnR1dEJveGluZy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHV0Qm94aW5nLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgfVxyXG4gICAgYnRuX2JveGluZyhldmVudCkge1xyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNiwgeyBwb3NpdGlvbjogY2MudjMoLTYwMCwgLTUwKSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIHRoaXMudHV0Qm94aW5nLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50dXRCb3hpbmcuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFyckN1c1syXS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuaGFwcHkoKVxyXG4gICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5zbWlsZSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB0aGlzLmFyckN1c1syXS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikubW92ZTMoY2MudjMoLTY1MCwgLTE1NCksIDIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1syXS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuYm94aW5nKClcclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcyLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcblxyXG4gICAgICAgIH0sIDIuMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTE4MCwgMTAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMubGlzdEN1czIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0Q3VzMi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gY2hpbGQuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmhhcHB5KClcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5jb3VudERvd24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW0yLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0SXRlbTIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDUwO1xyXG4gICAgICAgIH0sIDMuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDUpXHJcblxyXG5cclxuICAgIH1cclxuICAgIHNwYXdGaXN0Q3VzdG9tZXIoKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtjYy52Myg0MzgsIC0xNTkpLCBjYy52Myg1NzcsIC0yNTYpXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmUodGhpcy5hcnJQb3NDdXNbaV0sIDIuNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2pdXHJcbiAgICAgICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmUoYXJyW2pdLCAxICsgMSAqIGopXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5zaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5zaG93UG9wKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEuMSArIDEgKiBqKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAyOyBqIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tqXVxyXG4gICAgICAgICAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5tb3ZlKHRoaXMuYXJyUG9zQ3VzW2ogLSAyXSwgMS42KVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAyLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5wYzIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubnBjLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW0uY2hpbGRyZW5bNV0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW0uY2hpbGRyZW5bNV0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lhVGFOaG8uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtLmNoaWxkcmVuWzVdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCA0KVxyXG4gICAgfVxyXG4gICAgaXNDbG9zZVR1dCA9IGZhbHNlXHJcbiAgICBidG5fY2xvc2VUdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xvc2VUdXQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzQ2xvc2VUdXQgPSB0cnVlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ucGMpLmJ5KDAuMywgeyBvcGFjaXR5OiAtMjU1LCBwb3NpdGlvbjogY2MudjMoMCwgLTgwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ucGMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5saXN0SXRlbS5jaGlsZHJlbls1XS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5saXN0SXRlbS5jaGlsZHJlbls1XS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5naWFUYU5oby5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdEl0ZW0uY2hpbGRyZW5bNV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5wYzIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICB9XHJcbiAgICBkb0N1cyh0YWcpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ucGMyKS5ieSgwLjIsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIC04MCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubnBjLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMubW92ZUN1cyh0YWcpXHJcbiAgICB9XHJcbiAgICBpc0NvdW50QWN0aW9uID0gMFxyXG4gICAgbW92ZUN1cyh2YWx1ZSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5hcnJDcnVuY2hbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcIm5vdGlCb251c0NvaW5cIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMlxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5nYXBCdW5nKClcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygxLCAtMTYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFswXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMF0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcCA9IHRoaXMuYXJyQ3VzW2ldLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHBvcC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmdldENvbXBvbmVudChcImN1c0d5bVwiKS50dWNHaWFuKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhpbmQoKVxyXG4gICAgICAgICAgICAgICAgfSwgMylcclxuICAgICAgICAgICAgfSwgMS40KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1sxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmRheVRhMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmFyckNydW5jaFswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2hhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1swXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmRheVRhMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcIm5vdGlCb251c0NvaW5cIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMlxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRheVRhMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmRheVRhKClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKS5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5VGExLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRheVRhMS5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5nYXBCdW5nKClcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygxLCAtMTYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFswXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMF0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfSwgMC41KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcxLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pblwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmJveGluZzEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pblwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzNdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmJveGluZzIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMi5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNDb3VudEFjdGlvbisrO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRBY3Rpb24gPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYW1lMSgpXHJcblxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgIT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzSGluZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkhpbmQoKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHThuq90IHThuqV0IGPhuqMgdHLGsOG7m2NcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcCA9IHRoaXMuYXJyQ3VzW2ldLmdldENoaWxkQnlOYW1lKFwicG9wXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhbmQgPSBwb3AuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgaGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYuG6rXQgY8OhaSBoaeG7h24gdOG6oWlcclxuICAgICAgICAgICAgbGV0IHBvcCA9IHRoaXMuYXJyQ3VzW2luZGV4XS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKTtcclxuICAgICAgICAgICAgbGV0IGhhbmQgPSBwb3AuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xyXG4gICAgICAgICAgICBoYW5kLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5hcnJDdXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDE7IC8vIHF1YXkgbOG6oWkgdOG7qyDEkeG6p3VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcbiAgICBpc0N1cyA9IDBcclxuICAgIG1vdmVDYW1lMSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBzY2FsZTogMi4zIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMi41IH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5nYW1lKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDIwMCwgLTU1MCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ndWlsZFVwZ3JhZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICB0aGlzLmlzQ3VzID0gMFxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNDb3VudFN0ZXAgPSAwXHJcbiAgICBidG5fdXBncmFkZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb25maXJtLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmlzQ291bnRTdGVwKytcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50U3RlcCA8IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IHRoaXMuaXNDb3VudFN0ZXAgKiAwLjI1XHJcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdEUuY2hpbGRyZW5bdGhpcy5pc0NvdW50U3RlcCAtIDFdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG4gPSB0aGlzLmd1aWxkVXBncmFkZS5jaGlsZHJlblsyXS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvblwiKVxyXG4gICAgICAgIGJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGJ0bi5wb3NpdGlvbiA9IGNjLnYzKDYwICogdGhpcy5pc0NvdW50U3RlcCwgLTE3LjkzKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQ3VzID09IDApIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmxpc3RDcnVuY2guY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvdW50U3RlcCA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb2luLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pbjJcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuaGFwcHkoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKC02NywgLTUwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlsZFVwZ3JhZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmU0KClcclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyMDBcclxuICAgICAgICAgICAgICAgIHRoaXMucGhhb2hvYS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjaGFyKS50bygwLjMsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzQ3VzID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmJveGluZzEuY2hpbGRyZW5bMF1cclxuXHJcbiAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvdW50U3RlcCA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb2luLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcblxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcIm5vdGlCb251c0NvaW4yXCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubW92ZTQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5waGFvaG9hLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoYXIpLnRvKDAuMywgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNDdXMgPT0gMikge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuYm94aW5nMi5jaGlsZHJlblswXVxyXG4gICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwidmZ4XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNDb3VudFN0ZXAgPT0gMikge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0VuZGdhbWUgPSBmYWxzZTtcclxuXHJcbiAgICBvbkVuZGdhbWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZGdhbWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNFbmRnYW1lID0gdHJ1ZTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZGxvc2UsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLmVuZENhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJOZXcgTGFiZWxcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRUaGluaywgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgbW92ZTIoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBzY2FsZTogMSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5nYW1lKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5pc0N1cyA9IDFcclxuICAgICAgICAgICAgdGhpcy5pc0NvdW50U3RlcCA9IDBcclxuICAgICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDBcclxuXHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZTMoKVxyXG4gICAgICAgIH0sIDEuNylcclxuICAgIH1cclxuICAgIG1vdmUzKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAyLjcgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTE5NzMsIC0xMjApIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICB9XHJcbiAgICBtb3ZlNCgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLmlzQ3VzID0gMlxyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnRTdGVwID0gMFxyXG4gICAgICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMFxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmU1KClcclxuICAgICAgICB9LCAxLjcpXHJcbiAgICB9XHJcbiAgICBtb3ZlNSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDEsIHsgc2NhbGU6IDEuNyB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMTEwMCwgMTAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gbGV0IHRleHQgPSB0aGlzLmd1aWxkVXBncmFkZS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKVxyXG4gICAgICAgIC8vIHRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIkxhc3Qgb25lISBGaW5pc2ggc3Ryb25nIVwiXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgIH1cclxuICAgIGRlbTEgPSAwO1xyXG4gICAgZGVtMiA9IDBcclxuICAgIGJ0bl91cGdyYWRlMihldmVudCwgdmFsdWUpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb25maXJtLCBmYWxzZSwgMSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGwgPSB0aGlzLmd1aWxkVXBncmFkZTIuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1RyYWluMlwiKS5jaGlsZHJlblsxXVxyXG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5ndWlsZFVwZ3JhZGUyLmdldENoaWxkQnlOYW1lKFwiYmdUcmFpbjJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIilcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmRheVRhMS5jaGlsZHJlblswXVxyXG4gICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVtMSsrXHJcbiAgICAgICAgICAgIGZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy5kZW0xICogMC4yXHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBidG4ucG9zaXRpb24gPSBjYy52Myg1MCAqIHRoaXMuZGVtMSwgLTE3LjkzKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZW0xID09IDUpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTgxLCAtNDUpXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZmlsbCA9IHRoaXMuZ3VpbGRVcGdyYWRlMi5nZXRDaGlsZEJ5TmFtZShcImJnVHJhaW5cIikuY2hpbGRyZW5bMV1cclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuZ3VpbGRVcGdyYWRlMi5nZXRDaGlsZEJ5TmFtZShcImJnVHJhaW5cIikuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIilcclxuXHJcbiAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwidmZ4XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5kZW0yKytcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5wb3NpdGlvbiA9IGNjLnYzKDUwICogdGhpcy5kZW0yLCAtMTcuOTMpXHJcbiAgICAgICAgICAgIGZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy5kZW0yICogMC4yXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlbTIgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kZW0xID09IDUgJiYgdGhpcy5kZW0yID09IDUpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ndWlsZFVwZ3JhZGUyKS50bygwLjI2LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZTIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUyKClcclxuICAgICAgICAgICAgfSwgMC44KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS41XHJcblxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLnNjYWxlID0gKGxvZ2ljKSA/IDIuNCA6IDFcclxuICAgICAgICB0aGlzLmd1aWxkVXBncmFkZTIuc2NhbGUgPSAobG9naWMpID8gMS42IDogMVxyXG5cclxuICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMubnBjLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICB0aGlzLm5wYzIuc2NhbGUgPSAobG9naWMpID8gMS43IDogMVxyXG4gICAgICAgIHRoaXMubnBjLnkgPSAobG9naWMpID8gLTcwMCA6IDBcclxuICAgICAgICB0aGlzLm5wYzIueSA9IChsb2dpYykgPyAtNzAwIDogMFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjUgOiAwLjdcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMS41IDogMVxyXG4gICAgICAgIHRoaXMuY29pbkJhci5zY2FsZSA9IChsb2dpYykgPyAxLjUgOiAxO1xyXG4gICAgICAgIHRoaXMuY29pbkJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA3NztcclxuICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNDhcclxuICAgICAgICAvLyB0aGlzLmJhckNvaW4ueT0obG9naWMpPzQwMDo0NzBcclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygtNzAsIDApXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAyXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygxNTAsIDApXHJcbiAgICAgICAgICAgIHRoaXMucGhhb2hvYS5zY2FsZSA9IChsb2dpYykgPyA3IDogM1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrIGlwaG9uZXhcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuY29pbkJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA3NyArIDMwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDQ4ICsgMzBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjRcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLnNjYWxlID0gMS44XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==