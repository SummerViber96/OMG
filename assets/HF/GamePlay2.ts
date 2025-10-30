// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Camera)
    cameraNgang: cc.Camera = null;
    @property(cc.Camera)
    cameraDoc: cc.Camera = null;
    @property(cc.Node)
    logo: cc.Node = null;
    @property(cc.Node)
    coinBar: cc.Node = null;
    @property(cc.Node)
    cusFist: cc.Node = null;
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soungUpdate: cc.AudioClip = null;
    @property(cc.AudioClip)
    soungUpdateMay: cc.AudioClip = null;
    @property(cc.AudioClip)
    soungTranScene: cc.AudioClip = null;
    @property(cc.AudioClip)
    soungWin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soungChayBo: cc.AudioClip = null;
    @property(cc.Node)
    listPop: cc.Node[] = [];
    @property(cc.Node)
    mc: cc.Node = null;
    @property(cc.Node)
    listKhayItem: cc.Node[] = [];
    @property(cc.Node)
    listCard1: cc.Node = null
    @property(cc.Node)
    listCard2: cc.Node = null
    @property(cc.Prefab)
    preWater: cc.Prefab = null;
    @property(cc.Prefab)
    preOrange: cc.Prefab = null
    @property(sp.Skeleton)
    char1: sp.Skeleton = null
    @property(sp.Skeleton)
    char2: sp.Skeleton = null;
    @property(cc.Node)
    endGame: cc.Node = null
    @property(cc.Node)
    linkToStore: cc.Node = null
    // @property(cc.Node)
    // coinBar:cc.Node=null
        adChanel = '{{__adv_channels_adapter__}}'

    start() {
        cc.audioEngine.play(this.soundBg, false, 0.5)
        cc.audioEngine.play(this.soungChayBo, true, 1)
        let pos = cc.v3(-1025, 661);
        let endPos = cc.v3(-792, -523);
        let anim = this.cusFist.children[0].getComponent(sp.Skeleton)
        cc.tween(this.cusFist).to(1.4, { position: endPos }).call(() => {
            anim.setAnimation(0, "IdleFR", true)

        }).start()
        cc.tween(this.cameraNgang).delay(0.5).to(0.9, { zoomRatio: 1.8 }).delay(0.8).to(0.6, { zoomRatio: 3.9 }).start()
        cc.tween(this.cameraNgang.node).delay(0.5 + 1.7).to(0.6, { position: cc.v3(-30, 150) }).start()

        cc.tween(this.cameraDoc).delay(0.5).to(0.9, { zoomRatio: 1.5 }).delay(0.8).to(0.6, { zoomRatio: 3.2 }).start()
        cc.tween(this.cameraDoc.node).delay(0.5 + 1.7).to(0.6, { position: cc.v3(-30, 150) }).start()


        this.scheduleOnce(() => {
            this.listPop[0].getChildByName("hand").active = true;
        }, 0.5 + 1.7 + 0.6)
            if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    }
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        canvas.fitWidth = (logic) ? true : false;
        canvas.fitHeight = (logic) ? false : true;
        this.logo.scale = (logic) ? 0.5 : 0.7;
        this.listCard1.scale = (logic) ? 1.8 : 3.6;
        this.listCard2.scale = (logic) ? 1.8 : 3.6
        this.endGame.scale = (logic) ? 0.48 : 1
        this.cameraDoc.node.active = (logic) ? true : false;
        this.cameraNgang.node.active = (logic) ? false : true;
        this.coinBar.scale = (logic) ? 0.9 : 1.5
        // this.endCard.scale = (logic) ? 1 : 1
        // this.store.scale = (logic) ? 0.35 : 1
    }
    update(dt) {
        let deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    }
    btn_pop(event) {
        this.listPop[0].getChildByName("hand").active = false;
        cc.audioEngine.play(this.soungUpdate, false, 1)
        event.currentTarget.getComponent(cc.Button).enabled = false
        let anim = this.mc.children[0].getComponent(sp.Skeleton)
        let anim2 = this.mc.children[1].getComponent(sp.Skeleton)
        let endPos = cc.v3(-450, -60)
        anim.setAnimation(0, "WalkLeft", true)
        anim2.setAnimation(0, "WalkLeft", true)
        cc.tween(this.mc).to(1.5, { position: endPos }).call(() => {
            for (let child of this.listKhayItem) {
                child.active = true
            }
        }).delay(0.5).call(() => {
            anim.setAnimation(0, "WalkUp", true)
            anim2.setAnimation(0, "WalkUp", true)


        }).to(1, { position: cc.v3(-265, 38) }).call(() => {
            anim.setAnimation(0, "WalkRight", true)
            anim2.setAnimation(0, "WalkRight", true)
        }).to(1, { position: cc.v3(-150, 45) }).start()
        cc.tween(this.cameraNgang.node).to(1.5, { position: cc.v3(-463, -40) }).delay(0.5).to(1, { position: cc.v3(20, 100) })
            .call(() => {

            }).start()
        cc.tween(this.cameraDoc.node).to(1.5, { position: cc.v3(-463, -40) }).delay(0.5).to(1, { position: cc.v3(-100, 100) })
            .call(() => {

            }).start()
        this.scheduleOnce(() => {
            this.listCard1.active = true
        }, 1.5 + 0.5 + 1.5)

    }
    btn_card(event, value) {
        event.currentTarget.getComponent(cc.Button).enabled = false;
        cc.tween(this.listCard1).to(0.4, { scale: 0 }).call(() => {
            this.listCard1.active = false
        }).start()
        let posEnd = this.listPop[0].parent.convertToWorldSpaceAR(this.listPop[0].position)
        posEnd = this.node.convertToNodeSpaceAR(posEnd).add(cc.v3(0, 60));
        let posStart = cc.v3(0, 0)
        let item = null
        cc.audioEngine.play(this.soungUpdate, false, 1)

        this.scheduleOnce(() => {
            if (value == "1") {
                item = cc.instantiate(this.preWater)
                // item.position = this.mc.position.add(cc.v3(0, 50))
                posStart = this.listKhayItem[0].parent.convertToWorldSpaceAR(this.listKhayItem[0].position)
                posStart = this.node.convertToNodeSpaceAR(posStart)
                this.listKhayItem[0].active = false

            } else if (value == "2") {
                item = cc.instantiate(this.preOrange)
                posStart = this.listKhayItem[2].parent.convertToWorldSpaceAR(this.listKhayItem[2].position)
                posStart = this.node.convertToNodeSpaceAR(posStart)
                // item.position = this.mc.position.add(cc.v3(0, 50))
                this.listKhayItem[2].active = false
            }
            item.parent = this.node;
            item.position = posStart;
            item.scale = 0.85
            let midpos = cc.v2((posStart.x + posEnd.x) / 2, posEnd.y + 50 / 2)
            cc.tween(item).bezierTo(0.5, cc.v2(posStart.x, posStart.y), midpos, cc.v2(posEnd.x, posEnd.y)).call(() => {
                item.getChildByName("whey").active = false
                item.getChildByName("exp").active = true
                cc.audioEngine.play(this.soungUpdateMay, false, 1)

                cc.tween(this.listPop[0]).to(0.3, { scale: 0 }).start()
                this.scheduleOnce(() => {
                    this.char1.setAnimation(0, "Waiting3", true);
                    this.char1.node.scaleX = -0.45
                    this.char1.node.children[0].active = true
                }, 0.4)
            }).start()
            this.scheduleOnce(() => {
                cc.tween(this.cameraNgang.node).by(1.5, { position: cc.v3(180, -60) }).start()
                cc.tween(this.cameraDoc.node).by(1.5, { position: cc.v3(200, -60) }).start()

                cc.tween(this.mc).to(1.5, { position: cc.v3(19, -112) }).call(() => {
                    this.listCard2.active = true

                }).start()
            }, 0.5 + 0.4)

        }, 0.4)
    }
    btn_card2(event, value) {
        cc.audioEngine.play(this.soungUpdate, false, 1)

        event.currentTarget.getComponent(cc.Button).enabled = false;
        cc.tween(this.listCard2).to(0.4, { scale: 0 }).call(() => {
            this.listCard2.active = false
        }).start()
        let posEnd = this.listPop[1].parent.convertToWorldSpaceAR(this.listPop[1].position)
        posEnd = this.node.convertToNodeSpaceAR(posEnd).add(cc.v3(0, 60));
        let posStart = cc.v3(0, 0)
        let item = null
        this.scheduleOnce(() => {
            if (value == "1") {
                item = cc.instantiate(this.preWater)
                // item.position = this.mc.position.add(cc.v3(0, 50))
                posStart = this.listKhayItem[0].parent.convertToWorldSpaceAR(this.listKhayItem[0].position)
                posStart = this.node.convertToNodeSpaceAR(posStart)
                this.listKhayItem[0].active = false

            } else if (value == "2") {
                item = cc.instantiate(this.preOrange)
                posStart = this.listKhayItem[2].parent.convertToWorldSpaceAR(this.listKhayItem[2].position)
                posStart = this.node.convertToNodeSpaceAR(posStart)
                // item.position = this.mc.position.add(cc.v3(0, 50))
                this.listKhayItem[2].active = false
            }
            item.parent = this.node;
            item.position = posStart;
            item.scale = 0.85
            let midpos = cc.v2((posStart.x + posEnd.x) / 2, posEnd.y + 50 / 2)
            cc.tween(item).bezierTo(0.5, cc.v2(posStart.x, posStart.y), midpos, cc.v2(posEnd.x, posEnd.y)).call(() => {
                item.getChildByName("whey").active = false
                item.getChildByName("exp").active = true

                cc.tween(this.listPop[1]).to(0.3, { scale: 0 }).start()
                this.scheduleOnce(() => {
                    cc.audioEngine.play(this.soungTranScene, false, 1)

                    this.char2.setAnimation(0, "Waiting3", true);
                    this.char2.node.scaleX = -0.45
                    this.char2.node.children[0].active = true
                }, 0.4)
            }).start()

            this.scheduleOnce(() => {
                this.endGame.active = true
                this.linkToStore.active=true
                cc.audioEngine.play(this.soungWin, false, 1)
            }, 0.5 + 0.6)
        }, 0.4)
    }
    // update (dt) {}
}
