
const { ccclass, property } = cc._decorator;
globalThis.gold = 100
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Camera)
    cameraDoc: cc.Camera = null;
    // @property(cc.Node)
    // npc: cc.Node = null
    // @property(cc.Node)
    // npc2: cc.Node = null
    @property(cc.Node)
    listCusNode: cc.Node = null
    @property(cc.Node)
    listPlacePos: cc.Node = null
    @property(cc.Node)
    listCrunch: cc.Node = null
    @property(cc.Node)
    boxing1: cc.Node = null;
    @property(cc.Node)
    boxing2: cc.Node = null;
    @property(cc.AudioClip)
    soundBG: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundShowPop: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundClick: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundCoin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundConfirm: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundWin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundTime: cc.AudioClip = null
    @property(cc.AudioClip)
    soundDoor: cc.AudioClip = null
    @property(cc.Node)
    game: cc.Node = null
    @property(cc.Node)
    guildUpgrade: cc.Node = null
    @property(cc.Node)
    guildUpgrade2: cc.Node = null
    @property(cc.Node)
    phaohoa: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;

    @property(cc.Label)
    lbCoin: cc.Label = null
    @property(cc.Node)
    dayTa1: cc.Node = null
    @property(cc.Sprite)
    fillBar: cc.Sprite = null
    @property(cc.Node)
    endCard: cc.Node = null
    @property(cc.Node)
    endCardDoc: cc.Node = null
    @property(cc.Node)
    coinBar: cc.Node
    @property(cc.Node)
    logo: cc.Node = null
    @property(cc.Node)
    textGuild1: cc.Node = null
    @property(cc.Node)
    textGuild2: cc.Node = null
    @property(cc.Node)
    textGuild3: cc.Node = null
    @property(cc.Node)
    door: cc.Node = null;
    @property(cc.Node)
    listIconPt: cc.Node = null;
    @property(cc.Node)
    listPt: cc.Node = null
    @property(cc.Node)
    sortLayer: cc.Node = null
    @property(cc.Prefab)
    preCoin: cc.Prefab = null;
    @property([cc.Prefab])
    listPrePt: cc.Prefab[] = []
    @property([cc.Prefab])
    listPreCus: cc.Prefab[] = []
    @property(cc.Node)
    arrMayDay: cc.Node[] = []
    @property(cc.Node)
    listCard: cc.Node = null
    @property(cc.Node)
    noti: cc.Node = null;
    @property(cc.Node)
    guildTime1: cc.Node = null;
    @property(cc.Node)
    timeBar: cc.Node = null


    arrPosDone = [cc.v3(-239, -133), cc.v3(57, -157), cc.v3(-123, -36), cc.v3(-14, 65), cc.v3(-58, -235), cc.v3(198, -59)]
    arrPosDoneCrunch = [cc.v3(218, -392), cc.v3(409, -289)]
    // @property(cc.Node)
    // listCrunch:cc.Node=null
    arrPosCus = []
    arrCus = []
    arrIconPt = []
    isStep = 0
    arrCrunch = []
    ptBusyMachines = {}
    isGameStarted = false
    guidingIconPt = false
    hideQueueHandGuide = false
    isHind = false
    isEndgame = false
    ptSpeed = 1
    adChanel = '{{__adv_channels_adapter__}}'
    posGapBung = cc.v3(-30, -19);
    posNangTa = cc.v3(-50, -42)
    idSoundTime = null
    idSoundBG = null
    sfxIds = []
    start() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.idSoundBG = cc.audioEngine.play(this.soundBG, true, 0.5)
        this.scheduleOnce(() => {
            for (let i = 0; i < Math.min(3, this.arrCus.length); i++) {
                let child = this.arrCus[i];
                if (child && child.isValid) {
                    child.getChildByName("pop").active = true
                }
            }
        }, 0.6)
        this.idSoundTime = this.playSfx(this.soundTime, true, 0.5)
        for (let i = 0; i < this.listCusNode.childrenCount; i++) {
            this.arrCus.push(this.listCusNode.children[i])
        }
        for (let i = 0; i < this.listIconPt.children[0].childrenCount; i++) {
            this.arrIconPt.push(this.listIconPt.children[0].children[i])
        }
        for (let i = 0; i < this.listCrunch.childrenCount; i++) {
            this.arrCrunch.push(this.listCrunch.children[i])
        }
        for (let i = 0; i < this.listPlacePos.childrenCount; i++) {
            let pos = this.listPlacePos.children[i].position
            this.arrPosCus.push(cc.v3(pos.x, pos.y, pos.z))
        }
        this.setupSortLayer()
        this.rebuildQueuePosInSortLayer()
        for (let i = 0; i < this.arrCus.length; i++) {
            this.attachToSortLayer(this.arrCus[i])
        }
        this.refreshSortLayerDepth()
        this.scheduleOnce(() => {
            this.offGuild()
        }, 1)
    }
    offGuild() {
        cc.audioEngine.stop(this.idSoundTime)
        cc.tween(this.guildTime1.children[0]).to(0.3, { opacity: 0 }).start();
        cc.tween(this.guildTime1.children[1]).to(0.3, { scale: 0 }).start();
        this.scheduleOnce(() => {
            this.timeBar.active = true
            this.textGuild1.active = true
        }, 0.3)


    }
    setupSortLayer() {
        let doorParent = this.door ? this.door.parent : null
        let parent = (doorParent && doorParent.parent)
            || (this.listCrunch && this.listCrunch.parent)
            || this.game
            || this.node

        if (!this.sortLayer || !this.sortLayer.isValid) {
            this.sortLayer = new cc.Node("SortLayer")
            this.sortLayer.parent = parent
            this.sortLayer.setPosition(0, 0)
            if (doorParent && doorParent.parent === parent) {
                this.sortLayer.setSiblingIndex(doorParent.getSiblingIndex())
            } else if (this.listCrunch && this.listCrunch.parent === parent) {
                this.sortLayer.setSiblingIndex(this.listCrunch.getSiblingIndex())
            }
        }

        let nodes = []
        for (let i = 0; i < this.arrCrunch.length; i++) {
            nodes.push(this.arrCrunch[i])
        }
        for (let i = 0; i < this.arrMayDay.length; i++) {
            if (this.arrMayDay[i]) nodes.push(this.arrMayDay[i])
        }
        if (doorParent && doorParent !== parent && doorParent !== this.sortLayer) {
            nodes.push(doorParent)
        } else if (this.door) {
            nodes.push(this.door)
        }
        if (this.boxing1) nodes.push(this.boxing1)
        if (this.boxing2) nodes.push(this.boxing2)
        if (this.dayTa1) nodes.push(this.dayTa1)
        if (this.listPt) nodes.push(this.listPt)

        for (let i = 0; i < nodes.length; i++) {
            this.attachToSortLayer(nodes[i])
        }
        this.refreshSortLayerDepth()
        this.setDepthByY(this.sortLayer)
    }

    rebuildQueuePosInSortLayer() {
        let layer = this.sortLayer
        if (!layer || !this.listPlacePos) return
        this.arrPosCus = []
        for (let i = 0; i < this.listPlacePos.childrenCount; i++) {
            let place = this.listPlacePos.children[i]
            let worldPos = place.parent.convertToWorldSpaceAR(place.position)
            let localPos = layer.convertToNodeSpaceAR(worldPos)
            this.arrPosCus.push(cc.v3(localPos.x, localPos.y, localPos.z))
        }
    }
    toSortLayerPos(fromParent, localPos) {
        let layer = this.sortLayer || this.node
        if (!fromParent || fromParent === layer) {
            return cc.v3(localPos.x, localPos.y, localPos.z)
        }
        let worldPos = fromParent.convertToWorldSpaceAR(localPos)
        let pos = layer.convertToNodeSpaceAR(worldPos)
        return cc.v3(pos.x, pos.y, pos.z)
    }

    getSortLayer() {
        if (!this.sortLayer || !this.sortLayer.isValid) {
            this.setupSortLayer()
        }
        return this.sortLayer || this.node
    }
    setDepthByY(node) {
        if (!node || !node.isValid) return
        node.zIndex = -Math.round(node.y)
    }
    attachToSortLayer(node) {
        let layer = this.sortLayer || this.node
        if (!node || !node.isValid) return
        if (node.parent === layer) {
            this.setDepthByY(node)
            return
        }
        let worldPos = node.parent
            ? node.parent.convertToWorldSpaceAR(node.position)
            : node.position
        node.parent = layer
        node.position = layer.convertToNodeSpaceAR(worldPos)
        this.setDepthByY(node)
    }
    refreshSortLayerDepth() {
        let layer = this.sortLayer
        if (!layer) return
        for (let i = 0; i < layer.childrenCount; i++) {
            this.setDepthByY(layer.children[i])
        }
    }

    getQueuePos(index) {
        let pos = this.arrPosCus[index]
        return cc.v3(pos.x, pos.y, pos.z)
    }
    // Prefab cus mặc định quay trái khi scaleX = 1
    faceCusByDir(cus, fromPos, toPos) {
        if (!cus || Math.abs(toPos.x - fromPos.x) < 0.1) return
        cus.scaleX = toPos.x < fromPos.x ? 1 : -1
    }
    countCus = 0
    spawCustomer() {
        if (this.arrCus.length >= this.arrPosCus.length) return;
        let queueIndex = this.arrCus.length
        let posEnd = this.getQueuePos(queueIndex)
        let cus = cc.instantiate(this.listPreCus[this.countCus])
        let spawnParent = this.listCusNode || this.node
        let startPos = this.toSortLayerPos(spawnParent, cc.v3(-1051, -600))
        let midPos = this.toSortLayerPos(spawnParent, cc.v3(-675, -435))
        this.attachToSortLayer(cus)

        this.arrCus.push(cus);
        let cusComp = cus.getComponent("cusGym")
        cusComp.isQueueMoving = true
        cus.position = startPos
        // Prefab quay trái (scaleX=1) → đi sang phải cần scaleX=-1
        this.faceCusByDir(cus, startPos, midPos)
        let anim = cus.children[0].getComponent(sp.Skeleton)
        anim.setAnimation(0, "WalkInL", true)
        cc.Tween.stopAllByTarget(cus)
        cc.tween(cus).to(1, { position: midPos }).call(() => {
            this.faceCusByDir(cus, midPos, posEnd)
        }).to(0.8, { position: posEnd }).call(() => {
            cus.scaleX = 1
            if (cusComp.isAngryWait) {
                cusComp.tucGian()
            } else {
                anim.setAnimation(0, "Waiting", true)
            }
            cusComp.showQueuePop()

        }).start()
        this.countCus++
        if (this.countCus > 5) {
            this.countCus = 0
        }
    }


    arrWaiting = []
    doCus(tag, cus) {
        this.playSfx(this.soundClick, false, 1)
        if (this.isStep <= 3) {
            this.moveCus(tag)
            if (this.isStep == 0) {
                this.isStep = 1;
                this.listIconPt.active = true;
                this.scheduleOnce(() => {
                    this.arrIconPt[0].getChildByName("hand").active = true
                }, 0.3)
            }
            else if (this.isStep == 2) {
                this.arrIconPt[1].getComponent(cc.Button).enabled = true;
                this.arrIconPt[1].getChildByName("hand").active = true


            }
            else if (this.isStep == 3) {
                this.arrIconPt[2].getComponent(cc.Button).enabled = true;
                this.arrIconPt[2].getChildByName("hand").active = true


            }
            return true
        }
        else {
            if (tag == 0) {
                for (let i = 0; i < this.arrCrunch.length; i++) {
                    if (!this.arrCrunch[i].getChildByName("char")) {
                        this.moveCusToCrunch(cus, i, tag)
                        return true
                    }
                }
            }
            else if (tag == 1) {
                for (let i = 0; i < this.arrMayDay.length; i++) {
                    if (!this.arrMayDay[i].getChildByName("char")) {
                        this.moveCusToMayDay(cus, i, tag)
                        return true
                    }
                }
            }
            else if (tag == 2) {
                if (!this.boxing1.getChildByName("char")) {
                    this.moveCusToBoxing(cus, 0, tag)
                    return true
                }
            }
        }
        return false
    }
    leaveQueue(cus) {
        let index = this.arrCus.indexOf(cus)
        if (index === -1) return
        this.arrCus.splice(index, 1)
        for (let i = index; i < this.arrCus.length; i++) {
            let queueCus = this.arrCus[i]
            let posEnd = this.getQueuePos(i)
            let cusComp = queueCus.getComponent("cusGym")
            let anim = queueCus.children[0].getComponent(sp.Skeleton)
            cusComp.isQueueMoving = true
            anim.setAnimation(0, "WalkInL", true)
            this.faceCusByDir(queueCus, queueCus.position, posEnd)
            cc.Tween.stopAllByTarget(queueCus)
            cc.tween(queueCus).to(0.8, { position: posEnd }).call(() => {
                queueCus.scaleX = 1
                if (cusComp.isAngryWait) {
                    cusComp.tucGian()
                } else {
                    anim.setAnimation(0, "Waiting", true)
                }
                cusComp.showQueuePop()
            }).start()
        }
    }
    moveCusToCrunch(cus, value, tag) {
        this.leaveQueue(cus)
        let crunch = this.arrCrunch[value];
        cus.parent = crunch;
        cus.position = this.posGapBung;
        cus.name = "char"
        cus.children[0].scale = 1
        cus.scale = 1
        cus.scaleX = 1
        let cusComp = cus.getComponent("cusGym")

        cusComp.parentName = "Crunch"
        cusComp.parentIndex = value;
        cusComp.parentNode = crunch

        this.arrWaiting.push(cus)
        cusComp.waitingTag(tag)
        this.updateQueueHand()

    }
    moveCusToMayDay(cus, value, tag) {
        this.leaveQueue(cus)
        let may = this.arrMayDay[value]
        cus.parent = may;
        cus.position = this.posNangTa;
        cus.name = "char"
        cus.children[0].scale = 1;
        cus.scale = 1
        cus.scaleX = 1
        let cusComp = cus.getComponent("cusGym")
        may.getChildByName("G1_AbCrunch").zIndex = cus.zIndex + 1
        cusComp.parentName = "MayDay"
        cusComp.parentIndex = value;
        cusComp.parentNode = may

        this.arrWaiting.push(cus)
        cus.getComponent("cusGym").waitingTag(tag)
        this.updateQueueHand()
    }
    moveCusToBoxing(cus, value, tag) {
        this.leaveQueue(cus)
        cus.parent = this.boxing1
        cus.position = cc.v3(123, 23);
        cus.name = "char"
        cus.children[0].scale = 1;
        cus.scale = 1
        cus.scaleX = 1
        let cusComp = cus.getComponent("cusGym")

        cusComp.parentName = "Boxing"
        cusComp.parentIndex = value;
        cusComp.parentNode = this.boxing1
        this.arrWaiting.push(cus)
        cus.getComponent("cusGym").waitingTag(tag)
        this.updateQueueHand()
    }
    offIconPt(node) {
        node.children[1].active = true;
        node.getChildByName("hand").active = false
    }
    onIconPt(node) {
        if (node) {
            node.children[1].active = false;
            node.getChildByName("hand").active = false
            node.getComponent(cc.Button).enabled = true
            this.guidingIconPt = false
            this.updateQueueHand()
        }

    }
    isIconPtFree(node) {
        if (!node || !node.active) return false
        let btn = node.getComponent(cc.Button)
        if (btn && !btn.enabled) return false
        // children[1] = busy overlay
        if (node.children[1] && node.children[1].active) return false
        return true
    }
    hasFreeMachineForTag(tag) {
        if (tag == 0) {
            for (let i = 0; i < this.arrCrunch.length; i++) {
                if (!this.arrCrunch[i].getChildByName("char")) return true
            }
            return false
        }
        if (tag == 1) {
            for (let i = 0; i < this.arrMayDay.length; i++) {
                if (!this.arrMayDay[i].getChildByName("char")) return true
            }
            return false
        }
        if (tag == 2) {
            return !this.boxing1.getChildByName("char")
        }
        return false
    }
    canClickQueueCus(cus) {
        if (!cus || !cus.isValid) return false
        let cusComp = cus.getComponent("cusGym")
        if (!cusComp || cusComp.isQueueMoving) return false
        let pop = this.getCusPop(cus)
        if (!pop || !pop.active) return false
        let btn = pop.getComponent(cc.Button)
        if (btn && !btn.enabled) return false
        if (this.isStep < 4) return false
        return this.hasFreeMachineForTag(cusComp.tag)
    }
    hasCusWaitingForPt() {
        this.cleanupWaiting()
        for (let i = 0; i < this.arrWaiting.length; i++) {
            if (this.isCusWaitingForPt(this.arrWaiting[i])) return true
        }
        return false
    }
    canClickIconPt(node) {
        return this.isIconPtFree(node) && this.hasCusWaitingForPt()
    }
    hideAllIconPtHands() {
        for (let i = 0; i < this.arrIconPt.length; i++) {
            let hand = this.arrIconPt[i].getChildByName("hand")
            if (hand) hand.active = false
        }
    }
    showFreeIconPtHand() {
        this.hideAllIconPtHands()
        this.hideAllQueueHands()
        if (!this.hasCusWaitingForPt()) {
            this.guidingIconPt = false
            this.updateQueueHand()
            return
        }
        for (let i = 0; i < this.arrIconPt.length; i++) {
            let icon = this.arrIconPt[i]
            if (this.canClickIconPt(icon)) {
                let hand = icon.getChildByName("hand")
                if (hand) hand.active = true
                this.guidingIconPt = true
                return
            }
        }
        this.guidingIconPt = false
        this.updateQueueHand()
    }
    getCusPop(cus) {
        if (!cus || !cus.isValid) return null
        let cusComp = cus.getComponent("cusGym")
        if (cusComp && cusComp.pop) return cusComp.pop
        return cus.getChildByName("pop")
    }
    hideAllQueueHands() {
        for (let i = 0; i < this.arrCus.length; i++) {
            let cus = this.arrCus[i]
            if (!cus || !cus.isValid) continue
            let cusComp = cus.getComponent("cusGym")
            if (cusComp) cusComp.resetPopLayer()
            let pop = this.getCusPop(cus)
            if (!pop) continue
            let hand = pop.getChildByName("hand")
            if (hand) hand.active = false
        }
        this.resetQueueCusDepth()
    }
    resetQueueCusDepth() {
        for (let i = 0; i < this.arrCus.length; i++) {
            let cus = this.arrCus[i]
            if (cus && cus.isValid) this.setDepthByY(cus)
        }
    }
    bringCusPopToFront(cus) {
        if (!cus || !cus.isValid) return
        let cusComp = cus.getComponent("cusGym")
        if (cusComp) cusComp.liftPop()
    }
    updateQueueHand() {
        this.hideAllQueueHands()
        if (this.isStep < 4) return
        if (this.guidingIconPt) return
        if (this.hideQueueHandGuide) return
        for (let i = 0; i < this.arrCus.length; i++) {
            let cus = this.arrCus[i]
            if (!this.canClickQueueCus(cus)) continue
            let pop = this.getCusPop(cus)
            if (!pop) continue
            let hand = pop.getChildByName("hand")
            if (hand) hand.active = true
            this.bringCusPopToFront(cus)
            return
        }
    }
    clickPt(event, tag) {
        let pt = null;
        this.playSfx(this.soundClick, false, 1)

        if (this.isStep == 1) {
            let btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false
            btn.enabled = false
            cc.tween(this.textGuild1).to(0.5, { opacity: 0 }).start()
            pt = this.listPt.children[0];
            this.isStep = 2
            let fnc = () => {
                this.activeCus(0)
            }
            pt.getComponent("pt").moveIn(fnc)

            this.scheduleOnce(() => {
                this.arrCus[1].getChildByName("pop").getChildByName("hand").active = true
                this.arrCus[1].getChildByName("pop").getComponent(cc.Button).enabled = true
                this.bringCusPopToFront(this.arrCus[1])
            }, 1)
            this.scheduleOnce(() => {
                this.attachToSortLayer(pt)

            }, 0.3)
            this.openDoor()
            this.offIconPt(this.arrIconPt[0])

        }
        else if (this.isStep == 2) {
            let btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false
            pt = this.listPt.children[0];
            this.isStep = 3
            pt.active = true
            this.openDoor()
            let fnc = () => {
                this.activeCus(1)
            }
            pt.getComponent("pt").moveIn(fnc)


            this.scheduleOnce(() => {
                this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true
                this.arrCus[2].getChildByName("pop").getComponent(cc.Button).enabled = true
                this.bringCusPopToFront(this.arrCus[2])

            }, 1)
            this.scheduleOnce(() => {
                this.attachToSortLayer(pt)
            }, 0.2)
            this.offIconPt(this.arrIconPt[1])
        }
        else if (this.isStep == 3) {
            let btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false
            pt = this.listPt.children[0];
            this.isStep = 4
            pt.active = true
            this.openDoor()

            let fnc = () => {
                this.activeCus(2)
            }
            pt.getComponent("pt").moveIn(fnc)

            this.scheduleOnce(() => {
                this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true
                this.bringCusPopToFront(this.arrCus[2])
            }, 1)
            this.scheduleOnce(() => {
                this.attachToSortLayer(pt)
            }, 0.2)
            this.offIconPt(this.arrIconPt[2])
        }
        else {
            this.cleanupWaiting()
            for (let i = 0; i < this.arrWaiting.length; i++) {
                let cus = this.arrWaiting[i];
                if (!this.isCusWaitingForPt(cus)) continue
                let cusComp = cus.getComponent("cusGym")
                let btn = event.currentTarget.getComponent(cc.Button);
                btn.enabled = false
                event.currentTarget.children[1].active = true
                if (!this.addPt(cus, cusComp.parentName, event.currentTarget)) {
                    btn.enabled = true
                    event.currentTarget.children[1].active = false
                } else {
                    this.guidingIconPt = false
                    event.currentTarget.getChildByName("hand").active = false
                    this.updateQueueHand()
                }
                return;
            }
        }
    }
    cleanupWaiting() {
        for (let i = this.arrWaiting.length - 1; i >= 0; i--) {
            if (!this.isCusOnMachine(this.arrWaiting[i])) {
                this.arrWaiting.splice(i, 1)
            }
        }
    }
    isCusOnMachine(cus) {
        if (!cus || !cus.isValid) return false
        let cusComp = cus.getComponent("cusGym")
        if (!cusComp || !cusComp.parentNode || !cusComp.parentNode.isValid) return false
        if (cus.parent !== cusComp.parentNode) return false
        if (cus.name !== "char") return false
        return true
    }
    isCusWaitingForPt(cus) {
        if (!this.isCusOnMachine(cus)) return false
        let cusComp = cus.getComponent("cusGym")
        if (cusComp.isPt) return false
        if (this.isMachinePtBusy(cusComp.parentName, cusComp.parentIndex)) return false
        return true
    }
    removeFromWaiting(cus) {
        let index = this.arrWaiting.indexOf(cus)
        if (index !== -1) {
            this.arrWaiting.splice(index, 1)
        }
    }
    getMachineKey(parentName, index) {
        return parentName + "_" + index
    }
    isMachinePtBusy(parentName, index) {
        return !!this.ptBusyMachines[this.getMachineKey(parentName, index)]
    }
    setMachinePtBusy(parentName, index, busy) {
        let key = this.getMachineKey(parentName, index)
        if (busy) {
            this.ptBusyMachines[key] = true
        } else {
            delete this.ptBusyMachines[key]
        }
    }
    releaseMachinePt(parentName, index) {
        this.setMachinePtBusy(parentName, index, false)
    }
    getPtTag(parentName, parentIndex) {
        switch (parentName) {
            case "Crunch":
                switch (parentIndex) {
                    case 0: return 0
                    case 1: return 4
                    case 2: return 5
                    case 3: return 6
                    default: return 0
                }
            case "MayDay":
                return parentIndex === 0 ? 1 : 3
            case "Boxing":
                return 2
            default:
                return 0
        }
    }
    countpt = 0
    playDoorAnim(animName) {
        if (this.door) {
            this.door.getComponent(cc.Animation).play(animName)
        }
        this.playSfx(this.soundDoor, false, 1)
    }
    openDoor() {
        this.playDoorAnim("door_open")
        this.scheduleOnce(() => {
            this.playDoorAnim("door_close")
        }, 0.7)
    }
    addPt(cus, parentName, btn) {
        let cusComp = cus.getComponent("cusGym");
        if (!this.isCusWaitingForPt(cus)) {
            return false
        }
        this.openDoor();
        cusComp.isPt = true
        this.setMachinePtBusy(parentName, cusComp.parentIndex, true)
        let pt = cc.instantiate(this.listPrePt[this.countpt]);
        pt.parent = this.listPt;
        pt.active = true
        pt.position = cc.v3(382.607, 121)
        let ptComp = pt.getComponent("pt");
        ptComp.btn = btn
        ptComp.machineParentName = parentName
        ptComp.machineIndex = cusComp.parentIndex

        this.countpt++;
        this.scheduleOnce(() => {
            this.attachToSortLayer(pt)

        }, 0.3)
        if (this.countpt > 3) {
            this.countpt = 0
        }
        let tag = this.getPtTag(parentName, cusComp.parentIndex)
        ptComp.tag = Number(tag)
        let targetCus = cus
        let fnc = () => {
            this.activeCus(Number(tag), targetCus)
        }
        ptComp.moveIn(fnc)
        return true
    }
    isCountAction = 0
    activeCus(value, cus = null) {
        let char = cus && this.isCusOnMachine(cus) ? cus : null
        if (!char) {
            char = this.getCharByPtTag(value)
        }
        if (!char) {
            console.warn("activeCus: missing char for tag", value)
            return
        }
        this.removeFromWaiting(char)
        let cusComp = char.getComponent("cusGym")
        if (cusComp) {
            cusComp.isPt = true
            cusComp.stopWaitProgress()
        }
        switch (value) {
            case 0:
                char.getComponent("cusGym").gapBung()
                char.position = cc.v3(1, -16)
                this.arrCrunch[0].children[0].active = false
                this.arrCrunch[0].children[1].active = true
                this.scheduleOnce(() => {
                    this.finishCusWorkout(char, this.arrPosDone[0], 4)
                }, 2)
                break;
            case 1:
                char.getComponent("cusGym").dayTa()
                this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                this.dayTa1.getChildByName("G1_AbCrunch").getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                char.position = cc.v3(-15.771 + 14, 7 - 5)
                this.scheduleOnce(() => {
                    this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true)
                    this.dayTa1.getChildByName("G1_AbCrunch").getComponent(sp.Skeleton).setAnimation(0, "Idle", true)
                    this.finishCusWorkout(char, this.arrPosDoneCrunch[0], 6)
                }, 2)
                break;
            case 2:
                this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                char.getComponent("cusGym").boxing()
                this.startGame()

                this.scheduleOnce(() => {
                    this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
                    this.isStep = 4
                    this.finishCusWorkout(char, cc.v3(647, -66), 6)
                }, 2)
                break;
            case 3:
                let mayDay2 = this.arrMayDay[1]
                char.getComponent("cusGym").dayTa()
                mayDay2.getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                mayDay2.getChildByName("G1_AbCrunch").getComponent(sp.Skeleton).setAnimation(0, "Action", true)
                char.position = cc.v3(-15.771 + 14, 7 - 5)
                this.scheduleOnce(() => {
                    mayDay2.getComponent(sp.Skeleton).setAnimation(0, "Idle", true)
                    mayDay2.getChildByName("G1_AbCrunch").getComponent(sp.Skeleton).setAnimation(0, "Idle", true)
                    this.finishCusWorkout(char, this.arrPosDoneCrunch[1], 6)
                }, 2)
                break;
            case 4:
                char.getComponent("cusGym").gapBung()
                char.position = cc.v3(1, -16)
                this.arrCrunch[1].children[0].active = false
                this.arrCrunch[1].children[1].active = true
                this.scheduleOnce(() => {
                    this.finishCusWorkout(char, this.arrPosDone[1], 4)
                }, 2)
                break;
            case 5:
                char.getComponent("cusGym").gapBung()
                char.position = cc.v3(1, -16)
                this.arrCrunch[2].children[0].active = false
                this.arrCrunch[2].children[1].active = true
                this.scheduleOnce(() => {
                    this.finishCusWorkout(char, this.arrPosDone[2], 4)
                }, 2)
                break;
            case 6:
                char.getComponent("cusGym").gapBung()
                char.position = cc.v3(1, -16)
                this.arrCrunch[3].children[0].active = false
                this.arrCrunch[3].children[1].active = true
                this.scheduleOnce(() => {
                    this.finishCusWorkout(char, this.arrPosDone[3], 4)
                }, 2)
                break;
        }


    }
    getCharByPtTag(value) {
        switch (value) {
            case 0: return this.arrCrunch[0].getChildByName("char")
            case 1: return this.dayTa1.getChildByName("char")
            case 2: return this.boxing1.getChildByName("char")
            case 3: return this.arrMayDay[1].getChildByName("char")
            case 4: return this.arrCrunch[1].getChildByName("char")
            case 5: return this.arrCrunch[2].getChildByName("char")
            case 6: return this.arrCrunch[3].getChildByName("char")
            default: return null
        }
    }
    finishCusWorkout(char, posDone, coin) {
        if (!char || !char.isValid) return
        this.removeFromWaiting(char)
        let donePos = this.toSortLayerPos(this.node, posDone)
        this.attachToSortLayer(char)
        char.getComponent("cusGym").happy()
        char.position = donePos
        char.scale = 0.8
        this.createCoin(char, coin)
        cc.tween(char).delay(1).to(0.5, { opacity: 0 }).start()
        if (!this.guidingIconPt) {
            this.updateQueueHand()
        }
    }
    startGame() {
        if (this.isGameStarted) return
        this.isGameStarted = true
        cc.tween(this.cameraDoc.node).to(0.4, { position: cc.v3(-250, 0) }).start()
        cc.tween(this.cameraDoc).to(0.8, { zoomRatio: 1.65 }).start()

        for (let child of this.arrIconPt) {
            this.onIconPt(child)
            child.getComponent(cc.Button).enabled = true
        }
        this.arrWaiting = []
        this.ptBusyMachines = {}
        this.unschedule(this.spawCustomer)
        for (let i = this.arrCus.length - 1; i >= 0; i--) {
            let cus = this.arrCus[i]
            if (cus && cus.isValid) cus.destroy()
        }
        for (let i = this.listCusNode.childrenCount - 1; i >= 0; i--) {
            this.listCusNode.children[i].destroy()
        }
        this.arrCus = []
        this.spawCustomer()

        this.schedule(this.spawCustomer, 3)
        this.scheduleOnce(() => {
            this.textGuild2.active = true
            while (this.arrCus.length < 3) {
                this.spawCustomer()
            }
            this.updateQueueHand()
        }, 15)
        this.scheduleOnce(() => {
            cc.tween(this.textGuild2).to(0.8, { opacity: 0 }).start()
            this.zoomGame()
            this.scheduleOnce(() => {
                this.listCard.active = true
            }, 4)
            // this.startGame()
        }, 22)

    }
    zoomGame() {
        cc.tween(this.camera).to(0.8, { zoomRatio: 2 }).start()
        cc.tween(this.camera.node).to(0.8, { position: cc.v3(-494, -296) }).start()
        cc.tween(this.cameraDoc).to(0.8, { zoomRatio: 2.5 }).start()
        cc.tween(this.cameraDoc.node).to(0.4, { position: cc.v3(-500, -100) }).start()

        this.hideQueueHandGuide = true
        this.hideAllQueueHands()
        while (this.arrCus.length < 5 && this.arrCus.length < this.arrPosCus.length) {
            this.spawCustomer()
        }
        for (let i = 0; i < this.arrCus.length; i++) {
            let cus = this.arrCus[i]
            if (!cus || !cus.isValid) continue
            let cusComp = cus.getComponent("cusGym")
            if (!cusComp) continue
            cusComp.isAngryWait = true
            if (!cusComp.isQueueMoving) {
                cusComp.tucGian()
            }
        }
        this.scheduleOnce(() => {
            this.textGuild3.active = true
        }, 0.5)

    }
    clickCard(event, value) {
        this.listCard.active = false
        cc.tween(this.camera).to(0.8, { zoomRatio: 1 }).start()
        cc.tween(this.camera.node).to(0.8, { position: cc.v3(0, 0) }).start()
        cc.tween(this.cameraDoc).to(0.8, { zoomRatio: 1.5 }).start()
        cc.tween(this.cameraDoc.node).to(0.8, { position: cc.v3(-100, 0) }).start()
        if (this.textGuild3) this.textGuild3.opacity = 0
        switch (Number(value)) {
            case 0:
                this.ptSpeed = 1.
                this.noti.active = true
                this.noti.children[0].children[1].active = true
                this.noti.getComponent(cc.Animation).play()
                this.unschedule(this.spawCustomer)
                this.hideQueueHandGuide = true
                this.hideAllQueueHands()
                this.hideAllIconPtHands()
                this.scheduleOnce(() => {
                    this.autoFillMachinesAndPts()
                }, 0.5)
                this.scheduleOnce(() => {
                    this.noti.children[0].children[0].active = false
                    this.noti.children[0].children[1].active = false
                    this.noti.children[0].children[2].active = true
                    this.noti.active = true
                    this.noti.getComponent(cc.Animation).play()
                }, 8.5)

                break
            case 1:
                this.addCountDownTime(15)
                this.noti.active = true
                this.noti.children[0].children[0].active = true
                this.noti.getComponent(cc.Animation).play()
                this.hideQueueHandGuide = false
                this.scheduleOnce(() => {
                    this.showContinueHandGuide()
                }, 0.8)
                break
        }
        this.scheduleOnce(() => {
            this.onEndgame()
        }, 10)
    }
    showContinueHandGuide() {
        this.hideQueueHandGuide = false
        this.guidingIconPt = false
        this.showFreeIconPtHand()
        this.updateQueueHand()
    }
    autoFillMachinesAndPts() {
        let queue = this.arrCus.slice()
        for (let i = 0; i < queue.length; i++) {
            let cus = queue[i]
            if (!cus || !cus.isValid) continue
            if (this.arrCus.indexOf(cus) < 0) continue
            let cusComp = cus.getComponent("cusGym")
            if (!cusComp) continue
            if (!this.hasFreeMachineForTag(cusComp.tag)) continue
            cc.Tween.stopAllByTarget(cus)
            cusComp.isQueueMoving = false
            let pop = cus.getChildByName("pop")
            if (pop) pop.active = false
            this.placeCusOnFreeMachine(cus, cusComp.tag)
        }
        this.autoSpawnPts()
    }
    placeCusOnFreeMachine(cus, tag) {
        if (tag == 0) {
            for (let i = 0; i < this.arrCrunch.length; i++) {
                if (!this.arrCrunch[i].getChildByName("char")) {
                    this.moveCusToCrunch(cus, i, tag)
                    return true
                }
            }
        } else if (tag == 1) {
            for (let i = 0; i < this.arrMayDay.length; i++) {
                if (!this.arrMayDay[i].getChildByName("char")) {
                    this.moveCusToMayDay(cus, i, tag)
                    return true
                }
            }
        } else if (tag == 2) {
            if (!this.boxing1.getChildByName("char")) {
                this.moveCusToBoxing(cus, 0, tag)
                return true
            }
        }
        return false
    }
    getFreeIconPt() {
        for (let i = 0; i < this.arrIconPt.length; i++) {
            if (this.isIconPtFree(this.arrIconPt[i])) return this.arrIconPt[i]
        }
        return null
    }
    autoSpawnPts() {
        this.cleanupWaiting()
        let waiting = this.arrWaiting.slice()
        let delay = 0
        for (let i = 0; i < waiting.length; i++) {
            let cus = waiting[i]
            if (!this.isCusWaitingForPt(cus)) continue
            let cusComp = cus.getComponent("cusGym")
            let icon = this.getFreeIconPt()
            if (icon) {
                let btn = icon.getComponent(cc.Button)
                if (btn) btn.enabled = false
                if (icon.children[1]) icon.children[1].active = true
            }
            let spawnCus = cus
            let parentName = cusComp.parentName
            let iconBtn = icon
            this.scheduleOnce(() => {
                if (!spawnCus || !spawnCus.isValid || !this.isCusWaitingForPt(spawnCus)) {
                    if (iconBtn) {
                        let btn = iconBtn.getComponent(cc.Button)
                        if (btn) btn.enabled = true
                        if (iconBtn.children[1]) iconBtn.children[1].active = false
                    }
                    return
                }
                if (!this.addPt(spawnCus, parentName, iconBtn)) {
                    if (iconBtn) {
                        let btn = iconBtn.getComponent(cc.Button)
                        if (btn) btn.enabled = true
                        if (iconBtn.children[1]) iconBtn.children[1].active = false
                    }
                }
            }, delay)
            delay += 0.12
        }
    }
    createCoin(node, value) {
        let pos = node.parent.convertToWorldSpaceAR(node.position)
        pos = this.node.convertToNodeSpaceAR(pos)
        let coin = cc.instantiate(this.preCoin);
        coin.parent = this.node;
        coin.position = pos.add(cc.v3(0, 50))
        globalThis.gold += 50
        this.playSfx(this.soundCoin, false, 1)

    }
    activateSeatCus(char, parentNode, parentName, parentIndex, tag) {
        if (!char) return
        char.active = true
        char.name = "char"
        let cusComp = char.getComponent("cusGym")
        if (!cusComp) return
        cusComp.parentName = parentName
        cusComp.parentIndex = parentIndex
        cusComp.parentNode = parentNode
        cusComp.isPt = false
        if (this.arrWaiting.indexOf(char) < 0) {
            this.arrWaiting.push(char)
        }
        cusComp.waitingTag(tag)
    }
    moveCus(value) {
        // cc.audioEngine.play(this.soundCoin, false, 1)
        if (value == 1) {
            let char = this.arrCrunch[0].getChildByName("char")
            this.activateSeatCus(char, this.arrCrunch[0], "Crunch", 0, 0)
            this.arrCus[0].active = false
        }
        else if (value == 2) {
            this.arrCus[1].active = false
            let char = this.dayTa1.getChildByName("char")
            this.activateSeatCus(char, this.dayTa1, "MayDay", 0, 1)

        }
        else if (value == 3) {
            this.arrCus[2].active = false
            let char = this.boxing1.getChildByName("char")
            this.activateSeatCus(char, this.boxing1, "Boxing", 0, 2)

        }
        else if (value == 4) {
            this.boxing2.children[0].getChildByName("notiBonusCoin").active = true
            globalThis.gold += 2
            this.arrCus[3].active = false

            this.boxing2.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
            this.boxing2.children[0].active = true
        }
        this.isCountAction++;
        if (this.isCountAction == 4) {
            this.scheduleOnce(() => {
                this.moveCame1()

            }, 1)
        }
        if (value != 1) {
            this.isHind = true
        }
    }

    update(dt) {
        let deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    }
    isCountStep = 0

    playSfx(clip, loop = false, vol = 1) {
        if (this.isEndgame || !clip) return null
        let id = cc.audioEngine.play(clip, loop, vol)
        if (id != null) this.sfxIds.push(id)
        return id
    }
    stopOtherSounds() {
        if (this.idSoundTime != null) {
            cc.audioEngine.stop(this.idSoundTime)
            this.idSoundTime = null
        }
        for (let i = 0; i < this.sfxIds.length; i++) {
            cc.audioEngine.stop(this.sfxIds[i])
        }
        this.sfxIds = []
    }
    onEndgame() {
        if (this.isEndgame) return
        this.isEndgame = true
        this.unschedule(this.spawCustomer)
        this.stopOtherSounds()
        this.makeAllCusHappy()
        if (this.soundWin) cc.audioEngine.play(this.soundWin, false, 1)
        // this.endCard.active = true;
        this.linkToStore.active = true
    }
    addCusToList(list, node) {
        if (!node || !node.isValid) return
        if (list.indexOf(node) >= 0) return
        if (!node.getComponent("cusGym")) return
        list.push(node)
    }
    makeAllCusHappy() {
        let list = []
        for (let i = 0; i < this.arrCus.length; i++) this.addCusToList(list, this.arrCus[i])
        for (let i = 0; i < this.arrWaiting.length; i++) this.addCusToList(list, this.arrWaiting[i])
        for (let i = 0; i < this.arrCrunch.length; i++) {
            if (this.arrCrunch[i]) this.addCusToList(list, this.arrCrunch[i].getChildByName("char"))
        }
        for (let i = 0; i < this.arrMayDay.length; i++) {
            if (this.arrMayDay[i]) this.addCusToList(list, this.arrMayDay[i].getChildByName("char"))
        }
        if (this.dayTa1) this.addCusToList(list, this.dayTa1.getChildByName("char"))
        if (this.boxing1) this.addCusToList(list, this.boxing1.getChildByName("char"))
        if (this.boxing2) this.addCusToList(list, this.boxing2.getChildByName("char"))
        if (this.sortLayer) {
            for (let i = 0; i < this.sortLayer.childrenCount; i++) {
                this.addCusToList(list, this.sortLayer.children[i])
            }
        }
        for (let i = 0; i < list.length; i++) {
            let cusComp = list[i].getComponent("cusGym")
            if (cusComp) cusComp.celebrate()
        }
    }
    startCountDown() {
        let timeComp = this.node.getComponentInChildren("time")
        if (timeComp && timeComp.startCountDown) {
            timeComp.startCountDown()
        }
    }
    addCountDownTime(sec) {
        let timeComp = this.node.getComponentInChildren("time")
        if (timeComp && timeComp.addTime) {
            timeComp.addTime(sec)
        }
    }

    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        this.lbCoin.string = globalThis.gold.toString()
        if (this.isEndgame) {
            if (logic) {
                this.endCardDoc.active = true
                this.endCard.active = false

            } else {
                this.endCard.active = true
                this.endCardDoc.active = false

            }
        }
        this.endCard.scale = (logic) ? 1.5 : 0.7
        this.logo.scale = (logic) ? 1.5 : 1
        this.listIconPt.scale = (logic) ? 2.2 : 1.3
        this.listIconPt.getComponent(cc.Widget).bottom = (logic) ? 230 : 114.86
        this.logo.getComponent(cc.Widget).top = 48
        this.cameraDoc.node.active = logic ? true : false
        this.camera.node.active = logic ? false : true
        this.guildTime1.scale = logic ? 2.2 : 1;
        this.timeBar.scale = logic ? 1.5 : 1
        this.timeBar.getComponent(cc.Widget).top = logic ? 250 : 150
        this.noti.scale = (logic) ? 1.8 : 1
        this.listCard.scale = (logic) ? 1.6 : 1
        this.textGuild1.getComponent(cc.Widget).bottom = (logic) ? 570 : 279.79
        this.textGuild2.getComponent(cc.Widget).bottom = (logic) ? 570 : 279.79
        this.textGuild3.getComponent(cc.Widget).bottom = (logic) ? 570 : 279.79
        this.textGuild1.scale = (logic) ? 1.8 : 1
        this.textGuild2.scale = (logic) ? 1.8 : 1
        this.textGuild3.scale = (logic) ? 1.8 : 1
        this.listCard.scale = (logic) ? 1.7 : 1
        if (logic == true) {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;



            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            const TALL_PHONE_MIN_RATIO = 2.0;  

            this.phaohoa.scale = (logic) ? 7 : 3
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {
                // console.log("check iphonex")
                // this.coinBar.getComponent(cc.Widget).top = 77 + 30;
                this.logo.getComponent(cc.Widget).top = 48 + 70
                this.timeBar.getComponent(cc.Widget).top = 250 + 70
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {

                this.guildUpgrade.scale = 1.8

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
                // this.camera.zoomRatio = 0.8
            }
        }


    }
}
