
const { ccclass, property } = cc._decorator;

@ccclass('CharmItem')
export default class CharmItem extends cc.Component {

    @property(cc.SpriteFrame)
    listImg: cc.SpriteFrame[] = [];
    @property(cc.Integer)
    tag = 0
    colorIndex = 0
    colorIMG = 0
    /** Điểm neo treo lên dây — đặt node con tên hangPoint ở đỉnh charm. */
    @property(cc.Node)
    hangPoint: cc.Node = null;

    /** Khoảng cách tối thiểu trên dây khi thả charm này (theo path). */
    @property
    slotSpacing: number = 130;

    /** Callback va chạm khi charm đang treo trên vòng (CordRoundGame gắn). */
    onCordBeginContact: ((otherCollider: cc.PhysicsCollider) => void) | null = null;

    /** Cocos gọi khi RigidBody.enabledContactListener = true. */
    onBeginContact(
        _contact: any,
        _selfCollider: cc.PhysicsCollider,
        otherCollider: cc.PhysicsCollider
    ) {
        if (this.onCordBeginContact) {
            this.onCordBeginContact(otherCollider);
        }
    }

    loadIMG(id: number, tag) {
        this.colorIndex = id
        this.colorIMG = this.listImg[id]
        this.node.children[0].getComponent(cc.Sprite).spriteFrame = this.listImg[id];
    }
    getColor() {
        return this.colorIMG
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
