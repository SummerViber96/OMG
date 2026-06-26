const { ccclass, property } = cc._decorator;

/** Gắn lên node vòng mẫu (defaultCharm) để khai báo dây và keychain đúng. */
@ccclass
export default class BraceletDefaultMeta extends cc.Component {

    /** idString của dây mẫu (2 = green, …). Đúng màu được +30%. */
    @property(cc.Integer)
    cordId: number = 2;

    /** Index keychain đúng (0, 1 hoặc 2 — khớp btn_choseCard). */
    @property(cc.Integer)
    keychainIndex: number = 0;
}
