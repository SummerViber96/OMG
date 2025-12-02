const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property(cc.Prefab)
    levelPrefab: cc.Prefab = null;

    @property(cc.Node)
    levelHolder: cc.Node = null;

    @property(cc.Node)
    drawNode: cc.Node = null;

    current: cc.Node = null;
    levelIndex = 1;

    onLoad() {
        this.loadLevel(this.levelIndex);

        this.drawNode.on("DRAW_END", this.onDrawEnd, this);
    }

    loadLevel(id: number) {
        if (this.current) {
            this.current.destroy();
            this.current = null;
        }

        // Tạo instance của prefab level
        this.current = cc.instantiate(this.levelPrefab);
        this.levelHolder.addChild(this.current);

        const sprite = this.current.getComponent(cc.Sprite);

        // Load đúng kiểu SpriteFrame
        cc.resources.load(`levels/level${id}`, cc.SpriteFrame, (err: Error, spriteFrame: cc.SpriteFrame) => {
            if (err) {
                console.log("❌ Lỗi load SpriteFrame:", err);
                return;
            }

            sprite.spriteFrame = spriteFrame;
        });
    }

    onDrawEnd(points: cc.Vec2[]) {
        let outline = this.current.getComponent("LevelOutline");

        if (outline.isDrawCorrect(points)) {
            cc.log("✔ Level Hoàn Thành");
            this.levelIndex++;
            this.loadLevel(this.levelIndex);
        } else {
            cc.log("❌ Sai outline");
        }
    }
}