// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    preBanh: cc.Prefab = null;

    start() {
        this.spawbanh()
    }
    spawbanh() {
        for (let i = 0; i < 3; i++) {
            this.scheduleOnce(() => {
                let banh = cc.instantiate(this.preBanh);
                banh.parent = this.node
                banh.position=cc.v3(2638,-1729)
                banh.angle=5
                cc.tween(banh).bezierTo(0.3,cc.v2(2638,-1729),cc.v2(2864,-1279+300),cc.v2(3038,-1437)).delay(0.3).bezierTo(0.4,cc.v2(3038,-1437),cc.v2(3176,-1214+300),cc.v2(3495,-1315)).call(()=>{
                    banh.children[0].active=false;
                    banh.children[1].active=true;
                }).start()
                cc.tween(banh.children[0]).to(0.5,{angle:0}).start()
            }, 0.5 * i)


        }
    }
    // update (dt) {}
}
