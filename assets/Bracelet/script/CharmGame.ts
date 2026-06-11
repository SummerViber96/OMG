

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    spoon: cc.Node = null;
    @property(cc.Node)
    listBoxNode: cc.Node = null;
    @property(cc.Node)
    plate: cc.Node = null
    charms = []
    isTargetbox = null;
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
    onTouchStart(event) {
        if (this.isTargetbox) return;
        let pos = event.getLocation()
        this.checkSpoon(pos)

    }
    checkSpoon(pos) {
        pos = this.listBoxNode.convertToNodeSpaceAR(pos)
        let box = this.getBox(pos)
        if (box) {
            this.isTargetbox = box
            this.spoon.active = true;
            this.spoon.getComponent(cc.Animation).play()
            this.spoon.position = pos.add(cc.v3(-30, 50))
            let boxComp = box.getComponent("BoxCharm");
            this.spoon.getComponent("Spoon").setCharms(boxComp.tag)

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
    dropCharms() {
        let tag=this.isTargetbox.getComponent()

    }
    // update (dt) {}
}
