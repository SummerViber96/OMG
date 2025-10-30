

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
    store: cc.Node = null;
    @property(cc.Node)
    listBtn: cc.Node[] = []
    @property(cc.Node)
    btnPlay: cc.Node = null;
    @property(cc.Node)
    mayTap: cc.Node = null;
    @property(cc.Node)
    listMayChay: cc.Node[] = []
    @property(cc.Node)
    listCus: cc.Node[] = []
    @property(cc.Node)
    listPop: cc.Node[] = []
    @property(cc.Node)
    mc: cc.Node = null
    @property(cc.Node)
    listKhayItem: cc.Node[] = []
    @property(cc.Node)
    endCard: cc.Node = null
    @property(cc.AudioClip)
    soungBg: cc.AudioClip = null;
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
    proGress1: cc.Node = null;
    @property(cc.Node)
    proGress2: cc.Node = null;
    @property(cc.Node)
    listIconItem: cc.Node[] = []
    @property(cc.Label)
    text1: cc.Label = null;
    @property(cc.Label)
    text2: cc.Label = null;
    @property(cc.Node)
    linkToStore: cc.Node = null
    adChanel = '{{__adv_channels_adapter__}}'

    @property(cc.Prefab)
    preTouch: cc.Prefab = null;
    @property(cc.Node)
    uiNode: cc.Node = null;
    countBtn = 0
    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        cc.systemEvent.on('button-click', this.touchStartEvent, this);

        cc.audioEngine.play(this.soungBg, true, 0.5)
        cc.tween(this.cameraNgang).delay(0.8).to(0.4, { zoomRatio: 1.52 }).delay(1).to(0.4, { zoomRatio: 2.5 }).start()
        cc.tween(this.cameraDoc).delay(0.8).to(0.4, { zoomRatio: 1 }).delay(1).to(0.4, { zoomRatio: 1.8 }).start()
        cc.audioEngine.play(this.soungChayBo, true, 1)

        this.scheduleOnce(() => {
            this.store.active = true
            this.listBtn[0].getChildByName("hand").active = true
            cc.audioEngine.play(this.soungTranScene, false, 1)
        }, 0.8 + 0.4 + 1 + 0.4)
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    }
    touchStartEvent(event) {
        this.createEffTouch(event.getLocation())

    }
    createEffTouch(pos) {
        pos = this.node.convertToNodeSpaceAR(pos)
        let touch = cc.instantiate(this.preTouch)
        touch.parent = this.uiNode;
        touch.scale = 1.2
        touch.position = pos;
    }
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        canvas.fitWidth = (logic) ? true : false;
        canvas.fitHeight = (logic) ? false : true;
        this.logo.scale = (logic) ? 0.5 : 0.7
        this.endCard.scale = (logic) ? 0.6 : 1
        this.store.scale = (logic) ? 0.35 : 1
        this.coinBar.scale = (logic) ? 1 : 1.4
        this.cameraDoc.node.active = (logic) ? true : false
        this.cameraNgang.node.active = (logic) ? false : true

        if (logic == true) {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {



            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // iPad hoặc tương tự (tỷ lệ gần vuông)


            }
        }
        else {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // this.btnDownload.position = cc.v3(536, -240)


            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // iPad hoặc tương tự (tỷ lệ gần vuông)
                this.store.scale = 0.8
                // console.log("Thiết bị iPad hoặc tỷ lệ gần 4:3");
            }

        }
    }
    btn_buy(event, value) {
        this.countBtn++
        cc.audioEngine.play(this.soungUpdate, false, 1)
        event.currentTarget.getChildByName("num").getComponent(cc.Animation).play()
        switch (value) {
            case "1":
                this.listIconItem[0].getComponent(cc.Animation).play()
                this.listBtn[0].getChildByName("num").getComponent(cc.Label).string = (100 * this.countBtn).toString()
                this.proGress1.children[this.countBtn].active = true
                this.text1.string = (this.countBtn + 1).toString() + "->" + (this.countBtn + 2).toString()

                if (this.countBtn == 3) {
                    this.text1.string = "MAX";
                    event.currentTarget.getComponent(cc.Button).enabled = false;
                    this.listBtn[2].getComponent(cc.Button).enabled = true;
                    this.listBtn[2].getChildByName("hand").active = true;
                    this.listBtn[0].getChildByName("hand").active = false;
                }
                break;
            case "3":
                this.listIconItem[1].getComponent(cc.Animation).play();
                this.text2.string = "MAX";
                this.listBtn[2].getChildByName("num").getComponent(cc.Label).string = "200";
                this.listBtn[2].getComponent(cc.Button).enabled = false;
                this.listBtn[2].getChildByName("hand").active = false;
                this.proGress2.children[3].active = true;
                this.btnPlay.getChildByName("hand").active = true;
                this.btnPlay.getComponent(cc.Button).enabled = true;
                break;

        }
    }
    btn_play(event) {
        event.currentTarget.getComponent(cc.Button).enabled = false;
        this.store.getComponent(cc.Animation).play("cardclose")
        this.scheduleOnce(() => {
            this.store.active = false
        }, 0.3)
        this.scheduleOnce(() => {
            this.mayTap.getComponent(cc.Sprite).enabled = false;
            this.mayTap.getChildByName("vfx_smoke").active = true;
            this.mayTap.children[0].active = true
            cc.audioEngine.play(this.soungUpdateMay, false, 1);
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soungUpdateMay, false, 1);

            }, 0.15)
            for (let child of this.listMayChay) {
                child.getComponent(cc.Sprite).enabled = false;
                child.getChildByName("vfx_smoke").active = true;
                child.children[0].active = true
            }
        }, 0.4)
        cc.tween(this.cameraDoc.node).by(0.5, { position: cc.v3(170, 0) }).start()

        this.scheduleOnce(() => {
            cc.tween(this.cameraNgang.node).by(0.5, { position: cc.v3(-300, -180) }).start()
            cc.tween(this.cameraDoc.node).by(0.5, { position: cc.v3(-770, -190) }).start()

        }, 1.2)
        this.scheduleOnce(() => {
            this.listCus[0].getChildByName("pop").getChildByName("hand").active = true
            this.listCus[0].getChildByName("pop").getComponent(cc.Button).enabled = true
        }, 1.7)
    }
    isCountCUs = 0
    btn_Cus(event, value) {
        cc.audioEngine.play(this.soungUpdate, false, 1)

        event.currentTarget.getComponent(cc.Button).enabled = false;
        let cus = null
        switch (value) {
            case "1":
                cus = this.listCus[0];
                this.listMayChay[0].children[0].children[1].active = true;
                this.listCus[1].getChildByName("pop").getComponent(cc.Button).enabled = true
                this.listCus[1].getChildByName("pop").getChildByName("hand").active = true

                break;
            case "2":
                cus = this.listCus[1];
                this.listMayChay[1].children[0].children[1].active = true;
                this.listCus[2].getChildByName("pop").getComponent(cc.Button).enabled = true
                this.listCus[2].getChildByName("pop").getChildByName("hand").active = true

                break;
            case "3":
                cus = this.listCus[2];
                this.listMayChay[2].children[0].children[1].active = true;

                break;
        }
        cc.tween(cus).to(0.3, { opacity: 0 }).start()
        this.isCountCUs++
        if (this.isCountCUs == 3) {
            cc.tween(this.cameraNgang).to(0.5, { zoomRatio: 1.8 }).start()
            cc.tween(this.cameraNgang.node).by(0.5, { position: cc.v3(300, 180) }).start()
            cc.tween(this.cameraDoc).to(0.5, { zoomRatio: 1.3 }).start()
            cc.tween(this.cameraDoc.node).by(0.5, { position: cc.v3(650, 180) }).start()
            this.scheduleOnce(() => {
                for (let child of this.listPop) {
                    child.active = true
                }
            }, 0.5)
        }
    }
    btn_wwater(event) {
        cc.tween(this.cameraDoc.node).by(1.5, { position: cc.v3(-300, 50) }).start()
        cc.tween(this.cameraDoc.node).delay(1.8).to(1.5, { position: cc.v3(150, 0) }).start()

        cc.audioEngine.play(this.soungUpdate, false, 1)
        this.listPop[0].getComponent(cc.Button).enabled = false
        event.currentTarget.getComponent(cc.Button).enabled = false
        this.listPop[0].getChildByName("hand").active = false
        this.mc.position = cc.v3(-209, 77)
        let anim = this.mc.children[0].getComponent(sp.Skeleton)
        let anim2 = this.mc.children[1].getComponent(sp.Skeleton)

        anim.setAnimation(0, "WalkLeft", true)
        anim2.setAnimation(0, "WalkLeft", true)
        cc.tween(this.mc).to(1.5, { position: cc.v3(-534, -71) }).delay(0.3).call(() => {
            anim.setAnimation(0, "WalkUp", true)
            anim2.setAnimation(0, "WalkUp", true)
            for (let child of this.listKhayItem) {
                child.active = true
            }
        }).to(1, { position: cc.v3(-265, 38) }).call(() => {
            anim.setAnimation(0, "WalkRight", true)
            anim2.setAnimation(0, "WalkRight", true)
            this.scheduleOnce(() => {
                let item = this.listKhayItem[0]
                item.parent = this.node
                item.scale = 1
                let pos = this.listPop[0].parent.convertToWorldSpaceAR(this.listPop[0].position);
                pos = this.node.convertToNodeSpaceAR(pos).add(cc.v3(0, 50))
                cc.tween(item).to(0.3, { position: pos }).call(() => {
                    item.active = false
                    this.listPop[0].active = false
                    cc.audioEngine.play(this.soungUpdateMay, false, 1);

                }).start()
            }, 0.4)
            this.scheduleOnce(() => {
                let item = this.listKhayItem[1]
                item.parent = this.node
                item.scale = 1

                let pos = this.listPop[2].parent.convertToWorldSpaceAR(this.listPop[2].position);
                pos = this.node.convertToNodeSpaceAR(pos).add(cc.v3(0, 50))
                cc.tween(item).to(0.3, { position: pos }).call(() => {
                    item.active = false
                    this.listPop[2].active = false
                    cc.audioEngine.play(this.soungUpdateMay, false, 1);

                }).start()
            }, 1)
            this.scheduleOnce(() => {
                let item = this.listKhayItem[2]
                item.parent = this.node
                item.scale = 1

                let pos = this.listPop[3].parent.convertToWorldSpaceAR(this.listPop[3].position);
                pos = this.node.convertToNodeSpaceAR(pos).add(cc.v3(0, 50))
                cc.tween(item).to(0.5, { position: pos }).call(() => {
                    item.active = false
                    this.listPop[3].active = false
                    cc.audioEngine.play(this.soungUpdateMay, false, 1);

                }).start()
            }, 1)
        }).to(2.2, { position: cc.v3(271, -269) }).call(() => {
            anim.setAnimation(0, "win", true)
            anim2.node.active = false
            this.endCard.active = true;
            this.linkToStore.active = true
            cc.audioEngine.play(this.soungWin, false, 1)
        }).start()


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
}
