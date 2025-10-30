
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.String)
    value = "ruby"
    @property(cc.Label)
    lbCount: cc.Label = null
    start() {

    }

    update(dt) {
        if (this.value == "ruby") {
            this.lbCount.string = globalThis.ruby.toString()
        }
        else {
            this.lbCount.string = globalThis.countChar.toString()+"/99"

        }

    }
}
