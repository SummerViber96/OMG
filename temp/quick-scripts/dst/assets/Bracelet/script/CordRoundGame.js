
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
        _this.slideGravity = 150;
        _this.maxSlideSpeed = 130;
        /** Vận tốc ban đầu khi vừa thả charm lên dây. */
        _this.dropSlideSpeed = 35;
        _this.pathPullStrength = 420;
        _this.pathPullDamping = 16;
        _this.settleSpeed = 22;
        _this.pivotColliderRadius = 8;
        _this.charmSlotSpacing = 130;
        /** Khoảng trống tối thiểu gần neo để cho phép thả charm. */
        _this.minAnchorDropGap = 60;
        _this.hangSwingLimit = 32;
        _this.hangOutwardStiffness = 14;
        /** Hãm tốc khi charm chen nhau (càng cao càng ít nẩy). */
        _this.charmCrowdDampingStrength = 16;
        /** Phần vận tốc còn lại khi rất đông (0.05 = gần như không đẩy nhau). */
        _this.charmCrowdPushRetention = 0.06;
        /** Số charm sát nhau (kể cả bản thân) để triệt tiêu lực trượt/va chạm. */
        _this.charmCrowdFullCancelCount = 6;
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
        _this.notiFull = null;
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
        _this.isDelay = false;
        _this.isTargetHind = null;
        return _this;
    }
    CordRoundGame.prototype.showNotiFull = function () {
        var _this = this;
        if (this.isDelay || !this.notiFull)
            return;
        this.isDelay = true;
        this.scheduleOnce(function () {
            _this.isDelay = false;
        }, 1);
        this.notiFull.active = true;
        var anim = this.notiFull.getComponent(cc.Animation);
        if (anim)
            anim.play();
    };
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
            if (this.shouldShowCordFullNoti(event.getLocation(), charmWorld, charm)) {
                this.showNotiFull();
            }
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
            pivotBody.linearVelocity = tangent.mul(this.dropSlideSpeed);
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
        pivotBody.linearDamping = 0.45;
        pivotBody.angularDamping = 1;
        pivotBody.fixedRotation = true;
        pivotBody.allowSleep = false;
        var pivotCol = pivot.getComponent(cc.PhysicsCircleCollider);
        if (!pivotCol) {
            pivotCol = pivot.addComponent(cc.PhysicsCircleCollider);
        }
        pivotCol.radius = this.pivotColliderRadius;
        pivotCol.friction = 0.65;
        pivotCol.restitution = 0;
        pivotCol.enabled = true;
        var charmBody = charm.getComponent(cc.RigidBody);
        if (!charmBody) {
            charmBody = charm.addComponent(cc.RigidBody);
        }
        charmBody.enabled = true;
        charmBody.active = true;
        charmBody.type = cc.RigidBodyType.Dynamic;
        charmBody.gravityScale = 0.85;
        charmBody.linearDamping = 0.45;
        charmBody.angularDamping = 0.75;
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
            collider.friction = 0.85;
            collider.restitution = 0;
            if (typeof collider.density === 'number') {
                collider.density = 0.35;
            }
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
        // Trượt hết cung xuống đáy, dừng trước neo đối diện (không qua khe hở).
        var stopMargin = Math.max(this.pivotColliderRadius * 2, this.minAnchorDropGap * 0.45);
        return Math.max(0, toOpposite - stopMargin);
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
    CordRoundGame.prototype.getCharmNeighborCount = function (state) {
        if (!state.pivot)
            return 0;
        var pos = cc.v2(state.pivot.x, state.pivot.y);
        var spacing = this.getCharmSlotSpacing(state.charm) * 0.6;
        var neighbors = 0;
        for (var i = 0; i < this.cordCharms.length; i++) {
            var other = this.cordCharms[i];
            if (other === state || !other.pivot)
                continue;
            var d = cc.v2(other.pivot.x - pos.x, other.pivot.y - pos.y).mag();
            if (d < spacing)
                neighbors++;
        }
        return neighbors;
    };
    CordRoundGame.prototype.getCharmCrowdInfo = function (state) {
        if (!state.pivot) {
            return { crowd: 0, neighbors: 0, packed: false, slideBlocked: false };
        }
        var pos = cc.v2(state.pivot.x, state.pivot.y);
        var spacing = this.getCharmSlotSpacing(state.charm) * 0.6;
        var packThreshold = Math.max(2, this.charmCrowdFullCancelCount - 1);
        var neighbors = 0;
        var overlapCrowd = 0;
        var maxNeighborPack = 0;
        for (var i = 0; i < this.cordCharms.length; i++) {
            var other = this.cordCharms[i];
            if (other === state || !other.pivot)
                continue;
            var d = cc.v2(other.pivot.x - pos.x, other.pivot.y - pos.y).mag();
            if (d >= spacing)
                continue;
            neighbors++;
            var overlap = 1 - d / spacing;
            overlapCrowd += overlap * overlap;
            maxNeighborPack = Math.max(maxNeighborPack, this.getCharmNeighborCount(other));
        }
        var countCrowd = Math.min(1, neighbors / packThreshold);
        var crowd = Math.max(countCrowd, Math.min(1, overlapCrowd));
        var packed = neighbors >= packThreshold;
        var slideBlocked = packed || maxNeighborPack >= packThreshold;
        return { crowd: crowd, neighbors: neighbors, packed: packed, slideBlocked: slideBlocked };
    };
    CordRoundGame.prototype.getCharmCrowdFactor = function (state) {
        return this.getCharmCrowdInfo(state).crowd;
    };
    CordRoundGame.prototype.getCrowdPushScale = function (crowd, slideBlocked) {
        if (slideBlocked === void 0) { slideBlocked = false; }
        if (slideBlocked)
            return 0;
        if (crowd <= 0)
            return 1;
        return this.charmCrowdPushRetention
            + (1 - this.charmCrowdPushRetention) * (1 - crowd);
    };
    CordRoundGame.prototype.correctCharmPivotOnPath = function (state, onAllowed, dt) {
        var body = state.pivot.getComponent(cc.RigidBody);
        if (!body)
            return;
        var pos = cc.v2(state.pivot.x, state.pivot.y);
        var dx = onAllowed.nearest.x - pos.x;
        var dy = onAllowed.nearest.y - pos.y;
        var offDist = Math.sqrt(dx * dx + dy * dy);
        var softLimit = this.segmentRadius * 1.2;
        var hardLimit = this.segmentRadius * 3.2;
        if (offDist <= softLimit)
            return;
        if (offDist >= hardLimit) {
            state.pivot.setPosition(cc.v3(onAllowed.nearest.x, onAllowed.nearest.y, 0));
            body.syncPosition(true);
            body.linearVelocity = cc.v2(0, 0);
            return;
        }
        var strength = state.settled ? 12 : 8;
        var t = Math.min(1, strength * dt);
        state.pivot.setPosition(cc.v3(pos.x + dx * t, pos.y + dy * t, 0));
        body.syncPosition(true);
    };
    CordRoundGame.prototype.dampCharmPivotCrowding = function (state, dt) {
        var pivotBody = state.pivot.getComponent(cc.RigidBody);
        if (!pivotBody)
            return;
        var crowdInfo = this.getCharmCrowdInfo(state);
        if (crowdInfo.crowd <= 0 && !crowdInfo.slideBlocked)
            return;
        if (crowdInfo.slideBlocked) {
            pivotBody.linearVelocity = cc.v2(0, 0);
            var charmBody_1 = state.charm.getComponent(cc.RigidBody);
            if (charmBody_1) {
                charmBody_1.linearVelocity = cc.v2(0, 0);
                charmBody_1.angularVelocity = 0;
            }
            if (!state.settled) {
                state.settled = true;
            }
            return;
        }
        var pushScale = this.getCrowdPushScale(crowdInfo.crowd, crowdInfo.slideBlocked);
        pivotBody.linearVelocity = pivotBody.linearVelocity.mul(pushScale);
        var charmBody = state.charm.getComponent(cc.RigidBody);
        if (charmBody) {
            charmBody.linearVelocity = charmBody.linearVelocity.mul(pushScale * 0.75);
            charmBody.angularVelocity *= pushScale;
        }
        var damp = Math.min(0.92, crowdInfo.crowd * this.charmCrowdDampingStrength * dt);
        pivotBody.linearVelocity = pivotBody.linearVelocity.mul(1 - damp);
        if (charmBody) {
            charmBody.linearVelocity = charmBody.linearVelocity.mul(1 - damp * 0.85);
        }
        this.cancelMutualPushVelocity(state, crowdInfo.crowd, crowdInfo.slideBlocked);
        if (state.settled && pivotBody.linearVelocity.mag() > 28) {
            pivotBody.linearVelocity = pivotBody.linearVelocity.mul(0.4);
        }
    };
    /** Triệt tiêu vận tốc đẩy vào nhau khi chen chúc. */
    CordRoundGame.prototype.cancelMutualPushVelocity = function (state, crowd, slideBlocked) {
        if (slideBlocked === void 0) { slideBlocked = false; }
        var pivotBody = state.pivot.getComponent(cc.RigidBody);
        if (!pivotBody || (crowd <= 0 && !slideBlocked))
            return;
        if (slideBlocked) {
            pivotBody.linearVelocity = cc.v2(0, 0);
            return;
        }
        var pos = cc.v2(state.pivot.x, state.pivot.y);
        var spacing = this.getCharmSlotSpacing(state.charm) * 0.6;
        var cancelX = 0;
        var cancelY = 0;
        var weight = 0;
        for (var i = 0; i < this.cordCharms.length; i++) {
            var other = this.cordCharms[i];
            if (other === state || !other.pivot)
                continue;
            var otherBody = other.pivot.getComponent(cc.RigidBody);
            if (!otherBody)
                continue;
            var offset = cc.v2(other.pivot.x - pos.x, other.pivot.y - pos.y);
            var dist = offset.mag();
            if (dist >= spacing || dist < 0.5)
                continue;
            var towardX = offset.x / dist;
            var towardY = offset.y / dist;
            var relVx = pivotBody.linearVelocity.x - otherBody.linearVelocity.x;
            var relVy = pivotBody.linearVelocity.y - otherBody.linearVelocity.y;
            var pushAlong = relVx * towardX + relVy * towardY;
            if (pushAlong <= 0)
                continue;
            var overlap = 1 - dist / spacing;
            var strength = overlap * overlap * crowd;
            cancelX += towardX * pushAlong * strength;
            cancelY += towardY * pushAlong * strength;
            weight += strength;
        }
        if (weight > 0) {
            pivotBody.linearVelocity = cc.v2(pivotBody.linearVelocity.x - cancelX, pivotBody.linearVelocity.y - cancelY);
        }
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
        if (inGap) {
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
        var tangent = this.getTangentAtIndex(path.points, onAllowed.index, state.pathDir);
        var crowdInfo = this.getCharmCrowdInfo(state);
        var crowd = crowdInfo.crowd;
        var slideBlocked = crowdInfo.slideBlocked;
        state.pathDistance = Math.max(0, Math.min(maxDist, onAllowed.pathDistance));
        if (!state.settled) {
            var toPathX = onAllowed.nearest.x - pos.x;
            var toPathY = onAllowed.nearest.y - pos.y;
            var tx = tangent.x;
            var ty = tangent.y;
            var nx = -ty;
            var ny = tx;
            var vel = body.linearVelocity;
            var vTangent = vel.x * tx + vel.y * ty;
            var vNormal = vel.x * nx + vel.y * ny;
            var offsetNormal = toPathX * nx + toPathY * ny;
            if (slideBlocked) {
                vTangent = 0;
                vNormal = 0;
                state.settled = true;
            }
            else {
                var newVTangent = vTangent + this.slideGravity * dt * (1 - crowd * 0.92);
                var newVNormal = vNormal
                    + offsetNormal * this.pathPullStrength * dt * (1 - crowd * 0.5)
                    - vNormal * this.pathPullDamping * dt;
                if (crowd > 0) {
                    var pushScale = this.getCrowdPushScale(crowd, slideBlocked);
                    newVNormal *= Math.max(0.05, pushScale * 0.35);
                    newVTangent *= Math.max(0.08, pushScale * 0.5);
                }
                vTangent = newVTangent;
                vNormal = newVNormal;
            }
            if (state.pathDistance <= this.pivotColliderRadius && vTangent < 0) {
                vTangent = 0;
            }
            if (state.pathDistance >= maxDist - this.pivotColliderRadius && vTangent > 0) {
                vTangent = 0;
            }
            var vx = tx * vTangent + nx * vNormal;
            var vy = ty * vTangent + ny * vNormal;
            var speed_1 = Math.sqrt(vx * vx + vy * vy);
            var crowdSpeedCap = slideBlocked ? 0 : this.maxSlideSpeed * (1 - crowd * 0.75);
            if (speed_1 > crowdSpeedCap && crowdSpeedCap >= 0) {
                var scale = crowdSpeedCap / speed_1;
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
            var toPathX = onAllowed.nearest.x - pos.x;
            var toPathY = onAllowed.nearest.y - pos.y;
            var holdDamp = this.pathPullDamping * (1.5 + crowd);
            body.linearVelocity = cc.v2(body.linearVelocity.x + toPathX * this.pathPullStrength * dt * 0.35 - body.linearVelocity.x * holdDamp * dt, body.linearVelocity.y + toPathY * this.pathPullStrength * dt * 0.35 - body.linearVelocity.y * holdDamp * dt);
            var offset = Math.sqrt(toPathX * toPathX + toPathY * toPathY);
            if (offset < 1.5 && body.linearVelocity.mag() < 8) {
                body.linearVelocity = cc.v2(0, 0);
                state.pivot.setPosition(cc.v3(onAllowed.nearest.x, onAllowed.nearest.y, 0));
                body.syncPosition(true);
            }
        }
        this.enforceCharmSlideBounds(state, onAllowed, tangent, maxDist);
    };
    CordRoundGame.prototype.postPhysicsCharmSlideFix = function (state, dt) {
        var body = state.pivot.getComponent(cc.RigidBody);
        var path = this.cordPaths.get(this.activeCord);
        if (!body || !path)
            return;
        var pos = cc.v2(state.pivot.x, state.pivot.y);
        var maxDist = this.getMaxSlideDistance(state);
        var onAllowed = this.getNearestOnAllowedSlidePath(state, pos);
        state.pathDistance = Math.max(0, Math.min(maxDist, onAllowed.pathDistance));
        if (this.isInAnchorGap(pos)) {
            var entry = this.getSlideEntryAnchor(state.side);
            var clampPos = entry || onAllowed.nearest;
            state.pivot.setPosition(cc.v3(clampPos.x, clampPos.y, 0));
            body.syncPosition(true);
            body.linearVelocity = cc.v2(0, 0);
            return;
        }
        this.correctCharmPivotOnPath(state, onAllowed, dt);
        this.dampCharmPivotCrowding(state, dt);
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
    /** Chỉ thả được khi vùng neo đủ trống — kiểm tra charm nào đang chiếm gần neo đó. */
    CordRoundGame.prototype.canDropOnSide = function (side, charm) {
        var anchors = this.getCordAnchorPositions();
        if (!anchors)
            return false;
        var anchorPos = side === 'left' ? anchors.left : anchors.right;
        var requiredGap = this.getRequiredAnchorGap(charm);
        var zoneRadius = this.getAnchorDropZoneRadius();
        var closestPathDist = Number.MAX_VALUE;
        for (var i = 0; i < this.cordCharms.length; i++) {
            var state = this.cordCharms[i];
            if (!state.pivot)
                continue;
            var pos = cc.v2(state.pivot.x, state.pivot.y);
            var distToAnchor = cc.v2(pos.x - anchorPos.x, pos.y - anchorPos.y).mag();
            if (distToAnchor < zoneRadius) {
                return false;
            }
            if (distToAnchor < this.entryDetectRadius) {
                var pathDist = this.measurePathDistanceFromEntry(side, pos);
                if (pathDist < closestPathDist) {
                    closestPathDist = pathDist;
                }
            }
        }
        return closestPathDist >= requiredGap;
    };
    CordRoundGame.prototype.screenToWorldOnMain = function (screenPos) {
        var main = this.getMainNode();
        var local = main.convertToNodeSpaceAR(screenPos);
        return main.convertToWorldSpaceAR(local);
    };
    CordRoundGame.prototype.getCordAnchorAttempt = function (worldPos) {
        var anchors = this.getCordAnchorPositions();
        if (!anchors || !this.activeCord)
            return null;
        var local = this.activeCord.convertToNodeSpaceAR(worldPos);
        if (this.isInAnchorGap(local))
            return null;
        var distLeft = cc.v2(local.x - anchors.left.x, local.y - anchors.left.y).mag();
        var distRight = cc.v2(local.x - anchors.right.x, local.y - anchors.right.y).mag();
        var nearLeft = distLeft <= this.entryDetectRadius;
        var nearRight = distRight <= this.entryDetectRadius;
        if (!nearLeft && !nearRight)
            return null;
        return { nearLeft: nearLeft, nearRight: nearRight };
    };
    /** Không còn chỗ thả ở neo trái/phải. */
    CordRoundGame.prototype.isCordFullForCharm = function (charm) {
        return !this.canDropOnSide('left', charm) && !this.canDropOnSide('right', charm);
    };
    CordRoundGame.prototype.shouldShowCordFullNoti = function (screenPos, charmWorld, charm) {
        var touchWorld = this.screenToWorldOnMain(screenPos);
        var attempt = this.getCordAnchorAttempt(charmWorld)
            || this.getCordAnchorAttempt(touchWorld);
        if (!attempt)
            return false;
        if (this.isCordFullForCharm(charm))
            return true;
        if (attempt.nearLeft && !this.canDropOnSide('left', charm))
            return true;
        if (attempt.nearRight && !this.canDropOnSide('right', charm))
            return true;
        return false;
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
            this.postPhysicsCharmSlideFix(this.cordCharms[i], dt);
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
    ], CordRoundGame.prototype, "dropSlideSpeed", void 0);
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
        property
    ], CordRoundGame.prototype, "charmCrowdDampingStrength", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "charmCrowdPushRetention", void 0);
    __decorate([
        property
    ], CordRoundGame.prototype, "charmCrowdFullCancelCount", void 0);
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
    ], CordRoundGame.prototype, "notiFull", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ29yZFJvdW5kR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkc7QUFFdkcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUEwQjVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBeWlFQztRQXRpRUcsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyx1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFHL0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFHM0Isa0JBQVksR0FBVyxHQUFHLENBQUM7UUFHM0IsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsaURBQWlEO1FBRWpELG9CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRzVCLHNCQUFnQixHQUFXLEdBQUcsQ0FBQztRQUcvQixxQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUc3QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd6Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFHaEMsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBRS9CLDREQUE0RDtRQUU1RCxzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFHOUIsb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFHNUIsMEJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBRWxDLDBEQUEwRDtRQUUxRCwrQkFBeUIsR0FBVyxFQUFFLENBQUM7UUFFdkMseUVBQXlFO1FBRXpFLDZCQUF1QixHQUFXLElBQUksQ0FBQztRQUV2QywwRUFBMEU7UUFFMUUsK0JBQXlCLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMs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UUFEQyxRQUFRO3lEQUNtQjtJQUc1QjtRQURDLFFBQVE7K0RBQ3lCO0lBSWxDO1FBREMsUUFBUTtvRUFDOEI7SUFJdkM7UUFEQyxRQUFRO2tFQUM4QjtJQUl2QztRQURDLFFBQVE7b0VBQzZCO0lBa0J0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNPO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ2lCO0lBSW5DO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dFQUNrQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJEQUNlO0lBR2xDO1FBREMsUUFBUTtpRUFDMkI7SUFHcEM7UUFEQyxRQUFROzZEQUMwQjtJQUluQztRQURDLFFBQVE7d0RBQ2lCO0lBSTFCO1FBREMsUUFBUTsrREFDd0I7SUFqSGhCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F5aUVqQztJQUFELG9CQUFDO0NBemlFRCxBQXlpRUMsQ0F6aUUwQyxFQUFFLENBQUMsU0FBUyxHQXlpRXREO2tCQXppRW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxjQ2hhcm1NYXRjaFBlcmNlbnQsIGNhbGNGdWxsU2NvcmUsIENoYXJtU2xvdERhdGEsIE1hdGNoU2NvcmVCcmVha2Rvd24gfSBmcm9tICcuL0JyYWNlbGV0TWF0Y2hlcic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxudHlwZSBDb3JkU2lkZSA9ICdsZWZ0JyB8ICdyaWdodCc7XHJcblxyXG5pbnRlcmZhY2UgQ29yZFBhdGhEYXRhIHtcclxuICAgIHBvaW50czogY2MuVmVjMltdO1xyXG4gICAgdG90YWxMZW5ndGg6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvcmRDaGFybVN0YXRlIHtcclxuICAgIHBpdm90OiBjYy5Ob2RlO1xyXG4gICAgY2hhcm06IGNjLk5vZGU7XHJcbiAgICBzZXR0bGVkOiBib29sZWFuO1xyXG4gICAgc3RpbGxUaW1lOiBudW1iZXI7XHJcbiAgICBzaWRlOiBDb3JkU2lkZTtcclxuICAgIHBhdGhTdGFydEluZGV4OiBudW1iZXI7XHJcbiAgICBwYXRoRGlyOiBudW1iZXI7XHJcbiAgICBwYXRoRGlzdGFuY2U6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIERyb3BBbmNob3Ige1xyXG4gICAgc2lkZTogQ29yZFNpZGU7XHJcbiAgICBjb3JkUG9zOiBjYy5WZWMyO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JkUm91bmRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENvcmRSb3VuZExpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFybUhpbmQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBlbnRyeURldGVjdFJhZGl1czogbnVtYmVyID0gMTEwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGF0aFNhbXBsZVNwYWNpbmc6IG51bWJlciA9IDEyO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2VnbWVudFJhZGl1czogbnVtYmVyID0gMTQ7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzbGlkZUdyYXZpdHk6IG51bWJlciA9IDE1MDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heFNsaWRlU3BlZWQ6IG51bWJlciA9IDEzMDtcclxuXHJcbiAgICAvKiogVuG6rW4gdOG7kWMgYmFuIMSR4bqndSBraGkgduG7q2EgdGjhuqMgY2hhcm0gbMOqbiBkw6J5LiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkcm9wU2xpZGVTcGVlZDogbnVtYmVyID0gMzU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwYXRoUHVsbFN0cmVuZ3RoOiBudW1iZXIgPSA0MjA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwYXRoUHVsbERhbXBpbmc6IG51bWJlciA9IDE2O1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2V0dGxlU3BlZWQ6IG51bWJlciA9IDIyO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGl2b3RDb2xsaWRlclJhZGl1czogbnVtYmVyID0gODtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGNoYXJtU2xvdFNwYWNpbmc6IG51bWJlciA9IDEzMDtcclxuXHJcbiAgICAvKiogS2hv4bqjbmcgdHLhu5FuZyB04buRaSB0aGnhu4N1IGfhuqduIG5lbyDEkeG7gyBjaG8gcGjDqXAgdGjhuqMgY2hhcm0uICovXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1pbkFuY2hvckRyb3BHYXA6IG51bWJlciA9IDYwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaGFuZ1N3aW5nTGltaXQ6IG51bWJlciA9IDMyO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaGFuZ091dHdhcmRTdGlmZm5lc3M6IG51bWJlciA9IDE0O1xyXG5cclxuICAgIC8qKiBIw6NtIHThu5FjIGtoaSBjaGFybSBjaGVuIG5oYXUgKGPDoG5nIGNhbyBjw6BuZyDDrXQgbuG6qXkpLiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjaGFybUNyb3dkRGFtcGluZ1N0cmVuZ3RoOiBudW1iZXIgPSAxNjtcclxuXHJcbiAgICAvKiogUGjhuqduIHbhuq1uIHThu5FjIGPDsm4gbOG6oWkga2hpIHLhuqV0IMSRw7RuZyAoMC4wNSA9IGfhuqduIG5oxrAga2jDtG5nIMSR4bqpeSBuaGF1KS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY2hhcm1Dcm93ZFB1c2hSZXRlbnRpb246IG51bWJlciA9IDAuMDY7XHJcblxyXG4gICAgLyoqIFPhu5EgY2hhcm0gc8OhdCBuaGF1IChr4buDIGPhuqMgYuG6o24gdGjDom4pIMSR4buDIHRyaeG7h3QgdGnDqnUgbOG7sWMgdHLGsOG7o3QvdmEgY2jhuqFtLiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjaGFybUNyb3dkRnVsbENhbmNlbENvdW50OiBudW1iZXIgPSA2O1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlQ29yZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvcmRQYXRoczogTWFwPGNjLk5vZGUsIENvcmRQYXRoRGF0YT4gPSBuZXcgTWFwKCk7XHJcbiAgICBwcml2YXRlIHByZXBhcmVkQ29yZHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBsZWZ0QW5jaG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgcmlnaHRBbmNob3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjaGFybUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29yZENoYXJtczogQ29yZENoYXJtU3RhdGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBkcmFnZ2luZ0NoYXJtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHJhZ1NuYXBTaWRlOiBDb3JkU2lkZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdPcmlnaW5QYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3JpZ2luUG9zOiBjYy5WZWMzID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHJhZ09yaWdpblNpYmxpbmdJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYWN0aXZlVG91Y2hJZDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRvdWNoQm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERyb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuT2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vdGlGdWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKiogTm9kZSB0aGFtIGNoaeG6v3UgdsOybmcgbeG6q3UgKHZkOiBkZWZhdWx0Q2hhcm0gdHJvbmcgc2NlbmUpLiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkZWZhdWx0QnJhY2VsZXRSZWY6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8qKiBWw7JuZyBt4bqrdSB0aGVvIHThu6tuZyBsb+G6oWkgZMOieSAoaW5kZXggPSBpZFN0cmluZykuIMavdSB0acOqbiBoxqFuIGRlZmF1bHRCcmFjZWxldFJlZi4gKi9cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBkZWZhdWx0QnJhY2VsZXRCeUNvcmQ6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1hdGNoUmVzdWx0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1hdGNoUG9zaXRpb25Ub2xlcmFuY2U6IG51bWJlciA9IDgwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2hvd0RlZmF1bHRQcmV2aWV3OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRMOieSBt4bqrdSDEkcO6bmcgKHZkOiAyID0gZ3JlZW4pLiDEkMO6bmcgbcOgdSBkw6J5IMSRxrDhu6NjICszMCUuIC0xID0gxJFvw6FuIHThu6sgdMOqbiBjb3JkIChraMO0bmcgdGluIGPhuq15KS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVmYXVsdENvcmRJZDogbnVtYmVyID0gMjtcclxuXHJcbiAgICAvKiogS2V5Y2hhaW4gxJHDum5nIChmYWxsYmFjayBraGkgY2jGsGEgZ+G6r24gQnJhY2VsZXREZWZhdWx0TWV0YSkuICovXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRlZmF1bHRLZXljaGFpbkluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGxvY2FsQm94ID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBjYWNoZWREZWZhdWx0TGF5b3V0OiBDaGFybVNsb3REYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgY2FjaGVkRGVmYXVsdENvcmRJZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRDb25maWdDYWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZGVmYXVsdFByZXZpZXdOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgbGFzdE1hdGNoUGVyY2VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbGFzdFNjb3JlQnJlYWtkb3duOiBNYXRjaFNjb3JlQnJlYWtkb3duID0gbnVsbDtcclxuICAgIGlzRGVsYXk9ZmFsc2VcclxuICAgIHNob3dOb3RpRnVsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGF5IHx8ICF0aGlzLm5vdGlGdWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0RlbGF5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWxheSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5ub3RpRnVsbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGFuaW0gPSB0aGlzLm5vdGlGdWxsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGlmIChhbmltKSBhbmltLnBsYXkoKTtcclxuICAgIH1cclxuICAgIGxpZnRCcmFjZWxldCh0YXJnZXRQb3M6IGNjLlZlYzMsIGR1cmF0aW9uOiBudW1iZXIgPSAwLjQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuQ29yZFJvdW5kTGlzdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZGllczogY2MuUmlnaWRCb2R5W10gPSBbXTtcclxuICAgICAgICBjb25zdCBjb2xsZWN0Qm9kaWVzID0gKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2RpZXMucHVzaChib2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0Qm9kaWVzKG5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb2xsZWN0Qm9kaWVzKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBib2RpZXNbaV07XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLktpbmVtYXRpYztcclxuICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzeW5jQm9kaWVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYm9kaWVzW2ldLnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJvZGllc1tpXS5zeW5jUm90YXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0sIHsgb25VcGRhdGU6IHN5bmNCb2RpZXMgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3luY0JvZGllcygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIGlzVGFyZ2V0SGluZCA9IG51bGxcclxuXHJcbiAgICBzZXRIaW5kKGNoYXJtKSB7XHJcbiAgICAgICAgbGV0IHRhZyA9IGNoYXJtLmdldENvbXBvbmVudChcIkNoYXJtSXRlbVwiKS50YWdcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0SGluZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0SGluZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFybUhpbmQuY2hpbGRyZW5bdGFnXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRIaW5kID0gdGhpcy5jaGFybUhpbmQuY2hpbGRyZW5bdGFnXTtcclxuICAgICAgICBsZXQgY29sb3JJTUcgPSBjaGFybS5nZXRDb21wb25lbnQoXCJDaGFybUl0ZW1cIikuZ2V0Q29sb3IoKTtcclxuICAgICAgICB0aGlzLmNoYXJtSGluZC5jaGlsZHJlblt0YWddLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gY29sb3JJTUc7XHJcbiAgICAgICAgdGhpcy5jaGFybUhpbmQuY2hpbGRyZW5bdGFnXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGNvbG9ySU1HO1xyXG4gICAgICAgIHRoaXMubG9jYWxCb3ggPSB0aGlzLmNoYXJtSGluZC5jaGlsZHJlblt0YWddO1xyXG4gICAgfVxyXG4gICAgc3RhcnRCcmFjZWxldE1vZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLkNvcmRSb3VuZExpc3QpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJlc29sdmVSZWZlcmVuY2VzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ29yZCA9IHRoaXMuQ29yZFJvdW5kTGlzdC5jaGlsZHJlbltnbG9iYWxUaGlzLmlkU3RyaW5nXTtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlQ29yZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnRBbmNob3IgPSB0aGlzLmFjdGl2ZUNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ2xlZnQnKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QW5jaG9yID0gdGhpcy5hY3RpdmVDb3JkLmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmICghdGhpcy5sZWZ0QW5jaG9yIHx8ICF0aGlzLnJpZ2h0QW5jaG9yKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBDb3JkIGlzIG1pc3NpbmcgbGVmdC9yaWdodCBhbmNob3Igbm9kZXMuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKDAsIC01MjApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDb3JkKHRoaXMuQ29yZFJvdW5kTGlzdC5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5zdXJlQ2hhcm1MYXllcigpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVEZWZhdWx0Q29uZmlnKHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0RlZmF1bHRQcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0RlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iaW5kVG91Y2goKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gQ2jhu4kgxJHhu41jIG1ldGEgc+G7m207IGxheW91dCBjaGFybSBz4bq9IGJ1aWxkIGzhuqFpIGtoaSB2w6BvIGdhbWUgduG7m2kgYWN0aXZlQ29yZC5cclxuICAgICAgICB0aGlzLmNhY2hlRGVmYXVsdE1ldGFPbmx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmVwYXJlQ29yZChjb3JkOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJlcGFyZWRDb3Jkcy5pbmRleE9mKGNvcmQpID49IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmF3UG9pbnRzID0gdGhpcy5nZXRQb2x5Z29uQ29sbGlkZXJQb2ludHMoY29yZCk7XHJcbiAgICAgICAgaWYgKHJhd1BvaW50cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBDb3JkIFwiJyArIGNvcmQubmFtZSArICdcIiBuZWVkcyBjYy5Qb2x5Z29uQ29sbGlkZXIuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbXBsZXMgPSB0aGlzLnNhbXBsZUFsb25nUGF0aChyYXdQb2ludHMsIHRoaXMucGF0aFNhbXBsZVNwYWNpbmcpO1xyXG4gICAgICAgIHRoaXMuY29yZFBhdGhzLnNldChjb3JkLCB7XHJcbiAgICAgICAgICAgIHBvaW50czogc2FtcGxlcyxcclxuICAgICAgICAgICAgdG90YWxMZW5ndGg6IHRoaXMuY2FsY1BhdGhMZW5ndGgoc2FtcGxlcyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBDb3JkUGh5c2ljcyhjb3JkLCBzYW1wbGVzKTtcclxuICAgICAgICB0aGlzLnByZXBhcmVkQ29yZHMucHVzaChjb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBvbHlnb25Db2xsaWRlclBvaW50cyhjb3JkOiBjYy5Ob2RlKTogY2MuVmVjMltdIHtcclxuICAgICAgICBjb25zdCBwb2x5ID0gY29yZC5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIXBvbHkgfHwgIXBvbHkucG9pbnRzIHx8IHBvbHkucG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcG9seS5vZmZzZXQgfHwgY2MudjIoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHBvbHkucG9pbnRzLm1hcChwID0+IGNjLnYyKHAueCArIG9mZnNldC54LCBwLnkgKyBvZmZzZXQueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBDb3JkUGh5c2ljcyhjb3JkOiBjYy5Ob2RlLCBzYW1wbGVzOiBjYy5WZWMyW10pIHtcclxuICAgICAgICBsZXQgYm9keSA9IGNvcmQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkgPSBjb3JkLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICBib2R5LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTZWdtZW50Q29sbGlkZXJzKGNvcmQpO1xyXG5cclxuICAgICAgICBjb25zdCBzcGFjaW5nID0gTWF0aC5tYXgodGhpcy5wYXRoU2FtcGxlU3BhY2luZyAqIDEuNSwgMTYpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyUG9pbnRzID0gc2FtcGxlcy5sZW5ndGggPiA4MFxyXG4gICAgICAgICAgICA/IHRoaXMuc2FtcGxlQWxvbmdQYXRoKHNhbXBsZXMsIHNwYWNpbmcpXHJcbiAgICAgICAgICAgIDogc2FtcGxlcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlclBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBjb3JkLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICBjb2wub2Zmc2V0ID0gY29sbGlkZXJQb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbC5yYWRpdXMgPSB0aGlzLnNlZ21lbnRSYWRpdXM7XHJcbiAgICAgICAgICAgIGNvbC5mcmljdGlvbiA9IDAuMzU7XHJcbiAgICAgICAgICAgIGNvbC5yZXN0aXR1dGlvbiA9IDAuMDU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2FtcGxlQWxvbmdQYXRoKHBvaW50czogY2MuVmVjMltdLCBzcGFjaW5nOiBudW1iZXIpOiBjYy5WZWMyW10ge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjYXJyeSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbKGkgKyAxKSAlIHBvaW50cy5sZW5ndGhdO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ0xlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChzZWdMZW4gPD0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXJYID0gZHggLyBzZWdMZW47XHJcbiAgICAgICAgICAgIGNvbnN0IGRpclkgPSBkeSAvIHNlZ0xlbjtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBjYXJyeTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChkaXN0IDwgc2VnTGVuKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goY2MudjIoYS54ICsgZGlyWCAqIGRpc3QsIGEueSArIGRpclkgKiBkaXN0KSk7XHJcbiAgICAgICAgICAgICAgICBkaXN0ICs9IHNwYWNpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FycnkgPSBkaXN0IC0gc2VnTGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNhbXBsZXMubGVuZ3RoID4gMCA/IHNhbXBsZXMgOiBwb2ludHMuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGNQYXRoTGVuZ3RoKHBvaW50czogY2MuVmVjMltdKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzWyhpICsgMSkgJSBwb2ludHMubGVuZ3RoXTtcclxuICAgICAgICAgICAgbGVuICs9IGNjLnYyKGIueCAtIGEueCwgYi55IC0gYS55KS5tYWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyU2VnbWVudENvbGxpZGVycyhjb3JkOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IGNvcmQuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjaXJjbGVzW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbnN1cmVDaGFybUxheWVyKCkge1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuYWN0aXZlQ29yZC5nZXRDaGlsZEJ5TmFtZSgnY2hhcm1zT25Db3JkJyk7XHJcbiAgICAgICAgaWYgKCFsYXllcikge1xyXG4gICAgICAgICAgICBsYXllciA9IG5ldyBjYy5Ob2RlKCdjaGFybXNPbkNvcmQnKTtcclxuICAgICAgICAgICAgbGF5ZXIucGFyZW50ID0gdGhpcy5hY3RpdmVDb3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJtTGF5ZXIgPSBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc29sdmVSZWZlcmVuY2VzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBraGF5ID0gbWFpbi5nZXRDaGlsZEJ5TmFtZSgna2hheScpO1xyXG4gICAgICAgICAgICBpZiAoa2hheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0ZSA9IGtoYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kVG91Y2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG91Y2hCb3VuZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudG91Y2hCb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdWNoTm9kZSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgdGhpcy5kcmFnZ2luZ0NoYXJtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gdGhpcy5nZXRQbGF0ZUNoYXJtQXQoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgaWYgKCFjaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSBldmVudC5nZXRJRCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnREcmFnKGNoYXJtLCBldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB0aGlzLnNldEhpbmQoY2hhcm0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCBldmVudC5nZXRJRCgpICE9PSB0aGlzLmFjdGl2ZVRvdWNoSWQgfHwgIXRoaXMuZHJhZ2dpbmdDaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMuZ2V0TWFpbkxvY2FsUG9zKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGNvbnN0IHNuYXAgPSB0aGlzLmdldERyYWdTbmFwUG9zZSh0b3VjaFBvcyk7XHJcbiAgICAgICAgLy8gaWYgKHNuYXApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLnNldFBvc2l0aW9uKHNuYXAucG9zKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLmFuZ2xlID0gc25hcC5hbmdsZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmFnU25hcFNpZGUgPSBzbmFwLnNpZGU7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLmFuZ2xlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kcmFnU25hcFNpZGUgPSBudWxsO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgZXZlbnQuZ2V0SUQoKSAhPT0gdGhpcy5hY3RpdmVUb3VjaElkIHx8ICF0aGlzLmRyYWdnaW5nQ2hhcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhcm0gPSB0aGlzLmRyYWdnaW5nQ2hhcm07XHJcbiAgICAgICAgY29uc3QgY2hhcm1Xb3JsZCA9IGNoYXJtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGRyb3BBbmNob3IgPSB0aGlzLnJlc29sdmVEcm9wQW5jaG9yKGNoYXJtV29ybGQsIHRoaXMuZHJhZ1NuYXBTaWRlLCBjaGFybSk7XHJcbiAgICAgICAgaWYgKGRyb3BBbmNob3IgJiYgdGhpcy50aHJlYWRDaGFybU9udG9Db3JkKGNoYXJtLCBkcm9wQW5jaG9yKSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmREcm9wLCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5oaWRlRGVmYXVsdEJyYWNlbGV0UHJldmlldygpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bk9rLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldERyYWdnZWRDaGFybShjaGFybSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFNob3dDb3JkRnVsbE5vdGkoZXZlbnQuZ2V0TG9jYXRpb24oKSwgY2hhcm1Xb3JsZCwgY2hhcm0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpRnVsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZHJhZ1NuYXBTaWRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSAtMTtcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEhpbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEhpbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRIaW5kID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENoYXJtUGxhdGVQaHlzaWNzKGNoYXJtOiBjYy5Ob2RlLCBlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBpZiAoZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IGNoYXJtLmdldENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoY29sbGlkZXIpIHtcclxuICAgICAgICAgICAgY29sbGlkZXIuZW5hYmxlZCA9IGVuYWJsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnREcmFnKGNoYXJtOiBjYy5Ob2RlLCBzY3JlZW5Qb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0gPSBjaGFybTtcclxuICAgICAgICB0aGlzLmRyYWdPcmlnaW5QYXJlbnQgPSBjaGFybS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5kcmFnT3JpZ2luUG9zID0gY2hhcm0ucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICB0aGlzLmRyYWdPcmlnaW5TaWJsaW5nSW5kZXggPSBjaGFybS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDaGFybVBsYXRlUGh5c2ljcyhjaGFybSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGNoYXJtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gbWFpbjtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbihtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKSk7XHJcbiAgICAgICAgY2hhcm0uc2V0U2libGluZ0luZGV4KG1haW4uY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKHRoaXMuZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXREcmFnZ2VkQ2hhcm0oY2hhcm06IGNjLk5vZGUpIHtcclxuICAgICAgICBjaGFybS5wYXJlbnQgPSB0aGlzLmRyYWdPcmlnaW5QYXJlbnQ7XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24odGhpcy5kcmFnT3JpZ2luUG9zKTtcclxuICAgICAgICBjaGFybS5zZXRTaWJsaW5nSW5kZXgodGhpcy5kcmFnT3JpZ2luU2libGluZ0luZGV4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDaGFybVBsYXRlUGh5c2ljcyhjaGFybSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aHJlYWRDaGFybU9udG9Db3JkKGNoYXJtOiBjYy5Ob2RlLCBkcm9wQW5jaG9yOiBEcm9wQW5jaG9yKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblNpZGUoZHJvcEFuY2hvci5zaWRlLCBjaGFybSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBhbmNob3JQb3MgPSBkcm9wQW5jaG9yLmNvcmRQb3M7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMuZmluZE5lYXJlc3RQYXRoSW5kZXgocGF0aC5wb2ludHMsIGFuY2hvclBvcyk7XHJcbiAgICAgICAgY29uc3QgcGF0aERpciA9IHRoaXMucGlja1BhdGhEaXJlY3Rpb24ocGF0aC5wb2ludHMsIHN0YXJ0SW5kZXgsIGRyb3BBbmNob3Iuc2lkZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpdm90ID0gdGhpcy5zZXR1cENoYXJtSGFuZ1JpZyhjaGFybSk7XHJcbiAgICAgICAgcGl2b3QucGFyZW50ID0gdGhpcy5jaGFybUxheWVyO1xyXG4gICAgICAgIHBpdm90LnNldFBvc2l0aW9uKGNjLnYzKGFuY2hvclBvcy54LCBhbmNob3JQb3MueSwgMCkpO1xyXG4gICAgICAgIGNvbnN0IGhhbmdMb2NhbCA9IHRoaXMuZ2V0SGFuZ0xvY2FsT2Zmc2V0KGNoYXJtKTtcclxuICAgICAgICBjb25zdCBvdXR3YXJkID0gdGhpcy5nZXRPdXR3YXJkRnJvbUNlbnRlcihjYy52MihhbmNob3JQb3MueCwgYW5jaG9yUG9zLnkpKTtcclxuICAgICAgICBjaGFybS5hbmdsZSA9IHRoaXMuYW5nbGVGb3JPdXR3YXJkSGFuZyhvdXR3YXJkLCBoYW5nTG9jYWwpO1xyXG4gICAgICAgIGNoYXJtLmNoaWxkcmVuWzBdLnNjYWxlID0gMC44O1xyXG5cclxuICAgICAgICBjb25zdCBwaXZvdEJvZHkgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBjb25zdCBjaGFybUJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAocGl2b3RCb2R5KSB7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFuZ2VudCA9IHRoaXMuZ2V0VGFuZ2VudEF0SW5kZXgocGF0aC5wb2ludHMsIHN0YXJ0SW5kZXgsIHBhdGhEaXIpO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkgPSB0YW5nZW50Lm11bCh0aGlzLmRyb3BTbGlkZVNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYXJtQm9keSkge1xyXG4gICAgICAgICAgICBjaGFybUJvZHkuc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICBjaGFybUJvZHkuc3luY1JvdGF0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICBjaGFybUJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvcmRDaGFybXMucHVzaCh7XHJcbiAgICAgICAgICAgIHBpdm90LFxyXG4gICAgICAgICAgICBjaGFybSxcclxuICAgICAgICAgICAgc2V0dGxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0aWxsVGltZTogMCxcclxuICAgICAgICAgICAgc2lkZTogZHJvcEFuY2hvci5zaWRlLFxyXG4gICAgICAgICAgICBwYXRoU3RhcnRJbmRleDogc3RhcnRJbmRleCxcclxuICAgICAgICAgICAgcGF0aERpcixcclxuICAgICAgICAgICAgcGF0aERpc3RhbmNlOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBU4bqhbyBwaXZvdCAoxJFp4buDbSBuZW8gdHLDqm4gZMOieSkgKyBSZXZvbHV0ZUpvaW50OyBwaOG6p24gZMaw4bubaSBjaGFybSBsdW5nIGxheSB0aGVvIHBoeXNpY3MuICovXHJcbiAgICBwcml2YXRlIHNldHVwQ2hhcm1IYW5nUmlnKGNoYXJtOiBjYy5Ob2RlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKGNoYXJtLnBhcmVudCAmJiBjaGFybS5wYXJlbnQubmFtZSA9PT0gJ2NoYXJtUGl2b3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFybS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5nTG9jYWwgPSB0aGlzLmdldEhhbmdMb2NhbE9mZnNldChjaGFybSk7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBjaGFybS5wYXJlbnQ7XHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBsYXllci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG5cclxuICAgICAgICBjb25zdCBwaXZvdCA9IG5ldyBjYy5Ob2RlKCdjaGFybVBpdm90Jyk7XHJcbiAgICAgICAgcGl2b3QucGFyZW50ID0gbGF5ZXI7XHJcbiAgICAgICAgcGl2b3Quc2V0UG9zaXRpb24obGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpKTtcclxuXHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gcGl2b3Q7XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24oY2MudjMoLWhhbmdMb2NhbC54LCAtaGFuZ0xvY2FsLnksIDApKTtcclxuICAgICAgICBjaGFybS5hbmdsZSA9IDA7XHJcblxyXG4gICAgICAgIGxldCBwaXZvdEJvZHkgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXBpdm90Qm9keSkge1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkgPSBwaXZvdC5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGl2b3RCb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgcGl2b3RCb2R5LmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICAgICAgcGl2b3RCb2R5LmxpbmVhckRhbXBpbmcgPSAwLjQ1O1xyXG4gICAgICAgIHBpdm90Qm9keS5hbmd1bGFyRGFtcGluZyA9IDE7XHJcbiAgICAgICAgcGl2b3RCb2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgIHBpdm90Qm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBwaXZvdENvbCA9IHBpdm90LmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIGlmICghcGl2b3RDb2wpIHtcclxuICAgICAgICAgICAgcGl2b3RDb2wgPSBwaXZvdC5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGl2b3RDb2wucmFkaXVzID0gdGhpcy5waXZvdENvbGxpZGVyUmFkaXVzO1xyXG4gICAgICAgIHBpdm90Q29sLmZyaWN0aW9uID0gMC42NTtcclxuICAgICAgICBwaXZvdENvbC5yZXN0aXR1dGlvbiA9IDA7XHJcbiAgICAgICAgcGl2b3RDb2wuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBjaGFybUJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIWNoYXJtQm9keSkge1xyXG4gICAgICAgICAgICBjaGFybUJvZHkgPSBjaGFybS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhcm1Cb2R5LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNoYXJtQm9keS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNoYXJtQm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgIGNoYXJtQm9keS5ncmF2aXR5U2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIGNoYXJtQm9keS5saW5lYXJEYW1waW5nID0gMC40NTtcclxuICAgICAgICBjaGFybUJvZHkuYW5ndWxhckRhbXBpbmcgPSAwLjc1O1xyXG4gICAgICAgIGNoYXJtQm9keS5maXhlZFJvdGF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmFsbG93U2xlZXAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmFibGVDaGFybVBoeXNpY3NDb2xsaWRlcihjaGFybSk7XHJcblxyXG4gICAgICAgIGxldCBqb2ludCA9IHBpdm90LmdldENvbXBvbmVudChjYy5SZXZvbHV0ZUpvaW50KTtcclxuICAgICAgICBpZiAoIWpvaW50KSB7XHJcbiAgICAgICAgICAgIGpvaW50ID0gcGl2b3QuYWRkQ29tcG9uZW50KGNjLlJldm9sdXRlSm9pbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqb2ludC5jb25uZWN0ZWRCb2R5ID0gY2hhcm1Cb2R5O1xyXG4gICAgICAgIGpvaW50LmFuY2hvciA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgIGpvaW50LmNvbm5lY3RlZEFuY2hvciA9IGhhbmdMb2NhbDtcclxuICAgICAgICBqb2ludC5jb2xsaWRlQ29ubmVjdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBwaXZvdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvcmRDZW50ZXJMb2NhbCgpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8IHBhdGgucG9pbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY3ggPSAwO1xyXG4gICAgICAgIGxldCBjeSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLnBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjeCArPSBwYXRoLnBvaW50c1tpXS54O1xyXG4gICAgICAgICAgICBjeSArPSBwYXRoLnBvaW50c1tpXS55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuID0gcGF0aC5wb2ludHMubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBjYy52MihjeCAvIG4sIGN5IC8gbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRPdXR3YXJkRnJvbUNlbnRlcihwb3M6IGNjLlZlYzIpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLmdldENvcmRDZW50ZXJMb2NhbCgpO1xyXG4gICAgICAgIGNvbnN0IG91dHdhcmQgPSBjYy52Mihwb3MueCAtIGNlbnRlci54LCBwb3MueSAtIGNlbnRlci55KTtcclxuICAgICAgICBpZiAob3V0d2FyZC5tYWdTcXIoKSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKDAsIC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0d2FyZC5ub3JtYWxpemVTZWxmKCk7XHJcbiAgICAgICAgcmV0dXJuIG91dHdhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3cmFwQW5nbGVEZWcoYW5nbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGEgPSBhbmdsZTtcclxuICAgICAgICB3aGlsZSAoYSA+IDE4MCkgYSAtPSAzNjA7XHJcbiAgICAgICAgd2hpbGUgKGEgPCAtMTgwKSBhICs9IDM2MDtcclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtQm9keURpcihoYW5nTG9jYWw6IGNjLlZlYzIsIGFuZ2xlRGVnOiBudW1iZXIpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCBsb2NhbEJhc2UgPSBjYy52MigtaGFuZ0xvY2FsLngsIC1oYW5nTG9jYWwueSk7XHJcbiAgICAgICAgY29uc3QgcmFkID0gYW5nbGVEZWcgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIGNvbnN0IGRpciA9IGNjLnYyKFxyXG4gICAgICAgICAgICBsb2NhbEJhc2UueCAqIGMgLSBsb2NhbEJhc2UueSAqIHMsXHJcbiAgICAgICAgICAgIGxvY2FsQmFzZS54ICogcyArIGxvY2FsQmFzZS55ICogY1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGRpci5tYWdTcXIoKSA8IDAuMDAwMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjIoMCwgLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXIubm9ybWFsaXplU2VsZigpO1xyXG4gICAgICAgIHJldHVybiBkaXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhbmdsZUZvck91dHdhcmRIYW5nKG91dHdhcmQ6IGNjLlZlYzIsIGhhbmdMb2NhbDogY2MuVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxCYXNlID0gY2MudjIoLWhhbmdMb2NhbC54LCAtaGFuZ0xvY2FsLnkpO1xyXG4gICAgICAgIGNvbnN0IGJhc2VBbmdsZSA9IE1hdGguYXRhbjIobG9jYWxCYXNlLnksIGxvY2FsQmFzZS54KTtcclxuICAgICAgICBjb25zdCBvdXRBbmdsZSA9IE1hdGguYXRhbjIob3V0d2FyZC55LCBvdXR3YXJkLngpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyYXBBbmdsZURlZygob3V0QW5nbGUgLSBiYXNlQW5nbGUpICogMTgwIC8gTWF0aC5QSSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJhaW5DaGFybUhhbmcoc3RhdGU6IENvcmRDaGFybVN0YXRlLCBkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgY2hhcm0gPSBzdGF0ZS5jaGFybTtcclxuICAgICAgICBjb25zdCBwaXZvdCA9IHN0YXRlLnBpdm90O1xyXG4gICAgICAgIGlmICghY2hhcm0gfHwgIXBpdm90KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmdMb2NhbCA9IHRoaXMuZ2V0SGFuZ0xvY2FsT2Zmc2V0KGNoYXJtKTtcclxuICAgICAgICBjb25zdCBvdXR3YXJkID0gdGhpcy5nZXRPdXR3YXJkRnJvbUNlbnRlcihjYy52MihwaXZvdC54LCBwaXZvdC55KSk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0QW5nbGUgPSB0aGlzLmFuZ2xlRm9yT3V0d2FyZEhhbmcob3V0d2FyZCwgaGFuZ0xvY2FsKTtcclxuICAgICAgICBjb25zdCBib2R5ID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcblxyXG4gICAgICAgIGxldCBhbmdsZSA9IGNoYXJtLmFuZ2xlO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMud3JhcEFuZ2xlRGVnKGFuZ2xlIC0gdGFyZ2V0QW5nbGUpO1xyXG4gICAgICAgIGNvbnN0IGJvZHlEaXIgPSB0aGlzLmdldENoYXJtQm9keURpcihoYW5nTG9jYWwsIGFuZ2xlKTtcclxuICAgICAgICBjb25zdCBvdXR3YXJkRG90ID0gYm9keURpci54ICogb3V0d2FyZC54ICsgYm9keURpci55ICogb3V0d2FyZC55O1xyXG5cclxuICAgICAgICBpZiAob3V0d2FyZERvdCA8IDAuMDIpIHtcclxuICAgICAgICAgICAgYW5nbGUgPSB0YXJnZXRBbmdsZTtcclxuICAgICAgICAgICAgY2hhcm0uYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3luY1JvdGF0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvZmZzZXQgPiB0aGlzLmhhbmdTd2luZ0xpbWl0KSB7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gdGFyZ2V0QW5nbGUgKyB0aGlzLmhhbmdTd2luZ0xpbWl0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDwgLXRoaXMuaGFuZ1N3aW5nTGltaXQpIHtcclxuICAgICAgICAgICAgYW5nbGUgPSB0YXJnZXRBbmdsZSAtIHRoaXMuaGFuZ1N3aW5nTGltaXQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHB1bGwgPSB0aGlzLndyYXBBbmdsZURlZyh0YXJnZXRBbmdsZSAtIGFuZ2xlKTtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgKz0gcHVsbCAqIHRoaXMuaGFuZ091dHdhcmRTdGlmZm5lc3MgKiBkdDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGFuZ2xlIC0gY2hhcm0uYW5nbGUpID4gMC4wNSkge1xyXG4gICAgICAgICAgICBjaGFybS5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgKj0gMC4yNTtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3luY1JvdGF0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SGFuZ0xvY2FsT2Zmc2V0KGNoYXJtOiBjYy5Ob2RlKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGNoYXJtLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykgYXMgYW55O1xyXG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0uZ2V0SGFuZ0xvY2FsT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmdldEhhbmdMb2NhbE9mZnNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2MudjIoMCwgNTUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5hYmxlQ2hhcm1QaHlzaWNzQ29sbGlkZXIoY2hhcm06IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IGNoYXJtLmdldENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoY29sbGlkZXIpIHtcclxuICAgICAgICAgICAgY29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLnNlbnNvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb2xsaWRlci5mcmljdGlvbiA9IDAuODU7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLnJlc3RpdHV0aW9uID0gMDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2xsaWRlci5kZW5zaXR5ID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgY29sbGlkZXIuZGVuc2l0eSA9IDAuMzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYW5nZW50QXRJbmRleChwb2ludHM6IGNjLlZlYzJbXSwgaW5kZXg6IG51bWJlciwgZGlyOiBudW1iZXIpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGhpcy53cmFwSW5kZXgoaW5kZXggKyBkaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGIgPSBwb2ludHNbbmV4dElkeF07XHJcbiAgICAgICAgY29uc3QgZHggPSBiLnggLSBhLng7XHJcbiAgICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XHJcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KSB8fCAxO1xyXG4gICAgICAgIHJldHVybiBjYy52MihkeCAvIGxlbiwgZHkgLyBsZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmVhcmVzdE9uUGF0aChwb2ludHM6IGNjLlZlYzJbXSwgcG9zOiBjYy5WZWMyKTogeyBpbmRleDogbnVtYmVyOyBuZWFyZXN0OiBjYy5WZWMyIH0ge1xyXG4gICAgICAgIGxldCBiZXN0SW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBiZXN0RGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBjYy52Mihwb2ludHNbaV0ueCAtIHBvcy54LCBwb2ludHNbaV0ueSAtIHBvcy55KS5tYWdTcXIoKTtcclxuICAgICAgICAgICAgaWYgKGQgPCBiZXN0RGlzdCkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3QgPSBkO1xyXG4gICAgICAgICAgICAgICAgYmVzdEluZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaW5kZXg6IGJlc3RJbmRleCwgbmVhcmVzdDogcG9pbnRzW2Jlc3RJbmRleF0gfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmROZWFyZXN0UGF0aEluZGV4KHBvaW50czogY2MuVmVjMltdLCBwb3M6IGNjLlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBiZXN0ID0gMDtcclxuICAgICAgICBsZXQgYmVzdERpc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBjYy52Mihwb2ludHNbaV0ueCAtIHBvcy54LCBwb2ludHNbaV0ueSAtIHBvcy55KS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGQgPCBiZXN0RGlzdCkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3QgPSBkO1xyXG4gICAgICAgICAgICAgICAgYmVzdCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwaWNrUGF0aERpcmVjdGlvbihwb2ludHM6IGNjLlZlYzJbXSwgZW50cnlJbmRleDogbnVtYmVyLCBzaWRlOiBDb3JkU2lkZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgc2NvcmUgPSAoZGlyOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHMgPSAwO1xyXG4gICAgICAgICAgICBsZXQgaWR4ID0gZW50cnlJbmRleDtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA0MDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZHggPSB0aGlzLndyYXBJbmRleChpZHggKyBkaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgICAgICAgICAgcyArPSAtcC55ICogMC41O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNpZGUgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgKz0gcC54IDwgMCA/IDMgOiAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyArPSBwLnggPiAwID8gMyA6IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHNjb3JlKDEpID49IHNjb3JlKC0xKSA/IDEgOiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBvc2VPblBhdGgoXHJcbiAgICAgICAgcG9pbnRzOiBjYy5WZWMyW10sXHJcbiAgICAgICAgc3RhcnRJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGRpcjogbnVtYmVyLFxyXG4gICAgICAgIGRpc3RhbmNlOiBudW1iZXJcclxuICAgICk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGFuZ2xlOiBudW1iZXIgfSB7XHJcbiAgICAgICAgbGV0IGlkeCA9IHN0YXJ0SW5kZXg7XHJcbiAgICAgICAgbGV0IHJlbWFpbiA9IGRpc3RhbmNlO1xyXG4gICAgICAgIGNvbnN0IG1heFN0ZXAgPSBwb2ludHMubGVuZ3RoICsgMjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPCBtYXhTdGVwOyBzdGVwKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dElkeCA9IHRoaXMud3JhcEluZGV4KGlkeCArIGRpciwgcG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHBvaW50c1tuZXh0SWR4XTtcclxuICAgICAgICAgICAgY29uc3QgZHggPSBiLnggLSBhLng7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gYi55IC0gYS55O1xyXG4gICAgICAgICAgICBjb25zdCBzZWdMZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgICAgICBpZiAoc2VnTGVuIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGlkeCA9IG5leHRJZHg7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlbWFpbiA8PSBzZWdMZW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSByZW1haW4gLyBzZWdMZW47XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gYS54ICsgZHggKiB0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGEueSArIGR5ICogdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpICogMTgwIC8gTWF0aC5QSSAtIDkwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeCwgeSwgYW5nbGUgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVtYWluIC09IHNlZ0xlbjtcclxuICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxhc3QgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICByZXR1cm4geyB4OiBsYXN0LngsIHk6IGxhc3QueSwgYW5nbGU6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdyYXBJbmRleChpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIGxlbmd0aCArIGluZGV4O1xyXG4gICAgICAgIGlmIChpbmRleCA+PSBsZW5ndGgpIHJldHVybiBpbmRleCAtIGxlbmd0aDtcclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBbmNob3JTbGlkZURpc3RhbmNlKCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIXBhdGggfHwgIWFuY2hvcnMpIHJldHVybiAwO1xyXG5cclxuICAgICAgICBjb25zdCBsZWZ0SW5kZXggPSB0aGlzLmZpbmROZWFyZXN0UGF0aEluZGV4KHBhdGgucG9pbnRzLCBhbmNob3JzLmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXIgPSB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBsZWZ0SW5kZXgsICdsZWZ0Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzdGFuY2VBbG9uZ1BhdGgocGF0aC5wb2ludHMsIGxlZnRJbmRleCwgcGF0aERpciwgYW5jaG9ycy5yaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTaWRlU2xpZGVEaXN0YW5jZShzaWRlOiBDb3JkU2lkZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIXBhdGggfHwgIWFuY2hvcnMpIHJldHVybiAwO1xyXG5cclxuICAgICAgICBjb25zdCBlbnRyeSA9IHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgZW50cnlJbmRleCA9IHRoaXMuZmluZE5lYXJlc3RQYXRoSW5kZXgocGF0aC5wb2ludHMsIGVudHJ5KTtcclxuICAgICAgICBjb25zdCBwYXRoRGlyID0gdGhpcy5waWNrUGF0aERpcmVjdGlvbihwYXRoLnBvaW50cywgZW50cnlJbmRleCwgc2lkZSk7XHJcbiAgICAgICAgY29uc3Qgb3Bwb3NpdGUgPSBzaWRlID09PSAnbGVmdCcgPyBhbmNob3JzLnJpZ2h0IDogYW5jaG9ycy5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IHRvT3Bwb3NpdGUgPSB0aGlzLmdldERpc3RhbmNlQWxvbmdQYXRoKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBwYXRoRGlyLCBvcHBvc2l0ZSk7XHJcbiAgICAgICAgaWYgKHRvT3Bwb3NpdGUgPD0gMCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIC8vIFRyxrDhu6N0IGjhur90IGN1bmcgeHXhu5FuZyDEkcOheSwgZOG7q25nIHRyxrDhu5tjIG5lbyDEkeG7kWkgZGnhu4duIChraMO0bmcgcXVhIGtoZSBo4bufKS5cclxuICAgICAgICBjb25zdCBzdG9wTWFyZ2luID0gTWF0aC5tYXgodGhpcy5waXZvdENvbGxpZGVyUmFkaXVzICogMiwgdGhpcy5taW5BbmNob3JEcm9wR2FwICogMC40NSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIHRvT3Bwb3NpdGUgLSBzdG9wTWFyZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1heFNsaWRlRGlzdGFuY2Uoc3RhdGU6IENvcmRDaGFybVN0YXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTaWRlU2xpZGVEaXN0YW5jZShzdGF0ZS5zaWRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNsaWRlRW50cnlBbmNob3Ioc2lkZTogQ29yZFNpZGUpOiBjYy5WZWMyIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghYW5jaG9ycykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENo4buJIHTDrG0gxJFp4buDbSBn4bqnbiBuaOG6pXQgdHLDqm4gY3VuZyBkw6J5IGjhu6NwIGzhu4cgKG5lbyDihpIgxJHDoXkpLCBi4buPIHF1YSBraGUgaOG7nyBnaeG7r2EgMiBuZW8uICovXHJcbiAgICBwcml2YXRlIGdldE5lYXJlc3RPbkFsbG93ZWRTbGlkZVBhdGgoXHJcbiAgICAgICAgc3RhdGU6IENvcmRDaGFybVN0YXRlLFxyXG4gICAgICAgIHBvczogY2MuVmVjMlxyXG4gICAgKTogeyBpbmRleDogbnVtYmVyOyBuZWFyZXN0OiBjYy5WZWMyOyBwYXRoRGlzdGFuY2U6IG51bWJlciB9IHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGluZGV4OiBzdGF0ZS5wYXRoU3RhcnRJbmRleCwgbmVhcmVzdDogcG9zLCBwYXRoRGlzdGFuY2U6IDAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1heERpc3RhbmNlID0gdGhpcy5nZXRNYXhTbGlkZURpc3RhbmNlKHN0YXRlKTtcclxuICAgICAgICBjb25zdCBwb2ludHMgPSBwYXRoLnBvaW50cztcclxuICAgICAgICBsZXQgYmVzdERpc3RTcXIgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgIGxldCBiZXN0TmVhcmVzdCA9IHBvaW50c1tzdGF0ZS5wYXRoU3RhcnRJbmRleF07XHJcbiAgICAgICAgbGV0IGJlc3RJbmRleCA9IHN0YXRlLnBhdGhTdGFydEluZGV4O1xyXG4gICAgICAgIGxldCBiZXN0UGF0aERpc3QgPSAwO1xyXG5cclxuICAgICAgICBsZXQgaWR4ID0gc3RhdGUucGF0aFN0YXJ0SW5kZXg7XHJcbiAgICAgICAgbGV0IHRyYXZlcnNlZCA9IDA7XHJcbiAgICAgICAgY29uc3QgbWF4U3RlcHMgPSBwb2ludHMubGVuZ3RoICsgMjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPCBtYXhTdGVwczsgc3RlcCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpZHggKyBzdGF0ZS5wYXRoRGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ0xlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChzZWdMZW4gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW1haW4gPSBtYXhEaXN0YW5jZSAtIHRyYXZlcnNlZDtcclxuICAgICAgICAgICAgY29uc3Qgc2VnVXNlID0gTWF0aC5taW4oc2VnTGVuLCByZW1haW4pO1xyXG4gICAgICAgICAgICBjb25zdCB0TWF4ID0gc2VnVXNlIC8gc2VnTGVuO1xyXG4gICAgICAgICAgICBjb25zdCB0UmF3ID0gKChwb3MueCAtIGEueCkgKiBkeCArIChwb3MueSAtIGEueSkgKiBkeSkgLyAoc2VnTGVuICogc2VnTGVuKTtcclxuICAgICAgICAgICAgY29uc3QgdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRNYXgsIHRSYXcpKTtcclxuICAgICAgICAgICAgY29uc3QgbnggPSBhLnggKyBkeCAqIHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG55ID0gYS55ICsgZHkgKiB0O1xyXG4gICAgICAgICAgICBjb25zdCBkU3FyID0gKHBvcy54IC0gbngpICogKHBvcy54IC0gbngpICsgKHBvcy55IC0gbnkpICogKHBvcy55IC0gbnkpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoRGlzdCA9IHRyYXZlcnNlZCArIHQgKiBzZWdMZW47XHJcblxyXG4gICAgICAgICAgICBpZiAoZFNxciA8IGJlc3REaXN0U3FyKSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdFNxciA9IGRTcXI7XHJcbiAgICAgICAgICAgICAgICBiZXN0TmVhcmVzdCA9IGNjLnYyKG54LCBueSk7XHJcbiAgICAgICAgICAgICAgICBiZXN0SW5kZXggPSBpZHg7XHJcbiAgICAgICAgICAgICAgICBiZXN0UGF0aERpc3QgPSBwYXRoRGlzdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJhdmVyc2VkICs9IHNlZ0xlbjtcclxuICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICAgICAgaWYgKHRyYXZlcnNlZCA+PSBtYXhEaXN0YW5jZSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBpbmRleDogYmVzdEluZGV4LCBuZWFyZXN0OiBiZXN0TmVhcmVzdCwgcGF0aERpc3RhbmNlOiBiZXN0UGF0aERpc3QgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtTmVpZ2hib3JDb3VudChzdGF0ZTogQ29yZENoYXJtU3RhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghc3RhdGUucGl2b3QpIHJldHVybiAwO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLmdldENoYXJtU2xvdFNwYWNpbmcoc3RhdGUuY2hhcm0pICogMC42O1xyXG4gICAgICAgIGxldCBuZWlnaGJvcnMgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBvdGhlciA9IHRoaXMuY29yZENoYXJtc1tpXTtcclxuICAgICAgICAgICAgaWYgKG90aGVyID09PSBzdGF0ZSB8fCAhb3RoZXIucGl2b3QpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY2MudjIob3RoZXIucGl2b3QueCAtIHBvcy54LCBvdGhlci5waXZvdC55IC0gcG9zLnkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZCA8IHNwYWNpbmcpIG5laWdoYm9ycysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5laWdoYm9ycztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtQ3Jvd2RJbmZvKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSk6IHtcclxuICAgICAgICBjcm93ZDogbnVtYmVyO1xyXG4gICAgICAgIG5laWdoYm9yczogbnVtYmVyO1xyXG4gICAgICAgIHBhY2tlZDogYm9vbGVhbjtcclxuICAgICAgICBzbGlkZUJsb2NrZWQ6IGJvb2xlYW47XHJcbiAgICB9IHtcclxuICAgICAgICBpZiAoIXN0YXRlLnBpdm90KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNyb3dkOiAwLCBuZWlnaGJvcnM6IDAsIHBhY2tlZDogZmFsc2UsIHNsaWRlQmxvY2tlZDogZmFsc2UgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLmdldENoYXJtU2xvdFNwYWNpbmcoc3RhdGUuY2hhcm0pICogMC42O1xyXG4gICAgICAgIGNvbnN0IHBhY2tUaHJlc2hvbGQgPSBNYXRoLm1heCgyLCB0aGlzLmNoYXJtQ3Jvd2RGdWxsQ2FuY2VsQ291bnQgLSAxKTtcclxuICAgICAgICBsZXQgbmVpZ2hib3JzID0gMDtcclxuICAgICAgICBsZXQgb3ZlcmxhcENyb3dkID0gMDtcclxuICAgICAgICBsZXQgbWF4TmVpZ2hib3JQYWNrID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcmRDaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgb3RoZXIgPSB0aGlzLmNvcmRDaGFybXNbaV07XHJcbiAgICAgICAgICAgIGlmIChvdGhlciA9PT0gc3RhdGUgfHwgIW90aGVyLnBpdm90KSBjb250aW51ZTtcclxuICAgICAgICAgICAgY29uc3QgZCA9IGNjLnYyKG90aGVyLnBpdm90LnggLSBwb3MueCwgb3RoZXIucGl2b3QueSAtIHBvcy55KS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGQgPj0gc3BhY2luZykgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBuZWlnaGJvcnMrKztcclxuICAgICAgICAgICAgY29uc3Qgb3ZlcmxhcCA9IDEgLSBkIC8gc3BhY2luZztcclxuICAgICAgICAgICAgb3ZlcmxhcENyb3dkICs9IG92ZXJsYXAgKiBvdmVybGFwO1xyXG4gICAgICAgICAgICBtYXhOZWlnaGJvclBhY2sgPSBNYXRoLm1heChtYXhOZWlnaGJvclBhY2ssIHRoaXMuZ2V0Q2hhcm1OZWlnaGJvckNvdW50KG90aGVyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb3VudENyb3dkID0gTWF0aC5taW4oMSwgbmVpZ2hib3JzIC8gcGFja1RocmVzaG9sZCk7XHJcbiAgICAgICAgY29uc3QgY3Jvd2QgPSBNYXRoLm1heChjb3VudENyb3dkLCBNYXRoLm1pbigxLCBvdmVybGFwQ3Jvd2QpKTtcclxuICAgICAgICBjb25zdCBwYWNrZWQgPSBuZWlnaGJvcnMgPj0gcGFja1RocmVzaG9sZDtcclxuICAgICAgICBjb25zdCBzbGlkZUJsb2NrZWQgPSBwYWNrZWQgfHwgbWF4TmVpZ2hib3JQYWNrID49IHBhY2tUaHJlc2hvbGQ7XHJcblxyXG4gICAgICAgIHJldHVybiB7IGNyb3dkLCBuZWlnaGJvcnMsIHBhY2tlZCwgc2xpZGVCbG9ja2VkIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybUNyb3dkRmFjdG9yKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhcm1Dcm93ZEluZm8oc3RhdGUpLmNyb3dkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q3Jvd2RQdXNoU2NhbGUoY3Jvd2Q6IG51bWJlciwgc2xpZGVCbG9ja2VkOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChzbGlkZUJsb2NrZWQpIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChjcm93ZCA8PSAwKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFybUNyb3dkUHVzaFJldGVudGlvblxyXG4gICAgICAgICAgICArICgxIC0gdGhpcy5jaGFybUNyb3dkUHVzaFJldGVudGlvbikgKiAoMSAtIGNyb3dkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvcnJlY3RDaGFybVBpdm90T25QYXRoKFxyXG4gICAgICAgIHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSxcclxuICAgICAgICBvbkFsbG93ZWQ6IHsgbmVhcmVzdDogY2MuVmVjMiB9LFxyXG4gICAgICAgIGR0OiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBzdGF0ZS5waXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIWJvZHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgY29uc3QgZHggPSBvbkFsbG93ZWQubmVhcmVzdC54IC0gcG9zLng7XHJcbiAgICAgICAgY29uc3QgZHkgPSBvbkFsbG93ZWQubmVhcmVzdC55IC0gcG9zLnk7XHJcbiAgICAgICAgY29uc3Qgb2ZmRGlzdCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgY29uc3Qgc29mdExpbWl0ID0gdGhpcy5zZWdtZW50UmFkaXVzICogMS4yO1xyXG4gICAgICAgIGNvbnN0IGhhcmRMaW1pdCA9IHRoaXMuc2VnbWVudFJhZGl1cyAqIDMuMjtcclxuXHJcbiAgICAgICAgaWYgKG9mZkRpc3QgPD0gc29mdExpbWl0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChvZmZEaXN0ID49IGhhcmRMaW1pdCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5waXZvdC5zZXRQb3NpdGlvbihjYy52MyhvbkFsbG93ZWQubmVhcmVzdC54LCBvbkFsbG93ZWQubmVhcmVzdC55LCAwKSk7XHJcbiAgICAgICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN0cmVuZ3RoID0gc3RhdGUuc2V0dGxlZCA/IDEyIDogODtcclxuICAgICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgc3RyZW5ndGggKiBkdCk7XHJcbiAgICAgICAgc3RhdGUucGl2b3Quc2V0UG9zaXRpb24oY2MudjMocG9zLnggKyBkeCAqIHQsIHBvcy55ICsgZHkgKiB0LCAwKSk7XHJcbiAgICAgICAgYm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkYW1wQ2hhcm1QaXZvdENyb3dkaW5nKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSwgZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHBpdm90Qm9keSA9IHN0YXRlLnBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghcGl2b3RCb2R5KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNyb3dkSW5mbyA9IHRoaXMuZ2V0Q2hhcm1Dcm93ZEluZm8oc3RhdGUpO1xyXG4gICAgICAgIGlmIChjcm93ZEluZm8uY3Jvd2QgPD0gMCAmJiAhY3Jvd2RJbmZvLnNsaWRlQmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoY3Jvd2RJbmZvLnNsaWRlQmxvY2tlZCkge1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgY29uc3QgY2hhcm1Cb2R5ID0gc3RhdGUuY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmIChjaGFybUJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGNoYXJtQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgY2hhcm1Cb2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5zZXR0bGVkKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXR0bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwdXNoU2NhbGUgPSB0aGlzLmdldENyb3dkUHVzaFNjYWxlKGNyb3dkSW5mby5jcm93ZCwgY3Jvd2RJbmZvLnNsaWRlQmxvY2tlZCk7XHJcbiAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5ID0gcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5Lm11bChwdXNoU2NhbGUpO1xyXG5cclxuICAgICAgICBjb25zdCBjaGFybUJvZHkgPSBzdGF0ZS5jaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoY2hhcm1Cb2R5KSB7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keS5saW5lYXJWZWxvY2l0eSA9IGNoYXJtQm9keS5saW5lYXJWZWxvY2l0eS5tdWwocHVzaFNjYWxlICogMC43NSk7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keS5hbmd1bGFyVmVsb2NpdHkgKj0gcHVzaFNjYWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGFtcCA9IE1hdGgubWluKDAuOTIsIGNyb3dkSW5mby5jcm93ZCAqIHRoaXMuY2hhcm1Dcm93ZERhbXBpbmdTdHJlbmd0aCAqIGR0KTtcclxuICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkgPSBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkubXVsKDEgLSBkYW1wKTtcclxuICAgICAgICBpZiAoY2hhcm1Cb2R5KSB7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keS5saW5lYXJWZWxvY2l0eSA9IGNoYXJtQm9keS5saW5lYXJWZWxvY2l0eS5tdWwoMSAtIGRhbXAgKiAwLjg1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FuY2VsTXV0dWFsUHVzaFZlbG9jaXR5KHN0YXRlLCBjcm93ZEluZm8uY3Jvd2QsIGNyb3dkSW5mby5zbGlkZUJsb2NrZWQpO1xyXG5cclxuICAgICAgICBpZiAoc3RhdGUuc2V0dGxlZCAmJiBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkubWFnKCkgPiAyOCkge1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkgPSBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkubXVsKDAuNCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUcmnhu4d0IHRpw6p1IHbhuq1uIHThu5FjIMSR4bqpeSB2w6BvIG5oYXUga2hpIGNoZW4gY2jDumMuICovXHJcbiAgICBwcml2YXRlIGNhbmNlbE11dHVhbFB1c2hWZWxvY2l0eShcclxuICAgICAgICBzdGF0ZTogQ29yZENoYXJtU3RhdGUsXHJcbiAgICAgICAgY3Jvd2Q6IG51bWJlcixcclxuICAgICAgICBzbGlkZUJsb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgcGl2b3RCb2R5ID0gc3RhdGUucGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFwaXZvdEJvZHkgfHwgKGNyb3dkIDw9IDAgJiYgIXNsaWRlQmxvY2tlZCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHNsaWRlQmxvY2tlZCkge1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuZ2V0Q2hhcm1TbG90U3BhY2luZyhzdGF0ZS5jaGFybSkgKiAwLjY7XHJcbiAgICAgICAgbGV0IGNhbmNlbFggPSAwO1xyXG4gICAgICAgIGxldCBjYW5jZWxZID0gMDtcclxuICAgICAgICBsZXQgd2VpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcmRDaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgb3RoZXIgPSB0aGlzLmNvcmRDaGFybXNbaV07XHJcbiAgICAgICAgICAgIGlmIChvdGhlciA9PT0gc3RhdGUgfHwgIW90aGVyLnBpdm90KSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG90aGVyQm9keSA9IG90aGVyLnBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoIW90aGVyQm9keSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBjYy52MihvdGhlci5waXZvdC54IC0gcG9zLngsIG90aGVyLnBpdm90LnkgLSBwb3MueSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBvZmZzZXQubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0ID49IHNwYWNpbmcgfHwgZGlzdCA8IDAuNSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b3dhcmRYID0gb2Zmc2V0LnggLyBkaXN0O1xyXG4gICAgICAgICAgICBjb25zdCB0b3dhcmRZID0gb2Zmc2V0LnkgLyBkaXN0O1xyXG4gICAgICAgICAgICBjb25zdCByZWxWeCA9IHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eS54IC0gb3RoZXJCb2R5LmxpbmVhclZlbG9jaXR5Lng7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbFZ5ID0gcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5LnkgLSBvdGhlckJvZHkubGluZWFyVmVsb2NpdHkueTtcclxuICAgICAgICAgICAgY29uc3QgcHVzaEFsb25nID0gcmVsVnggKiB0b3dhcmRYICsgcmVsVnkgKiB0b3dhcmRZO1xyXG4gICAgICAgICAgICBpZiAocHVzaEFsb25nIDw9IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3ZlcmxhcCA9IDEgLSBkaXN0IC8gc3BhY2luZztcclxuICAgICAgICAgICAgY29uc3Qgc3RyZW5ndGggPSBvdmVybGFwICogb3ZlcmxhcCAqIGNyb3dkO1xyXG4gICAgICAgICAgICBjYW5jZWxYICs9IHRvd2FyZFggKiBwdXNoQWxvbmcgKiBzdHJlbmd0aDtcclxuICAgICAgICAgICAgY2FuY2VsWSArPSB0b3dhcmRZICogcHVzaEFsb25nICogc3RyZW5ndGg7XHJcbiAgICAgICAgICAgIHdlaWdodCArPSBzdHJlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3ZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5LnggLSBjYW5jZWxYLFxyXG4gICAgICAgICAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5LnkgLSBjYW5jZWxZXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBLaMO0bmcgY2hvIGNoYXJtIHRyxrDhu6N0IHF1YSBuZW8gaG/hurdjIGzhu410IHbDoG8ga2hlIGjhu58gZ2nhu69hIDIgbmVvLiAqL1xyXG4gICAgcHJpdmF0ZSBlbmZvcmNlQ2hhcm1TbGlkZUJvdW5kcyhcclxuICAgICAgICBzdGF0ZTogQ29yZENoYXJtU3RhdGUsXHJcbiAgICAgICAgb25BbGxvd2VkOiB7IGluZGV4OiBudW1iZXI7IG5lYXJlc3Q6IGNjLlZlYzI7IHBhdGhEaXN0YW5jZTogbnVtYmVyIH0sXHJcbiAgICAgICAgdGFuZ2VudDogY2MuVmVjMixcclxuICAgICAgICBtYXhEaXN0OiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBzdGF0ZS5waXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFib2R5IHx8ICFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMucGl2b3RDb2xsaWRlclJhZGl1cztcclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICBjb25zdCBwYXRoRGlzdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heERpc3QsIG9uQWxsb3dlZC5wYXRoRGlzdGFuY2UpKTtcclxuICAgICAgICBzdGF0ZS5wYXRoRGlzdGFuY2UgPSBwYXRoRGlzdDtcclxuXHJcbiAgICAgICAgY29uc3QgaW5HYXAgPSB0aGlzLmlzSW5BbmNob3JHYXAocG9zKTtcclxuICAgICAgICBjb25zdCBhdE1pbiA9IHBhdGhEaXN0IDw9IG1hcmdpbjtcclxuICAgICAgICBjb25zdCBhdE1heCA9IHBhdGhEaXN0ID49IG1heERpc3QgLSBtYXJnaW47XHJcblxyXG4gICAgICAgIGlmIChpbkdhcCkge1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZlbCA9IGJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgbGV0IHZUYW5nZW50ID0gdmVsLnggKiB0YW5nZW50LnggKyB2ZWwueSAqIHRhbmdlbnQueTtcclxuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoYXRNaW4gJiYgdlRhbmdlbnQgPCAwKSB7XHJcbiAgICAgICAgICAgIHZUYW5nZW50ID0gMDtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhdE1heCAmJiB2VGFuZ2VudCA+IDApIHtcclxuICAgICAgICAgICAgdlRhbmdlbnQgPSAwO1xyXG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZOb3JtYWwgPSB2ZWwueCAqICgtdGFuZ2VudC55KSArIHZlbC55ICogdGFuZ2VudC54O1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICB0YW5nZW50LnggKiB2VGFuZ2VudCArICgtdGFuZ2VudC55KSAqIHZOb3JtYWwsXHJcbiAgICAgICAgICAgICAgICB0YW5nZW50LnkgKiB2VGFuZ2VudCArIHRhbmdlbnQueCAqIHZOb3JtYWxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDaGFybVNsaWRlKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSwgZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBzdGF0ZS5waXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFib2R5IHx8ICFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgIGNvbnN0IG1heERpc3QgPSB0aGlzLmdldE1heFNsaWRlRGlzdGFuY2Uoc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IG9uQWxsb3dlZCA9IHRoaXMuZ2V0TmVhcmVzdE9uQWxsb3dlZFNsaWRlUGF0aChzdGF0ZSwgcG9zKTtcclxuICAgICAgICBjb25zdCB0YW5nZW50ID0gdGhpcy5nZXRUYW5nZW50QXRJbmRleChwYXRoLnBvaW50cywgb25BbGxvd2VkLmluZGV4LCBzdGF0ZS5wYXRoRGlyKTtcclxuICAgICAgICBjb25zdCBjcm93ZEluZm8gPSB0aGlzLmdldENoYXJtQ3Jvd2RJbmZvKHN0YXRlKTtcclxuICAgICAgICBjb25zdCBjcm93ZCA9IGNyb3dkSW5mby5jcm93ZDtcclxuICAgICAgICBjb25zdCBzbGlkZUJsb2NrZWQgPSBjcm93ZEluZm8uc2xpZGVCbG9ja2VkO1xyXG5cclxuICAgICAgICBzdGF0ZS5wYXRoRGlzdGFuY2UgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhEaXN0LCBvbkFsbG93ZWQucGF0aERpc3RhbmNlKSk7XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuc2V0dGxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhYID0gb25BbGxvd2VkLm5lYXJlc3QueCAtIHBvcy54O1xyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhZID0gb25BbGxvd2VkLm5lYXJlc3QueSAtIHBvcy55O1xyXG4gICAgICAgICAgICBjb25zdCB0eCA9IHRhbmdlbnQueDtcclxuICAgICAgICAgICAgY29uc3QgdHkgPSB0YW5nZW50Lnk7XHJcbiAgICAgICAgICAgIGNvbnN0IG54ID0gLXR5O1xyXG4gICAgICAgICAgICBjb25zdCBueSA9IHR4O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmVsID0gYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgbGV0IHZUYW5nZW50ID0gdmVsLnggKiB0eCArIHZlbC55ICogdHk7XHJcbiAgICAgICAgICAgIGxldCB2Tm9ybWFsID0gdmVsLnggKiBueCArIHZlbC55ICogbnk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldE5vcm1hbCA9IHRvUGF0aFggKiBueCArIHRvUGF0aFkgKiBueTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzbGlkZUJsb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgIHZUYW5nZW50ID0gMDtcclxuICAgICAgICAgICAgICAgIHZOb3JtYWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0dGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3VlRhbmdlbnQgPSB2VGFuZ2VudCArIHRoaXMuc2xpZGVHcmF2aXR5ICogZHQgKiAoMSAtIGNyb3dkICogMC45Mik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Vk5vcm1hbCA9IHZOb3JtYWxcclxuICAgICAgICAgICAgICAgICAgICArIG9mZnNldE5vcm1hbCAqIHRoaXMucGF0aFB1bGxTdHJlbmd0aCAqIGR0ICogKDEgLSBjcm93ZCAqIDAuNSlcclxuICAgICAgICAgICAgICAgICAgICAtIHZOb3JtYWwgKiB0aGlzLnBhdGhQdWxsRGFtcGluZyAqIGR0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjcm93ZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwdXNoU2NhbGUgPSB0aGlzLmdldENyb3dkUHVzaFNjYWxlKGNyb3dkLCBzbGlkZUJsb2NrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZOb3JtYWwgKj0gTWF0aC5tYXgoMC4wNSwgcHVzaFNjYWxlICogMC4zNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VlRhbmdlbnQgKj0gTWF0aC5tYXgoMC4wOCwgcHVzaFNjYWxlICogMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2VGFuZ2VudCA9IG5ld1ZUYW5nZW50O1xyXG4gICAgICAgICAgICAgICAgdk5vcm1hbCA9IG5ld1ZOb3JtYWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5wYXRoRGlzdGFuY2UgPD0gdGhpcy5waXZvdENvbGxpZGVyUmFkaXVzICYmIHZUYW5nZW50IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdlRhbmdlbnQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5wYXRoRGlzdGFuY2UgPj0gbWF4RGlzdCAtIHRoaXMucGl2b3RDb2xsaWRlclJhZGl1cyAmJiB2VGFuZ2VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZUYW5nZW50ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHZ4ID0gdHggKiB2VGFuZ2VudCArIG54ICogdk5vcm1hbDtcclxuICAgICAgICAgICAgbGV0IHZ5ID0gdHkgKiB2VGFuZ2VudCArIG55ICogdk5vcm1hbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gTWF0aC5zcXJ0KHZ4ICogdnggKyB2eSAqIHZ5KTtcclxuICAgICAgICAgICAgY29uc3QgY3Jvd2RTcGVlZENhcCA9IHNsaWRlQmxvY2tlZCA/IDAgOiB0aGlzLm1heFNsaWRlU3BlZWQgKiAoMSAtIGNyb3dkICogMC43NSk7XHJcbiAgICAgICAgICAgIGlmIChzcGVlZCA+IGNyb3dkU3BlZWRDYXAgJiYgY3Jvd2RTcGVlZENhcCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IGNyb3dkU3BlZWRDYXAgLyBzcGVlZDtcclxuICAgICAgICAgICAgICAgIHZ4ICo9IHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgdnkgKj0gc2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZ4LCB2eSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucGF0aERpc3RhbmNlID49IG1heERpc3QgLSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXR0bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBib2R5LmxpbmVhclZlbG9jaXR5Lm1hZygpO1xyXG4gICAgICAgIGNvbnN0IG1pblNsaWRlID0gTWF0aC5taW4oMjQsIG1heERpc3QgKiAwLjEyKTtcclxuICAgICAgICBpZiAoc3BlZWQgPCB0aGlzLnNldHRsZVNwZWVkICYmIHN0YXRlLnBhdGhEaXN0YW5jZSA+PSBtaW5TbGlkZSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdGlsbFRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zdGlsbFRpbWUgPj0gMC4zNSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0dGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdGlsbFRpbWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLnNldHRsZWQpIHtcclxuICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhckRhbXBpbmcgPSAxLjg7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhckRhbXBpbmcgPSAxLjI7XHJcbiAgICAgICAgICAgIGJvZHkuYWxsb3dTbGVlcCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhYID0gb25BbGxvd2VkLm5lYXJlc3QueCAtIHBvcy54O1xyXG4gICAgICAgICAgICBjb25zdCB0b1BhdGhZID0gb25BbGxvd2VkLm5lYXJlc3QueSAtIHBvcy55O1xyXG4gICAgICAgICAgICBjb25zdCBob2xkRGFtcCA9IHRoaXMucGF0aFB1bGxEYW1waW5nICogKDEuNSArIGNyb3dkKTtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eS54ICsgdG9QYXRoWCAqIHRoaXMucGF0aFB1bGxTdHJlbmd0aCAqIGR0ICogMC4zNSAtIGJvZHkubGluZWFyVmVsb2NpdHkueCAqIGhvbGREYW1wICogZHQsXHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5LnkgKyB0b1BhdGhZICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHQgKiAwLjM1IC0gYm9keS5saW5lYXJWZWxvY2l0eS55ICogaG9sZERhbXAgKiBkdFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5zcXJ0KHRvUGF0aFggKiB0b1BhdGhYICsgdG9QYXRoWSAqIHRvUGF0aFkpO1xyXG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMS41ICYmIGJvZHkubGluZWFyVmVsb2NpdHkubWFnKCkgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5waXZvdC5zZXRQb3NpdGlvbihjYy52MyhvbkFsbG93ZWQubmVhcmVzdC54LCBvbkFsbG93ZWQubmVhcmVzdC55LCAwKSk7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbmZvcmNlQ2hhcm1TbGlkZUJvdW5kcyhzdGF0ZSwgb25BbGxvd2VkLCB0YW5nZW50LCBtYXhEaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvc3RQaHlzaWNzQ2hhcm1TbGlkZUZpeChzdGF0ZTogQ29yZENoYXJtU3RhdGUsIGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gc3RhdGUucGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghYm9keSB8fCAhcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICBjb25zdCBtYXhEaXN0ID0gdGhpcy5nZXRNYXhTbGlkZURpc3RhbmNlKHN0YXRlKTtcclxuICAgICAgICBjb25zdCBvbkFsbG93ZWQgPSB0aGlzLmdldE5lYXJlc3RPbkFsbG93ZWRTbGlkZVBhdGgoc3RhdGUsIHBvcyk7XHJcbiAgICAgICAgc3RhdGUucGF0aERpc3RhbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4RGlzdCwgb25BbGxvd2VkLnBhdGhEaXN0YW5jZSkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0luQW5jaG9yR2FwKHBvcykpIHtcclxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLmdldFNsaWRlRW50cnlBbmNob3Ioc3RhdGUuc2lkZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsYW1wUG9zID0gZW50cnkgfHwgb25BbGxvd2VkLm5lYXJlc3Q7XHJcbiAgICAgICAgICAgIHN0YXRlLnBpdm90LnNldFBvc2l0aW9uKGNjLnYzKGNsYW1wUG9zLngsIGNsYW1wUG9zLnksIDApKTtcclxuICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb3JyZWN0Q2hhcm1QaXZvdE9uUGF0aChzdGF0ZSwgb25BbGxvd2VkLCBkdCk7XHJcbiAgICAgICAgdGhpcy5kYW1wQ2hhcm1QaXZvdENyb3dkaW5nKHN0YXRlLCBkdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREaXN0YW5jZUFsb25nUGF0aChcclxuICAgICAgICBwb2ludHM6IGNjLlZlYzJbXSxcclxuICAgICAgICBzdGFydEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgZGlyOiBudW1iZXIsXHJcbiAgICAgICAgcG9zOiBjYy5WZWMyXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IG5lYXJlc3QgPSB0aGlzLmdldE5lYXJlc3RPblBhdGgocG9pbnRzLCBwb3MpO1xyXG4gICAgICAgIGxldCBkaXN0ID0gMDtcclxuICAgICAgICBsZXQgaWR4ID0gc3RhcnRJbmRleDtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBuZWFyZXN0LmluZGV4O1xyXG4gICAgICAgIGxldCBndWFyZCA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlIChpZHggIT09IHRhcmdldCAmJiBndWFyZCA8IHBvaW50cy5sZW5ndGggKyAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpZHggKyBkaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbbmV4dElkeF07XHJcbiAgICAgICAgICAgIGRpc3QgKz0gY2MudjIoYi54IC0gYS54LCBiLnkgLSBhLnkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgICAgICBndWFyZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VnQSA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgIGRpc3QgKz0gY2MudjIocG9zLnggLSBzZWdBLngsIHBvcy55IC0gc2VnQS55KS5tYWcoKTtcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFuZ2xlSW5Ob2RlU3BhY2Uobm9kZTogY2MuTm9kZSwgcm9vdDogY2MuTm9kZSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gbm9kZS5hbmdsZTtcclxuICAgICAgICBsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQgIT09IHJvb3QpIHtcclxuICAgICAgICAgICAgYW5nbGUgKz0gcGFyZW50LmFuZ2xlO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtZWFzdXJlUGF0aERpc3RhbmNlRnJvbUVudHJ5KHNpZGU6IENvcmRTaWRlLCBwb3M6IGNjLlZlYzIsIHBhdGhEaXI/OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgY29uc3QgZW50cnkgPSBzaWRlID09PSAnbGVmdCcgPyBhbmNob3JzLmxlZnQgOiBhbmNob3JzLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVudHJ5SW5kZXggPSB0aGlzLmZpbmROZWFyZXN0UGF0aEluZGV4KHBhdGgucG9pbnRzLCBlbnRyeSk7XHJcbiAgICAgICAgY29uc3QgZGlyID0gcGF0aERpciAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gcGF0aERpclxyXG4gICAgICAgICAgICA6IHRoaXMucGlja1BhdGhEaXJlY3Rpb24ocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHNpZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXN0YW5jZUFsb25nUGF0aChwYXRoLnBvaW50cywgZW50cnlJbmRleCwgZGlyLCBwb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1QYXRoRGlzdGFuY2Uoc3RhdGU6IENvcmRDaGFybVN0YXRlKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoIXN0YXRlLnBpdm90KSByZXR1cm4gc3RhdGUucGF0aERpc3RhbmNlO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgIGNvbnN0IG9uUGF0aCA9IHRoaXMuZ2V0TmVhcmVzdE9uQWxsb3dlZFNsaWRlUGF0aChzdGF0ZSwgcG9zKTtcclxuICAgICAgICBjb25zdCBtYXhEaXN0ID0gdGhpcy5nZXRNYXhTbGlkZURpc3RhbmNlKHN0YXRlKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4RGlzdCwgb25QYXRoLnBhdGhEaXN0YW5jZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1zT25TaWRlKHNpZGU6IENvcmRTaWRlKTogQ29yZENoYXJtU3RhdGVbXSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBDb3JkQ2hhcm1TdGF0ZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcmRDaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29yZENoYXJtc1tpXS5zaWRlID09PSBzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNvcmRDaGFybXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRPY2N1cGllZERpc3RhbmNlc09uU2lkZShzaWRlOiBDb3JkU2lkZSk6IG51bWJlcltdIHtcclxuICAgICAgICBjb25zdCBvblNpZGUgPSB0aGlzLmdldENoYXJtc09uU2lkZShzaWRlKTtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb25TaWRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlcy5wdXNoKHRoaXMuZ2V0RGlzdGFuY2VGcm9tQW5jaG9yKHNpZGUsIG9uU2lkZVtpXSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzdGFuY2VzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGlzdGFuY2VGcm9tQW5jaG9yKHNpZGU6IENvcmRTaWRlLCBzdGF0ZTogQ29yZENoYXJtU3RhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENoYXJtUGF0aERpc3RhbmNlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQsOhbiBrw61uaCB2w7luZyBuZW8gKGtob2FuaCDEkeG7jykg4oCUIGNoYXJtIHRyb25nIHbDuW5nIG7DoHkgdGjDrCBiw6puIMSRw7Mga2jDtG5nIHRo4bqjIHRow6ptLiAqL1xyXG4gICAgcHJpdmF0ZSBnZXRBbmNob3JEcm9wWm9uZVJhZGl1cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzICogMC41O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmVxdWlyZWRBbmNob3JHYXAoY2hhcm06IGNjLk5vZGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLm1pbkFuY2hvckRyb3BHYXAsIHRoaXMuZ2V0QW5jaG9yRHJvcFpvbmVSYWRpdXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybVNsb3RTcGFjaW5nKGNoYXJtOiBjYy5Ob2RlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRDaGFybUl0ZW1Db21wKGNoYXJtKTtcclxuICAgICAgICBpZiAoaXRlbSAmJiB0eXBlb2YgaXRlbS5zbG90U3BhY2luZyA9PT0gJ251bWJlcicgJiYgaXRlbS5zbG90U3BhY2luZyA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc2xvdFNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJtU2xvdFNwYWNpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENo4buJIHRo4bqjIMSRxrDhu6NjIGtoaSB2w7luZyBuZW8gxJHhu6cgdHLhu5FuZyDigJQga2nhu4NtIHRyYSBjaGFybSBuw6BvIMSRYW5nIGNoaeG6v20gZ+G6p24gbmVvIMSRw7MuICovXHJcbiAgICBwcml2YXRlIGNhbkRyb3BPblNpZGUoc2lkZTogQ29yZFNpZGUsIGNoYXJtOiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghYW5jaG9ycykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBhbmNob3JQb3MgPSBzaWRlID09PSAnbGVmdCcgPyBhbmNob3JzLmxlZnQgOiBhbmNob3JzLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkR2FwID0gdGhpcy5nZXRSZXF1aXJlZEFuY2hvckdhcChjaGFybSk7XHJcbiAgICAgICAgY29uc3Qgem9uZVJhZGl1cyA9IHRoaXMuZ2V0QW5jaG9yRHJvcFpvbmVSYWRpdXMoKTtcclxuICAgICAgICBsZXQgY2xvc2VzdFBhdGhEaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcmRDaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmNvcmRDaGFybXNbaV07XHJcbiAgICAgICAgICAgIGlmICghc3RhdGUucGl2b3QpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RUb0FuY2hvciA9IGNjLnYyKHBvcy54IC0gYW5jaG9yUG9zLngsIHBvcy55IC0gYW5jaG9yUG9zLnkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdFRvQW5jaG9yIDwgem9uZVJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdFRvQW5jaG9yIDwgdGhpcy5lbnRyeURldGVjdFJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aERpc3QgPSB0aGlzLm1lYXN1cmVQYXRoRGlzdGFuY2VGcm9tRW50cnkoc2lkZSwgcG9zKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoRGlzdCA8IGNsb3Nlc3RQYXRoRGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RQYXRoRGlzdCA9IHBhdGhEaXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2xvc2VzdFBhdGhEaXN0ID49IHJlcXVpcmVkR2FwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2NyZWVuVG9Xb3JsZE9uTWFpbihzY3JlZW5Qb3M6IGNjLlZlYzIpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsID0gbWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzY3JlZW5Qb3MpO1xyXG4gICAgICAgIHJldHVybiBtYWluLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihsb2NhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb3JkQW5jaG9yQXR0ZW1wdCh3b3JsZFBvczogY2MuVmVjMik6IHsgbmVhckxlZnQ6IGJvb2xlYW47IG5lYXJSaWdodDogYm9vbGVhbiB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghYW5jaG9ycyB8fCAhdGhpcy5hY3RpdmVDb3JkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgbG9jYWwgPSB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5BbmNob3JHYXAobG9jYWwpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdExlZnQgPSBjYy52Mihsb2NhbC54IC0gYW5jaG9ycy5sZWZ0LngsIGxvY2FsLnkgLSBhbmNob3JzLmxlZnQueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgZGlzdFJpZ2h0ID0gY2MudjIobG9jYWwueCAtIGFuY2hvcnMucmlnaHQueCwgbG9jYWwueSAtIGFuY2hvcnMucmlnaHQueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgbmVhckxlZnQgPSBkaXN0TGVmdCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IG5lYXJSaWdodCA9IGRpc3RSaWdodCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG4gICAgICAgIGlmICghbmVhckxlZnQgJiYgIW5lYXJSaWdodCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiB7IG5lYXJMZWZ0LCBuZWFyUmlnaHQgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogS2jDtG5nIGPDsm4gY2jhu5cgdGjhuqMg4bufIG5lbyB0csOhaS9waOG6o2kuICovXHJcbiAgICBwcml2YXRlIGlzQ29yZEZ1bGxGb3JDaGFybShjaGFybTogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5jYW5Ecm9wT25TaWRlKCdsZWZ0JywgY2hhcm0pICYmICF0aGlzLmNhbkRyb3BPblNpZGUoJ3JpZ2h0JywgY2hhcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvdWxkU2hvd0NvcmRGdWxsTm90aShzY3JlZW5Qb3M6IGNjLlZlYzIsIGNoYXJtV29ybGQ6IGNjLlZlYzIsIGNoYXJtOiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hXb3JsZCA9IHRoaXMuc2NyZWVuVG9Xb3JsZE9uTWFpbihzY3JlZW5Qb3MpO1xyXG4gICAgICAgIGNvbnN0IGF0dGVtcHQgPSB0aGlzLmdldENvcmRBbmNob3JBdHRlbXB0KGNoYXJtV29ybGQpXHJcbiAgICAgICAgICAgIHx8IHRoaXMuZ2V0Q29yZEFuY2hvckF0dGVtcHQodG91Y2hXb3JsZCk7XHJcbiAgICAgICAgaWYgKCFhdHRlbXB0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQ29yZEZ1bGxGb3JDaGFybShjaGFybSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChhdHRlbXB0Lm5lYXJMZWZ0ICYmICF0aGlzLmNhbkRyb3BPblNpZGUoJ2xlZnQnLCBjaGFybSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChhdHRlbXB0Lm5lYXJSaWdodCAmJiAhdGhpcy5jYW5Ecm9wT25TaWRlKCdyaWdodCcsIGNoYXJtKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGlja0F2YWlsYWJsZVNpZGUoXHJcbiAgICAgICAgbmVhckxlZnQ6IGJvb2xlYW4sXHJcbiAgICAgICAgbmVhclJpZ2h0OiBib29sZWFuLFxyXG4gICAgICAgIGRpc3RMZWZ0OiBudW1iZXIsXHJcbiAgICAgICAgZGlzdFJpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgY2hhcm06IGNjLk5vZGUsXHJcbiAgICAgICAgcHJlZmVyTGVmdD86IGJvb2xlYW5cclxuICAgICk6IENvcmRTaWRlIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlczogeyBzaWRlOiBDb3JkU2lkZTsgZGlzdDogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgICAgIGlmIChuZWFyTGVmdCkgY2FuZGlkYXRlcy5wdXNoKHsgc2lkZTogJ2xlZnQnLCBkaXN0OiBkaXN0TGVmdCB9KTtcclxuICAgICAgICBpZiAobmVhclJpZ2h0KSBjYW5kaWRhdGVzLnB1c2goeyBzaWRlOiAncmlnaHQnLCBkaXN0OiBkaXN0UmlnaHQgfSk7XHJcblxyXG4gICAgICAgIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNhbmRpZGF0ZXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJlZmVyTGVmdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhUHJlZiA9IChhLnNpZGUgPT09ICdsZWZ0JykgPT09IHByZWZlckxlZnQgPyAwIDogMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJQcmVmID0gKGIuc2lkZSA9PT0gJ2xlZnQnKSA9PT0gcHJlZmVyTGVmdCA/IDAgOiAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFQcmVmICE9PSBiUHJlZikgcmV0dXJuIGFQcmVmIC0gYlByZWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGEuZGlzdCAtIGIuZGlzdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkRyb3BPblNpZGUoY2FuZGlkYXRlc1tpXS5zaWRlLCBjaGFybSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzW2ldLnNpZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlRHJvcEFuY2hvcih3b3JsZFBvczogY2MuVmVjMiwgcHJlZmVycmVkU2lkZTogQ29yZFNpZGUsIGNoYXJtOiBjYy5Ob2RlKTogRHJvcEFuY2hvciB8IG51bGwge1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVDb3JkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghYW5jaG9ycykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvY2FsID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luQW5jaG9yR2FwKGxvY2FsKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnRQb3MgPSBhbmNob3JzLmxlZnQ7XHJcbiAgICAgICAgY29uc3QgcmlnaHRQb3MgPSBhbmNob3JzLnJpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0TGVmdCA9IGNjLnYyKGxvY2FsLnggLSBsZWZ0UG9zLngsIGxvY2FsLnkgLSBsZWZ0UG9zLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RSaWdodCA9IGNjLnYyKGxvY2FsLnggLSByaWdodFBvcy54LCBsb2NhbC55IC0gcmlnaHRQb3MueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgbmVhckxlZnQgPSBkaXN0TGVmdCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IG5lYXJSaWdodCA9IGRpc3RSaWdodCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG5cclxuICAgICAgICAvLyBDaOG7iSB0aOG6oyBraGkgc8OhdCBuZW8gdHLDoWkvcGjhuqNpIOKAlCBraMO0bmcgdGjhuqMgdHJvbmcga2hlIGjhu58gZ2nhu69hIDIgbmVvLlxyXG4gICAgICAgIGlmICghbmVhckxlZnQgJiYgIW5lYXJSaWdodCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHByZWZlckxlZnQgPSBkaXN0TGVmdCA8PSBkaXN0UmlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChwcmVmZXJyZWRTaWRlID09PSAnbGVmdCcgJiYgbmVhckxlZnQgJiYgdGhpcy5jYW5Ecm9wT25TaWRlKCdsZWZ0JywgY2hhcm0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHNpZGU6ICdsZWZ0JywgY29yZFBvczogbGVmdFBvcyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJlZmVycmVkU2lkZSA9PT0gJ3JpZ2h0JyAmJiBuZWFyUmlnaHQgJiYgdGhpcy5jYW5Ecm9wT25TaWRlKCdyaWdodCcsIGNoYXJtKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzaWRlOiAncmlnaHQnLCBjb3JkUG9zOiByaWdodFBvcyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2lkZSA9IHRoaXMucGlja0F2YWlsYWJsZVNpZGUobmVhckxlZnQsIG5lYXJSaWdodCwgZGlzdExlZnQsIGRpc3RSaWdodCwgY2hhcm0sIHByZWZlckxlZnQpO1xyXG4gICAgICAgIGlmICghc2lkZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgIGNvcmRQb3M6IHNpZGUgPT09ICdsZWZ0JyA/IGxlZnRQb3MgOiByaWdodFBvcyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hTbmFwUG9zZShzaWRlOiBDb3JkU2lkZSk6IHsgcG9zOiBjYy5WZWMzOyBhbmdsZTogbnVtYmVyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2lkZSA9PT0gJ2xlZnQnID8gY2hpbGRyZW4ubGVmdCA6IGNoaWxkcmVuLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY29uc3QgbG9jYWwgPSBtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb3M6IGNjLnYzKGxvY2FsLngsIGxvY2FsLnksIDApLFxyXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5nZXRBbmdsZUluTm9kZVNwYWNlKHRhcmdldCwgbWFpbiksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERyYWdTbmFwUG9zZShtYWluUG9zOiBjYy5WZWMzKTogeyBwb3M6IGNjLlZlYzM7IGFuZ2xlOiBudW1iZXI7IHNpZGU6IENvcmRTaWRlIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzIHx8ICF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRNYWluID0gbWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihhbmNob3JzLmxlZnQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCByaWdodE1haW4gPSBtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvV29ybGRTcGFjZUFSKGFuY2hvcnMucmlnaHQpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdExlZnQgPSBjYy52MihtYWluUG9zLnggLSBsZWZ0TWFpbi54LCBtYWluUG9zLnkgLSBsZWZ0TWFpbi55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBkaXN0UmlnaHQgPSBjYy52MihtYWluUG9zLnggLSByaWdodE1haW4ueCwgbWFpblBvcy55IC0gcmlnaHRNYWluLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IG5lYXJMZWZ0ID0gZGlzdExlZnQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuICAgICAgICBjb25zdCBuZWFyUmlnaHQgPSBkaXN0UmlnaHQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuXHJcbiAgICAgICAgbGV0IHNpZGU6IENvcmRTaWRlID0gbnVsbDtcclxuICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuZHJhZ2dpbmdDaGFybTtcclxuICAgICAgICBpZiAoIWNoYXJtKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgY29yZExvY2FsID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICBtYWluLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihtYWluUG9zLngsIG1haW5Qb3MueSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luQW5jaG9yR2FwKGNvcmRMb2NhbCkpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBpZiAobmVhckxlZnQgfHwgbmVhclJpZ2h0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZlckxlZnQgPSBkaXN0TGVmdCA8PSBkaXN0UmlnaHQ7XHJcbiAgICAgICAgICAgIHNpZGUgPSB0aGlzLnBpY2tBdmFpbGFibGVTaWRlKG5lYXJMZWZ0LCBuZWFyUmlnaHQsIGRpc3RMZWZ0LCBkaXN0UmlnaHQsIGNoYXJtLCBwcmVmZXJMZWZ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2lkZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXAgPSB0aGlzLmdldExvY2FsQm94U25hcFBvc2Uoc2lkZSk7XHJcbiAgICAgICAgaWYgKHNuYXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcG9zOiBzbmFwLnBvcywgYW5nbGU6IHNuYXAuYW5nbGUsIHNpZGUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMb2NhbEJveFNpZGVDaGlsZHJlbigpOiB7IGxlZnQ6IGNjLk5vZGU7IHJpZ2h0OiBjYy5Ob2RlIH0gfCBudWxsIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxCb3ggfHwgdGhpcy5sb2NhbEJveC5jaGlsZHJlbkNvdW50IDwgMikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnRCeU5hbWUgPSB0aGlzLmxvY2FsQm94LmdldENoaWxkQnlOYW1lKCdsZWZ0Jyk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRCeU5hbWUgPSB0aGlzLmxvY2FsQm94LmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmIChsZWZ0QnlOYW1lICYmIHJpZ2h0QnlOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGxlZnQ6IGxlZnRCeU5hbWUsIHJpZ2h0OiByaWdodEJ5TmFtZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2hpbGRBID0gdGhpcy5sb2NhbEJveC5jaGlsZHJlblswXTtcclxuICAgICAgICBjb25zdCBjaGlsZEIgPSB0aGlzLmxvY2FsQm94LmNoaWxkcmVuWzFdO1xyXG4gICAgICAgIHJldHVybiBjaGlsZEEueCA8PSBjaGlsZEIueFxyXG4gICAgICAgICAgICA/IHsgbGVmdDogY2hpbGRBLCByaWdodDogY2hpbGRCIH1cclxuICAgICAgICAgICAgOiB7IGxlZnQ6IGNoaWxkQiwgcmlnaHQ6IGNoaWxkQSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hIYW5nQW5nbGUoc2lkZTogQ29yZFNpZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRMb2NhbEJveFNpZGVDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBzaWRlID09PSAnbGVmdCcgPyBjaGlsZHJlbi5sZWZ0LmFuZ2xlIDogY2hpbGRyZW4ucmlnaHQuYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMb2NhbEJveEFuY2hvclBvc2l0aW9ucygpOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8ICF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NMZWZ0ID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICBjaGlsZHJlbi5sZWZ0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHBvc1JpZ2h0ID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICBjaGlsZHJlbi5yaWdodC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4geyBsZWZ0OiBwb3NMZWZ0LCByaWdodDogcG9zUmlnaHQgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvcmRBbmNob3JQb3NpdGlvbnMoKTogeyBsZWZ0OiBjYy5WZWMyOyByaWdodDogY2MuVmVjMiB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxCb3hBbmNob3JzID0gdGhpcy5nZXRMb2NhbEJveEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmIChsb2NhbEJveEFuY2hvcnMpIHJldHVybiBsb2NhbEJveEFuY2hvcnM7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5sZWZ0QW5jaG9yIHx8ICF0aGlzLnJpZ2h0QW5jaG9yKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBjYy52Mih0aGlzLmxlZnRBbmNob3IueCwgdGhpcy5sZWZ0QW5jaG9yLnkpLFxyXG4gICAgICAgICAgICByaWdodDogY2MudjIodGhpcy5yaWdodEFuY2hvci54LCB0aGlzLnJpZ2h0QW5jaG9yLnkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEtoZSBo4bufIGdp4buvYSAyIG5lbyDigJQga2jDtG5nIHBo4bqjaSB2w7luZyB0aOG6oyBjaGFybS4gKi9cclxuICAgIHByaXZhdGUgaXNJbkFuY2hvckdhcChsb2NhbDogY2MuVmVjMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGFuY2hvcnMubGVmdDtcclxuICAgICAgICBjb25zdCByaWdodCA9IGFuY2hvcnMucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgYW5jaG9yUmVhY2ggPSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzICogMC40O1xyXG4gICAgICAgIGNvbnN0IGRpc3RMZWZ0ID0gY2MudjIobG9jYWwueCAtIGxlZnQueCwgbG9jYWwueSAtIGxlZnQueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgZGlzdFJpZ2h0ID0gY2MudjIobG9jYWwueCAtIHJpZ2h0LngsIGxvY2FsLnkgLSByaWdodC55KS5tYWcoKTtcclxuXHJcbiAgICAgICAgaWYgKGRpc3RMZWZ0IDw9IGFuY2hvclJlYWNoIHx8IGRpc3RSaWdodCA8PSBhbmNob3JSZWFjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnYXBNaW5YID0gTWF0aC5taW4obGVmdC54LCByaWdodC54KSArIGFuY2hvclJlYWNoO1xyXG4gICAgICAgIGNvbnN0IGdhcE1heFggPSBNYXRoLm1heChsZWZ0LngsIHJpZ2h0LngpIC0gYW5jaG9yUmVhY2g7XHJcbiAgICAgICAgY29uc3QgdG9wWSA9IE1hdGgubWF4KGxlZnQueSwgcmlnaHQueSk7XHJcbiAgICAgICAgY29uc3QgaW5Ub3BCYW5kID0gbG9jYWwueSA+PSB0b3BZIC0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuXHJcbiAgICAgICAgcmV0dXJuIGluVG9wQmFuZCAmJiBsb2NhbC54ID49IGdhcE1pblggJiYgbG9jYWwueCA8PSBnYXBNYXhYO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RHJvcEFuY2hvckZvclNpZGUoc2lkZTogQ29yZFNpZGUsIGNoYXJtOiBjYy5Ob2RlKTogRHJvcEFuY2hvciB8IG51bGwge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5Ecm9wT25TaWRlKHNpZGUsIGNoYXJtKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgIGNvcmRQb3M6IHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBsYXRlQ2hhcm1BdChzY3JlZW5Qb3M6IGNjLlZlYzIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5wbGF0ZS5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLnBsYXRlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmFjdGl2ZSB8fCAhY2hpbGQuZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2hhcm1PbkNvcmQoY2hpbGQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBjaGlsZC5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICAgICAgaWYgKHJlY3QuY29udGFpbnMoc2NyZWVuUG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNDaGFybU9uQ29yZChjaGFybTogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jb3JkQ2hhcm1zW2ldO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuY2hhcm0gPT09IGNoYXJtIHx8IHN0YXRlLnBpdm90ID09PSBjaGFybSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjaGFybS5wYXJlbnQgPT09IHN0YXRlLnBpdm90KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvczogY2MuVmVjMik6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1haW5Ob2RlKCkuY29udmVydFRvTm9kZVNwYWNlQVIoc2NyZWVuUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1haW5Ob2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nIHx8IG5vZGUucGFyZW50Lm5hbWUgPT09ICdDYW52YXMnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nID8gbm9kZS5wYXJlbnQgOiBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQ29yZFJvdW5kTGlzdC5wYXJlbnQgfHwgdGhpcy5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGVmYXVsdEJyYWNlbGV0UmVmKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGNvbnN0IGNvcmRJZCA9IGdsb2JhbFRoaXMuaWRTdHJpbmcgfHwgMDtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QnJhY2VsZXRCeUNvcmQubGVuZ3RoID4gY29yZElkICYmIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2NvcmRJZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2NvcmRJZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmFjZWxldFJlZjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtSXRlbUNvbXAoY2hhcm06IGNjLk5vZGUpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjaGFybS5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpO1xyXG4gICAgICAgIGlmIChpdGVtKSByZXR1cm4gaXRlbTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcHMgPSBjaGFybS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjID0gY29tcHNbaV0gYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoYyAmJiB0eXBlb2YgYy50YWcgPT09ICdudW1iZXInICYmIHR5cGVvZiBjLmxvYWRJTUcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5mZXJDb3JkSWRGcm9tUmVmKHJlZjogY2MuTm9kZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgY29yZCA9IHRoaXMuZ2V0UmVmQ29yZE5vZGUocmVmKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gY29yZC5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgY29sb3JJZHM6IHsga2V5OiBzdHJpbmc7IGlkOiBudW1iZXIgfVtdID0gW1xyXG4gICAgICAgICAgICB7IGtleTogJ2JsYWNrJywgaWQ6IDAgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdibHVlJywgaWQ6IDEgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdncmVlbicsIGlkOiAyIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAncGluaycsIGlkOiAzIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAncHVycGxlJywgaWQ6IDQgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICd5ZWxsb3cnLCBpZDogNSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ3doaXRlJywgaWQ6IDYgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihjb2xvcklkc1tpXS5rZXkpID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcklkc1tpXS5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q29yZElkID49IDAgPyB0aGlzLmRlZmF1bHRDb3JkSWQgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZERlZmF1bHRNZXRhKHJlZjogY2MuTm9kZSk6IHsgY29yZElkOiBudW1iZXI7IGtleWNoYWluSW5kZXg6IG51bWJlciB9IHtcclxuICAgICAgICBjb25zdCBtZXRhID0gcmVmICYmIHJlZi5nZXRDb21wb25lbnQoJ0JyYWNlbGV0RGVmYXVsdE1ldGEnKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKG1ldGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcmRJZDogbWV0YS5jb3JkSWQsXHJcbiAgICAgICAgICAgICAgICBrZXljaGFpbkluZGV4OiBtZXRhLmtleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0Q29yZElkID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcmRJZDogdGhpcy5kZWZhdWx0Q29yZElkLFxyXG4gICAgICAgICAgICAgICAga2V5Y2hhaW5JbmRleDogdGhpcy5kZWZhdWx0S2V5Y2hhaW5JbmRleCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvcmRJZDogdGhpcy5pbmZlckNvcmRJZEZyb21SZWYocmVmKSxcclxuICAgICAgICAgICAga2V5Y2hhaW5JbmRleDogdGhpcy5kZWZhdWx0S2V5Y2hhaW5JbmRleCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FjaGVEZWZhdWx0TWV0YU9ubHkoKSB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpO1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLnJlYWREZWZhdWx0TWV0YShyZWYpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdENvcmRJZCA9IG1ldGEuY29yZElkO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXggPSBtZXRhLmtleWNoYWluSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWNoZURlZmF1bHRDb25maWcoYWN0aXZlQ29yZD86IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZkZvckNhY2hlKCk7XHJcbiAgICAgICAgaWYgKCFyZWYpIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NvcmRSb3VuZEdhbWVdIENoxrBhIGfDoW4gZGVmYXVsdEJyYWNlbGV0UmVmIOKAlCBraMO0bmcgdGjhu4Mgc28gc8OhbmggdsOybmcgbeG6q3UuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdExheW91dCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQgPSB0aGlzLmRlZmF1bHRDb3JkSWQgPj0gMCA/IHRoaXMuZGVmYXVsdENvcmRJZCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXggPSB0aGlzLmRlZmF1bHRLZXljaGFpbkluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb25maWdDYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMucmVhZERlZmF1bHRNZXRhKHJlZik7XHJcbiAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkID0gbWV0YS5jb3JkSWQ7XHJcbiAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleCA9IG1ldGEua2V5Y2hhaW5JbmRleDtcclxuICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQgPSB0aGlzLmJ1aWxkRGVmYXVsdExheW91dEZyb21SZWYocmVmLCBhY3RpdmVDb3JkKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRDb25maWdDYWNoZWQgPSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgY2MubG9nKCdbQ29yZFJvdW5kR2FtZV0gRGVmYXVsdCBjb25maWc6IGNvcmRJZD0nICsgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkXHJcbiAgICAgICAgICAgICsgJyAocGxheWVyPScgKyAoZ2xvYmFsVGhpcy5pZFN0cmluZyB8fCAwKSArICcpJ1xyXG4gICAgICAgICAgICArICcga2V5Y2hhaW49JyArIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXhcclxuICAgICAgICAgICAgKyAnIGNoYXJtcz0nICsgdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0Lmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEx1w7RuIHRy4bqjIHJlZiBt4bqrdSBj4buRIMSR4buLbmgg4oCUIGtow7RuZyBwaOG7pSB0aHXhu5ljIGTDonkgbmfGsOG7nWkgY2jGoWkgxJFhbmcgY2jhu41uLiAqL1xyXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QnJhY2VsZXRSZWYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0UmVmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRCcmFjZWxldEJ5Q29yZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRDb3JkSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRLZXljaGFpbkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFNjb3JlQnJlYWtkb3duKCk6IE1hdGNoU2NvcmVCcmVha2Rvd24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RTY29yZUJyZWFrZG93bjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlZkNvcmROb2RlKHJlZjogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmIChyZWYuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikpIHJldHVybiByZWY7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWYuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcmVmLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikpIHJldHVybiBjaGlsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlZjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlZkNvcmRBbmNob3JzKHJlZkNvcmQ6IGNjLk5vZGUpOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gcmVmQ29yZC5nZXRDaGlsZEJ5TmFtZSgnbGVmdCcpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gcmVmQ29yZC5nZXRDaGlsZEJ5TmFtZSgncmlnaHQnKTtcclxuICAgICAgICBpZiAoIWxlZnQgfHwgIXJpZ2h0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBjYy52MihsZWZ0LngsIGxlZnQueSksXHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYy52MihyaWdodC54LCByaWdodC55KSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UGF0aERhdGFGb3JDb3JkKGNvcmQ6IGNjLk5vZGUpOiBDb3JkUGF0aERhdGEgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuY29yZFBhdGhzLmdldChjb3JkKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcclxuXHJcbiAgICAgICAgY29uc3QgcmF3UG9pbnRzID0gdGhpcy5nZXRQb2x5Z29uQ29sbGlkZXJQb2ludHMoY29yZCk7XHJcbiAgICAgICAgaWYgKHJhd1BvaW50cy5sZW5ndGggPCAyKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcyA9IHRoaXMuc2FtcGxlQWxvbmdQYXRoKHJhd1BvaW50cywgdGhpcy5wYXRoU2FtcGxlU3BhY2luZyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9pbnRzOiBzYW1wbGVzLFxyXG4gICAgICAgICAgICB0b3RhbExlbmd0aDogdGhpcy5jYWxjUGF0aExlbmd0aChzYW1wbGVzKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29yZEFuY2hvcnMoY29yZDogY2MuTm9kZSk6IHsgbGVmdDogY2MuVmVjMjsgcmlnaHQ6IGNjLlZlYzIgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBjb3JkLmdldENoaWxkQnlOYW1lKCdsZWZ0Jyk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBjb3JkLmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmICghbGVmdCB8fCAhcmlnaHQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNjLnYyKGxlZnQueCwgbGVmdC55KSxcclxuICAgICAgICAgICAgcmlnaHQ6IGNjLnYyKHJpZ2h0LngsIHJpZ2h0LnkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUZW1wbGF0ZUNvcmQoY29yZElkPzogbnVtYmVyKTogY2MuTm9kZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGlkID0gY29yZElkICE9PSB1bmRlZmluZWQgPyBjb3JkSWQgOiB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLkNvcmRSb3VuZExpc3QgfHwgaWQgPCAwKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuW2lkXSB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVhc3VyZVBhdGhEaXN0YW5jZU9uQ29yZChcclxuICAgICAgICBjb3JkOiBjYy5Ob2RlLFxyXG4gICAgICAgIHBhdGg6IENvcmRQYXRoRGF0YSxcclxuICAgICAgICBhbmNob3JzOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0sXHJcbiAgICAgICAgc2lkZTogQ29yZFNpZGUsXHJcbiAgICAgICAgcG9zOiBjYy5WZWMyXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXIgPSB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzaWRlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXN0YW5jZUFsb25nUGF0aChwYXRoLnBvaW50cywgZW50cnlJbmRleCwgcGF0aERpciwgcG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkRGVmYXVsdExheW91dCgpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZ2V0RGVmYXVsdEJyYWNlbGV0UmVmRm9yQ2FjaGUoKSB8fCB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZigpO1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGREZWZhdWx0TGF5b3V0RnJvbVJlZihyZWYsIHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZERlZmF1bHRMYXlvdXRGcm9tUmVmKHJlZjogY2MuTm9kZSwgYWN0aXZlQ29yZD86IGNjLk5vZGUpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZkNvcmQgPSB0aGlzLmdldFJlZkNvcmROb2RlKHJlZik7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGVDb3JkID0gYWN0aXZlQ29yZCB8fCB0aGlzLmdldFRlbXBsYXRlQ29yZCgpO1xyXG4gICAgICAgIGlmICghdGVtcGxhdGVDb3JkKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBLaMO0bmcgdMOsbSB0aOG6pXkgZMOieSBnYW1lIMSR4buDIMSR4buNYyBsYXlvdXQgbeG6q3UuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGhEYXRhRm9yQ29yZCh0ZW1wbGF0ZUNvcmQpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JzKHRlbXBsYXRlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBEw6J5IGdhbWUgdGhp4bq/dSBQb2x5Z29uQ29sbGlkZXIgaG/hurdjIGFuY2hvciBsZWZ0L3JpZ2h0LicpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGFybVJvb3QgPSByZWYuZ2V0Q2hpbGRCeU5hbWUoJ2NoYXJtJykgfHwgcmVmO1xyXG4gICAgICAgIGNvbnN0IHNsb3RzOiBDaGFybVNsb3REYXRhW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFybVJvb3QuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJtID0gY2hhcm1Sb290LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRDaGFybUl0ZW1Db21wKGNoYXJtKTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc09uQ29yZCA9IHJlZkNvcmQuY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgICAgICBjaGFybS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGUgPSB0aGlzLnJlc29sdmVTaWRlRm9yUG9zaXRpb24ocG9zT25Db3JkLCBhbmNob3JzKTtcclxuICAgICAgICAgICAgY29uc3QgcGF0aERpc3RhbmNlID0gdGhpcy5tZWFzdXJlUGF0aERpc3RhbmNlT25Db3JkKFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVDb3JkLFxyXG4gICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgIGFuY2hvcnMsXHJcbiAgICAgICAgICAgICAgICBzaWRlLFxyXG4gICAgICAgICAgICAgICAgcG9zT25Db3JkXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBzbG90cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRhZzogaXRlbS50YWcsXHJcbiAgICAgICAgICAgICAgICBjb2xvckluZGV4OiBpdGVtLmNvbG9ySW5kZXggfHwgMCxcclxuICAgICAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgICAgICBwYXRoRGlzdGFuY2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xvdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlU2lkZUZvclBvc2l0aW9uKFxyXG4gICAgICAgIGNvcmRMb2NhbDogY2MuVmVjMixcclxuICAgICAgICBhbmNob3JzOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH1cclxuICAgICk6IENvcmRTaWRlIHtcclxuICAgICAgICBjb25zdCBkaXN0TGVmdCA9IGNjLnYyKGNvcmRMb2NhbC54IC0gYW5jaG9ycy5sZWZ0LngsIGNvcmRMb2NhbC55IC0gYW5jaG9ycy5sZWZ0LnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RSaWdodCA9IGNjLnYyKGNvcmRMb2NhbC54IC0gYW5jaG9ycy5yaWdodC54LCBjb3JkTG9jYWwueSAtIGFuY2hvcnMucmlnaHQueSkubWFnKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RMZWZ0IDw9IGRpc3RSaWdodCA/ICdsZWZ0JyA6ICdyaWdodCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFBsYXllckxheW91dCgpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGNvbnN0IHNsb3RzOiBDaGFybVNsb3REYXRhW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY29yZENoYXJtc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLmNoYXJtLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykgYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgc2xvdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0YWc6IGl0ZW0udGFnLFxyXG4gICAgICAgICAgICAgICAgY29sb3JJbmRleDogaXRlbS5jb2xvckluZGV4IHx8IDAsXHJcbiAgICAgICAgICAgICAgICBzaWRlOiBzdGF0ZS5zaWRlLFxyXG4gICAgICAgICAgICAgICAgcGF0aERpc3RhbmNlOiB0aGlzLmdldENoYXJtUGF0aERpc3RhbmNlKHN0YXRlKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbG90cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNsb3RQb3NlKHNsb3Q6IENoYXJtU2xvdERhdGEpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBhbmdsZTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAsIGFuZ2xlOiAwIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbnRyeSA9IHNsb3Quc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXIgPSB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzbG90LnNpZGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2VPblBhdGgocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHBhdGhEaXIsIHNsb3QucGF0aERpc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCkge1xyXG4gICAgICAgIHRoaXMuaGlkZURlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVkRGVmYXVsdExheW91dC5sZW5ndGggfHwgIXRoaXMuY2hhcm1MYXllcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZigpO1xyXG4gICAgICAgIGNvbnN0IGNoYXJtUm9vdCA9IHJlZiAmJiAocmVmLmdldENoaWxkQnlOYW1lKCdjaGFybScpIHx8IHJlZik7XHJcbiAgICAgICAgaWYgKCFjaGFybVJvb3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlldyA9IG5ldyBjYy5Ob2RlKCdkZWZhdWx0QnJhY2VsZXRQcmV2aWV3Jyk7XHJcbiAgICAgICAgcHJldmlldy5wYXJlbnQgPSB0aGlzLmNoYXJtTGF5ZXI7XHJcbiAgICAgICAgcHJldmlldy5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcblxyXG4gICAgICAgIGxldCBzcmNJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFybVJvb3QuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNoYXJtUm9vdC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKCFzcmMuZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChzcmNJbmRleCA+PSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQubGVuZ3RoKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXRbc3JjSW5kZXhdO1xyXG4gICAgICAgICAgICBzcmNJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBjYy5pbnN0YW50aWF0ZShzcmMpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NlID0gdGhpcy5nZXRTbG90UG9zZShzbG90KTtcclxuICAgICAgICAgICAgY2xvbmUucGFyZW50ID0gcHJldmlldztcclxuICAgICAgICAgICAgY2xvbmUuc2V0UG9zaXRpb24oY2MudjMocG9zZS54LCBwb3NlLnksIDApKTtcclxuICAgICAgICAgICAgY2xvbmUuYW5nbGUgPSBwb3NlLmFuZ2xlO1xyXG4gICAgICAgICAgICBjbG9uZS5vcGFjaXR5ID0gMTUwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGNsb25lLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkgYm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpZGVycyA9IGNsb25lLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc0NvbGxpZGVyKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xsaWRlcnMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyc1tjXS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdOb2RlID0gcHJldmlldztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRQcmV2aWV3Tm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Tm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdOb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFNvIHPDoW5oIGNoYXJtICgw4oCTMTAwJSwgY2jGsGEgZ+G7k20gZMOieSB2w6Aga2V5Y2hhaW4pLiAqL1xyXG4gICAgY29tcGFyZUNoYXJtc09ubHkoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHRoaXMuY2FjaGVkRGVmYXVsdExheW91dC5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgID8gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0XHJcbiAgICAgICAgICAgIDogdGhpcy5idWlsZERlZmF1bHRMYXlvdXQoKTtcclxuXHJcbiAgICAgICAgaWYgKGV4cGVjdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHRoaXMuYnVpbGRQbGF5ZXJMYXlvdXQoKTtcclxuICAgICAgICByZXR1cm4gY2FsY0NoYXJtTWF0Y2hQZXJjZW50KGV4cGVjdGVkLCBhY3R1YWwsIHRoaXMubWF0Y2hQb3NpdGlvblRvbGVyYW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTbyBzw6FuaCDEkeG6p3kgxJHhu6c6IGTDonkgKDMwJSkgKyBjaGFybSAoNTAlKSArIGtleWNoYWluICgyMCUpLlxyXG4gICAgICogR+G7jWkga2hpIMSRw6MgY8OzIGzhu7FhIGNo4buNbiBrZXljaGFpbiBj4bunYSBuZ8aw4budaSBjaMahaS5cclxuICAgICAqL1xyXG4gICAgY29tcGFyZUZ1bGwocGxheWVyS2V5Y2hhaW5JbmRleDogbnVtYmVyKTogTWF0Y2hTY29yZUJyZWFrZG93biB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpO1xyXG4gICAgICAgIGlmIChyZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0ID0gdGhpcy5idWlsZERlZmF1bHRMYXlvdXRGcm9tUmVmKHJlZiwgdGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0O1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHRoaXMuYnVpbGRQbGF5ZXJMYXlvdXQoKTtcclxuICAgICAgICBjb25zdCBhY3R1YWxDb3JkSWQgPSBnbG9iYWxUaGlzLmlkU3RyaW5nIHx8IDA7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duID0gY2FsY0Z1bGxTY29yZShcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkLFxyXG4gICAgICAgICAgICBhY3R1YWxDb3JkSWQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkLFxyXG4gICAgICAgICAgICBhY3R1YWwsXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIHBsYXllcktleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hQb3NpdGlvblRvbGVyYW5jZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sYXN0TWF0Y2hQZXJjZW50ID0gdGhpcy5sYXN0U2NvcmVCcmVha2Rvd24udG90YWw7XHJcblxyXG4gICAgICAgIGNjLmxvZygnW0NvcmRSb3VuZEdhbWVdIENvbXBhcmU6IGV4cGVjdGVkQ29yZD0nICsgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkXHJcbiAgICAgICAgICAgICsgJyBwbGF5ZXJDb3JkPScgKyBhY3R1YWxDb3JkSWRcclxuICAgICAgICAgICAgKyAnIGV4cGVjdGVkQ2hhcm1zPScgKyBleHBlY3RlZC5sZW5ndGhcclxuICAgICAgICAgICAgKyAnIHBsYXllckNoYXJtcz0nICsgYWN0dWFsLmxlbmd0aFxyXG4gICAgICAgICAgICArICcga2V5Y2hhaW49JyArIHBsYXllcktleWNoYWluSW5kZXhcclxuICAgICAgICAgICAgKyAnID0+ICcgKyB0aGlzLmxhc3RNYXRjaFBlcmNlbnQgKyAnJSdcclxuICAgICAgICAgICAgKyAnIChkw6J5ICcgKyB0aGlzLmxhc3RTY29yZUJyZWFrZG93bi5jb3JkU2NvcmVcclxuICAgICAgICAgICAgKyAnIGNoYXJtICcgKyB0aGlzLmxhc3RTY29yZUJyZWFrZG93bi5jaGFybVNjb3JlXHJcbiAgICAgICAgICAgICsgJyBrZXkgJyArIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duLmtleWNoYWluU2NvcmUgKyAnKScpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0U2NvcmVCcmVha2Rvd247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBkZXByZWNhdGVkIGTDuW5nIGNvbXBhcmVGdWxsICovXHJcbiAgICBjb21wYXJlV2l0aERlZmF1bHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlQ2hhcm1zT25seSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RNYXRjaFBlcmNlbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0TWF0Y2hQZXJjZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNYXRjaFJlc3VsdChwZXJjZW50PzogbnVtYmVyLCBicmVha2Rvd24/OiBNYXRjaFNjb3JlQnJlYWtkb3duKSB7XHJcbiAgICAgICAgY29uc3QgYmQgPSBicmVha2Rvd24gfHwgdGhpcy5sYXN0U2NvcmVCcmVha2Rvd247XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwZXJjZW50ICE9PSB1bmRlZmluZWQgPyBwZXJjZW50IDogdGhpcy5sYXN0TWF0Y2hQZXJjZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXRjaFJlc3VsdExhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hSZXN1bHRMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hSZXN1bHRMYWJlbC5zdHJpbmcgPSB2YWx1ZSArICclJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiZCkge1xyXG4gICAgICAgICAgICBjYy5sb2coJ1tDb3JkUm91bmRHYW1lXSBTY29yZTogJyArIHZhbHVlICsgJyUnXHJcbiAgICAgICAgICAgICAgICArICcgfCBjb3JkPScgKyBiZC5jb3JkU2NvcmVcclxuICAgICAgICAgICAgICAgICsgJyBjaGFybT0nICsgYmQuY2hhcm1TY29yZVxyXG4gICAgICAgICAgICAgICAgKyAnIGtleWNoYWluPScgKyBiZC5rZXljaGFpblNjb3JlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coJ1tDb3JkUm91bmRHYW1lXSBNYXRjaDogJyArIHZhbHVlICsgJyUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEfhu41pIGtoaSB4b25nIHjhur9wIGNoYXJtIOKAlCBjaOG7iSDhuqluIHByZXZpZXcsIGNoxrBhIHTDrW5oICUgY3Xhu5FpLiAqL1xyXG4gICAgZmluaXNoQnJhY2VsZXRQaGFzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEfhu41pIGtoaSBr4bq/dCB0aMO6YyBnYW1lIOKAlCB0w61uaCAlIMSR4bqneSDEkeG7pyB2w6AgaGnhu4NuIHRo4buLLiAqL1xyXG4gICAgZmluaXNoQW5kQ29tcGFyZShwbGF5ZXJLZXljaGFpbkluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuaGlkZURlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICBjb25zdCBicmVha2Rvd24gPSB0aGlzLmNvbXBhcmVGdWxsKHBsYXllcktleWNoYWluSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2hvd01hdGNoUmVzdWx0KGJyZWFrZG93bi50b3RhbCwgYnJlYWtkb3duKTtcclxuICAgICAgICByZXR1cm4gYnJlYWtkb3duLnRvdGFsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcm1TbGlkZSh0aGlzLmNvcmRDaGFybXNbaV0sIGR0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGF0ZVVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdFBoeXNpY3NDaGFybVNsaWRlRml4KHRoaXMuY29yZENoYXJtc1tpXSwgZHQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN0cmFpbkNoYXJtSGFuZyh0aGlzLmNvcmRDaGFybXNbaV0sIGR0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19