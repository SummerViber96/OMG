
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
        _this.arrString = [];
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
        var newPos = this.plateOriginPos.add(cc.v3(0, 50));
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
            globalThis.idString = id;
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
    StringGame.prototype.OffTOuch = function () {
        var touchNode = cc.Canvas.instance.node;
        touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    StringGame.prototype.offString = function () {
        for (var i = 0; i < this.strings.length; i++) {
            this.strings[i].active = false;
            this.strings[i].opacity = 0;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcU3RyaW5nR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQW9VQztRQWpVRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUV4QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFWixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsd0JBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBQy9CLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQzNDLGVBQVMsR0FBQyxFQUFFLENBQUE7UUF1UFIsb0JBQWMsR0FBRyxJQUFJLENBQUE7UUFzQ3JCLGFBQU8sR0FBRyxLQUFLLENBQUE7O0lBY25CLENBQUM7SUExU0csMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FB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QVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUNELDhCQUFTLEdBQVQ7UUFDSSxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFoVUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOytDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNFO0lBZkgsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW9VOUI7SUFBRCxpQkFBQztDQXBVRCxBQW9VQyxDQXBVdUMsRUFBRSxDQUFDLFNBQVMsR0FvVW5EO2tCQXBVb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1haW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBzdHJpbmdzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFN0cmluZ0JvdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9rOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0ZWRTdHJpbmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpc0RyYWdnaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGFjdGl2ZVRvdWNoSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5QYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5Qb3M6IGNjLlZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5TaWJsaW5nSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwbGF0ZU9yaWdpblBvczogY2MuVmVjMyA9IG51bGw7XHJcbmFyclN0cmluZz1bXVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZVJlZmVyZW5jZXMoKTtcclxuICAgICAgICB0aGlzLmluaXRTdHJpbmdzKCk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVTdHJpbmdDb2xsaWRlcnMoKTtcclxuICAgICAgICB0aGlzLmNhY2hlUGxhdGVPcmlnaW5Qb3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCB0b3VjaE5vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzb2x2ZVJlZmVyZW5jZXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4pIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gJ21haW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlICYmIHRoaXMubWFpbikge1xyXG4gICAgICAgICAgICBjb25zdCBraGF5ID0gdGhpcy5tYWluLmdldENoaWxkQnlOYW1lKCdraGF5Jyk7XHJcbiAgICAgICAgICAgIGlmIChraGF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRlID0ga2hheS5nZXRDaGlsZEJ5TmFtZSgncGxhdGUnKSB8fCBraGF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFN0cmluZ3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RyaW5ncy5sZW5ndGggPiAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHJpbmdzID0gdGhpcy5ub2RlLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5hY3RpdmUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLm1haW4gJiYgdGhpcy5tYWluLmdldENoaWxkQnlOYW1lKCdzdHJpbmcnKTtcclxuICAgICAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyaW5ncyA9IGNvbnRhaW5lci5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuYWN0aXZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmFibGVTdHJpbmdDb2xsaWRlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zdHJpbmdzLmZvckVhY2goc3RyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sbGlkZXIgPSBzdHIuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgaWYgKGNvbGxpZGVyKSBjb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlVG91Y2hJZCA9IGV2ZW50LmdldElEKCk7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGl0U3RyaW5nID0gdGhpcy5nZXRTdHJpbmdBdFNjcmVlblBvcyh0aGlzLnRvdWNoU3RhcnRQb3MpO1xyXG4gICAgICAgIGlmIChoaXRTdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RTdHJpbmcoaGl0U3RyaW5nLCB0aGlzLmdldE1haW5Mb2NhbFBvcyh0aGlzLnRvdWNoU3RhcnRQb3MpLCBldmVudC5nZXRJRCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZ2V0SUQoKSAhPT0gdGhpcy5hY3RpdmVUb3VjaElkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RyaW5nLnNldFBvc2l0aW9uKHRoaXMuZ2V0TWFpbkxvY2FsUG9zKHRvdWNoUG9zKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhpdFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nQXRTY3JlZW5Qb3ModG91Y2hQb3MpO1xyXG4gICAgICAgIGlmIChoaXRTdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RTdHJpbmcoaGl0U3RyaW5nLCB0aGlzLmdldE1haW5Mb2NhbFBvcyh0b3VjaFBvcyksIGV2ZW50LmdldElEKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmdldElEKCkgIT09IHRoaXMuYWN0aXZlVG91Y2hJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0VG91Y2hTdGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsb2NhbFBvcyA9IHRoaXMuZ2V0TWFpbkxvY2FsUG9zKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdHJpbmcuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc09uUGxhdGUodGhpcy5zZWxlY3RlZFN0cmluZykpIHtcclxuICAgICAgICAgICAgdGhpcy5vblN0cmluZ1NlbGVjdGVkKHRoaXMuc2VsZWN0ZWRTdHJpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0U3RyaW5nKHRoaXMuc2VsZWN0ZWRTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWxlYXNlRHJhZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWFpbkxvY2FsUG9zKHNjcmVlblBvczogY2MuVmVjMik6IGNjLlZlYzMge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMubWFpbiB8fCB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoc2NyZWVuUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFN0cmluZ0F0U2NyZWVuUG9zKHNjcmVlblBvczogY2MuVmVjMik6IGNjLk5vZGUge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5zdHJpbmdzW2ldO1xyXG4gICAgICAgICAgICBpZiAoIXN0ciB8fCAhc3RyLmFjdGl2ZSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVG91Y2hJbkNvbGxpZGVyKHNjcmVlblBvcywgc3RyKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVG91Y2hJbkNvbGxpZGVyKHNjcmVlblBvczogY2MuVmVjMiwgbm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGlmICghY29sbGlkZXIgfHwgIWNvbGxpZGVyLmVuYWJsZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9jYWxQb3MgPSBub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHNjcmVlblBvcyk7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGNjLnJlY3QoXHJcbiAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldC54IC0gY29sbGlkZXIuc2l6ZS53aWR0aCAqIDAuNSxcclxuICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0LnkgLSBjb2xsaWRlci5zaXplLmhlaWdodCAqIDAuNSxcclxuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZS5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiByZWN0LmNvbnRhaW5zKGxvY2FsUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvbGxpZGVyV29ybGRSZWN0KG5vZGU6IGNjLk5vZGUsIGNvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlcik6IGNjLlJlY3Qge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkQ2VudGVyID0gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY29sbGlkZXIub2Zmc2V0KTtcclxuICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuZ2V0V29ybGRTY2FsZShub2RlKTtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IGNvbGxpZGVyLnNpemUud2lkdGggKiBzY2FsZS54O1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGNvbGxpZGVyLnNpemUuaGVpZ2h0ICogc2NhbGUueTtcclxuICAgICAgICByZXR1cm4gY2MucmVjdChcclxuICAgICAgICAgICAgd29ybGRDZW50ZXIueCAtIHdpZHRoICogMC41LFxyXG4gICAgICAgICAgICB3b3JsZENlbnRlci55IC0gaGVpZ2h0ICogMC41LFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFdvcmxkU2NhbGUobm9kZTogY2MuTm9kZSk6IGNjLlZlYzIge1xyXG4gICAgICAgIGxldCBzY2FsZVggPSAxO1xyXG4gICAgICAgIGxldCBzY2FsZVkgPSAxO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gbm9kZTtcclxuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xyXG4gICAgICAgICAgICBzY2FsZVggKj0gY3VycmVudC5zY2FsZVg7XHJcbiAgICAgICAgICAgIHNjYWxlWSAqPSBjdXJyZW50LnNjYWxlWTtcclxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2MudjIoTWF0aC5hYnMoc2NhbGVYKSwgTWF0aC5hYnMoc2NhbGVZKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xsaWRlcnNPdmVybGFwKG5vZGVBOiBjYy5Ob2RlLCBub2RlQjogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyQSA9IG5vZGVBLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICAgICAgY29uc3QgY29sbGlkZXJCID0gbm9kZUIuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIWNvbGxpZGVyQSB8fCAhY29sbGlkZXJCKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY3RBID0gdGhpcy5nZXRDb2xsaWRlcldvcmxkUmVjdChub2RlQSwgY29sbGlkZXJBKTtcclxuICAgICAgICBjb25zdCByZWN0QiA9IHRoaXMuZ2V0Q29sbGlkZXJXb3JsZFJlY3Qobm9kZUIsIGNvbGxpZGVyQik7XHJcbiAgICAgICAgcmV0dXJuIHJlY3RBLmludGVyc2VjdHMocmVjdEIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FjaGVQbGF0ZU9yaWdpblBvcygpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXRlT3JpZ2luUG9zID0gdGhpcy5wbGF0ZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVQbGF0ZVVwKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSB8fCAhdGhpcy5wbGF0ZU9yaWdpblBvcykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBuZXdQb3MgPSB0aGlzLnBsYXRlT3JpZ2luUG9zLmFkZChjYy52MygwLCA1MCkpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5wbGF0ZSkudG8oMC4zLCB7IHBvc2l0aW9uOiBuZXdQb3MgfSkuc3RhcnQoKVxyXG4gICAgICAgIC8vIHRoaXMucGxhdGUuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxhdGVPcmlnaW5Qb3MueCxcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF0ZU9yaWdpblBvcy55ICsgMTAsXHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxhdGVPcmlnaW5Qb3MuelxyXG4gICAgICAgIC8vICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldFBsYXRlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRlIHx8ICF0aGlzLnBsYXRlT3JpZ2luUG9zKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wbGF0ZS5zZXRQb3NpdGlvbih0aGlzLnBsYXRlT3JpZ2luUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdFN0cmluZyhzdHJpbmdOb2RlOiBjYy5Ob2RlLCBsb2NhbFBvczogY2MuVmVjMywgdG91Y2hJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSB0b3VjaElkO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdHJpbmcgPSBzdHJpbmdOb2RlO1xyXG4gICAgICAgIHRoaXMubW92ZVBsYXRlVXAoKTtcclxuICAgICAgICB0aGlzLm9yaWdpblBhcmVudCA9IHN0cmluZ05vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMub3JpZ2luUG9zID0gc3RyaW5nTm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMub3JpZ2luU2libGluZ0luZGV4ID0gc3RyaW5nTm9kZS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBzdHJpbmdOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoc3RyaW5nTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5tYWluIHx8IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgc3RyaW5nTm9kZS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgc3RyaW5nTm9kZS5zZXRQb3NpdGlvbihwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpKTtcclxuICAgICAgICBzdHJpbmdOb2RlLnNldFNpYmxpbmdJbmRleChwYXJlbnQuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgICAgIHN0cmluZ05vZGUuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNPblBsYXRlKHN0cmluZ05vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBwbGF0ZU5vZGUgPSB0aGlzLmdldFBsYXRlQ29sbGlkZXJOb2RlKCk7XHJcbiAgICAgICAgaWYgKCFwbGF0ZU5vZGUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBjb25zdCBwbGF0ZUNvbGxpZGVyID0gcGxhdGVOb2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICAgICAgaWYgKHBsYXRlQ29sbGlkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sbGlkZXJzT3ZlcmxhcChzdHJpbmdOb2RlLCBwbGF0ZU5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IHN0cmluZ05vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihzdHJpbmdOb2RlLnBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm4gcGxhdGVOb2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHdvcmxkUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBsYXRlQ29sbGlkZXJOb2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKSkgcmV0dXJuIHRoaXMucGxhdGU7XHJcbiAgICAgICAgY29uc3Qga2hheSA9IHRoaXMucGxhdGUucGFyZW50O1xyXG4gICAgICAgIGlmIChraGF5ICYmIGtoYXkuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKSkgcmV0dXJuIGtoYXk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTdHJpbmcoc3RyaW5nTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHN0cmluZ05vZGUucGFyZW50ID0gdGhpcy5vcmlnaW5QYXJlbnQ7XHJcbiAgICAgICAgc3RyaW5nTm9kZS5zZXRQb3NpdGlvbih0aGlzLm9yaWdpblBvcyk7XHJcbiAgICAgICAgc3RyaW5nTm9kZS5zZXRTaWJsaW5nSW5kZXgodGhpcy5vcmlnaW5TaWJsaW5nSW5kZXgpO1xyXG4gICAgICAgIHN0cmluZ05vZGUuZ2V0Q29tcG9uZW50KFwiSXRlbVN0cmluZ1wiKS5vcmlnaW5TaWJsaW5nSW5kZXggPSB0aGlzLm9yaWdpblNpYmxpbmdJbmRleFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVsZWFzZURyYWcoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldFBsYXRlUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RyaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc2V0VG91Y2hTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRUb3VjaFN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVG91Y2hJZCA9IC0xO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpc09sZFN0cmluZ0JvdCA9IG51bGxcclxuICAgIG9uU3RyaW5nU2VsZWN0ZWQoc3RyaW5nTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdHJpbmdzLmluZGV4T2Yoc3RyaW5nTm9kZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RTdHJpbmdCb3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdFN0cmluZ0JvdC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMuc3RyaW5nc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0cmluZ3NbaW5kZXhdLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuc3RyaW5nc1tpbmRleF0uZ2V0Q29tcG9uZW50KFwiSXRlbVN0cmluZ1wiKS50YWc7XHJcbiAgICAgICAgICAgIGdsb2JhbFRoaXMuaWRTdHJpbmcgPSBpZDtcclxuICAgICAgICAgICAgdGhpcy5zdHJpbmdzW2luZGV4XS5wb3NpdGlvbiA9IHRoaXMuc3RyaW5nc1tpbmRleF0uZ2V0Q29tcG9uZW50KFwiSXRlbVN0cmluZ1wiKS5sb2NhbFBvcztcclxuICAgICAgICAgICAgdGhpcy5zdHJpbmdzW2luZGV4XS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnN0cmluZ3NbaW5kZXhdLnNldFNpYmxpbmdJbmRleCh0aGlzLnN0cmluZ3NbaW5kZXhdLmdldENvbXBvbmVudChcIkl0ZW1TdHJpbmdcIikub3JpZ2luU2libGluZ0luZGV4KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RyaW5ncy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saXN0U3RyaW5nQm90LmNoaWxkcmVuW2lkXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09sZFN0cmluZ0JvdCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4T2xkID0gdGhpcy5pc09sZFN0cmluZ0JvdC5nZXRDb21wb25lbnQoXCJJdGVtU3RyaW5nXCIpLnRhZztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4T2xkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ3NbaW5kZXhPbGRdLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc09sZFN0cmluZ0JvdCA9IHRoaXMubGlzdFN0cmluZ0JvdC5jaGlsZHJlbltpZF1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Pay5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bk9rLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuT2spLnRvKDAuMywgeyBzY2FsZTogMSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ3NlbGVjdC1zdHJpbmcnLCBzdHJpbmdOb2RlKTtcclxuICAgIH1cclxuICAgIGlzRmlyc3QgPSBmYWxzZVxyXG4gICAgT2ZmVE91Y2goKXtcclxuICAgICAgICBjb25zdCB0b3VjaE5vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTsgICBcclxuICAgIH1cclxuICAgIG9mZlN0cmluZygpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5zdHJpbmdzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLnN0cmluZ3NbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyaW5nc1tpXS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19