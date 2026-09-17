
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
        _this.shadow = null;
        _this.listStar = null;
        _this.showItem = null;
        _this.gio = null;
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
        _this.progressNode = null;
        _this.progressFill = null;
        _this.progressFillWidth = 0;
        _this.mixTime = 0;
        _this.mixNeedTime = 2;
        _this.isMixDone = false;
        _this.lastMixMoveTime = 0;
        _this.mixTouchListener = null;
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
        var _this = this;
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
        this.setMixProgress(1);
        if (this.spoon) {
            this.spoon.y = this.spoonRestY;
            this.spoon.angle = this.spoonRestAngle;
        }
        this.moveThia();
    };
    NewClass.prototype.moveThia = function () {
        var _this = this;
        cc.tween(this.spoon).to(0.5, { position: cc.v3(-59, 190), angle: -10 }).start();
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
        var wait = 0.04 * Math.max(count - 1, 0) + 0.6;
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
            })
                .start();
        };
        var this_1 = this;
        for (var i = 0; i < count; i++) {
            _loop_1(i);
        }
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
        this.updateBeadLayers();
    };
    NewClass.prototype.onMixTouchMove = function (event) {
        if (this.isMixDone || !this.isMixTouch)
            return;
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
        if (this.spoon && !this.isMixDone) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQVBQXFxHYW1lRG9udXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFFekI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1ekJDO1FBcnpCRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFBO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixhQUFPLEdBQWlCLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUNRLElBQUksQ0FBQztRQUUxQixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixxQkFBcUI7UUFDckIsNEJBQTRCO1FBRzVC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O0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0E7SUFFbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRjtJQXBHQyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdXpCNUI7SUFBRCxlQUFDO0NBdnpCRCxBQXV6QkMsQ0F2ekJxQyxFQUFFLENBQUMsU0FBUyxHQXV6QmpEO2tCQXZ6Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuZ29sZCA9IDBcclxuZ2xvYmFsVGhpcy5zY0dhbWUgPSBmYWxzZVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xvc2VQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENoaWVuOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kTG9zZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEhlbGxvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kSGVsbG9DdXMzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVHJhbnM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERvbnV0SnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNlbGxEb25lXHJcbiAgICAgICAgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0dXQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBsaXN0SGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV3Jvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZnhDb2xvcjogY2MuUHJlZmFiID0gbnVsbFxyXG5cclxuICAgIC8vbmV3XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGJ0bkRvbnV0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIC8vIHByZURvbnV0OiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3REb251dFBsYWNlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbGlzdERvbnV0U3ViOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbGlzdEtoYXlQbGFjZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RLaGF5U3ViOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0aGFuZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuRGF1OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VhOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb29yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RQcmVCb3g6IGNjLlByZWZhYltdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJdGVtMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkRvbmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RCb3g6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJvOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Tm90aTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNwb29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGlhOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2hhZG93OmNjLk5vZGU9bnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0U3RhcjpjYy5Ob2RlPW51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2hvd0l0ZW06Y2MuTm9kZT1udWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdpbzpjYy5Ob2RlPW51bGxcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICAvLyBjYW1lcmE6Y2MuQ2FtZXJhPW51bGxcclxuXHJcbiAgICBtYXhLaGF5ID0gN1xyXG5cclxuICAgIGFyckRvbnV0cG9zID0gW11cclxuICAgIGFyckRvbnV0ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdXHJcbiAgICBhcnJLaGF5ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdXHJcbiAgICBhcnJLaGF5UG9zID0gW11cclxuICAgIGlzVHV0Q2hpbGkgPSBmYWxzZVxyXG4gICAgaXNUdXRNZWF0ID0gZmFsc2VcclxuICAgIGlzVHV0VmVnZXRUYWJsZSA9IGZhbHNlXHJcbiAgICBpc1R1dENsaWNrTWVhdCA9IGZhbHNlXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgLy8gc291bmRCZzpjYy5BdWRpb0NsaXA9bnVsbDtcclxuXHJcbiAgICBpc1RhcmdldFBvcCA9IG51bGw7XHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICBpc1RhcmdldEN1cyA9IG51bGw7XHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBpZFNvdW5kID0gbnVsbFxyXG4gICAgbGFzdFBvcnRyYWl0ID0gbnVsbFxyXG4gICAgaXNNaXhUb3VjaCA9IGZhbHNlXHJcbiAgICBzcG9vbk1pblggPSAtODBcclxuICAgIHNwb29uTWF4WCA9IDgwXHJcbiAgICBzcG9vbk1pblkgPSAtNDBcclxuICAgIHNwb29uTWF4WSA9IC01XHJcbiAgICBzcG9vblJlc3RZID0gLTIzXHJcbiAgICBzcG9vblJlc3RBbmdsZSA9IDBcclxuICAgIGxpc3RCZWFkczogY2MuTm9kZSA9IG51bGxcclxuICAgIGJlYWRTY29vcFN0YXRlID0ge31cclxuICAgIGlzUm90YXRlU3luYyA9IGZhbHNlXHJcbiAgICBwcm9ncmVzc05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBwcm9ncmVzc0ZpbGw6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBwcm9ncmVzc0ZpbGxXaWR0aCA9IDBcclxuICAgIG1peFRpbWUgPSAwXHJcbiAgICBtaXhOZWVkVGltZSA9IDJcclxuICAgIGlzTWl4RG9uZSA9IGZhbHNlXHJcbiAgICBsYXN0TWl4TW92ZVRpbWUgPSAwXHJcbiAgICBtaXhUb3VjaExpc3RlbmVyID0gbnVsbFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjMpXHJcbiAgICAgICAgdGhpcy5sYXN0UG9ydHJhaXQgPSB0aGlzLmlzUG9ydHJhaXQoKTtcclxuICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0aGlzLmxhc3RQb3J0cmFpdCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNwb29uTWl4KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNQb3J0cmFpdCgpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIHNpemUud2lkdGggPCBzaXplLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzbmFwc2hvdEJlYWRMb2NhbHMoKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMpIHJldHVybiBhcnI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJlYWQgPSB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGJlYWQgPT09IHRoaXMuc3Bvb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBhcnIucHVzaCh7IG5vZGU6IGJlYWQsIHg6IGJlYWQueCwgeTogYmVhZC55LCBhbmdsZTogYmVhZC5hbmdsZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlQmVhZExvY2FscyhhcnIpIHtcclxuICAgICAgICBpZiAoIWFycikgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gYXJyW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0ubm9kZSB8fCAhaXRlbS5ub2RlLmlzVmFsaWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpdGVtLm5vZGUuc2V0UG9zaXRpb24oaXRlbS54LCBpdGVtLnkpO1xyXG4gICAgICAgICAgICBpdGVtLm5vZGUuYW5nbGUgPSBpdGVtLmFuZ2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zcG9vbikge1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLnkgPSB0aGlzLnNwb29uUmVzdFk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bvb24uYW5nbGUgPSB0aGlzLnNwb29uUmVzdEFuZ2xlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXN5bmNQaHlzaWNzRnJvbU5vZGVzKCkge1xyXG4gICAgICAgIGxldCBib2RpZXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGJvZGllc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFib2R5LmVuYWJsZWQgfHwgYm9keS5ub2RlID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICBib2R5LnN5bmNSb3RhdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25PcmllbnRhdGlvbkNoYW5nZShwb3J0cmFpdCkge1xyXG4gICAgICAgIHRoaXMuaXNSb3RhdGVTeW5jID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcG0gPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHBtLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc25hcHNob3QgPSB0aGlzLnNuYXBzaG90QmVhZExvY2FscygpO1xyXG4gICAgICAgIGxldCBzcG9vblggPSB0aGlzLnNwb29uID8gdGhpcy5zcG9vbi54IDogMDtcclxuICAgICAgICB0aGlzLnJlcG9uc2l2ZShwb3J0cmFpdCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVCZWFkTG9jYWxzKHNuYXBzaG90KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3Bvb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bvb24ueCA9IGNjLm1pc2MuY2xhbXBmKHNwb29uWCwgdGhpcy5zcG9vbk1pblgsIHRoaXMuc3Bvb25NYXhYKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bvb24ueSA9IHRoaXMuc3Bvb25SZXN0WTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwbS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcG0uZ3Jhdml0eSA9IGNjLnYyKDAsIC05ODApO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3luY1BoeXNpY3NGcm9tTm9kZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZVN5bmMgPSBmYWxzZTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UGh5c2ljcygpIHtcclxuICAgICAgICBsZXQgcGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHBoeXNpY3NNYW5hZ2VyLmdyYXZpdHkgPSBjYy52MigwLCAtOTgwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFNwb29uTWl4KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5kaWEgJiYgdGhpcy5tYWluMikge1xyXG4gICAgICAgICAgICB0aGlzLmRpYSA9IHRoaXMubWFpbjIuZ2V0Q2hpbGRCeU5hbWUoXCJkaWFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zcG9vbiAmJiB0aGlzLmRpYSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uID0gdGhpcy5kaWEuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZV8wMjlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zcG9vbikgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IHRoaXMuc3Bvb24uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgYm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb2wgPSB0aGlzLnNwb29uLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGlmIChjb2wpIHtcclxuICAgICAgICAgICAgY29sLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGlzdEJlYWRzID0gdGhpcy5kaWEuZ2V0Q2hpbGRCeU5hbWUoXCJsaXN0SXRlbVwiKTtcclxuICAgICAgICBpZiAodGhpcy5saXN0QmVhZHMgJiYgdGhpcy5zcG9vbi5wYXJlbnQgIT09IHRoaXMubGlzdEJlYWRzKSB7XHJcbiAgICAgICAgICAgIGxldCB3b3JsZCA9IHRoaXMuc3Bvb24uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5wYXJlbnQgPSB0aGlzLmxpc3RCZWFkcztcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5zZXRQb3NpdGlvbih0aGlzLmxpc3RCZWFkcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNwb29uUmVzdFkgPSB0aGlzLnNwb29uLnk7XHJcbiAgICAgICAgdGhpcy5zcG9vblJlc3RBbmdsZSA9IHRoaXMuc3Bvb24uYW5nbGU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZWFkTGF5ZXJzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdEJlYWRzKSB7XHJcbiAgICAgICAgICAgIGxldCBncm91cHMgPSBjYy5nYW1lLmdyb3VwTGlzdCB8fCBbXTtcclxuICAgICAgICAgICAgbGV0IGhhc0JlYWRHcm91cCA9IGdyb3Vwcy5pbmRleE9mKFwiYmVhZFwiKSA+PSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJlYWQgPSB0aGlzLmxpc3RCZWFkcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNCZWFkR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBiZWFkLmdyb3VwID0gXCJiZWFkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9keSA9IGJlYWQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJvZHkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJEYW1waW5nID0gMS4yO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hbmd1bGFyRGFtcGluZyA9IDEuNTtcclxuICAgICAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMC40NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5taXhUb3VjaExpc3RlbmVyID0gY2MuRXZlbnRMaXN0ZW5lci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBldmVudDogY2MuRXZlbnRMaXN0ZW5lci5UT1VDSF9BTExfQVRfT05DRSxcclxuICAgICAgICAgICAgb25Ub3VjaGVzQmVnYW46ICh0b3VjaGVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTWl4VG91Y2hTdGFydCh0b3VjaGVzWzBdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25Ub3VjaGVzTW92ZWQ6ICh0b3VjaGVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTWl4VG91Y2hNb3ZlKHRvdWNoZXNbMF0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblRvdWNoZXNFbmRlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk1peFRvdWNoRW5kKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uVG91Y2hlc0NhbmNlbGxlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk1peFRvdWNoRW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIodGhpcy5taXhUb3VjaExpc3RlbmVyLCAxKTtcclxuICAgICAgICB0aGlzLnNldHVwTWl4UHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWl4VG91Y2hMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICBjYy5ldmVudE1hbmFnZXIucmVtb3ZlTGlzdGVuZXIodGhpcy5taXhUb3VjaExpc3RlbmVyKTtcclxuICAgICAgICAgICAgdGhpcy5taXhUb3VjaExpc3RlbmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBNaXhQcm9ncmVzcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlhKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc05vZGUgPSB0aGlzLmRpYS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNcIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2dyZXNzTm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NGaWxsID0gdGhpcy5wcm9ncmVzc05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZV8wMzVcIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2dyZXNzRmlsbCAmJiB0aGlzLnByb2dyZXNzTm9kZS5jaGlsZHJlbkNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRmlsbCA9IHRoaXMucHJvZ3Jlc3NOb2RlLmNoaWxkcmVuW3RoaXMucHJvZ3Jlc3NOb2RlLmNoaWxkcmVuQ291bnQgLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NGaWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NGaWxsV2lkdGggPSB0aGlzLnByb2dyZXNzRmlsbC53aWR0aDtcclxuICAgICAgICAgICAgbGV0IHNwID0gdGhpcy5wcm9ncmVzc0ZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzcCAmJiBzcC50eXBlID09PSBjYy5TcHJpdGUuVHlwZS5TSU1QTEUpIHtcclxuICAgICAgICAgICAgICAgIHNwLnR5cGUgPSBjYy5TcHJpdGUuVHlwZS5GSUxMRUQ7XHJcbiAgICAgICAgICAgICAgICBzcC5maWxsVHlwZSA9IGNjLlNwcml0ZS5GaWxsVHlwZS5IT1JJWk9OVEFMO1xyXG4gICAgICAgICAgICAgICAgc3AuZmlsbFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHNwLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRNaXhQcm9ncmVzcygwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNaXhQcm9ncmVzcyhyYXRpbykge1xyXG4gICAgICAgIHJhdGlvID0gY2MubWlzYy5jbGFtcGYocmF0aW8sIDAsIDEpO1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmVzc0ZpbGwgJiYgIXRoaXMucHJvZ3Jlc3NOb2RlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NOb2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBiYXIgPSB0aGlzLnByb2dyZXNzTm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgICAgICBpZiAoYmFyKSB7XHJcbiAgICAgICAgICAgICAgICBiYXIucHJvZ3Jlc3MgPSByYXRpbztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucHJvZ3Jlc3NGaWxsKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHNwID0gdGhpcy5wcm9ncmVzc0ZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgaWYgKHNwICYmIHNwLnR5cGUgPT09IGNjLlNwcml0ZS5UeXBlLkZJTExFRCkge1xyXG4gICAgICAgICAgICBzcC5maWxsUmFuZ2UgPSByYXRpbztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0ZpbGxXaWR0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0ZpbGwud2lkdGggPSB0aGlzLnByb2dyZXNzRmlsbFdpZHRoICogTWF0aC5tYXgocmF0aW8sIDAuMDAxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyZXNzRmlsbC5zY2FsZVggPSBNYXRoLm1heChyYXRpbywgMC4wMDEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWl4Q29tcGxldGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNaXhEb25lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc01peERvbmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNNaXhUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4UHJvZ3Jlc3MoMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bvb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi55ID0gdGhpcy5zcG9vblJlc3RZO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlVGhpYSgpXHJcbiAgICB9XHJcbiAgICBtb3ZlVGhpYSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNwb29uKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKC01OSwgMTkwKSwgYW5nbGU6IC0xMCB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc2hhZG93KS50bygwLjUsIHsgb3BhY2l0eTogMTgwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJyaW5nTGlzdFN0YXJBYm92ZVNoYWRvdygpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5naW8uYWN0aXZlPXRydWVcclxuICAgICAgICB0aGlzLnNob3dJdGVtLmFjdGl2ZT10cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ybGRBbmdsZShub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGEgPSAwO1xyXG4gICAgICAgIGxldCBuID0gbm9kZTtcclxuICAgICAgICB3aGlsZSAobikge1xyXG4gICAgICAgICAgICBhICs9IG4uYW5nbGU7XHJcbiAgICAgICAgICAgIG4gPSBuLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ybGRTY2FsZShub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHN4ID0gMTtcclxuICAgICAgICBsZXQgc3kgPSAxO1xyXG4gICAgICAgIGxldCBuID0gbm9kZTtcclxuICAgICAgICB3aGlsZSAobikge1xyXG4gICAgICAgICAgICBzeCAqPSBuLnNjYWxlWDtcclxuICAgICAgICAgICAgc3kgKj0gbi5zY2FsZVk7XHJcbiAgICAgICAgICAgIG4gPSBuLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHN4LCBzeSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnJpbmdMaXN0U3RhckFib3ZlU2hhZG93KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0U3RhciB8fCAhdGhpcy5zaGFkb3cpIHJldHVybjtcclxuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5zaGFkb3cucGFyZW50O1xyXG4gICAgICAgIGxldCBzdGFyV29ybGRzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RTdGFyLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBzdGFyV29ybGRzLnB1c2godGhpcy5saXN0U3Rhci5jaGlsZHJlbltpXS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJvd2xXb3JsZCA9IHRoaXMuZGlhXHJcbiAgICAgICAgICAgID8gdGhpcy5kaWEuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDI1KSlcclxuICAgICAgICAgICAgOiB0aGlzLmxpc3RTdGFyLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdFN0YXIucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMubGlzdFN0YXIuYW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMubGlzdFN0YXIuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgdGhpcy5saXN0U3Rhci5zZXRQb3NpdGlvbihwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoYm93bFdvcmxkKSk7XHJcbiAgICAgICAgdGhpcy5saXN0U3Rhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dJdGVtICYmIHRoaXMuc2hvd0l0ZW0ucGFyZW50ID09PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0U3Rhci56SW5kZXggPSB0aGlzLnNob3dJdGVtLnpJbmRleCArIDEwO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RTdGFyLnNldFNpYmxpbmdJbmRleCh0aGlzLnNob3dJdGVtLmdldFNpYmxpbmdJbmRleCgpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RTdGFyLnpJbmRleCA9IDEwMDtcclxuICAgICAgICAgICAgdGhpcy5saXN0U3Rhci5zZXRTaWJsaW5nSW5kZXgocGFyZW50LmNoaWxkcmVuQ291bnQgLSAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0U3Rhci5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHN0YXIgPSB0aGlzLmxpc3RTdGFyLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBzdGFyLnNldFBvc2l0aW9uKHRoaXMubGlzdFN0YXIuY29udmVydFRvTm9kZVNwYWNlQVIoc3Rhcldvcmxkc1tpXSkpO1xyXG4gICAgICAgICAgICBzdGFyLmFuZ2xlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlU3RhcnNUb0Jvd2xSb3coKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlU3RhcnNUb0Jvd2xSb3coKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RTdGFyKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5saXN0U3Rhci5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgIGxldCBzcGFjaW5nID0gMjAwO1xyXG4gICAgICAgIGxldCBzdGFydFggPSAtKChjb3VudCAtIDEpICogc3BhY2luZykgLyAyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc3RhciA9IHRoaXMubGlzdFN0YXIuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHN0YXIpLmRlbGF5KDAuMDQgKiBpKS50bygwLjQ1LCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjMoc3RhcnRYICsgaSAqIHNwYWNpbmcsIC02MCksXHJcbiAgICAgICAgICAgICAgICBhbmdsZTogMCxcclxuICAgICAgICAgICAgICAgIHNjYWxlOiAxLjRcclxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHdhaXQgPSAwLjA0ICogTWF0aC5tYXgoY291bnQgLSAxLCAwKSArIDAuNjtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmx5U3RhcnNUb0Jhc2tldCgpO1xyXG4gICAgICAgIH0sIHdhaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZseVN0YXJzVG9CYXNrZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hhZG93KSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc2hhZG93KS50bygwLjQsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zaG93SXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubGlzdFN0YXIgfHwgIXRoaXMuZ2lvKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGVuZFdvcmxkID0gdGhpcy5naW8uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICBsZXQgZW5kID0gdGhpcy5saXN0U3Rhci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRXb3JsZCk7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5saXN0U3Rhci5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc3RhciA9IHRoaXMubGlzdFN0YXIuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IGNjLnYyKHN0YXIueCwgc3Rhci55KTtcclxuICAgICAgICAgICAgbGV0IGMxID0gY2MudjIoc3RhcnQueCArIChlbmQueCAtIHN0YXJ0LngpICogMC4zNSwgc3RhcnQueSArIDE0MCk7XHJcbiAgICAgICAgICAgIGxldCBjMiA9IGNjLnYyKGVuZC54IC0gNzAsIGVuZC55ICsgOTApO1xyXG4gICAgICAgICAgICBjYy50d2VlbihzdGFyKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMTIgKiBpKVxyXG4gICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYmV6aWVyVG8oMC42LCBjMSwgYzIsIGNjLnYyKGVuZC54LCBlbmQueSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC42LCB7IHNjYWxlOiAxLCBhbmdsZTogMTUgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd29ybGQgPSBzdGFyLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhci5wYXJlbnQgPSB0aGlzLmdpbztcclxuICAgICAgICAgICAgICAgICAgICBzdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2lvLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VG91Y2hJblNwb29uUGFyZW50KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHNjcmVlblBvcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Bvb24ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1peFRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01peERvbmUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzTWl4VG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFzdE1peE1vdmVUaW1lID0gMDtcclxuICAgICAgICBpZiAodGhpcy50dXQpIHtcclxuICAgICAgICAgICAgdGhpcy50dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUJlYWRMYXllcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1peFRvdWNoTW92ZShldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWl4RG9uZSB8fCAhdGhpcy5pc01peFRvdWNoKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5tb3ZlU3Bvb25CeURlbHRhKGV2ZW50KTtcclxuICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdE1peE1vdmVUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBub3cgLSB0aGlzLmxhc3RNaXhNb3ZlVGltZTtcclxuICAgICAgICAgICAgaWYgKGR0ID4gMCAmJiBkdCA8IDAuMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taXhUaW1lICs9IGR0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdE1peE1vdmVUaW1lID0gbm93O1xyXG4gICAgICAgIHRoaXMuc2V0TWl4UHJvZ3Jlc3ModGhpcy5taXhUaW1lIC8gdGhpcy5taXhOZWVkVGltZSk7XHJcbiAgICAgICAgaWYgKHRoaXMubWl4VGltZSA+PSB0aGlzLm1peE5lZWRUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25NaXhDb21wbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1peFRvdWNoRW5kKCkge1xyXG4gICAgICAgIHRoaXMuaXNNaXhUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFzdE1peE1vdmVUaW1lID0gMDtcclxuICAgICAgICBpZiAoIXRoaXMuc3Bvb24pIHJldHVybjtcclxuICAgICAgICB0aGlzLnNwb29uLnkgPSB0aGlzLnNwb29uUmVzdFk7XHJcbiAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZWFkTGF5ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9jYWxEZWx0YShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCBjdXIgPSB0aGlzLmdldFRvdWNoSW5TcG9vblBhcmVudChldmVudCk7XHJcbiAgICAgICAgbGV0IGxvYyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IGRlbHRhID0gZXZlbnQuZ2V0RGVsdGEoKTtcclxuICAgICAgICBsZXQgcHJldlNjcmVlbiA9IGNjLnYyKGxvYy54IC0gZGVsdGEueCwgbG9jLnkgLSBkZWx0YS55KTtcclxuICAgICAgICBsZXQgcHJldldvcmxkID0gdGhpcy5jYW1lcmEuZ2V0U2NyZWVuVG9Xb3JsZFBvaW50KHByZXZTY3JlZW4pO1xyXG4gICAgICAgIGxldCBwcmV2TG9jYWwgPSB0aGlzLnNwb29uLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwcmV2V29ybGQpO1xyXG4gICAgICAgIGxldCBkID0gY2MudjIoY3VyLnggLSBwcmV2TG9jYWwueCwgY3VyLnkgLSBwcmV2TG9jYWwueSk7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGQueCkgPCAwLjIpIHtcclxuICAgICAgICAgICAgZC54ID0gZGVsdGEueCAqIDAuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVNwb29uQnlEZWx0YShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zcG9vbikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5nZXRMb2NhbERlbHRhKGV2ZW50KTtcclxuICAgICAgICBsZXQgeCA9IGNjLm1pc2MuY2xhbXBmKHRoaXMuc3Bvb24ueCArIGQueCwgdGhpcy5zcG9vbk1pblgsIHRoaXMuc3Bvb25NYXhYKTtcclxuICAgICAgICB0aGlzLnNwb29uLnNldFBvc2l0aW9uKHgsIHRoaXMuc3Bvb25SZXN0WSk7XHJcbiAgICAgICAgdGhpcy5zcG9vbi5hbmdsZSA9IHRoaXMuc3Bvb25SZXN0QW5nbGU7XHJcbiAgICAgICAgdGhpcy5zdGlyQmVhZHMoZC54KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJlYWRMYXllcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVCZWFkTGF5ZXJzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMgfHwgIXRoaXMuc3Bvb24pIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zcG9vbi5wYXJlbnQgIT09IHRoaXMubGlzdEJlYWRzKSB7XHJcbiAgICAgICAgICAgIGxldCB3b3JsZCA9IHRoaXMuc3Bvb24uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5wYXJlbnQgPSB0aGlzLmxpc3RCZWFkcztcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi5zZXRQb3NpdGlvbih0aGlzLmxpc3RCZWFkcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uUmVzdFkgPSB0aGlzLnNwb29uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzY29vcFdvcmxkID0gdGhpcy5zcG9vbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLTI1KSk7XHJcbiAgICAgICAgbGV0IHNjb29wID0gY2MudjIoc2Nvb3BXb3JsZC54LCBzY29vcFdvcmxkLnkpO1xyXG4gICAgICAgIGxldCBiZWhpbmQgPSBbXTtcclxuICAgICAgICBsZXQgZnJvbnQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoYmVhZCA9PT0gdGhpcy5zcG9vbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBwID0gYmVhZC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgZGlzdCA9IGNjLnYyKHAueCwgcC55KS5zdWIoc2Nvb3ApLm1hZygpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBiZWFkLnV1aWQ7XHJcbiAgICAgICAgICAgIGxldCBzY29vcGVkID0gdGhpcy5iZWFkU2Nvb3BTdGF0ZVtpZF0gPT09IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghc2Nvb3BlZCAmJiBkaXN0IDwgMjQwKSB7XHJcbiAgICAgICAgICAgICAgICBzY29vcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzY29vcGVkICYmIGRpc3QgPiAzODApIHtcclxuICAgICAgICAgICAgICAgIHNjb29wZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJlYWRTY29vcFN0YXRlW2lkXSA9IHNjb29wZWQ7XHJcbiAgICAgICAgICAgIGlmIChzY29vcGVkKSB7XHJcbiAgICAgICAgICAgICAgICBmcm9udC5wdXNoKGJlYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmVoaW5kLnB1c2goYmVhZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlkeCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZWhpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYmVoaW5kW2ldLnNldFNpYmxpbmdJbmRleChpZHgrKyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3Bvb24uc2V0U2libGluZ0luZGV4KGlkeCsrKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyb250Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZyb250W2ldLnNldFNpYmxpbmdJbmRleChpZHgrKyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0aXJCZWFkcyh2eCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMgfHwgTWF0aC5hYnModngpIDwgMC4wOCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzcG9vbkluQmVhZHMgPSB0aGlzLmxpc3RCZWFkcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLnNwb29uLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWFkID0gdGhpcy5saXN0QmVhZHMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChiZWFkID09PSB0aGlzLnNwb29uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGR4ID0gYmVhZC54IC0gc3Bvb25JbkJlYWRzLng7XHJcbiAgICAgICAgICAgIGxldCBkeSA9IGJlYWQueSAtIHNwb29uSW5CZWFkcy55O1xyXG4gICAgICAgICAgICBsZXQgZGlzdCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0ID4gMjAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IHQgPSAxIC0gZGlzdCAvIDIwMDtcclxuICAgICAgICAgICAgYmVhZC54ICs9IHZ4ICogKDAuNTUgKyAwLjcgKiB0KTtcclxuICAgICAgICAgICAgYmVhZC55ICs9IHZ4ICogMC4wOCAqIHQgKiAoZHggPj0gMCA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIGJlYWQueCA9IGNjLm1pc2MuY2xhbXBmKGJlYWQueCwgLTIwMCwgMjAwKTtcclxuICAgICAgICAgICAgYmVhZC55ID0gY2MubWlzYy5jbGFtcGYoYmVhZC55LCAtNzUsIDQ1KTtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBiZWFkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZ4ICogMTYgKiB0LCAwKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gdnggKiAwLjYgKiB0O1xyXG4gICAgICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbkJlYWRzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0QmVhZHMpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVhZCA9IHRoaXMubGlzdEJlYWRzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoYmVhZCA9PT0gdGhpcy5zcG9vbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gYmVhZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgbGV0IG54ID0gYmVhZC54IC8gMjMwO1xyXG4gICAgICAgICAgICBsZXQgbnkgPSAoYmVhZC55ICsgMTApIC8gMTAwO1xyXG4gICAgICAgICAgICBsZXQgbGVuMiA9IG54ICogbnggKyBueSAqIG55O1xyXG4gICAgICAgICAgICBpZiAobGVuMiA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsZW4gPSBNYXRoLnNxcnQobGVuMik7XHJcbiAgICAgICAgICAgICAgICBiZWFkLnggPSBueCAvIGxlbiAqIDIyODtcclxuICAgICAgICAgICAgICAgIGJlYWQueSA9IG55IC8gbGVuICogOTggLSAxMDtcclxuICAgICAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2ID0gYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIodi54ICogMC41LCBNYXRoLm1pbih2LnksIDIwKSAqIDAuNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IHYubWFnKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlZWQgPiAxMjApIHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gdi5tdWwoMTIwIC8gc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZmxhdHRlbk5vZGVTY2FsZShwYXJlbnQ6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgc3ggPSBwYXJlbnQuc2NhbGVYO1xyXG4gICAgICAgIGxldCBzeSA9IHBhcmVudC5zY2FsZVk7XHJcbiAgICAgICAgaWYgKHN4ID09PSAxICYmIHN5ID09PSAxKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHNuYXBzaG90ID0gcGFyZW50LmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5vZGU6IGNoaWxkLFxyXG4gICAgICAgICAgICAgICAgd29ybGRQb3M6IGNoaWxkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSksXHJcbiAgICAgICAgICAgICAgICBzY2FsZVg6IGNoaWxkLnNjYWxlWCAqIHN4LFxyXG4gICAgICAgICAgICAgICAgc2NhbGVZOiBjaGlsZC5zY2FsZVkgKiBzeSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwYXJlbnQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgc25hcHNob3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLm5vZGUuc2V0U2NhbGUoaXRlbS5zY2FsZVgsIGl0ZW0uc2NhbGVZKTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpdGVtLndvcmxkUG9zKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlzT3BlbkRvb3IgPSBmYWxzZVxyXG4gICAgYnRuX29wZW5Eb29yKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbkRvb3IgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuRG9vciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kb29yLnNjYWxlID0gMlxyXG4gICAgICAgIHRoaXMuY3VhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMuZG9vci5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VhLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIH0sIDAuMylcclxuICAgIH1cclxuICAgIGlzQ2xpY2tCb3ggPSAwXHJcbiAgICBjbGlja0l0ZW0oYm94VmFsdWUsIHRhZykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tCb3ggPj0gNSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjMoMCwgNTYpLCBjYy52MygxMDksIDQ3KSwgY2MudjMoLTEwNSwgNDApLCBjYy52MygtNTIsIDIyKSwgY2MudjMoNjEsIDIyKV1cclxuICAgICAgICB0aGlzLmlzQ2xpY2tCb3grK1xyXG4gICAgICAgIGxldCBib3ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVCb3hbdGFnXSlcclxuICAgICAgICBib3gucGFyZW50ID0gdGhpcy5saXN0SXRlbTI7XHJcbiAgICAgICAgYm94LnBvc2l0aW9uID0gYm94VmFsdWUucG9zaXRpb247XHJcbiAgICAgICAgY2MudHdlZW4oYm94KS50bygwLjUsIHsgcG9zaXRpb246IGFyclBvc1t0aGlzLmlzQ2xpY2tCb3ggLSAxXSB9KS5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tCb3ggPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkRvbmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrQm94ID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fZG9uZSgpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlzRG9uZSA9IGZhbHNlXHJcbiAgICBjb3VudEl0ZW0gPSAwXHJcbiAgICBidG5fZG9uZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RvbmUgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNEb25lID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYnRuRG9uZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYWluMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBhcnJQb3MgPSBbY2MudjMoMCwgMzYpLCBjYy52MygtMTU4LCAxMjMpLCBjYy52MygxODcsIDEyOCksIGNjLnYzKDIxMSwgLTU5KSwgY2MudjMoLTIwMywgLTQwKV1cclxuICAgICAgICBsZXQgY291bnQgPSAwXHJcbiAgICAgICAgdGhpcy5jb3VudEl0ZW0gPSB0aGlzLmxpc3RJdGVtMi5jaGlsZHJlbkNvdW50XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdEl0ZW0yLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RJdGVtMi5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcy5saXN0Qm94XHJcbiAgICAgICAgICAgIGNoaWxkLnNjYWxlID0gMi4zO1xyXG4gICAgICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IGFyclBvc1tjb3VudF1cclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW4yKS50bygwLjM1LCB7IHNjYWxlOiAwLjUgfSkuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgaXNDb3VudE5vdGkgPSAwXHJcbiAgICBtb3ZlVG9Wb25nKGJveCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuaXNDb3VudE5vdGlcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5saXN0Tm90aS5jaGlsZHJlbltjb3VudF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8vIH0sIDAuNClcclxuICAgICAgICB0aGlzLmlzQ291bnROb3RpKytcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52MigtNTAsIDEwMCk7XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBjYy52MigwLCAtMzApO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gYm94LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoYm94LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5yby5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52Mihwb3MueCwgcG9zLnkpXHJcbiAgICAgICAgICAgIGJveC5wYXJlbnQgPSB0aGlzLnJvO1xyXG4gICAgICAgICAgICBib3gucG9zaXRpb24gPSBwb3M7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbihib3gpLmJlemllclRvKDAuNywgc3RhcnRQb3MsIG1pZFBvcywgZW5kUG9zKS5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgY2MudHdlZW4oYm94KS5kZWxheSgwLjUpLnRvKDAuMywgeyBzY2FsZTogMS41IH0pLnRvKDAuMDgsIHsgc2NhbGU6IDEuNCB9KS5zdGFydCgpXHJcbiAgICAgICAgfSwgMC40KVxyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnROb3RpID09IHRoaXMuY291bnRJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmRHYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5kLCBmYWxzZSwgMSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZFNvdW5kKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRMb3NlLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYnRuX2Nob29zZShldmVudCwgdmFsdWUpIHtcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1JvdGF0ZVN5bmMpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zcG9vbiAmJiAhdGhpcy5pc01peERvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcG9vbi55ID0gdGhpcy5zcG9vblJlc3RZO1xyXG4gICAgICAgICAgICB0aGlzLnNwb29uLmFuZ2xlID0gdGhpcy5zcG9vblJlc3RBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTWl4VG91Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluQmVhZHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBvcnRyYWl0ID0gdGhpcy5pc1BvcnRyYWl0KCk7XHJcbiAgICAgICAgaWYgKHBvcnRyYWl0ID09PSB0aGlzLmxhc3RQb3J0cmFpdCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGFzdFBvcnRyYWl0ID0gcG9ydHJhaXQ7XHJcbiAgICAgICAgdGhpcy5vbk9yaWVudGF0aW9uQ2hhbmdlKHBvcnRyYWl0KTtcclxuICAgIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMVxyXG5cclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMC42IDogMC40XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgdGhpcy5saXN0Tm90aS5zY2FsZSA9IChsb2dpYykgPyAxLjEgOiAwLjdcclxuXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMjAwKVxyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjhcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtNDApXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC4zN1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTE0MClcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuMzZcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTQwKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==