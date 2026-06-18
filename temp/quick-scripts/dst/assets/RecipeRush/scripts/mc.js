
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
                    .to(0.4, { position: _this.getPos(_this.POS_CAKE) })
                    .call(function () { return _this.setBehindTable(); })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2MkJDO1FBMTJCRyxnQkFBVSxHQUFjLElBQUksQ0FBQTtRQUU1QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixvR0FBb0c7UUFDcEcsY0FBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUIsdUZBQXVGO1FBQ3ZGLFlBQU0sR0FBRztZQUNMLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDbkIsQ0FBQTtRQUNELGlCQUFXLEdBQUcsQ0FBQyxDQUFB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QUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLDBDQUEwQztRQUMxQywyQ0FBMkM7UUFDM0MsMkNBQTJDO0lBQy9DLENBQUM7SUF6MkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0c7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQWpCTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNjJCNUI7SUFBRCxlQUFDO0NBNzJCRCxBQTYyQkMsQ0E3MkJxQyxFQUFFLENBQUMsU0FBUyxHQTYyQmpEO2tCQTcyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ2hpY2tlbjogY2MuUHJlZmFiID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNvY2E6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ2FrZTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVUb21hdG86IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGtoYXk6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGtoYXkyOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYW5pbTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YWJsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gYXJyUG9zID0gW2NjLnYzKC0xOTAsIC0zOSksIGNjLnYzKC0yMDcsIC0zMjMpLCBjYy52MygtMjA3LCAtNDY4KSwgY2MudjMoMTEsIC00NSksY2MudjMoMjM3LC0xMjIpXVxyXG4gICAgcG9zU3RhcnQgPSBjYy52MygyMDcsIC01OClcclxuICAgIC8vIGFyclBvc1swXT124buLIHRyw60gMSBtw6F5IGNoacOqbiB8IFsxXT0yIHPhu5F0IHwgWzJdPTMga2hheSB8IFszXT00IHF14bqneSBiw6FuIHwgWzRdPXRo4bubdCBnw6BcclxuICAgIGFyclBvcyA9IFtcclxuICAgICAgICBjYy52MygtMTkwLCAtMzApLCAgLy8gMSAtIG3DoXkgY2hpw6puXHJcbiAgICAgICAgY2MudjMoLTIwNywgLTMyMyksICAvLyAyIC0gc+G7kXRcclxuICAgICAgICBjYy52MygtMjA3LCAtNDY4KSwgICAvLyAzIC0ga2hheVxyXG4gICAgICAgIGNjLnYzKDExLCAtNDUpLCAgICAgLy8gNCAtIHF14bqneSBiw6FuXHJcbiAgICAgICAgY2MudjMoMjM3LCAtMTIyKSwgICAvLyB0aOG7m3QgZ8OgXHJcbiAgICAgICAgY2MudjMoMjM3LCAtNDY4KSwgICAgIC8vIDUgLSBraG9haXRheSwgY2FrZVxyXG4gICAgXVxyXG4gICAgUE9TX01BQ0hJTkUgPSAxXHJcbiAgICBQT1NfU0FVQ0UgPSAyXHJcbiAgICBQT1NfQ09DQSA9IDRcclxuICAgIFBPU19TRUxMID0gM1xyXG4gICAgUE9TX0NISUNLRU4gPSAwXHJcbiAgICBQT1NfQ0FLRSA9IDVcclxuICAgIGxvY2FsSWQgPSAwXHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIHRhcmdldENoaWNrZW4gPSBudWxsXHJcbiAgICBjaGlja2VuID0gZmFsc2VcclxuICAgIHRyYXlJdGVtczogY2MuTm9kZVtdID0gW251bGwsIG51bGxdXHJcbiAgICB0cmF5SXRlbVR5cGVzOiBzdHJpbmdbXSA9IFtudWxsLCBudWxsXVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMucG9zU3RhcnQuY2xvbmUoKTtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmtoYXkyKSB0aGlzLmtoYXkyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJQb3NbaW5kZXhdXHJcbiAgICB9XHJcblxyXG4gICAgaXNBdFBvcyhwb3NJbmRleDogbnVtYmVyLCB0aHJlc2hvbGQgPSAxMikge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmdldFBvcyhwb3NJbmRleClcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uXHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHBvcy54IC0gdGFyZ2V0LngpIDw9IHRocmVzaG9sZCAmJiBNYXRoLmFicyhwb3MueSAtIHRhcmdldC55KSA8PSB0aHJlc2hvbGRcclxuICAgIH1cclxuXHJcbiAgICBwaWNrQXRDYWtlQ291bnRlck9yQWN0KG9uUGljazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgIG9uUGljaygpXHJcbiAgICB9XHJcblxyXG4gICAgd2Fsa1RvTWFjaGluZU9yQWN0KG1vdmVJZDogbnVtYmVyLCBvbkFycml2ZTogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfTUFDSElORSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIG9uQXJyaXZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHRcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSksXHJcbiAgICAgICAgICAgIG9uQXJyaXZlKVxyXG4gICAgfVxyXG5cclxuICAgIHdhbGtGcm9tQ2FrZVRvTWFjaGluZShtb3ZlSWQ6IG51bWJlciwgb25BcnJpdmU6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0F0UG9zKHRoaXMuUE9TX01BQ0hJTkUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICBvbkFycml2ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICB9LCB0ID0+IHtcclxuICAgICAgICAgICAgbGV0IHR3ZWVuID0gdFxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0F0UG9zKHRoaXMuUE9TX0NBS0UpKSB7XHJcbiAgICAgICAgICAgICAgICB0d2VlbiA9IHR3ZWVuLnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSkuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0d2VlblxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSlcclxuICAgICAgICB9LCBvbkFycml2ZSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNYWNoaW5lQWN0aW9uKG1vdmVJZDogbnVtYmVyLCBtYWNoaW5lLCB3YWxrRm46IChtb3ZlSWQ6IG51bWJlciwgb25BcnJpdmU6ICgpID0+IHZvaWQpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAobWFjaGluZS5jaGlja2VuICE9IG51bGwgJiYgbWFjaGluZS5pc0NoaW4gJiYgdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJjaGlja2VuXCIpKSB7XHJcbiAgICAgICAgICAgIHdhbGtGbihtb3ZlSWQsICgpID0+IHRoaXMucGlja3VwTWFjaGluZUNoaWNrZW4obWFjaGluZSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdldFJhd1RyYXlTbG90KCkgPj0gMCAmJiBtYWNoaW5lLmNoaWNrZW4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3YWxrRm4obW92ZUlkLCAoKSA9PiB0aGlzLmZyeVRyYXlDaGlja2VuKG1hY2hpbmUpKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gS2hheSAoMiB0cmF5KSAtLS1cclxuXHJcbiAgICBnZXRUcmF5Tm9kZShzbG90OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gc2xvdCA9PT0gMCA/IHRoaXMua2hheSA6IHRoaXMua2hheTJcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlVHJheVNsb3Qoc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChzbG90ICE9IG51bGwgJiYgc2xvdCA+PSAwKSByZXR1cm4gc2xvdFxyXG4gICAgICAgIGxldCBzZWxsU2xvdCA9IHRoaXMuZ2FtZVBsYXkgPyB0aGlzLmdhbWVQbGF5LnNlbGxUcmF5U2xvdCA6IC0xXHJcbiAgICAgICAgaWYgKHNlbGxTbG90ID49IDApIHJldHVybiBzZWxsU2xvdFxyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtc1swXSkgcmV0dXJuIDBcclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbXNbMV0pIHJldHVybiAxXHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaXJzdEVtcHR5VHJheVNsb3QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRyYXlJdGVtc1swXSkgcmV0dXJuIDBcclxuICAgICAgICBpZiAoIXRoaXMudHJheUl0ZW1zWzFdKSByZXR1cm4gMVxyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYXlJdGVtKHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmF5SXRlbXNbdGhpcy5yZXNvbHZlVHJheVNsb3Qoc2xvdCldXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpY2tlbkNvbXAoaXRlbTogY2MuTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5nZXRDb21wb25lbnQoXCJjaGlja2VuXCIpIDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1UeXBlKHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5yZXNvbHZlVHJheVNsb3Qoc2xvdClcclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbVR5cGVzW2lkeF0pIHJldHVybiB0aGlzLnRyYXlJdGVtVHlwZXNbaWR4XVxyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy50cmF5SXRlbXNbaWR4XVxyXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuIG51bGxcclxuICAgICAgICBpZiAodGhpcy5nZXRDaGlja2VuQ29tcChpdGVtKSkgcmV0dXJuIFwiY2hpY2tlblwiXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpc0NvY2FJdGVtKGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09PSB0aGlzLnRyYXlJdGVtc1tpXSAmJiB0aGlzLmdldEl0ZW1UeXBlKGkpID09PSBcImNvY2FcIikgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2FuU2VsbFRyYXlUb0N1c3RvbWVyKGN1c0NvbXAsIHNsb3Q6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRJdGVtVHlwZShzbG90KVxyXG4gICAgICAgIGlmICghdHlwZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnRyYXlJdGVtc1tzbG90XVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNoaWNrZW4gJiYgY3VzQ29tcC5jb3VudFswXSA+IDAgJiYgdHlwZSA9PT0gXCJjaGlja2VuXCIpIHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmdldENoaWNrZW5Db21wKGl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wICYmIGNvbXAuaXNDaGluICYmIGN1c0NvbXAuc2F1Y2UgPT0gY29tcC5pc1NhdWNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNvY2EgJiYgY3VzQ29tcC5jb3VudFsxXSA+IDAgJiYgdHlwZSA9PT0gXCJjb2NhXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY2FrZSAmJiBjdXNDb21wLmNvdW50WzJdID4gMCAmJiB0eXBlID09PSBcImNha2VcIikgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAoY3VzQ29tcC5wb3RhdG8gJiYgY3VzQ29tcC5jb3VudFszXSA+IDAgJiYgdHlwZSA9PT0gXCJ0b21hdG9cIikgcmV0dXJuIHRydWVcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjYW5TZWxsVG9DdXN0b21lcihjdXNDb21wKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZFRyYXlGb3JDdXN0b21lcihjdXNDb21wKSA+PSAwXHJcbiAgICB9XHJcblxyXG4gICAgZmluZFRyYXlGb3JDdXN0b21lcihjdXNDb21wKSB7XHJcbiAgICAgICAgbGV0IHRyYXlzID0gdGhpcy5maW5kQWxsVHJheXNGb3JDdXN0b21lcihjdXNDb21wKVxyXG4gICAgICAgIHJldHVybiB0cmF5cy5sZW5ndGggPiAwID8gdHJheXNbMF0gOiAtMVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1pc3Npb25UeXBlRm9yU2xvdChzbG90OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoc2xvdClcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJjaGlja2VuXCIpIHJldHVybiAwXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiY29jYVwiKSByZXR1cm4gMVxyXG4gICAgICAgIGlmICh0eXBlID09PSBcImNha2VcIikgcmV0dXJuIDJcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJ0b21hdG9cIikgcmV0dXJuIDNcclxuICAgICAgICByZXR1cm4gLTFcclxuICAgIH1cclxuXHJcbiAgICBjYW5TZWxsVHJheVRvQ3VzdG9tZXJXaXRoUmVtYWluaW5nKGN1c0NvbXAsIHNsb3Q6IG51bWJlciwgcmVtYWluaW5nOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRJdGVtVHlwZShzbG90KVxyXG4gICAgICAgIGlmICghdHlwZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnRyYXlJdGVtc1tzbG90XVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNoaWNrZW4gJiYgcmVtYWluaW5nWzBdID4gMCAmJiB0eXBlID09PSBcImNoaWNrZW5cIikge1xyXG4gICAgICAgICAgICBsZXQgY29tcCA9IHRoaXMuZ2V0Q2hpY2tlbkNvbXAoaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXAgJiYgY29tcC5pc0NoaW4gJiYgY3VzQ29tcC5zYXVjZSA9PSBjb21wLmlzU2F1Y2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY29jYSAmJiByZW1haW5pbmdbMV0gPiAwICYmIHR5cGUgPT09IFwiY29jYVwiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNha2UgJiYgcmVtYWluaW5nWzJdID4gMCAmJiB0eXBlID09PSBcImNha2VcIikgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAoY3VzQ29tcC5wb3RhdG8gJiYgcmVtYWluaW5nWzNdID4gMCAmJiB0eXBlID09PSBcInRvbWF0b1wiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRBbGxUcmF5c0ZvckN1c3RvbWVyKGN1c0NvbXApIHtcclxuICAgICAgICBsZXQgc2xvdHMgPSBbXVxyXG4gICAgICAgIGxldCByZW1haW5pbmcgPSBjdXNDb21wLmNvdW50ID8gY3VzQ29tcC5jb3VudC5zbGljZSgpIDogWzAsIDAsIDAsIDBdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhblNlbGxUcmF5VG9DdXN0b21lcldpdGhSZW1haW5pbmcoY3VzQ29tcCwgaSwgcmVtYWluaW5nKSkgY29udGludWVcclxuICAgICAgICAgICAgc2xvdHMucHVzaChpKVxyXG4gICAgICAgICAgICBsZXQgbWlzc2lvblR5cGUgPSB0aGlzLmdldE1pc3Npb25UeXBlRm9yU2xvdChpKVxyXG4gICAgICAgICAgICBpZiAobWlzc2lvblR5cGUgPj0gMCAmJiByZW1haW5pbmdbbWlzc2lvblR5cGVdID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nW21pc3Npb25UeXBlXS0tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNsb3RzXHJcbiAgICB9XHJcblxyXG4gICAgaGFzQW55SXRlbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmF5SXRlbXNbMF0gIT0gbnVsbCB8fCB0aGlzLnRyYXlJdGVtc1sxXSAhPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaXNUcmF5RW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJheUl0ZW1zWzBdID09IG51bGwgJiYgdGhpcy50cmF5SXRlbXNbMV0gPT0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGlzVHJheUZ1bGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJheUl0ZW1zWzBdICE9IG51bGwgJiYgdGhpcy50cmF5SXRlbXNbMV0gIT0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdldFJhd1RyYXlTbG90KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wID0gdGhpcy5nZXRDaGlja2VuQ29tcCh0aGlzLnRyYXlJdGVtc1tpXSlcclxuICAgICAgICAgICAgaWYgKGNvbXAgJiYgIWNvbXAuaXNDaGluKSByZXR1cm4gaVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTFcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQ29va2VkVHJheVNsb3QoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmdldENoaWNrZW5Db21wKHRoaXMudHJheUl0ZW1zW2ldKVxyXG4gICAgICAgICAgICBpZiAoY29tcCAmJiBjb21wLmlzQ2hpbiAmJiAhY29tcC5pc1NhdWNlKSByZXR1cm4gaVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTFcclxuICAgIH1cclxuXHJcbiAgICBwdXRUcmF5SXRlbShpdGVtOiBjYy5Ob2RlLCB0eXBlPzogc3RyaW5nLCBzbG90PzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFNsb3QgPSBzbG90ICE9IG51bGwgPyBzbG90IDogdGhpcy5nZXRGaXJzdEVtcHR5VHJheVNsb3QoKVxyXG4gICAgICAgIGlmICh0YXJnZXRTbG90IDwgMCkgcmV0dXJuXHJcbiAgICAgICAgbGV0IGtoYXlOb2RlID0gdGhpcy5nZXRUcmF5Tm9kZSh0YXJnZXRTbG90KVxyXG4gICAgICAgIGlmICgha2hheU5vZGUpIHJldHVyblxyXG4gICAgICAgIGl0ZW0ucGFyZW50ID0ga2hheU5vZGVcclxuICAgICAgICBsZXQgYW5pbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBpZiAoYW5pbSkgYW5pbS5wbGF5KClcclxuICAgICAgICB0aGlzLnRyYXlJdGVtc1t0YXJnZXRTbG90XSA9IGl0ZW1cclxuICAgICAgICB0aGlzLnRyYXlJdGVtVHlwZXNbdGFyZ2V0U2xvdF0gPSB0eXBlIHx8ICh0aGlzLmdldENoaWNrZW5Db21wKGl0ZW0pID8gXCJjaGlja2VuXCIgOiBudWxsKVxyXG4gICAgICAgIGtoYXlOb2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnRhcmdldENoaWNrZW4gPSBpdGVtXHJcbiAgICAgICAgdGhpcy5jaGlja2VuID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3VtZVRyYXlJdGVtKHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0U2xvdCA9IHNsb3QgIT0gbnVsbCAmJiBzbG90ID49IDAgPyBzbG90IDogdGhpcy5yZXNvbHZlVHJheVNsb3QoKVxyXG4gICAgICAgIGlmICh0YXJnZXRTbG90IDwgMCkgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zW3RhcmdldFNsb3RdKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJheUl0ZW1zW3RhcmdldFNsb3RdLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB0aGlzLnRyYXlJdGVtc1t0YXJnZXRTbG90XSA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy50cmF5SXRlbVR5cGVzW3RhcmdldFNsb3RdID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1RyYXlFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpY2tlbiA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Q2hpY2tlbiA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy5oaWRlVHJheXMoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEPDsyBraGF5IHRy4buRbmcgdGjDrCBkw7luZyBraGF5IHRy4buRbmc7IGPhuqMgMiBraGF5IMSR4bqneSB0aMOsIGLhu48gMSBtw7NuIHLhu5NpIHRow6ptIMSR4buTIG3hu5tpXHJcbiAgICBjYW5QaWNrSXRlbVR5cGUodGFyZ2V0VHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBmaW5kUmVwbGFjZVRyYXlTbG90KHRhcmdldFR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldEl0ZW1UeXBlKGkpICE9PSB0YXJnZXRUeXBlKSByZXR1cm4gaVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMVxyXG4gICAgfVxyXG5cclxuICAgIHByZXBhcmVQaWNrdXBTbG90KHRhcmdldFR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBlbXB0eSA9IHRoaXMuZ2V0Rmlyc3RFbXB0eVRyYXlTbG90KClcclxuICAgICAgICBpZiAoZW1wdHkgPj0gMCkgcmV0dXJuIGVtcHR5XHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLmZpbmRSZXBsYWNlVHJheVNsb3QodGFyZ2V0VHlwZSlcclxuICAgICAgICB0aGlzLmNvbnN1bWVUcmF5SXRlbShzbG90KVxyXG4gICAgICAgIHJldHVybiBzbG90XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRyYXlzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtoYXkpIHRoaXMua2hheS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmtoYXkyKSB0aGlzLmtoYXkyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsaXZlckl0ZW0oc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0YXJnZXRTbG90ID0gc2xvdCAhPSBudWxsICYmIHNsb3QgPj0gMCA/IHNsb3QgOiAodGhpcy5nYW1lUGxheSA/IHRoaXMuZ2FtZVBsYXkuc2VsbFRyYXlTbG90IDogLTEpXHJcbiAgICAgICAgaWYgKHRhcmdldFNsb3QgPCAwKSByZXR1cm5cclxuICAgICAgICB0aGlzLmNvbnN1bWVUcmF5SXRlbSh0YXJnZXRTbG90KVxyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyRGVsaXZlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNBbnlJdGVtKCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVUcmF5cygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQXJtcygpIHtcclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbXNbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5raGF5LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigxLCBcIkwtYXJtXCIsIHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5raGF5LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbXNbMV0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMua2hheTIpIHRoaXMua2hheTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDIsIFwiUi1hcm1cIiwgdHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5raGF5MikgdGhpcy5raGF5Mi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDIsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJDdXN0b21lckxlZnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5sb2NhbElkID0gdGhpcy5oYXNBbnlJdGVtKCkgPyAyIDogMFxyXG4gICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICB9XHJcblxyXG4gICAgY2FuUGlja01vcmVDaGlja2VuKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJjaGlja2VuXCIpKSByZXR1cm4gZmFsc2VcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbElkID49IDAgJiYgdGhpcy5sb2NhbElkIDw9IDVcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gRGkgY2h1eeG7g24gKGNo4buRbmcgdHdlZW4vc2NoZWR1bGUgY2jhu5NuZyBuaGF1KSAtLS1cclxuXHJcbiAgICBwcml2YXRlIF9tb3ZlSWQgPSAwXHJcbiAgICBwcml2YXRlIF9pc1dhbGtpbmcgPSBmYWxzZVxyXG5cclxuICAgIGlzV2Fsa2luZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNXYWxraW5nXHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsTW92ZSgpIHtcclxuICAgICAgICB0aGlzLl9tb3ZlSWQrK1xyXG4gICAgICAgIHRoaXMuX2lzV2Fsa2luZyA9IGZhbHNlXHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBiZWdpbk1vdmUoKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLmNhbmNlbE1vdmUoKVxyXG4gICAgICAgIHRoaXMuX2lzV2Fsa2luZyA9IHRydWVcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW92ZUlkXHJcbiAgICB9XHJcblxyXG4gICAgaXNNb3ZlQWN0aXZlKG1vdmVJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vdmVJZCA9PT0gdGhpcy5fbW92ZUlkXHJcbiAgICB9XHJcblxyXG4gICAgZmluaXNoTW92ZSgpIHtcclxuICAgICAgICB0aGlzLl9pc1dhbGtpbmcgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgYXJyaXZlSWRsZSgpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICB9XHJcblxyXG4gICAgc2NoZWR1bGVPbk1vdmUoZGVsYXk6IG51bWJlciwgbW92ZUlkOiBudW1iZXIsIGZuOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgZm4oKVxyXG4gICAgICAgIH0sIGRlbGF5KVxyXG4gICAgfVxyXG5cclxuICAgIHNldEluRnJvbnRPZlRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAyXHJcbiAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAxXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmVoaW5kVGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDFcclxuICAgICAgICB0aGlzLnRhYmxlLnpJbmRleCA9IDJcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFdhbGsobW92ZUlkOiBudW1iZXIsIHNldHVwOiAoKSA9PiB2b2lkLCBidWlsZDogKHQ6IGNjLlR3ZWVuKSA9PiBjYy5Ud2Vlbiwgb25Db21wbGV0ZT86ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNNb3ZlQWN0aXZlKG1vdmVJZCkpIHJldHVyblxyXG4gICAgICAgIHNldHVwKClcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgYnVpbGQoY2MudHdlZW4odGhpcy5ub2RlKSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW92ZUFjdGl2ZShtb3ZlSWQpKSByZXR1cm5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzV2Fsa2luZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpY2tlbldhbGtEdXJhdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDApIHJldHVybiAxXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAxIHx8IHRoaXMubG9jYWxJZCA9PSAyKSByZXR1cm4gMC44XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzKSByZXR1cm4gMC42XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSByZXR1cm4gMS42XHJcbiAgICAgICAgcmV0dXJuIDAuOFxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb0NoaWNrZW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblBpY2tNb3JlQ2hpY2tlbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuXHJcbiAgICAgICAgICAgICAgICAudG8oMS42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc3Bhd0NoaWNrZW4oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPj0gMCAmJiB0aGlzLmxvY2FsSWQgPD0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDQpIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICB9LCB0ID0+IHQudG8odGhpcy5nZXRDaGlja2VuV2Fsa0R1cmF0aW9uKCksIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5zcGF3Q2hpY2tlbigpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBzcGF3Q2hpY2tlbigpIHtcclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJjaGlja2VuXCIpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmJ0bkNoaWNrZW4uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJsdjEtdGFwXCIsIGZhbHNlKVxyXG4gICAgICAgIGxldCBjaGlja2VuID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDaGlja2VuKVxyXG4gICAgICAgIHRoaXMucHV0VHJheUl0ZW0oY2hpY2tlbiwgXCJjaGlja2VuXCIsIHNsb3QpXHJcbiAgICAgICAgLy8gaWYgKHRoaXMubG9jYWxJZCA9PSAwIHx8IHRoaXMubG9jYWxJZCA9PSAzIHx8IHRoaXMubG9jYWxJZCA9PSA0IHx8IHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDFcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBpZGxlKCkge1xyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcGlja3VwTWFjaGluZUNoaWNrZW4obWFjaGluZSkge1xyXG4gICAgICAgIGxldCBjaGlja2VuID0gbWFjaGluZS5nZXRDaGlja2VuKClcclxuICAgICAgICBjaGlja2VuLmdldENvbXBvbmVudChcImNoaWNrZW5cIikuY2hpbjIoKVxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5wcmVwYXJlUGlja3VwU2xvdChcImNoaWNrZW5cIilcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHV0VHJheUl0ZW0oY2hpY2tlbiwgXCJjaGlja2VuXCIsIHNsb3QpXHJcbiAgICAgICAgdGhpcy5sb2NhbElkID0gMlxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBwaWNrdXBDb2NhKGNvY2EpIHtcclxuICAgICAgICBpZiAoIWNvY2EgfHwgIWNvY2EuaXNDb2NhKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBjb2NhLmdldENvY2EoKVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJjb2NhXCIpKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJjb2NhXCIpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgY29jYUl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNvY2EpXHJcbiAgICAgICAgdGhpcy5wdXRUcmF5SXRlbShjb2NhSXRlbSwgXCJjb2NhXCIsIHNsb3QpXHJcbiAgICAgICAgdGhpcy5sb2NhbElkID0gNFxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZnJ5VHJheUNoaWNrZW4obWFjaGluZSkge1xyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5nZXRSYXdUcmF5U2xvdCgpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpY2tlbiA9IHRoaXMudHJheUl0ZW1zW3Nsb3RdXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbXNbc2xvdF0gPSBudWxsXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbVR5cGVzW3Nsb3RdID0gbnVsbFxyXG4gICAgICAgIGlmICh0aGlzLmlzVHJheUVtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlja2VuID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRDaGlja2VuID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIG1hY2hpbmUuY29va2luZyhjaGlja2VuKVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb01hY2hpbmUoKSB7XHJcbiAgICAgICAgbGV0IG1hY2hpbmUgPSB0aGlzLmdhbWVQbGF5LmJ0bk1hY2hpbmUuZ2V0Q29tcG9uZW50KFwibWFjaGluZVwiKVxyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlTWFjaGluZUFjdGlvbihtb3ZlSWQsIG1hY2hpbmUsIChpZCwgY2IpID0+IHRoaXMud2Fsa1RvTWFjaGluZU9yQWN0KGlkLCBjYikpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGlmIChtYWNoaW5lLmNoaWNrZW4gIT0gbnVsbCAmJiBtYWNoaW5lLmlzQ2hpbiAmJiB0aGlzLmNhblBpY2tJdGVtVHlwZShcImNoaWNrZW5cIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfTUFDSElORSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2t1cE1hY2hpbmVDaGlja2VuKG1hY2hpbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX01BQ0hJTkUpIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMucGlja3VwTWFjaGluZUNoaWNrZW4obWFjaGluZSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX01BQ0hJTkUpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJlaGluZFRhYmxlKClcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjYsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gMlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlTWFjaGluZUFjdGlvbihtb3ZlSWQsIG1hY2hpbmUsIChpZCwgY2IpID0+IHRoaXMud2Fsa0Zyb21DYWtlVG9NYWNoaW5lKGlkLCBjYikpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9TYXVjZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkICE9IDIgfHwgIXRoaXMuaGFzQW55SXRlbSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMuZmluZENvb2tlZFRyYXlTbG90KClcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb29rZWRJdGVtID0gdGhpcy50cmF5SXRlbXNbc2xvdF1cclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgfSwgdCA9PiB0LnRvKDAuNSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0FVQ0UpIH0pLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2hpY2tlbkNvbXAoY29va2VkSXRlbSkuYWRkU2F1Y2UoKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvQnV5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNBbnlJdGVtKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2NhbElkICxcImlkIGdhbWVcIik7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0LnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycml2ZUlkbGUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKDAuMywgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDIgfHwgdGhpcy5sb2NhbElkID09IDMpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGxEZWxheSA9IHRoaXMubG9jYWxJZCA9PSAzID8gMC40IDogMVxyXG4gICAgICAgICAgICBsZXQgdHdlZW4gPSB0aGlzLmxvY2FsSWQgPT0gM1xyXG4gICAgICAgICAgICAgICAgPyBjYy50d2Vlbih0aGlzLm5vZGUpLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKS50bygwLjQsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX1NFTEwpIH0pXHJcbiAgICAgICAgICAgICAgICA6IGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSlcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICAgICAgdHdlZW4uY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3ZlQWN0aXZlKG1vdmVJZCkpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNXYWxraW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyaXZlSWRsZSgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uTW92ZShzZWxsRGVsYXksIG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHRoaXMuZ2FtZVBsYXkudmFsaWRhdGVTZWxsQXRDb3VudGVyKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gM1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEJlaGluZFRhYmxlKClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7IH0sIHQgPT4gdC50bygwLjYsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX1NFTEwpIH0pLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3ZlQWN0aXZlKG1vdmVJZCkpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJpdmVJZGxlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uTW92ZSgwLjMsIG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHRoaXMuZ2FtZVBsYXkudmFsaWRhdGVTZWxsQXRDb3VudGVyKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gM1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjYsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX1NFTEwpIH0pLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW92ZUFjdGl2ZShtb3ZlSWQpKSByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycml2ZUlkbGUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uTW92ZSgxLCBtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQbGF5KSB0aGlzLmdhbWVQbGF5LnZhbGlkYXRlU2VsbEF0Q291bnRlcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDNcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG4gICAgbW92ZVRvQ29jYSgpIHtcclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgIGxldCBjb2NhQ29tcCA9IHRoaXMuZ2FtZVBsYXkuYnRuQ29jYS5nZXRDb21wb25lbnQoXCJjb2NhXCIpXHJcblxyXG4gICAgICAgIGxldCBvbkFycml2ZUF0Q29jYSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBpY2t1cENvY2EoY29jYUNvbXApICYmIGNvY2FDb21wICYmICFjb2NhQ29tcC5pc0J1c3koKSkge1xyXG4gICAgICAgICAgICAgICAgY29jYUNvbXAuY29va2luZygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gNFxyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAxIHx8IHRoaXMubG9jYWxJZCA9PSAzIHx8IHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbk1vdmUoMC42LCBtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0LnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSksIG9uQXJyaXZlQXRDb2NhKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCAmJiBjb2NhQ29tcC5pc0NvY2EpIHtcclxuICAgICAgICAgICAgdGhpcy5waWNrdXBDb2NhKGNvY2FDb21wKVxyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjgsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pLCBvbkFycml2ZUF0Q29jYSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb0Nha2UoKSB7XHJcbiAgICAgICAgbGV0IG1vdmVJZCA9IHRoaXMuYmVnaW5Nb3ZlKClcclxuICAgICAgICBpZiAodGhpcy5pc0F0UG9zKHRoaXMuUE9TX0NBS0UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGlja0F0Q2FrZUNvdW50ZXJPckFjdCgoKSA9PiB0aGlzLmdldENha2UoKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDAgfHwgdGhpcy5sb2NhbElkID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC8vIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0Q2FrZSgpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjgsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdldENha2UoKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDMgfHwgdGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAvLyB0LnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0Q2FrZSgpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0Q2FrZSgpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FrZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUGlja0l0ZW1UeXBlKFwiY2FrZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLnByZXBhcmVQaWNrdXBTbG90KFwiY2FrZVwiKVxyXG4gICAgICAgIGlmIChzbG90IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNha2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNha2UpXHJcbiAgICAgICAgdGhpcy5wdXRUcmF5SXRlbShjYWtlLCBcImNha2VcIiwgc2xvdClcclxuICAgICAgICB0aGlzLmxvY2FsSWQgPSA1XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb21hdG8oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblBpY2tJdGVtVHlwZShcInRvbWF0b1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLnByZXBhcmVQaWNrdXBTbG90KFwidG9tYXRvXCIpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG9tYXRvID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVUb21hdG8pXHJcbiAgICAgICAgdGhpcy5wdXRUcmF5SXRlbSh0b21hdG8sIFwidG9tYXRvXCIsIHNsb3QpXHJcbiAgICAgICAgdGhpcy5sb2NhbElkID0gNVxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvVG9tYXRvKCkge1xyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdFBvcyh0aGlzLlBPU19DQUtFKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBpY2tBdENha2VDb3VudGVyT3JBY3QoKCkgPT4gdGhpcy5nZXRUb21hdG8oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDAgfHwgdGhpcy5sb2NhbElkID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcblxyXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDMgfHwgdGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAvLyAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC8vIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjQsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdldFRvbWF0bygpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHQudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdldFRvbWF0bygpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcbiAgICAvLyAtLS0gUmVzZXQgLS0tXHJcblxyXG4gICAgY2xlYXJUcmF5KCkge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZVRyYXlJdGVtKDApXHJcbiAgICAgICAgdGhpcy5jb25zdW1lVHJheUl0ZW0oMSlcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRvU3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jYW5jZWxNb3ZlKClcclxuICAgICAgICAvLyB0aGlzLmNsZWFyVHJheSgpXHJcbiAgICAgICAgLy8gdGhpcy5sb2NhbElkID0gMFxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnpJbmRleCA9IDBcclxuICAgICAgICAvLyB0aGlzLnRhYmxlLnpJbmRleCA9IDBcclxuICAgICAgICAvLyB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgIC8vIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgICAgIC8vIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMiwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==