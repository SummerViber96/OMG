
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    preChicken: cc.Prefab = null
    @property(cc.Prefab)
    preCoca: cc.Prefab = null;
    @property(cc.Prefab)
    preCake: cc.Prefab = null;
    @property(cc.Prefab)
    preTomato: cc.Prefab = null;
    @property(cc.Node)
    khay: cc.Node = null
    @property(cc.Node)
    khay2: cc.Node = null
    @property(sp.Skeleton)
    anim: sp.Skeleton = null;
    @property(cc.Node)
    table: cc.Node = null;

    // arrPos = [cc.v3(-190, -39), cc.v3(-207, -323), cc.v3(-207, -468), cc.v3(11, -45),cc.v3(237,-122)]
    posStart = cc.v3(207, -58)
    // arrPos[0]=vị trí 1 máy chiên | [1]=2 sốt | [2]=3 khay | [3]=4 quầy bán | [4]=thớt gà
    arrPos = [
        cc.v3(-190, -30),  // 1 - máy chiên
        cc.v3(-207, -323),  // 2 - sốt
        cc.v3(-207, -468),   // 3 - khay
        cc.v3(11, -45),     // 4 - quầy bán
        cc.v3(237, -122),   // thớt gà
        cc.v3(237, -468),     // 5 - khoaitay, cake
    ]
    POS_MACHINE = 1
    POS_SAUCE = 2
    POS_COCA = 4
    POS_SELL = 3
    POS_CHICKEN = 0
    POS_CAKE = 5
    localId = 0
    gamePlay = null
    targetChicken = null
    chicken = false
    trayItem = null
    trayItemType = null

    start() {
        this.node.position = this.posStart.clone();
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        if (this.khay2) this.khay2.active = false
    }

    getPos(index: number) {
        return this.arrPos[index]
    }

    // --- Khay (1 tray) ---

    getTrayItem() {
        return this.trayItem
    }

    getChickenComp(item: cc.Node) {
        return item ? item.getComponent("chicken") : null
    }

    getItemType() {
        if (this.trayItemType) return this.trayItemType
        if (!this.trayItem) return null
        if (this.getChickenComp(this.trayItem)) return "chicken"
        return null
    }

    isCocaItem(item: cc.Node) {
        return item != null && item === this.trayItem && this.getItemType() === "coca"
    }

    canSellToCustomer(cusComp) {
        let type = this.getItemType()
        if (!type) return false
        if (cusComp.chicken && cusComp.count[0] > 0 && type === "chicken") {
            let comp = this.getChickenComp(this.trayItem)
            return comp && comp.isChin && cusComp.sauce == comp.isSauce
        }
        if (cusComp.coca && cusComp.count[1] > 0 && type === "coca") return true
        if (cusComp.cake && cusComp.count[2] > 0 && type === "cake") return true
        if (cusComp.potato && cusComp.count[3] > 0 && type === "tomato") return true
        return false
    }

    findTrayForCustomer(cusComp) {
        return this.canSellToCustomer(cusComp) ? 0 : -1
    }

    hasAnyItem() {
        return this.trayItem != null
    }

    isTrayEmpty() {
        return this.trayItem == null
    }

    getRawTraySlot() {
        let comp = this.getChickenComp(this.trayItem)
        if (comp && !comp.isChin) return 0
        return -1
    }

    findCookedTraySlot() {
        let comp = this.getChickenComp(this.trayItem)
        if (comp && comp.isChin && !comp.isSauce) return 0
        return -1
    }

    putTrayItem(item: cc.Node, type?: string) {
        if (!this.khay || this.trayItem) return
        item.parent = this.khay
        let anim = item.getComponent(cc.Animation)
        if (anim) anim.play()
        this.trayItem = item
        this.trayItemType = type || (this.getChickenComp(item) ? "chicken" : null)
        this.khay.active = true
        this.targetChicken = item
        this.chicken = true
        this.updateArms()
    }

    consumeTrayItem() {
        if (this.trayItem) {
            this.trayItem.destroy()
            this.trayItem = null
        }
        this.trayItemType = null
        this.chicken = false
        this.targetChicken = null
        this.hideTrays()
    }

    discardTrayIfDifferentType(targetType: string) {
        let current = this.getItemType()
        if (!current || current === targetType) return
        this.consumeTrayItem()
        this.normalizeLocalIdAfterSwitch(targetType)
        this.updateArms()
    }

    normalizeLocalIdAfterSwitch(targetType: string) {
        if (targetType === "chicken") {
            if (this.localId === 4 || this.localId === 5) this.localId = 3
            return
        }
        if (this.localId === 1 || this.localId === 2 || this.localId === 4 || this.localId === 5) {
            this.localId = 3
        }
    }

    hideTrays() {
        if (this.khay) this.khay.active = false
        if (this.khay2) this.khay2.active = false
        this.anim.setAnimation(1, "Idle", false)
        this.anim.setAnimation(2, "Idle", false)
    }

    deliverItem() {
        this.consumeTrayItem()
    }

    afterDeliver() {
        this.anim.setAnimation(0, "Idle", true)
        this.hideTrays()
        this.gamePlay.isMoving = false
    }

    updateArms() {
        if (this.trayItem) {
            this.khay.active = true
            this.anim.setAnimation(1, "L-arm", true)
        } else {
            this.khay.active = false
            this.anim.setAnimation(1, "Idle", false)
        }
        if (this.khay2) this.khay2.active = false
        this.anim.setAnimation(2, "Idle", false)
    }

    afterCustomerLeft() {
        // this.localId = this.hasAnyItem() ? 2 : 0
        this.updateArms()
    }

    canPickMoreChicken() {
        if (!this.isTrayEmpty()) return false
        return this.localId == 0 || this.localId == 1 || this.localId == 2 || this.localId == 3
    }

    // --- Di chuyển ---

    moveToChicken() {
        this.discardTrayIfDifferentType("chicken")
        console.log(this.localId)
        if (!this.canPickMoreChicken()) {
            this.gamePlay.isMoving = false
            return
        }

        if (this.localId == 0) {

            this.node.scaleX = 1
            this.anim.setAnimation(0, "Walk", true)
            this.updateArms()
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => this.spawChicken())
                .start()
        }
        else if (this.localId == 3) {
            this.node.scaleX = 1
            this.anim.setAnimation(0, "Walk", true)
            this.updateArms()
            cc.tween(this.node)
                .to(0.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => this.spawChicken())
                .start()
        }
        if (this.localId == 4) {
            this.node.scaleX = 1
            this.node.zIndex = 1;
            this.table.zIndex = 2
            this.anim.setAnimation(0, "Walk", true)
            this.updateArms()
            cc.tween(this.node)
                .to(1.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => this.spawChicken())
                .start()
        }
        // if(this.localId==)


    }

    spawChicken() {
        if (!this.isTrayEmpty()) {
            this.gamePlay.isMoving = false
            return
        }
        this.gamePlay.btnChicken.children[0].getComponent(sp.Skeleton).setAnimation(0, "lv1-tap", false)
        let chicken = cc.instantiate(this.preChicken)
        this.putTrayItem(chicken)
        if (this.localId == 0) this.localId = 1
        else if (this.localId == 3) this.localId = 1
        this.anim.setAnimation(0, "Idle", true)
        this.gamePlay.isMoving = false
    }

    idle() {
        this.anim.setAnimation(0, "Idle", true)
        this.updateArms()
        this.gamePlay.isMoving = false
    }

    moveToMachine() {
        this.discardTrayIfDifferentType("chicken")
        this.node.zIndex = 2
        let machine = this.gamePlay.btnMachine.getComponent("machine")
        let rawSlot = this.getRawTraySlot()
        if ((this.localId == 1 || this.localId == 2) && rawSlot >= 0 && machine.chicken == null) {
            this.anim.setAnimation(0, "Walk", true)
            this.updateArms()
            cc.tween(this.node)
                .call(() => {
                    this.node.zIndex = 2
                    this.table.zIndex = 1
                })
                .to(1, { position: this.getPos(this.POS_MACHINE) })
                .call(() => {
                    let chicken = this.trayItem
                    this.trayItem = null
                    this.trayItemType = null
                    this.updateArms()
                    machine.cooking(chicken)
                    this.chicken = false
                    this.idle()
                    this.localId = 2
                    this.gamePlay.isMoving = false
                })
                .start()
            return
        }

        if (this.localId == 2 && machine.chicken != null) {
            if (!this.isTrayEmpty()) {
                this.gamePlay.isMoving = false
                return
            }
            this.anim.setAnimation(0, "Walk", true)
            this.updateArms()
            let chicken = machine.getChicken()
            chicken.getComponent("chicken").chin2()
            this.putTrayItem(chicken)
            this.localId = 2
            this.anim.setAnimation(0, "Idle", true)
            this.gamePlay.isMoving = false
            return
        }
        if (this.localId == 3 && machine.chicken != null) {
            this.anim.setAnimation(0, "Walk", true)

            cc.tween(this.node)
                .to(0.4, { position: this.getPos(this.POS_MACHINE) })
                .to(1, { position: this.getPos(this.POS_MACHINE) })
                .call(() => {
                    this.updateArms()
                    let chicken = machine.getChicken()
                    chicken.getComponent("chicken").chin2()
                    this.putTrayItem(chicken)
                    this.localId = 2
                    this.anim.setAnimation(0, "Idle", true)
                    this.gamePlay.isMoving = false
                })
                .start()
        }
        if (this.localId == 4) {
            this.anim.setAnimation(0, "Walk", true)
            this.node.scaleX = 1
            cc.tween(this.node)
                .to(0.6, { position: this.getPos(this.POS_SELL) })

                .to(0.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => {
                    this.node.zIndex = 2;
                    this.table.zIndex = 1
                })
                .to(1, { position: this.getPos(this.POS_MACHINE) })
                .call(() => {
                    this.anim.setAnimation(0, "Idle", true)
                    this.updateArms()
                    this.localId = 2
                    this.gamePlay.isMoving = false

                })
                .start()
        }
        if (this.localId == 3) {
            this.anim.setAnimation(0, "Walk", true)
            this.node.scaleX = 1
            cc.tween(this.node)

                .to(0.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => {
                    this.node.zIndex = 2;
                    this.table.zIndex = 1
                })
                .to(1, { position: this.getPos(this.POS_MACHINE) })
                .call(() => {
                    this.anim.setAnimation(0, "Idle", true)
                    this.updateArms()
                    this.localId = 2
                    this.gamePlay.isMoving = false

                })
                .start()
        }

    }

    moveToSauce() {
        if (this.localId != 2 || !this.hasAnyItem()) {
            this.gamePlay.isMoving = false
            return
        }
        let slot = this.findCookedTraySlot()
        if (slot < 0) {
            this.gamePlay.isMoving = false
            return
        }
        this.node.zIndex = 2
        this.anim.setAnimation(0, "Walk", true)
        this.updateArms()
        this.node.scaleX = -1
        cc.tween(this.node)
            .to(0.5, { position: this.getPos(this.POS_SAUCE) })
            .call(() => {
                this.getChickenComp(this.trayItem).addSauce()
                this.node.scaleX = 1
                this.idle()
                this.gamePlay.isMoving = false
            })
            .start()
    }

    moveToBuy() {
        if (!this.hasAnyItem()) {
            this.gamePlay.isMoving = false
            return
        }
        cc.Tween.stopAllByTarget(this.node)
        this.gamePlay.isMoving = true
        this.node.scaleX = -1
        this.anim.setAnimation(0, "Walk", true)
        this.updateArms()
        this.table.zIndex = 2
        this.node.zIndex = 1
        if (this.localId == 2 || this.localId == 3) {
            let duration = this.localId == 3 ? 0.4 : 1.4
            let tween = this.localId == 3
                ? cc.tween(this.node).to(0.4, { position: this.getPos(this.POS_SELL) })
                : cc.tween(this.node)
                    .to(1, { position: this.getPos(this.POS_CHICKEN) })
                    .to(0.4, { position: this.getPos(this.POS_SELL) })
            tween
                .call(() => {
                    this.anim.setAnimation(0, "Idle", true)
                    this.updateArms()
                })
                .start()
            this.scheduleOnce(() => {
                this.gamePlay.validateSellAtCounter()
            }, 1)
            this.localId = 3

        }
        else if (this.localId == 4) {
            // console.log("moveToCocaBuy")
            this.node.scaleX = 1
            cc.tween(this.node)
                .to(0.6, { position: this.getPos(this.POS_SELL) })
                .call(() => {
                    this.anim.setAnimation(0, "Idle", true)
                    this.updateArms()
                })
                .start()
            this.scheduleOnce(() => {
                this.gamePlay.validateSellAtCounter()

            }, 0.3)
            this.localId = 3

        }
        else if (this.localId == 5) {
            this.node.scaleX = 1
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_COCA) })

                .to(0.6, { position: this.getPos(this.POS_SELL) })
                .call(() => {
                    this.anim.setAnimation(0, "Idle", true)
                    this.updateArms()
                })
                .start()
            this.scheduleOnce(() => {
                this.gamePlay.validateSellAtCounter()
            }, 1)
            this.localId = 3
        }
        else {
            this.gamePlay.isMoving = false
        }


    }
    moveToCoca() {
        this.discardTrayIfDifferentType("coca")
        this.node.scaleX = -1
        if (this.localId == 1 || this.localId == 3 || this.localId == 5) {
            this.gamePlay.isMoving = true
            this.scheduleOnce(() => {
                this.node.zIndex = 2
            }, 0.4)
            this.anim.setAnimation(0, "Walk", true)
            this.updateArms()
            cc.tween(this.node)
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .call(() => {
                    this.idle()
                    let coca = this.gamePlay.btnCoca.getComponent("coca")
                    if (coca) coca.cooking()
                    this.localId = 4
                })
                .start()
        }
        else if (this.localId == 4 && this.gamePlay.btnCoca.getComponent("coca").isCoca) {
            this.gamePlay.btnCoca.getComponent("coca").getCoca()
            if (!this.isTrayEmpty()) {
                this.gamePlay.isMoving = false
                return
            }
            let coca = cc.instantiate(this.preCoca)
            this.putTrayItem(coca, "coca")
            this.localId = 4
            this.gamePlay.isMoving = false
        }
        else if (this.localId == 2) {
            this.gamePlay.isMoving = true
            this.anim.setAnimation(0, "Walk", true)
            this.node.scaleX = -1
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => {
                    this.node.zIndex = 1
                    this.table.zIndex = 2
                })
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .call(() => {
                    this.idle()
                    let coca = this.gamePlay.btnCoca.getComponent("coca")
                    if (coca) coca.cooking()
                    this.localId = 4
                })
                .start()

        }
        else {
            this.gamePlay.isMoving = false
        }
    }
    moveToCake() {
        this.discardTrayIfDifferentType("cake")

        if (this.localId == 0 || this.localId == 1 || this.localId == 2) {
            this.gamePlay.isMoving = true
            this.anim.setAnimation(0, "Walk", true)
            this.node.scaleX = -1
            this.node.zIndex = 2;
            this.table.zIndex = 1
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => {
                    this.node.zIndex = 1;
                    this.table.zIndex = 2
                })
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .call(() => {
                    this.node.zIndex = 2;
                    this.table.zIndex = 1
                })
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(() => this.getCake())
                .start()
            return
        }
        if (this.localId == 3 || this.localId == 5) {
            this.gamePlay.isMoving = true
            this.anim.setAnimation(0, "Walk", true)
            this.node.scaleX = -1
            cc.tween(this.node)
                .to(0.4, { position: this.getPos(this.POS_COCA) })
                .call(() => {
                    this.node.zIndex = 2
                    this.table.zIndex = 1
                })
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(() => this.getCake())
                .start()
            return
        }
        if (this.localId == 4) {
            this.gamePlay.isMoving = true
            this.anim.setAnimation(0, "Walk", true)
            this.node.scaleX = -1
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(() => this.getCake())
                .start()
            return
        }
        this.gamePlay.isMoving = false
    }
    getCake() {
        if (!this.isTrayEmpty()) {
            this.gamePlay.isMoving = false
            return
        }
        let cake = cc.instantiate(this.preCake)
        this.putTrayItem(cake, "cake")
        this.localId = 5
        this.idle()
    }
    getTomato() {
        if (!this.isTrayEmpty()) {
            this.gamePlay.isMoving = false
            return
        }
        let tomato = cc.instantiate(this.preTomato)
        this.putTrayItem(tomato, "tomato")
        this.localId = 5
        this.idle()
    }
    moveToTomato() {
        this.discardTrayIfDifferentType("tomato")
        if (this.localId == 0 || this.localId == 1 || this.localId == 2) {
            this.gamePlay.isMoving = true
            this.anim.setAnimation(0, "Walk", true)
            this.node.scaleX = -1
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(() => this.getTomato())
                .start()
            return
        }
        if (this.localId == 3 || this.localId == 5) {
            this.gamePlay.isMoving = true
            this.anim.setAnimation(0, "Walk", true)
            this.node.scaleX = -1
            cc.tween(this.node)
                .to(0.4, { position: this.getPos(this.POS_COCA) })
                .call(() => {
                    this.node.zIndex = 2
                    this.table.zIndex = 1
                })
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(() => this.getTomato())
                .start()
            return
        }
        if (this.localId == 4) {
            this.gamePlay.isMoving = true
            this.anim.setAnimation(0, "Walk", true)
            this.node.scaleX = -1
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(() => this.getTomato())
                .start()
            return
        }
        this.gamePlay.isMoving = false
    }
    // --- Reset ---

    clearTray() {
        this.consumeTrayItem()
    }

    resetToStart() {
        cc.Tween.stopAllByTarget(this.node)
        this.clearTray()
        // this.localId = 0
        this.node.scaleX = 1
        this.node.zIndex = 0
        this.table.zIndex = 0
        this.anim.setAnimation(0, "Idle", true)
        this.anim.setAnimation(1, "Idle", false)
        this.anim.setAnimation(2, "Idle", false)
    }
}
