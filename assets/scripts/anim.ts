

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {



    start() {

    }
    idle() {
        this.node.getComponent(cc.Animation).play("popup_idle")
    }
    finish(){
        this.node.parent.destroy()
    }
    ds(){
        this.node.destroy()
    }
    eff(){
    }
    dsParent(){
        
    }
    // update (dt) {}
}
