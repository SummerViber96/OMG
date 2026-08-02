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

    start() {

    }
    getTomato() {
        this.node.children[1].active = true
    }
    getPhomai() {
        this.node.children[2].active = true

    }
    getDecore1() {
        this.node.children[3].active = true
        this.node.children[4].active = true

    }
    getRau() {
        this.node.children[5].active = true

    }
    // update (dt) {}
}
