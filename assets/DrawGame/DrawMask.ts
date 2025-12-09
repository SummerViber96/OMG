

const { ccclass, property } = cc._decorator;

const MAX_DIST = 80;

@ccclass
export default class DrawMask extends cc.Component {

    @property(cc.Node)
    drawArea: cc.Node = null; // Node chứa Mask và Graphics

    @property(cc.Graphics)
    drawer: cc.Graphics = null; // GraphicsMaskDrawer

    @property([cc.Vec2])
    targetPoints: cc.Vec2[] = []; // Các điểm theo thứ tự outline
    @property(cc.Node)
    listLevel: cc.Node[] = []

    private index: number = 0;
    private drawing: boolean = false;

    onLoad() {



        this.drawer.lineWidth = 40;
        this.drawer.lineCap = cc.Graphics.LineCap.ROUND;
        this.drawer.lineJoin = cc.Graphics.LineJoin.ROUND;

        this.drawArea.on(cc.Node.EventType.TOUCH_START, this.onStart, this);
        this.drawArea.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.drawArea.on(cc.Node.EventType.TOUCH_END, this.onEnd, this);
        this.drawer.fillColor = cc.Color.WHITE;
        this.drawer.lineCap = cc.Graphics.LineCap.ROUND;
        let data = this.listLevel[0].children[0]
       


        for (let i = 0; i < data.childrenCount; i++) {
            let pos = data.children[i].position
            pos = data.convertToWorldSpaceAR(pos)
            pos = this.drawArea.convertToNodeSpaceAR(pos)
            this.targetPoints.push(cc.v2(pos.x, pos.y))
        }
    }

    getPos(ev: cc.Touch): cc.Vec2 {
        return this.drawArea.convertToNodeSpaceAR(ev.getLocation());
    }

    onStart(ev: cc.Event.EventTouch) {
        this.index = 0;
        this.drawer.clear();

        const pos = this.getPos(ev.getTouches()[0]);
        if (!this.isValidG(pos)) return this.fail();

        this.drawer.moveTo(pos.x, pos.y);
        this.drawing = true;
    }

    onMove(ev: cc.Event.EventTouch) {
        console.log("move")
        if (!this.drawing) return;

        const pos = this.getPos(ev.getTouches()[0]);

        if (this.isValidG(pos)) {
            this.drawer.lineTo(pos.x, pos.y);
            this.drawer.stroke();
            console.log("ve")

            this.index++;
            if (this.index >= this.targetPoints.length - 2) this.win();
        }
        //  else this.fail();
    }

    onEnd() {
        if (this.index < this.targetPoints.length - 2) this.fail();
    }

    isValidG(pos: cc.Vec2): boolean {
        const target = this.targetPoints[this.index];
        return pos.sub(target).mag() < MAX_DIST;
    }

    fail() {
        this.drawing = false;
        cc.log("FAIL!");
        // TODO: Reset nếu muốn
    }

    win() {
        this.drawing = false;
        cc.log("WIN!!");
    }
}