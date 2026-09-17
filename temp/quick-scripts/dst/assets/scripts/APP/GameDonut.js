
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/APP/GameDonut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8778zXcBZHvK+TTP4/Ph/t', 'GameDonut');
// scripts/APP/GameDonut.ts

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
globalThis.gold = 0;
globalThis.scGame = false;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundShowPop = null;
        _this.soundClosePop = null;
        _this.soundChien = null;
        _this.soundBg = null;
        _this.soundWin = null;
        _this.soundLose = null;
        _this.soundHello = null;
        _this.soundHelloCus2 = null;
        _this.soundHelloCus3 = null;
        _this.soundTrans = null;
        _this.soundClick = null;
        _this.soundDonutJump = null;
        _this.soundEnd = null;
        _this.soundSellDone = null;
        _this.tut = null;
        _this.hand = null;
        _this.endCard = null;
        _this.linkToStore = null;
        _this.camera = null;
        _this.logo = null;
        _this.listCus = null;
        // @property(cc.Node)
        // listHand: cc.Node = null;
        _this.soundWrong = null;
        _this.fxColor = null;
        //new
        // @property(cc.Node)
        // btnDonut: cc.Node = null
        // @property(cc.Prefab)
        // preDonut: cc.Prefab = null
        // @property(cc.Node)
        // listDonutPlace: cc.Node = null;
        // @property(cc.Node)
        // listDonutSub: cc.Node = null;
        // @property(cc.Node)
        // listKhayPlace: cc.Node = null;
        // @property(cc.Node)
        // listKhaySub: cc.Node = null
        _this.listhand = null;
        _this.btnDau = null;
        _this.cua = null;
        _this.door = null;
        _this.listPreBox = [];
        _this.listItem2 = null;
        _this.btnDone = null;
        _this.main2 = null;
        _this.listBox = null;
        _this.ro = null;
        _this.listNoti = null;
        _this.spoon = null;
        _this.dia = null;
        // @property(cc.Camera)
        // camera:cc.Camera=null
        _this.maxKhay = 7;
        _this.arrDonutpos = [];
        _this.arrDonut = [null, null, null, null, null, null, null];
        _this.arrKhay = [null, null, null, null, null, null, null];
        _this.arrKhayPos = [];
        _this.isTutChili = false;
        _this.isTutMeat = false;
        _this.isTutVegetTable = false;
        _this.isTutClickMeat = false;
        // @property(cc.AudioClip)
        // soundBg:cc.AudioClip=null;
        _this.isTargetPop = null;
        _this.isStep = 0;
        _this.isTargetCus = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.countCus = 0;
        _this.idSound = null;
        _this.lastPortrait = null;
        _this.isMixTouch = false;
        _this.spoonMinX = -80;
        _this.spoonMaxX = 80;
        _this.spoonMinY = -40;
        _this.spoonMaxY = -5;
        _this.spoonRestY = -23;
        _this.spoonRestAngle = 0;
        _this.listBeads = null;
        _this.beadScoopState = {};
        _this.isOpenDoor = false;
        _this.isClickBox = 0;
        _this.isDone = false;
        _this.countItem = 0;
        _this.isCountNoti = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.initPhysics();
    };
    NewClass.prototype.start = function () {
        cc.audioEngine.play(this.soundBg, true, 0.3);
        this.lastPortrait = this.isPortrait();
        this.reponsive(this.lastPortrait);
        this.setupSpoonMix();
    };
    NewClass.prototype.isPortrait = function () {
        var size = cc.view.getFrameSize();
        return size.width < size.height;
    };
    NewClass.prototype.initPhysics = function () {
        var physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        physicsManager.gravity = cc.v2(0, -980);
        var Bits = cc.PhysicsManager.DrawBits;
        // physicsManager.debugDrawFlags = Bits.e_aabbBit | Bits.e_pairBit | Bits.e_centerOfMassBit | Bits.e_jointBit | Bits.e_shapeBit;
    };
    NewClass.prototype.setupSpoonMix = function () {
        if (!this.dia && this.main2) {
            this.dia = this.main2.getChildByName("dia");
        }
        if (!this.spoon && this.dia) {
            this.spoon = this.dia.getChildByName("image_029");
        }
        if (!this.spoon)
            return;
        var body = this.spoon.getComponent(cc.RigidBody);
        if (body) {
            body.enabled = false;
        }
        var col = this.spoon.getComponent(cc.PhysicsBoxCollider);
        if (col) {
            col.enabled = false;
        }
        this.listBeads = this.dia.getChildByName("listItem");
        if (this.listBeads && this.spoon.parent !== this.listBeads) {
            var world = this.spoon.convertToWorldSpaceAR(cc.v2(0, 0));
            this.spoon.parent = this.listBeads;
            this.spoon.setPosition(this.listBeads.convertToNodeSpaceAR(world));
        }
        this.spoonRestY = this.spoon.y;
        this.spoonRestAngle = this.spoon.angle;
        this.updateBeadLayers();
        if (this.listBeads) {
            var groups = cc.game.groupList || [];
            var hasBeadGroup = groups.indexOf("bead") >= 0;
            for (var i = 0; i < this.listBeads.childrenCount; i++) {
                var bead = this.listBeads.children[i];
                if (hasBeadGroup) {
                    bead.group = "bead";
                }
                var body_1 = bead.getComponent(cc.RigidBody);
                if (!body_1)
                    continue;
                body_1.linearDamping = 1.2;
                body_1.angularDamping = 1.5;
                body_1.gravityScale = 0.45;
            }
        }
        this.node.on(cc.Node.EventType.TOUCH_START, this.onMixTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMixTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onMixTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onMixTouchEnd, this);
    };
    NewClass.prototype.getTouchInSpoonParent = function (event) {
        var screenPos = event.getLocation();
        var worldPos = this.camera.getScreenToWorldPoint(screenPos);
        return this.spoon.parent.convertToNodeSpaceAR(worldPos);
    };
    NewClass.prototype.onMixTouchStart = function (event) {
        this.isMixTouch = true;
        if (this.tut) {
            this.tut.active = false;
        }
        this.updateBeadLayers();
    };
    NewClass.prototype.onMixTouchMove = function (event) {
        if (!this.isMixTouch)
            return;
        this.moveSpoonByDelta(event);
    };
    NewClass.prototype.onMixTouchEnd = function () {
        this.isMixTouch = false;
        if (!this.spoon)
            return;
        this.spoon.y = this.spoonRestY;
        this.spoon.angle = this.spoonRestAngle;
        this.updateBeadLayers();
    };
    NewClass.prototype.getLocalDelta = function (event) {
        var cur = this.getTouchInSpoonParent(event);
        var loc = event.getLocation();
        var delta = event.getDelta();
        var prevScreen = cc.v2(loc.x - delta.x, loc.y - delta.y);
        var prevWorld = this.camera.getScreenToWorldPoint(prevScreen);
        var prevLocal = this.spoon.parent.convertToNodeSpaceAR(prevWorld);
        var d = cc.v2(cur.x - prevLocal.x, cur.y - prevLocal.y);
        if (Math.abs(d.x) < 0.2) {
            d.x = delta.x * 0.5;
        }
        return d;
    };
    NewClass.prototype.moveSpoonByDelta = function (event) {
        if (!this.spoon)
            return;
        var d = this.getLocalDelta(event);
        var x = cc.misc.clampf(this.spoon.x + d.x, this.spoonMinX, this.spoonMaxX);
        this.spoon.setPosition(x, this.spoonRestY);
        this.spoon.angle = this.spoonRestAngle;
        this.stirBeads(d.x);
        this.updateBeadLayers();
    };
    NewClass.prototype.updateBeadLayers = function () {
        if (!this.listBeads || !this.spoon)
            return;
        if (this.spoon.parent !== this.listBeads) {
            var world = this.spoon.convertToWorldSpaceAR(cc.v2(0, 0));
            this.spoon.parent = this.listBeads;
            this.spoon.setPosition(this.listBeads.convertToNodeSpaceAR(world));
            this.spoonRestY = this.spoon.y;
        }
        var scoopWorld = this.spoon.convertToWorldSpaceAR(cc.v2(0, -25));
        var scoop = cc.v2(scoopWorld.x, scoopWorld.y);
        var behind = [];
        var front = [];
        for (var i = 0; i < this.listBeads.childrenCount; i++) {
            var bead = this.listBeads.children[i];
            if (bead === this.spoon)
                continue;
            var p = bead.convertToWorldSpaceAR(cc.v2(0, 0));
            var dist = cc.v2(p.x, p.y).sub(scoop).mag();
            var id = bead.uuid;
            var scooped = this.beadScoopState[id] === true;
            if (!scooped && dist < 240) {
                scooped = true;
            }
            else if (scooped && dist > 380) {
                scooped = false;
            }
            this.beadScoopState[id] = scooped;
            if (scooped) {
                front.push(bead);
            }
            else {
                behind.push(bead);
            }
        }
        var idx = 0;
        for (var i = 0; i < behind.length; i++) {
            behind[i].setSiblingIndex(idx++);
        }
        this.spoon.setSiblingIndex(idx++);
        for (var i = 0; i < front.length; i++) {
            front[i].setSiblingIndex(idx++);
        }
    };
    NewClass.prototype.stirBeads = function (vx) {
        if (!this.listBeads || Math.abs(vx) < 0.08)
            return;
        var spoonInBeads = this.listBeads.convertToNodeSpaceAR(this.spoon.convertToWorldSpaceAR(cc.v2(0, 0)));
        for (var i = 0; i < this.listBeads.childrenCount; i++) {
            var bead = this.listBeads.children[i];
            if (bead === this.spoon)
                continue;
            var dx = bead.x - spoonInBeads.x;
            var dy = bead.y - spoonInBeads.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > 200)
                continue;
            var t = 1 - dist / 200;
            bead.x += vx * (0.55 + 0.7 * t);
            bead.y += vx * 0.08 * t * (dx >= 0 ? 1 : -1);
            bead.x = cc.misc.clampf(bead.x, -200, 200);
            bead.y = cc.misc.clampf(bead.y, -75, 45);
            var body = bead.getComponent(cc.RigidBody);
            if (body) {
                body.syncPosition(false);
                body.linearVelocity = cc.v2(vx * 16 * t, 0);
                body.angularVelocity = vx * 0.6 * t;
                body.awake = true;
            }
        }
    };
    NewClass.prototype.containBeads = function () {
        if (!this.listBeads)
            return;
        for (var i = 0; i < this.listBeads.childrenCount; i++) {
            var bead = this.listBeads.children[i];
            if (bead === this.spoon)
                continue;
            var body = bead.getComponent(cc.RigidBody);
            var nx = bead.x / 230;
            var ny = (bead.y + 10) / 100;
            var len2 = nx * nx + ny * ny;
            if (len2 > 1) {
                var len = Math.sqrt(len2);
                bead.x = nx / len * 228;
                bead.y = ny / len * 98 - 10;
                if (body) {
                    body.syncPosition(false);
                    var v = body.linearVelocity;
                    body.linearVelocity = cc.v2(v.x * 0.5, Math.min(v.y, 20) * 0.4);
                    body.awake = true;
                }
            }
            if (body) {
                var v = body.linearVelocity;
                var speed = v.mag();
                if (speed > 120) {
                    body.linearVelocity = v.mul(120 / speed);
                }
            }
        }
    };
    NewClass.prototype.flattenNodeScale = function (parent) {
        var sx = parent.scaleX;
        var sy = parent.scaleY;
        if (sx === 1 && sy === 1)
            return;
        var snapshot = parent.children.map(function (child) {
            return {
                node: child,
                worldPos: child.convertToWorldSpaceAR(cc.v2(0, 0)),
                scaleX: child.scaleX * sx,
                scaleY: child.scaleY * sy,
            };
        });
        parent.setScale(1, 1);
        snapshot.forEach(function (item) {
            item.node.setScale(item.scaleX, item.scaleY);
            item.node.setPosition(parent.convertToNodeSpaceAR(item.worldPos));
        });
    };
    NewClass.prototype.btn_openDoor = function () {
        var _this = this;
        if (this.isOpenDoor == true)
            return;
        this.isOpenDoor = true;
        this.door.scale = 2;
        this.cua.getComponent(cc.Animation).play();
        this.door.getChildByName("text").active = false;
        this.scheduleOnce(function () {
            _this.cua.getComponent(cc.Button).enabled = false;
        }, 0.3);
    };
    NewClass.prototype.clickItem = function (boxValue, tag) {
        var _this = this;
        if (this.isClickBox >= 5)
            return;
        var arrPos = [cc.v3(0, 56), cc.v3(109, 47), cc.v3(-105, 40), cc.v3(-52, 22), cc.v3(61, 22)];
        this.isClickBox++;
        var box = cc.instantiate(this.listPreBox[tag]);
        box.parent = this.listItem2;
        box.position = boxValue.position;
        cc.tween(box).to(0.5, { position: arrPos[this.isClickBox - 1] }).call(function () {
        }).start();
        if (this.isClickBox == 1) {
            this.btnDone.active = true;
        }
        if (this.isClickBox == 5) {
            this.scheduleOnce(function () {
                _this.btn_done();
            }, 0.5);
        }
    };
    NewClass.prototype.btn_done = function () {
        if (this.isDone == true)
            return;
        this.isDone = true;
        this.btnDone.getComponent(cc.Button).enabled = false;
        this.main2.active = true;
        var arrPos = [cc.v3(0, 36), cc.v3(-158, 123), cc.v3(187, 128), cc.v3(211, -59), cc.v3(-203, -40)];
        var count = 0;
        this.countItem = this.listItem2.childrenCount;
        for (var i = this.listItem2.childrenCount - 1; i >= 0; i--) {
            var child = this.listItem2.children[i];
            child.parent = this.listBox;
            child.scale = 2.3;
            child.position = arrPos[count];
            child.getComponent(cc.Button).enabled = true;
            count++;
        }
        cc.tween(this.main2).to(0.35, { scale: 0.5 }).start();
    };
    NewClass.prototype.moveToVong = function (box) {
        var _this = this;
        var count = this.isCountNoti;
        // this.scheduleOnce(() => {
        this.listNoti.children[count].active = true;
        // }, 0.4)
        this.isCountNoti++;
        this.scheduleOnce(function () {
            var midPos = cc.v2(-50, 100);
            var endPos = cc.v2(0, -30);
            var pos = box.parent.convertToWorldSpaceAR(box.position);
            pos = _this.ro.convertToNodeSpaceAR(pos);
            var startPos = cc.v2(pos.x, pos.y);
            box.parent = _this.ro;
            box.position = pos;
            cc.tween(box).bezierTo(0.7, startPos, midPos, endPos).call(function () {
            }).start();
            cc.tween(box).delay(0.5).to(0.3, { scale: 1.5 }).to(0.08, { scale: 1.4 }).start();
        }, 0.4);
        if (this.isCountNoti == this.countItem) {
            this.linkToStore.active = true;
        }
    };
    NewClass.prototype.onEndGame = function (value) {
        cc.audioEngine.play(this.soundEnd, false, 1);
        if (value == true) {
            cc.audioEngine.play(this.soundWin, false, 1);
        }
        else {
            cc.audioEngine.stop(this.idSound);
            cc.audioEngine.play(this.soundLose, false, 1);
        }
        this.endCard.active = true;
        this.linkToStore.active = true;
    };
    // btn_choose(event, value) {
    NewClass.prototype.update = function (dt) {
        if (this.spoon) {
            this.spoon.y = this.spoonRestY;
            this.spoon.angle = this.spoonRestAngle;
        }
        if (!this.isMixTouch) {
            this.containBeads();
        }
        var portrait = this.isPortrait();
        if (portrait === this.lastPortrait)
            return;
        this.lastPortrait = portrait;
        this.reponsive(portrait);
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.camera.node.position = cc.v3(0, 0);
        this.listNoti.scale = (logic) ? 1.1 : 0.7;
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            this.camera.node.position = cc.v3(0, -200);
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.8;
                this.camera.node.position = cc.v3(0, -40);
            }
        }
        else {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            this.camera.zoomRatio = 0.37;
            this.camera.node.position = cc.v3(0, -140);
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.36;
                this.camera.node.position = cc.v3(0, -140);
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
    ], NewClass.prototype, "soundChien", void 0);
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
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHello", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHelloCus2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHelloCus3", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundTrans", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundDonutJump", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEnd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSellDone", void 0);
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
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWrong", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "fxColor", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listhand", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnDau", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cua", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "door", void 0);
    __decorate([
        property([cc.Prefab])
    ], NewClass.prototype, "listPreBox", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listItem2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnDone", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "main2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBox", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ro", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listNoti", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "spoon", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dia", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4aEJDO1FBNWhCRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUNRLElBQUksQ0FBQztRQUUxQixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixxQkFBcUI7UUFDckIsNEJBQTRCO1FBRzVC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O0NBOWhCRCxBQThoQkMsQ0E5aEJxQyxFQUFFLENBQUMsU0FBUyxHQThoQmpEO2tCQTloQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuZ29sZCA9IDBcclxuZ2xvYmFsVGhpcy5zY0dhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoaWVuOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERvbnV0SnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lXHJcbiAgICAgICAgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZnhDb2xvcjogY2MuUHJlZmFiID0gbnVsbFxyXG5cclxuICAgIC8vbmV3XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGJ0bkRvbnV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIC8vIHByZURvbnV0OiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3REb251dFBsYWNlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbGlzdERvbnV0U3ViOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbGlzdEtoYXlQbGFjZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RLaGF5U3ViOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0aGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuRGF1OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VhOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb29yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RQcmVCb3g6IGNjLlByZWZhYltdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJdGVtMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkRvbmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RCb3g6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJvOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Tm90aTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNwb29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGlhOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICAvLyBjYW1lcmE6Y2MuQ2FtZXJhPW51bGxcclxuXHJcbiAgICBtYXhLaGF5ID0gN1xyXG5cclxuICAgIGFyckRvbnV0cG9zID0gW11cclxuICAgIGFyckRvbnV0ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdXHJcbiAgICBhcnJLaGF5ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdXHJcbiAgICBhcnJLaGF5UG9zID0gW11cclxuICAgIGlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgaXNUdXRNZWF0ID0gZmFsc2VcclxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXHJcbiAgICBpc1R1dENsaWNrTWVhdCA9IGZhbHNlXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gc291bmRCZzpjYy5BdWRpb0NsaXA9bnVsbDtcclxuXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBpZFNvdW5kID0gbnVsbFxyXG4gICAgbGFzdFBvcnRyYWl0ID0gbnVsbFxyXG4gICAgaXNNaXhUb3VjaCA9IGZhbHNlXHJcbiAgICBzcG9vbk1pblggPSAtODBcclxuICAgIHNwb29uTWF4WCA9IDgwXHJcbiAgICBzcG9vbk1pblkgPSAtNDBcclxuICAgIHNwb29uTWF4WSA9IC01XHJcbiAgICBzcG9vblJlc3RZID0gLTIzXHJcbiAgICBzcG9vblJlc3RBbmdsZSA9IDBcclxuICAgIGxpc3RCZWFkczogY2MuTm9kZSA9IG51bGxcclxuICAgIGJlYWRTY29vcFN0YXRlID0ge31cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0UGh5c2ljcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC4zKVxyXG4gICAgICAgIHRoaXMubGFzdFBvcnRyYWl0ID0gdGhpcy5pc1BvcnRyYWl0KCk7XHJcbiAgICAgICAgdGhpcy5yZXBvbnNpdmUodGhpcy5sYXN0UG9ydHJhaXQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTcG9vbk1peCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUG9ydHJhaXQoKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIHJldHVybiBzaXplLndpZHRoIDwgc2l6ZS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFBoeXNpY3MoKSB7XHJcbiAgICAgICAgbGV0IHBoeXNpY3NNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBwaHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBwaHlzaWNzTWFuYWdlci5ncmF2aXR5ID0gY2MudjIoMCwgLTk4MCk7XHJcbiAgICAgICAgbGV0IEJpdHMgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cztcclxuICAgICAgICAvLyBwaHlzaWNzTWFuYWdlci5kZWJ1Z0RyYXdGbGFncyA9IEJpdHMuZV9hYWJiQml0IHwgQml0cy5lX3BhaXJCaXQgfCBCaXRzLmVfY2VudGVyT2ZNYXNzQml0IHwgQml0cy5lX2pvaW50Qml0IHwgQml0cy5lX3NoYXBlQml0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwU3Bvb25NaXgoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpYSAmJiB0aGlzLm1haW4yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhID0gdGhpcy5tYWluMi5nZXRDaGlsZEJ5TmFtZShcImRpYVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwb29uICYmIHRoaXMuZGlhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24gPSB0aGlzLmRpYS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXzAyOVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwb29uKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5zcG9vbi5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICBib2R5LmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbCA9IHRoaXMuc3Bvb24uZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgaWYgKGNvbCkge1xyXG4gICAgICAgICAgICBjb2wuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5saXN0QmVhZHMgPSB0aGlzLmRpYS5nZXRDaGlsZEJ5TmFtZShcImxpc3RJdGVtXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RCZWFkcyAmJiB0aGlzLnNwb29uLnBhcmVudCAhPT0gdGhpcy5saXN0QmVhZHMpIHtcclxuICAgICAgICAgICAgbGV0IHdvcmxkID0gdGhpcy5zcG9vbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLnBhcmVudCA9IHRoaXMubGlzdEJlYWRzO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLnNldFBvc2l0aW9uKHRoaXMubGlzdEJlYWRzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3Bvb25SZXN0WSA9IHRoaXMuc3Bvb24ueTtcclxuICAgICAgICB0aGlzLnNwb29uUmVzdEFuZ2xlID0gdGhpcy5zcG9vbi5hbmdsZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJlYWRMYXllcnMoKTtcclxuICAgICAgICBpZiAodGhpcy5saXN0QmVhZHMpIHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwcyA9IGNjLmdhbWUuZ3JvdXBMaXN0IHx8IFtdO1xyXG4gICAgICAgICAgICBsZXQgaGFzQmVhZEdyb3VwID0gZ3JvdXBzLmluZGV4T2YoXCJiZWFkXCIpID49IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0JlYWRHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlYWQuZ3JvdXAgPSBcImJlYWRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBib2R5ID0gYmVhZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIGlmICghYm9keSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhckRhbXBpbmcgPSAxLjI7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFuZ3VsYXJEYW1waW5nID0gMS41O1xyXG4gICAgICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25NaXhUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vbk1peFRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbk1peFRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uTWl4VG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvdWNoSW5TcG9vblBhcmVudChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCBzY3JlZW5Qb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwb29uLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NaXhUb3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5pc01peFRvdWNoID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy50dXQpIHtcclxuICAgICAgICAgICAgdGhpcy50dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlQmVhZExheWVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWl4VG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTWl4VG91Y2gpIHJldHVybjtcclxuICAgICAgICB0aGlzLm1vdmVTcG9vbkJ5RGVsdGEoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWl4VG91Y2hFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5pc01peFRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwb29uKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zcG9vbi55ID0gdGhpcy5zcG9vblJlc3RZO1xyXG4gICAgICAgIHRoaXMuc3Bvb24uYW5nbGUgPSB0aGlzLnNwb29uUmVzdEFuZ2xlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmVhZExheWVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2FsRGVsdGEoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgY3VyID0gdGhpcy5nZXRUb3VjaEluU3Bvb25QYXJlbnQoZXZlbnQpO1xyXG4gICAgICAgIGxldCBsb2MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCBkZWx0YSA9IGV2ZW50LmdldERlbHRhKCk7XHJcbiAgICAgICAgbGV0IHByZXZTY3JlZW4gPSBjYy52Mihsb2MueCAtIGRlbHRhLngsIGxvYy55IC0gZGVsdGEueSk7XHJcbiAgICAgICAgbGV0IHByZXZXb3JsZCA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwcmV2U2NyZWVuKTtcclxuICAgICAgICBsZXQgcHJldkxvY2FsID0gdGhpcy5zcG9vbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocHJldldvcmxkKTtcclxuICAgICAgICBsZXQgZCA9IGNjLnYyKGN1ci54IC0gcHJldkxvY2FsLngsIGN1ci55IC0gcHJldkxvY2FsLnkpO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhkLngpIDwgMC4yKSB7XHJcbiAgICAgICAgICAgIGQueCA9IGRlbHRhLnggKiAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVTcG9vbkJ5RGVsdGEoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3Bvb24pIHJldHVybjtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuZ2V0TG9jYWxEZWx0YShldmVudCk7XHJcbiAgICAgICAgbGV0IHggPSBjYy5taXNjLmNsYW1wZih0aGlzLnNwb29uLnggKyBkLngsIHRoaXMuc3Bvb25NaW5YLCB0aGlzLnNwb29uTWF4WCk7XHJcbiAgICAgICAgdGhpcy5zcG9vbi5zZXRQb3NpdGlvbih4LCB0aGlzLnNwb29uUmVzdFkpO1xyXG4gICAgICAgIHRoaXMuc3Bvb24uYW5nbGUgPSB0aGlzLnNwb29uUmVzdEFuZ2xlO1xyXG4gICAgICAgIHRoaXMuc3RpckJlYWRzKGQueCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZWFkTGF5ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQmVhZExheWVycygpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzIHx8ICF0aGlzLnNwb29uKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bvb24ucGFyZW50ICE9PSB0aGlzLmxpc3RCZWFkcykge1xyXG4gICAgICAgICAgICBsZXQgd29ybGQgPSB0aGlzLnNwb29uLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24ucGFyZW50ID0gdGhpcy5saXN0QmVhZHM7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uc2V0UG9zaXRpb24odGhpcy5saXN0QmVhZHMuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGQpKTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vblJlc3RZID0gdGhpcy5zcG9vbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2Nvb3BXb3JsZCA9IHRoaXMuc3Bvb24uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC0yNSkpO1xyXG4gICAgICAgIGxldCBzY29vcCA9IGNjLnYyKHNjb29wV29ybGQueCwgc2Nvb3BXb3JsZC55KTtcclxuICAgICAgICBsZXQgYmVoaW5kID0gW107XHJcbiAgICAgICAgbGV0IGZyb250ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJlYWQgPSB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGJlYWQgPT09IHRoaXMuc3Bvb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsZXQgcCA9IGJlYWQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBjYy52MihwLngsIHAueSkuc3ViKHNjb29wKS5tYWcoKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gYmVhZC51dWlkO1xyXG4gICAgICAgICAgICBsZXQgc2Nvb3BlZCA9IHRoaXMuYmVhZFNjb29wU3RhdGVbaWRdID09PSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXNjb29wZWQgJiYgZGlzdCA8IDI0MCkge1xyXG4gICAgICAgICAgICAgICAgc2Nvb3BlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2Nvb3BlZCAmJiBkaXN0ID4gMzgwKSB7XHJcbiAgICAgICAgICAgICAgICBzY29vcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZWFkU2Nvb3BTdGF0ZVtpZF0gPSBzY29vcGVkO1xyXG4gICAgICAgICAgICBpZiAoc2Nvb3BlZCkge1xyXG4gICAgICAgICAgICAgICAgZnJvbnQucHVzaChiZWFkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJlaGluZC5wdXNoKGJlYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpZHggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmVoaW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJlaGluZFtpXS5zZXRTaWJsaW5nSW5kZXgoaWR4KyspO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNwb29uLnNldFNpYmxpbmdJbmRleChpZHgrKyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcm9udC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmcm9udFtpXS5zZXRTaWJsaW5nSW5kZXgoaWR4KyspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGlyQmVhZHModngpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzIHx8IE1hdGguYWJzKHZ4KSA8IDAuMDgpIHJldHVybjtcclxuICAgICAgICBsZXQgc3Bvb25JbkJlYWRzID0gdGhpcy5saXN0QmVhZHMuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5zcG9vbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoYmVhZCA9PT0gdGhpcy5zcG9vbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBkeCA9IGJlYWQueCAtIHNwb29uSW5CZWFkcy54O1xyXG4gICAgICAgICAgICBsZXQgZHkgPSBiZWFkLnkgLSBzcG9vbkluQmVhZHMueTtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdCA+IDIwMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCB0ID0gMSAtIGRpc3QgLyAyMDA7XHJcbiAgICAgICAgICAgIGJlYWQueCArPSB2eCAqICgwLjU1ICsgMC43ICogdCk7XHJcbiAgICAgICAgICAgIGJlYWQueSArPSB2eCAqIDAuMDggKiB0ICogKGR4ID49IDAgPyAxIDogLTEpO1xyXG4gICAgICAgICAgICBiZWFkLnggPSBjYy5taXNjLmNsYW1wZihiZWFkLngsIC0yMDAsIDIwMCk7XHJcbiAgICAgICAgICAgIGJlYWQueSA9IGNjLm1pc2MuY2xhbXBmKGJlYWQueSwgLTc1LCA0NSk7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gYmVhZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52Mih2eCAqIDE2ICogdCwgMCk7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IHZ4ICogMC42ICogdDtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5CZWFkcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzKSByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJlYWQgPSB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGJlYWQgPT09IHRoaXMuc3Bvb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGJlYWQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGxldCBueCA9IGJlYWQueCAvIDIzMDtcclxuICAgICAgICAgICAgbGV0IG55ID0gKGJlYWQueSArIDEwKSAvIDEwMDtcclxuICAgICAgICAgICAgbGV0IGxlbjIgPSBueCAqIG54ICsgbnkgKiBueTtcclxuICAgICAgICAgICAgaWYgKGxlbjIgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuID0gTWF0aC5zcXJ0KGxlbjIpO1xyXG4gICAgICAgICAgICAgICAgYmVhZC54ID0gbnggLyBsZW4gKiAyMjg7XHJcbiAgICAgICAgICAgICAgICBiZWFkLnkgPSBueSAvIGxlbiAqIDk4IC0gMTA7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdiA9IGJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHYueCAqIDAuNSwgTWF0aC5taW4odi55LCAyMCkgKiAwLjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BlZWQgPSB2Lm1hZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwZWVkID4gMTIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IHYubXVsKDEyMCAvIHNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiBcclxuXHJcbiAgICBmbGF0dGVuTm9kZVNjYWxlKHBhcmVudDogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBzeCA9IHBhcmVudC5zY2FsZVg7XHJcbiAgICAgICAgbGV0IHN5ID0gcGFyZW50LnNjYWxlWTtcclxuICAgICAgICBpZiAoc3ggPT09IDEgJiYgc3kgPT09IDEpIHJldHVybjtcclxuICAgICAgICBsZXQgc25hcHNob3QgPSBwYXJlbnQuY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZTogY2hpbGQsXHJcbiAgICAgICAgICAgICAgICB3b3JsZFBvczogY2hpbGQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSxcclxuICAgICAgICAgICAgICAgIHNjYWxlWDogY2hpbGQuc2NhbGVYICogc3gsXHJcbiAgICAgICAgICAgICAgICBzY2FsZVk6IGNoaWxkLnNjYWxlWSAqIHN5LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhcmVudC5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5zZXRTY2FsZShpdGVtLnNjYWxlWCwgaXRlbS5zY2FsZVkpO1xyXG4gICAgICAgICAgICBpdGVtLm5vZGUuc2V0UG9zaXRpb24ocGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGl0ZW0ud29ybGRQb3MpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICBpc09wZW5Eb29yID0gZmFsc2VcclxuICAgIGJ0bl9vcGVuRG9vcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW5Eb29yID09IHRydWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzT3BlbkRvb3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZG9vci5zY2FsZSA9IDJcclxuICAgICAgICB0aGlzLmN1YS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB0aGlzLmRvb3IuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1YS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB9LCAwLjMpXHJcbiAgICB9XHJcbiAgICBpc0NsaWNrQm94ID0gMFxyXG4gICAgY2xpY2tJdGVtKGJveFZhbHVlLCB0YWcpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrQm94ID49IDUpIHJldHVybjtcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKDAsIDU2KSwgY2MudjMoMTA5LCA0NyksIGNjLnYzKC0xMDUsIDQwKSwgY2MudjMoLTUyLCAyMiksIGNjLnYzKDYxLCAyMildXHJcbiAgICAgICAgdGhpcy5pc0NsaWNrQm94KytcclxuICAgICAgICBsZXQgYm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJlQm94W3RhZ10pXHJcbiAgICAgICAgYm94LnBhcmVudCA9IHRoaXMubGlzdEl0ZW0yO1xyXG4gICAgICAgIGJveC5wb3NpdGlvbiA9IGJveFZhbHVlLnBvc2l0aW9uO1xyXG4gICAgICAgIGNjLnR3ZWVuKGJveCkudG8oMC41LCB7IHBvc2l0aW9uOiBhcnJQb3NbdGhpcy5pc0NsaWNrQm94IC0gMV0gfSkuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrQm94ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Eb25lLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja0JveCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX2RvbmUoKVxyXG5cclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpc0RvbmUgPSBmYWxzZVxyXG4gICAgY291bnRJdGVtID0gMFxyXG4gICAgYnRuX2RvbmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb25lID09IHRydWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRG9uZSA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bkRvbmUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFpbjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKDAsIDM2KSwgY2MudjMoLTE1OCwgMTIzKSwgY2MudjMoMTg3LCAxMjgpLCBjYy52MygyMTEsIC01OSksIGNjLnYzKC0yMDMsIC00MCldXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMFxyXG4gICAgICAgIHRoaXMuY291bnRJdGVtID0gdGhpcy5saXN0SXRlbTIuY2hpbGRyZW5Db3VudFxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxpc3RJdGVtMi5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0SXRlbTIuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXMubGlzdEJveFxyXG4gICAgICAgICAgICBjaGlsZC5zY2FsZSA9IDIuMztcclxuICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBhcnJQb3NbY291bnRdXHJcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluMikudG8oMC4zNSwgeyBzY2FsZTogMC41IH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGlzQ291bnROb3RpID0gMFxyXG4gICAgbW92ZVRvVm9uZyhib3gpIHtcclxuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmlzQ291bnROb3RpXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGlzdE5vdGkuY2hpbGRyZW5bY291bnRdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyB9LCAwLjQpXHJcbiAgICAgICAgdGhpcy5pc0NvdW50Tm90aSsrXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoLTUwLCAxMDApO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIoMCwgLTMwKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGJveC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGJveC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMucm8uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2MudjIocG9zLngsIHBvcy55KVxyXG4gICAgICAgICAgICBib3gucGFyZW50ID0gdGhpcy5ybztcclxuICAgICAgICAgICAgYm94LnBvc2l0aW9uID0gcG9zO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oYm94KS5iZXppZXJUbygwLjcsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGJveCkuZGVsYXkoMC41KS50bygwLjMsIHsgc2NhbGU6IDEuNSB9KS50bygwLjA4LCB7IHNjYWxlOiAxLjQgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDAuNClcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50Tm90aSA9PSB0aGlzLmNvdW50SXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kR2FtZSh2YWx1ZSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEVuZCwgZmFsc2UsIDEpXHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV2luLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZClcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTG9zZSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIGJ0bl9jaG9vc2UoZXZlbnQsIHZhbHVlKSB7XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bvb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi55ID0gdGhpcy5zcG9vblJlc3RZO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTWl4VG91Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluQmVhZHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBvcnRyYWl0ID0gdGhpcy5pc1BvcnRyYWl0KCk7XHJcbiAgICAgICAgaWYgKHBvcnRyYWl0ID09PSB0aGlzLmxhc3RQb3J0cmFpdCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGFzdFBvcnRyYWl0ID0gcG9ydHJhaXQ7XHJcbiAgICAgICAgdGhpcy5yZXBvbnNpdmUocG9ydHJhaXQpO1xyXG4gICAgfVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcblxyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICB0aGlzLmxpc3ROb3RpLnNjYWxlID0gKGxvZ2ljKSA/IDEuMSA6IDAuN1xyXG5cclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0yMDApXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVjayBpcGhvbmV4XCIpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC00MClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjM3XHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0xNDApXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjM2XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTE0MClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=