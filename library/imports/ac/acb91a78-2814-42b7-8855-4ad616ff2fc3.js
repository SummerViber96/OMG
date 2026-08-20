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
        _this.textGuild1 = null;
        _this.door = null;
        _this.listIconPt = null;
        _this.listPt = null;
        _this.preCoin = null;
        _this.listPrePt = [];
        _this.listPreCus = [];
        _this.arrMayDay = [];
        _this.arrPosDone = [cc.v3(-239, -133), cc.v3(57, -157), cc.v3(-123, -36), cc.v3(-14, 65), cc.v3(-58, -235), cc.v3(198, -59)];
        _this.arrPosDoneCrunch = [cc.v3(218, -392), cc.v3(409, -289)];
        // @property(cc.Node)
        // listCrunch:cc.Node=null
        _this.arrPosCus = [];
        _this.arrCus = [];
        _this.arrIconPt = [];
        _this.isStep = 0;
        _this.arrCrunch = [];
        _this.isHind = false;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.posGapBung = cc.v3(-30, -19);
        _this.posNangTa = cc.v3(-50, -42);
        _this.countCus = 0;
        _this.arrWaiting = [];
        _this.countpt = 0;
        _this.isCountAction = 0;
        _this.isCountStep = 0;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBG, true, 0.5);
        this.scheduleOnce(function () {
            for (var i = 0; i < 3; i++) {
                var child = _this.listCusNode.children[i];
                child.getChildByName("pop").active = true;
            }
            _this.textGuild1.active = true;
        }, 0.6);
        for (var i = 0; i < this.listCusNode.childrenCount; i++) {
            this.arrCus.push(this.listCusNode.children[i]);
        }
        for (var i = 0; i < this.listIconPt.children[0].childrenCount; i++) {
            this.arrIconPt.push(this.listIconPt.children[0].children[i]);
        }
        for (var i = 0; i < this.listCrunch.childrenCount; i++) {
            this.arrCrunch.push(this.listCrunch.children[i]);
        }
        for (var i = 0; i < this.listPlacePos.childrenCount; i++) {
            this.arrPosCus.push(this.listPlacePos.children[i].position);
        }
    };
    NewClass.prototype.spawCustomer = function () {
        if (this.arrCus.length > 7)
            return;
        var cus = cc.instantiate(this.listPreCus[this.countCus]);
        cus.parent = this.listCusNode;
        var posEnd = this.arrPosCus[this.arrCus.length % 6];
        console.log(this.arrCus.length, this.arrCus.length % 6);
        this.arrCus.push(cus);
        cus.position = cc.v3(-934, -632);
        var anim = cus.children[0].getComponent(sp.Skeleton);
        anim.setAnimation(0, "WalkInR", true);
        cc.tween(cus).to(1, { position: cc.v3(-675, -435) }).call(function () {
            cus.scaleX = -1;
        }).to(0.8, { position: posEnd }).call(function () {
            anim.setAnimation(0, "Waiting", true);
            cus.getChildByName("pop").active = true;
        }).start();
        this.countCus++;
        if (this.countCus > 5) {
            this.countCus = 0;
        }
    };
    NewClass.prototype.doCus = function (tag, cus) {
        var _this = this;
        cc.audioEngine.play(this.soundClick, false, 1);
        if (this.isStep <= 3) {
            this.moveCus(tag);
            if (this.isStep == 0) {
                this.isStep = 1;
                this.listIconPt.active = true;
                this.scheduleOnce(function () {
                    _this.arrIconPt[0].getChildByName("hand").active = true;
                }, 0.3);
            }
            else if (this.isStep == 2) {
                this.arrIconPt[1].getComponent(cc.Button).enabled = true;
                this.arrIconPt[1].getChildByName("hand").active = true;
            }
            else if (this.isStep == 3) {
                this.arrIconPt[2].getComponent(cc.Button).enabled = true;
                this.arrIconPt[2].getChildByName("hand").active = true;
            }
        }
        else {
            if (tag == 0) {
                for (var i = 0; i < this.arrCrunch.length; i++) {
                    if (!this.arrCrunch[i].getChildByName("char")) {
                        this.moveCusToCrunch(cus, i, tag);
                        return;
                    }
                }
            }
            else if (tag == 1) {
                for (var i = 0; i < this.arrMayDay.length; i++) {
                    if (!this.arrMayDay[i].getChildByName("char")) {
                        this.moveCusToMayDay(cus, i, tag);
                        return;
                    }
                }
            }
            else if (tag == 2) {
                if (!this.boxing1.getChildByName("char")) {
                    this.moveCusToBoxing(cus, i, tag);
                }
            }
        }
    };
    NewClass.prototype.moveCusToCrunch = function (cus, value, tag) {
        for (var i = 0; i < this.arrCus.length; i++) {
            if (cus == this.arrCus[i]) {
                this.arrCus.slice(i, 0);
            }
        }
        var crunch = this.arrCrunch[value];
        cus.parent = crunch;
        cus.position = this.posGapBung;
        cus.name = "char";
        cus.children[0].scale = 1;
        cus.scale = 1;
        cus.scaleX = 1;
        var cusComp = cus.getComponent("cusGym");
        cusComp.parentName = "Crunch";
        cusComp.parentIndex = value;
        cusComp.parentNode = crunch;
        this.arrWaiting.push(cus);
        cusComp.waitingTag(tag);
    };
    NewClass.prototype.moveCusToMayDay = function (cus, value, tag) {
        for (var i = 0; i < this.arrCus.length; i++) {
            if (cus == this.arrCus[i]) {
                this.arrCus.slice(i, 0);
            }
        }
        var may = this.arrMayDay[value];
        cus.parent = may;
        cus.position = this.posNangTa;
        cus.name = "char";
        cus.children[0].scale = 1;
        cus.scale = 1;
        cus.scaleX = 1;
        var cusComp = cus.getComponent("cusGym");
        cusComp.parentName = "MayDay";
        cusComp.parentIndex = value;
        cusComp.parentNode = may;
        this.arrWaiting.push(cus);
        cus.getComponent("cusGym").waitingTag(tag);
    };
    NewClass.prototype.moveCusToBoxing = function (cus, value, tag) {
        for (var i = 0; i < this.arrCus.length; i++) {
            if (cus == this.arrCus[i]) {
                this.arrCus.slice(i, 0);
            }
        }
        cus.parent = this.boxing1;
        cus.position = cc.v3(123, 23);
        cus.name = "char";
        cus.children[0].scale = 1;
        cus.scale = 1;
        cus.scaleX = 1;
        var cusComp = cus.getComponent("cusGym");
        cusComp.parentName = "Boxing";
        cusComp.parentIndex = value;
        cusComp.parentNode = this.boxing1;
        this.arrWaiting.push(cus);
        cus.getComponent("cusGym").waitingTag(tag);
    };
    NewClass.prototype.offIconPt = function (node) {
        node.children[1].active = true;
        node.getChildByName("hand").active = false;
    };
    NewClass.prototype.onIconPt = function (node) {
        node.children[1].active = false;
        node.getChildByName("hand").active = false;
    };
    NewClass.prototype.clickPt = function (event, tag) {
        var _this = this;
        var pt = null;
        cc.audioEngine.play(this.soundClick, false, 1);
        if (this.isStep == 1) {
            var btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false;
            btn.enabled = false;
            cc.tween(this.textGuild1).to(0.5, { opacity: 0 }).start();
            pt = this.listPt.children[0];
            this.isStep = 2;
            var fnc = function () {
                _this.activeCus(0);
            };
            pt.getComponent("pt").moveIn(fnc);
            this.scheduleOnce(function () {
                _this.arrCus[1].getChildByName("pop").getChildByName("hand").active = true;
                _this.arrCus[1].getChildByName("pop").getComponent(cc.Button).enabled = true;
            }, 1);
            this.scheduleOnce(function () {
                pt.parent = _this.node;
            }, 0.3);
            this.door.getComponent(cc.Animation).play("door_open");
            this.scheduleOnce(function () {
                _this.door.getComponent(cc.Animation).play("door_close");
            }, 0.7);
            this.offIconPt(this.arrIconPt[0]);
        }
        else if (this.isStep == 2) {
            var btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false;
            pt = this.listPt.children[0];
            this.isStep = 3;
            pt.active = true;
            this.door.getComponent(cc.Animation).play("door_open");
            var fnc = function () {
                _this.activeCus(1);
            };
            pt.getComponent("pt").moveIn(fnc);
            this.scheduleOnce(function () {
                _this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true;
                _this.arrCus[2].getChildByName("pop").getComponent(cc.Button).enabled = true;
            }, 1);
            this.scheduleOnce(function () {
                pt.parent = _this.node;
            }, 0.2);
            this.scheduleOnce(function () {
                _this.door.getComponent(cc.Animation).play("door_close");
            }, 0.7);
            this.offIconPt(this.arrIconPt[1]);
        }
        else if (this.isStep == 3) {
            var btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false;
            pt = this.listPt.children[0];
            this.isStep = 4;
            pt.active = true;
            this.door.getComponent(cc.Animation).play("door_open");
            var fnc = function () {
                _this.activeCus(2);
            };
            pt.getComponent("pt").moveIn(fnc);
            this.scheduleOnce(function () {
                _this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true;
            }, 1);
            this.scheduleOnce(function () {
                pt.parent = _this.node;
            }, 0.2);
            this.scheduleOnce(function () {
                _this.door.getComponent(cc.Animation).play("door_close");
            }, 0.7);
            this.offIconPt(this.arrIconPt[2]);
        }
        else {
            for (var i = 0; i < this.arrCus.length; i++) {
                var cus = this.arrCus[i];
                var cusComp = cus.getComponent("cusGym");
                if (cusComp.isPt == false) {
                    var btn = event.currentTarget.getComponent(cc.Button);
                    btn.enabled = false;
                    event.currentTarget.children[1].active = true;
                    this.addPt(cus, cusComp.parentName);
                    return;
                }
            }
        }
    };
    NewClass.prototype.openDoor = function () {
        var _this = this;
        this.door.getComponent(cc.Animation).play("door_open");
        this.scheduleOnce(function () {
            _this.door.getComponent(cc.Animation).play("door_close");
        }, 0.7);
    };
    NewClass.prototype.addPt = function (cus, parentName) {
        var _this = this;
        this.openDoor();
        var cusComp = cus.getComponent("cusGym");
        cusComp.isPt = true;
        var pt = cc.instantiate(this.listPrePt[this.countpt]);
        pt.parent = this.listPt;
        pt.active = true;
        pt.position = cc.v3(382.607, 121);
        var ptComp = pt.getComponent("pt");
        this.countpt++;
        if (this.countpt > 3) {
            this.countpt = 0;
        }
        var value = 0;
        console.log(parentName);
        switch (cusComp.parentName) {
            case "Crunch":
                // ptComp.tag = cusComp.parentNode.getComponent("Machine").tag
                if (ptComp.tag == 1) {
                    value = 4;
                }
                else if (ptComp.tag == 2) {
                    value = 5;
                }
                else if (ptComp.tag == 3) {
                    value = 6;
                }
                var fnc = function () {
                    _this.activeCus(value);
                };
                ptComp.tag = value;
                ptComp.moveIn(fnc);
                break;
            case "MayDay":
                ptComp.tag = cusComp.parentNode.getComponent("Machine").tag;
                if (ptComp.tag == 0) {
                    value = 1;
                }
                else {
                    value = 3;
                }
                var fnc2 = function () {
                    _this.activeCus(value);
                };
                ptComp.tag = value;
                ptComp.moveIn(fnc2);
                break;
            case "Boxing":
                var fnc3 = function () {
                    _this.activeCus(2);
                };
                ptComp.moveIn(fnc3);
                break;
        }
    };
    NewClass.prototype.activeCus = function (value) {
        var _this = this;
        var char = null;
        switch (value) {
            case 0:
                char = this.arrCrunch[0].getChildByName("char");
                char.getComponent("cusGym").gapBung();
                char.position = cc.v3(1, -16);
                this.arrCrunch[0].children[0].active = false;
                this.arrCrunch[0].children[1].active = true;
                this.scheduleOnce(function () {
                    char.parent = _this.node;
                    char.getComponent("cusGym").happy();
                    char.position = _this.arrPosDone[0];
                    char.scale = 0.8;
                    _this.createCoin(char, 4);
                    cc.tween(char).delay(1).to(0.5, { opacity: 0 }).start();
                }, 2);
                break;
            case 1:
                char = this.dayTa1.getChildByName("char");
                char.getComponent("cusGym").dayTa();
                this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                this.dayTa1.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                char.position = cc.v3(-15.771 + 14, 7 - 5);
                this.scheduleOnce(function () {
                    _this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
                    _this.dayTa1.children[2].getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
                    char.parent = _this.node;
                    char.getComponent("cusGym").happy();
                    char.position = _this.arrPosDoneCrunch[0];
                    char.scale = 0.8;
                    _this.createCoin(char, 6);
                    cc.tween(char).delay(1).to(0.5, { opacity: 0 }).start();
                }, 2);
                break;
            case 2:
                this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                char = this.boxing1.getChildByName("char");
                char.getComponent("cusGym").boxing();
                this.startGame();
                this.scheduleOnce(function () {
                    _this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
                    char.parent = _this.node;
                    char.getComponent("cusGym").happy();
                    char.position = cc.v3(647, -66);
                    char.scale = 0.8;
                    _this.createCoin(char, 6);
                    _this.startGame();
                    _this.isStep = 4;
                    cc.tween(char).delay(1).to(0.5, { opacity: 0 }).start();
                }, 2);
                break;
        }
    };
    NewClass.prototype.startGame = function () {
        for (var _i = 0, _a = this.arrIconPt; _i < _a.length; _i++) {
            var child = _a[_i];
            this.onIconPt(child);
            child.getComponent(cc.Button).enabled = true;
        }
        this.arrCus = [];
        this.spawCustomer();
        this.schedule(this.spawCustomer, 4);
    };
    NewClass.prototype.createCoin = function (node, value) {
        var pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        var coin = cc.instantiate(this.preCoin);
        coin.parent = this.node;
        coin.position = pos.add(cc.v3(0, 50));
        globalThis.gold += value;
    };
    NewClass.prototype.moveCus = function (value) {
        var _this = this;
        cc.audioEngine.play(this.soundCoin, false, 1);
        if (value == 1) {
            var char = this.arrCrunch[0].getChildByName("char");
            char.active = true;
            this.arrCus[0].active = false;
        }
        else if (value == 2) {
            this.arrCus[1].active = false;
            var char = this.dayTa1.getChildByName("char");
            char.active = true;
        }
        else if (value == 3) {
            this.arrCus[2].active = false;
            var char = this.boxing1.getChildByName("char");
            char.active = true;
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
    // onHind() {
    //     let index = 1;
    //     this.schedule(() => {
    //         // tắt tất cả trước
    //         for (let i = 1; i < this.arrCus.length; i++) {
    //             let pop = this.arrCus[i].getChildByName("pop");
    //             let hand = pop.getChildByName("hand");
    //             hand.active = false;
    //         }
    //         // bật cái hiện tại
    //         let pop = this.arrCus[index].getChildByName("pop");
    //         let hand = pop.getChildByName("hand");
    //         hand.active = true;
    //         index++;
    //         if (index >= this.arrCus.length) {
    //             index = 1; // quay lại từ đầu
    //         }
    //     }, 0.5);
    // }
    // isCus = 0
    // moveCame1() {
    //     cc.tween(this.game).to(0.5, { scale: 2.3 }).start()
    //     // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //     cc.tween(this.game).to(0.5, { position: cc.v3(200, -550) }).start()
    //     this.scheduleOnce(() => {
    //         this.guildUpgrade.active = true
    //     }, 0.5)
    //     this.isCus = 0
    // }
    NewClass.prototype.update = function (dt) {
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    };
    // btn_upgrade() {
    //     cc.audioEngine.play(this.soundConfirm, false, 1)
    //     this.isCountStep++
    //     if (this.isCountStep < 5) {
    //         this.fillBar.fillRange = this.isCountStep * 0.25
    //         // this.listE.children[this.isCountStep - 1].active = true
    //     }
    //     let btn = this.guildUpgrade.children[2].getChildByName("Button")
    //     btn.active = true;
    //     btn.position = cc.v3(60 * this.isCountStep, -17.93)
    //     if (this.isCus == 0) {
    //         let char = this.listCrunch.children[0].getChildByName("char")
    //         char.getChildByName("vfx").getComponent(cc.Animation).play()
    //         char.getComponent(cc.Animation).play()
    //         if (this.isCountStep == 5) {
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //             char.getChildByName("notiBonusCoin2").active = true
    //             char.getComponent("cusGym").happy()
    //             char.position = cc.v3(-67, -50)
    //             this.guildUpgrade.active = false;
    //             this.move4()
    //             globalThis.gold += 200
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()
    //             }, 1)
    //         }
    //     }
    //     else if (this.isCus == 1) {
    //         let char = this.boxing1.children[0]
    //         char.getChildByName("vfx").getComponent(cc.Animation).play()
    //         if (this.isCountStep == 5) {
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //             globalThis.gold += 200
    //             char.getChildByName("notiBonusCoin2").active = true
    //             char.getComponent("cusGym").happy()
    //             this.guildUpgrade.active = false;
    //             // this.move4()
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()
    //             }, 1)
    //         }
    //         if (this.isCountStep == 4) {
    //             this.linkToStore.active = true
    //         }
    //     }
    //     else if (this.isCus == 2) {
    //         let char = this.boxing2.children[0]
    //         char.getChildByName("vfx").getComponent(cc.Animation).play()
    //         // if (this.isCountStep == 2) {
    //         //     this.linkToStore.active = true
    //         // }
    //     }
    // }
    NewClass.prototype.onEndgame = function () {
        cc.audioEngine.play(this.soundWin, false, 1);
        this.endCard.active = true;
        this.linkToStore.active = true;
    };
    // move2() {
    //     this.scheduleOnce(() => {
    //         cc.tween(this.game).to(0.5, { scale: 1 }).start()
    //         // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //         cc.tween(this.game).to(0.5, { position: cc.v3(0, 0) }).start()
    //         this.isCus = 1
    //         this.isCountStep = 0
    //         this.fillBar.fillRange = 0
    //     }, 1)
    //     this.scheduleOnce(() => {
    //         this.move3()
    //     }, 1.7)
    // }
    // move3() {
    //     cc.tween(this.game).to(0.5, { scale: 2.7 }).start()
    //     // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //     cc.tween(this.game).to(0.5, { position: cc.v3(-1973, -120) }).start()
    //     this.scheduleOnce(() => {
    //         this.guildUpgrade.active = true
    //     }, 0.5)
    // }
    // move4() {
    //     this.scheduleOnce(() => {
    //         cc.tween(this.game).to(0.5, { scale: 1 }).start()
    //         // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //         cc.tween(this.game).to(0.5, { position: cc.v3(0, 0) }).start()
    //         this.isCus = 2
    //         this.isCountStep = 0
    //         this.fillBar.fillRange = 0
    //     }, 1)
    //     this.scheduleOnce(() => {
    //         this.move5()
    //     }, 1.7)
    // }
    // move5() {
    //     cc.tween(this.game).to(1, { scale: 1.7 }).start()
    //     // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //     cc.tween(this.game).to(1, { position: cc.v3(1100, 100) }).start()
    //     // let text = this.guildUpgrade.getChildByName("New Label")
    //     // text.getComponent(cc.Label).string = "Last one! Finish strong!"
    //     this.scheduleOnce(() => {
    //         this.guildUpgrade2.active = true
    //     }, 0.5)
    // }
    // dem1 = 0;
    // dem2 = 0
    // btn_upgrade2(event, value) {
    //     cc.audioEngine.play(this.soundConfirm, false, 1)
    //     if (value == "1") {
    //         let fill = this.guildUpgrade2.getChildByName("bgTrain2").children[1]
    //         let btn = this.guildUpgrade2.getChildByName("bgTrain2").getChildByName("Button")
    //         let char = this.dayTa1.children[0]
    //         char.getComponent(cc.Animation).play();
    //         char.getChildByName("vfx").getComponent(cc.Animation).play();
    //         this.dem1++
    //         fill.getComponent(cc.Sprite).fillRange = this.dem1 * 0.2
    //         btn.active = true;
    //         btn.position = cc.v3(50 * this.dem1, -17.93)
    //         if (this.dem1 == 5) {
    //             event.currentTarget.active = false
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //             char.getChildByName("notiBonusCoin2").active = true
    //             char.getComponent("cusGym").happy()
    //             char.position = cc.v3(-81, -45)
    //             globalThis.gold += 200
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()
    //             }, 1)
    //         }
    //     }
    //     else {
    //         let fill = this.guildUpgrade2.getChildByName("bgTrain").children[1]
    //         let char = this.boxing2.children[0]
    //         let btn = this.guildUpgrade2.getChildByName("bgTrain").getChildByName("Button")
    //         char.getComponent(cc.Animation).play();
    //         char.getChildByName("vfx").getComponent(cc.Animation).play();
    //         this.dem2++
    //         btn.active = true;
    //         btn.position = cc.v3(50 * this.dem2, -17.93)
    //         fill.getComponent(cc.Sprite).fillRange = this.dem2 * 0.2
    //         if (this.dem2 == 5) {
    //             event.currentTarget.active = false
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //             char.getChildByName("notiBonusCoin2").active = true
    //             char.getComponent("cusGym").happy()
    //             globalThis.gold += 200
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()
    //             }, 1)
    //         }
    //     }
    //     if (this.dem1 == 5 && this.dem2 == 5) {
    //         cc.tween(this.guildUpgrade2).to(0.26, { opacity: 0 }).call(() => {
    //             this.guildUpgrade2.active = false
    //         }).start()
    //         this.scheduleOnce(() => {
    //             this.move2()
    //         }, 0.8)
    //     }
    // }
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.guildUpgrade.scale = (logic) ? 2.4 : 1;
        this.guildUpgrade2.scale = (logic) ? 1.6 : 1;
        this.camera.node.position = cc.v3(0, 0);
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
            this.camera.zoomRatio = 1.7;
            this.camera.node.position = cc.v3(150, 0);
            this.phaohoa.scale = (logic) ? 7 : 3;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.coinBar.getComponent(cc.Widget).top = 77 + 30;
                this.logo.getComponent(cc.Widget).top = 48 + 30;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.4;
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
                this.camera.zoomRatio = 0.8;
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
    ], NewClass.prototype, "textGuild1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "door", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listIconPt", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listPt", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCoin", void 0);
    __decorate([
        property([cc.Prefab])
    ], NewClass.prototype, "listPrePt", void 0);
    __decorate([
        property([cc.Prefab])
    ], NewClass.prototype, "listPreCus", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrMayDay", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();