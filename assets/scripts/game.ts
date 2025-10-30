import A from "./animal"
declare const window: any;
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    mainCamera: cc.Camera = null;
    @property(cc.Node)
    char1: cc.Node = null;
    @property(cc.Node)
    char2: cc.Node = null;
    @property(cc.Node)
    char3: cc.Node = null;
    @property(cc.Node)
    pig: cc.Node = null;
    @property(cc.Node)
    pig2: cc.Node = null;
    @property(cc.Node)
    arenaWood: cc.Node = null;
    @property(cc.Node)
    arena2: cc.Node = null;
    @property(cc.Node)
    arena3: cc.Node = null;
    @property(cc.Node)
    tree1: cc.Node = null;
    @property(cc.Node)
    tree2: cc.Node = null
    @property(cc.Node)
    tree3: cc.Node = null;
    @property(cc.Node)
    bulletMain: cc.Node = null;
    @property(cc.Node)
    hand: cc.Node = null;
    @property(cc.Node)
    hand2: cc.Node = null;
    @property(cc.Node)
    hand3: cc.Node = null;
    @property(cc.Node)
    hand4: cc.Node = null;
    @property(cc.Node)
    hand5: cc.Node = null;
    @property(cc.Node)
    popup: cc.Node = null;
    @property(cc.Prefab)
    preWood: cc.Node = null;
    @property(cc.Node)
    bep: cc.Node = null;
    // @property(cc.Node)
    // snow: cc.Node
    @property(cc.Node)
    popup2: cc.Node = null;
    @property(cc.Node)
    house: cc.Node = null;
    @property(cc.Node)
    smokeEff: cc.Node = null;
    @property(cc.Node)
    listHouse: cc.Node[] = []
    @property(cc.Node)
    endCard: cc.Node = null;
    @property(cc.Label)
    lbWood: cc.Label = null;

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
    
    isvertical=false
    isCountWood = 0
    isTarget = null;
    isFollow = false;
    isMoving = false
    isStep = 0;
    start() {
        cc.audioEngine.play(this.soundBg, true, 0.8)
        window.gameReady && window.gameReady();
        cc.audioEngine.playEffect(this.soundGioThoi, true);
        cc.audioEngine.playEffect(this.soundRang, true);

        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_END, this.onTouchCancel, this);
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.scheduleOnce(() => {
            this.popup.active = true
            // this.hand.active = true
            cc.tween(this.mainCamera).to(0.3, { zoomRatio: 0.8 }).start()
        }, 0.5)
    }
    onTouchMove(event) {
        if (this.isMoving) return;

        if (!this.isTarget) {
            // console.log(this.isStep)
            if (this.isStep == 1) {
                this.checkTarget(event.getLocation(), this.char3)

            }
            else if (this.isStep == 2) {
                this.checkTarget(event.getLocation(), this.char2)

            }
            else if (this.isStep == 0) {
                this.checkTarget(event.getLocation(), this.char1)

            }


        }
        else {
            let pos = event.getLocation();
            pos = this.isTarget.parent.convertToNodeSpaceAR(pos)
            this.isTarget.position = pos
        }
    }
    onTouchCancel(event) {
        if (this.isMoving) return;
        if (!this.isTarget) return;
        console.log("step", this.isStep)
        if (this.isStep == 0) {
            let check = this.checkArea(event.getLocation(), this.arenaWood)
            if (check) {
                this.isStep++
                this.isMoving = true
                let pos = this.arenaWood.position;
                pos = this.arenaWood.parent.convertToWorldSpaceAR(pos)
                pos = this.isTarget.parent.convertToNodeSpaceAR(pos);
                this.isTarget.position = pos
                this.isTarget.getComponent(C).chatGo(this.tree1)
                cc.audioEngine.play(this.soundChatGo, false, 0.8)

                this.isTarget = null
                cc.tween(this.mainCamera).to(0.3, { zoomRatio: 1.2 }).start()
                cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-200, 400) }).call(() => {
                    this.pigMove1(pos)
                }).start()



            }
            else {
                // cc.tween(this.isTarget).to(0.5,{position:this.isTarget.getComponent(C).localPos}).star
                this.isTarget.position = this.isTarget.getComponent(C).localPos
            }
        }
        else if (this.isStep == 1) {

            let pos = event.getLocation();
            if (this.checkTree(pos, this.arena2)) {
                this.isStep++
                let pos2 = this.arena2.position;
                pos2 = this.arena2.parent.convertToWorldSpaceAR(pos2)

                pos2 = this.isTarget.parent.convertToNodeSpaceAR(pos2);
                this.isTarget.position = pos2;
                // this.isTarget.getComponent(C).chatGo2(this.tree2)
                this.hand5.active = false
                this.isTarget = null
                this.hand4.active = true
                this.pig2.getComponent(A).attack()
                this.char3.getComponent(C).attack2(this.pig2)

            }
        }
        else if (this.isStep == 2) {
            // this.isTarget = null;
            let pos = event.getLocation();
            if (this.checkTree(pos, this.arena3)) {
                this.hand5.active = false
                this.isStep++
                pos = this.isTarget.parent.convertToNodeSpaceAR(pos);
                let pos2 = this.arena3.position;
                pos2 = this.arena3.parent.convertToWorldSpaceAR(pos2)

                pos2 = this.isTarget.parent.convertToNodeSpaceAR(pos2);
                this.isTarget.position = pos2;



                // this.isTarget.position = pos;
                // this.isTarget.getComponent(C).chatGo2(this.tree2)
                this.hand4.active = false
                this.isTarget = null
                this.char2.getComponent(C).attack2(this.pig2)

                // this.hand4.active = true
            }
        }
        else if (this.isStep == 3) {
            this.isStep++
            let pos = event.getLocation();
            if (this.checkTree(pos, this.tree1)) {
                this.hand4.active = false;
                this.hand5.active = false
                pos = this.isTarget.parent.convertToNodeSpaceAR(pos);
                this.isTarget.position = pos
                // this.isTarget.getComponent(C).chatGo2(this.tree1)
                this.showPop2()
            }
        }
        else if (this.isStep == 4) {

            // let pos = event.getLocation();
            // if (this.checkTree(pos, this.tree1)) {
            //     pos = this.isTarget.parent.convertToNodeSpaceAR(pos);
            //     this.isTarget.position = pos
            // }
        }
    }
    pigMove1(pos) {
        pos = pos.add(cc.v3(100, 0))
        this.char1.getComponent(C).warning();
        this.pig.getComponent(A).run()
        this.scheduleOnce(() => {
            this.char1.getComponent(C).angry();

        }, 0.5)

        cc.audioEngine.play(this.sounLonKeu, false, 0.8)

        cc.audioEngine.play(this.soundUhh, false, 0.8)

        cc.tween(this.pig).to(1, { position: pos }).call(() => {
            this.pig.getComponent(A).attack()

            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundDapChao, false, 0.8)
            }, 0.3)


            this.char1.getComponent(C).attack(this.pig)

        }).start()
        this.scheduleOnce(() => {
            this.char1.getComponent(C).die()
            this.pig.getComponent(A).idle()
            cc.tween(this.mainCamera.node).delay(0.2).to(0.35, { position: cc.v3(0, 20) }).call(() => {
                this.hand3.active = true
                this.bep.getComponent(cc.Button).enabled = true
            }).start()
        }, 2.5)
    }

    checkTarget(pos, node) {
        pos = node.parent.convertToNodeSpaceAR(pos)
        if (node.position.sub(pos).mag() <= 200) {
            this.isTarget = node
            this.isFollow = true
            // if (this.isStep == 0) {
            //     cc.tween(this.mainCamera).to(0.3, { zoomRatio: 0.9 }).start()

            // }
        }
    }
    checkArea(pos, node) {
        pos = node.parent.convertToNodeSpaceAR(pos)
        if (node.position.sub(pos).mag() <= 200) {
            this.hand.active = false
            return true
        }
        return false
    }
    checkTree(pos, node) {
        pos = node.parent.convertToNodeSpaceAR(pos)
        if (node.position.sub(pos).mag() <= 500) {
            return true
        }
        return false
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

        }

        // if (this.isFollow) {
        //     this.mainCamera.node.setPosition(this.isTarget.position.add(cc.v3(50, 0)).clampf(cc.v3(-520, -340), cc.v3(900, 340)));

        // }

    }
    createWood(tree) {
        for (let i = 0; i < 4; i++) {
            let wood = cc.instantiate(this.preWood)
            wood.parent = tree
            wood.scale = 1.3
            wood.opacity = 0
            wood.position = cc.v3(0, -50)
            cc.tween(wood).delay(0.12 * i).set({ opacity: 255 }).by(0.3, { position: cc.v3(0, 150) }).call(() => {
                this.isCountWood += 1
                this.lbWood.string = this.isCountWood.toString()
                wood.destroy()
            }).start()
        }
    }
    btn_wood() {
        this.hand3.active = false;
        cc.audioEngine.play(this.soundNhanGo, false, 0.8)

        this.popup.getComponent(cc.Animation).play("close_popup")
        this.transWood1()
        this.bep.getComponent(cc.Button).enabled = false


    }
    transWood1() {
        let targetPos = this.popup.position
        targetPos = this.popup.parent.convertToWorldSpaceAR(targetPos);
        targetPos = this.node.convertToNodeSpaceAR(targetPos);
        let midpos = cc.v2(targetPos.x - 50, (targetPos.y + 80 + 397) / 2)
        for (let i = 0; i < 6; i++) {
            // cc.audioEngine.play(this.soundNhanGo,false,0.8)
            let wood = cc.instantiate(this.preWood)
            wood.parent = this.node;
            wood.position = cc.v3(544, 410)
            wood.scale = 1.2
            cc.tween(wood).delay(0.05 * i).bezierTo(0.5, cc.v2(544, 397), midpos, cc.v2(targetPos.x, targetPos.y + 80)).call(() => {
                this.isCountWood -= 1
                this.lbWood.string = this.isCountWood.toString()
                wood.destroy()
                if (i == 5) {
                    this.getHappy()
                }
            }).start()
        }
    }
    getHappy() {
        cc.audioEngine.play(this.soundUpgrade, false, 0.8)
        // cc.audioEngine.play(this., false, 0.8)
        // cc.audioEngine.stopEffect()
        this.bep.getChildByName("fire").active = true;
        this.char3.getComponent(C).setArcher();
        this.char2.getComponent(C).setArcher();
        this.char2.position = cc.v3(20, -100)
        this.char3.position = cc.v3(-255, -10)

        this.smokeEff.active = true;

        cc.tween(this.mainCamera).to(0.3, { zoomRatio: 0.7 }).call(() => {
            // this.hand4.active = true
            this.listHouse[3].active = true
            this.listHouse[3].getComponent(cc.Animation).play("house2")
            this.pig2.active = true;
            cc.audioEngine.play(this.sounLonKeu, false, 0.8)

            this.scheduleOnce(() => {
                this.hand5.active = true;
                this.isMoving = false
            }, 1)
        }).start()

    }
    showPop2() {
        this.popup2.active = true;
    }
    btn_upgrade() {
        cc.audioEngine.play(this.soundUpgrade, false, 0.8)
        cc.audioEngine.play(this.soundZee, false, 0.8)

        this.char3.getComponent(C).getHappy();
        this.char2.getComponent(C).getHappy();
        this.popup2.active = false;
        this.listHouse[3].active = true
        this.house.active = false
        // this.house.getComponent(cc.Animation).play("showhouse")
        this.smokeEff.active = true;

        this.scheduleOnce(() => {
            cc.tween(this.mainCamera).to(0.4, { zoomRatio: 0.3 }).call(() => {
            }).start()


        }, 0.3)
        this.scheduleOnce(() => {
            for (let i = 0; i < this.listHouse.length; i++) {
                let child = this.listHouse[i]
                child.active = true;
                child.getComponent(cc.Animation).play("house2")
                // child.getChildByName("fxhouse").children[0].getComponent(cc.Animation).play("efSmoke")

            }
        }, 0.8)
        this.scheduleOnce(() => {
            this.endCard.active = true
        }, 1.5)
    }

}
