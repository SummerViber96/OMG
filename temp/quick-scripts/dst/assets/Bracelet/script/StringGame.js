
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bracelet/script/StringGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15925KWvUJNb6VDn1HeOUd7', 'StringGame');
// Bracelet/script/StringGame.ts

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
var StringGame = /** @class */ (function (_super) {
    __extends(StringGame, _super);
    function StringGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.main = null;
        _this.plate = null;
        _this.strings = [];
        _this.listStringBot = null;
        _this.btnOk = null;
        _this.hand = null;
        _this.selectedString = null;
        _this.isDragging = false;
        _this.activeTouchId = -1;
        _this.originParent = null;
        _this.originPos = null;
        _this.originSiblingIndex = 0;
        _this.touchStartPos = null;
        _this.plateOriginPos = null;
        _this.isOldStringBot = null;
        _this.isFirst = false;
        return _this;
    }
    StringGame.prototype.onLoad = function () {
        this.resolveReferences();
        this.initStrings();
        this.enableStringColliders();
        this.cachePlateOriginPos();
    };
    StringGame.prototype.start = function () {
        var touchNode = cc.Canvas.instance.node;
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    StringGame.prototype.resolveReferences = function () {
        if (!this.main) {
            var node = this.node.parent;
            while (node) {
                if (node.name === 'main') {
                    this.main = node;
                    break;
                }
                node = node.parent;
            }
        }
        if (!this.plate && this.main) {
            var khay = this.main.getChildByName('khay');
            if (khay) {
                this.plate = khay.getChildByName('plate') || khay;
            }
        }
    };
    StringGame.prototype.initStrings = function () {
        if (this.strings.length > 0)
            return;
        if (this.node.name === 'string') {
            this.strings = this.node.children.filter(function (child) { return child.active; });
            return;
        }
        var container = this.main && this.main.getChildByName('string');
        if (container) {
            this.strings = container.children.filter(function (child) { return child.active; });
        }
    };
    StringGame.prototype.enableStringColliders = function () {
        this.strings.forEach(function (str) {
            var collider = str.getComponent(cc.BoxCollider);
            if (collider)
                collider.enabled = true;
        });
    };
    StringGame.prototype.onTouchStart = function (event) {
        if (this.isDragging)
            return;
        this.activeTouchId = event.getID();
        this.touchStartPos = event.getLocation();
        var hitString = this.getStringAtScreenPos(this.touchStartPos);
        if (hitString) {
            this.selectString(hitString, this.getMainLocalPos(this.touchStartPos), event.getID());
        }
    };
    StringGame.prototype.onTouchMove = function (event) {
        if (event.getID() !== this.activeTouchId)
            return;
        var touchPos = event.getLocation();
        if (this.isDragging) {
            this.selectedString.setPosition(this.getMainLocalPos(touchPos));
            return;
        }
        var hitString = this.getStringAtScreenPos(touchPos);
        if (hitString) {
            this.selectString(hitString, this.getMainLocalPos(touchPos), event.getID());
        }
    };
    StringGame.prototype.onTouchEnd = function (event) {
        if (event.getID() !== this.activeTouchId)
            return;
        if (!this.isDragging) {
            this.resetTouchState();
            return;
        }
        var localPos = this.getMainLocalPos(event.getLocation());
        this.selectedString.setPosition(localPos);
        if (this.isOnPlate(this.selectedString)) {
            this.onStringSelected(this.selectedString);
            this.hand.active = false;
        }
        else {
            this.resetString(this.selectedString);
        }
        this.releaseDrag();
    };
    StringGame.prototype.getMainLocalPos = function (screenPos) {
        var parent = this.main || this.node.parent;
        return parent.convertToNodeSpaceAR(screenPos);
    };
    StringGame.prototype.getStringAtScreenPos = function (screenPos) {
        for (var i = this.strings.length - 1; i >= 0; i--) {
            var str = this.strings[i];
            if (!str || !str.active)
                continue;
            if (this.isTouchInCollider(screenPos, str)) {
                return str;
            }
        }
        return null;
    };
    StringGame.prototype.isTouchInCollider = function (screenPos, node) {
        var collider = node.getComponent(cc.BoxCollider);
        if (!collider || !collider.enabled)
            return false;
        var localPos = node.convertToNodeSpaceAR(screenPos);
        var rect = cc.rect(collider.offset.x - collider.size.width * 0.5, collider.offset.y - collider.size.height * 0.5, collider.size.width, collider.size.height);
        return rect.contains(localPos);
    };
    StringGame.prototype.getColliderWorldRect = function (node, collider) {
        var worldCenter = node.convertToWorldSpaceAR(collider.offset);
        var scale = this.getWorldScale(node);
        var width = collider.size.width * scale.x;
        var height = collider.size.height * scale.y;
        return cc.rect(worldCenter.x - width * 0.5, worldCenter.y - height * 0.5, width, height);
    };
    StringGame.prototype.getWorldScale = function (node) {
        var scaleX = 1;
        var scaleY = 1;
        var current = node;
        while (current) {
            scaleX *= current.scaleX;
            scaleY *= current.scaleY;
            current = current.parent;
        }
        return cc.v2(Math.abs(scaleX), Math.abs(scaleY));
    };
    StringGame.prototype.collidersOverlap = function (nodeA, nodeB) {
        var colliderA = nodeA.getComponent(cc.BoxCollider);
        var colliderB = nodeB.getComponent(cc.BoxCollider);
        if (!colliderA || !colliderB)
            return false;
        var rectA = this.getColliderWorldRect(nodeA, colliderA);
        var rectB = this.getColliderWorldRect(nodeB, colliderB);
        return rectA.intersects(rectB);
    };
    StringGame.prototype.cachePlateOriginPos = function () {
        if (this.plate) {
            this.plateOriginPos = this.plate.position.clone();
        }
    };
    StringGame.prototype.movePlateUp = function () {
        if (!this.plate || !this.plateOriginPos)
            return;
        var newPos = this.plate.position.add(cc.v3(0, 50));
        cc.tween(this.plate).to(0.3, { position: newPos }).start();
        // this.plate.setPosition(
        //     this.plateOriginPos.x,
        //     this.plateOriginPos.y + 10,
        //     this.plateOriginPos.z
        // );
    };
    StringGame.prototype.resetPlatePosition = function () {
        if (!this.plate || !this.plateOriginPos)
            return;
        this.plate.setPosition(this.plateOriginPos);
    };
    StringGame.prototype.selectString = function (stringNode, localPos, touchId) {
        this.isDragging = true;
        this.activeTouchId = touchId;
        this.selectedString = stringNode;
        this.movePlateUp();
        this.originParent = stringNode.parent;
        this.originPos = stringNode.position.clone();
        this.originSiblingIndex = stringNode.getSiblingIndex();
        var worldPos = stringNode.parent.convertToWorldSpaceAR(stringNode.position);
        var parent = this.main || this.node.parent;
        stringNode.parent = parent;
        stringNode.setPosition(parent.convertToNodeSpaceAR(worldPos));
        stringNode.setSiblingIndex(parent.childrenCount - 1);
        stringNode.setPosition(localPos);
    };
    StringGame.prototype.isOnPlate = function (stringNode) {
        var plateNode = this.getPlateColliderNode();
        if (!plateNode)
            return false;
        var plateCollider = plateNode.getComponent(cc.BoxCollider);
        if (plateCollider) {
            return this.collidersOverlap(stringNode, plateNode);
        }
        var worldPos = stringNode.parent.convertToWorldSpaceAR(stringNode.position);
        return plateNode.getBoundingBoxToWorld().contains(worldPos);
    };
    StringGame.prototype.getPlateColliderNode = function () {
        if (!this.plate)
            return null;
        if (this.plate.getComponent(cc.BoxCollider))
            return this.plate;
        var khay = this.plate.parent;
        if (khay && khay.getComponent(cc.BoxCollider))
            return khay;
        return this.plate;
    };
    StringGame.prototype.resetString = function (stringNode) {
        stringNode.parent = this.originParent;
        stringNode.setPosition(this.originPos);
        stringNode.setSiblingIndex(this.originSiblingIndex);
        stringNode.getComponent("ItemString").originSiblingIndex = this.originSiblingIndex;
    };
    StringGame.prototype.releaseDrag = function () {
        this.resetPlatePosition();
        this.selectedString = null;
        this.isDragging = false;
        this.resetTouchState();
    };
    StringGame.prototype.resetTouchState = function () {
        this.activeTouchId = -1;
        this.touchStartPos = null;
    };
    StringGame.prototype.onStringSelected = function (stringNode) {
        var index = this.strings.indexOf(stringNode);
        for (var i = 0; i < this.listStringBot.children.length; i++) {
            this.listStringBot.children[i].active = false;
        }
        if (index >= 0) {
            // console.log( this.strings[index]);
            // this.strings[index].active = false
            var id = this.strings[index].getComponent("ItemString").tag;
            this.strings[index].position = this.strings[index].getComponent("ItemString").localPos;
            this.strings[index].active = false;
            this.strings[index].setSiblingIndex(this.strings[index].getComponent("ItemString").originSiblingIndex);
            // this.strings.splice(index, 1);
            this.listStringBot.children[id].active = true;
            if (this.isOldStringBot) {
                var indexOld = this.isOldStringBot.getComponent("ItemString").tag;
                console.log(indexOld);
                this.strings[indexOld].active = true;
            }
            this.isOldStringBot = this.listStringBot.children[id];
            if (!this.isFirst) {
                this.isFirst = true;
                this.btnOk.scale = 0;
                this.btnOk.active = true;
                cc.tween(this.btnOk).to(0.3, { scale: 1 }).start();
            }
        }
        this.node.emit('select-string', stringNode);
    };
    __decorate([
        property(cc.Node)
    ], StringGame.prototype, "main", void 0);
    __decorate([
        property(cc.Node)
    ], StringGame.prototype, "plate", void 0);
    __decorate([
        property([cc.Node])
    ], StringGame.prototype, "strings", void 0);
    __decorate([
        property(cc.Node)
    ], StringGame.prototype, "listStringBot", void 0);
    __decorate([
        property(cc.Node)
    ], StringGame.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Node)
    ], StringGame.prototype, "hand", void 0);
    StringGame = __decorate([
        ccclass
    ], StringGame);
    return StringGame;
}(cc.Component));
exports.default = StringGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcU3RyaW5nR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXVUQztRQXBURyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUV4QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLFVBQUksR0FBUyxJQUFJLENBQUE7UUFFVCxvQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsd0JBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBQy9CLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBd1B2QyxvQkFBYyxHQUFHLElBQUksQ0FBQTtRQXNDckIsYUFBTyxHQUFHLEtBQUssQ0FBQTs7SUFDbkIsQ0FBQztJQTdSRywyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFB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IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1haW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBzdHJpbmdzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFN0cmluZ0JvdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9rOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOmNjLk5vZGU9bnVsbFxyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0ZWRTdHJpbmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpc0RyYWdnaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGFjdGl2ZVRvdWNoSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5QYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5Qb3M6IGNjLlZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5TaWJsaW5nSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwbGF0ZU9yaWdpblBvczogY2MuVmVjMyA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZVJlZmVyZW5jZXMoKTtcclxuICAgICAgICB0aGlzLmluaXRTdHJpbmdzKCk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVTdHJpbmdDb2xsaWRlcnMoKTtcclxuICAgICAgICB0aGlzLmNhY2hlUGxhdGVPcmlnaW5Qb3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCB0b3VjaE5vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzb2x2ZVJlZmVyZW5jZXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4pIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gJ21haW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlICYmIHRoaXMubWFpbikge1xyXG4gICAgICAgICAgICBjb25zdCBraGF5ID0gdGhpcy5tYWluLmdldENoaWxkQnlOYW1lKCdraGF5Jyk7XHJcbiAgICAgICAgICAgIGlmIChraGF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRlID0ga2hheS5nZXRDaGlsZEJ5TmFtZSgncGxhdGUnKSB8fCBraGF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFN0cmluZ3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RyaW5ncy5sZW5ndGggPiAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHJpbmdzID0gdGhpcy5ub2RlLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5hY3RpdmUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLm1haW4gJiYgdGhpcy5tYWluLmdldENoaWxkQnlOYW1lKCdzdHJpbmcnKTtcclxuICAgICAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyaW5ncyA9IGNvbnRhaW5lci5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuYWN0aXZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmFibGVTdHJpbmdDb2xsaWRlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zdHJpbmdzLmZvckVhY2goc3RyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sbGlkZXIgPSBzdHIuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgaWYgKGNvbGxpZGVyKSBjb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlVG91Y2hJZCA9IGV2ZW50LmdldElEKCk7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGl0U3RyaW5nID0gdGhpcy5nZXRTdHJpbmdBdFNjcmVlblBvcyh0aGlzLnRvdWNoU3RhcnRQb3MpO1xyXG4gICAgICAgIGlmIChoaXRTdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RTdHJpbmcoaGl0U3RyaW5nLCB0aGlzLmdldE1haW5Mb2NhbFBvcyh0aGlzLnRvdWNoU3RhcnRQb3MpLCBldmVudC5nZXRJRCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZ2V0SUQoKSAhPT0gdGhpcy5hY3RpdmVUb3VjaElkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RyaW5nLnNldFBvc2l0aW9uKHRoaXMuZ2V0TWFpbkxvY2FsUG9zKHRvdWNoUG9zKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhpdFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nQXRTY3JlZW5Qb3ModG91Y2hQb3MpO1xyXG4gICAgICAgIGlmIChoaXRTdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RTdHJpbmcoaGl0U3RyaW5nLCB0aGlzLmdldE1haW5Mb2NhbFBvcyh0b3VjaFBvcyksIGV2ZW50LmdldElEKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmdldElEKCkgIT09IHRoaXMuYWN0aXZlVG91Y2hJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0VG91Y2hTdGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsb2NhbFBvcyA9IHRoaXMuZ2V0TWFpbkxvY2FsUG9zKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdHJpbmcuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc09uUGxhdGUodGhpcy5zZWxlY3RlZFN0cmluZykpIHtcclxuICAgICAgICAgICAgdGhpcy5vblN0cmluZ1NlbGVjdGVkKHRoaXMuc2VsZWN0ZWRTdHJpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0U3RyaW5nKHRoaXMuc2VsZWN0ZWRTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWxlYXNlRHJhZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvczogY2MuVmVjMik6IGNjLlZlYzMge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMubWFpbiB8fCB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoc2NyZWVuUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFN0cmluZ0F0U2NyZWVuUG9zKHNjcmVlblBvczogY2MuVmVjMik6IGNjLk5vZGUge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5zdHJpbmdzW2ldO1xyXG4gICAgICAgICAgICBpZiAoIXN0ciB8fCAhc3RyLmFjdGl2ZSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVG91Y2hJbkNvbGxpZGVyKHNjcmVlblBvcywgc3RyKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVG91Y2hJbkNvbGxpZGVyKHNjcmVlblBvczogY2MuVmVjMiwgbm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGlmICghY29sbGlkZXIgfHwgIWNvbGxpZGVyLmVuYWJsZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9jYWxQb3MgPSBub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHNjcmVlblBvcyk7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGNjLnJlY3QoXHJcbiAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldC54IC0gY29sbGlkZXIuc2l6ZS53aWR0aCAqIDAuNSxcclxuICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0LnkgLSBjb2xsaWRlci5zaXplLmhlaWdodCAqIDAuNSxcclxuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZS5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiByZWN0LmNvbnRhaW5zKGxvY2FsUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvbGxpZGVyV29ybGRSZWN0KG5vZGU6IGNjLk5vZGUsIGNvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlcik6IGNjLlJlY3Qge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkQ2VudGVyID0gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY29sbGlkZXIub2Zmc2V0KTtcclxuICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuZ2V0V29ybGRTY2FsZShub2RlKTtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IGNvbGxpZGVyLnNpemUud2lkdGggKiBzY2FsZS54O1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGNvbGxpZGVyLnNpemUuaGVpZ2h0ICogc2NhbGUueTtcclxuICAgICAgICByZXR1cm4gY2MucmVjdChcclxuICAgICAgICAgICAgd29ybGRDZW50ZXIueCAtIHdpZHRoICogMC41LFxyXG4gICAgICAgICAgICB3b3JsZENlbnRlci55IC0gaGVpZ2h0ICogMC41LFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFdvcmxkU2NhbGUobm9kZTogY2MuTm9kZSk6IGNjLlZlYzIge1xyXG4gICAgICAgIGxldCBzY2FsZVggPSAxO1xyXG4gICAgICAgIGxldCBzY2FsZVkgPSAxO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gbm9kZTtcclxuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xyXG4gICAgICAgICAgICBzY2FsZVggKj0gY3VycmVudC5zY2FsZVg7XHJcbiAgICAgICAgICAgIHNjYWxlWSAqPSBjdXJyZW50LnNjYWxlWTtcclxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2MudjIoTWF0aC5hYnMoc2NhbGVYKSwgTWF0aC5hYnMoc2NhbGVZKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xsaWRlcnNPdmVybGFwKG5vZGVBOiBjYy5Ob2RlLCBub2RlQjogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyQSA9IG5vZGVBLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICAgICAgY29uc3QgY29sbGlkZXJCID0gbm9kZUIuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIWNvbGxpZGVyQSB8fCAhY29sbGlkZXJCKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY3RBID0gdGhpcy5nZXRDb2xsaWRlcldvcmxkUmVjdChub2RlQSwgY29sbGlkZXJBKTtcclxuICAgICAgICBjb25zdCByZWN0QiA9IHRoaXMuZ2V0Q29sbGlkZXJXb3JsZFJlY3Qobm9kZUIsIGNvbGxpZGVyQik7XHJcbiAgICAgICAgcmV0dXJuIHJlY3RBLmludGVyc2VjdHMocmVjdEIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FjaGVQbGF0ZU9yaWdpblBvcygpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXRlT3JpZ2luUG9zID0gdGhpcy5wbGF0ZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVQbGF0ZVVwKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSB8fCAhdGhpcy5wbGF0ZU9yaWdpblBvcykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBuZXdQb3MgPSB0aGlzLnBsYXRlLnBvc2l0aW9uLmFkZChjYy52MygwLCA1MCkpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5wbGF0ZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBuZXdQb3MgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vIHRoaXMucGxhdGUuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxhdGVPcmlnaW5Qb3MueCxcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF0ZU9yaWdpblBvcy55ICsgMTAsXHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxhdGVPcmlnaW5Qb3MuelxyXG4gICAgICAgIC8vICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldFBsYXRlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlIHx8ICF0aGlzLnBsYXRlT3JpZ2luUG9zKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wbGF0ZS5zZXRQb3NpdGlvbih0aGlzLnBsYXRlT3JpZ2luUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdFN0cmluZyhzdHJpbmdOb2RlOiBjYy5Ob2RlLCBsb2NhbFBvczogY2MuVmVjMywgdG91Y2hJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSB0b3VjaElkO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdHJpbmcgPSBzdHJpbmdOb2RlO1xyXG4gICAgICAgIHRoaXMubW92ZVBsYXRlVXAoKTtcclxuICAgICAgICB0aGlzLm9yaWdpblBhcmVudCA9IHN0cmluZ05vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMub3JpZ2luUG9zID0gc3RyaW5nTm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMub3JpZ2luU2libGluZ0luZGV4ID0gc3RyaW5nTm9kZS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBzdHJpbmdOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoc3RyaW5nTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5tYWluIHx8IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgc3RyaW5nTm9kZS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgc3RyaW5nTm9kZS5zZXRQb3NpdGlvbihwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpKTtcclxuICAgICAgICBzdHJpbmdOb2RlLnNldFNpYmxpbmdJbmRleChwYXJlbnQuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgICAgIHN0cmluZ05vZGUuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNPblBsYXRlKHN0cmluZ05vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBwbGF0ZU5vZGUgPSB0aGlzLmdldFBsYXRlQ29sbGlkZXJOb2RlKCk7XHJcbiAgICAgICAgaWYgKCFwbGF0ZU5vZGUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBjb25zdCBwbGF0ZUNvbGxpZGVyID0gcGxhdGVOb2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICAgICAgaWYgKHBsYXRlQ29sbGlkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sbGlkZXJzT3ZlcmxhcChzdHJpbmdOb2RlLCBwbGF0ZU5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IHN0cmluZ05vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihzdHJpbmdOb2RlLnBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm4gcGxhdGVOb2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHdvcmxkUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBsYXRlQ29sbGlkZXJOb2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKSkgcmV0dXJuIHRoaXMucGxhdGU7XHJcbiAgICAgICAgY29uc3Qga2hheSA9IHRoaXMucGxhdGUucGFyZW50O1xyXG4gICAgICAgIGlmIChraGF5ICYmIGtoYXkuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKSkgcmV0dXJuIGtoYXk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTdHJpbmcoc3RyaW5nTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHN0cmluZ05vZGUucGFyZW50ID0gdGhpcy5vcmlnaW5QYXJlbnQ7XHJcbiAgICAgICAgc3RyaW5nTm9kZS5zZXRQb3NpdGlvbih0aGlzLm9yaWdpblBvcyk7XHJcbiAgICAgICAgc3RyaW5nTm9kZS5zZXRTaWJsaW5nSW5kZXgodGhpcy5vcmlnaW5TaWJsaW5nSW5kZXgpO1xyXG4gICAgICAgIHN0cmluZ05vZGUuZ2V0Q29tcG9uZW50KFwiSXRlbVN0cmluZ1wiKS5vcmlnaW5TaWJsaW5nSW5kZXggPSB0aGlzLm9yaWdpblNpYmxpbmdJbmRleFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVsZWFzZURyYWcoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldFBsYXRlUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RyaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc2V0VG91Y2hTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRUb3VjaFN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVG91Y2hJZCA9IC0xO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpc09sZFN0cmluZ0JvdCA9IG51bGxcclxuICAgIG9uU3RyaW5nU2VsZWN0ZWQoc3RyaW5nTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdHJpbmdzLmluZGV4T2Yoc3RyaW5nTm9kZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RTdHJpbmdCb3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdFN0cmluZ0JvdC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMuc3RyaW5nc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0cmluZ3NbaW5kZXhdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuc3RyaW5nc1tpbmRleF0uZ2V0Q29tcG9uZW50KFwiSXRlbVN0cmluZ1wiKS50YWc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0cmluZ3NbaW5kZXhdLnBvc2l0aW9uID0gdGhpcy5zdHJpbmdzW2luZGV4XS5nZXRDb21wb25lbnQoXCJJdGVtU3RyaW5nXCIpLmxvY2FsUG9zO1xyXG4gICAgICAgICAgICB0aGlzLnN0cmluZ3NbaW5kZXhdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3RyaW5nc1tpbmRleF0uc2V0U2libGluZ0luZGV4KHRoaXMuc3RyaW5nc1tpbmRleF0uZ2V0Q29tcG9uZW50KFwiSXRlbVN0cmluZ1wiKS5vcmlnaW5TaWJsaW5nSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5zdHJpbmdzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3RTdHJpbmdCb3QuY2hpbGRyZW5baWRdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2xkU3RyaW5nQm90KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXhPbGQgPSB0aGlzLmlzT2xkU3RyaW5nQm90LmdldENvbXBvbmVudChcIkl0ZW1TdHJpbmdcIikudGFnO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXhPbGQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nc1tpbmRleE9sZF0uYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzT2xkU3RyaW5nQm90ID0gdGhpcy5saXN0U3RyaW5nQm90LmNoaWxkcmVuW2lkXVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bk9rLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuT2suYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5idG5PaykudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuZW1pdCgnc2VsZWN0LXN0cmluZycsIHN0cmluZ05vZGUpO1xyXG4gICAgfVxyXG4gICAgaXNGaXJzdCA9IGZhbHNlXHJcbn1cclxuIl19