

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
    soundSellDone
        : cc.AudioClip = null;
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
    // @property(cc.Node)
    // btnDonut: cc.Node = null
    // @property(cc.Prefab)
    // preDonut: cc.Prefab = null
    // @property(cc.Node)
    // listDonutPlace: cc.Node = null;
    // @property(cc.Node)
    // listDonutSub: cc.Node = null;
    // @property(cc.Node)
    // listKhayPlace: cc.Node = null;
    // @property(cc.Node)
    // listKhaySub: cc.Node = null
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
    @property(cc.Node)
    dia: cc.Node = null;
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
    onLoad() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        this.initPhysics();
    }

    protected start(): void {
        cc.audioEngine.play(this.soundBg, true, 0.3)
        this.lastPortrait = this.isPortrait();
        this.reponsive(this.lastPortrait);
        this.setupSpoonMix();
    }

    isPortrait() {
        let size = cc.view.getFrameSize();
        return size.width < size.height;
    }

    initPhysics() {
        let physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        physicsManager.gravity = cc.v2(0, -980);
        let Bits = cc.PhysicsManager.DrawBits;
        // physicsManager.debugDrawFlags = Bits.e_aabbBit | Bits.e_pairBit | Bits.e_centerOfMassBit | Bits.e_jointBit | Bits.e_shapeBit;
    }

    setupSpoonMix() {
        if (!this.dia && this.main2) {
            this.dia = this.main2.getChildByName("dia");
        }
        if (!this.spoon && this.dia) {
            this.spoon = this.dia.getChildByName("image_029");
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

        this.node.on(cc.Node.EventType.TOUCH_START, this.onMixTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMixTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onMixTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onMixTouchEnd, this);
    }

    getTouchInSpoonParent(event: cc.Event.EventTouch) {
        let screenPos = event.getLocation();
        let worldPos = this.camera.getScreenToWorldPoint(screenPos);
        return this.spoon.parent.convertToNodeSpaceAR(worldPos);
    }

    onMixTouchStart(event: cc.Event.EventTouch) {
        this.isMixTouch = true;
        if (this.tut) {
            this.tut.active = false;
        }
        this.updateBeadLayers();
    }

    onMixTouchMove(event: cc.Event.EventTouch) {
        if (!this.isMixTouch) return;
        this.moveSpoonByDelta(event);
    }

    onMixTouchEnd() {
        this.isMixTouch = false;
        if (!this.spoon) return;
        this.spoon.y = this.spoonRestY;
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
        return d;
    }

    moveSpoonByDelta(event: cc.Event.EventTouch) {
        if (!this.spoon) return;
        let d = this.getLocalDelta(event);
        let x = cc.misc.clampf(this.spoon.x + d.x, this.spoonMinX, this.spoonMaxX);
        this.spoon.setPosition(x, this.spoonRestY);
        this.spoon.angle = this.spoonRestAngle;
        this.stirBeads(d.x);
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
        let scoopWorld = this.spoon.convertToWorldSpaceAR(cc.v2(0, -25));
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
            if (!scooped && dist < 240) {
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

    stirBeads(vx) {
        if (!this.listBeads || Math.abs(vx) < 0.08) return;
        let spoonInBeads = this.listBeads.convertToNodeSpaceAR(this.spoon.convertToWorldSpaceAR(cc.v2(0, 0)));
        for (let i = 0; i < this.listBeads.childrenCount; i++) {
            let bead = this.listBeads.children[i];
            if (bead === this.spoon) continue;
            let dx = bead.x - spoonInBeads.x;
            let dy = bead.y - spoonInBeads.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > 200) continue;
            let t = 1 - dist / 200;
            bead.x += vx * (0.55 + 0.7 * t);
            bead.y += vx * 0.08 * t * (dx >= 0 ? 1 : -1);
            bead.x = cc.misc.clampf(bead.x, -200, 200);
            bead.y = cc.misc.clampf(bead.y, -75, 45);
            let body = bead.getComponent(cc.RigidBody);
            if (body) {
                body.syncPosition(false);
                body.linearVelocity = cc.v2(vx * 16 * t, 0);
                body.angularVelocity = vx * 0.6 * t;
                body.awake = true;
            }
        }
    }

    containBeads() {
        if (!this.listBeads) return;
        for (let i = 0; i < this.listBeads.childrenCount; i++) {
            let bead = this.listBeads.children[i];
            if (bead === this.spoon) continue;
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
        if (this.isCountNoti == this.countItem) {
            this.linkToStore.active = true
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
        if (this.spoon) {
            this.spoon.y = this.spoonRestY;
            this.spoon.angle = this.spoonRestAngle;
        }
        if (!this.isMixTouch) {
            this.containBeads();
        }
        let portrait = this.isPortrait();
        if (portrait === this.lastPortrait) return;
        this.lastPortrait = portrait;
        this.reponsive(portrait);
    }
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1

        this.logo.scale = (logic) ? 0.6 : 0.4
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
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
