"use strict";
cc._RF.push(module, 'c5335RkK8lH15RTTkc/X1Bg', 'GamePlay2');
// HF/GamePlay2.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.cameraNgang = null;
        _this.cameraDoc = null;
        _this.logo = null;
        _this.coinBar = null;
        _this.cusFist = null;
        _this.soundBg = null;
        _this.soungUpdate = null;
        _this.soungUpdateMay = null;
        _this.soungTranScene = null;
        _this.soungWin = null;
        _this.soungChayBo = null;
        _this.listPop = [];
        _this.mc = null;
        _this.listKhayItem = [];
        _this.listCard1 = null;
        _this.listCard2 = null;
        _this.preWater = null;
        _this.preOrange = null;
        _this.char1 = null;
        _this.char2 = null;
        _this.endGame = null;
        _this.linkToStore = null;
        // @property(cc.Node)
        // coinBar:cc.Node=null
        _this.adChanel = '{{__adv_channels_adapter__}}';
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        var _this = this;
        cc.audioEngine.play(this.soundBg, false, 0.5);
        cc.audioEngine.play(this.soungChayBo, true, 1);
        var pos = cc.v3(-1025, 661);
        var endPos = cc.v3(-792, -523);
        var anim = this.cusFist.children[0].getComponent(sp.Skeleton);
        cc.tween(this.cusFist).to(1.4, { position: endPos }).call(function () {
            anim.setAnimation(0, "IdleFR", true);
        }).start();
        cc.tween(this.cameraNgang).delay(0.5).to(0.9, { zoomRatio: 1.8 }).delay(0.8).to(0.6, { zoomRatio: 3.9 }).start();
        cc.tween(this.cameraNgang.node).delay(0.5 + 1.7).to(0.6, { position: cc.v3(-30, 150) }).start();
        cc.tween(this.cameraDoc).delay(0.5).to(0.9, { zoomRatio: 1.5 }).delay(0.8).to(0.6, { zoomRatio: 3.2 }).start();
        cc.tween(this.cameraDoc.node).delay(0.5 + 1.7).to(0.6, { position: cc.v3(-30, 150) }).start();
        this.scheduleOnce(function () {
            _this.listPop[0].getChildByName("hand").active = true;
        }, 0.5 + 1.7 + 0.6);
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        canvas.fitWidth = (logic) ? true : false;
        canvas.fitHeight = (logic) ? false : true;
        this.logo.scale = (logic) ? 0.5 : 0.7;
        this.listCard1.scale = (logic) ? 1.8 : 3.6;
        this.listCard2.scale = (logic) ? 1.8 : 3.6;
        this.endGame.scale = (logic) ? 0.48 : 1;
        this.cameraDoc.node.active = (logic) ? true : false;
        this.cameraNgang.node.active = (logic) ? false : true;
        this.coinBar.scale = (logic) ? 0.9 : 1.5;
        // this.endCard.scale = (logic) ? 1 : 1
        // this.store.scale = (logic) ? 0.35 : 1
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
    NewClass.prototype.btn_pop = function (event) {
        var _this = this;
        this.listPop[0].getChildByName("hand").active = false;
        cc.audioEngine.play(this.soungUpdate, false, 1);
        event.currentTarget.getComponent(cc.Button).enabled = false;
        var anim = this.mc.children[0].getComponent(sp.Skeleton);
        var anim2 = this.mc.children[1].getComponent(sp.Skeleton);
        var endPos = cc.v3(-450, -60);
        anim.setAnimation(0, "WalkLeft", true);
        anim2.setAnimation(0, "WalkLeft", true);
        cc.tween(this.mc).to(1.5, { position: endPos }).call(function () {
            for (var _i = 0, _a = _this.listKhayItem; _i < _a.length; _i++) {
                var child = _a[_i];
                child.active = true;
            }
        }).delay(0.5).call(function () {
            anim.setAnimation(0, "WalkUp", true);
            anim2.setAnimation(0, "WalkUp", true);
        }).to(1, { position: cc.v3(-265, 38) }).call(function () {
            anim.setAnimation(0, "WalkRight", true);
            anim2.setAnimation(0, "WalkRight", true);
        }).to(1, { position: cc.v3(-150, 45) }).start();
        cc.tween(this.cameraNgang.node).to(1.5, { position: cc.v3(-463, -40) }).delay(0.5).to(1, { position: cc.v3(20, 100) })
            .call(function () {
        }).start();
        cc.tween(this.cameraDoc.node).to(1.5, { position: cc.v3(-463, -40) }).delay(0.5).to(1, { position: cc.v3(-100, 100) })
            .call(function () {
        }).start();
        this.scheduleOnce(function () {
            _this.listCard1.active = true;
        }, 1.5 + 0.5 + 1.5);
    };
    NewClass.prototype.btn_card = function (event, value) {
        var _this = this;
        event.currentTarget.getComponent(cc.Button).enabled = false;
        cc.tween(this.listCard1).to(0.4, { scale: 0 }).call(function () {
            _this.listCard1.active = false;
        }).start();
        var posEnd = this.listPop[0].parent.convertToWorldSpaceAR(this.listPop[0].position);
        posEnd = this.node.convertToNodeSpaceAR(posEnd).add(cc.v3(0, 60));
        var posStart = cc.v3(0, 0);
        var item = null;
        cc.audioEngine.play(this.soungUpdate, false, 1);
        this.scheduleOnce(function () {
            if (value == "1") {
                item = cc.instantiate(_this.preWater);
                // item.position = this.mc.position.add(cc.v3(0, 50))
                posStart = _this.listKhayItem[0].parent.convertToWorldSpaceAR(_this.listKhayItem[0].position);
                posStart = _this.node.convertToNodeSpaceAR(posStart);
                _this.listKhayItem[0].active = false;
            }
            else if (value == "2") {
                item = cc.instantiate(_this.preOrange);
                posStart = _this.listKhayItem[2].parent.convertToWorldSpaceAR(_this.listKhayItem[2].position);
                posStart = _this.node.convertToNodeSpaceAR(posStart);
                // item.position = this.mc.position.add(cc.v3(0, 50))
                _this.listKhayItem[2].active = false;
            }
            item.parent = _this.node;
            item.position = posStart;
            item.scale = 0.85;
            var midpos = cc.v2((posStart.x + posEnd.x) / 2, posEnd.y + 50 / 2);
            cc.tween(item).bezierTo(0.5, cc.v2(posStart.x, posStart.y), midpos, cc.v2(posEnd.x, posEnd.y)).call(function () {
                item.getChildByName("whey").active = false;
                item.getChildByName("exp").active = true;
                cc.audioEngine.play(_this.soungUpdateMay, false, 1);
                cc.tween(_this.listPop[0]).to(0.3, { scale: 0 }).start();
                _this.scheduleOnce(function () {
                    _this.char1.setAnimation(0, "Waiting3", true);
                    _this.char1.node.scaleX = -0.45;
                    _this.char1.node.children[0].active = true;
                }, 0.4);
            }).start();
            _this.scheduleOnce(function () {
                cc.tween(_this.cameraNgang.node).by(1.5, { position: cc.v3(180, -60) }).start();
                cc.tween(_this.cameraDoc.node).by(1.5, { position: cc.v3(200, -60) }).start();
                cc.tween(_this.mc).to(1.5, { position: cc.v3(19, -112) }).call(function () {
                    _this.listCard2.active = true;
                }).start();
            }, 0.5 + 0.4);
        }, 0.4);
    };
    NewClass.prototype.btn_card2 = function (event, value) {
        var _this = this;
        cc.audioEngine.play(this.soungUpdate, false, 1);
        event.currentTarget.getComponent(cc.Button).enabled = false;
        cc.tween(this.listCard2).to(0.4, { scale: 0 }).call(function () {
            _this.listCard2.active = false;
        }).start();
        var posEnd = this.listPop[1].parent.convertToWorldSpaceAR(this.listPop[1].position);
        posEnd = this.node.convertToNodeSpaceAR(posEnd).add(cc.v3(0, 60));
        var posStart = cc.v3(0, 0);
        var item = null;
        this.scheduleOnce(function () {
            if (value == "1") {
                item = cc.instantiate(_this.preWater);
                // item.position = this.mc.position.add(cc.v3(0, 50))
                posStart = _this.listKhayItem[0].parent.convertToWorldSpaceAR(_this.listKhayItem[0].position);
                posStart = _this.node.convertToNodeSpaceAR(posStart);
                _this.listKhayItem[0].active = false;
            }
            else if (value == "2") {
                item = cc.instantiate(_this.preOrange);
                posStart = _this.listKhayItem[2].parent.convertToWorldSpaceAR(_this.listKhayItem[2].position);
                posStart = _this.node.convertToNodeSpaceAR(posStart);
                // item.position = this.mc.position.add(cc.v3(0, 50))
                _this.listKhayItem[2].active = false;
            }
            item.parent = _this.node;
            item.position = posStart;
            item.scale = 0.85;
            var midpos = cc.v2((posStart.x + posEnd.x) / 2, posEnd.y + 50 / 2);
            cc.tween(item).bezierTo(0.5, cc.v2(posStart.x, posStart.y), midpos, cc.v2(posEnd.x, posEnd.y)).call(function () {
                item.getChildByName("whey").active = false;
                item.getChildByName("exp").active = true;
                cc.tween(_this.listPop[1]).to(0.3, { scale: 0 }).start();
                _this.scheduleOnce(function () {
                    cc.audioEngine.play(_this.soungTranScene, false, 1);
                    _this.char2.setAnimation(0, "Waiting3", true);
                    _this.char2.node.scaleX = -0.45;
                    _this.char2.node.children[0].active = true;
                }, 0.4);
            }).start();
            _this.scheduleOnce(function () {
                _this.endGame.active = true;
                _this.linkToStore.active = true;
                cc.audioEngine.play(_this.soungWin, false, 1);
            }, 0.5 + 0.6);
        }, 0.4);
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "cameraNgang", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "cameraDoc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "coinBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cusFist", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soungUpdate", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soungUpdateMay", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soungTranScene", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soungWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soungChayBo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listPop", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKhayItem", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard2", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWater", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preOrange", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "char1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "char2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endGame", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();