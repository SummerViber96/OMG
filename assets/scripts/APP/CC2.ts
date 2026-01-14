
globalThis.coin = 0;
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
<<<<<<< Updated upstream
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
=======

    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.AudioClip)
    hairCut: cc.AudioClip = null
    @property(sp.Skeleton)
    char1: sp.Skeleton = null;
    @property(sp.Skeleton)
    char2: sp.Skeleton = null
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    @property(cc.AudioClip)
    soundChesse: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWrong: cc.AudioClip = null
=======
    @property(cc.Node)
    barCoin: cc.Node = null
>>>>>>> Stashed changes
    @property(cc.Prefab)
    preCoin: cc.Prefab = null
    @property(cc.Label)
    lbCoin: cc.Label = null
    @property(cc.Node)
    scene2: cc.Node = null
    @property(cc.Camera)
    uiCamera: cc.Camera = null;
    @property(cc.Node)
    uiNode: cc.Node = null
    @property(cc.Node)
    btnUnlock: cc.Node = null;
    @property(cc.Node)
    rem2: cc.Node = null;
    @property(cc.Node)
<<<<<<< Updated upstream
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
=======
    placeChar2: cc.Node = null
    private selectedItem: cc.Node = null;

    adChanel = '{{__adv_channels_adapter__}}'

>>>>>>> Stashed changes
    start() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
<<<<<<< Updated upstream
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
=======
        cc.audioEngine.play(this.soundBg, true, 0.3)
        cc.audioEngine.play(this.hairCut, false, 1)
        this.startScene()
    }
    startScene() {
        let char1Node = this.char1.node
        cc.tween(char1Node).to(0.8, { position: cc.v3(110, -223) }).call(() => {
            this.char1.setAnimation(0, "Happy", false);
            char1Node.scaleX = -1.5;
            this.scheduleOnce(() => {
                this.giveCoin()

            }, 0.3)
>>>>>>> Stashed changes
        }).start()
    }
    giveCoin() {
        let posStart = this.char1.node.parent.convertToWorldSpaceAR(this.char1.node.position);
        posStart = this.camera.getWorldToScreenPoint(posStart);
        posStart = this.uiCamera.getScreenToWorldPoint(posStart);
        posStart = this.uiNode.convertToNodeSpaceAR(posStart).add(cc.v3(0, 420));
        let posEnd = this.barCoin.children[1].position;
        posEnd = this.barCoin.convertToWorldSpaceAR(posEnd);
        posEnd = this.uiNode.convertToNodeSpaceAR(posEnd)

        let midPos = cc.v2((posEnd.x + 500), (posStart.y + posEnd.y) / 2)
        for (let i = 0; i < 8; i++) {
            this.scheduleOnce(() => {
                let coin = cc.instantiate(this.preCoin);
                coin.parent = this.node;
                coin.parent = this.uiNode;
                coin.position = posStart;
                cc.tween(coin).bezierTo(1, cc.v2(posStart.x, posStart.y), midPos, cc.v2(posEnd.x, posEnd.y)).start()
                cc.tween(coin).to(1, { scale: 1.3 }).call(() => {
                    coin.destroy()
                    globalThis.coin += 50
                }).start()
            }, 0.05 * i)
        }
        this.scheduleOnce(() => {
            this.btnUnlock.getComponent(cc.Animation).play()
        }, 0.6)
        this.scheduleOnce(() => {
            this.char1.setAnimation(0, "Walk", true);
            this.char1.node.zIndex = 2
            cc.tween(this.char1.node).by(4, { position: cc.v3(1600, 0) }).call(() => {
                this.char1.node.active = false
            }).start()

        }, 1)
        this.char2.setAnimation(0, "Walk", true);
        cc.tween(this.char2.node).to(3, { position: cc.v3(-407, -925) }).call(() => {
            this.char2.setAnimation(0, "Talk", true);
            this.char2.node.getChildByName("pop").active = true

        }).start()


    }
    btn_unlock() {
        this.btnUnlock.active = false;
        this.rem2.opacity = 0
        this.rem2.active = true
        cc.tween(this.rem2).to(0.3, { opacity: 255 }).start()
        this.onEventListener()
    }
    onEventListener() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    offEventListener() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    onTouchStart(event: cc.Event.EventTouch) {
        if (this.selectedItem) return

        let screenPos = event.getLocation();

        let worldPos = this.camera.getScreenToWorldPoint(screenPos);

        // Chuyển world → local (node main)
        let localPos = this.node.convertToNodeSpaceAR(worldPos);
        if (this.char2.node.position.sub(localPos).mag() < 300) {
            this.char2.node.setPosition(localPos);
            this.selectedItem = this.char2.node
        }
        // Đặt vị trí cho item

        // this.main.guideDrag.active = false;
        // this.node.opacity = 0
    }

    onTouchMove(event: cc.Event.EventTouch) {
        if (!this.selectedItem) return;
        let screenPos = event.getLocation();

        let worldPos = this.camera.getScreenToWorldPoint(screenPos);

        // Chuyển world → local (node main)
        let localPos = this.node.convertToNodeSpaceAR(worldPos);

        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
    }

    onTouchEnd(event: cc.Event.EventTouch) {
        if (!this.selectedItem) return;

        let screenPos = event.getLocation();

        let worldPos = this.camera.getScreenToWorldPoint(screenPos);

        // Chuyển world → local (node main)
        let localPos = this.node.convertToNodeSpaceAR(worldPos);

        // Đặt vị trí cho item
        this.selectedItem.setPosition(localPos);
        let check = this.checkOnFloor(localPos);
        if (check == true) {
            this.selectedItem.position = cc.v3(-500, -259)
            this.offEventListener()
        }
    }
    checkOnFloor(localPos) {
        if (localPos.sub(this.placeChar2.position).mag() <= 600) {
            return true
        }
        else {
            this.selectedItem.position = cc.v3(-407, -925)
            this.selectedItem = null
            return false;
        }
    }
    onEndGame() {
        cc.audioEngine.play(this.soundWin, false, 1)
        this.endCard.active = true;
        this.linkToStore.active = true
    }

    update(dt) {
        this.lbCoin.string = globalThis.coin.toString()
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
