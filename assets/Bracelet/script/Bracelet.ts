

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    scene1: cc.Node = null
    @property(cc.Node)
    scene2: cc.Node = null
    @property(cc.Node)
    stringNode: cc.Node = null

    @property(cc.Node)
    plate: cc.Node = null
    @property(cc.Node)
    hand2: cc.Node = null
    @property(cc.Node)
    charmNode: cc.Node = null
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    start() {
        cc.audioEngine.play(this.soundBg, true, 0.5)
        cc.game.setFrameRate(60);
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }


    btn_startGame() {
        this.scene2.active = true
        cc.tween(this.scene1).to(0.4, { opacity: 0 }).call(() => {
            this.scene1.active = false
            this.hand2.active = true
        }).start()
    }
    btn_cord() {
        this.stringNode.active = false
        this.charmNode.active = true
    }

    // update (dt) {}
}
