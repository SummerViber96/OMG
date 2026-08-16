

const { ccclass, property } = cc._decorator;
cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    camera: cc.Camera = null
    @property(cc.VideoPlayer)
    video: cc.VideoPlayer = null;

    @property(cc.Node)
    btnCollect: cc.Node = null;

    @property(cc.Node)
    btnFry: cc.Node = null;

    @property(cc.Node)
    btnServe: cc.Node = null;

    @property(cc.Node)
    btnClean: cc.Node = null;

    @property(cc.Node)
    linkToStore: cc.Node = null;

    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundConfirm: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundWin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundEfx: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundGirl: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundCycle: cc.AudioClip = null

    @property(cc.Node)
    textGuild: cc.Node = null
    @property(cc.Node)
    textGuild2: cc.Node = null
    @property(cc.Node)
    endCard: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null
    @property(cc.Node)
    phaohoa: cc.Node = null
    @property(cc.Node)
    handGuild: cc.Node = null
    @property(cc.Sprite)
    fillBar: cc.Sprite = null
    @property(cc.Node)
    bar: cc.Node = null
    @property(cc.Label)
    percentLabel: cc.Label = null
    soundEfxId = 0;

    currScreenWidth = null;

    isHorizontal = true;

    isPlay1 = false;

    adChanel = '{{__adv_channels_adapter__}}'

    // LIFE-CYCLE CALLBACKS:
    idSoundCycle = null;
    idSoundGirl = null;
    decaySpeed = 10
    onLoad() {

    }

    start() {

        cc.audioEngine.play(this.soundBg, false, 1)
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }

        this.scheduleOnce(() => {
            this.video.play();

        }, 0.2)
        this.scheduleOnce(() => {
            this.video.stop();
            this.btnCollect.getComponent(cc.Button).enabled = true
            this.btnCollect.getChildByName("hand").active = true;
            // this.textGuild2.active = true;
        }, 1.2);

        this._stopCallback = () => {
            this.stopCycle();
        };
        // this.video.node.on('completed', this.onVideoEnd, this);

    }
    isStop = true
    // _stopCallback=null
    playCyle() {
        if (this.handGuild.active == true) {
            this.handGuild.active = false
            this.fillBar.fillRange = 0;
            this.percentLabel.string = "0%"; // 👈 init

            this.idSoundCycle = cc.audioEngine.play(this.soundCycle, true, 1);
            this.idSoundGirl = cc.audioEngine.play(this.soundGirl, true, 1)

        }

        this.video.resume();
        cc.audioEngine.resume(this.idSoundCycle)
        cc.audioEngine.resume(this.idSoundGirl)

        this.isStop = false;
    }

    stopCycle() {
        cc.audioEngine.pause(this.idSoundCycle)
        cc.audioEngine.pause(this.idSoundGirl)

        this.isStop = true;
        this.video.pause(); // hoặc pause nếu cần
    }

    btn_cycle() {
        if (this.isStop) {
            this.playCyle();

        }
        this.addProgress();

        // this.textGuild.active = false;

        cc.audioEngine.play(this.soundConfirm, false, 1)

        this.unschedule(this._stopCallback);
        this.scheduleOnce(this._stopCallback, 1);
    }

    onVideoEnd() {
        this.showEndcard();
    }

    showEndcard() {
        this.isStop = false
        this.linkToStore.active = true
        console.log("endGame")
        // cc.audioEngine.play(this.soundWin, false, 1)
        // this.btnCollect.active = false
        // this.textGuild.active = false
        // this.endCard.active = true
        // this.textGuild.active = false;
        // this.btnCollect.getChildByName("hand").active = false;
        // this.textGuild2.active = false;
        // this.phaohoa.active = true
        // this.scheduleOnce(() => {
        //     this.linkToStore.active = true;

        // }, 0.5)
    }
    maxProgress = 100
    currentProgress = 0
    addProgress() {
        // lực giảm dần (giống ads)
        let power = Math.max(3, 10 - this.currentProgress * 0.05);

        this.currentProgress += power;
        this.currentProgress = Math.min(this.currentProgress, this.maxProgress);

        let percent = this.currentProgress / this.maxProgress;

        // mượt
        cc.tween(this.fillBar)
            .to(1, { fillRange: percent })
            .start();
        let percentText = Math.floor(percent * 100);
        this.updatePercentLabel(percent);
        if (percent >= 1) {
            // this.onFull();
            // this.showEndcard();

        }
        if (percent > 0.8) {
            this.percentLabel.node.scale = 1.2;
        }
        if (percent > 0.5) {
            this.textGuild.children[0].getComponent(cc.Label).string = "Keep going! Almost there!"
        }
        else {
            this.textGuild.children[0].getComponent(cc.Label).string = "Can you make her fit?"


        }
    }
    updatePercentLabel(targetPercent) {
        let obj = { value: parseFloat(this.percentLabel.string) || 0 };

        cc.tween(obj)
            .to(1, { value: targetPercent * 100 }, {
                progress: (start, end, current, t) => {
                    let val = Math.floor(start + (end - start) * t);
                    this.percentLabel.string = val + "%";
                    if (val == 90) {
                        this.showEndcard();

                    }
                    return current;
                }
            })
            .start();
    }
    onFull() {
        // stop mọi thứ
        this.stopCycle();

        // đảm bảo full
        this.fillBar.fillRange = 1;

        // show endcard
        this.showEndcard();
    }
    setScreenSize(isHorizontal) {
        this.camera.zoomRatio = 1
        this.node.getComponent(cc.Canvas).fitWidth = (isHorizontal) ? true : false;
        this.node.getComponent(cc.Canvas).fitHeight = (isHorizontal) ? false : true;
        // this.linkToStore.scale=(isHorizontal)?0.6

        let canvas = this.node.getComponent(cc.Canvas);
        canvas.fitHeight = (isHorizontal) ? true : false
        canvas.fitWidth = (isHorizontal) ? false : true
        this.textGuild.y = 405.732
        this.bar.y = 503.311
        this.btnCollect.scale = 1
        this.bar.scale = 0.45;
        this.textGuild.scale = 1
        this.video.node.scale = 6.4
        // this.btnCollect.getComponent(cc.Widget).bottom = 62.23
        this.btnCollect.y = -507.769

        if (isHorizontal == true) {
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;

            // this.camera.node.position = cc.v3(-70, 0)

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                this.video.node.scale = 6.5

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {



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
                this.video.node.scale = 7.4
                // this.btnCollect.getComponent(cc.Widget).bottom = 140
                // console.log("man x")
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.72
                this.btnCollect.scale = 0.8
                this.btnCollect.y = -507.769 + 140
                // this.btnCollect.getComponent(cc.Widget).bottom = 50
                this.textGuild.y = 460.895 - 140
                this.bar.y = 550.017 - 160
                this.textGuild.scale = 0.8;
                this.bar.scale = 0.3

            }
        }



    }
    isvertical = true
    responsive() {
        let deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width >= deviceResolution.height) {
            this.setScreenSize(true);
            this.isvertical = false
        }
        else if (deviceResolution.width < deviceResolution.height) {
            this.setScreenSize(false);
            this.isvertical = true
        }
    }


    update(dt) {
        this.responsive();
        if (this.isStop && this.currentProgress > 0) {

            this.currentProgress -= this.decaySpeed * dt;
            this.currentProgress = Math.max(0, this.currentProgress);

            let target = this.currentProgress / this.maxProgress;

            // lerp mượt
            this.fillBar.fillRange = cc.misc.lerp(this.fillBar.fillRange, target, 0.2);

            let percentText = Math.floor(target * 100);
            this.percentLabel.string = percentText + "%";
        }
    }
}
