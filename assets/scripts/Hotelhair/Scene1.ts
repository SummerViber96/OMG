

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(sp.Skeleton)
    animCutShirt: sp.Skeleton = null;
    @property(cc.Node)
    listCard: cc.Node = null;
    @property(cc.AudioClip)
    soundWrong: cc.AudioClip = null;

    start() {
        let self = this
        this.animCutShirt.setCompleteListener(function (trackEntry, loopCount) {
            var name = trackEntry.animation ? trackEntry.animation.name : '';
            // if (name == 'animation') {
            // }
            self.animCutShirt.node.active = false
            console.log("end")

        });
        this.showStep1()

    }
    showStep1() {
        cc.tween(this.camera).to(1.8, { zoomRatio: 1.5 }).start()
        cc.tween(this.camera.node).to(1.8, { position: cc.v3(0, -100) }).start()
        this.scheduleOnce(() => {
            this.listCard.active = true
        }, 1)
    }
    btn_chooseCard(event, value) {
        switch (value) {
            case "0":
                this.listCard.active=false
                break;
            case "1":
                let btn = event.currentTarget;
                btn.getComponent(cc.Animation).play("cardWrong")
                cc.audioEngine.play(this.soundWrong, false, 0.5)
                break;

        }
    }
    // update (dt) {}
}
