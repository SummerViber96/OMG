const { ccclass, property } = cc._decorator;

@ccclass
export default class DrawLine extends cc.Component {

    @property(cc.Graphics)
    g: cc.Graphics = null;

    points: cc.Vec2[] = [];
    drawing = false;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onEnd, this);
    }

    onStart(event: cc.Event.EventTouch) {
        const p = this.node.convertToNodeSpaceAR(event.getLocation());
        this.g.clear();
        this.g.moveTo(p.x, p.y);
        this.points = [p];
        this.drawing = true;
    }

    onMove(event: cc.Event.EventTouch) {
        if (!this.drawing) return;

        const p = this.node.convertToNodeSpaceAR(event.getLocation());
        this.points.push(p);

        this.g.lineTo(p.x, p.y);
        this.g.stroke();
    }

    onEnd(event: cc.Event.EventTouch) {
        this.drawing = false;
        this.node.emit("DRAW_END", this.points);
    }
}
