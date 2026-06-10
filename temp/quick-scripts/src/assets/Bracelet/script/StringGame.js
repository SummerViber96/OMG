"use strict";
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