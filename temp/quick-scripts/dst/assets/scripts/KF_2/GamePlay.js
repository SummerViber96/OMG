
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/KF_2/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcR2FtZVBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsK0JBQTBCO0FBQzFCLHVDQUFrQztBQUNsQyx1Q0FBaUM7QUFFakM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpUkM7UUE5UUcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFJeEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWMsSUFBSSxDQUFD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XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBDaGFyIGZyb20gXCIuL0NoYXJcIjtcclxuaW1wb3J0IEN1c3RvbWVyIGZyb20gJy4vQ3VzdG9tZXInO1xyXG5pbXBvcnQgSm95U3RpY2sgZnJvbSAnLi9Kb3lTdGljaydcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kR3VpZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJyb3dHYXJkZW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJyb3dLZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJyb3dUaW5oVGllbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYXJkZW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VzdG9tZXIxTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjdXN0b21lcjJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGN1c3RvbWVyM05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VzdG9tZXI0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBrZUNhY2h1YTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBrZU5nbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Db250aW51ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBqb3lTdGljazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRhbmdDYWNodWFQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRhbmdOZ29QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNheU5nb1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY2F5Q2FjaHVhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmEzRDogY2MuQ2FtZXJhID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhMkQ6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGJnU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGdldEl0ZW1Tb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICB0YW5nQ2FjaHVhTm9kZSA9IG51bGw7XHJcblxyXG4gICAgdGFuZ05nb05vZGUgPSBudWxsO1xyXG5cclxuICAgIHRhbmcyQ2FjaHVhTm9kZSA9IG51bGw7XHJcblxyXG4gICAgdGFuZzJOZ29Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBjaGFyQ29tcCA9IG51bGw7XHJcblxyXG4gICAgbnVtTmdvID0gMDtcclxuXHJcbiAgICBudW1DYUNodWEgPSAwO1xyXG5cclxuICAgIGNvdW50Q3VzdG9tZXIgPSAwO1xyXG5cclxuICAgIGN1cnJTY3JlZW5XaWR0aCA9IG51bGw7XHJcblxyXG4gICAgaXNIb3Jpem9udGFsID0gdHJ1ZTtcclxuXHJcbiAgICBpc0VuZEdhbWUgPSBmYWxzZTtcclxuXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmNoYXJDb21wID0gdGhpcy5jaGFyLmdldENvbXBvbmVudChDaGFyKTtcclxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljczNETWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlR2FyZGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRUYW5nSXRlbSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ1NvdW5kLCB0cnVlLCAwLjUpO1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUYW5nSXRlbSgpIHtcclxuICAgICAgICB0aGlzLnRhbmdDYWNodWFOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50YW5nQ2FjaHVhUHJlZmFiKTtcclxuICAgICAgICB0aGlzLmtlQ2FjaHVhLmFkZENoaWxkKHRoaXMudGFuZ0NhY2h1YU5vZGUpO1xyXG4gICAgICAgIHRoaXMudGFuZ05nb05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhbmdOZ29QcmVmYWIpO1xyXG4gICAgICAgIHRoaXMua2VOZ28uYWRkQ2hpbGQodGhpcy50YW5nTmdvTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbU9uS2UobmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09ICd0cmFpbmdvJykge1xyXG4gICAgICAgICAgICB0aGlzLm51bU5nbysrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5udW1OZ28gPiAwICYmIHRoaXMubnVtTmdvIDw9IDI0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhbmdOZ29Ob2RlLmNoaWxkcmVuW3RoaXMubnVtTmdvIC0gMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bU5nbyA8PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFuZ05nb05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlID09IHRydWUgJiYgaW5kZXggPCAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lcjFOb2RlLmdldENvbXBvbmVudChDdXN0b21lcikuZ2V0SXRlbSgndHJhaW5nbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDAuMDIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bU5nbyA+PSAxMiAmJiB0aGlzLm51bU5nbyA8IDI0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YW5nTmdvTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5hY3RpdmUgPT0gdHJ1ZSAmJiBpbmRleCA+PSAxMiAmJiBpbmRleCA8IDI0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyMk5vZGUuZ2V0Q29tcG9uZW50KEN1c3RvbWVyKS5nZXRJdGVtKCd0cmFpbmdvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGluZGV4ICogMC4wMilcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5udW1OZ28gPiAyNCAmJiB0aGlzLm51bU5nbyA8PSA0OCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YW5nTmdvTm9kZS5jaGlsZHJlblt0aGlzLm51bU5nbyAtIDI1XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09ICd0cmFpY2FjaHVhJykge1xyXG4gICAgICAgICAgICB0aGlzLm51bUNhQ2h1YSsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5udW1DYUNodWEgPiAwICYmIHRoaXMubnVtQ2FDaHVhIDw9IDI0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhbmdDYWNodWFOb2RlLmNoaWxkcmVuW3RoaXMubnVtQ2FDaHVhIC0gMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bUNhQ2h1YSA8PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFuZ0NhY2h1YU5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlID09IHRydWUgJiYgaW5kZXggPCAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lcjNOb2RlLmdldENvbXBvbmVudChDdXN0b21lcikuZ2V0SXRlbSgndHJhaWNhY2h1YScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDAuMDIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubnVtQ2FDaHVhID4gMTIgJiYgdGhpcy5udW1DYUNodWEgPD0gMjQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhbmdDYWNodWFOb2RlLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFjdGl2ZSA9PSB0cnVlICYmIGluZGV4ID49IDEyICYmIGluZGV4IDwgMjQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXI0Tm9kZS5nZXRDb21wb25lbnQoQ3VzdG9tZXIpLmdldEl0ZW0oJ3RyYWljYWNodWEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXggKiAwLjAyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubnVtQ2FDaHVhID4gMjQgJiYgdGhpcy5udW1DYUNodWEgPD0gNDgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFuZ0NhY2h1YU5vZGUuY2hpbGRyZW5bdGhpcy5udW1DYUNodWEgLSAyNV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbmRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuaXNFbmRHYW1lID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFycm93VGluaFRpZW4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oYW5kR3VpZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLmJ0bkNvbnRpbnVlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5qb3lTdGljay5nZXRDb21wb25lbnQoSm95U3RpY2spLm9mZlRvdWNoRXZlbnQoKTtcclxuICAgICAgICB0aGlzLmpveVN0aWNrLmdldENvbXBvbmVudChKb3lTdGljaykuZG90LnNldFBvc2l0aW9uKGNjLnYzKDAsIC0xODMpKTtcclxuICAgICAgICB0aGlzLmpveVN0aWNrLmdldENvbXBvbmVudChKb3lTdGljaykucmluZy5zZXRQb3NpdGlvbihjYy52MygwLCAtMTgzKSk7XHJcbiAgICAgICAgdGhpcy5qb3lTdGljay5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoYXJDb21wLmlkbGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY3JlYXRlR2FyZGVuKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2F5bmdvID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXlOZ29QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXJkZW4uYWRkQ2hpbGQoY2F5bmdvKTtcclxuICAgICAgICAgICAgICAgIGNheW5nby5zZXRQb3NpdGlvbihjYy52MygyICsgMyAqIGosIDAsIDMgKyAzICogaSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2F5Y2FjaHVhID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXlDYWNodWFQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYXJkZW4uYWRkQ2hpbGQoY2F5Y2FjaHVhKTtcclxuICAgICAgICAgICAgICAgIGNheWNhY2h1YS5zZXRQb3NpdGlvbihjYy52MygtMiAtIDMgKiBqLCAwLCAzICsgMyAqIGkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFNjcmVlblNpemUoaXNIb3Jpem9udGFsKSB7IC8vIHJlc3BvbnNpdmUgZ2FtZSBuZ2FuZyBkb2NcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIHRoaXMuam95U3RpY2suc2NhbGUgPSAoaXNIb3Jpem9udGFsKSA/IDAuNSA6IDEuODtcclxuICAgICAgICB0aGlzLmJ0bkNvbnRpbnVlLmNoaWxkcmVuWzBdLnNjYWxlID0gKGlzSG9yaXpvbnRhbCkgPyAwLjI1IDogMC42O1xyXG4gICAgICAgIHRoaXMuY2FtZXJhM0Quem9vbVJhdGlvID0gKGlzSG9yaXpvbnRhbCkgPyAyIDogMS41O1xyXG4gICAgICAgIHRoaXMuY2FtZXJhM0Qubm9kZS5ldWxlckFuZ2xlcyA9IChpc0hvcml6b250YWwpID8gY2MudjMoLTQzLCAwLCAwKSA6IGNjLnYzKC00NiwgMCwgMClcclxuICAgICAgICAvLyBjYW52YXMuZml0SGVpZ2h0ID0gKGlzSG9yaXpvbnRhbCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgLy8gY2FudmFzLmZpdFdpZHRoID0gKGlzSG9yaXpvbnRhbCkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzcG9uc2l2ZSgpIHtcclxuICAgICAgICAvLyBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZXZpY2VSZXNvbHV0aW9uKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW52YXMuZGVzaWduUmVzb2x1dGlvbilcclxuICAgICAgICAvLyAvLyBjYWxjdWx0ZSBkZXNpZ24gcmF0aW9cclxuICAgICAgICAvLyBsZXQgZGVzaXJlZFJhdGlvID0gY2FudmFzLmRlc2lnblJlc29sdXRpb24ud2lkdGggLyBjYW52YXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgLy8gLy8gY2FsY3VsdGUgZGV2aWNlIHJhdGlvXHJcbiAgICAgICAgLy8gbGV0IGRldmljZVJhdGlvID0gZGV2aWNlUmVzb2x1dGlvbi53aWR0aCAvIGRldmljZVJlc29sdXRpb24uaGVpZ2h0O1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoID49IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZSh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5pc0hvcml6b250YWwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW5TaXplKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5pc0hvcml6b250YWwgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VyclNjcmVlbldpZHRoICE9PSB3aW5TaXplLndpZHRoKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICghdGhpcy5jdXJyU2NyZWVuV2lkdGgpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh3aW5TaXplLndpZHRoID4gNTAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW5TaXplKHRydWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNIb3Jpem9udGFsID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZXRTY3JlZW5TaXplKGZhbHNlKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmlzSG9yaXpvbnRhbCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdXJyU2NyZWVuV2lkdGggPSB3aW5TaXplLndpZHRoO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5jdXJyU2NyZWVuV2lkdGggPCB3aW5TaXplLndpZHRoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFNjcmVlblNpemUodHJ1ZSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzSG9yaXpvbnRhbCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFNjcmVlblNpemUoZmFsc2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc0hvcml6b250YWwgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJTY3JlZW5XaWR0aCA9IHdpblNpemUud2lkdGg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYTNELm5vZGUuc2V0UG9zaXRpb24odGhpcy5jaGFyLnBvc2l0aW9uLmFkZChjYy52MygwLCAzMCwgMjYpKS5jbGFtcGYoY2MudjMoLTksIDMwLCAzOCksIGNjLnYzKDksIDMwLCAzMCkpKTtcclxuICAgICAgICB0aGlzLnJlc3BvbnNpdmUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=