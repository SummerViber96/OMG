const { ccclass, property } = cc._decorator;

@ccclass
export default class DrawCheck extends cc.Component {

    @property(cc.Graphics)
    targetGraphics: cc.Graphics = null;

    @property(cc.Graphics)
    drawGraphics: cc.Graphics = null;

    @property
    threshold: number = 25;

    @property
    completePercent: number = 0.9;


    private targetPoints: cc.Vec2[] = [];
    private isDrawing: boolean = false;
    private matchedCount: number = 0;
    private matrixPoints: cc.Vec2[] = [];
    localPoints = []
    countFail = 0
    gamePlay = null
    onLoad() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameManager")
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        // this.drawSampleShape();
        // this.generateTargetPoints()
    }
    loadLevel(data) {
        // let points = data.children[0].getComponent(cc.PolygonCollider).points
        let points = []
        for (let i = 0; i < data.children[0].childrenCount; i++) {
            let pos = data.children[0].children[i].position
            pos = data.children[0].convertToWorldSpaceAR(pos)
            pos = this.node.convertToNodeSpaceAR(pos)
            points.push(pos)
        }
        this.targetPoints = points
        console.log(this.targetPoints)
        // console.log(this.targetPoints)
        // this.localPoints = []
    }

    public loadMatrixJSON(matrix: number[][]) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let outlinePoints: cc.Vec2[] = [];
        let cellSize = 20;   // scale mỗi ô pixel -> 20px

        // Quét ma trận
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                if (matrix[y][x] === -1) {

                    let worldX = (x - cols / 2) * cellSize;
                    let worldY = (rows / 2 - y) * cellSize;

                    outlinePoints.push(cc.v2(worldX, worldY));
                }
            }
        }

        // // Lưu lại
        // this.matrixPoints = outlinePoints;
        // cc.log("Total outline pixel points:", outlinePoints.length);

        // // Vẽ lên targetGraphics
        // this.drawFromPixelPoints(outlinePoints);

        // // Generate lại targetPoints
        // this.targetPoints = outlinePoints;
        this.matrixPoints = outlinePoints;
        this.targetPoints = outlinePoints;     // FIX: targetPoints chính là pixel points
        cc.log("Total outline pixel points:", outlinePoints.length);

        // FIX: vẽ đúng dạng pixel, không nối zig-zag
        this.drawPixelDots(outlinePoints);
    }
    private drawPixelDots(points: cc.Vec2[]) {
        const g = this.targetGraphics;
        g.clear();
        g.lineWidth = 1;
        g.fillColor = cc.color(180, 180, 180);

        for (let p of points) {
            g.circle(p.x, p.y, 5);
            g.fill();
        }
    }
    // private drawFromPixelPoints(points: cc.Vec2[]) {
    //     const g = this.targetGraphics;
    //     g.clear();
    //     g.lineWidth = 8;
    //     g.strokeColor = cc.color(180, 180, 180);

    //     if (points.length == 0) return;

    //     // Nối trực tiếp (hoặc bạn có thể nhóm theo cluster)
    //     g.moveTo(points[0].x, points[0].y);

    //     for (let i = 1; i < points.length; i++) {
    //         g.lineTo(points[i].x, points[i].y);
    //     }

    //     g.stroke();
    // }
    /** VẼ HÌNH MẪU */
    private drawSampleShape() {
        const g = this.targetGraphics;
        g.lineWidth = 10;
        g.strokeColor = cc.color(180, 180, 180);

        // Square
        g.moveTo(-200, 100);
        g.lineTo(200, 100);
        g.lineTo(200, -300);
        g.lineTo(-200, -300);
        g.lineTo(-200, 100);

        // Circle
        g.circle(0, -200, 240);

        g.stroke();
    }

    /** TẠO DANH SÁCH ĐIỂM OUTLINE */
    private generateTargetPoints() {
        this.targetPoints = [];

        // Square
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

        // Circle
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

    /** TOUCH START */
    private onTouchStart(event: cc.Event.EventTouch) {
        if (this.isDrawing) return
        this.isDrawing = true;
        this.matchedCount = 0;

        const pos = this.node.convertToNodeSpaceAR(event.getLocation());

        this.drawGraphics.clear();
        this.drawGraphics.lineWidth = 14;
        this.drawGraphics.strokeColor = cc.color(0, 255, 0);
        this.drawGraphics.moveTo(pos.x, pos.y);
    }

    /** TOUCH MOVE */
    isTargetPoint = null
    private onTouchMove(event: cc.Event.EventTouch) {
        if (!this.isDrawing) return;
        if (this.gamePlay.hand.active == true) {
            this.gamePlay.hand.active = false
        }
        const pos = this.node.convertToNodeSpaceAR(event.getLocation());

        // Vẽ


        // Kiểm tra
        if (!this.isNearPath(pos)) {
            this.fail();
            this.drawGraphics.lineTo(pos.x, pos.y);
            this.drawGraphics.stroke();
        }
        else {
            this.drawGraphics.lineTo(pos.x, pos.y);
            this.drawGraphics.stroke();
            console.log("draw")
        }


        const uniqueSet = new Set(this.arrCheck);
        const uniqueArray2 = Array.from(uniqueSet);
        const percent = uniqueArray2.length / this.targetPoints.length;
        // this.arrCheck = []

        if (percent >= this.completePercent) {
            this.win();
        }
    }

    /** TOUCH END */
    private onTouchEnd() {
        if (!this.isDrawing) return;
        this.isDrawing = false;
        console.log(this.arrCheck)
        const uniqueSet = new Set(this.arrCheck);
        const uniqueArray2 = Array.from(uniqueSet);
        const percent = uniqueArray2.length / this.targetPoints.length;
        this.arrCheck = []

        if (percent >= this.completePercent) {
            this.win();
        } else {
            this.fail();
        }
        this.matchedCount = 0

    }
    arrCheck = []
    /** KIỂM TRA CÓ GẦN ĐƯỜNG MẪU KHÔNG */
    private isNearPath(p: cc.Vec2): boolean {
        for (let i = 0; i < this.targetPoints.length; i++) {

            if (p.sub(this.targetPoints[i]).mag() <= this.threshold) {
                // console.log(this.check(i), i)
                if (this.arrCheck.includes(i)) {
                    if (this.arrCheck[this.arrCheck.length - 1] == i) {
                        let pos = this.targetPoints[i]
                        // this.isTargetPoint = pos
                        return true;

                    }
                    else {
                        console.log("trung diem")
                        // return false
                    }
                }
                else {
                    this.matchedCount++;
                    this.arrCheck.push(i)
                    let pos = this.targetPoints[i]
                    this.isTargetPoint = pos
                    return true;

                }




                // return true;
            }
        }

        return false;
    }
    check(value) {
        for (let i = 0; i < this.arrCheck.length; i++) {
            if (value == i) return true;
        }
        return false;
    }
    /** WIN */
    private win() {
        cc.log("🎉 WIN !!!");
        if (this.isEndGame) return;
        this.isEndGame = true
        cc.Canvas.instance.node.getComponent("GameManager").winGame()
    }
    clearGame() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.drawGraphics.clear()
        this.targetGraphics.clear()
    }
    /** FAIL */
    isEndGame = false
    isDelayDem = false

    private fail() {
        cc.log("❌ FAIL !!!");
        if (this.isEndGame) return;
        this.isEndGame = true
        this.drawGraphics.strokeColor = cc.Color.RED
        this.gamePlay.fail()
        if (this.isDelayDem == false) {
            this.isDelayDem = true
            this.countFail++

            this.scheduleOnce(() => {
                this.isDelayDem = false

            }, 1)
        }
        cc.audioEngine.play(this.gamePlay.soundFail, false, 1)

        if (this.countFail == 2) {
            this.gamePlay.nextLevel()
        }
        else {
            this.scheduleOnce(() => {
                this.drawGraphics.clear();
                this.isDrawing = false;
                this.arrCheck = []
                this.isEndGame = false

            }, 0.5)
        }

    }
    /** Load outline từ JSON */
    public loadOutlineFromJSON(data: any) {
        const g = this.targetGraphics;
        g.clear();
        g.lineWidth = 10;
        g.strokeColor = cc.color(180, 180, 180);

        // --- Vẽ đường thẳng ---
        if (data.lines && data.lines.length > 1) {
            g.moveTo(data.lines[0].x, data.lines[0].y);
            for (let i = 1; i < data.lines.length; i++) {
                g.lineTo(data.lines[i].x, data.lines[i].y);
            }
            g.stroke();
        }

        // --- Vẽ circle ---
        if (data.circles) {
            for (let c of data.circles) {
                g.circle(c.cx, c.cy, c.r);
            }
            g.stroke();
        }

        // Sau khi vẽ → generate lại điểm cần kiểm tra
        this.generateTargetPointsFromGraphics(data);
    }
    private generateTargetPointsFromGraphics(data: any) {
        this.targetPoints = [];

        // Lines
        if (data.lines && data.lines.length > 1) {
            for (let i = 0; i < data.lines.length - 1; i++) {
                let p1 = data.lines[i];
                let p2 = data.lines[i + 1];

                for (let t = 0; t <= 1; t += 0.02) {
                    this.targetPoints.push(cc.v2(
                        p1.x + (p2.x - p1.x) * t,
                        p1.y + (p2.y - p1.y) * t
                    ));
                }
            }
        }

        // Circles
        if (data.circles) {
            for (let c of data.circles) {
                for (let a = 0; a <= Math.PI * 2; a += 0.05) {
                    this.targetPoints.push(
                        cc.v2(
                            c.cx + Math.cos(a) * c.r,
                            c.cy + Math.sin(a) * c.r
                        )
                    );
                }
            }
        }

        cc.log("Total target points:", this.targetPoints.length);
    }
}