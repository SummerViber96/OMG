const { ccclass, property } = cc._decorator;

@ccclass
export default class DrawCheck extends cc.Component {

    @property(cc.Graphics)
    drawGraphics: cc.Graphics = null;       // nét người chơi vẽ

    @property(cc.Graphics)
    targetGraphics: cc.Graphics = null;     // nét mẫu (màu xám)

    @property
    threshold: number = 25;                 // phạm vi sai số cho phép

    @property
    completePercentRequired: number = 0.85; // phải hoàn thành 85%

    @property([cc.Vec2])
    targetPoints: cc.Vec2[] = [];           // danh sách điểm mẫu

    private isDrawing: boolean = false;
    private drawnPoints: cc.Vec2[] = [];
    private matchedCount: number = 0;

    onLoad() {
        this.drawSquareAndCircle();
        this.generateTargetPoints();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    // Chuyển tọa độ màn hình → local node
    private toLocal(pos: cc.Vec2): cc.Vec2 {
        return this.node.convertToNodeSpaceAR(pos);
    }

    onTouchStart(event: cc.Event.EventTouch) {
        this.isDrawing = true;
        this.matchedCount = 0;
        this.drawnPoints = [];

        const p = this.toLocal(event.getLocation());

        this.drawGraphics.clear();
        this.drawGraphics.lineWidth = 8;
        this.drawGraphics.strokeColor = cc.color(0, 255, 0);

        this.drawGraphics.moveTo(p.x, p.y);
        this.drawnPoints.push(p);
    }

    onTouchMove(event: cc.Event.EventTouch) {
        if (!this.isDrawing) return;
console.log("move")
        const p = this.toLocal(event.getLocation());
        this.drawnPoints.push(p);

        // Vẽ nét
        this.drawGraphics.lineTo(p.x, p.y);
        this.drawGraphics.stroke();

        // Kiểm tra theo mẫu
        console.log(this.isNearTarget(p))
        if (!this.isNearTarget(p)) {
            this.fail();
        }
    }

    onTouchEnd() {
        if (!this.isDrawing) return;

        this.isDrawing = false;

        const percent = this.matchedCount / this.targetPoints.length;

        if (percent >= this.completePercentRequired) {
            this.win();
        } else {
            this.fail();
        }
    }

    // Kiểm tra điểm người vẽ có nằm gần đường mẫu không
    private isNearTarget(p: cc.Vec2): boolean {
        for (let i = 0; i < this.targetPoints.length; i++) {
            const tp = this.targetPoints[i];
            if (p.sub(tp).mag() <= this.threshold) {
                this.matchedCount++;
                return true;
            }
        }
        return false;
    }

    private win() {
        cc.log("WIN!");
        // TODO: hiệu ứng win hoặc load level
    }

    private fail() {
        cc.log("FAIL!");
        this.isDrawing = false;
        this.drawGraphics.clear();
        // TODO: hiệu ứng fail, reset level
    }
    drawSquareAndCircle() {
        const g = this.targetGraphics;
        g.clear();
        g.lineWidth = 10;
        g.strokeColor = cc.color(180, 180, 180);

        // Vẽ hình vuông
        g.moveTo(-100, 50);
        g.lineTo(100, 50);
        g.lineTo(100, -150);
        g.lineTo(-100, -150);
        g.lineTo(-100, 50);

        // Vẽ hình tròn phía dưới
        g.circle(0, -200, 120);

        g.stroke();
    }
    generateTargetPoints() {
        this.targetPoints = [];

        // --- Square ---
        for (let t = 0; t <= 1; t += 0.01) {
            this.targetPoints.push(cc.v2(-100 + t * 200, 50));
        }
        for (let t = 0; t <= 1; t += 0.01) {
            this.targetPoints.push(cc.v2(100, 50 - t * 200));
        }
        for (let t = 0; t <= 1; t += 0.01) {
            this.targetPoints.push(cc.v2(100 - t * 200, -150));
        }
        for (let t = 0; t <= 1; t += 0.01) {
            this.targetPoints.push(cc.v2(-100, -150 + t * 200));
        }

        // --- Circle ---
        const center = cc.v2(0, -200);
        const radius = 120;

        for (let a = 0; a <= Math.PI * 2; a += 0.05) {
            this.targetPoints.push(
                cc.v2(
                    center.x + Math.cos(a) * radius,
                    center.y + Math.sin(a) * radius
                )
            );
        }
    }
}