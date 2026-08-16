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

    @property(cc.Prefab)
    bapNgoPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    quaCachuaPrefab: cc.Prefab = null;

    @property(cc.Vec3)
    postQueue: cc.Vec3 = cc.v3(0, 0, 0);

    @property(cc.Label)
    numLabel: cc.Label = null;

    gamePlay = null;

    numCarry = 0;

    isMove = false;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent(GamePlay);
    }

    getItem(name) {
        this.numCarry++;
        this.bodySkeletonAnimation.play('Idle 2');
        let itemNode = null;
        if (name == 'traicachua') itemNode = cc.instantiate(this.quaCachuaPrefab);
        if (name == 'traingo') itemNode = cc.instantiate(this.bapNgoPrefab);
        if (itemNode == null) return
        itemNode.setPosition(cc.v3(0, 0.5 + (this.numCarry) * 0.2, 0.3));
        this.node.addChild(itemNode);
        this.numLabel.string = `${this.numCarry}/12`;
        cc.audioEngine.play(this.gamePlay.getItemSound, false, 1);
        if (this.numCarry == 12) {
            this.gamePlay.countCustomer++;
            if (this.gamePlay.countCustomer == 4) {
                this.gamePlay.arrowTinhTien.active = true;
                this.gamePlay.arrowKe.active = false;
            }
            this.move();
        }
    }

    move() {
        if (this.isMove) return;
        this.isMove = true;
        // this.numLabel.node.parent.destroy();
        // cc.tween(this.node).to(0.25, { eulerAngles: cc.v3(0, -180, 0) }).call(() => {
        //     this.bodySkeletonAnimation.play('Run 2');
        // }).to(0.5, { position: cc.v3(this.node.x, 0, this.postQueue.z) }).to(0.25, { eulerAngles: cc.v3(0, -90, 0) }).to(2, { position: this.postQueue }).call(() => {
        //     this.bodySkeletonAnimation.play('Idle 2');
        // }).to(0.25, { eulerAngles: cc.v3(0, 0, 0) }).start();
        this.bodySkeletonAnimation.play('Walk');
    }
    down() {
        this.isMove = false;
        this.bodySkeletonAnimation.node.rotationY = 90
        this.bodySkeletonAnimation.play('Idle 2');

    }

    // update (dt) {}
}
