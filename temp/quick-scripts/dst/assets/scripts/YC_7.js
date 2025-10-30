
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWUNfNy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtBQUNuQixVQUFVLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtBQUN6QixVQUFVLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQTtBQUMxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTh1QkM7UUEzdUJHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixnQkFBVSxHQUFnQixFQUFFLENBQUE7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWlCLElBQUksQ0FBQTtRQUU3QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFDcEIscUJBQXFCO1FBQ3JCLDZCQUE2QjtRQUU3QixjQUFRLEdBQWMsRUFBRSxDQUFBO1FBR3hCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxhQUFPLEdBQWlC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QUFDOzZDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0k7SUFsRVAsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTh1QjVCO0lBQUQsZUFBQztDQTl1QkQsQUE4dUJDLENBOXVCcUMsRUFBRSxDQUFDLFNBQVMsR0E4dUJqRDtrQkE5dUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZ2xvYmFsVGhpcy5ydWJ5ID0gMFxyXG5nbG9iYWxUaGlzLmNvdW50Q2hhciA9IDk5XHJcbmdsb2JhbFRoaXMuY291bnREb3duQnRuMSA9IGZhbHNlXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBtYWluQ2FtZXJhMjogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3VzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFZldENoZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0R286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVdvb2Q6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRyYW5zZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWc6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbGlzdEN1c1ByZTogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UmF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBhbmltQ29pbjogY2MuQW5pbWF0aW9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsYlJ1Ynk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RIb3VzZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDaGFyOiBjYy5Ob2RlW10gPSBbXVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kWmVlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2hhdDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEVSUjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZGtob2FuOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2FyZDE6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RDYXJkMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhcjE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXIyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3VzQmFja05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIG5vdGk6IGNjLkFuaW1hdGlvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBub3RpMjogY2MuQW5pbWF0aW9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVBheTogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIGRvID0gMFxyXG4gICAgaXN2ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgaXNDb3VudENoYXIgPSAwO1xyXG4gICAgaXNDb3VudFVkID0gMTtcclxuICAgIGlzQ291bnRVZE1hY2hpbmUgPSAwO1xyXG4gICAgaXNDb3VudFVkUm9sbCA9IDA7XHJcbiAgICBpc01vdmVDaGFyID0gZmFsc2VcclxuICAgIGlzUmF5ID0gZmFsc2U7XHJcbiAgICBpc0NvdW50V29vZCA9IDJcclxuICAgIGFyckN1cyA9IFtdO1xyXG5cclxuICAgIGFyclBvc1dvb2QgPSBbXHJcbiAgICAgICAgY2MudjMoLTI1Ni4zOSwgNTMuNzAsIDAuMDApLCBjYy52MygtMjc4LjQ4LCAzOC40NSwgMC4wMCksIGNjLnYzKC0zMDMuMTksIDIzLjIwLCAwLjAwKSwgY2MudjMoLTMyNy4zOCwgNy45NSwgMC4wMCksIGNjLnYzKC0zNTMuMzYsIC02Ljc3LCAwLjAwKSwgY2MudjMoLTM3Ni41MiwgLTIwLjEzLCAwLjAwKSxcclxuICAgICAgICBjYy52MygtMTg2LjYwLCA4LjE0LCAwLjAwKSwgY2MudjMoLTIwOC42OSwgLTcuMTEsIDAuMDApLCBjYy52MygtMjMzLjQxLCAtMjIuMzYsIDAuMDApLCBjYy52MygtMjU3LjYwLCAtMzcuNjEsIDAuMDApLCBjYy52MygtMjgzLjU4LCAtNTIuMzQsIDAuMDApLCBjYy52MygtMzA2LjczLCAtNjUuNjksIDAuMDApXVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubGlzdEdvLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoaWxkLnBvc2l0aW9uLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC4zKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVdvb2QoKTtcclxuICAgICAgICB9LCAxLjIpXHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q2hhclswXVxyXG4gICAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInZmeF9jaGF0R29cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoYXQsIGZhbHNlLCAwLjIpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhfY2hhdEdvXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2hhdCwgZmFsc2UsIDAuMilcclxuXHJcbiAgICAgICAgICAgIH0sIDEuMylcclxuICAgICAgICB9LCAwLjcpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDdXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0VHJhbnNlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01vdmVDaGFyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudFdvb2QgPj0gMykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1JheSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50V29vZCAtPSAzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVDaGFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ28gbmVcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZXIuZ2V0Q29tcG9uZW50KFwidHJhbnNlclwiKS5tb3ZlMSgpXHJcbiAgICAgICAgICAgICAgICB9LCAwLjYpXHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmxpc3RHby5jaGlsZHJlbkNvdW50IC0gMVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoZWNrOyBpID49IGNoZWNrIC0gMjsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdvb2QgPSB0aGlzLmxpc3RHby5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0R28uY29udmVydFRvV29ybGRTcGFjZUFSKHdvb2QucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gdGhpcy5iYWcuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgICAgICAgICAgICAgIHdvb2QucGFyZW50ID0gdGhpcy5iYWdcclxuICAgICAgICAgICAgICAgICAgICB3b29kLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuYmFnLmNoaWxkcmVuQ291bnRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTWlkID0gY2MudjIoKHBvcy54IC0gMjQpIC8gMiwgNTUuNiArIHBvc0VuZCAqIDIwICsgMTUwKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLmRlbGF5KDAuMDUgKiBwb3NFbmQpLmJlemllclRvKDAuMywgY2MudjIocG9zLngsIHBvcy55KSwgcG9zTWlkLCBjYy52MigyNCwgNTUuNiArIHBvc0VuZCAqIDIwKSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHdvb2QpLmRlbGF5KDAuMDUgKiBwb3NFbmQpLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoMjQsIDU1LjYgKyBwb3NFbmQgKiAyMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgYnRuX2FkZENoYXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudENoYXIgPj0gNSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNDb3VudENoYXIrKztcclxuICAgICAgICB0aGlzLmFkZE5ld0NoYXIoKTtcclxuICAgIH1cclxuICAgIG1vdmVCYWNrKCkge1xyXG4gICAgICAgIC8vIGxldCBjaGlsZCA9IHRoaXMubGlzdEN1cy5jaGlsZHJlblt0aGlzLmxpc3RDdXMuY2hpbGRyZW5Db3VudC0xXTtcclxuICAgICAgICAvLyBjYy52MygtNiwgLTQxNylcclxuICAgICAgICB0aGlzLmFuaW1Db2luLnBsYXkoKVxyXG4gICAgICAgIHRoaXMubGJSdWJ5LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIGdsb2JhbFRoaXMucnVieSArPSAxMDBcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb2luLCBmYWxzZSwgMSlcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEN1cy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0Q3VzLmNoaWxkcmVuW2ldXHJcbiAgICAgICAgLy8gICAgIHRoaXMubGlzdEN1cy5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoQykuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmxpc3RDdXMuY2hpbGRyZW5baSArIDFdKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RDdXMuY2hpbGRyZW5baV0pLnRvKDAuMywgeyBwb3NpdGlvbjogdGhpcy5saXN0Q3VzLmNoaWxkcmVuW2kgKyAxXS5wb3NpdGlvbiB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgLy8gICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmxpc3RDdXMuY2hpbGRyZW5baV0pLmJ5KDAuMywgeyBwb3NpdGlvbjogY2MudjMoNzcgLSAxNDMsIC0zNzIuMjE5ICsgMzM5KSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChpID09IHRoaXMubGlzdEN1cy5jaGlsZHJlbkNvdW50IC0gMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld0N1cygpXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZCkudG8oMywgeyBwb3NpdGlvbjogY2MudjMoLTEwMjcsIDE0MikgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuYXJyQ3VzLmxlbmd0aFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV07XHJcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChpIDwgbGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpLnRvKDAuMywgeyBwb3NpdGlvbjogdGhpcy5hcnJDdXNbaSArIDFdLnBvc2l0aW9uIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS5ieSgwLjMsIHsgcG9zaXRpb246IGNjLnYzKDc3IC0gMTQzLCAtMzcyLjIxOSArIDMzOSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoaSA9PSB0aGlzLmFyckN1cy5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckN1cy5wb3AoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3Q3VzKClcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuZ2V0SGFwcHkoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS50bygzLCB7IHBvc2l0aW9uOiBjYy52MygtMTAyNywgMTQyKSB9KS5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY3JlYXRlTmV3Q3VzKCkge1xyXG4gICAgICAgIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdEN1c1ByZS5sZW5ndGgpO1xyXG4gICAgICAgIGxldCBjdXMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RDdXNQcmVbcmRdKVxyXG4gICAgICAgIC8vIGN1cy5wYXJlbnQgPSB0aGlzLmxpc3RDdXM7XHJcbiAgICAgICAgdGhpcy5saXN0Q3VzLmFkZENoaWxkKGN1cywgY2MubWFjcm8uTUlOX1pJTkRFWClcclxuICAgICAgICBjdXMucG9zaXRpb24gPSBjYy52MygxMDAxLCAxNDkpXHJcbiAgICAgICAgLy8gY3VzLnpJbmRleCA9IDEwMDAgKyB0aGlzLmlzQ291bnRcclxuICAgICAgICBjdXMuekluZGV4ID0gdGhpcy5hcnJDdXNbMF0uekluZGV4IC0gMVxyXG4gICAgICAgIGN1cy5nZXRDb21wb25lbnQoQykuaWRsZSgpXHJcbiAgICAgICAgdGhpcy5hcnJDdXMudW5zaGlmdChjdXMpXHJcbiAgICB9XHJcbiAgICBjcmVhdGVXb29kKCkge1xyXG5cclxuICAgICAgICBsZXQgd29vZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlV29vZClcclxuICAgICAgICB3b29kLnBhcmVudCA9IHRoaXMubGlzdEdvO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRXb29kIDwgdGhpcy5hcnJQb3NXb29kLmxlbmd0aCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IodGhpcy5pc0NvdW50V29vZCAvIHRoaXMuYXJyUG9zV29vZC5sZW5ndGgpXHJcblxyXG4gICAgICAgIGxldCBwb3NDaGVjayA9IHRoaXMuaXNDb3VudFdvb2QgLSBjb2wgKiB0aGlzLmFyclBvc1dvb2QubGVuZ3RoO1xyXG4gICAgICAgIGxldCBwb3NTdGFydCA9IHRoaXMuYXJyUG9zV29vZFtwb3NDaGVja10uYWRkKGNjLnYzKDAsIGNvbCAqIDEyICsgMTAwKSlcclxuICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy5hcnJQb3NXb29kW3Bvc0NoZWNrXS5hZGQoY2MudjMoMCwgY29sICogMTIpKVxyXG4gICAgICAgIC8vIHdvb2QucG9zaXRpb249dGhpcy5hcnJQb3NXb29kW3Bvc0NoZWNrXVxyXG4gICAgICAgIC8vIHdvb2QueT13b29kLnkrY29sKjEyXHJcbiAgICAgICAgd29vZC5wb3NpdGlvbiA9IHBvc1N0YXJ0O1xyXG4gICAgICAgIC8vIHdvb2QubW92ZT1mYWxzZVxyXG4gICAgICAgIGNjLnR3ZWVuKHdvb2QpLnRvKDAuMTUsIHsgcG9zaXRpb246IHBvc0VuZCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRyYW5zZXIoKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvc0NoZWNrXCIsIHBvc0NoZWNrKVxyXG4gICAgICAgIHRoaXMuaXNDb3VudFdvb2QrK1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBhZGROZXdDaGFyKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVdvb2QoKTtcclxuICAgICAgICB9LCAxLjIpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKVxyXG4gICAgICAgIGxldCBidG5DaGFyID0gdGhpcy5saXN0Q2FyZDEuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFwiY2FyZFwiKVxyXG4gICAgICAgIGJ0bkNoYXIuY3VycmVudCArPSA1MFxyXG4gICAgICAgIGxldCBidG5DaGFyMiA9IHRoaXMubGlzdENhcmQyLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcImNhcmRcIilcclxuICAgICAgICBidG5DaGFyMi5jdXJyZW50ICs9IDUwXHJcblxyXG5cclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDaGFyW3RoaXMuaXNDb3VudENoYXJdXHJcbiAgICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInZmeF9zbW9rZVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwidmZ4X3Ntb2tlXCIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDaGF0LCBmYWxzZSwgMC4yKVxyXG4gICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInZmeF9jaGF0R29cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENoYXQsIGZhbHNlLCAwLjIpXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInZmeF9jaGF0R29cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgIH0sIDEuMylcclxuICAgICAgICB9LCAwLjcpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY2hpbGQuY2hpbGRyZW5Db3VudCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBjaGlsZC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFZldENoZW0uY2hpbGRyZW5bdGhpcy5pc0NvdW50Q2hhcl0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSwgMC44KVxyXG4gICAgICAgIGNoaWxkLmNoaWxkcmVuW3RoaXMuaXNDb3VudFVkTWFjaGluZSArIDFdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgfVxyXG4gICAgYXJyQ2hlbTIgPSBbY2MudjMoMjIyLCAtMTI1KSwgY2MudjMoMTIxLCAtNjgpLCBjYy52MygzMSwgLTE1KSwgY2MudjMoLTQ4LCAzOSksIGNjLnYzKC0xMjksIDkzKSwgY2MudjMoLTIwNywgMTQ5KV1cclxuICAgIGJ0bl9hZGRNYWNoaW5lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRVZE1hY2hpbmUgPj0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmdldENvbXBvbmVudChcIkFkTWFuYWdlclwiKS5vcGVuQWRVcmwoKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzQ291bnRVZE1hY2hpbmUrKztcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXHJcbiAgICAgICAgbGV0IGJ0bkNoYXIgPSB0aGlzLmxpc3RDYXJkMS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoXCJjYXJkXCIpXHJcbiAgICAgICAgYnRuQ2hhci5jdXJyZW50ICs9IDEwMDBcclxuICAgICAgICBsZXQgYnRuQ2hhcjIgPSB0aGlzLmxpc3RDYXJkMi5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoXCJjYXJkXCIpXHJcbiAgICAgICAgYnRuQ2hhcjIuY3VycmVudCArPSAxMDAwXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmlzQ291bnRDaGFyICsgMTsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdENoYXJbal1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjaGlsZC5jaGlsZHJlbkNvdW50IC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubGlzdFZldENoZW0uY2hpbGRyZW5baV0ucG9zaXRpb24gPSB0aGlzLmxpc3RWZXRDaGVtLmNoaWxkcmVuW2ldLnBvc2l0aW9uLmFkZChjYy52Myg1MCwgODApKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VmV0Q2hlbS5jaGlsZHJlbltpXS5wb3NpdGlvbj10aGlzLmFyckNoZW0yW2ldLmFkZChjYy52MygyMCwtNDApKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VmV0Q2hlbS5jaGlsZHJlbltpXS5zY2FsZVg9MS4xXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5saXN0VmV0Q2hlbS5jaGlsZHJlblswXS5wb3NpdGlvbj10aGlzLmFyckNoZW0yWzBdLmFkZChjYy52MygyMCwtMzApKVxyXG5cclxuICAgICAgICAgICAgLy8gaWYoKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvdW50VWRNYWNoaW5lID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwiQ3V0X01hY2hpbmVcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNDb3VudFVkTWFjaGluZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcIkN1dF9NYWNoaW5lMlwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNoaWxkLmdldENoaWxkQnlOYW1lKFwiXCIpXHJcbiAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwidmZ4X3Ntb2tlXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgaXNSb2xsMSA9IDA7XHJcbiAgICBpc1JvbGwyID0gMDtcclxuICAgIGlzUm9sbDMgPSAwO1xyXG5cclxuICAgIGJ0bl9hZGRSb2xsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRVZFJvbGwgPj0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmdldENvbXBvbmVudChcIkFkTWFuYWdlclwiKS5vcGVuQWRVcmwoKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNDb3VudFVkUm9sbCsrXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICB0aGlzLmlzUmF5ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHJhbnNlci5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGxldCBidG5DaGFyID0gdGhpcy5saXN0Q2FyZDEuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KFwiY2FyZFwiKVxyXG4gICAgICAgIGJ0bkNoYXIuY3VycmVudCArPSA4MDBcclxuICAgICAgICBsZXQgYnRuQ2hhcjIgPSB0aGlzLmxpc3RDYXJkMi5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoXCJjYXJkXCIpXHJcbiAgICAgICAgYnRuQ2hhcjIuY3VycmVudCArPSA4MDBcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50VWRSb2xsID09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdFJheS5nZXRDaGlsZEJ5TmFtZShcInZmeF9zbW9rZVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgdGhpcy5saXN0UmF5LmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3b29kID0gdGhpcy5saXN0R28uY2hpbGRyZW5bdGhpcy5saXN0R28uY2hpbGRyZW5Db3VudCAtIDFdXHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RSYXkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgICAgIGlmICh3b29kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50V29vZCAtPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0R28uY29udmVydFRvV29ybGRTcGFjZUFSKHdvb2QucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gY2hpbGQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgICAgICAgICAgICAgIHdvb2QucGFyZW50ID0gY2hpbGRcclxuICAgICAgICAgICAgICAgICAgICB3b29kLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0VuZCA9IGNjLnYyKDEzMCwgODkpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc01pZCA9IGNjLnYyKChwb3MueCAtIDI0KSAvIDIsIDU1LjYgKyB0aGlzLmlzUm9sbDEgKiAyMCArIDE1MClcclxuICAgICAgICAgICAgICAgICAgICB3b29kLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih3b29kKS5kZWxheSgwLjA1ICogdGhpcy5pc1JvbGwxKS5iZXppZXJUbygwLjMsIGNjLnYyKHBvcy54LCBwb3MueSksIHBvc01pZCwgcG9zRW5kKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b29kLnNjYWxlID0gMC44XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjYsIHsgcG9zaXRpb246IGNjLnYzKC0xMjMuOSArIHRoaXMuaXNSb2xsMSAqICgyMyksIC02MCArIHRoaXMuaXNSb2xsMSAqICgyMCkpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSb2xsMSsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JvbGwxID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUm9sbDEgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1RyYW5zKGNoaWxkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHdvb2QpLmRlbGF5KDAuMDUgKiBwb3NFbmQpLnRvKDAuMywge3NjYWxlOjAuOH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzQ291bnRXb29kIC09IDE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3RSYXkuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmF5LmdldENoaWxkQnlOYW1lKFwidmZ4X3Ntb2tlXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICB0aGlzLmxpc3RSYXkuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9jaGVja1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB3b29kID0gdGhpcy5saXN0R28uY2hpbGRyZW5bdGhpcy5saXN0R28uY2hpbGRyZW5Db3VudCAtIDFdXHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RSYXkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgICAgIGlmICh3b29kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHdvb2QgPSB0aGlzLmxpc3RHby5jaGlsZHJlblt0aGlzLmxpc3RHby5jaGlsZHJlbkNvdW50IC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubGlzdEdvLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih3b29kLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IGNoaWxkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICAgICAgICAgICAgICB3b29kLnBhcmVudCA9IGNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgd29vZC5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgIHdvb2Quc3RvcEFsbEFjdGlvbnMoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zRW5kID0gY2MudjIoMTMwLCA4OSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTWlkID0gY2MudjIoKHBvcy54IC0gMjQpIC8gMiwgNTUuNiArIHRoaXMuaXNSb2xsMSAqIDIwICsgMTUwKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLmRlbGF5KDAuMDUgKiB0aGlzLmlzUm9sbDEpLmJlemllclRvKDAuMywgY2MudjIocG9zLngsIHBvcy55KSwgcG9zTWlkLCBwb3NFbmQpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JvbGwyID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSb2xsMiA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUcmFucyhjaGlsZClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKC0xMjMuOSArIHRoaXMuaXNSb2xsMiAqICgyMyksIC02MCArIHRoaXMuaXNSb2xsMiAqICgyMCkpIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih3b29kKS5kZWxheSgwLjA1ICogcG9zRW5kKS50bygwLjMsIHtzY2FsZTowLjh9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LCAwLjMpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB3b29kID0gdGhpcy5saXN0R28uY2hpbGRyZW5bdGhpcy5saXN0R28uY2hpbGRyZW5Db3VudCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0UmF5LmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdvb2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgd29vZCA9IHRoaXMubGlzdEdvLmNoaWxkcmVuW3RoaXMubGlzdEdvLmNoaWxkcmVuQ291bnQgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0R28uY29udmVydFRvV29ybGRTcGFjZUFSKHdvb2QucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gY2hpbGQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgICAgICAgICAgICAgIHdvb2QucGFyZW50ID0gY2hpbGRcclxuICAgICAgICAgICAgICAgICAgICB3b29kLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgd29vZC5zdG9wQWxsQWN0aW9ucygpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NFbmQgPSBjYy52MigxMzAsIDg5KVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NNaWQgPSBjYy52MigocG9zLnggLSAyNCkgLyAyLCA1NS42ICsgdGhpcy5pc1JvbGwxICogMjAgKyAxNTApXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4od29vZCkuZGVsYXkoMC4wNSAqIHRoaXMuaXNSb2xsMSkuYmV6aWVyVG8oMC4zLCBjYy52Mihwb3MueCwgcG9zLnkpLCBwb3NNaWQsIHBvc0VuZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTEyMy45LCAtNjApIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUm9sbDMrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSb2xsMyA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JvbGwzID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUcmFucyhjaGlsZClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih3b29kKS5kZWxheSgwLjA1ICogcG9zRW5kKS50bygwLjMsIHtzY2FsZTowLjh9KS5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LCAwLjMpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBjaGVjaygpIHtcclxuICAgIC8vICAgICB0aGlzLmlzU2xvdCA9IHRoaXMuY291bnRob3VzZSAqICh0aGlzLmlzVWRIb3VzZSArIDEpXHJcbiAgICAvLyB9XHJcbiAgICBpc1RyYW5zID0gZmFsc2VcclxuICAgIGNoZWNrVHJhbnMocGFyZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFucykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNUcmFucyA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVja1RyYW5zXCIpXHJcbiAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW3RoaXMuYXJyQ3VzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMFxyXG4gICAgICAgIGlmIChwYXJlbnQuY2hpbGRyZW5Db3VudCA+PSAzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAzOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gcGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGNoaWxkLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IHBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3MgPSBjdXMuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSBjdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKS5kZWxheSgwLjA1ICogY291bnQpLmJlemllclRvKDAuMywgY2MudjIocG9zLngsIHBvcy55KSwgY2MudjIocG9zLnggLyAyLCBwb3MueSArIDIwMCksIGNjLnYyKDAsIDUwKSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubW92ZTIoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RyYW5zID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhY2soKVxyXG4gICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBvbkVuZEdhbWUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5saW5rVG9TdG9yZS5nZXRDb21wb25lbnQoXCJBZE1hbmFnZXJcIikub3BlbkFkVXJsKClcclxuXHJcbiAgICAgICAgLy8gdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBjcmVhdGVQYXkocG9zKSB7XHJcbiAgICAgICAgbGV0IHBheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlUGF5KVxyXG4gICAgICAgIHBheS5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICBwYXkuc2NhbGVYID0gLTFcclxuICAgICAgICBwYXkucG9zaXRpb24gPSBwb3NcclxuICAgIH1cclxuICAgIC8vIGNyZWF0ZUN1cygpIHtcclxuXHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5baV1cclxuICAgIC8vICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLnJ1blBvcyh0aGlzLmFyclBvc1tpXSwgMC4zKVxyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuaWRsZSgpXHJcbiAgICAvLyAgICAgICAgIH0sIDAuMylcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IHByZUN1cyA9IG51bGxcclxuICAgIC8vICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxyXG4gICAgLy8gICAgIHByZUN1cyA9IHRoaXMubGlzdENoYXJbcmRdXHJcbiAgICAvLyAgICAgbGV0IGN1cyA9IGNjLmluc3RhbnRpYXRlKHByZUN1cylcclxuICAgIC8vICAgICBjdXMucGFyZW50ID0gdGhpcy5saXN0Q3VzXHJcbiAgICAvLyAgICAgY3VzLnBvc2l0aW9uID0gY2MudjMoLTY2OSwgMTA2KVxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIGNoZWNrSGFuZCgpIHtcclxuICAgIC8vICAgICBpZiAoZ2xvYmFsVGhpcy5ydWJ5ID49IHRoaXMuaXNWYWx1ZUV4cGFuZCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzJdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIGlmIChnbG9iYWxUaGlzLnJ1YnkgPj0gdGhpcy5pc1ZhbHVlVWQpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblsxXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBidG5fY2FyZDEoZXZlbnQpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5pc0NoYXJtb3ZlID49IHRoaXMuY291bnRob3VzZSAqICh0aGlzLmlzVWRIb3VzZSArIDEpKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubm90aS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBpZiAoZ2xvYmFsVGhpcy5jb3VudERvd25CdG4xKSByZXR1cm47XHJcbiAgICAvLyAgICAgLy8gZ2xvYmFsVGhpcy5jb3VudERvd25CdG4xID0gdHJ1ZTtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRraG9hbiwgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgZ2xvYmFsVGhpcy5jb3VudENoYXItLTtcclxuICAgIC8vICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RDdXMuY2hpbGRyZW5bMF1cclxuICAgIC8vICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAvLyAgICAgdGhpcy5pc0NoYXJtb3ZlKys7XHJcbiAgICAvLyAgICAgbGV0IGFycmJlZCA9IFtdXHJcbiAgICAvLyAgICAgZ2xvYmFsVGhpcy5ydWJ5IC09IDFcclxuICAgIC8vICAgICB0aGlzLm9mZkhhbmQoKVxyXG4gICAgLy8gICAgIGlmICgodGhpcy5pc0NoYXJtb3ZlIDw9IHRoaXMuaXNNYXhDaGFySG91c2UpIHx8ICh0aGlzLmlzSG91c2UxIDwgdGhpcy5pc01heENoYXJIb3VzZSkpIHtcclxuICAgIC8vICAgICAgICAgYXJyYmVkID0gdGhpcy5hcnJQb3NiZWRbdGhpcy5pc1VkSG91c2VdXHJcbiAgICAvLyAgICAgICAgIGxldCBwb3MgPSBhcnJiZWRbdGhpcy5pc0hvdXNlMV1cclxuICAgIC8vICAgICAgICAgdGhpcy5pc0hvdXNlMSsrXHJcbiAgICAvLyAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5ydW5Qb3MoY2MudjMoMjgsIDQ1NCksIDEpXHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IHBvc1xyXG4gICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLnNsZWVwKClcclxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLnNjYWxlWCA9IDFcclxuICAgIC8vICAgICAgICAgfSwgMSlcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgZ2xvYmFsVGhpcy5ydWJ5ICs9IDUwXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBheShjaGlsZC5wb3NpdGlvbi5hZGQoY2MudjMoMCwgNjApKSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY2hlY2syKClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNDaGFybW92ZS0tXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzSG91c2UxLS1cclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAwLjYpXHJcbiAgICAvLyAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykuZ2V0SGFwcHkoKVxyXG4gICAgLy8gICAgICAgICAgICAgY2hpbGQuc2V0UG9zaXRpb24oY2hpbGQucG9zaXRpb24uYWRkKGNjLnYzKDUwLCAwKSkpXHJcbiAgICAvLyAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykucnVuUG9zKGNjLnYzKC0zMzEsIDE4OCksIDEuMilcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykucnVuUG9zKGNjLnYzKC02MjMsIC0yMDUpLCAxLjEpXHJcbiAgICAvLyAgICAgICAgICAgICB9LCAxLjIpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpXHJcbiAgICAvLyAgICAgICAgICAgICB9LCAyLjIpXHJcbiAgICAvLyAgICAgICAgIH0sIDEuNilcclxuICAgIC8vICAgICAgICAgdGhpc1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIGlmICh0aGlzLmNvdW50aG91c2UgPiAxKSB7XHJcbiAgICAvLyAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXMuY3VzQmFja05vZGVcclxuICAgIC8vICAgICAgICAgYXJyYmVkID0gdGhpcy5hcnJQb3NiZWQyW3RoaXMuaXNVZEhvdXNlXVxyXG4gICAgLy8gICAgICAgICAvLyBsZXQgcG9zID0gYXJyYmVkW3RoaXMuaXNIb3VzZTIgLSB0aGlzLmlzTWF4Q2hhckhvdXNlIC0gMV1cclxuICAgIC8vICAgICAgICAgbGV0IHBvcyA9IGFycmJlZFt0aGlzLmlzSG91c2UyXVxyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5pc0hvdXNlMisrXHJcbiAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBvcy50b1N0cmluZygpKVxyXG4gICAgLy8gICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoQykucnVuUG9zKGNjLnYzKC04NDcsIDczOCksIDIpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNDaGFybW92ZS0tXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzSG91c2UyLS1cclxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5ydW5Qb3MoY2MudjMoLTU1NCwgODc4KSwgMSlcclxuICAgIC8vICAgICAgICAgfSwgMilcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY2hpbGQucG9zaXRpb24gPSBwb3NcclxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChDKS5zbGVlcCgpXHJcbiAgICAvLyAgICAgICAgICAgICBjaGlsZC5zY2FsZVggPSAxXHJcbiAgICAvLyAgICAgICAgIH0sIDMuMSlcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgZ2xvYmFsVGhpcy5ydWJ5ICs9IDUwXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNoZWNrMigpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBheShjaGlsZC5wb3NpdGlvbi5hZGQoY2MudjMoMCwgNjApKSlcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAwLjYpXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLmdldEhhcHB5KClcclxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLnNldFBvc2l0aW9uKGNoaWxkLnBvc2l0aW9uLmFkZChjYy52Myg1MCwgMCkpKVxyXG4gICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLnJ1blBvcyhjYy52MygtOTA4LCA1NzUpLCAxLjIpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEMpLnJ1blBvcyhjYy52MygtMTU0OSwgMCksIDIpXHJcbiAgICAvLyAgICAgICAgICAgICB9LCAxLjIpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpXHJcbiAgICAvLyAgICAgICAgICAgICB9LCAyLjIpXHJcbiAgICAvLyAgICAgICAgIH0sIDMuNilcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5jcmVhdGVDdXMoKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaXNWYWx1ZVVkID0gNjA7XHJcbiAgICAvLyBpc1ZhbHVlRXhwYW5kID0gMTAwXHJcbiAgICAvLyBidG5fdWRIb3VzZShldmVudCkge1xyXG4gICAgLy8gICAgIGlmIChnbG9iYWxUaGlzLnJ1YnkgPCB0aGlzLmlzVmFsdWVVZCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm5vdGkyLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzVWRIb3VzZSA+IDEpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5vbkVuZEdhbWUoKVxyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBnbG9iYWxUaGlzLnJ1YnkgLT0gdGhpcy5pc1ZhbHVlVWRcclxuXHJcbiAgICAvLyAgICAgdGhpcy5vZmZIYW5kKClcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVZCwgZmFsc2UsIDEpXHJcbiAgICAvLyAgICAgdGhpcy5pc1ZhbHVlVWQgKz0gMTAwICogKHRoaXMuaXNVZEhvdXNlICsgMSlcclxuICAgIC8vICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChcImNhcmRcIikuY3VycmVudCA9IHRoaXMuaXNWYWx1ZVVkXHJcbiAgICAvLyAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoXCJjYXJkXCIpLmxiQ3VycmVudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuaXNWYWx1ZVVkLnRvU3RyaW5nKClcclxuXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNVZEhvdXNlID09IDApIHtcclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50aG91c2U7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXN0SG91c2UuY2hpbGRyZW5baV1cclxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJob3VzZV91ZDFcIilcclxuICAgIC8vICAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwiZWZmVWRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5pc01heENoYXJIb3VzZSA9IDJcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5pc1VkSG91c2UgPT0gMSkge1xyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnRob3VzZTsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RIb3VzZS5jaGlsZHJlbltpXVxyXG4gICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImhvdXNlX3VkMlwiKVxyXG4gICAgLy8gICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJlZmZVZFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5pc01heENoYXJIb3VzZSA9IDNcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5pc1VkSG91c2UrK1xyXG4gICAgLy8gfVxyXG4gICAgLy8gYnRuX2V4cGFuZChldmVudCkge1xyXG4gICAgLy8gICAgIGlmIChnbG9iYWxUaGlzLnJ1YnkgPCB0aGlzLmlzVmFsdWVFeHBhbmQpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5ub3RpMi5wbGF5KClcclxuXHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuY291bnRob3VzZSA+PSA0KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMub25FbmRHYW1lKClcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVWQsIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIGdsb2JhbFRoaXMucnVieSAtPSB0aGlzLmlzVmFsdWVFeHBhbmRcclxuXHJcbiAgICAvLyAgICAgdGhpcy5vZmZIYW5kKClcclxuXHJcbiAgICAvLyAgICAgdGhpcy5pc1ZhbHVlRXhwYW5kICs9IDE0MCAqICh0aGlzLmNvdW50aG91c2UpXHJcbiAgICAvLyAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoXCJjYXJkXCIpLmN1cnJlbnQgPSB0aGlzLmlzVmFsdWVFeHBhbmRcclxuICAgIC8vICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChcImNhcmRcIikubGJDdXJyZW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5pc1ZhbHVlRXhwYW5kLnRvU3RyaW5nKClcclxuICAgIC8vICAgICBsZXQgY2hpbGQgPSB0aGlzLmxpc3RIb3VzZS5jaGlsZHJlblt0aGlzLmNvdW50aG91c2VdXHJcbiAgICAvLyAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJlZmZfb3BlblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcImJ1aWxkXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHN3aXRjaCAodGhpcy5pc1VkSG91c2UpIHtcclxuICAgIC8vICAgICAgICAgY2FzZSAwOiBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuc2NhbGUgPSAxXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MygtMzIwLCA0MTApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlIDE6IGNoaWxkLmdldENoaWxkQnlOYW1lKFwiaWNvbjJcIikuc2NhbGUgPSAxXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgMjogY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uM1wiKS5zY2FsZSA9IDFcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBzd2l0Y2ggKHRoaXMuY291bnRob3VzZSkge1xyXG4gICAgLy8gICAgICAgICBjYXNlIDE6XHJcbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MygtMzIwLCA0MTApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MygtMjcwLCA1NTApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkuYnkoMC4zLCB7IHpvb21SYXRpbzogLTAuMiB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyKS5ieSgwLjMsIHsgem9vbVJhdGlvOiAtMC42IH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlIDI6XHJcbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MygwLCA2MDApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIubm9kZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MygwLCA4MDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLmJ5KDAuMywgeyB6b29tUmF0aW86IC0wLjIgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMikuYnkoMC4zLCB7IHpvb21SYXRpbzogLTAuNiB9KS5zdGFydCgpXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgMzpcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5jb3VudGhvdXNlKytcclxuXHJcbiAgICAvLyB9XHJcbiAgICBsaXN0Q2FyZCA9IG51bGxcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgaWYgKGNjLndpblNpemUud2lkdGggPCBjYy53aW5TaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pc1NjYWxlID0gMVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDFcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENhcmQgPSB0aGlzLmxpc3RDYXJkMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2FyZDEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENhcmQyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gMC40XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDIxOVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDExNlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5iYXIxLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJhcjIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5uZXIyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYTIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAxLjVcclxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5pc1NjYWxlID0gMS41XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQgPSB0aGlzLmxpc3RDYXJkMlxyXG4gICAgICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAwLjZcclxuICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAzMDBcclxuICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDE1MFxyXG5cclxuICAgICAgICAgICAgdGhpcy5saXN0Q2FyZDEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYmFyMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5iYXIyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5nZXRDaGlsZEJ5TmFtZShcImJhbm5lcjJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYTIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19