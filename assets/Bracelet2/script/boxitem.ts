

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Integer)
    tag = 0

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    gamePlay = null;
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut")
    }
    btn_click() {
        this.node.getComponent(cc.Animation).play()
        this.gamePlay.clickItem(this.node,this.tag)
    }
    show(){
        this.node.getChildByName("vong").children[0].scale=0
        this.node.getChildByName("vong").active=true
        this.gamePlay.moveToVong(this.node)
    }
    btn_cut(){
        cc.tween(this.node).to(0.4,{position:cc.v3(0,1114)}).call(()=>{
        this.node.getComponent(cc.Animation).play("box_cut")

        }).start()
    }
    // update (dt) {}
}
