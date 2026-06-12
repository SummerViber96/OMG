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
        for (var i = 0; i < 2; i++) {
            if (this.canSellTrayToCustomer(cusComp, i))
                return i;
        }
        return -1;
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
        var targetSlot = slot != null ? slot : this.resolveTraySlot();
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
    NewClass.prototype.deliverItem = function () {
        var slot = this.gamePlay ? this.gamePlay.sellTraySlot : 0;
        this.consumeTrayItem(slot >= 0 ? slot : 0);
    };
    NewClass.prototype.afterDeliver = function () {
        this.anim.setAnimation(0, "Idle", true);
        if (this.isTrayEmpty()) {
            this.hideTrays();
        }
        else {
            this.updateArms();
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
        return this.localId == 0 || this.localId == 1 || this.localId == 2 || this.localId == 3;
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
        else if (this.localId == 3) {
            this.node.scaleX = 1;
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            cc.tween(this.node)
                .to(0.6, { position: this.getPos(this.POS_CHICKEN) })
                .call(function () { return _this.spawChicken(); })
                .start();
        }
        if (this.localId == 4) {
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
        // if(this.localId==)
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
        if (this.localId == 0)
            this.localId = 1;
        else if (this.localId == 3)
            this.localId = 1;
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
        this.table.zIndex = 2;
        this.node.zIndex = 1;
        if (this.localId == 2 || this.localId == 3) {
            var duration = this.localId == 3 ? 0.4 : 1.4;
            var tween = this.localId == 3
                ? cc.tween(this.node).to(0.4, { position: this.getPos(this.POS_SELL) })
                : cc.tween(this.node)
                    .to(1, { position: this.getPos(this.POS_CHICKEN) })
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
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_COCA) })
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