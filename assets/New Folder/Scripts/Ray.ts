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

    update(dt: number) {

        for (let ray of this.node.children) {
            if (this.nguoc == false) {
                ray.x -= this.speed * dt;

                if (ray.x <= -this.rayWidth) {
                    ray.x += this.rayWidth * this.node.childrenCount;
                }
            }
            else {
                ray.x += this.speed * dt*0.5;

                if (ray.x >= this.rayWidth) {
                    ray.x -= this.rayWidth * this.node.childrenCount;
                }
            }


        }
    }
}
