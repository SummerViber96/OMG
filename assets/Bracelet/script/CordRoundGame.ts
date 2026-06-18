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
    settleSpeed: number = 22;

    @property
    pivotColliderRadius: number = 8;

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
    @property(cc.Node)
    btnOk: cc.Node = null;
    @property(cc.Node)
    hand3: cc.Node = null;

    localBox = null
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
        this.bindTouch();
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
        this.draggingCharm.setPosition(this.getMainLocalPos(event.getLocation()));
    }

    private onTouchEnd(event: cc.Event.EventTouch) {
        if (!this.isActive || event.getID() !== this.activeTouchId || !this.draggingCharm) return;

        const charm = this.draggingCharm;
        const charmWorld = charm.parent.convertToWorldSpaceAR(charm.position);
        const dropAnchor = this.getDropAnchor(charmWorld);
        if (dropAnchor) {
            this.threadCharmOntoCord(charm, dropAnchor);
            this.btnOk.active = true;
            this.hand3.active = false;
        } else {
            this.resetDraggedCharm(charm);
        }

        this.draggingCharm = null;
        this.activeTouchId = -1;
        if (this.isTargetHind) {
            this.isTargetHind.active = false;
            this.isTargetHind = null
        }
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

        const anchorPos = dropAnchor.cordPos;
        const startIndex = this.findNearestPathIndex(path.points, anchorPos);
        const pathDir = this.pickPathDirection(path.points, startIndex, dropAnchor.side);
        const startPose = this.getPoseOnPath(path.points, startIndex, pathDir, 0);

        const pivot = this.setupCharmHangRig(charm);
        pivot.parent = this.charmLayer;
        pivot.setPosition(cc.v3(startPose.x, startPose.y, 0));
        charm.angle = this.getLocalBoxHangAngle(dropAnchor.side);
        charm.children[0].scale = 0.8;
        const pivotBody = pivot.getComponent(cc.RigidBody);
        if (pivotBody) {
            pivotBody.gravityScale = 1;
            pivotBody.allowSleep = false;
            pivotBody.awake = true;
            pivotBody.active = true;

            const tangent = this.getTangentAtIndex(path.points, startIndex, pathDir);
            pivotBody.linearVelocity = tangent.mul(90);
        }

        const charmBody = charm.getComponent(cc.RigidBody);
        if (charmBody) {
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
        pivotBody.linearDamping = 0.12;
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
        charmBody.type = cc.RigidBodyType.Dynamic;
        charmBody.gravityScale = 1;
        charmBody.linearDamping = 0.05;
        charmBody.angularDamping = 0.12;
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
            let vx = body.linearVelocity.x + toPathX * this.pathPullStrength * dt;
            let vy = body.linearVelocity.y + toPathY * this.pathPullStrength * dt;
            vx += tangent.x * this.slideGravity * dt;
            vy += tangent.y * this.slideGravity * dt;

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
        if (speed < this.settleSpeed) {
            state.stillTime += dt;
            if (state.stillTime >= 0.4) {
                state.settled = true;
            }
        } else {
            state.stillTime = 0;
        }

        if (state.settled) {
            body.gravityScale = 0;
            body.linearDamping = 1.2;
            body.angularDamping = 0.8;
            body.allowSleep = true;

            const holdX = (onPath.nearest.x - pos.x) * this.pathPullStrength * dt * 0.35;
            const holdY = (onPath.nearest.y - pos.y) * this.pathPullStrength * dt * 0.35;
            body.linearVelocity = cc.v2(
                body.linearVelocity.x + holdX,
                body.linearVelocity.y + holdY
            );
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

    private getDropAnchor(worldPos: cc.Vec2): DropAnchor | null {
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

        if (nearLeft || nearRight) {
            if (nearLeft && nearRight) {
                return distLeft <= distRight
                    ? { side: 'left', cordPos: leftPos }
                    : { side: 'right', cordPos: rightPos };
            }
            return nearLeft
                ? { side: 'left', cordPos: leftPos }
                : { side: 'right', cordPos: rightPos };
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
            ? { side: 'left', cordPos: leftPos }
            : { side: 'right', cordPos: rightPos };
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

    update(dt: number) {
        if (!this.isActive) return;

        for (let i = 0; i < this.cordCharms.length; i++) {
            this.updateCharmSlide(this.cordCharms[i], dt);
        }
    }
}
