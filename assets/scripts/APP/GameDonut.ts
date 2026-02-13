

const { ccclass, property } = cc._decorator;
globalThis.coin = 100
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
    soundSellDone: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundThinking: cc.AudioClip = null
    @property(cc.AudioClip)
    soundCream: cc.AudioClip = null
    @property(cc.AudioClip)
    soundCherry: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWrong: cc.AudioClip = null
    @property(cc.AudioClip)
    soundCreamMini: cc.AudioClip = null
    @property(cc.AudioClip)
    soundThinkWin: cc.AudioClip = null
    @property(cc.Node)
    tut: cc.Node = null
    @property(cc.Node)
    hand: cc.Node = null
    @property(cc.Node)
    endCard: cc.Node = null;
    @property(cc.Node)
    endCardWin: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Node)
    logo: cc.Node = null;
    @property(cc.Node)
    listCus: cc.Node = null;


    @property(cc.Camera)
    mainCamera: cc.Camera = null
    @property(cc.Camera)
    uiCamera: cc.Camera = null
    @property(cc.Node)
    uiNode: cc.Node = null
    @property(cc.Node)
    barTime: cc.Node = null;
    @property(cc.Node)
    barCoin: cc.Node = null;
    @property(cc.Node)
    listCheckItem: cc.Node = null;
    @property(cc.Node)
    clockTime: cc.Node = null
    @property(cc.Node)
    cake: cc.Node = null;
    @property(cc.Node)
    creeam: cc.Node = null
    @property(cc.Node)
    phaoHoa: cc.Node = null;
    @property(cc.Node)
    listHand: cc.Node = null;
    @property(cc.Node)
    warning: cc.Node = null
    @property(cc.Node)
    guild:cc.Node=null
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
    // isStep = 0
    isTargetCus = null;
    adChanel = '{{__adv_channels_adapter__}}'
    countCus = 0
    idSound = null
    isStep = 0
    onLoad() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    }
    start() {

        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.5)

    }
    startGame() {
        this.scheduleOnce(() => {
            if (this.isStep == 0) {
                this.listHand.children[0].active = true
            }
        }, 2)
    }
    btn_plate(event) {
        let btn = event.currentTarget
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1)
    }
    btn_cake(event) {
        let cake = null
        if (this.isStep == 0) {
            this.guild.active=false;
            this.listHand.children[0].active = false
            cake = this.cake.children[0]
            this.listCheckItem.children[0].active = true
            this.scheduleOnce(() => {
                if (this.isStep == 1) {
                    this.listHand.children[1].active = true
                }
            }, 2.5)
        }
        else if (this.isStep == 3) {
            this.listHand.children[0].active = false

            cake = this.cake.children[3]
            // this.listCheckItem.children[0].active = true
            this.listCheckItem.children[0].active = true
            this.scheduleOnce(() => {
                if (this.isStep == 4) {
                    this.listHand.children[1].active = true
                }
            }, 2.5)
        }
        else {
            let btn = event.currentTarget
            btn.getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 1)
            return;
        }
        cc.audioEngine.play(this.soundShowPop, false, 1)
        cake.scale = 0.6;
        let localPos = cake.position;
        cake.position = localPos.add(cc.v3(0, 120))

        cake.active = true

        this.isStep++
        cc.tween(cake).to(0.2, { position: localPos }).to(0.2, { scale: 0.75 }).to(0.07, { scale: 0.7 }).start()
    }
    btn_Dau(event) {
        if (this.isStep == 2) {
            cc.audioEngine.play(this.soundCherry, false, 1)
            this.listHand.children[2].active = false


            let listFruit = this.cake.children[2]
            this.isStep++
            listFruit.active = true;
            for (let i = 0; i < listFruit.childrenCount; i++) {
                let fruit = listFruit.children[i];
                fruit.active = false
                let localPos = fruit.position;
                fruit.position = localPos.add(cc.v3(0, 120))
                let time = (i % 2 == 0) ? 0 : 0.2
                this.scheduleOnce(() => {
                    fruit.active = true
                    this.listCheckItem.children[2].active = true
                    this.listCheckItem.children[3].active = true
                    this.listCheckItem.children[4].active = true
                    this.listCheckItem.children[5].active = true
                    cc.tween(fruit).to(0.3, { position: localPos }).call(() => {
                        for (let child of this.listCheckItem.children) {
                            child.active = false
                        }
                    }).start()
                }, time)
            }
            this.scheduleOnce(() => {
                if (this.isStep == 3) {
                    this.listHand.children[0].active = true
                }
            }, 2.5)
        }
        else if (this.isStep == 5) {
            this.listHand.children[2].active = false

            cc.audioEngine.play(this.soundCherry, false, 1)
            this.listCheckItem.children[2].active = true
            this.listCheckItem.children[3].active = true
            this.listCheckItem.children[4].active = true
            this.listCheckItem.children[5].active = true
            let listFruit = this.cake.children[6]
            this.isStep++
            listFruit.active = true;
            for (let i = 0; i < listFruit.childrenCount; i++) {
                let fruit = listFruit.children[i];
                fruit.active = false
                let localPos = fruit.position;
                fruit.position = localPos.add(cc.v3(0, 120))
                let time = (i % 2 == 0) ? 0 : 0.3
                this.scheduleOnce(() => {
                    fruit.active = true
                    cc.tween(fruit).to(0.3, { position: localPos }).start()
                }, time)
            }
            this.scheduleOnce(() => {
                this.phaoHoa.active = true
                cc.audioEngine.play(this.soundWin, false, 1)
                globalThis.coin += 100
            }, 0.5)
            this.scheduleOnce(() => {
                this.onEndGame(true)
            }, 1.5)
        }
        else {
            let btn = event.currentTarget
            btn.getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 1)
        }
        // let btn = event.currentTarget
        // btn.getComponent(cc.Animation).play();
        // cc.audioEngine.play(this.soundWrong, false, 1)
    }
    btn_Kiwi(event) {
        let btn = event.currentTarget
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1)
    }
    btn_Hoa(event) {
        let btn = event.currentTarget
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1)
    }
    btn_cream() {
        if (this.isStep == 1) {
            this.listHand.children[1].active = false
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundCream, false, 1)

            }, 0.3)
            this.listCheckItem.children[1].active = true

            this.creeam.getComponent(cc.Animation).play("cream1")
            let cream = this.cake.children[1]
            this.isStep++
            cream.scale = 0;
            cream.active = true
            cc.tween(cream).delay(0.4).to(0.4, { scale: 0.7 }).start()
            this.scheduleOnce(() => {
                cc.tween(this.creeam.children[1]).to(0.4, { position: cc.v3(0, 0), angle: 0 }).start()
            }, 1.2)
            this.scheduleOnce(() => {
                if (this.isStep == 2) {
                    this.listHand.children[2].active = true
                }
            }, 2.5)
        }
        else if (this.isStep == 4) {
            this.listCheckItem.children[1].active = true
            this.listHand.children[1].active = false

            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundCream, false, 1)

            }, 0.5)
            this.creeam.getComponent(cc.Animation).play("cream2")
            let creamItem = this.creeam.children[1]
            let cream = this.cake.children[4]
            this.isStep++
            cream.scale = 0;
            cream.active = true
            cc.tween(cream).delay(0.6).to(0.4, { scale: 0.7 }).start()
            let listCream = this.cake.children[5]
            let listCream2 = this.cake.children[7]
            // cc.audioEngine.play(this.soundCream, false, 1)
            let arrrPos = [cc.v3(-507, 222), cc.v3(-551, 197), cc.v3(-590, 161), cc.v3(-621, 111), cc.v3(-634, 50, 69), cc.v3(-631.5, 21), cc.v3(-612.6, -4), cc.v3(-568, -5.4), cc.v3(-528, 19.5),
            cc.v3(-490, 61), cc.v3(-464, 108), cc.v3(-456, 170), cc.v3(-473, 204)
            ]
            this.scheduleOnce(() => {
                listCream.active = true

                for (let i = 0; i < listCream.childrenCount; i++) {
                    listCream.children[i].active = false

                    this.scheduleOnce(() => {
                        // creamItem.position = pos
                        // console.log()
                        // if (i % 2 == 0) {
                        //     cc.audioEngine.play(this.soundCreamMini, false, 1)

                        // }
                        cc.tween(creamItem).to(0.1, { position: arrrPos[i] }).start()

                        listCream.children[i].active = true
                    }, 0.15 * i)


                }
            }, 1.3)
            this.scheduleOnce(() => {
                listCream2.active = true

                for (let i = 0; i < listCream2.childrenCount; i++) {
                    listCream2.children[i].active = false
                    this.scheduleOnce(() => {

                        cc.tween(creamItem).to(0.1, { position: arrrPos[i + 6] }).start()

                        listCream2.children[i].active = true
                    }, 0.15 * i)


                }
            }, 1.3 + 0.15 * 6)
            this.scheduleOnce(() => {
                cc.tween(this.creeam.children[1]).to(0.4, { position: cc.v3(0, 0), angle: 0 }).start()
                this.scheduleOnce(() => {
                    if (this.isStep == 5) {
                        this.listHand.children[2].active = true
                    }
                }, 2.5)
            }, 3.8)
        }
        else {
            cc.audioEngine.play(this.soundWrong, false, 1)
            this.creeam.getComponent(cc.Animation).play("btn_wrong")
        }

    }

    setGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));

    }
    offGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    }
    moveClocktoUI(node1) {
        this.moveItemToUI(node1, this.barTime.children[1]);
    }
    moveItemToUI(node1, node2) {
        // cc.audioEngine.play(this.soundWoodin, false, 1)
        let pos = node2.parent.convertToWorldSpaceAR(node2.position)
        pos = this.uiNode.convertToNodeSpaceAR(pos)
        // pos = pos.add(cc.v3(0, 0))
        let pos2 = node1.parent.convertToWorldSpaceAR(node1.position);
        pos2 = this.mainCamera.getWorldToScreenPoint(pos2);
        pos2 = this.uiCamera.getScreenToWorldPoint(pos2);
        pos2 = this.uiNode.convertToNodeSpaceAR(pos2).add(cc.v3(0, 0))
        node1.parent = this.uiNode;
        node1.scale = this.mainCamera.zoomRatio / this.uiCamera.zoomRatio * 0.7
        node1.position = pos2
        cc.tween(node1).to(0.4, { position: pos, scale: 0.4 }).call(() => {
            node1.active = false
            // this.missionBar.getComponent("updateBar").updateBar();
            // wood.getComponent(cc.Animation).play("exp")
            // // cc.audioEngine.play(this.soundWoodOut, false, 1)
        }).start()
    }
    isEndGame = false
    onEndGame(value) {
        if (this.isEndGame) return;
        this.isEndGame = true
        this.warning.active=false;
        if (value == true) {
                    this.barTime.getComponent("barTime").endGame()

            // cc.audioEngine.play(this.soundEnd, false, 1)
            cc.audioEngine.play(this.soundThinkWin, false, 1)
            // cc.audioEngine.play(this.soundWin, false, 1)
            // this.endCard.getChildByName("title").active = false
            this.endCardWin.active = true;

        }
        else {
                    this.barTime.getComponent("barTime").endGame()

            cc.audioEngine.stop(this.idSound)
            cc.audioEngine.play(this.soundThinking, false, 1)
            cc.audioEngine.play(this.soundLose, false, 1)
            this.endCard.active = true;

        }
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
        this.camera.zoomRatio = 1.15
        this.endCard.scale = (logic) ? 1.2 : 0.7
        this.endCardWin.scale = (logic) ? 1.2 : 0.7

        this.logo.scale = (logic) ? 0.6 : 0.4
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        this.camera.node.position = cc.v3(0, -10)
        this.barTime.scale = (logic) ? 2 : 1.1
        this.barCoin.scale = (logic) ? 2 : 1.1
        this.clockTime.scale = (logic) ? 1.7 : 1
        this.phaoHoa.scale = (logic) ? 9 : 5
this.guild.scale=(logic)?2:1.4
this.guild.position=(logic)?cc.v3(0,-550):cc.v3(0,-360)
        if (logic == true) {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            // this.camera.node.position = cc.v3(0, -70)

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            this.camera.zoomRatio = 2.6
            this.camera.node.position = cc.v3(0, -150)

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 2.1
                this.camera.node.position = cc.v3(0, -120)

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
                this.camera.zoomRatio = 1
                this.camera.node.position = cc.v3(0, -60)

            }
        }


    }
}
