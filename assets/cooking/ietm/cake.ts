
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
        if (this.gamePlay.isPhase2) return;
        if (this.selectedItem) return
        // cc.audioEngine.play(this.gamePlay.clickSound, false, 2);
        this.selectedItem = cc.instantiate(this.itemPrefab);
        // let pos = event.getLocation()

        // const touchPos = this.main.convertToNodeSpaceAR(event.getLocation());
        // this.selectedItem.setPosition(touchPos);
        this.main.addChild(this.selectedItem);
        let screenPos = event.getLocation();

        let worldPos = this.gamePlay.camera.getScreenToWorldPoint(screenPos);

        // Chuyển world → local (node main)
        let localPos = this.main.convertToNodeSpaceAR(worldPos);

        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
        // this.main.guideDrag.active = false;
        // this.node.opacity = 0
    }

    onTouchMove(event: cc.Event.EventTouch) {
        if (this.gamePlay.isPhase2) return;

        let screenPos = event.getLocation();

        let worldPos = this.gamePlay.camera.getScreenToWorldPoint(screenPos);

        // Chuyển world → local (node main)
        let localPos = this.main.convertToNodeSpaceAR(worldPos);

        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
    }

    onTouchEnd(event: cc.Event.EventTouch) {
        if (this.gamePlay.isPhase2) return;

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
            if (this.gamePlay.isPhase3 == true) {
                this.selectedItem.position = cc.v3(0, -150)
                this.gamePlay.isTang = 2
                this.gamePlay.listHand.children[2].active = true

            }
            else {
                this.selectedItem.position = cc.v3(0, -228)
                this.gamePlay.listHand.children[1].active = true
            }
            this.gamePlay.listHand.children[0].active = false
            this.gamePlay.cusComp.happy()
            this.gamePlay.isCake = true;
            this.gamePlay.cake = this.selectedItem
            this.selectedItem = null
            this.gamePlay.isPhase2 = true
        }
        else {
            let child = this.selectedItem
            child.destroy();
            this.selectedItem = null

        }
    }
    tutOnPlate() {
        if(this.selectedItem){
        this.selectedItem.destroy()

        }
        this.selectedItem = cc.instantiate(this.itemPrefab);

        this.main.addChild(this.selectedItem);
        if (this.gamePlay.isPhase3 == true) {
            this.selectedItem.position = cc.v3(0, -150)
            this.gamePlay.isTang = 2
            this.gamePlay.listHand.children[2].active = true
            this.gamePlay.setTut4()

        }
        else {
            this.selectedItem.position = cc.v3(0, -228)
            this.gamePlay.listHand.children[1].active = true
            this.gamePlay.setTut2()

        }
        this.gamePlay.listHand.children[0].active = false
        this.gamePlay.cusComp.happy()
        this.gamePlay.isCake = true;
        this.gamePlay.cake = this.selectedItem
        this.selectedItem = null
        this.gamePlay.isPhase2 = true

    }


    xitHong() {
        this.anim.setAnimation(0, "cake2", false)
    }
    xitkem() {
        this.anim.setAnimation(0, "cake1", false)
    }
    xitQua() {
        this.anim.setAnimation(0, "cake7", false)

    }
    // update (dt) {}
}
