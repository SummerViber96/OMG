
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
        _this.physSnapshot = null;
        _this.spoonSnapshot = null;
        _this.progressNode = null;
        _this.progressFill = null;
        _this.progressFillWidth = 0;
        _this.mixTime = 0;
        _this.mixNeedTime = 2;
        _this.isMixDone = false;
        _this.lastMixMoveTime = 0;
        _this.mixTouchListener = null;
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
    };
    NewClass.prototype.start = function () {
        cc.audioEngine.play(this.soundBg, true, 0.3);
        this.lastPortrait = this.isPortrait();
        this.reponsive(this.lastPortrait);
        this.initPhysics();
        this.setupSpoonMix();
        this.cachePhysicsLocals();
    };
    NewClass.prototype.onDestroy = function () {
        cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, this.beforeUpdateOrient, this);
        cc.view.off('canvas-resize', this.onCanvasResize, this);
        this.unschedule(this.flushPhysicsResync);
        this.unschedule(this.finishPhysicsResync);
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
            this.lastPortrait = portrait;
            this.onOrientationChange(portrait);
        }
    };
    NewClass.prototype.onCanvasResize = function () {
        if (!this.listBeads)
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
    NewClass.prototype.setupSpoonMix = function () {
        var _this = this;
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
        this.mixTouchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesBegan: function (touches) {
                _this.onMixTouchStart(touches[0]);
            },
            onTouchesMoved: function (touches) {
                _this.onMixTouchMove(touches[0]);
            },
            onTouchesEnded: function () {
                _this.onMixTouchEnd();
            },
            onTouchesCancelled: function () {
                _this.onMixTouchEnd();
            }
        });
        cc.eventManager.addListener(this.mixTouchListener, 1);
        this.setupMixProgress();
    };
    NewClass.prototype.onDestroy = function () {
        if (this.mixTouchListener) {
            cc.eventManager.removeListener(this.mixTouchListener);
            this.mixTouchListener = null;
        }
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
        this.stopXaoSound();
        if (!this.spoon)
            return;
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
        if (Math.abs(d.y) < 0.2) {
            d.y = delta.y * 0.5;
        }
        return d;
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
        var spoonInBeads = this.listBeads.convertToNodeSpaceAR(this.spoon.convertToWorldSpaceAR(cc.v2(0, 0)));
        if (vy > 0.7) {
            this.catchBeadsInScoop();
        }
        else if (vy < -1.2) {
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
            if (dist > 200)
                continue;
            var t = 1 - dist / 200;
            bead.x += vx * (0.55 + 0.7 * t);
            bead.y += vy * 0.35 * t + vx * 0.08 * t * (dx >= 0 ? 1 : -1);
            bead.x = cc.misc.clampf(bead.x, -200, 200);
            bead.y = cc.misc.clampf(bead.y, -75, 45);
            var body = bead.getComponent(cc.RigidBody);
            if (body) {
                body.syncPosition(false);
                body.linearVelocity = cc.v2(vx * 16 * t, vy * 10 * t);
                body.angularVelocity = vx * 0.6 * t;
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
                body.gravityScale = 0.45;
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
        if (!this.isMixTouch) {
            this.containBeads();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzaUNDO1FBcGlDRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLG1CQUFhLEdBQ1EsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUVuQyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FB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RUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RCw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUMzQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsR0FBRyxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUM7WUFDckIsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFFbkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRTNELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVB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QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUExR0osUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNpQzVCO0lBQUQsZUFBQztDQXRpQ0QsQUFzaUNDLENBdGlDcUMsRUFBRSxDQUFDLFNBQVMsR0FzaUNqRDtrQkF0aUNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5nbG9iYWxUaGlzLmdvbGQgPSAwXHJcbmdsb2JhbFRoaXMuc2NHYW1lID0gZmFsc2VcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2hvd1BvcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENsb3NlUG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDaGllbjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZExvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIZWxsbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvQ3VzMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvQ3VzMzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRyYW5zOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmREb251dEp1bXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRFbmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRYYW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRNaXhEb25lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kU2hvd1N0YXI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTZWxsRG9uZVxyXG4gICAgICAgIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEN1dDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuQXVkaW9DbGlwXSlcclxuICAgIGxpc3RTb3VuZE5vdGk6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1dDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3VzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZnhDb2xvcjogY2MuUHJlZmFiID0gbnVsbFxyXG5cclxuICAgIC8vbmV3XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0aGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuRGF1OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VhOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb29yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RQcmVCb3g6IGNjLlByZWZhYltdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJdGVtMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkRvbmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RCb3g6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJvOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Tm90aTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNwb29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgc2Nvb3BPZmZzZXQ6IGNjLlZlYzIgPSBjYy52MigtMTI1LCAtOCk7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRpYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNoYWRvdzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFN0YXI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNob3dJdGVtOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnaW86IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGtoYXk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIC8vIGNhbWVyYTpjYy5DYW1lcmE9bnVsbFxyXG5cclxuICAgIG1heEtoYXkgPSA3XHJcblxyXG4gICAgYXJyRG9udXRwb3MgPSBbXVxyXG4gICAgYXJyRG9udXQgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIGFycktoYXkgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIGFycktoYXlQb3MgPSBbXVxyXG4gICAgaXNUdXRDaGlsaSA9IGZhbHNlXHJcbiAgICBpc1R1dE1lYXQgPSBmYWxzZVxyXG4gICAgaXNUdXRWZWdldFRhYmxlID0gZmFsc2VcclxuICAgIGlzVHV0Q2xpY2tNZWF0ID0gZmFsc2VcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBzb3VuZEJnOmNjLkF1ZGlvQ2xpcD1udWxsO1xyXG5cclxuICAgIGlzVGFyZ2V0UG9wID0gbnVsbDtcclxuICAgIGlzU3RlcCA9IDBcclxuICAgIGlzVGFyZ2V0Q3VzID0gbnVsbDtcclxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIGlkU291bmQgPSBudWxsXHJcbiAgICBsYXN0UG9ydHJhaXQgPSBudWxsXHJcbiAgICBpc01peFRvdWNoID0gZmFsc2VcclxuICAgIHNwb29uTWluWCA9IC04MFxyXG4gICAgc3Bvb25NYXhYID0gODBcclxuICAgIHNwb29uTWluWSA9IC00MFxyXG4gICAgc3Bvb25NYXhZID0gLTVcclxuICAgIHNwb29uUmVzdFkgPSAtMjNcclxuICAgIHNwb29uUmVzdEFuZ2xlID0gMFxyXG4gICAgbGlzdEJlYWRzOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYmVhZFNjb29wU3RhdGUgPSB7fVxyXG4gICAgc2Nvb3BlZEJlYWRJZHMgPSB7fVxyXG4gICAgaXNSb3RhdGVTeW5jID0gZmFsc2VcclxuICAgIHBoeXNTbmFwc2hvdCA9IG51bGxcclxuICAgIHNwb29uU25hcHNob3QgPSBudWxsXHJcbiAgICBwcm9ncmVzc05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBwcm9ncmVzc0ZpbGw6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBwcm9ncmVzc0ZpbGxXaWR0aCA9IDBcclxuICAgIG1peFRpbWUgPSAwXHJcbiAgICBtaXhOZWVkVGltZSA9IDJcclxuICAgIGlzTWl4RG9uZSA9IGZhbHNlXHJcbiAgICBsYXN0TWl4TW92ZVRpbWUgPSAwXHJcbiAgICBtaXhUb3VjaExpc3RlbmVyID0gbnVsbFxyXG4gICAgaWRTb3VuZFhhbyA9IG51bGxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oY2MuRGlyZWN0b3IuRVZFTlRfQkVGT1JFX1VQREFURSwgdGhpcy5iZWZvcmVVcGRhdGVPcmllbnQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnZpZXcub24oJ2NhbnZhcy1yZXNpemUnLCB0aGlzLm9uQ2FudmFzUmVzaXplLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuMylcclxuICAgICAgICB0aGlzLmxhc3RQb3J0cmFpdCA9IHRoaXMuaXNQb3J0cmFpdCgpO1xyXG4gICAgICAgIHRoaXMucmVwb25zaXZlKHRoaXMubGFzdFBvcnRyYWl0KTtcclxuICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNwb29uTWl4KCk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVBoeXNpY3NMb2NhbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3Iub2ZmKGNjLkRpcmVjdG9yLkVWRU5UX0JFRk9SRV9VUERBVEUsIHRoaXMuYmVmb3JlVXBkYXRlT3JpZW50LCB0aGlzKTtcclxuICAgICAgICBjYy52aWV3Lm9mZignY2FudmFzLXJlc2l6ZScsIHRoaXMub25DYW52YXNSZXNpemUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmZsdXNoUGh5c2ljc1Jlc3luYyk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZmluaXNoUGh5c2ljc1Jlc3luYyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNQb3J0cmFpdCgpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgbGV0IHcgPSBzaXplLndpZHRoO1xyXG4gICAgICAgIGxldCBoID0gc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKCghdyB8fCAhaCkgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICBoID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdyA8IGg7XHJcbiAgICB9XHJcblxyXG4gICAgYmVmb3JlVXBkYXRlT3JpZW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1JvdGF0ZVN5bmMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVBoeXNpY3NMb2NhbHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBvcnRyYWl0ID0gdGhpcy5pc1BvcnRyYWl0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFBvcnRyYWl0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0UG9ydHJhaXQgPSBwb3J0cmFpdDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9ydHJhaXQgIT09IHRoaXMubGFzdFBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFBvcnRyYWl0ID0gcG9ydHJhaXQ7XHJcbiAgICAgICAgICAgIHRoaXMub25PcmllbnRhdGlvbkNoYW5nZShwb3J0cmFpdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FudmFzUmVzaXplKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMpIHJldHVybjtcclxuICAgICAgICB0aGlzLmZyZWV6ZVBoeXNpY3NXb3JsZCgpO1xyXG4gICAgICAgIHRoaXMucXVldWVQaHlzaWNzUmVzeW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVQaHlzaWNzTG9jYWxzKCkge1xyXG4gICAgICAgIHRoaXMucGh5c1NuYXBzaG90ID0gdGhpcy5zbmFwc2hvdEJlYWRMb2NhbHMoKTtcclxuICAgICAgICBpZiAodGhpcy5zcG9vbiAmJiB0aGlzLnNwb29uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vblNuYXBzaG90ID0geyB4OiB0aGlzLnNwb29uLngsIHk6IHRoaXMuc3Bvb24ueSwgYW5nbGU6IHRoaXMuc3Bvb24uYW5nbGUgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc25hcHNob3RCZWFkTG9jYWxzKCkge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzKSByZXR1cm4gYXJyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChiZWFkID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgYXJyLnB1c2goeyBub2RlOiBiZWFkLCB4OiBiZWFkLngsIHk6IGJlYWQueSwgYW5nbGU6IGJlYWQuYW5nbGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZUJlYWRMb2NhbHMoYXJyKSB7XHJcbiAgICAgICAgaWYgKCFhcnIpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGFycltpXTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLm5vZGUgfHwgIWl0ZW0ubm9kZS5pc1ZhbGlkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKGl0ZW0ueCwgaXRlbS55KTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmFuZ2xlID0gaXRlbS5hbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bvb24gJiYgdGhpcy5zcG9vblNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uc2V0UG9zaXRpb24odGhpcy5zcG9vblNuYXBzaG90LngsIHRoaXMuc3Bvb25TbmFwc2hvdC55KTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3Bvb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZyZWV6ZVBoeXNpY3NXb3JsZCgpIHtcclxuICAgICAgICB0aGlzLmlzUm90YXRlU3luYyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBtID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBpZiAocG0gJiYgcG0uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICBwbS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHF1ZXVlUGh5c2ljc1Jlc3luYygpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5mbHVzaFBoeXNpY3NSZXN5bmMpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmZpbmlzaFBoeXNpY3NSZXN5bmMpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuZmx1c2hQaHlzaWNzUmVzeW5jLCAwLjA4KTtcclxuICAgIH1cclxuXHJcbiAgICBmbHVzaFBoeXNpY3NSZXN5bmMoKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICBpZiAoY2FudmFzICYmIGNhbnZhcy5hbGlnbldpdGhTY3JlZW4pIHtcclxuICAgICAgICAgICAgY2FudmFzLmFsaWduV2l0aFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3RvcmVCZWFkTG9jYWxzKHRoaXMucGh5c1NuYXBzaG90KTtcclxuICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5maW5pc2hQaHlzaWNzUmVzeW5jLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2hQaHlzaWNzUmVzeW5jKCkge1xyXG4gICAgICAgIHRoaXMucmVzdG9yZUJlYWRMb2NhbHModGhpcy5waHlzU25hcHNob3QpO1xyXG4gICAgICAgIHRoaXMucmVzeW5jUGh5c2ljc0Zyb21Ob2RlcygpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVQaHlzaWNzTG9jYWxzKCk7XHJcbiAgICAgICAgdGhpcy5pc1JvdGF0ZVN5bmMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXN5bmNQaHlzaWNzRnJvbU5vZGVzKCkge1xyXG4gICAgICAgIGxldCBib2RpZXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGJvZGllc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFib2R5LmVuYWJsZWQgfHwgYm9keS5ub2RlID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICBib2R5LnN5bmNSb3RhdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChib2R5LnR5cGUgPT09IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYykge1xyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk9yaWVudGF0aW9uQ2hhbmdlKHBvcnRyYWl0KSB7XHJcbiAgICAgICAgdGhpcy5mcmVlemVQaHlzaWNzV29ybGQoKTtcclxuICAgICAgICB0aGlzLnJlcG9uc2l2ZShwb3J0cmFpdCk7XHJcbiAgICAgICAgdGhpcy5xdWV1ZVBoeXNpY3NSZXN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UGh5c2ljcygpIHtcclxuICAgICAgICBsZXQgcGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHBoeXNpY3NNYW5hZ2VyLmdyYXZpdHkgPSBjYy52MigwLCAtOTgwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFNwb29uTWl4KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5kaWEgJiYgdGhpcy5tYWluMikge1xyXG4gICAgICAgICAgICB0aGlzLmRpYSA9IHRoaXMubWFpbjIuZ2V0Q2hpbGRCeU5hbWUoXCJkaWFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zcG9vbiAmJiB0aGlzLmRpYSkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLmRpYS5nZXRDaGlsZEJ5TmFtZShcImxpc3RJdGVtXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uID0gKGl0ZW1zICYmIGl0ZW1zLmdldENoaWxkQnlOYW1lKFwidGhpYVwiKSkgfHwgdGhpcy5kaWEuZ2V0Q2hpbGRCeU5hbWUoXCJ0aGlhXCIpIHx8IHRoaXMuZGlhLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VfMDI5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuc3Bvb24pIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLnNwb29uLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29sID0gdGhpcy5zcG9vbi5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICBpZiAoY29sKSB7XHJcbiAgICAgICAgICAgIGNvbC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3RCZWFkcyA9IHRoaXMuZGlhLmdldENoaWxkQnlOYW1lKFwibGlzdEl0ZW1cIik7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdEJlYWRzICYmIHRoaXMuc3Bvb24ucGFyZW50ICE9PSB0aGlzLmxpc3RCZWFkcykge1xyXG4gICAgICAgICAgICBsZXQgd29ybGQgPSB0aGlzLnNwb29uLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24ucGFyZW50ID0gdGhpcy5saXN0QmVhZHM7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uc2V0UG9zaXRpb24odGhpcy5saXN0QmVhZHMuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcG9vblJlc3RZID0gdGhpcy5zcG9vbi55O1xyXG4gICAgICAgIHRoaXMuc3Bvb25SZXN0QW5nbGUgPSB0aGlzLnNwb29uLmFuZ2xlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmVhZExheWVycygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RCZWFkcykge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBzID0gY2MuZ2FtZS5ncm91cExpc3QgfHwgW107XHJcbiAgICAgICAgICAgIGxldCBoYXNCZWFkR3JvdXAgPSBncm91cHMuaW5kZXhPZihcImJlYWRcIikgPj0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzQmVhZEdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVhZC5ncm91cCA9IFwiYmVhZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBiZWFkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFib2R5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyRGFtcGluZyA9IDEuMjtcclxuICAgICAgICAgICAgICAgIGJvZHkuYW5ndWxhckRhbXBpbmcgPSAxLjU7XHJcbiAgICAgICAgICAgICAgICBib2R5LmdyYXZpdHlTY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWl4VG91Y2hMaXN0ZW5lciA9IGNjLkV2ZW50TGlzdGVuZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuVE9VQ0hfQUxMX0FUX09OQ0UsXHJcbiAgICAgICAgICAgIG9uVG91Y2hlc0JlZ2FuOiAodG91Y2hlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk1peFRvdWNoU3RhcnQodG91Y2hlc1swXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uVG91Y2hlc01vdmVkOiAodG91Y2hlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk1peFRvdWNoTW92ZSh0b3VjaGVzWzBdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25Ub3VjaGVzRW5kZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25NaXhUb3VjaEVuZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblRvdWNoZXNDYW5jZWxsZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25NaXhUb3VjaEVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHRoaXMubWl4VG91Y2hMaXN0ZW5lciwgMSk7XHJcbiAgICAgICAgdGhpcy5zZXR1cE1peFByb2dyZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1peFRvdWNoTGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLnJlbW92ZUxpc3RlbmVyKHRoaXMubWl4VG91Y2hMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIHRoaXMubWl4VG91Y2hMaXN0ZW5lciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwTWl4UHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpYSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NOb2RlID0gdGhpcy5kaWEuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzXCIpO1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmVzc05vZGUpIHJldHVybjtcclxuICAgICAgICB0aGlzLnByb2dyZXNzTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzRmlsbCA9IHRoaXMucHJvZ3Jlc3NOb2RlLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VfMDM1XCIpO1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmVzc0ZpbGwgJiYgdGhpcy5wcm9ncmVzc05vZGUuY2hpbGRyZW5Db3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0ZpbGwgPSB0aGlzLnByb2dyZXNzTm9kZS5jaGlsZHJlblt0aGlzLnByb2dyZXNzTm9kZS5jaGlsZHJlbkNvdW50IC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzRmlsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRmlsbFdpZHRoID0gdGhpcy5wcm9ncmVzc0ZpbGwud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBzcCA9IHRoaXMucHJvZ3Jlc3NGaWxsLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBpZiAoc3AgJiYgc3AudHlwZSA9PT0gY2MuU3ByaXRlLlR5cGUuU0lNUExFKSB7XHJcbiAgICAgICAgICAgICAgICBzcC50eXBlID0gY2MuU3ByaXRlLlR5cGUuRklMTEVEO1xyXG4gICAgICAgICAgICAgICAgc3AuZmlsbFR5cGUgPSBjYy5TcHJpdGUuRmlsbFR5cGUuSE9SSVpPTlRBTDtcclxuICAgICAgICAgICAgICAgIHNwLmZpbGxTdGFydCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzcC5maWxsUmFuZ2UgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0TWl4UHJvZ3Jlc3MoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWl4UHJvZ3Jlc3MocmF0aW8pIHtcclxuICAgICAgICByYXRpbyA9IGNjLm1pc2MuY2xhbXBmKHJhdGlvLCAwLCAxKTtcclxuICAgICAgICBpZiAoIXRoaXMucHJvZ3Jlc3NGaWxsICYmICF0aGlzLnByb2dyZXNzTm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzTm9kZSkge1xyXG4gICAgICAgICAgICBsZXQgYmFyID0gdGhpcy5wcm9ncmVzc05vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcclxuICAgICAgICAgICAgaWYgKGJhcikge1xyXG4gICAgICAgICAgICAgICAgYmFyLnByb2dyZXNzID0gcmF0aW87XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2dyZXNzRmlsbCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzcCA9IHRoaXMucHJvZ3Jlc3NGaWxsLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGlmIChzcCAmJiBzcC50eXBlID09PSBjYy5TcHJpdGUuVHlwZS5GSUxMRUQpIHtcclxuICAgICAgICAgICAgc3AuZmlsbFJhbmdlID0gcmF0aW87XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NGaWxsV2lkdGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NGaWxsLndpZHRoID0gdGhpcy5wcm9ncmVzc0ZpbGxXaWR0aCAqIE1hdGgubWF4KHJhdGlvLCAwLjAwMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0ZpbGwuc2NhbGVYID0gTWF0aC5tYXgocmF0aW8sIDAuMDAxKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1peENvbXBsZXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWl4RG9uZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNaXhEb25lID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzTWl4VG91Y2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0b3BYYW9Tb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuZHJvcFNjb29wZWRCZWFkcygpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4UHJvZ3Jlc3MoMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bvb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi55ID0gdGhpcy5zcG9vblJlc3RZO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlVGhpYSgpXHJcbiAgICB9XHJcbiAgICBpc1hhbyA9IGZhbHNlXHJcbiAgICBwbGF5WGFvU291bmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNvdW5kWGFvKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaWRTb3VuZFhhbyAhPSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNYYW8gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1hhbyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaWRTb3VuZFhhbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFhhbywgdHJ1ZSwgMC41KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNYYW8gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFhhb1NvdW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkU291bmRYYW8gPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZFNvdW5kWGFvKTtcclxuICAgICAgICB0aGlzLmlkU291bmRYYW8gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgbW92ZVRoaWEoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zcG9vbikudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNTksIDE5MCksIGFuZ2xlOiAtMTAgfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRNaXhEb25lLCBmYWxzZSwgMC41KTtcclxuICAgICAgICB0aGlzLmxpc3RTdGFyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc2hhZG93KS50bygwLjUsIHsgb3BhY2l0eTogMTgwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJyaW5nTGlzdFN0YXJBYm92ZVNoYWRvdygpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5naW8uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkQW5nbGUobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBhID0gMDtcclxuICAgICAgICBsZXQgbiA9IG5vZGU7XHJcbiAgICAgICAgd2hpbGUgKG4pIHtcclxuICAgICAgICAgICAgYSArPSBuLmFuZ2xlO1xyXG4gICAgICAgICAgICBuID0gbi5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkU2NhbGUobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBzeCA9IDE7XHJcbiAgICAgICAgbGV0IHN5ID0gMTtcclxuICAgICAgICBsZXQgbiA9IG5vZGU7XHJcbiAgICAgICAgd2hpbGUgKG4pIHtcclxuICAgICAgICAgICAgc3ggKj0gbi5zY2FsZVg7XHJcbiAgICAgICAgICAgIHN5ICo9IG4uc2NhbGVZO1xyXG4gICAgICAgICAgICBuID0gbi5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy52MihzeCwgc3kpO1xyXG4gICAgfVxyXG5cclxuICAgIGJyaW5nTGlzdFN0YXJBYm92ZVNoYWRvdygpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdFN0YXIgfHwgIXRoaXMuc2hhZG93KSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMuc2hhZG93LnBhcmVudDtcclxuICAgICAgICBsZXQgc3RhcldvcmxkcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0U3Rhci5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgc3Rhcldvcmxkcy5wdXNoKHRoaXMubGlzdFN0YXIuY2hpbGRyZW5baV0uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBib3dsV29ybGQgPSB0aGlzLmRpYVxyXG4gICAgICAgICAgICA/IHRoaXMuZGlhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAyNSkpXHJcbiAgICAgICAgICAgIDogdGhpcy5saXN0U3Rhci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3RTdGFyLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLmxpc3RTdGFyLmFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLmxpc3RTdGFyLnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIHRoaXMubGlzdFN0YXIuc2V0UG9zaXRpb24ocGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGJvd2xXb3JsZCkpO1xyXG4gICAgICAgIHRoaXMubGlzdFN0YXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaG93SXRlbSAmJiB0aGlzLnNob3dJdGVtLnBhcmVudCA9PT0gcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXIuekluZGV4ID0gdGhpcy5zaG93SXRlbS56SW5kZXggKyAxMDtcclxuICAgICAgICAgICAgdGhpcy5saXN0U3Rhci5zZXRTaWJsaW5nSW5kZXgodGhpcy5zaG93SXRlbS5nZXRTaWJsaW5nSW5kZXgoKSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0U3Rhci56SW5kZXggPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXIuc2V0U2libGluZ0luZGV4KHBhcmVudC5jaGlsZHJlbkNvdW50IC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFN0YXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFyID0gdGhpcy5saXN0U3Rhci5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgc3Rhci5zZXRQb3NpdGlvbih0aGlzLmxpc3RTdGFyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHN0YXJXb3JsZHNbaV0pKTtcclxuICAgICAgICAgICAgc3Rhci5hbmdsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZVN0YXJzVG9Cb3dsUm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVN0YXJzVG9Cb3dsUm93KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0U3RhcikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMubGlzdFN0YXIuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBsZXQgc3BhY2luZyA9IDIwMDtcclxuICAgICAgICBsZXQgc3RhcnRYID0gLSgoY291bnQgLSAxKSAqIHNwYWNpbmcpIC8gMjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHN0YXIgPSB0aGlzLmxpc3RTdGFyLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjYy50d2VlbihzdGFyKS5kZWxheSgwLjA0ICogaSkudG8oMC40NSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKHN0YXJ0WCArIGkgKiBzcGFjaW5nLCAtNjApLFxyXG4gICAgICAgICAgICAgICAgYW5nbGU6IDAsXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMS40XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3YWl0ID0gMC4wNCAqIE1hdGgubWF4KGNvdW50IC0gMSwgMCkgKyAxLjQ7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZseVN0YXJzVG9CYXNrZXQoKTtcclxuICAgICAgICB9LCB3YWl0KTtcclxuICAgIH1cclxuXHJcbiAgICBmbHlTdGFyc1RvQmFza2V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNoYWRvdykge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNoYWRvdykudG8oMC40LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0l0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RTdGFyIHx8ICF0aGlzLmdpbykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBlbmRXb3JsZCA9IHRoaXMuZ2lvLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMubGlzdFN0YXIuY29udmVydFRvTm9kZVNwYWNlQVIoZW5kV29ybGQpO1xyXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMubGlzdFN0YXIuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBsZXQgYXJyaXZlZCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFyID0gdGhpcy5saXN0U3Rhci5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gY2MudjIoc3Rhci54LCBzdGFyLnkpO1xyXG4gICAgICAgICAgICBsZXQgYzEgPSBjYy52MihzdGFydC54ICsgKGVuZC54IC0gc3RhcnQueCkgKiAwLjM1LCBzdGFydC55ICsgMTQwKTtcclxuICAgICAgICAgICAgbGV0IGMyID0gY2MudjIoZW5kLnggLSA3MCwgZW5kLnkgKyA5MCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHN0YXIpXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4xMiAqIGkpXHJcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5iZXppZXJUbygwLjYsIGMxLCBjMiwgY2MudjIoZW5kLngsIGVuZC55KSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjYsIHsgc2NhbGU6IDEsIGFuZ2xlOiAxNSB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3b3JsZCA9IHN0YXIuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyLnBhcmVudCA9IHRoaXMuZ2lvO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXIuc2V0UG9zaXRpb24odGhpcy5naW8uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJpdmVkKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycml2ZWQgPj0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93S2hheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0toYXkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtoYXkgJiYgdGhpcy5tYWluMikge1xyXG4gICAgICAgICAgICB0aGlzLmtoYXkgPSB0aGlzLm1haW4yLmdldENoaWxkQnlOYW1lKFwia2hheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmtoYXkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmtoYXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpYS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgZ2V0VG91Y2hJblNwb29uUGFyZW50KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Bvb24ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1peFRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01peERvbmUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTWl4VG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFzdE1peE1vdmVUaW1lID0gMDtcclxuICAgICAgICBpZiAodGhpcy50dXQpIHtcclxuICAgICAgICAgICAgdGhpcy50dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLm1haW4yID8gdGhpcy5tYWluMi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIDogbnVsbDtcclxuICAgICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICAgICAgdGl0bGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlQmVhZExheWVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWl4VG91Y2hNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNaXhEb25lIHx8ICF0aGlzLmlzTWl4VG91Y2gpIHJldHVybjtcclxuICAgICAgICB0aGlzLnBsYXlYYW9Tb3VuZCgpO1xyXG4gICAgICAgIHRoaXMubW92ZVNwb29uQnlEZWx0YShldmVudCk7XHJcbiAgICAgICAgbGV0IG5vdyA9IERhdGUubm93KCkgLyAxMDAwO1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RNaXhNb3ZlVGltZSA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGR0ID0gbm93IC0gdGhpcy5sYXN0TWl4TW92ZVRpbWU7XHJcbiAgICAgICAgICAgIGlmIChkdCA+IDAgJiYgZHQgPCAwLjEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWl4VGltZSArPSBkdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RNaXhNb3ZlVGltZSA9IG5vdztcclxuICAgICAgICB0aGlzLnNldE1peFByb2dyZXNzKHRoaXMubWl4VGltZSAvIHRoaXMubWl4TmVlZFRpbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLm1peFRpbWUgPj0gdGhpcy5taXhOZWVkVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTWl4Q29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25NaXhUb3VjaEVuZCgpIHtcclxuICAgICAgICB0aGlzLmlzTWl4VG91Y2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhc3RNaXhNb3ZlVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zdG9wWGFvU291bmQoKTtcclxuICAgICAgICBpZiAoIXRoaXMuc3Bvb24pIHJldHVybjtcclxuICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJlYWRMYXllcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2NhbERlbHRhKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IGN1ciA9IHRoaXMuZ2V0VG91Y2hJblNwb29uUGFyZW50KGV2ZW50KTtcclxuICAgICAgICBsZXQgbG9jID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgZGVsdGEgPSBldmVudC5nZXREZWx0YSgpO1xyXG4gICAgICAgIGxldCBwcmV2U2NyZWVuID0gY2MudjIobG9jLnggLSBkZWx0YS54LCBsb2MueSAtIGRlbHRhLnkpO1xyXG4gICAgICAgIGxldCBwcmV2V29ybGQgPSB0aGlzLmNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQocHJldlNjcmVlbik7XHJcbiAgICAgICAgbGV0IHByZXZMb2NhbCA9IHRoaXMuc3Bvb24ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHByZXZXb3JsZCk7XHJcbiAgICAgICAgbGV0IGQgPSBjYy52MihjdXIueCAtIHByZXZMb2NhbC54LCBjdXIueSAtIHByZXZMb2NhbC55KTtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoZC54KSA8IDAuMikge1xyXG4gICAgICAgICAgICBkLnggPSBkZWx0YS54ICogMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnMoZC55KSA8IDAuMikge1xyXG4gICAgICAgICAgICBkLnkgPSBkZWx0YS55ICogMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZDtcclxuICAgIH1cclxuXHJcbiAgICBjbGFtcFNwb29uSW5Cb3dsKHgsIHkpIHtcclxuICAgICAgICBsZXQgY3ggPSAwO1xyXG4gICAgICAgIGxldCBjeSA9IHRoaXMuc3Bvb25SZXN0WTtcclxuICAgICAgICBsZXQgcnggPSAxMjA7XHJcbiAgICAgICAgbGV0IHJ5ID0gNjI7XHJcbiAgICAgICAgbGV0IG54ID0gKHggLSBjeCkgLyByeDtcclxuICAgICAgICBsZXQgbnkgPSAoeSAtIGN5KSAvIHJ5O1xyXG4gICAgICAgIGxldCBsZW4yID0gbnggKiBueCArIG55ICogbnk7XHJcbiAgICAgICAgaWYgKGxlbjIgPiAxKSB7XHJcbiAgICAgICAgICAgIGxldCBsZW4gPSBNYXRoLnNxcnQobGVuMik7XHJcbiAgICAgICAgICAgIHggPSBjeCArIG54IC8gbGVuICogcng7XHJcbiAgICAgICAgICAgIHkgPSBjeSArIG55IC8gbGVuICogcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlU3Bvb25CeURlbHRhKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwb29uKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldExvY2FsRGVsdGEoZXZlbnQpO1xyXG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5jbGFtcFNwb29uSW5Cb3dsKHRoaXMuc3Bvb24ueCArIGQueCwgdGhpcy5zcG9vbi55ICsgZC55KTtcclxuICAgICAgICB0aGlzLnNwb29uLnNldFBvc2l0aW9uKG5leHQueCwgbmV4dC55KTtcclxuICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB0aGlzLnN0aXJCZWFkcyhkLngsIGQueSk7XHJcbiAgICAgICAgdGhpcy5mb2xsb3dTcG9vbldpdGhTY29vcGVkKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZWFkTGF5ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQmVhZExheWVycygpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzIHx8ICF0aGlzLnNwb29uKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bvb24ucGFyZW50ICE9PSB0aGlzLmxpc3RCZWFkcykge1xyXG4gICAgICAgICAgICBsZXQgd29ybGQgPSB0aGlzLnNwb29uLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24ucGFyZW50ID0gdGhpcy5saXN0QmVhZHM7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uc2V0UG9zaXRpb24odGhpcy5saXN0QmVhZHMuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGQpKTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vblJlc3RZID0gdGhpcy5zcG9vbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2Nvb3BXb3JsZCA9IHRoaXMuZ2V0U2Nvb3BXb3JsZFBvcygpO1xyXG4gICAgICAgIGxldCBzY29vcCA9IGNjLnYyKHNjb29wV29ybGQueCwgc2Nvb3BXb3JsZC55KTtcclxuICAgICAgICBsZXQgYmVoaW5kID0gW107XHJcbiAgICAgICAgbGV0IGZyb250ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJlYWQgPSB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGJlYWQgPT09IHRoaXMuc3Bvb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsZXQgcCA9IGJlYWQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBjYy52MihwLngsIHAueSkuc3ViKHNjb29wKS5tYWcoKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gYmVhZC51dWlkO1xyXG4gICAgICAgICAgICBsZXQgc2Nvb3BlZCA9IHRoaXMuYmVhZFNjb29wU3RhdGVbaWRdID09PSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29vcGVkQmVhZElkc1tpZF0pIHtcclxuICAgICAgICAgICAgICAgIHNjb29wZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFzY29vcGVkICYmIGRpc3QgPCAyNDApIHtcclxuICAgICAgICAgICAgICAgIHNjb29wZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNjb29wZWQgJiYgZGlzdCA+IDM4MCkge1xyXG4gICAgICAgICAgICAgICAgc2Nvb3BlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmVhZFNjb29wU3RhdGVbaWRdID0gc2Nvb3BlZDtcclxuICAgICAgICAgICAgaWYgKHNjb29wZWQpIHtcclxuICAgICAgICAgICAgICAgIGZyb250LnB1c2goYmVhZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiZWhpbmQucHVzaChiZWFkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaWR4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJlaGluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBiZWhpbmRbaV0uc2V0U2libGluZ0luZGV4KGlkeCsrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcG9vbi5zZXRTaWJsaW5nSW5kZXgoaWR4KyspO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJvbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZnJvbnRbaV0uc2V0U2libGluZ0luZGV4KGlkeCsrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2Nvb3BWaXN1YWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwb29uKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcG9vbi5nZXRDaGlsZEJ5TmFtZShcImltYWdlXzAzOFwiKSB8fCB0aGlzLnNwb29uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNjb29wTG9jYWxPZmZzZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Nvb3BPZmZzZXQpIHJldHVybiB0aGlzLnNjb29wT2Zmc2V0O1xyXG4gICAgICAgIHJldHVybiBjYy52MigtMTI1LCAtOCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2Nvb3BXb3JsZFBvcygpIHtcclxuICAgICAgICBsZXQgdmlzdWFsID0gdGhpcy5nZXRTY29vcFZpc3VhbCgpO1xyXG4gICAgICAgIGlmICghdmlzdWFsKSByZXR1cm4gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHZpc3VhbC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5nZXRTY29vcExvY2FsT2Zmc2V0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwb29uU2Nvb3BQb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdEJlYWRzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMuZ2V0U2Nvb3BXb3JsZFBvcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGlyQmVhZHModngsIHZ5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RCZWFkcykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzcG9vbkluQmVhZHMgPSB0aGlzLmxpc3RCZWFkcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLnNwb29uLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSkpO1xyXG4gICAgICAgIGlmICh2eSA+IDAuNykge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGNoQmVhZHNJblNjb29wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZ5IDwgLTEuMikge1xyXG4gICAgICAgICAgICB0aGlzLmRyb3BTY29vcGVkQmVhZHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHZ4KSA8IDAuMDggJiYgTWF0aC5hYnModnkpIDwgMC4wOCkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChiZWFkID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2Nvb3BlZEJlYWRJZHNbYmVhZC51dWlkXSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBkeCA9IGJlYWQueCAtIHNwb29uSW5CZWFkcy54O1xyXG4gICAgICAgICAgICBsZXQgZHkgPSBiZWFkLnkgLSBzcG9vbkluQmVhZHMueTtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdCA+IDIwMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCB0ID0gMSAtIGRpc3QgLyAyMDA7XHJcbiAgICAgICAgICAgIGJlYWQueCArPSB2eCAqICgwLjU1ICsgMC43ICogdCk7XHJcbiAgICAgICAgICAgIGJlYWQueSArPSB2eSAqIDAuMzUgKiB0ICsgdnggKiAwLjA4ICogdCAqIChkeCA+PSAwID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgYmVhZC54ID0gY2MubWlzYy5jbGFtcGYoYmVhZC54LCAtMjAwLCAyMDApO1xyXG4gICAgICAgICAgICBiZWFkLnkgPSBjYy5taXNjLmNsYW1wZihiZWFkLnksIC03NSwgNDUpO1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGJlYWQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN5bmNQb3NpdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIodnggKiAxNiAqIHQsIHZ5ICogMTAgKiB0KTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gdnggKiAwLjYgKiB0O1xyXG4gICAgICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2F0Y2hCZWFkc0luU2Nvb3AoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RCZWFkcyB8fCAhdGhpcy5zcG9vbikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzY29vcGVkQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5zY29vcGVkQmVhZElkcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29vcGVkQmVhZElkcy5oYXNPd25Qcm9wZXJ0eShrKSkgc2Nvb3BlZENvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzY29vcGVkQ291bnQgPj0gNSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzY29vcCA9IHRoaXMuZ2V0U3Bvb25TY29vcFBvcygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzY29vcGVkQ291bnQgPj0gNSkgYnJlYWs7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChiZWFkID09PSB0aGlzLnNwb29uIHx8IHRoaXMuc2Nvb3BlZEJlYWRJZHNbYmVhZC51dWlkXSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBkeCA9IGJlYWQueCAtIHNjb29wLng7XHJcbiAgICAgICAgICAgIGxldCBkeSA9IGJlYWQueSAtIHNjb29wLnk7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPiA3MCB8fCBNYXRoLmFicyhkeSkgPiA0MikgY29udGludWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nvb3BlZEJlYWRJZHNbYmVhZC51dWlkXSA9IHtcclxuICAgICAgICAgICAgICAgIG94OiBjYy5taXNjLmNsYW1wZihkeCAqIDAuMjgsIC0yNiwgMjYpLFxyXG4gICAgICAgICAgICAgICAgb3k6IGNjLm1pc2MuY2xhbXBmKGR5ICogMC4yMiwgLTE2LCAxNilcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2Nvb3BlZENvdW50Kys7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gYmVhZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvbGxvd1Nwb29uV2l0aFNjb29wZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RCZWFkcyB8fCAhdGhpcy5zcG9vbikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzY29vcCA9IHRoaXMuZ2V0U3Bvb25TY29vcFBvcygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGxldCBzdCA9IHRoaXMuc2Nvb3BlZEJlYWRJZHNbYmVhZC51dWlkXTtcclxuICAgICAgICAgICAgaWYgKCFzdCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGJlYWQueCA9IGNjLm1pc2MubGVycChiZWFkLngsIHNjb29wLnggKyBzdC5veCwgMC41KTtcclxuICAgICAgICAgICAgYmVhZC55ID0gY2MubWlzYy5sZXJwKGJlYWQueSwgc2Nvb3AueSArIHN0Lm95LCAwLjU1KTtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBiZWFkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJvcFNjb29wZWRCZWFkcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzKSByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJlYWQgPSB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNjb29wZWRCZWFkSWRzW2JlYWQudXVpZF0pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGJlYWQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmdyYXZpdHlTY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb29wZWRCZWFkSWRzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbkJlYWRzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoYmVhZCA9PT0gdGhpcy5zcG9vbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb29wZWRCZWFkSWRzW2JlYWQudXVpZF0pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGJlYWQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGxldCBueCA9IGJlYWQueCAvIDIzMDtcclxuICAgICAgICAgICAgbGV0IG55ID0gKGJlYWQueSArIDEwKSAvIDEwMDtcclxuICAgICAgICAgICAgbGV0IGxlbjIgPSBueCAqIG54ICsgbnkgKiBueTtcclxuICAgICAgICAgICAgaWYgKGxlbjIgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuID0gTWF0aC5zcXJ0KGxlbjIpO1xyXG4gICAgICAgICAgICAgICAgYmVhZC54ID0gbnggLyBsZW4gKiAyMjg7XHJcbiAgICAgICAgICAgICAgICBiZWFkLnkgPSBueSAvIGxlbiAqIDk4IC0gMTA7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdiA9IGJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHYueCAqIDAuNSwgTWF0aC5taW4odi55LCAyMCkgKiAwLjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BlZWQgPSB2Lm1hZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwZWVkID4gMTIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IHYubXVsKDEyMCAvIHNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGZsYXR0ZW5Ob2RlU2NhbGUocGFyZW50OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHN4ID0gcGFyZW50LnNjYWxlWDtcclxuICAgICAgICBsZXQgc3kgPSBwYXJlbnQuc2NhbGVZO1xyXG4gICAgICAgIGlmIChzeCA9PT0gMSAmJiBzeSA9PT0gMSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzbmFwc2hvdCA9IHBhcmVudC5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBub2RlOiBjaGlsZCxcclxuICAgICAgICAgICAgICAgIHdvcmxkUG9zOiBjaGlsZC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVYOiBjaGlsZC5zY2FsZVggKiBzeCxcclxuICAgICAgICAgICAgICAgIHNjYWxlWTogY2hpbGQuc2NhbGVZICogc3ksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFyZW50LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIHNuYXBzaG90LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLnNldFNjYWxlKGl0ZW0uc2NhbGVYLCBpdGVtLnNjYWxlWSk7XHJcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5zZXRQb3NpdGlvbihwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaXRlbS53b3JsZFBvcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpc09wZW5Eb29yID0gZmFsc2VcclxuICAgIGJ0bl9vcGVuRG9vcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW5Eb29yID09IHRydWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzT3BlbkRvb3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZG9vci5zY2FsZSA9IDJcclxuICAgICAgICB0aGlzLmN1YS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB0aGlzLmRvb3IuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1YS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB9LCAwLjMpXHJcbiAgICB9XHJcbiAgICBpc0NsaWNrQm94ID0gMFxyXG4gICAgY2xpY2tJdGVtKGJveFZhbHVlLCB0YWcpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrQm94ID49IDUpIHJldHVybjtcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKDAsIDU2KSwgY2MudjMoMTA5LCA0NyksIGNjLnYzKC0xMDUsIDQwKSwgY2MudjMoLTUyLCAyMiksIGNjLnYzKDYxLCAyMildXHJcbiAgICAgICAgdGhpcy5pc0NsaWNrQm94KytcclxuICAgICAgICBsZXQgYm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJlQm94W3RhZ10pXHJcbiAgICAgICAgYm94LnBhcmVudCA9IHRoaXMubGlzdEl0ZW0yO1xyXG4gICAgICAgIGJveC5wb3NpdGlvbiA9IGJveFZhbHVlLnBvc2l0aW9uO1xyXG4gICAgICAgIGNjLnR3ZWVuKGJveCkudG8oMC41LCB7IHBvc2l0aW9uOiBhcnJQb3NbdGhpcy5pc0NsaWNrQm94IC0gMV0gfSkuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrQm94ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Eb25lLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja0JveCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX2RvbmUoKVxyXG5cclxuICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpc0RvbmUgPSBmYWxzZVxyXG4gICAgY291bnRJdGVtID0gMFxyXG4gICAgYnRuX2RvbmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb25lID09IHRydWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRG9uZSA9IHRydWVcclxuICAgICAgICB0aGlzLmJ0bkRvbmUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFpbjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKDAsIDM2KSwgY2MudjMoLTE1OCwgMTIzKSwgY2MudjMoMTg3LCAxMjgpLCBjYy52MygyMTEsIC01OSksIGNjLnYzKC0yMDMsIC00MCldXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMFxyXG4gICAgICAgIHRoaXMuY291bnRJdGVtID0gdGhpcy5saXN0SXRlbTIuY2hpbGRyZW5Db3VudFxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxpc3RJdGVtMi5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0SXRlbTIuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXMubGlzdEJveFxyXG4gICAgICAgICAgICBjaGlsZC5zY2FsZSA9IDIuMztcclxuICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBhcnJQb3NbY291bnRdXHJcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluMikudG8oMC4zNSwgeyBzY2FsZTogMC41IH0pLnN0YXJ0KClcclxuICAgIH1cclxuICAgIGlzQ291bnROb3RpID0gMFxyXG4gICAgbW92ZVRvVm9uZyhib3gpIHtcclxuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmlzQ291bnROb3RpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmxpc3RTb3VuZE5vdGlbY291bnRdLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGlzdE5vdGkuY2hpbGRyZW5bY291bnRdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyB9LCAwLjQpXHJcbiAgICAgICAgdGhpcy5pc0NvdW50Tm90aSsrXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoLTUwLCAxMDApO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIoMCwgLTMwKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGJveC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGJveC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMucm8uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2MudjIocG9zLngsIHBvcy55KVxyXG4gICAgICAgICAgICBib3gucGFyZW50ID0gdGhpcy5ybztcclxuICAgICAgICAgICAgYm94LnBvc2l0aW9uID0gcG9zO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oYm94KS5iZXppZXJUbygwLjcsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGJveCkuZGVsYXkoMC41KS50bygwLjMsIHsgc2NhbGU6IDEuNSB9KS50bygwLjA4LCB7IHNjYWxlOiAxLjQgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDAuNClcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50Tm90aSA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNob3cgZW5kXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkVuZEdhbWUodmFsdWUpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmQpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZExvc2UsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyBidG5fY2hvb3NlKGV2ZW50LCB2YWx1ZSkge1xyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUm90YXRlU3luYykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnNwb29uICYmICF0aGlzLmlzTWl4RG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTWl4VG91Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluQmVhZHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDFcclxuXHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDAuNiA6IDAuNFxyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGlmIChjYW52YXMuYWxpZ25XaXRoU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy5hbGlnbldpdGhTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgdGhpcy5saXN0Tm90aS5zY2FsZSA9IChsb2dpYykgPyAxLjEgOiAwLjdcclxuXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMjAwKVxyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjhcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtNDApXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC4zN1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTE0MClcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuMzZcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTQwKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==