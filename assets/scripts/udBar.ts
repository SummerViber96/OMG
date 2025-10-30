// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteFrame)
    imgBua: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    imgBua2: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    imgMoney: cc.SpriteFrame = null;
    isud = 0
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    ud1() {
        if (this.isud == 0) {
            this.node.getChildByName("Axe2").getComponent(cc.Sprite).spriteFrame = this.imgBua;
            this.node.getChildByName("200").getComponent(cc.Sprite).spriteFrame = this.imgMoney;
            this.isud++
        }
        else if (this.isud == 1){
            this.node.getChildByName("Axe2").getComponent(cc.Sprite).spriteFrame = this.imgBua2;

        }
     

    }
    // update (dt) {}
}
