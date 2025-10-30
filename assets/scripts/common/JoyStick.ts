
// import { Constant } from "../constant";
import G from "../ICY_19"
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    dot: cc.Node = null;

    @property(cc.Node)
    ring: cc.Node = null;
    @property(cc.Node)
    guild: cc.Node = null;
    @property(cc.Node)
    shadow: cc.Node = null
    radius = null;
    stickPos = null;
    touchLocation = null;
    gamePlay = null;
    offGuide = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("ICY_19");
    }

    start() {

        this.radius = this.ring.width / 2;
        this.initTouchEvent();
     
    }
    initTouchEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    }
    touchStartEvent(event) {

        if (!this.offGuide) {
            this.offGuide = true;
            this.guild.active = false
            this.node.getChildByName("name").active = false
            this.shadow.active=false;

        }
        // if (this.gamePlay.isArrowOn) {
        //     this.gamePlay.arrow2.active = false;
        // }
        const touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.stickPos = this.ring.getPosition();
        const distance = touchPos.sub(this.ring.getPosition().mag());
        if (this.radius > distance) {
            this.dot.setPosition(touchPos)
        }
        this.gamePlay.charComp.directionX = (this.dot.x > 0) ? -1 : 1;
        this.gamePlay.charComp.direction = (this.dot.y > 0) ? 1 : 2;
        this.gamePlay.charComp.run();
        this.stickPos = touchPos;
        this.node.opacity = 255;
        this.touchLocation = event.getLocation();
        this.ring.setPosition(touchPos);
        this.dot.setPosition(touchPos);

    }
    touchMoveEvent(event) {
        // if (this.gamePlay.isArrowOn) return;

        if (this.touchLocation === event.getLocation()) {
            return false;
        }
        const touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
        const distance = touchPos.mag();
        const posX = this.stickPos.x + touchPos.x;
        const posY = this.stickPos.y + touchPos.y;

        const p = cc.v2(posX, posY).sub(this.ring.getPosition()).normalize();
        if (this.radius > distance) {
            this.dot.setPosition(cc.v2(posX, posY));
        }
        else {
            const x = this.stickPos.x + p.x * this.radius;
            const y = this.stickPos.y + p.y * this.radius;
            this.dot.setPosition(cc.v2(x, y));
        }


        this.gamePlay.charComp.moveDir = p;
        this.gamePlay.charComp.directionX = (this.dot.x - this.ring.x > 0) ? -1 : 1;
        this.gamePlay.charComp.direction = (this.dot.y > 0) ? 1 : 2;
        this.gamePlay.charComp.run();

    }
    touchEndEvent() {

        this.dot.setPosition(this.ring.getPosition());
        // this.node.opacity = 0;
        this.gamePlay.charComp.stop();
        this.dot.setPosition(cc.v3(0, 0));
        this.ring.setPosition(cc.v3(0, 0));
    }

    update(dt) {
    }
}
