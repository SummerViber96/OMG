// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    soundChien: cc.AudioClip = null
    @property(cc.Integer)
    tag = 0
    @property(cc.Sprite)
    fillTime: cc.Sprite = null
    @property(cc.Node)
    clock: cc.Node = null
    isChin = false
    gamePlay = null
    chicken=null
    time = 2
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")

    }
    setOn() {
        this.clock.active = true
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(() => {
            this.clock.active = false
        }).start();
    }

    setChin() {
        this.isChin = true
        this.anim.setAnimation(0, "lv1-chin", true)
        this.node.getComponent(cc.Button).enabled = true
        cc.audioEngine.play(this.gamePlay.soundBanh, false, 0.7)
    }
    btn_click() {

    }
    cooking(chicken) {
        // this.setOn()
        cc.audioEngine.play(this.soundChien, false, 1)
        chicken.parent = this.node;
        chicken.position = cc.v3(0.5, 17)
        chicken.getComponent("chicken").song()
        this.clock.active = true
        this.fillTime.fillRange = 0
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(() => {
            this.clock.active = false
            this.isChin = true
            chicken.getComponent("chicken").chin()
            this.node.getChildByName("hind").opacity = 255;
            this.node.getChildByName("hind").active = true
            this.node.getChildByName("hind").zIndex = 2
            this.chicken = chicken;
            this.gamePlay.isMoving = false
        }).start();
    }
    getChicken() {
        this.isChin = false;
        let chicken=this.chicken
        this.chicken=null
        return chicken
    }
}
