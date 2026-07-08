"use strict";
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