globalThis.idString = 0;
globalThis.idCharm = 0;
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    scene1: cc.Node = null
    @property(cc.Node)
    scene2: cc.Node = null
    @property(cc.Node)
    stringNode: cc.Node = null

    @property(cc.Node)
    plate: cc.Node = null
    @property(cc.Node)
    hand2: cc.Node = null
    @property(cc.Node)
    charmNode: cc.Node = null
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.Label)
    title: cc.Label = null
    @property(cc.Node)
    listCordRound: cc.Node = null;
    @property(cc.Node)
    stringBot:cc.Node=null;
    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2();
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }
    start() {
        cc.audioEngine.play(this.soundBg, true, 0.5)
        cc.game.setFrameRate(60);
    }


    btn_startGame() {
        this.scene2.active = true
        cc.tween(this.scene1).to(0.4, { opacity: 0 }).call(() => {
            this.scene1.active = false
            this.hand2.active = true
        }).start()
    }
    btn_cord(event) {
        let btn = event.currentTarget;
        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;
        cc.tween(this.stringNode).to(0.4, { opacity: 0 }).start()
        this.stringNode.active = false
        this.charmNode.active = true
        this.title.string = "CHOOSE CHARMS"


    }
    btn_cord2(event) {
        let btn = event.currentTarget;
        btn.getComponent(cc.Button).enabled = false;
        btn.active = false;
        this.stringNode.active = false;
        cc.tween(this.charmNode).to(0.4, { opacity: 0 }).call(() => {
            this.charmNode.active = false;
        }).start()
        cc.tween(this.plate).to(0.4, { position: cc.v3(0, 230, 0) }).start()
        this.title.string = "MAKE BRACELET"
        this.startGame2();

    }
    startGame2() {
        let id = globalThis.idString;
        console.log("id", id);
        let stringAround = this.listCordRound.children[id];
        stringAround.active = true;
        stringAround.opacity = 0;
        this.charmNode.getComponent("CharmGame").OffEvent();
        cc.tween(stringAround).to(0.4, { opacity: 255 }).start()
        if (this.stringBot) {
            this.stringBot.active = false;
        }
        const cordGame = this.listCordRound.getComponent("CordRoundGame");
        if (cordGame) {
            cordGame.startBraceletMode();
        }
    }

    // update (dt) {}
}
