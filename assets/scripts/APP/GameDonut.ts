

const { ccclass, property } = cc._decorator;
globalThis.gold = 0
globalThis.scGame = false
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.AudioClip)
    soundShowPop: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundClosePop: cc.AudioClip = null
    @property(cc.AudioClip)
    soundChien: cc.AudioClip = null
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundLose: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundHello: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundHelloCus2: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundHelloCus3: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundTrans: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundClick: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundDonutJump: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundEnd: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundSellDone: cc.AudioClip = null;
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

    // @property(cc.Node)
    // listHand: cc.Node = null;

    @property(cc.AudioClip)
    soundWrong: cc.AudioClip = null
    @property(cc.AudioClip)
    soundChienRan: cc.AudioClip = null
    @property(cc.AudioClip)
    soundEror:cc.AudioClip=null

    @property(cc.Prefab)
    fxColor: cc.Prefab = null

    //new
    @property(cc.Node)
    btnDonut: cc.Node = null
    @property(cc.Prefab)
    preDonut: cc.Prefab = null
    @property(cc.Node)
    listDonutPlace: cc.Node = null;
    @property(cc.Node)
    listDonutSub: cc.Node = null;
    @property(cc.Node)
    listKhayPlace: cc.Node = null;
    @property(cc.Node)
    listKhaySub: cc.Node = null
    @property(cc.Node)
    listhand: cc.Node = null
    // @property(cc.Node)
    // btnDau: cc.Node = null;

    //isLockVegettable
    @property(cc.Prefab)
    preChicken: cc.Prefab = null;
    @property(cc.Node)
    listKhayTren: cc.Node = null;
    @property(cc.Node)
    listRo: cc.Node[] = [];
    @property(cc.Node)
    listBoxPlace: cc.Node = null;
    @property(cc.Node)
    btnChili: cc.Node = null;
    @property(cc.Node)
    btnHop: cc.Node = null;
    @property(cc.Prefab)
    preLike: cc.Prefab = null;
    @property(cc.Node)
    likeNode: cc.Node = null;
    @property(cc.Prefab)
    preBox: cc.Prefab = null
    @property(cc.Node)
    main: cc.Node = null
    @property(cc.Node)
    failNode: cc.Node = null;
    @property(cc.Node)
    warning:cc.Node=null;
    listPosRo = [cc.v3(-290, -275), cc.v3(8, -278), cc.v3(310, -275)]





    maxKhay = 7

    arrDonutpos = []
    arrDonut = [null, null, null, null, null, null, null]
    arrKhay = [null, null, null, null]
    arrKhayPos = []
    isTutChili = false
    isTutMeat = false
    isTutVegetTable = false
    isTutClickMeat = false


    isTargetPop = null;
    isStep = 0
    isTargetCus = null;
    adChanel = '{{__adv_channels_adapter__}}'
    countCus = 0
    idSound = null
    onLoad() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    }
    start() {
        this.showCus()
        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.3)
        this.idSound = cc.audioEngine.play(this.soundChien, true, 0.5)
        for (let i = 0; i < this.listRo.length; i++) {
            let ro = this.listRo[i];
            for (let j = 0; j < ro.childrenCount; j++) {
                this.scheduleOnce(() => {
                    let ga = ro.children[j];
                    ga.opacity = 0;
                    ga.active = true;
                    let localPos = ga.position;
                    ga.position = localPos.add(cc.v3(0, 200));
                    cc.tween(ga).to(0.1, { opacity: 255 }).start();
                    cc.tween(ga).to(0.2, { position: localPos }).to(0.05, { scale: 1.3 }).to(0.05, { scale: 1.4 }).call(() => {
                        if (i == 0) {
                            cc.audioEngine.play(this.soundClick, false, 1)

                        }
                        if (i == this.listRo.length - 1 && j == ro.childrenCount - 1) {
                            this.actionKhay()
                        }
                    }).start()

                }, 0.15 * j)

            }
        }
        this.btnChili.zIndex = 2
    }
    actionKhay() {
        for (let i = 0; i < this.listRo.length; i++) {
            let ro = this.listRo[i];
            cc.tween(ro).to(0.25, { position: { value: this.listPosRo[i], easing: "sineIn" } }).call(() => {
                if (i == this.listRo.length - 1) {
                    cc.audioEngine.play(this.soundChienRan, false, 1)
                }
            }).start()
        }
        this.scheduleOnce(() => {
            this.actionChicken()

        }, 0.2)
    }
    actionChicken() {
        for (let i = 0; i < this.listRo.length; i++) {
            let ro = this.listRo[i];
            for (let j = 0; j < ro.childrenCount; j++) {
                let ga = ro.children[j];
                ga.getComponent("donut").show()


            }
        }
        this.btnHop.active = true
    }
    spawDisLike() {
        let arrPos = [cc.v3(-110.292), cc.v3(199, 329), cc.v3(-93, 342), cc.v3(180, 362), cc.v3(-110.292), cc.v3(199, 329)]
        for (let i = 0; i < 6; i++) {
            this.scheduleOnce(() => {
                let like = cc.instantiate(this.preLike);
                let pos = cc.v3(0, 0);

                pos = arrPos[i];
                like.position = pos
                like.parent = this.likeNode
                cc.tween(like).by(0.6, { position: cc.v3(0, -200) }).start()
                cc.tween(like).delay(0.4).to(0.2, { opacity: 0 }).call(() => {
                    like.destroy()
                }).start()
            }, 0.15 * i)
        }
    }

    showCus() {
        let child = this.listCus.children[0]
        child.position = cc.v3(700, 123.591)
        cc.tween(child).to(0.8, { position: cc.v3(0, 123.591) }).call(() => {
            child.getChildByName("pop").scale = 0

            child.getChildByName("pop").active = true
            child.children[1].getComponent(sp.Skeleton).setAnimation(0, "idle", true)
            this.isTargetPop = child.getChildByName("pop")
            this.isTargetCus = child;

            cc.audioEngine.play(this.soundHello, false, 4)
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundShowPop, false, 1)
            }, 0.1)
            // this.btnDonut.getComponent(cc.Button).enabled = true
            this.scheduleOnce(() => {
                if (this.isClickDonut == false) {
                    this.listhand.children[0].active = true

                }
            }, 3)
        }).start()

    }
    successCus() {
        this.isTargetCus = null;
        this.isTargetPop = null;
        this.scheduleOnce(() => {
            if (this.countCus == 2) {
                this.onEndGame(false)

            }
        }, 1.5)


    }
    creatFxColor(pos, scale) {
        let pre = cc.instantiate(this.fxColor)
        pre.parent = this.node
        pre.position = pos
        pre.scale = scale
    }
    nextCus(value) {
        this.countCus++
        // this.btnDau.active = true

        if (this.countCus == 3) {
            // this.onEndGame(value)
        }
        else {
            let child = this.listCus.children[this.countCus]
            child.position = cc.v3(700, 123.591)
            child.active = true
            cc.tween(child).to(0.8, { position: cc.v3(0, 123.591) }).call(() => {
                child.getChildByName("pop").scale = 0
                child.getChildByName("pop").active = true
                child.children[1].getComponent(sp.Skeleton).setAnimation(0, "idle", true)

                this.isTargetPop = child.getChildByName("pop")
                this.isTargetCus = child;
                this.scheduleOnce(() => {
                    cc.audioEngine.play(this.soundShowPop, false, 1)
                    if (this.countCus == 1) {
                        cc.audioEngine.play(this.soundHelloCus2, false, 2)
                    }
                    else if (this.countCus == 2) {
                        cc.audioEngine.play(this.soundHelloCus3, false, 2)
                    }
                    let box = cc.instantiate(this.preBox)
                    box.parent = this.main
                    box.zIndex = 1;
                    box.position = cc.v3(-175, -559)
                    this.btnHop = box
                    this.arrKhay = [null, null, null, null]
                    this.listBoxPlace = box.getChildByName("listGa")
                    this.btnChili.getComponent("chili").sauce = box.getChildByName("sot")
                }, 0.1)

            }).start()
        }

    }
    isClickDonut = false
    btn_donut(event) {
        let check = this.checkSlotDonut()
        if (check == null) return;
        this.isClickDonut = true;
        let pos = event.currentTarget.position
        this.creatFxColor(pos, 2)
        cc.audioEngine.play(this.soundClick, false, 1)
        let donut = cc.instantiate(this.preChicken);
        donut.parent = this.listBoxPlace;
        donut.position = this.listBoxPlace.children[check].position
        donut.getComponent("donut").value = check
        donut.scale = 1.4
        this.arrDonut[check] = donut
        // this.scheduleOnce(() => {
        //     donut.children[0].active = false
        //     donut.getComponent(cc.Animation).play("donut_idle")
        // }, 1)
        this.scheduleOnce(() => {
            this.listhand.children[0].active = false;

        }, 1)
        this.scheduleOnce(() => {

            if (this.isClickDonutChin == false) {
                this.listhand.children[1].active = true
            }
        }, 3)
        // let pos = event.currentTarget.position
    }
    isClickDonutChin = false
    isClickSocola = false
    checkSlotDonut() {//kiem tra co donut tren chao ko
        for (let i = 0; i < this.arrDonut.length; i++) {
            if (this.arrDonut[i] == null) return i
        }
        return null
    }
    checkSlotKhay() {
        for (let i = 0; i < this.arrKhay.length; i++) {
            let chld = this.arrKhay[i]
            if (chld == null) {
                return i
            }
        }
        return null
    }
    isReadyChicken = false
    isFirstBox = false
    setReadyChicken() {
        this.isReadyChicken = true;
        if (!this.isFirstBox) {
            this.scheduleOnce(() => {
                this.btnHop.getChildByName("hand").active = true;

            }, 2)
            this.isFirstBox = true
        }
    }
    btn_clickHop() {
        if (!this.isReadyChicken) return;
        if (this.isTargetCus == null) return;
        if (this.isTargetPop == null) return;
        this.isReadyChicken = false
        if (this.btnHop.getChildByName("hand")) {
            this.btnHop.getChildByName("hand").opacity = 0
        }
        // this.listHand.children[4].opacity = 0
        this.listhand.children[3].active = false
        this.isClickKhay = true;
        let dn = this.btnHop
        dn.getComponent(cc.Button).enabled = false
        cc.audioEngine.play(this.soundTrans, false, 1)
        let child = this.btnHop
        // this.arrKhay[value] = null;
        let posEnd = this.isTargetPop.position
        posEnd = this.isTargetPop.parent.convertToWorldSpaceAR(posEnd)
        posEnd = child.parent.convertToNodeSpaceAR(posEnd)
        let pos = child.parent.convertToWorldSpaceAR(child.position);
        pos = this.node.convertToNodeSpaceAR(pos)
        cc.tween(child).to(0.4, { position: posEnd.add(cc.v3(0, 0)), scale: 0.6 }).call(() => {
            child.opacity = 0

        }).start()
        if (this.isTargetCus) {
            this.isTargetCus.getComponent("cusMission").checkSell(child)

        }
        this.creatFxColor(pos.add(cc.v3(0, 50)), 1.5)
    }
    countDonut = 0
    clickDonut(value, node) {

        let slot = this.checkSlotKhay()
        if (slot == null) {
            node.getComponent("donut").isTouching = false
            this.btnHop.children[0].getComponent(cc.Animation).play()
            return;
        }
        node.getComponent("donut").isStep = 1
        this.listhand.children[0].opacity = 0;
        console.log("click donut")
        this.isClickDonutChin = true
        // this.listhand.children[1].active = false
        cc.audioEngine.play(this.soundDonutJump, false, 0.6)
        let poslocal = node.parent.convertToWorldSpaceAR(node.position);
        poslocal = this.listBoxPlace.convertToNodeSpaceAR(poslocal)
        let donut = node
        let pos = this.listBoxPlace.children[slot].position
        donut.parent = this.listBoxPlace
        this.arrKhay[slot] = donut
        this.arrDonut[value] = null
        donut.zIndex = 100
        donut.position = poslocal
        donut.getComponent("donut").value = slot

        let startpos = cc.v2(poslocal.x, poslocal.y);
        let endPos = cc.v2(pos.x, pos.y)
        let midPos = cc.v2(endPos.x, endPos.y + 400)
        cc.tween(donut).bezierTo(0.3, startpos, midPos, endPos).start()
        cc.tween(donut).to(0.3, { angle: this.listBoxPlace.children[slot].angle, scale: 1.1 }).start()
        this.scheduleOnce(() => {
            donut.zIndex = slot

        }, 0.2)
        this.countDonut++
        if (this.countDonut == 4 || this.countDonut == 8 || this.countDonut == 12) {
            this.showHindChili()
        }

    }
    showHindChili() {
        this.scheduleOnce(() => {
            this.btnChili.children[0].active = true
            this.scheduleOnce(() => {
                this.btnChili.getChildByName("hand").active = true

            }, 3)
            this.btnChili.getComponent(cc.Button).enabled = true
        }, 0.3)

    }
    checkSlotNhan() {
        for (let i = 0; i < this.arrKhay.length; i++) {
            let donut = this.arrKhay[i]
            if (donut != null && donut.getComponent("donut").isStep == 1) {
                return i
            }
        }
        return null
    }
    btn_chocalate(event) {
        let check = this.checkSlotNhan()
        if (check == null) return;
        if (this.btnHop.getComponent("boxChicken").isSauce == true) return;
        this.btnHop.getComponent("boxChicken").isSauce = true
        // this.listhand.children[2].active = false
        this.btnChili.getChildByName("hand").opacity = 0;
        this.btnChili.getComponent(cc.Animation).play()
        this.isClickSocola = true
        // cc.audioEngine.play(this.soundTrans, false, 1)
        // let donut = this.arrKhay[check]
        // this.arrKhay[check] = null;
        // donut.getComponent("donut").onSocola()
        let pos = event.currentTarget.position
        this.creatFxColor(pos, 2)


        // this.scheduleOnce(() => {
        //     if (this.isClickKhay == false) {
        //         this.listhand.children[3].active = true
        //     }
        // }, 3)
    }

    isClickKhay = false
    // btn_dau(event) {
    //     let check = this.checkSlotNhan()
    //     if (check == null) return;
    //     cc.audioEngine.play(this.soundTrans, false, 1)

    //     let donut = this.arrKhay[check]
    //     // this.arrKhay[check] = null;
    //     donut.getComponent("donut").onDau()
    //     let pos = event.currentTarget.position
    //     this.creatFxColor(pos, 2)
    // }
    sellDonut(value, dn) {
        // console.log(value)
        if (this.isTargetCus == null) return;
        if (this.isTargetPop == null) return;
        // this.listHand.children[4].opacity = 0
        this.listhand.children[3].active = false
        this.isClickKhay = true;
        dn.getComponent(cc.Button).enabled = false
        cc.audioEngine.play(this.soundTrans, false, 1)
        let child = this.arrKhay[value];
        this.arrKhay[value] = null;
        let posEnd = this.isTargetPop.position
        posEnd = this.isTargetPop.parent.convertToWorldSpaceAR(posEnd)
        posEnd = child.parent.convertToNodeSpaceAR(posEnd)
        let pos = child.parent.convertToWorldSpaceAR(child.position);
        pos = this.node.convertToNodeSpaceAR(pos)
        cc.tween(child).to(0.4, { position: posEnd.add(cc.v3(0, 0)), scale: 0.7 }).call(() => {
            child.opacity = 0

        }).start()
        if (this.isTargetCus) {
            this.isTargetCus.getComponent("cusMission").checkSell(child)

        }
        this.creatFxColor(pos.add(cc.v3(0, 50)), 1.5)
    }


    setGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));

    }
    offGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    }






    onEndGame(value) {
        // cc.audioEngine.play(this.soundEnd, false, 1)
        if (value == true) {
            cc.audioEngine.play(this.soundWin, false, 1)

        }
        else {
            cc.audioEngine.stop(this.idSound)
            cc.audioEngine.play(this.soundLose, false, 1)

        }
        this.failNode.active = true;
        this.scheduleOnce(() => {
            this.failNode.children[0].active = false
            cc.tween(this.failNode.children[1]).to(0.3, { scale: 0 }).start()
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundEnd, false, 1)
                this.endCard.active = true;
                this.linkToStore.active = true
            }, 1)

        }, 1.2)

    }
    // btn_choose(event, value) {

    update(dt) {
        // this.lbCoin.string = globalThis.gold.toString()
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
        this.camera.zoomRatio = 1
        this.endCard.scale = (logic) ? 1.2 : 0.7
        this.failNode.scale = (logic) ? 1 : 0.7

        this.logo.scale = (logic) ? 0.6 : 0.4
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        this.camera.node.position = cc.v3(0, -60)
        this.listCus.scale = (logic) ? 1.2 : 1
        this.listCus.position = (logic) ? cc.v3(0, -130) : cc.v3(0, -120)

        if (logic == true) {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            this.camera.node.position = cc.v3(0, 100)

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            this.camera.zoomRatio = 2

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.camera.zoomRatio = 2.38

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.6
                this.camera.node.position = cc.v3(0, 150)

            }
        }
        else {
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
                this.camera.zoomRatio = 0.9
                this.camera.node.position = cc.v3(0, -20)

            }
        }


    }
}
