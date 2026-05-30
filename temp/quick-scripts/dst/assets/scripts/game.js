
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d30208n8tBYocShadMPp+o', 'game');
// scripts/game.ts

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
var animal_1 = require("./animal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainCamera = null;
        _this.char1 = null;
        _this.char2 = null;
        _this.char3 = null;
        _this.pig = null;
        _this.pig2 = null;
        _this.arenaWood = null;
        _this.arena2 = null;
        _this.arena3 = null;
        _this.tree1 = null;
        _this.tree2 = null;
        _this.tree3 = null;
        _this.bulletMain = null;
        _this.hand = null;
        _this.hand2 = null;
        _this.hand3 = null;
        _this.hand4 = null;
        _this.hand5 = null;
        _this.popup = null;
        _this.preWood = null;
        _this.bep = null;
        // @property(cc.Node)
        // snow: cc.Node
        _this.popup2 = null;
        _this.house = null;
        _this.smokeEff = null;
        _this.listHouse = [];
        _this.endCard = null;
        _this.lbWood = null;
        _this.soundBg = null;
        _this.soundNhanGo = null;
        _this.soundChatGo = null;
        _this.soundGioThoi = null;
        _this.soundUpgrade = null;
        _this.soundRang = null;
        _this.sounLonKeu = null;
        _this.soundDapChao = null;
        _this.soundUhh = null;
        _this.soundZee = null;
        _this.isvertical = false;
        _this.isCountWood = 0;
        _this.isTarget = null;
        _this.isFollow = false;
        _this.isMoving = false;
        _this.isStep = 0;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        cc.audioEngine.play(this.soundBg, true, 0.8);
        window.gameReady && window.gameReady();
        cc.audioEngine.playEffect(this.soundGioThoi, true);
        cc.audioEngine.playEffect(this.soundRang, true);
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_END, this.onTouchCancel, this);
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.scheduleOnce(function () {
            _this.popup.active = true;
            // this.hand.active = true
            cc.tween(_this.mainCamera).to(0.3, { zoomRatio: 0.8 }).start();
        }, 0.5);
    };
    NewClass.prototype.onTouchMove = function (event) {
        if (this.isMoving)
            return;
        if (!this.isTarget) {
            // console.log(this.isStep)
            if (this.isStep == 1) {
                this.checkTarget(event.getLocation(), this.char3);
            }
            else if (this.isStep == 2) {
                this.checkTarget(event.getLocation(), this.char2);
            }
            else if (this.isStep == 0) {
                this.checkTarget(event.getLocation(), this.char1);
            }
        }
        else {
            var pos = event.getLocation();
            pos = this.isTarget.parent.convertToNodeSpaceAR(pos);
            this.isTarget.position = pos;
        }
    };
    NewClass.prototype.onTouchCancel = function (event) {
        var _this = this;
        if (this.isMoving)
            return;
        if (!this.isTarget)
            return;
        console.log("step", this.isStep);
        if (this.isStep == 0) {
            var check = this.checkArea(event.getLocation(), this.arenaWood);
            if (check) {
                this.isStep++;
                this.isMoving = true;
                var pos_1 = this.arenaWood.position;
                pos_1 = this.arenaWood.parent.convertToWorldSpaceAR(pos_1);
                pos_1 = this.isTarget.parent.convertToNodeSpaceAR(pos_1);
                this.isTarget.position = pos_1;
                this.isTarget.getComponent(C).chatGo(this.tree1);
                cc.audioEngine.play(this.soundChatGo, false, 0.8);
                this.isTarget = null;
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.2 }).start();
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-200, 400) }).call(function () {
                    _this.pigMove1(pos_1);
                }).start();
            }
            else {
                // cc.tween(this.isTarget).to(0.5,{position:this.isTarget.getComponent(C).localPos}).star
                this.isTarget.position = this.isTarget.getComponent(C).localPos;
            }
        }
        else if (this.isStep == 1) {
            var pos = event.getLocation();
            if (this.checkTree(pos, this.arena2)) {
                this.isStep++;
                var pos2 = this.arena2.position;
                pos2 = this.arena2.parent.convertToWorldSpaceAR(pos2);
                pos2 = this.isTarget.parent.convertToNodeSpaceAR(pos2);
                this.isTarget.position = pos2;
                // this.isTarget.getComponent(C).chatGo2(this.tree2)
                this.hand5.active = false;
                this.isTarget = null;
                this.hand4.active = true;
                this.pig2.getComponent(animal_1.default).attack();
                this.char3.getComponent(C).attack2(this.pig2);
            }
        }
        else if (this.isStep == 2) {
            // this.isTarget = null;
            var pos = event.getLocation();
            if (this.checkTree(pos, this.arena3)) {
                this.hand5.active = false;
                this.isStep++;
                pos = this.isTarget.parent.convertToNodeSpaceAR(pos);
                var pos2 = this.arena3.position;
                pos2 = this.arena3.parent.convertToWorldSpaceAR(pos2);
                pos2 = this.isTarget.parent.convertToNodeSpaceAR(pos2);
                this.isTarget.position = pos2;
                // this.isTarget.position = pos;
                // this.isTarget.getComponent(C).chatGo2(this.tree2)
                this.hand4.active = false;
                this.isTarget = null;
                this.char2.getComponent(C).attack2(this.pig2);
                // this.hand4.active = true
            }
        }
        else if (this.isStep == 3) {
            this.isStep++;
            var pos = event.getLocation();
            if (this.checkTree(pos, this.tree1)) {
                this.hand4.active = false;
                this.hand5.active = false;
                pos = this.isTarget.parent.convertToNodeSpaceAR(pos);
                this.isTarget.position = pos;
                // this.isTarget.getComponent(C).chatGo2(this.tree1)
                this.showPop2();
            }
        }
        else if (this.isStep == 4) {
            // let pos = event.getLocation();
            // if (this.checkTree(pos, this.tree1)) {
            //     pos = this.isTarget.parent.convertToNodeSpaceAR(pos);
            //     this.isTarget.position = pos
            // }
        }
    };
    NewClass.prototype.pigMove1 = function (pos) {
        var _this = this;
        pos = pos.add(cc.v3(100, 0));
        this.char1.getComponent(C).warning();
        this.pig.getComponent(animal_1.default).run();
        this.scheduleOnce(function () {
            _this.char1.getComponent(C).angry();
        }, 0.5);
        cc.audioEngine.play(this.sounLonKeu, false, 0.8);
        cc.audioEngine.play(this.soundUhh, false, 0.8);
        cc.tween(this.pig).to(1, { position: pos }).call(function () {
            _this.pig.getComponent(animal_1.default).attack();
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundDapChao, false, 0.8);
            }, 0.3);
            _this.char1.getComponent(C).attack(_this.pig);
        }).start();
        this.scheduleOnce(function () {
            _this.char1.getComponent(C).die();
            _this.pig.getComponent(animal_1.default).idle();
            cc.tween(_this.mainCamera.node).delay(0.2).to(0.35, { position: cc.v3(0, 20) }).call(function () {
                _this.hand3.active = true;
                _this.bep.getComponent(cc.Button).enabled = true;
            }).start();
        }, 2.5);
    };
    NewClass.prototype.checkTarget = function (pos, node) {
        pos = node.parent.convertToNodeSpaceAR(pos);
        if (node.position.sub(pos).mag() <= 200) {
            this.isTarget = node;
            this.isFollow = true;
            // if (this.isStep == 0) {
            //     cc.tween(this.mainCamera).to(0.3, { zoomRatio: 0.9 }).start()
            // }
        }
    };
    NewClass.prototype.checkArea = function (pos, node) {
        pos = node.parent.convertToNodeSpaceAR(pos);
        if (node.position.sub(pos).mag() <= 200) {
            this.hand.active = false;
            return true;
        }
        return false;
    };
    NewClass.prototype.checkTree = function (pos, node) {
        pos = node.parent.convertToNodeSpaceAR(pos);
        if (node.position.sub(pos).mag() <= 500) {
            return true;
        }
        return false;
    };
    NewClass.prototype.update = function () {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // this.fitCamera.zoomRatio = 0.8
                // this.mainCamera.zoomRatio = 0.7
                // this.mainCamera.node.position = this.mainCamera.node.position.add( cc.v3(-100, 0))
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                // for (let child of this.uiFit.children) {
                //     child.scale = child.scale * 0.5;
                // }
                // this.uiFit.scaleX = 0.8
                // this.uiFit.scaleY = 0.8
            }
        }
        else {
            this.isvertical = false;
            // this.uiFit.children[0].scale = 0.4
            // this.uiFit.children[1].scale = 1
            // this.fitCamera.zoomRatio = 1
            // this.mainCamera.zoomRatio = 1.3
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
        // if (this.isFollow) {
        //     this.mainCamera.node.setPosition(this.isTarget.position.add(cc.v3(50, 0)).clampf(cc.v3(-520, -340), cc.v3(900, 340)));
        // }
    };
    NewClass.prototype.createWood = function (tree) {
        var _this = this;
        var _loop_1 = function (i) {
            var wood = cc.instantiate(this_1.preWood);
            wood.parent = tree;
            wood.scale = 1.3;
            wood.opacity = 0;
            wood.position = cc.v3(0, -50);
            cc.tween(wood).delay(0.12 * i).set({ opacity: 255 }).by(0.3, { position: cc.v3(0, 150) }).call(function () {
                _this.isCountWood += 1;
                _this.lbWood.string = _this.isCountWood.toString();
                wood.destroy();
            }).start();
        };
        var this_1 = this;
        for (var i = 0; i < 4; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.btn_wood = function () {
        this.hand3.active = false;
        cc.audioEngine.play(this.soundNhanGo, false, 0.8);
        this.popup.getComponent(cc.Animation).play("close_popup");
        this.transWood1();
        this.bep.getComponent(cc.Button).enabled = false;
    };
    NewClass.prototype.transWood1 = function () {
        var _this = this;
        var targetPos = this.popup.position;
        targetPos = this.popup.parent.convertToWorldSpaceAR(targetPos);
        targetPos = this.node.convertToNodeSpaceAR(targetPos);
        var midpos = cc.v2(targetPos.x - 50, (targetPos.y + 80 + 397) / 2);
        var _loop_2 = function (i) {
            // cc.audioEngine.play(this.soundNhanGo,false,0.8)
            var wood = cc.instantiate(this_2.preWood);
            wood.parent = this_2.node;
            wood.position = cc.v3(544, 410);
            wood.scale = 1.2;
            cc.tween(wood).delay(0.05 * i).bezierTo(0.5, cc.v2(544, 397), midpos, cc.v2(targetPos.x, targetPos.y + 80)).call(function () {
                _this.isCountWood -= 1;
                _this.lbWood.string = _this.isCountWood.toString();
                wood.destroy();
                if (i == 5) {
                    _this.getHappy();
                }
            }).start();
        };
        var this_2 = this;
        for (var i = 0; i < 6; i++) {
            _loop_2(i);
        }
    };
    NewClass.prototype.getHappy = function () {
        var _this = this;
        cc.audioEngine.play(this.soundUpgrade, false, 0.8);
        // cc.audioEngine.play(this., false, 0.8)
        // cc.audioEngine.stopEffect()
        this.bep.getChildByName("fire").active = true;
        this.char3.getComponent(C).setArcher();
        this.char2.getComponent(C).setArcher();
        this.char2.position = cc.v3(20, -100);
        this.char3.position = cc.v3(-255, -10);
        this.smokeEff.active = true;
        cc.tween(this.mainCamera).to(0.3, { zoomRatio: 0.7 }).call(function () {
            // this.hand4.active = true
            _this.listHouse[3].active = true;
            _this.listHouse[3].getComponent(cc.Animation).play("house2");
            _this.pig2.active = true;
            cc.audioEngine.play(_this.sounLonKeu, false, 0.8);
            _this.scheduleOnce(function () {
                _this.hand5.active = true;
                _this.isMoving = false;
            }, 1);
        }).start();
    };
    NewClass.prototype.showPop2 = function () {
        this.popup2.active = true;
    };
    NewClass.prototype.btn_upgrade = function () {
        var _this = this;
        cc.audioEngine.play(this.soundUpgrade, false, 0.8);
        cc.audioEngine.play(this.soundZee, false, 0.8);
        this.char3.getComponent(C).getHappy();
        this.char2.getComponent(C).getHappy();
        this.popup2.active = false;
        this.listHouse[3].active = true;
        this.house.active = false;
        // this.house.getComponent(cc.Animation).play("showhouse")
        this.smokeEff.active = true;
        this.scheduleOnce(function () {
            cc.tween(_this.mainCamera).to(0.4, { zoomRatio: 0.3 }).call(function () {
            }).start();
        }, 0.3);
        this.scheduleOnce(function () {
            for (var i = 0; i < _this.listHouse.length; i++) {
                var child = _this.listHouse[i];
                child.active = true;
                child.getComponent(cc.Animation).play("house2");
                // child.getChildByName("fxhouse").children[0].getComponent(cc.Animation).play("efSmoke")
            }
        }, 0.8);
        this.scheduleOnce(function () {
            _this.endCard.active = true;
        }, 1.5);
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "char3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pig", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pig2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arenaWood", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arena2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arena3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tree1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tree2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tree3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bulletMain", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand5", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "popup", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bep", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "popup2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "smokeEff", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHouse", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbWood", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundNhanGo", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChatGo", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundGioThoi", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUpgrade", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundRang", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "sounLonKeu", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundDapChao", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUhh", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundZee", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQzt5Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBSXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDVTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNVO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUE3RWIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVhNUI7SUFBRCxlQUFDO0NBdmFELEFBdWFDLENBdmFxQyxFQUFFLENBQUMsU0FBUyxHQXVhakQ7a0JBdmFvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEEgZnJvbSBcIi4vYW5pbWFsXCJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaGFyMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhcjI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoYXIzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwaWc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBpZzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFyZW5hV29vZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJlbmEyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhcmVuYTM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRyZWUxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0cmVlMjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0cmVlMzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnVsbGV0TWFpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmQzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kNDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZVdvb2Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJlcDogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gc25vdzogY2MuTm9kZVxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG91c2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNtb2tlRWZmOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0SG91c2U6IGNjLk5vZGVbXSA9IFtdXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiV29vZDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmROaGFuR286IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZENoYXRHbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kR2lvVGhvaTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kVXBncmFkZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kUmFuZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5Mb25LZXU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZERhcENoYW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFVoaDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kWmVlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIFxuICAgIGlzdmVydGljYWw9ZmFsc2VcbiAgICBpc0NvdW50V29vZCA9IDBcbiAgICBpc1RhcmdldCA9IG51bGw7XG4gICAgaXNGb2xsb3cgPSBmYWxzZTtcbiAgICBpc01vdmluZyA9IGZhbHNlXG4gICAgaXNTdGVwID0gMDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuOClcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zb3VuZEdpb1Rob2ksIHRydWUpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc291bmRSYW5nLCB0cnVlKTtcblxuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hDYW5jZWwsIHRoaXMpO1xuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaENhbmNlbCwgdGhpcyk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9wdXAuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgLy8gdGhpcy5oYW5kLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMC44IH0pLnN0YXJ0KClcbiAgICAgICAgfSwgMC41KVxuICAgIH1cbiAgICBvblRvdWNoTW92ZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc01vdmluZykgcmV0dXJuO1xuXG4gICAgICAgIGlmICghdGhpcy5pc1RhcmdldCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc1N0ZXApXG4gICAgICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUYXJnZXQoZXZlbnQuZ2V0TG9jYXRpb24oKSwgdGhpcy5jaGFyMylcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUYXJnZXQoZXZlbnQuZ2V0TG9jYXRpb24oKSwgdGhpcy5jaGFyMilcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUYXJnZXQoZXZlbnQuZ2V0TG9jYXRpb24oKSwgdGhpcy5jaGFyMSlcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgcG9zID0gdGhpcy5pc1RhcmdldC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldC5wb3NpdGlvbiA9IHBvc1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uVG91Y2hDYW5jZWwoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmcpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmlzVGFyZ2V0KSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RlcFwiLCB0aGlzLmlzU3RlcClcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDApIHtcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tBcmVhKGV2ZW50LmdldExvY2F0aW9uKCksIHRoaXMuYXJlbmFXb29kKVxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0ZXArK1xuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYXJlbmFXb29kLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuYXJlbmFXb29kLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKVxuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuaXNUYXJnZXQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldC5wb3NpdGlvbiA9IHBvc1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXQuZ2V0Q29tcG9uZW50KEMpLmNoYXRHbyh0aGlzLnRyZWUxKVxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoYXRHbywgZmFsc2UsIDAuOClcblxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXQgPSBudWxsXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAxLjIgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKC0yMDAsIDQwMCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlnTW92ZTEocG9zKVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcblxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuaXNUYXJnZXQpLnRvKDAuNSx7cG9zaXRpb246dGhpcy5pc1RhcmdldC5nZXRDb21wb25lbnQoQykubG9jYWxQb3N9KS5zdGFyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldC5wb3NpdGlvbiA9IHRoaXMuaXNUYXJnZXQuZ2V0Q29tcG9uZW50KEMpLmxvY2FsUG9zXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xuXG4gICAgICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrVHJlZShwb3MsIHRoaXMuYXJlbmEyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGVwKytcbiAgICAgICAgICAgICAgICBsZXQgcG9zMiA9IHRoaXMuYXJlbmEyLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHBvczIgPSB0aGlzLmFyZW5hMi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczIpXG5cbiAgICAgICAgICAgICAgICBwb3MyID0gdGhpcy5pc1RhcmdldC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMik7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldC5wb3NpdGlvbiA9IHBvczI7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pc1RhcmdldC5nZXRDb21wb25lbnQoQykuY2hhdEdvMih0aGlzLnRyZWUyKVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZDUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0ID0gbnVsbFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZDQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMucGlnMi5nZXRDb21wb25lbnQoQSkuYXR0YWNrKClcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXIzLmdldENvbXBvbmVudChDKS5hdHRhY2syKHRoaXMucGlnMilcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDIpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuaXNUYXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1RyZWUocG9zLCB0aGlzLmFyZW5hMykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmQ1LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0ZXArK1xuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuaXNUYXJnZXQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLmFyZW5hMy5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBwb3MyID0gdGhpcy5hcmVuYTMucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MyKVxuXG4gICAgICAgICAgICAgICAgcG9zMiA9IHRoaXMuaXNUYXJnZXQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXQucG9zaXRpb24gPSBwb3MyO1xuXG5cblxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXNUYXJnZXQucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pc1RhcmdldC5nZXRDb21wb25lbnQoQykuY2hhdEdvMih0aGlzLnRyZWUyKVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZDQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0ID0gbnVsbFxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcjIuZ2V0Q29tcG9uZW50KEMpLmF0dGFjazIodGhpcy5waWcyKVxuXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5oYW5kNC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMykge1xuICAgICAgICAgICAgdGhpcy5pc1N0ZXArK1xuICAgICAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1RyZWUocG9zLCB0aGlzLnRyZWUxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZDQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kNS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuaXNUYXJnZXQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldC5wb3NpdGlvbiA9IHBvc1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXNUYXJnZXQuZ2V0Q29tcG9uZW50KEMpLmNoYXRHbzIodGhpcy50cmVlMSlcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSA0KSB7XG5cbiAgICAgICAgICAgIC8vIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuY2hlY2tUcmVlKHBvcywgdGhpcy50cmVlMSkpIHtcbiAgICAgICAgICAgIC8vICAgICBwb3MgPSB0aGlzLmlzVGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuaXNUYXJnZXQucG9zaXRpb24gPSBwb3NcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwaWdNb3ZlMShwb3MpIHtcbiAgICAgICAgcG9zID0gcG9zLmFkZChjYy52MygxMDAsIDApKVxuICAgICAgICB0aGlzLmNoYXIxLmdldENvbXBvbmVudChDKS53YXJuaW5nKCk7XG4gICAgICAgIHRoaXMucGlnLmdldENvbXBvbmVudChBKS5ydW4oKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYXIxLmdldENvbXBvbmVudChDKS5hbmdyeSgpO1xuXG4gICAgICAgIH0sIDAuNSlcblxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bkxvbktldSwgZmFsc2UsIDAuOClcblxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVaGgsIGZhbHNlLCAwLjgpXG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5waWcpLnRvKDEsIHsgcG9zaXRpb246IHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGlnLmdldENvbXBvbmVudChBKS5hdHRhY2soKVxuXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRGFwQ2hhbywgZmFsc2UsIDAuOClcbiAgICAgICAgICAgIH0sIDAuMylcblxuXG4gICAgICAgICAgICB0aGlzLmNoYXIxLmdldENvbXBvbmVudChDKS5hdHRhY2sodGhpcy5waWcpXG5cbiAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYXIxLmdldENvbXBvbmVudChDKS5kaWUoKVxuICAgICAgICAgICAgdGhpcy5waWcuZ2V0Q29tcG9uZW50KEEpLmlkbGUoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLmRlbGF5KDAuMikudG8oMC4zNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMjApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZDMuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuYmVwLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH0sIDIuNSlcbiAgICB9XG5cbiAgICBjaGVja1RhcmdldChwb3MsIG5vZGUpIHtcbiAgICAgICAgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICBpZiAobm9kZS5wb3NpdGlvbi5zdWIocG9zKS5tYWcoKSA8PSAyMDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXQgPSBub2RlXG4gICAgICAgICAgICB0aGlzLmlzRm9sbG93ID0gdHJ1ZVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNTdGVwID09IDApIHtcbiAgICAgICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDAuOSB9KS5zdGFydCgpXG5cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0FyZWEocG9zLCBub2RlKSB7XG4gICAgICAgIHBvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgaWYgKG5vZGUucG9zaXRpb24uc3ViKHBvcykubWFnKCkgPD0gMjAwKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNoZWNrVHJlZShwb3MsIG5vZGUpIHtcbiAgICAgICAgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICBpZiAobm9kZS5wb3NpdGlvbi5zdWIocG9zKS5tYWcoKSA8PSA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5maXRDYW1lcmEuem9vbVJhdGlvID0gMC44XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDAuN1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uID0gdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24uYWRkKCBjYy52MygtMTAwLCAwKSlcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLnVpRml0LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkLnNjYWxlID0gY2hpbGQuc2NhbGUgKiAwLjU7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuc2NhbGVYID0gMC44XG4gICAgICAgICAgICAgICAgLy8gdGhpcy51aUZpdC5zY2FsZVkgPSAwLjhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLnVpRml0LmNoaWxkcmVuWzBdLnNjYWxlID0gMC40XG4gICAgICAgICAgICAvLyB0aGlzLnVpRml0LmNoaWxkcmVuWzFdLnNjYWxlID0gMVxuXG4gICAgICAgICAgICAvLyB0aGlzLmZpdENhbWVyYS56b29tUmF0aW8gPSAxXG4gICAgICAgICAgICAvLyB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMS4zXG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5pc0ZvbGxvdykge1xuICAgICAgICAvLyAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUuc2V0UG9zaXRpb24odGhpcy5pc1RhcmdldC5wb3NpdGlvbi5hZGQoY2MudjMoNTAsIDApKS5jbGFtcGYoY2MudjMoLTUyMCwgLTM0MCksIGNjLnYzKDkwMCwgMzQwKSkpO1xuXG4gICAgICAgIC8vIH1cblxuICAgIH1cbiAgICBjcmVhdGVXb29kKHRyZWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCB3b29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXb29kKVxuICAgICAgICAgICAgd29vZC5wYXJlbnQgPSB0cmVlXG4gICAgICAgICAgICB3b29kLnNjYWxlID0gMS4zXG4gICAgICAgICAgICB3b29kLm9wYWNpdHkgPSAwXG4gICAgICAgICAgICB3b29kLnBvc2l0aW9uID0gY2MudjMoMCwgLTUwKVxuICAgICAgICAgICAgY2MudHdlZW4od29vZCkuZGVsYXkoMC4xMiAqIGkpLnNldCh7IG9wYWNpdHk6IDI1NSB9KS5ieSgwLjMsIHsgcG9zaXRpb246IGNjLnYzKDAsIDE1MCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50V29vZCArPSAxXG4gICAgICAgICAgICAgICAgdGhpcy5sYldvb2Quc3RyaW5nID0gdGhpcy5pc0NvdW50V29vZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgd29vZC5kZXN0cm95KClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBidG5fd29vZCgpIHtcbiAgICAgICAgdGhpcy5oYW5kMy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTmhhbkdvLCBmYWxzZSwgMC44KVxuXG4gICAgICAgIHRoaXMucG9wdXAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNsb3NlX3BvcHVwXCIpXG4gICAgICAgIHRoaXMudHJhbnNXb29kMSgpXG4gICAgICAgIHRoaXMuYmVwLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxuXG5cbiAgICB9XG4gICAgdHJhbnNXb29kMSgpIHtcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMucG9wdXAucG9zaXRpb25cbiAgICAgICAgdGFyZ2V0UG9zID0gdGhpcy5wb3B1cC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldFBvcyk7XG4gICAgICAgIHRhcmdldFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXRQb3MpO1xuICAgICAgICBsZXQgbWlkcG9zID0gY2MudjIodGFyZ2V0UG9zLnggLSA1MCwgKHRhcmdldFBvcy55ICsgODAgKyAzOTcpIC8gMilcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZE5oYW5HbyxmYWxzZSwwLjgpXG4gICAgICAgICAgICBsZXQgd29vZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlV29vZClcbiAgICAgICAgICAgIHdvb2QucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgd29vZC5wb3NpdGlvbiA9IGNjLnYzKDU0NCwgNDEwKVxuICAgICAgICAgICAgd29vZC5zY2FsZSA9IDEuMlxuICAgICAgICAgICAgY2MudHdlZW4od29vZCkuZGVsYXkoMC4wNSAqIGkpLmJlemllclRvKDAuNSwgY2MudjIoNTQ0LCAzOTcpLCBtaWRwb3MsIGNjLnYyKHRhcmdldFBvcy54LCB0YXJnZXRQb3MueSArIDgwKSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50V29vZCAtPSAxXG4gICAgICAgICAgICAgICAgdGhpcy5sYldvb2Quc3RyaW5nID0gdGhpcy5pc0NvdW50V29vZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgd29vZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SGFwcHkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRIYXBweSgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBncmFkZSwgZmFsc2UsIDAuOClcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLiwgZmFsc2UsIDAuOClcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCgpXG4gICAgICAgIHRoaXMuYmVwLmdldENoaWxkQnlOYW1lKFwiZmlyZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoYXIzLmdldENvbXBvbmVudChDKS5zZXRBcmNoZXIoKTtcbiAgICAgICAgdGhpcy5jaGFyMi5nZXRDb21wb25lbnQoQykuc2V0QXJjaGVyKCk7XG4gICAgICAgIHRoaXMuY2hhcjIucG9zaXRpb24gPSBjYy52MygyMCwgLTEwMClcbiAgICAgICAgdGhpcy5jaGFyMy5wb3NpdGlvbiA9IGNjLnYzKC0yNTUsIC0xMClcblxuICAgICAgICB0aGlzLnNtb2tlRWZmLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAwLjcgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmhhbmQ0LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMubGlzdEhvdXNlWzNdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMubGlzdEhvdXNlWzNdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJob3VzZTJcIilcbiAgICAgICAgICAgIHRoaXMucGlnMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5Mb25LZXUsIGZhbHNlLCAwLjgpXG5cbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmQ1LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICB9KS5zdGFydCgpXG5cbiAgICB9XG4gICAgc2hvd1BvcDIoKSB7XG4gICAgICAgIHRoaXMucG9wdXAyLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIGJ0bl91cGdyYWRlKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVcGdyYWRlLCBmYWxzZSwgMC44KVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRaZWUsIGZhbHNlLCAwLjgpXG5cbiAgICAgICAgdGhpcy5jaGFyMy5nZXRDb21wb25lbnQoQykuZ2V0SGFwcHkoKTtcbiAgICAgICAgdGhpcy5jaGFyMi5nZXRDb21wb25lbnQoQykuZ2V0SGFwcHkoKTtcbiAgICAgICAgdGhpcy5wb3B1cDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGlzdEhvdXNlWzNdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5ob3VzZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAvLyB0aGlzLmhvdXNlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzaG93aG91c2VcIilcbiAgICAgICAgdGhpcy5zbW9rZUVmZi5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC40LCB7IHpvb21SYXRpbzogMC4zIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgfSkuc3RhcnQoKVxuXG5cbiAgICAgICAgfSwgMC4zKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEhvdXNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0SG91c2VbaV1cbiAgICAgICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJob3VzZTJcIilcbiAgICAgICAgICAgICAgICAvLyBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcImZ4aG91c2VcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImVmU21va2VcIilcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwLjgpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlXG4gICAgICAgIH0sIDEuNSlcbiAgICB9XG5cbn1cbiJdfQ==