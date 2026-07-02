// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    isZoom = false;
    start() {

    }
    btn_zoom() {
        if(this.isZoom){
            this.isZoom = false;
            // this.node.scale = 1;
            cc.tween(this.node).to(0.2, { scale: 0.28,position: cc.v3(330, 820, 0) }).start();
        }else{
            this.isZoom = true;
            cc.tween(this.node).to(0.2, { scale: 0.6,position: cc.v3(210, 700, 0) }).start();
            // this.node.scale = 1.5;
        }
    }

    // update (dt) {}
}
