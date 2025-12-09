const { ccclass, property } = cc._decorator;

@ccclass
export default class DrawController extends cc.Component {

    @property(cc.Node)
    drawNode: cc.Node = null; // chứa Graphics

    @property(cc.Node)
    spark: cc.Node = null; // vệt sáng sprite nhỏ

    @property(cc.Float)
    tolerance: number = 20; // khoảng cho phép lệch khỏi đường mẫu
    @property(cc.Node)
    level1: cc.Node = null

    private gfx: cc.Graphics;
    private samplePoints: cc.Vec2[] = [];
    private isDrawing: boolean = false;
    private lastValidPoint: cc.Vec2 = null;

    onLoad() {
        this.gfx = this.drawNode.children[0].getComponent(cc.Graphics);
        this.gfx.lineWidth = 20;
        this.gfx.strokeColor = cc.Color.GREEN;

        // TODO: load path từ JSON hoặc polygon
        this.samplePoints = this.getSamplePath();

        this.spark.opacity = 0;



        let data = this.level1.children[0]
        for (let i = 0; i < data.childrenCount; i++) {
            let pos = data.children[i].position
            pos = data.convertToWorldSpaceAR(pos)
            pos = this.drawNode.convertToNodeSpaceAR(pos)
            this.samplePoints.push(cc.v2(pos.x, pos.y))
        }
    }

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    private onTouchStart(event: cc.Event.EventTouch) {
        const pos = this.node.convertToNodeSpaceAR(event.getLocation());
        if (!this.checkOnPath(pos)) return;

        this.isDrawing = true;
        this.lastValidPoint = pos;
        this.gfx.moveTo(pos.x, pos.y);
        this.showSpark(pos);
    }

    private onTouchMove(event: cc.Event.EventTouch) {
        if (!this.isDrawing) return;

        const pos = this.node.convertToNodeSpaceAR(event.getLocation());

        if (!this.checkOnPath(pos)) {
            this.fail();
            return;
        }

        this.gfx.lineTo(pos.x, pos.y);
        this.gfx.stroke();
        this.lastValidPoint = pos;
        this.moveSpark(pos);
    }

    private onTouchEnd() {
        this.isDrawing = false;
        this.spark.opacity = 0;
    }

    // ---- CHECK NEAR PATH ----
    private checkOnPath(pos: cc.Vec2): boolean {
        let nearest = Infinity;
        for (let p of this.samplePoints) {
            const d = pos.sub(p).mag();
            if (d < nearest) nearest = d;
            if (d < this.tolerance) return true;
        }
        return false;
    }

    // ---- SPARK EFFECT (GLOW) ----
    private showSpark(pos: cc.Vec2) {
        this.spark.opacity = 255;
        this.spark.stopAllActions();
        this.spark.position = cc.v3(pos.x,pos.y);
        this.spark.scale = 1;
        cc.tween(this.spark)
            .repeatForever(
                cc.tween().to(0.3, { scale: 1.5, opacity: 200 }).to(0.3, { scale: 1, opacity: 255 })
            )
            .start();
    }

    private moveSpark(pos: cc.Vec2) {
        this.spark.position = cc.v3(pos.x,pos.y);
    }

    private fail() {
        this.isDrawing = false;
        this.spark.opacity = 0;
        cc.log("FAIL!!!");
    }

    private getSamplePath(): cc.Vec2[] {
        // Ví dụ tạo 1 đường cong
        return [
            new cc.Vec2(-200, 0),
            new cc.Vec2(-100, 50),
            new cc.Vec2(0, 100),
            new cc.Vec2(100, 50),
            new cc.Vec2(200, 0)
        ];
    }
}
