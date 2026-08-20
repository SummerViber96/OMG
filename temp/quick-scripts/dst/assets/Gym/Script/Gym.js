
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Gym/Script/Gym.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'acb91p4KBRCt4hVStYW/y/D', 'Gym');
// Gym/Script/Gym.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
globalThis.gold = 100;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.npc = null;
        _this.npc2 = null;
        _this.listCusNode = null;
        _this.listPlacePos = null;
        _this.listCrunch = null;
        _this.boxing1 = null;
        _this.boxing2 = null;
        _this.soundBG = null;
        _this.soundShowPop = null;
        _this.soundClick = null;
        _this.soundCoin = null;
        _this.soundConfirm = null;
        _this.soundWin = null;
        _this.game = null;
        _this.guildUpgrade = null;
        _this.guildUpgrade2 = null;
        _this.phaohoa = null;
        _this.linkToStore = null;
        _this.listE = null;
        _this.lbCoin = null;
        _this.dayTa1 = null;
        _this.fillBar = null;
        _this.endCard = null;
        _this.logo = null;
        _this.textGuild1 = null;
        _this.textGuild2 = null;
        _this.textGuild3 = null;
        _this.door = null;
        _this.listIconPt = null;
        _this.listPt = null;
        _this.preCoin = null;
        _this.listPrePt = [];
        _this.listPreCus = [];
        _this.arrMayDay = [];
        _this.arrPosDone = [cc.v3(-239, -133), cc.v3(57, -157), cc.v3(-123, -36), cc.v3(-14, 65), cc.v3(-58, -235), cc.v3(198, -59)];
        _this.arrPosDoneCrunch = [cc.v3(218, -392), cc.v3(409, -289)];
        // @property(cc.Node)
        // listCrunch:cc.Node=null
        _this.arrPosCus = [];
        _this.arrCus = [];
        _this.arrIconPt = [];
        _this.isStep = 0;
        _this.arrCrunch = [];
        _this.ptBusyMachines = {};
        _this.isGameStarted = false;
        _this.guidingIconPt = false;
        _this.isHind = false;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.posGapBung = cc.v3(-30, -19);
        _this.posNangTa = cc.v3(-50, -42);
        _this.countCus = 0;
        _this.arrWaiting = [];
        _this.countpt = 0;
        _this.isCountAction = 0;
        _this.isCountStep = 0;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.soundBG, true, 0.5);
        this.scheduleOnce(function () {
            for (var i = 0; i < 3; i++) {
                var child = _this.listCusNode.children[i];
                child.getChildByName("pop").active = true;
            }
            _this.textGuild1.active = true;
        }, 0.6);
        for (var i = 0; i < this.listCusNode.childrenCount; i++) {
            this.arrCus.push(this.listCusNode.children[i]);
        }
        for (var i = 0; i < this.listIconPt.children[0].childrenCount; i++) {
            this.arrIconPt.push(this.listIconPt.children[0].children[i]);
        }
        for (var i = 0; i < this.listCrunch.childrenCount; i++) {
            this.arrCrunch.push(this.listCrunch.children[i]);
        }
        for (var i = 0; i < this.listPlacePos.childrenCount; i++) {
            var pos = this.listPlacePos.children[i].position;
            this.arrPosCus.push(cc.v3(pos.x, pos.y, pos.z));
        }
    };
    NewClass.prototype.getQueuePos = function (index) {
        var pos = this.arrPosCus[index];
        return cc.v3(pos.x, pos.y, pos.z);
    };
    NewClass.prototype.spawCustomer = function () {
        if (this.arrCus.length >= this.arrPosCus.length)
            return;
        var queueIndex = this.arrCus.length;
        var posEnd = this.getQueuePos(queueIndex);
        var cus = cc.instantiate(this.listPreCus[this.countCus]);
        cus.parent = this.listCusNode;
        this.arrCus.push(cus);
        var cusComp = cus.getComponent("cusGym");
        cusComp.isQueueMoving = true;
        cus.position = cc.v3(-934, -632);
        var anim = cus.children[0].getComponent(sp.Skeleton);
        anim.setAnimation(0, "WalkInR", true);
        cc.Tween.stopAllByTarget(cus);
        cc.tween(cus).to(1, { position: cc.v3(-675, -435) }).call(function () {
            cus.scaleX = -1;
        }).to(0.8, { position: posEnd }).call(function () {
            cus.scaleX = 1;
            if (cusComp.isAngryWait) {
                cusComp.tucGian();
            }
            else {
                anim.setAnimation(0, "Waiting", true);
            }
            cusComp.showQueuePop();
        }).start();
        this.countCus++;
        if (this.countCus > 5) {
            this.countCus = 0;
        }
    };
    NewClass.prototype.doCus = function (tag, cus) {
        var _this = this;
        cc.audioEngine.play(this.soundClick, false, 1);
        if (this.isStep <= 3) {
            this.moveCus(tag);
            if (this.isStep == 0) {
                this.isStep = 1;
                this.listIconPt.active = true;
                this.scheduleOnce(function () {
                    _this.arrIconPt[0].getChildByName("hand").active = true;
                }, 0.3);
            }
            else if (this.isStep == 2) {
                this.arrIconPt[1].getComponent(cc.Button).enabled = true;
                this.arrIconPt[1].getChildByName("hand").active = true;
            }
            else if (this.isStep == 3) {
                this.arrIconPt[2].getComponent(cc.Button).enabled = true;
                this.arrIconPt[2].getChildByName("hand").active = true;
            }
            return true;
        }
        else {
            if (tag == 0) {
                for (var i = 0; i < this.arrCrunch.length; i++) {
                    if (!this.arrCrunch[i].getChildByName("char")) {
                        this.moveCusToCrunch(cus, i, tag);
                        return true;
                    }
                }
            }
            else if (tag == 1) {
                for (var i = 0; i < this.arrMayDay.length; i++) {
                    if (!this.arrMayDay[i].getChildByName("char")) {
                        this.moveCusToMayDay(cus, i, tag);
                        return true;
                    }
                }
            }
            else if (tag == 2) {
                if (!this.boxing1.getChildByName("char")) {
                    this.moveCusToBoxing(cus, 0, tag);
                    return true;
                }
            }
        }
        return false;
    };
    NewClass.prototype.leaveQueue = function (cus) {
        var index = this.arrCus.indexOf(cus);
        if (index === -1)
            return;
        this.arrCus.splice(index, 1);
        var _loop_1 = function (i) {
            var queueCus = this_1.arrCus[i];
            var posEnd = this_1.getQueuePos(i);
            var cusComp = queueCus.getComponent("cusGym");
            var anim = queueCus.children[0].getComponent(sp.Skeleton);
            cusComp.isQueueMoving = true;
            anim.setAnimation(0, "WalkInL", true);
            cc.Tween.stopAllByTarget(queueCus);
            cc.tween(queueCus).to(0.8, { position: posEnd }).call(function () {
                queueCus.scaleX = 1;
                if (cusComp.isAngryWait) {
                    cusComp.tucGian();
                }
                else {
                    anim.setAnimation(0, "Waiting", true);
                }
                cusComp.showQueuePop();
            }).start();
        };
        var this_1 = this;
        for (var i = index; i < this.arrCus.length; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.moveCusToCrunch = function (cus, value, tag) {
        this.leaveQueue(cus);
        var crunch = this.arrCrunch[value];
        cus.parent = crunch;
        cus.position = this.posGapBung;
        cus.name = "char";
        cus.children[0].scale = 1;
        cus.scale = 1;
        cus.scaleX = 1;
        var cusComp = cus.getComponent("cusGym");
        cusComp.parentName = "Crunch";
        cusComp.parentIndex = value;
        cusComp.parentNode = crunch;
        this.arrWaiting.push(cus);
        cusComp.waitingTag(tag);
        this.updateQueueHand();
    };
    NewClass.prototype.moveCusToMayDay = function (cus, value, tag) {
        this.leaveQueue(cus);
        var may = this.arrMayDay[value];
        cus.parent = may;
        cus.position = this.posNangTa;
        cus.name = "char";
        cus.children[0].scale = 1;
        cus.scale = 1;
        cus.scaleX = 1;
        var cusComp = cus.getComponent("cusGym");
        may.getChildByName("G1_AbCrunch").zIndex = 1;
        cusComp.parentName = "MayDay";
        cusComp.parentIndex = value;
        cusComp.parentNode = may;
        this.arrWaiting.push(cus);
        cus.getComponent("cusGym").waitingTag(tag);
        this.updateQueueHand();
    };
    NewClass.prototype.moveCusToBoxing = function (cus, value, tag) {
        this.leaveQueue(cus);
        cus.parent = this.boxing1;
        cus.position = cc.v3(123, 23);
        cus.name = "char";
        cus.children[0].scale = 1;
        cus.scale = 1;
        cus.scaleX = 1;
        var cusComp = cus.getComponent("cusGym");
        cusComp.parentName = "Boxing";
        cusComp.parentIndex = value;
        cusComp.parentNode = this.boxing1;
        this.arrWaiting.push(cus);
        cus.getComponent("cusGym").waitingTag(tag);
        this.updateQueueHand();
    };
    NewClass.prototype.offIconPt = function (node) {
        node.children[1].active = true;
        node.getChildByName("hand").active = false;
    };
    NewClass.prototype.onIconPt = function (node) {
        if (node) {
            node.children[1].active = false;
            node.getChildByName("hand").active = false;
            node.getComponent(cc.Button).enabled = true;
            this.guidingIconPt = false;
            this.updateQueueHand();
        }
    };
    NewClass.prototype.isIconPtFree = function (node) {
        if (!node || !node.active)
            return false;
        var btn = node.getComponent(cc.Button);
        if (btn && !btn.enabled)
            return false;
        // children[1] = busy overlay
        if (node.children[1] && node.children[1].active)
            return false;
        return true;
    };
    NewClass.prototype.hasFreeMachineForTag = function (tag) {
        if (tag == 0) {
            for (var i = 0; i < this.arrCrunch.length; i++) {
                if (!this.arrCrunch[i].getChildByName("char"))
                    return true;
            }
            return false;
        }
        if (tag == 1) {
            for (var i = 0; i < this.arrMayDay.length; i++) {
                if (!this.arrMayDay[i].getChildByName("char"))
                    return true;
            }
            return false;
        }
        if (tag == 2) {
            return !this.boxing1.getChildByName("char");
        }
        return false;
    };
    NewClass.prototype.canClickQueueCus = function (cus) {
        if (!cus || !cus.isValid)
            return false;
        var cusComp = cus.getComponent("cusGym");
        if (!cusComp || cusComp.isQueueMoving)
            return false;
        var pop = cus.getChildByName("pop");
        if (!pop || !pop.active)
            return false;
        var btn = pop.getComponent(cc.Button);
        if (btn && !btn.enabled)
            return false;
        if (this.isStep < 4)
            return false;
        return this.hasFreeMachineForTag(cusComp.tag);
    };
    NewClass.prototype.hasCusWaitingForPt = function () {
        this.cleanupWaiting();
        for (var i = 0; i < this.arrWaiting.length; i++) {
            if (this.isCusWaitingForPt(this.arrWaiting[i]))
                return true;
        }
        return false;
    };
    NewClass.prototype.canClickIconPt = function (node) {
        return this.isIconPtFree(node) && this.hasCusWaitingForPt();
    };
    NewClass.prototype.hideAllIconPtHands = function () {
        for (var i = 0; i < this.arrIconPt.length; i++) {
            var hand = this.arrIconPt[i].getChildByName("hand");
            if (hand)
                hand.active = false;
        }
    };
    NewClass.prototype.showFreeIconPtHand = function () {
        this.hideAllIconPtHands();
        this.hideAllQueueHands();
        if (!this.hasCusWaitingForPt()) {
            this.guidingIconPt = false;
            this.updateQueueHand();
            return;
        }
        for (var i = 0; i < this.arrIconPt.length; i++) {
            var icon = this.arrIconPt[i];
            if (this.canClickIconPt(icon)) {
                var hand = icon.getChildByName("hand");
                if (hand)
                    hand.active = true;
                this.guidingIconPt = true;
                return;
            }
        }
        this.guidingIconPt = false;
        this.updateQueueHand();
    };
    NewClass.prototype.hideAllQueueHands = function () {
        for (var i = 0; i < this.arrCus.length; i++) {
            var cus = this.arrCus[i];
            if (!cus || !cus.isValid)
                continue;
            var pop = cus.getChildByName("pop");
            if (!pop)
                continue;
            var hand = pop.getChildByName("hand");
            if (hand)
                hand.active = false;
        }
    };
    NewClass.prototype.updateQueueHand = function () {
        this.hideAllQueueHands();
        if (this.isStep < 4)
            return;
        if (this.guidingIconPt)
            return;
        for (var i = 0; i < this.arrCus.length; i++) {
            var cus = this.arrCus[i];
            if (!this.canClickQueueCus(cus))
                continue;
            var hand = cus.getChildByName("pop").getChildByName("hand");
            if (hand)
                hand.active = true;
            return;
        }
    };
    NewClass.prototype.clickPt = function (event, tag) {
        var _this = this;
        var pt = null;
        cc.audioEngine.play(this.soundClick, false, 1);
        if (this.isStep == 1) {
            var btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false;
            btn.enabled = false;
            cc.tween(this.textGuild1).to(0.5, { opacity: 0 }).start();
            pt = this.listPt.children[0];
            this.isStep = 2;
            var fnc = function () {
                _this.activeCus(0);
            };
            pt.getComponent("pt").moveIn(fnc);
            this.scheduleOnce(function () {
                _this.arrCus[1].getChildByName("pop").getChildByName("hand").active = true;
                _this.arrCus[1].getChildByName("pop").getComponent(cc.Button).enabled = true;
            }, 1);
            this.scheduleOnce(function () {
                pt.parent = _this.node;
            }, 0.3);
            this.door.getComponent(cc.Animation).play("door_open");
            this.scheduleOnce(function () {
                _this.door.getComponent(cc.Animation).play("door_close");
            }, 0.7);
            this.offIconPt(this.arrIconPt[0]);
        }
        else if (this.isStep == 2) {
            var btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false;
            pt = this.listPt.children[0];
            this.isStep = 3;
            pt.active = true;
            this.door.getComponent(cc.Animation).play("door_open");
            var fnc = function () {
                _this.activeCus(1);
            };
            pt.getComponent("pt").moveIn(fnc);
            this.scheduleOnce(function () {
                _this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true;
                _this.arrCus[2].getChildByName("pop").getComponent(cc.Button).enabled = true;
            }, 1);
            this.scheduleOnce(function () {
                pt.parent = _this.node;
            }, 0.2);
            this.scheduleOnce(function () {
                _this.door.getComponent(cc.Animation).play("door_close");
            }, 0.7);
            this.offIconPt(this.arrIconPt[1]);
        }
        else if (this.isStep == 3) {
            var btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false;
            pt = this.listPt.children[0];
            this.isStep = 4;
            pt.active = true;
            this.door.getComponent(cc.Animation).play("door_open");
            var fnc = function () {
                _this.activeCus(2);
            };
            pt.getComponent("pt").moveIn(fnc);
            this.scheduleOnce(function () {
                _this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true;
            }, 1);
            this.scheduleOnce(function () {
                pt.parent = _this.node;
            }, 0.2);
            this.scheduleOnce(function () {
                _this.door.getComponent(cc.Animation).play("door_close");
            }, 0.7);
            this.offIconPt(this.arrIconPt[2]);
        }
        else {
            this.cleanupWaiting();
            for (var i = 0; i < this.arrWaiting.length; i++) {
                var cus = this.arrWaiting[i];
                if (!this.isCusWaitingForPt(cus))
                    continue;
                var cusComp = cus.getComponent("cusGym");
                var btn = event.currentTarget.getComponent(cc.Button);
                btn.enabled = false;
                event.currentTarget.children[1].active = true;
                if (!this.addPt(cus, cusComp.parentName, event.currentTarget)) {
                    btn.enabled = true;
                    event.currentTarget.children[1].active = false;
                }
                else {
                    this.guidingIconPt = false;
                    event.currentTarget.getChildByName("hand").active = false;
                    this.updateQueueHand();
                }
                return;
            }
        }
    };
    NewClass.prototype.cleanupWaiting = function () {
        for (var i = this.arrWaiting.length - 1; i >= 0; i--) {
            if (!this.isCusOnMachine(this.arrWaiting[i])) {
                this.arrWaiting.splice(i, 1);
            }
        }
    };
    NewClass.prototype.isCusOnMachine = function (cus) {
        if (!cus || !cus.isValid)
            return false;
        var cusComp = cus.getComponent("cusGym");
        if (!cusComp || !cusComp.parentNode || !cusComp.parentNode.isValid)
            return false;
        if (cus.parent !== cusComp.parentNode)
            return false;
        if (cus.name !== "char")
            return false;
        return true;
    };
    NewClass.prototype.isCusWaitingForPt = function (cus) {
        if (!this.isCusOnMachine(cus))
            return false;
        var cusComp = cus.getComponent("cusGym");
        if (cusComp.isPt)
            return false;
        if (this.isMachinePtBusy(cusComp.parentName, cusComp.parentIndex))
            return false;
        return true;
    };
    NewClass.prototype.removeFromWaiting = function (cus) {
        var index = this.arrWaiting.indexOf(cus);
        if (index !== -1) {
            this.arrWaiting.splice(index, 1);
        }
    };
    NewClass.prototype.getMachineKey = function (parentName, index) {
        return parentName + "_" + index;
    };
    NewClass.prototype.isMachinePtBusy = function (parentName, index) {
        return !!this.ptBusyMachines[this.getMachineKey(parentName, index)];
    };
    NewClass.prototype.setMachinePtBusy = function (parentName, index, busy) {
        var key = this.getMachineKey(parentName, index);
        if (busy) {
            this.ptBusyMachines[key] = true;
        }
        else {
            delete this.ptBusyMachines[key];
        }
    };
    NewClass.prototype.releaseMachinePt = function (parentName, index) {
        this.setMachinePtBusy(parentName, index, false);
    };
    NewClass.prototype.getPtTag = function (parentName, parentIndex) {
        switch (parentName) {
            case "Crunch":
                switch (parentIndex) {
                    case 0: return 0;
                    case 1: return 4;
                    case 2: return 5;
                    case 3: return 6;
                    default: return 0;
                }
            case "MayDay":
                return parentIndex === 0 ? 1 : 3;
            case "Boxing":
                return 2;
            default:
                return 0;
        }
    };
    NewClass.prototype.openDoor = function () {
        var _this = this;
        this.door.getComponent(cc.Animation).play("door_open");
        this.scheduleOnce(function () {
            _this.door.getComponent(cc.Animation).play("door_close");
        }, 0.7);
    };
    NewClass.prototype.addPt = function (cus, parentName, btn) {
        var _this = this;
        var cusComp = cus.getComponent("cusGym");
        if (!this.isCusWaitingForPt(cus)) {
            return false;
        }
        this.openDoor();
        cusComp.isPt = true;
        this.setMachinePtBusy(parentName, cusComp.parentIndex, true);
        var pt = cc.instantiate(this.listPrePt[this.countpt]);
        pt.parent = this.listPt;
        pt.active = true;
        pt.position = cc.v3(382.607, 121);
        var ptComp = pt.getComponent("pt");
        ptComp.btn = btn;
        ptComp.machineParentName = parentName;
        ptComp.machineIndex = cusComp.parentIndex;
        this.countpt++;
        this.scheduleOnce(function () {
            pt.parent = _this.node;
        }, 0.3);
        if (this.countpt > 3) {
            this.countpt = 0;
        }
        var tag = this.getPtTag(parentName, cusComp.parentIndex);
        ptComp.tag = Number(tag);
        var targetCus = cus;
        var fnc = function () {
            _this.activeCus(Number(tag), targetCus);
        };
        ptComp.moveIn(fnc);
        return true;
    };
    NewClass.prototype.activeCus = function (value, cus) {
        var _this = this;
        if (cus === void 0) { cus = null; }
        var char = cus && this.isCusOnMachine(cus) ? cus : null;
        if (!char) {
            char = this.getCharByPtTag(value);
        }
        if (!char) {
            console.warn("activeCus: missing char for tag", value);
            return;
        }
        this.removeFromWaiting(char);
        var cusComp = char.getComponent("cusGym");
        if (cusComp) {
            cusComp.isPt = true;
        }
        switch (value) {
            case 0:
                char.getComponent("cusGym").gapBung();
                char.position = cc.v3(1, -16);
                this.arrCrunch[0].children[0].active = false;
                this.arrCrunch[0].children[1].active = true;
                this.scheduleOnce(function () {
                    _this.finishCusWorkout(char, _this.arrPosDone[0], 4);
                }, 2);
                break;
            case 1:
                char.getComponent("cusGym").dayTa();
                this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                this.dayTa1.getChildByName("G1_AbCrunch").getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                char.position = cc.v3(-15.771 + 14, 7 - 5);
                this.scheduleOnce(function () {
                    _this.dayTa1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
                    _this.dayTa1.getChildByName("G1_AbCrunch").getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
                    _this.finishCusWorkout(char, _this.arrPosDoneCrunch[0], 6);
                }, 2);
                break;
            case 2:
                this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                char.getComponent("cusGym").boxing();
                this.startGame();
                this.scheduleOnce(function () {
                    _this.boxing1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
                    _this.isStep = 4;
                    _this.finishCusWorkout(char, cc.v3(647, -66), 6);
                }, 2);
                break;
            case 3:
                var mayDay2_1 = this.arrMayDay[1];
                char.getComponent("cusGym").dayTa();
                mayDay2_1.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                mayDay2_1.getChildByName("G1_AbCrunch").getComponent(sp.Skeleton).setAnimation(0, "Action", true);
                char.position = cc.v3(-15.771 + 14, 7 - 5);
                this.scheduleOnce(function () {
                    mayDay2_1.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
                    mayDay2_1.getChildByName("G1_AbCrunch").getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
                    _this.finishCusWorkout(char, _this.arrPosDoneCrunch[1], 6);
                }, 2);
                break;
            case 4:
                char.getComponent("cusGym").gapBung();
                char.position = cc.v3(1, -16);
                this.arrCrunch[1].children[0].active = false;
                this.arrCrunch[1].children[1].active = true;
                this.scheduleOnce(function () {
                    _this.finishCusWorkout(char, _this.arrPosDone[1], 4);
                }, 2);
                break;
            case 5:
                char.getComponent("cusGym").gapBung();
                char.position = cc.v3(1, -16);
                this.arrCrunch[2].children[0].active = false;
                this.arrCrunch[2].children[1].active = true;
                this.scheduleOnce(function () {
                    _this.finishCusWorkout(char, _this.arrPosDone[2], 4);
                }, 2);
                break;
            case 6:
                char.getComponent("cusGym").gapBung();
                char.position = cc.v3(1, -16);
                this.arrCrunch[3].children[0].active = false;
                this.arrCrunch[3].children[1].active = true;
                this.scheduleOnce(function () {
                    _this.finishCusWorkout(char, _this.arrPosDone[3], 4);
                }, 2);
                break;
        }
    };
    NewClass.prototype.getCharByPtTag = function (value) {
        switch (value) {
            case 0: return this.arrCrunch[0].getChildByName("char");
            case 1: return this.dayTa1.getChildByName("char");
            case 2: return this.boxing1.getChildByName("char");
            case 3: return this.arrMayDay[1].getChildByName("char");
            case 4: return this.arrCrunch[1].getChildByName("char");
            case 5: return this.arrCrunch[2].getChildByName("char");
            case 6: return this.arrCrunch[3].getChildByName("char");
            default: return null;
        }
    };
    NewClass.prototype.finishCusWorkout = function (char, posDone, coin) {
        if (!char || !char.isValid)
            return;
        this.removeFromWaiting(char);
        char.parent = this.node;
        char.getComponent("cusGym").happy();
        char.position = posDone;
        char.scale = 0.8;
        this.createCoin(char, coin);
        cc.tween(char).delay(1).to(0.5, { opacity: 0 }).start();
        if (!this.guidingIconPt) {
            this.updateQueueHand();
        }
    };
    NewClass.prototype.startGame = function () {
        var _this = this;
        if (this.isGameStarted)
            return;
        this.isGameStarted = true;
        for (var _i = 0, _a = this.arrIconPt; _i < _a.length; _i++) {
            var child = _a[_i];
            this.onIconPt(child);
            child.getComponent(cc.Button).enabled = true;
        }
        this.arrWaiting = [];
        this.ptBusyMachines = {};
        this.unschedule(this.spawCustomer);
        for (var i = this.listCusNode.childrenCount - 1; i >= 0; i--) {
            this.listCusNode.children[i].destroy();
        }
        this.arrCus = [];
        this.spawCustomer();
        this.schedule(this.spawCustomer, 4);
        this.scheduleOnce(function () {
            _this.textGuild2.active = true;
            while (_this.arrCus.length < 3) {
                _this.spawCustomer();
            }
            _this.updateQueueHand();
        }, 15);
        this.scheduleOnce(function () {
            cc.tween(_this.textGuild2).to(0.8, { scale: 0 }).start();
            _this.zoomGame();
            // this.startGame()
        }, 22);
    };
    NewClass.prototype.zoomGame = function () {
        var _this = this;
        cc.tween(this.camera).to(0.8, { zoomRatio: 2 }).start();
        cc.tween(this.camera.node).to(0.8, { position: cc.v3(-494, -296) }).start();
        while (this.arrCus.length < 5 && this.arrCus.length < this.arrPosCus.length) {
            this.spawCustomer();
        }
        for (var i = 0; i < this.arrCus.length; i++) {
            var cus = this.arrCus[i];
            if (!cus || !cus.isValid)
                continue;
            var cusComp = cus.getComponent("cusGym");
            if (!cusComp)
                continue;
            cusComp.isAngryWait = true;
            if (!cusComp.isQueueMoving) {
                cusComp.tucGian();
            }
        }
        this.scheduleOnce(function () {
            _this.textGuild3.active = true;
        }, 0.5);
    };
    NewClass.prototype.createCoin = function (node, value) {
        var pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        var coin = cc.instantiate(this.preCoin);
        coin.parent = this.node;
        coin.position = pos.add(cc.v3(0, 50));
        globalThis.gold += value;
    };
    NewClass.prototype.moveCus = function (value) {
        var _this = this;
        cc.audioEngine.play(this.soundCoin, false, 1);
        if (value == 1) {
            var char = this.arrCrunch[0].getChildByName("char");
            char.active = true;
            this.arrCus[0].active = false;
        }
        else if (value == 2) {
            this.arrCus[1].active = false;
            var char = this.dayTa1.getChildByName("char");
            char.active = true;
        }
        else if (value == 3) {
            this.arrCus[2].active = false;
            var char = this.boxing1.getChildByName("char");
            char.active = true;
        }
        else if (value == 4) {
            this.boxing2.children[0].getChildByName("notiBonusCoin").active = true;
            globalThis.gold += 2;
            this.arrCus[3].active = false;
            this.boxing2.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
            this.boxing2.children[0].active = true;
        }
        this.isCountAction++;
        if (this.isCountAction == 4) {
            this.scheduleOnce(function () {
                _this.moveCame1();
            }, 1);
        }
        if (value != 1) {
            this.isHind = true;
        }
    };
    // onHind() {
    //     let index = 1;
    //     this.schedule(() => {
    //         // tắt tất cả trước
    //         for (let i = 1; i < this.arrCus.length; i++) {
    //             let pop = this.arrCus[i].getChildByName("pop");
    //             let hand = pop.getChildByName("hand");
    //             hand.active = false;
    //         }
    //         // bật cái hiện tại
    //         let pop = this.arrCus[index].getChildByName("pop");
    //         let hand = pop.getChildByName("hand");
    //         hand.active = true;
    //         index++;
    //         if (index >= this.arrCus.length) {
    //             index = 1; // quay lại từ đầu
    //         }
    //     }, 0.5);
    // }
    // isCus = 0
    // moveCame1() {
    //     cc.tween(this.game).to(0.5, { scale: 2.3 }).start()
    //     // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //     cc.tween(this.game).to(0.5, { position: cc.v3(200, -550) }).start()
    //     this.scheduleOnce(() => {
    //         this.guildUpgrade.active = true
    //     }, 0.5)
    //     this.isCus = 0
    // }
    NewClass.prototype.update = function (dt) {
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    };
    // btn_upgrade() {
    //     cc.audioEngine.play(this.soundConfirm, false, 1)
    //     this.isCountStep++
    //     if (this.isCountStep < 5) {
    //         this.fillBar.fillRange = this.isCountStep * 0.25
    //         // this.listE.children[this.isCountStep - 1].active = true
    //     }
    //     let btn = this.guildUpgrade.children[2].getChildByName("Button")
    //     btn.active = true;
    //     btn.position = cc.v3(60 * this.isCountStep, -17.93)
    //     if (this.isCus == 0) {
    //         let char = this.listCrunch.children[0].getChildByName("char")
    //         char.getChildByName("vfx").getComponent(cc.Animation).play()
    //         char.getComponent(cc.Animation).play()
    //         if (this.isCountStep == 5) {
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //             char.getChildByName("notiBonusCoin2").active = true
    //             char.getComponent("cusGym").happy()
    //             char.position = cc.v3(-67, -50)
    //             this.guildUpgrade.active = false;
    //             this.move4()
    //             globalThis.gold += 200
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()
    //             }, 1)
    //         }
    //     }
    //     else if (this.isCus == 1) {
    //         let char = this.boxing1.children[0]
    //         char.getChildByName("vfx").getComponent(cc.Animation).play()
    //         if (this.isCountStep == 5) {
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //             globalThis.gold += 200
    //             char.getChildByName("notiBonusCoin2").active = true
    //             char.getComponent("cusGym").happy()
    //             this.guildUpgrade.active = false;
    //             // this.move4()
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()
    //             }, 1)
    //         }
    //         if (this.isCountStep == 4) {
    //             this.linkToStore.active = true
    //         }
    //     }
    //     else if (this.isCus == 2) {
    //         let char = this.boxing2.children[0]
    //         char.getChildByName("vfx").getComponent(cc.Animation).play()
    //         // if (this.isCountStep == 2) {
    //         //     this.linkToStore.active = true
    //         // }
    //     }
    // }
    NewClass.prototype.onEndgame = function () {
        cc.audioEngine.play(this.soundWin, false, 1);
        this.endCard.active = true;
        this.linkToStore.active = true;
    };
    // move2() {
    //     this.scheduleOnce(() => {
    //         cc.tween(this.game).to(0.5, { scale: 1 }).start()
    //         // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //         cc.tween(this.game).to(0.5, { position: cc.v3(0, 0) }).start()
    //         this.isCus = 1
    //         this.isCountStep = 0
    //         this.fillBar.fillRange = 0
    //     }, 1)
    //     this.scheduleOnce(() => {
    //         this.move3()
    //     }, 1.7)
    // }
    // move3() {
    //     cc.tween(this.game).to(0.5, { scale: 2.7 }).start()
    //     // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //     cc.tween(this.game).to(0.5, { position: cc.v3(-1973, -120) }).start()
    //     this.scheduleOnce(() => {
    //         this.guildUpgrade.active = true
    //     }, 0.5)
    // }
    // move4() {
    //     this.scheduleOnce(() => {
    //         cc.tween(this.game).to(0.5, { scale: 1 }).start()
    //         // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //         cc.tween(this.game).to(0.5, { position: cc.v3(0, 0) }).start()
    //         this.isCus = 2
    //         this.isCountStep = 0
    //         this.fillBar.fillRange = 0
    //     }, 1)
    //     this.scheduleOnce(() => {
    //         this.move5()
    //     }, 1.7)
    // }
    // move5() {
    //     cc.tween(this.game).to(1, { scale: 1.7 }).start()
    //     // cc.tween(this.camera).to(0.3, { zoomRatio: 2.5 }).start();
    //     cc.tween(this.game).to(1, { position: cc.v3(1100, 100) }).start()
    //     // let text = this.guildUpgrade.getChildByName("New Label")
    //     // text.getComponent(cc.Label).string = "Last one! Finish strong!"
    //     this.scheduleOnce(() => {
    //         this.guildUpgrade2.active = true
    //     }, 0.5)
    // }
    // dem1 = 0;
    // dem2 = 0
    // btn_upgrade2(event, value) {
    //     cc.audioEngine.play(this.soundConfirm, false, 1)
    //     if (value == "1") {
    //         let fill = this.guildUpgrade2.getChildByName("bgTrain2").children[1]
    //         let btn = this.guildUpgrade2.getChildByName("bgTrain2").getChildByName("Button")
    //         let char = this.dayTa1.children[0]
    //         char.getComponent(cc.Animation).play();
    //         char.getChildByName("vfx").getComponent(cc.Animation).play();
    //         this.dem1++
    //         fill.getComponent(cc.Sprite).fillRange = this.dem1 * 0.2
    //         btn.active = true;
    //         btn.position = cc.v3(50 * this.dem1, -17.93)
    //         if (this.dem1 == 5) {
    //             event.currentTarget.active = false
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //             char.getChildByName("notiBonusCoin2").active = true
    //             char.getComponent("cusGym").happy()
    //             char.position = cc.v3(-81, -45)
    //             globalThis.gold += 200
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()
    //             }, 1)
    //         }
    //     }
    //     else {
    //         let fill = this.guildUpgrade2.getChildByName("bgTrain").children[1]
    //         let char = this.boxing2.children[0]
    //         let btn = this.guildUpgrade2.getChildByName("bgTrain").getChildByName("Button")
    //         char.getComponent(cc.Animation).play();
    //         char.getChildByName("vfx").getComponent(cc.Animation).play();
    //         this.dem2++
    //         btn.active = true;
    //         btn.position = cc.v3(50 * this.dem2, -17.93)
    //         fill.getComponent(cc.Sprite).fillRange = this.dem2 * 0.2
    //         if (this.dem2 == 5) {
    //             event.currentTarget.active = false
    //             cc.audioEngine.play(this.soundCoin, false, 1)
    //             char.getChildByName("notiBonusCoin2").active = true
    //             char.getComponent("cusGym").happy()
    //             globalThis.gold += 200
    //             this.phaohoa.getComponent(cc.Animation).play()
    //             this.scheduleOnce(() => {
    //                 cc.tween(char).to(0.3, { opacity: 0 }).start()
    //             }, 1)
    //         }
    //     }
    //     if (this.dem1 == 5 && this.dem2 == 5) {
    //         cc.tween(this.guildUpgrade2).to(0.26, { opacity: 0 }).call(() => {
    //             this.guildUpgrade2.active = false
    //         }).start()
    //         this.scheduleOnce(() => {
    //             this.move2()
    //         }, 0.8)
    //     }
    // }
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        // this.camera.zoomRatio = 1
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.guildUpgrade.scale = (logic) ? 2.4 : 1;
        this.guildUpgrade2.scale = (logic) ? 1.6 : 1;
        // this.camera.node.position = cc.v3(0, 0)
        this.lbCoin.string = globalThis.gold.toString();
        this.npc.scale = (logic) ? 1.7 : 1;
        this.npc2.scale = (logic) ? 1.7 : 1;
        this.npc.y = (logic) ? -700 : 0;
        this.npc2.y = (logic) ? -700 : 0;
        this.endCard.scale = (logic) ? 1.5 : 0.7;
        this.logo.scale = (logic) ? 1.5 : 1;
        this.coinBar.scale = (logic) ? 1.5 : 1;
        this.coinBar.getComponent(cc.Widget).top = 77;
        this.logo.getComponent(cc.Widget).top = 48;
        // this.barCoin.y=(logic)?400:470
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // this.camera.node.position = cc.v3(-70, 0)
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            // this.camera.zoomRatio = 1.7
            // this.camera.node.position = cc.v3(150, 0)
            this.phaohoa.scale = (logic) ? 7 : 3;
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
                // console.log("check iphonex")
                this.coinBar.getComponent(cc.Widget).top = 77 + 30;
                this.logo.getComponent(cc.Widget).top = 48 + 30;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 1.4
                this.guildUpgrade.scale = 1.8;
            }
        }
        else {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var IPHONE_X_ASPECT_RATIO = 812 / 375; // ≈ 2.16
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            if (Math.abs(aspectRatio - IPHONE_X_ASPECT_RATIO) < TOLERANCE) {
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 0.8
            }
        }
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "npc", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "npc2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCusNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listPlacePos", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCrunch", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boxing1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boxing2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBG", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundShowPop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundClick", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCoin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundConfirm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "game", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guildUpgrade", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guildUpgrade2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "phaohoa", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listE", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dayTa1", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "coinBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textGuild1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textGuild2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textGuild3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "door", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listIconPt", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listPt", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCoin", void 0);
    __decorate([
        property([cc.Prefab])
    ], NewClass.prototype, "listPrePt", void 0);
    __decorate([
        property([cc.Prefab])
    ], NewClass.prototype, "listPreCus", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrMayDay", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXEd5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtBQUVyQjtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQStsQ0M7UUE3bENHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLG1CQUFhLEdBQVksSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixZQUFNLEdBQWEsSUFBSSxDQUFBO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBSXZC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QU0sR0FBRyxJQUFJLENBQUE7UUFDakMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRVAsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDakQ7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQy9EO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDbkQ7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO1lBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FB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QUFFLENBQUMsQ0FBQTtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDTCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDTCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JB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QUFBO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUMxQyxpQ0FBaUM7UUFDakMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFB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Q0FBQzs2Q0FDRjtJQUVoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7K0NBQ0s7SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0RBQ007SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQXhFUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK2xDNUI7SUFBRCxlQUFDO0NBL2xDRCxBQStsQ0MsQ0EvbENxQyxFQUFFLENBQUMsU0FBUyxHQStsQ2pEO2tCQS9sQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5nb2xkID0gMTAwXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5wYzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbnBjMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1c05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RQbGFjZVBvczogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENydW5jaDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94aW5nMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJveGluZzI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQkc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ29uZmlybTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpbGRVcGdyYWRlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZFVwZ3JhZGUyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvaG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0RTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ29pbjogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRheVRhMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvaW5CYXI6IGNjLk5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJY29uUHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UHQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ29pbjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RQcmVQdDogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdFByZUN1czogY2MuUHJlZmFiW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhcnJNYXlEYXk6IGNjLk5vZGVbXSA9IFtdXHJcbiAgICBhcnJQb3NEb25lID0gW2NjLnYzKC0yMzksIC0xMzMpLCBjYy52Myg1NywgLTE1NyksIGNjLnYzKC0xMjMsIC0zNiksIGNjLnYzKC0xNCwgNjUpLCBjYy52MygtNTgsIC0yMzUpLCBjYy52MygxOTgsIC01OSldXHJcbiAgICBhcnJQb3NEb25lQ3J1bmNoID0gW2NjLnYzKDIxOCwgLTM5MiksIGNjLnYzKDQwOSwgLTI4OSldXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RDcnVuY2g6Y2MuTm9kZT1udWxsXHJcbiAgICBhcnJQb3NDdXMgPSBbXVxyXG4gICAgYXJyQ3VzID0gW11cclxuICAgIGFyckljb25QdCA9IFtdXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICBhcnJDcnVuY2ggPSBbXVxyXG4gICAgcHRCdXN5TWFjaGluZXMgPSB7fVxyXG4gICAgaXNHYW1lU3RhcnRlZCA9IGZhbHNlXHJcbiAgICBndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgIGlzSGluZCA9IGZhbHNlXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgcG9zR2FwQnVuZyA9IGNjLnYzKC0zMCwgLTE5KTtcclxuICAgIHBvc05hbmdUYSA9IGNjLnYzKC01MCwgLTQyKVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCRywgdHJ1ZSwgMC41KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQxLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwLjYpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMucHVzaCh0aGlzLmxpc3RDdXNOb2RlLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEljb25QdC5jaGlsZHJlblswXS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJJY29uUHQucHVzaCh0aGlzLmxpc3RJY29uUHQuY2hpbGRyZW5bMF0uY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3J1bmNoLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckNydW5jaC5wdXNoKHRoaXMubGlzdENydW5jaC5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubGlzdFBsYWNlUG9zLmNoaWxkcmVuW2ldLnBvc2l0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuYXJyUG9zQ3VzLnB1c2goY2MudjMocG9zLngsIHBvcy55LCBwb3MueikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFF1ZXVlUG9zKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuYXJyUG9zQ3VzW2luZGV4XVxyXG4gICAgICAgIHJldHVybiBjYy52Myhwb3MueCwgcG9zLnksIHBvcy56KVxyXG4gICAgfVxyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBzcGF3Q3VzdG9tZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJyQ3VzLmxlbmd0aCA+PSB0aGlzLmFyclBvc0N1cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBsZXQgcXVldWVJbmRleCA9IHRoaXMuYXJyQ3VzLmxlbmd0aFxyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmdldFF1ZXVlUG9zKHF1ZXVlSW5kZXgpXHJcbiAgICAgICAgbGV0IGN1cyA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdFByZUN1c1t0aGlzLmNvdW50Q3VzXSlcclxuICAgICAgICBjdXMucGFyZW50ID0gdGhpcy5saXN0Q3VzTm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5hcnJDdXMucHVzaChjdXMpO1xyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGN1c0NvbXAuaXNRdWV1ZU1vdmluZyA9IHRydWVcclxuICAgICAgICBjdXMucG9zaXRpb24gPSBjYy52MygtOTM0LCAtNjMyKVxyXG4gICAgICAgIGxldCBhbmltID0gY3VzLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtJblJcIiwgdHJ1ZSlcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY3VzKVxyXG4gICAgICAgIGNjLnR3ZWVuKGN1cykudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTY3NSwgLTQzNSkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cy5zY2FsZVggPSAtMVxyXG4gICAgICAgIH0pLnRvKDAuOCwgeyBwb3NpdGlvbjogcG9zRW5kIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjdXMuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICBpZiAoY3VzQ29tcC5pc0FuZ3J5V2FpdCkge1xyXG4gICAgICAgICAgICAgICAgY3VzQ29tcC50dWNHaWFuKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2FpdGluZ1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1c0NvbXAuc2hvd1F1ZXVlUG9wKClcclxuXHJcbiAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMuY291bnRDdXMrK1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50Q3VzID4gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50Q3VzID0gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgYXJyV2FpdGluZyA9IFtdXHJcbiAgICBkb0N1cyh0YWcsIGN1cykge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPD0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVDdXModGFnKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0SWNvblB0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJJY29uUHRbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckljb25QdFsxXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJySWNvblB0WzFdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckljb25QdFsyXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJySWNvblB0WzJdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3J1bmNoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyckNydW5jaFtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzVG9DcnVuY2goY3VzLCBpLCB0YWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhZyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWF5RGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyck1heURheVtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzVG9NYXlEYXkoY3VzLCBpLCB0YWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhZyA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYm94aW5nMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDdXNUb0JveGluZyhjdXMsIDAsIHRhZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgbGVhdmVRdWV1ZShjdXMpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmFyckN1cy5pbmRleE9mKGN1cylcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm5cclxuICAgICAgICB0aGlzLmFyckN1cy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHF1ZXVlQ3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuZ2V0UXVldWVQb3MoaSlcclxuICAgICAgICAgICAgbGV0IGN1c0NvbXAgPSBxdWV1ZUN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgbGV0IGFuaW0gPSBxdWV1ZUN1cy5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIGN1c0NvbXAuaXNRdWV1ZU1vdmluZyA9IHRydWVcclxuICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrSW5MXCIsIHRydWUpXHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChxdWV1ZUN1cylcclxuICAgICAgICAgICAgY2MudHdlZW4ocXVldWVDdXMpLnRvKDAuOCwgeyBwb3NpdGlvbjogcG9zRW5kIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVldWVDdXMuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1c0NvbXAuaXNBbmdyeVdhaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXNDb21wLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhaXRpbmdcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1c0NvbXAuc2hvd1F1ZXVlUG9wKClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVDdXNUb0NydW5jaChjdXMsIHZhbHVlLCB0YWcpIHtcclxuICAgICAgICB0aGlzLmxlYXZlUXVldWUoY3VzKVxyXG4gICAgICAgIGxldCBjcnVuY2ggPSB0aGlzLmFyckNydW5jaFt2YWx1ZV07XHJcbiAgICAgICAgY3VzLnBhcmVudCA9IGNydW5jaDtcclxuICAgICAgICBjdXMucG9zaXRpb24gPSB0aGlzLnBvc0dhcEJ1bmc7XHJcbiAgICAgICAgY3VzLm5hbWUgPSBcImNoYXJcIlxyXG4gICAgICAgIGN1cy5jaGlsZHJlblswXS5zY2FsZSA9IDFcclxuICAgICAgICBjdXMuc2NhbGUgPSAxXHJcbiAgICAgICAgY3VzLnNjYWxlWCA9IDFcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROYW1lID0gXCJDcnVuY2hcIlxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50SW5kZXggPSB2YWx1ZTtcclxuICAgICAgICBjdXNDb21wLnBhcmVudE5vZGUgPSBjcnVuY2hcclxuXHJcbiAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnB1c2goY3VzKVxyXG4gICAgICAgIGN1c0NvbXAud2FpdGluZ1RhZyh0YWcpXHJcbiAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG5cclxuICAgIH1cclxuICAgIG1vdmVDdXNUb01heURheShjdXMsIHZhbHVlLCB0YWcpIHtcclxuICAgICAgICB0aGlzLmxlYXZlUXVldWUoY3VzKVxyXG4gICAgICAgIGxldCBtYXkgPSB0aGlzLmFyck1heURheVt2YWx1ZV1cclxuICAgICAgICBjdXMucGFyZW50ID0gbWF5O1xyXG4gICAgICAgIGN1cy5wb3NpdGlvbiA9IHRoaXMucG9zTmFuZ1RhO1xyXG4gICAgICAgIGN1cy5uYW1lID0gXCJjaGFyXCJcclxuICAgICAgICBjdXMuY2hpbGRyZW5bMF0uc2NhbGUgPSAxO1xyXG4gICAgICAgIGN1cy5zY2FsZSA9IDFcclxuICAgICAgICBjdXMuc2NhbGVYID0gMVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIG1heS5nZXRDaGlsZEJ5TmFtZShcIkcxX0FiQ3J1bmNoXCIpLnpJbmRleD0xXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROYW1lID0gXCJNYXlEYXlcIlxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50SW5kZXggPSB2YWx1ZTtcclxuICAgICAgICBjdXNDb21wLnBhcmVudE5vZGUgPSBtYXlcclxuXHJcbiAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnB1c2goY3VzKVxyXG4gICAgICAgIGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikud2FpdGluZ1RhZyh0YWcpXHJcbiAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgfVxyXG4gICAgbW92ZUN1c1RvQm94aW5nKGN1cywgdmFsdWUsIHRhZykge1xyXG4gICAgICAgIHRoaXMubGVhdmVRdWV1ZShjdXMpXHJcbiAgICAgICAgY3VzLnBhcmVudCA9IHRoaXMuYm94aW5nMVxyXG4gICAgICAgIGN1cy5wb3NpdGlvbiA9IGNjLnYzKDEyMywgMjMpO1xyXG4gICAgICAgIGN1cy5uYW1lID0gXCJjaGFyXCJcclxuICAgICAgICBjdXMuY2hpbGRyZW5bMF0uc2NhbGUgPSAxO1xyXG4gICAgICAgIGN1cy5zY2FsZSA9IDFcclxuICAgICAgICBjdXMuc2NhbGVYID0gMVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG5cclxuICAgICAgICBjdXNDb21wLnBhcmVudE5hbWUgPSBcIkJveGluZ1wiXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnRJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgIGN1c0NvbXAucGFyZW50Tm9kZSA9IHRoaXMuYm94aW5nMVxyXG4gICAgICAgIHRoaXMuYXJyV2FpdGluZy5wdXNoKGN1cylcclxuICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLndhaXRpbmdUYWcodGFnKVxyXG4gICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgIH1cclxuICAgIG9mZkljb25QdChub2RlKSB7XHJcbiAgICAgICAgbm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBvbkljb25QdChub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlzSWNvblB0RnJlZShub2RlKSB7XHJcbiAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmFjdGl2ZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGJ0biA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICBpZiAoYnRuICYmICFidG4uZW5hYmxlZCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgLy8gY2hpbGRyZW5bMV0gPSBidXN5IG92ZXJsYXlcclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlblsxXSAmJiBub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGhhc0ZyZWVNYWNoaW5lRm9yVGFnKHRhZykge1xyXG4gICAgICAgIGlmICh0YWcgPT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3J1bmNoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXJyQ3J1bmNoW2ldLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSkgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhZyA9PSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJNYXlEYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJNYXlEYXlbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFnID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY2FuQ2xpY2tRdWV1ZUN1cyhjdXMpIHtcclxuICAgICAgICBpZiAoIWN1cyB8fCAhY3VzLmlzVmFsaWQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGlmICghY3VzQ29tcCB8fCBjdXNDb21wLmlzUXVldWVNb3ZpbmcpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBwb3AgPSBjdXMuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIilcclxuICAgICAgICBpZiAoIXBvcCB8fCAhcG9wLmFjdGl2ZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGJ0biA9IHBvcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGlmIChidG4gJiYgIWJ0bi5lbmFibGVkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPCA0KSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXNGcmVlTWFjaGluZUZvclRhZyhjdXNDb21wLnRhZylcclxuICAgIH1cclxuICAgIGhhc0N1c1dhaXRpbmdGb3JQdCgpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBXYWl0aW5nKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyV2FpdGluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0N1c1dhaXRpbmdGb3JQdCh0aGlzLmFycldhaXRpbmdbaV0pKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNhbkNsaWNrSWNvblB0KG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0ljb25QdEZyZWUobm9kZSkgJiYgdGhpcy5oYXNDdXNXYWl0aW5nRm9yUHQoKVxyXG4gICAgfVxyXG4gICAgaGlkZUFsbEljb25QdEhhbmRzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJJY29uUHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGhhbmQgPSB0aGlzLmFyckljb25QdFtpXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIilcclxuICAgICAgICAgICAgaWYgKGhhbmQpIGhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93RnJlZUljb25QdEhhbmQoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQWxsSWNvblB0SGFuZHMoKVxyXG4gICAgICAgIHRoaXMuaGlkZUFsbFF1ZXVlSGFuZHMoKVxyXG4gICAgICAgIGlmICghdGhpcy5oYXNDdXNXYWl0aW5nRm9yUHQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJySWNvblB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gdGhpcy5hcnJJY29uUHRbaV1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuQ2xpY2tJY29uUHQoaWNvbikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kID0gaWNvbi5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIilcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGluZ0ljb25QdCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3VpZGluZ0ljb25QdCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgfVxyXG4gICAgaGlkZUFsbFF1ZXVlSGFuZHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSBjb250aW51ZVxyXG4gICAgICAgICAgICBsZXQgcG9wID0gY3VzLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICAgICAgICAgIGlmICghcG9wKSBjb250aW51ZVxyXG4gICAgICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIilcclxuICAgICAgICAgICAgaWYgKGhhbmQpIGhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVRdWV1ZUhhbmQoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQWxsUXVldWVIYW5kcygpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwIDwgNCkgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMuZ3VpZGluZ0ljb25QdCkgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrUXVldWVDdXMoY3VzKSkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IGhhbmQgPSBjdXMuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xpY2tQdChldmVudCwgdGFnKSB7XHJcbiAgICAgICAgbGV0IHB0ID0gbnVsbDtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGJ0bi5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50ZXh0R3VpbGQxKS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHB0ID0gdGhpcy5saXN0UHQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMlxyXG4gICAgICAgICAgICBsZXQgZm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdC5nZXRDb21wb25lbnQoXCJwdFwiKS5tb3ZlSW4oZm5jKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzFdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHB0LnBhcmVudCA9IHRoaXMubm9kZVxyXG5cclxuICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvb3Jfb3BlblwiKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJkb29yX2Nsb3NlXCIpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjcpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmSWNvblB0KHRoaXMuYXJySWNvblB0WzBdKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBwdCA9IHRoaXMubGlzdFB0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDNcclxuICAgICAgICAgICAgcHQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvb3Jfb3BlblwiKVxyXG4gICAgICAgICAgICBsZXQgZm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdC5nZXRDb21wb25lbnQoXCJwdFwiKS5tb3ZlSW4oZm5jKVxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckN1c1syXS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHQucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJkb29yX2Nsb3NlXCIpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjcpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmSWNvblB0KHRoaXMuYXJySWNvblB0WzFdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHB0ID0gdGhpcy5saXN0UHQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gNFxyXG4gICAgICAgICAgICBwdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9vcl9vcGVuXCIpXHJcblxyXG4gICAgICAgICAgICBsZXQgZm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoMilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdC5nZXRDb21wb25lbnQoXCJwdFwiKS5tb3ZlSW4oZm5jKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHQucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJkb29yX2Nsb3NlXCIpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjcpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmSWNvblB0KHRoaXMuYXJySWNvblB0WzJdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwV2FpdGluZygpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJXYWl0aW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJXYWl0aW5nW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ3VzV2FpdGluZ0ZvclB0KGN1cykpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWRkUHQoY3VzLCBjdXNDb21wLnBhcmVudE5hbWUsIGV2ZW50LmN1cnJlbnRUYXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYW51cFdhaXRpbmcoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuYXJyV2FpdGluZy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDdXNPbk1hY2hpbmUodGhpcy5hcnJXYWl0aW5nW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNDdXNPbk1hY2hpbmUoY3VzKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgIWN1c0NvbXAucGFyZW50Tm9kZSB8fCAhY3VzQ29tcC5wYXJlbnROb2RlLmlzVmFsaWQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmIChjdXMucGFyZW50ICE9PSBjdXNDb21wLnBhcmVudE5vZGUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmIChjdXMubmFtZSAhPT0gXCJjaGFyXCIpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpc0N1c1dhaXRpbmdGb3JQdChjdXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDdXNPbk1hY2hpbmUoY3VzKSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuaXNQdCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNYWNoaW5lUHRCdXN5KGN1c0NvbXAucGFyZW50TmFtZSwgY3VzQ29tcC5wYXJlbnRJbmRleCkpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZW1vdmVGcm9tV2FpdGluZyhjdXMpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmFycldhaXRpbmcuaW5kZXhPZihjdXMpXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFycldhaXRpbmcuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1hY2hpbmVLZXkocGFyZW50TmFtZSwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gcGFyZW50TmFtZSArIFwiX1wiICsgaW5kZXhcclxuICAgIH1cclxuICAgIGlzTWFjaGluZVB0QnVzeShwYXJlbnROYW1lLCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMucHRCdXN5TWFjaGluZXNbdGhpcy5nZXRNYWNoaW5lS2V5KHBhcmVudE5hbWUsIGluZGV4KV1cclxuICAgIH1cclxuICAgIHNldE1hY2hpbmVQdEJ1c3kocGFyZW50TmFtZSwgaW5kZXgsIGJ1c3kpIHtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5nZXRNYWNoaW5lS2V5KHBhcmVudE5hbWUsIGluZGV4KVxyXG4gICAgICAgIGlmIChidXN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHRCdXN5TWFjaGluZXNba2V5XSA9IHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wdEJ1c3lNYWNoaW5lc1trZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVsZWFzZU1hY2hpbmVQdChwYXJlbnROYW1lLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2V0TWFjaGluZVB0QnVzeShwYXJlbnROYW1lLCBpbmRleCwgZmFsc2UpXHJcbiAgICB9XHJcbiAgICBnZXRQdFRhZyhwYXJlbnROYW1lLCBwYXJlbnRJbmRleCkge1xyXG4gICAgICAgIHN3aXRjaCAocGFyZW50TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ3J1bmNoXCI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gMFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIDRcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiA1XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gNlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJNYXlEYXlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRJbmRleCA9PT0gMCA/IDEgOiAzXHJcbiAgICAgICAgICAgIGNhc2UgXCJCb3hpbmdcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvdW50cHQgPSAwXHJcbiAgICBvcGVuRG9vcigpIHtcclxuICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvb3Jfb3BlblwiKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9vcl9jbG9zZVwiKVxyXG5cclxuICAgICAgICB9LCAwLjcpXHJcbiAgICB9XHJcbiAgICBhZGRQdChjdXMsIHBhcmVudE5hbWUsIGJ0bikge1xyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDdXNXYWl0aW5nRm9yUHQoY3VzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVuRG9vcigpO1xyXG4gICAgICAgIGN1c0NvbXAuaXNQdCA9IHRydWVcclxuICAgICAgICB0aGlzLnNldE1hY2hpbmVQdEJ1c3kocGFyZW50TmFtZSwgY3VzQ29tcC5wYXJlbnRJbmRleCwgdHJ1ZSlcclxuICAgICAgICBsZXQgcHQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVQdFt0aGlzLmNvdW50cHRdKTtcclxuICAgICAgICBwdC5wYXJlbnQgPSB0aGlzLmxpc3RQdDtcclxuICAgICAgICBwdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgcHQucG9zaXRpb24gPSBjYy52MygzODIuNjA3LCAxMjEpXHJcbiAgICAgICAgbGV0IHB0Q29tcCA9IHB0LmdldENvbXBvbmVudChcInB0XCIpO1xyXG4gICAgICAgIHB0Q29tcC5idG4gPSBidG5cclxuICAgICAgICBwdENvbXAubWFjaGluZVBhcmVudE5hbWUgPSBwYXJlbnROYW1lXHJcbiAgICAgICAgcHRDb21wLm1hY2hpbmVJbmRleCA9IGN1c0NvbXAucGFyZW50SW5kZXhcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudHB0Kys7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBwdC5wYXJlbnQgPSB0aGlzLm5vZGVcclxuXHJcbiAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50cHQgPiAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRwdCA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRhZyA9IHRoaXMuZ2V0UHRUYWcocGFyZW50TmFtZSwgY3VzQ29tcC5wYXJlbnRJbmRleClcclxuICAgICAgICBwdENvbXAudGFnID0gTnVtYmVyKHRhZylcclxuICAgICAgICBsZXQgdGFyZ2V0Q3VzID0gY3VzXHJcbiAgICAgICAgbGV0IGZuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoTnVtYmVyKHRhZyksIHRhcmdldEN1cylcclxuICAgICAgICB9XHJcbiAgICAgICAgcHRDb21wLm1vdmVJbihmbmMpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlzQ291bnRBY3Rpb24gPSAwXHJcbiAgICBhY3RpdmVDdXModmFsdWUsIGN1cyA9IG51bGwpIHtcclxuICAgICAgICBsZXQgY2hhciA9IGN1cyAmJiB0aGlzLmlzQ3VzT25NYWNoaW5lKGN1cykgPyBjdXMgOiBudWxsXHJcbiAgICAgICAgaWYgKCFjaGFyKSB7XHJcbiAgICAgICAgICAgIGNoYXIgPSB0aGlzLmdldENoYXJCeVB0VGFnKHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNoYXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiYWN0aXZlQ3VzOiBtaXNzaW5nIGNoYXIgZm9yIHRhZ1wiLCB2YWx1ZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbVdhaXRpbmcoY2hhcilcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKGN1c0NvbXApIHtcclxuICAgICAgICAgICAgY3VzQ29tcC5pc1B0ID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZVswXSwgNClcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZGF5VGEoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiRzFfQWJDcnVuY2hcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygtMTUuNzcxICsgMTQsIDcgLSA1KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF5VGExLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiRzFfQWJDcnVuY2hcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZUNydW5jaFswXSwgNilcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3hpbmcxLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuYm94aW5nKClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hpbmcxLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgY2MudjMoNjQ3LCAtNjYpLCA2KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF5RGF5MiA9IHRoaXMuYXJyTWF5RGF5WzFdXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5kYXlUYSgpXHJcbiAgICAgICAgICAgICAgICBtYXlEYXkyLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBtYXlEYXkyLmdldENoaWxkQnlOYW1lKFwiRzFfQWJDcnVuY2hcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygtMTUuNzcxICsgMTQsIDcgLSA1KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heURheTIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgbWF5RGF5Mi5nZXRDaGlsZEJ5TmFtZShcIkcxX0FiQ3J1bmNoXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCB0aGlzLmFyclBvc0RvbmVDcnVuY2hbMV0sIDYpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzFdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFsxXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZVsxXSwgNClcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoMSwgLTE2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMl0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzJdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lWzJdLCA0KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5nYXBCdW5nKClcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygxLCAtMTYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFszXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbM10uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCB0aGlzLmFyclBvc0RvbmVbM10sIDQpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBnZXRDaGFyQnlQdFRhZyh2YWx1ZSkge1xyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gdGhpcy5hcnJDcnVuY2hbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiB0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRoaXMuYXJyTWF5RGF5WzFdLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiB0aGlzLmFyckNydW5jaFsxXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gdGhpcy5hcnJDcnVuY2hbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIHRoaXMuYXJyQ3J1bmNoWzNdLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpbmlzaEN1c1dvcmtvdXQoY2hhciwgcG9zRG9uZSwgY29pbikge1xyXG4gICAgICAgIGlmICghY2hhciB8fCAhY2hhci5pc1ZhbGlkKSByZXR1cm5cclxuICAgICAgICB0aGlzLnJlbW92ZUZyb21XYWl0aW5nKGNoYXIpXHJcbiAgICAgICAgY2hhci5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuaGFwcHkoKVxyXG4gICAgICAgIGNoYXIucG9zaXRpb24gPSBwb3NEb25lXHJcbiAgICAgICAgY2hhci5zY2FsZSA9IDAuOFxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29pbihjaGFyLCBjb2luKVxyXG4gICAgICAgIGNjLnR3ZWVuKGNoYXIpLmRlbGF5KDEpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuICAgICAgICBpZiAoIXRoaXMuZ3VpZGluZ0ljb25QdCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZVN0YXJ0ZWQpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNHYW1lU3RhcnRlZCA9IHRydWVcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5hcnJJY29uUHQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkljb25QdChjaGlsZClcclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcnJXYWl0aW5nID0gW11cclxuICAgICAgICB0aGlzLnB0QnVzeU1hY2hpbmVzID0ge31cclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zcGF3Q3VzdG9tZXIpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5baV0uZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXJyQ3VzID0gW11cclxuICAgICAgICB0aGlzLnNwYXdDdXN0b21lcigpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zcGF3Q3VzdG9tZXIsIDQpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRHdWlsZDIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5hcnJDdXMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3Q3VzdG9tZXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICB9LCAxNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudGV4dEd1aWxkMikudG8oMC44LCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy56b29tR2FtZSgpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RhcnRHYW1lKClcclxuICAgICAgICB9LCAyMilcclxuXHJcbiAgICB9XHJcbiAgICB6b29tR2FtZSgpe1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjgsIHsgem9vbVJhdGlvOiAyIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKC00OTQsIC0yOTYpIH0pLnN0YXJ0KClcclxuICAgICAgICB3aGlsZSAodGhpcy5hcnJDdXMubGVuZ3RoIDwgNSAmJiB0aGlzLmFyckN1cy5sZW5ndGggPCB0aGlzLmFyclBvc0N1cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGF3Q3VzdG9tZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICBpZiAoIWN1cyB8fCAhY3VzLmlzVmFsaWQpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgICAgICBpZiAoIWN1c0NvbXApIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGN1c0NvbXAuaXNBbmdyeVdhaXQgPSB0cnVlXHJcbiAgICAgICAgICAgIGlmICghY3VzQ29tcC5pc1F1ZXVlTW92aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjdXNDb21wLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICBcclxuICAgIH1cclxuICAgIGNyZWF0ZUNvaW4obm9kZSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBsZXQgY29pbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XHJcbiAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY29pbi5wb3NpdGlvbiA9IHBvcy5hZGQoY2MudjMoMCwgNTApKVxyXG4gICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSB2YWx1ZVxyXG4gICAgfVxyXG4gICAgbW92ZUN1cyh2YWx1ZSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5hcnJDcnVuY2hbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1sxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjaGFyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDJcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbM10uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0NvdW50QWN0aW9uKys7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudEFjdGlvbiA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhbWUxKClcclxuXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNIaW5kID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIG9uSGluZCgpIHtcclxuICAgIC8vICAgICBsZXQgaW5kZXggPSAxO1xyXG5cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgLy8gdOG6r3QgdOG6pXQgY+G6oyB0csaw4bubY1xyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgcG9wID0gdGhpcy5hcnJDdXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIik7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAvLyAgICAgICAgICAgICBoYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAvLyBi4bqtdCBjw6FpIGhp4buHbiB04bqhaVxyXG4gICAgLy8gICAgICAgICBsZXQgcG9wID0gdGhpcy5hcnJDdXNbaW5kZXhdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpO1xyXG4gICAgLy8gICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAvLyAgICAgICAgIGhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgICAgIGluZGV4Kys7XHJcbiAgICAvLyAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLmFyckN1cy5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIGluZGV4ID0gMTsgLy8gcXVheSBs4bqhaSB04burIMSR4bqndVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSwgMC41KTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlzQ3VzID0gMFxyXG4gICAgLy8gbW92ZUNhbWUxKCkge1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAyLjMgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMjAwLCAtNTUwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgfSwgMC41KVxyXG4gICAgLy8gICAgIHRoaXMuaXNDdXMgPSAwXHJcbiAgICAvLyB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0NvdW50U3RlcCA9IDBcclxuICAgIC8vIGJ0bl91cGdyYWRlKCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbmZpcm0sIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIHRoaXMuaXNDb3VudFN0ZXArK1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzQ291bnRTdGVwIDwgNSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gdGhpcy5pc0NvdW50U3RlcCAqIDAuMjVcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5saXN0RS5jaGlsZHJlblt0aGlzLmlzQ291bnRTdGVwIC0gMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IGJ0biA9IHRoaXMuZ3VpbGRVcGdyYWRlLmNoaWxkcmVuWzJdLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uXCIpXHJcbiAgICAvLyAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgYnRuLnBvc2l0aW9uID0gY2MudjMoNjAgKiB0aGlzLmlzQ291bnRTdGVwLCAtMTcuOTMpXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNDdXMgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hhciA9IHRoaXMubGlzdENydW5jaC5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTY3LCAtNTApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubW92ZTQoKVxyXG4gICAgLy8gICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDIwMFxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5waGFvaG9hLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoYXIpLnRvKDAuMywgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9LCAxKVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2UgaWYgKHRoaXMuaXNDdXMgPT0gMSkge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hhciA9IHRoaXMuYm94aW5nMS5jaGlsZHJlblswXVxyXG5cclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyMDBcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pbjJcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmhhcHB5KClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5tb3ZlNCgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICAgICAgfSwgMSlcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuaXNDb3VudFN0ZXAgPT0gNCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5pc0N1cyA9PSAyKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGFyID0gdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdXHJcbiAgICAvLyAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgLy8gICAgICAgICAvLyBpZiAodGhpcy5pc0NvdW50U3RlcCA9PSAyKSB7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgLy8gfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIG9uRW5kZ2FtZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gbW92ZTIoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBzY2FsZTogMSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5nYW1lKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0N1cyA9IDFcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0NvdW50U3RlcCA9IDBcclxuICAgIC8vICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDBcclxuXHJcbiAgICAvLyAgICAgfSwgMSlcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubW92ZTMoKVxyXG4gICAgLy8gICAgIH0sIDEuNylcclxuICAgIC8vIH1cclxuICAgIC8vIG1vdmUzKCkge1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAyLjcgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTE5NzMsIC0xMjApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICB9LCAwLjUpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlNCgpIHtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ3VzID0gMlxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnRTdGVwID0gMFxyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMFxyXG4gICAgLy8gICAgIH0sIDEpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm1vdmU1KClcclxuICAgIC8vICAgICB9LCAxLjcpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlNSgpIHtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDEsIHsgc2NhbGU6IDEuNyB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMTEwMCwgMTAwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgLy8gbGV0IHRleHQgPSB0aGlzLmd1aWxkVXBncmFkZS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKVxyXG4gICAgLy8gICAgIC8vIHRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIkxhc3Qgb25lISBGaW5pc2ggc3Ryb25nIVwiXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmd1aWxkVXBncmFkZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgIH0sIDAuNSlcclxuICAgIC8vIH1cclxuICAgIC8vIGRlbTEgPSAwO1xyXG4gICAgLy8gZGVtMiA9IDBcclxuICAgIC8vIGJ0bl91cGdyYWRlMihldmVudCwgdmFsdWUpIHtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb25maXJtLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICBpZiAodmFsdWUgPT0gXCIxXCIpIHtcclxuICAgIC8vICAgICAgICAgbGV0IGZpbGwgPSB0aGlzLmd1aWxkVXBncmFkZTIuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1RyYWluMlwiKS5jaGlsZHJlblsxXVxyXG4gICAgLy8gICAgICAgICBsZXQgYnRuID0gdGhpcy5ndWlsZFVwZ3JhZGUyLmdldENoaWxkQnlOYW1lKFwiYmdUcmFpbjJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIilcclxuICAgIC8vICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmRheVRhMS5jaGlsZHJlblswXVxyXG4gICAgLy8gICAgICAgICBjaGFyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZGVtMSsrXHJcbiAgICAvLyAgICAgICAgIGZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy5kZW0xICogMC4yXHJcbiAgICAvLyAgICAgICAgIGJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICBidG4ucG9zaXRpb24gPSBjYy52Myg1MCAqIHRoaXMuZGVtMSwgLTE3LjkzKVxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5kZW0xID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTgxLCAtNDUpXHJcbiAgICAvLyAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBsZXQgZmlsbCA9IHRoaXMuZ3VpbGRVcGdyYWRlMi5nZXRDaGlsZEJ5TmFtZShcImJnVHJhaW5cIikuY2hpbGRyZW5bMV1cclxuICAgIC8vICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF1cclxuICAgIC8vICAgICAgICAgbGV0IGJ0biA9IHRoaXMuZ3VpbGRVcGdyYWRlMi5nZXRDaGlsZEJ5TmFtZShcImJnVHJhaW5cIikuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIilcclxuXHJcbiAgICAvLyAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwidmZ4XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5kZW0yKytcclxuICAgIC8vICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIGJ0bi5wb3NpdGlvbiA9IGNjLnYzKDUwICogdGhpcy5kZW0yLCAtMTcuOTMpXHJcbiAgICAvLyAgICAgICAgIGZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy5kZW0yICogMC4yXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmRlbTIgPT0gNSkge1xyXG4gICAgLy8gICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAvLyAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBpZiAodGhpcy5kZW0xID09IDUgJiYgdGhpcy5kZW0yID09IDUpIHtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5ndWlsZFVwZ3JhZGUyKS50bygwLjI2LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZTIuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm1vdmUyKClcclxuICAgIC8vICAgICAgICAgfSwgMC44KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMVxyXG5cclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5zY2FsZSA9IChsb2dpYykgPyAyLjQgOiAxXHJcbiAgICAgICAgdGhpcy5ndWlsZFVwZ3JhZGUyLnNjYWxlID0gKGxvZ2ljKSA/IDEuNiA6IDFcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgdGhpcy5sYkNvaW4uc3RyaW5nID0gZ2xvYmFsVGhpcy5nb2xkLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLm5wYy5zY2FsZSA9IChsb2dpYykgPyAxLjcgOiAxXHJcbiAgICAgICAgdGhpcy5ucGMyLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICB0aGlzLm5wYy55ID0gKGxvZ2ljKSA/IC03MDAgOiAwXHJcbiAgICAgICAgdGhpcy5ucGMyLnkgPSAobG9naWMpID8gLTcwMCA6IDBcclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMS41IDogMC43XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDEuNSA6IDFcclxuICAgICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAobG9naWMpID8gMS41IDogMTtcclxuICAgICAgICB0aGlzLmNvaW5CYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNzc7XHJcbiAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDQ4XHJcbiAgICAgICAgLy8gdGhpcy5iYXJDb2luLnk9KGxvZ2ljKT80MDA6NDcwXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTcwLCAwKVxyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS43XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygxNTAsIDApXHJcbiAgICAgICAgICAgIHRoaXMucGhhb2hvYS5zY2FsZSA9IChsb2dpYykgPyA3IDogM1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrIGlwaG9uZXhcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuY29pbkJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA3NyArIDMwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDQ4ICsgMzBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjRcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLnNjYWxlID0gMS44XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19