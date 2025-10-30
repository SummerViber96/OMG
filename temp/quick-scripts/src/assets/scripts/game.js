"use strict";
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