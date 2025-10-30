// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {



    start() {
        for (let i = 0; i < this.node.childrenCount; i++) {
            cc.tween(this.node.children[i]).delay(0.1 * i).to(0.3, { scale: 0.7 }).to(0.1, { scale: 0.6 }).start()
        }
    }

    // update (dt) {}
}
