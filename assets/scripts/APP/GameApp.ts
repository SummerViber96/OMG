

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    sceneMusic: cc.Node = null;
    @property(cc.Node)
    sceneGun: cc.Node = null;
    @property(cc.Node)
    sceneMain: cc.Node = null;
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.Node)
    tut: cc.Node = null
    @property(cc.Node)
    hand: cc.Node = null
    @property(cc.Node)
    endCard: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Camera)
    camera: cc.Camera = null
    adChanel = '{{__adv_channels_adapter__}}'

    start() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    }
    startGame() {
        cc.tween(this.tut).to(0.3, { opacity: 0 }).call(() => {
            this.tut.active = false;
            this.hand.active = true
        }).start()
        this.scheduleOnce(() => {
            this.onEndGame();
        }, 20)
    }
    onEndGame() {
        this.endCard.active = true;
        this.linkToStore.active = true
    }
    btn_choose(event, value) {
        console.log(value)
        switch (value) {
            case "0":
                this.hand.active = false

                this.sceneMusic.position = cc.v3(3000, 0)
                this.sceneMusic.active = true
                // this.sceneMusic.active = true
                this.sceneMusic.getComponent("mainMusic").loadData(1)
                this.sceneMusic.getComponent(cc.Animation).play()
                // this.hand.active = true
                break;
            case "1":
                this.sceneMusic.position = cc.v3(3000, 0)
                this.sceneMusic.active = true

                this.sceneMusic.getComponent("mainMusic").loadData(2)
                this.sceneMusic.getComponent(cc.Animation).play()
                break;
            case "2":
                this.sceneGun.position = cc.v3(3000, 0)
                this.sceneGun.active = true
                this.sceneGun.getComponent("mainGun").loadData(1)
                this.sceneGun.getComponent(cc.Animation).play()
                this.sceneMain.active = false
                break;
            case "3":
                this.sceneMusic.position = cc.v3(3000, 0)
                this.sceneMusic.active = true

                this.sceneMusic.getComponent("mainMusic").loadData(3)
                this.sceneMusic.getComponent(cc.Animation).play()
                break;
            case "4":
                this.sceneMusic.position = cc.v3(3000, 0)
                this.sceneMusic.active = true

                this.sceneMusic.getComponent("mainMusic").loadData(4)
                this.sceneMusic.getComponent(cc.Animation).play()
                break;
            case "5":
                this.sceneGun.position = cc.v3(3000, 0)
                this.sceneGun.active = true
                this.sceneGun.getComponent("mainGun").loadData(2)
                this.sceneGun.getComponent(cc.Animation).play()
                this.sceneMain.active = false

                break;
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
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        if (logic == true) {
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
                console.log("check iphonex")

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
        this.camera.zoomRatio = 0.7


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

            }
        }

    }
}
