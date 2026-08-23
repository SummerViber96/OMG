
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
        if (cusComp)
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
                this.ptSpeed = 1.;
                this.noti.active = true;
                this.noti.children[0].children[1].active = true;
                this.noti.getComponent(cc.Animation).play();
                this.unschedule(this.spawCustomer);
                this.hideQueueHandGuide = true;
                this.hideAllQueueHands();
                this.hideAllIconPtHands();
                this.scheduleOnce(function () {
                    _this.autoFillMachinesAndPts();
                }, 0.5);
                this.scheduleOnce(function () {
                    _this.noti.children[0].children[0].active = false;
                    _this.noti.children[0].children[1].active = false;
                    _this.noti.children[0].children[2].active = true;
                    _this.noti.active = true;
                    _this.noti.getComponent(cc.Animation).play();
                }, 8.5);
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
            _this.onEndgame();
        }, 10);
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
            this.phaohoa.scale = (logic) ? 7 : 3;
            if (aspectRatio >= TALL_PHONE_MIN_RATIO) {
                // console.log("check iphonex")
                // this.coinBar.getComponent(cc.Widget).top = 77 + 30;
                this.logo.getComponent(cc.Widget).top = 48 + 70;
                this.timeBar.getComponent(cc.Widget).top = 250 + 70;
            }
            else if (Math.abs(aspectRatio - IPAD_RATIO) < TOLERANCE) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXEd5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtBQUVyQjtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTB5Q0M7UUF4eUNHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0Isa0JBQVksR0FBWSxJQUFJLENBQUE7UUFFNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFBO1FBRTlCLGVBQVMsR0FBaUIsSUFBSSxDQUFBO1FBRTlCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsa0JBQVksR0FBWSxJQUFJLENBQUE7UUFFNUIsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFFN0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixZQUFNLEdBQWEsSUFBSSxDQUFBO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFF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RSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDckMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0RSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ2pDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUdYLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUNwRCxJQUFJLE1BQU0sR0FBRyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDO2VBQ3ZDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztlQUMzQyxJQUFJLENBQUMsSUFBSTtlQUNULElBQUksQ0FBQyxJQUFJLENBQUE7UUFFaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxD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SSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN0RCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ0wsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQzNDLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN0RCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ0wsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxD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QUFDLENBQUMsS0FBSyxDQUFBO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QyxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFJaEMsc0RBQXNEO1lBQ3RELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXRFLG1DQUFtQztZQUNuQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFVLFNBQVM7WUFDakQsSUFBTSxvQkFBb0IsR0FBRyxHQUFHLENBQUM7WUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDcEMsSUFBSSxXQUFXLElBQUksb0JBQW9CLEVBQUU7Z0JBQ3JDLCtCQUErQjtnQkFDL0Isc0RBQXNEO2dCQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUE7Z0JBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQTthQUN0RDtpQkFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxHQUFHLFNBQVMsRUFBRTtnQkFFckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO2FBRWhDO1NBQ0o7YUFDSTtZQUNELElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBRWhDLHNEQUFzRDtZQUN0RCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV0RSxtQ0FBbUM7WUFDbkMsSUFBTSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsU0FBUztZQUNsRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFVLFNBQVM7WUFFakQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLFNBQVMsRUFBRTthQUU5RDtpQkFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxHQUFHLFNBQVMsRUFBRTtnQkFDckQsOEJBQThCO2FBQ2pDO1NBQ0o7SUFHTCxDQUFDO0lBdnlDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1E7SUFNNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ007SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0Y7SUFFaEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7K0NBQ0s7SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0RBQ007SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBekZOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EweUM1QjtJQUFELGVBQUM7Q0ExeUNELEFBMHlDQyxDQTF5Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBMHlDakQ7a0JBMXlDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5nbG9iYWxUaGlzLmdvbGQgPSAxMDBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmFEb2M6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIG5wYzogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gbnBjMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1c05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RQbGFjZVBvczogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENydW5jaDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94aW5nMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJveGluZzI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQkc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ29uZmlybTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFRpbWU6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZERvb3I6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpbGRVcGdyYWRlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZFVwZ3JhZGUyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvaG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ29pbjogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRheVRhMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmREb2M6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvaW5CYXI6IGNjLk5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJY29uUHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UHQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNvcnRMYXllcjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDb2luOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdFByZVB0OiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0UHJlQ3VzOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFyck1heURheTogY2MuTm9kZVtdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vdGk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZFRpbWUxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGltZUJhcjogY2MuTm9kZSA9IG51bGxcclxuXHJcblxyXG4gICAgYXJyUG9zRG9uZSA9IFtjYy52MygtMjM5LCAtMTMzKSwgY2MudjMoNTcsIC0xNTcpLCBjYy52MygtMTIzLCAtMzYpLCBjYy52MygtMTQsIDY1KSwgY2MudjMoLTU4LCAtMjM1KSwgY2MudjMoMTk4LCAtNTkpXVxyXG4gICAgYXJyUG9zRG9uZUNydW5jaCA9IFtjYy52MygyMTgsIC0zOTIpLCBjYy52Myg0MDksIC0yODkpXVxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBsaXN0Q3J1bmNoOmNjLk5vZGU9bnVsbFxyXG4gICAgYXJyUG9zQ3VzID0gW11cclxuICAgIGFyckN1cyA9IFtdXHJcbiAgICBhcnJJY29uUHQgPSBbXVxyXG4gICAgaXNTdGVwID0gMFxyXG4gICAgYXJyQ3J1bmNoID0gW11cclxuICAgIHB0QnVzeU1hY2hpbmVzID0ge31cclxuICAgIGlzR2FtZVN0YXJ0ZWQgPSBmYWxzZVxyXG4gICAgZ3VpZGluZ0ljb25QdCA9IGZhbHNlXHJcbiAgICBoaWRlUXVldWVIYW5kR3VpZGUgPSBmYWxzZVxyXG4gICAgaXNIaW5kID0gZmFsc2VcclxuICAgIGlzRW5kZ2FtZSA9IGZhbHNlXHJcbiAgICBwdFNwZWVkID0gMVxyXG4gICAgYWRDaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgIHBvc0dhcEJ1bmcgPSBjYy52MygtMzAsIC0xOSk7XHJcbiAgICBwb3NOYW5nVGEgPSBjYy52MygtNTAsIC00MilcclxuICAgIGlkU291bmRUaW1lID0gbnVsbFxyXG4gICAgaWRTb3VuZEJHID0gbnVsbFxyXG4gICAgc2Z4SWRzID0gW11cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlkU291bmRCRyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJHLCB0cnVlLCAwLjUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKDMsIHRoaXMuYXJyQ3VzLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5hcnJDdXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuNilcclxuICAgICAgICB0aGlzLmlkU291bmRUaW1lID0gdGhpcy5wbGF5U2Z4KHRoaXMuc291bmRUaW1lLCB0cnVlLCAwLjUpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDdXNOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1cy5wdXNoKHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0SWNvblB0LmNoaWxkcmVuWzBdLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckljb25QdC5wdXNoKHRoaXMubGlzdEljb25QdC5jaGlsZHJlblswXS5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDcnVuY2guY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoLnB1c2godGhpcy5saXN0Q3J1bmNoLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFBsYWNlUG9zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5saXN0UGxhY2VQb3MuY2hpbGRyZW5baV0ucG9zaXRpb25cclxuICAgICAgICAgICAgdGhpcy5hcnJQb3NDdXMucHVzaChjYy52Myhwb3MueCwgcG9zLnksIHBvcy56KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cFNvcnRMYXllcigpXHJcbiAgICAgICAgdGhpcy5yZWJ1aWxkUXVldWVQb3NJblNvcnRMYXllcigpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKHRoaXMuYXJyQ3VzW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2hTb3J0TGF5ZXJEZXB0aCgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9mZkd1aWxkKClcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG4gICAgb2ZmR3VpbGQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmRUaW1lKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZ3VpbGRUaW1lMS5jaGlsZHJlblswXSkudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmd1aWxkVGltZTEuY2hpbGRyZW5bMV0pLnRvKDAuMywgeyBzY2FsZTogMCB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aW1lQmFyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQxLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwLjMpXHJcblxyXG5cclxuICAgIH1cclxuICAgIHNldHVwU29ydExheWVyKCkge1xyXG4gICAgICAgIGxldCBkb29yUGFyZW50ID0gdGhpcy5kb29yID8gdGhpcy5kb29yLnBhcmVudCA6IG51bGxcclxuICAgICAgICBsZXQgcGFyZW50ID0gKGRvb3JQYXJlbnQgJiYgZG9vclBhcmVudC5wYXJlbnQpXHJcbiAgICAgICAgICAgIHx8ICh0aGlzLmxpc3RDcnVuY2ggJiYgdGhpcy5saXN0Q3J1bmNoLnBhcmVudClcclxuICAgICAgICAgICAgfHwgdGhpcy5nYW1lXHJcbiAgICAgICAgICAgIHx8IHRoaXMubm9kZVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc29ydExheWVyIHx8ICF0aGlzLnNvcnRMYXllci5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydExheWVyID0gbmV3IGNjLk5vZGUoXCJTb3J0TGF5ZXJcIilcclxuICAgICAgICAgICAgdGhpcy5zb3J0TGF5ZXIucGFyZW50ID0gcGFyZW50XHJcbiAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFBvc2l0aW9uKDAsIDApXHJcbiAgICAgICAgICAgIGlmIChkb29yUGFyZW50ICYmIGRvb3JQYXJlbnQucGFyZW50ID09PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFNpYmxpbmdJbmRleChkb29yUGFyZW50LmdldFNpYmxpbmdJbmRleCgpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlzdENydW5jaCAmJiB0aGlzLmxpc3RDcnVuY2gucGFyZW50ID09PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFNpYmxpbmdJbmRleCh0aGlzLmxpc3RDcnVuY2guZ2V0U2libGluZ0luZGV4KCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBub2RlcyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRoaXMuYXJyQ3J1bmNoW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWF5RGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyck1heURheVtpXSkgbm9kZXMucHVzaCh0aGlzLmFyck1heURheVtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRvb3JQYXJlbnQgJiYgZG9vclBhcmVudCAhPT0gcGFyZW50ICYmIGRvb3JQYXJlbnQgIT09IHRoaXMuc29ydExheWVyKSB7XHJcbiAgICAgICAgICAgIG5vZGVzLnB1c2goZG9vclBhcmVudClcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG9vcikge1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRoaXMuZG9vcilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm94aW5nMSkgbm9kZXMucHVzaCh0aGlzLmJveGluZzEpXHJcbiAgICAgICAgaWYgKHRoaXMuYm94aW5nMikgbm9kZXMucHVzaCh0aGlzLmJveGluZzIpXHJcbiAgICAgICAgaWYgKHRoaXMuZGF5VGExKSBub2Rlcy5wdXNoKHRoaXMuZGF5VGExKVxyXG4gICAgICAgIGlmICh0aGlzLmxpc3RQdCkgbm9kZXMucHVzaCh0aGlzLmxpc3RQdClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKG5vZGVzW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2hTb3J0TGF5ZXJEZXB0aCgpXHJcbiAgICAgICAgdGhpcy5zZXREZXB0aEJ5WSh0aGlzLnNvcnRMYXllcilcclxuICAgIH1cclxuXHJcbiAgICByZWJ1aWxkUXVldWVQb3NJblNvcnRMYXllcigpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllclxyXG4gICAgICAgIGlmICghbGF5ZXIgfHwgIXRoaXMubGlzdFBsYWNlUG9zKSByZXR1cm5cclxuICAgICAgICB0aGlzLmFyclBvc0N1cyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBsYWNlID0gdGhpcy5saXN0UGxhY2VQb3MuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgbGV0IHdvcmxkUG9zID0gcGxhY2UucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwbGFjZS5wb3NpdGlvbilcclxuICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gbGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyUG9zQ3VzLnB1c2goY2MudjMobG9jYWxQb3MueCwgbG9jYWxQb3MueSwgbG9jYWxQb3MueikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9Tb3J0TGF5ZXJQb3MoZnJvbVBhcmVudCwgbG9jYWxQb3MpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllciB8fCB0aGlzLm5vZGVcclxuICAgICAgICBpZiAoIWZyb21QYXJlbnQgfHwgZnJvbVBhcmVudCA9PT0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYzKGxvY2FsUG9zLngsIGxvY2FsUG9zLnksIGxvY2FsUG9zLnopXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGZyb21QYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGxvY2FsUG9zKVxyXG4gICAgICAgIGxldCBwb3MgPSBsYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcylcclxuICAgICAgICByZXR1cm4gY2MudjMocG9zLngsIHBvcy55LCBwb3MueilcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0TGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNvcnRMYXllciB8fCAhdGhpcy5zb3J0TGF5ZXIuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwU29ydExheWVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydExheWVyIHx8IHRoaXMubm9kZVxyXG4gICAgfVxyXG4gICAgc2V0RGVwdGhCeVkobm9kZSkge1xyXG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm5cclxuICAgICAgICBub2RlLnpJbmRleCA9IC1NYXRoLnJvdW5kKG5vZGUueSlcclxuICAgIH1cclxuICAgIGF0dGFjaFRvU29ydExheWVyKG5vZGUpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllciB8fCB0aGlzLm5vZGVcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuXHJcbiAgICAgICAgaWYgKG5vZGUucGFyZW50ID09PSBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldERlcHRoQnlZKG5vZGUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBub2RlLnBhcmVudFxyXG4gICAgICAgICAgICA/IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICA6IG5vZGUucG9zaXRpb25cclxuICAgICAgICBub2RlLnBhcmVudCA9IGxheWVyXHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKVxyXG4gICAgICAgIHRoaXMuc2V0RGVwdGhCeVkobm9kZSlcclxuICAgIH1cclxuICAgIHJlZnJlc2hTb3J0TGF5ZXJEZXB0aCgpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllclxyXG4gICAgICAgIGlmICghbGF5ZXIpIHJldHVyblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVwdGhCeVkobGF5ZXIuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFF1ZXVlUG9zKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuYXJyUG9zQ3VzW2luZGV4XVxyXG4gICAgICAgIHJldHVybiBjYy52Myhwb3MueCwgcG9zLnksIHBvcy56KVxyXG4gICAgfVxyXG4gICAgLy8gUHJlZmFiIGN1cyBt4bq3YyDEkeG7i25oIHF1YXkgdHLDoWkga2hpIHNjYWxlWCA9IDFcclxuICAgIGZhY2VDdXNCeURpcihjdXMsIGZyb21Qb3MsIHRvUG9zKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgTWF0aC5hYnModG9Qb3MueCAtIGZyb21Qb3MueCkgPCAwLjEpIHJldHVyblxyXG4gICAgICAgIGN1cy5zY2FsZVggPSB0b1Bvcy54IDwgZnJvbVBvcy54ID8gMSA6IC0xXHJcbiAgICB9XHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIHNwYXdDdXN0b21lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5hcnJDdXMubGVuZ3RoID49IHRoaXMuYXJyUG9zQ3VzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBxdWV1ZUluZGV4ID0gdGhpcy5hcnJDdXMubGVuZ3RoXHJcbiAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuZ2V0UXVldWVQb3MocXVldWVJbmRleClcclxuICAgICAgICBsZXQgY3VzID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJlQ3VzW3RoaXMuY291bnRDdXNdKVxyXG4gICAgICAgIGxldCBzcGF3blBhcmVudCA9IHRoaXMubGlzdEN1c05vZGUgfHwgdGhpcy5ub2RlXHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy50b1NvcnRMYXllclBvcyhzcGF3blBhcmVudCwgY2MudjMoLTEwNTEsIC02MDApKVxyXG4gICAgICAgIGxldCBtaWRQb3MgPSB0aGlzLnRvU29ydExheWVyUG9zKHNwYXduUGFyZW50LCBjYy52MygtNjc1LCAtNDM1KSlcclxuICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKGN1cylcclxuXHJcbiAgICAgICAgdGhpcy5hcnJDdXMucHVzaChjdXMpO1xyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGN1c0NvbXAuaXNRdWV1ZU1vdmluZyA9IHRydWVcclxuICAgICAgICBjdXMucG9zaXRpb24gPSBzdGFydFBvc1xyXG4gICAgICAgIC8vIFByZWZhYiBxdWF5IHRyw6FpIChzY2FsZVg9MSkg4oaSIMSRaSBzYW5nIHBo4bqjaSBj4bqnbiBzY2FsZVg9LTFcclxuICAgICAgICB0aGlzLmZhY2VDdXNCeURpcihjdXMsIHN0YXJ0UG9zLCBtaWRQb3MpXHJcbiAgICAgICAgbGV0IGFuaW0gPSBjdXMuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0luTFwiLCB0cnVlKVxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjdXMpXHJcbiAgICAgICAgY2MudHdlZW4oY3VzKS50bygxLCB7IHBvc2l0aW9uOiBtaWRQb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjZUN1c0J5RGlyKGN1cywgbWlkUG9zLCBwb3NFbmQpXHJcbiAgICAgICAgfSkudG8oMC44LCB7IHBvc2l0aW9uOiBwb3NFbmQgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cy5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIGlmIChjdXNDb21wLmlzQW5ncnlXYWl0KSB7XHJcbiAgICAgICAgICAgICAgICBjdXNDb21wLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nXCIsIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VzQ29tcC5zaG93UXVldWVQb3AoKVxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5jb3VudEN1cysrXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPiA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRDdXMgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhcnJXYWl0aW5nID0gW11cclxuICAgIGRvQ3VzKHRhZywgY3VzKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5U2Z4KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwIDw9IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzKHRhZylcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEljb25QdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJySWNvblB0WzBdLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJJY29uUHRbMV0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckljb25QdFsxXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJJY29uUHRbMl0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckljb25QdFsyXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0YWcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJDcnVuY2hbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1c1RvQ3J1bmNoKGN1cywgaSwgdGFnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YWcgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyck1heURheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJNYXlEYXlbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1c1RvTWF5RGF5KGN1cywgaSwgdGFnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YWcgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzVG9Cb3hpbmcoY3VzLCAwLCB0YWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGxlYXZlUXVldWUoY3VzKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5hcnJDdXMuaW5kZXhPZihjdXMpXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5hcnJDdXMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBxdWV1ZUN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIGxldCBwb3NFbmQgPSB0aGlzLmdldFF1ZXVlUG9zKGkpXHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gcXVldWVDdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgICAgIGxldCBhbmltID0gcXVldWVDdXMuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICBjdXNDb21wLmlzUXVldWVNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0luTFwiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLmZhY2VDdXNCeURpcihxdWV1ZUN1cywgcXVldWVDdXMucG9zaXRpb24sIHBvc0VuZClcclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHF1ZXVlQ3VzKVxyXG4gICAgICAgICAgICBjYy50d2VlbihxdWV1ZUN1cykudG8oMC44LCB7IHBvc2l0aW9uOiBwb3NFbmQgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWV1ZUN1cy5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VzQ29tcC5pc0FuZ3J5V2FpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c0NvbXAudHVjR2lhbigpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2FpdGluZ1wiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VzQ29tcC5zaG93UXVldWVQb3AoKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZUN1c1RvQ3J1bmNoKGN1cywgdmFsdWUsIHRhZykge1xyXG4gICAgICAgIHRoaXMubGVhdmVRdWV1ZShjdXMpXHJcbiAgICAgICAgbGV0IGNydW5jaCA9IHRoaXMuYXJyQ3J1bmNoW3ZhbHVlXTtcclxuICAgICAgICBjdXMucGFyZW50ID0gY3J1bmNoO1xyXG4gICAgICAgIGN1cy5wb3NpdGlvbiA9IHRoaXMucG9zR2FwQnVuZztcclxuICAgICAgICBjdXMubmFtZSA9IFwiY2hhclwiXHJcbiAgICAgICAgY3VzLmNoaWxkcmVuWzBdLnNjYWxlID0gMVxyXG4gICAgICAgIGN1cy5zY2FsZSA9IDFcclxuICAgICAgICBjdXMuc2NhbGVYID0gMVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG5cclxuICAgICAgICBjdXNDb21wLnBhcmVudE5hbWUgPSBcIkNydW5jaFwiXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnRJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgIGN1c0NvbXAucGFyZW50Tm9kZSA9IGNydW5jaFxyXG5cclxuICAgICAgICB0aGlzLmFycldhaXRpbmcucHVzaChjdXMpXHJcbiAgICAgICAgY3VzQ29tcC53YWl0aW5nVGFnKHRhZylcclxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcblxyXG4gICAgfVxyXG4gICAgbW92ZUN1c1RvTWF5RGF5KGN1cywgdmFsdWUsIHRhZykge1xyXG4gICAgICAgIHRoaXMubGVhdmVRdWV1ZShjdXMpXHJcbiAgICAgICAgbGV0IG1heSA9IHRoaXMuYXJyTWF5RGF5W3ZhbHVlXVxyXG4gICAgICAgIGN1cy5wYXJlbnQgPSBtYXk7XHJcbiAgICAgICAgY3VzLnBvc2l0aW9uID0gdGhpcy5wb3NOYW5nVGE7XHJcbiAgICAgICAgY3VzLm5hbWUgPSBcImNoYXJcIlxyXG4gICAgICAgIGN1cy5jaGlsZHJlblswXS5zY2FsZSA9IDE7XHJcbiAgICAgICAgY3VzLnNjYWxlID0gMVxyXG4gICAgICAgIGN1cy5zY2FsZVggPSAxXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgbWF5LmdldENoaWxkQnlOYW1lKFwiRzFfQWJDcnVuY2hcIikuekluZGV4ID0gY3VzLnpJbmRleCArIDFcclxuICAgICAgICBjdXNDb21wLnBhcmVudE5hbWUgPSBcIk1heURheVwiXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnRJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgIGN1c0NvbXAucGFyZW50Tm9kZSA9IG1heVxyXG5cclxuICAgICAgICB0aGlzLmFycldhaXRpbmcucHVzaChjdXMpXHJcbiAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS53YWl0aW5nVGFnKHRhZylcclxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICB9XHJcbiAgICBtb3ZlQ3VzVG9Cb3hpbmcoY3VzLCB2YWx1ZSwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5sZWF2ZVF1ZXVlKGN1cylcclxuICAgICAgICBjdXMucGFyZW50ID0gdGhpcy5ib3hpbmcxXHJcbiAgICAgICAgY3VzLnBvc2l0aW9uID0gY2MudjMoMTIzLCAyMyk7XHJcbiAgICAgICAgY3VzLm5hbWUgPSBcImNoYXJcIlxyXG4gICAgICAgIGN1cy5jaGlsZHJlblswXS5zY2FsZSA9IDE7XHJcbiAgICAgICAgY3VzLnNjYWxlID0gMVxyXG4gICAgICAgIGN1cy5zY2FsZVggPSAxXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcblxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50TmFtZSA9IFwiQm94aW5nXCJcclxuICAgICAgICBjdXNDb21wLnBhcmVudEluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROb2RlID0gdGhpcy5ib3hpbmcxXHJcbiAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnB1c2goY3VzKVxyXG4gICAgICAgIGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikud2FpdGluZ1RhZyh0YWcpXHJcbiAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgfVxyXG4gICAgb2ZmSWNvblB0KG5vZGUpIHtcclxuICAgICAgICBub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuICAgIG9uSWNvblB0KG5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZGluZ0ljb25QdCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaXNJY29uUHRGcmVlKG5vZGUpIHtcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuYWN0aXZlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgYnRuID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGlmIChidG4gJiYgIWJ0bi5lbmFibGVkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICAvLyBjaGlsZHJlblsxXSA9IGJ1c3kgb3ZlcmxheVxyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuWzFdICYmIG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaGFzRnJlZU1hY2hpbmVGb3JUYWcodGFnKSB7XHJcbiAgICAgICAgaWYgKHRhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDcnVuY2gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJDcnVuY2hbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFnID09IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyck1heURheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyck1heURheVtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YWcgPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuYm94aW5nMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjYW5DbGlja1F1ZXVlQ3VzKGN1cykge1xyXG4gICAgICAgIGlmICghY3VzIHx8ICFjdXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8IGN1c0NvbXAuaXNRdWV1ZU1vdmluZykgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IHBvcCA9IHRoaXMuZ2V0Q3VzUG9wKGN1cylcclxuICAgICAgICBpZiAoIXBvcCB8fCAhcG9wLmFjdGl2ZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGJ0biA9IHBvcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGlmIChidG4gJiYgIWJ0bi5lbmFibGVkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPCA0KSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXNGcmVlTWFjaGluZUZvclRhZyhjdXNDb21wLnRhZylcclxuICAgIH1cclxuICAgIGhhc0N1c1dhaXRpbmdGb3JQdCgpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBXYWl0aW5nKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyV2FpdGluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0N1c1dhaXRpbmdGb3JQdCh0aGlzLmFycldhaXRpbmdbaV0pKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNhbkNsaWNrSWNvblB0KG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0ljb25QdEZyZWUobm9kZSkgJiYgdGhpcy5oYXNDdXNXYWl0aW5nRm9yUHQoKVxyXG4gICAgfVxyXG4gICAgaGlkZUFsbEljb25QdEhhbmRzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJJY29uUHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGhhbmQgPSB0aGlzLmFyckljb25QdFtpXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIilcclxuICAgICAgICAgICAgaWYgKGhhbmQpIGhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93RnJlZUljb25QdEhhbmQoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQWxsSWNvblB0SGFuZHMoKVxyXG4gICAgICAgIHRoaXMuaGlkZUFsbFF1ZXVlSGFuZHMoKVxyXG4gICAgICAgIGlmICghdGhpcy5oYXNDdXNXYWl0aW5nRm9yUHQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJySWNvblB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gdGhpcy5hcnJJY29uUHRbaV1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuQ2xpY2tJY29uUHQoaWNvbikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kID0gaWNvbi5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIilcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGluZ0ljb25QdCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3VpZGluZ0ljb25QdCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VzUG9wKGN1cykge1xyXG4gICAgICAgIGlmICghY3VzIHx8ICFjdXMuaXNWYWxpZCkgcmV0dXJuIG51bGxcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoY3VzQ29tcCAmJiBjdXNDb21wLnBvcCkgcmV0dXJuIGN1c0NvbXAucG9wXHJcbiAgICAgICAgcmV0dXJuIGN1cy5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgfVxyXG4gICAgaGlkZUFsbFF1ZXVlSGFuZHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSBjb250aW51ZVxyXG4gICAgICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgaWYgKGN1c0NvbXApIGN1c0NvbXAucmVzZXRQb3BMYXllcigpXHJcbiAgICAgICAgICAgIGxldCBwb3AgPSB0aGlzLmdldEN1c1BvcChjdXMpXHJcbiAgICAgICAgICAgIGlmICghcG9wKSBjb250aW51ZVxyXG4gICAgICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIilcclxuICAgICAgICAgICAgaWYgKGhhbmQpIGhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldFF1ZXVlQ3VzRGVwdGgoKVxyXG4gICAgfVxyXG4gICAgcmVzZXRRdWV1ZUN1c0RlcHRoKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIGlmIChjdXMgJiYgY3VzLmlzVmFsaWQpIHRoaXMuc2V0RGVwdGhCeVkoY3VzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJyaW5nQ3VzUG9wVG9Gcm9udChjdXMpIHtcclxuICAgICAgICBpZiAoIWN1cyB8fCAhY3VzLmlzVmFsaWQpIHJldHVyblxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGlmIChjdXNDb21wKSBjdXNDb21wLmxpZnRQb3AoKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlUXVldWVIYW5kKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUFsbFF1ZXVlSGFuZHMoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA8IDQpIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLmd1aWRpbmdJY29uUHQpIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLmhpZGVRdWV1ZUhhbmRHdWlkZSkgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrUXVldWVDdXMoY3VzKSkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IHBvcCA9IHRoaXMuZ2V0Q3VzUG9wKGN1cylcclxuICAgICAgICAgICAgaWYgKCFwb3ApIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBoYW5kID0gcG9wLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgICAgICBpZiAoaGFuZCkgaGFuZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYnJpbmdDdXNQb3BUb0Zyb250KGN1cylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xpY2tQdChldmVudCwgdGFnKSB7XHJcbiAgICAgICAgbGV0IHB0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBsYXlTZngodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ0bi5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnRleHRHdWlsZDEpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgcHQgPSB0aGlzLmxpc3RQdC5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSAyXHJcbiAgICAgICAgICAgIGxldCBmbmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUN1cygwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB0LmdldENvbXBvbmVudChcInB0XCIpLm1vdmVJbihmbmMpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckN1c1sxXS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJpbmdDdXNQb3BUb0Zyb250KHRoaXMuYXJyQ3VzWzFdKVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKHB0KVxyXG5cclxuICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICB0aGlzLm9wZW5Eb29yKClcclxuICAgICAgICAgICAgdGhpcy5vZmZJY29uUHQodGhpcy5hcnJJY29uUHRbMF0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHB0ID0gdGhpcy5saXN0UHQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gM1xyXG4gICAgICAgICAgICBwdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMub3BlbkRvb3IoKVxyXG4gICAgICAgICAgICBsZXQgZm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdC5nZXRDb21wb25lbnQoXCJwdFwiKS5tb3ZlSW4oZm5jKVxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckN1c1syXS5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5icmluZ0N1c1BvcFRvRnJvbnQodGhpcy5hcnJDdXNbMl0pXHJcblxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKHB0KVxyXG4gICAgICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmSWNvblB0KHRoaXMuYXJySWNvblB0WzFdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHB0ID0gdGhpcy5saXN0UHQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gNFxyXG4gICAgICAgICAgICBwdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMub3BlbkRvb3IoKVxyXG5cclxuICAgICAgICAgICAgbGV0IGZuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ3VzKDIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHQuZ2V0Q29tcG9uZW50KFwicHRcIikubW92ZUluKGZuYylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJyaW5nQ3VzUG9wVG9Gcm9udCh0aGlzLmFyckN1c1syXSlcclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hUb1NvcnRMYXllcihwdClcclxuICAgICAgICAgICAgfSwgMC4yKVxyXG4gICAgICAgICAgICB0aGlzLm9mZkljb25QdCh0aGlzLmFyckljb25QdFsyXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cFdhaXRpbmcoKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyV2FpdGluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyV2FpdGluZ1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0N1c1dhaXRpbmdGb3JQdChjdXMpKSBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFkZFB0KGN1cywgY3VzQ29tcC5wYXJlbnROYW1lLCBldmVudC5jdXJyZW50VGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsZWFudXBXYWl0aW5nKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmFycldhaXRpbmcubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ3VzT25NYWNoaW5lKHRoaXMuYXJyV2FpdGluZ1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyV2FpdGluZy5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzQ3VzT25NYWNoaW5lKGN1cykge1xyXG4gICAgICAgIGlmICghY3VzIHx8ICFjdXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKCFjdXNDb21wIHx8ICFjdXNDb21wLnBhcmVudE5vZGUgfHwgIWN1c0NvbXAucGFyZW50Tm9kZS5pc1ZhbGlkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBpZiAoY3VzLnBhcmVudCAhPT0gY3VzQ29tcC5wYXJlbnROb2RlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBpZiAoY3VzLm5hbWUgIT09IFwiY2hhclwiKSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaXNDdXNXYWl0aW5nRm9yUHQoY3VzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ3VzT25NYWNoaW5lKGN1cykpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGlmIChjdXNDb21wLmlzUHQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmlzTWFjaGluZVB0QnVzeShjdXNDb21wLnBhcmVudE5hbWUsIGN1c0NvbXAucGFyZW50SW5kZXgpKSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlRnJvbVdhaXRpbmcoY3VzKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5hcnJXYWl0aW5nLmluZGV4T2YoY3VzKVxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNYWNoaW5lS2V5KHBhcmVudE5hbWUsIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudE5hbWUgKyBcIl9cIiArIGluZGV4XHJcbiAgICB9XHJcbiAgICBpc01hY2hpbmVQdEJ1c3kocGFyZW50TmFtZSwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLnB0QnVzeU1hY2hpbmVzW3RoaXMuZ2V0TWFjaGluZUtleShwYXJlbnROYW1lLCBpbmRleCldXHJcbiAgICB9XHJcbiAgICBzZXRNYWNoaW5lUHRCdXN5KHBhcmVudE5hbWUsIGluZGV4LCBidXN5KSB7XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMuZ2V0TWFjaGluZUtleShwYXJlbnROYW1lLCBpbmRleClcclxuICAgICAgICBpZiAoYnVzeSkge1xyXG4gICAgICAgICAgICB0aGlzLnB0QnVzeU1hY2hpbmVzW2tleV0gPSB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucHRCdXN5TWFjaGluZXNba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbGVhc2VNYWNoaW5lUHQocGFyZW50TmFtZSwgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNldE1hY2hpbmVQdEJ1c3kocGFyZW50TmFtZSwgaW5kZXgsIGZhbHNlKVxyXG4gICAgfVxyXG4gICAgZ2V0UHRUYWcocGFyZW50TmFtZSwgcGFyZW50SW5kZXgpIHtcclxuICAgICAgICBzd2l0Y2ggKHBhcmVudE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkNydW5jaFwiOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIDBcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiA0XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gNVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIDZcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiTWF5RGF5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50SW5kZXggPT09IDAgPyAxIDogM1xyXG4gICAgICAgICAgICBjYXNlIFwiQm94aW5nXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb3VudHB0ID0gMFxyXG4gICAgcGxheURvb3JBbmltKGFuaW1OYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9vcikge1xyXG4gICAgICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShhbmltTmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5U2Z4KHRoaXMuc291bmREb29yLCBmYWxzZSwgMSlcclxuICAgIH1cclxuICAgIG9wZW5Eb29yKCkge1xyXG4gICAgICAgIHRoaXMucGxheURvb3JBbmltKFwiZG9vcl9vcGVuXCIpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlEb29yQW5pbShcImRvb3JfY2xvc2VcIilcclxuICAgICAgICB9LCAwLjcpXHJcbiAgICB9XHJcbiAgICBhZGRQdChjdXMsIHBhcmVudE5hbWUsIGJ0bikge1xyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDdXNXYWl0aW5nRm9yUHQoY3VzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVuRG9vcigpO1xyXG4gICAgICAgIGN1c0NvbXAuaXNQdCA9IHRydWVcclxuICAgICAgICB0aGlzLnNldE1hY2hpbmVQdEJ1c3kocGFyZW50TmFtZSwgY3VzQ29tcC5wYXJlbnRJbmRleCwgdHJ1ZSlcclxuICAgICAgICBsZXQgcHQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVQdFt0aGlzLmNvdW50cHRdKTtcclxuICAgICAgICBwdC5wYXJlbnQgPSB0aGlzLmxpc3RQdDtcclxuICAgICAgICBwdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgcHQucG9zaXRpb24gPSBjYy52MygzODIuNjA3LCAxMjEpXHJcbiAgICAgICAgbGV0IHB0Q29tcCA9IHB0LmdldENvbXBvbmVudChcInB0XCIpO1xyXG4gICAgICAgIHB0Q29tcC5idG4gPSBidG5cclxuICAgICAgICBwdENvbXAubWFjaGluZVBhcmVudE5hbWUgPSBwYXJlbnROYW1lXHJcbiAgICAgICAgcHRDb21wLm1hY2hpbmVJbmRleCA9IGN1c0NvbXAucGFyZW50SW5kZXhcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudHB0Kys7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKHB0KVxyXG5cclxuICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRwdCA+IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudHB0ID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGFnID0gdGhpcy5nZXRQdFRhZyhwYXJlbnROYW1lLCBjdXNDb21wLnBhcmVudEluZGV4KVxyXG4gICAgICAgIHB0Q29tcC50YWcgPSBOdW1iZXIodGFnKVxyXG4gICAgICAgIGxldCB0YXJnZXRDdXMgPSBjdXNcclxuICAgICAgICBsZXQgZm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUN1cyhOdW1iZXIodGFnKSwgdGFyZ2V0Q3VzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBwdENvbXAubW92ZUluKGZuYylcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaXNDb3VudEFjdGlvbiA9IDBcclxuICAgIGFjdGl2ZUN1cyh2YWx1ZSwgY3VzID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBjaGFyID0gY3VzICYmIHRoaXMuaXNDdXNPbk1hY2hpbmUoY3VzKSA/IGN1cyA6IG51bGxcclxuICAgICAgICBpZiAoIWNoYXIpIHtcclxuICAgICAgICAgICAgY2hhciA9IHRoaXMuZ2V0Q2hhckJ5UHRUYWcodmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2hhcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJhY3RpdmVDdXM6IG1pc3NpbmcgY2hhciBmb3IgdGFnXCIsIHZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tV2FpdGluZyhjaGFyKVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoY3VzQ29tcCkge1xyXG4gICAgICAgICAgICBjdXNDb21wLmlzUHQgPSB0cnVlXHJcbiAgICAgICAgICAgIGN1c0NvbXAuc3RvcFdhaXRQcm9ncmVzcygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoMSwgLTE2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzBdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lWzBdLCA0KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5kYXlUYSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRheVRhMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKC0xNS43NzEgKyAxNCwgNyAtIDUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lQ3J1bmNoWzBdLCA2KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJveGluZzEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5ib3hpbmcoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveGluZzEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCBjYy52Myg2NDcsIC02NiksIDYpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGxldCBtYXlEYXkyID0gdGhpcy5hcnJNYXlEYXlbMV1cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmRheVRhKClcclxuICAgICAgICAgICAgICAgIG1heURheTIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIG1heURheTIuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKC0xNS43NzEgKyAxNCwgNyAtIDUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF5RGF5Mi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBtYXlEYXkyLmdldENoaWxkQnlOYW1lKFwiRzFfQWJDcnVuY2hcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZUNydW5jaFsxXSwgNilcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoMSwgLTE2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzFdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lWzFdLCA0KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5nYXBCdW5nKClcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygxLCAtMTYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFsyXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMl0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCB0aGlzLmFyclBvc0RvbmVbMl0sIDQpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzNdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFszXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZVszXSwgNClcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIGdldENoYXJCeVB0VGFnKHZhbHVlKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiB0aGlzLmFyckNydW5jaFswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIHRoaXMuYm94aW5nMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gdGhpcy5hcnJNYXlEYXlbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIHRoaXMuYXJyQ3J1bmNoWzFdLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjYXNlIDU6IHJldHVybiB0aGlzLmFyckNydW5jaFsyXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gdGhpcy5hcnJDcnVuY2hbM10uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmluaXNoQ3VzV29ya291dChjaGFyLCBwb3NEb25lLCBjb2luKSB7XHJcbiAgICAgICAgaWYgKCFjaGFyIHx8ICFjaGFyLmlzVmFsaWQpIHJldHVyblxyXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbVdhaXRpbmcoY2hhcilcclxuICAgICAgICBsZXQgZG9uZVBvcyA9IHRoaXMudG9Tb3J0TGF5ZXJQb3ModGhpcy5ub2RlLCBwb3NEb25lKVxyXG4gICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIoY2hhcilcclxuICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgY2hhci5wb3NpdGlvbiA9IGRvbmVQb3NcclxuICAgICAgICBjaGFyLnNjYWxlID0gMC44XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2luKGNoYXIsIGNvaW4pXHJcbiAgICAgICAgY2MudHdlZW4oY2hhcikuZGVsYXkoMSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGlmICghdGhpcy5ndWlkaW5nSWNvblB0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lU3RhcnRlZCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0dhbWVTdGFydGVkID0gdHJ1ZVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoLTI1MCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jKS50bygwLjgsIHsgem9vbVJhdGlvOiAxLjY1IH0pLnN0YXJ0KClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5hcnJJY29uUHQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkljb25QdChjaGlsZClcclxuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcnJXYWl0aW5nID0gW11cclxuICAgICAgICB0aGlzLnB0QnVzeU1hY2hpbmVzID0ge31cclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zcGF3Q3VzdG9tZXIpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuYXJyQ3VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICBpZiAoY3VzICYmIGN1cy5pc1ZhbGlkKSBjdXMuZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxpc3RDdXNOb2RlLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RDdXNOb2RlLmNoaWxkcmVuW2ldLmRlc3Ryb3koKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFyckN1cyA9IFtdXHJcbiAgICAgICAgdGhpcy5zcGF3Q3VzdG9tZXIoKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd0N1c3RvbWVyLCAzKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuYXJyQ3VzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd0N1c3RvbWVyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICAgICAgfSwgMTUpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnRleHRHdWlsZDIpLnRvKDAuOCwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy56b29tR2FtZSgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENhcmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCA0KVxyXG4gICAgICAgICAgICAvLyB0aGlzLnN0YXJ0R2FtZSgpXHJcbiAgICAgICAgfSwgMjIpXHJcblxyXG4gICAgfVxyXG4gICAgem9vbUdhbWUoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuOCwgeyB6b29tUmF0aW86IDIgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoLTQ5NCwgLTI5NikgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jKS50bygwLjgsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhRG9jLm5vZGUpLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoLTUwMCwgLTEwMCkgfSkuc3RhcnQoKVxyXG5cclxuICAgICAgICB0aGlzLmhpZGVRdWV1ZUhhbmRHdWlkZSA9IHRydWVcclxuICAgICAgICB0aGlzLmhpZGVBbGxRdWV1ZUhhbmRzKClcclxuICAgICAgICB3aGlsZSAodGhpcy5hcnJDdXMubGVuZ3RoIDwgNSAmJiB0aGlzLmFyckN1cy5sZW5ndGggPCB0aGlzLmFyclBvc0N1cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGF3Q3VzdG9tZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICBpZiAoIWN1cyB8fCAhY3VzLmlzVmFsaWQpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgICAgICBpZiAoIWN1c0NvbXApIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGN1c0NvbXAuaXNBbmdyeVdhaXQgPSB0cnVlXHJcbiAgICAgICAgICAgIGlmICghY3VzQ29tcC5pc1F1ZXVlTW92aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjdXNDb21wLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgfVxyXG4gICAgY2xpY2tDYXJkKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubGlzdENhcmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMC44LCB7IHpvb21SYXRpbzogMSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2MpLnRvKDAuOCwgeyB6b29tUmF0aW86IDEuNSB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmFEb2Mubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygtMTAwLCAwKSB9KS5zdGFydCgpXHJcbiAgICAgICAgaWYgKHRoaXMudGV4dEd1aWxkMykgdGhpcy50ZXh0R3VpbGQzLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgc3dpdGNoIChOdW1iZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucHRTcGVlZCA9IDEuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNwYXdDdXN0b21lcilcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVF1ZXVlSGFuZEd1aWRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQWxsUXVldWVIYW5kcygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVBbGxJY29uUHRIYW5kcygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvRmlsbE1hY2hpbmVzQW5kUHRzKClcclxuICAgICAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgfSwgOC41KVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ291bnREb3duVGltZSgxNSlcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlUXVldWVIYW5kR3VpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRpbnVlSGFuZEd1aWRlKClcclxuICAgICAgICAgICAgICAgIH0sIDAuOClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkVuZGdhbWUoKVxyXG4gICAgICAgIH0sIDEwKVxyXG4gICAgfVxyXG4gICAgc2hvd0NvbnRpbnVlSGFuZEd1aWRlKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZVF1ZXVlSGFuZEd1aWRlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2hvd0ZyZWVJY29uUHRIYW5kKClcclxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICB9XHJcbiAgICBhdXRvRmlsbE1hY2hpbmVzQW5kUHRzKCkge1xyXG4gICAgICAgIGxldCBxdWV1ZSA9IHRoaXMuYXJyQ3VzLnNsaWNlKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSBxdWV1ZVtpXVxyXG4gICAgICAgICAgICBpZiAoIWN1cyB8fCAhY3VzLmlzVmFsaWQpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyckN1cy5pbmRleE9mKGN1cykgPCAwKSBjb250aW51ZVxyXG4gICAgICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgaWYgKCFjdXNDb21wKSBjb250aW51ZVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzRnJlZU1hY2hpbmVGb3JUYWcoY3VzQ29tcC50YWcpKSBjb250aW51ZVxyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY3VzKVxyXG4gICAgICAgICAgICBjdXNDb21wLmlzUXVldWVNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICBsZXQgcG9wID0gY3VzLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICAgICAgICAgIGlmIChwb3ApIHBvcC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnBsYWNlQ3VzT25GcmVlTWFjaGluZShjdXMsIGN1c0NvbXAudGFnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dG9TcGF3blB0cygpXHJcbiAgICB9XHJcbiAgICBwbGFjZUN1c09uRnJlZU1hY2hpbmUoY3VzLCB0YWcpIHtcclxuICAgICAgICBpZiAodGFnID09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyckNydW5jaFtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDdXNUb0NydW5jaChjdXMsIGksIHRhZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWF5RGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXJyTWF5RGF5W2ldLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1c1RvTWF5RGF5KGN1cywgaSwgdGFnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAyKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5ib3hpbmcxLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzVG9Cb3hpbmcoY3VzLCAwLCB0YWcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgZ2V0RnJlZUljb25QdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJySWNvblB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSWNvblB0RnJlZSh0aGlzLmFyckljb25QdFtpXSkpIHJldHVybiB0aGlzLmFyckljb25QdFtpXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgYXV0b1NwYXduUHRzKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cFdhaXRpbmcoKVxyXG4gICAgICAgIGxldCB3YWl0aW5nID0gdGhpcy5hcnJXYWl0aW5nLnNsaWNlKClcclxuICAgICAgICBsZXQgZGVsYXkgPSAwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3YWl0aW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXMgPSB3YWl0aW5nW2ldXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0N1c1dhaXRpbmdGb3JQdChjdXMpKSBjb250aW51ZVxyXG4gICAgICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgbGV0IGljb24gPSB0aGlzLmdldEZyZWVJY29uUHQoKVxyXG4gICAgICAgICAgICBpZiAoaWNvbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IGljb24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICAgICAgICAgIGlmIChidG4pIGJ0bi5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGlmIChpY29uLmNoaWxkcmVuWzFdKSBpY29uLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc3Bhd25DdXMgPSBjdXNcclxuICAgICAgICAgICAgbGV0IHBhcmVudE5hbWUgPSBjdXNDb21wLnBhcmVudE5hbWVcclxuICAgICAgICAgICAgbGV0IGljb25CdG4gPSBpY29uXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghc3Bhd25DdXMgfHwgIXNwYXduQ3VzLmlzVmFsaWQgfHwgIXRoaXMuaXNDdXNXYWl0aW5nRm9yUHQoc3Bhd25DdXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGljb25CdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0biA9IGljb25CdG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bikgYnRuLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpY29uQnRuLmNoaWxkcmVuWzFdKSBpY29uQnRuLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFkZFB0KHNwYXduQ3VzLCBwYXJlbnROYW1lLCBpY29uQnRuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpY29uQnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG4gPSBpY29uQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4pIGJ0bi5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbkJ0bi5jaGlsZHJlblsxXSkgaWNvbkJ0bi5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZGVsYXkpXHJcbiAgICAgICAgICAgIGRlbGF5ICs9IDAuMTJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDb2luKG5vZGUsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLnBvc2l0aW9uKVxyXG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgbGV0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNvaW4pO1xyXG4gICAgICAgIGNvaW4ucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNvaW4ucG9zaXRpb24gPSBwb3MuYWRkKGNjLnYzKDAsIDUwKSlcclxuICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gNTBcclxuICAgICAgICB0aGlzLnBsYXlTZngodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIH1cclxuICAgIGFjdGl2YXRlU2VhdEN1cyhjaGFyLCBwYXJlbnROb2RlLCBwYXJlbnROYW1lLCBwYXJlbnRJbmRleCwgdGFnKSB7XHJcbiAgICAgICAgaWYgKCFjaGFyKSByZXR1cm5cclxuICAgICAgICBjaGFyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBjaGFyLm5hbWUgPSBcImNoYXJcIlxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXApIHJldHVyblxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50TmFtZSA9IHBhcmVudE5hbWVcclxuICAgICAgICBjdXNDb21wLnBhcmVudEluZGV4ID0gcGFyZW50SW5kZXhcclxuICAgICAgICBjdXNDb21wLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlXHJcbiAgICAgICAgY3VzQ29tcC5pc1B0ID0gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5hcnJXYWl0aW5nLmluZGV4T2YoY2hhcikgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyV2FpdGluZy5wdXNoKGNoYXIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1c0NvbXAud2FpdGluZ1RhZyh0YWcpXHJcbiAgICB9XHJcbiAgICBtb3ZlQ3VzKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgaWYgKHZhbHVlID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmFyckNydW5jaFswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVNlYXRDdXMoY2hhciwgdGhpcy5hcnJDcnVuY2hbMF0sIFwiQ3J1bmNoXCIsIDAsIDApXHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmRheVRhMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVNlYXRDdXMoY2hhciwgdGhpcy5kYXlUYTEsIFwiTWF5RGF5XCIsIDAsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5ib3hpbmcxLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlU2VhdEN1cyhjaGFyLCB0aGlzLmJveGluZzEsIFwiQm94aW5nXCIsIDAsIDIpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMi5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcIm5vdGlCb251c0NvaW5cIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMlxyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1szXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcyLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzQ291bnRBY3Rpb24rKztcclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50QWN0aW9uID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2FtZTEoKVxyXG5cclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlICE9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0hpbmQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGxldCBkZXZpY2VSZXNvbHV0aW9uID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBpZiAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IGRldmljZVJlc29sdXRpb24uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvbnNpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzQ291bnRTdGVwID0gMFxyXG5cclxuICAgIHBsYXlTZngoY2xpcCwgbG9vcCA9IGZhbHNlLCB2b2wgPSAxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRnYW1lIHx8ICFjbGlwKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgbG9vcCwgdm9sKVxyXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB0aGlzLnNmeElkcy5wdXNoKGlkKVxyXG4gICAgICAgIHJldHVybiBpZFxyXG4gICAgfVxyXG4gICAgc3RvcE90aGVyU291bmRzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkU291bmRUaW1lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmlkU291bmRUaW1lKVxyXG4gICAgICAgICAgICB0aGlzLmlkU291bmRUaW1lID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4SWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5zZnhJZHNbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2Z4SWRzID0gW11cclxuICAgIH1cclxuICAgIG9uRW5kZ2FtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZGdhbWUpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNFbmRnYW1lID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNwYXdDdXN0b21lcilcclxuICAgICAgICB0aGlzLnN0b3BPdGhlclNvdW5kcygpXHJcbiAgICAgICAgdGhpcy5tYWtlQWxsQ3VzSGFwcHkoKVxyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kV2luKSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIC8vIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgYWRkQ3VzVG9MaXN0KGxpc3QsIG5vZGUpIHtcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuXHJcbiAgICAgICAgaWYgKGxpc3QuaW5kZXhPZihub2RlKSA+PSAwKSByZXR1cm5cclxuICAgICAgICBpZiAoIW5vZGUuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpKSByZXR1cm5cclxuICAgICAgICBsaXN0LnB1c2gobm9kZSlcclxuICAgIH1cclxuICAgIG1ha2VBbGxDdXNIYXBweSgpIHtcclxuICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykgdGhpcy5hZGRDdXNUb0xpc3QobGlzdCwgdGhpcy5hcnJDdXNbaV0pXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycldhaXRpbmcubGVuZ3RoOyBpKyspIHRoaXMuYWRkQ3VzVG9MaXN0KGxpc3QsIHRoaXMuYXJyV2FpdGluZ1tpXSlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyQ3J1bmNoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyckNydW5jaFtpXSkgdGhpcy5hZGRDdXNUb0xpc3QobGlzdCwgdGhpcy5hcnJDcnVuY2hbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWF5RGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyck1heURheVtpXSkgdGhpcy5hZGRDdXNUb0xpc3QobGlzdCwgdGhpcy5hcnJNYXlEYXlbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXlUYTEpIHRoaXMuYWRkQ3VzVG9MaXN0KGxpc3QsIHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSlcclxuICAgICAgICBpZiAodGhpcy5ib3hpbmcxKSB0aGlzLmFkZEN1c1RvTGlzdChsaXN0LCB0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKVxyXG4gICAgICAgIGlmICh0aGlzLmJveGluZzIpIHRoaXMuYWRkQ3VzVG9MaXN0KGxpc3QsIHRoaXMuYm94aW5nMi5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpXHJcbiAgICAgICAgaWYgKHRoaXMuc29ydExheWVyKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3J0TGF5ZXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEN1c1RvTGlzdChsaXN0LCB0aGlzLnNvcnRMYXllci5jaGlsZHJlbltpXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1c0NvbXAgPSBsaXN0W2ldLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgICAgICBpZiAoY3VzQ29tcCkgY3VzQ29tcC5jZWxlYnJhdGUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0Q291bnREb3duKCkge1xyXG4gICAgICAgIGxldCB0aW1lQ29tcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFwidGltZVwiKVxyXG4gICAgICAgIGlmICh0aW1lQ29tcCAmJiB0aW1lQ29tcC5zdGFydENvdW50RG93bikge1xyXG4gICAgICAgICAgICB0aW1lQ29tcC5zdGFydENvdW50RG93bigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkQ291bnREb3duVGltZShzZWMpIHtcclxuICAgICAgICBsZXQgdGltZUNvbXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihcInRpbWVcIilcclxuICAgICAgICBpZiAodGltZUNvbXAgJiYgdGltZUNvbXAuYWRkVGltZSkge1xyXG4gICAgICAgICAgICB0aW1lQ29tcC5hZGRUaW1lKHNlYylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVwb25zaXZlKGxvZ2ljKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmxiQ29pbi5zdHJpbmcgPSBnbG9iYWxUaGlzLmdvbGQudG9TdHJpbmcoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kZ2FtZSkge1xyXG4gICAgICAgICAgICBpZiAobG9naWMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2FyZERvYy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZENhcmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYXJkRG9jLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kQ2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjUgOiAwLjdcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUgPSAobG9naWMpID8gMS41IDogMVxyXG4gICAgICAgIHRoaXMubGlzdEljb25QdC5zY2FsZSA9IChsb2dpYykgPyAyLjIgOiAxLjNcclxuICAgICAgICB0aGlzLmxpc3RJY29uUHQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gKGxvZ2ljKSA/IDIzMCA6IDExNC44NlxyXG4gICAgICAgIHRoaXMubG9nby5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA0OFxyXG4gICAgICAgIHRoaXMuY2FtZXJhRG9jLm5vZGUuYWN0aXZlID0gbG9naWMgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLmFjdGl2ZSA9IGxvZ2ljID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgdGhpcy5ndWlsZFRpbWUxLnNjYWxlID0gbG9naWMgPyAyLjIgOiAxO1xyXG4gICAgICAgIHRoaXMudGltZUJhci5zY2FsZSA9IGxvZ2ljID8gMS41IDogMVxyXG4gICAgICAgIHRoaXMudGltZUJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSBsb2dpYyA/IDI1MCA6IDE1MFxyXG4gICAgICAgIHRoaXMubm90aS5zY2FsZSA9IChsb2dpYykgPyAxLjggOiAxXHJcbiAgICAgICAgdGhpcy5saXN0Q2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjYgOiAxXHJcbiAgICAgICAgdGhpcy50ZXh0R3VpbGQxLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IChsb2dpYykgPyA1NzAgOiAyNzkuNzlcclxuICAgICAgICB0aGlzLnRleHRHdWlsZDIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gKGxvZ2ljKSA/IDU3MCA6IDI3OS43OVxyXG4gICAgICAgIHRoaXMudGV4dEd1aWxkMy5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAobG9naWMpID8gNTcwIDogMjc5Ljc5XHJcbiAgICAgICAgdGhpcy50ZXh0R3VpbGQxLnNjYWxlID0gKGxvZ2ljKSA/IDEuOCA6IDFcclxuICAgICAgICB0aGlzLnRleHRHdWlsZDIuc2NhbGUgPSAobG9naWMpID8gMS44IDogMVxyXG4gICAgICAgIHRoaXMudGV4dEd1aWxkMy5zY2FsZSA9IChsb2dpYykgPyAxLjggOiAxXHJcbiAgICAgICAgdGhpcy5saXN0Q2FyZC5zY2FsZSA9IChsb2dpYykgPyAxLjcgOiAxXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IFRPTEVSQU5DRSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IElQQURfUkFUSU8gPSAxMDI0IC8gNzY4OyAgICAgICAgICAvLyDiiYggMS4zM1xyXG4gICAgICAgICAgICBjb25zdCBUQUxMX1BIT05FX01JTl9SQVRJTyA9IDIuMDsgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5waGFvaG9hLnNjYWxlID0gKGxvZ2ljKSA/IDcgOiAzXHJcbiAgICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA+PSBUQUxMX1BIT05FX01JTl9SQVRJTykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVjayBpcGhvbmV4XCIpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvaW5CYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNzcgKyAzMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nby5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA0OCArIDcwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjUwICsgNzBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlsZFVwZ3JhZGUuc2NhbGUgPSAxLjhcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQSE9ORV9YX0FTUEVDVF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEFEX1JBVElPKSA8IFRPTEVSQU5DRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMC44XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=