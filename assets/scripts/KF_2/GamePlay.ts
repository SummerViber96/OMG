// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import Char from "./Char";
import Customer from './Customer';
import JoyStick from './JoyStick'
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    char: cc.Node = null;

    @property(cc.Node)
    handGuide: cc.Node = null;

    @property(cc.Node)
    arrowGarden: cc.Node = null;

    @property(cc.Node)
    arrowKe: cc.Node = null;


    @property(cc.Node)
    arrowTinhTien: cc.Node = null;

    @property(cc.Node)
    garden: cc.Node = null;

    @property(cc.Node)
    customer1Node: cc.Node = null;

    @property(cc.Node)
    customer2Node: cc.Node = null;

    @property(cc.Node)
    customer3Node: cc.Node = null;

    @property(cc.Node)
    customer4Node: cc.Node = null;

    @property(cc.Node)
    keCachua: cc.Node = null;

    @property(cc.Node)
    keNgo: cc.Node = null;

    @property(cc.Node)
    btnContinue: cc.Node = null;

    @property(cc.Node)
    linkToStore: cc.Node = null;

    @property(cc.Node)
    joyStick: cc.Node = null;

    @property(cc.Prefab)
    tangCachuaPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    tangNgoPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    cayNgoPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    cayCachuaPrefab: cc.Prefab = null;

    @property(cc.Camera)
    camera3D: cc.Camera = null;

    @property(cc.Camera)
    camera2D: cc.Camera = null;

    @property(cc.AudioClip)
    bgSound: cc.AudioClip = null;

    @property(cc.AudioClip)
    getItemSound: cc.AudioClip = null;

    tangCachuaNode = null;

    tangNgoNode = null;

    tang2CachuaNode = null;

    tang2NgoNode = null;

    charComp = null;

    numNgo = 0;

    numCaChua = 0;

    countCustomer = 0;

    currScreenWidth = null;

    isHorizontal = true;

    isEndGame = false;

    adChanel = '{{__adv_channels_adapter__}}'

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.charComp = this.char.getComponent(Char);
        this.responsive();

    }

    start() {
        cc.director.getPhysics3DManager().enabled = true;
        this.createGarden();
        this.addTangItem();
        cc.audioEngine.play(this.bgSound, true, 0.5);
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
    }

    addTangItem() {
        this.tangCachuaNode = cc.instantiate(this.tangCachuaPrefab);
        this.keCachua.addChild(this.tangCachuaNode);
        this.tangNgoNode = cc.instantiate(this.tangNgoPrefab);
        this.keNgo.addChild(this.tangNgoNode);
    }

    addItemOnKe(name) {
        if (name == 'traingo') {
            this.numNgo++;
            if (this.numNgo > 0 && this.numNgo <= 24) {
                this.tangNgoNode.children[this.numNgo - 1].active = true;
                if (this.numNgo <= 12) {
                    this.tangNgoNode.children.forEach((item, index) => {
                        this.scheduleOnce(() => {
                            if (item.active == true && index < 12) {
                                item.active = false;
                                this.customer1Node.getComponent(Customer).getItem('traingo');
                            }
                        }, index * 0.02)
                    });
                };

                if (this.numNgo >= 12 && this.numNgo < 24) {
                    this.tangNgoNode.children.forEach((item, index) => {
                        this.scheduleOnce(() => {
                            if (item.active == true && index >= 12 && index < 24) {
                                item.active = false;
                                this.customer2Node.getComponent(Customer).getItem('traingo');
                            }
                        }, index * 0.02)
                    });
                }
            }
            if (this.numNgo > 24 && this.numNgo <= 48) {
                this.tangNgoNode.children[this.numNgo - 25].active = true;
            }
        }
        if (name == 'traicachua') {
            this.numCaChua++;
            if (this.numCaChua > 0 && this.numCaChua <= 24) {
                this.tangCachuaNode.children[this.numCaChua - 1].active = true;
                if (this.numCaChua <= 12) {
                    this.tangCachuaNode.children.forEach((item, index) => {
                        this.scheduleOnce(() => {
                            if (item.active == true && index < 12) {
                                item.active = false;
                                this.customer3Node.getComponent(Customer).getItem('traicachua');
                            }
                        }, index * 0.02)
                    });
                };
                if (this.numCaChua > 12 && this.numCaChua <= 24) {
                    this.tangCachuaNode.children.forEach((item, index) => {
                        this.scheduleOnce(() => {
                            if (item.active == true && index >= 12 && index < 24) {
                                item.active = false;
                                this.customer4Node.getComponent(Customer).getItem('traicachua');
                            }
                        }, index * 0.02)
                    });
                };
            }

            if (this.numCaChua > 24 && this.numCaChua <= 48) {
                this.tangCachuaNode.children[this.numCaChua - 25].active = true;
            }
        }



    }

    endGame() {
        this.isEndGame = true;
        this.arrowTinhTien.active = false;
        this.handGuide.active = true;
        // this.btnContinue.active = true;
        this.joyStick.getComponent(JoyStick).offTouchEvent();
        this.joyStick.getComponent(JoyStick).dot.setPosition(cc.v3(0, -183));
        this.joyStick.getComponent(JoyStick).ring.setPosition(cc.v3(0, -183));
        this.joyStick.opacity = 255;
        this.linkToStore.active = true;
        this.charComp.idle();
    }


    createGarden() {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                let cayngo = cc.instantiate(this.cayNgoPrefab);
                this.garden.addChild(cayngo);
                cayngo.setPosition(cc.v3(2 + 3 * j, 0, 3 + 3 * i));
            }
        }
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                let caycachua = cc.instantiate(this.cayCachuaPrefab);
                this.garden.addChild(caycachua);
                caycachua.setPosition(cc.v3(-2 - 3 * j, 0, 3 + 3 * i));
            }
        }
    }
    setScreenSize(isHorizontal) { // responsive game ngang doc
        let canvas = this.node.getComponent(cc.Canvas);
        this.joyStick.scale = (isHorizontal) ? 0.5 : 1.8;
        this.btnContinue.children[0].scale = (isHorizontal) ? 0.25 : 0.6;
        this.camera3D.zoomRatio = (isHorizontal) ? 2 : 1.5;
        this.camera3D.node.eulerAngles = (isHorizontal) ? cc.v3(-43, 0, 0) : cc.v3(-46, 0, 0)
        // canvas.fitHeight = (isHorizontal) ? true : false;
        // canvas.fitWidth = (isHorizontal) ? false : true;
    }

    responsive() {
        // let canvas = this.node.getComponent(cc.Canvas);
        let deviceResolution = cc.view.getFrameSize();
        // console.log(deviceResolution);
        // console.log(canvas.designResolution)
        // // calculte design ratio
        // let desiredRatio = canvas.designResolution.width / canvas.designResolution.height;
        // // calculte device ratio
        // let deviceRatio = deviceResolution.width / deviceResolution.height;
        if (deviceResolution.width >= deviceResolution.height) {
            this.setScreenSize(true);
            this.isHorizontal = true;
        }
        else if (deviceResolution.width < deviceResolution.height) {
            this.setScreenSize(false);
            this.isHorizontal = false;
        }
        // if (this.currScreenWidth !== winSize.width) {
        //     if (!this.currScreenWidth) {
        //         if (winSize.width > 500) {
        //             this.setScreenSize(true);
        //             this.isHorizontal = true;
        //         } else {
        //             this.setScreenSize(false);
        //             this.isHorizontal = false;
        //         }
        //         this.currScreenWidth = winSize.width;
        //         return;
        //     }

        //     if (this.currScreenWidth < winSize.width) {
        //         this.setScreenSize(true);
        //         this.isHorizontal = true;
        //     } else {
        //         this.setScreenSize(false);
        //         this.isHorizontal = false;
        //     }
        //     this.currScreenWidth = winSize.width;
        // }
    }


    update(dt) {
        this.camera3D.node.setPosition(this.char.position.add(cc.v3(0, 30, 26)).clampf(cc.v3(-9, 30, 38), cc.v3(9, 30, 30)));
        this.responsive();
    }
}
