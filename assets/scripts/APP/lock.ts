
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Integer)
    lockCurrent = 100
    @property(cc.Sprite)
    bg: cc.Sprite = null
    @property(cc.String)
    tag = ""
    gameplay = null
    start() {
        this.gameplay = cc.Canvas.instance.node.getComponent("GameApp")
    }
    setGray(img) {
        img.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', img));

    }
    offGray(img) {
        img.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', img));
    }
    update(dt) {
        if (globalThis.gold >= this.lockCurrent) {
            if ((this.tag == "buger" &&this.gameplay.isNoBuger==false)||(this.tag == "veget" &&this.gameplay.isNoVeget==false)||this.tag == "meat"){
                this.offGray(this.bg)

            }
        }
        else {

            this.setGray(this.bg)

        }
    }
}
