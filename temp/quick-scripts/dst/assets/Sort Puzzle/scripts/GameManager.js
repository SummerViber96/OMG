
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Sort Puzzle/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa1f8ut8jBF9ZZNiAAr89E0', 'GameManager');
// Sort Puzzle/scripts/GameManager.ts

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
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cardPrefab = null;
        _this.board = null;
        /*
            dữ liệu:
    
            [
                [
                    "singer",
                    "astronaut",
                    "police"
                ],
    
                [
                    "farmer",
                    "judge",
                    "singer"
                ]
            ]
    
        */
        _this.leftData = [
            ["singer", "astronaut", "police"],
            ["farmer", "judge", "singer"],
            ["astronaut", "farmer", "judge"],
            ["police", "singer", "astronaut"]
        ];
        _this.rightData = [
            ["judge", "police", "astronaut"],
            ["singer", "astronaut", "farmer"],
            ["judge", "police", "farmer"],
            ["singer", "judge", "police"]
        ];
        return _this;
    }
    GameManager.prototype.start = function () {
        this.spawnBoard();
    };
    GameManager.prototype.spawnBoard = function () {
        for (var i = 0; i < this.board.childrenCount; i++) {
            var row = this.board.children[i];
            var leftStack = row.getChildByName("LeftStack");
            var rightStack = row.getChildByName("RightStack");
            this.spawnStack(leftStack, this.leftData[i]);
            this.spawnStack(rightStack, this.rightData[i]);
        }
    };
    GameManager.prototype.spawnStack = function (parent, data) {
        parent.removeAllChildren();
        for (var i = 0; i < data.length; i++) {
            var type = data[i];
            var card = cc.instantiate(this.cardPrefab);
            parent.addChild(card);
            card.y = i * 18;
            var cardComp = card.getComponent("Card");
            cardComp.cardType = type;
            this.setCardVisual(card, type);
        }
        parent.getComponent("CardStack").setup();
    };
    GameManager.prototype.setCardVisual = function (card, type) {
        // let label = card.getChildByName("Front")
        //     .getChildByName("Label")
        //     .getComponent(cc.Label);
        // label.string = type;
        // TODO:
        // set avatar sprite theo type
    };
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "cardPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "board", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXEdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBdUdDO1FBcEdHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBaUJFO1FBRUYsY0FBUSxHQUFHO1lBQ1AsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQztZQUNqQyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1lBQzdCLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7WUFDaEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQztTQUNwQyxDQUFDO1FBRUYsZUFBUyxHQUFHO1lBQ1IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQztZQUNoQyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDO1lBQ2pDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7WUFDN0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztTQUNoQyxDQUFDOztJQWdFTixDQUFDO0lBOURHLDJCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFFSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFL0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFakMsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVoRCxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRWxELElBQUksQ0FBQyxVQUFVLENBQ1gsU0FBUyxFQUNULElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQ25CLENBQUM7WUFFRixJQUFJLENBQUMsVUFBVSxDQUNYLFVBQVUsRUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUNwQixDQUFDO1NBQ0w7SUFDTCxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLE1BQWUsRUFBRSxJQUFjO1FBRXRDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRWxDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUUzQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVoQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXpDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXpCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLElBQWEsRUFBRSxJQUFZO1FBRXJDLDJDQUEyQztRQUMzQywrQkFBK0I7UUFDL0IsK0JBQStCO1FBRS9CLHVCQUF1QjtRQUV2QixRQUFRO1FBQ1IsOEJBQThCO0lBQ2xDLENBQUM7SUFuR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNJO0lBTkwsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXVHL0I7SUFBRCxrQkFBQztDQXZHRCxBQXVHQyxDQXZHd0MsRUFBRSxDQUFDLFNBQVMsR0F1R3BEO2tCQXZHb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNhcmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2FyZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLypcclxuICAgICAgICBk4buvIGxp4buHdTpcclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBcInNpbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJhc3Ryb25hdXRcIixcclxuICAgICAgICAgICAgICAgIFwicG9saWNlXCJcclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFwiZmFybWVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImp1ZGdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpbmdlclwiXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdXHJcblxyXG4gICAgKi9cclxuXHJcbiAgICBsZWZ0RGF0YSA9IFtcclxuICAgICAgICBbXCJzaW5nZXJcIiwgXCJhc3Ryb25hdXRcIiwgXCJwb2xpY2VcIl0sXHJcbiAgICAgICAgW1wiZmFybWVyXCIsIFwianVkZ2VcIiwgXCJzaW5nZXJcIl0sXHJcbiAgICAgICAgW1wiYXN0cm9uYXV0XCIsIFwiZmFybWVyXCIsIFwianVkZ2VcIl0sXHJcbiAgICAgICAgW1wicG9saWNlXCIsIFwic2luZ2VyXCIsIFwiYXN0cm9uYXV0XCJdXHJcbiAgICBdO1xyXG5cclxuICAgIHJpZ2h0RGF0YSA9IFtcclxuICAgICAgICBbXCJqdWRnZVwiLCBcInBvbGljZVwiLCBcImFzdHJvbmF1dFwiXSxcclxuICAgICAgICBbXCJzaW5nZXJcIiwgXCJhc3Ryb25hdXRcIiwgXCJmYXJtZXJcIl0sXHJcbiAgICAgICAgW1wianVkZ2VcIiwgXCJwb2xpY2VcIiwgXCJmYXJtZXJcIl0sXHJcbiAgICAgICAgW1wic2luZ2VyXCIsIFwianVkZ2VcIiwgXCJwb2xpY2VcIl1cclxuICAgIF07XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3Bhd25Cb2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduQm9hcmQoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLmJvYXJkLmNoaWxkcmVuW2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxlZnRTdGFjayA9IHJvdy5nZXRDaGlsZEJ5TmFtZShcIkxlZnRTdGFja1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByaWdodFN0YWNrID0gcm93LmdldENoaWxkQnlOYW1lKFwiUmlnaHRTdGFja1wiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25TdGFjayhcclxuICAgICAgICAgICAgICAgIGxlZnRTdGFjayxcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdERhdGFbaV1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25TdGFjayhcclxuICAgICAgICAgICAgICAgIHJpZ2h0U3RhY2ssXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0RGF0YVtpXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGF3blN0YWNrKHBhcmVudDogY2MuTm9kZSwgZGF0YTogc3RyaW5nW10pIHtcclxuXHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHR5cGUgPSBkYXRhW2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgcGFyZW50LmFkZENoaWxkKGNhcmQpO1xyXG5cclxuICAgICAgICAgICAgY2FyZC55ID0gaSAqIDE4O1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhcmRDb21wID0gY2FyZC5nZXRDb21wb25lbnQoXCJDYXJkXCIpO1xyXG5cclxuICAgICAgICAgICAgY2FyZENvbXAuY2FyZFR5cGUgPSB0eXBlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRDYXJkVmlzdWFsKGNhcmQsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyZW50LmdldENvbXBvbmVudChcIkNhcmRTdGFja1wiKS5zZXR1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmRWaXN1YWwoY2FyZDogY2MuTm9kZSwgdHlwZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIC8vIGxldCBsYWJlbCA9IGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJGcm9udFwiKVxyXG4gICAgICAgIC8vICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKVxyXG4gICAgICAgIC8vICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgLy8gbGFiZWwuc3RyaW5nID0gdHlwZTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzpcclxuICAgICAgICAvLyBzZXQgYXZhdGFyIHNwcml0ZSB0aGVvIHR5cGVcclxuICAgIH1cclxufSJdfQ==