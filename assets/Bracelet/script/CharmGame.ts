

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
    linkToGame: cc.Node = null
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
    isCountGame = 0;
    checkSpoon(pos) {
        pos = this.listBoxNode.convertToNodeSpaceAR(pos)
        let box = this.getBox(pos)
        if (box) {
            this.isCountGame++

            if (this.isCountGame == 3) {
                this.linkToGame.active = true;
            }
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
        const centerPos = cc.v3(0, 80, 0);
        const dropDelay = 0.06;

        for (let i = 0; i < count; i++) {
            this.scheduleOnce(() => {
                if (this.totalCharm <= 40) {
                    this.totalCharm++;
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
        const counts = [4, 5, 3, 5, 5, 3, 5, 5, 5];
        return counts[tag] || 0;
    }

    private getTargetPosition(index: number): cc.Vec3 {
        const marker = this.localPos.children[index];
        if (!marker) return cc.v3(0, 0, 0);
        const worldPos = marker.convertToWorldSpaceAR(cc.v2(0, 0));
        return this.plate.convertToNodeSpaceAR(worldPos);
    }

    private spawnCharmWithDrop(index: number, tag: number, centerPos: cc.Vec3) {
        const charm = cc.instantiate(this.listCharms[tag]);
        charm.parent = this.plate;
        charm.getComponent("CharmItem").loadIMG(index);
        charm.getComponent("CharmItem").tag = tag
        const targetPos = this.getTargetPosition(index);
        const spread = cc.v3(
            (Math.random() - 0.5) * 24,
            (Math.random() - 0.5) * 24,
            0
        );
        charm.setPosition(centerPos.add(spread));

        const rigidBody = charm.getComponent(cc.RigidBody);
        if (!rigidBody) return;

        rigidBody.awake = true;
        rigidBody.active = true;

        const dir = cc.v2(targetPos.x - charm.x, targetPos.y - charm.y);
        const dist = dir.mag();
        if (dist > 0) {
            dir.normalizeSelf();
            const speed = Math.min(dist * 2.8, 650);
            rigidBody.linearVelocity = dir.mul(speed);
        }
        rigidBody.angularVelocity = (Math.random() - 0.5) * 18;
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
