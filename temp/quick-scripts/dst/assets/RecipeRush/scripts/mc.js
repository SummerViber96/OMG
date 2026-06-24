
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
                _this.setInFrontOfTable();
                tween = tween.to(0.8, { position: _this.getPos(_this.POS_COCA) }).call(function () { return _this.setBehindTable(); });
            }
            return tween
                // .call(() => this.setBehindTable())
                // .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () { return _this.setBehindTable(); })
                .to(0.6, { position: _this.getPos(_this.POS_MACHINE) });
        }, onArrive);
    };
    // --- Máy chiên (machine + machine2) ---
    NewClass.prototype.getMachine2Comp = function () {
        return this.machine2 ? this.machine2.getComponent("machine") : null;
    };
    NewClass.prototype.getMachines = function () {
        var list = [];
        if (this.gamePlay && this.gamePlay.btnMachine) {
            var m = this.gamePlay.btnMachine.getComponent("machine");
            if (m)
                list.push(m);
        }
        var m2 = this.getMachine2Comp();
        if (m2 && list.indexOf(m2) < 0)
            list.push(m2);
        return list;
    };
    NewClass.prototype.getItemTypeAtSlot = function (slot) {
        if (slot < 0 || slot > 1)
            return null;
        if (this.trayItemTypes[slot])
            return this.trayItemTypes[slot];
        var item = this.trayItems[slot];
        if (!item)
            return null;
        if (this.getChickenComp(item))
            return "chicken";
        return null;
    };
    NewClass.prototype.isRawChickenItem = function (item) {
        var comp = this.getChickenComp(item);
        return comp != null && !comp.isChin;
    };
    NewClass.prototype.findRawChickenTraySlots = function () {
        var slots = [];
        for (var i = 0; i < 2; i++) {
            if (this.getItemTypeAtSlot(i) !== "chicken")
                continue;
            if (this.isRawChickenItem(this.trayItems[i]))
                slots.push(i);
        }
        return slots;
    };
    NewClass.prototype.getMachineItemType = function (item) {
        return this.getChickenComp(item) ? "chicken" : "cake";
    };
    NewClass.prototype.checkMachine = function (machine) {
        if (!machine)
            return null;
        if (machine.isReady()) {
            var itemType = this.getMachineItemType(machine.chicken);
            if (this.canPickItemType(itemType)) {
                return { action: "pickup", machine: machine, itemType: itemType };
            }
            return null;
        }
        if (machine.isCooking())
            return { action: "busy", machine: machine };
        return null;
    };
    NewClass.prototype.assignTrayItemsToMachines = function (machines, slots, action) {
        var plan = [];
        var usedMachines = [];
        for (var _i = 0, slots_1 = slots; _i < slots_1.length; _i++) {
            var slot = slots_1[_i];
            var target = machines.find(function (m) { return m.canAcceptFood() && usedMachines.indexOf(m) < 0; });
            if (!target)
                break;
            usedMachines.push(target);
            plan.push({ action: action, machine: target, slot: slot });
        }
        return plan;
    };
    NewClass.prototype.buildMachinePlan = function () {
        var machines = this.getMachines();
        var plan = [];
        for (var _i = 0, machines_1 = machines; _i < machines_1.length; _i++) {
            var m = machines_1[_i];
            var state = this.checkMachine(m);
            if (state && state.action === "pickup") {
                plan.push({ action: "pickup", machine: m });
                return plan;
            }
        }
        var rawSlots = this.findRawChickenTraySlots();
        return this.assignTrayItemsToMachines(machines, rawSlots, "fry_chicken");
    };
    NewClass.prototype.canDoAnyMachineAction = function () {
        return this.buildMachinePlan().length > 0;
    };
    NewClass.prototype.findPickupMachine = function () {
        for (var _i = 0, _a = this.getMachines(); _i < _a.length; _i++) {
            var m = _a[_i];
            var state = this.checkMachine(m);
            if (state && state.action === "pickup")
                return m;
        }
        return null;
    };
    NewClass.prototype.executeMachinePlan = function (plan) {
        if (!plan || plan.length === 0) {
            this.finishMove();
            return;
        }
        if (plan[0].action === "pickup") {
            this.pickupFromMachine(plan[0].machine);
            return;
        }
        var chickenActions = plan.filter(function (a) { return a.action === "fry_chicken"; });
        if (chickenActions.length > 0) {
            for (var _i = 0, chickenActions_1 = chickenActions; _i < chickenActions_1.length; _i++) {
                var a = chickenActions_1[_i];
                this.fryTrayChicken(a.machine, a.slot, false);
            }
            if (this.isTrayEmpty()) {
                this.chicken = false;
                this.targetChicken = null;
            }
            this.updateArms();
            this.localId = 2;
            this.finishMove();
            return;
        }
        this.finishMove();
    };
    NewClass.prototype.runMachineStation = function (moveId, walkFn) {
        var _this = this;
        var plan = this.buildMachinePlan();
        if (plan.length === 0)
            return false;
        walkFn(moveId, function () { return _this.executeMachinePlan(plan); });
        return true;
    };
    NewClass.prototype.getWalkToMachineFn = function (localId) {
        var _this = this;
        if (localId == 5)
            return function (id, cb) { return _this.walkFromCakeToMachine(id, cb); };
        if (localId == 4) {
            return function (id, cb) { return _this.startWalk(id, function () {
                _this.setBehindTable();
                _this.node.scaleX = 1;
            }, function (t) { return t
                // .to(0.6, { position: this.getPos(this.POS_SELL) })
                // .to(0.6, { position: this.getPos(this.POS_CHICKEN) })
                // .call(() => this.setInFrontOfTable())
                .to(0.6, { position: _this.getPos(_this.POS_MACHINE) }); }, cb); };
        }
        if (localId == 3) {
            return function (id, cb) { return _this.startWalk(id, function () { }, function (t) { return t
                .call(function () { return _this.setBehindTable(); })
                // .to(0.4, { position: this.getPos(this.POS_CHICKEN) })
                // .call(() => this.setInFrontOfTable())
                .to(0.2, { position: _this.getPos(_this.POS_MACHINE) }); }, cb); };
        }
        return function (id, cb) { return _this.walkToMachineOrAct(id, cb); };
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
    NewClass.prototype.pickupFromMachine = function (machine) {
        var item = machine.getChicken();
        if (!item) {
            this.finishMove();
            return false;
        }
        var type = this.getMachineItemType(item);
        if (type === "chicken")
            item.getComponent("chicken").chin2();
        var slot = this.preparePickupSlot(type);
        if (slot < 0) {
            this.finishMove();
            return false;
        }
        this.putTrayItem(item, type, slot);
        this.localId = type === "chicken" ? 2 : 5;
        this.finishMove();
        return true;
    };
    NewClass.prototype.pickupMachineChicken = function (machine) {
        return this.pickupFromMachine(machine);
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
    NewClass.prototype.fryTrayChicken = function (machine, slot, finish) {
        if (finish === void 0) { finish = true; }
        var chicken = this.trayItems[slot];
        if (!this.isRawChickenItem(chicken) || !machine.cooking(chicken)) {
            if (finish)
                this.finishMove();
            return false;
        }
        this.trayItems[slot] = null;
        this.trayItemTypes[slot] = null;
        if (!finish)
            return true;
        if (this.isTrayEmpty()) {
            this.chicken = false;
            this.targetChicken = null;
        }
        this.updateArms();
        this.localId = 2;
        this.finishMove();
        return true;
    };
    NewClass.prototype.moveToMachine = function () {
        var moveId = this.beginMove();
        this.setBehindTable();
        this.node.scaleX = -1;
        var walkFn = this.getWalkToMachineFn(this.localId);
        if (!this.runMachineStation(moveId, walkFn)) {
            this.finishMove();
        }
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
            var sellDelay = this.localId == 3 ? 0.1 : 0.1;
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
                // .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () { return _this.setBehindTable(); })
                .to(0.6, { position: _this.getPos(_this.POS_COCA) }); }, onArriveAtCoca);
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
                // .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () { return _this.setBehindTable(); })
                .to(0.6, { position: _this.getPos(_this.POS_COCA) })
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
                .to(0.6, { position: _this.getPos(_this.POS_COCA) })
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
                // .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () { return _this.setBehindTable(); })
                .to(0.6, { position: _this.getPos(_this.POS_COCA) })
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
                .to(0.6, { position: _this.getPos(_this.POS_COCA) })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1OUJDO1FBcDlCRyxnQkFBVSxHQUFjLElBQUksQ0FBQTtRQUU1QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixjQUFRLEdBQVMsSUFBSSxDQUFDO1FBRXRCLG9HQUFvRztRQUNwRyxjQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQix1RkFBdUY7UUFDdkYsWUFBTSxHQUFHO1lBQ0wsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNoQixFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUNuQixDQUFB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LyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDaGlja2VuOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ29jYTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDYWtlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVRvbWF0bzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2hheTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2hheTI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFjaGluZTI6Y2MuTm9kZT1udWxsO1xyXG5cclxuICAgIC8vIGFyclBvcyA9IFtjYy52MygtMTkwLCAtMzkpLCBjYy52MygtMjA3LCAtMzIzKSwgY2MudjMoLTIwNywgLTQ2OCksIGNjLnYzKDExLCAtNDUpLGNjLnYzKDIzNywtMTIyKV1cclxuICAgIHBvc1N0YXJ0ID0gY2MudjMoMjA3LCAtMTIyKVxyXG4gICAgLy8gYXJyUG9zWzBdPXbhu4sgdHLDrSAxIG3DoXkgY2hpw6puIHwgWzFdPTIgc+G7kXQgfCBbMl09MyBraGF5IHwgWzNdPTQgcXXhuqd5IGLDoW4gfCBbNF09dGjhu5t0IGfDoFxyXG4gICAgYXJyUG9zID0gW1xyXG4gICAgICAgIGNjLnYzKC0xOTAsIC0xMjIpLCAgLy8gMSAtIG3DoXkgY2hpw6puXHJcbiAgICAgICAgY2MudjMoLTUwLCAtMTIyKSwgIC8vIDIgLSBz4buRdFxyXG4gICAgICAgIGNjLnYzKC0yMDcsIC00NjgpLCAgIC8vIDMgLSBraGF5XHJcbiAgICAgICAgY2MudjMoMTEsIC00NSksICAgICAvLyA0IC0gcXXhuqd5IGLDoW5cclxuICAgICAgICBjYy52MygyMzcsIC0xMjIpLCAgIC8vIHRo4bubdCBnw6BcclxuICAgICAgICBjYy52MygyMzcsIC00NjgpLCAgICAgLy8gNSAtIGtob2FpdGF5LCBjYWtlXHJcbiAgICBdXHJcbiAgICBQT1NfTUFDSElORSA9IDFcclxuICAgIFBPU19TQVVDRSA9IDJcclxuICAgIFBPU19DT0NBID0gNFxyXG4gICAgUE9TX1NFTEwgPSAzXHJcbiAgICBQT1NfQ0hJQ0tFTiA9IDBcclxuICAgIFBPU19DQUtFID0gNVxyXG4gICAgbG9jYWxJZCA9IDBcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgdGFyZ2V0Q2hpY2tlbiA9IG51bGxcclxuICAgIGNoaWNrZW4gPSBmYWxzZVxyXG4gICAgdHJheUl0ZW1zOiBjYy5Ob2RlW10gPSBbbnVsbCwgbnVsbF1cclxuICAgIHRyYXlJdGVtVHlwZXM6IHN0cmluZ1tdID0gW251bGwsIG51bGxdXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5wb3NTdGFydC5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIik7XHJcbiAgICAgICAgaWYgKHRoaXMua2hheTIpIHRoaXMua2hheTIuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3MoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyclBvc1tpbmRleF1cclxuICAgIH1cclxuXHJcbiAgICBpc0F0UG9zKHBvc0luZGV4OiBudW1iZXIsIHRocmVzaG9sZCA9IDEyKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZ2V0UG9zKHBvc0luZGV4KVxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb25cclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMocG9zLnggLSB0YXJnZXQueCkgPD0gdGhyZXNob2xkICYmIE1hdGguYWJzKHBvcy55IC0gdGFyZ2V0LnkpIDw9IHRocmVzaG9sZFxyXG4gICAgfVxyXG5cclxuICAgIHBpY2tBdENha2VDb3VudGVyT3JBY3Qob25QaWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgb25QaWNrKClcclxuICAgIH1cclxuXHJcbiAgICB3YWxrVG9NYWNoaW5lT3JBY3QobW92ZUlkOiBudW1iZXIsIG9uQXJyaXZlOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdFBvcyh0aGlzLlBPU19NQUNISU5FKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEJlaGluZFRhYmxlKClcclxuICAgICAgICAgICAgb25BcnJpdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7IH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgIC50bygwLjYsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX01BQ0hJTkUpIH0pLFxyXG4gICAgICAgICAgICBvbkFycml2ZSlcclxuICAgIH1cclxuXHJcbiAgICB3YWxrRnJvbUNha2VUb01hY2hpbmUobW92ZUlkOiBudW1iZXIsIG9uQXJyaXZlOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdFBvcyh0aGlzLlBPU19NQUNISU5FKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgb25BcnJpdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgfSwgdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0d2VlbiA9IHRcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBdFBvcyh0aGlzLlBPU19DQUtFKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcblxyXG4gICAgICAgICAgICAgICAgdHdlZW4gPSB0d2Vlbi50bygwLjgsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHdlZW5cclxuICAgICAgICAgICAgICAgIC8vIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC8vIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSlcclxuICAgICAgICB9LCBvbkFycml2ZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gTcOheSBjaGnDqm4gKG1hY2hpbmUgKyBtYWNoaW5lMikgLS0tXHJcblxyXG4gICAgZ2V0TWFjaGluZTJDb21wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hY2hpbmUyID8gdGhpcy5tYWNoaW5lMi5nZXRDb21wb25lbnQoXCJtYWNoaW5lXCIpIDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdldE1hY2hpbmVzKCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheSAmJiB0aGlzLmdhbWVQbGF5LmJ0bk1hY2hpbmUpIHtcclxuICAgICAgICAgICAgbGV0IG0gPSB0aGlzLmdhbWVQbGF5LmJ0bk1hY2hpbmUuZ2V0Q29tcG9uZW50KFwibWFjaGluZVwiKVxyXG4gICAgICAgICAgICBpZiAobSkgbGlzdC5wdXNoKG0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtMiA9IHRoaXMuZ2V0TWFjaGluZTJDb21wKClcclxuICAgICAgICBpZiAobTIgJiYgbGlzdC5pbmRleE9mKG0yKSA8IDApIGxpc3QucHVzaChtMilcclxuICAgICAgICByZXR1cm4gbGlzdFxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1UeXBlQXRTbG90KHNsb3Q6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChzbG90IDwgMCB8fCBzbG90ID4gMSkgcmV0dXJuIG51bGxcclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbVR5cGVzW3Nsb3RdKSByZXR1cm4gdGhpcy50cmF5SXRlbVR5cGVzW3Nsb3RdXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnRyYXlJdGVtc1tzbG90XVxyXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuIG51bGxcclxuICAgICAgICBpZiAodGhpcy5nZXRDaGlja2VuQ29tcChpdGVtKSkgcmV0dXJuIFwiY2hpY2tlblwiXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpc1Jhd0NoaWNrZW5JdGVtKGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgY29tcCA9IHRoaXMuZ2V0Q2hpY2tlbkNvbXAoaXRlbSlcclxuICAgICAgICByZXR1cm4gY29tcCAhPSBudWxsICYmICFjb21wLmlzQ2hpblxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRSYXdDaGlja2VuVHJheVNsb3RzKCkge1xyXG4gICAgICAgIGxldCBzbG90cyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0SXRlbVR5cGVBdFNsb3QoaSkgIT09IFwiY2hpY2tlblwiKSBjb250aW51ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1Jhd0NoaWNrZW5JdGVtKHRoaXMudHJheUl0ZW1zW2ldKSkgc2xvdHMucHVzaChpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xvdHNcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYWNoaW5lSXRlbVR5cGUoaXRlbTogY2MuTm9kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENoaWNrZW5Db21wKGl0ZW0pID8gXCJjaGlja2VuXCIgOiBcImNha2VcIlxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTWFjaGluZShtYWNoaW5lKSB7XHJcbiAgICAgICAgaWYgKCFtYWNoaW5lKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmIChtYWNoaW5lLmlzUmVhZHkoKSkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbVR5cGUgPSB0aGlzLmdldE1hY2hpbmVJdGVtVHlwZShtYWNoaW5lLmNoaWNrZW4pXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhblBpY2tJdGVtVHlwZShpdGVtVHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGFjdGlvbjogXCJwaWNrdXBcIiwgbWFjaGluZSwgaXRlbVR5cGUgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYWNoaW5lLmlzQ29va2luZygpKSByZXR1cm4geyBhY3Rpb246IFwiYnVzeVwiLCBtYWNoaW5lIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGFzc2lnblRyYXlJdGVtc1RvTWFjaGluZXMobWFjaGluZXMsIHNsb3RzOiBudW1iZXJbXSwgYWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcGxhbiA9IFtdXHJcbiAgICAgICAgbGV0IHVzZWRNYWNoaW5lcyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgc2xvdCBvZiBzbG90cykge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gbWFjaGluZXMuZmluZChtID0+IG0uY2FuQWNjZXB0Rm9vZCgpICYmIHVzZWRNYWNoaW5lcy5pbmRleE9mKG0pIDwgMClcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIGJyZWFrXHJcbiAgICAgICAgICAgIHVzZWRNYWNoaW5lcy5wdXNoKHRhcmdldClcclxuICAgICAgICAgICAgcGxhbi5wdXNoKHsgYWN0aW9uLCBtYWNoaW5lOiB0YXJnZXQsIHNsb3QgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBsYW5cclxuICAgIH1cclxuXHJcbiAgICBidWlsZE1hY2hpbmVQbGFuKCkge1xyXG4gICAgICAgIGxldCBtYWNoaW5lcyA9IHRoaXMuZ2V0TWFjaGluZXMoKVxyXG4gICAgICAgIGxldCBwbGFuID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgbSBvZiBtYWNoaW5lcykge1xyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmNoZWNrTWFjaGluZShtKVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUuYWN0aW9uID09PSBcInBpY2t1cFwiKSB7XHJcbiAgICAgICAgICAgICAgICBwbGFuLnB1c2goeyBhY3Rpb246IFwicGlja3VwXCIsIG1hY2hpbmU6IG0gfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBwbGFuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYXdTbG90cyA9IHRoaXMuZmluZFJhd0NoaWNrZW5UcmF5U2xvdHMoKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnblRyYXlJdGVtc1RvTWFjaGluZXMobWFjaGluZXMsIHJhd1Nsb3RzLCBcImZyeV9jaGlja2VuXCIpXHJcbiAgICB9XHJcblxyXG4gICAgY2FuRG9BbnlNYWNoaW5lQWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkTWFjaGluZVBsYW4oKS5sZW5ndGggPiAwXHJcbiAgICB9XHJcblxyXG4gICAgZmluZFBpY2t1cE1hY2hpbmUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbSBvZiB0aGlzLmdldE1hY2hpbmVzKCkpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5jaGVja01hY2hpbmUobSlcclxuICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmFjdGlvbiA9PT0gXCJwaWNrdXBcIikgcmV0dXJuIG1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlTWFjaGluZVBsYW4ocGxhbikge1xyXG4gICAgICAgIGlmICghcGxhbiB8fCBwbGFuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGFuWzBdLmFjdGlvbiA9PT0gXCJwaWNrdXBcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBpY2t1cEZyb21NYWNoaW5lKHBsYW5bMF0ubWFjaGluZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2hpY2tlbkFjdGlvbnMgPSBwbGFuLmZpbHRlcihhID0+IGEuYWN0aW9uID09PSBcImZyeV9jaGlja2VuXCIpXHJcbiAgICAgICAgaWYgKGNoaWNrZW5BY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYSBvZiBjaGlja2VuQWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcnlUcmF5Q2hpY2tlbihhLm1hY2hpbmUsIGEuc2xvdCwgZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmF5RW1wdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlja2VuID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Q2hpY2tlbiA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAyXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBydW5NYWNoaW5lU3RhdGlvbihtb3ZlSWQ6IG51bWJlciwgd2Fsa0ZuOiAobW92ZUlkOiBudW1iZXIsIG9uQXJyaXZlOiAoKSA9PiB2b2lkKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IHBsYW4gPSB0aGlzLmJ1aWxkTWFjaGluZVBsYW4oKVxyXG4gICAgICAgIGlmIChwbGFuLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgd2Fsa0ZuKG1vdmVJZCwgKCkgPT4gdGhpcy5leGVjdXRlTWFjaGluZVBsYW4ocGxhbikpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBnZXRXYWxrVG9NYWNoaW5lRm4obG9jYWxJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsSWQgPT0gNSkgcmV0dXJuIChpZCwgY2IpID0+IHRoaXMud2Fsa0Zyb21DYWtlVG9NYWNoaW5lKGlkLCBjYilcclxuICAgICAgICBpZiAobG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoaWQsIGNiKSA9PiB0aGlzLnN0YXJ0V2FsayhpZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRCZWhpbmRUYWJsZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC8vIC50bygwLjYsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX1NFTEwpIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLy8gLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSksIGNiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9jYWxJZCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoaWQsIGNiKSA9PiB0aGlzLnN0YXJ0V2FsayhpZCwgKCkgPT4geyB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC8vIC50bygwLjQsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19NQUNISU5FKSB9KSwgY2IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoaWQsIGNiKSA9PiB0aGlzLndhbGtUb01hY2hpbmVPckFjdChpZCwgY2IpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIEtoYXkgKDIgdHJheSkgLS0tXHJcblxyXG4gICAgZ2V0VHJheU5vZGUoc2xvdDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHNsb3QgPT09IDAgPyB0aGlzLmtoYXkgOiB0aGlzLmtoYXkyXHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZVRyYXlTbG90KHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoc2xvdCAhPSBudWxsICYmIHNsb3QgPj0gMCkgcmV0dXJuIHNsb3RcclxuICAgICAgICBsZXQgc2VsbFNsb3QgPSB0aGlzLmdhbWVQbGF5ID8gdGhpcy5nYW1lUGxheS5zZWxsVHJheVNsb3QgOiAtMVxyXG4gICAgICAgIGlmIChzZWxsU2xvdCA+PSAwKSByZXR1cm4gc2VsbFNsb3RcclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbXNbMF0pIHJldHVybiAwXHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zWzFdKSByZXR1cm4gMVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rmlyc3RFbXB0eVRyYXlTbG90KCkge1xyXG4gICAgICAgIGlmICghdGhpcy50cmF5SXRlbXNbMF0pIHJldHVybiAwXHJcbiAgICAgICAgaWYgKCF0aGlzLnRyYXlJdGVtc1sxXSkgcmV0dXJuIDFcclxuICAgICAgICByZXR1cm4gLTFcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmF5SXRlbShzbG90PzogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJheUl0ZW1zW3RoaXMucmVzb2x2ZVRyYXlTbG90KHNsb3QpXVxyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWNrZW5Db21wKGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gaXRlbSA/IGl0ZW0uZ2V0Q29tcG9uZW50KFwiY2hpY2tlblwiKSA6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtVHlwZShzbG90PzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMucmVzb2x2ZVRyYXlTbG90KHNsb3QpXHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1UeXBlc1tpZHhdKSByZXR1cm4gdGhpcy50cmF5SXRlbVR5cGVzW2lkeF1cclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMudHJheUl0ZW1zW2lkeF1cclxuICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpY2tlbkNvbXAoaXRlbSkpIHJldHVybiBcImNoaWNrZW5cIlxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaXNDb2NhSXRlbShpdGVtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gdGhpcy50cmF5SXRlbXNbaV0gJiYgdGhpcy5nZXRJdGVtVHlwZShpKSA9PT0gXCJjb2NhXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNhblNlbGxUcmF5VG9DdXN0b21lcihjdXNDb21wLCBzbG90OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoc2xvdClcclxuICAgICAgICBpZiAoIXR5cGUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy50cmF5SXRlbXNbc2xvdF1cclxuICAgICAgICBpZiAoY3VzQ29tcC5jaGlja2VuICYmIGN1c0NvbXAuY291bnRbMF0gPiAwICYmIHR5cGUgPT09IFwiY2hpY2tlblwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wID0gdGhpcy5nZXRDaGlja2VuQ29tcChpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm4gY29tcCAmJiBjb21wLmlzQ2hpbiAmJiBjdXNDb21wLnNhdWNlID09IGNvbXAuaXNTYXVjZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VzQ29tcC5jb2NhICYmIGN1c0NvbXAuY291bnRbMV0gPiAwICYmIHR5cGUgPT09IFwiY29jYVwiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNha2UgJiYgY3VzQ29tcC5jb3VudFsyXSA+IDAgJiYgdHlwZSA9PT0gXCJjYWtlXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgaWYgKGN1c0NvbXAucG90YXRvICYmIGN1c0NvbXAuY291bnRbM10gPiAwICYmIHR5cGUgPT09IFwidG9tYXRvXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2FuU2VsbFRvQ3VzdG9tZXIoY3VzQ29tcCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRUcmF5Rm9yQ3VzdG9tZXIoY3VzQ29tcCkgPj0gMFxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRUcmF5Rm9yQ3VzdG9tZXIoY3VzQ29tcCkge1xyXG4gICAgICAgIGxldCB0cmF5cyA9IHRoaXMuZmluZEFsbFRyYXlzRm9yQ3VzdG9tZXIoY3VzQ29tcClcclxuICAgICAgICByZXR1cm4gdHJheXMubGVuZ3RoID4gMCA/IHRyYXlzWzBdIDogLTFcclxuICAgIH1cclxuXHJcbiAgICBnZXRNaXNzaW9uVHlwZUZvclNsb3Qoc2xvdDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKHNsb3QpXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiY2hpY2tlblwiKSByZXR1cm4gMFxyXG4gICAgICAgIGlmICh0eXBlID09PSBcImNvY2FcIikgcmV0dXJuIDFcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJjYWtlXCIpIHJldHVybiAyXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwidG9tYXRvXCIpIHJldHVybiAzXHJcbiAgICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcblxyXG4gICAgY2FuU2VsbFRyYXlUb0N1c3RvbWVyV2l0aFJlbWFpbmluZyhjdXNDb21wLCBzbG90OiBudW1iZXIsIHJlbWFpbmluZzogbnVtYmVyW10pIHtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoc2xvdClcclxuICAgICAgICBpZiAoIXR5cGUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy50cmF5SXRlbXNbc2xvdF1cclxuICAgICAgICBpZiAoY3VzQ29tcC5jaGlja2VuICYmIHJlbWFpbmluZ1swXSA+IDAgJiYgdHlwZSA9PT0gXCJjaGlja2VuXCIpIHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmdldENoaWNrZW5Db21wKGl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wICYmIGNvbXAuaXNDaGluICYmIGN1c0NvbXAuc2F1Y2UgPT0gY29tcC5pc1NhdWNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNvY2EgJiYgcmVtYWluaW5nWzFdID4gMCAmJiB0eXBlID09PSBcImNvY2FcIikgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAoY3VzQ29tcC5jYWtlICYmIHJlbWFpbmluZ1syXSA+IDAgJiYgdHlwZSA9PT0gXCJjYWtlXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgaWYgKGN1c0NvbXAucG90YXRvICYmIHJlbWFpbmluZ1szXSA+IDAgJiYgdHlwZSA9PT0gXCJ0b21hdG9cIikgcmV0dXJuIHRydWVcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQWxsVHJheXNGb3JDdXN0b21lcihjdXNDb21wKSB7XHJcbiAgICAgICAgbGV0IHNsb3RzID0gW11cclxuICAgICAgICBsZXQgcmVtYWluaW5nID0gY3VzQ29tcC5jb3VudCA/IGN1c0NvbXAuY291bnQuc2xpY2UoKSA6IFswLCAwLCAwLCAwXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5TZWxsVHJheVRvQ3VzdG9tZXJXaXRoUmVtYWluaW5nKGN1c0NvbXAsIGksIHJlbWFpbmluZykpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIHNsb3RzLnB1c2goaSlcclxuICAgICAgICAgICAgbGV0IG1pc3Npb25UeXBlID0gdGhpcy5nZXRNaXNzaW9uVHlwZUZvclNsb3QoaSlcclxuICAgICAgICAgICAgaWYgKG1pc3Npb25UeXBlID49IDAgJiYgcmVtYWluaW5nW21pc3Npb25UeXBlXSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmluZ1ttaXNzaW9uVHlwZV0tLVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbG90c1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0FueUl0ZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJheUl0ZW1zWzBdICE9IG51bGwgfHwgdGhpcy50cmF5SXRlbXNbMV0gIT0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGlzVHJheUVtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYXlJdGVtc1swXSA9PSBudWxsICYmIHRoaXMudHJheUl0ZW1zWzFdID09IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpc1RyYXlGdWxsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYXlJdGVtc1swXSAhPSBudWxsICYmIHRoaXMudHJheUl0ZW1zWzFdICE9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYXdUcmF5U2xvdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY29tcCA9IHRoaXMuZ2V0Q2hpY2tlbkNvbXAodGhpcy50cmF5SXRlbXNbaV0pXHJcbiAgICAgICAgICAgIGlmIChjb21wICYmICFjb21wLmlzQ2hpbikgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcblxyXG4gICAgZmluZENvb2tlZFRyYXlTbG90KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wID0gdGhpcy5nZXRDaGlja2VuQ29tcCh0aGlzLnRyYXlJdGVtc1tpXSlcclxuICAgICAgICAgICAgaWYgKGNvbXAgJiYgY29tcC5pc0NoaW4gJiYgIWNvbXAuaXNTYXVjZSkgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcblxyXG4gICAgcHV0VHJheUl0ZW0oaXRlbTogY2MuTm9kZSwgdHlwZT86IHN0cmluZywgc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0YXJnZXRTbG90ID0gc2xvdCAhPSBudWxsID8gc2xvdCA6IHRoaXMuZ2V0Rmlyc3RFbXB0eVRyYXlTbG90KClcclxuICAgICAgICBpZiAodGFyZ2V0U2xvdCA8IDApIHJldHVyblxyXG4gICAgICAgIGxldCBraGF5Tm9kZSA9IHRoaXMuZ2V0VHJheU5vZGUodGFyZ2V0U2xvdClcclxuICAgICAgICBpZiAoIWtoYXlOb2RlKSByZXR1cm5cclxuICAgICAgICBpdGVtLnBhcmVudCA9IGtoYXlOb2RlXHJcbiAgICAgICAgbGV0IGFuaW0gPSBpdGVtLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGxheSgpXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbXNbdGFyZ2V0U2xvdF0gPSBpdGVtXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbVR5cGVzW3RhcmdldFNsb3RdID0gdHlwZSB8fCAodGhpcy5nZXRDaGlja2VuQ29tcChpdGVtKSA/IFwiY2hpY2tlblwiIDogbnVsbClcclxuICAgICAgICBraGF5Tm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50YXJnZXRDaGlja2VuID0gaXRlbVxyXG4gICAgICAgIHRoaXMuY2hpY2tlbiA9IHRydWVcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN1bWVUcmF5SXRlbShzbG90PzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFNsb3QgPSBzbG90ICE9IG51bGwgJiYgc2xvdCA+PSAwID8gc2xvdCA6IHRoaXMucmVzb2x2ZVRyYXlTbG90KClcclxuICAgICAgICBpZiAodGFyZ2V0U2xvdCA8IDApIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtc1t0YXJnZXRTbG90XSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYXlJdGVtc1t0YXJnZXRTbG90XS5kZXN0cm95KClcclxuICAgICAgICAgICAgdGhpcy50cmF5SXRlbXNbdGFyZ2V0U2xvdF0gPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMudHJheUl0ZW1UeXBlc1t0YXJnZXRTbG90XSA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUcmF5RW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWNrZW4gPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldENoaWNrZW4gPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVRyYXlzKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDw7Mga2hheSB0cuG7kW5nIHRow6wgZMO5bmcga2hheSB0cuG7kW5nOyBj4bqjIDIga2hheSDEkeG6p3kgdGjDrCBi4buPIDEgbcOzbiBy4buTaSB0aMOqbSDEkeG7kyBt4bubaVxyXG4gICAgY2FuUGlja0l0ZW1UeXBlKHRhcmdldFR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZmluZFJlcGxhY2VUcmF5U2xvdCh0YXJnZXRUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRJdGVtVHlwZShpKSAhPT0gdGFyZ2V0VHlwZSkgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDFcclxuICAgIH1cclxuXHJcbiAgICBwcmVwYXJlUGlja3VwU2xvdCh0YXJnZXRUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZW1wdHkgPSB0aGlzLmdldEZpcnN0RW1wdHlUcmF5U2xvdCgpXHJcbiAgICAgICAgaWYgKGVtcHR5ID49IDApIHJldHVybiBlbXB0eVxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5maW5kUmVwbGFjZVRyYXlTbG90KHRhcmdldFR5cGUpXHJcbiAgICAgICAgdGhpcy5jb25zdW1lVHJheUl0ZW0oc2xvdClcclxuICAgICAgICByZXR1cm4gc2xvdFxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVUcmF5cygpIHtcclxuICAgICAgICBpZiAodGhpcy5raGF5KSB0aGlzLmtoYXkuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5raGF5MikgdGhpcy5raGF5Mi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMiwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGl2ZXJJdGVtKHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0U2xvdCA9IHNsb3QgIT0gbnVsbCAmJiBzbG90ID49IDAgPyBzbG90IDogKHRoaXMuZ2FtZVBsYXkgPyB0aGlzLmdhbWVQbGF5LnNlbGxUcmF5U2xvdCA6IC0xKVxyXG4gICAgICAgIGlmICh0YXJnZXRTbG90IDwgMCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5jb25zdW1lVHJheUl0ZW0odGFyZ2V0U2xvdClcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckRlbGl2ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQW55SXRlbSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlVHJheXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFybXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2hheS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJMLWFybVwiLCB0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMua2hheS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDEsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zWzFdKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtoYXkyKSB0aGlzLmtoYXkyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIlItYXJtXCIsIHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMua2hheTIpIHRoaXMua2hheTIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyQ3VzdG9tZXJMZWZ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMubG9jYWxJZCA9IHRoaXMuaGFzQW55SXRlbSgpID8gMiA6IDBcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNhblBpY2tNb3JlQ2hpY2tlbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUGlja0l0ZW1UeXBlKFwiY2hpY2tlblwiKSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxJZCA+PSAwICYmIHRoaXMubG9jYWxJZCA8PSA1XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIERpIGNodXnhu4NuIChjaOG7kW5nIHR3ZWVuL3NjaGVkdWxlIGNo4buTbmcgbmhhdSkgLS0tXHJcblxyXG4gICAgcHJpdmF0ZSBfbW92ZUlkID0gMFxyXG4gICAgcHJpdmF0ZSBfaXNXYWxraW5nID0gZmFsc2VcclxuXHJcbiAgICBpc1dhbGtpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzV2Fsa2luZ1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbE1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5fbW92ZUlkKytcclxuICAgICAgICB0aGlzLl9pc1dhbGtpbmcgPSBmYWxzZVxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpXHJcbiAgICB9XHJcblxyXG4gICAgYmVnaW5Nb3ZlKCk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxNb3ZlKClcclxuICAgICAgICB0aGlzLl9pc1dhbGtpbmcgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmVJZFxyXG4gICAgfVxyXG5cclxuICAgIGlzTW92ZUFjdGl2ZShtb3ZlSWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBtb3ZlSWQgPT09IHRoaXMuX21vdmVJZFxyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaE1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5faXNXYWxraW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGFycml2ZUlkbGUoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgfVxyXG5cclxuICAgIHNjaGVkdWxlT25Nb3ZlKGRlbGF5OiBudW1iZXIsIG1vdmVJZDogbnVtYmVyLCBmbjogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZlQWN0aXZlKG1vdmVJZCkpIGZuKClcclxuICAgICAgICB9LCBkZWxheSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbkZyb250T2ZUYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMlxyXG4gICAgICAgIHRoaXMudGFibGUuekluZGV4ID0gMVxyXG4gICAgfVxyXG5cclxuICAgIHNldEJlaGluZFRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAxXHJcbiAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAyXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRXYWxrKG1vdmVJZDogbnVtYmVyLCBzZXR1cDogKCkgPT4gdm9pZCwgYnVpbGQ6ICh0OiBjYy5Ud2VlbikgPT4gY2MuVHdlZW4sIG9uQ29tcGxldGU/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTW92ZUFjdGl2ZShtb3ZlSWQpKSByZXR1cm5cclxuICAgICAgICBzZXR1cCgpXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIGJ1aWxkKGNjLnR3ZWVuKHRoaXMubm9kZSkpXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1dhbGtpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWNrZW5XYWxrRHVyYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAwKSByZXR1cm4gMVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMikgcmV0dXJuIDAuOFxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMykgcmV0dXJuIDAuNlxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkgcmV0dXJuIDEuNlxyXG4gICAgICAgIHJldHVybiAwLjhcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9DaGlja2VuKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrTW9yZUNoaWNrZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1vdmVJZCA9IHRoaXMuYmVnaW5Nb3ZlKClcclxuICAgICAgICBpZiAodGhpcy5pc0F0UG9zKHRoaXMuUE9TX0NISUNLRU4pKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICB0aGlzLnNwYXdDaGlja2VuKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuXHJcbiAgICAgICAgICAgICAgICAudG8oMS42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc3Bhd0NoaWNrZW4oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPj0gMCAmJiB0aGlzLmxvY2FsSWQgPD0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDQpIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICB9LCB0ID0+IHQudG8odGhpcy5nZXRDaGlja2VuV2Fsa0R1cmF0aW9uKCksIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5zcGF3Q2hpY2tlbigpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBzcGF3Q2hpY2tlbigpIHtcclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJjaGlja2VuXCIpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmJ0bkNoaWNrZW4uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJsdjEtdGFwXCIsIGZhbHNlKVxyXG4gICAgICAgIGxldCBjaGlja2VuID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDaGlja2VuKVxyXG4gICAgICAgIHRoaXMucHV0VHJheUl0ZW0oY2hpY2tlbiwgXCJjaGlja2VuXCIsIHNsb3QpXHJcbiAgICAgICAgLy8gaWYgKHRoaXMubG9jYWxJZCA9PSAwIHx8IHRoaXMubG9jYWxJZCA9PSAzIHx8IHRoaXMubG9jYWxJZCA9PSA0IHx8IHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbElkID0gMVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGlkbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBwaWNrdXBGcm9tTWFjaGluZShtYWNoaW5lKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBtYWNoaW5lLmdldENoaWNrZW4oKVxyXG4gICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldE1hY2hpbmVJdGVtVHlwZShpdGVtKVxyXG4gICAgICAgIGlmICh0eXBlID09PSBcImNoaWNrZW5cIikgaXRlbS5nZXRDb21wb25lbnQoXCJjaGlja2VuXCIpLmNoaW4yKClcclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QodHlwZSlcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHV0VHJheUl0ZW0oaXRlbSwgdHlwZSwgc2xvdClcclxuICAgICAgICB0aGlzLmxvY2FsSWQgPSB0eXBlID09PSBcImNoaWNrZW5cIiA/IDIgOiA1XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHBpY2t1cE1hY2hpbmVDaGlja2VuKG1hY2hpbmUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrdXBGcm9tTWFjaGluZShtYWNoaW5lKVxyXG4gICAgfVxyXG5cclxuICAgIHBpY2t1cENvY2EoY29jYSkge1xyXG4gICAgICAgIGlmICghY29jYSB8fCAhY29jYS5pc0NvY2EpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGNvY2EuZ2V0Q29jYSgpXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblBpY2tJdGVtVHlwZShcImNvY2FcIikpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5wcmVwYXJlUGlja3VwU2xvdChcImNvY2FcIilcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBjb2NhSXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29jYSlcclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNvY2FJdGVtLCBcImNvY2FcIiwgc2xvdClcclxuICAgICAgICB0aGlzLmxvY2FsSWQgPSA0XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBmcnlUcmF5Q2hpY2tlbihtYWNoaW5lLCBzbG90OiBudW1iZXIsIGZpbmlzaCA9IHRydWUpIHtcclxuICAgICAgICBsZXQgY2hpY2tlbiA9IHRoaXMudHJheUl0ZW1zW3Nsb3RdXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmF3Q2hpY2tlbkl0ZW0oY2hpY2tlbikgfHwgIW1hY2hpbmUuY29va2luZyhjaGlja2VuKSkge1xyXG4gICAgICAgICAgICBpZiAoZmluaXNoKSB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmF5SXRlbXNbc2xvdF0gPSBudWxsXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbVR5cGVzW3Nsb3RdID0gbnVsbFxyXG4gICAgICAgIGlmICghZmluaXNoKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGlmICh0aGlzLmlzVHJheUVtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlja2VuID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRDaGlja2VuID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvTWFjaGluZSgpIHtcclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgIGxldCB3YWxrRm4gPSB0aGlzLmdldFdhbGtUb01hY2hpbmVGbih0aGlzLmxvY2FsSWQpXHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bk1hY2hpbmVTdGF0aW9uKG1vdmVJZCwgd2Fsa0ZuKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9TYXVjZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkICE9IDIgfHwgIXRoaXMuaGFzQW55SXRlbSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMuZmluZENvb2tlZFRyYXlTbG90KClcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb29rZWRJdGVtID0gdGhpcy50cmF5SXRlbXNbc2xvdF1cclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgfSwgdCA9PiB0LnRvKDAuNSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0FVQ0UpIH0pLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2hpY2tlbkNvbXAoY29va2VkSXRlbSkuYWRkU2F1Y2UoKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvQnV5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNBbnlJdGVtKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0LnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycml2ZUlkbGUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKDAuMywgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDIgfHwgdGhpcy5sb2NhbElkID09IDMpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGxEZWxheSA9IHRoaXMubG9jYWxJZCA9PSAzID8gMC4xIDogMC4xXHJcbiAgICAgICAgICAgIGxldCB0d2VlbiA9IHRoaXMubG9jYWxJZCA9PSAzXHJcbiAgICAgICAgICAgICAgICA/IGNjLnR3ZWVuKHRoaXMubm9kZSkuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpLnRvKDAuNCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSlcclxuICAgICAgICAgICAgICAgIDogY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgICAgICB0d2Vlbi5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1dhbGtpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJpdmVJZGxlKClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKHNlbGxEZWxheSwgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0LnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycml2ZUlkbGUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKDAuMywgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3ZlQWN0aXZlKG1vdmVJZCkpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyaXZlSWRsZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKDEsIG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHRoaXMuZ2FtZVBsYXkudmFsaWRhdGVTZWxsQXRDb3VudGVyKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gM1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcbiAgICBtb3ZlVG9Db2NhKCkge1xyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgbGV0IGNvY2FDb21wID0gdGhpcy5nYW1lUGxheS5idG5Db2NhLmdldENvbXBvbmVudChcImNvY2FcIilcclxuXHJcbiAgICAgICAgbGV0IG9uQXJyaXZlQXRDb2NhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGlja3VwQ29jYShjb2NhQ29tcCkgJiYgY29jYUNvbXAgJiYgIWNvY2FDb21wLmlzQnVzeSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb2NhQ29tcC5jb29raW5nKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSA0XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDEgfHwgdGhpcy5sb2NhbElkID09IDMgfHwgdGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uTW92ZSgwLjYsIG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHQudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KSwgb25BcnJpdmVBdENvY2EpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0ICYmIGNvY2FDb21wLmlzQ29jYSkge1xyXG4gICAgICAgICAgICB0aGlzLnBpY2t1cENvY2EoY29jYUNvbXApXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC8vIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSksIG9uQXJyaXZlQXRDb2NhKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvQ2FrZSgpIHtcclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfQ0FLRSkpIHtcclxuICAgICAgICAgICAgdGhpcy5waWNrQXRDYWtlQ291bnRlck9yQWN0KCgpID0+IHRoaXMuZ2V0Q2FrZSgpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMCB8fCB0aGlzLmxvY2FsSWQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLy8gLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC8vIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0Q2FrZSgpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMyB8fCB0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC8vIHQudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgfSwgdCA9PiB0LnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYWtlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJjYWtlXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJjYWtlXCIpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FrZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ2FrZSlcclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNha2UsIFwiY2FrZVwiLCBzbG90KVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDVcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRvbWF0bygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUGlja0l0ZW1UeXBlKFwidG9tYXRvXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJ0b21hdG9cIilcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b21hdG8gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVRvbWF0bylcclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKHRvbWF0bywgXCJ0b21hdG9cIiwgc2xvdClcclxuICAgICAgICB0aGlzLmxvY2FsSWQgPSA1XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9Ub21hdG8oKSB7XHJcbiAgICAgICAgbGV0IG1vdmVJZCA9IHRoaXMuYmVnaW5Nb3ZlKClcclxuICAgICAgICBpZiAodGhpcy5pc0F0UG9zKHRoaXMuUE9TX0NBS0UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGlja0F0Q2FrZUNvdW50ZXJPckFjdCgoKSA9PiB0aGlzLmdldFRvbWF0bygpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMCB8fCB0aGlzLmxvY2FsSWQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRUb21hdG8oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLy8gLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRUb21hdG8oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMyB8fCB0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC8vIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLy8gLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuICAgIC8vIC0tLSBSZXNldCAtLS1cclxuXHJcbiAgICBjbGVhclRyYXkoKSB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lVHJheUl0ZW0oMClcclxuICAgICAgICB0aGlzLmNvbnN1bWVUcmF5SXRlbSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VG9TdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLmNhbmNlbE1vdmUoKVxyXG4gICAgICAgIC8vIHRoaXMuY2xlYXJUcmF5KClcclxuICAgICAgICAvLyB0aGlzLmxvY2FsSWQgPSAwXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAvLyB0aGlzLm5vZGUuekluZGV4ID0gMFxyXG4gICAgICAgIC8vIHRoaXMudGFibGUuekluZGV4ID0gMFxyXG4gICAgICAgIC8vIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgLy8gdGhpcy5hbmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICAgICAgLy8gdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICB9XHJcbn1cclxuIl19