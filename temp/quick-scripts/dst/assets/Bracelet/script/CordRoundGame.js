
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bracelet/script/CordRoundGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae5f9ns9axCz7idajns1ZMq', 'CordRoundGame');
// Bracelet/script/CordRoundGame.ts

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
var CordRoundGame = /** @class */ (function (_super) {
    __extends(CordRoundGame, _super);
    function CordRoundGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CordRoundList = null;
        _this.plate = null;
        _this.charmHind = null;
        _this.entryDetectRadius = 110;
        _this.pathSampleSpacing = 12;
        _this.segmentRadius = 14;
        _this.slideGravity = 320;
        _this.maxSlideSpeed = 280;
        _this.pathPullStrength = 420;
        _this.pathPullDamping = 16;
        _this.settleSpeed = 22;
        _this.pivotColliderRadius = 8;
        _this.charmSlotSpacing = 130;
        _this.activeCord = null;
        _this.cordPaths = new Map();
        _this.preparedCords = [];
        _this.leftAnchor = null;
        _this.rightAnchor = null;
        _this.charmLayer = null;
        _this.cordCharms = [];
        _this.draggingCharm = null;
        _this.dragSnapSide = null;
        _this.dragOriginParent = null;
        _this.dragOriginPos = null;
        _this.dragOriginSiblingIndex = 0;
        _this.activeTouchId = -1;
        _this.isActive = false;
        _this.touchBound = false;
        _this.btnOk = null;
        _this.hand3 = null;
        _this.localBox = null;
        _this.isTargetHind = null;
        return _this;
    }
    CordRoundGame.prototype.liftBracelet = function (targetPos, duration) {
        if (duration === void 0) { duration = 0.4; }
        if (!this.CordRoundList)
            return;
        this.isActive = false;
        var bodies = [];
        var collectBodies = function (node) {
            var body = node.getComponent(cc.RigidBody);
            if (body) {
                bodies.push(body);
            }
            for (var i = 0; i < node.childrenCount; i++) {
                collectBodies(node.children[i]);
            }
        };
        collectBodies(this.node);
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            body.linearVelocity = cc.v2(0, 0);
            body.angularVelocity = 0;
            body.type = cc.RigidBodyType.Kinematic;
            body.awake = true;
        }
        var syncBodies = function () {
            for (var i = 0; i < bodies.length; i++) {
                bodies[i].syncPosition(true);
                bodies[i].syncRotation(true);
            }
        };
        cc.tween(this.node)
            .to(duration, { position: targetPos }, { onUpdate: syncBodies })
            .call(function () {
            syncBodies();
        })
            .start();
    };
    CordRoundGame.prototype.setHind = function (charm) {
        var tag = charm.getComponent("CharmItem").tag;
        if (this.isTargetHind) {
            this.isTargetHind.active = false;
        }
        this.charmHind.children[tag].active = true;
        this.isTargetHind = this.charmHind.children[tag];
        var colorIMG = charm.getComponent("CharmItem").getColor();
        this.charmHind.children[tag].children[0].getComponent(cc.Sprite).spriteFrame = colorIMG;
        this.charmHind.children[tag].children[1].getComponent(cc.Sprite).spriteFrame = colorIMG;
        this.localBox = this.charmHind.children[tag];
    };
    CordRoundGame.prototype.startBraceletMode = function () {
        if (!this.CordRoundList)
            return;
        this.resolveReferences();
        this.isActive = true;
        this.activeCord = this.CordRoundList.children[globalThis.idString];
        if (!this.activeCord)
            return;
        this.leftAnchor = this.activeCord.getChildByName('left');
        this.rightAnchor = this.activeCord.getChildByName('right');
        if (!this.leftAnchor || !this.rightAnchor) {
            cc.warn('[CordRoundGame] Cord is missing left/right anchor nodes.');
            return;
        }
        cc.director.getPhysicsManager().gravity = cc.v2(0, -520);
        for (var i = 0; i < this.CordRoundList.childrenCount; i++) {
            this.prepareCord(this.CordRoundList.children[i]);
        }
        this.ensureCharmLayer();
        this.bindTouch();
    };
    CordRoundGame.prototype.prepareCord = function (cord) {
        if (this.preparedCords.indexOf(cord) >= 0)
            return;
        var rawPoints = this.getPolygonColliderPoints(cord);
        if (rawPoints.length < 2) {
            cc.warn('[CordRoundGame] Cord "' + cord.name + '" needs cc.PolygonCollider.');
            return;
        }
        var samples = this.sampleAlongPath(rawPoints, this.pathSampleSpacing);
        this.cordPaths.set(cord, {
            points: samples,
            totalLength: this.calcPathLength(samples),
        });
        this.setupCordPhysics(cord, samples);
        this.preparedCords.push(cord);
    };
    CordRoundGame.prototype.getPolygonColliderPoints = function (cord) {
        var poly = cord.getComponent(cc.PolygonCollider);
        if (!poly || !poly.points || poly.points.length < 2)
            return [];
        var offset = poly.offset || cc.v2(0, 0);
        return poly.points.map(function (p) { return cc.v2(p.x + offset.x, p.y + offset.y); });
    };
    CordRoundGame.prototype.setupCordPhysics = function (cord, samples) {
        var body = cord.getComponent(cc.RigidBody);
        if (!body) {
            body = cord.addComponent(cc.RigidBody);
        }
        body.type = cc.RigidBodyType.Static;
        body.awake = true;
        body.active = true;
        this.clearSegmentColliders(cord);
        var spacing = Math.max(this.pathSampleSpacing * 1.5, 16);
        var colliderPoints = samples.length > 80
            ? this.sampleAlongPath(samples, spacing)
            : samples;
        for (var i = 0; i < colliderPoints.length; i++) {
            var col = cord.addComponent(cc.PhysicsCircleCollider);
            col.offset = colliderPoints[i];
            col.radius = this.segmentRadius;
            col.friction = 0.35;
            col.restitution = 0.05;
        }
    };
    CordRoundGame.prototype.sampleAlongPath = function (points, spacing) {
        var samples = [];
        var carry = 0;
        for (var i = 0; i < points.length; i++) {
            var a = points[i];
            var b = points[(i + 1) % points.length];
            var dx = b.x - a.x;
            var dy = b.y - a.y;
            var segLen = Math.sqrt(dx * dx + dy * dy);
            if (segLen <= 0)
                continue;
            var dirX = dx / segLen;
            var dirY = dy / segLen;
            var dist = carry;
            while (dist < segLen) {
                samples.push(cc.v2(a.x + dirX * dist, a.y + dirY * dist));
                dist += spacing;
            }
            carry = dist - segLen;
        }
        return samples.length > 0 ? samples : points.slice();
    };
    CordRoundGame.prototype.calcPathLength = function (points) {
        var len = 0;
        for (var i = 0; i < points.length; i++) {
            var a = points[i];
            var b = points[(i + 1) % points.length];
            len += cc.v2(b.x - a.x, b.y - a.y).mag();
        }
        return len;
    };
    CordRoundGame.prototype.clearSegmentColliders = function (cord) {
        var circles = cord.getComponents(cc.PhysicsCircleCollider);
        for (var i = 0; i < circles.length; i++) {
            circles[i].destroy();
        }
    };
    CordRoundGame.prototype.ensureCharmLayer = function () {
        var layer = this.activeCord.getChildByName('charmsOnCord');
        if (!layer) {
            layer = new cc.Node('charmsOnCord');
            layer.parent = this.activeCord;
        }
        this.charmLayer = layer;
    };
    CordRoundGame.prototype.resolveReferences = function () {
        if (!this.plate) {
            var main = this.getMainNode();
            var khay = main.getChildByName('khay');
            if (khay) {
                this.plate = khay;
            }
        }
    };
    CordRoundGame.prototype.bindTouch = function () {
        if (this.touchBound)
            return;
        this.touchBound = true;
        var touchNode = cc.Canvas.instance.node;
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    CordRoundGame.prototype.onTouchStart = function (event) {
        if (!this.isActive || this.draggingCharm)
            return;
        var charm = this.getPlateCharmAt(event.getLocation());
        if (!charm)
            return;
        this.activeTouchId = event.getID();
        this.startDrag(charm, event.getLocation());
        this.setHind(charm);
    };
    CordRoundGame.prototype.onTouchMove = function (event) {
        if (!this.isActive || event.getID() !== this.activeTouchId || !this.draggingCharm)
            return;
        var touchPos = this.getMainLocalPos(event.getLocation());
        var snap = this.getDragSnapPose(touchPos);
        if (snap) {
            this.draggingCharm.setPosition(snap.pos);
            this.draggingCharm.angle = snap.angle;
            this.dragSnapSide = snap.side;
        }
        else {
            this.draggingCharm.setPosition(touchPos);
            this.draggingCharm.angle = 0;
            this.dragSnapSide = null;
        }
    };
    CordRoundGame.prototype.onTouchEnd = function (event) {
        if (!this.isActive || event.getID() !== this.activeTouchId || !this.draggingCharm)
            return;
        var charm = this.draggingCharm;
        var charmWorld = charm.parent.convertToWorldSpaceAR(charm.position);
        var dropAnchor = this.resolveDropAnchor(charmWorld, this.dragSnapSide);
        if (dropAnchor) {
            this.threadCharmOntoCord(charm, dropAnchor);
            this.btnOk.active = true;
            this.hand3.active = false;
        }
        else {
            this.resetDraggedCharm(charm);
        }
        this.draggingCharm = null;
        this.dragSnapSide = null;
        this.activeTouchId = -1;
        if (this.isTargetHind) {
            this.isTargetHind.active = false;
            this.isTargetHind = null;
        }
    };
    CordRoundGame.prototype.setCharmPlatePhysics = function (charm, enabled) {
        var body = charm.getComponent(cc.RigidBody);
        if (body) {
            body.linearVelocity = cc.v2(0, 0);
            body.angularVelocity = 0;
            if (enabled) {
                body.enabled = true;
                body.active = true;
                body.type = cc.RigidBodyType.Dynamic;
                body.gravityScale = 0;
                body.awake = true;
            }
            else {
                body.enabled = false;
                body.active = false;
            }
        }
        var collider = charm.getComponent(cc.PhysicsPolygonCollider);
        if (collider) {
            collider.enabled = enabled;
        }
    };
    CordRoundGame.prototype.startDrag = function (charm, screenPos) {
        this.draggingCharm = charm;
        this.dragOriginParent = charm.parent;
        this.dragOriginPos = charm.position.clone();
        this.dragOriginSiblingIndex = charm.getSiblingIndex();
        this.setCharmPlatePhysics(charm, false);
        var worldPos = charm.parent.convertToWorldSpaceAR(charm.position);
        var main = this.getMainNode();
        charm.parent = main;
        charm.setPosition(main.convertToNodeSpaceAR(worldPos));
        charm.setSiblingIndex(main.childrenCount - 1);
        charm.setPosition(this.getMainLocalPos(screenPos));
    };
    CordRoundGame.prototype.resetDraggedCharm = function (charm) {
        charm.parent = this.dragOriginParent;
        charm.setPosition(this.dragOriginPos);
        charm.setSiblingIndex(this.dragOriginSiblingIndex);
        this.setCharmPlatePhysics(charm, true);
    };
    CordRoundGame.prototype.threadCharmOntoCord = function (charm, dropAnchor) {
        if (!this.canDropOnSide(dropAnchor.side))
            return;
        var path = this.cordPaths.get(this.activeCord);
        if (!path)
            return;
        var anchorPos = dropAnchor.cordPos;
        var startIndex = this.findNearestPathIndex(path.points, anchorPos);
        var pathDir = this.pickPathDirection(path.points, startIndex, dropAnchor.side);
        var pivot = this.setupCharmHangRig(charm);
        pivot.parent = this.charmLayer;
        pivot.setPosition(cc.v3(anchorPos.x, anchorPos.y, 0));
        charm.angle = this.getLocalBoxHangAngle(dropAnchor.side);
        charm.children[0].scale = 0.8;
        var pivotBody = pivot.getComponent(cc.RigidBody);
        var charmBody = charm.getComponent(cc.RigidBody);
        if (pivotBody) {
            pivotBody.syncPosition(true);
            pivotBody.linearVelocity = cc.v2(0, 0);
            pivotBody.angularVelocity = 0;
            pivotBody.gravityScale = 1;
            pivotBody.allowSleep = false;
            pivotBody.awake = true;
            pivotBody.active = true;
            var tangent = this.getTangentAtIndex(path.points, startIndex, pathDir);
            pivotBody.linearVelocity = tangent.mul(75);
        }
        if (charmBody) {
            charmBody.syncPosition(true);
            charmBody.linearVelocity = cc.v2(0, 0);
            charmBody.angularVelocity = 0;
        }
        this.cordCharms.push({
            pivot: pivot,
            charm: charm,
            settled: false,
            stillTime: 0,
            side: dropAnchor.side,
            pathStartIndex: startIndex,
            pathDir: pathDir,
            pathDistance: 0,
        });
    };
    /** Tạo pivot (điểm neo trên dây) + RevoluteJoint; phần dưới charm lung lay theo physics. */
    CordRoundGame.prototype.setupCharmHangRig = function (charm) {
        if (charm.parent && charm.parent.name === 'charmPivot') {
            return charm.parent;
        }
        var hangLocal = this.getHangLocalOffset(charm);
        var layer = charm.parent;
        var worldPos = layer.convertToWorldSpaceAR(charm.position);
        var pivot = new cc.Node('charmPivot');
        pivot.parent = layer;
        pivot.setPosition(layer.convertToNodeSpaceAR(worldPos));
        charm.parent = pivot;
        charm.setPosition(cc.v3(-hangLocal.x, -hangLocal.y, 0));
        charm.angle = 0;
        var pivotBody = pivot.getComponent(cc.RigidBody);
        if (!pivotBody) {
            pivotBody = pivot.addComponent(cc.RigidBody);
        }
        pivotBody.type = cc.RigidBodyType.Dynamic;
        pivotBody.gravityScale = 1;
        pivotBody.linearDamping = 0.22;
        pivotBody.angularDamping = 1;
        pivotBody.fixedRotation = true;
        pivotBody.allowSleep = false;
        var pivotCol = pivot.getComponent(cc.PhysicsCircleCollider);
        if (!pivotCol) {
            pivotCol = pivot.addComponent(cc.PhysicsCircleCollider);
        }
        pivotCol.radius = this.pivotColliderRadius;
        pivotCol.friction = 0.3;
        pivotCol.restitution = 0.05;
        pivotCol.enabled = true;
        var charmBody = charm.getComponent(cc.RigidBody);
        if (!charmBody) {
            charmBody = charm.addComponent(cc.RigidBody);
        }
        charmBody.enabled = true;
        charmBody.active = true;
        charmBody.type = cc.RigidBodyType.Dynamic;
        charmBody.gravityScale = 0.85;
        charmBody.linearDamping = 0.2;
        charmBody.angularDamping = 0.45;
        charmBody.fixedRotation = false;
        charmBody.allowSleep = false;
        this.enableCharmPhysicsCollider(charm);
        var joint = pivot.getComponent(cc.RevoluteJoint);
        if (!joint) {
            joint = pivot.addComponent(cc.RevoluteJoint);
        }
        joint.connectedBody = charmBody;
        joint.anchor = cc.v2(0, 0);
        joint.connectedAnchor = hangLocal;
        joint.collideConnected = false;
        return pivot;
    };
    CordRoundGame.prototype.getHangLocalOffset = function (charm) {
        var item = charm.getComponent('CharmItem');
        if (item && item.getHangLocalOffset) {
            return item.getHangLocalOffset();
        }
        return cc.v2(0, 55);
    };
    CordRoundGame.prototype.enableCharmPhysicsCollider = function (charm) {
        var collider = charm.getComponent(cc.PhysicsPolygonCollider);
        if (collider) {
            collider.enabled = true;
            collider.sensor = false;
            collider.friction = 0.25;
            collider.restitution = 0.08;
        }
    };
    CordRoundGame.prototype.getTangentAtIndex = function (points, index, dir) {
        var nextIdx = this.wrapIndex(index + dir, points.length);
        var a = points[index];
        var b = points[nextIdx];
        var dx = b.x - a.x;
        var dy = b.y - a.y;
        var len = Math.sqrt(dx * dx + dy * dy) || 1;
        return cc.v2(dx / len, dy / len);
    };
    CordRoundGame.prototype.getNearestOnPath = function (points, pos) {
        var bestIndex = 0;
        var bestDist = Number.MAX_VALUE;
        for (var i = 0; i < points.length; i++) {
            var d = cc.v2(points[i].x - pos.x, points[i].y - pos.y).magSqr();
            if (d < bestDist) {
                bestDist = d;
                bestIndex = i;
            }
        }
        return { index: bestIndex, nearest: points[bestIndex] };
    };
    CordRoundGame.prototype.findNearestPathIndex = function (points, pos) {
        var best = 0;
        var bestDist = Number.MAX_VALUE;
        for (var i = 0; i < points.length; i++) {
            var d = cc.v2(points[i].x - pos.x, points[i].y - pos.y).mag();
            if (d < bestDist) {
                bestDist = d;
                best = i;
            }
        }
        return best;
    };
    CordRoundGame.prototype.pickPathDirection = function (points, entryIndex, side) {
        var _this = this;
        var score = function (dir) {
            var s = 0;
            var idx = entryIndex;
            for (var k = 0; k < 40; k++) {
                idx = _this.wrapIndex(idx + dir, points.length);
                var p = points[idx];
                s += -p.y * 0.5;
                if (side === 'left') {
                    s += p.x < 0 ? 3 : -1;
                }
                else {
                    s += p.x > 0 ? 3 : -1;
                }
            }
            return s;
        };
        return score(1) >= score(-1) ? 1 : -1;
    };
    CordRoundGame.prototype.getPoseOnPath = function (points, startIndex, dir, distance) {
        var idx = startIndex;
        var remain = distance;
        var maxStep = points.length + 2;
        for (var step = 0; step < maxStep; step++) {
            var nextIdx = this.wrapIndex(idx + dir, points.length);
            var a = points[idx];
            var b = points[nextIdx];
            var dx = b.x - a.x;
            var dy = b.y - a.y;
            var segLen = Math.sqrt(dx * dx + dy * dy);
            if (segLen <= 0) {
                idx = nextIdx;
                continue;
            }
            if (remain <= segLen) {
                var t = remain / segLen;
                var x = a.x + dx * t;
                var y = a.y + dy * t;
                var angle = Math.atan2(dy, dx) * 180 / Math.PI - 90;
                return { x: x, y: y, angle: angle };
            }
            remain -= segLen;
            idx = nextIdx;
        }
        var last = points[idx];
        return { x: last.x, y: last.y, angle: 0 };
    };
    CordRoundGame.prototype.wrapIndex = function (index, length) {
        if (index < 0)
            return length + index;
        if (index >= length)
            return index - length;
        return index;
    };
    CordRoundGame.prototype.getMaxSlideDistance = function (state) {
        var path = this.cordPaths.get(this.activeCord);
        if (!path)
            return 0;
        return path.totalLength * 0.52;
    };
    CordRoundGame.prototype.updateCharmSlide = function (state, dt) {
        var body = state.pivot.getComponent(cc.RigidBody);
        var path = this.cordPaths.get(this.activeCord);
        if (!body || !path)
            return;
        var pos = cc.v2(state.pivot.x, state.pivot.y);
        var onPath = this.getNearestOnPath(path.points, pos);
        var tangent = this.getTangentAtIndex(path.points, onPath.index, state.pathDir);
        state.pathDistance = this.getDistanceAlongPath(path.points, state.pathStartIndex, state.pathDir, pos);
        if (!state.settled) {
            var toPathX = onPath.nearest.x - pos.x;
            var toPathY = onPath.nearest.y - pos.y;
            var tx = tangent.x;
            var ty = tangent.y;
            var nx = -ty;
            var ny = tx;
            var vel = body.linearVelocity;
            var vTangent = vel.x * tx + vel.y * ty;
            var vNormal = vel.x * nx + vel.y * ny;
            var offsetNormal = toPathX * nx + toPathY * ny;
            var newVTangent = vTangent + this.slideGravity * dt;
            var newVNormal = vNormal
                + offsetNormal * this.pathPullStrength * dt
                - vNormal * this.pathPullDamping * dt;
            var vx = tx * newVTangent + nx * newVNormal;
            var vy = ty * newVTangent + ny * newVNormal;
            var speed_1 = Math.sqrt(vx * vx + vy * vy);
            if (speed_1 > this.maxSlideSpeed) {
                var scale = this.maxSlideSpeed / speed_1;
                vx *= scale;
                vy *= scale;
            }
            body.linearVelocity = cc.v2(vx, vy);
            if (state.pathDistance >= this.getMaxSlideDistance(state) - 2) {
                state.settled = true;
            }
        }
        var speed = body.linearVelocity.mag();
        var minSlide = Math.min(24, this.getMaxSlideDistance(state) * 0.12);
        if (speed < this.settleSpeed && state.pathDistance >= minSlide) {
            state.stillTime += dt;
            if (state.stillTime >= 0.35) {
                state.settled = true;
            }
        }
        else {
            state.stillTime = 0;
        }
        if (state.settled) {
            body.gravityScale = 0;
            body.linearDamping = 1.8;
            body.angularDamping = 1.2;
            body.allowSleep = true;
            var toPathX = onPath.nearest.x - pos.x;
            var toPathY = onPath.nearest.y - pos.y;
            var holdDamp = this.pathPullDamping * 1.5;
            body.linearVelocity = cc.v2(body.linearVelocity.x + toPathX * this.pathPullStrength * dt * 0.35 - body.linearVelocity.x * holdDamp * dt, body.linearVelocity.y + toPathY * this.pathPullStrength * dt * 0.35 - body.linearVelocity.y * holdDamp * dt);
            var offset = Math.sqrt(toPathX * toPathX + toPathY * toPathY);
            if (offset < 1.5 && body.linearVelocity.mag() < 8) {
                body.linearVelocity = cc.v2(0, 0);
                state.pivot.setPosition(cc.v3(onPath.nearest.x, onPath.nearest.y, 0));
                body.syncPosition(true);
            }
        }
    };
    CordRoundGame.prototype.getDistanceAlongPath = function (points, startIndex, dir, pos) {
        var nearest = this.getNearestOnPath(points, pos);
        var dist = 0;
        var idx = startIndex;
        var target = nearest.index;
        var guard = 0;
        while (idx !== target && guard < points.length + 1) {
            var nextIdx = this.wrapIndex(idx + dir, points.length);
            var a = points[idx];
            var b = points[nextIdx];
            dist += cc.v2(b.x - a.x, b.y - a.y).mag();
            idx = nextIdx;
            guard++;
        }
        var segA = points[idx];
        dist += cc.v2(pos.x - segA.x, pos.y - segA.y).mag();
        return dist;
    };
    CordRoundGame.prototype.getAngleInNodeSpace = function (node, root) {
        var angle = node.angle;
        var parent = node.parent;
        while (parent && parent !== root) {
            angle += parent.angle;
            parent = parent.parent;
        }
        return angle;
    };
    CordRoundGame.prototype.getSideMaxSlideDistance = function () {
        var path = this.cordPaths.get(this.activeCord);
        if (!path)
            return 0;
        return path.totalLength * 0.52;
    };
    CordRoundGame.prototype.measurePathDistanceFromEntry = function (side, pos, pathDir) {
        var path = this.cordPaths.get(this.activeCord);
        var anchors = this.getCordAnchorPositions();
        if (!path || !anchors)
            return 0;
        var entry = side === 'left' ? anchors.left : anchors.right;
        var entryIndex = this.findNearestPathIndex(path.points, entry);
        var dir = pathDir !== undefined
            ? pathDir
            : this.pickPathDirection(path.points, entryIndex, side);
        return this.getDistanceAlongPath(path.points, entryIndex, dir, pos);
    };
    CordRoundGame.prototype.getCharmPathDistance = function (state) {
        if (!state.pivot)
            return state.pathDistance;
        var pos = cc.v2(state.pivot.x, state.pivot.y);
        return this.measurePathDistanceFromEntry(state.side, pos, state.pathDir);
    };
    CordRoundGame.prototype.getCharmsOnSide = function (side) {
        var result = [];
        for (var i = 0; i < this.cordCharms.length; i++) {
            if (this.cordCharms[i].side === side) {
                result.push(this.cordCharms[i]);
            }
        }
        return result;
    };
    CordRoundGame.prototype.getMinPathDistanceOnSide = function (side) {
        var onSide = this.getCharmsOnSide(side);
        if (onSide.length === 0)
            return Number.MAX_VALUE;
        var minDist = Number.MAX_VALUE;
        for (var i = 0; i < onSide.length; i++) {
            var d = this.getCharmPathDistance(onSide[i]);
            if (d < minDist) {
                minDist = d;
            }
        }
        return minDist;
    };
    CordRoundGame.prototype.canDropOnSide = function (side) {
        var onSide = this.getCharmsOnSide(side);
        if (onSide.length === 0)
            return true;
        return this.getMinPathDistanceOnSide(side) >= this.charmSlotSpacing;
    };
    CordRoundGame.prototype.pickAvailableSide = function (nearLeft, nearRight, distLeft, distRight, preferLeft) {
        var candidates = [];
        if (nearLeft)
            candidates.push({ side: 'left', dist: distLeft });
        if (nearRight)
            candidates.push({ side: 'right', dist: distRight });
        if (candidates.length === 0)
            return null;
        candidates.sort(function (a, b) {
            if (preferLeft !== undefined) {
                var aPref = (a.side === 'left') === preferLeft ? 0 : 1;
                var bPref = (b.side === 'left') === preferLeft ? 0 : 1;
                if (aPref !== bPref)
                    return aPref - bPref;
            }
            return a.dist - b.dist;
        });
        for (var i = 0; i < candidates.length; i++) {
            if (this.canDropOnSide(candidates[i].side)) {
                return candidates[i].side;
            }
        }
        return null;
    };
    CordRoundGame.prototype.resolveDropAnchor = function (worldPos, preferredSide) {
        if (preferredSide === void 0) { preferredSide = null; }
        if (!this.activeCord)
            return null;
        var anchors = this.getCordAnchorPositions();
        if (!anchors)
            return null;
        var local = this.activeCord.convertToNodeSpaceAR(worldPos);
        var leftPos = anchors.left;
        var rightPos = anchors.right;
        var distLeft = cc.v2(local.x - leftPos.x, local.y - leftPos.y).mag();
        var distRight = cc.v2(local.x - rightPos.x, local.y - rightPos.y).mag();
        var nearLeft = distLeft <= this.entryDetectRadius;
        var nearRight = distRight <= this.entryDetectRadius;
        var preferLeft = local.x < (leftPos.x + rightPos.x) * 0.5;
        var preferSide = preferLeft ? 'left' : 'right';
        if (preferredSide && this.canDropOnSide(preferredSide)) {
            return {
                side: preferredSide,
                cordPos: preferredSide === 'left' ? leftPos : rightPos,
            };
        }
        if (preferredSide && !this.canDropOnSide(preferredSide)) {
            var alt = preferSide;
            if (alt !== preferredSide && this.canDropOnSide(alt)) {
                return {
                    side: alt,
                    cordPos: alt === 'left' ? leftPos : rightPos,
                };
            }
        }
        if (nearLeft || nearRight) {
            var side_1 = this.pickAvailableSide(nearLeft, nearRight, distLeft, distRight);
            if (side_1) {
                return {
                    side: side_1,
                    cordPos: side_1 === 'left' ? leftPos : rightPos,
                };
            }
        }
        var topY = Math.max(leftPos.y, rightPos.y) - 20;
        var minX = Math.min(leftPos.x, rightPos.x) - 30;
        var maxX = Math.max(leftPos.x, rightPos.x) + 30;
        var inTopZone = local.y >= topY - this.entryDetectRadius
            && local.x >= minX
            && local.x <= maxX;
        if (!inTopZone)
            return null;
        var side = this.pickAvailableSide(true, true, distLeft, distRight, preferLeft);
        if (!side)
            return null;
        return {
            side: side,
            cordPos: side === 'left' ? leftPos : rightPos,
        };
    };
    CordRoundGame.prototype.getLocalBoxSnapPose = function (side) {
        var children = this.getLocalBoxSideChildren();
        if (!children)
            return null;
        var target = side === 'left' ? children.left : children.right;
        var main = this.getMainNode();
        var local = main.convertToNodeSpaceAR(target.convertToWorldSpaceAR(cc.v2(0, 0)));
        return {
            pos: cc.v3(local.x, local.y, 0),
            angle: this.getAngleInNodeSpace(target, main),
        };
    };
    CordRoundGame.prototype.getDragSnapPose = function (mainPos) {
        var anchors = this.getCordAnchorPositions();
        if (!anchors || !this.activeCord)
            return null;
        var main = this.getMainNode();
        var leftMain = main.convertToNodeSpaceAR(this.activeCord.convertToWorldSpaceAR(anchors.left));
        var rightMain = main.convertToNodeSpaceAR(this.activeCord.convertToWorldSpaceAR(anchors.right));
        var distLeft = cc.v2(mainPos.x - leftMain.x, mainPos.y - leftMain.y).mag();
        var distRight = cc.v2(mainPos.x - rightMain.x, mainPos.y - rightMain.y).mag();
        var nearLeft = distLeft <= this.entryDetectRadius;
        var nearRight = distRight <= this.entryDetectRadius;
        var side = null;
        if (nearLeft || nearRight) {
            side = this.pickAvailableSide(nearLeft, nearRight, distLeft, distRight);
        }
        else {
            var cordLocal = this.activeCord.convertToNodeSpaceAR(main.convertToWorldSpaceAR(cc.v2(mainPos.x, mainPos.y)));
            var leftPos = anchors.left;
            var rightPos = anchors.right;
            var topY = Math.max(leftPos.y, rightPos.y) - 20;
            var minX = Math.min(leftPos.x, rightPos.x) - 30;
            var maxX = Math.max(leftPos.x, rightPos.x) + 30;
            var inTopZone = cordLocal.y >= topY - this.entryDetectRadius
                && cordLocal.x >= minX
                && cordLocal.x <= maxX;
            if (inTopZone) {
                var preferLeft = cordLocal.x < (leftPos.x + rightPos.x) * 0.5;
                side = this.pickAvailableSide(true, true, distLeft, distRight, preferLeft);
            }
        }
        if (!side)
            return null;
        var snap = this.getLocalBoxSnapPose(side);
        if (snap) {
            return { pos: snap.pos, angle: snap.angle, side: side };
        }
        return null;
    };
    CordRoundGame.prototype.getLocalBoxSideChildren = function () {
        if (!this.localBox || this.localBox.childrenCount < 2)
            return null;
        var leftByName = this.localBox.getChildByName('left');
        var rightByName = this.localBox.getChildByName('right');
        if (leftByName && rightByName) {
            return { left: leftByName, right: rightByName };
        }
        var childA = this.localBox.children[0];
        var childB = this.localBox.children[1];
        return childA.x <= childB.x
            ? { left: childA, right: childB }
            : { left: childB, right: childA };
    };
    CordRoundGame.prototype.getLocalBoxHangAngle = function (side) {
        var children = this.getLocalBoxSideChildren();
        if (!children)
            return 0;
        return side === 'left' ? children.left.angle : children.right.angle;
    };
    CordRoundGame.prototype.getLocalBoxAnchorPositions = function () {
        var children = this.getLocalBoxSideChildren();
        if (!children || !this.activeCord)
            return null;
        var posLeft = this.activeCord.convertToNodeSpaceAR(children.left.convertToWorldSpaceAR(cc.v2(0, 0)));
        var posRight = this.activeCord.convertToNodeSpaceAR(children.right.convertToWorldSpaceAR(cc.v2(0, 0)));
        return { left: posLeft, right: posRight };
    };
    CordRoundGame.prototype.getCordAnchorPositions = function () {
        var localBoxAnchors = this.getLocalBoxAnchorPositions();
        if (localBoxAnchors)
            return localBoxAnchors;
        if (!this.leftAnchor || !this.rightAnchor)
            return null;
        return {
            left: cc.v2(this.leftAnchor.x, this.leftAnchor.y),
            right: cc.v2(this.rightAnchor.x, this.rightAnchor.y),
        };
    };
    CordRoundGame.prototype.getDropAnchorForSide = function (side) {
        if (!this.canDropOnSide(side))
            return null;
        var anchors = this.getCordAnchorPositions();
        if (!anchors)
            return null;
        return {
            side: side,
            cordPos: side === 'left' ? anchors.left : anchors.right,
        };
    };
    CordRoundGame.prototype.getPlateCharmAt = function (screenPos) {
        if (!this.plate)
            return null;
        for (var i = this.plate.childrenCount - 1; i >= 0; i--) {
            var child = this.plate.children[i];
            if (!child.active || !child.getComponent('CharmItem'))
                continue;
            if (this.isCharmOnCord(child))
                continue;
            var rect = child.getBoundingBoxToWorld();
            if (rect.contains(screenPos)) {
                return child;
            }
        }
        return null;
    };
    CordRoundGame.prototype.isCharmOnCord = function (charm) {
        for (var i = 0; i < this.cordCharms.length; i++) {
            var state = this.cordCharms[i];
            if (state.charm === charm || state.pivot === charm)
                return true;
            if (charm.parent === state.pivot)
                return true;
        }
        return false;
    };
    CordRoundGame.prototype.getMainLocalPos = function (screenPos) {
        return this.getMainNode().convertToNodeSpaceAR(screenPos);
    };
    CordRoundGame.prototype.getMainNode = function () {
        var node = this.node;
        while (node.parent) {
            if (node.parent.name === 'main' || node.parent.name === 'Canvas') {
                return node.parent.name === 'main' ? node.parent : node;
            }
            node = node.parent;
        }
        return this.CordRoundList.parent || this.node;
    };
    CordRoundGame.prototype.update = function (dt) {
        if (!this.isActive)
            return;
        for (var i = 0; i < this.cordCharms.length; i++) {
            this.updateCharmSlide(this.cordCharms[i], dt);
        }
    };
    __decorate([
        property(cc.Node)
    ], CordRoundGame.prototype, "CordRoundList", void 0);
    __decorate([
        property(cc.Node)
    ], CordRoundGame.prototype, "plate", void 0);
    __decorate([
        property(cc.Node)
    ], CordRoundGame.prototype, "charmHind", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "entryDetectRadius", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "pathSampleSpacing", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "segmentRadius", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "slideGravity", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "maxSlideSpeed", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "pathPullStrength", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "pathPullDamping", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "settleSpeed", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "pivotColliderRadius", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "charmSlotSpacing", void 0);
    __decorate([
        property(cc.Node)
    ], CordRoundGame.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Node)
    ], CordRoundGame.prototype, "hand3", void 0);
    CordRoundGame = __decorate([
        ccclass
    ], CordRoundGame);
    return CordRoundGame;
}(cc.Component));
exports.default = CordRoundGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ29yZFJvdW5kR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQTBCNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUF5Z0NDO1FBdGdDRyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFHekIsdUJBQWlCLEdBQVcsR0FBRyxDQUFDO1FBR2hDLHVCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUcvQixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUczQixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUczQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc1QixzQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFHL0IscUJBQWUsR0FBVyxFQUFFLENBQUM7UUFHN0IsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFHekIseUJBQW1CLEdBQVcsQ0FBQyxDQUFDO1FBR2hDLHNCQUFnQixHQUFXLEdBQUcsQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFTLEdBQStCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbEQsbUJBQWEsR0FBYyxFQUFFLENBQUM7UUFDOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZ0JBQVUsR0FBcUIsRUFBRSxDQUFDO1FBQ2xDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBQzlCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxtQkFBYSxHQUFZLElBQUksQ0FBQztR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QWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F5Z0NqQztJQUFELG9CQUFDO0NBemdDRCxBQXlnQ0MsQ0F6Z0MwQyxFQUFFLENBQUMsU0FBUyxHQXlnQ3REO2tCQXpnQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxudHlwZSBDb3JkU2lkZSA9ICdsZWZ0JyB8ICdyaWdodCc7XHJcblxyXG5pbnRlcmZhY2UgQ29yZFBhdGhEYXRhIHtcclxuICAgIHBvaW50czogY2MuVmVjMltdO1xyXG4gICAgdG90YWxMZW5ndGg6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvcmRDaGFybVN0YXRlIHtcclxuICAgIHBpdm90OiBjYy5Ob2RlO1xyXG4gICAgY2hhcm06IGNjLk5vZGU7XHJcbiAgICBzZXR0bGVkOiBib29sZWFuO1xyXG4gICAgc3RpbGxUaW1lOiBudW1iZXI7XHJcbiAgICBzaWRlOiBDb3JkU2lkZTtcclxuICAgIHBhdGhTdGFydEluZGV4OiBudW1iZXI7XHJcbiAgICBwYXRoRGlyOiBudW1iZXI7XHJcbiAgICBwYXRoRGlzdGFuY2U6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIERyb3BBbmNob3Ige1xyXG4gICAgc2lkZTogQ29yZFNpZGU7XHJcbiAgICBjb3JkUG9zOiBjYy5WZWMyO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JkUm91bmRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENvcmRSb3VuZExpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFybUhpbmQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBlbnRyeURldGVjdFJhZGl1czogbnVtYmVyID0gMTEwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGF0aFNhbXBsZVNwYWNpbmc6IG51bWJlciA9IDEyO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2VnbWVudFJhZGl1czogbnVtYmVyID0gMTQ7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzbGlkZUdyYXZpdHk6IG51bWJlciA9IDMyMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heFNsaWRlU3BlZWQ6IG51bWJlciA9IDI4MDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBhdGhQdWxsU3RyZW5ndGg6IG51bWJlciA9IDQyMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBhdGhQdWxsRGFtcGluZzogbnVtYmVyID0gMTY7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzZXR0bGVTcGVlZDogbnVtYmVyID0gMjI7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwaXZvdENvbGxpZGVyUmFkaXVzOiBudW1iZXIgPSA4O1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY2hhcm1TbG90U3BhY2luZzogbnVtYmVyID0gMTMwO1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlQ29yZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvcmRQYXRoczogTWFwPGNjLk5vZGUsIENvcmRQYXRoRGF0YT4gPSBuZXcgTWFwKCk7XHJcbiAgICBwcml2YXRlIHByZXBhcmVkQ29yZHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBsZWZ0QW5jaG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgcmlnaHRBbmNob3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjaGFybUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29yZENoYXJtczogQ29yZENoYXJtU3RhdGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBkcmFnZ2luZ0NoYXJtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHJhZ1NuYXBTaWRlOiBDb3JkU2lkZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdPcmlnaW5QYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3JpZ2luUG9zOiBjYy5WZWMzID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHJhZ09yaWdpblNpYmxpbmdJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYWN0aXZlVG91Y2hJZDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRvdWNoQm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuT2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kMzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgbG9jYWxCb3ggPSBudWxsXHJcbiAgICBsaWZ0QnJhY2VsZXQodGFyZ2V0UG9zOiBjYy5WZWMzLCBkdXJhdGlvbjogbnVtYmVyID0gMC40KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLkNvcmRSb3VuZExpc3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBib2RpZXM6IGNjLlJpZ2lkQm9keVtdID0gW107XHJcbiAgICAgICAgY29uc3QgY29sbGVjdEJvZGllcyA9IChub2RlOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9kaWVzLnB1c2goYm9keSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29sbGVjdEJvZGllcyhub2RlLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29sbGVjdEJvZGllcyh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gYm9kaWVzW2ldO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5LaW5lbWF0aWM7XHJcbiAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3luY0JvZGllcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGJvZGllc1tpXS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBib2RpZXNbaV0uc3luY1JvdGF0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgcG9zaXRpb246IHRhcmdldFBvcyB9LCB7IG9uVXBkYXRlOiBzeW5jQm9kaWVzIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN5bmNCb2RpZXMoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBpc1RhcmdldEhpbmQgPSBudWxsXHJcblxyXG4gICAgc2V0SGluZChjaGFybSkge1xyXG4gICAgICAgIGxldCB0YWcgPSBjaGFybS5nZXRDb21wb25lbnQoXCJDaGFybUl0ZW1cIikudGFnXHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEhpbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEhpbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhcm1IaW5kLmNoaWxkcmVuW3RhZ10uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzVGFyZ2V0SGluZCA9IHRoaXMuY2hhcm1IaW5kLmNoaWxkcmVuW3RhZ107XHJcbiAgICAgICAgbGV0IGNvbG9ySU1HID0gY2hhcm0uZ2V0Q29tcG9uZW50KFwiQ2hhcm1JdGVtXCIpLmdldENvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5jaGFybUhpbmQuY2hpbGRyZW5bdGFnXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGNvbG9ySU1HO1xyXG4gICAgICAgIHRoaXMuY2hhcm1IaW5kLmNoaWxkcmVuW3RhZ10uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBjb2xvcklNRztcclxuICAgICAgICB0aGlzLmxvY2FsQm94ID0gdGhpcy5jaGFybUhpbmQuY2hpbGRyZW5bdGFnXTtcclxuICAgIH1cclxuICAgIHN0YXJ0QnJhY2VsZXRNb2RlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5Db3JkUm91bmRMaXN0KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlUmVmZXJlbmNlcygpO1xyXG5cclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNvcmQgPSB0aGlzLkNvcmRSb3VuZExpc3QuY2hpbGRyZW5bZ2xvYmFsVGhpcy5pZFN0cmluZ107XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0QW5jaG9yID0gdGhpcy5hY3RpdmVDb3JkLmdldENoaWxkQnlOYW1lKCdsZWZ0Jyk7XHJcbiAgICAgICAgdGhpcy5yaWdodEFuY2hvciA9IHRoaXMuYWN0aXZlQ29yZC5nZXRDaGlsZEJ5TmFtZSgncmlnaHQnKTtcclxuICAgICAgICBpZiAoIXRoaXMubGVmdEFuY2hvciB8fCAhdGhpcy5yaWdodEFuY2hvcikge1xyXG4gICAgICAgICAgICBjYy53YXJuKCdbQ29yZFJvdW5kR2FtZV0gQ29yZCBpcyBtaXNzaW5nIGxlZnQvcmlnaHQgYW5jaG9yIG5vZGVzLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAtNTIwKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQ29yZFJvdW5kTGlzdC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ29yZCh0aGlzLkNvcmRSb3VuZExpc3QuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuc3VyZUNoYXJtTGF5ZXIoKTtcclxuICAgICAgICB0aGlzLmJpbmRUb3VjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJlcGFyZUNvcmQoY29yZDogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByZXBhcmVkQ29yZHMuaW5kZXhPZihjb3JkKSA+PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJhd1BvaW50cyA9IHRoaXMuZ2V0UG9seWdvbkNvbGxpZGVyUG9pbnRzKGNvcmQpO1xyXG4gICAgICAgIGlmIChyYXdQb2ludHMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICBjYy53YXJuKCdbQ29yZFJvdW5kR2FtZV0gQ29yZCBcIicgKyBjb3JkLm5hbWUgKyAnXCIgbmVlZHMgY2MuUG9seWdvbkNvbGxpZGVyLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzYW1wbGVzID0gdGhpcy5zYW1wbGVBbG9uZ1BhdGgocmF3UG9pbnRzLCB0aGlzLnBhdGhTYW1wbGVTcGFjaW5nKTtcclxuICAgICAgICB0aGlzLmNvcmRQYXRocy5zZXQoY29yZCwge1xyXG4gICAgICAgICAgICBwb2ludHM6IHNhbXBsZXMsXHJcbiAgICAgICAgICAgIHRvdGFsTGVuZ3RoOiB0aGlzLmNhbGNQYXRoTGVuZ3RoKHNhbXBsZXMpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwQ29yZFBoeXNpY3MoY29yZCwgc2FtcGxlcyk7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlZENvcmRzLnB1c2goY29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQb2x5Z29uQ29sbGlkZXJQb2ludHMoY29yZDogY2MuTm9kZSk6IGNjLlZlYzJbXSB7XHJcbiAgICAgICAgY29uc3QgcG9seSA9IGNvcmQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgaWYgKCFwb2x5IHx8ICFwb2x5LnBvaW50cyB8fCBwb2x5LnBvaW50cy5sZW5ndGggPCAyKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHBvbHkub2Zmc2V0IHx8IGNjLnYyKDAsIDApO1xyXG4gICAgICAgIHJldHVybiBwb2x5LnBvaW50cy5tYXAocCA9PiBjYy52MihwLnggKyBvZmZzZXQueCwgcC55ICsgb2Zmc2V0LnkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHVwQ29yZFBoeXNpY3MoY29yZDogY2MuTm9kZSwgc2FtcGxlczogY2MuVmVjMltdKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBjb3JkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghYm9keSkge1xyXG4gICAgICAgICAgICBib2R5ID0gY29yZC5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcbiAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgYm9keS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU2VnbWVudENvbGxpZGVycyhjb3JkKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IE1hdGgubWF4KHRoaXMucGF0aFNhbXBsZVNwYWNpbmcgKiAxLjUsIDE2KTtcclxuICAgICAgICBjb25zdCBjb2xsaWRlclBvaW50cyA9IHNhbXBsZXMubGVuZ3RoID4gODBcclxuICAgICAgICAgICAgPyB0aGlzLnNhbXBsZUFsb25nUGF0aChzYW1wbGVzLCBzcGFjaW5nKVxyXG4gICAgICAgICAgICA6IHNhbXBsZXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZXJQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gY29yZC5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICAgICAgY29sLm9mZnNldCA9IGNvbGxpZGVyUG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb2wucmFkaXVzID0gdGhpcy5zZWdtZW50UmFkaXVzO1xyXG4gICAgICAgICAgICBjb2wuZnJpY3Rpb24gPSAwLjM1O1xyXG4gICAgICAgICAgICBjb2wucmVzdGl0dXRpb24gPSAwLjA1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhbXBsZUFsb25nUGF0aChwb2ludHM6IGNjLlZlYzJbXSwgc3BhY2luZzogbnVtYmVyKTogY2MuVmVjMltdIHtcclxuICAgICAgICBjb25zdCBzYW1wbGVzOiBjYy5WZWMyW10gPSBbXTtcclxuICAgICAgICBsZXQgY2FycnkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzWyhpICsgMSkgJSBwb2ludHMubGVuZ3RoXTtcclxuICAgICAgICAgICAgY29uc3QgZHggPSBiLnggLSBhLng7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gYi55IC0gYS55O1xyXG4gICAgICAgICAgICBjb25zdCBzZWdMZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgICAgICBpZiAoc2VnTGVuIDw9IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlyWCA9IGR4IC8gc2VnTGVuO1xyXG4gICAgICAgICAgICBjb25zdCBkaXJZID0gZHkgLyBzZWdMZW47XHJcbiAgICAgICAgICAgIGxldCBkaXN0ID0gY2Fycnk7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoZGlzdCA8IHNlZ0xlbikge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlcy5wdXNoKGNjLnYyKGEueCArIGRpclggKiBkaXN0LCBhLnkgKyBkaXJZICogZGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgZGlzdCArPSBzcGFjaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gZGlzdCAtIHNlZ0xlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzYW1wbGVzLmxlbmd0aCA+IDAgPyBzYW1wbGVzIDogcG9pbnRzLnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjUGF0aExlbmd0aChwb2ludHM6IGNjLlZlYzJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGxlbiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHBvaW50c1soaSArIDEpICUgcG9pbnRzLmxlbmd0aF07XHJcbiAgICAgICAgICAgIGxlbiArPSBjYy52MihiLnggLSBhLngsIGIueSAtIGEueSkubWFnKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhclNlZ21lbnRDb2xsaWRlcnMoY29yZDogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGNpcmNsZXMgPSBjb3JkLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpcmNsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2lyY2xlc1tpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5zdXJlQ2hhcm1MYXllcigpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLmFjdGl2ZUNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ2NoYXJtc09uQ29yZCcpO1xyXG4gICAgICAgIGlmICghbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSBuZXcgY2MuTm9kZSgnY2hhcm1zT25Db3JkJyk7XHJcbiAgICAgICAgICAgIGxheWVyLnBhcmVudCA9IHRoaXMuYWN0aXZlQ29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFybUxheWVyID0gbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlUmVmZXJlbmNlcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbiA9IHRoaXMuZ2V0TWFpbk5vZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qga2hheSA9IG1haW4uZ2V0Q2hpbGRCeU5hbWUoJ2toYXknKTtcclxuICAgICAgICAgICAgaWYgKGtoYXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdGUgPSBraGF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmluZFRvdWNoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvdWNoQm91bmQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnRvdWNoQm91bmQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCB0b3VjaE5vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IHRoaXMuZHJhZ2dpbmdDaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuZ2V0UGxhdGVDaGFybUF0KGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGlmICghY2hhcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVUb3VjaElkID0gZXZlbnQuZ2V0SUQoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0RHJhZyhjaGFybSwgZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5zZXRIaW5kKGNoYXJtKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgZXZlbnQuZ2V0SUQoKSAhPT0gdGhpcy5hY3RpdmVUb3VjaElkIHx8ICF0aGlzLmRyYWdnaW5nQ2hhcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLmdldE1haW5Mb2NhbFBvcyhldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBjb25zdCBzbmFwID0gdGhpcy5nZXREcmFnU25hcFBvc2UodG91Y2hQb3MpO1xyXG4gICAgICAgIGlmIChzbmFwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdDaGFybS5zZXRQb3NpdGlvbihzbmFwLnBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdDaGFybS5hbmdsZSA9IHNuYXAuYW5nbGU7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ1NuYXBTaWRlID0gc25hcC5zaWRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdDaGFybS5zZXRQb3NpdGlvbih0b3VjaFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdDaGFybS5hbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ1NuYXBTaWRlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IGV2ZW50LmdldElEKCkgIT09IHRoaXMuYWN0aXZlVG91Y2hJZCB8fCAhdGhpcy5kcmFnZ2luZ0NoYXJtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gdGhpcy5kcmFnZ2luZ0NoYXJtO1xyXG4gICAgICAgIGNvbnN0IGNoYXJtV29ybGQgPSBjaGFybS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoYXJtLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBkcm9wQW5jaG9yID0gdGhpcy5yZXNvbHZlRHJvcEFuY2hvcihjaGFybVdvcmxkLCB0aGlzLmRyYWdTbmFwU2lkZSk7XHJcbiAgICAgICAgaWYgKGRyb3BBbmNob3IpIHtcclxuICAgICAgICAgICAgdGhpcy50aHJlYWRDaGFybU9udG9Db3JkKGNoYXJtLCBkcm9wQW5jaG9yKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Pay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmQzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXREcmFnZ2VkQ2hhcm0oY2hhcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRyYWdTbmFwU2lkZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUb3VjaElkID0gLTE7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRIaW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRIaW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0SGluZCA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDaGFybVBsYXRlUGh5c2ljcyhjaGFybTogY2MuTm9kZSwgZW5hYmxlZDogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgaWYgKGVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgICAgICAgICBib2R5LmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29sbGlkZXIgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLmVuYWJsZWQgPSBlbmFibGVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0RHJhZyhjaGFybTogY2MuTm9kZSwgc2NyZWVuUG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtID0gY2hhcm07XHJcbiAgICAgICAgdGhpcy5kcmFnT3JpZ2luUGFyZW50ID0gY2hhcm0ucGFyZW50O1xyXG4gICAgICAgIHRoaXMuZHJhZ09yaWdpblBvcyA9IGNoYXJtLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5kcmFnT3JpZ2luU2libGluZ0luZGV4ID0gY2hhcm0uZ2V0U2libGluZ0luZGV4KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2hhcm1QbGF0ZVBoeXNpY3MoY2hhcm0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBjaGFybS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoYXJtLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgIGNoYXJtLnBhcmVudCA9IG1haW47XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24obWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcykpO1xyXG4gICAgICAgIGNoYXJtLnNldFNpYmxpbmdJbmRleChtYWluLmNoaWxkcmVuQ291bnQgLSAxKTtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbih0aGlzLmdldE1haW5Mb2NhbFBvcyhzY3JlZW5Qb3MpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0RHJhZ2dlZENoYXJtKGNoYXJtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gdGhpcy5kcmFnT3JpZ2luUGFyZW50O1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKHRoaXMuZHJhZ09yaWdpblBvcyk7XHJcbiAgICAgICAgY2hhcm0uc2V0U2libGluZ0luZGV4KHRoaXMuZHJhZ09yaWdpblNpYmxpbmdJbmRleCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2hhcm1QbGF0ZVBoeXNpY3MoY2hhcm0sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGhyZWFkQ2hhcm1PbnRvQ29yZChjaGFybTogY2MuTm9kZSwgZHJvcEFuY2hvcjogRHJvcEFuY2hvcikge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5Ecm9wT25TaWRlKGRyb3BBbmNob3Iuc2lkZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBhbmNob3JQb3MgPSBkcm9wQW5jaG9yLmNvcmRQb3M7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMuZmluZE5lYXJlc3RQYXRoSW5kZXgocGF0aC5wb2ludHMsIGFuY2hvclBvcyk7XHJcbiAgICAgICAgY29uc3QgcGF0aERpciA9IHRoaXMucGlja1BhdGhEaXJlY3Rpb24ocGF0aC5wb2ludHMsIHN0YXJ0SW5kZXgsIGRyb3BBbmNob3Iuc2lkZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpdm90ID0gdGhpcy5zZXR1cENoYXJtSGFuZ1JpZyhjaGFybSk7XHJcbiAgICAgICAgcGl2b3QucGFyZW50ID0gdGhpcy5jaGFybUxheWVyO1xyXG4gICAgICAgIHBpdm90LnNldFBvc2l0aW9uKGNjLnYzKGFuY2hvclBvcy54LCBhbmNob3JQb3MueSwgMCkpO1xyXG4gICAgICAgIGNoYXJtLmFuZ2xlID0gdGhpcy5nZXRMb2NhbEJveEhhbmdBbmdsZShkcm9wQW5jaG9yLnNpZGUpO1xyXG4gICAgICAgIGNoYXJtLmNoaWxkcmVuWzBdLnNjYWxlID0gMC44O1xyXG5cclxuICAgICAgICBjb25zdCBwaXZvdEJvZHkgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBjb25zdCBjaGFybUJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAocGl2b3RCb2R5KSB7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFuZ2VudCA9IHRoaXMuZ2V0VGFuZ2VudEF0SW5kZXgocGF0aC5wb2ludHMsIHN0YXJ0SW5kZXgsIHBhdGhEaXIpO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkgPSB0YW5nZW50Lm11bCg3NSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFybUJvZHkpIHtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb3JkQ2hhcm1zLnB1c2goe1xyXG4gICAgICAgICAgICBwaXZvdCxcclxuICAgICAgICAgICAgY2hhcm0sXHJcbiAgICAgICAgICAgIHNldHRsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGlsbFRpbWU6IDAsXHJcbiAgICAgICAgICAgIHNpZGU6IGRyb3BBbmNob3Iuc2lkZSxcclxuICAgICAgICAgICAgcGF0aFN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgIHBhdGhEaXIsXHJcbiAgICAgICAgICAgIHBhdGhEaXN0YW5jZTogMCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVOG6oW8gcGl2b3QgKMSRaeG7g20gbmVvIHRyw6puIGTDonkpICsgUmV2b2x1dGVKb2ludDsgcGjhuqduIGTGsOG7m2kgY2hhcm0gbHVuZyBsYXkgdGhlbyBwaHlzaWNzLiAqL1xyXG4gICAgcHJpdmF0ZSBzZXR1cENoYXJtSGFuZ1JpZyhjaGFybTogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmIChjaGFybS5wYXJlbnQgJiYgY2hhcm0ucGFyZW50Lm5hbWUgPT09ICdjaGFybVBpdm90Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhcm0ucGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZ0xvY2FsID0gdGhpcy5nZXRIYW5nTG9jYWxPZmZzZXQoY2hhcm0pO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gY2hhcm0ucGFyZW50O1xyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zID0gbGF5ZXIuY29udmVydFRvV29ybGRTcGFjZUFSKGNoYXJtLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGl2b3QgPSBuZXcgY2MuTm9kZSgnY2hhcm1QaXZvdCcpO1xyXG4gICAgICAgIHBpdm90LnBhcmVudCA9IGxheWVyO1xyXG4gICAgICAgIHBpdm90LnNldFBvc2l0aW9uKGxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKSk7XHJcblxyXG4gICAgICAgIGNoYXJtLnBhcmVudCA9IHBpdm90O1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKGNjLnYzKC1oYW5nTG9jYWwueCwgLWhhbmdMb2NhbC55LCAwKSk7XHJcbiAgICAgICAgY2hhcm0uYW5nbGUgPSAwO1xyXG5cclxuICAgICAgICBsZXQgcGl2b3RCb2R5ID0gcGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFwaXZvdEJvZHkpIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5ID0gcGl2b3QuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpdm90Qm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgIHBpdm90Qm9keS5ncmF2aXR5U2NhbGUgPSAxO1xyXG4gICAgICAgIHBpdm90Qm9keS5saW5lYXJEYW1waW5nID0gMC4yMjtcclxuICAgICAgICBwaXZvdEJvZHkuYW5ndWxhckRhbXBpbmcgPSAxO1xyXG4gICAgICAgIHBpdm90Qm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICBwaXZvdEJvZHkuYWxsb3dTbGVlcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgcGl2b3RDb2wgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIXBpdm90Q29sKSB7XHJcbiAgICAgICAgICAgIHBpdm90Q29sID0gcGl2b3QuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpdm90Q29sLnJhZGl1cyA9IHRoaXMucGl2b3RDb2xsaWRlclJhZGl1cztcclxuICAgICAgICBwaXZvdENvbC5mcmljdGlvbiA9IDAuMztcclxuICAgICAgICBwaXZvdENvbC5yZXN0aXR1dGlvbiA9IDAuMDU7XHJcbiAgICAgICAgcGl2b3RDb2wuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBjaGFybUJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIWNoYXJtQm9keSkge1xyXG4gICAgICAgICAgICBjaGFybUJvZHkgPSBjaGFybS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhcm1Cb2R5LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNoYXJtQm9keS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNoYXJtQm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgIGNoYXJtQm9keS5ncmF2aXR5U2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIGNoYXJtQm9keS5saW5lYXJEYW1waW5nID0gMC4yO1xyXG4gICAgICAgIGNoYXJtQm9keS5hbmd1bGFyRGFtcGluZyA9IDAuNDU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmZpeGVkUm90YXRpb24gPSBmYWxzZTtcclxuICAgICAgICBjaGFybUJvZHkuYWxsb3dTbGVlcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmVuYWJsZUNoYXJtUGh5c2ljc0NvbGxpZGVyKGNoYXJtKTtcclxuXHJcbiAgICAgICAgbGV0IGpvaW50ID0gcGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJldm9sdXRlSm9pbnQpO1xyXG4gICAgICAgIGlmICgham9pbnQpIHtcclxuICAgICAgICAgICAgam9pbnQgPSBwaXZvdC5hZGRDb21wb25lbnQoY2MuUmV2b2x1dGVKb2ludCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpvaW50LmNvbm5lY3RlZEJvZHkgPSBjaGFybUJvZHk7XHJcbiAgICAgICAgam9pbnQuYW5jaG9yID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQW5jaG9yID0gaGFuZ0xvY2FsO1xyXG4gICAgICAgIGpvaW50LmNvbGxpZGVDb25uZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBpdm90O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SGFuZ0xvY2FsT2Zmc2V0KGNoYXJtOiBjYy5Ob2RlKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGNoYXJtLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykgYXMgYW55O1xyXG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0uZ2V0SGFuZ0xvY2FsT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmdldEhhbmdMb2NhbE9mZnNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2MudjIoMCwgNTUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5hYmxlQ2hhcm1QaHlzaWNzQ29sbGlkZXIoY2hhcm06IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IGNoYXJtLmdldENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoY29sbGlkZXIpIHtcclxuICAgICAgICAgICAgY29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLnNlbnNvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb2xsaWRlci5mcmljdGlvbiA9IDAuMjU7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLnJlc3RpdHV0aW9uID0gMC4wODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYW5nZW50QXRJbmRleChwb2ludHM6IGNjLlZlYzJbXSwgaW5kZXg6IG51bWJlciwgZGlyOiBudW1iZXIpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGhpcy53cmFwSW5kZXgoaW5kZXggKyBkaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGIgPSBwb2ludHNbbmV4dElkeF07XHJcbiAgICAgICAgY29uc3QgZHggPSBiLnggLSBhLng7XHJcbiAgICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XHJcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KSB8fCAxO1xyXG4gICAgICAgIHJldHVybiBjYy52MihkeCAvIGxlbiwgZHkgLyBsZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmVhcmVzdE9uUGF0aChwb2ludHM6IGNjLlZlYzJbXSwgcG9zOiBjYy5WZWMyKTogeyBpbmRleDogbnVtYmVyOyBuZWFyZXN0OiBjYy5WZWMyIH0ge1xyXG4gICAgICAgIGxldCBiZXN0SW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBiZXN0RGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBjYy52Mihwb2ludHNbaV0ueCAtIHBvcy54LCBwb2ludHNbaV0ueSAtIHBvcy55KS5tYWdTcXIoKTtcclxuICAgICAgICAgICAgaWYgKGQgPCBiZXN0RGlzdCkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3QgPSBkO1xyXG4gICAgICAgICAgICAgICAgYmVzdEluZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaW5kZXg6IGJlc3RJbmRleCwgbmVhcmVzdDogcG9pbnRzW2Jlc3RJbmRleF0gfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmROZWFyZXN0UGF0aEluZGV4KHBvaW50czogY2MuVmVjMltdLCBwb3M6IGNjLlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBiZXN0ID0gMDtcclxuICAgICAgICBsZXQgYmVzdERpc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBjYy52Mihwb2ludHNbaV0ueCAtIHBvcy54LCBwb2ludHNbaV0ueSAtIHBvcy55KS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGQgPCBiZXN0RGlzdCkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3QgPSBkO1xyXG4gICAgICAgICAgICAgICAgYmVzdCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwaWNrUGF0aERpcmVjdGlvbihwb2ludHM6IGNjLlZlYzJbXSwgZW50cnlJbmRleDogbnVtYmVyLCBzaWRlOiBDb3JkU2lkZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgc2NvcmUgPSAoZGlyOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHMgPSAwO1xyXG4gICAgICAgICAgICBsZXQgaWR4ID0gZW50cnlJbmRleDtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA0MDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZHggPSB0aGlzLndyYXBJbmRleChpZHggKyBkaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgICAgICAgICAgcyArPSAtcC55ICogMC41O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNpZGUgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgKz0gcC54IDwgMCA/IDMgOiAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyArPSBwLnggPiAwID8gMyA6IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHNjb3JlKDEpID49IHNjb3JlKC0xKSA/IDEgOiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBvc2VPblBhdGgoXHJcbiAgICAgICAgcG9pbnRzOiBjYy5WZWMyW10sXHJcbiAgICAgICAgc3RhcnRJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGRpcjogbnVtYmVyLFxyXG4gICAgICAgIGRpc3RhbmNlOiBudW1iZXJcclxuICAgICk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGFuZ2xlOiBudW1iZXIgfSB7XHJcbiAgICAgICAgbGV0IGlkeCA9IHN0YXJ0SW5kZXg7XHJcbiAgICAgICAgbGV0IHJlbWFpbiA9IGRpc3RhbmNlO1xyXG4gICAgICAgIGNvbnN0IG1heFN0ZXAgPSBwb2ludHMubGVuZ3RoICsgMjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPCBtYXhTdGVwOyBzdGVwKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dElkeCA9IHRoaXMud3JhcEluZGV4KGlkeCArIGRpciwgcG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHBvaW50c1tuZXh0SWR4XTtcclxuICAgICAgICAgICAgY29uc3QgZHggPSBiLnggLSBhLng7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gYi55IC0gYS55O1xyXG4gICAgICAgICAgICBjb25zdCBzZWdMZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgICAgICBpZiAoc2VnTGVuIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGlkeCA9IG5leHRJZHg7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlbWFpbiA8PSBzZWdMZW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSByZW1haW4gLyBzZWdMZW47XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gYS54ICsgZHggKiB0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGEueSArIGR5ICogdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpICogMTgwIC8gTWF0aC5QSSAtIDkwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeCwgeSwgYW5nbGUgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVtYWluIC09IHNlZ0xlbjtcclxuICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxhc3QgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICByZXR1cm4geyB4OiBsYXN0LngsIHk6IGxhc3QueSwgYW5nbGU6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdyYXBJbmRleChpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIGxlbmd0aCArIGluZGV4O1xyXG4gICAgICAgIGlmIChpbmRleCA+PSBsZW5ndGgpIHJldHVybiBpbmRleCAtIGxlbmd0aDtcclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNYXhTbGlkZURpc3RhbmNlKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCkgcmV0dXJuIDA7XHJcbiAgICAgICAgcmV0dXJuIHBhdGgudG90YWxMZW5ndGggKiAwLjUyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQ2hhcm1TbGlkZShzdGF0ZTogQ29yZENoYXJtU3RhdGUsIGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gc3RhdGUucGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghYm9keSB8fCAhcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICBjb25zdCBvblBhdGggPSB0aGlzLmdldE5lYXJlc3RPblBhdGgocGF0aC5wb2ludHMsIHBvcyk7XHJcbiAgICAgICAgY29uc3QgdGFuZ2VudCA9IHRoaXMuZ2V0VGFuZ2VudEF0SW5kZXgocGF0aC5wb2ludHMsIG9uUGF0aC5pbmRleCwgc3RhdGUucGF0aERpcik7XHJcblxyXG4gICAgICAgIHN0YXRlLnBhdGhEaXN0YW5jZSA9IHRoaXMuZ2V0RGlzdGFuY2VBbG9uZ1BhdGgoXHJcbiAgICAgICAgICAgIHBhdGgucG9pbnRzLFxyXG4gICAgICAgICAgICBzdGF0ZS5wYXRoU3RhcnRJbmRleCxcclxuICAgICAgICAgICAgc3RhdGUucGF0aERpcixcclxuICAgICAgICAgICAgcG9zXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGF0ZS5zZXR0bGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvUGF0aFggPSBvblBhdGgubmVhcmVzdC54IC0gcG9zLng7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvUGF0aFkgPSBvblBhdGgubmVhcmVzdC55IC0gcG9zLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gdGFuZ2VudC54O1xyXG4gICAgICAgICAgICBjb25zdCB0eSA9IHRhbmdlbnQueTtcclxuICAgICAgICAgICAgY29uc3QgbnggPSAtdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IG55ID0gdHg7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2ZWwgPSBib2R5LmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICBjb25zdCB2VGFuZ2VudCA9IHZlbC54ICogdHggKyB2ZWwueSAqIHR5O1xyXG4gICAgICAgICAgICBjb25zdCB2Tm9ybWFsID0gdmVsLnggKiBueCArIHZlbC55ICogbnk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldE5vcm1hbCA9IHRvUGF0aFggKiBueCArIHRvUGF0aFkgKiBueTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdWVGFuZ2VudCA9IHZUYW5nZW50ICsgdGhpcy5zbGlkZUdyYXZpdHkgKiBkdDtcclxuICAgICAgICAgICAgbGV0IG5ld1ZOb3JtYWwgPSB2Tm9ybWFsXHJcbiAgICAgICAgICAgICAgICArIG9mZnNldE5vcm1hbCAqIHRoaXMucGF0aFB1bGxTdHJlbmd0aCAqIGR0XHJcbiAgICAgICAgICAgICAgICAtIHZOb3JtYWwgKiB0aGlzLnBhdGhQdWxsRGFtcGluZyAqIGR0O1xyXG5cclxuICAgICAgICAgICAgbGV0IHZ4ID0gdHggKiBuZXdWVGFuZ2VudCArIG54ICogbmV3Vk5vcm1hbDtcclxuICAgICAgICAgICAgbGV0IHZ5ID0gdHkgKiBuZXdWVGFuZ2VudCArIG55ICogbmV3Vk5vcm1hbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gTWF0aC5zcXJ0KHZ4ICogdnggKyB2eSAqIHZ5KTtcclxuICAgICAgICAgICAgaWYgKHNwZWVkID4gdGhpcy5tYXhTbGlkZVNwZWVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMubWF4U2xpZGVTcGVlZCAvIHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgdnggKj0gc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB2eSAqPSBzY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIodngsIHZ5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5wYXRoRGlzdGFuY2UgPj0gdGhpcy5nZXRNYXhTbGlkZURpc3RhbmNlKHN0YXRlKSAtIDIpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldHRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzcGVlZCA9IGJvZHkubGluZWFyVmVsb2NpdHkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgbWluU2xpZGUgPSBNYXRoLm1pbigyNCwgdGhpcy5nZXRNYXhTbGlkZURpc3RhbmNlKHN0YXRlKSAqIDAuMTIpO1xyXG4gICAgICAgIGlmIChzcGVlZCA8IHRoaXMuc2V0dGxlU3BlZWQgJiYgc3RhdGUucGF0aERpc3RhbmNlID49IG1pblNsaWRlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0aWxsVGltZSArPSBkdDtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnN0aWxsVGltZSA+PSAwLjM1KSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXR0bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0aWxsVGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuc2V0dGxlZCkge1xyXG4gICAgICAgICAgICBib2R5LmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyRGFtcGluZyA9IDEuODtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyRGFtcGluZyA9IDEuMjtcclxuICAgICAgICAgICAgYm9keS5hbGxvd1NsZWVwID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvUGF0aFggPSBvblBhdGgubmVhcmVzdC54IC0gcG9zLng7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvUGF0aFkgPSBvblBhdGgubmVhcmVzdC55IC0gcG9zLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhvbGREYW1wID0gdGhpcy5wYXRoUHVsbERhbXBpbmcgKiAxLjU7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MihcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkueCArIHRvUGF0aFggKiB0aGlzLnBhdGhQdWxsU3RyZW5ndGggKiBkdCAqIDAuMzUgLSBib2R5LmxpbmVhclZlbG9jaXR5LnggKiBob2xkRGFtcCAqIGR0LFxyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eS55ICsgdG9QYXRoWSAqIHRoaXMucGF0aFB1bGxTdHJlbmd0aCAqIGR0ICogMC4zNSAtIGJvZHkubGluZWFyVmVsb2NpdHkueSAqIGhvbGREYW1wICogZHRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGguc3FydCh0b1BhdGhYICogdG9QYXRoWCArIHRvUGF0aFkgKiB0b1BhdGhZKTtcclxuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDEuNSAmJiBib2R5LmxpbmVhclZlbG9jaXR5Lm1hZygpIDwgOCkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucGl2b3Quc2V0UG9zaXRpb24oY2MudjMob25QYXRoLm5lYXJlc3QueCwgb25QYXRoLm5lYXJlc3QueSwgMCkpO1xyXG4gICAgICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREaXN0YW5jZUFsb25nUGF0aChcclxuICAgICAgICBwb2ludHM6IGNjLlZlYzJbXSxcclxuICAgICAgICBzdGFydEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgZGlyOiBudW1iZXIsXHJcbiAgICAgICAgcG9zOiBjYy5WZWMyXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IG5lYXJlc3QgPSB0aGlzLmdldE5lYXJlc3RPblBhdGgocG9pbnRzLCBwb3MpO1xyXG4gICAgICAgIGxldCBkaXN0ID0gMDtcclxuICAgICAgICBsZXQgaWR4ID0gc3RhcnRJbmRleDtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBuZWFyZXN0LmluZGV4O1xyXG4gICAgICAgIGxldCBndWFyZCA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlIChpZHggIT09IHRhcmdldCAmJiBndWFyZCA8IHBvaW50cy5sZW5ndGggKyAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpZHggKyBkaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbbmV4dElkeF07XHJcbiAgICAgICAgICAgIGRpc3QgKz0gY2MudjIoYi54IC0gYS54LCBiLnkgLSBhLnkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgICAgICBndWFyZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VnQSA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgIGRpc3QgKz0gY2MudjIocG9zLnggLSBzZWdBLngsIHBvcy55IC0gc2VnQS55KS5tYWcoKTtcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFuZ2xlSW5Ob2RlU3BhY2Uobm9kZTogY2MuTm9kZSwgcm9vdDogY2MuTm9kZSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gbm9kZS5hbmdsZTtcclxuICAgICAgICBsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQgIT09IHJvb3QpIHtcclxuICAgICAgICAgICAgYW5nbGUgKz0gcGFyZW50LmFuZ2xlO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTaWRlTWF4U2xpZGVEaXN0YW5jZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIXBhdGgpIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBwYXRoLnRvdGFsTGVuZ3RoICogMC41MjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1lYXN1cmVQYXRoRGlzdGFuY2VGcm9tRW50cnkoc2lkZTogQ29yZFNpZGUsIHBvczogY2MuVmVjMiwgcGF0aERpcj86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIXBhdGggfHwgIWFuY2hvcnMpIHJldHVybiAwO1xyXG5cclxuICAgICAgICBjb25zdCBlbnRyeSA9IHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgZW50cnlJbmRleCA9IHRoaXMuZmluZE5lYXJlc3RQYXRoSW5kZXgocGF0aC5wb2ludHMsIGVudHJ5KTtcclxuICAgICAgICBjb25zdCBkaXIgPSBwYXRoRGlyICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBwYXRoRGlyXHJcbiAgICAgICAgICAgIDogdGhpcy5waWNrUGF0aERpcmVjdGlvbihwYXRoLnBvaW50cywgZW50cnlJbmRleCwgc2lkZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlQWxvbmdQYXRoKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBkaXIsIHBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybVBhdGhEaXN0YW5jZShzdGF0ZTogQ29yZENoYXJtU3RhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghc3RhdGUucGl2b3QpIHJldHVybiBzdGF0ZS5wYXRoRGlzdGFuY2U7XHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVhc3VyZVBhdGhEaXN0YW5jZUZyb21FbnRyeShzdGF0ZS5zaWRlLCBwb3MsIHN0YXRlLnBhdGhEaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1zT25TaWRlKHNpZGU6IENvcmRTaWRlKTogQ29yZENoYXJtU3RhdGVbXSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBDb3JkQ2hhcm1TdGF0ZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcmRDaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29yZENoYXJtc1tpXS5zaWRlID09PSBzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNvcmRDaGFybXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNaW5QYXRoRGlzdGFuY2VPblNpZGUoc2lkZTogQ29yZFNpZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IG9uU2lkZSA9IHRoaXMuZ2V0Q2hhcm1zT25TaWRlKHNpZGUpO1xyXG4gICAgICAgIGlmIChvblNpZGUubGVuZ3RoID09PSAwKSByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcclxuXHJcbiAgICAgICAgbGV0IG1pbkRpc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb25TaWRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmdldENoYXJtUGF0aERpc3RhbmNlKG9uU2lkZVtpXSk7XHJcbiAgICAgICAgICAgIGlmIChkIDwgbWluRGlzdCkge1xyXG4gICAgICAgICAgICAgICAgbWluRGlzdCA9IGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1pbkRpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5Ecm9wT25TaWRlKHNpZGU6IENvcmRTaWRlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qgb25TaWRlID0gdGhpcy5nZXRDaGFybXNPblNpZGUoc2lkZSk7XHJcbiAgICAgICAgaWYgKG9uU2lkZS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNaW5QYXRoRGlzdGFuY2VPblNpZGUoc2lkZSkgPj0gdGhpcy5jaGFybVNsb3RTcGFjaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGlja0F2YWlsYWJsZVNpZGUoXHJcbiAgICAgICAgbmVhckxlZnQ6IGJvb2xlYW4sXHJcbiAgICAgICAgbmVhclJpZ2h0OiBib29sZWFuLFxyXG4gICAgICAgIGRpc3RMZWZ0OiBudW1iZXIsXHJcbiAgICAgICAgZGlzdFJpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgcHJlZmVyTGVmdD86IGJvb2xlYW5cclxuICAgICk6IENvcmRTaWRlIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlczogeyBzaWRlOiBDb3JkU2lkZTsgZGlzdDogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgICAgIGlmIChuZWFyTGVmdCkgY2FuZGlkYXRlcy5wdXNoKHsgc2lkZTogJ2xlZnQnLCBkaXN0OiBkaXN0TGVmdCB9KTtcclxuICAgICAgICBpZiAobmVhclJpZ2h0KSBjYW5kaWRhdGVzLnB1c2goeyBzaWRlOiAncmlnaHQnLCBkaXN0OiBkaXN0UmlnaHQgfSk7XHJcblxyXG4gICAgICAgIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNhbmRpZGF0ZXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJlZmVyTGVmdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhUHJlZiA9IChhLnNpZGUgPT09ICdsZWZ0JykgPT09IHByZWZlckxlZnQgPyAwIDogMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJQcmVmID0gKGIuc2lkZSA9PT0gJ2xlZnQnKSA9PT0gcHJlZmVyTGVmdCA/IDAgOiAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFQcmVmICE9PSBiUHJlZikgcmV0dXJuIGFQcmVmIC0gYlByZWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGEuZGlzdCAtIGIuZGlzdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkRyb3BPblNpZGUoY2FuZGlkYXRlc1tpXS5zaWRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXNbaV0uc2lkZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc29sdmVEcm9wQW5jaG9yKHdvcmxkUG9zOiBjYy5WZWMyLCBwcmVmZXJyZWRTaWRlOiBDb3JkU2lkZSA9IG51bGwpOiBEcm9wQW5jaG9yIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgbG9jYWwgPSB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRQb3MgPSBhbmNob3JzLmxlZnQ7XHJcbiAgICAgICAgY29uc3QgcmlnaHRQb3MgPSBhbmNob3JzLnJpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0TGVmdCA9IGNjLnYyKGxvY2FsLnggLSBsZWZ0UG9zLngsIGxvY2FsLnkgLSBsZWZ0UG9zLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RSaWdodCA9IGNjLnYyKGxvY2FsLnggLSByaWdodFBvcy54LCBsb2NhbC55IC0gcmlnaHRQb3MueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgbmVhckxlZnQgPSBkaXN0TGVmdCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IG5lYXJSaWdodCA9IGRpc3RSaWdodCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IHByZWZlckxlZnQgPSBsb2NhbC54IDwgKGxlZnRQb3MueCArIHJpZ2h0UG9zLngpICogMC41O1xyXG4gICAgICAgIGNvbnN0IHByZWZlclNpZGU6IENvcmRTaWRlID0gcHJlZmVyTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XHJcblxyXG4gICAgICAgIGlmIChwcmVmZXJyZWRTaWRlICYmIHRoaXMuY2FuRHJvcE9uU2lkZShwcmVmZXJyZWRTaWRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2lkZTogcHJlZmVycmVkU2lkZSxcclxuICAgICAgICAgICAgICAgIGNvcmRQb3M6IHByZWZlcnJlZFNpZGUgPT09ICdsZWZ0JyA/IGxlZnRQb3MgOiByaWdodFBvcyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmVmZXJyZWRTaWRlICYmICF0aGlzLmNhbkRyb3BPblNpZGUocHJlZmVycmVkU2lkZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgYWx0OiBDb3JkU2lkZSA9IHByZWZlclNpZGU7XHJcbiAgICAgICAgICAgIGlmIChhbHQgIT09IHByZWZlcnJlZFNpZGUgJiYgdGhpcy5jYW5Ecm9wT25TaWRlKGFsdCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZTogYWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcmRQb3M6IGFsdCA9PT0gJ2xlZnQnID8gbGVmdFBvcyA6IHJpZ2h0UG9zLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5lYXJMZWZ0IHx8IG5lYXJSaWdodCkge1xyXG4gICAgICAgICAgICBjb25zdCBzaWRlID0gdGhpcy5waWNrQXZhaWxhYmxlU2lkZShuZWFyTGVmdCwgbmVhclJpZ2h0LCBkaXN0TGVmdCwgZGlzdFJpZ2h0KTtcclxuICAgICAgICAgICAgaWYgKHNpZGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZSxcclxuICAgICAgICAgICAgICAgICAgICBjb3JkUG9zOiBzaWRlID09PSAnbGVmdCcgPyBsZWZ0UG9zIDogcmlnaHRQb3MsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0b3BZID0gTWF0aC5tYXgobGVmdFBvcy55LCByaWdodFBvcy55KSAtIDIwO1xyXG4gICAgICAgIGNvbnN0IG1pblggPSBNYXRoLm1pbihsZWZ0UG9zLngsIHJpZ2h0UG9zLngpIC0gMzA7XHJcbiAgICAgICAgY29uc3QgbWF4WCA9IE1hdGgubWF4KGxlZnRQb3MueCwgcmlnaHRQb3MueCkgKyAzMDtcclxuICAgICAgICBjb25zdCBpblRvcFpvbmUgPSBsb2NhbC55ID49IHRvcFkgLSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzXHJcbiAgICAgICAgICAgICYmIGxvY2FsLnggPj0gbWluWFxyXG4gICAgICAgICAgICAmJiBsb2NhbC54IDw9IG1heFg7XHJcblxyXG4gICAgICAgIGlmICghaW5Ub3Bab25lKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2lkZSA9IHRoaXMucGlja0F2YWlsYWJsZVNpZGUodHJ1ZSwgdHJ1ZSwgZGlzdExlZnQsIGRpc3RSaWdodCwgcHJlZmVyTGVmdCk7XHJcbiAgICAgICAgaWYgKCFzaWRlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2lkZSxcclxuICAgICAgICAgICAgY29yZFBvczogc2lkZSA9PT0gJ2xlZnQnID8gbGVmdFBvcyA6IHJpZ2h0UG9zLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMb2NhbEJveFNuYXBQb3NlKHNpZGU6IENvcmRTaWRlKTogeyBwb3M6IGNjLlZlYzM7IGFuZ2xlOiBudW1iZXIgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRMb2NhbEJveFNpZGVDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBzaWRlID09PSAnbGVmdCcgPyBjaGlsZHJlbi5sZWZ0IDogY2hpbGRyZW4ucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IHRoaXMuZ2V0TWFpbk5vZGUoKTtcclxuICAgICAgICBjb25zdCBsb2NhbCA9IG1haW4uY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBvczogY2MudjMobG9jYWwueCwgbG9jYWwueSwgMCksXHJcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmdldEFuZ2xlSW5Ob2RlU3BhY2UodGFyZ2V0LCBtYWluKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RHJhZ1NuYXBQb3NlKG1haW5Qb3M6IGNjLlZlYzMpOiB7IHBvczogY2MuVmVjMzsgYW5nbGU6IG51bWJlcjsgc2lkZTogQ29yZFNpZGUgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMgfHwgIXRoaXMuYWN0aXZlQ29yZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY29uc3QgbGVmdE1haW4gPSBtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvV29ybGRTcGFjZUFSKGFuY2hvcnMubGVmdClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0TWFpbiA9IG1haW4uY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoYW5jaG9ycy5yaWdodClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0TGVmdCA9IGNjLnYyKG1haW5Qb3MueCAtIGxlZnRNYWluLngsIG1haW5Qb3MueSAtIGxlZnRNYWluLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RSaWdodCA9IGNjLnYyKG1haW5Qb3MueCAtIHJpZ2h0TWFpbi54LCBtYWluUG9zLnkgLSByaWdodE1haW4ueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgbmVhckxlZnQgPSBkaXN0TGVmdCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IG5lYXJSaWdodCA9IGRpc3RSaWdodCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG5cclxuICAgICAgICBsZXQgc2lkZTogQ29yZFNpZGUgPSBudWxsO1xyXG4gICAgICAgIGlmIChuZWFyTGVmdCB8fCBuZWFyUmlnaHQpIHtcclxuICAgICAgICAgICAgc2lkZSA9IHRoaXMucGlja0F2YWlsYWJsZVNpZGUobmVhckxlZnQsIG5lYXJSaWdodCwgZGlzdExlZnQsIGRpc3RSaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29yZExvY2FsID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICAgICAgbWFpbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIobWFpblBvcy54LCBtYWluUG9zLnkpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0UG9zID0gYW5jaG9ycy5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCByaWdodFBvcyA9IGFuY2hvcnMucmlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvcFkgPSBNYXRoLm1heChsZWZ0UG9zLnksIHJpZ2h0UG9zLnkpIC0gMjA7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pblggPSBNYXRoLm1pbihsZWZ0UG9zLngsIHJpZ2h0UG9zLngpIC0gMzA7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSBNYXRoLm1heChsZWZ0UG9zLngsIHJpZ2h0UG9zLngpICsgMzA7XHJcbiAgICAgICAgICAgIGNvbnN0IGluVG9wWm9uZSA9IGNvcmRMb2NhbC55ID49IHRvcFkgLSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzXHJcbiAgICAgICAgICAgICAgICAmJiBjb3JkTG9jYWwueCA+PSBtaW5YXHJcbiAgICAgICAgICAgICAgICAmJiBjb3JkTG9jYWwueCA8PSBtYXhYO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluVG9wWm9uZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZmVyTGVmdCA9IGNvcmRMb2NhbC54IDwgKGxlZnRQb3MueCArIHJpZ2h0UG9zLngpICogMC41O1xyXG4gICAgICAgICAgICAgICAgc2lkZSA9IHRoaXMucGlja0F2YWlsYWJsZVNpZGUodHJ1ZSwgdHJ1ZSwgZGlzdExlZnQsIGRpc3RSaWdodCwgcHJlZmVyTGVmdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2lkZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXAgPSB0aGlzLmdldExvY2FsQm94U25hcFBvc2Uoc2lkZSk7XHJcbiAgICAgICAgaWYgKHNuYXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcG9zOiBzbmFwLnBvcywgYW5nbGU6IHNuYXAuYW5nbGUsIHNpZGUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMb2NhbEJveFNpZGVDaGlsZHJlbigpOiB7IGxlZnQ6IGNjLk5vZGU7IHJpZ2h0OiBjYy5Ob2RlIH0gfCBudWxsIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxCb3ggfHwgdGhpcy5sb2NhbEJveC5jaGlsZHJlbkNvdW50IDwgMikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnRCeU5hbWUgPSB0aGlzLmxvY2FsQm94LmdldENoaWxkQnlOYW1lKCdsZWZ0Jyk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRCeU5hbWUgPSB0aGlzLmxvY2FsQm94LmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmIChsZWZ0QnlOYW1lICYmIHJpZ2h0QnlOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxlZnQ6IGxlZnRCeU5hbWUsIHJpZ2h0OiByaWdodEJ5TmFtZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2hpbGRBID0gdGhpcy5sb2NhbEJveC5jaGlsZHJlblswXTtcclxuICAgICAgICBjb25zdCBjaGlsZEIgPSB0aGlzLmxvY2FsQm94LmNoaWxkcmVuWzFdO1xyXG4gICAgICAgIHJldHVybiBjaGlsZEEueCA8PSBjaGlsZEIueFxyXG4gICAgICAgICAgICA/IHsgbGVmdDogY2hpbGRBLCByaWdodDogY2hpbGRCIH1cclxuICAgICAgICAgICAgOiB7IGxlZnQ6IGNoaWxkQiwgcmlnaHQ6IGNoaWxkQSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hIYW5nQW5nbGUoc2lkZTogQ29yZFNpZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRMb2NhbEJveFNpZGVDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBzaWRlID09PSAnbGVmdCcgPyBjaGlsZHJlbi5sZWZ0LmFuZ2xlIDogY2hpbGRyZW4ucmlnaHQuYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMb2NhbEJveEFuY2hvclBvc2l0aW9ucygpOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8ICF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NMZWZ0ID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICBjaGlsZHJlbi5sZWZ0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHBvc1JpZ2h0ID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICBjaGlsZHJlbi5yaWdodC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4geyBsZWZ0OiBwb3NMZWZ0LCByaWdodDogcG9zUmlnaHQgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvcmRBbmNob3JQb3NpdGlvbnMoKTogeyBsZWZ0OiBjYy5WZWMyOyByaWdodDogY2MuVmVjMiB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxCb3hBbmNob3JzID0gdGhpcy5nZXRMb2NhbEJveEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmIChsb2NhbEJveEFuY2hvcnMpIHJldHVybiBsb2NhbEJveEFuY2hvcnM7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5sZWZ0QW5jaG9yIHx8ICF0aGlzLnJpZ2h0QW5jaG9yKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBjYy52Mih0aGlzLmxlZnRBbmNob3IueCwgdGhpcy5sZWZ0QW5jaG9yLnkpLFxyXG4gICAgICAgICAgICByaWdodDogY2MudjIodGhpcy5yaWdodEFuY2hvci54LCB0aGlzLnJpZ2h0QW5jaG9yLnkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREcm9wQW5jaG9yRm9yU2lkZShzaWRlOiBDb3JkU2lkZSk6IERyb3BBbmNob3IgfCBudWxsIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuRHJvcE9uU2lkZShzaWRlKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgIGNvcmRQb3M6IHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBsYXRlQ2hhcm1BdChzY3JlZW5Qb3M6IGNjLlZlYzIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5wbGF0ZS5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLnBsYXRlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmFjdGl2ZSB8fCAhY2hpbGQuZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2hhcm1PbkNvcmQoY2hpbGQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBjaGlsZC5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICAgICAgaWYgKHJlY3QuY29udGFpbnMoc2NyZWVuUG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNDaGFybU9uQ29yZChjaGFybTogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jb3JkQ2hhcm1zW2ldO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuY2hhcm0gPT09IGNoYXJtIHx8IHN0YXRlLnBpdm90ID09PSBjaGFybSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjaGFybS5wYXJlbnQgPT09IHN0YXRlLnBpdm90KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvczogY2MuVmVjMik6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1haW5Ob2RlKCkuY29udmVydFRvTm9kZVNwYWNlQVIoc2NyZWVuUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1haW5Ob2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nIHx8IG5vZGUucGFyZW50Lm5hbWUgPT09ICdDYW52YXMnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nID8gbm9kZS5wYXJlbnQgOiBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQ29yZFJvdW5kTGlzdC5wYXJlbnQgfHwgdGhpcy5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcm1TbGlkZSh0aGlzLmNvcmRDaGFybXNbaV0sIGR0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19