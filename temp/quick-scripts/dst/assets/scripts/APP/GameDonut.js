
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
        _this.soundXao = null;
        _this.soundMixDone = null;
        _this.soundShowStar = null;
        _this.soundSellDone = null;
        _this.soundCut = null;
        _this.listSoundNoti = [];
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
        _this.scoopOffset = cc.v2(-125, -8);
        _this.dia = null;
        _this.shadow = null;
        _this.listStar = null;
        _this.showItem = null;
        _this.gio = null;
        _this.khay = null;
        _this.hand2 = null;
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
        _this.scoopedBeadIds = {};
        _this.isRotateSync = false;
        _this.orientLockUntil = 0;
        _this.physSnapshot = null;
        _this.spoonSnapshot = null;
        _this.progressNode = null;
        _this.progressFill = null;
        _this.progressFillWidth = 0;
        _this.mixTime = 0;
        _this.mixNeedTime = 2;
        _this.isMixDone = false;
        _this.lastMixMoveTime = 0;
        _this.lastTouchScreen = null;
        _this.idSoundXao = null;
        _this.isXao = false;
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
        cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, this.beforeUpdateOrient, this);
        cc.view.on('canvas-resize', this.onCanvasResize, this);
        this.initPhysics();
    };
    NewClass.prototype.start = function () {
        cc.audioEngine.play(this.soundBg, true, 0.3);
        this.lastPortrait = this.isPortrait();
        this.reponsive(this.lastPortrait);
        this.setupSpoonMix();
        this.cachePhysicsLocals();
    };
    NewClass.prototype.onDestroy = function () {
        cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, this.beforeUpdateOrient, this);
        cc.view.off('canvas-resize', this.onCanvasResize, this);
        this.unschedule(this.flushPhysicsResync);
        this.unschedule(this.finishPhysicsResync);
        this.node.off(cc.Node.EventType.TOUCH_START, this.onMixTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onMixTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onMixTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onMixTouchEnd, this);
    };
    NewClass.prototype.isPortrait = function () {
        var size = cc.view.getFrameSize();
        var w = size.width;
        var h = size.height;
        if ((!w || !h) && typeof window !== 'undefined') {
            w = window.innerWidth;
            h = window.innerHeight;
        }
        return w < h;
    };
    NewClass.prototype.beforeUpdateOrient = function () {
        if (!this.isRotateSync) {
            this.cachePhysicsLocals();
        }
        var portrait = this.isPortrait();
        if (this.lastPortrait == null) {
            this.lastPortrait = portrait;
            return;
        }
        if (portrait !== this.lastPortrait) {
            var now = Date.now();
            if (now < this.orientLockUntil)
                return;
            this.lastPortrait = portrait;
            this.orientLockUntil = now + 400;
            this.onOrientationChange(portrait);
        }
    };
    NewClass.prototype.onCanvasResize = function () {
        if (!this.listBeads)
            return;
        var portrait = this.isPortrait();
        if (portrait === this.lastPortrait && !this.isRotateSync)
            return;
        this.freezePhysicsWorld();
        this.queuePhysicsResync();
    };
    NewClass.prototype.cachePhysicsLocals = function () {
        this.physSnapshot = this.snapshotBeadLocals();
        if (this.spoon && this.spoon.isValid) {
            this.spoonSnapshot = { x: this.spoon.x, y: this.spoon.y, angle: this.spoon.angle };
        }
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
        if (this.spoon && this.spoonSnapshot) {
            this.spoon.setPosition(this.spoonSnapshot.x, this.spoonSnapshot.y);
            this.spoon.angle = this.spoonRestAngle;
        }
        else if (this.spoon) {
            this.spoon.angle = this.spoonRestAngle;
        }
    };
    NewClass.prototype.freezePhysicsWorld = function () {
        this.isRotateSync = true;
        var pm = cc.director.getPhysicsManager();
        if (pm && pm.enabled) {
            pm.enabled = false;
        }
    };
    NewClass.prototype.queuePhysicsResync = function () {
        this.unschedule(this.flushPhysicsResync);
        this.unschedule(this.finishPhysicsResync);
        this.scheduleOnce(this.flushPhysicsResync, 0.08);
    };
    NewClass.prototype.flushPhysicsResync = function () {
        var canvas = this.node.getComponent(cc.Canvas);
        if (canvas && canvas.alignWithScreen) {
            canvas.alignWithScreen();
        }
        this.restoreBeadLocals(this.physSnapshot);
        this.initPhysics();
        this.scheduleOnce(this.finishPhysicsResync, 0);
    };
    NewClass.prototype.finishPhysicsResync = function () {
        this.restoreBeadLocals(this.physSnapshot);
        this.resyncPhysicsFromNodes();
        this.wakeBeadPhysics();
        this.cachePhysicsLocals();
        this.isRotateSync = false;
    };
    NewClass.prototype.resyncPhysicsFromNodes = function () {
        var bodies = this.node.getComponentsInChildren(cc.RigidBody);
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            if (!body.enabled || body.node === this.spoon)
                continue;
            body.syncPosition(false);
            body.syncRotation(false);
            if (body.type === cc.RigidBodyType.Dynamic) {
                body.linearVelocity = cc.v2(0, 0);
                body.angularVelocity = 0;
            }
            body.awake = true;
        }
    };
    NewClass.prototype.onOrientationChange = function (portrait) {
        this.freezePhysicsWorld();
        this.reponsive(portrait);
        this.queuePhysicsResync();
    };
    NewClass.prototype.initPhysics = function () {
        var physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        physicsManager.gravity = cc.v2(0, -980);
    };
    NewClass.prototype.wakeBeadPhysics = function () {
        if (!this.listBeads)
            return;
        var groups = cc.game.groupList || [];
        var hasBeadGroup = groups.indexOf("bead") >= 0;
        for (var i = 0; i < this.listBeads.childrenCount; i++) {
            var bead = this.listBeads.children[i];
            if (bead === this.spoon)
                continue;
            if (hasBeadGroup) {
                bead.group = "bead";
            }
            var body = bead.getComponent(cc.RigidBody);
            if (!body)
                continue;
            body.enabled = true;
            body.type = cc.RigidBodyType.Dynamic;
            body.allowSleep = false;
            body.gravityScale = 0.75;
            body.linearDamping = 0.4;
            body.angularDamping = 0.45;
            body.awake = true;
        }
    };
    NewClass.prototype.setupSpoonMix = function () {
        if (!this.dia && this.main2) {
            this.dia = this.main2.getChildByName("dia");
        }
        if (!this.spoon && this.dia) {
            var items = this.dia.getChildByName("listItem");
            this.spoon = (items && items.getChildByName("thia")) || this.dia.getChildByName("thia") || this.dia.getChildByName("image_029");
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
        this.wakeBeadPhysics();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onMixTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMixTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onMixTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onMixTouchEnd, this);
        this.setupMixProgress();
    };
    NewClass.prototype.setupMixProgress = function () {
        if (!this.dia)
            return;
        this.progressNode = this.dia.getChildByName("progres");
        if (!this.progressNode)
            return;
        this.progressNode.active = false;
        this.progressFill = this.progressNode.getChildByName("image_035");
        if (!this.progressFill && this.progressNode.childrenCount > 0) {
            this.progressFill = this.progressNode.children[this.progressNode.childrenCount - 1];
        }
        if (this.progressFill) {
            this.progressFillWidth = this.progressFill.width;
            var sp = this.progressFill.getComponent(cc.Sprite);
            if (sp && sp.type === cc.Sprite.Type.SIMPLE) {
                sp.type = cc.Sprite.Type.FILLED;
                sp.fillType = cc.Sprite.FillType.HORIZONTAL;
                sp.fillStart = 0;
                sp.fillRange = 0;
            }
        }
        this.setMixProgress(0);
    };
    NewClass.prototype.setMixProgress = function (ratio) {
        ratio = cc.misc.clampf(ratio, 0, 1);
        if (!this.progressFill && !this.progressNode)
            return;
        if (this.progressNode) {
            var bar = this.progressNode.getComponent(cc.ProgressBar);
            if (bar) {
                bar.progress = ratio;
                return;
            }
        }
        if (!this.progressFill)
            return;
        var sp = this.progressFill.getComponent(cc.Sprite);
        if (sp && sp.type === cc.Sprite.Type.FILLED) {
            sp.fillRange = ratio;
            return;
        }
        if (this.progressFillWidth > 0) {
            this.progressFill.width = this.progressFillWidth * Math.max(ratio, 0.001);
            return;
        }
        this.progressFill.scaleX = Math.max(ratio, 0.001);
    };
    NewClass.prototype.onMixComplete = function () {
        if (this.isMixDone)
            return;
        this.isMixDone = true;
        this.isMixTouch = false;
        this.stopXaoSound();
        this.dropScoopedBeads();
        this.setMixProgress(1);
        if (this.spoon) {
            this.spoon.y = this.spoonRestY;
            this.spoon.angle = this.spoonRestAngle;
        }
        this.moveThia();
    };
    NewClass.prototype.playXaoSound = function () {
        var _this = this;
        if (!this.soundXao)
            return;
        if (this.idSoundXao != null)
            return;
        if (this.isXao == false) {
            this.isXao = true;
            this.idSoundXao = cc.audioEngine.play(this.soundXao, true, 0.5);
            this.scheduleOnce(function () {
                _this.isXao = false;
            }, 0.2);
        }
    };
    NewClass.prototype.stopXaoSound = function () {
        if (this.idSoundXao == null)
            return;
        cc.audioEngine.stop(this.idSoundXao);
        this.idSoundXao = null;
    };
    NewClass.prototype.moveThia = function () {
        var _this = this;
        cc.tween(this.spoon).to(0.5, { position: cc.v3(-59, 190), angle: -10 }).start();
        cc.audioEngine.play(this.soundMixDone, false, 0.5);
        this.listStar.active = true;
        cc.tween(this.shadow).to(0.5, { opacity: 180 }).call(function () {
            _this.bringListStarAboveShadow();
        }).start();
        this.gio.active = true;
        this.showItem.active = true;
    };
    NewClass.prototype.getWorldAngle = function (node) {
        var a = 0;
        var n = node;
        while (n) {
            a += n.angle;
            n = n.parent;
        }
        return a;
    };
    NewClass.prototype.getWorldScale = function (node) {
        var sx = 1;
        var sy = 1;
        var n = node;
        while (n) {
            sx *= n.scaleX;
            sy *= n.scaleY;
            n = n.parent;
        }
        return cc.v2(sx, sy);
    };
    NewClass.prototype.bringListStarAboveShadow = function () {
        if (!this.listStar || !this.shadow)
            return;
        var parent = this.shadow.parent;
        var starWorlds = [];
        for (var i = 0; i < this.listStar.childrenCount; i++) {
            starWorlds.push(this.listStar.children[i].convertToWorldSpaceAR(cc.v2(0, 0)));
        }
        var bowlWorld = this.dia
            ? this.dia.convertToWorldSpaceAR(cc.v2(0, 25))
            : this.listStar.convertToWorldSpaceAR(cc.v2(0, 0));
        this.listStar.parent = parent;
        this.listStar.angle = 0;
        this.listStar.setScale(1, 1);
        this.listStar.setPosition(parent.convertToNodeSpaceAR(bowlWorld));
        this.listStar.active = true;
        if (this.showItem && this.showItem.parent === parent) {
            this.listStar.zIndex = this.showItem.zIndex + 10;
            this.listStar.setSiblingIndex(this.showItem.getSiblingIndex() + 1);
        }
        else {
            this.listStar.zIndex = 100;
            this.listStar.setSiblingIndex(parent.childrenCount - 1);
        }
        for (var i = 0; i < this.listStar.childrenCount; i++) {
            var star = this.listStar.children[i];
            star.setPosition(this.listStar.convertToNodeSpaceAR(starWorlds[i]));
            star.angle = 0;
        }
        this.moveStarsToBowlRow();
    };
    NewClass.prototype.moveStarsToBowlRow = function () {
        var _this = this;
        if (!this.listStar)
            return;
        var count = this.listStar.childrenCount;
        var spacing = 200;
        var startX = -((count - 1) * spacing) / 2;
        for (var i = 0; i < count; i++) {
            var star = this.listStar.children[i];
            cc.tween(star).delay(0.04 * i).to(0.45, {
                position: cc.v3(startX + i * spacing, -60),
                angle: 0,
                scale: 1.4
            }).start();
        }
        var wait = 0.04 * Math.max(count - 1, 0) + 1.4;
        this.scheduleOnce(function () {
            _this.flyStarsToBasket();
        }, wait);
    };
    NewClass.prototype.flyStarsToBasket = function () {
        var _this = this;
        if (this.shadow) {
            cc.tween(this.shadow).to(0.4, { opacity: 0 }).start();
        }
        if (this.showItem) {
            this.showItem.active = false;
        }
        if (!this.listStar || !this.gio)
            return;
        var endWorld = this.gio.convertToWorldSpaceAR(cc.v2(0, 0));
        var end = this.listStar.convertToNodeSpaceAR(endWorld);
        var count = this.listStar.childrenCount;
        var arrived = 0;
        var _loop_1 = function (i) {
            var star = this_1.listStar.children[i];
            var start = cc.v2(star.x, star.y);
            var c1 = cc.v2(start.x + (end.x - start.x) * 0.35, start.y + 140);
            var c2 = cc.v2(end.x - 70, end.y + 90);
            cc.tween(star)
                .delay(0.12 * i)
                .parallel(cc.tween().bezierTo(0.6, c1, c2, cc.v2(end.x, end.y)), cc.tween().to(0.6, { scale: 1, angle: 15 }))
                .call(function () {
                var world = star.convertToWorldSpaceAR(cc.v2(0, 0));
                star.parent = _this.gio;
                star.setPosition(_this.gio.convertToNodeSpaceAR(world));
                _this.scheduleOnce(function () {
                    star.active = false;
                }, 0.5);
                arrived++;
                if (arrived >= count) {
                    _this.showKhay();
                }
            })
                .start();
        };
        var this_1 = this;
        for (var i = 0; i < count; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.showKhay = function () {
        if (!this.khay && this.main2) {
            this.khay = this.main2.getChildByName("khay");
        }
        if (!this.khay)
            return;
        this.khay.active = true;
        this.dia.active = false;
    };
    NewClass.prototype.getTouchInSpoonParent = function (event) {
        var screenPos = event.getLocation();
        var worldPos = this.camera.getScreenToWorldPoint(screenPos);
        return this.spoon.parent.convertToNodeSpaceAR(worldPos);
    };
    NewClass.prototype.onMixTouchStart = function (event) {
        if (this.isMixDone)
            return;
        this.isMixTouch = true;
        this.lastMixMoveTime = 0;
        if (this.tut) {
            this.tut.active = false;
        }
        if (this.progressNode) {
            this.progressNode.active = true;
        }
        var title = this.main2 ? this.main2.getChildByName("title") : null;
        if (title) {
            title.active = false;
        }
        var loc = event.getLocation();
        this.lastTouchScreen = cc.v2(loc.x, loc.y);
        this.updateBeadLayers();
    };
    NewClass.prototype.onMixTouchMove = function (event) {
        if (this.isMixDone || !this.isMixTouch)
            return;
        this.playXaoSound();
        this.moveSpoonByDelta(event);
        var now = Date.now() / 1000;
        if (this.lastMixMoveTime > 0) {
            var dt = now - this.lastMixMoveTime;
            if (dt > 0 && dt < 0.1) {
                this.mixTime += dt;
            }
        }
        this.lastMixMoveTime = now;
        this.setMixProgress(this.mixTime / this.mixNeedTime);
        if (this.mixTime >= this.mixNeedTime) {
            this.onMixComplete();
        }
    };
    NewClass.prototype.onMixTouchEnd = function () {
        this.isMixTouch = false;
        this.lastMixMoveTime = 0;
        this.lastTouchScreen = null;
        this.stopXaoSound();
        if (!this.spoon)
            return;
        this.spoon.angle = this.spoonRestAngle;
        this.updateBeadLayers();
    };
    NewClass.prototype.getLocalDelta = function (event) {
        var loc = event.getLocation();
        var curScreen = cc.v2(loc.x, loc.y);
        var prevScreen = this.lastTouchScreen ? this.lastTouchScreen : curScreen;
        this.lastTouchScreen = curScreen;
        var curWorld = this.camera.getScreenToWorldPoint(curScreen);
        var prevWorld = this.camera.getScreenToWorldPoint(prevScreen);
        var cur = this.spoon.parent.convertToNodeSpaceAR(curWorld);
        var prevLocal = this.spoon.parent.convertToNodeSpaceAR(prevWorld);
        return cc.v2(cur.x - prevLocal.x, cur.y - prevLocal.y);
    };
    NewClass.prototype.clampSpoonInBowl = function (x, y) {
        var cx = 0;
        var cy = this.spoonRestY;
        var rx = 120;
        var ry = 62;
        var nx = (x - cx) / rx;
        var ny = (y - cy) / ry;
        var len2 = nx * nx + ny * ny;
        if (len2 > 1) {
            var len = Math.sqrt(len2);
            x = cx + nx / len * rx;
            y = cy + ny / len * ry;
        }
        return cc.v2(x, y);
    };
    NewClass.prototype.moveSpoonByDelta = function (event) {
        if (!this.spoon)
            return;
        var d = this.getLocalDelta(event);
        var next = this.clampSpoonInBowl(this.spoon.x + d.x, this.spoon.y + d.y);
        this.spoon.setPosition(next.x, next.y);
        this.spoon.angle = this.spoonRestAngle;
        this.stirBeads(d.x, d.y);
        this.followSpoonWithScooped();
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
        var scoopWorld = this.getScoopWorldPos();
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
            if (this.scoopedBeadIds[id]) {
                scooped = true;
            }
            else if (!scooped && dist < 240) {
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
    NewClass.prototype.getScoopVisual = function () {
        if (!this.spoon)
            return null;
        return this.spoon.getChildByName("image_038") || this.spoon;
    };
    NewClass.prototype.getScoopLocalOffset = function () {
        if (this.scoopOffset)
            return this.scoopOffset;
        return cc.v2(-125, -8);
    };
    NewClass.prototype.getScoopWorldPos = function () {
        var visual = this.getScoopVisual();
        if (!visual)
            return cc.v2(0, 0);
        return visual.convertToWorldSpaceAR(this.getScoopLocalOffset());
    };
    NewClass.prototype.getSpoonScoopPos = function () {
        return this.listBeads.convertToNodeSpaceAR(this.getScoopWorldPos());
    };
    NewClass.prototype.stirBeads = function (vx, vy) {
        if (!this.listBeads)
            return;
        var spoonInBeads = this.getSpoonScoopPos();
        var lifting = vy > 3.2 && vy > Math.abs(vx) * 0.9;
        if (lifting) {
            this.catchBeadsInScoop();
        }
        else if (vy < -2.8) {
            this.dropScoopedBeads();
        }
        if (Math.abs(vx) < 0.08 && Math.abs(vy) < 0.08)
            return;
        for (var i = 0; i < this.listBeads.childrenCount; i++) {
            var bead = this.listBeads.children[i];
            if (bead === this.spoon)
                continue;
            if (this.scoopedBeadIds[bead.uuid])
                continue;
            var dx = bead.x - spoonInBeads.x;
            var dy = bead.y - spoonInBeads.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > 150)
                continue;
            var t = 1 - dist / 150;
            var body = bead.getComponent(cc.RigidBody);
            if (body) {
                var v = body.linearVelocity;
                body.linearVelocity = cc.v2(v.x * 0.7 + vx * 32 * t, v.y * 0.75 + vy * 20 * t);
                body.angularVelocity = body.angularVelocity * 0.7 + vx * 1.4 * t;
                body.awake = true;
            }
        }
    };
    NewClass.prototype.catchBeadsInScoop = function () {
        if (!this.listBeads || !this.spoon)
            return;
        var scoopedCount = 0;
        for (var k in this.scoopedBeadIds) {
            if (this.scoopedBeadIds.hasOwnProperty(k))
                scoopedCount++;
        }
        if (scoopedCount >= 5)
            return;
        var scoop = this.getSpoonScoopPos();
        for (var i = 0; i < this.listBeads.childrenCount; i++) {
            if (scoopedCount >= 5)
                break;
            var bead = this.listBeads.children[i];
            if (bead === this.spoon || this.scoopedBeadIds[bead.uuid])
                continue;
            var dx = bead.x - scoop.x;
            var dy = bead.y - scoop.y;
            if (Math.abs(dx) > 70 || Math.abs(dy) > 42)
                continue;
            this.scoopedBeadIds[bead.uuid] = {
                ox: cc.misc.clampf(dx * 0.28, -26, 26),
                oy: cc.misc.clampf(dy * 0.22, -16, 16)
            };
            scoopedCount++;
            var body = bead.getComponent(cc.RigidBody);
            if (body) {
                body.gravityScale = 0;
                body.linearVelocity = cc.v2(0, 0);
                body.angularVelocity = 0;
                body.awake = true;
            }
        }
    };
    NewClass.prototype.followSpoonWithScooped = function () {
        if (!this.listBeads || !this.spoon)
            return;
        var scoop = this.getSpoonScoopPos();
        for (var i = 0; i < this.listBeads.childrenCount; i++) {
            var bead = this.listBeads.children[i];
            var st = this.scoopedBeadIds[bead.uuid];
            if (!st)
                continue;
            bead.x = cc.misc.lerp(bead.x, scoop.x + st.ox, 0.5);
            bead.y = cc.misc.lerp(bead.y, scoop.y + st.oy, 0.55);
            var body = bead.getComponent(cc.RigidBody);
            if (body) {
                body.gravityScale = 0;
                body.linearVelocity = cc.v2(0, 0);
                body.syncPosition(false);
                body.awake = true;
            }
        }
    };
    NewClass.prototype.dropScoopedBeads = function () {
        if (!this.listBeads)
            return;
        for (var i = 0; i < this.listBeads.childrenCount; i++) {
            var bead = this.listBeads.children[i];
            if (!this.scoopedBeadIds[bead.uuid])
                continue;
            var body = bead.getComponent(cc.RigidBody);
            if (body) {
                body.gravityScale = 0.75;
                body.awake = true;
            }
        }
        this.scoopedBeadIds = {};
    };
    NewClass.prototype.containBeads = function () {
        if (!this.listBeads)
            return;
        for (var i = 0; i < this.listBeads.childrenCount; i++) {
            var bead = this.listBeads.children[i];
            if (bead === this.spoon)
                continue;
            if (this.scoopedBeadIds[bead.uuid])
                continue;
            var body = bead.getComponent(cc.RigidBody);
            if (this.clampBeadInBowl(bead) && body) {
                body.syncPosition(false);
                var v = body.linearVelocity;
                body.linearVelocity = cc.v2(v.x * 0.5, Math.min(v.y, 20) * 0.4);
                body.awake = true;
            }
            if (body) {
                var v = body.linearVelocity;
                var speed = v.mag();
                if (speed > 90) {
                    body.linearVelocity = v.mul(90 / speed);
                }
            }
        }
    };
    NewClass.prototype.clampBeadInBowl = function (bead) {
        var cx = 0;
        var cy = 32;
        var rx = 190;
        var ry = 98;
        var nx = (bead.x - cx) / rx;
        var ny = (bead.y - cy) / ry;
        var len2 = nx * nx + ny * ny;
        if (len2 <= 1)
            return false;
        var len = Math.sqrt(len2);
        bead.x = cx + nx / len * rx;
        bead.y = cy + ny / len * ry;
        return true;
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
        cc.audioEngine.play(this.listSoundNoti[count], false, 1);
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
        if (this.isCountNoti == 4) {
            this.linkToStore.active = true;
            console.log("show end");
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
        if (this.spoon && !this.isMixDone) {
            this.spoon.angle = this.spoonRestAngle;
        }
        this.containBeads();
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        if (canvas.alignWithScreen) {
            canvas.alignWithScreen();
        }
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
    ], NewClass.prototype, "soundXao", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundMixDone", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundShowStar", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSellDone", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCut", void 0);
    __decorate([
        property([cc.AudioClip])
    ], NewClass.prototype, "listSoundNoti", void 0);
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
        property(cc.Vec2)
    ], NewClass.prototype, "scoopOffset", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dia", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "shadow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listStar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "showItem", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "gio", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "khay", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hand2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1aUNDO1FBcmlDRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLG1CQUFhLEdBQ1EsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUVuQyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FB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O1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdWlDNUI7SUFBRCxlQUFDO0NBdmlDRCxBQXVpQ0MsQ0F2aUNxQyxFQUFFLENBQUMsU0FBUyxHQXVpQ2pEO2tCQXZpQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuZ29sZCA9IDBcclxuZ2xvYmFsVGhpcy5zY0dhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoaWVuOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERvbnV0SnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFhhbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE1peERvbmU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93U3RhcjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lXHJcbiAgICAgICAgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3V0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5BdWRpb0NsaXBdKVxyXG4gICAgbGlzdFNvdW5kTm90aTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBmeENvbG9yOiBjYy5QcmVmYWIgPSBudWxsXHJcblxyXG4gICAgLy9uZXdcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5EYXU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjdWE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdFByZUJveDogY2MuUHJlZmFiW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEl0ZW0yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuRG9uZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1haW4yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEJveDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcm86IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3ROb3RpOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3Bvb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXHJcbiAgICBzY29vcE9mZnNldDogY2MuVmVjMiA9IGNjLnYyKC0xMjUsIC04KTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGlhOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2hhZG93OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0U3RhcjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2hvd0l0ZW06IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdpbzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2hheTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgLy8gY2FtZXJhOmNjLkNhbWVyYT1udWxsXHJcblxyXG4gICAgbWF4S2hheSA9IDdcclxuXHJcbiAgICBhcnJEb251dHBvcyA9IFtdXHJcbiAgICBhcnJEb251dCA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXVxyXG4gICAgYXJyS2hheSA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXVxyXG4gICAgYXJyS2hheVBvcyA9IFtdXHJcbiAgICBpc1R1dENoaWxpID0gZmFsc2VcclxuICAgIGlzVHV0TWVhdCA9IGZhbHNlXHJcbiAgICBpc1R1dFZlZ2V0VGFibGUgPSBmYWxzZVxyXG4gICAgaXNUdXRDbGlja01lYXQgPSBmYWxzZVxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIHNvdW5kQmc6Y2MuQXVkaW9DbGlwPW51bGw7XHJcblxyXG4gICAgaXNUYXJnZXRQb3AgPSBudWxsO1xyXG4gICAgaXNTdGVwID0gMFxyXG4gICAgaXNUYXJnZXRDdXMgPSBudWxsO1xyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIGNvdW50Q3VzID0gMFxyXG4gICAgaWRTb3VuZCA9IG51bGxcclxuICAgIGxhc3RQb3J0cmFpdCA9IG51bGxcclxuICAgIGlzTWl4VG91Y2ggPSBmYWxzZVxyXG4gICAgc3Bvb25NaW5YID0gLTgwXHJcbiAgICBzcG9vbk1heFggPSA4MFxyXG4gICAgc3Bvb25NaW5ZID0gLTQwXHJcbiAgICBzcG9vbk1heFkgPSAtNVxyXG4gICAgc3Bvb25SZXN0WSA9IC0yM1xyXG4gICAgc3Bvb25SZXN0QW5nbGUgPSAwXHJcbiAgICBsaXN0QmVhZHM6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBiZWFkU2Nvb3BTdGF0ZSA9IHt9XHJcbiAgICBzY29vcGVkQmVhZElkcyA9IHt9XHJcbiAgICBpc1JvdGF0ZVN5bmMgPSBmYWxzZVxyXG4gICAgb3JpZW50TG9ja1VudGlsID0gMFxyXG4gICAgcGh5c1NuYXBzaG90ID0gbnVsbFxyXG4gICAgc3Bvb25TbmFwc2hvdCA9IG51bGxcclxuICAgIHByb2dyZXNzTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIHByb2dyZXNzRmlsbDogY2MuTm9kZSA9IG51bGxcclxuICAgIHByb2dyZXNzRmlsbFdpZHRoID0gMFxyXG4gICAgbWl4VGltZSA9IDBcclxuICAgIG1peE5lZWRUaW1lID0gMlxyXG4gICAgaXNNaXhEb25lID0gZmFsc2VcclxuICAgIGxhc3RNaXhNb3ZlVGltZSA9IDBcclxuICAgIGxhc3RUb3VjaFNjcmVlbiA9IG51bGxcclxuICAgIGlkU291bmRYYW8gPSBudWxsXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLm9uKGNjLkRpcmVjdG9yLkVWRU5UX0JFRk9SRV9VUERBVEUsIHRoaXMuYmVmb3JlVXBkYXRlT3JpZW50LCB0aGlzKTtcclxuICAgICAgICBjYy52aWV3Lm9uKCdjYW52YXMtcmVzaXplJywgdGhpcy5vbkNhbnZhc1Jlc2l6ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC4zKVxyXG4gICAgICAgIHRoaXMubGFzdFBvcnRyYWl0ID0gdGhpcy5pc1BvcnRyYWl0KCk7XHJcbiAgICAgICAgdGhpcy5yZXBvbnNpdmUodGhpcy5sYXN0UG9ydHJhaXQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTcG9vbk1peCgpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVQaHlzaWNzTG9jYWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLm9mZihjYy5EaXJlY3Rvci5FVkVOVF9CRUZPUkVfVVBEQVRFLCB0aGlzLmJlZm9yZVVwZGF0ZU9yaWVudCwgdGhpcyk7XHJcbiAgICAgICAgY2Mudmlldy5vZmYoJ2NhbnZhcy1yZXNpemUnLCB0aGlzLm9uQ2FudmFzUmVzaXplLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5mbHVzaFBoeXNpY3NSZXN5bmMpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmZpbmlzaFBoeXNpY3NSZXN5bmMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25NaXhUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25NaXhUb3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uTWl4VG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uTWl4VG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUG9ydHJhaXQoKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGxldCB3ID0gc2l6ZS53aWR0aDtcclxuICAgICAgICBsZXQgaCA9IHNpemUuaGVpZ2h0O1xyXG4gICAgICAgIGlmICgoIXcgfHwgIWgpICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAgICAgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHcgPCBoO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZVVwZGF0ZU9yaWVudCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSb3RhdGVTeW5jKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVQaHlzaWNzTG9jYWxzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwb3J0cmFpdCA9IHRoaXMuaXNQb3J0cmFpdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RQb3J0cmFpdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFBvcnRyYWl0ID0gcG9ydHJhaXQ7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvcnRyYWl0ICE9PSB0aGlzLmxhc3RQb3J0cmFpdCkge1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKG5vdyA8IHRoaXMub3JpZW50TG9ja1VudGlsKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFBvcnRyYWl0ID0gcG9ydHJhaXQ7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZW50TG9ja1VudGlsID0gbm93ICsgNDAwO1xyXG4gICAgICAgICAgICB0aGlzLm9uT3JpZW50YXRpb25DaGFuZ2UocG9ydHJhaXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNhbnZhc1Jlc2l6ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBvcnRyYWl0ID0gdGhpcy5pc1BvcnRyYWl0KCk7XHJcbiAgICAgICAgaWYgKHBvcnRyYWl0ID09PSB0aGlzLmxhc3RQb3J0cmFpdCAmJiAhdGhpcy5pc1JvdGF0ZVN5bmMpIHJldHVybjtcclxuICAgICAgICB0aGlzLmZyZWV6ZVBoeXNpY3NXb3JsZCgpO1xyXG4gICAgICAgIHRoaXMucXVldWVQaHlzaWNzUmVzeW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVQaHlzaWNzTG9jYWxzKCkge1xyXG4gICAgICAgIHRoaXMucGh5c1NuYXBzaG90ID0gdGhpcy5zbmFwc2hvdEJlYWRMb2NhbHMoKTtcclxuICAgICAgICBpZiAodGhpcy5zcG9vbiAmJiB0aGlzLnNwb29uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vblNuYXBzaG90ID0geyB4OiB0aGlzLnNwb29uLngsIHk6IHRoaXMuc3Bvb24ueSwgYW5nbGU6IHRoaXMuc3Bvb24uYW5nbGUgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc25hcHNob3RCZWFkTG9jYWxzKCkge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzKSByZXR1cm4gYXJyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChiZWFkID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgYXJyLnB1c2goeyBub2RlOiBiZWFkLCB4OiBiZWFkLngsIHk6IGJlYWQueSwgYW5nbGU6IGJlYWQuYW5nbGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZUJlYWRMb2NhbHMoYXJyKSB7XHJcbiAgICAgICAgaWYgKCFhcnIpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGFycltpXTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLm5vZGUgfHwgIWl0ZW0ubm9kZS5pc1ZhbGlkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKGl0ZW0ueCwgaXRlbS55KTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmFuZ2xlID0gaXRlbS5hbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bvb24gJiYgdGhpcy5zcG9vblNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uc2V0UG9zaXRpb24odGhpcy5zcG9vblNuYXBzaG90LngsIHRoaXMuc3Bvb25TbmFwc2hvdC55KTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3Bvb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZyZWV6ZVBoeXNpY3NXb3JsZCgpIHtcclxuICAgICAgICB0aGlzLmlzUm90YXRlU3luYyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBtID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBpZiAocG0gJiYgcG0uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICBwbS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHF1ZXVlUGh5c2ljc1Jlc3luYygpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5mbHVzaFBoeXNpY3NSZXN5bmMpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmZpbmlzaFBoeXNpY3NSZXN5bmMpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuZmx1c2hQaHlzaWNzUmVzeW5jLCAwLjA4KTtcclxuICAgIH1cclxuXHJcbiAgICBmbHVzaFBoeXNpY3NSZXN5bmMoKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICBpZiAoY2FudmFzICYmIGNhbnZhcy5hbGlnbldpdGhTY3JlZW4pIHtcclxuICAgICAgICAgICAgY2FudmFzLmFsaWduV2l0aFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3RvcmVCZWFkTG9jYWxzKHRoaXMucGh5c1NuYXBzaG90KTtcclxuICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5maW5pc2hQaHlzaWNzUmVzeW5jLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2hQaHlzaWNzUmVzeW5jKCkge1xyXG4gICAgICAgIHRoaXMucmVzdG9yZUJlYWRMb2NhbHModGhpcy5waHlzU25hcHNob3QpO1xyXG4gICAgICAgIHRoaXMucmVzeW5jUGh5c2ljc0Zyb21Ob2RlcygpO1xyXG4gICAgICAgIHRoaXMud2FrZUJlYWRQaHlzaWNzKCk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVBoeXNpY3NMb2NhbHMoKTtcclxuICAgICAgICB0aGlzLmlzUm90YXRlU3luYyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3luY1BoeXNpY3NGcm9tTm9kZXMoKSB7XHJcbiAgICAgICAgbGV0IGJvZGllcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gYm9kaWVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWJvZHkuZW5hYmxlZCB8fCBib2R5Lm5vZGUgPT09IHRoaXMuc3Bvb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBib2R5LnN5bmNQb3NpdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIGJvZHkuc3luY1JvdGF0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGJvZHkudHlwZSA9PT0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljKSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3JpZW50YXRpb25DaGFuZ2UocG9ydHJhaXQpIHtcclxuICAgICAgICB0aGlzLmZyZWV6ZVBoeXNpY3NXb3JsZCgpO1xyXG4gICAgICAgIHRoaXMucmVwb25zaXZlKHBvcnRyYWl0KTtcclxuICAgICAgICB0aGlzLnF1ZXVlUGh5c2ljc1Jlc3luYygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRQaHlzaWNzKCkge1xyXG4gICAgICAgIGxldCBwaHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGh5c2ljc01hbmFnZXIuZ3Jhdml0eSA9IGNjLnYyKDAsIC05ODApO1xyXG4gICAgfVxyXG5cclxuICAgIHdha2VCZWFkUGh5c2ljcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGdyb3VwcyA9IGNjLmdhbWUuZ3JvdXBMaXN0IHx8IFtdO1xyXG4gICAgICAgIGxldCBoYXNCZWFkR3JvdXAgPSBncm91cHMuaW5kZXhPZihcImJlYWRcIikgPj0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoYmVhZCA9PT0gdGhpcy5zcG9vbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChoYXNCZWFkR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGJlYWQuZ3JvdXAgPSBcImJlYWRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGJlYWQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmICghYm9keSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGJvZHkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgYm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMC43NTtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJEYW1waW5nID0gMC40O1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJEYW1waW5nID0gMC40NTtcclxuICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwU3Bvb25NaXgoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpYSAmJiB0aGlzLm1haW4yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhID0gdGhpcy5tYWluMi5nZXRDaGlsZEJ5TmFtZShcImRpYVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwb29uICYmIHRoaXMuZGlhKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHRoaXMuZGlhLmdldENoaWxkQnlOYW1lKFwibGlzdEl0ZW1cIik7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24gPSAoaXRlbXMgJiYgaXRlbXMuZ2V0Q2hpbGRCeU5hbWUoXCJ0aGlhXCIpKSB8fCB0aGlzLmRpYS5nZXRDaGlsZEJ5TmFtZShcInRoaWFcIikgfHwgdGhpcy5kaWEuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZV8wMjlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zcG9vbikgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IHRoaXMuc3Bvb24uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgYm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb2wgPSB0aGlzLnNwb29uLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGlmIChjb2wpIHtcclxuICAgICAgICAgICAgY29sLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGlzdEJlYWRzID0gdGhpcy5kaWEuZ2V0Q2hpbGRCeU5hbWUoXCJsaXN0SXRlbVwiKTtcclxuICAgICAgICBpZiAodGhpcy5saXN0QmVhZHMgJiYgdGhpcy5zcG9vbi5wYXJlbnQgIT09IHRoaXMubGlzdEJlYWRzKSB7XHJcbiAgICAgICAgICAgIGxldCB3b3JsZCA9IHRoaXMuc3Bvb24uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5wYXJlbnQgPSB0aGlzLmxpc3RCZWFkcztcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5zZXRQb3NpdGlvbih0aGlzLmxpc3RCZWFkcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNwb29uUmVzdFkgPSB0aGlzLnNwb29uLnk7XHJcbiAgICAgICAgdGhpcy5zcG9vblJlc3RBbmdsZSA9IHRoaXMuc3Bvb24uYW5nbGU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZWFkTGF5ZXJzKCk7XHJcbiAgICAgICAgdGhpcy53YWtlQmVhZFBoeXNpY3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uTWl4VG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25NaXhUb3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25NaXhUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vbk1peFRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNldHVwTWl4UHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cE1peFByb2dyZXNzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5kaWEpIHJldHVybjtcclxuICAgICAgICB0aGlzLnByb2dyZXNzTm9kZSA9IHRoaXMuZGlhLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc1wiKTtcclxuICAgICAgICBpZiAoIXRoaXMucHJvZ3Jlc3NOb2RlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0ZpbGwgPSB0aGlzLnByb2dyZXNzTm9kZS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXzAzNVwiKTtcclxuICAgICAgICBpZiAoIXRoaXMucHJvZ3Jlc3NGaWxsICYmIHRoaXMucHJvZ3Jlc3NOb2RlLmNoaWxkcmVuQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NGaWxsID0gdGhpcy5wcm9ncmVzc05vZGUuY2hpbGRyZW5bdGhpcy5wcm9ncmVzc05vZGUuY2hpbGRyZW5Db3VudCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0ZpbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0ZpbGxXaWR0aCA9IHRoaXMucHJvZ3Jlc3NGaWxsLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgc3AgPSB0aGlzLnByb2dyZXNzRmlsbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgaWYgKHNwICYmIHNwLnR5cGUgPT09IGNjLlNwcml0ZS5UeXBlLlNJTVBMRSkge1xyXG4gICAgICAgICAgICAgICAgc3AudHlwZSA9IGNjLlNwcml0ZS5UeXBlLkZJTExFRDtcclxuICAgICAgICAgICAgICAgIHNwLmZpbGxUeXBlID0gY2MuU3ByaXRlLkZpbGxUeXBlLkhPUklaT05UQUw7XHJcbiAgICAgICAgICAgICAgICBzcC5maWxsU3RhcnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgc3AuZmlsbFJhbmdlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldE1peFByb2dyZXNzKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1peFByb2dyZXNzKHJhdGlvKSB7XHJcbiAgICAgICAgcmF0aW8gPSBjYy5taXNjLmNsYW1wZihyYXRpbywgMCwgMSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2dyZXNzRmlsbCAmJiAhdGhpcy5wcm9ncmVzc05vZGUpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc05vZGUpIHtcclxuICAgICAgICAgICAgbGV0IGJhciA9IHRoaXMucHJvZ3Jlc3NOb2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XHJcbiAgICAgICAgICAgIGlmIChiYXIpIHtcclxuICAgICAgICAgICAgICAgIGJhci5wcm9ncmVzcyA9IHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmVzc0ZpbGwpIHJldHVybjtcclxuICAgICAgICBsZXQgc3AgPSB0aGlzLnByb2dyZXNzRmlsbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBpZiAoc3AgJiYgc3AudHlwZSA9PT0gY2MuU3ByaXRlLlR5cGUuRklMTEVEKSB7XHJcbiAgICAgICAgICAgIHNwLmZpbGxSYW5nZSA9IHJhdGlvO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzRmlsbFdpZHRoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRmlsbC53aWR0aCA9IHRoaXMucHJvZ3Jlc3NGaWxsV2lkdGggKiBNYXRoLm1heChyYXRpbywgMC4wMDEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NGaWxsLnNjYWxlWCA9IE1hdGgubWF4KHJhdGlvLCAwLjAwMSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NaXhDb21wbGV0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01peERvbmUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTWl4RG9uZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc01peFRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdG9wWGFvU291bmQoKTtcclxuICAgICAgICB0aGlzLmRyb3BTY29vcGVkQmVhZHMoKTtcclxuICAgICAgICB0aGlzLnNldE1peFByb2dyZXNzKDEpO1xyXG4gICAgICAgIGlmICh0aGlzLnNwb29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24ueSA9IHRoaXMuc3Bvb25SZXN0WTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZVRoaWEoKVxyXG4gICAgfVxyXG4gICAgaXNYYW8gPSBmYWxzZVxyXG4gICAgcGxheVhhb1NvdW5kKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zb3VuZFhhbykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlkU291bmRYYW8gIT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzWGFvID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNYYW8gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlkU291bmRYYW8gPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRYYW8sIHRydWUsIDAuNSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzWGFvID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BYYW9Tb3VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pZFNvdW5kWGFvID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZFhhbyk7XHJcbiAgICAgICAgdGhpcy5pZFNvdW5kWGFvID0gbnVsbDtcclxuICAgIH1cclxuICAgIG1vdmVUaGlhKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3Bvb24pLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTU5LCAxOTApLCBhbmdsZTogLTEwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTWl4RG9uZSwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5saXN0U3Rhci5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNoYWRvdykudG8oMC41LCB7IG9wYWNpdHk6IDE4MCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5icmluZ0xpc3RTdGFyQWJvdmVTaGFkb3coKTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuZ2lvLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnNob3dJdGVtLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3JsZEFuZ2xlKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgYSA9IDA7XHJcbiAgICAgICAgbGV0IG4gPSBub2RlO1xyXG4gICAgICAgIHdoaWxlIChuKSB7XHJcbiAgICAgICAgICAgIGEgKz0gbi5hbmdsZTtcclxuICAgICAgICAgICAgbiA9IG4ucGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3JsZFNjYWxlKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgc3ggPSAxO1xyXG4gICAgICAgIGxldCBzeSA9IDE7XHJcbiAgICAgICAgbGV0IG4gPSBub2RlO1xyXG4gICAgICAgIHdoaWxlIChuKSB7XHJcbiAgICAgICAgICAgIHN4ICo9IG4uc2NhbGVYO1xyXG4gICAgICAgICAgICBzeSAqPSBuLnNjYWxlWTtcclxuICAgICAgICAgICAgbiA9IG4ucGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2MudjIoc3gsIHN5KTtcclxuICAgIH1cclxuXHJcbiAgICBicmluZ0xpc3RTdGFyQWJvdmVTaGFkb3coKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RTdGFyIHx8ICF0aGlzLnNoYWRvdykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnNoYWRvdy5wYXJlbnQ7XHJcbiAgICAgICAgbGV0IHN0YXJXb3JsZHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFN0YXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0YXJXb3JsZHMucHVzaCh0aGlzLmxpc3RTdGFyLmNoaWxkcmVuW2ldLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYm93bFdvcmxkID0gdGhpcy5kaWFcclxuICAgICAgICAgICAgPyB0aGlzLmRpYS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMjUpKVxyXG4gICAgICAgICAgICA6IHRoaXMubGlzdFN0YXIuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0U3Rhci5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5saXN0U3Rhci5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5saXN0U3Rhci5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICB0aGlzLmxpc3RTdGFyLnNldFBvc2l0aW9uKHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihib3dsV29ybGQpKTtcclxuICAgICAgICB0aGlzLmxpc3RTdGFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0l0ZW0gJiYgdGhpcy5zaG93SXRlbS5wYXJlbnQgPT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RTdGFyLnpJbmRleCA9IHRoaXMuc2hvd0l0ZW0uekluZGV4ICsgMTA7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXIuc2V0U2libGluZ0luZGV4KHRoaXMuc2hvd0l0ZW0uZ2V0U2libGluZ0luZGV4KCkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXIuekluZGV4ID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RTdGFyLnNldFNpYmxpbmdJbmRleChwYXJlbnQuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RTdGFyLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc3RhciA9IHRoaXMubGlzdFN0YXIuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIHN0YXIuc2V0UG9zaXRpb24odGhpcy5saXN0U3Rhci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFyV29ybGRzW2ldKSk7XHJcbiAgICAgICAgICAgIHN0YXIuYW5nbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vdmVTdGFyc1RvQm93bFJvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVTdGFyc1RvQm93bFJvdygpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdFN0YXIpIHJldHVybjtcclxuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmxpc3RTdGFyLmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgbGV0IHNwYWNpbmcgPSAyMDA7XHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC0oKGNvdW50IC0gMSkgKiBzcGFjaW5nKSAvIDI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFyID0gdGhpcy5saXN0U3Rhci5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgY2MudHdlZW4oc3RhcikuZGVsYXkoMC4wNCAqIGkpLnRvKDAuNDUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MyhzdGFydFggKyBpICogc3BhY2luZywgLTYwKSxcclxuICAgICAgICAgICAgICAgIGFuZ2xlOiAwLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEuNFxyXG4gICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd2FpdCA9IDAuMDQgKiBNYXRoLm1heChjb3VudCAtIDEsIDApICsgMS40O1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mbHlTdGFyc1RvQmFza2V0KCk7XHJcbiAgICAgICAgfSwgd2FpdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmx5U3RhcnNUb0Jhc2tldCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zaGFkb3cpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zaGFkb3cpLnRvKDAuNCwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNob3dJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0l0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5saXN0U3RhciB8fCAhdGhpcy5naW8pIHJldHVybjtcclxuICAgICAgICBsZXQgZW5kV29ybGQgPSB0aGlzLmdpby5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIGxldCBlbmQgPSB0aGlzLmxpc3RTdGFyLmNvbnZlcnRUb05vZGVTcGFjZUFSKGVuZFdvcmxkKTtcclxuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmxpc3RTdGFyLmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgbGV0IGFycml2ZWQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc3RhciA9IHRoaXMubGlzdFN0YXIuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IGNjLnYyKHN0YXIueCwgc3Rhci55KTtcclxuICAgICAgICAgICAgbGV0IGMxID0gY2MudjIoc3RhcnQueCArIChlbmQueCAtIHN0YXJ0LngpICogMC4zNSwgc3RhcnQueSArIDE0MCk7XHJcbiAgICAgICAgICAgIGxldCBjMiA9IGNjLnYyKGVuZC54IC0gNzAsIGVuZC55ICsgOTApO1xyXG4gICAgICAgICAgICBjYy50d2VlbihzdGFyKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMTIgKiBpKVxyXG4gICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYmV6aWVyVG8oMC42LCBjMSwgYzIsIGNjLnYyKGVuZC54LCBlbmQueSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC42LCB7IHNjYWxlOiAxLCBhbmdsZTogMTUgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd29ybGQgPSBzdGFyLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhci5wYXJlbnQgPSB0aGlzLmdpbztcclxuICAgICAgICAgICAgICAgICAgICBzdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2lvLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyaXZlZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJpdmVkID49IGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0toYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dLaGF5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5raGF5ICYmIHRoaXMubWFpbjIpIHtcclxuICAgICAgICAgICAgdGhpcy5raGF5ID0gdGhpcy5tYWluMi5nZXRDaGlsZEJ5TmFtZShcImtoYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5raGF5KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5raGF5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaWEuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIGdldFRvdWNoSW5TcG9vblBhcmVudChldmVudCkge1xyXG4gICAgICAgIGxldCBzY3JlZW5Qb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwb29uLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NaXhUb3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNaXhEb25lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01peFRvdWNoID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhc3RNaXhNb3ZlVGltZSA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMudHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc05vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5tYWluMiA/IHRoaXMubWFpbjIuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKSA6IG51bGw7XHJcbiAgICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRpdGxlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLmxhc3RUb3VjaFNjcmVlbiA9IGNjLnYyKGxvYy54LCBsb2MueSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZWFkTGF5ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NaXhUb3VjaE1vdmUoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01peERvbmUgfHwgIXRoaXMuaXNNaXhUb3VjaCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGxheVhhb1NvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlU3Bvb25CeURlbHRhKGV2ZW50KTtcclxuICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdE1peE1vdmVUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBub3cgLSB0aGlzLmxhc3RNaXhNb3ZlVGltZTtcclxuICAgICAgICAgICAgaWYgKGR0ID4gMCAmJiBkdCA8IDAuMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taXhUaW1lICs9IGR0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdE1peE1vdmVUaW1lID0gbm93O1xyXG4gICAgICAgIHRoaXMuc2V0TWl4UHJvZ3Jlc3ModGhpcy5taXhUaW1lIC8gdGhpcy5taXhOZWVkVGltZSk7XHJcbiAgICAgICAgaWYgKHRoaXMubWl4VGltZSA+PSB0aGlzLm1peE5lZWRUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25NaXhDb21wbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1peFRvdWNoRW5kKCkge1xyXG4gICAgICAgIHRoaXMuaXNNaXhUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFzdE1peE1vdmVUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RUb3VjaFNjcmVlbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdG9wWGFvU291bmQoKTtcclxuICAgICAgICBpZiAoIXRoaXMuc3Bvb24pIHJldHVybjtcclxuICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJlYWRMYXllcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2NhbERlbHRhKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IGxvYyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IGN1clNjcmVlbiA9IGNjLnYyKGxvYy54LCBsb2MueSk7XHJcbiAgICAgICAgbGV0IHByZXZTY3JlZW4gPSB0aGlzLmxhc3RUb3VjaFNjcmVlbiA/IHRoaXMubGFzdFRvdWNoU2NyZWVuIDogY3VyU2NyZWVuO1xyXG4gICAgICAgIHRoaXMubGFzdFRvdWNoU2NyZWVuID0gY3VyU2NyZWVuO1xyXG4gICAgICAgIGxldCBjdXJXb3JsZCA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChjdXJTY3JlZW4pO1xyXG4gICAgICAgIGxldCBwcmV2V29ybGQgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocHJldlNjcmVlbik7XHJcbiAgICAgICAgbGV0IGN1ciA9IHRoaXMuc3Bvb24ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGN1cldvcmxkKTtcclxuICAgICAgICBsZXQgcHJldkxvY2FsID0gdGhpcy5zcG9vbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocHJldldvcmxkKTtcclxuICAgICAgICByZXR1cm4gY2MudjIoY3VyLnggLSBwcmV2TG9jYWwueCwgY3VyLnkgLSBwcmV2TG9jYWwueSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhbXBTcG9vbkluQm93bCh4LCB5KSB7XHJcbiAgICAgICAgbGV0IGN4ID0gMDtcclxuICAgICAgICBsZXQgY3kgPSB0aGlzLnNwb29uUmVzdFk7XHJcbiAgICAgICAgbGV0IHJ4ID0gMTIwO1xyXG4gICAgICAgIGxldCByeSA9IDYyO1xyXG4gICAgICAgIGxldCBueCA9ICh4IC0gY3gpIC8gcng7XHJcbiAgICAgICAgbGV0IG55ID0gKHkgLSBjeSkgLyByeTtcclxuICAgICAgICBsZXQgbGVuMiA9IG54ICogbnggKyBueSAqIG55O1xyXG4gICAgICAgIGlmIChsZW4yID4gMSkge1xyXG4gICAgICAgICAgICBsZXQgbGVuID0gTWF0aC5zcXJ0KGxlbjIpO1xyXG4gICAgICAgICAgICB4ID0gY3ggKyBueCAvIGxlbiAqIHJ4O1xyXG4gICAgICAgICAgICB5ID0gY3kgKyBueSAvIGxlbiAqIHJ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2MudjIoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVNwb29uQnlEZWx0YShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zcG9vbikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5nZXRMb2NhbERlbHRhKGV2ZW50KTtcclxuICAgICAgICBsZXQgbmV4dCA9IHRoaXMuY2xhbXBTcG9vbkluQm93bCh0aGlzLnNwb29uLnggKyBkLngsIHRoaXMuc3Bvb24ueSArIGQueSk7XHJcbiAgICAgICAgdGhpcy5zcG9vbi5zZXRQb3NpdGlvbihuZXh0LngsIG5leHQueSk7XHJcbiAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgdGhpcy5zdGlyQmVhZHMoZC54LCBkLnkpO1xyXG4gICAgICAgIHRoaXMuZm9sbG93U3Bvb25XaXRoU2Nvb3BlZCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmVhZExheWVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJlYWRMYXllcnMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RCZWFkcyB8fCAhdGhpcy5zcG9vbikgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnNwb29uLnBhcmVudCAhPT0gdGhpcy5saXN0QmVhZHMpIHtcclxuICAgICAgICAgICAgbGV0IHdvcmxkID0gdGhpcy5zcG9vbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLnBhcmVudCA9IHRoaXMubGlzdEJlYWRzO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLnNldFBvc2l0aW9uKHRoaXMubGlzdEJlYWRzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb25SZXN0WSA9IHRoaXMuc3Bvb24ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNjb29wV29ybGQgPSB0aGlzLmdldFNjb29wV29ybGRQb3MoKTtcclxuICAgICAgICBsZXQgc2Nvb3AgPSBjYy52MihzY29vcFdvcmxkLngsIHNjb29wV29ybGQueSk7XHJcbiAgICAgICAgbGV0IGJlaGluZCA9IFtdO1xyXG4gICAgICAgIGxldCBmcm9udCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChiZWFkID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IHAgPSBiZWFkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIGxldCBkaXN0ID0gY2MudjIocC54LCBwLnkpLnN1YihzY29vcCkubWFnKCk7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IGJlYWQudXVpZDtcclxuICAgICAgICAgICAgbGV0IHNjb29wZWQgPSB0aGlzLmJlYWRTY29vcFN0YXRlW2lkXSA9PT0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2Nvb3BlZEJlYWRJZHNbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICBzY29vcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghc2Nvb3BlZCAmJiBkaXN0IDwgMjQwKSB7XHJcbiAgICAgICAgICAgICAgICBzY29vcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzY29vcGVkICYmIGRpc3QgPiAzODApIHtcclxuICAgICAgICAgICAgICAgIHNjb29wZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJlYWRTY29vcFN0YXRlW2lkXSA9IHNjb29wZWQ7XHJcbiAgICAgICAgICAgIGlmIChzY29vcGVkKSB7XHJcbiAgICAgICAgICAgICAgICBmcm9udC5wdXNoKGJlYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmVoaW5kLnB1c2goYmVhZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlkeCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZWhpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYmVoaW5kW2ldLnNldFNpYmxpbmdJbmRleChpZHgrKyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3Bvb24uc2V0U2libGluZ0luZGV4KGlkeCsrKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyb250Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZyb250W2ldLnNldFNpYmxpbmdJbmRleChpZHgrKyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNjb29wVmlzdWFsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zcG9vbikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Bvb24uZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZV8wMzhcIikgfHwgdGhpcy5zcG9vbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTY29vcExvY2FsT2Zmc2V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNjb29wT2Zmc2V0KSByZXR1cm4gdGhpcy5zY29vcE9mZnNldDtcclxuICAgICAgICByZXR1cm4gY2MudjIoLTEyNSwgLTgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNjb29wV29ybGRQb3MoKSB7XHJcbiAgICAgICAgbGV0IHZpc3VhbCA9IHRoaXMuZ2V0U2Nvb3BWaXN1YWwoKTtcclxuICAgICAgICBpZiAoIXZpc3VhbCkgcmV0dXJuIGNjLnYyKDAsIDApO1xyXG4gICAgICAgIHJldHVybiB2aXN1YWwuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuZ2V0U2Nvb3BMb2NhbE9mZnNldCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcG9vblNjb29wUG9zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RCZWFkcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLmdldFNjb29wV29ybGRQb3MoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RpckJlYWRzKHZ4LCB2eSkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMpIHJldHVybjtcclxuICAgICAgICBsZXQgc3Bvb25JbkJlYWRzID0gdGhpcy5nZXRTcG9vblNjb29wUG9zKCk7XHJcbiAgICAgICAgbGV0IGxpZnRpbmcgPSB2eSA+IDMuMiAmJiB2eSA+IE1hdGguYWJzKHZ4KSAqIDAuOTtcclxuICAgICAgICBpZiAobGlmdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGNoQmVhZHNJblNjb29wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZ5IDwgLTIuOCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyb3BTY29vcGVkQmVhZHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHZ4KSA8IDAuMDggJiYgTWF0aC5hYnModnkpIDwgMC4wOCkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChiZWFkID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2Nvb3BlZEJlYWRJZHNbYmVhZC51dWlkXSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBkeCA9IGJlYWQueCAtIHNwb29uSW5CZWFkcy54O1xyXG4gICAgICAgICAgICBsZXQgZHkgPSBiZWFkLnkgLSBzcG9vbkluQmVhZHMueTtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdCA+IDE1MCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCB0ID0gMSAtIGRpc3QgLyAxNTA7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gYmVhZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52Mih2LnggKiAwLjcgKyB2eCAqIDMyICogdCwgdi55ICogMC43NSArIHZ5ICogMjAgKiB0KTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gYm9keS5hbmd1bGFyVmVsb2NpdHkgKiAwLjcgKyB2eCAqIDEuNCAqIHQ7XHJcbiAgICAgICAgICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXRjaEJlYWRzSW5TY29vcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzIHx8ICF0aGlzLnNwb29uKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHNjb29wZWRDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnNjb29wZWRCZWFkSWRzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb29wZWRCZWFkSWRzLmhhc093blByb3BlcnR5KGspKSBzY29vcGVkQ291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjb29wZWRDb3VudCA+PSA1KSByZXR1cm47XHJcbiAgICAgICAgbGV0IHNjb29wID0gdGhpcy5nZXRTcG9vblNjb29wUG9zKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNjb29wZWRDb3VudCA+PSA1KSBicmVhaztcclxuICAgICAgICAgICAgbGV0IGJlYWQgPSB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGJlYWQgPT09IHRoaXMuc3Bvb24gfHwgdGhpcy5zY29vcGVkQmVhZElkc1tiZWFkLnV1aWRdKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGR4ID0gYmVhZC54IC0gc2Nvb3AueDtcclxuICAgICAgICAgICAgbGV0IGR5ID0gYmVhZC55IC0gc2Nvb3AueTtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGR4KSA+IDcwIHx8IE1hdGguYWJzKGR5KSA+IDQyKSBjb250aW51ZTtcclxuICAgICAgICAgICAgdGhpcy5zY29vcGVkQmVhZElkc1tiZWFkLnV1aWRdID0ge1xyXG4gICAgICAgICAgICAgICAgb3g6IGNjLm1pc2MuY2xhbXBmKGR4ICogMC4yOCwgLTI2LCAyNiksXHJcbiAgICAgICAgICAgICAgICBveTogY2MubWlzYy5jbGFtcGYoZHkgKiAwLjIyLCAtMTYsIDE2KVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzY29vcGVkQ291bnQrKztcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBiZWFkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9sbG93U3Bvb25XaXRoU2Nvb3BlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzIHx8ICF0aGlzLnNwb29uKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHNjb29wID0gdGhpcy5nZXRTcG9vblNjb29wUG9zKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJlYWQgPSB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgbGV0IHN0ID0gdGhpcy5zY29vcGVkQmVhZElkc1tiZWFkLnV1aWRdO1xyXG4gICAgICAgICAgICBpZiAoIXN0KSBjb250aW51ZTtcclxuICAgICAgICAgICAgYmVhZC54ID0gY2MubWlzYy5sZXJwKGJlYWQueCwgc2Nvb3AueCArIHN0Lm94LCAwLjUpO1xyXG4gICAgICAgICAgICBiZWFkLnkgPSBjYy5taXNjLmxlcnAoYmVhZC55LCBzY29vcC55ICsgc3Qub3ksIDAuNTUpO1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGJlYWQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN5bmNQb3NpdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcm9wU2Nvb3BlZEJlYWRzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2Nvb3BlZEJlYWRJZHNbYmVhZC51dWlkXSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gYmVhZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMC43NTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2Nvb3BlZEJlYWRJZHMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluQmVhZHMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RCZWFkcykgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChiZWFkID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2Nvb3BlZEJlYWRJZHNbYmVhZC51dWlkXSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gYmVhZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xhbXBCZWFkSW5Cb3dsKGJlYWQpICYmIGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52Mih2LnggKiAwLjUsIE1hdGgubWluKHYueSwgMjApICogMC40KTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BlZWQgPSB2Lm1hZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwZWVkID4gOTApIHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gdi5tdWwoOTAgLyBzcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhbXBCZWFkSW5Cb3dsKGJlYWQpIHtcclxuICAgICAgICBsZXQgY3ggPSAwO1xyXG4gICAgICAgIGxldCBjeSA9IDMyO1xyXG4gICAgICAgIGxldCByeCA9IDE5MDtcclxuICAgICAgICBsZXQgcnkgPSA5ODtcclxuICAgICAgICBsZXQgbnggPSAoYmVhZC54IC0gY3gpIC8gcng7XHJcbiAgICAgICAgbGV0IG55ID0gKGJlYWQueSAtIGN5KSAvIHJ5O1xyXG4gICAgICAgIGxldCBsZW4yID0gbnggKiBueCArIG55ICogbnk7XHJcbiAgICAgICAgaWYgKGxlbjIgPD0gMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCBsZW4gPSBNYXRoLnNxcnQobGVuMik7XHJcbiAgICAgICAgYmVhZC54ID0gY3ggKyBueCAvIGxlbiAqIHJ4O1xyXG4gICAgICAgIGJlYWQueSA9IGN5ICsgbnkgLyBsZW4gKiByeTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGZsYXR0ZW5Ob2RlU2NhbGUocGFyZW50OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHN4ID0gcGFyZW50LnNjYWxlWDtcclxuICAgICAgICBsZXQgc3kgPSBwYXJlbnQuc2NhbGVZO1xyXG4gICAgICAgIGlmIChzeCA9PT0gMSAmJiBzeSA9PT0gMSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzbmFwc2hvdCA9IHBhcmVudC5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBub2RlOiBjaGlsZCxcclxuICAgICAgICAgICAgICAgIHdvcmxkUG9zOiBjaGlsZC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVYOiBjaGlsZC5zY2FsZVggKiBzeCxcclxuICAgICAgICAgICAgICAgIHNjYWxlWTogY2hpbGQuc2NhbGVZICogc3ksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFyZW50LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIHNuYXBzaG90LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLnNldFNjYWxlKGl0ZW0uc2NhbGVYLCBpdGVtLnNjYWxlWSk7XHJcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5zZXRQb3NpdGlvbihwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaXRlbS53b3JsZFBvcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpc09wZW5Eb29yID0gZmFsc2VcclxuICAgIGJ0bl9vcGVuRG9vcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW5Eb29yID09IHRydWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzT3BlbkRvb3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZG9vci5zY2FsZSA9IDJcclxuICAgICAgICB0aGlzLmN1YS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB0aGlzLmRvb3IuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1YS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB9LCAwLjMpXHJcbiAgICB9XHJcbiAgICBpc0NsaWNrQm94ID0gMFxyXG4gICAgY2xpY2tJdGVtKGJveFZhbHVlLCB0YWcpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrQm94ID49IDUpIHJldHVybjtcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKDAsIDU2KSwgY2MudjMoMTA5LCA0NyksIGNjLnYzKC0xMDUsIDQwKSwgY2MudjMoLTUyLCAyMiksIGNjLnYzKDYxLCAyMildXHJcbiAgICAgICAgdGhpcy5pc0NsaWNrQm94KytcclxuICAgICAgICBsZXQgYm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJlQm94W3RhZ10pXHJcbiAgICAgICAgYm94LnBhcmVudCA9IHRoaXMubGlzdEl0ZW0yO1xyXG4gICAgICAgIGJveC5wb3NpdGlvbiA9IGJveFZhbHVlLnBvc2l0aW9uO1xyXG4gICAgICAgIGNjLnR3ZWVuKGJveCkudG8oMC41LCB7IHBvc2l0aW9uOiBhcnJQb3NbdGhpcy5pc0NsaWNrQm94IC0gMV0gfSkuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrQm94ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Eb25lLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja0JveCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX2RvbmUoKVxyXG5cclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpc0RvbmUgPSBmYWxzZVxyXG4gICAgY291bnRJdGVtID0gMFxyXG4gICAgYnRuX2RvbmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb25lID09IHRydWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRG9uZSA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bkRvbmUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFpbjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKDAsIDM2KSwgY2MudjMoLTE1OCwgMTIzKSwgY2MudjMoMTg3LCAxMjgpLCBjYy52MygyMTEsIC01OSksIGNjLnYzKC0yMDMsIC00MCldXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMFxyXG4gICAgICAgIHRoaXMuY291bnRJdGVtID0gdGhpcy5saXN0SXRlbTIuY2hpbGRyZW5Db3VudFxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxpc3RJdGVtMi5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0SXRlbTIuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXMubGlzdEJveFxyXG4gICAgICAgICAgICBjaGlsZC5zY2FsZSA9IDIuMztcclxuICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBhcnJQb3NbY291bnRdXHJcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluMikudG8oMC4zNSwgeyBzY2FsZTogMC41IH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGlzQ291bnROb3RpID0gMFxyXG4gICAgbW92ZVRvVm9uZyhib3gpIHtcclxuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmlzQ291bnROb3RpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmxpc3RTb3VuZE5vdGlbY291bnRdLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGlzdE5vdGkuY2hpbGRyZW5bY291bnRdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyB9LCAwLjQpXHJcbiAgICAgICAgdGhpcy5pc0NvdW50Tm90aSsrXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoLTUwLCAxMDApO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIoMCwgLTMwKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGJveC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGJveC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMucm8uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2MudjIocG9zLngsIHBvcy55KVxyXG4gICAgICAgICAgICBib3gucGFyZW50ID0gdGhpcy5ybztcclxuICAgICAgICAgICAgYm94LnBvc2l0aW9uID0gcG9zO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oYm94KS5iZXppZXJUbygwLjcsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGJveCkuZGVsYXkoMC41KS50bygwLjMsIHsgc2NhbGU6IDEuNSB9KS50bygwLjA4LCB7IHNjYWxlOiAxLjQgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDAuNClcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50Tm90aSA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNob3cgZW5kXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkVuZEdhbWUodmFsdWUpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvc2UsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyBidG5fY2hvb3NlKGV2ZW50LCB2YWx1ZSkge1xyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUm90YXRlU3luYykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnNwb29uICYmICF0aGlzLmlzTWl4RG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWluQmVhZHMoKTtcclxuICAgIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMVxyXG5cclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgaWYgKGNhbnZhcy5hbGlnbldpdGhTY3JlZW4pIHtcclxuICAgICAgICAgICAgY2FudmFzLmFsaWduV2l0aFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuICAgICAgICB0aGlzLmxpc3ROb3RpLnNjYWxlID0gKGxvZ2ljKSA/IDEuMSA6IDAuN1xyXG5cclxuICAgICAgICBpZiAobG9naWMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0yMDApXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8gPSA4MTIgLyAzNzU7IC8vIOKJiCAyLjE2XHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBIT05FX1hfQVNQRUNUX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVjayBpcGhvbmV4XCIpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC00MClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjM3XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTQwKVxyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC4zNlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0xNDApXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19