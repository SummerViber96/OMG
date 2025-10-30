"use strict";
cc._RF.push(module, '28cb8Ewg5xKqbr2Wz30wkLu', 'YC_11');
// scripts/YC_11.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.pop = null;
        _this.pop2 = null;
        _this.gate = null;
        _this.lbCountCus = null;
        _this.listCus = [];
        _this.listCus2 = [];
        _this.house0 = null;
        _this.house1 = null;
        _this.house2 = null;
        _this.house3 = null;
        _this.house4 = null;
        _this.popRed = null;
        _this.popRedGreen = null;
        _this.listHand = [];
        _this.tree = null;
        _this.text = null;
        _this.lbWood = null;
        _this.linkToStore = null;
        _this.woodBar = null;
        _this.soundUd = null;
        _this.soundBg = null;
        _this.soundGio = null;
        _this.soundClick = null;
        _this.soundChatGo = null;
        _this.soundlanhCanRang = null;
        _this.soundYee = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.phase = 0;
        _this.first = false;
        _this.max = 4;
        _this.countWood = 100;
        _this.arrPos = [cc.v3(-522, 558), cc.v3(-525, 445), cc.v3(-621, 398), cc.v3(-733, 400)];
        _this.idSOundGio = null;
        _this.isSoundGo = 0;
        _this.isvertical = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        this.screen();
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.5);
        cc.audioEngine.play(this.soundlanhCanRang, false, 0.8);
        this.scheduleOnce(function () {
            cc.tween(_this.camera).by(0.3, { zoomRatio: -0.3 }).call(function () {
                _this.pop.active = true;
                _this.scheduleOnce(function () {
                    _this.pop.getComponent(cc.Button).enabled = true;
                    _this.listHand[0].active = true;
                }, 0.2);
            }).start();
            cc.tween(_this.camera.node).to(0.3, { position: cc.v3(-200, 150) }).start();
        }, 0.2);
        this.idSOundGio = cc.audioEngine.play(this.soundGio, true, 1);
    };
    NewClass.prototype.btn_addCus = function () {
        var _this = this;
        if (this.phase == 0 && this.countCus > 3)
            return;
        if (this.phase == 1 && this.countCus > 8)
            return;
        this.pop.getComponent(cc.Animation).play("pop_click");
        cc.audioEngine.play(this.soundClick, false, 1);
        if (!this.first) {
            this.first = true;
            this.gate.getComponent(cc.Animation).play("cong_open");
        }
        if (this.phase == 0) {
            var child_1 = this.listCus[this.countCus];
            // child.getComponent(C).statusNode.active = false
            child_1.getComponent(C).anim.setAnimation(0, "Run", true);
            child_1.getComponent(C).getHappy();
            child_1.zIndex = this.countCus;
            cc.tween(child_1).to(2, { position: this.arrPos[this.countCus] }).call(function () {
                // child.getComponent(C).anim.setAnimation(0, "Idle", true);
                // child.getComponent(C).hungry()
                child_1.getComponent(C).anim.setAnimation(0, "Idle", true);
                child_1.getComponent(C).hungry();
            }).start();
            this.countCus++;
            this.lbCountCus.string = this.countCus.toString() + " /" + this.max.toString();
            if (this.phase == 0 && this.countCus == 4) {
                this.pop.getComponent(cc.Button).enabled = false;
                this.pop.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.popRed;
                this.listHand[0].active = false;
                cc.audioEngine.stop(this.idSOundGio);
                this.step1();
            }
        }
        else if (this.phase == 1) {
            var arrPos = [cc.v3(-431, 463), cc.v3(-450, 300), cc.v3(-626, 335), cc.v3(-784, 304), cc.v3(-700, 200)];
            var child_2 = this.listCus2[this.countCus - 4];
            var pos = arrPos[this.countCus - 4];
            this.countCus++;
            this.lbCountCus.string = this.countCus.toString() + " /" + this.max.toString();
            child_2.getComponent(C).statusNode.active = true;
            child_2.getComponent(C).anim.setAnimation(0, "Run", true);
            child_2.getComponent(C).getHappy();
            child_2.zIndex = this.countCus;
            cc.tween(child_2).to(2, { position: pos }).call(function () {
                // child.getComponent(C).anim.setAnimation(0, "Idle", true);
                // child.getComponent(C).hungry()
                child_2.getComponent(C).anim.setAnimation(0, "Idle", true);
            }).start();
            if (this.phase == 1 && this.countCus == 9) {
                this.pop.getComponent(cc.Button).enabled = false;
                this.pop.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.popRed;
                this.listHand[0].active = false;
                cc.tween(this.camera).by(0.5, { zoomRatio: -0.1 }).start();
                cc.tween(this.camera.node).to(0.5, { position: cc.v3(-1100, 550) }).call(function () {
                    _this.listHand[4].active = true;
                    _this.house3.getComponent(cc.Button).enabled = true;
                    _this.gate.getComponent(cc.Animation).play("cong_close");
                }).start();
                // this.step1()
            }
        }
    };
    NewClass.prototype.step1 = function () {
        var _this = this;
        this.scheduleOnce(function () {
            cc.tween(_this.camera.node).to(0.7, { position: cc.v3(-726, 400) }).start();
            _this.gate.getComponent(cc.Animation).play("cong_close");
        }, 0.3);
        this.scheduleOnce(function () {
            cc.tween(_this.camera.node).to(0.4, { position: cc.v3(-1571, 140) }).call(function () {
                _this.house1.getComponent(cc.Button).enabled = true;
                _this.listHand[1].active = true;
            }).start();
        }, 2.3);
    };
    NewClass.prototype.btn_clickHouse1 = function () {
        var _this = this;
        cc.audioEngine.play(this.soundUd, false, 1);
        this.listHand[1].active = false;
        this.house1.getComponent(cc.Animation).play("house_show");
        this.house1.getChildByName("smoke").active = true;
        this.house1.getComponent(cc.Button).enabled = false;
        var arrPos = [cc.v3(-1158, 19), cc.v3(-1646, 212)];
        var cus = this.listCus[3];
        cus.getComponent(C).anim.setAnimation(0, "Run", true);
        cc.tween(cus).to(1.2, { position: cc.v3(-1158, 19) }).to(1.2, { position: cc.v3(-1600, 212) }).call(function () {
            cus.scaleX = -0.65;
            cus.getComponent(C).anim.setAnimation(0, "ChatCay", true);
            _this.cutTree();
        }).start();
    };
    NewClass.prototype.cutTree = function () {
        var _this = this;
        this.schedule(function () {
            if (_this.isSoundGo < 3) {
                _this.isSoundGo++;
                cc.audioEngine.play(_this.soundChatGo, false, 1);
            }
            _this.tree.getComponent(cc.Animation).play();
            _this.text.play();
            _this.scheduleOnce(function () {
                _this.countWood += 100;
            }, 0.2);
        }, 0.9);
        this.scheduleOnce(function () {
            _this.pop2.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = _this.popRedGreen;
            // cc.audioEngine.stop(this.isSoundGo)
            cc.tween(_this.camera.node).to(0.6, { position: cc.v3(-726, 400) }).call(function () {
                _this.listHand[2].active = true;
                _this.pop2.getComponent(cc.Button).enabled = true;
            }).start();
        }, 2);
    };
    NewClass.prototype.btn_click2 = function () {
        var _this = this;
        cc.audioEngine.play(this.soundUd, false, 1);
        cc.audioEngine.play(this.soundYee, false, 1);
        for (var _i = 0, _a = this.listCus; _i < _a.length; _i++) {
            var child = _a[_i];
            child.getComponent(C).happy();
        }
        this.listHand[2].active = false;
        this.pop2.getComponent(cc.Button).enabled = false;
        this.pop2.getComponent(cc.Animation).play("pop_close");
        this.house0.getComponent(cc.Animation).play("house_show");
        this.house0.getChildByName("smoke").active = true;
        cc.tween(this.camera.node).to(0.6, { position: cc.v3(-250, 825) }).call(function () {
            _this.listHand[3].active = true;
            _this.house2.getComponent(cc.Button).enabled = true;
        }).start();
        cc.tween(this.camera).by(0.6, { zoomRatio: -0.1 }).start();
    };
    NewClass.prototype.btn_clickhouse2 = function () {
        var _this = this;
        cc.audioEngine.play(this.soundUd, false, 1);
        this.house2.getComponent(cc.Button).enabled = false;
        this.house2.getComponent(cc.Animation).play("house_show");
        this.house2.getChildByName("smoke").active = true;
        this.listHand[3].active = false;
        cc.tween(this.camera.node).to(0.6, { position: cc.v3(-0, 0) }).call(function () {
            _this.pop.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = _this.popRedGreen;
            _this.max = 9;
            _this.lbCountCus.string = _this.countCus.toString() + " /" + _this.max.toString();
            _this.phase = 1;
            _this.pop.getComponent(cc.Button).enabled = true;
            _this.listHand[0].active = true;
            _this.first = false;
        }).start();
    };
    NewClass.prototype.btn_clickhouse3 = function () {
        var _this = this;
        cc.audioEngine.play(this.soundUd, false, 1);
        this.house3.getComponent(cc.Button).enabled = false;
        this.house3.getComponent(cc.Animation).play("house_show");
        this.house3.getChildByName("smoke").active = true;
        this.listHand[4].active = false;
        cc.tween(this.camera).by(0.6, { zoomRatio: +0.2 }).call(function () {
            //     this.house4.getComponent(cc.Button).enabled = true;
            //     this.listHand[5].active = true
        }).start();
        cc.tween(this.camera.node).by(0.6, { position: cc.v3(500, 100) }).call(function () {
            _this.house4.getComponent(cc.Button).enabled = true;
            _this.listHand[5].active = true;
        }).start();
        // this.listHand[3].active = false
        // cc.tween(this.camera.node).to(0.6, { position: cc.v3(-0, 0) }).call(() => {
        //     this.pop.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.popRedGreen;
        //     this.max = 9
        //     this.lbCountCus.string = this.countCus.toString() + " /" + this.max.toString()
        //     this.phase = 1
        //     this.pop.getComponent(cc.Button).enabled = true;
        //     this.listHand[0].active = true;
        //     this.first = false;
        // }).start()
    };
    NewClass.prototype.btn_clickhouse4 = function () {
        var _this = this;
        cc.audioEngine.play(this.soundUd, false, 1);
        this.listHand[5].active = false;
        this.house4.getComponent(cc.Button).enabled = false;
        this.house4.getComponent(cc.Animation).play("house_show");
        this.house4.getChildByName("smoke").active = true;
        cc.tween(this.camera).by(0.2, { zoomRatio: -0.2 }).call(function () {
            _this.linkToStore.active = true;
            _this.listHand[0].active = true;
            _this.pop.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = _this.popRedGreen;
            _this.max = 14;
            _this.lbCountCus.string = _this.countCus.toString() + " /" + _this.max.toString();
        }).start();
        cc.tween(this.camera.node).by(0.6, { position: cc.v3(300, -200) }).start();
    };
    NewClass.prototype.update = function (dt) {
        this.lbWood.string = this.countWood.toString();
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.woodBar.scale = 1;
                this.woodBar.getComponent(cc.Widget).right = 232.61;
            }
        }
        else {
            // this.mainCamera.zoomRatio = 1.5
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.woodBar.scale = 1.3;
            this.woodBar.getComponent(cc.Widget).right = 300;
        }
    };
    NewClass.prototype.screen = function () {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.camera.zoomRatio = 1.2;
            }
        }
        else {
            // this.mainCamera.zoomRatio = 1.5
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.camera.zoomRatio = 2;
        }
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "gate", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCountCus", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCus", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCus2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house0", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house4", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "popRed", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "popRedGreen", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tree", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbWood", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "woodBar", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundGio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChatGo", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundlanhCanRang", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundYee", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();