
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
        // arrPos = [cc.v3(-190, -39), cc.v3(-207, -323), cc.v3(-207, -468), cc.v3(11, -45),cc.v3(237,-122)]
        _this.posStart = cc.v3(207, -58);
        // arrPos[0]=vị trí 1 máy chiên | [1]=2 sốt | [2]=3 khay | [3]=4 quầy bán | [4]=thớt gà
        _this.arrPos = [
            cc.v3(-190, -30),
            cc.v3(-207, -323),
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
            this.setInFrontOfTable();
            onArrive();
            return;
        }
        this.startWalk(moveId, function () { }, function (t) { return t
            .call(function () { return _this.setInFrontOfTable(); })
            .to(1, { position: _this.getPos(_this.POS_MACHINE) }); }, onArrive);
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
        console.log(this.localId, "id game");
        var machine = this.gamePlay.btnMachine.getComponent("machine");
        var moveId = this.beginMove();
        this.setInFrontOfTable();
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
        console.log(this.localId, "id game");
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
            var sellDelay = this.localId == 3 ? 0.4 : 1;
            var tween = this.localId == 3
                ? cc.tween(this.node).call(function () { return _this.setBehindTable(); }).to(0.4, { position: this.getPos(this.POS_SELL) })
                : cc.tween(this.node)
                    .to(1, { position: this.getPos(this.POS_CHICKEN) })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzM0JDO1FBbjNCRyxnQkFBVSxHQUFjLElBQUksQ0FBQTtRQUU1QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixvR0FBb0c7UUFDcEcsY0FBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUIsdUZBQXVGO1FBQ3ZGLFlBQU0sR0FBRztZQUNMLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDbkIsQ0FBQTtRQUNELGlCQUFXLEdBQUcsQ0FBQyxDQUFB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a0JBdDNCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDaGlja2VuOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ29jYTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDYWtlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVRvbWF0bzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2hheTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2hheTI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBhcnJQb3MgPSBbY2MudjMoLTE5MCwgLTM5KSwgY2MudjMoLTIwNywgLTMyMyksIGNjLnYzKC0yMDcsIC00NjgpLCBjYy52MygxMSwgLTQ1KSxjYy52MygyMzcsLTEyMildXHJcbiAgICBwb3NTdGFydCA9IGNjLnYzKDIwNywgLTU4KVxyXG4gICAgLy8gYXJyUG9zWzBdPXbhu4sgdHLDrSAxIG3DoXkgY2hpw6puIHwgWzFdPTIgc+G7kXQgfCBbMl09MyBraGF5IHwgWzNdPTQgcXXhuqd5IGLDoW4gfCBbNF09dGjhu5t0IGfDoFxyXG4gICAgYXJyUG9zID0gW1xyXG4gICAgICAgIGNjLnYzKC0xOTAsIC0zMCksICAvLyAxIC0gbcOheSBjaGnDqm5cclxuICAgICAgICBjYy52MygtMjA3LCAtMzIzKSwgIC8vIDIgLSBz4buRdFxyXG4gICAgICAgIGNjLnYzKC0yMDcsIC00NjgpLCAgIC8vIDMgLSBraGF5XHJcbiAgICAgICAgY2MudjMoMTEsIC00NSksICAgICAvLyA0IC0gcXXhuqd5IGLDoW5cclxuICAgICAgICBjYy52MygyMzcsIC0xMjIpLCAgIC8vIHRo4bubdCBnw6BcclxuICAgICAgICBjYy52MygyMzcsIC00NjgpLCAgICAgLy8gNSAtIGtob2FpdGF5LCBjYWtlXHJcbiAgICBdXHJcbiAgICBQT1NfTUFDSElORSA9IDFcclxuICAgIFBPU19TQVVDRSA9IDJcclxuICAgIFBPU19DT0NBID0gNFxyXG4gICAgUE9TX1NFTEwgPSAzXHJcbiAgICBQT1NfQ0hJQ0tFTiA9IDBcclxuICAgIFBPU19DQUtFID0gNVxyXG4gICAgbG9jYWxJZCA9IDBcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgdGFyZ2V0Q2hpY2tlbiA9IG51bGxcclxuICAgIGNoaWNrZW4gPSBmYWxzZVxyXG4gICAgdHJheUl0ZW1zOiBjYy5Ob2RlW10gPSBbbnVsbCwgbnVsbF1cclxuICAgIHRyYXlJdGVtVHlwZXM6IHN0cmluZ1tdID0gW251bGwsIG51bGxdXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5wb3NTdGFydC5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIik7XHJcbiAgICAgICAgaWYgKHRoaXMua2hheTIpIHRoaXMua2hheTIuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3MoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyclBvc1tpbmRleF1cclxuICAgIH1cclxuXHJcbiAgICBpc0F0UG9zKHBvc0luZGV4OiBudW1iZXIsIHRocmVzaG9sZCA9IDEyKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZ2V0UG9zKHBvc0luZGV4KVxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb25cclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMocG9zLnggLSB0YXJnZXQueCkgPD0gdGhyZXNob2xkICYmIE1hdGguYWJzKHBvcy55IC0gdGFyZ2V0LnkpIDw9IHRocmVzaG9sZFxyXG4gICAgfVxyXG5cclxuICAgIHBpY2tBdENha2VDb3VudGVyT3JBY3Qob25QaWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgb25QaWNrKClcclxuICAgIH1cclxuXHJcbiAgICB3YWxrVG9NYWNoaW5lT3JBY3QobW92ZUlkOiBudW1iZXIsIG9uQXJyaXZlOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdFBvcyh0aGlzLlBPU19NQUNISU5FKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgb25BcnJpdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7IH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19NQUNISU5FKSB9KSxcclxuICAgICAgICAgICAgb25BcnJpdmUpXHJcbiAgICB9XHJcblxyXG4gICAgd2Fsa0Zyb21DYWtlVG9NYWNoaW5lKG1vdmVJZDogbnVtYmVyLCBvbkFycml2ZTogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfTUFDSElORSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIG9uQXJyaXZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgIH0sIHQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHdlZW4gPSB0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfQ0FLRSkpIHtcclxuICAgICAgICAgICAgICAgIHR3ZWVuID0gdHdlZW4udG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KS5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHR3ZWVuXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19NQUNISU5FKSB9KVxyXG4gICAgICAgIH0sIG9uQXJyaXZlKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1hY2hpbmVBY3Rpb24obW92ZUlkOiBudW1iZXIsIG1hY2hpbmUsIHdhbGtGbjogKG1vdmVJZDogbnVtYmVyLCBvbkFycml2ZTogKCkgPT4gdm9pZCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmIChtYWNoaW5lLmNoaWNrZW4gIT0gbnVsbCAmJiBtYWNoaW5lLmlzQ2hpbiAmJiB0aGlzLmNhblBpY2tJdGVtVHlwZShcImNoaWNrZW5cIikpIHtcclxuICAgICAgICAgICAgd2Fsa0ZuKG1vdmVJZCwgKCkgPT4gdGhpcy5waWNrdXBNYWNoaW5lQ2hpY2tlbihtYWNoaW5lKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UmF3VHJheVNsb3QoKSA+PSAwICYmIG1hY2hpbmUuY2hpY2tlbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdhbGtGbihtb3ZlSWQsICgpID0+IHRoaXMuZnJ5VHJheUNoaWNrZW4obWFjaGluZSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBLaGF5ICgyIHRyYXkpIC0tLVxyXG5cclxuICAgIGdldFRyYXlOb2RlKHNsb3Q6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBzbG90ID09PSAwID8gdGhpcy5raGF5IDogdGhpcy5raGF5MlxyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVUcmF5U2xvdChzbG90PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHNsb3QgIT0gbnVsbCAmJiBzbG90ID49IDApIHJldHVybiBzbG90XHJcbiAgICAgICAgbGV0IHNlbGxTbG90ID0gdGhpcy5nYW1lUGxheSA/IHRoaXMuZ2FtZVBsYXkuc2VsbFRyYXlTbG90IDogLTFcclxuICAgICAgICBpZiAoc2VsbFNsb3QgPj0gMCkgcmV0dXJuIHNlbGxTbG90XHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zWzBdKSByZXR1cm4gMFxyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtc1sxXSkgcmV0dXJuIDFcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG5cclxuICAgIGdldEZpcnN0RW1wdHlUcmF5U2xvdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudHJheUl0ZW1zWzBdKSByZXR1cm4gMFxyXG4gICAgICAgIGlmICghdGhpcy50cmF5SXRlbXNbMV0pIHJldHVybiAxXHJcbiAgICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJheUl0ZW0oc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYXlJdGVtc1t0aGlzLnJlc29sdmVUcmF5U2xvdChzbG90KV1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGlja2VuQ29tcChpdGVtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmdldENvbXBvbmVudChcImNoaWNrZW5cIikgOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbVR5cGUoc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLnJlc29sdmVUcmF5U2xvdChzbG90KVxyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtVHlwZXNbaWR4XSkgcmV0dXJuIHRoaXMudHJheUl0ZW1UeXBlc1tpZHhdXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnRyYXlJdGVtc1tpZHhdXHJcbiAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmICh0aGlzLmdldENoaWNrZW5Db21wKGl0ZW0pKSByZXR1cm4gXCJjaGlja2VuXCJcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGlzQ29jYUl0ZW0oaXRlbTogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHRoaXMudHJheUl0ZW1zW2ldICYmIHRoaXMuZ2V0SXRlbVR5cGUoaSkgPT09IFwiY29jYVwiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjYW5TZWxsVHJheVRvQ3VzdG9tZXIoY3VzQ29tcCwgc2xvdDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKHNsb3QpXHJcbiAgICAgICAgaWYgKCF0eXBlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMudHJheUl0ZW1zW3Nsb3RdXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY2hpY2tlbiAmJiBjdXNDb21wLmNvdW50WzBdID4gMCAmJiB0eXBlID09PSBcImNoaWNrZW5cIikge1xyXG4gICAgICAgICAgICBsZXQgY29tcCA9IHRoaXMuZ2V0Q2hpY2tlbkNvbXAoaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXAgJiYgY29tcC5pc0NoaW4gJiYgY3VzQ29tcC5zYXVjZSA9PSBjb21wLmlzU2F1Y2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY29jYSAmJiBjdXNDb21wLmNvdW50WzFdID4gMCAmJiB0eXBlID09PSBcImNvY2FcIikgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAoY3VzQ29tcC5jYWtlICYmIGN1c0NvbXAuY291bnRbMl0gPiAwICYmIHR5cGUgPT09IFwiY2FrZVwiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGlmIChjdXNDb21wLnBvdGF0byAmJiBjdXNDb21wLmNvdW50WzNdID4gMCAmJiB0eXBlID09PSBcInRvbWF0b1wiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNhblNlbGxUb0N1c3RvbWVyKGN1c0NvbXApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maW5kVHJheUZvckN1c3RvbWVyKGN1c0NvbXApID49IDBcclxuICAgIH1cclxuXHJcbiAgICBmaW5kVHJheUZvckN1c3RvbWVyKGN1c0NvbXApIHtcclxuICAgICAgICBsZXQgdHJheXMgPSB0aGlzLmZpbmRBbGxUcmF5c0ZvckN1c3RvbWVyKGN1c0NvbXApXHJcbiAgICAgICAgcmV0dXJuIHRyYXlzLmxlbmd0aCA+IDAgPyB0cmF5c1swXSA6IC0xXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWlzc2lvblR5cGVGb3JTbG90KHNsb3Q6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRJdGVtVHlwZShzbG90KVxyXG4gICAgICAgIGlmICh0eXBlID09PSBcImNoaWNrZW5cIikgcmV0dXJuIDBcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJjb2NhXCIpIHJldHVybiAxXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiY2FrZVwiKSByZXR1cm4gMlxyXG4gICAgICAgIGlmICh0eXBlID09PSBcInRvbWF0b1wiKSByZXR1cm4gM1xyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG5cclxuICAgIGNhblNlbGxUcmF5VG9DdXN0b21lcldpdGhSZW1haW5pbmcoY3VzQ29tcCwgc2xvdDogbnVtYmVyLCByZW1haW5pbmc6IG51bWJlcltdKSB7XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKHNsb3QpXHJcbiAgICAgICAgaWYgKCF0eXBlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMudHJheUl0ZW1zW3Nsb3RdXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY2hpY2tlbiAmJiByZW1haW5pbmdbMF0gPiAwICYmIHR5cGUgPT09IFwiY2hpY2tlblwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wID0gdGhpcy5nZXRDaGlja2VuQ29tcChpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm4gY29tcCAmJiBjb21wLmlzQ2hpbiAmJiBjdXNDb21wLnNhdWNlID09IGNvbXAuaXNTYXVjZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VzQ29tcC5jb2NhICYmIHJlbWFpbmluZ1sxXSA+IDAgJiYgdHlwZSA9PT0gXCJjb2NhXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY2FrZSAmJiByZW1haW5pbmdbMl0gPiAwICYmIHR5cGUgPT09IFwiY2FrZVwiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGlmIChjdXNDb21wLnBvdGF0byAmJiByZW1haW5pbmdbM10gPiAwICYmIHR5cGUgPT09IFwidG9tYXRvXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZmluZEFsbFRyYXlzRm9yQ3VzdG9tZXIoY3VzQ29tcCkge1xyXG4gICAgICAgIGxldCBzbG90cyA9IFtdXHJcbiAgICAgICAgbGV0IHJlbWFpbmluZyA9IGN1c0NvbXAuY291bnQgPyBjdXNDb21wLmNvdW50LnNsaWNlKCkgOiBbMCwgMCwgMCwgMF1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuU2VsbFRyYXlUb0N1c3RvbWVyV2l0aFJlbWFpbmluZyhjdXNDb21wLCBpLCByZW1haW5pbmcpKSBjb250aW51ZVxyXG4gICAgICAgICAgICBzbG90cy5wdXNoKGkpXHJcbiAgICAgICAgICAgIGxldCBtaXNzaW9uVHlwZSA9IHRoaXMuZ2V0TWlzc2lvblR5cGVGb3JTbG90KGkpXHJcbiAgICAgICAgICAgIGlmIChtaXNzaW9uVHlwZSA+PSAwICYmIHJlbWFpbmluZ1ttaXNzaW9uVHlwZV0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5pbmdbbWlzc2lvblR5cGVdLS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xvdHNcclxuICAgIH1cclxuXHJcbiAgICBoYXNBbnlJdGVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYXlJdGVtc1swXSAhPSBudWxsIHx8IHRoaXMudHJheUl0ZW1zWzFdICE9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpc1RyYXlFbXB0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmF5SXRlbXNbMF0gPT0gbnVsbCAmJiB0aGlzLnRyYXlJdGVtc1sxXSA9PSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaXNUcmF5RnVsbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmF5SXRlbXNbMF0gIT0gbnVsbCAmJiB0aGlzLnRyYXlJdGVtc1sxXSAhPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmF3VHJheVNsb3QoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmdldENoaWNrZW5Db21wKHRoaXMudHJheUl0ZW1zW2ldKVxyXG4gICAgICAgICAgICBpZiAoY29tcCAmJiAhY29tcC5pc0NoaW4pIHJldHVybiBpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRDb29rZWRUcmF5U2xvdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY29tcCA9IHRoaXMuZ2V0Q2hpY2tlbkNvbXAodGhpcy50cmF5SXRlbXNbaV0pXHJcbiAgICAgICAgICAgIGlmIChjb21wICYmIGNvbXAuaXNDaGluICYmICFjb21wLmlzU2F1Y2UpIHJldHVybiBpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG5cclxuICAgIHB1dFRyYXlJdGVtKGl0ZW06IGNjLk5vZGUsIHR5cGU/OiBzdHJpbmcsIHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0U2xvdCA9IHNsb3QgIT0gbnVsbCA/IHNsb3QgOiB0aGlzLmdldEZpcnN0RW1wdHlUcmF5U2xvdCgpXHJcbiAgICAgICAgaWYgKHRhcmdldFNsb3QgPCAwKSByZXR1cm5cclxuICAgICAgICBsZXQga2hheU5vZGUgPSB0aGlzLmdldFRyYXlOb2RlKHRhcmdldFNsb3QpXHJcbiAgICAgICAgaWYgKCFraGF5Tm9kZSkgcmV0dXJuXHJcbiAgICAgICAgaXRlbS5wYXJlbnQgPSBraGF5Tm9kZVxyXG4gICAgICAgIGxldCBhbmltID0gaXRlbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIGlmIChhbmltKSBhbmltLnBsYXkoKVxyXG4gICAgICAgIHRoaXMudHJheUl0ZW1zW3RhcmdldFNsb3RdID0gaXRlbVxyXG4gICAgICAgIHRoaXMudHJheUl0ZW1UeXBlc1t0YXJnZXRTbG90XSA9IHR5cGUgfHwgKHRoaXMuZ2V0Q2hpY2tlbkNvbXAoaXRlbSkgPyBcImNoaWNrZW5cIiA6IG51bGwpXHJcbiAgICAgICAga2hheU5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudGFyZ2V0Q2hpY2tlbiA9IGl0ZW1cclxuICAgICAgICB0aGlzLmNoaWNrZW4gPSB0cnVlXHJcbiAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdW1lVHJheUl0ZW0oc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0YXJnZXRTbG90ID0gc2xvdCAhPSBudWxsICYmIHNsb3QgPj0gMCA/IHNsb3QgOiB0aGlzLnJlc29sdmVUcmF5U2xvdCgpXHJcbiAgICAgICAgaWYgKHRhcmdldFNsb3QgPCAwKSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbXNbdGFyZ2V0U2xvdF0pIHtcclxuICAgICAgICAgICAgdGhpcy50cmF5SXRlbXNbdGFyZ2V0U2xvdF0uZGVzdHJveSgpXHJcbiAgICAgICAgICAgIHRoaXMudHJheUl0ZW1zW3RhcmdldFNsb3RdID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLnRyYXlJdGVtVHlwZXNbdGFyZ2V0U2xvdF0gPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVHJheUVtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlja2VuID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRDaGlja2VuID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLmhpZGVUcmF5cygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ8OzIGtoYXkgdHLhu5FuZyB0aMOsIGTDuW5nIGtoYXkgdHLhu5FuZzsgY+G6oyAyIGtoYXkgxJHhuqd5IHRow6wgYuG7jyAxIG3Ds24gcuG7k2kgdGjDqm0gxJHhu5MgbeG7m2lcclxuICAgIGNhblBpY2tJdGVtVHlwZSh0YXJnZXRUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRSZXBsYWNlVHJheVNsb3QodGFyZ2V0VHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0SXRlbVR5cGUoaSkgIT09IHRhcmdldFR5cGUpIHJldHVybiBpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAxXHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZVBpY2t1cFNsb3QodGFyZ2V0VHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGVtcHR5ID0gdGhpcy5nZXRGaXJzdEVtcHR5VHJheVNsb3QoKVxyXG4gICAgICAgIGlmIChlbXB0eSA+PSAwKSByZXR1cm4gZW1wdHlcclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMuZmluZFJlcGxhY2VUcmF5U2xvdCh0YXJnZXRUeXBlKVxyXG4gICAgICAgIHRoaXMuY29uc3VtZVRyYXlJdGVtKHNsb3QpXHJcbiAgICAgICAgcmV0dXJuIHNsb3RcclxuICAgIH1cclxuXHJcbiAgICBoaWRlVHJheXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2hheSkgdGhpcy5raGF5LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMua2hheTIpIHRoaXMua2hheTIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDEsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDIsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxpdmVySXRlbShzbG90PzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFNsb3QgPSBzbG90ICE9IG51bGwgJiYgc2xvdCA+PSAwID8gc2xvdCA6ICh0aGlzLmdhbWVQbGF5ID8gdGhpcy5nYW1lUGxheS5zZWxsVHJheVNsb3QgOiAtMSlcclxuICAgICAgICBpZiAodGFyZ2V0U2xvdCA8IDApIHJldHVyblxyXG4gICAgICAgIHRoaXMuY29uc3VtZVRyYXlJdGVtKHRhcmdldFNsb3QpXHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJEZWxpdmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0FueUl0ZW0oKSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVRyYXlzKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBcm1zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtc1swXSkge1xyXG4gICAgICAgICAgICB0aGlzLmtoYXkuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDEsIFwiTC1hcm1cIiwgdHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmtoYXkuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtc1sxXSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5raGF5MikgdGhpcy5raGF5Mi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMiwgXCJSLWFybVwiLCB0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtoYXkyKSB0aGlzLmtoYXkyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMiwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZnRlckN1c3RvbWVyTGVmdCgpIHtcclxuICAgICAgICAvLyB0aGlzLmxvY2FsSWQgPSB0aGlzLmhhc0FueUl0ZW0oKSA/IDIgOiAwXHJcbiAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgIH1cclxuXHJcbiAgICBjYW5QaWNrTW9yZUNoaWNrZW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblBpY2tJdGVtVHlwZShcImNoaWNrZW5cIikpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsSWQgPj0gMCAmJiB0aGlzLmxvY2FsSWQgPD0gNVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBEaSBjaHV54buDbiAoY2jhu5FuZyB0d2Vlbi9zY2hlZHVsZSBjaOG7k25nIG5oYXUpIC0tLVxyXG5cclxuICAgIHByaXZhdGUgX21vdmVJZCA9IDBcclxuICAgIHByaXZhdGUgX2lzV2Fsa2luZyA9IGZhbHNlXHJcblxyXG4gICAgaXNXYWxraW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1dhbGtpbmdcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuX21vdmVJZCsrXHJcbiAgICAgICAgdGhpcy5faXNXYWxraW5nID0gZmFsc2VcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKVxyXG4gICAgfVxyXG5cclxuICAgIGJlZ2luTW92ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuY2FuY2VsTW92ZSgpXHJcbiAgICAgICAgdGhpcy5faXNXYWxraW5nID0gdHJ1ZVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZlSWRcclxuICAgIH1cclxuXHJcbiAgICBpc01vdmVBY3RpdmUobW92ZUlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbW92ZUlkID09PSB0aGlzLl9tb3ZlSWRcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2hNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuX2lzV2Fsa2luZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVQbGF5KSB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBhcnJpdmVJZGxlKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgIH1cclxuXHJcbiAgICBzY2hlZHVsZU9uTW92ZShkZWxheTogbnVtYmVyLCBtb3ZlSWQ6IG51bWJlciwgZm46ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92ZUFjdGl2ZShtb3ZlSWQpKSBmbigpXHJcbiAgICAgICAgfSwgZGVsYXkpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5Gcm9udE9mVGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDJcclxuICAgICAgICB0aGlzLnRhYmxlLnpJbmRleCA9IDFcclxuICAgIH1cclxuXHJcbiAgICBzZXRCZWhpbmRUYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMVxyXG4gICAgICAgIHRoaXMudGFibGUuekluZGV4ID0gMlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0V2Fsayhtb3ZlSWQ6IG51bWJlciwgc2V0dXA6ICgpID0+IHZvaWQsIGJ1aWxkOiAodDogY2MuVHdlZW4pID0+IGNjLlR3ZWVuLCBvbkNvbXBsZXRlPzogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgc2V0dXAoKVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICBidWlsZChjYy50d2Vlbih0aGlzLm5vZGUpKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3ZlQWN0aXZlKG1vdmVJZCkpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNXYWxraW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGlja2VuV2Fsa0R1cmF0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMCkgcmV0dXJuIDFcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDEgfHwgdGhpcy5sb2NhbElkID09IDIpIHJldHVybiAwLjhcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDMpIHJldHVybiAwLjZcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDQpIHJldHVybiAxLjZcclxuICAgICAgICByZXR1cm4gMC44XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvQ2hpY2tlbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUGlja01vcmVDaGlja2VuKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdFBvcyh0aGlzLlBPU19DSElDS0VOKSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgdGhpcy5zcGF3Q2hpY2tlbigpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcblxyXG4gICAgICAgICAgICAgICAgLnRvKDEuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNwYXdDaGlja2VuKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID49IDAgJiYgdGhpcy5sb2NhbElkIDw9IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB0aGlzLnNldEJlaGluZFRhYmxlKClcclxuICAgICAgICAgICAgfSwgdCA9PiB0LnRvKHRoaXMuZ2V0Q2hpY2tlbldhbGtEdXJhdGlvbigpLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc3Bhd0NoaWNrZW4oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd0NoaWNrZW4oKSB7XHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLnByZXBhcmVQaWNrdXBTbG90KFwiY2hpY2tlblwiKVxyXG4gICAgICAgIGlmIChzbG90IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5idG5DaGlja2VuLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwibHYxLXRhcFwiLCBmYWxzZSlcclxuICAgICAgICBsZXQgY2hpY2tlbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ2hpY2tlbilcclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNoaWNrZW4sIFwiY2hpY2tlblwiLCBzbG90KVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmxvY2FsSWQgPT0gMCB8fCB0aGlzLmxvY2FsSWQgPT0gMyB8fCB0aGlzLmxvY2FsSWQgPT0gNCB8fCB0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDFcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBpZGxlKCkge1xyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcGlja3VwTWFjaGluZUNoaWNrZW4obWFjaGluZSkge1xyXG4gICAgICAgIGxldCBjaGlja2VuID0gbWFjaGluZS5nZXRDaGlja2VuKClcclxuICAgICAgICBjaGlja2VuLmdldENvbXBvbmVudChcImNoaWNrZW5cIikuY2hpbjIoKVxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5wcmVwYXJlUGlja3VwU2xvdChcImNoaWNrZW5cIilcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHV0VHJheUl0ZW0oY2hpY2tlbiwgXCJjaGlja2VuXCIsIHNsb3QpXHJcbiAgICAgICAgdGhpcy5sb2NhbElkID0gMlxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBwaWNrdXBDb2NhKGNvY2EpIHtcclxuICAgICAgICBpZiAoIWNvY2EgfHwgIWNvY2EuaXNDb2NhKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBjb2NhLmdldENvY2EoKVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJjb2NhXCIpKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJjb2NhXCIpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY29jYUl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNvY2EpXHJcbiAgICAgICAgdGhpcy5wdXRUcmF5SXRlbShjb2NhSXRlbSwgXCJjb2NhXCIsIHNsb3QpXHJcbiAgICAgICAgdGhpcy5sb2NhbElkID0gNFxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZnJ5VHJheUNoaWNrZW4obWFjaGluZSkge1xyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5nZXRSYXdUcmF5U2xvdCgpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpY2tlbiA9IHRoaXMudHJheUl0ZW1zW3Nsb3RdXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbXNbc2xvdF0gPSBudWxsXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbVR5cGVzW3Nsb3RdID0gbnVsbFxyXG4gICAgICAgIGlmICh0aGlzLmlzVHJheUVtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlja2VuID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRDaGlja2VuID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIG1hY2hpbmUuY29va2luZyhjaGlja2VuKVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb01hY2hpbmUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2NhbElkLCBcImlkIGdhbWVcIik7XHJcbiAgICAgICAgbGV0IG1hY2hpbmUgPSB0aGlzLmdhbWVQbGF5LmJ0bk1hY2hpbmUuZ2V0Q29tcG9uZW50KFwibWFjaGluZVwiKVxyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlTWFjaGluZUFjdGlvbihtb3ZlSWQsIG1hY2hpbmUsIChpZCwgY2IpID0+IHRoaXMud2Fsa1RvTWFjaGluZU9yQWN0KGlkLCBjYikpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGlmIChtYWNoaW5lLmNoaWNrZW4gIT0gbnVsbCAmJiBtYWNoaW5lLmlzQ2hpbiAmJiB0aGlzLmNhblBpY2tJdGVtVHlwZShcImNoaWNrZW5cIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfTUFDSElORSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2t1cE1hY2hpbmVDaGlja2VuKG1hY2hpbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjQsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5waWNrdXBNYWNoaW5lQ2hpY2tlbihtYWNoaW5lKSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRCZWhpbmRUYWJsZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC50bygwLjYsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gMlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19NQUNISU5FKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVNYWNoaW5lQWN0aW9uKG1vdmVJZCwgbWFjaGluZSwgKGlkLCBjYikgPT4gdGhpcy53YWxrRnJvbUNha2VUb01hY2hpbmUoaWQsIGNiKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb1NhdWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgIT0gMiB8fCAhdGhpcy5oYXNBbnlJdGVtKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5maW5kQ29va2VkVHJheVNsb3QoKVxyXG4gICAgICAgIGlmIChzbG90IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvb2tlZEl0ZW0gPSB0aGlzLnRyYXlJdGVtc1tzbG90XVxyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICB9LCB0ID0+IHQudG8oMC41LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TQVVDRSkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXRDaGlja2VuQ29tcChjb29rZWRJdGVtKS5hZGRTYXVjZSgpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9CdXkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FueUl0ZW0oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1vdmVJZCA9IHRoaXMuYmVnaW5Nb3ZlKClcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxvY2FsSWQsIFwiaWQgZ2FtZVwiKTtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRCZWhpbmRUYWJsZSgpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHQudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW92ZUFjdGl2ZShtb3ZlSWQpKSByZXR1cm5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyaXZlSWRsZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbk1vdmUoMC4zLCBtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQbGF5KSB0aGlzLmdhbWVQbGF5LnZhbGlkYXRlU2VsbEF0Q291bnRlcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDNcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMiB8fCB0aGlzLmxvY2FsSWQgPT0gMykge1xyXG4gICAgICAgICAgICBsZXQgc2VsbERlbGF5ID0gdGhpcy5sb2NhbElkID09IDMgPyAwLjQgOiAxXHJcbiAgICAgICAgICAgIGxldCB0d2VlbiA9IHRoaXMubG9jYWxJZCA9PSAzXHJcbiAgICAgICAgICAgICAgICA/IGNjLnR3ZWVuKHRoaXMubm9kZSkuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpLnRvKDAuNCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSlcclxuICAgICAgICAgICAgICAgIDogY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgICAgICB0d2Vlbi5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1dhbGtpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJpdmVJZGxlKClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKHNlbGxEZWxheSwgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0LnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycml2ZUlkbGUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKDAuMywgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3ZlQWN0aXZlKG1vdmVJZCkpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyaXZlSWRsZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKDEsIG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHRoaXMuZ2FtZVBsYXkudmFsaWRhdGVTZWxsQXRDb3VudGVyKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gM1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcbiAgICBtb3ZlVG9Db2NhKCkge1xyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgbGV0IGNvY2FDb21wID0gdGhpcy5nYW1lUGxheS5idG5Db2NhLmdldENvbXBvbmVudChcImNvY2FcIilcclxuXHJcbiAgICAgICAgbGV0IG9uQXJyaXZlQXRDb2NhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGlja3VwQ29jYShjb2NhQ29tcCkgJiYgY29jYUNvbXAgJiYgIWNvY2FDb21wLmlzQnVzeSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb2NhQ29tcC5jb29raW5nKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSA0XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDEgfHwgdGhpcy5sb2NhbElkID09IDMgfHwgdGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uTW92ZSgwLjYsIG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHQudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KSwgb25BcnJpdmVBdENvY2EpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0ICYmIGNvY2FDb21wLmlzQ29jYSkge1xyXG4gICAgICAgICAgICB0aGlzLnBpY2t1cENvY2EoY29jYUNvbXApXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSksIG9uQXJyaXZlQXRDb2NhKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvQ2FrZSgpIHtcclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfQ0FLRSkpIHtcclxuICAgICAgICAgICAgdGhpcy5waWNrQXRDYWtlQ291bnRlck9yQWN0KCgpID0+IHRoaXMuZ2V0Q2FrZSgpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMCB8fCB0aGlzLmxvY2FsSWQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLy8gLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0Q2FrZSgpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMyB8fCB0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC8vIHQudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgfSwgdCA9PiB0LnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYWtlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJjYWtlXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJjYWtlXCIpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FrZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ2FrZSlcclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNha2UsIFwiY2FrZVwiLCBzbG90KVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDVcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRvbWF0bygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUGlja0l0ZW1UeXBlKFwidG9tYXRvXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJ0b21hdG9cIilcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b21hdG8gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVRvbWF0bylcclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKHRvbWF0bywgXCJ0b21hdG9cIiwgc2xvdClcclxuICAgICAgICB0aGlzLmxvY2FsSWQgPSA1XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9Ub21hdG8oKSB7XHJcbiAgICAgICAgbGV0IG1vdmVJZCA9IHRoaXMuYmVnaW5Nb3ZlKClcclxuICAgICAgICBpZiAodGhpcy5pc0F0UG9zKHRoaXMuUE9TX0NBS0UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGlja0F0Q2FrZUNvdW50ZXJPckFjdCgoKSA9PiB0aGlzLmdldFRvbWF0bygpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMCB8fCB0aGlzLmxvY2FsSWQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRUb21hdG8oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRUb21hdG8oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMyB8fCB0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC8vIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLy8gLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuICAgIC8vIC0tLSBSZXNldCAtLS1cclxuXHJcbiAgICBjbGVhclRyYXkoKSB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lVHJheUl0ZW0oMClcclxuICAgICAgICB0aGlzLmNvbnN1bWVUcmF5SXRlbSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VG9TdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLmNhbmNlbE1vdmUoKVxyXG4gICAgICAgIC8vIHRoaXMuY2xlYXJUcmF5KClcclxuICAgICAgICAvLyB0aGlzLmxvY2FsSWQgPSAwXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAvLyB0aGlzLm5vZGUuekluZGV4ID0gMFxyXG4gICAgICAgIC8vIHRoaXMudGFibGUuekluZGV4ID0gMFxyXG4gICAgICAgIC8vIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgLy8gdGhpcy5hbmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICAgICAgLy8gdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICB9XHJcbn1cclxuIl19