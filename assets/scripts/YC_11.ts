
const { ccclass, property } = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Node)
    pop: cc.Node = null
    @property(cc.Node)
    pop2: cc.Node = null
    @property(cc.Node)
    gate: cc.Node = null
    @property(cc.Label)
    lbCountCus: cc.Label = null;
    @property(cc.Node)
    listCus: cc.Node[] = []
    @property(cc.Node)
    listCus2: cc.Node[] = []
    @property(cc.Node)
    house0: cc.Node = null;
    @property(cc.Node)
    house1: cc.Node = null;
    @property(cc.Node)
    house2: cc.Node = null;
    @property(cc.Node)
    house3: cc.Node = null;
    @property(cc.Node)
    house4: cc.Node = null;
    @property(cc.SpriteFrame)
    popRed: cc.SpriteFrame = null
    @property(cc.SpriteFrame)
    popRedGreen: cc.SpriteFrame = null
    @property(cc.Node)
    listHand: cc.Node[] = [];
    @property(cc.Node)
    tree: cc.Node = null;
    @property(cc.Animation)
    text: cc.Animation = null
    @property(cc.Label)
    lbWood: cc.Label = null
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Node)
    woodBar: cc.Node = null;

    @property(cc.AudioClip)
    soundUd: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.AudioClip)
    soundGio: cc.AudioClip = null
    @property(cc.AudioClip)
    soundClick: cc.AudioClip = null
    @property(cc.AudioClip)
    soundChatGo: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundlanhCanRang: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundYee: cc.AudioClip = null;

    adChanel = '{{__adv_channels_adapter__}}'

    countCus = 0
    phase = 0
    first = false
    max = 4;
    countWood = 100
    arrPos = [cc.v3(-522, 558), cc.v3(-525, 445), cc.v3(-621, 398), cc.v3(-733, 400)]
    idSOundGio = null
    start() {
        this.screen()
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.5)
        cc.audioEngine.play(this.soundlanhCanRang, false, 0.8)
        this.scheduleOnce(() => {
            cc.tween(this.camera).by(0.3, { zoomRatio: -0.3 }).call(() => {
                this.pop.active = true;
                this.scheduleOnce(() => {
                    this.pop.getComponent(cc.Button).enabled = true;
                    this.listHand[0].active = true
                }, 0.2)
            }).start()
            cc.tween(this.camera.node).to(0.3, { position: cc.v3(-200, 150) }).start()


        }, 0.2)
        this.idSOundGio = cc.audioEngine.play(this.soundGio, true, 1)
    }
    btn_addCus() {
        if (this.phase == 0 && this.countCus > 3) return;
        if (this.phase == 1 && this.countCus > 8) return;
        this.pop.getComponent(cc.Animation).play("pop_click")
        cc.audioEngine.play(this.soundClick, false, 1)
        if (!this.first) {
            this.first = true;
            this.gate.getComponent(cc.Animation).play("cong_open")
        }
        if (this.phase == 0) {
            let child = this.listCus[this.countCus]
            // child.getComponent(C).statusNode.active = false
            child.getComponent(C).anim.setAnimation(0, "Run", true);
            child.getComponent(C).getHappy()

            child.zIndex = this.countCus
            cc.tween(child).to(2, { position: this.arrPos[this.countCus] }).call(() => {
                // child.getComponent(C).anim.setAnimation(0, "Idle", true);
                // child.getComponent(C).hungry()
                child.getComponent(C).anim.setAnimation(0, "Idle", true);
                child.getComponent(C).hungry()

            }).start()

            this.countCus++
            this.lbCountCus.string = this.countCus.toString() + " /" + this.max.toString()

            if (this.phase == 0 && this.countCus == 4) {
                this.pop.getComponent(cc.Button).enabled = false;
                this.pop.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.popRed;
                this.listHand[0].active = false
                cc.audioEngine.stop(this.idSOundGio)
                this.step1()
            }
        }
        else if (this.phase == 1) {

            let arrPos = [cc.v3(-431, 463), cc.v3(-450, 300), cc.v3(-626, 335), cc.v3(-784, 304), cc.v3(-700, 200)]
            let child = this.listCus2[this.countCus - 4]
            let pos = arrPos[this.countCus - 4]
            this.countCus++
            this.lbCountCus.string = this.countCus.toString() + " /" + this.max.toString()

            child.getComponent(C).statusNode.active = true
            child.getComponent(C).anim.setAnimation(0, "Run", true);
            child.getComponent(C).getHappy()
            child.zIndex = this.countCus

            cc.tween(child).to(2, { position: pos }).call(() => {
                // child.getComponent(C).anim.setAnimation(0, "Idle", true);
                // child.getComponent(C).hungry()
                child.getComponent(C).anim.setAnimation(0, "Idle", true);
            }).start()
            if (this.phase == 1 && this.countCus == 9) {
                this.pop.getComponent(cc.Button).enabled = false;
                this.pop.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.popRed;
                this.listHand[0].active = false;
                cc.tween(this.camera).by(0.5, { zoomRatio: -0.1 }).start()
                cc.tween(this.camera.node).to(0.5, { position: cc.v3(-1100, 550) }).call(() => {
                    this.listHand[4].active = true
                    this.house3.getComponent(cc.Button).enabled = true;
                    this.gate.getComponent(cc.Animation).play("cong_close")

                }).start()
                // this.step1()
            }
        }



    }
    step1() {
        this.scheduleOnce(() => {
            cc.tween(this.camera.node).to(0.7, { position: cc.v3(-726, 400) }).start()

            this.gate.getComponent(cc.Animation).play("cong_close")

        }, 0.3)
        this.scheduleOnce(() => {
            cc.tween(this.camera.node).to(0.4, { position: cc.v3(-1571, 140) }).call(() => {
                this.house1.getComponent(cc.Button).enabled = true;
                this.listHand[1].active = true
            }).start()

        }, 2.3)
    }
    btn_clickHouse1() {
        cc.audioEngine.play(this.soundUd, false, 1)
        this.listHand[1].active = false

        this.house1.getComponent(cc.Animation).play("house_show");
        this.house1.getChildByName("smoke").active = true;
        this.house1.getComponent(cc.Button).enabled = false
        let arrPos = [cc.v3(-1158, 19), cc.v3(-1646, 212)]
        let cus = this.listCus[3]
        cus.getComponent(C).anim.setAnimation(0, "Run", true);

        cc.tween(cus).to(1.2, { position: cc.v3(-1158, 19) }).to(1.2, { position: cc.v3(-1600, 212) }).call(() => {
            cus.scaleX = -0.65
            cus.getComponent(C).anim.setAnimation(0, "ChatCay", true);
            this.cutTree()
        }).start()


    }
    isSoundGo = 0
    cutTree() {
        this.schedule(() => {
            if (this.isSoundGo < 3) {
                this.isSoundGo++
                cc.audioEngine.play(this.soundChatGo, false, 1)

            }
            this.tree.getComponent(cc.Animation).play()
            this.text.play()
            this.scheduleOnce(() => {
                this.countWood += 100

            }, 0.2)
        }, 0.9)
        this.scheduleOnce(() => {
            this.pop2.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.popRedGreen;
            // cc.audioEngine.stop(this.isSoundGo)
            cc.tween(this.camera.node).to(0.6, { position: cc.v3(-726, 400) }).call(() => {
                this.listHand[2].active = true
                this.pop2.getComponent(cc.Button).enabled = true
            }).start()
        }, 2)
    }
    btn_click2() {
        cc.audioEngine.play(this.soundUd, false, 1)
        cc.audioEngine.play(this.soundYee, false, 1)

        for (let child of this.listCus) {
            child.getComponent(C).happy()
        }
        this.listHand[2].active = false
        this.pop2.getComponent(cc.Button).enabled = false
        this.pop2.getComponent(cc.Animation).play("pop_close")
        this.house0.getComponent(cc.Animation).play("house_show");
        this.house0.getChildByName("smoke").active = true;
        cc.tween(this.camera.node).to(0.6, { position: cc.v3(-250, 825) }).call(() => {
            this.listHand[3].active = true
            this.house2.getComponent(cc.Button).enabled = true
        }).start()
        cc.tween(this.camera).by(0.6, { zoomRatio: -0.1 }).start()
    }
    btn_clickhouse2() {
        cc.audioEngine.play(this.soundUd, false, 1)

        this.house2.getComponent(cc.Button).enabled = false;
        this.house2.getComponent(cc.Animation).play("house_show");
        this.house2.getChildByName("smoke").active = true;
        this.listHand[3].active = false
        cc.tween(this.camera.node).to(0.6, { position: cc.v3(-0, 0) }).call(() => {
            this.pop.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.popRedGreen;
            this.max = 9
            this.lbCountCus.string = this.countCus.toString() + " /" + this.max.toString()
            this.phase = 1
            this.pop.getComponent(cc.Button).enabled = true;
            this.listHand[0].active = true;
            this.first = false;
        }).start()

    }
    btn_clickhouse3() {
        cc.audioEngine.play(this.soundUd, false, 1)

        this.house3.getComponent(cc.Button).enabled = false;
        this.house3.getComponent(cc.Animation).play("house_show");
        this.house3.getChildByName("smoke").active = true;
        this.listHand[4].active = false
        cc.tween(this.camera).by(0.6, { zoomRatio: +0.2 }).call(() => {
            //     this.house4.getComponent(cc.Button).enabled = true;
            //     this.listHand[5].active = true

        }).start()
        cc.tween(this.camera.node).by(0.6, { position: cc.v3(500, 100) }).call(() => {
            this.house4.getComponent(cc.Button).enabled = true;
            this.listHand[5].active = true
        }).start()

        // this.listHand[3].active = false
        // cc.tween(this.camera.node).to(0.6, { position: cc.v3(-0, 0) }).call(() => {
        //     this.pop.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.popRedGreen;
        //     this.max = 9
        //     this.lbCountCus.string = this.countCus.toString() + " /" + this.max.toString()
        //     this.phase = 1
        //     this.pop.getComponent(cc.Button).enabled = true;
        //     this.listHand[0].active = true;
        //     this.first = false;
        // }).start()

    }
    btn_clickhouse4() {
        cc.audioEngine.play(this.soundUd, false, 1)

        this.listHand[5].active = false

        this.house4.getComponent(cc.Button).enabled = false;
        this.house4.getComponent(cc.Animation).play("house_show");
        this.house4.getChildByName("smoke").active = true;

        cc.tween(this.camera).by(0.2, { zoomRatio: -0.2 }).call(() => {
            this.linkToStore.active = true;
            this.listHand[0].active = true
            this.pop.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.popRedGreen;
            this.max = 14
            this.lbCountCus.string = this.countCus.toString() + " /" + this.max.toString()
        }).start()
        cc.tween(this.camera.node).by(0.6, { position: cc.v3(300, -200) }).start()

    }
    isvertical = false
    protected update(dt: number): void {
        this.lbWood.string = this.countWood.toString()
        let canvas = this.node.getComponent(cc.Canvas);

        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.woodBar.scale=1
                this.woodBar.getComponent(cc.Widget).right=232.61

            }
        }
        else {
            // this.mainCamera.zoomRatio = 1.5
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.woodBar.scale=1.3
            this.woodBar.getComponent(cc.Widget).right=300

        }
    }
    screen() {
        let canvas = this.node.getComponent(cc.Canvas);

        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.camera.zoomRatio = 1.2;
            }
        }
        else {
            // this.mainCamera.zoomRatio = 1.5
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.camera.zoomRatio = 2

        }
    }

}
