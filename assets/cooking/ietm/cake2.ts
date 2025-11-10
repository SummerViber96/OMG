
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null
    @property(cc.Node)
    main: cc.Node = null
    private selectedItem: cc.Node = null;
    @property(cc.Node)
    palet: cc.Node = null;
    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    gamePlay = null;

    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("CC2")

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    onTouchStart(event: cc.Event.EventTouch) {
        if (this.selectedItem) return
        // cc.audioEngine.play(this.gamePlay.clickSound, false, 2);
        this.selectedItem = cc.instantiate(this.itemPrefab);
        // let pos = event.getLocation()

        // const touchPos = this.main.convertToNodeSpaceAR(event.getLocation());
        // this.selectedItem.setPosition(touchPos);
        this.main.addChild(this.selectedItem);
        // this.main.guideDrag.active = false;
        // this.node.opacity = 0
    }

    onTouchMove(event: cc.Event.EventTouch) {

        let screenPos = event.getLocation();

        let worldPos = this.gamePlay.camera.getScreenToWorldPoint(screenPos);

        // Chuyển world → local (node main)
        let localPos = this.main.convertToNodeSpaceAR(worldPos);

        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
    }

    onTouchEnd(event: cc.Event.EventTouch) {
        let screenPos = event.getLocation();

        let worldPos = this.gamePlay.camera.getScreenToWorldPoint(screenPos);

        // Chuyển world → local (node main)
        let localPos = this.main.convertToNodeSpaceAR(worldPos);

        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
        this.checkOnPlate(localPos)
    }
    checkOnPlate(localPos) {
        if (localPos.sub(this.palet.position).mag() <= 130) {
            this.selectedItem.position = cc.v3(0, -228)
            this.gamePlay.cusComp.happy()
            this.gamePlay.isCake = true;
            this.gamePlay.cake = this.selectedItem
            console.log(this.selectedItem)
        }
    }
    xitHong() {
        this.anim.setAnimation(0, "cake2", false)
    }
    xitkem() {
        this.anim.setAnimation(0, "cake1", false)
    }
    xitQua() {
        this.anim.setAnimation(0, "cake8", false)

    }
    xitQuaKem() {
        console.log("xit qua kenm")
        this.anim.setAnimation(0, "cake5", false)

    }
    // update (dt) {}
}
