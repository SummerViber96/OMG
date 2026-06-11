
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
        /** Thu nhỏ PhysicsPolygonCollider của charm (1 = giữ nguyên prefab). */
        _this.charmColliderScale = 0.85;
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
        if (!collider)
            return;
        if (!charm._colliderScaled) {
            var scale_1 = this.charmColliderScale;
            if (scale_1 > 0 && scale_1 !== 1) {
                collider.points = collider.points.map(function (p) { return cc.v2(p.x * scale_1, p.y * scale_1); });
            }
            charm._colliderScaled = true;
        }
        collider.enabled = true;
        collider.sensor = false;
        collider.friction = 0.25;
        collider.restitution = 0.08;
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
        property
    ], CordRoundGame.prototype, "charmColliderScale", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ29yZFJvdW5kR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQTBCNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFzcUJDO1FBbnFCRyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyx1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFHL0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFHM0Isa0JBQVksR0FBVyxHQUFHLENBQUM7UUFHM0IsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBRy9CLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLHlCQUFtQixHQUFXLENBQUMsQ0FBQztRQUVoQyx3RUFBd0U7UUFFeEUsd0JBQWtCLEdBQVcsSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMsR0FBK0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNsRCxtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUM5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixnQkFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEMsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBQ2pDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLDRCQUFzQixHQUFXLENBQUMsQ0FBQztRQUNuQyxtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGNB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QUksQ0FBQztJQUNsRCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNqRDtJQUNMLENBQUM7SUFscUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQUd0QjtRQURDLFFBQVE7NERBQ3VCO0lBR2hDO1FBREMsUUFBUTs0REFDc0I7SUFHL0I7UUFEQyxRQUFRO3dEQUNrQjtJQUczQjtRQURDLFFBQVE7dURBQ2tCO0lBRzNCO1FBREMsUUFBUTt3REFDbUI7SUFHNUI7UUFEQyxRQUFROzJEQUNzQjtJQUcvQjtRQURDLFFBQVE7c0RBQ2dCO0lBR3pCO1FBREMsUUFBUTs4REFDdUI7SUFJaEM7UUFEQyxRQUFROzZEQUN5QjtJQWxDakIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXNxQmpDO0lBQUQsb0JBQUM7Q0F0cUJELEFBc3FCQyxDQXRxQjBDLEVBQUUsQ0FBQyxTQUFTLEdBc3FCdEQ7a0JBdHFCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG50eXBlIENvcmRTaWRlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcclxuXHJcbmludGVyZmFjZSBDb3JkUGF0aERhdGEge1xyXG4gICAgcG9pbnRzOiBjYy5WZWMyW107XHJcbiAgICB0b3RhbExlbmd0aDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29yZENoYXJtU3RhdGUge1xyXG4gICAgcGl2b3Q6IGNjLk5vZGU7XHJcbiAgICBjaGFybTogY2MuTm9kZTtcclxuICAgIHNldHRsZWQ6IGJvb2xlYW47XHJcbiAgICBzdGlsbFRpbWU6IG51bWJlcjtcclxuICAgIHNpZGU6IENvcmRTaWRlO1xyXG4gICAgcGF0aFN0YXJ0SW5kZXg6IG51bWJlcjtcclxuICAgIHBhdGhEaXI6IG51bWJlcjtcclxuICAgIHBhdGhEaXN0YW5jZTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRHJvcEFuY2hvciB7XHJcbiAgICBub2RlOiBjYy5Ob2RlO1xyXG4gICAgc2lkZTogQ29yZFNpZGU7XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmRSb3VuZEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ29yZFJvdW5kTGlzdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF0ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBlbnRyeURldGVjdFJhZGl1czogbnVtYmVyID0gMTEwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGF0aFNhbXBsZVNwYWNpbmc6IG51bWJlciA9IDEyO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2VnbWVudFJhZGl1czogbnVtYmVyID0gMTQ7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzbGlkZUdyYXZpdHk6IG51bWJlciA9IDMyMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heFNsaWRlU3BlZWQ6IG51bWJlciA9IDI4MDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBhdGhQdWxsU3RyZW5ndGg6IG51bWJlciA9IDQyMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNldHRsZVNwZWVkOiBudW1iZXIgPSAyMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBpdm90Q29sbGlkZXJSYWRpdXM6IG51bWJlciA9IDg7XHJcblxyXG4gICAgLyoqIFRodSBuaOG7jyBQaHlzaWNzUG9seWdvbkNvbGxpZGVyIGPhu6dhIGNoYXJtICgxID0gZ2nhu68gbmd1ecOqbiBwcmVmYWIpLiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjaGFybUNvbGxpZGVyU2NhbGU6IG51bWJlciA9IDAuODU7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmVDb3JkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29yZFBhdGhzOiBNYXA8Y2MuTm9kZSwgQ29yZFBhdGhEYXRhPiA9IG5ldyBNYXAoKTtcclxuICAgIHByaXZhdGUgcHJlcGFyZWRDb3JkczogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGxlZnRBbmNob3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByaWdodEFuY2hvcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNoYXJtTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb3JkQ2hhcm1zOiBDb3JkQ2hhcm1TdGF0ZVtdID0gW107XHJcbiAgICBwcml2YXRlIGRyYWdnaW5nQ2hhcm06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3JpZ2luUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHJhZ09yaWdpblBvczogY2MuVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdPcmlnaW5TaWJsaW5nSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFjdGl2ZVRvdWNoSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0b3VjaEJvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhcnRCcmFjZWxldE1vZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLkNvcmRSb3VuZExpc3QpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJlc29sdmVSZWZlcmVuY2VzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ29yZCA9IHRoaXMuQ29yZFJvdW5kTGlzdC5jaGlsZHJlbltnbG9iYWxUaGlzLmlkU3RyaW5nXTtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlQ29yZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnRBbmNob3IgPSB0aGlzLmFjdGl2ZUNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ2xlZnQnKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QW5jaG9yID0gdGhpcy5hY3RpdmVDb3JkLmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmICghdGhpcy5sZWZ0QW5jaG9yIHx8ICF0aGlzLnJpZ2h0QW5jaG9yKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBDb3JkIGlzIG1pc3NpbmcgbGVmdC9yaWdodCBhbmNob3Igbm9kZXMuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKDAsIC01MjApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb3JkKHRoaXMuQ29yZFJvdW5kTGlzdC5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5zdXJlQ2hhcm1MYXllcigpO1xyXG4gICAgICAgIHRoaXMuYmluZFRvdWNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmVwYXJlQ29yZChjb3JkOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJlcGFyZWRDb3Jkcy5pbmRleE9mKGNvcmQpID49IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmF3UG9pbnRzID0gdGhpcy5nZXRQb2x5Z29uQ29sbGlkZXJQb2ludHMoY29yZCk7XHJcbiAgICAgICAgaWYgKHJhd1BvaW50cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBDb3JkIFwiJyArIGNvcmQubmFtZSArICdcIiBuZWVkcyBjYy5Qb2x5Z29uQ29sbGlkZXIuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbXBsZXMgPSB0aGlzLnNhbXBsZUFsb25nUGF0aChyYXdQb2ludHMsIHRoaXMucGF0aFNhbXBsZVNwYWNpbmcpO1xyXG4gICAgICAgIHRoaXMuY29yZFBhdGhzLnNldChjb3JkLCB7XHJcbiAgICAgICAgICAgIHBvaW50czogc2FtcGxlcyxcclxuICAgICAgICAgICAgdG90YWxMZW5ndGg6IHRoaXMuY2FsY1BhdGhMZW5ndGgoc2FtcGxlcyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBDb3JkUGh5c2ljcyhjb3JkLCBzYW1wbGVzKTtcclxuICAgICAgICB0aGlzLnByZXBhcmVkQ29yZHMucHVzaChjb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBvbHlnb25Db2xsaWRlclBvaW50cyhjb3JkOiBjYy5Ob2RlKTogY2MuVmVjMltdIHtcclxuICAgICAgICBjb25zdCBwb2x5ID0gY29yZC5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIXBvbHkgfHwgIXBvbHkucG9pbnRzIHx8IHBvbHkucG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcG9seS5vZmZzZXQgfHwgY2MudjIoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHBvbHkucG9pbnRzLm1hcChwID0+IGNjLnYyKHAueCArIG9mZnNldC54LCBwLnkgKyBvZmZzZXQueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBDb3JkUGh5c2ljcyhjb3JkOiBjYy5Ob2RlLCBzYW1wbGVzOiBjYy5WZWMyW10pIHtcclxuICAgICAgICBsZXQgYm9keSA9IGNvcmQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkgPSBjb3JkLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICBib2R5LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTZWdtZW50Q29sbGlkZXJzKGNvcmQpO1xyXG5cclxuICAgICAgICBjb25zdCBzcGFjaW5nID0gTWF0aC5tYXgodGhpcy5wYXRoU2FtcGxlU3BhY2luZyAqIDEuNSwgMTYpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyUG9pbnRzID0gc2FtcGxlcy5sZW5ndGggPiA4MFxyXG4gICAgICAgICAgICA/IHRoaXMuc2FtcGxlQWxvbmdQYXRoKHNhbXBsZXMsIHNwYWNpbmcpXHJcbiAgICAgICAgICAgIDogc2FtcGxlcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlclBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBjb3JkLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICBjb2wub2Zmc2V0ID0gY29sbGlkZXJQb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbC5yYWRpdXMgPSB0aGlzLnNlZ21lbnRSYWRpdXM7XHJcbiAgICAgICAgICAgIGNvbC5mcmljdGlvbiA9IDAuMzU7XHJcbiAgICAgICAgICAgIGNvbC5yZXN0aXR1dGlvbiA9IDAuMDU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2FtcGxlQWxvbmdQYXRoKHBvaW50czogY2MuVmVjMltdLCBzcGFjaW5nOiBudW1iZXIpOiBjYy5WZWMyW10ge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjYXJyeSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbKGkgKyAxKSAlIHBvaW50cy5sZW5ndGhdO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ0xlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChzZWdMZW4gPD0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXJYID0gZHggLyBzZWdMZW47XHJcbiAgICAgICAgICAgIGNvbnN0IGRpclkgPSBkeSAvIHNlZ0xlbjtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBjYXJyeTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChkaXN0IDwgc2VnTGVuKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goY2MudjIoYS54ICsgZGlyWCAqIGRpc3QsIGEueSArIGRpclkgKiBkaXN0KSk7XHJcbiAgICAgICAgICAgICAgICBkaXN0ICs9IHNwYWNpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FycnkgPSBkaXN0IC0gc2VnTGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNhbXBsZXMubGVuZ3RoID4gMCA/IHNhbXBsZXMgOiBwb2ludHMuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGNQYXRoTGVuZ3RoKHBvaW50czogY2MuVmVjMltdKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzWyhpICsgMSkgJSBwb2ludHMubGVuZ3RoXTtcclxuICAgICAgICAgICAgbGVuICs9IGNjLnYyKGIueCAtIGEueCwgYi55IC0gYS55KS5tYWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyU2VnbWVudENvbGxpZGVycyhjb3JkOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IGNvcmQuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjaXJjbGVzW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbnN1cmVDaGFybUxheWVyKCkge1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuYWN0aXZlQ29yZC5nZXRDaGlsZEJ5TmFtZSgnY2hhcm1zT25Db3JkJyk7XHJcbiAgICAgICAgaWYgKCFsYXllcikge1xyXG4gICAgICAgICAgICBsYXllciA9IG5ldyBjYy5Ob2RlKCdjaGFybXNPbkNvcmQnKTtcclxuICAgICAgICAgICAgbGF5ZXIucGFyZW50ID0gdGhpcy5hY3RpdmVDb3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJtTGF5ZXIgPSBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc29sdmVSZWZlcmVuY2VzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBraGF5ID0gbWFpbi5nZXRDaGlsZEJ5TmFtZSgna2hheScpO1xyXG4gICAgICAgICAgICBpZiAoa2hheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0ZSA9IGtoYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kVG91Y2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG91Y2hCb3VuZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudG91Y2hCb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdWNoTm9kZSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgdGhpcy5kcmFnZ2luZ0NoYXJtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gdGhpcy5nZXRQbGF0ZUNoYXJtQXQoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgaWYgKCFjaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSBldmVudC5nZXRJRCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnREcmFnKGNoYXJtLCBldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IGV2ZW50LmdldElEKCkgIT09IHRoaXMuYWN0aXZlVG91Y2hJZCB8fCAhdGhpcy5kcmFnZ2luZ0NoYXJtKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLnNldFBvc2l0aW9uKHRoaXMuZ2V0TWFpbkxvY2FsUG9zKGV2ZW50LmdldExvY2F0aW9uKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgZXZlbnQuZ2V0SUQoKSAhPT0gdGhpcy5hY3RpdmVUb3VjaElkIHx8ICF0aGlzLmRyYWdnaW5nQ2hhcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhcm0gPSB0aGlzLmRyYWdnaW5nQ2hhcm07XHJcbiAgICAgICAgY29uc3QgY2hhcm1Xb3JsZCA9IGNoYXJtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGRyb3BBbmNob3IgPSB0aGlzLmdldERyb3BBbmNob3IoY2hhcm1Xb3JsZCk7XHJcbiAgICAgICAgaWYgKGRyb3BBbmNob3IpIHtcclxuICAgICAgICAgICAgdGhpcy50aHJlYWRDaGFybU9udG9Db3JkKGNoYXJtLCBkcm9wQW5jaG9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RHJhZ2dlZENoYXJtKGNoYXJtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmdDaGFybSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUb3VjaElkID0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydERyYWcoY2hhcm06IGNjLk5vZGUsIHNjcmVlblBvczogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmdDaGFybSA9IGNoYXJtO1xyXG4gICAgICAgIHRoaXMuZHJhZ09yaWdpblBhcmVudCA9IGNoYXJtLnBhcmVudDtcclxuICAgICAgICB0aGlzLmRyYWdPcmlnaW5Qb3MgPSBjaGFybS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhZ09yaWdpblNpYmxpbmdJbmRleCA9IGNoYXJtLmdldFNpYmxpbmdJbmRleCgpO1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5LaW5lbWF0aWM7XHJcbiAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBjaGFybS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoYXJtLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgIGNoYXJtLnBhcmVudCA9IG1haW47XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24obWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcykpO1xyXG4gICAgICAgIGNoYXJtLnNldFNpYmxpbmdJbmRleChtYWluLmNoaWxkcmVuQ291bnQgLSAxKTtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbih0aGlzLmdldE1haW5Mb2NhbFBvcyhzY3JlZW5Qb3MpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0RHJhZ2dlZENoYXJtKGNoYXJtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gdGhpcy5kcmFnT3JpZ2luUGFyZW50O1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKHRoaXMuZHJhZ09yaWdpblBvcyk7XHJcbiAgICAgICAgY2hhcm0uc2V0U2libGluZ0luZGV4KHRoaXMuZHJhZ09yaWdpblNpYmxpbmdJbmRleCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGhyZWFkQ2hhcm1PbnRvQ29yZChjaGFybTogY2MuTm9kZSwgZHJvcEFuY2hvcjogRHJvcEFuY2hvcikge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgYW5jaG9yUG9zID0gY2MudjIoZHJvcEFuY2hvci5ub2RlLngsIGRyb3BBbmNob3Iubm9kZS55KTtcclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgYW5jaG9yUG9zKTtcclxuICAgICAgICBjb25zdCBwYXRoRGlyID0gdGhpcy5waWNrUGF0aERpcmVjdGlvbihwYXRoLnBvaW50cywgc3RhcnRJbmRleCwgZHJvcEFuY2hvci5zaWRlKTtcclxuICAgICAgICBjb25zdCBzdGFydFBvc2UgPSB0aGlzLmdldFBvc2VPblBhdGgocGF0aC5wb2ludHMsIHN0YXJ0SW5kZXgsIHBhdGhEaXIsIDApO1xyXG5cclxuICAgICAgICBjb25zdCBwaXZvdCA9IHRoaXMuc2V0dXBDaGFybUhhbmdSaWcoY2hhcm0pO1xyXG4gICAgICAgIHBpdm90LnBhcmVudCA9IHRoaXMuY2hhcm1MYXllcjtcclxuICAgICAgICBwaXZvdC5zZXRQb3NpdGlvbihjYy52MyhzdGFydFBvc2UueCwgc3RhcnRQb3NlLnksIDApKTtcclxuICAgICAgICBjaGFybS5hbmdsZSA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpdm90Qm9keSA9IHBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChwaXZvdEJvZHkpIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFuZ2VudCA9IHRoaXMuZ2V0VGFuZ2VudEF0SW5kZXgocGF0aC5wb2ludHMsIHN0YXJ0SW5kZXgsIHBhdGhEaXIpO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkgPSB0YW5nZW50Lm11bCg5MCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGFybUJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoY2hhcm1Cb2R5KSB7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keS5hbmd1bGFyVmVsb2NpdHkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb3JkQ2hhcm1zLnB1c2goe1xyXG4gICAgICAgICAgICBwaXZvdCxcclxuICAgICAgICAgICAgY2hhcm0sXHJcbiAgICAgICAgICAgIHNldHRsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGlsbFRpbWU6IDAsXHJcbiAgICAgICAgICAgIHNpZGU6IGRyb3BBbmNob3Iuc2lkZSxcclxuICAgICAgICAgICAgcGF0aFN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgIHBhdGhEaXIsXHJcbiAgICAgICAgICAgIHBhdGhEaXN0YW5jZTogMCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVOG6oW8gcGl2b3QgKMSRaeG7g20gbmVvIHRyw6puIGTDonkpICsgUmV2b2x1dGVKb2ludDsgcGjhuqduIGTGsOG7m2kgY2hhcm0gbHVuZyBsYXkgdGhlbyBwaHlzaWNzLiAqL1xyXG4gICAgcHJpdmF0ZSBzZXR1cENoYXJtSGFuZ1JpZyhjaGFybTogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmIChjaGFybS5wYXJlbnQgJiYgY2hhcm0ucGFyZW50Lm5hbWUgPT09ICdjaGFybVBpdm90Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhcm0ucGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZ0xvY2FsID0gdGhpcy5nZXRIYW5nTG9jYWxPZmZzZXQoY2hhcm0pO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gY2hhcm0ucGFyZW50O1xyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zID0gbGF5ZXIuY29udmVydFRvV29ybGRTcGFjZUFSKGNoYXJtLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGl2b3QgPSBuZXcgY2MuTm9kZSgnY2hhcm1QaXZvdCcpO1xyXG4gICAgICAgIHBpdm90LnBhcmVudCA9IGxheWVyO1xyXG4gICAgICAgIHBpdm90LnNldFBvc2l0aW9uKGxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKSk7XHJcblxyXG4gICAgICAgIGNoYXJtLnBhcmVudCA9IHBpdm90O1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKGNjLnYzKC1oYW5nTG9jYWwueCwgLWhhbmdMb2NhbC55LCAwKSk7XHJcbiAgICAgICAgY2hhcm0uYW5nbGUgPSAwO1xyXG5cclxuICAgICAgICBsZXQgcGl2b3RCb2R5ID0gcGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFwaXZvdEJvZHkpIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5ID0gcGl2b3QuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpdm90Qm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgIHBpdm90Qm9keS5ncmF2aXR5U2NhbGUgPSAxO1xyXG4gICAgICAgIHBpdm90Qm9keS5saW5lYXJEYW1waW5nID0gMC4xMjtcclxuICAgICAgICBwaXZvdEJvZHkuYW5ndWxhckRhbXBpbmcgPSAxO1xyXG4gICAgICAgIHBpdm90Qm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICBwaXZvdEJvZHkuYWxsb3dTbGVlcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgcGl2b3RDb2wgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIXBpdm90Q29sKSB7XHJcbiAgICAgICAgICAgIHBpdm90Q29sID0gcGl2b3QuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpdm90Q29sLnJhZGl1cyA9IHRoaXMucGl2b3RDb2xsaWRlclJhZGl1cztcclxuICAgICAgICBwaXZvdENvbC5mcmljdGlvbiA9IDAuMztcclxuICAgICAgICBwaXZvdENvbC5yZXN0aXR1dGlvbiA9IDAuMDU7XHJcbiAgICAgICAgcGl2b3RDb2wuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBjaGFybUJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIWNoYXJtQm9keSkge1xyXG4gICAgICAgICAgICBjaGFybUJvZHkgPSBjaGFybS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhcm1Cb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmxpbmVhckRhbXBpbmcgPSAwLjA1O1xyXG4gICAgICAgIGNoYXJtQm9keS5hbmd1bGFyRGFtcGluZyA9IDAuMTI7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmZpeGVkUm90YXRpb24gPSBmYWxzZTtcclxuICAgICAgICBjaGFybUJvZHkuYWxsb3dTbGVlcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmVuYWJsZUNoYXJtUGh5c2ljc0NvbGxpZGVyKGNoYXJtKTtcclxuXHJcbiAgICAgICAgbGV0IGpvaW50ID0gcGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJldm9sdXRlSm9pbnQpO1xyXG4gICAgICAgIGlmICgham9pbnQpIHtcclxuICAgICAgICAgICAgam9pbnQgPSBwaXZvdC5hZGRDb21wb25lbnQoY2MuUmV2b2x1dGVKb2ludCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpvaW50LmNvbm5lY3RlZEJvZHkgPSBjaGFybUJvZHk7XHJcbiAgICAgICAgam9pbnQuYW5jaG9yID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQW5jaG9yID0gaGFuZ0xvY2FsO1xyXG4gICAgICAgIGpvaW50LmNvbGxpZGVDb25uZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBpdm90O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SGFuZ0xvY2FsT2Zmc2V0KGNoYXJtOiBjYy5Ob2RlKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGNoYXJtLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykgYXMgYW55O1xyXG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0uZ2V0SGFuZ0xvY2FsT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmdldEhhbmdMb2NhbE9mZnNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2MudjIoMCwgNTUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5hYmxlQ2hhcm1QaHlzaWNzQ29sbGlkZXIoY2hhcm06IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IGNoYXJtLmdldENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIWNvbGxpZGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghKGNoYXJtIGFzIGFueSkuX2NvbGxpZGVyU2NhbGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5jaGFybUNvbGxpZGVyU2NhbGU7XHJcbiAgICAgICAgICAgIGlmIChzY2FsZSA+IDAgJiYgc2NhbGUgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyLnBvaW50cyA9IGNvbGxpZGVyLnBvaW50cy5tYXAocCA9PiBjYy52MihwLnggKiBzY2FsZSwgcC55ICogc2NhbGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAoY2hhcm0gYXMgYW55KS5fY29sbGlkZXJTY2FsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY29sbGlkZXIuc2Vuc29yID0gZmFsc2U7XHJcbiAgICAgICAgY29sbGlkZXIuZnJpY3Rpb24gPSAwLjI1O1xyXG4gICAgICAgIGNvbGxpZGVyLnJlc3RpdHV0aW9uID0gMC4wODtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhbmdlbnRBdEluZGV4KHBvaW50czogY2MuVmVjMltdLCBpbmRleDogbnVtYmVyLCBkaXI6IG51bWJlcik6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpbmRleCArIGRpciwgcG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpbmRleF07XHJcbiAgICAgICAgY29uc3QgYiA9IHBvaW50c1tuZXh0SWR4XTtcclxuICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcclxuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpIHx8IDE7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKGR4IC8gbGVuLCBkeSAvIGxlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROZWFyZXN0T25QYXRoKHBvaW50czogY2MuVmVjMltdLCBwb3M6IGNjLlZlYzIpOiB7IGluZGV4OiBudW1iZXI7IG5lYXJlc3Q6IGNjLlZlYzIgfSB7XHJcbiAgICAgICAgbGV0IGJlc3RJbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGJlc3REaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IGNjLnYyKHBvaW50c1tpXS54IC0gcG9zLngsIHBvaW50c1tpXS55IC0gcG9zLnkpLm1hZ1NxcigpO1xyXG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdCA9IGQ7XHJcbiAgICAgICAgICAgICAgICBiZXN0SW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBpbmRleDogYmVzdEluZGV4LCBuZWFyZXN0OiBwb2ludHNbYmVzdEluZGV4XSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZE5lYXJlc3RQYXRoSW5kZXgocG9pbnRzOiBjYy5WZWMyW10sIHBvczogY2MuVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGJlc3QgPSAwO1xyXG4gICAgICAgIGxldCBiZXN0RGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IGNjLnYyKHBvaW50c1tpXS54IC0gcG9zLngsIHBvaW50c1tpXS55IC0gcG9zLnkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdCA9IGQ7XHJcbiAgICAgICAgICAgICAgICBiZXN0ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBpY2tQYXRoRGlyZWN0aW9uKHBvaW50czogY2MuVmVjMltdLCBlbnRyeUluZGV4OiBudW1iZXIsIHNpZGU6IENvcmRTaWRlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBzY29yZSA9IChkaXI6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcyA9IDA7XHJcbiAgICAgICAgICAgIGxldCBpZHggPSBlbnRyeUluZGV4O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQwOyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlkeCA9IHRoaXMud3JhcEluZGV4KGlkeCArIGRpciwgcG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgICAgICBzICs9IC1wLnkgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2lkZSA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyArPSBwLnggPCAwID8gMyA6IC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzICs9IHAueCA+IDAgPyAzIDogLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gc2NvcmUoMSkgPj0gc2NvcmUoLTEpID8gMSA6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UG9zZU9uUGF0aChcclxuICAgICAgICBwb2ludHM6IGNjLlZlYzJbXSxcclxuICAgICAgICBzdGFydEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgZGlyOiBudW1iZXIsXHJcbiAgICAgICAgZGlzdGFuY2U6IG51bWJlclxyXG4gICAgKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgYW5nbGU6IG51bWJlciB9IHtcclxuICAgICAgICBsZXQgaWR4ID0gc3RhcnRJbmRleDtcclxuICAgICAgICBsZXQgcmVtYWluID0gZGlzdGFuY2U7XHJcbiAgICAgICAgY29uc3QgbWF4U3RlcCA9IHBvaW50cy5sZW5ndGggKyAyO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8IG1heFN0ZXA7IHN0ZXArKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ0xlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChzZWdMZW4gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVtYWluIDw9IHNlZ0xlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHJlbWFpbiAvIHNlZ0xlbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBhLnggKyBkeCAqIHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gYS55ICsgZHkgKiB0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCkgKiAxODAgLyBNYXRoLlBJIC0gOTA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4LCB5LCBhbmdsZSB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZW1haW4gLT0gc2VnTGVuO1xyXG4gICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGFzdCA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgIHJldHVybiB7IHg6IGxhc3QueCwgeTogbGFzdC55LCBhbmdsZTogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd3JhcEluZGV4KGluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gbGVuZ3RoICsgaW5kZXg7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IGxlbmd0aCkgcmV0dXJuIGluZGV4IC0gbGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1heFNsaWRlRGlzdGFuY2Uoc3RhdGU6IENvcmRDaGFybVN0YXRlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gcGF0aC50b3RhbExlbmd0aCAqIDAuNTI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDaGFybVNsaWRlKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSwgZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBzdGF0ZS5waXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFib2R5IHx8ICFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgIGNvbnN0IG9uUGF0aCA9IHRoaXMuZ2V0TmVhcmVzdE9uUGF0aChwYXRoLnBvaW50cywgcG9zKTtcclxuICAgICAgICBjb25zdCB0YW5nZW50ID0gdGhpcy5nZXRUYW5nZW50QXRJbmRleChwYXRoLnBvaW50cywgb25QYXRoLmluZGV4LCBzdGF0ZS5wYXRoRGlyKTtcclxuXHJcbiAgICAgICAgc3RhdGUucGF0aERpc3RhbmNlID0gdGhpcy5nZXREaXN0YW5jZUFsb25nUGF0aChcclxuICAgICAgICAgICAgcGF0aC5wb2ludHMsXHJcbiAgICAgICAgICAgIHN0YXRlLnBhdGhTdGFydEluZGV4LFxyXG4gICAgICAgICAgICBzdGF0ZS5wYXRoRGlyLFxyXG4gICAgICAgICAgICBwb3NcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLnNldHRsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWCA9IG9uUGF0aC5uZWFyZXN0LnggLSBwb3MueDtcclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWSA9IG9uUGF0aC5uZWFyZXN0LnkgLSBwb3MueTtcclxuICAgICAgICAgICAgbGV0IHZ4ID0gYm9keS5saW5lYXJWZWxvY2l0eS54ICsgdG9QYXRoWCAqIHRoaXMucGF0aFB1bGxTdHJlbmd0aCAqIGR0O1xyXG4gICAgICAgICAgICBsZXQgdnkgPSBib2R5LmxpbmVhclZlbG9jaXR5LnkgKyB0b1BhdGhZICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHQ7XHJcbiAgICAgICAgICAgIHZ4ICs9IHRhbmdlbnQueCAqIHRoaXMuc2xpZGVHcmF2aXR5ICogZHQ7XHJcbiAgICAgICAgICAgIHZ5ICs9IHRhbmdlbnQueSAqIHRoaXMuc2xpZGVHcmF2aXR5ICogZHQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IE1hdGguc3FydCh2eCAqIHZ4ICsgdnkgKiB2eSk7XHJcbiAgICAgICAgICAgIGlmIChzcGVlZCA+IHRoaXMubWF4U2xpZGVTcGVlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLm1heFNsaWRlU3BlZWQgLyBzcGVlZDtcclxuICAgICAgICAgICAgICAgIHZ4ICo9IHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgdnkgKj0gc2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZ4LCB2eSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucGF0aERpc3RhbmNlID49IHRoaXMuZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZSkgLSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXR0bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBib2R5LmxpbmVhclZlbG9jaXR5Lm1hZygpO1xyXG4gICAgICAgIGlmIChzcGVlZCA8IHRoaXMuc2V0dGxlU3BlZWQpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3RpbGxUaW1lICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc3RpbGxUaW1lID49IDAuNCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0dGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdGlsbFRpbWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLnNldHRsZWQpIHtcclxuICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhckRhbXBpbmcgPSAxLjI7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhckRhbXBpbmcgPSAwLjg7XHJcbiAgICAgICAgICAgIGJvZHkuYWxsb3dTbGVlcCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBob2xkWCA9IChvblBhdGgubmVhcmVzdC54IC0gcG9zLngpICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHQgKiAwLjM1O1xyXG4gICAgICAgICAgICBjb25zdCBob2xkWSA9IChvblBhdGgubmVhcmVzdC55IC0gcG9zLnkpICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHQgKiAwLjM1O1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5LnggKyBob2xkWCxcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkueSArIGhvbGRZXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGlzdGFuY2VBbG9uZ1BhdGgoXHJcbiAgICAgICAgcG9pbnRzOiBjYy5WZWMyW10sXHJcbiAgICAgICAgc3RhcnRJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGRpcjogbnVtYmVyLFxyXG4gICAgICAgIHBvczogY2MuVmVjMlxyXG4gICAgKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBuZWFyZXN0ID0gdGhpcy5nZXROZWFyZXN0T25QYXRoKHBvaW50cywgcG9zKTtcclxuICAgICAgICBsZXQgZGlzdCA9IDA7XHJcbiAgICAgICAgbGV0IGlkeCA9IHN0YXJ0SW5kZXg7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmVhcmVzdC5pbmRleDtcclxuICAgICAgICBsZXQgZ3VhcmQgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoaWR4ICE9PSB0YXJnZXQgJiYgZ3VhcmQgPCBwb2ludHMubGVuZ3RoICsgMSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgICAgICBkaXN0ICs9IGNjLnYyKGIueCAtIGEueCwgYi55IC0gYS55KS5tYWcoKTtcclxuICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICAgICAgZ3VhcmQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlZ0EgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICBkaXN0ICs9IGNjLnYyKHBvcy54IC0gc2VnQS54LCBwb3MueSAtIHNlZ0EueSkubWFnKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREcm9wQW5jaG9yKHdvcmxkUG9zOiBjYy5WZWMyKTogRHJvcEFuY2hvciB8IG51bGwge1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVDb3JkIHx8ICF0aGlzLmxlZnRBbmNob3IgfHwgIXRoaXMucmlnaHRBbmNob3IpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBsb2NhbCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgY29uc3QgbGVmdFBvcyA9IHRoaXMubGVmdEFuY2hvci5wb3NpdGlvbjtcclxuICAgICAgICBjb25zdCByaWdodFBvcyA9IHRoaXMucmlnaHRBbmNob3IucG9zaXRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3RMZWZ0ID0gY2MudjIobG9jYWwueCAtIGxlZnRQb3MueCwgbG9jYWwueSAtIGxlZnRQb3MueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgZGlzdFJpZ2h0ID0gY2MudjIobG9jYWwueCAtIHJpZ2h0UG9zLngsIGxvY2FsLnkgLSByaWdodFBvcy55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBuZWFyTGVmdCA9IGRpc3RMZWZ0IDw9IHRoaXMuZW50cnlEZXRlY3RSYWRpdXM7XHJcbiAgICAgICAgY29uc3QgbmVhclJpZ2h0ID0gZGlzdFJpZ2h0IDw9IHRoaXMuZW50cnlEZXRlY3RSYWRpdXM7XHJcblxyXG4gICAgICAgIGlmIChuZWFyTGVmdCB8fCBuZWFyUmlnaHQpIHtcclxuICAgICAgICAgICAgaWYgKG5lYXJMZWZ0ICYmIG5lYXJSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3RMZWZ0IDw9IGRpc3RSaWdodFxyXG4gICAgICAgICAgICAgICAgICAgID8geyBub2RlOiB0aGlzLmxlZnRBbmNob3IsIHNpZGU6ICdsZWZ0JyB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IG5vZGU6IHRoaXMucmlnaHRBbmNob3IsIHNpZGU6ICdyaWdodCcgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmVhckxlZnRcclxuICAgICAgICAgICAgICAgID8geyBub2RlOiB0aGlzLmxlZnRBbmNob3IsIHNpZGU6ICdsZWZ0JyB9XHJcbiAgICAgICAgICAgICAgICA6IHsgbm9kZTogdGhpcy5yaWdodEFuY2hvciwgc2lkZTogJ3JpZ2h0JyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdG9wWSA9IE1hdGgubWF4KGxlZnRQb3MueSwgcmlnaHRQb3MueSkgLSAyMDtcclxuICAgICAgICBjb25zdCBtaW5YID0gTWF0aC5taW4obGVmdFBvcy54LCByaWdodFBvcy54KSAtIDMwO1xyXG4gICAgICAgIGNvbnN0IG1heFggPSBNYXRoLm1heChsZWZ0UG9zLngsIHJpZ2h0UG9zLngpICsgMzA7XHJcbiAgICAgICAgY29uc3QgaW5Ub3Bab25lID0gbG9jYWwueSA+PSB0b3BZIC0gdGhpcy5lbnRyeURldGVjdFJhZGl1c1xyXG4gICAgICAgICAgICAmJiBsb2NhbC54ID49IG1pblhcclxuICAgICAgICAgICAgJiYgbG9jYWwueCA8PSBtYXhYO1xyXG5cclxuICAgICAgICBpZiAoIWluVG9wWm9uZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZUxlZnQgPSBsb2NhbC54IDwgKGxlZnRQb3MueCArIHJpZ2h0UG9zLngpICogMC41O1xyXG4gICAgICAgIHJldHVybiB1c2VMZWZ0XHJcbiAgICAgICAgICAgID8geyBub2RlOiB0aGlzLmxlZnRBbmNob3IsIHNpZGU6ICdsZWZ0JyB9XHJcbiAgICAgICAgICAgIDogeyBub2RlOiB0aGlzLnJpZ2h0QW5jaG9yLCBzaWRlOiAncmlnaHQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQbGF0ZUNoYXJtQXQoc2NyZWVuUG9zOiBjYy5WZWMyKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMucGxhdGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5wbGF0ZS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5hY3RpdmUgfHwgIWNoaWxkLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NoYXJtT25Db3JkKGNoaWxkKSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gY2hpbGQuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XHJcbiAgICAgICAgICAgIGlmIChyZWN0LmNvbnRhaW5zKHNjcmVlblBvcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQ2hhcm1PbkNvcmQoY2hhcm06IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY29yZENoYXJtc1tpXTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmNoYXJtID09PSBjaGFybSB8fCBzdGF0ZS5waXZvdCA9PT0gY2hhcm0pIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoY2hhcm0ucGFyZW50ID09PSBzdGF0ZS5waXZvdCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1haW5Mb2NhbFBvcyhzY3JlZW5Qb3M6IGNjLlZlYzIpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNYWluTm9kZSgpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHNjcmVlblBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNYWluTm9kZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICB3aGlsZSAobm9kZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50Lm5hbWUgPT09ICdtYWluJyB8fCBub2RlLnBhcmVudC5uYW1lID09PSAnQ2FudmFzJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUucGFyZW50Lm5hbWUgPT09ICdtYWluJyA/IG5vZGUucGFyZW50IDogbm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLkNvcmRSb3VuZExpc3QucGFyZW50IHx8IHRoaXMubm9kZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoYXJtU2xpZGUodGhpcy5jb3JkQ2hhcm1zW2ldLCBkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==