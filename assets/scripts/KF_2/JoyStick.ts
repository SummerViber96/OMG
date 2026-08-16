
import GamePlay from "./MR_4";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    dot: cc.Node = null;

    @property(cc.Node)
    ring: cc.Node = null;

    // @property(cc.Node)
    // playerLucius: cc.Node = null;
    @property(cc.Node)
    guild: cc.Node = null
    radius = null;
    stickPos = null;
    touchLocation = null;
    gamePlay = null;
    offGuide = false;
    isCutScene=false;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.radius = this.ring.width / 2;
        this.initTouchEvent();
        this.gamePlay = cc.Canvas.instance.node.getComponent(GamePlay);
        // this.scheduleOnce(()=>{
        //     this.guild.active=true
        // },1.5)
    }
    initTouchEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    }
    offTouchEvent() {
        this.node.off(cc.Node.EventType.TOUCH_START);
        this.node.off(cc.Node.EventType.TOUCH_MOVE);
        this.node.off(cc.Node.EventType.TOUCH_END);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL);
    }
    touchStartEvent(event) {
        if(this.isCutScene)return;

        if (!this.offGuide&&this.guild.active==true) {
            this.guild.active = false
            this.offGuide=true
            cc.Canvas.instance.node.getComponent("MR_4").offGuild()
        }
        this.gamePlay.handGuide.active = false;
        const touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.stickPos = this.ring.getPosition();
        const distance = touchPos.sub(this.ring.getPosition().mag());
        if (this.radius > distance) {
            this.dot.setPosition(touchPos)
        }
        this.gamePlay.charComp.directionX = (this.dot.x > 0) ? -1 : 1;
        this.gamePlay.charComp.run();
        this.stickPos = touchPos;
        this.node.opacity = 255;
        this.touchLocation = event.getLocation();
        this.ring.setPosition(touchPos);
        this.dot.setPosition(touchPos);

    }
    touchMoveEvent(event) {
        if(this.isCutScene)return;
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
        this.gamePlay.charComp.run();
        this.gamePlay.charComp.moveDir = p;
        this.gamePlay.charComp.directionX = (this.dot.x > 0) ? -1 : 1;
        this.gamePlay.charComp.angle = this.checkAngle(this.dot.x, this.dot.y);

    }

    checkAngle(posX, posY) {
        let angle = 0;
        let midPoint = this.ring.position;
        if (posX == midPoint.x && posY != midPoint.y) angle = (posY <= midPoint.y) ? 0 : 180;
        if (posY == midPoint.y && posX != midPoint.x) angle = (posX <= midPoint.x) ? -90 : 90;
        if (posX != midPoint.x && posY != midPoint.y) {
            let tan = (posX - midPoint.x) / (posY - midPoint.y);
            angle = cc.misc.radiansToDegrees(Math.atan(tan))
            if (posY < midPoint.y && posX > midPoint.x) {
                angle *= -1;
            }
            if (posY < midPoint.y && posX < midPoint.x) {
                angle *= -1;
            }
            if (posY > midPoint.y && posX > midPoint.x) {
                angle = 180 - angle;
            }
            if (posY > midPoint.y && posX < midPoint.x) {
                angle = 180 - angle;
            }
        }
        return angle;
    }
    touchEndEvent() {
        if(this.isCutScene)return;

        if (this.gamePlay.isEndGame) {
            this.dot.setPosition(cc.v3(0, -183));
            this.ring.setPosition(cc.v3(0, -183));
        }
        else {
            this.dot.setPosition(this.ring.getPosition());
            this.node.opacity = 0;
            this.gamePlay.charComp.idle();
        }

    }

    update(dt) {
    }
}
