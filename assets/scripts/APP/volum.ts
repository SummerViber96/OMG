const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;
    @property(cc.Node)
    handle: cc.Node = null;
    @property(cc.Node)
    musicScene: cc.Node = null
    // @property(cc.AudioSource)
    // audioSources: cc.AudioSource = null;
    @property(cc.Integer)
    maxWidth = 200;
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onDrag, this);
    }

    onDrag(event) {
        let pos = this.progressBar.node.convertToNodeSpaceAR(event.getLocation());
        let x = cc.misc.clampf(pos.x / this.maxWidth + 0.5, 0, 1);
        this.progressBar.progress = x;
        this.updateHandlePos();
        this.setVolume(x);
    }

    updateHandlePos() {
        let width = this.maxWidth * (this.progressBar.progress - 0.5);
        this.handle.x = width;
    }

    setVolume(value) {
        this.musicScene.getComponent("mainMusic").setVolume(value)
        // cc.audioEngine.setVolume()
        // if (this.audioSource) {
        //     this.audioSource.volume = value;
        // }
    }

}