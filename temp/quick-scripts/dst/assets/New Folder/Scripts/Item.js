
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/New Folder/Scripts/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '117cd3l+o5DXZvEnu2ZoU8Q', 'Item');
// New Folder/Scripts/Item.ts

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
        _this.tag = 0;
        _this.gameplay = null;
        _this.width = 0;
        _this.height = 0;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gameplay = cc.Canvas.instance.node.getComponent("GameDonut");
        this.height = this.node.children[1].height;
        this.width = this.node.children[1].width;
    };
    NewClass.prototype.click = function () {
        var _this = this;
        if (this.gameplay.isMoving)
            return;
        var check = this.gameplay.checkMission(this.tag, this.node);
        cc.audioEngine.play(this.gameplay.soundTrans, false, 0.5);
        if (check) {
            var pos = check.parent.convertToWorldSpaceAR(check.position);
            pos = this.node.parent.convertToNodeSpaceAR(pos);
            this.node.stopAllActions();
            this.node.getComponent(cc.Button).enabled = false;
            var mag = (pos.x > this.node.x) ? -50 : 50;
            var startPos = cc.v2(this.node.x, this.node.y);
            var endPos = cc.v2(pos.x, pos.y);
            var midPos = cc.v2(endPos.x + mag, endPos.y + 200);
            cc.tween(this.node).to(0.6, { scale: 0.5 }).start();
            cc.tween(this.node).bezierTo(0.6, startPos, midPos, endPos).call(function () {
                _this.node.destroy();
            }).start();
            // cc.tween(this.node).to(0.6, { position: pos, scale: 0.8 }).call(() => {
            //     this.node.destroy()
            // }).start()
        }
    };
    NewClass.prototype.loadGray = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.setGray(_this.node.children[1]);
        }, 0.2);
    };
    NewClass.prototype.setGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', node.getComponent(cc.Sprite)));
        this.node.children[1].height = this.height;
        this.node.children[1].width = this.width;
    };
    NewClass.prototype.offGray = function (node) {
        node.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-sprite', node.getComponent(cc.Sprite)));
        this.node.children[1].height = this.height;
        this.node.children[1].width = this.width;
    };
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTmV3IEZvbGRlclxcU2NyaXB0c1xcSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtEQztRQWhERyxTQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsWUFBTSxHQUFHLENBQUMsQ0FBQTs7UUE0Q1YsaUJBQWlCO0lBQ3JCLENBQUM7SUE1Q0csd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtZQUFFLE9BQU07UUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3pELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0QsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7WUFDakQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7WUFDMUMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1lBQ2xELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNuRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM3RCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ1YsMEVBQTBFO1lBQzFFLDBCQUEwQjtZQUMxQixhQUFhO1NBQ2hCO0lBQ0wsQ0FBQztJQUNELDJCQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ1gsQ0FBQztJQUNELDBCQUFPLEdBQVAsVUFBUSxJQUFJO1FBRVIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUM1QyxDQUFDO0lBQ0QsMEJBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3SCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUM1QyxDQUFDO0lBOUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7eUNBQ2Q7SUFGVSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0Q1QjtJQUFELGVBQUM7Q0FsREQsQUFrREMsQ0FsRHFDLEVBQUUsQ0FBQyxTQUFTLEdBa0RqRDtrQkFsRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHRhZyA9IDBcclxuICAgIGdhbWVwbGF5ID0gbnVsbDtcclxuICAgIHdpZHRoID0gMDtcclxuICAgIGhlaWdodCA9IDBcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZXBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIilcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubm9kZS5jaGlsZHJlblsxXS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubm9kZS5jaGlsZHJlblsxXS53aWR0aDtcclxuICAgIH1cclxuICAgIGNsaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVwbGF5LmlzTW92aW5nKSByZXR1cm5cclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLmdhbWVwbGF5LmNoZWNrTWlzc2lvbih0aGlzLnRhZywgdGhpcy5ub2RlKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lcGxheS5zb3VuZFRyYW5zLCBmYWxzZSwgMC41KVxyXG4gICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gY2hlY2sucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjaGVjay5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGxldCBtYWcgPSAocG9zLnggPiB0aGlzLm5vZGUueCkgPyAtNTAgOiA1MFxyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52Mih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIocG9zLngsIHBvcy55KTtcclxuICAgICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKGVuZFBvcy54ICsgbWFnLCBlbmRQb3MueSArIDIwMClcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjYsIHsgc2NhbGU6IDAuNSB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuYmV6aWVyVG8oMC42LCBzdGFydFBvcywgbWlkUG9zLCBlbmRQb3MpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC42LCB7IHBvc2l0aW9uOiBwb3MsIHNjYWxlOiAwLjggfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIC8vIH0pLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkR3JheSgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0R3JheSh0aGlzLm5vZGUuY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgfSwgMC4yKVxyXG4gICAgfVxyXG4gICAgc2V0R3JheShub2RlKSB7XHJcblxyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1ncmF5LXNwcml0ZScsIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKTtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uaGVpZ2h0ID0gdGhpcy5oZWlnaHRcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0ud2lkdGggPSB0aGlzLndpZHRoXHJcbiAgICB9XHJcbiAgICBvZmZHcmF5KG5vZGUpIHtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5oZWlnaHQgPSB0aGlzLmhlaWdodFxyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS53aWR0aCA9IHRoaXMud2lkdGhcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19