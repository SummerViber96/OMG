globalThis.ruby = 0
globalThis.countChar = 99
globalThis.countDownBtn1 = false
const { ccclass, property } = cc._decorator;
declare const window: any;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Camera)
    mainCamera: cc.Camera = null;
    @property(cc.Camera)
    mainCamera2: cc.Camera = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Node)
    listCus: cc.Node = null;
    @property(cc.Node)
    listVetChem: cc.Node = null;
    @property(cc.Node)
    listGo: cc.Node = null;
    @property(cc.Prefab)
    preWood: cc.Prefab = null;
    @property(cc.Node)
    transer: cc.Node = null;
    @property(cc.Node)
    bag: cc.Node = null
    @property(cc.Prefab)
    listCusPre: cc.Prefab[] = []
    @property(cc.Node)
    listRay: cc.Node = null;
    @property(cc.Animation)
    animCoin: cc.Animation = null
    @property(cc.Node)
    lbRuby: cc.Node = null
    @property(cc.Node)
    logo: cc.Node = null
    // @property(cc.Node)
    // listHouse: cc.Node = null;
    @property(cc.Node)
    listChar: cc.Node[] = []

    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundZee: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundChat: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundERR: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundkhoan: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundUd: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundCoin: cc.AudioClip = null;
    @property(cc.Node)
    listCard1: cc.Node = null
    @property(cc.Node)
    listCard2: cc.Node = null;
    @property(cc.Node)
    bar1: cc.Node = null;
    @property(cc.Node)
    bar2: cc.Node = null;
    @property(cc.Node)
    cusBackNode: cc.Node = null;
    @property(cc.Animation)
    noti: cc.Animation = null
    @property(cc.Animation)
    noti2: cc.Animation = null
    @property(cc.Node)
    endCard: cc.Node = null
    @property(cc.Prefab)
    prePay: cc.Prefab = null
    adChanel = '{{__adv_channels_adapter__}}'
    do = 0
    isvertical = false;
    isCountChar = 0;
    isCountUd = 1;
    isCountUdMachine = 0;
    isCountUdRoll = 0;
    isMoveChar = false
    isRay = false;
    isCountWood = 2
    arrCus = [];

    arrPosWood = [
        cc.v3(-256.39, 53.70, 0.00), cc.v3(-278.48, 38.45, 0.00), cc.v3(-303.19, 23.20, 0.00), cc.v3(-327.38, 7.95, 0.00), cc.v3(-353.36, -6.77, 0.00), cc.v3(-376.52, -20.13, 0.00),
        cc.v3(-186.60, 8.14, 0.00), cc.v3(-208.69, -7.11, 0.00), cc.v3(-233.41, -22.36, 0.00), cc.v3(-257.60, -37.61, 0.00), cc.v3(-283.58, -52.34, 0.00), cc.v3(-306.73, -65.69, 0.00)]

    start() {
        for (let child of this.listGo.children) {
            console.log(child.position.toString())
        }
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.3)
        this.schedule(() => {
            this.createWood();
        }, 1.2)
        let child = this.listChar[0]
        child.active = true;
        this.scheduleOnce(() => {
            child.getChildByName("vfx_chatGo").getComponent(cc.Animation).play()
            cc.audioEngine.play(this.soundChat, false, 0.2)
            this.schedule(() => {
                child.getChildByName("vfx_chatGo").getComponent(cc.Animation).play()
                cc.audioEngine.play(this.soundChat, false, 0.2)

            }, 1.3)
        }, 0.7)
        for (let i = 0; i < this.listCus.childrenCount; i++) {
            this.arrCus.push(this.listCus.children[i])
        }
    }
    startTranser() {
        if (this.isMoveChar) return;
        if (this.isCountWood >= 3) {
            if (this.isRay == false) {
                this.isCountWood -= 3;
                this.isMoveChar = true;
                console.log("go ne")
                this.scheduleOnce(() => {
                    this.transer.getComponent("transer").move1()
                }, 0.6)
                let check = this.listGo.childrenCount - 1
                for (let i = check; i >= check - 2; i--) {
                    let wood = this.listGo.children[i];
                    let pos = this.listGo.convertToWorldSpaceAR(wood.position)
                    pos = this.bag.convertToNodeSpaceAR(pos)
                    wood.parent = this.bag
                    wood.position = pos
                    let posEnd = this.bag.childrenCount
                    let posMid = cc.v2((pos.x - 24) / 2, 55.6 + posEnd * 20 + 150)
                    cc.tween(wood).delay(0.05 * posEnd).bezierTo(0.3, cc.v2(pos.x, pos.y), posMid, cc.v2(24, 55.6 + posEnd * 20)).start()
                    // cc.tween(wood).delay(0.05 * posEnd).to(0.3, { position: cc.v3(24, 55.6 + posEnd * 20) }).start()
                }
            }
            else {

            }

        }

    }
    btn_addChar() {
        if (this.isCountChar >= 5) return;
        this.isCountChar++;
        this.addNewChar();
    }
    moveBack() {
        // let child = this.listCus.children[this.listCus.childrenCount-1];
        // cc.v3(-6, -417)
        this.animCoin.play()
        this.lbRuby.getComponent(cc.Animation).play()
        globalThis.ruby += 100
        cc.audioEngine.play(this.soundCoin, false, 1)
        // for (let i = 0; i < this.listCus.childrenCount; i++) {
        //     let child = this.listCus.children[i]
        //     this.listCus.children[i].getComponent(C).anim.setAnimation(0, "Walk", true)
        //     if (this.listCus.children[i + 1]) {
        //         cc.tween(this.listCus.children[i]).to(0.3, { position: this.listCus.children[i + 1].position }).call(() => {
        //             child.getComponent(C).anim.setAnimation(0, "Idle", true)
        //         }).start()
        //     }
        //     else {
        //         cc.tween(this.listCus.children[i]).by(0.3, { position: cc.v3(77 - 143, -372.219 + 339) }).call(() => {
        //             child.getComponent(C).anim.setAnimation(0, "Idle", true)

        //             if (i == this.listCus.childrenCount - 1) {
        //                 this.createNewCus()

        //                 child.parent = this.node
        //                 child.getComponent(C).anim.setAnimation(0, "Walk", true)
        //                 cc.tween(child).to(3, { position: cc.v3(-1027, 142) }).call(() => {
        //                     child.destroy()
        //                 }).start()
        //             }

        //         }).start()
        //     }
        // }
        let length = this.arrCus.length
        for (let i = 0; i < this.arrCus.length; i++) {
            let child = this.arrCus[i];
            child.getComponent(C).anim.setAnimation(0, "Walk", true);
            if (i < length - 1) {
                cc.tween(child).to(0.3, { position: this.arrCus[i + 1].position }).call(() => {
                    child.getComponent(C).anim.setAnimation(0, "Idle", true)
                }).start()
            }
            else {
                cc.tween(child).by(0.3, { position: cc.v3(77 - 143, -372.219 + 339) }).call(() => {
                    // child.getComponent(C).anim.setAnimation(0, "Idle", true)

                    // if (i == this.arrCus.length - 1) {

                    child.parent = this.node
                    child.getComponent(C).anim.setAnimation(0, "Walk", true)
                    this.arrCus.pop()
                    this.createNewCus()
                    child.getComponent(C).getHappy()
                    cc.tween(child).to(3, { position: cc.v3(-1027, 142) }).call(() => {

                        child.destroy()


                    }).start()
                    // }

                }).start()
            }
        }

    }
    createNewCus() {
        let rd = Math.floor(Math.random() * this.listCusPre.length);
        let cus = cc.instantiate(this.listCusPre[rd])
        // cus.parent = this.listCus;
        this.listCus.addChild(cus, cc.macro.MIN_ZINDEX)
        cus.position = cc.v3(1001, 149)
        // cus.zIndex = 1000 + this.isCount
        cus.zIndex = this.arrCus[0].zIndex - 1
        cus.getComponent(C).idle()
        this.arrCus.unshift(cus)
    }
    createWood() {

        let wood = cc.instantiate(this.preWood)
        wood.parent = this.listGo;
        if (this.isCountWood < this.arrPosWood.length) {

        }
        let col = Math.floor(this.isCountWood / this.arrPosWood.length)

        let posCheck = this.isCountWood - col * this.arrPosWood.length;
        let posStart = this.arrPosWood[posCheck].add(cc.v3(0, col * 12 + 100))
        let posEnd = this.arrPosWood[posCheck].add(cc.v3(0, col * 12))
        // wood.position=this.arrPosWood[posCheck]
        // wood.y=wood.y+col*12
        wood.position = posStart;
        // wood.move=false
        cc.tween(wood).to(0.15, { position: posEnd }).call(() => {
            this.startTranser()
        }).start()
        // console.log("posCheck", posCheck)
        this.isCountWood++


    }
    addNewChar() {
        this.schedule(() => {
            this.createWood();
        }, 1.2)
        cc.audioEngine.play(this.soundUd, false, 1)
        let btnChar = this.listCard1.children[0].getComponent("card")
        btnChar.current += 50
        let btnChar2 = this.listCard2.children[0].getComponent("card")
        btnChar2.current += 50


        let child = this.listChar[this.isCountChar]
        child.active = true;
        child.getChildByName("vfx_smoke").getComponent(cc.Animation).play("vfx_smoke")
        this.scheduleOnce(() => {
            cc.audioEngine.play(this.soundChat, false, 0.2)
            child.getChildByName("vfx_chatGo").getComponent(cc.Animation).play()

            this.schedule(() => {
                cc.audioEngine.play(this.soundChat, false, 0.2)
                child.getChildByName("vfx_chatGo").getComponent(cc.Animation).play()
            }, 1.3)
        }, 0.7)

        for (let i = 1; i < child.childrenCount - 1; i++) {
            child.children[i].active = false
        }
        this.scheduleOnce(() => {
            this.listVetChem.children[this.isCountChar].active = true;

        }, 0.8)
        child.children[this.isCountUdMachine + 1].active = true;

    }
    arrChem2 = [cc.v3(222, -125), cc.v3(121, -68), cc.v3(31, -15), cc.v3(-48, 39), cc.v3(-129, 93), cc.v3(-207, 149)]
    btn_addMachine() {
        if (this.isCountUdMachine >= 2) {
            this.linkToStore.getComponent("AdManager").openAdUrl()

            return;
        }
        this.isCountUdMachine++;
        cc.audioEngine.play(this.soundUd, false, 1)
        let btnChar = this.listCard1.children[1].getComponent("card")
        btnChar.current += 1000
        let btnChar2 = this.listCard2.children[1].getComponent("card")
        btnChar2.current += 1000
        for (let j = 0; j < this.isCountChar + 1; j++) {
            let child = this.listChar[j]
            for (let i = 1; i < child.childrenCount - 1; i++) {
                child.children[i].active = false;
                // this.listVetChem.children[i].position = this.listVetChem.children[i].position.add(cc.v3(50, 80))
                this.listVetChem.children[i].position=this.arrChem2[i].add(cc.v3(20,-40))
                this.listVetChem.children[i].scaleX=1.1
            }
            this.listVetChem.children[0].position=this.arrChem2[0].add(cc.v3(20,-30))

            // if()
            if (this.isCountUdMachine == 1) {
                child.getChildByName("Cut_Machine").active = true
            }
            else if (this.isCountUdMachine == 2) {
                child.getChildByName("Cut_Machine2").active = true

            }
            // child.getChildByName("")
            child.getChildByName("vfx_smoke").getComponent(cc.Animation).play()
        }


    }
    isRoll1 = 0;
    isRoll2 = 0;
    isRoll3 = 0;

    btn_addRoll() {
        if (this.isCountUdRoll >= 1) {
            this.linkToStore.getComponent("AdManager").openAdUrl()
            return;
        }
        this.isCountUdRoll++
        cc.audioEngine.play(this.soundUd, false, 1)

        this.isRay = true
        this.transer.active = false
        let btnChar = this.listCard1.children[2].getComponent("card")
        btnChar.current += 800
        let btnChar2 = this.listCard2.children[2].getComponent("card")
        btnChar2.current += 800
        if (this.isCountUdRoll == 1) {

            this.listRay.getChildByName("vfx_smoke").getComponent(cc.Animation).play()
            this.listRay.children[1].active = true;
            this.schedule(() => {

                let wood = this.listGo.children[this.listGo.childrenCount - 1]
                let child = this.listRay.children[1].children[0]
                if (wood) {
                    this.isCountWood -= 1;

                    let pos = this.listGo.convertToWorldSpaceAR(wood.position)
                    pos = child.convertToNodeSpaceAR(pos)
                    wood.parent = child
                    wood.position = pos
                    let posEnd = cc.v2(130, 89)
                    let posMid = cc.v2((pos.x - 24) / 2, 55.6 + this.isRoll1 * 20 + 150)
                    wood.stopAllActions()
                    cc.tween(wood).delay(0.05 * this.isRoll1).bezierTo(0.3, cc.v2(pos.x, pos.y), posMid, posEnd)
                        .call(() => {
                            wood.scale = 0.8
                        })
                        .to(0.6, { position: cc.v3(-123.9 + this.isRoll1 * (23), -60 + this.isRoll1 * (20)) })
                        .call(() => {
                            this.isRoll1++
                            if (this.isRoll1 == 3) {
                                this.isRoll1 = 0
                                this.checkTrans(child)

                            }
                        }).start()
                    // cc.tween(wood).delay(0.05 * posEnd).to(0.3, {scale:0.8}).start()

                }

            }, 0.3)
        }
        else {
            this.isCountWood -= 1;

            this.listRay.children[0].active = true;
            this.listRay.getChildByName("vfx_smoke").getComponent(cc.Animation).play()
            this.listRay.children[2].active = true;
            //check
            this.schedule(() => {
                let wood = this.listGo.children[this.listGo.childrenCount - 1]
                let child = this.listRay.children[0].children[0]
                if (wood) {
                    // let wood = this.listGo.children[this.listGo.childrenCount - 1];
                    let pos = this.listGo.convertToWorldSpaceAR(wood.position)
                    pos = child.convertToNodeSpaceAR(pos)
                    wood.parent = child
                    wood.position = pos
                    wood.stopAllActions()

                    let posEnd = cc.v2(130, 89)
                    let posMid = cc.v2((pos.x - 24) / 2, 55.6 + this.isRoll1 * 20 + 150)
                    cc.tween(wood).delay(0.05 * this.isRoll1).bezierTo(0.3, cc.v2(pos.x, pos.y), posMid, posEnd).call(() => {
                        if (this.isRoll2 == 3) {
                            this.isRoll2 = 0
                            this.checkTrans(child)

                        }
                    }).to(0.5, { position: cc.v3(-123.9 + this.isRoll2 * (23), -60 + this.isRoll2 * (20)) }).start()
                    // cc.tween(wood).delay(0.05 * posEnd).to(0.3, {scale:0.8}).start()
                }

            }, 0.3)

            this.schedule(() => {
                let wood = this.listGo.children[this.listGo.childrenCount - 1];
                let child = this.listRay.children[2].children[0];
                if (wood) {
                    // let wood = this.listGo.children[this.listGo.childrenCount - 1];
                    let pos = this.listGo.convertToWorldSpaceAR(wood.position)
                    pos = child.convertToNodeSpaceAR(pos)
                    wood.parent = child
                    wood.position = pos
                    wood.stopAllActions()

                    let posEnd = cc.v2(130, 89)
                    let posMid = cc.v2((pos.x - 24) / 2, 55.6 + this.isRoll1 * 20 + 150)
                    cc.tween(wood).delay(0.05 * this.isRoll1).bezierTo(0.3, cc.v2(pos.x, pos.y), posMid, posEnd)
                        .to(0.5, { position: cc.v3(-123.9, -60) })

                        .call(() => {
                            this.isRoll3++
                            if (this.isRoll3 == 3) {
                                this.isRoll3 = 0
                                this.checkTrans(child)

                            }
                        }).start()
                    // cc.tween(wood).delay(0.05 * posEnd).to(0.3, {scale:0.8}).start()
                }

            }, 0.3)

        }
    }




    // check() {
    //     this.isSlot = this.counthouse * (this.isUdHouse + 1)
    // }
    isTrans = false
    checkTrans(parent) {
        if (this.isTrans) return;
        this.isTrans = true;
        // console.log("checkTrans")
        let cus = this.arrCus[this.arrCus.length - 1]
        let count = 0
        if (parent.childrenCount >= 3) {
            for (let i = 3; i >= 0; i--) {
                let child = parent.children[i];
                if (child) {
                    let pos = child.position;
                    pos = parent.convertToWorldSpaceAR(pos);
                    pos = cus.convertToNodeSpaceAR(pos);
                    child.parent = cus;
                    child.position = pos;
                    count++;
                    child.stopAllActions();
                    cc.tween(child).delay(0.05 * count).bezierTo(0.3, cc.v2(pos.x, pos.y), cc.v2(pos.x / 2, pos.y + 200), cc.v2(0, 50)).call(() => {
                        child.destroy()
                    }).start()
                }


            }
            this.scheduleOnce(() => {
                // this.move2()
                this.isTrans = false
                this.moveBack()
            }, 0.5)
        }


    }
    onEndGame() {
        // this.endCard.active = true;
        // this.linkToStore.getComponent("AdManager").openAdUrl()

        // this.linkToStore.active = true
    }
    createPay(pos) {
        let pay = cc.instantiate(this.prePay)
        pay.parent = this.node
        pay.scaleX = -1
        pay.position = pos
    }
    // createCus() {


    //     for (let i = 0; i < this.listCus.childrenCount; i++) {
    //         let child = this.listCus.children[i]
    //         child.getComponent(C).runPos(this.arrPos[i], 0.3)
    //         this.scheduleOnce(() => {
    //             child.getComponent(C).idle()
    //         }, 0.3)
    //     }
    //     let preCus = null
    //     let rd = Math.floor(Math.random() * 2)
    //     preCus = this.listChar[rd]
    //     let cus = cc.instantiate(preCus)
    //     cus.parent = this.listCus
    //     cus.position = cc.v3(-669, 106)

    // }
    // checkHand() {
    //     if (globalThis.ruby >= this.isValueExpand) {
    //         this.listCard.children[2].getChildByName("hand").active = true;

    //         return;
    //     }
    //     else if (globalThis.ruby >= this.isValueUd) {
    //         this.listCard.children[1].getChildByName("hand").active = true;

    //         return;
    //     }
    //     else {
    //         this.listCard.children[0].getChildByName("hand").active = true;

    //     }
    // }

    // btn_card1(event) {
    //     if (this.isCharmove >= this.counthouse * (this.isUdHouse + 1)) {
    //         this.noti.getComponent(cc.Animation).play()
    //         return;
    //     }
    //     // if (globalThis.countDownBtn1) return;
    //     // globalThis.countDownBtn1 = true;
    //     cc.audioEngine.play(this.soundkhoan, false, 1)
    //     globalThis.countChar--;
    //     let child = this.listCus.children[0]
    //     child.parent = this.node;
    //     this.isCharmove++;
    //     let arrbed = []
    //     globalThis.ruby -= 1
    //     this.offHand()
    //     if ((this.isCharmove <= this.isMaxCharHouse) || (this.isHouse1 < this.isMaxCharHouse)) {
    //         arrbed = this.arrPosbed[this.isUdHouse]
    //         let pos = arrbed[this.isHouse1]
    //         this.isHouse1++
    //         child.getComponent(C).runPos(cc.v3(28, 454), 1)

    //         this.scheduleOnce(() => {
    //             child.position = pos
    //             child.getComponent(C).sleep()
    //             child.scaleX = 1
    //         }, 1)
    //         this.scheduleOnce(() => {
    //             globalThis.ruby += 50
    //             this.createPay(child.position.add(cc.v3(0, 60)))
    //             this.check2()
    //             this.isCharmove--
    //             this.isHouse1--
    //             cc.audioEngine.play(this.soundCoin, false, 0.6)
    //             child.getComponent(C).getHappy()
    //             child.setPosition(child.position.add(cc.v3(50, 0)))
    //             child.getComponent(C).runPos(cc.v3(-331, 188), 1.2)
    //             this.scheduleOnce(() => {
    //                 child.getComponent(C).runPos(cc.v3(-623, -205), 1.1)
    //             }, 1.2)
    //             this.scheduleOnce(() => {
    //                 child.destroy()
    //             }, 2.2)
    //         }, 1.6)
    //         this
    //     }
    //     else if (this.counthouse > 1) {
    //         child.parent = this.cusBackNode
    //         arrbed = this.arrPosbed2[this.isUdHouse]
    //         // let pos = arrbed[this.isHouse2 - this.isMaxCharHouse - 1]
    //         let pos = arrbed[this.isHouse2]

    //         this.isHouse2++
    //         // console.log(pos.toString())
    //         child.getComponent(C).runPos(cc.v3(-847, 738), 2)
    //         this.scheduleOnce(() => {
    //             this.isCharmove--
    //             this.isHouse2--
    //             child.getComponent(C).runPos(cc.v3(-554, 878), 1)
    //         }, 2)
    //         this.scheduleOnce(() => {
    //             child.position = pos
    //             child.getComponent(C).sleep()
    //             child.scaleX = 1
    //         }, 3.1)
    //         this.scheduleOnce(() => {
    //             globalThis.ruby += 50
    //             this.check2()
    //             this.createPay(child.position.add(cc.v3(0, 60)))
    //             cc.audioEngine.play(this.soundCoin, false, 0.6)

    //             child.getComponent(C).getHappy()
    //             child.setPosition(child.position.add(cc.v3(50, 0)))
    //             child.getComponent(C).runPos(cc.v3(-908, 575), 1.2)
    //             this.scheduleOnce(() => {
    //                 child.getComponent(C).runPos(cc.v3(-1549, 0), 2)
    //             }, 1.2)
    //             this.scheduleOnce(() => {
    //                 child.destroy()
    //             }, 2.2)
    //         }, 3.6)
    //     }
    //     this.createCus()
    // }
    // isValueUd = 60;
    // isValueExpand = 100
    // btn_udHouse(event) {
    //     if (globalThis.ruby < this.isValueUd) {
    //         this.noti2.play()
    //         return;
    //     }
    //     if (this.isUdHouse > 1) {
    //         this.onEndGame()
    //         return;
    //     }

    //     globalThis.ruby -= this.isValueUd

    //     this.offHand()
    //     cc.audioEngine.play(this.soundUd, false, 1)
    //     this.isValueUd += 100 * (this.isUdHouse + 1)
    //     event.currentTarget.getComponent("card").current = this.isValueUd
    //     event.currentTarget.getComponent("card").lbCurrent.getComponent(cc.Label).string = this.isValueUd.toString()

    //     if (this.isUdHouse == 0) {
    //         for (let i = 0; i < this.counthouse; i++) {
    //             let child = this.listHouse.children[i]
    //             child.getComponent(cc.Animation).play("house_ud1")
    //             child.getChildByName("effUd").getComponent(cc.Animation).play()
    //         }
    //         this.isMaxCharHouse = 2
    //     }
    //     else if (this.isUdHouse == 1) {
    //         for (let i = 0; i < this.counthouse; i++) {
    //             let child = this.listHouse.children[i]
    //             child.getComponent(cc.Animation).play("house_ud2")
    //             child.getChildByName("effUd").getComponent(cc.Animation).play()

    //         }
    //         this.isMaxCharHouse = 3
    //     }
    //     this.isUdHouse++
    // }
    // btn_expand(event) {
    //     if (globalThis.ruby < this.isValueExpand) {
    //         this.noti2.play()

    //         return;
    //     }
    //     if (this.counthouse >= 4) {
    //         this.onEndGame()
    //         return;

    //     }



    //     cc.audioEngine.play(this.soundUd, false, 1)
    //     globalThis.ruby -= this.isValueExpand

    //     this.offHand()

    //     this.isValueExpand += 140 * (this.counthouse)
    //     event.currentTarget.getComponent("card").current = this.isValueExpand
    //     event.currentTarget.getComponent("card").lbCurrent.getComponent(cc.Label).string = this.isValueExpand.toString()
    //     let child = this.listHouse.children[this.counthouse]
    //     child.getChildByName("eff_open").getComponent(cc.Animation).play()
    //     child.getChildByName("build").active = false;
    //     switch (this.isUdHouse) {
    //         case 0: child.getChildByName("icon").scale = 1
    //             // cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-320, 410) }).start()
    //             break;
    //         case 1: child.getChildByName("icon2").scale = 1

    //             break;
    //         case 2: child.getChildByName("icon3").scale = 1
    //             break;
    //     }
    //     switch (this.counthouse) {
    //         case 1:
    //             cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-320, 410) }).start()
    //             cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(-270, 550) }).start()
    //             cc.tween(this.mainCamera).by(0.3, { zoomRatio: -0.2 }).start()
    //             // cc.tween(this.mainCamera2).by(0.3, { zoomRatio: -0.6 }).start()
    //             break;
    //         case 2:
    //             cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(0, 600) }).start()
    //             cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(0, 800) }).start()

    //             cc.tween(this.mainCamera).by(0.3, { zoomRatio: -0.2 }).start()
    //             cc.tween(this.mainCamera2).by(0.3, { zoomRatio: -0.6 }).start()

    //             break;
    //         case 3:

    //             break;
    //     }
    //     this.counthouse++

    // }
    listCard = null
    update(dt) {
        let canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;

                canvas.fitHeight = false;
                canvas.fitWidth = true;
                // this.isScale = 1
                // this.mainCamera.zoomRatio = 1
                this.listCard = this.listCard1
                this.listCard1.active = true;
                this.listCard2.active = false;
                this.logo.scale = 0.4
                this.logo.getComponent(cc.Widget).left = 219
                this.logo.getComponent(cc.Widget).top = 116
                // this.bar1.active = true;
                // this.bar2.active = false;
                this.endCard.getChildByName("banner1").active = true;
                this.endCard.getChildByName("banner2").active = false;
                this.mainCamera.node.active = true;
                this.mainCamera2.node.active = false;
                if (cc.winSize.height / cc.winSize.width < 1.35) {
                    canvas.fitHeight = true;
                }
            }
        }
        else {
            // this.mainCamera.zoomRatio = 1.5
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            // this.isScale = 1.5
            this.listCard = this.listCard2
            this.logo.scale = 0.6
            this.logo.getComponent(cc.Widget).left = 300
            this.logo.getComponent(cc.Widget).top = 150

            this.listCard1.active = false;
            this.listCard2.active = true;
            // this.bar1.active = false;
            // this.bar2.active = true;
            this.endCard.getChildByName("banner1").active = false;
            this.endCard.getChildByName("banner2").active = true;
            this.mainCamera.node.active = false;
            this.mainCamera2.node.active = true;
        }

    }
}
