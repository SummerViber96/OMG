// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
globalThis.machine = false

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    soundChien: cc.AudioClip = null
    @property(cc.AudioClip)
    soundDone: cc.AudioClip = null
    @property(cc.Integer)
    tag = 0
    @property(cc.Sprite)
    fillTime: cc.Sprite = null
    @property(cc.Node)
    clock: cc.Node = null
    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    isChin = false
    gamePlay = null
    chicken = null
    time = 2
    isSoundCooking = null
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
        this.node.getComponent(cc.Button).enabled = true
        cc.audioEngine.play(this.gamePlay.soundBanh, false, 0.7)

    }
    isEmpty() {
        return this.chicken == null
    }

    isCooking() {
        return this.chicken != null && !this.isChin
    }

    isReady() {
        return this.chicken != null && this.isChin
    }

    canAcceptFood() {
        return this.isEmpty()
    }

    btn_click() {

    }
    cooking(chicken) {
        if (!this.canAcceptFood()) return false
        this.isChin = false
        this.chicken = chicken
        if (chicken && chicken.parent !== this.node) {
            chicken.parent = this.node
            chicken.setPosition(0.5, 17)
            chicken.opacity = 0
        }
        this.anim.setAnimation(0, "lv1-song", false)

        this.isSoundCooking = cc.audioEngine.play(this.soundChien, false, 1)
        this.clock.active = true
        this.fillTime.fillRange = 0
        cc.tween(this.fillTime).to(this.time, { fillRange: 1 }).call(() => {
            this.clock.active = false
            this.isChin = true
            this.anim.setAnimation(0, "lv1-chin", false)

            cc.audioEngine.stop(this.isSoundCooking)
            cc.audioEngine.play(this.soundDone, false, 1)
            if (globalThis.machine == false) {
                globalThis.machine = true
                this.node.getChildByName("hind").opacity = 255;
                this.node.getChildByName("hind").active = true
                this.node.getChildByName("hind").zIndex = 2
            }
            // this.node.getChildByName("hind").opacity = 255;
            // this.node.getChildByName("hind").active = true
            // this.node.getChildByName("hind").zIndex = 2
        }).start();
        return true
    }
    getChicken() {
        this.isChin = false;
        let chicken = this.chicken
        this.chicken = null
        this.anim.setAnimation(0, "lv1-idle", false)
        chicken.opacity = 255
        this.gamePlay.onHind()
        return chicken
    }
}
