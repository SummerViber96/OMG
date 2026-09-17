

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
    @property(cc.AudioClip)
    soundoor: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundCut: cc.AudioClip = null;
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
    // @property(cc.Node)
    // btnDonut: cc.Node = null
    // @property(cc.Prefab)
    // preDonut: cc.Prefab = null
    // @property(cc.Node)
    // listDonutPlace: cc.Node = null;
    // @property(cc.Node)
    // listDonutSub: cc.Node = null;
    // @property(cc.Node)
    // listKhayPlace: cc.Node = null;
    // @property(cc.Node)
    // listKhaySub: cc.Node = null
    @property(cc.Node)
    listhand: cc.Node = null
    @property(cc.Node)
    btnDau: cc.Node = null;
    @property(cc.Node)
    cua: cc.Node = null
    @property(cc.Node)
    door: cc.Node = null;
    @property([cc.Prefab])
    listPreBox: cc.Prefab[] = [];
    @property(cc.Node)
    listItem2: cc.Node = null;
    @property(cc.Node)
    btnDone: cc.Node = null;
    @property(cc.Node)
    main2: cc.Node = null;
    @property(cc.Node)
    listBox: cc.Node = null
    @property(cc.Node)
    ro: cc.Node = null
    @property(cc.Node)
    listNoti: cc.Node = null;
    @property(cc.Node)
    hand1: cc.Node = null;
    @property(cc.Node)
    hand2: cc.Node = null;
    @property([cc.AudioClip])
    listSoundGame: cc.AudioClip[] = [];
    @property(cc.Node)
    handBtn: cc.Node = null;
    // @property(cc.Camera)
    // camera:cc.Camera=null

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

    protected start(): void {
        cc.audioEngine.play(this.soundBg, true, 0.3)
        this.scheduleOnce(() => {
            this.btn_openDoor()
        }, 2)
    }
    isOpenDoor = false
    btn_openDoor() {
        if (this.isOpenDoor == true) return;
        this.isOpenDoor = true;
        this.door.scale = 2
        this.cua.getComponent(cc.Animation).play()
        this.door.getChildByName("text").active = false
        cc.audioEngine.play(this.soundoor, false, 1)
        this.scheduleOnce(() => {
            this.cua.getComponent(cc.Button).enabled = false
        }, 0.3)
    }
    isClickBox = 0
    clickItem(boxValue, tag) {
        if (this.isClickBox >= 5) return;
        cc.audioEngine.play(this.soundClick, false, 1)
        let arrPos = [cc.v3(0, 56 + 100), cc.v3(109, 47 + 100), cc.v3(-105, 40 + 100), cc.v3(-52, 22 + 100), cc.v3(61, 22 + 100)]
        this.isClickBox++
        let box = cc.instantiate(this.listPreBox[tag])
        box.parent = this.listItem2;
        box.position = boxValue.position;
        this.hand1.active = false
        cc.tween(box).to(0.5, { position: arrPos[this.isClickBox - 1] }).call(() => {

        }).start()
        if (this.isClickBox == 1) {
            this.btnDone.active = true
        }
        if (this.isClickBox == 5) {
        this.handBtn.active = true
        }

    }
    isDone = false
    countItem = 0
    btn_done() {
        if (this.isDone == true) return;
        cc.audioEngine.play(this.soundClick, false, 1)
        this.handBtn.active = false
        this.handBtn.opacity = 0

        this.isDone = true
        this.btnDone.getComponent(cc.Button).enabled = false;
        this.main2.active = true;
        let arrPos = [cc.v3(0, 36), cc.v3(-158 - 60, 123), cc.v3(187 + 60, 128), cc.v3(211 + 60, -59), cc.v3(-203 - 60, -40)]
        let count = 0
        this.countItem = this.listItem2.childrenCount
        for (let i = this.listItem2.childrenCount - 1; i >= 0; i--) {
            let child = this.listItem2.children[i];
            child.parent = this.listBox
            child.scale = 2.7;
            child.position = arrPos[count]
            child.getComponent(cc.Button).enabled = true
            count++
        }
        cc.tween(this.main2).to(0.35, { scale: 0.5 }).start()
    }
    isCountNoti = 0
    moveToVong(box) {
        let count = this.isCountNoti
        cc.audioEngine.play(this.listSoundGame[count], false, 1);
        // this.scheduleOnce(() => {
        this.listNoti.children[count].active = true
        // }, 0.4)
        this.isCountNoti++
        this.scheduleOnce(() => {
            let midLocal = cc.v2(-200, 150);
            let endLocal = cc.v2(0, -30);
            let flyParent = this.node;
            let startWorld = box.parent.convertToWorldSpaceAR(box.position);
            let midWorld = this.ro.convertToWorldSpaceAR(cc.v3(midLocal.x, midLocal.y));
            let endWorld = this.ro.convertToWorldSpaceAR(cc.v3(endLocal.x, endLocal.y));

            box.parent = flyParent;
            box.zIndex = 999;
            box.setSiblingIndex(flyParent.childrenCount - 1);

            let startPos = flyParent.convertToNodeSpaceAR(startWorld);
            let midPos = flyParent.convertToNodeSpaceAR(midWorld);
            let endPos = flyParent.convertToNodeSpaceAR(endWorld);
            box.position = startPos;

            cc.tween(box).bezierTo(0.7, cc.v2(startPos.x, startPos.y), cc.v2(midPos.x, midPos.y), cc.v2(endPos.x, endPos.y)).call(() => {
                box.parent = this.ro;
                box.position = cc.v3(endLocal.x, endLocal.y);
            }).start()
            cc.tween(box).delay(0.4).to(0.3, { scale: 1.2 }).to(0.08, { scale: 1.1 }).start()
        }, 0.4)
        if (this.isCountNoti == 5) {
            this.scheduleOnce(() => {
                this.onEndGame(true)
            }, 1)
        }

    }

    onEndGame(value) {
        cc.audioEngine.play(this.soundEnd, false, 1)
        // if (value == true) {
        //     cc.audioEngine.play(this.soundWin, false, 1)

        // }
        // else {
        //     cc.audioEngine.stop(this.idSound)
        //     cc.audioEngine.play(this.soundLose, false, 1)

        // }
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

        this.logo.scale = (logic) ? 0.6 : 0.4
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        this.camera.node.position = cc.v3(0, 0)
        this.listNoti.scale = (logic) ? 1.2 : 0.7
        this.endCard.scale = (logic) ? 1.1 : 0.6
        this.endCard.position =(logic) ? cc.v3(0, 50) : cc.v3(0, 70)
        if (logic == true) {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            this.camera.node.position = cc.v3(0, -200)

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.73
                this.camera.node.position = cc.v3(0, 80)

            }
        }
        else {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            this.camera.zoomRatio = 0.37

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.36
                this.camera.node.position = cc.v3(0, -20)

            }
        }


    }
}
