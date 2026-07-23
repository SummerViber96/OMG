
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
            // this.showDefaultBraceletPreview();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQ29yZFJvdW5kR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkc7QUFFdkcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUEwQjVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBNG5FQztRQXpuRUcsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyx1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFHL0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFHM0Isa0JBQVksR0FBVyxHQUFHLENBQUM7UUFHM0IsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsaURBQWlEO1FBRWpELG9CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRzVCLHNCQUFnQixHQUFXLEdBQUcsQ0FBQztRQUcvQixxQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUc3QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd6Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFHaEMsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBRS9CLDREQUE0RDtRQUU1RCxzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFHOUIsb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFHNUIsMEJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBRWxDLDBEQUEwRDtRQUUxRCwrQkFBeUIsR0FBVyxFQUFFLENBQUM7UUFFdkMseUVBQXlFO1FBRXpFLDZCQUF1QixHQUFXLElBQUksQ0FBQztRQUV2QywwRUFBMEU7UUFFMUUsK0JBQXlCLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMs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dGNoUGVyY2VudCwgY2FsY0Z1bGxTY29yZSwgQ2hhcm1TbG90RGF0YSwgTWF0Y2hTY29yZUJyZWFrZG93biB9IGZyb20gJy4vQnJhY2VsZXRNYXRjaGVyJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG50eXBlIENvcmRTaWRlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcclxuXHJcbmludGVyZmFjZSBDb3JkUGF0aERhdGEge1xyXG4gICAgcG9pbnRzOiBjYy5WZWMyW107XHJcbiAgICB0b3RhbExlbmd0aDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29yZENoYXJtU3RhdGUge1xyXG4gICAgcGl2b3Q6IGNjLk5vZGU7XHJcbiAgICBjaGFybTogY2MuTm9kZTtcclxuICAgIHNldHRsZWQ6IGJvb2xlYW47XHJcbiAgICBzdGlsbFRpbWU6IG51bWJlcjtcclxuICAgIHNpZGU6IENvcmRTaWRlO1xyXG4gICAgcGF0aFN0YXJ0SW5kZXg6IG51bWJlcjtcclxuICAgIHBhdGhEaXI6IG51bWJlcjtcclxuICAgIHBhdGhEaXN0YW5jZTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRHJvcEFuY2hvciB7XHJcbiAgICBzaWRlOiBDb3JkU2lkZTtcclxuICAgIGNvcmRQb3M6IGNjLlZlYzI7XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmRSb3VuZEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ29yZFJvdW5kTGlzdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF0ZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJtSGluZDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGVudHJ5RGV0ZWN0UmFkaXVzOiBudW1iZXIgPSAxMTA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwYXRoU2FtcGxlU3BhY2luZzogbnVtYmVyID0gMTI7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzZWdtZW50UmFkaXVzOiBudW1iZXIgPSAxNDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNsaWRlR3Jhdml0eTogbnVtYmVyID0gMTUwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4U2xpZGVTcGVlZDogbnVtYmVyID0gMTMwO1xyXG5cclxuICAgIC8qKiBW4bqtbiB04buRYyBiYW4gxJHhuqd1IGtoaSB24burYSB0aOG6oyBjaGFybSBsw6puIGTDonkuICovXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRyb3BTbGlkZVNwZWVkOiBudW1iZXIgPSAzNTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBhdGhQdWxsU3RyZW5ndGg6IG51bWJlciA9IDQyMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBhdGhQdWxsRGFtcGluZzogbnVtYmVyID0gMTY7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzZXR0bGVTcGVlZDogbnVtYmVyID0gMjI7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwaXZvdENvbGxpZGVyUmFkaXVzOiBudW1iZXIgPSA4O1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY2hhcm1TbG90U3BhY2luZzogbnVtYmVyID0gMTMwO1xyXG5cclxuICAgIC8qKiBLaG/huqNuZyB0cuG7kW5nIHThu5FpIHRoaeG7g3UgZ+G6p24gbmVvIMSR4buDIGNobyBwaMOpcCB0aOG6oyBjaGFybS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWluQW5jaG9yRHJvcEdhcDogbnVtYmVyID0gNjA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBoYW5nU3dpbmdMaW1pdDogbnVtYmVyID0gMzI7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBoYW5nT3V0d2FyZFN0aWZmbmVzczogbnVtYmVyID0gMTQ7XHJcblxyXG4gICAgLyoqIEjDo20gdOG7kWMga2hpIGNoYXJtIGNoZW4gbmhhdSAoY8OgbmcgY2FvIGPDoG5nIMOtdCBu4bqpeSkuICovXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGNoYXJtQ3Jvd2REYW1waW5nU3RyZW5ndGg6IG51bWJlciA9IDE2O1xyXG5cclxuICAgIC8qKiBQaOG6p24gduG6rW4gdOG7kWMgY8OybiBs4bqhaSBraGkgcuG6pXQgxJHDtG5nICgwLjA1ID0gZ+G6p24gbmjGsCBraMO0bmcgxJHhuql5IG5oYXUpLiAqL1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjaGFybUNyb3dkUHVzaFJldGVudGlvbjogbnVtYmVyID0gMC4wNjtcclxuXHJcbiAgICAvKiogU+G7kSBjaGFybSBzw6F0IG5oYXUgKGvhu4MgY+G6oyBi4bqjbiB0aMOibikgxJHhu4MgdHJp4buHdCB0acOqdSBs4buxYyB0csaw4bujdC92YSBjaOG6oW0uICovXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGNoYXJtQ3Jvd2RGdWxsQ2FuY2VsQ291bnQ6IG51bWJlciA9IDY7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmVDb3JkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29yZFBhdGhzOiBNYXA8Y2MuTm9kZSwgQ29yZFBhdGhEYXRhPiA9IG5ldyBNYXAoKTtcclxuICAgIHByaXZhdGUgcHJlcGFyZWRDb3JkczogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGxlZnRBbmNob3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByaWdodEFuY2hvcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNoYXJtTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb3JkQ2hhcm1zOiBDb3JkQ2hhcm1TdGF0ZVtdID0gW107XHJcbiAgICBwcml2YXRlIGRyYWdnaW5nQ2hhcm06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBkcmFnU25hcFNpZGU6IENvcmRTaWRlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHJhZ09yaWdpblBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdPcmlnaW5Qb3M6IGNjLlZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3JpZ2luU2libGluZ0luZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVUb3VjaElkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdG91Y2hCb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRHJvcDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5PazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aUZ1bGw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8qKiBOb2RlIHRoYW0gY2hp4bq/dSB2w7JuZyBt4bqrdSAodmQ6IGRlZmF1bHRDaGFybSB0cm9uZyBzY2VuZSkuICovXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRlZmF1bHRCcmFjZWxldFJlZjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFbDsm5nIG3huqt1IHRoZW8gdOG7q25nIGxv4bqhaSBkw6J5IChpbmRleCA9IGlkU3RyaW5nKS4gxq91IHRpw6puIGjGoW4gZGVmYXVsdEJyYWNlbGV0UmVmLiAqL1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGRlZmF1bHRCcmFjZWxldEJ5Q29yZDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbWF0Y2hSZXN1bHRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1hdGNoUG9zaXRpb25Ub2xlcmFuY2U6IG51bWJlciA9IDgwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2hvd0RlZmF1bHRQcmV2aWV3OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogRMOieSBt4bqrdSDEkcO6bmcgKHZkOiAyID0gZ3JlZW4pLiDEkMO6bmcgbcOgdSBkw6J5IMSRxrDhu6NjICszMCUuIC0xID0gxJFvw6FuIHThu6sgdMOqbiBjb3JkIChraMO0bmcgdGluIGPhuq15KS4gKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVmYXVsdENvcmRJZDogbnVtYmVyID0gMjtcclxuXHJcbiAgICAvKiogS2V5Y2hhaW4gxJHDum5nIChmYWxsYmFjayBraGkgY2jGsGEgZ+G6r24gQnJhY2VsZXREZWZhdWx0TWV0YSkuICovXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRlZmF1bHRLZXljaGFpbkluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGxvY2FsQm94ID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBjYWNoZWREZWZhdWx0TGF5b3V0OiBDaGFybVNsb3REYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgY2FjaGVkRGVmYXVsdENvcmRJZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRDb25maWdDYWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZGVmYXVsdFByZXZpZXdOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgbGFzdE1hdGNoUGVyY2VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbGFzdFNjb3JlQnJlYWtkb3duOiBNYXRjaFNjb3JlQnJlYWtkb3duID0gbnVsbDtcclxuICAgIGlzRGVsYXkgPSBmYWxzZVxyXG4gICAgc2hvd05vdGlGdWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsYXkgfHwgIXRoaXMubm90aUZ1bGwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzRGVsYXkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0RlbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICB0aGlzLm5vdGlGdWxsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgYW5pbSA9IHRoaXMubm90aUZ1bGwuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGxheSgpO1xyXG4gICAgfVxyXG4gICAgbGlmdEJyYWNlbGV0KHRhcmdldFBvczogY2MuVmVjMywgZHVyYXRpb246IG51bWJlciA9IDAuNCkge1xyXG4gICAgICAgIGlmICghdGhpcy5Db3JkUm91bmRMaXN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9kaWVzOiBjYy5SaWdpZEJvZHlbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3RCb2RpZXMgPSAobm9kZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZGllcy5wdXNoKGJvZHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3RCb2RpZXMobm9kZS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbGxlY3RCb2RpZXModGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGJvZGllc1tpXTtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuS2luZW1hdGljO1xyXG4gICAgICAgICAgICBib2R5LmF3YWtlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN5bmNCb2RpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBib2RpZXNbaV0uc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYm9kaWVzW2ldLnN5bmNSb3RhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHBvc2l0aW9uOiB0YXJnZXRQb3MgfSwgeyBvblVwZGF0ZTogc3luY0JvZGllcyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzeW5jQm9kaWVzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgaXNUYXJnZXRIaW5kID0gbnVsbFxyXG5cclxuICAgIHNldEhpbmQoY2hhcm0pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hhcm1IaW5kIHx8ICFjaGFybSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjaGFybS5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpIGFzIGFueTtcclxuICAgICAgICBpZiAoIWl0ZW0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdGFnID0gaXRlbS50YWc7XHJcbiAgICAgICAgaWYgKHRhZyA8IDAgfHwgdGFnID49IHRoaXMuY2hhcm1IaW5kLmNoaWxkcmVuQ291bnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYXJnZXRIaW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRIaW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBoaW5kID0gdGhpcy5jaGFybUhpbmQuY2hpbGRyZW5bdGFnXTtcclxuICAgICAgICBpZiAoIWhpbmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaGluZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNUYXJnZXRIaW5kID0gaGluZDtcclxuICAgICAgICBjb25zdCBjb2xvcklNRyA9IGl0ZW0uZ2V0Q29sb3IgJiYgaXRlbS5nZXRDb2xvcigpO1xyXG4gICAgICAgIGlmIChjb2xvcklNRykge1xyXG4gICAgICAgICAgICBpZiAoaGluZC5jaGlsZHJlblswXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3AwID0gaGluZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzcDApIHNwMC5zcHJpdGVGcmFtZSA9IGNvbG9ySU1HO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoaW5kLmNoaWxkcmVuWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcDEgPSBoaW5kLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwMSkgc3AxLnNwcml0ZUZyYW1lID0gY29sb3JJTUc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2NhbEJveCA9IGhpbmQ7XHJcbiAgICB9XHJcbiAgICBzdGFydEJyYWNlbGV0TW9kZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuQ29yZFJvdW5kTGlzdCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZVJlZmVyZW5jZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDb3JkID0gdGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuW2dsb2JhbFRoaXMuaWRTdHJpbmddO1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVDb3JkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubGVmdEFuY2hvciA9IHRoaXMuYWN0aXZlQ29yZC5nZXRDaGlsZEJ5TmFtZSgnbGVmdCcpO1xyXG4gICAgICAgIHRoaXMucmlnaHRBbmNob3IgPSB0aGlzLmFjdGl2ZUNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBbmNob3IgfHwgIXRoaXMucmlnaHRBbmNob3IpIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NvcmRSb3VuZEdhbWVdIENvcmQgaXMgbWlzc2luZyBsZWZ0L3JpZ2h0IGFuY2hvciBub2Rlcy4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MudjIoMCwgLTUyMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkNvcmRSb3VuZExpc3QuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNvcmQodGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbnN1cmVDaGFybUxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlUGxhdGVGb3JCcmFjZWxldE1vZGUoKTtcclxuICAgICAgICB0aGlzLmNhY2hlRGVmYXVsdENvbmZpZyh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dEZWZhdWx0UHJldmlldykge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNob3dEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmluZFRvdWNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBLaGF5IGPDsyBQaHlzaWNzUG9seWdvbkNvbGxpZGVyIHLhuqV0IGzhu5tuIOKAlCBu4bq/dSBjw7JuIGLhuq10IHPhur0gxJHhu6VuZyBjaGFybVxyXG4gICAgICogxJFhbmcgdHJlbyB0csOqbiBkw6J5IHbDoCDEkeG6qXkgY2jDum5nIHbDoG8gZ2nhu69hIHbDsm5nLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHByZXBhcmVQbGF0ZUZvckJyYWNlbGV0TW9kZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXRlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMucGxhdGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmICghY2hpbGQuZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBjaGlsZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKCFib2R5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2xsaWRlcnMgPSB0aGlzLnBsYXRlLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc0NvbGxpZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb2xsaWRlcnNbaV0uZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGxhdGVCb2R5ID0gdGhpcy5wbGF0ZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAocGxhdGVCb2R5KSB7XHJcbiAgICAgICAgICAgIHBsYXRlQm9keS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcGxhdGVCb2R5LmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIENo4buJIMSR4buNYyBtZXRhIHPhu5ttOyBsYXlvdXQgY2hhcm0gc+G6vSBidWlsZCBs4bqhaSBraGkgdsOgbyBnYW1lIHbhu5tpIGFjdGl2ZUNvcmQuXHJcbiAgICAgICAgdGhpcy5jYWNoZURlZmF1bHRNZXRhT25seSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJlcGFyZUNvcmQoY29yZDogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByZXBhcmVkQ29yZHMuaW5kZXhPZihjb3JkKSA+PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJhd1BvaW50cyA9IHRoaXMuZ2V0UG9seWdvbkNvbGxpZGVyUG9pbnRzKGNvcmQpO1xyXG4gICAgICAgIGlmIChyYXdQb2ludHMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICBjYy53YXJuKCdbQ29yZFJvdW5kR2FtZV0gQ29yZCBcIicgKyBjb3JkLm5hbWUgKyAnXCIgbmVlZHMgY2MuUG9seWdvbkNvbGxpZGVyLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzYW1wbGVzID0gdGhpcy5zYW1wbGVBbG9uZ1BhdGgocmF3UG9pbnRzLCB0aGlzLnBhdGhTYW1wbGVTcGFjaW5nKTtcclxuICAgICAgICB0aGlzLmNvcmRQYXRocy5zZXQoY29yZCwge1xyXG4gICAgICAgICAgICBwb2ludHM6IHNhbXBsZXMsXHJcbiAgICAgICAgICAgIHRvdGFsTGVuZ3RoOiB0aGlzLmNhbGNQYXRoTGVuZ3RoKHNhbXBsZXMpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwQ29yZFBoeXNpY3MoY29yZCwgc2FtcGxlcyk7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlZENvcmRzLnB1c2goY29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQb2x5Z29uQ29sbGlkZXJQb2ludHMoY29yZDogY2MuTm9kZSk6IGNjLlZlYzJbXSB7XHJcbiAgICAgICAgY29uc3QgcG9seSA9IGNvcmQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgaWYgKCFwb2x5IHx8ICFwb2x5LnBvaW50cyB8fCBwb2x5LnBvaW50cy5sZW5ndGggPCAyKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHBvbHkub2Zmc2V0IHx8IGNjLnYyKDAsIDApO1xyXG4gICAgICAgIHJldHVybiBwb2x5LnBvaW50cy5tYXAocCA9PiBjYy52MihwLnggKyBvZmZzZXQueCwgcC55ICsgb2Zmc2V0LnkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHVwQ29yZFBoeXNpY3MoY29yZDogY2MuTm9kZSwgc2FtcGxlczogY2MuVmVjMltdKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBjb3JkLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghYm9keSkge1xyXG4gICAgICAgICAgICBib2R5ID0gY29yZC5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcbiAgICAgICAgYm9keS5hd2FrZSA9IHRydWU7XHJcbiAgICAgICAgYm9keS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU2VnbWVudENvbGxpZGVycyhjb3JkKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IE1hdGgubWF4KHRoaXMucGF0aFNhbXBsZVNwYWNpbmcgKiAxLjUsIDE2KTtcclxuICAgICAgICBjb25zdCBjb2xsaWRlclBvaW50cyA9IHNhbXBsZXMubGVuZ3RoID4gODBcclxuICAgICAgICAgICAgPyB0aGlzLnNhbXBsZUFsb25nUGF0aChzYW1wbGVzLCBzcGFjaW5nKVxyXG4gICAgICAgICAgICA6IHNhbXBsZXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZXJQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gY29yZC5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICAgICAgY29sLm9mZnNldCA9IGNvbGxpZGVyUG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb2wucmFkaXVzID0gdGhpcy5zZWdtZW50UmFkaXVzO1xyXG4gICAgICAgICAgICBjb2wuZnJpY3Rpb24gPSAwLjM1O1xyXG4gICAgICAgICAgICBjb2wucmVzdGl0dXRpb24gPSAwLjA1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhbXBsZUFsb25nUGF0aChwb2ludHM6IGNjLlZlYzJbXSwgc3BhY2luZzogbnVtYmVyKTogY2MuVmVjMltdIHtcclxuICAgICAgICBjb25zdCBzYW1wbGVzOiBjYy5WZWMyW10gPSBbXTtcclxuICAgICAgICBsZXQgY2FycnkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzWyhpICsgMSkgJSBwb2ludHMubGVuZ3RoXTtcclxuICAgICAgICAgICAgY29uc3QgZHggPSBiLnggLSBhLng7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gYi55IC0gYS55O1xyXG4gICAgICAgICAgICBjb25zdCBzZWdMZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgICAgICBpZiAoc2VnTGVuIDw9IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlyWCA9IGR4IC8gc2VnTGVuO1xyXG4gICAgICAgICAgICBjb25zdCBkaXJZID0gZHkgLyBzZWdMZW47XHJcbiAgICAgICAgICAgIGxldCBkaXN0ID0gY2Fycnk7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoZGlzdCA8IHNlZ0xlbikge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlcy5wdXNoKGNjLnYyKGEueCArIGRpclggKiBkaXN0LCBhLnkgKyBkaXJZICogZGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgZGlzdCArPSBzcGFjaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gZGlzdCAtIHNlZ0xlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzYW1wbGVzLmxlbmd0aCA+IDAgPyBzYW1wbGVzIDogcG9pbnRzLnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjUGF0aExlbmd0aChwb2ludHM6IGNjLlZlYzJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGxlbiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHBvaW50c1soaSArIDEpICUgcG9pbnRzLmxlbmd0aF07XHJcbiAgICAgICAgICAgIGxlbiArPSBjYy52MihiLnggLSBhLngsIGIueSAtIGEueSkubWFnKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhclNlZ21lbnRDb2xsaWRlcnMoY29yZDogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGNpcmNsZXMgPSBjb3JkLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpcmNsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2lyY2xlc1tpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5zdXJlQ2hhcm1MYXllcigpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLmFjdGl2ZUNvcmQuZ2V0Q2hpbGRCeU5hbWUoJ2NoYXJtc09uQ29yZCcpO1xyXG4gICAgICAgIGlmICghbGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSBuZXcgY2MuTm9kZSgnY2hhcm1zT25Db3JkJyk7XHJcbiAgICAgICAgICAgIGxheWVyLnBhcmVudCA9IHRoaXMuYWN0aXZlQ29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFybUxheWVyID0gbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlUmVmZXJlbmNlcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbiA9IHRoaXMuZ2V0TWFpbk5vZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qga2hheSA9IG1haW4uZ2V0Q2hpbGRCeU5hbWUoJ2toYXknKTtcclxuICAgICAgICAgICAgaWYgKGtoYXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdGUgPSBraGF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmluZFRvdWNoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvdWNoQm91bmQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnRvdWNoQm91bmQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCB0b3VjaE5vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IHRoaXMuZHJhZ2dpbmdDaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuZ2V0UGxhdGVDaGFybUF0KGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGlmICghY2hhcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVUb3VjaElkID0gZXZlbnQuZ2V0SUQoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0RHJhZyhjaGFybSwgZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5zZXRIaW5kKGNoYXJtKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgZXZlbnQuZ2V0SUQoKSAhPT0gdGhpcy5hY3RpdmVUb3VjaElkIHx8ICF0aGlzLmRyYWdnaW5nQ2hhcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLmdldE1haW5Mb2NhbFBvcyhldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBjb25zdCBzbmFwID0gdGhpcy5nZXREcmFnU25hcFBvc2UodG91Y2hQb3MpO1xyXG4gICAgICAgIC8vIGlmIChzbmFwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZHJhZ2dpbmdDaGFybS5zZXRQb3NpdGlvbihzbmFwLnBvcyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZHJhZ2dpbmdDaGFybS5hbmdsZSA9IHNuYXAuYW5nbGU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZHJhZ1NuYXBTaWRlID0gc25hcC5zaWRlO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZ0NoYXJtLnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcclxuICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0uYW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMuZHJhZ1NuYXBTaWRlID0gbnVsbDtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBpc0NvdW50R2FtZSA9IDBcclxuICAgIHByaXZhdGUgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCBldmVudC5nZXRJRCgpICE9PSB0aGlzLmFjdGl2ZVRvdWNoSWQgfHwgIXRoaXMuZHJhZ2dpbmdDaGFybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjaGFybSA9IHRoaXMuZHJhZ2dpbmdDaGFybTtcclxuICAgICAgICBjb25zdCBjaGFybVdvcmxkID0gY2hhcm0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGFybS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZHJvcEFuY2hvciA9IHRoaXMucmVzb2x2ZURyb3BBbmNob3IoY2hhcm1Xb3JsZCwgdGhpcy5kcmFnU25hcFNpZGUsIGNoYXJtKTtcclxuICAgICAgICBpZiAoZHJvcEFuY2hvciAmJiB0aGlzLnRocmVhZENoYXJtT250b0NvcmQoY2hhcm0sIGRyb3BBbmNob3IpKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZERyb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB0aGlzLmhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuT2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kMy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0NvdW50R2FtZSsrXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNDb3VudEdhbWUgPT0gNSl7XHJcbiAgICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldERyYWdnZWRDaGFybShjaGFybSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFNob3dDb3JkRnVsbE5vdGkoZXZlbnQuZ2V0TG9jYXRpb24oKSwgY2hhcm1Xb3JsZCwgY2hhcm0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpRnVsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZHJhZ1NuYXBTaWRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSAtMTtcclxuICAgICAgICBpZiAodGhpcy5pc1RhcmdldEhpbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEhpbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUYXJnZXRIaW5kID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENoYXJtUGxhdGVQaHlzaWNzKGNoYXJtOiBjYy5Ob2RlLCBlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICBpZiAoZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgICAgIGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXdha2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IGNoYXJtLmdldENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICBpZiAoY29sbGlkZXIpIHtcclxuICAgICAgICAgICAgY29sbGlkZXIuZW5hYmxlZCA9IGVuYWJsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnREcmFnKGNoYXJtOiBjYy5Ob2RlLCBzY3JlZW5Qb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICB0aGlzLmRyYWdnaW5nQ2hhcm0gPSBjaGFybTtcclxuICAgICAgICB0aGlzLmRyYWdPcmlnaW5QYXJlbnQgPSBjaGFybS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5kcmFnT3JpZ2luUG9zID0gY2hhcm0ucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICB0aGlzLmRyYWdPcmlnaW5TaWJsaW5nSW5kZXggPSBjaGFybS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDaGFybVBsYXRlUGh5c2ljcyhjaGFybSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGNoYXJtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hhcm0ucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY2hhcm0ucGFyZW50ID0gbWFpbjtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbihtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKSk7XHJcbiAgICAgICAgY2hhcm0uc2V0U2libGluZ0luZGV4KG1haW4uY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgICAgIGNoYXJtLnNldFBvc2l0aW9uKHRoaXMuZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXREcmFnZ2VkQ2hhcm0oY2hhcm06IGNjLk5vZGUpIHtcclxuICAgICAgICBjaGFybS5wYXJlbnQgPSB0aGlzLmRyYWdPcmlnaW5QYXJlbnQ7XHJcbiAgICAgICAgY2hhcm0uc2V0UG9zaXRpb24odGhpcy5kcmFnT3JpZ2luUG9zKTtcclxuICAgICAgICBjaGFybS5zZXRTaWJsaW5nSW5kZXgodGhpcy5kcmFnT3JpZ2luU2libGluZ0luZGV4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDaGFybVBsYXRlUGh5c2ljcyhjaGFybSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aHJlYWRDaGFybU9udG9Db3JkKGNoYXJtOiBjYy5Ob2RlLCBkcm9wQW5jaG9yOiBEcm9wQW5jaG9yKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblNpZGUoZHJvcEFuY2hvci5zaWRlLCBjaGFybSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGlmICghcGF0aCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBhbmNob3JQb3MgPSBkcm9wQW5jaG9yLmNvcmRQb3M7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMuZmluZE5lYXJlc3RQYXRoSW5kZXgocGF0aC5wb2ludHMsIGFuY2hvclBvcyk7XHJcbiAgICAgICAgY29uc3QgcGF0aERpciA9IHRoaXMucGlja1BhdGhEaXJlY3Rpb24ocGF0aC5wb2ludHMsIHN0YXJ0SW5kZXgsIGRyb3BBbmNob3Iuc2lkZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpdm90ID0gdGhpcy5zZXR1cENoYXJtSGFuZ1JpZyhjaGFybSk7XHJcbiAgICAgICAgLy8gxJDGsGEgcGl2b3Qgc2FuZyBjaGFybUxheWVyIGLhurFuZyB3b3JsZCBwb3MgxJHhu4MgdHLDoW5oIG5o4bqjeSB04buNYSDEkeG7mSBraGkgxJHhu5VpIHBhcmVudC5cclxuICAgICAgICBjb25zdCBwaXZvdFdvcmxkID0gcGl2b3QucGFyZW50XHJcbiAgICAgICAgICAgID8gcGl2b3QucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwaXZvdC5wb3NpdGlvbilcclxuICAgICAgICAgICAgOiBjaGFybS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIHBpdm90LnBhcmVudCA9IHRoaXMuY2hhcm1MYXllcjtcclxuICAgICAgICBwaXZvdC5zZXRQb3NpdGlvbih0aGlzLmNoYXJtTGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIocGl2b3RXb3JsZCkpO1xyXG4gICAgICAgIHBpdm90LnNldFBvc2l0aW9uKGNjLnYzKGFuY2hvclBvcy54LCBhbmNob3JQb3MueSwgMCkpO1xyXG4gICAgICAgIGNvbnN0IGhhbmdMb2NhbCA9IHRoaXMuZ2V0SGFuZ0xvY2FsT2Zmc2V0KGNoYXJtKTtcclxuICAgICAgICBjb25zdCBvdXR3YXJkID0gdGhpcy5nZXRPdXR3YXJkRnJvbUNlbnRlcihjYy52MihhbmNob3JQb3MueCwgYW5jaG9yUG9zLnkpKTtcclxuICAgICAgICBjaGFybS5hbmdsZSA9IHRoaXMuYW5nbGVGb3JPdXR3YXJkSGFuZyhvdXR3YXJkLCBoYW5nTG9jYWwpO1xyXG4gICAgICAgIGlmIChjaGFybS5jaGlsZHJlblswXSkge1xyXG4gICAgICAgICAgICBjaGFybS5jaGlsZHJlblswXS5zY2FsZSA9IDAuODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBpdm90Qm9keSA9IHBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGNoYXJtQm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChwaXZvdEJvZHkpIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBwaXZvdEJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5hd2FrZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YW5nZW50ID0gdGhpcy5nZXRUYW5nZW50QXRJbmRleChwYXRoLnBvaW50cywgc3RhcnRJbmRleCwgcGF0aERpcik7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IHRhbmdlbnQubXVsKHRoaXMuZHJvcFNsaWRlU3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhcm1Cb2R5KSB7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keS5zeW5jUm90YXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBjaGFybUJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29yZENoYXJtcy5wdXNoKHtcclxuICAgICAgICAgICAgcGl2b3QsXHJcbiAgICAgICAgICAgIGNoYXJtLFxyXG4gICAgICAgICAgICBzZXR0bGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RpbGxUaW1lOiAwLFxyXG4gICAgICAgICAgICBzaWRlOiBkcm9wQW5jaG9yLnNpZGUsXHJcbiAgICAgICAgICAgIHBhdGhTdGFydEluZGV4OiBzdGFydEluZGV4LFxyXG4gICAgICAgICAgICBwYXRoRGlyLFxyXG4gICAgICAgICAgICBwYXRoRGlzdGFuY2U6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFThuqFvIHBpdm90ICjEkWnhu4NtIG5lbyB0csOqbiBkw6J5KSArIFJldm9sdXRlSm9pbnQ7IHBo4bqnbiBkxrDhu5tpIGNoYXJtIGx1bmcgbGF5IHRoZW8gcGh5c2ljcy4gKi9cclxuICAgIHByaXZhdGUgc2V0dXBDaGFybUhhbmdSaWcoY2hhcm06IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoY2hhcm0ucGFyZW50ICYmIGNoYXJtLnBhcmVudC5uYW1lID09PSAnY2hhcm1QaXZvdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYXJtLnBhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmdMb2NhbCA9IHRoaXMuZ2V0SGFuZ0xvY2FsT2Zmc2V0KGNoYXJtKTtcclxuICAgICAgICBjb25zdCBsYXllciA9IGNoYXJtLnBhcmVudDtcclxuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGxheWVyLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGFybS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpdm90ID0gbmV3IGNjLk5vZGUoJ2NoYXJtUGl2b3QnKTtcclxuICAgICAgICBwaXZvdC5wYXJlbnQgPSBsYXllcjtcclxuICAgICAgICBwaXZvdC5zZXRQb3NpdGlvbihsYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcykpO1xyXG5cclxuICAgICAgICBjaGFybS5wYXJlbnQgPSBwaXZvdDtcclxuICAgICAgICBjaGFybS5zZXRQb3NpdGlvbihjYy52MygtaGFuZ0xvY2FsLngsIC1oYW5nTG9jYWwueSwgMCkpO1xyXG4gICAgICAgIGNoYXJtLmFuZ2xlID0gMDtcclxuXHJcbiAgICAgICAgbGV0IHBpdm90Qm9keSA9IHBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghcGl2b3RCb2R5KSB7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keSA9IHBpdm90LmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwaXZvdEJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICBwaXZvdEJvZHkuZ3Jhdml0eVNjYWxlID0gMTtcclxuICAgICAgICBwaXZvdEJvZHkubGluZWFyRGFtcGluZyA9IDAuNDU7XHJcbiAgICAgICAgcGl2b3RCb2R5LmFuZ3VsYXJEYW1waW5nID0gMTtcclxuICAgICAgICBwaXZvdEJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgcGl2b3RCb2R5LmFsbG93U2xlZXAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHBpdm90Q29sID0gcGl2b3QuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgaWYgKCFwaXZvdENvbCkge1xyXG4gICAgICAgICAgICBwaXZvdENvbCA9IHBpdm90LmFkZENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwaXZvdENvbC5yYWRpdXMgPSB0aGlzLnBpdm90Q29sbGlkZXJSYWRpdXM7XHJcbiAgICAgICAgcGl2b3RDb2wuZnJpY3Rpb24gPSAwLjY1O1xyXG4gICAgICAgIHBpdm90Q29sLnJlc3RpdHV0aW9uID0gMDtcclxuICAgICAgICBwaXZvdENvbC5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IGNoYXJtQm9keSA9IGNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghY2hhcm1Cb2R5KSB7XHJcbiAgICAgICAgICAgIGNoYXJtQm9keSA9IGNoYXJtLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFybUJvZHkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmdyYXZpdHlTY2FsZSA9IDAuODU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmxpbmVhckRhbXBpbmcgPSAwLjQ1O1xyXG4gICAgICAgIGNoYXJtQm9keS5hbmd1bGFyRGFtcGluZyA9IDAuNzU7XHJcbiAgICAgICAgY2hhcm1Cb2R5LmZpeGVkUm90YXRpb24gPSBmYWxzZTtcclxuICAgICAgICBjaGFybUJvZHkuYWxsb3dTbGVlcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmVuYWJsZUNoYXJtUGh5c2ljc0NvbGxpZGVyKGNoYXJtKTtcclxuXHJcbiAgICAgICAgbGV0IGpvaW50ID0gcGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJldm9sdXRlSm9pbnQpO1xyXG4gICAgICAgIGlmICgham9pbnQpIHtcclxuICAgICAgICAgICAgam9pbnQgPSBwaXZvdC5hZGRDb21wb25lbnQoY2MuUmV2b2x1dGVKb2ludCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpvaW50LmNvbm5lY3RlZEJvZHkgPSBjaGFybUJvZHk7XHJcbiAgICAgICAgam9pbnQuYW5jaG9yID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQW5jaG9yID0gaGFuZ0xvY2FsO1xyXG4gICAgICAgIGpvaW50LmNvbGxpZGVDb25uZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBpdm90O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29yZENlbnRlckxvY2FsKCk6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIXBhdGggfHwgcGF0aC5wb2ludHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MigwLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjeCA9IDA7XHJcbiAgICAgICAgbGV0IGN5ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgucG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN4ICs9IHBhdGgucG9pbnRzW2ldLng7XHJcbiAgICAgICAgICAgIGN5ICs9IHBhdGgucG9pbnRzW2ldLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG4gPSBwYXRoLnBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKGN4IC8gbiwgY3kgLyBuKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE91dHdhcmRGcm9tQ2VudGVyKHBvczogY2MuVmVjMik6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMuZ2V0Q29yZENlbnRlckxvY2FsKCk7XHJcbiAgICAgICAgY29uc3Qgb3V0d2FyZCA9IGNjLnYyKHBvcy54IC0gY2VudGVyLngsIHBvcy55IC0gY2VudGVyLnkpO1xyXG4gICAgICAgIGlmIChvdXR3YXJkLm1hZ1NxcigpIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjIoMCwgLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXR3YXJkLm5vcm1hbGl6ZVNlbGYoKTtcclxuICAgICAgICByZXR1cm4gb3V0d2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdyYXBBbmdsZURlZyhhbmdsZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgYSA9IGFuZ2xlO1xyXG4gICAgICAgIHdoaWxlIChhID4gMTgwKSBhIC09IDM2MDtcclxuICAgICAgICB3aGlsZSAoYSA8IC0xODApIGEgKz0gMzYwO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1Cb2R5RGlyKGhhbmdMb2NhbDogY2MuVmVjMiwgYW5nbGVEZWc6IG51bWJlcik6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsQmFzZSA9IGNjLnYyKC1oYW5nTG9jYWwueCwgLWhhbmdMb2NhbC55KTtcclxuICAgICAgICBjb25zdCByYWQgPSBhbmdsZURlZyAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgY29uc3QgcyA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgY29uc3QgZGlyID0gY2MudjIoXHJcbiAgICAgICAgICAgIGxvY2FsQmFzZS54ICogYyAtIGxvY2FsQmFzZS55ICogcyxcclxuICAgICAgICAgICAgbG9jYWxCYXNlLnggKiBzICsgbG9jYWxCYXNlLnkgKiBjXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZGlyLm1hZ1NxcigpIDwgMC4wMDAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MigwLCAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpci5ub3JtYWxpemVTZWxmKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFuZ2xlRm9yT3V0d2FyZEhhbmcob3V0d2FyZDogY2MuVmVjMiwgaGFuZ0xvY2FsOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBsb2NhbEJhc2UgPSBjYy52MigtaGFuZ0xvY2FsLngsIC1oYW5nTG9jYWwueSk7XHJcbiAgICAgICAgY29uc3QgYmFzZUFuZ2xlID0gTWF0aC5hdGFuMihsb2NhbEJhc2UueSwgbG9jYWxCYXNlLngpO1xyXG4gICAgICAgIGNvbnN0IG91dEFuZ2xlID0gTWF0aC5hdGFuMihvdXR3YXJkLnksIG91dHdhcmQueCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcEFuZ2xlRGVnKChvdXRBbmdsZSAtIGJhc2VBbmdsZSkgKiAxODAgLyBNYXRoLlBJKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cmFpbkNoYXJtSGFuZyhzdGF0ZTogQ29yZENoYXJtU3RhdGUsIGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBjaGFybSA9IHN0YXRlLmNoYXJtO1xyXG4gICAgICAgIGNvbnN0IHBpdm90ID0gc3RhdGUucGl2b3Q7XHJcbiAgICAgICAgaWYgKCFjaGFybSB8fCAhcGl2b3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZ0xvY2FsID0gdGhpcy5nZXRIYW5nTG9jYWxPZmZzZXQoY2hhcm0pO1xyXG4gICAgICAgIGNvbnN0IG91dHdhcmQgPSB0aGlzLmdldE91dHdhcmRGcm9tQ2VudGVyKGNjLnYyKHBpdm90LngsIHBpdm90LnkpKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRBbmdsZSA9IHRoaXMuYW5nbGVGb3JPdXR3YXJkSGFuZyhvdXR3YXJkLCBoYW5nTG9jYWwpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBjaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuXHJcbiAgICAgICAgbGV0IGFuZ2xlID0gY2hhcm0uYW5nbGU7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy53cmFwQW5nbGVEZWcoYW5nbGUgLSB0YXJnZXRBbmdsZSk7XHJcbiAgICAgICAgY29uc3QgYm9keURpciA9IHRoaXMuZ2V0Q2hhcm1Cb2R5RGlyKGhhbmdMb2NhbCwgYW5nbGUpO1xyXG4gICAgICAgIGNvbnN0IG91dHdhcmREb3QgPSBib2R5RGlyLnggKiBvdXR3YXJkLnggKyBib2R5RGlyLnkgKiBvdXR3YXJkLnk7XHJcblxyXG4gICAgICAgIGlmIChvdXR3YXJkRG90IDwgMC4wMikge1xyXG4gICAgICAgICAgICBhbmdsZSA9IHRhcmdldEFuZ2xlO1xyXG4gICAgICAgICAgICBjaGFybS5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgYm9keS5zeW5jUm90YXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9mZnNldCA+IHRoaXMuaGFuZ1N3aW5nTGltaXQpIHtcclxuICAgICAgICAgICAgYW5nbGUgPSB0YXJnZXRBbmdsZSArIHRoaXMuaGFuZ1N3aW5nTGltaXQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPCAtdGhpcy5oYW5nU3dpbmdMaW1pdCkge1xyXG4gICAgICAgICAgICBhbmdsZSA9IHRhcmdldEFuZ2xlIC0gdGhpcy5oYW5nU3dpbmdMaW1pdDtcclxuICAgICAgICB9IGVsc2UgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgY29uc3QgcHVsbCA9IHRoaXMud3JhcEFuZ2xlRGVnKHRhcmdldEFuZ2xlIC0gYW5nbGUpO1xyXG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSArPSBwdWxsICogdGhpcy5oYW5nT3V0d2FyZFN0aWZmbmVzcyAqIGR0O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTWF0aC5hYnMoYW5nbGUgLSBjaGFybS5hbmdsZSkgPiAwLjA1KSB7XHJcbiAgICAgICAgICAgIGNoYXJtLmFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSAqPSAwLjI1O1xyXG4gICAgICAgICAgICAgICAgYm9keS5zeW5jUm90YXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRIYW5nTG9jYWxPZmZzZXQoY2hhcm06IGNjLk5vZGUpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gY2hhcm0uZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5nZXRIYW5nTG9jYWxPZmZzZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ2V0SGFuZ0xvY2FsT2Zmc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy52MigwLCA1NSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmFibGVDaGFybVBoeXNpY3NDb2xsaWRlcihjaGFybTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyID0gY2hhcm0uZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgIGlmIChjb2xsaWRlcikge1xyXG4gICAgICAgICAgICBjb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29sbGlkZXIuc2Vuc29yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLmZyaWN0aW9uID0gMC44NTtcclxuICAgICAgICAgICAgY29sbGlkZXIucmVzdGl0dXRpb24gPSAwO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbGxpZGVyLmRlbnNpdHkgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlci5kZW5zaXR5ID0gMC4zNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhbmdlbnRBdEluZGV4KHBvaW50czogY2MuVmVjMltdLCBpbmRleDogbnVtYmVyLCBkaXI6IG51bWJlcik6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLndyYXBJbmRleChpbmRleCArIGRpciwgcG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpbmRleF07XHJcbiAgICAgICAgY29uc3QgYiA9IHBvaW50c1tuZXh0SWR4XTtcclxuICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcclxuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpIHx8IDE7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKGR4IC8gbGVuLCBkeSAvIGxlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROZWFyZXN0T25QYXRoKHBvaW50czogY2MuVmVjMltdLCBwb3M6IGNjLlZlYzIpOiB7IGluZGV4OiBudW1iZXI7IG5lYXJlc3Q6IGNjLlZlYzIgfSB7XHJcbiAgICAgICAgbGV0IGJlc3RJbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGJlc3REaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IGNjLnYyKHBvaW50c1tpXS54IC0gcG9zLngsIHBvaW50c1tpXS55IC0gcG9zLnkpLm1hZ1NxcigpO1xyXG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdCA9IGQ7XHJcbiAgICAgICAgICAgICAgICBiZXN0SW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBpbmRleDogYmVzdEluZGV4LCBuZWFyZXN0OiBwb2ludHNbYmVzdEluZGV4XSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZE5lYXJlc3RQYXRoSW5kZXgocG9pbnRzOiBjYy5WZWMyW10sIHBvczogY2MuVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGJlc3QgPSAwO1xyXG4gICAgICAgIGxldCBiZXN0RGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IGNjLnYyKHBvaW50c1tpXS54IC0gcG9zLngsIHBvaW50c1tpXS55IC0gcG9zLnkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdCA9IGQ7XHJcbiAgICAgICAgICAgICAgICBiZXN0ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBpY2tQYXRoRGlyZWN0aW9uKHBvaW50czogY2MuVmVjMltdLCBlbnRyeUluZGV4OiBudW1iZXIsIHNpZGU6IENvcmRTaWRlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBzY29yZSA9IChkaXI6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcyA9IDA7XHJcbiAgICAgICAgICAgIGxldCBpZHggPSBlbnRyeUluZGV4O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQwOyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlkeCA9IHRoaXMud3JhcEluZGV4KGlkeCArIGRpciwgcG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgICAgICBzICs9IC1wLnkgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2lkZSA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyArPSBwLnggPCAwID8gMyA6IC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzICs9IHAueCA+IDAgPyAzIDogLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gc2NvcmUoMSkgPj0gc2NvcmUoLTEpID8gMSA6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UG9zZU9uUGF0aChcclxuICAgICAgICBwb2ludHM6IGNjLlZlYzJbXSxcclxuICAgICAgICBzdGFydEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgZGlyOiBudW1iZXIsXHJcbiAgICAgICAgZGlzdGFuY2U6IG51bWJlclxyXG4gICAgKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgYW5nbGU6IG51bWJlciB9IHtcclxuICAgICAgICBsZXQgaWR4ID0gc3RhcnRJbmRleDtcclxuICAgICAgICBsZXQgcmVtYWluID0gZGlzdGFuY2U7XHJcbiAgICAgICAgY29uc3QgbWF4U3RlcCA9IHBvaW50cy5sZW5ndGggKyAyO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8IG1heFN0ZXA7IHN0ZXArKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGhpcy53cmFwSW5kZXgoaWR4ICsgZGlyLCBwb2ludHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcG9pbnRzW25leHRJZHhdO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcclxuICAgICAgICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ0xlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgIGlmIChzZWdMZW4gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gbmV4dElkeDtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVtYWluIDw9IHNlZ0xlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHJlbWFpbiAvIHNlZ0xlbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBhLnggKyBkeCAqIHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gYS55ICsgZHkgKiB0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCkgKiAxODAgLyBNYXRoLlBJIC0gOTA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4LCB5LCBhbmdsZSB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZW1haW4gLT0gc2VnTGVuO1xyXG4gICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGFzdCA9IHBvaW50c1tpZHhdO1xyXG4gICAgICAgIHJldHVybiB7IHg6IGxhc3QueCwgeTogbGFzdC55LCBhbmdsZTogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd3JhcEluZGV4KGluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gbGVuZ3RoICsgaW5kZXg7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IGxlbmd0aCkgcmV0dXJuIGluZGV4IC0gbGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFuY2hvclNsaWRlRGlzdGFuY2UoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghcGF0aCB8fCAhYW5jaG9ycykgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnRJbmRleCA9IHRoaXMuZmluZE5lYXJlc3RQYXRoSW5kZXgocGF0aC5wb2ludHMsIGFuY2hvcnMubGVmdCk7XHJcbiAgICAgICAgY29uc3QgcGF0aERpciA9IHRoaXMucGlja1BhdGhEaXJlY3Rpb24ocGF0aC5wb2ludHMsIGxlZnRJbmRleCwgJ2xlZnQnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXN0YW5jZUFsb25nUGF0aChwYXRoLnBvaW50cywgbGVmdEluZGV4LCBwYXRoRGlyLCBhbmNob3JzLnJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNpZGVTbGlkZURpc3RhbmNlKHNpZGU6IENvcmRTaWRlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghcGF0aCB8fCAhYW5jaG9ycykgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXIgPSB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzaWRlKTtcclxuICAgICAgICBjb25zdCBvcHBvc2l0ZSA9IHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMucmlnaHQgOiBhbmNob3JzLmxlZnQ7XHJcbiAgICAgICAgY29uc3QgdG9PcHBvc2l0ZSA9IHRoaXMuZ2V0RGlzdGFuY2VBbG9uZ1BhdGgocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHBhdGhEaXIsIG9wcG9zaXRlKTtcclxuICAgICAgICBpZiAodG9PcHBvc2l0ZSA8PSAwKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgLy8gVHLGsOG7o3QgaOG6v3QgY3VuZyB4deG7kW5nIMSRw6F5LCBk4burbmcgdHLGsOG7m2MgbmVvIMSR4buRaSBkaeG7h24gKGtow7RuZyBxdWEga2hlIGjhu58pLlxyXG4gICAgICAgIGNvbnN0IHN0b3BNYXJnaW4gPSBNYXRoLm1heCh0aGlzLnBpdm90Q29sbGlkZXJSYWRpdXMgKiAyLCB0aGlzLm1pbkFuY2hvckRyb3BHYXAgKiAwLjQ1KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgdG9PcHBvc2l0ZSAtIHN0b3BNYXJnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZTogQ29yZENoYXJtU3RhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNpZGVTbGlkZURpc3RhbmNlKHN0YXRlLnNpZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2xpZGVFbnRyeUFuY2hvcihzaWRlOiBDb3JkU2lkZSk6IGNjLlZlYzIgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2jhu4kgdMOsbSDEkWnhu4NtIGfhuqduIG5o4bqldCB0csOqbiBjdW5nIGTDonkgaOG7o3AgbOG7hyAobmVvIOKGkiDEkcOheSksIGLhu48gcXVhIGtoZSBo4bufIGdp4buvYSAyIG5lby4gKi9cclxuICAgIHByaXZhdGUgZ2V0TmVhcmVzdE9uQWxsb3dlZFNsaWRlUGF0aChcclxuICAgICAgICBzdGF0ZTogQ29yZENoYXJtU3RhdGUsXHJcbiAgICAgICAgcG9zOiBjYy5WZWMyXHJcbiAgICApOiB7IGluZGV4OiBudW1iZXI7IG5lYXJlc3Q6IGNjLlZlYzI7IHBhdGhEaXN0YW5jZTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaW5kZXg6IHN0YXRlLnBhdGhTdGFydEluZGV4LCBuZWFyZXN0OiBwb3MsIHBhdGhEaXN0YW5jZTogMCB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWF4RGlzdGFuY2UgPSB0aGlzLmdldE1heFNsaWRlRGlzdGFuY2Uoc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IHBhdGgucG9pbnRzO1xyXG4gICAgICAgIGxldCBiZXN0RGlzdFNxciA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgbGV0IGJlc3ROZWFyZXN0ID0gcG9pbnRzW3N0YXRlLnBhdGhTdGFydEluZGV4XTtcclxuICAgICAgICBsZXQgYmVzdEluZGV4ID0gc3RhdGUucGF0aFN0YXJ0SW5kZXg7XHJcbiAgICAgICAgbGV0IGJlc3RQYXRoRGlzdCA9IDA7XHJcblxyXG4gICAgICAgIGxldCBpZHggPSBzdGF0ZS5wYXRoU3RhcnRJbmRleDtcclxuICAgICAgICBsZXQgdHJhdmVyc2VkID0gMDtcclxuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHBvaW50cy5sZW5ndGggKyAyO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8IG1heFN0ZXBzOyBzdGVwKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dElkeCA9IHRoaXMud3JhcEluZGV4KGlkeCArIHN0YXRlLnBhdGhEaXIsIHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBwb2ludHNbbmV4dElkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcclxuICAgICAgICAgICAgY29uc3Qgc2VnTGVuID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICAgICAgaWYgKHNlZ0xlbiA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbiA9IG1heERpc3RhbmNlIC0gdHJhdmVyc2VkO1xyXG4gICAgICAgICAgICBjb25zdCBzZWdVc2UgPSBNYXRoLm1pbihzZWdMZW4sIHJlbWFpbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRNYXggPSBzZWdVc2UgLyBzZWdMZW47XHJcbiAgICAgICAgICAgIGNvbnN0IHRSYXcgPSAoKHBvcy54IC0gYS54KSAqIGR4ICsgKHBvcy55IC0gYS55KSAqIGR5KSAvIChzZWdMZW4gKiBzZWdMZW4pO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odE1heCwgdFJhdykpO1xyXG4gICAgICAgICAgICBjb25zdCBueCA9IGEueCArIGR4ICogdDtcclxuICAgICAgICAgICAgY29uc3QgbnkgPSBhLnkgKyBkeSAqIHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGRTcXIgPSAocG9zLnggLSBueCkgKiAocG9zLnggLSBueCkgKyAocG9zLnkgLSBueSkgKiAocG9zLnkgLSBueSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGhEaXN0ID0gdHJhdmVyc2VkICsgdCAqIHNlZ0xlbjtcclxuXHJcbiAgICAgICAgICAgIGlmIChkU3FyIDwgYmVzdERpc3RTcXIpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0U3FyID0gZFNxcjtcclxuICAgICAgICAgICAgICAgIGJlc3ROZWFyZXN0ID0gY2MudjIobngsIG55KTtcclxuICAgICAgICAgICAgICAgIGJlc3RJbmRleCA9IGlkeDtcclxuICAgICAgICAgICAgICAgIGJlc3RQYXRoRGlzdCA9IHBhdGhEaXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cmF2ZXJzZWQgKz0gc2VnTGVuO1xyXG4gICAgICAgICAgICBpZHggPSBuZXh0SWR4O1xyXG4gICAgICAgICAgICBpZiAodHJhdmVyc2VkID49IG1heERpc3RhbmNlKSBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGluZGV4OiBiZXN0SW5kZXgsIG5lYXJlc3Q6IGJlc3ROZWFyZXN0LCBwYXRoRGlzdGFuY2U6IGJlc3RQYXRoRGlzdCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1OZWlnaGJvckNvdW50KHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5waXZvdCkgcmV0dXJuIDA7XHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuZ2V0Q2hhcm1TbG90U3BhY2luZyhzdGF0ZS5jaGFybSkgKiAwLjY7XHJcbiAgICAgICAgbGV0IG5laWdoYm9ycyA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG90aGVyID0gdGhpcy5jb3JkQ2hhcm1zW2ldO1xyXG4gICAgICAgICAgICBpZiAob3RoZXIgPT09IHN0YXRlIHx8ICFvdGhlci5waXZvdCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBjYy52MihvdGhlci5waXZvdC54IC0gcG9zLngsIG90aGVyLnBpdm90LnkgLSBwb3MueSkubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkIDwgc3BhY2luZykgbmVpZ2hib3JzKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmVpZ2hib3JzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhcm1Dcm93ZEluZm8oc3RhdGU6IENvcmRDaGFybVN0YXRlKToge1xyXG4gICAgICAgIGNyb3dkOiBudW1iZXI7XHJcbiAgICAgICAgbmVpZ2hib3JzOiBudW1iZXI7XHJcbiAgICAgICAgcGFja2VkOiBib29sZWFuO1xyXG4gICAgICAgIHNsaWRlQmxvY2tlZDogYm9vbGVhbjtcclxuICAgIH0ge1xyXG4gICAgICAgIGlmICghc3RhdGUucGl2b3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY3Jvd2Q6IDAsIG5laWdoYm9yczogMCwgcGFja2VkOiBmYWxzZSwgc2xpZGVCbG9ja2VkOiBmYWxzZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuZ2V0Q2hhcm1TbG90U3BhY2luZyhzdGF0ZS5jaGFybSkgKiAwLjY7XHJcbiAgICAgICAgY29uc3QgcGFja1RocmVzaG9sZCA9IE1hdGgubWF4KDIsIHRoaXMuY2hhcm1Dcm93ZEZ1bGxDYW5jZWxDb3VudCAtIDEpO1xyXG4gICAgICAgIGxldCBuZWlnaGJvcnMgPSAwO1xyXG4gICAgICAgIGxldCBvdmVybGFwQ3Jvd2QgPSAwO1xyXG4gICAgICAgIGxldCBtYXhOZWlnaGJvclBhY2sgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBvdGhlciA9IHRoaXMuY29yZENoYXJtc1tpXTtcclxuICAgICAgICAgICAgaWYgKG90aGVyID09PSBzdGF0ZSB8fCAhb3RoZXIucGl2b3QpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY2MudjIob3RoZXIucGl2b3QueCAtIHBvcy54LCBvdGhlci5waXZvdC55IC0gcG9zLnkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZCA+PSBzcGFjaW5nKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIG5laWdoYm9ycysrO1xyXG4gICAgICAgICAgICBjb25zdCBvdmVybGFwID0gMSAtIGQgLyBzcGFjaW5nO1xyXG4gICAgICAgICAgICBvdmVybGFwQ3Jvd2QgKz0gb3ZlcmxhcCAqIG92ZXJsYXA7XHJcbiAgICAgICAgICAgIG1heE5laWdoYm9yUGFjayA9IE1hdGgubWF4KG1heE5laWdoYm9yUGFjaywgdGhpcy5nZXRDaGFybU5laWdoYm9yQ291bnQob3RoZXIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvdW50Q3Jvd2QgPSBNYXRoLm1pbigxLCBuZWlnaGJvcnMgLyBwYWNrVGhyZXNob2xkKTtcclxuICAgICAgICBjb25zdCBjcm93ZCA9IE1hdGgubWF4KGNvdW50Q3Jvd2QsIE1hdGgubWluKDEsIG92ZXJsYXBDcm93ZCkpO1xyXG4gICAgICAgIGNvbnN0IHBhY2tlZCA9IG5laWdoYm9ycyA+PSBwYWNrVGhyZXNob2xkO1xyXG4gICAgICAgIGNvbnN0IHNsaWRlQmxvY2tlZCA9IHBhY2tlZCB8fCBtYXhOZWlnaGJvclBhY2sgPj0gcGFja1RocmVzaG9sZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgY3Jvd2QsIG5laWdoYm9ycywgcGFja2VkLCBzbGlkZUJsb2NrZWQgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtQ3Jvd2RGYWN0b3Ioc3RhdGU6IENvcmRDaGFybVN0YXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFybUNyb3dkSW5mbyhzdGF0ZSkuY3Jvd2Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDcm93ZFB1c2hTY2FsZShjcm93ZDogbnVtYmVyLCBzbGlkZUJsb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHNsaWRlQmxvY2tlZCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNyb3dkIDw9IDApIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJtQ3Jvd2RQdXNoUmV0ZW50aW9uXHJcbiAgICAgICAgICAgICsgKDEgLSB0aGlzLmNoYXJtQ3Jvd2RQdXNoUmV0ZW50aW9uKSAqICgxIC0gY3Jvd2QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29ycmVjdENoYXJtUGl2b3RPblBhdGgoXHJcbiAgICAgICAgc3RhdGU6IENvcmRDaGFybVN0YXRlLFxyXG4gICAgICAgIG9uQWxsb3dlZDogeyBuZWFyZXN0OiBjYy5WZWMyIH0sXHJcbiAgICAgICAgZHQ6IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHN0YXRlLnBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghYm9keSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICBjb25zdCBkeCA9IG9uQWxsb3dlZC5uZWFyZXN0LnggLSBwb3MueDtcclxuICAgICAgICBjb25zdCBkeSA9IG9uQWxsb3dlZC5uZWFyZXN0LnkgLSBwb3MueTtcclxuICAgICAgICBjb25zdCBvZmZEaXN0ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICBjb25zdCBzb2Z0TGltaXQgPSB0aGlzLnNlZ21lbnRSYWRpdXMgKiAxLjI7XHJcbiAgICAgICAgY29uc3QgaGFyZExpbWl0ID0gdGhpcy5zZWdtZW50UmFkaXVzICogMy4yO1xyXG5cclxuICAgICAgICBpZiAob2ZmRGlzdCA8PSBzb2Z0TGltaXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKG9mZkRpc3QgPj0gaGFyZExpbWl0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBpdm90LnNldFBvc2l0aW9uKGNjLnYzKG9uQWxsb3dlZC5uZWFyZXN0LngsIG9uQWxsb3dlZC5uZWFyZXN0LnksIDApKTtcclxuICAgICAgICAgICAgYm9keS5zeW5jUG9zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3RyZW5ndGggPSBzdGF0ZS5zZXR0bGVkID8gMTIgOiA4O1xyXG4gICAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBzdHJlbmd0aCAqIGR0KTtcclxuICAgICAgICBzdGF0ZS5waXZvdC5zZXRQb3NpdGlvbihjYy52Myhwb3MueCArIGR4ICogdCwgcG9zLnkgKyBkeSAqIHQsIDApKTtcclxuICAgICAgICBib2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRhbXBDaGFybVBpdm90Q3Jvd2Rpbmcoc3RhdGU6IENvcmRDaGFybVN0YXRlLCBkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcGl2b3RCb2R5ID0gc3RhdGUucGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCFwaXZvdEJvZHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY3Jvd2RJbmZvID0gdGhpcy5nZXRDaGFybUNyb3dkSW5mbyhzdGF0ZSk7XHJcbiAgICAgICAgaWYgKGNyb3dkSW5mby5jcm93ZCA8PSAwICYmICFjcm93ZEluZm8uc2xpZGVCbG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChjcm93ZEluZm8uc2xpZGVCbG9ja2VkKSB7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBjb25zdCBjaGFybUJvZHkgPSBzdGF0ZS5jaGFybS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgaWYgKGNoYXJtQm9keSkge1xyXG4gICAgICAgICAgICAgICAgY2hhcm1Cb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBjaGFybUJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnNldHRsZWQpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldHRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHB1c2hTY2FsZSA9IHRoaXMuZ2V0Q3Jvd2RQdXNoU2NhbGUoY3Jvd2RJbmZvLmNyb3dkLCBjcm93ZEluZm8uc2xpZGVCbG9ja2VkKTtcclxuICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkgPSBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkubXVsKHB1c2hTY2FsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYXJtQm9keSA9IHN0YXRlLmNoYXJtLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChjaGFybUJvZHkpIHtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LmxpbmVhclZlbG9jaXR5ID0gY2hhcm1Cb2R5LmxpbmVhclZlbG9jaXR5Lm11bChwdXNoU2NhbGUgKiAwLjc1KTtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LmFuZ3VsYXJWZWxvY2l0eSAqPSBwdXNoU2NhbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYW1wID0gTWF0aC5taW4oMC45MiwgY3Jvd2RJbmZvLmNyb3dkICogdGhpcy5jaGFybUNyb3dkRGFtcGluZ1N0cmVuZ3RoICogZHQpO1xyXG4gICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eS5tdWwoMSAtIGRhbXApO1xyXG4gICAgICAgIGlmIChjaGFybUJvZHkpIHtcclxuICAgICAgICAgICAgY2hhcm1Cb2R5LmxpbmVhclZlbG9jaXR5ID0gY2hhcm1Cb2R5LmxpbmVhclZlbG9jaXR5Lm11bCgxIC0gZGFtcCAqIDAuODUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW5jZWxNdXR1YWxQdXNoVmVsb2NpdHkoc3RhdGUsIGNyb3dkSW5mby5jcm93ZCwgY3Jvd2RJbmZvLnNsaWRlQmxvY2tlZCk7XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5zZXR0bGVkICYmIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eS5tYWcoKSA+IDI4KSB7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eS5tdWwoMC40KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRyaeG7h3QgdGnDqnUgduG6rW4gdOG7kWMgxJHhuql5IHbDoG8gbmhhdSBraGkgY2hlbiBjaMO6Yy4gKi9cclxuICAgIHByaXZhdGUgY2FuY2VsTXV0dWFsUHVzaFZlbG9jaXR5KFxyXG4gICAgICAgIHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSxcclxuICAgICAgICBjcm93ZDogbnVtYmVyLFxyXG4gICAgICAgIHNsaWRlQmxvY2tlZDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBwaXZvdEJvZHkgPSBzdGF0ZS5waXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXBpdm90Qm9keSB8fCAoY3Jvd2QgPD0gMCAmJiAhc2xpZGVCbG9ja2VkKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoc2xpZGVCbG9ja2VkKSB7XHJcbiAgICAgICAgICAgIHBpdm90Qm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICBjb25zdCBzcGFjaW5nID0gdGhpcy5nZXRDaGFybVNsb3RTcGFjaW5nKHN0YXRlLmNoYXJtKSAqIDAuNjtcclxuICAgICAgICBsZXQgY2FuY2VsWCA9IDA7XHJcbiAgICAgICAgbGV0IGNhbmNlbFkgPSAwO1xyXG4gICAgICAgIGxldCB3ZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBvdGhlciA9IHRoaXMuY29yZENoYXJtc1tpXTtcclxuICAgICAgICAgICAgaWYgKG90aGVyID09PSBzdGF0ZSB8fCAhb3RoZXIucGl2b3QpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3RoZXJCb2R5ID0gb3RoZXIucGl2b3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmICghb3RoZXJCb2R5KSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGNjLnYyKG90aGVyLnBpdm90LnggLSBwb3MueCwgb3RoZXIucGl2b3QueSAtIHBvcy55KTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IG9mZnNldC5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGRpc3QgPj0gc3BhY2luZyB8fCBkaXN0IDwgMC41KSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvd2FyZFggPSBvZmZzZXQueCAvIGRpc3Q7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvd2FyZFkgPSBvZmZzZXQueSAvIGRpc3Q7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbFZ4ID0gcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5LnggLSBvdGhlckJvZHkubGluZWFyVmVsb2NpdHkueDtcclxuICAgICAgICAgICAgY29uc3QgcmVsVnkgPSBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkueSAtIG90aGVyQm9keS5saW5lYXJWZWxvY2l0eS55O1xyXG4gICAgICAgICAgICBjb25zdCBwdXNoQWxvbmcgPSByZWxWeCAqIHRvd2FyZFggKyByZWxWeSAqIHRvd2FyZFk7XHJcbiAgICAgICAgICAgIGlmIChwdXNoQWxvbmcgPD0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvdmVybGFwID0gMSAtIGRpc3QgLyBzcGFjaW5nO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJlbmd0aCA9IG92ZXJsYXAgKiBvdmVybGFwICogY3Jvd2Q7XHJcbiAgICAgICAgICAgIGNhbmNlbFggKz0gdG93YXJkWCAqIHB1c2hBbG9uZyAqIHN0cmVuZ3RoO1xyXG4gICAgICAgICAgICBjYW5jZWxZICs9IHRvd2FyZFkgKiBwdXNoQWxvbmcgKiBzdHJlbmd0aDtcclxuICAgICAgICAgICAgd2VpZ2h0ICs9IHN0cmVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdlaWdodCA+IDApIHtcclxuICAgICAgICAgICAgcGl2b3RCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkueCAtIGNhbmNlbFgsXHJcbiAgICAgICAgICAgICAgICBwaXZvdEJvZHkubGluZWFyVmVsb2NpdHkueSAtIGNhbmNlbFlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEtow7RuZyBjaG8gY2hhcm0gdHLGsOG7o3QgcXVhIG5lbyBob+G6t2MgbOG7jXQgdsOgbyBraGUgaOG7nyBnaeG7r2EgMiBuZW8uICovXHJcbiAgICBwcml2YXRlIGVuZm9yY2VDaGFybVNsaWRlQm91bmRzKFxyXG4gICAgICAgIHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSxcclxuICAgICAgICBvbkFsbG93ZWQ6IHsgaW5kZXg6IG51bWJlcjsgbmVhcmVzdDogY2MuVmVjMjsgcGF0aERpc3RhbmNlOiBudW1iZXIgfSxcclxuICAgICAgICB0YW5nZW50OiBjYy5WZWMyLFxyXG4gICAgICAgIG1heERpc3Q6IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHN0YXRlLnBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIWJvZHkgfHwgIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgbWFyZ2luID0gdGhpcy5waXZvdENvbGxpZGVyUmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXN0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4RGlzdCwgb25BbGxvd2VkLnBhdGhEaXN0YW5jZSkpO1xyXG4gICAgICAgIHN0YXRlLnBhdGhEaXN0YW5jZSA9IHBhdGhEaXN0O1xyXG5cclxuICAgICAgICBjb25zdCBpbkdhcCA9IHRoaXMuaXNJbkFuY2hvckdhcChwb3MpO1xyXG4gICAgICAgIGNvbnN0IGF0TWluID0gcGF0aERpc3QgPD0gbWFyZ2luO1xyXG4gICAgICAgIGNvbnN0IGF0TWF4ID0gcGF0aERpc3QgPj0gbWF4RGlzdCAtIG1hcmdpbjtcclxuXHJcbiAgICAgICAgaWYgKGluR2FwKSB7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVsID0gYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICBsZXQgdlRhbmdlbnQgPSB2ZWwueCAqIHRhbmdlbnQueCArIHZlbC55ICogdGFuZ2VudC55O1xyXG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChhdE1pbiAmJiB2VGFuZ2VudCA8IDApIHtcclxuICAgICAgICAgICAgdlRhbmdlbnQgPSAwO1xyXG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF0TWF4ICYmIHZUYW5nZW50ID4gMCkge1xyXG4gICAgICAgICAgICB2VGFuZ2VudCA9IDA7XHJcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgdk5vcm1hbCA9IHZlbC54ICogKC10YW5nZW50LnkpICsgdmVsLnkgKiB0YW5nZW50Lng7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MihcclxuICAgICAgICAgICAgICAgIHRhbmdlbnQueCAqIHZUYW5nZW50ICsgKC10YW5nZW50LnkpICogdk5vcm1hbCxcclxuICAgICAgICAgICAgICAgIHRhbmdlbnQueSAqIHZUYW5nZW50ICsgdGFuZ2VudC54ICogdk5vcm1hbFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNoYXJtU2xpZGUoc3RhdGU6IENvcmRDaGFybVN0YXRlLCBkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHN0YXRlLnBpdm90LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBpZiAoIWJvZHkgfHwgIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgY29uc3QgbWF4RGlzdCA9IHRoaXMuZ2V0TWF4U2xpZGVEaXN0YW5jZShzdGF0ZSk7XHJcbiAgICAgICAgY29uc3Qgb25BbGxvd2VkID0gdGhpcy5nZXROZWFyZXN0T25BbGxvd2VkU2xpZGVQYXRoKHN0YXRlLCBwb3MpO1xyXG4gICAgICAgIGNvbnN0IHRhbmdlbnQgPSB0aGlzLmdldFRhbmdlbnRBdEluZGV4KHBhdGgucG9pbnRzLCBvbkFsbG93ZWQuaW5kZXgsIHN0YXRlLnBhdGhEaXIpO1xyXG4gICAgICAgIGNvbnN0IGNyb3dkSW5mbyA9IHRoaXMuZ2V0Q2hhcm1Dcm93ZEluZm8oc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGNyb3dkID0gY3Jvd2RJbmZvLmNyb3dkO1xyXG4gICAgICAgIGNvbnN0IHNsaWRlQmxvY2tlZCA9IGNyb3dkSW5mby5zbGlkZUJsb2NrZWQ7XHJcblxyXG4gICAgICAgIHN0YXRlLnBhdGhEaXN0YW5jZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heERpc3QsIG9uQWxsb3dlZC5wYXRoRGlzdGFuY2UpKTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGF0ZS5zZXR0bGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvUGF0aFggPSBvbkFsbG93ZWQubmVhcmVzdC54IC0gcG9zLng7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvUGF0aFkgPSBvbkFsbG93ZWQubmVhcmVzdC55IC0gcG9zLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gdGFuZ2VudC54O1xyXG4gICAgICAgICAgICBjb25zdCB0eSA9IHRhbmdlbnQueTtcclxuICAgICAgICAgICAgY29uc3QgbnggPSAtdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IG55ID0gdHg7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2ZWwgPSBib2R5LmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICBsZXQgdlRhbmdlbnQgPSB2ZWwueCAqIHR4ICsgdmVsLnkgKiB0eTtcclxuICAgICAgICAgICAgbGV0IHZOb3JtYWwgPSB2ZWwueCAqIG54ICsgdmVsLnkgKiBueTtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0Tm9ybWFsID0gdG9QYXRoWCAqIG54ICsgdG9QYXRoWSAqIG55O1xyXG5cclxuICAgICAgICAgICAgaWYgKHNsaWRlQmxvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdlRhbmdlbnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdk5vcm1hbCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXR0bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdWVGFuZ2VudCA9IHZUYW5nZW50ICsgdGhpcy5zbGlkZUdyYXZpdHkgKiBkdCAqICgxIC0gY3Jvd2QgKiAwLjkyKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdWTm9ybWFsID0gdk5vcm1hbFxyXG4gICAgICAgICAgICAgICAgICAgICsgb2Zmc2V0Tm9ybWFsICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHQgKiAoMSAtIGNyb3dkICogMC41KVxyXG4gICAgICAgICAgICAgICAgICAgIC0gdk5vcm1hbCAqIHRoaXMucGF0aFB1bGxEYW1waW5nICogZHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNyb3dkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHB1c2hTY2FsZSA9IHRoaXMuZ2V0Q3Jvd2RQdXNoU2NhbGUoY3Jvd2QsIHNsaWRlQmxvY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Vk5vcm1hbCAqPSBNYXRoLm1heCgwLjA1LCBwdXNoU2NhbGUgKiAwLjM1KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdWVGFuZ2VudCAqPSBNYXRoLm1heCgwLjA4LCBwdXNoU2NhbGUgKiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZUYW5nZW50ID0gbmV3VlRhbmdlbnQ7XHJcbiAgICAgICAgICAgICAgICB2Tm9ybWFsID0gbmV3Vk5vcm1hbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnBhdGhEaXN0YW5jZSA8PSB0aGlzLnBpdm90Q29sbGlkZXJSYWRpdXMgJiYgdlRhbmdlbnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB2VGFuZ2VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnBhdGhEaXN0YW5jZSA+PSBtYXhEaXN0IC0gdGhpcy5waXZvdENvbGxpZGVyUmFkaXVzICYmIHZUYW5nZW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdlRhbmdlbnQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdnggPSB0eCAqIHZUYW5nZW50ICsgbnggKiB2Tm9ybWFsO1xyXG4gICAgICAgICAgICBsZXQgdnkgPSB0eSAqIHZUYW5nZW50ICsgbnkgKiB2Tm9ybWFsO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBNYXRoLnNxcnQodnggKiB2eCArIHZ5ICogdnkpO1xyXG4gICAgICAgICAgICBjb25zdCBjcm93ZFNwZWVkQ2FwID0gc2xpZGVCbG9ja2VkID8gMCA6IHRoaXMubWF4U2xpZGVTcGVlZCAqICgxIC0gY3Jvd2QgKiAwLjc1KTtcclxuICAgICAgICAgICAgaWYgKHNwZWVkID4gY3Jvd2RTcGVlZENhcCAmJiBjcm93ZFNwZWVkQ2FwID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gY3Jvd2RTcGVlZENhcCAvIHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgdnggKj0gc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB2eSAqPSBzY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIodngsIHZ5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5wYXRoRGlzdGFuY2UgPj0gbWF4RGlzdCAtIDIpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldHRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzcGVlZCA9IGJvZHkubGluZWFyVmVsb2NpdHkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgbWluU2xpZGUgPSBNYXRoLm1pbigyNCwgbWF4RGlzdCAqIDAuMTIpO1xyXG4gICAgICAgIGlmIChzcGVlZCA8IHRoaXMuc2V0dGxlU3BlZWQgJiYgc3RhdGUucGF0aERpc3RhbmNlID49IG1pblNsaWRlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0aWxsVGltZSArPSBkdDtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnN0aWxsVGltZSA+PSAwLjM1KSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXR0bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0aWxsVGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuc2V0dGxlZCkge1xyXG4gICAgICAgICAgICBib2R5LmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIGJvZHkubGluZWFyRGFtcGluZyA9IDEuODtcclxuICAgICAgICAgICAgYm9keS5hbmd1bGFyRGFtcGluZyA9IDEuMjtcclxuICAgICAgICAgICAgYm9keS5hbGxvd1NsZWVwID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvUGF0aFggPSBvbkFsbG93ZWQubmVhcmVzdC54IC0gcG9zLng7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvUGF0aFkgPSBvbkFsbG93ZWQubmVhcmVzdC55IC0gcG9zLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhvbGREYW1wID0gdGhpcy5wYXRoUHVsbERhbXBpbmcgKiAoMS41ICsgY3Jvd2QpO1xyXG4gICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICBib2R5LmxpbmVhclZlbG9jaXR5LnggKyB0b1BhdGhYICogdGhpcy5wYXRoUHVsbFN0cmVuZ3RoICogZHQgKiAwLjM1IC0gYm9keS5saW5lYXJWZWxvY2l0eS54ICogaG9sZERhbXAgKiBkdCxcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkueSArIHRvUGF0aFkgKiB0aGlzLnBhdGhQdWxsU3RyZW5ndGggKiBkdCAqIDAuMzUgLSBib2R5LmxpbmVhclZlbG9jaXR5LnkgKiBob2xkRGFtcCAqIGR0XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBNYXRoLnNxcnQodG9QYXRoWCAqIHRvUGF0aFggKyB0b1BhdGhZICogdG9QYXRoWSk7XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAxLjUgJiYgYm9keS5saW5lYXJWZWxvY2l0eS5tYWcoKSA8IDgpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnBpdm90LnNldFBvc2l0aW9uKGNjLnYzKG9uQWxsb3dlZC5uZWFyZXN0LngsIG9uQWxsb3dlZC5uZWFyZXN0LnksIDApKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3luY1Bvc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVuZm9yY2VDaGFybVNsaWRlQm91bmRzKHN0YXRlLCBvbkFsbG93ZWQsIHRhbmdlbnQsIG1heERpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcG9zdFBoeXNpY3NDaGFybVNsaWRlRml4KHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSwgZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBzdGF0ZS5waXZvdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb3JkUGF0aHMuZ2V0KHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFib2R5IHx8ICFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNjLnYyKHN0YXRlLnBpdm90LngsIHN0YXRlLnBpdm90LnkpO1xyXG4gICAgICAgIGNvbnN0IG1heERpc3QgPSB0aGlzLmdldE1heFNsaWRlRGlzdGFuY2Uoc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IG9uQWxsb3dlZCA9IHRoaXMuZ2V0TmVhcmVzdE9uQWxsb3dlZFNsaWRlUGF0aChzdGF0ZSwgcG9zKTtcclxuICAgICAgICBzdGF0ZS5wYXRoRGlzdGFuY2UgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhEaXN0LCBvbkFsbG93ZWQucGF0aERpc3RhbmNlKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSW5BbmNob3JHYXAocG9zKSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuZ2V0U2xpZGVFbnRyeUFuY2hvcihzdGF0ZS5zaWRlKTtcclxuICAgICAgICAgICAgY29uc3QgY2xhbXBQb3MgPSBlbnRyeSB8fCBvbkFsbG93ZWQubmVhcmVzdDtcclxuICAgICAgICAgICAgc3RhdGUucGl2b3Quc2V0UG9zaXRpb24oY2MudjMoY2xhbXBQb3MueCwgY2xhbXBQb3MueSwgMCkpO1xyXG4gICAgICAgICAgICBib2R5LnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvcnJlY3RDaGFybVBpdm90T25QYXRoKHN0YXRlLCBvbkFsbG93ZWQsIGR0KTtcclxuICAgICAgICB0aGlzLmRhbXBDaGFybVBpdm90Q3Jvd2Rpbmcoc3RhdGUsIGR0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERpc3RhbmNlQWxvbmdQYXRoKFxyXG4gICAgICAgIHBvaW50czogY2MuVmVjMltdLFxyXG4gICAgICAgIHN0YXJ0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBkaXI6IG51bWJlcixcclxuICAgICAgICBwb3M6IGNjLlZlYzJcclxuICAgICk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgbmVhcmVzdCA9IHRoaXMuZ2V0TmVhcmVzdE9uUGF0aChwb2ludHMsIHBvcyk7XHJcbiAgICAgICAgbGV0IGRpc3QgPSAwO1xyXG4gICAgICAgIGxldCBpZHggPSBzdGFydEluZGV4O1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG5lYXJlc3QuaW5kZXg7XHJcbiAgICAgICAgbGV0IGd1YXJkID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGlkeCAhPT0gdGFyZ2V0ICYmIGd1YXJkIDwgcG9pbnRzLmxlbmd0aCArIDEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dElkeCA9IHRoaXMud3JhcEluZGV4KGlkeCArIGRpciwgcG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludHNbaWR4XTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHBvaW50c1tuZXh0SWR4XTtcclxuICAgICAgICAgICAgZGlzdCArPSBjYy52MihiLnggLSBhLngsIGIueSAtIGEueSkubWFnKCk7XHJcbiAgICAgICAgICAgIGlkeCA9IG5leHRJZHg7XHJcbiAgICAgICAgICAgIGd1YXJkKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWdBID0gcG9pbnRzW2lkeF07XHJcbiAgICAgICAgZGlzdCArPSBjYy52Mihwb3MueCAtIHNlZ0EueCwgcG9zLnkgLSBzZWdBLnkpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QW5nbGVJbk5vZGVTcGFjZShub2RlOiBjYy5Ob2RlLCByb290OiBjYy5Ob2RlKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgYW5nbGUgPSBub2RlLmFuZ2xlO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudDtcclxuICAgICAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudCAhPT0gcm9vdCkge1xyXG4gICAgICAgICAgICBhbmdsZSArPSBwYXJlbnQuYW5nbGU7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1lYXN1cmVQYXRoRGlzdGFuY2VGcm9tRW50cnkoc2lkZTogQ29yZFNpZGUsIHBvczogY2MuVmVjMiwgcGF0aERpcj86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29yZFBhdGhzLmdldCh0aGlzLmFjdGl2ZUNvcmQpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIXBhdGggfHwgIWFuY2hvcnMpIHJldHVybiAwO1xyXG5cclxuICAgICAgICBjb25zdCBlbnRyeSA9IHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgZW50cnlJbmRleCA9IHRoaXMuZmluZE5lYXJlc3RQYXRoSW5kZXgocGF0aC5wb2ludHMsIGVudHJ5KTtcclxuICAgICAgICBjb25zdCBkaXIgPSBwYXRoRGlyICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBwYXRoRGlyXHJcbiAgICAgICAgICAgIDogdGhpcy5waWNrUGF0aERpcmVjdGlvbihwYXRoLnBvaW50cywgZW50cnlJbmRleCwgc2lkZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlQWxvbmdQYXRoKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBkaXIsIHBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybVBhdGhEaXN0YW5jZShzdGF0ZTogQ29yZENoYXJtU3RhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghc3RhdGUucGl2b3QpIHJldHVybiBzdGF0ZS5wYXRoRGlzdGFuY2U7XHJcbiAgICAgICAgY29uc3QgcG9zID0gY2MudjIoc3RhdGUucGl2b3QueCwgc3RhdGUucGl2b3QueSk7XHJcbiAgICAgICAgY29uc3Qgb25QYXRoID0gdGhpcy5nZXROZWFyZXN0T25BbGxvd2VkU2xpZGVQYXRoKHN0YXRlLCBwb3MpO1xyXG4gICAgICAgIGNvbnN0IG1heERpc3QgPSB0aGlzLmdldE1heFNsaWRlRGlzdGFuY2Uoc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhEaXN0LCBvblBhdGgucGF0aERpc3RhbmNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFybXNPblNpZGUoc2lkZTogQ29yZFNpZGUpOiBDb3JkQ2hhcm1TdGF0ZVtdIHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IENvcmRDaGFybVN0YXRlW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb3JkQ2hhcm1zW2ldLnNpZGUgPT09IHNpZGUpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY29yZENoYXJtc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE9jY3VwaWVkRGlzdGFuY2VzT25TaWRlKHNpZGU6IENvcmRTaWRlKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGNvbnN0IG9uU2lkZSA9IHRoaXMuZ2V0Q2hhcm1zT25TaWRlKHNpZGUpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvblNpZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZGlzdGFuY2VzLnB1c2godGhpcy5nZXREaXN0YW5jZUZyb21BbmNob3Ioc2lkZSwgb25TaWRlW2ldKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXN0YW5jZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREaXN0YW5jZUZyb21BbmNob3Ioc2lkZTogQ29yZFNpZGUsIHN0YXRlOiBDb3JkQ2hhcm1TdGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhcm1QYXRoRGlzdGFuY2Uoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBCw6FuIGvDrW5oIHbDuW5nIG5lbyAoa2hvYW5oIMSR4buPKSDigJQgY2hhcm0gdHJvbmcgdsO5bmcgbsOgeSB0aMOsIGLDqm4gxJHDsyBraMO0bmcgdGjhuqMgdGjDqm0uICovXHJcbiAgICBwcml2YXRlIGdldEFuY2hvckRyb3Bab25lUmFkaXVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cnlEZXRlY3RSYWRpdXMgKiAwLjU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZXF1aXJlZEFuY2hvckdhcChjaGFybTogY2MuTm9kZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMubWluQW5jaG9yRHJvcEdhcCwgdGhpcy5nZXRBbmNob3JEcm9wWm9uZVJhZGl1cygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtU2xvdFNwYWNpbmcoY2hhcm06IGNjLk5vZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldENoYXJtSXRlbUNvbXAoY2hhcm0pO1xyXG4gICAgICAgIGlmIChpdGVtICYmIHR5cGVvZiBpdGVtLnNsb3RTcGFjaW5nID09PSAnbnVtYmVyJyAmJiBpdGVtLnNsb3RTcGFjaW5nID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zbG90U3BhY2luZztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcm1TbG90U3BhY2luZztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2jhu4kgdGjhuqMgxJHGsOG7o2Mga2hpIHbDuW5nIG5lbyDEkeG7pyB0cuG7kW5nIOKAlCBraeG7g20gdHJhIGNoYXJtIG7DoG8gxJFhbmcgY2hp4bq/bSBn4bqnbiBuZW8gxJHDsy4gKi9cclxuICAgIHByaXZhdGUgY2FuRHJvcE9uU2lkZShzaWRlOiBDb3JkU2lkZSwgY2hhcm06IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuY2hvclBvcyA9IHNpZGUgPT09ICdsZWZ0JyA/IGFuY2hvcnMubGVmdCA6IGFuY2hvcnMucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRHYXAgPSB0aGlzLmdldFJlcXVpcmVkQW5jaG9yR2FwKGNoYXJtKTtcclxuICAgICAgICBjb25zdCB6b25lUmFkaXVzID0gdGhpcy5nZXRBbmNob3JEcm9wWm9uZVJhZGl1cygpO1xyXG4gICAgICAgIGxldCBjbG9zZXN0UGF0aERpc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY29yZENoYXJtc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5waXZvdCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBjYy52MihzdGF0ZS5waXZvdC54LCBzdGF0ZS5waXZvdC55KTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdFRvQW5jaG9yID0gY2MudjIocG9zLnggLSBhbmNob3JQb3MueCwgcG9zLnkgLSBhbmNob3JQb3MueSkubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0VG9BbmNob3IgPCB6b25lUmFkaXVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0VG9BbmNob3IgPCB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoRGlzdCA9IHRoaXMubWVhc3VyZVBhdGhEaXN0YW5jZUZyb21FbnRyeShzaWRlLCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGhEaXN0IDwgY2xvc2VzdFBhdGhEaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdFBhdGhEaXN0ID0gcGF0aERpc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjbG9zZXN0UGF0aERpc3QgPj0gcmVxdWlyZWRHYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY3JlZW5Ub1dvcmxkT25NYWluKHNjcmVlblBvczogY2MuVmVjMik6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY29uc3QgbG9jYWwgPSBtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKHNjcmVlblBvcyk7XHJcbiAgICAgICAgcmV0dXJuIG1haW4uY29udmVydFRvV29ybGRTcGFjZUFSKGxvY2FsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvcmRBbmNob3JBdHRlbXB0KHdvcmxkUG9zOiBjYy5WZWMyKTogeyBuZWFyTGVmdDogYm9vbGVhbjsgbmVhclJpZ2h0OiBib29sZWFuIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzIHx8ICF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBsb2NhbCA9IHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbkFuY2hvckdhcChsb2NhbCkpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0TGVmdCA9IGNjLnYyKGxvY2FsLnggLSBhbmNob3JzLmxlZnQueCwgbG9jYWwueSAtIGFuY2hvcnMubGVmdC55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBkaXN0UmlnaHQgPSBjYy52Mihsb2NhbC54IC0gYW5jaG9ycy5yaWdodC54LCBsb2NhbC55IC0gYW5jaG9ycy5yaWdodC55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBuZWFyTGVmdCA9IGRpc3RMZWZ0IDw9IHRoaXMuZW50cnlEZXRlY3RSYWRpdXM7XHJcbiAgICAgICAgY29uc3QgbmVhclJpZ2h0ID0gZGlzdFJpZ2h0IDw9IHRoaXMuZW50cnlEZXRlY3RSYWRpdXM7XHJcbiAgICAgICAgaWYgKCFuZWFyTGVmdCAmJiAhbmVhclJpZ2h0KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbmVhckxlZnQsIG5lYXJSaWdodCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBLaMO0bmcgY8OybiBjaOG7lyB0aOG6oyDhu58gbmVvIHRyw6FpL3Bo4bqjaS4gKi9cclxuICAgIHByaXZhdGUgaXNDb3JkRnVsbEZvckNoYXJtKGNoYXJtOiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmNhbkRyb3BPblNpZGUoJ2xlZnQnLCBjaGFybSkgJiYgIXRoaXMuY2FuRHJvcE9uU2lkZSgncmlnaHQnLCBjaGFybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG91bGRTaG93Q29yZEZ1bGxOb3RpKHNjcmVlblBvczogY2MuVmVjMiwgY2hhcm1Xb3JsZDogY2MuVmVjMiwgY2hhcm06IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB0b3VjaFdvcmxkID0gdGhpcy5zY3JlZW5Ub1dvcmxkT25NYWluKHNjcmVlblBvcyk7XHJcbiAgICAgICAgY29uc3QgYXR0ZW1wdCA9IHRoaXMuZ2V0Q29yZEFuY2hvckF0dGVtcHQoY2hhcm1Xb3JsZClcclxuICAgICAgICAgICAgfHwgdGhpcy5nZXRDb3JkQW5jaG9yQXR0ZW1wdCh0b3VjaFdvcmxkKTtcclxuICAgICAgICBpZiAoIWF0dGVtcHQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3JkRnVsbEZvckNoYXJtKGNoYXJtKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKGF0dGVtcHQubmVhckxlZnQgJiYgIXRoaXMuY2FuRHJvcE9uU2lkZSgnbGVmdCcsIGNoYXJtKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKGF0dGVtcHQubmVhclJpZ2h0ICYmICF0aGlzLmNhbkRyb3BPblNpZGUoJ3JpZ2h0JywgY2hhcm0pKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwaWNrQXZhaWxhYmxlU2lkZShcclxuICAgICAgICBuZWFyTGVmdDogYm9vbGVhbixcclxuICAgICAgICBuZWFyUmlnaHQ6IGJvb2xlYW4sXHJcbiAgICAgICAgZGlzdExlZnQ6IG51bWJlcixcclxuICAgICAgICBkaXN0UmlnaHQ6IG51bWJlcixcclxuICAgICAgICBjaGFybTogY2MuTm9kZSxcclxuICAgICAgICBwcmVmZXJMZWZ0PzogYm9vbGVhblxyXG4gICAgKTogQ29yZFNpZGUgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBjYW5kaWRhdGVzOiB7IHNpZGU6IENvcmRTaWRlOyBkaXN0OiBudW1iZXIgfVtdID0gW107XHJcbiAgICAgICAgaWYgKG5lYXJMZWZ0KSBjYW5kaWRhdGVzLnB1c2goeyBzaWRlOiAnbGVmdCcsIGRpc3Q6IGRpc3RMZWZ0IH0pO1xyXG4gICAgICAgIGlmIChuZWFyUmlnaHQpIGNhbmRpZGF0ZXMucHVzaCh7IHNpZGU6ICdyaWdodCcsIGRpc3Q6IGRpc3RSaWdodCB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY2FuZGlkYXRlcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcmVmZXJMZWZ0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFQcmVmID0gKGEuc2lkZSA9PT0gJ2xlZnQnKSA9PT0gcHJlZmVyTGVmdCA/IDAgOiAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYlByZWYgPSAoYi5zaWRlID09PSAnbGVmdCcpID09PSBwcmVmZXJMZWZ0ID8gMCA6IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoYVByZWYgIT09IGJQcmVmKSByZXR1cm4gYVByZWYgLSBiUHJlZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYS5kaXN0IC0gYi5kaXN0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuRHJvcE9uU2lkZShjYW5kaWRhdGVzW2ldLnNpZGUsIGNoYXJtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXNbaV0uc2lkZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc29sdmVEcm9wQW5jaG9yKHdvcmxkUG9zOiBjYy5WZWMyLCBwcmVmZXJyZWRTaWRlOiBDb3JkU2lkZSwgY2hhcm06IGNjLk5vZGUpOiBEcm9wQW5jaG9yIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZUNvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFhbmNob3JzKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgbG9jYWwgPSB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5BbmNob3JHYXAobG9jYWwpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgbGVmdFBvcyA9IGFuY2hvcnMubGVmdDtcclxuICAgICAgICBjb25zdCByaWdodFBvcyA9IGFuY2hvcnMucmlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3RMZWZ0ID0gY2MudjIobG9jYWwueCAtIGxlZnRQb3MueCwgbG9jYWwueSAtIGxlZnRQb3MueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgZGlzdFJpZ2h0ID0gY2MudjIobG9jYWwueCAtIHJpZ2h0UG9zLngsIGxvY2FsLnkgLSByaWdodFBvcy55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBuZWFyTGVmdCA9IGRpc3RMZWZ0IDw9IHRoaXMuZW50cnlEZXRlY3RSYWRpdXM7XHJcbiAgICAgICAgY29uc3QgbmVhclJpZ2h0ID0gZGlzdFJpZ2h0IDw9IHRoaXMuZW50cnlEZXRlY3RSYWRpdXM7XHJcblxyXG4gICAgICAgIC8vIENo4buJIHRo4bqjIGtoaSBzw6F0IG5lbyB0csOhaS9waOG6o2kg4oCUIGtow7RuZyB0aOG6oyB0cm9uZyBraGUgaOG7nyBnaeG7r2EgMiBuZW8uXHJcbiAgICAgICAgaWYgKCFuZWFyTGVmdCAmJiAhbmVhclJpZ2h0KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgcHJlZmVyTGVmdCA9IGRpc3RMZWZ0IDw9IGRpc3RSaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHByZWZlcnJlZFNpZGUgPT09ICdsZWZ0JyAmJiBuZWFyTGVmdCAmJiB0aGlzLmNhbkRyb3BPblNpZGUoJ2xlZnQnLCBjaGFybSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc2lkZTogJ2xlZnQnLCBjb3JkUG9zOiBsZWZ0UG9zIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVmZXJyZWRTaWRlID09PSAncmlnaHQnICYmIG5lYXJSaWdodCAmJiB0aGlzLmNhbkRyb3BPblNpZGUoJ3JpZ2h0JywgY2hhcm0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHNpZGU6ICdyaWdodCcsIGNvcmRQb3M6IHJpZ2h0UG9zIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzaWRlID0gdGhpcy5waWNrQXZhaWxhYmxlU2lkZShuZWFyTGVmdCwgbmVhclJpZ2h0LCBkaXN0TGVmdCwgZGlzdFJpZ2h0LCBjaGFybSwgcHJlZmVyTGVmdCk7XHJcbiAgICAgICAgaWYgKCFzaWRlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2lkZSxcclxuICAgICAgICAgICAgY29yZFBvczogc2lkZSA9PT0gJ2xlZnQnID8gbGVmdFBvcyA6IHJpZ2h0UG9zLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMb2NhbEJveFNuYXBQb3NlKHNpZGU6IENvcmRTaWRlKTogeyBwb3M6IGNjLlZlYzM7IGFuZ2xlOiBudW1iZXIgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRMb2NhbEJveFNpZGVDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBzaWRlID09PSAnbGVmdCcgPyBjaGlsZHJlbi5sZWZ0IDogY2hpbGRyZW4ucmlnaHQ7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IHRoaXMuZ2V0TWFpbk5vZGUoKTtcclxuICAgICAgICBjb25zdCBsb2NhbCA9IG1haW4uY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBvczogY2MudjMobG9jYWwueCwgbG9jYWwueSwgMCksXHJcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmdldEFuZ2xlSW5Ob2RlU3BhY2UodGFyZ2V0LCBtYWluKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RHJhZ1NuYXBQb3NlKG1haW5Qb3M6IGNjLlZlYzMpOiB7IHBvczogY2MuVmVjMzsgYW5nbGU6IG51bWJlcjsgc2lkZTogQ29yZFNpZGUgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JQb3NpdGlvbnMoKTtcclxuICAgICAgICBpZiAoIWFuY2hvcnMgfHwgIXRoaXMuYWN0aXZlQ29yZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW4gPSB0aGlzLmdldE1haW5Ob2RlKCk7XHJcbiAgICAgICAgY29uc3QgbGVmdE1haW4gPSBtYWluLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvV29ybGRTcGFjZUFSKGFuY2hvcnMubGVmdClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0TWFpbiA9IG1haW4uY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29yZC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoYW5jaG9ycy5yaWdodClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0TGVmdCA9IGNjLnYyKG1haW5Qb3MueCAtIGxlZnRNYWluLngsIG1haW5Qb3MueSAtIGxlZnRNYWluLnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RSaWdodCA9IGNjLnYyKG1haW5Qb3MueCAtIHJpZ2h0TWFpbi54LCBtYWluUG9zLnkgLSByaWdodE1haW4ueSkubWFnKCk7XHJcbiAgICAgICAgY29uc3QgbmVhckxlZnQgPSBkaXN0TGVmdCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IG5lYXJSaWdodCA9IGRpc3RSaWdodCA8PSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG5cclxuICAgICAgICBsZXQgc2lkZTogQ29yZFNpZGUgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IGNoYXJtID0gdGhpcy5kcmFnZ2luZ0NoYXJtO1xyXG4gICAgICAgIGlmICghY2hhcm0pIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBjb3JkTG9jYWwgPSB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgIG1haW4uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKG1haW5Qb3MueCwgbWFpblBvcy55KSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5BbmNob3JHYXAoY29yZExvY2FsKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGlmIChuZWFyTGVmdCB8fCBuZWFyUmlnaHQpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJlZmVyTGVmdCA9IGRpc3RMZWZ0IDw9IGRpc3RSaWdodDtcclxuICAgICAgICAgICAgc2lkZSA9IHRoaXMucGlja0F2YWlsYWJsZVNpZGUobmVhckxlZnQsIG5lYXJSaWdodCwgZGlzdExlZnQsIGRpc3RSaWdodCwgY2hhcm0sIHByZWZlckxlZnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzaWRlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc25hcCA9IHRoaXMuZ2V0TG9jYWxCb3hTbmFwUG9zZShzaWRlKTtcclxuICAgICAgICBpZiAoc25hcCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBwb3M6IHNuYXAucG9zLCBhbmdsZTogc25hcC5hbmdsZSwgc2lkZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExvY2FsQm94U2lkZUNoaWxkcmVuKCk6IHsgbGVmdDogY2MuTm9kZTsgcmlnaHQ6IGNjLk5vZGUgfSB8IG51bGwge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbEJveCB8fCB0aGlzLmxvY2FsQm94LmNoaWxkcmVuQ291bnQgPCAyKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgbGVmdEJ5TmFtZSA9IHRoaXMubG9jYWxCb3guZ2V0Q2hpbGRCeU5hbWUoJ2xlZnQnKTtcclxuICAgICAgICBjb25zdCByaWdodEJ5TmFtZSA9IHRoaXMubG9jYWxCb3guZ2V0Q2hpbGRCeU5hbWUoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgaWYgKGxlZnRCeU5hbWUgJiYgcmlnaHRCeU5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbGVmdDogbGVmdEJ5TmFtZSwgcmlnaHQ6IHJpZ2h0QnlOYW1lIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGlsZEEgPSB0aGlzLmxvY2FsQm94LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkQiA9IHRoaXMubG9jYWxCb3guY2hpbGRyZW5bMV07XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkQS54IDw9IGNoaWxkQi54XHJcbiAgICAgICAgICAgID8geyBsZWZ0OiBjaGlsZEEsIHJpZ2h0OiBjaGlsZEIgfVxyXG4gICAgICAgICAgICA6IHsgbGVmdDogY2hpbGRCLCByaWdodDogY2hpbGRBIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMb2NhbEJveEhhbmdBbmdsZShzaWRlOiBDb3JkU2lkZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldExvY2FsQm94U2lkZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuIDA7XHJcbiAgICAgICAgcmV0dXJuIHNpZGUgPT09ICdsZWZ0JyA/IGNoaWxkcmVuLmxlZnQuYW5nbGUgOiBjaGlsZHJlbi5yaWdodC5hbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExvY2FsQm94QW5jaG9yUG9zaXRpb25zKCk6IHsgbGVmdDogY2MuVmVjMjsgcmlnaHQ6IGNjLlZlYzIgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRMb2NhbEJveFNpZGVDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4gfHwgIXRoaXMuYWN0aXZlQ29yZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc0xlZnQgPSB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgIGNoaWxkcmVuLmxlZnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcG9zUmlnaHQgPSB0aGlzLmFjdGl2ZUNvcmQuY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnJpZ2h0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB7IGxlZnQ6IHBvc0xlZnQsIHJpZ2h0OiBwb3NSaWdodCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBsb2NhbEJveEFuY2hvcnMgPSB0aGlzLmdldExvY2FsQm94QW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKGxvY2FsQm94QW5jaG9ycykgcmV0dXJuIGxvY2FsQm94QW5jaG9ycztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBbmNob3IgfHwgIXRoaXMucmlnaHRBbmNob3IpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNjLnYyKHRoaXMubGVmdEFuY2hvci54LCB0aGlzLmxlZnRBbmNob3IueSksXHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYy52Mih0aGlzLnJpZ2h0QW5jaG9yLngsIHRoaXMucmlnaHRBbmNob3IueSksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogS2hlIGjhu58gZ2nhu69hIDIgbmVvIOKAlCBraMO0bmcgcGjhuqNpIHbDuW5nIHRo4bqjIGNoYXJtLiAqL1xyXG4gICAgcHJpdmF0ZSBpc0luQW5jaG9yR2FwKGxvY2FsOiBjYy5WZWMyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghYW5jaG9ycykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBsZWZ0ID0gYW5jaG9ycy5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBhbmNob3JSZWFjaCA9IHRoaXMuZW50cnlEZXRlY3RSYWRpdXMgKiAwLjQ7XHJcbiAgICAgICAgY29uc3QgZGlzdExlZnQgPSBjYy52Mihsb2NhbC54IC0gbGVmdC54LCBsb2NhbC55IC0gbGVmdC55KS5tYWcoKTtcclxuICAgICAgICBjb25zdCBkaXN0UmlnaHQgPSBjYy52Mihsb2NhbC54IC0gcmlnaHQueCwgbG9jYWwueSAtIHJpZ2h0LnkpLm1hZygpO1xyXG5cclxuICAgICAgICBpZiAoZGlzdExlZnQgPD0gYW5jaG9yUmVhY2ggfHwgZGlzdFJpZ2h0IDw9IGFuY2hvclJlYWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdhcE1pblggPSBNYXRoLm1pbihsZWZ0LngsIHJpZ2h0LngpICsgYW5jaG9yUmVhY2g7XHJcbiAgICAgICAgY29uc3QgZ2FwTWF4WCA9IE1hdGgubWF4KGxlZnQueCwgcmlnaHQueCkgLSBhbmNob3JSZWFjaDtcclxuICAgICAgICBjb25zdCB0b3BZID0gTWF0aC5tYXgobGVmdC55LCByaWdodC55KTtcclxuICAgICAgICBjb25zdCBpblRvcEJhbmQgPSBsb2NhbC55ID49IHRvcFkgLSB0aGlzLmVudHJ5RGV0ZWN0UmFkaXVzO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5Ub3BCYW5kICYmIGxvY2FsLnggPj0gZ2FwTWluWCAmJiBsb2NhbC54IDw9IGdhcE1heFg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREcm9wQW5jaG9yRm9yU2lkZShzaWRlOiBDb3JkU2lkZSwgY2hhcm06IGNjLk5vZGUpOiBEcm9wQW5jaG9yIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblNpZGUoc2lkZSwgY2hhcm0pKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMuZ2V0Q29yZEFuY2hvclBvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICghYW5jaG9ycykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2lkZSxcclxuICAgICAgICAgICAgY29yZFBvczogc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UGxhdGVDaGFybUF0KHNjcmVlblBvczogY2MuVmVjMik6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnBsYXRlLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMucGxhdGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmICghY2hpbGQuYWN0aXZlIHx8ICFjaGlsZC5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGFybU9uQ29yZChjaGlsZCkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NjcmVlblBvc09uQ2hhcm0oY2hpbGQsIHNjcmVlblBvcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUHJlZmFiIGNoYXJtIGfhu5FjIHNpemUgPSAwIOKAlCBwaOG6o2kgaGl0IHRoZW8gaWNvbiAvIGtob+G6o25nIGPDoWNoLiAqL1xyXG4gICAgcHJpdmF0ZSBpc1NjcmVlblBvc09uQ2hhcm0oY2hhcm06IGNjLk5vZGUsIHNjcmVlblBvczogY2MuVmVjMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBjaGFybS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpXHJcbiAgICAgICAgICAgIHx8IChjaGFybS5jaGlsZHJlbkNvdW50ID4gMCA/IGNoYXJtLmNoaWxkcmVuWzBdIDogbnVsbCk7XHJcbiAgICAgICAgaWYgKGljb24pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGljb24uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZCA9IDEyO1xyXG4gICAgICAgICAgICBjb25zdCBoaXQgPSBjYy5yZWN0KFxyXG4gICAgICAgICAgICAgICAgcmVjdC54IC0gcGFkLFxyXG4gICAgICAgICAgICAgICAgcmVjdC55IC0gcGFkLFxyXG4gICAgICAgICAgICAgICAgcmVjdC53aWR0aCArIHBhZCAqIDIsXHJcbiAgICAgICAgICAgICAgICByZWN0LmhlaWdodCArIHBhZCAqIDJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGhpdC5jb250YWlucyhzY3JlZW5Qb3MpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHdvcmxkID0gY2hhcm0uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICBjb25zdCBkeCA9IHdvcmxkLnggLSBzY3JlZW5Qb3MueDtcclxuICAgICAgICBjb25zdCBkeSA9IHdvcmxkLnkgLSBzY3JlZW5Qb3MueTtcclxuICAgICAgICByZXR1cm4gKGR4ICogZHggKyBkeSAqIGR5KSA8PSA5NSAqIDk1O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNDaGFybU9uQ29yZChjaGFybTogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jb3JkQ2hhcm1zW2ldO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuY2hhcm0gPT09IGNoYXJtIHx8IHN0YXRlLnBpdm90ID09PSBjaGFybSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjaGFybS5wYXJlbnQgPT09IHN0YXRlLnBpdm90KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvczogY2MuVmVjMik6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1haW5Ob2RlKCkuY29udmVydFRvTm9kZVNwYWNlQVIoc2NyZWVuUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1haW5Ob2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nIHx8IG5vZGUucGFyZW50Lm5hbWUgPT09ICdDYW52YXMnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnQubmFtZSA9PT0gJ21haW4nID8gbm9kZS5wYXJlbnQgOiBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQ29yZFJvdW5kTGlzdC5wYXJlbnQgfHwgdGhpcy5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGVmYXVsdEJyYWNlbGV0UmVmKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGNvbnN0IGNvcmRJZCA9IGdsb2JhbFRoaXMuaWRTdHJpbmcgfHwgMDtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QnJhY2VsZXRCeUNvcmQubGVuZ3RoID4gY29yZElkICYmIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2NvcmRJZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2NvcmRJZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmFjZWxldFJlZjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJtSXRlbUNvbXAoY2hhcm06IGNjLk5vZGUpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjaGFybS5nZXRDb21wb25lbnQoJ0NoYXJtSXRlbScpO1xyXG4gICAgICAgIGlmIChpdGVtKSByZXR1cm4gaXRlbTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcHMgPSBjaGFybS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjID0gY29tcHNbaV0gYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoYyAmJiB0eXBlb2YgYy50YWcgPT09ICdudW1iZXInICYmIHR5cGVvZiBjLmxvYWRJTUcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5mZXJDb3JkSWRGcm9tUmVmKHJlZjogY2MuTm9kZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgY29yZCA9IHRoaXMuZ2V0UmVmQ29yZE5vZGUocmVmKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gY29yZC5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgY29sb3JJZHM6IHsga2V5OiBzdHJpbmc7IGlkOiBudW1iZXIgfVtdID0gW1xyXG4gICAgICAgICAgICB7IGtleTogJ2JsYWNrJywgaWQ6IDAgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdibHVlJywgaWQ6IDEgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdncmVlbicsIGlkOiAyIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAncGluaycsIGlkOiAzIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAncHVycGxlJywgaWQ6IDQgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICd5ZWxsb3cnLCBpZDogNSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ3doaXRlJywgaWQ6IDYgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihjb2xvcklkc1tpXS5rZXkpID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcklkc1tpXS5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q29yZElkID49IDAgPyB0aGlzLmRlZmF1bHRDb3JkSWQgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZERlZmF1bHRNZXRhKHJlZjogY2MuTm9kZSk6IHsgY29yZElkOiBudW1iZXI7IGtleWNoYWluSW5kZXg6IG51bWJlciB9IHtcclxuICAgICAgICBjb25zdCBtZXRhID0gcmVmICYmIHJlZi5nZXRDb21wb25lbnQoJ0JyYWNlbGV0RGVmYXVsdE1ldGEnKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKG1ldGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcmRJZDogbWV0YS5jb3JkSWQsXHJcbiAgICAgICAgICAgICAgICBrZXljaGFpbkluZGV4OiBtZXRhLmtleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0Q29yZElkID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcmRJZDogdGhpcy5kZWZhdWx0Q29yZElkLFxyXG4gICAgICAgICAgICAgICAga2V5Y2hhaW5JbmRleDogdGhpcy5kZWZhdWx0S2V5Y2hhaW5JbmRleCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvcmRJZDogdGhpcy5pbmZlckNvcmRJZEZyb21SZWYocmVmKSxcclxuICAgICAgICAgICAga2V5Y2hhaW5JbmRleDogdGhpcy5kZWZhdWx0S2V5Y2hhaW5JbmRleCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FjaGVEZWZhdWx0TWV0YU9ubHkoKSB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpO1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLnJlYWREZWZhdWx0TWV0YShyZWYpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdENvcmRJZCA9IG1ldGEuY29yZElkO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXggPSBtZXRhLmtleWNoYWluSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWNoZURlZmF1bHRDb25maWcoYWN0aXZlQ29yZD86IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZkZvckNhY2hlKCk7XHJcbiAgICAgICAgaWYgKCFyZWYpIHtcclxuICAgICAgICAgICAgY2Mud2FybignW0NvcmRSb3VuZEdhbWVdIENoxrBhIGfDoW4gZGVmYXVsdEJyYWNlbGV0UmVmIOKAlCBraMO0bmcgdGjhu4Mgc28gc8OhbmggdsOybmcgbeG6q3UuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdExheW91dCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQgPSB0aGlzLmRlZmF1bHRDb3JkSWQgPj0gMCA/IHRoaXMuZGVmYXVsdENvcmRJZCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXggPSB0aGlzLmRlZmF1bHRLZXljaGFpbkluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb25maWdDYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMucmVhZERlZmF1bHRNZXRhKHJlZik7XHJcbiAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkID0gbWV0YS5jb3JkSWQ7XHJcbiAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0S2V5Y2hhaW5JbmRleCA9IG1ldGEua2V5Y2hhaW5JbmRleDtcclxuICAgICAgICB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQgPSB0aGlzLmJ1aWxkRGVmYXVsdExheW91dEZyb21SZWYocmVmLCBhY3RpdmVDb3JkKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRDb25maWdDYWNoZWQgPSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgY2MubG9nKCdbQ29yZFJvdW5kR2FtZV0gRGVmYXVsdCBjb25maWc6IGNvcmRJZD0nICsgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkXHJcbiAgICAgICAgICAgICsgJyAocGxheWVyPScgKyAoZ2xvYmFsVGhpcy5pZFN0cmluZyB8fCAwKSArICcpJ1xyXG4gICAgICAgICAgICArICcga2V5Y2hhaW49JyArIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXhcclxuICAgICAgICAgICAgKyAnIGNoYXJtcz0nICsgdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0Lmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEx1w7RuIHRy4bqjIHJlZiBt4bqrdSBj4buRIMSR4buLbmgg4oCUIGtow7RuZyBwaOG7pSB0aHXhu5ljIGTDonkgbmfGsOG7nWkgY2jGoWkgxJFhbmcgY2jhu41uLiAqL1xyXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QnJhY2VsZXRSZWYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0UmVmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRCcmFjZWxldEJ5Q29yZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyYWNlbGV0QnlDb3JkW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRDb3JkSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRLZXljaGFpbkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFNjb3JlQnJlYWtkb3duKCk6IE1hdGNoU2NvcmVCcmVha2Rvd24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RTY29yZUJyZWFrZG93bjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlZkNvcmROb2RlKHJlZjogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmIChyZWYuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikpIHJldHVybiByZWY7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWYuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcmVmLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikpIHJldHVybiBjaGlsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlZjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlZkNvcmRBbmNob3JzKHJlZkNvcmQ6IGNjLk5vZGUpOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gcmVmQ29yZC5nZXRDaGlsZEJ5TmFtZSgnbGVmdCcpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gcmVmQ29yZC5nZXRDaGlsZEJ5TmFtZSgncmlnaHQnKTtcclxuICAgICAgICBpZiAoIWxlZnQgfHwgIXJpZ2h0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBjYy52MihsZWZ0LngsIGxlZnQueSksXHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYy52MihyaWdodC54LCByaWdodC55KSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UGF0aERhdGFGb3JDb3JkKGNvcmQ6IGNjLk5vZGUpOiBDb3JkUGF0aERhdGEgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuY29yZFBhdGhzLmdldChjb3JkKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcclxuXHJcbiAgICAgICAgY29uc3QgcmF3UG9pbnRzID0gdGhpcy5nZXRQb2x5Z29uQ29sbGlkZXJQb2ludHMoY29yZCk7XHJcbiAgICAgICAgaWYgKHJhd1BvaW50cy5sZW5ndGggPCAyKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcyA9IHRoaXMuc2FtcGxlQWxvbmdQYXRoKHJhd1BvaW50cywgdGhpcy5wYXRoU2FtcGxlU3BhY2luZyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9pbnRzOiBzYW1wbGVzLFxyXG4gICAgICAgICAgICB0b3RhbExlbmd0aDogdGhpcy5jYWxjUGF0aExlbmd0aChzYW1wbGVzKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29yZEFuY2hvcnMoY29yZDogY2MuTm9kZSk6IHsgbGVmdDogY2MuVmVjMjsgcmlnaHQ6IGNjLlZlYzIgfSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBjb3JkLmdldENoaWxkQnlOYW1lKCdsZWZ0Jyk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBjb3JkLmdldENoaWxkQnlOYW1lKCdyaWdodCcpO1xyXG4gICAgICAgIGlmICghbGVmdCB8fCAhcmlnaHQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNjLnYyKGxlZnQueCwgbGVmdC55KSxcclxuICAgICAgICAgICAgcmlnaHQ6IGNjLnYyKHJpZ2h0LngsIHJpZ2h0LnkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUZW1wbGF0ZUNvcmQoY29yZElkPzogbnVtYmVyKTogY2MuTm9kZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGlkID0gY29yZElkICE9PSB1bmRlZmluZWQgPyBjb3JkSWQgOiB0aGlzLmNhY2hlZERlZmF1bHRDb3JkSWQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLkNvcmRSb3VuZExpc3QgfHwgaWQgPCAwKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5Db3JkUm91bmRMaXN0LmNoaWxkcmVuW2lkXSB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVhc3VyZVBhdGhEaXN0YW5jZU9uQ29yZChcclxuICAgICAgICBjb3JkOiBjYy5Ob2RlLFxyXG4gICAgICAgIHBhdGg6IENvcmRQYXRoRGF0YSxcclxuICAgICAgICBhbmNob3JzOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH0sXHJcbiAgICAgICAgc2lkZTogQ29yZFNpZGUsXHJcbiAgICAgICAgcG9zOiBjYy5WZWMyXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXIgPSB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzaWRlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXN0YW5jZUFsb25nUGF0aChwYXRoLnBvaW50cywgZW50cnlJbmRleCwgcGF0aERpciwgcG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkRGVmYXVsdExheW91dCgpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZ2V0RGVmYXVsdEJyYWNlbGV0UmVmRm9yQ2FjaGUoKSB8fCB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZigpO1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGREZWZhdWx0TGF5b3V0RnJvbVJlZihyZWYsIHRoaXMuYWN0aXZlQ29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZERlZmF1bHRMYXlvdXRGcm9tUmVmKHJlZjogY2MuTm9kZSwgYWN0aXZlQ29yZD86IGNjLk5vZGUpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGlmICghcmVmKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZkNvcmQgPSB0aGlzLmdldFJlZkNvcmROb2RlKHJlZik7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGVDb3JkID0gYWN0aXZlQ29yZCB8fCB0aGlzLmdldFRlbXBsYXRlQ29yZCgpO1xyXG4gICAgICAgIGlmICghdGVtcGxhdGVDb3JkKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBLaMO0bmcgdMOsbSB0aOG6pXkgZMOieSBnYW1lIMSR4buDIMSR4buNYyBsYXlvdXQgbeG6q3UuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGhEYXRhRm9yQ29yZCh0ZW1wbGF0ZUNvcmQpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvcnMgPSB0aGlzLmdldENvcmRBbmNob3JzKHRlbXBsYXRlQ29yZCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oJ1tDb3JkUm91bmRHYW1lXSBEw6J5IGdhbWUgdGhp4bq/dSBQb2x5Z29uQ29sbGlkZXIgaG/hurdjIGFuY2hvciBsZWZ0L3JpZ2h0LicpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGFybVJvb3QgPSByZWYuZ2V0Q2hpbGRCeU5hbWUoJ2NoYXJtJykgfHwgcmVmO1xyXG4gICAgICAgIGNvbnN0IHNsb3RzOiBDaGFybVNsb3REYXRhW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFybVJvb3QuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJtID0gY2hhcm1Sb290LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRDaGFybUl0ZW1Db21wKGNoYXJtKTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc09uQ29yZCA9IHJlZkNvcmQuY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgICAgICBjaGFybS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGUgPSB0aGlzLnJlc29sdmVTaWRlRm9yUG9zaXRpb24ocG9zT25Db3JkLCBhbmNob3JzKTtcclxuICAgICAgICAgICAgY29uc3QgcGF0aERpc3RhbmNlID0gdGhpcy5tZWFzdXJlUGF0aERpc3RhbmNlT25Db3JkKFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVDb3JkLFxyXG4gICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgIGFuY2hvcnMsXHJcbiAgICAgICAgICAgICAgICBzaWRlLFxyXG4gICAgICAgICAgICAgICAgcG9zT25Db3JkXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBzbG90cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRhZzogaXRlbS50YWcsXHJcbiAgICAgICAgICAgICAgICBjb2xvckluZGV4OiBpdGVtLmNvbG9ySW5kZXggfHwgMCxcclxuICAgICAgICAgICAgICAgIHNpZGUsXHJcbiAgICAgICAgICAgICAgICBwYXRoRGlzdGFuY2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xvdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlU2lkZUZvclBvc2l0aW9uKFxyXG4gICAgICAgIGNvcmRMb2NhbDogY2MuVmVjMixcclxuICAgICAgICBhbmNob3JzOiB7IGxlZnQ6IGNjLlZlYzI7IHJpZ2h0OiBjYy5WZWMyIH1cclxuICAgICk6IENvcmRTaWRlIHtcclxuICAgICAgICBjb25zdCBkaXN0TGVmdCA9IGNjLnYyKGNvcmRMb2NhbC54IC0gYW5jaG9ycy5sZWZ0LngsIGNvcmRMb2NhbC55IC0gYW5jaG9ycy5sZWZ0LnkpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RSaWdodCA9IGNjLnYyKGNvcmRMb2NhbC54IC0gYW5jaG9ycy5yaWdodC54LCBjb3JkTG9jYWwueSAtIGFuY2hvcnMucmlnaHQueSkubWFnKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RMZWZ0IDw9IGRpc3RSaWdodCA/ICdsZWZ0JyA6ICdyaWdodCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFBsYXllckxheW91dCgpOiBDaGFybVNsb3REYXRhW10ge1xyXG4gICAgICAgIGNvbnN0IHNsb3RzOiBDaGFybVNsb3REYXRhW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29yZENoYXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY29yZENoYXJtc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLmNoYXJtLmdldENvbXBvbmVudCgnQ2hhcm1JdGVtJykgYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgc2xvdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0YWc6IGl0ZW0udGFnLFxyXG4gICAgICAgICAgICAgICAgY29sb3JJbmRleDogaXRlbS5jb2xvckluZGV4IHx8IDAsXHJcbiAgICAgICAgICAgICAgICBzaWRlOiBzdGF0ZS5zaWRlLFxyXG4gICAgICAgICAgICAgICAgcGF0aERpc3RhbmNlOiB0aGlzLmdldENoYXJtUGF0aERpc3RhbmNlKHN0YXRlKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbG90cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNsb3RQb3NlKHNsb3Q6IENoYXJtU2xvdERhdGEpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBhbmdsZTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvcmRQYXRocy5nZXQodGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5nZXRDb3JkQW5jaG9yUG9zaXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFwYXRoIHx8ICFhbmNob3JzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAsIGFuZ2xlOiAwIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbnRyeSA9IHNsb3Quc2lkZSA9PT0gJ2xlZnQnID8gYW5jaG9ycy5sZWZ0IDogYW5jaG9ycy5yaWdodDtcclxuICAgICAgICBjb25zdCBlbnRyeUluZGV4ID0gdGhpcy5maW5kTmVhcmVzdFBhdGhJbmRleChwYXRoLnBvaW50cywgZW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhEaXIgPSB0aGlzLnBpY2tQYXRoRGlyZWN0aW9uKHBhdGgucG9pbnRzLCBlbnRyeUluZGV4LCBzbG90LnNpZGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2VPblBhdGgocGF0aC5wb2ludHMsIGVudHJ5SW5kZXgsIHBhdGhEaXIsIHNsb3QucGF0aERpc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCkge1xyXG4gICAgICAgIHRoaXMuaGlkZURlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVkRGVmYXVsdExheW91dC5sZW5ndGggfHwgIXRoaXMuY2hhcm1MYXllcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERlZmF1bHRCcmFjZWxldFJlZigpO1xyXG4gICAgICAgIGNvbnN0IGNoYXJtUm9vdCA9IHJlZiAmJiAocmVmLmdldENoaWxkQnlOYW1lKCdjaGFybScpIHx8IHJlZik7XHJcbiAgICAgICAgaWYgKCFjaGFybVJvb3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlldyA9IG5ldyBjYy5Ob2RlKCdkZWZhdWx0QnJhY2VsZXRQcmV2aWV3Jyk7XHJcbiAgICAgICAgcHJldmlldy5wYXJlbnQgPSB0aGlzLmNoYXJtTGF5ZXI7XHJcbiAgICAgICAgcHJldmlldy5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcblxyXG4gICAgICAgIGxldCBzcmNJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFybVJvb3QuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNoYXJtUm9vdC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKCFzcmMuZ2V0Q29tcG9uZW50KCdDaGFybUl0ZW0nKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChzcmNJbmRleCA+PSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXQubGVuZ3RoKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmNhY2hlZERlZmF1bHRMYXlvdXRbc3JjSW5kZXhdO1xyXG4gICAgICAgICAgICBzcmNJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBjYy5pbnN0YW50aWF0ZShzcmMpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NlID0gdGhpcy5nZXRTbG90UG9zZShzbG90KTtcclxuICAgICAgICAgICAgY2xvbmUucGFyZW50ID0gcHJldmlldztcclxuICAgICAgICAgICAgY2xvbmUuc2V0UG9zaXRpb24oY2MudjMocG9zZS54LCBwb3NlLnksIDApKTtcclxuICAgICAgICAgICAgY2xvbmUuYW5nbGUgPSBwb3NlLmFuZ2xlO1xyXG4gICAgICAgICAgICBjbG9uZS5vcGFjaXR5ID0gMTUwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGNsb25lLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkgYm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpZGVycyA9IGNsb25lLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc0NvbGxpZGVyKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xsaWRlcnMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyc1tjXS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdOb2RlID0gcHJldmlldztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRQcmV2aWV3Tm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Tm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdOb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFNvIHPDoW5oIGNoYXJtICgw4oCTMTAwJSwgY2jGsGEgZ+G7k20gZMOieSB2w6Aga2V5Y2hhaW4pLiAqL1xyXG4gICAgY29tcGFyZUNoYXJtc09ubHkoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHRoaXMuY2FjaGVkRGVmYXVsdExheW91dC5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgID8gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0XHJcbiAgICAgICAgICAgIDogdGhpcy5idWlsZERlZmF1bHRMYXlvdXQoKTtcclxuXHJcbiAgICAgICAgaWYgKGV4cGVjdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHRoaXMuYnVpbGRQbGF5ZXJMYXlvdXQoKTtcclxuICAgICAgICByZXR1cm4gY2FsY0NoYXJtTWF0Y2hQZXJjZW50KGV4cGVjdGVkLCBhY3R1YWwsIHRoaXMubWF0Y2hQb3NpdGlvblRvbGVyYW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTbyBzw6FuaCDEkeG6p3kgxJHhu6c6IGTDonkgKDMwJSkgKyBjaGFybSAoNTAlKSArIGtleWNoYWluICgyMCUpLlxyXG4gICAgICogR+G7jWkga2hpIMSRw6MgY8OzIGzhu7FhIGNo4buNbiBrZXljaGFpbiBj4bunYSBuZ8aw4budaSBjaMahaS5cclxuICAgICAqL1xyXG4gICAgY29tcGFyZUZ1bGwocGxheWVyS2V5Y2hhaW5JbmRleDogbnVtYmVyKTogTWF0Y2hTY29yZUJyZWFrZG93biB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXREZWZhdWx0QnJhY2VsZXRSZWZGb3JDYWNoZSgpO1xyXG4gICAgICAgIGlmIChyZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0ID0gdGhpcy5idWlsZERlZmF1bHRMYXlvdXRGcm9tUmVmKHJlZiwgdGhpcy5hY3RpdmVDb3JkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gdGhpcy5jYWNoZWREZWZhdWx0TGF5b3V0O1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IHRoaXMuYnVpbGRQbGF5ZXJMYXlvdXQoKTtcclxuICAgICAgICBjb25zdCBhY3R1YWxDb3JkSWQgPSBnbG9iYWxUaGlzLmlkU3RyaW5nIHx8IDA7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duID0gY2FsY0Z1bGxTY29yZShcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkLFxyXG4gICAgICAgICAgICBhY3R1YWxDb3JkSWQsXHJcbiAgICAgICAgICAgIGV4cGVjdGVkLFxyXG4gICAgICAgICAgICBhY3R1YWwsXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRGVmYXVsdEtleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIHBsYXllcktleWNoYWluSW5kZXgsXHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hQb3NpdGlvblRvbGVyYW5jZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sYXN0TWF0Y2hQZXJjZW50ID0gdGhpcy5sYXN0U2NvcmVCcmVha2Rvd24udG90YWw7XHJcblxyXG4gICAgICAgIGNjLmxvZygnW0NvcmRSb3VuZEdhbWVdIENvbXBhcmU6IGV4cGVjdGVkQ29yZD0nICsgdGhpcy5jYWNoZWREZWZhdWx0Q29yZElkXHJcbiAgICAgICAgICAgICsgJyBwbGF5ZXJDb3JkPScgKyBhY3R1YWxDb3JkSWRcclxuICAgICAgICAgICAgKyAnIGV4cGVjdGVkQ2hhcm1zPScgKyBleHBlY3RlZC5sZW5ndGhcclxuICAgICAgICAgICAgKyAnIHBsYXllckNoYXJtcz0nICsgYWN0dWFsLmxlbmd0aFxyXG4gICAgICAgICAgICArICcga2V5Y2hhaW49JyArIHBsYXllcktleWNoYWluSW5kZXhcclxuICAgICAgICAgICAgKyAnID0+ICcgKyB0aGlzLmxhc3RNYXRjaFBlcmNlbnQgKyAnJSdcclxuICAgICAgICAgICAgKyAnIChkw6J5ICcgKyB0aGlzLmxhc3RTY29yZUJyZWFrZG93bi5jb3JkU2NvcmVcclxuICAgICAgICAgICAgKyAnIGNoYXJtICcgKyB0aGlzLmxhc3RTY29yZUJyZWFrZG93bi5jaGFybVNjb3JlXHJcbiAgICAgICAgICAgICsgJyBrZXkgJyArIHRoaXMubGFzdFNjb3JlQnJlYWtkb3duLmtleWNoYWluU2NvcmUgKyAnKScpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0U2NvcmVCcmVha2Rvd247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBkZXByZWNhdGVkIGTDuW5nIGNvbXBhcmVGdWxsICovXHJcbiAgICBjb21wYXJlV2l0aERlZmF1bHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlQ2hhcm1zT25seSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RNYXRjaFBlcmNlbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0TWF0Y2hQZXJjZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNYXRjaFJlc3VsdChwZXJjZW50PzogbnVtYmVyLCBicmVha2Rvd24/OiBNYXRjaFNjb3JlQnJlYWtkb3duKSB7XHJcbiAgICAgICAgY29uc3QgYmQgPSBicmVha2Rvd24gfHwgdGhpcy5sYXN0U2NvcmVCcmVha2Rvd247XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwZXJjZW50ICE9PSB1bmRlZmluZWQgPyBwZXJjZW50IDogdGhpcy5sYXN0TWF0Y2hQZXJjZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXRjaFJlc3VsdExhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hSZXN1bHRMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hSZXN1bHRMYWJlbC5zdHJpbmcgPSB2YWx1ZSArICclJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiZCkge1xyXG4gICAgICAgICAgICBjYy5sb2coJ1tDb3JkUm91bmRHYW1lXSBTY29yZTogJyArIHZhbHVlICsgJyUnXHJcbiAgICAgICAgICAgICAgICArICcgfCBjb3JkPScgKyBiZC5jb3JkU2NvcmVcclxuICAgICAgICAgICAgICAgICsgJyBjaGFybT0nICsgYmQuY2hhcm1TY29yZVxyXG4gICAgICAgICAgICAgICAgKyAnIGtleWNoYWluPScgKyBiZC5rZXljaGFpblNjb3JlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coJ1tDb3JkUm91bmRHYW1lXSBNYXRjaDogJyArIHZhbHVlICsgJyUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEfhu41pIGtoaSB4b25nIHjhur9wIGNoYXJtIOKAlCBjaOG7iSDhuqluIHByZXZpZXcsIGNoxrBhIHTDrW5oICUgY3Xhu5FpLiAqL1xyXG4gICAgZmluaXNoQnJhY2VsZXRQaGFzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpZGVEZWZhdWx0QnJhY2VsZXRQcmV2aWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEfhu41pIGtoaSBr4bq/dCB0aMO6YyBnYW1lIOKAlCB0w61uaCAlIMSR4bqneSDEkeG7pyB2w6AgaGnhu4NuIHRo4buLLiAqL1xyXG4gICAgZmluaXNoQW5kQ29tcGFyZShwbGF5ZXJLZXljaGFpbkluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuaGlkZURlZmF1bHRCcmFjZWxldFByZXZpZXcoKTtcclxuICAgICAgICBjb25zdCBicmVha2Rvd24gPSB0aGlzLmNvbXBhcmVGdWxsKHBsYXllcktleWNoYWluSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2hvd01hdGNoUmVzdWx0KGJyZWFrZG93bi50b3RhbCwgYnJlYWtkb3duKTtcclxuICAgICAgICByZXR1cm4gYnJlYWtkb3duLnRvdGFsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcm1TbGlkZSh0aGlzLmNvcmRDaGFybXNbaV0sIGR0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGF0ZVVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3JkQ2hhcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdFBoeXNpY3NDaGFybVNsaWRlRml4KHRoaXMuY29yZENoYXJtc1tpXSwgZHQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN0cmFpbkNoYXJtSGFuZyh0aGlzLmNvcmRDaGFybXNbaV0sIGR0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19