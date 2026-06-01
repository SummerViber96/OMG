
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWUNfMTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyVkM7UUF4VkcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQWMsRUFBRSxDQUFBO1FBRXZCLGNBQVEsR0FBYyxFQUFFLENBQUE7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBbUIsSUFBSSxDQUFBO1FBRTdCLGlCQUFXLEdBQW1CLElBQUksQ0FBQTtRQUVsQyxjQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFpQixJQUFJLENBQUE7UUFFekIsWUFBTSxHQUFhLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBaUIsSUFBSSxDQUFBO1FBRTVCLGNBQVEsR0FBaUIsSUFBSSxDQUFBO1FBRTdCLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsc0JBQWdCLEdBQWlCLElB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QVMsQ0FBQztpREFDVTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNlO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUF4RGIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJWNUI7SUFBRCxlQUFDO0NBM1ZELEFBMlZDLENBM1ZxQyxFQUFFLENBQUMsU0FBUyxHQTJWakQ7a0JBM1ZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3A6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcDI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhdGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkNvdW50Q3VzOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGVbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXMyOiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBob3VzZTA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBob3VzZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBob3VzZTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBob3VzZTM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBob3VzZTQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcG9wUmVkOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHBvcFJlZEdyZWVuOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEhhbmQ6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0cmVlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICB0ZXh0OiBjYy5BbmltYXRpb24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYldvb2Q6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdvb2RCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEdpbzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoYXRHbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZGxhbmhDYW5SYW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kWWVlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcblxyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBwaGFzZSA9IDBcclxuICAgIGZpcnN0ID0gZmFsc2VcclxuICAgIG1heCA9IDQ7XHJcbiAgICBjb3VudFdvb2QgPSAxMDBcclxuICAgIGFyclBvcyA9IFtjYy52MygtNTIyLCA1NTgpLCBjYy52MygtNTI1LCA0NDUpLCBjYy52MygtNjIxLCAzOTgpLCBjYy52MygtNzMzLCA0MDApXVxyXG4gICAgaWRTT3VuZEdpbyA9IG51bGxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2NyZWVuKClcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuNSlcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRsYW5oQ2FuUmFuZywgZmFsc2UsIDAuOClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS5ieSgwLjMsIHsgem9vbVJhdGlvOiAtMC4zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3AuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKC0yMDAsIDE1MCkgfSkuc3RhcnQoKVxyXG5cclxuXHJcbiAgICAgICAgfSwgMC4yKVxyXG4gICAgICAgIHRoaXMuaWRTT3VuZEdpbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdpbywgdHJ1ZSwgMSlcclxuICAgIH1cclxuICAgIGJ0bl9hZGRDdXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGhhc2UgPT0gMCAmJiB0aGlzLmNvdW50Q3VzID4gMykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnBoYXNlID09IDEgJiYgdGhpcy5jb3VudEN1cyA+IDgpIHJldHVybjtcclxuICAgICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX2NsaWNrXCIpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICghdGhpcy5maXJzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nYXRlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjb25nX29wZW5cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGhhc2UgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXNbdGhpcy5jb3VudEN1c11cclxuICAgICAgICAgICAgLy8gY2hpbGQuZ2V0Q29tcG9uZW50KEMpLnN0YXR1c05vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiUnVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuZ2V0SGFwcHkoKVxyXG5cclxuICAgICAgICAgICAgY2hpbGQuekluZGV4ID0gdGhpcy5jb3VudEN1c1xyXG4gICAgICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMiwgeyBwb3NpdGlvbjogdGhpcy5hcnJQb3NbdGhpcy5jb3VudEN1c10gfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGlsZC5nZXRDb21wb25lbnQoQykuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmh1bmdyeSgpXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmh1bmdyeSgpXHJcblxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICAgICAgdGhpcy5sYkNvdW50Q3VzLnN0cmluZyA9IHRoaXMuY291bnRDdXMudG9TdHJpbmcoKSArIFwiIC9cIiArIHRoaXMubWF4LnRvU3RyaW5nKClcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBoYXNlID09IDAgJiYgdGhpcy5jb3VudEN1cyA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wb3BSZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTT3VuZEdpbylcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcDEoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGhhc2UgPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGFyclBvcyA9IFtjYy52MygtNDMxLCA0NjMpLCBjYy52MygtNDUwLCAzMDApLCBjYy52MygtNjI2LCAzMzUpLCBjYy52MygtNzg0LCAzMDQpLCBjYy52MygtNzAwLCAyMDApXVxyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXMyW3RoaXMuY291bnRDdXMgLSA0XVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gYXJyUG9zW3RoaXMuY291bnRDdXMgLSA0XVxyXG4gICAgICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICAgICAgdGhpcy5sYkNvdW50Q3VzLnN0cmluZyA9IHRoaXMuY291bnRDdXMudG9TdHJpbmcoKSArIFwiIC9cIiArIHRoaXMubWF4LnRvU3RyaW5nKClcclxuXHJcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5zdGF0dXNOb2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiUnVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuZ2V0SGFwcHkoKVxyXG4gICAgICAgICAgICBjaGlsZC56SW5kZXggPSB0aGlzLmNvdW50Q3VzXHJcblxyXG4gICAgICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMiwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIGNoaWxkLmdldENvbXBvbmVudChDKS5odW5ncnkoKVxyXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5waGFzZSA9PSAxICYmIHRoaXMuY291bnRDdXMgPT0gOSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucG9wUmVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZFswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS5ieSgwLjUsIHsgem9vbVJhdGlvOiAtMC4xIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTExMDAsIDU1MCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZFs0XS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZTMuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXRlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjb25nX2Nsb3NlXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGVwMSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBzdGVwMSgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNywgeyBwb3NpdGlvbjogY2MudjMoLTcyNiwgNDAwKSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhdGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNvbmdfY2xvc2VcIilcclxuXHJcbiAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygtMTU3MSwgMTQwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG91c2UxLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0SGFuZFsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgfSwgMi4zKVxyXG4gICAgfVxyXG4gICAgYnRuX2NsaWNrSG91c2UxKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmxpc3RIYW5kWzFdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMuaG91c2UxLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJob3VzZV9zaG93XCIpO1xyXG4gICAgICAgIHRoaXMuaG91c2UxLmdldENoaWxkQnlOYW1lKFwic21va2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhvdXNlMS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKC0xMTU4LCAxOSksIGNjLnYzKC0xNjQ2LCAyMTIpXVxyXG4gICAgICAgIGxldCBjdXMgPSB0aGlzLmxpc3RDdXNbM11cclxuICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiUnVuXCIsIHRydWUpO1xyXG5cclxuICAgICAgICBjYy50d2VlbihjdXMpLnRvKDEuMiwgeyBwb3NpdGlvbjogY2MudjMoLTExNTgsIDE5KSB9KS50bygxLjIsIHsgcG9zaXRpb246IGNjLnYzKC0xNjAwLCAyMTIpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjdXMuc2NhbGVYID0gLTAuNjVcclxuICAgICAgICAgICAgY3VzLmdldENvbXBvbmVudChDKS5hbmltLnNldEFuaW1hdGlvbigwLCBcIkNoYXRDYXlcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3V0VHJlZSgpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBpc1NvdW5kR28gPSAwXHJcbiAgICBjdXRUcmVlKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NvdW5kR28gPCAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU291bmRHbysrXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGF0R28sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRyZWUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5wbGF5KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudFdvb2QgKz0gMTAwXHJcblxyXG4gICAgICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgfSwgMC45KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wb3AyLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBvcFJlZEdyZWVuO1xyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaXNTb3VuZEdvKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygwLjYsIHsgcG9zaXRpb246IGNjLnYzKC03MjYsIDQwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RIYW5kWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMucG9wMi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuICAgIGJ0bl9jbGljazIoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFllZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdEN1cykge1xyXG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuaGFwcHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RIYW5kWzJdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wb3AyLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucG9wMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicG9wX2Nsb3NlXCIpXHJcbiAgICAgICAgdGhpcy5ob3VzZTAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhvdXNlX3Nob3dcIik7XHJcbiAgICAgICAgdGhpcy5ob3VzZTAuZ2V0Q2hpbGRCeU5hbWUoXCJzbW9rZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNiwgeyBwb3NpdGlvbjogY2MudjMoLTI1MCwgODI1KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZFszXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaG91c2UyLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS5ieSgwLjYsIHsgem9vbVJhdGlvOiAtMC4xIH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGJ0bl9jbGlja2hvdXNlMigpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuaG91c2UyLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhvdXNlMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaG91c2Vfc2hvd1wiKTtcclxuICAgICAgICB0aGlzLmhvdXNlMi5nZXRDaGlsZEJ5TmFtZShcInNtb2tlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saXN0SGFuZFszXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuNiwgeyBwb3NpdGlvbjogY2MudjMoLTAsIDApIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wb3BSZWRHcmVlbjtcclxuICAgICAgICAgICAgdGhpcy5tYXggPSA5XHJcbiAgICAgICAgICAgIHRoaXMubGJDb3VudEN1cy5zdHJpbmcgPSB0aGlzLmNvdW50Q3VzLnRvU3RyaW5nKCkgKyBcIiAvXCIgKyB0aGlzLm1heC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIHRoaXMucGhhc2UgPSAxXHJcbiAgICAgICAgICAgIHRoaXMucG9wLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgfVxyXG4gICAgYnRuX2NsaWNraG91c2UzKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5ob3VzZTMuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaG91c2UzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJob3VzZV9zaG93XCIpO1xyXG4gICAgICAgIHRoaXMuaG91c2UzLmdldENoaWxkQnlOYW1lKFwic21va2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpc3RIYW5kWzRdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEpLmJ5KDAuNiwgeyB6b29tUmF0aW86ICswLjIgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmhvdXNlNC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubGlzdEhhbmRbNV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkuYnkoMC42LCB7IHBvc2l0aW9uOiBjYy52Myg1MDAsIDEwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaG91c2U0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kWzVdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIC8vIHRoaXMubGlzdEhhbmRbM10uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygwLjYsIHsgcG9zaXRpb246IGNjLnYzKC0wLCAwKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucG9wUmVkR3JlZW47XHJcbiAgICAgICAgLy8gICAgIHRoaXMubWF4ID0gOVxyXG4gICAgICAgIC8vICAgICB0aGlzLmxiQ291bnRDdXMuc3RyaW5nID0gdGhpcy5jb3VudEN1cy50b1N0cmluZygpICsgXCIgL1wiICsgdGhpcy5tYXgudG9TdHJpbmcoKVxyXG4gICAgICAgIC8vICAgICB0aGlzLnBoYXNlID0gMVxyXG4gICAgICAgIC8vICAgICB0aGlzLnBvcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5saXN0SGFuZFswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gfSkuc3RhcnQoKVxyXG5cclxuICAgIH1cclxuICAgIGJ0bl9jbGlja2hvdXNlNCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMubGlzdEhhbmRbNV0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5ob3VzZTQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaG91c2U0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJob3VzZV9zaG93XCIpO1xyXG4gICAgICAgIHRoaXMuaG91c2U0LmdldENoaWxkQnlOYW1lKFwic21va2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEpLmJ5KDAuMiwgeyB6b29tUmF0aW86IC0wLjIgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZFswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBvcFJlZEdyZWVuO1xyXG4gICAgICAgICAgICB0aGlzLm1heCA9IDE0XHJcbiAgICAgICAgICAgIHRoaXMubGJDb3VudEN1cy5zdHJpbmcgPSB0aGlzLmNvdW50Q3VzLnRvU3RyaW5nKCkgKyBcIiAvXCIgKyB0aGlzLm1heC50b1N0cmluZygpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLmJ5KDAuNiwgeyBwb3NpdGlvbjogY2MudjMoMzAwLCAtMjAwKSB9KS5zdGFydCgpXHJcblxyXG4gICAgfVxyXG4gICAgaXN2ZXJ0aWNhbCA9IGZhbHNlXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxiV29vZC5zdHJpbmcgPSB0aGlzLmNvdW50V29vZC50b1N0cmluZygpXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLndpblNpemUud2lkdGggPCBjYy53aW5TaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvb2RCYXIuc2NhbGU9MVxyXG4gICAgICAgICAgICAgICAgdGhpcy53b29kQmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0PTIzMi42MVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuNVxyXG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLndvb2RCYXIuc2NhbGU9MS4zXHJcbiAgICAgICAgICAgIHRoaXMud29vZEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodD0zMDBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2NyZWVuKCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcblxyXG4gICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIDwgY2Mud2luU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzdmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS4yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMS41XHJcbiAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDJcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=