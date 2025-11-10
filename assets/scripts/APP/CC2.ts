

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.AudioClip)
    soundShowPop: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundClosePop: cc.AudioClip = null
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundLose: cc.AudioClip = null;
    @property(cc.Node)
    tut: cc.Node = null
    @property(cc.Node)
    hand: cc.Node = null
    @property(cc.Node)
    endCard: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Node)
    logo: cc.Node = null;
    @property(cc.Node)
    listCus: cc.Node = null;

    @property(cc.AudioClip)
    soundChesse: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWrong: cc.AudioClip = null
    @property(cc.Prefab)
    fxColor: cc.Prefab = null
    @property(cc.Node)
    cus: cc.Node = null;
    @property(cc.Node)
    xitKem: cc.Node = null;
    @property(cc.Node)
    xitHong: cc.Node = null;
    @property(cc.Node)
    listHand: cc.Node = null;
    @property(cc.Node)
    cakeNode: cc.Node = null
    cusComp = null
    cake = null;
    // @property(cc.AudioClip)
    // soundBg:cc.AudioClip=null;
    isCake = false
    isTargetPop = null;
    isTargetCus = null;
    adChanel = '{{__adv_channels_adapter__}}'
    countCus = 0
    isTang = 1;
    isKem = 0;
    isKem2 = 0;
    isTut = 0
    start() {
        this.cusComp = this.cus.getComponent("cusMission")
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.showCus()
        cc.audioEngine.play(this.soundBg, true, 1)
        this.listHand.zIndex = 5
        this.scheduleOnce(() => {
            if (this.isTut == 0) {
                this.cakeNode.getComponent("cake").tutOnPlate()
            }
        }, 5)
    }
    setTut2() {
        this.isTut = 2
        this.scheduleOnce(() => {
            console.log(this.isTut)
            if (this.isTut == 2) {
                this.btn_xitHong()
            }

        }, 5)
    }
    isDelayHong = false
    btn_xitHong() {
        if (!this.isCake) return
        if (this.isDelayHong) return;
        if (this.isTang == 1) {

            if (this.isKem == 0) {
                this.listHand.children[1].active = false
                this.isTut = 3
                this.scheduleOnce(() => {
                    this.listHand.children[0].active = true

                }, 0.4)
                this.scheduleOnce(() => {
                    this.cake.getComponent("cake2").xitHong()
                    this.isPhase2 = false
                    this.isPhase3 = true

                }, 0.4)
                this.isKem = 1
            }
            else {
                return;
            }
        }
        else {
            if (this.isKem2 == 0) {
                // console.log(this.cake)
                this.listHand.children[2].active = false
                this.listHand.children[3].active = true
                this.isTut = 5

                this.scheduleOnce(() => {
                    this.cake.getComponent("cake2").xitHong()
                    this.isKem2Qua = false

                }, 0.5)
                this.isKem = 3
            }
            else {
                return;
            }
        }
        cc.audioEngine.play(this.soundChesse, false, 1)

        this.isDelayHong = true;
        this.xitHong.getComponent(cc.Animation).play();
        this.xitHong.zIndex = 1
        this.scheduleOnce(() => {
            this.xitHong.position = cc.v3(-271.664, -373.904)
            this.isDelayHong = false;
            this.scheduleOnce(() => {
                if (this.isTut == 3) {
                    this.cakeNode.getComponent("cake").tutOnPlate()
                }
            }, 5)
            if (this.isTut == 5) {
                this.scheduleOnce(() => {
                    if (this.isTut == 5) {
                        this.btn_qua()
                    }
                }, 5)
            }

        }, 0.4)
    }
    setTut4() {
        this.isTut = 4;
        this.scheduleOnce(() => {
            if (this.isTut == 4) {
                this.btn_xitKem()
            }
        }, 5)
    }
    isDelayKem = false
    isPhase2 = false
    isPhase3 = false
    btn_xitKem() {
        if (!this.isCake) return

        if (this.isDelayKem) return;
        if (this.isTang == 1) {
            if (this.isKem == 0) {
                this.listHand.children[1].active = false
                this.scheduleOnce(() => {
                    this.listHand.children[0].active = true

                }, 0.4)
                this.isTut = 3

                this.scheduleOnce(() => {
                    this.cake.getComponent("cake2").xitkem()
                    this.isPhase2 = false;
                    this.isPhase3 = true

                }, 0.5)
                this.isKem = 1
            }
            else {
                return;
            }
        }
        else {
            if (this.isKem2 == 0) {
                this.isTut = 5

                this.scheduleOnce(() => {
                    this.cake.getComponent("cake2").xitkem()
                    this.isKem2Qua = true
                    this.listHand.children[2].active = false
                    this.listHand.children[3].active = true
                }, 0.5)
                this.isKem = 3
            }
            else {
                return;
            }
        }

        cc.audioEngine.play(this.soundChesse, false, 1)

        this.isDelayKem = true;
        this.xitKem.getComponent(cc.Animation).play();
        this.xitKem.zIndex = 1
        this.scheduleOnce(() => {
            this.xitKem.position = cc.v3(271.958, -373.765)
            this.isDelayKem = false;
            this.scheduleOnce(() => {
                if (this.isTut == 3) {
                    this.cakeNode.getComponent("cake").tutOnPlate()
                }
            }, 5)
            if (this.isTut == 5) {
                this.scheduleOnce(() => {
                    if (this.isTut == 5) {
                        this.btn_qua()
                    }
                }, 5)
            }
        }, 0.5)
    }
    isKem2Qua = null
    btn_qua() {
        if (this.isKem2Qua == null) return;
        this.isTut = 6
        this.listHand.children[3].active = false

        if (this.isKem2Qua) {
            this.cake.getComponent("cake2").xitQuaKem()
        }
        else {
            this.cake.getComponent("cake2").xitQua()
        }
        this.scheduleOnce(() => {
            this.onEndGame()
        }, 1)
    }
    showCus() {
        let child = this.listCus.children[0]
        child.position = cc.v3(-700, -50)
        cc.tween(child).to(0.8, { position: cc.v3(0, -50) }).call(() => {
            child.getChildByName("pop").active = true
            this.isTargetPop = child.getChildByName("pop")
            this.isTargetCus = child;
            this.listHand.children[0].active = true
            // this.scheduleOnce(() => {
            //     cc.audioEngine.play(this.soundShowPop, false, 1)

            // }, 0.1)
        }).start()

    }
    successCus() {
        this.isTargetCus = null;
        this.isTargetPop = null;

    }
    creatFxColor(pos, scale) {
        let pre = cc.instantiate(this.fxColor)
        pre.parent = this.node
        pre.position = pos
        pre.scale = scale
    }
    nextCus() {
        this.countCus++
        if (this.countCus == 3) {
            this.onEndGame()
        }
        else {
            let child = this.listCus.children[this.countCus]
            child.position = cc.v3(700, 123.591)
            child.active = true
            cc.tween(child).to(0.8, { position: cc.v3(0, 123.591) }).call(() => {
                child.getChildByName("pop").active = true
                this.isTargetPop = child.getChildByName("pop")
                this.isTargetCus = child;
                this.scheduleOnce(() => {
                    cc.audioEngine.play(this.soundShowPop, false, 1)

                }, 0.1)
            }).start()
        }

    }
    arrHotDog = [null, null, null, null, null, null];
    arrBreak = [null, null, null];
    arrTuongCa = []
    btn_hotDog(event) {
        // if (this.arrHotDog.length >= 6) return;
        let check = this.checkSlotHotDog()
        console.log(check)
        if (check == null) return;

        cc.audioEngine.play(this.soundShowPop, false, 1)
        this.listHand.children[0].opacity = 0
        this.scheduleOnce(() => {
            this.listHand.children[1].active = true

        }, 0.5)
        let dem = this.arrHotDog.length
        let hotDog = cc.instantiate(this.preHotDog);
        console.log(this.listChao)
        hotDog.parent = this.listChao.children[check];
        hotDog.position = cc.v3(0, 0)
        hotDog.getComponent("hotdog").value = check
        this.arrHotDog[check] = hotDog
        let pos = event.currentTarget.position
        this.creatFxColor(pos, 2)

    }
    checkSlotHotDog() {
        for (let i = 0; i < this.arrHotDog.length; i++) {
            if (this.arrHotDog[i] == null) return i
        }
        return null
    }
    checkSlotBread() {
        for (let i = 0; i < this.arrBreak.length; i++) {
            if (this.arrBreak[i] == null) return i
        }
        return null
    }
    btn_bread(event) {
        // if (this.arrBreak.length >= 3) return;
        // let dem = this.arrBreak.length
        let check = this.checkSlotBread()
        if (check == null) return;
        cc.audioEngine.play(this.soundShowPop, false, 1)

        let bread = cc.instantiate(this.preBread);
        bread.parent = this.listKhayBanhMi.children[check];
        bread.position = cc.v3(0, 0)
        bread.getComponent("preBread").value = check
        this.arrBreak[check] = bread
        this.listHand.children[1].opacity = 0
        this.scheduleOnce(() => {
            this.listHand.children[2].active = true

        }, 0.5)
        let pos = event.currentTarget.position
        this.creatFxColor(pos, 2)

    }
    sellBread(value) {
        // console.log(value)
        if (this.isTargetCus == null) return;
        if (this.isTargetPop == null) return;
        this.listHand.children[4].opacity = 0

        let child = this.arrBreak[value];
        this.arrBreak[value] = null;
        let posEnd = this.isTargetPop.position
        posEnd = this.isTargetPop.parent.convertToWorldSpaceAR(posEnd)
        posEnd = child.parent.convertToNodeSpaceAR(posEnd)
        let pos = child.parent.convertToWorldSpaceAR(child.position);
        pos = this.node.convertToNodeSpaceAR(pos)
        cc.tween(child).to(0.4, { position: posEnd.add(cc.v3(50, 0)), scale: 0.7 }).call(() => {
            child.opacity = 0
            this.isTargetCus.getComponent("cusMission").checkBread(child)
        }).start()

        this.creatFxColor(pos, 1.5)
    }
    isDelaytuong = false
    btn_tuongCa() {
        if (this.isDelaytuong) return;
        if (this.arrBreak.length <= 0) return;
        let bread = this.checkTuongCa();
        if (bread == null) return;
        this.isDelaytuong = true
        cc.audioEngine.play(this.soundShowPop, false, 1)
        this.listHand.children[3].opacity = 0
        this.scheduleOnce(() => {
            this.listHand.children[4].active = true

        }, 1)
        let posStart = bread.position.add(cc.v3(40, 150));
        posStart = bread.parent.convertToWorldSpaceAR(posStart);
        posStart = this.node.convertToNodeSpaceAR(posStart)
        let posEnd = this.tuongOt.position
        let posMid = cc.v2((posStart.x + posEnd.x) / 2, (posStart.y + posEnd.y) / 2 + 100)
        this.tuongOt.getComponent(cc.Animation).play()
        this.scheduleOnce(() => {
            bread.getComponent("preBread").getTuongCa()
            cc.audioEngine.play(this.soundChesse, false, 1)

        }, 0.25)
        cc.tween(this.tuongOt).bezierTo(0.5, cc.v2(posEnd.x, posEnd.y), cc.v2(posMid.x, posMid.y), cc.v2(posStart.x, posStart.y)).call(() => {

        }).delay(0.2).call(() => {
            this.tuongOt.position = posEnd
            this.tuongOt.children[0].angle = 0
            this.isDelaytuong = false
        }).start()

    }
    checkTuongCa() {
        for (let i = 0; i < this.arrBreak.length; i++) {
            let chld = this.arrBreak[i]
            if (chld != null && chld.getComponent("preBread").isHotDog == true && chld.getComponent("preBread").isTuongCa == false) {
                return chld
            }
        }
        return null
    }

    clickHotDog(value, node) {
        if (this.arrBreak.length <= 0) return;
        let child = this.checkBread()
        if (child == null) return;
        cc.audioEngine.play(this.soundShowPop, false, 1)
        this.listHand.children[2].opacity = 0
        this.scheduleOnce(() => {
            this.listHand.children[3].active = true

        }, 0.5)
        this.arrHotDog[value] = null
        child.getComponent("preBread").getHotDog()
        let pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.convertToNodeSpaceAR(pos)
        node.opacity = 0

        this.scheduleOnce(() => {
            node.destroy()

        }, 0.1)

        this.creatFxColor(pos, 1.5)
    }
    checkBread() {
        for (let i = 0; i < this.arrBreak.length; i++) {
            let chld = this.arrBreak[i]
            if (chld != null && chld.getComponent("preBread").isHotDog == false) {
                return chld
            }
        }
        return null
    }
    onEndGame() {
        cc.audioEngine.play(this.soundWin, false, 1)
        this.endCard.active = true;
        this.linkToStore.active = true
    }
    // btn_choose(event, value) {
    //     console.log(value)
    //     switch (value) {
    //         case "0":
    //             this.hand.active = false

    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true
    //             // this.sceneMusic.active = true
    //             this.sceneMusic.getComponent("mainMusic").loadData(1)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             // this.hand.active = true
    //             break;
    //         case "1":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true

    //             this.sceneMusic.getComponent("mainMusic").loadData(2)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "2":
    //             this.sceneGun.position = cc.v3(3000, 0)
    //             this.sceneGun.active = true
    //             this.sceneGun.getComponent("mainGun").loadData(1)
    //             this.sceneGun.getComponent(cc.Animation).play()
    //             this.sceneMain.active = false
    //             break;
    //         case "3":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true

    //             this.sceneMusic.getComponent("mainMusic").loadData(3)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "4":
    //             this.sceneMusic.position = cc.v3(3000, 0)
    //             this.sceneMusic.active = true

    //             this.sceneMusic.getComponent("mainMusic").loadData(4)
    //             this.sceneMusic.getComponent(cc.Animation).play()
    //             break;
    //         case "5":
    //             this.sceneGun.position = cc.v3(3000, 0)
    //             this.sceneGun.active = true
    //             this.sceneGun.getComponent("mainGun").loadData(2)
    //             this.sceneGun.getComponent(cc.Animation).play()
    //             this.sceneMain.active = false

    //             break;
    //     }
    // }
    update(dt) {
        let deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    }
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1.05
        this.endCard.scale = (logic) ? 1.2 : 0.7
        this.logo.scale = (logic) ? 0.6 : 0.4
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        if (logic == true) {
            this.camera.node.position = cc.v3(0, 100)

            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            this.camera.zoomRatio = 2.5

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                console.log("check iphonex")

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.8

            }
        }
        else {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            this.camera.node.position = cc.v3(0, -30)
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.95
            }
        }

    }
}
