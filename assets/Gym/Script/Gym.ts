
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    npc: cc.Node = null
    @property(cc.Node)
    listCusNode: cc.Node = null
    @property(cc.Node)
    listPlacePos: cc.Node = null
    arrPosCus = []
    arrCus = []
    start() {
        this.scheduleOnce(() => {
            this.npc.active = true
        }, 1)
        this.scheduleOnce(() => {
            cc.tween(this.npc).by(0.3, { opacity: -255, position: cc.v3(0, -80) }).start()
        }, 3)
        for (let i = 0; i < this.listCusNode.childrenCount; i++) {
            this.arrCus.push(this.listCusNode.children[i])
        }
        for (let i = 0; i < this.listPlacePos.childrenCount; i++) {
            this.arrPosCus.push(this.listPlacePos.children[i].position)
        }
        this.spawFistCustomer()
    }
    spawFistCustomer() {
        let arr = [cc.v3(438, -159), cc.v3(577, -256)];
        for (let i = 0; i < this.arrCus.length; i++) {
            let cus = this.arrCus[i]
            cus.getComponent("cusGym").move(this.arrPosCus[i], 4)
        }
        this.scheduleOnce(() => {
            for (let j = 0; j < 2; j++) {
                let cus = this.arrCus[j]
                cus.getComponent("cusGym").move(arr[j], 1 + 0.5 * j)
                this.scheduleOnce(() => {
                    cus.getComponent("cusGym").sit()
                }, 1.1 + 0.5 * j)
            }
            for (let j = 2; j < this.arrCus.length; j++) {
                let cus = this.arrCus[j]
                cus.getComponent("cusGym").move(this.arrPosCus[j - 2], 1.5)

            }

        }, 4)
    }
    isCloseTut = false
    btn_closeTut() {
        if (this.isCloseTut) return;
        this.isCloseTut = false
        cc.tween(this.npc).by(0.3, { opacity: -255, position: cc.v3(0, -80) }).start()

    }
    // update (dt) {}
}
