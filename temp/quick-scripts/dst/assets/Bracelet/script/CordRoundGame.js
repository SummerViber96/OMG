
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
        _this.entryDetectRadius = 110;
        _this.pathSampleSpacing = 12;
        _this.segmentRadius = 14;
        _this.slideGravity = 320;
        _this.maxSlideSpeed = 280;
        _this.pathPullStrength = 420;
        _this.settleSpeed = 22;
        _this.pivotColliderRadius = 8;
        _this.activeCord = null;
        _this.cordPaths = new Map();
        _this.preparedCords = [];
        _this.leftAnchor = null;
        _this.rightAnchor = null;
        _this.charmLayer = null;
        _this.cordCharms = [];
        _this.draggingCharm = null;
        _this.dragOriginParent = null;
        _this.dragOriginPos = null;
        _this.dragOriginSiblingIndex = 0;
        _this.activeTouchId = -1;
        _this.isActive = false;
        _this.touchBound = false;
        _this.btnOk = null;
        return _this;
    }
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
    };
    CordRoundGame.prototype.onTouchMove = function (event) {
        if (!this.isActive || event.getID() !== this.activeTouchId || !this.draggingCharm)
            return;
        this.draggingCharm.setPosition(this.getMainLocalPos(event.getLocation()));
    };
    CordRoundGame.prototype.onTouchEnd = function (event) {
        if (!this.isActive || event.getID() !== this.activeTouchId || !this.draggingCharm)
            return;
        var charm = this.draggingCharm;
        var charmWorld = charm.parent.convertToWorldSpaceAR(charm.position);
        var dropAnchor = this.getDropAnchor(charmWorld);
        if (dropAnchor) {
            this.threadCharmOntoCord(charm, dropAnchor);
            this.btnOk.active = true;
        }
        else {
            this.resetDraggedCharm(charm);
        }
        this.draggingCharm = null;
        this.activeTouchId = -1;
    };
    CordRoundGame.prototype.startDrag = function (charm, screenPos) {
        this.draggingCharm = charm;
        this.dragOriginParent = charm.parent;
        this.dragOriginPos = charm.position.clone();
        this.dragOriginSiblingIndex = charm.getSiblingIndex();
        var body = charm.getComponent(cc.RigidBody);
        if (body) {
            body.linearVelocity = cc.v2(0, 0);
            body.angularVelocity = 0;
            body.gravityScale = 0;
            body.type = cc.RigidBodyType.Kinematic;
            body.awake = true;
        }
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
        var body = charm.getComponent(cc.RigidBody);
        if (body) {
            body.type = cc.RigidBodyType.Dynamic;
            body.gravityScale = 0;
            body.linearVelocity = cc.v2(0, 0);
            body.angularVelocity = 0;
        }
    };
    CordRoundGame.prototype.threadCharmOntoCord = function (charm, dropAnchor) {
        var path = this.cordPaths.get(this.activeCord);
        if (!path)
            return;
        var anchorPos = cc.v2(dropAnchor.node.x, dropAnchor.node.y);
        var startIndex = this.findNearestPathIndex(path.points, anchorPos);
        var pathDir = this.pickPathDirection(path.points, startIndex, dropAnchor.side);
        var startPose = this.getPoseOnPath(path.points, startIndex, pathDir, 0);
        var pivot = this.setupCharmHangRig(charm);
        pivot.parent = this.charmLayer;
        pivot.setPosition(cc.v3(startPose.x, startPose.y, 0));
        charm.angle = 0;
        charm.children[0].scale = 0.8;
        var pivotBody = pivot.getComponent(cc.RigidBody);
        if (pivotBody) {
            pivotBody.gravityScale = 1;
            pivotBody.allowSleep = false;
            pivotBody.awake = true;
            pivotBody.active = true;
            var tangent = this.getTangentAtIndex(path.points, startIndex, pathDir);
            pivotBody.linearVelocity = tangent.mul(90);
        }
        var charmBody = charm.getComponent(cc.RigidBody);
        if (charmBody) {
            charmBody.angularVelocity = (Math.random() - 0.5) * 4;
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
        pivotBody.linearDamping = 0.12;
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
        charmBody.type = cc.RigidBodyType.Dynamic;
        charmBody.gravityScale = 1;
        charmBody.linearDamping = 0.05;
        charmBody.angularDamping = 0.12;
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
            var vx = body.linearVelocity.x + toPathX * this.pathPullStrength * dt;
            var vy = body.linearVelocity.y + toPathY * this.pathPullStrength * dt;
            vx += tangent.x * this.slideGravity * dt;
            vy += tangent.y * this.slideGravity * dt;
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
        if (speed < this.settleSpeed) {
            state.stillTime += dt;
            if (state.stillTime >= 0.4) {
                state.settled = true;
            }
        }
        else {
            state.stillTime = 0;
        }
        if (state.settled) {
            body.gravityScale = 0;
            body.linearDamping = 1.2;
            body.angularDamping = 0.8;
            body.allowSleep = true;
            var holdX = (onPath.nearest.x - pos.x) * this.pathPullStrength * dt * 0.35;
            var holdY = (onPath.nearest.y - pos.y) * this.pathPullStrength * dt * 0.35;
            body.linearVelocity = cc.v2(body.linearVelocity.x + holdX, body.linearVelocity.y + holdY);
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
    CordRoundGame.prototype.getDropAnchor = function (worldPos) {
        if (!this.activeCord || !this.leftAnchor || !this.rightAnchor)
            return null;
        var local = this.activeCord.convertToNodeSpaceAR(worldPos);
        var leftPos = this.leftAnchor.position;
        var rightPos = this.rightAnchor.position;
        var distLeft = cc.v2(local.x - leftPos.x, local.y - leftPos.y).mag();
        var distRight = cc.v2(local.x - rightPos.x, local.y - rightPos.y).mag();
        var nearLeft = distLeft <= this.entryDetectRadius;
        var nearRight = distRight <= this.entryDetectRadius;
        if (nearLeft || nearRight) {
            if (nearLeft && nearRight) {
                return distLeft <= distRight
                    ? { node: this.leftAnchor, side: 'left' }
                    : { node: this.rightAnchor, side: 'right' };
            }
            return nearLeft
                ? { node: this.leftAnchor, side: 'left' }
                : { node: this.rightAnchor, side: 'right' };
        }
        var topY = Math.max(leftPos.y, rightPos.y) - 20;
        var minX = Math.min(leftPos.x, rightPos.x) - 30;
        var maxX = Math.max(leftPos.x, rightPos.x) + 30;
        var inTopZone = local.y >= topY - this.entryDetectRadius
            && local.x >= minX
            && local.x <= maxX;
        if (!inTopZone)
            return null;
        var useLeft = local.x < (leftPos.x + rightPos.x) * 0.5;
        return useLeft
            ? { node: this.leftAnchor, side: 'left' }
            : { node: this.rightAnchor, side: 'right' };
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
    ], CordRoundGame.prototype, "settleSpeed", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "pivotColliderRadius", void 0);
    __decorate([
        property(cc.Node)
    ], CordRoundGame.prototype, "btnOk", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ29yZFJvdW5kR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQTBCNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUE2cEJDO1FBMXBCRyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyx1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFHL0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFHM0Isa0JBQVksR0FBVyxHQUFHLENBQUM7UUFHM0IsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBRy9CLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLHlCQUFtQixHQUFXLENBQUMsQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFTLEdBQStCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbEQsbUJBQWEsR0FBYyxFQUFFLENBQUM7UUFDOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZ0JBQVUsR0FBcUIsRUFBRSxDQUFDO1FBQ2xDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5Qiw0QkFBc0IsR0FBVyxDQUFDLENBQUM7UUFDbkMsbUJBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMzQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFVLEdBQVksS0FBSyxD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O0lBenBCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNZO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFHdEI7UUFEQyxRQUFROzREQUN1QjtJQUdoQztRQURDLFFBQVE7NERBQ3NCO0lBRy9CO1FBREMsUUFBUTt3REFDa0I7SUFHM0I7UUFEQyxRQUFRO3VEQUNrQjtJQUczQjtRQURDLFFBQVE7d0RBQ21CO0lBRzVCO1FBREMsUUFBUTsyREFDc0I7SUFHL0I7UUFEQyxRQUFRO3NEQUNnQjtJQUd6QjtRQURDLFFBQVE7OERBQ3VCO0lBaUJoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBL0NMLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0E2cEJqQztJQUFELG9CQUFDO0NBN3BCRCxBQTZwQkMsQ0E3cEIwQyxFQUFFLENBQUMsU0FBUyxHQTZwQnREO2tCQTdwQm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxudHlwZSBDb3JkU2lkZSA9ICdsZWZ0JyB8ICdyaWdodCc7XHJcblxyXG5pbnRlcmZhY2UgQ29yZFBhdGhEYXRhIHtcclxuICAgIHBvaW50czogY2MuVmVjMltdO1xyXG4gICAgdG90YWxMZW5ndGg6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvcmRDaGFybVN0YXRlIHtcclxuICAgIHBpdm90OiBjYy5Ob2RlO1xyXG4gICAgY2hhcm06IGNjLk5vZGU7XHJcbiAgICBzZXR0bGVkOiBib29sZWFuO1xyXG4gICAgc3RpbGxUaW1lOiBudW1iZXI7XHJcbiAgICBzaWRlOiBDb3JkU2lkZTtcclxuICAgIHBhdGhTdGFydEluZGV4OiBudW1iZXI7XHJcbiAgICBwYXRoRGlyOiBudW1iZXI7XHJcbiAgICBwYXRoRGlzdGFuY2U6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIERyb3BBbmNob3Ige1xyXG4gICAgbm9kZTogY2MuTm9kZTtcclxuICAgIHNpZGU6IENvcmRTaWRlO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JkUm91bmRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENvcmRSb3VuZExpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZW50cnlEZXRlY3RSYWRpdXM6IG51bWJlciA9IDExMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBhdGhTYW1wbGVTcGFjaW5nOiBudW1iZXIgPSAxMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNlZ21lbnRSYWRpdXM6IG51bWJlciA9IDE0O1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2xpZGVHcmF2aXR5OiBudW1iZXIgPSAzMjA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhTbGlkZVNwZWVkOiBudW1iZXIgPSAyODA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwYXRoUHVsbFN0cmVuZ3RoOiBudW1iZXIgPSA0MjA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzZXR0bGVTcGVlZDogbnVtYmVyID0gMjI7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwaXZvdENvbGxpZGVyUmFkaXVzOiBudW1iZXIgPSA4O1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlQ29yZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvcmRQYXRoczogTWFwPGNjLk5vZGUsIENvcmRQYXRoRGF0YT4gPSBuZXcgTWFwKCk7XHJcbiAgICBwcml2YXRlIHByZXBhcmVkQ29yZHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBsZWZ0QW5jaG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgcmlnaHRBbmNob3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjaGFybUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29yZENoYXJtczogQ29yZENoYXJtU3RhdGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBkcmFnZ2luZ0NoYXJtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHJhZ09yaWdpblBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdPcmlnaW5Qb3M6IGNjLlZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3JpZ2luU2libGluZ0luZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVUb3VjaElkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdG91Y2hCb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5PazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc3RhcnRCcmFjZWxldE1vZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLkNvcmRSb3VuZExpc3QpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJlc29sdmVSZWZlcmVuY2VzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ29yZCA9IHRoaXMuQ29yZFJvdW5kTGlzdC5jaGlsZHJlbltnbG9iYWxUaGlzLmlkU3RyaW5nXTtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlQ29yZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnRBbmNob3IgPSB0aGlzLmFjdGl2ZUNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ2xlZnQnKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QW5jaG9yID0gdGhpcy5hY3RpdmVDb3JkLmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmICghdGhpcy5sZWZ0QW5jaG9yIHx8ICF0aGlzLnJpZ2h0QW5jaG9yKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBDb3JkIGlzIG1pc3NpbmcgbGVmdC9yaWdodCBhbmNob3Igbm9kZXMuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKDAsIC01MjApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb3JkKHRoaXMuQ29yZFJvdW5kTGlzdC5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5zdXJlQ2hhcm1MYXllcigpO1xyXG4gICAgICAgIHRoaXMuYmluZFRvdWNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmVwYXJlQ29yZChjb3JkOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJlcGFyZWRDb3Jkcy5pbmRleE9mKGNvcmQpID49IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmF3UG9pbnRzID0gdGhpcy5nZXRQb2x5Z29uQ29sbGlkZXJQb2ludHMoY29yZCk7XHJcbiAgICAgICAgaWYgKHJhd1BvaW50cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBDb3JkIFwiJyArIGNvcmQubmFtZSArICdcIiBuZWVkcyBjYy5Qb2x5Z29uQ29sbGlkZXIuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbXBsZXMgPSB0aGlzLnNhbXBsZUFsb25nUGF0aChyYXdQb2ludHMsIHRoaXMucGF0aFNhbXBsZVNwYWNpbmcpO1xyXG4gICAgICAgIHRoaXMuY29yZFBhdGhzLnNldChjb3JkLCB7XHJcbiAgICAgICAgICAgIHBvaW50czogc2FtcGxlcyxcclxuICAgICAgICAgICAgdG90YWxMZW5ndGg6IHRoaXMuY2FsY1BhdGhMZW5ndGgoc2FtcGxlcyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBDb3JkUGh5c2ljcyhjb3JkLCBzYW1wbGVzKTtcclxuICAgICAgICB0aGlzLnByZXBhcmVkQ29yZHMucHVzaChjb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBvbHlnb25Db2xsaWRlclBvaW50cyhjb3JkOiBjYy5Ob2RlKTogY2MuVmVjMltdIHtcclxuICAgICAgICBjb25zdCBwb2x5ID0gY29yZC5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIXBvbHkgfHwgIXBvbHkucG9pbnRzIHx8IHBvbHkucG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcG9seS5vZmZzZXQgfHwgY2MudjIoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHBvbHkucG9pbnRzLm1hcChwID0+IGNjLnYyKHAueCArIG9mZnNldC54LCBwLnkgKyBvZmZzZXQueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBDb3JkUGh5c2ljcyhjb3JkOiBjYy5Ob2RlLCBzYW1wbGVzOiBjYy5WZWMyW10pIHtcclxuICAgICAgICBsZXQgYm9keSA9IGNvcmQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkgPSBjb3JkLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICBib2R5LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTZWdtZW50Q29sbGlkZXJzKGNvcmQpO1xyXG5cclxuICAgICAgICBjb25zdCBzcGFjaW5nID0gTWF0aC5tYXgodGhpcy5wYXRoU2FtcGxlU3BhY2luZyAqIDEuNSwgMTYpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyUG9pbnRzID0gc2FtcGxlcy5sZW5ndGggPiA4MFxyXG4gICAgICAgICAgICA/IHRoaXMuc2FtcGxlQWxvbmdQYXRoKHNhbXBsZXMsIHNwYWNpbmcpXHJcbiAgICAgICAgICAgIDogc2FtcGxlcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlclBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBjb3JkLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICBjb2wub2Zmc2V0ID0gY29sbGlkZXJQb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbC5yYWRpdXMgPSB0aGlzLnNlZ21lbnRSYWRpdXM7XHJcbiAgICAgICAgICAgIGNvbC5mcmljdGlvbiA9IDAuMzU7XHJcbiAgICAgICAgICAgIGNvbC5yZXN0aXR1dGlvbiA9IDAuMDU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2FtcGxlQWxvbmdQYXRoKHBvaW50czogY2MuVmVjMltdLCBzcGFjaW5nOiBudW1iZXIpOiBjYy5WZWMyW10ge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjYXJyeSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbKGkgKyAxKSAlIHBvaW50cy5sZW5ndGhdO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ0xlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChzZWdMZW4gPD0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXJYID0gZHggLyBzZWdMZW47XHJcbiAgICAgICAgICAgIGNvbnN0IGRpclkgPSBkeSAvIHNlZ0xlbjtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBjYXJyeTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChkaXN0IDwgc2VnTGVuKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goY2MudjIoYS54ICsgZGlyWCAqIGRpc3QsIGEueSArIGRpclkgKiBkaXN0KSk7XHJcbiAgICAgICAgICAgICAgICBkaXN0ICs9IHNwYWNpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FycnkgPSBkaXN0IC0gc2VnTGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNhbXBsZXMubGVuZ3RoID4gMCA/IHNhbXBsZXMgOiBwb2ludHMuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGNQYXRoTGVuZ3RoKHBvaW50czogY2MuVmVjMltdKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzWyhpICsgMSkgJSBwb2ludHMubGVuZ3RoXTtcclxuICAgICAgICAgICAgbGVuICs9IGNjLnYyKGIueCAtIGEueCwgYi55IC0gYS55KS5tYWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyU2VnbWVudENvbGxpZGVycyhjb3JkOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IGNvcmQuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjaXJjbGVzW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbnN1cmVDaGFybUxheWVyKCkge1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuYWN0aXZlQ29yZC5nZXRDaGlsZEJ5TmFtZSgnY2hhcm1zT25Db3JkJyk7XHJcbiAgICAgICAgaWYgKCFsYXllcikge1xyXG4gICAgICAgICAgICBsYXllciA9IG5ldyBjYy5Ob2RlKCdjaGFybXNPbkNvcmQnKTtcclxuICAgICAgICAgICAgbGF5ZXIucGFyZW50ID0gdGhpcy5hY3RpdmVDb3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJtTGF5ZXIgPSBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc29sdmVSZWZlcmVuY2VzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBraGF5ID0gbWFpbi5nZXRDaGlsZEJ5TmFtZSgna2hheScpO1xyXG4gICAgICAgICAgICBpZiAoa2hheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0ZSA9IGtoYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kVG91Y2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG91Y2hCb3VuZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudG91Y2hCb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdWNoTm9kZSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgdGhpcy5kcmFnZ2luZ0NoYXJtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gdGhpcy5nZXRQbGF0ZUNoYXJtQXQoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgaWYgKCFjaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSBldmVudC5nZXRJRCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnREcmFnKGNoYXJtLCBldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IGV2ZW50LmdldElEKCkgIT09IHRoaXMuYWN0aXZlVG91Y2hJZCB8fCAhdGhpcy5kcmFnZ2luZ0NoYXJtKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLnNldFBvc2l0aW9uKHRoaXMuZ2V0TWFpbkxvY2FsUG9zKGV2ZW50LmdldExvY2F0aW9uKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgZXZlbnQuZ2V0SUQoKSAhPT0gdGhpcy5hY3RpdmVUb3VjaElkIHx8ICF0aGlzLmRyYWdnaW5nQ2hhcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhcm0gPSB0aGlzLmRyYWdnaW5nQ2hhcm07XHJcbiAgICAgICAgY29uc3QgY2hhcm1Xb3JsZCA9IGNoYXJtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGRyb3BBbmNob3IgPSB0aGlzLmdldERyb3BBbmNob3IoY2hhcm1Xb3JsZCk7XHJcbiAgICAgICAgaWYgKGRyb3BBbmNob3IpIHtcclxuICAgICAgICAgICAgdGhpcy50aHJlYWRDaGFybU9udG9Db3JkKGNoYXJtLCBkcm9wQW5jaG9yKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Pay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXREcmFnZ2VkQ2hhcm0oY2hhcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0RHJhZyhjaGFybTogY2MuTm9kZSwgc2NyZWVuUG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtID0gY2hhcm07XHJcbiAgICAgICAgdGhpcy5kcmFnT3JpZ2luUGFyZW50ID0gY2hhcm0ucGFyZW50O1xyXG4gICAgICAgIHRoaXMuZHJhZ09yaWdpblBvcyA9IGNoYXJtLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5kcmFnT3JpZ2luU2libGluZ0luZGV4ID0gY2hhcm0uZ2V0U2libGluZ0luZGV4KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLktpbmVtYXRpYztcclxuICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGNoYXJtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gbWFpbjtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbihtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKSk7XHJcbiAgICAgICAgY2hhcm0uc2V0U2libGluZ0luZGV4KG1haW4uY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKHRoaXMuZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXREcmFnZ2VkQ2hhcm0oY2hhcm06IGNjLk5vZGUpIHtcclxuICAgICAgICBjaGFybS5wYXJlbnQgPSB0aGlzLmRyYWdPcmlnaW5QYXJlbnQ7XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24odGhpcy5kcmFnT3JpZ2luUG9zKTtcclxuICAgICAgICBjaGFybS5zZXRTaWJsaW5nSW5kZXgodGhpcy5kcmFnT3JpZ2luU2libGluZ0luZGV4KTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aHJlYWRDaGFybU9udG9Db3JkKGNoYXJtOiBjYy5Ob2RlLCBkcm9wQW5jaG9yOiBEcm9wQW5jaG9yKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBhbmNob3JQb3MgPSBjYy52Mihkcm9wQW5jaG9yLm5vZGUueCwgZHJvcEFuY2hvci5ub2RlLnkpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aGlzLmZpbmROZWFyZXN0UGF0aEluZGV4KHBhdGgucG9pbnRzLCBhbmNob3JQb3MpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXIgPSB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBzdGFydEluZGV4LCBkcm9wQW5jaG9yLnNpZGUpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0UG9zZSA9IHRoaXMuZ2V0UG9zZU9uUGF0aChwYXRoLnBvaW50cywgc3RhcnRJbmRleCwgcGF0aERpciwgMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpdm90ID0gdGhpcy5zZXR1cENoYXJtSGFuZ1JpZyhjaGFybSk7XHJcbiAgICAgICAgcGl2b3QucGFyZW50ID0gdGhpcy5jaGFybUxheWVyO1xyXG4gICAgICAgIHBpdm90LnNldFBvc2l0aW9uKGNjLnYzKHN0YXJ0UG9zZS54LCBzdGFydFBvc2UueSwgMCkpO1xyXG4gICAgICAgIGNoYXJtLmFuZ2xlID0gMDtcclxuICAgICAgICBjaGFybS5jaGlsZHJlblswXS5zY2FsZSA9IDAuODtcclxuICAgICAgICBjb25zdCBwaXZvdEJvZHkgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAocGl2b3RCb2R5KSB7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5ncmF2aXR5U2NhbGUgPSAxO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuYWxsb3dTbGVlcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhbmdlbnQgPSB0aGlzLmdldFRhbmdlbnRBdEluZGV4KHBhdGgucG9pbnRzLCBzdGFydEluZGV4LCBwYXRoRGlyKTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5ID0gdGFuZ2VudC5tdWwoOTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2hhcm1Cb2R5ID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKGNoYXJtQm9keSkge1xyXG4gICAgICAgICAgICBjaGFybUJvZHkuYW5ndWxhclZlbG9jaXR5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29yZENoYXJtcy5wdXNoKHtcclxuICAgICAgICAgICAgcGl2b3QsXHJcbiAgICAgICAgICAgIGNoYXJtLFxyXG4gICAgICAgICAgICBzZXR0bGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RpbGxUaW1lOiAwLFxyXG4gICAgICAgICAgICBzaWRlOiBkcm9wQW5jaG9yLnNpZGUsXHJcbiAgICAgICAgICAgIHBhdGhTdGFydEluZGV4OiBzdGFydEluZGV4LFxyXG4gICAgICAgICAgICBwYXRoRGlyLFxyXG4gICAgICAgICAgICBwYXRoRGlzdGFuY2U6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFThuqFvIHBpdm90ICjEkWnhu4NtIG5lbyB0csOqbiBkw6J5KSArIFJldm9sdXRlSm9pbnQ7IHBo4bqnbiBkxrDhu5tpIGNoYXJtIGx1bmcgbGF5IHRoZW8gcGh5c2ljcy4gKi9cclxuICAgIHByaXZhdGUgc2V0dXBDaGFybUhhbmdSaWcoY2hhcm06IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoY2hhcm0ucGFyZW50ICYmIGNoYXJtLnBhcmVudC5uYW1lID09PSAnY2hhcm1QaXZvdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYXJtLnBhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmdMb2NhbCA9IHRoaXMuZ2V0SGFuZ0xvY2FsT2Zmc2V0KGNoYXJtKTtcclxuICAgICAgICBjb25zdCBsYXllciA9IGNoYXJtLnBhcmVudDtcclxuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGxheWVyLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGFybS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpdm90ID0gbmV3IGNjLk5vZGUoJ2NoYXJtUGl2b3QnKTtcclxuICAgICAgICBwaXZvdC5wYXJlbnQgPSBsYXllcjtcclxuICAgICAgICBwaXZvdC5zZXRQb3NpdGlvbihsYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcykpO1xyXG5cclxuICAgICAgICBjaGFybS5wYXJlbnQgPSBwaXZvdDtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbihjYy52MygtaGFuZ0xvY2FsLngsIC1oYW5nTG9jYWwueSwgMCkpO1xyXG4gICAgICAgIGNoYXJtLmFuZ2xlID0gMDtcclxuXHJcbiAgICAgICAgbGV0IHBpdm90Qm9keSA9IHBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghcGl2b3RCb2R5KSB7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keSA9IHBpdm90LmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwaXZvdEJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICBwaXZvdEJvZHkuZ3Jhdml0eVNjYWxlID0gMTtcclxuICAgICAgICBwaXZvdEJvZHkubGluZWFyRGFtcGluZyA9IDAuMTI7XHJcbiAgICAgICAgcGl2b3RCb2R5LmFuZ3VsYXJEYW1waW5nID0gMTtcclxuICAgICAgICBwaXZvdEJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgcGl2b3RCb2R5LmFsbG93U2xlZXAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHBpdm90Q29sID0gcGl2b3QuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgaWYgKCFwaXZvdENvbCkge1xyXG4gICAgICAgICAgICBwaXZvdENvbCA9IHBpdm90LmFkZENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwaXZvdENvbC5yYWRpdXMgPSB0aGlzLnBpdm90Q29sbGlkZXJSYWRpdXM7XHJcbiAgICAgICAgcGl2b3RDb2wuZnJpY3Rpb24gPSAwLjM7XHJcbiAgICAgICAgcGl2b3RDb2wucmVzdGl0dXRpb24gPSAwLjA1O1xyXG4gICAgICAgIHBpdm90Q29sLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgY2hhcm1Cb2R5ID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFjaGFybUJvZHkpIHtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5ID0gY2hhcm0uYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoYXJtQm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgIGNoYXJtQm9keS5ncmF2aXR5U2NhbGUgPSAxO1xyXG4gICAgICAgIGNoYXJtQm9keS5saW5lYXJEYW1waW5nID0gMC4wNTtcclxuICAgICAgICBjaGFybUJvZHkuYW5ndWxhckRhbXBpbmcgPSAwLjEyO1xyXG4gICAgICAgIGNoYXJtQm9keS5maXhlZFJvdGF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmFsbG93U2xlZXAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmFibGVDaGFybVBoeXNpY3NDb2xsaWRlcihjaGFybSk7XHJcblxyXG4gICAgICAgIGxldCBqb2ludCA9IHBpdm90LmdldENvbXBvbmVudChjYy5SZXZvbHV0ZUpvaW50KTtcclxuICAgICAgICBpZiAoIWpvaW50KSB7XHJcbiAgICAgICAgICAgIGpvaW50ID0gcGl2b3QuYWRkQ29tcG9uZW50KGNjLlJldm9sdXRlSm9pbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqb2ludC5jb25uZWN0ZWRCb2R5ID0gY2hhcm1Cb2R5O1xyXG4gICAgICAgIGpvaW50LmFuY2hvciA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgIGpvaW50LmNvbm5lY3RlZEFuY2hvciA9IGhhbmdMb2NhbDtcclxuICAgICAgICBqb2ludC5jb2xsaWRlQ29ubmVjdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBwaXZvdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEhhbmdMb2NhbE9mZnNldChjaGFybTogY2MuTm9kZSk6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjaGFybS5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpIGFzIGFueTtcclxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLmdldEhhbmdMb2NhbE9mZnNldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRIYW5nTG9jYWxPZmZzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDU1KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuYWJsZUNoYXJtUGh5c2ljc0NvbGxpZGVyKGNoYXJtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGlkZXIgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb2xsaWRlci5zZW5zb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29sbGlkZXIuZnJpY3Rpb24gPSAwLjI1O1xyXG4gICAgICAgICAgICBjb2xsaWRlci5yZXN0aXR1dGlvbiA9IDAuMDg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFuZ2VudEF0SW5kZXgocG9pbnRzOiBjYy5WZWMyW10sIGluZGV4OiBudW1iZXIsIGRpcjogbnVtYmVyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgbmV4dElkeCA9IHRoaXMud3JhcEluZGV4KGluZGV4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhID0gcG9pbnRzW2luZGV4XTtcclxuICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gYi55IC0gYS55O1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgfHwgMTtcclxuICAgICAgICByZXR1cm4gY2MudjIoZHggLyBsZW4sIGR5IC8gbGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5lYXJlc3RPblBhdGgocG9pbnRzOiBjYy5WZWMyW10sIHBvczogY2MuVmVjMik6IHsgaW5kZXg6IG51bWJlcjsgbmVhcmVzdDogY2MuVmVjMiB9IHtcclxuICAgICAgICBsZXQgYmVzdEluZGV4ID0gMDtcclxuICAgICAgICBsZXQgYmVzdERpc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY2MudjIocG9pbnRzW2ldLnggLSBwb3MueCwgcG9pbnRzW2ldLnkgLSBwb3MueSkubWFnU3FyKCk7XHJcbiAgICAgICAgICAgIGlmIChkIDwgYmVzdERpc3QpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0ID0gZDtcclxuICAgICAgICAgICAgICAgIGJlc3RJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGluZGV4OiBiZXN0SW5kZXgsIG5lYXJlc3Q6IHBvaW50c1tiZXN0SW5kZXhdIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kTmVhcmVzdFBhdGhJbmRleChwb2ludHM6IGNjLlZlYzJbXSwgcG9zOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgYmVzdCA9IDA7XHJcbiAgICAgICAgbGV0IGJlc3REaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY2MudjIocG9pbnRzW2ldLnggLSBwb3MueCwgcG9pbnRzW2ldLnkgLSBwb3MueSkubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkIDwgYmVzdERpc3QpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0ID0gZDtcclxuICAgICAgICAgICAgICAgIGJlc3QgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGlja1BhdGhEaXJlY3Rpb24ocG9pbnRzOiBjYy5WZWMyW10sIGVudHJ5SW5kZXg6IG51bWJlciwgc2lkZTogQ29yZFNpZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNjb3JlID0gKGRpcjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzID0gMDtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IGVudHJ5SW5kZXg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDA7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICAgICAgICAgIHMgKz0gLXAueSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIGlmIChzaWRlID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzICs9IHAueCA8IDAgPyAzIDogLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgKz0gcC54ID4gMCA/IDMgOiAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBzY29yZSgxKSA+PSBzY29yZSgtMSkgPyAxIDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQb3NlT25QYXRoKFxyXG4gICAgICAgIHBvaW50czogY2MuVmVjMltdLFxyXG4gICAgICAgIHN0YXJ0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBkaXI6IG51bWJlcixcclxuICAgICAgICBkaXN0YW5jZTogbnVtYmVyXHJcbiAgICApOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBhbmdsZTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGxldCBpZHggPSBzdGFydEluZGV4O1xyXG4gICAgICAgIGxldCByZW1haW4gPSBkaXN0YW5jZTtcclxuICAgICAgICBjb25zdCBtYXhTdGVwID0gcG9pbnRzLmxlbmd0aCArIDI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgbWF4U3RlcDsgc3RlcCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpZHggKyBkaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbbmV4dElkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcclxuICAgICAgICAgICAgY29uc3Qgc2VnTGVuID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICAgICAgaWYgKHNlZ0xlbiA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZW1haW4gPD0gc2VnTGVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcmVtYWluIC8gc2VnTGVuO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGEueCArIGR4ICogdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBhLnkgKyBkeSAqIHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KSAqIDE4MCAvIE1hdGguUEkgLSA5MDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHgsIHksIGFuZ2xlIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbWFpbiAtPSBzZWdMZW47XHJcbiAgICAgICAgICAgIGlkeCA9IG5leHRJZHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsYXN0ID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgcmV0dXJuIHsgeDogbGFzdC54LCB5OiBsYXN0LnksIGFuZ2xlOiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3cmFwSW5kZXgoaW5kZXg6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiBsZW5ndGggKyBpbmRleDtcclxuICAgICAgICBpZiAoaW5kZXggPj0gbGVuZ3RoKSByZXR1cm4gaW5kZXggLSBsZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZTogQ29yZENoYXJtU3RhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIXBhdGgpIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBwYXRoLnRvdGFsTGVuZ3RoICogMC41MjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNoYXJtU2xpZGUoc3RhdGU6IENvcmRDaGFybVN0YXRlLCBkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHN0YXRlLnBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIWJvZHkgfHwgIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgY29uc3Qgb25QYXRoID0gdGhpcy5nZXROZWFyZXN0T25QYXRoKHBhdGgucG9pbnRzLCBwb3MpO1xyXG4gICAgICAgIGNvbnN0IHRhbmdlbnQgPSB0aGlzLmdldFRhbmdlbnRBdEluZGV4KHBhdGgucG9pbnRzLCBvblBhdGguaW5kZXgsIHN0YXRlLnBhdGhEaXIpO1xyXG5cclxuICAgICAgICBzdGF0ZS5wYXRoRGlzdGFuY2UgPSB0aGlzLmdldERpc3RhbmNlQWxvbmdQYXRoKFxyXG4gICAgICAgICAgICBwYXRoLnBvaW50cyxcclxuICAgICAgICAgICAgc3RhdGUucGF0aFN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgIHN0YXRlLnBhdGhEaXIsXHJcbiAgICAgICAgICAgIHBvc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuc2V0dGxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhYID0gb25QYXRoLm5lYXJlc3QueCAtIHBvcy54O1xyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhZID0gb25QYXRoLm5lYXJlc3QueSAtIHBvcy55O1xyXG4gICAgICAgICAgICBsZXQgdnggPSBib2R5LmxpbmVhclZlbG9jaXR5LnggKyB0b1BhdGhYICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHQ7XHJcbiAgICAgICAgICAgIGxldCB2eSA9IGJvZHkubGluZWFyVmVsb2NpdHkueSArIHRvUGF0aFkgKiB0aGlzLnBhdGhQdWxsU3RyZW5ndGggKiBkdDtcclxuICAgICAgICAgICAgdnggKz0gdGFuZ2VudC54ICogdGhpcy5zbGlkZUdyYXZpdHkgKiBkdDtcclxuICAgICAgICAgICAgdnkgKz0gdGFuZ2VudC55ICogdGhpcy5zbGlkZUdyYXZpdHkgKiBkdDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gTWF0aC5zcXJ0KHZ4ICogdnggKyB2eSAqIHZ5KTtcclxuICAgICAgICAgICAgaWYgKHNwZWVkID4gdGhpcy5tYXhTbGlkZVNwZWVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMubWF4U2xpZGVTcGVlZCAvIHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgdnggKj0gc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB2eSAqPSBzY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIodngsIHZ5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5wYXRoRGlzdGFuY2UgPj0gdGhpcy5nZXRNYXhTbGlkZURpc3RhbmNlKHN0YXRlKSAtIDIpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldHRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzcGVlZCA9IGJvZHkubGluZWFyVmVsb2NpdHkubWFnKCk7XHJcbiAgICAgICAgaWYgKHNwZWVkIDwgdGhpcy5zZXR0bGVTcGVlZCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdGlsbFRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zdGlsbFRpbWUgPj0gMC40KSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXR0bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0aWxsVGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuc2V0dGxlZCkge1xyXG4gICAgICAgICAgICBib2R5LmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyRGFtcGluZyA9IDEuMjtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyRGFtcGluZyA9IDAuODtcclxuICAgICAgICAgICAgYm9keS5hbGxvd1NsZWVwID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhvbGRYID0gKG9uUGF0aC5uZWFyZXN0LnggLSBwb3MueCkgKiB0aGlzLnBhdGhQdWxsU3RyZW5ndGggKiBkdCAqIDAuMzU7XHJcbiAgICAgICAgICAgIGNvbnN0IGhvbGRZID0gKG9uUGF0aC5uZWFyZXN0LnkgLSBwb3MueSkgKiB0aGlzLnBhdGhQdWxsU3RyZW5ndGggKiBkdCAqIDAuMzU7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MihcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkueCArIGhvbGRYLFxyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eS55ICsgaG9sZFlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREaXN0YW5jZUFsb25nUGF0aChcclxuICAgICAgICBwb2ludHM6IGNjLlZlYzJbXSxcclxuICAgICAgICBzdGFydEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgZGlyOiBudW1iZXIsXHJcbiAgICAgICAgcG9zOiBjYy5WZWMyXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IG5lYXJlc3QgPSB0aGlzLmdldE5lYXJlc3RPblBhdGgocG9pbnRzLCBwb3MpO1xyXG4gICAgICAgIGxldCBkaXN0ID0gMDtcclxuICAgICAgICBsZXQgaWR4ID0gc3RhcnRJbmRleDtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBuZWFyZXN0LmluZGV4O1xyXG4gICAgICAgIGxldCBndWFyZCA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlIChpZHggIT09IHRhcmdldCAmJiBndWFyZCA8IHBvaW50cy5sZW5ndGggKyAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpZHggKyBkaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbbmV4dElkeF07XHJcbiAgICAgICAgICAgIGRpc3QgKz0gY2MudjIoYi54IC0gYS54LCBiLnkgLSBhLnkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgICAgICBndWFyZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VnQSA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgIGRpc3QgKz0gY2MudjIocG9zLnggLSBzZWdBLngsIHBvcy55IC0gc2VnQS55KS5tYWcoKTtcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERyb3BBbmNob3Iod29ybGRQb3M6IGNjLlZlYzIpOiBEcm9wQW5jaG9yIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZUNvcmQgfHwgIXRoaXMubGVmdEFuY2hvciB8fCAhdGhpcy5yaWdodEFuY2hvcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvY2FsID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICBjb25zdCBsZWZ0UG9zID0gdGhpcy5sZWZ0QW5jaG9yLnBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0UG9zID0gdGhpcy5yaWdodEFuY2hvci5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdExlZnQgPSBjYy52Mihsb2NhbC54IC0gbGVmdFBvcy54LCBsb2NhbC55IC0gbGVmdFBvcy55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBkaXN0UmlnaHQgPSBjYy52Mihsb2NhbC54IC0gcmlnaHRQb3MueCwgbG9jYWwueSAtIHJpZ2h0UG9zLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IG5lYXJMZWZ0ID0gZGlzdExlZnQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuICAgICAgICBjb25zdCBuZWFyUmlnaHQgPSBkaXN0UmlnaHQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuXHJcbiAgICAgICAgaWYgKG5lYXJMZWZ0IHx8IG5lYXJSaWdodCkge1xyXG4gICAgICAgICAgICBpZiAobmVhckxlZnQgJiYgbmVhclJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzdExlZnQgPD0gZGlzdFJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgPyB7IG5vZGU6IHRoaXMubGVmdEFuY2hvciwgc2lkZTogJ2xlZnQnIH1cclxuICAgICAgICAgICAgICAgICAgICA6IHsgbm9kZTogdGhpcy5yaWdodEFuY2hvciwgc2lkZTogJ3JpZ2h0JyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZWFyTGVmdFxyXG4gICAgICAgICAgICAgICAgPyB7IG5vZGU6IHRoaXMubGVmdEFuY2hvciwgc2lkZTogJ2xlZnQnIH1cclxuICAgICAgICAgICAgICAgIDogeyBub2RlOiB0aGlzLnJpZ2h0QW5jaG9yLCBzaWRlOiAncmlnaHQnIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0b3BZID0gTWF0aC5tYXgobGVmdFBvcy55LCByaWdodFBvcy55KSAtIDIwO1xyXG4gICAgICAgIGNvbnN0IG1pblggPSBNYXRoLm1pbihsZWZ0UG9zLngsIHJpZ2h0UG9zLngpIC0gMzA7XHJcbiAgICAgICAgY29uc3QgbWF4WCA9IE1hdGgubWF4KGxlZnRQb3MueCwgcmlnaHRQb3MueCkgKyAzMDtcclxuICAgICAgICBjb25zdCBpblRvcFpvbmUgPSBsb2NhbC55ID49IHRvcFkgLSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzXHJcbiAgICAgICAgICAgICYmIGxvY2FsLnggPj0gbWluWFxyXG4gICAgICAgICAgICAmJiBsb2NhbC54IDw9IG1heFg7XHJcblxyXG4gICAgICAgIGlmICghaW5Ub3Bab25lKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlTGVmdCA9IGxvY2FsLnggPCAobGVmdFBvcy54ICsgcmlnaHRQb3MueCkgKiAwLjU7XHJcbiAgICAgICAgcmV0dXJuIHVzZUxlZnRcclxuICAgICAgICAgICAgPyB7IG5vZGU6IHRoaXMubGVmdEFuY2hvciwgc2lkZTogJ2xlZnQnIH1cclxuICAgICAgICAgICAgOiB7IG5vZGU6IHRoaXMucmlnaHRBbmNob3IsIHNpZGU6ICdyaWdodCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBsYXRlQ2hhcm1BdChzY3JlZW5Qb3M6IGNjLlZlYzIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5wbGF0ZS5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLnBsYXRlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmFjdGl2ZSB8fCAhY2hpbGQuZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2hhcm1PbkNvcmQoY2hpbGQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBjaGlsZC5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICAgICAgaWYgKHJlY3QuY29udGFpbnMoc2NyZWVuUG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNDaGFybU9uQ29yZChjaGFybTogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jb3JkQ2hhcm1zW2ldO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuY2hhcm0gPT09IGNoYXJtIHx8IHN0YXRlLnBpdm90ID09PSBjaGFybSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjaGFybS5wYXJlbnQgPT09IHN0YXRlLnBpdm90KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvczogY2MuVmVjMik6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1haW5Ob2RlKCkuY29udmVydFRvTm9kZVNwYWNlQVIoc2NyZWVuUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1haW5Ob2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nIHx8IG5vZGUucGFyZW50Lm5hbWUgPT09ICdDYW52YXMnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nID8gbm9kZS5wYXJlbnQgOiBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQ29yZFJvdW5kTGlzdC5wYXJlbnQgfHwgdGhpcy5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcm1TbGlkZSh0aGlzLmNvcmRDaGFybXNbaV0sIGR0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19