
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
        _this.mixTouchLayer = null;
        _this._onDomStart = null;
        _this._onDomMove = null;
        _this._onDomEnd = null;
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
        this.unbindMixTouch();
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
        // this.reponsive(portrait);
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
        this.bindMixTouch();
        this.setupMixProgress();
    };
    NewClass.prototype.bindMixTouch = function () {
        var _this = this;
        this.unbindMixTouch();
        if (this.tut) {
            this.tut.pauseSystemEvents(true);
        }
        var canvas = cc.game.canvas;
        if (!canvas)
            return;
        this._onDomStart = function (e) {
            if (_this.isMixDone)
                return;
            if (e.type === "mousedown" && e.button !== 0)
                return;
            if (e.preventDefault)
                e.preventDefault();
            _this.onMixTouchStart(_this.wrapDomTouch(e));
        };
        this._onDomMove = function (e) {
            if (_this.isMixDone || !_this.isMixTouch)
                return;
            if (e.type === "mousemove" && !(e.buttons & 1))
                return;
            if (e.preventDefault)
                e.preventDefault();
            _this.onMixTouchMove(_this.wrapDomTouch(e));
        };
        this._onDomEnd = function (e) {
            if (!_this.isMixTouch)
                return;
            if (e.preventDefault)
                e.preventDefault();
            _this.onMixTouchEnd();
        };
        canvas.addEventListener("touchstart", this._onDomStart, true);
        canvas.addEventListener("touchmove", this._onDomMove, true);
        canvas.addEventListener("touchend", this._onDomEnd, true);
        canvas.addEventListener("touchcancel", this._onDomEnd, true);
        canvas.addEventListener("mousedown", this._onDomStart, true);
        canvas.addEventListener("mousemove", this._onDomMove, true);
        canvas.addEventListener("mouseup", this._onDomEnd, true);
        canvas.addEventListener("mouseleave", this._onDomEnd, true);
    };
    NewClass.prototype.wrapDomTouch = function (e) {
        var loc = this.getDomLocation(e);
        return {
            getLocation: function () { return cc.v2(loc.x, loc.y); }
        };
    };
    NewClass.prototype.getDomLocation = function (e) {
        var t = (e.changedTouches && e.changedTouches[0]) || (e.touches && e.touches[0]) || e;
        var box = cc.game.canvas.getBoundingClientRect();
        var out = cc.v2();
        cc.view.convertToLocationInView(t.clientX, t.clientY, box, out);
        return out;
    };
    NewClass.prototype.unbindMixTouch = function () {
        var canvas = cc.game.canvas;
        if (canvas && this._onDomStart) {
            canvas.removeEventListener("touchstart", this._onDomStart, true);
            canvas.removeEventListener("touchmove", this._onDomMove, true);
            canvas.removeEventListener("touchend", this._onDomEnd, true);
            canvas.removeEventListener("touchcancel", this._onDomEnd, true);
            canvas.removeEventListener("mousedown", this._onDomStart, true);
            canvas.removeEventListener("mousemove", this._onDomMove, true);
            canvas.removeEventListener("mouseup", this._onDomEnd, true);
            canvas.removeEventListener("mouseleave", this._onDomEnd, true);
        }
        this._onDomStart = null;
        this._onDomMove = null;
        this._onDomEnd = null;
        if (this.tut && this.tut.isValid) {
            this.tut.resumeSystemEvents(true);
        }
        var layer = this.mixTouchLayer || (this.node && this.node.getChildByName("_mixTouchLayer"));
        if (layer && layer.isValid) {
            layer.off(cc.Node.EventType.TOUCH_START, this.onMixTouchStart, this);
            layer.off(cc.Node.EventType.TOUCH_MOVE, this.onMixTouchMove, this);
            layer.off(cc.Node.EventType.TOUCH_END, this.onMixTouchEnd, this);
            layer.off(cc.Node.EventType.TOUCH_CANCEL, this.onMixTouchEnd, this);
            layer.active = false;
        }
        this.mixTouchLayer = null;
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
        this.unbindMixTouch();
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
            var midLocal = cc.v2(-200, 150);
            var endLocal = cc.v2(0, -30);
            var flyParent = _this.node;
            var startWorld = box.parent.convertToWorldSpaceAR(box.position);
            var midWorld = _this.ro.convertToWorldSpaceAR(cc.v3(midLocal.x, midLocal.y));
            var endWorld = _this.ro.convertToWorldSpaceAR(cc.v3(endLocal.x, endLocal.y));
            box.parent = flyParent;
            box.zIndex = 999;
            box.setSiblingIndex(flyParent.childrenCount - 1);
            var startPos = flyParent.convertToNodeSpaceAR(startWorld);
            var midPos = flyParent.convertToNodeSpaceAR(midWorld);
            var endPos = flyParent.convertToNodeSpaceAR(endWorld);
            box.position = startPos;
            cc.tween(box).bezierTo(0.7, cc.v2(startPos.x, startPos.y), cc.v2(midPos.x, midPos.y), cc.v2(endPos.x, endPos.y)).call(function () {
                box.parent = _this.ro;
                box.position = cc.v3(endLocal.x, endLocal.y);
            }).start();
            cc.tween(box).delay(0.4).to(0.3, { scale: 1.3 }).to(0.08, { scale: 1.2 }).start();
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
        this.reponsive(this.isPortrait());
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1;
        this.logo.scale = (logic) ? 0.6 : 0.4;
        // canvas.fitHeight = (logic) ? false : true
        // canvas.fitWidth = (logic) ? true : false
        if (canvas.alignWithScreen) {
            canvas.alignWithScreen();
        }
        this.camera.node.position = cc.v3(0, 0);
        this.listNoti.scale = (logic) ? 0.7 : 0.7;
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            this.camera.node.position = cc.v3(0, -200);
            this.camera.zoomRatio = 0.35;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 2.0; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (aspectRatio >= IPHONE_X_ASPECT_RATIO) {
                // console.log("check iphonex")
                this.camera.zoomRatio = 0.3;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.35;
                this.camera.node.position = cc.v3(0, 0);
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
            var IPHONE_X_ASPECT_RATIO = 2.0; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (aspectRatio >= IPHONE_X_ASPECT_RATIO) {
                this.camera.zoomRatio = 0.3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpb0NDO1FBL25DRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLG1CQUFhLEdBQ1EsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUVuQyxTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FB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QUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQTFHSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaW9DNUI7SUFBRCxlQUFDO0NBam9DRCxBQWlvQ0MsQ0Fqb0NxQyxFQUFFLENBQUMsU0FBUyxHQWlvQ2pEO2tCQWpvQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuZ29sZCA9IDBcclxuZ2xvYmFsVGhpcy5zY0dhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoaWVuOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERvbnV0SnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFhhbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZE1peERvbmU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93U3RhcjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lXHJcbiAgICAgICAgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ3V0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5BdWRpb0NsaXBdKVxyXG4gICAgbGlzdFNvdW5kTm90aTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDdXM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRXcm9uZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBmeENvbG9yOiBjYy5QcmVmYWIgPSBudWxsXHJcblxyXG4gICAgLy9uZXdcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5EYXU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjdWE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdFByZUJveDogY2MuUHJlZmFiW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEl0ZW0yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuRG9uZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1haW4yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEJveDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcm86IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3ROb3RpOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3Bvb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXHJcbiAgICBzY29vcE9mZnNldDogY2MuVmVjMiA9IGNjLnYyKC0xMjUsIC04KTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGlhOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2hhZG93OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0U3RhcjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2hvd0l0ZW06IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdpbzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2hheTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgLy8gY2FtZXJhOmNjLkNhbWVyYT1udWxsXHJcblxyXG4gICAgbWF4S2hheSA9IDdcclxuXHJcbiAgICBhcnJEb251dHBvcyA9IFtdXHJcbiAgICBhcnJEb251dCA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXVxyXG4gICAgYXJyS2hheSA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXVxyXG4gICAgYXJyS2hheVBvcyA9IFtdXHJcbiAgICBpc1R1dENoaWxpID0gZmFsc2VcclxuICAgIGlzVHV0TWVhdCA9IGZhbHNlXHJcbiAgICBpc1R1dFZlZ2V0VGFibGUgPSBmYWxzZVxyXG4gICAgaXNUdXRDbGlja01lYXQgPSBmYWxzZVxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIC8vIHNvdW5kQmc6Y2MuQXVkaW9DbGlwPW51bGw7XHJcblxyXG4gICAgaXNUYXJnZXRQb3AgPSBudWxsO1xyXG4gICAgaXNTdGVwID0gMFxyXG4gICAgaXNUYXJnZXRDdXMgPSBudWxsO1xyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIGNvdW50Q3VzID0gMFxyXG4gICAgaWRTb3VuZCA9IG51bGxcclxuICAgIGxhc3RQb3J0cmFpdCA9IG51bGxcclxuICAgIGlzTWl4VG91Y2ggPSBmYWxzZVxyXG4gICAgc3Bvb25NaW5YID0gLTgwXHJcbiAgICBzcG9vbk1heFggPSA4MFxyXG4gICAgc3Bvb25NaW5ZID0gLTQwXHJcbiAgICBzcG9vbk1heFkgPSAtNVxyXG4gICAgc3Bvb25SZXN0WSA9IC0yM1xyXG4gICAgc3Bvb25SZXN0QW5nbGUgPSAwXHJcbiAgICBsaXN0QmVhZHM6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBiZWFkU2Nvb3BTdGF0ZSA9IHt9XHJcbiAgICBzY29vcGVkQmVhZElkcyA9IHt9XHJcbiAgICBpc1JvdGF0ZVN5bmMgPSBmYWxzZVxyXG4gICAgb3JpZW50TG9ja1VudGlsID0gMFxyXG4gICAgcGh5c1NuYXBzaG90ID0gbnVsbFxyXG4gICAgc3Bvb25TbmFwc2hvdCA9IG51bGxcclxuICAgIHByb2dyZXNzTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIHByb2dyZXNzRmlsbDogY2MuTm9kZSA9IG51bGxcclxuICAgIHByb2dyZXNzRmlsbFdpZHRoID0gMFxyXG4gICAgbWl4VGltZSA9IDBcclxuICAgIG1peE5lZWRUaW1lID0gMlxyXG4gICAgaXNNaXhEb25lID0gZmFsc2VcclxuICAgIGxhc3RNaXhNb3ZlVGltZSA9IDBcclxuICAgIGxhc3RUb3VjaFNjcmVlbiA9IG51bGxcclxuICAgIG1peFRvdWNoTGF5ZXI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBfb25Eb21TdGFydCA9IG51bGxcclxuICAgIF9vbkRvbU1vdmUgPSBudWxsXHJcbiAgICBfb25Eb21FbmQgPSBudWxsXHJcbiAgICBpZFNvdW5kWGFvID0gbnVsbFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5kaXJlY3Rvci5vbihjYy5EaXJlY3Rvci5FVkVOVF9CRUZPUkVfVVBEQVRFLCB0aGlzLmJlZm9yZVVwZGF0ZU9yaWVudCwgdGhpcyk7XHJcbiAgICAgICAgY2Mudmlldy5vbignY2FudmFzLXJlc2l6ZScsIHRoaXMub25DYW52YXNSZXNpemUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBoeXNpY3MoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjMpXHJcbiAgICAgICAgdGhpcy5sYXN0UG9ydHJhaXQgPSB0aGlzLmlzUG9ydHJhaXQoKTtcclxuICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0aGlzLmxhc3RQb3J0cmFpdCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNwb29uTWl4KCk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVBoeXNpY3NMb2NhbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3Iub2ZmKGNjLkRpcmVjdG9yLkVWRU5UX0JFRk9SRV9VUERBVEUsIHRoaXMuYmVmb3JlVXBkYXRlT3JpZW50LCB0aGlzKTtcclxuICAgICAgICBjYy52aWV3Lm9mZignY2FudmFzLXJlc2l6ZScsIHRoaXMub25DYW52YXNSZXNpemUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmZsdXNoUGh5c2ljc1Jlc3luYyk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZmluaXNoUGh5c2ljc1Jlc3luYyk7XHJcbiAgICAgICAgdGhpcy51bmJpbmRNaXhUb3VjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUG9ydHJhaXQoKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGxldCB3ID0gc2l6ZS53aWR0aDtcclxuICAgICAgICBsZXQgaCA9IHNpemUuaGVpZ2h0O1xyXG4gICAgICAgIGlmICgoIXcgfHwgIWgpICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAgICAgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHcgPCBoO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZVVwZGF0ZU9yaWVudCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSb3RhdGVTeW5jKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVQaHlzaWNzTG9jYWxzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwb3J0cmFpdCA9IHRoaXMuaXNQb3J0cmFpdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RQb3J0cmFpdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFBvcnRyYWl0ID0gcG9ydHJhaXQ7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvcnRyYWl0ICE9PSB0aGlzLmxhc3RQb3J0cmFpdCkge1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKG5vdyA8IHRoaXMub3JpZW50TG9ja1VudGlsKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFBvcnRyYWl0ID0gcG9ydHJhaXQ7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZW50TG9ja1VudGlsID0gbm93ICsgNDAwO1xyXG4gICAgICAgICAgICB0aGlzLm9uT3JpZW50YXRpb25DaGFuZ2UocG9ydHJhaXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNhbnZhc1Jlc2l6ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBvcnRyYWl0ID0gdGhpcy5pc1BvcnRyYWl0KCk7XHJcbiAgICAgICAgaWYgKHBvcnRyYWl0ID09PSB0aGlzLmxhc3RQb3J0cmFpdCAmJiAhdGhpcy5pc1JvdGF0ZVN5bmMpIHJldHVybjtcclxuICAgICAgICB0aGlzLmZyZWV6ZVBoeXNpY3NXb3JsZCgpO1xyXG4gICAgICAgIHRoaXMucXVldWVQaHlzaWNzUmVzeW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVQaHlzaWNzTG9jYWxzKCkge1xyXG4gICAgICAgIHRoaXMucGh5c1NuYXBzaG90ID0gdGhpcy5zbmFwc2hvdEJlYWRMb2NhbHMoKTtcclxuICAgICAgICBpZiAodGhpcy5zcG9vbiAmJiB0aGlzLnNwb29uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vblNuYXBzaG90ID0geyB4OiB0aGlzLnNwb29uLngsIHk6IHRoaXMuc3Bvb24ueSwgYW5nbGU6IHRoaXMuc3Bvb24uYW5nbGUgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc25hcHNob3RCZWFkTG9jYWxzKCkge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzKSByZXR1cm4gYXJyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChiZWFkID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgYXJyLnB1c2goeyBub2RlOiBiZWFkLCB4OiBiZWFkLngsIHk6IGJlYWQueSwgYW5nbGU6IGJlYWQuYW5nbGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZUJlYWRMb2NhbHMoYXJyKSB7XHJcbiAgICAgICAgaWYgKCFhcnIpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGFycltpXTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLm5vZGUgfHwgIWl0ZW0ubm9kZS5pc1ZhbGlkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKGl0ZW0ueCwgaXRlbS55KTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmFuZ2xlID0gaXRlbS5hbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bvb24gJiYgdGhpcy5zcG9vblNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uc2V0UG9zaXRpb24odGhpcy5zcG9vblNuYXBzaG90LngsIHRoaXMuc3Bvb25TbmFwc2hvdC55KTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3Bvb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZyZWV6ZVBoeXNpY3NXb3JsZCgpIHtcclxuICAgICAgICB0aGlzLmlzUm90YXRlU3luYyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBtID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBpZiAocG0gJiYgcG0uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICBwbS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHF1ZXVlUGh5c2ljc1Jlc3luYygpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5mbHVzaFBoeXNpY3NSZXN5bmMpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmZpbmlzaFBoeXNpY3NSZXN5bmMpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuZmx1c2hQaHlzaWNzUmVzeW5jLCAwLjA4KTtcclxuICAgIH1cclxuXHJcbiAgICBmbHVzaFBoeXNpY3NSZXN5bmMoKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICBpZiAoY2FudmFzICYmIGNhbnZhcy5hbGlnbldpdGhTY3JlZW4pIHtcclxuICAgICAgICAgICAgY2FudmFzLmFsaWduV2l0aFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3RvcmVCZWFkTG9jYWxzKHRoaXMucGh5c1NuYXBzaG90KTtcclxuICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5maW5pc2hQaHlzaWNzUmVzeW5jLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2hQaHlzaWNzUmVzeW5jKCkge1xyXG4gICAgICAgIHRoaXMucmVzdG9yZUJlYWRMb2NhbHModGhpcy5waHlzU25hcHNob3QpO1xyXG4gICAgICAgIHRoaXMucmVzeW5jUGh5c2ljc0Zyb21Ob2RlcygpO1xyXG4gICAgICAgIHRoaXMud2FrZUJlYWRQaHlzaWNzKCk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVBoeXNpY3NMb2NhbHMoKTtcclxuICAgICAgICB0aGlzLmlzUm90YXRlU3luYyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3luY1BoeXNpY3NGcm9tTm9kZXMoKSB7XHJcbiAgICAgICAgbGV0IGJvZGllcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gYm9kaWVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWJvZHkuZW5hYmxlZCB8fCBib2R5Lm5vZGUgPT09IHRoaXMuc3Bvb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBib2R5LnN5bmNQb3NpdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIGJvZHkuc3luY1JvdGF0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGJvZHkudHlwZSA9PT0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljKSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3JpZW50YXRpb25DaGFuZ2UocG9ydHJhaXQpIHtcclxuICAgICAgICB0aGlzLmZyZWV6ZVBoeXNpY3NXb3JsZCgpO1xyXG4gICAgICAgIC8vIHRoaXMucmVwb25zaXZlKHBvcnRyYWl0KTtcclxuICAgICAgICB0aGlzLnF1ZXVlUGh5c2ljc1Jlc3luYygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRQaHlzaWNzKCkge1xyXG4gICAgICAgIGxldCBwaHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGh5c2ljc01hbmFnZXIuZ3Jhdml0eSA9IGNjLnYyKDAsIC05ODApO1xyXG4gICAgfVxyXG5cclxuICAgIHdha2VCZWFkUGh5c2ljcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGdyb3VwcyA9IGNjLmdhbWUuZ3JvdXBMaXN0IHx8IFtdO1xyXG4gICAgICAgIGxldCBoYXNCZWFkR3JvdXAgPSBncm91cHMuaW5kZXhPZihcImJlYWRcIikgPj0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoYmVhZCA9PT0gdGhpcy5zcG9vbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChoYXNCZWFkR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGJlYWQuZ3JvdXAgPSBcImJlYWRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGJlYWQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmICghYm9keSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGJvZHkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgYm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMC43NTtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJEYW1waW5nID0gMC40O1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJEYW1waW5nID0gMC40NTtcclxuICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwU3Bvb25NaXgoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpYSAmJiB0aGlzLm1haW4yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhID0gdGhpcy5tYWluMi5nZXRDaGlsZEJ5TmFtZShcImRpYVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwb29uICYmIHRoaXMuZGlhKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHRoaXMuZGlhLmdldENoaWxkQnlOYW1lKFwibGlzdEl0ZW1cIik7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24gPSAoaXRlbXMgJiYgaXRlbXMuZ2V0Q2hpbGRCeU5hbWUoXCJ0aGlhXCIpKSB8fCB0aGlzLmRpYS5nZXRDaGlsZEJ5TmFtZShcInRoaWFcIikgfHwgdGhpcy5kaWEuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZV8wMjlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zcG9vbikgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IHRoaXMuc3Bvb24uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgYm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb2wgPSB0aGlzLnNwb29uLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGlmIChjb2wpIHtcclxuICAgICAgICAgICAgY29sLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGlzdEJlYWRzID0gdGhpcy5kaWEuZ2V0Q2hpbGRCeU5hbWUoXCJsaXN0SXRlbVwiKTtcclxuICAgICAgICBpZiAodGhpcy5saXN0QmVhZHMgJiYgdGhpcy5zcG9vbi5wYXJlbnQgIT09IHRoaXMubGlzdEJlYWRzKSB7XHJcbiAgICAgICAgICAgIGxldCB3b3JsZCA9IHRoaXMuc3Bvb24uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5wYXJlbnQgPSB0aGlzLmxpc3RCZWFkcztcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5zZXRQb3NpdGlvbih0aGlzLmxpc3RCZWFkcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNwb29uUmVzdFkgPSB0aGlzLnNwb29uLnk7XHJcbiAgICAgICAgdGhpcy5zcG9vblJlc3RBbmdsZSA9IHRoaXMuc3Bvb24uYW5nbGU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZWFkTGF5ZXJzKCk7XHJcbiAgICAgICAgdGhpcy53YWtlQmVhZFBoeXNpY3MoKTtcclxuICAgICAgICB0aGlzLmJpbmRNaXhUb3VjaCgpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBNaXhQcm9ncmVzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRNaXhUb3VjaCgpIHtcclxuICAgICAgICB0aGlzLnVuYmluZE1peFRvdWNoKCk7XHJcbiAgICAgICAgaWYgKHRoaXMudHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHV0LnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZ2FtZS5jYW52YXM7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9vbkRvbVN0YXJ0ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNaXhEb25lKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2Vkb3duXCIgJiYgZS5idXR0b24gIT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5vbk1peFRvdWNoU3RhcnQodGhpcy53cmFwRG9tVG91Y2goZSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fb25Eb21Nb3ZlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNaXhEb25lIHx8ICF0aGlzLmlzTWl4VG91Y2gpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZW1vdmVcIiAmJiAhKGUuYnV0dG9ucyAmIDEpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub25NaXhUb3VjaE1vdmUodGhpcy53cmFwRG9tVG91Y2goZSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fb25Eb21FbmQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNNaXhUb3VjaCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uTWl4VG91Y2hFbmQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLl9vbkRvbVN0YXJ0LCB0cnVlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLl9vbkRvbU1vdmUsIHRydWUpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5fb25Eb21FbmQsIHRydWUpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5fb25Eb21FbmQsIHRydWUpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX29uRG9tU3RhcnQsIHRydWUpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuX29uRG9tTW92ZSwgdHJ1ZSk7XHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuX29uRG9tRW5kLCB0cnVlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5fb25Eb21FbmQsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHdyYXBEb21Ub3VjaChlKSB7XHJcbiAgICAgICAgbGV0IGxvYyA9IHRoaXMuZ2V0RG9tTG9jYXRpb24oZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0TG9jYXRpb246ICgpID0+IGNjLnYyKGxvYy54LCBsb2MueSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldERvbUxvY2F0aW9uKGUpIHtcclxuICAgICAgICBsZXQgdCA9IChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF0pIHx8IChlLnRvdWNoZXMgJiYgZS50b3VjaGVzWzBdKSB8fCBlO1xyXG4gICAgICAgIGxldCBib3ggPSBjYy5nYW1lLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBsZXQgb3V0ID0gY2MudjIoKTtcclxuICAgICAgICBjYy52aWV3LmNvbnZlcnRUb0xvY2F0aW9uSW5WaWV3KHQuY2xpZW50WCwgdC5jbGllbnRZLCBib3gsIG91dCk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRNaXhUb3VjaCgpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZ2FtZS5jYW52YXM7XHJcbiAgICAgICAgaWYgKGNhbnZhcyAmJiB0aGlzLl9vbkRvbVN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLl9vbkRvbVN0YXJ0LCB0cnVlKTtcclxuICAgICAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5fb25Eb21Nb3ZlLCB0cnVlKTtcclxuICAgICAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLl9vbkRvbUVuZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5fb25Eb21FbmQsIHRydWUpO1xyXG4gICAgICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9vbkRvbVN0YXJ0LCB0cnVlKTtcclxuICAgICAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5fb25Eb21Nb3ZlLCB0cnVlKTtcclxuICAgICAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuX29uRG9tRW5kLCB0cnVlKTtcclxuICAgICAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMuX29uRG9tRW5kLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25Eb21TdGFydCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fb25Eb21Nb3ZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9vbkRvbUVuZCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMudHV0ICYmIHRoaXMudHV0LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy50dXQucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLm1peFRvdWNoTGF5ZXIgfHwgKHRoaXMubm9kZSAmJiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJfbWl4VG91Y2hMYXllclwiKSk7XHJcbiAgICAgICAgaWYgKGxheWVyICYmIGxheWVyLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgbGF5ZXIub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uTWl4VG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgICAgIGxheWVyLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uTWl4VG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICAgICAgbGF5ZXIub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbk1peFRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICAgICAgbGF5ZXIub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vbk1peFRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICAgICAgbGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWl4VG91Y2hMYXllciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBNaXhQcm9ncmVzcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlhKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc05vZGUgPSB0aGlzLmRpYS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNcIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2dyZXNzTm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NGaWxsID0gdGhpcy5wcm9ncmVzc05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZV8wMzVcIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2dyZXNzRmlsbCAmJiB0aGlzLnByb2dyZXNzTm9kZS5jaGlsZHJlbkNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRmlsbCA9IHRoaXMucHJvZ3Jlc3NOb2RlLmNoaWxkcmVuW3RoaXMucHJvZ3Jlc3NOb2RlLmNoaWxkcmVuQ291bnQgLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NGaWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NGaWxsV2lkdGggPSB0aGlzLnByb2dyZXNzRmlsbC53aWR0aDtcclxuICAgICAgICAgICAgbGV0IHNwID0gdGhpcy5wcm9ncmVzc0ZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzcCAmJiBzcC50eXBlID09PSBjYy5TcHJpdGUuVHlwZS5TSU1QTEUpIHtcclxuICAgICAgICAgICAgICAgIHNwLnR5cGUgPSBjYy5TcHJpdGUuVHlwZS5GSUxMRUQ7XHJcbiAgICAgICAgICAgICAgICBzcC5maWxsVHlwZSA9IGNjLlNwcml0ZS5GaWxsVHlwZS5IT1JJWk9OVEFMO1xyXG4gICAgICAgICAgICAgICAgc3AuZmlsbFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHNwLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRNaXhQcm9ncmVzcygwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNaXhQcm9ncmVzcyhyYXRpbykge1xyXG4gICAgICAgIHJhdGlvID0gY2MubWlzYy5jbGFtcGYocmF0aW8sIDAsIDEpO1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmVzc0ZpbGwgJiYgIXRoaXMucHJvZ3Jlc3NOb2RlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NOb2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBiYXIgPSB0aGlzLnByb2dyZXNzTm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgICAgICBpZiAoYmFyKSB7XHJcbiAgICAgICAgICAgICAgICBiYXIucHJvZ3Jlc3MgPSByYXRpbztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucHJvZ3Jlc3NGaWxsKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHNwID0gdGhpcy5wcm9ncmVzc0ZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgaWYgKHNwICYmIHNwLnR5cGUgPT09IGNjLlNwcml0ZS5UeXBlLkZJTExFRCkge1xyXG4gICAgICAgICAgICBzcC5maWxsUmFuZ2UgPSByYXRpbztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0ZpbGxXaWR0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0ZpbGwud2lkdGggPSB0aGlzLnByb2dyZXNzRmlsbFdpZHRoICogTWF0aC5tYXgocmF0aW8sIDAuMDAxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyZXNzRmlsbC5zY2FsZVggPSBNYXRoLm1heChyYXRpbywgMC4wMDEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWl4Q29tcGxldGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNaXhEb25lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01peERvbmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNNaXhUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RvcFhhb1NvdW5kKCk7XHJcbiAgICAgICAgdGhpcy51bmJpbmRNaXhUb3VjaCgpO1xyXG4gICAgICAgIHRoaXMuZHJvcFNjb29wZWRCZWFkcygpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4UHJvZ3Jlc3MoMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bvb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi55ID0gdGhpcy5zcG9vblJlc3RZO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlVGhpYSgpXHJcbiAgICB9XHJcbiAgICBpc1hhbyA9IGZhbHNlXHJcbiAgICBwbGF5WGFvU291bmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNvdW5kWGFvKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaWRTb3VuZFhhbyAhPSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNYYW8gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1hhbyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaWRTb3VuZFhhbyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFhhbywgdHJ1ZSwgMC41KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNYYW8gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFhhb1NvdW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkU291bmRYYW8gPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZFNvdW5kWGFvKTtcclxuICAgICAgICB0aGlzLmlkU291bmRYYW8gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgbW92ZVRoaWEoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zcG9vbikudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtNTksIDE5MCksIGFuZ2xlOiAtMTAgfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRNaXhEb25lLCBmYWxzZSwgMC41KTtcclxuICAgICAgICB0aGlzLmxpc3RTdGFyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc2hhZG93KS50bygwLjUsIHsgb3BhY2l0eTogMTgwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJyaW5nTGlzdFN0YXJBYm92ZVNoYWRvdygpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5naW8uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkQW5nbGUobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBhID0gMDtcclxuICAgICAgICBsZXQgbiA9IG5vZGU7XHJcbiAgICAgICAgd2hpbGUgKG4pIHtcclxuICAgICAgICAgICAgYSArPSBuLmFuZ2xlO1xyXG4gICAgICAgICAgICBuID0gbi5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkU2NhbGUobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBzeCA9IDE7XHJcbiAgICAgICAgbGV0IHN5ID0gMTtcclxuICAgICAgICBsZXQgbiA9IG5vZGU7XHJcbiAgICAgICAgd2hpbGUgKG4pIHtcclxuICAgICAgICAgICAgc3ggKj0gbi5zY2FsZVg7XHJcbiAgICAgICAgICAgIHN5ICo9IG4uc2NhbGVZO1xyXG4gICAgICAgICAgICBuID0gbi5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy52MihzeCwgc3kpO1xyXG4gICAgfVxyXG5cclxuICAgIGJyaW5nTGlzdFN0YXJBYm92ZVNoYWRvdygpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdFN0YXIgfHwgIXRoaXMuc2hhZG93KSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMuc2hhZG93LnBhcmVudDtcclxuICAgICAgICBsZXQgc3RhcldvcmxkcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0U3Rhci5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgc3Rhcldvcmxkcy5wdXNoKHRoaXMubGlzdFN0YXIuY2hpbGRyZW5baV0uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBib3dsV29ybGQgPSB0aGlzLmRpYVxyXG4gICAgICAgICAgICA/IHRoaXMuZGlhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAyNSkpXHJcbiAgICAgICAgICAgIDogdGhpcy5saXN0U3Rhci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3RTdGFyLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLmxpc3RTdGFyLmFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLmxpc3RTdGFyLnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIHRoaXMubGlzdFN0YXIuc2V0UG9zaXRpb24ocGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGJvd2xXb3JsZCkpO1xyXG4gICAgICAgIHRoaXMubGlzdFN0YXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaG93SXRlbSAmJiB0aGlzLnNob3dJdGVtLnBhcmVudCA9PT0gcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXIuekluZGV4ID0gdGhpcy5zaG93SXRlbS56SW5kZXggKyAxMDtcclxuICAgICAgICAgICAgdGhpcy5saXN0U3Rhci5zZXRTaWJsaW5nSW5kZXgodGhpcy5zaG93SXRlbS5nZXRTaWJsaW5nSW5kZXgoKSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0U3Rhci56SW5kZXggPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXIuc2V0U2libGluZ0luZGV4KHBhcmVudC5jaGlsZHJlbkNvdW50IC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFN0YXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFyID0gdGhpcy5saXN0U3Rhci5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgc3Rhci5zZXRQb3NpdGlvbih0aGlzLmxpc3RTdGFyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHN0YXJXb3JsZHNbaV0pKTtcclxuICAgICAgICAgICAgc3Rhci5hbmdsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZVN0YXJzVG9Cb3dsUm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVN0YXJzVG9Cb3dsUm93KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0U3RhcikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMubGlzdFN0YXIuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBsZXQgc3BhY2luZyA9IDIwMDtcclxuICAgICAgICBsZXQgc3RhcnRYID0gLSgoY291bnQgLSAxKSAqIHNwYWNpbmcpIC8gMjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHN0YXIgPSB0aGlzLmxpc3RTdGFyLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjYy50d2VlbihzdGFyKS5kZWxheSgwLjA0ICogaSkudG8oMC40NSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKHN0YXJ0WCArIGkgKiBzcGFjaW5nLCAtNjApLFxyXG4gICAgICAgICAgICAgICAgYW5nbGU6IDAsXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMS40XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3YWl0ID0gMC4wNCAqIE1hdGgubWF4KGNvdW50IC0gMSwgMCkgKyAxLjQ7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZseVN0YXJzVG9CYXNrZXQoKTtcclxuICAgICAgICB9LCB3YWl0KTtcclxuICAgIH1cclxuXHJcbiAgICBmbHlTdGFyc1RvQmFza2V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNoYWRvdykge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNoYWRvdykudG8oMC40LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0l0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RTdGFyIHx8ICF0aGlzLmdpbykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBlbmRXb3JsZCA9IHRoaXMuZ2lvLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMubGlzdFN0YXIuY29udmVydFRvTm9kZVNwYWNlQVIoZW5kV29ybGQpO1xyXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMubGlzdFN0YXIuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBsZXQgYXJyaXZlZCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFyID0gdGhpcy5saXN0U3Rhci5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gY2MudjIoc3Rhci54LCBzdGFyLnkpO1xyXG4gICAgICAgICAgICBsZXQgYzEgPSBjYy52MihzdGFydC54ICsgKGVuZC54IC0gc3RhcnQueCkgKiAwLjM1LCBzdGFydC55ICsgMTQwKTtcclxuICAgICAgICAgICAgbGV0IGMyID0gY2MudjIoZW5kLnggLSA3MCwgZW5kLnkgKyA5MCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHN0YXIpXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4xMiAqIGkpXHJcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5iZXppZXJUbygwLjYsIGMxLCBjMiwgY2MudjIoZW5kLngsIGVuZC55KSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjYsIHsgc2NhbGU6IDEsIGFuZ2xlOiAxNSB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3b3JsZCA9IHN0YXIuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyLnBhcmVudCA9IHRoaXMuZ2lvO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXIuc2V0UG9zaXRpb24odGhpcy5naW8uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJpdmVkKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycml2ZWQgPj0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93S2hheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0toYXkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtoYXkgJiYgdGhpcy5tYWluMikge1xyXG4gICAgICAgICAgICB0aGlzLmtoYXkgPSB0aGlzLm1haW4yLmdldENoaWxkQnlOYW1lKFwia2hheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmtoYXkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmtoYXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpYS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgZ2V0VG91Y2hJblNwb29uUGFyZW50KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Bvb24ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1peFRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01peERvbmUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTWl4VG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFzdE1peE1vdmVUaW1lID0gMDtcclxuICAgICAgICBpZiAodGhpcy50dXQpIHtcclxuICAgICAgICAgICAgdGhpcy50dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLm1haW4yID8gdGhpcy5tYWluMi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIDogbnVsbDtcclxuICAgICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICAgICAgdGl0bGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMubGFzdFRvdWNoU2NyZWVuID0gY2MudjIobG9jLngsIGxvYy55KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJlYWRMYXllcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1peFRvdWNoTW92ZShldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWl4RG9uZSB8fCAhdGhpcy5pc01peFRvdWNoKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wbGF5WGFvU291bmQoKTtcclxuICAgICAgICB0aGlzLm1vdmVTcG9vbkJ5RGVsdGEoZXZlbnQpO1xyXG4gICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpIC8gMTAwMDtcclxuICAgICAgICBpZiAodGhpcy5sYXN0TWl4TW92ZVRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBkdCA9IG5vdyAtIHRoaXMubGFzdE1peE1vdmVUaW1lO1xyXG4gICAgICAgICAgICBpZiAoZHQgPiAwICYmIGR0IDwgMC4xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1peFRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0TWl4TW92ZVRpbWUgPSBub3c7XHJcbiAgICAgICAgdGhpcy5zZXRNaXhQcm9ncmVzcyh0aGlzLm1peFRpbWUgLyB0aGlzLm1peE5lZWRUaW1lKTtcclxuICAgICAgICBpZiAodGhpcy5taXhUaW1lID49IHRoaXMubWl4TmVlZFRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk1peENvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTWl4VG91Y2hFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5pc01peFRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYXN0TWl4TW92ZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdFRvdWNoU2NyZWVuID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN0b3BYYW9Tb3VuZCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5zcG9vbikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3Bvb24uYW5nbGUgPSB0aGlzLnNwb29uUmVzdEFuZ2xlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmVhZExheWVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2FsRGVsdGEoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgbG9jID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgY3VyU2NyZWVuID0gY2MudjIobG9jLngsIGxvYy55KTtcclxuICAgICAgICBsZXQgcHJldlNjcmVlbiA9IHRoaXMubGFzdFRvdWNoU2NyZWVuID8gdGhpcy5sYXN0VG91Y2hTY3JlZW4gOiBjdXJTY3JlZW47XHJcbiAgICAgICAgdGhpcy5sYXN0VG91Y2hTY3JlZW4gPSBjdXJTY3JlZW47XHJcbiAgICAgICAgbGV0IGN1cldvcmxkID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KGN1clNjcmVlbik7XHJcbiAgICAgICAgbGV0IHByZXZXb3JsZCA9IHRoaXMuY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChwcmV2U2NyZWVuKTtcclxuICAgICAgICBsZXQgY3VyID0gdGhpcy5zcG9vbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoY3VyV29ybGQpO1xyXG4gICAgICAgIGxldCBwcmV2TG9jYWwgPSB0aGlzLnNwb29uLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwcmV2V29ybGQpO1xyXG4gICAgICAgIHJldHVybiBjYy52MihjdXIueCAtIHByZXZMb2NhbC54LCBjdXIueSAtIHByZXZMb2NhbC55KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFtcFNwb29uSW5Cb3dsKHgsIHkpIHtcclxuICAgICAgICBsZXQgY3ggPSAwO1xyXG4gICAgICAgIGxldCBjeSA9IHRoaXMuc3Bvb25SZXN0WTtcclxuICAgICAgICBsZXQgcnggPSAxMjA7XHJcbiAgICAgICAgbGV0IHJ5ID0gNjI7XHJcbiAgICAgICAgbGV0IG54ID0gKHggLSBjeCkgLyByeDtcclxuICAgICAgICBsZXQgbnkgPSAoeSAtIGN5KSAvIHJ5O1xyXG4gICAgICAgIGxldCBsZW4yID0gbnggKiBueCArIG55ICogbnk7XHJcbiAgICAgICAgaWYgKGxlbjIgPiAxKSB7XHJcbiAgICAgICAgICAgIGxldCBsZW4gPSBNYXRoLnNxcnQobGVuMik7XHJcbiAgICAgICAgICAgIHggPSBjeCArIG54IC8gbGVuICogcng7XHJcbiAgICAgICAgICAgIHkgPSBjeSArIG55IC8gbGVuICogcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlU3Bvb25CeURlbHRhKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwb29uKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldExvY2FsRGVsdGEoZXZlbnQpO1xyXG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5jbGFtcFNwb29uSW5Cb3dsKHRoaXMuc3Bvb24ueCArIGQueCwgdGhpcy5zcG9vbi55ICsgZC55KTtcclxuICAgICAgICB0aGlzLnNwb29uLnNldFBvc2l0aW9uKG5leHQueCwgbmV4dC55KTtcclxuICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB0aGlzLnN0aXJCZWFkcyhkLngsIGQueSk7XHJcbiAgICAgICAgdGhpcy5mb2xsb3dTcG9vbldpdGhTY29vcGVkKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZWFkTGF5ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQmVhZExheWVycygpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzIHx8ICF0aGlzLnNwb29uKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bvb24ucGFyZW50ICE9PSB0aGlzLmxpc3RCZWFkcykge1xyXG4gICAgICAgICAgICBsZXQgd29ybGQgPSB0aGlzLnNwb29uLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24ucGFyZW50ID0gdGhpcy5saXN0QmVhZHM7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uc2V0UG9zaXRpb24odGhpcy5saXN0QmVhZHMuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGQpKTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vblJlc3RZID0gdGhpcy5zcG9vbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2Nvb3BXb3JsZCA9IHRoaXMuZ2V0U2Nvb3BXb3JsZFBvcygpO1xyXG4gICAgICAgIGxldCBzY29vcCA9IGNjLnYyKHNjb29wV29ybGQueCwgc2Nvb3BXb3JsZC55KTtcclxuICAgICAgICBsZXQgYmVoaW5kID0gW107XHJcbiAgICAgICAgbGV0IGZyb250ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJlYWQgPSB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGJlYWQgPT09IHRoaXMuc3Bvb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsZXQgcCA9IGJlYWQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBjYy52MihwLngsIHAueSkuc3ViKHNjb29wKS5tYWcoKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gYmVhZC51dWlkO1xyXG4gICAgICAgICAgICBsZXQgc2Nvb3BlZCA9IHRoaXMuYmVhZFNjb29wU3RhdGVbaWRdID09PSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29vcGVkQmVhZElkc1tpZF0pIHtcclxuICAgICAgICAgICAgICAgIHNjb29wZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFzY29vcGVkICYmIGRpc3QgPCAyNDApIHtcclxuICAgICAgICAgICAgICAgIHNjb29wZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNjb29wZWQgJiYgZGlzdCA+IDM4MCkge1xyXG4gICAgICAgICAgICAgICAgc2Nvb3BlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmVhZFNjb29wU3RhdGVbaWRdID0gc2Nvb3BlZDtcclxuICAgICAgICAgICAgaWYgKHNjb29wZWQpIHtcclxuICAgICAgICAgICAgICAgIGZyb250LnB1c2goYmVhZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiZWhpbmQucHVzaChiZWFkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaWR4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJlaGluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBiZWhpbmRbaV0uc2V0U2libGluZ0luZGV4KGlkeCsrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcG9vbi5zZXRTaWJsaW5nSW5kZXgoaWR4KyspO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJvbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZnJvbnRbaV0uc2V0U2libGluZ0luZGV4KGlkeCsrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2Nvb3BWaXN1YWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwb29uKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcG9vbi5nZXRDaGlsZEJ5TmFtZShcImltYWdlXzAzOFwiKSB8fCB0aGlzLnNwb29uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNjb29wTG9jYWxPZmZzZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Nvb3BPZmZzZXQpIHJldHVybiB0aGlzLnNjb29wT2Zmc2V0O1xyXG4gICAgICAgIHJldHVybiBjYy52MigtMTI1LCAtOCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2Nvb3BXb3JsZFBvcygpIHtcclxuICAgICAgICBsZXQgdmlzdWFsID0gdGhpcy5nZXRTY29vcFZpc3VhbCgpO1xyXG4gICAgICAgIGlmICghdmlzdWFsKSByZXR1cm4gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHZpc3VhbC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5nZXRTY29vcExvY2FsT2Zmc2V0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwb29uU2Nvb3BQb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdEJlYWRzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMuZ2V0U2Nvb3BXb3JsZFBvcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGlyQmVhZHModngsIHZ5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RCZWFkcykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzcG9vbkluQmVhZHMgPSB0aGlzLmdldFNwb29uU2Nvb3BQb3MoKTtcclxuICAgICAgICBsZXQgbGlmdGluZyA9IHZ5ID4gMy4yICYmIHZ5ID4gTWF0aC5hYnModngpICogMC45O1xyXG4gICAgICAgIGlmIChsaWZ0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0Y2hCZWFkc0luU2Nvb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodnkgPCAtMi44KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJvcFNjb29wZWRCZWFkcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnModngpIDwgMC4wOCAmJiBNYXRoLmFicyh2eSkgPCAwLjA4KSByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJlYWQgPSB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGJlYWQgPT09IHRoaXMuc3Bvb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29vcGVkQmVhZElkc1tiZWFkLnV1aWRdKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGR4ID0gYmVhZC54IC0gc3Bvb25JbkJlYWRzLng7XHJcbiAgICAgICAgICAgIGxldCBkeSA9IGJlYWQueSAtIHNwb29uSW5CZWFkcy55O1xyXG4gICAgICAgICAgICBsZXQgZGlzdCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0ID4gMTUwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IHQgPSAxIC0gZGlzdCAvIDE1MDtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBiZWFkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBib2R5LmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHYueCAqIDAuNyArIHZ4ICogMzIgKiB0LCB2LnkgKiAwLjc1ICsgdnkgKiAyMCAqIHQpO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSBib2R5LmFuZ3VsYXJWZWxvY2l0eSAqIDAuNyArIHZ4ICogMS40ICogdDtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhdGNoQmVhZHNJblNjb29wKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMgfHwgIXRoaXMuc3Bvb24pIHJldHVybjtcclxuICAgICAgICBsZXQgc2Nvb3BlZENvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMuc2Nvb3BlZEJlYWRJZHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2Nvb3BlZEJlYWRJZHMuaGFzT3duUHJvcGVydHkoaykpIHNjb29wZWRDb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2Nvb3BlZENvdW50ID49IDUpIHJldHVybjtcclxuICAgICAgICBsZXQgc2Nvb3AgPSB0aGlzLmdldFNwb29uU2Nvb3BQb3MoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc2Nvb3BlZENvdW50ID49IDUpIGJyZWFrO1xyXG4gICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoYmVhZCA9PT0gdGhpcy5zcG9vbiB8fCB0aGlzLnNjb29wZWRCZWFkSWRzW2JlYWQudXVpZF0pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsZXQgZHggPSBiZWFkLnggLSBzY29vcC54O1xyXG4gICAgICAgICAgICBsZXQgZHkgPSBiZWFkLnkgLSBzY29vcC55O1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID4gNzAgfHwgTWF0aC5hYnMoZHkpID4gNDIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjb29wZWRCZWFkSWRzW2JlYWQudXVpZF0gPSB7XHJcbiAgICAgICAgICAgICAgICBveDogY2MubWlzYy5jbGFtcGYoZHggKiAwLjI4LCAtMjYsIDI2KSxcclxuICAgICAgICAgICAgICAgIG95OiBjYy5taXNjLmNsYW1wZihkeSAqIDAuMjIsIC0xNiwgMTYpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNjb29wZWRDb3VudCsrO1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGJlYWQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb2xsb3dTcG9vbldpdGhTY29vcGVkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMgfHwgIXRoaXMuc3Bvb24pIHJldHVybjtcclxuICAgICAgICBsZXQgc2Nvb3AgPSB0aGlzLmdldFNwb29uU2Nvb3BQb3MoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBsZXQgc3QgPSB0aGlzLnNjb29wZWRCZWFkSWRzW2JlYWQudXVpZF07XHJcbiAgICAgICAgICAgIGlmICghc3QpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBiZWFkLnggPSBjYy5taXNjLmxlcnAoYmVhZC54LCBzY29vcC54ICsgc3Qub3gsIDAuNSk7XHJcbiAgICAgICAgICAgIGJlYWQueSA9IGNjLm1pc2MubGVycChiZWFkLnksIHNjb29wLnkgKyBzdC5veSwgMC41NSk7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gYmVhZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyb3BTY29vcGVkQmVhZHMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RCZWFkcykgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zY29vcGVkQmVhZElkc1tiZWFkLnV1aWRdKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBiZWFkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwLjc1O1xyXG4gICAgICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29vcGVkQmVhZElkcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5CZWFkcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdEJlYWRzKSByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJlYWQgPSB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGJlYWQgPT09IHRoaXMuc3Bvb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29vcGVkQmVhZElkc1tiZWFkLnV1aWRdKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBiZWFkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jbGFtcEJlYWRJbkJvd2woYmVhZCkgJiYgYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBib2R5LmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHYueCAqIDAuNSwgTWF0aC5taW4odi55LCAyMCkgKiAwLjQpO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IHYubWFnKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlZWQgPiA5MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSB2Lm11bCg5MCAvIHNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFtcEJlYWRJbkJvd2woYmVhZCkge1xyXG4gICAgICAgIGxldCBjeCA9IDA7XHJcbiAgICAgICAgbGV0IGN5ID0gMzI7XHJcbiAgICAgICAgbGV0IHJ4ID0gMTkwO1xyXG4gICAgICAgIGxldCByeSA9IDk4O1xyXG4gICAgICAgIGxldCBueCA9IChiZWFkLnggLSBjeCkgLyByeDtcclxuICAgICAgICBsZXQgbnkgPSAoYmVhZC55IC0gY3kpIC8gcnk7XHJcbiAgICAgICAgbGV0IGxlbjIgPSBueCAqIG54ICsgbnkgKiBueTtcclxuICAgICAgICBpZiAobGVuMiA8PSAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IGxlbiA9IE1hdGguc3FydChsZW4yKTtcclxuICAgICAgICBiZWFkLnggPSBjeCArIG54IC8gbGVuICogcng7XHJcbiAgICAgICAgYmVhZC55ID0gY3kgKyBueSAvIGxlbiAqIHJ5O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZmxhdHRlbk5vZGVTY2FsZShwYXJlbnQ6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgc3ggPSBwYXJlbnQuc2NhbGVYO1xyXG4gICAgICAgIGxldCBzeSA9IHBhcmVudC5zY2FsZVk7XHJcbiAgICAgICAgaWYgKHN4ID09PSAxICYmIHN5ID09PSAxKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHNuYXBzaG90ID0gcGFyZW50LmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5vZGU6IGNoaWxkLFxyXG4gICAgICAgICAgICAgICAgd29ybGRQb3M6IGNoaWxkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSksXHJcbiAgICAgICAgICAgICAgICBzY2FsZVg6IGNoaWxkLnNjYWxlWCAqIHN4LFxyXG4gICAgICAgICAgICAgICAgc2NhbGVZOiBjaGlsZC5zY2FsZVkgKiBzeSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwYXJlbnQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgc25hcHNob3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLm5vZGUuc2V0U2NhbGUoaXRlbS5zY2FsZVgsIGl0ZW0uc2NhbGVZKTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpdGVtLndvcmxkUG9zKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlzT3BlbkRvb3IgPSBmYWxzZVxyXG4gICAgYnRuX29wZW5Eb29yKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbkRvb3IgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuRG9vciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kb29yLnNjYWxlID0gMlxyXG4gICAgICAgIHRoaXMuY3VhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMuZG9vci5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VhLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIH0sIDAuMylcclxuICAgIH1cclxuICAgIGlzQ2xpY2tCb3ggPSAwXHJcbiAgICBjbGlja0l0ZW0oYm94VmFsdWUsIHRhZykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tCb3ggPj0gNSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjMoMCwgNTYpLCBjYy52MygxMDksIDQ3KSwgY2MudjMoLTEwNSwgNDApLCBjYy52MygtNTIsIDIyKSwgY2MudjMoNjEsIDIyKV1cclxuICAgICAgICB0aGlzLmlzQ2xpY2tCb3grK1xyXG4gICAgICAgIGxldCBib3ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVCb3hbdGFnXSlcclxuICAgICAgICBib3gucGFyZW50ID0gdGhpcy5saXN0SXRlbTI7XHJcbiAgICAgICAgYm94LnBvc2l0aW9uID0gYm94VmFsdWUucG9zaXRpb247XHJcbiAgICAgICAgY2MudHdlZW4oYm94KS50bygwLjUsIHsgcG9zaXRpb246IGFyclBvc1t0aGlzLmlzQ2xpY2tCb3ggLSAxXSB9KS5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tCb3ggPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkRvbmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrQm94ID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fZG9uZSgpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlzRG9uZSA9IGZhbHNlXHJcbiAgICBjb3VudEl0ZW0gPSAwXHJcbiAgICBidG5fZG9uZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RvbmUgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNEb25lID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuRG9uZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYWluMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjMoMCwgMzYpLCBjYy52MygtMTU4LCAxMjMpLCBjYy52MygxODcsIDEyOCksIGNjLnYzKDIxMSwgLTU5KSwgY2MudjMoLTIwMywgLTQwKV1cclxuICAgICAgICBsZXQgY291bnQgPSAwXHJcbiAgICAgICAgdGhpcy5jb3VudEl0ZW0gPSB0aGlzLmxpc3RJdGVtMi5jaGlsZHJlbkNvdW50XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdEl0ZW0yLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RJdGVtMi5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcy5saXN0Qm94XHJcbiAgICAgICAgICAgIGNoaWxkLnNjYWxlID0gMi4zO1xyXG4gICAgICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IGFyclBvc1tjb3VudF1cclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW4yKS50bygwLjM1LCB7IHNjYWxlOiAwLjUgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgaXNDb3VudE5vdGkgPSAwXHJcbiAgICBtb3ZlVG9Wb25nKGJveCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuaXNDb3VudE5vdGlcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubGlzdFNvdW5kTm90aVtjb3VudF0sIGZhbHNlLCAxKTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5saXN0Tm90aS5jaGlsZHJlbltjb3VudF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vIH0sIDAuNClcclxuICAgICAgICB0aGlzLmlzQ291bnROb3RpKytcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtaWRMb2NhbCA9IGNjLnYyKC0yMDAsIDE1MCk7XHJcbiAgICAgICAgICAgIGxldCBlbmRMb2NhbCA9IGNjLnYyKDAsIC0zMCk7XHJcbiAgICAgICAgICAgIGxldCBmbHlQYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFdvcmxkID0gYm94LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoYm94LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbGV0IG1pZFdvcmxkID0gdGhpcy5yby5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMobWlkTG9jYWwueCwgbWlkTG9jYWwueSkpO1xyXG4gICAgICAgICAgICBsZXQgZW5kV29ybGQgPSB0aGlzLnJvLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MyhlbmRMb2NhbC54LCBlbmRMb2NhbC55KSk7XHJcblxyXG4gICAgICAgICAgICBib3gucGFyZW50ID0gZmx5UGFyZW50O1xyXG4gICAgICAgICAgICBib3guekluZGV4ID0gOTk5O1xyXG4gICAgICAgICAgICBib3guc2V0U2libGluZ0luZGV4KGZseVBhcmVudC5jaGlsZHJlbkNvdW50IC0gMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBmbHlQYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoc3RhcnRXb3JsZCk7XHJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBmbHlQYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobWlkV29ybGQpO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gZmx5UGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGVuZFdvcmxkKTtcclxuICAgICAgICAgICAgYm94LnBvc2l0aW9uID0gc3RhcnRQb3M7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbihib3gpLmJlemllclRvKDAuNywgY2MudjIoc3RhcnRQb3MueCwgc3RhcnRQb3MueSksIGNjLnYyKG1pZFBvcy54LCBtaWRQb3MueSksIGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYm94LnBhcmVudCA9IHRoaXMucm87XHJcbiAgICAgICAgICAgICAgICBib3gucG9zaXRpb24gPSBjYy52MyhlbmRMb2NhbC54LCBlbmRMb2NhbC55KTtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbihib3gpLmRlbGF5KDAuNCkudG8oMC4zLCB7IHNjYWxlOiAxLjMgfSkudG8oMC4wOCwgeyBzY2FsZTogMS4yIH0pLnN0YXJ0KClcclxuICAgICAgICB9LCAwLjQpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudE5vdGkgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93IGVuZFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5kLCBmYWxzZSwgMSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZFNvdW5kKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRMb3NlLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2Nob29zZShldmVudCwgdmFsdWUpIHtcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1JvdGF0ZVN5bmMpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zcG9vbiAmJiAhdGhpcy5pc01peERvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGFpbkJlYWRzKCk7XHJcbiAgICAgICAgdGhpcy5yZXBvbnNpdmUodGhpcy5pc1BvcnRyYWl0KCkpO1xyXG4gICAgfVxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxXHJcblxyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAwLjYgOiAwLjRcclxuICAgICAgICAvLyBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIC8vIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICBpZiAoY2FudmFzLmFsaWduV2l0aFNjcmVlbikge1xyXG4gICAgICAgICAgICBjYW52YXMuYWxpZ25XaXRoU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwKVxyXG4gICAgICAgIHRoaXMubGlzdE5vdGkuc2NhbGUgPSAobG9naWMpID8gMC43IDogMC43XHJcblxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTIwMClcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC4zNVxyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gMi4wOyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA+PSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC4zXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjM1XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjM3XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTQwKVxyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gMi4wOyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA+PSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuM1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjM2XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTE0MClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=