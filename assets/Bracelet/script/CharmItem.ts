
const { ccclass, property } = cc._decorator;

@ccclass('CharmItem')
export default class CharmItem extends cc.Component {

    @property(cc.SpriteFrame)
    listImg: cc.SpriteFrame[] = [];

    /** Điểm neo treo lên dây — đặt node con tên hangPoint ở đỉnh charm. */
    @property(cc.Node)
    hangPoint: cc.Node = null;

    loadIMG(id: number) {
        this.node.children[0].getComponent(cc.Sprite).spriteFrame = this.listImg[id];
    }

    getHangLocalOffset(): cc.Vec2 {
        const hang = this.hangPoint
            || this.node.getChildByName('hangPoint')
            || this.node.getChildByName('hookNode');
        if (hang) {
            return cc.v2(hang.x, hang.y);
        }

        const icon = this.node.getChildByName('icon');
        if (icon) {
            const h = icon.height * Math.abs(icon.scaleY);
            const ay = icon.anchorY;
            return cc.v2(0, h * (1 - ay));
        }

        return cc.v2(0, 55);
    }
}
