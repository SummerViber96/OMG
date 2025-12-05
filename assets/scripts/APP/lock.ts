
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Integer)
    lockCurrent = 100
    @property(cc.Sprite)
    bg: cc.Sprite = null
    start() {

    }
    setGray(img) {
        img.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', img));

    }
    offGray(img) {
        img.setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', img));
    }
    update(dt) {
        if (globalThis.gold >= this.lockCurrent) {
            this.offGray(this.bg)
        }
        else {
            this.setGray(this.bg)

        }
    }
}
