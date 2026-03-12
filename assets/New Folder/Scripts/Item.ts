

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Integer)
    tag = 0
    gameplay = null;
    start() {
        this.gameplay = cc.Canvas.instance.node.getComponent("GameDonut")
    }
    click() {
        if(this.gameplay.isMoving)return
        let check = this.gameplay.checkMission(this.tag,this.node)
        cc.audioEngine.play(this.gameplay.soundTrans,false,0.5)
        if (check) {
            let pos = check.parent.convertToWorldSpaceAR(check.position);
            pos = this.node.parent.convertToNodeSpaceAR(pos)
            this.node.stopAllActions()
            this.node.getComponent(cc.Button).enabled = false
            let mag = (pos.x > this.node.x) ? -50 : 50
            let startPos = cc.v2(this.node.x, this.node.y);
            let endPos = cc.v2(pos.x, pos.y);
            let midPos = cc.v2(endPos.x+mag, endPos.y + 200)
            cc.tween(this.node).to(0.6,{scale:0.5}).start()
            cc.tween(this.node).bezierTo(0.6,startPos,midPos,endPos).call(()=>{
                this.node.destroy()
            }).start()
            // cc.tween(this.node).to(0.6, { position: pos, scale: 0.8 }).call(() => {
            //     this.node.destroy()
            // }).start()
        }
    }
    loadGray() {
        this.setGray(this.node.children[1])
    }
    setGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));

    }
    offGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    }
    // update (dt) {}
}
