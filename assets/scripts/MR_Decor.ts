declare const window: any;

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    mapNode: cc.Node = null;
    @property(cc.Camera)
    camera3d: cc.Camera = null;
    @property(cc.Node)
    listCard: cc.Node = null;
    @property(cc.Node)
    guild: cc.Node = null;
    @property(cc.Node)
    Group1: cc.Node = null;
    @property(cc.Node)
    Group2: cc.Node = null;
    @property(cc.Node)
    Group3: cc.Node = null;

    @property(cc.Node)
    linkToStore: cc.Node = null
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundUpgrade: cc.AudioClip = null;
    @property(cc.Node)
    onEndCard: cc.Node = null;
    @property(cc.Node)
    miniLogo: cc.Node = null
    isvertical = false

    //

    start() {
        // window.gameReady && window.gameReady();

        cc.audioEngine.play(this.soundBg, true, 0.8)
    }
    btn_card1() {
        this.guild.active = false;
        // for (let child of this.listCard.children) {
        this.listCard.children[0].getComponent(cc.Animation).play("card_off");
        this.listCard.children[1].getComponent(cc.Animation).play("card_off");
        // }
        cc.audioEngine.play(this.soundUpgrade, false, 0.8)

        cc.tween(this.camera3d).to(0.3, { zoomRatio: 0.6 }).call(() => {
            this.mapNode.getChildByName("shadow").active = false
            for (let i = 1; i < this.mapNode.childrenCount; i++) {
                let child = this.mapNode.children[i];
                child.position = child.position.add(cc.v3(0, 8, 0))
                child.active = true;
                let delay = 0
                if (i < 4) {
                    delay = 0.1
                }
                if (i < 2) {
                    delay = 0.15
                }
                cc.tween(child).delay(delay).by(0.3, { position: cc.v3(0, -8, -0) }).start()
            }
        }).start()
        this.scheduleOnce(() => {
            this.onStep2()
        }, 1)

    }
    btn_card2() {
        this.guild.active = false;
        cc.audioEngine.play(this.soundUpgrade, false, 0.8)

        this.listCard.children[2].getComponent(cc.Animation).play("card_off");
        this.listCard.children[3].getComponent(cc.Animation).play("card_off");
        this.Group1.getComponent(cc.Animation).play("group1_on")
        this.Group1.getChildByName("shadow").active = false
        this.scheduleOnce(() => {
            this.onStep3()
        }, 0.7)
    }
    btn_card3() {
        this.guild.active = false;
        this.Group2.getChildByName("shadow").active = false
        cc.audioEngine.play(this.soundUpgrade, false, 0.8)

        this.listCard.children[4].getComponent(cc.Animation).play("card_off");
        this.listCard.children[5].getComponent(cc.Animation).play("card_off");
        // this.Group1.getComponent(cc.Animation).play("group2_on")
        this.Group2.getComponent(cc.Animation).play("show_group2")

        this.scheduleOnce(() => {
            this.onStep4()
        }, 0.8)
    }
    onStep2() {
        this.Group1.active = true
        // cc.tween(this.camera3d).to(0.5, { zoomRatio: 1.5 }).start()
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans1")
        this.scheduleOnce(() => {
            this.listCard.children[2].active = true;
            this.listCard.children[3].active = true;

        }, 0.8)
        this.scheduleOnce(() => {
            this.guild.active = true;

        }, 1)
    }
    onStep3() {
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans2")
        this.Group2.active = true

        this.scheduleOnce(() => {
            this.listCard.children[4].active = true;
            this.listCard.children[5].active = true;

        }, 0.8)
        this.scheduleOnce(() => {
            this.guild.active = true;

        }, 1)
    }
    onStep4() {
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans3")
        this.Group3.active = true
        this.scheduleOnce(() => {
            // this.listCard.children[6].active = true;
            // this.listCard.children[7].active = true;
            this.linkToStore.active = true;
            this.onEndCard.active = true
            this.miniLogo.active=false
        }, 0.9)
        // this.scheduleOnce(() => {
        //     this.guild.active = true;

        // }, 1)
    }
    update(dt) {
        let canvas = this.node.getComponent(cc.Canvas);

        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;

                canvas.fitHeight = false;
                canvas.fitWidth = true;

            }
        }
        else {

            this.isvertical = false;

            canvas.fitHeight = true;
            canvas.fitWidth = false;


        }



    }
}
