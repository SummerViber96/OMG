"use strict";
cc._RF.push(module, 'd3d22fOEbxLE5U7B91/xc7T', 'GamePLay');
// HF/GamePLay.ts

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
        _this.cameraNgang = null;
        _this.cameraDoc = null;
        _this.logo = null;
        _this.coinBar = null;
        _this.store = null;
        _this.listBtn = [];
        _this.btnPlay = null;
        _this.mayTap = null;
        _this.listMayChay = [];
        _this.listCus = [];
        _this.listPop = [];
        _this.mc = null;
        _this.listKhayItem = [];
        _this.endCard = null;
        _this.soungBg = null;
        _this.soungUpdate = null;
        _this.soungUpdateMay = null;
        _this.soungTranScene = null;
        _this.soungWin = null;
        _this.soungChayBo = null;
        _this.proGress1 = null;
        _this.proGress2 = null;
        _this.listIconItem = [];
        _this.text1 = null;
        _this.text2 = null;
        _this.linkToStore = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.preTouch = null;
        _this.uiNode = null;
        _this.countBtn = 0;
        _this.isCountCUs = 0;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        cc.systemEvent.on('button-click', this.touchStartEvent, this);
        cc.audioEngine.play(this.soungBg, true, 0.5);
        cc.tween(this.cameraNgang).delay(0.8).to(0.4, { zoomRatio: 1.52 }).delay(1).to(0.4, { zoomRatio: 2.5 }).start();
        cc.tween(this.cameraDoc).delay(0.8).to(0.4, { zoomRatio: 1 }).delay(1).to(0.4, { zoomRatio: 1.8 }).start();
        cc.audioEngine.play(this.soungChayBo, true, 1);
        this.scheduleOnce(function () {
            _this.store.active = true;
            _this.listBtn[0].getChildByName("hand").active = true;
            cc.audioEngine.play(_this.soungTranScene, false, 1);
        }, 0.8 + 0.4 + 1 + 0.4);
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    };
    NewClass.prototype.touchStartEvent = function (event) {
        this.createEffTouch(event.getLocation());
    };
    NewClass.prototype.createEffTouch = function (pos) {
        pos = this.node.convertToNodeSpaceAR(pos);
        var touch = cc.instantiate(this.preTouch);
        touch.parent = this.uiNode;
        touch.scale = 1.2;
        touch.position = pos;
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        canvas.fitWidth = (logic) ? true : false;
        canvas.fitHeight = (logic) ? false : true;
        this.logo.scale = (logic) ? 0.5 : 0.7;
        this.endCard.scale = (logic) ? 0.6 : 1;
        this.store.scale = (logic) ? 0.35 : 1;
        this.coinBar.scale = (logic) ? 1 : 1.4;
        this.cameraDoc.node.active = (logic) ? true : false;
        this.cameraNgang.node.active = (logic) ? false : true;
        if (logic == true) {
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
                // iPad hoặc tương tự (tỷ lệ gần vuông)
            }
        }
        else {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // this.btnDownload.position = cc.v3(536, -240)
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // iPad hoặc tương tự (tỷ lệ gần vuông)
                this.store.scale = 0.8;
                // console.log("Thiết bị iPad hoặc tỷ lệ gần 4:3");
            }
        }
    };
    NewClass.prototype.btn_buy = function (event, value) {
        this.countBtn++;
        cc.audioEngine.play(this.soungUpdate, false, 1);
        event.currentTarget.getChildByName("num").getComponent(cc.Animation).play();
        switch (value) {
            case "1":
                this.listIconItem[0].getComponent(cc.Animation).play();
                this.listBtn[0].getChildByName("num").getComponent(cc.Label).string = (100 * this.countBtn).toString();
                this.proGress1.children[this.countBtn].active = true;
                this.text1.string = (this.countBtn + 1).toString() + "->" + (this.countBtn + 2).toString();
                if (this.countBtn == 3) {
                    this.text1.string = "MAX";
                    event.currentTarget.getComponent(cc.Button).enabled = false;
                    this.listBtn[2].getComponent(cc.Button).enabled = true;
                    this.listBtn[2].getChildByName("hand").active = true;
                    this.listBtn[0].getChildByName("hand").active = false;
                }
                break;
            case "3":
                this.listIconItem[1].getComponent(cc.Animation).play();
                this.text2.string = "MAX";
                this.listBtn[2].getChildByName("num").getComponent(cc.Label).string = "200";
                this.listBtn[2].getComponent(cc.Button).enabled = false;
                this.listBtn[2].getChildByName("hand").active = false;
                this.proGress2.children[3].active = true;
                this.btnPlay.getChildByName("hand").active = true;
                this.btnPlay.getComponent(cc.Button).enabled = true;
                break;
        }
    };
    NewClass.prototype.btn_play = function (event) {
        var _this = this;
        event.currentTarget.getComponent(cc.Button).enabled = false;
        this.store.getComponent(cc.Animation).play("cardclose");
        this.scheduleOnce(function () {
            _this.store.active = false;
        }, 0.3);
        this.scheduleOnce(function () {
            _this.mayTap.getComponent(cc.Sprite).enabled = false;
            _this.mayTap.getChildByName("vfx_smoke").active = true;
            _this.mayTap.children[0].active = true;
            cc.audioEngine.play(_this.soungUpdateMay, false, 1);
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soungUpdateMay, false, 1);
            }, 0.15);
            for (var _i = 0, _a = _this.listMayChay; _i < _a.length; _i++) {
                var child = _a[_i];
                child.getComponent(cc.Sprite).enabled = false;
                child.getChildByName("vfx_smoke").active = true;
                child.children[0].active = true;
            }
        }, 0.4);
        cc.tween(this.cameraDoc.node).by(0.5, { position: cc.v3(170, 0) }).start();
        this.scheduleOnce(function () {
            cc.tween(_this.cameraNgang.node).by(0.5, { position: cc.v3(-300, -180) }).start();
            cc.tween(_this.cameraDoc.node).by(0.5, { position: cc.v3(-770, -190) }).start();
        }, 1.2);
        this.scheduleOnce(function () {
            _this.listCus[0].getChildByName("pop").getChildByName("hand").active = true;
            _this.listCus[0].getChildByName("pop").getComponent(cc.Button).enabled = true;
        }, 1.7);
    };
    NewClass.prototype.btn_Cus = function (event, value) {
        var _this = this;
        cc.audioEngine.play(this.soungUpdate, false, 1);
        event.currentTarget.getComponent(cc.Button).enabled = false;
        var cus = null;
        switch (value) {
            case "1":
                cus = this.listCus[0];
                this.listMayChay[0].children[0].children[1].active = true;
                this.listCus[1].getChildByName("pop").getComponent(cc.Button).enabled = true;
                this.listCus[1].getChildByName("pop").getChildByName("hand").active = true;
                break;
            case "2":
                cus = this.listCus[1];
                this.listMayChay[1].children[0].children[1].active = true;
                this.listCus[2].getChildByName("pop").getComponent(cc.Button).enabled = true;
                this.listCus[2].getChildByName("pop").getChildByName("hand").active = true;
                break;
            case "3":
                cus = this.listCus[2];
                this.listMayChay[2].children[0].children[1].active = true;
                break;
        }
        cc.tween(cus).to(0.3, { opacity: 0 }).start();
        this.isCountCUs++;
        if (this.isCountCUs == 3) {
            cc.tween(this.cameraNgang).to(0.5, { zoomRatio: 1.8 }).start();
            cc.tween(this.cameraNgang.node).by(0.5, { position: cc.v3(300, 180) }).start();
            cc.tween(this.cameraDoc).to(0.5, { zoomRatio: 1.3 }).start();
            cc.tween(this.cameraDoc.node).by(0.5, { position: cc.v3(650, 180) }).start();
            this.scheduleOnce(function () {
                for (var _i = 0, _a = _this.listPop; _i < _a.length; _i++) {
                    var child = _a[_i];
                    child.active = true;
                }
            }, 0.5);
        }
    };
    NewClass.prototype.btn_wwater = function (event) {
        var _this = this;
        cc.tween(this.cameraDoc.node).by(1.5, { position: cc.v3(-300, 50) }).start();
        cc.tween(this.cameraDoc.node).delay(1.8).to(1.5, { position: cc.v3(150, 0) }).start();
        cc.audioEngine.play(this.soungUpdate, false, 1);
        this.listPop[0].getComponent(cc.Button).enabled = false;
        event.currentTarget.getComponent(cc.Button).enabled = false;
        this.listPop[0].getChildByName("hand").active = false;
        this.mc.position = cc.v3(-209, 77);
        var anim = this.mc.children[0].getComponent(sp.Skeleton);
        var anim2 = this.mc.children[1].getComponent(sp.Skeleton);
        anim.setAnimation(0, "WalkLeft", true);
        anim2.setAnimation(0, "WalkLeft", true);
        cc.tween(this.mc).to(1.5, { position: cc.v3(-534, -71) }).delay(0.3).call(function () {
            anim.setAnimation(0, "WalkUp", true);
            anim2.setAnimation(0, "WalkUp", true);
            for (var _i = 0, _a = _this.listKhayItem; _i < _a.length; _i++) {
                var child = _a[_i];
                child.active = true;
            }
        }).to(1, { position: cc.v3(-265, 38) }).call(function () {
            anim.setAnimation(0, "WalkRight", true);
            anim2.setAnimation(0, "WalkRight", true);
            _this.scheduleOnce(function () {
                var item = _this.listKhayItem[0];
                item.parent = _this.node;
                item.scale = 1;
                var pos = _this.listPop[0].parent.convertToWorldSpaceAR(_this.listPop[0].position);
                pos = _this.node.convertToNodeSpaceAR(pos).add(cc.v3(0, 50));
                cc.tween(item).to(0.3, { position: pos }).call(function () {
                    item.active = false;
                    _this.listPop[0].active = false;
                    cc.audioEngine.play(_this.soungUpdateMay, false, 1);
                }).start();
            }, 0.4);
            _this.scheduleOnce(function () {
                var item = _this.listKhayItem[1];
                item.parent = _this.node;
                item.scale = 1;
                var pos = _this.listPop[2].parent.convertToWorldSpaceAR(_this.listPop[2].position);
                pos = _this.node.convertToNodeSpaceAR(pos).add(cc.v3(0, 50));
                cc.tween(item).to(0.3, { position: pos }).call(function () {
                    item.active = false;
                    _this.listPop[2].active = false;
                    cc.audioEngine.play(_this.soungUpdateMay, false, 1);
                }).start();
            }, 1);
            _this.scheduleOnce(function () {
                var item = _this.listKhayItem[2];
                item.parent = _this.node;
                item.scale = 1;
                var pos = _this.listPop[3].parent.convertToWorldSpaceAR(_this.listPop[3].position);
                pos = _this.node.convertToNodeSpaceAR(pos).add(cc.v3(0, 50));
                cc.tween(item).to(0.5, { position: pos }).call(function () {
                    item.active = false;
                    _this.listPop[3].active = false;
                    cc.audioEngine.play(_this.soungUpdateMay, false, 1);
                }).start();
            }, 1);
        }).to(2.2, { position: cc.v3(271, -269) }).call(function () {
            anim.setAnimation(0, "win", true);
            anim2.node.active = false;
            _this.endCard.active = true;
            _this.linkToStore.active = true;
            cc.audioEngine.play(_this.soungWin, false, 1);
        }).start();
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
    ], NewClass.prototype, "store", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnPlay", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mayTap", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listMayChay", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCus", void 0);
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
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soungBg", void 0);
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
    ], NewClass.prototype, "proGress1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "proGress2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listIconItem", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "text1", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "text2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preTouch", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();