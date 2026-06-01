
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/HF/GamePlay2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSEZcXEdhbWVQbGF5Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThPQztRQTNPRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxhQUFPLEdBQWMsRUFBRSxDQUFDO1FBRXhCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFFbkIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0IsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFjLElBQUksQ0FBQTtRQUUzQixXQUFLLEdBQWdCLElBQUksQ0FBQTtRQUV6QixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQVksSUFBSSxDQUFBO1FBRXZCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBQzNCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDbkIsY0FBUSxHQUFHLDhCQUE4QixDQUFBOztRQTZMN0MsaUJBQWlCO0lBQ3JCLENBQUM7SUE1TEcsd0JBQUssR0FBTDtRQUFBLGlCQXVCQztRQXRCRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM3QyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM5QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzdELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRXhDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2hILEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFL0YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzlHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFHN0YsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekQsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDZixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksV0FBVyxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDekMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENB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dkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQTdDVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOE81QjtJQUFELGVBQUM7Q0E5T0QsQUE4T0MsQ0E5T3FDLEVBQUUsQ0FBQyxTQUFTLEdBOE9qRDtrQkE5T29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmFOZ2FuZzogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmFEb2M6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb2luQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VzRmlzdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZ1VwZGF0ZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZ1VwZGF0ZU1heTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZ1RyYW5TY2VuZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZ1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZ0NoYXlCbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFBvcDogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1jOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEtoYXlJdGVtOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENhcmQxOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2FyZDI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlV2F0ZXI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlT3JhbmdlOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBjaGFyMTogc3AuU2tlbGV0b24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBjaGFyMjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRHYW1lOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gY29pbkJhcjpjYy5Ob2RlPW51bGxcclxuICAgICAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCBmYWxzZSwgMC41KVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ0NoYXlCbywgdHJ1ZSwgMSlcclxuICAgICAgICBsZXQgcG9zID0gY2MudjMoLTEwMjUsIDY2MSk7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYzKC03OTIsIC01MjMpO1xyXG4gICAgICAgIGxldCBhbmltID0gdGhpcy5jdXNGaXN0LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmN1c0Zpc3QpLnRvKDEuNCwgeyBwb3NpdGlvbjogZW5kUG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVGUlwiLCB0cnVlKVxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFOZ2FuZykuZGVsYXkoMC41KS50bygwLjksIHsgem9vbVJhdGlvOiAxLjggfSkuZGVsYXkoMC44KS50bygwLjYsIHsgem9vbVJhdGlvOiAzLjkgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhTmdhbmcubm9kZSkuZGVsYXkoMC41ICsgMS43KS50bygwLjYsIHsgcG9zaXRpb246IGNjLnYzKC0zMCwgMTUwKSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jKS5kZWxheSgwLjUpLnRvKDAuOSwgeyB6b29tUmF0aW86IDEuNSB9KS5kZWxheSgwLjgpLnRvKDAuNiwgeyB6b29tUmF0aW86IDMuMiB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkuZGVsYXkoMC41ICsgMS43KS50bygwLjYsIHsgcG9zaXRpb246IGNjLnYzKC0zMCwgMTUwKSB9KS5zdGFydCgpXHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFBvcFswXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCAwLjUgKyAxLjcgKyAwLjYpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC41IDogMC43O1xyXG4gICAgICAgIHRoaXMubGlzdENhcmQxLnNjYWxlID0gKGxvZ2ljKSA/IDEuOCA6IDMuNjtcclxuICAgICAgICB0aGlzLmxpc3RDYXJkMi5zY2FsZSA9IChsb2dpYykgPyAxLjggOiAzLjZcclxuICAgICAgICB0aGlzLmVuZEdhbWUuc2NhbGUgPSAobG9naWMpID8gMC40OCA6IDFcclxuICAgICAgICB0aGlzLmNhbWVyYURvYy5ub2RlLmFjdGl2ZSA9IChsb2dpYykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFOZ2FuZy5ub2RlLmFjdGl2ZSA9IChsb2dpYykgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb2luQmFyLnNjYWxlID0gKGxvZ2ljKSA/IDAuOSA6IDEuNVxyXG4gICAgICAgIC8vIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxIDogMVxyXG4gICAgICAgIC8vIHRoaXMuc3RvcmUuc2NhbGUgPSAobG9naWMpID8gMC4zNSA6IDFcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ0bl9wb3AoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmxpc3RQb3BbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ1VwZGF0ZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBsZXQgYW5pbSA9IHRoaXMubWMuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIGxldCBhbmltMiA9IHRoaXMubWMuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIGxldCBlbmRQb3MgPSBjYy52MygtNDUwLCAtNjApXHJcbiAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrTGVmdFwiLCB0cnVlKVxyXG4gICAgICAgIGFuaW0yLnNldEFuaW1hdGlvbigwLCBcIldhbGtMZWZ0XCIsIHRydWUpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYykudG8oMS41LCB7IHBvc2l0aW9uOiBlbmRQb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdEtoYXlJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5kZWxheSgwLjUpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtVcFwiLCB0cnVlKVxyXG4gICAgICAgICAgICBhbmltMi5zZXRBbmltYXRpb24oMCwgXCJXYWxrVXBcIiwgdHJ1ZSlcclxuXHJcblxyXG4gICAgICAgIH0pLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0yNjUsIDM4KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrUmlnaHRcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgYW5pbTIuc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1JpZ2h0XCIsIHRydWUpXHJcbiAgICAgICAgfSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTE1MCwgNDUpIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYU5nYW5nLm5vZGUpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoLTQ2MywgLTQwKSB9KS5kZWxheSgwLjUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKDIwLCAxMDApIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKC00NjMsIC00MCkgfSkuZGVsYXkoMC41KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMTAwLCAxMDApIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQxLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAxLjUgKyAwLjUgKyAxLjUpXHJcblxyXG4gICAgfVxyXG4gICAgYnRuX2NhcmQoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5saXN0Q2FyZDEpLnRvKDAuNCwgeyBzY2FsZTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2FyZDEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMubGlzdFBvcFswXS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubGlzdFBvcFswXS5wb3NpdGlvbilcclxuICAgICAgICBwb3NFbmQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKS5hZGQoY2MudjMoMCwgNjApKTtcclxuICAgICAgICBsZXQgcG9zU3RhcnQgPSBjYy52MygwLCAwKVxyXG4gICAgICAgIGxldCBpdGVtID0gbnVsbFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ1VwZGF0ZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXYXRlcilcclxuICAgICAgICAgICAgICAgIC8vIGl0ZW0ucG9zaXRpb24gPSB0aGlzLm1jLnBvc2l0aW9uLmFkZChjYy52MygwLCA1MCkpXHJcbiAgICAgICAgICAgICAgICBwb3NTdGFydCA9IHRoaXMubGlzdEtoYXlJdGVtWzBdLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5saXN0S2hheUl0ZW1bMF0ucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICBwb3NTdGFydCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NTdGFydClcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEtoYXlJdGVtWzBdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVPcmFuZ2UpXHJcbiAgICAgICAgICAgICAgICBwb3NTdGFydCA9IHRoaXMubGlzdEtoYXlJdGVtWzJdLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5saXN0S2hheUl0ZW1bMl0ucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICBwb3NTdGFydCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NTdGFydClcclxuICAgICAgICAgICAgICAgIC8vIGl0ZW0ucG9zaXRpb24gPSB0aGlzLm1jLnBvc2l0aW9uLmFkZChjYy52MygwLCA1MCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RLaGF5SXRlbVsyXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gcG9zU3RhcnQ7XHJcbiAgICAgICAgICAgIGl0ZW0uc2NhbGUgPSAwLjg1XHJcbiAgICAgICAgICAgIGxldCBtaWRwb3MgPSBjYy52MigocG9zU3RhcnQueCArIHBvc0VuZC54KSAvIDIsIHBvc0VuZC55ICsgNTAgLyAyKVxyXG4gICAgICAgICAgICBjYy50d2VlbihpdGVtKS5iZXppZXJUbygwLjUsIGNjLnYyKHBvc1N0YXJ0LngsIHBvc1N0YXJ0LnkpLCBtaWRwb3MsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIndoZXlcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJleHBcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5nVXBkYXRlTWF5LCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RQb3BbMF0pLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyMS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nM1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXIxLm5vZGUuc2NhbGVYID0gLTAuNDVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXIxLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwgMC40KVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhTmdhbmcubm9kZSkuYnkoMS41LCB7IHBvc2l0aW9uOiBjYy52MygxODAsIC02MCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkuYnkoMS41LCB7IHBvc2l0aW9uOiBjYy52MygyMDAsIC02MCkgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWMpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTksIC0xMTIpIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENhcmQyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIDAuNSArIDAuNClcclxuXHJcbiAgICAgICAgfSwgMC40KVxyXG4gICAgfVxyXG4gICAgYnRuX2NhcmQyKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ1VwZGF0ZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdENhcmQyKS50bygwLjQsIHsgc2NhbGU6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmxpc3RQb3BbMV0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmxpc3RQb3BbMV0ucG9zaXRpb24pXHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZCkuYWRkKGNjLnYzKDAsIDYwKSk7XHJcbiAgICAgICAgbGV0IHBvc1N0YXJ0ID0gY2MudjMoMCwgMClcclxuICAgICAgICBsZXQgaXRlbSA9IG51bGxcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlV2F0ZXIpXHJcbiAgICAgICAgICAgICAgICAvLyBpdGVtLnBvc2l0aW9uID0gdGhpcy5tYy5wb3NpdGlvbi5hZGQoY2MudjMoMCwgNTApKVxyXG4gICAgICAgICAgICAgICAgcG9zU3RhcnQgPSB0aGlzLmxpc3RLaGF5SXRlbVswXS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubGlzdEtoYXlJdGVtWzBdLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgcG9zU3RhcnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zU3RhcnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RLaGF5SXRlbVswXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBcIjJcIikge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlT3JhbmdlKVxyXG4gICAgICAgICAgICAgICAgcG9zU3RhcnQgPSB0aGlzLmxpc3RLaGF5SXRlbVsyXS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubGlzdEtoYXlJdGVtWzJdLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgcG9zU3RhcnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zU3RhcnQpXHJcbiAgICAgICAgICAgICAgICAvLyBpdGVtLnBvc2l0aW9uID0gdGhpcy5tYy5wb3NpdGlvbi5hZGQoY2MudjMoMCwgNTApKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0S2hheUl0ZW1bMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IHBvc1N0YXJ0O1xyXG4gICAgICAgICAgICBpdGVtLnNjYWxlID0gMC44NVxyXG4gICAgICAgICAgICBsZXQgbWlkcG9zID0gY2MudjIoKHBvc1N0YXJ0LnggKyBwb3NFbmQueCkgLyAyLCBwb3NFbmQueSArIDUwIC8gMilcclxuICAgICAgICAgICAgY2MudHdlZW4oaXRlbSkuYmV6aWVyVG8oMC41LCBjYy52Mihwb3NTdGFydC54LCBwb3NTdGFydC55KSwgbWlkcG9zLCBjYy52Mihwb3NFbmQueCwgcG9zRW5kLnkpKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJ3aGV5XCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiZXhwXCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RQb3BbMV0pLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5nVHJhblNjZW5lLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyMi5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nM1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXIyLm5vZGUuc2NhbGVYID0gLTAuNDVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXIyLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwgMC40KVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEdhbWUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5nV2luLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgfSwgMC41ICsgMC42KVxyXG4gICAgICAgIH0sIDAuNClcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19