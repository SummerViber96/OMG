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
        _this.trayItem = null;
        _this.trayItemType = null;
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
    // --- Khay (1 tray) ---
    NewClass.prototype.getTrayItem = function () {
        return this.trayItem;
    };
    NewClass.prototype.getChickenComp = function (item) {
        return item ? item.getComponent("chicken") : null;
    };
    NewClass.prototype.getItemType = function () {
        if (this.trayItemType)
            return this.trayItemType;
        if (!this.trayItem)
            return null;
        if (this.getChickenComp(this.trayItem))
            return "chicken";
        return null;
    };
    NewClass.prototype.isCocaItem = function (item) {
        return item != null && item === this.trayItem && this.getItemType() === "coca";
    };
    NewClass.prototype.canSellToCustomer = function (cusComp) {
        var type = this.getItemType();
        if (!type)
            return false;
        if (cusComp.chicken && cusComp.count[0] > 0 && type === "chicken") {
            var comp = this.getChickenComp(this.trayItem);
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
    NewClass.prototype.findTrayForCustomer = function (cusComp) {
        return this.canSellToCustomer(cusComp) ? 0 : -1;
    };
    NewClass.prototype.hasAnyItem = function () {
        return this.trayItem != null;
    };
    NewClass.prototype.isTrayEmpty = function () {
        return this.trayItem == null;
    };
    NewClass.prototype.getRawTraySlot = function () {
        var comp = this.getChickenComp(this.trayItem);
        if (comp && !comp.isChin)
            return 0;
        return -1;
    };
    NewClass.prototype.findCookedTraySlot = function () {
        var comp = this.getChickenComp(this.trayItem);
        if (comp && comp.isChin && !comp.isSauce)
            return 0;
        return -1;
    };
    NewClass.prototype.putTrayItem = function (item, type) {
        if (!this.khay || this.trayItem)
            return;
        item.parent = this.khay;
        var anim = item.getComponent(cc.Animation);
        if (anim)
            anim.play();
        this.trayItem = item;
        this.trayItemType = type || (this.getChickenComp(item) ? "chicken" : null);
        this.khay.active = true;
        this.targetChicken = item;
        this.chicken = true;
        this.updateArms();
    };
    NewClass.prototype.consumeTrayItem = function () {
        if (this.trayItem) {
            this.trayItem.destroy();
            this.trayItem = null;
        }
        this.trayItemType = null;
        this.chicken = false;
        this.targetChicken = null;
        this.hideTrays();
    };
    NewClass.prototype.discardTrayIfDifferentType = function (targetType) {
        var current = this.getItemType();
        if (!current || current === targetType)
            return;
        this.consumeTrayItem();
        this.normalizeLocalIdAfterSwitch(targetType);
        this.updateArms();
    };
    NewClass.prototype.normalizeLocalIdAfterSwitch = function (targetType) {
        if (targetType === "chicken") {
            if (this.localId === 4 || this.localId === 5)
                this.localId = 3;
            return;
        }
        if (this.localId === 1 || this.localId === 2 || this.localId === 4 || this.localId === 5) {
            this.localId = 3;
        }
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
        this.consumeTrayItem();
    };
    NewClass.prototype.afterDeliver = function () {
        this.anim.setAnimation(0, "Idle", true);
        this.hideTrays();
        this.gamePlay.isMoving = false;
    };
    NewClass.prototype.updateArms = function () {
        if (this.trayItem) {
            this.khay.active = true;
            this.anim.setAnimation(1, "L-arm", true);
        }
        else {
            this.khay.active = false;
            this.anim.setAnimation(1, "Idle", false);
        }
        if (this.khay2)
            this.khay2.active = false;
        this.anim.setAnimation(2, "Idle", false);
    };
    NewClass.prototype.afterCustomerLeft = function () {
        // this.localId = this.hasAnyItem() ? 2 : 0
        this.updateArms();
    };
    NewClass.prototype.canPickMoreChicken = function () {
        if (!this.isTrayEmpty())
            return false;
        return this.localId == 0 || this.localId == 1 || this.localId == 2 || this.localId == 3;
    };
    // --- Di chuyển ---
    NewClass.prototype.moveToChicken = function () {
        var _this = this;
        this.discardTrayIfDifferentType("chicken");
        if (!this.canPickMoreChicken()) {
            this.gamePlay.isMoving = false;
            return;
        }
        this.node.scaleX = 1;
        this.anim.setAnimation(0, "Walk", true);
        this.updateArms();
        cc.tween(this.node)
            .to(1, { position: this.getPos(this.POS_CHICKEN) })
            .call(function () { return _this.spawChicken(); })
            .start();
    };
    NewClass.prototype.spawChicken = function () {
        if (!this.isTrayEmpty()) {
            this.gamePlay.isMoving = false;
            return;
        }
        this.gamePlay.btnChicken.children[0].getComponent(sp.Skeleton).setAnimation(0, "lv1-tap", false);
        var chicken = cc.instantiate(this.preChicken);
        this.putTrayItem(chicken);
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
        this.discardTrayIfDifferentType("chicken");
        this.node.zIndex = 2;
        var machine = this.gamePlay.btnMachine.getComponent("machine");
        var rawSlot = this.getRawTraySlot();
        if ((this.localId == 1 || this.localId == 2 || this.localId == 3) && rawSlot >= 0 && machine.chicken == null) {
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            cc.tween(this.node)
                .call(function () {
                _this.node.zIndex = 2;
                _this.table.zIndex = 1;
            })
                .to(1, { position: this.getPos(this.POS_MACHINE) })
                .call(function () {
                var chicken = _this.trayItem;
                _this.trayItem = null;
                _this.trayItemType = null;
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
            if (!this.isTrayEmpty()) {
                this.gamePlay.isMoving = false;
                return;
            }
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            var chicken = machine.getChicken();
            chicken.getComponent("chicken").chin2();
            this.putTrayItem(chicken);
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
                _this.putTrayItem(chicken);
                _this.localId = 2;
                _this.anim.setAnimation(0, "Idle", true);
                _this.gamePlay.isMoving = false;
            })
                .start();
        }
        this.gamePlay.isMoving = false;
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
        this.node.zIndex = 2;
        this.anim.setAnimation(0, "Walk", true);
        this.updateArms();
        this.node.scaleX = -1;
        cc.tween(this.node)
            .to(0.5, { position: this.getPos(this.POS_SAUCE) })
            .call(function () {
            _this.getChickenComp(_this.trayItem).addSauce();
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
        this.discardTrayIfDifferentType("coca");
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
            if (!this.isTrayEmpty()) {
                this.gamePlay.isMoving = false;
                return;
            }
            var coca = cc.instantiate(this.preCoca);
            this.putTrayItem(coca, "coca");
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
        this.discardTrayIfDifferentType("cake");
        if (this.localId == 0 || this.localId == 1 || this.localId == 2) {
            this.gamePlay.isMoving = true;
            this.anim.setAnimation(0, "Walk", true);
            this.node.scaleX = -1;
            cc.tween(this.node)
                .to(1, { position: this.getPos(this.POS_CHICKEN) })
                .to(0.8, { position: this.getPos(this.POS_COCA) })
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
        if (!this.isTrayEmpty()) {
            this.gamePlay.isMoving = false;
            return;
        }
        var cake = cc.instantiate(this.preCake);
        this.putTrayItem(cake, "cake");
        this.localId = 5;
        this.idle();
    };
    NewClass.prototype.getTomato = function () {
        if (!this.isTrayEmpty()) {
            this.gamePlay.isMoving = false;
            return;
        }
        var tomato = cc.instantiate(this.preTomato);
        this.putTrayItem(tomato, "tomato");
        this.localId = 5;
        this.idle();
    };
    NewClass.prototype.moveToTomato = function () {
        var _this = this;
        this.discardTrayIfDifferentType("tomato");
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
        this.consumeTrayItem();
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