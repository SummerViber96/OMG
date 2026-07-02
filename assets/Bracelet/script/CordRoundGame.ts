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
    slideGravity: number = 320;

    @property
    maxSlideSpeed: number = 280;

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

    @property
    hangSwingLimit: number = 32;

    @property
    hangOutwardStiffness: number = 14;

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
        if (dropAnchor) {
            cc.audioEngine.play(this.soundDrop, false, 1)
            this.hideDefaultBraceletPreview();
            this.threadCharmOntoCord(charm, dropAnchor);
            this.btnOk.active = true;
            this.hand3.active = false;
        } else {
            this.resetDraggedCharm(charm);
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

    private threadCharmOntoCord(charm: cc.Node, dropAnchor: DropAnchor) {
        if (!this.canDropOnSide(dropAnchor.side, charm)) return;

        const path = this.cordPaths.get(this.activeCord);
        if (!path) return;

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
            pivotBody.linearVelocity = tangent.mul(75);
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
        pivotBody.linearDamping = 0.22;
        pivotBody.angularDamping = 1;
        pivotBody.fixedRotation = true;
        pivotBody.allowSleep = false;

        let pivotCol = pivot.getComponent(cc.PhysicsCircleCollider);
        if (!pivotCol) {
            pivotCol = pivot.addComponent(cc.PhysicsCircleCollider);
        }
        pivotCol.radius = this.pivotColliderRadius;
        pivotCol.friction = 0.3;
        pivotCol.restitution = 0.05;
        pivotCol.enabled = true;

        let charmBody = charm.getComponent(cc.RigidBody);
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
            collider.friction = 0.25;
            collider.restitution = 0.08;
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

    private getMaxSlideDistance(state: CordCharmState): number {
        const path = this.cordPaths.get(this.activeCord);
        if (!path) return 0;
        return path.totalLength * 0.52;
    }

    private updateCharmSlide(state: CordCharmState, dt: number) {
        const body = state.pivot.getComponent(cc.RigidBody);
        const path = this.cordPaths.get(this.activeCord);
        if (!body || !path) return;

        const pos = cc.v2(state.pivot.x, state.pivot.y);
        const onPath = this.getNearestOnPath(path.points, pos);
        const tangent = this.getTangentAtIndex(path.points, onPath.index, state.pathDir);

        state.pathDistance = this.getDistanceAlongPath(
            path.points,
            state.pathStartIndex,
            state.pathDir,
            pos
        );

        if (!state.settled) {
            const toPathX = onPath.nearest.x - pos.x;
            const toPathY = onPath.nearest.y - pos.y;
            const tx = tangent.x;
            const ty = tangent.y;
            const nx = -ty;
            const ny = tx;

            const vel = body.linearVelocity;
            const vTangent = vel.x * tx + vel.y * ty;
            const vNormal = vel.x * nx + vel.y * ny;
            const offsetNormal = toPathX * nx + toPathY * ny;

            let newVTangent = vTangent + this.slideGravity * dt;
            let newVNormal = vNormal
                + offsetNormal * this.pathPullStrength * dt
                - vNormal * this.pathPullDamping * dt;

            let vx = tx * newVTangent + nx * newVNormal;
            let vy = ty * newVTangent + ny * newVNormal;

            const speed = Math.sqrt(vx * vx + vy * vy);
            if (speed > this.maxSlideSpeed) {
                const scale = this.maxSlideSpeed / speed;
                vx *= scale;
                vy *= scale;
            }
            body.linearVelocity = cc.v2(vx, vy);

            if (state.pathDistance >= this.getMaxSlideDistance(state) - 2) {
                state.settled = true;
            }
        }

        const speed = body.linearVelocity.mag();
        const minSlide = Math.min(24, this.getMaxSlideDistance(state) * 0.12);
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

            const toPathX = onPath.nearest.x - pos.x;
            const toPathY = onPath.nearest.y - pos.y;
            const holdDamp = this.pathPullDamping * 1.5;
            body.linearVelocity = cc.v2(
                body.linearVelocity.x + toPathX * this.pathPullStrength * dt * 0.35 - body.linearVelocity.x * holdDamp * dt,
                body.linearVelocity.y + toPathY * this.pathPullStrength * dt * 0.35 - body.linearVelocity.y * holdDamp * dt
            );

            const offset = Math.sqrt(toPathX * toPathX + toPathY * toPathY);
            if (offset < 1.5 && body.linearVelocity.mag() < 8) {
                body.linearVelocity = cc.v2(0, 0);
                state.pivot.setPosition(cc.v3(onPath.nearest.x, onPath.nearest.y, 0));
                body.syncPosition(true);
            }
        }
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

    private getSideMaxSlideDistance(): number {
        const path = this.cordPaths.get(this.activeCord);
        if (!path) return 0;
        return path.totalLength * 0.52;
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
        return this.measurePathDistanceFromEntry(state.side, pos, state.pathDir);
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

    private getMinPathDistanceOnSide(side: CordSide): number {
        const onSide = this.getCharmsOnSide(side);
        if (onSide.length === 0) return Number.MAX_VALUE;

        let minDist = Number.MAX_VALUE;
        for (let i = 0; i < onSide.length; i++) {
            const d = this.getCharmPathDistance(onSide[i]);
            if (d < minDist) {
                minDist = d;
            }
        }
        return minDist;
    }

    private getCharmSlotSpacing(charm: cc.Node): number {
        const item = this.getCharmItemComp(charm);
        if (item && typeof item.slotSpacing === 'number') {
            return item.slotSpacing;
        }
        return this.charmSlotSpacing;
    }

    private canDropOnSide(side: CordSide, charm: cc.Node): boolean {
        const onSide = this.getCharmsOnSide(side);
        if (onSide.length === 0) return true;

        return this.getMinPathDistanceOnSide(side) >= this.getCharmSlotSpacing(charm);
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
        const leftPos = anchors.left;
        const rightPos = anchors.right;

        const distLeft = cc.v2(local.x - leftPos.x, local.y - leftPos.y).mag();
        const distRight = cc.v2(local.x - rightPos.x, local.y - rightPos.y).mag();
        const nearLeft = distLeft <= this.entryDetectRadius;
        const nearRight = distRight <= this.entryDetectRadius;
        const preferLeft = local.x < (leftPos.x + rightPos.x) * 0.5;
        const preferSide: CordSide = preferLeft ? 'left' : 'right';

        if (preferredSide && this.canDropOnSide(preferredSide, charm)) {
            return {
                side: preferredSide,
                cordPos: preferredSide === 'left' ? leftPos : rightPos,
            };
        }

        if (preferredSide && !this.canDropOnSide(preferredSide, charm)) {
            const alt: CordSide = preferSide;
            if (alt !== preferredSide && this.canDropOnSide(alt, charm)) {
                return {
                    side: alt,
                    cordPos: alt === 'left' ? leftPos : rightPos,
                };
            }
        }

        if (nearLeft || nearRight) {
            const side = this.pickAvailableSide(nearLeft, nearRight, distLeft, distRight, charm);
            if (side) {
                return {
                    side,
                    cordPos: side === 'left' ? leftPos : rightPos,
                };
            }
        }

        const topY = Math.max(leftPos.y, rightPos.y) - 20;
        const minX = Math.min(leftPos.x, rightPos.x) - 30;
        const maxX = Math.max(leftPos.x, rightPos.x) + 30;
        const inTopZone = local.y >= topY - this.entryDetectRadius
            && local.x >= minX
            && local.x <= maxX;

        if (!inTopZone) return null;

        const side = this.pickAvailableSide(true, true, distLeft, distRight, charm, preferLeft);
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

        if (nearLeft || nearRight) {
            side = this.pickAvailableSide(nearLeft, nearRight, distLeft, distRight, charm);
        } else {
            const cordLocal = this.activeCord.convertToNodeSpaceAR(
                main.convertToWorldSpaceAR(cc.v2(mainPos.x, mainPos.y))
            );
            const leftPos = anchors.left;
            const rightPos = anchors.right;
            const topY = Math.max(leftPos.y, rightPos.y) - 20;
            const minX = Math.min(leftPos.x, rightPos.x) - 30;
            const maxX = Math.max(leftPos.x, rightPos.x) + 30;
            const inTopZone = cordLocal.y >= topY - this.entryDetectRadius
                && cordLocal.x >= minX
                && cordLocal.x <= maxX;

            if (inTopZone) {
                const preferLeft = cordLocal.x < (leftPos.x + rightPos.x) * 0.5;
                side = this.pickAvailableSide(true, true, distLeft, distRight, charm, preferLeft);
            }
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
            this.constrainCharmHang(this.cordCharms[i], dt);
        }
    }
}
