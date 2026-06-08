
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
        if (this.localId === 4 || this.localId === 5)
            this.localId = 3;
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
        if (this.localId == 3 || this.localId == 5) {
            this.node.zIndex = 2;
            this.anim.setAnimation(0, "Walk", true);
            this.updateArms();
            cc.tween(this.node)
                .to(0.8, { position: this.getPos(this.POS_COCA) })
                .call(function () {
                _this.idle();
                var coca = _this.gamePlay.btnCoca.getComponent("coca");
                if (coca)
                    coca.cooking();
                _this.gamePlay.isMoving = false;
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
                _this.gamePlay.isMoving = false;
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
        if (this.localId == 0 || this.localId == 2) {
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
        if (this.localId == 0 || this.localId == 2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUmVjaXBlUnVzaFxcc2NyaXB0c1xcbWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtaUJDO1FBaGlCRyxnQkFBVSxHQUFjLElBQUksQ0FBQTtRQUU1QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixvR0FBb0c7UUFDcEcsY0FBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUIsdUZBQXVGO1FBQ3ZGLFlBQU0sR0FBRztZQUNMLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDbkIsQ0FBQTtRQUNELGlCQUFXLEdBQUcsQ0FBQyxDQUFB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QVMsR0FtaUJqRDtrQkFuaUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNoaWNrZW46IGNjLlByZWZhYiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVDb2NhOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZUNha2U6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlVG9tYXRvOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBraGF5OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBraGF5MjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGFibGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIGFyclBvcyA9IFtjYy52MygtMTkwLCAtMzkpLCBjYy52MygtMjA3LCAtMzIzKSwgY2MudjMoLTIwNywgLTQ2OCksIGNjLnYzKDExLCAtNDUpLGNjLnYzKDIzNywtMTIyKV1cclxuICAgIHBvc1N0YXJ0ID0gY2MudjMoMjA3LCAtNTgpXHJcbiAgICAvLyBhcnJQb3NbMF09duG7iyB0csOtIDEgbcOheSBjaGnDqm4gfCBbMV09MiBz4buRdCB8IFsyXT0zIGtoYXkgfCBbM109NCBxdeG6p3kgYsOhbiB8IFs0XT10aOG7m3QgZ8OgXHJcbiAgICBhcnJQb3MgPSBbXHJcbiAgICAgICAgY2MudjMoLTE5MCwgLTMwKSwgIC8vIDEgLSBtw6F5IGNoacOqblxyXG4gICAgICAgIGNjLnYzKC0yMDcsIC0zMjMpLCAgLy8gMiAtIHPhu5F0XHJcbiAgICAgICAgY2MudjMoLTIwNywgLTQ2OCksICAgLy8gMyAtIGtoYXlcclxuICAgICAgICBjYy52MygxMSwgLTQ1KSwgICAgIC8vIDQgLSBxdeG6p3kgYsOhblxyXG4gICAgICAgIGNjLnYzKDIzNywgLTEyMiksICAgLy8gdGjhu5t0IGfDoFxyXG4gICAgICAgIGNjLnYzKDIzNywgLTQ2OCksICAgICAvLyA1IC0ga2hvYWl0YXksIGNha2VcclxuICAgIF1cclxuICAgIFBPU19NQUNISU5FID0gMVxyXG4gICAgUE9TX1NBVUNFID0gMlxyXG4gICAgUE9TX0NPQ0EgPSA0XHJcbiAgICBQT1NfU0VMTCA9IDNcclxuICAgIFBPU19DSElDS0VOID0gMFxyXG4gICAgUE9TX0NBS0UgPSA1XHJcbiAgICBsb2NhbElkID0gMFxyXG4gICAgZ2FtZVBsYXkgPSBudWxsXHJcbiAgICB0YXJnZXRDaGlja2VuID0gbnVsbFxyXG4gICAgY2hpY2tlbiA9IGZhbHNlXHJcbiAgICB0cmF5SXRlbSA9IG51bGxcclxuICAgIHRyYXlJdGVtVHlwZSA9IG51bGxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLnBvc1N0YXJ0LmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVEb251dFwiKTtcclxuICAgICAgICBpZiAodGhpcy5raGF5MikgdGhpcy5raGF5Mi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBvcyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyUG9zW2luZGV4XVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBLaGF5ICgxIHRyYXkpIC0tLVxyXG5cclxuICAgIGdldFRyYXlJdGVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYXlJdGVtXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpY2tlbkNvbXAoaXRlbTogY2MuTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5nZXRDb21wb25lbnQoXCJjaGlja2VuXCIpIDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1UeXBlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtVHlwZSkgcmV0dXJuIHRoaXMudHJheUl0ZW1UeXBlXHJcbiAgICAgICAgaWYgKCF0aGlzLnRyYXlJdGVtKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmICh0aGlzLmdldENoaWNrZW5Db21wKHRoaXMudHJheUl0ZW0pKSByZXR1cm4gXCJjaGlja2VuXCJcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGlzQ29jYUl0ZW0oaXRlbTogY2MuTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtICE9IG51bGwgJiYgaXRlbSA9PT0gdGhpcy50cmF5SXRlbSAmJiB0aGlzLmdldEl0ZW1UeXBlKCkgPT09IFwiY29jYVwiXHJcbiAgICB9XHJcblxyXG4gICAgY2FuU2VsbFRvQ3VzdG9tZXIoY3VzQ29tcCkge1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRJdGVtVHlwZSgpXHJcbiAgICAgICAgaWYgKCF0eXBlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBpZiAoY3VzQ29tcC5jaGlja2VuICYmIGN1c0NvbXAuY291bnRbMF0gPiAwICYmIHR5cGUgPT09IFwiY2hpY2tlblwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wID0gdGhpcy5nZXRDaGlja2VuQ29tcCh0aGlzLnRyYXlJdGVtKVxyXG4gICAgICAgICAgICByZXR1cm4gY29tcCAmJiBjb21wLmlzQ2hpbiAmJiBjdXNDb21wLnNhdWNlID09IGNvbXAuaXNTYXVjZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VzQ29tcC5jb2NhICYmIGN1c0NvbXAuY291bnRbMV0gPiAwICYmIHR5cGUgPT09IFwiY29jYVwiKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGlmIChjdXNDb21wLmNha2UgJiYgY3VzQ29tcC5jb3VudFsyXSA+IDAgJiYgdHlwZSA9PT0gXCJjYWtlXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgaWYgKGN1c0NvbXAucG90YXRvICYmIGN1c0NvbXAuY291bnRbM10gPiAwICYmIHR5cGUgPT09IFwidG9tYXRvXCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZmluZFRyYXlGb3JDdXN0b21lcihjdXNDb21wKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuU2VsbFRvQ3VzdG9tZXIoY3VzQ29tcCkgPyAwIDogLTFcclxuICAgIH1cclxuXHJcbiAgICBoYXNBbnlJdGVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYXlJdGVtICE9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpc1RyYXlFbXB0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmF5SXRlbSA9PSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmF3VHJheVNsb3QoKSB7XHJcbiAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmdldENoaWNrZW5Db21wKHRoaXMudHJheUl0ZW0pXHJcbiAgICAgICAgaWYgKGNvbXAgJiYgIWNvbXAuaXNDaGluKSByZXR1cm4gMFxyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRDb29rZWRUcmF5U2xvdCgpIHtcclxuICAgICAgICBsZXQgY29tcCA9IHRoaXMuZ2V0Q2hpY2tlbkNvbXAodGhpcy50cmF5SXRlbSlcclxuICAgICAgICBpZiAoY29tcCAmJiBjb21wLmlzQ2hpbiAmJiAhY29tcC5pc1NhdWNlKSByZXR1cm4gMFxyXG4gICAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG5cclxuICAgIHB1dFRyYXlJdGVtKGl0ZW06IGNjLk5vZGUsIHR5cGU/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMua2hheSB8fCB0aGlzLnRyYXlJdGVtKSByZXR1cm5cclxuICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMua2hheVxyXG4gICAgICAgIGxldCBhbmltID0gaXRlbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIGlmIChhbmltKSBhbmltLnBsYXkoKVxyXG4gICAgICAgIHRoaXMudHJheUl0ZW0gPSBpdGVtXHJcbiAgICAgICAgdGhpcy50cmF5SXRlbVR5cGUgPSB0eXBlIHx8ICh0aGlzLmdldENoaWNrZW5Db21wKGl0ZW0pID8gXCJjaGlja2VuXCIgOiBudWxsKVxyXG4gICAgICAgIHRoaXMua2hheS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50YXJnZXRDaGlja2VuID0gaXRlbVxyXG4gICAgICAgIHRoaXMuY2hpY2tlbiA9IHRydWVcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN1bWVUcmF5SXRlbSgpIHtcclxuICAgICAgICBpZiAodGhpcy50cmF5SXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYXlJdGVtLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB0aGlzLnRyYXlJdGVtID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyYXlJdGVtVHlwZSA9IG51bGxcclxuICAgICAgICB0aGlzLmNoaWNrZW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudGFyZ2V0Q2hpY2tlbiA9IG51bGxcclxuICAgICAgICB0aGlzLmhpZGVUcmF5cygpXHJcbiAgICB9XHJcblxyXG4gICAgZGlzY2FyZFRyYXlJZkRpZmZlcmVudFR5cGUodGFyZ2V0VHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmdldEl0ZW1UeXBlKClcclxuICAgICAgICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudCA9PT0gdGFyZ2V0VHlwZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5jb25zdW1lVHJheUl0ZW0oKVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT09IDQgfHwgdGhpcy5sb2NhbElkID09PSA1KSB0aGlzLmxvY2FsSWQgPSAzXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRyYXlzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtoYXkpIHRoaXMua2hheS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmtoYXkyKSB0aGlzLmtoYXkyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigxLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigyLCBcIklkbGVcIiwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsaXZlckl0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lVHJheUl0ZW0oKVxyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyRGVsaXZlcigpIHtcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuaGlkZVRyYXlzKClcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBcm1zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRyYXlJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2hheS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJMLWFybVwiLCB0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMua2hheS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDEsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMua2hheTIpIHRoaXMua2hheTIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDIsIFwiSWRsZVwiLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckN1c3RvbWVyTGVmdCgpIHtcclxuICAgICAgICAvLyB0aGlzLmxvY2FsSWQgPSB0aGlzLmhhc0FueUl0ZW0oKSA/IDIgOiAwXHJcbiAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgIH1cclxuXHJcbiAgICBjYW5QaWNrTW9yZUNoaWNrZW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVHJheUVtcHR5KCkpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsSWQgPT0gMCB8fCB0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMiB8fCB0aGlzLmxvY2FsSWQgPT0gM1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBEaSBjaHV54buDbiAtLS1cclxuXHJcbiAgICBtb3ZlVG9DaGlja2VuKCkge1xyXG4gICAgICAgIHRoaXMuZGlzY2FyZFRyYXlJZkRpZmZlcmVudFR5cGUoXCJjaGlja2VuXCIpXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblBpY2tNb3JlQ2hpY2tlbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuc3Bhd0NoaWNrZW4oKSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICBzcGF3Q2hpY2tlbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNUcmF5RW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuYnRuQ2hpY2tlbi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImx2MS10YXBcIiwgZmFsc2UpXHJcbiAgICAgICAgbGV0IGNoaWNrZW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUNoaWNrZW4pXHJcbiAgICAgICAgdGhpcy5wdXRUcmF5SXRlbShjaGlja2VuKVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMCkgdGhpcy5sb2NhbElkID0gMVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubG9jYWxJZCA9PSAzKSB0aGlzLmxvY2FsSWQgPSAxXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBpZGxlKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9NYWNoaW5lKCkge1xyXG4gICAgICAgIHRoaXMuZGlzY2FyZFRyYXlJZkRpZmZlcmVudFR5cGUoXCJjaGlja2VuXCIpXHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDJcclxuICAgICAgICBsZXQgbWFjaGluZSA9IHRoaXMuZ2FtZVBsYXkuYnRuTWFjaGluZS5nZXRDb21wb25lbnQoXCJtYWNoaW5lXCIpXHJcbiAgICAgICAgbGV0IHJhd1Nsb3QgPSB0aGlzLmdldFJhd1RyYXlTbG90KClcclxuXHJcbiAgICAgICAgaWYgKCh0aGlzLmxvY2FsSWQgPT0gMSB8fCB0aGlzLmxvY2FsSWQgPT0gMiB8fCB0aGlzLmxvY2FsSWQgPT0gMykgJiYgcmF3U2xvdCA+PSAwICYmIG1hY2hpbmUuY2hpY2tlbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19NQUNISU5FKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlja2VuID0gdGhpcy50cmF5SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJheUl0ZW0gPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmF5SXRlbVR5cGUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICAgICAgICAgICAgICBtYWNoaW5lLmNvb2tpbmcoY2hpY2tlbilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWNrZW4gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gMlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAyICYmIG1hY2hpbmUuY2hpY2tlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RyYXlFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgICAgIGxldCBjaGlja2VuID0gbWFjaGluZS5nZXRDaGlja2VuKClcclxuICAgICAgICAgICAgY2hpY2tlbi5nZXRDb21wb25lbnQoXCJjaGlja2VuXCIpLmNoaW4yKClcclxuICAgICAgICAgICAgdGhpcy5wdXRUcmF5SXRlbShjaGlja2VuKVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAyXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAzICYmIG1hY2hpbmUuY2hpY2tlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19NQUNISU5FKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX01BQ0hJTkUpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpY2tlbiA9IG1hY2hpbmUuZ2V0Q2hpY2tlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpY2tlbi5nZXRDb21wb25lbnQoXCJjaGlja2VuXCIpLmNoaW4yKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNoaWNrZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbElkID0gMlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb1NhdWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgIT0gMiB8fCAhdGhpcy5oYXNBbnlJdGVtKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2xvdCA9IHRoaXMuZmluZENvb2tlZFRyYXlTbG90KClcclxuICAgICAgICBpZiAoc2xvdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMlxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX1NBVUNFKSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENoaWNrZW5Db21wKHRoaXMudHJheUl0ZW0pLmFkZFNhdWNlKClcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvQnV5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNBbnlJdGVtKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgIHRoaXMudGFibGUuekluZGV4ID0gMlxyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAxXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSAyIHx8IHRoaXMubG9jYWxJZCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IHRoaXMubG9jYWxJZCA9PSAzID8gMC40IDogMS40XHJcbiAgICAgICAgICAgIGxldCB0d2VlbiA9IHRoaXMubG9jYWxJZCA9PSAzXHJcbiAgICAgICAgICAgICAgICA/IGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC40LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG4gICAgICAgICAgICAgICAgOiBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSlcclxuICAgICAgICAgICAgdHdlZW5cclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmVUb0NvY2FCdXlcIilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDFcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNiwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfU0VMTCkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQXJtcygpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS52YWxpZGF0ZVNlbGxBdENvdW50ZXIoKVxyXG5cclxuICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSAzXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19TRUxMKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBcm1zKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnZhbGlkYXRlU2VsbEF0Q291bnRlcigpXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgbW92ZVRvQ29jYSgpIHtcclxuICAgICAgICB0aGlzLmRpc2NhcmRUcmF5SWZEaWZmZXJlbnRUeXBlKFwiY29jYVwiKVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMyB8fCB0aGlzLmxvY2FsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMlxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFybXMoKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvY2EgPSB0aGlzLmdhbWVQbGF5LmJ0bkNvY2EuZ2V0Q29tcG9uZW50KFwiY29jYVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2NhKSBjb2NhLmNvb2tpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxJZCA9IDRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmxvY2FsSWQgPT0gNCAmJiB0aGlzLmdhbWVQbGF5LmJ0bkNvY2EuZ2V0Q29tcG9uZW50KFwiY29jYVwiKS5pc0NvY2EpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5idG5Db2NhLmdldENvbXBvbmVudChcImNvY2FcIikuZ2V0Q29jYSgpXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RyYXlFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjb2NhID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2NhKVxyXG4gICAgICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNvY2EsIFwiY29jYVwiKVxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSA0XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmxvY2FsSWQgPT0gMikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZS56SW5kZXggPSAyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2NhID0gdGhpcy5nYW1lUGxheS5idG5Db2NhLmdldENvbXBvbmVudChcImNvY2FcIilcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29jYSkgY29jYS5jb29raW5nKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsSWQgPSA0XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3ZlVG9DYWtlKCkge1xyXG4gICAgICAgIHRoaXMuZGlzY2FyZFRyYXlJZkRpZmZlcmVudFR5cGUoXCJjYWtlXCIpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gMCB8fCB0aGlzLmxvY2FsSWQgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NISUNLRU4pIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DT0NBKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLmdldENha2UoKSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDMgfHwgdGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygwLjQsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlLnpJbmRleCA9IDFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuZ2V0Q2FrZSgpKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsSWQgPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiV2Fsa1wiLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTFcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NBS0UpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLmdldENha2UoKSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmlzTW92aW5nID0gZmFsc2VcclxuICAgIH1cclxuICAgIGdldENha2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVHJheUVtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FrZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ2FrZSlcclxuICAgICAgICB0aGlzLnB1dFRyYXlJdGVtKGNha2UsIFwiY2FrZVwiKVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDVcclxuICAgICAgICB0aGlzLmlkbGUoKVxyXG4gICAgfVxyXG4gICAgZ2V0VG9tYXRvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1RyYXlFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvbWF0byA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlVG9tYXRvKVxyXG4gICAgICAgIHRoaXMucHV0VHJheUl0ZW0odG9tYXRvLCBcInRvbWF0b1wiKVxyXG4gICAgICAgIHRoaXMubG9jYWxJZCA9IDVcclxuICAgICAgICB0aGlzLmlkbGUoKVxyXG4gICAgfVxyXG4gICAgbW92ZVRvVG9tYXRvKCkge1xyXG4gICAgICAgIHRoaXMuZGlzY2FyZFRyYXlJZkRpZmZlcmVudFR5cGUoXCJ0b21hdG9cIilcclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDAgfHwgdGhpcy5sb2NhbElkID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DSElDS0VOKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ09DQSkgfSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0aGlzLmdldFBvcyh0aGlzLlBPU19DQUtFKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5nZXRUb21hdG8oKSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2NhbElkID09IDMgfHwgdGhpcy5sb2NhbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIldhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygwLjQsIHsgcG9zaXRpb246IHRoaXMuZ2V0UG9zKHRoaXMuUE9TX0NPQ0EpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlLnpJbmRleCA9IDFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxJZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuaXNNb3ZpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJXYWxrXCIsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogdGhpcy5nZXRQb3ModGhpcy5QT1NfQ0FLRSkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMuZ2V0VG9tYXRvKCkpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5pc01vdmluZyA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICAvLyAtLS0gUmVzZXQgLS0tXHJcblxyXG4gICAgY2xlYXJUcmF5KCkge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZVRyYXlJdGVtKClcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRvU3RhcnQoKSB7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmNsZWFyVHJheSgpXHJcbiAgICAgICAgLy8gdGhpcy5sb2NhbElkID0gMFxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxXHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDBcclxuICAgICAgICB0aGlzLnRhYmxlLnpJbmRleCA9IDBcclxuICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMSwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMiwgXCJJZGxlXCIsIGZhbHNlKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==