
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/YC_11.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1lDXzExLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMlZDO1FBeFZHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFjLEVBQUUsQ0FBQTtRQUV2QixjQUFRLEdBQWMsRUFBRSxDQUFBO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQW1CLElBQUksQ0FBQTtRQUU3QixpQkFBVyxHQUFtQixJQUFJLENBQUE7UUFFbEMsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBaUIsSUFBSSxDQUFBO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUE7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQTtRQUU3QixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLHNCQUFnQixHQUFpQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFHLDhCQUE4QixDQUFBO1FBRXpDLGNBQVEsR0FBRyxDQUFDLENBQUE7UUFDWixXQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ1QsV0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNiLFNBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixlQUFTLEdBQUcsR0FBRyxDQUFBO1FBQ2YsWUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2pGLGdCQUFVLEdBQUcsSUFBSSxDQUFBO1FBK0hqQixlQUFTLEdBQUcsQ0FBQyxDQUFBO1FBNEdiLGdCQUFVLEdBQUcsS0FBSyxDQUFBOztJQThDdEIsQ0FBQztJQXhSRyx3QkFBSyxHQUFMO1FBQUEsaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUNiLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxXQUFXLEVBQUU7WUFDOUIsTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDMUM7UUFDRCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM1QyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdkIsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDaEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUNsQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDWCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRzlFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNQLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUNELDZCQUFVLEdBQVY7UUFBQSxpQkFzRUM7UUFyRUcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7WUFBRSxPQUFPO1FBQ2pELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO1lBQUUsT0FBTztRQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3JELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUN6RDtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxPQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdkMsa0RBQWtEO1lBQ2xELE9BQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hELE9BQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7WUFFaEMsT0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1lBQzVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqRSw0REFBNEQ7Z0JBQzVELGlDQUFpQztnQkFDakMsT0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELE9BQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7WUFFbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFFVixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBRTlFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQy9CLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDcEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO2FBQ2Y7U0FDSjthQUNJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFFdEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUN2RyxJQUFJLE9BQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDNUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDbkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUU5RSxPQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzlDLE9BQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hELE9BQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDaEMsT0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1lBRTVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUMsNERBQTREO2dCQUM1RCxpQ0FBaUM7Z0JBQ2pDLE9BQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ1YsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDaEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQzFELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDckUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO29CQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDbkQsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFFM0QsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ1YsZUFBZTthQUNsQjtTQUNKO0lBSUwsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUUxRSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRTNELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNQLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JFLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNuRCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFZCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBQ0Qsa0NBQWUsR0FBZjtRQUFBLGlCQWtCQztRQWpCRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFFL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ25ELElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN6QixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV0RCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQTtZQUNsQixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxRCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFHZCxDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtnQkFDcEIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO2dCQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTthQUVsRDtZQUNELEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUMzQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ2hCLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUE7WUFFekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEYsc0NBQXNDO1lBQ3RDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDcEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUM5QixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNwRCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFDRCw2QkFBVSxHQUFWO1FBQUEsaUJBaUJDO1FBaEJHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRTVDLEtBQWtCLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVksRUFBRTtZQUEzQixJQUFJLEtBQUssU0FBQTtZQUNWLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDaEM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUN0RCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzlELENBQUM7SUFDRCxrQ0FBZSxHQUFmO1FBQUEsaUJBaUJDO1FBaEJHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRTNDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hFLEtBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7WUFDckYsS0FBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7WUFDWixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQzlFLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1lBQ2QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDaEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBRWQsQ0FBQztJQUNELGtDQUFlLEdBQWY7UUFBQSxpQkE0QkM7UUEzQkcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUMvQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEQsMERBQTBEO1lBQzFELHFDQUFxQztRQUV6QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDbkQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRVYsa0NBQWtDO1FBQ2xDLDhFQUE4RTtRQUM5RSw0RkFBNEY7UUFDNUYsbUJBQW1CO1FBQ25CLHFGQUFxRjtRQUNyRixxQkFBcUI7UUFDckIsdURBQXVEO1FBQ3ZELHNDQUFzQztRQUN0QywwQkFBMEI7UUFDMUIsYUFBYTtJQUVqQixDQUFDO0lBQ0Qsa0NBQWUsR0FBZjtRQUFBLGlCQWtCQztRQWpCRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUUzQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFFL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWxELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNwRCxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzlCLEtBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7WUFDckYsS0FBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUE7WUFDYixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2xGLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFFOUUsQ0FBQztJQUVTLHlCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUM5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0MsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFBO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQTthQUVwRDtTQUNKO2FBQ0k7WUFDRCxrQ0FBa0M7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFBO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFBO1NBRWpEO0lBQ0wsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0MsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2FBQy9CO1NBQ0o7YUFDSTtZQUNELGtDQUFrQztZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7U0FFNUI7SUFDTCxDQUFDO0lBdFZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NENBQ0k7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDUztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDRTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNJO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ0s7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDZTtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBeERiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyVjVCO0lBQUQsZUFBQztDQTNWRCxBQTJWQyxDQTNWcUMsRUFBRSxDQUFDLFNBQVMsR0EyVmpEO2tCQTNWb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3A6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wMjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBnYXRlOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkNvdW50Q3VzOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEN1czogY2MuTm9kZVtdID0gW11cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q3VzMjogY2MuTm9kZVtdID0gW11cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob3VzZTA6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvdXNlMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG91c2UyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob3VzZTM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvdXNlNDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHBvcFJlZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHBvcFJlZEdyZWVuOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0SGFuZDogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdHJlZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICB0ZXh0OiBjYy5BbmltYXRpb24gPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiV29vZDogY2MuTGFiZWwgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHdvb2RCYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRHaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ2hhdEdvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRsYW5oQ2FuUmFuZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kWWVlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcblxuICAgIGNvdW50Q3VzID0gMFxuICAgIHBoYXNlID0gMFxuICAgIGZpcnN0ID0gZmFsc2VcbiAgICBtYXggPSA0O1xuICAgIGNvdW50V29vZCA9IDEwMFxuICAgIGFyclBvcyA9IFtjYy52MygtNTIyLCA1NTgpLCBjYy52MygtNTI1LCA0NDUpLCBjYy52MygtNjIxLCAzOTgpLCBjYy52MygtNzMzLCA0MDApXVxuICAgIGlkU091bmRHaW8gPSBudWxsXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuKClcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjUpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZGxhbmhDYW5SYW5nLCBmYWxzZSwgMC44KVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYSkuYnkoMC4zLCB7IHpvb21SYXRpbzogLTAuMyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmRbMF0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0sIDAuMilcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTIwMCwgMTUwKSB9KS5zdGFydCgpXG5cblxuICAgICAgICB9LCAwLjIpXG4gICAgICAgIHRoaXMuaWRTT3VuZEdpbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdpbywgdHJ1ZSwgMSlcbiAgICB9XG4gICAgYnRuX2FkZEN1cygpIHtcbiAgICAgICAgaWYgKHRoaXMucGhhc2UgPT0gMCAmJiB0aGlzLmNvdW50Q3VzID4gMykgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5waGFzZSA9PSAxICYmIHRoaXMuY291bnRDdXMgPiA4KSByZXR1cm47XG4gICAgICAgIHRoaXMucG9wLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJwb3BfY2xpY2tcIilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxuICAgICAgICBpZiAoIXRoaXMuZmlyc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nYXRlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjb25nX29wZW5cIilcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5waGFzZSA9PSAwKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXNbdGhpcy5jb3VudEN1c11cbiAgICAgICAgICAgIC8vIGNoaWxkLmdldENvbXBvbmVudChDKS5zdGF0dXNOb2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJSdW5cIiwgdHJ1ZSk7XG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuZ2V0SGFwcHkoKVxuXG4gICAgICAgICAgICBjaGlsZC56SW5kZXggPSB0aGlzLmNvdW50Q3VzXG4gICAgICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMiwgeyBwb3NpdGlvbjogdGhpcy5hcnJQb3NbdGhpcy5jb3VudEN1c10gfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBjaGlsZC5nZXRDb21wb25lbnQoQykuaHVuZ3J5KClcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5odW5ncnkoKVxuXG4gICAgICAgICAgICB9KS5zdGFydCgpXG5cbiAgICAgICAgICAgIHRoaXMuY291bnRDdXMrK1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50Q3VzLnN0cmluZyA9IHRoaXMuY291bnRDdXMudG9TdHJpbmcoKSArIFwiIC9cIiArIHRoaXMubWF4LnRvU3RyaW5nKClcblxuICAgICAgICAgICAgaWYgKHRoaXMucGhhc2UgPT0gMCAmJiB0aGlzLmNvdW50Q3VzID09IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucG9wUmVkO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmRbMF0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTT3VuZEdpbylcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXAxKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBoYXNlID09IDEpIHtcblxuICAgICAgICAgICAgbGV0IGFyclBvcyA9IFtjYy52MygtNDMxLCA0NjMpLCBjYy52MygtNDUwLCAzMDApLCBjYy52MygtNjI2LCAzMzUpLCBjYy52MygtNzg0LCAzMDQpLCBjYy52MygtNzAwLCAyMDApXVxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q3VzMlt0aGlzLmNvdW50Q3VzIC0gNF1cbiAgICAgICAgICAgIGxldCBwb3MgPSBhcnJQb3NbdGhpcy5jb3VudEN1cyAtIDRdXG4gICAgICAgICAgICB0aGlzLmNvdW50Q3VzKytcbiAgICAgICAgICAgIHRoaXMubGJDb3VudEN1cy5zdHJpbmcgPSB0aGlzLmNvdW50Q3VzLnRvU3RyaW5nKCkgKyBcIiAvXCIgKyB0aGlzLm1heC50b1N0cmluZygpXG5cbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5zdGF0dXNOb2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5hbmltLnNldEFuaW1hdGlvbigwLCBcIlJ1blwiLCB0cnVlKTtcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5nZXRIYXBweSgpXG4gICAgICAgICAgICBjaGlsZC56SW5kZXggPSB0aGlzLmNvdW50Q3VzXG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygyLCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBjaGlsZC5nZXRDb21wb25lbnQoQykuaHVuZ3J5KClcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgaWYgKHRoaXMucGhhc2UgPT0gMSAmJiB0aGlzLmNvdW50Q3VzID09IDkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucG9wUmVkO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmRbMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEpLmJ5KDAuNSwgeyB6b29tUmF0aW86IC0wLjEgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTExMDAsIDU1MCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEhhbmRbNF0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXNlMy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXRlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjb25nX2Nsb3NlXCIpXG5cbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGVwMSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICB9XG4gICAgc3RlcDEoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNywgeyBwb3NpdGlvbjogY2MudjMoLTcyNiwgNDAwKSB9KS5zdGFydCgpXG5cbiAgICAgICAgICAgIHRoaXMuZ2F0ZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY29uZ19jbG9zZVwiKVxuXG4gICAgICAgIH0sIDAuMylcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygtMTU3MSwgMTQwKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXNlMS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kWzFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcblxuICAgICAgICB9LCAyLjMpXG4gICAgfVxuICAgIGJ0bl9jbGlja0hvdXNlMSgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKVxuICAgICAgICB0aGlzLmxpc3RIYW5kWzFdLmFjdGl2ZSA9IGZhbHNlXG5cbiAgICAgICAgdGhpcy5ob3VzZTEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhvdXNlX3Nob3dcIik7XG4gICAgICAgIHRoaXMuaG91c2UxLmdldENoaWxkQnlOYW1lKFwic21va2VcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ob3VzZTEuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjMoLTExNTgsIDE5KSwgY2MudjMoLTE2NDYsIDIxMildXG4gICAgICAgIGxldCBjdXMgPSB0aGlzLmxpc3RDdXNbM11cbiAgICAgICAgY3VzLmdldENvbXBvbmVudChDKS5hbmltLnNldEFuaW1hdGlvbigwLCBcIlJ1blwiLCB0cnVlKTtcblxuICAgICAgICBjYy50d2VlbihjdXMpLnRvKDEuMiwgeyBwb3NpdGlvbjogY2MudjMoLTExNTgsIDE5KSB9KS50bygxLjIsIHsgcG9zaXRpb246IGNjLnYzKC0xNjAwLCAyMTIpIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgY3VzLnNjYWxlWCA9IC0wLjY1XG4gICAgICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiQ2hhdENheVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuY3V0VHJlZSgpXG4gICAgICAgIH0pLnN0YXJ0KClcblxuXG4gICAgfVxuICAgIGlzU291bmRHbyA9IDBcbiAgICBjdXRUcmVlKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU291bmRHbyA8IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU291bmRHbysrXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hhdEdvLCBmYWxzZSwgMSlcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmVlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgdGhpcy50ZXh0LnBsYXkoKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnRXb29kICs9IDEwMFxuXG4gICAgICAgICAgICB9LCAwLjIpXG4gICAgICAgIH0sIDAuOSlcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3AyLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBvcFJlZEdyZWVuO1xuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlzU291bmRHbylcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNiwgeyBwb3NpdGlvbjogY2MudjMoLTcyNiwgNDAwKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kWzJdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnBvcDIuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfSwgMilcbiAgICB9XG4gICAgYnRuX2NsaWNrMigpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRZZWUsIGZhbHNlLCAxKVxuXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdEN1cykge1xuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmhhcHB5KClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RIYW5kWzJdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMucG9wMi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcbiAgICAgICAgdGhpcy5wb3AyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJwb3BfY2xvc2VcIilcbiAgICAgICAgdGhpcy5ob3VzZTAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhvdXNlX3Nob3dcIik7XG4gICAgICAgIHRoaXMuaG91c2UwLmdldENoaWxkQnlOYW1lKFwic21va2VcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC42LCB7IHBvc2l0aW9uOiBjYy52MygtMjUwLCA4MjUpIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0SGFuZFszXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhvdXNlMi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS5ieSgwLjYsIHsgem9vbVJhdGlvOiAtMC4xIH0pLnN0YXJ0KClcbiAgICB9XG4gICAgYnRuX2NsaWNraG91c2UyKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXG5cbiAgICAgICAgdGhpcy5ob3VzZTIuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhvdXNlMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaG91c2Vfc2hvd1wiKTtcbiAgICAgICAgdGhpcy5ob3VzZTIuZ2V0Q2hpbGRCeU5hbWUoXCJzbW9rZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RIYW5kWzNdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNiwgeyBwb3NpdGlvbjogY2MudjMoLTAsIDApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucG9wUmVkR3JlZW47XG4gICAgICAgICAgICB0aGlzLm1heCA9IDlcbiAgICAgICAgICAgIHRoaXMubGJDb3VudEN1cy5zdHJpbmcgPSB0aGlzLmNvdW50Q3VzLnRvU3RyaW5nKCkgKyBcIiAvXCIgKyB0aGlzLm1heC50b1N0cmluZygpXG4gICAgICAgICAgICB0aGlzLnBoYXNlID0gMVxuICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0ID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KClcblxuICAgIH1cbiAgICBidG5fY2xpY2tob3VzZTMoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSlcblxuICAgICAgICB0aGlzLmhvdXNlMy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaG91c2UzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJob3VzZV9zaG93XCIpO1xuICAgICAgICB0aGlzLmhvdXNlMy5nZXRDaGlsZEJ5TmFtZShcInNtb2tlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGlzdEhhbmRbNF0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEpLmJ5KDAuNiwgeyB6b29tUmF0aW86ICswLjIgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ob3VzZTQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5saXN0SGFuZFs1XS5hY3RpdmUgPSB0cnVlXG5cbiAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS5ieSgwLjYsIHsgcG9zaXRpb246IGNjLnYzKDUwMCwgMTAwKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG91c2U0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5saXN0SGFuZFs1XS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIH0pLnN0YXJ0KClcblxuICAgICAgICAvLyB0aGlzLmxpc3RIYW5kWzNdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNiwgeyBwb3NpdGlvbjogY2MudjMoLTAsIDApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucG9wUmVkR3JlZW47XG4gICAgICAgIC8vICAgICB0aGlzLm1heCA9IDlcbiAgICAgICAgLy8gICAgIHRoaXMubGJDb3VudEN1cy5zdHJpbmcgPSB0aGlzLmNvdW50Q3VzLnRvU3RyaW5nKCkgKyBcIiAvXCIgKyB0aGlzLm1heC50b1N0cmluZygpXG4gICAgICAgIC8vICAgICB0aGlzLnBoYXNlID0gMVxuICAgICAgICAvLyAgICAgdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLmxpc3RIYW5kWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLmZpcnN0ID0gZmFsc2U7XG4gICAgICAgIC8vIH0pLnN0YXJ0KClcblxuICAgIH1cbiAgICBidG5fY2xpY2tob3VzZTQoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSlcblxuICAgICAgICB0aGlzLmxpc3RIYW5kWzVdLmFjdGl2ZSA9IGZhbHNlXG5cbiAgICAgICAgdGhpcy5ob3VzZTQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhvdXNlNC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaG91c2Vfc2hvd1wiKTtcbiAgICAgICAgdGhpcy5ob3VzZTQuZ2V0Q2hpbGRCeU5hbWUoXCJzbW9rZVwiKS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS5ieSgwLjIsIHsgem9vbVJhdGlvOiAtMC4yIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5saXN0SGFuZFswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wb3BSZWRHcmVlbjtcbiAgICAgICAgICAgIHRoaXMubWF4ID0gMTRcbiAgICAgICAgICAgIHRoaXMubGJDb3VudEN1cy5zdHJpbmcgPSB0aGlzLmNvdW50Q3VzLnRvU3RyaW5nKCkgKyBcIiAvXCIgKyB0aGlzLm1heC50b1N0cmluZygpXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkuYnkoMC42LCB7IHBvc2l0aW9uOiBjYy52MygzMDAsIC0yMDApIH0pLnN0YXJ0KClcblxuICAgIH1cbiAgICBpc3ZlcnRpY2FsID0gZmFsc2VcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sYldvb2Quc3RyaW5nID0gdGhpcy5jb3VudFdvb2QudG9TdHJpbmcoKVxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuXG4gICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIDwgY2Mud2luU2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc3ZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLndvb2RCYXIuc2NhbGU9MVxuICAgICAgICAgICAgICAgIHRoaXMud29vZEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodD0yMzIuNjFcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuNVxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy53b29kQmFyLnNjYWxlPTEuM1xuICAgICAgICAgICAgdGhpcy53b29kQmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0PTMwMFxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2NyZWVuKCkge1xuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuXG4gICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIDwgY2Mud2luU2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc3ZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMS41XG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAyXG5cbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19