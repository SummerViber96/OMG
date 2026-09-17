

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
    soundChien: cc.AudioClip = null
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
    soundXao: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundMixDone: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundShowStar: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundSellDone
        : cc.AudioClip = null;
    @property(cc.AudioClip)
    soundCut: cc.AudioClip = null;
    @property([cc.AudioClip])
    listSoundNoti: cc.AudioClip[] = [];
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


    // @property(cc.Node)
    // listHand: cc.Node = null;

    @property(cc.AudioClip)
    soundWrong: cc.AudioClip = null

    @property(cc.Prefab)
    fxColor: cc.Prefab = null

    //new

    @property(cc.Node)
    listhand: cc.Node = null
    @property(cc.Node)
    btnDau: cc.Node = null;
    @property(cc.Node)
    cua: cc.Node = null
    @property(cc.Node)
    door: cc.Node = null;
    @property([cc.Prefab])
    listPreBox: cc.Prefab[] = [];
    @property(cc.Node)
    listItem2: cc.Node = null;
    @property(cc.Node)
    btnDone: cc.Node = null;
    @property(cc.Node)
    main2: cc.Node = null;
    @property(cc.Node)
    listBox: cc.Node = null
    @property(cc.Node)
    ro: cc.Node = null
    @property(cc.Node)
    listNoti: cc.Node = null;
    @property(cc.Node)
    spoon: cc.Node = null;
    @property(cc.Vec2)
    scoopOffset: cc.Vec2 = cc.v2(-125, -8);
    @property(cc.Node)
    dia: cc.Node = null;
    @property(cc.Node)
    shadow: cc.Node = null
    @property(cc.Node)
    listStar: cc.Node = null
    @property(cc.Node)
    showItem: cc.Node = null
    @property(cc.Node)
    gio: cc.Node = null
    @property(cc.Node)
    khay: cc.Node = null
    @property(cc.Node)
    hand2: cc.Node = null
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
    isStep = 0
    isTargetCus = null;
    adChanel = '{{__adv_channels_adapter__}}'
    countCus = 0
    idSound = null
    lastPortrait = null
    isMixTouch = false
    spoonMinX = -80
    spoonMaxX = 80
    spoonMinY = -40
    spoonMaxY = -5
    spoonRestY = -23
    spoonRestAngle = 0
    listBeads: cc.Node = null
    beadScoopState = {}
    scoopedBeadIds = {}
    isRotateSync = false
    physSnapshot = null
    spoonSnapshot = null
    progressNode: cc.Node = null
    progressFill: cc.Node = null
    progressFillWidth = 0
    mixTime = 0
    mixNeedTime = 2
    isMixDone = false
    lastMixMoveTime = 0
    mixTouchListener = null
    idSoundXao = null
    onLoad() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, this.beforeUpdateOrient, this);
        cc.view.on('canvas-resize', this.onCanvasResize, this);
    }

    protected start(): void {
        cc.audioEngine.play(this.soundBg, true, 0.3)
        this.lastPortrait = this.isPortrait();
        this.reponsive(this.lastPortrait);
        this.initPhysics();
        this.setupSpoonMix();
        this.cachePhysicsLocals();
    }

    onDestroy() {
        cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, this.beforeUpdateOrient, this);
        cc.view.off('canvas-resize', this.onCanvasResize, this);
        this.unschedule(this.flushPhysicsResync);
        this.unschedule(this.finishPhysicsResync);
    }

    isPortrait() {
        let size = cc.view.getFrameSize();
        let w = size.width;
        let h = size.height;
        if ((!w || !h) && typeof window !== 'undefined') {
            w = window.innerWidth;
            h = window.innerHeight;
        }
        return w < h;
    }

    beforeUpdateOrient() {
        if (!this.isRotateSync) {
            this.cachePhysicsLocals();
        }
        let portrait = this.isPortrait();
        if (this.lastPortrait == null) {
            this.lastPortrait = portrait;
            return;
        }
        if (portrait !== this.lastPortrait) {
            this.lastPortrait = portrait;
            this.onOrientationChange(portrait);
        }
    }

    onCanvasResize() {
        if (!this.listBeads) return;
        this.freezePhysicsWorld();
        this.queuePhysicsResync();
    }

    cachePhysicsLocals() {
        this.physSnapshot = this.snapshotBeadLocals();
        if (this.spoon && this.spoon.isValid) {
            this.spoonSnapshot = { x: this.spoon.x, y: this.spoon.y, angle: this.spoon.angle };
        }
    }

    snapshotBeadLocals() {
        let arr = [];
        if (!this.listBeads) return arr;
        for (let i = 0; i < this.listBeads.childrenCount; i++) {
            let bead = this.listBeads.children[i];
            if (bead === this.spoon) continue;
            arr.push({ node: bead, x: bead.x, y: bead.y, angle: bead.angle });
        }
        return arr;
    }

    restoreBeadLocals(arr) {
        if (!arr) return;
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (!item.node || !item.node.isValid) continue;
            item.node.setPosition(item.x, item.y);
            item.node.angle = item.angle;
        }
        if (this.spoon && this.spoonSnapshot) {
            this.spoon.setPosition(this.spoonSnapshot.x, this.spoonSnapshot.y);
            this.spoon.angle = this.spoonRestAngle;
        }
        else if (this.spoon) {
            this.spoon.angle = this.spoonRestAngle;
        }
    }

    freezePhysicsWorld() {
        this.isRotateSync = true;
        let pm = cc.director.getPhysicsManager();
        if (pm && pm.enabled) {
            pm.enabled = false;
        }
    }

    queuePhysicsResync() {
        this.unschedule(this.flushPhysicsResync);
        this.unschedule(this.finishPhysicsResync);
        this.scheduleOnce(this.flushPhysicsResync, 0.08);
    }

    flushPhysicsResync() {
        let canvas = this.node.getComponent(cc.Canvas);
        if (canvas && canvas.alignWithScreen) {
            canvas.alignWithScreen();
        }
        this.restoreBeadLocals(this.physSnapshot);
        this.initPhysics();
        this.scheduleOnce(this.finishPhysicsResync, 0);
    }

    finishPhysicsResync() {
        this.restoreBeadLocals(this.physSnapshot);
        this.resyncPhysicsFromNodes();
        this.cachePhysicsLocals();
        this.isRotateSync = false;
    }

    resyncPhysicsFromNodes() {
        let bodies = this.node.getComponentsInChildren(cc.RigidBody);
        for (let i = 0; i < bodies.length; i++) {
            let body = bodies[i];
            if (!body.enabled || body.node === this.spoon) continue;
            body.syncPosition(false);
            body.syncRotation(false);
            if (body.type === cc.RigidBodyType.Dynamic) {
                body.linearVelocity = cc.v2(0, 0);
                body.angularVelocity = 0;
            }
            body.awake = true;
        }
    }

    onOrientationChange(portrait) {
        this.freezePhysicsWorld();
        this.reponsive(portrait);
        this.queuePhysicsResync();
    }

    initPhysics() {
        let physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        physicsManager.gravity = cc.v2(0, -980);
    }

    setupSpoonMix() {
        if (!this.dia && this.main2) {
            this.dia = this.main2.getChildByName("dia");
        }
        if (!this.spoon && this.dia) {
            let items = this.dia.getChildByName("listItem");
            this.spoon = (items && items.getChildByName("thia")) || this.dia.getChildByName("thia") || this.dia.getChildByName("image_029");
        }
        if (!this.spoon) return;

        let body = this.spoon.getComponent(cc.RigidBody);
        if (body) {
            body.enabled = false;
        }
        let col = this.spoon.getComponent(cc.PhysicsBoxCollider);
        if (col) {
            col.enabled = false;
        }

        this.listBeads = this.dia.getChildByName("listItem");
        if (this.listBeads && this.spoon.parent !== this.listBeads) {
            let world = this.spoon.convertToWorldSpaceAR(cc.v2(0, 0));
            this.spoon.parent = this.listBeads;
            this.spoon.setPosition(this.listBeads.convertToNodeSpaceAR(world));
        }
        this.spoonRestY = this.spoon.y;
        this.spoonRestAngle = this.spoon.angle;
        this.updateBeadLayers();
        if (this.listBeads) {
            let groups = cc.game.groupList || [];
            let hasBeadGroup = groups.indexOf("bead") >= 0;
            for (let i = 0; i < this.listBeads.childrenCount; i++) {
                let bead = this.listBeads.children[i];
                if (hasBeadGroup) {
                    bead.group = "bead";
                }
                let body = bead.getComponent(cc.RigidBody);
                if (!body) continue;
                body.linearDamping = 1.2;
                body.angularDamping = 1.5;
                body.gravityScale = 0.45;
            }
        }

        this.mixTouchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesBegan: (touches) => {
                this.onMixTouchStart(touches[0]);
            },
            onTouchesMoved: (touches) => {
                this.onMixTouchMove(touches[0]);
            },
            onTouchesEnded: () => {
                this.onMixTouchEnd();
            },
            onTouchesCancelled: () => {
                this.onMixTouchEnd();
            }
        });
        cc.eventManager.addListener(this.mixTouchListener, 1);
        this.setupMixProgress();
    }

    onDestroy() {
        if (this.mixTouchListener) {
            cc.eventManager.removeListener(this.mixTouchListener);
            this.mixTouchListener = null;
        }
    }

    setupMixProgress() {
        if (!this.dia) return;
        this.progressNode = this.dia.getChildByName("progres");
        if (!this.progressNode) return;
        this.progressNode.active = false;
        this.progressFill = this.progressNode.getChildByName("image_035");
        if (!this.progressFill && this.progressNode.childrenCount > 0) {
            this.progressFill = this.progressNode.children[this.progressNode.childrenCount - 1];
        }
        if (this.progressFill) {
            this.progressFillWidth = this.progressFill.width;
            let sp = this.progressFill.getComponent(cc.Sprite);
            if (sp && sp.type === cc.Sprite.Type.SIMPLE) {
                sp.type = cc.Sprite.Type.FILLED;
                sp.fillType = cc.Sprite.FillType.HORIZONTAL;
                sp.fillStart = 0;
                sp.fillRange = 0;
            }
        }
        this.setMixProgress(0);
    }

    setMixProgress(ratio) {
        ratio = cc.misc.clampf(ratio, 0, 1);
        if (!this.progressFill && !this.progressNode) return;
        if (this.progressNode) {
            let bar = this.progressNode.getComponent(cc.ProgressBar);
            if (bar) {
                bar.progress = ratio;
                return;
            }
        }
        if (!this.progressFill) return;
        let sp = this.progressFill.getComponent(cc.Sprite);
        if (sp && sp.type === cc.Sprite.Type.FILLED) {
            sp.fillRange = ratio;
            return;
        }
        if (this.progressFillWidth > 0) {
            this.progressFill.width = this.progressFillWidth * Math.max(ratio, 0.001);
            return;
        }
        this.progressFill.scaleX = Math.max(ratio, 0.001);
    }

    onMixComplete() {
        if (this.isMixDone) return;
        this.isMixDone = true;
        this.isMixTouch = false;
        this.stopXaoSound();
        this.dropScoopedBeads();
        this.setMixProgress(1);
        if (this.spoon) {
            this.spoon.y = this.spoonRestY;
            this.spoon.angle = this.spoonRestAngle;
        }
        this.moveThia()
    }
    isXao = false
    playXaoSound() {
        if (!this.soundXao) return;
        if (this.idSoundXao != null) return;
        if (this.isXao == false) {
            this.isXao = true;
            this.idSoundXao = cc.audioEngine.play(this.soundXao, true, 0.5);

            this.scheduleOnce(() => {
                this.isXao = false;

            }, 0.2)
        }
    }

    stopXaoSound() {
        if (this.idSoundXao == null) return;
        cc.audioEngine.stop(this.idSoundXao);
        this.idSoundXao = null;
    }
    moveThia() {
        cc.tween(this.spoon).to(0.5, { position: cc.v3(-59, 190), angle: -10 }).start();
        cc.audioEngine.play(this.soundMixDone, false, 0.5);
        this.listStar.active = true;

        cc.tween(this.shadow).to(0.5, { opacity: 180 }).call(() => {
            this.bringListStarAboveShadow();
        }).start();
        this.gio.active = true
        this.showItem.active = true
    }

    getWorldAngle(node: cc.Node) {
        let a = 0;
        let n = node;
        while (n) {
            a += n.angle;
            n = n.parent;
        }
        return a;
    }

    getWorldScale(node: cc.Node) {
        let sx = 1;
        let sy = 1;
        let n = node;
        while (n) {
            sx *= n.scaleX;
            sy *= n.scaleY;
            n = n.parent;
        }
        return cc.v2(sx, sy);
    }

    bringListStarAboveShadow() {
        if (!this.listStar || !this.shadow) return;
        let parent = this.shadow.parent;
        let starWorlds = [];
        for (let i = 0; i < this.listStar.childrenCount; i++) {
            starWorlds.push(this.listStar.children[i].convertToWorldSpaceAR(cc.v2(0, 0)));
        }
        let bowlWorld = this.dia
            ? this.dia.convertToWorldSpaceAR(cc.v2(0, 25))
            : this.listStar.convertToWorldSpaceAR(cc.v2(0, 0));

        this.listStar.parent = parent;
        this.listStar.angle = 0;
        this.listStar.setScale(1, 1);
        this.listStar.setPosition(parent.convertToNodeSpaceAR(bowlWorld));
        this.listStar.active = true;
        if (this.showItem && this.showItem.parent === parent) {
            this.listStar.zIndex = this.showItem.zIndex + 10;
            this.listStar.setSiblingIndex(this.showItem.getSiblingIndex() + 1);
        }
        else {
            this.listStar.zIndex = 100;
            this.listStar.setSiblingIndex(parent.childrenCount - 1);
        }

        for (let i = 0; i < this.listStar.childrenCount; i++) {
            let star = this.listStar.children[i];
            star.setPosition(this.listStar.convertToNodeSpaceAR(starWorlds[i]));
            star.angle = 0;
        }
        this.moveStarsToBowlRow();
    }

    moveStarsToBowlRow() {
        if (!this.listStar) return;
        let count = this.listStar.childrenCount;
        let spacing = 200;
        let startX = -((count - 1) * spacing) / 2;
        for (let i = 0; i < count; i++) {
            let star = this.listStar.children[i];
            cc.tween(star).delay(0.04 * i).to(0.45, {
                position: cc.v3(startX + i * spacing, -60),
                angle: 0,
                scale: 1.4
            }).start();
        }
        let wait = 0.04 * Math.max(count - 1, 0) + 1.4;
        this.scheduleOnce(() => {
            this.flyStarsToBasket();
        }, wait);
    }

    flyStarsToBasket() {
        if (this.shadow) {
            cc.tween(this.shadow).to(0.4, { opacity: 0 }).start();
        }
        if (this.showItem) {
            this.showItem.active = false;
        }
        if (!this.listStar || !this.gio) return;
        let endWorld = this.gio.convertToWorldSpaceAR(cc.v2(0, 0));
        let end = this.listStar.convertToNodeSpaceAR(endWorld);
        let count = this.listStar.childrenCount;
        let arrived = 0;
        for (let i = 0; i < count; i++) {
            let star = this.listStar.children[i];
            let start = cc.v2(star.x, star.y);
            let c1 = cc.v2(start.x + (end.x - start.x) * 0.35, start.y + 140);
            let c2 = cc.v2(end.x - 70, end.y + 90);
            cc.tween(star)
                .delay(0.12 * i)
                .parallel(
                    cc.tween().bezierTo(0.6, c1, c2, cc.v2(end.x, end.y)),
                    cc.tween().to(0.6, { scale: 1, angle: 15 })
                )
                .call(() => {
                    let world = star.convertToWorldSpaceAR(cc.v2(0, 0));
                    star.parent = this.gio;
                    star.setPosition(this.gio.convertToNodeSpaceAR(world));
                    this.scheduleOnce(() => {
                        star.active = false;
                    }, 0.5);
                    arrived++;
                    if (arrived >= count) {
                        this.showKhay();
                    }
                })
                .start();
        }
    }

    showKhay() {
        if (!this.khay && this.main2) {
            this.khay = this.main2.getChildByName("khay");
        }
        if (!this.khay) return;
        this.khay.active = true;
        this.dia.active = false
    }
    getTouchInSpoonParent(event) {
        let screenPos = event.getLocation();
        let worldPos = this.camera.getScreenToWorldPoint(screenPos);
        return this.spoon.parent.convertToNodeSpaceAR(worldPos);
    }

    onMixTouchStart(event) {
        if (this.isMixDone) return;
        this.isMixTouch = true;
        this.lastMixMoveTime = 0;
        if (this.tut) {
            this.tut.active = false;
        }
        if (this.progressNode) {
            this.progressNode.active = true;
        }
        let title = this.main2 ? this.main2.getChildByName("title") : null;
        if (title) {
            title.active = false;
        }
        this.updateBeadLayers();
    }

    onMixTouchMove(event) {
        if (this.isMixDone || !this.isMixTouch) return;
        this.playXaoSound();
        this.moveSpoonByDelta(event);
        let now = Date.now() / 1000;
        if (this.lastMixMoveTime > 0) {
            let dt = now - this.lastMixMoveTime;
            if (dt > 0 && dt < 0.1) {
                this.mixTime += dt;
            }
        }
        this.lastMixMoveTime = now;
        this.setMixProgress(this.mixTime / this.mixNeedTime);
        if (this.mixTime >= this.mixNeedTime) {
            this.onMixComplete();
        }
    }

    onMixTouchEnd() {
        this.isMixTouch = false;
        this.lastMixMoveTime = 0;
        this.stopXaoSound();
        if (!this.spoon) return;
        this.spoon.angle = this.spoonRestAngle;
        this.updateBeadLayers();
    }

    getLocalDelta(event: cc.Event.EventTouch) {
        let cur = this.getTouchInSpoonParent(event);
        let loc = event.getLocation();
        let delta = event.getDelta();
        let prevScreen = cc.v2(loc.x - delta.x, loc.y - delta.y);
        let prevWorld = this.camera.getScreenToWorldPoint(prevScreen);
        let prevLocal = this.spoon.parent.convertToNodeSpaceAR(prevWorld);
        let d = cc.v2(cur.x - prevLocal.x, cur.y - prevLocal.y);
        if (Math.abs(d.x) < 0.2) {
            d.x = delta.x * 0.5;
        }
        if (Math.abs(d.y) < 0.2) {
            d.y = delta.y * 0.5;
        }
        return d;
    }

    clampSpoonInBowl(x, y) {
        let cx = 0;
        let cy = this.spoonRestY;
        let rx = 120;
        let ry = 62;
        let nx = (x - cx) / rx;
        let ny = (y - cy) / ry;
        let len2 = nx * nx + ny * ny;
        if (len2 > 1) {
            let len = Math.sqrt(len2);
            x = cx + nx / len * rx;
            y = cy + ny / len * ry;
        }
        return cc.v2(x, y);
    }

    moveSpoonByDelta(event: cc.Event.EventTouch) {
        if (!this.spoon) return;
        let d = this.getLocalDelta(event);
        let next = this.clampSpoonInBowl(this.spoon.x + d.x, this.spoon.y + d.y);
        this.spoon.setPosition(next.x, next.y);
        this.spoon.angle = this.spoonRestAngle;
        this.stirBeads(d.x, d.y);
        this.followSpoonWithScooped();
        this.updateBeadLayers();
    }

    updateBeadLayers() {
        if (!this.listBeads || !this.spoon) return;
        if (this.spoon.parent !== this.listBeads) {
            let world = this.spoon.convertToWorldSpaceAR(cc.v2(0, 0));
            this.spoon.parent = this.listBeads;
            this.spoon.setPosition(this.listBeads.convertToNodeSpaceAR(world));
            this.spoonRestY = this.spoon.y;
        }
        let scoopWorld = this.getScoopWorldPos();
        let scoop = cc.v2(scoopWorld.x, scoopWorld.y);
        let behind = [];
        let front = [];
        for (let i = 0; i < this.listBeads.childrenCount; i++) {
            let bead = this.listBeads.children[i];
            if (bead === this.spoon) continue;
            let p = bead.convertToWorldSpaceAR(cc.v2(0, 0));
            let dist = cc.v2(p.x, p.y).sub(scoop).mag();
            let id = bead.uuid;
            let scooped = this.beadScoopState[id] === true;
            if (this.scoopedBeadIds[id]) {
                scooped = true;
            }
            else if (!scooped && dist < 240) {
                scooped = true;
            }
            else if (scooped && dist > 380) {
                scooped = false;
            }
            this.beadScoopState[id] = scooped;
            if (scooped) {
                front.push(bead);
            }
            else {
                behind.push(bead);
            }
        }
        let idx = 0;
        for (let i = 0; i < behind.length; i++) {
            behind[i].setSiblingIndex(idx++);
        }
        this.spoon.setSiblingIndex(idx++);
        for (let i = 0; i < front.length; i++) {
            front[i].setSiblingIndex(idx++);
        }
    }

    getScoopVisual() {
        if (!this.spoon) return null;
        return this.spoon.getChildByName("image_038") || this.spoon;
    }

    getScoopLocalOffset() {
        if (this.scoopOffset) return this.scoopOffset;
        return cc.v2(-125, -8);
    }

    getScoopWorldPos() {
        let visual = this.getScoopVisual();
        if (!visual) return cc.v2(0, 0);
        return visual.convertToWorldSpaceAR(this.getScoopLocalOffset());
    }

    getSpoonScoopPos() {
        return this.listBeads.convertToNodeSpaceAR(this.getScoopWorldPos());
    }

    stirBeads(vx, vy) {
        if (!this.listBeads) return;
        let spoonInBeads = this.listBeads.convertToNodeSpaceAR(this.spoon.convertToWorldSpaceAR(cc.v2(0, 0)));
        if (vy > 0.7) {
            this.catchBeadsInScoop();
        }
        else if (vy < -1.2) {
            this.dropScoopedBeads();
        }
        if (Math.abs(vx) < 0.08 && Math.abs(vy) < 0.08) return;
        for (let i = 0; i < this.listBeads.childrenCount; i++) {
            let bead = this.listBeads.children[i];
            if (bead === this.spoon) continue;
            if (this.scoopedBeadIds[bead.uuid]) continue;
            let dx = bead.x - spoonInBeads.x;
            let dy = bead.y - spoonInBeads.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > 200) continue;
            let t = 1 - dist / 200;
            bead.x += vx * (0.55 + 0.7 * t);
            bead.y += vy * 0.35 * t + vx * 0.08 * t * (dx >= 0 ? 1 : -1);
            bead.x = cc.misc.clampf(bead.x, -200, 200);
            bead.y = cc.misc.clampf(bead.y, -75, 45);
            let body = bead.getComponent(cc.RigidBody);
            if (body) {
                body.syncPosition(false);
                body.linearVelocity = cc.v2(vx * 16 * t, vy * 10 * t);
                body.angularVelocity = vx * 0.6 * t;
                body.awake = true;
            }
        }
    }

    catchBeadsInScoop() {
        if (!this.listBeads || !this.spoon) return;
        let scoopedCount = 0;
        for (let k in this.scoopedBeadIds) {
            if (this.scoopedBeadIds.hasOwnProperty(k)) scoopedCount++;
        }
        if (scoopedCount >= 5) return;
        let scoop = this.getSpoonScoopPos();
        for (let i = 0; i < this.listBeads.childrenCount; i++) {
            if (scoopedCount >= 5) break;
            let bead = this.listBeads.children[i];
            if (bead === this.spoon || this.scoopedBeadIds[bead.uuid]) continue;
            let dx = bead.x - scoop.x;
            let dy = bead.y - scoop.y;
            if (Math.abs(dx) > 70 || Math.abs(dy) > 42) continue;
            this.scoopedBeadIds[bead.uuid] = {
                ox: cc.misc.clampf(dx * 0.28, -26, 26),
                oy: cc.misc.clampf(dy * 0.22, -16, 16)
            };
            scoopedCount++;
            let body = bead.getComponent(cc.RigidBody);
            if (body) {
                body.gravityScale = 0;
                body.linearVelocity = cc.v2(0, 0);
                body.angularVelocity = 0;
                body.awake = true;
            }
        }
    }

    followSpoonWithScooped() {
        if (!this.listBeads || !this.spoon) return;
        let scoop = this.getSpoonScoopPos();
        for (let i = 0; i < this.listBeads.childrenCount; i++) {
            let bead = this.listBeads.children[i];
            let st = this.scoopedBeadIds[bead.uuid];
            if (!st) continue;
            bead.x = cc.misc.lerp(bead.x, scoop.x + st.ox, 0.5);
            bead.y = cc.misc.lerp(bead.y, scoop.y + st.oy, 0.55);
            let body = bead.getComponent(cc.RigidBody);
            if (body) {
                body.gravityScale = 0;
                body.linearVelocity = cc.v2(0, 0);
                body.syncPosition(false);
                body.awake = true;
            }
        }
    }

    dropScoopedBeads() {
        if (!this.listBeads) return;
        for (let i = 0; i < this.listBeads.childrenCount; i++) {
            let bead = this.listBeads.children[i];
            if (!this.scoopedBeadIds[bead.uuid]) continue;
            let body = bead.getComponent(cc.RigidBody);
            if (body) {
                body.gravityScale = 0.45;
                body.awake = true;
            }
        }
        this.scoopedBeadIds = {};
    }

    containBeads() {
        if (!this.listBeads) return;
        for (let i = 0; i < this.listBeads.childrenCount; i++) {
            let bead = this.listBeads.children[i];
            if (bead === this.spoon) continue;
            if (this.scoopedBeadIds[bead.uuid]) continue;
            let body = bead.getComponent(cc.RigidBody);
            let nx = bead.x / 230;
            let ny = (bead.y + 10) / 100;
            let len2 = nx * nx + ny * ny;
            if (len2 > 1) {
                let len = Math.sqrt(len2);
                bead.x = nx / len * 228;
                bead.y = ny / len * 98 - 10;
                if (body) {
                    body.syncPosition(false);
                    let v = body.linearVelocity;
                    body.linearVelocity = cc.v2(v.x * 0.5, Math.min(v.y, 20) * 0.4);
                    body.awake = true;
                }
            }
            if (body) {
                let v = body.linearVelocity;
                let speed = v.mag();
                if (speed > 120) {
                    body.linearVelocity = v.mul(120 / speed);
                }
            }
        }
    }



    flattenNodeScale(parent: cc.Node) {
        let sx = parent.scaleX;
        let sy = parent.scaleY;
        if (sx === 1 && sy === 1) return;
        let snapshot = parent.children.map((child) => {
            return {
                node: child,
                worldPos: child.convertToWorldSpaceAR(cc.v2(0, 0)),
                scaleX: child.scaleX * sx,
                scaleY: child.scaleY * sy,
            };
        });
        parent.setScale(1, 1);
        snapshot.forEach((item) => {
            item.node.setScale(item.scaleX, item.scaleY);
            item.node.setPosition(parent.convertToNodeSpaceAR(item.worldPos));
        });
    }


    isOpenDoor = false
    btn_openDoor() {
        if (this.isOpenDoor == true) return;
        this.isOpenDoor = true;
        this.door.scale = 2
        this.cua.getComponent(cc.Animation).play()
        this.door.getChildByName("text").active = false
        this.scheduleOnce(() => {
            this.cua.getComponent(cc.Button).enabled = false
        }, 0.3)
    }
    isClickBox = 0
    clickItem(boxValue, tag) {
        if (this.isClickBox >= 5) return;
        let arrPos = [cc.v3(0, 56), cc.v3(109, 47), cc.v3(-105, 40), cc.v3(-52, 22), cc.v3(61, 22)]
        this.isClickBox++
        let box = cc.instantiate(this.listPreBox[tag])
        box.parent = this.listItem2;
        box.position = boxValue.position;
        cc.tween(box).to(0.5, { position: arrPos[this.isClickBox - 1] }).call(() => {

        }).start()
        if (this.isClickBox == 1) {
            this.btnDone.active = true
        }
        if (this.isClickBox == 5) {
            this.scheduleOnce(() => {
                this.btn_done()

            }, 0.5)
        }

    }
    isDone = false
    countItem = 0
    btn_done() {
        if (this.isDone == true) return;
        this.isDone = true
        this.btnDone.getComponent(cc.Button).enabled = false;
        this.main2.active = true;
        let arrPos = [cc.v3(0, 36), cc.v3(-158, 123), cc.v3(187, 128), cc.v3(211, -59), cc.v3(-203, -40)]
        let count = 0
        this.countItem = this.listItem2.childrenCount
        for (let i = this.listItem2.childrenCount - 1; i >= 0; i--) {
            let child = this.listItem2.children[i];
            child.parent = this.listBox
            child.scale = 2.3;
            child.position = arrPos[count]
            child.getComponent(cc.Button).enabled = true
            count++
        }
        cc.tween(this.main2).to(0.35, { scale: 0.5 }).start()
    }
    isCountNoti = 0
    moveToVong(box) {
        let count = this.isCountNoti
        cc.audioEngine.play(this.listSoundNoti[count], false, 1);
        // this.scheduleOnce(() => {
        this.listNoti.children[count].active = true
        // }, 0.4)
        this.isCountNoti++
        this.scheduleOnce(() => {
            let midPos = cc.v2(-50, 100);
            let endPos = cc.v2(0, -30);
            let pos = box.parent.convertToWorldSpaceAR(box.position);
            pos = this.ro.convertToNodeSpaceAR(pos);
            let startPos = cc.v2(pos.x, pos.y)
            box.parent = this.ro;
            box.position = pos;

            cc.tween(box).bezierTo(0.7, startPos, midPos, endPos).call(() => {

            }).start()
            cc.tween(box).delay(0.5).to(0.3, { scale: 1.5 }).to(0.08, { scale: 1.4 }).start()
        }, 0.4)
        if (this.isCountNoti == 4) {
            this.linkToStore.active = true
            console.log("show end")
        }

    }

    onEndGame(value) {
        cc.audioEngine.play(this.soundEnd, false, 1)
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
        if (this.isRotateSync) return;
        if (this.spoon && !this.isMixDone) {
            this.spoon.angle = this.spoonRestAngle;
        }
        if (!this.isMixTouch) {
            this.containBeads();
        }
    }
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1

        this.logo.scale = (logic) ? 0.6 : 0.4
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        if (canvas.alignWithScreen) {
            canvas.alignWithScreen();
        }
        this.camera.node.position = cc.v3(0, 0)
        this.listNoti.scale = (logic) ? 1.1 : 0.7

        if (logic == true) {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            this.camera.node.position = cc.v3(0, -200)

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.8
                this.camera.node.position = cc.v3(0, -40)

            }
        }
        else {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            this.camera.zoomRatio = 0.37
            this.camera.node.position = cc.v3(0, -140)

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.36
                this.camera.node.position = cc.v3(0, -140)

            }
        }


    }
}
