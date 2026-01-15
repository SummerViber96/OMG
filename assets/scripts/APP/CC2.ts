
globalThis.coin = 0;
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.AudioClip)
    hairCut: cc.AudioClip = null
    @property(sp.Skeleton)
    char1: sp.Skeleton = null;
    @property(sp.Skeleton)
    char2: sp.Skeleton = null
    @property(sp.Skeleton)
    char3: sp.Skeleton = null
    @property(cc.Node)
    tut: cc.Node = null
    @property(cc.Node)
    hand: cc.Node = null

    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Node)
    logo: cc.Node = null;

    @property(cc.Node)
    barCoin: cc.Node = null
    @property(cc.Prefab)
    preCoin: cc.Prefab = null
    @property(cc.Label)
    lbCoin: cc.Label = null
    @property(cc.Node)
    scene1: cc.Node = null
    @property(cc.Node)
    scene2: cc.Node = null
    @property(cc.Node)
    scene3: cc.Node = null
    @property(cc.Camera)
    uiCamera: cc.Camera = null;
    @property(cc.Node)
    uiNode: cc.Node = null
    @property(cc.Node)
    btnUnlock: cc.Node = null;
    @property(cc.Node)
    rem2: cc.Node = null;
    @property(cc.Node)
    placeChar2: cc.Node = null
    @property(cc.Node)
    itemShambo: cc.Node = null;
    @property(cc.Node)
    itemVoiHoaSen: cc.Node = null;
    @property(cc.Node)
    itemMaySay: cc.Node = null;
    @property(sp.Skeleton)
    charDress: sp.Skeleton = null;
    @property(sp.Skeleton)
    xabong: sp.Skeleton = null;
    @property(sp.Skeleton)
    xabong2: sp.Skeleton = null;
    @property(cc.Node)
    charDressManager: cc.Node = null
    @property(cc.Node)
    endCard: cc.Node = null
    @property(cc.Node)
    failUI: cc.Node = null
    @property(cc.AudioClip)
    soundLose: cc.AudioClip = null
    @property(cc.Node)
    char2Hind: cc.Node = null;
    //hand
    @property(cc.Node)
    handScene21: cc.Node = null;
    @property(cc.Node)
    char2Parent: cc.Node = null
    @property(cc.Node)
    listHand: cc.Node = null
    @property(cc.Node)
    touchNode: cc.Node = null

    private selectedItem: cc.Node = null;

    adChanel = '{{__adv_channels_adapter__}}'
    arrBtn = []
    start() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.3)
        cc.audioEngine.play(this.hairCut, false, 1)
        this.arrBtn = [this.itemShambo, this.itemVoiHoaSen, this.itemMaySay]
        // this.startScene()
    }
    completeScene() {
        // this.startScene()
        // this.scene1.active=false
        this.scene2.scale = 2;
        this.scene2.active = true
        cc.tween(this.scene2).to(0.3, { scale: 1 }).call(() => {
            this.scene1.active = false
            this.startScene()
        }).start()
    }
    startScene() {
        this.barCoin.active = true
        let char1Node = this.char1.node
        cc.tween(char1Node).to(0.8, { position: cc.v3(110, -223) }).call(() => {
            this.char1.setAnimation(0, "Happy", false);
            char1Node.scaleX = -1.5;
            this.scheduleOnce(() => {
                this.giveCoin()
            }, 0.3)
        }).start()
        this.char2.setAnimation(0, "Walk", true);
        cc.tween(this.char2.node.parent).to(2.7, { position: cc.v3(-407, -925) }).call(() => {
            this.char2.setAnimation(0, "Talk", true);
            this.char2.node.getChildByName("pop").active = true
            this.scheduleOnce(() => {
                if (this.isunlock) return;
                this.handScene21.active = true;
            }, 1)
        }).start()
    }
    giveCoin() {
        let posStart = this.char1.node.parent.convertToWorldSpaceAR(this.char1.node.position);
        // posStart = this.camera.getWorldToScreenPoint(posStart);
        // posStart = this.uiCamera.getScreenToWorldPoint(posStart);
        // posStart = this.uiNode.convertToNodeSpaceAR(posStart).add(cc.v3(0, 420));
        posStart = this.uiNode.convertToNodeSpaceAR(posStart).add(cc.v3(0, 420));
        let posEnd = this.barCoin.children[1].position;
        posEnd = this.barCoin.convertToWorldSpaceAR(posEnd);
        posEnd = this.uiNode.convertToNodeSpaceAR(posEnd)

        let midPos = cc.v2((posEnd.x + 500), (posStart.y + posEnd.y) / 2)
        for (let i = 0; i < 8; i++) {
            this.scheduleOnce(() => {
                let coin = cc.instantiate(this.preCoin);
                // coin.parent = this.node;
                coin.parent = this.scene2.parent;
                // coin.position = cc.v3(0, 0)
                coin.position = posStart;
                coin.zIndex = 5
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



    }
    isunlock = false
    countStep = 0
    btn_unlock() {
        if (this.isunlock) return;
        this.handScene21.active = false
        this.isunlock = true
        this.btnUnlock.active = false;
        this.rem2.opacity = 0
        this.rem2.active = true
        cc.tween(this.rem2).to(0.3, { opacity: 255 }).start()
        this.onEventListener()
        this.char2Hind.active = true
    }
    onEventListener() {
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    offEventListener() {
        this.touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    onTouchStart(event: cc.Event.EventTouch) {
        if (this.selectedItem) return

        let screenPos = event.getLocation();

        // let worldPos = this.camera.getScreenToWorldPoint(screenPos);
        let worldPos = screenPos

        // Chuyển world → local (node main)
        let localPos = this.scene2.convertToNodeSpaceAR(worldPos);
        if (this.char2Parent.position.sub(cc.v3(localPos.x, localPos.y)).mag() < 300) {
            this.char2Parent.setPosition(localPos);
            this.selectedItem = this.char2Parent
            this.char2Hind.active = false
            this.char2Parent.children[0].active = true
        }
        // Đặt vị trí cho item

        // this.main.guideDrag.active = false;
        // this.node.opacity = 0
    }

    onTouchMove(event: cc.Event.EventTouch) {
        if (!this.selectedItem) return;
        let screenPos = event.getLocation();

        // let worldPos = this.camera.getScreenToWorldPoint(screenPos);
        let worldPos = screenPos

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
            this.moveStep2()
        }
    }
    moveStep2() {
        this.char2.node.parent.children[0].active = false

        this.rem2.zIndex = 2
        this.char2.setAnimation(0, "Walk", true);
        this.char2.node.getChildByName("pop").active = false
        cc.tween(this.char2Parent).to(1, { position: cc.v3(-193, -259) }).call(() => {
            this.char2Parent.active = false
        }).start()
        this.scheduleOnce(() => {
            // cc.tween(this.camera).to(0.5, { zoomRatio: 2.1 }).start()
            // cc.tween(this.camera.node).to(0.5, { position: cc.v3(-182, 0) }).start()
            this.scene2.active = false

        }, 1.3)
        this.scheduleOnce(() => {
            cc.tween(this.scene2).to(0.5, { position: cc.v3(320, 0), scale: 2.1 }).start()

        }, 0.7)
        this.scheduleOnce(() => {
            this.scene3.opacity = 0;
            this.scene3.active = true;
            cc.tween(this.scene3).to(0.3, { opacity: 255 }).start()
            this.barCoin.active = false
        }, 1.3)
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
    isClick = false
    btn_shambo() {
        this.countStep++
        this.listHand.children[0].active = false

        this.arrBtn[0] = null;
        this.itemShambo.getComponent(cc.Button).enabled = false;
        this.itemShambo.getComponent(cc.Animation).play()
        this.scheduleOnce(() => {

            if (this.countStep > 1) {

                this.charDressManager.children[1].active = true;
                this.xabong2.node.active = true
                this.xabong2.setAnimation(0, "show", false)

                this.charDressManager.children[0].active = false;
                this.charDressManager.children[2].active = false;
                this.charDress.node.active = false
            }
            else {
                this.charDress.setAnimation(0, "Boil", true);
                this.xabong.setAnimation(0, "show", false)
            }

        }, 0.4)
        this.checkEnd()
        this.unschedule(this.checkHindGame)
        this.scheduleOnce(this.checkHindGame, 3)

    }
    btn_tam() {
        this.countStep++
        this.arrBtn[1] = null;
        this.listHand.children[1].active = false
        this.itemVoiHoaSen.getComponent(cc.Button).enabled = false;
        this.itemVoiHoaSen.getComponent(cc.Animation).play();
        this.scheduleOnce(() => {
            this.itemVoiHoaSen.children[0].children[0].active = true
            this.charDress.node.active = false;
            this.charDressManager.children[2].active = true
            this.charDressManager.children[0].active = false
            this.charDressManager.children[1].active = false


        }, 0.6)
        this.checkEnd()
        this.unschedule(this.checkHindGame)
        this.scheduleOnce(this.checkHindGame, 3)
    }
    btn_saytoc() {
        this.countStep++
        this.arrBtn[2] = null;
        this.listHand.children[2].active = false

        this.xabong2.node.active = false

        this.itemMaySay.getComponent(cc.Button).enabled = false;
        this.itemMaySay.getComponent(cc.Animation).play();
        this.scheduleOnce(() => {
            this.itemMaySay.children[0].children[0].active = true
            this.charDressManager.children[0].active = true;
            this.charDressManager.children[1].active = false;
            this.charDressManager.children[2].active = false;
            this.charDress.node.active = false

        }, 0.5)
        this.scheduleOnce(() => {
            this.itemMaySay.children[0].children[0].active = false

        }, 2)
        this.scheduleOnce(() => {
            this.charDressManager.children[0].active = false;
            this.charDressManager.children[1].active = true;

        }, 2.3)
        this.unschedule(this.checkHindGame)
        this.scheduleOnce(this.checkHindGame, 3)

        this.checkEnd()

    }
    checkHindGame() {
        let check = this.findHind()
        if (check != null) {
            this.listHand.children[check].active = true
        }
    }
    findHind() {
        let check = null
        for (let i = 0; i < 3; i++) {
            if (this.arrBtn[i] != null) {
                return i
            }
        }
        return check

    }
    checkEnd() {
        if (this.countStep == 3) {
            this.scheduleOnce(() => {
                this.moveStep3()
            }, 2.6)
        }
    }
    moveStep3() {
        // this.scene2.zIndex = 3
        this.scene2.scale = 2
                this.scene2.active=true

        this.char2.node.active = false
        cc.tween(this.scene2).to(0.5, { scale: 1, position: cc.v3(100, 0) }).call(() => {
            this.scene3.active = false
            this.char3.node.active = true
            cc.tween(this.char3.node).to(0.5, { position: cc.v3(-456, -243) }).call(() => {
                this.char3.setAnimation(0, "Angry", true)
                this.onEndGame()
            }).start()
        }).start()

    }
    onEndGame() {
        this.scene2.active=true
        this.scheduleOnce(() => {
            this.failUI.active = true;

        }, 0.5)
        this.scheduleOnce(() => {
            this.failUI.active = false
            cc.audioEngine.play(this.soundLose, false, 1)
            this.endCard.active = true;
            this.linkToStore.active = true
        }, 1.2)

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
        // this.camera.zoomRatio = 1.05
        this.endCard.scale = (logic) ? 0.7 : 0.7
        this.logo.scale = (logic) ? 0.6 : 0.4
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        this.camera.zoomRatio = (logic) ? 1 : 1.5
        this.camera.node.position = (logic) ? cc.v3(0, 0) : cc.v3(0, 0)
        if (logic == true) {
            // this.camera.node.position = cc.v3(0, 100)

            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            // this.camera.zoomRatio = 2.5

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 1.8

            }
        }
        else {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            // this.camera.node.position = cc.v3(0, -30)
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 0.95
            }
        }

    }
}
