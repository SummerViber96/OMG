
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
        _this.sortLayer = null;
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
        _this.hideQueueHandGuide = false;
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
            for (var i = 0; i < Math.min(3, _this.arrCus.length); i++) {
                var child = _this.arrCus[i];
                if (child && child.isValid) {
                    child.getChildByName("pop").active = true;
                }
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
        this.setupSortLayer();
        this.rebuildQueuePosInSortLayer();
        for (var i = 0; i < this.arrCus.length; i++) {
            this.attachToSortLayer(this.arrCus[i]);
        }
        this.refreshSortLayerDepth();
    };
    NewClass.prototype.setupSortLayer = function () {
        var doorParent = this.door ? this.door.parent : null;
        var parent = (doorParent && doorParent.parent)
            || (this.listCrunch && this.listCrunch.parent)
            || this.game
            || this.node;
        if (!this.sortLayer || !this.sortLayer.isValid) {
            this.sortLayer = new cc.Node("SortLayer");
            this.sortLayer.parent = parent;
            this.sortLayer.setPosition(0, 0);
            if (doorParent && doorParent.parent === parent) {
                this.sortLayer.setSiblingIndex(doorParent.getSiblingIndex());
            }
            else if (this.listCrunch && this.listCrunch.parent === parent) {
                this.sortLayer.setSiblingIndex(this.listCrunch.getSiblingIndex());
            }
        }
        var nodes = [];
        for (var i = 0; i < this.arrCrunch.length; i++) {
            nodes.push(this.arrCrunch[i]);
        }
        for (var i = 0; i < this.arrMayDay.length; i++) {
            if (this.arrMayDay[i])
                nodes.push(this.arrMayDay[i]);
        }
        if (doorParent && doorParent !== parent && doorParent !== this.sortLayer) {
            nodes.push(doorParent);
        }
        else if (this.door) {
            nodes.push(this.door);
        }
        if (this.boxing1)
            nodes.push(this.boxing1);
        if (this.boxing2)
            nodes.push(this.boxing2);
        if (this.dayTa1)
            nodes.push(this.dayTa1);
        if (this.listPt)
            nodes.push(this.listPt);
        for (var i = 0; i < nodes.length; i++) {
            this.attachToSortLayer(nodes[i]);
        }
        this.refreshSortLayerDepth();
        this.setDepthByY(this.sortLayer);
    };
    NewClass.prototype.rebuildQueuePosInSortLayer = function () {
        var layer = this.sortLayer;
        if (!layer || !this.listPlacePos)
            return;
        this.arrPosCus = [];
        for (var i = 0; i < this.listPlacePos.childrenCount; i++) {
            var place = this.listPlacePos.children[i];
            var worldPos = place.parent.convertToWorldSpaceAR(place.position);
            var localPos = layer.convertToNodeSpaceAR(worldPos);
            this.arrPosCus.push(cc.v3(localPos.x, localPos.y, localPos.z));
        }
    };
    NewClass.prototype.toSortLayerPos = function (fromParent, localPos) {
        var layer = this.sortLayer || this.node;
        if (!fromParent || fromParent === layer) {
            return cc.v3(localPos.x, localPos.y, localPos.z);
        }
        var worldPos = fromParent.convertToWorldSpaceAR(localPos);
        var pos = layer.convertToNodeSpaceAR(worldPos);
        return cc.v3(pos.x, pos.y, pos.z);
    };
    NewClass.prototype.getSortLayer = function () {
        if (!this.sortLayer || !this.sortLayer.isValid) {
            this.setupSortLayer();
        }
        return this.sortLayer || this.node;
    };
    NewClass.prototype.setDepthByY = function (node) {
        if (!node || !node.isValid)
            return;
        node.zIndex = -Math.round(node.y);
    };
    NewClass.prototype.attachToSortLayer = function (node) {
        var layer = this.sortLayer || this.node;
        if (!node || !node.isValid)
            return;
        if (node.parent === layer) {
            this.setDepthByY(node);
            return;
        }
        var worldPos = node.parent
            ? node.parent.convertToWorldSpaceAR(node.position)
            : node.position;
        node.parent = layer;
        node.position = layer.convertToNodeSpaceAR(worldPos);
        this.setDepthByY(node);
    };
    NewClass.prototype.refreshSortLayerDepth = function () {
        var layer = this.sortLayer;
        if (!layer)
            return;
        for (var i = 0; i < layer.childrenCount; i++) {
            this.setDepthByY(layer.children[i]);
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
        var spawnParent = this.listCusNode || this.node;
        var startPos = this.toSortLayerPos(spawnParent, cc.v3(-934, -632));
        var midPos = this.toSortLayerPos(spawnParent, cc.v3(-675, -435));
        this.attachToSortLayer(cus);
        this.arrCus.push(cus);
        var cusComp = cus.getComponent("cusGym");
        cusComp.isQueueMoving = true;
        cus.position = startPos;
        var anim = cus.children[0].getComponent(sp.Skeleton);
        anim.setAnimation(0, "WalkInR", true);
        cc.Tween.stopAllByTarget(cus);
        cc.tween(cus).to(1, { position: midPos }).call(function () {
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
        if (this.hideQueueHandGuide)
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
                _this.attachToSortLayer(pt);
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
                _this.attachToSortLayer(pt);
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
                _this.attachToSortLayer(pt);
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
            _this.attachToSortLayer(pt);
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
        var donePos = this.toSortLayerPos(this.node, posDone);
        this.attachToSortLayer(char);
        char.getComponent("cusGym").happy();
        char.position = donePos;
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
        for (var i = this.arrCus.length - 1; i >= 0; i--) {
            var cus = this.arrCus[i];
            if (cus && cus.isValid)
                cus.destroy();
        }
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
        this.hideQueueHandGuide = true;
        this.hideAllQueueHands();
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
        property(cc.Node)
    ], NewClass.prototype, "sortLayer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXEd5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtBQUVyQjtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW90Q0M7UUFsdENHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLG1CQUFhLEdBQVksSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixZQUFNLEdBQWEsSUFBSSxDQUFBO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBSXZC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S0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQzVELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDTCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDTCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxD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LEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7K0NBQ0s7SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0RBQ007SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQTFFUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb3RDNUI7SUFBRCxlQUFDO0NBcHRDRCxBQW90Q0MsQ0FwdENxQyxFQUFFLENBQUMsU0FBUyxHQW90Q2pEO2tCQXB0Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5nb2xkID0gMTAwXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5wYzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbnBjMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1c05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RQbGFjZVBvczogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENydW5jaDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94aW5nMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJveGluZzI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQkc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ29uZmlybTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpbGRVcGdyYWRlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZFVwZ3JhZGUyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvaG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0RTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ29pbjogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRheVRhMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvaW5CYXI6IGNjLk5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJY29uUHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UHQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNvcnRMYXllcjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDb2luOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdFByZVB0OiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0UHJlQ3VzOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFyck1heURheTogY2MuTm9kZVtdID0gW11cclxuICAgIGFyclBvc0RvbmUgPSBbY2MudjMoLTIzOSwgLTEzMyksIGNjLnYzKDU3LCAtMTU3KSwgY2MudjMoLTEyMywgLTM2KSwgY2MudjMoLTE0LCA2NSksIGNjLnYzKC01OCwgLTIzNSksIGNjLnYzKDE5OCwgLTU5KV1cclxuICAgIGFyclBvc0RvbmVDcnVuY2ggPSBbY2MudjMoMjE4LCAtMzkyKSwgY2MudjMoNDA5LCAtMjg5KV1cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbGlzdENydW5jaDpjYy5Ob2RlPW51bGxcclxuICAgIGFyclBvc0N1cyA9IFtdXHJcbiAgICBhcnJDdXMgPSBbXVxyXG4gICAgYXJySWNvblB0ID0gW11cclxuICAgIGlzU3RlcCA9IDBcclxuICAgIGFyckNydW5jaCA9IFtdXHJcbiAgICBwdEJ1c3lNYWNoaW5lcyA9IHt9XHJcbiAgICBpc0dhbWVTdGFydGVkID0gZmFsc2VcclxuICAgIGd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgaGlkZVF1ZXVlSGFuZEd1aWRlID0gZmFsc2VcclxuICAgIGlzSGluZCA9IGZhbHNlXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgcG9zR2FwQnVuZyA9IGNjLnYzKC0zMCwgLTE5KTtcclxuICAgIHBvc05hbmdUYSA9IGNjLnYzKC01MCwgLTQyKVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCRywgdHJ1ZSwgMC41KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbigzLCB0aGlzLmFyckN1cy5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQ3VzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQxLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwLjYpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMucHVzaCh0aGlzLmxpc3RDdXNOb2RlLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEljb25QdC5jaGlsZHJlblswXS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJJY29uUHQucHVzaCh0aGlzLmxpc3RJY29uUHQuY2hpbGRyZW5bMF0uY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3J1bmNoLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckNydW5jaC5wdXNoKHRoaXMubGlzdENydW5jaC5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubGlzdFBsYWNlUG9zLmNoaWxkcmVuW2ldLnBvc2l0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuYXJyUG9zQ3VzLnB1c2goY2MudjMocG9zLngsIHBvcy55LCBwb3MueikpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBTb3J0TGF5ZXIoKVxyXG4gICAgICAgIHRoaXMucmVidWlsZFF1ZXVlUG9zSW5Tb3J0TGF5ZXIoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hUb1NvcnRMYXllcih0aGlzLmFyckN1c1tpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoU29ydExheWVyRGVwdGgoKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwU29ydExheWVyKCkge1xyXG4gICAgICAgIGxldCBkb29yUGFyZW50ID0gdGhpcy5kb29yID8gdGhpcy5kb29yLnBhcmVudCA6IG51bGxcclxuICAgICAgICBsZXQgcGFyZW50ID0gKGRvb3JQYXJlbnQgJiYgZG9vclBhcmVudC5wYXJlbnQpXHJcbiAgICAgICAgICAgIHx8ICh0aGlzLmxpc3RDcnVuY2ggJiYgdGhpcy5saXN0Q3J1bmNoLnBhcmVudClcclxuICAgICAgICAgICAgfHwgdGhpcy5nYW1lXHJcbiAgICAgICAgICAgIHx8IHRoaXMubm9kZVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc29ydExheWVyIHx8ICF0aGlzLnNvcnRMYXllci5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydExheWVyID0gbmV3IGNjLk5vZGUoXCJTb3J0TGF5ZXJcIilcclxuICAgICAgICAgICAgdGhpcy5zb3J0TGF5ZXIucGFyZW50ID0gcGFyZW50XHJcbiAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFBvc2l0aW9uKDAsIDApXHJcbiAgICAgICAgICAgIGlmIChkb29yUGFyZW50ICYmIGRvb3JQYXJlbnQucGFyZW50ID09PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFNpYmxpbmdJbmRleChkb29yUGFyZW50LmdldFNpYmxpbmdJbmRleCgpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlzdENydW5jaCAmJiB0aGlzLmxpc3RDcnVuY2gucGFyZW50ID09PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFNpYmxpbmdJbmRleCh0aGlzLmxpc3RDcnVuY2guZ2V0U2libGluZ0luZGV4KCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBub2RlcyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRoaXMuYXJyQ3J1bmNoW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWF5RGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyck1heURheVtpXSkgbm9kZXMucHVzaCh0aGlzLmFyck1heURheVtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRvb3JQYXJlbnQgJiYgZG9vclBhcmVudCAhPT0gcGFyZW50ICYmIGRvb3JQYXJlbnQgIT09IHRoaXMuc29ydExheWVyKSB7XHJcbiAgICAgICAgICAgIG5vZGVzLnB1c2goZG9vclBhcmVudClcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG9vcikge1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRoaXMuZG9vcilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm94aW5nMSkgbm9kZXMucHVzaCh0aGlzLmJveGluZzEpXHJcbiAgICAgICAgaWYgKHRoaXMuYm94aW5nMikgbm9kZXMucHVzaCh0aGlzLmJveGluZzIpXHJcbiAgICAgICAgaWYgKHRoaXMuZGF5VGExKSBub2Rlcy5wdXNoKHRoaXMuZGF5VGExKVxyXG4gICAgICAgIGlmICh0aGlzLmxpc3RQdCkgbm9kZXMucHVzaCh0aGlzLmxpc3RQdClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKG5vZGVzW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2hTb3J0TGF5ZXJEZXB0aCgpXHJcbiAgICAgICAgdGhpcy5zZXREZXB0aEJ5WSh0aGlzLnNvcnRMYXllcilcclxuICAgIH1cclxuXHJcbiAgICByZWJ1aWxkUXVldWVQb3NJblNvcnRMYXllcigpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllclxyXG4gICAgICAgIGlmICghbGF5ZXIgfHwgIXRoaXMubGlzdFBsYWNlUG9zKSByZXR1cm5cclxuICAgICAgICB0aGlzLmFyclBvc0N1cyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBsYWNlID0gdGhpcy5saXN0UGxhY2VQb3MuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgbGV0IHdvcmxkUG9zID0gcGxhY2UucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwbGFjZS5wb3NpdGlvbilcclxuICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gbGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyUG9zQ3VzLnB1c2goY2MudjMobG9jYWxQb3MueCwgbG9jYWxQb3MueSwgbG9jYWxQb3MueikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9Tb3J0TGF5ZXJQb3MoZnJvbVBhcmVudCwgbG9jYWxQb3MpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllciB8fCB0aGlzLm5vZGVcclxuICAgICAgICBpZiAoIWZyb21QYXJlbnQgfHwgZnJvbVBhcmVudCA9PT0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYzKGxvY2FsUG9zLngsIGxvY2FsUG9zLnksIGxvY2FsUG9zLnopXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGZyb21QYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGxvY2FsUG9zKVxyXG4gICAgICAgIGxldCBwb3MgPSBsYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcylcclxuICAgICAgICByZXR1cm4gY2MudjMocG9zLngsIHBvcy55LCBwb3MueilcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0TGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNvcnRMYXllciB8fCAhdGhpcy5zb3J0TGF5ZXIuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwU29ydExheWVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydExheWVyIHx8IHRoaXMubm9kZVxyXG4gICAgfVxyXG4gICAgc2V0RGVwdGhCeVkobm9kZSkge1xyXG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm5cclxuICAgICAgICBub2RlLnpJbmRleCA9IC1NYXRoLnJvdW5kKG5vZGUueSlcclxuICAgIH1cclxuICAgIGF0dGFjaFRvU29ydExheWVyKG5vZGUpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllciB8fCB0aGlzLm5vZGVcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuXHJcbiAgICAgICAgaWYgKG5vZGUucGFyZW50ID09PSBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldERlcHRoQnlZKG5vZGUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBub2RlLnBhcmVudFxyXG4gICAgICAgICAgICA/IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICA6IG5vZGUucG9zaXRpb25cclxuICAgICAgICBub2RlLnBhcmVudCA9IGxheWVyXHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKVxyXG4gICAgICAgIHRoaXMuc2V0RGVwdGhCeVkobm9kZSlcclxuICAgIH1cclxuICAgIHJlZnJlc2hTb3J0TGF5ZXJEZXB0aCgpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllclxyXG4gICAgICAgIGlmICghbGF5ZXIpIHJldHVyblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVwdGhCeVkobGF5ZXIuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFF1ZXVlUG9zKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuYXJyUG9zQ3VzW2luZGV4XVxyXG4gICAgICAgIHJldHVybiBjYy52Myhwb3MueCwgcG9zLnksIHBvcy56KVxyXG4gICAgfVxyXG4gICAgY291bnRDdXMgPSAwXHJcbiAgICBzcGF3Q3VzdG9tZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJyQ3VzLmxlbmd0aCA+PSB0aGlzLmFyclBvc0N1cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBsZXQgcXVldWVJbmRleCA9IHRoaXMuYXJyQ3VzLmxlbmd0aFxyXG4gICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmdldFF1ZXVlUG9zKHF1ZXVlSW5kZXgpXHJcbiAgICAgICAgbGV0IGN1cyA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdFByZUN1c1t0aGlzLmNvdW50Q3VzXSlcclxuICAgICAgICBsZXQgc3Bhd25QYXJlbnQgPSB0aGlzLmxpc3RDdXNOb2RlIHx8IHRoaXMubm9kZVxyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IHRoaXMudG9Tb3J0TGF5ZXJQb3Moc3Bhd25QYXJlbnQsIGNjLnYzKC05MzQsIC02MzIpKVxyXG4gICAgICAgIGxldCBtaWRQb3MgPSB0aGlzLnRvU29ydExheWVyUG9zKHNwYXduUGFyZW50LCBjYy52MygtNjc1LCAtNDM1KSlcclxuICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKGN1cylcclxuXHJcbiAgICAgICAgdGhpcy5hcnJDdXMucHVzaChjdXMpO1xyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGN1c0NvbXAuaXNRdWV1ZU1vdmluZyA9IHRydWVcclxuICAgICAgICBjdXMucG9zaXRpb24gPSBzdGFydFBvc1xyXG4gICAgICAgIGxldCBhbmltID0gY3VzLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtJblJcIiwgdHJ1ZSlcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY3VzKVxyXG4gICAgICAgIGNjLnR3ZWVuKGN1cykudG8oMSwgeyBwb3NpdGlvbjogbWlkUG9zIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjdXMuc2NhbGVYID0gLTFcclxuICAgICAgICB9KS50bygwLjgsIHsgcG9zaXRpb246IHBvc0VuZCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgY3VzLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgaWYgKGN1c0NvbXAuaXNBbmdyeVdhaXQpIHtcclxuICAgICAgICAgICAgICAgIGN1c0NvbXAudHVjR2lhbigpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhaXRpbmdcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXNDb21wLnNob3dRdWV1ZVBvcCgpXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA+IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudEN1cyA9IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFycldhaXRpbmcgPSBbXVxyXG4gICAgZG9DdXModGFnLCBjdXMpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwIDw9IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzKHRhZylcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEljb25QdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJySWNvblB0WzBdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJJY29uUHRbMV0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckljb25QdFsxXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJJY29uUHRbMl0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckljb25QdFsyXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0YWcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJDcnVuY2hbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1c1RvQ3J1bmNoKGN1cywgaSwgdGFnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YWcgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyck1heURheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJNYXlEYXlbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1c1RvTWF5RGF5KGN1cywgaSwgdGFnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YWcgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzVG9Cb3hpbmcoY3VzLCAwLCB0YWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGxlYXZlUXVldWUoY3VzKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXMpXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5hcnJDdXMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBxdWV1ZUN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmdldFF1ZXVlUG9zKGkpXHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gcXVldWVDdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgICAgIGxldCBhbmltID0gcXVldWVDdXMuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICBjdXNDb21wLmlzUXVldWVNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0luTFwiLCB0cnVlKVxyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQocXVldWVDdXMpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHF1ZXVlQ3VzKS50bygwLjgsIHsgcG9zaXRpb246IHBvc0VuZCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXVlQ3VzLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgICAgIGlmIChjdXNDb21wLmlzQW5ncnlXYWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzQ29tcC50dWNHaWFuKClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXNDb21wLnNob3dRdWV1ZVBvcCgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3ZlQ3VzVG9DcnVuY2goY3VzLCB2YWx1ZSwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5sZWF2ZVF1ZXVlKGN1cylcclxuICAgICAgICBsZXQgY3J1bmNoID0gdGhpcy5hcnJDcnVuY2hbdmFsdWVdO1xyXG4gICAgICAgIGN1cy5wYXJlbnQgPSBjcnVuY2g7XHJcbiAgICAgICAgY3VzLnBvc2l0aW9uID0gdGhpcy5wb3NHYXBCdW5nO1xyXG4gICAgICAgIGN1cy5uYW1lID0gXCJjaGFyXCJcclxuICAgICAgICBjdXMuY2hpbGRyZW5bMF0uc2NhbGUgPSAxXHJcbiAgICAgICAgY3VzLnNjYWxlID0gMVxyXG4gICAgICAgIGN1cy5zY2FsZVggPSAxXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcblxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50TmFtZSA9IFwiQ3J1bmNoXCJcclxuICAgICAgICBjdXNDb21wLnBhcmVudEluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROb2RlID0gY3J1bmNoXHJcblxyXG4gICAgICAgIHRoaXMuYXJyV2FpdGluZy5wdXNoKGN1cylcclxuICAgICAgICBjdXNDb21wLndhaXRpbmdUYWcodGFnKVxyXG4gICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuXHJcbiAgICB9XHJcbiAgICBtb3ZlQ3VzVG9NYXlEYXkoY3VzLCB2YWx1ZSwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5sZWF2ZVF1ZXVlKGN1cylcclxuICAgICAgICBsZXQgbWF5ID0gdGhpcy5hcnJNYXlEYXlbdmFsdWVdXHJcbiAgICAgICAgY3VzLnBhcmVudCA9IG1heTtcclxuICAgICAgICBjdXMucG9zaXRpb24gPSB0aGlzLnBvc05hbmdUYTtcclxuICAgICAgICBjdXMubmFtZSA9IFwiY2hhclwiXHJcbiAgICAgICAgY3VzLmNoaWxkcmVuWzBdLnNjYWxlID0gMTtcclxuICAgICAgICBjdXMuc2NhbGUgPSAxXHJcbiAgICAgICAgY3VzLnNjYWxlWCA9IDFcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBtYXkuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS56SW5kZXg9MVxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50TmFtZSA9IFwiTWF5RGF5XCJcclxuICAgICAgICBjdXNDb21wLnBhcmVudEluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROb2RlID0gbWF5XHJcblxyXG4gICAgICAgIHRoaXMuYXJyV2FpdGluZy5wdXNoKGN1cylcclxuICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLndhaXRpbmdUYWcodGFnKVxyXG4gICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgIH1cclxuICAgIG1vdmVDdXNUb0JveGluZyhjdXMsIHZhbHVlLCB0YWcpIHtcclxuICAgICAgICB0aGlzLmxlYXZlUXVldWUoY3VzKVxyXG4gICAgICAgIGN1cy5wYXJlbnQgPSB0aGlzLmJveGluZzFcclxuICAgICAgICBjdXMucG9zaXRpb24gPSBjYy52MygxMjMsIDIzKTtcclxuICAgICAgICBjdXMubmFtZSA9IFwiY2hhclwiXHJcbiAgICAgICAgY3VzLmNoaWxkcmVuWzBdLnNjYWxlID0gMTtcclxuICAgICAgICBjdXMuc2NhbGUgPSAxXHJcbiAgICAgICAgY3VzLnNjYWxlWCA9IDFcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROYW1lID0gXCJCb3hpbmdcIlxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50SW5kZXggPSB2YWx1ZTtcclxuICAgICAgICBjdXNDb21wLnBhcmVudE5vZGUgPSB0aGlzLmJveGluZzFcclxuICAgICAgICB0aGlzLmFycldhaXRpbmcucHVzaChjdXMpXHJcbiAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS53YWl0aW5nVGFnKHRhZylcclxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICB9XHJcbiAgICBvZmZJY29uUHQobm9kZSkge1xyXG4gICAgICAgIG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgb25JY29uUHQobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpc0ljb25QdEZyZWUobm9kZSkge1xyXG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5hY3RpdmUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYgKGJ0biAmJiAhYnRuLmVuYWJsZWQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIC8vIGNoaWxkcmVuWzFdID0gYnVzeSBvdmVybGF5XHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5bMV0gJiYgbm9kZS5jaGlsZHJlblsxXS5hY3RpdmUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBoYXNGcmVlTWFjaGluZUZvclRhZyh0YWcpIHtcclxuICAgICAgICBpZiAodGFnID09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyckNydW5jaFtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YWcgPT0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWF5RGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXJyTWF5RGF5W2ldLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSkgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhZyA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5ib3hpbmcxLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNhbkNsaWNrUXVldWVDdXMoY3VzKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgY3VzQ29tcC5pc1F1ZXVlTW92aW5nKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgcG9wID0gY3VzLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICAgICAgaWYgKCFwb3AgfHwgIXBvcC5hY3RpdmUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBidG4gPSBwb3AuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICBpZiAoYnRuICYmICFidG4uZW5hYmxlZCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwIDwgNCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzRnJlZU1hY2hpbmVGb3JUYWcoY3VzQ29tcC50YWcpXHJcbiAgICB9XHJcbiAgICBoYXNDdXNXYWl0aW5nRm9yUHQoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwV2FpdGluZygpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycldhaXRpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDdXNXYWl0aW5nRm9yUHQodGhpcy5hcnJXYWl0aW5nW2ldKSkgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjYW5DbGlja0ljb25QdChub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJY29uUHRGcmVlKG5vZGUpICYmIHRoaXMuaGFzQ3VzV2FpdGluZ0ZvclB0KClcclxuICAgIH1cclxuICAgIGhpZGVBbGxJY29uUHRIYW5kcygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJySWNvblB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kID0gdGhpcy5hcnJJY29uUHRbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd0ZyZWVJY29uUHRIYW5kKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUFsbEljb25QdEhhbmRzKClcclxuICAgICAgICB0aGlzLmhpZGVBbGxRdWV1ZUhhbmRzKClcclxuICAgICAgICBpZiAoIXRoaXMuaGFzQ3VzV2FpdGluZ0ZvclB0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5ndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckljb25QdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMuYXJySWNvblB0W2ldXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkNsaWNrSWNvblB0KGljb24pKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZCA9IGljb24uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZCkgaGFuZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgIH1cclxuICAgIGhpZGVBbGxRdWV1ZUhhbmRzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIGlmICghY3VzIHx8ICFjdXMuaXNWYWxpZCkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IHBvcCA9IGN1cy5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICBpZiAoIXBvcCkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IGhhbmQgPSBwb3AuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlUXVldWVIYW5kKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUFsbFF1ZXVlSGFuZHMoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA8IDQpIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLmd1aWRpbmdJY29uUHQpIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLmhpZGVRdWV1ZUhhbmRHdWlkZSkgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrUXVldWVDdXMoY3VzKSkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IGhhbmQgPSBjdXMuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xpY2tQdChldmVudCwgdGFnKSB7XHJcbiAgICAgICAgbGV0IHB0ID0gbnVsbDtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGJ0bi5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50ZXh0R3VpbGQxKS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHB0ID0gdGhpcy5saXN0UHQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMlxyXG4gICAgICAgICAgICBsZXQgZm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdC5nZXRDb21wb25lbnQoXCJwdFwiKS5tb3ZlSW4oZm5jKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzFdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIocHQpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9vcl9vcGVuXCIpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvb3JfY2xvc2VcIilcclxuXHJcbiAgICAgICAgICAgIH0sIDAuNylcclxuICAgICAgICAgICAgdGhpcy5vZmZJY29uUHQodGhpcy5hcnJJY29uUHRbMF0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHB0ID0gdGhpcy5saXN0UHQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gM1xyXG4gICAgICAgICAgICBwdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9vcl9vcGVuXCIpXHJcbiAgICAgICAgICAgIGxldCBmbmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUN1cygxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB0LmdldENvbXBvbmVudChcInB0XCIpLm1vdmVJbihmbmMpXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKHB0KVxyXG4gICAgICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9vcl9jbG9zZVwiKVxyXG5cclxuICAgICAgICAgICAgfSwgMC43KVxyXG4gICAgICAgICAgICB0aGlzLm9mZkljb25QdCh0aGlzLmFyckljb25QdFsxXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMykge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBwdCA9IHRoaXMubGlzdFB0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDRcclxuICAgICAgICAgICAgcHQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvb3Jfb3BlblwiKVxyXG5cclxuICAgICAgICAgICAgbGV0IGZuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ3VzKDIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHQuZ2V0Q29tcG9uZW50KFwicHRcIikubW92ZUluKGZuYylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIocHQpXHJcbiAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJkb29yX2Nsb3NlXCIpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjcpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmSWNvblB0KHRoaXMuYXJySWNvblB0WzJdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwV2FpdGluZygpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJXYWl0aW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJXYWl0aW5nW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ3VzV2FpdGluZ0ZvclB0KGN1cykpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWRkUHQoY3VzLCBjdXNDb21wLnBhcmVudE5hbWUsIGV2ZW50LmN1cnJlbnRUYXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYW51cFdhaXRpbmcoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuYXJyV2FpdGluZy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDdXNPbk1hY2hpbmUodGhpcy5hcnJXYWl0aW5nW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNDdXNPbk1hY2hpbmUoY3VzKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgIWN1c0NvbXAucGFyZW50Tm9kZSB8fCAhY3VzQ29tcC5wYXJlbnROb2RlLmlzVmFsaWQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmIChjdXMucGFyZW50ICE9PSBjdXNDb21wLnBhcmVudE5vZGUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmIChjdXMubmFtZSAhPT0gXCJjaGFyXCIpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpc0N1c1dhaXRpbmdGb3JQdChjdXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDdXNPbk1hY2hpbmUoY3VzKSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuaXNQdCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNYWNoaW5lUHRCdXN5KGN1c0NvbXAucGFyZW50TmFtZSwgY3VzQ29tcC5wYXJlbnRJbmRleCkpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZW1vdmVGcm9tV2FpdGluZyhjdXMpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmFycldhaXRpbmcuaW5kZXhPZihjdXMpXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFycldhaXRpbmcuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1hY2hpbmVLZXkocGFyZW50TmFtZSwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gcGFyZW50TmFtZSArIFwiX1wiICsgaW5kZXhcclxuICAgIH1cclxuICAgIGlzTWFjaGluZVB0QnVzeShwYXJlbnROYW1lLCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMucHRCdXN5TWFjaGluZXNbdGhpcy5nZXRNYWNoaW5lS2V5KHBhcmVudE5hbWUsIGluZGV4KV1cclxuICAgIH1cclxuICAgIHNldE1hY2hpbmVQdEJ1c3kocGFyZW50TmFtZSwgaW5kZXgsIGJ1c3kpIHtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5nZXRNYWNoaW5lS2V5KHBhcmVudE5hbWUsIGluZGV4KVxyXG4gICAgICAgIGlmIChidXN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHRCdXN5TWFjaGluZXNba2V5XSA9IHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wdEJ1c3lNYWNoaW5lc1trZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVsZWFzZU1hY2hpbmVQdChwYXJlbnROYW1lLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2V0TWFjaGluZVB0QnVzeShwYXJlbnROYW1lLCBpbmRleCwgZmFsc2UpXHJcbiAgICB9XHJcbiAgICBnZXRQdFRhZyhwYXJlbnROYW1lLCBwYXJlbnRJbmRleCkge1xyXG4gICAgICAgIHN3aXRjaCAocGFyZW50TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ3J1bmNoXCI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gMFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIDRcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiA1XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gNlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJNYXlEYXlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRJbmRleCA9PT0gMCA/IDEgOiAzXHJcbiAgICAgICAgICAgIGNhc2UgXCJCb3hpbmdcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvdW50cHQgPSAwXHJcbiAgICBvcGVuRG9vcigpIHtcclxuICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvb3Jfb3BlblwiKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9vcl9jbG9zZVwiKVxyXG5cclxuICAgICAgICB9LCAwLjcpXHJcbiAgICB9XHJcbiAgICBhZGRQdChjdXMsIHBhcmVudE5hbWUsIGJ0bikge1xyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDdXNXYWl0aW5nRm9yUHQoY3VzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVuRG9vcigpO1xyXG4gICAgICAgIGN1c0NvbXAuaXNQdCA9IHRydWVcclxuICAgICAgICB0aGlzLnNldE1hY2hpbmVQdEJ1c3kocGFyZW50TmFtZSwgY3VzQ29tcC5wYXJlbnRJbmRleCwgdHJ1ZSlcclxuICAgICAgICBsZXQgcHQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVQdFt0aGlzLmNvdW50cHRdKTtcclxuICAgICAgICBwdC5wYXJlbnQgPSB0aGlzLmxpc3RQdDtcclxuICAgICAgICBwdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgcHQucG9zaXRpb24gPSBjYy52MygzODIuNjA3LCAxMjEpXHJcbiAgICAgICAgbGV0IHB0Q29tcCA9IHB0LmdldENvbXBvbmVudChcInB0XCIpO1xyXG4gICAgICAgIHB0Q29tcC5idG4gPSBidG5cclxuICAgICAgICBwdENvbXAubWFjaGluZVBhcmVudE5hbWUgPSBwYXJlbnROYW1lXHJcbiAgICAgICAgcHRDb21wLm1hY2hpbmVJbmRleCA9IGN1c0NvbXAucGFyZW50SW5kZXhcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudHB0Kys7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKHB0KVxyXG5cclxuICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRwdCA+IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudHB0ID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGFnID0gdGhpcy5nZXRQdFRhZyhwYXJlbnROYW1lLCBjdXNDb21wLnBhcmVudEluZGV4KVxyXG4gICAgICAgIHB0Q29tcC50YWcgPSBOdW1iZXIodGFnKVxyXG4gICAgICAgIGxldCB0YXJnZXRDdXMgPSBjdXNcclxuICAgICAgICBsZXQgZm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUN1cyhOdW1iZXIodGFnKSwgdGFyZ2V0Q3VzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBwdENvbXAubW92ZUluKGZuYylcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaXNDb3VudEFjdGlvbiA9IDBcclxuICAgIGFjdGl2ZUN1cyh2YWx1ZSwgY3VzID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBjaGFyID0gY3VzICYmIHRoaXMuaXNDdXNPbk1hY2hpbmUoY3VzKSA/IGN1cyA6IG51bGxcclxuICAgICAgICBpZiAoIWNoYXIpIHtcclxuICAgICAgICAgICAgY2hhciA9IHRoaXMuZ2V0Q2hhckJ5UHRUYWcodmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2hhcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJhY3RpdmVDdXM6IG1pc3NpbmcgY2hhciBmb3IgdGFnXCIsIHZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tV2FpdGluZyhjaGFyKVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoY3VzQ29tcCkge1xyXG4gICAgICAgICAgICBjdXNDb21wLmlzUHQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoMSwgLTE2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzBdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lWzBdLCA0KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5kYXlUYSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRheVRhMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKC0xNS43NzEgKyAxNCwgNyAtIDUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lQ3J1bmNoWzBdLCA2KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJveGluZzEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5ib3hpbmcoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveGluZzEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCBjYy52Myg2NDcsIC02NiksIDYpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGxldCBtYXlEYXkyID0gdGhpcy5hcnJNYXlEYXlbMV1cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmRheVRhKClcclxuICAgICAgICAgICAgICAgIG1heURheTIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIG1heURheTIuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKC0xNS43NzEgKyAxNCwgNyAtIDUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF5RGF5Mi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBtYXlEYXkyLmdldENoaWxkQnlOYW1lKFwiRzFfQWJDcnVuY2hcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZUNydW5jaFsxXSwgNilcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoMSwgLTE2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzFdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lWzFdLCA0KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5nYXBCdW5nKClcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygxLCAtMTYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFsyXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMl0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCB0aGlzLmFyclBvc0RvbmVbMl0sIDQpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzNdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFszXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZVszXSwgNClcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIGdldENoYXJCeVB0VGFnKHZhbHVlKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiB0aGlzLmFyckNydW5jaFswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIHRoaXMuYm94aW5nMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gdGhpcy5hcnJNYXlEYXlbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIHRoaXMuYXJyQ3J1bmNoWzFdLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjYXNlIDU6IHJldHVybiB0aGlzLmFyckNydW5jaFsyXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gdGhpcy5hcnJDcnVuY2hbM10uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmluaXNoQ3VzV29ya291dChjaGFyLCBwb3NEb25lLCBjb2luKSB7XHJcbiAgICAgICAgaWYgKCFjaGFyIHx8ICFjaGFyLmlzVmFsaWQpIHJldHVyblxyXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbVdhaXRpbmcoY2hhcilcclxuICAgICAgICBsZXQgZG9uZVBvcyA9IHRoaXMudG9Tb3J0TGF5ZXJQb3ModGhpcy5ub2RlLCBwb3NEb25lKVxyXG4gICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIoY2hhcilcclxuICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgY2hhci5wb3NpdGlvbiA9IGRvbmVQb3NcclxuICAgICAgICBjaGFyLnNjYWxlID0gMC44XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2luKGNoYXIsIGNvaW4pXHJcbiAgICAgICAgY2MudHdlZW4oY2hhcikuZGVsYXkoMSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGlmICghdGhpcy5ndWlkaW5nSWNvblB0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lU3RhcnRlZCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0dhbWVTdGFydGVkID0gdHJ1ZVxyXG5cclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFyckljb25QdCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uSWNvblB0KGNoaWxkKVxyXG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFycldhaXRpbmcgPSBbXVxyXG4gICAgICAgIHRoaXMucHRCdXN5TWFjaGluZXMgPSB7fVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNwYXdDdXN0b21lcilcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5hcnJDdXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIGlmIChjdXMgJiYgY3VzLmlzVmFsaWQpIGN1cy5kZXN0cm95KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5baV0uZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXJyQ3VzID0gW11cclxuICAgICAgICB0aGlzLnNwYXdDdXN0b21lcigpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zcGF3Q3VzdG9tZXIsIDQpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRHdWlsZDIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5hcnJDdXMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3Q3VzdG9tZXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICB9LCAxNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudGV4dEd1aWxkMikudG8oMC44LCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy56b29tR2FtZSgpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RhcnRHYW1lKClcclxuICAgICAgICB9LCAyMilcclxuXHJcbiAgICB9XHJcbiAgICB6b29tR2FtZSgpe1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjgsIHsgem9vbVJhdGlvOiAyIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKC00OTQsIC0yOTYpIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmhpZGVRdWV1ZUhhbmRHdWlkZSA9IHRydWVcclxuICAgICAgICB0aGlzLmhpZGVBbGxRdWV1ZUhhbmRzKClcclxuICAgICAgICB3aGlsZSAodGhpcy5hcnJDdXMubGVuZ3RoIDwgNSAmJiB0aGlzLmFyckN1cy5sZW5ndGggPCB0aGlzLmFyclBvc0N1cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGF3Q3VzdG9tZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICBpZiAoIWN1cyB8fCAhY3VzLmlzVmFsaWQpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgICAgICBpZiAoIWN1c0NvbXApIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGN1c0NvbXAuaXNBbmdyeVdhaXQgPSB0cnVlXHJcbiAgICAgICAgICAgIGlmICghY3VzQ29tcC5pc1F1ZXVlTW92aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjdXNDb21wLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICBcclxuICAgIH1cclxuICAgIGNyZWF0ZUNvaW4obm9kZSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBsZXQgY29pbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XHJcbiAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY29pbi5wb3NpdGlvbiA9IHBvcy5hZGQoY2MudjMoMCwgNTApKVxyXG4gICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSB2YWx1ZVxyXG4gICAgfVxyXG4gICAgbW92ZUN1cyh2YWx1ZSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5hcnJDcnVuY2hbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1sxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjaGFyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDJcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbM10uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0NvdW50QWN0aW9uKys7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudEFjdGlvbiA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhbWUxKClcclxuXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNIaW5kID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIG9uSGluZCgpIHtcclxuICAgIC8vICAgICBsZXQgaW5kZXggPSAxO1xyXG5cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgLy8gdOG6r3QgdOG6pXQgY+G6oyB0csaw4bubY1xyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgcG9wID0gdGhpcy5hcnJDdXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIik7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAvLyAgICAgICAgICAgICBoYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAvLyBi4bqtdCBjw6FpIGhp4buHbiB04bqhaVxyXG4gICAgLy8gICAgICAgICBsZXQgcG9wID0gdGhpcy5hcnJDdXNbaW5kZXhdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpO1xyXG4gICAgLy8gICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAvLyAgICAgICAgIGhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgICAgIGluZGV4Kys7XHJcbiAgICAvLyAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLmFyckN1cy5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIGluZGV4ID0gMTsgLy8gcXVheSBs4bqhaSB04burIMSR4bqndVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSwgMC41KTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlzQ3VzID0gMFxyXG4gICAgLy8gbW92ZUNhbWUxKCkge1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAyLjMgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMjAwLCAtNTUwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgfSwgMC41KVxyXG4gICAgLy8gICAgIHRoaXMuaXNDdXMgPSAwXHJcbiAgICAvLyB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0NvdW50U3RlcCA9IDBcclxuICAgIC8vIGJ0bl91cGdyYWRlKCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbmZpcm0sIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIHRoaXMuaXNDb3VudFN0ZXArK1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzQ291bnRTdGVwIDwgNSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gdGhpcy5pc0NvdW50U3RlcCAqIDAuMjVcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5saXN0RS5jaGlsZHJlblt0aGlzLmlzQ291bnRTdGVwIC0gMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IGJ0biA9IHRoaXMuZ3VpbGRVcGdyYWRlLmNoaWxkcmVuWzJdLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uXCIpXHJcbiAgICAvLyAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgYnRuLnBvc2l0aW9uID0gY2MudjMoNjAgKiB0aGlzLmlzQ291bnRTdGVwLCAtMTcuOTMpXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNDdXMgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hhciA9IHRoaXMubGlzdENydW5jaC5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTY3LCAtNTApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubW92ZTQoKVxyXG4gICAgLy8gICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDIwMFxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5waGFvaG9hLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoYXIpLnRvKDAuMywgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9LCAxKVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2UgaWYgKHRoaXMuaXNDdXMgPT0gMSkge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hhciA9IHRoaXMuYm94aW5nMS5jaGlsZHJlblswXVxyXG5cclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyMDBcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pbjJcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmhhcHB5KClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5tb3ZlNCgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICAgICAgfSwgMSlcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuaXNDb3VudFN0ZXAgPT0gNCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5pc0N1cyA9PSAyKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGFyID0gdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdXHJcbiAgICAvLyAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgLy8gICAgICAgICAvLyBpZiAodGhpcy5pc0NvdW50U3RlcCA9PSAyKSB7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgLy8gfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIG9uRW5kZ2FtZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gbW92ZTIoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBzY2FsZTogMSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5nYW1lKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0N1cyA9IDFcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0NvdW50U3RlcCA9IDBcclxuICAgIC8vICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDBcclxuXHJcbiAgICAvLyAgICAgfSwgMSlcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubW92ZTMoKVxyXG4gICAgLy8gICAgIH0sIDEuNylcclxuICAgIC8vIH1cclxuICAgIC8vIG1vdmUzKCkge1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAyLjcgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTE5NzMsIC0xMjApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICB9LCAwLjUpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlNCgpIHtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ3VzID0gMlxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnRTdGVwID0gMFxyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMFxyXG4gICAgLy8gICAgIH0sIDEpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm1vdmU1KClcclxuICAgIC8vICAgICB9LCAxLjcpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlNSgpIHtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDEsIHsgc2NhbGU6IDEuNyB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMTEwMCwgMTAwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgLy8gbGV0IHRleHQgPSB0aGlzLmd1aWxkVXBncmFkZS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKVxyXG4gICAgLy8gICAgIC8vIHRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIkxhc3Qgb25lISBGaW5pc2ggc3Ryb25nIVwiXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmd1aWxkVXBncmFkZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgIH0sIDAuNSlcclxuICAgIC8vIH1cclxuICAgIC8vIGRlbTEgPSAwO1xyXG4gICAgLy8gZGVtMiA9IDBcclxuICAgIC8vIGJ0bl91cGdyYWRlMihldmVudCwgdmFsdWUpIHtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb25maXJtLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICBpZiAodmFsdWUgPT0gXCIxXCIpIHtcclxuICAgIC8vICAgICAgICAgbGV0IGZpbGwgPSB0aGlzLmd1aWxkVXBncmFkZTIuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1RyYWluMlwiKS5jaGlsZHJlblsxXVxyXG4gICAgLy8gICAgICAgICBsZXQgYnRuID0gdGhpcy5ndWlsZFVwZ3JhZGUyLmdldENoaWxkQnlOYW1lKFwiYmdUcmFpbjJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIilcclxuICAgIC8vICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmRheVRhMS5jaGlsZHJlblswXVxyXG4gICAgLy8gICAgICAgICBjaGFyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZGVtMSsrXHJcbiAgICAvLyAgICAgICAgIGZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy5kZW0xICogMC4yXHJcbiAgICAvLyAgICAgICAgIGJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICBidG4ucG9zaXRpb24gPSBjYy52Myg1MCAqIHRoaXMuZGVtMSwgLTE3LjkzKVxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5kZW0xID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTgxLCAtNDUpXHJcbiAgICAvLyAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBsZXQgZmlsbCA9IHRoaXMuZ3VpbGRVcGdyYWRlMi5nZXRDaGlsZEJ5TmFtZShcImJnVHJhaW5cIikuY2hpbGRyZW5bMV1cclxuICAgIC8vICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF1cclxuICAgIC8vICAgICAgICAgbGV0IGJ0biA9IHRoaXMuZ3VpbGRVcGdyYWRlMi5nZXRDaGlsZEJ5TmFtZShcImJnVHJhaW5cIikuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIilcclxuXHJcbiAgICAvLyAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwidmZ4XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5kZW0yKytcclxuICAgIC8vICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIGJ0bi5wb3NpdGlvbiA9IGNjLnYzKDUwICogdGhpcy5kZW0yLCAtMTcuOTMpXHJcbiAgICAvLyAgICAgICAgIGZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy5kZW0yICogMC4yXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmRlbTIgPT0gNSkge1xyXG4gICAgLy8gICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAvLyAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBpZiAodGhpcy5kZW0xID09IDUgJiYgdGhpcy5kZW0yID09IDUpIHtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5ndWlsZFVwZ3JhZGUyKS50bygwLjI2LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZTIuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm1vdmUyKClcclxuICAgIC8vICAgICAgICAgfSwgMC44KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMVxyXG5cclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5zY2FsZSA9IChsb2dpYykgPyAyLjQgOiAxXHJcbiAgICAgICAgdGhpcy5ndWlsZFVwZ3JhZGUyLnNjYWxlID0gKGxvZ2ljKSA/IDEuNiA6IDFcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgdGhpcy5sYkNvaW4uc3RyaW5nID0gZ2xvYmFsVGhpcy5nb2xkLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLm5wYy5zY2FsZSA9IChsb2dpYykgPyAxLjcgOiAxXHJcbiAgICAgICAgdGhpcy5ucGMyLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICB0aGlzLm5wYy55ID0gKGxvZ2ljKSA/IC03MDAgOiAwXHJcbiAgICAgICAgdGhpcy5ucGMyLnkgPSAobG9naWMpID8gLTcwMCA6IDBcclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMS41IDogMC43XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDEuNSA6IDFcclxuICAgICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAobG9naWMpID8gMS41IDogMTtcclxuICAgICAgICB0aGlzLmNvaW5CYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNzc7XHJcbiAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDQ4XHJcbiAgICAgICAgLy8gdGhpcy5iYXJDb2luLnk9KGxvZ2ljKT80MDA6NDcwXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTcwLCAwKVxyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS43XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygxNTAsIDApXHJcbiAgICAgICAgICAgIHRoaXMucGhhb2hvYS5zY2FsZSA9IChsb2dpYykgPyA3IDogM1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrIGlwaG9uZXhcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuY29pbkJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA3NyArIDMwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDQ4ICsgMzBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjRcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLnNjYWxlID0gMS44XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19