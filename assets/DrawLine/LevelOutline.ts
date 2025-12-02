const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelOutline extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    @property(cc.PolygonCollider)
    poly: cc.PolygonCollider = null;

    private isReady = false;

    onLoad() {
        this.generateCollider();
    }

    generateCollider() {
        let sf = this.sprite.spriteFrame;
        if (!sf) return;

        // Lấy ảnh của SpriteFrame
        let tex = sf.getTexture();
        let img = tex.getHtmlElementObj() as HTMLImageElement;

        // Tạo canvas tạm để đọc pixel
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let w = canvas.width;
        let h = canvas.height;

        // Chúng ta chỉ tìm điểm outline (pixel alpha > 20)
        let outlinePoints: cc.Vec2[] = [];

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {

                let id = (y * w + x) * 4;
                let alpha = imgData.data[id + 3];

                if (alpha > 50) {
                    outlinePoints.push(new cc.Vec2(x - w / 2, h / 2 - y));
                }
            }
        }

        // Đơn giản hóa polygon (Ramer–Douglas–Peucker)
        let simplePts = this.simplifyPolygon(outlinePoints, 2);

        this.poly.points = simplePts;
        this.isReady = true;
    }


    simplifyPolygon(points: cc.Vec2[], tolerance: number): cc.Vec2[] {
        // Simplify khá nhẹ
        if (points.length < 3) return points;

        let out: cc.Vec2[] = [];
        let last = points[0];
        out.push(last);

        for (let i = 1; i < points.length; i++) {
            if (points[i].sub(last).mag() > tolerance) {
                last = points[i];
                out.push(last);
            }
        }
        return out;
    }

    /** Kiểm tra toàn bộ đường vẽ có nằm trong outline không */
    public isDrawCorrect(points: cc.Vec2[]): boolean {
        if (!this.poly || this.poly.points.length < 3) return false;

        let poly = this.poly.points;

        for (let i = 0; i < points.length; i++) {
            if (!this.pointInPoly(points[i], poly)) {
                return false;
            }
        }

        return true;
    }
    private pointInPoly(pt: cc.Vec2, poly: cc.Vec2[]): boolean {
        let inside = false;

        for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
            let xi = poly[i].x, yi = poly[i].y;
            let xj = poly[j].x, yj = poly[j].y;

            let intersect = ((yi > pt.y) !== (yj > pt.y)) &&
                (pt.x < (xj - xi) * (pt.y - yi) / (yj - yi + 0.00001) + xi);

            if (intersect) inside = !inside;
        }

        return inside;
    }
}