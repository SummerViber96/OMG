

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    level1: cc.Prefab = null
    @property(cc.Node)
    mainGame: cc.Node = null;
    @property(cc.Node)
    win: cc.Node = null;
    @property(cc.Node)
    level1Node: cc.Node = null
    @property(cc.Node)
    listLevelNode: cc.Node[] = []
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundWin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundFail: cc.AudioClip = null;
    @property(cc.Node)
    hand: cc.Node = null
    @property(cc.Node)
    linkToStore: cc.Node = null
    level = 1
    isLocalLevel = null;
    isNextLevel = null
    start() {
        cc.audioEngine.play(this.soundBg, true, 0.5)
        this.loadLevel(this.level)

    }
    // loadPolygonLevel(id: number) {
    //     cc.resources.load(`levels_polygon/level${id}`, cc.JsonAsset, (err, json: cc.JsonAsset) => {
    //         const raw = json.json as number[][];
    //         const points = raw.map(p => cc.v2(p[0], p[1]));

    //         const node = new cc.Node("LevelPoly");
    //         node.parent = this.levelHolder;

    //         const poly = node.addComponent(cc.PolygonCollider);
    //         poly.points = points;
    //         poly.apply();

    //         this.currentPolygon = points;
    //     });
    // }
    levelNode = null
    loadLevel(level) {


        if (this.level == 4) {
            this.linkToStore.active = true
            let data = this.listLevelNode[level - 1];
            data.scale = 0.2
            data.active = true;
            this.isLocalLevel = data
            cc.tween(data).to(0.3, { scale: 1.1 }).to(0.05, { scale: 1 }).start()
            return;
        }
        const prefab = this.level1
        const levelNode = cc.instantiate(prefab);
        this.node.addChild(levelNode);
        levelNode.getComponent("DrawCheck").loadLevel(this.listLevelNode[level - 1])
        this.levelNode = levelNode
        let data = this.listLevelNode[level - 1];
        data.scale = 0.2
        data.active = true;
        this.isLocalLevel = data
        cc.tween(data).to(0.3, { scale: 1.1 }).to(0.05, { scale: 1 }).start()
        // Gọi hàm load
        // levelNode.getComponent("DrawCheck").loadLevel();
        // levelNode.getComponent("DrawCheck").loadOutlineFromJSON(levelDataJSON);
        // levelNode.getComponent("DrawCheck").loadMatrixJSON(levelDataJSON);
    }
    nextLevel() {
        let first = this.isLocalLevel;
        this.levelNode.getComponent("DrawCheck").clearGame()
        cc.tween(first).to(0.3, { scale: 0 }).call(() => {
            first.active = false
        }).start()
        this.level++
        this.scheduleOnce(() => {
            this.loadLevel(this.level)

        }, 0.5)

    }
    winGame() {
        cc.audioEngine.play(this.soundWin, false, 1)
        this.win.getComponent(cc.Animation).play()
        let first = this.isLocalLevel;
        this.levelNode.getComponent("DrawCheck").clearGame()
        cc.tween(first).to(0.3, { scale: 0 }).call(() => {
            first.active = false
        }).start()
        this.level++
        this.scheduleOnce(() => {
            this.loadLevel(this.level)
        }, 0.5)
    }
    fail() {

    }
    // update (dt) {}
}
