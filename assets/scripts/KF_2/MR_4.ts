import JoyStick from './JoyStick'
import Char from "./Char";

declare const window: any;

const { ccclass, property } = cc._decorator;
globalThis.money = 20;
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    joyStick: cc.Node = null;
    @property(cc.Node)
    handGuide: cc.Node = null;
    @property(cc.Node)
    char: cc.Node = null;
    @property(cc.Camera)
    camera3D: cc.Camera = null;
    @property(cc.Prefab)
    listKHPre: cc.Prefab[] = []
    @property(cc.Node)
    shadow: cc.Node = null;

    @property(cc.Camera)
    camera2D: cc.Camera = null;
    @property(cc.Label)
    lbMoney: cc.Label = null;
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.AudioClip)
    soundUd: cc.AudioClip = null
    @property(cc.AudioClip)
    soundPut: cc.AudioClip = null
    @property(cc.Node)
    linkToStore: cc.Node = null

    // @property(cc.Node)
    // arrow1: cc.Node = null;
    // @property(cc.Node)
    // arrow2: cc.Node = null;
    // @property(cc.Node)
    // arrow4: cc.Node = null;
    @property(cc.Node)
    listArrow: cc.Node = null;
    @property(cc.Node)
    text: cc.Node = null;
    // @property(cc.Node)
    // banGhe1: cc.Node = null;
    // @property(cc.Node)
    // arrow3: cc.Node = null
    // @property(cc.Node)
    // arrow5: cc.Node = null
    @property(cc.Animation)
    effMoney: cc.Animation = null;
    // @property(cc.Node)
    // unlockNode1: cc.Node = null;
    @property(cc.Node)
    listBanGhe: cc.Node = null;

    @property(cc.Node)
    kh1: cc.Node = null
    @property(cc.Node)
    kh2: cc.Node = null
    @property(cc.Node)
    listKH: cc.Node = null;
    @property(cc.Node)
    endGame: cc.Node = null;
    @property(cc.Node)
    unlockNode: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:
    charComp = null;
    isHorizontal = true;
    isCutScene = false;
    isStep = 1;
    isvertical = false;
    countMoney = 20;
    arrKHMan = []
    arrKHpos = [[], [], []]
    arrPosCus = []
    countUD = 0
    onLoad() {
        this.responsive();

    }

    start() {
        this.charComp = this.char.getComponent(Char);
        cc.director.getPhysics3DManager().enabled = true;
        window.gameReady && window.gameReady();
        // let manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        cc.audioEngine.play(this.soundBg, true, 0.5);
        // this.scheduleOnce(() => {
        //     this.moveCam1()
        // }, 0.3)
        // this.createKh()
    }
    createKh() {
        let firtPos = [cc.v3(-64, 3.5, 15), cc.v3(-61, 3.5, 15), cc.v3(-58, 3.5, 15)]
        // for (let i = 0; i < 15; i++) {
        //     let rd = Math.floor(Math.random() * this.listKHPre.length)
        //     let kh = cc.instantiate(this.listKHPre[rd])
        //     kh.parent = this.node.getChildByName("kh")
        //     let row = i % 3
        //     let col = Math.floor(i / 3)
        //     kh.localpos = firtPos[row].add(cc.v3(0, 0, 3 * col))
        //     kh.position = kh.localpos.add(cc.v3(0, 0, 10))
        //     kh.children[0].getComponent(cc.Animation).play("Walk")
        //     this.arrKHMan.push(kh)
        //     this.arrKHpos[row].push(kh.localpos)
        //     this.arrPosCus.push(kh.localpos)
        //     cc.tween(kh).to(1, { position: kh.localpos }).call(() => {
        //         kh.children[0].getComponent(cc.Animation).play("Idle 1")
        //         kh.getChildByName("pop").getComponent(cc.Animation).play("pop_show")
        //         if (i == 14) {
        //             this.scheduleOnce(()=>{
        //                 this.phase1()

        //             },0.5)
        //         }
        //     }).start()
        // }


        for (let i = 0; i < 5; i++) {
            if (i % 2 != 0) {
                for (let j = 2; j >= 0; j--) {
                    let rd = Math.floor(Math.random() * this.listKHPre.length)
                    let kh = cc.instantiate(this.listKHPre[rd])
                    kh.parent = this.node.getChildByName("kh")
                    // let row = i % 3
                    let col = i
                    kh.localpos = firtPos[j].add(cc.v3(0, 0, 3 * col))
                    kh.position = kh.localpos.add(cc.v3(0, 0, 10))
                    kh.children[0].getComponent(cc.Animation).play("Walk")
                    this.arrKHMan.push(kh)
                    // this.arrKHpos[row].push(kh.localpos)
                    this.arrPosCus.push(kh.localpos)
                    cc.tween(kh).to(1, { position: kh.localpos }).call(() => {
                        kh.children[0].getComponent(cc.Animation).play("Idle 1")
                        kh.getChildByName("pop").getComponent(cc.Animation).play("pop_show")

                    }).start()
                }
            }
            else {
                for (let j = 0; j < 3; j++) {
                    let rd = Math.floor(Math.random() * this.listKHPre.length)
                    let kh = cc.instantiate(this.listKHPre[rd])
                    kh.parent = this.node.getChildByName("kh")
                    // let row = i % 3
                    let col = i
                    kh.localpos = firtPos[j].add(cc.v3(0, 0, 3 * col))
                    kh.position = kh.localpos.add(cc.v3(0, 0, 10))
                    kh.children[0].getComponent(cc.Animation).play("Walk")
                    this.arrKHMan.push(kh)
                    // this.arrKHpos[row].push(kh.localpos)
                    this.arrPosCus.push(kh.localpos)
                    cc.tween(kh).to(1, { position: kh.localpos }).call(() => {
                        kh.children[0].getComponent(cc.Animation).play("Idle 1")
                        kh.getChildByName("pop").getComponent(cc.Animation).play("pop_show")
                        if (i == 2 && j == 2) {
                            this.scheduleOnce(() => {
                                this.phase1()

                            }, 0.5)
                        }
                    }).start()
                }
            }
        }
    }
    offGuild() {
        this.shadow.active = false;
        this.listArrow.children[0].active = true
    }
    stepEnd() {
        this.linkToStore.active = true
        this.linkToStore.getComponent("AdManager").openAdUrl()
        this.joyStick.getComponent(JoyStick).touchEndEvent()
        this.joyStick.active = false
    }
    phase1() {
        this.charComp.isCompleteCarry = false
        this.joyStick.active = true
        this.isCutScene = false
        this.shadow.active = true
        // console.log(localpos)
        // cc.tween(this.camera3D.node).to(0.5, { position: cc.v3(-65, 26, 13) }).delay(0.5).to(0.5, { position: localpos }).call(() => {
        // this.charComp.isCompleteCarry = false
        // this.joyStick.active = true
        // this.isCutScene = false
        // }).start()
    }
    // step1() {
    //     if (this.isStep == 1) {
    //         this.charComp.isCompleteCarry = true;
    //         this.arrow1.active = false;
    //         this.text.position = this.char.position
    //         this.text.getComponent(cc.Animation).play();
    //         this.arrow2.active = true;
    //         this.banGhe1.getComponent(cc.Animation).play("bo_showcash")
    //         // this.unlockNode1.getComponent(cc.Collider3D).enabled=false
    //         this.isStep = 2;
    //         this.scheduleOnce(() => {
    //             this.charComp.isCompleteCarry = false;

    //         }, 0.5)
    //     }
    //     else if (this.isStep == 4) {
    //         this.charComp.isCompleteCarry = true;
    //         this.countMoney -= 50;
    //         this.lbMoney.string = this.countMoney.toString()
    //         this.isStep = 5
    //         let pos = this.unlockNode1.position;
    //         pos = this.unlockNode1.parent.convertToWorldSpaceAR(pos);
    //         this.arrow2.active = true;

    //         this.charComp.transMoney(pos)
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundUd, false, 1);

    //             this.arrow1.active = false
    //             this.unlockNode1.active = false
    //             this.listBanGhe.children[1].active = true;
    //         })
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundUd, false, 1);

    //             this.listBanGhe.children[0].getComponent(cc.Animation).play("bo_showcash")
    //             // this.listBanGhe.children[1].getComponent(cc.Animation).play("bo_showcash")
    //             this.charComp.isCompleteCarry = false;
    //             // this.kh1.getComponent(cc.Animation).play()
    //             // this.kh1.getComponent("Customer").move()
    //             this.kh2.getComponent(cc.Animation).play()
    //             this.kh2.getComponent("Customer").move()
    //         }, 0.8)
    //         this.scheduleOnce(() => {
    //             cc.audioEngine.play(this.soundUd, false, 1);
    //             this.listKH.getComponent(cc.Animation).play()
    //         }, 1)
    //     }

    // }
    // step2() {
    //     console.log("step2222", this.isStep)
    //     if (this.isStep == 2) {
    //         this.charComp.isCompleteCarry = true;
    //         cc.audioEngine.play(this.soundUd, false, 1);

    //         this.arrow2.active = false;
    //         this.banGhe1.getComponent(cc.Animation).play()
    //         this.isStep = 3
    //         // this.joyStick.getComponent(JoyStick).isCutScene=true
    //         // this.joyStick.getComponent(JoyStick).touchEndEvent()

    //         this.scheduleOnce(() => {

    //             this.arrow3.active = true;
    //             this.isCutScene = true
    //             this.isCutScene = true;
    //             let localpos = this.camera3D.node.position
    //             console.log(localpos)
    //             cc.tween(this.camera3D.node).to(0.5, { position: cc.v3(-61, 41, 42) }).delay(0.5).to(0.5, { position: localpos }).call(() => {
    //                 this.charComp.isCompleteCarry = false;
    //                 this.isCutScene = false
    //             }).start()
    //         }, 1)
    //     }
    //     else if (this.isStep == 5) {
    //         this.arrow2.active = false;

    //         // this.charComp.isCompleteCarry = true;
    //         cc.audioEngine.play(this.soundUd, false, 1);
    //         this.isStep = 6
    //         // this.arrow2.active = false;
    //         this.banGhe1.getComponent(cc.Animation).play();
    //         this.scheduleOnce(() => {
    //             this.arrow3.active = true
    //         })
    //     }

    // }
    getMoney() {
        // this.arrKHMan[0].active = false
        this.countUD++
        if (this.countUD == 4) {
            this.unlockNode.active = true
            this.unlockNode.getComponent(cc.BoxCollider3D).enabled = true;
            this.unlockNode.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite',  this.unlockNode.getComponent(cc.Sprite)));
            this.node.getChildByName("arrowEnd").active = true
            this.listArrow.active = false
        }
        console.log("get money")
        this.charComp.isBanhMi = false
        let childleave = this.arrKHMan[0]
        childleave.children[0].getComponent(cc.SkeletonAnimation).play("Walk")
        childleave.children[1].getComponent(cc.Animation).play("pop_close")
        childleave.eulerAngles = cc.v3(0, 90, 0)
        this.char.getComponent("Char").bag.active = false
        cc.tween(this.arrKHMan[0]).by(0.5, { position: cc.v3(-5, 0, 0) }).set({ eulerAngles: cc.v3(0, 180, 0) }).by(2, { position: cc.v3(0, 0, 20) }).call(() => { childleave.active = false }).start()

        for (let i = 1; i < this.arrKHMan.length; i++) {
            let pos = this.arrPosCus[i - 1]
            let child = this.arrKHMan[i]

            cc.tween(child).to(0.5, { position: pos }).call(() => {
                if (i == this.arrKHMan.length - 1) {
                    this.arrKHMan.splice(0, 1)
                }
                // child.getComponent("Char").idle()

            }).start()
        }

        cc.audioEngine.play(this.soundUd, false, 1);
        this.charComp.isCompleteCarry = true;

        this.effMoney.node.active = true
        this.effMoney.getComponent(cc.Animation).play()
        // this.charComp.createMoney()
        this.scheduleOnce(() => {
            this.countMoney += 8;
            console.log("dem money")
            this.lbMoney.string = this.countMoney.toString();
            // if (this.isStep == 4) {
            //     console.log("onnn")
            //     // this.arrow1.active = true;
            //     this.kh1.getComponent(cc.Animation).play()
            //     this.kh1.getComponent("Customer").move()
            // }
            // else {
            //     // this.arrow5.active = true
            //     this.scheduleOnce(() => {
            //         this.endGame.active = true;
            //         this.linkToStore.active = true

            //     }, 0.3)
            // }
            this.charComp.isCompleteCarry = false;

        }, 0.5)

    }

    // transMoney(){

    // }
    update(dt) {
        // this.camera3D.node.setPosition(this.char.position.add(cc.v3(0, 30, 26)).clampf(cc.v3(-9, 30, 38), cc.v3(9, 30, 30)));
        // if (!this.isCutScene) {
        //     this.camera3D.node.setPosition(this.char.position.add(cc.v3(0, 30 * 1.3, 26 * 1.3)));

        // }

        this.responsive();
    }
    responsive() {
        let canvas = this.node.getComponent(cc.Canvas);

        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // this.fitCamera.zoomRatio = 0.8
                // this.mainCamera.zoomRatio = 0.7
                // this.mainCamera.node.position = this.mainCamera.node.position.add( cc.v3(-100, 0))
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.camera3D.zoomRatio=1

                // for (let child of this.uiFit.children) {
                //     child.scale = child.scale * 0.5;
                // }
                // this.uiFit.scaleX = 0.8
                // this.uiFit.scaleY = 0.8
            }
        }
        else {

            this.isvertical = false;
            this.camera3D.zoomRatio=1.5
            // this.uiFit.children[0].scale = 0.4
            // this.uiFit.children[1].scale = 1

            // this.fitCamera.zoomRatio = 1
            // this.mainCamera.zoomRatio = 1.3
            canvas.fitHeight = true;
            canvas.fitWidth = false;

        }

    }
    // setScreenSize(isHorizontal) { // responsive game ngang doc
    //     let canvas = this.node.getComponent(cc.Canvas);
    //     this.joyStick.scale = (isHorizontal) ? 0.5 : 1.8;
    //     // this.btnContinue.children[0].scale = (isHorizontal) ? 0.25 : 0.6;
    //     // this.camera3D.zoomRatio = (isHorizontal) ? 2 : 1.5;
    //     // this.camera3D.node.eulerAngles = (isHorizontal) ? cc.v3(-43, 0, 0) : cc.v3(-46, 0, 0)
    //     // canvas.fitHeight = (isHorizontal) ? true : false;
    //     // canvas.fitWidth = (isHorizontal) ? false : true;
    // }
    // update (dt) {}
}
