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
    prEmoji: cc.Prefab = null

    start() {
        for (let i = 0; i < 50; i++) {
            this.scheduleOnce(() => {
                this.spawnAngryEmoji(
                    this.node,
                    this.prEmoji,
                    this.node
                );
            }, i * 0.08);
        }
    }
    spawnAngryEmoji(parent: cc.Node, prefab: cc.Prefab, target: cc.Node) {

        let emoji = cc.instantiate(prefab);
        parent.addChild(emoji);

        // Vị trí bắt đầu (dưới đầu nhân vật)
        let startX = target.x + (Math.random() - 0.5) * 300+400;
        let startY = target.y + 280;

        emoji.setPosition(startX, startY);
        emoji.opacity = 0;
        emoji.scale = 0.2;

        let endY = startY + 500;
        let offsetX = (Math.random() - 0.5) * 500;

        cc.tween(emoji)
            .parallel(
                // Bay lên
                cc.tween().to(2, {
                    position: cc.v3(startX + offsetX, endY)
                }, {
                    easing: "sineOut"
                }),

                // Scale
                cc.tween()
                    .to(0.2, { scale: 1.1 })
                    .to(0.8, { scale: 0.9 })
                    .to(0.2, { scale: 0.8 }),

                // Fade
                cc.tween()
                    .to(0.2, { opacity: 255 })
                    .delay(1.4)
                    .to(0.4, { opacity: 0 }),

                // Lắc trái phải
                cc.tween()
                    .by(0.15, { x: -10 })
                    .by(0.15, { x: 20 })
                    .by(0.15, { x: -20 })
                    .by(0.15, { x: 20 })
                    .by(0.15, { x: -10 })
            )
            .call(() => {
                emoji.destroy();
            })
            .start();
    }
    // update (dt) {}
}
