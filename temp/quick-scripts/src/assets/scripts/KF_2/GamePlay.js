"use strict";
cc._RF.push(module, 'd993ax3kuNGJrkzS2Qryu6x', 'GamePlay');
// scripts/KF_2/GamePlay.ts

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
var Char_1 = require("./Char");
var Customer_1 = require("./Customer");
var JoyStick_1 = require("./JoyStick");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.char = null;
        _this.handGuide = null;
        _this.arrowGarden = null;
        _this.arrowKe = null;
        _this.arrowTinhTien = null;
        _this.garden = null;
        _this.customer1Node = null;
        _this.customer2Node = null;
        _this.customer3Node = null;
        _this.customer4Node = null;
        _this.keCachua = null;
        _this.keNgo = null;
        _this.btnContinue = null;
        _this.linkToStore = null;
        _this.joyStick = null;
        _this.tangCachuaPrefab = null;
        _this.tangNgoPrefab = null;
        _this.cayNgoPrefab = null;
        _this.cayCachuaPrefab = null;
        _this.camera3D = null;
        _this.camera2D = null;
        _this.bgSound = null;
        _this.getItemSound = null;
        _this.tangCachuaNode = null;
        _this.tangNgoNode = null;
        _this.tang2CachuaNode = null;
        _this.tang2NgoNode = null;
        _this.charComp = null;
        _this.numNgo = 0;
        _this.numCaChua = 0;
        _this.countCustomer = 0;
        _this.currScreenWidth = null;
        _this.isHorizontal = true;
        _this.isEndGame = false;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.charComp = this.char.getComponent(Char_1.default);
        this.responsive();
    };
    NewClass.prototype.start = function () {
        cc.director.getPhysics3DManager().enabled = true;
        this.createGarden();
        this.addTangItem();
        cc.audioEngine.play(this.bgSound, true, 0.5);
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    };
    NewClass.prototype.addTangItem = function () {
        this.tangCachuaNode = cc.instantiate(this.tangCachuaPrefab);
        this.keCachua.addChild(this.tangCachuaNode);
        this.tangNgoNode = cc.instantiate(this.tangNgoPrefab);
        this.keNgo.addChild(this.tangNgoNode);
    };
    NewClass.prototype.addItemOnKe = function (name) {
        var _this = this;
        if (name == 'traingo') {
            this.numNgo++;
            if (this.numNgo > 0 && this.numNgo <= 24) {
                this.tangNgoNode.children[this.numNgo - 1].active = true;
                if (this.numNgo <= 12) {
                    this.tangNgoNode.children.forEach(function (item, index) {
                        _this.scheduleOnce(function () {
                            if (item.active == true && index < 12) {
                                item.active = false;
                                _this.customer1Node.getComponent(Customer_1.default).getItem('traingo');
                            }
                        }, index * 0.02);
                    });
                }
                ;
                if (this.numNgo >= 12 && this.numNgo < 24) {
                    this.tangNgoNode.children.forEach(function (item, index) {
                        _this.scheduleOnce(function () {
                            if (item.active == true && index >= 12 && index < 24) {
                                item.active = false;
                                _this.customer2Node.getComponent(Customer_1.default).getItem('traingo');
                            }
                        }, index * 0.02);
                    });
                }
            }
            if (this.numNgo > 24 && this.numNgo <= 48) {
                this.tangNgoNode.children[this.numNgo - 25].active = true;
            }
        }
        if (name == 'traicachua') {
            this.numCaChua++;
            if (this.numCaChua > 0 && this.numCaChua <= 24) {
                this.tangCachuaNode.children[this.numCaChua - 1].active = true;
                if (this.numCaChua <= 12) {
                    this.tangCachuaNode.children.forEach(function (item, index) {
                        _this.scheduleOnce(function () {
                            if (item.active == true && index < 12) {
                                item.active = false;
                                _this.customer3Node.getComponent(Customer_1.default).getItem('traicachua');
                            }
                        }, index * 0.02);
                    });
                }
                ;
                if (this.numCaChua > 12 && this.numCaChua <= 24) {
                    this.tangCachuaNode.children.forEach(function (item, index) {
                        _this.scheduleOnce(function () {
                            if (item.active == true && index >= 12 && index < 24) {
                                item.active = false;
                                _this.customer4Node.getComponent(Customer_1.default).getItem('traicachua');
                            }
                        }, index * 0.02);
                    });
                }
                ;
            }
            if (this.numCaChua > 24 && this.numCaChua <= 48) {
                this.tangCachuaNode.children[this.numCaChua - 25].active = true;
            }
        }
    };
    NewClass.prototype.endGame = function () {
        this.isEndGame = true;
        this.arrowTinhTien.active = false;
        this.handGuide.active = true;
        // this.btnContinue.active = true;
        this.joyStick.getComponent(JoyStick_1.default).offTouchEvent();
        this.joyStick.getComponent(JoyStick_1.default).dot.setPosition(cc.v3(0, -183));
        this.joyStick.getComponent(JoyStick_1.default).ring.setPosition(cc.v3(0, -183));
        this.joyStick.opacity = 255;
        this.linkToStore.active = true;
        this.charComp.idle();
    };
    NewClass.prototype.createGarden = function () {
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 4; j++) {
                var cayngo = cc.instantiate(this.cayNgoPrefab);
                this.garden.addChild(cayngo);
                cayngo.setPosition(cc.v3(2 + 3 * j, 0, 3 + 3 * i));
            }
        }
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 4; j++) {
                var caycachua = cc.instantiate(this.cayCachuaPrefab);
                this.garden.addChild(caycachua);
                caycachua.setPosition(cc.v3(-2 - 3 * j, 0, 3 + 3 * i));
            }
        }
    };
    NewClass.prototype.setScreenSize = function (isHorizontal) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.joyStick.scale = (isHorizontal) ? 0.5 : 1.8;
        this.btnContinue.children[0].scale = (isHorizontal) ? 0.25 : 0.6;
        this.camera3D.zoomRatio = (isHorizontal) ? 2 : 1.5;
        this.camera3D.node.eulerAngles = (isHorizontal) ? cc.v3(-43, 0, 0) : cc.v3(-46, 0, 0);
        // canvas.fitHeight = (isHorizontal) ? true : false;
        // canvas.fitWidth = (isHorizontal) ? false : true;
    };
    NewClass.prototype.responsive = function () {
        // let canvas = this.node.getComponent(cc.Canvas);
        var deviceResolution = cc.view.getFrameSize();
        // console.log(deviceResolution);
        // console.log(canvas.designResolution)
        // // calculte design ratio
        // let desiredRatio = canvas.designResolution.width / canvas.designResolution.height;
        // // calculte device ratio
        // let deviceRatio = deviceResolution.width / deviceResolution.height;
        if (deviceResolution.width >= deviceResolution.height) {
            this.setScreenSize(true);
            this.isHorizontal = true;
        }
        else if (deviceResolution.width < deviceResolution.height) {
            this.setScreenSize(false);
            this.isHorizontal = false;
        }
        // if (this.currScreenWidth !== winSize.width) {
        //     if (!this.currScreenWidth) {
        //         if (winSize.width > 500) {
        //             this.setScreenSize(true);
        //             this.isHorizontal = true;
        //         } else {
        //             this.setScreenSize(false);
        //             this.isHorizontal = false;
        //         }
        //         this.currScreenWidth = winSize.width;
        //         return;
        //     }
        //     if (this.currScreenWidth < winSize.width) {
        //         this.setScreenSize(true);
        //         this.isHorizontal = true;
        //     } else {
        //         this.setScreenSize(false);
        //         this.isHorizontal = false;
        //     }
        //     this.currScreenWidth = winSize.width;
        // }
    };
    NewClass.prototype.update = function (dt) {
        this.camera3D.node.setPosition(this.char.position.add(cc.v3(0, 30, 26)).clampf(cc.v3(-9, 30, 38), cc.v3(9, 30, 30)));
        this.responsive();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "handGuide", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrowGarden", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrowKe", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrowTinhTien", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "garden", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "customer1Node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "customer2Node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "customer3Node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "customer4Node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "keCachua", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "keNgo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnContinue", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "joyStick", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "tangCachuaPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "tangNgoPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "cayNgoPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "cayCachuaPrefab", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera3D", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera2D", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "getItemSound", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();