globalThis.countChar = 20;
declare const window: any;

const { ccclass, property } = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    charStart: cc.Node = null;
    @property(cc.Camera)
    mainCamera: cc.Camera = null;
    @property(cc.Node)
    cardList: cc.Node = null;
    @property(cc.Node)
    fire: cc.Node = null;
    @property(cc.Node)
    boxChat: cc.Node = null;
    @property(cc.Node)
    listChar0: cc.Node[] = [];
    @property(cc.Node)
    listChar: cc.Node[] = [];
    @property(cc.Node)
    listChar2: cc.Node = null;
    @property(cc.Node)
    listBed: cc.Node = null;
    @property(cc.Node)
    Scene1: cc.Node = null;
    @property(cc.Node)
    Scene2: cc.Node = null;
    @property(cc.Node)
    Scene3: cc.Node = null;
    @property(cc.Node)
    Scene4: cc.Node = null;
    @property(cc.Node)
    charScene3: cc.Node = null;
    @property(cc.Node)
    charScene4: cc.Node = null;
    @property(sp.Skeleton)
    bep: sp.Skeleton = null;
    @property(cc.Node)
    endcard: cc.Node = null;
    @property(cc.Node)
    hand: cc.Node = null;

    //sound
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundNhanGo: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundChatGo: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundGioThoi: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundUpgrade: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundRang: cc.AudioClip = null;
    @property(cc.AudioClip)
    sounLonKeu: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundDapChao: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundUhh: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundZee: cc.AudioClip = null;
    isId = 0;

    isvertical = false
    start() {
        // window.gameReady && window.gameReady();

        cc.audioEngine.play(this.soundBg, true, 0.8)
        this.isId = cc.audioEngine.play(this.soundRang, true, 0.5);
        cc.audioEngine.play(this.soundGioThoi, true, 0.8)
        this.init()
    }
    init() {
        this.charStart.getComponent(C).setBarBlood(0.8)

        cc.tween(this.charStart).to(0.8, { position: cc.v3(286, -46) }).delay(0.5).call(() => {
            for (let child of this.listChar0) {
                child.getComponent(C).die()
            }
            this.scheduleOnce(() => {
                this.move1()

            }, 0.5)
        }).start()
        cc.tween(this.mainCamera).to(0.8, { zoomRatio: 1 }).start()

    }
    move1() {
        cc.tween(this.mainCamera.node).to(0.6, { position: cc.v3(-1740, 100) }).start()
        cc.tween(this.mainCamera).to(0.6, { zoomRatio: 0.6 }).start()

        this.scheduleOnce(() => {
            this.cardList.children[0].active = true;
            this.cardList.children[1].active = true;
            this.hand.active = true;
            this.Scene1.active = false
            this.boxChat.active = true
        }, 0.6)

    }
    card1(event, customEventData) {
        this.hand.active = false;
        cc.audioEngine.stop(this.isId)
        cc.audioEngine.play(this.soundUpgrade, false, 1)
        cc.audioEngine.play(this.soundZee, false, 1)

        if (customEventData == 1) {
            this.Scene2.getComponent(cc.Animation).play("offBox")
            this.offCard(1)

        }
        else if (customEventData == 2) {
            this.Scene2.getComponent(cc.Animation).play("choose2")
            this.offCard(2)

        }
    }
    card2(event, customEventData) {
        cc.audioEngine.play(this.soundUpgrade, false, 1)
        cc.audioEngine.play(this.soundZee, false, 1)

        this.hand.active = false
        this.cardList.children[2].getComponent(cc.Animation).play("card_off");
        this.cardList.children[3].getComponent(cc.Animation).play("card_off");
        cc.tween(this.mainCamera.node).by(0.6, { position: cc.v3(300, 250) }).start()
        this.Scene4.active = true
        if (customEventData == 1) {
            this.Scene3.getComponent(cc.Animation).play("choose1")
            this.charScene3.getComponent(cc.Animation).play("move1")


            for (let child of this.listChar2.children) {
                let rd = Math.floor(Math.random() * 5)
                this.scheduleOnce(() => {
                    child.getComponent(C).die()
                }, 1.3 + 0.1 * rd)
            }

            this.scheduleOnce(() => {
                cc.tween(this.mainCamera.node).to(0.8, { position: cc.v3(-2100, -1100) }).call(() => {
                    this.scheduleOnce(() => {
                        this.charScene4.getComponent(C).angry()
                        this.bep.setAnimation(0, "Idle_NoFire", true)
                    }, 0.5)

                }).delay(0.8).to(0.3, { position: cc.v3(-2550, -919) }).start()
                cc.tween(this.mainCamera).to(0.8, { zoomRatio: 1.2 }).delay(0.8).to(0.3, { zoomRatio: 0.7 }).call(() => {
                    this.cardList.children[4].active = true;
                    this.cardList.children[5].active = true;
                    this.hand.active = true;


                }).start()

            }, 2.8)

        }
        else {
            this.Scene3.getComponent(cc.Animation).play("choose2")
            this.charScene3.getComponent(cc.Animation).play("move1")
            this.scheduleOnce(() => {
                this.listChar2.children[0].getComponent(cc.Animation).play("move1")
                // this.moveChar(this.listChar2.children[0], this.listBed.children[1].position);
            }, 0.4)
            this.scheduleOnce(() => {
                // this.moveChar(this.listChar2.children[1], this.listBed.children[2].position);
                this.listChar2.children[1].getComponent(cc.Animation).play("move1")

            }, 1)
            this.scheduleOnce(() => {
                this.moveChar(this.listChar2.children[2], this.listBed.children[3].position);
            }, 1.6)
            // this.scheduleOnce(() => {
            //     cc.tween(this.mainCamera.node).to(0.8, { position: cc.v3(-2550, -1000) }).start()

            // }, 3)
            this.scheduleOnce(() => {
                cc.tween(this.mainCamera.node).to(0.8, { position: cc.v3(-2100, -1100) }).call(() => {
                    this.scheduleOnce(() => {
                        this.charScene4.getComponent(C).angry()
                        this.bep.setAnimation(0, "Idle_NoFire", true)
                    }, 0.5)
                }).delay(0.8).to(0.3, { position: cc.v3(-2550, -919) }).start()
                cc.tween(this.mainCamera).to(0.8, { zoomRatio: 1.2 }).delay(0.8).to(0.3, { zoomRatio: 0.7 }).call(() => {
                    this.cardList.children[4].active = true;
                    this.cardList.children[5].active = true;
                    this.hand.active = true;
                }).start()

            }, 2.8)
        }


    }
    onEndGame() {
        this.endcard.active = true;
    }
    moveChar(char, pos) {
        pos = this.listBed.convertToWorldSpaceAR(pos);
        pos = this.listChar2.convertToNodeSpaceAR(pos);
        char.getComponent(C).walk()

        cc.tween(char).to(2.3, { position: pos }).call(() => {
            char.getComponent(C).sleep()
        }).start()
    }
    offCard(value) {

        this.cardList.children[0].getComponent(cc.Animation).play("card_off");
        this.cardList.children[1].getComponent(cc.Animation).play("card_off");
        for (let child of this.listChar) {
            child.getComponent(C).getHappy()
        }
        cc.tween(this.mainCamera).to(0.6, { zoomRatio: 0.9 }).start()
        this.scheduleOnce(() => {
            cc.tween(this.fire).to(0.3, { scale: 0 }).start();

        }, 1.1)
        if (value == 1) {

            this.scheduleOnce(() => {
                for (let child of this.listChar) {
                    child.getComponent(C).getCold()
                }
            }, 1)
            this.scheduleOnce(() => {
                for (let child of this.listChar) {
                    child.getComponent(C).die()
                }
            }, 1.4)

        }
        this.scheduleOnce(() => {
            cc.tween(this.mainCamera.node).to(0.6, { position: cc.v3(-4169, 200) }).start()
            cc.tween(this.mainCamera).to(0.6, { zoomRatio: 0.7 }).start()
            this.scheduleOnce(() => {
                // this.Scene2.getChildByName("").active = false
                this.cardList.children[2].active = true;
                this.cardList.children[3].active = true;
                this.hand.active = true;

                // this.boxChat.active = true
            }, 0.6)
        }, 1.8)

    }
    update() {
        let canvas = this.node.getComponent(cc.Canvas);

        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // this.fitCamera.zoomRatio = 0.8
                // this.mainCamera.zoomRatio = 0.7
                // this.mainCamera.node.position = this.mainCamera.node.position.add( cc.v3(-100, 0))
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                // for (let child of this.uiFit.children) {
                //     child.scale = child.scale * 0.5;
                // }
                // this.uiFit.scaleX = 0.8
                // this.uiFit.scaleY = 0.8
                this.endcard.getChildByName("banner1").active = true;
                this.endcard.getChildByName("banner2").active = false;

            }
        }
        else {

            this.isvertical = false;
            // this.uiFit.children[0].scale = 0.4
            // this.uiFit.children[1].scale = 1

            // this.fitCamera.zoomRatio = 1
            // this.mainCamera.zoomRatio = 1.3
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.endcard.getChildByName("banner1").active = false;
            this.endcard.getChildByName("banner2").active = true;

        }

        // if (this.isFollow) {
        //     this.mainCamera.node.setPosition(this.isTarget.position.add(cc.v3(50, 0)).clampf(cc.v3(-520, -340), cc.v3(900, 340)));

        // }

    }
    // update (dt) {}
}
