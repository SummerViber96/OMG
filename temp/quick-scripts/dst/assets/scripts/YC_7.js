
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/YC_7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '957706E/TRGkoKlBZwdCJX6', 'YC_7');
// scripts/YC_7.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
globalThis.ruby = 0;
globalThis.countChar = 99;
globalThis.countDownBtn1 = false;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainCamera = null;
        _this.mainCamera2 = null;
        _this.linkToStore = null;
        _this.listCus = null;
        _this.listVetChem = null;
        _this.listGo = null;
        _this.preWood = null;
        _this.transer = null;
        _this.bag = null;
        _this.listCusPre = [];
        _this.listRay = null;
        _this.animCoin = null;
        _this.lbRuby = null;
        _this.logo = null;
        // @property(cc.Node)
        // listHouse: cc.Node = null;
        _this.listChar = [];
        _this.soundBg = null;
        _this.soundZee = null;
        _this.soundChat = null;
        _this.soundERR = null;
        _this.soundkhoan = null;
        _this.soundUd = null;
        _this.soundCoin = null;
        _this.listCard1 = null;
        _this.listCard2 = null;
        _this.bar1 = null;
        _this.bar2 = null;
        _this.cusBackNode = null;
        _this.noti = null;
        _this.noti2 = null;
        _this.endCard = null;
        _this.prePay = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.do = 0;
        _this.isvertical = false;
        _this.isCountChar = 0;
        _this.isCountUd = 1;
        _this.isCountUdMachine = 0;
        _this.isCountUdRoll = 0;
        _this.isMoveChar = false;
        _this.isRay = false;
        _this.isCountWood = 2;
        _this.arrCus = [];
        _this.arrPosWood = [
            cc.v3(-256.39, 53.70, 0.00), cc.v3(-278.48, 38.45, 0.00), cc.v3(-303.19, 23.20, 0.00), cc.v3(-327.38, 7.95, 0.00), cc.v3(-353.36, -6.77, 0.00), cc.v3(-376.52, -20.13, 0.00),
            cc.v3(-186.60, 8.14, 0.00), cc.v3(-208.69, -7.11, 0.00), cc.v3(-233.41, -22.36, 0.00), cc.v3(-257.60, -37.61, 0.00), cc.v3(-283.58, -52.34, 0.00), cc.v3(-306.73, -65.69, 0.00)
        ];
        _this.arrChem2 = [cc.v3(222, -125), cc.v3(121, -68), cc.v3(31, -15), cc.v3(-48, 39), cc.v3(-129, 93), cc.v3(-207, 149)];
        _this.isRoll1 = 0;
        _this.isRoll2 = 0;
        _this.isRoll3 = 0;
        // check() {
        //     this.isSlot = this.counthouse * (this.isUdHouse + 1)
        // }
        _this.isTrans = false;
        // createCus() {
        //     for (let i = 0; i < this.listCus.childrenCount; i++) {
        //         let child = this.listCus.children[i]
        //         child.getComponent(C).runPos(this.arrPos[i], 0.3)
        //         this.scheduleOnce(() => {
        //             child.getComponent(C).idle()
        //         }, 0.3)
        //     }
        //     let preCus = null
        //     let rd = Math.floor(Math.random() * 2)
        //     preCus = this.listChar[rd]
        //     let cus = cc.instantiate(preCus)
        //     cus.parent = this.listCus
        //     cus.position = cc.v3(-669, 106)
        // }
        // checkHand() {
        //     if (globalThis.ruby >= this.isValueExpand) {
        //         this.listCard.children[2].getChildByName("hand").active = true;
        //         return;
        //     }
        //     else if (globalThis.ruby >= this.isValueUd) {
        //         this.listCard.children[1].getChildByName("hand").active = true;
        //         return;
        //     }
        //     else {
        //         this.listCard.children[0].getChildByName("hand").active = true;
        //     }
        // }
        // btn_card1(event) {
        //     if (this.isCharmove >= this.counthouse * (this.isUdHouse + 1)) {
        //         this.noti.getComponent(cc.Animation).play()
        //         return;
        //     }
        //     // if (globalThis.countDownBtn1) return;
        //     // globalThis.countDownBtn1 = true;
        //     cc.audioEngine.play(this.soundkhoan, false, 1)
        //     globalThis.countChar--;
        //     let child = this.listCus.children[0]
        //     child.parent = this.node;
        //     this.isCharmove++;
        //     let arrbed = []
        //     globalThis.ruby -= 1
        //     this.offHand()
        //     if ((this.isCharmove <= this.isMaxCharHouse) || (this.isHouse1 < this.isMaxCharHouse)) {
        //         arrbed = this.arrPosbed[this.isUdHouse]
        //         let pos = arrbed[this.isHouse1]
        //         this.isHouse1++
        //         child.getComponent(C).runPos(cc.v3(28, 454), 1)
        //         this.scheduleOnce(() => {
        //             child.position = pos
        //             child.getComponent(C).sleep()
        //             child.scaleX = 1
        //         }, 1)
        //         this.scheduleOnce(() => {
        //             globalThis.ruby += 50
        //             this.createPay(child.position.add(cc.v3(0, 60)))
        //             this.check2()
        //             this.isCharmove--
        //             this.isHouse1--
        //             cc.audioEngine.play(this.soundCoin, false, 0.6)
        //             child.getComponent(C).getHappy()
        //             child.setPosition(child.position.add(cc.v3(50, 0)))
        //             child.getComponent(C).runPos(cc.v3(-331, 188), 1.2)
        //             this.scheduleOnce(() => {
        //                 child.getComponent(C).runPos(cc.v3(-623, -205), 1.1)
        //             }, 1.2)
        //             this.scheduleOnce(() => {
        //                 child.destroy()
        //             }, 2.2)
        //         }, 1.6)
        //         this
        //     }
        //     else if (this.counthouse > 1) {
        //         child.parent = this.cusBackNode
        //         arrbed = this.arrPosbed2[this.isUdHouse]
        //         // let pos = arrbed[this.isHouse2 - this.isMaxCharHouse - 1]
        //         let pos = arrbed[this.isHouse2]
        //         this.isHouse2++
        //         // console.log(pos.toString())
        //         child.getComponent(C).runPos(cc.v3(-847, 738), 2)
        //         this.scheduleOnce(() => {
        //             this.isCharmove--
        //             this.isHouse2--
        //             child.getComponent(C).runPos(cc.v3(-554, 878), 1)
        //         }, 2)
        //         this.scheduleOnce(() => {
        //             child.position = pos
        //             child.getComponent(C).sleep()
        //             child.scaleX = 1
        //         }, 3.1)
        //         this.scheduleOnce(() => {
        //             globalThis.ruby += 50
        //             this.check2()
        //             this.createPay(child.position.add(cc.v3(0, 60)))
        //             cc.audioEngine.play(this.soundCoin, false, 0.6)
        //             child.getComponent(C).getHappy()
        //             child.setPosition(child.position.add(cc.v3(50, 0)))
        //             child.getComponent(C).runPos(cc.v3(-908, 575), 1.2)
        //             this.scheduleOnce(() => {
        //                 child.getComponent(C).runPos(cc.v3(-1549, 0), 2)
        //             }, 1.2)
        //             this.scheduleOnce(() => {
        //                 child.destroy()
        //             }, 2.2)
        //         }, 3.6)
        //     }
        //     this.createCus()
        // }
        // isValueUd = 60;
        // isValueExpand = 100
        // btn_udHouse(event) {
        //     if (globalThis.ruby < this.isValueUd) {
        //         this.noti2.play()
        //         return;
        //     }
        //     if (this.isUdHouse > 1) {
        //         this.onEndGame()
        //         return;
        //     }
        //     globalThis.ruby -= this.isValueUd
        //     this.offHand()
        //     cc.audioEngine.play(this.soundUd, false, 1)
        //     this.isValueUd += 100 * (this.isUdHouse + 1)
        //     event.currentTarget.getComponent("card").current = this.isValueUd
        //     event.currentTarget.getComponent("card").lbCurrent.getComponent(cc.Label).string = this.isValueUd.toString()
        //     if (this.isUdHouse == 0) {
        //         for (let i = 0; i < this.counthouse; i++) {
        //             let child = this.listHouse.children[i]
        //             child.getComponent(cc.Animation).play("house_ud1")
        //             child.getChildByName("effUd").getComponent(cc.Animation).play()
        //         }
        //         this.isMaxCharHouse = 2
        //     }
        //     else if (this.isUdHouse == 1) {
        //         for (let i = 0; i < this.counthouse; i++) {
        //             let child = this.listHouse.children[i]
        //             child.getComponent(cc.Animation).play("house_ud2")
        //             child.getChildByName("effUd").getComponent(cc.Animation).play()
        //         }
        //         this.isMaxCharHouse = 3
        //     }
        //     this.isUdHouse++
        // }
        // btn_expand(event) {
        //     if (globalThis.ruby < this.isValueExpand) {
        //         this.noti2.play()
        //         return;
        //     }
        //     if (this.counthouse >= 4) {
        //         this.onEndGame()
        //         return;
        //     }
        //     cc.audioEngine.play(this.soundUd, false, 1)
        //     globalThis.ruby -= this.isValueExpand
        //     this.offHand()
        //     this.isValueExpand += 140 * (this.counthouse)
        //     event.currentTarget.getComponent("card").current = this.isValueExpand
        //     event.currentTarget.getComponent("card").lbCurrent.getComponent(cc.Label).string = this.isValueExpand.toString()
        //     let child = this.listHouse.children[this.counthouse]
        //     child.getChildByName("eff_open").getComponent(cc.Animation).play()
        //     child.getChildByName("build").active = false;
        //     switch (this.isUdHouse) {
        //         case 0: child.getChildByName("icon").scale = 1
        //             // cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-320, 410) }).start()
        //             break;
        //         case 1: child.getChildByName("icon2").scale = 1
        //             break;
        //         case 2: child.getChildByName("icon3").scale = 1
        //             break;
        //     }
        //     switch (this.counthouse) {
        //         case 1:
        //             cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(-320, 410) }).start()
        //             cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(-270, 550) }).start()
        //             cc.tween(this.mainCamera).by(0.3, { zoomRatio: -0.2 }).start()
        //             // cc.tween(this.mainCamera2).by(0.3, { zoomRatio: -0.6 }).start()
        //             break;
        //         case 2:
        //             cc.tween(this.mainCamera.node).to(0.3, { position: cc.v3(0, 600) }).start()
        //             cc.tween(this.mainCamera2.node).to(0.3, { position: cc.v3(0, 800) }).start()
        //             cc.tween(this.mainCamera).by(0.3, { zoomRatio: -0.2 }).start()
        //             cc.tween(this.mainCamera2).by(0.3, { zoomRatio: -0.6 }).start()
        //             break;
        //         case 3:
        //             break;
        //     }
        //     this.counthouse++
        // }
        _this.listCard = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        for (var _i = 0, _a = this.listGo.children; _i < _a.length; _i++) {
            var child_1 = _a[_i];
            console.log(child_1.position.toString());
        }
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBg, true, 0.3);
        this.schedule(function () {
            _this.createWood();
        }, 1.2);
        var child = this.listChar[0];
        child.active = true;
        this.scheduleOnce(function () {
            child.getChildByName("vfx_chatGo").getComponent(cc.Animation).play();
            cc.audioEngine.play(_this.soundChat, false, 0.2);
            _this.schedule(function () {
                child.getChildByName("vfx_chatGo").getComponent(cc.Animation).play();
                cc.audioEngine.play(_this.soundChat, false, 0.2);
            }, 1.3);
        }, 0.7);
        for (var i = 0; i < this.listCus.childrenCount; i++) {
            this.arrCus.push(this.listCus.children[i]);
        }
    };
    NewClass.prototype.startTranser = function () {
        var _this = this;
        if (this.isMoveChar)
            return;
        if (this.isCountWood >= 3) {
            if (this.isRay == false) {
                this.isCountWood -= 3;
                this.isMoveChar = true;
                console.log("go ne");
                this.scheduleOnce(function () {
                    _this.transer.getComponent("transer").move1();
                }, 0.6);
                var check = this.listGo.childrenCount - 1;
                for (var i = check; i >= check - 2; i--) {
                    var wood = this.listGo.children[i];
                    var pos = this.listGo.convertToWorldSpaceAR(wood.position);
                    pos = this.bag.convertToNodeSpaceAR(pos);
                    wood.parent = this.bag;
                    wood.position = pos;
                    var posEnd = this.bag.childrenCount;
                    var posMid = cc.v2((pos.x - 24) / 2, 55.6 + posEnd * 20 + 150);
                    cc.tween(wood).delay(0.05 * posEnd).bezierTo(0.3, cc.v2(pos.x, pos.y), posMid, cc.v2(24, 55.6 + posEnd * 20)).start();
                    // cc.tween(wood).delay(0.05 * posEnd).to(0.3, { position: cc.v3(24, 55.6 + posEnd * 20) }).start()
                }
            }
            else {
            }
        }
    };
    NewClass.prototype.btn_addChar = function () {
        if (this.isCountChar >= 5)
            return;
        this.isCountChar++;
        this.addNewChar();
    };
    NewClass.prototype.moveBack = function () {
        var _this = this;
        // let child = this.listCus.children[this.listCus.childrenCount-1];
        // cc.v3(-6, -417)
        this.animCoin.play();
        this.lbRuby.getComponent(cc.Animation).play();
        globalThis.ruby += 100;
        cc.audioEngine.play(this.soundCoin, false, 1);
        // for (let i = 0; i < this.listCus.childrenCount; i++) {
        //     let child = this.listCus.children[i]
        //     this.listCus.children[i].getComponent(C).anim.setAnimation(0, "Walk", true)
        //     if (this.listCus.children[i + 1]) {
        //         cc.tween(this.listCus.children[i]).to(0.3, { position: this.listCus.children[i + 1].position }).call(() => {
        //             child.getComponent(C).anim.setAnimation(0, "Idle", true)
        //         }).start()
        //     }
        //     else {
        //         cc.tween(this.listCus.children[i]).by(0.3, { position: cc.v3(77 - 143, -372.219 + 339) }).call(() => {
        //             child.getComponent(C).anim.setAnimation(0, "Idle", true)
        //             if (i == this.listCus.childrenCount - 1) {
        //                 this.createNewCus()
        //                 child.parent = this.node
        //                 child.getComponent(C).anim.setAnimation(0, "Walk", true)
        //                 cc.tween(child).to(3, { position: cc.v3(-1027, 142) }).call(() => {
        //                     child.destroy()
        //                 }).start()
        //             }
        //         }).start()
        //     }
        // }
        var length = this.arrCus.length;
        var _loop_1 = function (i) {
            var child = this_1.arrCus[i];
            child.getComponent(C).anim.setAnimation(0, "Walk", true);
            if (i < length - 1) {
                cc.tween(child).to(0.3, { position: this_1.arrCus[i + 1].position }).call(function () {
                    child.getComponent(C).anim.setAnimation(0, "Idle", true);
                }).start();
            }
            else {
                cc.tween(child).by(0.3, { position: cc.v3(77 - 143, -372.219 + 339) }).call(function () {
                    // child.getComponent(C).anim.setAnimation(0, "Idle", true)
                    // if (i == this.arrCus.length - 1) {
                    child.parent = _this.node;
                    child.getComponent(C).anim.setAnimation(0, "Walk", true);
                    _this.arrCus.pop();
                    _this.createNewCus();
                    child.getComponent(C).getHappy();
                    cc.tween(child).to(3, { position: cc.v3(-1027, 142) }).call(function () {
                        child.destroy();
                    }).start();
                    // }
                }).start();
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.arrCus.length; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.createNewCus = function () {
        var rd = Math.floor(Math.random() * this.listCusPre.length);
        var cus = cc.instantiate(this.listCusPre[rd]);
        // cus.parent = this.listCus;
        this.listCus.addChild(cus, cc.macro.MIN_ZINDEX);
        cus.position = cc.v3(1001, 149);
        // cus.zIndex = 1000 + this.isCount
        cus.zIndex = this.arrCus[0].zIndex - 1;
        cus.getComponent(C).idle();
        this.arrCus.unshift(cus);
    };
    NewClass.prototype.createWood = function () {
        var _this = this;
        var wood = cc.instantiate(this.preWood);
        wood.parent = this.listGo;
        if (this.isCountWood < this.arrPosWood.length) {
        }
        var col = Math.floor(this.isCountWood / this.arrPosWood.length);
        var posCheck = this.isCountWood - col * this.arrPosWood.length;
        var posStart = this.arrPosWood[posCheck].add(cc.v3(0, col * 12 + 100));
        var posEnd = this.arrPosWood[posCheck].add(cc.v3(0, col * 12));
        // wood.position=this.arrPosWood[posCheck]
        // wood.y=wood.y+col*12
        wood.position = posStart;
        // wood.move=false
        cc.tween(wood).to(0.15, { position: posEnd }).call(function () {
            _this.startTranser();
        }).start();
        // console.log("posCheck", posCheck)
        this.isCountWood++;
    };
    NewClass.prototype.addNewChar = function () {
        var _this = this;
        this.schedule(function () {
            _this.createWood();
        }, 1.2);
        cc.audioEngine.play(this.soundUd, false, 1);
        var btnChar = this.listCard1.children[0].getComponent("card");
        btnChar.current += 50;
        var btnChar2 = this.listCard2.children[0].getComponent("card");
        btnChar2.current += 50;
        var child = this.listChar[this.isCountChar];
        child.active = true;
        child.getChildByName("vfx_smoke").getComponent(cc.Animation).play("vfx_smoke");
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.soundChat, false, 0.2);
            child.getChildByName("vfx_chatGo").getComponent(cc.Animation).play();
            _this.schedule(function () {
                cc.audioEngine.play(_this.soundChat, false, 0.2);
                child.getChildByName("vfx_chatGo").getComponent(cc.Animation).play();
            }, 1.3);
        }, 0.7);
        for (var i = 1; i < child.childrenCount - 1; i++) {
            child.children[i].active = false;
        }
        this.scheduleOnce(function () {
            _this.listVetChem.children[_this.isCountChar].active = true;
        }, 0.8);
        child.children[this.isCountUdMachine + 1].active = true;
    };
    NewClass.prototype.btn_addMachine = function () {
        if (this.isCountUdMachine >= 2) {
            this.linkToStore.getComponent("AdManager").openAdUrl();
            return;
        }
        this.isCountUdMachine++;
        cc.audioEngine.play(this.soundUd, false, 1);
        var btnChar = this.listCard1.children[1].getComponent("card");
        btnChar.current += 1000;
        var btnChar2 = this.listCard2.children[1].getComponent("card");
        btnChar2.current += 1000;
        for (var j = 0; j < this.isCountChar + 1; j++) {
            var child = this.listChar[j];
            for (var i = 1; i < child.childrenCount - 1; i++) {
                child.children[i].active = false;
                // this.listVetChem.children[i].position = this.listVetChem.children[i].position.add(cc.v3(50, 80))
                this.listVetChem.children[i].position = this.arrChem2[i].add(cc.v3(20, -40));
                this.listVetChem.children[i].scaleX = 1.1;
            }
            this.listVetChem.children[0].position = this.arrChem2[0].add(cc.v3(20, -30));
            // if()
            if (this.isCountUdMachine == 1) {
                child.getChildByName("Cut_Machine").active = true;
            }
            else if (this.isCountUdMachine == 2) {
                child.getChildByName("Cut_Machine2").active = true;
            }
            // child.getChildByName("")
            child.getChildByName("vfx_smoke").getComponent(cc.Animation).play();
        }
    };
    NewClass.prototype.btn_addRoll = function () {
        var _this = this;
        if (this.isCountUdRoll >= 1) {
            this.linkToStore.getComponent("AdManager").openAdUrl();
            return;
        }
        this.isCountUdRoll++;
        cc.audioEngine.play(this.soundUd, false, 1);
        this.isRay = true;
        this.transer.active = false;
        var btnChar = this.listCard1.children[2].getComponent("card");
        btnChar.current += 800;
        var btnChar2 = this.listCard2.children[2].getComponent("card");
        btnChar2.current += 800;
        if (this.isCountUdRoll == 1) {
            this.listRay.getChildByName("vfx_smoke").getComponent(cc.Animation).play();
            this.listRay.children[1].active = true;
            this.schedule(function () {
                var wood = _this.listGo.children[_this.listGo.childrenCount - 1];
                var child = _this.listRay.children[1].children[0];
                if (wood) {
                    _this.isCountWood -= 1;
                    var pos = _this.listGo.convertToWorldSpaceAR(wood.position);
                    pos = child.convertToNodeSpaceAR(pos);
                    wood.parent = child;
                    wood.position = pos;
                    var posEnd = cc.v2(130, 89);
                    var posMid = cc.v2((pos.x - 24) / 2, 55.6 + _this.isRoll1 * 20 + 150);
                    wood.stopAllActions();
                    cc.tween(wood).delay(0.05 * _this.isRoll1).bezierTo(0.3, cc.v2(pos.x, pos.y), posMid, posEnd)
                        .call(function () {
                        wood.scale = 0.8;
                    })
                        .to(0.6, { position: cc.v3(-123.9 + _this.isRoll1 * (23), -60 + _this.isRoll1 * (20)) })
                        .call(function () {
                        _this.isRoll1++;
                        if (_this.isRoll1 == 3) {
                            _this.isRoll1 = 0;
                            _this.checkTrans(child);
                        }
                    }).start();
                    // cc.tween(wood).delay(0.05 * posEnd).to(0.3, {scale:0.8}).start()
                }
            }, 0.3);
        }
        else {
            this.isCountWood -= 1;
            this.listRay.children[0].active = true;
            this.listRay.getChildByName("vfx_smoke").getComponent(cc.Animation).play();
            this.listRay.children[2].active = true;
            //check
            this.schedule(function () {
                var wood = _this.listGo.children[_this.listGo.childrenCount - 1];
                var child = _this.listRay.children[0].children[0];
                if (wood) {
                    // let wood = this.listGo.children[this.listGo.childrenCount - 1];
                    var pos = _this.listGo.convertToWorldSpaceAR(wood.position);
                    pos = child.convertToNodeSpaceAR(pos);
                    wood.parent = child;
                    wood.position = pos;
                    wood.stopAllActions();
                    var posEnd = cc.v2(130, 89);
                    var posMid = cc.v2((pos.x - 24) / 2, 55.6 + _this.isRoll1 * 20 + 150);
                    cc.tween(wood).delay(0.05 * _this.isRoll1).bezierTo(0.3, cc.v2(pos.x, pos.y), posMid, posEnd).call(function () {
                        if (_this.isRoll2 == 3) {
                            _this.isRoll2 = 0;
                            _this.checkTrans(child);
                        }
                    }).to(0.5, { position: cc.v3(-123.9 + _this.isRoll2 * (23), -60 + _this.isRoll2 * (20)) }).start();
                    // cc.tween(wood).delay(0.05 * posEnd).to(0.3, {scale:0.8}).start()
                }
            }, 0.3);
            this.schedule(function () {
                var wood = _this.listGo.children[_this.listGo.childrenCount - 1];
                var child = _this.listRay.children[2].children[0];
                if (wood) {
                    // let wood = this.listGo.children[this.listGo.childrenCount - 1];
                    var pos = _this.listGo.convertToWorldSpaceAR(wood.position);
                    pos = child.convertToNodeSpaceAR(pos);
                    wood.parent = child;
                    wood.position = pos;
                    wood.stopAllActions();
                    var posEnd = cc.v2(130, 89);
                    var posMid = cc.v2((pos.x - 24) / 2, 55.6 + _this.isRoll1 * 20 + 150);
                    cc.tween(wood).delay(0.05 * _this.isRoll1).bezierTo(0.3, cc.v2(pos.x, pos.y), posMid, posEnd)
                        .to(0.5, { position: cc.v3(-123.9, -60) })
                        .call(function () {
                        _this.isRoll3++;
                        if (_this.isRoll3 == 3) {
                            _this.isRoll3 = 0;
                            _this.checkTrans(child);
                        }
                    }).start();
                    // cc.tween(wood).delay(0.05 * posEnd).to(0.3, {scale:0.8}).start()
                }
            }, 0.3);
        }
    };
    NewClass.prototype.checkTrans = function (parent) {
        var _this = this;
        if (this.isTrans)
            return;
        this.isTrans = true;
        // console.log("checkTrans")
        var cus = this.arrCus[this.arrCus.length - 1];
        var count = 0;
        if (parent.childrenCount >= 3) {
            var _loop_2 = function (i) {
                var child = parent.children[i];
                if (child) {
                    var pos = child.position;
                    pos = parent.convertToWorldSpaceAR(pos);
                    pos = cus.convertToNodeSpaceAR(pos);
                    child.parent = cus;
                    child.position = pos;
                    count++;
                    child.stopAllActions();
                    cc.tween(child).delay(0.05 * count).bezierTo(0.3, cc.v2(pos.x, pos.y), cc.v2(pos.x / 2, pos.y + 200), cc.v2(0, 50)).call(function () {
                        child.destroy();
                    }).start();
                }
            };
            for (var i = 3; i >= 0; i--) {
                _loop_2(i);
            }
            this.scheduleOnce(function () {
                // this.move2()
                _this.isTrans = false;
                _this.moveBack();
            }, 0.5);
        }
    };
    NewClass.prototype.onEndGame = function () {
        // this.endCard.active = true;
        // this.linkToStore.getComponent("AdManager").openAdUrl()
        // this.linkToStore.active = true
    };
    NewClass.prototype.createPay = function (pos) {
        var pay = cc.instantiate(this.prePay);
        pay.parent = this.node;
        pay.scaleX = -1;
        pay.position = pos;
    };
    NewClass.prototype.update = function (dt) {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                // this.isScale = 1
                // this.mainCamera.zoomRatio = 1
                this.listCard = this.listCard1;
                this.listCard1.active = true;
                this.listCard2.active = false;
                this.logo.scale = 0.4;
                this.logo.getComponent(cc.Widget).left = 219;
                this.logo.getComponent(cc.Widget).top = 116;
                // this.bar1.active = true;
                // this.bar2.active = false;
                this.endCard.getChildByName("banner1").active = true;
                this.endCard.getChildByName("banner2").active = false;
                this.mainCamera.node.active = true;
                this.mainCamera2.node.active = false;
                if (cc.winSize.height / cc.winSize.width < 1.35) {
                    canvas.fitHeight = true;
                }
            }
        }
        else {
            // this.mainCamera.zoomRatio = 1.5
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            // this.isScale = 1.5
            this.listCard = this.listCard2;
            this.logo.scale = 0.6;
            this.logo.getComponent(cc.Widget).left = 300;
            this.logo.getComponent(cc.Widget).top = 150;
            this.listCard1.active = false;
            this.listCard2.active = true;
            // this.bar1.active = false;
            // this.bar2.active = true;
            this.endCard.getChildByName("banner1").active = false;
            this.endCard.getChildByName("banner2").active = true;
            this.mainCamera.node.active = false;
            this.mainCamera2.node.active = true;
        }
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCus", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listVetChem", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listGo", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "transer", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bag", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "listCusPre", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listRay", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "animCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lbRuby", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChar", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundZee", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChat", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundERR", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundkhoan", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bar1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bar2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cusBackNode", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "noti", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "noti2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "prePay", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNJO0lBbEVQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4dUI1QjtJQUFELGVBQUM7Q0E5dUJELEFBOHVCQyxDQTl1QnFDLEVBQUUsQ0FBQyxTQUFTLEdBOHVCakQ7a0JBOXVCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImdsb2JhbFRoaXMucnVieSA9IDBcbmdsb2JhbFRoaXMuY291bnRDaGFyID0gOTlcbmdsb2JhbFRoaXMuY291bnREb3duQnRuMSA9IGZhbHNlXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIG1haW5DYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtYWluQ2FtZXJhMjogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEN1czogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdFZldENoZW06IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RHbzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVXb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRyYW5zZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJhZzogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGxpc3RDdXNQcmU6IGNjLlByZWZhYltdID0gW11cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0UmF5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxuICAgIGFuaW1Db2luOiBjYy5BbmltYXRpb24gPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJSdWJ5OiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gbGlzdEhvdXNlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q2hhcjogY2MuTm9kZVtdID0gW11cblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kWmVlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDaGF0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRFUlI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZGtob2FuOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRVZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ29pbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q2FyZDE6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENhcmQyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiYXIxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiYXIyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjdXNCYWNrTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBub3RpOiBjYy5BbmltYXRpb24gPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBub3RpMjogY2MuQW5pbWF0aW9uID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVQYXk6IGNjLlByZWZhYiA9IG51bGxcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xuICAgIGRvID0gMFxuICAgIGlzdmVydGljYWwgPSBmYWxzZTtcbiAgICBpc0NvdW50Q2hhciA9IDA7XG4gICAgaXNDb3VudFVkID0gMTtcbiAgICBpc0NvdW50VWRNYWNoaW5lID0gMDtcbiAgICBpc0NvdW50VWRSb2xsID0gMDtcbiAgICBpc01vdmVDaGFyID0gZmFsc2VcbiAgICBpc1JheSA9IGZhbHNlO1xuICAgIGlzQ291bnRXb29kID0gMlxuICAgIGFyckN1cyA9IFtdO1xuXG4gICAgYXJyUG9zV29vZCA9IFtcbiAgICAgICAgY2MudjMoLTI1Ni4zOSwgNTMuNzAsIDAuMDApLCBjYy52MygtMjc4LjQ4LCAzOC40NSwgMC4wMCksIGNjLnYzKC0zMDMuMTksIDIzLjIwLCAwLjAwKSwgY2MudjMoLTMyNy4zOCwgNy45NSwgMC4wMCksIGNjLnYzKC0zNTMuMzYsIC02Ljc3LCAwLjAwKSwgY2MudjMoLTM3Ni41MiwgLTIwLjEzLCAwLjAwKSxcbiAgICAgICAgY2MudjMoLTE4Ni42MCwgOC4xNCwgMC4wMCksIGNjLnYzKC0yMDguNjksIC03LjExLCAwLjAwKSwgY2MudjMoLTIzMy40MSwgLTIyLjM2LCAwLjAwKSwgY2MudjMoLTI1Ny42MCwgLTM3LjYxLCAwLjAwKSwgY2MudjMoLTI4My41OCwgLTUyLjM0LCAwLjAwKSwgY2MudjMoLTMwNi43MywgLTY1LjY5LCAwLjAwKV1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RHby5jaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2hpbGQucG9zaXRpb24udG9TdHJpbmcoKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hZENoYW5lbCA9PSAnTWludGVncmFsJykge1xuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDAuMylcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVdvb2QoKTtcbiAgICAgICAgfSwgMS4yKVxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDaGFyWzBdXG4gICAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwidmZ4X2NoYXRHb1wiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoYXQsIGZhbHNlLCAwLjIpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInZmeF9jaGF0R29cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hhdCwgZmFsc2UsIDAuMilcblxuICAgICAgICAgICAgfSwgMS4zKVxuICAgICAgICB9LCAwLjcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hcnJDdXMucHVzaCh0aGlzLmxpc3RDdXMuY2hpbGRyZW5baV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRUcmFuc2VyKCkge1xuICAgICAgICBpZiAodGhpcy5pc01vdmVDaGFyKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRXb29kID49IDMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmF5ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50V29vZCAtPSAzO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZlQ2hhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnbyBuZVwiKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2VyLmdldENvbXBvbmVudChcInRyYW5zZXJcIikubW92ZTEoKVxuICAgICAgICAgICAgICAgIH0sIDAuNilcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmxpc3RHby5jaGlsZHJlbkNvdW50IC0gMVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGVjazsgaSA+PSBjaGVjayAtIDI7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgd29vZCA9IHRoaXMubGlzdEdvLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0R28uY29udmVydFRvV29ybGRTcGFjZUFSKHdvb2QucG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuYmFnLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgICAgICAgICAgICAgd29vZC5wYXJlbnQgPSB0aGlzLmJhZ1xuICAgICAgICAgICAgICAgICAgICB3b29kLnBvc2l0aW9uID0gcG9zXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmJhZy5jaGlsZHJlbkNvdW50XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NNaWQgPSBjYy52MigocG9zLnggLSAyNCkgLyAyLCA1NS42ICsgcG9zRW5kICogMjAgKyAxNTApXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLmRlbGF5KDAuMDUgKiBwb3NFbmQpLmJlemllclRvKDAuMywgY2MudjIocG9zLngsIHBvcy55KSwgcG9zTWlkLCBjYy52MigyNCwgNTUuNiArIHBvc0VuZCAqIDIwKSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih3b29kKS5kZWxheSgwLjA1ICogcG9zRW5kKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKDI0LCA1NS42ICsgcG9zRW5kICogMjApIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBidG5fYWRkQ2hhcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudENoYXIgPj0gNSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzQ291bnRDaGFyKys7XG4gICAgICAgIHRoaXMuYWRkTmV3Q2hhcigpO1xuICAgIH1cbiAgICBtb3ZlQmFjaygpIHtcbiAgICAgICAgLy8gbGV0IGNoaWxkID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW3RoaXMubGlzdEN1cy5jaGlsZHJlbkNvdW50LTFdO1xuICAgICAgICAvLyBjYy52MygtNiwgLTQxNylcbiAgICAgICAgdGhpcy5hbmltQ29pbi5wbGF5KClcbiAgICAgICAgdGhpcy5sYlJ1YnkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgIGdsb2JhbFRoaXMucnVieSArPSAxMDBcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW2ldXG4gICAgICAgIC8vICAgICB0aGlzLmxpc3RDdXMuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMubGlzdEN1cy5jaGlsZHJlbltpICsgMV0pIHtcbiAgICAgICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RDdXMuY2hpbGRyZW5baV0pLnRvKDAuMywgeyBwb3NpdGlvbjogdGhpcy5saXN0Q3VzLmNoaWxkcmVuW2kgKyAxXS5wb3NpdGlvbiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxuICAgICAgICAvLyAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMubGlzdEN1cy5jaGlsZHJlbltpXSkuYnkoMC4zLCB7IHBvc2l0aW9uOiBjYy52Myg3NyAtIDE0MywgLTM3Mi4yMTkgKyAzMzkpIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXG5cbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuQ291bnQgLSAxKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld0N1cygpXG5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDMsIHsgcG9zaXRpb246IGNjLnYzKC0xMDI3LCAxNDIpIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuYXJyQ3VzLmxlbmd0aFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckN1c1tpXTtcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoaSA8IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMC4zLCB7IHBvc2l0aW9uOiB0aGlzLmFyckN1c1tpICsgMV0ucG9zaXRpb24gfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZCkuYnkoMC4zLCB7IHBvc2l0aW9uOiBjYy52Myg3NyAtIDE0MywgLTM3Mi4yMTkgKyAzMzkpIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGlsZC5nZXRDb21wb25lbnQoQykuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGkgPT0gdGhpcy5hcnJDdXMubGVuZ3RoIC0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnBvcCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3Q3VzKClcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmdldEhhcHB5KClcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDMsIHsgcG9zaXRpb246IGNjLnYzKC0xMDI3LCAxNDIpIH0pLmNhbGwoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcblxuXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgY3JlYXRlTmV3Q3VzKCkge1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RDdXNQcmUubGVuZ3RoKTtcbiAgICAgICAgbGV0IGN1cyA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEN1c1ByZVtyZF0pXG4gICAgICAgIC8vIGN1cy5wYXJlbnQgPSB0aGlzLmxpc3RDdXM7XG4gICAgICAgIHRoaXMubGlzdEN1cy5hZGRDaGlsZChjdXMsIGNjLm1hY3JvLk1JTl9aSU5ERVgpXG4gICAgICAgIGN1cy5wb3NpdGlvbiA9IGNjLnYzKDEwMDEsIDE0OSlcbiAgICAgICAgLy8gY3VzLnpJbmRleCA9IDEwMDAgKyB0aGlzLmlzQ291bnRcbiAgICAgICAgY3VzLnpJbmRleCA9IHRoaXMuYXJyQ3VzWzBdLnpJbmRleCAtIDFcbiAgICAgICAgY3VzLmdldENvbXBvbmVudChDKS5pZGxlKClcbiAgICAgICAgdGhpcy5hcnJDdXMudW5zaGlmdChjdXMpXG4gICAgfVxuICAgIGNyZWF0ZVdvb2QoKSB7XG5cbiAgICAgICAgbGV0IHdvb2QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVdvb2QpXG4gICAgICAgIHdvb2QucGFyZW50ID0gdGhpcy5saXN0R287XG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRXb29kIDwgdGhpcy5hcnJQb3NXb29kLmxlbmd0aCkge1xuXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IodGhpcy5pc0NvdW50V29vZCAvIHRoaXMuYXJyUG9zV29vZC5sZW5ndGgpXG5cbiAgICAgICAgbGV0IHBvc0NoZWNrID0gdGhpcy5pc0NvdW50V29vZCAtIGNvbCAqIHRoaXMuYXJyUG9zV29vZC5sZW5ndGg7XG4gICAgICAgIGxldCBwb3NTdGFydCA9IHRoaXMuYXJyUG9zV29vZFtwb3NDaGVja10uYWRkKGNjLnYzKDAsIGNvbCAqIDEyICsgMTAwKSlcbiAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuYXJyUG9zV29vZFtwb3NDaGVja10uYWRkKGNjLnYzKDAsIGNvbCAqIDEyKSlcbiAgICAgICAgLy8gd29vZC5wb3NpdGlvbj10aGlzLmFyclBvc1dvb2RbcG9zQ2hlY2tdXG4gICAgICAgIC8vIHdvb2QueT13b29kLnkrY29sKjEyXG4gICAgICAgIHdvb2QucG9zaXRpb24gPSBwb3NTdGFydDtcbiAgICAgICAgLy8gd29vZC5tb3ZlPWZhbHNlXG4gICAgICAgIGNjLnR3ZWVuKHdvb2QpLnRvKDAuMTUsIHsgcG9zaXRpb246IHBvc0VuZCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUcmFuc2VyKClcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvc0NoZWNrXCIsIHBvc0NoZWNrKVxuICAgICAgICB0aGlzLmlzQ291bnRXb29kKytcblxuXG4gICAgfVxuICAgIGFkZE5ld0NoYXIoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVXb29kKCk7XG4gICAgICAgIH0sIDEuMilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKVxuICAgICAgICBsZXQgYnRuQ2hhciA9IHRoaXMubGlzdENhcmQxLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcImNhcmRcIilcbiAgICAgICAgYnRuQ2hhci5jdXJyZW50ICs9IDUwXG4gICAgICAgIGxldCBidG5DaGFyMiA9IHRoaXMubGlzdENhcmQyLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcImNhcmRcIilcbiAgICAgICAgYnRuQ2hhcjIuY3VycmVudCArPSA1MFxuXG5cbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q2hhclt0aGlzLmlzQ291bnRDaGFyXVxuICAgICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInZmeF9zbW9rZVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwidmZ4X3Ntb2tlXCIpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoYXQsIGZhbHNlLCAwLjIpXG4gICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInZmeF9jaGF0R29cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG5cbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoYXQsIGZhbHNlLCAwLjIpXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhfY2hhdEdvXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgfSwgMS4zKVxuICAgICAgICB9LCAwLjcpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjaGlsZC5jaGlsZHJlbkNvdW50IC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdFZldENoZW0uY2hpbGRyZW5bdGhpcy5pc0NvdW50Q2hhcl0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB9LCAwLjgpXG4gICAgICAgIGNoaWxkLmNoaWxkcmVuW3RoaXMuaXNDb3VudFVkTWFjaGluZSArIDFdLmFjdGl2ZSA9IHRydWU7XG5cbiAgICB9XG4gICAgYXJyQ2hlbTIgPSBbY2MudjMoMjIyLCAtMTI1KSwgY2MudjMoMTIxLCAtNjgpLCBjYy52MygzMSwgLTE1KSwgY2MudjMoLTQ4LCAzOSksIGNjLnYzKC0xMjksIDkzKSwgY2MudjMoLTIwNywgMTQ5KV1cbiAgICBidG5fYWRkTWFjaGluZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudFVkTWFjaGluZSA+PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmdldENvbXBvbmVudChcIkFkTWFuYWdlclwiKS5vcGVuQWRVcmwoKVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0NvdW50VWRNYWNoaW5lKys7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSlcbiAgICAgICAgbGV0IGJ0bkNoYXIgPSB0aGlzLmxpc3RDYXJkMS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoXCJjYXJkXCIpXG4gICAgICAgIGJ0bkNoYXIuY3VycmVudCArPSAxMDAwXG4gICAgICAgIGxldCBidG5DaGFyMiA9IHRoaXMubGlzdENhcmQyLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChcImNhcmRcIilcbiAgICAgICAgYnRuQ2hhcjIuY3VycmVudCArPSAxMDAwXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5pc0NvdW50Q2hhciArIDE7IGorKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q2hhcltqXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjaGlsZC5jaGlsZHJlbkNvdW50IC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5saXN0VmV0Q2hlbS5jaGlsZHJlbltpXS5wb3NpdGlvbiA9IHRoaXMubGlzdFZldENoZW0uY2hpbGRyZW5baV0ucG9zaXRpb24uYWRkKGNjLnYzKDUwLCA4MCkpXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VmV0Q2hlbS5jaGlsZHJlbltpXS5wb3NpdGlvbj10aGlzLmFyckNoZW0yW2ldLmFkZChjYy52MygyMCwtNDApKVxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFZldENoZW0uY2hpbGRyZW5baV0uc2NhbGVYPTEuMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5saXN0VmV0Q2hlbS5jaGlsZHJlblswXS5wb3NpdGlvbj10aGlzLmFyckNoZW0yWzBdLmFkZChjYy52MygyMCwtMzApKVxuXG4gICAgICAgICAgICAvLyBpZigpXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvdW50VWRNYWNoaW5lID09IDEpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcIkN1dF9NYWNoaW5lXCIpLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNDb3VudFVkTWFjaGluZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJDdXRfTWFjaGluZTJcIikuYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcIlwiKVxuICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJ2Znhfc21va2VcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIGlzUm9sbDEgPSAwO1xuICAgIGlzUm9sbDIgPSAwO1xuICAgIGlzUm9sbDMgPSAwO1xuXG4gICAgYnRuX2FkZFJvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRVZFJvbGwgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5nZXRDb21wb25lbnQoXCJBZE1hbmFnZXJcIikub3BlbkFkVXJsKClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQ291bnRVZFJvbGwrK1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXG5cbiAgICAgICAgdGhpcy5pc1JheSA9IHRydWVcbiAgICAgICAgdGhpcy50cmFuc2VyLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGxldCBidG5DaGFyID0gdGhpcy5saXN0Q2FyZDEuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KFwiY2FyZFwiKVxuICAgICAgICBidG5DaGFyLmN1cnJlbnQgKz0gODAwXG4gICAgICAgIGxldCBidG5DaGFyMiA9IHRoaXMubGlzdENhcmQyLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChcImNhcmRcIilcbiAgICAgICAgYnRuQ2hhcjIuY3VycmVudCArPSA4MDBcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudFVkUm9sbCA9PSAxKSB7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdFJheS5nZXRDaGlsZEJ5TmFtZShcInZmeF9zbW9rZVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgICAgIHRoaXMubGlzdFJheS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgd29vZCA9IHRoaXMubGlzdEdvLmNoaWxkcmVuW3RoaXMubGlzdEdvLmNoaWxkcmVuQ291bnQgLSAxXVxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdFJheS5jaGlsZHJlblsxXS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgIGlmICh3b29kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDb3VudFdvb2QgLT0gMTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0R28uY29udmVydFRvV29ybGRTcGFjZUFSKHdvb2QucG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IGNoaWxkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgICAgICAgICAgICAgd29vZC5wYXJlbnQgPSBjaGlsZFxuICAgICAgICAgICAgICAgICAgICB3b29kLnBvc2l0aW9uID0gcG9zXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NFbmQgPSBjYy52MigxMzAsIDg5KVxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTWlkID0gY2MudjIoKHBvcy54IC0gMjQpIC8gMiwgNTUuNiArIHRoaXMuaXNSb2xsMSAqIDIwICsgMTUwKVxuICAgICAgICAgICAgICAgICAgICB3b29kLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4od29vZCkuZGVsYXkoMC4wNSAqIHRoaXMuaXNSb2xsMSkuYmV6aWVyVG8oMC4zLCBjYy52Mihwb3MueCwgcG9zLnkpLCBwb3NNaWQsIHBvc0VuZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b29kLnNjYWxlID0gMC44XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogY2MudjMoLTEyMy45ICsgdGhpcy5pc1JvbGwxICogKDIzKSwgLTYwICsgdGhpcy5pc1JvbGwxICogKDIwKSkgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUm9sbDErK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUm9sbDEgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUm9sbDEgPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUcmFucyhjaGlsZClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4od29vZCkuZGVsYXkoMC4wNSAqIHBvc0VuZCkudG8oMC4zLCB7c2NhbGU6MC44fSkuc3RhcnQoKVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAwLjMpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnRXb29kIC09IDE7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdFJheS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5saXN0UmF5LmdldENoaWxkQnlOYW1lKFwidmZ4X3Ntb2tlXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgdGhpcy5saXN0UmF5LmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvL2NoZWNrXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgd29vZCA9IHRoaXMubGlzdEdvLmNoaWxkcmVuW3RoaXMubGlzdEdvLmNoaWxkcmVuQ291bnQgLSAxXVxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdFJheS5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgIGlmICh3b29kKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB3b29kID0gdGhpcy5saXN0R28uY2hpbGRyZW5bdGhpcy5saXN0R28uY2hpbGRyZW5Db3VudCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0R28uY29udmVydFRvV29ybGRTcGFjZUFSKHdvb2QucG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IGNoaWxkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgICAgICAgICAgICAgd29vZC5wYXJlbnQgPSBjaGlsZFxuICAgICAgICAgICAgICAgICAgICB3b29kLnBvc2l0aW9uID0gcG9zXG4gICAgICAgICAgICAgICAgICAgIHdvb2Quc3RvcEFsbEFjdGlvbnMoKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NFbmQgPSBjYy52MigxMzAsIDg5KVxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTWlkID0gY2MudjIoKHBvcy54IC0gMjQpIC8gMiwgNTUuNiArIHRoaXMuaXNSb2xsMSAqIDIwICsgMTUwKVxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih3b29kKS5kZWxheSgwLjA1ICogdGhpcy5pc1JvbGwxKS5iZXppZXJUbygwLjMsIGNjLnYyKHBvcy54LCBwb3MueSksIHBvc01pZCwgcG9zRW5kKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUm9sbDIgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSb2xsMiA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVHJhbnMoY2hpbGQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtMTIzLjkgKyB0aGlzLmlzUm9sbDIgKiAoMjMpLCAtNjAgKyB0aGlzLmlzUm9sbDIgKiAoMjApKSB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHdvb2QpLmRlbGF5KDAuMDUgKiBwb3NFbmQpLnRvKDAuMywge3NjYWxlOjAuOH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDAuMylcblxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHdvb2QgPSB0aGlzLmxpc3RHby5jaGlsZHJlblt0aGlzLmxpc3RHby5jaGlsZHJlbkNvdW50IC0gMV07XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0UmF5LmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIGlmICh3b29kKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB3b29kID0gdGhpcy5saXN0R28uY2hpbGRyZW5bdGhpcy5saXN0R28uY2hpbGRyZW5Db3VudCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0R28uY29udmVydFRvV29ybGRTcGFjZUFSKHdvb2QucG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IGNoaWxkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgICAgICAgICAgICAgd29vZC5wYXJlbnQgPSBjaGlsZFxuICAgICAgICAgICAgICAgICAgICB3b29kLnBvc2l0aW9uID0gcG9zXG4gICAgICAgICAgICAgICAgICAgIHdvb2Quc3RvcEFsbEFjdGlvbnMoKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NFbmQgPSBjYy52MigxMzAsIDg5KVxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTWlkID0gY2MudjIoKHBvcy54IC0gMjQpIC8gMiwgNTUuNiArIHRoaXMuaXNSb2xsMSAqIDIwICsgMTUwKVxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih3b29kKS5kZWxheSgwLjA1ICogdGhpcy5pc1JvbGwxKS5iZXppZXJUbygwLjMsIGNjLnYyKHBvcy54LCBwb3MueSksIHBvc01pZCwgcG9zRW5kKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTEyMy45LCAtNjApIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUm9sbDMrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUm9sbDMgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUm9sbDMgPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUcmFucyhjaGlsZClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4od29vZCkuZGVsYXkoMC4wNSAqIHBvc0VuZCkudG8oMC4zLCB7c2NhbGU6MC44fSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMC4zKVxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICAvLyBjaGVjaygpIHtcbiAgICAvLyAgICAgdGhpcy5pc1Nsb3QgPSB0aGlzLmNvdW50aG91c2UgKiAodGhpcy5pc1VkSG91c2UgKyAxKVxuICAgIC8vIH1cbiAgICBpc1RyYW5zID0gZmFsc2VcbiAgICBjaGVja1RyYW5zKHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc1RyYW5zKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNUcmFucyA9IHRydWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2tUcmFuc1wiKVxuICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbdGhpcy5hcnJDdXMubGVuZ3RoIC0gMV1cbiAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICBpZiAocGFyZW50LmNoaWxkcmVuQ291bnQgPj0gMykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDM7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gcGFyZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2hpbGQucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IHBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gY3VzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IGN1cztcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS5kZWxheSgwLjA1ICogY291bnQpLmJlemllclRvKDAuMywgY2MudjIocG9zLngsIHBvcy55KSwgY2MudjIocG9zLnggLyAyLCBwb3MueSArIDIwMCksIGNjLnYyKDAsIDUwKSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb3ZlMigpXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RyYW5zID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWNrKClcbiAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgb25FbmRHYW1lKCkge1xuICAgICAgICAvLyB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5saW5rVG9TdG9yZS5nZXRDb21wb25lbnQoXCJBZE1hbmFnZXJcIikub3BlbkFkVXJsKClcblxuICAgICAgICAvLyB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgY3JlYXRlUGF5KHBvcykge1xuICAgICAgICBsZXQgcGF5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVQYXkpXG4gICAgICAgIHBheS5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgcGF5LnNjYWxlWCA9IC0xXG4gICAgICAgIHBheS5wb3NpdGlvbiA9IHBvc1xuICAgIH1cbiAgICAvLyBjcmVhdGVDdXMoKSB7XG5cblxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEN1cy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAvLyAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdEN1cy5jaGlsZHJlbltpXVxuICAgIC8vICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLnJ1blBvcyh0aGlzLmFyclBvc1tpXSwgMC4zKVxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5pZGxlKClcbiAgICAvLyAgICAgICAgIH0sIDAuMylcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBsZXQgcHJlQ3VzID0gbnVsbFxuICAgIC8vICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgIC8vICAgICBwcmVDdXMgPSB0aGlzLmxpc3RDaGFyW3JkXVxuICAgIC8vICAgICBsZXQgY3VzID0gY2MuaW5zdGFudGlhdGUocHJlQ3VzKVxuICAgIC8vICAgICBjdXMucGFyZW50ID0gdGhpcy5saXN0Q3VzXG4gICAgLy8gICAgIGN1cy5wb3NpdGlvbiA9IGNjLnYzKC02NjksIDEwNilcblxuICAgIC8vIH1cbiAgICAvLyBjaGVja0hhbmQoKSB7XG4gICAgLy8gICAgIGlmIChnbG9iYWxUaGlzLnJ1YnkgPj0gdGhpcy5pc1ZhbHVlRXhwYW5kKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzJdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSBpZiAoZ2xvYmFsVGhpcy5ydWJ5ID49IHRoaXMuaXNWYWx1ZVVkKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzFdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBidG5fY2FyZDEoZXZlbnQpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNDaGFybW92ZSA+PSB0aGlzLmNvdW50aG91c2UgKiAodGhpcy5pc1VkSG91c2UgKyAxKSkge1xuICAgIC8vICAgICAgICAgdGhpcy5ub3RpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC8vIGlmIChnbG9iYWxUaGlzLmNvdW50RG93bkJ0bjEpIHJldHVybjtcbiAgICAvLyAgICAgLy8gZ2xvYmFsVGhpcy5jb3VudERvd25CdG4xID0gdHJ1ZTtcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5ka2hvYW4sIGZhbHNlLCAxKVxuICAgIC8vICAgICBnbG9iYWxUaGlzLmNvdW50Q2hhci0tO1xuICAgIC8vICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bMF1cbiAgICAvLyAgICAgY2hpbGQucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgIC8vICAgICB0aGlzLmlzQ2hhcm1vdmUrKztcbiAgICAvLyAgICAgbGV0IGFycmJlZCA9IFtdXG4gICAgLy8gICAgIGdsb2JhbFRoaXMucnVieSAtPSAxXG4gICAgLy8gICAgIHRoaXMub2ZmSGFuZCgpXG4gICAgLy8gICAgIGlmICgodGhpcy5pc0NoYXJtb3ZlIDw9IHRoaXMuaXNNYXhDaGFySG91c2UpIHx8ICh0aGlzLmlzSG91c2UxIDwgdGhpcy5pc01heENoYXJIb3VzZSkpIHtcbiAgICAvLyAgICAgICAgIGFycmJlZCA9IHRoaXMuYXJyUG9zYmVkW3RoaXMuaXNVZEhvdXNlXVxuICAgIC8vICAgICAgICAgbGV0IHBvcyA9IGFycmJlZFt0aGlzLmlzSG91c2UxXVxuICAgIC8vICAgICAgICAgdGhpcy5pc0hvdXNlMSsrXG4gICAgLy8gICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykucnVuUG9zKGNjLnYzKDI4LCA0NTQpLCAxKVxuXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBwb3NcbiAgICAvLyAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuc2xlZXAoKVxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLnNjYWxlWCA9IDFcbiAgICAvLyAgICAgICAgIH0sIDEpXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgZ2xvYmFsVGhpcy5ydWJ5ICs9IDUwXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVQYXkoY2hpbGQucG9zaXRpb24uYWRkKGNjLnYzKDAsIDYwKSkpXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jaGVjazIoKVxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNDaGFybW92ZS0tXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0hvdXNlMS0tXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDAuNilcbiAgICAvLyAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuZ2V0SGFwcHkoKVxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLnNldFBvc2l0aW9uKGNoaWxkLnBvc2l0aW9uLmFkZChjYy52Myg1MCwgMCkpKVxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5ydW5Qb3MoY2MudjMoLTMzMSwgMTg4KSwgMS4yKVxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLnJ1blBvcyhjYy52MygtNjIzLCAtMjA1KSwgMS4xKVxuICAgIC8vICAgICAgICAgICAgIH0sIDEuMilcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIC8vICAgICAgICAgICAgIH0sIDIuMilcbiAgICAvLyAgICAgICAgIH0sIDEuNilcbiAgICAvLyAgICAgICAgIHRoaXNcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBlbHNlIGlmICh0aGlzLmNvdW50aG91c2UgPiAxKSB7XG4gICAgLy8gICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzLmN1c0JhY2tOb2RlXG4gICAgLy8gICAgICAgICBhcnJiZWQgPSB0aGlzLmFyclBvc2JlZDJbdGhpcy5pc1VkSG91c2VdXG4gICAgLy8gICAgICAgICAvLyBsZXQgcG9zID0gYXJyYmVkW3RoaXMuaXNIb3VzZTIgLSB0aGlzLmlzTWF4Q2hhckhvdXNlIC0gMV1cbiAgICAvLyAgICAgICAgIGxldCBwb3MgPSBhcnJiZWRbdGhpcy5pc0hvdXNlMl1cblxuICAgIC8vICAgICAgICAgdGhpcy5pc0hvdXNlMisrXG4gICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhwb3MudG9TdHJpbmcoKSlcbiAgICAvLyAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5ydW5Qb3MoY2MudjMoLTg0NywgNzM4KSwgMilcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQ2hhcm1vdmUtLVxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNIb3VzZTItLVxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5ydW5Qb3MoY2MudjMoLTU1NCwgODc4KSwgMSlcbiAgICAvLyAgICAgICAgIH0sIDIpXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBwb3NcbiAgICAvLyAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuc2xlZXAoKVxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLnNjYWxlWCA9IDFcbiAgICAvLyAgICAgICAgIH0sIDMuMSlcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBnbG9iYWxUaGlzLnJ1YnkgKz0gNTBcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNoZWNrMigpXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVQYXkoY2hpbGQucG9zaXRpb24uYWRkKGNjLnYzKDAsIDYwKSkpXG4gICAgLy8gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDAuNilcblxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5nZXRIYXBweSgpXG4gICAgLy8gICAgICAgICAgICAgY2hpbGQuc2V0UG9zaXRpb24oY2hpbGQucG9zaXRpb24uYWRkKGNjLnYzKDUwLCAwKSkpXG4gICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLnJ1blBvcyhjYy52MygtOTA4LCA1NzUpLCAxLjIpXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykucnVuUG9zKGNjLnYzKC0xNTQ5LCAwKSwgMilcbiAgICAvLyAgICAgICAgICAgICB9LCAxLjIpXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcbiAgICAvLyAgICAgICAgICAgICB9LCAyLjIpXG4gICAgLy8gICAgICAgICB9LCAzLjYpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5jcmVhdGVDdXMoKVxuICAgIC8vIH1cbiAgICAvLyBpc1ZhbHVlVWQgPSA2MDtcbiAgICAvLyBpc1ZhbHVlRXhwYW5kID0gMTAwXG4gICAgLy8gYnRuX3VkSG91c2UoZXZlbnQpIHtcbiAgICAvLyAgICAgaWYgKGdsb2JhbFRoaXMucnVieSA8IHRoaXMuaXNWYWx1ZVVkKSB7XG4gICAgLy8gICAgICAgICB0aGlzLm5vdGkyLnBsYXkoKVxuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0aGlzLmlzVWRIb3VzZSA+IDEpIHtcbiAgICAvLyAgICAgICAgIHRoaXMub25FbmRHYW1lKClcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGdsb2JhbFRoaXMucnVieSAtPSB0aGlzLmlzVmFsdWVVZFxuXG4gICAgLy8gICAgIHRoaXMub2ZmSGFuZCgpXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSlcbiAgICAvLyAgICAgdGhpcy5pc1ZhbHVlVWQgKz0gMTAwICogKHRoaXMuaXNVZEhvdXNlICsgMSlcbiAgICAvLyAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoXCJjYXJkXCIpLmN1cnJlbnQgPSB0aGlzLmlzVmFsdWVVZFxuICAgIC8vICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChcImNhcmRcIikubGJDdXJyZW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5pc1ZhbHVlVWQudG9TdHJpbmcoKVxuXG4gICAgLy8gICAgIGlmICh0aGlzLmlzVWRIb3VzZSA9PSAwKSB7XG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnRob3VzZTsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0SG91c2UuY2hpbGRyZW5baV1cbiAgICAvLyAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiaG91c2VfdWQxXCIpXG4gICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJlZmZVZFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHRoaXMuaXNNYXhDaGFySG91c2UgPSAyXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5pc1VkSG91c2UgPT0gMSkge1xuICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50aG91c2U7IGkrKykge1xuICAgIC8vICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdEhvdXNlLmNoaWxkcmVuW2ldXG4gICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhvdXNlX3VkMlwiKVxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwiZWZmVWRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG5cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHRoaXMuaXNNYXhDaGFySG91c2UgPSAzXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5pc1VkSG91c2UrK1xuICAgIC8vIH1cbiAgICAvLyBidG5fZXhwYW5kKGV2ZW50KSB7XG4gICAgLy8gICAgIGlmIChnbG9iYWxUaGlzLnJ1YnkgPCB0aGlzLmlzVmFsdWVFeHBhbmQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMubm90aTIucGxheSgpXG5cbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodGhpcy5jb3VudGhvdXNlID49IDQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMub25FbmRHYW1lKClcbiAgICAvLyAgICAgICAgIHJldHVybjtcblxuICAgIC8vICAgICB9XG5cblxuXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVkLCBmYWxzZSwgMSlcbiAgICAvLyAgICAgZ2xvYmFsVGhpcy5ydWJ5IC09IHRoaXMuaXNWYWx1ZUV4cGFuZFxuXG4gICAgLy8gICAgIHRoaXMub2ZmSGFuZCgpXG5cbiAgICAvLyAgICAgdGhpcy5pc1ZhbHVlRXhwYW5kICs9IDE0MCAqICh0aGlzLmNvdW50aG91c2UpXG4gICAgLy8gICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KFwiY2FyZFwiKS5jdXJyZW50ID0gdGhpcy5pc1ZhbHVlRXhwYW5kXG4gICAgLy8gICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KFwiY2FyZFwiKS5sYkN1cnJlbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmlzVmFsdWVFeHBhbmQudG9TdHJpbmcoKVxuICAgIC8vICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RIb3VzZS5jaGlsZHJlblt0aGlzLmNvdW50aG91c2VdXG4gICAgLy8gICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwiZWZmX29wZW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgLy8gICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwiYnVpbGRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgIHN3aXRjaCAodGhpcy5pc1VkSG91c2UpIHtcbiAgICAvLyAgICAgICAgIGNhc2UgMDogY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLnNjYWxlID0gMVxuICAgIC8vICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKC0zMjAsIDQxMCkgfSkuc3RhcnQoKVxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgY2FzZSAxOiBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcImljb24yXCIpLnNjYWxlID0gMVxuXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICBjYXNlIDI6IGNoaWxkLmdldENoaWxkQnlOYW1lKFwiaWNvbjNcIikuc2NhbGUgPSAxXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgc3dpdGNoICh0aGlzLmNvdW50aG91c2UpIHtcbiAgICAvLyAgICAgICAgIGNhc2UgMTpcbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MygtMzIwLCA0MTApIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoLTI3MCwgNTUwKSB9KS5zdGFydCgpXG4gICAgLy8gICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS5ieSgwLjMsIHsgem9vbVJhdGlvOiAtMC4yIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyKS5ieSgwLjMsIHsgem9vbVJhdGlvOiAtMC42IH0pLnN0YXJ0KClcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgIGNhc2UgMjpcbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MygwLCA2MDApIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoMCwgODAwKSB9KS5zdGFydCgpXG5cbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLmJ5KDAuMywgeyB6b29tUmF0aW86IC0wLjIgfSkuc3RhcnQoKVxuICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIpLmJ5KDAuMywgeyB6b29tUmF0aW86IC0wLjYgfSkuc3RhcnQoKVxuXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICBjYXNlIDM6XG5cbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLmNvdW50aG91c2UrK1xuXG4gICAgLy8gfVxuICAgIGxpc3RDYXJkID0gbnVsbFxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlzU2NhbGUgPSAxXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDFcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDYXJkID0gdGhpcy5saXN0Q2FyZDFcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDYXJkMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdENhcmQyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nby5zY2FsZSA9IDAuNFxuICAgICAgICAgICAgICAgIHRoaXMubG9nby5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMjE5XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDExNlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYmFyMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYmFyMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIxXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmdldENoaWxkQnlOYW1lKFwiYmFubmVyMlwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYTIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY2Mud2luU2l6ZS5oZWlnaHQgLyBjYy53aW5TaXplLndpZHRoIDwgMS4zNSkge1xuICAgICAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMS41XG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmlzU2NhbGUgPSAxLjVcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQgPSB0aGlzLmxpc3RDYXJkMlxuICAgICAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gMC42XG4gICAgICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDMwMFxuICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDE1MFxuXG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB0aGlzLmJhcjEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmJhcjIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjFcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVuZENhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYTIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG59XG4iXX0=