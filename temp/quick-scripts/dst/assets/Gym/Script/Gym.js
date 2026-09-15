
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
var AutoCard;
(function (AutoCard) {
    AutoCard[AutoCard["Speed"] = 0] = "Speed";
    AutoCard[AutoCard["Time"] = 1] = "Time";
})(AutoCard || (AutoCard = {}));
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.cameraDoc = null;
        // @property(cc.Node)
        // npc: cc.Node = null
        // @property(cc.Node)
        // npc2: cc.Node = null
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
        _this.soundTime = null;
        _this.soundDoor = null;
        _this.game = null;
        _this.guildUpgrade = null;
        _this.guildUpgrade2 = null;
        _this.phaohoa = null;
        _this.linkToStore = null;
        _this.lbCoin = null;
        _this.dayTa1 = null;
        _this.fillBar = null;
        _this.endCard = null;
        _this.endCardDoc = null;
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
        _this.listCard = null;
        _this.noti = null;
        _this.guildTime1 = null;
        _this.timeBar = null;
        _this.isAutoPlay = true;
        _this.autoCard = AutoCard.Time;
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
        _this.isEndgame = false;
        _this.ptSpeed = 1;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.posGapBung = cc.v3(-30, -19);
        _this.posNangTa = cc.v3(-50, -42);
        _this.idSoundTime = null;
        _this.idSoundBG = null;
        _this.sfxIds = [];
        _this.autoPlayPhase = 0;
        _this.autoPlayWait = 0;
        _this.didAutoPickCard = false;
        _this.isWaitingCard = false;
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
        this.idSoundBG = cc.audioEngine.play(this.soundBG, true, 0.5);
        this.scheduleOnce(function () {
            for (var i = 0; i < Math.min(3, _this.arrCus.length); i++) {
                var child = _this.arrCus[i];
                if (child && child.isValid) {
                    var pop = child.getChildByName("pop");
                    if (pop)
                        pop.active = true;
                    var cusComp = child.getComponent("cusGym");
                    if (cusComp) {
                        cusComp.popShown = true;
                        cusComp.isPopReady = true;
                    }
                }
            }
        }, 0.6);
        this.idSoundTime = this.playSfx(this.soundTime, true, 0.5);
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
        this.scheduleOnce(function () {
            _this.offGuild();
        }, 1);
        if (this.isAutoPlay) {
            this.scheduleOnce(function () {
                _this.startAutoPlay();
            }, 1.5);
        }
    };
    NewClass.prototype.offGuild = function () {
        var _this = this;
        cc.audioEngine.stop(this.idSoundTime);
        cc.tween(this.guildTime1.children[0]).to(0.3, { opacity: 0 }).start();
        cc.tween(this.guildTime1.children[1]).to(0.3, { scale: 0 }).start();
        this.scheduleOnce(function () {
            _this.timeBar.active = true;
            // this.textGuild1.active = true
        }, 0.3);
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
    // Prefab cus mặc định quay trái khi scaleX = 1
    NewClass.prototype.faceCusByDir = function (cus, fromPos, toPos) {
        if (!cus || Math.abs(toPos.x - fromPos.x) < 0.1)
            return;
        cus.scaleX = toPos.x < fromPos.x ? 1 : -1;
    };
    NewClass.prototype.spawCustomer = function () {
        var _this = this;
        if (this.arrCus.length >= this.arrPosCus.length)
            return;
        var queueIndex = this.arrCus.length;
        var posEnd = this.getQueuePos(queueIndex);
        var cus = cc.instantiate(this.listPreCus[this.countCus]);
        var spawnParent = this.listCusNode || this.node;
        var startPos = this.toSortLayerPos(spawnParent, cc.v3(-1051, -600));
        var midPos = this.toSortLayerPos(spawnParent, cc.v3(-675, -435));
        this.attachToSortLayer(cus);
        this.arrCus.push(cus);
        var cusComp = cus.getComponent("cusGym");
        cusComp.isSpawned = true;
        cusComp.isQueueMoving = true;
        cus.position = startPos;
        // Prefab quay trái (scaleX=1) → đi sang phải cần scaleX=-1
        this.faceCusByDir(cus, startPos, midPos);
        var anim = cus.children[0].getComponent(sp.Skeleton);
        anim.setAnimation(0, "WalkInL", true);
        cc.Tween.stopAllByTarget(cus);
        cc.tween(cus).to(1, { position: midPos }).call(function () {
            _this.faceCusByDir(cus, midPos, posEnd);
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
        this.playSfx(this.soundClick, false, 1);
        if (this.isStep <= 3) {
            this.moveCus(tag);
            if (this.isStep == 0) {
                this.isStep = 1;
                this.listIconPt.active = true;
                this.scheduleOnce(function () {
                    if (!_this.isAutoPlay)
                        _this.arrIconPt[0].getChildByName("hand").active = true;
                }, 0.3);
            }
            else if (this.isStep == 2) {
                this.arrIconPt[1].getComponent(cc.Button).enabled = true;
                if (!this.isAutoPlay)
                    this.arrIconPt[1].getChildByName("hand").active = true;
            }
            else if (this.isStep == 3) {
                this.arrIconPt[2].getComponent(cc.Button).enabled = true;
                if (!this.isAutoPlay)
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
            this_1.faceCusByDir(queueCus, queueCus.position, posEnd);
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
        this.hideCusPop(cus);
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
        this.hideCusPop(cus);
        this.leaveQueue(cus);
        var may = this.arrMayDay[value];
        cus.parent = may;
        cus.position = this.posNangTa;
        cus.name = "char";
        cus.children[0].scale = 1;
        cus.scale = 1;
        cus.scaleX = 1;
        var cusComp = cus.getComponent("cusGym");
        may.getChildByName("G1_AbCrunch").zIndex = cus.zIndex + 1;
        cusComp.parentName = "MayDay";
        cusComp.parentIndex = value;
        cusComp.parentNode = may;
        this.arrWaiting.push(cus);
        cus.getComponent("cusGym").waitingTag(tag);
        this.updateQueueHand();
    };
    NewClass.prototype.moveCusToBoxing = function (cus, value, tag) {
        this.hideCusPop(cus);
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
        if (!cusComp || cusComp.isQueueMoving || !cusComp.isPopReady)
            return false;
        var pop = this.getCusPop(cus);
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
        if (this.isAutoPlay) {
            this.guidingIconPt = false;
            return;
        }
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
    NewClass.prototype.getCusPop = function (cus) {
        if (!cus || !cus.isValid)
            return null;
        var cusComp = cus.getComponent("cusGym");
        if (cusComp && cusComp.pop)
            return cusComp.pop;
        return cus.getChildByName("pop");
    };
    NewClass.prototype.hideCusPop = function (cus) {
        if (!cus || !cus.isValid)
            return;
        var cusComp = cus.getComponent("cusGym");
        if (cusComp) {
            cusComp.clearPopState();
            cusComp.resetPopLayer();
        }
        var pop = this.getCusPop(cus);
        if (!pop || !pop.isValid)
            return;
        cc.Tween.stopAllByTarget(pop);
        var hand = pop.getChildByName("hand");
        if (hand)
            hand.active = false;
        pop.scale = 0;
        pop.active = false;
    };
    NewClass.prototype.hideAllQueueHands = function () {
        for (var i = 0; i < this.arrCus.length; i++) {
            var cus = this.arrCus[i];
            if (!cus || !cus.isValid)
                continue;
            var cusComp = cus.getComponent("cusGym");
            if (cusComp)
                cusComp.resetPopLayer();
            var pop = this.getCusPop(cus);
            if (!pop)
                continue;
            var hand = pop.getChildByName("hand");
            if (hand)
                hand.active = false;
        }
        this.resetQueueCusDepth();
    };
    NewClass.prototype.resetQueueCusDepth = function () {
        for (var i = 0; i < this.arrCus.length; i++) {
            var cus = this.arrCus[i];
            if (cus && cus.isValid)
                this.setDepthByY(cus);
        }
    };
    NewClass.prototype.bringCusPopToFront = function (cus) {
        if (!cus || !cus.isValid)
            return;
        var cusComp = cus.getComponent("cusGym");
        if (!cusComp || !cusComp.isSpawned)
            return;
        cusComp.liftPop();
    };
    NewClass.prototype.updateQueueHand = function () {
        this.hideAllQueueHands();
        if (this.isStep < 4)
            return;
        if (this.guidingIconPt)
            return;
        if (this.hideQueueHandGuide || this.isAutoPlay)
            return;
        for (var i = 0; i < this.arrCus.length; i++) {
            var cus = this.arrCus[i];
            if (!this.canClickQueueCus(cus))
                continue;
            var pop = this.getCusPop(cus);
            if (!pop)
                continue;
            var hand = pop.getChildByName("hand");
            if (hand)
                hand.active = true;
            this.bringCusPopToFront(cus);
            return;
        }
    };
    NewClass.prototype.clickPt = function (event, tag) {
        var _this = this;
        var pt = null;
        this.playSfx(this.soundClick, false, 1);
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
                _this.arrCus[1].getChildByName("pop").getComponent(cc.Button).enabled = true;
                if (!_this.isAutoPlay) {
                    _this.arrCus[1].getChildByName("pop").getChildByName("hand").active = true;
                    _this.bringCusPopToFront(_this.arrCus[1]);
                }
            }, 1);
            this.scheduleOnce(function () {
                _this.attachToSortLayer(pt);
            }, 0.3);
            this.openDoor();
            this.offIconPt(this.arrIconPt[0]);
        }
        else if (this.isStep == 2) {
            var btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false;
            pt = this.listPt.children[0];
            this.isStep = 3;
            pt.active = true;
            this.openDoor();
            var fnc = function () {
                _this.activeCus(1);
            };
            pt.getComponent("pt").moveIn(fnc);
            this.scheduleOnce(function () {
                _this.arrCus[2].getChildByName("pop").getComponent(cc.Button).enabled = true;
                if (!_this.isAutoPlay) {
                    _this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true;
                    _this.bringCusPopToFront(_this.arrCus[2]);
                }
            }, 1);
            this.scheduleOnce(function () {
                _this.attachToSortLayer(pt);
            }, 0.2);
            this.offIconPt(this.arrIconPt[1]);
        }
        else if (this.isStep == 3) {
            var btn = event.currentTarget.getComponent(cc.Button);
            btn.enabled = false;
            pt = this.listPt.children[0];
            this.isStep = 4;
            pt.active = true;
            this.openDoor();
            var fnc = function () {
                _this.activeCus(2);
            };
            pt.getComponent("pt").moveIn(fnc);
            this.scheduleOnce(function () {
                if (!_this.isAutoPlay) {
                    _this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true;
                    _this.bringCusPopToFront(_this.arrCus[2]);
                }
            }, 1);
            this.scheduleOnce(function () {
                _this.attachToSortLayer(pt);
            }, 0.2);
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
    NewClass.prototype.playDoorAnim = function (animName) {
        if (this.door) {
            this.door.getComponent(cc.Animation).play(animName);
        }
        this.playSfx(this.soundDoor, false, 1);
    };
    NewClass.prototype.openDoor = function () {
        var _this = this;
        this.playDoorAnim("door_open");
        this.scheduleOnce(function () {
            _this.playDoorAnim("door_close");
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
            cusComp.stopWaitProgress();
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
        cc.tween(this.cameraDoc.node).to(0.4, { position: cc.v3(-250, 0) }).start();
        cc.tween(this.cameraDoc).to(0.8, { zoomRatio: 1.65 }).start();
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
        this.schedule(this.spawCustomer, 3);
        this.scheduleOnce(function () {
            if (!_this.isAutoPlay)
                _this.textGuild2.active = true;
            while (_this.arrCus.length < 3) {
                _this.spawCustomer();
            }
            _this.updateQueueHand();
        }, 15);
        this.scheduleOnce(function () {
            if (_this.textGuild2.active)
                cc.tween(_this.textGuild2).to(0.8, { opacity: 0 }).start();
            _this.zoomGame();
            _this.scheduleOnce(function () {
                _this.showCardPick();
            }, 4);
            // this.startGame()
        }, 22);
    };
    NewClass.prototype.zoomGame = function () {
        var _this = this;
        cc.tween(this.camera).to(0.8, { zoomRatio: 2 }).start();
        cc.tween(this.camera.node).to(0.8, { position: cc.v3(-494, -296) }).start();
        cc.tween(this.cameraDoc).to(0.8, { zoomRatio: 2.5 }).start();
        cc.tween(this.cameraDoc.node).to(0.4, { position: cc.v3(-500, -100) }).start();
        this.isWaitingCard = true;
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
            if (!_this.isAutoPlay)
                _this.textGuild3.active = true;
        }, 0.5);
    };
    NewClass.prototype.showCardPick = function () {
        var _this = this;
        var pick = Number(this.autoCard);
        if (this.isAutoPlay) {
            var cardList = this.listCard.getComponent("listCard");
            if (cardList) {
                cardList.lockFocus = true;
                cardList.focusIndex = pick;
            }
        }
        this.listCard.active = true;
        if (this.isAutoPlay && !this.didAutoPickCard) {
            this.didAutoPickCard = true;
            this.scheduleOnce(function () {
                if (!_this.listCard || !_this.listCard.active)
                    return;
                var board = _this.listCard.getChildByName("board");
                var pickCard = board && board.children[pick];
                if (pickCard) {
                    cc.tween(pickCard).to(0.12, { scale: 1.28 }).to(0.1, { scale: 1.15 }).call(function () {
                        _this.clickCard(null, pick);
                    }).start();
                }
                else {
                    _this.clickCard(null, pick);
                }
            }, 1.5);
        }
    };
    NewClass.prototype.startAutoPlay = function () {
        this.autoPlayPhase = 0;
        this.autoPlayWait = 0;
        this.hideQueueHandGuide = true;
        this.hideAllQueueHands();
        this.hideAllIconPtHands();
        this.schedule(this.tickAutoPlay, 0.25);
    };
    NewClass.prototype.tickAutoPlay = function () {
        if (this.isEndgame) {
            this.unschedule(this.tickAutoPlay);
            return;
        }
        if (this.autoPlayWait > 0) {
            this.autoPlayWait -= 0.25;
            return;
        }
        if (this.isWaitingCard || (this.listCard && this.listCard.active))
            return;
        if (!this.isGameStarted) {
            this.tickAutoPlayTutorial();
            return;
        }
        this.autoPlayServeOne();
    };
    NewClass.prototype.tickAutoPlayTutorial = function () {
        switch (this.autoPlayPhase) {
            case 0:
                if (this.autoClickCus(this.arrCus[0])) {
                    this.autoPlayPhase = 1;
                    this.autoPlayWait = 0.7;
                }
                break;
            case 1:
                if (this.autoClickPtIcon(this.arrIconPt[0])) {
                    this.autoPlayPhase = 2;
                    this.autoPlayWait = 1.2;
                }
                break;
            case 2:
                if (this.autoClickCus(this.arrCus[1])) {
                    this.autoPlayPhase = 3;
                    this.autoPlayWait = 2.4;
                }
                break;
            case 3:
                if (this.autoClickPtIcon(this.arrIconPt[1])) {
                    this.autoPlayPhase = 4;
                    this.autoPlayWait = 1.2;
                }
                break;
            case 4:
                if (this.autoClickCus(this.arrCus[2])) {
                    this.autoPlayPhase = 5;
                    this.autoPlayWait = 2.8;
                }
                break;
            case 5:
                if (this.autoClickPtIcon(this.arrIconPt[2])) {
                    this.autoPlayPhase = 6;
                }
                break;
        }
    };
    NewClass.prototype.autoPlayServeOne = function () {
        for (var i = 0; i < this.arrCus.length; i++) {
            if (this.canClickQueueCus(this.arrCus[i])) {
                this.autoClickCus(this.arrCus[i]);
                this.autoPlayWait = 0.85;
                return;
            }
        }
        for (var i = 0; i < this.arrIconPt.length; i++) {
            if (this.canClickIconPt(this.arrIconPt[i])) {
                this.autoClickPtIcon(this.arrIconPt[i]);
                this.autoPlayWait = 0.55;
                return;
            }
        }
    };
    NewClass.prototype.autoClickCus = function (cus) {
        if (!cus || !cus.isValid)
            return false;
        var cusComp = cus.getComponent("cusGym");
        if (!cusComp || cusComp.isQueueMoving)
            return false;
        var pop = this.getCusPop(cus);
        if (!pop || !pop.active)
            return false;
        cusComp.clickPop({ currentTarget: pop }, "");
        return true;
    };
    NewClass.prototype.autoClickPtIcon = function (icon) {
        if (!icon || !icon.isValid || !icon.activeInHierarchy)
            return false;
        this.clickPt({ currentTarget: icon }, "");
        return true;
    };
    NewClass.prototype.clickCard = function (event, value) {
        var _this = this;
        this.isWaitingCard = false;
        this.listCard.active = false;
        cc.tween(this.camera).to(0.8, { zoomRatio: 1 }).start();
        cc.tween(this.camera.node).to(0.8, { position: cc.v3(0, 0) }).start();
        cc.tween(this.cameraDoc).to(0.8, { zoomRatio: 1.5 }).start();
        cc.tween(this.cameraDoc.node).to(0.8, { position: cc.v3(-100, 0) }).start();
        if (this.textGuild3)
            this.textGuild3.opacity = 0;
        switch (Number(value)) {
            case 0:
                this.ptSpeed = 1.5;
                this.noti.active = true;
                this.noti.children[0].children[1].active = true;
                this.noti.getComponent(cc.Animation).play();
                this.hideQueueHandGuide = true;
                this.hideAllQueueHands();
                this.hideAllIconPtHands();
                this.scheduleOnce(function () {
                    _this.autoFillMachinesAndPts();
                }, 0.5);
                if (this.isAutoPlay) {
                    this.autoPlayWait = 1.6;
                }
                else {
                    this.scheduleOnce(function () {
                        _this.showContinueHandGuide();
                    }, 1.5);
                }
                break;
            case 1:
                this.addCountDownTime(15);
                this.noti.active = true;
                this.noti.children[0].children[0].active = true;
                this.noti.getComponent(cc.Animation).play();
                if (this.isAutoPlay) {
                    this.hideQueueHandGuide = true;
                    this.hideAllQueueHands();
                    this.hideAllIconPtHands();
                    this.autoPlayWait = 0.8;
                }
                else {
                    this.hideQueueHandGuide = false;
                    this.scheduleOnce(function () {
                        _this.showContinueHandGuide();
                    }, 0.8);
                }
                break;
        }
        this.scheduleOnce(function () {
            _this.noti.children[0].children[0].active = false;
            _this.noti.children[0].children[1].active = false;
            _this.noti.children[0].children[2].active = true;
            _this.noti.active = true;
            _this.noti.getComponent(cc.Animation).play();
        }, 18.5);
        this.scheduleOnce(function () {
            _this.onEndgame();
        }, 20);
    };
    NewClass.prototype.showContinueHandGuide = function () {
        this.hideQueueHandGuide = false;
        this.guidingIconPt = false;
        this.showFreeIconPtHand();
        this.updateQueueHand();
    };
    NewClass.prototype.autoFillMachinesAndPts = function () {
        var queue = this.arrCus.slice();
        for (var i = 0; i < queue.length; i++) {
            var cus = queue[i];
            if (!cus || !cus.isValid)
                continue;
            if (this.arrCus.indexOf(cus) < 0)
                continue;
            var cusComp = cus.getComponent("cusGym");
            if (!cusComp)
                continue;
            if (!this.hasFreeMachineForTag(cusComp.tag))
                continue;
            cc.Tween.stopAllByTarget(cus);
            cusComp.isQueueMoving = false;
            this.hideCusPop(cus);
            this.placeCusOnFreeMachine(cus, cusComp.tag);
        }
        this.autoSpawnPts();
    };
    NewClass.prototype.placeCusOnFreeMachine = function (cus, tag) {
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
        return false;
    };
    NewClass.prototype.getFreeIconPt = function () {
        for (var i = 0; i < this.arrIconPt.length; i++) {
            if (this.isIconPtFree(this.arrIconPt[i]))
                return this.arrIconPt[i];
        }
        return null;
    };
    NewClass.prototype.autoSpawnPts = function () {
        var _this = this;
        this.cleanupWaiting();
        var waiting = this.arrWaiting.slice();
        var delay = 0;
        var _loop_2 = function (i) {
            var cus = waiting[i];
            if (!this_2.isCusWaitingForPt(cus))
                return "continue";
            var cusComp = cus.getComponent("cusGym");
            var icon = this_2.getFreeIconPt();
            if (icon) {
                var btn = icon.getComponent(cc.Button);
                if (btn)
                    btn.enabled = false;
                if (icon.children[1])
                    icon.children[1].active = true;
            }
            var spawnCus = cus;
            var parentName = cusComp.parentName;
            var iconBtn = icon;
            this_2.scheduleOnce(function () {
                if (!spawnCus || !spawnCus.isValid || !_this.isCusWaitingForPt(spawnCus)) {
                    if (iconBtn) {
                        var btn = iconBtn.getComponent(cc.Button);
                        if (btn)
                            btn.enabled = true;
                        if (iconBtn.children[1])
                            iconBtn.children[1].active = false;
                    }
                    return;
                }
                if (!_this.addPt(spawnCus, parentName, iconBtn)) {
                    if (iconBtn) {
                        var btn = iconBtn.getComponent(cc.Button);
                        if (btn)
                            btn.enabled = true;
                        if (iconBtn.children[1])
                            iconBtn.children[1].active = false;
                    }
                }
            }, delay);
            delay += 0.12;
        };
        var this_2 = this;
        for (var i = 0; i < waiting.length; i++) {
            _loop_2(i);
        }
    };
    NewClass.prototype.createCoin = function (node, value) {
        var pos = node.parent.convertToWorldSpaceAR(node.position);
        pos = this.node.convertToNodeSpaceAR(pos);
        var coin = cc.instantiate(this.preCoin);
        coin.parent = this.node;
        coin.position = pos.add(cc.v3(0, 50));
        globalThis.gold += 50;
        this.playSfx(this.soundCoin, false, 1);
    };
    NewClass.prototype.activateSeatCus = function (char, parentNode, parentName, parentIndex, tag) {
        if (!char)
            return;
        char.active = true;
        char.name = "char";
        var cusComp = char.getComponent("cusGym");
        if (!cusComp)
            return;
        cusComp.parentName = parentName;
        cusComp.parentIndex = parentIndex;
        cusComp.parentNode = parentNode;
        cusComp.isPt = false;
        if (this.arrWaiting.indexOf(char) < 0) {
            this.arrWaiting.push(char);
        }
        this.hideCusPop(char);
        cusComp.waitingTag(tag);
    };
    NewClass.prototype.moveCus = function (value) {
        var _this = this;
        // cc.audioEngine.play(this.soundCoin, false, 1)
        if (value == 1) {
            this.hideCusPop(this.arrCus[0]);
            var char = this.arrCrunch[0].getChildByName("char");
            this.activateSeatCus(char, this.arrCrunch[0], "Crunch", 0, 0);
            this.arrCus[0].active = false;
        }
        else if (value == 2) {
            this.hideCusPop(this.arrCus[1]);
            this.arrCus[1].active = false;
            var char = this.dayTa1.getChildByName("char");
            this.activateSeatCus(char, this.dayTa1, "MayDay", 0, 1);
        }
        else if (value == 3) {
            this.hideCusPop(this.arrCus[2]);
            this.arrCus[2].active = false;
            var char = this.boxing1.getChildByName("char");
            this.activateSeatCus(char, this.boxing1, "Boxing", 0, 2);
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
    NewClass.prototype.update = function (dt) {
        var deviceResolution = cc.view.getFrameSize();
        if (deviceResolution.width < deviceResolution.height) {
            this.reponsive(true);
        }
        else {
            this.reponsive(false);
        }
    };
    NewClass.prototype.playSfx = function (clip, loop, vol) {
        if (loop === void 0) { loop = false; }
        if (vol === void 0) { vol = 1; }
        if (this.isEndgame || !clip)
            return null;
        var id = cc.audioEngine.play(clip, loop, vol);
        if (id != null)
            this.sfxIds.push(id);
        return id;
    };
    NewClass.prototype.stopOtherSounds = function () {
        if (this.idSoundTime != null) {
            cc.audioEngine.stop(this.idSoundTime);
            this.idSoundTime = null;
        }
        for (var i = 0; i < this.sfxIds.length; i++) {
            cc.audioEngine.stop(this.sfxIds[i]);
        }
        this.sfxIds = [];
    };
    NewClass.prototype.onEndgame = function () {
        if (this.isEndgame)
            return;
        this.isEndgame = true;
        this.unschedule(this.spawCustomer);
        this.stopOtherSounds();
        this.makeAllCusHappy();
        if (this.soundWin)
            cc.audioEngine.play(this.soundWin, false, 1);
        // this.endCard.active = true;
        this.linkToStore.active = true;
    };
    NewClass.prototype.addCusToList = function (list, node) {
        if (!node || !node.isValid)
            return;
        if (list.indexOf(node) >= 0)
            return;
        if (!node.getComponent("cusGym"))
            return;
        list.push(node);
    };
    NewClass.prototype.makeAllCusHappy = function () {
        var list = [];
        for (var i = 0; i < this.arrCus.length; i++)
            this.addCusToList(list, this.arrCus[i]);
        for (var i = 0; i < this.arrWaiting.length; i++)
            this.addCusToList(list, this.arrWaiting[i]);
        for (var i = 0; i < this.arrCrunch.length; i++) {
            if (this.arrCrunch[i])
                this.addCusToList(list, this.arrCrunch[i].getChildByName("char"));
        }
        for (var i = 0; i < this.arrMayDay.length; i++) {
            if (this.arrMayDay[i])
                this.addCusToList(list, this.arrMayDay[i].getChildByName("char"));
        }
        if (this.dayTa1)
            this.addCusToList(list, this.dayTa1.getChildByName("char"));
        if (this.boxing1)
            this.addCusToList(list, this.boxing1.getChildByName("char"));
        if (this.boxing2)
            this.addCusToList(list, this.boxing2.getChildByName("char"));
        if (this.sortLayer) {
            for (var i = 0; i < this.sortLayer.childrenCount; i++) {
                this.addCusToList(list, this.sortLayer.children[i]);
            }
        }
        for (var i = 0; i < list.length; i++) {
            var cusComp = list[i].getComponent("cusGym");
            if (cusComp)
                cusComp.celebrate();
        }
    };
    NewClass.prototype.startCountDown = function () {
        var timeComp = this.node.getComponentInChildren("time");
        if (timeComp && timeComp.startCountDown) {
            timeComp.startCountDown();
        }
    };
    NewClass.prototype.addCountDownTime = function (sec) {
        var timeComp = this.node.getComponentInChildren("time");
        if (timeComp && timeComp.addTime) {
            timeComp.addTime(sec);
        }
    };
    NewClass.prototype.reponsive = function (logic) {
        var canvas = this.node.getComponent(cc.Canvas);
        canvas.fitHeight = (logic) ? false : true;
        canvas.fitWidth = (logic) ? true : false;
        this.lbCoin.string = globalThis.gold.toString();
        if (this.isEndgame) {
            if (logic) {
                this.endCardDoc.active = true;
                this.endCard.active = false;
            }
            else {
                this.endCard.active = true;
                this.endCardDoc.active = false;
            }
        }
        this.endCard.scale = (logic) ? 1.5 : 0.7;
        this.endCard.children[1].y = 0;
        this.endCard.children[1].scale = 1.25;
        this.endCard.children[1].x = 0;
        this.logo.scale = (logic) ? 1.5 : 1;
        this.listIconPt.scale = (logic) ? 2.2 : 1.3;
        this.listIconPt.getComponent(cc.Widget).bottom = (logic) ? 230 : 114.86;
        this.logo.getComponent(cc.Widget).top = 48;
        this.cameraDoc.node.active = logic ? true : false;
        this.camera.node.active = logic ? false : true;
        this.guildTime1.scale = logic ? 2.2 : 1;
        this.timeBar.scale = logic ? 1.5 : 1;
        this.timeBar.getComponent(cc.Widget).top = logic ? 250 : 150;
        this.noti.scale = (logic) ? 1.8 : 1;
        this.listCard.scale = (logic) ? 1.6 : 1;
        this.textGuild1.getComponent(cc.Widget).bottom = (logic) ? 570 : 279.79;
        this.textGuild2.getComponent(cc.Widget).bottom = (logic) ? 570 : 279.79;
        this.textGuild3.getComponent(cc.Widget).bottom = (logic) ? 570 : 279.79;
        this.textGuild1.scale = (logic) ? 1.8 : 1;
        this.textGuild2.scale = (logic) ? 1.8 : 1;
        this.textGuild3.scale = (logic) ? 1.8 : 1;
        this.listCard.scale = (logic) ? 1.7 : 1;
        this.endCardDoc.children[1].scale = 1.65;
        if (logic == true) {
            var frameSize = cc.view.getFrameSize();
            var width = frameSize.width;
            var height = frameSize.height;
            // Vì có thể nằm ngang hoặc dọc, kiểm tra cả hai chiều
            var aspectRatio = Math.max(width, height) / Math.min(width, height);
            // Gần đúng tỷ lệ màn hình iPhone X
            var TOLERANCE = 0.05;
            var IPAD_RATIO = 1024 / 768; // ≈ 1.33
            var TALL_PHONE_MIN_RATIO = 2.0;
            // this.phaohoa.scale = (logic) ? 7 : 3
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {
                this.endCardDoc.children[1].scale = 2;
                this.endCardDoc.children[1].x = 1400;
                // console.log("check iphonex")
                // this.coinBar.getComponent(cc.Widget).top = 77 + 30;
                this.logo.getComponent(cc.Widget).top = 48 + 70;
                this.timeBar.getComponent(cc.Widget).top = 250 + 70;
                // this.endCard.children[1].scale=1.43
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                console.log("check ipad");
                this.endCardDoc.children[1].scale = 1.2;
                this.endCardDoc.children[1].x = 700;
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
                this.endCard.children[1].scale = 1.43;
                this.endCard.children[1].y = -200;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
                // this.camera.zoomRatio = 0.8
                this.endCard.children[1].scale = 1.1;
                this.endCard.children[1].y = 0;
                this.endCard.children[1].x = 100;
            }
        }
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "cameraDoc", void 0);
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
        property(cc.AudioClip)
    ], NewClass.prototype, "soundTime", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundDoor", void 0);
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
    ], NewClass.prototype, "endCardDoc", void 0);
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
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "noti", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guildTime1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "timeBar", void 0);
    __decorate([
        property
    ], NewClass.prototype, "isAutoPlay", void 0);
    __decorate([
        property({ type: cc.Enum(AutoCard) })
    ], NewClass.prototype, "autoCard", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXEd5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtBQUVyQixJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDVCx5Q0FBUyxDQUFBO0lBQ1QsdUNBQVEsQ0FBQTtBQUNaLENBQUMsRUFISSxRQUFRLEtBQVIsUUFBUSxRQUdaO0FBR0Q7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtL0NDO1FBai9DRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFDNUIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBRXZCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLG1CQUFhLEdBQVksSUFBSSxDQUFBO1FBRTdCLGFBQU8s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O2dCQUNMLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtnQkFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2dCQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDdEQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUNMLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtnQkFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2dCQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxD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LFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7U0FDM0Y7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1NBQzNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDNUUsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDOUUsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDOUUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FB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Q0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUE7UUFDdEMsSUFBSSxLQUFLLElB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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzsrQ0FDSztJQUUzQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnREFDTTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFFdkI7UUFEQyxRQUFRO2dEQUNRO0lBRWpCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs4Q0FDZDtJQTdGUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbS9DNUI7SUFBRCxlQUFDO0NBbi9DRCxBQW0vQ0MsQ0FuL0NxQyxFQUFFLENBQUMsU0FBUyxHQW0vQ2pEO2tCQW4vQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5nb2xkID0gMTAwXHJcblxyXG5lbnVtIEF1dG9DYXJkIHtcclxuICAgIFNwZWVkID0gMCxcclxuICAgIFRpbWUgPSAxLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYURvYzogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbnBjOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBucGMyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3VzTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFBsYWNlUG9zOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3J1bmNoOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib3hpbmcxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94aW5nMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCRzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENvaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb25maXJtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGltZTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRG9vcjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZFVwZ3JhZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkVXBncmFkZTI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBoYW9ob2E6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb2luOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGF5VGExOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGxCYXI6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZERvYzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29pbkJhcjogY2MuTm9kZVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0R3VpbGQxOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0R3VpbGQyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0R3VpbGQzOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb29yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEljb25QdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RQdDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc29ydExheWVyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNvaW46IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0UHJlUHQ6IGNjLlByZWZhYltdID0gW11cclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RQcmVDdXM6IGNjLlByZWZhYltdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJyTWF5RGF5OiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2FyZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkVGltZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1lQmFyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc0F1dG9QbGF5ID0gdHJ1ZVxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShBdXRvQ2FyZCkgfSlcclxuICAgIGF1dG9DYXJkID0gQXV0b0NhcmQuVGltZVxyXG5cclxuXHJcbiAgICBhcnJQb3NEb25lID0gW2NjLnYzKC0yMzksIC0xMzMpLCBjYy52Myg1NywgLTE1NyksIGNjLnYzKC0xMjMsIC0zNiksIGNjLnYzKC0xNCwgNjUpLCBjYy52MygtNTgsIC0yMzUpLCBjYy52MygxOTgsIC01OSldXHJcbiAgICBhcnJQb3NEb25lQ3J1bmNoID0gW2NjLnYzKDIxOCwgLTM5MiksIGNjLnYzKDQwOSwgLTI4OSldXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RDcnVuY2g6Y2MuTm9kZT1udWxsXHJcbiAgICBhcnJQb3NDdXMgPSBbXVxyXG4gICAgYXJyQ3VzID0gW11cclxuICAgIGFyckljb25QdCA9IFtdXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICBhcnJDcnVuY2ggPSBbXVxyXG4gICAgcHRCdXN5TWFjaGluZXMgPSB7fVxyXG4gICAgaXNHYW1lU3RhcnRlZCA9IGZhbHNlXHJcbiAgICBndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgIGhpZGVRdWV1ZUhhbmRHdWlkZSA9IGZhbHNlXHJcbiAgICBpc0hpbmQgPSBmYWxzZVxyXG4gICAgaXNFbmRnYW1lID0gZmFsc2VcclxuICAgIHB0U3BlZWQgPSAxXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgcG9zR2FwQnVuZyA9IGNjLnYzKC0zMCwgLTE5KTtcclxuICAgIHBvc05hbmdUYSA9IGNjLnYzKC01MCwgLTQyKVxyXG4gICAgaWRTb3VuZFRpbWUgPSBudWxsXHJcbiAgICBpZFNvdW5kQkcgPSBudWxsXHJcbiAgICBzZnhJZHMgPSBbXVxyXG4gICAgYXV0b1BsYXlQaGFzZSA9IDBcclxuICAgIGF1dG9QbGF5V2FpdCA9IDBcclxuICAgIGRpZEF1dG9QaWNrQ2FyZCA9IGZhbHNlXHJcbiAgICBpc1dhaXRpbmdDYXJkID0gZmFsc2VcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlkU291bmRCRyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJHLCB0cnVlLCAwLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKDMsIHRoaXMuYXJyQ3VzLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3AgPSBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3ApIHBvcC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c0NvbXAgPSBjaGlsZC5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VzQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXNDb21wLnBvcFNob3duID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXNDb21wLmlzUG9wUmVhZHkgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC42KVxyXG4gICAgICAgIHRoaXMuaWRTb3VuZFRpbWUgPSB0aGlzLnBsYXlTZngodGhpcy5zb3VuZFRpbWUsIHRydWUsIDAuNSlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzTm9kZS5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RJY29uUHQuY2hpbGRyZW5bMF0uY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJySWNvblB0LnB1c2godGhpcy5saXN0SWNvblB0LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENydW5jaC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2gucHVzaCh0aGlzLmxpc3RDcnVuY2guY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0UGxhY2VQb3MuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbltpXS5wb3NpdGlvblxyXG4gICAgICAgICAgICB0aGlzLmFyclBvc0N1cy5wdXNoKGNjLnYzKHBvcy54LCBwb3MueSwgcG9zLnopKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwU29ydExheWVyKClcclxuICAgICAgICB0aGlzLnJlYnVpbGRRdWV1ZVBvc0luU29ydExheWVyKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIodGhpcy5hcnJDdXNbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmcmVzaFNvcnRMYXllckRlcHRoKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmR3VpbGQoKVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdXRvUGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1BsYXkoKVxyXG4gICAgICAgICAgICB9LCAxLjUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb2ZmR3VpbGQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmRUaW1lKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZ3VpbGRUaW1lMS5jaGlsZHJlblswXSkudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmd1aWxkVGltZTEuY2hpbGRyZW5bMV0pLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aW1lQmFyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgLy8gdGhpcy50ZXh0R3VpbGQxLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwLjMpXHJcblxyXG5cclxuICAgIH1cclxuICAgIHNldHVwU29ydExheWVyKCkge1xyXG4gICAgICAgIGxldCBkb29yUGFyZW50ID0gdGhpcy5kb29yID8gdGhpcy5kb29yLnBhcmVudCA6IG51bGxcclxuICAgICAgICBsZXQgcGFyZW50ID0gKGRvb3JQYXJlbnQgJiYgZG9vclBhcmVudC5wYXJlbnQpXHJcbiAgICAgICAgICAgIHx8ICh0aGlzLmxpc3RDcnVuY2ggJiYgdGhpcy5saXN0Q3J1bmNoLnBhcmVudClcclxuICAgICAgICAgICAgfHwgdGhpcy5nYW1lXHJcbiAgICAgICAgICAgIHx8IHRoaXMubm9kZVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc29ydExheWVyIHx8ICF0aGlzLnNvcnRMYXllci5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydExheWVyID0gbmV3IGNjLk5vZGUoXCJTb3J0TGF5ZXJcIilcclxuICAgICAgICAgICAgdGhpcy5zb3J0TGF5ZXIucGFyZW50ID0gcGFyZW50XHJcbiAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFBvc2l0aW9uKDAsIDApXHJcbiAgICAgICAgICAgIGlmIChkb29yUGFyZW50ICYmIGRvb3JQYXJlbnQucGFyZW50ID09PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFNpYmxpbmdJbmRleChkb29yUGFyZW50LmdldFNpYmxpbmdJbmRleCgpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlzdENydW5jaCAmJiB0aGlzLmxpc3RDcnVuY2gucGFyZW50ID09PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFNpYmxpbmdJbmRleCh0aGlzLmxpc3RDcnVuY2guZ2V0U2libGluZ0luZGV4KCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBub2RlcyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRoaXMuYXJyQ3J1bmNoW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWF5RGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyck1heURheVtpXSkgbm9kZXMucHVzaCh0aGlzLmFyck1heURheVtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRvb3JQYXJlbnQgJiYgZG9vclBhcmVudCAhPT0gcGFyZW50ICYmIGRvb3JQYXJlbnQgIT09IHRoaXMuc29ydExheWVyKSB7XHJcbiAgICAgICAgICAgIG5vZGVzLnB1c2goZG9vclBhcmVudClcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG9vcikge1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRoaXMuZG9vcilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm94aW5nMSkgbm9kZXMucHVzaCh0aGlzLmJveGluZzEpXHJcbiAgICAgICAgaWYgKHRoaXMuYm94aW5nMikgbm9kZXMucHVzaCh0aGlzLmJveGluZzIpXHJcbiAgICAgICAgaWYgKHRoaXMuZGF5VGExKSBub2Rlcy5wdXNoKHRoaXMuZGF5VGExKVxyXG4gICAgICAgIGlmICh0aGlzLmxpc3RQdCkgbm9kZXMucHVzaCh0aGlzLmxpc3RQdClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKG5vZGVzW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2hTb3J0TGF5ZXJEZXB0aCgpXHJcbiAgICAgICAgdGhpcy5zZXREZXB0aEJ5WSh0aGlzLnNvcnRMYXllcilcclxuICAgIH1cclxuXHJcbiAgICByZWJ1aWxkUXVldWVQb3NJblNvcnRMYXllcigpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllclxyXG4gICAgICAgIGlmICghbGF5ZXIgfHwgIXRoaXMubGlzdFBsYWNlUG9zKSByZXR1cm5cclxuICAgICAgICB0aGlzLmFyclBvc0N1cyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBsYWNlID0gdGhpcy5saXN0UGxhY2VQb3MuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgbGV0IHdvcmxkUG9zID0gcGxhY2UucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwbGFjZS5wb3NpdGlvbilcclxuICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gbGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyUG9zQ3VzLnB1c2goY2MudjMobG9jYWxQb3MueCwgbG9jYWxQb3MueSwgbG9jYWxQb3MueikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9Tb3J0TGF5ZXJQb3MoZnJvbVBhcmVudCwgbG9jYWxQb3MpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllciB8fCB0aGlzLm5vZGVcclxuICAgICAgICBpZiAoIWZyb21QYXJlbnQgfHwgZnJvbVBhcmVudCA9PT0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYzKGxvY2FsUG9zLngsIGxvY2FsUG9zLnksIGxvY2FsUG9zLnopXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGZyb21QYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGxvY2FsUG9zKVxyXG4gICAgICAgIGxldCBwb3MgPSBsYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcylcclxuICAgICAgICByZXR1cm4gY2MudjMocG9zLngsIHBvcy55LCBwb3MueilcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0TGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNvcnRMYXllciB8fCAhdGhpcy5zb3J0TGF5ZXIuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwU29ydExheWVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydExheWVyIHx8IHRoaXMubm9kZVxyXG4gICAgfVxyXG4gICAgc2V0RGVwdGhCeVkobm9kZSkge1xyXG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm5cclxuICAgICAgICBub2RlLnpJbmRleCA9IC1NYXRoLnJvdW5kKG5vZGUueSlcclxuICAgIH1cclxuICAgIGF0dGFjaFRvU29ydExheWVyKG5vZGUpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllciB8fCB0aGlzLm5vZGVcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuXHJcbiAgICAgICAgaWYgKG5vZGUucGFyZW50ID09PSBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldERlcHRoQnlZKG5vZGUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBub2RlLnBhcmVudFxyXG4gICAgICAgICAgICA/IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICA6IG5vZGUucG9zaXRpb25cclxuICAgICAgICBub2RlLnBhcmVudCA9IGxheWVyXHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKVxyXG4gICAgICAgIHRoaXMuc2V0RGVwdGhCeVkobm9kZSlcclxuICAgIH1cclxuICAgIHJlZnJlc2hTb3J0TGF5ZXJEZXB0aCgpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllclxyXG4gICAgICAgIGlmICghbGF5ZXIpIHJldHVyblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVwdGhCeVkobGF5ZXIuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFF1ZXVlUG9zKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuYXJyUG9zQ3VzW2luZGV4XVxyXG4gICAgICAgIHJldHVybiBjYy52Myhwb3MueCwgcG9zLnksIHBvcy56KVxyXG4gICAgfVxyXG4gICAgLy8gUHJlZmFiIGN1cyBt4bq3YyDEkeG7i25oIHF1YXkgdHLDoWkga2hpIHNjYWxlWCA9IDFcclxuICAgIGZhY2VDdXNCeURpcihjdXMsIGZyb21Qb3MsIHRvUG9zKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgTWF0aC5hYnModG9Qb3MueCAtIGZyb21Qb3MueCkgPCAwLjEpIHJldHVyblxyXG4gICAgICAgIGN1cy5zY2FsZVggPSB0b1Bvcy54IDwgZnJvbVBvcy54ID8gMSA6IC0xXHJcbiAgICB9XHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIHNwYXdDdXN0b21lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5hcnJDdXMubGVuZ3RoID49IHRoaXMuYXJyUG9zQ3VzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBxdWV1ZUluZGV4ID0gdGhpcy5hcnJDdXMubGVuZ3RoXHJcbiAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuZ2V0UXVldWVQb3MocXVldWVJbmRleClcclxuICAgICAgICBsZXQgY3VzID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJlQ3VzW3RoaXMuY291bnRDdXNdKVxyXG4gICAgICAgIGxldCBzcGF3blBhcmVudCA9IHRoaXMubGlzdEN1c05vZGUgfHwgdGhpcy5ub2RlXHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy50b1NvcnRMYXllclBvcyhzcGF3blBhcmVudCwgY2MudjMoLTEwNTEsIC02MDApKVxyXG4gICAgICAgIGxldCBtaWRQb3MgPSB0aGlzLnRvU29ydExheWVyUG9zKHNwYXduUGFyZW50LCBjYy52MygtNjc1LCAtNDM1KSlcclxuICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKGN1cylcclxuXHJcbiAgICAgICAgdGhpcy5hcnJDdXMucHVzaChjdXMpO1xyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGN1c0NvbXAuaXNTcGF3bmVkID0gdHJ1ZVxyXG4gICAgICAgIGN1c0NvbXAuaXNRdWV1ZU1vdmluZyA9IHRydWVcclxuICAgICAgICBjdXMucG9zaXRpb24gPSBzdGFydFBvc1xyXG4gICAgICAgIC8vIFByZWZhYiBxdWF5IHRyw6FpIChzY2FsZVg9MSkg4oaSIMSRaSBzYW5nIHBo4bqjaSBj4bqnbiBzY2FsZVg9LTFcclxuICAgICAgICB0aGlzLmZhY2VDdXNCeURpcihjdXMsIHN0YXJ0UG9zLCBtaWRQb3MpXHJcbiAgICAgICAgbGV0IGFuaW0gPSBjdXMuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0luTFwiLCB0cnVlKVxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjdXMpXHJcbiAgICAgICAgY2MudHdlZW4oY3VzKS50bygxLCB7IHBvc2l0aW9uOiBtaWRQb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjZUN1c0J5RGlyKGN1cywgbWlkUG9zLCBwb3NFbmQpXHJcbiAgICAgICAgfSkudG8oMC44LCB7IHBvc2l0aW9uOiBwb3NFbmQgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cy5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIGlmIChjdXNDb21wLmlzQW5ncnlXYWl0KSB7XHJcbiAgICAgICAgICAgICAgICBjdXNDb21wLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nXCIsIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VzQ29tcC5zaG93UXVldWVQb3AoKVxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5jb3VudEN1cysrXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPiA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRDdXMgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhcnJXYWl0aW5nID0gW11cclxuICAgIGRvQ3VzKHRhZywgY3VzKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5U2Z4KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwIDw9IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzKHRhZylcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEljb25QdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0F1dG9QbGF5KSB0aGlzLmFyckljb25QdFswXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJySWNvblB0WzFdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXV0b1BsYXkpIHRoaXMuYXJySWNvblB0WzFdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckljb25QdFsyXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0F1dG9QbGF5KSB0aGlzLmFyckljb25QdFsyXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0YWcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJDcnVuY2hbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1c1RvQ3J1bmNoKGN1cywgaSwgdGFnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YWcgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyck1heURheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJNYXlEYXlbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1c1RvTWF5RGF5KGN1cywgaSwgdGFnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YWcgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzVG9Cb3hpbmcoY3VzLCAwLCB0YWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGxlYXZlUXVldWUoY3VzKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXMpXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5hcnJDdXMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBxdWV1ZUN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmdldFF1ZXVlUG9zKGkpXHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gcXVldWVDdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgICAgIGxldCBhbmltID0gcXVldWVDdXMuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICBjdXNDb21wLmlzUXVldWVNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0luTFwiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLmZhY2VDdXNCeURpcihxdWV1ZUN1cywgcXVldWVDdXMucG9zaXRpb24sIHBvc0VuZClcclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHF1ZXVlQ3VzKVxyXG4gICAgICAgICAgICBjYy50d2VlbihxdWV1ZUN1cykudG8oMC44LCB7IHBvc2l0aW9uOiBwb3NFbmQgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWV1ZUN1cy5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VzQ29tcC5pc0FuZ3J5V2FpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c0NvbXAudHVjR2lhbigpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2FpdGluZ1wiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VzQ29tcC5zaG93UXVldWVQb3AoKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZUN1c1RvQ3J1bmNoKGN1cywgdmFsdWUsIHRhZykge1xyXG4gICAgICAgIHRoaXMuaGlkZUN1c1BvcChjdXMpXHJcbiAgICAgICAgdGhpcy5sZWF2ZVF1ZXVlKGN1cylcclxuICAgICAgICBsZXQgY3J1bmNoID0gdGhpcy5hcnJDcnVuY2hbdmFsdWVdO1xyXG4gICAgICAgIGN1cy5wYXJlbnQgPSBjcnVuY2g7XHJcbiAgICAgICAgY3VzLnBvc2l0aW9uID0gdGhpcy5wb3NHYXBCdW5nO1xyXG4gICAgICAgIGN1cy5uYW1lID0gXCJjaGFyXCJcclxuICAgICAgICBjdXMuY2hpbGRyZW5bMF0uc2NhbGUgPSAxXHJcbiAgICAgICAgY3VzLnNjYWxlID0gMVxyXG4gICAgICAgIGN1cy5zY2FsZVggPSAxXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcblxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50TmFtZSA9IFwiQ3J1bmNoXCJcclxuICAgICAgICBjdXNDb21wLnBhcmVudEluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROb2RlID0gY3J1bmNoXHJcblxyXG4gICAgICAgIHRoaXMuYXJyV2FpdGluZy5wdXNoKGN1cylcclxuICAgICAgICBjdXNDb21wLndhaXRpbmdUYWcodGFnKVxyXG4gICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuXHJcbiAgICB9XHJcbiAgICBtb3ZlQ3VzVG9NYXlEYXkoY3VzLCB2YWx1ZSwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQ3VzUG9wKGN1cylcclxuICAgICAgICB0aGlzLmxlYXZlUXVldWUoY3VzKVxyXG4gICAgICAgIGxldCBtYXkgPSB0aGlzLmFyck1heURheVt2YWx1ZV1cclxuICAgICAgICBjdXMucGFyZW50ID0gbWF5O1xyXG4gICAgICAgIGN1cy5wb3NpdGlvbiA9IHRoaXMucG9zTmFuZ1RhO1xyXG4gICAgICAgIGN1cy5uYW1lID0gXCJjaGFyXCJcclxuICAgICAgICBjdXMuY2hpbGRyZW5bMF0uc2NhbGUgPSAxO1xyXG4gICAgICAgIGN1cy5zY2FsZSA9IDFcclxuICAgICAgICBjdXMuc2NhbGVYID0gMVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIG1heS5nZXRDaGlsZEJ5TmFtZShcIkcxX0FiQ3J1bmNoXCIpLnpJbmRleCA9IGN1cy56SW5kZXggKyAxXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROYW1lID0gXCJNYXlEYXlcIlxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50SW5kZXggPSB2YWx1ZTtcclxuICAgICAgICBjdXNDb21wLnBhcmVudE5vZGUgPSBtYXlcclxuXHJcbiAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnB1c2goY3VzKVxyXG4gICAgICAgIGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikud2FpdGluZ1RhZyh0YWcpXHJcbiAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgfVxyXG4gICAgbW92ZUN1c1RvQm94aW5nKGN1cywgdmFsdWUsIHRhZykge1xyXG4gICAgICAgIHRoaXMuaGlkZUN1c1BvcChjdXMpXHJcbiAgICAgICAgdGhpcy5sZWF2ZVF1ZXVlKGN1cylcclxuICAgICAgICBjdXMucGFyZW50ID0gdGhpcy5ib3hpbmcxXHJcbiAgICAgICAgY3VzLnBvc2l0aW9uID0gY2MudjMoMTIzLCAyMyk7XHJcbiAgICAgICAgY3VzLm5hbWUgPSBcImNoYXJcIlxyXG4gICAgICAgIGN1cy5jaGlsZHJlblswXS5zY2FsZSA9IDE7XHJcbiAgICAgICAgY3VzLnNjYWxlID0gMVxyXG4gICAgICAgIGN1cy5zY2FsZVggPSAxXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcblxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50TmFtZSA9IFwiQm94aW5nXCJcclxuICAgICAgICBjdXNDb21wLnBhcmVudEluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROb2RlID0gdGhpcy5ib3hpbmcxXHJcbiAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnB1c2goY3VzKVxyXG4gICAgICAgIGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikud2FpdGluZ1RhZyh0YWcpXHJcbiAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgfVxyXG4gICAgb2ZmSWNvblB0KG5vZGUpIHtcclxuICAgICAgICBub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIG9uSWNvblB0KG5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZGluZ0ljb25QdCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaXNJY29uUHRGcmVlKG5vZGUpIHtcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuYWN0aXZlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgYnRuID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGlmIChidG4gJiYgIWJ0bi5lbmFibGVkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICAvLyBjaGlsZHJlblsxXSA9IGJ1c3kgb3ZlcmxheVxyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuWzFdICYmIG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaGFzRnJlZU1hY2hpbmVGb3JUYWcodGFnKSB7XHJcbiAgICAgICAgaWYgKHRhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDcnVuY2gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJDcnVuY2hbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFnID09IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyck1heURheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyck1heURheVtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YWcgPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuYm94aW5nMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjYW5DbGlja1F1ZXVlQ3VzKGN1cykge1xyXG4gICAgICAgIGlmICghY3VzIHx8ICFjdXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8IGN1c0NvbXAuaXNRdWV1ZU1vdmluZyB8fCAhY3VzQ29tcC5pc1BvcFJlYWR5KSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgcG9wID0gdGhpcy5nZXRDdXNQb3AoY3VzKVxyXG4gICAgICAgIGlmICghcG9wIHx8ICFwb3AuYWN0aXZlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgYnRuID0gcG9wLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYgKGJ0biAmJiAhYnRuLmVuYWJsZWQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA8IDQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0aGlzLmhhc0ZyZWVNYWNoaW5lRm9yVGFnKGN1c0NvbXAudGFnKVxyXG4gICAgfVxyXG4gICAgaGFzQ3VzV2FpdGluZ0ZvclB0KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cFdhaXRpbmcoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJXYWl0aW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ3VzV2FpdGluZ0ZvclB0KHRoaXMuYXJyV2FpdGluZ1tpXSkpIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY2FuQ2xpY2tJY29uUHQobm9kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzSWNvblB0RnJlZShub2RlKSAmJiB0aGlzLmhhc0N1c1dhaXRpbmdGb3JQdCgpXHJcbiAgICB9XHJcbiAgICBoaWRlQWxsSWNvblB0SGFuZHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckljb25QdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaGFuZCA9IHRoaXMuYXJySWNvblB0W2ldLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgICAgICBpZiAoaGFuZCkgaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dGcmVlSWNvblB0SGFuZCgpIHtcclxuICAgICAgICB0aGlzLmhpZGVBbGxJY29uUHRIYW5kcygpXHJcbiAgICAgICAgdGhpcy5oaWRlQWxsUXVldWVIYW5kcygpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdXRvUGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0N1c1dhaXRpbmdGb3JQdCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZGluZ0ljb25QdCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJJY29uUHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGljb24gPSB0aGlzLmFyckljb25QdFtpXVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5DbGlja0ljb25QdChpY29uKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhbmQgPSBpY29uLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgICAgICAgICAgaWYgKGhhbmQpIGhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkaW5nSWNvblB0ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICB9XHJcbiAgICBnZXRDdXNQb3AoY3VzKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGlmIChjdXNDb21wICYmIGN1c0NvbXAucG9wKSByZXR1cm4gY3VzQ29tcC5wb3BcclxuICAgICAgICByZXR1cm4gY3VzLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICB9XHJcbiAgICBoaWRlQ3VzUG9wKGN1cykge1xyXG4gICAgICAgIGlmICghY3VzIHx8ICFjdXMuaXNWYWxpZCkgcmV0dXJuXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKGN1c0NvbXApIHtcclxuICAgICAgICAgICAgY3VzQ29tcC5jbGVhclBvcFN0YXRlKClcclxuICAgICAgICAgICAgY3VzQ29tcC5yZXNldFBvcExheWVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBvcCA9IHRoaXMuZ2V0Q3VzUG9wKGN1cylcclxuICAgICAgICBpZiAoIXBvcCB8fCAhcG9wLmlzVmFsaWQpIHJldHVyblxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChwb3ApXHJcbiAgICAgICAgbGV0IGhhbmQgPSBwb3AuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgaWYgKGhhbmQpIGhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBwb3Auc2NhbGUgPSAwXHJcbiAgICAgICAgcG9wLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBoaWRlQWxsUXVldWVIYW5kcygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICBpZiAoIWN1cyB8fCAhY3VzLmlzVmFsaWQpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgICAgICBpZiAoY3VzQ29tcCkgY3VzQ29tcC5yZXNldFBvcExheWVyKClcclxuICAgICAgICAgICAgbGV0IHBvcCA9IHRoaXMuZ2V0Q3VzUG9wKGN1cylcclxuICAgICAgICAgICAgaWYgKCFwb3ApIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBoYW5kID0gcG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgICAgICBpZiAoaGFuZCkgaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0UXVldWVDdXNEZXB0aCgpXHJcbiAgICB9XHJcbiAgICByZXNldFF1ZXVlQ3VzRGVwdGgoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgaWYgKGN1cyAmJiBjdXMuaXNWYWxpZCkgdGhpcy5zZXREZXB0aEJ5WShjdXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnJpbmdDdXNQb3BUb0Zyb250KGN1cykge1xyXG4gICAgICAgIGlmICghY3VzIHx8ICFjdXMuaXNWYWxpZCkgcmV0dXJuXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8ICFjdXNDb21wLmlzU3Bhd25lZCkgcmV0dXJuXHJcbiAgICAgICAgY3VzQ29tcC5saWZ0UG9wKClcclxuICAgIH1cclxuICAgIHVwZGF0ZVF1ZXVlSGFuZCgpIHtcclxuICAgICAgICB0aGlzLmhpZGVBbGxRdWV1ZUhhbmRzKClcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPCA0KSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5ndWlkaW5nSWNvblB0KSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5oaWRlUXVldWVIYW5kR3VpZGUgfHwgdGhpcy5pc0F1dG9QbGF5KSByZXR1cm5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2tRdWV1ZUN1cyhjdXMpKSBjb250aW51ZVxyXG4gICAgICAgICAgICBsZXQgcG9wID0gdGhpcy5nZXRDdXNQb3AoY3VzKVxyXG4gICAgICAgICAgICBpZiAoIXBvcCkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IGhhbmQgPSBwb3AuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5icmluZ0N1c1BvcFRvRnJvbnQoY3VzKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGlja1B0KGV2ZW50LCB0YWcpIHtcclxuICAgICAgICBsZXQgcHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGxheVNmeCh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudGV4dEd1aWxkMSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICBwdCA9IHRoaXMubGlzdFB0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDJcclxuICAgICAgICAgICAgbGV0IGZuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ3VzKDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHQuZ2V0Q29tcG9uZW50KFwicHRcIikubW92ZUluKGZuYylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzFdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNBdXRvUGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzFdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icmluZ0N1c1BvcFRvRnJvbnQodGhpcy5hcnJDdXNbMV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIocHQpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgICAgIHRoaXMub3BlbkRvb3IoKVxyXG4gICAgICAgICAgICB0aGlzLm9mZkljb25QdCh0aGlzLmFyckljb25QdFswXSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDIpIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ0bi5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgcHQgPSB0aGlzLmxpc3RQdC5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSAzXHJcbiAgICAgICAgICAgIHB0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5vcGVuRG9vcigpXHJcbiAgICAgICAgICAgIGxldCBmbmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUN1cygxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB0LmdldENvbXBvbmVudChcInB0XCIpLm1vdmVJbihmbmMpXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0F1dG9QbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaW5nQ3VzUG9wVG9Gcm9udCh0aGlzLmFyckN1c1syXSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIocHQpXHJcbiAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgdGhpcy5vZmZJY29uUHQodGhpcy5hcnJJY29uUHRbMV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDMpIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ0bi5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgcHQgPSB0aGlzLmxpc3RQdC5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSA0XHJcbiAgICAgICAgICAgIHB0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5vcGVuRG9vcigpXHJcblxyXG4gICAgICAgICAgICBsZXQgZm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoMilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdC5nZXRDb21wb25lbnQoXCJwdFwiKS5tb3ZlSW4oZm5jKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXV0b1BsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckN1c1syXS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJpbmdDdXNQb3BUb0Zyb250KHRoaXMuYXJyQ3VzWzJdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKHB0KVxyXG4gICAgICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmSWNvblB0KHRoaXMuYXJySWNvblB0WzJdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwV2FpdGluZygpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJXYWl0aW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJXYWl0aW5nW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ3VzV2FpdGluZ0ZvclB0KGN1cykpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWRkUHQoY3VzLCBjdXNDb21wLnBhcmVudE5hbWUsIGV2ZW50LmN1cnJlbnRUYXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYW51cFdhaXRpbmcoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuYXJyV2FpdGluZy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDdXNPbk1hY2hpbmUodGhpcy5hcnJXYWl0aW5nW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNDdXNPbk1hY2hpbmUoY3VzKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgIWN1c0NvbXAucGFyZW50Tm9kZSB8fCAhY3VzQ29tcC5wYXJlbnROb2RlLmlzVmFsaWQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmIChjdXMucGFyZW50ICE9PSBjdXNDb21wLnBhcmVudE5vZGUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmIChjdXMubmFtZSAhPT0gXCJjaGFyXCIpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpc0N1c1dhaXRpbmdGb3JQdChjdXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDdXNPbk1hY2hpbmUoY3VzKSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuaXNQdCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNYWNoaW5lUHRCdXN5KGN1c0NvbXAucGFyZW50TmFtZSwgY3VzQ29tcC5wYXJlbnRJbmRleCkpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZW1vdmVGcm9tV2FpdGluZyhjdXMpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmFycldhaXRpbmcuaW5kZXhPZihjdXMpXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFycldhaXRpbmcuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1hY2hpbmVLZXkocGFyZW50TmFtZSwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gcGFyZW50TmFtZSArIFwiX1wiICsgaW5kZXhcclxuICAgIH1cclxuICAgIGlzTWFjaGluZVB0QnVzeShwYXJlbnROYW1lLCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMucHRCdXN5TWFjaGluZXNbdGhpcy5nZXRNYWNoaW5lS2V5KHBhcmVudE5hbWUsIGluZGV4KV1cclxuICAgIH1cclxuICAgIHNldE1hY2hpbmVQdEJ1c3kocGFyZW50TmFtZSwgaW5kZXgsIGJ1c3kpIHtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5nZXRNYWNoaW5lS2V5KHBhcmVudE5hbWUsIGluZGV4KVxyXG4gICAgICAgIGlmIChidXN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHRCdXN5TWFjaGluZXNba2V5XSA9IHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wdEJ1c3lNYWNoaW5lc1trZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVsZWFzZU1hY2hpbmVQdChwYXJlbnROYW1lLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2V0TWFjaGluZVB0QnVzeShwYXJlbnROYW1lLCBpbmRleCwgZmFsc2UpXHJcbiAgICB9XHJcbiAgICBnZXRQdFRhZyhwYXJlbnROYW1lLCBwYXJlbnRJbmRleCkge1xyXG4gICAgICAgIHN3aXRjaCAocGFyZW50TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ3J1bmNoXCI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gMFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIDRcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiA1XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gNlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJNYXlEYXlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRJbmRleCA9PT0gMCA/IDEgOiAzXHJcbiAgICAgICAgICAgIGNhc2UgXCJCb3hpbmdcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvdW50cHQgPSAwXHJcbiAgICBwbGF5RG9vckFuaW0oYW5pbU5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kb29yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KGFuaW1OYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXlTZngodGhpcy5zb3VuZERvb3IsIGZhbHNlLCAxKVxyXG4gICAgfVxyXG4gICAgb3BlbkRvb3IoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5RG9vckFuaW0oXCJkb29yX29wZW5cIilcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheURvb3JBbmltKFwiZG9vcl9jbG9zZVwiKVxyXG4gICAgICAgIH0sIDAuNylcclxuICAgIH1cclxuICAgIGFkZFB0KGN1cywgcGFyZW50TmFtZSwgYnRuKSB7XHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0N1c1dhaXRpbmdGb3JQdChjdXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wZW5Eb29yKCk7XHJcbiAgICAgICAgY3VzQ29tcC5pc1B0ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2V0TWFjaGluZVB0QnVzeShwYXJlbnROYW1lLCBjdXNDb21wLnBhcmVudEluZGV4LCB0cnVlKVxyXG4gICAgICAgIGxldCBwdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdFByZVB0W3RoaXMuY291bnRwdF0pO1xyXG4gICAgICAgIHB0LnBhcmVudCA9IHRoaXMubGlzdFB0O1xyXG4gICAgICAgIHB0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBwdC5wb3NpdGlvbiA9IGNjLnYzKDM4Mi42MDcsIDEyMSlcclxuICAgICAgICBsZXQgcHRDb21wID0gcHQuZ2V0Q29tcG9uZW50KFwicHRcIik7XHJcbiAgICAgICAgcHRDb21wLmJ0biA9IGJ0blxyXG4gICAgICAgIHB0Q29tcC5tYWNoaW5lUGFyZW50TmFtZSA9IHBhcmVudE5hbWVcclxuICAgICAgICBwdENvbXAubWFjaGluZUluZGV4ID0gY3VzQ29tcC5wYXJlbnRJbmRleFxyXG5cclxuICAgICAgICB0aGlzLmNvdW50cHQrKztcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIocHQpXHJcblxyXG4gICAgICAgIH0sIDAuMylcclxuICAgICAgICBpZiAodGhpcy5jb3VudHB0ID4gMykge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50cHQgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0YWcgPSB0aGlzLmdldFB0VGFnKHBhcmVudE5hbWUsIGN1c0NvbXAucGFyZW50SW5kZXgpXHJcbiAgICAgICAgcHRDb21wLnRhZyA9IE51bWJlcih0YWcpXHJcbiAgICAgICAgbGV0IHRhcmdldEN1cyA9IGN1c1xyXG4gICAgICAgIGxldCBmbmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ3VzKE51bWJlcih0YWcpLCB0YXJnZXRDdXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB0Q29tcC5tb3ZlSW4oZm5jKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpc0NvdW50QWN0aW9uID0gMFxyXG4gICAgYWN0aXZlQ3VzKHZhbHVlLCBjdXMgPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGNoYXIgPSBjdXMgJiYgdGhpcy5pc0N1c09uTWFjaGluZShjdXMpID8gY3VzIDogbnVsbFxyXG4gICAgICAgIGlmICghY2hhcikge1xyXG4gICAgICAgICAgICBjaGFyID0gdGhpcy5nZXRDaGFyQnlQdFRhZyh2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjaGFyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImFjdGl2ZUN1czogbWlzc2luZyBjaGFyIGZvciB0YWdcIiwgdmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbW92ZUZyb21XYWl0aW5nKGNoYXIpXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGlmIChjdXNDb21wKSB7XHJcbiAgICAgICAgICAgIGN1c0NvbXAuaXNQdCA9IHRydWVcclxuICAgICAgICAgICAgY3VzQ29tcC5zdG9wV2FpdFByb2dyZXNzKClcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5nYXBCdW5nKClcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygxLCAtMTYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFswXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMF0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCB0aGlzLmFyclBvc0RvbmVbMF0sIDQpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmRheVRhKClcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5VGExLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRheVRhMS5nZXRDaGlsZEJ5TmFtZShcIkcxX0FiQ3J1bmNoXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTE1Ljc3MSArIDE0LCA3IC0gNSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRheVRhMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRheVRhMS5nZXRDaGlsZEJ5TmFtZShcIkcxX0FiQ3J1bmNoXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCB0aGlzLmFyclBvc0RvbmVDcnVuY2hbMF0sIDYpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYm94aW5nMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmJveGluZygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94aW5nMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSA0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIGNjLnYzKDY0NywgLTY2KSwgNilcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgbGV0IG1heURheTIgPSB0aGlzLmFyck1heURheVsxXVxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZGF5VGEoKVxyXG4gICAgICAgICAgICAgICAgbWF5RGF5Mi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgbWF5RGF5Mi5nZXRDaGlsZEJ5TmFtZShcIkcxX0FiQ3J1bmNoXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTE1Ljc3MSArIDE0LCA3IC0gNSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXlEYXkyLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIG1heURheTIuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lQ3J1bmNoWzFdLCA2KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5nYXBCdW5nKClcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygxLCAtMTYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFsxXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMV0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCB0aGlzLmFyclBvc0RvbmVbMV0sIDQpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzJdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFsyXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZVsyXSwgNClcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoMSwgLTE2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbM10uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzNdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lWzNdLCA0KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q2hhckJ5UHRUYWcodmFsdWUpIHtcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIHRoaXMuYXJyQ3J1bmNoWzBdLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiB0aGlzLmRheVRhMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gdGhpcy5ib3hpbmcxLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiB0aGlzLmFyck1heURheVsxXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gdGhpcy5hcnJDcnVuY2hbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHRoaXMuYXJyQ3J1bmNoWzJdLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjYXNlIDY6IHJldHVybiB0aGlzLmFyckNydW5jaFszXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmaW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHBvc0RvbmUsIGNvaW4pIHtcclxuICAgICAgICBpZiAoIWNoYXIgfHwgIWNoYXIuaXNWYWxpZCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tV2FpdGluZyhjaGFyKVxyXG4gICAgICAgIGxldCBkb25lUG9zID0gdGhpcy50b1NvcnRMYXllclBvcyh0aGlzLm5vZGUsIHBvc0RvbmUpXHJcbiAgICAgICAgdGhpcy5hdHRhY2hUb1NvcnRMYXllcihjaGFyKVxyXG4gICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmhhcHB5KClcclxuICAgICAgICBjaGFyLnBvc2l0aW9uID0gZG9uZVBvc1xyXG4gICAgICAgIGNoYXIuc2NhbGUgPSAwLjhcclxuICAgICAgICB0aGlzLmNyZWF0ZUNvaW4oY2hhciwgY29pbilcclxuICAgICAgICBjYy50d2VlbihjaGFyKS5kZWxheSgxKS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgaWYgKCF0aGlzLmd1aWRpbmdJY29uUHQpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVTdGFydGVkKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzR2FtZVN0YXJ0ZWQgPSB0cnVlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygtMjUwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2MpLnRvKDAuOCwgeyB6b29tUmF0aW86IDEuNjUgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFyckljb25QdCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uSWNvblB0KGNoaWxkKVxyXG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFycldhaXRpbmcgPSBbXVxyXG4gICAgICAgIHRoaXMucHRCdXN5TWFjaGluZXMgPSB7fVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNwYXdDdXN0b21lcilcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5hcnJDdXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIGlmIChjdXMgJiYgY3VzLmlzVmFsaWQpIGN1cy5kZXN0cm95KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5baV0uZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXJyQ3VzID0gW11cclxuICAgICAgICB0aGlzLnNwYXdDdXN0b21lcigpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zcGF3Q3VzdG9tZXIsIDMpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBdXRvUGxheSkgdGhpcy50ZXh0R3VpbGQyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuYXJyQ3VzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd0N1c3RvbWVyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICAgICAgfSwgMTUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0R3VpbGQyLmFjdGl2ZSkgY2MudHdlZW4odGhpcy50ZXh0R3VpbGQyKS50bygwLjgsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuem9vbUdhbWUoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDYXJkUGljaygpXHJcbiAgICAgICAgICAgIH0sIDQpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RhcnRHYW1lKClcclxuICAgICAgICB9LCAyMilcclxuXHJcbiAgICB9XHJcbiAgICB6b29tR2FtZSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMC44LCB7IHpvb21SYXRpbzogMiB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDk0LCAtMjk2KSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2MpLnRvKDAuOCwgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygtNTAwLCAtMTAwKSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIHRoaXMuaXNXYWl0aW5nQ2FyZCA9IHRydWVcclxuICAgICAgICB0aGlzLmhpZGVRdWV1ZUhhbmRHdWlkZSA9IHRydWVcclxuICAgICAgICB0aGlzLmhpZGVBbGxRdWV1ZUhhbmRzKClcclxuICAgICAgICB3aGlsZSAodGhpcy5hcnJDdXMubGVuZ3RoIDwgNSAmJiB0aGlzLmFyckN1cy5sZW5ndGggPCB0aGlzLmFyclBvc0N1cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGF3Q3VzdG9tZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICBpZiAoIWN1cyB8fCAhY3VzLmlzVmFsaWQpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgICAgICBpZiAoIWN1c0NvbXApIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGN1c0NvbXAuaXNBbmdyeVdhaXQgPSB0cnVlXHJcbiAgICAgICAgICAgIGlmICghY3VzQ29tcC5pc1F1ZXVlTW92aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjdXNDb21wLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXV0b1BsYXkpIHRoaXMudGV4dEd1aWxkMy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfSwgMC41KVxyXG5cclxuICAgIH1cclxuICAgIHNob3dDYXJkUGljaygpIHtcclxuICAgICAgICBsZXQgcGljayA9IE51bWJlcih0aGlzLmF1dG9DYXJkKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQXV0b1BsYXkpIHtcclxuICAgICAgICAgICAgbGV0IGNhcmRMaXN0ID0gdGhpcy5saXN0Q2FyZC5nZXRDb21wb25lbnQoXCJsaXN0Q2FyZFwiKVxyXG4gICAgICAgICAgICBpZiAoY2FyZExpc3QpIHtcclxuICAgICAgICAgICAgICAgIGNhcmRMaXN0LmxvY2tGb2N1cyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNhcmRMaXN0LmZvY3VzSW5kZXggPSBwaWNrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saXN0Q2FyZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdXRvUGxheSAmJiAhdGhpcy5kaWRBdXRvUGlja0NhcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWRBdXRvUGlja0NhcmQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5saXN0Q2FyZCB8fCAhdGhpcy5saXN0Q2FyZC5hY3RpdmUpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgbGV0IGJvYXJkID0gdGhpcy5saXN0Q2FyZC5nZXRDaGlsZEJ5TmFtZShcImJvYXJkXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgcGlja0NhcmQgPSBib2FyZCAmJiBib2FyZC5jaGlsZHJlbltwaWNrXVxyXG4gICAgICAgICAgICAgICAgaWYgKHBpY2tDYXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGlja0NhcmQpLnRvKDAuMTIsIHsgc2NhbGU6IDEuMjggfSkudG8oMC4xLCB7IHNjYWxlOiAxLjE1IH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrQ2FyZChudWxsLCBwaWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja0NhcmQobnVsbCwgcGljaylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0QXV0b1BsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvUGxheVBoYXNlID0gMFxyXG4gICAgICAgIHRoaXMuYXV0b1BsYXlXYWl0ID0gMFxyXG4gICAgICAgIHRoaXMuaGlkZVF1ZXVlSGFuZEd1aWRlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaGlkZUFsbFF1ZXVlSGFuZHMoKVxyXG4gICAgICAgIHRoaXMuaGlkZUFsbEljb25QdEhhbmRzKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGlja0F1dG9QbGF5LCAwLjI1KVxyXG4gICAgfVxyXG4gICAgdGlja0F1dG9QbGF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kZ2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aWNrQXV0b1BsYXkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hdXRvUGxheVdhaXQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b1BsYXlXYWl0IC09IDAuMjVcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzV2FpdGluZ0NhcmQgfHwgKHRoaXMubGlzdENhcmQgJiYgdGhpcy5saXN0Q2FyZC5hY3RpdmUpKSByZXR1cm5cclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpY2tBdXRvUGxheVR1dG9yaWFsKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0b1BsYXlTZXJ2ZU9uZSgpXHJcbiAgICB9XHJcbiAgICB0aWNrQXV0b1BsYXlUdXRvcmlhbCgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYXV0b1BsYXlQaGFzZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvQ2xpY2tDdXModGhpcy5hcnJDdXNbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvUGxheVBoYXNlID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b1BsYXlXYWl0ID0gMC43XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvQ2xpY2tQdEljb24odGhpcy5hcnJJY29uUHRbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvUGxheVBoYXNlID0gMlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b1BsYXlXYWl0ID0gMS4yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvQ2xpY2tDdXModGhpcy5hcnJDdXNbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvUGxheVBoYXNlID0gM1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b1BsYXlXYWl0ID0gMi40XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvQ2xpY2tQdEljb24odGhpcy5hcnJJY29uUHRbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvUGxheVBoYXNlID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b1BsYXlXYWl0ID0gMS4yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvQ2xpY2tDdXModGhpcy5hcnJDdXNbMl0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvUGxheVBoYXNlID0gNVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b1BsYXlXYWl0ID0gMi44XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvQ2xpY2tQdEljb24odGhpcy5hcnJJY29uUHRbMl0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvUGxheVBoYXNlID0gNlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhdXRvUGxheVNlcnZlT25lKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuQ2xpY2tRdWV1ZUN1cyh0aGlzLmFyckN1c1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b0NsaWNrQ3VzKHRoaXMuYXJyQ3VzW2ldKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvUGxheVdhaXQgPSAwLjg1XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJySWNvblB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkNsaWNrSWNvblB0KHRoaXMuYXJySWNvblB0W2ldKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvQ2xpY2tQdEljb24odGhpcy5hcnJJY29uUHRbaV0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9QbGF5V2FpdCA9IDAuNTVcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXV0b0NsaWNrQ3VzKGN1cykge1xyXG4gICAgICAgIGlmICghY3VzIHx8ICFjdXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8IGN1c0NvbXAuaXNRdWV1ZU1vdmluZykgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IHBvcCA9IHRoaXMuZ2V0Q3VzUG9wKGN1cylcclxuICAgICAgICBpZiAoIXBvcCB8fCAhcG9wLmFjdGl2ZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgY3VzQ29tcC5jbGlja1BvcCh7IGN1cnJlbnRUYXJnZXQ6IHBvcCB9LCBcIlwiKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBhdXRvQ2xpY2tQdEljb24oaWNvbikge1xyXG4gICAgICAgIGlmICghaWNvbiB8fCAhaWNvbi5pc1ZhbGlkIHx8ICFpY29uLmFjdGl2ZUluSGllcmFyY2h5KSByZXR1cm4gZmFsc2VcclxuICAgICAgICB0aGlzLmNsaWNrUHQoeyBjdXJyZW50VGFyZ2V0OiBpY29uIH0sIFwiXCIpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGNsaWNrQ2FyZChldmVudCwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmlzV2FpdGluZ0NhcmQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdENhcmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMC44LCB7IHpvb21SYXRpbzogMSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2MpLnRvKDAuOCwgeyB6b29tUmF0aW86IDEuNSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygtMTAwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgaWYgKHRoaXMudGV4dEd1aWxkMykgdGhpcy50ZXh0R3VpbGQzLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgc3dpdGNoIChOdW1iZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucHRTcGVlZCA9IDEuNVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVRdWV1ZUhhbmRHdWlkZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUFsbFF1ZXVlSGFuZHMoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQWxsSWNvblB0SGFuZHMoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b0ZpbGxNYWNoaW5lc0FuZFB0cygpXHJcbiAgICAgICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dG9QbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvUGxheVdhaXQgPSAxLjZcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250aW51ZUhhbmRHdWlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMS41KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb3VudERvd25UaW1lKDE1KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dG9QbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUXVldWVIYW5kR3VpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlQWxsUXVldWVIYW5kcygpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlQWxsSWNvblB0SGFuZHMoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b1BsYXlXYWl0ID0gMC44XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVF1ZXVlSGFuZEd1aWRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRpbnVlSGFuZEd1aWRlKClcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vdGkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5ub3RpLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub3RpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub3RpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIH0sIDE4LjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uRW5kZ2FtZSgpXHJcbiAgICAgICAgfSwgMjApXHJcbiAgICB9XHJcbiAgICBzaG93Q29udGludWVIYW5kR3VpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlUXVldWVIYW5kR3VpZGUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZ3VpZGluZ0ljb25QdCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zaG93RnJlZUljb25QdEhhbmQoKVxyXG4gICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgIH1cclxuICAgIGF1dG9GaWxsTWFjaGluZXNBbmRQdHMoKSB7XHJcbiAgICAgICAgbGV0IHF1ZXVlID0gdGhpcy5hcnJDdXMuc2xpY2UoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHF1ZXVlW2ldXHJcbiAgICAgICAgICAgIGlmICghY3VzIHx8ICFjdXMuaXNWYWxpZCkgY29udGludWVcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzKSA8IDApIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgICAgICBpZiAoIWN1c0NvbXApIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNGcmVlTWFjaGluZUZvclRhZyhjdXNDb21wLnRhZykpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjdXMpXHJcbiAgICAgICAgICAgIGN1c0NvbXAuaXNRdWV1ZU1vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUN1c1BvcChjdXMpXHJcbiAgICAgICAgICAgIHRoaXMucGxhY2VDdXNPbkZyZWVNYWNoaW5lKGN1cywgY3VzQ29tcC50YWcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0b1NwYXduUHRzKClcclxuICAgIH1cclxuICAgIHBsYWNlQ3VzT25GcmVlTWFjaGluZShjdXMsIHRhZykge1xyXG4gICAgICAgIGlmICh0YWcgPT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3J1bmNoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXJyQ3J1bmNoW2ldLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1c1RvQ3J1bmNoKGN1cywgaSwgdGFnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJNYXlEYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJNYXlEYXlbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzVG9NYXlEYXkoY3VzLCBpLCB0YWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDIpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVDdXNUb0JveGluZyhjdXMsIDAsIHRhZylcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBnZXRGcmVlSWNvblB0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJJY29uUHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJY29uUHRGcmVlKHRoaXMuYXJySWNvblB0W2ldKSkgcmV0dXJuIHRoaXMuYXJySWNvblB0W2ldXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBhdXRvU3Bhd25QdHMoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwV2FpdGluZygpXHJcbiAgICAgICAgbGV0IHdhaXRpbmcgPSB0aGlzLmFycldhaXRpbmcuc2xpY2UoKVxyXG4gICAgICAgIGxldCBkZWxheSA9IDBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdhaXRpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHdhaXRpbmdbaV1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ3VzV2FpdGluZ0ZvclB0KGN1cykpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMuZ2V0RnJlZUljb25QdCgpXHJcbiAgICAgICAgICAgIGlmIChpY29uKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gaWNvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgaWYgKGJ0bikgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKGljb24uY2hpbGRyZW5bMV0pIGljb24uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzcGF3bkN1cyA9IGN1c1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50TmFtZSA9IGN1c0NvbXAucGFyZW50TmFtZVxyXG4gICAgICAgICAgICBsZXQgaWNvbkJ0biA9IGljb25cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzcGF3bkN1cyB8fCAhc3Bhd25DdXMuaXNWYWxpZCB8fCAhdGhpcy5pc0N1c1dhaXRpbmdGb3JQdChzcGF3bkN1cykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbkJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnRuID0gaWNvbkJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuKSBidG4uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGljb25CdG4uY2hpbGRyZW5bMV0pIGljb25CdG4uY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWRkUHQoc3Bhd25DdXMsIHBhcmVudE5hbWUsIGljb25CdG4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGljb25CdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0biA9IGljb25CdG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bikgYnRuLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpY29uQnRuLmNoaWxkcmVuWzFdKSBpY29uQnRuLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBkZWxheSlcclxuICAgICAgICAgICAgZGVsYXkgKz0gMC4xMlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNyZWF0ZUNvaW4obm9kZSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICBsZXQgY29pbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XHJcbiAgICAgICAgY29pbi5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY29pbi5wb3NpdGlvbiA9IHBvcy5hZGQoY2MudjMoMCwgNTApKVxyXG4gICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSA1MFxyXG4gICAgICAgIHRoaXMucGxheVNmeCh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgfVxyXG4gICAgYWN0aXZhdGVTZWF0Q3VzKGNoYXIsIHBhcmVudE5vZGUsIHBhcmVudE5hbWUsIHBhcmVudEluZGV4LCB0YWcpIHtcclxuICAgICAgICBpZiAoIWNoYXIpIHJldHVyblxyXG4gICAgICAgIGNoYXIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNoYXIubmFtZSA9IFwiY2hhclwiXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGlmICghY3VzQ29tcCkgcmV0dXJuXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROYW1lID0gcGFyZW50TmFtZVxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50SW5kZXggPSBwYXJlbnRJbmRleFxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50Tm9kZSA9IHBhcmVudE5vZGVcclxuICAgICAgICBjdXNDb21wLmlzUHQgPSBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmFycldhaXRpbmcuaW5kZXhPZihjaGFyKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnB1c2goY2hhcilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oaWRlQ3VzUG9wKGNoYXIpXHJcbiAgICAgICAgY3VzQ29tcC53YWl0aW5nVGFnKHRhZylcclxuICAgIH1cclxuICAgIG1vdmVDdXModmFsdWUpIHtcclxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb2luLCBmYWxzZSwgMSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVDdXNQb3AodGhpcy5hcnJDdXNbMF0pXHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5hcnJDcnVuY2hbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVTZWF0Q3VzKGNoYXIsIHRoaXMuYXJyQ3J1bmNoWzBdLCBcIkNydW5jaFwiLCAwLCAwKVxyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1swXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUN1c1BvcCh0aGlzLmFyckN1c1sxXSlcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmRheVRhMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVNlYXRDdXMoY2hhciwgdGhpcy5kYXlUYTEsIFwiTWF5RGF5XCIsIDAsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUN1c1BvcCh0aGlzLmFyckN1c1syXSlcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVTZWF0Q3VzKGNoYXIsIHRoaXMuYm94aW5nMSwgXCJCb3hpbmdcIiwgMCwgMilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pblwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzNdLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmJveGluZzIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMi5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNDb3VudEFjdGlvbisrO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRBY3Rpb24gPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYW1lMSgpXHJcblxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgIT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzSGluZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIGlmIChkZXZpY2VSZXNvbHV0aW9uLndpZHRoIDwgZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNDb3VudFN0ZXAgPSAwXHJcblxyXG4gICAgcGxheVNmeChjbGlwLCBsb29wID0gZmFsc2UsIHZvbCA9IDEpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZGdhbWUgfHwgIWNsaXApIHJldHVybiBudWxsXHJcbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBsb29wLCB2b2wpXHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHRoaXMuc2Z4SWRzLnB1c2goaWQpXHJcbiAgICAgICAgcmV0dXJuIGlkXHJcbiAgICB9XHJcbiAgICBzdG9wT3RoZXJTb3VuZHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWRTb3VuZFRpbWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZFRpbWUpXHJcbiAgICAgICAgICAgIHRoaXMuaWRTb3VuZFRpbWUgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZnhJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLnNmeElkc1tpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZnhJZHMgPSBbXVxyXG4gICAgfVxyXG4gICAgb25FbmRnYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kZ2FtZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0VuZGdhbWUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc3Bhd0N1c3RvbWVyKVxyXG4gICAgICAgIHRoaXMuc3RvcE90aGVyU291bmRzKClcclxuICAgICAgICB0aGlzLm1ha2VBbGxDdXNIYXBweSgpXHJcbiAgICAgICAgaWYgKHRoaXMuc291bmRXaW4pIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgLy8gdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhZGRDdXNUb0xpc3QobGlzdCwgbm9kZSkge1xyXG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm5cclxuICAgICAgICBpZiAobGlzdC5pbmRleE9mKG5vZGUpID49IDApIHJldHVyblxyXG4gICAgICAgIGlmICghbm9kZS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikpIHJldHVyblxyXG4gICAgICAgIGxpc3QucHVzaChub2RlKVxyXG4gICAgfVxyXG4gICAgbWFrZUFsbEN1c0hhcHB5KCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB0aGlzLmFkZEN1c1RvTGlzdChsaXN0LCB0aGlzLmFyckN1c1tpXSlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyV2FpdGluZy5sZW5ndGg7IGkrKykgdGhpcy5hZGRDdXNUb0xpc3QobGlzdCwgdGhpcy5hcnJXYWl0aW5nW2ldKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDcnVuY2gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyQ3J1bmNoW2ldKSB0aGlzLmFkZEN1c1RvTGlzdChsaXN0LCB0aGlzLmFyckNydW5jaFtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJNYXlEYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyTWF5RGF5W2ldKSB0aGlzLmFkZEN1c1RvTGlzdChsaXN0LCB0aGlzLmFyck1heURheVtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRheVRhMSkgdGhpcy5hZGRDdXNUb0xpc3QobGlzdCwgdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKVxyXG4gICAgICAgIGlmICh0aGlzLmJveGluZzEpIHRoaXMuYWRkQ3VzVG9MaXN0KGxpc3QsIHRoaXMuYm94aW5nMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpXHJcbiAgICAgICAgaWYgKHRoaXMuYm94aW5nMikgdGhpcy5hZGRDdXNUb0xpc3QobGlzdCwgdGhpcy5ib3hpbmcyLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSlcclxuICAgICAgICBpZiAodGhpcy5zb3J0TGF5ZXIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRMYXllci5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ3VzVG9MaXN0KGxpc3QsIHRoaXMuc29ydExheWVyLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzQ29tcCA9IGxpc3RbaV0uZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgICAgIGlmIChjdXNDb21wKSBjdXNDb21wLmNlbGVicmF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnRDb3VudERvd24oKSB7XHJcbiAgICAgICAgbGV0IHRpbWVDb21wID0gdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oXCJ0aW1lXCIpXHJcbiAgICAgICAgaWYgKHRpbWVDb21wICYmIHRpbWVDb21wLnN0YXJ0Q291bnREb3duKSB7XHJcbiAgICAgICAgICAgIHRpbWVDb21wLnN0YXJ0Q291bnREb3duKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRDb3VudERvd25UaW1lKHNlYykge1xyXG4gICAgICAgIGxldCB0aW1lQ29tcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFwidGltZVwiKVxyXG4gICAgICAgIGlmICh0aW1lQ29tcCAmJiB0aW1lQ29tcC5hZGRUaW1lKSB7XHJcbiAgICAgICAgICAgIHRpbWVDb21wLmFkZFRpbWUoc2VjKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXBvbnNpdmUobG9naWMpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSAobG9naWMpID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gKGxvZ2ljKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMubGJDb2luLnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRnYW1lKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dpYykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmREb2MuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuNSA6IDAuN1xyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5jaGlsZHJlblsxXS55ID0gMFxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5jaGlsZHJlblsxXS5zY2FsZSA9IDEuMjVcclxuICAgICAgICB0aGlzLmVuZENhcmQuY2hpbGRyZW5bMV0ueD0wXHJcblxyXG4gICAgICAgIHRoaXMubG9nby5zY2FsZSA9IChsb2dpYykgPyAxLjUgOiAxXHJcbiAgICAgICAgdGhpcy5saXN0SWNvblB0LnNjYWxlID0gKGxvZ2ljKSA/IDIuMiA6IDEuM1xyXG4gICAgICAgIHRoaXMubGlzdEljb25QdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAobG9naWMpID8gMjMwIDogMTE0Ljg2XHJcbiAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDQ4XHJcbiAgICAgICAgdGhpcy5jYW1lcmFEb2Mubm9kZS5hY3RpdmUgPSBsb2dpYyA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUuYWN0aXZlID0gbG9naWMgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICB0aGlzLmd1aWxkVGltZTEuc2NhbGUgPSBsb2dpYyA/IDIuMiA6IDE7XHJcbiAgICAgICAgdGhpcy50aW1lQmFyLnNjYWxlID0gbG9naWMgPyAxLjUgOiAxXHJcbiAgICAgICAgdGhpcy50aW1lQmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IGxvZ2ljID8gMjUwIDogMTUwXHJcbiAgICAgICAgdGhpcy5ub3RpLnNjYWxlID0gKGxvZ2ljKSA/IDEuOCA6IDFcclxuICAgICAgICB0aGlzLmxpc3RDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuNiA6IDFcclxuICAgICAgICB0aGlzLnRleHRHdWlsZDEuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gKGxvZ2ljKSA/IDU3MCA6IDI3OS43OVxyXG4gICAgICAgIHRoaXMudGV4dEd1aWxkMi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAobG9naWMpID8gNTcwIDogMjc5Ljc5XHJcbiAgICAgICAgdGhpcy50ZXh0R3VpbGQzLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IChsb2dpYykgPyA1NzAgOiAyNzkuNzlcclxuICAgICAgICB0aGlzLnRleHRHdWlsZDEuc2NhbGUgPSAobG9naWMpID8gMS44IDogMVxyXG4gICAgICAgIHRoaXMudGV4dEd1aWxkMi5zY2FsZSA9IChsb2dpYykgPyAxLjggOiAxXHJcbiAgICAgICAgdGhpcy50ZXh0R3VpbGQzLnNjYWxlID0gKGxvZ2ljKSA/IDEuOCA6IDFcclxuICAgICAgICB0aGlzLmxpc3RDYXJkLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICB0aGlzLmVuZENhcmREb2MuY2hpbGRyZW5bMV0uc2NhbGU9MS42NVxyXG4gICAgICAgIGlmIChsb2dpYyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBWw6wgY8OzIHRo4buDIG7hurFtIG5nYW5nIGhv4bq3YyBk4buNYywga2nhu4NtIHRyYSBj4bqjIGhhaSBjaGnhu4F1XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEfhuqduIMSRw7puZyB04bu3IGzhu4cgbcOgbiBow6xuaCBpUGhvbmUgWFxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgY29uc3QgVEFMTF9QSE9ORV9NSU5fUkFUSU8gPSAyLjA7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnBoYW9ob2Euc2NhbGUgPSAobG9naWMpID8gNyA6IDNcclxuICAgICAgICAgICAgaWYgKGFzcGVjdFJhdGlvID49IFRBTExfUEhPTkVfTUlOX1JBVElPKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmREb2MuY2hpbGRyZW5bMV0uc2NhbGUgPSAyXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmREb2MuY2hpbGRyZW5bMV0ueCA9IDE0MDBcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBob25leFwiKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb2luQmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDc3ICsgMzA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNDggKyA3MFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDI1MCArIDcwXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZENhcmQuY2hpbGRyZW5bMV0uc2NhbGU9MS40M1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgaXBhZFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLmNoaWxkcmVuWzFdLnNjYWxlID0gMS4yXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmREb2MuY2hpbGRyZW5bMV0ueCA9IDcwMFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLnNjYWxlID0gMS44XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuY2hpbGRyZW5bMV0uc2NhbGUgPSAxLjQzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuY2hpbGRyZW5bMV0ueSA9IC0yMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAwLjhcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5jaGlsZHJlblsxXS5zY2FsZSA9IDEuMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmNoaWxkcmVuWzFdLnkgPSAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuY2hpbGRyZW5bMV0ueD0xMDBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=