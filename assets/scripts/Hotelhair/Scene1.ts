

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
    @property(cc.Node)
    shirt: cc.Node = null
    @property(cc.Node)
    hand: cc.Node = null;
    @property(cc.Node)
    tut: cc.Node = null;
    @property(cc.Node)
    ticket: cc.Node = null
    @property(cc.Node)
    daoCao: cc.Node = null
    @property(cc.Node)
    tutHam: cc.Node = null
    @property(cc.AudioClip)
    soundPopUp: cc.AudioClip = null
    @property(cc.AudioClip)
    hairCut: cc.AudioClip = null
    @property(cc.AudioClip)
    soundClick: cc.AudioClip = null
    start() {
        let self = this
        this.animCutShirt.setCompleteListener(function (trackEntry, loopCount) {
            var name = trackEntry.animation ? trackEntry.animation.name : '';
            // if (name == 'animation') {
            // }
            self.animCutShirt.node.active = false

        });

        this.scheduleOnce(() => {
            if (this.isTab) return;
            this.hand.active = true
        }, 2)
    }
    isTab = false
    tap() {
        if (this.isTab) return;
        cc.audioEngine.play(this.hairCut, false, 1)

        this.isTab = true
        this.tut.active = false;
        this.hand.active = false
        this.shirt.active = false
        this.animCutShirt.node.active = true
        this.showStep1()
    }
    showStep1() {
        // cc.tween(this.camera).to(1.8, { zoomRatio: 1.5 }).start()
        cc.tween(this.node).to(1.8, { scale: 1.5, position: cc.v3(0, 100) }).start()
        // cc.tween(this.camera.node).to(1.8, { position: cc.v3(0, -100) }).start()
        this.scheduleOnce(() => {
            this.listCard.active = true
            this.scheduleOnce(() => {
                if (this.isClickCard == false) {
                    this.listCard.getChildByName("hand").active = true
                }
            }, 2)
            cc.audioEngine.play(this.soundPopUp, false, 1)
        }, 1)
    }
    isClickCard = false
    btn_chooseCard(event, value) {
        this.isClickCard = true
                    this.listCard.getChildByName("hand").active = false

        cc.audioEngine.play(this.soundClick, false, 1)
        switch (value) {
            case "0":
                this.listCard.active = false;
                this.ticket.active = true
                this.ticket.getComponent("Scratch_ticket").addEvent()
                // this.daoCao.active=true
                this.tutHam.active = true
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
