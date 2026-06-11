

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteFrame)
    listImg: cc.SpriteFrame[] = []

    start() {

    }
    loadIMG(id) {
        this.node.children[0].getComponent(cc.Sprite).spriteFrame = this.listImg[id]
    }
    // update (dt) {}
}
