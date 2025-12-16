
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/GameApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1cd7jtXVtFjqaAqdnxOder', 'GameApp');
// scripts/APP/GameApp.ts

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
        _this.soundShowPop = null;
        _this.soundClosePop = null;
        _this.soundBg = null;
        _this.soundWin = null;
        _this.soundLose = null;
        _this.tut = null;
        _this.hand = null;
        _this.endCard = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.logo = null;
        _this.listCus = null;
        _this.preHotDog = null;
        _this.preBread = null;
        _this.tuongOt = null;
        _this.listChao = null;
        _this.listKhayBanhMi = null;
        _this.listHand = null;
        _this.soundChesse = null;
        _this.soundWrong = null;
        _this.soundNice = null;
        _this.soundYes = null;
        _this.soundNiceGame = null;
        _this.fxColor = null;
        // @property(cc.AudioClip)
        // soundBg:cc.AudioClip=null;
        _this.isTargetPop = null;
        _this.isTargetCus = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.arrHotDog = [null, null, null, null, null, null];
        _this.arrBreak = [null, null, null];
        _this.arrTuongCa = [];
        _this.isDelaytuong = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.showCus();
        cc.audioEngine.play(this.soundBg, true, 0.5);
    };
    NewClass.prototype.showCus = function () {
        var _this = this;
        var child = this.listCus.children[0];
        child.position = cc.v3(700, 123.591);
        cc.tween(child).to(0.8, { position: cc.v3(0, 123.591) }).call(function () {
            child.getChildByName("pop").active = true;
            _this.isTargetPop = child.getChildByName("pop");
            _this.isTargetCus = child;
            _this.listHand.children[0].active = true;
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundShowPop, false, 1);
            }, 0.1);
        }).start();
    };
    NewClass.prototype.successCus = function () {
        this.isTargetCus = null;
        this.isTargetPop = null;
    };
    NewClass.prototype.creatFxColor = function (pos, scale) {
        var pre = cc.instantiate(this.fxColor);
        pre.parent = this.node;
        pre.position = pos;
        pre.scale = scale;
    };
    NewClass.prototype.nextCus = function () {
        var _this = this;
        this.countCus++;
        if (this.countCus == 3) {
            this.onEndGame();
        }
        else {
            var child_1 = this.listCus.children[this.countCus];
            child_1.position = cc.v3(700, 123.591);
            child_1.active = true;
            cc.tween(child_1).to(0.8, { position: cc.v3(0, 123.591) }).call(function () {
                child_1.getChildByName("pop").active = true;
                _this.isTargetPop = child_1.getChildByName("pop");
                _this.isTargetCus = child_1;
                _this.scheduleOnce(function () {
                    cc.audioEngine.play(_this.soundShowPop, false, 1);
                }, 0.1);
            }).start();
        }
    };
    NewClass.prototype.btn_hotDog = function (event) {
        var _this = this;
        // if (this.arrHotDog.length >= 6) return;
        var check = this.checkSlotHotDog();
        console.log(check);
        if (check == null)
            return;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        this.listHand.children[0].opacity = 0;
        this.scheduleOnce(function () {
            _this.listHand.children[1].active = true;
        }, 0.5);
        var dem = this.arrHotDog.length;
        var hotDog = cc.instantiate(this.preHotDog);
        console.log(this.listChao);
        hotDog.parent = this.listChao.children[check];
        hotDog.position = cc.v3(0, 0);
        hotDog.getComponent("hotdog").value = check;
        this.arrHotDog[check] = hotDog;
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
    };
    NewClass.prototype.checkSlotHotDog = function () {
        for (var i = 0; i < this.arrHotDog.length; i++) {
            if (this.arrHotDog[i] == null)
                return i;
        }
        return null;
    };
    NewClass.prototype.checkSlotBread = function () {
        for (var i = 0; i < this.arrBreak.length; i++) {
            if (this.arrBreak[i] == null)
                return i;
        }
        return null;
    };
    NewClass.prototype.btn_bread = function (event) {
        var _this = this;
        // if (this.arrBreak.length >= 3) return;
        // let dem = this.arrBreak.length
        var check = this.checkSlotBread();
        if (check == null)
            return;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        var bread = cc.instantiate(this.preBread);
        bread.parent = this.listKhayBanhMi.children[check];
        bread.position = cc.v3(0, 0);
        bread.getComponent("preBread").value = check;
        this.arrBreak[check] = bread;
        this.listHand.children[1].opacity = 0;
        this.scheduleOnce(function () {
            _this.listHand.children[2].active = true;
        }, 0.5);
        var pos = event.currentTarget.position;
        this.creatFxColor(pos, 2);
    };
    NewClass.prototype.sellBread = function (value) {
        var _this = this;
        // console.log(value)
        if (this.isTargetCus == null)
            return;
        if (this.isTargetPop == null)
            return;
        this.listHand.children[4].opacity = 0;
        var child = this.arrBreak[value];
        this.arrBreak[value] = null;
        var posEnd = this.isTargetPop.position;
        posEnd = this.isTargetPop.parent.convertToWorldSpaceAR(posEnd);
        posEnd = child.parent.convertToNodeSpaceAR(posEnd);
        var pos = child.parent.convertToWorldSpaceAR(child.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        cc.tween(child).to(0.4, { position: posEnd.add(cc.v3(50, 0)), scale: 0.7 }).call(function () {
            child.opacity = 0;
            if (_this.isTargetCus) {
                _this.isTargetCus.getComponent("cusMission").checkBread(child);
            }
        }).start();
        this.creatFxColor(pos.add(cc.v3(0, 50)), 1.5);
    };
    NewClass.prototype.btn_tuongCa = function () {
        var _this = this;
        if (this.isDelaytuong)
            return;
        if (this.arrBreak.length <= 0)
            return;
        var bread = this.checkTuongCa();
        if (bread == null)
            return;
        this.isDelaytuong = true;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        this.listHand.children[3].opacity = 0;
        this.scheduleOnce(function () {
            _this.listHand.children[4].active = true;
        }, 1);
        var posStart = bread.position.add(cc.v3(40, 150));
        posStart = bread.parent.convertToWorldSpaceAR(posStart);
        posStart = this.node.convertToNodeSpaceAR(posStart);
        var posEnd = this.tuongOt.position;
        var posMid = cc.v2((posStart.x + posEnd.x) / 2, (posStart.y + posEnd.y) / 2 + 100);
        this.tuongOt.getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            bread.getComponent("preBread").getTuongCa();
            cc.audioEngine.play(_this.soundChesse, false, 1);
        }, 0.25);
        cc.tween(this.tuongOt).bezierTo(0.5, cc.v2(posEnd.x, posEnd.y), cc.v2(posMid.x, posMid.y), cc.v2(posStart.x, posStart.y)).call(function () {
        }).delay(0.2).call(function () {
            _this.tuongOt.position = posEnd;
            _this.tuongOt.children[0].angle = 0;
            _this.isDelaytuong = false;
        }).start();
    };
    NewClass.prototype.checkTuongCa = function () {
        for (var i = 0; i < this.arrBreak.length; i++) {
            var chld = this.arrBreak[i];
            if (chld != null && chld.getComponent("preBread").isHotDog == true && chld.getComponent("preBread").isTuongCa == false) {
                return chld;
            }
        }
        return null;
    };
    NewClass.prototype.clickHotDog = function (value, node) {
        var _this = this;
        if (this.arrBreak.length <= 0)
            return;
        var child = this.checkBread();
        if (child == null)
            return;
        cc.audioEngine.play(this.soundShowPop, false, 1);
        this.listHand.children[2].opacity = 0;
        this.scheduleOnce(function () {
            _this.listHand.children[3].active = true;
        }, 0.5);
        this.arrHotDog[value] = null;
        child.getComponent("preBread").getHotDog();
        var pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        node.opacity = 0;
        this.scheduleOnce(function () {
            node.destroy();
        }, 0.1);
        this.creatFxColor(pos, 1.5);
    };
    NewClass.prototype.checkBread = function () {
        for (var i = 0; i < this.arrBreak.length; i++) {
            var chld = this.arrBreak[i];
            if (chld != null && chld.getComponent("preBread").isHotDog == false) {
                return chld;
            }
        }
        return null;
    };
    NewClass.prototype.onEndGame = function () {
        cc.audioEngine.play(this.soundWin, false, 0.6);
        this.endCard.active = true;
        this.linkToStore.active = true;
    };
    // btn_choose(event, value) {
    //     console.log(value)
    //     switch (value) {
    //         case "0":
    //             this.hand.active = false
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             // this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(1)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             // this.hand.active = true
    //             break;
    //         case "1":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(2)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "2":
    //             this.sceneGun.position = cc.v3(3000, 0)
    //             this.sceneGun.active = true
    //             this.sceneGun.getComponent("mainGun").loadData(1)
    //             this.sceneGun.getComponent(cc.Animation).play()
    //             this.sceneMain.active = false
    //             break;
    //         case "3":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(3)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "4":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(4)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "5":
    //             this.sceneGun.position = cc.v3(3000, 0)
    //             this.sceneGun.active = true
    //             this.sceneGun.getComponent("mainGun").loadData(2)
    //             this.sceneGun.getComponent(cc.Animation).play()
    //             this.sceneMain.active = false
    //             break;
    //     }
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
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.listCus.scale = (logic) ? 1.5 : 1;
        this.listCus.position = (logic) ? cc.v3(0, -100) : cc.v3(0, -34);
        this.camera.zoomRatio = 1;
        this.endCard.scale = (logic) ? 1.2 : 0.7;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.camera.node.position = cc.v3(0, -50);
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            this.camera.node.position = cc.v3(80, 150);
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            this.camera.zoomRatio = 1.5;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                console.log("check iphonex");
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.2;
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
                this.camera.zoomRatio = 0.95;
            }
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundShowPop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClosePop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundLose", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tut", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCus", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preHotDog", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBread", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tuongOt", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChao", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listKhayBanhMi", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHand", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChesse", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundNice", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundYes", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundNiceGame", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "fxColor", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb1lDO1FBbFlHLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxtQkFBYSxHQUFpQixJQUFJLENBQUE7UUFFbEMsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUE7UUFFOUIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFFN0IsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFDekIsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUU3QixpQkFB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Q087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFoRFIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9ZNUI7SUFBRCxlQUFDO0NBcFlELEFBb1lDLENBcFlxQyxFQUFFLENBQUMsU0FBUyxHQW9ZakQ7a0JBcFlvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2hvd1BvcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsb3NlUG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUhvdERvZzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVCcmVhZDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHVvbmdPdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGFvOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0S2hheUJhbmhNaTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoZXNzZTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE5pY2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFllczogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTmljZUdhbWU6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBmeENvbG9yOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gc291bmRCZzpjYy5BdWRpb0NsaXA9bnVsbDtcclxuXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93Q3VzKClcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KVxyXG4gICAgfVxyXG4gICAgc2hvd0N1cygpIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bMF1cclxuICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IGNjLnYzKDcwMCwgMTIzLjU5MSlcclxuICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygwLCAxMjMuNTkxKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0UG9wID0gY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIilcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IGNoaWxkO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjEpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuICAgIH1cclxuICAgIHN1Y2Nlc3NDdXMoKSB7XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldFBvcCA9IG51bGw7XHJcblxyXG4gICAgfVxyXG4gICAgY3JlYXRGeENvbG9yKHBvcywgc2NhbGUpIHtcclxuICAgICAgICBsZXQgcHJlID0gY2MuaW5zdGFudGlhdGUodGhpcy5meENvbG9yKVxyXG4gICAgICAgIHByZS5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICBwcmUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICBwcmUuc2NhbGUgPSBzY2FsZVxyXG4gICAgfVxyXG4gICAgbmV4dEN1cygpIHtcclxuICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmNvdW50Q3VzXVxyXG4gICAgICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IGNjLnYzKDcwMCwgMTIzLjU5MSlcclxuICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygwLCAxMjMuNTkxKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRQb3AgPSBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldEN1cyA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNob3dQb3AsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDAuMSlcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBhcnJIb3REb2cgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XHJcbiAgICBhcnJCcmVhayA9IFtudWxsLCBudWxsLCBudWxsXTtcclxuICAgIGFyclR1b25nQ2EgPSBbXVxyXG4gICAgYnRuX2hvdERvZyhldmVudCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmFyckhvdERvZy5sZW5ndGggPj0gNikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tTbG90SG90RG9nKClcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVjaylcclxuICAgICAgICBpZiAoY2hlY2sgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzBdLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIYW5kLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIGxldCBkZW0gPSB0aGlzLmFyckhvdERvZy5sZW5ndGhcclxuICAgICAgICBsZXQgaG90RG9nID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVIb3REb2cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdENoYW8pXHJcbiAgICAgICAgaG90RG9nLnBhcmVudCA9IHRoaXMubGlzdENoYW8uY2hpbGRyZW5bY2hlY2tdO1xyXG4gICAgICAgIGhvdERvZy5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgaG90RG9nLmdldENvbXBvbmVudChcImhvdGRvZ1wiKS52YWx1ZSA9IGNoZWNrXHJcbiAgICAgICAgdGhpcy5hcnJIb3REb2dbY2hlY2tdID0gaG90RG9nXHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucG9zaXRpb25cclxuICAgICAgICB0aGlzLmNyZWF0RnhDb2xvcihwb3MsIDIpXHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tTbG90SG90RG9nKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJIb3REb2cubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJySG90RG9nW2ldID09IG51bGwpIHJldHVybiBpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjaGVja1Nsb3RCcmVhZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQnJlYWsubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyQnJlYWtbaV0gPT0gbnVsbCkgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGJ0bl9icmVhZChldmVudCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmFyckJyZWFrLmxlbmd0aCA+PSAzKSByZXR1cm47XHJcbiAgICAgICAgLy8gbGV0IGRlbSA9IHRoaXMuYXJyQnJlYWsubGVuZ3RoXHJcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja1Nsb3RCcmVhZCgpXHJcbiAgICAgICAgaWYgKGNoZWNrID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTaG93UG9wLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgbGV0IGJyZWFkID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVCcmVhZCk7XHJcbiAgICAgICAgYnJlYWQucGFyZW50ID0gdGhpcy5saXN0S2hheUJhbmhNaS5jaGlsZHJlbltjaGVja107XHJcbiAgICAgICAgYnJlYWQucG9zaXRpb24gPSBjYy52MygwLCAwKVxyXG4gICAgICAgIGJyZWFkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLnZhbHVlID0gY2hlY2tcclxuICAgICAgICB0aGlzLmFyckJyZWFrW2NoZWNrXSA9IGJyZWFkXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsxXS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuY3VycmVudFRhcmdldC5wb3NpdGlvblxyXG4gICAgICAgIHRoaXMuY3JlYXRGeENvbG9yKHBvcywgMilcclxuXHJcbiAgICB9XHJcbiAgICBzZWxsQnJlYWQodmFsdWUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEN1cyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRQb3AgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmQuY2hpbGRyZW5bNF0ub3BhY2l0eSA9IDBcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJCcmVha1t2YWx1ZV07XHJcbiAgICAgICAgdGhpcy5hcnJCcmVha1t2YWx1ZV0gPSBudWxsO1xyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmlzVGFyZ2V0UG9wLnBvc2l0aW9uXHJcbiAgICAgICAgcG9zRW5kID0gdGhpcy5pc1RhcmdldFBvcC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc0VuZClcclxuICAgICAgICBwb3NFbmQgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKVxyXG4gICAgICAgIGxldCBwb3MgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoaWxkLnBvc2l0aW9uKTtcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygwLjQsIHsgcG9zaXRpb246IHBvc0VuZC5hZGQoY2MudjMoNTAsIDApKSwgc2NhbGU6IDAuNyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQub3BhY2l0eSA9IDBcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRDdXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRDdXMuZ2V0Q29tcG9uZW50KFwiY3VzTWlzc2lvblwiKS5jaGVja0JyZWFkKGNoaWxkKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLmFkZChjYy52MygwLCA1MCkpLCAxLjUpXHJcbiAgICB9XHJcbiAgICBpc0RlbGF5dHVvbmcgPSBmYWxzZVxyXG4gICAgYnRuX3R1b25nQ2EoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxheXR1b25nKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuYXJyQnJlYWsubGVuZ3RoIDw9IDApIHJldHVybjtcclxuICAgICAgICBsZXQgYnJlYWQgPSB0aGlzLmNoZWNrVHVvbmdDYSgpO1xyXG4gICAgICAgIGlmIChicmVhZCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0RlbGF5dHVvbmcgPSB0cnVlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblszXS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgbGV0IHBvc1N0YXJ0ID0gYnJlYWQucG9zaXRpb24uYWRkKGNjLnYzKDQwLCAxNTApKTtcclxuICAgICAgICBwb3NTdGFydCA9IGJyZWFkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zU3RhcnQpO1xyXG4gICAgICAgIHBvc1N0YXJ0ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc1N0YXJ0KVxyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLnR1b25nT3QucG9zaXRpb25cclxuICAgICAgICBsZXQgcG9zTWlkID0gY2MudjIoKHBvc1N0YXJ0LnggKyBwb3NFbmQueCkgLyAyLCAocG9zU3RhcnQueSArIHBvc0VuZC55KSAvIDIgKyAxMDApXHJcbiAgICAgICAgdGhpcy50dW9uZ090LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgYnJlYWQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIikuZ2V0VHVvbmdDYSgpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoZXNzZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH0sIDAuMjUpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy50dW9uZ090KS5iZXppZXJUbygwLjUsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSksIGNjLnYyKHBvc01pZC54LCBwb3NNaWQueSksIGNjLnYyKHBvc1N0YXJ0LngsIHBvc1N0YXJ0LnkpKS5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgfSkuZGVsYXkoMC4yKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50dW9uZ090LnBvc2l0aW9uID0gcG9zRW5kXHJcbiAgICAgICAgICAgIHRoaXMudHVvbmdPdC5jaGlsZHJlblswXS5hbmdsZSA9IDBcclxuICAgICAgICAgICAgdGhpcy5pc0RlbGF5dHVvbmcgPSBmYWxzZVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICB9XHJcbiAgICBjaGVja1R1b25nQ2EoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckJyZWFrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGxkID0gdGhpcy5hcnJCcmVha1tpXVxyXG4gICAgICAgICAgICBpZiAoY2hsZCAhPSBudWxsICYmIGNobGQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIikuaXNIb3REb2cgPT0gdHJ1ZSAmJiBjaGxkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLmlzVHVvbmdDYSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNobGRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrSG90RG9nKHZhbHVlLCBub2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJyQnJlYWsubGVuZ3RoIDw9IDApIHJldHVybjtcclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoZWNrQnJlYWQoKVxyXG4gICAgICAgIGlmIChjaGlsZCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvd1BvcCwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblsyXS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SGFuZC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICB0aGlzLmFyckhvdERvZ1t2YWx1ZV0gPSBudWxsXHJcbiAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KFwicHJlQnJlYWRcIikuZ2V0SG90RG9nKClcclxuICAgICAgICBsZXQgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgbm9kZS5vcGFjaXR5ID0gMFxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpXHJcblxyXG4gICAgICAgIH0sIDAuMSlcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdEZ4Q29sb3IocG9zLCAxLjUpXHJcbiAgICB9XHJcbiAgICBjaGVja0JyZWFkKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJCcmVhay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hsZCA9IHRoaXMuYXJyQnJlYWtbaV1cclxuICAgICAgICAgICAgaWYgKGNobGQgIT0gbnVsbCAmJiBjaGxkLmdldENvbXBvbmVudChcInByZUJyZWFkXCIpLmlzSG90RG9nID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hsZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBvbkVuZEdhbWUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV2luLCBmYWxzZSwgMC42KVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2Nob29zZShldmVudCwgdmFsdWUpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIC8vICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuc2NlbmVNdXNpYy5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KFwibWFpbk11c2ljXCIpLmxvYWREYXRhKDEpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KFwibWFpbk11c2ljXCIpLmxvYWREYXRhKDIpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4ucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLmdldENvbXBvbmVudChcIm1haW5HdW5cIikubG9hZERhdGEoMSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTWFpbi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMucG9zaXRpb24gPSBjYy52MygzMDAwLCAwKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZU11c2ljLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KFwibWFpbk11c2ljXCIpLmxvYWREYXRhKDMpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5wb3NpdGlvbiA9IGNjLnYzKDMwMDAsIDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lTXVzaWMuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoXCJtYWluTXVzaWNcIikubG9hZERhdGEoNClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNdXNpYy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5wb3NpdGlvbiA9IGNjLnYzKDMwMDAsIDApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjZW5lR3VuLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVHdW4uZ2V0Q29tcG9uZW50KFwibWFpbkd1blwiKS5sb2FkRGF0YSgyKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2VuZUd1bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NlbmVNYWluLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICAgICB0aGlzLmxpc3RDdXMuc2NhbGU9KGxvZ2ljKT8xLjU6MVxyXG4gICAgICAgIHRoaXMubGlzdEN1cy5wb3NpdGlvbj0obG9naWMpP2NjLnYzKDAsLTEwMCk6Y2MudjMoMCwtMzQpXHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjIgOiAwLjdcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC01MClcclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDgwLCAxNTApXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjVcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjJcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC45NVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=