
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MR_Decor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f788vUAzhDkpEx4DQ8efSh', 'MR_Decor');
// scripts/MR_Decor.ts

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
        _this.mapNode = null;
        _this.camera3d = null;
        _this.listCard = null;
        _this.guild = null;
        _this.Group1 = null;
        _this.Group2 = null;
        _this.Group3 = null;
        _this.linkToStore = null;
        _this.soundBg = null;
        _this.soundUpgrade = null;
        _this.onEndCard = null;
        _this.miniLogo = null;
        _this.isvertical = false;
        return _this;
    }
    //
    NewClass.prototype.start = function () {
        // window.gameReady && window.gameReady();
        cc.audioEngine.play(this.soundBg, true, 0.8);
    };
    NewClass.prototype.btn_card1 = function () {
        var _this = this;
        this.guild.active = false;
        // for (let child of this.listCard.children) {
        this.listCard.children[0].getComponent(cc.Animation).play("card_off");
        this.listCard.children[1].getComponent(cc.Animation).play("card_off");
        // }
        cc.audioEngine.play(this.soundUpgrade, false, 0.8);
        cc.tween(this.camera3d).to(0.3, { zoomRatio: 0.6 }).call(function () {
            _this.mapNode.getChildByName("shadow").active = false;
            for (var i = 1; i < _this.mapNode.childrenCount; i++) {
                var child = _this.mapNode.children[i];
                child.position = child.position.add(cc.v3(0, 8, 0));
                child.active = true;
                var delay = 0;
                if (i < 4) {
                    delay = 0.1;
                }
                if (i < 2) {
                    delay = 0.15;
                }
                cc.tween(child).delay(delay).by(0.3, { position: cc.v3(0, -8, -0) }).start();
            }
        }).start();
        this.scheduleOnce(function () {
            _this.onStep2();
        }, 1);
    };
    NewClass.prototype.btn_card2 = function () {
        var _this = this;
        this.guild.active = false;
        cc.audioEngine.play(this.soundUpgrade, false, 0.8);
        this.listCard.children[2].getComponent(cc.Animation).play("card_off");
        this.listCard.children[3].getComponent(cc.Animation).play("card_off");
        this.Group1.getComponent(cc.Animation).play("group1_on");
        this.Group1.getChildByName("shadow").active = false;
        this.scheduleOnce(function () {
            _this.onStep3();
        }, 0.7);
    };
    NewClass.prototype.btn_card3 = function () {
        var _this = this;
        this.guild.active = false;
        this.Group2.getChildByName("shadow").active = false;
        cc.audioEngine.play(this.soundUpgrade, false, 0.8);
        this.listCard.children[4].getComponent(cc.Animation).play("card_off");
        this.listCard.children[5].getComponent(cc.Animation).play("card_off");
        // this.Group1.getComponent(cc.Animation).play("group2_on")
        this.Group2.getComponent(cc.Animation).play("show_group2");
        this.scheduleOnce(function () {
            _this.onStep4();
        }, 0.8);
    };
    NewClass.prototype.onStep2 = function () {
        var _this = this;
        this.Group1.active = true;
        // cc.tween(this.camera3d).to(0.5, { zoomRatio: 1.5 }).start()
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans1");
        this.scheduleOnce(function () {
            _this.listCard.children[2].active = true;
            _this.listCard.children[3].active = true;
        }, 0.8);
        this.scheduleOnce(function () {
            _this.guild.active = true;
        }, 1);
    };
    NewClass.prototype.onStep3 = function () {
        var _this = this;
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans2");
        this.Group2.active = true;
        this.scheduleOnce(function () {
            _this.listCard.children[4].active = true;
            _this.listCard.children[5].active = true;
        }, 0.8);
        this.scheduleOnce(function () {
            _this.guild.active = true;
        }, 1);
    };
    NewClass.prototype.onStep4 = function () {
        var _this = this;
        this.camera3d.node.getComponent(cc.Animation).play("scene_trans3");
        this.Group3.active = true;
        this.scheduleOnce(function () {
            // this.listCard.children[6].active = true;
            // this.listCard.children[7].active = true;
            _this.linkToStore.active = true;
            _this.onEndCard.active = true;
            _this.miniLogo.active = false;
        }, 0.9);
        // this.scheduleOnce(() => {
        //     this.guild.active = true;
        // }, 1)
    };
    NewClass.prototype.update = function (dt) {
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                canvas.fitHeight = false;
                canvas.fitWidth = true;
            }
        }
        else {
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mapNode", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "camera3d", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Group1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Group2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Group3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUpgrade", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "onEndCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "miniLogo", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTVJfRGVjb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4SkM7UUE1SkcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUUzQixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFBO1FBQ3hCLGdCQUFVLEdBQUcsS0FBSyxDQUFBOztJQW9JdEIsQ0FBQztJQWxJRyxFQUFFO0lBRUYsd0JBQUssR0FBTDtRQUNJLDBDQUEwQztRQUUxQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUFBLGlCQTRCQztRQTNCRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUIsOENBQThDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxD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QUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUU1QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFFekIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUU1QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLDJDQUEyQztZQUMzQywyQ0FBMkM7WUFDM0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUM1QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUE7UUFDOUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUVoQyxRQUFRO0lBQ1osQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUV2QixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFFMUI7U0FDSjthQUNJO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFFeEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FHM0I7SUFJTCxDQUFDO0lBM0pEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBekJQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4SjVCO0lBQUQsZUFBQztDQTlKRCxBQThKQyxDQTlKcUMsRUFBRSxDQUFDLFNBQVMsR0E4SmpEO2tCQTlKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFwTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBjYW1lcmEzZDogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q2FyZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ3VpbGQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIEdyb3VwMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgR3JvdXAyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBHcm91cDM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRVcGdyYWRlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG9uRW5kQ2FyZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWluaUxvZ286IGNjLk5vZGUgPSBudWxsXG4gICAgaXN2ZXJ0aWNhbCA9IGZhbHNlXG5cbiAgICAvL1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xuXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJnLCB0cnVlLCAwLjgpXG4gICAgfVxuICAgIGJ0bl9jYXJkMSgpIHtcbiAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0Q2FyZC5jaGlsZHJlbikge1xuICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcbiAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVXBncmFkZSwgZmFsc2UsIDAuOClcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYTNkKS50bygwLjMsIHsgem9vbVJhdGlvOiAwLjYgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFkb3dcIikuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5tYXBOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubWFwTm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjaGlsZC5wb3NpdGlvbiA9IGNoaWxkLnBvc2l0aW9uLmFkZChjYy52MygwLCA4LCAwKSlcbiAgICAgICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IDBcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsYXkgPSAwLjFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5ID0gMC4xNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZCkuZGVsYXkoZGVsYXkpLmJ5KDAuMywgeyBwb3NpdGlvbjogY2MudjMoMCwgLTgsIC0wKSB9KS5zdGFydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblN0ZXAyKClcbiAgICAgICAgfSwgMSlcblxuICAgIH1cbiAgICBidG5fY2FyZDIoKSB7XG4gICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFVwZ3JhZGUsIGZhbHNlLCAwLjgpXG5cbiAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2FyZF9vZmZcIik7XG4gICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bM10uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xuICAgICAgICB0aGlzLkdyb3VwMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZ3JvdXAxX29uXCIpXG4gICAgICAgIHRoaXMuR3JvdXAxLmdldENoaWxkQnlOYW1lKFwic2hhZG93XCIpLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TdGVwMygpXG4gICAgICAgIH0sIDAuNylcbiAgICB9XG4gICAgYnRuX2NhcmQzKCkge1xuICAgICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLkdyb3VwMi5nZXRDaGlsZEJ5TmFtZShcInNoYWRvd1wiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRVcGdyYWRlLCBmYWxzZSwgMC44KVxuXG4gICAgICAgIHRoaXMubGlzdENhcmQuY2hpbGRyZW5bNF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImNhcmRfb2ZmXCIpO1xuICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29mZlwiKTtcbiAgICAgICAgLy8gdGhpcy5Hcm91cDEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImdyb3VwMl9vblwiKVxuICAgICAgICB0aGlzLkdyb3VwMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic2hvd19ncm91cDJcIilcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU3RlcDQoKVxuICAgICAgICB9LCAwLjgpXG4gICAgfVxuICAgIG9uU3RlcDIoKSB7XG4gICAgICAgIHRoaXMuR3JvdXAxLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jYW1lcmEzZCkudG8oMC41LCB7IHpvb21SYXRpbzogMS41IH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5jYW1lcmEzZC5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzY2VuZV90cmFuczFcIilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5saXN0Q2FyZC5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIH0sIDAuOClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIH0sIDEpXG4gICAgfVxuICAgIG9uU3RlcDMoKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhM2Qubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic2NlbmVfdHJhbnMyXCIpXG4gICAgICAgIHRoaXMuR3JvdXAyLmFjdGl2ZSA9IHRydWVcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgfSwgMC44KVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgfSwgMSlcbiAgICB9XG4gICAgb25TdGVwNCgpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEzZC5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzY2VuZV90cmFuczNcIilcbiAgICAgICAgdGhpcy5Hcm91cDMuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzZdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzddLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRW5kQ2FyZC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLm1pbmlMb2dvLmFjdGl2ZT1mYWxzZVxuICAgICAgICB9LCAwLjkpXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAvLyB9LCAxKVxuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcblxuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcblxuXG4gICAgICAgIH1cblxuXG5cbiAgICB9XG59XG4iXX0=