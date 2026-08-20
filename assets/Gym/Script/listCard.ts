const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    hand: cc.Node = null

    private cards: cc.Node[] = []
    private cardIndex = 0
    private readonly normalScale = 1
    private readonly highlightScale = 1.15
    private readonly handOffset = cc.v3(130, -270)

    start() {
        let board = this.node.getChildByName("board")
        if (board) {
            this.cards = board.children.slice()
        }
        this.showCard()
    }

    showCard() {
        if (!this.hand || this.cards.length === 0) return

        this.hand.active = false
        this.cardIndex = 0
        this.scaleCardsIn()
    }

    private scaleCardsIn() {
        let done = 0
        for (let i = 0; i < this.cards.length; i++) {
            let card = this.cards[i]
            card.scale = 0.5
            cc.Tween.stopAllByTarget(card)
            cc.tween(card).to(0.5, { scale: this.normalScale }, { easing: "backOut" }).call(() => {
                done++
                if (done >= this.cards.length) {
                    this.hand.active = true
                    this.focusCard(this.cardIndex)
                }
            }).start()
        }
    }

    private focusCard(index: number) {
        let card = this.cards[index]
        if (!card) return

        for (let i = 0; i < this.cards.length; i++) {
            let c = this.cards[i]
            cc.Tween.stopAllByTarget(c)
            cc.tween(c).to(0.2, { scale: this.normalScale }).start()
        }

        cc.Tween.stopAllByTarget(card)
        cc.tween(card).to(0.25, { scale: this.highlightScale }).start()

        let worldPos = card.parent.convertToWorldSpaceAR(card.position)
        let localPos = this.hand.parent.convertToNodeSpaceAR(worldPos).add(this.handOffset)
        cc.Tween.stopAllByTarget(this.hand)
        cc.tween(this.hand).to(0.3, { position: localPos }).call(() => {
            this.scheduleOnce(() => {
                this.cardIndex = (this.cardIndex + 1) % this.cards.length
                this.focusCard(this.cardIndex)
            }, 1)
        }).start()
    }
}
