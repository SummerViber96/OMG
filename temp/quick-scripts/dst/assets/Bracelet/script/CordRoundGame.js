
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
var BraceletMatcher_1 = require("./BraceletMatcher");
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
        _this.hangSwingLimit = 32;
        _this.hangOutwardStiffness = 14;
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
        _this.soundDrop = null;
        _this.btnOk = null;
        _this.hand3 = null;
        /** Node tham chiếu vòng mẫu (vd: defaultCharm trong scene). */
        _this.defaultBraceletRef = null;
        /** Vòng mẫu theo từng loại dây (index = idString). Ưu tiên hơn defaultBraceletRef. */
        _this.defaultBraceletByCord = [];
        _this.matchResultLabel = null;
        _this.matchPositionTolerance = 80;
        _this.showDefaultPreview = true;
        /** Dây mẫu đúng (vd: 2 = green). Đúng màu dây được +30%. -1 = đoán từ tên cord (không tin cậy). */
        _this.defaultCordId = 2;
        /** Keychain đúng (fallback khi chưa gắn BraceletDefaultMeta). */
        _this.defaultKeychainIndex = 0;
        _this.localBox = null;
        _this.cachedDefaultLayout = [];
        _this.cachedDefaultCordId = 0;
        _this.cachedDefaultKeychainIndex = 0;
        _this.defaultConfigCached = false;
        _this.defaultPreviewNode = null;
        _this.lastMatchPercent = 0;
        _this.lastScoreBreakdown = null;
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
        this.cacheDefaultConfig(this.activeCord);
        if (this.showDefaultPreview) {
            this.showDefaultBraceletPreview();
        }
        this.bindTouch();
    };
    CordRoundGame.prototype.onLoad = function () {
        // Chỉ đọc meta sớm; layout charm sẽ build lại khi vào game với activeCord.
        this.cacheDefaultMetaOnly();
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
        // if (snap) {
        //     this.draggingCharm.setPosition(snap.pos);
        //     this.draggingCharm.angle = snap.angle;
        //     this.dragSnapSide = snap.side;
        // } else {
        this.draggingCharm.setPosition(touchPos);
        this.draggingCharm.angle = 0;
        this.dragSnapSide = null;
        // }
    };
    CordRoundGame.prototype.onTouchEnd = function (event) {
        if (!this.isActive || event.getID() !== this.activeTouchId || !this.draggingCharm)
            return;
        var charm = this.draggingCharm;
        var charmWorld = charm.parent.convertToWorldSpaceAR(charm.position);
        var dropAnchor = this.resolveDropAnchor(charmWorld, this.dragSnapSide, charm);
        if (dropAnchor) {
            cc.audioEngine.play(this.soundDrop, false, 1);
            this.hideDefaultBraceletPreview();
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
        if (!this.canDropOnSide(dropAnchor.side, charm))
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
        var hangLocal = this.getHangLocalOffset(charm);
        var outward = this.getOutwardFromCenter(cc.v2(anchorPos.x, anchorPos.y));
        charm.angle = this.angleForOutwardHang(outward, hangLocal);
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
            charmBody.syncRotation(true);
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
        charmBody.angularDamping = 0.65;
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
    CordRoundGame.prototype.getCordCenterLocal = function () {
        var path = this.cordPaths.get(this.activeCord);
        if (!path || path.points.length === 0) {
            return cc.v2(0, 0);
        }
        var cx = 0;
        var cy = 0;
        for (var i = 0; i < path.points.length; i++) {
            cx += path.points[i].x;
            cy += path.points[i].y;
        }
        var n = path.points.length;
        return cc.v2(cx / n, cy / n);
    };
    CordRoundGame.prototype.getOutwardFromCenter = function (pos) {
        var center = this.getCordCenterLocal();
        var outward = cc.v2(pos.x - center.x, pos.y - center.y);
        if (outward.magSqr() < 1) {
            return cc.v2(0, -1);
        }
        outward.normalizeSelf();
        return outward;
    };
    CordRoundGame.prototype.wrapAngleDeg = function (angle) {
        var a = angle;
        while (a > 180)
            a -= 360;
        while (a < -180)
            a += 360;
        return a;
    };
    CordRoundGame.prototype.getCharmBodyDir = function (hangLocal, angleDeg) {
        var localBase = cc.v2(-hangLocal.x, -hangLocal.y);
        var rad = angleDeg * Math.PI / 180;
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var dir = cc.v2(localBase.x * c - localBase.y * s, localBase.x * s + localBase.y * c);
        if (dir.magSqr() < 0.0001) {
            return cc.v2(0, -1);
        }
        dir.normalizeSelf();
        return dir;
    };
    CordRoundGame.prototype.angleForOutwardHang = function (outward, hangLocal) {
        var localBase = cc.v2(-hangLocal.x, -hangLocal.y);
        var baseAngle = Math.atan2(localBase.y, localBase.x);
        var outAngle = Math.atan2(outward.y, outward.x);
        return this.wrapAngleDeg((outAngle - baseAngle) * 180 / Math.PI);
    };
    CordRoundGame.prototype.constrainCharmHang = function (state, dt) {
        var charm = state.charm;
        var pivot = state.pivot;
        if (!charm || !pivot)
            return;
        var hangLocal = this.getHangLocalOffset(charm);
        var outward = this.getOutwardFromCenter(cc.v2(pivot.x, pivot.y));
        var targetAngle = this.angleForOutwardHang(outward, hangLocal);
        var body = charm.getComponent(cc.RigidBody);
        var angle = charm.angle;
        var offset = this.wrapAngleDeg(angle - targetAngle);
        var bodyDir = this.getCharmBodyDir(hangLocal, angle);
        var outwardDot = bodyDir.x * outward.x + bodyDir.y * outward.y;
        if (outwardDot < 0.02) {
            angle = targetAngle;
            charm.angle = angle;
            if (body) {
                body.angularVelocity = 0;
                body.syncRotation(true);
            }
            return;
        }
        if (offset > this.hangSwingLimit) {
            angle = targetAngle + this.hangSwingLimit;
        }
        else if (offset < -this.hangSwingLimit) {
            angle = targetAngle - this.hangSwingLimit;
        }
        else if (body) {
            var pull = this.wrapAngleDeg(targetAngle - angle);
            body.angularVelocity += pull * this.hangOutwardStiffness * dt;
            return;
        }
        if (Math.abs(angle - charm.angle) > 0.05) {
            charm.angle = angle;
            if (body) {
                body.angularVelocity *= 0.25;
                body.syncRotation(true);
            }
        }
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
    CordRoundGame.prototype.getCharmSlotSpacing = function (charm) {
        var item = this.getCharmItemComp(charm);
        if (item && typeof item.slotSpacing === 'number') {
            return item.slotSpacing;
        }
        return this.charmSlotSpacing;
    };
    CordRoundGame.prototype.canDropOnSide = function (side, charm) {
        var onSide = this.getCharmsOnSide(side);
        if (onSide.length === 0)
            return true;
        return this.getMinPathDistanceOnSide(side) >= this.getCharmSlotSpacing(charm);
    };
    CordRoundGame.prototype.pickAvailableSide = function (nearLeft, nearRight, distLeft, distRight, charm, preferLeft) {
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
            if (this.canDropOnSide(candidates[i].side, charm)) {
                return candidates[i].side;
            }
        }
        return null;
    };
    CordRoundGame.prototype.resolveDropAnchor = function (worldPos, preferredSide, charm) {
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
        if (preferredSide && this.canDropOnSide(preferredSide, charm)) {
            return {
                side: preferredSide,
                cordPos: preferredSide === 'left' ? leftPos : rightPos,
            };
        }
        if (preferredSide && !this.canDropOnSide(preferredSide, charm)) {
            var alt = preferSide;
            if (alt !== preferredSide && this.canDropOnSide(alt, charm)) {
                return {
                    side: alt,
                    cordPos: alt === 'left' ? leftPos : rightPos,
                };
            }
        }
        if (nearLeft || nearRight) {
            var side_1 = this.pickAvailableSide(nearLeft, nearRight, distLeft, distRight, charm);
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
        var side = this.pickAvailableSide(true, true, distLeft, distRight, charm, preferLeft);
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
        var charm = this.draggingCharm;
        if (!charm)
            return null;
        if (nearLeft || nearRight) {
            side = this.pickAvailableSide(nearLeft, nearRight, distLeft, distRight, charm);
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
                side = this.pickAvailableSide(true, true, distLeft, distRight, charm, preferLeft);
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
    CordRoundGame.prototype.getDropAnchorForSide = function (side, charm) {
        if (!this.canDropOnSide(side, charm))
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
    CordRoundGame.prototype.getDefaultBraceletRef = function () {
        var cordId = globalThis.idString || 0;
        if (this.defaultBraceletByCord.length > cordId && this.defaultBraceletByCord[cordId]) {
            return this.defaultBraceletByCord[cordId];
        }
        return this.defaultBraceletRef;
    };
    CordRoundGame.prototype.getCharmItemComp = function (charm) {
        var item = charm.getComponent('CharmItem');
        if (item)
            return item;
        var comps = charm.getComponents(cc.Component);
        for (var i = 0; i < comps.length; i++) {
            var c = comps[i];
            if (c && typeof c.tag === 'number' && typeof c.loadIMG === 'function') {
                return c;
            }
        }
        return null;
    };
    CordRoundGame.prototype.inferCordIdFromRef = function (ref) {
        var cord = this.getRefCordNode(ref);
        var name = cord.name.toLowerCase();
        var colorIds = [
            { key: 'black', id: 0 },
            { key: 'blue', id: 1 },
            { key: 'green', id: 2 },
            { key: 'pink', id: 3 },
            { key: 'purple', id: 4 },
            { key: 'yellow', id: 5 },
            { key: 'white', id: 6 },
        ];
        for (var i = 0; i < colorIds.length; i++) {
            if (name.indexOf(colorIds[i].key) >= 0) {
                return colorIds[i].id;
            }
        }
        return this.defaultCordId >= 0 ? this.defaultCordId : 0;
    };
    CordRoundGame.prototype.readDefaultMeta = function (ref) {
        var meta = ref && ref.getComponent('BraceletDefaultMeta');
        if (meta) {
            return {
                cordId: meta.cordId,
                keychainIndex: meta.keychainIndex,
            };
        }
        if (this.defaultCordId >= 0) {
            return {
                cordId: this.defaultCordId,
                keychainIndex: this.defaultKeychainIndex,
            };
        }
        return {
            cordId: this.inferCordIdFromRef(ref),
            keychainIndex: this.defaultKeychainIndex,
        };
    };
    CordRoundGame.prototype.cacheDefaultMetaOnly = function () {
        var ref = this.getDefaultBraceletRefForCache();
        if (!ref)
            return;
        var meta = this.readDefaultMeta(ref);
        this.cachedDefaultCordId = meta.cordId;
        this.cachedDefaultKeychainIndex = meta.keychainIndex;
    };
    CordRoundGame.prototype.cacheDefaultConfig = function (activeCord) {
        var ref = this.getDefaultBraceletRefForCache();
        if (!ref) {
            cc.warn('[CordRoundGame] Chưa gán defaultBraceletRef — không thể so sánh vòng mẫu.');
            this.cachedDefaultLayout = [];
            this.cachedDefaultCordId = this.defaultCordId >= 0 ? this.defaultCordId : 0;
            this.cachedDefaultKeychainIndex = this.defaultKeychainIndex;
            this.defaultConfigCached = false;
            return;
        }
        var meta = this.readDefaultMeta(ref);
        this.cachedDefaultCordId = meta.cordId;
        this.cachedDefaultKeychainIndex = meta.keychainIndex;
        this.cachedDefaultLayout = this.buildDefaultLayoutFromRef(ref, activeCord);
        this.defaultConfigCached = this.cachedDefaultLayout.length > 0;
        cc.log('[CordRoundGame] Default config: cordId=' + this.cachedDefaultCordId
            + ' (player=' + (globalThis.idString || 0) + ')'
            + ' keychain=' + this.cachedDefaultKeychainIndex
            + ' charms=' + this.cachedDefaultLayout.length);
    };
    /** Luôn trả ref mẫu cố định — không phụ thuộc dây người chơi đang chọn. */
    CordRoundGame.prototype.getDefaultBraceletRefForCache = function () {
        if (this.defaultBraceletRef) {
            return this.defaultBraceletRef;
        }
        for (var i = 0; i < this.defaultBraceletByCord.length; i++) {
            if (this.defaultBraceletByCord[i]) {
                return this.defaultBraceletByCord[i];
            }
        }
        return null;
    };
    CordRoundGame.prototype.getDefaultCordId = function () {
        return this.cachedDefaultCordId;
    };
    CordRoundGame.prototype.getDefaultKeychainIndex = function () {
        return this.cachedDefaultKeychainIndex;
    };
    CordRoundGame.prototype.getLastScoreBreakdown = function () {
        return this.lastScoreBreakdown;
    };
    CordRoundGame.prototype.getRefCordNode = function (ref) {
        if (ref.getComponent(cc.PolygonCollider))
            return ref;
        for (var i = 0; i < ref.childrenCount; i++) {
            var child = ref.children[i];
            if (child.getComponent(cc.PolygonCollider))
                return child;
        }
        return ref;
    };
    CordRoundGame.prototype.getRefCordAnchors = function (refCord) {
        var left = refCord.getChildByName('left');
        var right = refCord.getChildByName('right');
        if (!left || !right)
            return null;
        return {
            left: cc.v2(left.x, left.y),
            right: cc.v2(right.x, right.y),
        };
    };
    CordRoundGame.prototype.getPathDataForCord = function (cord) {
        var existing = this.cordPaths.get(cord);
        if (existing)
            return existing;
        var rawPoints = this.getPolygonColliderPoints(cord);
        if (rawPoints.length < 2)
            return null;
        var samples = this.sampleAlongPath(rawPoints, this.pathSampleSpacing);
        return {
            points: samples,
            totalLength: this.calcPathLength(samples),
        };
    };
    CordRoundGame.prototype.getCordAnchors = function (cord) {
        var left = cord.getChildByName('left');
        var right = cord.getChildByName('right');
        if (!left || !right)
            return null;
        return {
            left: cc.v2(left.x, left.y),
            right: cc.v2(right.x, right.y),
        };
    };
    CordRoundGame.prototype.getTemplateCord = function (cordId) {
        var id = cordId !== undefined ? cordId : this.cachedDefaultCordId;
        if (!this.CordRoundList || id < 0)
            return null;
        return this.CordRoundList.children[id] || null;
    };
    CordRoundGame.prototype.measurePathDistanceOnCord = function (cord, path, anchors, side, pos) {
        var entry = side === 'left' ? anchors.left : anchors.right;
        var entryIndex = this.findNearestPathIndex(path.points, entry);
        var pathDir = this.pickPathDirection(path.points, entryIndex, side);
        return this.getDistanceAlongPath(path.points, entryIndex, pathDir, pos);
    };
    CordRoundGame.prototype.buildDefaultLayout = function () {
        var ref = this.getDefaultBraceletRefForCache() || this.getDefaultBraceletRef();
        if (!ref)
            return [];
        return this.buildDefaultLayoutFromRef(ref, this.activeCord);
    };
    CordRoundGame.prototype.buildDefaultLayoutFromRef = function (ref, activeCord) {
        if (!ref)
            return [];
        var refCord = this.getRefCordNode(ref);
        var templateCord = activeCord || this.getTemplateCord();
        if (!templateCord) {
            cc.warn('[CordRoundGame] Không tìm thấy dây game để đọc layout mẫu.');
            return [];
        }
        var path = this.getPathDataForCord(templateCord);
        var anchors = this.getCordAnchors(templateCord);
        if (!path || !anchors) {
            cc.warn('[CordRoundGame] Dây game thiếu PolygonCollider hoặc anchor left/right.');
            return [];
        }
        var charmRoot = ref.getChildByName('charm') || ref;
        var slots = [];
        for (var i = 0; i < charmRoot.childrenCount; i++) {
            var charm = charmRoot.children[i];
            var item = this.getCharmItemComp(charm);
            if (!item)
                continue;
            var posOnCord = refCord.convertToNodeSpaceAR(charm.convertToWorldSpaceAR(cc.v2(0, 0)));
            var side = this.resolveSideForPosition(posOnCord, anchors);
            var pathDistance = this.measurePathDistanceOnCord(templateCord, path, anchors, side, posOnCord);
            slots.push({
                tag: item.tag,
                colorIndex: item.colorIndex || 0,
                side: side,
                pathDistance: pathDistance,
            });
        }
        return slots;
    };
    CordRoundGame.prototype.resolveSideForPosition = function (cordLocal, anchors) {
        var distLeft = cc.v2(cordLocal.x - anchors.left.x, cordLocal.y - anchors.left.y).mag();
        var distRight = cc.v2(cordLocal.x - anchors.right.x, cordLocal.y - anchors.right.y).mag();
        return distLeft <= distRight ? 'left' : 'right';
    };
    CordRoundGame.prototype.buildPlayerLayout = function () {
        var slots = [];
        for (var i = 0; i < this.cordCharms.length; i++) {
            var state = this.cordCharms[i];
            var item = state.charm.getComponent('CharmItem');
            if (!item)
                continue;
            slots.push({
                tag: item.tag,
                colorIndex: item.colorIndex || 0,
                side: state.side,
                pathDistance: this.getCharmPathDistance(state),
            });
        }
        return slots;
    };
    CordRoundGame.prototype.getSlotPose = function (slot) {
        var path = this.cordPaths.get(this.activeCord);
        var anchors = this.getCordAnchorPositions();
        if (!path || !anchors) {
            return { x: 0, y: 0, angle: 0 };
        }
        var entry = slot.side === 'left' ? anchors.left : anchors.right;
        var entryIndex = this.findNearestPathIndex(path.points, entry);
        var pathDir = this.pickPathDirection(path.points, entryIndex, slot.side);
        return this.getPoseOnPath(path.points, entryIndex, pathDir, slot.pathDistance);
    };
    CordRoundGame.prototype.showDefaultBraceletPreview = function () {
        this.hideDefaultBraceletPreview();
        if (!this.cachedDefaultLayout.length || !this.charmLayer)
            return;
        var ref = this.getDefaultBraceletRef();
        var charmRoot = ref && (ref.getChildByName('charm') || ref);
        if (!charmRoot)
            return;
        var preview = new cc.Node('defaultBraceletPreview');
        preview.parent = this.charmLayer;
        preview.setSiblingIndex(0);
        var srcIndex = 0;
        for (var i = 0; i < charmRoot.childrenCount; i++) {
            var src = charmRoot.children[i];
            if (!src.getComponent('CharmItem'))
                continue;
            if (srcIndex >= this.cachedDefaultLayout.length)
                break;
            var slot = this.cachedDefaultLayout[srcIndex];
            srcIndex++;
            var clone = cc.instantiate(src);
            var pose = this.getSlotPose(slot);
            clone.parent = preview;
            clone.setPosition(cc.v3(pose.x, pose.y, 0));
            clone.angle = pose.angle;
            clone.opacity = 150;
            var body = clone.getComponent(cc.RigidBody);
            if (body)
                body.enabled = false;
            var colliders = clone.getComponents(cc.PhysicsCollider);
            for (var c = 0; c < colliders.length; c++) {
                colliders[c].enabled = false;
            }
        }
        this.defaultPreviewNode = preview;
    };
    CordRoundGame.prototype.hideDefaultBraceletPreview = function () {
        if (this.defaultPreviewNode) {
            this.defaultPreviewNode.destroy();
            this.defaultPreviewNode = null;
        }
    };
    /** So sánh charm (0–100%, chưa gồm dây và keychain). */
    CordRoundGame.prototype.compareCharmsOnly = function () {
        var expected = this.cachedDefaultLayout.length > 0
            ? this.cachedDefaultLayout
            : this.buildDefaultLayout();
        if (expected.length === 0)
            return 0;
        var actual = this.buildPlayerLayout();
        return BraceletMatcher_1.calcCharmMatchPercent(expected, actual, this.matchPositionTolerance);
    };
    /**
     * So sánh đầy đủ: dây (30%) + charm (50%) + keychain (20%).
     * Gọi khi đã có lựa chọn keychain của người chơi.
     */
    CordRoundGame.prototype.compareFull = function (playerKeychainIndex) {
        var ref = this.getDefaultBraceletRefForCache();
        if (ref) {
            this.cachedDefaultLayout = this.buildDefaultLayoutFromRef(ref, this.activeCord);
        }
        var expected = this.cachedDefaultLayout;
        var actual = this.buildPlayerLayout();
        var actualCordId = globalThis.idString || 0;
        this.lastScoreBreakdown = BraceletMatcher_1.calcFullScore(this.cachedDefaultCordId, actualCordId, expected, actual, this.cachedDefaultKeychainIndex, playerKeychainIndex, this.matchPositionTolerance);
        this.lastMatchPercent = this.lastScoreBreakdown.total;
        cc.log('[CordRoundGame] Compare: expectedCord=' + this.cachedDefaultCordId
            + ' playerCord=' + actualCordId
            + ' expectedCharms=' + expected.length
            + ' playerCharms=' + actual.length
            + ' keychain=' + playerKeychainIndex
            + ' => ' + this.lastMatchPercent + '%'
            + ' (dây ' + this.lastScoreBreakdown.cordScore
            + ' charm ' + this.lastScoreBreakdown.charmScore
            + ' key ' + this.lastScoreBreakdown.keychainScore + ')');
        return this.lastScoreBreakdown;
    };
    /** @deprecated dùng compareFull */
    CordRoundGame.prototype.compareWithDefault = function () {
        return this.compareCharmsOnly();
    };
    CordRoundGame.prototype.getLastMatchPercent = function () {
        return this.lastMatchPercent;
    };
    CordRoundGame.prototype.showMatchResult = function (percent, breakdown) {
        var bd = breakdown || this.lastScoreBreakdown;
        var value = percent !== undefined ? percent : this.lastMatchPercent;
        if (this.matchResultLabel) {
            this.matchResultLabel.node.active = true;
            this.matchResultLabel.string = value + '%';
        }
        if (bd) {
            cc.log('[CordRoundGame] Score: ' + value + '%'
                + ' | cord=' + bd.cordScore
                + ' charm=' + bd.charmScore
                + ' keychain=' + bd.keychainScore);
        }
        else {
            cc.log('[CordRoundGame] Match: ' + value + '%');
        }
    };
    /** Gọi khi xong xếp charm — chỉ ẩn preview, chưa tính % cuối. */
    CordRoundGame.prototype.finishBraceletPhase = function () {
        this.hideDefaultBraceletPreview();
    };
    /** Gọi khi kết thúc game — tính % đầy đủ và hiển thị. */
    CordRoundGame.prototype.finishAndCompare = function (playerKeychainIndex) {
        this.hideDefaultBraceletPreview();
        var breakdown = this.compareFull(playerKeychainIndex);
        this.showMatchResult(breakdown.total, breakdown);
        return breakdown.total;
    };
    CordRoundGame.prototype.update = function (dt) {
        if (!this.isActive)
            return;
        for (var i = 0; i < this.cordCharms.length; i++) {
            this.updateCharmSlide(this.cordCharms[i], dt);
        }
    };
    CordRoundGame.prototype.lateUpdate = function (dt) {
        if (!this.isActive)
            return;
        for (var i = 0; i < this.cordCharms.length; i++) {
            this.constrainCharmHang(this.cordCharms[i], dt);
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
        property
    ], CordRoundGame.prototype, "hangSwingLimit", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "hangOutwardStiffness", void 0);
    __decorate([
        property(cc.AudioClip)
    ], CordRoundGame.prototype, "soundDrop", void 0);
    __decorate([
        property(cc.Node)
    ], CordRoundGame.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Node)
    ], CordRoundGame.prototype, "hand3", void 0);
    __decorate([
        property(cc.Node)
    ], CordRoundGame.prototype, "defaultBraceletRef", void 0);
    __decorate([
        property([cc.Node])
    ], CordRoundGame.prototype, "defaultBraceletByCord", void 0);
    __decorate([
        property(cc.Label)
    ], CordRoundGame.prototype, "matchResultLabel", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "matchPositionTolerance", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "showDefaultPreview", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "defaultCordId", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "defaultKeychainIndex", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ29yZFJvdW5kR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkc7QUFFdkcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUEwQjVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBbWxEQztRQWhsREcsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyx1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFHL0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFHM0Isa0JBQVksR0FBVyxHQUFHLENBQUM7UUFHM0IsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBRy9CLHFCQUFlLEdBQVcsRUFBRSxDQUFDO1FBRzdCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLHlCQUFtQixHQUFXLENBQUMsQ0FBQztRQUdoQyxzQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFHL0Isb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFHNUIsMEJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMsR0FBK0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNsRCxtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUM5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixnQkFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEMsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsa0JBQVksR0FB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K0RBQ3dCO0lBM0ZoQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBbWxEakM7SUFBRCxvQkFBQztDQW5sREQsQUFtbERDLENBbmxEMEMsRUFBRSxDQUFDLFNBQVMsR0FtbER0RDtrQkFubERvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FsY0NoYXJtTWF0Y2hQZXJjZW50LCBjYWxjRnVsbFNjb3JlLCBDaGFybVNsb3REYXRhLCBNYXRjaFNjb3JlQnJlYWtkb3duIH0gZnJvbSAnLi9CcmFjZWxldE1hdGNoZXInO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbnR5cGUgQ29yZFNpZGUgPSAnbGVmdCcgfCAncmlnaHQnO1xyXG5cclxuaW50ZXJmYWNlIENvcmRQYXRoRGF0YSB7XHJcbiAgICBwb2ludHM6IGNjLlZlYzJbXTtcclxuICAgIHRvdGFsTGVuZ3RoOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb3JkQ2hhcm1TdGF0ZSB7XHJcbiAgICBwaXZvdDogY2MuTm9kZTtcclxuICAgIGNoYXJtOiBjYy5Ob2RlO1xyXG4gICAgc2V0dGxlZDogYm9vbGVhbjtcclxuICAgIHN0aWxsVGltZTogbnVtYmVyO1xyXG4gICAgc2lkZTogQ29yZFNpZGU7XHJcbiAgICBwYXRoU3RhcnRJbmRleDogbnVtYmVyO1xyXG4gICAgcGF0aERpcjogbnVtYmVyO1xyXG4gICAgcGF0aERpc3RhbmNlOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBEcm9wQW5jaG9yIHtcclxuICAgIHNpZGU6IENvcmRTaWRlO1xyXG4gICAgY29yZFBvczogY2MuVmVjMjtcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZFJvdW5kR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDb3JkUm91bmRMaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcm1IaW5kOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZW50cnlEZXRlY3RSYWRpdXM6IG51bWJlciA9IDExMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBhdGhTYW1wbGVTcGFjaW5nOiBudW1iZXIgPSAxMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNlZ21lbnRSYWRpdXM6IG51bWJlciA9IDE0O1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2xpZGVHcmF2aXR5OiBudW1iZXIgPSAzMjA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhTbGlkZVNwZWVkOiBudW1iZXIgPSAyODA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwYXRoUHVsbFN0cmVuZ3RoOiBudW1iZXIgPSA0MjA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwYXRoUHVsbERhbXBpbmc6IG51bWJlciA9IDE2O1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2V0dGxlU3BlZWQ6IG51bWJlciA9IDIyO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGl2b3RDb2xsaWRlclJhZGl1czogbnVtYmVyID0gODtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGNoYXJtU2xvdFNwYWNpbmc6IG51bWJlciA9IDEzMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGhhbmdTd2luZ0xpbWl0OiBudW1iZXIgPSAzMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGhhbmdPdXR3YXJkU3RpZmZuZXNzOiBudW1iZXIgPSAxNDtcclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZUNvcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb3JkUGF0aHM6IE1hcDxjYy5Ob2RlLCBDb3JkUGF0aERhdGE+ID0gbmV3IE1hcCgpO1xyXG4gICAgcHJpdmF0ZSBwcmVwYXJlZENvcmRzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgbGVmdEFuY2hvcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJpZ2h0QW5jaG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2hhcm1MYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvcmRDaGFybXM6IENvcmRDaGFybVN0YXRlW10gPSBbXTtcclxuICAgIHByaXZhdGUgZHJhZ2dpbmdDaGFybTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdTbmFwU2lkZTogQ29yZFNpZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3JpZ2luUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHJhZ09yaWdpblBvczogY2MuVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdPcmlnaW5TaWJsaW5nSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFjdGl2ZVRvdWNoSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0b3VjaEJvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmREcm9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9rOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8qKiBOb2RlIHRoYW0gY2hp4bq/dSB2w7JuZyBt4bqrdSAodmQ6IGRlZmF1bHRDaGFybSB0cm9uZyBzY2VuZSkuICovXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRlZmF1bHRCcmFjZWxldFJlZjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFbDsm5nIG3huqt1IHRoZW8gdOG7q25nIGxv4bqhaSBkw6J5IChpbmRleCA9IGlkU3RyaW5nKS4gxq91IHRpw6puIGjGoW4gZGVmYXVsdEJyYWNlbGV0UmVmLiAqL1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGRlZmF1bHRCcmFjZWxldEJ5Q29yZDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbWF0Y2hSZXN1bHRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF0Y2hQb3NpdGlvblRvbGVyYW5jZTogbnVtYmVyID0gODA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzaG93RGVmYXVsdFByZXZpZXc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEw6J5IG3huqt1IMSRw7puZyAodmQ6IDIgPSBncmVlbikuIMSQw7puZyBtw6B1IGTDonkgxJHGsOG7o2MgKzMwJS4gLTEgPSDEkW/DoW4gdOG7qyB0w6puIGNvcmQgKGtow7RuZyB0aW4gY+G6rXkpLiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkZWZhdWx0Q29yZElkOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIC8qKiBLZXljaGFpbiDEkcO6bmcgKGZhbGxiYWNrIGtoaSBjaMawYSBn4bqvbiBCcmFjZWxldERlZmF1bHRNZXRhKS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVmYXVsdEtleWNoYWluSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgbG9jYWxCb3ggPSBudWxsXHJcbiAgICBwcml2YXRlIGNhY2hlZERlZmF1bHRMYXlvdXQ6IENoYXJtU2xvdERhdGFbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjYWNoZWREZWZhdWx0Q29yZElkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZGVmYXVsdENvbmZpZ0NhY2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBsYXN0TWF0Y2hQZXJjZW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBsYXN0U2NvcmVCcmVha2Rvd246IE1hdGNoU2NvcmVCcmVha2Rvd24gPSBudWxsO1xyXG4gICAgbGlmdEJyYWNlbGV0KHRhcmdldFBvczogY2MuVmVjMywgZHVyYXRpb246IG51bWJlciA9IDAuNCkge1xyXG4gICAgICAgIGlmICghdGhpcy5Db3JkUm91bmRMaXN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9kaWVzOiBjYy5SaWdpZEJvZHlbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3RCb2RpZXMgPSAobm9kZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZGllcy5wdXNoKGJvZHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3RCb2RpZXMobm9kZS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbGxlY3RCb2RpZXModGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGJvZGllc1tpXTtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuS2luZW1hdGljO1xyXG4gICAgICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN5bmNCb2RpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBib2RpZXNbaV0uc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYm9kaWVzW2ldLnN5bmNSb3RhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHBvc2l0aW9uOiB0YXJnZXRQb3MgfSwgeyBvblVwZGF0ZTogc3luY0JvZGllcyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzeW5jQm9kaWVzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgaXNUYXJnZXRIaW5kID0gbnVsbFxyXG5cclxuICAgIHNldEhpbmQoY2hhcm0pIHtcclxuICAgICAgICBsZXQgdGFnID0gY2hhcm0uZ2V0Q29tcG9uZW50KFwiQ2hhcm1JdGVtXCIpLnRhZ1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRIaW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRIaW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJtSGluZC5jaGlsZHJlblt0YWddLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEhpbmQgPSB0aGlzLmNoYXJtSGluZC5jaGlsZHJlblt0YWddO1xyXG4gICAgICAgIGxldCBjb2xvcklNRyA9IGNoYXJtLmdldENvbXBvbmVudChcIkNoYXJtSXRlbVwiKS5nZXRDb2xvcigpO1xyXG4gICAgICAgIHRoaXMuY2hhcm1IaW5kLmNoaWxkcmVuW3RhZ10uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBjb2xvcklNRztcclxuICAgICAgICB0aGlzLmNoYXJtSGluZC5jaGlsZHJlblt0YWddLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gY29sb3JJTUc7XHJcbiAgICAgICAgdGhpcy5sb2NhbEJveCA9IHRoaXMuY2hhcm1IaW5kLmNoaWxkcmVuW3RhZ107XHJcbiAgICB9XHJcbiAgICBzdGFydEJyYWNlbGV0TW9kZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuQ29yZFJvdW5kTGlzdCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZVJlZmVyZW5jZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDb3JkID0gdGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuW2dsb2JhbFRoaXMuaWRTdHJpbmddO1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVDb3JkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubGVmdEFuY2hvciA9IHRoaXMuYWN0aXZlQ29yZC5nZXRDaGlsZEJ5TmFtZSgnbGVmdCcpO1xyXG4gICAgICAgIHRoaXMucmlnaHRBbmNob3IgPSB0aGlzLmFjdGl2ZUNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBbmNob3IgfHwgIXRoaXMucmlnaHRBbmNob3IpIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NvcmRSb3VuZEdhbWVdIENvcmQgaXMgbWlzc2luZyBsZWZ0L3JpZ2h0IGFuY2hvciBub2Rlcy4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MudjIoMCwgLTUyMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkNvcmRSb3VuZExpc3QuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvcmQodGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbnN1cmVDaGFybUxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5jYWNoZURlZmF1bHRDb25maWcodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAodGhpcy5zaG93RGVmYXVsdFByZXZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RGVmYXVsdEJyYWNlbGV0UHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJpbmRUb3VjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBDaOG7iSDEkeG7jWMgbWV0YSBz4bubbTsgbGF5b3V0IGNoYXJtIHPhur0gYnVpbGQgbOG6oWkga2hpIHbDoG8gZ2FtZSB24bubaSBhY3RpdmVDb3JkLlxyXG4gICAgICAgIHRoaXMuY2FjaGVEZWZhdWx0TWV0YU9ubHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByZXBhcmVDb3JkKGNvcmQ6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5wcmVwYXJlZENvcmRzLmluZGV4T2YoY29yZCkgPj0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByYXdQb2ludHMgPSB0aGlzLmdldFBvbHlnb25Db2xsaWRlclBvaW50cyhjb3JkKTtcclxuICAgICAgICBpZiAocmF3UG9pbnRzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NvcmRSb3VuZEdhbWVdIENvcmQgXCInICsgY29yZC5uYW1lICsgJ1wiIG5lZWRzIGNjLlBvbHlnb25Db2xsaWRlci4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcyA9IHRoaXMuc2FtcGxlQWxvbmdQYXRoKHJhd1BvaW50cywgdGhpcy5wYXRoU2FtcGxlU3BhY2luZyk7XHJcbiAgICAgICAgdGhpcy5jb3JkUGF0aHMuc2V0KGNvcmQsIHtcclxuICAgICAgICAgICAgcG9pbnRzOiBzYW1wbGVzLFxyXG4gICAgICAgICAgICB0b3RhbExlbmd0aDogdGhpcy5jYWxjUGF0aExlbmd0aChzYW1wbGVzKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cENvcmRQaHlzaWNzKGNvcmQsIHNhbXBsZXMpO1xyXG4gICAgICAgIHRoaXMucHJlcGFyZWRDb3Jkcy5wdXNoKGNvcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UG9seWdvbkNvbGxpZGVyUG9pbnRzKGNvcmQ6IGNjLk5vZGUpOiBjYy5WZWMyW10ge1xyXG4gICAgICAgIGNvbnN0IHBvbHkgPSBjb3JkLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgIGlmICghcG9seSB8fCAhcG9seS5wb2ludHMgfHwgcG9seS5wb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBjb25zdCBvZmZzZXQgPSBwb2x5Lm9mZnNldCB8fCBjYy52MigwLCAwKTtcclxuICAgICAgICByZXR1cm4gcG9seS5wb2ludHMubWFwKHAgPT4gY2MudjIocC54ICsgb2Zmc2V0LngsIHAueSArIG9mZnNldC55KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cENvcmRQaHlzaWNzKGNvcmQ6IGNjLk5vZGUsIHNhbXBsZXM6IGNjLlZlYzJbXSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gY29yZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIWJvZHkpIHtcclxuICAgICAgICAgICAgYm9keSA9IGNvcmQuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgIGJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclNlZ21lbnRDb2xsaWRlcnMoY29yZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSBNYXRoLm1heCh0aGlzLnBhdGhTYW1wbGVTcGFjaW5nICogMS41LCAxNik7XHJcbiAgICAgICAgY29uc3QgY29sbGlkZXJQb2ludHMgPSBzYW1wbGVzLmxlbmd0aCA+IDgwXHJcbiAgICAgICAgICAgID8gdGhpcy5zYW1wbGVBbG9uZ1BhdGgoc2FtcGxlcywgc3BhY2luZylcclxuICAgICAgICAgICAgOiBzYW1wbGVzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVyUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGNvcmQuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgICAgIGNvbC5vZmZzZXQgPSBjb2xsaWRlclBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29sLnJhZGl1cyA9IHRoaXMuc2VnbWVudFJhZGl1cztcclxuICAgICAgICAgICAgY29sLmZyaWN0aW9uID0gMC4zNTtcclxuICAgICAgICAgICAgY29sLnJlc3RpdHV0aW9uID0gMC4wNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYW1wbGVBbG9uZ1BhdGgocG9pbnRzOiBjYy5WZWMyW10sIHNwYWNpbmc6IG51bWJlcik6IGNjLlZlYzJbXSB7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlczogY2MuVmVjMltdID0gW107XHJcbiAgICAgICAgbGV0IGNhcnJ5ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHBvaW50c1soaSArIDEpICUgcG9pbnRzLmxlbmd0aF07XHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcclxuICAgICAgICAgICAgY29uc3Qgc2VnTGVuID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICAgICAgaWYgKHNlZ0xlbiA8PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpclggPSBkeCAvIHNlZ0xlbjtcclxuICAgICAgICAgICAgY29uc3QgZGlyWSA9IGR5IC8gc2VnTGVuO1xyXG4gICAgICAgICAgICBsZXQgZGlzdCA9IGNhcnJ5O1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKGRpc3QgPCBzZWdMZW4pIHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXMucHVzaChjYy52MihhLnggKyBkaXJYICogZGlzdCwgYS55ICsgZGlyWSAqIGRpc3QpKTtcclxuICAgICAgICAgICAgICAgIGRpc3QgKz0gc3BhY2luZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXJyeSA9IGRpc3QgLSBzZWdMZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2FtcGxlcy5sZW5ndGggPiAwID8gc2FtcGxlcyA6IHBvaW50cy5zbGljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY1BhdGhMZW5ndGgocG9pbnRzOiBjYy5WZWMyW10pOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBsZW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbKGkgKyAxKSAlIHBvaW50cy5sZW5ndGhdO1xyXG4gICAgICAgICAgICBsZW4gKz0gY2MudjIoYi54IC0gYS54LCBiLnkgLSBhLnkpLm1hZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYXJTZWdtZW50Q29sbGlkZXJzKGNvcmQ6IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCBjaXJjbGVzID0gY29yZC5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXJjbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNpcmNsZXNbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuc3VyZUNoYXJtTGF5ZXIoKSB7XHJcbiAgICAgICAgbGV0IGxheWVyID0gdGhpcy5hY3RpdmVDb3JkLmdldENoaWxkQnlOYW1lKCdjaGFybXNPbkNvcmQnKTtcclxuICAgICAgICBpZiAoIWxheWVyKSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gbmV3IGNjLk5vZGUoJ2NoYXJtc09uQ29yZCcpO1xyXG4gICAgICAgICAgICBsYXllci5wYXJlbnQgPSB0aGlzLmFjdGl2ZUNvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhcm1MYXllciA9IGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzb2x2ZVJlZmVyZW5jZXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGtoYXkgPSBtYWluLmdldENoaWxkQnlOYW1lKCdraGF5Jyk7XHJcbiAgICAgICAgICAgIGlmIChraGF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRlID0ga2hheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJpbmRUb3VjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy50b3VjaEJvdW5kKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50b3VjaEJvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdG91Y2hOb2RlID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmRyYWdnaW5nQ2hhcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhcm0gPSB0aGlzLmdldFBsYXRlQ2hhcm1BdChldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBpZiAoIWNoYXJtKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlVG91Y2hJZCA9IGV2ZW50LmdldElEKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydERyYWcoY2hhcm0sIGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0SGluZChjaGFybSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IGV2ZW50LmdldElEKCkgIT09IHRoaXMuYWN0aXZlVG91Y2hJZCB8fCAhdGhpcy5kcmFnZ2luZ0NoYXJtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gdGhpcy5nZXRNYWluTG9jYWxQb3MoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgY29uc3Qgc25hcCA9IHRoaXMuZ2V0RHJhZ1NuYXBQb3NlKHRvdWNoUG9zKTtcclxuICAgICAgICAvLyBpZiAoc25hcCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0uc2V0UG9zaXRpb24oc25hcC5wb3MpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0uYW5nbGUgPSBzbmFwLmFuZ2xlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRyYWdTbmFwU2lkZSA9IHNuYXAuc2lkZTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0uc2V0UG9zaXRpb24odG91Y2hQb3MpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0uYW5nbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdTbmFwU2lkZSA9IG51bGw7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCBldmVudC5nZXRJRCgpICE9PSB0aGlzLmFjdGl2ZVRvdWNoSWQgfHwgIXRoaXMuZHJhZ2dpbmdDaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuZHJhZ2dpbmdDaGFybTtcclxuICAgICAgICBjb25zdCBjaGFybVdvcmxkID0gY2hhcm0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGFybS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZHJvcEFuY2hvciA9IHRoaXMucmVzb2x2ZURyb3BBbmNob3IoY2hhcm1Xb3JsZCwgdGhpcy5kcmFnU25hcFNpZGUsIGNoYXJtKTtcclxuICAgICAgICBpZiAoZHJvcEFuY2hvcikge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmREcm9wLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5oaWRlRGVmYXVsdEJyYWNlbGV0UHJldmlldygpO1xyXG4gICAgICAgICAgICB0aGlzLnRocmVhZENoYXJtT250b0NvcmQoY2hhcm0sIGRyb3BBbmNob3IpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bk9rLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldERyYWdnZWRDaGFybShjaGFybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZHJhZ1NuYXBTaWRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSAtMTtcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEhpbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEhpbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRIaW5kID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENoYXJtUGxhdGVQaHlzaWNzKGNoYXJtOiBjYy5Ob2RlLCBlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBpZiAoZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IGNoYXJtLmdldENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoY29sbGlkZXIpIHtcclxuICAgICAgICAgICAgY29sbGlkZXIuZW5hYmxlZCA9IGVuYWJsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnREcmFnKGNoYXJtOiBjYy5Ob2RlLCBzY3JlZW5Qb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0gPSBjaGFybTtcclxuICAgICAgICB0aGlzLmRyYWdPcmlnaW5QYXJlbnQgPSBjaGFybS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5kcmFnT3JpZ2luUG9zID0gY2hhcm0ucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICB0aGlzLmRyYWdPcmlnaW5TaWJsaW5nSW5kZXggPSBjaGFybS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDaGFybVBsYXRlUGh5c2ljcyhjaGFybSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGNoYXJtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gbWFpbjtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbihtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKSk7XHJcbiAgICAgICAgY2hhcm0uc2V0U2libGluZ0luZGV4KG1haW4uY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKHRoaXMuZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXREcmFnZ2VkQ2hhcm0oY2hhcm06IGNjLk5vZGUpIHtcclxuICAgICAgICBjaGFybS5wYXJlbnQgPSB0aGlzLmRyYWdPcmlnaW5QYXJlbnQ7XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24odGhpcy5kcmFnT3JpZ2luUG9zKTtcclxuICAgICAgICBjaGFybS5zZXRTaWJsaW5nSW5kZXgodGhpcy5kcmFnT3JpZ2luU2libGluZ0luZGV4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDaGFybVBsYXRlUGh5c2ljcyhjaGFybSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aHJlYWRDaGFybU9udG9Db3JkKGNoYXJtOiBjYy5Ob2RlLCBkcm9wQW5jaG9yOiBEcm9wQW5jaG9yKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblNpZGUoZHJvcEFuY2hvci5zaWRlLCBjaGFybSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBhbmNob3JQb3MgPSBkcm9wQW5jaG9yLmNvcmRQb3M7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMuZmluZE5lYXJlc3RQYXRoSW5kZXgocGF0aC5wb2ludHMsIGFuY2hvclBvcyk7XHJcbiAgICAgICAgY29uc3QgcGF0aERpciA9IHRoaXMucGlja1BhdGhEaXJlY3Rpb24ocGF0aC5wb2ludHMsIHN0YXJ0SW5kZXgsIGRyb3BBbmNob3Iuc2lkZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpdm90ID0gdGhpcy5zZXR1cENoYXJtSGFuZ1JpZyhjaGFybSk7XHJcbiAgICAgICAgcGl2b3QucGFyZW50ID0gdGhpcy5jaGFybUxheWVyO1xyXG4gICAgICAgIHBpdm90LnNldFBvc2l0aW9uKGNjLnYzKGFuY2hvclBvcy54LCBhbmNob3JQb3MueSwgMCkpO1xyXG4gICAgICAgIGNvbnN0IGhhbmdMb2NhbCA9IHRoaXMuZ2V0SGFuZ0xvY2FsT2Zmc2V0KGNoYXJtKTtcclxuICAgICAgICBjb25zdCBvdXR3YXJkID0gdGhpcy5nZXRPdXR3YXJkRnJvbUNlbnRlcihjYy52MihhbmNob3JQb3MueCwgYW5jaG9yUG9zLnkpKTtcclxuICAgICAgICBjaGFybS5hbmdsZSA9IHRoaXMuYW5nbGVGb3JPdXR3YXJkSGFuZyhvdXR3YXJkLCBoYW5nTG9jYWwpO1xyXG4gICAgICAgIGNoYXJtLmNoaWxkcmVuWzBdLnNjYWxlID0gMC44O1xyXG5cclxuICAgICAgICBjb25zdCBwaXZvdEJvZHkgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBjb25zdCBjaGFybUJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAocGl2b3RCb2R5KSB7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFuZ2VudCA9IHRoaXMuZ2V0VGFuZ2VudEF0SW5kZXgocGF0aC5wb2ludHMsIHN0YXJ0SW5kZXgsIHBhdGhEaXIpO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkgPSB0YW5nZW50Lm11bCg3NSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFybUJvZHkpIHtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LnN5bmNSb3RhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb3JkQ2hhcm1zLnB1c2goe1xyXG4gICAgICAgICAgICBwaXZvdCxcclxuICAgICAgICAgICAgY2hhcm0sXHJcbiAgICAgICAgICAgIHNldHRsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGlsbFRpbWU6IDAsXHJcbiAgICAgICAgICAgIHNpZGU6IGRyb3BBbmNob3Iuc2lkZSxcclxuICAgICAgICAgICAgcGF0aFN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgIHBhdGhEaXIsXHJcbiAgICAgICAgICAgIHBhdGhEaXN0YW5jZTogMCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVOG6oW8gcGl2b3QgKMSRaeG7g20gbmVvIHRyw6puIGTDonkpICsgUmV2b2x1dGVKb2ludDsgcGjhuqduIGTGsOG7m2kgY2hhcm0gbHVuZyBsYXkgdGhlbyBwaHlzaWNzLiAqL1xyXG4gICAgcHJpdmF0ZSBzZXR1cENoYXJtSGFuZ1JpZyhjaGFybTogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmIChjaGFybS5wYXJlbnQgJiYgY2hhcm0ucGFyZW50Lm5hbWUgPT09ICdjaGFybVBpdm90Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhcm0ucGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZ0xvY2FsID0gdGhpcy5nZXRIYW5nTG9jYWxPZmZzZXQoY2hhcm0pO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gY2hhcm0ucGFyZW50O1xyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zID0gbGF5ZXIuY29udmVydFRvV29ybGRTcGFjZUFSKGNoYXJtLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGl2b3QgPSBuZXcgY2MuTm9kZSgnY2hhcm1QaXZvdCcpO1xyXG4gICAgICAgIHBpdm90LnBhcmVudCA9IGxheWVyO1xyXG4gICAgICAgIHBpdm90LnNldFBvc2l0aW9uKGxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKSk7XHJcblxyXG4gICAgICAgIGNoYXJtLnBhcmVudCA9IHBpdm90O1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKGNjLnYzKC1oYW5nTG9jYWwueCwgLWhhbmdMb2NhbC55LCAwKSk7XHJcbiAgICAgICAgY2hhcm0uYW5nbGUgPSAwO1xyXG5cclxuICAgICAgICBsZXQgcGl2b3RCb2R5ID0gcGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFwaXZvdEJvZHkpIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5ID0gcGl2b3QuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpdm90Qm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgIHBpdm90Qm9keS5ncmF2aXR5U2NhbGUgPSAxO1xyXG4gICAgICAgIHBpdm90Qm9keS5saW5lYXJEYW1waW5nID0gMC4yMjtcclxuICAgICAgICBwaXZvdEJvZHkuYW5ndWxhckRhbXBpbmcgPSAxO1xyXG4gICAgICAgIHBpdm90Qm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICBwaXZvdEJvZHkuYWxsb3dTbGVlcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgcGl2b3RDb2wgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIXBpdm90Q29sKSB7XHJcbiAgICAgICAgICAgIHBpdm90Q29sID0gcGl2b3QuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpdm90Q29sLnJhZGl1cyA9IHRoaXMucGl2b3RDb2xsaWRlclJhZGl1cztcclxuICAgICAgICBwaXZvdENvbC5mcmljdGlvbiA9IDAuMztcclxuICAgICAgICBwaXZvdENvbC5yZXN0aXR1dGlvbiA9IDAuMDU7XHJcbiAgICAgICAgcGl2b3RDb2wuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBjaGFybUJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIWNoYXJtQm9keSkge1xyXG4gICAgICAgICAgICBjaGFybUJvZHkgPSBjaGFybS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhcm1Cb2R5LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNoYXJtQm9keS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNoYXJtQm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgIGNoYXJtQm9keS5ncmF2aXR5U2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIGNoYXJtQm9keS5saW5lYXJEYW1waW5nID0gMC4yO1xyXG4gICAgICAgIGNoYXJtQm9keS5hbmd1bGFyRGFtcGluZyA9IDAuNjU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmZpeGVkUm90YXRpb24gPSBmYWxzZTtcclxuICAgICAgICBjaGFybUJvZHkuYWxsb3dTbGVlcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmVuYWJsZUNoYXJtUGh5c2ljc0NvbGxpZGVyKGNoYXJtKTtcclxuXHJcbiAgICAgICAgbGV0IGpvaW50ID0gcGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJldm9sdXRlSm9pbnQpO1xyXG4gICAgICAgIGlmICgham9pbnQpIHtcclxuICAgICAgICAgICAgam9pbnQgPSBwaXZvdC5hZGRDb21wb25lbnQoY2MuUmV2b2x1dGVKb2ludCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpvaW50LmNvbm5lY3RlZEJvZHkgPSBjaGFybUJvZHk7XHJcbiAgICAgICAgam9pbnQuYW5jaG9yID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQW5jaG9yID0gaGFuZ0xvY2FsO1xyXG4gICAgICAgIGpvaW50LmNvbGxpZGVDb25uZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBpdm90O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29yZENlbnRlckxvY2FsKCk6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIXBhdGggfHwgcGF0aC5wb2ludHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MigwLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjeCA9IDA7XHJcbiAgICAgICAgbGV0IGN5ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgucG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN4ICs9IHBhdGgucG9pbnRzW2ldLng7XHJcbiAgICAgICAgICAgIGN5ICs9IHBhdGgucG9pbnRzW2ldLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG4gPSBwYXRoLnBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKGN4IC8gbiwgY3kgLyBuKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE91dHdhcmRGcm9tQ2VudGVyKHBvczogY2MuVmVjMik6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMuZ2V0Q29yZENlbnRlckxvY2FsKCk7XHJcbiAgICAgICAgY29uc3Qgb3V0d2FyZCA9IGNjLnYyKHBvcy54IC0gY2VudGVyLngsIHBvcy55IC0gY2VudGVyLnkpO1xyXG4gICAgICAgIGlmIChvdXR3YXJkLm1hZ1NxcigpIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjIoMCwgLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXR3YXJkLm5vcm1hbGl6ZVNlbGYoKTtcclxuICAgICAgICByZXR1cm4gb3V0d2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdyYXBBbmdsZURlZyhhbmdsZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgYSA9IGFuZ2xlO1xyXG4gICAgICAgIHdoaWxlIChhID4gMTgwKSBhIC09IDM2MDtcclxuICAgICAgICB3aGlsZSAoYSA8IC0xODApIGEgKz0gMzYwO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1Cb2R5RGlyKGhhbmdMb2NhbDogY2MuVmVjMiwgYW5nbGVEZWc6IG51bWJlcik6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsQmFzZSA9IGNjLnYyKC1oYW5nTG9jYWwueCwgLWhhbmdMb2NhbC55KTtcclxuICAgICAgICBjb25zdCByYWQgPSBhbmdsZURlZyAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgY29uc3QgcyA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgY29uc3QgZGlyID0gY2MudjIoXHJcbiAgICAgICAgICAgIGxvY2FsQmFzZS54ICogYyAtIGxvY2FsQmFzZS55ICogcyxcclxuICAgICAgICAgICAgbG9jYWxCYXNlLnggKiBzICsgbG9jYWxCYXNlLnkgKiBjXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZGlyLm1hZ1NxcigpIDwgMC4wMDAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MigwLCAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpci5ub3JtYWxpemVTZWxmKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFuZ2xlRm9yT3V0d2FyZEhhbmcob3V0d2FyZDogY2MuVmVjMiwgaGFuZ0xvY2FsOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBsb2NhbEJhc2UgPSBjYy52MigtaGFuZ0xvY2FsLngsIC1oYW5nTG9jYWwueSk7XHJcbiAgICAgICAgY29uc3QgYmFzZUFuZ2xlID0gTWF0aC5hdGFuMihsb2NhbEJhc2UueSwgbG9jYWxCYXNlLngpO1xyXG4gICAgICAgIGNvbnN0IG91dEFuZ2xlID0gTWF0aC5hdGFuMihvdXR3YXJkLnksIG91dHdhcmQueCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcEFuZ2xlRGVnKChvdXRBbmdsZSAtIGJhc2VBbmdsZSkgKiAxODAgLyBNYXRoLlBJKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cmFpbkNoYXJtSGFuZyhzdGF0ZTogQ29yZENoYXJtU3RhdGUsIGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBjaGFybSA9IHN0YXRlLmNoYXJtO1xyXG4gICAgICAgIGNvbnN0IHBpdm90ID0gc3RhdGUucGl2b3Q7XHJcbiAgICAgICAgaWYgKCFjaGFybSB8fCAhcGl2b3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZ0xvY2FsID0gdGhpcy5nZXRIYW5nTG9jYWxPZmZzZXQoY2hhcm0pO1xyXG4gICAgICAgIGNvbnN0IG91dHdhcmQgPSB0aGlzLmdldE91dHdhcmRGcm9tQ2VudGVyKGNjLnYyKHBpdm90LngsIHBpdm90LnkpKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRBbmdsZSA9IHRoaXMuYW5nbGVGb3JPdXR3YXJkSGFuZyhvdXR3YXJkLCBoYW5nTG9jYWwpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuXHJcbiAgICAgICAgbGV0IGFuZ2xlID0gY2hhcm0uYW5nbGU7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy53cmFwQW5nbGVEZWcoYW5nbGUgLSB0YXJnZXRBbmdsZSk7XHJcbiAgICAgICAgY29uc3QgYm9keURpciA9IHRoaXMuZ2V0Q2hhcm1Cb2R5RGlyKGhhbmdMb2NhbCwgYW5nbGUpO1xyXG4gICAgICAgIGNvbnN0IG91dHdhcmREb3QgPSBib2R5RGlyLnggKiBvdXR3YXJkLnggKyBib2R5RGlyLnkgKiBvdXR3YXJkLnk7XHJcblxyXG4gICAgICAgIGlmIChvdXR3YXJkRG90IDwgMC4wMikge1xyXG4gICAgICAgICAgICBhbmdsZSA9IHRhcmdldEFuZ2xlO1xyXG4gICAgICAgICAgICBjaGFybS5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgYm9keS5zeW5jUm90YXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9mZnNldCA+IHRoaXMuaGFuZ1N3aW5nTGltaXQpIHtcclxuICAgICAgICAgICAgYW5nbGUgPSB0YXJnZXRBbmdsZSArIHRoaXMuaGFuZ1N3aW5nTGltaXQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPCAtdGhpcy5oYW5nU3dpbmdMaW1pdCkge1xyXG4gICAgICAgICAgICBhbmdsZSA9IHRhcmdldEFuZ2xlIC0gdGhpcy5oYW5nU3dpbmdMaW1pdDtcclxuICAgICAgICB9IGVsc2UgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgY29uc3QgcHVsbCA9IHRoaXMud3JhcEFuZ2xlRGVnKHRhcmdldEFuZ2xlIC0gYW5nbGUpO1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSArPSBwdWxsICogdGhpcy5oYW5nT3V0d2FyZFN0aWZmbmVzcyAqIGR0O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTWF0aC5hYnMoYW5nbGUgLSBjaGFybS5hbmdsZSkgPiAwLjA1KSB7XHJcbiAgICAgICAgICAgIGNoYXJtLmFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSAqPSAwLjI1O1xyXG4gICAgICAgICAgICAgICAgYm9keS5zeW5jUm90YXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRIYW5nTG9jYWxPZmZzZXQoY2hhcm06IGNjLk5vZGUpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gY2hhcm0uZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5nZXRIYW5nTG9jYWxPZmZzZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ2V0SGFuZ0xvY2FsT2Zmc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy52MigwLCA1NSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmFibGVDaGFybVBoeXNpY3NDb2xsaWRlcihjaGFybTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgIGlmIChjb2xsaWRlcikge1xyXG4gICAgICAgICAgICBjb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29sbGlkZXIuc2Vuc29yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLmZyaWN0aW9uID0gMC4yNTtcclxuICAgICAgICAgICAgY29sbGlkZXIucmVzdGl0dXRpb24gPSAwLjA4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhbmdlbnRBdEluZGV4KHBvaW50czogY2MuVmVjMltdLCBpbmRleDogbnVtYmVyLCBkaXI6IG51bWJlcik6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpbmRleCArIGRpciwgcG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpbmRleF07XHJcbiAgICAgICAgY29uc3QgYiA9IHBvaW50c1tuZXh0SWR4XTtcclxuICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcclxuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpIHx8IDE7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKGR4IC8gbGVuLCBkeSAvIGxlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROZWFyZXN0T25QYXRoKHBvaW50czogY2MuVmVjMltdLCBwb3M6IGNjLlZlYzIpOiB7IGluZGV4OiBudW1iZXI7IG5lYXJlc3Q6IGNjLlZlYzIgfSB7XHJcbiAgICAgICAgbGV0IGJlc3RJbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGJlc3REaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IGNjLnYyKHBvaW50c1tpXS54IC0gcG9zLngsIHBvaW50c1tpXS55IC0gcG9zLnkpLm1hZ1NxcigpO1xyXG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdCA9IGQ7XHJcbiAgICAgICAgICAgICAgICBiZXN0SW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBpbmRleDogYmVzdEluZGV4LCBuZWFyZXN0OiBwb2ludHNbYmVzdEluZGV4XSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZE5lYXJlc3RQYXRoSW5kZXgocG9pbnRzOiBjYy5WZWMyW10sIHBvczogY2MuVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGJlc3QgPSAwO1xyXG4gICAgICAgIGxldCBiZXN0RGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IGNjLnYyKHBvaW50c1tpXS54IC0gcG9zLngsIHBvaW50c1tpXS55IC0gcG9zLnkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdCA9IGQ7XHJcbiAgICAgICAgICAgICAgICBiZXN0ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBpY2tQYXRoRGlyZWN0aW9uKHBvaW50czogY2MuVmVjMltdLCBlbnRyeUluZGV4OiBudW1iZXIsIHNpZGU6IENvcmRTaWRlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBzY29yZSA9IChkaXI6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcyA9IDA7XHJcbiAgICAgICAgICAgIGxldCBpZHggPSBlbnRyeUluZGV4O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQwOyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlkeCA9IHRoaXMud3JhcEluZGV4KGlkeCArIGRpciwgcG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgICAgICBzICs9IC1wLnkgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2lkZSA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyArPSBwLnggPCAwID8gMyA6IC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzICs9IHAueCA+IDAgPyAzIDogLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gc2NvcmUoMSkgPj0gc2NvcmUoLTEpID8gMSA6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UG9zZU9uUGF0aChcclxuICAgICAgICBwb2ludHM6IGNjLlZlYzJbXSxcclxuICAgICAgICBzdGFydEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgZGlyOiBudW1iZXIsXHJcbiAgICAgICAgZGlzdGFuY2U6IG51bWJlclxyXG4gICAgKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgYW5nbGU6IG51bWJlciB9IHtcclxuICAgICAgICBsZXQgaWR4ID0gc3RhcnRJbmRleDtcclxuICAgICAgICBsZXQgcmVtYWluID0gZGlzdGFuY2U7XHJcbiAgICAgICAgY29uc3QgbWF4U3RlcCA9IHBvaW50cy5sZW5ndGggKyAyO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8IG1heFN0ZXA7IHN0ZXArKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ0xlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChzZWdMZW4gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVtYWluIDw9IHNlZ0xlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHJlbWFpbiAvIHNlZ0xlbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBhLnggKyBkeCAqIHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gYS55ICsgZHkgKiB0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCkgKiAxODAgLyBNYXRoLlBJIC0gOTA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4LCB5LCBhbmdsZSB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZW1haW4gLT0gc2VnTGVuO1xyXG4gICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGFzdCA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgIHJldHVybiB7IHg6IGxhc3QueCwgeTogbGFzdC55LCBhbmdsZTogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd3JhcEluZGV4KGluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gbGVuZ3RoICsgaW5kZXg7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IGxlbmd0aCkgcmV0dXJuIGluZGV4IC0gbGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1heFNsaWRlRGlzdGFuY2Uoc3RhdGU6IENvcmRDaGFybVN0YXRlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gcGF0aC50b3RhbExlbmd0aCAqIDAuNTI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDaGFybVNsaWRlKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSwgZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBzdGF0ZS5waXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFib2R5IHx8ICFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgIGNvbnN0IG9uUGF0aCA9IHRoaXMuZ2V0TmVhcmVzdE9uUGF0aChwYXRoLnBvaW50cywgcG9zKTtcclxuICAgICAgICBjb25zdCB0YW5nZW50ID0gdGhpcy5nZXRUYW5nZW50QXRJbmRleChwYXRoLnBvaW50cywgb25QYXRoLmluZGV4LCBzdGF0ZS5wYXRoRGlyKTtcclxuXHJcbiAgICAgICAgc3RhdGUucGF0aERpc3RhbmNlID0gdGhpcy5nZXREaXN0YW5jZUFsb25nUGF0aChcclxuICAgICAgICAgICAgcGF0aC5wb2ludHMsXHJcbiAgICAgICAgICAgIHN0YXRlLnBhdGhTdGFydEluZGV4LFxyXG4gICAgICAgICAgICBzdGF0ZS5wYXRoRGlyLFxyXG4gICAgICAgICAgICBwb3NcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLnNldHRsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWCA9IG9uUGF0aC5uZWFyZXN0LnggLSBwb3MueDtcclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWSA9IG9uUGF0aC5uZWFyZXN0LnkgLSBwb3MueTtcclxuICAgICAgICAgICAgY29uc3QgdHggPSB0YW5nZW50Lng7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5ID0gdGFuZ2VudC55O1xyXG4gICAgICAgICAgICBjb25zdCBueCA9IC10eTtcclxuICAgICAgICAgICAgY29uc3QgbnkgPSB0eDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZlbCA9IGJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZUYW5nZW50ID0gdmVsLnggKiB0eCArIHZlbC55ICogdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZOb3JtYWwgPSB2ZWwueCAqIG54ICsgdmVsLnkgKiBueTtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0Tm9ybWFsID0gdG9QYXRoWCAqIG54ICsgdG9QYXRoWSAqIG55O1xyXG5cclxuICAgICAgICAgICAgbGV0IG5ld1ZUYW5nZW50ID0gdlRhbmdlbnQgKyB0aGlzLnNsaWRlR3Jhdml0eSAqIGR0O1xyXG4gICAgICAgICAgICBsZXQgbmV3Vk5vcm1hbCA9IHZOb3JtYWxcclxuICAgICAgICAgICAgICAgICsgb2Zmc2V0Tm9ybWFsICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHRcclxuICAgICAgICAgICAgICAgIC0gdk5vcm1hbCAqIHRoaXMucGF0aFB1bGxEYW1waW5nICogZHQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgdnggPSB0eCAqIG5ld1ZUYW5nZW50ICsgbnggKiBuZXdWTm9ybWFsO1xyXG4gICAgICAgICAgICBsZXQgdnkgPSB0eSAqIG5ld1ZUYW5nZW50ICsgbnkgKiBuZXdWTm9ybWFsO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBNYXRoLnNxcnQodnggKiB2eCArIHZ5ICogdnkpO1xyXG4gICAgICAgICAgICBpZiAoc3BlZWQgPiB0aGlzLm1heFNsaWRlU3BlZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5tYXhTbGlkZVNwZWVkIC8gc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICB2eCAqPSBzY2FsZTtcclxuICAgICAgICAgICAgICAgIHZ5ICo9IHNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52Mih2eCwgdnkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnBhdGhEaXN0YW5jZSA+PSB0aGlzLmdldE1heFNsaWRlRGlzdGFuY2Uoc3RhdGUpIC0gMikge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0dGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gYm9keS5saW5lYXJWZWxvY2l0eS5tYWcoKTtcclxuICAgICAgICBjb25zdCBtaW5TbGlkZSA9IE1hdGgubWluKDI0LCB0aGlzLmdldE1heFNsaWRlRGlzdGFuY2Uoc3RhdGUpICogMC4xMik7XHJcbiAgICAgICAgaWYgKHNwZWVkIDwgdGhpcy5zZXR0bGVTcGVlZCAmJiBzdGF0ZS5wYXRoRGlzdGFuY2UgPj0gbWluU2xpZGUpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3RpbGxUaW1lICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc3RpbGxUaW1lID49IDAuMzUpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldHRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdGUuc3RpbGxUaW1lID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5zZXR0bGVkKSB7XHJcbiAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJEYW1waW5nID0gMS44O1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJEYW1waW5nID0gMS4yO1xyXG4gICAgICAgICAgICBib2R5LmFsbG93U2xlZXAgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWCA9IG9uUGF0aC5uZWFyZXN0LnggLSBwb3MueDtcclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWSA9IG9uUGF0aC5uZWFyZXN0LnkgLSBwb3MueTtcclxuICAgICAgICAgICAgY29uc3QgaG9sZERhbXAgPSB0aGlzLnBhdGhQdWxsRGFtcGluZyAqIDEuNTtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eS54ICsgdG9QYXRoWCAqIHRoaXMucGF0aFB1bGxTdHJlbmd0aCAqIGR0ICogMC4zNSAtIGJvZHkubGluZWFyVmVsb2NpdHkueCAqIGhvbGREYW1wICogZHQsXHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5LnkgKyB0b1BhdGhZICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHQgKiAwLjM1IC0gYm9keS5saW5lYXJWZWxvY2l0eS55ICogaG9sZERhbXAgKiBkdFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5zcXJ0KHRvUGF0aFggKiB0b1BhdGhYICsgdG9QYXRoWSAqIHRvUGF0aFkpO1xyXG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMS41ICYmIGJvZHkubGluZWFyVmVsb2NpdHkubWFnKCkgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5waXZvdC5zZXRQb3NpdGlvbihjYy52MyhvblBhdGgubmVhcmVzdC54LCBvblBhdGgubmVhcmVzdC55LCAwKSk7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERpc3RhbmNlQWxvbmdQYXRoKFxyXG4gICAgICAgIHBvaW50czogY2MuVmVjMltdLFxyXG4gICAgICAgIHN0YXJ0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBkaXI6IG51bWJlcixcclxuICAgICAgICBwb3M6IGNjLlZlYzJcclxuICAgICk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgbmVhcmVzdCA9IHRoaXMuZ2V0TmVhcmVzdE9uUGF0aChwb2ludHMsIHBvcyk7XHJcbiAgICAgICAgbGV0IGRpc3QgPSAwO1xyXG4gICAgICAgIGxldCBpZHggPSBzdGFydEluZGV4O1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG5lYXJlc3QuaW5kZXg7XHJcbiAgICAgICAgbGV0IGd1YXJkID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGlkeCAhPT0gdGFyZ2V0ICYmIGd1YXJkIDwgcG9pbnRzLmxlbmd0aCArIDEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dElkeCA9IHRoaXMud3JhcEluZGV4KGlkeCArIGRpciwgcG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHBvaW50c1tuZXh0SWR4XTtcclxuICAgICAgICAgICAgZGlzdCArPSBjYy52MihiLnggLSBhLngsIGIueSAtIGEueSkubWFnKCk7XHJcbiAgICAgICAgICAgIGlkeCA9IG5leHRJZHg7XHJcbiAgICAgICAgICAgIGd1YXJkKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWdBID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgZGlzdCArPSBjYy52Mihwb3MueCAtIHNlZ0EueCwgcG9zLnkgLSBzZWdBLnkpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QW5nbGVJbk5vZGVTcGFjZShub2RlOiBjYy5Ob2RlLCByb290OiBjYy5Ob2RlKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgYW5nbGUgPSBub2RlLmFuZ2xlO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudDtcclxuICAgICAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudCAhPT0gcm9vdCkge1xyXG4gICAgICAgICAgICBhbmdsZSArPSBwYXJlbnQuYW5nbGU7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNpZGVNYXhTbGlkZURpc3RhbmNlKCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCkgcmV0dXJuIDA7XHJcbiAgICAgICAgcmV0dXJuIHBhdGgudG90YWxMZW5ndGggKiAwLjUyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVhc3VyZVBhdGhEaXN0YW5jZUZyb21FbnRyeShzaWRlOiBDb3JkU2lkZSwgcG9zOiBjYy5WZWMyLCBwYXRoRGlyPzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghcGF0aCB8fCAhYW5jaG9ycykgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHBhdGhEaXIgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHBhdGhEaXJcclxuICAgICAgICAgICAgOiB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzaWRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzdGFuY2VBbG9uZ1BhdGgocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIGRpciwgcG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtUGF0aERpc3RhbmNlKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5waXZvdCkgcmV0dXJuIHN0YXRlLnBhdGhEaXN0YW5jZTtcclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZWFzdXJlUGF0aERpc3RhbmNlRnJvbUVudHJ5KHN0YXRlLnNpZGUsIHBvcywgc3RhdGUucGF0aERpcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybXNPblNpZGUoc2lkZTogQ29yZFNpZGUpOiBDb3JkQ2hhcm1TdGF0ZVtdIHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IENvcmRDaGFybVN0YXRlW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb3JkQ2hhcm1zW2ldLnNpZGUgPT09IHNpZGUpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY29yZENoYXJtc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1pblBhdGhEaXN0YW5jZU9uU2lkZShzaWRlOiBDb3JkU2lkZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgb25TaWRlID0gdGhpcy5nZXRDaGFybXNPblNpZGUoc2lkZSk7XHJcbiAgICAgICAgaWYgKG9uU2lkZS5sZW5ndGggPT09IDApIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xyXG5cclxuICAgICAgICBsZXQgbWluRGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvblNpZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZ2V0Q2hhcm1QYXRoRGlzdGFuY2Uob25TaWRlW2ldKTtcclxuICAgICAgICAgICAgaWYgKGQgPCBtaW5EaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBtaW5EaXN0ID0gZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWluRGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtU2xvdFNwYWNpbmcoY2hhcm06IGNjLk5vZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldENoYXJtSXRlbUNvbXAoY2hhcm0pO1xyXG4gICAgICAgIGlmIChpdGVtICYmIHR5cGVvZiBpdGVtLnNsb3RTcGFjaW5nID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zbG90U3BhY2luZztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcm1TbG90U3BhY2luZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbkRyb3BPblNpZGUoc2lkZTogQ29yZFNpZGUsIGNoYXJtOiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qgb25TaWRlID0gdGhpcy5nZXRDaGFybXNPblNpZGUoc2lkZSk7XHJcbiAgICAgICAgaWYgKG9uU2lkZS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNaW5QYXRoRGlzdGFuY2VPblNpZGUoc2lkZSkgPj0gdGhpcy5nZXRDaGFybVNsb3RTcGFjaW5nKGNoYXJtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBpY2tBdmFpbGFibGVTaWRlKFxyXG4gICAgICAgIG5lYXJMZWZ0OiBib29sZWFuLFxyXG4gICAgICAgIG5lYXJSaWdodDogYm9vbGVhbixcclxuICAgICAgICBkaXN0TGVmdDogbnVtYmVyLFxyXG4gICAgICAgIGRpc3RSaWdodDogbnVtYmVyLFxyXG4gICAgICAgIGNoYXJtOiBjYy5Ob2RlLFxyXG4gICAgICAgIHByZWZlckxlZnQ/OiBib29sZWFuXHJcbiAgICApOiBDb3JkU2lkZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXM6IHsgc2lkZTogQ29yZFNpZGU7IGRpc3Q6IG51bWJlciB9W10gPSBbXTtcclxuICAgICAgICBpZiAobmVhckxlZnQpIGNhbmRpZGF0ZXMucHVzaCh7IHNpZGU6ICdsZWZ0JywgZGlzdDogZGlzdExlZnQgfSk7XHJcbiAgICAgICAgaWYgKG5lYXJSaWdodCkgY2FuZGlkYXRlcy5wdXNoKHsgc2lkZTogJ3JpZ2h0JywgZGlzdDogZGlzdFJpZ2h0IH0pO1xyXG5cclxuICAgICAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjYW5kaWRhdGVzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByZWZlckxlZnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYVByZWYgPSAoYS5zaWRlID09PSAnbGVmdCcpID09PSBwcmVmZXJMZWZ0ID8gMCA6IDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiUHJlZiA9IChiLnNpZGUgPT09ICdsZWZ0JykgPT09IHByZWZlckxlZnQgPyAwIDogMTtcclxuICAgICAgICAgICAgICAgIGlmIChhUHJlZiAhPT0gYlByZWYpIHJldHVybiBhUHJlZiAtIGJQcmVmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhLmRpc3QgLSBiLmRpc3Q7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5Ecm9wT25TaWRlKGNhbmRpZGF0ZXNbaV0uc2lkZSwgY2hhcm0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlc1tpXS5zaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzb2x2ZURyb3BBbmNob3Iod29ybGRQb3M6IGNjLlZlYzIsIHByZWZlcnJlZFNpZGU6IENvcmRTaWRlLCBjaGFybTogY2MuTm9kZSk6IERyb3BBbmNob3IgfCBudWxsIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlQ29yZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBsb2NhbCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgY29uc3QgbGVmdFBvcyA9IGFuY2hvcnMubGVmdDtcclxuICAgICAgICBjb25zdCByaWdodFBvcyA9IGFuY2hvcnMucmlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3RMZWZ0ID0gY2MudjIobG9jYWwueCAtIGxlZnRQb3MueCwgbG9jYWwueSAtIGxlZnRQb3MueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgZGlzdFJpZ2h0ID0gY2MudjIobG9jYWwueCAtIHJpZ2h0UG9zLngsIGxvY2FsLnkgLSByaWdodFBvcy55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBuZWFyTGVmdCA9IGRpc3RMZWZ0IDw9IHRoaXMuZW50cnlEZXRlY3RSYWRpdXM7XHJcbiAgICAgICAgY29uc3QgbmVhclJpZ2h0ID0gZGlzdFJpZ2h0IDw9IHRoaXMuZW50cnlEZXRlY3RSYWRpdXM7XHJcbiAgICAgICAgY29uc3QgcHJlZmVyTGVmdCA9IGxvY2FsLnggPCAobGVmdFBvcy54ICsgcmlnaHRQb3MueCkgKiAwLjU7XHJcbiAgICAgICAgY29uc3QgcHJlZmVyU2lkZTogQ29yZFNpZGUgPSBwcmVmZXJMZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JztcclxuXHJcbiAgICAgICAgaWYgKHByZWZlcnJlZFNpZGUgJiYgdGhpcy5jYW5Ecm9wT25TaWRlKHByZWZlcnJlZFNpZGUsIGNoYXJtKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2lkZTogcHJlZmVycmVkU2lkZSxcclxuICAgICAgICAgICAgICAgIGNvcmRQb3M6IHByZWZlcnJlZFNpZGUgPT09ICdsZWZ0JyA/IGxlZnRQb3MgOiByaWdodFBvcyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmVmZXJyZWRTaWRlICYmICF0aGlzLmNhbkRyb3BPblNpZGUocHJlZmVycmVkU2lkZSwgY2hhcm0pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdDogQ29yZFNpZGUgPSBwcmVmZXJTaWRlO1xyXG4gICAgICAgICAgICBpZiAoYWx0ICE9PSBwcmVmZXJyZWRTaWRlICYmIHRoaXMuY2FuRHJvcE9uU2lkZShhbHQsIGNoYXJtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlOiBhbHQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29yZFBvczogYWx0ID09PSAnbGVmdCcgPyBsZWZ0UG9zIDogcmlnaHRQb3MsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmVhckxlZnQgfHwgbmVhclJpZ2h0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGUgPSB0aGlzLnBpY2tBdmFpbGFibGVTaWRlKG5lYXJMZWZ0LCBuZWFyUmlnaHQsIGRpc3RMZWZ0LCBkaXN0UmlnaHQsIGNoYXJtKTtcclxuICAgICAgICAgICAgaWYgKHNpZGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZSxcclxuICAgICAgICAgICAgICAgICAgICBjb3JkUG9zOiBzaWRlID09PSAnbGVmdCcgPyBsZWZ0UG9zIDogcmlnaHRQb3MsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0b3BZID0gTWF0aC5tYXgobGVmdFBvcy55LCByaWdodFBvcy55KSAtIDIwO1xyXG4gICAgICAgIGNvbnN0IG1pblggPSBNYXRoLm1pbihsZWZ0UG9zLngsIHJpZ2h0UG9zLngpIC0gMzA7XHJcbiAgICAgICAgY29uc3QgbWF4WCA9IE1hdGgubWF4KGxlZnRQb3MueCwgcmlnaHRQb3MueCkgKyAzMDtcclxuICAgICAgICBjb25zdCBpblRvcFpvbmUgPSBsb2NhbC55ID49IHRvcFkgLSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzXHJcbiAgICAgICAgICAgICYmIGxvY2FsLnggPj0gbWluWFxyXG4gICAgICAgICAgICAmJiBsb2NhbC54IDw9IG1heFg7XHJcblxyXG4gICAgICAgIGlmICghaW5Ub3Bab25lKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2lkZSA9IHRoaXMucGlja0F2YWlsYWJsZVNpZGUodHJ1ZSwgdHJ1ZSwgZGlzdExlZnQsIGRpc3RSaWdodCwgY2hhcm0sIHByZWZlckxlZnQpO1xyXG4gICAgICAgIGlmICghc2lkZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgIGNvcmRQb3M6IHNpZGUgPT09ICdsZWZ0JyA/IGxlZnRQb3MgOiByaWdodFBvcyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hTbmFwUG9zZShzaWRlOiBDb3JkU2lkZSk6IHsgcG9zOiBjYy5WZWMzOyBhbmdsZTogbnVtYmVyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2lkZSA9PT0gJ2xlZnQnID8gY2hpbGRyZW4ubGVmdCA6IGNoaWxkcmVuLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY29uc3QgbG9jYWwgPSBtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb3M6IGNjLnYzKGxvY2FsLngsIGxvY2FsLnksIDApLFxyXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5nZXRBbmdsZUluTm9kZVNwYWNlKHRhcmdldCwgbWFpbiksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERyYWdTbmFwUG9zZShtYWluUG9zOiBjYy5WZWMzKTogeyBwb3M6IGNjLlZlYzM7IGFuZ2xlOiBudW1iZXI7IHNpZGU6IENvcmRTaWRlIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzIHx8ICF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRNYWluID0gbWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihhbmNob3JzLmxlZnQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCByaWdodE1haW4gPSBtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvV29ybGRTcGFjZUFSKGFuY2hvcnMucmlnaHQpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdExlZnQgPSBjYy52MihtYWluUG9zLnggLSBsZWZ0TWFpbi54LCBtYWluUG9zLnkgLSBsZWZ0TWFpbi55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBkaXN0UmlnaHQgPSBjYy52MihtYWluUG9zLnggLSByaWdodE1haW4ueCwgbWFpblBvcy55IC0gcmlnaHRNYWluLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IG5lYXJMZWZ0ID0gZGlzdExlZnQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuICAgICAgICBjb25zdCBuZWFyUmlnaHQgPSBkaXN0UmlnaHQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuXHJcbiAgICAgICAgbGV0IHNpZGU6IENvcmRTaWRlID0gbnVsbDtcclxuICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuZHJhZ2dpbmdDaGFybTtcclxuICAgICAgICBpZiAoIWNoYXJtKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKG5lYXJMZWZ0IHx8IG5lYXJSaWdodCkge1xyXG4gICAgICAgICAgICBzaWRlID0gdGhpcy5waWNrQXZhaWxhYmxlU2lkZShuZWFyTGVmdCwgbmVhclJpZ2h0LCBkaXN0TGVmdCwgZGlzdFJpZ2h0LCBjaGFybSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29yZExvY2FsID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICAgICAgbWFpbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIobWFpblBvcy54LCBtYWluUG9zLnkpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0UG9zID0gYW5jaG9ycy5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCByaWdodFBvcyA9IGFuY2hvcnMucmlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvcFkgPSBNYXRoLm1heChsZWZ0UG9zLnksIHJpZ2h0UG9zLnkpIC0gMjA7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pblggPSBNYXRoLm1pbihsZWZ0UG9zLngsIHJpZ2h0UG9zLngpIC0gMzA7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSBNYXRoLm1heChsZWZ0UG9zLngsIHJpZ2h0UG9zLngpICsgMzA7XHJcbiAgICAgICAgICAgIGNvbnN0IGluVG9wWm9uZSA9IGNvcmRMb2NhbC55ID49IHRvcFkgLSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzXHJcbiAgICAgICAgICAgICAgICAmJiBjb3JkTG9jYWwueCA+PSBtaW5YXHJcbiAgICAgICAgICAgICAgICAmJiBjb3JkTG9jYWwueCA8PSBtYXhYO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluVG9wWm9uZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZmVyTGVmdCA9IGNvcmRMb2NhbC54IDwgKGxlZnRQb3MueCArIHJpZ2h0UG9zLngpICogMC41O1xyXG4gICAgICAgICAgICAgICAgc2lkZSA9IHRoaXMucGlja0F2YWlsYWJsZVNpZGUodHJ1ZSwgdHJ1ZSwgZGlzdExlZnQsIGRpc3RSaWdodCwgY2hhcm0sIHByZWZlckxlZnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNpZGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBzbmFwID0gdGhpcy5nZXRMb2NhbEJveFNuYXBQb3NlKHNpZGUpO1xyXG4gICAgICAgIGlmIChzbmFwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHBvczogc25hcC5wb3MsIGFuZ2xlOiBzbmFwLmFuZ2xlLCBzaWRlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTogeyBsZWZ0OiBjYy5Ob2RlOyByaWdodDogY2MuTm9kZSB9IHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsQm94IHx8IHRoaXMubG9jYWxCb3guY2hpbGRyZW5Db3VudCA8IDIpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBsZWZ0QnlOYW1lID0gdGhpcy5sb2NhbEJveC5nZXRDaGlsZEJ5TmFtZSgnbGVmdCcpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0QnlOYW1lID0gdGhpcy5sb2NhbEJveC5nZXRDaGlsZEJ5TmFtZSgncmlnaHQnKTtcclxuICAgICAgICBpZiAobGVmdEJ5TmFtZSAmJiByaWdodEJ5TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBsZWZ0OiBsZWZ0QnlOYW1lLCByaWdodDogcmlnaHRCeU5hbWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoaWxkQSA9IHRoaXMubG9jYWxCb3guY2hpbGRyZW5bMF07XHJcbiAgICAgICAgY29uc3QgY2hpbGRCID0gdGhpcy5sb2NhbEJveC5jaGlsZHJlblsxXTtcclxuICAgICAgICByZXR1cm4gY2hpbGRBLnggPD0gY2hpbGRCLnhcclxuICAgICAgICAgICAgPyB7IGxlZnQ6IGNoaWxkQSwgcmlnaHQ6IGNoaWxkQiB9XHJcbiAgICAgICAgICAgIDogeyBsZWZ0OiBjaGlsZEIsIHJpZ2h0OiBjaGlsZEEgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExvY2FsQm94SGFuZ0FuZ2xlKHNpZGU6IENvcmRTaWRlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gc2lkZSA9PT0gJ2xlZnQnID8gY2hpbGRyZW4ubGVmdC5hbmdsZSA6IGNoaWxkcmVuLnJpZ2h0LmFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hBbmNob3JQb3NpdGlvbnMoKTogeyBsZWZ0OiBjYy5WZWMyOyByaWdodDogY2MuVmVjMiB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldExvY2FsQm94U2lkZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCAhdGhpcy5hY3RpdmVDb3JkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zTGVmdCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgY2hpbGRyZW4ubGVmdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBwb3NSaWdodCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgY2hpbGRyZW4ucmlnaHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHsgbGVmdDogcG9zTGVmdCwgcmlnaHQ6IHBvc1JpZ2h0IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk6IHsgbGVmdDogY2MuVmVjMjsgcmlnaHQ6IGNjLlZlYzIgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsQm94QW5jaG9ycyA9IHRoaXMuZ2V0TG9jYWxCb3hBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAobG9jYWxCb3hBbmNob3JzKSByZXR1cm4gbG9jYWxCb3hBbmNob3JzO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubGVmdEFuY2hvciB8fCAhdGhpcy5yaWdodEFuY2hvcikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogY2MudjIodGhpcy5sZWZ0QW5jaG9yLngsIHRoaXMubGVmdEFuY2hvci55KSxcclxuICAgICAgICAgICAgcmlnaHQ6IGNjLnYyKHRoaXMucmlnaHRBbmNob3IueCwgdGhpcy5yaWdodEFuY2hvci55KSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RHJvcEFuY2hvckZvclNpZGUoc2lkZTogQ29yZFNpZGUsIGNoYXJtOiBjYy5Ob2RlKTogRHJvcEFuY2hvciB8IG51bGwge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5Ecm9wT25TaWRlKHNpZGUsIGNoYXJtKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgIGNvcmRQb3M6IHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBsYXRlQ2hhcm1BdChzY3JlZW5Qb3M6IGNjLlZlYzIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5wbGF0ZS5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLnBsYXRlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmFjdGl2ZSB8fCAhY2hpbGQuZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2hhcm1PbkNvcmQoY2hpbGQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBjaGlsZC5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICAgICAgaWYgKHJlY3QuY29udGFpbnMoc2NyZWVuUG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNDaGFybU9uQ29yZChjaGFybTogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jb3JkQ2hhcm1zW2ldO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuY2hhcm0gPT09IGNoYXJtIHx8IHN0YXRlLnBpdm90ID09PSBjaGFybSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjaGFybS5wYXJlbnQgPT09IHN0YXRlLnBpdm90KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvczogY2MuVmVjMik6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1haW5Ob2RlKCkuY29udmVydFRvTm9kZVNwYWNlQVIoc2NyZWVuUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1haW5Ob2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nIHx8IG5vZGUucGFyZW50Lm5hbWUgPT09ICdDYW52YXMnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nID8gbm9kZS5wYXJlbnQgOiBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQ29yZFJvdW5kTGlzdC5wYXJlbnQgfHwgdGhpcy5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGVmYXVsdEJyYWNlbGV0UmVmKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGNvbnN0IGNvcmRJZCA9IGdsb2JhbFRoaXMuaWRTdHJpbmcgfHwgMDtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QnJhY2VsZXRCeUNvcmQubGVuZ3RoID4gY29yZElkICYmIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2NvcmRJZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2NvcmRJZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmFjZWxldFJlZjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtSXRlbUNvbXAoY2hhcm06IGNjLk5vZGUpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjaGFybS5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpO1xyXG4gICAgICAgIGlmIChpdGVtKSByZXR1cm4gaXRlbTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcHMgPSBjaGFybS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjID0gY29tcHNbaV0gYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoYyAmJiB0eXBlb2YgYy50YWcgPT09ICdudW1iZXInICYmIHR5cGVvZiBjLmxvYWRJTUcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5mZXJDb3JkSWRGcm9tUmVmKHJlZjogY2MuTm9kZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgY29yZCA9IHRoaXMuZ2V0UmVmQ29yZE5vZGUocmVmKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gY29yZC5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgY29sb3JJZHM6IHsga2V5OiBzdHJpbmc7IGlkOiBudW1iZXIgfVtdID0gW1xyXG4gICAgICAgICAgICB7IGtleTogJ2JsYWNrJywgaWQ6IDAgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdibHVlJywgaWQ6IDEgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdncmVlbicsIGlkOiAyIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAncGluaycsIGlkOiAzIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAncHVycGxlJywgaWQ6IDQgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICd5ZWxsb3cnLCBpZDogNSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ3doaXRlJywgaWQ6IDYgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihjb2xvcklkc1tpXS5rZXkpID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcklkc1tpXS5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q29yZElkID49IDAgPyB0aGlzLmRlZmF1bHRDb3JkSWQgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZERlZmF1bHRNZXRhKHJlZjogY2MuTm9kZSk6IHsgY29yZElkOiBudW1iZXI7IGtleWNoYWluSW5kZXg6IG51bWJlciB9IHtcclxuICAgICAgICBjb25zdCBtZXRhID0gcmVmICYmIHJlZi5nZXRDb21wb25lbnQoJ0JyYWNlbGV0RGVmYXVsdE1ldGEnKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKG1ldGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcmRJZDogbWV0YS5jb3JkSWQsXHJcbiAgICAgICAgICAgICAgICBrZXljaGFpbkluZGV4OiBtZXRhLmtleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0Q29yZElkID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcmRJZDogdGhpcy5kZWZhdWx0Q29yZElkLFxyXG4gICAgICAgICAgICAgICAga2V5Y2hhaW5JbmRleDogdGhpcy5kZWZhdWx0S2V5Y2hhaW5JbmRleCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvcmRJZDogdGhpcy5pbmZlckNvcmRJZEZyb21SZWYocmVmKSxcclxuICAgICAgICAgICAga2V5Y2hhaW5JbmRleDogdGhpcy5kZWZhdWx0S2V5Y2hhaW5JbmRleCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FjaGVEZWZhdWx0TWV0YU9ubHkoKSB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpO1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLnJlYWREZWZhdWx0TWV0YShyZWYpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdENvcmRJZCA9IG1ldGEuY29yZElkO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXggPSBtZXRhLmtleWNoYWluSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWNoZURlZmF1bHRDb25maWcoYWN0aXZlQ29yZD86IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZkZvckNhY2hlKCk7XHJcbiAgICAgICAgaWYgKCFyZWYpIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NvcmRSb3VuZEdhbWVdIENoxrBhIGfDoW4gZGVmYXVsdEJyYWNlbGV0UmVmIOKAlCBraMO0bmcgdGjhu4Mgc28gc8OhbmggdsOybmcgbeG6q3UuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdExheW91dCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQgPSB0aGlzLmRlZmF1bHRDb3JkSWQgPj0gMCA/IHRoaXMuZGVmYXVsdENvcmRJZCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXggPSB0aGlzLmRlZmF1bHRLZXljaGFpbkluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb25maWdDYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMucmVhZERlZmF1bHRNZXRhKHJlZik7XHJcbiAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkID0gbWV0YS5jb3JkSWQ7XHJcbiAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleCA9IG1ldGEua2V5Y2hhaW5JbmRleDtcclxuICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQgPSB0aGlzLmJ1aWxkRGVmYXVsdExheW91dEZyb21SZWYocmVmLCBhY3RpdmVDb3JkKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRDb25maWdDYWNoZWQgPSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgY2MubG9nKCdbQ29yZFJvdW5kR2FtZV0gRGVmYXVsdCBjb25maWc6IGNvcmRJZD0nICsgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkXHJcbiAgICAgICAgICAgICsgJyAocGxheWVyPScgKyAoZ2xvYmFsVGhpcy5pZFN0cmluZyB8fCAwKSArICcpJ1xyXG4gICAgICAgICAgICArICcga2V5Y2hhaW49JyArIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXhcclxuICAgICAgICAgICAgKyAnIGNoYXJtcz0nICsgdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0Lmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEx1w7RuIHRy4bqjIHJlZiBt4bqrdSBj4buRIMSR4buLbmgg4oCUIGtow7RuZyBwaOG7pSB0aHXhu5ljIGTDonkgbmfGsOG7nWkgY2jGoWkgxJFhbmcgY2jhu41uLiAqL1xyXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QnJhY2VsZXRSZWYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0UmVmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRCcmFjZWxldEJ5Q29yZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRDb3JkSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRLZXljaGFpbkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFNjb3JlQnJlYWtkb3duKCk6IE1hdGNoU2NvcmVCcmVha2Rvd24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RTY29yZUJyZWFrZG93bjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlZkNvcmROb2RlKHJlZjogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmIChyZWYuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikpIHJldHVybiByZWY7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWYuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcmVmLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikpIHJldHVybiBjaGlsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlZjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlZkNvcmRBbmNob3JzKHJlZkNvcmQ6IGNjLk5vZGUpOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gcmVmQ29yZC5nZXRDaGlsZEJ5TmFtZSgnbGVmdCcpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gcmVmQ29yZC5nZXRDaGlsZEJ5TmFtZSgncmlnaHQnKTtcclxuICAgICAgICBpZiAoIWxlZnQgfHwgIXJpZ2h0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBjYy52MihsZWZ0LngsIGxlZnQueSksXHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYy52MihyaWdodC54LCByaWdodC55KSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UGF0aERhdGFGb3JDb3JkKGNvcmQ6IGNjLk5vZGUpOiBDb3JkUGF0aERhdGEgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuY29yZFBhdGhzLmdldChjb3JkKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcclxuXHJcbiAgICAgICAgY29uc3QgcmF3UG9pbnRzID0gdGhpcy5nZXRQb2x5Z29uQ29sbGlkZXJQb2ludHMoY29yZCk7XHJcbiAgICAgICAgaWYgKHJhd1BvaW50cy5sZW5ndGggPCAyKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcyA9IHRoaXMuc2FtcGxlQWxvbmdQYXRoKHJhd1BvaW50cywgdGhpcy5wYXRoU2FtcGxlU3BhY2luZyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9pbnRzOiBzYW1wbGVzLFxyXG4gICAgICAgICAgICB0b3RhbExlbmd0aDogdGhpcy5jYWxjUGF0aExlbmd0aChzYW1wbGVzKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29yZEFuY2hvcnMoY29yZDogY2MuTm9kZSk6IHsgbGVmdDogY2MuVmVjMjsgcmlnaHQ6IGNjLlZlYzIgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBjb3JkLmdldENoaWxkQnlOYW1lKCdsZWZ0Jyk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBjb3JkLmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmICghbGVmdCB8fCAhcmlnaHQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNjLnYyKGxlZnQueCwgbGVmdC55KSxcclxuICAgICAgICAgICAgcmlnaHQ6IGNjLnYyKHJpZ2h0LngsIHJpZ2h0LnkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUZW1wbGF0ZUNvcmQoY29yZElkPzogbnVtYmVyKTogY2MuTm9kZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGlkID0gY29yZElkICE9PSB1bmRlZmluZWQgPyBjb3JkSWQgOiB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLkNvcmRSb3VuZExpc3QgfHwgaWQgPCAwKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuW2lkXSB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVhc3VyZVBhdGhEaXN0YW5jZU9uQ29yZChcclxuICAgICAgICBjb3JkOiBjYy5Ob2RlLFxyXG4gICAgICAgIHBhdGg6IENvcmRQYXRoRGF0YSxcclxuICAgICAgICBhbmNob3JzOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0sXHJcbiAgICAgICAgc2lkZTogQ29yZFNpZGUsXHJcbiAgICAgICAgcG9zOiBjYy5WZWMyXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXIgPSB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzaWRlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXN0YW5jZUFsb25nUGF0aChwYXRoLnBvaW50cywgZW50cnlJbmRleCwgcGF0aERpciwgcG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkRGVmYXVsdExheW91dCgpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZ2V0RGVmYXVsdEJyYWNlbGV0UmVmRm9yQ2FjaGUoKSB8fCB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZigpO1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGREZWZhdWx0TGF5b3V0RnJvbVJlZihyZWYsIHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZERlZmF1bHRMYXlvdXRGcm9tUmVmKHJlZjogY2MuTm9kZSwgYWN0aXZlQ29yZD86IGNjLk5vZGUpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZkNvcmQgPSB0aGlzLmdldFJlZkNvcmROb2RlKHJlZik7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGVDb3JkID0gYWN0aXZlQ29yZCB8fCB0aGlzLmdldFRlbXBsYXRlQ29yZCgpO1xyXG4gICAgICAgIGlmICghdGVtcGxhdGVDb3JkKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBLaMO0bmcgdMOsbSB0aOG6pXkgZMOieSBnYW1lIMSR4buDIMSR4buNYyBsYXlvdXQgbeG6q3UuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGhEYXRhRm9yQ29yZCh0ZW1wbGF0ZUNvcmQpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JzKHRlbXBsYXRlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBEw6J5IGdhbWUgdGhp4bq/dSBQb2x5Z29uQ29sbGlkZXIgaG/hurdjIGFuY2hvciBsZWZ0L3JpZ2h0LicpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGFybVJvb3QgPSByZWYuZ2V0Q2hpbGRCeU5hbWUoJ2NoYXJtJykgfHwgcmVmO1xyXG4gICAgICAgIGNvbnN0IHNsb3RzOiBDaGFybVNsb3REYXRhW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFybVJvb3QuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJtID0gY2hhcm1Sb290LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRDaGFybUl0ZW1Db21wKGNoYXJtKTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc09uQ29yZCA9IHJlZkNvcmQuY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgICAgICBjaGFybS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGUgPSB0aGlzLnJlc29sdmVTaWRlRm9yUG9zaXRpb24ocG9zT25Db3JkLCBhbmNob3JzKTtcclxuICAgICAgICAgICAgY29uc3QgcGF0aERpc3RhbmNlID0gdGhpcy5tZWFzdXJlUGF0aERpc3RhbmNlT25Db3JkKFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVDb3JkLFxyXG4gICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgIGFuY2hvcnMsXHJcbiAgICAgICAgICAgICAgICBzaWRlLFxyXG4gICAgICAgICAgICAgICAgcG9zT25Db3JkXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBzbG90cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRhZzogaXRlbS50YWcsXHJcbiAgICAgICAgICAgICAgICBjb2xvckluZGV4OiBpdGVtLmNvbG9ySW5kZXggfHwgMCxcclxuICAgICAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgICAgICBwYXRoRGlzdGFuY2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xvdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlU2lkZUZvclBvc2l0aW9uKFxyXG4gICAgICAgIGNvcmRMb2NhbDogY2MuVmVjMixcclxuICAgICAgICBhbmNob3JzOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH1cclxuICAgICk6IENvcmRTaWRlIHtcclxuICAgICAgICBjb25zdCBkaXN0TGVmdCA9IGNjLnYyKGNvcmRMb2NhbC54IC0gYW5jaG9ycy5sZWZ0LngsIGNvcmRMb2NhbC55IC0gYW5jaG9ycy5sZWZ0LnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RSaWdodCA9IGNjLnYyKGNvcmRMb2NhbC54IC0gYW5jaG9ycy5yaWdodC54LCBjb3JkTG9jYWwueSAtIGFuY2hvcnMucmlnaHQueSkubWFnKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RMZWZ0IDw9IGRpc3RSaWdodCA/ICdsZWZ0JyA6ICdyaWdodCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFBsYXllckxheW91dCgpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGNvbnN0IHNsb3RzOiBDaGFybVNsb3REYXRhW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY29yZENoYXJtc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLmNoYXJtLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykgYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgc2xvdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0YWc6IGl0ZW0udGFnLFxyXG4gICAgICAgICAgICAgICAgY29sb3JJbmRleDogaXRlbS5jb2xvckluZGV4IHx8IDAsXHJcbiAgICAgICAgICAgICAgICBzaWRlOiBzdGF0ZS5zaWRlLFxyXG4gICAgICAgICAgICAgICAgcGF0aERpc3RhbmNlOiB0aGlzLmdldENoYXJtUGF0aERpc3RhbmNlKHN0YXRlKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbG90cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNsb3RQb3NlKHNsb3Q6IENoYXJtU2xvdERhdGEpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBhbmdsZTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAsIGFuZ2xlOiAwIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbnRyeSA9IHNsb3Quc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXIgPSB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzbG90LnNpZGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2VPblBhdGgocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHBhdGhEaXIsIHNsb3QucGF0aERpc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCkge1xyXG4gICAgICAgIHRoaXMuaGlkZURlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVkRGVmYXVsdExheW91dC5sZW5ndGggfHwgIXRoaXMuY2hhcm1MYXllcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZigpO1xyXG4gICAgICAgIGNvbnN0IGNoYXJtUm9vdCA9IHJlZiAmJiAocmVmLmdldENoaWxkQnlOYW1lKCdjaGFybScpIHx8IHJlZik7XHJcbiAgICAgICAgaWYgKCFjaGFybVJvb3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlldyA9IG5ldyBjYy5Ob2RlKCdkZWZhdWx0QnJhY2VsZXRQcmV2aWV3Jyk7XHJcbiAgICAgICAgcHJldmlldy5wYXJlbnQgPSB0aGlzLmNoYXJtTGF5ZXI7XHJcbiAgICAgICAgcHJldmlldy5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcblxyXG4gICAgICAgIGxldCBzcmNJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFybVJvb3QuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNoYXJtUm9vdC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKCFzcmMuZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChzcmNJbmRleCA+PSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQubGVuZ3RoKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXRbc3JjSW5kZXhdO1xyXG4gICAgICAgICAgICBzcmNJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBjYy5pbnN0YW50aWF0ZShzcmMpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NlID0gdGhpcy5nZXRTbG90UG9zZShzbG90KTtcclxuICAgICAgICAgICAgY2xvbmUucGFyZW50ID0gcHJldmlldztcclxuICAgICAgICAgICAgY2xvbmUuc2V0UG9zaXRpb24oY2MudjMocG9zZS54LCBwb3NlLnksIDApKTtcclxuICAgICAgICAgICAgY2xvbmUuYW5nbGUgPSBwb3NlLmFuZ2xlO1xyXG4gICAgICAgICAgICBjbG9uZS5vcGFjaXR5ID0gMTUwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGNsb25lLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkgYm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpZGVycyA9IGNsb25lLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc0NvbGxpZGVyKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xsaWRlcnMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyc1tjXS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdOb2RlID0gcHJldmlldztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRQcmV2aWV3Tm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Tm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdOb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFNvIHPDoW5oIGNoYXJtICgw4oCTMTAwJSwgY2jGsGEgZ+G7k20gZMOieSB2w6Aga2V5Y2hhaW4pLiAqL1xyXG4gICAgY29tcGFyZUNoYXJtc09ubHkoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHRoaXMuY2FjaGVkRGVmYXVsdExheW91dC5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgID8gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0XHJcbiAgICAgICAgICAgIDogdGhpcy5idWlsZERlZmF1bHRMYXlvdXQoKTtcclxuXHJcbiAgICAgICAgaWYgKGV4cGVjdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHRoaXMuYnVpbGRQbGF5ZXJMYXlvdXQoKTtcclxuICAgICAgICByZXR1cm4gY2FsY0NoYXJtTWF0Y2hQZXJjZW50KGV4cGVjdGVkLCBhY3R1YWwsIHRoaXMubWF0Y2hQb3NpdGlvblRvbGVyYW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTbyBzw6FuaCDEkeG6p3kgxJHhu6c6IGTDonkgKDMwJSkgKyBjaGFybSAoNTAlKSArIGtleWNoYWluICgyMCUpLlxyXG4gICAgICogR+G7jWkga2hpIMSRw6MgY8OzIGzhu7FhIGNo4buNbiBrZXljaGFpbiBj4bunYSBuZ8aw4budaSBjaMahaS5cclxuICAgICAqL1xyXG4gICAgY29tcGFyZUZ1bGwocGxheWVyS2V5Y2hhaW5JbmRleDogbnVtYmVyKTogTWF0Y2hTY29yZUJyZWFrZG93biB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpO1xyXG4gICAgICAgIGlmIChyZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0ID0gdGhpcy5idWlsZERlZmF1bHRMYXlvdXRGcm9tUmVmKHJlZiwgdGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0O1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHRoaXMuYnVpbGRQbGF5ZXJMYXlvdXQoKTtcclxuICAgICAgICBjb25zdCBhY3R1YWxDb3JkSWQgPSBnbG9iYWxUaGlzLmlkU3RyaW5nIHx8IDA7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duID0gY2FsY0Z1bGxTY29yZShcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkLFxyXG4gICAgICAgICAgICBhY3R1YWxDb3JkSWQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkLFxyXG4gICAgICAgICAgICBhY3R1YWwsXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIHBsYXllcktleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hQb3NpdGlvblRvbGVyYW5jZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sYXN0TWF0Y2hQZXJjZW50ID0gdGhpcy5sYXN0U2NvcmVCcmVha2Rvd24udG90YWw7XHJcblxyXG4gICAgICAgIGNjLmxvZygnW0NvcmRSb3VuZEdhbWVdIENvbXBhcmU6IGV4cGVjdGVkQ29yZD0nICsgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkXHJcbiAgICAgICAgICAgICsgJyBwbGF5ZXJDb3JkPScgKyBhY3R1YWxDb3JkSWRcclxuICAgICAgICAgICAgKyAnIGV4cGVjdGVkQ2hhcm1zPScgKyBleHBlY3RlZC5sZW5ndGhcclxuICAgICAgICAgICAgKyAnIHBsYXllckNoYXJtcz0nICsgYWN0dWFsLmxlbmd0aFxyXG4gICAgICAgICAgICArICcga2V5Y2hhaW49JyArIHBsYXllcktleWNoYWluSW5kZXhcclxuICAgICAgICAgICAgKyAnID0+ICcgKyB0aGlzLmxhc3RNYXRjaFBlcmNlbnQgKyAnJSdcclxuICAgICAgICAgICAgKyAnIChkw6J5ICcgKyB0aGlzLmxhc3RTY29yZUJyZWFrZG93bi5jb3JkU2NvcmVcclxuICAgICAgICAgICAgKyAnIGNoYXJtICcgKyB0aGlzLmxhc3RTY29yZUJyZWFrZG93bi5jaGFybVNjb3JlXHJcbiAgICAgICAgICAgICsgJyBrZXkgJyArIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duLmtleWNoYWluU2NvcmUgKyAnKScpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0U2NvcmVCcmVha2Rvd247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBkZXByZWNhdGVkIGTDuW5nIGNvbXBhcmVGdWxsICovXHJcbiAgICBjb21wYXJlV2l0aERlZmF1bHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlQ2hhcm1zT25seSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RNYXRjaFBlcmNlbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0TWF0Y2hQZXJjZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNYXRjaFJlc3VsdChwZXJjZW50PzogbnVtYmVyLCBicmVha2Rvd24/OiBNYXRjaFNjb3JlQnJlYWtkb3duKSB7XHJcbiAgICAgICAgY29uc3QgYmQgPSBicmVha2Rvd24gfHwgdGhpcy5sYXN0U2NvcmVCcmVha2Rvd247XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwZXJjZW50ICE9PSB1bmRlZmluZWQgPyBwZXJjZW50IDogdGhpcy5sYXN0TWF0Y2hQZXJjZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXRjaFJlc3VsdExhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hSZXN1bHRMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hSZXN1bHRMYWJlbC5zdHJpbmcgPSB2YWx1ZSArICclJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiZCkge1xyXG4gICAgICAgICAgICBjYy5sb2coJ1tDb3JkUm91bmRHYW1lXSBTY29yZTogJyArIHZhbHVlICsgJyUnXHJcbiAgICAgICAgICAgICAgICArICcgfCBjb3JkPScgKyBiZC5jb3JkU2NvcmVcclxuICAgICAgICAgICAgICAgICsgJyBjaGFybT0nICsgYmQuY2hhcm1TY29yZVxyXG4gICAgICAgICAgICAgICAgKyAnIGtleWNoYWluPScgKyBiZC5rZXljaGFpblNjb3JlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coJ1tDb3JkUm91bmRHYW1lXSBNYXRjaDogJyArIHZhbHVlICsgJyUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEfhu41pIGtoaSB4b25nIHjhur9wIGNoYXJtIOKAlCBjaOG7iSDhuqluIHByZXZpZXcsIGNoxrBhIHTDrW5oICUgY3Xhu5FpLiAqL1xyXG4gICAgZmluaXNoQnJhY2VsZXRQaGFzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEfhu41pIGtoaSBr4bq/dCB0aMO6YyBnYW1lIOKAlCB0w61uaCAlIMSR4bqneSDEkeG7pyB2w6AgaGnhu4NuIHRo4buLLiAqL1xyXG4gICAgZmluaXNoQW5kQ29tcGFyZShwbGF5ZXJLZXljaGFpbkluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuaGlkZURlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICBjb25zdCBicmVha2Rvd24gPSB0aGlzLmNvbXBhcmVGdWxsKHBsYXllcktleWNoYWluSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2hvd01hdGNoUmVzdWx0KGJyZWFrZG93bi50b3RhbCwgYnJlYWtkb3duKTtcclxuICAgICAgICByZXR1cm4gYnJlYWtkb3duLnRvdGFsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcm1TbGlkZSh0aGlzLmNvcmRDaGFybXNbaV0sIGR0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGF0ZVVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3RyYWluQ2hhcm1IYW5nKHRoaXMuY29yZENoYXJtc1tpXSwgZHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=