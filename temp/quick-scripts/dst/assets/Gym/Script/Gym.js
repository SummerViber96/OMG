
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
        _this.arrPosDone = [cc.v3(-213.047, -138.697), cc.v3(-90, -69)];
        // @property(cc.Node)
        // listCrunch:cc.Node=null
        _this.arrPosCus = [];
        _this.arrCus = [];
        _this.arrIconPt = [];
        _this.isStep = 0;
        _this.arrCrunch = [];
        _this.isHind = false;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.isCloseTut = false;
        _this.isCountAction = 0;
        _this.isCus = 0;
        _this.isCountStep = 0;
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
        this.scheduleOnce(function () {
            for (var i = 0; i < 3; i++) {
                var child = _this.listCusNode.children[i];
                child.getChildByName("pop").active = true;
            }
            _this.textGuild1.active = true;
            // this.listIconPt.active=true
        }, 0.6);
        // this.scheduleOnce(() => {
        //     this.npc.active = true
        // }, 1)
        // this.scheduleOnce(() => {
        //     cc.tween(this.npc).by(0.2, { opacity: -255, position: cc.v3(0, -80) }).call(() => {
        //         this.npc.active = false
        //     }).start()
        // }, 4)
        for (var i = 0; i < this.listCusNode.childrenCount; i++) {
            this.arrCus.push(this.listCusNode.children[i]);
        }
        for (var i = 0; i < this.listIconPt.children[0].childrenCount; i++) {
            this.arrIconPt.push(this.listIconPt.children[0].children[i]);
        }
        for (var i = 0; i < this.listCrunch.childrenCount; i++) {
            this.arrCrunch.push(this.listCrunch.children[i]);
        }
        // this.spawFistCustomer()
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
        }).start();
    };
    NewClass.prototype.doCus = function (tag) {
        var _this = this;
        cc.audioEngine.play(this.soundClick, false, 1);
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
    };
    NewClass.prototype.offIconPt = function (node) {
        node.children[1].active = true;
        node.getChildByName("hand").active = false;
    };
    NewClass.prototype.clickPt = function (event, tag) {
        var _this = this;
        var pt = null;
        cc.audioEngine.play(this.soundClick, false, 1);
        var btn = event.currentTarget.getComponent(cc.Button);
        btn.enabled = false;
        if (this.isStep == 1) {
            btn.enabled = false;
            cc.tween(this.textGuild1).to(0.5, { opacity: 0 }).start();
            pt = this.listPt.children[0];
            this.isStep = 2;
            pt.active = true;
            this.door.getComponent(cc.Animation).play("door_open");
            var anim_1 = pt.children[0].getComponent(sp.Skeleton);
            anim_1.setAnimation(0, "WalkOutL", true);
            anim_1.timeScale = 2;
            cc.tween(pt).to(2.6, { position: cc.v3(-1.6, -92) }).to(0.5, { position: cc.v3(-100, -80) }).call(function () {
                anim_1.setAnimation(0, "WorkFL", true);
                anim_1.timeScale = 1;
                _this.activeCus(0);
            }).start();
            this.scheduleOnce(function () {
                _this.arrCus[1].getChildByName("pop").getChildByName("hand").active = true;
                _this.arrCus[1].getChildByName("pop").getComponent(cc.Button).enabled = true;
            }, 2);
            this.scheduleOnce(function () {
                pt.parent = _this.node;
            }, 0.3);
            this.scheduleOnce(function () {
                _this.door.getComponent(cc.Animation).play("door_close");
            }, 0.7);
            this.offIconPt(this.arrIconPt[0]);
        }
        else if (this.isStep == 2) {
            pt = this.listPt.children[0];
            this.isStep = 3;
            pt.active = true;
            this.door.getComponent(cc.Animation).play("door_open");
            var anim_2 = pt.children[0].getComponent(sp.Skeleton);
            anim_2.setAnimation(0, "WalkOutL", true);
            anim_2.timeScale = 2;
            cc.tween(pt).to(0.4, { position: cc.v3(310, 52) }).call(function () {
                pt.scaleX = -1;
            }).to(2, { position: cc.v3(698.565, -184.59) }).call(function () {
                pt.scaleX = 1;
            }).to(1.5, { position: cc.v3(348.565, -333) }).call(function () {
                anim_2.setAnimation(0, "WorkFL", true);
                anim_2.timeScale = 1;
                _this.activeCus(1);
            }).start();
            this.scheduleOnce(function () {
                _this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true;
                _this.arrCus[2].getChildByName("pop").getComponent(cc.Button).enabled = true;
            }, 2);
            this.scheduleOnce(function () {
                pt.parent = _this.node;
            }, 0.2);
            this.scheduleOnce(function () {
                _this.door.getComponent(cc.Animation).play("door_close");
            }, 0.7);
            this.offIconPt(this.arrIconPt[1]);
        }
        else if (this.isStep == 3) {
            pt = this.listPt.children[0];
            this.isStep = 4;
            pt.active = true;
            this.door.getComponent(cc.Animation).play("door_open");
            var anim_3 = pt.children[0].getComponent(sp.Skeleton);
            anim_3.setAnimation(0, "WalkOutL", true);
            anim_3.timeScale = 2;
            cc.tween(pt).to(0.4, { position: cc.v3(310, 52) }).call(function () {
                pt.scaleX = -1;
            }).to(2, { position: cc.v3(850, -120) }).call(function () {
                anim_3.setAnimation(0, "WorkFL", true);
                anim_3.timeScale = 1;
                pt.scaleX = 1;
                _this.activeCus(2);
            }).start();
            this.scheduleOnce(function () {
                _this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true;
            }, 2);
            this.scheduleOnce(function () {
                pt.parent = _this.node;
            }, 0.2);
            this.scheduleOnce(function () {
                _this.door.getComponent(cc.Animation).play("door_close");
            }, 0.7);
            this.offIconPt(this.arrIconPt[2]);
        }
    };
    NewClass.prototype.activeCus = function (value) {
        var char = null;
        switch (value) {
            case 0:
                char = this.arrCrunch[0].getChildByName("char");
                char.getComponent("cusGym").gapBung();
                char.position = cc.v3(1, -16);
                this.arrCrunch[0].children[0].active = false;
                this.arrCrunch[0].children[1].active = true;
                this.createCoin(char, 4);
                break;
            case 1:
                char = this.dayTa1.getChildByName("char");
                char.getComponent("cusGym").dayTa();
                this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                this.dayTa1.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                char.position = cc.v3(-15.771 + 14, 7 - 5);
                this.createCoin(char, 4);
                break;
            case 2:
                this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                char = this.boxing1.getChildByName("char");
                char.getComponent("cusGym").boxing();
                this.createCoin(char, 4);
                break;
        }
        this.scheduleOnce(function () {
            // this.moveCusOut()
        }, 1.5);
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
            // this.boxing1.children[0].getChildByName("notiBonusCoin").active = true
            // globalThis.gold += 2
            // this.arrCus[2].active = false
            // this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
            // this.boxing1.children[0].active = true
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
            var char_1 = this.listCrunch.children[0].getChildByName("char");
            char_1.getChildByName("vfx").getComponent(cc.Animation).play();
            char_1.getComponent(cc.Animation).play();
            if (this.isCountStep == 5) {
                cc.audioEngine.play(this.soundCoin, false, 1);
                char_1.getChildByName("notiBonusCoin2").active = true;
                char_1.getComponent("cusGym").happy();
                char_1.position = cc.v3(-67, -50);
                this.guildUpgrade.active = false;
                this.move4();
                globalThis.gold += 200;
                this.phaohoa.getComponent(cc.Animation).play();
                this.scheduleOnce(function () {
                    cc.tween(char_1).to(0.3, { opacity: 0 }).start();
                }, 1);
            }
        }
        else if (this.isCus == 1) {
            var char_2 = this.boxing1.children[0];
            char_2.getChildByName("vfx").getComponent(cc.Animation).play();
            if (this.isCountStep == 5) {
                cc.audioEngine.play(this.soundCoin, false, 1);
                globalThis.gold += 200;
                char_2.getChildByName("notiBonusCoin2").active = true;
                char_2.getComponent("cusGym").happy();
                this.guildUpgrade.active = false;
                // this.move4()
                this.phaohoa.getComponent(cc.Animation).play();
                this.scheduleOnce(function () {
                    cc.tween(char_2).to(0.3, { opacity: 0 }).start();
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
    NewClass.prototype.onEndgame = function () {
        cc.audioEngine.play(this.soundWin, false, 1);
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
            var char_3 = this.dayTa1.children[0];
            char_3.getComponent(cc.Animation).play();
            char_3.getChildByName("vfx").getComponent(cc.Animation).play();
            this.dem1++;
            fill.getComponent(cc.Sprite).fillRange = this.dem1 * 0.2;
            btn.active = true;
            btn.position = cc.v3(50 * this.dem1, -17.93);
            if (this.dem1 == 5) {
                event.currentTarget.active = false;
                cc.audioEngine.play(this.soundCoin, false, 1);
                char_3.getChildByName("notiBonusCoin2").active = true;
                char_3.getComponent("cusGym").happy();
                char_3.position = cc.v3(-81, -45);
                globalThis.gold += 200;
                this.phaohoa.getComponent(cc.Animation).play();
                this.scheduleOnce(function () {
                    cc.tween(char_3).to(0.3, { opacity: 0 }).start();
                }, 1);
            }
        }
        else {
            var fill = this.guildUpgrade2.getChildByName("bgTrain").children[1];
            var char_4 = this.boxing2.children[0];
            var btn = this.guildUpgrade2.getChildByName("bgTrain").getChildByName("Button");
            char_4.getComponent(cc.Animation).play();
            char_4.getChildByName("vfx").getComponent(cc.Animation).play();
            this.dem2++;
            btn.active = true;
            btn.position = cc.v3(50 * this.dem2, -17.93);
            fill.getComponent(cc.Sprite).fillRange = this.dem2 * 0.2;
            if (this.dem2 == 5) {
                event.currentTarget.active = false;
                cc.audioEngine.play(this.soundCoin, false, 1);
                char_4.getChildByName("notiBonusCoin2").active = true;
                char_4.getComponent("cusGym").happy();
                globalThis.gold += 200;
                this.phaohoa.getComponent(cc.Animation).play();
                this.scheduleOnce(function () {
                    cc.tween(char_4).to(0.3, { opacity: 0 }).start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXEd5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtBQUVyQjtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZvQkM7UUEzb0JHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLG1CQUFhLEdBQVksSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixZQUFNLEdBQWEsSUFBSSxDQUFBO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBSXZCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFDMUIsZ0JBQVUsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNwRCxxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLGVBQVMsR0FBRyxFQUFFLENBQUE7UUFDZCxZQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ1gsZUFBUyxHQUFHLEVBQUUsQ0FBQTtRQUNkLFlBQU0sR0FBRyxDQUFDLENBQUE7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ2QsWUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNkLGNBQVEsR0FBRyw4QkFBOEIsQ0FBQTtRQWdFekMsZ0JBQVUsR0FBRyxLQUFLLENBQUE7UUFzSWxCLG1CQUFhLEdBQUcsQ0FBQyxDQUFBO1FBNEdqQixXQUFLLEdBQUcsQ0FBQyxDQUFBO1FBbUJULGlCQUFXLEdBQUcsQ0FBQyxDQUFBO1FBcUhmLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxVQUFJLEdBQUcsQ0FBQyxDQUFBOztJQTBJWixDQUFDO0lBbmtCRyx3QkFBSyxHQUFMO1FBQUEsaUJBK0JDO1FBOUJHLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxXQUFXLEVBQUU7WUFDOUIsTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDMUM7UUFDRCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTthQUM1QztZQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUM3Qiw4QkFBOEI7UUFDbEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixRQUFRO1FBQ1IsNEJBQTRCO1FBQzVCLDBGQUEwRjtRQUMxRixrQ0FBa0M7UUFDbEMsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNqRDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDL0Q7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNuRDtRQUNELDBCQUEwQjtJQUM5QixDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCO1FBQUEsaUJBNkJDO1FBNUJHLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDeEIsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUMxRDtRQUNELElBQUksQ0FBQyxZQUFZLENBQUM7b0NBQ0wsQ0FBQztnQkFDTixJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUN4QixHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDbEQsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO29CQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ1IsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTt3QkFDcEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7cUJBRW5EO2dCQUNMLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBOztZQVZuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFBakIsQ0FBQzthQVdUO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUN4QixHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTthQUU5RDtRQUVMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNQLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDM0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFBQSxpQkFRQztRQVBHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7UUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3hFLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUVkLENBQUM7SUFDRCx3QkFBSyxHQUFMLFVBQU0sR0FBRztRQUFULGlCQXNCQztRQXJCRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUMxRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDVjthQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUd6RDthQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUd6RDtJQUNMLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsSUFBSTtRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDOUMsQ0FBQztJQUNELDBCQUFPLEdBQVAsVUFBUSxLQUFLLEVBQUUsR0FBRztRQUFsQixpQkFnR0M7UUEvRkcsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDOUMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7WUFDbkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pELEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtZQUNmLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDdEQsSUFBSSxNQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ25ELE1BQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUN0QyxNQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtZQUNsQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM5RixNQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQ3BDLE1BQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO2dCQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRXJCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDekUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQy9FLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFBO1lBRXpCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNQLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUUzRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUVwQzthQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdkIsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1lBQ2YsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN0RCxJQUFJLE1BQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDbkQsTUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3RDLE1BQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNwRCxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ2xCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqRCxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtZQUNqQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDaEQsTUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNwQyxNQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtnQkFDbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUVyQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNWLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQ3pFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUUvRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQTtZQUN6QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFFM0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDcEM7YUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtZQUNmLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDdEQsSUFBSSxNQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ25ELE1BQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUN0QyxNQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtZQUNsQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDcEQsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNsQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUMsTUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNwQyxNQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtnQkFDbEIsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7Z0JBQ2IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNWLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDN0UsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUE7WUFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBRTNELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2YsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN4QixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNqRixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBRXhCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUV2RSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUV4QixNQUFNO1NBQ2I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2Qsb0JBQW9CO1FBQ3hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUVYLENBQUM7SUFDRCw2QkFBVSxHQUFWLFVBQVcsSUFBSSxFQUFFLEtBQUs7UUFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDMUQsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDekMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3JDLFVBQVUsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFBO0lBQzVCLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsS0FBSztRQUFiLGlCQTBDQztRQXpDRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM3QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDaEM7YUFDSSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQzdCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBRXJCO2FBQ0ksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUNsQix5RUFBeUU7WUFDekUsdUJBQXVCO1lBQ3ZCLGdDQUFnQztZQUVoQywwRUFBMEU7WUFDMUUseUNBQXlDO1NBQzVDO2FBQ0ksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3RFLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFBO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUU3QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUN6QztRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBRXBCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNSO1FBQ0QsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7U0FDckI7SUFDTCxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsbUJBQW1CO1lBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxLQUFHLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLElBQUksTUFBSSxHQUFHLEtBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RDLE1BQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1lBRUQsbUJBQW1CO1lBQ25CLElBQUksR0FBRyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25ELElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkIsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEtBQUssSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjthQUNoQztRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQUEsaUJBUUM7UUFQRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbkQsNkRBQTZEO1FBQzdELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbkUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNuQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7YUFDSTtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1lBQ2hELDBEQUEwRDtTQUU3RDtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNuRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUksTUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUM3RCxNQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDNUQsTUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFFdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBRTdDLE1BQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUNuRCxNQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNuQyxNQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ1osVUFBVSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUE7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFFbEQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ1I7U0FDSjthQUNJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFbkMsTUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1lBRTVELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUU3QyxVQUFVLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQTtnQkFFdEIsTUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBRW5ELE1BQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDakMsZUFBZTtnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7Z0JBQzlDLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ2xELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTthQUVSO1lBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2FBQ2pDO1NBQ0o7YUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUU1RCwrQkFBK0I7WUFDL0IscUNBQXFDO1lBQ3JDLElBQUk7U0FDUDtJQUNMLENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtJQUNsQyxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNqRCw2REFBNkQ7WUFDN0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDOUQsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7WUFDZCxLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtZQUNwQixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFFOUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNoQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ25ELDZEQUE2RDtRQUM3RCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDckUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNuQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNqRCw2REFBNkQ7WUFDN0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDOUQsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7WUFDZCxLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtZQUNwQixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDOUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNoQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUFBLGlCQVNDO1FBUkcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2pELDZEQUE2RDtRQUM3RCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNqRSwyREFBMkQ7UUFDM0Qsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDcEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ1gsQ0FBQztJQUdELCtCQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsS0FBSztRQUF6QixpQkFnRUM7UUEvREcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDaEQsSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3BFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNoRixJQUFJLE1BQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxNQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QyxNQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFBO1lBQ3hELEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzVDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDbEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBRTdDLE1BQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUNuRCxNQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNuQyxNQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDL0IsVUFBVSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUE7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFFbEQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBRVI7U0FDSjthQUNJO1lBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ25FLElBQUksTUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ25DLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUUvRSxNQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QyxNQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ1gsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFBO1lBQ3hELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFFbEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBRTdDLE1BQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUNuRCxNQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNuQyxVQUFVLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQTtnQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO2dCQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUVsRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFFUjtTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNsQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN2RCxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDckMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDVixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNoQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDVjtJQUNMLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFFekIsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUN6QyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUMxQyxpQ0FBaUM7UUFDakMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QyxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFFaEMsNENBQTRDO1lBRTVDLHNEQUFzRDtZQUN0RCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV0RSxtQ0FBbUM7WUFDbkMsSUFBTSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsU0FBUztZQUNsRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFVLFNBQVM7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNwQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsU0FBUyxFQUFFO2dCQUMzRCwrQkFBK0I7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFBO2FBQ2xEO2lCQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLEdBQUcsU0FBUyxFQUFFO2dCQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTthQUVoQztTQUNKO2FBQ0k7WUFDRCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUVoQyxzREFBc0Q7WUFDdEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdEUsbUNBQW1DO1lBQ25DLElBQU0scUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVM7WUFDbEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBVSxTQUFTO1lBRWpELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsR0FBRyxTQUFTLEVBQUU7YUFFOUQ7aUJBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsR0FBRyxTQUFTLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTthQUM5QjtTQUNKO0lBR0wsQ0FBQztJQTFvQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDRjtJQUVoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQTlEVCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNm9CNUI7SUFBRCxlQUFDO0NBN29CRCxBQTZvQkMsQ0E3b0JxQyxFQUFFLENBQUMsU0FBUyxHQTZvQmpEO2tCQTdvQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5nb2xkID0gMTAwXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5wYzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbnBjMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1c05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RQbGFjZVBvczogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENydW5jaDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94aW5nMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJveGluZzI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQkc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ29uZmlybTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpbGRVcGdyYWRlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZFVwZ3JhZGUyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvaG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0RTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ29pbjogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRheVRhMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvaW5CYXI6IGNjLk5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJY29uUHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UHQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ29pbjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIGFyclBvc0RvbmU9W2NjLnYzKC0yMTMuMDQ3LC0xMzguNjk3KSxjYy52MygtOTAsLTY5KV1cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbGlzdENydW5jaDpjYy5Ob2RlPW51bGxcclxuICAgIGFyclBvc0N1cyA9IFtdXHJcbiAgICBhcnJDdXMgPSBbXVxyXG4gICAgYXJySWNvblB0ID0gW11cclxuICAgIGlzU3RlcCA9IDBcclxuICAgIGFyckNydW5jaCA9IFtdXHJcbiAgICBpc0hpbmQgPSBmYWxzZVxyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQkcsIHRydWUsIDAuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXNOb2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkMS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdEljb25QdC5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgIH0sIDAuNilcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubnBjLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyB9LCAxKVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4odGhpcy5ucGMpLmJ5KDAuMiwgeyBvcGFjaXR5OiAtMjU1LCBwb3NpdGlvbjogY2MudjMoMCwgLTgwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubnBjLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyB9LCA0KVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMucHVzaCh0aGlzLmxpc3RDdXNOb2RlLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEljb25QdC5jaGlsZHJlblswXS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJJY29uUHQucHVzaCh0aGlzLmxpc3RJY29uUHQuY2hpbGRyZW5bMF0uY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3J1bmNoLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckNydW5jaC5wdXNoKHRoaXMubGlzdENydW5jaC5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zcGF3RmlzdEN1c3RvbWVyKClcclxuICAgIH1cclxuICAgIHNwYXdGaXN0Q3VzdG9tZXIoKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtjYy52Myg0MzgsIC0xNTkpLCBjYy52Myg1NzcsIC0yNTYpXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmUodGhpcy5hcnJQb3NDdXNbaV0sIDIuNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2pdXHJcbiAgICAgICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLm1vdmUoYXJyW2pdLCAxICsgMSAqIGopXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5zaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5zaG93UG9wKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEuMSArIDEgKiBqKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAyOyBqIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tqXVxyXG4gICAgICAgICAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5tb3ZlKHRoaXMuYXJyUG9zQ3VzW2ogLSAyXSwgMS42KVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAyLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5wYzIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDQpXHJcbiAgICB9XHJcbiAgICBpc0Nsb3NlVHV0ID0gZmFsc2VcclxuICAgIGJ0bl9jbG9zZVR1dCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDbG9zZVR1dCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNDbG9zZVR1dCA9IHRydWVcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5wYykuYnkoMC4zLCB7IG9wYWNpdHk6IC0yNTUsIHBvc2l0aW9uOiBjYy52MygwLCAtODApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5wYy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICB9XHJcbiAgICBkb0N1cyh0YWcpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5tb3ZlQ3VzKHRhZylcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEljb25QdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckljb25QdFswXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJJY29uUHRbMV0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYXJySWNvblB0WzFdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckljb25QdFsyXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hcnJJY29uUHRbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9mZkljb25QdChub2RlKSB7XHJcbiAgICAgICAgbm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjbGlja1B0KGV2ZW50LCB0YWcpIHtcclxuICAgICAgICBsZXQgcHQgPSBudWxsO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDEpIHtcclxuICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnRleHRHdWlsZDEpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgcHQgPSB0aGlzLmxpc3RQdC5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSAyXHJcbiAgICAgICAgICAgIHB0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5kb29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJkb29yX29wZW5cIilcclxuICAgICAgICAgICAgbGV0IGFuaW0gPSBwdC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa091dExcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgYW5pbS50aW1lU2NhbGUgPSAyXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHB0KS50bygyLjYsIHsgcG9zaXRpb246IGNjLnYzKC0xLjYsIC05MikgfSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtMTAwLCAtODApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXb3JrRkxcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGFuaW0udGltZVNjYWxlID0gMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoMClcclxuXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzFdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHB0LnBhcmVudCA9IHRoaXMubm9kZVxyXG5cclxuICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvb3JfY2xvc2VcIilcclxuXHJcbiAgICAgICAgICAgIH0sIDAuNylcclxuICAgICAgICAgICAgdGhpcy5vZmZJY29uUHQodGhpcy5hcnJJY29uUHRbMF0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHB0ID0gdGhpcy5saXN0UHQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gM1xyXG4gICAgICAgICAgICBwdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9vcl9vcGVuXCIpXHJcbiAgICAgICAgICAgIGxldCBhbmltID0gcHQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtPdXRMXCIsIHRydWUpXHJcbiAgICAgICAgICAgIGFuaW0udGltZVNjYWxlID0gMlxyXG4gICAgICAgICAgICBjYy50d2VlbihwdCkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygzMTAsIDUyKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHB0LnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIH0pLnRvKDIsIHsgcG9zaXRpb246IGNjLnYzKDY5OC41NjUsIC0xODQuNTkpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHQuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB9KS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKDM0OC41NjUsIC0zMzMpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXb3JrRkxcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGFuaW0udGltZVNjYWxlID0gMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoMSlcclxuXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwdC5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICAgICAgfSwgMC4yKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvb3JfY2xvc2VcIilcclxuXHJcbiAgICAgICAgICAgIH0sIDAuNylcclxuICAgICAgICAgICAgdGhpcy5vZmZJY29uUHQodGhpcy5hcnJJY29uUHRbMV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDMpIHtcclxuICAgICAgICAgICAgcHQgPSB0aGlzLmxpc3RQdC5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSA0XHJcbiAgICAgICAgICAgIHB0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5kb29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJkb29yX29wZW5cIilcclxuICAgICAgICAgICAgbGV0IGFuaW0gPSBwdC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa091dExcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgYW5pbS50aW1lU2NhbGUgPSAyXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHB0KS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKDMxMCwgNTIpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHQuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgfSkudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoODUwLCAtMTIwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV29ya0ZMXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBhbmltLnRpbWVTY2FsZSA9IDFcclxuICAgICAgICAgICAgICAgIHB0LnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ3VzKDIpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHQucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJkb29yX2Nsb3NlXCIpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjcpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmSWNvblB0KHRoaXMuYXJySWNvblB0WzJdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzQ291bnRBY3Rpb24gPSAwXHJcbiAgICBhY3RpdmVDdXModmFsdWUpIHtcclxuICAgICAgICBsZXQgY2hhciA9IG51bGxcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNoYXIgPSB0aGlzLmFyckNydW5jaFswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNvaW4oY2hhciwgNClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5kYXlUYSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRheVRhMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygtMTUuNzcxICsgMTQsIDcgLSA1KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2luKGNoYXIsIDQpXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYm94aW5nMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5ib3hpbmcxLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuYm94aW5nKClcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29pbihjaGFyLCA0KVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubW92ZUN1c091dCgpXHJcbiAgICAgICAgfSwgMS41KVxyXG5cclxuICAgIH1cclxuICAgIGNyZWF0ZUNvaW4obm9kZSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBsZXQgY29pbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XHJcbiAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY29pbi5wb3NpdGlvbiA9IHBvcy5hZGQoY2MudjMoMCwgNTApKVxyXG4gICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSB2YWx1ZVxyXG4gICAgfVxyXG4gICAgbW92ZUN1cyh2YWx1ZSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5hcnJDcnVuY2hbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1sxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjaGFyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB0aGlzLmJveGluZzEuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gZ2xvYmFsVGhpcy5nb2xkICs9IDJcclxuICAgICAgICAgICAgLy8gdGhpcy5hcnJDdXNbMl0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuYm94aW5nMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ib3hpbmcxLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDJcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbM10uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0NvdW50QWN0aW9uKys7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudEFjdGlvbiA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhbWUxKClcclxuXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNIaW5kID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uSGluZCgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdOG6r3QgdOG6pXQgY+G6oyB0csaw4bubY1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9wID0gdGhpcy5hcnJDdXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAgICAgICAgICAgICBoYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBi4bqtdCBjw6FpIGhp4buHbiB04bqhaVxyXG4gICAgICAgICAgICBsZXQgcG9wID0gdGhpcy5hcnJDdXNbaW5kZXhdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpO1xyXG4gICAgICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAgICAgICAgIGhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLmFyckN1cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMTsgLy8gcXVheSBs4bqhaSB04burIMSR4bqndVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuICAgIGlzQ3VzID0gMFxyXG4gICAgbW92ZUNhbWUxKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAyLjMgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMjAwLCAtNTUwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIHRoaXMuaXNDdXMgPSAwXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0NvdW50U3RlcCA9IDBcclxuICAgIGJ0bl91cGdyYWRlKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbmZpcm0sIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuaXNDb3VudFN0ZXArK1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwIDwgNSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gdGhpcy5pc0NvdW50U3RlcCAqIDAuMjVcclxuICAgICAgICAgICAgLy8gdGhpcy5saXN0RS5jaGlsZHJlblt0aGlzLmlzQ291bnRTdGVwIC0gMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ0biA9IHRoaXMuZ3VpbGRVcGdyYWRlLmNoaWxkcmVuWzJdLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uXCIpXHJcbiAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYnRuLnBvc2l0aW9uID0gY2MudjMoNjAgKiB0aGlzLmlzQ291bnRTdGVwLCAtMTcuOTMpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDdXMgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMubGlzdENydW5jaC5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDUpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTY3LCAtNTApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZTQoKVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDIwMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5waGFvaG9hLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoYXIpLnRvKDAuMywgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNDdXMgPT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuYm94aW5nMS5jaGlsZHJlblswXVxyXG5cclxuICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDUpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyMDBcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pbjJcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmhhcHB5KClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb3ZlNCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3VudFN0ZXAgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc0N1cyA9PSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdXHJcbiAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5pc0NvdW50U3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uRW5kZ2FtZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgbW92ZTIoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBzY2FsZTogMSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5nYW1lKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5pc0N1cyA9IDFcclxuICAgICAgICAgICAgdGhpcy5pc0NvdW50U3RlcCA9IDBcclxuICAgICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDBcclxuXHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZTMoKVxyXG4gICAgICAgIH0sIDEuNylcclxuICAgIH1cclxuICAgIG1vdmUzKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAyLjcgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTE5NzMsIC0xMjApIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICB9XHJcbiAgICBtb3ZlNCgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLmlzQ3VzID0gMlxyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnRTdGVwID0gMFxyXG4gICAgICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMFxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmU1KClcclxuICAgICAgICB9LCAxLjcpXHJcbiAgICB9XHJcbiAgICBtb3ZlNSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDEsIHsgc2NhbGU6IDEuNyB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMTEwMCwgMTAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gbGV0IHRleHQgPSB0aGlzLmd1aWxkVXBncmFkZS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKVxyXG4gICAgICAgIC8vIHRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIkxhc3Qgb25lISBGaW5pc2ggc3Ryb25nIVwiXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgIH1cclxuICAgIGRlbTEgPSAwO1xyXG4gICAgZGVtMiA9IDBcclxuICAgIGJ0bl91cGdyYWRlMihldmVudCwgdmFsdWUpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb25maXJtLCBmYWxzZSwgMSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGwgPSB0aGlzLmd1aWxkVXBncmFkZTIuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1RyYWluMlwiKS5jaGlsZHJlblsxXVxyXG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5ndWlsZFVwZ3JhZGUyLmdldENoaWxkQnlOYW1lKFwiYmdUcmFpbjJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIilcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmRheVRhMS5jaGlsZHJlblswXVxyXG4gICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVtMSsrXHJcbiAgICAgICAgICAgIGZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy5kZW0xICogMC4yXHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBidG4ucG9zaXRpb24gPSBjYy52Myg1MCAqIHRoaXMuZGVtMSwgLTE3LjkzKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZW0xID09IDUpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTgxLCAtNDUpXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZmlsbCA9IHRoaXMuZ3VpbGRVcGdyYWRlMi5nZXRDaGlsZEJ5TmFtZShcImJnVHJhaW5cIikuY2hpbGRyZW5bMV1cclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuZ3VpbGRVcGdyYWRlMi5nZXRDaGlsZEJ5TmFtZShcImJnVHJhaW5cIikuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIilcclxuXHJcbiAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwidmZ4XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5kZW0yKytcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5wb3NpdGlvbiA9IGNjLnYzKDUwICogdGhpcy5kZW0yLCAtMTcuOTMpXHJcbiAgICAgICAgICAgIGZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy5kZW0yICogMC4yXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlbTIgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kZW0xID09IDUgJiYgdGhpcy5kZW0yID09IDUpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ndWlsZFVwZ3JhZGUyKS50bygwLjI2LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZTIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUyKClcclxuICAgICAgICAgICAgfSwgMC44KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMVxyXG5cclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5zY2FsZSA9IChsb2dpYykgPyAyLjQgOiAxXHJcbiAgICAgICAgdGhpcy5ndWlsZFVwZ3JhZGUyLnNjYWxlID0gKGxvZ2ljKSA/IDEuNiA6IDFcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgdGhpcy5sYkNvaW4uc3RyaW5nID0gZ2xvYmFsVGhpcy5nb2xkLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLm5wYy5zY2FsZSA9IChsb2dpYykgPyAxLjcgOiAxXHJcbiAgICAgICAgdGhpcy5ucGMyLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICB0aGlzLm5wYy55ID0gKGxvZ2ljKSA/IC03MDAgOiAwXHJcbiAgICAgICAgdGhpcy5ucGMyLnkgPSAobG9naWMpID8gLTcwMCA6IDBcclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMS41IDogMC43XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDEuNSA6IDFcclxuICAgICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAobG9naWMpID8gMS41IDogMTtcclxuICAgICAgICB0aGlzLmNvaW5CYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNzc7XHJcbiAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDQ4XHJcbiAgICAgICAgLy8gdGhpcy5iYXJDb2luLnk9KGxvZ2ljKT80MDA6NDcwXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTcwLCAwKVxyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS43XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygxNTAsIDApXHJcbiAgICAgICAgICAgIHRoaXMucGhhb2hvYS5zY2FsZSA9IChsb2dpYykgPyA3IDogM1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrIGlwaG9uZXhcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuY29pbkJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA3NyArIDMwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDQ4ICsgMzBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjRcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLnNjYWxlID0gMS44XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19