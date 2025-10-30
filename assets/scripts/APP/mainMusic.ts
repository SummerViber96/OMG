
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    listicon: cc.Node = null;
    @property(cc.Node)
    loopbtn: cc.Node = null;
    @property(cc.Sprite)
    playBtn: cc.Sprite = null
    @property(cc.AudioClip)
    soundDog: cc.AudioClip = null
    @property(cc.AudioClip)
    soundAirHorn: cc.AudioClip = null
    @property(cc.AudioClip)
    soundPhoto: cc.AudioClip = null
    @property(cc.AudioClip)
    soundMeme: cc.AudioClip = null;
    @property(cc.SpriteFrame)
    soundOn: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    soundOff: cc.SpriteFrame = null;
    @property(cc.Label)
    nametxt: cc.Label = null;
    @property(cc.Node)
    hand: cc.Node = null
  

    //data :1 hair 2:airhorn 3:meme 4:dog
    isLoop = false;
    isPlay = false;
    isValue = null;
    isTargetIcon = null;
    isVolum = 1
    isICON = null
    start() {
        // this.isTargetIcon=this.listicon.children[0]
        // this.loadData(2)
    }
    loadData(value) {
        this.isValue = value;
        if (this.isTargetIcon) {
            this.isTargetIcon.active = false

        }
        this.listicon.children[value - 1].active = true
        this.isICON = this.listicon.children[value - 1]
        this.isTargetIcon = this.listicon.children[value - 1]
        let arrText = ["Hair Clipper", "Air Horn", "Meme", "Dog"]
        this.nametxt.string = arrText[value - 1]

    }    // update (dt) {}
    audioID = null
    btn_Play() {
        this.hand.active = false
        if (!this.isPlay) {
            this.isPlay = true
            this.playBtn.spriteFrame = this.soundOn
            let music = null
            switch (this.isValue) {
                case 1:
                    music = this.soundPhoto
                    this.isICON.children[0].active = true;
                    // cc.audioEngine.playMusic(this.soundPhoto, this.isLoop)
                    break;
                case 2:
                    // this.nametxt.string = "Air Horn"
                    music = this.soundAirHorn
                    this.isICON.children[0].active = true;

                    // cc.audioEngine.playMusic(this.soundAirHorn, this.isLoop)
                    break;
                case 3:
                    // this.nametxt.string = "Meme"
                    music = this.soundMeme
                    // cc.audioEngine.playMusic(this.soundMeme, this.isLoop)
                    break;
                case 4:
                    // this.nametxt.string = "Dog"
                    music = this.soundDog
                    // cc.audioEngine.playMusic(this.soundDog, this.isLoop)
                    break;
            }

            this.audioID = cc.audioEngine.play(music, this.isLoop, this.isVolum)
            cc.audioEngine.setFinishCallback(this.audioID, () => {
                cc.log("Phát nhạc xong rồi!");
                this.isPlay = false
                this.playBtn.spriteFrame = this.soundOff
                // Thực hiện hành động khác ở đây
            });
        }
        else {
            this.isPlay = false
            this.playBtn.spriteFrame = this.soundOff
            cc.audioEngine.stop(this.audioID);
            if (this.isICON.children[0]) {
                this.isICON.children[0].active = false
            }
        }
    }
    btnLoop() {
        this.isLoop = (this.isLoop == true) ? false : true
        this.loopbtn.children[0].position = (this.isLoop) ? cc.v3(36, 0) : cc.v3(-19, 0)
        this.loopbtn.children[0].color = (this.isLoop) ? cc.color().fromHEX("#FF3927") : cc.color().fromHEX("#FFFFFF")
    }
    btn_back() {
        if (this.isICON.children[0]) {
            this.isICON.children[0].active = false
        }
        cc.audioEngine.stop(this.audioID)
        this.isPlay = false
        this.playBtn.spriteFrame = this.soundOff
        this.node.getComponent(cc.Animation).play("scene_close");
          this.scheduleOnce(() => {
            this.node.active = false
        }, 0.3)
    }
    setVolume(value) {
        this.isVolum = value
        if (this.audioID != null) {
            cc.audioEngine.setVolume(this.audioID, value)

        }
    }
}
