

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    vfxSmoke: cc.Node = null;
    @property(cc.Node)
    iconChin: cc.Node = null;
    @property(cc.Node)
    iconDau: cc.Node = null;
    @property(cc.Node)
    iconSocola: cc.Node = null;
    isSocola = false;
    isDau = false;
    isStep = 0;
    gamePlay = null;
    isReady = false;
    value = 0
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")

        this.gamePlay.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
        this.gamePlay.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouch, this);
        this.gamePlay.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);


    }
    show() {
        this.appear();
        cc.tween(this.iconChin).to(1.3, { opacity: 255 }).call(() => {
            this.isReady = true
            // this.node.getComponent(cc.Button).enabled = true
            this.node.children[0].active = false
            this.node.children[1].active = true

        }).start()
    }


    onTouch(event: cc.Event.EventTouch) {
        let worldPos = event.getLocation();

        this.tryAction(event)
    }
    isTouching = false
    tryAction(event: cc.Event.EventTouch) {
        if (!this.isReady) return;
        if (this.isTouching) return;

        // touch position (WORLD)
        const touchPos = event.getLocation();

        // convert WORLD → LOCAL của parent
        let worldPos = event.getLocation();
        let localPos = this.gamePlay.camera.getScreenToWorldPoint(cc.v2(worldPos.x, worldPos.y));
        localPos = this.node.parent.convertToNodeSpaceAR(localPos);
        // rect của node trong parent space
        const rect = this.node.getBoundingBox();

        if (rect.contains(localPos)) {
            this.isTouching = true;
            this.btn_click();
        }
    }
    onTouchEnd() {
        this.isTouching = false; // reset để lần sau vuốt lại được
    }
    btn_click() {
        console.log("click")
        if (!this.isReady) return;
        // if (this.isStep == 0) {
        this.gamePlay.clickDonut(this.value, this.node);
        this.node.getComponent(cc.Button).enabled = false
        // this.isStep = 1;

        // }
        // else if (this.isStep == 1) {
        // }
        // else if (this.isStep == 2) {
        //     // this.node.getComponent(cc.Button).enabled=false
        //     this.gamePlay.sellDonut(this.value, this.node)
        // }

    }
    checkNhan() {
    }
    appear() {
        // this.node.getComponent(cc.Button).enabled = true;
        this.vfxSmoke.active = true
    }
    onSocola() {
        this.isStep = 2
        this.node.children[1].active = false
        this.iconSocola.scale = 0;
        this.iconSocola.active = true
        this.isSocola = true
        cc.tween(this.iconSocola).to(0.3, { scale: 0.35 }).to(0.05, { scale: 0.3 }).call(() => {
            // this.node.getComponent(cc.Button).enabled = true

        }).start()

    }
    onDau() {
        this.node.children[1].active = false

        this.isStep = 2
        this.iconDau.scale = 0;
        this.iconDau.active = true
        this.isDau = true

        cc.tween(this.iconDau).to(0.3, { scale: 0.8 }).to(0.05, { scale: 0.78 }).call(() => {
            // this.node.getComponent(cc.Button).enabled = true

        }).start()
    }
    // checkSlotKhay(){

    // }

}
