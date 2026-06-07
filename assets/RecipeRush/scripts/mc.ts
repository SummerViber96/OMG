

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    preChicken: cc.Prefab = null
    @property(cc.Node)
    khay: cc.Node = null
    @property(sp.Skeleton)
    anim: sp.Skeleton = null;
    chicken = false

    arrPos = [cc.v3(-190, -39), cc.v3(-207, -323), cc.v3(-207, -468)]
    localId = 0;
    gamePlay = null
    arrChicken = null
    start() {
        this.node.position = cc.v3(207, -58);
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    }
    addChicken() {

    }
    moveToChicken() {
        this.anim.setAnimation(0, "Walk", true)
        if (this.localId == 0) {

            cc.tween(this.node).to(1, { position: this.arrPos[0] }).call(() => {
                this.spawChicken()
            }).start()
        }
    }
    spawChicken() {
        this.gamePlay.btnChicken.children[0].getComponent(sp.Skeleton).setAnimation(0, "lv1-tap", false)
        this.chicken = true
        this.localId = 1;
        this.khay.active = true;
        this.anim.setAnimation(1, "L-arm", true)
        this.anim.setAnimation(0, "Idle", true)
        let chicken = cc.instantiate(this.preChicken);
        chicken.parent = this.khay;
        chicken.getComponent(cc.Animation).play()
        this.gamePlay.isMoving = false
        this.arrChicken = chicken
    }
    moveToMachine() {
        this.node.zIndex = 2
        this.anim.setAnimation(0, "Walk", true)
        this.localId = 2
        if (this.localId == 1) {

            cc.tween(this.node).to(1, { position: this.arrPos[1] }).call(() => {
                let chicken = this.arrChicken
                this.chicken = false
                this.gamePlay.btnMachine.getComponent("machine").cooking(chicken)
                this.anim.setAnimation(1, "<None>", true)
                this.anim.setAnimation(0, "Idle", true)
                this.anim.setAnimation(1, "Idle", false)
                this.khay.active = false
                this.localId = 2;
                this.gamePlay.isMoving = false
            }).start()
        }
        else if (this.localId == 2) {
            this.khay.active = true;
            this.anim.setAnimation(1, "L-arm", true)
            this.anim.setAnimation(0, "Idle", true)
            this.gamePlay.isMoving = false

            let chicken = this.gamePlay.btnMachine.getComponent("machine").getChicken()
            chicken.parent = this.khay
            chicken.getComponent(cc.Animation).play();
            chicken.getComponent("chicken").chin2()
            this.arrChicken=chicken

        }
    }
    moveToSauce() {
        this.node.zIndex = 2
        this.anim.setAnimation(0, "Walk", true);
        this.node.scaleX = -1
        if (this.localId == 2) {
            cc.tween(this.node).to(0.5, { position: this.arrPos[2] }).call(() => {
                let chicken = this.arrChicken
               
                this.gamePlay.isMoving = false
            }).start()
        }
    }
    // update (dt) {}
}
