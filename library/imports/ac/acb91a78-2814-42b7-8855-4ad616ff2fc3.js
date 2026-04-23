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
        _this.game = null;
        _this.guildUpgrade = null;
        _this.guildUpgrade2 = null;
        _this.phaohoa = null;
        _this.linkToStore = null;
        _this.listE = null;
        _this.lbCoin = null;
        _this.dayTa1 = null;
        _this.fillBar = null;
        _this.arrPosCus = [];
        _this.arrCus = [];
        _this.arrCrunch = [];
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
        cc.audioEngine.play(this.soundBG, true, 0.5);
        this.scheduleOnce(function () {
            _this.npc.active = true;
        }, 2);
        this.scheduleOnce(function () {
            cc.tween(_this.npc).by(0.2, { opacity: -255, position: cc.v3(0, -80) }).call(function () {
                _this.npc.active = false;
            }).start();
        }, 4);
        for (var i = 0; i < this.listCusNode.childrenCount; i++) {
            this.arrCus.push(this.listCusNode.children[i]);
        }
        for (var i = 0; i < this.listPlacePos.childrenCount; i++) {
            this.arrPosCus.push(this.listPlacePos.children[i].position);
        }
        for (var i = 0; i < this.listCrunch.childrenCount; i++) {
            this.arrCrunch.push(this.listCrunch.children[i]);
        }
        this.spawFistCustomer();
    };
    NewClass.prototype.spawFistCustomer = function () {
        var _this = this;
        var arr = [cc.v3(438, -159), cc.v3(577, -256)];
        for (var i = 0; i < this.arrCus.length; i++) {
            var cus = this.arrCus[i];
            cus.getComponent("cusGym").move(this.arrPosCus[i], 3);
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
        }, 3);
        this.scheduleOnce(function () {
            _this.npc2.active = true;
        }, 4.5);
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
        cc.tween(this.npc2).by(0.2, { opacity: -255, position: cc.v3(0, -80) }).call(function () {
            _this.npc.active = false;
        }).start();
        this.moveCus(tag);
    };
    NewClass.prototype.moveCus = function (value) {
        var _this = this;
        cc.audioEngine.play(this.soundCoin, false, 1);
        if (value == 1) {
            this.dayTa1.getChildByName("char").active = true;
            this.arrCus[0].active = false;
            this.dayTa1.getChildByName("char").getChildByName("notiBonusCoin").active = true;
            globalThis.gold += 2;
            this.scheduleOnce(function () {
                _this.dayTa1.getChildByName("char").getComponent("cusGym").dayTa();
                // this.dayTa1.getChildByName("char").position = cc.v3(1, -16)
                _this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                _this.dayTa1.children[2].getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                // this.dayTa1.children[0].active = false
                // this.arrCrunch[0].children[1].active = true
                // let fill = this.arrCrunch[0].getChildByName("ProgressBar").getComponent(cc.Sprite);
                // cc.tween(fill).to(2, { fillRange: 1 }).start()
                // this.schedule(() => {
                //     fill.fillRange = 0
                //     cc.tween(fill).to(2, { fillRange: 1 }).start()
                // }, 2)
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
            }, 2);
        }
        else if (value == 2) {
            this.arrCrunch[6].getChildByName("char").getChildByName("notiBonusCoin").active = true;
            globalThis.gold += 2;
            this.arrCrunch[6].getChildByName("char").active = true;
            this.arrCus[1].active = false;
            this.scheduleOnce(function () {
                _this.arrCrunch[6].getChildByName("char").getComponent("cusGym").gapBung();
                _this.arrCrunch[6].getChildByName("char").position = cc.v3(1, -16);
                _this.arrCrunch[6].children[0].active = false;
                _this.arrCrunch[6].children[1].active = true;
                var fill = _this.arrCrunch[1].getChildByName("ProgressBar").getComponent(cc.Sprite);
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
        if (this.isCus == 0) {
            var char_1 = this.dayTa1.getChildByName("char");
            char_1.getChildByName("vfx").getComponent(cc.Animation).play();
            char_1.getComponent(cc.Animation).play();
            if (this.isCountStep == 5) {
                cc.audioEngine.play(this.soundCoin, false, 1);
                char_1.getChildByName("notiBonusCoin2").active = true;
                char_1.getComponent("cusGym").happy();
                char_1.position = cc.v3(-67, -50);
                this.guildUpgrade.active = false;
                this.move2();
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
                this.move4();
                this.phaohoa.getComponent(cc.Animation).play();
                this.scheduleOnce(function () {
                    cc.tween(char_2).to(0.3, { opacity: 0 }).start();
                }, 1);
            }
        }
        else if (this.isCus == 2) {
            var char = this.boxing2.children[0];
            char.getChildByName("vfx").getComponent(cc.Animation).play();
            if (this.isCountStep == 2) {
                this.linkToStore.active = true;
            }
        }
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
        if (value == "1") {
            var fill = this.guildUpgrade2.getChildByName("bgTrain2").children[1];
            var char = this.arrCrunch[6].getChildByName("char");
            char.getComponent(cc.Animation).play();
            char.getChildByName("vfx").getComponent(cc.Animation).play();
            this.dem1++;
            fill.getComponent(cc.Sprite).fillRange = this.dem1 * 0.2;
        }
        else {
            var fill = this.guildUpgrade2.getChildByName("bgTrain").children[1];
            var char = this.boxing2.children[0];
            char.getComponent(cc.Animation).play();
            char.getChildByName("vfx").getComponent(cc.Animation).play();
            this.dem2++;
            fill.getComponent(cc.Sprite).fillRange = this.dem2 * 0.2;
        }
        if (this.dem1 == 4 || this.dem2 == 4) {
            this.linkToStore.active = true;
        }
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.guildUpgrade.scale = (logic) ? 2.4 : 1;
        this.guildUpgrade2.scale = (logic) ? 2.4 : 1;
        this.camera.node.position = cc.v3(0, 0);
        this.lbCoin.string = globalThis.gold.toString();
        this.npc.scale = (logic) ? 1.5 : 1;
        this.npc2.scale = (logic) ? 1.5 : 1;
        this.npc.getComponent(cc.Widget).bot = (logic) ? 300 : -1960.0;
        this.npc2.getComponent(cc.Widget).bot = (logic) ? 300 : -1960.0;
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
            this.camera.node.position = cc.v3(300, 0);
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                console.log("check iphonex");
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1;
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
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();