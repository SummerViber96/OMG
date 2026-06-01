
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/HF/GamePLay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBMUROLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtVjVCO0lBQUQsZUFBQztDQW5WRCxBQW1WQyxDQW5WcUMsRUFBRSxDQUFDLFNBQVMsR0FtVmpEO2tCQW5Wb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmFOZ2FuZzogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmFEb2M6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb2luQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0QnRuOiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5QbGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWF5VGFwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdE1heUNoYXk6IGNjLk5vZGVbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGVbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RQb3A6IGNjLk5vZGVbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1jOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0S2hheUl0ZW06IGNjLk5vZGVbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmdCZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZ1VwZGF0ZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZ1VwZGF0ZU1heTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZ1RyYW5TY2VuZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZ1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZ0NoYXlCbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJvR3Jlc3MxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJvR3Jlc3MyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEljb25JdGVtOiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGV4dDE6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRleHQyOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlVG91Y2g6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBjb3VudEJ0biA9IDBcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdidXR0b24tY2xpY2snLCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ0JnLCB0cnVlLCAwLjUpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFOZ2FuZykuZGVsYXkoMC44KS50bygwLjQsIHsgem9vbVJhdGlvOiAxLjUyIH0pLmRlbGF5KDEpLnRvKDAuNCwgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2MpLmRlbGF5KDAuOCkudG8oMC40LCB7IHpvb21SYXRpbzogMSB9KS5kZWxheSgxKS50bygwLjQsIHsgem9vbVJhdGlvOiAxLjggfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ0NoYXlCbywgdHJ1ZSwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saXN0QnRuWzBdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ1RyYW5TY2VuZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgfSwgMC44ICsgMC40ICsgMSArIDAuNClcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b3VjaFN0YXJ0RXZlbnQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVmZlRvdWNoKGV2ZW50LmdldExvY2F0aW9uKCkpXHJcblxyXG4gICAgfVxyXG4gICAgY3JlYXRlRWZmVG91Y2gocG9zKSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBsZXQgdG91Y2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVRvdWNoKVxyXG4gICAgICAgIHRvdWNoLnBhcmVudCA9IHRoaXMudWlOb2RlO1xyXG4gICAgICAgIHRvdWNoLnNjYWxlID0gMS4yXHJcbiAgICAgICAgdG91Y2gucG9zaXRpb24gPSBwb3M7XHJcbiAgICB9XHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNSA6IDAuN1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAxXHJcbiAgICAgICAgdGhpcy5zdG9yZS5zY2FsZSA9IChsb2dpYykgPyAwLjM1IDogMVxyXG4gICAgICAgIHRoaXMuY29pbkJhci5zY2FsZSA9IChsb2dpYykgPyAxIDogMS40XHJcbiAgICAgICAgdGhpcy5jYW1lcmFEb2Mubm9kZS5hY3RpdmUgPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jYW1lcmFOZ2FuZy5ub2RlLmFjdGl2ZSA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlQYWQgaG/hurdjIHTGsMahbmcgdOG7sSAodOG7tyBs4buHIGfhuqduIHZ1w7RuZylcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ0bkRvd25sb2FkLnBvc2l0aW9uID0gY2MudjMoNTM2LCAtMjQwKVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaVBhZCBob+G6t2MgdMawxqFuZyB04buxICh04bu3IGzhu4cgZ+G6p24gdnXDtG5nKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zY2FsZSA9IDAuOFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUaGnhur90IGLhu4sgaVBhZCBob+G6t2MgdOG7tyBs4buHIGfhuqduIDQ6M1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidG5fYnV5KGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY291bnRCdG4rK1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ1VwZGF0ZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RJY29uSXRlbVswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEJ0blswXS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICgxMDAgKiB0aGlzLmNvdW50QnRuKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb0dyZXNzMS5jaGlsZHJlblt0aGlzLmNvdW50QnRuXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQxLnN0cmluZyA9ICh0aGlzLmNvdW50QnRuICsgMSkudG9TdHJpbmcoKSArIFwiLT5cIiArICh0aGlzLmNvdW50QnRuICsgMikudG9TdHJpbmcoKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50QnRuID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHQxLnN0cmluZyA9IFwiTUFYXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0QnRuWzJdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEJ0blsyXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RCdG5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RJY29uSXRlbVsxXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyLnN0cmluZyA9IFwiTUFYXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RCdG5bMl0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjIwMFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0QnRuWzJdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEJ0blsyXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb0dyZXNzMi5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5QbGF5LmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5QbGF5LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ0bl9wbGF5KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZGNsb3NlXCIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYXlUYXAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1heVRhcC5nZXRDaGlsZEJ5TmFtZShcInZmeF9zbW9rZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1heVRhcC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ1VwZGF0ZU1heSwgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmdVcGRhdGVNYXksIGZhbHNlLCAxKTtcclxuXHJcbiAgICAgICAgICAgIH0sIDAuMTUpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdE1heUNoYXkpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwidmZ4X3Ntb2tlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjQpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygxNzAsIDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYU5nYW5nLm5vZGUpLmJ5KDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTMwMCwgLTE4MCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS5ieSgwLjUsIHsgcG9zaXRpb246IGNjLnYzKC03NzAsIC0xOTApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgfSwgMS4yKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q3VzWzBdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdEN1c1swXS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIH0sIDEuNylcclxuICAgIH1cclxuICAgIGlzQ291bnRDVXMgPSAwXHJcbiAgICBidG5fQ3VzKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ1VwZGF0ZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjdXMgPSBudWxsXHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgY3VzID0gdGhpcy5saXN0Q3VzWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TWF5Q2hheVswXS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q3VzWzFdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDdXNbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgICAgICAgIGN1cyA9IHRoaXMubGlzdEN1c1sxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE1heUNoYXlbMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEN1c1syXS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q3VzWzJdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICBjdXMgPSB0aGlzLmxpc3RDdXNbMl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RNYXlDaGF5WzJdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnR3ZWVuKGN1cykudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuaXNDb3VudENVcysrXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudENVcyA9PSAzKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhTmdhbmcpLnRvKDAuNSwgeyB6b29tUmF0aW86IDEuOCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhTmdhbmcubm9kZSkuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygzMDAsIDE4MCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYykudG8oMC41LCB7IHpvb21SYXRpbzogMS4zIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52Myg2NTAsIDE4MCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RQb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidG5fd3dhdGVyKGV2ZW50KSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkuYnkoMS41LCB7IHBvc2l0aW9uOiBjYy52MygtMzAwLCA1MCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLmRlbGF5KDEuOCkudG8oMS41LCB7IHBvc2l0aW9uOiBjYy52MygxNTAsIDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5nVXBkYXRlLCBmYWxzZSwgMSlcclxuICAgICAgICB0aGlzLmxpc3RQb3BbMF0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmxpc3RQb3BbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5tYy5wb3NpdGlvbiA9IGNjLnYzKC0yMDksIDc3KVxyXG4gICAgICAgIGxldCBhbmltID0gdGhpcy5tYy5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgbGV0IGFuaW0yID0gdGhpcy5tYy5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblxyXG4gICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0xlZnRcIiwgdHJ1ZSlcclxuICAgICAgICBhbmltMi5zZXRBbmltYXRpb24oMCwgXCJXYWxrTGVmdFwiLCB0cnVlKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWMpLnRvKDEuNSwgeyBwb3NpdGlvbjogY2MudjMoLTUzNCwgLTcxKSB9KS5kZWxheSgwLjMpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtVcFwiLCB0cnVlKVxyXG4gICAgICAgICAgICBhbmltMi5zZXRBbmltYXRpb24oMCwgXCJXYWxrVXBcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0S2hheUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC0yNjUsIDM4KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrUmlnaHRcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgYW5pbTIuc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1JpZ2h0XCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5saXN0S2hheUl0ZW1bMF1cclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICBpdGVtLnNjYWxlID0gMVxyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubGlzdFBvcFswXS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubGlzdFBvcFswXS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKS5hZGQoY2MudjMoMCwgNTApKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaXRlbSkudG8oMC4zLCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvcFswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ1VwZGF0ZU1heSwgZmFsc2UsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfSwgMC40KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubGlzdEtoYXlJdGVtWzFdXHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgaXRlbS5zY2FsZSA9IDFcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0UG9wWzJdLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5saXN0UG9wWzJdLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpLmFkZChjYy52MygwLCA1MCkpXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtKS50bygwLjMsIHsgcG9zaXRpb246IHBvcyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0UG9wWzJdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5nVXBkYXRlTWF5LCBmYWxzZSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubGlzdEtoYXlJdGVtWzJdXHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgaXRlbS5zY2FsZSA9IDFcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0UG9wWzNdLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5saXN0UG9wWzNdLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpLmFkZChjYy52MygwLCA1MCkpXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtKS50bygwLjUsIHsgcG9zaXRpb246IHBvcyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0UG9wWzNdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5nVXBkYXRlTWF5LCBmYWxzZSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH0pLnRvKDIuMiwgeyBwb3NpdGlvbjogY2MudjMoMjcxLCAtMjY5KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJ3aW5cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgYW5pbTIubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZ1dpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19