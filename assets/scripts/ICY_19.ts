globalThis.countWood = 0
globalThis.countMoney = 0
globalThis.update = 1
const { ccclass, property } = cc._decorator;
declare const window: any;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Camera)
    mainCamera: cc.Camera = null
    @property(cc.Node)
    listCus: cc.Node = null;
    @property(cc.Prefab)
    listCusPre: cc.Prefab[] = [];
    @property(cc.Prefab)
    woodPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    moneyPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    preTree: cc.Prefab = null;
    @property(cc.Node)
    listtree: cc.Node = null;
    @property(cc.Node)
    char: cc.Node = null
    @property(cc.Node)
    bage: cc.Node = null;
    @property(cc.Node)
    arenaSell: cc.Node = null;
    @property(cc.Node)
    arenaMoney: cc.Node = null;
    @property(cc.Node)
    arenaUpgrade: cc.Node = null;
    @property(cc.Node)
    arenaUpgrade2: cc.Node = null;
    @property(cc.Node)
    arenaUpgrade3: cc.Node = null;
    @property(cc.Node)
    arenaUpgrade4: cc.Node = null;
    @property(cc.Prefab)
    preText: cc.Prefab = null;
    @property(cc.Node)
    linkToStore: cc.Node = null
    @property(cc.Node)
    listArrow: cc.Node = null;
    adChanel = '{{__adv_channels_adapter__}}'
    @property(cc.Node)
    logo: cc.Node = null;
    @property(cc.Node)
    keTien: cc.Node = null;
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundPut: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundUd: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundChatGo: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundNhanGo: cc.AudioClip = null;
    @property(cc.Label)
    lbMoney: cc.Label = null;
    @property(cc.Label)
    lbWood: cc.Label = null;
    @property(cc.Node)
    barCurrent: cc.Node = null
    @property(cc.Node)
    endCard: cc.Node = null
    @property(cc.Node)
    Joystick: cc.Node = null
    @property(cc.Node)
    cusNext: cc.Node = null
    @property(cc.Prefab)
    vfxMoney: cc.Prefab = null
    @property(cc.Prefab)
    preEgg: cc.Prefab = null;
    @property(cc.Prefab)
    preKhayTrung: cc.Prefab = null;
    @property(cc.Node)
    keGo: cc.Node = null;
    @property(cc.Node)
    listCusSub: cc.Node[] = []
    @property(cc.Node)
    arrow2: cc.Node = null;
    @property(cc.Node)
    arrow3: cc.Node = null;
    @property(cc.Node)
    listTrung: cc.Node = null
    @property(cc.Node)
    tableSell: cc.Node = null;
    @property(cc.Node)
    moneyBag: cc.Node = null;
    @property(cc.Node)
    moneyTable: cc.Node = null
    @property(cc.Node)
    farm3: cc.Node = null;
    @property(cc.Node)
    farm4: cc.Node = null
    @property(cc.Prefab)
    arrowPrefab: cc.Prefab = null;
    @property(cc.Node)
    arrowNode: cc.Node = null;
    isFirtTut = false;
    isDelaySOund = false
    charComp = null;
    listCusPos = [cc.v3(-35.76, -370.11, 0.00), cc.v3(33.94, -402.91, 0.00), cc.v3(110.13, -445.05, 0.00), cc.v3(189.77, -488.97, 0.00), cc.v3(267.05, -534.79, 0.00), cc.v3(366.10, -590.53, 0.00),]
    isPlayerEggs = 0
    arrCus = [];
    arrPos = [];
    arrPosKe = [];
    countBage = 0; // so khay tren nguoi
    countBageTabel = 0;// so khay tren ban
    // listCusPos = [cc.v3(-264.54, -368.35, 0.00), cc.v3(-346.80, -413.52, 0.00), cc.v3(-451.97, -473.16, 0.00), cc.v3(-540.96, -523.00, 0.00), cc.v3(-632.62, -576.72, 0.00), cc.v3(-733.54, -631.18, 0.00)]
    listMoneyPos = [cc.v3(-5.03, 77.62, 0.00), cc.v3(32.39, 57.52, 0.00), cc.v3(71.48, 36.30, 0.00), cc.v3(110.56, 15.63, 0.00), cc.v3(-57.52, 48.58, 0.00), cc.v3(-20.10, 28.48, 0.00), cc.v3(18.99, 7.26, 0.00), cc.v3(58.07, -13.40, 0.00),
    cc.v3(-110.01, 18.98, 0.00),
    cc.v3(-72.59, -1.12, 0.00),
    cc.v3(-33.50, -22.34, 0.00),
    cc.v3(5.58, -43.00, 0.00),]
    arrowSpacing: number = 50;
    countOpen = 0;

    arrows: cc.Node[] = [];
    protected onLoad(): void {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        cc.director.getPhysicsManager().enabled = true;
    }
    start() {
        cc.audioEngine.play(this.soundBg, true, 1)
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.charComp = this.char.getComponent("character")
        for (let i = 0; i < this.listCus.childrenCount; i++) {
            this.arrCus.push(this.listCus.children[i])
            this.arrPos.push(this.listCus.children[i].position)
        }
        this.listCus.children[0].getComponent("character").realdySell = true
        for (let i = this.keGo.childrenCount - 1; i >= 0; i--) {
            this.arrPosKe.push(this.keGo.children[i].position)
            this.keGo.children[i].destroy();
        }
        this.createEggs()
        this.isTargetDraw = this.listArrow.children[2]
    }
    onEndGame() {
        this.scheduleOnce(() => {
            this.endCard.active = true;
            this.linkToStore.active = true;
            this.Joystick.active = false;
            this.Joystick.getComponent("JoyStick").touchEndEvent();
        }, 1)


    }
    upgradeArena(value) {

    }

    //tao trung
    createEggs() {
        let startPos = cc.v3(-882, 514);
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 12; j++) {
                let rdANgle = Math.floor(Math.random() * 360)
                let egg = cc.instantiate(this.preEgg)
                egg.parent = this.listTrung
                egg.angle = rdANgle;
                egg.position = startPos.add(cc.v3((-43) * j + 40 * i, (-23) * j - 20 * i))
            }
        }
    }
    //nhan trung
    isCount = 0// dem neu bang 4 thi se tao khay trung
    collectEggs(egg) {
        this.listArrow.children[2].active = false
        if (egg && egg.parent) {
            let pos = egg.parent.convertToWorldSpaceAR(egg.position).add(cc.v3(0, 100));
            egg.getComponent(cc.Animation).play();
            let count = this.isPlayerEggs;
            globalThis.countWood++
            this.scheduleOnce(() => {
                if (this.isDelaySOund == false) {
                    this.isDelaySOund = true
                    cc.audioEngine.play(this.soundChatGo, false, 1)
                    this.scheduleOnce(() => {
                        this.isDelaySOund = false
                    }, 0.2)
                }
                let wood = cc.instantiate(this.woodPrefab);
                wood.parent = this.bage;
                let startPos = this.bage.convertToNodeSpaceAR(pos);
                let endPos = cc.v3(0, 0)
                count++
                let midPos = cc.v2((startPos.x + endPos.x) / 2, startPos.y + 100)
                wood.position = startPos
                cc.tween(wood).bezierTo(0.3, cc.v2(startPos.x, startPos.y), midPos, cc.v2(endPos.x, endPos.y)).start()
                cc.tween(wood).to(0.3, { angle: 360 }).call(() => {
                    wood.destroy()
                },).start()
            }, 0.05)
            let fx = cc.instantiate(this.preText)
            fx.parent = this.node
            fx.position = this.node.convertToNodeSpaceAR(pos)
            this.addEgg(egg.position)
            egg.destroy();
            this.isPlayerEggs++
            this.isCount++
            if (this.isCount == 4) {
                this.createKhay();
                this.isCount = 0;
            }
        }
    }
    // tao trung
    addEgg(pos) {
        this.scheduleOnce(() => {
            if (this.listTrung.childrenCount <= (20 * 12)) {
                let egg = cc.instantiate(this.preEgg);
                egg.parent = this.listTrung;
                egg.position = pos;
            }

        }, 2)

    }
    //tao khay, 1 khay = 4 trung
    createKhay() {
        if (this.countBage >= 20) return;
        if (this.countBage < 0) {
            this.countBage = 0
        }
        let khay = cc.instantiate(this.preKhayTrung);
        khay.parent = this.bage;
        khay.position = cc.v3(0, 50).add(cc.v3(0, 40 * this.countBage))
        this.countBage++
    }
    isCountSub = 0
    isCountEggke = 0
    collectEggsSub(egg) {
        // if (this.keGo.childrenCount >= 60) return;
        this.listArrow.children[2].active = false
        if (egg && egg.parent) {
            let pos = egg.parent.convertToWorldSpaceAR(egg.position).add(cc.v3(0, 100));
            egg.getComponent(cc.Animation).play()
            let count = this.isCountEggke;

            let check = Math.floor(count / 9)
            let checkRow = count % 9
            if (this.isDelaySOund == false) {
                this.isDelaySOund = true
                cc.audioEngine.play(this.soundChatGo, false, 0.5)
                this.scheduleOnce(() => {
                    this.isDelaySOund = false
                }, 0.2)
            }
            this.isCountSub++

            if (this.isCountSub == 4 && this.isCountEggke <= 60) {
                this.isCountSub = 0;
                this.isCountEggke++;
                let wood = cc.instantiate(this.preKhayTrung);
                wood.parent = this.keGo;
                wood.scale = 1;
                let endPos = this.arrPosKe[checkRow].add(cc.v3(0, check * 20));
                wood.position = endPos;
            }
            if (this.isCountSub == 4) {
                this.isCountSub = 0
            }
            let fx = cc.instantiate(this.preText)
            fx.parent = this.node
            fx.position = this.node.convertToNodeSpaceAR(pos)
            this.addEgg(egg.position)
            egg.destroy();
        }
    }

    updateOpen1() {
        cc.audioEngine.play(this.soundUd, false, 1)
        globalThis.update = 2
        this.listCusSub[0].active = true;
        this.listCusSub[1].active = true;
        this.listCusSub[2].active = true;
        this.listCusSub[3].active = true;
        this.listCusSub[4].active = true;
        cc.tween(this.arenaUpgrade).to(0.3, { scale: 0 }).start()
        // this.arenaUpgrade2.active = true
        this.arenaUpgrade = this.arenaUpgrade2
        this.listArrow.children[5].active = true
        this.arrowNode.active=true;
        this.isTargetDraw=this.listArrow.children[5]

    }
    updateOpen2() {
        cc.audioEngine.play(this.soundUd, false, 1)
        this.listCusSub[3].active = true;
        this.listCusSub[4].active = true;
        this.arenaUpgrade2.active = false;

    }
    sellMoney() {
        if (this.countMoneyBag > 0) {
            cc.audioEngine.play(this.soundChatGo, false, 1)
            let money = this.moneyBag.children[this.countMoneyBag - 1];
            this.countMoneyBag--;
            let pos = money.parent.convertToWorldSpaceAR(money.position);
            pos = this.arenaUpgrade.convertToNodeSpaceAR(pos)
            money.parent = this.arenaUpgrade
            money.position = pos;
            let midPos = cc.v2(pos.x / 2, pos.y / 2 + 200)
            cc.tween(money).bezierTo(0.1, cc.v2(pos.x, pos.y), midPos, cc.v2(0, 0)).call(() => {
                money.children[1].active = true;
                money.children[0].active = false;

                this.scheduleOnce(() => {
                    money.destroy()

                }, 0.4)
                this.arenaUpgrade.getComponent("arena").upgrade(10)
                globalThis.countMoney = globalThis.countMoney - 10

            }).start()
        }
    }
    sellMoney3() {
        if (this.countMoneyBag > 0) {
            cc.audioEngine.play(this.soundChatGo, false, 1)

            let money = this.moneyBag.children[this.countMoneyBag - 1];
            this.countMoneyBag--;
            let pos = money.parent.convertToWorldSpaceAR(money.position);
            pos = this.arenaUpgrade3.convertToNodeSpaceAR(pos)
            money.parent = this.arenaUpgrade3
            money.position = pos;
            let midPos = cc.v2(pos.x / 2, pos.y / 2 + 200)
            cc.tween(money).bezierTo(0.1, cc.v2(pos.x, pos.y), midPos, cc.v2(0, 0)).call(() => {
                money.children[1].active = true;
                money.children[0].active = false;
                this.scheduleOnce(() => {
                    money.destroy()

                }, 0.4)
                this.arenaUpgrade3.getComponent("arena").upgrade(10)
                globalThis.countMoney = globalThis.countMoney - 10

            }).start()
        }
    }
    sellMoney4() {
        if (this.countMoneyBag > 0) {
            let money = this.moneyBag.children[this.countMoneyBag - 1];
            this.countMoneyBag--;
            let pos = money.parent.convertToWorldSpaceAR(money.position);
            pos = this.arenaUpgrade4.convertToNodeSpaceAR(pos)
            money.parent = this.arenaUpgrade4
            money.position = pos;
            let midPos = cc.v2(pos.x / 2, pos.y / 2 + 200)
            cc.tween(money).bezierTo(0.1, cc.v2(pos.x, pos.y), midPos, cc.v2(0, 0)).call(() => {
                money.children[1].active = true;
                money.children[0].active = false;
                this.scheduleOnce(() => {
                    money.destroy()

                }, 0.4)
                this.arenaUpgrade4.getComponent("arena").upgrade(10)
                globalThis.countMoney = globalThis.countMoney - 10

            }).start()
        }
    }
    offSellMone() {
        this.unschedule(this.sellMoney)
    }
    offSellMone3(value) {
        if (value == 3) {
            this.unschedule(this.sellMoney3)
        }
        else {
            this.unschedule(this.sellMoney4)

        }
    }
    getSell() {
        cc.audioEngine.play(this.soundNhanGo, false, 1)
        let count = globalThis.countMoney
        let pos = this.arenaUpgrade.position
        if (count > 0) {
            this.arrow3.active = false;
            this.schedule(this.sellMoney, 0.12)
        }
    }
    getSell3(value) {

        cc.audioEngine.play(this.soundNhanGo, false, 1)
        let count = globalThis.countMoney

        let pos = (value == 3) ? this.arenaUpgrade3.position : this.arenaUpgrade4.position
        if (count > 0) {
            this.arrow3.active = false;
            if (value == 3) {
                this.schedule(this.sellMoney3, 0.12)

            }
            else {
                this.schedule(this.sellMoney4, 0.12)

            }
        }
    }
    isUpdate = 1
    sellToCus() {

    }
    isSelling = false
    sellToCus2() {
        if (this.isSelling) return

        if (this.arrow2.active == true) {
            this.arrow2.active = false
            this.scheduleOnce(() => {
                this.arrow3.active = true
            }, 1)
        }
        this.isSelling = true
        this.schedule(this.doSell, 0.12)
    }
    offSell() {
        this.isSelling = false
        this.unschedule(this.doSell)
                        // this.transMoneyToChar()

    }
    //ban do cho khach
    doSell() {
        let pos = this.arrCus[0].position.add(cc.v3(0, 100))
        pos = this.listCus.convertToWorldSpaceAR(pos)
        let bageClone = this.char.getChildByName("bageClone")
        let cus = this.arrCus[0];
        if (cus.getComponent("character").realdySell) {
            if (this.countBage - 1 >= 0) {
                globalThis.countWood--;
                cc.audioEngine.play(this.soundPut, false, 1);
                let child = this.bage.children[this.countBage - 1];
                if (child.name != "") {
                    child.parent = bageClone;
                    let startPos = child.position;
                    let endPos = this.tableSell.parent.convertToWorldSpaceAR(this.tableSell.position);
                    endPos = bageClone.convertToNodeSpaceAR(endPos);
                    let midPos = cc.v2((startPos.x + endPos.y) / 2, (startPos.y + endPos.y) / 2 + 800)
                    cc.tween(child).bezierTo(0.1, cc.v2(startPos.x, startPos.y), midPos, cc.v2(endPos.x, endPos.y)).call(() => {
                        this.creatEggTable()
                        this.checkRemove()
                        child.destroy()
                    }).start()
                }
            }
            else {
                if (this.countBageTabel > 0) {
                    this.checkRemove()
                }
                this.transMoneyToChar()
            }
            // if (this.countBageTabel > 0 &&) {

            // }
        }

    }

    isTranske = false
    creatEggTable() {
        if (this.countBageTabel >= 30) return
        this.countBageTabel++
        let bag = this.tableSell.getChildByName('bag');
        let arrKhayPos = [cc.v3(203, -300), cc.v3(-95, -20)];
        let row = Math.floor(((this.countBageTabel) / 2))
        let col = (this.countBageTabel) % 2
        let khay = cc.instantiate(this.preKhayTrung);
        khay.parent = bag;
        khay.scale = 5
        khay.position = cc.v3(arrKhayPos[col].x, row * 120 + arrKhayPos[col].y)
    }
    addWoodFromKe() {
        if (this.isTranske) return;
        if (this.countBage >= 20) return;

        this.isTranske = true;
        this.schedule(this.addTopToRay, 0.15)
    }
    addTopToRay() {
        if (this.isCountEggke <= 0) return;
        let child = this.keGo.children[this.isCountEggke - 1];
        this.isCountEggke--
        child.parent = this.bage;
        child.stopAllActions();
        child.angle = 360;
        child.scaleX = 1;
        globalThis.countWood++
        // child.position = cc.v3(-291, 289 + (this.isCountEggke - 1) * 15);
        if (this.countBage < 0) {
            this.countBage = 0
        }
        child.position = cc.v3(0, 50).add(cc.v3(0, 40 * this.countBage))
        this.countBage++

    }
    offWoodFromKe() {
        this.isTranske = false
        this.unschedule(this.addTopToRay)
    }
    //kiem tra nguoi dung dang order co hoan thanh khong
    checkRemove() {
        if (this.countBageTabel <= 0) return
        let cus = this.arrCus[0]
        cus.getComponent("character").isFill += 0.35
        this.isPlayerEggs -= 4;
        this.countBage -= 1

        let fillCount = cus.getComponent("character").isFill
        let fill = cus.getChildByName("status").children[0].getComponent(cc.Sprite);
        cc.tween(fill).to(0.1, { fillRange: fillCount }).call(() => {
        }).start()
        if (fillCount >= 1) {
            let bag = this.tableSell.getChildByName('bag');
            this.countBageTabel -= 1;
            if (bag.children[this.countBageTabel] && bag.children[this.countBageTabel].name != "") {
                bag.children[this.countBageTabel].destroy()
            }
            if (cus.getComponent("character").success == false) {
                cus.getComponent("character").success = true
                cus.getComponent("character").isFill = 0;
                fill.fillRange = 0;
                this.removeChild();
            }
        }
    }
    //hoan thanh nguoi choi
    removeChild() {
        // console.log("removechild")
        cc.audioEngine.play(this.soundUd, false, 1)
        let cus = this.arrCus[0]
        cus.getChildByName("status").getComponent(cc.Animation).play();
        this.scheduleOnce(() => {
            let vfxMoney = cc.instantiate(this.vfxMoney)
            vfxMoney.parent = this.node
            vfxMoney.position = cus.position.add(cc.v3(50, 50))
            vfxMoney.scale = 1.2;
            this.createMoney()
            globalThis.countMoney += 10
            cus.parent = this.cusNext;
            cus.getComponent("character").moveToBar()
            this.arrCus.shift()
            this.addCus()
            this.scheduleOnce(() => {
                for (let i = 0; i < this.arrCus.length; i++) {
                    if (this.arrCus[i] != cus) {
                        this.arrCus[i].getComponent("character").moveNext(this.arrPos[i])
                        if (i == 0) {
                            this.arrCus[i].getComponent("character").realdySell = true;
                        }
                    }
                }
            }, 0.2)
        }, 0.2)
    }
    countMoneyTable = 0;
    countMoneyBag = 0;
    istransMoney = false
    createMoney() {
        let arrMoneyPos = [cc.v3(78, 17), cc.v3(18, -25)];
        let check = Math.floor(this.countMoneyTable / 2);
        let endPos1 = arrMoneyPos[this.countMoneyTable % 2];
        let endPos = cc.v2(endPos1.x, endPos1.y + check * 20)
        let startPos = cc.v2(-128.6, -135.876);
        let midPos = cc.v2((startPos.x + endPos.x) / 2, (startPos.y + endPos.y) / 2 + 300);
        let money = cc.instantiate(this.moneyPrefab);
        money.parent = this.moneyTable;
        cc.tween(money).bezierTo(0.3, startPos, midPos, endPos).start()
        this.countMoneyTable++;
    }
    transMoneyToChar() {
        
        if (this.istransMoney) return;
        if (this.countMoneyTable <= 0) return;
        this.istransMoney = true
        let count = this.countMoneyTable - 1
        for (let i = count; i >= 0; i--) {
            cc.audioEngine.play(this.soundChatGo, false, 1)
            let money = this.moneyTable.children[i];
            let pos = money.parent.convertToWorldSpaceAR(money.position);
            pos = this.moneyBag.convertToNodeSpaceAR(pos);
            money.parent = this.moneyBag;
            money.stopAllActions()
            // money.position = pos;
            // money.position = cc.v3(0, this.countMoneyBag * 20)
            money.position = pos
            let posEnd = cc.v2(0, this.countMoneyBag * 20)
            let posStart = cc.v2(pos.x, pos.y);
            let posMid = cc.v2((posEnd.x + pos.x) / 2, (posEnd.y + pos.y) / 2 + 200)
            cc.tween(money).bezierTo(0.1, posStart, posMid, posEnd).start()


            this.countMoneyBag++
            this.countMoneyTable--
            if (i == 0) {
                this.istransMoney = false
            }

        }
    }
    //them khach hang moi
    addCus() {
        let rd = Math.floor(Math.random() * this.listCusPre.length)
        let cus = cc.instantiate(this.listCusPre[rd])
        cus.parent = this.listCus

        cus.position = cc.v3(829, -879)
        cus.scale = 1.2
        this.arrCus.push(cus)
    }
    getUpgrade() {
        this.listArrow.children[1].active = false
        let dem = this.keTien.childrenCount - 1
        let pos = this.arenaUpgrade.parent.convertToWorldSpaceAR(this.arenaUpgrade.position);
        pos = this.keTien.convertToNodeSpaceAR(pos);
        for (let i = dem; i >= 0; i--) {

            let child = this.keTien.children[i];
            let midPos = cc.v2((pos.x + child.x) / 2, pos.y + 200)

            cc.tween(child).delay(0.05 * i).call(() => {
                cc.audioEngine.play(this.soundPut, false, 1)
                globalThis.countMoney--
            }).bezierTo(0.3, cc.v2(child.x, child.y), midPos, cc.v2(pos.x, pos.y))
                .call(() => {
                    child.destroy()
                    this.upgradeEff()
                }).start()
        }
    }
    fillUd = 0
    upgradeEff() {
        let fill = this.arenaUpgrade.getChildByName("fill");
        let fillRange = fill.getComponent(cc.Sprite);
        this.fillUd += 0.05
        cc.tween(fillRange).to(0.1, { fillRange: this.fillUd }).call(() => {
            if (fillRange.fillRange >= 1) {
                fillRange.fillRange = 0;
                this.updateHero()
                this.fillUd = 0
                return;
            }
        }).start()

    }
    isud = 0
    updateHero() {
        cc.audioEngine.play(this.soundUd, false, 1)
        this.char.getChildByName("textUd").getComponent(cc.Animation).play()

        if (this.isud == 0) {
            this.char.getComponent("character").anim.setSkin("Skin_1")
            this.char.getChildByName("vfx_ud").getComponent(cc.Animation).play()
        }
        else if (this.isud == 3) {
            this.char.getComponent("character").anim.setSkin("Skin_2")
            this.char.getChildByName("vfx_ud").getComponent(cc.Animation).play()
        }
        this.isud++

    }
    showEndCard() {
        this.linkToStore.active = true;
        this.endCard.active = true;
        this.Joystick.active = false
        this.Joystick.getComponent("JoyStick").touchEndEvent()
    }
    spawMoney(cus) {
        this.arenaMoney.getComponent(cc.PolygonCollider).enabled = false
        let pos = cus.position.add(cc.v3(0, 100));
        pos = cus.parent.convertToWorldSpaceAR(pos);
        pos = this.keTien.convertToNodeSpaceAR(pos);
        for (let i = 0; i < 12; i++) {
            this.scheduleOnce(() => {
                let money = cc.instantiate(this.moneyPrefab);
                money.parent = this.keTien;
                money.position = pos
                cc.tween(money).to(0.2, { position: this.listMoneyPos[i] }).call(() => {
                    globalThis.countMoney++
                    if (i == 11) {
                        // this.listArrow.children[1].active = true;
                        // this.listArrow.children[1].getComponent(cc.Animation).play()
                        this.arenaMoney.getComponent(cc.PolygonCollider).enabled = true

                    }
                }).start()
            }, i * 0.05)
        }


    }
    isvertical = false


    reponsive(value) {
        this.mainCamera.zoomRatio = (value) ? 1.2 : 2
        this.logo.scale = (value) ? 0.4 : 0.6
        this.logo.getComponent(cc.Widget).top = (value) ? 157 : 180
        this.logo.getComponent(cc.Widget).left = (value) ? 200 : -600
        this.barCurrent.scale = (value) ? 1 : 1.8

        this.barCurrent.getComponent(cc.Widget).top = (value) ? 149 : 250
        this.barCurrent.getComponent(cc.Widget).right = (value) ? 137 : 137 - 650
        this.endCard.scale = (value) ? 1 : 1.5

    }

    update(dt) {
        if (this.isTargetDraw) {
            this.drawnArrow(this.char, this.isTargetDraw);
        }
        if (!this.isFirtTut && globalThis.countWood == 10) {
            this.isFirtTut = true;
            this.arrow2.active = true;

        }
        this.lbMoney.string = globalThis.countMoney.toString();
        this.lbWood.string = globalThis.countWood.toString();
        this.mainCamera.node.setPosition(this.char.position.add(cc.v3(100, 0)));

        let canvas = this.node.getComponent(cc.Canvas);
        let deviceResolution = cc.view.getFrameSize();

        // console.log(deviceResolution.width/deviceResolution.height)
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true)

            if (!this.isvertical) {
                this.isvertical = true;
            }
        }
        else {
            this.reponsive(false)
            let checkIpad = deviceResolution.width / deviceResolution.height

            if (checkIpad < 1.35 && checkIpad > 1.3) {
                this.logo.getComponent(cc.Widget).left = -400
            }
        }
    }
    drawnArrow(source, target) {
        if (!source || !target || !this.arrowPrefab || this.countOpen == 4 || target.name == "") return;
        // Tọa độ toàn cục
        const startWorld = source.convertToWorldSpaceAR(cc.v2(0, 0));
        const endWorld = target.convertToWorldSpaceAR(cc.v2(0, 0));

        // Đổi về tọa độ local của cha (nên đặt script trên node chung của source và target)
        const parent = this.arrowNode;
        const startLocal = parent.convertToNodeSpaceAR(startWorld);
        const endLocal = parent.convertToNodeSpaceAR(endWorld);

        const dir = endLocal.sub(startLocal);
        const distance = dir.mag();
        const angle = cc.v2(1, 0).signAngle(dir) * 180 / Math.PI;
        const count = Math.floor(distance / this.arrowSpacing);
        // const count = 1
        // Điều chỉnh số lượng mũi tên
        while (this.arrows.length < count) {
            const arrow = cc.instantiate(this.arrowPrefab);
            arrow.zIndex = 0;
            parent.addChild(arrow);
            this.arrows.push(arrow);
        }

        while (this.arrows.length > count) {
            const extra = this.arrows.pop();
            extra.destroy();
        }

        // Đặt vị trí từng mũi tên
        for (let i = 0; i < count; i++) {
            const ratio = (i + 1) * this.arrowSpacing / distance;
            const pos = endLocal.lerp(startLocal, ratio);
            const arrow = this.arrows[i];
            arrow.setPosition(pos.add(cc.v3(0, 0)));
            arrow.scale = -1.5
            arrow.angle = angle;
        }

    }
    isTargetDraw = null;
}
