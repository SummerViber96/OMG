"use strict";
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