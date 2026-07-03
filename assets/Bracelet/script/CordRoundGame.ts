import { calcCharmMatchPercent, calcFullScore, CharmSlotData, MatchScoreBreakdown } from './BraceletMatcher';

const { ccclass, property } = cc._decorator;

type CordSide = 'left' | 'right';

interface CordPathData {
    points: cc.Vec2[];
    totalLength: number;
}

interface CordCharmState {
    pivot: cc.Node;
    charm: cc.Node;
    settled: boolean;
    stillTime: number;
    side: CordSide;
    pathStartIndex: number;
    pathDir: number;
    pathDistance: number;
}

interface DropAnchor {
    side: CordSide;
    cordPos: cc.Vec2;
}

@ccclass
export default class CordRoundGame extends cc.Component {

    @property(cc.Node)
    CordRoundList: cc.Node = null;

    @property(cc.Node)
    plate: cc.Node = null;
    @property(cc.Node)
    charmHind: cc.Node = null

    @property
    entryDetectRadius: number = 110;

    @property
    pathSampleSpacing: number = 12;

    @property
    segmentRadius: number = 14;

    @property
    slideGravity: number = 150;

    @property
    maxSlideSpeed: number = 130;

    /** Vận tốc ban đầu khi vừa thả charm lên dây. */
    @property
    dropSlideSpeed: number = 35;

    @property
    pathPullStrength: number = 420;

    @property
    pathPullDamping: number = 16;

    @property
    settleSpeed: number = 22;

    @property
    pivotColliderRadius: number = 8;

    @property
    charmSlotSpacing: number = 130;

    /** Khoảng trống tối thiểu gần neo để cho phép thả charm. */
    @property
    minAnchorDropGap: number = 60;

    @property
    hangSwingLimit: number = 32;

    @property
    hangOutwardStiffness: number = 14;

    /** Hãm tốc khi charm chen nhau (càng cao càng ít nẩy). */
    @property
    charmCrowdDampingStrength: number = 16;

    /** Phần vận tốc còn lại khi rất đông (0.05 = gần như không đẩy nhau). */
    @property
    charmCrowdPushRetention: number = 0.06;

    /** Số charm sát nhau (kể cả bản thân) để triệt tiêu lực trượt/va chạm. */
    @property
    charmCrowdFullCancelCount: number = 6;

    private activeCord: cc.Node = null;
    private cordPaths: Map<cc.Node, CordPathData> = new Map();
    private preparedCords: cc.Node[] = [];
    private leftAnchor: cc.Node = null;
    private rightAnchor: cc.Node = null;
    private charmLayer: cc.Node = null;
    private cordCharms: CordCharmState[] = [];
    private draggingCharm: cc.Node = null;
    private dragSnapSide: CordSide = null;
    private dragOriginParent: cc.Node = null;
    private dragOriginPos: cc.Vec3 = null;
    private dragOriginSiblingIndex: number = 0;
    private activeTouchId: number = -1;
    private isActive: boolean = false;
    private touchBound: boolean = false;
    @property(cc.AudioClip)
    soundDrop: cc.AudioClip = null
    @property(cc.Node)
    btnOk: cc.Node = null;
    @property(cc.Node)
    hand3: cc.Node = null;
    @property(cc.Node)
    notiFull: cc.Node = null;

    /** Node tham chiếu vòng mẫu (vd: defaultCharm trong scene). */
    @property(cc.Node)
    defaultBraceletRef: cc.Node = null;

    /** Vòng mẫu theo từng loại dây (index = idString). Ưu tiên hơn defaultBraceletRef. */
    @property([cc.Node])
    defaultBraceletByCord: cc.Node[] = [];

    @property(cc.Label)
    matchResultLabel: cc.Label = null;

    @property
    matchPositionTolerance: number = 80;

    @property
    showDefaultPreview: boolean = true;

    /** Dây mẫu đúng (vd: 2 = green). Đúng màu dây được +30%. -1 = đoán từ tên cord (không tin cậy). */
    @property
    defaultCordId: number = 2;

    /** Keychain đúng (fallback khi chưa gắn BraceletDefaultMeta). */
    @property
    defaultKeychainIndex: number = 0;

    localBox = null
    private cachedDefaultLayout: CharmSlotData[] = [];
    private cachedDefaultCordId: number = 0;
    private cachedDefaultKeychainIndex: number = 0;
    private defaultConfigCached: boolean = false;
    private defaultPreviewNode: cc.Node = null;
    private lastMatchPercent: number = 0;
    private lastScoreBreakdown: MatchScoreBreakdown = null;
    isDelay=false
    showNotiFull() {
        if (this.isDelay || !this.notiFull) return;
        this.isDelay = true;
        this.scheduleOnce(() => {
            this.isDelay = false;
        }, 1)
        this.notiFull.active = true;
        const anim = this.notiFull.getComponent(cc.Animation);
        if (anim) anim.play();
    }
    liftBracelet(targetPos: cc.Vec3, duration: number = 0.4) {
        if (!this.CordRoundList) return;

        this.isActive = false;

        const bodies: cc.RigidBody[] = [];
        const collectBodies = (node: cc.Node) => {
            const body = node.getComponent(cc.RigidBody);
            if (body) {
                bodies.push(body);
            }
            for (let i = 0; i < node.childrenCount; i++) {
                collectBodies(node.children[i]);
            }
        };
        collectBodies(this.node);

        for (let i = 0; i < bodies.length; i++) {
            const body = bodies[i];
            body.linearVelocity = cc.v2(0, 0);
            body.angularVelocity = 0;
            body.type = cc.RigidBodyType.Kinematic;
            body.awake = true;
        }

        const syncBodies = () => {
            for (let i = 0; i < bodies.length; i++) {
                bodies[i].syncPosition(true);
                bodies[i].syncRotation(true);
            }
        };

        cc.tween(this.node)
            .to(duration, { position: targetPos }, { onUpdate: syncBodies })
            .call(() => {
                syncBodies();
            })
            .start();
    }
    isTargetHind = null

    setHind(charm) {
        let tag = charm.getComponent("CharmItem").tag


        if (this.isTargetHind) {
            this.isTargetHind.active = false;
        }
        this.charmHind.children[tag].active = true;
        this.isTargetHind = this.charmHind.children[tag];
        let colorIMG = charm.getComponent("CharmItem").getColor();
        this.charmHind.children[tag].children[0].getComponent(cc.Sprite).spriteFrame = colorIMG;
        this.charmHind.children[tag].children[1].getComponent(cc.Sprite).spriteFrame = colorIMG;
        this.localBox = this.charmHind.children[tag];
    }
    startBraceletMode() {
        if (!this.CordRoundList) return;
        this.resolveReferences();

        this.isActive = true;
        this.activeCord = this.CordRoundList.children[globalThis.idString];
        if (!this.activeCord) return;

        this.leftAnchor = this.activeCord.getChildByName('left');
        this.rightAnchor = this.activeCord.getChildByName('right');
        if (!this.leftAnchor || !this.rightAnchor) {
            cc.warn('[CordRoundGame] Cord is missing left/right anchor nodes.');
            return;
        }

        cc.director.getPhysicsManager().gravity = cc.v2(0, -520);
        for (let i = 0; i < this.CordRoundList.childrenCount; i++) {
            this.prepareCord(this.CordRoundList.children[i]);
        }
        this.ensureCharmLayer();
        this.cacheDefaultConfig(this.activeCord);
        if (this.showDefaultPreview) {
            this.showDefaultBraceletPreview();
        }
        this.bindTouch();
    }

    onLoad() {
        // Chỉ đọc meta sớm; layout charm sẽ build lại khi vào game với activeCord.
        this.cacheDefaultMetaOnly();
    }

    private prepareCord(cord: cc.Node) {
        if (this.preparedCords.indexOf(cord) >= 0) return;

        const rawPoints = this.getPolygonColliderPoints(cord);
        if (rawPoints.length < 2) {
            cc.warn('[CordRoundGame] Cord "' + cord.name + '" needs cc.PolygonCollider.');
            return;
        }

        const samples = this.sampleAlongPath(rawPoints, this.pathSampleSpacing);
        this.cordPaths.set(cord, {
            points: samples,
            totalLength: this.calcPathLength(samples),
        });

        this.setupCordPhysics(cord, samples);
        this.preparedCords.push(cord);
    }

    private getPolygonColliderPoints(cord: cc.Node): cc.Vec2[] {
        const poly = cord.getComponent(cc.PolygonCollider);
        if (!poly || !poly.points || poly.points.length < 2) return [];

        const offset = poly.offset || cc.v2(0, 0);
        return poly.points.map(p => cc.v2(p.x + offset.x, p.y + offset.y));
    }

    private setupCordPhysics(cord: cc.Node, samples: cc.Vec2[]) {
        let body = cord.getComponent(cc.RigidBody);
        if (!body) {
            body = cord.addComponent(cc.RigidBody);
        }
        body.type = cc.RigidBodyType.Static;
        body.awake = true;
        body.active = true;

        this.clearSegmentColliders(cord);

        const spacing = Math.max(this.pathSampleSpacing * 1.5, 16);
        const colliderPoints = samples.length > 80
            ? this.sampleAlongPath(samples, spacing)
            : samples;

        for (let i = 0; i < colliderPoints.length; i++) {
            const col = cord.addComponent(cc.PhysicsCircleCollider);
            col.offset = colliderPoints[i];
            col.radius = this.segmentRadius;
            col.friction = 0.35;
            col.restitution = 0.05;
        }
    }

    private sampleAlongPath(points: cc.Vec2[], spacing: number): cc.Vec2[] {
        const samples: cc.Vec2[] = [];
        let carry = 0;

        for (let i = 0; i < points.length; i++) {
            const a = points[i];
            const b = points[(i + 1) % points.length];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const segLen = Math.sqrt(dx * dx + dy * dy);
            if (segLen <= 0) continue;

            const dirX = dx / segLen;
            const dirY = dy / segLen;
            let dist = carry;

            while (dist < segLen) {
                samples.push(cc.v2(a.x + dirX * dist, a.y + dirY * dist));
                dist += spacing;
            }
            carry = dist - segLen;
        }

        return samples.length > 0 ? samples : points.slice();
    }

    private calcPathLength(points: cc.Vec2[]): number {
        let len = 0;
        for (let i = 0; i < points.length; i++) {
            const a = points[i];
            const b = points[(i + 1) % points.length];
            len += cc.v2(b.x - a.x, b.y - a.y).mag();
        }
        return len;
    }

    private clearSegmentColliders(cord: cc.Node) {
        const circles = cord.getComponents(cc.PhysicsCircleCollider);
        for (let i = 0; i < circles.length; i++) {
            circles[i].destroy();
        }
    }

    private ensureCharmLayer() {
        let layer = this.activeCord.getChildByName('charmsOnCord');
        if (!layer) {
            layer = new cc.Node('charmsOnCord');
            layer.parent = this.activeCord;
        }
        this.charmLayer = layer;
    }

    private resolveReferences() {
        if (!this.plate) {
            const main = this.getMainNode();
            const khay = main.getChildByName('khay');
            if (khay) {
                this.plate = khay;
            }
        }
    }

    private bindTouch() {
        if (this.touchBound) return;
        this.touchBound = true;

        const touchNode = cc.Canvas.instance.node;
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    private onTouchStart(event: cc.Event.EventTouch) {
        if (!this.isActive || this.draggingCharm) return;

        const charm = this.getPlateCharmAt(event.getLocation());
        if (!charm) return;

        this.activeTouchId = event.getID();
        this.startDrag(charm, event.getLocation());
        this.setHind(charm)
    }

    private onTouchMove(event: cc.Event.EventTouch) {
        if (!this.isActive || event.getID() !== this.activeTouchId || !this.draggingCharm) return;

        const touchPos = this.getMainLocalPos(event.getLocation());
        const snap = this.getDragSnapPose(touchPos);
        // if (snap) {
        //     this.draggingCharm.setPosition(snap.pos);
        //     this.draggingCharm.angle = snap.angle;
        //     this.dragSnapSide = snap.side;
        // } else {
            this.draggingCharm.setPosition(touchPos);
            this.draggingCharm.angle = 0;
            this.dragSnapSide = null;
        // }
    }

    private onTouchEnd(event: cc.Event.EventTouch) {
        if (!this.isActive || event.getID() !== this.activeTouchId || !this.draggingCharm) return;

        const charm = this.draggingCharm;
        const charmWorld = charm.parent.convertToWorldSpaceAR(charm.position);
        const dropAnchor = this.resolveDropAnchor(charmWorld, this.dragSnapSide, charm);
        if (dropAnchor && this.threadCharmOntoCord(charm, dropAnchor)) {
            cc.audioEngine.play(this.soundDrop, false, 1)
            this.hideDefaultBraceletPreview();
            this.btnOk.active = true;
            this.hand3.active = false;
        } else {
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
            this.isTargetHind = null
        }
    }

    private setCharmPlatePhysics(charm: cc.Node, enabled: boolean) {
        const body = charm.getComponent(cc.RigidBody);
        if (body) {
            body.linearVelocity = cc.v2(0, 0);
            body.angularVelocity = 0;
            if (enabled) {
                body.enabled = true;
                body.active = true;
                body.type = cc.RigidBodyType.Dynamic;
                body.gravityScale = 0;
                body.awake = true;
            } else {
                body.enabled = false;
                body.active = false;
            }
        }

        const collider = charm.getComponent(cc.PhysicsPolygonCollider);
        if (collider) {
            collider.enabled = enabled;
        }
    }

    private startDrag(charm: cc.Node, screenPos: cc.Vec2) {
        this.draggingCharm = charm;
        this.dragOriginParent = charm.parent;
        this.dragOriginPos = charm.position.clone();
        this.dragOriginSiblingIndex = charm.getSiblingIndex();

        this.setCharmPlatePhysics(charm, false);

        const worldPos = charm.parent.convertToWorldSpaceAR(charm.position);
        const main = this.getMainNode();
        charm.parent = main;
        charm.setPosition(main.convertToNodeSpaceAR(worldPos));
        charm.setSiblingIndex(main.childrenCount - 1);
        charm.setPosition(this.getMainLocalPos(screenPos));
    }

    private resetDraggedCharm(charm: cc.Node) {
        charm.parent = this.dragOriginParent;
        charm.setPosition(this.dragOriginPos);
        charm.setSiblingIndex(this.dragOriginSiblingIndex);

        this.setCharmPlatePhysics(charm, true);
    }

    private threadCharmOntoCord(charm: cc.Node, dropAnchor: DropAnchor): boolean {
        if (!this.canDropOnSide(dropAnchor.side, charm)) return false;

        const path = this.cordPaths.get(this.activeCord);
        if (!path) return false;

        const anchorPos = dropAnchor.cordPos;
        const startIndex = this.findNearestPathIndex(path.points, anchorPos);
        const pathDir = this.pickPathDirection(path.points, startIndex, dropAnchor.side);

        const pivot = this.setupCharmHangRig(charm);
        pivot.parent = this.charmLayer;
        pivot.setPosition(cc.v3(anchorPos.x, anchorPos.y, 0));
        const hangLocal = this.getHangLocalOffset(charm);
        const outward = this.getOutwardFromCenter(cc.v2(anchorPos.x, anchorPos.y));
        charm.angle = this.angleForOutwardHang(outward, hangLocal);
        charm.children[0].scale = 0.8;

        const pivotBody = pivot.getComponent(cc.RigidBody);
        const charmBody = charm.getComponent(cc.RigidBody);
        if (pivotBody) {
            pivotBody.syncPosition(true);
            pivotBody.linearVelocity = cc.v2(0, 0);
            pivotBody.angularVelocity = 0;
            pivotBody.gravityScale = 1;
            pivotBody.allowSleep = false;
            pivotBody.awake = true;
            pivotBody.active = true;

            const tangent = this.getTangentAtIndex(path.points, startIndex, pathDir);
            pivotBody.linearVelocity = tangent.mul(this.dropSlideSpeed);
        }
        if (charmBody) {
            charmBody.syncPosition(true);
            charmBody.syncRotation(true);
            charmBody.linearVelocity = cc.v2(0, 0);
            charmBody.angularVelocity = 0;
        }

        this.cordCharms.push({
            pivot,
            charm,
            settled: false,
            stillTime: 0,
            side: dropAnchor.side,
            pathStartIndex: startIndex,
            pathDir,
            pathDistance: 0,
        });
        return true;
    }

    /** Tạo pivot (điểm neo trên dây) + RevoluteJoint; phần dưới charm lung lay theo physics. */
    private setupCharmHangRig(charm: cc.Node): cc.Node {
        if (charm.parent && charm.parent.name === 'charmPivot') {
            return charm.parent;
        }

        const hangLocal = this.getHangLocalOffset(charm);
        const layer = charm.parent;
        const worldPos = layer.convertToWorldSpaceAR(charm.position);

        const pivot = new cc.Node('charmPivot');
        pivot.parent = layer;
        pivot.setPosition(layer.convertToNodeSpaceAR(worldPos));

        charm.parent = pivot;
        charm.setPosition(cc.v3(-hangLocal.x, -hangLocal.y, 0));
        charm.angle = 0;

        let pivotBody = pivot.getComponent(cc.RigidBody);
        if (!pivotBody) {
            pivotBody = pivot.addComponent(cc.RigidBody);
        }
        pivotBody.type = cc.RigidBodyType.Dynamic;
        pivotBody.gravityScale = 1;
        pivotBody.linearDamping = 0.45;
        pivotBody.angularDamping = 1;
        pivotBody.fixedRotation = true;
        pivotBody.allowSleep = false;

        let pivotCol = pivot.getComponent(cc.PhysicsCircleCollider);
        if (!pivotCol) {
            pivotCol = pivot.addComponent(cc.PhysicsCircleCollider);
        }
        pivotCol.radius = this.pivotColliderRadius;
        pivotCol.friction = 0.65;
        pivotCol.restitution = 0;
        pivotCol.enabled = true;

        let charmBody = charm.getComponent(cc.RigidBody);
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

        let joint = pivot.getComponent(cc.RevoluteJoint);
        if (!joint) {
            joint = pivot.addComponent(cc.RevoluteJoint);
        }
        joint.connectedBody = charmBody;
        joint.anchor = cc.v2(0, 0);
        joint.connectedAnchor = hangLocal;
        joint.collideConnected = false;

        return pivot;
    }

    private getCordCenterLocal(): cc.Vec2 {
        const path = this.cordPaths.get(this.activeCord);
        if (!path || path.points.length === 0) {
            return cc.v2(0, 0);
        }

        let cx = 0;
        let cy = 0;
        for (let i = 0; i < path.points.length; i++) {
            cx += path.points[i].x;
            cy += path.points[i].y;
        }
        const n = path.points.length;
        return cc.v2(cx / n, cy / n);
    }

    private getOutwardFromCenter(pos: cc.Vec2): cc.Vec2 {
        const center = this.getCordCenterLocal();
        const outward = cc.v2(pos.x - center.x, pos.y - center.y);
        if (outward.magSqr() < 1) {
            return cc.v2(0, -1);
        }
        outward.normalizeSelf();
        return outward;
    }

    private wrapAngleDeg(angle: number): number {
        let a = angle;
        while (a > 180) a -= 360;
        while (a < -180) a += 360;
        return a;
    }

    private getCharmBodyDir(hangLocal: cc.Vec2, angleDeg: number): cc.Vec2 {
        const localBase = cc.v2(-hangLocal.x, -hangLocal.y);
        const rad = angleDeg * Math.PI / 180;
        const c = Math.cos(rad);
        const s = Math.sin(rad);
        const dir = cc.v2(
            localBase.x * c - localBase.y * s,
            localBase.x * s + localBase.y * c
        );
        if (dir.magSqr() < 0.0001) {
            return cc.v2(0, -1);
        }
        dir.normalizeSelf();
        return dir;
    }

    private angleForOutwardHang(outward: cc.Vec2, hangLocal: cc.Vec2): number {
        const localBase = cc.v2(-hangLocal.x, -hangLocal.y);
        const baseAngle = Math.atan2(localBase.y, localBase.x);
        const outAngle = Math.atan2(outward.y, outward.x);
        return this.wrapAngleDeg((outAngle - baseAngle) * 180 / Math.PI);
    }

    private constrainCharmHang(state: CordCharmState, dt: number) {
        const charm = state.charm;
        const pivot = state.pivot;
        if (!charm || !pivot) return;

        const hangLocal = this.getHangLocalOffset(charm);
        const outward = this.getOutwardFromCenter(cc.v2(pivot.x, pivot.y));
        const targetAngle = this.angleForOutwardHang(outward, hangLocal);
        const body = charm.getComponent(cc.RigidBody);

        let angle = charm.angle;
        const offset = this.wrapAngleDeg(angle - targetAngle);
        const bodyDir = this.getCharmBodyDir(hangLocal, angle);
        const outwardDot = bodyDir.x * outward.x + bodyDir.y * outward.y;

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
        } else if (offset < -this.hangSwingLimit) {
            angle = targetAngle - this.hangSwingLimit;
        } else if (body) {
            const pull = this.wrapAngleDeg(targetAngle - angle);
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
    }

    private getHangLocalOffset(charm: cc.Node): cc.Vec2 {
        const item = charm.getComponent('CharmItem') as any;
        if (item && item.getHangLocalOffset) {
            return item.getHangLocalOffset();
        }
        return cc.v2(0, 55);
    }

    private enableCharmPhysicsCollider(charm: cc.Node) {
        const collider = charm.getComponent(cc.PhysicsPolygonCollider);
        if (collider) {
            collider.enabled = true;
            collider.sensor = false;
            collider.friction = 0.85;
            collider.restitution = 0;
            if (typeof collider.density === 'number') {
                collider.density = 0.35;
            }
        }
    }

    private getTangentAtIndex(points: cc.Vec2[], index: number, dir: number): cc.Vec2 {
        const nextIdx = this.wrapIndex(index + dir, points.length);
        const a = points[index];
        const b = points[nextIdx];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        return cc.v2(dx / len, dy / len);
    }

    private getNearestOnPath(points: cc.Vec2[], pos: cc.Vec2): { index: number; nearest: cc.Vec2 } {
        let bestIndex = 0;
        let bestDist = Number.MAX_VALUE;

        for (let i = 0; i < points.length; i++) {
            const d = cc.v2(points[i].x - pos.x, points[i].y - pos.y).magSqr();
            if (d < bestDist) {
                bestDist = d;
                bestIndex = i;
            }
        }

        return { index: bestIndex, nearest: points[bestIndex] };
    }

    private findNearestPathIndex(points: cc.Vec2[], pos: cc.Vec2): number {
        let best = 0;
        let bestDist = Number.MAX_VALUE;
        for (let i = 0; i < points.length; i++) {
            const d = cc.v2(points[i].x - pos.x, points[i].y - pos.y).mag();
            if (d < bestDist) {
                bestDist = d;
                best = i;
            }
        }
        return best;
    }

    private pickPathDirection(points: cc.Vec2[], entryIndex: number, side: CordSide): number {
        const score = (dir: number) => {
            let s = 0;
            let idx = entryIndex;
            for (let k = 0; k < 40; k++) {
                idx = this.wrapIndex(idx + dir, points.length);
                const p = points[idx];
                s += -p.y * 0.5;
                if (side === 'left') {
                    s += p.x < 0 ? 3 : -1;
                } else {
                    s += p.x > 0 ? 3 : -1;
                }
            }
            return s;
        };
        return score(1) >= score(-1) ? 1 : -1;
    }

    private getPoseOnPath(
        points: cc.Vec2[],
        startIndex: number,
        dir: number,
        distance: number
    ): { x: number; y: number; angle: number } {
        let idx = startIndex;
        let remain = distance;
        const maxStep = points.length + 2;

        for (let step = 0; step < maxStep; step++) {
            const nextIdx = this.wrapIndex(idx + dir, points.length);
            const a = points[idx];
            const b = points[nextIdx];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const segLen = Math.sqrt(dx * dx + dy * dy);
            if (segLen <= 0) {
                idx = nextIdx;
                continue;
            }

            if (remain <= segLen) {
                const t = remain / segLen;
                const x = a.x + dx * t;
                const y = a.y + dy * t;
                const angle = Math.atan2(dy, dx) * 180 / Math.PI - 90;
                return { x, y, angle };
            }

            remain -= segLen;
            idx = nextIdx;
        }

        const last = points[idx];
        return { x: last.x, y: last.y, angle: 0 };
    }

    private wrapIndex(index: number, length: number): number {
        if (index < 0) return length + index;
        if (index >= length) return index - length;
        return index;
    }

    private getAnchorSlideDistance(): number {
        const path = this.cordPaths.get(this.activeCord);
        const anchors = this.getCordAnchorPositions();
        if (!path || !anchors) return 0;

        const leftIndex = this.findNearestPathIndex(path.points, anchors.left);
        const pathDir = this.pickPathDirection(path.points, leftIndex, 'left');
        return this.getDistanceAlongPath(path.points, leftIndex, pathDir, anchors.right);
    }

    private getSideSlideDistance(side: CordSide): number {
        const path = this.cordPaths.get(this.activeCord);
        const anchors = this.getCordAnchorPositions();
        if (!path || !anchors) return 0;

        const entry = side === 'left' ? anchors.left : anchors.right;
        const entryIndex = this.findNearestPathIndex(path.points, entry);
        const pathDir = this.pickPathDirection(path.points, entryIndex, side);
        const opposite = side === 'left' ? anchors.right : anchors.left;
        const toOpposite = this.getDistanceAlongPath(path.points, entryIndex, pathDir, opposite);
        if (toOpposite <= 0) return 0;

        // Trượt hết cung xuống đáy, dừng trước neo đối diện (không qua khe hở).
        const stopMargin = Math.max(this.pivotColliderRadius * 2, this.minAnchorDropGap * 0.45);
        return Math.max(0, toOpposite - stopMargin);
    }

    private getMaxSlideDistance(state: CordCharmState): number {
        return this.getSideSlideDistance(state.side);
    }

    private getSlideEntryAnchor(side: CordSide): cc.Vec2 | null {
        const anchors = this.getCordAnchorPositions();
        if (!anchors) return null;
        return side === 'left' ? anchors.left : anchors.right;
    }

    /** Chỉ tìm điểm gần nhất trên cung dây hợp lệ (neo → đáy), bỏ qua khe hở giữa 2 neo. */
    private getNearestOnAllowedSlidePath(
        state: CordCharmState,
        pos: cc.Vec2
    ): { index: number; nearest: cc.Vec2; pathDistance: number } {
        const path = this.cordPaths.get(this.activeCord);
        if (!path) {
            return { index: state.pathStartIndex, nearest: pos, pathDistance: 0 };
        }

        const maxDistance = this.getMaxSlideDistance(state);
        const points = path.points;
        let bestDistSqr = Number.MAX_VALUE;
        let bestNearest = points[state.pathStartIndex];
        let bestIndex = state.pathStartIndex;
        let bestPathDist = 0;

        let idx = state.pathStartIndex;
        let traversed = 0;
        const maxSteps = points.length + 2;

        for (let step = 0; step < maxSteps; step++) {
            const nextIdx = this.wrapIndex(idx + state.pathDir, points.length);
            const a = points[idx];
            const b = points[nextIdx];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const segLen = Math.sqrt(dx * dx + dy * dy);
            if (segLen <= 0) {
                idx = nextIdx;
                continue;
            }

            const remain = maxDistance - traversed;
            const segUse = Math.min(segLen, remain);
            const tMax = segUse / segLen;
            const tRaw = ((pos.x - a.x) * dx + (pos.y - a.y) * dy) / (segLen * segLen);
            const t = Math.max(0, Math.min(tMax, tRaw));
            const nx = a.x + dx * t;
            const ny = a.y + dy * t;
            const dSqr = (pos.x - nx) * (pos.x - nx) + (pos.y - ny) * (pos.y - ny);
            const pathDist = traversed + t * segLen;

            if (dSqr < bestDistSqr) {
                bestDistSqr = dSqr;
                bestNearest = cc.v2(nx, ny);
                bestIndex = idx;
                bestPathDist = pathDist;
            }

            traversed += segLen;
            idx = nextIdx;
            if (traversed >= maxDistance) break;
        }

        return { index: bestIndex, nearest: bestNearest, pathDistance: bestPathDist };
    }

    private getCharmNeighborCount(state: CordCharmState): number {
        if (!state.pivot) return 0;
        const pos = cc.v2(state.pivot.x, state.pivot.y);
        const spacing = this.getCharmSlotSpacing(state.charm) * 0.6;
        let neighbors = 0;

        for (let i = 0; i < this.cordCharms.length; i++) {
            const other = this.cordCharms[i];
            if (other === state || !other.pivot) continue;
            const d = cc.v2(other.pivot.x - pos.x, other.pivot.y - pos.y).mag();
            if (d < spacing) neighbors++;
        }

        return neighbors;
    }

    private getCharmCrowdInfo(state: CordCharmState): {
        crowd: number;
        neighbors: number;
        packed: boolean;
        slideBlocked: boolean;
    } {
        if (!state.pivot) {
            return { crowd: 0, neighbors: 0, packed: false, slideBlocked: false };
        }

        const pos = cc.v2(state.pivot.x, state.pivot.y);
        const spacing = this.getCharmSlotSpacing(state.charm) * 0.6;
        const packThreshold = Math.max(2, this.charmCrowdFullCancelCount - 1);
        let neighbors = 0;
        let overlapCrowd = 0;
        let maxNeighborPack = 0;

        for (let i = 0; i < this.cordCharms.length; i++) {
            const other = this.cordCharms[i];
            if (other === state || !other.pivot) continue;
            const d = cc.v2(other.pivot.x - pos.x, other.pivot.y - pos.y).mag();
            if (d >= spacing) continue;

            neighbors++;
            const overlap = 1 - d / spacing;
            overlapCrowd += overlap * overlap;
            maxNeighborPack = Math.max(maxNeighborPack, this.getCharmNeighborCount(other));
        }

        const countCrowd = Math.min(1, neighbors / packThreshold);
        const crowd = Math.max(countCrowd, Math.min(1, overlapCrowd));
        const packed = neighbors >= packThreshold;
        const slideBlocked = packed || maxNeighborPack >= packThreshold;

        return { crowd, neighbors, packed, slideBlocked };
    }

    private getCharmCrowdFactor(state: CordCharmState): number {
        return this.getCharmCrowdInfo(state).crowd;
    }

    private getCrowdPushScale(crowd: number, slideBlocked: boolean = false): number {
        if (slideBlocked) return 0;
        if (crowd <= 0) return 1;
        return this.charmCrowdPushRetention
            + (1 - this.charmCrowdPushRetention) * (1 - crowd);
    }

    private correctCharmPivotOnPath(
        state: CordCharmState,
        onAllowed: { nearest: cc.Vec2 },
        dt: number
    ) {
        const body = state.pivot.getComponent(cc.RigidBody);
        if (!body) return;

        const pos = cc.v2(state.pivot.x, state.pivot.y);
        const dx = onAllowed.nearest.x - pos.x;
        const dy = onAllowed.nearest.y - pos.y;
        const offDist = Math.sqrt(dx * dx + dy * dy);
        const softLimit = this.segmentRadius * 1.2;
        const hardLimit = this.segmentRadius * 3.2;

        if (offDist <= softLimit) return;

        if (offDist >= hardLimit) {
            state.pivot.setPosition(cc.v3(onAllowed.nearest.x, onAllowed.nearest.y, 0));
            body.syncPosition(true);
            body.linearVelocity = cc.v2(0, 0);
            return;
        }

        const strength = state.settled ? 12 : 8;
        const t = Math.min(1, strength * dt);
        state.pivot.setPosition(cc.v3(pos.x + dx * t, pos.y + dy * t, 0));
        body.syncPosition(true);
    }

    private dampCharmPivotCrowding(state: CordCharmState, dt: number) {
        const pivotBody = state.pivot.getComponent(cc.RigidBody);
        if (!pivotBody) return;

        const crowdInfo = this.getCharmCrowdInfo(state);
        if (crowdInfo.crowd <= 0 && !crowdInfo.slideBlocked) return;

        if (crowdInfo.slideBlocked) {
            pivotBody.linearVelocity = cc.v2(0, 0);
            const charmBody = state.charm.getComponent(cc.RigidBody);
            if (charmBody) {
                charmBody.linearVelocity = cc.v2(0, 0);
                charmBody.angularVelocity = 0;
            }
            if (!state.settled) {
                state.settled = true;
            }
            return;
        }

        const pushScale = this.getCrowdPushScale(crowdInfo.crowd, crowdInfo.slideBlocked);
        pivotBody.linearVelocity = pivotBody.linearVelocity.mul(pushScale);

        const charmBody = state.charm.getComponent(cc.RigidBody);
        if (charmBody) {
            charmBody.linearVelocity = charmBody.linearVelocity.mul(pushScale * 0.75);
            charmBody.angularVelocity *= pushScale;
        }

        const damp = Math.min(0.92, crowdInfo.crowd * this.charmCrowdDampingStrength * dt);
        pivotBody.linearVelocity = pivotBody.linearVelocity.mul(1 - damp);
        if (charmBody) {
            charmBody.linearVelocity = charmBody.linearVelocity.mul(1 - damp * 0.85);
        }

        this.cancelMutualPushVelocity(state, crowdInfo.crowd, crowdInfo.slideBlocked);

        if (state.settled && pivotBody.linearVelocity.mag() > 28) {
            pivotBody.linearVelocity = pivotBody.linearVelocity.mul(0.4);
        }
    }

    /** Triệt tiêu vận tốc đẩy vào nhau khi chen chúc. */
    private cancelMutualPushVelocity(
        state: CordCharmState,
        crowd: number,
        slideBlocked: boolean = false
    ) {
        const pivotBody = state.pivot.getComponent(cc.RigidBody);
        if (!pivotBody || (crowd <= 0 && !slideBlocked)) return;

        if (slideBlocked) {
            pivotBody.linearVelocity = cc.v2(0, 0);
            return;
        }

        const pos = cc.v2(state.pivot.x, state.pivot.y);
        const spacing = this.getCharmSlotSpacing(state.charm) * 0.6;
        let cancelX = 0;
        let cancelY = 0;
        let weight = 0;

        for (let i = 0; i < this.cordCharms.length; i++) {
            const other = this.cordCharms[i];
            if (other === state || !other.pivot) continue;

            const otherBody = other.pivot.getComponent(cc.RigidBody);
            if (!otherBody) continue;

            const offset = cc.v2(other.pivot.x - pos.x, other.pivot.y - pos.y);
            const dist = offset.mag();
            if (dist >= spacing || dist < 0.5) continue;

            const towardX = offset.x / dist;
            const towardY = offset.y / dist;
            const relVx = pivotBody.linearVelocity.x - otherBody.linearVelocity.x;
            const relVy = pivotBody.linearVelocity.y - otherBody.linearVelocity.y;
            const pushAlong = relVx * towardX + relVy * towardY;
            if (pushAlong <= 0) continue;

            const overlap = 1 - dist / spacing;
            const strength = overlap * overlap * crowd;
            cancelX += towardX * pushAlong * strength;
            cancelY += towardY * pushAlong * strength;
            weight += strength;
        }

        if (weight > 0) {
            pivotBody.linearVelocity = cc.v2(
                pivotBody.linearVelocity.x - cancelX,
                pivotBody.linearVelocity.y - cancelY
            );
        }
    }

    /** Không cho charm trượt qua neo hoặc lọt vào khe hở giữa 2 neo. */
    private enforceCharmSlideBounds(
        state: CordCharmState,
        onAllowed: { index: number; nearest: cc.Vec2; pathDistance: number },
        tangent: cc.Vec2,
        maxDist: number
    ) {
        const body = state.pivot.getComponent(cc.RigidBody);
        const path = this.cordPaths.get(this.activeCord);
        if (!body || !path) return;

        const margin = this.pivotColliderRadius;
        const pos = cc.v2(state.pivot.x, state.pivot.y);
        const pathDist = Math.max(0, Math.min(maxDist, onAllowed.pathDistance));
        state.pathDistance = pathDist;

        const inGap = this.isInAnchorGap(pos);
        const atMin = pathDist <= margin;
        const atMax = pathDist >= maxDist - margin;

        if (inGap) {
            body.linearVelocity = cc.v2(0, 0);
            return;
        }

        const vel = body.linearVelocity;
        let vTangent = vel.x * tangent.x + vel.y * tangent.y;
        let changed = false;

        if (atMin && vTangent < 0) {
            vTangent = 0;
            changed = true;
        }
        if (atMax && vTangent > 0) {
            vTangent = 0;
            changed = true;
        }

        if (changed) {
            const vNormal = vel.x * (-tangent.y) + vel.y * tangent.x;
            body.linearVelocity = cc.v2(
                tangent.x * vTangent + (-tangent.y) * vNormal,
                tangent.y * vTangent + tangent.x * vNormal
            );
        }
    }

    private updateCharmSlide(state: CordCharmState, dt: number) {
        const body = state.pivot.getComponent(cc.RigidBody);
        const path = this.cordPaths.get(this.activeCord);
        if (!body || !path) return;

        const pos = cc.v2(state.pivot.x, state.pivot.y);
        const maxDist = this.getMaxSlideDistance(state);
        const onAllowed = this.getNearestOnAllowedSlidePath(state, pos);
        const tangent = this.getTangentAtIndex(path.points, onAllowed.index, state.pathDir);
        const crowdInfo = this.getCharmCrowdInfo(state);
        const crowd = crowdInfo.crowd;
        const slideBlocked = crowdInfo.slideBlocked;

        state.pathDistance = Math.max(0, Math.min(maxDist, onAllowed.pathDistance));

        if (!state.settled) {
            const toPathX = onAllowed.nearest.x - pos.x;
            const toPathY = onAllowed.nearest.y - pos.y;
            const tx = tangent.x;
            const ty = tangent.y;
            const nx = -ty;
            const ny = tx;

            const vel = body.linearVelocity;
            let vTangent = vel.x * tx + vel.y * ty;
            let vNormal = vel.x * nx + vel.y * ny;
            const offsetNormal = toPathX * nx + toPathY * ny;

            if (slideBlocked) {
                vTangent = 0;
                vNormal = 0;
                state.settled = true;
            } else {
                let newVTangent = vTangent + this.slideGravity * dt * (1 - crowd * 0.92);
                let newVNormal = vNormal
                    + offsetNormal * this.pathPullStrength * dt * (1 - crowd * 0.5)
                    - vNormal * this.pathPullDamping * dt;

                if (crowd > 0) {
                    const pushScale = this.getCrowdPushScale(crowd, slideBlocked);
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

            let vx = tx * vTangent + nx * vNormal;
            let vy = ty * vTangent + ny * vNormal;

            const speed = Math.sqrt(vx * vx + vy * vy);
            const crowdSpeedCap = slideBlocked ? 0 : this.maxSlideSpeed * (1 - crowd * 0.75);
            if (speed > crowdSpeedCap && crowdSpeedCap >= 0) {
                const scale = crowdSpeedCap / speed;
                vx *= scale;
                vy *= scale;
            }
            body.linearVelocity = cc.v2(vx, vy);

            if (state.pathDistance >= maxDist - 2) {
                state.settled = true;
            }
        }

        const speed = body.linearVelocity.mag();
        const minSlide = Math.min(24, maxDist * 0.12);
        if (speed < this.settleSpeed && state.pathDistance >= minSlide) {
            state.stillTime += dt;
            if (state.stillTime >= 0.35) {
                state.settled = true;
            }
        } else {
            state.stillTime = 0;
        }

        if (state.settled) {
            body.gravityScale = 0;
            body.linearDamping = 1.8;
            body.angularDamping = 1.2;
            body.allowSleep = true;

            const toPathX = onAllowed.nearest.x - pos.x;
            const toPathY = onAllowed.nearest.y - pos.y;
            const holdDamp = this.pathPullDamping * (1.5 + crowd);
            body.linearVelocity = cc.v2(
                body.linearVelocity.x + toPathX * this.pathPullStrength * dt * 0.35 - body.linearVelocity.x * holdDamp * dt,
                body.linearVelocity.y + toPathY * this.pathPullStrength * dt * 0.35 - body.linearVelocity.y * holdDamp * dt
            );

            const offset = Math.sqrt(toPathX * toPathX + toPathY * toPathY);
            if (offset < 1.5 && body.linearVelocity.mag() < 8) {
                body.linearVelocity = cc.v2(0, 0);
                state.pivot.setPosition(cc.v3(onAllowed.nearest.x, onAllowed.nearest.y, 0));
                body.syncPosition(true);
            }
        }

        this.enforceCharmSlideBounds(state, onAllowed, tangent, maxDist);
    }

    private postPhysicsCharmSlideFix(state: CordCharmState, dt: number) {
        const body = state.pivot.getComponent(cc.RigidBody);
        const path = this.cordPaths.get(this.activeCord);
        if (!body || !path) return;

        const pos = cc.v2(state.pivot.x, state.pivot.y);
        const maxDist = this.getMaxSlideDistance(state);
        const onAllowed = this.getNearestOnAllowedSlidePath(state, pos);
        state.pathDistance = Math.max(0, Math.min(maxDist, onAllowed.pathDistance));

        if (this.isInAnchorGap(pos)) {
            const entry = this.getSlideEntryAnchor(state.side);
            const clampPos = entry || onAllowed.nearest;
            state.pivot.setPosition(cc.v3(clampPos.x, clampPos.y, 0));
            body.syncPosition(true);
            body.linearVelocity = cc.v2(0, 0);
            return;
        }

        this.correctCharmPivotOnPath(state, onAllowed, dt);
        this.dampCharmPivotCrowding(state, dt);
    }

    private getDistanceAlongPath(
        points: cc.Vec2[],
        startIndex: number,
        dir: number,
        pos: cc.Vec2
    ): number {
        const nearest = this.getNearestOnPath(points, pos);
        let dist = 0;
        let idx = startIndex;
        const target = nearest.index;
        let guard = 0;

        while (idx !== target && guard < points.length + 1) {
            const nextIdx = this.wrapIndex(idx + dir, points.length);
            const a = points[idx];
            const b = points[nextIdx];
            dist += cc.v2(b.x - a.x, b.y - a.y).mag();
            idx = nextIdx;
            guard++;
        }

        const segA = points[idx];
        dist += cc.v2(pos.x - segA.x, pos.y - segA.y).mag();
        return dist;
    }

    private getAngleInNodeSpace(node: cc.Node, root: cc.Node): number {
        let angle = node.angle;
        let parent = node.parent;
        while (parent && parent !== root) {
            angle += parent.angle;
            parent = parent.parent;
        }
        return angle;
    }

    private measurePathDistanceFromEntry(side: CordSide, pos: cc.Vec2, pathDir?: number): number {
        const path = this.cordPaths.get(this.activeCord);
        const anchors = this.getCordAnchorPositions();
        if (!path || !anchors) return 0;

        const entry = side === 'left' ? anchors.left : anchors.right;
        const entryIndex = this.findNearestPathIndex(path.points, entry);
        const dir = pathDir !== undefined
            ? pathDir
            : this.pickPathDirection(path.points, entryIndex, side);

        return this.getDistanceAlongPath(path.points, entryIndex, dir, pos);
    }

    private getCharmPathDistance(state: CordCharmState): number {
        if (!state.pivot) return state.pathDistance;
        const pos = cc.v2(state.pivot.x, state.pivot.y);
        const onPath = this.getNearestOnAllowedSlidePath(state, pos);
        const maxDist = this.getMaxSlideDistance(state);
        return Math.max(0, Math.min(maxDist, onPath.pathDistance));
    }

    private getCharmsOnSide(side: CordSide): CordCharmState[] {
        const result: CordCharmState[] = [];
        for (let i = 0; i < this.cordCharms.length; i++) {
            if (this.cordCharms[i].side === side) {
                result.push(this.cordCharms[i]);
            }
        }
        return result;
    }

    private getOccupiedDistancesOnSide(side: CordSide): number[] {
        const onSide = this.getCharmsOnSide(side);
        const distances: number[] = [];

        for (let i = 0; i < onSide.length; i++) {
            distances.push(this.getDistanceFromAnchor(side, onSide[i]));
        }

        distances.sort((a, b) => a - b);
        return distances;
    }

    private getDistanceFromAnchor(side: CordSide, state: CordCharmState): number {
        return this.getCharmPathDistance(state);
    }

    /** Bán kính vùng neo (khoanh đỏ) — charm trong vùng này thì bên đó không thả thêm. */
    private getAnchorDropZoneRadius(): number {
        return this.entryDetectRadius * 0.5;
    }

    private getRequiredAnchorGap(charm: cc.Node): number {
        return Math.max(this.minAnchorDropGap, this.getAnchorDropZoneRadius());
    }

    private getCharmSlotSpacing(charm: cc.Node): number {
        const item = this.getCharmItemComp(charm);
        if (item && typeof item.slotSpacing === 'number' && item.slotSpacing > 0) {
            return item.slotSpacing;
        }
        return this.charmSlotSpacing;
    }

    /** Chỉ thả được khi vùng neo đủ trống — kiểm tra charm nào đang chiếm gần neo đó. */
    private canDropOnSide(side: CordSide, charm: cc.Node): boolean {
        const anchors = this.getCordAnchorPositions();
        if (!anchors) return false;

        const anchorPos = side === 'left' ? anchors.left : anchors.right;
        const requiredGap = this.getRequiredAnchorGap(charm);
        const zoneRadius = this.getAnchorDropZoneRadius();
        let closestPathDist = Number.MAX_VALUE;

        for (let i = 0; i < this.cordCharms.length; i++) {
            const state = this.cordCharms[i];
            if (!state.pivot) continue;

            const pos = cc.v2(state.pivot.x, state.pivot.y);
            const distToAnchor = cc.v2(pos.x - anchorPos.x, pos.y - anchorPos.y).mag();
            if (distToAnchor < zoneRadius) {
                return false;
            }

            if (distToAnchor < this.entryDetectRadius) {
                const pathDist = this.measurePathDistanceFromEntry(side, pos);
                if (pathDist < closestPathDist) {
                    closestPathDist = pathDist;
                }
            }
        }

        return closestPathDist >= requiredGap;
    }

    private screenToWorldOnMain(screenPos: cc.Vec2): cc.Vec2 {
        const main = this.getMainNode();
        const local = main.convertToNodeSpaceAR(screenPos);
        return main.convertToWorldSpaceAR(local);
    }

    private getCordAnchorAttempt(worldPos: cc.Vec2): { nearLeft: boolean; nearRight: boolean } | null {
        const anchors = this.getCordAnchorPositions();
        if (!anchors || !this.activeCord) return null;

        const local = this.activeCord.convertToNodeSpaceAR(worldPos);
        if (this.isInAnchorGap(local)) return null;

        const distLeft = cc.v2(local.x - anchors.left.x, local.y - anchors.left.y).mag();
        const distRight = cc.v2(local.x - anchors.right.x, local.y - anchors.right.y).mag();
        const nearLeft = distLeft <= this.entryDetectRadius;
        const nearRight = distRight <= this.entryDetectRadius;
        if (!nearLeft && !nearRight) return null;

        return { nearLeft, nearRight };
    }

    /** Không còn chỗ thả ở neo trái/phải. */
    private isCordFullForCharm(charm: cc.Node): boolean {
        return !this.canDropOnSide('left', charm) && !this.canDropOnSide('right', charm);
    }

    private shouldShowCordFullNoti(screenPos: cc.Vec2, charmWorld: cc.Vec2, charm: cc.Node): boolean {
        const touchWorld = this.screenToWorldOnMain(screenPos);
        const attempt = this.getCordAnchorAttempt(charmWorld)
            || this.getCordAnchorAttempt(touchWorld);
        if (!attempt) return false;

        if (this.isCordFullForCharm(charm)) return true;
        if (attempt.nearLeft && !this.canDropOnSide('left', charm)) return true;
        if (attempt.nearRight && !this.canDropOnSide('right', charm)) return true;
        return false;
    }

    private pickAvailableSide(
        nearLeft: boolean,
        nearRight: boolean,
        distLeft: number,
        distRight: number,
        charm: cc.Node,
        preferLeft?: boolean
    ): CordSide | null {
        const candidates: { side: CordSide; dist: number }[] = [];
        if (nearLeft) candidates.push({ side: 'left', dist: distLeft });
        if (nearRight) candidates.push({ side: 'right', dist: distRight });

        if (candidates.length === 0) return null;

        candidates.sort((a, b) => {
            if (preferLeft !== undefined) {
                const aPref = (a.side === 'left') === preferLeft ? 0 : 1;
                const bPref = (b.side === 'left') === preferLeft ? 0 : 1;
                if (aPref !== bPref) return aPref - bPref;
            }
            return a.dist - b.dist;
        });

        for (let i = 0; i < candidates.length; i++) {
            if (this.canDropOnSide(candidates[i].side, charm)) {
                return candidates[i].side;
            }
        }
        return null;
    }

    private resolveDropAnchor(worldPos: cc.Vec2, preferredSide: CordSide, charm: cc.Node): DropAnchor | null {
        if (!this.activeCord) return null;

        const anchors = this.getCordAnchorPositions();
        if (!anchors) return null;

        const local = this.activeCord.convertToNodeSpaceAR(worldPos);
        if (this.isInAnchorGap(local)) return null;

        const leftPos = anchors.left;
        const rightPos = anchors.right;

        const distLeft = cc.v2(local.x - leftPos.x, local.y - leftPos.y).mag();
        const distRight = cc.v2(local.x - rightPos.x, local.y - rightPos.y).mag();
        const nearLeft = distLeft <= this.entryDetectRadius;
        const nearRight = distRight <= this.entryDetectRadius;

        // Chỉ thả khi sát neo trái/phải — không thả trong khe hở giữa 2 neo.
        if (!nearLeft && !nearRight) return null;

        const preferLeft = distLeft <= distRight;

        if (preferredSide === 'left' && nearLeft && this.canDropOnSide('left', charm)) {
            return { side: 'left', cordPos: leftPos };
        }
        if (preferredSide === 'right' && nearRight && this.canDropOnSide('right', charm)) {
            return { side: 'right', cordPos: rightPos };
        }

        const side = this.pickAvailableSide(nearLeft, nearRight, distLeft, distRight, charm, preferLeft);
        if (!side) return null;

        return {
            side,
            cordPos: side === 'left' ? leftPos : rightPos,
        };
    }

    private getLocalBoxSnapPose(side: CordSide): { pos: cc.Vec3; angle: number } | null {
        const children = this.getLocalBoxSideChildren();
        if (!children) return null;

        const target = side === 'left' ? children.left : children.right;
        const main = this.getMainNode();
        const local = main.convertToNodeSpaceAR(target.convertToWorldSpaceAR(cc.v2(0, 0)));
        return {
            pos: cc.v3(local.x, local.y, 0),
            angle: this.getAngleInNodeSpace(target, main),
        };
    }

    private getDragSnapPose(mainPos: cc.Vec3): { pos: cc.Vec3; angle: number; side: CordSide } | null {
        const anchors = this.getCordAnchorPositions();
        if (!anchors || !this.activeCord) return null;

        const main = this.getMainNode();
        const leftMain = main.convertToNodeSpaceAR(
            this.activeCord.convertToWorldSpaceAR(anchors.left)
        );
        const rightMain = main.convertToNodeSpaceAR(
            this.activeCord.convertToWorldSpaceAR(anchors.right)
        );

        const distLeft = cc.v2(mainPos.x - leftMain.x, mainPos.y - leftMain.y).mag();
        const distRight = cc.v2(mainPos.x - rightMain.x, mainPos.y - rightMain.y).mag();
        const nearLeft = distLeft <= this.entryDetectRadius;
        const nearRight = distRight <= this.entryDetectRadius;

        let side: CordSide = null;
        const charm = this.draggingCharm;
        if (!charm) return null;

        const cordLocal = this.activeCord.convertToNodeSpaceAR(
            main.convertToWorldSpaceAR(cc.v2(mainPos.x, mainPos.y))
        );
        if (this.isInAnchorGap(cordLocal)) return null;

        if (nearLeft || nearRight) {
            const preferLeft = distLeft <= distRight;
            side = this.pickAvailableSide(nearLeft, nearRight, distLeft, distRight, charm, preferLeft);
        }

        if (!side) return null;

        const snap = this.getLocalBoxSnapPose(side);
        if (snap) {
            return { pos: snap.pos, angle: snap.angle, side };
        }
        return null;
    }

    private getLocalBoxSideChildren(): { left: cc.Node; right: cc.Node } | null {
        if (!this.localBox || this.localBox.childrenCount < 2) return null;

        const leftByName = this.localBox.getChildByName('left');
        const rightByName = this.localBox.getChildByName('right');
        if (leftByName && rightByName) {
            return { left: leftByName, right: rightByName };
        }

        const childA = this.localBox.children[0];
        const childB = this.localBox.children[1];
        return childA.x <= childB.x
            ? { left: childA, right: childB }
            : { left: childB, right: childA };
    }

    private getLocalBoxHangAngle(side: CordSide): number {
        const children = this.getLocalBoxSideChildren();
        if (!children) return 0;
        return side === 'left' ? children.left.angle : children.right.angle;
    }

    private getLocalBoxAnchorPositions(): { left: cc.Vec2; right: cc.Vec2 } | null {
        const children = this.getLocalBoxSideChildren();
        if (!children || !this.activeCord) return null;

        const posLeft = this.activeCord.convertToNodeSpaceAR(
            children.left.convertToWorldSpaceAR(cc.v2(0, 0))
        );
        const posRight = this.activeCord.convertToNodeSpaceAR(
            children.right.convertToWorldSpaceAR(cc.v2(0, 0))
        );
        return { left: posLeft, right: posRight };
    }

    private getCordAnchorPositions(): { left: cc.Vec2; right: cc.Vec2 } | null {
        const localBoxAnchors = this.getLocalBoxAnchorPositions();
        if (localBoxAnchors) return localBoxAnchors;

        if (!this.leftAnchor || !this.rightAnchor) return null;
        return {
            left: cc.v2(this.leftAnchor.x, this.leftAnchor.y),
            right: cc.v2(this.rightAnchor.x, this.rightAnchor.y),
        };
    }

    /** Khe hở giữa 2 neo — không phải vùng thả charm. */
    private isInAnchorGap(local: cc.Vec2): boolean {
        const anchors = this.getCordAnchorPositions();
        if (!anchors) return false;

        const left = anchors.left;
        const right = anchors.right;
        const anchorReach = this.entryDetectRadius * 0.4;
        const distLeft = cc.v2(local.x - left.x, local.y - left.y).mag();
        const distRight = cc.v2(local.x - right.x, local.y - right.y).mag();

        if (distLeft <= anchorReach || distRight <= anchorReach) {
            return false;
        }

        const gapMinX = Math.min(left.x, right.x) + anchorReach;
        const gapMaxX = Math.max(left.x, right.x) - anchorReach;
        const topY = Math.max(left.y, right.y);
        const inTopBand = local.y >= topY - this.entryDetectRadius;

        return inTopBand && local.x >= gapMinX && local.x <= gapMaxX;
    }

    private getDropAnchorForSide(side: CordSide, charm: cc.Node): DropAnchor | null {
        if (!this.canDropOnSide(side, charm)) return null;

        const anchors = this.getCordAnchorPositions();
        if (!anchors) return null;
        return {
            side,
            cordPos: side === 'left' ? anchors.left : anchors.right,
        };
    }

    private getPlateCharmAt(screenPos: cc.Vec2): cc.Node {
        if (!this.plate) return null;

        for (let i = this.plate.childrenCount - 1; i >= 0; i--) {
            const child = this.plate.children[i];
            if (!child.active || !child.getComponent('CharmItem')) continue;
            if (this.isCharmOnCord(child)) continue;

            const rect = child.getBoundingBoxToWorld();
            if (rect.contains(screenPos)) {
                return child;
            }
        }
        return null;
    }

    private isCharmOnCord(charm: cc.Node): boolean {
        for (let i = 0; i < this.cordCharms.length; i++) {
            const state = this.cordCharms[i];
            if (state.charm === charm || state.pivot === charm) return true;
            if (charm.parent === state.pivot) return true;
        }
        return false;
    }

    private getMainLocalPos(screenPos: cc.Vec2): cc.Vec3 {
        return this.getMainNode().convertToNodeSpaceAR(screenPos);
    }

    private getMainNode(): cc.Node {
        let node: cc.Node = this.node;
        while (node.parent) {
            if (node.parent.name === 'main' || node.parent.name === 'Canvas') {
                return node.parent.name === 'main' ? node.parent : node;
            }
            node = node.parent;
        }
        return this.CordRoundList.parent || this.node;
    }

    private getDefaultBraceletRef(): cc.Node {
        const cordId = globalThis.idString || 0;
        if (this.defaultBraceletByCord.length > cordId && this.defaultBraceletByCord[cordId]) {
            return this.defaultBraceletByCord[cordId];
        }
        return this.defaultBraceletRef;
    }

    private getCharmItemComp(charm: cc.Node): any {
        const item = charm.getComponent('CharmItem');
        if (item) return item;

        const comps = charm.getComponents(cc.Component);
        for (let i = 0; i < comps.length; i++) {
            const c = comps[i] as any;
            if (c && typeof c.tag === 'number' && typeof c.loadIMG === 'function') {
                return c;
            }
        }
        return null;
    }

    private inferCordIdFromRef(ref: cc.Node): number {
        const cord = this.getRefCordNode(ref);
        const name = cord.name.toLowerCase();
        const colorIds: { key: string; id: number }[] = [
            { key: 'black', id: 0 },
            { key: 'blue', id: 1 },
            { key: 'green', id: 2 },
            { key: 'pink', id: 3 },
            { key: 'purple', id: 4 },
            { key: 'yellow', id: 5 },
            { key: 'white', id: 6 },
        ];
        for (let i = 0; i < colorIds.length; i++) {
            if (name.indexOf(colorIds[i].key) >= 0) {
                return colorIds[i].id;
            }
        }
        return this.defaultCordId >= 0 ? this.defaultCordId : 0;
    }

    private readDefaultMeta(ref: cc.Node): { cordId: number; keychainIndex: number } {
        const meta = ref && ref.getComponent('BraceletDefaultMeta') as any;
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
    }

    private cacheDefaultMetaOnly() {
        const ref = this.getDefaultBraceletRefForCache();
        if (!ref) return;

        const meta = this.readDefaultMeta(ref);
        this.cachedDefaultCordId = meta.cordId;
        this.cachedDefaultKeychainIndex = meta.keychainIndex;
    }

    private cacheDefaultConfig(activeCord?: cc.Node) {
        const ref = this.getDefaultBraceletRefForCache();
        if (!ref) {
            cc.warn('[CordRoundGame] Chưa gán defaultBraceletRef — không thể so sánh vòng mẫu.');
            this.cachedDefaultLayout = [];
            this.cachedDefaultCordId = this.defaultCordId >= 0 ? this.defaultCordId : 0;
            this.cachedDefaultKeychainIndex = this.defaultKeychainIndex;
            this.defaultConfigCached = false;
            return;
        }

        const meta = this.readDefaultMeta(ref);
        this.cachedDefaultCordId = meta.cordId;
        this.cachedDefaultKeychainIndex = meta.keychainIndex;
        this.cachedDefaultLayout = this.buildDefaultLayoutFromRef(ref, activeCord);
        this.defaultConfigCached = this.cachedDefaultLayout.length > 0;

        cc.log('[CordRoundGame] Default config: cordId=' + this.cachedDefaultCordId
            + ' (player=' + (globalThis.idString || 0) + ')'
            + ' keychain=' + this.cachedDefaultKeychainIndex
            + ' charms=' + this.cachedDefaultLayout.length);
    }

    /** Luôn trả ref mẫu cố định — không phụ thuộc dây người chơi đang chọn. */
    private getDefaultBraceletRefForCache(): cc.Node {
        if (this.defaultBraceletRef) {
            return this.defaultBraceletRef;
        }
        for (let i = 0; i < this.defaultBraceletByCord.length; i++) {
            if (this.defaultBraceletByCord[i]) {
                return this.defaultBraceletByCord[i];
            }
        }
        return null;
    }

    getDefaultCordId(): number {
        return this.cachedDefaultCordId;
    }

    getDefaultKeychainIndex(): number {
        return this.cachedDefaultKeychainIndex;
    }

    getLastScoreBreakdown(): MatchScoreBreakdown {
        return this.lastScoreBreakdown;
    }

    private getRefCordNode(ref: cc.Node): cc.Node {
        if (ref.getComponent(cc.PolygonCollider)) return ref;
        for (let i = 0; i < ref.childrenCount; i++) {
            const child = ref.children[i];
            if (child.getComponent(cc.PolygonCollider)) return child;
        }
        return ref;
    }

    private getRefCordAnchors(refCord: cc.Node): { left: cc.Vec2; right: cc.Vec2 } | null {
        const left = refCord.getChildByName('left');
        const right = refCord.getChildByName('right');
        if (!left || !right) return null;
        return {
            left: cc.v2(left.x, left.y),
            right: cc.v2(right.x, right.y),
        };
    }

    private getPathDataForCord(cord: cc.Node): CordPathData | null {
        const existing = this.cordPaths.get(cord);
        if (existing) return existing;

        const rawPoints = this.getPolygonColliderPoints(cord);
        if (rawPoints.length < 2) return null;

        const samples = this.sampleAlongPath(rawPoints, this.pathSampleSpacing);
        return {
            points: samples,
            totalLength: this.calcPathLength(samples),
        };
    }

    private getCordAnchors(cord: cc.Node): { left: cc.Vec2; right: cc.Vec2 } | null {
        const left = cord.getChildByName('left');
        const right = cord.getChildByName('right');
        if (!left || !right) return null;
        return {
            left: cc.v2(left.x, left.y),
            right: cc.v2(right.x, right.y),
        };
    }

    private getTemplateCord(cordId?: number): cc.Node | null {
        const id = cordId !== undefined ? cordId : this.cachedDefaultCordId;
        if (!this.CordRoundList || id < 0) return null;
        return this.CordRoundList.children[id] || null;
    }

    private measurePathDistanceOnCord(
        cord: cc.Node,
        path: CordPathData,
        anchors: { left: cc.Vec2; right: cc.Vec2 },
        side: CordSide,
        pos: cc.Vec2
    ): number {
        const entry = side === 'left' ? anchors.left : anchors.right;
        const entryIndex = this.findNearestPathIndex(path.points, entry);
        const pathDir = this.pickPathDirection(path.points, entryIndex, side);
        return this.getDistanceAlongPath(path.points, entryIndex, pathDir, pos);
    }

    private buildDefaultLayout(): CharmSlotData[] {
        const ref = this.getDefaultBraceletRefForCache() || this.getDefaultBraceletRef();
        if (!ref) return [];
        return this.buildDefaultLayoutFromRef(ref, this.activeCord);
    }

    private buildDefaultLayoutFromRef(ref: cc.Node, activeCord?: cc.Node): CharmSlotData[] {
        if (!ref) return [];

        const refCord = this.getRefCordNode(ref);
        const templateCord = activeCord || this.getTemplateCord();
        if (!templateCord) {
            cc.warn('[CordRoundGame] Không tìm thấy dây game để đọc layout mẫu.');
            return [];
        }

        const path = this.getPathDataForCord(templateCord);
        const anchors = this.getCordAnchors(templateCord);
        if (!path || !anchors) {
            cc.warn('[CordRoundGame] Dây game thiếu PolygonCollider hoặc anchor left/right.');
            return [];
        }

        const charmRoot = ref.getChildByName('charm') || ref;
        const slots: CharmSlotData[] = [];

        for (let i = 0; i < charmRoot.childrenCount; i++) {
            const charm = charmRoot.children[i];
            const item = this.getCharmItemComp(charm);
            if (!item) continue;

            const posOnCord = refCord.convertToNodeSpaceAR(
                charm.convertToWorldSpaceAR(cc.v2(0, 0))
            );
            const side = this.resolveSideForPosition(posOnCord, anchors);
            const pathDistance = this.measurePathDistanceOnCord(
                templateCord,
                path,
                anchors,
                side,
                posOnCord
            );

            slots.push({
                tag: item.tag,
                colorIndex: item.colorIndex || 0,
                side,
                pathDistance,
            });
        }
        return slots;
    }

    private resolveSideForPosition(
        cordLocal: cc.Vec2,
        anchors: { left: cc.Vec2; right: cc.Vec2 }
    ): CordSide {
        const distLeft = cc.v2(cordLocal.x - anchors.left.x, cordLocal.y - anchors.left.y).mag();
        const distRight = cc.v2(cordLocal.x - anchors.right.x, cordLocal.y - anchors.right.y).mag();
        return distLeft <= distRight ? 'left' : 'right';
    }

    private buildPlayerLayout(): CharmSlotData[] {
        const slots: CharmSlotData[] = [];
        for (let i = 0; i < this.cordCharms.length; i++) {
            const state = this.cordCharms[i];
            const item = state.charm.getComponent('CharmItem') as any;
            if (!item) continue;

            slots.push({
                tag: item.tag,
                colorIndex: item.colorIndex || 0,
                side: state.side,
                pathDistance: this.getCharmPathDistance(state),
            });
        }
        return slots;
    }

    private getSlotPose(slot: CharmSlotData): { x: number; y: number; angle: number } {
        const path = this.cordPaths.get(this.activeCord);
        const anchors = this.getCordAnchorPositions();
        if (!path || !anchors) {
            return { x: 0, y: 0, angle: 0 };
        }

        const entry = slot.side === 'left' ? anchors.left : anchors.right;
        const entryIndex = this.findNearestPathIndex(path.points, entry);
        const pathDir = this.pickPathDirection(path.points, entryIndex, slot.side);
        return this.getPoseOnPath(path.points, entryIndex, pathDir, slot.pathDistance);
    }

    private showDefaultBraceletPreview() {
        this.hideDefaultBraceletPreview();
        if (!this.cachedDefaultLayout.length || !this.charmLayer) return;

        const ref = this.getDefaultBraceletRef();
        const charmRoot = ref && (ref.getChildByName('charm') || ref);
        if (!charmRoot) return;

        const preview = new cc.Node('defaultBraceletPreview');
        preview.parent = this.charmLayer;
        preview.setSiblingIndex(0);

        let srcIndex = 0;
        for (let i = 0; i < charmRoot.childrenCount; i++) {
            const src = charmRoot.children[i];
            if (!src.getComponent('CharmItem')) continue;
            if (srcIndex >= this.cachedDefaultLayout.length) break;

            const slot = this.cachedDefaultLayout[srcIndex];
            srcIndex++;

            const clone = cc.instantiate(src);
            const pose = this.getSlotPose(slot);
            clone.parent = preview;
            clone.setPosition(cc.v3(pose.x, pose.y, 0));
            clone.angle = pose.angle;
            clone.opacity = 150;

            const body = clone.getComponent(cc.RigidBody);
            if (body) body.enabled = false;
            const colliders = clone.getComponents(cc.PhysicsCollider);
            for (let c = 0; c < colliders.length; c++) {
                colliders[c].enabled = false;
            }
        }

        this.defaultPreviewNode = preview;
    }

    private hideDefaultBraceletPreview() {
        if (this.defaultPreviewNode) {
            this.defaultPreviewNode.destroy();
            this.defaultPreviewNode = null;
        }
    }

    /** So sánh charm (0–100%, chưa gồm dây và keychain). */
    compareCharmsOnly(): number {
        const expected = this.cachedDefaultLayout.length > 0
            ? this.cachedDefaultLayout
            : this.buildDefaultLayout();

        if (expected.length === 0) return 0;

        const actual = this.buildPlayerLayout();
        return calcCharmMatchPercent(expected, actual, this.matchPositionTolerance);
    }

    /**
     * So sánh đầy đủ: dây (30%) + charm (50%) + keychain (20%).
     * Gọi khi đã có lựa chọn keychain của người chơi.
     */
    compareFull(playerKeychainIndex: number): MatchScoreBreakdown {
        const ref = this.getDefaultBraceletRefForCache();
        if (ref) {
            this.cachedDefaultLayout = this.buildDefaultLayoutFromRef(ref, this.activeCord);
        }

        const expected = this.cachedDefaultLayout;
        const actual = this.buildPlayerLayout();
        const actualCordId = globalThis.idString || 0;

        this.lastScoreBreakdown = calcFullScore(
            this.cachedDefaultCordId,
            actualCordId,
            expected,
            actual,
            this.cachedDefaultKeychainIndex,
            playerKeychainIndex,
            this.matchPositionTolerance
        );
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
    }

    /** @deprecated dùng compareFull */
    compareWithDefault(): number {
        return this.compareCharmsOnly();
    }

    getLastMatchPercent(): number {
        return this.lastMatchPercent;
    }

    showMatchResult(percent?: number, breakdown?: MatchScoreBreakdown) {
        const bd = breakdown || this.lastScoreBreakdown;
        const value = percent !== undefined ? percent : this.lastMatchPercent;

        if (this.matchResultLabel) {
            this.matchResultLabel.node.active = true;
            this.matchResultLabel.string = value + '%';
        }

        if (bd) {
            cc.log('[CordRoundGame] Score: ' + value + '%'
                + ' | cord=' + bd.cordScore
                + ' charm=' + bd.charmScore
                + ' keychain=' + bd.keychainScore);
        } else {
            cc.log('[CordRoundGame] Match: ' + value + '%');
        }
    }

    /** Gọi khi xong xếp charm — chỉ ẩn preview, chưa tính % cuối. */
    finishBraceletPhase(): void {
        this.hideDefaultBraceletPreview();
    }

    /** Gọi khi kết thúc game — tính % đầy đủ và hiển thị. */
    finishAndCompare(playerKeychainIndex: number): number {
        this.hideDefaultBraceletPreview();
        const breakdown = this.compareFull(playerKeychainIndex);
        this.showMatchResult(breakdown.total, breakdown);
        return breakdown.total;
    }

    update(dt: number) {
        if (!this.isActive) return;

        for (let i = 0; i < this.cordCharms.length; i++) {
            this.updateCharmSlide(this.cordCharms[i], dt);
        }
    }

    lateUpdate(dt: number) {
        if (!this.isActive) return;

        for (let i = 0; i < this.cordCharms.length; i++) {
            this.postPhysicsCharmSlideFix(this.cordCharms[i], dt);
            this.constrainCharmHang(this.cordCharms[i], dt);
        }
    }
}
