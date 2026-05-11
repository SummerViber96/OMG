
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/countDownTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '503f30rkQVF87lkO+hKx7mV', 'countDownTime');
// scripts/countDownTime.ts

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
        _this.countDownNode = null; // node chứa label countdown
        _this.lbCountDown = null;
        _this.btnBeat = null;
        _this.fillSprite = null;
        _this.fillNode = null;
        _this.soundCownDown = null;
        _this.gamePlay = null;
        _this.currentNumber = 3;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Gym3");
        cc.audioEngine.play(this.soundCownDown, false, 1);
        this.showCountDown();
    };
    NewClass.prototype.showCountDown = function () {
        this.btnBeat.active = false;
        this.countDownNode.active = true;
        this.currentNumber = 3;
        this.playStep();
    };
    NewClass.prototype.playStep = function () {
        var _this = this;
        // update số
        this.lbCountDown.string = this.currentNumber.toString();
        if (this.currentNumber == 0) {
            this.lbCountDown.string = "GO";
            this.lbCountDown.fontSize = 200;
        }
        // reset fill
        this.fillSprite.fillRange = 1;
        // pop số
        this.playCountAnim();
        // tween fill trong 1 giây
        cc.tween(this.fillSprite)
            .to(1, {
            fillRange: 0
        })
            .call(function () {
            _this.currentNumber--;
            // hết countdown
            if (_this.currentNumber < 0) {
                _this.countDownNode.active = false;
                _this.gamePlay.startMonster();
                return;
            }
            // chạy tiếp số tiếp theo
            _this.playStep();
        })
            .start();
    };
    NewClass.prototype.playCountAnim = function () {
        this.lbCountDown.node.scale = 0;
        cc.tween(this.lbCountDown.node)
            .to(0.2, { scale: 1.1 }, {
            easing: "backOut"
        })
            .to(0.1, { scale: 1 })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "countDownNode", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCountDown", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnBeat", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillSprite", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "fillNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCownDown", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvdW50RG93blRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyRkM7UUF4RkcsbUJBQWEsR0FBWSxJQUFJLENBQUMsQ0FBQyw0QkFBNEI7UUFHM0QsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFHN0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLG1CQUFhLEdBQWlCLElBQUksQ0FBQTtRQUNsQyxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRVIsbUJBQWEsR0FBRyxDQUFDLENBQUM7O0lBd0U5QixDQUFDO0lBdEVHLHdCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBRUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTVCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFBQSxpQkF1Q0M7UUFyQ0csWUFBWTtRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEQsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFBO1NBRTVCO1FBQ0QsYUFBYTtRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUU5QixTQUFTO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLDBCQUEwQjtRQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDcEIsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNILFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQzthQUNELElBQUksQ0FBQztZQUVGLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUVyQixnQkFBZ0I7WUFDaEIsSUFBSSxLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtnQkFFeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUVsQyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUU3QixPQUFPO2FBQ1Y7WUFFRCx5QkFBeUI7WUFDekIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXBCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBRUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVoQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQzFCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckIsTUFBTSxFQUFFLFNBQVM7U0FDcEIsQ0FBQzthQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDckIsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXZGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNZO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1U7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDVztJQWhCakIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJGNUI7SUFBRCxlQUFDO0NBM0ZELEFBMkZDLENBM0ZxQyxFQUFFLENBQUMsU0FBUyxHQTJGakQ7a0JBM0ZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb3VudERvd25Ob2RlOiBjYy5Ob2RlID0gbnVsbDsgLy8gbm9kZSBjaOG7qWEgbGFiZWwgY291bnRkb3duXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJDb3VudERvd246IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bkJlYXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgZmlsbFNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZpbGxOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ293bkRvd246IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBnYW1lUGxheSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGN1cnJlbnROdW1iZXIgPSAzO1xuXG4gICAgc3RhcnQoKSB7XG5cbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkd5bTNcIik7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvd25Eb3duLCBmYWxzZSwgMSlcbiAgICAgICAgdGhpcy5zaG93Q291bnREb3duKCk7XG4gICAgfVxuXG4gICAgc2hvd0NvdW50RG93bigpIHtcblxuICAgICAgICB0aGlzLmJ0bkJlYXQuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jb3VudERvd25Ob2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50TnVtYmVyID0gMztcblxuICAgICAgICB0aGlzLnBsYXlTdGVwKCk7XG4gICAgfVxuXG4gICAgcGxheVN0ZXAoKSB7XG5cbiAgICAgICAgLy8gdXBkYXRlIHPhu5FcbiAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSB0aGlzLmN1cnJlbnROdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE51bWJlciA9PSAwKSB7XG4gICAgICAgIHRoaXMubGJDb3VudERvd24uc3RyaW5nID0gXCJHT1wiXG4gICAgICAgIHRoaXMubGJDb3VudERvd24uZm9udFNpemU9MjAwXG5cbiAgICAgICAgfVxuICAgICAgICAvLyByZXNldCBmaWxsXG4gICAgICAgIHRoaXMuZmlsbFNwcml0ZS5maWxsUmFuZ2UgPSAxO1xuXG4gICAgICAgIC8vIHBvcCBz4buRXG4gICAgICAgIHRoaXMucGxheUNvdW50QW5pbSgpO1xuXG4gICAgICAgIC8vIHR3ZWVuIGZpbGwgdHJvbmcgMSBnacOieVxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGxTcHJpdGUpXG4gICAgICAgICAgICAudG8oMSwge1xuICAgICAgICAgICAgICAgIGZpbGxSYW5nZTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlci0tO1xuXG4gICAgICAgICAgICAgICAgLy8gaOG6v3QgY291bnRkb3duXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE51bWJlciA8IDApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93bk5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5zdGFydE1vbnN0ZXIoKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2jhuqF5IHRp4bq/cCBz4buRIHRp4bq/cCB0aGVvXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5U3RlcCgpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcGxheUNvdW50QW5pbSgpIHtcblxuICAgICAgICB0aGlzLmxiQ291bnREb3duLm5vZGUuc2NhbGUgPSAwO1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGJDb3VudERvd24ubm9kZSlcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEuMSB9LCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IDEgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==