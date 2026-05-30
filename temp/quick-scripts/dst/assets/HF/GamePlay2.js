
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9IRi9HYW1lUGxheTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4T0M7UUEzT0csaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUV4QixRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBRTdCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBYyxJQUFJLENBQUE7UUFFM0IsV0FBSyxHQUFnQixJQUFJLENBQUE7UUFFekIsV0FBSyxHQUFnQixJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixxQkFBcUI7UUFDckIsdUJB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LE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN4Qyx1Q0FBdUM7UUFDdkMsd0NBQXdDO0lBQzVDLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxJQUFJLGdCQUFnQixDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjthQUNJO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsS0FBSztRQUFiLGlCQWtDQztRQWpDRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQy9DLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQzNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDeEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN6RCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3RDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pELEtBQWtCLFVBQWlCLEVBQWpCLEtBQUEsS0FBSSxDQUFDLFlBQVksRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFBRTtnQkFBaEMsSUFBSSxLQUFLLFNBQUE7Z0JBQ1YsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7YUFDdEI7UUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3BDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUd6QyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDdkMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzVDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxR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O1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUE3Q1YsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThPNUI7SUFBRCxlQUFDO0NBOU9ELEFBOE9DLENBOU9xQyxFQUFFLENBQUMsU0FBUyxHQThPakQ7a0JBOU9vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIGNhbWVyYU5nYW5nOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgY2FtZXJhRG9jOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvaW5CYXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGN1c0Zpc3Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5nVXBkYXRlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmdVcGRhdGVNYXk6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZ1RyYW5TY2VuZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5nV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmdDaGF5Qm86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdFBvcDogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RLaGF5SXRlbTogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENhcmQxOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RDYXJkMjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZVdhdGVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlT3JhbmdlOiBjYy5QcmVmYWIgPSBudWxsXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGNoYXIxOiBzcC5Ta2VsZXRvbiA9IG51bGxcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgY2hhcjI6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmRHYW1lOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGNvaW5CYXI6Y2MuTm9kZT1udWxsXG4gICAgICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIGZhbHNlLCAwLjUpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ0NoYXlCbywgdHJ1ZSwgMSlcbiAgICAgICAgbGV0IHBvcyA9IGNjLnYzKC0xMDI1LCA2NjEpO1xuICAgICAgICBsZXQgZW5kUG9zID0gY2MudjMoLTc5MiwgLTUyMyk7XG4gICAgICAgIGxldCBhbmltID0gdGhpcy5jdXNGaXN0LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgY2MudHdlZW4odGhpcy5jdXNGaXN0KS50bygxLjQsIHsgcG9zaXRpb246IGVuZFBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZUZSXCIsIHRydWUpXG5cbiAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYU5nYW5nKS5kZWxheSgwLjUpLnRvKDAuOSwgeyB6b29tUmF0aW86IDEuOCB9KS5kZWxheSgwLjgpLnRvKDAuNiwgeyB6b29tUmF0aW86IDMuOSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhTmdhbmcubm9kZSkuZGVsYXkoMC41ICsgMS43KS50bygwLjYsIHsgcG9zaXRpb246IGNjLnYzKC0zMCwgMTUwKSB9KS5zdGFydCgpXG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2MpLmRlbGF5KDAuNSkudG8oMC45LCB7IHpvb21SYXRpbzogMS41IH0pLmRlbGF5KDAuOCkudG8oMC42LCB7IHpvb21SYXRpbzogMy4yIH0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkuZGVsYXkoMC41ICsgMS43KS50bygwLjYsIHsgcG9zaXRpb246IGNjLnYzKC0zMCwgMTUwKSB9KS5zdGFydCgpXG5cblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RQb3BbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0sIDAuNSArIDEuNyArIDAuNilcbiAgICAgICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXBvbnNpdmUobG9naWMpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjUgOiAwLjc7XG4gICAgICAgIHRoaXMubGlzdENhcmQxLnNjYWxlID0gKGxvZ2ljKSA/IDEuOCA6IDMuNjtcbiAgICAgICAgdGhpcy5saXN0Q2FyZDIuc2NhbGUgPSAobG9naWMpID8gMS44IDogMy42XG4gICAgICAgIHRoaXMuZW5kR2FtZS5zY2FsZSA9IChsb2dpYykgPyAwLjQ4IDogMVxuICAgICAgICB0aGlzLmNhbWVyYURvYy5ub2RlLmFjdGl2ZSA9IChsb2dpYykgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRoaXMuY2FtZXJhTmdhbmcubm9kZS5hY3RpdmUgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAobG9naWMpID8gMC45IDogMS41XG4gICAgICAgIC8vIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxIDogMVxuICAgICAgICAvLyB0aGlzLnN0b3JlLnNjYWxlID0gKGxvZ2ljKSA/IDAuMzUgOiAxXG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ0bl9wb3AoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5saXN0UG9wWzBdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5nVXBkYXRlLCBmYWxzZSwgMSlcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLm1jLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgbGV0IGFuaW0yID0gdGhpcy5tYy5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgIGxldCBlbmRQb3MgPSBjYy52MygtNDUwLCAtNjApXG4gICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0xlZnRcIiwgdHJ1ZSlcbiAgICAgICAgYW5pbTIuc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0xlZnRcIiwgdHJ1ZSlcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYykudG8oMS41LCB7IHBvc2l0aW9uOiBlbmRQb3MgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RLaGF5SXRlbSkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZGVsYXkoMC41KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1VwXCIsIHRydWUpXG4gICAgICAgICAgICBhbmltMi5zZXRBbmltYXRpb24oMCwgXCJXYWxrVXBcIiwgdHJ1ZSlcblxuXG4gICAgICAgIH0pLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0yNjUsIDM4KSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1JpZ2h0XCIsIHRydWUpXG4gICAgICAgICAgICBhbmltMi5zZXRBbmltYXRpb24oMCwgXCJXYWxrUmlnaHRcIiwgdHJ1ZSlcbiAgICAgICAgfSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTE1MCwgNDUpIH0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFOZ2FuZy5ub2RlKS50bygxLjUsIHsgcG9zaXRpb246IGNjLnYzKC00NjMsIC00MCkgfSkuZGVsYXkoMC41KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygyMCwgMTAwKSB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoLTQ2MywgLTQwKSB9KS5kZWxheSgwLjUpLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0xMDAsIDEwMCkgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcblxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkMS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIH0sIDEuNSArIDAuNSArIDEuNSlcblxuICAgIH1cbiAgICBidG5fY2FyZChldmVudCwgdmFsdWUpIHtcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdENhcmQxKS50bygwLjQsIHsgc2NhbGU6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkMS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmxpc3RQb3BbMF0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmxpc3RQb3BbMF0ucG9zaXRpb24pXG4gICAgICAgIHBvc0VuZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NFbmQpLmFkZChjYy52MygwLCA2MCkpO1xuICAgICAgICBsZXQgcG9zU3RhcnQgPSBjYy52MygwLCAwKVxuICAgICAgICBsZXQgaXRlbSA9IG51bGxcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5nVXBkYXRlLCBmYWxzZSwgMSlcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXYXRlcilcbiAgICAgICAgICAgICAgICAvLyBpdGVtLnBvc2l0aW9uID0gdGhpcy5tYy5wb3NpdGlvbi5hZGQoY2MudjMoMCwgNTApKVxuICAgICAgICAgICAgICAgIHBvc1N0YXJ0ID0gdGhpcy5saXN0S2hheUl0ZW1bMF0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmxpc3RLaGF5SXRlbVswXS5wb3NpdGlvbilcbiAgICAgICAgICAgICAgICBwb3NTdGFydCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NTdGFydClcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RLaGF5SXRlbVswXS5hY3RpdmUgPSBmYWxzZVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IFwiMlwiKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlT3JhbmdlKVxuICAgICAgICAgICAgICAgIHBvc1N0YXJ0ID0gdGhpcy5saXN0S2hheUl0ZW1bMl0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmxpc3RLaGF5SXRlbVsyXS5wb3NpdGlvbilcbiAgICAgICAgICAgICAgICBwb3NTdGFydCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NTdGFydClcbiAgICAgICAgICAgICAgICAvLyBpdGVtLnBvc2l0aW9uID0gdGhpcy5tYy5wb3NpdGlvbi5hZGQoY2MudjMoMCwgNTApKVxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEtoYXlJdGVtWzJdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSBwb3NTdGFydDtcbiAgICAgICAgICAgIGl0ZW0uc2NhbGUgPSAwLjg1XG4gICAgICAgICAgICBsZXQgbWlkcG9zID0gY2MudjIoKHBvc1N0YXJ0LnggKyBwb3NFbmQueCkgLyAyLCBwb3NFbmQueSArIDUwIC8gMilcbiAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pLmJlemllclRvKDAuNSwgY2MudjIocG9zU3RhcnQueCwgcG9zU3RhcnQueSksIG1pZHBvcywgY2MudjIocG9zRW5kLngsIHBvc0VuZC55KSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIndoZXlcIikuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiZXhwXCIpLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmdVcGRhdGVNYXksIGZhbHNlLCAxKVxuXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5saXN0UG9wWzBdKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyMS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nM1wiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyMS5ub2RlLnNjYWxlWCA9IC0wLjQ1XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcjEubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSwgMC40KVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhTmdhbmcubm9kZSkuYnkoMS41LCB7IHBvc2l0aW9uOiBjYy52MygxODAsIC02MCkgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLmJ5KDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMjAwLCAtNjApIH0pLnN0YXJ0KClcblxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWMpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoMTksIC0xMTIpIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDYXJkMi5hY3RpdmUgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCAwLjUgKyAwLjQpXG5cbiAgICAgICAgfSwgMC40KVxuICAgIH1cbiAgICBidG5fY2FyZDIoZXZlbnQsIHZhbHVlKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ1VwZGF0ZSwgZmFsc2UsIDEpXG5cbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdENhcmQyKS50bygwLjQsIHsgc2NhbGU6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkMi5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmxpc3RQb3BbMV0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmxpc3RQb3BbMV0ucG9zaXRpb24pXG4gICAgICAgIHBvc0VuZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NFbmQpLmFkZChjYy52MygwLCA2MCkpO1xuICAgICAgICBsZXQgcG9zU3RhcnQgPSBjYy52MygwLCAwKVxuICAgICAgICBsZXQgaXRlbSA9IG51bGxcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlV2F0ZXIpXG4gICAgICAgICAgICAgICAgLy8gaXRlbS5wb3NpdGlvbiA9IHRoaXMubWMucG9zaXRpb24uYWRkKGNjLnYzKDAsIDUwKSlcbiAgICAgICAgICAgICAgICBwb3NTdGFydCA9IHRoaXMubGlzdEtoYXlJdGVtWzBdLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5saXN0S2hheUl0ZW1bMF0ucG9zaXRpb24pXG4gICAgICAgICAgICAgICAgcG9zU3RhcnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zU3RhcnQpXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0S2hheUl0ZW1bMF0uYWN0aXZlID0gZmFsc2VcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBcIjJcIikge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZU9yYW5nZSlcbiAgICAgICAgICAgICAgICBwb3NTdGFydCA9IHRoaXMubGlzdEtoYXlJdGVtWzJdLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5saXN0S2hheUl0ZW1bMl0ucG9zaXRpb24pXG4gICAgICAgICAgICAgICAgcG9zU3RhcnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zU3RhcnQpXG4gICAgICAgICAgICAgICAgLy8gaXRlbS5wb3NpdGlvbiA9IHRoaXMubWMucG9zaXRpb24uYWRkKGNjLnYzKDAsIDUwKSlcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RLaGF5SXRlbVsyXS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gcG9zU3RhcnQ7XG4gICAgICAgICAgICBpdGVtLnNjYWxlID0gMC44NVxuICAgICAgICAgICAgbGV0IG1pZHBvcyA9IGNjLnYyKChwb3NTdGFydC54ICsgcG9zRW5kLngpIC8gMiwgcG9zRW5kLnkgKyA1MCAvIDIpXG4gICAgICAgICAgICBjYy50d2VlbihpdGVtKS5iZXppZXJUbygwLjUsIGNjLnYyKHBvc1N0YXJ0LngsIHBvc1N0YXJ0LnkpLCBtaWRwb3MsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJ3aGV5XCIpLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImV4cFwiKS5hY3RpdmUgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RQb3BbMV0pLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmdUcmFuU2NlbmUsIGZhbHNlLCAxKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcjIuc2V0QW5pbWF0aW9uKDAsIFwiV2FpdGluZzNcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcjIubm9kZS5zY2FsZVggPSAtMC40NVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXIyLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0sIDAuNClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcblxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kR2FtZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmU9dHJ1ZVxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ1dpbiwgZmFsc2UsIDEpXG4gICAgICAgICAgICB9LCAwLjUgKyAwLjYpXG4gICAgICAgIH0sIDAuNClcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==