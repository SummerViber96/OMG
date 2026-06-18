"use strict";
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