
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
        _this.isRotateSync = false;
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
    NewClass.prototype.snapshotBeadLocals = function () {
        var arr = [];
        if (!this.listBeads)
            return arr;
        for (var i = 0; i < this.listBeads.childrenCount; i++) {
            var bead = this.listBeads.children[i];
            if (bead === this.spoon)
                continue;
            arr.push({ node: bead, x: bead.x, y: bead.y, angle: bead.angle });
        }
        return arr;
    };
    NewClass.prototype.restoreBeadLocals = function (arr) {
        if (!arr)
            return;
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (!item.node || !item.node.isValid)
                continue;
            item.node.setPosition(item.x, item.y);
            item.node.angle = item.angle;
        }
        if (this.spoon) {
            this.spoon.y = this.spoonRestY;
            this.spoon.angle = this.spoonRestAngle;
        }
    };
    NewClass.prototype.resyncPhysicsFromNodes = function () {
        var bodies = this.node.getComponentsInChildren(cc.RigidBody);
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            if (!body.enabled || body.node === this.spoon)
                continue;
            body.syncPosition(false);
            body.syncRotation(false);
            body.linearVelocity = cc.v2(0, 0);
            body.angularVelocity = 0;
            body.awake = true;
        }
    };
    NewClass.prototype.onOrientationChange = function (portrait) {
        var _this = this;
        this.isRotateSync = true;
        var pm = cc.director.getPhysicsManager();
        pm.enabled = false;
        var snapshot = this.snapshotBeadLocals();
        var spoonX = this.spoon ? this.spoon.x : 0;
        this.reponsive(portrait);
        this.scheduleOnce(function () {
            _this.restoreBeadLocals(snapshot);
            if (_this.spoon) {
                _this.spoon.x = cc.misc.clampf(spoonX, _this.spoonMinX, _this.spoonMaxX);
                _this.spoon.y = _this.spoonRestY;
            }
            pm.enabled = true;
            pm.gravity = cc.v2(0, -980);
            _this.resyncPhysicsFromNodes();
            _this.isRotateSync = false;
        }, 0);
    };
    NewClass.prototype.initPhysics = function () {
        var physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        physicsManager.gravity = cc.v2(0, -980);
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
        if (this.isRotateSync)
            return;
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
        this.onOrientationChange(portrait);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3bEJDO1FBdGxCRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUNRLElBQUksQ0FBQztRQUUxQixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixxQkFBcUI7UUFDckIsNEJBQTRCO1FBRzVC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O1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0RBQ087SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNBO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBNUZILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3bEI1QjtJQUFELGVBQUM7Q0F4bEJELEFBd2xCQyxDQXhsQnFDLEVBQUUsQ0FBQyxTQUFTLEdBd2xCakQ7a0JBeGxCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5nb2xkID0gMFxyXG5nbG9iYWxUaGlzLnNjR2FtZSA9IGZhbHNlXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbG9zZVBvcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hpZW46IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRMb3NlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIZWxsb0N1czI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIZWxsb0N1czM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRUcmFuczogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRG9udXRKdW1wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2VsbERvbmVcclxuICAgICAgICA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3VzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBmeENvbG9yOiBjYy5QcmVmYWIgPSBudWxsXHJcblxyXG4gICAgLy9uZXdcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gYnRuRG9udXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgLy8gcHJlRG9udXQ6IGNjLlByZWZhYiA9IG51bGxcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbGlzdERvbnV0UGxhY2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBsaXN0RG9udXRTdWI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBsaXN0S2hheVBsYWNlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbGlzdEtoYXlTdWI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5EYXU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjdWE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdFByZUJveDogY2MuUHJlZmFiW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEl0ZW0yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuRG9uZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1haW4yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEJveDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcm86IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3ROb3RpOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3Bvb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkaWE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIC8vIGNhbWVyYTpjYy5DYW1lcmE9bnVsbFxyXG5cclxuICAgIG1heEtoYXkgPSA3XHJcblxyXG4gICAgYXJyRG9udXRwb3MgPSBbXVxyXG4gICAgYXJyRG9udXQgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIGFycktoYXkgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIGFycktoYXlQb3MgPSBbXVxyXG4gICAgaXNUdXRDaGlsaSA9IGZhbHNlXHJcbiAgICBpc1R1dE1lYXQgPSBmYWxzZVxyXG4gICAgaXNUdXRWZWdldFRhYmxlID0gZmFsc2VcclxuICAgIGlzVHV0Q2xpY2tNZWF0ID0gZmFsc2VcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZEJnOmNjLkF1ZGlvQ2xpcD1udWxsO1xyXG5cclxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcclxuICAgIGlzU3RlcCA9IDBcclxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIGlkU291bmQgPSBudWxsXHJcbiAgICBsYXN0UG9ydHJhaXQgPSBudWxsXHJcbiAgICBpc01peFRvdWNoID0gZmFsc2VcclxuICAgIHNwb29uTWluWCA9IC04MFxyXG4gICAgc3Bvb25NYXhYID0gODBcclxuICAgIHNwb29uTWluWSA9IC00MFxyXG4gICAgc3Bvb25NYXhZID0gLTVcclxuICAgIHNwb29uUmVzdFkgPSAtMjNcclxuICAgIHNwb29uUmVzdEFuZ2xlID0gMFxyXG4gICAgbGlzdEJlYWRzOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYmVhZFNjb29wU3RhdGUgPSB7fVxyXG4gICAgaXNSb3RhdGVTeW5jID0gZmFsc2VcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0UGh5c2ljcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC4zKVxyXG4gICAgICAgIHRoaXMubGFzdFBvcnRyYWl0ID0gdGhpcy5pc1BvcnRyYWl0KCk7XHJcbiAgICAgICAgdGhpcy5yZXBvbnNpdmUodGhpcy5sYXN0UG9ydHJhaXQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTcG9vbk1peCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUG9ydHJhaXQoKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIHJldHVybiBzaXplLndpZHRoIDwgc2l6ZS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc25hcHNob3RCZWFkTG9jYWxzKCkge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzKSByZXR1cm4gYXJyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChiZWFkID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgYXJyLnB1c2goeyBub2RlOiBiZWFkLCB4OiBiZWFkLngsIHk6IGJlYWQueSwgYW5nbGU6IGJlYWQuYW5nbGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZUJlYWRMb2NhbHMoYXJyKSB7XHJcbiAgICAgICAgaWYgKCFhcnIpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGFycltpXTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLm5vZGUgfHwgIWl0ZW0ubm9kZS5pc1ZhbGlkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKGl0ZW0ueCwgaXRlbS55KTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmFuZ2xlID0gaXRlbS5hbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bvb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi55ID0gdGhpcy5zcG9vblJlc3RZO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzeW5jUGh5c2ljc0Zyb21Ob2RlcygpIHtcclxuICAgICAgICBsZXQgYm9kaWVzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBib2RpZXNbaV07XHJcbiAgICAgICAgICAgIGlmICghYm9keS5lbmFibGVkIHx8IGJvZHkubm9kZSA9PT0gdGhpcy5zcG9vbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgYm9keS5zeW5jUm90YXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3JpZW50YXRpb25DaGFuZ2UocG9ydHJhaXQpIHtcclxuICAgICAgICB0aGlzLmlzUm90YXRlU3luYyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBtID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBwbS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNuYXBzaG90ID0gdGhpcy5zbmFwc2hvdEJlYWRMb2NhbHMoKTtcclxuICAgICAgICBsZXQgc3Bvb25YID0gdGhpcy5zcG9vbiA/IHRoaXMuc3Bvb24ueCA6IDA7XHJcbiAgICAgICAgdGhpcy5yZXBvbnNpdmUocG9ydHJhaXQpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlQmVhZExvY2FscyhzbmFwc2hvdCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwb29uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb29uLnggPSBjYy5taXNjLmNsYW1wZihzcG9vblgsIHRoaXMuc3Bvb25NaW5YLCB0aGlzLnNwb29uTWF4WCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb29uLnkgPSB0aGlzLnNwb29uUmVzdFk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG0uZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHBtLmdyYXZpdHkgPSBjYy52MigwLCAtOTgwKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN5bmNQaHlzaWNzRnJvbU5vZGVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGVTeW5jID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFBoeXNpY3MoKSB7XHJcbiAgICAgICAgbGV0IHBoeXNpY3NNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBwaHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBwaHlzaWNzTWFuYWdlci5ncmF2aXR5ID0gY2MudjIoMCwgLTk4MCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBTcG9vbk1peCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlhICYmIHRoaXMubWFpbjIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWEgPSB0aGlzLm1haW4yLmdldENoaWxkQnlOYW1lKFwiZGlhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuc3Bvb24gJiYgdGhpcy5kaWEpIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbiA9IHRoaXMuZGlhLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VfMDI5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuc3Bvb24pIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLnNwb29uLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29sID0gdGhpcy5zcG9vbi5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICBpZiAoY29sKSB7XHJcbiAgICAgICAgICAgIGNvbC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3RCZWFkcyA9IHRoaXMuZGlhLmdldENoaWxkQnlOYW1lKFwibGlzdEl0ZW1cIik7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdEJlYWRzICYmIHRoaXMuc3Bvb24ucGFyZW50ICE9PSB0aGlzLmxpc3RCZWFkcykge1xyXG4gICAgICAgICAgICBsZXQgd29ybGQgPSB0aGlzLnNwb29uLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24ucGFyZW50ID0gdGhpcy5saXN0QmVhZHM7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uc2V0UG9zaXRpb24odGhpcy5saXN0QmVhZHMuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcG9vblJlc3RZID0gdGhpcy5zcG9vbi55O1xyXG4gICAgICAgIHRoaXMuc3Bvb25SZXN0QW5nbGUgPSB0aGlzLnNwb29uLmFuZ2xlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmVhZExheWVycygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RCZWFkcykge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBzID0gY2MuZ2FtZS5ncm91cExpc3QgfHwgW107XHJcbiAgICAgICAgICAgIGxldCBoYXNCZWFkR3JvdXAgPSBncm91cHMuaW5kZXhPZihcImJlYWRcIikgPj0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzQmVhZEdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVhZC5ncm91cCA9IFwiYmVhZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBiZWFkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFib2R5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyRGFtcGluZyA9IDEuMjtcclxuICAgICAgICAgICAgICAgIGJvZHkuYW5ndWxhckRhbXBpbmcgPSAxLjU7XHJcbiAgICAgICAgICAgICAgICBib2R5LmdyYXZpdHlTY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbk1peFRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uTWl4VG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uTWl4VG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25NaXhUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG91Y2hJblNwb29uUGFyZW50KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Bvb24ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1peFRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLmlzTWl4VG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnR1dCkge1xyXG4gICAgICAgICAgICB0aGlzLnR1dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZWFkTGF5ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NaXhUb3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNNaXhUb3VjaCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubW92ZVNwb29uQnlEZWx0YShldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NaXhUb3VjaEVuZCgpIHtcclxuICAgICAgICB0aGlzLmlzTWl4VG91Y2ggPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuc3Bvb24pIHJldHVybjtcclxuICAgICAgICB0aGlzLnNwb29uLnkgPSB0aGlzLnNwb29uUmVzdFk7XHJcbiAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZWFkTGF5ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9jYWxEZWx0YShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCBjdXIgPSB0aGlzLmdldFRvdWNoSW5TcG9vblBhcmVudChldmVudCk7XHJcbiAgICAgICAgbGV0IGxvYyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IGRlbHRhID0gZXZlbnQuZ2V0RGVsdGEoKTtcclxuICAgICAgICBsZXQgcHJldlNjcmVlbiA9IGNjLnYyKGxvYy54IC0gZGVsdGEueCwgbG9jLnkgLSBkZWx0YS55KTtcclxuICAgICAgICBsZXQgcHJldldvcmxkID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHByZXZTY3JlZW4pO1xyXG4gICAgICAgIGxldCBwcmV2TG9jYWwgPSB0aGlzLnNwb29uLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwcmV2V29ybGQpO1xyXG4gICAgICAgIGxldCBkID0gY2MudjIoY3VyLnggLSBwcmV2TG9jYWwueCwgY3VyLnkgLSBwcmV2TG9jYWwueSk7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGQueCkgPCAwLjIpIHtcclxuICAgICAgICAgICAgZC54ID0gZGVsdGEueCAqIDAuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVNwb29uQnlEZWx0YShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zcG9vbikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5nZXRMb2NhbERlbHRhKGV2ZW50KTtcclxuICAgICAgICBsZXQgeCA9IGNjLm1pc2MuY2xhbXBmKHRoaXMuc3Bvb24ueCArIGQueCwgdGhpcy5zcG9vbk1pblgsIHRoaXMuc3Bvb25NYXhYKTtcclxuICAgICAgICB0aGlzLnNwb29uLnNldFBvc2l0aW9uKHgsIHRoaXMuc3Bvb25SZXN0WSk7XHJcbiAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgdGhpcy5zdGlyQmVhZHMoZC54KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJlYWRMYXllcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVCZWFkTGF5ZXJzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMgfHwgIXRoaXMuc3Bvb24pIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zcG9vbi5wYXJlbnQgIT09IHRoaXMubGlzdEJlYWRzKSB7XHJcbiAgICAgICAgICAgIGxldCB3b3JsZCA9IHRoaXMuc3Bvb24uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5wYXJlbnQgPSB0aGlzLmxpc3RCZWFkcztcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5zZXRQb3NpdGlvbih0aGlzLmxpc3RCZWFkcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uUmVzdFkgPSB0aGlzLnNwb29uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzY29vcFdvcmxkID0gdGhpcy5zcG9vbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLTI1KSk7XHJcbiAgICAgICAgbGV0IHNjb29wID0gY2MudjIoc2Nvb3BXb3JsZC54LCBzY29vcFdvcmxkLnkpO1xyXG4gICAgICAgIGxldCBiZWhpbmQgPSBbXTtcclxuICAgICAgICBsZXQgZnJvbnQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoYmVhZCA9PT0gdGhpcy5zcG9vbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBwID0gYmVhZC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgZGlzdCA9IGNjLnYyKHAueCwgcC55KS5zdWIoc2Nvb3ApLm1hZygpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBiZWFkLnV1aWQ7XHJcbiAgICAgICAgICAgIGxldCBzY29vcGVkID0gdGhpcy5iZWFkU2Nvb3BTdGF0ZVtpZF0gPT09IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghc2Nvb3BlZCAmJiBkaXN0IDwgMjQwKSB7XHJcbiAgICAgICAgICAgICAgICBzY29vcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzY29vcGVkICYmIGRpc3QgPiAzODApIHtcclxuICAgICAgICAgICAgICAgIHNjb29wZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJlYWRTY29vcFN0YXRlW2lkXSA9IHNjb29wZWQ7XHJcbiAgICAgICAgICAgIGlmIChzY29vcGVkKSB7XHJcbiAgICAgICAgICAgICAgICBmcm9udC5wdXNoKGJlYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmVoaW5kLnB1c2goYmVhZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlkeCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZWhpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYmVoaW5kW2ldLnNldFNpYmxpbmdJbmRleChpZHgrKyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3Bvb24uc2V0U2libGluZ0luZGV4KGlkeCsrKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyb250Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZyb250W2ldLnNldFNpYmxpbmdJbmRleChpZHgrKyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0aXJCZWFkcyh2eCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMgfHwgTWF0aC5hYnModngpIDwgMC4wOCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzcG9vbkluQmVhZHMgPSB0aGlzLmxpc3RCZWFkcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLnNwb29uLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChiZWFkID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGR4ID0gYmVhZC54IC0gc3Bvb25JbkJlYWRzLng7XHJcbiAgICAgICAgICAgIGxldCBkeSA9IGJlYWQueSAtIHNwb29uSW5CZWFkcy55O1xyXG4gICAgICAgICAgICBsZXQgZGlzdCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0ID4gMjAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IHQgPSAxIC0gZGlzdCAvIDIwMDtcclxuICAgICAgICAgICAgYmVhZC54ICs9IHZ4ICogKDAuNTUgKyAwLjcgKiB0KTtcclxuICAgICAgICAgICAgYmVhZC55ICs9IHZ4ICogMC4wOCAqIHQgKiAoZHggPj0gMCA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIGJlYWQueCA9IGNjLm1pc2MuY2xhbXBmKGJlYWQueCwgLTIwMCwgMjAwKTtcclxuICAgICAgICAgICAgYmVhZC55ID0gY2MubWlzYy5jbGFtcGYoYmVhZC55LCAtNzUsIDQ1KTtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBiZWFkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZ4ICogMTYgKiB0LCAwKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gdnggKiAwLjYgKiB0O1xyXG4gICAgICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbkJlYWRzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoYmVhZCA9PT0gdGhpcy5zcG9vbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gYmVhZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgbGV0IG54ID0gYmVhZC54IC8gMjMwO1xyXG4gICAgICAgICAgICBsZXQgbnkgPSAoYmVhZC55ICsgMTApIC8gMTAwO1xyXG4gICAgICAgICAgICBsZXQgbGVuMiA9IG54ICogbnggKyBueSAqIG55O1xyXG4gICAgICAgICAgICBpZiAobGVuMiA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsZW4gPSBNYXRoLnNxcnQobGVuMik7XHJcbiAgICAgICAgICAgICAgICBiZWFkLnggPSBueCAvIGxlbiAqIDIyODtcclxuICAgICAgICAgICAgICAgIGJlYWQueSA9IG55IC8gbGVuICogOTggLSAxMDtcclxuICAgICAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2ID0gYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIodi54ICogMC41LCBNYXRoLm1pbih2LnksIDIwKSAqIDAuNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IHYubWFnKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlZWQgPiAxMjApIHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gdi5tdWwoMTIwIC8gc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuIFxyXG5cclxuICAgIGZsYXR0ZW5Ob2RlU2NhbGUocGFyZW50OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHN4ID0gcGFyZW50LnNjYWxlWDtcclxuICAgICAgICBsZXQgc3kgPSBwYXJlbnQuc2NhbGVZO1xyXG4gICAgICAgIGlmIChzeCA9PT0gMSAmJiBzeSA9PT0gMSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzbmFwc2hvdCA9IHBhcmVudC5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBub2RlOiBjaGlsZCxcclxuICAgICAgICAgICAgICAgIHdvcmxkUG9zOiBjaGlsZC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVYOiBjaGlsZC5zY2FsZVggKiBzeCxcclxuICAgICAgICAgICAgICAgIHNjYWxlWTogY2hpbGQuc2NhbGVZICogc3ksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFyZW50LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIHNuYXBzaG90LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLnNldFNjYWxlKGl0ZW0uc2NhbGVYLCBpdGVtLnNjYWxlWSk7XHJcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5zZXRQb3NpdGlvbihwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaXRlbS53b3JsZFBvcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICBcclxuICAgIGlzT3BlbkRvb3IgPSBmYWxzZVxyXG4gICAgYnRuX29wZW5Eb29yKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbkRvb3IgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuRG9vciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kb29yLnNjYWxlID0gMlxyXG4gICAgICAgIHRoaXMuY3VhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMuZG9vci5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VhLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIH0sIDAuMylcclxuICAgIH1cclxuICAgIGlzQ2xpY2tCb3ggPSAwXHJcbiAgICBjbGlja0l0ZW0oYm94VmFsdWUsIHRhZykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tCb3ggPj0gNSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjMoMCwgNTYpLCBjYy52MygxMDksIDQ3KSwgY2MudjMoLTEwNSwgNDApLCBjYy52MygtNTIsIDIyKSwgY2MudjMoNjEsIDIyKV1cclxuICAgICAgICB0aGlzLmlzQ2xpY2tCb3grK1xyXG4gICAgICAgIGxldCBib3ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVCb3hbdGFnXSlcclxuICAgICAgICBib3gucGFyZW50ID0gdGhpcy5saXN0SXRlbTI7XHJcbiAgICAgICAgYm94LnBvc2l0aW9uID0gYm94VmFsdWUucG9zaXRpb247XHJcbiAgICAgICAgY2MudHdlZW4oYm94KS50bygwLjUsIHsgcG9zaXRpb246IGFyclBvc1t0aGlzLmlzQ2xpY2tCb3ggLSAxXSB9KS5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tCb3ggPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkRvbmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrQm94ID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fZG9uZSgpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlzRG9uZSA9IGZhbHNlXHJcbiAgICBjb3VudEl0ZW0gPSAwXHJcbiAgICBidG5fZG9uZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RvbmUgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNEb25lID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuRG9uZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYWluMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjMoMCwgMzYpLCBjYy52MygtMTU4LCAxMjMpLCBjYy52MygxODcsIDEyOCksIGNjLnYzKDIxMSwgLTU5KSwgY2MudjMoLTIwMywgLTQwKV1cclxuICAgICAgICBsZXQgY291bnQgPSAwXHJcbiAgICAgICAgdGhpcy5jb3VudEl0ZW0gPSB0aGlzLmxpc3RJdGVtMi5jaGlsZHJlbkNvdW50XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdEl0ZW0yLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RJdGVtMi5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcy5saXN0Qm94XHJcbiAgICAgICAgICAgIGNoaWxkLnNjYWxlID0gMi4zO1xyXG4gICAgICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IGFyclBvc1tjb3VudF1cclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW4yKS50bygwLjM1LCB7IHNjYWxlOiAwLjUgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgaXNDb3VudE5vdGkgPSAwXHJcbiAgICBtb3ZlVG9Wb25nKGJveCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuaXNDb3VudE5vdGlcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5saXN0Tm90aS5jaGlsZHJlbltjb3VudF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vIH0sIDAuNClcclxuICAgICAgICB0aGlzLmlzQ291bnROb3RpKytcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52MigtNTAsIDEwMCk7XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBjYy52MigwLCAtMzApO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gYm94LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoYm94LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5yby5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52Mihwb3MueCwgcG9zLnkpXHJcbiAgICAgICAgICAgIGJveC5wYXJlbnQgPSB0aGlzLnJvO1xyXG4gICAgICAgICAgICBib3gucG9zaXRpb24gPSBwb3M7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbihib3gpLmJlemllclRvKDAuNywgc3RhcnRQb3MsIG1pZFBvcywgZW5kUG9zKS5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4oYm94KS5kZWxheSgwLjUpLnRvKDAuMywgeyBzY2FsZTogMS41IH0pLnRvKDAuMDgsIHsgc2NhbGU6IDEuNCB9KS5zdGFydCgpXHJcbiAgICAgICAgfSwgMC40KVxyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnROb3RpID09IHRoaXMuY291bnRJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5kLCBmYWxzZSwgMSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZFNvdW5kKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRMb3NlLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2Nob29zZShldmVudCwgdmFsdWUpIHtcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1JvdGF0ZVN5bmMpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zcG9vbikge1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLnkgPSB0aGlzLnNwb29uUmVzdFk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uYW5nbGUgPSB0aGlzLnNwb29uUmVzdEFuZ2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNNaXhUb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5CZWFkcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcG9ydHJhaXQgPSB0aGlzLmlzUG9ydHJhaXQoKTtcclxuICAgICAgICBpZiAocG9ydHJhaXQgPT09IHRoaXMubGFzdFBvcnRyYWl0KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5sYXN0UG9ydHJhaXQgPSBwb3J0cmFpdDtcclxuICAgICAgICB0aGlzLm9uT3JpZW50YXRpb25DaGFuZ2UocG9ydHJhaXQpO1xyXG4gICAgfVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcblxyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICB0aGlzLmxpc3ROb3RpLnNjYWxlID0gKGxvZ2ljKSA/IDEuMSA6IDAuN1xyXG5cclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0yMDApXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVjayBpcGhvbmV4XCIpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC00MClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjM3XHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0xNDApXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjM2XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTE0MClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=