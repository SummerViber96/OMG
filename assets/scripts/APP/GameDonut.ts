

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
    soundSellDone
        : cc.AudioClip = null;
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

    maxKhay = 7

    arrDonutpos = []
    arrDonut = [null, null, null, null, null, null, null]
    arrKhay = [null, null, null, null, null, null, null]
    arrKhayPos = []
    isTutChili = false
    isTutMeat = false
    isTutVegetTable = false
    isTutClickMeat = false
    // @property(cc.AudioClip)
    // soundBg:cc.AudioClip=null;

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
        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.5)
        this.scheduleOnce(() => {
            cc.audioEngine.play(this.soundTrans, false, 1)
            for (let i = 0; i < this.btnDonut.childrenCount; i++) {
                let child = this.btnDonut.children[i]
                let localPos = child.position
                this.scheduleOnce(() => {
                    child.position = localPos.add(cc.v3(0, 80))
                    cc.tween(child).to(0.17, { position: localPos, opacity: 255 }).start()
                }, i * 0.05)
            }
        }, 0.3)
        for (let i = 0; i < this.listDonutSub.childrenCount; i++) {
            this.arrDonutpos.push(this.listDonutSub.children[i].position);
        }
        for (let i = 0; i < this.listKhaySub.childrenCount; i++) {
            this.arrKhayPos.push(this.listKhaySub.children[i].position);
        }
    }
    showCus() {
        let child = this.listCus.children[0]
        child.position = cc.v3(700, 123.591)
        cc.tween(child).to(0.8, { position: cc.v3(0, 123.591) }).call(() => {
            child.getChildByName("pop").active = true
            child.children[0].getComponent(sp.Skeleton).setAnimation(0, "idle", true)
            this.isTargetPop = child.getChildByName("pop")
            this.isTargetCus = child;
            cc.audioEngine.play(this.soundHello, false, 1)
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundShowPop, false, 1)
            }, 0.1)
            this.btnDonut.getComponent(cc.Button).enabled = true
            this.scheduleOnce(() => {
                if (this.isClickDonut == false) {
                    this.listhand.children[0].active = true

                }
            }, 2)
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
    nextCus(value) {
        this.countCus++
        if (this.countCus == 3) {
            this.onEndGame(value)
        }
        else {
            let child = this.listCus.children[this.countCus]
            child.position = cc.v3(700, 123.591)
            child.active = true
            cc.tween(child).to(0.8, { position: cc.v3(0, 123.591) }).call(() => {
                child.getChildByName("pop").active = true
                child.children[0].getComponent(sp.Skeleton).setAnimation(0, "idle", true)

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
                }, 0.1)
                // if (this.countCus == 3) {
                //     this.isStep = 1
                //     this.onBtn(this.btnMeatNode)
                //     if (globalThis.gold < 100) {
                //         globalThis.gold = 100
                //     }
                //     this.listHand.children[5].active = true
                // }
                // else if (this.countCus == 4 && this.isLockVegettable == true) {
                //     if (globalThis.gold < 150) {
                //         globalThis.gold = 150
                //     }
                // }
            }).start()
        }

    }
    isClickDonut = false
    btn_donut(event) {
        let check = this.checkSlotDonut()
        if (check == null) return;
        this.isClickDonut = true;
        this.listhand.children[0].active = false;
        let pos = event.currentTarget.position
        this.creatFxColor(pos, 2)
        cc.audioEngine.play(this.soundClick, false, 1)
        let donut = cc.instantiate(this.preDonut);
        donut.parent = this.listDonutPlace;
        donut.position = this.arrDonutpos[check]
        donut.getComponent("donut").value = check
        donut.scale = 0.95
        this.arrDonut[check] = donut

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
    clickDonut(value, node) {

        let slot = this.checkSlotKhay()
        if (slot == null) return;
        this.isClickDonutChin=true
        this.listhand.children[1].active = false
        cc.audioEngine.play(this.soundDonutJump, false, 0.6)
        let donut = this.arrDonut[value]
        let pos = this.arrKhayPos[slot]
        donut.parent = this.listKhayPlace
        this.arrKhay[slot] = donut
        this.arrDonut[value] = null
        donut.getComponent("donut").value = slot
        donut.zIndex = slot
        let startpos = cc.v2(donut.x, donut.y);
        let endPos = cc.v2(pos.x, pos.y)
        let midPos = cc.v2(endPos.x, endPos.y + 200)
        cc.tween(donut).bezierTo(0.3, startpos, midPos, endPos).start()
        cc.tween(donut.children[1]).to(0.3, { angle: -72 }).start()
        this.scheduleOnce(() => {
            if (this.isClickSocola == false) {
                this.listhand.children[2].active = true
            }
        }, 3)
        // this.creatFxColor(pos, 1.5)
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
        this.listhand.children[2].active = false
        this.isClickSocola = true
        cc.audioEngine.play(this.soundTrans, false, 1)
        let donut = this.arrKhay[check]
        // this.arrKhay[check] = null;
        donut.getComponent("donut").onSocola()
        let pos = event.currentTarget.position
        this.creatFxColor(pos, 2)
    }
    btn_dau(event) {
        let check = this.checkSlotNhan()
        if (check == null) return;
        cc.audioEngine.play(this.soundTrans, false, 1)

        let donut = this.arrKhay[check]
        // this.arrKhay[check] = null;
        donut.getComponent("donut").onDau()
        let pos = event.currentTarget.position
        this.creatFxColor(pos, 2)
    }
    sellDonut(value, dn) {
        // console.log(value)
        if (this.isTargetCus == null) return;
        if (this.isTargetPop == null) return;
        // this.listHand.children[4].opacity = 0
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
    // checkSlotHotDog() {
    //     for (let i = 0; i < this.arrHotDog.length; i++) {
    //         if (this.arrHotDog[i] == null) return i
    //     }
    //     return null
    // }
    // checkSlotBread() {
    //     for (let i = 0; i < this.arrBreak.length; i++) {
    //         if (this.arrBreak[i] == null) return i
    //     }
    //     return null
    // }
    // checkSlotBuger() {
    //     for (let i = 0; i < this.arrBuger.length; i++) {
    //         if (this.arrBuger[i] == null) return i
    //     }
    //     return null
    // }


    setGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));

    }
    offGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    }






    onEndGame(value) {
        cc.audioEngine.play(this.soundEnd, false, 1)
        if (value == true) {
            cc.audioEngine.play(this.soundWin, false, 1)

        }
        else {
            cc.audioEngine.stop(this.idSound)
            cc.audioEngine.play(this.soundLose, false, 1)

        }
        this.endCard.active = true;
        this.linkToStore.active = true
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
        this.logo.scale = (logic) ? 0.6 : 0.4
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        this.camera.node.position = cc.v3(0, -60)
        // this.barCoin.scale = (logic) ? 1.6 : 1
        this.listCus.scale = (logic) ? 1.2 : 1
        this.listCus.position = (logic) ? cc.v3(0, -130) : cc.v3(0, -120)

        if (logic == true) {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            this.camera.node.position = cc.v3(0, 200)

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
