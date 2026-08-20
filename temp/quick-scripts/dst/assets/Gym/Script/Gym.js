
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
        _this.listCard = null;
        _this.noti = null;
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
        switch (Number(value)) {
            case 0:
                this.ptSpeed = 1.5;
                this.noti.children[0].children[1].active = true;
                this.noti.active = true;
                break;
            case 1:
                this.addCountDownTime(15);
                this.noti.children[0].children[0].active = true;
                this.noti.active = true;
                break;
        }
        if (this.textGuild3)
            this.textGuild3.active = false;
        this.unschedule(this.spawCustomer);
        this.hideQueueHandGuide = true;
        this.hideAllQueueHands();
        this.hideAllIconPtHands();
        this.scheduleOnce(function () {
            _this.autoFillMachinesAndPts();
        }, 0.5);
        this.scheduleOnce(function () {
            _this.onEndgame();
        }, 9);
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
        globalThis.gold += value;
        cc.audioEngine.play(this.soundCoin, false, 1);
    };
    NewClass.prototype.moveCus = function (value) {
        var _this = this;
        // cc.audioEngine.play(this.soundCoin, false, 1)
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
        if (this.isEndgame)
            return;
        this.isEndgame = true;
        cc.audioEngine.play(this.soundWin, false, 1);
        this.endCard.active = true;
        this.linkToStore.active = true;
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
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "noti", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR3ltXFxTY3JpcHRcXEd5bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtBQUVyQjtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW8yQ0M7UUFsMkNHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsU0FBRyxHQUFZLElBQUksQ0FBQTtRQUVuQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGlCQUFXLEdBQVksSUFBSSxDQUFBO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRTVCLG1CQUFhLEdBQVksSUFBSSxDQUFBO1FBRTdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUVyQixZQUFNLEdBQWEsSUFBSSxDQUFBO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFFdEIsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBSXZC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UUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQzNDLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN0RCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ0wsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQzNDLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN0RCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ0wsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENB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LENBQUMsQ0FBQyxDQUFBO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRTVDLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxD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QU87T0FDYSxRQUFRLENBbzJDNUI7SUFBRCxlQUFDO0NBcDJDRCxBQW8yQ0MsQ0FwMkNxQyxFQUFFLENBQUMsU0FBUyxHQW8yQ2pEO2tCQXAyQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZ2xvYmFsVGhpcy5nb2xkID0gMTAwXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5wYzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbnBjMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEN1c05vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RQbGFjZVBvczogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENydW5jaDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94aW5nMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJveGluZzI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQkc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRTaG93UG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRDb2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQ29uZmlybTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZFdpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpbGRVcGdyYWRlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBndWlsZFVwZ3JhZGUyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaGFvaG9hOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0RTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ29pbjogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRheVRhMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBmaWxsQmFyOiBjYy5TcHJpdGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvaW5CYXI6IGNjLk5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dEd1aWxkMzogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RJY29uUHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0UHQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNvcnRMYXllcjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDb2luOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgbGlzdFByZVB0OiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBsaXN0UHJlQ3VzOiBjYy5QcmVmYWJbXSA9IFtdXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFyck1heURheTogY2MuTm9kZVtdID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdENhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vdGk6Y2MuTm9kZT1udWxsXHJcbiAgICBhcnJQb3NEb25lID0gW2NjLnYzKC0yMzksIC0xMzMpLCBjYy52Myg1NywgLTE1NyksIGNjLnYzKC0xMjMsIC0zNiksIGNjLnYzKC0xNCwgNjUpLCBjYy52MygtNTgsIC0yMzUpLCBjYy52MygxOTgsIC01OSldXHJcbiAgICBhcnJQb3NEb25lQ3J1bmNoID0gW2NjLnYzKDIxOCwgLTM5MiksIGNjLnYzKDQwOSwgLTI4OSldXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGxpc3RDcnVuY2g6Y2MuTm9kZT1udWxsXHJcbiAgICBhcnJQb3NDdXMgPSBbXVxyXG4gICAgYXJyQ3VzID0gW11cclxuICAgIGFyckljb25QdCA9IFtdXHJcbiAgICBpc1N0ZXAgPSAwXHJcbiAgICBhcnJDcnVuY2ggPSBbXVxyXG4gICAgcHRCdXN5TWFjaGluZXMgPSB7fVxyXG4gICAgaXNHYW1lU3RhcnRlZCA9IGZhbHNlXHJcbiAgICBndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgIGhpZGVRdWV1ZUhhbmRHdWlkZSA9IGZhbHNlXHJcbiAgICBpc0hpbmQgPSBmYWxzZVxyXG4gICAgaXNFbmRnYW1lID0gZmFsc2VcclxuICAgIHB0U3BlZWQgPSAxXHJcbiAgICBhZENoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgcG9zR2FwQnVuZyA9IGNjLnYzKC0zMCwgLTE5KTtcclxuICAgIHBvc05hbmdUYSA9IGNjLnYzKC01MCwgLTQyKVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkQ2hhbmVsID09ICdNaW50ZWdyYWwnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCRywgdHJ1ZSwgMC41KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbigzLCB0aGlzLmFyckN1cy5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYXJyQ3VzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50ZXh0R3VpbGQxLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9LCAwLjYpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3VzTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXMucHVzaCh0aGlzLmxpc3RDdXNOb2RlLmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEljb25QdC5jaGlsZHJlblswXS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJJY29uUHQucHVzaCh0aGlzLmxpc3RJY29uUHQuY2hpbGRyZW5bMF0uY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q3J1bmNoLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyckNydW5jaC5wdXNoKHRoaXMubGlzdENydW5jaC5jaGlsZHJlbltpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubGlzdFBsYWNlUG9zLmNoaWxkcmVuW2ldLnBvc2l0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuYXJyUG9zQ3VzLnB1c2goY2MudjMocG9zLngsIHBvcy55LCBwb3MueikpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBTb3J0TGF5ZXIoKVxyXG4gICAgICAgIHRoaXMucmVidWlsZFF1ZXVlUG9zSW5Tb3J0TGF5ZXIoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hUb1NvcnRMYXllcih0aGlzLmFyckN1c1tpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoU29ydExheWVyRGVwdGgoKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwU29ydExheWVyKCkge1xyXG4gICAgICAgIGxldCBkb29yUGFyZW50ID0gdGhpcy5kb29yID8gdGhpcy5kb29yLnBhcmVudCA6IG51bGxcclxuICAgICAgICBsZXQgcGFyZW50ID0gKGRvb3JQYXJlbnQgJiYgZG9vclBhcmVudC5wYXJlbnQpXHJcbiAgICAgICAgICAgIHx8ICh0aGlzLmxpc3RDcnVuY2ggJiYgdGhpcy5saXN0Q3J1bmNoLnBhcmVudClcclxuICAgICAgICAgICAgfHwgdGhpcy5nYW1lXHJcbiAgICAgICAgICAgIHx8IHRoaXMubm9kZVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc29ydExheWVyIHx8ICF0aGlzLnNvcnRMYXllci5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydExheWVyID0gbmV3IGNjLk5vZGUoXCJTb3J0TGF5ZXJcIilcclxuICAgICAgICAgICAgdGhpcy5zb3J0TGF5ZXIucGFyZW50ID0gcGFyZW50XHJcbiAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFBvc2l0aW9uKDAsIDApXHJcbiAgICAgICAgICAgIGlmIChkb29yUGFyZW50ICYmIGRvb3JQYXJlbnQucGFyZW50ID09PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFNpYmxpbmdJbmRleChkb29yUGFyZW50LmdldFNpYmxpbmdJbmRleCgpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlzdENydW5jaCAmJiB0aGlzLmxpc3RDcnVuY2gucGFyZW50ID09PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydExheWVyLnNldFNpYmxpbmdJbmRleCh0aGlzLmxpc3RDcnVuY2guZ2V0U2libGluZ0luZGV4KCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBub2RlcyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRoaXMuYXJyQ3J1bmNoW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWF5RGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyck1heURheVtpXSkgbm9kZXMucHVzaCh0aGlzLmFyck1heURheVtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRvb3JQYXJlbnQgJiYgZG9vclBhcmVudCAhPT0gcGFyZW50ICYmIGRvb3JQYXJlbnQgIT09IHRoaXMuc29ydExheWVyKSB7XHJcbiAgICAgICAgICAgIG5vZGVzLnB1c2goZG9vclBhcmVudClcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG9vcikge1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRoaXMuZG9vcilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm94aW5nMSkgbm9kZXMucHVzaCh0aGlzLmJveGluZzEpXHJcbiAgICAgICAgaWYgKHRoaXMuYm94aW5nMikgbm9kZXMucHVzaCh0aGlzLmJveGluZzIpXHJcbiAgICAgICAgaWYgKHRoaXMuZGF5VGExKSBub2Rlcy5wdXNoKHRoaXMuZGF5VGExKVxyXG4gICAgICAgIGlmICh0aGlzLmxpc3RQdCkgbm9kZXMucHVzaCh0aGlzLmxpc3RQdClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKG5vZGVzW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2hTb3J0TGF5ZXJEZXB0aCgpXHJcbiAgICAgICAgdGhpcy5zZXREZXB0aEJ5WSh0aGlzLnNvcnRMYXllcilcclxuICAgIH1cclxuXHJcbiAgICByZWJ1aWxkUXVldWVQb3NJblNvcnRMYXllcigpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllclxyXG4gICAgICAgIGlmICghbGF5ZXIgfHwgIXRoaXMubGlzdFBsYWNlUG9zKSByZXR1cm5cclxuICAgICAgICB0aGlzLmFyclBvc0N1cyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQbGFjZVBvcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBsYWNlID0gdGhpcy5saXN0UGxhY2VQb3MuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgbGV0IHdvcmxkUG9zID0gcGxhY2UucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwbGFjZS5wb3NpdGlvbilcclxuICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gbGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpXHJcbiAgICAgICAgICAgIHRoaXMuYXJyUG9zQ3VzLnB1c2goY2MudjMobG9jYWxQb3MueCwgbG9jYWxQb3MueSwgbG9jYWxQb3MueikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9Tb3J0TGF5ZXJQb3MoZnJvbVBhcmVudCwgbG9jYWxQb3MpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllciB8fCB0aGlzLm5vZGVcclxuICAgICAgICBpZiAoIWZyb21QYXJlbnQgfHwgZnJvbVBhcmVudCA9PT0gbGF5ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYzKGxvY2FsUG9zLngsIGxvY2FsUG9zLnksIGxvY2FsUG9zLnopXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGZyb21QYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGxvY2FsUG9zKVxyXG4gICAgICAgIGxldCBwb3MgPSBsYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcylcclxuICAgICAgICByZXR1cm4gY2MudjMocG9zLngsIHBvcy55LCBwb3MueilcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0TGF5ZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNvcnRMYXllciB8fCAhdGhpcy5zb3J0TGF5ZXIuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwU29ydExheWVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydExheWVyIHx8IHRoaXMubm9kZVxyXG4gICAgfVxyXG4gICAgc2V0RGVwdGhCeVkobm9kZSkge1xyXG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSByZXR1cm5cclxuICAgICAgICBub2RlLnpJbmRleCA9IC1NYXRoLnJvdW5kKG5vZGUueSlcclxuICAgIH1cclxuICAgIGF0dGFjaFRvU29ydExheWVyKG5vZGUpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllciB8fCB0aGlzLm5vZGVcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuXHJcbiAgICAgICAgaWYgKG5vZGUucGFyZW50ID09PSBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldERlcHRoQnlZKG5vZGUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBub2RlLnBhcmVudFxyXG4gICAgICAgICAgICA/IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICA6IG5vZGUucG9zaXRpb25cclxuICAgICAgICBub2RlLnBhcmVudCA9IGxheWVyXHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGxheWVyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKVxyXG4gICAgICAgIHRoaXMuc2V0RGVwdGhCeVkobm9kZSlcclxuICAgIH1cclxuICAgIHJlZnJlc2hTb3J0TGF5ZXJEZXB0aCgpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnNvcnRMYXllclxyXG4gICAgICAgIGlmICghbGF5ZXIpIHJldHVyblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXIuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVwdGhCeVkobGF5ZXIuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFF1ZXVlUG9zKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuYXJyUG9zQ3VzW2luZGV4XVxyXG4gICAgICAgIHJldHVybiBjYy52Myhwb3MueCwgcG9zLnksIHBvcy56KVxyXG4gICAgfVxyXG4gICAgLy8gUHJlZmFiIGN1cyBt4bq3YyDEkeG7i25oIHF1YXkgdHLDoWkga2hpIHNjYWxlWCA9IDFcclxuICAgIGZhY2VDdXNCeURpcihjdXMsIGZyb21Qb3MsIHRvUG9zKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgTWF0aC5hYnModG9Qb3MueCAtIGZyb21Qb3MueCkgPCAwLjEpIHJldHVyblxyXG4gICAgICAgIGN1cy5zY2FsZVggPSB0b1Bvcy54IDwgZnJvbVBvcy54ID8gMSA6IC0xXHJcbiAgICB9XHJcbiAgICBjb3VudEN1cyA9IDBcclxuICAgIHNwYXdDdXN0b21lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5hcnJDdXMubGVuZ3RoID49IHRoaXMuYXJyUG9zQ3VzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBxdWV1ZUluZGV4ID0gdGhpcy5hcnJDdXMubGVuZ3RoXHJcbiAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuZ2V0UXVldWVQb3MocXVldWVJbmRleClcclxuICAgICAgICBsZXQgY3VzID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJlQ3VzW3RoaXMuY291bnRDdXNdKVxyXG4gICAgICAgIGxldCBzcGF3blBhcmVudCA9IHRoaXMubGlzdEN1c05vZGUgfHwgdGhpcy5ub2RlXHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy50b1NvcnRMYXllclBvcyhzcGF3blBhcmVudCwgY2MudjMoLTEwNTEsIC02MDApKVxyXG4gICAgICAgIGxldCBtaWRQb3MgPSB0aGlzLnRvU29ydExheWVyUG9zKHNwYXduUGFyZW50LCBjYy52MygtNjc1LCAtNDM1KSlcclxuICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKGN1cylcclxuXHJcbiAgICAgICAgdGhpcy5hcnJDdXMucHVzaChjdXMpO1xyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIGN1c0NvbXAuaXNRdWV1ZU1vdmluZyA9IHRydWVcclxuICAgICAgICBjdXMucG9zaXRpb24gPSBzdGFydFBvc1xyXG4gICAgICAgIC8vIFByZWZhYiBxdWF5IHRyw6FpIChzY2FsZVg9MSkg4oaSIMSRaSBzYW5nIHBo4bqjaSBj4bqnbiBzY2FsZVg9LTFcclxuICAgICAgICB0aGlzLmZhY2VDdXNCeURpcihjdXMsIHN0YXJ0UG9zLCBtaWRQb3MpXHJcbiAgICAgICAgbGV0IGFuaW0gPSBjdXMuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIGFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa0luTFwiLCB0cnVlKVxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjdXMpXHJcbiAgICAgICAgY2MudHdlZW4oY3VzKS50bygxLCB7IHBvc2l0aW9uOiBtaWRQb3MgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjZUN1c0J5RGlyKGN1cywgbWlkUG9zLCBwb3NFbmQpXHJcbiAgICAgICAgfSkudG8oMC44LCB7IHBvc2l0aW9uOiBwb3NFbmQgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cy5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIGlmIChjdXNDb21wLmlzQW5ncnlXYWl0KSB7XHJcbiAgICAgICAgICAgICAgICBjdXNDb21wLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWl0aW5nXCIsIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VzQ29tcC5zaG93UXVldWVQb3AoKVxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5jb3VudEN1cysrXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDdXMgPiA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRDdXMgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhcnJXYWl0aW5nID0gW11cclxuICAgIGRvQ3VzKHRhZywgY3VzKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA8PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUN1cyh0YWcpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RJY29uUHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckljb25QdFswXS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJySWNvblB0WzFdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJJY29uUHRbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGVwID09IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJySWNvblB0WzJdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJJY29uUHRbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGFnID09IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDcnVuY2gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXJyQ3J1bmNoW2ldLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDdXNUb0NydW5jaChjdXMsIGksIHRhZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGFnID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJNYXlEYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXJyTWF5RGF5W2ldLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDdXNUb01heURheShjdXMsIGksIHRhZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGFnID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ib3hpbmcxLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1c1RvQm94aW5nKGN1cywgMCwgdGFnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBsZWF2ZVF1ZXVlKGN1cykge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuYXJyQ3VzLmluZGV4T2YoY3VzKVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVyblxyXG4gICAgICAgIHRoaXMuYXJyQ3VzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcXVldWVDdXMgPSB0aGlzLmFyckN1c1tpXVxyXG4gICAgICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy5nZXRRdWV1ZVBvcyhpKVxyXG4gICAgICAgICAgICBsZXQgY3VzQ29tcCA9IHF1ZXVlQ3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgICAgICBsZXQgYW5pbSA9IHF1ZXVlQ3VzLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgICAgY3VzQ29tcC5pc1F1ZXVlTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtJbkxcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5mYWNlQ3VzQnlEaXIocXVldWVDdXMsIHF1ZXVlQ3VzLnBvc2l0aW9uLCBwb3NFbmQpXHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChxdWV1ZUN1cylcclxuICAgICAgICAgICAgY2MudHdlZW4ocXVldWVDdXMpLnRvKDAuOCwgeyBwb3NpdGlvbjogcG9zRW5kIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVldWVDdXMuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1c0NvbXAuaXNBbmdyeVdhaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXNDb21wLnR1Y0dpYW4oKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltLnNldEFuaW1hdGlvbigwLCBcIldhaXRpbmdcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1c0NvbXAuc2hvd1F1ZXVlUG9wKClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVDdXNUb0NydW5jaChjdXMsIHZhbHVlLCB0YWcpIHtcclxuICAgICAgICB0aGlzLmxlYXZlUXVldWUoY3VzKVxyXG4gICAgICAgIGxldCBjcnVuY2ggPSB0aGlzLmFyckNydW5jaFt2YWx1ZV07XHJcbiAgICAgICAgY3VzLnBhcmVudCA9IGNydW5jaDtcclxuICAgICAgICBjdXMucG9zaXRpb24gPSB0aGlzLnBvc0dhcEJ1bmc7XHJcbiAgICAgICAgY3VzLm5hbWUgPSBcImNoYXJcIlxyXG4gICAgICAgIGN1cy5jaGlsZHJlblswXS5zY2FsZSA9IDFcclxuICAgICAgICBjdXMuc2NhbGUgPSAxXHJcbiAgICAgICAgY3VzLnNjYWxlWCA9IDFcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROYW1lID0gXCJDcnVuY2hcIlxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50SW5kZXggPSB2YWx1ZTtcclxuICAgICAgICBjdXNDb21wLnBhcmVudE5vZGUgPSBjcnVuY2hcclxuXHJcbiAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnB1c2goY3VzKVxyXG4gICAgICAgIGN1c0NvbXAud2FpdGluZ1RhZyh0YWcpXHJcbiAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG5cclxuICAgIH1cclxuICAgIG1vdmVDdXNUb01heURheShjdXMsIHZhbHVlLCB0YWcpIHtcclxuICAgICAgICB0aGlzLmxlYXZlUXVldWUoY3VzKVxyXG4gICAgICAgIGxldCBtYXkgPSB0aGlzLmFyck1heURheVt2YWx1ZV1cclxuICAgICAgICBjdXMucGFyZW50ID0gbWF5O1xyXG4gICAgICAgIGN1cy5wb3NpdGlvbiA9IHRoaXMucG9zTmFuZ1RhO1xyXG4gICAgICAgIGN1cy5uYW1lID0gXCJjaGFyXCJcclxuICAgICAgICBjdXMuY2hpbGRyZW5bMF0uc2NhbGUgPSAxO1xyXG4gICAgICAgIGN1cy5zY2FsZSA9IDFcclxuICAgICAgICBjdXMuc2NhbGVYID0gMVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKVxyXG4gICAgICAgIG1heS5nZXRDaGlsZEJ5TmFtZShcIkcxX0FiQ3J1bmNoXCIpLnpJbmRleCA9IGN1cy56SW5kZXgrMVxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50TmFtZSA9IFwiTWF5RGF5XCJcclxuICAgICAgICBjdXNDb21wLnBhcmVudEluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROb2RlID0gbWF5XHJcblxyXG4gICAgICAgIHRoaXMuYXJyV2FpdGluZy5wdXNoKGN1cylcclxuICAgICAgICBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLndhaXRpbmdUYWcodGFnKVxyXG4gICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgIH1cclxuICAgIG1vdmVDdXNUb0JveGluZyhjdXMsIHZhbHVlLCB0YWcpIHtcclxuICAgICAgICB0aGlzLmxlYXZlUXVldWUoY3VzKVxyXG4gICAgICAgIGN1cy5wYXJlbnQgPSB0aGlzLmJveGluZzFcclxuICAgICAgICBjdXMucG9zaXRpb24gPSBjYy52MygxMjMsIDIzKTtcclxuICAgICAgICBjdXMubmFtZSA9IFwiY2hhclwiXHJcbiAgICAgICAgY3VzLmNoaWxkcmVuWzBdLnNjYWxlID0gMTtcclxuICAgICAgICBjdXMuc2NhbGUgPSAxXHJcbiAgICAgICAgY3VzLnNjYWxlWCA9IDFcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuXHJcbiAgICAgICAgY3VzQ29tcC5wYXJlbnROYW1lID0gXCJCb3hpbmdcIlxyXG4gICAgICAgIGN1c0NvbXAucGFyZW50SW5kZXggPSB2YWx1ZTtcclxuICAgICAgICBjdXNDb21wLnBhcmVudE5vZGUgPSB0aGlzLmJveGluZzFcclxuICAgICAgICB0aGlzLmFycldhaXRpbmcucHVzaChjdXMpXHJcbiAgICAgICAgY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKS53YWl0aW5nVGFnKHRhZylcclxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXVlSGFuZCgpXHJcbiAgICB9XHJcbiAgICBvZmZJY29uUHQobm9kZSkge1xyXG4gICAgICAgIG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgb25JY29uUHQobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpc0ljb25QdEZyZWUobm9kZSkge1xyXG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5hY3RpdmUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYgKGJ0biAmJiAhYnRuLmVuYWJsZWQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIC8vIGNoaWxkcmVuWzFdID0gYnVzeSBvdmVybGF5XHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5bMV0gJiYgbm9kZS5jaGlsZHJlblsxXS5hY3RpdmUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBoYXNGcmVlTWFjaGluZUZvclRhZyh0YWcpIHtcclxuICAgICAgICBpZiAodGFnID09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckNydW5jaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyckNydW5jaFtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YWcgPT0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWF5RGF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXJyTWF5RGF5W2ldLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKSkgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhZyA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5ib3hpbmcxLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNhbkNsaWNrUXVldWVDdXMoY3VzKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgY3VzQ29tcC5pc1F1ZXVlTW92aW5nKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgcG9wID0gY3VzLmdldENoaWxkQnlOYW1lKFwicG9wXCIpXHJcbiAgICAgICAgaWYgKCFwb3AgfHwgIXBvcC5hY3RpdmUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBidG4gPSBwb3AuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICBpZiAoYnRuICYmICFidG4uZW5hYmxlZCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGVwIDwgNCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzRnJlZU1hY2hpbmVGb3JUYWcoY3VzQ29tcC50YWcpXHJcbiAgICB9XHJcbiAgICBoYXNDdXNXYWl0aW5nRm9yUHQoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwV2FpdGluZygpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycldhaXRpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDdXNXYWl0aW5nRm9yUHQodGhpcy5hcnJXYWl0aW5nW2ldKSkgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjYW5DbGlja0ljb25QdChub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJY29uUHRGcmVlKG5vZGUpICYmIHRoaXMuaGFzQ3VzV2FpdGluZ0ZvclB0KClcclxuICAgIH1cclxuICAgIGhpZGVBbGxJY29uUHRIYW5kcygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJySWNvblB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kID0gdGhpcy5hcnJJY29uUHRbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd0ZyZWVJY29uUHRIYW5kKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUFsbEljb25QdEhhbmRzKClcclxuICAgICAgICB0aGlzLmhpZGVBbGxRdWV1ZUhhbmRzKClcclxuICAgICAgICBpZiAoIXRoaXMuaGFzQ3VzV2FpdGluZ0ZvclB0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5ndWlkaW5nSWNvblB0ID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckljb25QdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMuYXJySWNvblB0W2ldXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkNsaWNrSWNvblB0KGljb24pKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZCA9IGljb24uZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZCkgaGFuZC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgIH1cclxuICAgIGhpZGVBbGxRdWV1ZUhhbmRzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDdXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIGlmICghY3VzIHx8ICFjdXMuaXNWYWxpZCkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IHBvcCA9IGN1cy5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICBpZiAoIXBvcCkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IGhhbmQgPSBwb3AuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlUXVldWVIYW5kKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUFsbFF1ZXVlSGFuZHMoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA8IDQpIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLmd1aWRpbmdJY29uUHQpIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLmhpZGVRdWV1ZUhhbmRHdWlkZSkgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrUXVldWVDdXMoY3VzKSkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IGhhbmQgPSBjdXMuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgICAgIGlmIChoYW5kKSBoYW5kLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xpY2tQdChldmVudCwgdGFnKSB7XHJcbiAgICAgICAgbGV0IHB0ID0gbnVsbDtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGJ0bi5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50ZXh0R3VpbGQxKS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHB0ID0gdGhpcy5saXN0UHQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMlxyXG4gICAgICAgICAgICBsZXQgZm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDdXMoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdC5nZXRDb21wb25lbnQoXCJwdFwiKS5tb3ZlSW4oZm5jKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzFdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIocHQpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9vcl9vcGVuXCIpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvb3JfY2xvc2VcIilcclxuXHJcbiAgICAgICAgICAgIH0sIDAuNylcclxuICAgICAgICAgICAgdGhpcy5vZmZJY29uUHQodGhpcy5hcnJJY29uUHRbMF0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RlcCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHB0ID0gdGhpcy5saXN0UHQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gM1xyXG4gICAgICAgICAgICBwdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9vcl9vcGVuXCIpXHJcbiAgICAgICAgICAgIGxldCBmbmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUN1cygxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB0LmdldENvbXBvbmVudChcInB0XCIpLm1vdmVJbihmbmMpXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKHB0KVxyXG4gICAgICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9vcl9jbG9zZVwiKVxyXG5cclxuICAgICAgICAgICAgfSwgMC43KVxyXG4gICAgICAgICAgICB0aGlzLm9mZkljb25QdCh0aGlzLmFyckljb25QdFsxXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0ZXAgPT0gMykge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBwdCA9IHRoaXMubGlzdFB0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDRcclxuICAgICAgICAgICAgcHQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvb3Jfb3BlblwiKVxyXG5cclxuICAgICAgICAgICAgbGV0IGZuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ3VzKDIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHQuZ2V0Q29tcG9uZW50KFwicHRcIikubW92ZUluKGZuYylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3VzWzJdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIocHQpXHJcbiAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJkb29yX2Nsb3NlXCIpXHJcblxyXG4gICAgICAgICAgICB9LCAwLjcpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmSWNvblB0KHRoaXMuYXJySWNvblB0WzJdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwV2FpdGluZygpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJXYWl0aW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJXYWl0aW5nW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ3VzV2FpdGluZ0ZvclB0KGN1cykpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWRkUHQoY3VzLCBjdXNDb21wLnBhcmVudE5hbWUsIGV2ZW50LmN1cnJlbnRUYXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aWRpbmdJY29uUHQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVRdWV1ZUhhbmQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYW51cFdhaXRpbmcoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuYXJyV2FpdGluZy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDdXNPbk1hY2hpbmUodGhpcy5hcnJXYWl0aW5nW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJXYWl0aW5nLnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNDdXNPbk1hY2hpbmUoY3VzKSB7XHJcbiAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoIWN1c0NvbXAgfHwgIWN1c0NvbXAucGFyZW50Tm9kZSB8fCAhY3VzQ29tcC5wYXJlbnROb2RlLmlzVmFsaWQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmIChjdXMucGFyZW50ICE9PSBjdXNDb21wLnBhcmVudE5vZGUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGlmIChjdXMubmFtZSAhPT0gXCJjaGFyXCIpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpc0N1c1dhaXRpbmdGb3JQdChjdXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDdXNPbk1hY2hpbmUoY3VzKSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuaXNQdCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNYWNoaW5lUHRCdXN5KGN1c0NvbXAucGFyZW50TmFtZSwgY3VzQ29tcC5wYXJlbnRJbmRleCkpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZW1vdmVGcm9tV2FpdGluZyhjdXMpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmFycldhaXRpbmcuaW5kZXhPZihjdXMpXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFycldhaXRpbmcuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1hY2hpbmVLZXkocGFyZW50TmFtZSwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gcGFyZW50TmFtZSArIFwiX1wiICsgaW5kZXhcclxuICAgIH1cclxuICAgIGlzTWFjaGluZVB0QnVzeShwYXJlbnROYW1lLCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMucHRCdXN5TWFjaGluZXNbdGhpcy5nZXRNYWNoaW5lS2V5KHBhcmVudE5hbWUsIGluZGV4KV1cclxuICAgIH1cclxuICAgIHNldE1hY2hpbmVQdEJ1c3kocGFyZW50TmFtZSwgaW5kZXgsIGJ1c3kpIHtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5nZXRNYWNoaW5lS2V5KHBhcmVudE5hbWUsIGluZGV4KVxyXG4gICAgICAgIGlmIChidXN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHRCdXN5TWFjaGluZXNba2V5XSA9IHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wdEJ1c3lNYWNoaW5lc1trZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVsZWFzZU1hY2hpbmVQdChwYXJlbnROYW1lLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2V0TWFjaGluZVB0QnVzeShwYXJlbnROYW1lLCBpbmRleCwgZmFsc2UpXHJcbiAgICB9XHJcbiAgICBnZXRQdFRhZyhwYXJlbnROYW1lLCBwYXJlbnRJbmRleCkge1xyXG4gICAgICAgIHN3aXRjaCAocGFyZW50TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ3J1bmNoXCI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gMFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIDRcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiA1XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gNlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJNYXlEYXlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRJbmRleCA9PT0gMCA/IDEgOiAzXHJcbiAgICAgICAgICAgIGNhc2UgXCJCb3hpbmdcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvdW50cHQgPSAwXHJcbiAgICBvcGVuRG9vcigpIHtcclxuICAgICAgICB0aGlzLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImRvb3Jfb3BlblwiKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9vci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZG9vcl9jbG9zZVwiKVxyXG5cclxuICAgICAgICB9LCAwLjcpXHJcbiAgICB9XHJcbiAgICBhZGRQdChjdXMsIHBhcmVudE5hbWUsIGJ0bikge1xyXG4gICAgICAgIGxldCBjdXNDb21wID0gY3VzLmdldENvbXBvbmVudChcImN1c0d5bVwiKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDdXNXYWl0aW5nRm9yUHQoY3VzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVuRG9vcigpO1xyXG4gICAgICAgIGN1c0NvbXAuaXNQdCA9IHRydWVcclxuICAgICAgICB0aGlzLnNldE1hY2hpbmVQdEJ1c3kocGFyZW50TmFtZSwgY3VzQ29tcC5wYXJlbnRJbmRleCwgdHJ1ZSlcclxuICAgICAgICBsZXQgcHQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmVQdFt0aGlzLmNvdW50cHRdKTtcclxuICAgICAgICBwdC5wYXJlbnQgPSB0aGlzLmxpc3RQdDtcclxuICAgICAgICBwdC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgcHQucG9zaXRpb24gPSBjYy52MygzODIuNjA3LCAxMjEpXHJcbiAgICAgICAgbGV0IHB0Q29tcCA9IHB0LmdldENvbXBvbmVudChcInB0XCIpO1xyXG4gICAgICAgIHB0Q29tcC5idG4gPSBidG5cclxuICAgICAgICBwdENvbXAubWFjaGluZVBhcmVudE5hbWUgPSBwYXJlbnROYW1lXHJcbiAgICAgICAgcHRDb21wLm1hY2hpbmVJbmRleCA9IGN1c0NvbXAucGFyZW50SW5kZXhcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudHB0Kys7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFRvU29ydExheWVyKHB0KVxyXG5cclxuICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRwdCA+IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudHB0ID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGFnID0gdGhpcy5nZXRQdFRhZyhwYXJlbnROYW1lLCBjdXNDb21wLnBhcmVudEluZGV4KVxyXG4gICAgICAgIHB0Q29tcC50YWcgPSBOdW1iZXIodGFnKVxyXG4gICAgICAgIGxldCB0YXJnZXRDdXMgPSBjdXNcclxuICAgICAgICBsZXQgZm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUN1cyhOdW1iZXIodGFnKSwgdGFyZ2V0Q3VzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBwdENvbXAubW92ZUluKGZuYylcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaXNDb3VudEFjdGlvbiA9IDBcclxuICAgIGFjdGl2ZUN1cyh2YWx1ZSwgY3VzID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBjaGFyID0gY3VzICYmIHRoaXMuaXNDdXNPbk1hY2hpbmUoY3VzKSA/IGN1cyA6IG51bGxcclxuICAgICAgICBpZiAoIWNoYXIpIHtcclxuICAgICAgICAgICAgY2hhciA9IHRoaXMuZ2V0Q2hhckJ5UHRUYWcodmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2hhcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJhY3RpdmVDdXM6IG1pc3NpbmcgY2hhciBmb3IgdGFnXCIsIHZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tV2FpdGluZyhjaGFyKVxyXG4gICAgICAgIGxldCBjdXNDb21wID0gY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICBpZiAoY3VzQ29tcCkge1xyXG4gICAgICAgICAgICBjdXNDb21wLmlzUHQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoMSwgLTE2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzBdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lWzBdLCA0KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5kYXlUYSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRheVRhMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKC0xNS43NzEgKyAxNCwgNyAtIDUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lQ3J1bmNoWzBdLCA2KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJveGluZzEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5ib3hpbmcoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveGluZzEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCBjYy52Myg2NDcsIC02NiksIDYpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGxldCBtYXlEYXkyID0gdGhpcy5hcnJNYXlEYXlbMV1cclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmRheVRhKClcclxuICAgICAgICAgICAgICAgIG1heURheTIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIG1heURheTIuZ2V0Q2hpbGRCeU5hbWUoXCJHMV9BYkNydW5jaFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKC0xNS43NzEgKyAxNCwgNyAtIDUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF5RGF5Mi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBtYXlEYXkyLmdldENoaWxkQnlOYW1lKFwiRzFfQWJDcnVuY2hcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZUNydW5jaFsxXSwgNilcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoXCJjdXNHeW1cIikuZ2FwQnVuZygpXHJcbiAgICAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoMSwgLTE2KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMV0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzFdLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEN1c1dvcmtvdXQoY2hhciwgdGhpcy5hcnJQb3NEb25lWzFdLCA0KVxyXG4gICAgICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5nYXBCdW5nKClcclxuICAgICAgICAgICAgICAgIGNoYXIucG9zaXRpb24gPSBjYy52MygxLCAtMTYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFsyXS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDcnVuY2hbMl0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3VzV29ya291dChjaGFyLCB0aGlzLmFyclBvc0RvbmVbMl0sIDQpXHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmdhcEJ1bmcoKVxyXG4gICAgICAgICAgICAgICAgY2hhci5wb3NpdGlvbiA9IGNjLnYzKDEsIC0xNilcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ3J1bmNoWzNdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckNydW5jaFszXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDdXNXb3Jrb3V0KGNoYXIsIHRoaXMuYXJyUG9zRG9uZVszXSwgNClcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIGdldENoYXJCeVB0VGFnKHZhbHVlKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiB0aGlzLmFyckNydW5jaFswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gdGhpcy5kYXlUYTEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIHRoaXMuYm94aW5nMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gdGhpcy5hcnJNYXlEYXlbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIHRoaXMuYXJyQ3J1bmNoWzFdLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjYXNlIDU6IHJldHVybiB0aGlzLmFyckNydW5jaFsyXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gdGhpcy5hcnJDcnVuY2hbM10uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmluaXNoQ3VzV29ya291dChjaGFyLCBwb3NEb25lLCBjb2luKSB7XHJcbiAgICAgICAgaWYgKCFjaGFyIHx8ICFjaGFyLmlzVmFsaWQpIHJldHVyblxyXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbVdhaXRpbmcoY2hhcilcclxuICAgICAgICBsZXQgZG9uZVBvcyA9IHRoaXMudG9Tb3J0TGF5ZXJQb3ModGhpcy5ub2RlLCBwb3NEb25lKVxyXG4gICAgICAgIHRoaXMuYXR0YWNoVG9Tb3J0TGF5ZXIoY2hhcilcclxuICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAgICAgY2hhci5wb3NpdGlvbiA9IGRvbmVQb3NcclxuICAgICAgICBjaGFyLnNjYWxlID0gMC44XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2luKGNoYXIsIGNvaW4pXHJcbiAgICAgICAgY2MudHdlZW4oY2hhcikuZGVsYXkoMSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgICAgIGlmICghdGhpcy5ndWlkaW5nSWNvblB0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lU3RhcnRlZCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0dhbWVTdGFydGVkID0gdHJ1ZVxyXG5cclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFyckljb25QdCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uSWNvblB0KGNoaWxkKVxyXG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFycldhaXRpbmcgPSBbXVxyXG4gICAgICAgIHRoaXMucHRCdXN5TWFjaGluZXMgPSB7fVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNwYXdDdXN0b21lcilcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5hcnJDdXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGN1cyA9IHRoaXMuYXJyQ3VzW2ldXHJcbiAgICAgICAgICAgIGlmIChjdXMgJiYgY3VzLmlzVmFsaWQpIGN1cy5kZXN0cm95KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEN1c05vZGUuY2hpbGRyZW5baV0uZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXJyQ3VzID0gW11cclxuICAgICAgICB0aGlzLnNwYXdDdXN0b21lcigpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zcGF3Q3VzdG9tZXIsIDQpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRHdWlsZDIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5hcnJDdXMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3Q3VzdG9tZXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVldWVIYW5kKClcclxuICAgICAgICB9LCAxNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudGV4dEd1aWxkMikudG8oMC44LCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy56b29tR2FtZSgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENhcmQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LDQpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RhcnRHYW1lKClcclxuICAgICAgICB9LCAyMilcclxuXHJcbiAgICB9XHJcbiAgICB6b29tR2FtZSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYSkudG8oMC44LCB7IHpvb21SYXRpbzogMiB9KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEubm9kZSkudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52MygtNDk0LCAtMjk2KSB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5oaWRlUXVldWVIYW5kR3VpZGUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5oaWRlQWxsUXVldWVIYW5kcygpXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXJyQ3VzLmxlbmd0aCA8IDUgJiYgdGhpcy5hcnJDdXMubGVuZ3RoIDwgdGhpcy5hcnJQb3NDdXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd0N1c3RvbWVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckN1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gdGhpcy5hcnJDdXNbaV1cclxuICAgICAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSBjb250aW51ZVxyXG4gICAgICAgICAgICBsZXQgY3VzQ29tcCA9IGN1cy5nZXRDb21wb25lbnQoXCJjdXNHeW1cIilcclxuICAgICAgICAgICAgaWYgKCFjdXNDb21wKSBjb250aW51ZVxyXG4gICAgICAgICAgICBjdXNDb21wLmlzQW5ncnlXYWl0ID0gdHJ1ZVxyXG4gICAgICAgICAgICBpZiAoIWN1c0NvbXAuaXNRdWV1ZU1vdmluZykge1xyXG4gICAgICAgICAgICAgICAgY3VzQ29tcC50dWNHaWFuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEd1aWxkMy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfSwgMC41KVxyXG5cclxuICAgIH1cclxuICAgIGNsaWNrQ2FyZChldmVudCwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmxpc3RDYXJkLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuOCwgeyB6b29tUmF0aW86IDEgfSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FtZXJhLm5vZGUpLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgICAgIHN3aXRjaCAoTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB0U3BlZWQgPSAxLjVcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ291bnREb3duVGltZSgxNSlcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRleHRHdWlsZDMpIHRoaXMudGV4dEd1aWxkMy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNwYXdDdXN0b21lcilcclxuICAgICAgICB0aGlzLmhpZGVRdWV1ZUhhbmRHdWlkZSA9IHRydWVcclxuICAgICAgICB0aGlzLmhpZGVBbGxRdWV1ZUhhbmRzKClcclxuICAgICAgICB0aGlzLmhpZGVBbGxJY29uUHRIYW5kcygpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9GaWxsTWFjaGluZXNBbmRQdHMoKVxyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmRnYW1lKClcclxuICAgICAgICB9LCA5KVxyXG4gICAgfVxyXG4gICAgYXV0b0ZpbGxNYWNoaW5lc0FuZFB0cygpIHtcclxuICAgICAgICBsZXQgcXVldWUgPSB0aGlzLmFyckN1cy5zbGljZSgpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gcXVldWVbaV1cclxuICAgICAgICAgICAgaWYgKCFjdXMgfHwgIWN1cy5pc1ZhbGlkKSBjb250aW51ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJDdXMuaW5kZXhPZihjdXMpIDwgMCkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgICAgIGlmICghY3VzQ29tcCkgY29udGludWVcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0ZyZWVNYWNoaW5lRm9yVGFnKGN1c0NvbXAudGFnKSkgY29udGludWVcclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGN1cylcclxuICAgICAgICAgICAgY3VzQ29tcC5pc1F1ZXVlTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgbGV0IHBvcCA9IGN1cy5nZXRDaGlsZEJ5TmFtZShcInBvcFwiKVxyXG4gICAgICAgICAgICBpZiAocG9wKSBwb3AuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5wbGFjZUN1c09uRnJlZU1hY2hpbmUoY3VzLCBjdXNDb21wLnRhZylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRvU3Bhd25QdHMoKVxyXG4gICAgfVxyXG4gICAgcGxhY2VDdXNPbkZyZWVNYWNoaW5lKGN1cywgdGFnKSB7XHJcbiAgICAgICAgaWYgKHRhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJDcnVuY2gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJDcnVuY2hbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3VzVG9DcnVuY2goY3VzLCBpLCB0YWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyck1heURheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyck1heURheVtpXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDdXNUb01heURheShjdXMsIGksIHRhZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYm94aW5nMS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1c1RvQm94aW5nKGN1cywgMCwgdGFnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGdldEZyZWVJY29uUHQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckljb25QdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ljb25QdEZyZWUodGhpcy5hcnJJY29uUHRbaV0pKSByZXR1cm4gdGhpcy5hcnJJY29uUHRbaV1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGF1dG9TcGF3blB0cygpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBXYWl0aW5nKClcclxuICAgICAgICBsZXQgd2FpdGluZyA9IHRoaXMuYXJyV2FpdGluZy5zbGljZSgpXHJcbiAgICAgICAgbGV0IGRlbGF5ID0gMFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2FpdGluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VzID0gd2FpdGluZ1tpXVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDdXNXYWl0aW5nRm9yUHQoY3VzKSkgY29udGludWVcclxuICAgICAgICAgICAgbGV0IGN1c0NvbXAgPSBjdXMuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpXHJcbiAgICAgICAgICAgIGxldCBpY29uID0gdGhpcy5nZXRGcmVlSWNvblB0KClcclxuICAgICAgICAgICAgaWYgKGljb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBpY29uLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuKSBidG4uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoaWNvbi5jaGlsZHJlblsxXSkgaWNvbi5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNwYXduQ3VzID0gY3VzXHJcbiAgICAgICAgICAgIGxldCBwYXJlbnROYW1lID0gY3VzQ29tcC5wYXJlbnROYW1lXHJcbiAgICAgICAgICAgIGxldCBpY29uQnRuID0gaWNvblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNwYXduQ3VzIHx8ICFzcGF3bkN1cy5pc1ZhbGlkIHx8ICF0aGlzLmlzQ3VzV2FpdGluZ0ZvclB0KHNwYXduQ3VzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpY29uQnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG4gPSBpY29uQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4pIGJ0bi5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbkJ0bi5jaGlsZHJlblsxXSkgaWNvbkJ0bi5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hZGRQdChzcGF3bkN1cywgcGFyZW50TmFtZSwgaWNvbkJ0bikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbkJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnRuID0gaWNvbkJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuKSBidG4uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGljb25CdG4uY2hpbGRyZW5bMV0pIGljb25CdG4uY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGRlbGF5KVxyXG4gICAgICAgICAgICBkZWxheSArPSAwLjEyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlQ29pbihub2RlLCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbilcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgIGxldCBjb2luID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcclxuICAgICAgICBjb2luLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjb2luLnBvc2l0aW9uID0gcG9zLmFkZChjYy52MygwLCA1MCkpXHJcbiAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IHZhbHVlXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpXHJcblxyXG4gICAgfVxyXG4gICAgbW92ZUN1cyh2YWx1ZSkge1xyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5hcnJDcnVuY2hbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmFyckN1c1sxXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuZGF5VGExLmdldENoaWxkQnlOYW1lKFwiY2hhclwiKVxyXG4gICAgICAgICAgICBjaGFyLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmJveGluZzEuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFyXCIpXHJcbiAgICAgICAgICAgIGNoYXIuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDJcclxuICAgICAgICAgICAgdGhpcy5hcnJDdXNbM10uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm94aW5nMi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkFjdGlvblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0NvdW50QWN0aW9uKys7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudEFjdGlvbiA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhbWUxKClcclxuXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNIaW5kID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIG9uSGluZCgpIHtcclxuICAgIC8vICAgICBsZXQgaW5kZXggPSAxO1xyXG5cclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgLy8gdOG6r3QgdOG6pXQgY+G6oyB0csaw4bubY1xyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyQ3VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgcG9wID0gdGhpcy5hcnJDdXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIik7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAvLyAgICAgICAgICAgICBoYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAvLyBi4bqtdCBjw6FpIGhp4buHbiB04bqhaVxyXG4gICAgLy8gICAgICAgICBsZXQgcG9wID0gdGhpcy5hcnJDdXNbaW5kZXhdLmdldENoaWxkQnlOYW1lKFwicG9wXCIpO1xyXG4gICAgLy8gICAgICAgICBsZXQgaGFuZCA9IHBvcC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAvLyAgICAgICAgIGhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgICAgIGluZGV4Kys7XHJcbiAgICAvLyAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLmFyckN1cy5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIGluZGV4ID0gMTsgLy8gcXVheSBs4bqhaSB04burIMSR4bqndVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSwgMC41KTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlzQ3VzID0gMFxyXG4gICAgLy8gbW92ZUNhbWUxKCkge1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAyLjMgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMjAwLCAtNTUwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgfSwgMC41KVxyXG4gICAgLy8gICAgIHRoaXMuaXNDdXMgPSAwXHJcbiAgICAvLyB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb25zaXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc0NvdW50U3RlcCA9IDBcclxuICAgIC8vIGJ0bl91cGdyYWRlKCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbmZpcm0sIGZhbHNlLCAxKVxyXG4gICAgLy8gICAgIHRoaXMuaXNDb3VudFN0ZXArK1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzQ291bnRTdGVwIDwgNSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gdGhpcy5pc0NvdW50U3RlcCAqIDAuMjVcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5saXN0RS5jaGlsZHJlblt0aGlzLmlzQ291bnRTdGVwIC0gMV0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IGJ0biA9IHRoaXMuZ3VpbGRVcGdyYWRlLmNoaWxkcmVuWzJdLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uXCIpXHJcbiAgICAvLyAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgYnRuLnBvc2l0aW9uID0gY2MudjMoNjAgKiB0aGlzLmlzQ291bnRTdGVwLCAtMTcuOTMpXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNDdXMgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hhciA9IHRoaXMubGlzdENydW5jaC5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImNoYXJcIilcclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTY3LCAtNTApXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubW92ZTQoKVxyXG4gICAgLy8gICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDIwMFxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5waGFvaG9hLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoYXIpLnRvKDAuMywgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9LCAxKVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2UgaWYgKHRoaXMuaXNDdXMgPT0gMSkge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hhciA9IHRoaXMuYm94aW5nMS5jaGlsZHJlblswXVxyXG5cclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzQ291bnRTdGVwID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSAyMDBcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwibm90aUJvbnVzQ29pbjJcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KFwiY3VzR3ltXCIpLmhhcHB5KClcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5tb3ZlNCgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICAgICAgfSwgMSlcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuaXNDb3VudFN0ZXAgPT0gNCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5pc0N1cyA9PSAyKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjaGFyID0gdGhpcy5ib3hpbmcyLmNoaWxkcmVuWzBdXHJcbiAgICAvLyAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgLy8gICAgICAgICAvLyBpZiAodGhpcy5pc0NvdW50U3RlcCA9PSAyKSB7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICAgICAgLy8gfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIG9uRW5kZ2FtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZGdhbWUpIHJldHVyblxyXG4gICAgICAgIHRoaXMuaXNFbmRnYW1lID0gdHJ1ZVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdpbiwgZmFsc2UsIDEpXHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBzdGFydENvdW50RG93bigpIHtcclxuICAgICAgICBsZXQgdGltZUNvbXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihcInRpbWVcIilcclxuICAgICAgICBpZiAodGltZUNvbXAgJiYgdGltZUNvbXAuc3RhcnRDb3VudERvd24pIHtcclxuICAgICAgICAgICAgdGltZUNvbXAuc3RhcnRDb3VudERvd24oKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZENvdW50RG93blRpbWUoc2VjKSB7XHJcbiAgICAgICAgbGV0IHRpbWVDb21wID0gdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oXCJ0aW1lXCIpXHJcbiAgICAgICAgaWYgKHRpbWVDb21wICYmIHRpbWVDb21wLmFkZFRpbWUpIHtcclxuICAgICAgICAgICAgdGltZUNvbXAuYWRkVGltZShzZWMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gbW92ZTIoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBzY2FsZTogMSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5nYW1lKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0N1cyA9IDFcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0NvdW50U3RlcCA9IDBcclxuICAgIC8vICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDBcclxuXHJcbiAgICAvLyAgICAgfSwgMSlcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubW92ZTMoKVxyXG4gICAgLy8gICAgIH0sIDEuNylcclxuICAgIC8vIH1cclxuICAgIC8vIG1vdmUzKCkge1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAyLjcgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgIC8vIGNjLnR3ZWVuKHRoaXMuY2FtZXJhKS50bygwLjMsIHsgem9vbVJhdGlvOiAyLjUgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoLTE5NzMsIC0xMjApIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLmFjdGl2ZSA9IHRydWVcclxuICAgIC8vICAgICB9LCAwLjUpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlNCgpIHtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgIC8vICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ3VzID0gMlxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzQ291bnRTdGVwID0gMFxyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbGxCYXIuZmlsbFJhbmdlID0gMFxyXG4gICAgLy8gICAgIH0sIDEpXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm1vdmU1KClcclxuICAgIC8vICAgICB9LCAxLjcpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlNSgpIHtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLmdhbWUpLnRvKDEsIHsgc2NhbGU6IDEuNyB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEpLnRvKDAuMywgeyB6b29tUmF0aW86IDIuNSB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMTEwMCwgMTAwKSB9KS5zdGFydCgpXHJcbiAgICAvLyAgICAgLy8gbGV0IHRleHQgPSB0aGlzLmd1aWxkVXBncmFkZS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKVxyXG4gICAgLy8gICAgIC8vIHRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIkxhc3Qgb25lISBGaW5pc2ggc3Ryb25nIVwiXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmd1aWxkVXBncmFkZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgLy8gICAgIH0sIDAuNSlcclxuICAgIC8vIH1cclxuICAgIC8vIGRlbTEgPSAwO1xyXG4gICAgLy8gZGVtMiA9IDBcclxuICAgIC8vIGJ0bl91cGdyYWRlMihldmVudCwgdmFsdWUpIHtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDb25maXJtLCBmYWxzZSwgMSlcclxuICAgIC8vICAgICBpZiAodmFsdWUgPT0gXCIxXCIpIHtcclxuICAgIC8vICAgICAgICAgbGV0IGZpbGwgPSB0aGlzLmd1aWxkVXBncmFkZTIuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1RyYWluMlwiKS5jaGlsZHJlblsxXVxyXG4gICAgLy8gICAgICAgICBsZXQgYnRuID0gdGhpcy5ndWlsZFVwZ3JhZGUyLmdldENoaWxkQnlOYW1lKFwiYmdUcmFpbjJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIilcclxuICAgIC8vICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmRheVRhMS5jaGlsZHJlblswXVxyXG4gICAgLy8gICAgICAgICBjaGFyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIC8vICAgICAgICAgY2hhci5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZGVtMSsrXHJcbiAgICAvLyAgICAgICAgIGZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy5kZW0xICogMC4yXHJcbiAgICAvLyAgICAgICAgIGJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICBidG4ucG9zaXRpb24gPSBjYy52Myg1MCAqIHRoaXMuZGVtMSwgLTE3LjkzKVxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5kZW0xID09IDUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLnBvc2l0aW9uID0gY2MudjMoLTgxLCAtNDUpXHJcbiAgICAvLyAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBsZXQgZmlsbCA9IHRoaXMuZ3VpbGRVcGdyYWRlMi5nZXRDaGlsZEJ5TmFtZShcImJnVHJhaW5cIikuY2hpbGRyZW5bMV1cclxuICAgIC8vICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmJveGluZzIuY2hpbGRyZW5bMF1cclxuICAgIC8vICAgICAgICAgbGV0IGJ0biA9IHRoaXMuZ3VpbGRVcGdyYWRlMi5nZXRDaGlsZEJ5TmFtZShcImJnVHJhaW5cIikuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIilcclxuXHJcbiAgICAvLyAgICAgICAgIGNoYXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgLy8gICAgICAgICBjaGFyLmdldENoaWxkQnlOYW1lKFwidmZ4XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5kZW0yKytcclxuICAgIC8vICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIGJ0bi5wb3NpdGlvbiA9IGNjLnYzKDUwICogdGhpcy5kZW0yLCAtMTcuOTMpXHJcbiAgICAvLyAgICAgICAgIGZpbGwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy5kZW0yICogMC4yXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmRlbTIgPT0gNSkge1xyXG4gICAgLy8gICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvaW4sIGZhbHNlLCAxKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJub3RpQm9udXNDb2luMlwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAvLyAgICAgICAgICAgICBjaGFyLmdldENvbXBvbmVudChcImN1c0d5bVwiKS5oYXBweSgpXHJcbiAgICAvLyAgICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgKz0gMjAwXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnBoYW9ob2EuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hhcikudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIH0sIDEpXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBpZiAodGhpcy5kZW0xID09IDUgJiYgdGhpcy5kZW0yID09IDUpIHtcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5ndWlsZFVwZ3JhZGUyKS50bygwLjI2LCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmd1aWxkVXBncmFkZTIuYWN0aXZlID0gZmFsc2VcclxuICAgIC8vICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm1vdmUyKClcclxuICAgIC8vICAgICAgICAgfSwgMC44KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHJlcG9uc2l2ZShsb2dpYykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMVxyXG5cclxuICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gKGxvZ2ljKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IChsb2dpYykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLmd1aWxkVXBncmFkZS5zY2FsZSA9IChsb2dpYykgPyAyLjQgOiAxXHJcbiAgICAgICAgdGhpcy5ndWlsZFVwZ3JhZGUyLnNjYWxlID0gKGxvZ2ljKSA/IDEuNiA6IDFcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXHJcbiAgICAgICAgdGhpcy5sYkNvaW4uc3RyaW5nID0gZ2xvYmFsVGhpcy5nb2xkLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLm5wYy5zY2FsZSA9IChsb2dpYykgPyAxLjcgOiAxXHJcbiAgICAgICAgdGhpcy5ucGMyLnNjYWxlID0gKGxvZ2ljKSA/IDEuNyA6IDFcclxuICAgICAgICB0aGlzLm5wYy55ID0gKGxvZ2ljKSA/IC03MDAgOiAwXHJcbiAgICAgICAgdGhpcy5ucGMyLnkgPSAobG9naWMpID8gLTcwMCA6IDBcclxuICAgICAgICB0aGlzLmVuZENhcmQuc2NhbGUgPSAobG9naWMpID8gMS41IDogMC43XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlID0gKGxvZ2ljKSA/IDEuNSA6IDFcclxuICAgICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAobG9naWMpID8gMS41IDogMTtcclxuICAgICAgICB0aGlzLmNvaW5CYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNzc7XHJcbiAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDQ4XHJcbiAgICAgICAgLy8gdGhpcy5iYXJDb2luLnk9KGxvZ2ljKT80MDA6NDcwXHJcbiAgICAgICAgaWYgKGxvZ2ljID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBmcmFtZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTcwLCAwKVxyXG5cclxuICAgICAgICAgICAgLy8gVsOsIGPDsyB0aOG7gyBu4bqxbSBuZ2FuZyBob+G6t2MgZOG7jWMsIGtp4buDbSB0cmEgY+G6oyBoYWkgY2hp4buBdVxyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBH4bqnbiDEkcO6bmcgdOG7tyBs4buHIG3DoG4gaMOsbmggaVBob25lIFhcclxuICAgICAgICAgICAgY29uc3QgSVBIT05FX1hfQVNQRUNUX1JBVElPID0gODEyIC8gMzc1OyAvLyDiiYggMi4xNlxyXG4gICAgICAgICAgICBjb25zdCBUT0xFUkFOQ0UgPSAwLjA1O1xyXG4gICAgICAgICAgICBjb25zdCBJUEFEX1JBVElPID0gMTAyNCAvIDc2ODsgICAgICAgICAgLy8g4omIIDEuMzNcclxuICAgICAgICAgICAgLy8gdGhpcy5jYW1lcmEuem9vbVJhdGlvID0gMS43XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygxNTAsIDApXHJcbiAgICAgICAgICAgIHRoaXMucGhhb2hvYS5zY2FsZSA9IChsb2dpYykgPyA3IDogM1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrIGlwaG9uZXhcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuY29pbkJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA3NyArIDMwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDQ4ICsgMzBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhhc3BlY3RSYXRpbyAtIElQQURfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxLjRcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpbGRVcGdyYWRlLnNjYWxlID0gMS44XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGZyYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDrCBjw7MgdGjhu4MgbuG6sW0gbmdhbmcgaG/hurdjIGThu41jLCBraeG7g20gdHJhIGPhuqMgaGFpIGNoaeG7gXVcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gR+G6p24gxJHDum5nIHThu7cgbOG7hyBtw6BuIGjDrG5oIGlQaG9uZSBYXHJcbiAgICAgICAgICAgIGNvbnN0IElQSE9ORV9YX0FTUEVDVF9SQVRJTyA9IDgxMiAvIDM3NTsgLy8g4omIIDIuMTZcclxuICAgICAgICAgICAgY29uc3QgVE9MRVJBTkNFID0gMC4wNTtcclxuICAgICAgICAgICAgY29uc3QgSVBBRF9SQVRJTyA9IDEwMjQgLyA3Njg7ICAgICAgICAgIC8vIOKJiCAxLjMzXHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXNwZWN0UmF0aW8gLSBJUEhPTkVfWF9BU1BFQ1RfUkFUSU8pIDwgVE9MRVJBTkNFKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gSVBBRF9SQVRJTykgPCBUT0xFUkFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDAuOFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19