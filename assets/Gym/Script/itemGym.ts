// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Integer)
    tag = 0
    @property(cc.Integer)
    colorG = 0
    @property(cc.Node)
    target = null
    gamePlay = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    localPos = cc.v3(0, 0)








    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym")

        switch(this.tag){
            case 0:
                this.target=this.gamePlay.giaTaNho;
                break;
            case 1:
                this.target=this.gamePlay.giaTaLon;
                break;
            case 2:
                this.target=this.gamePlay.tuKhan;
                break;
            case 3:
                this.target=this.gamePlay.tuNuoc;
                break;
        }
        const touchNode = this.node;
        this.localPos = this.node.position
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

    }
    getTouchPosInParent(event: cc.Event.EventTouch) {
        const worldPos = this.gamePlay.camera.getScreenToWorldPoint(event.getLocation())
        return this.node.parent.convertToNodeSpaceAR(worldPos)
    }
    onTouchStart(event: cc.Event.EventTouch) {
        const touchPos = this.getTouchPosInParent(event)
        // this.localPos = this.node.position.sub(touchPos)
    }
    onTouchMove(event: cc.Event.EventTouch) {
        const touchPos = this.getTouchPosInParent(event)
        this.node.setPosition(touchPos)
        if (this.target && this.target.getChildByName("hind").active == false) {
            this.target.getChildByName("hind").active = true;
        }
    }
    onTouchEnd(event: cc.Event.EventTouch) {
        let check = this.gamePlay.checkItem(this.node, event.getLocation())
        console.log(check)
        if (!check) {
            cc.audioEngine.play(this.gamePlay.soundWrong, false, 1)
            this.node.getChildByName("wrong").getComponent(cc.Animation).play()
            this.scheduleOnce(() => {
                this.node.setPosition(this.localPos)

            }, 0.3)

        }
        this.target.getChildByName("hind").active = false;
    }

    clickItem(event) {
        event.currentTarget.getComponent(cc.Button).enabled = false
        console.log(this.node.name)
        this.gamePlay.clickItem(this.node)
    }
    // update (dt) {}
}
