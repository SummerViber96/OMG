// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    speed: number = 500;
    @property(cc.Boolean)
    nguoc = false

    rayWidth: number = 3249;
    gameplay = null
    protected start(): void {
        this.rayWidth = this.node.children[0].width;
        console.log(this.node.children[0].width)
        this.gameplay = cc.Canvas.instance.node.getComponent("GameDonut")

    }
    update(dt: number) {
        if (!this.gameplay || !this.gameplay.isStartgame) return;

        let count = this.node.childrenCount;
        let rays = this.node.children;

        for (let i = 0; i < count; i++) {

            let ray = rays[i];

                ray.x -= this.speed * dt;

                if (ray.x <= -this.rayWidth) {
                    ray.x += this.rayWidth * this.node.childrenCount;
                }
         
        }
    }
}
