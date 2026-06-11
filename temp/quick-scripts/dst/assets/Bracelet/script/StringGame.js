
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcU3RyaW5nR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQThUQztRQTNURyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUV4QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFWixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsd0JBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBQy9CLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBd1B2QyxvQkFBYyxHQUFHLElBQUksQ0FBQTtRQXNDckIsYUFBTyxHQUFHLEtBQUssQ0FBQTs7SUFRbkIsQ0FBQztJQXBTRywyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFB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QUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBMVREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzsrQ0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDRTtJQWZILFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E4VDlCO0lBQUQsaUJBQUM7Q0E5VEQsQUE4VEMsQ0E5VHVDLEVBQUUsQ0FBQyxTQUFTLEdBOFRuRDtrQkE5VG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgc3RyaW5nczogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RTdHJpbmdCb3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5PazogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkU3RyaW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgaXNEcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVUb3VjaElkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgb3JpZ2luUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgb3JpZ2luUG9zOiBjYy5WZWMzID0gbnVsbDtcclxuICAgIHByaXZhdGUgb3JpZ2luU2libGluZ0luZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHByaXZhdGUgcGxhdGVPcmlnaW5Qb3M6IGNjLlZlYzMgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlc29sdmVSZWZlcmVuY2VzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U3RyaW5ncygpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlU3RyaW5nQ29sbGlkZXJzKCk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVBsYXRlT3JpZ2luUG9zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hOb2RlID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc29sdmVSZWZlcmVuY2VzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT09ICdtYWluJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbiA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSAmJiB0aGlzLm1haW4pIHtcclxuICAgICAgICAgICAgY29uc3Qga2hheSA9IHRoaXMubWFpbi5nZXRDaGlsZEJ5TmFtZSgna2hheScpO1xyXG4gICAgICAgICAgICBpZiAoa2hheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0ZSA9IGtoYXkuZ2V0Q2hpbGRCeU5hbWUoJ3BsYXRlJykgfHwga2hheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRTdHJpbmdzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0cmluZ3MubGVuZ3RoID4gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyaW5ncyA9IHRoaXMubm9kZS5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuYWN0aXZlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5tYWluICYmIHRoaXMubWFpbi5nZXRDaGlsZEJ5TmFtZSgnc3RyaW5nJyk7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLnN0cmluZ3MgPSBjb250YWluZXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmFjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5hYmxlU3RyaW5nQ29sbGlkZXJzKCkge1xyXG4gICAgICAgIHRoaXMuc3RyaW5ncy5mb3JFYWNoKHN0ciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpZGVyID0gc3RyLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlcikgY29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSBldmVudC5nZXRJRCgpO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhpdFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nQXRTY3JlZW5Qb3ModGhpcy50b3VjaFN0YXJ0UG9zKTtcclxuICAgICAgICBpZiAoaGl0U3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0U3RyaW5nKGhpdFN0cmluZywgdGhpcy5nZXRNYWluTG9jYWxQb3ModGhpcy50b3VjaFN0YXJ0UG9zKSwgZXZlbnQuZ2V0SUQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmdldElEKCkgIT09IHRoaXMuYWN0aXZlVG91Y2hJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0cmluZy5zZXRQb3NpdGlvbih0aGlzLmdldE1haW5Mb2NhbFBvcyh0b3VjaFBvcykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoaXRTdHJpbmcgPSB0aGlzLmdldFN0cmluZ0F0U2NyZWVuUG9zKHRvdWNoUG9zKTtcclxuICAgICAgICBpZiAoaGl0U3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0U3RyaW5nKGhpdFN0cmluZywgdGhpcy5nZXRNYWluTG9jYWxQb3ModG91Y2hQb3MpLCBldmVudC5nZXRJRCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmIChldmVudC5nZXRJRCgpICE9PSB0aGlzLmFjdGl2ZVRvdWNoSWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFRvdWNoU3RhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLmdldE1haW5Mb2NhbFBvcyhldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RyaW5nLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPblBsYXRlKHRoaXMuc2VsZWN0ZWRTdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TdHJpbmdTZWxlY3RlZCh0aGlzLnNlbGVjdGVkU3RyaW5nKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFN0cmluZyh0aGlzLnNlbGVjdGVkU3RyaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVsZWFzZURyYWcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1haW5Mb2NhbFBvcyhzY3JlZW5Qb3M6IGNjLlZlYzIpOiBjYy5WZWMzIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLm1haW4gfHwgdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICByZXR1cm4gcGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHNjcmVlblBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTdHJpbmdBdFNjcmVlblBvcyhzY3JlZW5Qb3M6IGNjLlZlYzIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9IHRoaXMuc3RyaW5nc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFzdHIgfHwgIXN0ci5hY3RpdmUpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RvdWNoSW5Db2xsaWRlcihzY3JlZW5Qb3MsIHN0cikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1RvdWNoSW5Db2xsaWRlcihzY3JlZW5Qb3M6IGNjLlZlYzIsIG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuICAgICAgICBpZiAoIWNvbGxpZGVyIHx8ICFjb2xsaWRlci5lbmFibGVkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvY2FsUG9zID0gbm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzY3JlZW5Qb3MpO1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBjYy5yZWN0KFxyXG4gICAgICAgICAgICBjb2xsaWRlci5vZmZzZXQueCAtIGNvbGxpZGVyLnNpemUud2lkdGggKiAwLjUsXHJcbiAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldC55IC0gY29sbGlkZXIuc2l6ZS5oZWlnaHQgKiAwLjUsXHJcbiAgICAgICAgICAgIGNvbGxpZGVyLnNpemUud2lkdGgsXHJcbiAgICAgICAgICAgIGNvbGxpZGVyLnNpemUuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gcmVjdC5jb250YWlucyhsb2NhbFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb2xsaWRlcldvcmxkUmVjdChub2RlOiBjYy5Ob2RlLCBjb2xsaWRlcjogY2MuQm94Q29sbGlkZXIpOiBjYy5SZWN0IHtcclxuICAgICAgICBjb25zdCB3b3JsZENlbnRlciA9IG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNvbGxpZGVyLm9mZnNldCk7XHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFdvcmxkU2NhbGUobm9kZSk7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjb2xsaWRlci5zaXplLndpZHRoICogc2NhbGUueDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBjb2xsaWRlci5zaXplLmhlaWdodCAqIHNjYWxlLnk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnJlY3QoXHJcbiAgICAgICAgICAgIHdvcmxkQ2VudGVyLnggLSB3aWR0aCAqIDAuNSxcclxuICAgICAgICAgICAgd29ybGRDZW50ZXIueSAtIGhlaWdodCAqIDAuNSxcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRXb3JsZFNjYWxlKG5vZGU6IGNjLk5vZGUpOiBjYy5WZWMyIHtcclxuICAgICAgICBsZXQgc2NhbGVYID0gMTtcclxuICAgICAgICBsZXQgc2NhbGVZID0gMTtcclxuICAgICAgICBsZXQgY3VycmVudCA9IG5vZGU7XHJcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2NhbGVYICo9IGN1cnJlbnQuc2NhbGVYO1xyXG4gICAgICAgICAgICBzY2FsZVkgKj0gY3VycmVudC5zY2FsZVk7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKE1hdGguYWJzKHNjYWxlWCksIE1hdGguYWJzKHNjYWxlWSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29sbGlkZXJzT3ZlcmxhcChub2RlQTogY2MuTm9kZSwgbm9kZUI6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBjb2xsaWRlckEgPSBub2RlQS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyQiA9IG5vZGVCLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICAgICAgaWYgKCFjb2xsaWRlckEgfHwgIWNvbGxpZGVyQikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCByZWN0QSA9IHRoaXMuZ2V0Q29sbGlkZXJXb3JsZFJlY3Qobm9kZUEsIGNvbGxpZGVyQSk7XHJcbiAgICAgICAgY29uc3QgcmVjdEIgPSB0aGlzLmdldENvbGxpZGVyV29ybGRSZWN0KG5vZGVCLCBjb2xsaWRlckIpO1xyXG4gICAgICAgIHJldHVybiByZWN0QS5pbnRlcnNlY3RzKHJlY3RCKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhY2hlUGxhdGVPcmlnaW5Qb3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF0ZU9yaWdpblBvcyA9IHRoaXMucGxhdGUucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlUGxhdGVVcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGUgfHwgIXRoaXMucGxhdGVPcmlnaW5Qb3MpIHJldHVybjtcclxuICAgICAgICBsZXQgbmV3UG9zID0gdGhpcy5wbGF0ZU9yaWdpblBvcy5hZGQoY2MudjMoMCwgNTApKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucGxhdGUpLnRvKDAuMywgeyBwb3NpdGlvbjogbmV3UG9zIH0pLnN0YXJ0KClcclxuICAgICAgICAvLyB0aGlzLnBsYXRlLnNldFBvc2l0aW9uKFxyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXRlT3JpZ2luUG9zLngsXHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxhdGVPcmlnaW5Qb3MueSArIDEwLFxyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXRlT3JpZ2luUG9zLnpcclxuICAgICAgICAvLyApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRQbGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF0ZSB8fCAhdGhpcy5wbGF0ZU9yaWdpblBvcykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGxhdGUuc2V0UG9zaXRpb24odGhpcy5wbGF0ZU9yaWdpblBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3RTdHJpbmcoc3RyaW5nTm9kZTogY2MuTm9kZSwgbG9jYWxQb3M6IGNjLlZlYzMsIHRvdWNoSWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUb3VjaElkID0gdG91Y2hJZDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RyaW5nID0gc3RyaW5nTm9kZTtcclxuICAgICAgICB0aGlzLm1vdmVQbGF0ZVVwKCk7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5QYXJlbnQgPSBzdHJpbmdOb2RlLnBhcmVudDtcclxuICAgICAgICB0aGlzLm9yaWdpblBvcyA9IHN0cmluZ05vZGUucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICB0aGlzLm9yaWdpblNpYmxpbmdJbmRleCA9IHN0cmluZ05vZGUuZ2V0U2libGluZ0luZGV4KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zID0gc3RyaW5nTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHN0cmluZ05vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMubWFpbiB8fCB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHN0cmluZ05vZGUucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHN0cmluZ05vZGUuc2V0UG9zaXRpb24ocGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKSk7XHJcbiAgICAgICAgc3RyaW5nTm9kZS5zZXRTaWJsaW5nSW5kZXgocGFyZW50LmNoaWxkcmVuQ291bnQgLSAxKTtcclxuICAgICAgICBzdHJpbmdOb2RlLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzT25QbGF0ZShzdHJpbmdOb2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgcGxhdGVOb2RlID0gdGhpcy5nZXRQbGF0ZUNvbGxpZGVyTm9kZSgpO1xyXG4gICAgICAgIGlmICghcGxhdGVOb2RlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgcGxhdGVDb2xsaWRlciA9IHBsYXRlTm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGlmIChwbGF0ZUNvbGxpZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbGxpZGVyc092ZXJsYXAoc3RyaW5nTm9kZSwgcGxhdGVOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBzdHJpbmdOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoc3RyaW5nTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHBsYXRlTm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh3b3JsZFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQbGF0ZUNvbGxpZGVyTm9kZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhdGUpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXRlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikpIHJldHVybiB0aGlzLnBsYXRlO1xyXG4gICAgICAgIGNvbnN0IGtoYXkgPSB0aGlzLnBsYXRlLnBhcmVudDtcclxuICAgICAgICBpZiAoa2hheSAmJiBraGF5LmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikpIHJldHVybiBraGF5O1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U3RyaW5nKHN0cmluZ05vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBzdHJpbmdOb2RlLnBhcmVudCA9IHRoaXMub3JpZ2luUGFyZW50O1xyXG4gICAgICAgIHN0cmluZ05vZGUuc2V0UG9zaXRpb24odGhpcy5vcmlnaW5Qb3MpO1xyXG4gICAgICAgIHN0cmluZ05vZGUuc2V0U2libGluZ0luZGV4KHRoaXMub3JpZ2luU2libGluZ0luZGV4KTtcclxuICAgICAgICBzdHJpbmdOb2RlLmdldENvbXBvbmVudChcIkl0ZW1TdHJpbmdcIikub3JpZ2luU2libGluZ0luZGV4ID0gdGhpcy5vcmlnaW5TaWJsaW5nSW5kZXhcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbGVhc2VEcmFnKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRQbGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZXNldFRvdWNoU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0VG91Y2hTdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRvdWNoSWQgPSAtMTtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRQb3MgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaXNPbGRTdHJpbmdCb3QgPSBudWxsXHJcbiAgICBvblN0cmluZ1NlbGVjdGVkKHN0cmluZ05vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RyaW5ncy5pbmRleE9mKHN0cmluZ05vZGUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0U3RyaW5nQm90LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3RTdHJpbmdCb3QuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLnN0cmluZ3NbaW5kZXhdKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdHJpbmdzW2luZGV4XS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLnN0cmluZ3NbaW5kZXhdLmdldENvbXBvbmVudChcIkl0ZW1TdHJpbmdcIikudGFnO1xyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLmlkU3RyaW5nID0gaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyaW5nc1tpbmRleF0ucG9zaXRpb24gPSB0aGlzLnN0cmluZ3NbaW5kZXhdLmdldENvbXBvbmVudChcIkl0ZW1TdHJpbmdcIikubG9jYWxQb3M7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyaW5nc1tpbmRleF0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5zdHJpbmdzW2luZGV4XS5zZXRTaWJsaW5nSW5kZXgodGhpcy5zdHJpbmdzW2luZGV4XS5nZXRDb21wb25lbnQoXCJJdGVtU3RyaW5nXCIpLm9yaWdpblNpYmxpbmdJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnN0cmluZ3Muc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdFN0cmluZ0JvdC5jaGlsZHJlbltpZF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPbGRTdHJpbmdCb3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleE9sZCA9IHRoaXMuaXNPbGRTdHJpbmdCb3QuZ2V0Q29tcG9uZW50KFwiSXRlbVN0cmluZ1wiKS50YWc7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleE9sZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmdzW2luZGV4T2xkXS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNPbGRTdHJpbmdCb3QgPSB0aGlzLmxpc3RTdHJpbmdCb3QuY2hpbGRyZW5baWRdXHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuT2suc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Pay5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bk9rKS50bygwLjMsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KCdzZWxlY3Qtc3RyaW5nJywgc3RyaW5nTm9kZSk7XHJcbiAgICB9XHJcbiAgICBpc0ZpcnN0ID0gZmFsc2VcclxuICAgIE9mZlRPdWNoKCl7XHJcbiAgICAgICAgY29uc3QgdG91Y2hOb2RlID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7ICAgXHJcbiAgICB9XHJcbn1cclxuIl19