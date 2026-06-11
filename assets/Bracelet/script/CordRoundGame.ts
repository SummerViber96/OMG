const { ccclass, property } = cc._decorator;

type CordSide = 'left' | 'right';

interface CordPathData {
    points: cc.Vec2[];
    totalLength: number;
}

interface CordCharmState {
    node: cc.Node;
    settled: boolean;
    side: CordSide;
    pathStartIndex: number;
    pathDir: number;
    pathDistance: number;
    pathSpeed: number;
}

interface DropAnchor {
    node: cc.Node;
    side: CordSide;
}

@ccclass
export default class CordRoundGame extends cc.Component {

    @property(cc.Node)
    CordRoundList: cc.Node = null;

    @property(cc.Node)
    plate: cc.Node = null;

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
    charmSpacing: number = 42;

    private activeCord: cc.Node = null;
    private cordPaths: Map<cc.Node, CordPathData> = new Map();
    private preparedCords: cc.Node[] = [];
    private leftAnchor: cc.Node = null;
    private rightAnchor: cc.Node = null;
    private charmLayer: cc.Node = null;
    private cordCharms: CordCharmState[] = [];
    private draggingCharm: cc.Node = null;
    private dragOriginParent: cc.Node = null;
    private dragOriginPos: cc.Vec3 = null;
    private dragOriginSiblingIndex: number = 0;
    private activeTouchId: number = -1;
    private isActive: boolean = false;
    private touchBound: boolean = false;

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

        cc.director.getPhysicsManager().gravity = cc.v2(0, 0);
        for (let i = 0; i < this.CordRoundList.childrenCount; i++) {
            this.prepareCord(this.CordRoundList.children[i]);
        }
        this.ensureCharmLayer();
        this.bindTouch();
    }

    /** Đọc PolygonCollider, tự gán physics vòng, lưu path để charm trượt theo. */
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
    }

    private onTouchMove(event: cc.Event.EventTouch) {
        if (!this.isActive || event.getID() !== this.activeTouchId || !this.draggingCharm) return;
        this.draggingCharm.setPosition(this.getMainLocalPos(event.getLocation()));
    }

    private onTouchEnd(event: cc.Event.EventTouch) {
        if (!this.isActive || event.getID() !== this.activeTouchId || !this.draggingCharm) return;

        const charm = this.draggingCharm;
        const charmWorld = charm.parent.convertToWorldSpaceAR(charm.position);
        const dropAnchor = this.getDropAnchor(charmWorld);
        if (dropAnchor) {
            this.threadCharmOntoCord(charm, dropAnchor);
        } else {
            this.resetDraggedCharm(charm);
        }

        this.draggingCharm = null;
        this.activeTouchId = -1;
    }

    private startDrag(charm: cc.Node, screenPos: cc.Vec2) {
        this.draggingCharm = charm;
        this.dragOriginParent = charm.parent;
        this.dragOriginPos = charm.position.clone();
        this.dragOriginSiblingIndex = charm.getSiblingIndex();

        const body = charm.getComponent(cc.RigidBody);
        if (body) {
            body.linearVelocity = cc.v2(0, 0);
            body.angularVelocity = 0;
            body.gravityScale = 0;
            body.type = cc.RigidBodyType.Kinematic;
            body.awake = true;
        }

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

        const body = charm.getComponent(cc.RigidBody);
        if (body) {
            body.type = cc.RigidBodyType.Dynamic;
            body.gravityScale = 0;
            body.linearVelocity = cc.v2(0, 0);
            body.angularVelocity = 0;
        }
    }

    private threadCharmOntoCord(charm: cc.Node, dropAnchor: DropAnchor) {
        const path = this.cordPaths.get(this.activeCord);
        if (!path) return;

        const anchorPos = cc.v2(dropAnchor.node.x, dropAnchor.node.y);
        const startIndex = this.findNearestPathIndex(path.points, anchorPos);
        const pathDir = this.pickPathDirection(path.points, startIndex, dropAnchor.side);
        const startPose = this.getPoseOnPath(path.points, startIndex, pathDir, 0);

        charm.parent = this.charmLayer;
        charm.setPosition(cc.v3(startPose.x, startPose.y, 0));
        charm.angle = startPose.angle;

        const body = charm.getComponent(cc.RigidBody);
        if (body) {
            body.type = cc.RigidBodyType.Kinematic;
            body.gravityScale = 0;
            body.linearVelocity = cc.v2(0, 0);
            body.angularVelocity = 0;
            body.awake = true;
        }

        this.cordCharms.push({
            node: charm,
            settled: false,
            side: dropAnchor.side,
            pathStartIndex: startIndex,
            pathDir,
            pathDistance: 0,
            pathSpeed: 60,
        });
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

    private getBlockedDistance(state: CordCharmState): number | null {
        let minBlock: number | null = null;

        for (let i = 0; i < this.cordCharms.length; i++) {
            const other = this.cordCharms[i];
            if (other === state || other.node === state.node) continue;
            if (other.side !== state.side) continue;

            const gap = other.pathDistance - state.pathDistance;
            if (gap > 0 && gap < this.charmSpacing) {
                const blockAt = other.pathDistance - this.charmSpacing;
                if (minBlock === null || blockAt < minBlock) {
                    minBlock = Math.max(0, blockAt);
                }
            }
        }

        return minBlock;
    }

    private updateCharmSlide(state: CordCharmState, dt: number) {
        if (state.settled) return;

        state.pathSpeed += this.slideGravity * dt;
        state.pathSpeed = Math.min(state.pathSpeed, this.maxSlideSpeed);

        let nextDist = state.pathDistance + state.pathSpeed * dt;
        const maxDist = this.getMaxSlideDistance(state);
        nextDist = Math.min(nextDist, maxDist);

        const blocked = this.getBlockedDistance(state);
        if (blocked !== null) {
            nextDist = Math.min(nextDist, blocked);
            state.pathSpeed = 0;
            state.settled = true;
        } else if (nextDist >= maxDist - 1) {
            state.pathSpeed = 0;
            state.settled = true;
        }

        state.pathDistance = nextDist;

        const path = this.cordPaths.get(this.activeCord);
        if (!path) return;

        const pose = this.getPoseOnPath(
            path.points,
            state.pathStartIndex,
            state.pathDir,
            state.pathDistance
        );
        state.node.setPosition(cc.v3(pose.x, pose.y, 0));
        state.node.angle = pose.angle;
    }

    private getDropAnchor(worldPos: cc.Vec2): DropAnchor | null {
        if (!this.activeCord || !this.leftAnchor || !this.rightAnchor) return null;

        const local = this.activeCord.convertToNodeSpaceAR(worldPos);
        const leftPos = this.leftAnchor.position;
        const rightPos = this.rightAnchor.position;

        const distLeft = cc.v2(local.x - leftPos.x, local.y - leftPos.y).mag();
        const distRight = cc.v2(local.x - rightPos.x, local.y - rightPos.y).mag();
        const nearLeft = distLeft <= this.entryDetectRadius;
        const nearRight = distRight <= this.entryDetectRadius;

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

        const topY = Math.max(leftPos.y, rightPos.y) - 20;
        const minX = Math.min(leftPos.x, rightPos.x) - 30;
        const maxX = Math.max(leftPos.x, rightPos.x) + 30;
        const inTopZone = local.y >= topY - this.entryDetectRadius
            && local.x >= minX
            && local.x <= maxX;

        if (!inTopZone) return null;

        const useLeft = local.x < (leftPos.x + rightPos.x) * 0.5;
        return useLeft
            ? { node: this.leftAnchor, side: 'left' }
            : { node: this.rightAnchor, side: 'right' };
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
        return this.cordCharms.some(state => state.node === charm);
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

    update(dt: number) {
        if (!this.isActive) return;

        for (let i = 0; i < this.cordCharms.length; i++) {
            this.updateCharmSlide(this.cordCharms[i], dt);
        }
    }
}
