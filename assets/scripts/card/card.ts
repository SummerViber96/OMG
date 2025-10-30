

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    iconImg: cc.Sprite = null;
    @property(cc.SpriteFrame)
    imgOn: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    imgOff: cc.SpriteFrame = null;
    @property(cc.Node)
    lbTitle: cc.Node = null;
    @property(cc.Node)
    lbCurrent: cc.Node = null;
    @property(cc.Integer)
    current = 1;
    isFirst = false
    start() {
        // this.setOff()
    }
    setOn() {
        if (!this.isFirst) {
            this.isFirst = true;
            this.node.getChildByName("hand").active = true
        }
        this.iconImg.spriteFrame = this.imgOn;
        this.lbTitle.color = cc.color().fromHEX("#824420");
        this.lbCurrent.color = cc.color().fromHEX("#824420")
    }
    clickOff(){
        this.node.getChildByName("hand").active = false

    }
    setOff() {
        this.iconImg.spriteFrame = this.imgOff;
        this.lbTitle.color = cc.color().fromHEX("#515151");
        this.lbCurrent.color = cc.color().fromHEX("#515151")
    }
    update(dt) {
        this.lbCurrent.getComponent(cc.Label).string = this.current.toString()
        if (globalThis.ruby >= this.current) {
            this.setOn();
        }
        else {
            this.setOff()
        }
    }
}
