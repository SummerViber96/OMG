// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import Char from './Char';
import GamePlay from './MR_4'
@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        let collider = this.getComponent(cc.BoxCollider3D);
        collider.on('trigger-enter', this.onTrigger, this);
    }
    onTrigger(event) {
        let charComp = this.node.getComponent(Char);
        let gameComp= this.node.parent.parent.getComponent(GamePlay)
        let otherNode = event.otherCollider.node;
        console.log("event",event,otherNode.name)

        let selfNode = event.selfCollider.node;

        if (otherNode.name !== selfNode.name && selfNode.name == 'char') {
            // if ((otherNode.name == 'cayngo' || otherNode.name == 'caycachua') && charComp.numCarry < 24) {
            //     otherNode.children[2].destroy();
            //     otherNode.getComponent(cc.BoxCollider3D).enabled = false;
            //     charComp.addItem(otherNode.name);
            // }
        }
        if (otherNode.name !== selfNode.name && selfNode.name == 'nv' && otherNode.name == 'IconGetBanhMif') {
            charComp.addBanhMi()
            gameComp.listArrow.children[0].active=false;
            gameComp.listArrow.children[1].active=true;
        }
        else if(otherNode.name !== selfNode.name && selfNode.name == 'nv' && otherNode.name == 'unlockNode') {
            console.log("step2",gameComp.countMoney)
            if(gameComp.countMoney<50){
                gameComp.char.parent.getChildByName("text").getComponent(cc.Animation).play()
            }
            else{
                gameComp.stepEnd()

            }
        }
        else if(otherNode.name !== selfNode.name && selfNode.name == 'nv' && otherNode.name == 'areaSell') {
            if(charComp.isBanhMi){
                gameComp.getMoney()
                gameComp.listArrow.children[1].active=false;
                gameComp.listArrow.children[0].active=true;


            }
        }
        // if (otherNode.name !== selfNode.name && selfNode.name == 'char' && otherNode.name == 'banthungan') {
        //     if(cc.Canvas.instance.node.getComponent(GamePlay).countCustomer == 4) {
        //         cc.Canvas.instance.node.getComponent(GamePlay).endGame();

        //     }
        // }
    }

    // update (dt) {}
}
