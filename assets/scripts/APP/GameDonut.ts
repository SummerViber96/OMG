

const { ccclass, property } = cc._decorator;
globalThis.coin = 100
globalThis.scGame = false
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.AudioClip)
    soundShowPop: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundClosePop: cc.AudioClip = null

    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundLose: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundHello: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundHelloCus2: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundHelloCus3: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundTrans: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundClick: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundDonutJump: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundEnd: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundSellDone: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundThinking: cc.AudioClip = null
    @property(cc.AudioClip)
    soundCream: cc.AudioClip = null
    @property(cc.AudioClip)
    soundCherry: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWrong: cc.AudioClip = null
    @property(cc.AudioClip)
    soundCreamMini: cc.AudioClip = null
    @property(cc.AudioClip)
    soundThinkWin: cc.AudioClip = null
    @property(cc.Node)
    tut: cc.Node = null
    @property(cc.Node)
    hand: cc.Node = null
    @property(cc.Node)
    endCard: cc.Node = null;
    @property(cc.Node)
    endCardWin: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Node)
    logo: cc.Node = null;
    @property(cc.Node)
    listCus: cc.Node = null;


    @property(cc.Camera)
    mainCamera: cc.Camera = null
    @property(cc.Camera)
    uiCamera: cc.Camera = null
    @property(cc.Node)
    uiNode: cc.Node = null
    @property(cc.Node)
    barTime: cc.Node = null;
    @property(cc.Node)
    barCoin: cc.Node = null;
    @property(cc.Node)
    listCheckItem: cc.Node = null;
    @property(cc.Node)
    clockTime: cc.Node = null
    @property(cc.Node)
    cake: cc.Node = null;
    @property(cc.Node)
    creeam: cc.Node = null
    @property(cc.Node)
    phaoHoa: cc.Node = null;
    @property(cc.Node)
    listHand: cc.Node = null;
    @property(cc.Node)
    warning: cc.Node = null
    @property(cc.Node)
    guild: cc.Node = null;
    @property([cc.Prefab])
    listItem: cc.Prefab[] = []
    @property(cc.Node)
    listRay: cc.Node[] = [];
    @property(cc.Node)
    listKhay: cc.Node = null;
    @property(cc.Prefab)
    preKhay: cc.Prefab = null;
    @property(cc.Node)
    btnDownload: cc.Node = null
    @property(cc.Node)
    listRayNode: cc.Node = null
    @property(cc.Node)
    timeup: cc.Node = null
    @property(cc.Node)
    amazing: cc.Node = null
    // @property(cc.Camera)
    // camera:cc.Camera=null

    maxKhay = 7

    arrDonutpos = []
    arrDonut = [null, null, null, null, null, null, null]
    // arrKhay = [null, null, null, null, null, null, null]
    // arrKhayPos = []
    isTutChili = false
    isTutMeat = false
    isTutVegetTable = false
    isTutClickMeat = false
    // @property(cc.AudioClip)
    // soundBg:cc.AudioClip=null;

    isTargetPop = null;
    // isStep = 0
    isTargetCus = null;
    adChanel = '{{__adv_channels_adapter__}}'
    countCus = 0
    idSound = null
    isStep = 0
    //item: 0:buger, 1: kem 2:donut 3:khoaitay 4:pho 5: pudding 6: tra  7:banhmi 8:coconut
    rayY: number[] = [120, 0, -120];   // vị trí Y của 3 ray
    spawnX: number = 700;              // vị trí spawn bên phải
    arrItem = [[], []]
    arrKhay = []
    arrMission = [[6, 7], [3, 2], [0, 4, 1], [0, 2], [7, 8], [3, 1, 2], [1, 2, 6], [8, 3, 2], [0, 6]]
    arrTargetMission = []
    arrCus = []
    isStartgame = false
    onLoad() {
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        // this.schedule(() => {
        //     this.spawnItem();
        // }, 1); // mỗi 1s spawn 1 item
        // this.spawnItem()
        this.spawFirstItem()
        this.spawFistkhay()
        for (let i = 0; i < this.listCus.childrenCount; i++) {
            this.arrCus.push(this.listCus.children[i])
        }
    }
    isHand = null
    spawFirstItem() {
        let arr = [3, 0, 5, 4, 6, 7, 8, 1, 2]
        let arr2 = [7, 1, 2, 8, 3, 0, 3, 6, 2,]

        for (let i = 0; i < arr.length; i++) {
            let rd = arr[i]
            let item = cc.instantiate(this.listItem[rd]);
            item.parent = this.listRay[0];

            this.arrItem[0].push(item);

            item.position = cc.v3((i - 4) * 250, -40);
            if (i == 4) {
                item.getChildByName("hand").active = true
                this.isHand = item.getChildByName("hand")
            }
        }
        for (let i = 0; i < arr.length; i++) {
            let rd = arr2[i]
            let item = cc.instantiate(this.listItem[rd]);
            item.parent = this.listRay[1];

            this.arrItem[1].push(item);

            item.position = cc.v3((i - 4) * 250, -40);
        }
    }
    startGame() {
        if (this.isStartgame == false) {
            this.barTime.getComponent("barTime").countDown()
            for (let i = 0; i < 3; i++) {
                let child = this.arrCus[i]
                child.getComponent("cusMission").loadTime()
            }
            this.isStartgame = true;
            this.isHand.active = false;
            this.guild.active = false
            for (let i = 0; i < this.arrItem[0].length; i++) {
                let item = this.arrItem[0][i]
                let posNext = item.position.x - 2000
                cc.tween(item)
                    .to(16, { x: posNext })
                    .call(() => {
                        item.destroy();
                    })
                    .start();
                // this.moveItem(item,item.position.add(cc.v3(-2000,0)))
            }
            for (let i = 0; i < this.arrItem[1].length; i++) {
                let item = this.arrItem[1][i]
                let posNext = item.position.x + 2000
                cc.tween(item)
                    .to(16, { x: posNext })
                    .call(() => {
                        item.destroy();
                    })
                    .start();
                // this.moveItem(item,item.position.add(cc.v3(-2000,0)))
            }
            this.scheduleOnce(() => {
                this.spawnItem()
            }, 1.7)
        }
        // this.spawnItem()


    }
    spawFistkhay() {
        // this.arrTargetMission = this.arrMission
        let arr = [cc.v3(-600, 0), cc.v3(0, 0), cc.v3(600, 0)]
        for (let i = 0; i < 3; i++) {
            let preKhay = cc.instantiate(this.preKhay)
            preKhay.parent = this.listKhay;
            preKhay.position = arr[i]
            this.arrKhay.push(preKhay)
            this.loadDataKhay(this.arrMission[i], preKhay)
            this.arrTargetMission.push(this.arrMission[i])
        }

    }
    countMiss = 3
    spawNextKhay() {
        // this.arrTargetMission.shift();
        if (this.isCountCus <= 7 && this.countMiss < 7) {
            let pos = cc.v3(1200, 0);
            let preKhay = cc.instantiate(this.preKhay)
            preKhay.parent = this.listKhay;
            preKhay.position = pos
            this.arrKhay.push(preKhay)
            this.loadDataKhay(this.arrMission[this.countMiss], preKhay)
            this.arrTargetMission.push(this.arrMission[this.countMiss])
            this.countMiss++
        }

        for (let i = 0; i < this.arrKhay.length; i++) {
            let khay = this.arrKhay[i]
            cc.tween(khay).by(0.8, { position: cc.v3(-600, 0) }).start()
        }
        this.scheduleOnce(() => {
            this.arrKhay.shift();
            this.arrTargetMission.shift()
        }, 0.2)
    }
    loadDataKhay(data, khay) {
        if (data) {
            let arr = [cc.v3(-170, -20), cc.v3(260, -20)]
            if (data.length == 3) {
                arr = [cc.v3(-256, -20), cc.v3(112.838, -20), cc.v3(427, -20)]
            }

            for (let i = 0; i < data.length; i++) {
                let item = cc.instantiate(this.listItem[data[i]])
                item.parent = khay
                item.position = arr[i]
                item.scale = 2.2
                item.getComponent("Item").loadGray()
            }
        }

    }
    checkMission(id, node) {
        // console.log(this.arrTargetMission)
        this.startGame()

        if (this.isDoc == false) {
            for (let i = 0; i < this.arrTargetMission.length; i++) {
                let mission = this.arrTargetMission[i];
                for (let j = 0; j < mission.length; j++) {
                    if (id == mission[j]) {
                        this.arrTargetMission[i][j] = 100;
                        this.checkSuccess(i, j)
                        return this.arrKhay[i].children[j];
                    }
                }
            }
        }
        else {
            for (let i = 0; i < 2; i++) {
                let mission = this.arrTargetMission[i];
                for (let j = 0; j < mission.length; j++) {
                    if (id == mission[j]) {
                        this.arrTargetMission[i][j] = 100;
                        this.checkSuccess(i, j)
                        return this.arrKhay[i].children[j];
                    }
                }
            }
        }
        node.getComponent(cc.Animation).play()
        cc.audioEngine.play(this.soundWrong, false, 1)

        return null;
    }
    isCountCus = 3
    isCountDone = 0
    checkSuccess(i, j) {
        this.scheduleOnce(() => {
            if (j != null) {
                let targetKhay = this.arrKhay[i].children[j];
                targetKhay.getComponent("Item").offGray(targetKhay.children[1])
                cc.tween(targetKhay).to(0.2, { scale: 2.5 }).to(0.1, { scale: 2.2 }).start()
            }

        }, 0.6)
        let mission = this.arrTargetMission[i];
        let check = true
        let cus = this.arrCus[i]

        for (let m = 0; m < mission.length; m++) {
            if (mission[m] != 100) {
                check = false
            }
        }
        if (check == true) {
            this.isCountDone++
            console.log(this.isCountDone, "done")
            this.scheduleOnce(() => {
                cus.getChildByName("vfx_coin").active = true
                cus.getChildByName("vfx_coin").getComponent(cc.Animation).play()
                globalThis.coin += 50
                if (mission.length == 3) {
                    globalThis.coin += 20

                }
                cc.audioEngine.play(this.soundSellDone, false, 1)
            }, 0.6)

            //bonus tien
            if (i == 0) {
                this.scheduleOnce(() => {

                    this.moveCus();

                }, 0.8)
            }
            else {
                this.checkSuccessItem()
            }
            if (this.isCountDone == 7) {
                this.scheduleOnce(()=>{
                this.onEndGame(true)

                },0.5)
            }

        }
        else {
            this.checkSuccessItem()

        }
    }
    checkSuccessItem() {
        for (let i = 0; i < 1; i++) {
            let mission = this.arrTargetMission[i];
            let check = true
            for (let j = 0; j < mission.length; j++) {
                if (mission[j] != 100) {
                    check = false
                }
            }
            if (check) {
                this.checkSuccess(i, null)
                return;
            }
        }
    }
    moveCus() {
        if (this.isCountCus < 7) {
            this.listCus.children[this.isCountCus].active = true
            this.arrCus.push(this.listCus.children[this.isCountCus])
            this.isCountCus++
        }
        for (let i = 0; i < this.arrCus.length; i++) {
            let child = this.arrCus[i];
            cc.tween(child).by(0.8, { position: cc.v3(-600, 0) }).call(() => {
            }).start()
        }
        this.spawNextKhay()

    }
    // spawnItem() {


    //     for (let i = 0; i < this.listRay.length; i++) {
    //         let mag = (i == 0) ? 1000 : -1000
    //            let rd = Math.floor(Math.random() * this.listItem.length)
    //             let item = cc.instantiate(this.listItem[rd]);
    //             item.parent = this.listRay[i];
    //             this.arrItem[i].push(item);
    //             item.position = cc.v3(mag, -40)
    //             this.moveItem(item, mag);
    //         this.schedule(() => {
    //             let rd = Math.floor(Math.random() * this.listItem.length)
    //             let item = cc.instantiate(this.listItem[rd]);
    //             item.parent = this.listRay[i];
    //             this.arrItem[i].push(item);
    //             item.position = cc.v3(mag, -40)
    //             this.moveItem(item, mag);
    //         }, 2)
    //     }
    // }
    itemQueue: number[] = [];

    shuffleItem() {
        this.itemQueue = [];

        for (let i = 0; i < this.listItem.length; i++) {
            this.itemQueue.push(i);
        }

        // shuffle Fisher-Yates
        for (let i = this.itemQueue.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.itemQueue[i], this.itemQueue[j]] = [this.itemQueue[j], this.itemQueue[i]];
        }
    }

    getNextItemIndex() {

        if (this.itemQueue.length == 0) {
            this.shuffleItem(); // tạo lượt mới
        }

        return this.itemQueue.shift();
    }

    lastItemIndex: number[] = [];

    spawnItem() {
        for (let i = 0; i < this.listRay.length; i++) {

            this.lastItemIndex[i] = -1; // chưa có item trước

            this.spawnItemOnRay(i);
        }
    }

    spawnItemOnRay(index: number) {

        let mag = (index == 0) ? 1000 : -1000;

        this.createItem(index, mag);

        this.schedule(() => {
            this.createItem(index, mag);
        }, 2);
    }

    createItem(index: number, mag: number) {

        // let rd = Math.floor(Math.random() * this.listItem.length);

        // // tránh trùng item trước
        // while (rd === this.lastItemIndex[index]) {
        //     rd = Math.floor(Math.random() * this.listItem.length);
        // }
        let rd = this.getNextItemIndex();
        this.lastItemIndex[index] = rd;

        let item = cc.instantiate(this.listItem[rd]);
        item.parent = this.listRay[index];

        this.arrItem[index].push(item);

        item.position = cc.v3(mag, -40);

        this.moveItem(item, mag);
    }
    moveItem(item: cc.Node, mag) {
        let targetX = -mag;
        cc.tween(item)
            .to(16, { x: targetX })
            .call(() => {
                item.destroy();
            })
            .start();
    }
    start() {

        this.idSound = cc.audioEngine.play(this.soundBg, true, 0.5)

    }
    // startGame() {
    //     this.listHand.children[0].active = true

    //     // this.scheduleOnce(() => {
    //     //     if (this.isStep == 0) {
    //     //     }
    //     // }, 2)
    // }
    btn_plate(event) {
        let btn = event.currentTarget
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1)
    }
    btn_cake(event) {
        let cake = null
        if (this.isStep == 0) {
            this.barTime.getComponent("barTime").countDown()
            this.guild.active = false;
            this.listHand.children[0].active = false
            cake = this.cake.children[0]
            this.listCheckItem.children[0].active = true
            this.scheduleOnce(() => {
                if (this.isStep == 1) {
                    this.listHand.children[1].active = true
                }
            }, 2.5)
        }
        else if (this.isStep == 3) {
            this.listHand.children[0].active = false

            cake = this.cake.children[3]
            // this.listCheckItem.children[0].active = true
            this.listCheckItem.children[0].active = true
            this.scheduleOnce(() => {
                if (this.isStep == 4) {
                    this.listHand.children[1].active = true
                }
            }, 2.5)
        }
        else {
            let btn = event.currentTarget
            btn.getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 1)
            return;
        }
        cc.audioEngine.play(this.soundShowPop, false, 1)
        cake.scale = 0.6;
        let localPos = cake.position;
        cake.position = localPos.add(cc.v3(0, 120))

        cake.active = true

        this.isStep++
        cc.tween(cake).to(0.2, { position: localPos }).to(0.2, { scale: 0.75 }).to(0.07, { scale: 0.7 }).start()
    }
    btn_Dau(event) {
        if (this.isStep == 2) {
            cc.audioEngine.play(this.soundCherry, false, 1)
            this.listHand.children[2].active = false


            let listFruit = this.cake.children[2]
            this.isStep++
            listFruit.active = true;
            for (let i = 0; i < listFruit.childrenCount; i++) {
                let fruit = listFruit.children[i];
                fruit.active = false
                let localPos = fruit.position;
                fruit.position = localPos.add(cc.v3(0, 120))
                let time = (i % 2 == 0) ? 0 : 0.2
                this.scheduleOnce(() => {
                    fruit.active = true
                    this.listCheckItem.children[2].active = true
                    this.listCheckItem.children[3].active = true
                    this.listCheckItem.children[4].active = true
                    this.listCheckItem.children[5].active = true
                    cc.tween(fruit).to(0.3, { position: localPos }).call(() => {
                        for (let child of this.listCheckItem.children) {
                            child.active = false
                        }
                    }).start()
                }, time)
            }
            this.scheduleOnce(() => {
                if (this.isStep == 3) {
                    this.listHand.children[0].active = true
                }
            }, 2.5)
        }
        else if (this.isStep == 5 && this.isLast == true) {
            this.listHand.children[2].active = false

            cc.audioEngine.play(this.soundCherry, false, 1)
            this.listCheckItem.children[2].active = true
            this.listCheckItem.children[3].active = true
            this.listCheckItem.children[4].active = true
            this.listCheckItem.children[5].active = true
            let listFruit = this.cake.children[6]
            this.isStep++
            listFruit.active = true;
            for (let i = 0; i < listFruit.childrenCount; i++) {
                let fruit = listFruit.children[i];
                fruit.active = false
                let localPos = fruit.position;
                fruit.position = localPos.add(cc.v3(0, 120))
                let time = (i % 2 == 0) ? 0 : 0.3
                this.scheduleOnce(() => {
                    fruit.active = true
                    cc.tween(fruit).to(0.3, { position: localPos }).start()
                }, time)
            }
            this.scheduleOnce(() => {
                this.phaoHoa.active = true
                cc.audioEngine.play(this.soundWin, false, 1)
                globalThis.coin += 100
            }, 0.5)
            this.scheduleOnce(() => {
                this.onEndGame(true)
            }, 1.5)
        }
        else {
            let btn = event.currentTarget
            btn.getComponent(cc.Animation).play();
            cc.audioEngine.play(this.soundWrong, false, 1)
        }
        // let btn = event.currentTarget
        // btn.getComponent(cc.Animation).play();
        // cc.audioEngine.play(this.soundWrong, false, 1)
    }
    btn_Kiwi(event) {
        let btn = event.currentTarget
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1)
    }
    btn_Hoa(event) {
        let btn = event.currentTarget
        btn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.soundWrong, false, 1)
    }
    isLast = false
    btn_cream() {
        if (this.isStep == 1) {
            this.listHand.children[1].active = false
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundCream, false, 1)

            }, 0.3)
            this.listCheckItem.children[1].active = true

            this.creeam.getComponent(cc.Animation).play("cream1")
            let cream = this.cake.children[1]
            this.isStep++
            cream.scale = 0;
            cream.active = true
            cc.tween(cream).delay(0.4).to(0.4, { scale: 0.7 }).start()
            this.scheduleOnce(() => {
                cc.tween(this.creeam.children[1]).to(0.4, { position: cc.v3(0, 0), angle: 0 }).start()
            }, 1.2)
            this.scheduleOnce(() => {
                if (this.isStep == 2) {
                    this.listHand.children[2].active = true
                }
            }, 2.5)
        }
        else if (this.isStep == 4) {
            this.listCheckItem.children[1].active = true
            this.listHand.children[1].active = false

            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundCream, false, 1)

            }, 0.5)
            this.creeam.getComponent(cc.Animation).play("cream2")
            let creamItem = this.creeam.children[1]
            let cream = this.cake.children[4]
            this.isStep++
            cream.scale = 0;
            cream.active = true
            cc.tween(cream).delay(0.6).to(0.4, { scale: 0.7 }).start()
            let listCream = this.cake.children[5]
            let listCream2 = this.cake.children[7]
            // cc.audioEngine.play(this.soundCream, false, 1)
            let arrrPos = [cc.v3(-507, 222), cc.v3(-551, 197), cc.v3(-590, 161), cc.v3(-621, 111), cc.v3(-634, 50, 69), cc.v3(-631.5, 21), cc.v3(-612.6, -4), cc.v3(-568, -5.4), cc.v3(-528, 19.5),
            cc.v3(-490, 61), cc.v3(-464, 108), cc.v3(-456, 170), cc.v3(-473, 204)
            ]
            this.scheduleOnce(() => {
                this.isLast = true

            }, 2)
            this.scheduleOnce(() => {
                listCream.active = true

                for (let i = 0; i < listCream.childrenCount; i++) {
                    listCream.children[i].active = false

                    this.scheduleOnce(() => {
                        // creamItem.position = pos
                        // console.log()
                        // if (i % 2 == 0) {
                        //     cc.audioEngine.play(this.soundCreamMini, false, 1)

                        // }
                        cc.tween(creamItem).to(0.1, { position: arrrPos[i] }).start()

                        listCream.children[i].active = true
                    }, 0.15 * i)


                }
            }, 1.3)
            this.scheduleOnce(() => {
                listCream2.active = true

                for (let i = 0; i < listCream2.childrenCount; i++) {
                    listCream2.children[i].active = false
                    this.scheduleOnce(() => {

                        cc.tween(creamItem).to(0.1, { position: arrrPos[i + 6] }).start()

                        listCream2.children[i].active = true
                    }, 0.15 * i)


                }
            }, 1.3 + 0.15 * 6)
            this.scheduleOnce(() => {
                cc.tween(this.creeam.children[1]).to(0.4, { position: cc.v3(0, 0), angle: 0 }).start()
                this.scheduleOnce(() => {
                    if (this.isStep == 5) {
                        this.listHand.children[2].active = true
                    }
                }, 2.5)
            }, 3.8)
        }
        else {
            cc.audioEngine.play(this.soundWrong, false, 1)
            this.creeam.getComponent(cc.Animation).play("btn_wrong")
        }

    }

    setGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));

    }
    offGray(node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
    }
    moveClocktoUI(node1) {
        this.moveItemToUI(node1, this.barTime.children[1]);
    }
    moveItemToUI(node1, node2) {
        // cc.audioEngine.play(this.soundWoodin, false, 1)
        let pos = node2.parent.convertToWorldSpaceAR(node2.position)
        pos = this.uiNode.convertToNodeSpaceAR(pos)
        // pos = pos.add(cc.v3(0, 0))
        let pos2 = node1.parent.convertToWorldSpaceAR(node1.position);
        pos2 = this.mainCamera.getWorldToScreenPoint(pos2);
        pos2 = this.uiCamera.getScreenToWorldPoint(pos2);
        pos2 = this.uiNode.convertToNodeSpaceAR(pos2).add(cc.v3(0, 0))
        node1.parent = this.uiNode;
        node1.scale = this.mainCamera.zoomRatio / this.uiCamera.zoomRatio * 0.7
        node1.position = pos2
        cc.tween(node1).to(0.4, { position: pos, scale: 0.4 }).call(() => {
            node1.active = false
            // this.missionBar.getComponent("updateBar").updateBar();
            // wood.getComponent(cc.Animation).play("exp")
            // // cc.audioEngine.play(this.soundWoodOut, false, 1)
        }).start()
    }
    isEndGame = false
    onEndGame(value) {
        if (this.isEndGame) return;
        this.isEndGame = true
        this.warning.active = false;
        if (value == true) {
            this.barTime.getComponent("barTime").endGame()
            this.amazing.active = true;

            // cc.audioEngine.play(this.soundEnd, false, 1)
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundThinkWin, false, 1)
                // cc.audioEngine.play(this.soundWin, false, 1)
                // this.endCard.getChildByName("title").active = false
                this.endCardWin.active = true;
            }, 0.5)


        }
        else {
            this.barTime.getComponent("barTime").endGame()
            for (let child of this.arrCus) {
                child.children[0].getComponent(sp.Skeleton).setAnimation(0, "6.angry", true)
            }
            cc.audioEngine.stop(this.idSound)
            this.timeup.active = true;
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundThinking, false, 1)
                cc.audioEngine.play(this.soundLose, false, 1)
                this.endCard.active = true;
            }, 0.5)


        }
        this.linkToStore.active = true
    }
    // btn_choose(event, value) {
    isDoc = false
    update(dt) {
        // this.lbCoin.string = globalThis.gold.toString()
        let deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    }
    reponsive(logic) {
        let canvas = this.node.getComponent(cc.Canvas);
        this.camera.zoomRatio = 1
        this.endCard.scale = (logic) ? 1.2 : 0.7
        this.endCardWin.scale = (logic) ? 1.2 : 0.7

        this.logo.scale = (logic) ? 0.6 : 0.4
        canvas.fitHeight = (logic) ? false : true
        canvas.fitWidth = (logic) ? true : false
        this.camera.node.position = cc.v3(0, 0)
        this.barTime.scale = (logic) ? 2 : 1.1
        this.barCoin.scale = (logic) ? 2 : 1.1
        this.clockTime.scale = (logic) ? 1.7 : 1
        this.phaoHoa.scale = (logic) ? 9 : 5
        this.guild.scale = (logic) ? 2 : 1.2
        this.guild.position = (logic) ? cc.v3(0, -900) : cc.v3(0, -360)
        this.listCus.position = (logic) ? cc.v3(230, 56) : cc.v3(0, 56)
        this.listCus.scale = (logic) ? 0.7 : 1
        this.listKhay.position = (logic) ? cc.v3(220, 14.6) : cc.v3(0, 14.6)
        this.listKhay.scale = (logic) ? 0.7 : 1
        this.listRayNode.scale = (logic) ? 0.8 : 1
        this.listRayNode.position = (logic) ? cc.v3(0, -50) : cc.v3(0, 0)
        this.timeup.scale = (logic) ? 1 : 1.4
        this.amazing.scale = (logic) ? 1 : 1.4

        this.btnDownload.active = (logic) ? true : false
        if (logic == true) {
            this.isDoc = true
            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;
            // this.camera.node.position = cc.v3(0, -70)
            this.btnDownload.getComponent(cc.Widget).bottom = 197

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33
            this.camera.zoomRatio = 2.6
            // this.camera.node.position = cc.v3(0, -150)

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.btnDownload.getComponent(cc.Widget).bottom = 400

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 2
                // this.camera.node.position = cc.v3(0, -120)
                this.btnDownload.active = false
            }
        }
        else {
            this.isDoc = false

            const frameSize = cc.view.getFrameSize();
            const width = frameSize.width;
            const height = frameSize.height;

            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            const aspectRatio = Math.max(width, height) / Math.min(width, height);

            // Gần đúng tỷ lệ màn hình iPhone X
            const IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            const TOLERANCE = 0.05;
            const IPAD_RATIO = 1024 / 768;          // ≈ 1.33

            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {

            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                this.camera.zoomRatio = 0.85
                this.camera.node.position = cc.v3(0, -50)
                // this.btnDownload.active = true

            }
        }


    }
}
