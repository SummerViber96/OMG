
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
    @property(cc.Node)
    machine2:cc.Node=null;

    // arrPos = [cc.v3(-190, -39), cc.v3(-207, -323), cc.v3(-207, -468), cc.v3(11, -45),cc.v3(237,-122)]
    posStart = cc.v3(207, -122)
    // arrPos[0]=vị trí 1 máy chiên | [1]=2 sốt | [2]=3 khay | [3]=4 quầy bán | [4]=thớt gà
    arrPos = [
        cc.v3(-190, -122),  // 1 - máy chiên
        cc.v3(-50, -122),  // 2 - sốt
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
    trayItems: cc.Node[] = [null, null]
    trayItemTypes: string[] = [null, null]

    start() {
        this.node.position = this.posStart.clone();
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        if (this.khay2) this.khay2.active = false
    }

    getPos(index: number) {
        return this.arrPos[index]
    }

    isAtPos(posIndex: number, threshold = 12) {
        let target = this.getPos(posIndex)
        let pos = this.node.position
        return Math.abs(pos.x - target.x) <= threshold && Math.abs(pos.y - target.y) <= threshold
    }

    pickAtCakeCounterOrAct(onPick: () => void) {
        this.setInFrontOfTable()
        onPick()
    }

    walkToMachineOrAct(moveId: number, onArrive: () => void) {
        if (this.isAtPos(this.POS_MACHINE)) {
            this.setBehindTable()
            onArrive()
            return
        }
        this.startWalk(moveId, () => { }, t => t
            .call(() => this.setBehindTable())
            .to(0.6, { position: this.getPos(this.POS_MACHINE) }),
            onArrive)
    }

    walkFromCakeToMachine(moveId: number, onArrive: () => void) {
        if (this.isAtPos(this.POS_MACHINE)) {
            this.setInFrontOfTable()
            onArrive()
            return
        }
        this.startWalk(moveId, () => {
            this.node.scaleX = 1
        }, t => {
            let tween = t
            if (this.isAtPos(this.POS_CAKE)) {
                tween = tween.to(0.8, { position: this.getPos(this.POS_COCA) }).call(() => this.setBehindTable());
            }
            return tween
                .call(() => this.setBehindTable())
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => this.setInFrontOfTable())
                .to(1, { position: this.getPos(this.POS_MACHINE) })
        }, onArrive)
    }

    handleMachineAction(moveId: number, machine, walkFn: (moveId: number, onArrive: () => void) => void) {
        if (machine.chicken != null && machine.isChin && this.canPickItemType("chicken")) {
            walkFn(moveId, () => this.pickupMachineChicken(machine))
            return true
        }
        if (this.getRawTraySlot() >= 0 && machine.chicken == null) {
            walkFn(moveId, () => this.fryTrayChicken(machine))
            return true
        }
        return false
    }

    // --- Khay (2 tray) ---

    getTrayNode(slot: number) {
        return slot === 0 ? this.khay : this.khay2
    }

    resolveTraySlot(slot?: number) {
        if (slot != null && slot >= 0) return slot
        let sellSlot = this.gamePlay ? this.gamePlay.sellTraySlot : -1
        if (sellSlot >= 0) return sellSlot
        if (this.trayItems[0]) return 0
        if (this.trayItems[1]) return 1
        return 0
    }

    getFirstEmptyTraySlot() {
        if (!this.trayItems[0]) return 0
        if (!this.trayItems[1]) return 1
        return -1
    }

    getTrayItem(slot?: number) {
        return this.trayItems[this.resolveTraySlot(slot)]
    }

    getChickenComp(item: cc.Node) {
        return item ? item.getComponent("chicken") : null
    }

    getItemType(slot?: number) {
        let idx = this.resolveTraySlot(slot)
        if (this.trayItemTypes[idx]) return this.trayItemTypes[idx]
        let item = this.trayItems[idx]
        if (!item) return null
        if (this.getChickenComp(item)) return "chicken"
        return null
    }

    isCocaItem(item: cc.Node) {
        if (!item) return false
        for (let i = 0; i < 2; i++) {
            if (item === this.trayItems[i] && this.getItemType(i) === "coca") return true
        }
        return false
    }

    canSellTrayToCustomer(cusComp, slot: number) {
        let type = this.getItemType(slot)
        if (!type) return false
        let item = this.trayItems[slot]
        if (cusComp.chicken && cusComp.count[0] > 0 && type === "chicken") {
            let comp = this.getChickenComp(item)
            return comp && comp.isChin && cusComp.sauce == comp.isSauce
        }
        if (cusComp.coca && cusComp.count[1] > 0 && type === "coca") return true
        if (cusComp.cake && cusComp.count[2] > 0 && type === "cake") return true
        if (cusComp.potato && cusComp.count[3] > 0 && type === "tomato") return true
        return false
    }

    canSellToCustomer(cusComp) {
        return this.findTrayForCustomer(cusComp) >= 0
    }

    findTrayForCustomer(cusComp) {
        let trays = this.findAllTraysForCustomer(cusComp)
        return trays.length > 0 ? trays[0] : -1
    }

    getMissionTypeForSlot(slot: number) {
        let type = this.getItemType(slot)
        if (type === "chicken") return 0
        if (type === "coca") return 1
        if (type === "cake") return 2
        if (type === "tomato") return 3
        return -1
    }

    canSellTrayToCustomerWithRemaining(cusComp, slot: number, remaining: number[]) {
        let type = this.getItemType(slot)
        if (!type) return false
        let item = this.trayItems[slot]
        if (cusComp.chicken && remaining[0] > 0 && type === "chicken") {
            let comp = this.getChickenComp(item)
            return comp && comp.isChin && cusComp.sauce == comp.isSauce
        }
        if (cusComp.coca && remaining[1] > 0 && type === "coca") return true
        if (cusComp.cake && remaining[2] > 0 && type === "cake") return true
        if (cusComp.potato && remaining[3] > 0 && type === "tomato") return true
        return false
    }

    findAllTraysForCustomer(cusComp) {
        let slots = []
        let remaining = cusComp.count ? cusComp.count.slice() : [0, 0, 0, 0]
        for (let i = 0; i < 2; i++) {
            if (!this.canSellTrayToCustomerWithRemaining(cusComp, i, remaining)) continue
            slots.push(i)
            let missionType = this.getMissionTypeForSlot(i)
            if (missionType >= 0 && remaining[missionType] > 0) {
                remaining[missionType]--
            }
        }
        return slots
    }

    hasAnyItem() {
        return this.trayItems[0] != null || this.trayItems[1] != null
    }

    isTrayEmpty() {
        return this.trayItems[0] == null && this.trayItems[1] == null
    }

    isTrayFull() {
        return this.trayItems[0] != null && this.trayItems[1] != null
    }

    getRawTraySlot() {
        for (let i = 0; i < 2; i++) {
            let comp = this.getChickenComp(this.trayItems[i])
            if (comp && !comp.isChin) return i
        }
        return -1
    }

    findCookedTraySlot() {
        for (let i = 0; i < 2; i++) {
            let comp = this.getChickenComp(this.trayItems[i])
            if (comp && comp.isChin && !comp.isSauce) return i
        }
        return -1
    }

    putTrayItem(item: cc.Node, type?: string, slot?: number) {
        let targetSlot = slot != null ? slot : this.getFirstEmptyTraySlot()
        if (targetSlot < 0) return
        let khayNode = this.getTrayNode(targetSlot)
        if (!khayNode) return
        item.parent = khayNode
        let anim = item.getComponent(cc.Animation)
        if (anim) anim.play()
        this.trayItems[targetSlot] = item
        this.trayItemTypes[targetSlot] = type || (this.getChickenComp(item) ? "chicken" : null)
        khayNode.active = true
        this.targetChicken = item
        this.chicken = true
        this.updateArms()
    }

    consumeTrayItem(slot?: number) {
        let targetSlot = slot != null && slot >= 0 ? slot : this.resolveTraySlot()
        if (targetSlot < 0) return
        if (this.trayItems[targetSlot]) {
            this.trayItems[targetSlot].destroy()
            this.trayItems[targetSlot] = null
            this.trayItemTypes[targetSlot] = null
        }
        if (this.isTrayEmpty()) {
            this.chicken = false
            this.targetChicken = null
            this.hideTrays()
        } else {
            this.updateArms()
        }
    }

    // Có khay trống thì dùng khay trống; cả 2 khay đầy thì bỏ 1 món rồi thêm đồ mới
    canPickItemType(targetType: string) {
        return true
    }

    findReplaceTraySlot(targetType: string) {
        for (let i = 0; i < 2; i++) {
            if (this.getItemType(i) !== targetType) return i
        }
        return 1
    }

    preparePickupSlot(targetType: string) {
        let empty = this.getFirstEmptyTraySlot()
        if (empty >= 0) return empty
        let slot = this.findReplaceTraySlot(targetType)
        this.consumeTrayItem(slot)
        return slot
    }

    hideTrays() {
        if (this.khay) this.khay.active = false
        if (this.khay2) this.khay2.active = false
        this.anim.setAnimation(1, "Idle", false)
        this.anim.setAnimation(2, "Idle", false)
    }

    deliverItem(slot?: number) {
        let targetSlot = slot != null && slot >= 0 ? slot : (this.gamePlay ? this.gamePlay.sellTraySlot : -1)
        if (targetSlot < 0) return
        this.consumeTrayItem(targetSlot)
    }

    afterDeliver() {
        if (this.hasAnyItem()) {
            this.updateArms()
        } else {
            this.hideTrays()
        }
        this.finishMove()
    }

    updateArms() {
        if (this.trayItems[0]) {
            this.khay.active = true
            this.anim.setAnimation(1, "L-arm", true)
        } else {
            this.khay.active = false
            this.anim.setAnimation(1, "Idle", false)
        }
        if (this.trayItems[1]) {
            if (this.khay2) this.khay2.active = true
            this.anim.setAnimation(2, "R-arm", true)
        } else {
            if (this.khay2) this.khay2.active = false
            this.anim.setAnimation(2, "Idle", false)
        }
    }

    afterCustomerLeft() {
        // this.localId = this.hasAnyItem() ? 2 : 0
        this.updateArms()
    }

    canPickMoreChicken() {
        if (!this.canPickItemType("chicken")) return false
        return this.localId >= 0 && this.localId <= 5
    }

    // --- Di chuyển (chống tween/schedule chồng nhau) ---

    private _moveId = 0
    private _isWalking = false

    isWalking() {
        return this._isWalking
    }

    cancelMove() {
        this._moveId++
        this._isWalking = false
        cc.Tween.stopAllByTarget(this.node)
    }

    beginMove(): number {
        this.cancelMove()
        this._isWalking = true
        return this._moveId
    }

    isMoveActive(moveId: number) {
        return moveId === this._moveId
    }

    finishMove() {
        this._isWalking = false
        this.anim.setAnimation(0, "Idle", true)
        this.updateArms()
        if (this.gamePlay) this.gamePlay.isMoving = false
    }

    arriveIdle() {
        this.anim.setAnimation(0, "Idle", true)
        this.updateArms()
    }

    scheduleOnMove(delay: number, moveId: number, fn: () => void) {
        this.scheduleOnce(() => {
            if (this.isMoveActive(moveId)) fn()
        }, delay)
    }

    setInFrontOfTable() {
        this.node.zIndex = 2
        this.table.zIndex = 1
    }

    setBehindTable() {
        this.node.zIndex = 1
        this.table.zIndex = 2
    }

    startWalk(moveId: number, setup: () => void, build: (t: cc.Tween) => cc.Tween, onComplete?: () => void) {
        if (!this.isMoveActive(moveId)) return
        setup()
        this.anim.setAnimation(0, "Walk", true)
        this.updateArms()
        build(cc.tween(this.node))
            .call(() => {
                if (!this.isMoveActive(moveId)) return
                this._isWalking = false
                if (onComplete) onComplete()
            })
            .start()
    }

    getChickenWalkDuration() {
        if (this.localId == 0) return 1
        if (this.localId == 1 || this.localId == 2) return 0.8
        if (this.localId == 3) return 0.6
        if (this.localId == 4) return 1.6
        return 0.8
    }

    moveToChicken() {
        if (!this.canPickMoreChicken()) {
            this.finishMove()
            return
        }
        let moveId = this.beginMove()
        if (this.isAtPos(this.POS_CHICKEN)) {
            this.node.scaleX = 1
            this.setInFrontOfTable()
            this.spawChicken()
            return
        }
        if (this.localId == 5) {
            this.startWalk(moveId, () => {
                this.node.scaleX = 1
                this.setInFrontOfTable()
            }, t => t
                .to(1, { position: this.getPos(this.POS_COCA) })
                .call(() => this.setBehindTable())

                .to(1.6, { position: this.getPos(this.POS_CHICKEN) }),
                () => this.spawChicken())
            return
        }
        if (this.localId >= 0 && this.localId <= 4) {
            this.startWalk(moveId, () => {
                this.node.scaleX = 1
                if (this.localId == 4) this.setBehindTable()
            }, t => t.to(this.getChickenWalkDuration(), { position: this.getPos(this.POS_CHICKEN) }),
                () => this.spawChicken())
            return
        }
        this.finishMove()
    }

    spawChicken() {
        let slot = this.preparePickupSlot("chicken")
        if (slot < 0) {
            this.finishMove()
            return
        }
        this.gamePlay.btnChicken.children[0].getComponent(sp.Skeleton).setAnimation(0, "lv1-tap", false)
        let chicken = cc.instantiate(this.preChicken)
        this.putTrayItem(chicken, "chicken", slot)
        // if (this.localId == 0 || this.localId == 3 || this.localId == 4 || this.localId == 5) {
        this.localId = 1
        // }
        this.finishMove()
    }

    idle() {
        this.finishMove()
    }

    pickupMachineChicken(machine) {
        let chicken = machine.getChicken()
        chicken.getComponent("chicken").chin2()
        let slot = this.preparePickupSlot("chicken")
        if (slot < 0) {
            this.finishMove()
            return false
        }
        this.putTrayItem(chicken, "chicken", slot)
        this.localId = 2
        this.finishMove()
        return true
    }

    pickupCoca(coca) {
        if (!coca || !coca.isCoca) return false
        coca.getCoca()
        if (!this.canPickItemType("coca")) return false
        let slot = this.preparePickupSlot("coca")
        if (slot < 0) return false
        let cocaItem = cc.instantiate(this.preCoca)
        this.putTrayItem(cocaItem, "coca", slot)
        this.localId = 4
        return true
    }

    fryTrayChicken(machine) {
        let slot = this.getRawTraySlot()
        if (slot < 0) {
            this.finishMove()
            return
        }
        let chicken = this.trayItems[slot]
        this.trayItems[slot] = null
        this.trayItemTypes[slot] = null
        if (this.isTrayEmpty()) {
            this.chicken = false
            this.targetChicken = null
        }
        this.updateArms()
        machine.cooking(chicken)
        this.localId = 2
        this.finishMove()
    }

    moveToMachine() {
        let machine = this.gamePlay.btnMachine.getComponent("machine")
        let moveId = this.beginMove()
        this.setBehindTable()
        this.node.scaleX = -1
        if (this.localId == 1 || this.localId == 2) {
            if (!this.handleMachineAction(moveId, machine, (id, cb) => this.walkToMachineOrAct(id, cb))) {
                this.finishMove()
            }
            return
        }

        if (this.localId == 3) {
            if (machine.chicken != null && machine.isChin && this.canPickItemType("chicken")) {
                if (this.isAtPos(this.POS_MACHINE)) {
                    this.pickupMachineChicken(machine)
                    return
                }
                this.startWalk(moveId, () => { }, t => t
                    .call(() => this.setBehindTable())
                    .to(0.4, { position: this.getPos(this.POS_CHICKEN) })
                    .call(() => this.setInFrontOfTable())

                    .to(1, { position: this.getPos(this.POS_MACHINE) }),
                    () => this.pickupMachineChicken(machine))
                return
            }
            this.startWalk(moveId, () => {
                this.setBehindTable()
                this.node.scaleX = 1
            }, t => t
                .to(0.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => this.setInFrontOfTable())
                .to(1, { position: this.getPos(this.POS_MACHINE) }),
                () => {
                    this.localId = 2
                    this.finishMove()
                })
            return
        }

        if (this.localId == 4) {
            this.startWalk(moveId, () => {
                this.setBehindTable()
                this.node.scaleX = 1
            }, t => t
                .to(0.6, { position: this.getPos(this.POS_SELL) })
                .to(0.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => this.setInFrontOfTable())
                .to(1, { position: this.getPos(this.POS_MACHINE) }),
                () => {
                    this.localId = 2
                    this.finishMove()
                })
            return
        }

        if (this.localId == 5) {
            if (!this.handleMachineAction(moveId, machine, (id, cb) => this.walkFromCakeToMachine(id, cb))) {
                this.finishMove()
            }
            return
        }

        this.finishMove()
    }

    moveToSauce() {
        if (this.localId != 2 || !this.hasAnyItem()) {
            this.finishMove()
            return
        }
        let slot = this.findCookedTraySlot()
        if (slot < 0) {
            this.finishMove()
            return
        }
        let cookedItem = this.trayItems[slot]
        let moveId = this.beginMove()
        this.startWalk(moveId, () => {
            this.setInFrontOfTable()
            this.node.scaleX = -1
        }, t => t.to(0.5, { position: this.getPos(this.POS_SAUCE) }), () => {
            this.getChickenComp(cookedItem).addSauce()
            this.node.scaleX = 1
            this.finishMove()
        })
    }

    moveToBuy() {
        if (!this.hasAnyItem()) {
            this.finishMove()
            return
        }
        let moveId = this.beginMove()
        this.node.scaleX = -1
        this.setInFrontOfTable()
        if (this.localId == 1) {
            this.setBehindTable()
            this.startWalk(moveId, () => { }, t => t.to(0.6, { position: this.getPos(this.POS_SELL) }), () => {
                if (!this.isMoveActive(moveId)) return
                this.arriveIdle()
            })
            this.scheduleOnMove(0.3, moveId, () => {
                if (this.gamePlay) this.gamePlay.validateSellAtCounter()
            })
            this.localId = 3
            return
        }
        if (this.localId == 2 || this.localId == 3) {
            let sellDelay = this.localId == 3 ? 0.4 : 0.4
            let tween = this.localId == 3
                ? cc.tween(this.node).call(() => this.setBehindTable()).to(0.4, { position: this.getPos(this.POS_SELL) })
                : cc.tween(this.node)
                    // .to(1, { position: this.getPos(this.POS_CHICKEN) })
                    .call(() => this.setBehindTable())
                    .to(0.4, { position: this.getPos(this.POS_SELL) })
            this.anim.setAnimation(0, "Walk", true)
            this.updateArms()
            tween.call(() => {
                if (!this.isMoveActive(moveId)) return
                this._isWalking = false
                this.arriveIdle()
            }).start()
            this.scheduleOnMove(sellDelay, moveId, () => {
                if (this.gamePlay) this.gamePlay.validateSellAtCounter()
            })
            this.localId = 3
            return
        }

        if (this.localId == 4) {
            this.setBehindTable()
            this.node.scaleX = 1
            this.startWalk(moveId, () => { }, t => t.to(0.6, { position: this.getPos(this.POS_SELL) }), () => {
                if (!this.isMoveActive(moveId)) return
                this.arriveIdle()
            })
            this.scheduleOnMove(0.3, moveId, () => {
                if (this.gamePlay) this.gamePlay.validateSellAtCounter()
            })
            this.localId = 3
            return
        }

        if (this.localId == 5) {
            this.node.scaleX = 1
            this.startWalk(moveId, () => { }, t => t
                .to(1, { position: this.getPos(this.POS_COCA) })
                .call(() => this.setBehindTable())
                .to(0.6, { position: this.getPos(this.POS_SELL) }), () => {
                    if (!this.isMoveActive(moveId)) return
                    this.arriveIdle()
                })
            this.scheduleOnMove(1, moveId, () => {
                if (this.gamePlay) this.gamePlay.validateSellAtCounter()
            })
            this.localId = 3
            return
        }

        this.finishMove()
    }
    moveToCoca() {
        let moveId = this.beginMove()
        this.node.scaleX = -1
        let cocaComp = this.gamePlay.btnCoca.getComponent("coca")

        let onArriveAtCoca = () => {
            if (!this.pickupCoca(cocaComp) && cocaComp && !cocaComp.isBusy()) {
                cocaComp.cooking()
            }
            this.localId = 4
            this.finishMove()
        }

        if (this.localId == 1 || this.localId == 3 || this.localId == 5) {
            this.scheduleOnMove(0.6, moveId, () => {
                this.setInFrontOfTable()
            })
            this.startWalk(moveId, () => { }, t => t.to(0.8, { position: this.getPos(this.POS_COCA) }), onArriveAtCoca)
            return
        }

        if (this.localId == 4 && cocaComp.isCoca) {
            this.pickupCoca(cocaComp)
            this.finishMove()
            return
        }

        if (this.localId == 2) {
            this.startWalk(moveId, () => { }, t => t
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => this.setBehindTable())
                .to(0.8, { position: this.getPos(this.POS_COCA) }), onArriveAtCoca)
            return
        }

        this.finishMove()
    }

    moveToCake() {
        let moveId = this.beginMove()
        if (this.isAtPos(this.POS_CAKE)) {
            this.pickAtCakeCounterOrAct(() => this.getCake())
            return
        }

        if (this.localId == 0 || this.localId == 1) {
            this.startWalk(moveId, () => {
                this.node.scaleX = -1
                this.setInFrontOfTable()
            }, t => t
                // .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => this.setBehindTable())
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .call(() => this.setInFrontOfTable())
                .to(1, { position: this.getPos(this.POS_CAKE) }),
                () => this.getCake())
            return
        }
        if (this.localId == 2) {
            this.startWalk(moveId, () => {
                this.node.scaleX = -1
                this.setInFrontOfTable()
            }, t => t
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => this.setBehindTable())
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .call(() => this.setInFrontOfTable())
                .to(1, { position: this.getPos(this.POS_CAKE) }),
                () => this.getCake())
            return
        }

        if (this.localId == 3 || this.localId == 5) {
            this.startWalk(moveId, () => {
                this.node.scaleX = -1
            }, t => t
                // t.to(1, { position: this.getPos(this.POS_CHICKEN) })
                //     .call(() => this.setBehindTable())
                .to(0.4, { position: this.getPos(this.POS_COCA) })
                .call(() => this.setInFrontOfTable())
                .to(1, { position: this.getPos(this.POS_CAKE) }),
                () => this.getCake())
            return
        }

        if (this.localId == 4) {
            this.startWalk(moveId, () => {
                this.node.scaleX = -1
                this.setInFrontOfTable()
            }, t => t.to(1, { position: this.getPos(this.POS_CAKE) }),
                () => this.getCake())
            return
        }

        this.finishMove()
    }

    getCake() {
        if (!this.canPickItemType("cake")) {
            this.finishMove()
            return
        }
        let slot = this.preparePickupSlot("cake")
        if (slot < 0) {
            this.finishMove()
            return
        }
        let cake = cc.instantiate(this.preCake)
        this.putTrayItem(cake, "cake", slot)
        this.localId = 5
        this.finishMove()
    }

    getTomato() {
        if (!this.canPickItemType("tomato")) {
            this.finishMove()
            return
        }
        let slot = this.preparePickupSlot("tomato")
        if (slot < 0) {
            this.finishMove()
            return
        }
        let tomato = cc.instantiate(this.preTomato)
        this.putTrayItem(tomato, "tomato", slot)
        this.localId = 5
        this.finishMove()
    }

    moveToTomato() {
        let moveId = this.beginMove()
        if (this.isAtPos(this.POS_CAKE)) {
            this.pickAtCakeCounterOrAct(() => this.getTomato())
            return
        }

        if (this.localId == 0 || this.localId == 1) {
            this.startWalk(moveId, () => {
                this.node.scaleX = -1
            }, t => t
                .call(() => this.setBehindTable())

                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .call(() => this.setInFrontOfTable())
                .to(1, { position: this.getPos(this.POS_CAKE) }),
                () => this.getTomato())
            return
        }
        if (this.localId == 2) {
            this.startWalk(moveId, () => {
                this.node.scaleX = -1
                this.setInFrontOfTable()
            }, t => t
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(() => this.setBehindTable())
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .call(() => this.setInFrontOfTable())
                .to(1, { position: this.getPos(this.POS_CAKE) }),
                () => this.getTomato())
            return
        }
        if (this.localId == 3 || this.localId == 5) {
            this.startWalk(moveId, () => {
                this.node.scaleX = -1
            }, t => t
                // .to(1, { position: this.getPos(this.POS_CHICKEN) })
                // .call(() => this.setBehindTable())
                .to(0.4, { position: this.getPos(this.POS_COCA) })
                .call(() => this.setInFrontOfTable())
                .to(1, { position: this.getPos(this.POS_CAKE) }),
                () => this.getTomato())
            return
        }

        if (this.localId == 4) {
            this.startWalk(moveId, () => {
                this.node.scaleX = -1
            }, t => t.to(1, { position: this.getPos(this.POS_CAKE) }),
                () => this.getTomato())
            return
        }

        this.finishMove()
    }
    // --- Reset ---

    clearTray() {
        this.consumeTrayItem(0)
        this.consumeTrayItem(1)
    }

    resetToStart() {
        // this.cancelMove()
        // this.clearTray()
        // this.localId = 0
        // this.node.scaleX = 1
        // this.node.zIndex = 0
        // this.table.zIndex = 0
        // this.anim.setAnimation(0, "Idle", true)
        // this.anim.setAnimation(1, "Idle", false)
        // this.anim.setAnimation(2, "Idle", false)
    }
}
