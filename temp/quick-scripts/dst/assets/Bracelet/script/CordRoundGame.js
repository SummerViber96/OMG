
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
        var dropAnchor = this.resolveDropAnchor(charmWorld, this.dragSnapSide);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ29yZFJvdW5kR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkc7QUFFdkcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUEwQjVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBdWtEQztRQXBrREcsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyx1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFHL0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFHM0Isa0JBQVksR0FBVyxHQUFHLENBQUM7UUFHM0IsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBRy9CLHFCQUFlLEdBQVcsRUFBRSxDQUFDO1FBRzdCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLHlCQUFtQixHQUFXLENBQUMsQ0FBQztRQUdoQyxzQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFHL0Isb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFHNUIsMEJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMsR0FBK0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNsRCxtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUM5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixnQkFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEMsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsa0JBQVksR0FB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QUN1QjtJQUdoQztRQURDLFFBQVE7MkRBQ3NCO0lBRy9CO1FBREMsUUFBUTt5REFDbUI7SUFHNUI7UUFEQyxRQUFROytEQUN5QjtJQWtCbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFJdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2REFDaUI7SUFJbkM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0VBQ2tCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ2U7SUFHbEM7UUFEQyxRQUFRO2lFQUMyQjtJQUdwQztRQURDLFFBQVE7NkRBQzBCO0lBSW5DO1FBREMsUUFBUTt3REFDaUI7SUFJMUI7UUFEQyxRQUFROytEQUN3QjtJQTNGaEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXVrRGpDO0lBQUQsb0JBQUM7Q0F2a0RELEFBdWtEQyxDQXZrRDBDLEVBQUUsQ0FBQyxTQUFTLEdBdWtEdEQ7a0JBdmtEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbGNDaGFybU1hdGNoUGVyY2VudCwgY2FsY0Z1bGxTY29yZSwgQ2hhcm1TbG90RGF0YSwgTWF0Y2hTY29yZUJyZWFrZG93biB9IGZyb20gJy4vQnJhY2VsZXRNYXRjaGVyJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG50eXBlIENvcmRTaWRlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcclxuXHJcbmludGVyZmFjZSBDb3JkUGF0aERhdGEge1xyXG4gICAgcG9pbnRzOiBjYy5WZWMyW107XHJcbiAgICB0b3RhbExlbmd0aDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29yZENoYXJtU3RhdGUge1xyXG4gICAgcGl2b3Q6IGNjLk5vZGU7XHJcbiAgICBjaGFybTogY2MuTm9kZTtcclxuICAgIHNldHRsZWQ6IGJvb2xlYW47XHJcbiAgICBzdGlsbFRpbWU6IG51bWJlcjtcclxuICAgIHNpZGU6IENvcmRTaWRlO1xyXG4gICAgcGF0aFN0YXJ0SW5kZXg6IG51bWJlcjtcclxuICAgIHBhdGhEaXI6IG51bWJlcjtcclxuICAgIHBhdGhEaXN0YW5jZTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRHJvcEFuY2hvciB7XHJcbiAgICBzaWRlOiBDb3JkU2lkZTtcclxuICAgIGNvcmRQb3M6IGNjLlZlYzI7XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmRSb3VuZEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ29yZFJvdW5kTGlzdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF0ZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJtSGluZDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGVudHJ5RGV0ZWN0UmFkaXVzOiBudW1iZXIgPSAxMTA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwYXRoU2FtcGxlU3BhY2luZzogbnVtYmVyID0gMTI7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzZWdtZW50UmFkaXVzOiBudW1iZXIgPSAxNDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNsaWRlR3Jhdml0eTogbnVtYmVyID0gMzIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4U2xpZGVTcGVlZDogbnVtYmVyID0gMjgwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGF0aFB1bGxTdHJlbmd0aDogbnVtYmVyID0gNDIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGF0aFB1bGxEYW1waW5nOiBudW1iZXIgPSAxNjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNldHRsZVNwZWVkOiBudW1iZXIgPSAyMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBpdm90Q29sbGlkZXJSYWRpdXM6IG51bWJlciA9IDg7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjaGFybVNsb3RTcGFjaW5nOiBudW1iZXIgPSAxMzA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBoYW5nU3dpbmdMaW1pdDogbnVtYmVyID0gMzI7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBoYW5nT3V0d2FyZFN0aWZmbmVzczogbnVtYmVyID0gMTQ7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmVDb3JkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29yZFBhdGhzOiBNYXA8Y2MuTm9kZSwgQ29yZFBhdGhEYXRhPiA9IG5ldyBNYXAoKTtcclxuICAgIHByaXZhdGUgcHJlcGFyZWRDb3JkczogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGxlZnRBbmNob3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByaWdodEFuY2hvcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNoYXJtTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb3JkQ2hhcm1zOiBDb3JkQ2hhcm1TdGF0ZVtdID0gW107XHJcbiAgICBwcml2YXRlIGRyYWdnaW5nQ2hhcm06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBkcmFnU25hcFNpZGU6IENvcmRTaWRlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHJhZ09yaWdpblBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdPcmlnaW5Qb3M6IGNjLlZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3JpZ2luU2libGluZ0luZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVUb3VjaElkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdG91Y2hCb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRHJvcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5PazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKiogTm9kZSB0aGFtIGNoaeG6v3UgdsOybmcgbeG6q3UgKHZkOiBkZWZhdWx0Q2hhcm0gdHJvbmcgc2NlbmUpLiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkZWZhdWx0QnJhY2VsZXRSZWY6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8qKiBWw7JuZyBt4bqrdSB0aGVvIHThu6tuZyBsb+G6oWkgZMOieSAoaW5kZXggPSBpZFN0cmluZykuIMavdSB0acOqbiBoxqFuIGRlZmF1bHRCcmFjZWxldFJlZi4gKi9cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBkZWZhdWx0QnJhY2VsZXRCeUNvcmQ6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1hdGNoUmVzdWx0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1hdGNoUG9zaXRpb25Ub2xlcmFuY2U6IG51bWJlciA9IDgwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2hvd0RlZmF1bHRQcmV2aWV3OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRMOieSBt4bqrdSDEkcO6bmcgKHZkOiAyID0gZ3JlZW4pLiDEkMO6bmcgbcOgdSBkw6J5IMSRxrDhu6NjICszMCUuIC0xID0gxJFvw6FuIHThu6sgdMOqbiBjb3JkIChraMO0bmcgdGluIGPhuq15KS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVmYXVsdENvcmRJZDogbnVtYmVyID0gMjtcclxuXHJcbiAgICAvKiogS2V5Y2hhaW4gxJHDum5nIChmYWxsYmFjayBraGkgY2jGsGEgZ+G6r24gQnJhY2VsZXREZWZhdWx0TWV0YSkuICovXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRlZmF1bHRLZXljaGFpbkluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGxvY2FsQm94ID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBjYWNoZWREZWZhdWx0TGF5b3V0OiBDaGFybVNsb3REYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgY2FjaGVkRGVmYXVsdENvcmRJZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRDb25maWdDYWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZGVmYXVsdFByZXZpZXdOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgbGFzdE1hdGNoUGVyY2VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbGFzdFNjb3JlQnJlYWtkb3duOiBNYXRjaFNjb3JlQnJlYWtkb3duID0gbnVsbDtcclxuICAgIGxpZnRCcmFjZWxldCh0YXJnZXRQb3M6IGNjLlZlYzMsIGR1cmF0aW9uOiBudW1iZXIgPSAwLjQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuQ29yZFJvdW5kTGlzdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZGllczogY2MuUmlnaWRCb2R5W10gPSBbXTtcclxuICAgICAgICBjb25zdCBjb2xsZWN0Qm9kaWVzID0gKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2RpZXMucHVzaChib2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0Qm9kaWVzKG5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb2xsZWN0Qm9kaWVzKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBib2RpZXNbaV07XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLktpbmVtYXRpYztcclxuICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzeW5jQm9kaWVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYm9kaWVzW2ldLnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJvZGllc1tpXS5zeW5jUm90YXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0sIHsgb25VcGRhdGU6IHN5bmNCb2RpZXMgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3luY0JvZGllcygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIGlzVGFyZ2V0SGluZCA9IG51bGxcclxuXHJcbiAgICBzZXRIaW5kKGNoYXJtKSB7XHJcbiAgICAgICAgbGV0IHRhZyA9IGNoYXJtLmdldENvbXBvbmVudChcIkNoYXJtSXRlbVwiKS50YWdcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0SGluZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0SGluZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFybUhpbmQuY2hpbGRyZW5bdGFnXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRIaW5kID0gdGhpcy5jaGFybUhpbmQuY2hpbGRyZW5bdGFnXTtcclxuICAgICAgICBsZXQgY29sb3JJTUcgPSBjaGFybS5nZXRDb21wb25lbnQoXCJDaGFybUl0ZW1cIikuZ2V0Q29sb3IoKTtcclxuICAgICAgICB0aGlzLmNoYXJtSGluZC5jaGlsZHJlblt0YWddLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gY29sb3JJTUc7XHJcbiAgICAgICAgdGhpcy5jaGFybUhpbmQuY2hpbGRyZW5bdGFnXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGNvbG9ySU1HO1xyXG4gICAgICAgIHRoaXMubG9jYWxCb3ggPSB0aGlzLmNoYXJtSGluZC5jaGlsZHJlblt0YWddO1xyXG4gICAgfVxyXG4gICAgc3RhcnRCcmFjZWxldE1vZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLkNvcmRSb3VuZExpc3QpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJlc29sdmVSZWZlcmVuY2VzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ29yZCA9IHRoaXMuQ29yZFJvdW5kTGlzdC5jaGlsZHJlbltnbG9iYWxUaGlzLmlkU3RyaW5nXTtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlQ29yZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnRBbmNob3IgPSB0aGlzLmFjdGl2ZUNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ2xlZnQnKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QW5jaG9yID0gdGhpcy5hY3RpdmVDb3JkLmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmICghdGhpcy5sZWZ0QW5jaG9yIHx8ICF0aGlzLnJpZ2h0QW5jaG9yKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBDb3JkIGlzIG1pc3NpbmcgbGVmdC9yaWdodCBhbmNob3Igbm9kZXMuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKDAsIC01MjApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb3JkKHRoaXMuQ29yZFJvdW5kTGlzdC5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5zdXJlQ2hhcm1MYXllcigpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVEZWZhdWx0Q29uZmlnKHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0RlZmF1bHRQcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0RlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iaW5kVG91Y2goKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gQ2jhu4kgxJHhu41jIG1ldGEgc+G7m207IGxheW91dCBjaGFybSBz4bq9IGJ1aWxkIGzhuqFpIGtoaSB2w6BvIGdhbWUgduG7m2kgYWN0aXZlQ29yZC5cclxuICAgICAgICB0aGlzLmNhY2hlRGVmYXVsdE1ldGFPbmx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmVwYXJlQ29yZChjb3JkOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJlcGFyZWRDb3Jkcy5pbmRleE9mKGNvcmQpID49IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmF3UG9pbnRzID0gdGhpcy5nZXRQb2x5Z29uQ29sbGlkZXJQb2ludHMoY29yZCk7XHJcbiAgICAgICAgaWYgKHJhd1BvaW50cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBDb3JkIFwiJyArIGNvcmQubmFtZSArICdcIiBuZWVkcyBjYy5Qb2x5Z29uQ29sbGlkZXIuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbXBsZXMgPSB0aGlzLnNhbXBsZUFsb25nUGF0aChyYXdQb2ludHMsIHRoaXMucGF0aFNhbXBsZVNwYWNpbmcpO1xyXG4gICAgICAgIHRoaXMuY29yZFBhdGhzLnNldChjb3JkLCB7XHJcbiAgICAgICAgICAgIHBvaW50czogc2FtcGxlcyxcclxuICAgICAgICAgICAgdG90YWxMZW5ndGg6IHRoaXMuY2FsY1BhdGhMZW5ndGgoc2FtcGxlcyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBDb3JkUGh5c2ljcyhjb3JkLCBzYW1wbGVzKTtcclxuICAgICAgICB0aGlzLnByZXBhcmVkQ29yZHMucHVzaChjb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBvbHlnb25Db2xsaWRlclBvaW50cyhjb3JkOiBjYy5Ob2RlKTogY2MuVmVjMltdIHtcclxuICAgICAgICBjb25zdCBwb2x5ID0gY29yZC5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIXBvbHkgfHwgIXBvbHkucG9pbnRzIHx8IHBvbHkucG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcG9seS5vZmZzZXQgfHwgY2MudjIoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHBvbHkucG9pbnRzLm1hcChwID0+IGNjLnYyKHAueCArIG9mZnNldC54LCBwLnkgKyBvZmZzZXQueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBDb3JkUGh5c2ljcyhjb3JkOiBjYy5Ob2RlLCBzYW1wbGVzOiBjYy5WZWMyW10pIHtcclxuICAgICAgICBsZXQgYm9keSA9IGNvcmQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkgPSBjb3JkLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICBib2R5LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTZWdtZW50Q29sbGlkZXJzKGNvcmQpO1xyXG5cclxuICAgICAgICBjb25zdCBzcGFjaW5nID0gTWF0aC5tYXgodGhpcy5wYXRoU2FtcGxlU3BhY2luZyAqIDEuNSwgMTYpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyUG9pbnRzID0gc2FtcGxlcy5sZW5ndGggPiA4MFxyXG4gICAgICAgICAgICA/IHRoaXMuc2FtcGxlQWxvbmdQYXRoKHNhbXBsZXMsIHNwYWNpbmcpXHJcbiAgICAgICAgICAgIDogc2FtcGxlcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlclBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBjb3JkLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICBjb2wub2Zmc2V0ID0gY29sbGlkZXJQb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbC5yYWRpdXMgPSB0aGlzLnNlZ21lbnRSYWRpdXM7XHJcbiAgICAgICAgICAgIGNvbC5mcmljdGlvbiA9IDAuMzU7XHJcbiAgICAgICAgICAgIGNvbC5yZXN0aXR1dGlvbiA9IDAuMDU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2FtcGxlQWxvbmdQYXRoKHBvaW50czogY2MuVmVjMltdLCBzcGFjaW5nOiBudW1iZXIpOiBjYy5WZWMyW10ge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjYXJyeSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbKGkgKyAxKSAlIHBvaW50cy5sZW5ndGhdO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ0xlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChzZWdMZW4gPD0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXJYID0gZHggLyBzZWdMZW47XHJcbiAgICAgICAgICAgIGNvbnN0IGRpclkgPSBkeSAvIHNlZ0xlbjtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBjYXJyeTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChkaXN0IDwgc2VnTGVuKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goY2MudjIoYS54ICsgZGlyWCAqIGRpc3QsIGEueSArIGRpclkgKiBkaXN0KSk7XHJcbiAgICAgICAgICAgICAgICBkaXN0ICs9IHNwYWNpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FycnkgPSBkaXN0IC0gc2VnTGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNhbXBsZXMubGVuZ3RoID4gMCA/IHNhbXBsZXMgOiBwb2ludHMuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGNQYXRoTGVuZ3RoKHBvaW50czogY2MuVmVjMltdKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzWyhpICsgMSkgJSBwb2ludHMubGVuZ3RoXTtcclxuICAgICAgICAgICAgbGVuICs9IGNjLnYyKGIueCAtIGEueCwgYi55IC0gYS55KS5tYWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyU2VnbWVudENvbGxpZGVycyhjb3JkOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IGNvcmQuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjaXJjbGVzW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbnN1cmVDaGFybUxheWVyKCkge1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuYWN0aXZlQ29yZC5nZXRDaGlsZEJ5TmFtZSgnY2hhcm1zT25Db3JkJyk7XHJcbiAgICAgICAgaWYgKCFsYXllcikge1xyXG4gICAgICAgICAgICBsYXllciA9IG5ldyBjYy5Ob2RlKCdjaGFybXNPbkNvcmQnKTtcclxuICAgICAgICAgICAgbGF5ZXIucGFyZW50ID0gdGhpcy5hY3RpdmVDb3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJtTGF5ZXIgPSBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc29sdmVSZWZlcmVuY2VzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBraGF5ID0gbWFpbi5nZXRDaGlsZEJ5TmFtZSgna2hheScpO1xyXG4gICAgICAgICAgICBpZiAoa2hheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0ZSA9IGtoYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kVG91Y2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG91Y2hCb3VuZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudG91Y2hCb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdWNoTm9kZSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgdGhpcy5kcmFnZ2luZ0NoYXJtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gdGhpcy5nZXRQbGF0ZUNoYXJtQXQoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgaWYgKCFjaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSBldmVudC5nZXRJRCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnREcmFnKGNoYXJtLCBldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB0aGlzLnNldEhpbmQoY2hhcm0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCBldmVudC5nZXRJRCgpICE9PSB0aGlzLmFjdGl2ZVRvdWNoSWQgfHwgIXRoaXMuZHJhZ2dpbmdDaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMuZ2V0TWFpbkxvY2FsUG9zKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGNvbnN0IHNuYXAgPSB0aGlzLmdldERyYWdTbmFwUG9zZSh0b3VjaFBvcyk7XHJcbiAgICAgICAgLy8gaWYgKHNuYXApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLnNldFBvc2l0aW9uKHNuYXAucG9zKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLmFuZ2xlID0gc25hcC5hbmdsZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmFnU25hcFNpZGUgPSBzbmFwLnNpZGU7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLmFuZ2xlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kcmFnU25hcFNpZGUgPSBudWxsO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgZXZlbnQuZ2V0SUQoKSAhPT0gdGhpcy5hY3RpdmVUb3VjaElkIHx8ICF0aGlzLmRyYWdnaW5nQ2hhcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhcm0gPSB0aGlzLmRyYWdnaW5nQ2hhcm07XHJcbiAgICAgICAgY29uc3QgY2hhcm1Xb3JsZCA9IGNoYXJtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGRyb3BBbmNob3IgPSB0aGlzLnJlc29sdmVEcm9wQW5jaG9yKGNoYXJtV29ybGQsIHRoaXMuZHJhZ1NuYXBTaWRlKTtcclxuICAgICAgICBpZiAoZHJvcEFuY2hvcikge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmREcm9wLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5oaWRlRGVmYXVsdEJyYWNlbGV0UHJldmlldygpO1xyXG4gICAgICAgICAgICB0aGlzLnRocmVhZENoYXJtT250b0NvcmQoY2hhcm0sIGRyb3BBbmNob3IpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bk9rLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldERyYWdnZWRDaGFybShjaGFybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZHJhZ1NuYXBTaWRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSAtMTtcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEhpbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEhpbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRIaW5kID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENoYXJtUGxhdGVQaHlzaWNzKGNoYXJtOiBjYy5Ob2RlLCBlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBpZiAoZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IGNoYXJtLmdldENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoY29sbGlkZXIpIHtcclxuICAgICAgICAgICAgY29sbGlkZXIuZW5hYmxlZCA9IGVuYWJsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnREcmFnKGNoYXJtOiBjYy5Ob2RlLCBzY3JlZW5Qb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0gPSBjaGFybTtcclxuICAgICAgICB0aGlzLmRyYWdPcmlnaW5QYXJlbnQgPSBjaGFybS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5kcmFnT3JpZ2luUG9zID0gY2hhcm0ucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICB0aGlzLmRyYWdPcmlnaW5TaWJsaW5nSW5kZXggPSBjaGFybS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDaGFybVBsYXRlUGh5c2ljcyhjaGFybSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGNoYXJtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gbWFpbjtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbihtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKSk7XHJcbiAgICAgICAgY2hhcm0uc2V0U2libGluZ0luZGV4KG1haW4uY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKHRoaXMuZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXREcmFnZ2VkQ2hhcm0oY2hhcm06IGNjLk5vZGUpIHtcclxuICAgICAgICBjaGFybS5wYXJlbnQgPSB0aGlzLmRyYWdPcmlnaW5QYXJlbnQ7XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24odGhpcy5kcmFnT3JpZ2luUG9zKTtcclxuICAgICAgICBjaGFybS5zZXRTaWJsaW5nSW5kZXgodGhpcy5kcmFnT3JpZ2luU2libGluZ0luZGV4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDaGFybVBsYXRlUGh5c2ljcyhjaGFybSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aHJlYWRDaGFybU9udG9Db3JkKGNoYXJtOiBjYy5Ob2RlLCBkcm9wQW5jaG9yOiBEcm9wQW5jaG9yKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblNpZGUoZHJvcEFuY2hvci5zaWRlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGFuY2hvclBvcyA9IGRyb3BBbmNob3IuY29yZFBvcztcclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgYW5jaG9yUG9zKTtcclxuICAgICAgICBjb25zdCBwYXRoRGlyID0gdGhpcy5waWNrUGF0aERpcmVjdGlvbihwYXRoLnBvaW50cywgc3RhcnRJbmRleCwgZHJvcEFuY2hvci5zaWRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGl2b3QgPSB0aGlzLnNldHVwQ2hhcm1IYW5nUmlnKGNoYXJtKTtcclxuICAgICAgICBwaXZvdC5wYXJlbnQgPSB0aGlzLmNoYXJtTGF5ZXI7XHJcbiAgICAgICAgcGl2b3Quc2V0UG9zaXRpb24oY2MudjMoYW5jaG9yUG9zLngsIGFuY2hvclBvcy55LCAwKSk7XHJcbiAgICAgICAgY29uc3QgaGFuZ0xvY2FsID0gdGhpcy5nZXRIYW5nTG9jYWxPZmZzZXQoY2hhcm0pO1xyXG4gICAgICAgIGNvbnN0IG91dHdhcmQgPSB0aGlzLmdldE91dHdhcmRGcm9tQ2VudGVyKGNjLnYyKGFuY2hvclBvcy54LCBhbmNob3JQb3MueSkpO1xyXG4gICAgICAgIGNoYXJtLmFuZ2xlID0gdGhpcy5hbmdsZUZvck91dHdhcmRIYW5nKG91dHdhcmQsIGhhbmdMb2NhbCk7XHJcbiAgICAgICAgY2hhcm0uY2hpbGRyZW5bMF0uc2NhbGUgPSAwLjg7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpdm90Qm9keSA9IHBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGNoYXJtQm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChwaXZvdEJvZHkpIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuZ3Jhdml0eVNjYWxlID0gMTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmFsbG93U2xlZXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YW5nZW50ID0gdGhpcy5nZXRUYW5nZW50QXRJbmRleChwYXRoLnBvaW50cywgc3RhcnRJbmRleCwgcGF0aERpcik7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IHRhbmdlbnQubXVsKDc1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYXJtQm9keSkge1xyXG4gICAgICAgICAgICBjaGFybUJvZHkuc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICBjaGFybUJvZHkuc3luY1JvdGF0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICBjaGFybUJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvcmRDaGFybXMucHVzaCh7XHJcbiAgICAgICAgICAgIHBpdm90LFxyXG4gICAgICAgICAgICBjaGFybSxcclxuICAgICAgICAgICAgc2V0dGxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0aWxsVGltZTogMCxcclxuICAgICAgICAgICAgc2lkZTogZHJvcEFuY2hvci5zaWRlLFxyXG4gICAgICAgICAgICBwYXRoU3RhcnRJbmRleDogc3RhcnRJbmRleCxcclxuICAgICAgICAgICAgcGF0aERpcixcclxuICAgICAgICAgICAgcGF0aERpc3RhbmNlOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBU4bqhbyBwaXZvdCAoxJFp4buDbSBuZW8gdHLDqm4gZMOieSkgKyBSZXZvbHV0ZUpvaW50OyBwaOG6p24gZMaw4bubaSBjaGFybSBsdW5nIGxheSB0aGVvIHBoeXNpY3MuICovXHJcbiAgICBwcml2YXRlIHNldHVwQ2hhcm1IYW5nUmlnKGNoYXJtOiBjYy5Ob2RlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKGNoYXJtLnBhcmVudCAmJiBjaGFybS5wYXJlbnQubmFtZSA9PT0gJ2NoYXJtUGl2b3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFybS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5nTG9jYWwgPSB0aGlzLmdldEhhbmdMb2NhbE9mZnNldChjaGFybSk7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBjaGFybS5wYXJlbnQ7XHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBsYXllci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG5cclxuICAgICAgICBjb25zdCBwaXZvdCA9IG5ldyBjYy5Ob2RlKCdjaGFybVBpdm90Jyk7XHJcbiAgICAgICAgcGl2b3QucGFyZW50ID0gbGF5ZXI7XHJcbiAgICAgICAgcGl2b3Quc2V0UG9zaXRpb24obGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpKTtcclxuXHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gcGl2b3Q7XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24oY2MudjMoLWhhbmdMb2NhbC54LCAtaGFuZ0xvY2FsLnksIDApKTtcclxuICAgICAgICBjaGFybS5hbmdsZSA9IDA7XHJcblxyXG4gICAgICAgIGxldCBwaXZvdEJvZHkgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXBpdm90Qm9keSkge1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkgPSBwaXZvdC5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGl2b3RCb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgcGl2b3RCb2R5LmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICAgICAgcGl2b3RCb2R5LmxpbmVhckRhbXBpbmcgPSAwLjIyO1xyXG4gICAgICAgIHBpdm90Qm9keS5hbmd1bGFyRGFtcGluZyA9IDE7XHJcbiAgICAgICAgcGl2b3RCb2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgIHBpdm90Qm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBwaXZvdENvbCA9IHBpdm90LmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIGlmICghcGl2b3RDb2wpIHtcclxuICAgICAgICAgICAgcGl2b3RDb2wgPSBwaXZvdC5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGl2b3RDb2wucmFkaXVzID0gdGhpcy5waXZvdENvbGxpZGVyUmFkaXVzO1xyXG4gICAgICAgIHBpdm90Q29sLmZyaWN0aW9uID0gMC4zO1xyXG4gICAgICAgIHBpdm90Q29sLnJlc3RpdHV0aW9uID0gMC4wNTtcclxuICAgICAgICBwaXZvdENvbC5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IGNoYXJtQm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghY2hhcm1Cb2R5KSB7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keSA9IGNoYXJtLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFybUJvZHkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmdyYXZpdHlTY2FsZSA9IDAuODU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmxpbmVhckRhbXBpbmcgPSAwLjI7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmFuZ3VsYXJEYW1waW5nID0gMC42NTtcclxuICAgICAgICBjaGFybUJvZHkuZml4ZWRSb3RhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGNoYXJtQm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZW5hYmxlQ2hhcm1QaHlzaWNzQ29sbGlkZXIoY2hhcm0pO1xyXG5cclxuICAgICAgICBsZXQgam9pbnQgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUmV2b2x1dGVKb2ludCk7XHJcbiAgICAgICAgaWYgKCFqb2ludCkge1xyXG4gICAgICAgICAgICBqb2ludCA9IHBpdm90LmFkZENvbXBvbmVudChjYy5SZXZvbHV0ZUpvaW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQm9keSA9IGNoYXJtQm9keTtcclxuICAgICAgICBqb2ludC5hbmNob3IgPSBjYy52MigwLCAwKTtcclxuICAgICAgICBqb2ludC5jb25uZWN0ZWRBbmNob3IgPSBoYW5nTG9jYWw7XHJcbiAgICAgICAgam9pbnQuY29sbGlkZUNvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gcGl2b3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb3JkQ2VudGVyTG9jYWwoKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCB8fCBwYXRoLnBvaW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGN4ID0gMDtcclxuICAgICAgICBsZXQgY3kgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5wb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3ggKz0gcGF0aC5wb2ludHNbaV0ueDtcclxuICAgICAgICAgICAgY3kgKz0gcGF0aC5wb2ludHNbaV0ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbiA9IHBhdGgucG9pbnRzLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gY2MudjIoY3ggLyBuLCBjeSAvIG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3V0d2FyZEZyb21DZW50ZXIocG9zOiBjYy5WZWMyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5nZXRDb3JkQ2VudGVyTG9jYWwoKTtcclxuICAgICAgICBjb25zdCBvdXR3YXJkID0gY2MudjIocG9zLnggLSBjZW50ZXIueCwgcG9zLnkgLSBjZW50ZXIueSk7XHJcbiAgICAgICAgaWYgKG91dHdhcmQubWFnU3FyKCkgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MigwLCAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dHdhcmQubm9ybWFsaXplU2VsZigpO1xyXG4gICAgICAgIHJldHVybiBvdXR3YXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd3JhcEFuZ2xlRGVnKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBhID0gYW5nbGU7XHJcbiAgICAgICAgd2hpbGUgKGEgPiAxODApIGEgLT0gMzYwO1xyXG4gICAgICAgIHdoaWxlIChhIDwgLTE4MCkgYSArPSAzNjA7XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybUJvZHlEaXIoaGFuZ0xvY2FsOiBjYy5WZWMyLCBhbmdsZURlZzogbnVtYmVyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxCYXNlID0gY2MudjIoLWhhbmdMb2NhbC54LCAtaGFuZ0xvY2FsLnkpO1xyXG4gICAgICAgIGNvbnN0IHJhZCA9IGFuZ2xlRGVnICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICBjb25zdCBkaXIgPSBjYy52MihcclxuICAgICAgICAgICAgbG9jYWxCYXNlLnggKiBjIC0gbG9jYWxCYXNlLnkgKiBzLFxyXG4gICAgICAgICAgICBsb2NhbEJhc2UueCAqIHMgKyBsb2NhbEJhc2UueSAqIGNcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChkaXIubWFnU3FyKCkgPCAwLjAwMDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKDAsIC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlyLm5vcm1hbGl6ZVNlbGYoKTtcclxuICAgICAgICByZXR1cm4gZGlyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYW5nbGVGb3JPdXR3YXJkSGFuZyhvdXR3YXJkOiBjYy5WZWMyLCBoYW5nTG9jYWw6IGNjLlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsQmFzZSA9IGNjLnYyKC1oYW5nTG9jYWwueCwgLWhhbmdMb2NhbC55KTtcclxuICAgICAgICBjb25zdCBiYXNlQW5nbGUgPSBNYXRoLmF0YW4yKGxvY2FsQmFzZS55LCBsb2NhbEJhc2UueCk7XHJcbiAgICAgICAgY29uc3Qgb3V0QW5nbGUgPSBNYXRoLmF0YW4yKG91dHdhcmQueSwgb3V0d2FyZC54KTtcclxuICAgICAgICByZXR1cm4gdGhpcy53cmFwQW5nbGVEZWcoKG91dEFuZ2xlIC0gYmFzZUFuZ2xlKSAqIDE4MCAvIE1hdGguUEkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3RyYWluQ2hhcm1IYW5nKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSwgZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gc3RhdGUuY2hhcm07XHJcbiAgICAgICAgY29uc3QgcGl2b3QgPSBzdGF0ZS5waXZvdDtcclxuICAgICAgICBpZiAoIWNoYXJtIHx8ICFwaXZvdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5nTG9jYWwgPSB0aGlzLmdldEhhbmdMb2NhbE9mZnNldChjaGFybSk7XHJcbiAgICAgICAgY29uc3Qgb3V0d2FyZCA9IHRoaXMuZ2V0T3V0d2FyZEZyb21DZW50ZXIoY2MudjIocGl2b3QueCwgcGl2b3QueSkpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEFuZ2xlID0gdGhpcy5hbmdsZUZvck91dHdhcmRIYW5nKG91dHdhcmQsIGhhbmdMb2NhbCk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG5cclxuICAgICAgICBsZXQgYW5nbGUgPSBjaGFybS5hbmdsZTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLndyYXBBbmdsZURlZyhhbmdsZSAtIHRhcmdldEFuZ2xlKTtcclxuICAgICAgICBjb25zdCBib2R5RGlyID0gdGhpcy5nZXRDaGFybUJvZHlEaXIoaGFuZ0xvY2FsLCBhbmdsZSk7XHJcbiAgICAgICAgY29uc3Qgb3V0d2FyZERvdCA9IGJvZHlEaXIueCAqIG91dHdhcmQueCArIGJvZHlEaXIueSAqIG91dHdhcmQueTtcclxuXHJcbiAgICAgICAgaWYgKG91dHdhcmREb3QgPCAwLjAyKSB7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gdGFyZ2V0QW5nbGU7XHJcbiAgICAgICAgICAgIGNoYXJtLmFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN5bmNSb3RhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2Zmc2V0ID4gdGhpcy5oYW5nU3dpbmdMaW1pdCkge1xyXG4gICAgICAgICAgICBhbmdsZSA9IHRhcmdldEFuZ2xlICsgdGhpcy5oYW5nU3dpbmdMaW1pdDtcclxuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA8IC10aGlzLmhhbmdTd2luZ0xpbWl0KSB7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gdGFyZ2V0QW5nbGUgLSB0aGlzLmhhbmdTd2luZ0xpbWl0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICBjb25zdCBwdWxsID0gdGhpcy53cmFwQW5nbGVEZWcodGFyZ2V0QW5nbGUgLSBhbmdsZSk7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ICs9IHB1bGwgKiB0aGlzLmhhbmdPdXR3YXJkU3RpZmZuZXNzICogZHQ7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhhbmdsZSAtIGNoYXJtLmFuZ2xlKSA+IDAuMDUpIHtcclxuICAgICAgICAgICAgY2hhcm0uYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ICo9IDAuMjU7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN5bmNSb3RhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEhhbmdMb2NhbE9mZnNldChjaGFybTogY2MuTm9kZSk6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjaGFybS5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpIGFzIGFueTtcclxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLmdldEhhbmdMb2NhbE9mZnNldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRIYW5nTG9jYWxPZmZzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDU1KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuYWJsZUNoYXJtUGh5c2ljc0NvbGxpZGVyKGNoYXJtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGlkZXIgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb2xsaWRlci5zZW5zb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29sbGlkZXIuZnJpY3Rpb24gPSAwLjI1O1xyXG4gICAgICAgICAgICBjb2xsaWRlci5yZXN0aXR1dGlvbiA9IDAuMDg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFuZ2VudEF0SW5kZXgocG9pbnRzOiBjYy5WZWMyW10sIGluZGV4OiBudW1iZXIsIGRpcjogbnVtYmVyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgbmV4dElkeCA9IHRoaXMud3JhcEluZGV4KGluZGV4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhID0gcG9pbnRzW2luZGV4XTtcclxuICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gYi55IC0gYS55O1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgfHwgMTtcclxuICAgICAgICByZXR1cm4gY2MudjIoZHggLyBsZW4sIGR5IC8gbGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5lYXJlc3RPblBhdGgocG9pbnRzOiBjYy5WZWMyW10sIHBvczogY2MuVmVjMik6IHsgaW5kZXg6IG51bWJlcjsgbmVhcmVzdDogY2MuVmVjMiB9IHtcclxuICAgICAgICBsZXQgYmVzdEluZGV4ID0gMDtcclxuICAgICAgICBsZXQgYmVzdERpc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY2MudjIocG9pbnRzW2ldLnggLSBwb3MueCwgcG9pbnRzW2ldLnkgLSBwb3MueSkubWFnU3FyKCk7XHJcbiAgICAgICAgICAgIGlmIChkIDwgYmVzdERpc3QpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0ID0gZDtcclxuICAgICAgICAgICAgICAgIGJlc3RJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGluZGV4OiBiZXN0SW5kZXgsIG5lYXJlc3Q6IHBvaW50c1tiZXN0SW5kZXhdIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kTmVhcmVzdFBhdGhJbmRleChwb2ludHM6IGNjLlZlYzJbXSwgcG9zOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgYmVzdCA9IDA7XHJcbiAgICAgICAgbGV0IGJlc3REaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY2MudjIocG9pbnRzW2ldLnggLSBwb3MueCwgcG9pbnRzW2ldLnkgLSBwb3MueSkubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkIDwgYmVzdERpc3QpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0ID0gZDtcclxuICAgICAgICAgICAgICAgIGJlc3QgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGlja1BhdGhEaXJlY3Rpb24ocG9pbnRzOiBjYy5WZWMyW10sIGVudHJ5SW5kZXg6IG51bWJlciwgc2lkZTogQ29yZFNpZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNjb3JlID0gKGRpcjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzID0gMDtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IGVudHJ5SW5kZXg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDA7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICAgICAgICAgIHMgKz0gLXAueSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIGlmIChzaWRlID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzICs9IHAueCA8IDAgPyAzIDogLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgKz0gcC54ID4gMCA/IDMgOiAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBzY29yZSgxKSA+PSBzY29yZSgtMSkgPyAxIDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQb3NlT25QYXRoKFxyXG4gICAgICAgIHBvaW50czogY2MuVmVjMltdLFxyXG4gICAgICAgIHN0YXJ0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBkaXI6IG51bWJlcixcclxuICAgICAgICBkaXN0YW5jZTogbnVtYmVyXHJcbiAgICApOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBhbmdsZTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGxldCBpZHggPSBzdGFydEluZGV4O1xyXG4gICAgICAgIGxldCByZW1haW4gPSBkaXN0YW5jZTtcclxuICAgICAgICBjb25zdCBtYXhTdGVwID0gcG9pbnRzLmxlbmd0aCArIDI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgbWF4U3RlcDsgc3RlcCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpZHggKyBkaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbbmV4dElkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcclxuICAgICAgICAgICAgY29uc3Qgc2VnTGVuID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICAgICAgaWYgKHNlZ0xlbiA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZW1haW4gPD0gc2VnTGVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcmVtYWluIC8gc2VnTGVuO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGEueCArIGR4ICogdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBhLnkgKyBkeSAqIHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KSAqIDE4MCAvIE1hdGguUEkgLSA5MDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHgsIHksIGFuZ2xlIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbWFpbiAtPSBzZWdMZW47XHJcbiAgICAgICAgICAgIGlkeCA9IG5leHRJZHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsYXN0ID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgcmV0dXJuIHsgeDogbGFzdC54LCB5OiBsYXN0LnksIGFuZ2xlOiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3cmFwSW5kZXgoaW5kZXg6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiBsZW5ndGggKyBpbmRleDtcclxuICAgICAgICBpZiAoaW5kZXggPj0gbGVuZ3RoKSByZXR1cm4gaW5kZXggLSBsZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZTogQ29yZENoYXJtU3RhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIXBhdGgpIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBwYXRoLnRvdGFsTGVuZ3RoICogMC41MjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNoYXJtU2xpZGUoc3RhdGU6IENvcmRDaGFybVN0YXRlLCBkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHN0YXRlLnBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIWJvZHkgfHwgIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgY29uc3Qgb25QYXRoID0gdGhpcy5nZXROZWFyZXN0T25QYXRoKHBhdGgucG9pbnRzLCBwb3MpO1xyXG4gICAgICAgIGNvbnN0IHRhbmdlbnQgPSB0aGlzLmdldFRhbmdlbnRBdEluZGV4KHBhdGgucG9pbnRzLCBvblBhdGguaW5kZXgsIHN0YXRlLnBhdGhEaXIpO1xyXG5cclxuICAgICAgICBzdGF0ZS5wYXRoRGlzdGFuY2UgPSB0aGlzLmdldERpc3RhbmNlQWxvbmdQYXRoKFxyXG4gICAgICAgICAgICBwYXRoLnBvaW50cyxcclxuICAgICAgICAgICAgc3RhdGUucGF0aFN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgIHN0YXRlLnBhdGhEaXIsXHJcbiAgICAgICAgICAgIHBvc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuc2V0dGxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhYID0gb25QYXRoLm5lYXJlc3QueCAtIHBvcy54O1xyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhZID0gb25QYXRoLm5lYXJlc3QueSAtIHBvcy55O1xyXG4gICAgICAgICAgICBjb25zdCB0eCA9IHRhbmdlbnQueDtcclxuICAgICAgICAgICAgY29uc3QgdHkgPSB0YW5nZW50Lnk7XHJcbiAgICAgICAgICAgIGNvbnN0IG54ID0gLXR5O1xyXG4gICAgICAgICAgICBjb25zdCBueSA9IHR4O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmVsID0gYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgY29uc3QgdlRhbmdlbnQgPSB2ZWwueCAqIHR4ICsgdmVsLnkgKiB0eTtcclxuICAgICAgICAgICAgY29uc3Qgdk5vcm1hbCA9IHZlbC54ICogbnggKyB2ZWwueSAqIG55O1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXROb3JtYWwgPSB0b1BhdGhYICogbnggKyB0b1BhdGhZICogbnk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV3VlRhbmdlbnQgPSB2VGFuZ2VudCArIHRoaXMuc2xpZGVHcmF2aXR5ICogZHQ7XHJcbiAgICAgICAgICAgIGxldCBuZXdWTm9ybWFsID0gdk5vcm1hbFxyXG4gICAgICAgICAgICAgICAgKyBvZmZzZXROb3JtYWwgKiB0aGlzLnBhdGhQdWxsU3RyZW5ndGggKiBkdFxyXG4gICAgICAgICAgICAgICAgLSB2Tm9ybWFsICogdGhpcy5wYXRoUHVsbERhbXBpbmcgKiBkdDtcclxuXHJcbiAgICAgICAgICAgIGxldCB2eCA9IHR4ICogbmV3VlRhbmdlbnQgKyBueCAqIG5ld1ZOb3JtYWw7XHJcbiAgICAgICAgICAgIGxldCB2eSA9IHR5ICogbmV3VlRhbmdlbnQgKyBueSAqIG5ld1ZOb3JtYWw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IE1hdGguc3FydCh2eCAqIHZ4ICsgdnkgKiB2eSk7XHJcbiAgICAgICAgICAgIGlmIChzcGVlZCA+IHRoaXMubWF4U2xpZGVTcGVlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLm1heFNsaWRlU3BlZWQgLyBzcGVlZDtcclxuICAgICAgICAgICAgICAgIHZ4ICo9IHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgdnkgKj0gc2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZ4LCB2eSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucGF0aERpc3RhbmNlID49IHRoaXMuZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZSkgLSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXR0bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBib2R5LmxpbmVhclZlbG9jaXR5Lm1hZygpO1xyXG4gICAgICAgIGNvbnN0IG1pblNsaWRlID0gTWF0aC5taW4oMjQsIHRoaXMuZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZSkgKiAwLjEyKTtcclxuICAgICAgICBpZiAoc3BlZWQgPCB0aGlzLnNldHRsZVNwZWVkICYmIHN0YXRlLnBhdGhEaXN0YW5jZSA+PSBtaW5TbGlkZSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdGlsbFRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zdGlsbFRpbWUgPj0gMC4zNSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0dGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdGlsbFRpbWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLnNldHRsZWQpIHtcclxuICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhckRhbXBpbmcgPSAxLjg7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhckRhbXBpbmcgPSAxLjI7XHJcbiAgICAgICAgICAgIGJvZHkuYWxsb3dTbGVlcCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhYID0gb25QYXRoLm5lYXJlc3QueCAtIHBvcy54O1xyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhZID0gb25QYXRoLm5lYXJlc3QueSAtIHBvcy55O1xyXG4gICAgICAgICAgICBjb25zdCBob2xkRGFtcCA9IHRoaXMucGF0aFB1bGxEYW1waW5nICogMS41O1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5LnggKyB0b1BhdGhYICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHQgKiAwLjM1IC0gYm9keS5saW5lYXJWZWxvY2l0eS54ICogaG9sZERhbXAgKiBkdCxcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkueSArIHRvUGF0aFkgKiB0aGlzLnBhdGhQdWxsU3RyZW5ndGggKiBkdCAqIDAuMzUgLSBib2R5LmxpbmVhclZlbG9jaXR5LnkgKiBob2xkRGFtcCAqIGR0XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBNYXRoLnNxcnQodG9QYXRoWCAqIHRvUGF0aFggKyB0b1BhdGhZICogdG9QYXRoWSk7XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAxLjUgJiYgYm9keS5saW5lYXJWZWxvY2l0eS5tYWcoKSA8IDgpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnBpdm90LnNldFBvc2l0aW9uKGNjLnYzKG9uUGF0aC5uZWFyZXN0LngsIG9uUGF0aC5uZWFyZXN0LnksIDApKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGlzdGFuY2VBbG9uZ1BhdGgoXHJcbiAgICAgICAgcG9pbnRzOiBjYy5WZWMyW10sXHJcbiAgICAgICAgc3RhcnRJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGRpcjogbnVtYmVyLFxyXG4gICAgICAgIHBvczogY2MuVmVjMlxyXG4gICAgKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBuZWFyZXN0ID0gdGhpcy5nZXROZWFyZXN0T25QYXRoKHBvaW50cywgcG9zKTtcclxuICAgICAgICBsZXQgZGlzdCA9IDA7XHJcbiAgICAgICAgbGV0IGlkeCA9IHN0YXJ0SW5kZXg7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmVhcmVzdC5pbmRleDtcclxuICAgICAgICBsZXQgZ3VhcmQgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoaWR4ICE9PSB0YXJnZXQgJiYgZ3VhcmQgPCBwb2ludHMubGVuZ3RoICsgMSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgICAgICBkaXN0ICs9IGNjLnYyKGIueCAtIGEueCwgYi55IC0gYS55KS5tYWcoKTtcclxuICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICAgICAgZ3VhcmQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlZ0EgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICBkaXN0ICs9IGNjLnYyKHBvcy54IC0gc2VnQS54LCBwb3MueSAtIHNlZ0EueSkubWFnKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBbmdsZUluTm9kZVNwYWNlKG5vZGU6IGNjLk5vZGUsIHJvb3Q6IGNjLk5vZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBhbmdsZSA9IG5vZGUuYW5nbGU7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSByb290KSB7XHJcbiAgICAgICAgICAgIGFuZ2xlICs9IHBhcmVudC5hbmdsZTtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2lkZU1heFNsaWRlRGlzdGFuY2UoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gcGF0aC50b3RhbExlbmd0aCAqIDAuNTI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtZWFzdXJlUGF0aERpc3RhbmNlRnJvbUVudHJ5KHNpZGU6IENvcmRTaWRlLCBwb3M6IGNjLlZlYzIsIHBhdGhEaXI/OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgY29uc3QgZW50cnkgPSBzaWRlID09PSAnbGVmdCcgPyBhbmNob3JzLmxlZnQgOiBhbmNob3JzLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVudHJ5SW5kZXggPSB0aGlzLmZpbmROZWFyZXN0UGF0aEluZGV4KHBhdGgucG9pbnRzLCBlbnRyeSk7XHJcbiAgICAgICAgY29uc3QgZGlyID0gcGF0aERpciAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gcGF0aERpclxyXG4gICAgICAgICAgICA6IHRoaXMucGlja1BhdGhEaXJlY3Rpb24ocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHNpZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXN0YW5jZUFsb25nUGF0aChwYXRoLnBvaW50cywgZW50cnlJbmRleCwgZGlyLCBwb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1QYXRoRGlzdGFuY2Uoc3RhdGU6IENvcmRDaGFybVN0YXRlKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoIXN0YXRlLnBpdm90KSByZXR1cm4gc3RhdGUucGF0aERpc3RhbmNlO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lYXN1cmVQYXRoRGlzdGFuY2VGcm9tRW50cnkoc3RhdGUuc2lkZSwgcG9zLCBzdGF0ZS5wYXRoRGlyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtc09uU2lkZShzaWRlOiBDb3JkU2lkZSk6IENvcmRDaGFybVN0YXRlW10ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogQ29yZENoYXJtU3RhdGVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvcmRDaGFybXNbaV0uc2lkZSA9PT0gc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jb3JkQ2hhcm1zW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWluUGF0aERpc3RhbmNlT25TaWRlKHNpZGU6IENvcmRTaWRlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBvblNpZGUgPSB0aGlzLmdldENoYXJtc09uU2lkZShzaWRlKTtcclxuICAgICAgICBpZiAob25TaWRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XHJcblxyXG4gICAgICAgIGxldCBtaW5EaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9uU2lkZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdGhpcy5nZXRDaGFybVBhdGhEaXN0YW5jZShvblNpZGVbaV0pO1xyXG4gICAgICAgICAgICBpZiAoZCA8IG1pbkRpc3QpIHtcclxuICAgICAgICAgICAgICAgIG1pbkRpc3QgPSBkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtaW5EaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FuRHJvcE9uU2lkZShzaWRlOiBDb3JkU2lkZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IG9uU2lkZSA9IHRoaXMuZ2V0Q2hhcm1zT25TaWRlKHNpZGUpO1xyXG4gICAgICAgIGlmIChvblNpZGUubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWluUGF0aERpc3RhbmNlT25TaWRlKHNpZGUpID49IHRoaXMuY2hhcm1TbG90U3BhY2luZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBpY2tBdmFpbGFibGVTaWRlKFxyXG4gICAgICAgIG5lYXJMZWZ0OiBib29sZWFuLFxyXG4gICAgICAgIG5lYXJSaWdodDogYm9vbGVhbixcclxuICAgICAgICBkaXN0TGVmdDogbnVtYmVyLFxyXG4gICAgICAgIGRpc3RSaWdodDogbnVtYmVyLFxyXG4gICAgICAgIHByZWZlckxlZnQ/OiBib29sZWFuXHJcbiAgICApOiBDb3JkU2lkZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXM6IHsgc2lkZTogQ29yZFNpZGU7IGRpc3Q6IG51bWJlciB9W10gPSBbXTtcclxuICAgICAgICBpZiAobmVhckxlZnQpIGNhbmRpZGF0ZXMucHVzaCh7IHNpZGU6ICdsZWZ0JywgZGlzdDogZGlzdExlZnQgfSk7XHJcbiAgICAgICAgaWYgKG5lYXJSaWdodCkgY2FuZGlkYXRlcy5wdXNoKHsgc2lkZTogJ3JpZ2h0JywgZGlzdDogZGlzdFJpZ2h0IH0pO1xyXG5cclxuICAgICAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjYW5kaWRhdGVzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByZWZlckxlZnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYVByZWYgPSAoYS5zaWRlID09PSAnbGVmdCcpID09PSBwcmVmZXJMZWZ0ID8gMCA6IDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiUHJlZiA9IChiLnNpZGUgPT09ICdsZWZ0JykgPT09IHByZWZlckxlZnQgPyAwIDogMTtcclxuICAgICAgICAgICAgICAgIGlmIChhUHJlZiAhPT0gYlByZWYpIHJldHVybiBhUHJlZiAtIGJQcmVmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhLmRpc3QgLSBiLmRpc3Q7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5Ecm9wT25TaWRlKGNhbmRpZGF0ZXNbaV0uc2lkZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzW2ldLnNpZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlRHJvcEFuY2hvcih3b3JsZFBvczogY2MuVmVjMiwgcHJlZmVycmVkU2lkZTogQ29yZFNpZGUgPSBudWxsKTogRHJvcEFuY2hvciB8IG51bGwge1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVDb3JkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghYW5jaG9ycykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvY2FsID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICBjb25zdCBsZWZ0UG9zID0gYW5jaG9ycy5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0UG9zID0gYW5jaG9ycy5yaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdExlZnQgPSBjYy52Mihsb2NhbC54IC0gbGVmdFBvcy54LCBsb2NhbC55IC0gbGVmdFBvcy55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBkaXN0UmlnaHQgPSBjYy52Mihsb2NhbC54IC0gcmlnaHRQb3MueCwgbG9jYWwueSAtIHJpZ2h0UG9zLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IG5lYXJMZWZ0ID0gZGlzdExlZnQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuICAgICAgICBjb25zdCBuZWFyUmlnaHQgPSBkaXN0UmlnaHQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuICAgICAgICBjb25zdCBwcmVmZXJMZWZ0ID0gbG9jYWwueCA8IChsZWZ0UG9zLnggKyByaWdodFBvcy54KSAqIDAuNTtcclxuICAgICAgICBjb25zdCBwcmVmZXJTaWRlOiBDb3JkU2lkZSA9IHByZWZlckxlZnQgPyAnbGVmdCcgOiAncmlnaHQnO1xyXG5cclxuICAgICAgICBpZiAocHJlZmVycmVkU2lkZSAmJiB0aGlzLmNhbkRyb3BPblNpZGUocHJlZmVycmVkU2lkZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNpZGU6IHByZWZlcnJlZFNpZGUsXHJcbiAgICAgICAgICAgICAgICBjb3JkUG9zOiBwcmVmZXJyZWRTaWRlID09PSAnbGVmdCcgPyBsZWZ0UG9zIDogcmlnaHRQb3MsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJlZmVycmVkU2lkZSAmJiAhdGhpcy5jYW5Ecm9wT25TaWRlKHByZWZlcnJlZFNpZGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdDogQ29yZFNpZGUgPSBwcmVmZXJTaWRlO1xyXG4gICAgICAgICAgICBpZiAoYWx0ICE9PSBwcmVmZXJyZWRTaWRlICYmIHRoaXMuY2FuRHJvcE9uU2lkZShhbHQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGU6IGFsdCxcclxuICAgICAgICAgICAgICAgICAgICBjb3JkUG9zOiBhbHQgPT09ICdsZWZ0JyA/IGxlZnRQb3MgOiByaWdodFBvcyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZWFyTGVmdCB8fCBuZWFyUmlnaHQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZSA9IHRoaXMucGlja0F2YWlsYWJsZVNpZGUobmVhckxlZnQsIG5lYXJSaWdodCwgZGlzdExlZnQsIGRpc3RSaWdodCk7XHJcbiAgICAgICAgICAgIGlmIChzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29yZFBvczogc2lkZSA9PT0gJ2xlZnQnID8gbGVmdFBvcyA6IHJpZ2h0UG9zLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdG9wWSA9IE1hdGgubWF4KGxlZnRQb3MueSwgcmlnaHRQb3MueSkgLSAyMDtcclxuICAgICAgICBjb25zdCBtaW5YID0gTWF0aC5taW4obGVmdFBvcy54LCByaWdodFBvcy54KSAtIDMwO1xyXG4gICAgICAgIGNvbnN0IG1heFggPSBNYXRoLm1heChsZWZ0UG9zLngsIHJpZ2h0UG9zLngpICsgMzA7XHJcbiAgICAgICAgY29uc3QgaW5Ub3Bab25lID0gbG9jYWwueSA+PSB0b3BZIC0gdGhpcy5lbnRyeURldGVjdFJhZGl1c1xyXG4gICAgICAgICAgICAmJiBsb2NhbC54ID49IG1pblhcclxuICAgICAgICAgICAgJiYgbG9jYWwueCA8PSBtYXhYO1xyXG5cclxuICAgICAgICBpZiAoIWluVG9wWm9uZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHNpZGUgPSB0aGlzLnBpY2tBdmFpbGFibGVTaWRlKHRydWUsIHRydWUsIGRpc3RMZWZ0LCBkaXN0UmlnaHQsIHByZWZlckxlZnQpO1xyXG4gICAgICAgIGlmICghc2lkZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgIGNvcmRQb3M6IHNpZGUgPT09ICdsZWZ0JyA/IGxlZnRQb3MgOiByaWdodFBvcyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hTbmFwUG9zZShzaWRlOiBDb3JkU2lkZSk6IHsgcG9zOiBjYy5WZWMzOyBhbmdsZTogbnVtYmVyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2lkZSA9PT0gJ2xlZnQnID8gY2hpbGRyZW4ubGVmdCA6IGNoaWxkcmVuLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY29uc3QgbG9jYWwgPSBtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb3M6IGNjLnYzKGxvY2FsLngsIGxvY2FsLnksIDApLFxyXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5nZXRBbmdsZUluTm9kZVNwYWNlKHRhcmdldCwgbWFpbiksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERyYWdTbmFwUG9zZShtYWluUG9zOiBjYy5WZWMzKTogeyBwb3M6IGNjLlZlYzM7IGFuZ2xlOiBudW1iZXI7IHNpZGU6IENvcmRTaWRlIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzIHx8ICF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRNYWluID0gbWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihhbmNob3JzLmxlZnQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCByaWdodE1haW4gPSBtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvV29ybGRTcGFjZUFSKGFuY2hvcnMucmlnaHQpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdExlZnQgPSBjYy52MihtYWluUG9zLnggLSBsZWZ0TWFpbi54LCBtYWluUG9zLnkgLSBsZWZ0TWFpbi55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBkaXN0UmlnaHQgPSBjYy52MihtYWluUG9zLnggLSByaWdodE1haW4ueCwgbWFpblBvcy55IC0gcmlnaHRNYWluLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IG5lYXJMZWZ0ID0gZGlzdExlZnQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuICAgICAgICBjb25zdCBuZWFyUmlnaHQgPSBkaXN0UmlnaHQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuXHJcbiAgICAgICAgbGV0IHNpZGU6IENvcmRTaWRlID0gbnVsbDtcclxuICAgICAgICBpZiAobmVhckxlZnQgfHwgbmVhclJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHNpZGUgPSB0aGlzLnBpY2tBdmFpbGFibGVTaWRlKG5lYXJMZWZ0LCBuZWFyUmlnaHQsIGRpc3RMZWZ0LCBkaXN0UmlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcmRMb2NhbCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgICAgIG1haW4uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKG1haW5Qb3MueCwgbWFpblBvcy55KSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgbGVmdFBvcyA9IGFuY2hvcnMubGVmdDtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHRQb3MgPSBhbmNob3JzLnJpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCB0b3BZID0gTWF0aC5tYXgobGVmdFBvcy55LCByaWdodFBvcy55KSAtIDIwO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5YID0gTWF0aC5taW4obGVmdFBvcy54LCByaWdodFBvcy54KSAtIDMwO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhYID0gTWF0aC5tYXgobGVmdFBvcy54LCByaWdodFBvcy54KSArIDMwO1xyXG4gICAgICAgICAgICBjb25zdCBpblRvcFpvbmUgPSBjb3JkTG9jYWwueSA+PSB0b3BZIC0gdGhpcy5lbnRyeURldGVjdFJhZGl1c1xyXG4gICAgICAgICAgICAgICAgJiYgY29yZExvY2FsLnggPj0gbWluWFxyXG4gICAgICAgICAgICAgICAgJiYgY29yZExvY2FsLnggPD0gbWF4WDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpblRvcFpvbmUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZWZlckxlZnQgPSBjb3JkTG9jYWwueCA8IChsZWZ0UG9zLnggKyByaWdodFBvcy54KSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIHNpZGUgPSB0aGlzLnBpY2tBdmFpbGFibGVTaWRlKHRydWUsIHRydWUsIGRpc3RMZWZ0LCBkaXN0UmlnaHQsIHByZWZlckxlZnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNpZGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBzbmFwID0gdGhpcy5nZXRMb2NhbEJveFNuYXBQb3NlKHNpZGUpO1xyXG4gICAgICAgIGlmIChzbmFwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHBvczogc25hcC5wb3MsIGFuZ2xlOiBzbmFwLmFuZ2xlLCBzaWRlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTogeyBsZWZ0OiBjYy5Ob2RlOyByaWdodDogY2MuTm9kZSB9IHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsQm94IHx8IHRoaXMubG9jYWxCb3guY2hpbGRyZW5Db3VudCA8IDIpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBsZWZ0QnlOYW1lID0gdGhpcy5sb2NhbEJveC5nZXRDaGlsZEJ5TmFtZSgnbGVmdCcpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0QnlOYW1lID0gdGhpcy5sb2NhbEJveC5nZXRDaGlsZEJ5TmFtZSgncmlnaHQnKTtcclxuICAgICAgICBpZiAobGVmdEJ5TmFtZSAmJiByaWdodEJ5TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBsZWZ0OiBsZWZ0QnlOYW1lLCByaWdodDogcmlnaHRCeU5hbWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoaWxkQSA9IHRoaXMubG9jYWxCb3guY2hpbGRyZW5bMF07XHJcbiAgICAgICAgY29uc3QgY2hpbGRCID0gdGhpcy5sb2NhbEJveC5jaGlsZHJlblsxXTtcclxuICAgICAgICByZXR1cm4gY2hpbGRBLnggPD0gY2hpbGRCLnhcclxuICAgICAgICAgICAgPyB7IGxlZnQ6IGNoaWxkQSwgcmlnaHQ6IGNoaWxkQiB9XHJcbiAgICAgICAgICAgIDogeyBsZWZ0OiBjaGlsZEIsIHJpZ2h0OiBjaGlsZEEgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExvY2FsQm94SGFuZ0FuZ2xlKHNpZGU6IENvcmRTaWRlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gc2lkZSA9PT0gJ2xlZnQnID8gY2hpbGRyZW4ubGVmdC5hbmdsZSA6IGNoaWxkcmVuLnJpZ2h0LmFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hBbmNob3JQb3NpdGlvbnMoKTogeyBsZWZ0OiBjYy5WZWMyOyByaWdodDogY2MuVmVjMiB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldExvY2FsQm94U2lkZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCAhdGhpcy5hY3RpdmVDb3JkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zTGVmdCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgY2hpbGRyZW4ubGVmdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBwb3NSaWdodCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgY2hpbGRyZW4ucmlnaHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHsgbGVmdDogcG9zTGVmdCwgcmlnaHQ6IHBvc1JpZ2h0IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk6IHsgbGVmdDogY2MuVmVjMjsgcmlnaHQ6IGNjLlZlYzIgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsQm94QW5jaG9ycyA9IHRoaXMuZ2V0TG9jYWxCb3hBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAobG9jYWxCb3hBbmNob3JzKSByZXR1cm4gbG9jYWxCb3hBbmNob3JzO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubGVmdEFuY2hvciB8fCAhdGhpcy5yaWdodEFuY2hvcikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogY2MudjIodGhpcy5sZWZ0QW5jaG9yLngsIHRoaXMubGVmdEFuY2hvci55KSxcclxuICAgICAgICAgICAgcmlnaHQ6IGNjLnYyKHRoaXMucmlnaHRBbmNob3IueCwgdGhpcy5yaWdodEFuY2hvci55KSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RHJvcEFuY2hvckZvclNpZGUoc2lkZTogQ29yZFNpZGUpOiBEcm9wQW5jaG9yIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblNpZGUoc2lkZSkpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzaWRlLFxyXG4gICAgICAgICAgICBjb3JkUG9zOiBzaWRlID09PSAnbGVmdCcgPyBhbmNob3JzLmxlZnQgOiBhbmNob3JzLnJpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQbGF0ZUNoYXJtQXQoc2NyZWVuUG9zOiBjYy5WZWMyKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMucGxhdGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5wbGF0ZS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5hY3RpdmUgfHwgIWNoaWxkLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NoYXJtT25Db3JkKGNoaWxkKSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gY2hpbGQuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XHJcbiAgICAgICAgICAgIGlmIChyZWN0LmNvbnRhaW5zKHNjcmVlblBvcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQ2hhcm1PbkNvcmQoY2hhcm06IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY29yZENoYXJtc1tpXTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmNoYXJtID09PSBjaGFybSB8fCBzdGF0ZS5waXZvdCA9PT0gY2hhcm0pIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoY2hhcm0ucGFyZW50ID09PSBzdGF0ZS5waXZvdCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1haW5Mb2NhbFBvcyhzY3JlZW5Qb3M6IGNjLlZlYzIpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNYWluTm9kZSgpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHNjcmVlblBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNYWluTm9kZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICB3aGlsZSAobm9kZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50Lm5hbWUgPT09ICdtYWluJyB8fCBub2RlLnBhcmVudC5uYW1lID09PSAnQ2FudmFzJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUucGFyZW50Lm5hbWUgPT09ICdtYWluJyA/IG5vZGUucGFyZW50IDogbm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLkNvcmRSb3VuZExpc3QucGFyZW50IHx8IHRoaXMubm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERlZmF1bHRCcmFjZWxldFJlZigpOiBjYy5Ob2RlIHtcclxuICAgICAgICBjb25zdCBjb3JkSWQgPSBnbG9iYWxUaGlzLmlkU3RyaW5nIHx8IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkLmxlbmd0aCA+IGNvcmRJZCAmJiB0aGlzLmRlZmF1bHRCcmFjZWxldEJ5Q29yZFtjb3JkSWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmFjZWxldEJ5Q29yZFtjb3JkSWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0QnJhY2VsZXRSZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybUl0ZW1Db21wKGNoYXJtOiBjYy5Ob2RlKTogYW55IHtcclxuICAgICAgICBjb25zdCBpdGVtID0gY2hhcm0uZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKTtcclxuICAgICAgICBpZiAoaXRlbSkgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBzID0gY2hhcm0uZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYyA9IGNvbXBzW2ldIGFzIGFueTtcclxuICAgICAgICAgICAgaWYgKGMgJiYgdHlwZW9mIGMudGFnID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYy5sb2FkSU1HID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluZmVyQ29yZElkRnJvbVJlZihyZWY6IGNjLk5vZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGNvcmQgPSB0aGlzLmdldFJlZkNvcmROb2RlKHJlZik7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvcmQubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGNvbG9ySWRzOiB7IGtleTogc3RyaW5nOyBpZDogbnVtYmVyIH1bXSA9IFtcclxuICAgICAgICAgICAgeyBrZXk6ICdibGFjaycsIGlkOiAwIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnYmx1ZScsIGlkOiAxIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnZ3JlZW4nLCBpZDogMiB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ3BpbmsnLCBpZDogMyB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ3B1cnBsZScsIGlkOiA0IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAneWVsbG93JywgaWQ6IDUgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICd3aGl0ZScsIGlkOiA2IH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ySWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lLmluZGV4T2YoY29sb3JJZHNbaV0ua2V5KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JJZHNbaV0uaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvcmRJZCA+PSAwID8gdGhpcy5kZWZhdWx0Q29yZElkIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWREZWZhdWx0TWV0YShyZWY6IGNjLk5vZGUpOiB7IGNvcmRJZDogbnVtYmVyOyBrZXljaGFpbkluZGV4OiBudW1iZXIgfSB7XHJcbiAgICAgICAgY29uc3QgbWV0YSA9IHJlZiAmJiByZWYuZ2V0Q29tcG9uZW50KCdCcmFjZWxldERlZmF1bHRNZXRhJykgYXMgYW55O1xyXG4gICAgICAgIGlmIChtZXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjb3JkSWQ6IG1ldGEuY29yZElkLFxyXG4gICAgICAgICAgICAgICAga2V5Y2hhaW5JbmRleDogbWV0YS5rZXljaGFpbkluZGV4LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdENvcmRJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjb3JkSWQ6IHRoaXMuZGVmYXVsdENvcmRJZCxcclxuICAgICAgICAgICAgICAgIGtleWNoYWluSW5kZXg6IHRoaXMuZGVmYXVsdEtleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3JkSWQ6IHRoaXMuaW5mZXJDb3JkSWRGcm9tUmVmKHJlZiksXHJcbiAgICAgICAgICAgIGtleWNoYWluSW5kZXg6IHRoaXMuZGVmYXVsdEtleWNoYWluSW5kZXgsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhY2hlRGVmYXVsdE1ldGFPbmx5KCkge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZ2V0RGVmYXVsdEJyYWNlbGV0UmVmRm9yQ2FjaGUoKTtcclxuICAgICAgICBpZiAoIXJlZikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5yZWFkRGVmYXVsdE1ldGEocmVmKTtcclxuICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQgPSBtZXRhLmNvcmRJZDtcclxuICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRLZXljaGFpbkluZGV4ID0gbWV0YS5rZXljaGFpbkluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FjaGVEZWZhdWx0Q29uZmlnKGFjdGl2ZUNvcmQ/OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpO1xyXG4gICAgICAgIGlmICghcmVmKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBDaMawYSBnw6FuIGRlZmF1bHRCcmFjZWxldFJlZiDigJQga2jDtG5nIHRo4buDIHNvIHPDoW5oIHbDsm5nIG3huqt1LicpO1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkID0gdGhpcy5kZWZhdWx0Q29yZElkID49IDAgPyB0aGlzLmRlZmF1bHRDb3JkSWQgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRLZXljaGFpbkluZGV4ID0gdGhpcy5kZWZhdWx0S2V5Y2hhaW5JbmRleDtcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q29uZmlnQ2FjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLnJlYWREZWZhdWx0TWV0YShyZWYpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdENvcmRJZCA9IG1ldGEuY29yZElkO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXggPSBtZXRhLmtleWNoYWluSW5kZXg7XHJcbiAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0ID0gdGhpcy5idWlsZERlZmF1bHRMYXlvdXRGcm9tUmVmKHJlZiwgYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q29uZmlnQ2FjaGVkID0gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0Lmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIGNjLmxvZygnW0NvcmRSb3VuZEdhbWVdIERlZmF1bHQgY29uZmlnOiBjb3JkSWQ9JyArIHRoaXMuY2FjaGVkRGVmYXVsdENvcmRJZFxyXG4gICAgICAgICAgICArICcgKHBsYXllcj0nICsgKGdsb2JhbFRoaXMuaWRTdHJpbmcgfHwgMCkgKyAnKSdcclxuICAgICAgICAgICAgKyAnIGtleWNoYWluPScgKyB0aGlzLmNhY2hlZERlZmF1bHRLZXljaGFpbkluZGV4XHJcbiAgICAgICAgICAgICsgJyBjaGFybXM9JyArIHRoaXMuY2FjaGVkRGVmYXVsdExheW91dC5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBMdcO0biB0cuG6oyByZWYgbeG6q3UgY+G7kSDEkeG7i25oIOKAlCBraMO0bmcgcGjhu6UgdGh14buZYyBkw6J5IG5nxrDhu51pIGNoxqFpIMSRYW5nIGNo4buNbi4gKi9cclxuICAgIHByaXZhdGUgZ2V0RGVmYXVsdEJyYWNlbGV0UmVmRm9yQ2FjaGUoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEJyYWNlbGV0UmVmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmFjZWxldFJlZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlZmF1bHRCcmFjZWxldEJ5Q29yZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0QnJhY2VsZXRCeUNvcmRbaV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmFjZWxldEJ5Q29yZFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZhdWx0Q29yZElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRGVmYXVsdENvcmRJZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZhdWx0S2V5Y2hhaW5JbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZERlZmF1bHRLZXljaGFpbkluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RTY29yZUJyZWFrZG93bigpOiBNYXRjaFNjb3JlQnJlYWtkb3duIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0U2NvcmVCcmVha2Rvd247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZWZDb3JkTm9kZShyZWY6IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAocmVmLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpKSByZXR1cm4gcmVmO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVmLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlZi5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpKSByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZWZDb3JkQW5jaG9ycyhyZWZDb3JkOiBjYy5Ob2RlKTogeyBsZWZ0OiBjYy5WZWMyOyByaWdodDogY2MuVmVjMiB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHJlZkNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ2xlZnQnKTtcclxuICAgICAgICBjb25zdCByaWdodCA9IHJlZkNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgaWYgKCFsZWZ0IHx8ICFyaWdodCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogY2MudjIobGVmdC54LCBsZWZ0LnkpLFxyXG4gICAgICAgICAgICByaWdodDogY2MudjIocmlnaHQueCwgcmlnaHQueSksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBhdGhEYXRhRm9yQ29yZChjb3JkOiBjYy5Ob2RlKTogQ29yZFBhdGhEYXRhIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmNvcmRQYXRocy5nZXQoY29yZCk7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nKSByZXR1cm4gZXhpc3Rpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhd1BvaW50cyA9IHRoaXMuZ2V0UG9seWdvbkNvbGxpZGVyUG9pbnRzKGNvcmQpO1xyXG4gICAgICAgIGlmIChyYXdQb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbXBsZXMgPSB0aGlzLnNhbXBsZUFsb25nUGF0aChyYXdQb2ludHMsIHRoaXMucGF0aFNhbXBsZVNwYWNpbmcpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBvaW50czogc2FtcGxlcyxcclxuICAgICAgICAgICAgdG90YWxMZW5ndGg6IHRoaXMuY2FsY1BhdGhMZW5ndGgoc2FtcGxlcyksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvcmRBbmNob3JzKGNvcmQ6IGNjLk5vZGUpOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gY29yZC5nZXRDaGlsZEJ5TmFtZSgnbGVmdCcpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gY29yZC5nZXRDaGlsZEJ5TmFtZSgncmlnaHQnKTtcclxuICAgICAgICBpZiAoIWxlZnQgfHwgIXJpZ2h0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBjYy52MihsZWZ0LngsIGxlZnQueSksXHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYy52MihyaWdodC54LCByaWdodC55KSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGVtcGxhdGVDb3JkKGNvcmRJZD86IG51bWJlcik6IGNjLk5vZGUgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBpZCA9IGNvcmRJZCAhPT0gdW5kZWZpbmVkID8gY29yZElkIDogdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkO1xyXG4gICAgICAgIGlmICghdGhpcy5Db3JkUm91bmRMaXN0IHx8IGlkIDwgMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQ29yZFJvdW5kTGlzdC5jaGlsZHJlbltpZF0gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1lYXN1cmVQYXRoRGlzdGFuY2VPbkNvcmQoXHJcbiAgICAgICAgY29yZDogY2MuTm9kZSxcclxuICAgICAgICBwYXRoOiBDb3JkUGF0aERhdGEsXHJcbiAgICAgICAgYW5jaG9yczogeyBsZWZ0OiBjYy5WZWMyOyByaWdodDogY2MuVmVjMiB9LFxyXG4gICAgICAgIHNpZGU6IENvcmRTaWRlLFxyXG4gICAgICAgIHBvczogY2MuVmVjMlxyXG4gICAgKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBlbnRyeSA9IHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgZW50cnlJbmRleCA9IHRoaXMuZmluZE5lYXJlc3RQYXRoSW5kZXgocGF0aC5wb2ludHMsIGVudHJ5KTtcclxuICAgICAgICBjb25zdCBwYXRoRGlyID0gdGhpcy5waWNrUGF0aERpcmVjdGlvbihwYXRoLnBvaW50cywgZW50cnlJbmRleCwgc2lkZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzdGFuY2VBbG9uZ1BhdGgocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHBhdGhEaXIsIHBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZERlZmF1bHRMYXlvdXQoKTogQ2hhcm1TbG90RGF0YVtdIHtcclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZkZvckNhY2hlKCkgfHwgdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWYoKTtcclxuICAgICAgICBpZiAoIXJlZikgcmV0dXJuIFtdO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkRGVmYXVsdExheW91dEZyb21SZWYocmVmLCB0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGREZWZhdWx0TGF5b3V0RnJvbVJlZihyZWY6IGNjLk5vZGUsIGFjdGl2ZUNvcmQ/OiBjYy5Ob2RlKTogQ2hhcm1TbG90RGF0YVtdIHtcclxuICAgICAgICBpZiAoIXJlZikgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBjb25zdCByZWZDb3JkID0gdGhpcy5nZXRSZWZDb3JkTm9kZShyZWYpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlQ29yZCA9IGFjdGl2ZUNvcmQgfHwgdGhpcy5nZXRUZW1wbGF0ZUNvcmQoKTtcclxuICAgICAgICBpZiAoIXRlbXBsYXRlQ29yZCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKCdbQ29yZFJvdW5kR2FtZV0gS2jDtG5nIHTDrG0gdGjhuqV5IGTDonkgZ2FtZSDEkeG7gyDEkeG7jWMgbGF5b3V0IG3huqt1LicpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoRGF0YUZvckNvcmQodGVtcGxhdGVDb3JkKTtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9ycyh0ZW1wbGF0ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCB8fCAhYW5jaG9ycykge1xyXG4gICAgICAgICAgICBjYy53YXJuKCdbQ29yZFJvdW5kR2FtZV0gRMOieSBnYW1lIHRoaeG6v3UgUG9seWdvbkNvbGxpZGVyIGhv4bq3YyBhbmNob3IgbGVmdC9yaWdodC4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2hhcm1Sb290ID0gcmVmLmdldENoaWxkQnlOYW1lKCdjaGFybScpIHx8IHJlZjtcclxuICAgICAgICBjb25zdCBzbG90czogQ2hhcm1TbG90RGF0YVtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcm1Sb290LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFybSA9IGNoYXJtUm9vdC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0Q2hhcm1JdGVtQ29tcChjaGFybSk7XHJcbiAgICAgICAgICAgIGlmICghaXRlbSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NPbkNvcmQgPSByZWZDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICAgICAgY2hhcm0uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBzaWRlID0gdGhpcy5yZXNvbHZlU2lkZUZvclBvc2l0aW9uKHBvc09uQ29yZCwgYW5jaG9ycyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGhEaXN0YW5jZSA9IHRoaXMubWVhc3VyZVBhdGhEaXN0YW5jZU9uQ29yZChcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29yZCxcclxuICAgICAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgICAgICBhbmNob3JzLFxyXG4gICAgICAgICAgICAgICAgc2lkZSxcclxuICAgICAgICAgICAgICAgIHBvc09uQ29yZFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgc2xvdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0YWc6IGl0ZW0udGFnLFxyXG4gICAgICAgICAgICAgICAgY29sb3JJbmRleDogaXRlbS5jb2xvckluZGV4IHx8IDAsXHJcbiAgICAgICAgICAgICAgICBzaWRlLFxyXG4gICAgICAgICAgICAgICAgcGF0aERpc3RhbmNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNsb3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzb2x2ZVNpZGVGb3JQb3NpdGlvbihcclxuICAgICAgICBjb3JkTG9jYWw6IGNjLlZlYzIsXHJcbiAgICAgICAgYW5jaG9yczogeyBsZWZ0OiBjYy5WZWMyOyByaWdodDogY2MuVmVjMiB9XHJcbiAgICApOiBDb3JkU2lkZSB7XHJcbiAgICAgICAgY29uc3QgZGlzdExlZnQgPSBjYy52Mihjb3JkTG9jYWwueCAtIGFuY2hvcnMubGVmdC54LCBjb3JkTG9jYWwueSAtIGFuY2hvcnMubGVmdC55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBkaXN0UmlnaHQgPSBjYy52Mihjb3JkTG9jYWwueCAtIGFuY2hvcnMucmlnaHQueCwgY29yZExvY2FsLnkgLSBhbmNob3JzLnJpZ2h0LnkpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0TGVmdCA8PSBkaXN0UmlnaHQgPyAnbGVmdCcgOiAncmlnaHQnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRQbGF5ZXJMYXlvdXQoKTogQ2hhcm1TbG90RGF0YVtdIHtcclxuICAgICAgICBjb25zdCBzbG90czogQ2hhcm1TbG90RGF0YVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcmRDaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmNvcmRDaGFybXNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5jaGFybS5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpIGFzIGFueTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIHNsb3RzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGFnOiBpdGVtLnRhZyxcclxuICAgICAgICAgICAgICAgIGNvbG9ySW5kZXg6IGl0ZW0uY29sb3JJbmRleCB8fCAwLFxyXG4gICAgICAgICAgICAgICAgc2lkZTogc3RhdGUuc2lkZSxcclxuICAgICAgICAgICAgICAgIHBhdGhEaXN0YW5jZTogdGhpcy5nZXRDaGFybVBhdGhEaXN0YW5jZShzdGF0ZSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xvdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTbG90UG9zZShzbG90OiBDaGFybVNsb3REYXRhKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgYW5nbGU6IG51bWJlciB9IHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghcGF0aCB8fCAhYW5jaG9ycykge1xyXG4gICAgICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwLCBhbmdsZTogMCB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZW50cnkgPSBzbG90LnNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgZW50cnlJbmRleCA9IHRoaXMuZmluZE5lYXJlc3RQYXRoSW5kZXgocGF0aC5wb2ludHMsIGVudHJ5KTtcclxuICAgICAgICBjb25zdCBwYXRoRGlyID0gdGhpcy5waWNrUGF0aERpcmVjdGlvbihwYXRoLnBvaW50cywgZW50cnlJbmRleCwgc2xvdC5zaWRlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NlT25QYXRoKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBwYXRoRGlyLCBzbG90LnBhdGhEaXN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93RGVmYXVsdEJyYWNlbGV0UHJldmlldygpIHtcclxuICAgICAgICB0aGlzLmhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQubGVuZ3RoIHx8ICF0aGlzLmNoYXJtTGF5ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWYoKTtcclxuICAgICAgICBjb25zdCBjaGFybVJvb3QgPSByZWYgJiYgKHJlZi5nZXRDaGlsZEJ5TmFtZSgnY2hhcm0nKSB8fCByZWYpO1xyXG4gICAgICAgIGlmICghY2hhcm1Sb290KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSBuZXcgY2MuTm9kZSgnZGVmYXVsdEJyYWNlbGV0UHJldmlldycpO1xyXG4gICAgICAgIHByZXZpZXcucGFyZW50ID0gdGhpcy5jaGFybUxheWVyO1xyXG4gICAgICAgIHByZXZpZXcuc2V0U2libGluZ0luZGV4KDApO1xyXG5cclxuICAgICAgICBsZXQgc3JjSW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcm1Sb290LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzcmMgPSBjaGFybVJvb3QuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmICghc3JjLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoc3JjSW5kZXggPj0gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0Lmxlbmd0aCkgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzbG90ID0gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0W3NyY0luZGV4XTtcclxuICAgICAgICAgICAgc3JjSW5kZXgrKztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gY2MuaW5zdGFudGlhdGUoc3JjKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zZSA9IHRoaXMuZ2V0U2xvdFBvc2Uoc2xvdCk7XHJcbiAgICAgICAgICAgIGNsb25lLnBhcmVudCA9IHByZXZpZXc7XHJcbiAgICAgICAgICAgIGNsb25lLnNldFBvc2l0aW9uKGNjLnYzKHBvc2UueCwgcG9zZS55LCAwKSk7XHJcbiAgICAgICAgICAgIGNsb25lLmFuZ2xlID0gcG9zZS5hbmdsZTtcclxuICAgICAgICAgICAgY2xvbmUub3BhY2l0eSA9IDE1MDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBjbG9uZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIGJvZHkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsaWRlcnMgPSBjbG9uZS5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NDb2xsaWRlcik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sbGlkZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcnNbY10uZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Tm9kZSA9IHByZXZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlRGVmYXVsdEJyYWNlbGV0UHJldmlldygpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJldmlld05vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld05vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBTbyBzw6FuaCBjaGFybSAoMOKAkzEwMCUsIGNoxrBhIGfhu5NtIGTDonkgdsOgIGtleWNoYWluKS4gKi9cclxuICAgIGNvbXBhcmVDaGFybXNPbmx5KCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICA/IHRoaXMuY2FjaGVkRGVmYXVsdExheW91dFxyXG4gICAgICAgICAgICA6IHRoaXMuYnVpbGREZWZhdWx0TGF5b3V0KCk7XHJcblxyXG4gICAgICAgIGlmIChleHBlY3RlZC5sZW5ndGggPT09IDApIHJldHVybiAwO1xyXG5cclxuICAgICAgICBjb25zdCBhY3R1YWwgPSB0aGlzLmJ1aWxkUGxheWVyTGF5b3V0KCk7XHJcbiAgICAgICAgcmV0dXJuIGNhbGNDaGFybU1hdGNoUGVyY2VudChleHBlY3RlZCwgYWN0dWFsLCB0aGlzLm1hdGNoUG9zaXRpb25Ub2xlcmFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU28gc8OhbmggxJHhuqd5IMSR4bunOiBkw6J5ICgzMCUpICsgY2hhcm0gKDUwJSkgKyBrZXljaGFpbiAoMjAlKS5cclxuICAgICAqIEfhu41pIGtoaSDEkcOjIGPDsyBs4buxYSBjaOG7jW4ga2V5Y2hhaW4gY+G7p2EgbmfGsOG7nWkgY2jGoWkuXHJcbiAgICAgKi9cclxuICAgIGNvbXBhcmVGdWxsKHBsYXllcktleWNoYWluSW5kZXg6IG51bWJlcik6IE1hdGNoU2NvcmVCcmVha2Rvd24ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZ2V0RGVmYXVsdEJyYWNlbGV0UmVmRm9yQ2FjaGUoKTtcclxuICAgICAgICBpZiAocmVmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdExheW91dCA9IHRoaXMuYnVpbGREZWZhdWx0TGF5b3V0RnJvbVJlZihyZWYsIHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHRoaXMuY2FjaGVkRGVmYXVsdExheW91dDtcclxuICAgICAgICBjb25zdCBhY3R1YWwgPSB0aGlzLmJ1aWxkUGxheWVyTGF5b3V0KCk7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsQ29yZElkID0gZ2xvYmFsVGhpcy5pZFN0cmluZyB8fCAwO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3RTY29yZUJyZWFrZG93biA9IGNhbGNGdWxsU2NvcmUoXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdENvcmRJZCxcclxuICAgICAgICAgICAgYWN0dWFsQ29yZElkLFxyXG4gICAgICAgICAgICBleHBlY3RlZCxcclxuICAgICAgICAgICAgYWN0dWFsLFxyXG4gICAgICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRLZXljaGFpbkluZGV4LFxyXG4gICAgICAgICAgICBwbGF5ZXJLZXljaGFpbkluZGV4LFxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoUG9zaXRpb25Ub2xlcmFuY2VcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGFzdE1hdGNoUGVyY2VudCA9IHRoaXMubGFzdFNjb3JlQnJlYWtkb3duLnRvdGFsO1xyXG5cclxuICAgICAgICBjYy5sb2coJ1tDb3JkUm91bmRHYW1lXSBDb21wYXJlOiBleHBlY3RlZENvcmQ9JyArIHRoaXMuY2FjaGVkRGVmYXVsdENvcmRJZFxyXG4gICAgICAgICAgICArICcgcGxheWVyQ29yZD0nICsgYWN0dWFsQ29yZElkXHJcbiAgICAgICAgICAgICsgJyBleHBlY3RlZENoYXJtcz0nICsgZXhwZWN0ZWQubGVuZ3RoXHJcbiAgICAgICAgICAgICsgJyBwbGF5ZXJDaGFybXM9JyArIGFjdHVhbC5sZW5ndGhcclxuICAgICAgICAgICAgKyAnIGtleWNoYWluPScgKyBwbGF5ZXJLZXljaGFpbkluZGV4XHJcbiAgICAgICAgICAgICsgJyA9PiAnICsgdGhpcy5sYXN0TWF0Y2hQZXJjZW50ICsgJyUnXHJcbiAgICAgICAgICAgICsgJyAoZMOieSAnICsgdGhpcy5sYXN0U2NvcmVCcmVha2Rvd24uY29yZFNjb3JlXHJcbiAgICAgICAgICAgICsgJyBjaGFybSAnICsgdGhpcy5sYXN0U2NvcmVCcmVha2Rvd24uY2hhcm1TY29yZVxyXG4gICAgICAgICAgICArICcga2V5ICcgKyB0aGlzLmxhc3RTY29yZUJyZWFrZG93bi5rZXljaGFpblNjb3JlICsgJyknKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAZGVwcmVjYXRlZCBkw7luZyBjb21wYXJlRnVsbCAqL1xyXG4gICAgY29tcGFyZVdpdGhEZWZhdWx0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUNoYXJtc09ubHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0TWF0Y2hQZXJjZW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdE1hdGNoUGVyY2VudDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TWF0Y2hSZXN1bHQocGVyY2VudD86IG51bWJlciwgYnJlYWtkb3duPzogTWF0Y2hTY29yZUJyZWFrZG93bikge1xyXG4gICAgICAgIGNvbnN0IGJkID0gYnJlYWtkb3duIHx8IHRoaXMubGFzdFNjb3JlQnJlYWtkb3duO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGVyY2VudCAhPT0gdW5kZWZpbmVkID8gcGVyY2VudCA6IHRoaXMubGFzdE1hdGNoUGVyY2VudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hSZXN1bHRMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGNoUmVzdWx0TGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGNoUmVzdWx0TGFiZWwuc3RyaW5nID0gdmFsdWUgKyAnJSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmQpIHtcclxuICAgICAgICAgICAgY2MubG9nKCdbQ29yZFJvdW5kR2FtZV0gU2NvcmU6ICcgKyB2YWx1ZSArICclJ1xyXG4gICAgICAgICAgICAgICAgKyAnIHwgY29yZD0nICsgYmQuY29yZFNjb3JlXHJcbiAgICAgICAgICAgICAgICArICcgY2hhcm09JyArIGJkLmNoYXJtU2NvcmVcclxuICAgICAgICAgICAgICAgICsgJyBrZXljaGFpbj0nICsgYmQua2V5Y2hhaW5TY29yZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKCdbQ29yZFJvdW5kR2FtZV0gTWF0Y2g6ICcgKyB2YWx1ZSArICclJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBH4buNaSBraGkgeG9uZyB44bq/cCBjaGFybSDigJQgY2jhu4kg4bqpbiBwcmV2aWV3LCBjaMawYSB0w61uaCAlIGN14buRaS4gKi9cclxuICAgIGZpbmlzaEJyYWNlbGV0UGhhc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oaWRlRGVmYXVsdEJyYWNlbGV0UHJldmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBH4buNaSBraGkga+G6v3QgdGjDumMgZ2FtZSDigJQgdMOtbmggJSDEkeG6p3kgxJHhu6cgdsOgIGhp4buDbiB0aOG7iy4gKi9cclxuICAgIGZpbmlzaEFuZENvbXBhcmUocGxheWVyS2V5Y2hhaW5JbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLmhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCk7XHJcbiAgICAgICAgY29uc3QgYnJlYWtkb3duID0gdGhpcy5jb21wYXJlRnVsbChwbGF5ZXJLZXljaGFpbkluZGV4KTtcclxuICAgICAgICB0aGlzLnNob3dNYXRjaFJlc3VsdChicmVha2Rvd24udG90YWwsIGJyZWFrZG93bik7XHJcbiAgICAgICAgcmV0dXJuIGJyZWFrZG93bi50b3RhbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoYXJtU2xpZGUodGhpcy5jb3JkQ2hhcm1zW2ldLCBkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhdGVVcGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN0cmFpbkNoYXJtSGFuZyh0aGlzLmNvcmRDaGFybXNbaV0sIGR0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19