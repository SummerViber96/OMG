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
    completePercent: number = 0.98;


    private targetPoints: cc.Vec2[] = [];
    private isDrawing: boolean = false;
    private matchedCount: number = 0;
    private matrixPoints: cc.Vec2[] = [];
    localPoints = []
    countFail = 0
    gamePlay = null
    targetPoint = cc.v2(0, 0)
    isStartPoint = null
    isEndPoint = null
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
        // console.log(this.targetPoints)
        // this.localPoints = []
    }


    /** TOUCH START */
    private onTouchStart(event: cc.Event.EventTouch) {
        if (this.isDrawing) return
        this.isDrawing = true;
        this.matchedCount = 0;
        // console.log("start")
        const pos = this.node.convertToNodeSpaceAR(event.getLocation());

        this.drawGraphics.clear();
        this.drawGraphics.lineWidth = 28;
        this.drawGraphics.strokeColor = cc.color(0, 255, 0);
        // this.drawGraphics.moveTo(pos.x, pos.y);
        this.isStartPoint = null
        if (this.isNearPath(pos)) {
            this.drawGraphics.moveTo(this.targetPoint.x, this.targetPoint.y);
            // this.drawGraphics.moveTo(pos2.x, pos2.y);

        }
        else {
            // console.log("no")
        }

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
            // this.fail();
            // this.drawGraphics.lineTo(pos.x, pos.y);
            // this.drawGraphics.stroke();
        }
        else {
            // this.drawGraphics.lineTo(pos.x, pos.y);
            // let pos2 = this.targetPoints[this.arrCheck[this.arrCheck.length - 1]]
            // this.drawGraphics.lineTo(pos2.x, pos2.y);

            // this.drawGraphics.stroke();
            //ve lai
            // console.log("draw",this.isStartPoint, this.arrCheck[this.arrCheck.length])
            // for (let i = this.isStartPoint + 1; i <= this.arrCheck[this.arrCheck.length-1]; i++) {
            //     let pos2 = this.targetPoints[i]
            //     this.drawGraphics.lineTo(pos2.x, pos2.y);
            //     this.drawGraphics.stroke();
            // }
            this.drawGraphics.clear();
            this.drawGraphics.lineWidth = 28;
            this.drawGraphics.strokeColor = cc.color(0, 255, 0);
            this.drawGraphics.moveTo(this.targetPoints[this.isStartPoint].x, this.targetPoints[this.isStartPoint].y);

            for (let i = 0; i < this.arrCheck.length; i++) {
                let pos2 = this.targetPoints[this.arrCheck[i]]
                this.drawGraphics.lineTo(pos2.x, pos2.y);
                this.drawGraphics.stroke();
            }
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
        const uniqueSet = new Set(this.arrCheck);
        const uniqueArray2 = Array.from(uniqueSet);
        const percent = uniqueArray2.length / this.targetPoints.length;
        let arr = this.arrCheck
        this.arrCheck = []

        if (percent >= this.completePercent) {
            this.win();
        } else {
            this.fail(arr);
        }
        this.matchedCount = 0

    }
    arrCheck = []
    /** KIỂM TRA CÓ GẦN ĐƯỜNG MẪU KHÔNG */
    private isNearPath(p: cc.Vec2): boolean {
        for (let i = 0; i < this.targetPoints.length; i++) {

            if (p.sub(this.targetPoints[i]).mag() <= this.threshold) {
                if (this.arrCheck.includes(i)) {
                    if (this.arrCheck[this.arrCheck.length - 1] == i) {
                        let pos = this.targetPoints[i]
                        this.targetPoint = pos
                        return true;

                    }
                    else {
                        // console.log("trung diem")
                        // return false
                    }
                }
                else {
                    let nextPos = this.targetPoints[i]
                    if (this.arrCheck.length > 0 && nextPos.sub(this.targetPoints[this.arrCheck[this.arrCheck.length - 1]]).mag() <= 100) {
                        this.matchedCount++;
                        this.arrCheck.push(i)
                        if (this.isStartPoint == null) {
                            this.isStartPoint = i

                        }
                        let pos = this.targetPoints[i]
                        this.targetPoint = pos
                        return true;
                    }
                    else if (this.arrCheck.length == 0) {
                        this.matchedCount++;
                        this.arrCheck.push(i)
                        if (this.isStartPoint == null) {
                            this.isStartPoint = i

                        }
                        let pos = this.targetPoints[i]
                        this.targetPoint = pos
                        return true;
                    }





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

    private fail(arr) {
        cc.log("❌ FAIL !!!");
        if (this.isEndGame) return;
        this.isEndGame = true
        // this.drawGraphics.strokeColor = cc.Color.RED
        this.drawGraphics.clear();
        this.drawGraphics.lineWidth = 28;
        this.drawGraphics.strokeColor = cc.Color.RED
        this.drawGraphics.moveTo(this.targetPoints[this.isStartPoint].x, this.targetPoints[this.isStartPoint].y);

        for (let i = 0; i < arr.length; i++) {
            let pos2 = this.targetPoints[arr[i]]
            this.drawGraphics.lineTo(pos2.x, pos2.y);
            this.drawGraphics.stroke();
        }
        this.gamePlay.fail()
        if (this.isDelayDem == false) {
            this.isDelayDem = true
            this.countFail++

            this.scheduleOnce(() => {
                this.isDelayDem = false

            }, 1)
        }
        cc.audioEngine.play(this.gamePlay.soundFail, false, 1)

        if (this.countFail == 3) {
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