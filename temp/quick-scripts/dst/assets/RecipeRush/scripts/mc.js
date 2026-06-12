
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
    // Cùng loại hoặc khác loại: dùng khay trống, không xóa item đang có
    // Chỉ chặn khi cả 2 khay đều đầy
    NewClass.prototype.canPickItemType = function (targetType) {
        return !this.isTrayFull();
    };
    NewClass.prototype.preparePickupSlot = function (targetType) {
        return this.getFirstEmptyTraySlot();
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
        this.anim.setAnimation(0, "Idle", true);
        if (this.hasAnyItem()) {
            this.updateArms();
        }
        else {
            this.hideTrays();
        }
        this.gamePlay.isMoving = false;
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
    // --- Di chuyển ---
    NewClass.prototype.moveToChicken = function () {
        var _this = this;
        console.log(this.localId);
        if (!this.canPickMoreChicken()) {
            this.gamePlay.isMoving = false;
            return;
        }
        if (this.localId == 0) {
            this.node.scaleX = 1;
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () { return _this.spawChicken(); })
                .start();
        }
        else if (this.localId == 1 || this.localId == 2) {
            this.node.scaleX = 1;
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            cc.tween(this.node)
                .to(0.8, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () { return _this.spawChicken(); })
                .start();
        }
        else if (this.localId == 3) {
            this.node.scaleX = 1;
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            cc.tween(this.node)
                .to(0.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () { return _this.spawChicken(); })
                .start();
        }
        else if (this.localId == 4) {
            this.node.scaleX = 1;
            this.node.zIndex = 1;
            this.table.zIndex = 2;
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            cc.tween(this.node)
                .to(1.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () { return _this.spawChicken(); })
                .start();
        }
        else if (this.localId == 5) {
            this.node.scaleX = 1;
            this.node.zIndex = 1;
            this.table.zIndex = 2;
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_COCA) })
                .to(1.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () { return _this.spawChicken(); })
                .start();
        }
        else {
            this.gamePlay.isMoving = false;
        }
    };
    NewClass.prototype.spawChicken = function () {
        var slot = this.preparePickupSlot("chicken");
        if (slot < 0) {
            this.gamePlay.isMoving = false;
            return;
        }
        this.gamePlay.btnChicken.children[0].getComponent(sp.Skeleton).setAnimation(0, "lv1-tap", false);
        var chicken = cc.instantiate(this.preChicken);
        this.putTrayItem(chicken, "chicken", slot);
        if (this.localId == 0 || this.localId == 3 || this.localId == 4 || this.localId == 5) {
            this.localId = 1;
        }
        this.anim.setAnimation(0, "Idle", true);
        this.gamePlay.isMoving = false;
    };
    NewClass.prototype.idle = function () {
        this.anim.setAnimation(0, "Idle", true);
        this.updateArms();
        this.gamePlay.isMoving = false;
    };
    NewClass.prototype.moveToMachine = function () {
        var _this = this;
        this.node.zIndex = 2;
        var machine = this.gamePlay.btnMachine.getComponent("machine");
        var rawSlot = this.getRawTraySlot();
        if ((this.localId == 1 || this.localId == 2) && rawSlot >= 0 && machine.chicken == null) {
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            cc.tween(this.node)
                .call(function () {
                _this.node.zIndex = 2;
                _this.table.zIndex = 1;
            })
                .to(1, { position: this.getPos(this.POS_MACHINE) })
                .call(function () {
                var slot = _this.getRawTraySlot();
                var chicken = _this.trayItems[slot];
                _this.trayItems[slot] = null;
                _this.trayItemTypes[slot] = null;
                _this.updateArms();
                machine.cooking(chicken);
                _this.chicken = false;
                _this.idle();
                _this.localId = 2;
                _this.gamePlay.isMoving = false;
            })
                .start();
            return;
        }
        if (this.localId == 2 && machine.chicken != null) {
            if (!this.canPickItemType("chicken")) {
                this.gamePlay.isMoving = false;
                return;
            }
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            var chicken = machine.getChicken();
            chicken.getComponent("chicken").chin2();
            var slot = this.preparePickupSlot("chicken");
            if (slot < 0) {
                this.gamePlay.isMoving = false;
                return;
            }
            this.putTrayItem(chicken, "chicken", slot);
            this.localId = 2;
            this.anim.setAnimation(0, "Idle", true);
            this.gamePlay.isMoving = false;
            return;
        }
        if (this.localId == 3 && machine.chicken != null) {
            this.anim.setAnimation(0, "Walk", true);
            cc.tween(this.node)
                .to(0.4, { position: this.getPos(this.POS_MACHINE) })
                .to(1, { position: this.getPos(this.POS_MACHINE) })
                .call(function () {
                _this.updateArms();
                var chicken = machine.getChicken();
                chicken.getComponent("chicken").chin2();
                var slot = _this.preparePickupSlot("chicken");
                if (slot < 0) {
                    _this.gamePlay.isMoving = false;
                    return;
                }
                _this.putTrayItem(chicken, "chicken", slot);
                _this.localId = 2;
                _this.anim.setAnimation(0, "Idle", true);
                _this.gamePlay.isMoving = false;
            })
                .start();
        }
        if (this.localId == 4) {
            this.anim.setAnimation(0, "Walk", true);
            this.node.scaleX = 1;
            cc.tween(this.node)
                .to(0.6, { position: this.getPos(this.POS_SELL) })
                .to(0.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () {
                _this.node.zIndex = 2;
                _this.table.zIndex = 1;
            })
                .to(1, { position: this.getPos(this.POS_MACHINE) })
                .call(function () {
                _this.anim.setAnimation(0, "Idle", true);
                _this.updateArms();
                _this.localId = 2;
                _this.gamePlay.isMoving = false;
            })
                .start();
        }
        if (this.localId == 3) {
            this.anim.setAnimation(0, "Walk", true);
            this.node.scaleX = 1;
            cc.tween(this.node)
                .to(0.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () {
                _this.node.zIndex = 2;
                _this.table.zIndex = 1;
            })
                .to(1, { position: this.getPos(this.POS_MACHINE) })
                .call(function () {
                _this.anim.setAnimation(0, "Idle", true);
                _this.updateArms();
                _this.localId = 2;
                _this.gamePlay.isMoving = false;
            })
                .start();
        }
    };
    NewClass.prototype.moveToSauce = function () {
        var _this = this;
        if (this.localId != 2 || !this.hasAnyItem()) {
            this.gamePlay.isMoving = false;
            return;
        }
        var slot = this.findCookedTraySlot();
        if (slot < 0) {
            this.gamePlay.isMoving = false;
            return;
        }
        var cookedItem = this.trayItems[slot];
        this.node.zIndex = 2;
        this.anim.setAnimation(0, "Walk", true);
        this.updateArms();
        this.node.scaleX = -1;
        cc.tween(this.node)
            .to(0.5, { position: this.getPos(this.POS_SAUCE) })
            .call(function () {
            _this.getChickenComp(cookedItem).addSauce();
            _this.node.scaleX = 1;
            _this.idle();
            _this.gamePlay.isMoving = false;
        })
            .start();
    };
    NewClass.prototype.moveToBuy = function () {
        var _this = this;
        if (!this.hasAnyItem()) {
            this.gamePlay.isMoving = false;
            return;
        }
        cc.Tween.stopAllByTarget(this.node);
        this.gamePlay.isMoving = true;
        this.node.scaleX = -1;
        this.anim.setAnimation(0, "Walk", true);
        this.updateArms();
        this.table.zIndex = 1;
        this.node.zIndex = 2;
        if (this.localId == 2 || this.localId == 3) {
            var duration = this.localId == 3 ? 0.4 : 1.4;
            var tween = this.localId == 3
                ? cc.tween(this.node).call(function () {
                    _this.node.zIndex = 1;
                    _this.table.zIndex = 2;
                }).to(0.4, { position: this.getPos(this.POS_SELL) })
                : cc.tween(this.node)
                    .to(1, { position: this.getPos(this.POS_CHICKEN) })
                    .call(function () {
                    _this.node.zIndex = 1;
                    _this.table.zIndex = 2;
                })
                    .to(0.4, { position: this.getPos(this.POS_SELL) });
            tween
                .call(function () {
                _this.anim.setAnimation(0, "Idle", true);
                _this.updateArms();
            })
                .start();
            this.scheduleOnce(function () {
                _this.gamePlay.validateSellAtCounter();
            }, 1);
            this.localId = 3;
        }
        else if (this.localId == 4) {
            this.table.zIndex = 2;
            this.node.zIndex = 1;
            // console.log("moveToCocaBuy")
            this.node.scaleX = 1;
            cc.tween(this.node)
                .to(0.6, { position: this.getPos(this.POS_SELL) })
                .call(function () {
                _this.anim.setAnimation(0, "Idle", true);
                _this.updateArms();
            })
                .start();
            this.scheduleOnce(function () {
                _this.gamePlay.validateSellAtCounter();
            }, 0.3);
            this.localId = 3;
        }
        else if (this.localId == 5) {
            this.node.scaleX = 1;
            this.table.zIndex = 1;
            this.node.zIndex = 2;
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_COCA) })
                .call(function () {
                _this.node.zIndex = 1;
                _this.table.zIndex = 2;
            })
                .to(0.6, { position: this.getPos(this.POS_SELL) })
                .call(function () {
                _this.anim.setAnimation(0, "Idle", true);
                _this.updateArms();
            })
                .start();
            this.scheduleOnce(function () {
                _this.gamePlay.validateSellAtCounter();
            }, 1);
            this.localId = 3;
        }
        else {
            this.gamePlay.isMoving = false;
        }
    };
    NewClass.prototype.moveToCoca = function () {
        var _this = this;
        this.node.scaleX = -1;
        if (this.localId == 1 || this.localId == 3 || this.localId == 5) {
            this.gamePlay.isMoving = true;
            this.scheduleOnce(function () {
                _this.node.zIndex = 2;
            }, 0.4);
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            cc.tween(this.node)
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .call(function () {
                _this.idle();
                var coca = _this.gamePlay.btnCoca.getComponent("coca");
                if (coca)
                    coca.cooking();
                _this.localId = 4;
            })
                .start();
        }
        else if (this.localId == 4 && this.gamePlay.btnCoca.getComponent("coca").isCoca) {
            this.gamePlay.btnCoca.getComponent("coca").getCoca();
            if (!this.canPickItemType("coca")) {
                this.gamePlay.isMoving = false;
                return;
            }
            var slot = this.preparePickupSlot("coca");
            if (slot < 0) {
                this.gamePlay.isMoving = false;
                return;
            }
            var coca = cc.instantiate(this.preCoca);
            this.putTrayItem(coca, "coca", slot);
            this.localId = 4;
            this.gamePlay.isMoving = false;
        }
        else if (this.localId == 2) {
            this.gamePlay.isMoving = true;
            this.anim.setAnimation(0, "Walk", true);
            this.node.scaleX = -1;
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () {
                _this.node.zIndex = 1;
                _this.table.zIndex = 2;
            })
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .call(function () {
                _this.idle();
                var coca = _this.gamePlay.btnCoca.getComponent("coca");
                if (coca)
                    coca.cooking();
                _this.localId = 4;
            })
                .start();
        }
        else {
            this.gamePlay.isMoving = false;
        }
    };
    NewClass.prototype.moveToCake = function () {
        var _this = this;
        if (this.localId == 0 || this.localId == 1 || this.localId == 2) {
            this.gamePlay.isMoving = true;
            this.anim.setAnimation(0, "Walk", true);
            this.node.scaleX = -1;
            this.node.zIndex = 2;
            this.table.zIndex = 1;
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () {
                _this.node.zIndex = 1;
                _this.table.zIndex = 2;
            })
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .call(function () {
                _this.node.zIndex = 2;
                _this.table.zIndex = 1;
            })
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(function () { return _this.getCake(); })
                .start();
            return;
        }
        if (this.localId == 3 || this.localId == 5) {
            this.gamePlay.isMoving = true;
            this.anim.setAnimation(0, "Walk", true);
            this.node.scaleX = -1;
            cc.tween(this.node)
                .to(0.4, { position: this.getPos(this.POS_COCA) })
                .call(function () {
                _this.node.zIndex = 2;
                _this.table.zIndex = 1;
            })
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(function () { return _this.getCake(); })
                .start();
            return;
        }
        if (this.localId == 4) {
            this.gamePlay.isMoving = true;
            this.anim.setAnimation(0, "Walk", true);
            this.node.scaleX = -1;
            this.node.zIndex = 2;
            this.table.zIndex = 1;
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(function () { return _this.getCake(); })
                .start();
            return;
        }
        this.gamePlay.isMoving = false;
    };
    NewClass.prototype.getCake = function () {
        if (!this.canPickItemType("cake")) {
            this.gamePlay.isMoving = false;
            return;
        }
        var slot = this.preparePickupSlot("cake");
        if (slot < 0) {
            this.gamePlay.isMoving = false;
            return;
        }
        var cake = cc.instantiate(this.preCake);
        this.putTrayItem(cake, "cake", slot);
        this.localId = 5;
        this.idle();
    };
    NewClass.prototype.getTomato = function () {
        if (!this.canPickItemType("tomato")) {
            this.gamePlay.isMoving = false;
            return;
        }
        var slot = this.preparePickupSlot("tomato");
        if (slot < 0) {
            this.gamePlay.isMoving = false;
            return;
        }
        var tomato = cc.instantiate(this.preTomato);
        this.putTrayItem(tomato, "tomato", slot);
        this.localId = 5;
        this.idle();
    };
    NewClass.prototype.moveToTomato = function () {
        var _this = this;
        if (this.localId == 0 || this.localId == 1 || this.localId == 2) {
            this.gamePlay.isMoving = true;
            this.anim.setAnimation(0, "Walk", true);
            this.node.scaleX = -1;
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(function () { return _this.getTomato(); })
                .start();
            return;
        }
        if (this.localId == 3 || this.localId == 5) {
            this.gamePlay.isMoving = true;
            this.anim.setAnimation(0, "Walk", true);
            this.node.scaleX = -1;
            cc.tween(this.node)
                .to(0.4, { position: this.getPos(this.POS_COCA) })
                .call(function () {
                _this.node.zIndex = 2;
                _this.table.zIndex = 1;
            })
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(function () { return _this.getTomato(); })
                .start();
            return;
        }
        if (this.localId == 4) {
            this.gamePlay.isMoving = true;
            this.anim.setAnimation(0, "Walk", true);
            this.node.scaleX = -1;
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CAKE) })
                .call(function () { return _this.getTomato(); })
                .start();
            return;
        }
        this.gamePlay.isMoving = false;
    };
    // --- Reset ---
    NewClass.prototype.clearTray = function () {
        this.consumeTrayItem(0);
        this.consumeTrayItem(1);
    };
    NewClass.prototype.resetToStart = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.clearTray();
        // this.localId = 0
        this.node.scaleX = 1;
        this.node.zIndex = 0;
        this.table.zIndex = 0;
        this.anim.setAnimation(0, "Idle", true);
        this.anim.setAnimation(1, "Idle", false);
        this.anim.setAnimation(2, "Idle", false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3eEJDO1FBcnhCRyxnQkFBVSxHQUFjLElBQUksQ0FBQTtRQUU1QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixvR0FBb0c7UUFDcEcsY0FBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUIsdUZBQXVGO1FBQ3ZGLFlBQU0sR0FBRztZQUNMLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDbkIsQ0FBQTtRQUNELGlCQUFXLEdBQUcsQ0FBQyxDQUFB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LENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzBDQUNHO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFqQkwsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXd4QjVCO0lBQUQsZUFBQztDQXh4QkQsQUF3eEJDLENBeHhCcUMsRUFBRSxDQUFDLFNBQVMsR0F3eEJqRDtrQkF4eEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNoaWNrZW46IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDb2NhOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNha2U6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlVG9tYXRvOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBraGF5OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBraGF5MjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGFibGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIGFyclBvcyA9IFtjYy52MygtMTkwLCAtMzkpLCBjYy52MygtMjA3LCAtMzIzKSwgY2MudjMoLTIwNywgLTQ2OCksIGNjLnYzKDExLCAtNDUpLGNjLnYzKDIzNywtMTIyKV1cclxuICAgIHBvc1N0YXJ0ID0gY2MudjMoMjA3LCAtNTgpXHJcbiAgICAvLyBhcnJQb3NbMF09duG7iyB0csOtIDEgbcOheSBjaGnDqm4gfCBbMV09MiBz4buRdCB8IFsyXT0zIGtoYXkgfCBbM109NCBxdeG6p3kgYsOhbiB8IFs0XT10aOG7m3QgZ8OgXHJcbiAgICBhcnJQb3MgPSBbXHJcbiAgICAgICAgY2MudjMoLTE5MCwgLTMwKSwgIC8vIDEgLSBtw6F5IGNoacOqblxyXG4gICAgICAgIGNjLnYzKC0yMDcsIC0zMjMpLCAgLy8gMiAtIHPhu5F0XHJcbiAgICAgICAgY2MudjMoLTIwNywgLTQ2OCksICAgLy8gMyAtIGtoYXlcclxuICAgICAgICBjYy52MygxMSwgLTQ1KSwgICAgIC8vIDQgLSBxdeG6p3kgYsOhblxyXG4gICAgICAgIGNjLnYzKDIzNywgLTEyMiksICAgLy8gdGjhu5t0IGfDoFxyXG4gICAgICAgIGNjLnYzKDIzNywgLTQ2OCksICAgICAvLyA1IC0ga2hvYWl0YXksIGNha2VcclxuICAgIF1cclxuICAgIFBPU19NQUNISU5FID0gMVxyXG4gICAgUE9TX1NBVUNFID0gMlxyXG4gICAgUE9TX0NPQ0EgPSA0XHJcbiAgICBQT1NfU0VMTCA9IDNcclxuICAgIFBPU19DSElDS0VOID0gMFxyXG4gICAgUE9TX0NBS0UgPSA1XHJcbiAgICBsb2NhbElkID0gMFxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICB0YXJnZXRDaGlja2VuID0gbnVsbFxyXG4gICAgY2hpY2tlbiA9IGZhbHNlXHJcbiAgICB0cmF5SXRlbXM6IGNjLk5vZGVbXSA9IFtudWxsLCBudWxsXVxyXG4gICAgdHJheUl0ZW1UeXBlczogc3RyaW5nW10gPSBbbnVsbCwgbnVsbF1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLnBvc1N0YXJ0LmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVEb251dFwiKTtcclxuICAgICAgICBpZiAodGhpcy5raGF5MikgdGhpcy5raGF5Mi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBvcyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyUG9zW2luZGV4XVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBLaGF5ICgyIHRyYXkpIC0tLVxyXG5cclxuICAgIGdldFRyYXlOb2RlKHNsb3Q6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBzbG90ID09PSAwID8gdGhpcy5raGF5IDogdGhpcy5raGF5MlxyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVUcmF5U2xvdChzbG90PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHNsb3QgIT0gbnVsbCAmJiBzbG90ID49IDApIHJldHVybiBzbG90XHJcbiAgICAgICAgbGV0IHNlbGxTbG90ID0gdGhpcy5nYW1lUGxheSA/IHRoaXMuZ2FtZVBsYXkuc2VsbFRyYXlTbG90IDogLTFcclxuICAgICAgICBpZiAoc2VsbFNsb3QgPj0gMCkgcmV0dXJuIHNlbGxTbG90XHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zWzBdKSByZXR1cm4gMFxyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtc1sxXSkgcmV0dXJuIDFcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG5cclxuICAgIGdldEZpcnN0RW1wdHlUcmF5U2xvdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudHJheUl0ZW1zWzBdKSByZXR1cm4gMFxyXG4gICAgICAgIGlmICghdGhpcy50cmF5SXRlbXNbMV0pIHJldHVybiAxXHJcbiAgICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJheUl0ZW0oc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYXlJdGVtc1t0aGlzLnJlc29sdmVUcmF5U2xvdChzbG90KV1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGlja2VuQ29tcChpdGVtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmdldENvbXBvbmVudChcImNoaWNrZW5cIikgOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbVR5cGUoc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLnJlc29sdmVUcmF5U2xvdChzbG90KVxyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtVHlwZXNbaWR4XSkgcmV0dXJuIHRoaXMudHJheUl0ZW1UeXBlc1tpZHhdXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnRyYXlJdGVtc1tpZHhdXHJcbiAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmICh0aGlzLmdldENoaWNrZW5Db21wKGl0ZW0pKSByZXR1cm4gXCJjaGlja2VuXCJcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGlzQ29jYUl0ZW0oaXRlbTogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHRoaXMudHJheUl0ZW1zW2ldICYmIHRoaXMuZ2V0SXRlbVR5cGUoaSkgPT09IFwiY29jYVwiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjYW5TZWxsVHJheVRvQ3VzdG9tZXIoY3VzQ29tcCwgc2xvdDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKHNsb3QpXHJcbiAgICAgICAgaWYgKCF0eXBlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMudHJheUl0ZW1zW3Nsb3RdXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY2hpY2tlbiAmJiBjdXNDb21wLmNvdW50WzBdID4gMCAmJiB0eXBlID09PSBcImNoaWNrZW5cIikge1xyXG4gICAgICAgICAgICBsZXQgY29tcCA9IHRoaXMuZ2V0Q2hpY2tlbkNvbXAoaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXAgJiYgY29tcC5pc0NoaW4gJiYgY3VzQ29tcC5zYXVjZSA9PSBjb21wLmlzU2F1Y2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY29jYSAmJiBjdXNDb21wLmNvdW50WzFdID4gMCAmJiB0eXBlID09PSBcImNvY2FcIikgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAoY3VzQ29tcC5jYWtlICYmIGN1c0NvbXAuY291bnRbMl0gPiAwICYmIHR5cGUgPT09IFwiY2FrZVwiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGlmIChjdXNDb21wLnBvdGF0byAmJiBjdXNDb21wLmNvdW50WzNdID4gMCAmJiB0eXBlID09PSBcInRvbWF0b1wiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNhblNlbGxUb0N1c3RvbWVyKGN1c0NvbXApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maW5kVHJheUZvckN1c3RvbWVyKGN1c0NvbXApID49IDBcclxuICAgIH1cclxuXHJcbiAgICBmaW5kVHJheUZvckN1c3RvbWVyKGN1c0NvbXApIHtcclxuICAgICAgICBsZXQgdHJheXMgPSB0aGlzLmZpbmRBbGxUcmF5c0ZvckN1c3RvbWVyKGN1c0NvbXApXHJcbiAgICAgICAgcmV0dXJuIHRyYXlzLmxlbmd0aCA+IDAgPyB0cmF5c1swXSA6IC0xXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWlzc2lvblR5cGVGb3JTbG90KHNsb3Q6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRJdGVtVHlwZShzbG90KVxyXG4gICAgICAgIGlmICh0eXBlID09PSBcImNoaWNrZW5cIikgcmV0dXJuIDBcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJjb2NhXCIpIHJldHVybiAxXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiY2FrZVwiKSByZXR1cm4gMlxyXG4gICAgICAgIGlmICh0eXBlID09PSBcInRvbWF0b1wiKSByZXR1cm4gM1xyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG5cclxuICAgIGNhblNlbGxUcmF5VG9DdXN0b21lcldpdGhSZW1haW5pbmcoY3VzQ29tcCwgc2xvdDogbnVtYmVyLCByZW1haW5pbmc6IG51bWJlcltdKSB7XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKHNsb3QpXHJcbiAgICAgICAgaWYgKCF0eXBlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMudHJheUl0ZW1zW3Nsb3RdXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY2hpY2tlbiAmJiByZW1haW5pbmdbMF0gPiAwICYmIHR5cGUgPT09IFwiY2hpY2tlblwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wID0gdGhpcy5nZXRDaGlja2VuQ29tcChpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm4gY29tcCAmJiBjb21wLmlzQ2hpbiAmJiBjdXNDb21wLnNhdWNlID09IGNvbXAuaXNTYXVjZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VzQ29tcC5jb2NhICYmIHJlbWFpbmluZ1sxXSA+IDAgJiYgdHlwZSA9PT0gXCJjb2NhXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgaWYgKGN1c0NvbXAuY2FrZSAmJiByZW1haW5pbmdbMl0gPiAwICYmIHR5cGUgPT09IFwiY2FrZVwiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGlmIChjdXNDb21wLnBvdGF0byAmJiByZW1haW5pbmdbM10gPiAwICYmIHR5cGUgPT09IFwidG9tYXRvXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZmluZEFsbFRyYXlzRm9yQ3VzdG9tZXIoY3VzQ29tcCkge1xyXG4gICAgICAgIGxldCBzbG90cyA9IFtdXHJcbiAgICAgICAgbGV0IHJlbWFpbmluZyA9IGN1c0NvbXAuY291bnQgPyBjdXNDb21wLmNvdW50LnNsaWNlKCkgOiBbMCwgMCwgMCwgMF1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuU2VsbFRyYXlUb0N1c3RvbWVyV2l0aFJlbWFpbmluZyhjdXNDb21wLCBpLCByZW1haW5pbmcpKSBjb250aW51ZVxyXG4gICAgICAgICAgICBzbG90cy5wdXNoKGkpXHJcbiAgICAgICAgICAgIGxldCBtaXNzaW9uVHlwZSA9IHRoaXMuZ2V0TWlzc2lvblR5cGVGb3JTbG90KGkpXHJcbiAgICAgICAgICAgIGlmIChtaXNzaW9uVHlwZSA+PSAwICYmIHJlbWFpbmluZ1ttaXNzaW9uVHlwZV0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5pbmdbbWlzc2lvblR5cGVdLS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xvdHNcclxuICAgIH1cclxuXHJcbiAgICBoYXNBbnlJdGVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYXlJdGVtc1swXSAhPSBudWxsIHx8IHRoaXMudHJheUl0ZW1zWzFdICE9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpc1RyYXlFbXB0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmF5SXRlbXNbMF0gPT0gbnVsbCAmJiB0aGlzLnRyYXlJdGVtc1sxXSA9PSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaXNUcmF5RnVsbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmF5SXRlbXNbMF0gIT0gbnVsbCAmJiB0aGlzLnRyYXlJdGVtc1sxXSAhPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmF3VHJheVNsb3QoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmdldENoaWNrZW5Db21wKHRoaXMudHJheUl0ZW1zW2ldKVxyXG4gICAgICAgICAgICBpZiAoY29tcCAmJiAhY29tcC5pc0NoaW4pIHJldHVybiBpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRDb29rZWRUcmF5U2xvdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY29tcCA9IHRoaXMuZ2V0Q2hpY2tlbkNvbXAodGhpcy50cmF5SXRlbXNbaV0pXHJcbiAgICAgICAgICAgIGlmIChjb21wICYmIGNvbXAuaXNDaGluICYmICFjb21wLmlzU2F1Y2UpIHJldHVybiBpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG5cclxuICAgIHB1dFRyYXlJdGVtKGl0ZW06IGNjLk5vZGUsIHR5cGU/OiBzdHJpbmcsIHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0U2xvdCA9IHNsb3QgIT0gbnVsbCA/IHNsb3QgOiB0aGlzLmdldEZpcnN0RW1wdHlUcmF5U2xvdCgpXHJcbiAgICAgICAgaWYgKHRhcmdldFNsb3QgPCAwKSByZXR1cm5cclxuICAgICAgICBsZXQga2hheU5vZGUgPSB0aGlzLmdldFRyYXlOb2RlKHRhcmdldFNsb3QpXHJcbiAgICAgICAgaWYgKCFraGF5Tm9kZSkgcmV0dXJuXHJcbiAgICAgICAgaXRlbS5wYXJlbnQgPSBraGF5Tm9kZVxyXG4gICAgICAgIGxldCBhbmltID0gaXRlbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIGlmIChhbmltKSBhbmltLnBsYXkoKVxyXG4gICAgICAgIHRoaXMudHJheUl0ZW1zW3RhcmdldFNsb3RdID0gaXRlbVxyXG4gICAgICAgIHRoaXMudHJheUl0ZW1UeXBlc1t0YXJnZXRTbG90XSA9IHR5cGUgfHwgKHRoaXMuZ2V0Q2hpY2tlbkNvbXAoaXRlbSkgPyBcImNoaWNrZW5cIiA6IG51bGwpXHJcbiAgICAgICAga2hheU5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudGFyZ2V0Q2hpY2tlbiA9IGl0ZW1cclxuICAgICAgICB0aGlzLmNoaWNrZW4gPSB0cnVlXHJcbiAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdW1lVHJheUl0ZW0oc2xvdD86IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0YXJnZXRTbG90ID0gc2xvdCAhPSBudWxsICYmIHNsb3QgPj0gMCA/IHNsb3QgOiB0aGlzLnJlc29sdmVUcmF5U2xvdCgpXHJcbiAgICAgICAgaWYgKHRhcmdldFNsb3QgPCAwKSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbXNbdGFyZ2V0U2xvdF0pIHtcclxuICAgICAgICAgICAgdGhpcy50cmF5SXRlbXNbdGFyZ2V0U2xvdF0uZGVzdHJveSgpXHJcbiAgICAgICAgICAgIHRoaXMudHJheUl0ZW1zW3RhcmdldFNsb3RdID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLnRyYXlJdGVtVHlwZXNbdGFyZ2V0U2xvdF0gPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVHJheUVtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlja2VuID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRDaGlja2VuID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLmhpZGVUcmF5cygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ8O5bmcgbG/huqFpIGhv4bq3YyBraMOhYyBsb+G6oWk6IGTDuW5nIGtoYXkgdHLhu5FuZywga2jDtG5nIHjDs2EgaXRlbSDEkWFuZyBjw7NcclxuICAgIC8vIENo4buJIGNo4bq3biBraGkgY+G6oyAyIGtoYXkgxJHhu4F1IMSR4bqneVxyXG4gICAgY2FuUGlja0l0ZW1UeXBlKHRhcmdldFR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc1RyYXlGdWxsKClcclxuICAgIH1cclxuXHJcbiAgICBwcmVwYXJlUGlja3VwU2xvdCh0YXJnZXRUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaXJzdEVtcHR5VHJheVNsb3QoKVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVUcmF5cygpIHtcclxuICAgICAgICBpZiAodGhpcy5raGF5KSB0aGlzLmtoYXkuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBpZiAodGhpcy5raGF5MikgdGhpcy5raGF5Mi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMiwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGl2ZXJJdGVtKHNsb3Q/OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0U2xvdCA9IHNsb3QgIT0gbnVsbCAmJiBzbG90ID49IDAgPyBzbG90IDogKHRoaXMuZ2FtZVBsYXkgPyB0aGlzLmdhbWVQbGF5LnNlbGxUcmF5U2xvdCA6IC0xKVxyXG4gICAgICAgIGlmICh0YXJnZXRTbG90IDwgMCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5jb25zdW1lVHJheUl0ZW0odGFyZ2V0U2xvdClcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckRlbGl2ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICBpZiAodGhpcy5oYXNBbnlJdGVtKCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVUcmF5cygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFybXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2hheS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJMLWFybVwiLCB0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMua2hheS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDEsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudHJheUl0ZW1zWzFdKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtoYXkyKSB0aGlzLmtoYXkyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIlItYXJtXCIsIHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMua2hheTIpIHRoaXMua2hheTIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyQ3VzdG9tZXJMZWZ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMubG9jYWxJZCA9IHRoaXMuaGFzQW55SXRlbSgpID8gMiA6IDBcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNhblBpY2tNb3JlQ2hpY2tlbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUGlja0l0ZW1UeXBlKFwiY2hpY2tlblwiKSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxJZCA+PSAwICYmIHRoaXMubG9jYWxJZCA8PSA1XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIERpIGNodXnhu4NuIC0tLVxyXG5cclxuICAgIG1vdmVUb0NoaWNrZW4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2NhbElkKVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrTW9yZUNoaWNrZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLnNwYXdDaGlja2VuKCkpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zcGF3Q2hpY2tlbigpKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5sb2NhbElkID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc3Bhd0NoaWNrZW4oKSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAxXHJcbiAgICAgICAgICAgIHRoaXMudGFibGUuekluZGV4ID0gMlxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMS42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5zcGF3Q2hpY2tlbigpKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDFcclxuICAgICAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc3Bhd0NoaWNrZW4oKSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd0NoaWNrZW4oKSB7XHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLnByZXBhcmVQaWNrdXBTbG90KFwiY2hpY2tlblwiKVxyXG4gICAgICAgIGlmIChzbG90IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuYnRuQ2hpY2tlbi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImx2MS10YXBcIiwgZmFsc2UpXHJcbiAgICAgICAgbGV0IGNoaWNrZW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNoaWNrZW4pXHJcbiAgICAgICAgdGhpcy5wdXRUcmF5SXRlbShjaGlja2VuLCBcImNoaWNrZW5cIiwgc2xvdClcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDAgfHwgdGhpcy5sb2NhbElkID09IDMgfHwgdGhpcy5sb2NhbElkID09IDQgfHwgdGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGlkbGUoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb01hY2hpbmUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDJcclxuICAgICAgICBsZXQgbWFjaGluZSA9IHRoaXMuZ2FtZVBsYXkuYnRuTWFjaGluZS5nZXRDb21wb25lbnQoXCJtYWNoaW5lXCIpXHJcbiAgICAgICAgbGV0IHJhd1Nsb3QgPSB0aGlzLmdldFJhd1RyYXlTbG90KClcclxuICAgICAgICBpZiAoKHRoaXMubG9jYWxJZCA9PSAxIHx8IHRoaXMubG9jYWxJZCA9PSAyKSAmJiByYXdTbG90ID49IDAgJiYgbWFjaGluZS5jaGlja2VuID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAxXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX01BQ0hJTkUpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNsb3QgPSB0aGlzLmdldFJhd1RyYXlTbG90KClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpY2tlbiA9IHRoaXMudHJheUl0ZW1zW3Nsb3RdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmF5SXRlbXNbc2xvdF0gPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmF5SXRlbVR5cGVzW3Nsb3RdID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgICAgICAgICAgICAgbWFjaGluZS5jb29raW5nKGNoaWNrZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlja2VuID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMiAmJiBtYWNoaW5lLmNoaWNrZW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuUGlja0l0ZW1UeXBlKFwiY2hpY2tlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgICAgICBsZXQgY2hpY2tlbiA9IG1hY2hpbmUuZ2V0Q2hpY2tlbigpXHJcbiAgICAgICAgICAgIGNoaWNrZW4uZ2V0Q29tcG9uZW50KFwiY2hpY2tlblwiKS5jaGluMigpXHJcbiAgICAgICAgICAgIGxldCBzbG90ID0gdGhpcy5wcmVwYXJlUGlja3VwU2xvdChcImNoaWNrZW5cIilcclxuICAgICAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHV0VHJheUl0ZW0oY2hpY2tlbiwgXCJjaGlja2VuXCIsIHNsb3QpXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDMgJiYgbWFjaGluZS5jaGlja2VuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygwLjQsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX01BQ0hJTkUpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfTUFDSElORSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlja2VuID0gbWFjaGluZS5nZXRDaGlja2VuKClcclxuICAgICAgICAgICAgICAgICAgICBjaGlja2VuLmdldENvbXBvbmVudChcImNoaWNrZW5cIikuY2hpbjIoKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzbG90ID0gdGhpcy5wcmVwYXJlUGlja3VwU2xvdChcImNoaWNrZW5cIilcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNoaWNrZW4sIFwiY2hpY2tlblwiLCBzbG90KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC50bygwLjYsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAxXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX01BQ0hJTkUpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuXHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGUuekluZGV4ID0gMVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19NQUNISU5FKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9TYXVjZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkICE9IDIgfHwgIXRoaXMuaGFzQW55SXRlbSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNsb3QgPSB0aGlzLmZpbmRDb29rZWRUcmF5U2xvdCgpXHJcbiAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvb2tlZEl0ZW0gPSB0aGlzLnRyYXlJdGVtc1tzbG90XVxyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAyXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0FVQ0UpIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2hpY2tlbkNvbXAoY29va2VkSXRlbSkuYWRkU2F1Y2UoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9CdXkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FueUl0ZW0oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAxXHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDJcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDIgfHwgdGhpcy5sb2NhbElkID09IDMpIHtcclxuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gdGhpcy5sb2NhbElkID09IDMgPyAwLjQgOiAxLjRcclxuICAgICAgICAgICAgbGV0IHR3ZWVuID0gdGhpcy5sb2NhbElkID09IDNcclxuICAgICAgICAgICAgICAgID8gY2MudHdlZW4odGhpcy5ub2RlKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGUuekluZGV4ID0gMlxyXG4gICAgICAgICAgICAgICAgfSkudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG5cclxuICAgICAgICAgICAgICAgIDogY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG4gICAgICAgICAgICB0d2VlblxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnZhbGlkYXRlU2VsbEF0Q291bnRlcigpXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDNcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGUuekluZGV4ID0gMlxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmVUb0NvY2FCdXlcIilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG5cclxuICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICB0aGlzLnRhYmxlLnpJbmRleCA9IDFcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDJcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlLnpJbmRleCA9IDJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnZhbGlkYXRlU2VsbEF0Q291bnRlcigpXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgbW92ZVRvQ29jYSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDEgfHwgdGhpcy5sb2NhbElkID09IDMgfHwgdGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDJcclxuICAgICAgICAgICAgfSwgMC40KVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvY2EgPSB0aGlzLmdhbWVQbGF5LmJ0bkNvY2EuZ2V0Q29tcG9uZW50KFwiY29jYVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2NhKSBjb2NhLmNvb2tpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmxvY2FsSWQgPT0gNCAmJiB0aGlzLmdhbWVQbGF5LmJ0bkNvY2EuZ2V0Q29tcG9uZW50KFwiY29jYVwiKS5pc0NvY2EpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5idG5Db2NhLmdldENvbXBvbmVudChcImNvY2FcIikuZ2V0Q29jYSgpXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJjb2NhXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzbG90ID0gdGhpcy5wcmVwYXJlUGlja3VwU2xvdChcImNvY2FcIilcclxuICAgICAgICAgICAgaWYgKHNsb3QgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjb2NhID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2NhKVxyXG4gICAgICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNvY2EsIFwiY29jYVwiLCBzbG90KVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSA0XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlLnpJbmRleCA9IDJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvY2EgPSB0aGlzLmdhbWVQbGF5LmJ0bkNvY2EuZ2V0Q29tcG9uZW50KFwiY29jYVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2NhKSBjb2NhLmNvb2tpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVUb0Nha2UoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMCB8fCB0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGUuekluZGV4ID0gMVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlLnpJbmRleCA9IDJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGUuekluZGV4ID0gMVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5nZXRDYWtlKCkpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzIHx8IHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAxXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLmdldENha2UoKSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgIHRoaXMudGFibGUuekluZGV4ID0gMVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuZ2V0Q2FrZSgpKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgZ2V0Q2FrZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUGlja0l0ZW1UeXBlKFwiY2FrZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzbG90ID0gdGhpcy5wcmVwYXJlUGlja3VwU2xvdChcImNha2VcIilcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FrZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ2FrZSlcclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNha2UsIFwiY2FrZVwiLCBzbG90KVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDVcclxuICAgICAgICB0aGlzLmlkbGUoKVxyXG4gICAgfVxyXG4gICAgZ2V0VG9tYXRvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5QaWNrSXRlbVR5cGUoXCJ0b21hdG9cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMucHJlcGFyZVBpY2t1cFNsb3QoXCJ0b21hdG9cIilcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG9tYXRvID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVUb21hdG8pXHJcbiAgICAgICAgdGhpcy5wdXRUcmF5SXRlbSh0b21hdG8sIFwidG9tYXRvXCIsIHNsb3QpXHJcbiAgICAgICAgdGhpcy5sb2NhbElkID0gNVxyXG4gICAgICAgIHRoaXMuaWRsZSgpXHJcbiAgICB9XHJcbiAgICBtb3ZlVG9Ub21hdG8oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAwIHx8IHRoaXMubG9jYWxJZCA9PSAxIHx8IHRoaXMubG9jYWxJZCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0hJQ0tFTikgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjgsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzIHx8IHRoaXMubG9jYWxJZCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAxXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLmdldFRvbWF0bygpKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLmdldFRvbWF0bygpKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgLy8gLS0tIFJlc2V0IC0tLVxyXG5cclxuICAgIGNsZWFyVHJheSgpIHtcclxuICAgICAgICB0aGlzLmNvbnN1bWVUcmF5SXRlbSgwKVxyXG4gICAgICAgIHRoaXMuY29uc3VtZVRyYXlJdGVtKDEpXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRUb1N0YXJ0KCkge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5jbGVhclRyYXkoKVxyXG4gICAgICAgIC8vIHRoaXMubG9jYWxJZCA9IDBcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAwXHJcbiAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAwXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDEsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDIsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgIH1cclxufVxyXG4iXX0=