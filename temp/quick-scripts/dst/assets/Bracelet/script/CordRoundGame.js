
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
        _this.linkToStore = null;
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
        _this.isCountGame = 0;
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
        if (!this.charmHind || !charm)
            return;
        var item = charm.getComponent('CharmItem');
        if (!item)
            return;
        var tag = item.tag;
        if (tag < 0 || tag >= this.charmHind.childrenCount)
            return;
        if (this.isTargetHind) {
            this.isTargetHind.active = false;
        }
        var hind = this.charmHind.children[tag];
        if (!hind)
            return;
        hind.active = true;
        this.isTargetHind = hind;
        var colorIMG = item.getColor && item.getColor();
        if (colorIMG) {
            if (hind.children[0]) {
                var sp0 = hind.children[0].getComponent(cc.Sprite);
                if (sp0)
                    sp0.spriteFrame = colorIMG;
            }
            if (hind.children[1]) {
                var sp1 = hind.children[1].getComponent(cc.Sprite);
                if (sp1)
                    sp1.spriteFrame = colorIMG;
            }
        }
        this.localBox = hind;
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
        this.preparePlateForBraceletMode();
        this.cacheDefaultConfig(this.activeCord);
        if (this.showDefaultPreview) {
            this.showDefaultBraceletPreview();
        }
        this.bindTouch();
    };
    /**
     * Khay có PhysicsPolygonCollider rất lớn — nếu còn bật sẽ đụng charm
     * đang treo trên dây và đẩy chúng vào giữa vòng.
     */
    CordRoundGame.prototype.preparePlateForBraceletMode = function () {
        if (!this.plate)
            return;
        for (var i = 0; i < this.plate.childrenCount; i++) {
            var child = this.plate.children[i];
            if (!child.getComponent('CharmItem'))
                continue;
            var body = child.getComponent(cc.RigidBody);
            if (!body)
                continue;
            body.gravityScale = 0;
            body.linearVelocity = cc.v2(0, 0);
            body.angularVelocity = 0;
            body.syncPosition(true);
        }
        var colliders = this.plate.getComponents(cc.PhysicsCollider);
        for (var i = 0; i < colliders.length; i++) {
            colliders[i].enabled = false;
        }
        var plateBody = this.plate.getComponent(cc.RigidBody);
        if (plateBody) {
            plateBody.active = false;
            plateBody.enabled = false;
        }
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
            this.isCountGame++;
            if (this.isCountGame == 5) {
                this.linkToStore.active = true;
            }
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
        // Đưa pivot sang charmLayer bằng world pos để tránh nhảy tọa độ khi đổi parent.
        var pivotWorld = pivot.parent
            ? pivot.parent.convertToWorldSpaceAR(pivot.position)
            : charm.convertToWorldSpaceAR(cc.v2(0, 0));
        pivot.parent = this.charmLayer;
        pivot.setPosition(this.charmLayer.convertToNodeSpaceAR(pivotWorld));
        pivot.setPosition(cc.v3(anchorPos.x, anchorPos.y, 0));
        var hangLocal = this.getHangLocalOffset(charm);
        var outward = this.getOutwardFromCenter(cc.v2(anchorPos.x, anchorPos.y));
        charm.angle = this.angleForOutwardHang(outward, hangLocal);
        if (charm.children[0]) {
            charm.children[0].scale = 0.8;
        }
        var pivotBody = pivot.getComponent(cc.RigidBody);
        var charmBody = charm.getComponent(cc.RigidBody);
        if (pivotBody) {
            pivotBody.enabled = true;
            pivotBody.active = true;
            pivotBody.type = cc.RigidBodyType.Dynamic;
            pivotBody.syncPosition(true);
            pivotBody.linearVelocity = cc.v2(0, 0);
            pivotBody.angularVelocity = 0;
            pivotBody.gravityScale = 1;
            pivotBody.allowSleep = false;
            pivotBody.awake = true;
            var tangent = this.getTangentAtIndex(path.points, startIndex, pathDir);
            pivotBody.linearVelocity = tangent.mul(this.dropSlideSpeed);
        }
        if (charmBody) {
            charmBody.enabled = true;
            charmBody.active = true;
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
            if (this.isScreenPosOnCharm(child, screenPos)) {
                return child;
            }
        }
        return null;
    };
    /** Prefab charm gốc size = 0 — phải hit theo icon / khoảng cách. */
    CordRoundGame.prototype.isScreenPosOnCharm = function (charm, screenPos) {
        var icon = charm.getChildByName('icon')
            || (charm.childrenCount > 0 ? charm.children[0] : null);
        if (icon) {
            var rect = icon.getBoundingBoxToWorld();
            var pad = 12;
            var hit = cc.rect(rect.x - pad, rect.y - pad, rect.width + pad * 2, rect.height + pad * 2);
            if (hit.contains(screenPos))
                return true;
        }
        var world = charm.convertToWorldSpaceAR(cc.v2(0, 0));
        var dx = world.x - screenPos.x;
        var dy = world.y - screenPos.y;
        return (dx * dx + dy * dy) <= 95 * 95;
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
        property(cc.Node)
    ], CordRoundGame.prototype, "linkToStore", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ29yZFJvdW5kR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkc7QUFFdkcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUEwQjVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBNG5FQztRQXpuRUcsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyx1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFHL0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFHM0Isa0JBQVksR0FBVyxHQUFHLENBQUM7UUFHM0IsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsaURBQWlEO1FBRWpELG9CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRzVCLHNCQUFnQixHQUFXLEdBQUcsQ0FBQztRQUcvQixxQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUc3QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd6Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFHaEMsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBRS9CLDREQUE0RDtRQUU1RCxzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFHOUIsb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFHNUIsMEJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBRWxDLDBEQUEwRDtRQUUxRCwrQkFBeUIsR0FBVyxFQUFFLENBQUM7UUFFdkMseUVBQXlFO1FBRXpFLDZCQUF1QixHQUFXLElBQUksQ0FBQztRQUV2QywwRUFBMEU7UUFFMUUsK0JBQXlCLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMs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aW1wb3J0IHsgY2FsY0NoYXJtTWF0Y2hQZXJjZW50LCBjYWxjRnVsbFNjb3JlLCBDaGFybVNsb3REYXRhLCBNYXRjaFNjb3JlQnJlYWtkb3duIH0gZnJvbSAnLi9CcmFjZWxldE1hdGNoZXInO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbnR5cGUgQ29yZFNpZGUgPSAnbGVmdCcgfCAncmlnaHQnO1xyXG5cclxuaW50ZXJmYWNlIENvcmRQYXRoRGF0YSB7XHJcbiAgICBwb2ludHM6IGNjLlZlYzJbXTtcclxuICAgIHRvdGFsTGVuZ3RoOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb3JkQ2hhcm1TdGF0ZSB7XHJcbiAgICBwaXZvdDogY2MuTm9kZTtcclxuICAgIGNoYXJtOiBjYy5Ob2RlO1xyXG4gICAgc2V0dGxlZDogYm9vbGVhbjtcclxuICAgIHN0aWxsVGltZTogbnVtYmVyO1xyXG4gICAgc2lkZTogQ29yZFNpZGU7XHJcbiAgICBwYXRoU3RhcnRJbmRleDogbnVtYmVyO1xyXG4gICAgcGF0aERpcjogbnVtYmVyO1xyXG4gICAgcGF0aERpc3RhbmNlOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBEcm9wQW5jaG9yIHtcclxuICAgIHNpZGU6IENvcmRTaWRlO1xyXG4gICAgY29yZFBvczogY2MuVmVjMjtcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZFJvdW5kR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDb3JkUm91bmRMaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcm1IaW5kOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZW50cnlEZXRlY3RSYWRpdXM6IG51bWJlciA9IDExMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBhdGhTYW1wbGVTcGFjaW5nOiBudW1iZXIgPSAxMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNlZ21lbnRSYWRpdXM6IG51bWJlciA9IDE0O1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2xpZGVHcmF2aXR5OiBudW1iZXIgPSAxNTA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhTbGlkZVNwZWVkOiBudW1iZXIgPSAxMzA7XHJcblxyXG4gICAgLyoqIFbhuq1uIHThu5FjIGJhbiDEkeG6p3Uga2hpIHbhu6thIHRo4bqjIGNoYXJtIGzDqm4gZMOieS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZHJvcFNsaWRlU3BlZWQ6IG51bWJlciA9IDM1O1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGF0aFB1bGxTdHJlbmd0aDogbnVtYmVyID0gNDIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGF0aFB1bGxEYW1waW5nOiBudW1iZXIgPSAxNjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNldHRsZVNwZWVkOiBudW1iZXIgPSAyMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBpdm90Q29sbGlkZXJSYWRpdXM6IG51bWJlciA9IDg7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjaGFybVNsb3RTcGFjaW5nOiBudW1iZXIgPSAxMzA7XHJcblxyXG4gICAgLyoqIEtob+G6o25nIHRy4buRbmcgdOG7kWkgdGhp4buDdSBn4bqnbiBuZW8gxJHhu4MgY2hvIHBow6lwIHRo4bqjIGNoYXJtLiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaW5BbmNob3JEcm9wR2FwOiBudW1iZXIgPSA2MDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGhhbmdTd2luZ0xpbWl0OiBudW1iZXIgPSAzMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGhhbmdPdXR3YXJkU3RpZmZuZXNzOiBudW1iZXIgPSAxNDtcclxuXHJcbiAgICAvKiogSMOjbSB04buRYyBraGkgY2hhcm0gY2hlbiBuaGF1IChjw6BuZyBjYW8gY8Ogbmcgw610IG7huql5KS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY2hhcm1Dcm93ZERhbXBpbmdTdHJlbmd0aDogbnVtYmVyID0gMTY7XHJcblxyXG4gICAgLyoqIFBo4bqnbiB24bqtbiB04buRYyBjw7JuIGzhuqFpIGtoaSBy4bqldCDEkcO0bmcgKDAuMDUgPSBn4bqnbiBuaMawIGtow7RuZyDEkeG6qXkgbmhhdSkuICovXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGNoYXJtQ3Jvd2RQdXNoUmV0ZW50aW9uOiBudW1iZXIgPSAwLjA2O1xyXG5cclxuICAgIC8qKiBT4buRIGNoYXJtIHPDoXQgbmhhdSAoa+G7gyBj4bqjIGLhuqNuIHRow6JuKSDEkeG7gyB0cmnhu4d0IHRpw6p1IGzhu7FjIHRyxrDhu6N0L3ZhIGNo4bqhbS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY2hhcm1Dcm93ZEZ1bGxDYW5jZWxDb3VudDogbnVtYmVyID0gNjtcclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZUNvcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb3JkUGF0aHM6IE1hcDxjYy5Ob2RlLCBDb3JkUGF0aERhdGE+ID0gbmV3IE1hcCgpO1xyXG4gICAgcHJpdmF0ZSBwcmVwYXJlZENvcmRzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgbGVmdEFuY2hvcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJpZ2h0QW5jaG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2hhcm1MYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvcmRDaGFybXM6IENvcmRDaGFybVN0YXRlW10gPSBbXTtcclxuICAgIHByaXZhdGUgZHJhZ2dpbmdDaGFybTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdTbmFwU2lkZTogQ29yZFNpZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3JpZ2luUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHJhZ09yaWdpblBvczogY2MuVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdPcmlnaW5TaWJsaW5nSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFjdGl2ZVRvdWNoSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0b3VjaEJvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmREcm9wOiBjYy5BdWRpb0NsaXAgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9rOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub3RpRnVsbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIE5vZGUgdGhhbSBjaGnhur91IHbDsm5nIG3huqt1ICh2ZDogZGVmYXVsdENoYXJtIHRyb25nIHNjZW5lKS4gKi9cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGVmYXVsdEJyYWNlbGV0UmVmOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKiogVsOybmcgbeG6q3UgdGhlbyB04burbmcgbG/huqFpIGTDonkgKGluZGV4ID0gaWRTdHJpbmcpLiDGr3UgdGnDqm4gaMahbiBkZWZhdWx0QnJhY2VsZXRSZWYuICovXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgZGVmYXVsdEJyYWNlbGV0QnlDb3JkOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtYXRjaFJlc3VsdExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF0Y2hQb3NpdGlvblRvbGVyYW5jZTogbnVtYmVyID0gODA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzaG93RGVmYXVsdFByZXZpZXc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiBEw6J5IG3huqt1IMSRw7puZyAodmQ6IDIgPSBncmVlbikuIMSQw7puZyBtw6B1IGTDonkgxJHGsOG7o2MgKzMwJS4gLTEgPSDEkW/DoW4gdOG7qyB0w6puIGNvcmQgKGtow7RuZyB0aW4gY+G6rXkpLiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkZWZhdWx0Q29yZElkOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIC8qKiBLZXljaGFpbiDEkcO6bmcgKGZhbGxiYWNrIGtoaSBjaMawYSBn4bqvbiBCcmFjZWxldERlZmF1bHRNZXRhKS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVmYXVsdEtleWNoYWluSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgbG9jYWxCb3ggPSBudWxsXHJcbiAgICBwcml2YXRlIGNhY2hlZERlZmF1bHRMYXlvdXQ6IENoYXJtU2xvdERhdGFbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjYWNoZWREZWZhdWx0Q29yZElkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZGVmYXVsdENvbmZpZ0NhY2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBsYXN0TWF0Y2hQZXJjZW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBsYXN0U2NvcmVCcmVha2Rvd246IE1hdGNoU2NvcmVCcmVha2Rvd24gPSBudWxsO1xyXG4gICAgaXNEZWxheSA9IGZhbHNlXHJcbiAgICBzaG93Tm90aUZ1bGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxheSB8fCAhdGhpcy5ub3RpRnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNEZWxheSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVsYXkgPSBmYWxzZTtcclxuICAgICAgICB9LCAxKVxyXG4gICAgICAgIHRoaXMubm90aUZ1bGwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBhbmltID0gdGhpcy5ub3RpRnVsbC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBpZiAoYW5pbSkgYW5pbS5wbGF5KCk7XHJcbiAgICB9XHJcbiAgICBsaWZ0QnJhY2VsZXQodGFyZ2V0UG9zOiBjYy5WZWMzLCBkdXJhdGlvbjogbnVtYmVyID0gMC40KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLkNvcmRSb3VuZExpc3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBib2RpZXM6IGNjLlJpZ2lkQm9keVtdID0gW107XHJcbiAgICAgICAgY29uc3QgY29sbGVjdEJvZGllcyA9IChub2RlOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9kaWVzLnB1c2goYm9keSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29sbGVjdEJvZGllcyhub2RlLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29sbGVjdEJvZGllcyh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gYm9kaWVzW2ldO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5LaW5lbWF0aWM7XHJcbiAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3luY0JvZGllcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGJvZGllc1tpXS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBib2RpZXNbaV0uc3luY1JvdGF0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgcG9zaXRpb246IHRhcmdldFBvcyB9LCB7IG9uVXBkYXRlOiBzeW5jQm9kaWVzIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN5bmNCb2RpZXMoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBpc1RhcmdldEhpbmQgPSBudWxsXHJcblxyXG4gICAgc2V0SGluZChjaGFybSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGFybUhpbmQgfHwgIWNoYXJtKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGNoYXJtLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykgYXMgYW55O1xyXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0YWcgPSBpdGVtLnRhZztcclxuICAgICAgICBpZiAodGFnIDwgMCB8fCB0YWcgPj0gdGhpcy5jaGFybUhpbmQuY2hpbGRyZW5Db3VudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEhpbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEhpbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhpbmQgPSB0aGlzLmNoYXJtSGluZC5jaGlsZHJlblt0YWddO1xyXG4gICAgICAgIGlmICghaGluZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBoaW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1RhcmdldEhpbmQgPSBoaW5kO1xyXG4gICAgICAgIGNvbnN0IGNvbG9ySU1HID0gaXRlbS5nZXRDb2xvciAmJiBpdGVtLmdldENvbG9yKCk7XHJcbiAgICAgICAgaWYgKGNvbG9ySU1HKSB7XHJcbiAgICAgICAgICAgIGlmIChoaW5kLmNoaWxkcmVuWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcDAgPSBoaW5kLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwMCkgc3AwLnNwcml0ZUZyYW1lID0gY29sb3JJTUc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhpbmQuY2hpbGRyZW5bMV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwMSA9IGhpbmQuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3AxKSBzcDEuc3ByaXRlRnJhbWUgPSBjb2xvcklNRztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvY2FsQm94ID0gaGluZDtcclxuICAgIH1cclxuICAgIHN0YXJ0QnJhY2VsZXRNb2RlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5Db3JkUm91bmRMaXN0KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlUmVmZXJlbmNlcygpO1xyXG5cclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNvcmQgPSB0aGlzLkNvcmRSb3VuZExpc3QuY2hpbGRyZW5bZ2xvYmFsVGhpcy5pZFN0cmluZ107XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0QW5jaG9yID0gdGhpcy5hY3RpdmVDb3JkLmdldENoaWxkQnlOYW1lKCdsZWZ0Jyk7XHJcbiAgICAgICAgdGhpcy5yaWdodEFuY2hvciA9IHRoaXMuYWN0aXZlQ29yZC5nZXRDaGlsZEJ5TmFtZSgncmlnaHQnKTtcclxuICAgICAgICBpZiAoIXRoaXMubGVmdEFuY2hvciB8fCAhdGhpcy5yaWdodEFuY2hvcikge1xyXG4gICAgICAgICAgICBjYy53YXJuKCdbQ29yZFJvdW5kR2FtZV0gQ29yZCBpcyBtaXNzaW5nIGxlZnQvcmlnaHQgYW5jaG9yIG5vZGVzLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAtNTIwKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQ29yZFJvdW5kTGlzdC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ29yZCh0aGlzLkNvcmRSb3VuZExpc3QuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuc3VyZUNoYXJtTGF5ZXIoKTtcclxuICAgICAgICB0aGlzLnByZXBhcmVQbGF0ZUZvckJyYWNlbGV0TW9kZSgpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVEZWZhdWx0Q29uZmlnKHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0RlZmF1bHRQcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0RlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iaW5kVG91Y2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEtoYXkgY8OzIFBoeXNpY3NQb2x5Z29uQ29sbGlkZXIgcuG6pXQgbOG7m24g4oCUIG7hur91IGPDsm4gYuG6rXQgc+G6vSDEkeG7pW5nIGNoYXJtXHJcbiAgICAgKiDEkWFuZyB0cmVvIHRyw6puIGTDonkgdsOgIMSR4bqpeSBjaMO6bmcgdsOgbyBnaeG7r2EgdsOybmcuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJlcGFyZVBsYXRlRm9yQnJhY2VsZXRNb2RlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhdGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5wbGF0ZS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGNoaWxkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoIWJvZHkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBib2R5LmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBib2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVycyA9IHRoaXMucGxhdGUuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzQ29sbGlkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyc1tpXS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwbGF0ZUJvZHkgPSB0aGlzLnBsYXRlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChwbGF0ZUJvZHkpIHtcclxuICAgICAgICAgICAgcGxhdGVCb2R5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwbGF0ZUJvZHkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gQ2jhu4kgxJHhu41jIG1ldGEgc+G7m207IGxheW91dCBjaGFybSBz4bq9IGJ1aWxkIGzhuqFpIGtoaSB2w6BvIGdhbWUgduG7m2kgYWN0aXZlQ29yZC5cclxuICAgICAgICB0aGlzLmNhY2hlRGVmYXVsdE1ldGFPbmx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmVwYXJlQ29yZChjb3JkOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJlcGFyZWRDb3Jkcy5pbmRleE9mKGNvcmQpID49IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmF3UG9pbnRzID0gdGhpcy5nZXRQb2x5Z29uQ29sbGlkZXJQb2ludHMoY29yZCk7XHJcbiAgICAgICAgaWYgKHJhd1BvaW50cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBDb3JkIFwiJyArIGNvcmQubmFtZSArICdcIiBuZWVkcyBjYy5Qb2x5Z29uQ29sbGlkZXIuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbXBsZXMgPSB0aGlzLnNhbXBsZUFsb25nUGF0aChyYXdQb2ludHMsIHRoaXMucGF0aFNhbXBsZVNwYWNpbmcpO1xyXG4gICAgICAgIHRoaXMuY29yZFBhdGhzLnNldChjb3JkLCB7XHJcbiAgICAgICAgICAgIHBvaW50czogc2FtcGxlcyxcclxuICAgICAgICAgICAgdG90YWxMZW5ndGg6IHRoaXMuY2FsY1BhdGhMZW5ndGgoc2FtcGxlcyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBDb3JkUGh5c2ljcyhjb3JkLCBzYW1wbGVzKTtcclxuICAgICAgICB0aGlzLnByZXBhcmVkQ29yZHMucHVzaChjb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBvbHlnb25Db2xsaWRlclBvaW50cyhjb3JkOiBjYy5Ob2RlKTogY2MuVmVjMltdIHtcclxuICAgICAgICBjb25zdCBwb2x5ID0gY29yZC5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIXBvbHkgfHwgIXBvbHkucG9pbnRzIHx8IHBvbHkucG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcG9seS5vZmZzZXQgfHwgY2MudjIoMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHBvbHkucG9pbnRzLm1hcChwID0+IGNjLnYyKHAueCArIG9mZnNldC54LCBwLnkgKyBvZmZzZXQueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBDb3JkUGh5c2ljcyhjb3JkOiBjYy5Ob2RlLCBzYW1wbGVzOiBjYy5WZWMyW10pIHtcclxuICAgICAgICBsZXQgYm9keSA9IGNvcmQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkgPSBjb3JkLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICBib2R5LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTZWdtZW50Q29sbGlkZXJzKGNvcmQpO1xyXG5cclxuICAgICAgICBjb25zdCBzcGFjaW5nID0gTWF0aC5tYXgodGhpcy5wYXRoU2FtcGxlU3BhY2luZyAqIDEuNSwgMTYpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyUG9pbnRzID0gc2FtcGxlcy5sZW5ndGggPiA4MFxyXG4gICAgICAgICAgICA/IHRoaXMuc2FtcGxlQWxvbmdQYXRoKHNhbXBsZXMsIHNwYWNpbmcpXHJcbiAgICAgICAgICAgIDogc2FtcGxlcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlclBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBjb3JkLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICBjb2wub2Zmc2V0ID0gY29sbGlkZXJQb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbC5yYWRpdXMgPSB0aGlzLnNlZ21lbnRSYWRpdXM7XHJcbiAgICAgICAgICAgIGNvbC5mcmljdGlvbiA9IDAuMzU7XHJcbiAgICAgICAgICAgIGNvbC5yZXN0aXR1dGlvbiA9IDAuMDU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2FtcGxlQWxvbmdQYXRoKHBvaW50czogY2MuVmVjMltdLCBzcGFjaW5nOiBudW1iZXIpOiBjYy5WZWMyW10ge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjYXJyeSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbKGkgKyAxKSAlIHBvaW50cy5sZW5ndGhdO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ0xlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChzZWdMZW4gPD0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXJYID0gZHggLyBzZWdMZW47XHJcbiAgICAgICAgICAgIGNvbnN0IGRpclkgPSBkeSAvIHNlZ0xlbjtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBjYXJyeTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChkaXN0IDwgc2VnTGVuKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goY2MudjIoYS54ICsgZGlyWCAqIGRpc3QsIGEueSArIGRpclkgKiBkaXN0KSk7XHJcbiAgICAgICAgICAgICAgICBkaXN0ICs9IHNwYWNpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FycnkgPSBkaXN0IC0gc2VnTGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNhbXBsZXMubGVuZ3RoID4gMCA/IHNhbXBsZXMgOiBwb2ludHMuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGNQYXRoTGVuZ3RoKHBvaW50czogY2MuVmVjMltdKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzWyhpICsgMSkgJSBwb2ludHMubGVuZ3RoXTtcclxuICAgICAgICAgICAgbGVuICs9IGNjLnYyKGIueCAtIGEueCwgYi55IC0gYS55KS5tYWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyU2VnbWVudENvbGxpZGVycyhjb3JkOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IGNvcmQuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjaXJjbGVzW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbnN1cmVDaGFybUxheWVyKCkge1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuYWN0aXZlQ29yZC5nZXRDaGlsZEJ5TmFtZSgnY2hhcm1zT25Db3JkJyk7XHJcbiAgICAgICAgaWYgKCFsYXllcikge1xyXG4gICAgICAgICAgICBsYXllciA9IG5ldyBjYy5Ob2RlKCdjaGFybXNPbkNvcmQnKTtcclxuICAgICAgICAgICAgbGF5ZXIucGFyZW50ID0gdGhpcy5hY3RpdmVDb3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJtTGF5ZXIgPSBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc29sdmVSZWZlcmVuY2VzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBraGF5ID0gbWFpbi5nZXRDaGlsZEJ5TmFtZSgna2hheScpO1xyXG4gICAgICAgICAgICBpZiAoa2hheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0ZSA9IGtoYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kVG91Y2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG91Y2hCb3VuZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudG91Y2hCb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdWNoTm9kZSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgdGhpcy5kcmFnZ2luZ0NoYXJtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gdGhpcy5nZXRQbGF0ZUNoYXJtQXQoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgaWYgKCFjaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSBldmVudC5nZXRJRCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnREcmFnKGNoYXJtLCBldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB0aGlzLnNldEhpbmQoY2hhcm0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCBldmVudC5nZXRJRCgpICE9PSB0aGlzLmFjdGl2ZVRvdWNoSWQgfHwgIXRoaXMuZHJhZ2dpbmdDaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMuZ2V0TWFpbkxvY2FsUG9zKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGNvbnN0IHNuYXAgPSB0aGlzLmdldERyYWdTbmFwUG9zZSh0b3VjaFBvcyk7XHJcbiAgICAgICAgLy8gaWYgKHNuYXApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLnNldFBvc2l0aW9uKHNuYXAucG9zKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLmFuZ2xlID0gc25hcC5hbmdsZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmFnU25hcFNpZGUgPSBzbmFwLnNpZGU7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0uc2V0UG9zaXRpb24odG91Y2hQb3MpO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmdDaGFybS5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5kcmFnU25hcFNpZGUgPSBudWxsO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGlzQ291bnRHYW1lID0gMFxyXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IGV2ZW50LmdldElEKCkgIT09IHRoaXMuYWN0aXZlVG91Y2hJZCB8fCAhdGhpcy5kcmFnZ2luZ0NoYXJtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gdGhpcy5kcmFnZ2luZ0NoYXJtO1xyXG4gICAgICAgIGNvbnN0IGNoYXJtV29ybGQgPSBjaGFybS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoYXJtLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBkcm9wQW5jaG9yID0gdGhpcy5yZXNvbHZlRHJvcEFuY2hvcihjaGFybVdvcmxkLCB0aGlzLmRyYWdTbmFwU2lkZSwgY2hhcm0pO1xyXG4gICAgICAgIGlmIChkcm9wQW5jaG9yICYmIHRoaXMudGhyZWFkQ2hhcm1PbnRvQ29yZChjaGFybSwgZHJvcEFuY2hvcikpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRHJvcCwgZmFsc2UsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICAgICAgdGhpcy5idG5Pay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmQzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnRHYW1lKytcclxuICAgICAgICAgICAgaWYodGhpcy5pc0NvdW50R2FtZSA9PSA1KXtcclxuICAgICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RHJhZ2dlZENoYXJtKGNoYXJtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkU2hvd0NvcmRGdWxsTm90aShldmVudC5nZXRMb2NhdGlvbigpLCBjaGFybVdvcmxkLCBjaGFybSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlGdWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmdDaGFybSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kcmFnU25hcFNpZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVG91Y2hJZCA9IC0xO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFyZ2V0SGluZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFyZ2V0SGluZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEhpbmQgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Q2hhcm1QbGF0ZVBoeXNpY3MoY2hhcm06IGNjLk5vZGUsIGVuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChlbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgIGlmIChjb2xsaWRlcikge1xyXG4gICAgICAgICAgICBjb2xsaWRlci5lbmFibGVkID0gZW5hYmxlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydERyYWcoY2hhcm06IGNjLk5vZGUsIHNjcmVlblBvczogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmdDaGFybSA9IGNoYXJtO1xyXG4gICAgICAgIHRoaXMuZHJhZ09yaWdpblBhcmVudCA9IGNoYXJtLnBhcmVudDtcclxuICAgICAgICB0aGlzLmRyYWdPcmlnaW5Qb3MgPSBjaGFybS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhZ09yaWdpblNpYmxpbmdJbmRleCA9IGNoYXJtLmdldFNpYmxpbmdJbmRleCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldENoYXJtUGxhdGVQaHlzaWNzKGNoYXJtLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zID0gY2hhcm0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGFybS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IHRoaXMuZ2V0TWFpbk5vZGUoKTtcclxuICAgICAgICBjaGFybS5wYXJlbnQgPSBtYWluO1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKG1haW4uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpKTtcclxuICAgICAgICBjaGFybS5zZXRTaWJsaW5nSW5kZXgobWFpbi5jaGlsZHJlbkNvdW50IC0gMSk7XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24odGhpcy5nZXRNYWluTG9jYWxQb3Moc2NyZWVuUG9zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldERyYWdnZWRDaGFybShjaGFybTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNoYXJtLnBhcmVudCA9IHRoaXMuZHJhZ09yaWdpblBhcmVudDtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbih0aGlzLmRyYWdPcmlnaW5Qb3MpO1xyXG4gICAgICAgIGNoYXJtLnNldFNpYmxpbmdJbmRleCh0aGlzLmRyYWdPcmlnaW5TaWJsaW5nSW5kZXgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldENoYXJtUGxhdGVQaHlzaWNzKGNoYXJtLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRocmVhZENoYXJtT250b0NvcmQoY2hhcm06IGNjLk5vZGUsIGRyb3BBbmNob3I6IERyb3BBbmNob3IpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuRHJvcE9uU2lkZShkcm9wQW5jaG9yLnNpZGUsIGNoYXJtKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuY2hvclBvcyA9IGRyb3BBbmNob3IuY29yZFBvcztcclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgYW5jaG9yUG9zKTtcclxuICAgICAgICBjb25zdCBwYXRoRGlyID0gdGhpcy5waWNrUGF0aERpcmVjdGlvbihwYXRoLnBvaW50cywgc3RhcnRJbmRleCwgZHJvcEFuY2hvci5zaWRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGl2b3QgPSB0aGlzLnNldHVwQ2hhcm1IYW5nUmlnKGNoYXJtKTtcclxuICAgICAgICAvLyDEkMawYSBwaXZvdCBzYW5nIGNoYXJtTGF5ZXIgYuG6sW5nIHdvcmxkIHBvcyDEkeG7gyB0csOhbmggbmjhuqN5IHThu41hIMSR4buZIGtoaSDEkeG7lWkgcGFyZW50LlxyXG4gICAgICAgIGNvbnN0IHBpdm90V29ybGQgPSBwaXZvdC5wYXJlbnRcclxuICAgICAgICAgICAgPyBwaXZvdC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBpdm90LnBvc2l0aW9uKVxyXG4gICAgICAgICAgICA6IGNoYXJtLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgcGl2b3QucGFyZW50ID0gdGhpcy5jaGFybUxheWVyO1xyXG4gICAgICAgIHBpdm90LnNldFBvc2l0aW9uKHRoaXMuY2hhcm1MYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwaXZvdFdvcmxkKSk7XHJcbiAgICAgICAgcGl2b3Quc2V0UG9zaXRpb24oY2MudjMoYW5jaG9yUG9zLngsIGFuY2hvclBvcy55LCAwKSk7XHJcbiAgICAgICAgY29uc3QgaGFuZ0xvY2FsID0gdGhpcy5nZXRIYW5nTG9jYWxPZmZzZXQoY2hhcm0pO1xyXG4gICAgICAgIGNvbnN0IG91dHdhcmQgPSB0aGlzLmdldE91dHdhcmRGcm9tQ2VudGVyKGNjLnYyKGFuY2hvclBvcy54LCBhbmNob3JQb3MueSkpO1xyXG4gICAgICAgIGNoYXJtLmFuZ2xlID0gdGhpcy5hbmdsZUZvck91dHdhcmRIYW5nKG91dHdhcmQsIGhhbmdMb2NhbCk7XHJcbiAgICAgICAgaWYgKGNoYXJtLmNoaWxkcmVuWzBdKSB7XHJcbiAgICAgICAgICAgIGNoYXJtLmNoaWxkcmVuWzBdLnNjYWxlID0gMC44O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGl2b3RCb2R5ID0gcGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgY29uc3QgY2hhcm1Cb2R5ID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKHBpdm90Qm9keSkge1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgcGl2b3RCb2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuZ3Jhdml0eVNjYWxlID0gMTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmFsbG93U2xlZXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmF3YWtlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhbmdlbnQgPSB0aGlzLmdldFRhbmdlbnRBdEluZGV4KHBhdGgucG9pbnRzLCBzdGFydEluZGV4LCBwYXRoRGlyKTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5ID0gdGFuZ2VudC5tdWwodGhpcy5kcm9wU2xpZGVTcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFybUJvZHkpIHtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjaGFybUJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LnN5bmNSb3RhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb3JkQ2hhcm1zLnB1c2goe1xyXG4gICAgICAgICAgICBwaXZvdCxcclxuICAgICAgICAgICAgY2hhcm0sXHJcbiAgICAgICAgICAgIHNldHRsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGlsbFRpbWU6IDAsXHJcbiAgICAgICAgICAgIHNpZGU6IGRyb3BBbmNob3Iuc2lkZSxcclxuICAgICAgICAgICAgcGF0aFN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgIHBhdGhEaXIsXHJcbiAgICAgICAgICAgIHBhdGhEaXN0YW5jZTogMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVOG6oW8gcGl2b3QgKMSRaeG7g20gbmVvIHRyw6puIGTDonkpICsgUmV2b2x1dGVKb2ludDsgcGjhuqduIGTGsOG7m2kgY2hhcm0gbHVuZyBsYXkgdGhlbyBwaHlzaWNzLiAqL1xyXG4gICAgcHJpdmF0ZSBzZXR1cENoYXJtSGFuZ1JpZyhjaGFybTogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmIChjaGFybS5wYXJlbnQgJiYgY2hhcm0ucGFyZW50Lm5hbWUgPT09ICdjaGFybVBpdm90Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhcm0ucGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZ0xvY2FsID0gdGhpcy5nZXRIYW5nTG9jYWxPZmZzZXQoY2hhcm0pO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gY2hhcm0ucGFyZW50O1xyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zID0gbGF5ZXIuY29udmVydFRvV29ybGRTcGFjZUFSKGNoYXJtLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGl2b3QgPSBuZXcgY2MuTm9kZSgnY2hhcm1QaXZvdCcpO1xyXG4gICAgICAgIHBpdm90LnBhcmVudCA9IGxheWVyO1xyXG4gICAgICAgIHBpdm90LnNldFBvc2l0aW9uKGxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKSk7XHJcblxyXG4gICAgICAgIGNoYXJtLnBhcmVudCA9IHBpdm90O1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKGNjLnYzKC1oYW5nTG9jYWwueCwgLWhhbmdMb2NhbC55LCAwKSk7XHJcbiAgICAgICAgY2hhcm0uYW5nbGUgPSAwO1xyXG5cclxuICAgICAgICBsZXQgcGl2b3RCb2R5ID0gcGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFwaXZvdEJvZHkpIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5ID0gcGl2b3QuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpdm90Qm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgIHBpdm90Qm9keS5ncmF2aXR5U2NhbGUgPSAxO1xyXG4gICAgICAgIHBpdm90Qm9keS5saW5lYXJEYW1waW5nID0gMC40NTtcclxuICAgICAgICBwaXZvdEJvZHkuYW5ndWxhckRhbXBpbmcgPSAxO1xyXG4gICAgICAgIHBpdm90Qm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICBwaXZvdEJvZHkuYWxsb3dTbGVlcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgcGl2b3RDb2wgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIXBpdm90Q29sKSB7XHJcbiAgICAgICAgICAgIHBpdm90Q29sID0gcGl2b3QuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpdm90Q29sLnJhZGl1cyA9IHRoaXMucGl2b3RDb2xsaWRlclJhZGl1cztcclxuICAgICAgICBwaXZvdENvbC5mcmljdGlvbiA9IDAuNjU7XHJcbiAgICAgICAgcGl2b3RDb2wucmVzdGl0dXRpb24gPSAwO1xyXG4gICAgICAgIHBpdm90Q29sLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgY2hhcm1Cb2R5ID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFjaGFybUJvZHkpIHtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5ID0gY2hhcm0uYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoYXJtQm9keS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjaGFybUJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjaGFybUJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICBjaGFybUJvZHkuZ3Jhdml0eVNjYWxlID0gMC44NTtcclxuICAgICAgICBjaGFybUJvZHkubGluZWFyRGFtcGluZyA9IDAuNDU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmFuZ3VsYXJEYW1waW5nID0gMC43NTtcclxuICAgICAgICBjaGFybUJvZHkuZml4ZWRSb3RhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGNoYXJtQm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZW5hYmxlQ2hhcm1QaHlzaWNzQ29sbGlkZXIoY2hhcm0pO1xyXG5cclxuICAgICAgICBsZXQgam9pbnQgPSBwaXZvdC5nZXRDb21wb25lbnQoY2MuUmV2b2x1dGVKb2ludCk7XHJcbiAgICAgICAgaWYgKCFqb2ludCkge1xyXG4gICAgICAgICAgICBqb2ludCA9IHBpdm90LmFkZENvbXBvbmVudChjYy5SZXZvbHV0ZUpvaW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQm9keSA9IGNoYXJtQm9keTtcclxuICAgICAgICBqb2ludC5hbmNob3IgPSBjYy52MigwLCAwKTtcclxuICAgICAgICBqb2ludC5jb25uZWN0ZWRBbmNob3IgPSBoYW5nTG9jYWw7XHJcbiAgICAgICAgam9pbnQuY29sbGlkZUNvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gcGl2b3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb3JkQ2VudGVyTG9jYWwoKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCB8fCBwYXRoLnBvaW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGN4ID0gMDtcclxuICAgICAgICBsZXQgY3kgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5wb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3ggKz0gcGF0aC5wb2ludHNbaV0ueDtcclxuICAgICAgICAgICAgY3kgKz0gcGF0aC5wb2ludHNbaV0ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbiA9IHBhdGgucG9pbnRzLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gY2MudjIoY3ggLyBuLCBjeSAvIG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3V0d2FyZEZyb21DZW50ZXIocG9zOiBjYy5WZWMyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5nZXRDb3JkQ2VudGVyTG9jYWwoKTtcclxuICAgICAgICBjb25zdCBvdXR3YXJkID0gY2MudjIocG9zLnggLSBjZW50ZXIueCwgcG9zLnkgLSBjZW50ZXIueSk7XHJcbiAgICAgICAgaWYgKG91dHdhcmQubWFnU3FyKCkgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MigwLCAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dHdhcmQubm9ybWFsaXplU2VsZigpO1xyXG4gICAgICAgIHJldHVybiBvdXR3YXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd3JhcEFuZ2xlRGVnKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBhID0gYW5nbGU7XHJcbiAgICAgICAgd2hpbGUgKGEgPiAxODApIGEgLT0gMzYwO1xyXG4gICAgICAgIHdoaWxlIChhIDwgLTE4MCkgYSArPSAzNjA7XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybUJvZHlEaXIoaGFuZ0xvY2FsOiBjYy5WZWMyLCBhbmdsZURlZzogbnVtYmVyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxCYXNlID0gY2MudjIoLWhhbmdMb2NhbC54LCAtaGFuZ0xvY2FsLnkpO1xyXG4gICAgICAgIGNvbnN0IHJhZCA9IGFuZ2xlRGVnICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICBjb25zdCBkaXIgPSBjYy52MihcclxuICAgICAgICAgICAgbG9jYWxCYXNlLnggKiBjIC0gbG9jYWxCYXNlLnkgKiBzLFxyXG4gICAgICAgICAgICBsb2NhbEJhc2UueCAqIHMgKyBsb2NhbEJhc2UueSAqIGNcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChkaXIubWFnU3FyKCkgPCAwLjAwMDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKDAsIC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlyLm5vcm1hbGl6ZVNlbGYoKTtcclxuICAgICAgICByZXR1cm4gZGlyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYW5nbGVGb3JPdXR3YXJkSGFuZyhvdXR3YXJkOiBjYy5WZWMyLCBoYW5nTG9jYWw6IGNjLlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsQmFzZSA9IGNjLnYyKC1oYW5nTG9jYWwueCwgLWhhbmdMb2NhbC55KTtcclxuICAgICAgICBjb25zdCBiYXNlQW5nbGUgPSBNYXRoLmF0YW4yKGxvY2FsQmFzZS55LCBsb2NhbEJhc2UueCk7XHJcbiAgICAgICAgY29uc3Qgb3V0QW5nbGUgPSBNYXRoLmF0YW4yKG91dHdhcmQueSwgb3V0d2FyZC54KTtcclxuICAgICAgICByZXR1cm4gdGhpcy53cmFwQW5nbGVEZWcoKG91dEFuZ2xlIC0gYmFzZUFuZ2xlKSAqIDE4MCAvIE1hdGguUEkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3RyYWluQ2hhcm1IYW5nKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSwgZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gc3RhdGUuY2hhcm07XHJcbiAgICAgICAgY29uc3QgcGl2b3QgPSBzdGF0ZS5waXZvdDtcclxuICAgICAgICBpZiAoIWNoYXJtIHx8ICFwaXZvdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5nTG9jYWwgPSB0aGlzLmdldEhhbmdMb2NhbE9mZnNldChjaGFybSk7XHJcbiAgICAgICAgY29uc3Qgb3V0d2FyZCA9IHRoaXMuZ2V0T3V0d2FyZEZyb21DZW50ZXIoY2MudjIocGl2b3QueCwgcGl2b3QueSkpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEFuZ2xlID0gdGhpcy5hbmdsZUZvck91dHdhcmRIYW5nKG91dHdhcmQsIGhhbmdMb2NhbCk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG5cclxuICAgICAgICBsZXQgYW5nbGUgPSBjaGFybS5hbmdsZTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLndyYXBBbmdsZURlZyhhbmdsZSAtIHRhcmdldEFuZ2xlKTtcclxuICAgICAgICBjb25zdCBib2R5RGlyID0gdGhpcy5nZXRDaGFybUJvZHlEaXIoaGFuZ0xvY2FsLCBhbmdsZSk7XHJcbiAgICAgICAgY29uc3Qgb3V0d2FyZERvdCA9IGJvZHlEaXIueCAqIG91dHdhcmQueCArIGJvZHlEaXIueSAqIG91dHdhcmQueTtcclxuXHJcbiAgICAgICAgaWYgKG91dHdhcmREb3QgPCAwLjAyKSB7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gdGFyZ2V0QW5nbGU7XHJcbiAgICAgICAgICAgIGNoYXJtLmFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN5bmNSb3RhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2Zmc2V0ID4gdGhpcy5oYW5nU3dpbmdMaW1pdCkge1xyXG4gICAgICAgICAgICBhbmdsZSA9IHRhcmdldEFuZ2xlICsgdGhpcy5oYW5nU3dpbmdMaW1pdDtcclxuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA8IC10aGlzLmhhbmdTd2luZ0xpbWl0KSB7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gdGFyZ2V0QW5nbGUgLSB0aGlzLmhhbmdTd2luZ0xpbWl0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICBjb25zdCBwdWxsID0gdGhpcy53cmFwQW5nbGVEZWcodGFyZ2V0QW5nbGUgLSBhbmdsZSk7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ICs9IHB1bGwgKiB0aGlzLmhhbmdPdXR3YXJkU3RpZmZuZXNzICogZHQ7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhhbmdsZSAtIGNoYXJtLmFuZ2xlKSA+IDAuMDUpIHtcclxuICAgICAgICAgICAgY2hhcm0uYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ICo9IDAuMjU7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN5bmNSb3RhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEhhbmdMb2NhbE9mZnNldChjaGFybTogY2MuTm9kZSk6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjaGFybS5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpIGFzIGFueTtcclxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLmdldEhhbmdMb2NhbE9mZnNldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRIYW5nTG9jYWxPZmZzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDU1KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuYWJsZUNoYXJtUGh5c2ljc0NvbGxpZGVyKGNoYXJtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGlkZXIgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb2xsaWRlci5zZW5zb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29sbGlkZXIuZnJpY3Rpb24gPSAwLjg1O1xyXG4gICAgICAgICAgICBjb2xsaWRlci5yZXN0aXR1dGlvbiA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29sbGlkZXIuZGVuc2l0eSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyLmRlbnNpdHkgPSAwLjM1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFuZ2VudEF0SW5kZXgocG9pbnRzOiBjYy5WZWMyW10sIGluZGV4OiBudW1iZXIsIGRpcjogbnVtYmVyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgbmV4dElkeCA9IHRoaXMud3JhcEluZGV4KGluZGV4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhID0gcG9pbnRzW2luZGV4XTtcclxuICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gYi55IC0gYS55O1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgfHwgMTtcclxuICAgICAgICByZXR1cm4gY2MudjIoZHggLyBsZW4sIGR5IC8gbGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5lYXJlc3RPblBhdGgocG9pbnRzOiBjYy5WZWMyW10sIHBvczogY2MuVmVjMik6IHsgaW5kZXg6IG51bWJlcjsgbmVhcmVzdDogY2MuVmVjMiB9IHtcclxuICAgICAgICBsZXQgYmVzdEluZGV4ID0gMDtcclxuICAgICAgICBsZXQgYmVzdERpc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY2MudjIocG9pbnRzW2ldLnggLSBwb3MueCwgcG9pbnRzW2ldLnkgLSBwb3MueSkubWFnU3FyKCk7XHJcbiAgICAgICAgICAgIGlmIChkIDwgYmVzdERpc3QpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0ID0gZDtcclxuICAgICAgICAgICAgICAgIGJlc3RJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGluZGV4OiBiZXN0SW5kZXgsIG5lYXJlc3Q6IHBvaW50c1tiZXN0SW5kZXhdIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kTmVhcmVzdFBhdGhJbmRleChwb2ludHM6IGNjLlZlYzJbXSwgcG9zOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgYmVzdCA9IDA7XHJcbiAgICAgICAgbGV0IGJlc3REaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY2MudjIocG9pbnRzW2ldLnggLSBwb3MueCwgcG9pbnRzW2ldLnkgLSBwb3MueSkubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkIDwgYmVzdERpc3QpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0ID0gZDtcclxuICAgICAgICAgICAgICAgIGJlc3QgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGlja1BhdGhEaXJlY3Rpb24ocG9pbnRzOiBjYy5WZWMyW10sIGVudHJ5SW5kZXg6IG51bWJlciwgc2lkZTogQ29yZFNpZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNjb3JlID0gKGRpcjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzID0gMDtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IGVudHJ5SW5kZXg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDA7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICAgICAgICAgIHMgKz0gLXAueSAqIDAuNTtcclxuICAgICAgICAgICAgICAgIGlmIChzaWRlID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzICs9IHAueCA8IDAgPyAzIDogLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgKz0gcC54ID4gMCA/IDMgOiAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBzY29yZSgxKSA+PSBzY29yZSgtMSkgPyAxIDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQb3NlT25QYXRoKFxyXG4gICAgICAgIHBvaW50czogY2MuVmVjMltdLFxyXG4gICAgICAgIHN0YXJ0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBkaXI6IG51bWJlcixcclxuICAgICAgICBkaXN0YW5jZTogbnVtYmVyXHJcbiAgICApOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBhbmdsZTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGxldCBpZHggPSBzdGFydEluZGV4O1xyXG4gICAgICAgIGxldCByZW1haW4gPSBkaXN0YW5jZTtcclxuICAgICAgICBjb25zdCBtYXhTdGVwID0gcG9pbnRzLmxlbmd0aCArIDI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgbWF4U3RlcDsgc3RlcCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpZHggKyBkaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbbmV4dElkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcclxuICAgICAgICAgICAgY29uc3Qgc2VnTGVuID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICAgICAgaWYgKHNlZ0xlbiA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZW1haW4gPD0gc2VnTGVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcmVtYWluIC8gc2VnTGVuO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGEueCArIGR4ICogdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBhLnkgKyBkeSAqIHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KSAqIDE4MCAvIE1hdGguUEkgLSA5MDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHgsIHksIGFuZ2xlIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbWFpbiAtPSBzZWdMZW47XHJcbiAgICAgICAgICAgIGlkeCA9IG5leHRJZHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsYXN0ID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgcmV0dXJuIHsgeDogbGFzdC54LCB5OiBsYXN0LnksIGFuZ2xlOiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3cmFwSW5kZXgoaW5kZXg6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiBsZW5ndGggKyBpbmRleDtcclxuICAgICAgICBpZiAoaW5kZXggPj0gbGVuZ3RoKSByZXR1cm4gaW5kZXggLSBsZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QW5jaG9yU2xpZGVEaXN0YW5jZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgY29uc3QgbGVmdEluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgYW5jaG9ycy5sZWZ0KTtcclxuICAgICAgICBjb25zdCBwYXRoRGlyID0gdGhpcy5waWNrUGF0aERpcmVjdGlvbihwYXRoLnBvaW50cywgbGVmdEluZGV4LCAnbGVmdCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlQWxvbmdQYXRoKHBhdGgucG9pbnRzLCBsZWZ0SW5kZXgsIHBhdGhEaXIsIGFuY2hvcnMucmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2lkZVNsaWRlRGlzdGFuY2Uoc2lkZTogQ29yZFNpZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgY29uc3QgZW50cnkgPSBzaWRlID09PSAnbGVmdCcgPyBhbmNob3JzLmxlZnQgOiBhbmNob3JzLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVudHJ5SW5kZXggPSB0aGlzLmZpbmROZWFyZXN0UGF0aEluZGV4KHBhdGgucG9pbnRzLCBlbnRyeSk7XHJcbiAgICAgICAgY29uc3QgcGF0aERpciA9IHRoaXMucGlja1BhdGhEaXJlY3Rpb24ocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHNpZGUpO1xyXG4gICAgICAgIGNvbnN0IG9wcG9zaXRlID0gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5yaWdodCA6IGFuY2hvcnMubGVmdDtcclxuICAgICAgICBjb25zdCB0b09wcG9zaXRlID0gdGhpcy5nZXREaXN0YW5jZUFsb25nUGF0aChwYXRoLnBvaW50cywgZW50cnlJbmRleCwgcGF0aERpciwgb3Bwb3NpdGUpO1xyXG4gICAgICAgIGlmICh0b09wcG9zaXRlIDw9IDApIHJldHVybiAwO1xyXG5cclxuICAgICAgICAvLyBUcsaw4bujdCBo4bq/dCBjdW5nIHh14buRbmcgxJHDoXksIGThu6tuZyB0csaw4bubYyBuZW8gxJHhu5FpIGRp4buHbiAoa2jDtG5nIHF1YSBraGUgaOG7nykuXHJcbiAgICAgICAgY29uc3Qgc3RvcE1hcmdpbiA9IE1hdGgubWF4KHRoaXMucGl2b3RDb2xsaWRlclJhZGl1cyAqIDIsIHRoaXMubWluQW5jaG9yRHJvcEdhcCAqIDAuNDUpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCB0b09wcG9zaXRlIC0gc3RvcE1hcmdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNYXhTbGlkZURpc3RhbmNlKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2lkZVNsaWRlRGlzdGFuY2Uoc3RhdGUuc2lkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTbGlkZUVudHJ5QW5jaG9yKHNpZGU6IENvcmRTaWRlKTogY2MuVmVjMiB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBzaWRlID09PSAnbGVmdCcgPyBhbmNob3JzLmxlZnQgOiBhbmNob3JzLnJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDaOG7iSB0w6xtIMSRaeG7g20gZ+G6p24gbmjhuqV0IHRyw6puIGN1bmcgZMOieSBo4bujcCBs4buHIChuZW8g4oaSIMSRw6F5KSwgYuG7jyBxdWEga2hlIGjhu58gZ2nhu69hIDIgbmVvLiAqL1xyXG4gICAgcHJpdmF0ZSBnZXROZWFyZXN0T25BbGxvd2VkU2xpZGVQYXRoKFxyXG4gICAgICAgIHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSxcclxuICAgICAgICBwb3M6IGNjLlZlYzJcclxuICAgICk6IHsgaW5kZXg6IG51bWJlcjsgbmVhcmVzdDogY2MuVmVjMjsgcGF0aERpc3RhbmNlOiBudW1iZXIgfSB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBpbmRleDogc3RhdGUucGF0aFN0YXJ0SW5kZXgsIG5lYXJlc3Q6IHBvcywgcGF0aERpc3RhbmNlOiAwIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXhEaXN0YW5jZSA9IHRoaXMuZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgcG9pbnRzID0gcGF0aC5wb2ludHM7XHJcbiAgICAgICAgbGV0IGJlc3REaXN0U3FyID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICBsZXQgYmVzdE5lYXJlc3QgPSBwb2ludHNbc3RhdGUucGF0aFN0YXJ0SW5kZXhdO1xyXG4gICAgICAgIGxldCBiZXN0SW5kZXggPSBzdGF0ZS5wYXRoU3RhcnRJbmRleDtcclxuICAgICAgICBsZXQgYmVzdFBhdGhEaXN0ID0gMDtcclxuXHJcbiAgICAgICAgbGV0IGlkeCA9IHN0YXRlLnBhdGhTdGFydEluZGV4O1xyXG4gICAgICAgIGxldCB0cmF2ZXJzZWQgPSAwO1xyXG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gcG9pbnRzLmxlbmd0aCArIDI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgbWF4U3RlcHM7IHN0ZXArKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgc3RhdGUucGF0aERpciwgcG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHBvaW50c1tuZXh0SWR4XTtcclxuICAgICAgICAgICAgY29uc3QgZHggPSBiLnggLSBhLng7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gYi55IC0gYS55O1xyXG4gICAgICAgICAgICBjb25zdCBzZWdMZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgICAgICBpZiAoc2VnTGVuIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGlkeCA9IG5leHRJZHg7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVtYWluID0gbWF4RGlzdGFuY2UgLSB0cmF2ZXJzZWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ1VzZSA9IE1hdGgubWluKHNlZ0xlbiwgcmVtYWluKTtcclxuICAgICAgICAgICAgY29uc3QgdE1heCA9IHNlZ1VzZSAvIHNlZ0xlbjtcclxuICAgICAgICAgICAgY29uc3QgdFJhdyA9ICgocG9zLnggLSBhLngpICogZHggKyAocG9zLnkgLSBhLnkpICogZHkpIC8gKHNlZ0xlbiAqIHNlZ0xlbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0TWF4LCB0UmF3KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG54ID0gYS54ICsgZHggKiB0O1xyXG4gICAgICAgICAgICBjb25zdCBueSA9IGEueSArIGR5ICogdDtcclxuICAgICAgICAgICAgY29uc3QgZFNxciA9IChwb3MueCAtIG54KSAqIChwb3MueCAtIG54KSArIChwb3MueSAtIG55KSAqIChwb3MueSAtIG55KTtcclxuICAgICAgICAgICAgY29uc3QgcGF0aERpc3QgPSB0cmF2ZXJzZWQgKyB0ICogc2VnTGVuO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRTcXIgPCBiZXN0RGlzdFNxcikge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3RTcXIgPSBkU3FyO1xyXG4gICAgICAgICAgICAgICAgYmVzdE5lYXJlc3QgPSBjYy52MihueCwgbnkpO1xyXG4gICAgICAgICAgICAgICAgYmVzdEluZGV4ID0gaWR4O1xyXG4gICAgICAgICAgICAgICAgYmVzdFBhdGhEaXN0ID0gcGF0aERpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyYXZlcnNlZCArPSBzZWdMZW47XHJcbiAgICAgICAgICAgIGlkeCA9IG5leHRJZHg7XHJcbiAgICAgICAgICAgIGlmICh0cmF2ZXJzZWQgPj0gbWF4RGlzdGFuY2UpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaW5kZXg6IGJlc3RJbmRleCwgbmVhcmVzdDogYmVzdE5lYXJlc3QsIHBhdGhEaXN0YW5jZTogYmVzdFBhdGhEaXN0IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybU5laWdoYm9yQ291bnQoc3RhdGU6IENvcmRDaGFybVN0YXRlKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoIXN0YXRlLnBpdm90KSByZXR1cm4gMDtcclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICBjb25zdCBzcGFjaW5nID0gdGhpcy5nZXRDaGFybVNsb3RTcGFjaW5nKHN0YXRlLmNoYXJtKSAqIDAuNjtcclxuICAgICAgICBsZXQgbmVpZ2hib3JzID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcmRDaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgb3RoZXIgPSB0aGlzLmNvcmRDaGFybXNbaV07XHJcbiAgICAgICAgICAgIGlmIChvdGhlciA9PT0gc3RhdGUgfHwgIW90aGVyLnBpdm90KSBjb250aW51ZTtcclxuICAgICAgICAgICAgY29uc3QgZCA9IGNjLnYyKG90aGVyLnBpdm90LnggLSBwb3MueCwgb3RoZXIucGl2b3QueSAtIHBvcy55KS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGQgPCBzcGFjaW5nKSBuZWlnaGJvcnMrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZWlnaGJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybUNyb3dkSW5mbyhzdGF0ZTogQ29yZENoYXJtU3RhdGUpOiB7XHJcbiAgICAgICAgY3Jvd2Q6IG51bWJlcjtcclxuICAgICAgICBuZWlnaGJvcnM6IG51bWJlcjtcclxuICAgICAgICBwYWNrZWQ6IGJvb2xlYW47XHJcbiAgICAgICAgc2xpZGVCbG9ja2VkOiBib29sZWFuO1xyXG4gICAgfSB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5waXZvdCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBjcm93ZDogMCwgbmVpZ2hib3JzOiAwLCBwYWNrZWQ6IGZhbHNlLCBzbGlkZUJsb2NrZWQ6IGZhbHNlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICBjb25zdCBzcGFjaW5nID0gdGhpcy5nZXRDaGFybVNsb3RTcGFjaW5nKHN0YXRlLmNoYXJtKSAqIDAuNjtcclxuICAgICAgICBjb25zdCBwYWNrVGhyZXNob2xkID0gTWF0aC5tYXgoMiwgdGhpcy5jaGFybUNyb3dkRnVsbENhbmNlbENvdW50IC0gMSk7XHJcbiAgICAgICAgbGV0IG5laWdoYm9ycyA9IDA7XHJcbiAgICAgICAgbGV0IG92ZXJsYXBDcm93ZCA9IDA7XHJcbiAgICAgICAgbGV0IG1heE5laWdoYm9yUGFjayA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG90aGVyID0gdGhpcy5jb3JkQ2hhcm1zW2ldO1xyXG4gICAgICAgICAgICBpZiAob3RoZXIgPT09IHN0YXRlIHx8ICFvdGhlci5waXZvdCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBjYy52MihvdGhlci5waXZvdC54IC0gcG9zLngsIG90aGVyLnBpdm90LnkgLSBwb3MueSkubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkID49IHNwYWNpbmcpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbmVpZ2hib3JzKys7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXAgPSAxIC0gZCAvIHNwYWNpbmc7XHJcbiAgICAgICAgICAgIG92ZXJsYXBDcm93ZCArPSBvdmVybGFwICogb3ZlcmxhcDtcclxuICAgICAgICAgICAgbWF4TmVpZ2hib3JQYWNrID0gTWF0aC5tYXgobWF4TmVpZ2hib3JQYWNrLCB0aGlzLmdldENoYXJtTmVpZ2hib3JDb3VudChvdGhlcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY291bnRDcm93ZCA9IE1hdGgubWluKDEsIG5laWdoYm9ycyAvIHBhY2tUaHJlc2hvbGQpO1xyXG4gICAgICAgIGNvbnN0IGNyb3dkID0gTWF0aC5tYXgoY291bnRDcm93ZCwgTWF0aC5taW4oMSwgb3ZlcmxhcENyb3dkKSk7XHJcbiAgICAgICAgY29uc3QgcGFja2VkID0gbmVpZ2hib3JzID49IHBhY2tUaHJlc2hvbGQ7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVCbG9ja2VkID0gcGFja2VkIHx8IG1heE5laWdoYm9yUGFjayA+PSBwYWNrVGhyZXNob2xkO1xyXG5cclxuICAgICAgICByZXR1cm4geyBjcm93ZCwgbmVpZ2hib3JzLCBwYWNrZWQsIHNsaWRlQmxvY2tlZCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1Dcm93ZEZhY3RvcihzdGF0ZTogQ29yZENoYXJtU3RhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENoYXJtQ3Jvd2RJbmZvKHN0YXRlKS5jcm93ZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENyb3dkUHVzaFNjYWxlKGNyb3dkOiBudW1iZXIsIHNsaWRlQmxvY2tlZDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoc2xpZGVCbG9ja2VkKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoY3Jvd2QgPD0gMCkgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcm1Dcm93ZFB1c2hSZXRlbnRpb25cclxuICAgICAgICAgICAgKyAoMSAtIHRoaXMuY2hhcm1Dcm93ZFB1c2hSZXRlbnRpb24pICogKDEgLSBjcm93ZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3JyZWN0Q2hhcm1QaXZvdE9uUGF0aChcclxuICAgICAgICBzdGF0ZTogQ29yZENoYXJtU3RhdGUsXHJcbiAgICAgICAgb25BbGxvd2VkOiB7IG5lYXJlc3Q6IGNjLlZlYzIgfSxcclxuICAgICAgICBkdDogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gc3RhdGUucGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFib2R5KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgIGNvbnN0IGR4ID0gb25BbGxvd2VkLm5lYXJlc3QueCAtIHBvcy54O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gb25BbGxvd2VkLm5lYXJlc3QueSAtIHBvcy55O1xyXG4gICAgICAgIGNvbnN0IG9mZkRpc3QgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgIGNvbnN0IHNvZnRMaW1pdCA9IHRoaXMuc2VnbWVudFJhZGl1cyAqIDEuMjtcclxuICAgICAgICBjb25zdCBoYXJkTGltaXQgPSB0aGlzLnNlZ21lbnRSYWRpdXMgKiAzLjI7XHJcblxyXG4gICAgICAgIGlmIChvZmZEaXN0IDw9IHNvZnRMaW1pdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAob2ZmRGlzdCA+PSBoYXJkTGltaXQpIHtcclxuICAgICAgICAgICAgc3RhdGUucGl2b3Quc2V0UG9zaXRpb24oY2MudjMob25BbGxvd2VkLm5lYXJlc3QueCwgb25BbGxvd2VkLm5lYXJlc3QueSwgMCkpO1xyXG4gICAgICAgICAgICBib2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdHJlbmd0aCA9IHN0YXRlLnNldHRsZWQgPyAxMiA6IDg7XHJcbiAgICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIHN0cmVuZ3RoICogZHQpO1xyXG4gICAgICAgIHN0YXRlLnBpdm90LnNldFBvc2l0aW9uKGNjLnYzKHBvcy54ICsgZHggKiB0LCBwb3MueSArIGR5ICogdCwgMCkpO1xyXG4gICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGFtcENoYXJtUGl2b3RDcm93ZGluZyhzdGF0ZTogQ29yZENoYXJtU3RhdGUsIGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBwaXZvdEJvZHkgPSBzdGF0ZS5waXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXBpdm90Qm9keSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjcm93ZEluZm8gPSB0aGlzLmdldENoYXJtQ3Jvd2RJbmZvKHN0YXRlKTtcclxuICAgICAgICBpZiAoY3Jvd2RJbmZvLmNyb3dkIDw9IDAgJiYgIWNyb3dkSW5mby5zbGlkZUJsb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGNyb3dkSW5mby5zbGlkZUJsb2NrZWQpIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJtQm9keSA9IHN0YXRlLmNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoY2hhcm1Cb2R5KSB7XHJcbiAgICAgICAgICAgICAgICBjaGFybUJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgICAgIGNoYXJtQm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc3RhdGUuc2V0dGxlZCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0dGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHVzaFNjYWxlID0gdGhpcy5nZXRDcm93ZFB1c2hTY2FsZShjcm93ZEluZm8uY3Jvd2QsIGNyb3dkSW5mby5zbGlkZUJsb2NrZWQpO1xyXG4gICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eS5tdWwocHVzaFNjYWxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhcm1Cb2R5ID0gc3RhdGUuY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKGNoYXJtQm9keSkge1xyXG4gICAgICAgICAgICBjaGFybUJvZHkubGluZWFyVmVsb2NpdHkgPSBjaGFybUJvZHkubGluZWFyVmVsb2NpdHkubXVsKHB1c2hTY2FsZSAqIDAuNzUpO1xyXG4gICAgICAgICAgICBjaGFybUJvZHkuYW5ndWxhclZlbG9jaXR5ICo9IHB1c2hTY2FsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhbXAgPSBNYXRoLm1pbigwLjkyLCBjcm93ZEluZm8uY3Jvd2QgKiB0aGlzLmNoYXJtQ3Jvd2REYW1waW5nU3RyZW5ndGggKiBkdCk7XHJcbiAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5ID0gcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5Lm11bCgxIC0gZGFtcCk7XHJcbiAgICAgICAgaWYgKGNoYXJtQm9keSkge1xyXG4gICAgICAgICAgICBjaGFybUJvZHkubGluZWFyVmVsb2NpdHkgPSBjaGFybUJvZHkubGluZWFyVmVsb2NpdHkubXVsKDEgLSBkYW1wICogMC44NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbmNlbE11dHVhbFB1c2hWZWxvY2l0eShzdGF0ZSwgY3Jvd2RJbmZvLmNyb3dkLCBjcm93ZEluZm8uc2xpZGVCbG9ja2VkKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLnNldHRsZWQgJiYgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5Lm1hZygpID4gMjgpIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5ID0gcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5Lm11bCgwLjQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogVHJp4buHdCB0acOqdSB24bqtbiB04buRYyDEkeG6qXkgdsOgbyBuaGF1IGtoaSBjaGVuIGNow7pjLiAqL1xyXG4gICAgcHJpdmF0ZSBjYW5jZWxNdXR1YWxQdXNoVmVsb2NpdHkoXHJcbiAgICAgICAgc3RhdGU6IENvcmRDaGFybVN0YXRlLFxyXG4gICAgICAgIGNyb3dkOiBudW1iZXIsXHJcbiAgICAgICAgc2xpZGVCbG9ja2VkOiBib29sZWFuID0gZmFsc2VcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHBpdm90Qm9keSA9IHN0YXRlLnBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghcGl2b3RCb2R5IHx8IChjcm93ZCA8PSAwICYmICFzbGlkZUJsb2NrZWQpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChzbGlkZUJsb2NrZWQpIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLmdldENoYXJtU2xvdFNwYWNpbmcoc3RhdGUuY2hhcm0pICogMC42O1xyXG4gICAgICAgIGxldCBjYW5jZWxYID0gMDtcclxuICAgICAgICBsZXQgY2FuY2VsWSA9IDA7XHJcbiAgICAgICAgbGV0IHdlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG90aGVyID0gdGhpcy5jb3JkQ2hhcm1zW2ldO1xyXG4gICAgICAgICAgICBpZiAob3RoZXIgPT09IHN0YXRlIHx8ICFvdGhlci5waXZvdCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvdGhlckJvZHkgPSBvdGhlci5waXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKCFvdGhlckJvZHkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY2MudjIob3RoZXIucGl2b3QueCAtIHBvcy54LCBvdGhlci5waXZvdC55IC0gcG9zLnkpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gb2Zmc2V0Lm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdCA+PSBzcGFjaW5nIHx8IGRpc3QgPCAwLjUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG93YXJkWCA9IG9mZnNldC54IC8gZGlzdDtcclxuICAgICAgICAgICAgY29uc3QgdG93YXJkWSA9IG9mZnNldC55IC8gZGlzdDtcclxuICAgICAgICAgICAgY29uc3QgcmVsVnggPSBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkueCAtIG90aGVyQm9keS5saW5lYXJWZWxvY2l0eS54O1xyXG4gICAgICAgICAgICBjb25zdCByZWxWeSA9IHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eS55IC0gb3RoZXJCb2R5LmxpbmVhclZlbG9jaXR5Lnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHB1c2hBbG9uZyA9IHJlbFZ4ICogdG93YXJkWCArIHJlbFZ5ICogdG93YXJkWTtcclxuICAgICAgICAgICAgaWYgKHB1c2hBbG9uZyA8PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXAgPSAxIC0gZGlzdCAvIHNwYWNpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmVuZ3RoID0gb3ZlcmxhcCAqIG92ZXJsYXAgKiBjcm93ZDtcclxuICAgICAgICAgICAgY2FuY2VsWCArPSB0b3dhcmRYICogcHVzaEFsb25nICogc3RyZW5ndGg7XHJcbiAgICAgICAgICAgIGNhbmNlbFkgKz0gdG93YXJkWSAqIHB1c2hBbG9uZyAqIHN0cmVuZ3RoO1xyXG4gICAgICAgICAgICB3ZWlnaHQgKz0gc3RyZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2VpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MihcclxuICAgICAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eS54IC0gY2FuY2VsWCxcclxuICAgICAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eS55IC0gY2FuY2VsWVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogS2jDtG5nIGNobyBjaGFybSB0csaw4bujdCBxdWEgbmVvIGhv4bq3YyBs4buNdCB2w6BvIGtoZSBo4bufIGdp4buvYSAyIG5lby4gKi9cclxuICAgIHByaXZhdGUgZW5mb3JjZUNoYXJtU2xpZGVCb3VuZHMoXHJcbiAgICAgICAgc3RhdGU6IENvcmRDaGFybVN0YXRlLFxyXG4gICAgICAgIG9uQWxsb3dlZDogeyBpbmRleDogbnVtYmVyOyBuZWFyZXN0OiBjYy5WZWMyOyBwYXRoRGlzdGFuY2U6IG51bWJlciB9LFxyXG4gICAgICAgIHRhbmdlbnQ6IGNjLlZlYzIsXHJcbiAgICAgICAgbWF4RGlzdDogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gc3RhdGUucGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghYm9keSB8fCAhcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBtYXJnaW4gPSB0aGlzLnBpdm90Q29sbGlkZXJSYWRpdXM7XHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgY29uc3QgcGF0aERpc3QgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhEaXN0LCBvbkFsbG93ZWQucGF0aERpc3RhbmNlKSk7XHJcbiAgICAgICAgc3RhdGUucGF0aERpc3RhbmNlID0gcGF0aERpc3Q7XHJcblxyXG4gICAgICAgIGNvbnN0IGluR2FwID0gdGhpcy5pc0luQW5jaG9yR2FwKHBvcyk7XHJcbiAgICAgICAgY29uc3QgYXRNaW4gPSBwYXRoRGlzdCA8PSBtYXJnaW47XHJcbiAgICAgICAgY29uc3QgYXRNYXggPSBwYXRoRGlzdCA+PSBtYXhEaXN0IC0gbWFyZ2luO1xyXG5cclxuICAgICAgICBpZiAoaW5HYXApIHtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2ZWwgPSBib2R5LmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIGxldCB2VGFuZ2VudCA9IHZlbC54ICogdGFuZ2VudC54ICsgdmVsLnkgKiB0YW5nZW50Lnk7XHJcbiAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGF0TWluICYmIHZUYW5nZW50IDwgMCkge1xyXG4gICAgICAgICAgICB2VGFuZ2VudCA9IDA7XHJcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXRNYXggJiYgdlRhbmdlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHZUYW5nZW50ID0gMDtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlZCkge1xyXG4gICAgICAgICAgICBjb25zdCB2Tm9ybWFsID0gdmVsLnggKiAoLXRhbmdlbnQueSkgKyB2ZWwueSAqIHRhbmdlbnQueDtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgdGFuZ2VudC54ICogdlRhbmdlbnQgKyAoLXRhbmdlbnQueSkgKiB2Tm9ybWFsLFxyXG4gICAgICAgICAgICAgICAgdGFuZ2VudC55ICogdlRhbmdlbnQgKyB0YW5nZW50LnggKiB2Tm9ybWFsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQ2hhcm1TbGlkZShzdGF0ZTogQ29yZENoYXJtU3RhdGUsIGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gc3RhdGUucGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghYm9keSB8fCAhcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICBjb25zdCBtYXhEaXN0ID0gdGhpcy5nZXRNYXhTbGlkZURpc3RhbmNlKHN0YXRlKTtcclxuICAgICAgICBjb25zdCBvbkFsbG93ZWQgPSB0aGlzLmdldE5lYXJlc3RPbkFsbG93ZWRTbGlkZVBhdGgoc3RhdGUsIHBvcyk7XHJcbiAgICAgICAgY29uc3QgdGFuZ2VudCA9IHRoaXMuZ2V0VGFuZ2VudEF0SW5kZXgocGF0aC5wb2ludHMsIG9uQWxsb3dlZC5pbmRleCwgc3RhdGUucGF0aERpcik7XHJcbiAgICAgICAgY29uc3QgY3Jvd2RJbmZvID0gdGhpcy5nZXRDaGFybUNyb3dkSW5mbyhzdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgY3Jvd2QgPSBjcm93ZEluZm8uY3Jvd2Q7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVCbG9ja2VkID0gY3Jvd2RJbmZvLnNsaWRlQmxvY2tlZDtcclxuXHJcbiAgICAgICAgc3RhdGUucGF0aERpc3RhbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4RGlzdCwgb25BbGxvd2VkLnBhdGhEaXN0YW5jZSkpO1xyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLnNldHRsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWCA9IG9uQWxsb3dlZC5uZWFyZXN0LnggLSBwb3MueDtcclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWSA9IG9uQWxsb3dlZC5uZWFyZXN0LnkgLSBwb3MueTtcclxuICAgICAgICAgICAgY29uc3QgdHggPSB0YW5nZW50Lng7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5ID0gdGFuZ2VudC55O1xyXG4gICAgICAgICAgICBjb25zdCBueCA9IC10eTtcclxuICAgICAgICAgICAgY29uc3QgbnkgPSB0eDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZlbCA9IGJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgIGxldCB2VGFuZ2VudCA9IHZlbC54ICogdHggKyB2ZWwueSAqIHR5O1xyXG4gICAgICAgICAgICBsZXQgdk5vcm1hbCA9IHZlbC54ICogbnggKyB2ZWwueSAqIG55O1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXROb3JtYWwgPSB0b1BhdGhYICogbnggKyB0b1BhdGhZICogbnk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2xpZGVCbG9ja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB2VGFuZ2VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB2Tm9ybWFsID0gMDtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldHRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZUYW5nZW50ID0gdlRhbmdlbnQgKyB0aGlzLnNsaWRlR3Jhdml0eSAqIGR0ICogKDEgLSBjcm93ZCAqIDAuOTIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZOb3JtYWwgPSB2Tm9ybWFsXHJcbiAgICAgICAgICAgICAgICAgICAgKyBvZmZzZXROb3JtYWwgKiB0aGlzLnBhdGhQdWxsU3RyZW5ndGggKiBkdCAqICgxIC0gY3Jvd2QgKiAwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgLSB2Tm9ybWFsICogdGhpcy5wYXRoUHVsbERhbXBpbmcgKiBkdDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3Jvd2QgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHVzaFNjYWxlID0gdGhpcy5nZXRDcm93ZFB1c2hTY2FsZShjcm93ZCwgc2xpZGVCbG9ja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdWTm9ybWFsICo9IE1hdGgubWF4KDAuMDUsIHB1c2hTY2FsZSAqIDAuMzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZUYW5nZW50ICo9IE1hdGgubWF4KDAuMDgsIHB1c2hTY2FsZSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdlRhbmdlbnQgPSBuZXdWVGFuZ2VudDtcclxuICAgICAgICAgICAgICAgIHZOb3JtYWwgPSBuZXdWTm9ybWFsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucGF0aERpc3RhbmNlIDw9IHRoaXMucGl2b3RDb2xsaWRlclJhZGl1cyAmJiB2VGFuZ2VudCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHZUYW5nZW50ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucGF0aERpc3RhbmNlID49IG1heERpc3QgLSB0aGlzLnBpdm90Q29sbGlkZXJSYWRpdXMgJiYgdlRhbmdlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2VGFuZ2VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB2eCA9IHR4ICogdlRhbmdlbnQgKyBueCAqIHZOb3JtYWw7XHJcbiAgICAgICAgICAgIGxldCB2eSA9IHR5ICogdlRhbmdlbnQgKyBueSAqIHZOb3JtYWw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IE1hdGguc3FydCh2eCAqIHZ4ICsgdnkgKiB2eSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyb3dkU3BlZWRDYXAgPSBzbGlkZUJsb2NrZWQgPyAwIDogdGhpcy5tYXhTbGlkZVNwZWVkICogKDEgLSBjcm93ZCAqIDAuNzUpO1xyXG4gICAgICAgICAgICBpZiAoc3BlZWQgPiBjcm93ZFNwZWVkQ2FwICYmIGNyb3dkU3BlZWRDYXAgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBjcm93ZFNwZWVkQ2FwIC8gc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICB2eCAqPSBzY2FsZTtcclxuICAgICAgICAgICAgICAgIHZ5ICo9IHNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52Mih2eCwgdnkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnBhdGhEaXN0YW5jZSA+PSBtYXhEaXN0IC0gMikge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0dGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gYm9keS5saW5lYXJWZWxvY2l0eS5tYWcoKTtcclxuICAgICAgICBjb25zdCBtaW5TbGlkZSA9IE1hdGgubWluKDI0LCBtYXhEaXN0ICogMC4xMik7XHJcbiAgICAgICAgaWYgKHNwZWVkIDwgdGhpcy5zZXR0bGVTcGVlZCAmJiBzdGF0ZS5wYXRoRGlzdGFuY2UgPj0gbWluU2xpZGUpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3RpbGxUaW1lICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc3RpbGxUaW1lID49IDAuMzUpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldHRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdGUuc3RpbGxUaW1lID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5zZXR0bGVkKSB7XHJcbiAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJEYW1waW5nID0gMS44O1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJEYW1waW5nID0gMS4yO1xyXG4gICAgICAgICAgICBib2R5LmFsbG93U2xlZXAgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWCA9IG9uQWxsb3dlZC5uZWFyZXN0LnggLSBwb3MueDtcclxuICAgICAgICAgICAgY29uc3QgdG9QYXRoWSA9IG9uQWxsb3dlZC5uZWFyZXN0LnkgLSBwb3MueTtcclxuICAgICAgICAgICAgY29uc3QgaG9sZERhbXAgPSB0aGlzLnBhdGhQdWxsRGFtcGluZyAqICgxLjUgKyBjcm93ZCk7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MihcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkueCArIHRvUGF0aFggKiB0aGlzLnBhdGhQdWxsU3RyZW5ndGggKiBkdCAqIDAuMzUgLSBib2R5LmxpbmVhclZlbG9jaXR5LnggKiBob2xkRGFtcCAqIGR0LFxyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eS55ICsgdG9QYXRoWSAqIHRoaXMucGF0aFB1bGxTdHJlbmd0aCAqIGR0ICogMC4zNSAtIGJvZHkubGluZWFyVmVsb2NpdHkueSAqIGhvbGREYW1wICogZHRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGguc3FydCh0b1BhdGhYICogdG9QYXRoWCArIHRvUGF0aFkgKiB0b1BhdGhZKTtcclxuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDEuNSAmJiBib2R5LmxpbmVhclZlbG9jaXR5Lm1hZygpIDwgOCkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucGl2b3Quc2V0UG9zaXRpb24oY2MudjMob25BbGxvd2VkLm5lYXJlc3QueCwgb25BbGxvd2VkLm5lYXJlc3QueSwgMCkpO1xyXG4gICAgICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZW5mb3JjZUNoYXJtU2xpZGVCb3VuZHMoc3RhdGUsIG9uQWxsb3dlZCwgdGFuZ2VudCwgbWF4RGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwb3N0UGh5c2ljc0NoYXJtU2xpZGVGaXgoc3RhdGU6IENvcmRDaGFybVN0YXRlLCBkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHN0YXRlLnBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIWJvZHkgfHwgIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgY29uc3QgbWF4RGlzdCA9IHRoaXMuZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZSk7XHJcbiAgICAgICAgY29uc3Qgb25BbGxvd2VkID0gdGhpcy5nZXROZWFyZXN0T25BbGxvd2VkU2xpZGVQYXRoKHN0YXRlLCBwb3MpO1xyXG4gICAgICAgIHN0YXRlLnBhdGhEaXN0YW5jZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heERpc3QsIG9uQWxsb3dlZC5wYXRoRGlzdGFuY2UpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbkFuY2hvckdhcChwb3MpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5nZXRTbGlkZUVudHJ5QW5jaG9yKHN0YXRlLnNpZGUpO1xyXG4gICAgICAgICAgICBjb25zdCBjbGFtcFBvcyA9IGVudHJ5IHx8IG9uQWxsb3dlZC5uZWFyZXN0O1xyXG4gICAgICAgICAgICBzdGF0ZS5waXZvdC5zZXRQb3NpdGlvbihjYy52MyhjbGFtcFBvcy54LCBjbGFtcFBvcy55LCAwKSk7XHJcbiAgICAgICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29ycmVjdENoYXJtUGl2b3RPblBhdGgoc3RhdGUsIG9uQWxsb3dlZCwgZHQpO1xyXG4gICAgICAgIHRoaXMuZGFtcENoYXJtUGl2b3RDcm93ZGluZyhzdGF0ZSwgZHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGlzdGFuY2VBbG9uZ1BhdGgoXHJcbiAgICAgICAgcG9pbnRzOiBjYy5WZWMyW10sXHJcbiAgICAgICAgc3RhcnRJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGRpcjogbnVtYmVyLFxyXG4gICAgICAgIHBvczogY2MuVmVjMlxyXG4gICAgKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBuZWFyZXN0ID0gdGhpcy5nZXROZWFyZXN0T25QYXRoKHBvaW50cywgcG9zKTtcclxuICAgICAgICBsZXQgZGlzdCA9IDA7XHJcbiAgICAgICAgbGV0IGlkeCA9IHN0YXJ0SW5kZXg7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmVhcmVzdC5pbmRleDtcclxuICAgICAgICBsZXQgZ3VhcmQgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoaWR4ICE9PSB0YXJnZXQgJiYgZ3VhcmQgPCBwb2ludHMubGVuZ3RoICsgMSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgICAgICBkaXN0ICs9IGNjLnYyKGIueCAtIGEueCwgYi55IC0gYS55KS5tYWcoKTtcclxuICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICAgICAgZ3VhcmQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlZ0EgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICBkaXN0ICs9IGNjLnYyKHBvcy54IC0gc2VnQS54LCBwb3MueSAtIHNlZ0EueSkubWFnKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBbmdsZUluTm9kZVNwYWNlKG5vZGU6IGNjLk5vZGUsIHJvb3Q6IGNjLk5vZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBhbmdsZSA9IG5vZGUuYW5nbGU7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSByb290KSB7XHJcbiAgICAgICAgICAgIGFuZ2xlICs9IHBhcmVudC5hbmdsZTtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVhc3VyZVBhdGhEaXN0YW5jZUZyb21FbnRyeShzaWRlOiBDb3JkU2lkZSwgcG9zOiBjYy5WZWMyLCBwYXRoRGlyPzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghcGF0aCB8fCAhYW5jaG9ycykgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHBhdGhEaXIgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHBhdGhEaXJcclxuICAgICAgICAgICAgOiB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzaWRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzdGFuY2VBbG9uZ1BhdGgocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIGRpciwgcG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtUGF0aERpc3RhbmNlKHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5waXZvdCkgcmV0dXJuIHN0YXRlLnBhdGhEaXN0YW5jZTtcclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICBjb25zdCBvblBhdGggPSB0aGlzLmdldE5lYXJlc3RPbkFsbG93ZWRTbGlkZVBhdGgoc3RhdGUsIHBvcyk7XHJcbiAgICAgICAgY29uc3QgbWF4RGlzdCA9IHRoaXMuZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKG1heERpc3QsIG9uUGF0aC5wYXRoRGlzdGFuY2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtc09uU2lkZShzaWRlOiBDb3JkU2lkZSk6IENvcmRDaGFybVN0YXRlW10ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogQ29yZENoYXJtU3RhdGVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvcmRDaGFybXNbaV0uc2lkZSA9PT0gc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jb3JkQ2hhcm1zW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T2NjdXBpZWREaXN0YW5jZXNPblNpZGUoc2lkZTogQ29yZFNpZGUpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgY29uc3Qgb25TaWRlID0gdGhpcy5nZXRDaGFybXNPblNpZGUoc2lkZSk7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2VzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9uU2lkZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkaXN0YW5jZXMucHVzaCh0aGlzLmdldERpc3RhbmNlRnJvbUFuY2hvcihzaWRlLCBvblNpZGVbaV0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3RhbmNlcy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERpc3RhbmNlRnJvbUFuY2hvcihzaWRlOiBDb3JkU2lkZSwgc3RhdGU6IENvcmRDaGFybVN0YXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFybVBhdGhEaXN0YW5jZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIELDoW4ga8OtbmggdsO5bmcgbmVvIChraG9hbmggxJHhu48pIOKAlCBjaGFybSB0cm9uZyB2w7luZyBuw6B5IHRow6wgYsOqbiDEkcOzIGtow7RuZyB0aOG6oyB0aMOqbS4gKi9cclxuICAgIHByaXZhdGUgZ2V0QW5jaG9yRHJvcFpvbmVSYWRpdXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyeURldGVjdFJhZGl1cyAqIDAuNTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlcXVpcmVkQW5jaG9yR2FwKGNoYXJtOiBjYy5Ob2RlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5taW5BbmNob3JEcm9wR2FwLCB0aGlzLmdldEFuY2hvckRyb3Bab25lUmFkaXVzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1TbG90U3BhY2luZyhjaGFybTogY2MuTm9kZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0Q2hhcm1JdGVtQ29tcChjaGFybSk7XHJcbiAgICAgICAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW0uc2xvdFNwYWNpbmcgPT09ICdudW1iZXInICYmIGl0ZW0uc2xvdFNwYWNpbmcgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnNsb3RTcGFjaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFybVNsb3RTcGFjaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDaOG7iSB0aOG6oyDEkcaw4bujYyBraGkgdsO5bmcgbmVvIMSR4bunIHRy4buRbmcg4oCUIGtp4buDbSB0cmEgY2hhcm0gbsOgbyDEkWFuZyBjaGnhur9tIGfhuqduIG5lbyDEkcOzLiAqL1xyXG4gICAgcHJpdmF0ZSBjYW5Ecm9wT25TaWRlKHNpZGU6IENvcmRTaWRlLCBjaGFybTogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgYW5jaG9yUG9zID0gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCByZXF1aXJlZEdhcCA9IHRoaXMuZ2V0UmVxdWlyZWRBbmNob3JHYXAoY2hhcm0pO1xyXG4gICAgICAgIGNvbnN0IHpvbmVSYWRpdXMgPSB0aGlzLmdldEFuY2hvckRyb3Bab25lUmFkaXVzKCk7XHJcbiAgICAgICAgbGV0IGNsb3Nlc3RQYXRoRGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jb3JkQ2hhcm1zW2ldO1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnBpdm90KSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0VG9BbmNob3IgPSBjYy52Mihwb3MueCAtIGFuY2hvclBvcy54LCBwb3MueSAtIGFuY2hvclBvcy55KS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGRpc3RUb0FuY2hvciA8IHpvbmVSYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3RUb0FuY2hvciA8IHRoaXMuZW50cnlEZXRlY3RSYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGhEaXN0ID0gdGhpcy5tZWFzdXJlUGF0aERpc3RhbmNlRnJvbUVudHJ5KHNpZGUsIHBvcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aERpc3QgPCBjbG9zZXN0UGF0aERpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0UGF0aERpc3QgPSBwYXRoRGlzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3RQYXRoRGlzdCA+PSByZXF1aXJlZEdhcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjcmVlblRvV29ybGRPbk1haW4oc2NyZWVuUG9zOiBjYy5WZWMyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IHRoaXMuZ2V0TWFpbk5vZGUoKTtcclxuICAgICAgICBjb25zdCBsb2NhbCA9IG1haW4uY29udmVydFRvTm9kZVNwYWNlQVIoc2NyZWVuUG9zKTtcclxuICAgICAgICByZXR1cm4gbWFpbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobG9jYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29yZEFuY2hvckF0dGVtcHQod29ybGRQb3M6IGNjLlZlYzIpOiB7IG5lYXJMZWZ0OiBib29sZWFuOyBuZWFyUmlnaHQ6IGJvb2xlYW4gfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMgfHwgIXRoaXMuYWN0aXZlQ29yZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvY2FsID0gdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luQW5jaG9yR2FwKGxvY2FsKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3RMZWZ0ID0gY2MudjIobG9jYWwueCAtIGFuY2hvcnMubGVmdC54LCBsb2NhbC55IC0gYW5jaG9ycy5sZWZ0LnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RSaWdodCA9IGNjLnYyKGxvY2FsLnggLSBhbmNob3JzLnJpZ2h0LngsIGxvY2FsLnkgLSBhbmNob3JzLnJpZ2h0LnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IG5lYXJMZWZ0ID0gZGlzdExlZnQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuICAgICAgICBjb25zdCBuZWFyUmlnaHQgPSBkaXN0UmlnaHQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuICAgICAgICBpZiAoIW5lYXJMZWZ0ICYmICFuZWFyUmlnaHQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4geyBuZWFyTGVmdCwgbmVhclJpZ2h0IH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEtow7RuZyBjw7JuIGNo4buXIHRo4bqjIOG7nyBuZW8gdHLDoWkvcGjhuqNpLiAqL1xyXG4gICAgcHJpdmF0ZSBpc0NvcmRGdWxsRm9yQ2hhcm0oY2hhcm06IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuY2FuRHJvcE9uU2lkZSgnbGVmdCcsIGNoYXJtKSAmJiAhdGhpcy5jYW5Ecm9wT25TaWRlKCdyaWdodCcsIGNoYXJtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3VsZFNob3dDb3JkRnVsbE5vdGkoc2NyZWVuUG9zOiBjYy5WZWMyLCBjaGFybVdvcmxkOiBjYy5WZWMyLCBjaGFybTogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHRvdWNoV29ybGQgPSB0aGlzLnNjcmVlblRvV29ybGRPbk1haW4oc2NyZWVuUG9zKTtcclxuICAgICAgICBjb25zdCBhdHRlbXB0ID0gdGhpcy5nZXRDb3JkQW5jaG9yQXR0ZW1wdChjaGFybVdvcmxkKVxyXG4gICAgICAgICAgICB8fCB0aGlzLmdldENvcmRBbmNob3JBdHRlbXB0KHRvdWNoV29ybGQpO1xyXG4gICAgICAgIGlmICghYXR0ZW1wdCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0NvcmRGdWxsRm9yQ2hhcm0oY2hhcm0pKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoYXR0ZW1wdC5uZWFyTGVmdCAmJiAhdGhpcy5jYW5Ecm9wT25TaWRlKCdsZWZ0JywgY2hhcm0pKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoYXR0ZW1wdC5uZWFyUmlnaHQgJiYgIXRoaXMuY2FuRHJvcE9uU2lkZSgncmlnaHQnLCBjaGFybSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBpY2tBdmFpbGFibGVTaWRlKFxyXG4gICAgICAgIG5lYXJMZWZ0OiBib29sZWFuLFxyXG4gICAgICAgIG5lYXJSaWdodDogYm9vbGVhbixcclxuICAgICAgICBkaXN0TGVmdDogbnVtYmVyLFxyXG4gICAgICAgIGRpc3RSaWdodDogbnVtYmVyLFxyXG4gICAgICAgIGNoYXJtOiBjYy5Ob2RlLFxyXG4gICAgICAgIHByZWZlckxlZnQ/OiBib29sZWFuXHJcbiAgICApOiBDb3JkU2lkZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXM6IHsgc2lkZTogQ29yZFNpZGU7IGRpc3Q6IG51bWJlciB9W10gPSBbXTtcclxuICAgICAgICBpZiAobmVhckxlZnQpIGNhbmRpZGF0ZXMucHVzaCh7IHNpZGU6ICdsZWZ0JywgZGlzdDogZGlzdExlZnQgfSk7XHJcbiAgICAgICAgaWYgKG5lYXJSaWdodCkgY2FuZGlkYXRlcy5wdXNoKHsgc2lkZTogJ3JpZ2h0JywgZGlzdDogZGlzdFJpZ2h0IH0pO1xyXG5cclxuICAgICAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjYW5kaWRhdGVzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByZWZlckxlZnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYVByZWYgPSAoYS5zaWRlID09PSAnbGVmdCcpID09PSBwcmVmZXJMZWZ0ID8gMCA6IDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiUHJlZiA9IChiLnNpZGUgPT09ICdsZWZ0JykgPT09IHByZWZlckxlZnQgPyAwIDogMTtcclxuICAgICAgICAgICAgICAgIGlmIChhUHJlZiAhPT0gYlByZWYpIHJldHVybiBhUHJlZiAtIGJQcmVmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhLmRpc3QgLSBiLmRpc3Q7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5Ecm9wT25TaWRlKGNhbmRpZGF0ZXNbaV0uc2lkZSwgY2hhcm0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlc1tpXS5zaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzb2x2ZURyb3BBbmNob3Iod29ybGRQb3M6IGNjLlZlYzIsIHByZWZlcnJlZFNpZGU6IENvcmRTaWRlLCBjaGFybTogY2MuTm9kZSk6IERyb3BBbmNob3IgfCBudWxsIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlQ29yZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBsb2NhbCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbkFuY2hvckdhcChsb2NhbCkpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBsZWZ0UG9zID0gYW5jaG9ycy5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0UG9zID0gYW5jaG9ycy5yaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdExlZnQgPSBjYy52Mihsb2NhbC54IC0gbGVmdFBvcy54LCBsb2NhbC55IC0gbGVmdFBvcy55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBkaXN0UmlnaHQgPSBjYy52Mihsb2NhbC54IC0gcmlnaHRQb3MueCwgbG9jYWwueSAtIHJpZ2h0UG9zLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IG5lYXJMZWZ0ID0gZGlzdExlZnQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuICAgICAgICBjb25zdCBuZWFyUmlnaHQgPSBkaXN0UmlnaHQgPD0gdGhpcy5lbnRyeURldGVjdFJhZGl1cztcclxuXHJcbiAgICAgICAgLy8gQ2jhu4kgdGjhuqMga2hpIHPDoXQgbmVvIHRyw6FpL3Bo4bqjaSDigJQga2jDtG5nIHRo4bqjIHRyb25nIGtoZSBo4bufIGdp4buvYSAyIG5lby5cclxuICAgICAgICBpZiAoIW5lYXJMZWZ0ICYmICFuZWFyUmlnaHQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBwcmVmZXJMZWZ0ID0gZGlzdExlZnQgPD0gZGlzdFJpZ2h0O1xyXG5cclxuICAgICAgICBpZiAocHJlZmVycmVkU2lkZSA9PT0gJ2xlZnQnICYmIG5lYXJMZWZ0ICYmIHRoaXMuY2FuRHJvcE9uU2lkZSgnbGVmdCcsIGNoYXJtKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzaWRlOiAnbGVmdCcsIGNvcmRQb3M6IGxlZnRQb3MgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByZWZlcnJlZFNpZGUgPT09ICdyaWdodCcgJiYgbmVhclJpZ2h0ICYmIHRoaXMuY2FuRHJvcE9uU2lkZSgncmlnaHQnLCBjaGFybSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc2lkZTogJ3JpZ2h0JywgY29yZFBvczogcmlnaHRQb3MgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNpZGUgPSB0aGlzLnBpY2tBdmFpbGFibGVTaWRlKG5lYXJMZWZ0LCBuZWFyUmlnaHQsIGRpc3RMZWZ0LCBkaXN0UmlnaHQsIGNoYXJtLCBwcmVmZXJMZWZ0KTtcclxuICAgICAgICBpZiAoIXNpZGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzaWRlLFxyXG4gICAgICAgICAgICBjb3JkUG9zOiBzaWRlID09PSAnbGVmdCcgPyBsZWZ0UG9zIDogcmlnaHRQb3MsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExvY2FsQm94U25hcFBvc2Uoc2lkZTogQ29yZFNpZGUpOiB7IHBvczogY2MuVmVjMzsgYW5nbGU6IG51bWJlciB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldExvY2FsQm94U2lkZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHNpZGUgPT09ICdsZWZ0JyA/IGNoaWxkcmVuLmxlZnQgOiBjaGlsZHJlbi5yaWdodDtcclxuICAgICAgICBjb25zdCBtYWluID0gdGhpcy5nZXRNYWluTm9kZSgpO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsID0gbWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9zOiBjYy52Myhsb2NhbC54LCBsb2NhbC55LCAwKSxcclxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuZ2V0QW5nbGVJbk5vZGVTcGFjZSh0YXJnZXQsIG1haW4pLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREcmFnU25hcFBvc2UobWFpblBvczogY2MuVmVjMyk6IHsgcG9zOiBjYy5WZWMzOyBhbmdsZTogbnVtYmVyOyBzaWRlOiBDb3JkU2lkZSB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghYW5jaG9ycyB8fCAhdGhpcy5hY3RpdmVDb3JkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbiA9IHRoaXMuZ2V0TWFpbk5vZGUoKTtcclxuICAgICAgICBjb25zdCBsZWZ0TWFpbiA9IG1haW4uY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoYW5jaG9ycy5sZWZ0KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRNYWluID0gbWFpbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3JkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihhbmNob3JzLnJpZ2h0KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3RMZWZ0ID0gY2MudjIobWFpblBvcy54IC0gbGVmdE1haW4ueCwgbWFpblBvcy55IC0gbGVmdE1haW4ueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgZGlzdFJpZ2h0ID0gY2MudjIobWFpblBvcy54IC0gcmlnaHRNYWluLngsIG1haW5Qb3MueSAtIHJpZ2h0TWFpbi55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBuZWFyTGVmdCA9IGRpc3RMZWZ0IDw9IHRoaXMuZW50cnlEZXRlY3RSYWRpdXM7XHJcbiAgICAgICAgY29uc3QgbmVhclJpZ2h0ID0gZGlzdFJpZ2h0IDw9IHRoaXMuZW50cnlEZXRlY3RSYWRpdXM7XHJcblxyXG4gICAgICAgIGxldCBzaWRlOiBDb3JkU2lkZSA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgY2hhcm0gPSB0aGlzLmRyYWdnaW5nQ2hhcm07XHJcbiAgICAgICAgaWYgKCFjaGFybSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcmRMb2NhbCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgbWFpbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIobWFpblBvcy54LCBtYWluUG9zLnkpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbkFuY2hvckdhcChjb3JkTG9jYWwpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKG5lYXJMZWZ0IHx8IG5lYXJSaWdodCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVmZXJMZWZ0ID0gZGlzdExlZnQgPD0gZGlzdFJpZ2h0O1xyXG4gICAgICAgICAgICBzaWRlID0gdGhpcy5waWNrQXZhaWxhYmxlU2lkZShuZWFyTGVmdCwgbmVhclJpZ2h0LCBkaXN0TGVmdCwgZGlzdFJpZ2h0LCBjaGFybSwgcHJlZmVyTGVmdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNpZGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBzbmFwID0gdGhpcy5nZXRMb2NhbEJveFNuYXBQb3NlKHNpZGUpO1xyXG4gICAgICAgIGlmIChzbmFwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHBvczogc25hcC5wb3MsIGFuZ2xlOiBzbmFwLmFuZ2xlLCBzaWRlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTogeyBsZWZ0OiBjYy5Ob2RlOyByaWdodDogY2MuTm9kZSB9IHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsQm94IHx8IHRoaXMubG9jYWxCb3guY2hpbGRyZW5Db3VudCA8IDIpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBsZWZ0QnlOYW1lID0gdGhpcy5sb2NhbEJveC5nZXRDaGlsZEJ5TmFtZSgnbGVmdCcpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0QnlOYW1lID0gdGhpcy5sb2NhbEJveC5nZXRDaGlsZEJ5TmFtZSgncmlnaHQnKTtcclxuICAgICAgICBpZiAobGVmdEJ5TmFtZSAmJiByaWdodEJ5TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBsZWZ0OiBsZWZ0QnlOYW1lLCByaWdodDogcmlnaHRCeU5hbWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoaWxkQSA9IHRoaXMubG9jYWxCb3guY2hpbGRyZW5bMF07XHJcbiAgICAgICAgY29uc3QgY2hpbGRCID0gdGhpcy5sb2NhbEJveC5jaGlsZHJlblsxXTtcclxuICAgICAgICByZXR1cm4gY2hpbGRBLnggPD0gY2hpbGRCLnhcclxuICAgICAgICAgICAgPyB7IGxlZnQ6IGNoaWxkQSwgcmlnaHQ6IGNoaWxkQiB9XHJcbiAgICAgICAgICAgIDogeyBsZWZ0OiBjaGlsZEIsIHJpZ2h0OiBjaGlsZEEgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExvY2FsQm94SGFuZ0FuZ2xlKHNpZGU6IENvcmRTaWRlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0TG9jYWxCb3hTaWRlQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gc2lkZSA9PT0gJ2xlZnQnID8gY2hpbGRyZW4ubGVmdC5hbmdsZSA6IGNoaWxkcmVuLnJpZ2h0LmFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYWxCb3hBbmNob3JQb3NpdGlvbnMoKTogeyBsZWZ0OiBjYy5WZWMyOyByaWdodDogY2MuVmVjMiB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldExvY2FsQm94U2lkZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCAhdGhpcy5hY3RpdmVDb3JkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zTGVmdCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgY2hpbGRyZW4ubGVmdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBwb3NSaWdodCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgY2hpbGRyZW4ucmlnaHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHsgbGVmdDogcG9zTGVmdCwgcmlnaHQ6IHBvc1JpZ2h0IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk6IHsgbGVmdDogY2MuVmVjMjsgcmlnaHQ6IGNjLlZlYzIgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsQm94QW5jaG9ycyA9IHRoaXMuZ2V0TG9jYWxCb3hBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAobG9jYWxCb3hBbmNob3JzKSByZXR1cm4gbG9jYWxCb3hBbmNob3JzO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubGVmdEFuY2hvciB8fCAhdGhpcy5yaWdodEFuY2hvcikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogY2MudjIodGhpcy5sZWZ0QW5jaG9yLngsIHRoaXMubGVmdEFuY2hvci55KSxcclxuICAgICAgICAgICAgcmlnaHQ6IGNjLnYyKHRoaXMucmlnaHRBbmNob3IueCwgdGhpcy5yaWdodEFuY2hvci55KSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBLaGUgaOG7nyBnaeG7r2EgMiBuZW8g4oCUIGtow7RuZyBwaOG6o2kgdsO5bmcgdGjhuqMgY2hhcm0uICovXHJcbiAgICBwcml2YXRlIGlzSW5BbmNob3JHYXAobG9jYWw6IGNjLlZlYzIpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBhbmNob3JzLmxlZnQ7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBhbmNob3JzLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGFuY2hvclJlYWNoID0gdGhpcy5lbnRyeURldGVjdFJhZGl1cyAqIDAuNDtcclxuICAgICAgICBjb25zdCBkaXN0TGVmdCA9IGNjLnYyKGxvY2FsLnggLSBsZWZ0LngsIGxvY2FsLnkgLSBsZWZ0LnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RSaWdodCA9IGNjLnYyKGxvY2FsLnggLSByaWdodC54LCBsb2NhbC55IC0gcmlnaHQueSkubWFnKCk7XHJcblxyXG4gICAgICAgIGlmIChkaXN0TGVmdCA8PSBhbmNob3JSZWFjaCB8fCBkaXN0UmlnaHQgPD0gYW5jaG9yUmVhY2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2FwTWluWCA9IE1hdGgubWluKGxlZnQueCwgcmlnaHQueCkgKyBhbmNob3JSZWFjaDtcclxuICAgICAgICBjb25zdCBnYXBNYXhYID0gTWF0aC5tYXgobGVmdC54LCByaWdodC54KSAtIGFuY2hvclJlYWNoO1xyXG4gICAgICAgIGNvbnN0IHRvcFkgPSBNYXRoLm1heChsZWZ0LnksIHJpZ2h0LnkpO1xyXG4gICAgICAgIGNvbnN0IGluVG9wQmFuZCA9IGxvY2FsLnkgPj0gdG9wWSAtIHRoaXMuZW50cnlEZXRlY3RSYWRpdXM7XHJcblxyXG4gICAgICAgIHJldHVybiBpblRvcEJhbmQgJiYgbG9jYWwueCA+PSBnYXBNaW5YICYmIGxvY2FsLnggPD0gZ2FwTWF4WDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERyb3BBbmNob3JGb3JTaWRlKHNpZGU6IENvcmRTaWRlLCBjaGFybTogY2MuTm9kZSk6IERyb3BBbmNob3IgfCBudWxsIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuRHJvcE9uU2lkZShzaWRlLCBjaGFybSkpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzaWRlLFxyXG4gICAgICAgICAgICBjb3JkUG9zOiBzaWRlID09PSAnbGVmdCcgPyBhbmNob3JzLmxlZnQgOiBhbmNob3JzLnJpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQbGF0ZUNoYXJtQXQoc2NyZWVuUG9zOiBjYy5WZWMyKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMucGxhdGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5wbGF0ZS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5hY3RpdmUgfHwgIWNoaWxkLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NoYXJtT25Db3JkKGNoaWxkKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2NyZWVuUG9zT25DaGFybShjaGlsZCwgc2NyZWVuUG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBQcmVmYWIgY2hhcm0gZ+G7kWMgc2l6ZSA9IDAg4oCUIHBo4bqjaSBoaXQgdGhlbyBpY29uIC8ga2hv4bqjbmcgY8OhY2guICovXHJcbiAgICBwcml2YXRlIGlzU2NyZWVuUG9zT25DaGFybShjaGFybTogY2MuTm9kZSwgc2NyZWVuUG9zOiBjYy5WZWMyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNoYXJtLmdldENoaWxkQnlOYW1lKCdpY29uJylcclxuICAgICAgICAgICAgfHwgKGNoYXJtLmNoaWxkcmVuQ291bnQgPiAwID8gY2hhcm0uY2hpbGRyZW5bMF0gOiBudWxsKTtcclxuICAgICAgICBpZiAoaWNvbikge1xyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gaWNvbi5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICAgICAgY29uc3QgcGFkID0gMTI7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpdCA9IGNjLnJlY3QoXHJcbiAgICAgICAgICAgICAgICByZWN0LnggLSBwYWQsXHJcbiAgICAgICAgICAgICAgICByZWN0LnkgLSBwYWQsXHJcbiAgICAgICAgICAgICAgICByZWN0LndpZHRoICsgcGFkICogMixcclxuICAgICAgICAgICAgICAgIHJlY3QuaGVpZ2h0ICsgcGFkICogMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoaGl0LmNvbnRhaW5zKHNjcmVlblBvcykpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgd29ybGQgPSBjaGFybS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIGNvbnN0IGR4ID0gd29ybGQueCAtIHNjcmVlblBvcy54O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gd29ybGQueSAtIHNjcmVlblBvcy55O1xyXG4gICAgICAgIHJldHVybiAoZHggKiBkeCArIGR5ICogZHkpIDw9IDk1ICogOTU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0NoYXJtT25Db3JkKGNoYXJtOiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcmRDaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmNvcmRDaGFybXNbaV07XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jaGFybSA9PT0gY2hhcm0gfHwgc3RhdGUucGl2b3QgPT09IGNoYXJtKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNoYXJtLnBhcmVudCA9PT0gc3RhdGUucGl2b3QpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNYWluTG9jYWxQb3Moc2NyZWVuUG9zOiBjYy5WZWMyKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWFpbk5vZGUoKS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzY3JlZW5Qb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWFpbk5vZGUoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgd2hpbGUgKG5vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLnBhcmVudC5uYW1lID09PSAnbWFpbicgfHwgbm9kZS5wYXJlbnQubmFtZSA9PT0gJ0NhbnZhcycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnBhcmVudC5uYW1lID09PSAnbWFpbicgPyBub2RlLnBhcmVudCA6IG5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5Db3JkUm91bmRMaXN0LnBhcmVudCB8fCB0aGlzLm5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0QnJhY2VsZXRSZWYoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgY29uc3QgY29yZElkID0gZ2xvYmFsVGhpcy5pZFN0cmluZyB8fCAwO1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRCcmFjZWxldEJ5Q29yZC5sZW5ndGggPiBjb3JkSWQgJiYgdGhpcy5kZWZhdWx0QnJhY2VsZXRCeUNvcmRbY29yZElkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0QnJhY2VsZXRCeUNvcmRbY29yZElkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0UmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1JdGVtQ29tcChjaGFybTogY2MuTm9kZSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGNoYXJtLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJyk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHJldHVybiBpdGVtO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wcyA9IGNoYXJtLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSBjb21wc1tpXSBhcyBhbnk7XHJcbiAgICAgICAgICAgIGlmIChjICYmIHR5cGVvZiBjLnRhZyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGMubG9hZElNRyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmZlckNvcmRJZEZyb21SZWYocmVmOiBjYy5Ob2RlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBjb3JkID0gdGhpcy5nZXRSZWZDb3JkTm9kZShyZWYpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb3JkLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBjb2xvcklkczogeyBrZXk6IHN0cmluZzsgaWQ6IG51bWJlciB9W10gPSBbXHJcbiAgICAgICAgICAgIHsga2V5OiAnYmxhY2snLCBpZDogMCB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ2JsdWUnLCBpZDogMSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ2dyZWVuJywgaWQ6IDIgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdwaW5rJywgaWQ6IDMgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdwdXJwbGUnLCBpZDogNCB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ3llbGxvdycsIGlkOiA1IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnd2hpdGUnLCBpZDogNiB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcklkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobmFtZS5pbmRleE9mKGNvbG9ySWRzW2ldLmtleSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9ySWRzW2ldLmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRDb3JkSWQgPj0gMCA/IHRoaXMuZGVmYXVsdENvcmRJZCA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkRGVmYXVsdE1ldGEocmVmOiBjYy5Ob2RlKTogeyBjb3JkSWQ6IG51bWJlcjsga2V5Y2hhaW5JbmRleDogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IG1ldGEgPSByZWYgJiYgcmVmLmdldENvbXBvbmVudCgnQnJhY2VsZXREZWZhdWx0TWV0YScpIGFzIGFueTtcclxuICAgICAgICBpZiAobWV0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY29yZElkOiBtZXRhLmNvcmRJZCxcclxuICAgICAgICAgICAgICAgIGtleWNoYWluSW5kZXg6IG1ldGEua2V5Y2hhaW5JbmRleCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRDb3JkSWQgPj0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY29yZElkOiB0aGlzLmRlZmF1bHRDb3JkSWQsXHJcbiAgICAgICAgICAgICAgICBrZXljaGFpbkluZGV4OiB0aGlzLmRlZmF1bHRLZXljaGFpbkluZGV4LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29yZElkOiB0aGlzLmluZmVyQ29yZElkRnJvbVJlZihyZWYpLFxyXG4gICAgICAgICAgICBrZXljaGFpbkluZGV4OiB0aGlzLmRlZmF1bHRLZXljaGFpbkluZGV4LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWNoZURlZmF1bHRNZXRhT25seSgpIHtcclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZkZvckNhY2hlKCk7XHJcbiAgICAgICAgaWYgKCFyZWYpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMucmVhZERlZmF1bHRNZXRhKHJlZik7XHJcbiAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkID0gbWV0YS5jb3JkSWQ7XHJcbiAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleCA9IG1ldGEua2V5Y2hhaW5JbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhY2hlRGVmYXVsdENvbmZpZyhhY3RpdmVDb3JkPzogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZ2V0RGVmYXVsdEJyYWNlbGV0UmVmRm9yQ2FjaGUoKTtcclxuICAgICAgICBpZiAoIXJlZikge1xyXG4gICAgICAgICAgICBjYy53YXJuKCdbQ29yZFJvdW5kR2FtZV0gQ2jGsGEgZ8OhbiBkZWZhdWx0QnJhY2VsZXRSZWYg4oCUIGtow7RuZyB0aOG7gyBzbyBzw6FuaCB2w7JuZyBt4bqrdS4nKTtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdENvcmRJZCA9IHRoaXMuZGVmYXVsdENvcmRJZCA+PSAwID8gdGhpcy5kZWZhdWx0Q29yZElkIDogMDtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleCA9IHRoaXMuZGVmYXVsdEtleWNoYWluSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdENvbmZpZ0NhY2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5yZWFkRGVmYXVsdE1ldGEocmVmKTtcclxuICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQgPSBtZXRhLmNvcmRJZDtcclxuICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRLZXljaGFpbkluZGV4ID0gbWV0YS5rZXljaGFpbkluZGV4O1xyXG4gICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdExheW91dCA9IHRoaXMuYnVpbGREZWZhdWx0TGF5b3V0RnJvbVJlZihyZWYsIGFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdENvbmZpZ0NhY2hlZCA9IHRoaXMuY2FjaGVkRGVmYXVsdExheW91dC5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICBjYy5sb2coJ1tDb3JkUm91bmRHYW1lXSBEZWZhdWx0IGNvbmZpZzogY29yZElkPScgKyB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWRcclxuICAgICAgICAgICAgKyAnIChwbGF5ZXI9JyArIChnbG9iYWxUaGlzLmlkU3RyaW5nIHx8IDApICsgJyknXHJcbiAgICAgICAgICAgICsgJyBrZXljaGFpbj0nICsgdGhpcy5jYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleFxyXG4gICAgICAgICAgICArICcgY2hhcm1zPScgKyB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogTHXDtG4gdHLhuqMgcmVmIG3huqt1IGPhu5EgxJHhu4tuaCDigJQga2jDtG5nIHBo4bulIHRodeG7mWMgZMOieSBuZ8aw4budaSBjaMahaSDEkWFuZyBjaOG7jW4uICovXHJcbiAgICBwcml2YXRlIGdldERlZmF1bHRCcmFjZWxldFJlZkZvckNhY2hlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRCcmFjZWxldFJlZikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0QnJhY2VsZXRSZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWZhdWx0QnJhY2VsZXRCeUNvcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0QnJhY2VsZXRCeUNvcmRbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdENvcmRJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdEtleWNoYWluSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0U2NvcmVCcmVha2Rvd24oKTogTWF0Y2hTY29yZUJyZWFrZG93biB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmVmQ29yZE5vZGUocmVmOiBjYy5Ob2RlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKHJlZi5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKSkgcmV0dXJuIHJlZjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZi5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSByZWYuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKSkgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmVmQ29yZEFuY2hvcnMocmVmQ29yZDogY2MuTm9kZSk6IHsgbGVmdDogY2MuVmVjMjsgcmlnaHQ6IGNjLlZlYzIgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSByZWZDb3JkLmdldENoaWxkQnlOYW1lKCdsZWZ0Jyk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSByZWZDb3JkLmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmICghbGVmdCB8fCAhcmlnaHQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNjLnYyKGxlZnQueCwgbGVmdC55KSxcclxuICAgICAgICAgICAgcmlnaHQ6IGNjLnYyKHJpZ2h0LngsIHJpZ2h0LnkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQYXRoRGF0YUZvckNvcmQoY29yZDogY2MuTm9kZSk6IENvcmRQYXRoRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5jb3JkUGF0aHMuZ2V0KGNvcmQpO1xyXG4gICAgICAgIGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nO1xyXG5cclxuICAgICAgICBjb25zdCByYXdQb2ludHMgPSB0aGlzLmdldFBvbHlnb25Db2xsaWRlclBvaW50cyhjb3JkKTtcclxuICAgICAgICBpZiAocmF3UG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBzYW1wbGVzID0gdGhpcy5zYW1wbGVBbG9uZ1BhdGgocmF3UG9pbnRzLCB0aGlzLnBhdGhTYW1wbGVTcGFjaW5nKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb2ludHM6IHNhbXBsZXMsXHJcbiAgICAgICAgICAgIHRvdGFsTGVuZ3RoOiB0aGlzLmNhbGNQYXRoTGVuZ3RoKHNhbXBsZXMpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb3JkQW5jaG9ycyhjb3JkOiBjYy5Ob2RlKTogeyBsZWZ0OiBjYy5WZWMyOyByaWdodDogY2MuVmVjMiB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ2xlZnQnKTtcclxuICAgICAgICBjb25zdCByaWdodCA9IGNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgaWYgKCFsZWZ0IHx8ICFyaWdodCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogY2MudjIobGVmdC54LCBsZWZ0LnkpLFxyXG4gICAgICAgICAgICByaWdodDogY2MudjIocmlnaHQueCwgcmlnaHQueSksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRlbXBsYXRlQ29yZChjb3JkSWQ/OiBudW1iZXIpOiBjYy5Ob2RlIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBjb3JkSWQgIT09IHVuZGVmaW5lZCA/IGNvcmRJZCA6IHRoaXMuY2FjaGVkRGVmYXVsdENvcmRJZDtcclxuICAgICAgICBpZiAoIXRoaXMuQ29yZFJvdW5kTGlzdCB8fCBpZCA8IDApIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLkNvcmRSb3VuZExpc3QuY2hpbGRyZW5baWRdIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtZWFzdXJlUGF0aERpc3RhbmNlT25Db3JkKFxyXG4gICAgICAgIGNvcmQ6IGNjLk5vZGUsXHJcbiAgICAgICAgcGF0aDogQ29yZFBhdGhEYXRhLFxyXG4gICAgICAgIGFuY2hvcnM6IHsgbGVmdDogY2MuVmVjMjsgcmlnaHQ6IGNjLlZlYzIgfSxcclxuICAgICAgICBzaWRlOiBDb3JkU2lkZSxcclxuICAgICAgICBwb3M6IGNjLlZlYzJcclxuICAgICk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZW50cnkgPSBzaWRlID09PSAnbGVmdCcgPyBhbmNob3JzLmxlZnQgOiBhbmNob3JzLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVudHJ5SW5kZXggPSB0aGlzLmZpbmROZWFyZXN0UGF0aEluZGV4KHBhdGgucG9pbnRzLCBlbnRyeSk7XHJcbiAgICAgICAgY29uc3QgcGF0aERpciA9IHRoaXMucGlja1BhdGhEaXJlY3Rpb24ocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHNpZGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlQWxvbmdQYXRoKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBwYXRoRGlyLCBwb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGREZWZhdWx0TGF5b3V0KCk6IENoYXJtU2xvdERhdGFbXSB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpIHx8IHRoaXMuZ2V0RGVmYXVsdEJyYWNlbGV0UmVmKCk7XHJcbiAgICAgICAgaWYgKCFyZWYpIHJldHVybiBbXTtcclxuICAgICAgICByZXR1cm4gdGhpcy5idWlsZERlZmF1bHRMYXlvdXRGcm9tUmVmKHJlZiwgdGhpcy5hY3RpdmVDb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkRGVmYXVsdExheW91dEZyb21SZWYocmVmOiBjYy5Ob2RlLCBhY3RpdmVDb3JkPzogY2MuTm9kZSk6IENoYXJtU2xvdERhdGFbXSB7XHJcbiAgICAgICAgaWYgKCFyZWYpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVmQ29yZCA9IHRoaXMuZ2V0UmVmQ29yZE5vZGUocmVmKTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZUNvcmQgPSBhY3RpdmVDb3JkIHx8IHRoaXMuZ2V0VGVtcGxhdGVDb3JkKCk7XHJcbiAgICAgICAgaWYgKCF0ZW1wbGF0ZUNvcmQpIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NvcmRSb3VuZEdhbWVdIEtow7RuZyB0w6xtIHRo4bqleSBkw6J5IGdhbWUgxJHhu4MgxJHhu41jIGxheW91dCBt4bqrdS4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aERhdGFGb3JDb3JkKHRlbXBsYXRlQ29yZCk7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvcnModGVtcGxhdGVDb3JkKTtcclxuICAgICAgICBpZiAoIXBhdGggfHwgIWFuY2hvcnMpIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NvcmRSb3VuZEdhbWVdIETDonkgZ2FtZSB0aGnhur91IFBvbHlnb25Db2xsaWRlciBob+G6t2MgYW5jaG9yIGxlZnQvcmlnaHQuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYXJtUm9vdCA9IHJlZi5nZXRDaGlsZEJ5TmFtZSgnY2hhcm0nKSB8fCByZWY7XHJcbiAgICAgICAgY29uc3Qgc2xvdHM6IENoYXJtU2xvdERhdGFbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJtUm9vdC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2hhcm0gPSBjaGFybVJvb3QuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldENoYXJtSXRlbUNvbXAoY2hhcm0pO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zT25Db3JkID0gcmVmQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgICAgIGNoYXJtLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZSA9IHRoaXMucmVzb2x2ZVNpZGVGb3JQb3NpdGlvbihwb3NPbkNvcmQsIGFuY2hvcnMpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoRGlzdGFuY2UgPSB0aGlzLm1lYXN1cmVQYXRoRGlzdGFuY2VPbkNvcmQoXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvcmQsXHJcbiAgICAgICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICAgICAgYW5jaG9ycyxcclxuICAgICAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgICAgICBwb3NPbkNvcmRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHNsb3RzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGFnOiBpdGVtLnRhZyxcclxuICAgICAgICAgICAgICAgIGNvbG9ySW5kZXg6IGl0ZW0uY29sb3JJbmRleCB8fCAwLFxyXG4gICAgICAgICAgICAgICAgc2lkZSxcclxuICAgICAgICAgICAgICAgIHBhdGhEaXN0YW5jZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbG90cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc29sdmVTaWRlRm9yUG9zaXRpb24oXHJcbiAgICAgICAgY29yZExvY2FsOiBjYy5WZWMyLFxyXG4gICAgICAgIGFuY2hvcnM6IHsgbGVmdDogY2MuVmVjMjsgcmlnaHQ6IGNjLlZlYzIgfVxyXG4gICAgKTogQ29yZFNpZGUge1xyXG4gICAgICAgIGNvbnN0IGRpc3RMZWZ0ID0gY2MudjIoY29yZExvY2FsLnggLSBhbmNob3JzLmxlZnQueCwgY29yZExvY2FsLnkgLSBhbmNob3JzLmxlZnQueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgZGlzdFJpZ2h0ID0gY2MudjIoY29yZExvY2FsLnggLSBhbmNob3JzLnJpZ2h0LngsIGNvcmRMb2NhbC55IC0gYW5jaG9ycy5yaWdodC55KS5tYWcoKTtcclxuICAgICAgICByZXR1cm4gZGlzdExlZnQgPD0gZGlzdFJpZ2h0ID8gJ2xlZnQnIDogJ3JpZ2h0JztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUGxheWVyTGF5b3V0KCk6IENoYXJtU2xvdERhdGFbXSB7XHJcbiAgICAgICAgY29uc3Qgc2xvdHM6IENoYXJtU2xvdERhdGFbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jb3JkQ2hhcm1zW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuY2hhcm0uZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSBhcyBhbnk7XHJcbiAgICAgICAgICAgIGlmICghaXRlbSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBzbG90cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRhZzogaXRlbS50YWcsXHJcbiAgICAgICAgICAgICAgICBjb2xvckluZGV4OiBpdGVtLmNvbG9ySW5kZXggfHwgMCxcclxuICAgICAgICAgICAgICAgIHNpZGU6IHN0YXRlLnNpZGUsXHJcbiAgICAgICAgICAgICAgICBwYXRoRGlzdGFuY2U6IHRoaXMuZ2V0Q2hhcm1QYXRoRGlzdGFuY2Uoc3RhdGUpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNsb3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2xvdFBvc2Uoc2xvdDogQ2hhcm1TbG90RGF0YSk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGFuZ2xlOiBudW1iZXIgfSB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIXBhdGggfHwgIWFuY2hvcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCwgYW5nbGU6IDAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gc2xvdC5zaWRlID09PSAnbGVmdCcgPyBhbmNob3JzLmxlZnQgOiBhbmNob3JzLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVudHJ5SW5kZXggPSB0aGlzLmZpbmROZWFyZXN0UGF0aEluZGV4KHBhdGgucG9pbnRzLCBlbnRyeSk7XHJcbiAgICAgICAgY29uc3QgcGF0aERpciA9IHRoaXMucGlja1BhdGhEaXJlY3Rpb24ocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHNsb3Quc2lkZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zZU9uUGF0aChwYXRoLnBvaW50cywgZW50cnlJbmRleCwgcGF0aERpciwgc2xvdC5wYXRoRGlzdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0RlZmF1bHRCcmFjZWxldFByZXZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRGVmYXVsdEJyYWNlbGV0UHJldmlldygpO1xyXG4gICAgICAgIGlmICghdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0Lmxlbmd0aCB8fCAhdGhpcy5jaGFybUxheWVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZ2V0RGVmYXVsdEJyYWNlbGV0UmVmKCk7XHJcbiAgICAgICAgY29uc3QgY2hhcm1Sb290ID0gcmVmICYmIChyZWYuZ2V0Q2hpbGRCeU5hbWUoJ2NoYXJtJykgfHwgcmVmKTtcclxuICAgICAgICBpZiAoIWNoYXJtUm9vdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBwcmV2aWV3ID0gbmV3IGNjLk5vZGUoJ2RlZmF1bHRCcmFjZWxldFByZXZpZXcnKTtcclxuICAgICAgICBwcmV2aWV3LnBhcmVudCA9IHRoaXMuY2hhcm1MYXllcjtcclxuICAgICAgICBwcmV2aWV3LnNldFNpYmxpbmdJbmRleCgwKTtcclxuXHJcbiAgICAgICAgbGV0IHNyY0luZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJtUm9vdC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc3JjID0gY2hhcm1Sb290LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoIXNyYy5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHNyY0luZGV4ID49IHRoaXMuY2FjaGVkRGVmYXVsdExheW91dC5sZW5ndGgpIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2xvdCA9IHRoaXMuY2FjaGVkRGVmYXVsdExheW91dFtzcmNJbmRleF07XHJcbiAgICAgICAgICAgIHNyY0luZGV4Kys7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IGNjLmluc3RhbnRpYXRlKHNyYyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2UgPSB0aGlzLmdldFNsb3RQb3NlKHNsb3QpO1xyXG4gICAgICAgICAgICBjbG9uZS5wYXJlbnQgPSBwcmV2aWV3O1xyXG4gICAgICAgICAgICBjbG9uZS5zZXRQb3NpdGlvbihjYy52Myhwb3NlLngsIHBvc2UueSwgMCkpO1xyXG4gICAgICAgICAgICBjbG9uZS5hbmdsZSA9IHBvc2UuYW5nbGU7XHJcbiAgICAgICAgICAgIGNsb25lLm9wYWNpdHkgPSAxNTA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gY2xvbmUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSBib2R5LmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgY29sbGlkZXJzID0gY2xvbmUuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbGxpZGVycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgY29sbGlkZXJzW2NdLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld05vZGUgPSBwcmV2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGlkZURlZmF1bHRCcmFjZWxldFByZXZpZXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByZXZpZXdOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld05vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogU28gc8OhbmggY2hhcm0gKDDigJMxMDAlLCBjaMawYSBn4buTbSBkw6J5IHbDoCBrZXljaGFpbikuICovXHJcbiAgICBjb21wYXJlQ2hhcm1zT25seSgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0Lmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXRcclxuICAgICAgICAgICAgOiB0aGlzLmJ1aWxkRGVmYXVsdExheW91dCgpO1xyXG5cclxuICAgICAgICBpZiAoZXhwZWN0ZWQubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gdGhpcy5idWlsZFBsYXllckxheW91dCgpO1xyXG4gICAgICAgIHJldHVybiBjYWxjQ2hhcm1NYXRjaFBlcmNlbnQoZXhwZWN0ZWQsIGFjdHVhbCwgdGhpcy5tYXRjaFBvc2l0aW9uVG9sZXJhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvIHPDoW5oIMSR4bqneSDEkeG7pzogZMOieSAoMzAlKSArIGNoYXJtICg1MCUpICsga2V5Y2hhaW4gKDIwJSkuXHJcbiAgICAgKiBH4buNaSBraGkgxJHDoyBjw7MgbOG7sWEgY2jhu41uIGtleWNoYWluIGPhu6dhIG5nxrDhu51pIGNoxqFpLlxyXG4gICAgICovXHJcbiAgICBjb21wYXJlRnVsbChwbGF5ZXJLZXljaGFpbkluZGV4OiBudW1iZXIpOiBNYXRjaFNjb3JlQnJlYWtkb3duIHtcclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZkZvckNhY2hlKCk7XHJcbiAgICAgICAgaWYgKHJlZikge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQgPSB0aGlzLmJ1aWxkRGVmYXVsdExheW91dEZyb21SZWYocmVmLCB0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQ7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsID0gdGhpcy5idWlsZFBsYXllckxheW91dCgpO1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbENvcmRJZCA9IGdsb2JhbFRoaXMuaWRTdHJpbmcgfHwgMDtcclxuXHJcbiAgICAgICAgdGhpcy5sYXN0U2NvcmVCcmVha2Rvd24gPSBjYWxjRnVsbFNjb3JlKFxyXG4gICAgICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQsXHJcbiAgICAgICAgICAgIGFjdHVhbENvcmRJZCxcclxuICAgICAgICAgICAgZXhwZWN0ZWQsXHJcbiAgICAgICAgICAgIGFjdHVhbCxcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleCxcclxuICAgICAgICAgICAgcGxheWVyS2V5Y2hhaW5JbmRleCxcclxuICAgICAgICAgICAgdGhpcy5tYXRjaFBvc2l0aW9uVG9sZXJhbmNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxhc3RNYXRjaFBlcmNlbnQgPSB0aGlzLmxhc3RTY29yZUJyZWFrZG93bi50b3RhbDtcclxuXHJcbiAgICAgICAgY2MubG9nKCdbQ29yZFJvdW5kR2FtZV0gQ29tcGFyZTogZXhwZWN0ZWRDb3JkPScgKyB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWRcclxuICAgICAgICAgICAgKyAnIHBsYXllckNvcmQ9JyArIGFjdHVhbENvcmRJZFxyXG4gICAgICAgICAgICArICcgZXhwZWN0ZWRDaGFybXM9JyArIGV4cGVjdGVkLmxlbmd0aFxyXG4gICAgICAgICAgICArICcgcGxheWVyQ2hhcm1zPScgKyBhY3R1YWwubGVuZ3RoXHJcbiAgICAgICAgICAgICsgJyBrZXljaGFpbj0nICsgcGxheWVyS2V5Y2hhaW5JbmRleFxyXG4gICAgICAgICAgICArICcgPT4gJyArIHRoaXMubGFzdE1hdGNoUGVyY2VudCArICclJ1xyXG4gICAgICAgICAgICArICcgKGTDonkgJyArIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duLmNvcmRTY29yZVxyXG4gICAgICAgICAgICArICcgY2hhcm0gJyArIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duLmNoYXJtU2NvcmVcclxuICAgICAgICAgICAgKyAnIGtleSAnICsgdGhpcy5sYXN0U2NvcmVCcmVha2Rvd24ua2V5Y2hhaW5TY29yZSArICcpJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RTY29yZUJyZWFrZG93bjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgZMO5bmcgY29tcGFyZUZ1bGwgKi9cclxuICAgIGNvbXBhcmVXaXRoRGVmYXVsdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVDaGFybXNPbmx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdE1hdGNoUGVyY2VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RNYXRjaFBlcmNlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01hdGNoUmVzdWx0KHBlcmNlbnQ/OiBudW1iZXIsIGJyZWFrZG93bj86IE1hdGNoU2NvcmVCcmVha2Rvd24pIHtcclxuICAgICAgICBjb25zdCBiZCA9IGJyZWFrZG93biB8fCB0aGlzLmxhc3RTY29yZUJyZWFrZG93bjtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHBlcmNlbnQgIT09IHVuZGVmaW5lZCA/IHBlcmNlbnQgOiB0aGlzLmxhc3RNYXRjaFBlcmNlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoUmVzdWx0TGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaFJlc3VsdExhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaFJlc3VsdExhYmVsLnN0cmluZyA9IHZhbHVlICsgJyUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJkKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZygnW0NvcmRSb3VuZEdhbWVdIFNjb3JlOiAnICsgdmFsdWUgKyAnJSdcclxuICAgICAgICAgICAgICAgICsgJyB8IGNvcmQ9JyArIGJkLmNvcmRTY29yZVxyXG4gICAgICAgICAgICAgICAgKyAnIGNoYXJtPScgKyBiZC5jaGFybVNjb3JlXHJcbiAgICAgICAgICAgICAgICArICcga2V5Y2hhaW49JyArIGJkLmtleWNoYWluU2NvcmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZygnW0NvcmRSb3VuZEdhbWVdIE1hdGNoOiAnICsgdmFsdWUgKyAnJScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogR+G7jWkga2hpIHhvbmcgeOG6v3AgY2hhcm0g4oCUIGNo4buJIOG6qW4gcHJldmlldywgY2jGsGEgdMOtbmggJSBjdeG7kWkuICovXHJcbiAgICBmaW5pc2hCcmFjZWxldFBoYXNlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGlkZURlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR+G7jWkga2hpIGvhur90IHRow7pjIGdhbWUg4oCUIHTDrW5oICUgxJHhuqd5IMSR4bunIHbDoCBoaeG7g24gdGjhu4suICovXHJcbiAgICBmaW5pc2hBbmRDb21wYXJlKHBsYXllcktleWNoYWluSW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5oaWRlRGVmYXVsdEJyYWNlbGV0UHJldmlldygpO1xyXG4gICAgICAgIGNvbnN0IGJyZWFrZG93biA9IHRoaXMuY29tcGFyZUZ1bGwocGxheWVyS2V5Y2hhaW5JbmRleCk7XHJcbiAgICAgICAgdGhpcy5zaG93TWF0Y2hSZXN1bHQoYnJlYWtkb3duLnRvdGFsLCBicmVha2Rvd24pO1xyXG4gICAgICAgIHJldHVybiBicmVha2Rvd24udG90YWw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcmRDaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDaGFybVNsaWRlKHRoaXMuY29yZENoYXJtc1tpXSwgZHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsYXRlVXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvcmRDaGFybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0UGh5c2ljc0NoYXJtU2xpZGVGaXgodGhpcy5jb3JkQ2hhcm1zW2ldLCBkdCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3RyYWluQ2hhcm1IYW5nKHRoaXMuY29yZENoYXJtc1tpXSwgZHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=