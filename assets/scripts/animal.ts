// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(sp.Skeleton)
    anim: sp.Skeleton = null
    hp = 100;
    gamePlay = null
    @property(cc.AudioClip)
    soundLonKeu:cc.AudioClip=null
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.spineListener()
        this.gamePlay = cc.Canvas.instance.node.getComponent("game")
    }
    idle() {
        this.anim.setAnimation(0, "Idle", true)
    }
    run() {
        this.anim.setAnimation(0, "Move", true)
    }
    attack() {
        this.anim.setAnimation(0, "Attack", true)

    }
    die() {
        this.anim.setAnimation(0, "Dead", false)

    }
    spineListener() {
        this.anim.setCompleteListener((track) => {
            if (track.animation.name == 'Spawn') {
                // this.node.destroy();
                this.idle()
            }
            if (track.animation.name == 'Spawn') {
                // this.node.destroy();
                this.idle()
            }
        })
    }
    attacked(damage) {
        this.hp -= damage;
        this.node.children[1].children[1].getComponent(cc.Sprite).fillRange = this.hp / 100
        if (this.hp <= 0) {
            cc.audioEngine.play(this.soundLonKeu, false, 0.8)
            this.die()
            this.scheduleOnce(()=>{
                this.node.active=false

                this.gamePlay.btn_upgrade()

            },0.3)
        }
    }
    // update (dt) {}
}
