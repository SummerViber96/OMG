

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    spoon: cc.Node = null;
    @property(cc.Node)
    listBoxNode: cc.Node = null;
    @property(cc.Node)
    plate: cc.Node = null
    @property(cc.Node)
    localPos: cc.Node = null;
    @property(cc.Prefab)
    listCharms: cc.Prefab[] = [];
    @property(cc.Node)
    notiFull: cc.Node = null;
    @property(cc.Node)
    btnOk: cc.Node = null
    @property(cc.Node)
    hand3: cc.Node = null;
    @property(cc.Node)
    charmHind: cc.Node = null;
    @property(cc.AudioClip)
    soundXuc: cc.AudioClip = null
    @property(cc.AudioClip)
    soundDo: cc.AudioClip = null
    @property(cc.Node)
    linkToStore: cc.Node = null
    charms = []
    isTargetbox = null;
    onLoad() {

    }
    start() {

        for (let i = 0; i < this.listBoxNode.childrenCount; i++) {
            let child = this.listBoxNode.children[i];
            this.charms.push(child);
        }
        const touchNode = cc.Canvas.instance.node;
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

    }
    OffEvent() {
        const touchNode = cc.Canvas.instance.node;
        touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    onTouchStart(event) {
        if (this.isTargetbox) return;
        let pos = event.getLocation()
        this.checkSpoon(pos)

    }
    isCountGame = 0
    checkSpoon(pos) {
        pos = this.listBoxNode.convertToNodeSpaceAR(pos)
        let box = this.getBox(pos)
        if (box) {
            this.btnOk.active = true;
            this.isTargetbox = box
            this.spoon.active = true;
            this.spoon.getComponent(cc.Animation).play()
            this.spoon.position = pos.add(cc.v3(-30, 50))
            let boxComp = box.getComponent("BoxCharm");
            this.spoon.getComponent("Spoon").setCharms(boxComp.tag)
            this.hand3.active = false;
            cc.audioEngine.play(this.soundXuc, false, 1)

            // this.setHind(boxComp.tag)

        }
    }

    getBox(pos) {
        for (let i = 0; i < this.charms.length; i++) {
            let posCharm = this.charms[i].position;
            if (pos.sub(posCharm).mag() <= 100) {
                return this.charms[i];
            }
        }
        return null;
    }
    onTouchMove(event) {
        let pos = event.getLocation();
        pos = this.listBoxNode.convertToNodeSpaceAR(pos);
        if (this.isTargetbox) {
            this.spoon.position = pos.add(cc.v3(-30, 50))
        }
        else {

        }
    }
    onTouchEnd(event) {
        let pos = event.getLocation();
        pos = this.listBoxNode.convertToNodeSpaceAR(pos);
        let check = this.checkPlate(pos)
        if (check == false) {
            this.clearSpoon()

        }
        else {
            this.dropCharms()
            this.isCountGame++

            // if (this.isCountGame == 2) {
            //     this.linkToStore.active = true
            // }
        }
    }
    checkPlate(pos) {
        let check = pos.sub(this.plate.position).mag()
        if (check <= 300) {
            return true
        }
        return false
    }
    clearSpoon() {
        this.isTargetbox = null;
        this.spoon.getComponent("Spoon").off()
    }
    totalCharm = 0
    dropCharms() {
        if (!this.isTargetbox || !this.localPos) return;
        cc.audioEngine.play(this.soundDo, false, 1)
        const tag = this.isTargetbox.getComponent("BoxCharm").tag;
        const count = this.getCharmCount(tag);
        const surface = this.getPlateSurface();
        const centerPos = surface && surface !== this.plate
            ? cc.v3(surface.x, surface.y + 80, 0)
            : cc.v3(0, 80, 0);
        const dropDelay = 0.06;

        for (let i = 0; i < count; i++) {
            this.scheduleOnce(() => {
                if (this.totalCharm <= 40) {
                    this.spawnCharmWithDrop(i, tag, centerPos);
                }
                else {
                    this.showNotiFull()
                }
            }, i * dropDelay);
        }

        // this.scheduleOnce(() => {
        this.clearSpoon();
        // this.isTargetbox.getComponent("BoxCharm").getCharm();
        // }, count * dropDelay + 0.1);
    }

    private getCharmCount(tag: number): number {
        const counts = [4, 5, 3, 5, 5, 3, 5, 5, 5, 2, 2, 1, 1, 4, 7, 7, 8, 8, 8, 8, 2, 2, 6, 6, 6, 6,1,1,2,2];
        return counts[tag] || 0;
    }

    /** Node sprite khay trắng (con của this.plate / khay). */
    private getPlateSurface(): cc.Node {
        if (!this.plate) return null;
        return this.plate.getChildByName('plate') || this.plate;
    }

    /** Offset slot từ localPos. */
    private getLocalPosOffset(index: number): cc.Vec3 {
        if (!this.localPos || !this.localPos.children[index]) {
            return cc.v3(0, 0, 0);
        }
        const marker = this.localPos.children[index];
        return cc.v3(marker.x, marker.y, 0);
    }

    /** Vị trí trên mặt plate (local của khay). */
    private getTargetPosition(index: number): cc.Vec3 {
        const surface = this.getPlateSurface();
        const offset = this.getLocalPosOffset(index);
        if (surface && surface !== this.plate) {
            return cc.v3(surface.x + offset.x, surface.y + offset.y, 0);
        }
        if (this.localPos && this.localPos.children[index]) {
            const worldPos = this.localPos.children[index].convertToWorldSpaceAR(cc.v2(0, 0));
            return this.plate.convertToNodeSpaceAR(worldPos);
        }
        return offset;
    }

    private spawnCharmWithDrop(index: number, tag: number, centerPos: cc.Vec3) {
        const charm = this.createCharmOnPlate(tag, index);
        if (!charm) return;

        const targetPos = this.getTargetPosition(index);
        const spread = cc.v3(
            (Math.random() - 0.5) * 24,
            (Math.random() - 0.5) * 24,
            0
        );
        charm.setPosition(centerPos.add(spread));

        const rigidBody = charm.getComponent(cc.RigidBody);
        if (!rigidBody) return;

        const dir = cc.v2(targetPos.x - charm.x, targetPos.y - charm.y);
        const dist = dir.mag();
        if (dist > 0) {
            dir.normalizeSelf();
            const speed = Math.min(dist * 2.8, 650);
            rigidBody.linearVelocity = dir.mul(speed);
        }
        rigidBody.angularVelocity = (Math.random() - 0.5) * 18;
    }

    /**
     * Spawn sẵn charm trên khay để kéo thả ngay (không cần xúc spoon).
     * @param tags danh sách tag charm; null = vài loại mặc định
     */
    spawnCharmsOnPlate(tags: number[] = null) {
        if (!this.plate || !this.listCharms || this.listCharms.length === 0) {
            cc.warn('[CharmGame] Thiếu plate hoặc listCharms — không spawn được.');
            return;
        }

        const list = tags && tags.length > 0
            ? tags
            : [0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 6, 6, 7, 8, 7, 5, 9, 5, 5,8,8];

        const slotCount = this.localPos ? this.localPos.childrenCount : 0;
        const surface = this.getPlateSurface();

        for (let i = 0; i < list.length; i++) {
            if (this.totalCharm > 40) break;
            const tag = list[i];
            if (tag == null || !this.listCharms[tag]) continue;

            const colorIndex = slotCount > 0 ? (i % slotCount) : i;
            const charm = this.createCharmOnPlate(tag, colorIndex);
            if (!charm) continue;

            let pos: cc.Vec3;
            if (slotCount > 0) {
                pos = this.getTargetPosition(i % slotCount);
            } else if (surface && surface !== this.plate) {
                const cols = 5;
                pos = cc.v3(
                    surface.x + (i % cols - 2) * 90,
                    surface.y + 40 - Math.floor(i / cols) * 80,
                    0
                );
            } else {
                pos = cc.v3((i % 5 - 2) * 70, 40 - Math.floor(i / 5) * 70, 0);
            }

            const spread = cc.v3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                0
            );
            pos = pos.add(cc.v3(0, 0))
            charm.setPosition(pos.add(spread));

            const body = charm.getComponent(cc.RigidBody);
            if (body) {
                body.linearVelocity = cc.v2(0, 0);
                body.angularVelocity = 0;
                body.syncPosition(true);
            }
        }
    }

    /** Spawn 1 loại charm đủ số lượng như khi xúc box (theo tag). */
    spawnCharmBoxOnPlate(tag: number) {
        const count = this.getCharmCount(tag);
        const tags: number[] = [];
        for (let i = 0; i < count; i++) {
            tags.push(tag);
        }
        this.spawnCharmsOnPlate(tags);
    }

    private createCharmOnPlate(tag: number, colorIndex: number): cc.Node {
        const prefab = this.listCharms[tag];
        if (!prefab) {
            cc.warn('[CharmGame] Không có prefab charm tag=' + tag);
            return null;
        }

        const charm = cc.instantiate(prefab);
        charm.parent = this.plate;
        charm.setSiblingIndex(this.plate.childrenCount - 1);

        const item = charm.getComponent('CharmItem') as any;
        if (item) {
            const maxColor = item.listImg && item.listImg.length > 0
                ? item.listImg.length
                : 1;
            item.loadIMG(colorIndex % maxColor);
            item.tag = tag;
        }

        const rigidBody = charm.getComponent(cc.RigidBody);
        if (rigidBody) {
            rigidBody.enabled = true;
            rigidBody.awake = true;
            rigidBody.active = true;
            rigidBody.type = cc.RigidBodyType.Dynamic;
            rigidBody.gravityScale = 0;
            rigidBody.linearVelocity = cc.v2(0, 0);
            rigidBody.angularVelocity = 0;
            rigidBody.syncPosition(true);
            rigidBody.syncRotation(true);
        }

        // Collider bật để nằm trên khay; khi kéo CordRoundGame sẽ tắt.
        const collider = charm.getComponent(cc.PhysicsPolygonCollider);
        if (collider) {
            collider.enabled = true;
        }

        this.totalCharm++;
        return charm;
    }
    isDelay = false
    showNotiFull() {
        if (this.isDelay) return;
        this.isDelay = true;
        this.scheduleOnce(() => {
            this.isDelay = false;
        }, 1)
        this.notiFull.active = true;
        this.notiFull.getComponent(cc.Animation).play()
    }
    btn_ok() {
        // this.notiFull.active = false;
        // this.btnOk.active = false;
    }
    // update (dt) {}
}
