
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
                .to(0.6, { position: _this.getPos(_this.POS_CHICKEN) })
                .call(function () { return _this.setInFrontOfTable(); })
                .to(1, { position: _this.getPos(_this.POS_MACHINE) });
        }, onArrive);
    };
    NewClass.prototype.handleMachineAction = function (moveId, machine, walkFn) {
        var _this = this;
        if (machine.chicken != null && this.canPickItemType("chicken")) {
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
            if (machine.chicken != null && this.canPickItemType("chicken")) {
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
            var sellDelay = this.localId == 3 ? 0.4 : 1.2;
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
        if (this.localId == 1 || this.localId == 3 || this.localId == 5) {
            this.scheduleOnMove(0.6, moveId, function () {
                _this.setInFrontOfTable();
            });
            this.startWalk(moveId, function () { }, function (t) { return t.to(0.8, { position: _this.getPos(_this.POS_COCA) }); }, function () {
                var coca = _this.gamePlay.btnCoca.getComponent("coca");
                if (coca)
                    coca.cooking();
                _this.localId = 4;
                _this.finishMove();
            });
            return;
        }
        if (this.localId == 4 && this.gamePlay.btnCoca.getComponent("coca").isCoca) {
            this.gamePlay.btnCoca.getComponent("coca").getCoca();
            if (!this.canPickItemType("coca")) {
                this.finishMove();
                return;
            }
            var slot = this.preparePickupSlot("coca");
            if (slot < 0) {
                this.finishMove();
                return;
            }
            var coca = cc.instantiate(this.preCoca);
            this.putTrayItem(coca, "coca", slot);
            this.localId = 4;
            this.finishMove();
            return;
        }
        if (this.localId == 2) {
            this.startWalk(moveId, function () { }, function (t) { return t
                .to(1, { position: _this.getPos(_this.POS_CHICKEN) })
                .call(function () { return _this.setBehindTable(); })
                .to(0.8, { position: _this.getPos(_this.POS_COCA) }); }, function () {
                var coca = _this.gamePlay.btnCoca.getComponent("coca");
                if (coca)
                    coca.cooking();
                _this.localId = 4;
                _this.finishMove();
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4MkJDO1FBMzJCRyxnQkFBVSxHQUFjLElBQUksQ0FBQTtRQUU1QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixvR0FBb0c7UUFDcEcsY0FBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUIsdUZBQXVGO1FBQ3ZGLFlBQU0sR0FBRztZQUNMLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDbkIsQ0FBQTtRQUNELGlCQUFXLEdBQUcsQ0FBQyxDQUFB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Q0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQ0ksb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsMENBQTBDO1FBQzFDLDJDQUEyQztRQUMzQywyQ0FBMkM7SUFDL0MsQ0FBQztJQTEyQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQ0FDRztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBakJMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4MkI1QjtJQUFELGVBQUM7Q0E5MkJELEFBODJCQyxDQTkyQnFDLEVBQUUsQ0FBQyxTQUFTLEdBODJCakQ7a0JBOTJCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDaGlja2VuOiBjYy5QcmVmYWIgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlQ29jYTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDYWtlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZVRvbWF0bzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2hheTogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAga2hheTI6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBhcnJQb3MgPSBbY2MudjMoLTE5MCwgLTM5KSwgY2MudjMoLTIwNywgLTMyMyksIGNjLnYzKC0yMDcsIC00NjgpLCBjYy52MygxMSwgLTQ1KSxjYy52MygyMzcsLTEyMildXHJcbiAgICBwb3NTdGFydCA9IGNjLnYzKDIwNywgLTU4KVxyXG4gICAgLy8gYXJyUG9zWzBdPXbhu4sgdHLDrSAxIG3DoXkgY2hpw6puIHwgWzFdPTIgc+G7kXQgfCBbMl09MyBraGF5IHwgWzNdPTQgcXXhuqd5IGLDoW4gfCBbNF09dGjhu5t0IGfDoFxyXG4gICAgYXJyUG9zID0gW1xyXG4gICAgICAgIGNjLnYzKC0xOTAsIC0zMCksICAvLyAxIC0gbcOheSBjaGnDqm5cclxuICAgICAgICBjYy52MygtMjA3LCAtMzIzKSwgIC8vIDIgLSBz4buRdFxyXG4gICAgICAgIGNjLnYzKC0yMDcsIC00NjgpLCAgIC8vIDMgLSBraGF5XHJcbiAgICAgICAgY2MudjMoMTEsIC00NSksICAgICAvLyA0IC0gcXXhuqd5IGLDoW5cclxuICAgICAgICBjYy52MygyMzcsIC0xMjIpLCAgIC8vIHRo4bubdCBnw6BcclxuICAgICAgICBjYy52MygyMzcsIC00NjgpLCAgICAgLy8gNSAtIGtob2FpdGF5LCBjYWtlXHJcbiAgICBdXHJcbiAgICBQT1NfTUFDSElORSA9IDFcclxuICAgIFBPU19TQVVDRSA9IDJcclxuICAgIFBPU19DT0NBID0gNFxyXG4gICAgUE9TX1NFTEwgPSAzXHJcbiAgICBQT1NfQ0hJQ0tFTiA9IDBcclxuICAgIFBPU19DQUtFID0gNVxyXG4gICAgbG9jYWxJZCA9IDBcclxuICAgIGdhbWVQbGF5ID0gbnVsbFxyXG4gICAgdGFyZ2V0Q2hpY2tlbiA9IG51bGxcclxuICAgIGNoaWNrZW4gPSBmYWxzZVxyXG4gICAgdHJheUl0ZW1zOiBjYy5Ob2RlW10gPSBbbnVsbCwgbnVsbF1cclxuICAgIHRyYXlJdGVtVHlwZXM6IHN0cmluZ1tdID0gW251bGwsIG51bGxdXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5wb3NTdGFydC5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIik7XHJcbiAgICAgICAgaWYgKHRoaXMua2hheTIpIHRoaXMua2hheTIuYWN0aXZlID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3MoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyclBvc1tpbmRleF1cclxuICAgIH1cclxuXHJcbiAgICBpc0F0UG9zKHBvc0luZGV4OiBudW1iZXIsIHRocmVzaG9sZCA9IDEyKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZ2V0UG9zKHBvc0luZGV4KVxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb25cclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMocG9zLnggLSB0YXJnZXQueCkgPD0gdGhyZXNob2xkICYmIE1hdGguYWJzKHBvcy55IC0gdGFyZ2V0LnkpIDw9IHRocmVzaG9sZFxyXG4gICAgfVxyXG5cclxuICAgIHBpY2tBdENha2VDb3VudGVyT3JBY3Qob25QaWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgb25QaWNrKClcclxuICAgIH1cclxuXHJcbiAgICB3YWxrVG9NYWNoaW5lT3JBY3QobW92ZUlkOiBudW1iZXIsIG9uQXJyaXZlOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdFBvcyh0aGlzLlBPU19NQUNISU5FKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgb25BcnJpdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7IH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19NQUNISU5FKSB9KSxcclxuICAgICAgICAgICAgb25BcnJpdmUpXHJcbiAgICB9XHJcblxyXG4gICAgd2Fsa0Zyb21DYWtlVG9NYWNoaW5lKG1vdmVJZDogbnVtYmVyLCBvbkFycml2ZTogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfTUFDSElORSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIG9uQXJyaXZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgIH0sIHQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHdlZW4gPSB0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfQ0FLRSkpIHtcclxuICAgICAgICAgICAgICAgIHR3ZWVuID0gdHdlZW4udG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KS5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHR3ZWVuXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX01BQ0hJTkUpIH0pXHJcbiAgICAgICAgfSwgb25BcnJpdmUpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTWFjaGluZUFjdGlvbihtb3ZlSWQ6IG51bWJlciwgbWFjaGluZSwgd2Fsa0ZuOiAobW92ZUlkOiBudW1iZXIsIG9uQXJyaXZlOiAoKSA9PiB2b2lkKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKG1hY2hpbmUuY2hpY2tlbiAhPSBudWxsICYmIHRoaXMuY2FuUGlja0l0ZW1UeXBlKFwiY2hpY2tlblwiKSkge1xyXG4gICAgICAgICAgICB3YWxrRm4obW92ZUlkLCAoKSA9PiB0aGlzLnBpY2t1cE1hY2hpbmVDaGlja2VuKG1hY2hpbmUpKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZXRSYXdUcmF5U2xvdCgpID49IDAgJiYgbWFjaGluZS5jaGlja2VuID09IG51bGwpIHtcclxuICAgICAgICAgICAgd2Fsa0ZuKG1vdmVJZCwgKCkgPT4gdGhpcy5mcnlUcmF5Q2hpY2tlbihtYWNoaW5lKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIEtoYXkgKDIgdHJheSkgLS0tXHJcblxyXG4gICAgZ2V0VHJheU5vZGUoc2xvdDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHNsb3QgPT09IDAgPyB0aGlzLmtoYXkgOiB0aGlzLmtoYXkyXHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZVRyYXlTbG90KHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoc2xvdCAhPSBudWxsICYmIHNsb3QgPj0gMCkgcmV0dXJuIHNsb3RcclxuICAgICAgICBsZXQgc2VsbFNsb3QgPSB0aGlzLmdhbWVQbGF5ID8gdGhpcy5nYW1lUGxheS5zZWxsVHJheVNsb3QgOiAtMVxyXG4gICAgICAgIGlmIChzZWxsU2xvdCA+PSAwKSByZXR1cm4gc2VsbFNsb3RcclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbXNbMF0pIHJldHVybiAwXHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zWzFdKSByZXR1cm4gMVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rmlyc3RFbXB0eVRyYXlTbG90KCkge1xyXG4gICAgICAgIGlmICghdGhpcy50cmF5SXRlbXNbMF0pIHJldHVybiAwXHJcbiAgICAgICAgaWYgKCF0aGlzLnRyYXlJdGVtc1sxXSkgcmV0dXJuIDFcclxuICAgICAgICByZXR1cm4gLTFcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmF5SXRlbShzbG90PzogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJheUl0ZW1zW3RoaXMucmVzb2x2ZVRyYXlTbG90KHNsb3QpXVxyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWNrZW5Db21wKGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gaXRlbSA/IGl0ZW0uZ2V0Q29tcG9uZW50KFwiY2hpY2tlblwiKSA6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtVHlwZShzbG90PzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMucmVzb2x2ZVRyYXlTbG90KHNsb3QpXHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1UeXBlc1tpZHhdKSByZXR1cm4gdGhpcy50cmF5SXRlbVR5cGVzW2lkeF1cclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMudHJheUl0ZW1zW2lkeF1cclxuICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpY2tlbkNvbXAoaXRlbSkpIHJldHVybiBcImNoaWNrZW5cIlxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaXNDb2NhSXRlbShpdGVtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gdGhpcy50cmF5SXRlbXNbaV0gJiYgdGhpcy5nZXRJdGVtVHlwZShpKSA9PT0gXCJjb2NhXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNhblNlbGxUcmF5VG9DdXN0b21lcihjdXNDb21wLCBzbG90OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoc2xvdClcclxuICAgICAgICBpZiAoIXR5cGUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy50cmF5SXRlbXNbc2xvdF1cclxuICAgICAgICBpZiAoY3VzQ29tcC5jaGlja2VuICYmIGN1c0NvbXAuY291bnRbMF0gPiAwICYmIHR5cGUgPT09IFwiY2hpY2tlblwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wID0gdGhpcy5nZXRDaGlja2VuQ29tcChpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm4gY29tcCAmJiBjb21wLmlzQ2hpbiAmJiBjdXNDb21wLnNhdWNlID09IGNvbXAuaXNTYXVjZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VzQ29tcC5jb2NhICYmIGN1c0NvbXAuY291bnRbMV0gPiAwICYmIHR5cGUgPT09IFwiY29jYVwiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNha2UgJiYgY3VzQ29tcC5jb3VudFsyXSA+IDAgJiYgdHlwZSA9PT0gXCJjYWtlXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgaWYgKGN1c0NvbXAucG90YXRvICYmIGN1c0NvbXAuY291bnRbM10gPiAwICYmIHR5cGUgPT09IFwidG9tYXRvXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2FuU2VsbFRvQ3VzdG9tZXIoY3VzQ29tcCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRUcmF5Rm9yQ3VzdG9tZXIoY3VzQ29tcCkgPj0gMFxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRUcmF5Rm9yQ3VzdG9tZXIoY3VzQ29tcCkge1xyXG4gICAgICAgIGxldCB0cmF5cyA9IHRoaXMuZmluZEFsbFRyYXlzRm9yQ3VzdG9tZXIoY3VzQ29tcClcclxuICAgICAgICByZXR1cm4gdHJheXMubGVuZ3RoID4gMCA/IHRyYXlzWzBdIDogLTFcclxuICAgIH1cclxuXHJcbiAgICBnZXRNaXNzaW9uVHlwZUZvclNsb3Qoc2xvdDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKHNsb3QpXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiY2hpY2tlblwiKSByZXR1cm4gMFxyXG4gICAgICAgIGlmICh0eXBlID09PSBcImNvY2FcIikgcmV0dXJuIDFcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJjYWtlXCIpIHJldHVybiAyXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwidG9tYXRvXCIpIHJldHVybiAzXHJcbiAgICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcblxyXG4gICAgY2FuU2VsbFRyYXlUb0N1c3RvbWVyV2l0aFJlbWFpbmluZyhjdXNDb21wLCBzbG90OiBudW1iZXIsIHJlbWFpbmluZzogbnVtYmVyW10pIHtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoc2xvdClcclxuICAgICAgICBpZiAoIXR5cGUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy50cmF5SXRlbXNbc2xvdF1cclxuICAgICAgICBpZiAoY3VzQ29tcC5jaGlja2VuICYmIHJlbWFpbmluZ1swXSA+IDAgJiYgdHlwZSA9PT0gXCJjaGlja2VuXCIpIHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmdldENoaWNrZW5Db21wKGl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wICYmIGNvbXAuaXNDaGluICYmIGN1c0NvbXAuc2F1Y2UgPT0gY29tcC5pc1NhdWNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNvY2EgJiYgcmVtYWluaW5nWzFdID4gMCAmJiB0eXBlID09PSBcImNvY2FcIikgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAoY3VzQ29tcC5jYWtlICYmIHJlbWFpbmluZ1syXSA+IDAgJiYgdHlwZSA9PT0gXCJjYWtlXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgaWYgKGN1c0NvbXAucG90YXRvICYmIHJlbWFpbmluZ1szXSA+IDAgJiYgdHlwZSA9PT0gXCJ0b21hdG9cIikgcmV0dXJuIHRydWVcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQWxsVHJheXNGb3JDdXN0b21lcihjdXNDb21wKSB7XHJcbiAgICAgICAgbGV0IHNsb3RzID0gW11cclxuICAgICAgICBsZXQgcmVtYWluaW5nID0gY3VzQ29tcC5jb3VudCA/IGN1c0NvbXAuY291bnQuc2xpY2UoKSA6IFswLCAwLCAwLCAwXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5TZWxsVHJheVRvQ3VzdG9tZXJXaXRoUmVtYWluaW5nKGN1c0NvbXAsIGksIHJlbWFpbmluZykpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIHNsb3RzLnB1c2goaSlcclxuICAgICAgICAgICAgbGV0IG1pc3Npb25UeXBlID0gdGhpcy5nZXRNaXNzaW9uVHlwZUZvclNsb3QoaSlcclxuICAgICAgICAgICAgaWYgKG1pc3Npb25UeXBlID49IDAgJiYgcmVtYWluaW5nW21pc3Npb25UeXBlXSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmluZ1ttaXNzaW9uVHlwZV0tLVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbG90c1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0FueUl0ZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJheUl0ZW1zWzBdICE9IG51bGwgfHwgdGhpcy50cmF5SXRlbXNbMV0gIT0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGlzVHJheUVtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYXlJdGVtc1swXSA9PSBudWxsICYmIHRoaXMudHJheUl0ZW1zWzFdID09IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpc1RyYXlGdWxsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYXlJdGVtc1swXSAhPSBudWxsICYmIHRoaXMudHJheUl0ZW1zWzFdICE9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYXdUcmF5U2xvdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY29tcCA9IHRoaXMuZ2V0Q2hpY2tlbkNvbXAodGhpcy50cmF5SXRlbXNbaV0pXHJcbiAgICAgICAgICAgIGlmIChjb21wICYmICFjb21wLmlzQ2hpbikgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcblxyXG4gICAgZmluZENvb2tlZFRyYXlTbG90KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wID0gdGhpcy5nZXRDaGlja2VuQ29tcCh0aGlzLnRyYXlJdGVtc1tpXSlcclxuICAgICAgICAgICAgaWYgKGNvbXAgJiYgY29tcC5pc0NoaW4gJiYgIWNvbXAuaXNTYXVjZSkgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcblxyXG4gICAgcHV0VHJheUl0ZW0oaXRlbTogY2MuTm9kZSwgdHlwZT86IHN0cmluZywgc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0YXJnZXRTbG90ID0gc2xvdCAhPSBudWxsID8gc2xvdCA6IHRoaXMuZ2V0Rmlyc3RFbXB0eVRyYXlTbG90KClcclxuICAgICAgICBpZiAodGFyZ2V0U2xvdCA8IDApIHJldHVyblxyXG4gICAgICAgIGxldCBraGF5Tm9kZSA9IHRoaXMuZ2V0VHJheU5vZGUodGFyZ2V0U2xvdClcclxuICAgICAgICBpZiAoIWtoYXlOb2RlKSByZXR1cm5cclxuICAgICAgICBpdGVtLnBhcmVudCA9IGtoYXlOb2RlXHJcbiAgICAgICAgbGV0IGFuaW0gPSBpdGVtLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGxheSgpXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbXNbdGFyZ2V0U2xvdF0gPSBpdGVtXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbVR5cGVzW3RhcmdldFNsb3RdID0gdHlwZSB8fCAodGhpcy5nZXRDaGlja2VuQ29tcChpdGVtKSA/IFwiY2hpY2tlblwiIDogbnVsbClcclxuICAgICAgICBraGF5Tm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50YXJnZXRDaGlja2VuID0gaXRlbVxyXG4gICAgICAgIHRoaXMuY2hpY2tlbiA9IHRydWVcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN1bWVUcmF5SXRlbShzbG90PzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFNsb3QgPSBzbG90ICE9IG51bGwgJiYgc2xvdCA+PSAwID8gc2xvdCA6IHRoaXMucmVzb2x2ZVRyYXlTbG90KClcclxuICAgICAgICBpZiAodGFyZ2V0U2xvdCA8IDApIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtc1t0YXJnZXRTbG90XSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYXlJdGVtc1t0YXJnZXRTbG90XS5kZXN0cm95KClcclxuICAgICAgICAgICAgdGhpcy50cmF5SXRlbXNbdGFyZ2V0U2xvdF0gPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMudHJheUl0ZW1UeXBlc1t0YXJnZXRTbG90XSA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUcmF5RW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWNrZW4gPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldENoaWNrZW4gPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVRyYXlzKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDw7Mga2hheSB0cuG7kW5nIHRow6wgZMO5bmcga2hheSB0cuG7kW5nOyBj4bqjIDIga2hheSDEkeG6p3kgdGjDrCBi4buPIDEgbcOzbiBy4buTaSB0aMOqbSDEkeG7kyBt4bubaVxyXG4gICAgY2FuUGlja0l0ZW1UeXBlKHRhcmdldFR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZmluZFJlcGxhY2VUcmF5U2xvdCh0YXJnZXRUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRJdGVtVHlwZShpKSAhPT0gdGFyZ2V0VHlwZSkgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDFcclxuICAgIH1cclxuXHJcbiAgICBwcmVwYXJlUGlja3VwU2xvdCh0YXJnZXRUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZW1wdHkgPSB0aGlzLmdldEZpcnN0RW1wdHlUcmF5U2xvdCgpXHJcbiAgICAgICAgaWYgKGVtcHR5ID49IDApIHJldHVybiBlbXB0eVxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5maW5kUmVwbGFjZVRyYXlTbG90KHRhcmdldFR5cGUpXHJcbiAgICAgICAgdGhpcy5jb25zdW1lVHJheUl0ZW0oc2xvdClcclxuICAgICAgICByZXR1cm4gc2xvdFxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVUcmF5cygpIHtcclxuICAgICAgICBpZiAodGhpcy5raGF5KSB0aGlzLmtoYXkuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5raGF5MikgdGhpcy5raGF5Mi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMiwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGl2ZXJJdGVtKHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0U2xvdCA9IHNsb3QgIT0gbnVsbCAmJiBzbG90ID49IDAgPyBzbG90IDogKHRoaXMuZ2FtZVBsYXkgPyB0aGlzLmdhbWVQbGF5LnNlbGxUcmF5U2xvdCA6IC0xKVxyXG4gICAgICAgIGlmICh0YXJnZXRTbG90IDwgMCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5jb25zdW1lVHJheUl0ZW0odGFyZ2V0U2xvdClcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckRlbGl2ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQW55SXRlbSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlVHJheXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFybXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2hheS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJMLWFybVwiLCB0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMua2hheS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDEsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zWzFdKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtoYXkyKSB0aGlzLmtoYXkyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIlItYXJtXCIsIHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMua2hheTIpIHRoaXMua2hheTIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyQ3VzdG9tZXJMZWZ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMubG9jYWxJZCA9IHRoaXMuaGFzQW55SXRlbSgpID8gMiA6IDBcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNhblBpY2tNb3JlQ2hpY2tlbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUGlja0l0ZW1UeXBlKFwiY2hpY2tlblwiKSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxJZCA+PSAwICYmIHRoaXMubG9jYWxJZCA8PSA1XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIERpIGNodXnhu4NuIChjaOG7kW5nIHR3ZWVuL3NjaGVkdWxlIGNo4buTbmcgbmhhdSkgLS0tXHJcblxyXG4gICAgcHJpdmF0ZSBfbW92ZUlkID0gMFxyXG4gICAgcHJpdmF0ZSBfaXNXYWxraW5nID0gZmFsc2VcclxuXHJcbiAgICBpc1dhbGtpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzV2Fsa2luZ1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbE1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5fbW92ZUlkKytcclxuICAgICAgICB0aGlzLl9pc1dhbGtpbmcgPSBmYWxzZVxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpXHJcbiAgICB9XHJcblxyXG4gICAgYmVnaW5Nb3ZlKCk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxNb3ZlKClcclxuICAgICAgICB0aGlzLl9pc1dhbGtpbmcgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmVJZFxyXG4gICAgfVxyXG5cclxuICAgIGlzTW92ZUFjdGl2ZShtb3ZlSWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBtb3ZlSWQgPT09IHRoaXMuX21vdmVJZFxyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaE1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5faXNXYWxraW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGFycml2ZUlkbGUoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgfVxyXG5cclxuICAgIHNjaGVkdWxlT25Nb3ZlKGRlbGF5OiBudW1iZXIsIG1vdmVJZDogbnVtYmVyLCBmbjogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZlQWN0aXZlKG1vdmVJZCkpIGZuKClcclxuICAgICAgICB9LCBkZWxheSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbkZyb250T2ZUYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMlxyXG4gICAgICAgIHRoaXMudGFibGUuekluZGV4ID0gMVxyXG4gICAgfVxyXG5cclxuICAgIHNldEJlaGluZFRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAxXHJcbiAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAyXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRXYWxrKG1vdmVJZDogbnVtYmVyLCBzZXR1cDogKCkgPT4gdm9pZCwgYnVpbGQ6ICh0OiBjYy5Ud2VlbikgPT4gY2MuVHdlZW4sIG9uQ29tcGxldGU/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTW92ZUFjdGl2ZShtb3ZlSWQpKSByZXR1cm5cclxuICAgICAgICBzZXR1cCgpXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIGJ1aWxkKGNjLnR3ZWVuKHRoaXMubm9kZSkpXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1dhbGtpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWNrZW5XYWxrRHVyYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAwKSByZXR1cm4gMVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMikgcmV0dXJuIDAuOFxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMykgcmV0dXJuIDAuNlxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkgcmV0dXJuIDEuNlxyXG4gICAgICAgIHJldHVybiAwLjhcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9DaGlja2VuKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrTW9yZUNoaWNrZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1vdmVJZCA9IHRoaXMuYmVnaW5Nb3ZlKClcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcblxyXG4gICAgICAgICAgICAgICAgLnRvKDEuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNwYXdDaGlja2VuKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID49IDAgJiYgdGhpcy5sb2NhbElkIDw9IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB0aGlzLnNldEJlaGluZFRhYmxlKClcclxuICAgICAgICAgICAgfSwgdCA9PiB0LnRvKHRoaXMuZ2V0Q2hpY2tlbldhbGtEdXJhdGlvbigpLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc3Bhd0NoaWNrZW4oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd0NoaWNrZW4oKSB7XHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLnByZXBhcmVQaWNrdXBTbG90KFwiY2hpY2tlblwiKVxyXG4gICAgICAgIGlmIChzbG90IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5idG5DaGlja2VuLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwibHYxLXRhcFwiLCBmYWxzZSlcclxuICAgICAgICBsZXQgY2hpY2tlbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ2hpY2tlbilcclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNoaWNrZW4sIFwiY2hpY2tlblwiLCBzbG90KVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmxvY2FsSWQgPT0gMCB8fCB0aGlzLmxvY2FsSWQgPT0gMyB8fCB0aGlzLmxvY2FsSWQgPT0gNCB8fCB0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAxXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgaWRsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHBpY2t1cE1hY2hpbmVDaGlja2VuKG1hY2hpbmUpIHtcclxuICAgICAgICBsZXQgY2hpY2tlbiA9IG1hY2hpbmUuZ2V0Q2hpY2tlbigpXHJcbiAgICAgICAgY2hpY2tlbi5nZXRDb21wb25lbnQoXCJjaGlja2VuXCIpLmNoaW4yKClcclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJjaGlja2VuXCIpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNoaWNrZW4sIFwiY2hpY2tlblwiLCBzbG90KVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZnJ5VHJheUNoaWNrZW4obWFjaGluZSkge1xyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5nZXRSYXdUcmF5U2xvdCgpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpY2tlbiA9IHRoaXMudHJheUl0ZW1zW3Nsb3RdXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbXNbc2xvdF0gPSBudWxsXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbVR5cGVzW3Nsb3RdID0gbnVsbFxyXG4gICAgICAgIGlmICh0aGlzLmlzVHJheUVtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlja2VuID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRDaGlja2VuID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIG1hY2hpbmUuY29va2luZyhjaGlja2VuKVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb01hY2hpbmUoKSB7XHJcbiAgICAgICAgbGV0IG1hY2hpbmUgPSB0aGlzLmdhbWVQbGF5LmJ0bk1hY2hpbmUuZ2V0Q29tcG9uZW50KFwibWFjaGluZVwiKVxyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlTWFjaGluZUFjdGlvbihtb3ZlSWQsIG1hY2hpbmUsIChpZCwgY2IpID0+IHRoaXMud2Fsa1RvTWFjaGluZU9yQWN0KGlkLCBjYikpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGlmIChtYWNoaW5lLmNoaWNrZW4gIT0gbnVsbCAmJiB0aGlzLmNhblBpY2tJdGVtVHlwZShcImNoaWNrZW5cIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfTUFDSElORSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2t1cE1hY2hpbmVDaGlja2VuKG1hY2hpbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX01BQ0hJTkUpIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMucGlja3VwTWFjaGluZUNoaWNrZW4obWFjaGluZSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgfSwgdCA9PiB0XHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX01BQ0hJTkUpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJlaGluZFRhYmxlKClcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjYsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEluRnJvbnRPZlRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gMlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlTWFjaGluZUFjdGlvbihtb3ZlSWQsIG1hY2hpbmUsIChpZCwgY2IpID0+IHRoaXMud2Fsa0Zyb21DYWtlVG9NYWNoaW5lKGlkLCBjYikpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9TYXVjZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkICE9IDIgfHwgIXRoaXMuaGFzQW55SXRlbSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMuZmluZENvb2tlZFRyYXlTbG90KClcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb29rZWRJdGVtID0gdGhpcy50cmF5SXRlbXNbc2xvdF1cclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgfSwgdCA9PiB0LnRvKDAuNSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0FVQ0UpIH0pLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2hpY2tlbkNvbXAoY29va2VkSXRlbSkuYWRkU2F1Y2UoKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvQnV5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNBbnlJdGVtKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2NhbElkICxcImlkIGdhbWVcIik7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0LnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycml2ZUlkbGUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKDAuMywgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDIgfHwgdGhpcy5sb2NhbElkID09IDMpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGxEZWxheSA9IHRoaXMubG9jYWxJZCA9PSAzID8gMC40IDogMS4yXHJcbiAgICAgICAgICAgIGxldCB0d2VlbiA9IHRoaXMubG9jYWxJZCA9PSAzXHJcbiAgICAgICAgICAgICAgICA/IGNjLnR3ZWVuKHRoaXMubm9kZSkuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpLnRvKDAuNCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSlcclxuICAgICAgICAgICAgICAgIDogY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgICAgICB0d2Vlbi5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1dhbGtpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJpdmVJZGxlKClcclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKHNlbGxEZWxheSwgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmVoaW5kVGFibGUoKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHsgfSwgdCA9PiB0LnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmVBY3RpdmUobW92ZUlkKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycml2ZUlkbGUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKDAuMywgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGxheSkgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3ZlQWN0aXZlKG1vdmVJZCkpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyaXZlSWRsZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKDEsIG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkpIHRoaXMuZ2FtZVBsYXkudmFsaWRhdGVTZWxsQXRDb3VudGVyKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gM1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcbiAgICBtb3ZlVG9Db2NhKCkge1xyXG4gICAgICAgIGxldCBtb3ZlSWQgPSB0aGlzLmJlZ2luTW92ZSgpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMyB8fCB0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25Nb3ZlKDAuNiwgbW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7IH0sIHQgPT4gdC50bygwLjgsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29jYSA9IHRoaXMuZ2FtZVBsYXkuYnRuQ29jYS5nZXRDb21wb25lbnQoXCJjb2NhXCIpXHJcbiAgICAgICAgICAgICAgICBpZiAoY29jYSkgY29jYS5jb29raW5nKClcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDRcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0ICYmIHRoaXMuZ2FtZVBsYXkuYnRuQ29jYS5nZXRDb21wb25lbnQoXCJjb2NhXCIpLmlzQ29jYSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmJ0bkNvY2EuZ2V0Q29tcG9uZW50KFwiY29jYVwiKS5nZXRDb2NhKClcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhblBpY2tJdGVtVHlwZShcImNvY2FcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJjb2NhXCIpXHJcbiAgICAgICAgICAgIGlmIChzbG90IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjb2NhID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2NhKVxyXG4gICAgICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNvY2EsIFwiY29jYVwiLCBzbG90KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSA0XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4geyB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29jYSA9IHRoaXMuZ2FtZVBsYXkuYnRuQ29jYS5nZXRDb21wb25lbnQoXCJjb2NhXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvY2EpIGNvY2EuY29va2luZygpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvQ2FrZSgpIHtcclxuICAgICAgICBsZXQgbW92ZUlkID0gdGhpcy5iZWdpbk1vdmUoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQXRQb3ModGhpcy5QT1NfQ0FLRSkpIHtcclxuICAgICAgICAgICAgdGhpcy5waWNrQXRDYWtlQ291bnRlck9yQWN0KCgpID0+IHRoaXMuZ2V0Q2FrZSgpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMCB8fCB0aGlzLmxvY2FsSWQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLy8gLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsobW92ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0Q2FrZSgpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMyB8fCB0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC8vIHQudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluRnJvbnRPZlRhYmxlKClcclxuICAgICAgICAgICAgfSwgdCA9PiB0LnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYWtlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJjYWtlXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJjYWtlXCIpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FrZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ2FrZSlcclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNha2UsIFwiY2FrZVwiLCBzbG90KVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDVcclxuICAgICAgICB0aGlzLmZpbmlzaE1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRvbWF0bygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUGlja0l0ZW1UeXBlKFwidG9tYXRvXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTW92ZSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJ0b21hdG9cIilcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b21hdG8gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZVRvbWF0bylcclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKHRvbWF0bywgXCJ0b21hdG9cIiwgc2xvdClcclxuICAgICAgICB0aGlzLmxvY2FsSWQgPSA1XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9Ub21hdG8oKSB7XHJcbiAgICAgICAgbGV0IG1vdmVJZCA9IHRoaXMuYmVnaW5Nb3ZlKClcclxuICAgICAgICBpZiAodGhpcy5pc0F0UG9zKHRoaXMuUE9TX0NBS0UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGlja0F0Q2FrZUNvdW50ZXJPckFjdCgoKSA9PiB0aGlzLmdldFRvbWF0bygpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMCB8fCB0aGlzLmxvY2FsSWQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0QmVoaW5kVGFibGUoKSlcclxuXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRUb21hdG8oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdFxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNldEJlaGluZFRhYmxlKCkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zZXRJbkZyb250T2ZUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRUb21hdG8oKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMyB8fCB0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsayhtb3ZlSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICB9LCB0ID0+IHRcclxuICAgICAgICAgICAgICAgIC8vIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLy8gLmNhbGwoKCkgPT4gdGhpcy5zZXRCZWhpbmRUYWJsZSgpKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc2V0SW5Gcm9udE9mVGFibGUoKSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxrKG1vdmVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIH0sIHQgPT4gdC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZlKClcclxuICAgIH1cclxuICAgIC8vIC0tLSBSZXNldCAtLS1cclxuXHJcbiAgICBjbGVhclRyYXkoKSB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lVHJheUl0ZW0oMClcclxuICAgICAgICB0aGlzLmNvbnN1bWVUcmF5SXRlbSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VG9TdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLmNhbmNlbE1vdmUoKVxyXG4gICAgICAgIC8vIHRoaXMuY2xlYXJUcmF5KClcclxuICAgICAgICAvLyB0aGlzLmxvY2FsSWQgPSAwXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAvLyB0aGlzLm5vZGUuekluZGV4ID0gMFxyXG4gICAgICAgIC8vIHRoaXMudGFibGUuekluZGV4ID0gMFxyXG4gICAgICAgIC8vIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgLy8gdGhpcy5hbmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICAgICAgLy8gdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICB9XHJcbn1cclxuIl19