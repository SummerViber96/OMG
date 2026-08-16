
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS0ZfMlxcR2FtZVBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsK0JBQTBCO0FBQzFCLHVDQUFrQztBQUNsQyx1Q0FBaUM7QUFFakM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpUkM7UUE5UUcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFJeEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWMsSUFBSSxDQUFD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XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IENoYXIgZnJvbSBcIi4vQ2hhclwiO1xuaW1wb3J0IEN1c3RvbWVyIGZyb20gJy4vQ3VzdG9tZXInO1xuaW1wb3J0IEpveVN0aWNrIGZyb20gJy4vSm95U3RpY2snXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kR3VpZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJyb3dHYXJkZW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJyb3dLZTogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFycm93VGluaFRpZW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2FyZGVuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGN1c3RvbWVyMU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY3VzdG9tZXIyTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjdXN0b21lcjNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGN1c3RvbWVyNE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2VDYWNodWE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2VOZ286IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuQ29udGludWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgam95U3RpY2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB0YW5nQ2FjaHVhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB0YW5nTmdvUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjYXlOZ29QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNheUNhY2h1YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgY2FtZXJhM0Q6IGNjLkNhbWVyYSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIGNhbWVyYTJEOiBjYy5DYW1lcmEgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBnZXRJdGVtU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICB0YW5nQ2FjaHVhTm9kZSA9IG51bGw7XG5cbiAgICB0YW5nTmdvTm9kZSA9IG51bGw7XG5cbiAgICB0YW5nMkNhY2h1YU5vZGUgPSBudWxsO1xuXG4gICAgdGFuZzJOZ29Ob2RlID0gbnVsbDtcblxuICAgIGNoYXJDb21wID0gbnVsbDtcblxuICAgIG51bU5nbyA9IDA7XG5cbiAgICBudW1DYUNodWEgPSAwO1xuXG4gICAgY291bnRDdXN0b21lciA9IDA7XG5cbiAgICBjdXJyU2NyZWVuV2lkdGggPSBudWxsO1xuXG4gICAgaXNIb3Jpem9udGFsID0gdHJ1ZTtcblxuICAgIGlzRW5kR2FtZSA9IGZhbHNlO1xuXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNoYXJDb21wID0gdGhpcy5jaGFyLmdldENvbXBvbmVudChDaGFyKTtcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlKCk7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljczNETWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNyZWF0ZUdhcmRlbigpO1xuICAgICAgICB0aGlzLmFkZFRhbmdJdGVtKCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ1NvdW5kLCB0cnVlLCAwLjUpO1xuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRUYW5nSXRlbSgpIHtcbiAgICAgICAgdGhpcy50YW5nQ2FjaHVhTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGFuZ0NhY2h1YVByZWZhYik7XG4gICAgICAgIHRoaXMua2VDYWNodWEuYWRkQ2hpbGQodGhpcy50YW5nQ2FjaHVhTm9kZSk7XG4gICAgICAgIHRoaXMudGFuZ05nb05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhbmdOZ29QcmVmYWIpO1xuICAgICAgICB0aGlzLmtlTmdvLmFkZENoaWxkKHRoaXMudGFuZ05nb05vZGUpO1xuICAgIH1cblxuICAgIGFkZEl0ZW1PbktlKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3RyYWluZ28nKSB7XG4gICAgICAgICAgICB0aGlzLm51bU5nbysrO1xuICAgICAgICAgICAgaWYgKHRoaXMubnVtTmdvID4gMCAmJiB0aGlzLm51bU5nbyA8PSAyNCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFuZ05nb05vZGUuY2hpbGRyZW5bdGhpcy5udW1OZ28gLSAxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bU5nbyA8PSAxMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhbmdOZ29Ob2RlLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlID09IHRydWUgJiYgaW5kZXggPCAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyMU5vZGUuZ2V0Q29tcG9uZW50KEN1c3RvbWVyKS5nZXRJdGVtKCd0cmFpbmdvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXggKiAwLjAyKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubnVtTmdvID49IDEyICYmIHRoaXMubnVtTmdvIDwgMjQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YW5nTmdvTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFjdGl2ZSA9PSB0cnVlICYmIGluZGV4ID49IDEyICYmIGluZGV4IDwgMjQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lcjJOb2RlLmdldENvbXBvbmVudChDdXN0b21lcikuZ2V0SXRlbSgndHJhaW5nbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGluZGV4ICogMC4wMilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubnVtTmdvID4gMjQgJiYgdGhpcy5udW1OZ28gPD0gNDgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhbmdOZ29Ob2RlLmNoaWxkcmVuW3RoaXMubnVtTmdvIC0gMjVdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT0gJ3RyYWljYWNodWEnKSB7XG4gICAgICAgICAgICB0aGlzLm51bUNhQ2h1YSsrO1xuICAgICAgICAgICAgaWYgKHRoaXMubnVtQ2FDaHVhID4gMCAmJiB0aGlzLm51bUNhQ2h1YSA8PSAyNCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFuZ0NhY2h1YU5vZGUuY2hpbGRyZW5bdGhpcy5udW1DYUNodWEgLSAxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bUNhQ2h1YSA8PSAxMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhbmdDYWNodWFOb2RlLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlID09IHRydWUgJiYgaW5kZXggPCAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyM05vZGUuZ2V0Q29tcG9uZW50KEN1c3RvbWVyKS5nZXRJdGVtKCd0cmFpY2FjaHVhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXggKiAwLjAyKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bUNhQ2h1YSA+IDEyICYmIHRoaXMubnVtQ2FDaHVhIDw9IDI0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFuZ0NhY2h1YU5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5hY3RpdmUgPT0gdHJ1ZSAmJiBpbmRleCA+PSAxMiAmJiBpbmRleCA8IDI0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXI0Tm9kZS5nZXRDb21wb25lbnQoQ3VzdG9tZXIpLmdldEl0ZW0oJ3RyYWljYWNodWEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDAuMDIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm51bUNhQ2h1YSA+IDI0ICYmIHRoaXMubnVtQ2FDaHVhIDw9IDQ4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YW5nQ2FjaHVhTm9kZS5jaGlsZHJlblt0aGlzLm51bUNhQ2h1YSAtIDI1XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG4gICAgZW5kR2FtZSgpIHtcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFycm93VGluaFRpZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFuZEd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuYnRuQ29udGludWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5qb3lTdGljay5nZXRDb21wb25lbnQoSm95U3RpY2spLm9mZlRvdWNoRXZlbnQoKTtcbiAgICAgICAgdGhpcy5qb3lTdGljay5nZXRDb21wb25lbnQoSm95U3RpY2spLmRvdC5zZXRQb3NpdGlvbihjYy52MygwLCAtMTgzKSk7XG4gICAgICAgIHRoaXMuam95U3RpY2suZ2V0Q29tcG9uZW50KEpveVN0aWNrKS5yaW5nLnNldFBvc2l0aW9uKGNjLnYzKDAsIC0xODMpKTtcbiAgICAgICAgdGhpcy5qb3lTdGljay5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hhckNvbXAuaWRsZSgpO1xuICAgIH1cblxuXG4gICAgY3JlYXRlR2FyZGVuKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2F5bmdvID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXlOZ29QcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FyZGVuLmFkZENoaWxkKGNheW5nbyk7XG4gICAgICAgICAgICAgICAgY2F5bmdvLnNldFBvc2l0aW9uKGNjLnYzKDIgKyAzICogaiwgMCwgMyArIDMgKiBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNheWNhY2h1YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2F5Q2FjaHVhUHJlZmFiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhcmRlbi5hZGRDaGlsZChjYXljYWNodWEpO1xuICAgICAgICAgICAgICAgIGNheWNhY2h1YS5zZXRQb3NpdGlvbihjYy52MygtMiAtIDMgKiBqLCAwLCAzICsgMyAqIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRTY3JlZW5TaXplKGlzSG9yaXpvbnRhbCkgeyAvLyByZXNwb25zaXZlIGdhbWUgbmdhbmcgZG9jXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XG4gICAgICAgIHRoaXMuam95U3RpY2suc2NhbGUgPSAoaXNIb3Jpem9udGFsKSA/IDAuNSA6IDEuODtcbiAgICAgICAgdGhpcy5idG5Db250aW51ZS5jaGlsZHJlblswXS5zY2FsZSA9IChpc0hvcml6b250YWwpID8gMC4yNSA6IDAuNjtcbiAgICAgICAgdGhpcy5jYW1lcmEzRC56b29tUmF0aW8gPSAoaXNIb3Jpem9udGFsKSA/IDIgOiAxLjU7XG4gICAgICAgIHRoaXMuY2FtZXJhM0Qubm9kZS5ldWxlckFuZ2xlcyA9IChpc0hvcml6b250YWwpID8gY2MudjMoLTQzLCAwLCAwKSA6IGNjLnYzKC00NiwgMCwgMClcbiAgICAgICAgLy8gY2FudmFzLmZpdEhlaWdodCA9IChpc0hvcml6b250YWwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAvLyBjYW52YXMuZml0V2lkdGggPSAoaXNIb3Jpem9udGFsKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICByZXNwb25zaXZlKCkge1xuICAgICAgICAvLyBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRldmljZVJlc29sdXRpb24pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW52YXMuZGVzaWduUmVzb2x1dGlvbilcbiAgICAgICAgLy8gLy8gY2FsY3VsdGUgZGVzaWduIHJhdGlvXG4gICAgICAgIC8vIGxldCBkZXNpcmVkUmF0aW8gPSBjYW52YXMuZGVzaWduUmVzb2x1dGlvbi53aWR0aCAvIGNhbnZhcy5kZXNpZ25SZXNvbHV0aW9uLmhlaWdodDtcbiAgICAgICAgLy8gLy8gY2FsY3VsdGUgZGV2aWNlIHJhdGlvXG4gICAgICAgIC8vIGxldCBkZXZpY2VSYXRpbyA9IGRldmljZVJlc29sdXRpb24ud2lkdGggLyBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodDtcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPj0gZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaXNIb3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmlzSG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmICh0aGlzLmN1cnJTY3JlZW5XaWR0aCAhPT0gd2luU2l6ZS53aWR0aCkge1xuICAgICAgICAvLyAgICAgaWYgKCF0aGlzLmN1cnJTY3JlZW5XaWR0aCkge1xuICAgICAgICAvLyAgICAgICAgIGlmICh3aW5TaXplLndpZHRoID4gNTAwKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZSh0cnVlKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5pc0hvcml6b250YWwgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2V0U2NyZWVuU2l6ZShmYWxzZSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNIb3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3VyclNjcmVlbldpZHRoID0gd2luU2l6ZS53aWR0aDtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmN1cnJTY3JlZW5XaWR0aCA8IHdpblNpemUud2lkdGgpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFNjcmVlblNpemUodHJ1ZSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc0hvcml6b250YWwgPSB0cnVlO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFNjcmVlblNpemUoZmFsc2UpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuaXNIb3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJTY3JlZW5XaWR0aCA9IHdpblNpemUud2lkdGg7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmNhbWVyYTNELm5vZGUuc2V0UG9zaXRpb24odGhpcy5jaGFyLnBvc2l0aW9uLmFkZChjYy52MygwLCAzMCwgMjYpKS5jbGFtcGYoY2MudjMoLTksIDMwLCAzOCksIGNjLnYzKDksIDMwLCAzMCkpKTtcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlKCk7XG4gICAgfVxufVxuIl19