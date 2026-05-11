
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
        _this.anim = null;
        _this.gameplay = null;
        _this.width = 0;
        _this.height = 0;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gameplay = cc.Canvas.instance.node.getComponent("GameDonut");
        // this.height = this.node.children[1].height;
        // this.width = this.node.children[1].width;
    };
    NewClass.prototype.loadItem = function (tag) {
        this.tag = tag;
        switch (tag) {
            case 0:
                this.anim.setAnimation(0, "lv2_Base");
                break;
            case 1:
                this.anim.setAnimation(0, "lv2_Base_t2");
                break;
            case 2:
                this.anim.setAnimation(0, "lv2_Base_t1");
                break;
        }
    };
    // btn_sell(){
    //     this.gameplay.btn_sell(this.node, this.tag)
    // }
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
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9OZXcgRm9sZGVyL1NjcmlwdHMvSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXFFQztRQW5FRyxTQUFHLEdBQUcsQ0FBQyxDQUFBO1FBRVAsVUFBSSxHQUFnQixJQUFJLENBQUE7UUFDeEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsWUFBTSxHQUFHLENBQUMsQ0FBQTs7UUE2RFYsaUJBQWlCO0lBQ3JCLENBQUM7SUE3REcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNqRSw4Q0FBOEM7UUFDOUMsNENBQTRDO0lBQ2hELENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsR0FBRztRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsUUFBUSxHQUFHLEVBQUU7WUFDVCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFBO2dCQUNyQyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQTtnQkFDeEMsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUE7Z0JBQ3hDLE1BQU07U0FDYjtJQUNMLENBQUM7SUFDRCxjQUFjO0lBQ2Qsa0RB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QUFBO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQzVDLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQzVDLENBQUM7SUFqRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5Q0FDZDtJQUVQO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0U7SUFKUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUU1QjtJQUFELGVBQUM7Q0FyRUQsQUFxRUMsQ0FyRXFDLEVBQUUsQ0FBQyxTQUFTLEdBcUVqRDtrQkFyRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICB0YWcgPSAwXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGFuaW06IHNwLlNrZWxldG9uID0gbnVsbFxuICAgIGdhbWVwbGF5ID0gbnVsbDtcbiAgICB3aWR0aCA9IDA7XG4gICAgaGVpZ2h0ID0gMFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVwbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZURvbnV0XCIpXG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmhlaWdodDtcbiAgICAgICAgLy8gdGhpcy53aWR0aCA9IHRoaXMubm9kZS5jaGlsZHJlblsxXS53aWR0aDtcbiAgICB9XG4gICAgbG9hZEl0ZW0odGFnKSB7XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJsdjJfQmFzZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJsdjJfQmFzZV90MlwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJsdjJfQmFzZV90MVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGJ0bl9zZWxsKCl7XG4gICAgLy8gICAgIHRoaXMuZ2FtZXBsYXkuYnRuX3NlbGwodGhpcy5ub2RlLCB0aGlzLnRhZylcbiAgICAvLyB9XG4gICAgY2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVwbGF5LmlzTW92aW5nKSByZXR1cm5cbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5nYW1lcGxheS5jaGVja01pc3Npb24odGhpcy50YWcsIHRoaXMubm9kZSlcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVwbGF5LnNvdW5kVHJhbnMsIGZhbHNlLCAwLjUpXG4gICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgICAgbGV0IHBvcyA9IGNoZWNrLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2hlY2sucG9zaXRpb24pO1xuICAgICAgICAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICAgICAgbGV0IG1hZyA9IChwb3MueCA+IHRoaXMubm9kZS54KSA/IC01MCA6IDUwXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52Mih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKHBvcy54LCBwb3MueSk7XG4gICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoZW5kUG9zLnggKyBtYWcsIGVuZFBvcy55ICsgMjAwKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjYsIHsgc2NhbGU6IDAuNSB9KS5zdGFydCgpXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLmJlemllclRvKDAuNiwgc3RhcnRQb3MsIG1pZFBvcywgZW5kUG9zKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNiwgeyBwb3NpdGlvbjogcG9zLCBzY2FsZTogMC44IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KClcbiAgICAgICAgICAgIC8vIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkR3JheSgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRHcmF5KHRoaXMubm9kZS5jaGlsZHJlblsxXSlcbiAgICAgICAgfSwgMC4yKVxuICAgIH1cbiAgICBzZXRHcmF5KG5vZGUpIHtcblxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5oZWlnaHQgPSB0aGlzLmhlaWdodFxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0ud2lkdGggPSB0aGlzLndpZHRoXG4gICAgfVxuICAgIG9mZkdyYXkobm9kZSkge1xuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtc3ByaXRlJywgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uaGVpZ2h0ID0gdGhpcy5oZWlnaHRcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLndpZHRoID0gdGhpcy53aWR0aFxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19