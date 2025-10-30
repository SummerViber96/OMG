

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Prefab)
    preCorn: cc.Prefab = null;
    @property(cc.Prefab)
    preTomato: cc.Prefab = null;
    @property(cc.Prefab)
    preCarrot: cc.Prefab = null;
    @property(cc.Node)
    houseCarrrot: cc.Node = null
    @property(cc.Node)
    houseTomato: cc.Node = null;
    @property(cc.Node)
    houseCorn: cc.Node = null;
    @property(cc.AudioClip)
    soundGet: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundHit: cc.AudioClip = null;
    @property(cc.Node)
    hand: cc.Node = null
    @property(cc.Node)
    camera: cc.Node = null
    @property(cc.Node)
    camera2: cc.Node = null
    gamePlay = null
    isDelaySOund = false
    start() {
        this.gamePlay = cc.Canvas.instance.getComponent("Game28");
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }
    onTouchMove(event: cc.Event.EventTouch) {
        // console.log("move stick")
        this.hand.active = false
        this.node.getComponent(cc.BoxCollider).enabled = true
        // Lấy vị trí touch
        let touchPos = event.getLocation();
        let pos = cc.v3(0, 0)
        if (this.camera.active == true) {
            pos = this.camera.getComponent(cc.Camera).getScreenToWorldPoint(touchPos)
            touchPos = touchPos.add(cc.v2(this.camera.position.x, this.camera.position.y + 80))

        }
        else {
            pos = this.camera2.getComponent(cc.Camera).getScreenToWorldPoint(touchPos)

            touchPos = touchPos.add(cc.v2(this.camera2.position.x, this.camera2.position.y + 80))

        }
        // Chuyển đổi sang tọa độ của parent
        const localPos = this.node.parent.convertToNodeSpaceAR(pos);
        // Di chuyển stick tới vị trí touch
        this.node.setPosition(localPos);
    }
    onTouchEnd(event) {
        // this.stickNode.active = false
    }


    onCollisionEnter(other, self) {
        if (other.node.children[0].name == "first") {
            if (other.node.children[1].active) {
                other.node.getComponent(cc.PolygonCollider).enabled = false
                this.cut(other.node)

            }

        }
    }
    onCollisionStay(other, self) {

    }
    cut(node) {
        node.children[0].active = true

        node.children[1].active = false
        let pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.parent.convertToNodeSpaceAR(pos);
        switch (this.gamePlay.step) {
            case 1:
                let pop = this.houseCarrrot.getChildByName("pop")
                this.spawItem(this.preCarrot, pop, pos);
                break;
            case 2:
                let pop2 = this.houseTomato.getChildByName("pop")
                this.spawItem(this.preTomato, pop2, pos);
                break;
            case 3:
                let pop3 = this.houseCorn.getChildByName("pop")
                this.spawItem(this.preCorn, pop3, pos);
                break;

        }




    }
    isDelaySound2 = false
    spawItem(preItem, pop, pos) {
        let item = cc.instantiate(preItem);
        item.parent = this.node.parent
        item.position = pos
        if (!this.isDelaySOund) {
            this.isDelaySOund = true
            cc.audioEngine.play(this.soundGet, false, 1)
            this.scheduleOnce(() => {
                this.isDelaySOund = false
            }, 0.04)
        }
        let posEnd = pop.parent.convertToWorldSpaceAR(pop.position);
        posEnd = this.node.parent.convertToNodeSpaceAR(posEnd);
        let posMid = cc.v2((pos.x + posEnd.x) / 2, (pos.y + posEnd.y) / 2 + 300)
        cc.tween(item).bezierTo(0.8, cc.v2(pos.x, pos.y), posMid, cc.v2(posEnd.x, posEnd.y + 100)).call(() => {
            item.children[0].active = false
            item.children[1].active = true
            pop.getComponent("popFarm").updateFill()
            if (!this.isDelaySound2) {
                cc.audioEngine.play(this.soundHit, false, 1)
                this.isDelaySound2 = true
                this.scheduleOnce(()=>{
                this.isDelaySound2 = false

                },0.06)
            }
        }).start()
    }





}
