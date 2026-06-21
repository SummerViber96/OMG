

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Node)
    tutMusic: cc.Node = null
    @property(cc.Node)
    tutNoti: cc.Node = null
    @property(cc.Node)
    tutNoti2: cc.Node = null
    @property(cc.Node)
    tutNoti3: cc.Node = null
    @property(cc.Prefab)
    preNl: cc.Prefab = null;
    @property(cc.Prefab)
    pre: cc.Prefab = null;
    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    @property(cc.Node)
    notiEnd: cc.Node = null
    @property(cc.AudioClip)
    nhac:cc.AudioClip=null

    private _rainSpawnCb: (() => void) | null = null;
    private _isRaining = false;

    protected onLoad(): void {
        this.updateResponsive();
        cc.view.setResizeCallback(() => {
            this.updateResponsive();
        });
        cc.audioEngine.play(this.nhac,true,0.5)
        // this.rainNl()
    }
    start() {
        this.scheduleOnce(() => {
            this.tutNoti.active = true
        }, 2)

        this.scheduleOnce(() => {
            cc.tween(this.tutNoti).by(0.4, { opacity: -255, position: cc.v3(0, -100) }).call(() => {
                this.tutNoti.active = false
            }).start()
        }, 5)

        this.scheduleOnce(() => {
            this.tutNoti3.active = true;
            this.rainCoin(5, 0.03);
        }, 6)
        this.scheduleOnce(() => {
            this.anim.setAnimation(0, "Win", true);
        }, 6.5)
        this.scheduleOnce(() => {
            cc.tween(this.tutNoti3).by(0.4, { opacity: -255, position: cc.v3(0, -100) }).call(() => {
                this.tutNoti3.active = false
            }).start()
            this.stopRain()
        }, 8)
        this.scheduleOnce(() => {
            this.tutNoti2.active = true
            this.actionG()
        }, 10)
        this.scheduleOnce(() => {
            cc.tween(this.tutNoti2).by(0.4, { opacity: -255, position: cc.v3(0, -100) }).call(() => {
                this.tutNoti2.active = false
            }).start()
        }, 10.5 + 1)
        this.scheduleOnce(() => {
            let char = this.anim.node.parent
            char.children[0].active = false;
            char.children[1].active = true
        }, 12.1)
        this.scheduleOnce(() => {
            this.notiEnd.active = true
        }, 14)
    }
    actionG() {
        this.rainNl(5, 0.03);
    }

    /** Mưa năng lượng rơi từ trên xuống */
    rainNl(duration: number = 3, spawnInterval: number = 0.03) {
        this.startRain(this.preNl, duration, spawnInterval);
    }

    /** Mưa coin rơi từ trên xuống */
    rainCoin(duration: number = 3, spawnInterval: number = 0.03) {
        this.startRain(this.pre, duration, spawnInterval);
    }

    startRain(prefab: cc.Prefab, duration: number = 3, spawnInterval: number = 0.03) {
        if (!prefab || this._isRaining) return;
        this._isRaining = true;
        let elapsed = 0;
        this._rainSpawnCb = () => {
            this.spawnRainItem(prefab);
            elapsed += spawnInterval;
            if (elapsed >= duration) {
                this.stopRain();
            }
        };
        this._rainSpawnCb();
        this.schedule(this._rainSpawnCb, spawnInterval);
    }

    stopRain() {
        this._isRaining = false;
        if (this._rainSpawnCb) {
            this.unschedule(this._rainSpawnCb);
            this._rainSpawnCb = null;
        }
    }

    spawnRainItem(prefab: cc.Prefab) {
        const item = cc.instantiate(prefab);
        this.node.addChild(item);

        const halfW = cc.winSize.width / 2;
        const halfH = cc.winSize.height / 2;
        const marginX = 60;
        const startX = (Math.random() * 2 - 1) * (halfW - marginX);
        const startY = halfH + 80 + Math.random() * 120;
        const endY = -halfH - 80;
        const driftX = (Math.random() - 0.5) * 100;
        const duration = 2.8 + Math.random() * 1.5;
        const scale = 0.5 + Math.random() * 0.7;
        const spin = (Math.random() > 0.5 ? 1 : -1) * (60 + Math.random() * 120);

        item.setPosition(startX, startY);
        item.setScale(scale);
        // item.angle = Math.random() * 360;

        cc.tween(item)
            .parallel(
                cc.tween().to(duration, { position: cc.v3(startX + driftX, endY, 0) }, { easing: "linear" }),
                cc.tween().by(duration, { angle: spin })
            )
            .call(() => item.destroy())
            .start();
    }
    updateResponsive() {
        let deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        } else {
            this.reponsive(false);
        }
    }
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 0.85

        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false

        this.tutNoti.scale = (logic) ? 2 : 1
        this.tutNoti.position = (logic) ? cc.v3(0, -1200) : cc.v3(0, -376.553)
        this.tutNoti2.scale = (logic) ? 2 : 1
        this.tutNoti2.position = (logic) ? cc.v3(0, -1200) : cc.v3(0, -376.553)
        this.tutNoti3.scale = (logic) ? 2 : 1
        this.tutNoti3.position = (logic) ? cc.v3(0, -1200) : cc.v3(0, -376.553)
        // this.tutMusic.scale=(logic)?1.6:0.6
        if (logic == true) {

            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            const TALL_PHONE_MIN_RATIO = 2.0;        // iPhone X ~2.16, 20:9 Android ~2.22
            this.camera.zoomRatio = 1.7
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {

                if (aspectRatio > 2.2) {
                    this.camera.zoomRatio = 1.75
                }
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 1.5

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
                this.camera.zoomRatio = 0.85


            }
        }


    }
    update(dt) { }
}
