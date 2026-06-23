
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/RecipeRush/scripts/mc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57915vrfK5CpYr2WpCyKiGH', 'mc');
// RecipeRush/scripts/mc.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preChicken = null;
        _this.preCoca = null;
        _this.preCake = null;
        _this.preTomato = null;
        _this.khay = null;
        _this.khay2 = null;
        _this.anim = null;
        _this.table = null;
        _this.machine2 = null;
        // arrPos = [cc.v3(-190, -39), cc.v3(-207, -323), cc.v3(-207, -468), cc.v3(11, -45),cc.v3(237,-122)]
        _this.posStart = cc.v3(207, -122);
        // arrPos[0]=vị trí 1 máy chiên | [1]=2 sốt | [2]=3 khay | [3]=4 quầy bán | [4]=thớt gà
        _this.arrPos = [
            cc.v3(-190, -122),
            cc.v3(-50, -122),
            cc.v3(-207, -468),
            cc.v3(11, -45),
            cc.v3(237, -122),
            cc.v3(237, -468),
        ];
        _this.POS_MACHINE = 1;
        _this.POS_SAUCE = 2;
        _this.POS_COCA = 4;
        _this.POS_SELL = 3;
        _this.POS_CHICKEN = 0;
        _this.POS_CAKE = 5;
        _this.localId = 0;
        _this.gamePlay = null;
        _this.targetChicken = null;
        _this.chicken = false;
        _this.trayItems = [null, null];
        _this.trayItemTypes = [null, null];
        // --- Di chuyển (chống tween/schedule chồng nhau) ---
        _this._moveId = 0;
        _this._isWalking = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.node.position = this.posStart.clone();
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        if (this.khay2)
            this.khay2.active = false;
    };
    NewClass.prototype.getPos = function (index) {
        return this.arrPos[index];
    };
    NewClass.prototype.isAtPos = function (posIndex, threshold) {
        if (threshold === void 0) { threshold = 12; }
        var target = this.getPos(posIndex);
        var pos = this.node.position;
        return Math.abs(pos.x - target.x) <= threshold && Math.abs(pos.y - target.y) <= threshold;
    };
    NewClass.prototype.pickAtCakeCounterOrAct = function (onPick) {
        this.setInFrontOfTable();
        onPick();
    };
    NewClass.prototype.walkToMachineOrAct = function (moveId, onArrive) {
        var _this = this;
        if (this.isAtPos(this.POS_MACHINE)) {
            this.setBehindTable();
            onArrive();
            return;
        }
        this.startWalk(moveId, function () { }, function (t) { return t
            .call(function () { return _this.setBehindTable(); })
            .to(0.6, { position: _this.getPos(_this.POS_MACHINE) }); }, onArrive);
    };
    NewClass.prototype.walkFromCakeToMachine = function (moveId, onArrive) {
        var _this = this;
        if (this.isAtPos(this.POS_MACHINE)) {
            this.setInFrontOfTable();
            onArrive();
            return;
        }
        this.startWalk(moveId, function () {
            _this.node.scaleX = 1;
        }, function (t) {
            var tween = t;
            if (_this.isAtPos(_this.POS_CAKE)) {
                tween = tween.to(0.8, { position: _this.getPos(_this.POS_COCA) }).call(function () { return _this.setBehindTable(); });
            }
            return tween
                .call(function () { return _this.setBehindTable(); })
                .to(1, { position: _this.getPos(_this.POS_CHICKEN) })
                .call(function () { return _this.setInFrontOfTable(); })
                .to(1, { position: _this.getPos(_this.POS_MACHINE) });
        }, onArrive);
    };
    NewClass.prototype.handleMachineAction = function (moveId, machine, walkFn) {
        var _this = this;
        if (machine.chicken != null && machine.isChin && this.canPickItemType("chicken")) {
            walkFn(moveId, function () { return _this.pickupMachineChicken(machine); });
            return true;
        }
        if (this.getRawTraySlot() >= 0 && machine.chicken == null) {
            walkFn(moveId, function () { return _this.fryTrayChicken(machine); });
            return true;
        }
        return false;
    };
    // --- Khay (2 tray) ---
    NewClass.prototype.getTrayNode = function (slot) {
        return slot === 0 ? this.khay : this.khay2;
    };
    NewClass.prototype.resolveTraySlot = function (slot) {
        if (slot != null && slot >= 0)
            return slot;
        var sellSlot = this.gamePlay ? this.gamePlay.sellTraySlot : -1;
        if (sellSlot >= 0)
            return sellSlot;
        if (this.trayItems[0])
            return 0;
        if (this.trayItems[1])
            return 1;
        return 0;
    };
    NewClass.prototype.getFirstEmptyTraySlot = function () {
        if (!this.trayItems[0])
            return 0;
        if (!this.trayItems[1])
            return 1;
        return -1;
    };
    NewClass.prototype.getTrayItem = function (slot) {
        return this.trayItems[this.resolveTraySlot(slot)];
    };
    NewClass.prototype.getChickenComp = function (item) {
        return item ? item.getComponent("chicken") : null;
    };
    NewClass.prototype.getItemType = function (slot) {
        var idx = this.resolveTraySlot(slot);
        if (this.trayItemTypes[idx])
            return this.trayItemTypes[idx];
        var item = this.trayItems[idx];
        if (!item)
            return null;
        if (this.getChickenComp(item))
            return "chicken";
        return null;
    };
    NewClass.prototype.isCocaItem = function (item) {
        if (!item)
            return false;
        for (var i = 0; i < 2; i++) {
            if (item === this.trayItems[i] && this.getItemType(i) === "coca")
                return true;
        }
        return false;
    };
    NewClass.prototype.canSellTrayToCustomer = function (cusComp, slot) {
        var type = this.getItemType(slot);
        if (!type)
            return false;
        var item = this.trayItems[slot];
        if (cusComp.chicken && cusComp.count[0] > 0 && type === "chicken") {
            var comp = this.getChickenComp(item);
            return comp && comp.isChin && cusComp.sauce == comp.isSauce;
        }
        if (cusComp.coca && cusComp.count[1] > 0 && type === "coca")
            return true;
        if (cusComp.cake && cusComp.count[2] > 0 && type === "cake")
            return true;
        if (cusComp.potato && cusComp.count[3] > 0 && type === "tomato")
            return true;
        return false;
    };
    NewClass.prototype.canSellToCustomer = function (cusComp) {
        return this.findTrayForCustomer(cusComp) >= 0;
    };
    NewClass.prototype.findTrayForCustomer = function (cusComp) {
        var trays = this.findAllTraysForCustomer(cusComp);
        return trays.length > 0 ? trays[0] : -1;
    };
    NewClass.prototype.getMissionTypeForSlot = function (slot) {
        var type = this.getItemType(slot);
        if (type === "chicken")
            return 0;
        if (type === "coca")
            return 1;
        if (type === "cake")
            return 2;
        if (type === "tomato")
            return 3;
        return -1;
    };
    NewClass.prototype.canSellTrayToCustomerWithRemaining = function (cusComp, slot, remaining) {
        var type = this.getItemType(slot);
        if (!type)
            return false;
        var item = this.trayItems[slot];
        if (cusComp.chicken && remaining[0] > 0 && type === "chicken") {
            var comp = this.getChickenComp(item);
            return comp && comp.isChin && cusComp.sauce == comp.isSauce;
        }
        if (cusComp.coca && remaining[1] > 0 && type === "coca")
            return true;
        if (cusComp.cake && remaining[2] > 0 && type === "cake")
            return true;
        if (cusComp.potato && remaining[3] > 0 && type === "tomato")
            return true;
        return false;
    };
    NewClass.prototype.findAllTraysForCustomer = function (cusComp) {
        var slots = [];
        var remaining = cusComp.count ? cusComp.count.slice() : [0, 0, 0, 0];
        for (var i = 0; i < 2; i++) {
            if (!this.canSellTrayToCustomerWithRemaining(cusComp, i, remaining))
                continue;
            slots.push(i);
            var missionType = this.getMissionTypeForSlot(i);
            if (missionType >= 0 && remaining[missionType] > 0) {
                remaining[missionType]--;
            }
        }
        return slots;
    };
    NewClass.prototype.hasAnyItem = function () {
        return this.trayItems[0] != null || this.trayItems[1] != null;
    };
    NewClass.prototype.isTrayEmpty = function () {
        return this.trayItems[0] == null && this.trayItems[1] == null;
    };
    NewClass.prototype.isTrayFull = function () {
        return this.trayItems[0] != null && this.trayItems[1] != null;
    };
    NewClass.prototype.getRawTraySlot = function () {
        for (var i = 0; i < 2; i++) {
            var comp = this.getChickenComp(this.trayItems[i]);
            if (comp && !comp.isChin)
                return i;
        }
        return -1;
    };
    NewClass.prototype.findCookedTraySlot = function () {
        for (var i = 0; i < 2; i++) {
            var comp = this.getChickenComp(this.trayItems[i]);
            if (comp && comp.isChin && !comp.isSauce)
                return i;
        }
        return -1;
    };
    NewClass.prototype.putTrayItem = function (item, type, slot) {
        var targetSlot = slot != null ? slot : this.getFirstEmptyTraySlot();
        if (targetSlot < 0)
            return;
        var khayNode = this.getTrayNode(targetSlot);
        if (!khayNode)
            return;
        item.parent = khayNode;
        var anim = item.getComponent(cc.Animation);
        if (anim)
            anim.play();
        this.trayItems[targetSlot] = item;
        this.trayItemTypes[targetSlot] = type || (this.getChickenComp(item) ? "chicken" : null);
        khayNode.active = true;
        this.targetChicken = item;
        this.chicken = true;
        this.updateArms();
    };
    NewClass.prototype.consumeTrayItem = function (slot) {
        var targetSlot = slot != null && slot >= 0 ? slot : this.resolveTraySlot();
        if (targetSlot < 0)
            return;
        if (this.trayItems[targetSlot]) {
            this.trayItems[targetSlot].destroy();
            this.trayItems[targetSlot] = null;
            this.trayItemTypes[targetSlot] = null;
        }
        if (this.isTrayEmpty()) {
            this.chicken = false;
            this.targetChicken = null;
            this.hideTrays();
        }
        else {
            this.updateArms();
        }
    };
    // Có khay trống thì dùng khay trống; cả 2 khay đầy thì bỏ 1 món rồi thêm đồ mới
    NewClass.prototype.canPickItemType = function (targetType) {
        return true;
    };
    NewClass.prototype.findReplaceTraySlot = function (targetType) {
        for (var i = 0; i < 2; i++) {
            if (this.getItemType(i) !== targetType)
                return i;
        }
        return 1;
    };
    NewClass.prototype.preparePickupSlot = function (targetType) {
        var empty = this.getFirstEmptyTraySlot();
        if (empty >= 0)
            return empty;
        var slot = this.findReplaceTraySlot(targetType);
        this.consumeTrayItem(slot);
        return slot;
    };
    NewClass.prototype.hideTrays = function () {
        if (this.khay)
            this.khay.active = false;
        if (this.khay2)
            this.khay2.active = false;
        this.anim.setAnimation(1, "Idle", false);
        this.anim.setAnimation(2, "Idle", false);
    };
    NewClass.prototype.deliverItem = function (slot) {
        var targetSlot = slot != null && slot >= 0 ? slot : (this.gamePlay ? this.gamePlay.sellTraySlot : -1);
        if (targetSlot < 0)
            return;
        this.consumeTrayItem(targetSlot);
    };
    NewClass.prototype.afterDeliver = function () {
        if (this.hasAnyItem()) {
            this.updateArms();
        }
        else {
            this.hideTrays();
        }
        this.finishMove();
    };
    NewClass.prototype.updateArms = function () {
        if (this.trayItems[0]) {
            this.khay.active = true;
            this.anim.setAnimation(1, "L-arm", true);
        }
        else {
            this.khay.active = false;
            this.anim.setAnimation(1, "Idle", false);
        }
        if (this.trayItems[1]) {
            if (this.khay2)
                this.khay2.active = true;
            this.anim.setAnimation(2, "R-arm", true);
        }
        else {
            if (this.khay2)
                this.khay2.active = false;
            this.anim.setAnimation(2, "Idle", false);
        }
    };
    NewClass.prototype.afterCustomerLeft = function () {
        // this.localId = this.hasAnyItem() ? 2 : 0
        this.updateArms();
    };
    NewClass.prototype.canPickMoreChicken = function () {
        if (!this.canPickItemType("chicken"))
            return false;
        return this.localId >= 0 && this.localId <= 5;
    };
    NewClass.prototype.isWalking = function () {
        return this._isWalking;
    };
    NewClass.prototype.cancelMove = function () {
        this._moveId++;
        this._isWalking = false;
        cc.Tween.stopAllByTarget(this.node);
    };
    NewClass.prototype.beginMove = function () {
        this.cancelMove();
        this._isWalking = true;
        return this._moveId;
    };
    NewClass.prototype.isMoveActive = function (moveId) {
        return moveId === this._moveId;
    };
    NewClass.prototype.finishMove = function () {
        this._isWalking = false;
        this.anim.setAnimation(0, "Idle", true);
        this.updateArms();
        if (this.gamePlay)
            this.gamePlay.isMoving = false;
    };
    NewClass.prototype.arriveIdle = function () {
        this.anim.setAnimation(0, "Idle", true);
        this.updateArms();
    };
    NewClass.prototype.scheduleOnMove = function (delay, moveId, fn) {
        var _this = this;
        this.scheduleOnce(function () {
            if (_this.isMoveActive(moveId))
                fn();
        }, delay);
    };
    NewClass.prototype.setInFrontOfTable = function () {
        this.node.zIndex = 2;
        this.table.zIndex = 1;
    };
    NewClass.prototype.setBehindTable = function () {
        this.node.zIndex = 1;
        this.table.zIndex = 2;
    };
    NewClass.prototype.startWalk = function (moveId, setup, build, onComplete) {
        var _this = this;
        if (!this.isMoveActive(moveId))
            return;
        setup();
        this.anim.setAnimation(0, "Walk", true);
        this.updateArms();
        build(cc.tween(this.node))
            .call(function () {
            if (!_this.isMoveActive(moveId))
                return;
            _this._isWalking = false;
            if (onComplete)
                onComplete();
        })
            .start();
    };
    NewClass.prototype.getChickenWalkDuration = function () {
        if (this.localId == 0)
            return 1;
        if (this.localId == 1 || this.localId == 2)
            return 0.8;
        if (this.localId == 3)
            return 0.6;
        if (this.localId == 4)
            return 1.6;
        return 0.8;
    };
    NewClass.prototype.moveToChicken = function () {
        var _this = this;
        if (!this.canPickMoreChicken()) {
            this.finishMove();
            return;
        }
        var moveId = this.beginMove();
        if (this.isAtPos(this.POS_CHICKEN)) {
            this.node.scaleX = 1;
            this.setInFrontOfTable();
            this.spawChicken();
            return;
        }
        if (this.localId == 5) {
            this.startWalk(moveId, function () {
                _this.node.scaleX = 1;
                _this.setInFrontOfTable();
            }, function (t) { return t
                .to(1, { position: _this.getPos(_this.POS_COCA) })
                .call(function () { return _this.setBehindTable(); })
                .to(1.6, { position: _this.getPos(_this.POS_CHICKEN) }); }, function () { return _this.spawChicken(); });
            return;
        }
        if (this.localId >= 0 && this.localId <= 4) {
            this.startWalk(moveId, function () {
                _this.node.scaleX = 1;
                if (_this.localId == 4)
                    _this.setBehindTable();
            }, function (t) { return t.to(_this.getChickenWalkDuration(), { position: _this.getPos(_this.POS_CHICKEN) }); }, function () { return _this.spawChicken(); });
            return;
        }
        this.finishMove();
    };
    NewClass.prototype.spawChicken = function () {
        var slot = this.preparePickupSlot("chicken");
        if (slot < 0) {
            this.finishMove();
            return;
        }
        this.gamePlay.btnChicken.children[0].getComponent(sp.Skeleton).setAnimation(0, "lv1-tap", false);
        var chicken = cc.instantiate(this.preChicken);
        this.putTrayItem(chicken, "chicken", slot);
        // if (this.localId == 0 || this.localId == 3 || this.localId == 4 || this.localId == 5) {
        this.localId = 1;
        // }
        this.finishMove();
    };
    NewClass.prototype.idle = function () {
        this.finishMove();
    };
    NewClass.prototype.pickupMachineChicken = function (machine) {
        var chicken = machine.getChicken();
        chicken.getComponent("chicken").chin2();
        var slot = this.preparePickupSlot("chicken");
        if (slot < 0) {
            this.finishMove();
            return false;
        }
        this.putTrayItem(chicken, "chicken", slot);
        this.localId = 2;
        this.finishMove();
        return true;
    };
    NewClass.prototype.pickupCoca = function (coca) {
        if (!coca || !coca.isCoca)
            return false;
        coca.getCoca();
        if (!this.canPickItemType("coca"))
            return false;
        var slot = this.preparePickupSlot("coca");
        if (slot < 0)
            return false;
        var cocaItem = cc.instantiate(this.preCoca);
        this.putTrayItem(cocaItem, "coca", slot);
        this.localId = 4;
        return true;
    };
    NewClass.prototype.fryTrayChicken = function (machine) {
        var slot = this.getRawTraySlot();
        if (slot < 0) {
            this.finishMove();
            return;
        }
        var chicken = this.trayItems[slot];
        this.trayItems[slot] = null;
        this.trayItemTypes[slot] = null;
        if (this.isTrayEmpty()) {
            this.chicken = false;
            this.targetChicken = null;
        }
        this.updateArms();
        machine.cooking(chicken);
        this.localId = 2;
        this.finishMove();
    };
    NewClass.prototype.moveToMachine = function () {
        var _this = this;
        var machine = this.gamePlay.btnMachine.getComponent("machine");
        var moveId = this.beginMove();
        this.setBehindTable();
        this.node.scaleX = -1;
        if (this.localId == 1 || this.localId == 2) {
            if (!this.handleMachineAction(moveId, machine, function (id, cb) { return _this.walkToMachineOrAct(id, cb); })) {
                this.finishMove();
            }
            return;
        }
        if (this.localId == 3) {
            if (machine.chicken != null && machine.isChin && this.canPickItemType("chicken")) {
                if (this.isAtPos(this.POS_MACHINE)) {
                    this.pickupMachineChicken(machine);
                    return;
                }
                this.startWalk(moveId, function () { }, function (t) { return t
                    .call(function () { return _this.setBehindTable(); })
                    .to(0.4, { position: _this.getPos(_this.POS_CHICKEN) })
                    .call(function () { return _this.setInFrontOfTable(); })
                    .to(1, { position: _this.getPos(_this.POS_MACHINE) }); }, function () { return _this.pickupMachineChicken(machine); });
                return;
            }
            this.startWalk(moveId, function () {
                _this.setBehindTable();
                _this.node.scaleX = 1;
            }, function (t) { return t
                .to(0.6, { position: _this.getPos(_this.POS_CHICKEN) })
                .call(function () { return _this.setInFrontOfTable(); })
                .to(1, { position: _this.getPos(_this.POS_MACHINE) }); }, function () {
                _this.localId = 2;
                _this.finishMove();
            });
            return;
        }
        if (this.localId == 4) {
            this.startWalk(moveId, function () {
                _this.setBehindTable();
                _this.node.scaleX = 1;
            }, function (t) { return t
                .to(0.6, { position: _this.getPos(_this.POS_SELL) })
                .to(0.6, { position: _this.getPos(_this.POS_CHICKEN) })
                .call(function () { return _this.setInFrontOfTable(); })
                .to(1, { position: _this.getPos(_this.POS_MACHINE) }); }, function () {
                _this.localId = 2;
                _this.finishMove();
            });
            return;
        }
        if (this.localId == 5) {
            if (!this.handleMachineAction(moveId, machine, function (id, cb) { return _this.walkFromCakeToMachine(id, cb); })) {
                this.finishMove();
            }
            return;
        }
        this.finishMove();
    };
    NewClass.prototype.moveToSauce = function () {
        var _this = this;
        if (this.localId != 2 || !this.hasAnyItem()) {
            this.finishMove();
            return;
        }
        var slot = this.findCookedTraySlot();
        if (slot < 0) {
            this.finishMove();
            return;
        }
        var cookedItem = this.trayItems[slot];
        var moveId = this.beginMove();
        this.startWalk(moveId, function () {
            _this.setInFrontOfTable();
            _this.node.scaleX = -1;
        }, function (t) { return t.to(0.5, { position: _this.getPos(_this.POS_SAUCE) }); }, function () {
            _this.getChickenComp(cookedItem).addSauce();
            _this.node.scaleX = 1;
            _this.finishMove();
        });
    };
    NewClass.prototype.moveToBuy = function () {
        var _this = this;
        if (!this.hasAnyItem()) {
            this.finishMove();
            return;
        }
        var moveId = this.beginMove();
        this.node.scaleX = -1;
        this.setInFrontOfTable();
        if (this.localId == 1) {
            this.setBehindTable();
            this.startWalk(moveId, function () { }, function (t) { return t.to(0.6, { position: _this.getPos(_this.POS_SELL) }); }, function () {
                if (!_this.isMoveActive(moveId))
                    return;
                _this.arriveIdle();
            });
            this.scheduleOnMove(0.3, moveId, function () {
                if (_this.gamePlay)
                    _this.gamePlay.validateSellAtCounter();
            });
            this.localId = 3;
            return;
        }
        if (this.localId == 2 || this.localId == 3) {
            var sellDelay = this.localId == 3 ? 0.4 : 0.4;
            var tween = this.localId == 3
                ? cc.tween(this.node).call(function () { return _this.setBehindTable(); }).to(0.4, { position: this.getPos(this.POS_SELL) })
                : cc.tween(this.node)
                    // .to(1, { position: this.getPos(this.POS_CHICKEN) })
                    .call(function () { return _this.setBehindTable(); })
                    .to(0.4, { position: this.getPos(this.POS_SELL) });
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            tween.call(function () {
                if (!_this.isMoveActive(moveId))
                    return;
                _this._isWalking = false;
                _this.arriveIdle();
            }).start();
            this.scheduleOnMove(sellDelay, moveId, function () {
                if (_this.gamePlay)
                    _this.gamePlay.validateSellAtCounter();
            });
            this.localId = 3;
            return;
        }
        if (this.localId == 4) {
            this.setBehindTable();
            this.node.scaleX = 1;
            this.startWalk(moveId, function () { }, function (t) { return t.to(0.6, { position: _this.getPos(_this.POS_SELL) }); }, function () {
                if (!_this.isMoveActive(moveId))
                    return;
                _this.arriveIdle();
            });
            this.scheduleOnMove(0.3, moveId, function () {
                if (_this.gamePlay)
                    _this.gamePlay.validateSellAtCounter();
            });
            this.localId = 3;
            return;
        }
        if (this.localId == 5) {
            this.node.scaleX = 1;
            this.startWalk(moveId, function () { }, function (t) { return t
                .to(1, { position: _this.getPos(_this.POS_COCA) })
                .call(function () { return _this.setBehindTable(); })
                .to(0.6, { position: _this.getPos(_this.POS_SELL) }); }, function () {
                if (!_this.isMoveActive(moveId))
                    return;
                _this.arriveIdle();
            });
            this.scheduleOnMove(1, moveId, function () {
                if (_this.gamePlay)
                    _this.gamePlay.validateSellAtCounter();
            });
            this.localId = 3;
            return;
        }
        this.finishMove();
    };
    NewClass.prototype.moveToCoca = function () {
        var _this = this;
        var moveId = this.beginMove();
        this.node.scaleX = -1;
        var cocaComp = this.gamePlay.btnCoca.getComponent("coca");
        var onArriveAtCoca = function () {
            if (!_this.pickupCoca(cocaComp) && cocaComp && !cocaComp.isBusy()) {
                cocaComp.cooking();
            }
            _this.localId = 4;
            _this.finishMove();
        };
        if (this.localId == 1 || this.localId == 3 || this.localId == 5) {
            this.scheduleOnMove(0.6, moveId, function () {
                _this.setInFrontOfTable();
            });
            this.startWalk(moveId, function () { }, function (t) { return t.to(0.8, { position: _this.getPos(_this.POS_COCA) }); }, onArriveAtCoca);
            return;
        }
        if (this.localId == 4 && cocaComp.isCoca) {
            this.pickupCoca(cocaComp);
            this.finishMove();
            return;
        }
        if (this.localId == 2) {
            this.startWalk(moveId, function () { }, function (t) { return t
                .to(1, { position: _this.getPos(_this.POS_CHICKEN) })
                .call(function () { return _this.setBehindTable(); })
                .to(0.8, { position: _this.getPos(_this.POS_COCA) }); }, onArriveAtCoca);
            return;
        }
        this.finishMove();
    };
    NewClass.prototype.moveToCake = function () {
        var _this = this;
        var moveId = this.beginMove();
        if (this.isAtPos(this.POS_CAKE)) {
            this.pickAtCakeCounterOrAct(function () { return _this.getCake(); });
            return;
        }
        if (this.localId == 0 || this.localId == 1) {
            this.startWalk(moveId, function () {
                _this.node.scaleX = -1;
                _this.setInFrontOfTable();
            }, function (t) { return t
                // .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () { return _this.setBehindTable(); })
                .to(0.8, { position: _this.getPos(_this.POS_COCA) })
                .call(function () { return _this.setInFrontOfTable(); })
                .to(1, { position: _this.getPos(_this.POS_CAKE) }); }, function () { return _this.getCake(); });
            return;
        }
        if (this.localId == 2) {
            this.startWalk(moveId, function () {
                _this.node.scaleX = -1;
                _this.setInFrontOfTable();
            }, function (t) { return t
                .to(1, { position: _this.getPos(_this.POS_CHICKEN) })
                .call(function () { return _this.setBehindTable(); })
                .to(0.8, { position: _this.getPos(_this.POS_COCA) })
                .call(function () { return _this.setInFrontOfTable(); })
                .to(1, { position: _this.getPos(_this.POS_CAKE) }); }, function () { return _this.getCake(); });
            return;
        }
        if (this.localId == 3 || this.localId == 5) {
            this.startWalk(moveId, function () {
                _this.node.scaleX = -1;
            }, function (t) { return t
                // t.to(1, { position: this.getPos(this.POS_CHICKEN) })
                //     .call(() => this.setBehindTable())
                .to(0.4, { position: _this.getPos(_this.POS_COCA) })
                .call(function () { return _this.setInFrontOfTable(); })
                .to(1, { position: _this.getPos(_this.POS_CAKE) }); }, function () { return _this.getCake(); });
            return;
        }
        if (this.localId == 4) {
            this.startWalk(moveId, function () {
                _this.node.scaleX = -1;
                _this.setInFrontOfTable();
            }, function (t) { return t.to(1, { position: _this.getPos(_this.POS_CAKE) }); }, function () { return _this.getCake(); });
            return;
        }
        this.finishMove();
    };
    NewClass.prototype.getCake = function () {
        if (!this.canPickItemType("cake")) {
            this.finishMove();
            return;
        }
        var slot = this.preparePickupSlot("cake");
        if (slot < 0) {
            this.finishMove();
            return;
        }
        var cake = cc.instantiate(this.preCake);
        this.putTrayItem(cake, "cake", slot);
        this.localId = 5;
        this.finishMove();
    };
    NewClass.prototype.getTomato = function () {
        if (!this.canPickItemType("tomato")) {
            this.finishMove();
            return;
        }
        var slot = this.preparePickupSlot("tomato");
        if (slot < 0) {
            this.finishMove();
            return;
        }
        var tomato = cc.instantiate(this.preTomato);
        this.putTrayItem(tomato, "tomato", slot);
        this.localId = 5;
        this.finishMove();
    };
    NewClass.prototype.moveToTomato = function () {
        var _this = this;
        var moveId = this.beginMove();
        if (this.isAtPos(this.POS_CAKE)) {
            this.pickAtCakeCounterOrAct(function () { return _this.getTomato(); });
            return;
        }
        if (this.localId == 0 || this.localId == 1) {
            this.startWalk(moveId, function () {
                _this.node.scaleX = -1;
            }, function (t) { return t
                .call(function () { return _this.setBehindTable(); })
                .to(0.8, { position: _this.getPos(_this.POS_COCA) })
                .call(function () { return _this.setInFrontOfTable(); })
                .to(1, { position: _this.getPos(_this.POS_CAKE) }); }, function () { return _this.getTomato(); });
            return;
        }
        if (this.localId == 2) {
            this.startWalk(moveId, function () {
                _this.node.scaleX = -1;
                _this.setInFrontOfTable();
            }, function (t) { return t
                .to(1, { position: _this.getPos(_this.POS_CHICKEN) })
                .call(function () { return _this.setBehindTable(); })
                .to(0.8, { position: _this.getPos(_this.POS_COCA) })
                .call(function () { return _this.setInFrontOfTable(); })
                .to(1, { position: _this.getPos(_this.POS_CAKE) }); }, function () { return _this.getTomato(); });
            return;
        }
        if (this.localId == 3 || this.localId == 5) {
            this.startWalk(moveId, function () {
                _this.node.scaleX = -1;
            }, function (t) { return t
                // .to(1, { position: this.getPos(this.POS_CHICKEN) })
                // .call(() => this.setBehindTable())
                .to(0.4, { position: _this.getPos(_this.POS_COCA) })
                .call(function () { return _this.setInFrontOfTable(); })
                .to(1, { position: _this.getPos(_this.POS_CAKE) }); }, function () { return _this.getTomato(); });
            return;
        }
        if (this.localId == 4) {
            this.startWalk(moveId, function () {
                _this.node.scaleX = -1;
            }, function (t) { return t.to(1, { position: _this.getPos(_this.POS_CAKE) }); }, function () { return _this.getTomato(); });
            return;
        }
        this.finishMove();
    };
    // --- Reset ---
    NewClass.prototype.clearTray = function () {
        this.consumeTrayItem(0);
        this.consumeTrayItem(1);
    };
    NewClass.prototype.resetToStart = function () {
        // this.cancelMove()
        // this.clearTray()
        // this.localId = 0
        // this.node.scaleX = 1
        // this.node.zIndex = 0
        // this.table.zIndex = 0
        // this.anim.setAnimation(0, "Idle", true)
        // this.anim.setAnimation(1, "Idle", false)
        // this.anim.setAnimation(2, "Idle", false)
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preChicken", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCoca", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCake", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preTomato", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "khay", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "khay2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "table", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "machine2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzM0JDO1FBbjNCRyxnQkFBVSxHQUFjLElBQUksQ0FBQTtRQUU1QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixjQUFRLEdBQVMsSUFBSSxDQUFDO1FBRXRCLG9HQUFvRztRQUNwRyxjQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQix1RkFBdUY7UUFDdkYsWUFBTSxHQUFHO1lBQ0wsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNoQixFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUNuQixDQUFB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cHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNoaWNrZW46IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDb2NhOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNha2U6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlVG9tYXRvOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBraGF5OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBraGF5MjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGFibGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWNoaW5lMjpjYy5Ob2RlPW51bGw7XHJcblxyXG4gICAgLy8gYXJyUG9zID0gW2NjLnYzKC0xOTAsIC0zOSksIGNjLnYzKC0yMDcsIC0zMjMpLCBjYy52MygtMjA3LCAtNDY4KSwgY2MudjMoMTEsIC00NSksY2MudjMoMjM3LC0xMjIpXVxyXG4gICAgcG9zU3RhcnQgPSBjYy52MygyMDcsIC0xMjIpXHJcbiAgICAvLyBhcnJQb3NbMF09duG7iyB0csOtIDEgbcOheSBjaGnDqm4gfCBbMV09MiBz4buRdCB8IFsyXT0zIGtoYXkgfCBbM109NCBxdeG6p3kgYsOhbiB8IFs0XT10aOG7m3QgZ8OgXHJcbiAgICBhcnJQb3MgPSBbXHJcbiAgICAgICAgY2MudjMoLTE5MCwgLTEyMiksICAvLyAxIC0gbcOheSBjaGnDqm5cclxuICAgICAgICBjYy52MygtNTAsIC0xMjIpLCAgLy8gMiAtIHPhu5F0XHJcbiAgICAgICAgY2MudjMoLTIwNywgLTQ2OCksICAgLy8gMyAtIGtoYXlcclxuICAgICAgICBjYy52MygxMSwgLTQ1KSwgICAgIC8vIDQgLSBxdeG6p3kgYsOhblxyXG4gICAgICAgIGNjLnYzKDIzNywgLTEyMiksICAgLy8gdGjhu5t0IGfDoFxyXG4gICAgICAgIGNjLnYzKDIzNywgLTQ2OCksICAgICAvLyA1IC0ga2hvYWl0YXksIGNha2VcclxuICAgIF1cclxuICAgIFBPU19NQUNISU5FID0gMVxyXG4gICAgUE9TX1NBVUNFID0gMlxyXG4gICAgUE9TX0NPQ0EgPSA0XHJcbiAgICBQT1NfU0VMTCA9IDNcclxuICAgIFBPU19DSElDS0VOID0gMFxyXG4gICAgUE9TX0NBS0UgPSA1XHJcbiAgICBsb2NhbElkID0gMFxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICB0YXJnZXRDaGlja2VuID0gbnVsbFxyXG4gICAgY2hpY2tlbiA9IGZhbHNlXHJcbiAgICB0cmF5SXRlbXM6IGNjLk5vZGVbXSA9IFtudWxsLCBudWxsXVxyXG4gICAgdHJheUl0ZW1UeXBlczogc3RyaW5nW10gPSBbbnVsbCwgbnVsbF1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLnBvc1N0YXJ0LmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVEb251dFwiKTtcclxuICAgICAgICBpZiAodGhpcy5raGF5MikgdGhpcy5raGF5Mi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBvcyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyUG9zW2luZGV4XVxyXG4gICAgfVxyXG5cclxuICAgIGlzQXRQb3MocG9zSW5kZXg6IG51bWJlciwgdGhyZXNob2xkID0gMTIpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5nZXRQb3MocG9zSW5kZXgpXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wb3NpdGlvblxyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhwb3MueCAtIHRhcmdldC54KSA8PSB0aHJlc2hvbGQgJiYgTWF0aC5hYnMocG9zLnkgLSB0YXJnZXQueSkgPD0gdGhyZXNob2xkXHJcbiAgICB9XHJcblxyXG4gICAgcGlja0F0Q2FrZUNvdW50ZXJPckFjdChvblBpY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICBvblBpY2soKVxyXG4gICAgfVxyXG5cclxuICAgIHdhbGtUb01hY2hpbmVPckFjdChtb3ZlSWQ6IG51bWJlciwgb25BcnJpdmU6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0F0UG9zKHRoaXMuUE9TX01BQ0hJTkUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICBvbkFycml2ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSksXHJcbiAgICAgICAgICAgIG9uQXJyaXZlKVxyXG4gICAgfVxyXG5cclxuICAgIHdhbGtGcm9tQ2FrZVRvTWFjaGluZShtb3ZlSWQ6IG51bWJlciwgb25BcnJpdmU6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0F0UG9zKHRoaXMuUE9TX01BQ0hJTkUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICBvbkFycml2ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICB9LCB0ID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ZWVuID0gdFxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0F0UG9zKHRoaXMuUE9TX0NBS0UpKSB7XHJcbiAgICAgICAgICAgICAgICB0d2VlbiA9IHR3ZWVuLnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSkuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0d2VlblxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSlcclxuICAgICAgICB9LCBvbkFycml2ZSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNYWNoaW5lQWN0aW9uKG1vdmVJZDogbnVtYmVyLCBtYWNoaW5lLCB3YWxrRm46IChtb3ZlSWQ6IG51bWJlciwgb25BcnJpdmU6ICgpID0+IHZvaWQpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAobWFjaGluZS5jaGlja2VuICE9IG51bGwgJiYgbWFjaGluZS5pc0NoaW4gJiYgdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJjaGlja2VuXCIpKSB7XHJcbiAgICAgICAgICAgIHdhbGtGbihtb3ZlSWQsICgpID0+IHRoaXMucGlja3VwTWFjaGluZUNoaWNrZW4obWFjaGluZSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdldFJhd1RyYXlTbG90KCkgPj0gMCAmJiBtYWNoaW5lLmNoaWNrZW4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3YWxrRm4obW92ZUlkLCAoKSA9PiB0aGlzLmZyeVRyYXlDaGlja2VuKG1hY2hpbmUpKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gS2hheSAoMiB0cmF5KSAtLS1cclxuXHJcbiAgICBnZXRUcmF5Tm9kZShzbG90OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gc2xvdCA9PT0gMCA/IHRoaXMua2hheSA6IHRoaXMua2hheTJcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlVHJheVNsb3Qoc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChzbG90ICE9IG51bGwgJiYgc2xvdCA+PSAwKSByZXR1cm4gc2xvdFxyXG4gICAgICAgIGxldCBzZWxsU2xvdCA9IHRoaXMuZ2FtZVBsYXkgPyB0aGlzLmdhbWVQbGF5LnNlbGxUcmF5U2xvdCA6IC0xXHJcbiAgICAgICAgaWYgKHNlbGxTbG90ID49IDApIHJldHVybiBzZWxsU2xvdFxyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtc1swXSkgcmV0dXJuIDBcclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbXNbMV0pIHJldHVybiAxXHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaXJzdEVtcHR5VHJheVNsb3QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRyYXlJdGVtc1swXSkgcmV0dXJuIDBcclxuICAgICAgICBpZiAoIXRoaXMudHJheUl0ZW1zWzFdKSByZXR1cm4gMVxyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYXlJdGVtKHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmF5SXRlbXNbdGhpcy5yZXNvbHZlVHJheVNsb3Qoc2xvdCldXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpY2tlbkNvbXAoaXRlbTogY2MuTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5nZXRDb21wb25lbnQoXCJjaGlja2VuXCIpIDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1UeXBlKHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5yZXNvbHZlVHJheVNsb3Qoc2xvdClcclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbVR5cGVzW2lkeF0pIHJldHVybiB0aGlzLnRyYXlJdGVtVHlwZXNbaWR4XVxyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy50cmF5SXRlbXNbaWR4XVxyXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuIG51bGxcclxuICAgICAgICBpZiAodGhpcy5nZXRDaGlja2VuQ29tcChpdGVtKSkgcmV0dXJuIFwiY2hpY2tlblwiXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpc0NvY2FJdGVtKGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09PSB0aGlzLnRyYXlJdGVtc1tpXSAmJiB0aGlzLmdldEl0ZW1UeXBlKGkpID09PSBcImNvY2FcIikgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2FuU2VsbFRyYXlUb0N1c3RvbWVyKGN1c0NvbXAsIHNsb3Q6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRJdGVtVHlwZShzbG90KVxyXG4gICAgICAgIGlmICghdHlwZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnRyYXlJdGVtc1tzbG90XVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNoaWNrZW4gJiYgY3VzQ29tcC5jb3VudFswXSA+IDAgJiYgdHlwZSA9PT0gXCJjaGlja2VuXCIpIHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmdldENoaWNrZW5Db21wKGl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wICYmIGNvbXAuaXNDaGluICYmIGN1c0NvbXAuc2F1Y2UgPT0gY29tcC5pc1NhdWNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNvY2EgJiYgY3VzQ29tcC5jb3VudFsxXSA+IDAgJiYgdHlwZSA9PT0gXCJjb2NhXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY2FrZSAmJiBjdXNDb21wLmNvdW50WzJdID4gMCAmJiB0eXBlID09PSBcImNha2VcIikgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAoY3VzQ29tcC5wb3RhdG8gJiYgY3VzQ29tcC5jb3VudFszXSA+IDAgJiYgdHlwZSA9PT0gXCJ0b21hdG9cIikgcmV0dXJuIHRydWVcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjYW5TZWxsVG9DdXN0b21lcihjdXNDb21wKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZFRyYXlGb3JDdXN0b21lcihjdXNDb21wKSA+PSAwXHJcbiAgICB9XHJcblxyXG4gICAgZmluZFRyYXlGb3JDdXN0b21lcihjdXNDb21wKSB7XHJcbiAgICAgICAgbGV0IHRyYXlzID0gdGhpcy5maW5kQWxsVHJheXNGb3JDdXN0b21lcihjdXNDb21wKVxyXG4gICAgICAgIHJldHVybiB0cmF5cy5sZW5ndGggPiAwID8gdHJheXNbMF0gOiAtMVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1pc3Npb25UeXBlRm9yU2xvdChzbG90OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoc2xvdClcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJjaGlja2VuXCIpIHJldHVybiAwXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiY29jYVwiKSByZXR1cm4gMVxyXG4gICAgICAgIGlmICh0eXBlID09PSBcImNha2VcIikgcmV0dXJuIDJcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJ0b21hdG9cIikgcmV0dXJuIDNcclxuICAgICAgICByZXR1cm4gLTFcclxuICAgIH1cclxuXHJcbiAgICBjYW5TZWxsVHJheVRvQ3VzdG9tZXJXaXRoUmVtYWluaW5nKGN1c0NvbXAsIHNsb3Q6IG51bWJlciwgcmVtYWluaW5nOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRJdGVtVHlwZShzbG90KVxyXG4gICAgICAgIGlmICghdHlwZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnRyYXlJdGVtc1tzbG90XVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNoaWNrZW4gJiYgcmVtYWluaW5nWzBdID4gMCAmJiB0eXBlID09PSBcImNoaWNrZW5cIikge1xyXG4gICAgICAgICAgICBsZXQgY29tcCA9IHRoaXMuZ2V0Q2hpY2tlbkNvbXAoaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXAgJiYgY29tcC5pc0NoaW4gJiYgY3VzQ29tcC5zYXVjZSA9PSBjb21wLmlzU2F1Y2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY29jYSAmJiByZW1haW5pbmdbMV0gPiAwICYmIHR5cGUgPT09IFwiY29jYVwiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNha2UgJiYgcmVtYWluaW5nWzJdID4gMCAmJiB0eXBlID09PSBcImNha2VcIikgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAoY3VzQ29tcC5wb3RhdG8gJiYgcmVtYWluaW5nWzNdID4gMCAmJiB0eXBlID09PSBcInRvbWF0b1wiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRBbGxUcmF5c0ZvckN1c3RvbWVyKGN1c0NvbXApIHtcclxuICAgICAgICBsZXQgc2xvdHMgPSBbXVxyXG4gICAgICAgIGxldCByZW1haW5pbmcgPSBjdXNDb21wLmNvdW50ID8gY3VzQ29tcC5jb3VudC5zbGljZSgpIDogWzAsIDAsIDAsIDBdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhblNlbGxUcmF5VG9DdXN0b21lcldpdGhSZW1haW5pbmcoY3VzQ29tcCwgaSwgcmVtYWluaW5nKSkgY29udGludWVcclxuICAgICAgICAgICAgc2xvdHMucHVzaChpKVxyXG4gICAgICAgICAgICBsZXQgbWlzc2lvblR5cGUgPSB0aGlzLmdldE1pc3Npb25UeXBlRm9yU2xvdChpKVxyXG4gICAgICAgICAgICBpZiAobWlzc2lvblR5cGUgPj0gMCAmJiByZW1haW5pbmdbbWlzc2lvblR5cGVdID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nW21pc3Npb25UeXBlXS0tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNsb3RzXHJcbiAgICB9XHJcblxyXG4gICAgaGFzQW55SXRlbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmF5SXRlbXNbMF0gIT0gbnVsbCB8fCB0aGlzLnRyYXlJdGVtc1sxXSAhPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaXNUcmF5RW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJheUl0ZW1zWzBdID09IG51bGwgJiYgdGhpcy50cmF5SXRlbXNbMV0gPT0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGlzVHJheUZ1bGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJheUl0ZW1zWzBdICE9IG51bGwgJiYgdGhpcy50cmF5SXRlbXNbMV0gIT0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdldFJhd1RyYXlTbG90KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wID0gdGhpcy5nZXRDaGlja2VuQ29tcCh0aGlzLnRyYXlJdGVtc1tpXSlcclxuICAgICAgICAgICAgaWYgKGNvbXAgJiYgIWNvbXAuaXNDaGluKSByZXR1cm4gaVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTFcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQ29va2VkVHJheVNsb3QoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmdldENoaWNrZW5Db21wKHRoaXMudHJheUl0ZW1zW2ldKVxyXG4gICAgICAgICAgICBpZiAoY29tcCAmJiBjb21wLmlzQ2hpbiAmJiAhY29tcC5pc1NhdWNlKSByZXR1cm4gaVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTFcclxuICAgIH1cclxuXHJcbiAgICBwdXRUcmF5SXRlbShpdGVtOiBjYy5Ob2RlLCB0eXBlPzogc3RyaW5nLCBzbG90PzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFNsb3QgPSBzbG90ICE9IG51bGwgPyBzbG90IDogdGhpcy5nZXRGaXJzdEVtcHR5VHJheVNsb3QoKVxyXG4gICAgICAgIGlmICh0YXJnZXRTbG90IDwgMCkgcmV0dXJuXHJcbiAgICAgICAgbGV0IGtoYXlOb2RlID0gdGhpcy5nZXRUcmF5Tm9kZSh0YXJnZXRTbG90KVxyXG4gICAgICAgIGlmICgha2hheU5vZGUpIHJldHVyblxyXG4gICAgICAgIGl0ZW0ucGFyZW50ID0ga2hheU5vZGVcclxuICAgICAgICBsZXQgYW5pbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBpZiAoYW5pbSkgYW5pbS5wbGF5KClcclxuICAgICAgICB0aGlzLnRyYXlJdGVtc1t0YXJnZXRTbG90XSA9IGl0ZW1cclxuICAgICAgICB0aGlzLnRyYXlJdGVtVHlwZXNbdGFyZ2V0U2xvdF0gPSB0eXBlIHx8ICh0aGlzLmdldENoaWNrZW5Db21wKGl0ZW0pID8gXCJjaGlja2VuXCIgOiBudWxsKVxyXG4gICAgICAgIGtoYXlOb2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnRhcmdldENoaWNrZW4gPSBpdGVtXHJcbiAgICAgICAgdGhpcy5jaGlja2VuID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3VtZVRyYXlJdGVtKHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0U2xvdCA9IHNsb3QgIT0gbnVsbCAmJiBzbG90ID49IDAgPyBzbG90IDogdGhpcy5yZXNvbHZlVHJheVNsb3QoKVxyXG4gICAgICAgIGlmICh0YXJnZXRTbG90IDwgMCkgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zW3RhcmdldFNsb3RdKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJheUl0ZW1zW3RhcmdldFNsb3RdLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB0aGlzLnRyYXlJdGVtc1t0YXJnZXRTbG90XSA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy50cmF5SXRlbVR5cGVzW3RhcmdldFNsb3RdID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1RyYXlFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpY2tlbiA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Q2hpY2tlbiA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy5oaWRlVHJheXMoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEPDsyBraGF5IHRy4buRbmcgdGjDrCBkw7luZyBraGF5IHRy4buRbmc7IGPhuqMgMiBraGF5IMSR4bqneSB0aMOsIGLhu48gMSBtw7NuIHLhu5NpIHRow6ptIMSR4buTIG3hu5tpXHJcbiAgICBjYW5QaWNrSXRlbVR5cGUodGFyZ2V0VHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBmaW5kUmVwbGFjZVRyYXlTbG90KHRhcmdldFR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldEl0ZW1UeXBlKGkpICE9PSB0YXJnZXRUeXBlKSByZXR1cm4gaVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMVxyXG4gICAgfVxyXG5cclxuICAgIHByZXBhcmVQaWNrdXBTbG90KHRhcmdldFR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBlbXB0eSA9IHRoaXMuZ2V0Rmlyc3RFbXB0eVRyYXlTbG90KClcclxuICAgICAgICBpZiAoZW1wdHkgPj0gMCkgcmV0dXJuIGVtcHR5XHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLmZpbmRSZXBsYWNlVHJheVNsb3QodGFyZ2V0VHlwZSlcclxuICAgICAgICB0aGlzLmNvbnN1bWVUcmF5SXRlbShzbG90KVxyXG4gICAgICAgIHJldHVybiBzbG90XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRyYXlzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtoYXkpIHRoaXMua2hheS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmtoYXkyKSB0aGlzLmtoYXkyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsaXZlckl0ZW0oc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0YXJnZXRTbG90ID0gc2xvdCAhPSBudWxsICYmIHNsb3QgPj0gMCA/IHNsb3QgOiAodGhpcy5nYW1lUGxheSA/IHRoaXMuZ2FtZVBsYXkuc2VsbFRyYXlTbG90IDogLTEpXHJcbiAgICAgICAgaWYgKHRhcmdldFNsb3QgPCAwKSByZXR1cm5cclxuICAgICAgICB0aGlzLmNvbnN1bWVUcmF5SXRlbSh0YXJnZXRTbG90KVxyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyRGVsaXZlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNBbnlJdGVtKCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVUcmF5cygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQXJtcygpIHtcclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbXNbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5raGF5LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigxLCBcIkwtYXJtXCIsIHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5raGF5LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbXNbMV0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMua2hheTIpIHRoaXMua2hheTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDIsIFwiUi1hcm1cIiwgdHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5raGF5MikgdGhpcy5raGF5Mi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDIsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJDdXN0b21lckxlZnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5sb2NhbElkID0gdGhpcy5oYXNBbnlJdGVtKCkgPyAyIDogMFxyXG4gICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICB9XHJcblxyXG4gICAgY2FuUGlja01vcmVDaGlja2VuKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJjaGlja2VuXCIpKSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbElkID49IDAgJiYgdGhpcy5sb2NhbElkIDw9IDVcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gRGkgY2h1eeG7g24gKGNo4buRbmcgdHdlZW4vc2NoZWR1bGUgY2jhu5NuZyBuaGF1KSAtLS1cclxuXHJcbiAgICBwcml2YXRlIF9tb3ZlSWQgPSAwXHJcbiAgICBwcml2YXRlIF9pc1dhbGtpbmcgPSBmYWxzZVxyXG5cclxuICAgIGlzV2Fsa2luZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNXYWxraW5nXHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsTW92ZSgpIHtcclxuICAgICAgICB0aGlzLl9tb3ZlSWQrK1xyXG4gICAgICAgIHRoaXMuX2lzV2Fsa2luZyA9IGZhbHNlXHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBiZWdpbk1vdmUoKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLmNhbmNlbE1vdmUoKVxyXG4gICAgICAgIHRoaXMuX2lzV2Fsa2luZyA9IHRydWVcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW92ZUlkXHJcbiAgICB9XHJcblxyXG4gICAgaXNNb3ZlQWN0aXZlKG1vdmVJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vdmVJZCA9PT0gdGhpcy5fbW92ZUlkXHJcbiAgICB9XHJcblxyXG4gICAgZmluaXNoTW92ZSgpIHtcclxuICAgICAgICB0aGlzLl9pc1dhbGtpbmcgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgYXJyaXZlSWRsZSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICB9XHJcblxyXG4gICAgc2NoZWR1bGVPbk1vdmUoZGVsYXk6IG51bWJlciwgbW92ZUlkOiBudW1iZXIsIGZuOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgZm4oKVxyXG4gICAgICAgIH0sIGRlbGF5KVxyXG4gICAgfVxyXG5cclxuICAgIHNldEluRnJvbnRPZlRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAyXHJcbiAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAxXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmVoaW5kVGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDFcclxuICAgICAgICB0aGlzLnRhYmxlLnpJbmRleCA9IDJcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFdhbGsobW92ZUlkOiBudW1iZXIsIHNldHVwOiAoKSA9PiB2b2lkLCBidWlsZDogKHQ6IGNjLlR3ZWVuKSA9PiBjYy5Ud2Vlbiwgb25Db21wbGV0ZT86ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNNb3ZlQWN0aXZlKG1vdmVJZCkpIHJldHVyblxyXG4gICAgICAgIHNldHVwKClcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgYnVpbGQoY2MudHdlZW4odGhpcy5ub2RlKSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW92ZUFjdGl2ZShtb3ZlSWQpKSByZXR1cm5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzV2Fsa2luZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpY2tlbldhbGtEdXJhdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDApIHJldHVybiAxXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAxIHx8IHRoaXMubG9jYWxJZCA9PSAyKSByZXR1cm4gMC44XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzKSByZXR1cm4gMC42XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSByZXR1cm4gMS42XHJcbiAgICAgICAgcmV0dXJuIDAuOFxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb0NoaWNrZW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblBpY2tNb3JlQ2hpY2tlbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd0NoaWNrZW4oKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG5cclxuICAgICAgICAgICAgICAgIC50bygxLjYsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5zcGF3Q2hpY2tlbigpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA+PSAwICYmIHRoaXMubG9jYWxJZCA8PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkgdGhpcy5zZXRCZWhpbmRUYWJsZSgpXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdC50byh0aGlzLmdldENoaWNrZW5XYWxrRHVyYXRpb24oKSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNwYXdDaGlja2VuKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXdDaGlja2VuKCkge1xyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5wcmVwYXJlUGlja3VwU2xvdChcImNoaWNrZW5cIilcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuYnRuQ2hpY2tlbi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImx2MS10YXBcIiwgZmFsc2UpXHJcbiAgICAgICAgbGV0IGNoaWNrZW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNoaWNrZW4pXHJcbiAgICAgICAgdGhpcy5wdXRUcmF5SXRlbShjaGlja2VuLCBcImNoaWNrZW5cIiwgc2xvdClcclxuICAgICAgICAvLyBpZiAodGhpcy5sb2NhbElkID09IDAgfHwgdGhpcy5sb2NhbElkID09IDMgfHwgdGhpcy5sb2NhbElkID09IDQgfHwgdGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICB0aGlzLmxvY2FsSWQgPSAxXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgaWRsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHBpY2t1cE1hY2hpbmVDaGlja2VuKG1hY2hpbmUpIHtcclxuICAgICAgICBsZXQgY2hpY2tlbiA9IG1hY2hpbmUuZ2V0Q2hpY2tlbigpXHJcbiAgICAgICAgY2hpY2tlbi5nZXRDb21wb25lbnQoXCJjaGlja2VuXCIpLmNoaW4yKClcclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJjaGlja2VuXCIpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNoaWNrZW4sIFwiY2hpY2tlblwiLCBzbG90KVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgcGlja3VwQ29jYShjb2NhKSB7XHJcbiAgICAgICAgaWYgKCFjb2NhIHx8ICFjb2NhLmlzQ29jYSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgY29jYS5nZXRDb2NhKClcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUGlja0l0ZW1UeXBlKFwiY29jYVwiKSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLnByZXBhcmVQaWNrdXBTbG90KFwiY29jYVwiKVxyXG4gICAgICAgIGlmIChzbG90IDwgMCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGNvY2FJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2NhKVxyXG4gICAgICAgIHRoaXMucHV0VHJheUl0ZW0oY29jYUl0ZW0sIFwiY29jYVwiLCBzbG90KVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDRcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGZyeVRyYXlDaGlja2VuKG1hY2hpbmUpIHtcclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMuZ2V0UmF3VHJheVNsb3QoKVxyXG4gICAgICAgIGlmIChzbG90IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoaWNrZW4gPSB0aGlzLnRyYXlJdGVtc1tzbG90XVxyXG4gICAgICAgIHRoaXMudHJheUl0ZW1zW3Nsb3RdID0gbnVsbFxyXG4gICAgICAgIHRoaXMudHJheUl0ZW1UeXBlc1tzbG90XSA9IG51bGxcclxuICAgICAgICBpZiAodGhpcy5pc1RyYXlFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpY2tlbiA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Q2hpY2tlbiA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICBtYWNoaW5lLmNvb2tpbmcoY2hpY2tlbilcclxuICAgICAgICB0aGlzLmxvY2FsSWQgPSAyXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9NYWNoaW5lKCkge1xyXG4gICAgICAgIGxldCBtYWNoaW5lID0gdGhpcy5nYW1lUGxheS5idG5NYWNoaW5lLmdldENvbXBvbmVudChcIm1hY2hpbmVcIilcclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlTWFjaGluZUFjdGlvbihtb3ZlSWQsIG1hY2hpbmUsIChpZCwgY2IpID0+IHRoaXMud2Fsa1RvTWFjaGluZU9yQWN0KGlkLCBjYikpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGlmIChtYWNoaW5lLmNoaWNrZW4gIT0gbnVsbCAmJiBtYWNoaW5lLmlzQ2hpbiAmJiB0aGlzLmNhblBpY2tJdGVtVHlwZShcImNoaWNrZW5cIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfTUFDSElORSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2t1cE1hY2hpbmVDaGlja2VuKG1hY2hpbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjQsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5waWNrdXBNYWNoaW5lQ2hpY2tlbihtYWNoaW5lKSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRCZWhpbmRUYWJsZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC50bygwLjYsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gMlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19NQUNISU5FKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVNYWNoaW5lQWN0aW9uKG1vdmVJZCwgbWFjaGluZSwgKGlkLCBjYikgPT4gdGhpcy53YWxrRnJvbUNha2VUb01hY2hpbmUoaWQsIGNiKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb1NhdWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgIT0gMiB8fCAhdGhpcy5oYXNBbnlJdGVtKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5maW5kQ29va2VkVHJheVNsb3QoKVxyXG4gICAgICAgIGlmIChzbG90IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvb2tlZEl0ZW0gPSB0aGlzLnRyYXlJdGVtc1tzbG90XVxyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICB9LCB0ID0+IHQudG8oMC41LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TQVVDRSkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXRDaGlja2VuQ29tcChjb29rZWRJdGVtKS5hZGRTYXVjZSgpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9CdXkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FueUl0ZW0oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1vdmVJZCA9IHRoaXMuYmVnaW5Nb3ZlKClcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRCZWhpbmRUYWJsZSgpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHQudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW92ZUFjdGl2ZShtb3ZlSWQpKSByZXR1cm5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyaXZlSWRsZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbk1vdmUoMC4zLCBtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQbGF5KSB0aGlzLmdhbWVQbGF5LnZhbGlkYXRlU2VsbEF0Q291bnRlcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDNcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMiB8fCB0aGlzLmxvY2FsSWQgPT0gMykge1xyXG4gICAgICAgICAgICBsZXQgc2VsbERlbGF5ID0gdGhpcy5sb2NhbElkID09IDMgPyAwLjQgOiAwLjRcclxuICAgICAgICAgICAgbGV0IHR3ZWVuID0gdGhpcy5sb2NhbElkID09IDNcclxuICAgICAgICAgICAgICAgID8gY2MudHdlZW4odGhpcy5ub2RlKS5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSkudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG4gICAgICAgICAgICAgICAgOiBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjQsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX1NFTEwpIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgICAgIHR3ZWVuLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW92ZUFjdGl2ZShtb3ZlSWQpKSByZXR1cm5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzV2Fsa2luZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycml2ZUlkbGUoKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbk1vdmUoc2VsbERlbGF5LCBtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQbGF5KSB0aGlzLmdhbWVQbGF5LnZhbGlkYXRlU2VsbEF0Q291bnRlcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDNcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRCZWhpbmRUYWJsZSgpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHQudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW92ZUFjdGl2ZShtb3ZlSWQpKSByZXR1cm5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyaXZlSWRsZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbk1vdmUoMC4zLCBtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQbGF5KSB0aGlzLmdhbWVQbGF5LnZhbGlkYXRlU2VsbEF0Q291bnRlcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDNcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7IH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJpdmVJZGxlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbk1vdmUoMSwgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuICAgIG1vdmVUb0NvY2EoKSB7XHJcbiAgICAgICAgbGV0IG1vdmVJZCA9IHRoaXMuYmVnaW5Nb3ZlKClcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICBsZXQgY29jYUNvbXAgPSB0aGlzLmdhbWVQbGF5LmJ0bkNvY2EuZ2V0Q29tcG9uZW50KFwiY29jYVwiKVxyXG5cclxuICAgICAgICBsZXQgb25BcnJpdmVBdENvY2EgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5waWNrdXBDb2NhKGNvY2FDb21wKSAmJiBjb2NhQ29tcCAmJiAhY29jYUNvbXAuaXNCdXN5KCkpIHtcclxuICAgICAgICAgICAgICAgIGNvY2FDb21wLmNvb2tpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDRcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMyB8fCB0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKDAuNiwgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7IH0sIHQgPT4gdC50bygwLjgsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pLCBvbkFycml2ZUF0Q29jYSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDQgJiYgY29jYUNvbXAuaXNDb2NhKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGlja3VwQ29jYShjb2NhQ29tcClcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7IH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KSwgb25BcnJpdmVBdENvY2EpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9DYWtlKCkge1xyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdFBvcyh0aGlzLlBPU19DQUtFKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBpY2tBdENha2VDb3VudGVyT3JBY3QoKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAwIHx8IHRoaXMubG9jYWxJZCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAvLyAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjgsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdldENha2UoKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzIHx8IHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLy8gdC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjQsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdldENha2UoKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICB9LCB0ID0+IHQudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdldENha2UoKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldENha2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblBpY2tJdGVtVHlwZShcImNha2VcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5wcmVwYXJlUGlja3VwU2xvdChcImNha2VcIilcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjYWtlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDYWtlKVxyXG4gICAgICAgIHRoaXMucHV0VHJheUl0ZW0oY2FrZSwgXCJjYWtlXCIsIHNsb3QpXHJcbiAgICAgICAgdGhpcy5sb2NhbElkID0gNVxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9tYXRvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJ0b21hdG9cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5wcmVwYXJlUGlja3VwU2xvdChcInRvbWF0b1wiKVxyXG4gICAgICAgIGlmIChzbG90IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvbWF0byA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlVG9tYXRvKVxyXG4gICAgICAgIHRoaXMucHV0VHJheUl0ZW0odG9tYXRvLCBcInRvbWF0b1wiLCBzbG90KVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDVcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb1RvbWF0bygpIHtcclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfQ0FLRSkpIHtcclxuICAgICAgICAgICAgdGhpcy5waWNrQXRDYWtlQ291bnRlck9yQWN0KCgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAwIHx8IHRoaXMubG9jYWxJZCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG5cclxuICAgICAgICAgICAgICAgIC50bygwLjgsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdldFRvbWF0bygpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjgsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdldFRvbWF0bygpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzIHx8IHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLy8gLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRUb21hdG8oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgfSwgdCA9PiB0LnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRUb21hdG8oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG4gICAgLy8gLS0tIFJlc2V0IC0tLVxyXG5cclxuICAgIGNsZWFyVHJheSgpIHtcclxuICAgICAgICB0aGlzLmNvbnN1bWVUcmF5SXRlbSgwKVxyXG4gICAgICAgIHRoaXMuY29uc3VtZVRyYXlJdGVtKDEpXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRUb1N0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuY2FuY2VsTW92ZSgpXHJcbiAgICAgICAgLy8gdGhpcy5jbGVhclRyYXkoKVxyXG4gICAgICAgIC8vIHRoaXMubG9jYWxJZCA9IDBcclxuICAgICAgICAvLyB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS56SW5kZXggPSAwXHJcbiAgICAgICAgLy8gdGhpcy50YWJsZS56SW5kZXggPSAwXHJcbiAgICAgICAgLy8gdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAvLyB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDEsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgICAgICAvLyB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDIsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgIH1cclxufVxyXG4iXX0=