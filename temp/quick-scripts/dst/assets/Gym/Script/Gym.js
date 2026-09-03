
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
                    child.getChildByName("pop").active = true;
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
    };
    NewClass.prototype.offGuild = function () {
        var _this = this;
        cc.audioEngine.stop(this.idSoundTime);
        cc.tween(this.guildTime1.children[0]).to(0.3, { opacity: 0 }).start();
        cc.tween(this.guildTime1.children[1]).to(0.3, { scale: 0 }).start();
        this.scheduleOnce(function () {
            _this.timeBar.active = true;
            _this.textGuild1.active = true;
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
        may.getChildByName("G1_AbCrunch").zIndex = cus.zIndex + 1;
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
        if (this.hideQueueHandGuide)
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
                _this.arrCus[1].getChildByName("pop").getChildByName("hand").active = true;
                _this.arrCus[1].getChildByName("pop").getComponent(cc.Button).enabled = true;
                _this.bringCusPopToFront(_this.arrCus[1]);
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
                _this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true;
                _this.arrCus[2].getChildByName("pop").getComponent(cc.Button).enabled = true;
                _this.bringCusPopToFront(_this.arrCus[2]);
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
                _this.arrCus[2].getChildByName("pop").getChildByName("hand").active = true;
                _this.bringCusPopToFront(_this.arrCus[2]);
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
            _this.textGuild2.active = true;
            while (_this.arrCus.length < 3) {
                _this.spawCustomer();
            }
            _this.updateQueueHand();
        }, 15);
        this.scheduleOnce(function () {
            cc.tween(_this.textGuild2).to(0.8, { opacity: 0 }).start();
            _this.zoomGame();
            _this.scheduleOnce(function () {
                _this.listCard.active = true;
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
    NewClass.prototype.clickCard = function (event, value) {
        var _this = this;
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
                this.scheduleOnce(function () {
                    _this.showContinueHandGuide();
                }, 1.5);
                break;
            case 1:
                this.addCountDownTime(15);
                this.noti.active = true;
                this.noti.children[0].children[0].active = true;
                this.noti.getComponent(cc.Animation).play();
                this.hideQueueHandGuide = false;
                this.scheduleOnce(function () {
                    _this.showContinueHandGuide();
                }, 0.8);
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
            var pop = cus.getChildByName("pop");
            if (pop)
                pop.active = false;
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
        cusComp.waitingTag(tag);
    };
    NewClass.prototype.moveCus = function (value) {
        var _this = this;
        // cc.audioEngine.play(this.soundCoin, false, 1)
        if (value == 1) {
            var char = this.arrCrunch[0].getChildByName("char");
            this.activateSeatCus(char, this.arrCrunch[0], "Crunch", 0, 0);
            this.arrCus[0].active = false;
        }
        else if (value == 2) {
            this.arrCus[1].active = false;
            var char = this.dayTa1.getChildByName("char");
            this.activateSeatCus(char, this.dayTa1, "MayDay", 0, 1);
        }
        else if (value == 3) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXEd5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtBQUVyQjtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZ6Q0M7UUEzekNHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0Isa0JBQVksR0FBWSxJQUFJLENBQUE7UUFFNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFBO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFBO1FBRTlCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsa0JBQVksR0FBWSxJQUFJLENBQUE7UUFFNUIsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFFN0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixZQUFNLEdBQWEsSUFBSSxDQUFBO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFF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RSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDckMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0RSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ2pDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUdYLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUNwRCxJQUFJLE1BQU0sR0FBRyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDO2VBQ3ZDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztlQUMzQyxJQUFJLENBQUMsSUFBSTtlQUNULElBQUksQ0FBQyxJQUFJLENBQUE7UUFFaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxD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LENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDTCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDTCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxH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QUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7U0FDM0Y7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1NBQzNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDNUUsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDOUUsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDOUUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUN0RDtTQUNKO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUM1QyxJQUFJLE9BQU87Z0JBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1NBQ25DO0lBQ0wsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3ZELElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxjQUFjLEVBQUU7WUFDckMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFBO1NBQzVCO0lBQ0wsQ0FBQztJQUNELG1DQUFnQixHQUFoQixVQUFpQixHQUFHO1FBQ2hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkQsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUM5QixRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDekMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQy9DLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTthQUU5QjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTthQUVqQztTQUNKO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUE7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUE7UUFDdEMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFF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QyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzsrQ0FDSztJQUUzQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnREFDTTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUF6Rk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZ6QzVCO0lBQUQsZUFBQztDQTd6Q0QsQUE2ekNDLENBN3pDcUMsRUFBRSxDQUFDLFNBQVMsR0E2ekNqRDtrQkE3ekNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmdsb2JhbFRoaXMuZ29sZCA9IDEwMFxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYURvYzogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbnBjOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBucGMyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3VzTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFBsYWNlUG9zOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q3J1bmNoOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib3hpbmcxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94aW5nMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRCRzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFNob3dQb3A6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZENvaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb25maXJtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kVGltZTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kRG9vcjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZFVwZ3JhZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkVXBncmFkZTI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBoYW9ob2E6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb2luOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGF5VGExOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGxCYXI6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kQ2FyZERvYzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29pbkJhcjogY2MuTm9kZVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0R3VpbGQxOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0R3VpbGQyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0R3VpbGQzOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb29yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEljb25QdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RQdDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc29ydExheWVyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNvaW46IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0UHJlUHQ6IGNjLlByZWZhYltdID0gW11cclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIGxpc3RQcmVDdXM6IGNjLlByZWZhYltdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXJyTWF5RGF5OiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0Q2FyZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGd1aWxkVGltZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1lQmFyOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuXHJcbiAgICBhcnJQb3NEb25lID0gW2NjLnYzKC0yMzksIC0xMzMpLCBjYy52Myg1NywgLTE1NyksIGNjLnYzKC0xMjMsIC0zNiksIGNjLnYzKC0xNCwgNjUpLCBjYy52MygtNTgsIC0yMzUpLCBjYy52MygxOTgsIC01OSldXHJcbiAgICBhcnJQb3NEb25lQ3J1bmNoID0gW2NjLnYzKDIxOCwgLTM5MiksIGNjLnYzKDQwOSwgLTI4OSldXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RDcnVuY2g6Y2MuTm9kZT1udWxsXHJcbiAgICBhcnJQb3NDdXMgPSBbXVxyXG4gICAgYXJyQ3VzID0gW11cclxuICAgIGFyckljb25QdCA9IFtdXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICBhcnJDcnVuY2ggPSBbXVxyXG4gICAgcHRCdXN5TWFjaGluZXMgPSB7fVxyXG4gICAgaXNHYW1lU3RhcnRlZCA9IGZhbHNlXHJcbiAgICBndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgIGhpZGVRdWV1ZUhhbmRHdWlkZSA9IGZhbHNlXHJcbiAgICBpc0hpbmQgPSBmYWxzZVxyXG4gICAgaXNFbmRnYW1lID0gZmFsc2VcclxuICAgIHB0U3BlZWQgPSAxXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgcG9zR2FwQnVuZyA9IGNjLnYzKC0zMCwgLTE5KTtcclxuICAgIHBvc05hbmdUYSA9IGNjLnYzKC01MCwgLTQyKVxyXG4gICAgaWRTb3VuZFRpbWUgPSBudWxsXHJcbiAgICBpZFNvdW5kQkcgPSBudWxsXHJcbiAgICBzZnhJZHMgPSBbXVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWRTb3VuZEJHID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQkcsIHRydWUsIDAuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5taW4oMywgdGhpcy5hcnJDdXMubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmFyckN1c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC42KVxyXG4gICAgICAgIHRoaXMuaWRTb3VuZFRpbWUgPSB0aGlzLnBsYXlTZngodGhpcy5zb3VuZFRpbWUsIHRydWUsIDAuNSlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzLnB1c2godGhpcy5saXN0Q3VzTm9kZS5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RJY29uUHQuY2hpbGRyZW5bMF0uY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJySWNvblB0LnB1c2godGhpcy5saXN0SWNvblB0LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENydW5jaC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2gucHVzaCh0aGlzLmxpc3RDcnVuY2guY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0UGxhY2VQb3MuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbltpXS5wb3NpdGlvblxyXG4gICAgICAgICAgICB0aGlzLmFyclBvc0N1cy5wdXNoKGNjLnYzKHBvcy54LCBwb3MueSwgcG9zLnopKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwU29ydExheWVyKClcclxuICAgICAgICB0aGlzLnJlYnVpbGRRdWV1ZVBvc0luU29ydExheWVyKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIodGhpcy5hcnJDdXNbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmcmVzaFNvcnRMYXllckRlcHRoKClcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmR3VpbGQoKVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcbiAgICBvZmZHdWlsZCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuaWRTb3VuZFRpbWUpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ndWlsZFRpbWUxLmNoaWxkcmVuWzBdKS50bygwLjMsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZ3VpbGRUaW1lMS5jaGlsZHJlblsxXSkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVCYXIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnRleHRHdWlsZDEuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDAuMylcclxuXHJcblxyXG4gICAgfVxyXG4gICAgc2V0dXBTb3J0TGF5ZXIoKSB7XHJcbiAgICAgICAgbGV0IGRvb3JQYXJlbnQgPSB0aGlzLmRvb3IgPyB0aGlzLmRvb3IucGFyZW50IDogbnVsbFxyXG4gICAgICAgIGxldCBwYXJlbnQgPSAoZG9vclBhcmVudCAmJiBkb29yUGFyZW50LnBhcmVudClcclxuICAgICAgICAgICAgfHwgKHRoaXMubGlzdENydW5jaCAmJiB0aGlzLmxpc3RDcnVuY2gucGFyZW50KVxyXG4gICAgICAgICAgICB8fCB0aGlzLmdhbWVcclxuICAgICAgICAgICAgfHwgdGhpcy5ub2RlXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zb3J0TGF5ZXIgfHwgIXRoaXMuc29ydExheWVyLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0TGF5ZXIgPSBuZXcgY2MuTm9kZShcIlNvcnRMYXllclwiKVxyXG4gICAgICAgICAgICB0aGlzLnNvcnRMYXllci5wYXJlbnQgPSBwYXJlbnRcclxuICAgICAgICAgICAgdGhpcy5zb3J0TGF5ZXIuc2V0UG9zaXRpb24oMCwgMClcclxuICAgICAgICAgICAgaWYgKGRvb3JQYXJlbnQgJiYgZG9vclBhcmVudC5wYXJlbnQgPT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0TGF5ZXIuc2V0U2libGluZ0luZGV4KGRvb3JQYXJlbnQuZ2V0U2libGluZ0luZGV4KCkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5saXN0Q3J1bmNoICYmIHRoaXMubGlzdENydW5jaC5wYXJlbnQgPT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0TGF5ZXIuc2V0U2libGluZ0luZGV4KHRoaXMubGlzdENydW5jaC5nZXRTaWJsaW5nSW5kZXgoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5vZGVzID0gW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3J1bmNoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5vZGVzLnB1c2godGhpcy5hcnJDcnVuY2hbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJNYXlEYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyTWF5RGF5W2ldKSBub2Rlcy5wdXNoKHRoaXMuYXJyTWF5RGF5W2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZG9vclBhcmVudCAmJiBkb29yUGFyZW50ICE9PSBwYXJlbnQgJiYgZG9vclBhcmVudCAhPT0gdGhpcy5zb3J0TGF5ZXIpIHtcclxuICAgICAgICAgICAgbm9kZXMucHVzaChkb29yUGFyZW50KVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kb29yKSB7XHJcbiAgICAgICAgICAgIG5vZGVzLnB1c2godGhpcy5kb29yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ib3hpbmcxKSBub2Rlcy5wdXNoKHRoaXMuYm94aW5nMSlcclxuICAgICAgICBpZiAodGhpcy5ib3hpbmcyKSBub2Rlcy5wdXNoKHRoaXMuYm94aW5nMilcclxuICAgICAgICBpZiAodGhpcy5kYXlUYTEpIG5vZGVzLnB1c2godGhpcy5kYXlUYTEpXHJcbiAgICAgICAgaWYgKHRoaXMubGlzdFB0KSBub2Rlcy5wdXNoKHRoaXMubGlzdFB0KVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIobm9kZXNbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmcmVzaFNvcnRMYXllckRlcHRoKClcclxuICAgICAgICB0aGlzLnNldERlcHRoQnlZKHRoaXMuc29ydExheWVyKVxyXG4gICAgfVxyXG5cclxuICAgIHJlYnVpbGRRdWV1ZVBvc0luU29ydExheWVyKCkge1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuc29ydExheWVyXHJcbiAgICAgICAgaWYgKCFsYXllciB8fCAhdGhpcy5saXN0UGxhY2VQb3MpIHJldHVyblxyXG4gICAgICAgIHRoaXMuYXJyUG9zQ3VzID0gW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFBsYWNlUG9zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcGxhY2UgPSB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBsZXQgd29ybGRQb3MgPSBwbGFjZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBsYWNlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSBsYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcylcclxuICAgICAgICAgICAgdGhpcy5hcnJQb3NDdXMucHVzaChjYy52Myhsb2NhbFBvcy54LCBsb2NhbFBvcy55LCBsb2NhbFBvcy56KSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b1NvcnRMYXllclBvcyhmcm9tUGFyZW50LCBsb2NhbFBvcykge1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuc29ydExheWVyIHx8IHRoaXMubm9kZVxyXG4gICAgICAgIGlmICghZnJvbVBhcmVudCB8fCBmcm9tUGFyZW50ID09PSBsYXllcikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjMobG9jYWxQb3MueCwgbG9jYWxQb3MueSwgbG9jYWxQb3MueilcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gZnJvbVBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobG9jYWxQb3MpXHJcbiAgICAgICAgbGV0IHBvcyA9IGxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKVxyXG4gICAgICAgIHJldHVybiBjYy52Myhwb3MueCwgcG9zLnksIHBvcy56KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNvcnRMYXllcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc29ydExheWVyIHx8ICF0aGlzLnNvcnRMYXllci5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBTb3J0TGF5ZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zb3J0TGF5ZXIgfHwgdGhpcy5ub2RlXHJcbiAgICB9XHJcbiAgICBzZXREZXB0aEJ5WShub2RlKSB7XHJcbiAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmlzVmFsaWQpIHJldHVyblxyXG4gICAgICAgIG5vZGUuekluZGV4ID0gLU1hdGgucm91bmQobm9kZS55KVxyXG4gICAgfVxyXG4gICAgYXR0YWNoVG9Tb3J0TGF5ZXIobm9kZSkge1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuc29ydExheWVyIHx8IHRoaXMubm9kZVxyXG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm5cclxuICAgICAgICBpZiAobm9kZS5wYXJlbnQgPT09IGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVwdGhCeVkobm9kZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IG5vZGUucGFyZW50XHJcbiAgICAgICAgICAgID8gbm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgICAgIDogbm9kZS5wb3NpdGlvblxyXG4gICAgICAgIG5vZGUucGFyZW50ID0gbGF5ZXJcclxuICAgICAgICBub2RlLnBvc2l0aW9uID0gbGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpXHJcbiAgICAgICAgdGhpcy5zZXREZXB0aEJ5WShub2RlKVxyXG4gICAgfVxyXG4gICAgcmVmcmVzaFNvcnRMYXllckRlcHRoKCkge1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuc29ydExheWVyXHJcbiAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllci5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXB0aEJ5WShsYXllci5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UXVldWVQb3MoaW5kZXgpIHtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5hcnJQb3NDdXNbaW5kZXhdXHJcbiAgICAgICAgcmV0dXJuIGNjLnYzKHBvcy54LCBwb3MueSwgcG9zLnopXHJcbiAgICB9XHJcbiAgICAvLyBQcmVmYWIgY3VzIG3hurdjIMSR4buLbmggcXVheSB0csOhaSBraGkgc2NhbGVYID0gMVxyXG4gICAgZmFjZUN1c0J5RGlyKGN1cywgZnJvbVBvcywgdG9Qb3MpIHtcclxuICAgICAgICBpZiAoIWN1cyB8fCBNYXRoLmFicyh0b1Bvcy54IC0gZnJvbVBvcy54KSA8IDAuMSkgcmV0dXJuXHJcbiAgICAgICAgY3VzLnNjYWxlWCA9IHRvUG9zLnggPCBmcm9tUG9zLnggPyAxIDogLTFcclxuICAgIH1cclxuICAgIGNvdW50Q3VzID0gMFxyXG4gICAgc3Bhd0N1c3RvbWVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFyckN1cy5sZW5ndGggPj0gdGhpcy5hcnJQb3NDdXMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHF1ZXVlSW5kZXggPSB0aGlzLmFyckN1cy5sZW5ndGhcclxuICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy5nZXRRdWV1ZVBvcyhxdWV1ZUluZGV4KVxyXG4gICAgICAgIGxldCBjdXMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVDdXNbdGhpcy5jb3VudEN1c10pXHJcbiAgICAgICAgbGV0IHNwYXduUGFyZW50ID0gdGhpcy5saXN0Q3VzTm9kZSB8fCB0aGlzLm5vZGVcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLnRvU29ydExheWVyUG9zKHNwYXduUGFyZW50LCBjYy52MygtMTA1MSwgLTYwMCkpXHJcbiAgICAgICAgbGV0IG1pZFBvcyA9IHRoaXMudG9Tb3J0TGF5ZXJQb3Moc3Bhd25QYXJlbnQsIGNjLnYzKC02NzUsIC00MzUpKVxyXG4gICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIoY3VzKVxyXG5cclxuICAgICAgICB0aGlzLmFyckN1cy5wdXNoKGN1cyk7XHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgY3VzQ29tcC5pc1NwYXduZWQgPSB0cnVlXHJcbiAgICAgICAgY3VzQ29tcC5pc1F1ZXVlTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIGN1cy5wb3NpdGlvbiA9IHN0YXJ0UG9zXHJcbiAgICAgICAgLy8gUHJlZmFiIHF1YXkgdHLDoWkgKHNjYWxlWD0xKSDihpIgxJFpIHNhbmcgcGjhuqNpIGPhuqduIHNjYWxlWD0tMVxyXG4gICAgICAgIHRoaXMuZmFjZUN1c0J5RGlyKGN1cywgc3RhcnRQb3MsIG1pZFBvcylcclxuICAgICAgICBsZXQgYW5pbSA9IGN1cy5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrSW5MXCIsIHRydWUpXHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGN1cylcclxuICAgICAgICBjYy50d2VlbihjdXMpLnRvKDEsIHsgcG9zaXRpb246IG1pZFBvcyB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYWNlQ3VzQnlEaXIoY3VzLCBtaWRQb3MsIHBvc0VuZClcclxuICAgICAgICB9KS50bygwLjgsIHsgcG9zaXRpb246IHBvc0VuZCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgY3VzLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgaWYgKGN1c0NvbXAuaXNBbmdyeVdhaXQpIHtcclxuICAgICAgICAgICAgICAgIGN1c0NvbXAudHVjR2lhbigpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhaXRpbmdcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXNDb21wLnNob3dRdWV1ZVBvcCgpXHJcblxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmNvdW50Q3VzKytcclxuICAgICAgICBpZiAodGhpcy5jb3VudEN1cyA+IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudEN1cyA9IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFycldhaXRpbmcgPSBbXVxyXG4gICAgZG9DdXModGFnLCBjdXMpIHtcclxuICAgICAgICB0aGlzLnBsYXlTZngodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPD0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVDdXModGFnKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0SWNvblB0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJJY29uUHRbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckljb25QdFsxXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJySWNvblB0WzFdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckljb25QdFsyXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJySWNvblB0WzJdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3J1bmNoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyckNydW5jaFtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzVG9DcnVuY2goY3VzLCBpLCB0YWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhZyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWF5RGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyck1heURheVtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzVG9NYXlEYXkoY3VzLCBpLCB0YWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhZyA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYm94aW5nMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDdXNUb0JveGluZyhjdXMsIDAsIHRhZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgbGVhdmVRdWV1ZShjdXMpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmFyckN1cy5pbmRleE9mKGN1cylcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm5cclxuICAgICAgICB0aGlzLmFyckN1cy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHF1ZXVlQ3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuZ2V0UXVldWVQb3MoaSlcclxuICAgICAgICAgICAgbGV0IGN1c0NvbXAgPSBxdWV1ZUN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgbGV0IGFuaW0gPSBxdWV1ZUN1cy5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgIGN1c0NvbXAuaXNRdWV1ZU1vdmluZyA9IHRydWVcclxuICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrSW5MXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuZmFjZUN1c0J5RGlyKHF1ZXVlQ3VzLCBxdWV1ZUN1cy5wb3NpdGlvbiwgcG9zRW5kKVxyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQocXVldWVDdXMpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHF1ZXVlQ3VzKS50bygwLjgsIHsgcG9zaXRpb246IHBvc0VuZCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXVlQ3VzLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgICAgIGlmIChjdXNDb21wLmlzQW5ncnlXYWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzQ29tcC50dWNHaWFuKClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXNDb21wLnNob3dRdWV1ZVBvcCgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3ZlQ3VzVG9DcnVuY2goY3VzLCB2YWx1ZSwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5sZWF2ZVF1ZXVlKGN1cylcclxuICAgICAgICBsZXQgY3J1bmNoID0gdGhpcy5hcnJDcnVuY2hbdmFsdWVdO1xyXG4gICAgICAgIGN1cy5wYXJlbnQgPSBjcnVuY2g7XHJcbiAgICAgICAgY3VzLnBvc2l0aW9uID0gdGhpcy5wb3NHYXBCdW5nO1xyXG4gICAgICAgIGN1cy5uYW1lID0gXCJjaGFyXCJcclxuICAgICAgICBjdXMuY2hpbGRyZW5bMF0uc2NhbGUgPSAxXHJcbiAgICAgICAgY3VzLnNjYWxlID0gMVxyXG4gICAgICAgIGN1cy5zY2FsZVggPSAxXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcblxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50TmFtZSA9IFwiQ3J1bmNoXCJcclxuICAgICAgICBjdXNDb21wLnBhcmVudEluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROb2RlID0gY3J1bmNoXHJcblxyXG4gICAgICAgIHRoaXMuYXJyV2FpdGluZy5wdXNoKGN1cylcclxuICAgICAgICBjdXNDb21wLndhaXRpbmdUYWcodGFnKVxyXG4gICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuXHJcbiAgICB9XHJcbiAgICBtb3ZlQ3VzVG9NYXlEYXkoY3VzLCB2YWx1ZSwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5sZWF2ZVF1ZXVlKGN1cylcclxuICAgICAgICBsZXQgbWF5ID0gdGhpcy5hcnJNYXlEYXlbdmFsdWVdXHJcbiAgICAgICAgY3VzLnBhcmVudCA9IG1heTtcclxuICAgICAgICBjdXMucG9zaXRpb24gPSB0aGlzLnBvc05hbmdUYTtcclxuICAgICAgICBjdXMubmFtZSA9IFwiY2hhclwiXHJcbiAgICAgICAgY3VzLmNoaWxkcmVuWzBdLnNjYWxlID0gMTtcclxuICAgICAgICBjdXMuc2NhbGUgPSAxXHJcbiAgICAgICAgY3VzLnNjYWxlWCA9IDFcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBtYXkuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS56SW5kZXggPSBjdXMuekluZGV4ICsgMVxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50TmFtZSA9IFwiTWF5RGF5XCJcclxuICAgICAgICBjdXNDb21wLnBhcmVudEluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROb2RlID0gbWF5XHJcblxyXG4gICAgICAgIHRoaXMuYXJyV2FpdGluZy5wdXNoKGN1cylcclxuICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLndhaXRpbmdUYWcodGFnKVxyXG4gICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgIH1cclxuICAgIG1vdmVDdXNUb0JveGluZyhjdXMsIHZhbHVlLCB0YWcpIHtcclxuICAgICAgICB0aGlzLmxlYXZlUXVldWUoY3VzKVxyXG4gICAgICAgIGN1cy5wYXJlbnQgPSB0aGlzLmJveGluZzFcclxuICAgICAgICBjdXMucG9zaXRpb24gPSBjYy52MygxMjMsIDIzKTtcclxuICAgICAgICBjdXMubmFtZSA9IFwiY2hhclwiXHJcbiAgICAgICAgY3VzLmNoaWxkcmVuWzBdLnNjYWxlID0gMTtcclxuICAgICAgICBjdXMuc2NhbGUgPSAxXHJcbiAgICAgICAgY3VzLnNjYWxlWCA9IDFcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROYW1lID0gXCJCb3hpbmdcIlxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50SW5kZXggPSB2YWx1ZTtcclxuICAgICAgICBjdXNDb21wLnBhcmVudE5vZGUgPSB0aGlzLmJveGluZzFcclxuICAgICAgICB0aGlzLmFycldhaXRpbmcucHVzaChjdXMpXHJcbiAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS53YWl0aW5nVGFnKHRhZylcclxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICB9XHJcbiAgICBvZmZJY29uUHQobm9kZSkge1xyXG4gICAgICAgIG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgb25JY29uUHQobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpc0ljb25QdEZyZWUobm9kZSkge1xyXG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5hY3RpdmUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYgKGJ0biAmJiAhYnRuLmVuYWJsZWQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIC8vIGNoaWxkcmVuWzFdID0gYnVzeSBvdmVybGF5XHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5bMV0gJiYgbm9kZS5jaGlsZHJlblsxXS5hY3RpdmUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBoYXNGcmVlTWFjaGluZUZvclRhZyh0YWcpIHtcclxuICAgICAgICBpZiAodGFnID09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyckNydW5jaFtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YWcgPT0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWF5RGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXJyTWF5RGF5W2ldLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSkgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhZyA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5ib3hpbmcxLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNhbkNsaWNrUXVldWVDdXMoY3VzKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgY3VzQ29tcC5pc1F1ZXVlTW92aW5nKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgcG9wID0gdGhpcy5nZXRDdXNQb3AoY3VzKVxyXG4gICAgICAgIGlmICghcG9wIHx8ICFwb3AuYWN0aXZlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgYnRuID0gcG9wLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYgKGJ0biAmJiAhYnRuLmVuYWJsZWQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA8IDQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0aGlzLmhhc0ZyZWVNYWNoaW5lRm9yVGFnKGN1c0NvbXAudGFnKVxyXG4gICAgfVxyXG4gICAgaGFzQ3VzV2FpdGluZ0ZvclB0KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cFdhaXRpbmcoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJXYWl0aW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ3VzV2FpdGluZ0ZvclB0KHRoaXMuYXJyV2FpdGluZ1tpXSkpIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY2FuQ2xpY2tJY29uUHQobm9kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzSWNvblB0RnJlZShub2RlKSAmJiB0aGlzLmhhc0N1c1dhaXRpbmdGb3JQdCgpXHJcbiAgICB9XHJcbiAgICBoaWRlQWxsSWNvblB0SGFuZHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckljb25QdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaGFuZCA9IHRoaXMuYXJySWNvblB0W2ldLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgICAgICBpZiAoaGFuZCkgaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dGcmVlSWNvblB0SGFuZCgpIHtcclxuICAgICAgICB0aGlzLmhpZGVBbGxJY29uUHRIYW5kcygpXHJcbiAgICAgICAgdGhpcy5oaWRlQWxsUXVldWVIYW5kcygpXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0N1c1dhaXRpbmdGb3JQdCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZGluZ0ljb25QdCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJJY29uUHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGljb24gPSB0aGlzLmFyckljb25QdFtpXVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5DbGlja0ljb25QdChpY29uKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhbmQgPSBpY29uLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgICAgICAgICAgaWYgKGhhbmQpIGhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkaW5nSWNvblB0ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICB9XHJcbiAgICBnZXRDdXNQb3AoY3VzKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGlmIChjdXNDb21wICYmIGN1c0NvbXAucG9wKSByZXR1cm4gY3VzQ29tcC5wb3BcclxuICAgICAgICByZXR1cm4gY3VzLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICB9XHJcbiAgICBoaWRlQWxsUXVldWVIYW5kcygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICBpZiAoIWN1cyB8fCAhY3VzLmlzVmFsaWQpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgICAgICBpZiAoY3VzQ29tcCkgY3VzQ29tcC5yZXNldFBvcExheWVyKClcclxuICAgICAgICAgICAgbGV0IHBvcCA9IHRoaXMuZ2V0Q3VzUG9wKGN1cylcclxuICAgICAgICAgICAgaWYgKCFwb3ApIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBoYW5kID0gcG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgICAgICBpZiAoaGFuZCkgaGFuZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0UXVldWVDdXNEZXB0aCgpXHJcbiAgICB9XHJcbiAgICByZXNldFF1ZXVlQ3VzRGVwdGgoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgaWYgKGN1cyAmJiBjdXMuaXNWYWxpZCkgdGhpcy5zZXREZXB0aEJ5WShjdXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnJpbmdDdXNQb3BUb0Zyb250KGN1cykge1xyXG4gICAgICAgIGlmICghY3VzIHx8ICFjdXMuaXNWYWxpZCkgcmV0dXJuXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8ICFjdXNDb21wLmlzU3Bhd25lZCkgcmV0dXJuXHJcbiAgICAgICAgY3VzQ29tcC5saWZ0UG9wKClcclxuICAgIH1cclxuICAgIHVwZGF0ZVF1ZXVlSGFuZCgpIHtcclxuICAgICAgICB0aGlzLmhpZGVBbGxRdWV1ZUhhbmRzKClcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPCA0KSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5ndWlkaW5nSWNvblB0KSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5oaWRlUXVldWVIYW5kR3VpZGUpIHJldHVyblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGlja1F1ZXVlQ3VzKGN1cykpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBwb3AgPSB0aGlzLmdldEN1c1BvcChjdXMpXHJcbiAgICAgICAgICAgIGlmICghcG9wKSBjb250aW51ZVxyXG4gICAgICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIilcclxuICAgICAgICAgICAgaWYgKGhhbmQpIGhhbmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmJyaW5nQ3VzUG9wVG9Gcm9udChjdXMpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsaWNrUHQoZXZlbnQsIHRhZykge1xyXG4gICAgICAgIGxldCBwdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wbGF5U2Z4KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGJ0bi5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50ZXh0R3VpbGQxKS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHB0ID0gdGhpcy5saXN0UHQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMlxyXG4gICAgICAgICAgICBsZXQgZm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdC5nZXRDb21wb25lbnQoXCJwdFwiKS5tb3ZlSW4oZm5jKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzFdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJyaW5nQ3VzUG9wVG9Gcm9udCh0aGlzLmFyckN1c1sxXSlcclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hUb1NvcnRMYXllcihwdClcclxuXHJcbiAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICAgICAgdGhpcy5vcGVuRG9vcigpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmSWNvblB0KHRoaXMuYXJySWNvblB0WzBdKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBwdCA9IHRoaXMubGlzdFB0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDNcclxuICAgICAgICAgICAgcHQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm9wZW5Eb29yKClcclxuICAgICAgICAgICAgbGV0IGZuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ3VzKDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHQuZ2V0Q29tcG9uZW50KFwicHRcIikubW92ZUluKGZuYylcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckN1c1syXS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJpbmdDdXNQb3BUb0Zyb250KHRoaXMuYXJyQ3VzWzJdKVxyXG5cclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hUb1NvcnRMYXllcihwdClcclxuICAgICAgICAgICAgfSwgMC4yKVxyXG4gICAgICAgICAgICB0aGlzLm9mZkljb25QdCh0aGlzLmFyckljb25QdFsxXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMykge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBwdCA9IHRoaXMubGlzdFB0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDRcclxuICAgICAgICAgICAgcHQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm9wZW5Eb29yKClcclxuXHJcbiAgICAgICAgICAgIGxldCBmbmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUN1cygyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB0LmdldENvbXBvbmVudChcInB0XCIpLm1vdmVJbihmbmMpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckN1c1syXS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5icmluZ0N1c1BvcFRvRnJvbnQodGhpcy5hcnJDdXNbMl0pXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIocHQpXHJcbiAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgdGhpcy5vZmZJY29uUHQodGhpcy5hcnJJY29uUHRbMl0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFudXBXYWl0aW5nKClcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycldhaXRpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFycldhaXRpbmdbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNDdXNXYWl0aW5nRm9yUHQoY3VzKSkgY29udGludWVcclxuICAgICAgICAgICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hZGRQdChjdXMsIGN1c0NvbXAucGFyZW50TmFtZSwgZXZlbnQuY3VycmVudFRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGluZ0ljb25QdCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhbnVwV2FpdGluZygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5hcnJXYWl0aW5nLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0N1c09uTWFjaGluZSh0aGlzLmFycldhaXRpbmdbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycldhaXRpbmcuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0N1c09uTWFjaGluZShjdXMpIHtcclxuICAgICAgICBpZiAoIWN1cyB8fCAhY3VzLmlzVmFsaWQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGlmICghY3VzQ29tcCB8fCAhY3VzQ29tcC5wYXJlbnROb2RlIHx8ICFjdXNDb21wLnBhcmVudE5vZGUuaXNWYWxpZCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaWYgKGN1cy5wYXJlbnQgIT09IGN1c0NvbXAucGFyZW50Tm9kZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaWYgKGN1cy5uYW1lICE9PSBcImNoYXJcIikgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlzQ3VzV2FpdGluZ0ZvclB0KGN1cykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0N1c09uTWFjaGluZShjdXMpKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoY3VzQ29tcC5pc1B0KSByZXR1cm4gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5pc01hY2hpbmVQdEJ1c3koY3VzQ29tcC5wYXJlbnROYW1lLCBjdXNDb21wLnBhcmVudEluZGV4KSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJlbW92ZUZyb21XYWl0aW5nKGN1cykge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuYXJyV2FpdGluZy5pbmRleE9mKGN1cylcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyV2FpdGluZy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFjaGluZUtleShwYXJlbnROYW1lLCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBwYXJlbnROYW1lICsgXCJfXCIgKyBpbmRleFxyXG4gICAgfVxyXG4gICAgaXNNYWNoaW5lUHRCdXN5KHBhcmVudE5hbWUsIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5wdEJ1c3lNYWNoaW5lc1t0aGlzLmdldE1hY2hpbmVLZXkocGFyZW50TmFtZSwgaW5kZXgpXVxyXG4gICAgfVxyXG4gICAgc2V0TWFjaGluZVB0QnVzeShwYXJlbnROYW1lLCBpbmRleCwgYnVzeSkge1xyXG4gICAgICAgIGxldCBrZXkgPSB0aGlzLmdldE1hY2hpbmVLZXkocGFyZW50TmFtZSwgaW5kZXgpXHJcbiAgICAgICAgaWYgKGJ1c3kpIHtcclxuICAgICAgICAgICAgdGhpcy5wdEJ1c3lNYWNoaW5lc1trZXldID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnB0QnVzeU1hY2hpbmVzW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWxlYXNlTWFjaGluZVB0KHBhcmVudE5hbWUsIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZXRNYWNoaW5lUHRCdXN5KHBhcmVudE5hbWUsIGluZGV4LCBmYWxzZSlcclxuICAgIH1cclxuICAgIGdldFB0VGFnKHBhcmVudE5hbWUsIHBhcmVudEluZGV4KSB7XHJcbiAgICAgICAgc3dpdGNoIChwYXJlbnROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDcnVuY2hcIjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiAwXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gNFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIDVcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiA2XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIk1heURheVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudEluZGV4ID09PSAwID8gMSA6IDNcclxuICAgICAgICAgICAgY2FzZSBcIkJveGluZ1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDJcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY291bnRwdCA9IDBcclxuICAgIHBsYXlEb29yQW5pbShhbmltTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRvb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5kb29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoYW5pbU5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheVNmeCh0aGlzLnNvdW5kRG9vciwgZmFsc2UsIDEpXHJcbiAgICB9XHJcbiAgICBvcGVuRG9vcigpIHtcclxuICAgICAgICB0aGlzLnBsYXlEb29yQW5pbShcImRvb3Jfb3BlblwiKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5RG9vckFuaW0oXCJkb29yX2Nsb3NlXCIpXHJcbiAgICAgICAgfSwgMC43KVxyXG4gICAgfVxyXG4gICAgYWRkUHQoY3VzLCBwYXJlbnROYW1lLCBidG4pIHtcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ3VzV2FpdGluZ0ZvclB0KGN1cykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3BlbkRvb3IoKTtcclxuICAgICAgICBjdXNDb21wLmlzUHQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zZXRNYWNoaW5lUHRCdXN5KHBhcmVudE5hbWUsIGN1c0NvbXAucGFyZW50SW5kZXgsIHRydWUpXHJcbiAgICAgICAgbGV0IHB0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJlUHRbdGhpcy5jb3VudHB0XSk7XHJcbiAgICAgICAgcHQucGFyZW50ID0gdGhpcy5saXN0UHQ7XHJcbiAgICAgICAgcHQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHB0LnBvc2l0aW9uID0gY2MudjMoMzgyLjYwNywgMTIxKVxyXG4gICAgICAgIGxldCBwdENvbXAgPSBwdC5nZXRDb21wb25lbnQoXCJwdFwiKTtcclxuICAgICAgICBwdENvbXAuYnRuID0gYnRuXHJcbiAgICAgICAgcHRDb21wLm1hY2hpbmVQYXJlbnROYW1lID0gcGFyZW50TmFtZVxyXG4gICAgICAgIHB0Q29tcC5tYWNoaW5lSW5kZXggPSBjdXNDb21wLnBhcmVudEluZGV4XHJcblxyXG4gICAgICAgIHRoaXMuY291bnRwdCsrO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hUb1NvcnRMYXllcihwdClcclxuXHJcbiAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50cHQgPiAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRwdCA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRhZyA9IHRoaXMuZ2V0UHRUYWcocGFyZW50TmFtZSwgY3VzQ29tcC5wYXJlbnRJbmRleClcclxuICAgICAgICBwdENvbXAudGFnID0gTnVtYmVyKHRhZylcclxuICAgICAgICBsZXQgdGFyZ2V0Q3VzID0gY3VzXHJcbiAgICAgICAgbGV0IGZuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoTnVtYmVyKHRhZyksIHRhcmdldEN1cylcclxuICAgICAgICB9XHJcbiAgICAgICAgcHRDb21wLm1vdmVJbihmbmMpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlzQ291bnRBY3Rpb24gPSAwXHJcbiAgICBhY3RpdmVDdXModmFsdWUsIGN1cyA9IG51bGwpIHtcclxuICAgICAgICBsZXQgY2hhciA9IGN1cyAmJiB0aGlzLmlzQ3VzT25NYWNoaW5lKGN1cykgPyBjdXMgOiBudWxsXHJcbiAgICAgICAgaWYgKCFjaGFyKSB7XHJcbiAgICAgICAgICAgIGNoYXIgPSB0aGlzLmdldENoYXJCeVB0VGFnKHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNoYXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiYWN0aXZlQ3VzOiBtaXNzaW5nIGNoYXIgZm9yIHRhZ1wiLCB2YWx1ZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbVdhaXRpbmcoY2hhcilcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKGN1c0NvbXApIHtcclxuICAgICAgICAgICAgY3VzQ29tcC5pc1B0ID0gdHJ1ZVxyXG4gICAgICAgICAgICBjdXNDb21wLnN0b3BXYWl0UHJvZ3Jlc3MoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZVswXSwgNClcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZGF5VGEoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiRzFfQWJDcnVuY2hcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygtMTUuNzcxICsgMTQsIDcgLSA1KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF5VGExLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiRzFfQWJDcnVuY2hcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZUNydW5jaFswXSwgNilcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3hpbmcxLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuYm94aW5nKClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hpbmcxLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgY2MudjMoNjQ3LCAtNjYpLCA2KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF5RGF5MiA9IHRoaXMuYXJyTWF5RGF5WzFdXHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5kYXlUYSgpXHJcbiAgICAgICAgICAgICAgICBtYXlEYXkyLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBtYXlEYXkyLmdldENoaWxkQnlOYW1lKFwiRzFfQWJDcnVuY2hcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygtMTUuNzcxICsgMTQsIDcgLSA1KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heURheTIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgbWF5RGF5Mi5nZXRDaGlsZEJ5TmFtZShcIkcxX0FiQ3J1bmNoXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCB0aGlzLmFyclBvc0RvbmVDcnVuY2hbMV0sIDYpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzFdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFsxXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZVsxXSwgNClcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoMSwgLTE2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMl0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzJdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lWzJdLCA0KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5nYXBCdW5nKClcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygxLCAtMTYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFszXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbM10uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCB0aGlzLmFyclBvc0RvbmVbM10sIDQpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBnZXRDaGFyQnlQdFRhZyh2YWx1ZSkge1xyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gdGhpcy5hcnJDcnVuY2hbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiB0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRoaXMuYXJyTWF5RGF5WzFdLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiB0aGlzLmFyckNydW5jaFsxXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gdGhpcy5hcnJDcnVuY2hbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIHRoaXMuYXJyQ3J1bmNoWzNdLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpbmlzaEN1c1dvcmtvdXQoY2hhciwgcG9zRG9uZSwgY29pbikge1xyXG4gICAgICAgIGlmICghY2hhciB8fCAhY2hhci5pc1ZhbGlkKSByZXR1cm5cclxuICAgICAgICB0aGlzLnJlbW92ZUZyb21XYWl0aW5nKGNoYXIpXHJcbiAgICAgICAgbGV0IGRvbmVQb3MgPSB0aGlzLnRvU29ydExheWVyUG9zKHRoaXMubm9kZSwgcG9zRG9uZSlcclxuICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKGNoYXIpXHJcbiAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuaGFwcHkoKVxyXG4gICAgICAgIGNoYXIucG9zaXRpb24gPSBkb25lUG9zXHJcbiAgICAgICAgY2hhci5zY2FsZSA9IDAuOFxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29pbihjaGFyLCBjb2luKVxyXG4gICAgICAgIGNjLnR3ZWVuKGNoYXIpLmRlbGF5KDEpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuICAgICAgICBpZiAoIXRoaXMuZ3VpZGluZ0ljb25QdCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZVN0YXJ0ZWQpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNHYW1lU3RhcnRlZCA9IHRydWVcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKC0yNTAsIDApIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYykudG8oMC44LCB7IHpvb21SYXRpbzogMS42NSB9KS5zdGFydCgpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYXJySWNvblB0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub25JY29uUHQoY2hpbGQpXHJcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXJyV2FpdGluZyA9IFtdXHJcbiAgICAgICAgdGhpcy5wdEJ1c3lNYWNoaW5lcyA9IHt9XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc3Bhd0N1c3RvbWVyKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmFyckN1cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgaWYgKGN1cyAmJiBjdXMuaXNWYWxpZCkgY3VzLmRlc3Ryb3koKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5saXN0Q3VzTm9kZS5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q3VzTm9kZS5jaGlsZHJlbltpXS5kZXN0cm95KClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcnJDdXMgPSBbXVxyXG4gICAgICAgIHRoaXMuc3Bhd0N1c3RvbWVyKClcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNwYXdDdXN0b21lciwgMylcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkMi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmFyckN1cy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXdDdXN0b21lcigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgIH0sIDE1KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50ZXh0R3VpbGQyKS50bygwLjgsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuem9vbUdhbWUoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDYXJkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfSwgNClcclxuICAgICAgICAgICAgLy8gdGhpcy5zdGFydEdhbWUoKVxyXG4gICAgICAgIH0sIDIyKVxyXG5cclxuICAgIH1cclxuICAgIHpvb21HYW1lKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjgsIHsgem9vbVJhdGlvOiAyIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYS5ub2RlKS50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKC00OTQsIC0yOTYpIH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYykudG8oMC44LCB7IHpvb21SYXRpbzogMi41IH0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYURvYy5ub2RlKS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKC01MDAsIC0xMDApIH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdGhpcy5oaWRlUXVldWVIYW5kR3VpZGUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5oaWRlQWxsUXVldWVIYW5kcygpXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXJyQ3VzLmxlbmd0aCA8IDUgJiYgdGhpcy5hcnJDdXMubGVuZ3RoIDwgdGhpcy5hcnJQb3NDdXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd0N1c3RvbWVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSBjb250aW51ZVxyXG4gICAgICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgaWYgKCFjdXNDb21wKSBjb250aW51ZVxyXG4gICAgICAgICAgICBjdXNDb21wLmlzQW5ncnlXYWl0ID0gdHJ1ZVxyXG4gICAgICAgICAgICBpZiAoIWN1c0NvbXAuaXNRdWV1ZU1vdmluZykge1xyXG4gICAgICAgICAgICAgICAgY3VzQ29tcC50dWNHaWFuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkMy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfSwgMC41KVxyXG5cclxuICAgIH1cclxuICAgIGNsaWNrQ2FyZChldmVudCwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmxpc3RDYXJkLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuOCwgeyB6b29tUmF0aW86IDEgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jKS50bygwLjgsIHsgem9vbVJhdGlvOiAxLjUgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTEwMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIGlmICh0aGlzLnRleHRHdWlsZDMpIHRoaXMudGV4dEd1aWxkMy5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHN3aXRjaCAoTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB0U3BlZWQgPSAxLjVcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlUXVldWVIYW5kR3VpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVBbGxRdWV1ZUhhbmRzKClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUFsbEljb25QdEhhbmRzKClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9GaWxsTWFjaGluZXNBbmRQdHMoKVxyXG4gICAgICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRpbnVlSGFuZEd1aWRlKClcclxuICAgICAgICAgICAgICAgIH0sIDEuNSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ291bnREb3duVGltZSgxNSlcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlUXVldWVIYW5kR3VpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRpbnVlSGFuZEd1aWRlKClcclxuICAgICAgICAgICAgICAgIH0sIDAuOClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm90aS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vdGkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5vdGkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5vdGkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAgICAgfSwgMTguNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRnYW1lKClcclxuICAgICAgICB9LCAyMClcclxuICAgIH1cclxuICAgIHNob3dDb250aW51ZUhhbmRHdWlkZSgpIHtcclxuICAgICAgICB0aGlzLmhpZGVRdWV1ZUhhbmRHdWlkZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNob3dGcmVlSWNvblB0SGFuZCgpXHJcbiAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgfVxyXG4gICAgYXV0b0ZpbGxNYWNoaW5lc0FuZFB0cygpIHtcclxuICAgICAgICBsZXQgcXVldWUgPSB0aGlzLmFyckN1cy5zbGljZSgpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gcXVldWVbaV1cclxuICAgICAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSBjb250aW51ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJDdXMuaW5kZXhPZihjdXMpIDwgMCkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgICAgIGlmICghY3VzQ29tcCkgY29udGludWVcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0ZyZWVNYWNoaW5lRm9yVGFnKGN1c0NvbXAudGFnKSkgY29udGludWVcclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGN1cylcclxuICAgICAgICAgICAgY3VzQ29tcC5pc1F1ZXVlTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgbGV0IHBvcCA9IGN1cy5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICBpZiAocG9wKSBwb3AuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5wbGFjZUN1c09uRnJlZU1hY2hpbmUoY3VzLCBjdXNDb21wLnRhZylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRvU3Bhd25QdHMoKVxyXG4gICAgfVxyXG4gICAgcGxhY2VDdXNPbkZyZWVNYWNoaW5lKGN1cywgdGFnKSB7XHJcbiAgICAgICAgaWYgKHRhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDcnVuY2gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJDcnVuY2hbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzVG9DcnVuY2goY3VzLCBpLCB0YWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyck1heURheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyck1heURheVtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDdXNUb01heURheShjdXMsIGksIHRhZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYm94aW5nMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1c1RvQm94aW5nKGN1cywgMCwgdGFnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGdldEZyZWVJY29uUHQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckljb25QdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ljb25QdEZyZWUodGhpcy5hcnJJY29uUHRbaV0pKSByZXR1cm4gdGhpcy5hcnJJY29uUHRbaV1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGF1dG9TcGF3blB0cygpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBXYWl0aW5nKClcclxuICAgICAgICBsZXQgd2FpdGluZyA9IHRoaXMuYXJyV2FpdGluZy5zbGljZSgpXHJcbiAgICAgICAgbGV0IGRlbGF5ID0gMFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2FpdGluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gd2FpdGluZ1tpXVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDdXNXYWl0aW5nRm9yUHQoY3VzKSkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgICAgIGxldCBpY29uID0gdGhpcy5nZXRGcmVlSWNvblB0KClcclxuICAgICAgICAgICAgaWYgKGljb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBpY29uLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuKSBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoaWNvbi5jaGlsZHJlblsxXSkgaWNvbi5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNwYXduQ3VzID0gY3VzXHJcbiAgICAgICAgICAgIGxldCBwYXJlbnROYW1lID0gY3VzQ29tcC5wYXJlbnROYW1lXHJcbiAgICAgICAgICAgIGxldCBpY29uQnRuID0gaWNvblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNwYXduQ3VzIHx8ICFzcGF3bkN1cy5pc1ZhbGlkIHx8ICF0aGlzLmlzQ3VzV2FpdGluZ0ZvclB0KHNwYXduQ3VzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpY29uQnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG4gPSBpY29uQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4pIGJ0bi5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbkJ0bi5jaGlsZHJlblsxXSkgaWNvbkJ0bi5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hZGRQdChzcGF3bkN1cywgcGFyZW50TmFtZSwgaWNvbkJ0bikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbkJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnRuID0gaWNvbkJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuKSBidG4uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGljb25CdG4uY2hpbGRyZW5bMV0pIGljb25CdG4uY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGRlbGF5KVxyXG4gICAgICAgICAgICBkZWxheSArPSAwLjEyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlQ29pbihub2RlLCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbilcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIGxldCBjb2luID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcclxuICAgICAgICBjb2luLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjb2luLnBvc2l0aW9uID0gcG9zLmFkZChjYy52MygwLCA1MCkpXHJcbiAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDUwXHJcbiAgICAgICAgdGhpcy5wbGF5U2Z4KHRoaXMuc291bmRDb2luLCBmYWxzZSwgMSlcclxuXHJcbiAgICB9XHJcbiAgICBhY3RpdmF0ZVNlYXRDdXMoY2hhciwgcGFyZW50Tm9kZSwgcGFyZW50TmFtZSwgcGFyZW50SW5kZXgsIHRhZykge1xyXG4gICAgICAgIGlmICghY2hhcikgcmV0dXJuXHJcbiAgICAgICAgY2hhci5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgY2hhci5uYW1lID0gXCJjaGFyXCJcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wKSByZXR1cm5cclxuICAgICAgICBjdXNDb21wLnBhcmVudE5hbWUgPSBwYXJlbnROYW1lXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnRJbmRleCA9IHBhcmVudEluZGV4XHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROb2RlID0gcGFyZW50Tm9kZVxyXG4gICAgICAgIGN1c0NvbXAuaXNQdCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuYXJyV2FpdGluZy5pbmRleE9mKGNoYXIpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFycldhaXRpbmcucHVzaChjaGFyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXNDb21wLndhaXRpbmdUYWcodGFnKVxyXG4gICAgfVxyXG4gICAgbW92ZUN1cyh2YWx1ZSkge1xyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5hcnJDcnVuY2hbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVTZWF0Q3VzKGNoYXIsIHRoaXMuYXJyQ3J1bmNoWzBdLCBcIkNydW5jaFwiLCAwLCAwKVxyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1swXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVTZWF0Q3VzKGNoYXIsIHRoaXMuZGF5VGExLCBcIk1heURheVwiLCAwLCAxKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1syXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuYm94aW5nMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVNlYXRDdXMoY2hhciwgdGhpcy5ib3hpbmcxLCBcIkJveGluZ1wiLCAwLCAyKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDJcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbM10uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0NvdW50QWN0aW9uKys7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudEFjdGlvbiA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhbWUxKClcclxuXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNIaW5kID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0NvdW50U3RlcCA9IDBcclxuXHJcbiAgICBwbGF5U2Z4KGNsaXAsIGxvb3AgPSBmYWxzZSwgdm9sID0gMSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kZ2FtZSB8fCAhY2xpcCkgcmV0dXJuIG51bGxcclxuICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGxvb3AsIHZvbClcclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkgdGhpcy5zZnhJZHMucHVzaChpZClcclxuICAgICAgICByZXR1cm4gaWRcclxuICAgIH1cclxuICAgIHN0b3BPdGhlclNvdW5kcygpIHtcclxuICAgICAgICBpZiAodGhpcy5pZFNvdW5kVGltZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5pZFNvdW5kVGltZSlcclxuICAgICAgICAgICAgdGhpcy5pZFNvdW5kVGltZSA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeElkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuc2Z4SWRzW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNmeElkcyA9IFtdXHJcbiAgICB9XHJcbiAgICBvbkVuZGdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRnYW1lKSByZXR1cm5cclxuICAgICAgICB0aGlzLmlzRW5kZ2FtZSA9IHRydWVcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zcGF3Q3VzdG9tZXIpXHJcbiAgICAgICAgdGhpcy5zdG9wT3RoZXJTb3VuZHMoKVxyXG4gICAgICAgIHRoaXMubWFrZUFsbEN1c0hhcHB5KClcclxuICAgICAgICBpZiAodGhpcy5zb3VuZFdpbikgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV2luLCBmYWxzZSwgMSlcclxuICAgICAgICAvLyB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICAgIGFkZEN1c1RvTGlzdChsaXN0LCBub2RlKSB7XHJcbiAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmlzVmFsaWQpIHJldHVyblxyXG4gICAgICAgIGlmIChsaXN0LmluZGV4T2Yobm9kZSkgPj0gMCkgcmV0dXJuXHJcbiAgICAgICAgaWYgKCFub2RlLmdldENvbXBvbmVudChcImN1c0d5bVwiKSkgcmV0dXJuXHJcbiAgICAgICAgbGlzdC5wdXNoKG5vZGUpXHJcbiAgICB9XHJcbiAgICBtYWtlQWxsQ3VzSGFwcHkoKSB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHRoaXMuYWRkQ3VzVG9MaXN0KGxpc3QsIHRoaXMuYXJyQ3VzW2ldKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJXYWl0aW5nLmxlbmd0aDsgaSsrKSB0aGlzLmFkZEN1c1RvTGlzdChsaXN0LCB0aGlzLmFycldhaXRpbmdbaV0pXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJDcnVuY2hbaV0pIHRoaXMuYWRkQ3VzVG9MaXN0KGxpc3QsIHRoaXMuYXJyQ3J1bmNoW2ldLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyck1heURheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJNYXlEYXlbaV0pIHRoaXMuYWRkQ3VzVG9MaXN0KGxpc3QsIHRoaXMuYXJyTWF5RGF5W2ldLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF5VGExKSB0aGlzLmFkZEN1c1RvTGlzdChsaXN0LCB0aGlzLmRheVRhMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpXHJcbiAgICAgICAgaWYgKHRoaXMuYm94aW5nMSkgdGhpcy5hZGRDdXNUb0xpc3QobGlzdCwgdGhpcy5ib3hpbmcxLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSlcclxuICAgICAgICBpZiAodGhpcy5ib3hpbmcyKSB0aGlzLmFkZEN1c1RvTGlzdChsaXN0LCB0aGlzLmJveGluZzIuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKVxyXG4gICAgICAgIGlmICh0aGlzLnNvcnRMYXllcikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc29ydExheWVyLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDdXNUb0xpc3QobGlzdCwgdGhpcy5zb3J0TGF5ZXIuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gbGlzdFtpXS5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgaWYgKGN1c0NvbXApIGN1c0NvbXAuY2VsZWJyYXRlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydENvdW50RG93bigpIHtcclxuICAgICAgICBsZXQgdGltZUNvbXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihcInRpbWVcIilcclxuICAgICAgICBpZiAodGltZUNvbXAgJiYgdGltZUNvbXAuc3RhcnRDb3VudERvd24pIHtcclxuICAgICAgICAgICAgdGltZUNvbXAuc3RhcnRDb3VudERvd24oKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZENvdW50RG93blRpbWUoc2VjKSB7XHJcbiAgICAgICAgbGV0IHRpbWVDb21wID0gdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oXCJ0aW1lXCIpXHJcbiAgICAgICAgaWYgKHRpbWVDb21wICYmIHRpbWVDb21wLmFkZFRpbWUpIHtcclxuICAgICAgICAgICAgdGltZUNvbXAuYWRkVGltZShzZWMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IChsb2dpYykgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICBjYW52YXMuZml0V2lkdGggPSAobG9naWMpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5sYkNvaW4uc3RyaW5nID0gZ2xvYmFsVGhpcy5nb2xkLnRvU3RyaW5nKClcclxuICAgICAgICBpZiAodGhpcy5pc0VuZGdhbWUpIHtcclxuICAgICAgICAgICAgaWYgKGxvZ2ljKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmREb2MuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMS41IDogMC43XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLmNoaWxkcmVuWzFdLnkgPSAwXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLmNoaWxkcmVuWzFdLnNjYWxlID0gMS4yNVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5jaGlsZHJlblsxXS54PTBcclxuXHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDEuNSA6IDFcclxuICAgICAgICB0aGlzLmxpc3RJY29uUHQuc2NhbGUgPSAobG9naWMpID8gMi4yIDogMS4zXHJcbiAgICAgICAgdGhpcy5saXN0SWNvblB0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IChsb2dpYykgPyAyMzAgOiAxMTQuODZcclxuICAgICAgICB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNDhcclxuICAgICAgICB0aGlzLmNhbWVyYURvYy5ub2RlLmFjdGl2ZSA9IGxvZ2ljID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5hY3RpdmUgPSBsb2dpYyA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIHRoaXMuZ3VpbGRUaW1lMS5zY2FsZSA9IGxvZ2ljID8gMi4yIDogMTtcclxuICAgICAgICB0aGlzLnRpbWVCYXIuc2NhbGUgPSBsb2dpYyA/IDEuNSA6IDFcclxuICAgICAgICB0aGlzLnRpbWVCYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gbG9naWMgPyAyNTAgOiAxNTBcclxuICAgICAgICB0aGlzLm5vdGkuc2NhbGUgPSAobG9naWMpID8gMS44IDogMVxyXG4gICAgICAgIHRoaXMubGlzdENhcmQuc2NhbGUgPSAobG9naWMpID8gMS42IDogMVxyXG4gICAgICAgIHRoaXMudGV4dEd1aWxkMS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAobG9naWMpID8gNTcwIDogMjc5Ljc5XHJcbiAgICAgICAgdGhpcy50ZXh0R3VpbGQyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IChsb2dpYykgPyA1NzAgOiAyNzkuNzlcclxuICAgICAgICB0aGlzLnRleHRHdWlsZDMuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gKGxvZ2ljKSA/IDU3MCA6IDI3OS43OVxyXG4gICAgICAgIHRoaXMudGV4dEd1aWxkMS5zY2FsZSA9IChsb2dpYykgPyAxLjggOiAxXHJcbiAgICAgICAgdGhpcy50ZXh0R3VpbGQyLnNjYWxlID0gKGxvZ2ljKSA/IDEuOCA6IDFcclxuICAgICAgICB0aGlzLnRleHRHdWlsZDMuc2NhbGUgPSAobG9naWMpID8gMS44IDogMVxyXG4gICAgICAgIHRoaXMubGlzdENhcmQuc2NhbGUgPSAobG9naWMpID8gMS43IDogMVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZERvYy5jaGlsZHJlblsxXS5zY2FsZT0xLjY1XHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICBjb25zdCBUQUxMX1BIT05FX01JTl9SQVRJTyA9IDIuMDtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMucGhhb2hvYS5zY2FsZSA9IChsb2dpYykgPyA3IDogM1xyXG4gICAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPj0gVEFMTF9QSE9ORV9NSU5fUkFUSU8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5jaGlsZHJlblsxXS5zY2FsZSA9IDJcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5jaGlsZHJlblsxXS54ID0gMTQwMFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVjayBpcGhvbmV4XCIpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvaW5CYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNzcgKyAzMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nby5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA0OCArIDcwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjUwICsgNzBcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5kQ2FyZC5jaGlsZHJlblsxXS5zY2FsZT0xLjQzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBpcGFkXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmREb2MuY2hpbGRyZW5bMV0uc2NhbGUgPSAxLjJcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5jaGlsZHJlblsxXS54ID0gNzAwXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlsZFVwZ3JhZGUuc2NhbGUgPSAxLjhcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5jaGlsZHJlblsxXS5zY2FsZSA9IDEuNDNcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5jaGlsZHJlblsxXS55ID0gLTIwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkLmNoaWxkcmVuWzFdLnNjYWxlID0gMS4xXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuY2hpbGRyZW5bMV0ueSA9IDBcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZC5jaGlsZHJlblsxXS54PTEwMFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==