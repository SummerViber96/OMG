
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bracelet2/script/boxitem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3210jzbb9NK7EBmWAgxg4Y', 'boxitem');
// Bracelet2/script/boxitem.ts

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
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.gamePlay = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
    };
    NewClass.prototype.btn_click = function () {
        this.node.getComponent(cc.Animation).play();
        this.gamePlay.clickItem(this.node, this.tag);
    };
    NewClass.prototype.show = function () {
        var _this = this;
        this.node.getChildByName("vong").children[0].scale = 0;
        this.node.getChildByName("vong").active = true;
        this.scheduleOnce(function () {
            _this.gamePlay.moveToVong(_this.node);
        }, 0.8);
    };
    NewClass.prototype.cutEff = function () {
        cc.audioEngine.play(this.gamePlay.soundCut, false, 1);
    };
    NewClass.prototype.btn_cut = function () {
        var _this = this;
        this.gamePlay.hand2.active = false;
        this.node.getComponent(cc.Button).enabled = false;
        cc.audioEngine.play(this.gamePlay.soundClick, false, 1);
        cc.tween(this.node).to(0.4, { position: cc.v3(0, 1114) }).call(function () {
            _this.node.getComponent(cc.Animation).play("box_cut");
        }).start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXQyXFxzY3JpcHRcXGJveGl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1Q0M7UUFwQ0csU0FBRyxHQUFHLENBQUMsQ0FBQTtRQUVQLHdCQUF3QjtRQUV4QixlQUFlO1FBQ2YsY0FBUSxHQUFHLElBQUksQ0FBQzs7UUE4QmhCLGlCQUFpQjtJQUNyQixDQUFDO0lBOUJHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDckUsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUNELHVCQUFJLEdBQUo7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUE7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFbkMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFFekQsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUE7UUFDL0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUUxRCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXBELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQWxDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lDQUNkO0lBSFUsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVDNUI7SUFBRCxlQUFDO0NBdkNELEFBdUNDLENBdkNxQyxFQUFFLENBQUMsU0FBUyxHQXVDakQ7a0JBdkNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGFnID0gMFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgZ2FtZVBsYXkgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWVEb251dFwiKVxyXG4gICAgfVxyXG4gICAgYnRuX2NsaWNrKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmNsaWNrSXRlbSh0aGlzLm5vZGUsdGhpcy50YWcpXHJcbiAgICB9XHJcbiAgICBzaG93KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidm9uZ1wiKS5jaGlsZHJlblswXS5zY2FsZT0wXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidm9uZ1wiKS5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheS5tb3ZlVG9Wb25nKHRoaXMubm9kZSlcclxuXHJcbiAgICAgICAgfSwwLjgpXHJcbiAgICB9XHJcbiAgICBjdXRFZmYoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRDdXQsIGZhbHNlLCAxKVxyXG5cclxuICAgIH1cclxuICAgIGJ0bl9jdXQoKXtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmhhbmQyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQ9ZmFsc2VcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRDbGljaywgZmFsc2UsIDEpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjQse3Bvc2l0aW9uOmNjLnYzKDAsMTExNCl9KS5jYWxsKCgpPT57XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm94X2N1dFwiKVxyXG5cclxuICAgICAgICB9KS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==