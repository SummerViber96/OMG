

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
    @property(cc.Prefab)
    preHotDog: cc.Prefab = null;
    @property(cc.Prefab)
    preBread: cc.Prefab = null;
    @property(cc.Prefab)
    preBuger: cc.Prefab = null;
    @property(cc.Prefab)
    preMeat: cc.Prefab = null;
    @property(cc.Node)
    tuongOt: cc.Node = null;
    @property(cc.Node)
    listChao: cc.Node = null
    @property(cc.Node)
    listKhayBanhMi: cc.Node = null;
    @property(cc.Node)
    listKhayBuger: cc.Node = null;
    @property(cc.Node)
    listHand: cc.Node = null;
    @property(cc.AudioClip)
    soundChesse: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWrong: cc.AudioClip = null
    @property(cc.AudioClip)
    soundNice: cc.AudioClip = null
    @property(cc.AudioClip)
    soundYes: cc.AudioClip = null
    @property(cc.AudioClip)
    soundQuest: cc.AudioClip = null
    @property(cc.Prefab)
    fxColor: cc.Prefab = null
    @property(cc.Node)
    btnMeatNode: cc.Node = null;
    @property(cc.Node)
    btnBugerNode: cc.Node = null;
    @property(cc.Node)
    btnVegettableNode: cc.Node = null;
    @property(cc.Node)
    btnBread: cc.Node = null;
    @property(cc.Node)
    barCoin: cc.Node = null
    @property(cc.Label)
    lbCoin: cc.Label = null;
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
    }
    showCus() {
        let child = this.listCus.children[0]
        child.position = cc.v3(700, 123.591)
        cc.tween(child).to(0.8, { position: cc.v3(0, 123.591) }).call(() => {
            child.getChildByName("pop").active = true
            this.isTargetPop = child.getChildByName("pop")
            this.isTargetCus = child;
            this.listHand.children[0].active = true
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundShowPop, false, 1)

            }, 0.1)
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
        if (this.countCus == 6) {
            this.onEndGame(value)
        }
        else {
            let child = this.listCus.children[this.countCus]
            child.position = cc.v3(700, 123.591)
            child.active = true
            cc.tween(child).to(0.8, { position: cc.v3(0, 123.591) }).call(() => {
                child.getChildByName("pop").active = true
                this.isTargetPop = child.getChildByName("pop")
                this.isTargetCus = child;
                this.scheduleOnce(() => {
                    cc.audioEngine.play(this.soundShowPop, false, 1)

                }, 0.1)
                if (this.countCus == 3) {
                    this.isStep = 1
                    this.onBtn(this.btnMeatNode)
                    if (globalThis.gold < 100) {
                        globalThis.gold = 100
                    }
                    this.listHand.children[5].active = true
                }
                else if (this.countCus == 4 && this.isLockVegettable == true) {
                    if (globalThis.gold < 150) {
                        globalThis.gold = 150
                    }
                }
            }).start()
        }

    }

    onBtn(btn) {
        btn.getComponent(cc.Button).enabled = true;
        // btn.children[0].children[0].active = false;
        let bar = btn.children[0].children[2]
        this.offGray(bar)
    }
    appearBtn(btn) {
        let bar = btn.children[0].children[2]
        cc.tween(bar).to(0.3, { scale: 0 }).start()
        let lock = btn.children[0]
        cc.tween(lock).to(0.4, { opacity: 0 }).start()
    }
    arrHotDog = [null, null, null, null, null, null];
    arrBreak = [null, null, null];
    arrBuger = [null, null, null];
    arrTuongCa = []
    btn_hotDog(event) {
        // if (this.arrHotDog.length >= 6) return;
        let check = this.checkSlotHotDog()
        if (check == null) return;
        this.btnBread.getComponent(cc.Button).enabled = true
        cc.audioEngine.play(this.soundShowPop, false, 1)
        this.listHand.children[0].opacity = 0

        this.scheduleOnce(() => {
            this.listHand.children[1].active = true

        }, 0.5)
        // let dem = this.arrHotDog.length
        let hotDog = cc.instantiate(this.preHotDog);
        hotDog.parent = this.listChao.children[check];
        hotDog.position = cc.v3(0, 0)
        hotDog.getComponent("hotdog").value = check
        this.arrHotDog[check] = hotDog
        let pos = event.currentTarget.position
        this.creatFxColor(pos, 2)

    }
    isLockMeat = true
    btn_meat() {
        if (this.isLockMeat == true && globalThis.gold >= 100) {
            globalThis.gold -= 100;
            this.appearBtn(this.btnMeatNode)
            this.isLockMeat = false
            cc.audioEngine.play(this.soundQuest, false, 0.5)
            this.isNoBuger = false

            return;
        }
        if (this.isLockMeat) return;
        let check = this.checkSlotHotDog()
        if (check == null) return;
        this.listHand.children[5].opacity = 0

        this.scheduleOnce(() => {
            if (this.isStep == 1) {
                this.isStep = 2
                this.listHand.children[6].active = true
                if (globalThis.gold < 150 && this.countCus >= 3) {
                    globalThis.gold += 150;

                }
            }

            this.onBtn(this.btnBugerNode)


        }, 0.5)
        cc.audioEngine.play(this.soundShowPop, false, 1)
        let meat = cc.instantiate(this.preMeat);
        meat.parent = this.listChao.children[check];
        meat.position = cc.v3(0, 0)
        meat.getComponent("meat").value = check
        this.arrHotDog[check] = meat
        // let pos = this.listHand.children[5].position
        // this.creatFxColor(pos, 2)
    }
    checkSlotHotDog() {
        for (let i = 0; i < this.arrHotDog.length; i++) {
            if (this.arrHotDog[i] == null) return i
        }
        return null
    }
    checkSlotBread() {
        for (let i = 0; i < this.arrBreak.length; i++) {
            if (this.arrBreak[i] == null) return i
        }
        return null
    }
    checkSlotBuger() {
        for (let i = 0; i < this.arrBuger.length; i++) {
            if (this.arrBuger[i] == null) return i
        }
        return null
    }


    setGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));

    }
    offGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    }






    btn_bread(event) {
        // if (this.arrBreak.length >= 3) return;
        // let dem = this.arrBreak.length
        let check = this.checkSlotBread()
        if (check == null) return;
        cc.audioEngine.play(this.soundShowPop, false, 1)

        let bread = cc.instantiate(this.preBread);
        bread.parent = this.listKhayBanhMi.children[check];
        bread.position = cc.v3(0, 0)
        bread.getComponent("preBread").value = check
        this.arrBreak[check] = bread
        this.listHand.children[1].opacity = 0
        this.scheduleOnce(() => {
            this.listHand.children[2].active = true

        }, 0.5)
        let pos = event.currentTarget.position
        this.creatFxColor(pos, 2)

    }
    isLockBuger = true
    isNoBuger = true
    btn_buger(event) {
        if (this.isNoBuger) return;
        if (this.isLockBuger == true && globalThis.gold >= 150) {
            globalThis.gold -= 150;
            this.appearBtn(this.btnBugerNode)
            this.isLockBuger = false
            cc.audioEngine.play(this.soundQuest, false, 0.5)
            this.isNoVeget = false

            return;
        }
        if (this.isLockBuger) return
        let check = this.checkSlotBuger()
        if (check == null) return;
        cc.audioEngine.play(this.soundShowPop, false, 1)

        let bread = cc.instantiate(this.preBuger);
        bread.parent = this.listKhayBuger.children[check];
        bread.position = cc.v3(30, 10)
        bread.getComponent("buger").value = check
        this.arrBuger[check] = bread
        this.listHand.children[6].opacity = 0
        // this.scheduleOnce(() => {
        // }, 0.5)
        let pos = event.currentTarget.position
        this.creatFxColor(pos, 2)
        if (this.isStep == 2) {
            let checkMeat = this.checkHaveMeat();
            if (checkMeat != null) {
                this.listHand.children[7].active = true
                let pos = checkMeat.parent.convertToWorldSpaceAR(checkMeat.position);
                pos = this.listHand.convertToNodeSpaceAR(pos);
                this.listHand.children[7].position = pos.add(cc.v3(0, 100))
                this.isStep = 3
            }

        }
    }
    checkHaveMeat() {
        for (let i = 0; i < this.arrHotDog.length; i++) {
            if (this.arrHotDog[i] != null && this.arrHotDog[i].name == "preMeat") return this.arrHotDog[i]
        }
        return null
    }
    sellBread(value) {
        // console.log(value)
        if (this.isTargetCus == null) return;
        if (this.isTargetPop == null) return;
        this.listHand.children[4].opacity = 0

        let child = this.arrBreak[value];
        this.arrBreak[value] = null;
        let posEnd = this.isTargetPop.position
        posEnd = this.isTargetPop.parent.convertToWorldSpaceAR(posEnd)
        posEnd = child.parent.convertToNodeSpaceAR(posEnd)
        let pos = child.parent.convertToWorldSpaceAR(child.position);
        pos = this.node.convertToNodeSpaceAR(pos)
        cc.tween(child).to(0.4, { position: posEnd.add(cc.v3(50, 0)), scale: 0.7 }).call(() => {
            child.opacity = 0

        }).start()
        if (this.isTargetCus) {
            this.isTargetCus.getComponent("cusMission").checkBread(child)

        }
        this.creatFxColor(pos.add(cc.v3(0, 50)), 1.5)
    }
    sellBuger(value) {
        // console.log(value)
        if (this.isTargetCus == null) return;
        if (this.isTargetPop == null) return;
        // this.listHand.children[4].opacity = 0
        this.listHand.children[8].opacity = 0

        let child = this.arrBuger[value];
        this.arrBuger[value] = null;
        let posEnd = this.isTargetPop.position
        posEnd = this.isTargetPop.parent.convertToWorldSpaceAR(posEnd)
        posEnd = child.parent.convertToNodeSpaceAR(posEnd)
        let pos = child.parent.convertToWorldSpaceAR(child.position);
        pos = this.node.convertToNodeSpaceAR(pos)
        cc.tween(child).to(0.4, { position: posEnd.add(cc.v3(50, 0)), scale: 0.7 }).call(() => {
            child.opacity = 0

        }).start()
        if (this.isTargetCus) {
            this.isTargetCus.getComponent("cusMission").checkBuger(child)
        }
        this.creatFxColor(pos.add(cc.v3(0, 50)), 1.5)
    }
    isDelaytuong = false

    btn_tuongCa() {
        if (this.isDelaytuong) return;
        if (this.arrBreak.length <= 0) return;
        let bread = this.checkTuongCa();
        if (bread == null) return;
        this.isDelaytuong = true
        cc.audioEngine.play(this.soundShowPop, false, 1)
        this.listHand.children[3].opacity = 0
        this.isTutChili = false
        // this.scheduleOnce(() => {
        //     this.listHand.children[4].active = true

        // }, 1)
        let posStart = bread.position.add(cc.v3(40, 150));
        posStart = bread.parent.convertToWorldSpaceAR(posStart);
        posStart = this.node.convertToNodeSpaceAR(posStart)
        let posEnd = this.tuongOt.position
        let posMid = cc.v2((posStart.x + posEnd.x) / 2, (posStart.y + posEnd.y) / 2 + 100)
        this.tuongOt.getComponent(cc.Animation).play()
        this.scheduleOnce(() => {
            bread.getComponent("preBread").getTuongCa()
            cc.audioEngine.play(this.soundChesse, false, 1)

        }, 0.25)
        cc.tween(this.tuongOt).bezierTo(0.5, cc.v2(posEnd.x, posEnd.y), cc.v2(posMid.x, posMid.y), cc.v2(posStart.x, posStart.y)).call(() => {

        }).delay(0.2).call(() => {
            this.tuongOt.position = posEnd
            this.tuongOt.children[0].angle = 0
            this.isDelaytuong = false
        }).start()

    }
    checkTuongCa() {
        for (let i = 0; i < this.arrBreak.length; i++) {
            let chld = this.arrBreak[i]
            if (chld != null && chld.getComponent("preBread").isHotDog == true && chld.getComponent("preBread").isTuongCa == false) {
                return chld
            }
        }
        return null
    }
    isLockVegettable = true
    isNoVeget = true
    btn_vegettable() {
        if (this.isNoVeget) return
        if (this.isLockVegettable == true && globalThis.gold >= 150) {
            globalThis.gold -= 150;
            this.appearBtn(this.btnVegettableNode)
            this.isLockVegettable = false
            cc.audioEngine.play(this.soundQuest, false, 0.5)

            return;
        }
        if (this.isLockVegettable) return;
        if (this.arrBuger.length <= 0) return;
        let bread = this.checkVegettable();
        if (bread == null) return;
        this.listHand.children[9].opacity = 0
        cc.audioEngine.play(this.soundShowPop, false, 1);
        bread.getComponent("buger").getVegettable();
        this.scheduleOnce(() => {
            this.listHand.children[8].active = false;

        }, 0.3)

    }
    checkVegettable() {
        for (let i = 0; i < this.arrBuger.length; i++) {
            let chld = this.arrBuger[i]
            if (chld != null && chld.getComponent("buger").isMeat == true && chld.getComponent("buger").isvegettable == false) {
                return chld
            }
        }
        return null
    }
    arrTutHand = [false, false, false, false]
    clickHotDog(value, node) {
        if (this.arrBreak.length <= 0) return;
        let child = this.checkBread()
        if (child == null) return;
        cc.audioEngine.play(this.soundShowPop, false, 1)
        this.listHand.children[2].opacity = 0
        if (this.arrTutHand[3] == false) {
            this.scheduleOnce(() => {
                this.listHand.children[4].active = true
                this.isTutChili = true;

            }, 0.5)
            this.arrTutHand[3] = true
        }

        this.arrHotDog[value] = null
        child.getComponent("preBread").getHotDog()
        let pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.convertToNodeSpaceAR(pos)
        node.opacity = 0

        this.scheduleOnce(() => {
            node.destroy()

        }, 0.1)

        this.creatFxColor(pos, 1.5)
    }
    checkBread() {
        for (let i = 0; i < this.arrBreak.length; i++) {
            let chld = this.arrBreak[i]
            if (chld != null && chld.getComponent("preBread").isHotDog == false) {
                return chld
            }
        }
        return null
    }
    clearMeat() {
        let node1 = this.arrHotDog[0];
        let node2 = this.arrHotDog[1];
        this.arrHotDog[0] = null;
        this.arrHotDog[1] = null;
        this.scheduleOnce(() => {
            node1.destroy()
            node2.destroy()

        }, 0.1)
    }
    clickMeat(value, node) {
        if (this.arrBuger.length <= 0) return;
        let child = this.checkBuger()
        if (child == null) return;
        cc.audioEngine.play(this.soundShowPop, false, 1)
        this.listHand.children[7].opacity = 0
        this.scheduleOnce(() => {
            // this.listHand.children[9].active = true
            // globalThis.gold += 200
            this.onBtn(this.btnVegettableNode)
        }, 0.5)
        this.arrHotDog[value] = null
        child.getComponent("buger").getMeat()
        let pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.convertToNodeSpaceAR(pos)
        node.opacity = 0

        this.scheduleOnce(() => {
            node.destroy()

        }, 0.1)

        this.creatFxColor(pos, 1.5)
    }
    checkBuger() {
        for (let i = 0; i < this.arrBuger.length; i++) {
            let chld = this.arrBuger[i]
            if (chld != null && chld.getComponent("buger").isMeat == false) {
                return chld
            }
        }
        return null
    }
    onEndGame(value) {
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
        this.lbCoin.string = globalThis.gold.toString()
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
        this.endCard.scale = (logic) ? 1.25 : 0.7
        this.logo.scale = (logic) ? 0.6 : 0.4
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        this.camera.node.position = cc.v3(0, -50)
        this.barCoin.scale = (logic) ? 1.6 : 1
        this.listCus.scale = (logic) ? 1.8 : 1
        this.listCus.position = (logic) ? cc.v3(0, -130) : cc.v3(0, -34)
        this.btnVegettableNode.position = (logic) ? cc.v3(-312, -727.999) : cc.v3(-751, -259)
        this.btnBugerNode.position=(logic)?cc.v3(-680,-523):cc.v3(-710,-523)
        // this.barCoin.y=(logic)?400:470
        if (logic == true) {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            this.camera.node.position = cc.v3(-70, 350)

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            this.camera.zoomRatio = 1.25

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1

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
                this.camera.zoomRatio = 0.8
            }
        }
        if (this.isTutChili == true) {
            this.listHand.children[3].opacity = 0

            if (this.arrBreak.length <= 0) return;
            let bread = this.checkTuongCa();
            if (bread == null) return;
            this.listHand.children[3].opacity = 255
        }

    }
}
