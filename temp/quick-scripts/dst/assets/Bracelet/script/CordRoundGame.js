
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
        /** Khoảng trống tối thiểu gần neo để cho phép thả charm. */
        _this.minAnchorDropGap = 60;
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
        if (dropAnchor && this.threadCharmOntoCord(charm, dropAnchor)) {
            cc.audioEngine.play(this.soundDrop, false, 1);
            this.hideDefaultBraceletPreview();
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
            return false;
        var path = this.cordPaths.get(this.activeCord);
        if (!path)
            return false;
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
        return true;
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
    CordRoundGame.prototype.getAnchorSlideDistance = function () {
        var path = this.cordPaths.get(this.activeCord);
        var anchors = this.getCordAnchorPositions();
        if (!path || !anchors)
            return 0;
        var leftIndex = this.findNearestPathIndex(path.points, anchors.left);
        var pathDir = this.pickPathDirection(path.points, leftIndex, 'left');
        return this.getDistanceAlongPath(path.points, leftIndex, pathDir, anchors.right);
    };
    CordRoundGame.prototype.getSideSlideDistance = function (side) {
        var path = this.cordPaths.get(this.activeCord);
        var anchors = this.getCordAnchorPositions();
        if (!path || !anchors)
            return 0;
        var entry = side === 'left' ? anchors.left : anchors.right;
        var entryIndex = this.findNearestPathIndex(path.points, entry);
        var pathDir = this.pickPathDirection(path.points, entryIndex, side);
        var opposite = side === 'left' ? anchors.right : anchors.left;
        var toOpposite = this.getDistanceAlongPath(path.points, entryIndex, pathDir, opposite);
        if (toOpposite <= 0)
            return 0;
        // Dừng ở đáy vòng (~giữa cung trái/phải), không tính khe hở giữa 2 neo.
        var idx = entryIndex;
        var dist = 0;
        var lowestY = entry.y;
        var distAtLowest = 0;
        var maxSteps = path.points.length + 2;
        for (var step = 0; step < maxSteps; step++) {
            var nextIdx = this.wrapIndex(idx + pathDir, path.points.length);
            var a = path.points[idx];
            var b = path.points[nextIdx];
            var segLen = cc.v2(b.x - a.x, b.y - a.y).mag();
            if (segLen <= 0) {
                idx = nextIdx;
                continue;
            }
            dist += segLen;
            if (b.y < lowestY) {
                lowestY = b.y;
                distAtLowest = dist;
            }
            if (dist >= toOpposite * 0.5)
                break;
            idx = nextIdx;
        }
        return Math.max(distAtLowest, toOpposite * 0.5);
    };
    CordRoundGame.prototype.getMaxSlideDistance = function (state) {
        return this.getSideSlideDistance(state.side);
    };
    CordRoundGame.prototype.getSlideEntryAnchor = function (side) {
        var anchors = this.getCordAnchorPositions();
        if (!anchors)
            return null;
        return side === 'left' ? anchors.left : anchors.right;
    };
    /** Chỉ tìm điểm gần nhất trên cung dây hợp lệ (neo → đáy), bỏ qua khe hở giữa 2 neo. */
    CordRoundGame.prototype.getNearestOnAllowedSlidePath = function (state, pos) {
        var path = this.cordPaths.get(this.activeCord);
        if (!path) {
            return { index: state.pathStartIndex, nearest: pos, pathDistance: 0 };
        }
        var maxDistance = this.getMaxSlideDistance(state);
        var points = path.points;
        var bestDistSqr = Number.MAX_VALUE;
        var bestNearest = points[state.pathStartIndex];
        var bestIndex = state.pathStartIndex;
        var bestPathDist = 0;
        var idx = state.pathStartIndex;
        var traversed = 0;
        var maxSteps = points.length + 2;
        for (var step = 0; step < maxSteps; step++) {
            var nextIdx = this.wrapIndex(idx + state.pathDir, points.length);
            var a = points[idx];
            var b = points[nextIdx];
            var dx = b.x - a.x;
            var dy = b.y - a.y;
            var segLen = Math.sqrt(dx * dx + dy * dy);
            if (segLen <= 0) {
                idx = nextIdx;
                continue;
            }
            var remain = maxDistance - traversed;
            var segUse = Math.min(segLen, remain);
            var tMax = segUse / segLen;
            var tRaw = ((pos.x - a.x) * dx + (pos.y - a.y) * dy) / (segLen * segLen);
            var t = Math.max(0, Math.min(tMax, tRaw));
            var nx = a.x + dx * t;
            var ny = a.y + dy * t;
            var dSqr = (pos.x - nx) * (pos.x - nx) + (pos.y - ny) * (pos.y - ny);
            var pathDist = traversed + t * segLen;
            if (dSqr < bestDistSqr) {
                bestDistSqr = dSqr;
                bestNearest = cc.v2(nx, ny);
                bestIndex = idx;
                bestPathDist = pathDist;
            }
            traversed += segLen;
            idx = nextIdx;
            if (traversed >= maxDistance)
                break;
        }
        return { index: bestIndex, nearest: bestNearest, pathDistance: bestPathDist };
    };
    /** Không cho charm trượt qua neo hoặc lọt vào khe hở giữa 2 neo. */
    CordRoundGame.prototype.enforceCharmSlideBounds = function (state, onAllowed, tangent, maxDist) {
        var body = state.pivot.getComponent(cc.RigidBody);
        var path = this.cordPaths.get(this.activeCord);
        if (!body || !path)
            return;
        var margin = this.pivotColliderRadius;
        var pos = cc.v2(state.pivot.x, state.pivot.y);
        var pathDist = Math.max(0, Math.min(maxDist, onAllowed.pathDistance));
        state.pathDistance = pathDist;
        var inGap = this.isInAnchorGap(pos);
        var atMin = pathDist <= margin;
        var atMax = pathDist >= maxDist - margin;
        // Chỉ snap cứng khi lọt khe hở — không snap mỗi frame khi đang trượt bình thường.
        if (inGap) {
            var entry = this.getSlideEntryAnchor(state.side);
            var clampPos = entry || onAllowed.nearest;
            state.pivot.setPosition(cc.v3(clampPos.x, clampPos.y, 0));
            body.syncPosition(true);
            body.linearVelocity = cc.v2(0, 0);
            return;
        }
        var vel = body.linearVelocity;
        var vTangent = vel.x * tangent.x + vel.y * tangent.y;
        var changed = false;
        if (atMin && vTangent < 0) {
            vTangent = 0;
            changed = true;
        }
        if (atMax && vTangent > 0) {
            vTangent = 0;
            changed = true;
        }
        if (changed) {
            var vNormal = vel.x * (-tangent.y) + vel.y * tangent.x;
            body.linearVelocity = cc.v2(tangent.x * vTangent + (-tangent.y) * vNormal, tangent.y * vTangent + tangent.x * vNormal);
        }
    };
    CordRoundGame.prototype.updateCharmSlide = function (state, dt) {
        var body = state.pivot.getComponent(cc.RigidBody);
        var path = this.cordPaths.get(this.activeCord);
        if (!body || !path)
            return;
        var pos = cc.v2(state.pivot.x, state.pivot.y);
        var maxDist = this.getMaxSlideDistance(state);
        var onAllowed = this.getNearestOnAllowedSlidePath(state, pos);
        var onPath = this.getNearestOnPath(path.points, pos);
        var tangent = this.getTangentAtIndex(path.points, onAllowed.index, state.pathDir);
        state.pathDistance = Math.max(0, Math.min(maxDist, onAllowed.pathDistance));
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
            if (state.pathDistance <= this.pivotColliderRadius && newVTangent < 0) {
                newVTangent = 0;
            }
            if (state.pathDistance >= maxDist - this.pivotColliderRadius && newVTangent > 0) {
                newVTangent = 0;
            }
            var vx = tx * newVTangent + nx * newVNormal;
            var vy = ty * newVTangent + ny * newVNormal;
            var speed_1 = Math.sqrt(vx * vx + vy * vy);
            if (speed_1 > this.maxSlideSpeed) {
                var scale = this.maxSlideSpeed / speed_1;
                vx *= scale;
                vy *= scale;
            }
            body.linearVelocity = cc.v2(vx, vy);
            if (state.pathDistance >= maxDist - 2) {
                state.settled = true;
            }
        }
        var speed = body.linearVelocity.mag();
        var minSlide = Math.min(24, maxDist * 0.12);
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
        this.enforceCharmSlideBounds(state, onAllowed, tangent, maxDist);
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
        var onPath = this.getNearestOnAllowedSlidePath(state, pos);
        var maxDist = this.getMaxSlideDistance(state);
        return Math.max(0, Math.min(maxDist, onPath.pathDistance));
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
    CordRoundGame.prototype.getOccupiedDistancesOnSide = function (side) {
        var onSide = this.getCharmsOnSide(side);
        var distances = [];
        for (var i = 0; i < onSide.length; i++) {
            distances.push(this.getDistanceFromAnchor(side, onSide[i]));
        }
        distances.sort(function (a, b) { return a - b; });
        return distances;
    };
    CordRoundGame.prototype.getDistanceFromAnchor = function (side, state) {
        return this.getCharmPathDistance(state);
    };
    /** Bán kính vùng neo (khoanh đỏ) — charm trong vùng này thì bên đó không thả thêm. */
    CordRoundGame.prototype.getAnchorDropZoneRadius = function () {
        return this.entryDetectRadius * 0.5;
    };
    CordRoundGame.prototype.getRequiredAnchorGap = function (charm) {
        return Math.max(this.minAnchorDropGap, this.getAnchorDropZoneRadius());
    };
    CordRoundGame.prototype.getCharmSlotSpacing = function (charm) {
        var item = this.getCharmItemComp(charm);
        if (item && typeof item.slotSpacing === 'number' && item.slotSpacing > 0) {
            return item.slotSpacing;
        }
        return this.charmSlotSpacing;
    };
    /** Chỉ thả được khi vùng neo (khoanh đỏ) đủ trống — không có charm nào chiếm gần neo. */
    CordRoundGame.prototype.canDropOnSide = function (side, charm) {
        var anchors = this.getCordAnchorPositions();
        if (!anchors)
            return false;
        var anchorPos = side === 'left' ? anchors.left : anchors.right;
        var requiredGap = this.getRequiredAnchorGap(charm);
        var zoneRadius = this.getAnchorDropZoneRadius();
        var onSide = this.getCharmsOnSide(side);
        for (var i = 0; i < onSide.length; i++) {
            var state = onSide[i];
            var pathDist = this.getCharmPathDistance(state);
            if (pathDist < requiredGap) {
                return false;
            }
            if (state.pivot) {
                var pos = cc.v2(state.pivot.x, state.pivot.y);
                var distToAnchor = cc.v2(pos.x - anchorPos.x, pos.y - anchorPos.y).mag();
                if (distToAnchor < zoneRadius) {
                    return false;
                }
            }
        }
        return true;
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
        if (this.isInAnchorGap(local))
            return null;
        var leftPos = anchors.left;
        var rightPos = anchors.right;
        var distLeft = cc.v2(local.x - leftPos.x, local.y - leftPos.y).mag();
        var distRight = cc.v2(local.x - rightPos.x, local.y - rightPos.y).mag();
        var nearLeft = distLeft <= this.entryDetectRadius;
        var nearRight = distRight <= this.entryDetectRadius;
        // Chỉ thả khi sát neo trái/phải — không thả trong khe hở giữa 2 neo.
        if (!nearLeft && !nearRight)
            return null;
        var preferLeft = distLeft <= distRight;
        if (preferredSide === 'left' && nearLeft && this.canDropOnSide('left', charm)) {
            return { side: 'left', cordPos: leftPos };
        }
        if (preferredSide === 'right' && nearRight && this.canDropOnSide('right', charm)) {
            return { side: 'right', cordPos: rightPos };
        }
        var side = this.pickAvailableSide(nearLeft, nearRight, distLeft, distRight, charm, preferLeft);
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
        var cordLocal = this.activeCord.convertToNodeSpaceAR(main.convertToWorldSpaceAR(cc.v2(mainPos.x, mainPos.y)));
        if (this.isInAnchorGap(cordLocal))
            return null;
        if (nearLeft || nearRight) {
            var preferLeft = distLeft <= distRight;
            side = this.pickAvailableSide(nearLeft, nearRight, distLeft, distRight, charm, preferLeft);
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
    /** Khe hở giữa 2 neo — không phải vùng thả charm. */
    CordRoundGame.prototype.isInAnchorGap = function (local) {
        var anchors = this.getCordAnchorPositions();
        if (!anchors)
            return false;
        var left = anchors.left;
        var right = anchors.right;
        var anchorReach = this.entryDetectRadius * 0.4;
        var distLeft = cc.v2(local.x - left.x, local.y - left.y).mag();
        var distRight = cc.v2(local.x - right.x, local.y - right.y).mag();
        if (distLeft <= anchorReach || distRight <= anchorReach) {
            return false;
        }
        var gapMinX = Math.min(left.x, right.x) + anchorReach;
        var gapMaxX = Math.max(left.x, right.x) - anchorReach;
        var topY = Math.max(left.y, right.y);
        var inTopBand = local.y >= topY - this.entryDetectRadius;
        return inTopBand && local.x >= gapMinX && local.x <= gapMaxX;
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
    ], CordRoundGame.prototype, "minAnchorDropGap", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ29yZFJvdW5kR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkc7QUFFdkcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUEwQjVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBb3hEQztRQWp4REcsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyx1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFHL0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFHM0Isa0JBQVksR0FBVyxHQUFHLENBQUM7UUFHM0IsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBRy9CLHFCQUFlLEdBQVcsRUFBRSxDQUFDO1FBRzdCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLHlCQUFtQixHQUFXLENBQUMsQ0FBQztRQUdoQyxzQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFFL0IsNERBQTREO1FBRTVELHNCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUc5QixvQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUc1QiwwQkFBb0IsR0FBVyxFQUFFLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBUyxHQUErQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2xELG1CQUFhLEdBQWMsRUFBRSxDQUFDO1FBQzlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGdCQUFVLEdBQXFCLEVBQUUsQ0FBQztR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UUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFJdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2REFDaUI7SUFJbkM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0VBQ2tCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ2U7SUFHbEM7UUFEQyxRQUFRO2lFQUMyQjtJQUdwQztRQURDLFFBQVE7NkRBQzBCO0lBSW5DO1FBREMsUUFBUTt3REFDaUI7SUFJMUI7UUFEQyxRQUFROytEQUN3QjtJQS9GaEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQW94RGpDO0lBQUQsb0JBQUM7Q0FweERELEFBb3hEQyxDQXB4RDBDLEVBQUUsQ0FBQyxTQUFTLEdBb3hEdEQ7a0JBcHhEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbGNDaGFybU1hdGNoUGVyY2VudCwgY2FsY0Z1bGxTY29yZSwgQ2hhcm1TbG90RGF0YSwgTWF0Y2hTY29yZUJyZWFrZG93biB9IGZyb20gJy4vQnJhY2VsZXRNYXRjaGVyJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG50eXBlIENvcmRTaWRlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcclxuXHJcbmludGVyZmFjZSBDb3JkUGF0aERhdGEge1xyXG4gICAgcG9pbnRzOiBjYy5WZWMyW107XHJcbiAgICB0b3RhbExlbmd0aDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29yZENoYXJtU3RhdGUge1xyXG4gICAgcGl2b3Q6IGNjLk5vZGU7XHJcbiAgICBjaGFybTogY2MuTm9kZTtcclxuICAgIHNldHRsZWQ6IGJvb2xlYW47XHJcbiAgICBzdGlsbFRpbWU6IG51bWJlcjtcclxuICAgIHNpZGU6IENvcmRTaWRlO1xyXG4gICAgcGF0aFN0YXJ0SW5kZXg6IG51bWJlcjtcclxuICAgIHBhdGhEaXI6IG51bWJlcjtcclxuICAgIHBhdGhEaXN0YW5jZTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRHJvcEFuY2hvciB7XHJcbiAgICBzaWRlOiBDb3JkU2lkZTtcclxuICAgIGNvcmRQb3M6IGNjLlZlYzI7XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmRSb3VuZEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ29yZFJvdW5kTGlzdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF0ZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJtSGluZDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGVudHJ5RGV0ZWN0UmFkaXVzOiBudW1iZXIgPSAxMTA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwYXRoU2FtcGxlU3BhY2luZzogbnVtYmVyID0gMTI7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzZWdtZW50UmFkaXVzOiBudW1iZXIgPSAxNDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNsaWRlR3Jhdml0eTogbnVtYmVyID0gMzIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4U2xpZGVTcGVlZDogbnVtYmVyID0gMjgwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGF0aFB1bGxTdHJlbmd0aDogbnVtYmVyID0gNDIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGF0aFB1bGxEYW1waW5nOiBudW1iZXIgPSAxNjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNldHRsZVNwZWVkOiBudW1iZXIgPSAyMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBpdm90Q29sbGlkZXJSYWRpdXM6IG51bWJlciA9IDg7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjaGFybVNsb3RTcGFjaW5nOiBudW1iZXIgPSAxMzA7XHJcblxyXG4gICAgLyoqIEtob+G6o25nIHRy4buRbmcgdOG7kWkgdGhp4buDdSBn4bqnbiBuZW8gxJHhu4MgY2hvIHBow6lwIHRo4bqjIGNoYXJtLiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaW5BbmNob3JEcm9wR2FwOiBudW1iZXIgPSA2MDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGhhbmdTd2luZ0xpbWl0OiBudW1iZXIgPSAzMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGhhbmdPdXR3YXJkU3RpZmZuZXNzOiBudW1iZXIgPSAxNDtcclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZUNvcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb3JkUGF0aHM6IE1hcDxjYy5Ob2RlLCBDb3JkUGF0aERhdGE+ID0gbmV3IE1hcCgpO1xyXG4gICAgcHJpdmF0ZSBwcmVwYXJlZENvcmRzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgbGVmdEFuY2hvcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJpZ2h0QW5jaG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2hhcm1MYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvcmRDaGFybXM6IENvcmRDaGFybVN0YXRlW10gPSBbXTtcclxuICAgIHByaXZhdGUgZHJhZ2dpbmdDaGFybTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdTbmFwU2lkZTogQ29yZFNpZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3JpZ2luUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHJhZ09yaWdpblBvczogY2MuVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdPcmlnaW5TaWJsaW5nSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFjdGl2ZVRvdWNoSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0b3VjaEJvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmREcm9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9rOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8qKiBOb2RlIHRoYW0gY2hp4bq/dSB2w7JuZyBt4bqrdSAodmQ6IGRlZmF1bHRDaGFybSB0cm9uZyBzY2VuZSkuICovXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRlZmF1bHRCcmFjZWxldFJlZjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFbDsm5nIG3huqt1IHRoZW8gdOG7q25nIGxv4bqhaSBkw6J5IChpbmRleCA9IGlkU3RyaW5nKS4gxq91IHRpw6puIGjGoW4gZGVmYXVsdEJyYWNlbGV0UmVmLiAqL1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGRlZmF1bHRCcmFjZWxldEJ5Q29yZDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbWF0Y2hSZXN1bHRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF0Y2hQb3NpdGlvblRvbGVyYW5jZTogbnVtYmVyID0gODA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzaG93RGVmYXVsdFByZXZpZXc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEw6J5IG3huqt1IMSRw7puZyAodmQ6IDIgPSBncmVlbikuIMSQw7puZyBtw6B1IGTDonkgxJHGsOG7o2MgKzMwJS4gLTEgPSDEkW/DoW4gdOG7qyB0w6puIGNvcmQgKGtow7RuZyB0aW4gY+G6rXkpLiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkZWZhdWx0Q29yZElkOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIC8qKiBLZXljaGFpbiDEkcO6bmcgKGZhbGxiYWNrIGtoaSBjaMawYSBn4bqvbiBCcmFjZWxldERlZmF1bHRNZXRhKS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVmYXVsdEtleWNoYWluSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgbG9jYWxCb3ggPSBudWxsXHJcbiAgICBwcml2YXRlIGNhY2hlZERlZmF1bHRMYXlvdXQ6IENoYXJtU2xvdERhdGFbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjYWNoZWREZWZhdWx0Q29yZElkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZGVmYXVsdENvbmZpZ0NhY2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBsYXN0TWF0Y2hQZXJjZW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBsYXN0U2NvcmVCcmVha2Rvd246IE1hdGNoU2NvcmVCcmVha2Rvd24gPSBudWxsO1xyXG4gICAgbGlmdEJyYWNlbGV0KHRhcmdldFBvczogY2MuVmVjMywgZHVyYXRpb246IG51bWJlciA9IDAuNCkge1xyXG4gICAgICAgIGlmICghdGhpcy5Db3JkUm91bmRMaXN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9kaWVzOiBjYy5SaWdpZEJvZHlbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3RCb2RpZXMgPSAobm9kZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZGllcy5wdXNoKGJvZHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3RCb2RpZXMobm9kZS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbGxlY3RCb2RpZXModGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGJvZGllc1tpXTtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuS2luZW1hdGljO1xyXG4gICAgICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN5bmNCb2RpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBib2RpZXNbaV0uc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYm9kaWVzW2ldLnN5bmNSb3RhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHBvc2l0aW9uOiB0YXJnZXRQb3MgfSwgeyBvblVwZGF0ZTogc3luY0JvZGllcyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzeW5jQm9kaWVzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgaXNUYXJnZXRIaW5kID0gbnVsbFxyXG5cclxuICAgIHNldEhpbmQoY2hhcm0pIHtcclxuICAgICAgICBsZXQgdGFnID0gY2hhcm0uZ2V0Q29tcG9uZW50KFwiQ2hhcm1JdGVtXCIpLnRhZ1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRIaW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRIaW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJtSGluZC5jaGlsZHJlblt0YWddLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEhpbmQgPSB0aGlzLmNoYXJtSGluZC5jaGlsZHJlblt0YWddO1xyXG4gICAgICAgIGxldCBjb2xvcklNRyA9IGNoYXJtLmdldENvbXBvbmVudChcIkNoYXJtSXRlbVwiKS5nZXRDb2xvcigpO1xyXG4gICAgICAgIHRoaXMuY2hhcm1IaW5kLmNoaWxkcmVuW3RhZ10uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBjb2xvcklNRztcclxuICAgICAgICB0aGlzLmNoYXJtSGluZC5jaGlsZHJlblt0YWddLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gY29sb3JJTUc7XHJcbiAgICAgICAgdGhpcy5sb2NhbEJveCA9IHRoaXMuY2hhcm1IaW5kLmNoaWxkcmVuW3RhZ107XHJcbiAgICB9XHJcbiAgICBzdGFydEJyYWNlbGV0TW9kZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuQ29yZFJvdW5kTGlzdCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZVJlZmVyZW5jZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDb3JkID0gdGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuW2dsb2JhbFRoaXMuaWRTdHJpbmddO1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVDb3JkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubGVmdEFuY2hvciA9IHRoaXMuYWN0aXZlQ29yZC5nZXRDaGlsZEJ5TmFtZSgnbGVmdCcpO1xyXG4gICAgICAgIHRoaXMucmlnaHRBbmNob3IgPSB0aGlzLmFjdGl2ZUNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBbmNob3IgfHwgIXRoaXMucmlnaHRBbmNob3IpIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NvcmRSb3VuZEdhbWVdIENvcmQgaXMgbWlzc2luZyBsZWZ0L3JpZ2h0IGFuY2hvciBub2Rlcy4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MudjIoMCwgLTUyMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkNvcmRSb3VuZExpc3QuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvcmQodGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbnN1cmVDaGFybUxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5jYWNoZURlZmF1bHRDb25maWcodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAodGhpcy5zaG93RGVmYXVsdFByZXZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RGVmYXVsdEJyYWNlbGV0UHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJpbmRUb3VjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBDaOG7iSDEkeG7jWMgbWV0YSBz4bubbTsgbGF5b3V0IGNoYXJtIHPhur0gYnVpbGQgbOG6oWkga2hpIHbDoG8gZ2FtZSB24bubaSBhY3RpdmVDb3JkLlxyXG4gICAgICAgIHRoaXMuY2FjaGVEZWZhdWx0TWV0YU9ubHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByZXBhcmVDb3JkKGNvcmQ6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5wcmVwYXJlZENvcmRzLmluZGV4T2YoY29yZCkgPj0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByYXdQb2ludHMgPSB0aGlzLmdldFBvbHlnb25Db2xsaWRlclBvaW50cyhjb3JkKTtcclxuICAgICAgICBpZiAocmF3UG9pbnRzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NvcmRSb3VuZEdhbWVdIENvcmQgXCInICsgY29yZC5uYW1lICsgJ1wiIG5lZWRzIGNjLlBvbHlnb25Db2xsaWRlci4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcyA9IHRoaXMuc2FtcGxlQWxvbmdQYXRoKHJhd1BvaW50cywgdGhpcy5wYXRoU2FtcGxlU3BhY2luZyk7XHJcbiAgICAgICAgdGhpcy5jb3JkUGF0aHMuc2V0KGNvcmQsIHtcclxuICAgICAgICAgICAgcG9pbnRzOiBzYW1wbGVzLFxyXG4gICAgICAgICAgICB0b3RhbExlbmd0aDogdGhpcy5jYWxjUGF0aExlbmd0aChzYW1wbGVzKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cENvcmRQaHlzaWNzKGNvcmQsIHNhbXBsZXMpO1xyXG4gICAgICAgIHRoaXMucHJlcGFyZWRDb3Jkcy5wdXNoKGNvcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UG9seWdvbkNvbGxpZGVyUG9pbnRzKGNvcmQ6IGNjLk5vZGUpOiBjYy5WZWMyW10ge1xyXG4gICAgICAgIGNvbnN0IHBvbHkgPSBjb3JkLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgIGlmICghcG9seSB8fCAhcG9seS5wb2ludHMgfHwgcG9seS5wb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBjb25zdCBvZmZzZXQgPSBwb2x5Lm9mZnNldCB8fCBjYy52MigwLCAwKTtcclxuICAgICAgICByZXR1cm4gcG9seS5wb2ludHMubWFwKHAgPT4gY2MudjIocC54ICsgb2Zmc2V0LngsIHAueSArIG9mZnNldC55KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cENvcmRQaHlzaWNzKGNvcmQ6IGNjLk5vZGUsIHNhbXBsZXM6IGNjLlZlYzJbXSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gY29yZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIWJvZHkpIHtcclxuICAgICAgICAgICAgYm9keSA9IGNvcmQuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgIGJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclNlZ21lbnRDb2xsaWRlcnMoY29yZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSBNYXRoLm1heCh0aGlzLnBhdGhTYW1wbGVTcGFjaW5nICogMS41LCAxNik7XHJcbiAgICAgICAgY29uc3QgY29sbGlkZXJQb2ludHMgPSBzYW1wbGVzLmxlbmd0aCA+IDgwXHJcbiAgICAgICAgICAgID8gdGhpcy5zYW1wbGVBbG9uZ1BhdGgoc2FtcGxlcywgc3BhY2luZylcclxuICAgICAgICAgICAgOiBzYW1wbGVzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVyUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGNvcmQuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgICAgIGNvbC5vZmZzZXQgPSBjb2xsaWRlclBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29sLnJhZGl1cyA9IHRoaXMuc2VnbWVudFJhZGl1cztcclxuICAgICAgICAgICAgY29sLmZyaWN0aW9uID0gMC4zNTtcclxuICAgICAgICAgICAgY29sLnJlc3RpdHV0aW9uID0gMC4wNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYW1wbGVBbG9uZ1BhdGgocG9pbnRzOiBjYy5WZWMyW10sIHNwYWNpbmc6IG51bWJlcik6IGNjLlZlYzJbXSB7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlczogY2MuVmVjMltdID0gW107XHJcbiAgICAgICAgbGV0IGNhcnJ5ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHBvaW50c1soaSArIDEpICUgcG9pbnRzLmxlbmd0aF07XHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcclxuICAgICAgICAgICAgY29uc3Qgc2VnTGVuID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICAgICAgaWYgKHNlZ0xlbiA8PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpclggPSBkeCAvIHNlZ0xlbjtcclxuICAgICAgICAgICAgY29uc3QgZGlyWSA9IGR5IC8gc2VnTGVuO1xyXG4gICAgICAgICAgICBsZXQgZGlzdCA9IGNhcnJ5O1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKGRpc3QgPCBzZWdMZW4pIHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXMucHVzaChjYy52MihhLnggKyBkaXJYICogZGlzdCwgYS55ICsgZGlyWSAqIGRpc3QpKTtcclxuICAgICAgICAgICAgICAgIGRpc3QgKz0gc3BhY2luZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXJyeSA9IGRpc3QgLSBzZWdMZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2FtcGxlcy5sZW5ndGggPiAwID8gc2FtcGxlcyA6IHBvaW50cy5zbGljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY1BhdGhMZW5ndGgocG9pbnRzOiBjYy5WZWMyW10pOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBsZW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbKGkgKyAxKSAlIHBvaW50cy5sZW5ndGhdO1xyXG4gICAgICAgICAgICBsZW4gKz0gY2MudjIoYi54IC0gYS54LCBiLnkgLSBhLnkpLm1hZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYXJTZWdtZW50Q29sbGlkZXJzKGNvcmQ6IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCBjaXJjbGVzID0gY29yZC5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXJjbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNpcmNsZXNbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuc3VyZUNoYXJtTGF5ZXIoKSB7XHJcbiAgICAgICAgbGV0IGxheWVyID0gdGhpcy5hY3RpdmVDb3JkLmdldENoaWxkQnlOYW1lKCdjaGFybXNPbkNvcmQnKTtcclxuICAgICAgICBpZiAoIWxheWVyKSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gbmV3IGNjLk5vZGUoJ2NoYXJtc09uQ29yZCcpO1xyXG4gICAgICAgICAgICBsYXllci5wYXJlbnQgPSB0aGlzLmFjdGl2ZUNvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhcm1MYXllciA9IGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzb2x2ZVJlZmVyZW5jZXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGtoYXkgPSBtYWluLmdldENoaWxkQnlOYW1lKCdraGF5Jyk7XHJcbiAgICAgICAgICAgIGlmIChraGF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRlID0ga2hheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJpbmRUb3VjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy50b3VjaEJvdW5kKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50b3VjaEJvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdG91Y2hOb2RlID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmRyYWdnaW5nQ2hhcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhcm0gPSB0aGlzLmdldFBsYXRlQ2hhcm1BdChldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBpZiAoIWNoYXJtKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlVG91Y2hJZCA9IGV2ZW50LmdldElEKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydERyYWcoY2hhcm0sIGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0SGluZChjaGFybSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IGV2ZW50LmdldElEKCkgIT09IHRoaXMuYWN0aXZlVG91Y2hJZCB8fCAhdGhpcy5kcmFnZ2luZ0NoYXJtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gdGhpcy5nZXRNYWluTG9jYWxQb3MoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgY29uc3Qgc25hcCA9IHRoaXMuZ2V0RHJhZ1NuYXBQb3NlKHRvdWNoUG9zKTtcclxuICAgICAgICAvLyBpZiAoc25hcCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0uc2V0UG9zaXRpb24oc25hcC5wb3MpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0uYW5nbGUgPSBzbmFwLmFuZ2xlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRyYWdTbmFwU2lkZSA9IHNuYXAuc2lkZTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0uc2V0UG9zaXRpb24odG91Y2hQb3MpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0uYW5nbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdTbmFwU2lkZSA9IG51bGw7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCBldmVudC5nZXRJRCgpICE9PSB0aGlzLmFjdGl2ZVRvdWNoSWQgfHwgIXRoaXMuZHJhZ2dpbmdDaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuZHJhZ2dpbmdDaGFybTtcclxuICAgICAgICBjb25zdCBjaGFybVdvcmxkID0gY2hhcm0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGFybS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZHJvcEFuY2hvciA9IHRoaXMucmVzb2x2ZURyb3BBbmNob3IoY2hhcm1Xb3JsZCwgdGhpcy5kcmFnU25hcFNpZGUsIGNoYXJtKTtcclxuICAgICAgICBpZiAoZHJvcEFuY2hvciAmJiB0aGlzLnRocmVhZENoYXJtT250b0NvcmQoY2hhcm0sIGRyb3BBbmNob3IpKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZERyb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLmhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuT2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kMy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RHJhZ2dlZENoYXJtKGNoYXJtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmdDaGFybSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kcmFnU25hcFNpZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVG91Y2hJZCA9IC0xO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0SGluZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0SGluZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEhpbmQgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Q2hhcm1QbGF0ZVBoeXNpY3MoY2hhcm06IGNjLk5vZGUsIGVuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChlbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgIGlmIChjb2xsaWRlcikge1xyXG4gICAgICAgICAgICBjb2xsaWRlci5lbmFibGVkID0gZW5hYmxlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydERyYWcoY2hhcm06IGNjLk5vZGUsIHNjcmVlblBvczogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmdDaGFybSA9IGNoYXJtO1xyXG4gICAgICAgIHRoaXMuZHJhZ09yaWdpblBhcmVudCA9IGNoYXJtLnBhcmVudDtcclxuICAgICAgICB0aGlzLmRyYWdPcmlnaW5Qb3MgPSBjaGFybS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhZ09yaWdpblNpYmxpbmdJbmRleCA9IGNoYXJtLmdldFNpYmxpbmdJbmRleCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldENoYXJtUGxhdGVQaHlzaWNzKGNoYXJtLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zID0gY2hhcm0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGFybS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IHRoaXMuZ2V0TWFpbk5vZGUoKTtcclxuICAgICAgICBjaGFybS5wYXJlbnQgPSBtYWluO1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKG1haW4uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpKTtcclxuICAgICAgICBjaGFybS5zZXRTaWJsaW5nSW5kZXgobWFpbi5jaGlsZHJlbkNvdW50IC0gMSk7XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24odGhpcy5nZXRNYWluTG9jYWxQb3Moc2NyZWVuUG9zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldERyYWdnZWRDaGFybShjaGFybTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNoYXJtLnBhcmVudCA9IHRoaXMuZHJhZ09yaWdpblBhcmVudDtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbih0aGlzLmRyYWdPcmlnaW5Qb3MpO1xyXG4gICAgICAgIGNoYXJtLnNldFNpYmxpbmdJbmRleCh0aGlzLmRyYWdPcmlnaW5TaWJsaW5nSW5kZXgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldENoYXJtUGxhdGVQaHlzaWNzKGNoYXJtLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRocmVhZENoYXJtT250b0NvcmQoY2hhcm06IGNjLk5vZGUsIGRyb3BBbmNob3I6IERyb3BBbmNob3IpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuRHJvcE9uU2lkZShkcm9wQW5jaG9yLnNpZGUsIGNoYXJtKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuY2hvclBvcyA9IGRyb3BBbmNob3IuY29yZFBvcztcclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgYW5jaG9yUG9zKTtcclxuICAgICAgICBjb25zdCBwYXRoRGlyID0gdGhpcy5waWNrUGF0aERpcmVjdGlvbihwYXRoLnBvaW50cywgc3RhcnRJbmRleCwgZHJvcEFuY2hvci5zaWRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGl2b3QgPSB0aGlzLnNldHVwQ2hhcm1IYW5nUmlnKGNoYXJtKTtcclxuICAgICAgICBwaXZvdC5wYXJlbnQgPSB0aGlzLmNoYXJtTGF5ZXI7XHJcbiAgICAgICAgcGl2b3Quc2V0UG9zaXRpb24oY2MudjMoYW5jaG9yUG9zLngsIGFuY2hvclBvcy55LCAwKSk7XHJcbiAgICAgICAgY29uc3QgaGFuZ0xvY2FsID0gdGhpcy5nZXRIYW5nTG9jYWxPZmZzZXQoY2hhcm0pO1xyXG4gICAgICAgIGNvbnN0IG91dHdhcmQgPSB0aGlzLmdldE91dHdhcmRGcm9tQ2VudGVyKGNjLnYyKGFuY2hvclBvcy54LCBhbmNob3JQb3MueSkpO1xyXG4gICAgICAgIGNoYXJtLmFuZ2xlID0gdGhpcy5hbmdsZUZvck91dHdhcmRIYW5nKG91dHdhcmQsIGhhbmdMb2NhbCk7XHJcbiAgICAgICAgY2hhcm0uY2hpbGRyZW5bMF0uc2NhbGUgPSAwLjg7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpdm90Qm9keSA9IHBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGNoYXJtQm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChwaXZvdEJvZHkpIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuZ3Jhdml0eVNjYWxlID0gMTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmFsbG93U2xlZXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YW5nZW50ID0gdGhpcy5nZXRUYW5nZW50QXRJbmRleChwYXRoLnBvaW50cywgc3RhcnRJbmRleCwgcGF0aERpcik7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IHRhbmdlbnQubXVsKDc1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYXJtQm9keSkge1xyXG4gICAgICAgICAgICBjaGFybUJvZHkuc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICBjaGFybUJvZHkuc3luY1JvdGF0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICBjaGFybUJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvcmRDaGFybXMucHVzaCh7XHJcbiAgICAgICAgICAgIHBpdm90LFxyXG4gICAgICAgICAgICBjaGFybSxcclxuICAgICAgICAgICAgc2V0dGxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0aWxsVGltZTogMCxcclxuICAgICAgICAgICAgc2lkZTogZHJvcEFuY2hvci5zaWRlLFxyXG4gICAgICAgICAgICBwYXRoU3RhcnRJbmRleDogc3RhcnRJbmRleCxcclxuICAgICAgICAgICAgcGF0aERpcixcclxuICAgICAgICAgICAgcGF0aERpc3RhbmNlOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBU4bqhbyBwaXZvdCAoxJFp4buDbSBuZW8gdHLDqm4gZMOieSkgKyBSZXZvbHV0ZUpvaW50OyBwaOG6p24gZMaw4bubaSBjaGFybSBsdW5nIGxheSB0aGVvIHBoeXNpY3MuICovXHJcbiAgICBwcml2YXRlIHNldHVwQ2hhcm1IYW5nUmlnKGNoYXJtOiBjYy5Ob2RlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKGNoYXJtLnBhcmVudCAmJiBjaGFybS5wYXJlbnQubmFtZSA9PT0gJ2NoYXJtUGl2b3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFybS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5nTG9jYWwgPSB0aGlzLmdldEhhbmdMb2NhbE9mZnNldChjaGFybSk7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBjaGFybS5wYXJlbnQ7XHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBsYXllci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG5cclxuICAgICAgICBjb25zdCBwaXZvdCA9IG5ldyBjYy5Ob2RlKCdjaGFybVBpdm90Jyk7XHJcbiAgICAgICAgcGl2b3QucGFyZW50ID0gbGF5ZXI7XHJcbiAgICAgICAgcGl2b3Quc2V0UG9zaXRpb24obGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpKTtcclxuXHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gcGl2b3Q7XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24oY2MudjMoLWhhbmdMb2NhbC54LCAtaGFuZ0xvY2FsLnksIDApKTtcclxuICAgICAgICBjaGFybS5hbmdsZSA9IDA7XHJcblxyXG4gICAgICAgIGxldCBwaXZvdEJvZHkgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXBpdm90Qm9keSkge1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkgPSBwaXZvdC5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGl2b3RCb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgcGl2b3RCb2R5LmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICAgICAgcGl2b3RCb2R5LmxpbmVhckRhbXBpbmcgPSAwLjIyO1xyXG4gICAgICAgIHBpdm90Qm9keS5hbmd1bGFyRGFtcGluZyA9IDE7XHJcbiAgICAgICAgcGl2b3RCb2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgIHBpdm90Qm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBwaXZvdENvbCA9IHBpdm90LmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIGlmICghcGl2b3RDb2wpIHtcclxuICAgICAgICAgICAgcGl2b3RDb2wgPSBwaXZvdC5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGl2b3RDb2wucmFkaXVzID0gdGhpcy5waXZvdENvbGxpZGVyUmFkaXVzO1xyXG4gICAgICAgIHBpdm90Q29sLmZyaWN0aW9uID0gMC4zO1xyXG4gICAgICAgIHBpdm90Q29sLnJlc3RpdHV0aW9uID0gMC4wNTtcclxuICAgICAgICBwaXZvdENvbC5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IGNoYXJtQm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghY2hhcm1Cb2R5KSB7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keSA9IGNoYXJtLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFybUJvZHkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmdyYXZpdHlTY2FsZSA9IDAuODU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmxpbmVhckRhbXBpbmcgPSAwLjI7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmFuZ3VsYXJEYW1waW5nID0gMC42NTtcclxuICAgICAgICBjaGFybUJvZHkuZml4ZWRSb3RhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGNoYXJtQm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZW5hYmxlQ2hhcm1QaHlzaWNzQ29sbGlkZXIoY2hhcm0pO1xyXG5cclxuICAgICAgICBsZXQgam9pbnQgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUmV2b2x1dGVKb2ludCk7XHJcbiAgICAgICAgaWYgKCFqb2ludCkge1xyXG4gICAgICAgICAgICBqb2ludCA9IHBpdm90LmFkZENvbXBvbmVudChjYy5SZXZvbHV0ZUpvaW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQm9keSA9IGNoYXJtQm9keTtcclxuICAgICAgICBqb2ludC5hbmNob3IgPSBjYy52MigwLCAwKTtcclxuICAgICAgICBqb2ludC5jb25uZWN0ZWRBbmNob3IgPSBoYW5nTG9jYWw7XHJcbiAgICAgICAgam9pbnQuY29sbGlkZUNvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gcGl2b3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb3JkQ2VudGVyTG9jYWwoKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCB8fCBwYXRoLnBvaW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGN4ID0gMDtcclxuICAgICAgICBsZXQgY3kgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5wb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3ggKz0gcGF0aC5wb2ludHNbaV0ueDtcclxuICAgICAgICAgICAgY3kgKz0gcGF0aC5wb2ludHNbaV0ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbiA9IHBhdGgucG9pbnRzLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gY2MudjIoY3ggLyBuLCBjeSAvIG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3V0d2FyZEZyb21DZW50ZXIocG9zOiBjYy5WZWMyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5nZXRDb3JkQ2VudGVyTG9jYWwoKTtcclxuICAgICAgICBjb25zdCBvdXR3YXJkID0gY2MudjIocG9zLnggLSBjZW50ZXIueCwgcG9zLnkgLSBjZW50ZXIueSk7XHJcbiAgICAgICAgaWYgKG91dHdhcmQubWFnU3FyKCkgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MigwLCAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dHdhcmQubm9ybWFsaXplU2VsZigpO1xyXG4gICAgICAgIHJldHVybiBvdXR3YXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd3JhcEFuZ2xlRGVnKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBhID0gYW5nbGU7XHJcbiAgICAgICAgd2hpbGUgKGEgPiAxODApIGEgLT0gMzYwO1xyXG4gICAgICAgIHdoaWxlIChhIDwgLTE4MCkgYSArPSAzNjA7XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybUJvZHlEaXIoaGFuZ0xvY2FsOiBjYy5WZWMyLCBhbmdsZURlZzogbnVtYmVyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxCYXNlID0gY2MudjIoLWhhbmdMb2NhbC54LCAtaGFuZ0xvY2FsLnkpO1xyXG4gICAgICAgIGNvbnN0IHJhZCA9IGFuZ2xlRGVnICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICBjb25zdCBkaXIgPSBjYy52MihcclxuICAgICAgICAgICAgbG9jYWxCYXNlLnggKiBjIC0gbG9jYWxCYXNlLnkgKiBzLFxyXG4gICAgICAgICAgICBsb2NhbEJhc2UueCAqIHMgKyBsb2NhbEJhc2UueSAqIGNcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChkaXIubWFnU3FyKCkgPCAwLjAwMDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKDAsIC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlyLm5vcm1hbGl6ZVNlbGYoKTtcclxuICAgICAgICByZXR1cm4gZGlyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYW5nbGVGb3JPdXR3YXJkSGFuZyhvdXR3YXJkOiBjYy5WZWMyLCBoYW5nTG9jYWw6IGNjLlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsQmFzZSA9IGNjLnYyKC1oYW5nTG9jYWwueCwgLWhhbmdMb2NhbC55KTtcclxuICAgICAgICBjb25zdCBiYXNlQW5nbGUgPSBNYXRoLmF0YW4yKGxvY2FsQmFzZS55LCBsb2NhbEJhc2UueCk7XHJcbiAgICAgICAgY29uc3Qgb3V0QW5nbGUgPSBNYXRoLmF0YW4yKG91dHdhcmQueSwgb3V0d2FyZC54KTtcclxuICAgICAgICByZXR1cm4gdGhpcy53cmFwQW5nbGVEZWcoKG91dEFuZ2xlIC0gYmFzZUFuZ2xlKSAqIDE4MCAvIE1hdGguUEkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3RyYWluQ2hhcm1IYW5nKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSwgZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gc3RhdGUuY2hhcm07XHJcbiAgICAgICAgY29uc3QgcGl2b3QgPSBzdGF0ZS5waXZvdDtcclxuICAgICAgICBpZiAoIWNoYXJtIHx8ICFwaXZvdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5nTG9jYWwgPSB0aGlzLmdldEhhbmdMb2NhbE9mZnNldChjaGFybSk7XHJcbiAgICAgICAgY29uc3Qgb3V0d2FyZCA9IHRoaXMuZ2V0T3V0d2FyZEZyb21DZW50ZXIoY2MudjIocGl2b3QueCwgcGl2b3QueSkpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEFuZ2xlID0gdGhpcy5hbmdsZUZvck91dHdhcmRIYW5nKG91dHdhcmQsIGhhbmdMb2NhbCk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG5cclxuICAgICAgICBsZXQgYW5nbGUgPSBjaGFybS5hbmdsZTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLndyYXBBbmdsZURlZyhhbmdsZSAtIHRhcmdldEFuZ2xlKTtcclxuICAgICAgICBjb25zdCBib2R5RGlyID0gdGhpcy5nZXRDaGFybUJvZHlEaXIoaGFuZ0xvY2FsLCBhbmdsZSk7XHJcbiAgICAgICAgY29uc3Qgb3V0d2FyZERvdCA9IGJvZHlEaXIueCAqIG91dHdhcmQueCArIGJvZHlEaXIueSAqIG91dHdhcmQueTtcclxuXHJcbiAgICAgICAgaWYgKG91dHdhcmREb3QgPCAwLjAyKSB7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gdGFyZ2V0QW5nbGU7XHJcbiAgICAgICAgICAgIGNoYXJtLmFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN5bmNSb3RhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2Zmc2V0ID4gdGhpcy5oYW5nU3dpbmdMaW1pdCkge1xyXG4gICAgICAgICAgICBhbmdsZSA9IHRhcmdldEFuZ2xlICsgdGhpcy5oYW5nU3dpbmdMaW1pdDtcclxuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA8IC10aGlzLmhhbmdTd2luZ0xpbWl0KSB7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gdGFyZ2V0QW5nbGUgLSB0aGlzLmhhbmdTd2luZ0xpbWl0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICBjb25zdCBwdWxsID0gdGhpcy53cmFwQW5nbGVEZWcodGFyZ2V0QW5nbGUgLSBhbmdsZSk7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ICs9IHB1bGwgKiB0aGlzLmhhbmdPdXR3YXJkU3RpZmZuZXNzICogZHQ7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhhbmdsZSAtIGNoYXJtLmFuZ2xlKSA+IDAuMDUpIHtcclxuICAgICAgICAgICAgY2hhcm0uYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ICo9IDAuMjU7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN5bmNSb3RhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEhhbmdMb2NhbE9mZnNldChjaGFybTogY2MuTm9kZSk6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjaGFybS5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpIGFzIGFueTtcclxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLmdldEhhbmdMb2NhbE9mZnNldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRIYW5nTG9jYWxPZmZzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDU1KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuYWJsZUNoYXJtUGh5c2ljc0NvbGxpZGVyKGNoYXJtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGlkZXIgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb2xsaWRlci5zZW5zb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29sbGlkZXIuZnJpY3Rpb24gPSAwLjI1O1xyXG4gICAgICAgICAgICBjb2xsaWRlci5yZXN0aXR1dGlvbiA9IDAuMDg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFuZ2VudEF0SW5kZXgocG9pbnRzOiBjYy5WZWMyW10sIGluZGV4OiBudW1iZXIsIGRpcjogbnVtYmVyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgbmV4dElkeCA9IHRoaXMud3JhcEluZGV4KGluZGV4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhID0gcG9pbnRzW2luZGV4XTtcclxuICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gYi55IC0gYS55O1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgfHwgMTtcclxuICAgICAgICByZXR1cm4gY2MudjIoZHggLyBsZW4sIGR5IC8gbGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5lYXJlc3RPblBhdGgocG9pbnRzOiBjYy5WZWMyW10sIHBvczogY2MuVmVjMik6IHsgaW5kZXg6IG51bWJlcjsgbmVhcmVzdDogY2MuVmVjMiB9IHtcclxuICAgICAgICBsZXQgYmVzdEluZGV4ID0gMDtcclxuICAgICAgICBsZXQgYmVzdERpc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY2MudjIocG9pbnRzW2ldLnggLSBwb3MueCwgcG9pbnRzW2ldLnkgLSBwb3MueSkubWFnU3FyKCk7XHJcbiAgICAgICAgICAgIGlmIChkIDwgYmVzdERpc3QpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0ID0gZDtcclxuICAgICAgICAgICAgICAgIGJlc3RJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGluZGV4OiBiZXN0SW5kZXgsIG5lYXJlc3Q6IHBvaW50c1tiZXN0SW5kZXhdIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kTmVhcmVzdFBhdGhJbmRleChwb2ludHM6IGNjLlZlYzJbXSwgcG9zOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgYmVzdCA9IDA7XHJcbiAgICAgICAgbGV0IGJlc3REaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY2MudjIocG9pbnRzW2ldLnggLSBwb3MueCwgcG9pbnRzW2ldLnkgLSBwb3MueSkubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkIDwgYmVzdERpc3QpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0ID0gZDtcclxuICAgICAgICAgICAgICAgIGJlc3QgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGlja1BhdGhEaXJlY3Rpb24ocG9pbnRzOiBjYy5WZWMyW10sIGVudHJ5SW5kZXg6IG51bWJlciwgc2lkZTogQ29yZFNpZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNjb3JlID0gKGRpcjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzID0gMDtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IGVudHJ5SW5kZXg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDA7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICAgICAgICAgIHMgKz0gLXAueSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIGlmIChzaWRlID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzICs9IHAueCA8IDAgPyAzIDogLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgKz0gcC54ID4gMCA/IDMgOiAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBzY29yZSgxKSA+PSBzY29yZSgtMSkgPyAxIDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQb3NlT25QYXRoKFxyXG4gICAgICAgIHBvaW50czogY2MuVmVjMltdLFxyXG4gICAgICAgIHN0YXJ0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBkaXI6IG51bWJlcixcclxuICAgICAgICBkaXN0YW5jZTogbnVtYmVyXHJcbiAgICApOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBhbmdsZTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGxldCBpZHggPSBzdGFydEluZGV4O1xyXG4gICAgICAgIGxldCByZW1haW4gPSBkaXN0YW5jZTtcclxuICAgICAgICBjb25zdCBtYXhTdGVwID0gcG9pbnRzLmxlbmd0aCArIDI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgbWF4U3RlcDsgc3RlcCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpZHggKyBkaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbbmV4dElkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcclxuICAgICAgICAgICAgY29uc3Qgc2VnTGVuID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICAgICAgaWYgKHNlZ0xlbiA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZW1haW4gPD0gc2VnTGVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcmVtYWluIC8gc2VnTGVuO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGEueCArIGR4ICogdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBhLnkgKyBkeSAqIHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KSAqIDE4MCAvIE1hdGguUEkgLSA5MDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHgsIHksIGFuZ2xlIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbWFpbiAtPSBzZWdMZW47XHJcbiAgICAgICAgICAgIGlkeCA9IG5leHRJZHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsYXN0ID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgcmV0dXJuIHsgeDogbGFzdC54LCB5OiBsYXN0LnksIGFuZ2xlOiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3cmFwSW5kZXgoaW5kZXg6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiBsZW5ndGggKyBpbmRleDtcclxuICAgICAgICBpZiAoaW5kZXggPj0gbGVuZ3RoKSByZXR1cm4gaW5kZXggLSBsZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QW5jaG9yU2xpZGVEaXN0YW5jZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgY29uc3QgbGVmdEluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgYW5jaG9ycy5sZWZ0KTtcclxuICAgICAgICBjb25zdCBwYXRoRGlyID0gdGhpcy5waWNrUGF0aERpcmVjdGlvbihwYXRoLnBvaW50cywgbGVmdEluZGV4LCAnbGVmdCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlQWxvbmdQYXRoKHBhdGgucG9pbnRzLCBsZWZ0SW5kZXgsIHBhdGhEaXIsIGFuY2hvcnMucmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2lkZVNsaWRlRGlzdGFuY2Uoc2lkZTogQ29yZFNpZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgY29uc3QgZW50cnkgPSBzaWRlID09PSAnbGVmdCcgPyBhbmNob3JzLmxlZnQgOiBhbmNob3JzLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVudHJ5SW5kZXggPSB0aGlzLmZpbmROZWFyZXN0UGF0aEluZGV4KHBhdGgucG9pbnRzLCBlbnRyeSk7XHJcbiAgICAgICAgY29uc3QgcGF0aERpciA9IHRoaXMucGlja1BhdGhEaXJlY3Rpb24ocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHNpZGUpO1xyXG4gICAgICAgIGNvbnN0IG9wcG9zaXRlID0gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5yaWdodCA6IGFuY2hvcnMubGVmdDtcclxuICAgICAgICBjb25zdCB0b09wcG9zaXRlID0gdGhpcy5nZXREaXN0YW5jZUFsb25nUGF0aChwYXRoLnBvaW50cywgZW50cnlJbmRleCwgcGF0aERpciwgb3Bwb3NpdGUpO1xyXG4gICAgICAgIGlmICh0b09wcG9zaXRlIDw9IDApIHJldHVybiAwO1xyXG5cclxuICAgICAgICAvLyBE4burbmcg4bufIMSRw6F5IHbDsm5nICh+Z2nhu69hIGN1bmcgdHLDoWkvcGjhuqNpKSwga2jDtG5nIHTDrW5oIGtoZSBo4bufIGdp4buvYSAyIG5lby5cclxuICAgICAgICBsZXQgaWR4ID0gZW50cnlJbmRleDtcclxuICAgICAgICBsZXQgZGlzdCA9IDA7XHJcbiAgICAgICAgbGV0IGxvd2VzdFkgPSBlbnRyeS55O1xyXG4gICAgICAgIGxldCBkaXN0QXRMb3dlc3QgPSAwO1xyXG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gcGF0aC5wb2ludHMubGVuZ3RoICsgMjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPCBtYXhTdGVwczsgc3RlcCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpZHggKyBwYXRoRGlyLCBwYXRoLnBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcGF0aC5wb2ludHNbaWR4XTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHBhdGgucG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBzZWdMZW4gPSBjYy52MihiLnggLSBhLngsIGIueSAtIGEueSkubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWdMZW4gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXN0ICs9IHNlZ0xlbjtcclxuICAgICAgICAgICAgaWYgKGIueSA8IGxvd2VzdFkpIHtcclxuICAgICAgICAgICAgICAgIGxvd2VzdFkgPSBiLnk7XHJcbiAgICAgICAgICAgICAgICBkaXN0QXRMb3dlc3QgPSBkaXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdCA+PSB0b09wcG9zaXRlICogMC41KSBicmVhaztcclxuICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChkaXN0QXRMb3dlc3QsIHRvT3Bwb3NpdGUgKiAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZTogQ29yZENoYXJtU3RhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNpZGVTbGlkZURpc3RhbmNlKHN0YXRlLnNpZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2xpZGVFbnRyeUFuY2hvcihzaWRlOiBDb3JkU2lkZSk6IGNjLlZlYzIgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2jhu4kgdMOsbSDEkWnhu4NtIGfhuqduIG5o4bqldCB0csOqbiBjdW5nIGTDonkgaOG7o3AgbOG7hyAobmVvIOKGkiDEkcOheSksIGLhu48gcXVhIGtoZSBo4bufIGdp4buvYSAyIG5lby4gKi9cclxuICAgIHByaXZhdGUgZ2V0TmVhcmVzdE9uQWxsb3dlZFNsaWRlUGF0aChcclxuICAgICAgICBzdGF0ZTogQ29yZENoYXJtU3RhdGUsXHJcbiAgICAgICAgcG9zOiBjYy5WZWMyXHJcbiAgICApOiB7IGluZGV4OiBudW1iZXI7IG5lYXJlc3Q6IGNjLlZlYzI7IHBhdGhEaXN0YW5jZTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaW5kZXg6IHN0YXRlLnBhdGhTdGFydEluZGV4LCBuZWFyZXN0OiBwb3MsIHBhdGhEaXN0YW5jZTogMCB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWF4RGlzdGFuY2UgPSB0aGlzLmdldE1heFNsaWRlRGlzdGFuY2Uoc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IHBhdGgucG9pbnRzO1xyXG4gICAgICAgIGxldCBiZXN0RGlzdFNxciA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgbGV0IGJlc3ROZWFyZXN0ID0gcG9pbnRzW3N0YXRlLnBhdGhTdGFydEluZGV4XTtcclxuICAgICAgICBsZXQgYmVzdEluZGV4ID0gc3RhdGUucGF0aFN0YXJ0SW5kZXg7XHJcbiAgICAgICAgbGV0IGJlc3RQYXRoRGlzdCA9IDA7XHJcblxyXG4gICAgICAgIGxldCBpZHggPSBzdGF0ZS5wYXRoU3RhcnRJbmRleDtcclxuICAgICAgICBsZXQgdHJhdmVyc2VkID0gMDtcclxuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHBvaW50cy5sZW5ndGggKyAyO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8IG1heFN0ZXBzOyBzdGVwKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dElkeCA9IHRoaXMud3JhcEluZGV4KGlkeCArIHN0YXRlLnBhdGhEaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbbmV4dElkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcclxuICAgICAgICAgICAgY29uc3Qgc2VnTGVuID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICAgICAgaWYgKHNlZ0xlbiA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbiA9IG1heERpc3RhbmNlIC0gdHJhdmVyc2VkO1xyXG4gICAgICAgICAgICBjb25zdCBzZWdVc2UgPSBNYXRoLm1pbihzZWdMZW4sIHJlbWFpbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRNYXggPSBzZWdVc2UgLyBzZWdMZW47XHJcbiAgICAgICAgICAgIGNvbnN0IHRSYXcgPSAoKHBvcy54IC0gYS54KSAqIGR4ICsgKHBvcy55IC0gYS55KSAqIGR5KSAvIChzZWdMZW4gKiBzZWdMZW4pO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odE1heCwgdFJhdykpO1xyXG4gICAgICAgICAgICBjb25zdCBueCA9IGEueCArIGR4ICogdDtcclxuICAgICAgICAgICAgY29uc3QgbnkgPSBhLnkgKyBkeSAqIHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGRTcXIgPSAocG9zLnggLSBueCkgKiAocG9zLnggLSBueCkgKyAocG9zLnkgLSBueSkgKiAocG9zLnkgLSBueSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGhEaXN0ID0gdHJhdmVyc2VkICsgdCAqIHNlZ0xlbjtcclxuXHJcbiAgICAgICAgICAgIGlmIChkU3FyIDwgYmVzdERpc3RTcXIpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0U3FyID0gZFNxcjtcclxuICAgICAgICAgICAgICAgIGJlc3ROZWFyZXN0ID0gY2MudjIobngsIG55KTtcclxuICAgICAgICAgICAgICAgIGJlc3RJbmRleCA9IGlkeDtcclxuICAgICAgICAgICAgICAgIGJlc3RQYXRoRGlzdCA9IHBhdGhEaXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cmF2ZXJzZWQgKz0gc2VnTGVuO1xyXG4gICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgICAgICBpZiAodHJhdmVyc2VkID49IG1heERpc3RhbmNlKSBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGluZGV4OiBiZXN0SW5kZXgsIG5lYXJlc3Q6IGJlc3ROZWFyZXN0LCBwYXRoRGlzdGFuY2U6IGJlc3RQYXRoRGlzdCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBLaMO0bmcgY2hvIGNoYXJtIHRyxrDhu6N0IHF1YSBuZW8gaG/hurdjIGzhu410IHbDoG8ga2hlIGjhu58gZ2nhu69hIDIgbmVvLiAqL1xyXG4gICAgcHJpdmF0ZSBlbmZvcmNlQ2hhcm1TbGlkZUJvdW5kcyhcclxuICAgICAgICBzdGF0ZTogQ29yZENoYXJtU3RhdGUsXHJcbiAgICAgICAgb25BbGxvd2VkOiB7IGluZGV4OiBudW1iZXI7IG5lYXJlc3Q6IGNjLlZlYzI7IHBhdGhEaXN0YW5jZTogbnVtYmVyIH0sXHJcbiAgICAgICAgdGFuZ2VudDogY2MuVmVjMixcclxuICAgICAgICBtYXhEaXN0OiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBzdGF0ZS5waXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFib2R5IHx8ICFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMucGl2b3RDb2xsaWRlclJhZGl1cztcclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICBjb25zdCBwYXRoRGlzdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heERpc3QsIG9uQWxsb3dlZC5wYXRoRGlzdGFuY2UpKTtcclxuICAgICAgICBzdGF0ZS5wYXRoRGlzdGFuY2UgPSBwYXRoRGlzdDtcclxuXHJcbiAgICAgICAgY29uc3QgaW5HYXAgPSB0aGlzLmlzSW5BbmNob3JHYXAocG9zKTtcclxuICAgICAgICBjb25zdCBhdE1pbiA9IHBhdGhEaXN0IDw9IG1hcmdpbjtcclxuICAgICAgICBjb25zdCBhdE1heCA9IHBhdGhEaXN0ID49IG1heERpc3QgLSBtYXJnaW47XHJcblxyXG4gICAgICAgIC8vIENo4buJIHNuYXAgY+G7qW5nIGtoaSBs4buNdCBraGUgaOG7nyDigJQga2jDtG5nIHNuYXAgbeG7l2kgZnJhbWUga2hpIMSRYW5nIHRyxrDhu6N0IGLDrG5oIHRoxrDhu51uZy5cclxuICAgICAgICBpZiAoaW5HYXApIHtcclxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLmdldFNsaWRlRW50cnlBbmNob3Ioc3RhdGUuc2lkZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsYW1wUG9zID0gZW50cnkgfHwgb25BbGxvd2VkLm5lYXJlc3Q7XHJcbiAgICAgICAgICAgIHN0YXRlLnBpdm90LnNldFBvc2l0aW9uKGNjLnYzKGNsYW1wUG9zLngsIGNsYW1wUG9zLnksIDApKTtcclxuICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVsID0gYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICBsZXQgdlRhbmdlbnQgPSB2ZWwueCAqIHRhbmdlbnQueCArIHZlbC55ICogdGFuZ2VudC55O1xyXG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChhdE1pbiAmJiB2VGFuZ2VudCA8IDApIHtcclxuICAgICAgICAgICAgdlRhbmdlbnQgPSAwO1xyXG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF0TWF4ICYmIHZUYW5nZW50ID4gMCkge1xyXG4gICAgICAgICAgICB2VGFuZ2VudCA9IDA7XHJcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgdk5vcm1hbCA9IHZlbC54ICogKC10YW5nZW50LnkpICsgdmVsLnkgKiB0YW5nZW50Lng7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MihcclxuICAgICAgICAgICAgICAgIHRhbmdlbnQueCAqIHZUYW5nZW50ICsgKC10YW5nZW50LnkpICogdk5vcm1hbCxcclxuICAgICAgICAgICAgICAgIHRhbmdlbnQueSAqIHZUYW5nZW50ICsgdGFuZ2VudC54ICogdk5vcm1hbFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNoYXJtU2xpZGUoc3RhdGU6IENvcmRDaGFybVN0YXRlLCBkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHN0YXRlLnBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIWJvZHkgfHwgIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgY29uc3QgbWF4RGlzdCA9IHRoaXMuZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZSk7XHJcbiAgICAgICAgY29uc3Qgb25BbGxvd2VkID0gdGhpcy5nZXROZWFyZXN0T25BbGxvd2VkU2xpZGVQYXRoKHN0YXRlLCBwb3MpO1xyXG4gICAgICAgIGNvbnN0IG9uUGF0aCA9IHRoaXMuZ2V0TmVhcmVzdE9uUGF0aChwYXRoLnBvaW50cywgcG9zKTtcclxuICAgICAgICBjb25zdCB0YW5nZW50ID0gdGhpcy5nZXRUYW5nZW50QXRJbmRleChwYXRoLnBvaW50cywgb25BbGxvd2VkLmluZGV4LCBzdGF0ZS5wYXRoRGlyKTtcclxuXHJcbiAgICAgICAgc3RhdGUucGF0aERpc3RhbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4RGlzdCwgb25BbGxvd2VkLnBhdGhEaXN0YW5jZSkpO1xyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLnNldHRsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWCA9IG9uUGF0aC5uZWFyZXN0LnggLSBwb3MueDtcclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWSA9IG9uUGF0aC5uZWFyZXN0LnkgLSBwb3MueTtcclxuICAgICAgICAgICAgY29uc3QgdHggPSB0YW5nZW50Lng7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5ID0gdGFuZ2VudC55O1xyXG4gICAgICAgICAgICBjb25zdCBueCA9IC10eTtcclxuICAgICAgICAgICAgY29uc3QgbnkgPSB0eDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZlbCA9IGJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZUYW5nZW50ID0gdmVsLnggKiB0eCArIHZlbC55ICogdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZOb3JtYWwgPSB2ZWwueCAqIG54ICsgdmVsLnkgKiBueTtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0Tm9ybWFsID0gdG9QYXRoWCAqIG54ICsgdG9QYXRoWSAqIG55O1xyXG5cclxuICAgICAgICAgICAgbGV0IG5ld1ZUYW5nZW50ID0gdlRhbmdlbnQgKyB0aGlzLnNsaWRlR3Jhdml0eSAqIGR0O1xyXG4gICAgICAgICAgICBsZXQgbmV3Vk5vcm1hbCA9IHZOb3JtYWxcclxuICAgICAgICAgICAgICAgICsgb2Zmc2V0Tm9ybWFsICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHRcclxuICAgICAgICAgICAgICAgIC0gdk5vcm1hbCAqIHRoaXMucGF0aFB1bGxEYW1waW5nICogZHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucGF0aERpc3RhbmNlIDw9IHRoaXMucGl2b3RDb2xsaWRlclJhZGl1cyAmJiBuZXdWVGFuZ2VudCA8IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld1ZUYW5nZW50ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucGF0aERpc3RhbmNlID49IG1heERpc3QgLSB0aGlzLnBpdm90Q29sbGlkZXJSYWRpdXMgJiYgbmV3VlRhbmdlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdWVGFuZ2VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB2eCA9IHR4ICogbmV3VlRhbmdlbnQgKyBueCAqIG5ld1ZOb3JtYWw7XHJcbiAgICAgICAgICAgIGxldCB2eSA9IHR5ICogbmV3VlRhbmdlbnQgKyBueSAqIG5ld1ZOb3JtYWw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IE1hdGguc3FydCh2eCAqIHZ4ICsgdnkgKiB2eSk7XHJcbiAgICAgICAgICAgIGlmIChzcGVlZCA+IHRoaXMubWF4U2xpZGVTcGVlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLm1heFNsaWRlU3BlZWQgLyBzcGVlZDtcclxuICAgICAgICAgICAgICAgIHZ4ICo9IHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgdnkgKj0gc2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZ4LCB2eSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucGF0aERpc3RhbmNlID49IG1heERpc3QgLSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXR0bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBib2R5LmxpbmVhclZlbG9jaXR5Lm1hZygpO1xyXG4gICAgICAgIGNvbnN0IG1pblNsaWRlID0gTWF0aC5taW4oMjQsIG1heERpc3QgKiAwLjEyKTtcclxuICAgICAgICBpZiAoc3BlZWQgPCB0aGlzLnNldHRsZVNwZWVkICYmIHN0YXRlLnBhdGhEaXN0YW5jZSA+PSBtaW5TbGlkZSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdGlsbFRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zdGlsbFRpbWUgPj0gMC4zNSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0dGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdGlsbFRpbWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLnNldHRsZWQpIHtcclxuICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhckRhbXBpbmcgPSAxLjg7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhckRhbXBpbmcgPSAxLjI7XHJcbiAgICAgICAgICAgIGJvZHkuYWxsb3dTbGVlcCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhYID0gb25QYXRoLm5lYXJlc3QueCAtIHBvcy54O1xyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhZID0gb25QYXRoLm5lYXJlc3QueSAtIHBvcy55O1xyXG4gICAgICAgICAgICBjb25zdCBob2xkRGFtcCA9IHRoaXMucGF0aFB1bGxEYW1waW5nICogMS41O1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5LnggKyB0b1BhdGhYICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHQgKiAwLjM1IC0gYm9keS5saW5lYXJWZWxvY2l0eS54ICogaG9sZERhbXAgKiBkdCxcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkueSArIHRvUGF0aFkgKiB0aGlzLnBhdGhQdWxsU3RyZW5ndGggKiBkdCAqIDAuMzUgLSBib2R5LmxpbmVhclZlbG9jaXR5LnkgKiBob2xkRGFtcCAqIGR0XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBNYXRoLnNxcnQodG9QYXRoWCAqIHRvUGF0aFggKyB0b1BhdGhZICogdG9QYXRoWSk7XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAxLjUgJiYgYm9keS5saW5lYXJWZWxvY2l0eS5tYWcoKSA8IDgpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnBpdm90LnNldFBvc2l0aW9uKGNjLnYzKG9uUGF0aC5uZWFyZXN0LngsIG9uUGF0aC5uZWFyZXN0LnksIDApKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVuZm9yY2VDaGFybVNsaWRlQm91bmRzKHN0YXRlLCBvbkFsbG93ZWQsIHRhbmdlbnQsIG1heERpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGlzdGFuY2VBbG9uZ1BhdGgoXHJcbiAgICAgICAgcG9pbnRzOiBjYy5WZWMyW10sXHJcbiAgICAgICAgc3RhcnRJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGRpcjogbnVtYmVyLFxyXG4gICAgICAgIHBvczogY2MuVmVjMlxyXG4gICAgKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBuZWFyZXN0ID0gdGhpcy5nZXROZWFyZXN0T25QYXRoKHBvaW50cywgcG9zKTtcclxuICAgICAgICBsZXQgZGlzdCA9IDA7XHJcbiAgICAgICAgbGV0IGlkeCA9IHN0YXJ0SW5kZXg7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmVhcmVzdC5pbmRleDtcclxuICAgICAgICBsZXQgZ3VhcmQgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoaWR4ICE9PSB0YXJnZXQgJiYgZ3VhcmQgPCBwb2ludHMubGVuZ3RoICsgMSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgICAgICBkaXN0ICs9IGNjLnYyKGIueCAtIGEueCwgYi55IC0gYS55KS5tYWcoKTtcclxuICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICAgICAgZ3VhcmQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlZ0EgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICBkaXN0ICs9IGNjLnYyKHBvcy54IC0gc2VnQS54LCBwb3MueSAtIHNlZ0EueSkubWFnKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBbmdsZUluTm9kZVNwYWNlKG5vZGU6IGNjLk5vZGUsIHJvb3Q6IGNjLk5vZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBhbmdsZSA9IG5vZGUuYW5nbGU7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSByb290KSB7XHJcbiAgICAgICAgICAgIGFuZ2xlICs9IHBhcmVudC5hbmdsZTtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVhc3VyZVBhdGhEaXN0YW5jZUZyb21FbnRyeShzaWRlOiBDb3JkU2lkZSwgcG9zOiBjYy5WZWMyLCBwYXRoRGlyPzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghcGF0aCB8fCAhYW5jaG9ycykgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHBhdGhEaXIgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHBhdGhEaXJcclxuICAgICAgICAgICAgOiB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzaWRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzdGFuY2VBbG9uZ1BhdGgocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIGRpciwgcG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtUGF0aERpc3RhbmNlKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5waXZvdCkgcmV0dXJuIHN0YXRlLnBhdGhEaXN0YW5jZTtcclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICBjb25zdCBvblBhdGggPSB0aGlzLmdldE5lYXJlc3RPbkFsbG93ZWRTbGlkZVBhdGgoc3RhdGUsIHBvcyk7XHJcbiAgICAgICAgY29uc3QgbWF4RGlzdCA9IHRoaXMuZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKG1heERpc3QsIG9uUGF0aC5wYXRoRGlzdGFuY2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtc09uU2lkZShzaWRlOiBDb3JkU2lkZSk6IENvcmRDaGFybVN0YXRlW10ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogQ29yZENoYXJtU3RhdGVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvcmRDaGFybXNbaV0uc2lkZSA9PT0gc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jb3JkQ2hhcm1zW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T2NjdXBpZWREaXN0YW5jZXNPblNpZGUoc2lkZTogQ29yZFNpZGUpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgY29uc3Qgb25TaWRlID0gdGhpcy5nZXRDaGFybXNPblNpZGUoc2lkZSk7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2VzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9uU2lkZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkaXN0YW5jZXMucHVzaCh0aGlzLmdldERpc3RhbmNlRnJvbUFuY2hvcihzaWRlLCBvblNpZGVbaV0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3RhbmNlcy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERpc3RhbmNlRnJvbUFuY2hvcihzaWRlOiBDb3JkU2lkZSwgc3RhdGU6IENvcmRDaGFybVN0YXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFybVBhdGhEaXN0YW5jZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIELDoW4ga8OtbmggdsO5bmcgbmVvIChraG9hbmggxJHhu48pIOKAlCBjaGFybSB0cm9uZyB2w7luZyBuw6B5IHRow6wgYsOqbiDEkcOzIGtow7RuZyB0aOG6oyB0aMOqbS4gKi9cclxuICAgIHByaXZhdGUgZ2V0QW5jaG9yRHJvcFpvbmVSYWRpdXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyeURldGVjdFJhZGl1cyAqIDAuNTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlcXVpcmVkQW5jaG9yR2FwKGNoYXJtOiBjYy5Ob2RlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5taW5BbmNob3JEcm9wR2FwLCB0aGlzLmdldEFuY2hvckRyb3Bab25lUmFkaXVzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1TbG90U3BhY2luZyhjaGFybTogY2MuTm9kZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0Q2hhcm1JdGVtQ29tcChjaGFybSk7XHJcbiAgICAgICAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW0uc2xvdFNwYWNpbmcgPT09ICdudW1iZXInICYmIGl0ZW0uc2xvdFNwYWNpbmcgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnNsb3RTcGFjaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFybVNsb3RTcGFjaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDaOG7iSB0aOG6oyDEkcaw4bujYyBraGkgdsO5bmcgbmVvIChraG9hbmggxJHhu48pIMSR4bunIHRy4buRbmcg4oCUIGtow7RuZyBjw7MgY2hhcm0gbsOgbyBjaGnhur9tIGfhuqduIG5lby4gKi9cclxuICAgIHByaXZhdGUgY2FuRHJvcE9uU2lkZShzaWRlOiBDb3JkU2lkZSwgY2hhcm06IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuY2hvclBvcyA9IHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRHYXAgPSB0aGlzLmdldFJlcXVpcmVkQW5jaG9yR2FwKGNoYXJtKTtcclxuICAgICAgICBjb25zdCB6b25lUmFkaXVzID0gdGhpcy5nZXRBbmNob3JEcm9wWm9uZVJhZGl1cygpO1xyXG4gICAgICAgIGNvbnN0IG9uU2lkZSA9IHRoaXMuZ2V0Q2hhcm1zT25TaWRlKHNpZGUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9uU2lkZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IG9uU2lkZVtpXTtcclxuICAgICAgICAgICAgY29uc3QgcGF0aERpc3QgPSB0aGlzLmdldENoYXJtUGF0aERpc3RhbmNlKHN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHBhdGhEaXN0IDwgcmVxdWlyZWRHYXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnBpdm90KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RUb0FuY2hvciA9IGNjLnYyKHBvcy54IC0gYW5jaG9yUG9zLngsIHBvcy55IC0gYW5jaG9yUG9zLnkpLm1hZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RUb0FuY2hvciA8IHpvbmVSYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGlja0F2YWlsYWJsZVNpZGUoXHJcbiAgICAgICAgbmVhckxlZnQ6IGJvb2xlYW4sXHJcbiAgICAgICAgbmVhclJpZ2h0OiBib29sZWFuLFxyXG4gICAgICAgIGRpc3RMZWZ0OiBudW1iZXIsXHJcbiAgICAgICAgZGlzdFJpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgY2hhcm06IGNjLk5vZGUsXHJcbiAgICAgICAgcHJlZmVyTGVmdD86IGJvb2xlYW5cclxuICAgICk6IENvcmRTaWRlIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlczogeyBzaWRlOiBDb3JkU2lkZTsgZGlzdDogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgICAgIGlmIChuZWFyTGVmdCkgY2FuZGlkYXRlcy5wdXNoKHsgc2lkZTogJ2xlZnQnLCBkaXN0OiBkaXN0TGVmdCB9KTtcclxuICAgICAgICBpZiAobmVhclJpZ2h0KSBjYW5kaWRhdGVzLnB1c2goeyBzaWRlOiAncmlnaHQnLCBkaXN0OiBkaXN0UmlnaHQgfSk7XHJcblxyXG4gICAgICAgIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNhbmRpZGF0ZXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJlZmVyTGVmdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhUHJlZiA9IChhLnNpZGUgPT09ICdsZWZ0JykgPT09IHByZWZlckxlZnQgPyAwIDogMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJQcmVmID0gKGIuc2lkZSA9PT0gJ2xlZnQnKSA9PT0gcHJlZmVyTGVmdCA/IDAgOiAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFQcmVmICE9PSBiUHJlZikgcmV0dXJuIGFQcmVmIC0gYlByZWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGEuZGlzdCAtIGIuZGlzdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkRyb3BPblNpZGUoY2FuZGlkYXRlc1tpXS5zaWRlLCBjaGFybSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzW2ldLnNpZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlRHJvcEFuY2hvcih3b3JsZFBvczogY2MuVmVjMiwgcHJlZmVycmVkU2lkZTogQ29yZFNpZGUsIGNoYXJtOiBjYy5Ob2RlKTogRHJvcEFuY2hvciB8IG51bGwge1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVDb3JkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghYW5jaG9ycykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvY2FsID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luQW5jaG9yR2FwKGxvY2FsKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnRQb3MgPSBhbmNob3JzLmxlZnQ7XHJcbiAgICAgICAgY29uc3QgcmlnaHRQb3MgPSBhbmNob3JzLnJpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0TGVmdCA9IGNjLnYyKGxvY2FsLnggLSBsZWZ0UG9zLngsIGxvY2FsLnkgLSBsZWZ0UG9zLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RSaWdodCA9IGNjLnYyKGxvY2FsLnggLSByaWdodFBvcy54LCBsb2NhbC55IC0gcmlnaHRQb3MueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgbmVhckxlZnQgPSBkaXN0TGVmdCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IG5lYXJSaWdodCA9IGRpc3RSaWdodCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG5cclxuICAgICAgICAvLyBDaOG7iSB0aOG6oyBraGkgc8OhdCBuZW8gdHLDoWkvcGjhuqNpIOKAlCBraMO0bmcgdGjhuqMgdHJvbmcga2hlIGjhu58gZ2nhu69hIDIgbmVvLlxyXG4gICAgICAgIGlmICghbmVhckxlZnQgJiYgIW5lYXJSaWdodCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHByZWZlckxlZnQgPSBkaXN0TGVmdCA8PSBkaXN0UmlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChwcmVmZXJyZWRTaWRlID09PSAnbGVmdCcgJiYgbmVhckxlZnQgJiYgdGhpcy5jYW5Ecm9wT25TaWRlKCdsZWZ0JywgY2hhcm0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHNpZGU6ICdsZWZ0JywgY29yZFBvczogbGVmdFBvcyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJlZmVycmVkU2lkZSA9PT0gJ3JpZ2h0JyAmJiBuZWFyUmlnaHQgJiYgdGhpcy5jYW5Ecm9wT25TaWRlKCdyaWdodCcsIGNoYXJtKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzaWRlOiAncmlnaHQnLCBjb3JkUG9zOiByaWdodFBvcyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2lkZSA9IHRoaXMucGlja0F2YWlsYWJsZVNpZGUobmVhckxlZnQsIG5lYXJSaWdodCwgZGlzdExlZnQsIGRpc3RSaWdodCwgY2hhcm0sIHByZWZlckxlZnQpO1xyXG4gICAgICAgIGlmICghc2lkZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgIGNvcmRQb3M6IHNpZGUgPT09ICdsZWZ0JyA/IGxlZnRQb3MgOiByaWdodFBvcyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hTbmFwUG9zZShzaWRlOiBDb3JkU2lkZSk6IHsgcG9zOiBjYy5WZWMzOyBhbmdsZTogbnVtYmVyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2lkZSA9PT0gJ2xlZnQnID8gY2hpbGRyZW4ubGVmdCA6IGNoaWxkcmVuLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY29uc3QgbG9jYWwgPSBtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb3M6IGNjLnYzKGxvY2FsLngsIGxvY2FsLnksIDApLFxyXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5nZXRBbmdsZUluTm9kZVNwYWNlKHRhcmdldCwgbWFpbiksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERyYWdTbmFwUG9zZShtYWluUG9zOiBjYy5WZWMzKTogeyBwb3M6IGNjLlZlYzM7IGFuZ2xlOiBudW1iZXI7IHNpZGU6IENvcmRTaWRlIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzIHx8ICF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRNYWluID0gbWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihhbmNob3JzLmxlZnQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCByaWdodE1haW4gPSBtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvV29ybGRTcGFjZUFSKGFuY2hvcnMucmlnaHQpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdExlZnQgPSBjYy52MihtYWluUG9zLnggLSBsZWZ0TWFpbi54LCBtYWluUG9zLnkgLSBsZWZ0TWFpbi55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBkaXN0UmlnaHQgPSBjYy52MihtYWluUG9zLnggLSByaWdodE1haW4ueCwgbWFpblBvcy55IC0gcmlnaHRNYWluLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IG5lYXJMZWZ0ID0gZGlzdExlZnQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuICAgICAgICBjb25zdCBuZWFyUmlnaHQgPSBkaXN0UmlnaHQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuXHJcbiAgICAgICAgbGV0IHNpZGU6IENvcmRTaWRlID0gbnVsbDtcclxuICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuZHJhZ2dpbmdDaGFybTtcclxuICAgICAgICBpZiAoIWNoYXJtKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgY29yZExvY2FsID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICBtYWluLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihtYWluUG9zLngsIG1haW5Qb3MueSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luQW5jaG9yR2FwKGNvcmRMb2NhbCkpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBpZiAobmVhckxlZnQgfHwgbmVhclJpZ2h0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZlckxlZnQgPSBkaXN0TGVmdCA8PSBkaXN0UmlnaHQ7XHJcbiAgICAgICAgICAgIHNpZGUgPSB0aGlzLnBpY2tBdmFpbGFibGVTaWRlKG5lYXJMZWZ0LCBuZWFyUmlnaHQsIGRpc3RMZWZ0LCBkaXN0UmlnaHQsIGNoYXJtLCBwcmVmZXJMZWZ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2lkZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXAgPSB0aGlzLmdldExvY2FsQm94U25hcFBvc2Uoc2lkZSk7XHJcbiAgICAgICAgaWYgKHNuYXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcG9zOiBzbmFwLnBvcywgYW5nbGU6IHNuYXAuYW5nbGUsIHNpZGUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMb2NhbEJveFNpZGVDaGlsZHJlbigpOiB7IGxlZnQ6IGNjLk5vZGU7IHJpZ2h0OiBjYy5Ob2RlIH0gfCBudWxsIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxCb3ggfHwgdGhpcy5sb2NhbEJveC5jaGlsZHJlbkNvdW50IDwgMikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnRCeU5hbWUgPSB0aGlzLmxvY2FsQm94LmdldENoaWxkQnlOYW1lKCdsZWZ0Jyk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRCeU5hbWUgPSB0aGlzLmxvY2FsQm94LmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmIChsZWZ0QnlOYW1lICYmIHJpZ2h0QnlOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxlZnQ6IGxlZnRCeU5hbWUsIHJpZ2h0OiByaWdodEJ5TmFtZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2hpbGRBID0gdGhpcy5sb2NhbEJveC5jaGlsZHJlblswXTtcclxuICAgICAgICBjb25zdCBjaGlsZEIgPSB0aGlzLmxvY2FsQm94LmNoaWxkcmVuWzFdO1xyXG4gICAgICAgIHJldHVybiBjaGlsZEEueCA8PSBjaGlsZEIueFxyXG4gICAgICAgICAgICA/IHsgbGVmdDogY2hpbGRBLCByaWdodDogY2hpbGRCIH1cclxuICAgICAgICAgICAgOiB7IGxlZnQ6IGNoaWxkQiwgcmlnaHQ6IGNoaWxkQSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hIYW5nQW5nbGUoc2lkZTogQ29yZFNpZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRMb2NhbEJveFNpZGVDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBzaWRlID09PSAnbGVmdCcgPyBjaGlsZHJlbi5sZWZ0LmFuZ2xlIDogY2hpbGRyZW4ucmlnaHQuYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMb2NhbEJveEFuY2hvclBvc2l0aW9ucygpOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8ICF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NMZWZ0ID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICBjaGlsZHJlbi5sZWZ0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHBvc1JpZ2h0ID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICBjaGlsZHJlbi5yaWdodC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4geyBsZWZ0OiBwb3NMZWZ0LCByaWdodDogcG9zUmlnaHQgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvcmRBbmNob3JQb3NpdGlvbnMoKTogeyBsZWZ0OiBjYy5WZWMyOyByaWdodDogY2MuVmVjMiB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxCb3hBbmNob3JzID0gdGhpcy5nZXRMb2NhbEJveEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmIChsb2NhbEJveEFuY2hvcnMpIHJldHVybiBsb2NhbEJveEFuY2hvcnM7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5sZWZ0QW5jaG9yIHx8ICF0aGlzLnJpZ2h0QW5jaG9yKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBjYy52Mih0aGlzLmxlZnRBbmNob3IueCwgdGhpcy5sZWZ0QW5jaG9yLnkpLFxyXG4gICAgICAgICAgICByaWdodDogY2MudjIodGhpcy5yaWdodEFuY2hvci54LCB0aGlzLnJpZ2h0QW5jaG9yLnkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEtoZSBo4bufIGdp4buvYSAyIG5lbyDigJQga2jDtG5nIHBo4bqjaSB2w7luZyB0aOG6oyBjaGFybS4gKi9cclxuICAgIHByaXZhdGUgaXNJbkFuY2hvckdhcChsb2NhbDogY2MuVmVjMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGFuY2hvcnMubGVmdDtcclxuICAgICAgICBjb25zdCByaWdodCA9IGFuY2hvcnMucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgYW5jaG9yUmVhY2ggPSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzICogMC40O1xyXG4gICAgICAgIGNvbnN0IGRpc3RMZWZ0ID0gY2MudjIobG9jYWwueCAtIGxlZnQueCwgbG9jYWwueSAtIGxlZnQueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgZGlzdFJpZ2h0ID0gY2MudjIobG9jYWwueCAtIHJpZ2h0LngsIGxvY2FsLnkgLSByaWdodC55KS5tYWcoKTtcclxuXHJcbiAgICAgICAgaWYgKGRpc3RMZWZ0IDw9IGFuY2hvclJlYWNoIHx8IGRpc3RSaWdodCA8PSBhbmNob3JSZWFjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnYXBNaW5YID0gTWF0aC5taW4obGVmdC54LCByaWdodC54KSArIGFuY2hvclJlYWNoO1xyXG4gICAgICAgIGNvbnN0IGdhcE1heFggPSBNYXRoLm1heChsZWZ0LngsIHJpZ2h0LngpIC0gYW5jaG9yUmVhY2g7XHJcbiAgICAgICAgY29uc3QgdG9wWSA9IE1hdGgubWF4KGxlZnQueSwgcmlnaHQueSk7XHJcbiAgICAgICAgY29uc3QgaW5Ub3BCYW5kID0gbG9jYWwueSA+PSB0b3BZIC0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuXHJcbiAgICAgICAgcmV0dXJuIGluVG9wQmFuZCAmJiBsb2NhbC54ID49IGdhcE1pblggJiYgbG9jYWwueCA8PSBnYXBNYXhYO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RHJvcEFuY2hvckZvclNpZGUoc2lkZTogQ29yZFNpZGUsIGNoYXJtOiBjYy5Ob2RlKTogRHJvcEFuY2hvciB8IG51bGwge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5Ecm9wT25TaWRlKHNpZGUsIGNoYXJtKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgIGNvcmRQb3M6IHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBsYXRlQ2hhcm1BdChzY3JlZW5Qb3M6IGNjLlZlYzIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5wbGF0ZS5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLnBsYXRlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmFjdGl2ZSB8fCAhY2hpbGQuZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2hhcm1PbkNvcmQoY2hpbGQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBjaGlsZC5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICAgICAgaWYgKHJlY3QuY29udGFpbnMoc2NyZWVuUG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNDaGFybU9uQ29yZChjaGFybTogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jb3JkQ2hhcm1zW2ldO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuY2hhcm0gPT09IGNoYXJtIHx8IHN0YXRlLnBpdm90ID09PSBjaGFybSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjaGFybS5wYXJlbnQgPT09IHN0YXRlLnBpdm90KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvczogY2MuVmVjMik6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1haW5Ob2RlKCkuY29udmVydFRvTm9kZVNwYWNlQVIoc2NyZWVuUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1haW5Ob2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nIHx8IG5vZGUucGFyZW50Lm5hbWUgPT09ICdDYW52YXMnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nID8gbm9kZS5wYXJlbnQgOiBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQ29yZFJvdW5kTGlzdC5wYXJlbnQgfHwgdGhpcy5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGVmYXVsdEJyYWNlbGV0UmVmKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGNvbnN0IGNvcmRJZCA9IGdsb2JhbFRoaXMuaWRTdHJpbmcgfHwgMDtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QnJhY2VsZXRCeUNvcmQubGVuZ3RoID4gY29yZElkICYmIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2NvcmRJZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2NvcmRJZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmFjZWxldFJlZjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtSXRlbUNvbXAoY2hhcm06IGNjLk5vZGUpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjaGFybS5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpO1xyXG4gICAgICAgIGlmIChpdGVtKSByZXR1cm4gaXRlbTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcHMgPSBjaGFybS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjID0gY29tcHNbaV0gYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoYyAmJiB0eXBlb2YgYy50YWcgPT09ICdudW1iZXInICYmIHR5cGVvZiBjLmxvYWRJTUcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5mZXJDb3JkSWRGcm9tUmVmKHJlZjogY2MuTm9kZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgY29yZCA9IHRoaXMuZ2V0UmVmQ29yZE5vZGUocmVmKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gY29yZC5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgY29sb3JJZHM6IHsga2V5OiBzdHJpbmc7IGlkOiBudW1iZXIgfVtdID0gW1xyXG4gICAgICAgICAgICB7IGtleTogJ2JsYWNrJywgaWQ6IDAgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdibHVlJywgaWQ6IDEgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdncmVlbicsIGlkOiAyIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAncGluaycsIGlkOiAzIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAncHVycGxlJywgaWQ6IDQgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICd5ZWxsb3cnLCBpZDogNSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ3doaXRlJywgaWQ6IDYgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihjb2xvcklkc1tpXS5rZXkpID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcklkc1tpXS5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q29yZElkID49IDAgPyB0aGlzLmRlZmF1bHRDb3JkSWQgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZERlZmF1bHRNZXRhKHJlZjogY2MuTm9kZSk6IHsgY29yZElkOiBudW1iZXI7IGtleWNoYWluSW5kZXg6IG51bWJlciB9IHtcclxuICAgICAgICBjb25zdCBtZXRhID0gcmVmICYmIHJlZi5nZXRDb21wb25lbnQoJ0JyYWNlbGV0RGVmYXVsdE1ldGEnKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKG1ldGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcmRJZDogbWV0YS5jb3JkSWQsXHJcbiAgICAgICAgICAgICAgICBrZXljaGFpbkluZGV4OiBtZXRhLmtleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0Q29yZElkID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcmRJZDogdGhpcy5kZWZhdWx0Q29yZElkLFxyXG4gICAgICAgICAgICAgICAga2V5Y2hhaW5JbmRleDogdGhpcy5kZWZhdWx0S2V5Y2hhaW5JbmRleCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvcmRJZDogdGhpcy5pbmZlckNvcmRJZEZyb21SZWYocmVmKSxcclxuICAgICAgICAgICAga2V5Y2hhaW5JbmRleDogdGhpcy5kZWZhdWx0S2V5Y2hhaW5JbmRleCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FjaGVEZWZhdWx0TWV0YU9ubHkoKSB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpO1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLnJlYWREZWZhdWx0TWV0YShyZWYpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdENvcmRJZCA9IG1ldGEuY29yZElkO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXggPSBtZXRhLmtleWNoYWluSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWNoZURlZmF1bHRDb25maWcoYWN0aXZlQ29yZD86IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZkZvckNhY2hlKCk7XHJcbiAgICAgICAgaWYgKCFyZWYpIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NvcmRSb3VuZEdhbWVdIENoxrBhIGfDoW4gZGVmYXVsdEJyYWNlbGV0UmVmIOKAlCBraMO0bmcgdGjhu4Mgc28gc8OhbmggdsOybmcgbeG6q3UuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdExheW91dCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQgPSB0aGlzLmRlZmF1bHRDb3JkSWQgPj0gMCA/IHRoaXMuZGVmYXVsdENvcmRJZCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXggPSB0aGlzLmRlZmF1bHRLZXljaGFpbkluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb25maWdDYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMucmVhZERlZmF1bHRNZXRhKHJlZik7XHJcbiAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkID0gbWV0YS5jb3JkSWQ7XHJcbiAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleCA9IG1ldGEua2V5Y2hhaW5JbmRleDtcclxuICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQgPSB0aGlzLmJ1aWxkRGVmYXVsdExheW91dEZyb21SZWYocmVmLCBhY3RpdmVDb3JkKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRDb25maWdDYWNoZWQgPSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgY2MubG9nKCdbQ29yZFJvdW5kR2FtZV0gRGVmYXVsdCBjb25maWc6IGNvcmRJZD0nICsgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkXHJcbiAgICAgICAgICAgICsgJyAocGxheWVyPScgKyAoZ2xvYmFsVGhpcy5pZFN0cmluZyB8fCAwKSArICcpJ1xyXG4gICAgICAgICAgICArICcga2V5Y2hhaW49JyArIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXhcclxuICAgICAgICAgICAgKyAnIGNoYXJtcz0nICsgdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0Lmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEx1w7RuIHRy4bqjIHJlZiBt4bqrdSBj4buRIMSR4buLbmgg4oCUIGtow7RuZyBwaOG7pSB0aHXhu5ljIGTDonkgbmfGsOG7nWkgY2jGoWkgxJFhbmcgY2jhu41uLiAqL1xyXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QnJhY2VsZXRSZWYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0UmVmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRCcmFjZWxldEJ5Q29yZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRDb3JkSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRLZXljaGFpbkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFNjb3JlQnJlYWtkb3duKCk6IE1hdGNoU2NvcmVCcmVha2Rvd24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RTY29yZUJyZWFrZG93bjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlZkNvcmROb2RlKHJlZjogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmIChyZWYuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikpIHJldHVybiByZWY7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWYuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcmVmLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikpIHJldHVybiBjaGlsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlZjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlZkNvcmRBbmNob3JzKHJlZkNvcmQ6IGNjLk5vZGUpOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gcmVmQ29yZC5nZXRDaGlsZEJ5TmFtZSgnbGVmdCcpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gcmVmQ29yZC5nZXRDaGlsZEJ5TmFtZSgncmlnaHQnKTtcclxuICAgICAgICBpZiAoIWxlZnQgfHwgIXJpZ2h0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBjYy52MihsZWZ0LngsIGxlZnQueSksXHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYy52MihyaWdodC54LCByaWdodC55KSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UGF0aERhdGFGb3JDb3JkKGNvcmQ6IGNjLk5vZGUpOiBDb3JkUGF0aERhdGEgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuY29yZFBhdGhzLmdldChjb3JkKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcclxuXHJcbiAgICAgICAgY29uc3QgcmF3UG9pbnRzID0gdGhpcy5nZXRQb2x5Z29uQ29sbGlkZXJQb2ludHMoY29yZCk7XHJcbiAgICAgICAgaWYgKHJhd1BvaW50cy5sZW5ndGggPCAyKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcyA9IHRoaXMuc2FtcGxlQWxvbmdQYXRoKHJhd1BvaW50cywgdGhpcy5wYXRoU2FtcGxlU3BhY2luZyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9pbnRzOiBzYW1wbGVzLFxyXG4gICAgICAgICAgICB0b3RhbExlbmd0aDogdGhpcy5jYWxjUGF0aExlbmd0aChzYW1wbGVzKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29yZEFuY2hvcnMoY29yZDogY2MuTm9kZSk6IHsgbGVmdDogY2MuVmVjMjsgcmlnaHQ6IGNjLlZlYzIgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBjb3JkLmdldENoaWxkQnlOYW1lKCdsZWZ0Jyk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBjb3JkLmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmICghbGVmdCB8fCAhcmlnaHQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNjLnYyKGxlZnQueCwgbGVmdC55KSxcclxuICAgICAgICAgICAgcmlnaHQ6IGNjLnYyKHJpZ2h0LngsIHJpZ2h0LnkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUZW1wbGF0ZUNvcmQoY29yZElkPzogbnVtYmVyKTogY2MuTm9kZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGlkID0gY29yZElkICE9PSB1bmRlZmluZWQgPyBjb3JkSWQgOiB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLkNvcmRSb3VuZExpc3QgfHwgaWQgPCAwKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuW2lkXSB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVhc3VyZVBhdGhEaXN0YW5jZU9uQ29yZChcclxuICAgICAgICBjb3JkOiBjYy5Ob2RlLFxyXG4gICAgICAgIHBhdGg6IENvcmRQYXRoRGF0YSxcclxuICAgICAgICBhbmNob3JzOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0sXHJcbiAgICAgICAgc2lkZTogQ29yZFNpZGUsXHJcbiAgICAgICAgcG9zOiBjYy5WZWMyXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXIgPSB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzaWRlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXN0YW5jZUFsb25nUGF0aChwYXRoLnBvaW50cywgZW50cnlJbmRleCwgcGF0aERpciwgcG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkRGVmYXVsdExheW91dCgpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZ2V0RGVmYXVsdEJyYWNlbGV0UmVmRm9yQ2FjaGUoKSB8fCB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZigpO1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGREZWZhdWx0TGF5b3V0RnJvbVJlZihyZWYsIHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZERlZmF1bHRMYXlvdXRGcm9tUmVmKHJlZjogY2MuTm9kZSwgYWN0aXZlQ29yZD86IGNjLk5vZGUpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZkNvcmQgPSB0aGlzLmdldFJlZkNvcmROb2RlKHJlZik7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGVDb3JkID0gYWN0aXZlQ29yZCB8fCB0aGlzLmdldFRlbXBsYXRlQ29yZCgpO1xyXG4gICAgICAgIGlmICghdGVtcGxhdGVDb3JkKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBLaMO0bmcgdMOsbSB0aOG6pXkgZMOieSBnYW1lIMSR4buDIMSR4buNYyBsYXlvdXQgbeG6q3UuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGhEYXRhRm9yQ29yZCh0ZW1wbGF0ZUNvcmQpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JzKHRlbXBsYXRlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBEw6J5IGdhbWUgdGhp4bq/dSBQb2x5Z29uQ29sbGlkZXIgaG/hurdjIGFuY2hvciBsZWZ0L3JpZ2h0LicpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGFybVJvb3QgPSByZWYuZ2V0Q2hpbGRCeU5hbWUoJ2NoYXJtJykgfHwgcmVmO1xyXG4gICAgICAgIGNvbnN0IHNsb3RzOiBDaGFybVNsb3REYXRhW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFybVJvb3QuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJtID0gY2hhcm1Sb290LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRDaGFybUl0ZW1Db21wKGNoYXJtKTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc09uQ29yZCA9IHJlZkNvcmQuY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgICAgICBjaGFybS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGUgPSB0aGlzLnJlc29sdmVTaWRlRm9yUG9zaXRpb24ocG9zT25Db3JkLCBhbmNob3JzKTtcclxuICAgICAgICAgICAgY29uc3QgcGF0aERpc3RhbmNlID0gdGhpcy5tZWFzdXJlUGF0aERpc3RhbmNlT25Db3JkKFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVDb3JkLFxyXG4gICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgIGFuY2hvcnMsXHJcbiAgICAgICAgICAgICAgICBzaWRlLFxyXG4gICAgICAgICAgICAgICAgcG9zT25Db3JkXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBzbG90cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRhZzogaXRlbS50YWcsXHJcbiAgICAgICAgICAgICAgICBjb2xvckluZGV4OiBpdGVtLmNvbG9ySW5kZXggfHwgMCxcclxuICAgICAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgICAgICBwYXRoRGlzdGFuY2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xvdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlU2lkZUZvclBvc2l0aW9uKFxyXG4gICAgICAgIGNvcmRMb2NhbDogY2MuVmVjMixcclxuICAgICAgICBhbmNob3JzOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH1cclxuICAgICk6IENvcmRTaWRlIHtcclxuICAgICAgICBjb25zdCBkaXN0TGVmdCA9IGNjLnYyKGNvcmRMb2NhbC54IC0gYW5jaG9ycy5sZWZ0LngsIGNvcmRMb2NhbC55IC0gYW5jaG9ycy5sZWZ0LnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RSaWdodCA9IGNjLnYyKGNvcmRMb2NhbC54IC0gYW5jaG9ycy5yaWdodC54LCBjb3JkTG9jYWwueSAtIGFuY2hvcnMucmlnaHQueSkubWFnKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RMZWZ0IDw9IGRpc3RSaWdodCA/ICdsZWZ0JyA6ICdyaWdodCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFBsYXllckxheW91dCgpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGNvbnN0IHNsb3RzOiBDaGFybVNsb3REYXRhW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY29yZENoYXJtc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLmNoYXJtLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykgYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgc2xvdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0YWc6IGl0ZW0udGFnLFxyXG4gICAgICAgICAgICAgICAgY29sb3JJbmRleDogaXRlbS5jb2xvckluZGV4IHx8IDAsXHJcbiAgICAgICAgICAgICAgICBzaWRlOiBzdGF0ZS5zaWRlLFxyXG4gICAgICAgICAgICAgICAgcGF0aERpc3RhbmNlOiB0aGlzLmdldENoYXJtUGF0aERpc3RhbmNlKHN0YXRlKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbG90cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNsb3RQb3NlKHNsb3Q6IENoYXJtU2xvdERhdGEpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBhbmdsZTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAsIGFuZ2xlOiAwIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbnRyeSA9IHNsb3Quc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXIgPSB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzbG90LnNpZGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2VPblBhdGgocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHBhdGhEaXIsIHNsb3QucGF0aERpc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCkge1xyXG4gICAgICAgIHRoaXMuaGlkZURlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVkRGVmYXVsdExheW91dC5sZW5ndGggfHwgIXRoaXMuY2hhcm1MYXllcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZigpO1xyXG4gICAgICAgIGNvbnN0IGNoYXJtUm9vdCA9IHJlZiAmJiAocmVmLmdldENoaWxkQnlOYW1lKCdjaGFybScpIHx8IHJlZik7XHJcbiAgICAgICAgaWYgKCFjaGFybVJvb3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlldyA9IG5ldyBjYy5Ob2RlKCdkZWZhdWx0QnJhY2VsZXRQcmV2aWV3Jyk7XHJcbiAgICAgICAgcHJldmlldy5wYXJlbnQgPSB0aGlzLmNoYXJtTGF5ZXI7XHJcbiAgICAgICAgcHJldmlldy5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcblxyXG4gICAgICAgIGxldCBzcmNJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFybVJvb3QuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNoYXJtUm9vdC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKCFzcmMuZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChzcmNJbmRleCA+PSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQubGVuZ3RoKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXRbc3JjSW5kZXhdO1xyXG4gICAgICAgICAgICBzcmNJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBjYy5pbnN0YW50aWF0ZShzcmMpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NlID0gdGhpcy5nZXRTbG90UG9zZShzbG90KTtcclxuICAgICAgICAgICAgY2xvbmUucGFyZW50ID0gcHJldmlldztcclxuICAgICAgICAgICAgY2xvbmUuc2V0UG9zaXRpb24oY2MudjMocG9zZS54LCBwb3NlLnksIDApKTtcclxuICAgICAgICAgICAgY2xvbmUuYW5nbGUgPSBwb3NlLmFuZ2xlO1xyXG4gICAgICAgICAgICBjbG9uZS5vcGFjaXR5ID0gMTUwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGNsb25lLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkgYm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpZGVycyA9IGNsb25lLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc0NvbGxpZGVyKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xsaWRlcnMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyc1tjXS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdOb2RlID0gcHJldmlldztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRQcmV2aWV3Tm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Tm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdOb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFNvIHPDoW5oIGNoYXJtICgw4oCTMTAwJSwgY2jGsGEgZ+G7k20gZMOieSB2w6Aga2V5Y2hhaW4pLiAqL1xyXG4gICAgY29tcGFyZUNoYXJtc09ubHkoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHRoaXMuY2FjaGVkRGVmYXVsdExheW91dC5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgID8gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0XHJcbiAgICAgICAgICAgIDogdGhpcy5idWlsZERlZmF1bHRMYXlvdXQoKTtcclxuXHJcbiAgICAgICAgaWYgKGV4cGVjdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHRoaXMuYnVpbGRQbGF5ZXJMYXlvdXQoKTtcclxuICAgICAgICByZXR1cm4gY2FsY0NoYXJtTWF0Y2hQZXJjZW50KGV4cGVjdGVkLCBhY3R1YWwsIHRoaXMubWF0Y2hQb3NpdGlvblRvbGVyYW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTbyBzw6FuaCDEkeG6p3kgxJHhu6c6IGTDonkgKDMwJSkgKyBjaGFybSAoNTAlKSArIGtleWNoYWluICgyMCUpLlxyXG4gICAgICogR+G7jWkga2hpIMSRw6MgY8OzIGzhu7FhIGNo4buNbiBrZXljaGFpbiBj4bunYSBuZ8aw4budaSBjaMahaS5cclxuICAgICAqL1xyXG4gICAgY29tcGFyZUZ1bGwocGxheWVyS2V5Y2hhaW5JbmRleDogbnVtYmVyKTogTWF0Y2hTY29yZUJyZWFrZG93biB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpO1xyXG4gICAgICAgIGlmIChyZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0ID0gdGhpcy5idWlsZERlZmF1bHRMYXlvdXRGcm9tUmVmKHJlZiwgdGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0O1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHRoaXMuYnVpbGRQbGF5ZXJMYXlvdXQoKTtcclxuICAgICAgICBjb25zdCBhY3R1YWxDb3JkSWQgPSBnbG9iYWxUaGlzLmlkU3RyaW5nIHx8IDA7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duID0gY2FsY0Z1bGxTY29yZShcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkLFxyXG4gICAgICAgICAgICBhY3R1YWxDb3JkSWQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkLFxyXG4gICAgICAgICAgICBhY3R1YWwsXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIHBsYXllcktleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hQb3NpdGlvblRvbGVyYW5jZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sYXN0TWF0Y2hQZXJjZW50ID0gdGhpcy5sYXN0U2NvcmVCcmVha2Rvd24udG90YWw7XHJcblxyXG4gICAgICAgIGNjLmxvZygnW0NvcmRSb3VuZEdhbWVdIENvbXBhcmU6IGV4cGVjdGVkQ29yZD0nICsgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkXHJcbiAgICAgICAgICAgICsgJyBwbGF5ZXJDb3JkPScgKyBhY3R1YWxDb3JkSWRcclxuICAgICAgICAgICAgKyAnIGV4cGVjdGVkQ2hhcm1zPScgKyBleHBlY3RlZC5sZW5ndGhcclxuICAgICAgICAgICAgKyAnIHBsYXllckNoYXJtcz0nICsgYWN0dWFsLmxlbmd0aFxyXG4gICAgICAgICAgICArICcga2V5Y2hhaW49JyArIHBsYXllcktleWNoYWluSW5kZXhcclxuICAgICAgICAgICAgKyAnID0+ICcgKyB0aGlzLmxhc3RNYXRjaFBlcmNlbnQgKyAnJSdcclxuICAgICAgICAgICAgKyAnIChkw6J5ICcgKyB0aGlzLmxhc3RTY29yZUJyZWFrZG93bi5jb3JkU2NvcmVcclxuICAgICAgICAgICAgKyAnIGNoYXJtICcgKyB0aGlzLmxhc3RTY29yZUJyZWFrZG93bi5jaGFybVNjb3JlXHJcbiAgICAgICAgICAgICsgJyBrZXkgJyArIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duLmtleWNoYWluU2NvcmUgKyAnKScpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0U2NvcmVCcmVha2Rvd247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBkZXByZWNhdGVkIGTDuW5nIGNvbXBhcmVGdWxsICovXHJcbiAgICBjb21wYXJlV2l0aERlZmF1bHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlQ2hhcm1zT25seSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RNYXRjaFBlcmNlbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0TWF0Y2hQZXJjZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNYXRjaFJlc3VsdChwZXJjZW50PzogbnVtYmVyLCBicmVha2Rvd24/OiBNYXRjaFNjb3JlQnJlYWtkb3duKSB7XHJcbiAgICAgICAgY29uc3QgYmQgPSBicmVha2Rvd24gfHwgdGhpcy5sYXN0U2NvcmVCcmVha2Rvd247XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwZXJjZW50ICE9PSB1bmRlZmluZWQgPyBwZXJjZW50IDogdGhpcy5sYXN0TWF0Y2hQZXJjZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXRjaFJlc3VsdExhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hSZXN1bHRMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hSZXN1bHRMYWJlbC5zdHJpbmcgPSB2YWx1ZSArICclJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiZCkge1xyXG4gICAgICAgICAgICBjYy5sb2coJ1tDb3JkUm91bmRHYW1lXSBTY29yZTogJyArIHZhbHVlICsgJyUnXHJcbiAgICAgICAgICAgICAgICArICcgfCBjb3JkPScgKyBiZC5jb3JkU2NvcmVcclxuICAgICAgICAgICAgICAgICsgJyBjaGFybT0nICsgYmQuY2hhcm1TY29yZVxyXG4gICAgICAgICAgICAgICAgKyAnIGtleWNoYWluPScgKyBiZC5rZXljaGFpblNjb3JlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coJ1tDb3JkUm91bmRHYW1lXSBNYXRjaDogJyArIHZhbHVlICsgJyUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEfhu41pIGtoaSB4b25nIHjhur9wIGNoYXJtIOKAlCBjaOG7iSDhuqluIHByZXZpZXcsIGNoxrBhIHTDrW5oICUgY3Xhu5FpLiAqL1xyXG4gICAgZmluaXNoQnJhY2VsZXRQaGFzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEfhu41pIGtoaSBr4bq/dCB0aMO6YyBnYW1lIOKAlCB0w61uaCAlIMSR4bqneSDEkeG7pyB2w6AgaGnhu4NuIHRo4buLLiAqL1xyXG4gICAgZmluaXNoQW5kQ29tcGFyZShwbGF5ZXJLZXljaGFpbkluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuaGlkZURlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICBjb25zdCBicmVha2Rvd24gPSB0aGlzLmNvbXBhcmVGdWxsKHBsYXllcktleWNoYWluSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2hvd01hdGNoUmVzdWx0KGJyZWFrZG93bi50b3RhbCwgYnJlYWtkb3duKTtcclxuICAgICAgICByZXR1cm4gYnJlYWtkb3duLnRvdGFsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcm1TbGlkZSh0aGlzLmNvcmRDaGFybXNbaV0sIGR0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGF0ZVVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3RyYWluQ2hhcm1IYW5nKHRoaXMuY29yZENoYXJtc1tpXSwgZHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=