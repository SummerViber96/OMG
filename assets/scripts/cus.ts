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
    @property(cc.SkeletonAnimation)
    bodySkeletonAnimation: cc.SkeletonAnimation = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        if (this.text == "cus1") {
            this.move2()

        }
        if (this.text == "cus2") {
            this.move3()

        }
    }
    move1() {
        let localpos = cc.v3(-158.925, -476.293, -323.197)
        cc.tween(this.node).repeatForever(
            cc.tween().set({ position: localpos }).to(2, { position: cc.v3(182.095, -307.578, -323.197) }).set({
                eulerAngles: cc.v3(36.17, -18.831, -10.952)
            }).to(2, { position: localpos })
        ).start()
    }
    move2() {
        cc.tween(this.node).repeatForever(
            cc.tween().set({ position: cc.v3(212.364, -37.176, -22.255), eulerAngles: cc.v3(-45.719, 150.973, 34.681) }).call(() => {
                this.idle()
            }).delay(1).call(() => {
                this.move()
            }).set({ eulerAngles: cc.v3(48.32, 24.186, 30.298) }).to(1, { position: cc.v3(71, 51.922, -66.093) }).set({ eulerAngles: cc.v3(-45.719, 150.973, 34.681) }).call(() => {
                this.idle()
            }).delay(1).call(() => {
                this.move()
            }).set({
                eulerAngles: cc.v3(-48.997, -157.182, -28.947)
            }).to(1, { position: cc.v3(212.364, -37.176, -22.255) })
        ).start()
    }
    move3() {
        cc.tween(this.node).repeatForever(
            cc.tween().set({ position: cc.v3(-372.014, -166.079, -522.447), eulerAngles: cc.v3(-36.583, 141.755, 18.391) }).call(() => {
                this.idle()
            }).delay(1).call(() => {
                this.move()
            }).set({ eulerAngles: cc.v3(-36.583, 141.755, 18.391) }).to(1, { position: cc.v3(-276.049, -104.472, -522.447) }).set({ eulerAngles: cc.v3(-45.719, 150.973, 34.681) }).call(() => {
                this.idle()
            }).delay(1).call(() => {
                this.move()
            }).set({
                eulerAngles: cc.v3(38.179, -32.567, -14.223)
            }).to(1, { position: cc.v3(-372.014, -166.079, -522.447) })
        ).start()
    }
    move() {
        this.bodySkeletonAnimation.play('Walk');

    }
    idle() {
        this.bodySkeletonAnimation.play('Idle 1');

    }
    // update (dt) {}
}
