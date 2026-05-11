
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBd0I7QUFFbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1YUM7UUFyYUcsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUNwQixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBRWhCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBYyxFQUFF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SUFBSSxDQUFDO3lDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFJcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDTTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNVO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQTdFYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdWE1QjtJQUFELGVBQUM7Q0F2YUQsQUF1YUMsQ0F2YXFDLEVBQUUsQ0FBQyxTQUFTLEdBdWFqRDtrQkF2YW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQSBmcm9tIFwiLi9hbmltYWxcIlxyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIG1haW5DYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXIxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcjI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFyMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBpZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBpZzI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhcmVuYVdvb2Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhcmVuYTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhcmVuYTM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0cmVlMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRyZWUyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0cmVlMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1bGxldE1haW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3B1cDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlV29vZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJlcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIHNub3c6IGNjLk5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9wdXAyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaG91c2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzbW9rZUVmZjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RIb3VzZTogY2MuTm9kZVtdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYldvb2Q6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE5oYW5HbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoYXRHbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEdpb1Rob2k6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRVcGdyYWRlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kUmFuZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuTG9uS2V1OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRGFwQ2hhbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFVoaDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFplZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIFxyXG4gICAgaXN2ZXJ0aWNhbD1mYWxzZVxyXG4gICAgaXNDb3VudFdvb2QgPSAwXHJcbiAgICBpc1RhcmdldCA9IG51bGw7XHJcbiAgICBpc0ZvbGxvdyA9IGZhbHNlO1xyXG4gICAgaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgaXNTdGVwID0gMDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjgpXHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNvdW5kR2lvVGhvaSwgdHJ1ZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNvdW5kUmFuZywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoQ2FuY2VsLCB0aGlzKTtcclxuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaENhbmNlbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVwLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gdGhpcy5oYW5kLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAwLjggfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgIH1cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNTdGVwKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1RhcmdldChldmVudC5nZXRMb2NhdGlvbigpLCB0aGlzLmNoYXIzKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVGFyZ2V0KGV2ZW50LmdldExvY2F0aW9uKCksIHRoaXMuY2hhcjIpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUYXJnZXQoZXZlbnQuZ2V0TG9jYXRpb24oKSwgdGhpcy5jaGFyMSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuaXNUYXJnZXQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldC5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVG91Y2hDYW5jZWwoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01vdmluZykgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5pc1RhcmdldCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RlcFwiLCB0aGlzLmlzU3RlcClcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrQXJlYShldmVudC5nZXRMb2NhdGlvbigpLCB0aGlzLmFyZW5hV29vZClcclxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3RlcCsrXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYXJlbmFXb29kLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gdGhpcy5hcmVuYVdvb2QucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmlzVGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldC5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldC5nZXRDb21wb25lbnQoQykuY2hhdEdvKHRoaXMudHJlZTEpXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGF0R28sIGZhbHNlLCAwLjgpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldCA9IG51bGxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMS4yIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKC0yMDAsIDQwMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWdNb3ZlMShwb3MpXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmlzVGFyZ2V0KS50bygwLjUse3Bvc2l0aW9uOnRoaXMuaXNUYXJnZXQuZ2V0Q29tcG9uZW50KEMpLmxvY2FsUG9zfSkuc3RhclxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldC5wb3NpdGlvbiA9IHRoaXMuaXNUYXJnZXQuZ2V0Q29tcG9uZW50KEMpLmxvY2FsUG9zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrVHJlZShwb3MsIHRoaXMuYXJlbmEyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0ZXArK1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLmFyZW5hMi5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHBvczIgPSB0aGlzLmFyZW5hMi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczIpXHJcblxyXG4gICAgICAgICAgICAgICAgcG9zMiA9IHRoaXMuaXNUYXJnZXQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcmdldC5wb3NpdGlvbiA9IHBvczI7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlzVGFyZ2V0LmdldENvbXBvbmVudChDKS5jaGF0R28yKHRoaXMudHJlZTIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmQ1LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFyZ2V0ID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kNC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpZzIuZ2V0Q29tcG9uZW50KEEpLmF0dGFjaygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXIzLmdldENvbXBvbmVudChDKS5hdHRhY2syKHRoaXMucGlnMilcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmlzVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrVHJlZShwb3MsIHRoaXMuYXJlbmEzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kNS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0ZXArK1xyXG4gICAgICAgICAgICAgICAgcG9zID0gdGhpcy5pc1RhcmdldC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MyID0gdGhpcy5hcmVuYTMucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBwb3MyID0gdGhpcy5hcmVuYTMucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MyKVxyXG5cclxuICAgICAgICAgICAgICAgIHBvczIgPSB0aGlzLmlzVGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXQucG9zaXRpb24gPSBwb3MyO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pc1RhcmdldC5wb3NpdGlvbiA9IHBvcztcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXNUYXJnZXQuZ2V0Q29tcG9uZW50KEMpLmNoYXRHbzIodGhpcy50cmVlMilcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZDQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXQgPSBudWxsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXIyLmdldENvbXBvbmVudChDKS5hdHRhY2syKHRoaXMucGlnMilcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmhhbmQ0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwKytcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrVHJlZShwb3MsIHRoaXMudHJlZTEpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmQ0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kNS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgcG9zID0gdGhpcy5pc1RhcmdldC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXJnZXQucG9zaXRpb24gPSBwb3NcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXNUYXJnZXQuZ2V0Q29tcG9uZW50KEMpLmNoYXRHbzIodGhpcy50cmVlMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcDIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5jaGVja1RyZWUocG9zLCB0aGlzLnRyZWUxKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgcG9zID0gdGhpcy5pc1RhcmdldC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuaXNUYXJnZXQucG9zaXRpb24gPSBwb3NcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBpZ01vdmUxKHBvcykge1xyXG4gICAgICAgIHBvcyA9IHBvcy5hZGQoY2MudjMoMTAwLCAwKSlcclxuICAgICAgICB0aGlzLmNoYXIxLmdldENvbXBvbmVudChDKS53YXJuaW5nKCk7XHJcbiAgICAgICAgdGhpcy5waWcuZ2V0Q29tcG9uZW50KEEpLnJ1bigpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXIxLmdldENvbXBvbmVudChDKS5hbmdyeSgpO1xyXG5cclxuICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuTG9uS2V1LCBmYWxzZSwgMC44KVxyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVaGgsIGZhbHNlLCAwLjgpXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucGlnKS50bygxLCB7IHBvc2l0aW9uOiBwb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGlnLmdldENvbXBvbmVudChBKS5hdHRhY2soKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRGFwQ2hhbywgZmFsc2UsIDAuOClcclxuICAgICAgICAgICAgfSwgMC4zKVxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hhcjEuZ2V0Q29tcG9uZW50KEMpLmF0dGFjayh0aGlzLnBpZylcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyMS5nZXRDb21wb25lbnQoQykuZGllKClcclxuICAgICAgICAgICAgdGhpcy5waWcuZ2V0Q29tcG9uZW50KEEpLmlkbGUoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkuZGVsYXkoMC4yKS50bygwLjM1LCB7IHBvc2l0aW9uOiBjYy52MygwLCAyMCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmQzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYmVwLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9LCAyLjUpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tUYXJnZXQocG9zLCBub2RlKSB7XHJcbiAgICAgICAgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIGlmIChub2RlLnBvc2l0aW9uLnN1Yihwb3MpLm1hZygpIDw9IDIwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0ID0gbm9kZVxyXG4gICAgICAgICAgICB0aGlzLmlzRm9sbG93ID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5pc1N0ZXAgPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAwLjkgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrQXJlYShwb3MsIG5vZGUpIHtcclxuICAgICAgICBwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgaWYgKG5vZGUucG9zaXRpb24uc3ViKHBvcykubWFnKCkgPD0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNoZWNrVHJlZShwb3MsIG5vZGUpIHtcclxuICAgICAgICBwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgaWYgKG5vZGUucG9zaXRpb24uc3ViKHBvcykubWFnKCkgPD0gNTAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcblxyXG4gICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIDwgY2Mud2luU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzdmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZpdENhbWVyYS56b29tUmF0aW8gPSAwLjhcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAwLjdcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uID0gdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24uYWRkKCBjYy52MygtMTAwLCAwKSlcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLnVpRml0LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGQuc2NhbGUgPSBjaGlsZC5zY2FsZSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuc2NhbGVYID0gMC44XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVpRml0LnNjYWxlWSA9IDAuOFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudWlGaXQuY2hpbGRyZW5bMF0uc2NhbGUgPSAwLjRcclxuICAgICAgICAgICAgLy8gdGhpcy51aUZpdC5jaGlsZHJlblsxXS5zY2FsZSA9IDFcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuZml0Q2FtZXJhLnpvb21SYXRpbyA9IDFcclxuICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuM1xyXG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNGb2xsb3cpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUuc2V0UG9zaXRpb24odGhpcy5pc1RhcmdldC5wb3NpdGlvbi5hZGQoY2MudjMoNTAsIDApKS5jbGFtcGYoY2MudjMoLTUyMCwgLTM0MCksIGNjLnYzKDkwMCwgMzQwKSkpO1xyXG5cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG4gICAgY3JlYXRlV29vZCh0cmVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHdvb2QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVdvb2QpXHJcbiAgICAgICAgICAgIHdvb2QucGFyZW50ID0gdHJlZVxyXG4gICAgICAgICAgICB3b29kLnNjYWxlID0gMS4zXHJcbiAgICAgICAgICAgIHdvb2Qub3BhY2l0eSA9IDBcclxuICAgICAgICAgICAgd29vZC5wb3NpdGlvbiA9IGNjLnYzKDAsIC01MClcclxuICAgICAgICAgICAgY2MudHdlZW4od29vZCkuZGVsYXkoMC4xMiAqIGkpLnNldCh7IG9wYWNpdHk6IDI1NSB9KS5ieSgwLjMsIHsgcG9zaXRpb246IGNjLnYzKDAsIDE1MCkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ291bnRXb29kICs9IDFcclxuICAgICAgICAgICAgICAgIHRoaXMubGJXb29kLnN0cmluZyA9IHRoaXMuaXNDb3VudFdvb2QudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgd29vZC5kZXN0cm95KClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ0bl93b29kKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZDMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTmhhbkdvLCBmYWxzZSwgMC44KVxyXG5cclxuICAgICAgICB0aGlzLnBvcHVwLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjbG9zZV9wb3B1cFwiKVxyXG4gICAgICAgIHRoaXMudHJhbnNXb29kMSgpXHJcbiAgICAgICAgdGhpcy5iZXAuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcblxyXG5cclxuICAgIH1cclxuICAgIHRyYW5zV29vZDEoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMucG9wdXAucG9zaXRpb25cclxuICAgICAgICB0YXJnZXRQb3MgPSB0aGlzLnBvcHVwLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0UG9zKTtcclxuICAgICAgICB0YXJnZXRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0UG9zKTtcclxuICAgICAgICBsZXQgbWlkcG9zID0gY2MudjIodGFyZ2V0UG9zLnggLSA1MCwgKHRhcmdldFBvcy55ICsgODAgKyAzOTcpIC8gMilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmROaGFuR28sZmFsc2UsMC44KVxyXG4gICAgICAgICAgICBsZXQgd29vZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlV29vZClcclxuICAgICAgICAgICAgd29vZC5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHdvb2QucG9zaXRpb24gPSBjYy52Myg1NDQsIDQxMClcclxuICAgICAgICAgICAgd29vZC5zY2FsZSA9IDEuMlxyXG4gICAgICAgICAgICBjYy50d2Vlbih3b29kKS5kZWxheSgwLjA1ICogaSkuYmV6aWVyVG8oMC41LCBjYy52Mig1NDQsIDM5NyksIG1pZHBvcywgY2MudjIodGFyZ2V0UG9zLngsIHRhcmdldFBvcy55ICsgODApKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDb3VudFdvb2QgLT0gMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYldvb2Quc3RyaW5nID0gdGhpcy5pc0NvdW50V29vZC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICB3b29kLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SGFwcHkoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0SGFwcHkoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBncmFkZSwgZmFsc2UsIDAuOClcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuLCBmYWxzZSwgMC44KVxyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoKVxyXG4gICAgICAgIHRoaXMuYmVwLmdldENoaWxkQnlOYW1lKFwiZmlyZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hhcjMuZ2V0Q29tcG9uZW50KEMpLnNldEFyY2hlcigpO1xyXG4gICAgICAgIHRoaXMuY2hhcjIuZ2V0Q29tcG9uZW50KEMpLnNldEFyY2hlcigpO1xyXG4gICAgICAgIHRoaXMuY2hhcjIucG9zaXRpb24gPSBjYy52MygyMCwgLTEwMClcclxuICAgICAgICB0aGlzLmNoYXIzLnBvc2l0aW9uID0gY2MudjMoLTI1NSwgLTEwKVxyXG5cclxuICAgICAgICB0aGlzLnNtb2tlRWZmLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkudG8oMC4zLCB7IHpvb21SYXRpbzogMC43IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmhhbmQ0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5saXN0SG91c2VbM10uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RIb3VzZVszXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaG91c2UyXCIpXHJcbiAgICAgICAgICAgIHRoaXMucGlnMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bkxvbktldSwgZmFsc2UsIDAuOClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZDUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuXHJcbiAgICB9XHJcbiAgICBzaG93UG9wMigpIHtcclxuICAgICAgICB0aGlzLnBvcHVwMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgYnRuX3VwZ3JhZGUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBncmFkZSwgZmFsc2UsIDAuOClcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRaZWUsIGZhbHNlLCAwLjgpXHJcblxyXG4gICAgICAgIHRoaXMuY2hhcjMuZ2V0Q29tcG9uZW50KEMpLmdldEhhcHB5KCk7XHJcbiAgICAgICAgdGhpcy5jaGFyMi5nZXRDb21wb25lbnQoQykuZ2V0SGFwcHkoKTtcclxuICAgICAgICB0aGlzLnBvcHVwMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxpc3RIb3VzZVszXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5ob3VzZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIHRoaXMuaG91c2UuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInNob3dob3VzZVwiKVxyXG4gICAgICAgIHRoaXMuc21va2VFZmYuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLnRvKDAuNCwgeyB6b29tUmF0aW86IDAuMyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG5cclxuXHJcbiAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RIb3VzZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0SG91c2VbaV1cclxuICAgICAgICAgICAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaG91c2UyXCIpXHJcbiAgICAgICAgICAgICAgICAvLyBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcImZ4aG91c2VcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImVmU21va2VcIilcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDEuNSlcclxuICAgIH1cclxuXHJcbn1cclxuIl19