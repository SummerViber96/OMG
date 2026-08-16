"use strict";
cc._RF.push(module, '8f788vUAzhDkpEx4DQ8efSh', 'MR_Decor');
// scripts/MR_Decor.ts

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
        _this.mapNode = null;
        _this.camera3d = null;
        _this.listCard = null;
        _this.guild = null;
        _this.Group1 = null;
        _this.Group2 = null;
        _this.Group3 = null;
        _this.linkToStore = null;
        _this.soundBg = null;
        _this.soundUpgrade = null;
        _this.onEndCard = null;
        _this.miniLogo = null;
        _this.isvertical = false;
        return _this;
    }
    //
    NewClass.prototype.start = function () {
        // window.gameReady && window.gameReady();
        cc.audioEngine.play(this.soundBg, true, 0.8);
    };
    NewClass.prototype.btn_card1 = function () {
        var _this = this;
        this.guild.active = false;
        // for (let child of this.listCard.children) {
        this.listCard.children[0].getComponent(cc.Animation).play("card_off");
        this.listCard.children[1].getComponent(cc.Animation).play("card_off");
        // }
        cc.audioEngine.play(this.soundUpgrade, false, 0.8);
        cc.tween(this.camera3d).to(0.3, { zoomRatio: 0.6 }).call(function () {
            _this.mapNode.getChildByName("shadow").active = false;
            for (var i = 1; i < _this.mapNode.childrenCount; i++) {
                var child = _this.mapNode.children[i];
                child.position = child.position.add(cc.v3(0, 8, 0));
                child.active = true;
                var delay = 0;
                if (i < 4) {
                    delay = 0.1;
                }
                if (i < 2) {
                    delay = 0.15;
                }
                cc.tween(child).delay(delay).by(0.3, { position: cc.v3(0, -8, -0) }).start();
            }
        }).start();
        this.scheduleOnce(function () {
            _this.onStep2();
        }, 1);
    };
    NewClass.prototype.btn_card2 = function () {
        var _this = this;
        this.guild.active = false;
        cc.audioEngine.play(this.soundUpgrade, false, 0.8);
        this.listCard.children[2].getComponent(cc.Animation).play("card_off");
        this.listCard.children[3].getComponent(cc.Animation).play("card_off");
        this.Group1.getComponent(cc.Animation).play("group1_on");
        this.Group1.getChildByName("shadow").active = false;
        this.scheduleOnce(function () {
            _this.onStep3();
        }, 0.7);
    };
    NewClass.prototype.btn_card3 = function () {
        var _this = this;
        this.guild.active = false;
        this.Group2.getChildByName("shadow").active = false;
        cc.audioEngine.play(this.soundUpgrade, false, 0.8);
        this.listCard.children[4].getComponent(cc.Animation).play("card_off");
        this.listCard.children[5].getComponent(cc.Animation).play("card_off");
        // this.Group1.getComponent(cc.Animation).play("group2_on")
        this.Group2.getComponent(cc.Animation).play("show_group2");
        this.scheduleOnce(function () {
            _this.onStep4();
        }, 0.8);
    };
    NewClass.prototype.onStep2 = function () {
        var _this = this;
        this.Group1.active = true;
        // cc.tween(this.camera3d).to(0.5, { zoomRatio: 1.5 }).start()
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans1");
        this.scheduleOnce(function () {
            _this.listCard.children[2].active = true;
            _this.listCard.children[3].active = true;
        }, 0.8);
        this.scheduleOnce(function () {
            _this.guild.active = true;
        }, 1);
    };
    NewClass.prototype.onStep3 = function () {
        var _this = this;
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans2");
        this.Group2.active = true;
        this.scheduleOnce(function () {
            _this.listCard.children[4].active = true;
            _this.listCard.children[5].active = true;
        }, 0.8);
        this.scheduleOnce(function () {
            _this.guild.active = true;
        }, 1);
    };
    NewClass.prototype.onStep4 = function () {
        var _this = this;
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans3");
        this.Group3.active = true;
        this.scheduleOnce(function () {
            // this.listCard.children[6].active = true;
            // this.listCard.children[7].active = true;
            _this.linkToStore.active = true;
            _this.onEndCard.active = true;
            _this.miniLogo.active = false;
        }, 0.9);
        // this.scheduleOnce(() => {
        //     this.guild.active = true;
        // }, 1)
    };
    NewClass.prototype.update = function (dt) {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
            }
        }
        else {
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mapNode", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera3d", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Group1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Group2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Group3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUpgrade", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "onEndCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "miniLogo", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();