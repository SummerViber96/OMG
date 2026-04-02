
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cooking/ietm/cusMission.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2147a0Ce3ZCdIsZ8wX2Vtd8', 'cusMission');
// cooking/ietm/cusMission.ts

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
        _this.soundHappy = null;
        _this.soundAngry = null;
        _this.soundAngry2 = null;
        _this.dau = false;
        _this.socola = false;
        _this.count = [];
        _this.order = [];
        _this.lbCountSc = null;
        _this.lbCountDau = null;
        _this.pop = null;
        _this.anim = null;
        _this.doneNode = null;
        _this.fillBar = null;
        _this.fillYellow = null;
        _this.fillRed = null;
        _this.timeWaiting = 30;
        _this.isEnd = false;
        _this.isSuccess = false;
        _this.gamePlay = null;
        _this.timeFill = 60;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("GameDonut");
        // this.loadTime()
    };
    NewClass.prototype.showMission = function () {
        this.pop.getComponent(cc.Animation).play();
        this.loadTime();
    };
    NewClass.prototype.updateItem = function (id) {
        this.doneNode.children[id].active = true;
    };
    NewClass.prototype.updateMission = function (value) {
        var _this = this;
        cc.audioEngine.play(this.gamePlay.soundSellDone, false, 1);
        switch (value) {
            case 0: //dau
                this.count[0]--;
                if (this.count[0] == 0) {
                    this.isEnd = true;
                    this.scheduleOnce(function () {
                        _this.doneNode.active = true;
                    }, 0.3);
                    this.lbCountDau.node.active = false;
                }
                break;
            case 1: //socola
                this.count[1]--;
                if (this.count[1] == 0) {
                    this.isEnd = true;
                    this.scheduleOnce(function () {
                        _this.doneNode2.active = true;
                    }, 0.3);
                    this.lbCountSc.node.active = false;
                    // this.scheduleOnce(() => {
                    // }, 0.4)
                }
                break;
        }
        this.scheduleOnce(function () {
            _this.node.getChildByName("vfx_coin").active = true;
            _this.node.getChildByName("vfx_coin").getComponent(cc.Animation).play();
            _this.pop.getChildByName("right").active = true;
            _this.pop.getChildByName("right").getComponent(cc.Animation).play();
        }, 0.4);
        if (this.count[1] == 0 && this.count[0] == 0) {
            this.end(true);
        }
        globalThis.gold += 50;
    };
    NewClass.prototype.move = function () {
        this.anim.setAnimation(0, "happy", false);
    };
    NewClass.prototype.end = function (value) {
        var _this = this;
        if (this.isSuccess)
            return;
        this.isSuccess = true;
        this.gamePlay.successCus();
        if (value == true) {
            cc.audioEngine.play(this.soundHappy, false, 1);
            this.doneNode.active = true;
            this.doneNode2.active = true;
            this.lbCountDau.node.active = false;
            this.lbCountSc.node.active = false;
            this.anim.setAnimation(0, "happy", false);
            this.pop.getChildByName("right").active = true;
            this.node.getChildByName("happy").active = true;
        }
        else {
            this.unscheduleAllCallbacks();
            this.anim.setAnimation(0, "angry", false);
            this.pop.getChildByName("wrong").active = true;
            this.node.getChildByName("angry").active = true;
        }
        this.scheduleOnce(function () {
            cc.audioEngine.play(_this.gamePlay.soundClosePop, false, 1);
            cc.tween(_this.pop).to(0.3, { scale: 0 }).start();
            _this.anim.setAnimation(0, "walk", true);
            cc.tween(_this.node).to(1, { position: cc.v3(-900, 123.591) }).call(function () {
                _this.node.active = false;
                _this.gamePlay.nextCus(value);
            }).start();
        }, 0.5);
    };
    NewClass.prototype.laugh = function () {
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 0.8);
        }
    };
    NewClass.prototype.update = function (dt) {
        // this.lbCountSc.string = "x" + this.count[1].toString()
        // this.lbCountDau.string = "x" + this.count[0].toString()
    };
    NewClass.prototype.happy = function () {
        var _this = this;
        // let fill = this.fillBar.node.parent
        cc.tween(this.pop).to(0.2, { scale: 0 }).start();
        this.anim.setAnimation(0, "8.happy", false);
        this.scheduleOnce(function () {
            _this.anim.setAnimation(0, "3.buy_idle", true);
        }, 1);
        if (this.soundHappy) {
            cc.audioEngine.play(this.soundHappy, false, 0.8);
        }
    };
    NewClass.prototype.angry = function () {
        this.anim.setAnimation(0, "7.angry_idle", true);
    };
    NewClass.prototype.checkSell = function (donut) {
        var donutComp = donut.getComponent("donut");
        var check = false;
        if (this.socola && this.count[1] > 0) {
            if (donutComp.isSocola) {
                this.updateMission(1);
                check = true;
            }
        }
        if (this.dau) {
            if (donutComp.isDau && this.count[0] > 0) {
                this.updateMission(0);
                check = true;
            }
        }
        if (check == false) {
            this.isEnd = true;
            this.end(false);
            cc.audioEngine.play(this.gamePlay.soundWrong, false, 0.8);
        }
    };
    NewClass.prototype.loadTime = function () {
        var _this = this;
        cc.tween(this.fillBar).to(this.timeWaiting, { fillRange: 0 }).call(function () { }).start();
        this.fillBar.fillRange = 1;
        var changedYellow = false;
        var changedRed = false;
        cc.tween(this.fillBar)
            .to(this.timeWaiting, { fillRange: 0 }, {
            progress: function (start, end, current, ratio) {
                var value = start + (end - start) * ratio;
                _this.fillBar.fillRange = value;
                if (value <= 0.5 && !changedYellow && _this.isSuccess == false) {
                    changedYellow = true;
                    _this.fillBar.spriteFrame = _this.fillYellow;
                    _this.anim.setAnimation(0, "6.angry", true);
                    if (_this.soundAngry) {
                        cc.audioEngine.play(_this.soundAngry, false, 1);
                    }
                }
                if (value <= 0.25 && !changedRed) {
                    changedRed = true;
                    _this.fillBar.spriteFrame = _this.fillRed;
                    _this.anim.setAnimation(0, "7.angry_idle", true);
                    if (_this.soundAngry2 && _this.isSuccess == false) {
                        cc.audioEngine.play(_this.soundAngry2, false, 1);
                    }
                }
                return value;
            }
        }).call(function () {
            //  this.gamePlay.onEndGame(false)   
            var id = _this.gamePlay.getPlace(_this.node);
            _this.gamePlay.enqueueMove(_this.node);
        })
            .start();
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundHappy", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAngry", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundAngry2", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "dau", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "socola", void 0);
    __decorate([
        property([cc.Integer])
    ], NewClass.prototype, "count", void 0);
    __decorate([
        property([cc.Integer])
    ], NewClass.prototype, "order", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCountSc", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCountDau", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "doneNode", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillBar", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "fillYellow", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "fillRed", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "timeWaiting", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29va2luZ1xcaWV0bVxcY3VzTWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9PQztRQWxPRyxnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBO1FBRS9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxTQUFHLEdBQUcsS0FBSyxDQUFBO1FBRVgsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUVmLFdBQUssR0FBRyxFQUFFLENBQUE7UUFFVixXQUFLLEdBQUcsRUFBRSxDQUFBO1FBRVYsZUFBUyxHQUFhLElBQUksQ0FBQTtRQUUxQixnQkFBVSxHQUFhLElBQUksQ0FBQTtRQUUzQixTQUFHLEdBQVksSUFBSSxDQUFBO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFBO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFHeEIsYUFBTyxHQUFjLElBQUksQ0FBQTtRQUV6QixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFHL0IsaUJBQVcsR0FBRyxFQUFFLENBQUE7UUFDaEIsV0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNiLGVBQVMsR0FBRyxLQUFLLENBQUE7UUFDakIsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLGNBQVEsR0FBRyxFQUFFLENBQUE7O0lBOExqQixDQUFDO0lBN0xHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDakUsa0JBQWtCO0lBQ3RCLENBQUM7SUFD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T0FDYSxRQUFRLENBb081QjtJQUFELGVBQUM7Q0FwT0QsQUFvT0MsQ0FwT3FDLEVBQUUsQ0FBQyxTQUFTLEdBb09qRDtrQkFwT29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc291bmRIYXBweTogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNvdW5kQW5ncnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzb3VuZEFuZ3J5MjogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBkYXUgPSBmYWxzZVxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBzb2NvbGEgPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShbY2MuSW50ZWdlcl0pXHJcbiAgICBjb3VudCA9IFtdXHJcbiAgICBAcHJvcGVydHkoW2NjLkludGVnZXJdKVxyXG4gICAgb3JkZXIgPSBbXVxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb3VudFNjOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ291bnREYXU6IGNjLkxhYmVsID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3A6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBhbmltOiBzcC5Ta2VsZXRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9uZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGZpbGxCYXI6IGNjLlNwcml0ZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGZpbGxZZWxsb3c6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGZpbGxSZWQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHRpbWVXYWl0aW5nID0gMzBcclxuICAgIGlzRW5kID0gZmFsc2VcclxuICAgIGlzU3VjY2VzcyA9IGZhbHNlXHJcbiAgICBnYW1lUGxheSA9IG51bGxcclxuICAgIHRpbWVGaWxsID0gNjBcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lRG9udXRcIilcclxuICAgICAgICAvLyB0aGlzLmxvYWRUaW1lKClcclxuICAgIH1cclxuICAgIHNob3dNaXNzaW9uKCkge1xyXG4gICAgICAgIHRoaXMucG9wLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIHRoaXMubG9hZFRpbWUoKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlSXRlbShpZCkge1xyXG4gICAgICAgIHRoaXMuZG9uZU5vZGUuY2hpbGRyZW5baWRdLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVNaXNzaW9uKHZhbHVlKSB7IC8vMTpzb2NvbGEgLy8wOmRhdVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lUGxheS5zb3VuZFNlbGxEb25lLCBmYWxzZSwgMSlcclxuXHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IC8vZGF1XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50WzBdLS1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50WzBdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lTm9kZS5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiQ291bnREYXUubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogLy9zb2NvbGFcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRbMV0tLVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMV0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmVOb2RlMi5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiQ291bnRTYy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSwgMC40KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidmZ4X2NvaW5cIikuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2ZnhfY29pblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcclxuICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMucG9wLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXHJcblxyXG4gICAgICAgIH0sIDAuNClcclxuICAgICAgICBpZiAodGhpcy5jb3VudFsxXSA9PSAwICYmIHRoaXMuY291bnRbMF0gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZCh0cnVlKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2xvYmFsVGhpcy5nb2xkICs9IDUwXHJcblxyXG5cclxuICAgIH1cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImhhcHB5XCIsIGZhbHNlKVxyXG5cclxuICAgIH1cclxuICAgIGVuZCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3VjY2VzcykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNTdWNjZXNzID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuc3VjY2Vzc0N1cygpXHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhhcHB5LCBmYWxzZSwgMSlcclxuICAgICAgICAgICAgdGhpcy5kb25lTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRvbmVOb2RlMi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYkNvdW50RGF1Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGJDb3VudFNjLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcImhhcHB5XCIsIGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLnBvcC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFwcHlcIikuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCJhbmdyeVwiLCBmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5wb3AuZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1wiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImFuZ3J5XCIpLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVQbGF5LnNvdW5kQ2xvc2VQb3AsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnBvcCkudG8oMC4zLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIndhbGtcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtOTAwLCAxMjMuNTkxKSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5uZXh0Q3VzKHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgfSkuc3RhcnQoKVxyXG4gICAgICAgIH0sIDAuNSlcclxuXHJcbiAgICB9XHJcbiAgICBsYXVnaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZEhhcHB5KSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEhhcHB5LCBmYWxzZSwgMC44KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgICAgICAvLyB0aGlzLmxiQ291bnRTYy5zdHJpbmcgPSBcInhcIiArIHRoaXMuY291bnRbMV0udG9TdHJpbmcoKVxyXG4gICAgICAgIC8vIHRoaXMubGJDb3VudERhdS5zdHJpbmcgPSBcInhcIiArIHRoaXMuY291bnRbMF0udG9TdHJpbmcoKVxyXG5cclxuICAgIH1cclxuICAgIGhhcHB5KCkge1xyXG4gICAgICAgIC8vIGxldCBmaWxsID0gdGhpcy5maWxsQmFyLm5vZGUucGFyZW50XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5wb3ApLnRvKDAuMiwgeyBzY2FsZTogMCB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIjguaGFwcHlcIiwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiMy5idXlfaWRsZVwiLCB0cnVlKVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgaWYgKHRoaXMuc291bmRIYXBweSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRIYXBweSwgZmFsc2UsIDAuOClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgYW5ncnkoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnNldEFuaW1hdGlvbigwLCBcIjcuYW5ncnlfaWRsZVwiLCB0cnVlKVxyXG5cclxuICAgIH1cclxuICAgIGNoZWNrU2VsbChkb251dCkge1xyXG4gICAgICAgIGxldCBkb251dENvbXAgPSBkb251dC5nZXRDb21wb25lbnQoXCJkb251dFwiKVxyXG4gICAgICAgIGxldCBjaGVjayA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuc29jb2xhICYmIHRoaXMuY291bnRbMV0gPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChkb251dENvbXAuaXNTb2NvbGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWlzc2lvbigxKVxyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF1KSB7XHJcbiAgICAgICAgICAgIGlmIChkb251dENvbXAuaXNEYXUgJiYgdGhpcy5jb3VudFswXSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWlzc2lvbigwKVxyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuZW5kKGZhbHNlKVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZVBsYXkuc291bmRXcm9uZywgZmFsc2UsIDAuOClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkVGltZSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmZpbGxCYXIpLnRvKHRoaXMudGltZVdhaXRpbmcsIHsgZmlsbFJhbmdlOiAwIH0pLmNhbGwoKCkgPT4geyB9KS5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IDE7XHJcbiAgICAgICAgbGV0IGNoYW5nZWRZZWxsb3cgPSBmYWxzZTtcclxuICAgICAgICBsZXQgY2hhbmdlZFJlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbEJhcilcclxuICAgICAgICAgICAgLnRvKHRoaXMudGltZVdhaXRpbmcsIHsgZmlsbFJhbmdlOiAwIH0sIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiAoc3RhcnQsIGVuZCwgY3VycmVudCwgcmF0aW8pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLmZpbGxSYW5nZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPD0gMC41ICYmICFjaGFuZ2VkWWVsbG93ICYmIHRoaXMuaXNTdWNjZXNzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRZZWxsb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGxCYXIuc3ByaXRlRnJhbWUgPSB0aGlzLmZpbGxZZWxsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5zZXRBbmltYXRpb24oMCwgXCI2LmFuZ3J5XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZEFuZ3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRBbmdyeSwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPD0gMC4yNSAmJiAhY2hhbmdlZFJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkUmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQmFyLnNwcml0ZUZyYW1lID0gdGhpcy5maWxsUmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2V0QW5pbWF0aW9uKDAsIFwiNy5hbmdyeV9pZGxlXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRBbmdyeTIgJiYgdGhpcy5pc1N1Y2Nlc3MgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEFuZ3J5MiwgZmFsc2UsIDEpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gIHRoaXMuZ2FtZVBsYXkub25FbmRHYW1lKGZhbHNlKSAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5nYW1lUGxheS5nZXRQbGFjZSh0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmVucXVldWVNb3ZlKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=