// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import GamePlay from './GamePlay'
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SkeletonAnimation)
    bodySkeletonAnimation: cc.SkeletonAnimation = null;

    @property(cc.Integer)
    speedRun = 250;

    @property(cc.Node)
    listCarry: cc.Node = null;

    @property(cc.Prefab)
    bapNgoPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    quaCachuaPrefab: cc.Prefab = null;

    @property(cc.AudioClip)
    soundCollect: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundPut: cc.AudioClip = null;
    @property(cc.Node)
    bag: cc.Node = null;

    gamePlay = null;

    isCarrying = false;

    isCompleteCarry = false;

    numCarry = 0;

    angle = 0;

    isRun = false;

    moveDir = null;

    directionX = null;

    numCachua = 0;

    numNgo = 0
    isBanhMi = false
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent(GamePlay);
        this.isCompleteCarry = true;
    }

    run() {
        if (!this.isRun && !this.isCompleteCarry) {
            this.isRun = true;
            // let animName = (this.isCarrying) ? 'Run 2' : 'Run 1';
            let animName = 'Run stack';

            this.bodySkeletonAnimation.play(animName);
        }
    }
    addBanhMi() {
        if (!this.isBanhMi) {
                            cc.audioEngine.play(this.soundPut, false, 1);

            this.isBanhMi = true;
            this.bag.active = true;
            console.log("add Bm")
            let animName = 'Run stack';

            this.bodySkeletonAnimation.play(animName);
        }
    }
    idle() {
        this.isRun = false;
        // let animName = (this.isCarrying) ? 'Idle 2' : 'Idle 1';
        let animName = 'Idle';
        if (this.isBanhMi) { animName = "Run stack" }
        this.bodySkeletonAnimation.play(animName);
    }
    createMoney() {
        // for (let i = 0; i < 8; i++) {
        this.addItem("cayngo")
        // }
    }
    transMoney(pos) {
        pos = this.listCarry.convertToNodeSpaceAR(pos)
        console.log("transMoney")
        let count = 0
        for (let i = this.listCarry.childrenCount - 1; i >= 0; i--) {
            cc.tween(this.listCarry.children[i]).delay(count * 0.02).to(0.3, { position: pos }).call(() => {
                this.listCarry.children[i].destroy()
            }).start()
            count++
        }
    }
    addItem(item) {
        if (this.numCarry < 32) {
            // this.gamePlay.arrowGarden.active = false;
            // if (this.gamePlay.countCustomer < 4) this.gamePlay.arrowKe.active = true;
            this.isCarrying = true;
            // let animName = (this.isCarrying) ? 'Run 2' : 'Run 1';
            // this.bodySkeletonAnimation.play(animName);
            this.numCarry += 2;
            for (let i = 0; i < 8; i++) {
                let itemNode = null;
                if (item == 'caycachua') {
                    itemNode = cc.instantiate(this.quaCachuaPrefab);
                    this.numCachua += 2;
                }
                if (item == 'cayngo') {
                    itemNode = cc.instantiate(this.bapNgoPrefab);
                    this.numNgo += 2;
                }
                itemNode.setPosition(cc.v3(0, 0.5 + (this.numCarry - i) * 0.4, 0.3));
                this.listCarry.addChild(itemNode);
                // cc.audioEngine.play(this.soundCollect, false, 2);
            }
        }
    }

    completeCarry() {
        if (this.listCarry.children.length > 0) {
            let timeDelay = this.listCarry.children.length * 0.02
            if (this.isCompleteCarry) return;
            this.isCompleteCarry = true;
            this.listCarry.children.reverse().forEach((item, index) => {
                this.scheduleOnce(() => {
                    this.gamePlay.addItemOnKe(item.name);
                    item.destroy();
                    this.numCarry--;
                }, index * 0.02);
            });
            this.scheduleOnce(() => {
                this.isCompleteCarry = false;
                this.isCarrying = false;
                if (this.isRun) this.bodySkeletonAnimation.play('Run 1');
            }, timeDelay);
        }
    }

    update(dt) {
        if (this.moveDir && this.directionX && this.isRun && !this.isCompleteCarry) {
            let delta = cc.v3(this.moveDir.x, 0, -this.moveDir.y);
            let newPos = this.node.position.add(delta.mul(this.speedRun / 1300));
            this.node.setPosition(newPos.clampf(cc.v3(-83, 200, 10), cc.v3(-40, 0, -16)));
            // this.node.setPosition(newPos);

            this.node.eulerAngles = cc.v3(0, this.angle, 0);
        }
    }
}
